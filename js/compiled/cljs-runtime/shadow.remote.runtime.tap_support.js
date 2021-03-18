goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__53417,p__53418){
var map__53419 = p__53417;
var map__53419__$1 = (((((!((map__53419 == null))))?(((((map__53419.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53419.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53419):map__53419);
var svc = map__53419__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53419__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53419__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53419__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__53420 = p__53418;
var map__53420__$1 = (((((!((map__53420 == null))))?(((((map__53420.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53420.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53420):map__53420);
var msg = map__53420__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53420__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53420__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53420__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53420__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__53435,p__53436){
var map__53437 = p__53435;
var map__53437__$1 = (((((!((map__53437 == null))))?(((((map__53437.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53437.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53437):map__53437);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53437__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__53438 = p__53436;
var map__53438__$1 = (((((!((map__53438 == null))))?(((((map__53438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53438.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53438):map__53438);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53438__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__53459,p__53460){
var map__53461 = p__53459;
var map__53461__$1 = (((((!((map__53461 == null))))?(((((map__53461.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53461.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53461):map__53461);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53461__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53461__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__53463 = p__53460;
var map__53463__$1 = (((((!((map__53463 == null))))?(((((map__53463.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53463.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53463):map__53463);
var msg = map__53463__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53463__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__53480,tid){
var map__53481 = p__53480;
var map__53481__$1 = (((((!((map__53481 == null))))?(((((map__53481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53481.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53481):map__53481);
var svc = map__53481__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53481__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__53517 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__53518 = null;
var count__53519 = (0);
var i__53520 = (0);
while(true){
if((i__53520 < count__53519)){
var vec__53546 = chunk__53518.cljs$core$IIndexed$_nth$arity$2(null,i__53520);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53546,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53546,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__53600 = seq__53517;
var G__53601 = chunk__53518;
var G__53602 = count__53519;
var G__53603 = (i__53520 + (1));
seq__53517 = G__53600;
chunk__53518 = G__53601;
count__53519 = G__53602;
i__53520 = G__53603;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53517);
if(temp__5735__auto__){
var seq__53517__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53517__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__53517__$1);
var G__53604 = cljs.core.chunk_rest(seq__53517__$1);
var G__53605 = c__4556__auto__;
var G__53606 = cljs.core.count(c__4556__auto__);
var G__53607 = (0);
seq__53517 = G__53604;
chunk__53518 = G__53605;
count__53519 = G__53606;
i__53520 = G__53607;
continue;
} else {
var vec__53562 = cljs.core.first(seq__53517__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53562,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53562,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__53612 = cljs.core.next(seq__53517__$1);
var G__53613 = null;
var G__53614 = (0);
var G__53615 = (0);
seq__53517 = G__53612;
chunk__53518 = G__53613;
count__53519 = G__53614;
i__53520 = G__53615;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__53502_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__53502_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__53503_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__53503_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__53504_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__53504_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__53505_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__53505_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__53568){
var map__53570 = p__53568;
var map__53570__$1 = (((((!((map__53570 == null))))?(((((map__53570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53570.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53570):map__53570);
var svc = map__53570__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53570__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53570__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
