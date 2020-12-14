(ns gui.util
  (:require
   [reagent.core :as r]))


(defn input
  [value & {:keys [valid?] :as props :or {valid? any?}}]
  (r/with-let [on-change (fn [e] (reset! value (.. e -target -value)))]
    [:input
     (r/merge-props {:class (when-not (valid? @value) :invalid)
                     :value @value
                     :on-change on-change}
                    (dissoc props :valid?))]))

(defonce ^:private unique-src (atom 0))
(defn new-id
  "Create a new guaranteed unique id, with an optional descriptive prefix"
  ([] (new-id ""))
  ([prefix] (str prefix (swap! unique-src inc))))
