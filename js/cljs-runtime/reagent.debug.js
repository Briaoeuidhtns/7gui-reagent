goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__16354__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__16354 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16355__i = 0, G__16355__a = new Array(arguments.length -  0);
while (G__16355__i < G__16355__a.length) {G__16355__a[G__16355__i] = arguments[G__16355__i + 0]; ++G__16355__i;}
  args = new cljs.core.IndexedSeq(G__16355__a,0,null);
} 
return G__16354__delegate.call(this,args);};
G__16354.cljs$lang$maxFixedArity = 0;
G__16354.cljs$lang$applyTo = (function (arglist__16356){
var args = cljs.core.seq(arglist__16356);
return G__16354__delegate(args);
});
G__16354.cljs$core$IFn$_invoke$arity$variadic = G__16354__delegate;
return G__16354;
})()
);

(o.error = (function() { 
var G__16357__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__16357 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16358__i = 0, G__16358__a = new Array(arguments.length -  0);
while (G__16358__i < G__16358__a.length) {G__16358__a[G__16358__i] = arguments[G__16358__i + 0]; ++G__16358__i;}
  args = new cljs.core.IndexedSeq(G__16358__a,0,null);
} 
return G__16357__delegate.call(this,args);};
G__16357.cljs$lang$maxFixedArity = 0;
G__16357.cljs$lang$applyTo = (function (arglist__16359){
var args = cljs.core.seq(arglist__16359);
return G__16357__delegate(args);
});
G__16357.cljs$core$IFn$_invoke$arity$variadic = G__16357__delegate;
return G__16357;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
