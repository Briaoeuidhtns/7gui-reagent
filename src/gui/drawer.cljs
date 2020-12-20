(ns gui.drawer
  (:require
   [reagent.core :as r :refer [rswap!]]
   [reagent.ratom :as ra]
   [gui.undo :as undo]
   [gui.modal :as modal]))

(defn circle-slider
  [radius]
  [:input {:type "range"
           :min 1
           :max 100
           :value @radius
           :on-change (fn [e]
                        (reset! radius (.. e -target -value)))}])

(defn circle
  [state & {:keys [hovered?]}]
  (r/with-let [edit (r/atom false)
               handle-edit (fn []
                             (reset! edit (second @state))
                             (modal/on-dialog :body [circle-slider edit]
                                              :on-close
                                                (fn []
                                                  (rswap! state assoc 1 @edit)
                                                  (reset! edit false))))
               on-context-menu (modal/on-context-menu [modal/contextmenu-item
                                                       "Adjust diameter.."
                                                       handle-edit])]
    (let [[[x y] r] @state]
      [:circle {:cx x
                :cy y
                :r (or @edit
                     r)
                :fill (if hovered?
                        "grey"
                        "none")
                :stroke "black"
                :on-context-menu on-context-menu}])))

(defn offset
  [el]
  (let [dim (.getBoundingClientRect el)] [(.-left dim) (.-top dim)]))

(defn dist
  [[x1 y1] [x2 y2]]
  (let [x (- x1 x2) y (- y1 y2)] (js/Math.sqrt (+ (* x x) (* y y)))))

(defn drawer
  [& {:keys [width height] :or {width 650 height 400}}]
  (r/with-let [canvas (r/atom {:circles [] :mouse-pos [0 0]})
               ;; event target may be a child, but need offset for svg
               !canvas (clojure.core/atom nil)
               circles (r/cursor canvas [:circles])
               hovered-circles
               (ra/reaction (let [m (:mouse-pos @canvas)
                                  cs @circles
                                  idxs (sort-by (fn [idx]
                                                  (let [[c r] (cs idx)
                                                        d (dist m c)]
                                                    (if (< d r) d js/Infinity)))
                                                (range (count cs)))]
                              idxs))

               handle-hover (fn [e]
                              (let [[off-x off-y] (offset @!canvas)]
                                (rswap! canvas
                                        assoc
                                        :mouse-pos
                                        [(- (.-clientX e) off-x)
                                         (- (.-clientY e) off-y)])))
               handle-canvas-click
               (fn [e]
                 (let [[off-x off-y] (offset @!canvas)]
                   (rswap! canvas
                           update
                           :circles
                           conj
                           [[(- (.-clientX e) off-x) (- (.-clientY e) off-y)]
                            20])))]
    [:div.card {:style {:grid "\"controls\" \"canvas\""}}
     [:div {:style {:justify-self "center"}}
      [undo/component circles]]
     [:svg {:width width
            :height height
            :style {:border "solid black"}
            :on-click handle-canvas-click
            :on-mouse-move handle-hover
            :ref (partial reset! !canvas)}
      (doall (map
               (fn [idx check?]
                 ^{:key idx}
                 [circle
                  (r/cursor circles [idx])
                  :hovered?
                  (and check?
                       (let [[c r] (@circles idx)
                             m (:mouse-pos @canvas)]
                         (< (dist c m) r)))])
               @hovered-circles
               (cons true (repeat false))))]]))
