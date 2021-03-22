goog.provide('norns_index.dynamic_conf');

norns_index.dynamic_conf.get_from_wiki_js = (function norns_index$dynamic_conf$get_from_wiki_js(){
var c__41933__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41934__auto__ = (function (){var switch__41814__auto__ = (function (state_44202){
var state_val_44203 = (state_44202[(1)]);
if((state_val_44203 === (1))){
var inst_44176 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"query-params","query-params",900640534)];
var inst_44177 = ["query"];
var inst_44178 = ["{pages { list { path, tags, description } } }"];
var inst_44179 = cljs.core.PersistentHashMap.fromArrays(inst_44177,inst_44178);
var inst_44180 = [false,inst_44179];
var inst_44181 = cljs.core.PersistentHashMap.fromArrays(inst_44176,inst_44180);
var inst_44182 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic("https://norns.community/graphql",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_44181], 0));
var state_44202__$1 = state_44202;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44202__$1,(2),inst_44182);
} else {
if((state_val_44203 === (2))){
var inst_44184 = (state_44202[(7)]);
var inst_44184__$1 = (state_44202[(2)]);
var inst_44185 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_44184__$1);
var inst_44186 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((200),inst_44185);
var state_44202__$1 = (function (){var statearr_44204 = state_44202;
(statearr_44204[(7)] = inst_44184__$1);

return statearr_44204;
})();
if(inst_44186){
var statearr_44205_44238 = state_44202__$1;
(statearr_44205_44238[(1)] = (3));

} else {
var statearr_44206_44239 = state_44202__$1;
(statearr_44206_44239[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44203 === (3))){
var inst_44188 = console.error("failed to retrieve data");
var state_44202__$1 = state_44202;
var statearr_44207_44244 = state_44202__$1;
(statearr_44207_44244[(2)] = inst_44188);

(statearr_44207_44244[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44203 === (4))){
var inst_44184 = (state_44202[(7)]);
var inst_44190 = cljs.core.PersistentHashMap.EMPTY;
var inst_44191 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44192 = [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"pages","pages",-285406513),new cljs.core.Keyword(null,"list","list",765357683)];
var inst_44193 = (new cljs.core.PersistentVector(null,4,(5),inst_44191,inst_44192,null));
var inst_44194 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_44184,inst_44193);
var inst_44195 = cljs.core.keep.cljs$core$IFn$_invoke$arity$2(norns_index.dynamic_conf.keep_script_page,inst_44194);
var inst_44196 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_44190,inst_44195);
var inst_44197 = (norns_index.dynamic_conf.page_map__GT_script_map.cljs$core$IFn$_invoke$arity$1 ? norns_index.dynamic_conf.page_map__GT_script_map.cljs$core$IFn$_invoke$arity$1(inst_44196) : norns_index.dynamic_conf.page_map__GT_script_map.call(null,inst_44196));
var inst_44198 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(norns_index.state.state,cljs.core.assoc,new cljs.core.Keyword(null,"script-list","script-list",-309457031),inst_44197);
var state_44202__$1 = state_44202;
var statearr_44208_44245 = state_44202__$1;
(statearr_44208_44245[(2)] = inst_44198);

(statearr_44208_44245[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44203 === (5))){
var inst_44200 = (state_44202[(2)]);
var state_44202__$1 = state_44202;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44202__$1,inst_44200);
} else {
return null;
}
}
}
}
}
});
return (function() {
var norns_index$dynamic_conf$get_from_wiki_js_$_state_machine__41815__auto__ = null;
var norns_index$dynamic_conf$get_from_wiki_js_$_state_machine__41815__auto____0 = (function (){
var statearr_44209 = [null,null,null,null,null,null,null,null];
(statearr_44209[(0)] = norns_index$dynamic_conf$get_from_wiki_js_$_state_machine__41815__auto__);

(statearr_44209[(1)] = (1));

return statearr_44209;
});
var norns_index$dynamic_conf$get_from_wiki_js_$_state_machine__41815__auto____1 = (function (state_44202){
while(true){
var ret_value__41816__auto__ = (function (){try{while(true){
var result__41817__auto__ = switch__41814__auto__(state_44202);
if(cljs.core.keyword_identical_QMARK_(result__41817__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41817__auto__;
}
break;
}
}catch (e44211){if((e44211 instanceof Object)){
var ex__41818__auto__ = e44211;
var statearr_44216_44247 = state_44202;
(statearr_44216_44247[(5)] = ex__41818__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44202);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44211;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44248 = state_44202;
state_44202 = G__44248;
continue;
} else {
return ret_value__41816__auto__;
}
break;
}
});
norns_index$dynamic_conf$get_from_wiki_js_$_state_machine__41815__auto__ = function(state_44202){
switch(arguments.length){
case 0:
return norns_index$dynamic_conf$get_from_wiki_js_$_state_machine__41815__auto____0.call(this);
case 1:
return norns_index$dynamic_conf$get_from_wiki_js_$_state_machine__41815__auto____1.call(this,state_44202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
norns_index$dynamic_conf$get_from_wiki_js_$_state_machine__41815__auto__.cljs$core$IFn$_invoke$arity$0 = norns_index$dynamic_conf$get_from_wiki_js_$_state_machine__41815__auto____0;
norns_index$dynamic_conf$get_from_wiki_js_$_state_machine__41815__auto__.cljs$core$IFn$_invoke$arity$1 = norns_index$dynamic_conf$get_from_wiki_js_$_state_machine__41815__auto____1;
return norns_index$dynamic_conf$get_from_wiki_js_$_state_machine__41815__auto__;
})()
})();
var state__41935__auto__ = (function (){var statearr_44218 = f__41934__auto__();
(statearr_44218[(6)] = c__41933__auto__);

return statearr_44218;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41935__auto__);
}));

return c__41933__auto__;
});
norns_index.dynamic_conf.keep_script_page = (function norns_index$dynamic_conf$keep_script_page(page){
var b2__42388__auto__ = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(page);
if(cljs.core.truth_(b2__42388__auto__)){
var path = b2__42388__auto__;
var b2__42388__auto____$1 = cljs.core.re_matches(/^authors\/(.*)\/(.*)/,path);
if(cljs.core.truth_(b2__42388__auto____$1)){
var matches = b2__42388__auto____$1;
var b2__42388__auto____$2 = matches;
if(cljs.core.truth_(b2__42388__auto____$2)){
var vec__44219 = b2__42388__auto____$2;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44219,(0),null);
var author = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44219,(1),null);
var script_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44219,(2),null);
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
if(cljs.core.truth_(cljs.core.some((function (p1__44222_SHARP_){
return norns_index.utils.core.member_QMARK_(p1__44222_SHARP_,tags);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["looper","live sampler"], null)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["loopers + live samplers"], null);
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__44223_SHARP_){
return norns_index.utils.core.member_QMARK_(p1__44223_SHARP_,norns_index.conf.script_categories_order);
}),tags));

}
});
norns_index.dynamic_conf.script_io_features_from_wiki_js_tags = (function norns_index$dynamic_conf$script_io_features_from_wiki_js_tags(tags){
var kw_tags = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44224_SHARP_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(p1__44224_SHARP_,/ /,"_"));
}),tags);
var feature_kws = norns_index.conf.flattended_io_features();
return cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(feature_kws,kw_tags));
});
norns_index.dynamic_conf.script_required_io_features_from_wiki_js_tags = (function norns_index$dynamic_conf$script_required_io_features_from_wiki_js_tags(tags){
return cljs.core.set(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__44225_SHARP_){
var b2__42388__auto__ = clojure.string.ends_with_QMARK_(p1__44225_SHARP_," required");
if(b2__42388__auto__){
var _ = b2__42388__auto__;
var b2__42388__auto____$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(p1__44225_SHARP_,/ required/,""));
if(cljs.core.truth_(b2__42388__auto____$1)){
var kw = b2__42388__auto____$1;
var b2__42388__auto____$2 = norns_index.utils.core.member_QMARK_(kw,norns_index.conf.ordered_filterable_io_features);
if(cljs.core.truth_(b2__42388__auto____$2)){
var ___$1 = b2__42388__auto____$2;
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
return norns_index.utils.core.maintain.cljs$core$IFn$_invoke$arity$3(cljs.core.map,(function (p__44232){
var vec__44233 = p__44232;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44233,(0),null);
var page_def = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44233,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,norns_index.dynamic_conf.wiki_js_page_def__GT_script_def(page_def)], null);
}),page_map);
});

//# sourceMappingURL=norns_index.dynamic_conf.js.map
