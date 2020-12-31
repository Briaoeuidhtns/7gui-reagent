(ns gui.cells.formula
  (:refer-clojure :exclude [eval])
  (:require
   [shadow.resource :as rc]
   [instaparse.core :as insta :refer-macros [defparser]]
   [clojure.string :as str]
   [clojure.pprint :refer [cl-format]]))

(defprotocol Grid
  (at [self x y] "Get the evaluated cell at a coordinate")
  (shape [self] "Get the shape of the grid"))

(defparser parser (rc/inline "./grammar.ebnf"))

(defn ord [c] (.charCodeAt c))

(defn parse-col
  [col]
  (dec (reduce (fn [acc d] (+ (* acc 26) (ord d) (- (ord \A)) 1)) 0 col)))

(defn format-col
  [idx]
  (loop [i idx
         s ""]
    (if (<= 0 i)
      (recur (dec (quot i 26)) (str (char (+ (mod i 26) (ord \A))) s))
      s)))

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

(def ^:private ^:dynamic *evaluating* #{})

(defn failure?
  [val]
  (when (or (instance? js/Error val) (insta/failure? val)) val))

(defn format-failure [err] (or (ex-message err) (pr-str err)))

(defn spy [a] (prn a) a)
(defn eval
  "Evaluate a formula in the context of a given grid.

  Key should uniquely identify this cell, but is otherwise opaque."
  [cell key grid]
  (if-not (*evaluating* key)
    (binding [*evaluating* (conj *evaluating* key)]
      (insta/transform {:S identity
                        :coord (partial at grid)
                        :call (fn [f [_ & args]] (apply f args))}
                       cell))
    ;; Don't throw so ratom tracking happens properly
    (ex-info
      (cl-format nil
                 "Cyclic formula detected at ~a.\nCell depends on ~a"
                 key
                 *evaluating*)
      {:at key :grid grid :type ::cyclic-formula :dependencies *evaluating*})))
