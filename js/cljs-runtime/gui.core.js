goog.provide('gui.core');
gui.core.counter = (function gui$core$counter(){
var with_let16926 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let16926","with-let16926",1737455857));
var temp__5739__auto___16966 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5739__auto___16966 == null)){
} else {
var c__16460__auto___16967 = temp__5739__auto___16966;
if((with_let16926.generation === c__16460__auto___16967.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let16926.generation = c__16460__auto___16967.ratomGeneration);
}


var init16927 = (with_let16926.length === (0));
var c = ((init16927)?(with_let16926[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0))):(with_let16926[(0)]));
var res__16461__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card","div.card",-459317104),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read-only","read-only",-191706886),true,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(c)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(c,cljs.core.inc);
})], null),"Count"], null)], null);

return res__16461__auto__;
});
gui.core.str__GT_number = (function gui$core$str__GT_number(n){
if(cljs.core.empty_QMARK_(n)){
return NaN;
} else {
return Number(n);
}
});
gui.core.temperature_converter = (function gui$core$temperature_converter(){
var with_let16930 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let16930","with-let16930",615210754));
var temp__5739__auto___16968 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5739__auto___16968 == null)){
} else {
var c__16460__auto___16969 = temp__5739__auto___16968;
if((with_let16930.generation === c__16460__auto___16969.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let16930.generation = c__16460__auto___16969.ratomGeneration);
}


var init16931 = (with_let16930.length === (0));
var data = ((init16931)?(with_let16930[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"celcius","celcius",715865780),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"valid?","valid?",-212412379),true], null),new cljs.core.Keyword(null,"fahrenheit","fahrenheit",-1183381801),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"valid?","valid?",-212412379),true], null)], null))):(with_let16930[(0)]));
var c__GT_f = ((init16931)?(with_let16930[(1)] = (function (c){
return ((c * ((9) / (5))) + (32));
})):(with_let16930[(1)]));
var f__GT_c = ((init16931)?(with_let16930[(2)] = (function (f){
return ((f - (32)) * ((5) / (9)));
})):(with_let16930[(2)]));
var on_change = ((init16931)?(with_let16930[(3)] = (function (from,to,conv){
return (function (e){
var val = e.target.value;
var num = gui.core.str__GT_number(val);
if(cljs.core.not(Number.isNaN(num))){
return cljs.core.reset_BANG_(data,cljs.core.PersistentArrayMap.createAsIfByAssoc([from,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),val,new cljs.core.Keyword(null,"valid?","valid?",-212412379),true], null),to,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),(conv.cljs$core$IFn$_invoke$arity$1 ? conv.cljs$core$IFn$_invoke$arity$1(num) : conv.call(null,num)).toFixed(),new cljs.core.Keyword(null,"valid?","valid?",-212412379),true], null)]));
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.assoc,from,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),val,new cljs.core.Keyword(null,"valid?","valid?",-212412379),false], null));
}
});
})):(with_let16930[(3)]));
var input = ((init16931)?(with_let16930[(4)] = (function (p__16937){
var map__16938 = p__16937;
var map__16938__$1 = (((((!((map__16938 == null))))?(((((map__16938.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16938.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16938):map__16938);
var map__16939 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16938__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__16939__$1 = (((((!((map__16939 == null))))?(((((map__16939.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16939.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16939):map__16939);
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16939__$1,new cljs.core.Keyword(null,"val","val",128701612));
var valid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16939__$1,new cljs.core.Keyword(null,"valid?","valid?",-212412379));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16938__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16938__$1,new cljs.core.Keyword(null,"to","to",192099007));
var conv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16938__$1,new cljs.core.Keyword(null,"conv","conv",984927890));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(valid_QMARK_)?null:"invalid"),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(on_change.cljs$core$IFn$_invoke$arity$3 ? on_change.cljs$core$IFn$_invoke$arity$3(from,to,conv) : on_change.call(null,from,to,conv))], null)], null);
})):(with_let16930[(4)]));
var res__16461__auto__ = (function (){var map__16942 = cljs.core.deref(data);
var map__16942__$1 = (((((!((map__16942 == null))))?(((((map__16942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16942.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16942):map__16942);
var celcius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16942__$1,new cljs.core.Keyword(null,"celcius","celcius",715865780));
var fahrenheit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16942__$1,new cljs.core.Keyword(null,"fahrenheit","fahrenheit",-1183381801));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card","div.card",-459317104),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),celcius,new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"celcius","celcius",715865780),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"fahrenheit","fahrenheit",-1183381801),new cljs.core.Keyword(null,"conv","conv",984927890),c__GT_f], null)], null)," Celcius"], null)," = ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),fahrenheit,new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"fahrenheit","fahrenheit",-1183381801),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"celcius","celcius",715865780),new cljs.core.Keyword(null,"conv","conv",984927890),f__GT_c], null)], null)," Fahrenheit"], null)], null);
})();

return res__16461__auto__;
});
gui.core.Date__GT_input = (function gui$core$Date__GT_input(date){
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~2,'0D.~2,'0D.~4,'0D",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([date.getDate(),(date.getMonth() + (1)),date.getFullYear()], 0));
});
/**
 * Parse a string of the form `dd.mm.yyyy` to a vector of (year month day)
 * 
 *   Returns nil if invalid. Only validates form, not that the parsed date exists.
 */
gui.core.str__GT_date = (function gui$core$str__GT_date(s){
var temp__5735__auto__ = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(gui.core.str__GT_number,cljs.core.rest(cljs.core.re_matches(/(\d{2})\.(\d{2})\.(\d{4})/,s)))));
if(temp__5735__auto__){
var date = temp__5735__auto__;
return cljs.core.vec(date);
} else {
return null;
}
});
gui.core.input = (function gui$core$input(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16970 = arguments.length;
var i__4737__auto___16971 = (0);
while(true){
if((i__4737__auto___16971 < len__4736__auto___16970)){
args__4742__auto__.push((arguments[i__4737__auto___16971]));

var G__16972 = (i__4737__auto___16971 + (1));
i__4737__auto___16971 = G__16972;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return gui.core.input.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(gui.core.input.cljs$core$IFn$_invoke$arity$variadic = (function (value,p__16946){
var map__16947 = p__16946;
var map__16947__$1 = (((((!((map__16947 == null))))?(((((map__16947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16947.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16947):map__16947);
var props = map__16947__$1;
var valid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16947__$1,new cljs.core.Keyword(null,"valid?","valid?",-212412379),cljs.core.any_QMARK_);
var with_let16949 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let16949","with-let16949",534795928));
var temp__5739__auto___16973 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5739__auto___16973 == null)){
} else {
var c__16460__auto___16974 = temp__5739__auto___16973;
if((with_let16949.generation === c__16460__auto___16974.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let16949.generation = c__16460__auto___16974.ratomGeneration);
}


var init16950 = (with_let16949.length === (0));
var on_change = ((init16950)?(with_let16949[(0)] = (function (e){
return cljs.core.reset_BANG_(value,e.target.value);
})):(with_let16949[(0)]));
var res__16461__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),reagent.core.merge_props.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_((function (){var G__16951 = cljs.core.deref(value);
return (valid_QMARK_.cljs$core$IFn$_invoke$arity$1 ? valid_QMARK_.cljs$core$IFn$_invoke$arity$1(G__16951) : valid_QMARK_.call(null,G__16951));
})())?null:new cljs.core.Keyword(null,"invalid","invalid",412869516)),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change], null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"valid?","valid?",-212412379)))], null);

return res__16461__auto__;
}));

(gui.core.input.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(gui.core.input.cljs$lang$applyTo = (function (seq16944){
var G__16945 = cljs.core.first(seq16944);
var seq16944__$1 = cljs.core.next(seq16944);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16945,seq16944__$1);
}));

gui.core.flight_booker = (function gui$core$flight_booker(){
var with_let16952 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let16952","with-let16952",486729970));
var temp__5739__auto___16975 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5739__auto___16975 == null)){
} else {
var c__16460__auto___16976 = temp__5739__auto___16975;
if((with_let16952.generation === c__16460__auto___16976.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let16952.generation = c__16460__auto___16976.ratomGeneration);
}


var init16953 = (with_let16952.length === (0));
var now = ((init16953)?(with_let16952[(0)] = gui.core.Date__GT_input((new Date()))):(with_let16952[(0)]));
var data = ((init16953)?(with_let16952[(1)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flight-type","flight-type",-24264583),new cljs.core.Keyword(null,"one-way","one-way",-1465093708),new cljs.core.Keyword(null,"start","start",-355208981),now,new cljs.core.Keyword(null,"end","end",-268185958),now], null))):(with_let16952[(1)]));
var valid_QMARK_ = ((init16953)?(with_let16952[(2)] = (function (p__16954){
var map__16955 = p__16954;
var map__16955__$1 = (((((!((map__16955 == null))))?(((((map__16955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16955.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16955):map__16955);
var flight_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16955__$1,new cljs.core.Keyword(null,"flight-type","flight-type",-24264583));
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16955__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16955__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var start__$1 = gui.core.str__GT_date(start);
var end__$1 = gui.core.str__GT_date(end);
var and__4115__auto__ = start__$1;
if(cljs.core.truth_(and__4115__auto__)){
var or__4126__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(flight_type,new cljs.core.Keyword(null,"one-way","one-way",-1465093708));
if(or__4126__auto__){
return or__4126__auto__;
} else {
var and__4115__auto____$1 = end__$1;
if(cljs.core.truth_(and__4115__auto____$1)){
return (cljs.core.compare(start__$1,end__$1) <= (0));
} else {
return and__4115__auto____$1;
}
}
} else {
return and__4115__auto__;
}
})):(with_let16952[(2)]));
var on_select_change = ((init16953)?(with_let16952[(3)] = (function (e){
var t = e.target.value;
return reagent.core.rswap_BANG_.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"flight-type","flight-type",-24264583),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(t)], 0));
})):(with_let16952[(3)]));
var start = ((init16953)?(with_let16952[(4)] = reagent.core.cursor(data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start","start",-355208981)], null))):(with_let16952[(4)]));
var end = ((init16953)?(with_let16952[(5)] = reagent.core.cursor(data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"end","end",-268185958)], null))):(with_let16952[(5)]));
var submit = ((init16953)?(with_let16952[(6)] = (function (_){
var map__16957 = cljs.core.deref(data);
var map__16957__$1 = (((((!((map__16957 == null))))?(((((map__16957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16957.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16957):map__16957);
var start__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16957__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16957__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var flight_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16957__$1,new cljs.core.Keyword(null,"flight-type","flight-type",-24264583));
return alert(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"You have booked a ~:[one-way~;return~]~:* flight ~:[for ~a~;~:*from ~a to ~a~]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(flight_type,new cljs.core.Keyword(null,"return","return",-1891502105)))?end__$1:null),start__$1], 0)));
})):(with_let16952[(6)]));
var res__16461__auto__ = (function (){var map__16959 = cljs.core.deref(data);
var map__16959__$1 = (((((!((map__16959 == null))))?(((((map__16959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16959.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16959):map__16959);
var flight_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16959__$1,new cljs.core.Keyword(null,"flight-type","flight-type",-24264583));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card","div.card",-459317104),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"grid-auto-flow","grid-auto-flow",-1754873684),"row"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),flight_type,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_select_change], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"one-way","one-way",-1465093708)], null),"one-way flight"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"return","return",-1891502105)], null),"return flight"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [gui.util.input,start,new cljs.core.Keyword(null,"valid?","valid?",-212412379),gui.core.str__GT_date], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [gui.util.input,end,new cljs.core.Keyword(null,"valid?","valid?",-212412379),gui.core.str__GT_date,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(flight_type,new cljs.core.Keyword(null,"return","return",-1891502105))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),submit,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.not((function (){var G__16961 = cljs.core.deref(data);
return (valid_QMARK_.cljs$core$IFn$_invoke$arity$1 ? valid_QMARK_.cljs$core$IFn$_invoke$arity$1(G__16961) : valid_QMARK_.call(null,G__16961));
})())], null),"Book"], null)], null);
})();

return res__16461__auto__;
});
gui.core.timer = (function gui$core$timer(){
var with_let16962 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let16962","with-let16962",1299032121));
var temp__5739__auto___16977 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5739__auto___16977 == null)){
} else {
var c__16460__auto___16978 = temp__5739__auto___16977;
if((with_let16962.generation === c__16460__auto___16978.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let16962.generation = c__16460__auto___16978.ratomGeneration);
}


var init16963 = (with_let16962.length === (0));
var resolution = ((init16963)?(with_let16962[(0)] = (100)):(with_let16962[(0)]));
var state = ((init16963)?(with_let16962[(1)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"time","time",1385887882),(0),new cljs.core.Keyword(null,"duration","duration",1444101068),(15000)], null))):(with_let16962[(1)]));
var interval = ((init16963)?(with_let16962[(2)] = setInterval(reagent.core.rswap_BANG_,resolution,state,cljs.core.update,new cljs.core.Keyword(null,"time","time",1385887882),reagent.core.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resolution], 0)))):(with_let16962[(2)]));
var reset_time_BANG_ = ((init16963)?(with_let16962[(3)] = (function (_){
return reagent.core.rswap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"time","time",1385887882),(0)], 0));
})):(with_let16962[(3)]));
var duration = ((init16963)?(with_let16962[(4)] = reagent.core.cursor(state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"duration","duration",1444101068)], null))):(with_let16962[(4)]));
var duration_id = ((init16963)?(with_let16962[(5)] = gui.util.new_id.cljs$core$IFn$_invoke$arity$1("duration")):(with_let16962[(5)]));
var bar_id = ((init16963)?(with_let16962[(6)] = gui.util.new_id.cljs$core$IFn$_invoke$arity$1("progress")):(with_let16962[(6)]));
var res__16461__auto__ = (function (){var map__16964 = cljs.core.deref(state);
var map__16964__$1 = (((((!((map__16964 == null))))?(((((map__16964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16964.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16964):map__16964);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16964__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var clamped_time = (function (){var x__4217__auto__ = (function (){var x__4214__auto__ = time;
var y__4215__auto__ = (1);
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})();
var y__4218__auto__ = cljs.core.deref(duration);
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card","div.card",-459317104),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"grid","grid",402978600),"\"bar-label bar\" \"none text\" \"input-label input\" \"reset reset\""], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"for","for",-1323786319),bar_id,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"grid-area","grid-area",-1829717451),"bar-label"], null)], null),"Elapsed Time:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"progress","progress",244323547),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"grid-area","grid-area",-1829717451),"bar"], null),new cljs.core.Keyword(null,"id","id",-1388402092),bar_id,new cljs.core.Keyword(null,"max","max",61366548),cljs.core.deref(duration),new cljs.core.Keyword(null,"value","value",305978217),clamped_time], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"grid-area","grid-area",-1829717451),"text"], null)], null),(clamped_time / (1000)).toFixed((1)),"s"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"for","for",-1323786319),duration_id,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"grid-area","grid-area",-1829717451),"input-label"], null)], null),"Duration:"], null),new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [gui.util.input,duration,new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"id","id",-1388402092),duration_id,new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(30000),new cljs.core.Keyword(null,"step","step",1288888124),(100),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"grid-area","grid-area",-1829717451),"input"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),reset_time_BANG_,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"grid-area","grid-area",-1829717451),"reset"], null)], null),"Reset Timer"], null)], null);
})();
var destroy__16459__auto___16979 = (function (){
return clearInterval(interval);
});
if(reagent.ratom.reactive_QMARK_()){
if((with_let16962.destroy == null)){
(with_let16962.destroy = destroy__16459__auto___16979);
} else {
}
} else {
destroy__16459__auto___16979();
}

return res__16461__auto__;
});
gui.core.app = (function gui$core$app(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gui.core.counter], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gui.core.temperature_converter], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gui.core.flight_booker], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gui.core.timer], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gui.crud.crud], null)], null);
});
gui.core.init_BANG_ = (function gui$core$init_BANG_(){
cljs.core.enable_console_print_BANG_();

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gui.core.app], null),document.getElementById("app"));
});
goog.exportSymbol('gui.core.init_BANG_', gui.core.init_BANG_);

//# sourceMappingURL=gui.core.js.map
