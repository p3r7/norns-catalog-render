goog.provide('norns_index.app');








/**
 * Main entry point.
 *   Called (only) on first page load.
 */
norns_index.app.init = (function norns_index$app$init(){
return (norns_index.app.mount_root.cljs$core$IFn$_invoke$arity$0 ? norns_index.app.mount_root.cljs$core$IFn$_invoke$arity$0() : norns_index.app.mount_root.call(null));
});
/**
 * Called (only) when code gets reloaded by shadow-cljs.
 */
norns_index.app.on_reload = (function norns_index$app$on_reload(){
(norns_index.app.mount_root.cljs$core$IFn$_invoke$arity$0 ? norns_index.app.mount_root.cljs$core$IFn$_invoke$arity$0() : norns_index.app.mount_root.call(null));

return console.debug("code reloaded by shadow-cljs");
});
/**
 * Mount transpilled js code into #app dome element.
 *   Gets called both at page load (`init`) and on automatic code reload by shadow-cljs (`on-reload`).
 */
norns_index.app.mount_root = (function norns_index$app$mount_root(){
var G__55123_55128 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [norns_index.views.main_view], null);
(norns_index.app.mount_app_element.cljs$core$IFn$_invoke$arity$1 ? norns_index.app.mount_app_element.cljs$core$IFn$_invoke$arity$1(G__55123_55128) : norns_index.app.mount_app_element.call(null,G__55123_55128));

return norns_index.dynamic_conf.get_from_wiki_js();
});
/**
 * Mount and render hiccup COMPONENT on dom element EL.
 */
norns_index.app.mount = (function norns_index$app$mount(component,el){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(component,el);
});
/**
 * Mount hiccup COMPONENT on dom element #app.
 */
norns_index.app.mount_app_element = (function norns_index$app$mount_app_element(component){
var temp__5735__auto__ = (norns_index.app.app_element.cljs$core$IFn$_invoke$arity$0 ? norns_index.app.app_element.cljs$core$IFn$_invoke$arity$0() : norns_index.app.app_element.call(null));
if(cljs.core.truth_(temp__5735__auto__)){
var el = temp__5735__auto__;
return norns_index.app.mount(component,el);
} else {
return null;
}
});
norns_index.app.app_element = (function norns_index$app$app_element(){
return goog.dom.getElement("app");
});

//# sourceMappingURL=norns_index.app.js.map
