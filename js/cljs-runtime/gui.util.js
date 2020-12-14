goog.provide('gui.util');
gui.util.input = (function gui$util$input(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16839 = arguments.length;
var i__4737__auto___16840 = (0);
while(true){
if((i__4737__auto___16840 < len__4736__auto___16839)){
args__4742__auto__.push((arguments[i__4737__auto___16840]));

var G__16841 = (i__4737__auto___16840 + (1));
i__4737__auto___16840 = G__16841;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return gui.util.input.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(gui.util.input.cljs$core$IFn$_invoke$arity$variadic = (function (value,p__16827){
var map__16828 = p__16827;
var map__16828__$1 = (((((!((map__16828 == null))))?(((((map__16828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16828.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16828):map__16828);
var props = map__16828__$1;
var valid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16828__$1,new cljs.core.Keyword(null,"valid?","valid?",-212412379),cljs.core.any_QMARK_);
var with_let16830 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let16830","with-let16830",815894371));
var temp__5739__auto___16842 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5739__auto___16842 == null)){
} else {
var c__16460__auto___16843 = temp__5739__auto___16842;
if((with_let16830.generation === c__16460__auto___16843.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let16830.generation = c__16460__auto___16843.ratomGeneration);
}


var init16831 = (with_let16830.length === (0));
var on_change = ((init16831)?(with_let16830[(0)] = (function (e){
return cljs.core.reset_BANG_(value,e.target.value);
})):(with_let16830[(0)]));
var res__16461__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),reagent.core.merge_props.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_((function (){var G__16832 = cljs.core.deref(value);
return (valid_QMARK_.cljs$core$IFn$_invoke$arity$1 ? valid_QMARK_.cljs$core$IFn$_invoke$arity$1(G__16832) : valid_QMARK_.call(null,G__16832));
})())?null:new cljs.core.Keyword(null,"invalid","invalid",412869516)),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change], null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"valid?","valid?",-212412379)))], null);

return res__16461__auto__;
}));

(gui.util.input.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(gui.util.input.cljs$lang$applyTo = (function (seq16825){
var G__16826 = cljs.core.first(seq16825);
var seq16825__$1 = cljs.core.next(seq16825);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16826,seq16825__$1);
}));

if((typeof gui !== 'undefined') && (typeof gui.util !== 'undefined') && (typeof gui.util.unique_src !== 'undefined')){
} else {
gui.util.unique_src = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Create a new guaranteed unique id, with an optional descriptive prefix
 */
gui.util.new_id = (function gui$util$new_id(var_args){
var G__16834 = arguments.length;
switch (G__16834) {
case 0:
return gui.util.new_id.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return gui.util.new_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(gui.util.new_id.cljs$core$IFn$_invoke$arity$0 = (function (){
return gui.util.new_id.cljs$core$IFn$_invoke$arity$1("");
}));

(gui.util.new_id.cljs$core$IFn$_invoke$arity$1 = (function (prefix){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(gui.util.unique_src,cljs.core.inc))].join('');
}));

(gui.util.new_id.cljs$lang$maxFixedArity = 1);


//# sourceMappingURL=gui.util.js.map
