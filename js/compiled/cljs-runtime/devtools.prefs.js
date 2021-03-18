goog.provide('devtools.prefs');
devtools.prefs.default_config = (new cljs.core.Delay((function (){
return cljs.core.deref(devtools.defaults.config);
}),null));
devtools.prefs.external_config = (new cljs.core.Delay((function (){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"features-to-install","features-to-install",102899261),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"formatters","formatters",-1875637118),new cljs.core.Keyword(null,"hints","hints",-991113151)], null),new cljs.core.Keyword(null,"fn-symbol","fn-symbol",1764040739),"F",new cljs.core.Keyword(null,"print-config-overrides","print-config-overrides",-274716965),true], null);
}),null));
devtools.prefs.initial_config = (new cljs.core.Delay((function (){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(devtools.prefs.default_config),cljs.core.deref(devtools.prefs.external_config)], 0));
}),null));
devtools.prefs._STAR_current_config_STAR_ = (new cljs.core.Delay((function (){
return cljs.core.deref(devtools.prefs.initial_config);
}),null));
devtools.prefs.set_prefs_BANG_ = (function devtools$prefs$set_prefs_BANG_(new_prefs){
return (devtools.prefs._STAR_current_config_STAR_ = new_prefs);
});
devtools.prefs.get_prefs = (function devtools$prefs$get_prefs(){
if(cljs.core.delay_QMARK_(devtools.prefs._STAR_current_config_STAR_)){
devtools.prefs.set_prefs_BANG_(cljs.core.deref(devtools.prefs._STAR_current_config_STAR_));
} else {
}

return devtools.prefs._STAR_current_config_STAR_;
});
devtools.prefs.pref = (function devtools$prefs$pref(key){
var G__42865 = devtools.prefs.get_prefs();
return (key.cljs$core$IFn$_invoke$arity$1 ? key.cljs$core$IFn$_invoke$arity$1(G__42865) : key.call(null,G__42865));
});
devtools.prefs.set_pref_BANG_ = (function devtools$prefs$set_pref_BANG_(key,val){
return devtools.prefs.set_prefs_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(devtools.prefs.get_prefs(),key,val));
});
devtools.prefs.merge_prefs_BANG_ = (function devtools$prefs$merge_prefs_BANG_(m){
return devtools.prefs.set_prefs_BANG_(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([devtools.prefs.get_prefs(),m], 0)));
});
devtools.prefs.update_pref_BANG_ = (function devtools$prefs$update_pref_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___42890 = arguments.length;
var i__4737__auto___42891 = (0);
while(true){
if((i__4737__auto___42891 < len__4736__auto___42890)){
args__4742__auto__.push((arguments[i__4737__auto___42891]));

var G__42892 = (i__4737__auto___42891 + (1));
i__4737__auto___42891 = G__42892;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return devtools.prefs.update_pref_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(devtools.prefs.update_pref_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (key,f,args){
var new_val = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,devtools.prefs.pref(key),args);
return devtools.prefs.set_pref_BANG_(key,new_val);
}));

(devtools.prefs.update_pref_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(devtools.prefs.update_pref_BANG_.cljs$lang$applyTo = (function (seq42877){
var G__42878 = cljs.core.first(seq42877);
var seq42877__$1 = cljs.core.next(seq42877);
var G__42879 = cljs.core.first(seq42877__$1);
var seq42877__$2 = cljs.core.next(seq42877__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42878,G__42879,seq42877__$2);
}));


//# sourceMappingURL=devtools.prefs.js.map
