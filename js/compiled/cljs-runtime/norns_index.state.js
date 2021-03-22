goog.provide('norns_index.state');
if((typeof norns_index !== 'undefined') && (typeof norns_index.state !== 'undefined') && (typeof norns_index.state.state !== 'undefined')){
} else {
norns_index.state.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"script-list","script-list",-309457031),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"txt","txt",626843688),"",new cljs.core.Keyword(null,"io","io",-307341917),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"optional","optional",2053951509),new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"grid_128","grid_128",313354669),null,new cljs.core.Keyword(null,"grid_any","grid_any",1341013008),null,new cljs.core.Keyword(null,"grid_64","grid_64",-1814224330),null], null), null)], null),new cljs.core.Keyword(null,"arc","arc",252411045),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"optional","optional",2053951509)], null),new cljs.core.Keyword(null,"crow","crow",-2094052464),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"optional","optional",2053951509)], null),new cljs.core.Keyword(null,"midi","midi",1256960668),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"optional","optional",2053951509),new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"midi_out","midi_out",-689948896),null,new cljs.core.Keyword(null,"midi_in","midi_in",249977396),null], null), null)], null)], null)], null)], null));
}
norns_index.state.show_script_w_feature_QMARK_ = (function norns_index$state$show_script_w_feature_QMARK_(script_def,feature){
var feature_display_f = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(norns_index.state.state),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"io","io",-307341917),feature,new cljs.core.Keyword(null,"display","display",242065432)], null));
var feature_display_vals_f = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(norns_index.state.state),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"io","io",-307341917),feature,new cljs.core.Keyword(null,"values","values",372645556)], null));
var feature_def = cljs.core.get.cljs$core$IFn$_invoke$arity$2(norns_index.conf.io_features,feature);
var feature_std_vals = new cljs.core.Keyword(null,"values","values",372645556).cljs$core$IFn$_invoke$arity$1(feature_def);
var feature_catch_all_val = new cljs.core.Keyword(null,"catch-all-value","catch-all-value",-240110343).cljs$core$IFn$_invoke$arity$1(feature_def);
var feature_all_default_vals = (cljs.core.truth_(feature_catch_all_val)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(feature_std_vals,feature_catch_all_val):feature_std_vals);
var script_features = new cljs.core.Keyword(null,"features","features",-1146962336).cljs$core$IFn$_invoke$arity$1(script_def);
var script_matching_features_default = cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__44173_SHARP_){
return norns_index.utils.core.member_QMARK_(p1__44173_SHARP_,script_features);
}),feature_all_default_vals);
var script_matching_features_filtered = cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__44174_SHARP_){
return norns_index.utils.core.member_QMARK_(p1__44174_SHARP_,script_features);
}),feature_display_vals_f);
var script_matching = (((cljs.core.count(feature_all_default_vals) > (1)))?script_matching_features_filtered:script_matching_features_default);
var script_requires = (cljs.core.truth_(new cljs.core.Keyword(null,"required-features","required-features",-1798960645).cljs$core$IFn$_invoke$arity$1(script_def))?norns_index.utils.core.member_QMARK_(feature,new cljs.core.Keyword(null,"required-features","required-features",-1798960645).cljs$core$IFn$_invoke$arity$1(script_def)):null);
if(cljs.core.empty_QMARK_(script_matching)){
if(cljs.core.truth_(norns_index.utils.core.member_QMARK_(feature_display_f,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"only","only",1907811652),new cljs.core.Keyword(null,"required","required",1807647006)], null)))){
return false;
} else {
return true;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(feature_display_f,new cljs.core.Keyword(null,"no","no",-390373634))){
return false;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(feature_display_f,new cljs.core.Keyword(null,"required","required",1807647006))){
if(cljs.core.truth_(script_requires)){
return true;
} else {
return false;
}
} else {
return true;

}
}
}
});
norns_index.state.show_script_QMARK_ = (function norns_index$state$show_script_QMARK_(script_name){
var script_def = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(norns_index.state.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"script-list","script-list",-309457031),script_name], null));
var script_features = new cljs.core.Keyword(null,"features","features",-1146962336).cljs$core$IFn$_invoke$arity$1(script_def);
var filter_txt = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(norns_index.state.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"txt","txt",626843688)], null));
return ((clojure.string.includes_QMARK_(script_name,filter_txt)) && (cljs.core.every_QMARK_((function (p1__44175_SHARP_){
return norns_index.state.show_script_w_feature_QMARK_(script_def,p1__44175_SHARP_);
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"arc","arc",252411045),new cljs.core.Keyword(null,"crow","crow",-2094052464),new cljs.core.Keyword(null,"midi","midi",1256960668)], null))));
});

//# sourceMappingURL=norns_index.state.js.map
