goog.provide('norns_index.views');






norns_index.views.main_view = (function norns_index$views$main_view(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.main-view","div.main-view",1657317201),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(norns_index.views.script_category_section,norns_index.conf.script_categories_order))], null);
});
norns_index.views.filter_panel = (function norns_index$views$filter_panel(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.script-category-section","div.script-category-section",1359929964),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Filter"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.block","label.block",-427190023),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Name"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"0.5em"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(norns_index.state.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"txt","txt",626843688)], null),e.target.value);
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(norns_index.views.filter_section_io_feature,norns_index.conf.ordered_filterable_io_features))], null)], null);
});
norns_index.views.filter_section_io_feature = (function norns_index$views$filter_section_io_feature(feature){
var feature_def = cljs.core.get.cljs$core$IFn$_invoke$arity$2(norns_index.conf.io_features,feature);
var feature_std_vals = new cljs.core.Keyword(null,"values","values",372645556).cljs$core$IFn$_invoke$arity$1(feature_def);
var feature_catch_all_val = new cljs.core.Keyword(null,"catch-all-value","catch-all-value",-240110343).cljs$core$IFn$_invoke$arity$1(feature_def);
var feature_all_default_vals = (cljs.core.truth_(feature_catch_all_val)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(feature_std_vals,feature_catch_all_val):feature_std_vals);
var is_requirable = new cljs.core.Keyword(null,"is-required","is-required",-1785813727).cljs$core$IFn$_invoke$arity$1(feature_def);
var on_change_visibility_fn = (function (e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(norns_index.state.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"io","io",-307341917),feature,new cljs.core.Keyword(null,"display","display",242065432)], null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(e.target.value));
});
var on_change_value_fn = (function (e){
e.stopPropagation();

if(cljs.core.truth_(e.target.checked)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(norns_index.state.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"io","io",-307341917),feature,new cljs.core.Keyword(null,"values","values",372645556)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(e.target.value)], 0));
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(norns_index.state.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"io","io",-307341917),feature,new cljs.core.Keyword(null,"values","values",372645556)], null),cljs.core.disj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(e.target.value)], 0));
}
});
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colSpan","colSpan",872137394),(3)], null),cljs.core.name(feature)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colSpan","colSpan",872137394),(3)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.switch-toggle.switch-3.switch-candy","div.switch-toggle.switch-3.switch-candy",1657795010),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.switch-filter-out","input.switch-filter-out",-1967431211),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"id","id",-1388402092),["radio-",cljs.core.name(feature),"-no"].join(''),new cljs.core.Keyword(null,"name","name",1843675177),["radio-",cljs.core.name(feature)].join(''),new cljs.core.Keyword(null,"value","value",305978217),"no",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"0.5em"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change_visibility_fn,new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"no","no",-390373634),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(norns_index.state.state),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"io","io",-307341917),feature,new cljs.core.Keyword(null,"display","display",242065432)], null)))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.noselect","label.noselect",-1534347361),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),["radio-",cljs.core.name(feature),"-no"].join('')], null),"without"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.switch-neutral","input.switch-neutral",-1956352881),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"id","id",-1388402092),["radio-",cljs.core.name(feature),"-optional"].join(''),new cljs.core.Keyword(null,"name","name",1843675177),["radio-",cljs.core.name(feature)].join(''),new cljs.core.Keyword(null,"value","value",305978217),"optional",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"0.5em"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change_visibility_fn,new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"optional","optional",2053951509),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(norns_index.state.state),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"io","io",-307341917),feature,new cljs.core.Keyword(null,"display","display",242065432)], null)))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.noselect","label.noselect",-1534347361),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),["radio-",cljs.core.name(feature),"-optional"].join('')], null),"n/a"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.switch-filter-in","input.switch-filter-in",-1032407009),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"id","id",-1388402092),["radio-",cljs.core.name(feature),"-only"].join(''),new cljs.core.Keyword(null,"name","name",1843675177),["radio-",cljs.core.name(feature)].join(''),new cljs.core.Keyword(null,"value","value",305978217),"only",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"0.5em"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change_visibility_fn,new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"only","only",1907811652),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(norns_index.state.state),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"io","io",-307341917),feature,new cljs.core.Keyword(null,"display","display",242065432)], null)))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.noselect","label.noselect",-1534347361),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),["radio-",cljs.core.name(feature),"-only"].join('')], null),"only"], null),(cljs.core.truth_(is_requirable)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.switch-filter-in-required","input.switch-filter-in-required",-1090027787),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"id","id",-1388402092),["radio-",cljs.core.name(feature),"-required"].join(''),new cljs.core.Keyword(null,"name","name",1843675177),["radio-",cljs.core.name(feature)].join(''),new cljs.core.Keyword(null,"value","value",305978217),"required",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"0.5em"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change_visibility_fn,new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"required","required",1807647006),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(norns_index.state.state),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"io","io",-307341917),feature,new cljs.core.Keyword(null,"display","display",242065432)], null)))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.noselect","label.noselect",-1534347361),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),["radio-",cljs.core.name(feature),"-required"].join('')], null),"only-required"], null)], null):null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(((cljs.core.count(feature_all_default_vals) > (1)))?cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (feature_v){
var label = clojure.string.replace_first(cljs.core.name(feature_v),[cljs.core.name(feature),"_"].join(''),"");
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.block","label.block",-427190023),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),["checkbox-",cljs.core.name(feature),"-value"].join(''),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.name(feature_v),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"0.5em"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change_value_fn,new cljs.core.Keyword(null,"defaultChecked","defaultChecked",-834047344),true], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"0.5em"], null)], null),label], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["filter-block-",cljs.core.name(feature_v)].join('')], null));
}),feature_all_default_vals)):null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["filter-section-io-",cljs.core.name(feature)].join('')], null));
});
norns_index.views.script_category_section = (function norns_index$views$script_category_section(script_category){
var temp__5735__auto__ = cljs.core.seq(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.keys(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__44498){
var vec__44499 = p__44498;
var script_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44499,(0),null);
var script_props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44499,(1),null);
var and__4115__auto__ = norns_index.utils.core.member_QMARK_(script_category,new cljs.core.Keyword(null,"types","types",590030639).cljs$core$IFn$_invoke$arity$1(script_props));
if(cljs.core.truth_(and__4115__auto__)){
return norns_index.state.show_script_QMARK_(script_name);
} else {
return and__4115__auto__;
}
}),new cljs.core.Keyword(null,"script-list","script-list",-309457031).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(norns_index.state.state))))));
if(temp__5735__auto__){
var matched_scripts = temp__5735__auto__;
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.script-category-section","div.script-category-section",1359929964),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),cljs.core.get.cljs$core$IFn$_invoke$arity$2(norns_index.conf.script_categories,script_category)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-wrap.script-panels-container","div.flex.flex-wrap.script-panels-container",1106782400),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44497_SHARP_){
return (norns_index.views.script_panel.cljs$core$IFn$_invoke$arity$2 ? norns_index.views.script_panel.cljs$core$IFn$_invoke$arity$2(script_category,p1__44497_SHARP_) : norns_index.views.script_panel.call(null,script_category,p1__44497_SHARP_));
}),matched_scripts))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(script_category)], null));
} else {
return null;
}
});
norns_index.views.script_panel = (function norns_index$views$script_panel(script_category,script_name){
var url = ["https://norns.community/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(norns_index.state.state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"script-list","script-list",-309457031),script_name,new cljs.core.Keyword(null,"path","path",-188191168)], null)))].join('');
var description = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(norns_index.state.state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"script-list","script-list",-309457031),script_name,new cljs.core.Keyword(null,"description","description",-1428560544)], null));
var features = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(norns_index.state.state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"script-list","script-list",-309457031),script_name,new cljs.core.Keyword(null,"features","features",-1146962336)], null));
var required_features = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(norns_index.state.state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"script-list","script-list",-309457031),script_name,new cljs.core.Keyword(null,"required-features","required-features",-1798960645)], null));
var feature_icons = (norns_index.views.norns_script_features__GT_icons.cljs$core$IFn$_invoke$arity$2 ? norns_index.views.norns_script_features__GT_icons.cljs$core$IFn$_invoke$arity$2(features,required_features) : norns_index.views.norns_script_features__GT_icons.call(null,features,required_features));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.script-panel-container","div.script-panel-container",-768716847),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.script-panel","div.script-panel",-845314996),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return (document.location.href = url);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [norns_index.views.screenshot,script_name], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.script-title","p.script-title",-260636586),clojure.string.upper_case(script_name)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.script-description","p.script-description",-2116044072),description], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-wrap","div.flex.flex-wrap",-407942064),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44502_SHARP_){
return (norns_index.views.feature.cljs$core$IFn$_invoke$arity$3 ? norns_index.views.feature.cljs$core$IFn$_invoke$arity$3(p1__44502_SHARP_,script_category,script_name) : norns_index.views.feature.call(null,p1__44502_SHARP_,script_category,script_name));
}),feature_icons))], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(script_category),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(script_name)].join('')], null));
});
norns_index.views.screenshot = (function norns_index$views$screenshot(script_name){
var author = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(norns_index.state.state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"script-list","script-list",-309457031),script_name,new cljs.core.Keyword(null,"author","author",2111686192)], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.norns-screenshot-container","div.norns-screenshot-container",-826271508),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.img-norns-screenshot","img.img-norns-screenshot",-387766176),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),["https://norns.community/community/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(author),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(script_name),".png"].join('')], null)], null)], null);
});
norns_index.views.feature = (function norns_index$views$feature(var_args){
var args__4742__auto__ = [];
var len__4736__auto___44528 = arguments.length;
var i__4737__auto___44529 = (0);
while(true){
if((i__4737__auto___44529 < len__4736__auto___44528)){
args__4742__auto__.push((arguments[i__4737__auto___44529]));

var G__44530 = (i__4737__auto___44529 + (1));
i__4737__auto___44529 = G__44530;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return norns_index.views.feature.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(norns_index.views.feature.cljs$core$IFn$_invoke$arity$variadic = (function (feature_name,p__44505){
var vec__44506 = p__44505;
var script_category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44506,(0),null);
var script_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44506,(1),null);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.norns-feature-container","div.norns-feature-container",-380661651),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.img-norns-feature","img.img-norns-feature",1727980931),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),["img/feature/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(feature_name),".svg"].join('')], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(script_category),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(script_name),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(feature_name)].join('')], null));
}));

(norns_index.views.feature.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(norns_index.views.feature.cljs$lang$applyTo = (function (seq44503){
var G__44504 = cljs.core.first(seq44503);
var seq44503__$1 = cljs.core.next(seq44503);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44504,seq44503__$1);
}));

norns_index.views.simple_feature__GT_icon = (function norns_index$views$simple_feature__GT_icon(var_args){
var args__4742__auto__ = [];
var len__4736__auto___44532 = arguments.length;
var i__4737__auto___44533 = (0);
while(true){
if((i__4737__auto___44533 < len__4736__auto___44532)){
args__4742__auto__.push((arguments[i__4737__auto___44533]));

var G__44534 = (i__4737__auto___44533 + (1));
i__4737__auto___44533 = G__44534;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return norns_index.views.simple_feature__GT_icon.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(norns_index.views.simple_feature__GT_icon.cljs$core$IFn$_invoke$arity$variadic = (function (feature,p__44511){
var vec__44512 = p__44511;
var is_required = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44512,(0),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"midi_out","midi_out",-689948896),new cljs.core.Keyword(null,"audio_in","audio_in",79654211),new cljs.core.Keyword(null,"arc","arc",252411045),new cljs.core.Keyword(null,"audio_out","audio_out",-1916002459),new cljs.core.Keyword(null,"kbd","kbd",316156875),new cljs.core.Keyword(null,"mouse","mouse",478628972),new cljs.core.Keyword(null,"grid_128","grid_128",313354669),new cljs.core.Keyword(null,"grid_any","grid_any",1341013008),new cljs.core.Keyword(null,"crow","crow",-2094052464),new cljs.core.Keyword(null,"midi_in","midi_in",249977396)],["midi_o","audio_i","arc","audio_o","kbd","mouse","grid_128","grid_any","crow","midi_i"]),feature)),(cljs.core.truth_(is_required)?"!!":null)].join('');
}));

(norns_index.views.simple_feature__GT_icon.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(norns_index.views.simple_feature__GT_icon.cljs$lang$applyTo = (function (seq44509){
var G__44510 = cljs.core.first(seq44509);
var seq44509__$1 = cljs.core.next(seq44509);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44510,seq44509__$1);
}));

norns_index.views.simple_feature__GT_icon_maybe = (function norns_index$views$simple_feature__GT_icon_maybe(search,features,required_features){
if(cljs.core.truth_(norns_index.utils.core.member_QMARK_(search,features))){
return norns_index.views.simple_feature__GT_icon(search);
} else {
return null;
}
});
norns_index.views.midi_feature__GT_icon_maybe = (function norns_index$views$midi_feature__GT_icon_maybe(features,required_features){
if(cljs.core.every_QMARK_((function (p1__44515_SHARP_){
return norns_index.utils.core.member_QMARK_(p1__44515_SHARP_,features);
}),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"midi_out","midi_out",-689948896),null,new cljs.core.Keyword(null,"midi_in","midi_in",249977396),null], null), null))){
return "midi_io";
} else {
if(cljs.core.truth_(norns_index.utils.core.member_QMARK_(new cljs.core.Keyword(null,"midi_in","midi_in",249977396),features))){
return norns_index.views.simple_feature__GT_icon(new cljs.core.Keyword(null,"midi_in","midi_in",249977396));
} else {
if(cljs.core.truth_(norns_index.utils.core.member_QMARK_(new cljs.core.Keyword(null,"midi_out","midi_out",-689948896),features))){
return norns_index.views.simple_feature__GT_icon(new cljs.core.Keyword(null,"midi_out","midi_out",-689948896));
} else {
if(cljs.core.truth_(norns_index.utils.core.member_QMARK_(new cljs.core.Keyword(null,"midi","midi",1256960668),features))){
return norns_index.views.simple_feature__GT_icon("midi");
} else {
return null;
}
}
}
}
});
norns_index.views.audio_feature__GT_icon_maybe = (function norns_index$views$audio_feature__GT_icon_maybe(features,required_features){
if(cljs.core.every_QMARK_((function (p1__44516_SHARP_){
return norns_index.utils.core.member_QMARK_(p1__44516_SHARP_,features);
}),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"audio_in","audio_in",79654211),null,new cljs.core.Keyword(null,"audio_out","audio_out",-1916002459),null], null), null))){
return "audio_io";
} else {
if(cljs.core.truth_(norns_index.utils.core.member_QMARK_(new cljs.core.Keyword(null,"audio_in","audio_in",79654211),features))){
return norns_index.views.simple_feature__GT_icon(new cljs.core.Keyword(null,"audio_in","audio_in",79654211));
} else {
if(cljs.core.truth_(norns_index.utils.core.member_QMARK_(new cljs.core.Keyword(null,"audio_out","audio_out",-1916002459),features))){
return norns_index.views.simple_feature__GT_icon(new cljs.core.Keyword(null,"audio_out","audio_out",-1916002459));
} else {
if(cljs.core.truth_(norns_index.utils.core.member_QMARK_(new cljs.core.Keyword(null,"audio","audio",1819127321),features))){
return norns_index.views.simple_feature__GT_icon("audio");
} else {
return null;
}
}
}
}
});
norns_index.views.grid_feature__GT_icon_maybe = (function norns_index$views$grid_feature__GT_icon_maybe(features,required_features){
var is_required = (cljs.core.truth_(required_features)?norns_index.utils.core.member_QMARK_(new cljs.core.Keyword(null,"grid","grid",402978600),required_features):null);
if(cljs.core.truth_(norns_index.utils.core.member_QMARK_(new cljs.core.Keyword(null,"grid_any","grid_any",1341013008),features))){
return norns_index.views.simple_feature__GT_icon.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"grid_any","grid_any",1341013008),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([is_required], 0));
} else {
if(cljs.core.every_QMARK_((function (p1__44517_SHARP_){
return norns_index.utils.core.member_QMARK_(p1__44517_SHARP_,features);
}),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"grid_128","grid_128",313354669),null,new cljs.core.Keyword(null,"grid_64","grid_64",-1814224330),null], null), null))){
return ["grid_64-128",(cljs.core.truth_(is_required)?"!!":null)].join('');
} else {
if(cljs.core.truth_(norns_index.utils.core.member_QMARK_(new cljs.core.Keyword(null,"grid_128","grid_128",313354669),features))){
return norns_index.views.simple_feature__GT_icon.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"grid_128","grid_128",313354669),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([is_required], 0));
} else {
if(cljs.core.truth_(norns_index.utils.core.member_QMARK_(new cljs.core.Keyword(null,"grid","grid",402978600),features))){
return norns_index.views.simple_feature__GT_icon("audio");
} else {
return null;
}
}
}
}
});
norns_index.views.norns_script_features__GT_icons = (function norns_index$views$norns_script_features__GT_icons(features,required_features){
return norns_index.utils.core.remove_nils(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44518_SHARP_){
return (p1__44518_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p1__44518_SHARP_.cljs$core$IFn$_invoke$arity$2(features,required_features) : p1__44518_SHARP_.call(null,features,required_features));
}),cljs.core.reverse(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [norns_index.views.grid_feature__GT_icon_maybe,(function (p1__44519_SHARP_,p2__44520_SHARP_){
return norns_index.views.simple_feature__GT_icon_maybe(new cljs.core.Keyword(null,"arc","arc",252411045),p1__44519_SHARP_,p2__44520_SHARP_);
}),(function (p1__44521_SHARP_,p2__44522_SHARP_){
return norns_index.views.simple_feature__GT_icon_maybe(new cljs.core.Keyword(null,"crow","crow",-2094052464),p1__44521_SHARP_,p2__44522_SHARP_);
}),(function (p1__44523_SHARP_,p2__44524_SHARP_){
return norns_index.views.simple_feature__GT_icon_maybe(new cljs.core.Keyword(null,"kbd","kbd",316156875),p1__44523_SHARP_,p2__44524_SHARP_);
}),(function (p1__44525_SHARP_,p2__44526_SHARP_){
return norns_index.views.simple_feature__GT_icon_maybe(new cljs.core.Keyword(null,"mouse","mouse",478628972),p1__44525_SHARP_,p2__44526_SHARP_);
}),norns_index.views.midi_feature__GT_icon_maybe,norns_index.views.audio_feature__GT_icon_maybe], null))));
});

//# sourceMappingURL=norns_index.views.js.map
