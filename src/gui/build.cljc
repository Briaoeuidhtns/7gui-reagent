(ns gui.build
  (:require
   #?@(:clj [[babashka.process :refer [check process]]]
       :cljs [[gui.core :refer [prerender]] ["fs" :as fs]])))

#?(:clj (defn autorun-node!
          {:shadow.build/stage :flush}
          [{{:keys [output-to]} :shadow.build/config
            mode :shadow.build/mode
            :as config}
           &
           args]
          (check
            (process `[~'node ~output-to ~@args]
                     {:out *out*
                      :err *err*
                      :env (merge nil
                                  (System/getenv)
                                  {"SHADOW_CLJS_BUILD_MODE" (name mode)})}))
          config))

#?(:cljs (defn prerender-to! [file] (fs/writeFileSync file (prerender))))
