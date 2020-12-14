goog.provide('gui.crud');
gui.crud.filter_list = (function gui$crud$filter_list(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16920 = arguments.length;
var i__4737__auto___16921 = (0);
while(true){
if((i__4737__auto___16921 < len__4736__auto___16920)){
args__4742__auto__.push((arguments[i__4737__auto___16921]));

var G__16922 = (i__4737__auto___16921 + (1));
i__4737__auto___16921 = G__16922;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return gui.crud.filter_list.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(gui.crud.filter_list.cljs$core$IFn$_invoke$arity$variadic = (function (value,selected,p__16879){
var map__16880 = p__16879;
var map__16880__$1 = (((((!((map__16880 == null))))?(((((map__16880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16880.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16880):map__16880);
var props = map__16880__$1;
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16880__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));
var with_let16882 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let16882","with-let16882",1250418408));
var temp__5739__auto___16923 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5739__auto___16923 == null)){
} else {
var c__16460__auto___16924 = temp__5739__auto___16923;
if((with_let16882.generation === c__16460__auto___16924.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let16882.generation = c__16460__auto___16924.ratomGeneration);
}


var init16883 = (with_let16882.length === (0));
var default_props = ((init16883)?(with_let16882[(0)] = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var val = e.target.value;
return cljs.core.reset_BANG_(selected,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,""))?null:val));
}),new cljs.core.Keyword(null,"multiple","multiple",1244445549),true], null)):(with_let16882[(0)]));
var res__16461__auto__ = (function (){var filtered = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(f,cljs.core.val)),cljs.core.deref(value));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),reagent.core.merge_props.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var temp__5733__auto__ = cljs.core.deref(selected);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
})()], null),default_props,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"filter","filter",-948537934))], 0)),(function (){var iter__4529__auto__ = (function gui$crud$iter__16884(s__16885){
return (new cljs.core.LazySeq(null,(function (){
var s__16885__$1 = s__16885;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__16885__$1);
if(temp__5735__auto__){
var s__16885__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16885__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__16885__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__16887 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__16886 = (0);
while(true){
if((i__16886 < size__4528__auto__)){
var vec__16888 = cljs.core._nth(c__4527__auto__,i__16886);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16888,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16888,(1),null);
cljs.core.chunk_append(b__16887,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),val], null),item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),val], null)));

var G__16925 = (i__16886 + (1));
i__16886 = G__16925;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16887),gui$crud$iter__16884(cljs.core.chunk_rest(s__16885__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16887),null);
}
} else {
var vec__16891 = cljs.core.first(s__16885__$2);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16891,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16891,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),val], null),item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),val], null)),gui$crud$iter__16884(cljs.core.rest(s__16885__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(filtered);
})()], null);
})();

return res__16461__auto__;
}));

(gui.crud.filter_list.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(gui.crud.filter_list.cljs$lang$applyTo = (function (seq16869){
var G__16870 = cljs.core.first(seq16869);
var seq16869__$1 = cljs.core.next(seq16869);
var G__16871 = cljs.core.first(seq16869__$1);
var seq16869__$2 = cljs.core.next(seq16869__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16870,G__16871,seq16869__$2);
}));

gui.crud.name_input = (function gui$crud$name_input(fullname){
var with_let16894 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let16894","with-let16894",1047826773));
var temp__5739__auto___16928 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5739__auto___16928 == null)){
} else {
var c__16460__auto___16929 = temp__5739__auto___16928;
if((with_let16894.generation === c__16460__auto___16929.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let16894.generation = c__16460__auto___16929.ratomGeneration);
}


var init16895 = (with_let16894.length === (0));
var name_id = ((init16895)?(with_let16894[(0)] = gui.util.new_id.cljs$core$IFn$_invoke$arity$1("name")):(with_let16894[(0)]));
var surname_id = ((init16895)?(with_let16894[(1)] = gui.util.new_id.cljs$core$IFn$_invoke$arity$1("surname")):(with_let16894[(1)]));
var name = ((init16895)?(with_let16894[(2)] = reagent.core.cursor(fullname,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177)], null))):(with_let16894[(2)]));
var surname = ((init16895)?(with_let16894[(3)] = reagent.core.cursor(fullname,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"surname","surname",1407918027)], null))):(with_let16894[(3)]));
var res__16461__auto__ = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"grid",new cljs.core.Keyword(null,"grid","grid",402978600),"\"name-label name\"\n\"surname-label surname\"",new cljs.core.Keyword(null,"grid-area","grid-area",-1829717451),"name"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"for","for",-1323786319),name_id,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"grid-area","grid-area",-1829717451),"name-label"], null)], null),"Name: "], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [gui.util.input,name,new cljs.core.Keyword(null,"id","id",-1388402092),name_id,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"grid-area","grid-area",-1829717451),"name"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"for","for",-1323786319),surname_id,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"grid-area","grid-area",-1829717451),"surname-label"], null)], null),"Surname: "], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [gui.util.input,surname,new cljs.core.Keyword(null,"id","id",-1388402092),surname_id,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"grid-area","grid-area",-1829717451),"surname"], null)], null)], null);

return res__16461__auto__;
});
gui.crud.crud_button_bar = (function gui$crud$crud_button_bar(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16932 = arguments.length;
var i__4737__auto___16933 = (0);
while(true){
if((i__4737__auto___16933 < len__4736__auto___16932)){
args__4742__auto__.push((arguments[i__4737__auto___16933]));

var G__16934 = (i__4737__auto___16933 + (1));
i__4737__auto___16933 = G__16934;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return gui.crud.crud_button_bar.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(gui.crud.crud_button_bar.cljs$core$IFn$_invoke$arity$variadic = (function (p__16897){
var map__16898 = p__16897;
var map__16898__$1 = (((((!((map__16898 == null))))?(((((map__16898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16898.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16898):map__16898);
var on_create = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16898__$1,new cljs.core.Keyword(null,"on-create","on-create",-1764191440));
var on_update = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16898__$1,new cljs.core.Keyword(null,"on-update","on-update",1680216496));
var on_delete = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16898__$1,new cljs.core.Keyword(null,"on-delete","on-delete",-1882190355));
var has_selection_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16898__$1,new cljs.core.Keyword(null,"has-selection?","has-selection?",1994513172));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"grid",new cljs.core.Keyword(null,"grid-area","grid-area",-1829717451),"btnbar",new cljs.core.Keyword(null,"grid-auto-flow","grid-auto-flow",-1754873684),"column",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"start"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (on_create.cljs$core$IFn$_invoke$arity$0 ? on_create.cljs$core$IFn$_invoke$arity$0() : on_create.call(null));
})], null),"Create"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (on_update.cljs$core$IFn$_invoke$arity$0 ? on_update.cljs$core$IFn$_invoke$arity$0() : on_update.call(null));
}),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.not(has_selection_QMARK_)], null),"Update"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (on_delete.cljs$core$IFn$_invoke$arity$0 ? on_delete.cljs$core$IFn$_invoke$arity$0() : on_delete.call(null));
}),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.not(has_selection_QMARK_)], null),"Delete"], null)], null);
}));

(gui.crud.crud_button_bar.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(gui.crud.crud_button_bar.cljs$lang$applyTo = (function (seq16896){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16896));
}));

gui.crud.filter_fn = (function gui$crud$filter_fn(prefix,val){
return clojure.string.starts_with_QMARK_(val,prefix);
});
/**
 * Select something new if the current selection is invalid, i.e., filtered or deleted
 */
gui.crud.fix_selection = (function gui$crud$fix_selection(state){
var map__16900 = state;
var map__16900__$1 = (((((!((map__16900 == null))))?(((((map__16900.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16900.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16900):map__16900);
var names = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16900__$1,new cljs.core.Keyword(null,"names","names",-1943074658));
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16900__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16900__$1,new cljs.core.Keyword(null,"prefix","prefix",-265908465));
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(names,position);
if(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core.not(position);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var and__4115__auto__ = selected;
if(cljs.core.truth_(and__4115__auto__)){
return gui.crud.filter_fn(prefix,selected);
} else {
return and__4115__auto__;
}
}
})())){
return state;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.ffirst(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(reagent.core.partial.cljs$core$IFn$_invoke$arity$variadic(gui.crud.filter_fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix], 0)),cljs.core.val),names)));
}
});
gui.crud.create_name = (function gui$crud$create_name(p__16902){
var map__16903 = p__16902;
var map__16903__$1 = (((((!((map__16903 == null))))?(((((map__16903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16903.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16903):map__16903);
var state = map__16903__$1;
var map__16904 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16903__$1,new cljs.core.Keyword(null,"input","input",556931961));
var map__16904__$1 = (((((!((map__16904 == null))))?(((((map__16904.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16904.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16904):map__16904);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16904__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var surname = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16904__$1,new cljs.core.Keyword(null,"surname","surname",1407918027));
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(state,new cljs.core.Keyword(null,"names","names",-1943074658),cljs.core.assoc,gui.util.new_id.cljs$core$IFn$_invoke$arity$1("name"),cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~a, ~a",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([surname,name], 0)));
});
gui.crud.update_name = (function gui$crud$update_name(p__16907){
var map__16908 = p__16907;
var map__16908__$1 = (((((!((map__16908 == null))))?(((((map__16908.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16908.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16908):map__16908);
var state = map__16908__$1;
var map__16909 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16908__$1,new cljs.core.Keyword(null,"input","input",556931961));
var map__16909__$1 = (((((!((map__16909 == null))))?(((((map__16909.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16909.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16909):map__16909);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16909__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var surname = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16909__$1,new cljs.core.Keyword(null,"surname","surname",1407918027));
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16908__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
if(cljs.core.truth_(position)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(state,new cljs.core.Keyword(null,"names","names",-1943074658),cljs.core.assoc,position,cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~a, ~a",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([surname,name], 0)));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Position is nil, can't update",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),state], null));
}
});
gui.crud.delete_name = (function gui$crud$delete_name(p__16912){
var map__16913 = p__16912;
var map__16913__$1 = (((((!((map__16913 == null))))?(((((map__16913.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16913.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16913):map__16913);
var state = map__16913__$1;
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16913__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
return gui.crud.fix_selection(cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"names","names",-1943074658),cljs.core.dissoc,position));
});
gui.crud.crud = (function gui$crud$crud(){
var with_let16916 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let16916","with-let16916",-603510933));
var temp__5739__auto___16935 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5739__auto___16935 == null)){
} else {
var c__16460__auto___16936 = temp__5739__auto___16935;
if((with_let16916.generation === c__16460__auto___16936.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let16916.generation = c__16460__auto___16936.ratomGeneration);
}


var init16917 = (with_let16916.length === (0));
var state = ((init16917)?(with_let16916[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"names","names",-1943074658),cljs.core.zipmap(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1((function (){
return gui.util.new_id.cljs$core$IFn$_invoke$arity$1("name");
})),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Emil, Hans","Mustermann, Max","Tisch, Roman"], null)),new cljs.core.Keyword(null,"prefix","prefix",-265908465),"",new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"surname","surname",1407918027),""], null),new cljs.core.Keyword(null,"position","position",-2011731912),null], null))):(with_let16916[(0)]));
var names_state = ((init16917)?(with_let16916[(1)] = reagent.core.cursor(state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"names","names",-1943074658)], null))):(with_let16916[(1)]));
var name_state = ((init16917)?(with_let16916[(2)] = reagent.core.cursor(state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961)], null))):(with_let16916[(2)]));
var position_state = ((init16917)?(with_let16916[(3)] = reagent.core.cursor(state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912)], null))):(with_let16916[(3)]));
var filter_id = ((init16917)?(with_let16916[(4)] = gui.util.new_id.cljs$core$IFn$_invoke$arity$1("filter")):(with_let16916[(4)]));
var set_filter = ((init16917)?(with_let16916[(5)] = (function (e){
return reagent.core.rswap_BANG_(state,(function (p1__16915_SHARP_){
return gui.crud.fix_selection(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16915_SHARP_,new cljs.core.Keyword(null,"prefix","prefix",-265908465),e.target.value));
}));
})):(with_let16916[(5)]));
var res__16461__auto__ = (function (){var map__16918 = cljs.core.deref(state);
var map__16918__$1 = (((((!((map__16918 == null))))?(((((map__16918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16918.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16918):map__16918);
var prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16918__$1,new cljs.core.Keyword(null,"prefix","prefix",-265908465));
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16918__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card","div.card",-459317104),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"grid","grid",402978600),"\"filter none\"\n\"names name\"\n\"btnbar btnbar\"\n/ 1fr 1fr"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"for","for",-1323786319),filter_id,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"grid-area","grid-area",-1829717451),"filter",new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),"Filter prefix: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),set_filter,new cljs.core.Keyword(null,"value","value",305978217),prefix,new cljs.core.Keyword(null,"id","id",-1388402092),filter_id], null)], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [gui.crud.filter_list,names_state,position_state,new cljs.core.Keyword(null,"filter","filter",-948537934),reagent.core.partial.cljs$core$IFn$_invoke$arity$variadic(gui.crud.filter_fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix], 0)),new cljs.core.Keyword(null,"size","size",1098693007),(3),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"grid-area","grid-area",-1829717451),"names"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gui.crud.name_input,name_state], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [gui.crud.crud_button_bar,new cljs.core.Keyword(null,"has-selection?","has-selection?",1994513172),position,new cljs.core.Keyword(null,"on-create","on-create",-1764191440),reagent.core.partial.cljs$core$IFn$_invoke$arity$variadic(reagent.core.rswap_BANG_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([state,gui.crud.create_name], 0)),new cljs.core.Keyword(null,"on-update","on-update",1680216496),reagent.core.partial.cljs$core$IFn$_invoke$arity$variadic(reagent.core.rswap_BANG_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([state,gui.crud.update_name], 0)),new cljs.core.Keyword(null,"on-delete","on-delete",-1882190355),reagent.core.partial.cljs$core$IFn$_invoke$arity$variadic(reagent.core.rswap_BANG_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([state,gui.crud.delete_name], 0))], null)], null);
})();

return res__16461__auto__;
});

//# sourceMappingURL=gui.crud.js.map
