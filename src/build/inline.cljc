(ns build.inline
  #?(:clj (:require
           [clojure.java.io :as io]))
  ;; no macros, but doesn't use the clj versions of the reader tags without this
  #?(:cljs (:require-macros build.inline)))

#?(:clj (defn file [f] (slurp f)))

#?(:clj (defn resource [r] (slurp (io/resource r))))
