goog.provide('cljs_http.core');
cljs_http.core.pending_requests = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__5735__auto__ = (function (){var fexpr__55609 = cljs.core.deref(cljs_http.core.pending_requests);
return (fexpr__55609.cljs$core$IFn$_invoke$arity$1 ? fexpr__55609.cljs$core$IFn$_invoke$arity$1(channel) : fexpr__55609.call(null,channel));
})();
if(cljs.core.truth_(temp__5735__auto__)){
var req = temp__5735__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_(channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return new cljs.core.Keyword(null,"jsonp","jsonp",226119588).cljs$core$IFn$_invoke$arity$1(req).cancel(new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.util.camelize,cljs.core.keys(headers)),cljs.core.vals(headers));
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__55623){
var vec__55624 = p__55623;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55624,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55624,(1),null);
return xhr.headers.set(k,v);
}),formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__55637 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__55637)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blob","blob",1636965233),G__55637)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"document","document",-1329188687),G__55637)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),G__55637)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),G__55637)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__55637)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55637)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__55644){
var map__55645 = p__55644;
var map__55645__$1 = (((((!((map__55645 == null))))?(((((map__55645.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55645.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55645):map__55645);
var request = map__55645__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55645__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55645__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55645__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__55656 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__55656,default_headers);

cljs_http.core.apply_response_type_BANG_(G__55656,response_type);

G__55656.setTimeoutInterval(timeout);

G__55656.setWithCredentials(send_credentials);

return G__55656;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__55667){
var map__55668 = p__55667;
var map__55668__$1 = (((((!((map__55668 == null))))?(((((map__55668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55668.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55668):map__55668);
var request = map__55668__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55668__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55668__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55668__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55668__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55668__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55668__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var request_url = cljs_http.util.build_url(request);
var method = cljs.core.name((function (){var or__4126__auto__ = request_method;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers(headers);
var xhr = cljs_http.core.build_xhr(request);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,(function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers(target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),(function (){var G__55682 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__55682) : cljs_http.core.error_kw.call(null,G__55682));
})(),new cljs.core.Keyword(null,"error-text","error-text",2021893718),target.getLastError()], null);
if((!(cljs_http.core.aborted_QMARK_(xhr)))){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}));

if(cljs.core.truth_(progress)){
var listener_55807 = (function (direction,evt){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),evt.total], null):null)], 0)));
});
var G__55686_55811 = xhr;
G__55686_55811.setProgressEventsEnabled(true);

G__55686_55811.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_55807,new cljs.core.Keyword(null,"upload","upload",-255769218)));

G__55686_55811.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_55807,new cljs.core.Keyword(null,"download","download",-300081668)));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__52048__auto___55815 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52049__auto__ = (function (){var switch__51582__auto__ = (function (state_55705){
var state_val_55706 = (state_55705[(1)]);
if((state_val_55706 === (1))){
var state_55705__$1 = state_55705;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55705__$1,(2),cancel);
} else {
if((state_val_55706 === (2))){
var inst_55695 = (state_55705[(2)]);
var inst_55696 = xhr.isComplete();
var inst_55697 = cljs.core.not(inst_55696);
var state_55705__$1 = (function (){var statearr_55709 = state_55705;
(statearr_55709[(7)] = inst_55695);

return statearr_55709;
})();
if(inst_55697){
var statearr_55711_55816 = state_55705__$1;
(statearr_55711_55816[(1)] = (3));

} else {
var statearr_55712_55817 = state_55705__$1;
(statearr_55712_55817[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55706 === (3))){
var inst_55699 = xhr.abort();
var state_55705__$1 = state_55705;
var statearr_55714_55821 = state_55705__$1;
(statearr_55714_55821[(2)] = inst_55699);

(statearr_55714_55821[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55706 === (4))){
var state_55705__$1 = state_55705;
var statearr_55716_55822 = state_55705__$1;
(statearr_55716_55822[(2)] = null);

(statearr_55716_55822[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55706 === (5))){
var inst_55702 = (state_55705[(2)]);
var state_55705__$1 = state_55705;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55705__$1,inst_55702);
} else {
return null;
}
}
}
}
}
});
return (function() {
var cljs_http$core$xhr_$_state_machine__51583__auto__ = null;
var cljs_http$core$xhr_$_state_machine__51583__auto____0 = (function (){
var statearr_55722 = [null,null,null,null,null,null,null,null];
(statearr_55722[(0)] = cljs_http$core$xhr_$_state_machine__51583__auto__);

(statearr_55722[(1)] = (1));

return statearr_55722;
});
var cljs_http$core$xhr_$_state_machine__51583__auto____1 = (function (state_55705){
while(true){
var ret_value__51584__auto__ = (function (){try{while(true){
var result__51585__auto__ = switch__51582__auto__(state_55705);
if(cljs.core.keyword_identical_QMARK_(result__51585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51585__auto__;
}
break;
}
}catch (e55724){if((e55724 instanceof Object)){
var ex__51586__auto__ = e55724;
var statearr_55725_55825 = state_55705;
(statearr_55725_55825[(5)] = ex__51586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_55705);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55724;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55826 = state_55705;
state_55705 = G__55826;
continue;
} else {
return ret_value__51584__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__51583__auto__ = function(state_55705){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__51583__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__51583__auto____1.call(this,state_55705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__51583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__51583__auto____0;
cljs_http$core$xhr_$_state_machine__51583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__51583__auto____1;
return cljs_http$core$xhr_$_state_machine__51583__auto__;
})()
})();
var state__52050__auto__ = (function (){var statearr_55728 = f__52049__auto__();
(statearr_55728[(6)] = c__52048__auto___55815);

return statearr_55728;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52050__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__55733){
var map__55734 = p__55733;
var map__55734__$1 = (((((!((map__55734 == null))))?(((((map__55734.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55734.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55734):map__55734);
var request = map__55734__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55734__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55734__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55734__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__55734__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_55829 = jsonp.send(null,(function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywordize_keys_QMARK_], 0))], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}),(function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp,new cljs.core.Keyword(null,"request","request",1772954723),req_55829], null));

if(cljs.core.truth_(cancel)){
var c__52048__auto___55841 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52049__auto__ = (function (){var switch__51582__auto__ = (function (state_55752){
var state_val_55753 = (state_55752[(1)]);
if((state_val_55753 === (1))){
var state_55752__$1 = state_55752;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55752__$1,(2),cancel);
} else {
if((state_val_55753 === (2))){
var inst_55749 = (state_55752[(2)]);
var inst_55750 = jsonp.cancel(req_55829);
var state_55752__$1 = (function (){var statearr_55757 = state_55752;
(statearr_55757[(7)] = inst_55749);

return statearr_55757;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_55752__$1,inst_55750);
} else {
return null;
}
}
});
return (function() {
var cljs_http$core$jsonp_$_state_machine__51583__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__51583__auto____0 = (function (){
var statearr_55759 = [null,null,null,null,null,null,null,null];
(statearr_55759[(0)] = cljs_http$core$jsonp_$_state_machine__51583__auto__);

(statearr_55759[(1)] = (1));

return statearr_55759;
});
var cljs_http$core$jsonp_$_state_machine__51583__auto____1 = (function (state_55752){
while(true){
var ret_value__51584__auto__ = (function (){try{while(true){
var result__51585__auto__ = switch__51582__auto__(state_55752);
if(cljs.core.keyword_identical_QMARK_(result__51585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51585__auto__;
}
break;
}
}catch (e55760){if((e55760 instanceof Object)){
var ex__51586__auto__ = e55760;
var statearr_55761_55849 = state_55752;
(statearr_55761_55849[(5)] = ex__51586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_55752);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55760;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55850 = state_55752;
state_55752 = G__55850;
continue;
} else {
return ret_value__51584__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__51583__auto__ = function(state_55752){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__51583__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__51583__auto____1.call(this,state_55752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__51583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__51583__auto____0;
cljs_http$core$jsonp_$_state_machine__51583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__51583__auto____1;
return cljs_http$core$jsonp_$_state_machine__51583__auto__;
})()
})();
var state__52050__auto__ = (function (){var statearr_55764 = f__52049__auto__();
(statearr_55764[(6)] = c__52048__auto___55841);

return statearr_55764;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52050__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__55767){
var map__55768 = p__55767;
var map__55768__$1 = (((((!((map__55768 == null))))?(((((map__55768.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55768.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55768):map__55768);
var request = map__55768__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55768__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp(request);
} else {
return cljs_http.core.xhr(request);
}
});

//# sourceMappingURL=cljs_http.core.js.map
