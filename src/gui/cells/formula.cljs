(ns gui.cells.formula
  (:refer-clojure :exclude [eval])
  (:require
   [shadow.resource :as rc]
   [instaparse.core :as insta :refer-macros [defparser]]
   [clojure.string :as str]))

(defprotocol Grid
  (at [self x y]))

(defparser parser (rc/inline "./grammar.ebnf"))

(defn parse-col
  [col]
  (dec
    (reduce (fn [acc d] (+ (* acc 26) (.charCodeAt d) (- (.charCodeAt \A)) 1))
      0
      col)))

(defonce functions (atom {:add + :sub - :mul * :div / :mod mod}))

(defn register-op! [sym f] (swap! functions assoc sym f))

(defn parse
  [cell]
  (->>
    cell
    parser
    ;; Transform as much as possible statically
    (insta/transform
      {:number js/Number
       :row (comp dec js/Number)
       :col parse-col
       :range (fn [[_ & c1] [_ & c2]]
                (let [[[x1 x2] [y1 y2]] (map (comp sort list) c1 c2)]
                  (into [:splice] ; tag to id in argv
                        (for [x (range x1 (inc x2))
                              y (range y1 (inc y2))]
                          [:coord x y]))))
       :argv (fn [& args]
               (into [:argv] ; Valid hiccup to transform for eval
                     (comp (map (fn [v]
                                  (if (and (seqable? v) (= :splice (first v)))
                                    (rest v)
                                    [v])))
                           cat)
                     args))
       :fn (comp @functions keyword str/lower-case #(str/replace % #"_" "-"))
       :text identity})))

(defn eval
  [cell grid]
  (insta/transform {:S identity
                    :coord (partial at grid)
                    :call (fn [f [_ & args]] (apply f args))}
                   cell))
