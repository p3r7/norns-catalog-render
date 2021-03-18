goog.provide('norns_index.dynamic_conf');

norns_index.dynamic_conf.get_from_wiki_js = (function norns_index$dynamic_conf$get_from_wiki_js(){
var c__41933__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41934__auto__ = (function (){var switch__41775__auto__ = (function (state_55158){
var state_val_55159 = (state_55158[(1)]);
if((state_val_55159 === (1))){
var inst_55132 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"query-params","query-params",900640534)];
var inst_55133 = ["query"];
var inst_55134 = ["{pages { list { path, tags } } }"];
var inst_55135 = cljs.core.PersistentHashMap.fromArrays(inst_55133,inst_55134);
var inst_55136 = [false,inst_55135];
var inst_55137 = cljs.core.PersistentHashMap.fromArrays(inst_55132,inst_55136);
var inst_55138 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic("https://norns.community/graphql",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_55137], 0));
var state_55158__$1 = state_55158;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55158__$1,(2),inst_55138);
} else {
if((state_val_55159 === (2))){
var inst_55140 = (state_55158[(7)]);
var inst_55140__$1 = (state_55158[(2)]);
var inst_55141 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_55140__$1);
var inst_55142 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((200),inst_55141);
var state_55158__$1 = (function (){var statearr_55160 = state_55158;
(statearr_55160[(7)] = inst_55140__$1);

return statearr_55160;
})();
if(inst_55142){
var statearr_55161_55198 = state_55158__$1;
(statearr_55161_55198[(1)] = (3));

} else {
var statearr_55162_55199 = state_55158__$1;
(statearr_55162_55199[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55159 === (3))){
var inst_55144 = console.error("failed to retrieve data");
var state_55158__$1 = state_55158;
var statearr_55163_55201 = state_55158__$1;
(statearr_55163_55201[(2)] = inst_55144);

(statearr_55163_55201[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55159 === (4))){
var inst_55140 = (state_55158[(7)]);
var inst_55146 = cljs.core.PersistentHashMap.EMPTY;
var inst_55147 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_55148 = [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"pages","pages",-285406513),new cljs.core.Keyword(null,"list","list",765357683)];
var inst_55149 = (new cljs.core.PersistentVector(null,4,(5),inst_55147,inst_55148,null));
var inst_55150 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_55140,inst_55149);
var inst_55151 = cljs.core.keep.cljs$core$IFn$_invoke$arity$2(norns_index.dynamic_conf.keep_script_page,inst_55150);
var inst_55152 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_55146,inst_55151);
var inst_55153 = (norns_index.dynamic_conf.page_map__GT_script_map.cljs$core$IFn$_invoke$arity$1 ? norns_index.dynamic_conf.page_map__GT_script_map.cljs$core$IFn$_invoke$arity$1(inst_55152) : norns_index.dynamic_conf.page_map__GT_script_map.call(null,inst_55152));
var inst_55154 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(norns_index.state.state,cljs.core.assoc,new cljs.core.Keyword(null,"script-list","script-list",-309457031),inst_55153);
var state_55158__$1 = state_55158;
var statearr_55165_55203 = state_55158__$1;
(statearr_55165_55203[(2)] = inst_55154);

(statearr_55165_55203[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55159 === (5))){
var inst_55156 = (state_55158[(2)]);
var state_55158__$1 = state_55158;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55158__$1,inst_55156);
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
var statearr_55167 = [null,null,null,null,null,null,null,null];
(statearr_55167[(0)] = norns_index$dynamic_conf$get_from_wiki_js_$_state_machine__41776__auto__);

(statearr_55167[(1)] = (1));

return statearr_55167;
});
var norns_index$dynamic_conf$get_from_wiki_js_$_state_machine__41776__auto____1 = (function (state_55158){
while(true){
var ret_value__41777__auto__ = (function (){try{while(true){
var result__41778__auto__ = switch__41775__auto__(state_55158);
if(cljs.core.keyword_identical_QMARK_(result__41778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41778__auto__;
}
break;
}
}catch (e55171){if((e55171 instanceof Object)){
var ex__41779__auto__ = e55171;
var statearr_55172_55205 = state_55158;
(statearr_55172_55205[(5)] = ex__41779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_55158);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55171;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55206 = state_55158;
state_55158 = G__55206;
continue;
} else {
return ret_value__41777__auto__;
}
break;
}
});
norns_index$dynamic_conf$get_from_wiki_js_$_state_machine__41776__auto__ = function(state_55158){
switch(arguments.length){
case 0:
return norns_index$dynamic_conf$get_from_wiki_js_$_state_machine__41776__auto____0.call(this);
case 1:
return norns_index$dynamic_conf$get_from_wiki_js_$_state_machine__41776__auto____1.call(this,state_55158);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
norns_index$dynamic_conf$get_from_wiki_js_$_state_machine__41776__auto__.cljs$core$IFn$_invoke$arity$0 = norns_index$dynamic_conf$get_from_wiki_js_$_state_machine__41776__auto____0;
norns_index$dynamic_conf$get_from_wiki_js_$_state_machine__41776__auto__.cljs$core$IFn$_invoke$arity$1 = norns_index$dynamic_conf$get_from_wiki_js_$_state_machine__41776__auto____1;
return norns_index$dynamic_conf$get_from_wiki_js_$_state_machine__41776__auto__;
})()
})();
var state__41935__auto__ = (function (){var statearr_55173 = f__41934__auto__();
(statearr_55173[(6)] = c__41933__auto__);

return statearr_55173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41935__auto__);
}));

return c__41933__auto__;
});
norns_index.dynamic_conf.keep_script_page = (function norns_index$dynamic_conf$keep_script_page(page){
var b2__52032__auto__ = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(page);
if(cljs.core.truth_(b2__52032__auto__)){
var path = b2__52032__auto__;
var b2__52032__auto____$1 = cljs.core.re_matches(/^authors\/(.*)\/(.*)/,path);
if(cljs.core.truth_(b2__52032__auto____$1)){
var matches = b2__52032__auto____$1;
var b2__52032__auto____$2 = matches;
if(cljs.core.truth_(b2__52032__auto____$2)){
var vec__55175 = b2__52032__auto____$2;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55175,(0),null);
var author = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55175,(1),null);
var script_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55175,(2),null);
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
if(cljs.core.truth_(cljs.core.some((function (p1__55178_SHARP_){
return norns_index.utils.core.member_QMARK_(p1__55178_SHARP_,tags);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["looper","live sampler"], null)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["loopers + live samplers"], null);
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__55179_SHARP_){
return norns_index.utils.core.member_QMARK_(p1__55179_SHARP_,norns_index.conf.script_categories_order);
}),tags));

}
});
norns_index.dynamic_conf.script_io_features_from_wiki_js_tags = (function norns_index$dynamic_conf$script_io_features_from_wiki_js_tags(tags){
var kw_tags = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__55180_SHARP_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(p1__55180_SHARP_,/ /,"_"));
}),tags);
var feature_kws = norns_index.conf.flattended_io_features();
return cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(feature_kws,kw_tags));
});
norns_index.dynamic_conf.script_required_io_features_from_wiki_js_tags = (function norns_index$dynamic_conf$script_required_io_features_from_wiki_js_tags(tags){
return cljs.core.set(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__55183_SHARP_){
var b2__52032__auto__ = clojure.string.ends_with_QMARK_(p1__55183_SHARP_," required");
if(b2__52032__auto__){
var _ = b2__52032__auto__;
var b2__52032__auto____$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(p1__55183_SHARP_,/ required/,""));
if(cljs.core.truth_(b2__52032__auto____$1)){
var kw = b2__52032__auto____$1;
var b2__52032__auto____$2 = norns_index.utils.core.member_QMARK_(kw,norns_index.conf.ordered_filterable_io_features);
if(cljs.core.truth_(b2__52032__auto____$2)){
var ___$1 = b2__52032__auto____$2;
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
var tags = new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(page_def);
var categories = norns_index.dynamic_conf.script_categories_from_wiki_js_tags(tags);
var io_features = norns_index.dynamic_conf.script_io_features_from_wiki_js_tags(tags);
var required_io_features = norns_index.dynamic_conf.script_required_io_features_from_wiki_js_tags(tags);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"types","types",590030639),categories,new cljs.core.Keyword(null,"features","features",-1146962336),io_features,new cljs.core.Keyword(null,"required-features","required-features",-1798960645),required_io_features,new cljs.core.Keyword(null,"author","author",2111686192),new cljs.core.Keyword(null,"author","author",2111686192).cljs$core$IFn$_invoke$arity$1(page_def),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(page_def)], null);
});
norns_index.dynamic_conf.page_map__GT_script_map = (function norns_index$dynamic_conf$page_map__GT_script_map(page_map){
return norns_index.utils.core.maintain.cljs$core$IFn$_invoke$arity$3(cljs.core.map,(function (p__55190){
var vec__55191 = p__55190;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55191,(0),null);
var page_def = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55191,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,norns_index.dynamic_conf.wiki_js_page_def__GT_script_def(page_def)], null);
}),page_map);
});

//# sourceMappingURL=norns_index.dynamic_conf.js.map
