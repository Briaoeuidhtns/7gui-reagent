(ns gui.util
  (:require
   [reagent.core :as r]
   [clojure.pprint :as pprint]))


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

(defn card-wrapper
  [comp]
  (let [error (r/atom nil)]
    (r/create-class
      {:display-name "card-wrapper"
       :component-did-catch (fn [_ e info] (tap> e))
       :get-derived-state-from-error (fn [e] (reset! error e) #js {})
       :reagent-render (fn [comp]
                         (if-not @error
                           comp
                           [:div.card {:style {:grid-auto-flow "row"}}
                            [:h1 "Error: " (ex-message @error)]
                            [:pre {:style {:overflow :auto}}
                             (with-out-str (pprint/pprint (ex-data @error)))]
                            [:button {:on-click #(reset! error nil)}
                             "Try again"]]))})))
