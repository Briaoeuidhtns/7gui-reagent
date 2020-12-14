goog.provide('devtools.formatters.budgeting');
devtools.formatters.budgeting.header_expander_depth_cost = (2);
devtools.formatters.budgeting.over_budget_values = (((typeof WeakSet !== 'undefined'))?(new WeakSet()):cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY));
devtools.formatters.budgeting.add_over_budget_value_BANG_ = (function devtools$formatters$budgeting$add_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_(devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_(devtools.formatters.budgeting.over_budget_values,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__12987__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__12987__auto__["add"]).call(o__12987__auto__,value);
}
});
devtools.formatters.budgeting.delete_over_budget_value_BANG_ = (function devtools$formatters$budgeting$delete_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_(devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_(devtools.formatters.budgeting.over_budget_values,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__12987__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__12987__auto__["delete"]).call(o__12987__auto__,value);
}
});
devtools.formatters.budgeting.has_over_budget_value_QMARK_ = (function devtools$formatters$budgeting$has_over_budget_value_QMARK_(value){
if(cljs.core.volatile_QMARK_(devtools.formatters.budgeting.over_budget_values)){
return cljs.core.contains_QMARK_(cljs.core.deref(devtools.formatters.budgeting.over_budget_values),value);
} else {
var o__12987__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__12987__auto__["has"]).call(o__12987__auto__,value);
}
});
devtools.formatters.budgeting.object_reference_QMARK_ = (function devtools$formatters$budgeting$object_reference_QMARK_(json_ml){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(json_ml),"object");
});
devtools.formatters.budgeting.determine_depth = (function devtools$formatters$budgeting$determine_depth(json_ml){
if(cljs.core.array_QMARK_(json_ml)){
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.formatters.budgeting.determine_depth,json_ml)) + (1));
} else {
return (0);
}
});
devtools.formatters.budgeting.has_any_object_reference_QMARK_ = (function devtools$formatters$budgeting$has_any_object_reference_QMARK_(json_ml){
if(cljs.core.array_QMARK_(json_ml)){
if(devtools.formatters.budgeting.object_reference_QMARK_(json_ml)){
return true;
} else {
return cljs.core.some(devtools.formatters.budgeting.has_any_object_reference_QMARK_,json_ml);
}
} else {
return null;
}
});
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_ = (function devtools$formatters$budgeting$transfer_remaining_depth_budget_BANG_(object_reference,depth_budget){
if((!((depth_budget < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

var data = cljs.core.second(object_reference);
var _ = ((cljs.core.object_QMARK_(data))?null:(function(){throw (new Error("Assert failed: (object? data)"))})());
var config = (data["config"]);
var G__16116 = data;
var target__13007__auto__ = G__16116;
if(cljs.core.truth_(target__13007__auto__)){
} else {
throw (new Error(["Assert failed: ",["unable to locate object path ",null," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16116)].join(''),"\n","target__13007__auto__"].join('')));
}

(target__13007__auto__["config"] = devtools.formatters.state.set_depth_budget(config,depth_budget));

return G__16116;
});
devtools.formatters.budgeting.distribute_budget_BANG_ = (function devtools$formatters$budgeting$distribute_budget_BANG_(json_ml,depth_budget){
if((!((depth_budget < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

if(cljs.core.array_QMARK_(json_ml)){
var new_depth_budget_16139 = (depth_budget - (1));
if(devtools.formatters.budgeting.object_reference_QMARK_(json_ml)){
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_(json_ml,new_depth_budget_16139);
} else {
var seq__16123_16140 = cljs.core.seq(json_ml);
var chunk__16124_16141 = null;
var count__16125_16142 = (0);
var i__16126_16143 = (0);
while(true){
if((i__16126_16143 < count__16125_16142)){
var item_16144 = chunk__16124_16141.cljs$core$IIndexed$_nth$arity$2(null,i__16126_16143);
(devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2 ? devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2(item_16144,new_depth_budget_16139) : devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_16144,new_depth_budget_16139));


var G__16145 = seq__16123_16140;
var G__16146 = chunk__16124_16141;
var G__16147 = count__16125_16142;
var G__16148 = (i__16126_16143 + (1));
seq__16123_16140 = G__16145;
chunk__16124_16141 = G__16146;
count__16125_16142 = G__16147;
i__16126_16143 = G__16148;
continue;
} else {
var temp__5735__auto___16149 = cljs.core.seq(seq__16123_16140);
if(temp__5735__auto___16149){
var seq__16123_16150__$1 = temp__5735__auto___16149;
if(cljs.core.chunked_seq_QMARK_(seq__16123_16150__$1)){
var c__4556__auto___16151 = cljs.core.chunk_first(seq__16123_16150__$1);
var G__16152 = cljs.core.chunk_rest(seq__16123_16150__$1);
var G__16153 = c__4556__auto___16151;
var G__16154 = cljs.core.count(c__4556__auto___16151);
var G__16155 = (0);
seq__16123_16140 = G__16152;
chunk__16124_16141 = G__16153;
count__16125_16142 = G__16154;
i__16126_16143 = G__16155;
continue;
} else {
var item_16156 = cljs.core.first(seq__16123_16150__$1);
(devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2 ? devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2(item_16156,new_depth_budget_16139) : devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_16156,new_depth_budget_16139));


var G__16157 = cljs.core.next(seq__16123_16150__$1);
var G__16158 = null;
var G__16159 = (0);
var G__16160 = (0);
seq__16123_16140 = G__16157;
chunk__16124_16141 = G__16158;
count__16125_16142 = G__16159;
i__16126_16143 = G__16160;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return json_ml;
});
devtools.formatters.budgeting.was_over_budget_QMARK__BANG_ = (function devtools$formatters$budgeting$was_over_budget_QMARK__BANG_(value){
if(cljs.core.truth_(devtools.formatters.budgeting.has_over_budget_value_QMARK_(value))){
devtools.formatters.budgeting.delete_over_budget_value_BANG_(value);

return true;
} else {
return null;
}
});
devtools.formatters.budgeting.alter_json_ml_to_fit_in_remaining_budget_BANG_ = (function devtools$formatters$budgeting$alter_json_ml_to_fit_in_remaining_budget_BANG_(value,json_ml){
var temp__5733__auto__ = devtools.formatters.helpers.pref(new cljs.core.Keyword(null,"initial-hierarchy-depth-budget","initial-hierarchy-depth-budget",-482715807));
if(cljs.core.truth_(temp__5733__auto__)){
var initial_hierarchy_depth_budget = temp__5733__auto__;
var remaining_depth_budget = (function (){var or__4126__auto__ = devtools.formatters.state.get_depth_budget();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (initial_hierarchy_depth_budget - (1));
}
})();
var depth = devtools.formatters.budgeting.determine_depth(json_ml);
var final_QMARK_ = cljs.core.not(devtools.formatters.budgeting.has_any_object_reference_QMARK_(json_ml));
var needed_depth = ((final_QMARK_)?depth:(depth + devtools.formatters.budgeting.header_expander_depth_cost));
if((remaining_depth_budget >= needed_depth)){
return devtools.formatters.budgeting.distribute_budget_BANG_(json_ml,remaining_depth_budget);
} else {
var expander_ml = devtools.formatters.templating.render_markup(devtools.formatters.markup._LT_header_expander_GT_(value));
devtools.formatters.budgeting.add_over_budget_value_BANG_(value);

return expander_ml;
}
} else {
return json_ml;
}
});

//# sourceMappingURL=devtools.formatters.budgeting.js.map
