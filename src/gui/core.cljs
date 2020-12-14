(ns gui.core
  (:refer-clojure :exclude [partial])
  (:require
   [reagent.core :as r :refer [rswap! partial]]
   [reagent.dom :as rd]
   [clojure.pprint :refer [cl-format]]
   [gui.crud :refer [crud]]
   [gui.util :as util]))

(defn counter
  []
  (r/with-let [c (r/atom 0)]
    [:div.card
     [:input {:read-only true :value @c}]
     [:button {:on-click #(swap! c inc)}
      "Count"]]))

(defn str->number [n] (if (empty? n) js/NaN (js/Number n)))

(defn temperature-converter
  []
  (r/with-let [data (r/atom {:celcius {:val nil :valid? true}
                             :fahrenheit {:val nil :valid? true}})
               c->f (fn [c] (+ (* c (/ 9 5)) 32))
               f->c (fn [f] (* (- f 32) (/ 5 9)))
               on-change
               (fn [from to conv]
                 (fn [e]
                   (let [val (.. e -target -value)
                         num (str->number val)]
                     (if-not (js/Number.isNaN num)
                       (reset! data
                               {from {:val val :valid? true}
                                ;; Not specified in spec, but follows reference
                                ;; impl
                                to {:val (.toFixed (conv num)) :valid? true}})
                       (swap! data assoc from {:val val :valid? false})))))

               input (fn [{{:keys [val valid?]} :data :keys [from to conv]}]
                       [:input {:value val
                                :class (when-not valid?
                                         "invalid")
                                :on-change (on-change from
                                             to
                                             conv)}])]
    (let [{:keys [celcius fahrenheit]} @data]
      [:div.card
       [:label
        [input {:data celcius :from :celcius :to :fahrenheit :conv c->f}]
        " Celcius"]
       " = "
       [:label
        [input {:data fahrenheit :from :fahrenheit :to :celcius :conv f->c}]
        " Fahrenheit"]])))

(defn Date->input
  [date]
  (cl-format nil
             "~2,'0D.~2,'0D.~4,'0D"
             (.getDate date)
             (inc (.getMonth date))
             (.getFullYear date)))

(defn str->date
  "Parse a string of the form `dd.mm.yyyy` to a vector of (year month day)

  Returns nil if invalid. Only validates form, not that the parsed date exists."
  [s]
  (when-let [date (->> s
                       (re-matches #"(\d{2})\.(\d{2})\.(\d{4})")
                       rest
                       (map str->number)
                       reverse
                       seq)]
    (vec date)))

(defn input
  [value & {:keys [valid?] :as props :or {valid? any?}}]
  (r/with-let [on-change (fn [e] (reset! value (.. e -target -value)))]
    [:input
     (r/merge-props {:class (when-not (valid? @value) :invalid)
                     :value @value
                     :on-change on-change}
                    (dissoc props :valid?))]))

(defn flight-booker
  []
  (r/with-let
    [now (Date->input (js/Date.))
     data (r/atom {:flight-type :one-way :start now :end now})
     valid? (fn [{:keys [flight-type start end]}]
              (let [start (str->date start)
                    end (str->date end)]
                (and start
                     (or (= flight-type :one-way)
                         (and end (<= (compare start end) 0))))))
     on-select-change (fn [e]
                        (let [t (.. e -target -value)]
                          (rswap! data assoc :flight-type (keyword t))))
     start (r/cursor data [:start])
     end (r/cursor data [:end])
     submit
     (fn [_]
       (let [{:keys [start end flight-type]} @data]
         (js/alert
           (cl-format
             nil
             "You have booked a ~:[one-way~;return~]~:* flight ~:[for ~a~;~:*from ~a to ~a~]"
             (when (= flight-type :return) end)
             start))))]
    (let [{:keys [flight-type]} @data]
      [:div.card {:style {:grid-auto-flow "row"}}
       [:select {:value flight-type :on-change on-select-change}
        [:option {:value :one-way}
         "one-way flight"]
        [:option {:value :return}
         "return flight"]]
       [util/input start :valid? str->date]
       [util/input end :valid? str->date :disabled (not= flight-type :return)]
       [:button {:on-click submit :disabled (not (valid? @data))}
        "Book"]])))

(defn timer
  []
  (r/with-let [resolution 100
               state (r/atom {:time 0 :duration 15000})
               interval (js/setInterval rswap!
                                        resolution
                                        state
                                        update
                                        :time
                                        (partial + resolution))
               reset-time! (fn [_] (rswap! state assoc :time 0))
               duration (r/cursor state [:duration])
               duration-id (random-uuid)
               bar-id (random-uuid)]
    (let [{:keys [time]} @state
          clamped-time (-> time
                           (max 1)
                           (min @duration))]
      [:div.card
       {:style
          {:grid
             "\"bar-label bar\" \"none text\" \"input-label input\" \"reset reset\""}}
       [:label {:for bar-id :style {:grid-area "bar-label"}}
        "Elapsed Time:"]
       [:progress {:style {:grid-area "bar"}
                   :id bar-id
                   :max @duration
                   :value clamped-time}]
       [:span {:style {:grid-area "text"}}
        (.toFixed (/ clamped-time 1000) 1)
        \s]
       [:label {:for duration-id :style {:grid-area "input-label"}}
        "Duration:"]
       [util/input
        duration
        :type
        "range"
        :id
        duration-id
        :min
        0
        :max
        30000
        :step
        100
        :style
        {:grid-area "input"}]
       [:button {:on-click reset-time! :style {:grid-area "reset"}}
        "Reset Timer"]])
    (finally (js/clearInterval interval))))

(defn app
  []
  [:<> [counter] [temperature-converter] [flight-booker] [timer]])

(defn ^:export init!
  []
  (enable-console-print!)
  (rd/render [app] (.getElementById js/document "app")))
