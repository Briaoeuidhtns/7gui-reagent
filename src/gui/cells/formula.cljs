(ns gui.cells.formula
  (:require
   [instaparse.core :as insta :refer-macros [defparser]]
   [build.inline]))

(defprotocol Grid
  (at [self [x y]]))

(defparser parse #inline/resource "formula.ebnf")
