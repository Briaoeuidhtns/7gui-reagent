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
         ^{:key val}
         [:option {:value val}
          item])])))

(defn name-input
  [fullname]
  (r/with-let [name-id (util/new-id "name")
               surname-id (util/new-id "surname")
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
  [& {:keys [on-create on-update on-delete has-selection?]}]
  [:div {:style {:display "grid"
                 :grid-area "btnbar"
                 :grid-auto-flow "column"
                 :justify-content "start"}}
   [:button {:on-click #(on-create)}
    "Create"]
   [:button {:on-click #(on-update) :disabled (not has-selection?)}
    "Update"]
   [:button {:on-click #(on-delete) :disabled (not has-selection?)}
    "Delete"]])

(defn filter-fn [prefix val] (str/starts-with? val prefix))

(defn fix-selection
  "Select something new if the current selection is invalid, i.e., filtered or deleted"
  [state]
  (let [{:keys [names position prefix]} state
        selected (get names position)]
    ;; valid states:
    ;;   - Position is nil
    ;;   - Position is not nil, and still exists, and matches pred
    (if (or (not position) (and selected (filter-fn prefix selected)))
      ;; Selection still valid
      state
      ;; Adjust selection to first valid position
      (assoc state
        :position (ffirst (filter (comp (partial filter-fn prefix) val)
                            names))))))

(defn create-name
  [{{:keys [name surname]} :input :as state}]
  (update state
          :names
          assoc
          (util/new-id "name")
          (cl-format nil "~a, ~a" surname name)))

(defn update-name
  [{{:keys [name surname]} :input :keys [position] :as state}]
  (if position
    (update state :names assoc position (cl-format nil "~a, ~a" surname name))
    (throw (ex-info "Position is nil, can't update" {:state state}))))

(defn delete-name
  [{:keys [position] :as state}]
  (fix-selection (update state :names dissoc position)))

(defn crud
  []
  (r/with-let [state (r/atom {:names {}
                              :prefix ""
                              :input {:name "" :surname ""}
                              :position nil})
               names-state (r/cursor state [:names])
               name-state (r/cursor state [:input])
               position-state (r/cursor state [:position])
               filter-id (util/new-id "filter")
               set-filter (fn [e]
                            (rswap! state
                                    #(fix-selection
                                        (assoc %
                                          :prefix (.. e -target -value)))))]
    (let [{:keys [prefix position]} @state]
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
       [crud-button-bar
        :has-selection?
        position
        :on-create
        (partial rswap! state create-name)
        :on-update
        (partial rswap! state update-name)
        :on-delete
        (partial rswap! state delete-name)]])))
