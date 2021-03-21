goog.provide('norns_index.dynamic_conf');

norns_index.dynamic_conf.get_from_wiki_js = (function norns_index$dynamic_conf$get_from_wiki_js(){
var c__41911__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41912__auto__ = (function (){var switch__41775__auto__ = (function (state_54194){
var state_val_54195 = (state_54194[(1)]);
if((state_val_54195 === (1))){
var inst_54168 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"query-params","query-params",900640534)];
var inst_54169 = ["query"];
var inst_54170 = ["{pages { list { path, tags, description } } }"];
var inst_54171 = cljs.core.PersistentHashMap.fromArrays(inst_54169,inst_54170);
var inst_54172 = [false,inst_54171];
var inst_54173 = cljs.core.PersistentHashMap.fromArrays(inst_54168,inst_54172);
var inst_54174 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic("https://norns.community/graphql",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_54173], 0));
var state_54194__$1 = state_54194;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54194__$1,(2),inst_54174);
} else {
if((state_val_54195 === (2))){
var inst_54176 = (state_54194[(7)]);
var inst_54176__$1 = (state_54194[(2)]);
var inst_54177 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_54176__$1);
var inst_54178 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((200),inst_54177);
var state_54194__$1 = (function (){var statearr_54196 = state_54194;
(statearr_54196[(7)] = inst_54176__$1);

return statearr_54196;
})();
if(inst_54178){
var statearr_54197_54216 = state_54194__$1;
(statearr_54197_54216[(1)] = (3));

} else {
var statearr_54198_54217 = state_54194__$1;
(statearr_54198_54217[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54195 === (3))){
var inst_54180 = console.error("failed to retrieve data");
var state_54194__$1 = state_54194;
var statearr_54199_54218 = state_54194__$1;
(statearr_54199_54218[(2)] = inst_54180);

(statearr_54199_54218[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54195 === (4))){
var inst_54176 = (state_54194[(7)]);
var inst_54182 = cljs.core.PersistentHashMap.EMPTY;
var inst_54183 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_54184 = [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"pages","pages",-285406513),new cljs.core.Keyword(null,"list","list",765357683)];
var inst_54185 = (new cljs.core.PersistentVector(null,4,(5),inst_54183,inst_54184,null));
var inst_54186 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_54176,inst_54185);
var inst_54187 = cljs.core.keep.cljs$core$IFn$_invoke$arity$2(norns_index.dynamic_conf.keep_script_page,inst_54186);
var inst_54188 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_54182,inst_54187);
var inst_54189 = (norns_index.dynamic_conf.page_map__GT_script_map.cljs$core$IFn$_invoke$arity$1 ? norns_index.dynamic_conf.page_map__GT_script_map.cljs$core$IFn$_invoke$arity$1(inst_54188) : norns_index.dynamic_conf.page_map__GT_script_map.call(null,inst_54188));
var inst_54190 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(norns_index.state.state,cljs.core.assoc,new cljs.core.Keyword(null,"script-list","script-list",-309457031),inst_54189);
var state_54194__$1 = state_54194;
var statearr_54200_54219 = state_54194__$1;
(statearr_54200_54219[(2)] = inst_54190);

(statearr_54200_54219[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54195 === (5))){
var inst_54192 = (state_54194[(2)]);
var state_54194__$1 = state_54194;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54194__$1,inst_54192);
} else {
return null;
}
}
}
}
}
});
return (function() {
var norns_index$dynamic_conf$get_from_wiki_js_$_state_machine__41776__auto__ = null;
var norns_index$dynamic_conf$get_from_wiki_js_$_state_machine__41776__auto____0 = (function (){
var statearr_54201 = [null,null,null,null,null,null,null,null];
(statearr_54201[(0)] = norns_index$dynamic_conf$get_from_wiki_js_$_state_machine__41776__auto__);

(statearr_54201[(1)] = (1));

return statearr_54201;
});
var norns_index$dynamic_conf$get_from_wiki_js_$_state_machine__41776__auto____1 = (function (state_54194){
while(true){
var ret_value__41777__auto__ = (function (){try{while(true){
var result__41778__auto__ = switch__41775__auto__(state_54194);
if(cljs.core.keyword_identical_QMARK_(result__41778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41778__auto__;
}
break;
}
}catch (e54202){if((e54202 instanceof Object)){
var ex__41779__auto__ = e54202;
var statearr_54203_54220 = state_54194;
(statearr_54203_54220[(5)] = ex__41779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_54194);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54202;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54221 = state_54194;
state_54194 = G__54221;
continue;
} else {
return ret_value__41777__auto__;
}
break;
}
});
norns_index$dynamic_conf$get_from_wiki_js_$_state_machine__41776__auto__ = function(state_54194){
switch(arguments.length){
case 0:
return norns_index$dynamic_conf$get_from_wiki_js_$_state_machine__41776__auto____0.call(this);
case 1:
return norns_index$dynamic_conf$get_from_wiki_js_$_state_machine__41776__auto____1.call(this,state_54194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
norns_index$dynamic_conf$get_from_wiki_js_$_state_machine__41776__auto__.cljs$core$IFn$_invoke$arity$0 = norns_index$dynamic_conf$get_from_wiki_js_$_state_machine__41776__auto____0;
norns_index$dynamic_conf$get_from_wiki_js_$_state_machine__41776__auto__.cljs$core$IFn$_invoke$arity$1 = norns_index$dynamic_conf$get_from_wiki_js_$_state_machine__41776__auto____1;
return norns_index$dynamic_conf$get_from_wiki_js_$_state_machine__41776__auto__;
})()
})();
var state__41913__auto__ = (function (){var statearr_54204 = f__41912__auto__();
(statearr_54204[(6)] = c__41911__auto__);

return statearr_54204;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41913__auto__);
}));

return c__41911__auto__;
});
norns_index.dynamic_conf.keep_script_page = (function norns_index$dynamic_conf$keep_script_page(page){
var b2__42399__auto__ = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(page);
if(cljs.core.truth_(b2__42399__auto__)){
var path = b2__42399__auto__;
var b2__42399__auto____$1 = cljs.core.re_matches(/^authors\/(.*)\/(.*)/,path);
if(cljs.core.truth_(b2__42399__auto____$1)){
var matches = b2__42399__auto____$1;
var b2__42399__auto____$2 = matches;
if(cljs.core.truth_(b2__42399__auto____$2)){
var vec__54205 = b2__42399__auto____$2;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54205,(0),null);
var author = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54205,(1),null);
var script_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54205,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [script_name,cljs.core.into.cljs$core$IFn$_invoke$arity$2(page,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"author","author",2111686192),author], null))], null);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
norns_index.dynamic_conf.script_categories_from_wiki_js_tags = (function norns_index$dynamic_conf$script_categories_from_wiki_js_tags(tags){
if(cljs.core.truth_(cljs.core.some((function (p1__54208_SHARP_){
return norns_index.utils.core.member_QMARK_(p1__54208_SHARP_,tags);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["looper","live sampler"], null)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["loopers + live samplers"], null);
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__54209_SHARP_){
return norns_index.utils.core.member_QMARK_(p1__54209_SHARP_,norns_index.conf.script_categories_order);
}),tags));

}
});
norns_index.dynamic_conf.script_io_features_from_wiki_js_tags = (function norns_index$dynamic_conf$script_io_features_from_wiki_js_tags(tags){
var kw_tags = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__54210_SHARP_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(p1__54210_SHARP_,/ /,"_"));
}),tags);
var feature_kws = norns_index.conf.flattended_io_features();
return cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(feature_kws,kw_tags));
});
norns_index.dynamic_conf.script_required_io_features_from_wiki_js_tags = (function norns_index$dynamic_conf$script_required_io_features_from_wiki_js_tags(tags){
return cljs.core.set(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__54211_SHARP_){
var b2__42399__auto__ = clojure.string.ends_with_QMARK_(p1__54211_SHARP_," required");
if(b2__42399__auto__){
var _ = b2__42399__auto__;
var b2__42399__auto____$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(p1__54211_SHARP_,/ required/,""));
if(cljs.core.truth_(b2__42399__auto____$1)){
var kw = b2__42399__auto____$1;
var b2__42399__auto____$2 = norns_index.utils.core.member_QMARK_(kw,norns_index.conf.ordered_filterable_io_features);
if(cljs.core.truth_(b2__42399__auto____$2)){
var ___$1 = b2__42399__auto____$2;
return kw;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
}),tags));
});
norns_index.dynamic_conf.wiki_js_page_def__GT_script_def = (function norns_index$dynamic_conf$wiki_js_page_def__GT_script_def(page_def){
var description = new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(page_def);
var tags = new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(page_def);
var categories = norns_index.dynamic_conf.script_categories_from_wiki_js_tags(tags);
var io_features = norns_index.dynamic_conf.script_io_features_from_wiki_js_tags(tags);
var required_io_features = norns_index.dynamic_conf.script_required_io_features_from_wiki_js_tags(tags);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"types","types",590030639),categories,new cljs.core.Keyword(null,"description","description",-1428560544),description,new cljs.core.Keyword(null,"features","features",-1146962336),io_features,new cljs.core.Keyword(null,"required-features","required-features",-1798960645),required_io_features,new cljs.core.Keyword(null,"author","author",2111686192),new cljs.core.Keyword(null,"author","author",2111686192).cljs$core$IFn$_invoke$arity$1(page_def),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(page_def)], null);
});
norns_index.dynamic_conf.page_map__GT_script_map = (function norns_index$dynamic_conf$page_map__GT_script_map(page_map){
return norns_index.utils.core.maintain.cljs$core$IFn$_invoke$arity$3(cljs.core.map,(function (p__54212){
var vec__54213 = p__54212;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54213,(0),null);
var page_def = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54213,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,norns_index.dynamic_conf.wiki_js_page_def__GT_script_def(page_def)], null);
}),page_map);
});

//# sourceMappingURL=norns_index.dynamic_conf.js.map
