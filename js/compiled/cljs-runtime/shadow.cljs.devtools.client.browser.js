goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58221 = arguments.length;
var i__4737__auto___58222 = (0);
while(true){
if((i__4737__auto___58222 < len__4736__auto___58221)){
args__4742__auto__.push((arguments[i__4737__auto___58222]));

var G__58223 = (i__4737__auto___58222 + (1));
i__4737__auto___58222 = G__58223;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq57971){
var G__57972 = cljs.core.first(seq57971);
var seq57971__$1 = cljs.core.next(seq57971);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__57972,seq57971__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__57979 = cljs.core.seq(sources);
var chunk__57980 = null;
var count__57981 = (0);
var i__57982 = (0);
while(true){
if((i__57982 < count__57981)){
var map__57998 = chunk__57980.cljs$core$IIndexed$_nth$arity$2(null,i__57982);
var map__57998__$1 = (((((!((map__57998 == null))))?(((((map__57998.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57998.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57998):map__57998);
var src = map__57998__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57998__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57998__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57998__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57998__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e58000){var e_58228 = e58000;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_58228);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_58228.message)].join('')));
}

var G__58231 = seq__57979;
var G__58232 = chunk__57980;
var G__58233 = count__57981;
var G__58234 = (i__57982 + (1));
seq__57979 = G__58231;
chunk__57980 = G__58232;
count__57981 = G__58233;
i__57982 = G__58234;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__57979);
if(temp__5735__auto__){
var seq__57979__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57979__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__57979__$1);
var G__58235 = cljs.core.chunk_rest(seq__57979__$1);
var G__58236 = c__4556__auto__;
var G__58237 = cljs.core.count(c__4556__auto__);
var G__58238 = (0);
seq__57979 = G__58235;
chunk__57980 = G__58236;
count__57981 = G__58237;
i__57982 = G__58238;
continue;
} else {
var map__58003 = cljs.core.first(seq__57979__$1);
var map__58003__$1 = (((((!((map__58003 == null))))?(((((map__58003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58003.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58003):map__58003);
var src = map__58003__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58003__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58003__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58003__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58003__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e58005){var e_58239 = e58005;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_58239);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_58239.message)].join('')));
}

var G__58240 = cljs.core.next(seq__57979__$1);
var G__58241 = null;
var G__58242 = (0);
var G__58243 = (0);
seq__57979 = G__58240;
chunk__57980 = G__58241;
count__57981 = G__58242;
i__57982 = G__58243;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__58009 = cljs.core.seq(js_requires);
var chunk__58010 = null;
var count__58011 = (0);
var i__58012 = (0);
while(true){
if((i__58012 < count__58011)){
var js_ns = chunk__58010.cljs$core$IIndexed$_nth$arity$2(null,i__58012);
var require_str_58244 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_58244);


var G__58245 = seq__58009;
var G__58246 = chunk__58010;
var G__58247 = count__58011;
var G__58248 = (i__58012 + (1));
seq__58009 = G__58245;
chunk__58010 = G__58246;
count__58011 = G__58247;
i__58012 = G__58248;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__58009);
if(temp__5735__auto__){
var seq__58009__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58009__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__58009__$1);
var G__58249 = cljs.core.chunk_rest(seq__58009__$1);
var G__58250 = c__4556__auto__;
var G__58251 = cljs.core.count(c__4556__auto__);
var G__58252 = (0);
seq__58009 = G__58249;
chunk__58010 = G__58250;
count__58011 = G__58251;
i__58012 = G__58252;
continue;
} else {
var js_ns = cljs.core.first(seq__58009__$1);
var require_str_58253 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_58253);


var G__58255 = cljs.core.next(seq__58009__$1);
var G__58256 = null;
var G__58257 = (0);
var G__58258 = (0);
seq__58009 = G__58255;
chunk__58010 = G__58256;
count__58011 = G__58257;
i__58012 = G__58258;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__58015){
var map__58016 = p__58015;
var map__58016__$1 = (((((!((map__58016 == null))))?(((((map__58016.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58016.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58016):map__58016);
var msg = map__58016__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58016__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58016__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__58018(s__58019){
return (new cljs.core.LazySeq(null,(function (){
var s__58019__$1 = s__58019;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58019__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__58025 = cljs.core.first(xs__6292__auto__);
var map__58025__$1 = (((((!((map__58025 == null))))?(((((map__58025.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58025.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58025):map__58025);
var src = map__58025__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58025__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58025__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__58019__$1,map__58025,map__58025__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__58016,map__58016__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__58018_$_iter__58020(s__58021){
return (new cljs.core.LazySeq(null,((function (s__58019__$1,map__58025,map__58025__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__58016,map__58016__$1,msg,info,reload_info){
return (function (){
var s__58021__$1 = s__58021;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58021__$1);
if(temp__5735__auto____$1){
var s__58021__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58021__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__58021__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__58023 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__58022 = (0);
while(true){
if((i__58022 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__58022);
cljs.core.chunk_append(b__58023,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__58260 = (i__58022 + (1));
i__58022 = G__58260;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58023),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__58018_$_iter__58020(cljs.core.chunk_rest(s__58021__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58023),null);
}
} else {
var warning = cljs.core.first(s__58021__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__58018_$_iter__58020(cljs.core.rest(s__58021__$2)));
}
} else {
return null;
}
break;
}
});})(s__58019__$1,map__58025,map__58025__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__58016,map__58016__$1,msg,info,reload_info))
,null,null));
});})(s__58019__$1,map__58025,map__58025__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__58016,map__58016__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__58018(cljs.core.rest(s__58019__$1)));
} else {
var G__58261 = cljs.core.rest(s__58019__$1);
s__58019__$1 = G__58261;
continue;
}
} else {
var G__58262 = cljs.core.rest(s__58019__$1);
s__58019__$1 = G__58262;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__58043_58263 = cljs.core.seq(warnings);
var chunk__58044_58264 = null;
var count__58045_58265 = (0);
var i__58046_58266 = (0);
while(true){
if((i__58046_58266 < count__58045_58265)){
var map__58053_58267 = chunk__58044_58264.cljs$core$IIndexed$_nth$arity$2(null,i__58046_58266);
var map__58053_58268__$1 = (((((!((map__58053_58267 == null))))?(((((map__58053_58267.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58053_58267.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58053_58267):map__58053_58267);
var w_58269 = map__58053_58268__$1;
var msg_58270__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58053_58268__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_58271 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58053_58268__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_58272 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58053_58268__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_58273 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58053_58268__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_58273)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_58271),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_58272),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_58270__$1)].join(''));


var G__58275 = seq__58043_58263;
var G__58276 = chunk__58044_58264;
var G__58277 = count__58045_58265;
var G__58278 = (i__58046_58266 + (1));
seq__58043_58263 = G__58275;
chunk__58044_58264 = G__58276;
count__58045_58265 = G__58277;
i__58046_58266 = G__58278;
continue;
} else {
var temp__5735__auto___58280 = cljs.core.seq(seq__58043_58263);
if(temp__5735__auto___58280){
var seq__58043_58281__$1 = temp__5735__auto___58280;
if(cljs.core.chunked_seq_QMARK_(seq__58043_58281__$1)){
var c__4556__auto___58282 = cljs.core.chunk_first(seq__58043_58281__$1);
var G__58283 = cljs.core.chunk_rest(seq__58043_58281__$1);
var G__58284 = c__4556__auto___58282;
var G__58285 = cljs.core.count(c__4556__auto___58282);
var G__58286 = (0);
seq__58043_58263 = G__58283;
chunk__58044_58264 = G__58284;
count__58045_58265 = G__58285;
i__58046_58266 = G__58286;
continue;
} else {
var map__58058_58287 = cljs.core.first(seq__58043_58281__$1);
var map__58058_58288__$1 = (((((!((map__58058_58287 == null))))?(((((map__58058_58287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58058_58287.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58058_58287):map__58058_58287);
var w_58289 = map__58058_58288__$1;
var msg_58290__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58058_58288__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_58291 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58058_58288__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_58292 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58058_58288__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_58293 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58058_58288__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_58293)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_58291),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_58292),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_58290__$1)].join(''));


var G__58294 = cljs.core.next(seq__58043_58281__$1);
var G__58295 = null;
var G__58296 = (0);
var G__58297 = (0);
seq__58043_58263 = G__58294;
chunk__58044_58264 = G__58295;
count__58045_58265 = G__58296;
i__58046_58266 = G__58297;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__58014_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__58014_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__58071){
var map__58072 = p__58071;
var map__58072__$1 = (((((!((map__58072 == null))))?(((((map__58072.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58072.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58072):map__58072);
var msg = map__58072__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58072__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__58075 = cljs.core.seq(updates);
var chunk__58077 = null;
var count__58078 = (0);
var i__58079 = (0);
while(true){
if((i__58079 < count__58078)){
var path = chunk__58077.cljs$core$IIndexed$_nth$arity$2(null,i__58079);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__58134_58299 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__58138_58300 = null;
var count__58139_58301 = (0);
var i__58140_58302 = (0);
while(true){
if((i__58140_58302 < count__58139_58301)){
var node_58303 = chunk__58138_58300.cljs$core$IIndexed$_nth$arity$2(null,i__58140_58302);
if(cljs.core.not(node_58303.shadow$old)){
var path_match_58305 = shadow.cljs.devtools.client.browser.match_paths(node_58303.getAttribute("href"),path);
if(cljs.core.truth_(path_match_58305)){
var new_link_58306 = (function (){var G__58152 = node_58303.cloneNode(true);
G__58152.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_58305),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__58152;
})();
(node_58303.shadow$old = true);

(new_link_58306.onload = ((function (seq__58134_58299,chunk__58138_58300,count__58139_58301,i__58140_58302,seq__58075,chunk__58077,count__58078,i__58079,new_link_58306,path_match_58305,node_58303,path,map__58072,map__58072__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_58303);
});})(seq__58134_58299,chunk__58138_58300,count__58139_58301,i__58140_58302,seq__58075,chunk__58077,count__58078,i__58079,new_link_58306,path_match_58305,node_58303,path,map__58072,map__58072__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_58305], 0));

goog.dom.insertSiblingAfter(new_link_58306,node_58303);


var G__58308 = seq__58134_58299;
var G__58309 = chunk__58138_58300;
var G__58310 = count__58139_58301;
var G__58311 = (i__58140_58302 + (1));
seq__58134_58299 = G__58308;
chunk__58138_58300 = G__58309;
count__58139_58301 = G__58310;
i__58140_58302 = G__58311;
continue;
} else {
var G__58312 = seq__58134_58299;
var G__58313 = chunk__58138_58300;
var G__58314 = count__58139_58301;
var G__58315 = (i__58140_58302 + (1));
seq__58134_58299 = G__58312;
chunk__58138_58300 = G__58313;
count__58139_58301 = G__58314;
i__58140_58302 = G__58315;
continue;
}
} else {
var G__58316 = seq__58134_58299;
var G__58317 = chunk__58138_58300;
var G__58318 = count__58139_58301;
var G__58319 = (i__58140_58302 + (1));
seq__58134_58299 = G__58316;
chunk__58138_58300 = G__58317;
count__58139_58301 = G__58318;
i__58140_58302 = G__58319;
continue;
}
} else {
var temp__5735__auto___58320 = cljs.core.seq(seq__58134_58299);
if(temp__5735__auto___58320){
var seq__58134_58321__$1 = temp__5735__auto___58320;
if(cljs.core.chunked_seq_QMARK_(seq__58134_58321__$1)){
var c__4556__auto___58322 = cljs.core.chunk_first(seq__58134_58321__$1);
var G__58323 = cljs.core.chunk_rest(seq__58134_58321__$1);
var G__58324 = c__4556__auto___58322;
var G__58325 = cljs.core.count(c__4556__auto___58322);
var G__58326 = (0);
seq__58134_58299 = G__58323;
chunk__58138_58300 = G__58324;
count__58139_58301 = G__58325;
i__58140_58302 = G__58326;
continue;
} else {
var node_58327 = cljs.core.first(seq__58134_58321__$1);
if(cljs.core.not(node_58327.shadow$old)){
var path_match_58328 = shadow.cljs.devtools.client.browser.match_paths(node_58327.getAttribute("href"),path);
if(cljs.core.truth_(path_match_58328)){
var new_link_58329 = (function (){var G__58153 = node_58327.cloneNode(true);
G__58153.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_58328),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__58153;
})();
(node_58327.shadow$old = true);

(new_link_58329.onload = ((function (seq__58134_58299,chunk__58138_58300,count__58139_58301,i__58140_58302,seq__58075,chunk__58077,count__58078,i__58079,new_link_58329,path_match_58328,node_58327,seq__58134_58321__$1,temp__5735__auto___58320,path,map__58072,map__58072__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_58327);
});})(seq__58134_58299,chunk__58138_58300,count__58139_58301,i__58140_58302,seq__58075,chunk__58077,count__58078,i__58079,new_link_58329,path_match_58328,node_58327,seq__58134_58321__$1,temp__5735__auto___58320,path,map__58072,map__58072__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_58328], 0));

goog.dom.insertSiblingAfter(new_link_58329,node_58327);


var G__58334 = cljs.core.next(seq__58134_58321__$1);
var G__58335 = null;
var G__58336 = (0);
var G__58337 = (0);
seq__58134_58299 = G__58334;
chunk__58138_58300 = G__58335;
count__58139_58301 = G__58336;
i__58140_58302 = G__58337;
continue;
} else {
var G__58338 = cljs.core.next(seq__58134_58321__$1);
var G__58339 = null;
var G__58340 = (0);
var G__58341 = (0);
seq__58134_58299 = G__58338;
chunk__58138_58300 = G__58339;
count__58139_58301 = G__58340;
i__58140_58302 = G__58341;
continue;
}
} else {
var G__58342 = cljs.core.next(seq__58134_58321__$1);
var G__58343 = null;
var G__58344 = (0);
var G__58345 = (0);
seq__58134_58299 = G__58342;
chunk__58138_58300 = G__58343;
count__58139_58301 = G__58344;
i__58140_58302 = G__58345;
continue;
}
}
} else {
}
}
break;
}


var G__58346 = seq__58075;
var G__58347 = chunk__58077;
var G__58348 = count__58078;
var G__58349 = (i__58079 + (1));
seq__58075 = G__58346;
chunk__58077 = G__58347;
count__58078 = G__58348;
i__58079 = G__58349;
continue;
} else {
var G__58350 = seq__58075;
var G__58351 = chunk__58077;
var G__58352 = count__58078;
var G__58353 = (i__58079 + (1));
seq__58075 = G__58350;
chunk__58077 = G__58351;
count__58078 = G__58352;
i__58079 = G__58353;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__58075);
if(temp__5735__auto__){
var seq__58075__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58075__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__58075__$1);
var G__58354 = cljs.core.chunk_rest(seq__58075__$1);
var G__58355 = c__4556__auto__;
var G__58356 = cljs.core.count(c__4556__auto__);
var G__58357 = (0);
seq__58075 = G__58354;
chunk__58077 = G__58355;
count__58078 = G__58356;
i__58079 = G__58357;
continue;
} else {
var path = cljs.core.first(seq__58075__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__58157_58358 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__58161_58359 = null;
var count__58162_58360 = (0);
var i__58163_58361 = (0);
while(true){
if((i__58163_58361 < count__58162_58360)){
var node_58362 = chunk__58161_58359.cljs$core$IIndexed$_nth$arity$2(null,i__58163_58361);
if(cljs.core.not(node_58362.shadow$old)){
var path_match_58363 = shadow.cljs.devtools.client.browser.match_paths(node_58362.getAttribute("href"),path);
if(cljs.core.truth_(path_match_58363)){
var new_link_58364 = (function (){var G__58170 = node_58362.cloneNode(true);
G__58170.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_58363),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__58170;
})();
(node_58362.shadow$old = true);

(new_link_58364.onload = ((function (seq__58157_58358,chunk__58161_58359,count__58162_58360,i__58163_58361,seq__58075,chunk__58077,count__58078,i__58079,new_link_58364,path_match_58363,node_58362,path,seq__58075__$1,temp__5735__auto__,map__58072,map__58072__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_58362);
});})(seq__58157_58358,chunk__58161_58359,count__58162_58360,i__58163_58361,seq__58075,chunk__58077,count__58078,i__58079,new_link_58364,path_match_58363,node_58362,path,seq__58075__$1,temp__5735__auto__,map__58072,map__58072__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_58363], 0));

goog.dom.insertSiblingAfter(new_link_58364,node_58362);


var G__58365 = seq__58157_58358;
var G__58366 = chunk__58161_58359;
var G__58367 = count__58162_58360;
var G__58368 = (i__58163_58361 + (1));
seq__58157_58358 = G__58365;
chunk__58161_58359 = G__58366;
count__58162_58360 = G__58367;
i__58163_58361 = G__58368;
continue;
} else {
var G__58369 = seq__58157_58358;
var G__58370 = chunk__58161_58359;
var G__58371 = count__58162_58360;
var G__58372 = (i__58163_58361 + (1));
seq__58157_58358 = G__58369;
chunk__58161_58359 = G__58370;
count__58162_58360 = G__58371;
i__58163_58361 = G__58372;
continue;
}
} else {
var G__58373 = seq__58157_58358;
var G__58374 = chunk__58161_58359;
var G__58375 = count__58162_58360;
var G__58376 = (i__58163_58361 + (1));
seq__58157_58358 = G__58373;
chunk__58161_58359 = G__58374;
count__58162_58360 = G__58375;
i__58163_58361 = G__58376;
continue;
}
} else {
var temp__5735__auto___58377__$1 = cljs.core.seq(seq__58157_58358);
if(temp__5735__auto___58377__$1){
var seq__58157_58378__$1 = temp__5735__auto___58377__$1;
if(cljs.core.chunked_seq_QMARK_(seq__58157_58378__$1)){
var c__4556__auto___58379 = cljs.core.chunk_first(seq__58157_58378__$1);
var G__58380 = cljs.core.chunk_rest(seq__58157_58378__$1);
var G__58381 = c__4556__auto___58379;
var G__58382 = cljs.core.count(c__4556__auto___58379);
var G__58383 = (0);
seq__58157_58358 = G__58380;
chunk__58161_58359 = G__58381;
count__58162_58360 = G__58382;
i__58163_58361 = G__58383;
continue;
} else {
var node_58384 = cljs.core.first(seq__58157_58378__$1);
if(cljs.core.not(node_58384.shadow$old)){
var path_match_58385 = shadow.cljs.devtools.client.browser.match_paths(node_58384.getAttribute("href"),path);
if(cljs.core.truth_(path_match_58385)){
var new_link_58386 = (function (){var G__58172 = node_58384.cloneNode(true);
G__58172.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_58385),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__58172;
})();
(node_58384.shadow$old = true);

(new_link_58386.onload = ((function (seq__58157_58358,chunk__58161_58359,count__58162_58360,i__58163_58361,seq__58075,chunk__58077,count__58078,i__58079,new_link_58386,path_match_58385,node_58384,seq__58157_58378__$1,temp__5735__auto___58377__$1,path,seq__58075__$1,temp__5735__auto__,map__58072,map__58072__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_58384);
});})(seq__58157_58358,chunk__58161_58359,count__58162_58360,i__58163_58361,seq__58075,chunk__58077,count__58078,i__58079,new_link_58386,path_match_58385,node_58384,seq__58157_58378__$1,temp__5735__auto___58377__$1,path,seq__58075__$1,temp__5735__auto__,map__58072,map__58072__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_58385], 0));

goog.dom.insertSiblingAfter(new_link_58386,node_58384);


var G__58387 = cljs.core.next(seq__58157_58378__$1);
var G__58388 = null;
var G__58389 = (0);
var G__58390 = (0);
seq__58157_58358 = G__58387;
chunk__58161_58359 = G__58388;
count__58162_58360 = G__58389;
i__58163_58361 = G__58390;
continue;
} else {
var G__58391 = cljs.core.next(seq__58157_58378__$1);
var G__58392 = null;
var G__58393 = (0);
var G__58394 = (0);
seq__58157_58358 = G__58391;
chunk__58161_58359 = G__58392;
count__58162_58360 = G__58393;
i__58163_58361 = G__58394;
continue;
}
} else {
var G__58395 = cljs.core.next(seq__58157_58378__$1);
var G__58396 = null;
var G__58397 = (0);
var G__58398 = (0);
seq__58157_58358 = G__58395;
chunk__58161_58359 = G__58396;
count__58162_58360 = G__58397;
i__58163_58361 = G__58398;
continue;
}
}
} else {
}
}
break;
}


var G__58399 = cljs.core.next(seq__58075__$1);
var G__58400 = null;
var G__58401 = (0);
var G__58402 = (0);
seq__58075 = G__58399;
chunk__58077 = G__58400;
count__58078 = G__58401;
i__58079 = G__58402;
continue;
} else {
var G__58403 = cljs.core.next(seq__58075__$1);
var G__58404 = null;
var G__58405 = (0);
var G__58406 = (0);
seq__58075 = G__58403;
chunk__58077 = G__58404;
count__58078 = G__58405;
i__58079 = G__58406;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__58175){
var map__58176 = p__58175;
var map__58176__$1 = (((((!((map__58176 == null))))?(((((map__58176.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58176.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58176):map__58176);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58176__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__58186){
var map__58187 = p__58186;
var map__58187__$1 = (((((!((map__58187 == null))))?(((((map__58187.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58187.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58187):map__58187);
var _ = map__58187__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58187__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__58190,done,error){
var map__58192 = p__58190;
var map__58192__$1 = (((((!((map__58192 == null))))?(((((map__58192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58192.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58192):map__58192);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58192__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__58194,done,error){
var map__58195 = p__58194;
var map__58195__$1 = (((((!((map__58195 == null))))?(((((map__58195.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58195.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58195):map__58195);
var msg = map__58195__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58195__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58195__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58195__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__58197){
var map__58198 = p__58197;
var map__58198__$1 = (((((!((map__58198 == null))))?(((((map__58198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58198.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58198):map__58198);
var src = map__58198__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58198__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__58204 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__58204) : done.call(null,G__58204));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__58205){
var map__58206 = p__58205;
var map__58206__$1 = (((((!((map__58206 == null))))?(((((map__58206.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58206.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58206):map__58206);
var msg__$1 = map__58206__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58206__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e58208){var ex = e58208;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__58209){
var map__58210 = p__58209;
var map__58210__$1 = (((((!((map__58210 == null))))?(((((map__58210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58210.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58210):map__58210);
var env = map__58210__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58210__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__58212){
var map__58213 = p__58212;
var map__58213__$1 = (((((!((map__58213 == null))))?(((((map__58213.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58213.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58213):map__58213);
var msg = map__58213__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58213__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__58215){
var map__58216 = p__58215;
var map__58216__$1 = (((((!((map__58216 == null))))?(((((map__58216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58216.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58216):map__58216);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58216__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58216__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__58218){
var map__58219 = p__58218;
var map__58219__$1 = (((((!((map__58219 == null))))?(((((map__58219.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58219.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58219):map__58219);
var svc = map__58219__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58219__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
