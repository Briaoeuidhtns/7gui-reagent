goog.provide('devtools.util');
devtools.util.lib_info_style = "color:black;font-weight:bold;";
devtools.util.reset_style = "color:black";
devtools.util.advanced_build_explanation_url = "https://github.com/binaryage/cljs-devtools/blob/master/docs/faq.md#why-custom-formatters-do-not-work-for-advanced-builds";
devtools.util._STAR_custom_formatters_active_STAR_ = false;
devtools.util._STAR_console_open_STAR_ = false;
devtools.util._STAR_custom_formatters_warning_reported_STAR_ = false;
devtools.util.pprint_str = (function devtools$util$pprint_str(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15517 = arguments.length;
var i__4737__auto___15518 = (0);
while(true){
if((i__4737__auto___15518 < len__4736__auto___15517)){
args__4742__auto__.push((arguments[i__4737__auto___15518]));

var G__15519 = (i__4737__auto___15518 + (1));
i__4737__auto___15518 = G__15519;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return devtools.util.pprint_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(devtools.util.pprint_str.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__15492_15520 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__15493_15521 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__15494_15522 = true;
var _STAR_print_fn_STAR__temp_val__15495_15523 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__15494_15522);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__15495_15523);

try{var _STAR_print_level_STAR__orig_val__15496_15524 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_level_STAR__temp_val__15497_15525 = (300);
(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__15497_15525);

try{cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.pprint.pprint,args);
}finally {(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__15496_15524);
}}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__15493_15521);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__15492_15520);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
}));

(devtools.util.pprint_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.util.pprint_str.cljs$lang$applyTo = (function (seq15491){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15491));
}));

devtools.util.make_version_info = (function devtools$util$make_version_info(){
return "1.0.2";
});
devtools.util.make_lib_info = (function devtools$util$make_lib_info(){
return ["CLJS DevTools ",devtools.util.make_version_info.call(null)].join('');
});
devtools.util.get_lib_info = (function devtools$util$get_lib_info(){
return devtools.util.make_lib_info.call(null);
});
devtools.util.get_node_info = (function devtools$util$get_node_info(root){
try{var temp__5739__auto__ = (root["process"]);
if((temp__5739__auto__ == null)){
return null;
} else {
var process = temp__5739__auto__;
var version = (process["version"]);
var platform = (process["platform"]);
if(cljs.core.truth_((function (){var and__4115__auto__ = version;
if(cljs.core.truth_(and__4115__auto__)){
return platform;
} else {
return and__4115__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"version","version",425292698),version,new cljs.core.Keyword(null,"platform","platform",-1086422114),platform], null);
} else {
return null;
}
}
}catch (e15498){var _ = e15498;
return null;
}});
devtools.util.get_node_description = (function devtools$util$get_node_description(node_info){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"platform","platform",-1086422114).cljs$core$IFn$_invoke$arity$1(node_info);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "?";
}
})()),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"version","version",425292698).cljs$core$IFn$_invoke$arity$1(node_info);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "?";
}
})())].join('');
});
devtools.util.in_node_context_QMARK_ = (function devtools$util$in_node_context_QMARK_(){
return (!((devtools.util.get_node_info.call(null,devtools.context.get_root.call(null)) == null)));
});
devtools.util.get_js_context_description = (function devtools$util$get_js_context_description(){
var temp__5733__auto__ = devtools.util.get_node_info.call(null,devtools.context.get_root.call(null));
if(cljs.core.truth_(temp__5733__auto__)){
var node_info = temp__5733__auto__;
return ["node/",devtools.util.get_node_description.call(null,node_info)].join('');
} else {
var user_agent = goog.userAgent.getUserAgentString();
if(cljs.core.empty_QMARK_(user_agent)){
return "<unknown context>";
} else {
return user_agent;
}
}
});
devtools.util.unknown_feature_msg = (function devtools$util$unknown_feature_msg(feature,known_features,lib_info){
return ["No such feature ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(feature)," is currently available in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_info),". ","The list of supported features is ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([known_features], 0)),"."].join('');
});
devtools.util.feature_not_available_msg = (function devtools$util$feature_not_available_msg(feature){
return ["Feature ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(feature)," cannot be installed. ","Unsupported Javascript context: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.get_js_context_description.call(null)),"."].join('');
});
devtools.util.custom_formatters_not_active_msg = (function devtools$util$custom_formatters_not_active_msg(){
return ["CLJS DevTools: some custom formatters were not rendered.\n","https://github.com/binaryage/cljs-devtools/blob/master/docs/faq.md#why-some-custom-formatters-were-not-rendered"].join('');
});
devtools.util.formatter_key = "devtoolsFormatters";
devtools.util.get_formatters_safe = (function devtools$util$get_formatters_safe(){
var formatters = (devtools.context.get_root.call(null)[devtools.util.formatter_key]);
if(cljs.core.array_QMARK_(formatters)){
return formatters;
} else {
return [];
}
});
devtools.util.set_formatters_safe_BANG_ = (function devtools$util$set_formatters_safe_BANG_(new_formatters){
if((((new_formatters == null)) || (cljs.core.array_QMARK_(new_formatters)))){
} else {
throw (new Error("Assert failed: (or (nil? new-formatters) (array? new-formatters))"));
}

return (devtools.context.get_root.call(null)[devtools.util.formatter_key] = ((cljs.core.empty_QMARK_(new_formatters))?null:new_formatters));
});
devtools.util.print_config_overrides_if_requested_BANG_ = (function devtools$util$print_config_overrides_if_requested_BANG_(msg){
if(cljs.core.truth_(devtools.prefs.pref(new cljs.core.Keyword(null,"print-config-overrides","print-config-overrides",-274716965)))){
var diff = cljs.core.second(clojure.data.diff(cljs.core.deref(devtools.prefs.default_config),devtools.prefs.get_prefs()));
if((!(cljs.core.empty_QMARK_(diff)))){
return devtools.context.get_console.call(null).info(msg,devtools.util.pprint_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([diff], 0)));
} else {
return null;
}
} else {
return null;
}
});

/**
* @constructor
*/
devtools.util.CustomFormattersDetector = (function (){
});

(devtools.util.CustomFormattersDetector.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(devtools.util.CustomFormattersDetector.cljs$lang$type = true);

(devtools.util.CustomFormattersDetector.cljs$lang$ctorStr = "devtools.util/CustomFormattersDetector");

(devtools.util.CustomFormattersDetector.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"devtools.util/CustomFormattersDetector");
}));

/**
 * Positional factory function for devtools.util/CustomFormattersDetector.
 */
devtools.util.__GT_CustomFormattersDetector = (function devtools$util$__GT_CustomFormattersDetector(){
return (new devtools.util.CustomFormattersDetector());
});

devtools.util.make_detector = (function devtools$util$make_detector(){
var detector = (new devtools.util.CustomFormattersDetector());
(detector["header"] = (function (_object,_config){
(devtools.util._STAR_custom_formatters_active_STAR_ = true);

return null;
}));

(detector["hasBody"] = cljs.core.constantly(false));

(detector["body"] = cljs.core.constantly(null));

return detector;
});
devtools.util.install_detector_BANG_ = (function devtools$util$install_detector_BANG_(detector){
var formatters = devtools.util.get_formatters_safe();
formatters.push(detector);

return devtools.util.set_formatters_safe_BANG_(formatters);
});
devtools.util.uninstall_detector_BANG_ = (function devtools$util$uninstall_detector_BANG_(detector){
var current_formatters = (devtools.context.get_root.call(null)[devtools.util.formatter_key]);
if(cljs.core.array_QMARK_(current_formatters)){
var new_formatters = current_formatters.filter((function (p1__15499_SHARP_){
return (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(detector,p1__15499_SHARP_)));
}));
return devtools.util.set_formatters_safe_BANG_(new_formatters);
} else {
return null;
}
});
devtools.util.check_custom_formatters_active_BANG_ = (function devtools$util$check_custom_formatters_active_BANG_(){
if(cljs.core.truth_((function (){var and__4115__auto__ = devtools.util._STAR_console_open_STAR_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(devtools.util._STAR_custom_formatters_active_STAR_);
} else {
return and__4115__auto__;
}
})())){
if(cljs.core.truth_(devtools.util._STAR_custom_formatters_warning_reported_STAR_)){
return null;
} else {
(devtools.util._STAR_custom_formatters_warning_reported_STAR_ = true);

return devtools.context.get_console.call(null).warn(devtools.util.custom_formatters_not_active_msg.call(null));
}
} else {
return null;
}
});
devtools.util.uninstall_detector_and_check_custom_formatters_active_BANG_ = (function devtools$util$uninstall_detector_and_check_custom_formatters_active_BANG_(detector){
devtools.util.uninstall_detector_BANG_(detector);

return devtools.util.check_custom_formatters_active_BANG_();
});
devtools.util.make_detection_printer = (function devtools$util$make_detection_printer(){
var f = (function (){
return null;
});
var G__15500_15526 = f;
var target__13007__auto___15527 = G__15500_15526;
if(cljs.core.truth_(target__13007__auto___15527)){
} else {
throw (new Error(["Assert failed: ",["unable to locate object path ",null," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15500_15526)].join(''),"\n","target__13007__auto__"].join('')));
}

(target__13007__auto___15527["toString"] = (function (){
(devtools.util._STAR_console_open_STAR_ = true);

setTimeout(devtools.util.check_custom_formatters_active_BANG_,(0));

return "";
}));


return f;
});
devtools.util.wrap_with_custom_formatter_detection_BANG_ = (function devtools$util$wrap_with_custom_formatter_detection_BANG_(f){
if(cljs.core.not(devtools.prefs.pref(new cljs.core.Keyword(null,"dont-detect-custom-formatters","dont-detect-custom-formatters",-29005804)))){
var detector = devtools.util.make_detector();
devtools.util.install_detector_BANG_(detector);

var G__15501_15528 = "%c%s";
var G__15502_15529 = "color:transparent";
var G__15503_15530 = devtools.util.make_detection_printer();
(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__15501_15528,G__15502_15529,G__15503_15530) : f.call(null,G__15501_15528,G__15502_15529,G__15503_15530));

return setTimeout(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(devtools.util.uninstall_detector_and_check_custom_formatters_active_BANG_,detector),(0));
} else {
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}
});
devtools.util.feature_for_display = (function devtools$util$feature_for_display(installed_features,feature){
var color = (cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([feature]),installed_features))?"color:#0000ff":"color:#ccc");
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["%c%s",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [color,cljs.core.str.cljs$core$IFn$_invoke$arity$1(feature)], null)], null);
});
devtools.util.feature_list_display = (function devtools$util$feature_list_display(installed_features,feature_groups){
var labels = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(devtools.util.feature_for_display,installed_features),new cljs.core.Keyword(null,"all","all",892129742).cljs$core$IFn$_invoke$arity$1(feature_groups));
var _STAR_ = (function (accum,val){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(accum))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(val))].join(''),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.second(accum),cljs.core.second(val))], null);
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(_STAR_,cljs.core.first(labels),cljs.core.rest(labels));
});
devtools.util.display_banner_BANG_ = (function devtools$util$display_banner_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___15531 = arguments.length;
var i__4737__auto___15532 = (0);
while(true){
if((i__4737__auto___15532 < len__4736__auto___15531)){
args__4742__auto__.push((arguments[i__4737__auto___15532]));

var G__15533 = (i__4737__auto___15532 + (1));
i__4737__auto___15532 = G__15533;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return devtools.util.display_banner_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(devtools.util.display_banner_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (installed_features,feature_groups,fmt,params){
var vec__15508 = devtools.util.feature_list_display(installed_features,feature_groups);
var fmt_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15508,(0),null);
var fmt_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15508,(1),null);
return devtools.util.wrap_with_custom_formatter_detection_BANG_((function() { 
var G__15534__delegate = function (add_fmt,add_args){
var items = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt_str),cljs.core.str.cljs$core$IFn$_invoke$arity$1(add_fmt)].join('')], null),params,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_params,add_args], 0));
var console = devtools.context.get_console.call(null);
return console.info.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(items));
};
var G__15534 = function (add_fmt,var_args){
var add_args = null;
if (arguments.length > 1) {
var G__15535__i = 0, G__15535__a = new Array(arguments.length -  1);
while (G__15535__i < G__15535__a.length) {G__15535__a[G__15535__i] = arguments[G__15535__i + 1]; ++G__15535__i;}
  add_args = new cljs.core.IndexedSeq(G__15535__a,0,null);
} 
return G__15534__delegate.call(this,add_fmt,add_args);};
G__15534.cljs$lang$maxFixedArity = 1;
G__15534.cljs$lang$applyTo = (function (arglist__15536){
var add_fmt = cljs.core.first(arglist__15536);
var add_args = cljs.core.rest(arglist__15536);
return G__15534__delegate(add_fmt,add_args);
});
G__15534.cljs$core$IFn$_invoke$arity$variadic = G__15534__delegate;
return G__15534;
})()
);
}));

(devtools.util.display_banner_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(devtools.util.display_banner_BANG_.cljs$lang$applyTo = (function (seq15504){
var G__15505 = cljs.core.first(seq15504);
var seq15504__$1 = cljs.core.next(seq15504);
var G__15506 = cljs.core.first(seq15504__$1);
var seq15504__$2 = cljs.core.next(seq15504__$1);
var G__15507 = cljs.core.first(seq15504__$2);
var seq15504__$3 = cljs.core.next(seq15504__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15505,G__15506,G__15507,seq15504__$3);
}));

devtools.util.display_banner_if_needed_BANG_ = (function devtools$util$display_banner_if_needed_BANG_(features_to_install,feature_groups){
if(cljs.core.not(devtools.prefs.pref(new cljs.core.Keyword(null,"dont-display-banner","dont-display-banner",-1175550370)))){
var banner = "Installing %c%s%c and enabling features";
return devtools.util.display_banner_BANG_.cljs$core$IFn$_invoke$arity$variadic(features_to_install,feature_groups,banner,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([devtools.util.lib_info_style,devtools.util.get_lib_info(),devtools.util.reset_style], 0));
} else {
return (devtools.util._STAR_custom_formatters_active_STAR_ = true);
}
});
devtools.util.report_unknown_features_BANG_ = (function devtools$util$report_unknown_features_BANG_(features,known_features){
var lib_info = devtools.util.get_lib_info();
var seq__15511 = cljs.core.seq(features);
var chunk__15512 = null;
var count__15513 = (0);
var i__15514 = (0);
while(true){
if((i__15514 < count__15513)){
var feature = chunk__15512.cljs$core$IIndexed$_nth$arity$2(null,i__15514);
if(cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([feature]),known_features))){
devtools.context.get_console.call(null).warn(devtools.util.unknown_feature_msg.call(null,feature,known_features,lib_info));
} else {
}


var G__15537 = seq__15511;
var G__15538 = chunk__15512;
var G__15539 = count__15513;
var G__15540 = (i__15514 + (1));
seq__15511 = G__15537;
chunk__15512 = G__15538;
count__15513 = G__15539;
i__15514 = G__15540;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__15511);
if(temp__5735__auto__){
var seq__15511__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15511__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__15511__$1);
var G__15541 = cljs.core.chunk_rest(seq__15511__$1);
var G__15542 = c__4556__auto__;
var G__15543 = cljs.core.count(c__4556__auto__);
var G__15544 = (0);
seq__15511 = G__15541;
chunk__15512 = G__15542;
count__15513 = G__15543;
i__15514 = G__15544;
continue;
} else {
var feature = cljs.core.first(seq__15511__$1);
if(cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([feature]),known_features))){
devtools.context.get_console.call(null).warn(devtools.util.unknown_feature_msg.call(null,feature,known_features,lib_info));
} else {
}


var G__15545 = cljs.core.next(seq__15511__$1);
var G__15546 = null;
var G__15547 = (0);
var G__15548 = (0);
seq__15511 = G__15545;
chunk__15512 = G__15546;
count__15513 = G__15547;
i__15514 = G__15548;
continue;
}
} else {
return null;
}
}
break;
}
});
devtools.util.is_known_feature_QMARK_ = (function devtools$util$is_known_feature_QMARK_(known_features,feature){
return cljs.core.boolean$(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([feature]),known_features));
});
devtools.util.convert_legacy_feature = (function devtools$util$convert_legacy_feature(feature){
var G__15515 = feature;
var G__15515__$1 = (((G__15515 instanceof cljs.core.Keyword))?G__15515.fqn:null);
switch (G__15515__$1) {
case "custom-formatters":
return new cljs.core.Keyword(null,"formatters","formatters",-1875637118);

break;
case "sanity-hints":
return new cljs.core.Keyword(null,"hints","hints",-991113151);

break;
default:
return feature;

}
});
devtools.util.convert_legacy_features = (function devtools$util$convert_legacy_features(features){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.util.convert_legacy_feature,features);
});
devtools.util.sanititze_features_BANG_ = (function devtools$util$sanititze_features_BANG_(features,feature_groups){
var known_features = new cljs.core.Keyword(null,"all","all",892129742).cljs$core$IFn$_invoke$arity$1(feature_groups);
var features__$1 = devtools.util.convert_legacy_features(features);
devtools.util.report_unknown_features_BANG_(features__$1,known_features);

return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(devtools.util.is_known_feature_QMARK_,known_features),features__$1);
});
devtools.util.resolve_features_BANG_ = (function devtools$util$resolve_features_BANG_(features_desc,feature_groups){
var features = (cljs.core.truth_((((features_desc instanceof cljs.core.Keyword))?features_desc.cljs$core$IFn$_invoke$arity$1(feature_groups):false))?(features_desc.cljs$core$IFn$_invoke$arity$1 ? features_desc.cljs$core$IFn$_invoke$arity$1(feature_groups) : features_desc.call(null,feature_groups)):(((features_desc == null))?new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(feature_groups):((cljs.core.seqable_QMARK_(features_desc))?features_desc:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [features_desc], null)
)));
return devtools.util.sanititze_features_BANG_(features,feature_groups);
});
devtools.util.under_advanced_build_QMARK_ = (function devtools$util$under_advanced_build_QMARK_(){
if(cljs.core.not(devtools.prefs.pref(new cljs.core.Keyword(null,"disable-advanced-mode-check","disable-advanced-mode-check",-968346539)))){
return ((function (){var temp__5733__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5733__auto__)){
var o15516 = temp__5733__auto__;
return (o15516["version"]);
} else {
return null;
}
})() == null);
} else {
return null;
}
});
devtools.util.display_advanced_build_warning_if_needed_BANG_ = (function devtools$util$display_advanced_build_warning_if_needed_BANG_(){
if(cljs.core.not(devtools.prefs.pref(new cljs.core.Keyword(null,"dont-display-advanced-build-warning","dont-display-advanced-build-warning",-91321563)))){
var banner = ["%cNOT%c installing %c%s%c under advanced build. See ",devtools.util.advanced_build_explanation_url,"."].join('');
return devtools.context.get_console.call(null).warn(banner,"font-weight:bold",devtools.util.reset_style,devtools.util.lib_info_style,devtools.util.get_lib_info(),devtools.util.reset_style);
} else {
return null;
}
});
devtools.util.install_feature_BANG_ = (function devtools$util$install_feature_BANG_(feature,features_to_install,available_fn,install_fn){
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([feature]),features_to_install))){
if(cljs.core.truth_((function (){var or__4126__auto__ = devtools.prefs.pref(new cljs.core.Keyword(null,"bypass-availability-checks","bypass-availability-checks",1934691680));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (available_fn.cljs$core$IFn$_invoke$arity$1 ? available_fn.cljs$core$IFn$_invoke$arity$1(feature) : available_fn.call(null,feature));
}
})())){
return (install_fn.cljs$core$IFn$_invoke$arity$0 ? install_fn.cljs$core$IFn$_invoke$arity$0() : install_fn.call(null));
} else {
return devtools.context.get_console.call(null).warn(devtools.util.feature_not_available_msg.call(null,feature));
}
} else {
return null;
}
});

//# sourceMappingURL=devtools.util.js.map