(ns gui.cells.formula-test
  (:require
   [gui.cells.formula :as sut]
   [cljs.test :as t :include-macros true]))

(t/deftest parse-literals
  (t/are
    [input expected]
    (= [:S expected] (sut/parse input))
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
  (t/is (= [:S [:formula [:call [:fn "ADD"] [:number "1"] [:number "2"]]]]
           (sut/parse "=ADD(1, 2)"))))

(t/deftest parse-coord-formula
  (t/is (= [:S
            [:formula
             [:call [:fn "ADD"] [:coord [:col "A"] [:row "1"]] [:number "2"]]]]
           (sut/parse "=ADD(A1, 2)"))))

(t/deftest parse-range-formula
  (t/is (= [:S
            [:formula
             [:call
              [:fn "ADD"]
              [:coord [:col "A"] [:row "1"]]
              [:range
               [:coord [:col "B"] [:row "2"]]
               [:coord [:col "C"] [:row "3"]]]]]]
           (sut/parse "=ADD(A1, B2:C3)"))))

(t/deftest parse-nested-call-formula
  (t/is (= [:S
            [:formula
             [:call
              [:fn "ADD"]
              [:call [:fn "SUB"] [:number "1"] [:number "2"]]
              [:number "3"]]]]
           (sut/parse "=ADD(SUB(1, 2), 3)"))))
