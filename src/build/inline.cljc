(ns build.inline
  #?(:clj (:require
           [clojure.java.io :as io])))

#?(:clj (defn file [f] (slurp f)))

#?(:clj (defn resource [r] (slurp (io/resource r))))

