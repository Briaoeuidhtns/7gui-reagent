(ns gui.cells.formula-test
  (:require
   [gui.cells.formula :as sut]
   [cljs.test :as t :include-macros true]))

;;;; Test parser config

(t/deftest parse-literals
  (t/are
    [input expected]
    (= [:S expected] (sut/parser input))
    ;; Numbers
    "1" [:number "1"]
    "1.1" [:number "1.1"]
    ".1" [:number ".1"]
    "+1" [:number "+1"]
    "-1" [:number "-1"]
    "-1.0" [:number "-1.0"]
    ;; Coords
    "A1" [:coord [:col "A"] [:row "1"]]
    "AB1" [:coord [:col "AB"] [:row "1"]]
    "A12" [:coord [:col "A"] [:row "12"]]
    "AB12" [:coord [:col "AB"] [:row "12"]]
    ;; Text
    "a" [:text "a"]
    "a1" [:text "a1"]
    "1A1" [:text "1A1"]
    "1=" [:text "1="]
    "1..1" [:text "1..1"]
    "+-1" [:text "+-1"]
    "A1:A2" [:text "A1:A2"] ; ranges not valid as top level form
  ))

(t/deftest parse-simple-formula
  (t/is (= [:S [:call [:fn "ADD"] [:argv [:number "1"] [:number "2"]]]]
           (sut/parser "=ADD(1, 2)"))))

(t/deftest parse-coord-formula
  (t/is (= [:S
            [:call
             [:fn "ADD"]
             [:argv [:coord [:col "A"] [:row "1"]] [:number "2"]]]]
           (sut/parser "=ADD(A1, 2)"))))

(t/deftest parse-range-formula
  (t/is (= [:S
            [:call
             [:fn "ADD"]
             [:argv
              [:coord [:col "A"] [:row "1"]]
              [:range
               [:coord [:col "B"] [:row "2"]]
               [:coord [:col "C"] [:row "3"]]]]]]
           (sut/parser "=ADD(A1, B2:C3)"))))

(t/deftest parse-nested-call-formula
  (t/is (= [:S
            [:call
             [:fn "ADD"]
             [:argv
              [:call [:fn "SUB"] [:argv [:number "1"] [:number "2"]]]
              [:number "3"]]]]
           (sut/parser "=ADD(SUB(1, 2), 3)"))))

;;;; Test static transform

(t/deftest transform-number-literal (t/is (= [:S 1] (sut/parse "1"))))

(t/deftest transform-text-literal (t/is (= [:S "a"] (sut/parse "a"))))

(defrecord MockGrid [supplier]
  sut/Grid
    (at [_ x y] (supplier [x y])))

(t/deftest eval-number-literal (t/is (= 1 (sut/eval [:S 1] (->MockGrid {})))))

(t/deftest eval-text-literal (t/is (= "a" (sut/eval [:S "a"] (->MockGrid {})))))

(defn never [& args] (throw (ex-info "Shouldn't be called" args)))

(t/deftest eval-call-const
  (t/is (= 3 (sut/eval (sut/parse "=ADD(1, 2)") (->MockGrid never)))))

(t/deftest eval-call-coords
  (t/is
    (= 3 (sut/eval (sut/parse "=ADD(A1, A2)") (->MockGrid {[0 0] 1 [0 1] 2})))))

(t/deftest eval-call-lin-range
  (t/is (= 6
           (sut/eval (sut/parse "=ADD(A1:A3)")
                     (->MockGrid {[0 0] 1 [0 1] 2 [0 2] 3})))))

(t/deftest eval-call-grid-range
  (t/is (= 10
           (sut/eval (sut/parse "=ADD(A1:B2)")
                     (->MockGrid {[0 0] 1 [0 1] 2 [1 0] 3 [1 1] 4})))))

(t/deftest eval-call-rev-range
  (t/is (= 6
           (sut/eval (sut/parse "=ADD(A3:A1)")
                     (->MockGrid {[0 0] 1 [0 1] 2 [0 2] 3})))))

(t/deftest eval-call-nested
  (t/is (= 6 (sut/eval (sut/parse "=ADD(ADD(1, 2), 3)") (->MockGrid never)))))
