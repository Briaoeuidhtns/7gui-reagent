(ns gui.modal
  (:require
   [reagent.core :as r]))

(def modal-layer 10)

(defn overlay
  [on-click & children]
  [:div {:style {:position "fixed"
                 :top 0
                 :left 0
                 :width "100%"
                 :height "100%"
                 :z-index modal-layer}
         :on-click on-click}
   children])

(defn contextmenu-item
  [label on-click]
  [:a.entry {:href "#" :on-click (fn [e] (.preventDefault e) (on-click e))}
   label])

(def contextmenu-state (r/atom nil))

(defn on-context-menu
  [& entries]
  (fn [e]
    (.preventDefault e)
    (let [x (.-pageX e)
          y (.-pageY e)]
      (reset! contextmenu-state {:entries entries :position [x y]}))))

(defn close-context-menu! [] (reset! contextmenu-state nil))

(defn contextmenu
  []
  (when-let [{[x y] :position :keys [entries]} @contextmenu-state]
    [:<>
     [overlay close-context-menu!]
     [:div.context-menu {:style {:left x
                                 :top y
                                 :z-index modal-layer
                                 :position "absolute"
                                 :background-color "white"
                                 :box-shadow "0 4px 8px 0 rgba(0, 0, 0, 0.2)"
                                 :border "solid 1px"}
                         :on-click close-context-menu!}
      [:ul {:style {:list-style "none" :margin 0 :padding 0}}
       (map-indexed (fn [idx el] ^{:key idx} [:li el]) entries)]]]))


(def dialog-state (r/atom nil))
(add-watch dialog-state
           ::on-close
           (fn [_ _ {:keys [on-close]} a] (print a) (when on-close (on-close))))

(defn on-dialog
  [& {:keys [body on-close]}]
  (reset! dialog-state {:body body :on-close on-close}))

(defn close-dialog! [] (reset! dialog-state nil))

(defn dialog
  []
  (when-let [{:keys [body]} @dialog-state]
    [:<>
     [overlay close-dialog!]
     [:div {:style
              {:left "50%" :top "50%" :z-index modal-layer :position "fixed"}}
      [:div.dialog
       {:style {:display "relative"
                :top "-50%"
                :left "-50%"
                :background-color "white"
                :box-shadow "0 4px 8px 0 rgba(0, 0, 0, 0.2)"
                :border "solid 1px"}}
       body]]]))
