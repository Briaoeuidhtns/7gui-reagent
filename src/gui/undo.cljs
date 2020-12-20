(ns gui.undo
  (:require
   [reagent.core :as r :refer [partial rswap!]]))

(def ^:dynamic *record?* true)

(defn snapshot! [a] (rswap! a identity))

(defn register!
  [state]
  (let [history (r/atom {:undo [] :redo []})]
    (add-watch state
               ::record!
               (fn [_ _ s _]
                 (when *record?*
                   (rswap! history
                           #(-> %
                                (assoc :redo [])
                                (update :undo conj s))))))
    [state history]))

(defn disable! [[state _]] (remove-watch state ::undo))

(defn can-undo?
  [[_ history]]
  (-> @history
      :undo
      seq
      boolean))

(defn can-redo?
  [[_ history]]
  (-> @history
      :redo
      seq
      boolean))

(defn undo!
  [[state history]]
  (rswap! history
          (fn [h]
            (let [{:keys [undo redo]} h
                  new (peek undo)
                  new-undo (pop undo)
                  new-redo (conj redo @state)]
              (binding [*record?* false] (reset! state new))
              (assoc h
                :undo new-undo
                :redo new-redo)))))

(defn redo!
  [[state history]]
  (rswap! history
          (fn [h]
            (let [{:keys [undo redo]} h
                  new (peek redo)
                  new-redo (pop redo)
                  new-undo (conj undo @state)]
              (binding [*record?* false] (reset! state new))
              (assoc h
                :undo new-undo
                :redo new-redo)))))

(defn component
  [state]
  (r/with-let [history (register! state)]
    [:<>
     [:button {:on-click (partial undo! history)
               :disabled (not (can-undo? history))}
      "Undo"]
     [:button {:on-click (partial redo! history)
               :disabled (not (can-redo? history))}
      "Redo"]]
    (finally (disable! history))))
