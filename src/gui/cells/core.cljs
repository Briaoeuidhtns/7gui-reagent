(ns gui.cells.core
  (:refer-clojure :exclude [eval])
  (:require
   [reagent.core :as r]
   [gui.cells.formula :as formula]))

(defn ^:private eval
  [self path]
  (formula/eval (formula/parse @(r/cursor (:grid self) path)) path self))

(defrecord RatomGrid [grid]
  formula/Grid
    (at [self x y] @(r/track eval self [y x]))
    (shape [_] [(count (first @grid)) (count @grid)]))
(defn ^:private editable-at [self x y] (r/cursor (:grid self) [y x]))

(defn cell
  [grid x y]
  (r/with-let [focused? (r/atom false)]
    [:td
     [:input
      (r/merge-props
        (if @focused?
          (let [val (editable-at grid x y)]
            {:value @val :on-change #(reset! val (.. % -target -value))})
          {:value (str (let [val (formula/at grid x y)]
                         (if-not (formula/failure? val) val js/NaN)))
           :on-change #()})
        {:on-focus #(reset! focused? true)
         :on-blur #(reset! focused? false)})]]))

(defn table
  []
  (r/with-let [grid (->RatomGrid (r/atom [["" "" ""] ["" "" ""]]))]
    (let [[grid-x grid-y] (formula/shape grid)]
      [:div.card
       [:table
        [:thead>tr
         [:td]
         (for [td (range grid-x)] ^{:key td} [:td (formula/format-col td)])]
        [:tbody
         (doall (for [y (range grid-y)]
                  ^{:key y}
                  [:tr
                   [:th {:scope "row"}
                    (inc y)]
                   (doall (for [x (range grid-x)]
                            ^{:key x} [cell grid x y]))]))]]])))
