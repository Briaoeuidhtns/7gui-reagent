(ns gui.crud
  (:refer-clojure :exclude [partial])
  (:require
   [reagent.core :as r :refer [rswap! partial]]
   [reagent.ratom :as ra]
   [gui.util :as util]
   [clojure.pprint :refer [cl-format]]
   [clojure.string :as str]))

(defn filter-list
  [value selected & {f :filter :as props}]
  (r/with-let [default-props
               {:on-change (fn [e]
                             (let [val (.. e -target -value)]
                               (reset! selected (when-not (= val "") val))))
                ;; set multiple so selection can be empty
                :multiple true}]
    (let [filtered (into {} (filter (comp f val)) @value)]
      [:select
       (r/merge-props {:value (if-let [s @selected]
                                [s]
                                [])}
                      default-props
                      (dissoc props :filter))
       (for [[val item] filtered]
         ^{:key (hash item)}
         [:option {:value val}
          item])])))

(defn name-input
  [fullname]
  (r/with-let [name-id (random-uuid)
               surname-id (random-uuid)
               name (r/cursor fullname [:name])
               surname (r/cursor fullname [:surname])]
    [:div {:style {:display "grid"
                   :grid "\"name-label name\"
\"surname-label surname\""
                   :grid-area "name"}}
     [:label {:for name-id :style {:grid-area "name-label"}}
      "Name: "]
     [util/input name :id name-id :style {:grid-area "name"}]
     [:label {:for surname-id :style {:grid-area "surname-label"}}
      "Surname: "]
     [util/input surname :id surname-id :style {:grid-area "surname"}]]))

(defn crud-button-bar
  [{:keys [on-create on-update on-delete]}]
  [:div {:style {:display "grid"
                 :grid-area "btnbar"
                 :grid-auto-flow "column"
                 :justify-content "start"}}
   [:button {:on-click on-create}
    "Create"]
   [:button {:on-click on-update}
    "Update"]
   [:button {:on-click on-delete}
    "Delete"]])

(defn name-create
  [{{:keys [name surname]} :input :as state}]
  (update state :names conj (cl-format nil "~a, ~a" surname name)))

(defn name-update
  [{{:keys [name surname]} :input :as state}]
  (update state :names conj (cl-format nil "~a, ~a" surname name)))

(defn name-delete
  [{{:keys [name surname]} :input :as state}]
  (update state :names conj (cl-format nil "~a, ~a" surname name)))


(defn crud
  []
  (r/with-let [state (r/atom {:names {}
                              :prefix ""
                              :input {:name "" :surname ""}
                              :position nil})
               names-state (r/cursor state [:names])
               name-state (r/cursor state [:input])
               position-state (r/cursor state [:position])
               filter-id (random-uuid)
               filter-fn (fn [prefix val] (str/starts-with? val prefix))
               set-filter
               (fn [e]
                 (rswap!
                   state
                   (fn [s]
                     (let [prefix (.. e -target -value)
                           s (assoc s :prefix prefix)
                           {:keys [names position]} s
                           selected (get names position)]
                       (if (or (not selected) (filter-fn prefix selected))
                         s ;selection still valid
                         (assoc s
                           :position (ffirst
                                       (filter (comp (partial filter-fn prefix)
                                                     val)
                                         names))))))))]
    (let [{:keys [prefix]} @state]
      [:div.card
       {:style {:grid
                  "\"filter none\"
\"names name\"
\"btnbar btnbar\"
/ 1fr 1fr"}}
       [:label {:for filter-id :style {:grid-area "filter" :display "flex"}}
        "Filter prefix: "
        [:input {:on-change set-filter :value prefix :id filter-id}]]
       [filter-list
        names-state
        position-state
        :filter
        (partial filter-fn prefix)
        :size
        3
        :style
        {:grid-area "names"}]
       [name-input name-state]
       [crud-button-bar]])))
