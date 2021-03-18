goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_56521 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_56521(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_56524 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_56524(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__55618 = coll;
var G__55619 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__55618,G__55619) : shadow.dom.lazy_native_coll_seq.call(null,G__55618,G__55619));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__55651 = arguments.length;
switch (G__55651) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__55660 = arguments.length;
switch (G__55660) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__55665 = arguments.length;
switch (G__55665) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__55680 = arguments.length;
switch (G__55680) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__55691 = arguments.length;
switch (G__55691) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__55721 = arguments.length;
switch (G__55721) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e55736){if((e55736 instanceof Object)){
var e = e55736;
return console.log("didnt support attachEvent",el,e);
} else {
throw e55736;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__55744 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__55745 = null;
var count__55746 = (0);
var i__55747 = (0);
while(true){
if((i__55747 < count__55746)){
var el = chunk__55745.cljs$core$IIndexed$_nth$arity$2(null,i__55747);
var handler_56542__$1 = ((function (seq__55744,chunk__55745,count__55746,i__55747,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__55744,chunk__55745,count__55746,i__55747,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_56542__$1);


var G__56543 = seq__55744;
var G__56544 = chunk__55745;
var G__56545 = count__55746;
var G__56546 = (i__55747 + (1));
seq__55744 = G__56543;
chunk__55745 = G__56544;
count__55746 = G__56545;
i__55747 = G__56546;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__55744);
if(temp__5735__auto__){
var seq__55744__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55744__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__55744__$1);
var G__56547 = cljs.core.chunk_rest(seq__55744__$1);
var G__56548 = c__4556__auto__;
var G__56549 = cljs.core.count(c__4556__auto__);
var G__56550 = (0);
seq__55744 = G__56547;
chunk__55745 = G__56548;
count__55746 = G__56549;
i__55747 = G__56550;
continue;
} else {
var el = cljs.core.first(seq__55744__$1);
var handler_56555__$1 = ((function (seq__55744,chunk__55745,count__55746,i__55747,el,seq__55744__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__55744,chunk__55745,count__55746,i__55747,el,seq__55744__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_56555__$1);


var G__56558 = cljs.core.next(seq__55744__$1);
var G__56559 = null;
var G__56560 = (0);
var G__56561 = (0);
seq__55744 = G__56558;
chunk__55745 = G__56559;
count__55746 = G__56560;
i__55747 = G__56561;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__55771 = arguments.length;
switch (G__55771) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__55782 = cljs.core.seq(events);
var chunk__55783 = null;
var count__55784 = (0);
var i__55785 = (0);
while(true){
if((i__55785 < count__55784)){
var vec__55793 = chunk__55783.cljs$core$IIndexed$_nth$arity$2(null,i__55785);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55793,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55793,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__56563 = seq__55782;
var G__56564 = chunk__55783;
var G__56565 = count__55784;
var G__56566 = (i__55785 + (1));
seq__55782 = G__56563;
chunk__55783 = G__56564;
count__55784 = G__56565;
i__55785 = G__56566;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__55782);
if(temp__5735__auto__){
var seq__55782__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55782__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__55782__$1);
var G__56567 = cljs.core.chunk_rest(seq__55782__$1);
var G__56568 = c__4556__auto__;
var G__56569 = cljs.core.count(c__4556__auto__);
var G__56570 = (0);
seq__55782 = G__56567;
chunk__55783 = G__56568;
count__55784 = G__56569;
i__55785 = G__56570;
continue;
} else {
var vec__55797 = cljs.core.first(seq__55782__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55797,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55797,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__56571 = cljs.core.next(seq__55782__$1);
var G__56572 = null;
var G__56573 = (0);
var G__56574 = (0);
seq__55782 = G__56571;
chunk__55783 = G__56572;
count__55784 = G__56573;
i__55785 = G__56574;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__55800 = cljs.core.seq(styles);
var chunk__55801 = null;
var count__55802 = (0);
var i__55803 = (0);
while(true){
if((i__55803 < count__55802)){
var vec__55812 = chunk__55801.cljs$core$IIndexed$_nth$arity$2(null,i__55803);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55812,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55812,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__56578 = seq__55800;
var G__56579 = chunk__55801;
var G__56580 = count__55802;
var G__56581 = (i__55803 + (1));
seq__55800 = G__56578;
chunk__55801 = G__56579;
count__55802 = G__56580;
i__55803 = G__56581;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__55800);
if(temp__5735__auto__){
var seq__55800__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55800__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__55800__$1);
var G__56582 = cljs.core.chunk_rest(seq__55800__$1);
var G__56583 = c__4556__auto__;
var G__56584 = cljs.core.count(c__4556__auto__);
var G__56585 = (0);
seq__55800 = G__56582;
chunk__55801 = G__56583;
count__55802 = G__56584;
i__55803 = G__56585;
continue;
} else {
var vec__55818 = cljs.core.first(seq__55800__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55818,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55818,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__56586 = cljs.core.next(seq__55800__$1);
var G__56587 = null;
var G__56588 = (0);
var G__56589 = (0);
seq__55800 = G__56586;
chunk__55801 = G__56587;
count__55802 = G__56588;
i__55803 = G__56589;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__55824_56591 = key;
var G__55824_56592__$1 = (((G__55824_56591 instanceof cljs.core.Keyword))?G__55824_56591.fqn:null);
switch (G__55824_56592__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_56605 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_56605,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_56605,"aria-");
}
})())){
el.setAttribute(ks_56605,value);
} else {
(el[ks_56605] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__55851){
var map__55852 = p__55851;
var map__55852__$1 = (((((!((map__55852 == null))))?(((((map__55852.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55852.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55852):map__55852);
var props = map__55852__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55852__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__55857 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55857,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55857,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55857,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__55861 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__55861,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__55861;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__55869 = arguments.length;
switch (G__55869) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__55876){
var vec__55878 = p__55876;
var seq__55879 = cljs.core.seq(vec__55878);
var first__55880 = cljs.core.first(seq__55879);
var seq__55879__$1 = cljs.core.next(seq__55879);
var nn = first__55880;
var first__55880__$1 = cljs.core.first(seq__55879__$1);
var seq__55879__$2 = cljs.core.next(seq__55879__$1);
var np = first__55880__$1;
var nc = seq__55879__$2;
var node = vec__55878;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__55883 = nn;
var G__55884 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__55883,G__55884) : create_fn.call(null,G__55883,G__55884));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__55885 = nn;
var G__55886 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__55885,G__55886) : create_fn.call(null,G__55885,G__55886));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__55889 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55889,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55889,(1),null);
var seq__55892_56614 = cljs.core.seq(node_children);
var chunk__55893_56615 = null;
var count__55894_56616 = (0);
var i__55895_56617 = (0);
while(true){
if((i__55895_56617 < count__55894_56616)){
var child_struct_56618 = chunk__55893_56615.cljs$core$IIndexed$_nth$arity$2(null,i__55895_56617);
var children_56619 = shadow.dom.dom_node(child_struct_56618);
if(cljs.core.seq_QMARK_(children_56619)){
var seq__55934_56620 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_56619));
var chunk__55936_56621 = null;
var count__55937_56622 = (0);
var i__55938_56623 = (0);
while(true){
if((i__55938_56623 < count__55937_56622)){
var child_56624 = chunk__55936_56621.cljs$core$IIndexed$_nth$arity$2(null,i__55938_56623);
if(cljs.core.truth_(child_56624)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_56624);


var G__56625 = seq__55934_56620;
var G__56626 = chunk__55936_56621;
var G__56627 = count__55937_56622;
var G__56628 = (i__55938_56623 + (1));
seq__55934_56620 = G__56625;
chunk__55936_56621 = G__56626;
count__55937_56622 = G__56627;
i__55938_56623 = G__56628;
continue;
} else {
var G__56630 = seq__55934_56620;
var G__56631 = chunk__55936_56621;
var G__56632 = count__55937_56622;
var G__56633 = (i__55938_56623 + (1));
seq__55934_56620 = G__56630;
chunk__55936_56621 = G__56631;
count__55937_56622 = G__56632;
i__55938_56623 = G__56633;
continue;
}
} else {
var temp__5735__auto___56634 = cljs.core.seq(seq__55934_56620);
if(temp__5735__auto___56634){
var seq__55934_56635__$1 = temp__5735__auto___56634;
if(cljs.core.chunked_seq_QMARK_(seq__55934_56635__$1)){
var c__4556__auto___56636 = cljs.core.chunk_first(seq__55934_56635__$1);
var G__56637 = cljs.core.chunk_rest(seq__55934_56635__$1);
var G__56638 = c__4556__auto___56636;
var G__56639 = cljs.core.count(c__4556__auto___56636);
var G__56640 = (0);
seq__55934_56620 = G__56637;
chunk__55936_56621 = G__56638;
count__55937_56622 = G__56639;
i__55938_56623 = G__56640;
continue;
} else {
var child_56641 = cljs.core.first(seq__55934_56635__$1);
if(cljs.core.truth_(child_56641)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_56641);


var G__56642 = cljs.core.next(seq__55934_56635__$1);
var G__56643 = null;
var G__56644 = (0);
var G__56645 = (0);
seq__55934_56620 = G__56642;
chunk__55936_56621 = G__56643;
count__55937_56622 = G__56644;
i__55938_56623 = G__56645;
continue;
} else {
var G__56648 = cljs.core.next(seq__55934_56635__$1);
var G__56649 = null;
var G__56650 = (0);
var G__56651 = (0);
seq__55934_56620 = G__56648;
chunk__55936_56621 = G__56649;
count__55937_56622 = G__56650;
i__55938_56623 = G__56651;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_56619);
}


var G__56653 = seq__55892_56614;
var G__56654 = chunk__55893_56615;
var G__56655 = count__55894_56616;
var G__56656 = (i__55895_56617 + (1));
seq__55892_56614 = G__56653;
chunk__55893_56615 = G__56654;
count__55894_56616 = G__56655;
i__55895_56617 = G__56656;
continue;
} else {
var temp__5735__auto___56658 = cljs.core.seq(seq__55892_56614);
if(temp__5735__auto___56658){
var seq__55892_56661__$1 = temp__5735__auto___56658;
if(cljs.core.chunked_seq_QMARK_(seq__55892_56661__$1)){
var c__4556__auto___56662 = cljs.core.chunk_first(seq__55892_56661__$1);
var G__56663 = cljs.core.chunk_rest(seq__55892_56661__$1);
var G__56664 = c__4556__auto___56662;
var G__56665 = cljs.core.count(c__4556__auto___56662);
var G__56666 = (0);
seq__55892_56614 = G__56663;
chunk__55893_56615 = G__56664;
count__55894_56616 = G__56665;
i__55895_56617 = G__56666;
continue;
} else {
var child_struct_56667 = cljs.core.first(seq__55892_56661__$1);
var children_56668 = shadow.dom.dom_node(child_struct_56667);
if(cljs.core.seq_QMARK_(children_56668)){
var seq__55951_56669 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_56668));
var chunk__55953_56670 = null;
var count__55954_56671 = (0);
var i__55955_56672 = (0);
while(true){
if((i__55955_56672 < count__55954_56671)){
var child_56675 = chunk__55953_56670.cljs$core$IIndexed$_nth$arity$2(null,i__55955_56672);
if(cljs.core.truth_(child_56675)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_56675);


var G__56676 = seq__55951_56669;
var G__56677 = chunk__55953_56670;
var G__56678 = count__55954_56671;
var G__56679 = (i__55955_56672 + (1));
seq__55951_56669 = G__56676;
chunk__55953_56670 = G__56677;
count__55954_56671 = G__56678;
i__55955_56672 = G__56679;
continue;
} else {
var G__56681 = seq__55951_56669;
var G__56682 = chunk__55953_56670;
var G__56683 = count__55954_56671;
var G__56684 = (i__55955_56672 + (1));
seq__55951_56669 = G__56681;
chunk__55953_56670 = G__56682;
count__55954_56671 = G__56683;
i__55955_56672 = G__56684;
continue;
}
} else {
var temp__5735__auto___56687__$1 = cljs.core.seq(seq__55951_56669);
if(temp__5735__auto___56687__$1){
var seq__55951_56688__$1 = temp__5735__auto___56687__$1;
if(cljs.core.chunked_seq_QMARK_(seq__55951_56688__$1)){
var c__4556__auto___56689 = cljs.core.chunk_first(seq__55951_56688__$1);
var G__56690 = cljs.core.chunk_rest(seq__55951_56688__$1);
var G__56691 = c__4556__auto___56689;
var G__56692 = cljs.core.count(c__4556__auto___56689);
var G__56693 = (0);
seq__55951_56669 = G__56690;
chunk__55953_56670 = G__56691;
count__55954_56671 = G__56692;
i__55955_56672 = G__56693;
continue;
} else {
var child_56694 = cljs.core.first(seq__55951_56688__$1);
if(cljs.core.truth_(child_56694)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_56694);


var G__56695 = cljs.core.next(seq__55951_56688__$1);
var G__56696 = null;
var G__56697 = (0);
var G__56698 = (0);
seq__55951_56669 = G__56695;
chunk__55953_56670 = G__56696;
count__55954_56671 = G__56697;
i__55955_56672 = G__56698;
continue;
} else {
var G__56701 = cljs.core.next(seq__55951_56688__$1);
var G__56702 = null;
var G__56703 = (0);
var G__56704 = (0);
seq__55951_56669 = G__56701;
chunk__55953_56670 = G__56702;
count__55954_56671 = G__56703;
i__55955_56672 = G__56704;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_56668);
}


var G__56707 = cljs.core.next(seq__55892_56661__$1);
var G__56708 = null;
var G__56709 = (0);
var G__56710 = (0);
seq__55892_56614 = G__56707;
chunk__55893_56615 = G__56708;
count__55894_56616 = G__56709;
i__55895_56617 = G__56710;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__55972 = cljs.core.seq(node);
var chunk__55973 = null;
var count__55974 = (0);
var i__55975 = (0);
while(true){
if((i__55975 < count__55974)){
var n = chunk__55973.cljs$core$IIndexed$_nth$arity$2(null,i__55975);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__56717 = seq__55972;
var G__56718 = chunk__55973;
var G__56719 = count__55974;
var G__56720 = (i__55975 + (1));
seq__55972 = G__56717;
chunk__55973 = G__56718;
count__55974 = G__56719;
i__55975 = G__56720;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__55972);
if(temp__5735__auto__){
var seq__55972__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55972__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__55972__$1);
var G__56721 = cljs.core.chunk_rest(seq__55972__$1);
var G__56722 = c__4556__auto__;
var G__56723 = cljs.core.count(c__4556__auto__);
var G__56724 = (0);
seq__55972 = G__56721;
chunk__55973 = G__56722;
count__55974 = G__56723;
i__55975 = G__56724;
continue;
} else {
var n = cljs.core.first(seq__55972__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__56725 = cljs.core.next(seq__55972__$1);
var G__56726 = null;
var G__56727 = (0);
var G__56728 = (0);
seq__55972 = G__56725;
chunk__55973 = G__56726;
count__55974 = G__56727;
i__55975 = G__56728;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__55983 = arguments.length;
switch (G__55983) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__55991 = arguments.length;
switch (G__55991) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__56009 = arguments.length;
switch (G__56009) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___56739 = arguments.length;
var i__4737__auto___56740 = (0);
while(true){
if((i__4737__auto___56740 < len__4736__auto___56739)){
args__4742__auto__.push((arguments[i__4737__auto___56740]));

var G__56741 = (i__4737__auto___56740 + (1));
i__4737__auto___56740 = G__56741;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__56038_56746 = cljs.core.seq(nodes);
var chunk__56039_56747 = null;
var count__56040_56748 = (0);
var i__56041_56749 = (0);
while(true){
if((i__56041_56749 < count__56040_56748)){
var node_56751 = chunk__56039_56747.cljs$core$IIndexed$_nth$arity$2(null,i__56041_56749);
fragment.appendChild(shadow.dom._to_dom(node_56751));


var G__56752 = seq__56038_56746;
var G__56753 = chunk__56039_56747;
var G__56754 = count__56040_56748;
var G__56755 = (i__56041_56749 + (1));
seq__56038_56746 = G__56752;
chunk__56039_56747 = G__56753;
count__56040_56748 = G__56754;
i__56041_56749 = G__56755;
continue;
} else {
var temp__5735__auto___56760 = cljs.core.seq(seq__56038_56746);
if(temp__5735__auto___56760){
var seq__56038_56761__$1 = temp__5735__auto___56760;
if(cljs.core.chunked_seq_QMARK_(seq__56038_56761__$1)){
var c__4556__auto___56762 = cljs.core.chunk_first(seq__56038_56761__$1);
var G__56763 = cljs.core.chunk_rest(seq__56038_56761__$1);
var G__56764 = c__4556__auto___56762;
var G__56765 = cljs.core.count(c__4556__auto___56762);
var G__56766 = (0);
seq__56038_56746 = G__56763;
chunk__56039_56747 = G__56764;
count__56040_56748 = G__56765;
i__56041_56749 = G__56766;
continue;
} else {
var node_56767 = cljs.core.first(seq__56038_56761__$1);
fragment.appendChild(shadow.dom._to_dom(node_56767));


var G__56768 = cljs.core.next(seq__56038_56761__$1);
var G__56769 = null;
var G__56770 = (0);
var G__56771 = (0);
seq__56038_56746 = G__56768;
chunk__56039_56747 = G__56769;
count__56040_56748 = G__56770;
i__56041_56749 = G__56771;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq56032){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56032));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__56059_56772 = cljs.core.seq(scripts);
var chunk__56060_56773 = null;
var count__56061_56774 = (0);
var i__56062_56775 = (0);
while(true){
if((i__56062_56775 < count__56061_56774)){
var vec__56072_56776 = chunk__56060_56773.cljs$core$IIndexed$_nth$arity$2(null,i__56062_56775);
var script_tag_56777 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56072_56776,(0),null);
var script_body_56778 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56072_56776,(1),null);
eval(script_body_56778);


var G__56779 = seq__56059_56772;
var G__56780 = chunk__56060_56773;
var G__56781 = count__56061_56774;
var G__56782 = (i__56062_56775 + (1));
seq__56059_56772 = G__56779;
chunk__56060_56773 = G__56780;
count__56061_56774 = G__56781;
i__56062_56775 = G__56782;
continue;
} else {
var temp__5735__auto___56783 = cljs.core.seq(seq__56059_56772);
if(temp__5735__auto___56783){
var seq__56059_56784__$1 = temp__5735__auto___56783;
if(cljs.core.chunked_seq_QMARK_(seq__56059_56784__$1)){
var c__4556__auto___56785 = cljs.core.chunk_first(seq__56059_56784__$1);
var G__56786 = cljs.core.chunk_rest(seq__56059_56784__$1);
var G__56787 = c__4556__auto___56785;
var G__56788 = cljs.core.count(c__4556__auto___56785);
var G__56789 = (0);
seq__56059_56772 = G__56786;
chunk__56060_56773 = G__56787;
count__56061_56774 = G__56788;
i__56062_56775 = G__56789;
continue;
} else {
var vec__56080_56790 = cljs.core.first(seq__56059_56784__$1);
var script_tag_56791 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56080_56790,(0),null);
var script_body_56792 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56080_56790,(1),null);
eval(script_body_56792);


var G__56793 = cljs.core.next(seq__56059_56784__$1);
var G__56794 = null;
var G__56795 = (0);
var G__56796 = (0);
seq__56059_56772 = G__56793;
chunk__56060_56773 = G__56794;
count__56061_56774 = G__56795;
i__56062_56775 = G__56796;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__56089){
var vec__56090 = p__56089;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56090,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56090,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__56103 = arguments.length;
switch (G__56103) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__56122 = cljs.core.seq(style_keys);
var chunk__56123 = null;
var count__56124 = (0);
var i__56125 = (0);
while(true){
if((i__56125 < count__56124)){
var it = chunk__56123.cljs$core$IIndexed$_nth$arity$2(null,i__56125);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__56807 = seq__56122;
var G__56808 = chunk__56123;
var G__56809 = count__56124;
var G__56810 = (i__56125 + (1));
seq__56122 = G__56807;
chunk__56123 = G__56808;
count__56124 = G__56809;
i__56125 = G__56810;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__56122);
if(temp__5735__auto__){
var seq__56122__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56122__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__56122__$1);
var G__56811 = cljs.core.chunk_rest(seq__56122__$1);
var G__56812 = c__4556__auto__;
var G__56813 = cljs.core.count(c__4556__auto__);
var G__56814 = (0);
seq__56122 = G__56811;
chunk__56123 = G__56812;
count__56124 = G__56813;
i__56125 = G__56814;
continue;
} else {
var it = cljs.core.first(seq__56122__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__56815 = cljs.core.next(seq__56122__$1);
var G__56816 = null;
var G__56817 = (0);
var G__56818 = (0);
seq__56122 = G__56815;
chunk__56123 = G__56816;
count__56124 = G__56817;
i__56125 = G__56818;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k56142,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__56154 = k56142;
var G__56154__$1 = (((G__56154 instanceof cljs.core.Keyword))?G__56154.fqn:null);
switch (G__56154__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k56142,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__56159){
var vec__56160 = p__56159;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56160,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56160,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__56141){
var self__ = this;
var G__56141__$1 = this;
return (new cljs.core.RecordIter((0),G__56141__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this56143,other56144){
var self__ = this;
var this56143__$1 = this;
return (((!((other56144 == null)))) && ((this56143__$1.constructor === other56144.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56143__$1.x,other56144.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56143__$1.y,other56144.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56143__$1.__extmap,other56144.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__56141){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__56186 = cljs.core.keyword_identical_QMARK_;
var expr__56187 = k__4388__auto__;
if(cljs.core.truth_((pred__56186.cljs$core$IFn$_invoke$arity$2 ? pred__56186.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__56187) : pred__56186.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__56187)))){
return (new shadow.dom.Coordinate(G__56141,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__56186.cljs$core$IFn$_invoke$arity$2 ? pred__56186.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__56187) : pred__56186.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__56187)))){
return (new shadow.dom.Coordinate(self__.x,G__56141,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__56141),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__56141){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__56141,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__56147){
var extmap__4419__auto__ = (function (){var G__56204 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__56147,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__56147)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__56204);
} else {
return G__56204;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__56147),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__56147),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k56212,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__56224 = k56212;
var G__56224__$1 = (((G__56224 instanceof cljs.core.Keyword))?G__56224.fqn:null);
switch (G__56224__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k56212,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__56228){
var vec__56230 = p__56228;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56230,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56230,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__56211){
var self__ = this;
var G__56211__$1 = this;
return (new cljs.core.RecordIter((0),G__56211__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this56213,other56214){
var self__ = this;
var this56213__$1 = this;
return (((!((other56214 == null)))) && ((this56213__$1.constructor === other56214.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56213__$1.w,other56214.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56213__$1.h,other56214.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56213__$1.__extmap,other56214.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__56211){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__56238 = cljs.core.keyword_identical_QMARK_;
var expr__56239 = k__4388__auto__;
if(cljs.core.truth_((pred__56238.cljs$core$IFn$_invoke$arity$2 ? pred__56238.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__56239) : pred__56238.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__56239)))){
return (new shadow.dom.Size(G__56211,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__56238.cljs$core$IFn$_invoke$arity$2 ? pred__56238.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__56239) : pred__56238.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__56239)))){
return (new shadow.dom.Size(self__.w,G__56211,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__56211),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__56211){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__56211,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__56218){
var extmap__4419__auto__ = (function (){var G__56252 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__56218,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__56218)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__56252);
} else {
return G__56252;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__56218),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__56218),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__56852 = (i + (1));
var G__56853 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__56852;
ret = G__56853;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__56279){
var vec__56281 = p__56279;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56281,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56281,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__56286 = arguments.length;
switch (G__56286) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__56861 = ps;
var G__56862 = (i + (1));
el__$1 = G__56861;
i = G__56862;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__56327 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56327,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56327,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56327,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__56335_56870 = cljs.core.seq(props);
var chunk__56336_56871 = null;
var count__56337_56872 = (0);
var i__56338_56873 = (0);
while(true){
if((i__56338_56873 < count__56337_56872)){
var vec__56369_56874 = chunk__56336_56871.cljs$core$IIndexed$_nth$arity$2(null,i__56338_56873);
var k_56875 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56369_56874,(0),null);
var v_56876 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56369_56874,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_56875);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_56875),v_56876);


var G__56877 = seq__56335_56870;
var G__56878 = chunk__56336_56871;
var G__56879 = count__56337_56872;
var G__56880 = (i__56338_56873 + (1));
seq__56335_56870 = G__56877;
chunk__56336_56871 = G__56878;
count__56337_56872 = G__56879;
i__56338_56873 = G__56880;
continue;
} else {
var temp__5735__auto___56881 = cljs.core.seq(seq__56335_56870);
if(temp__5735__auto___56881){
var seq__56335_56882__$1 = temp__5735__auto___56881;
if(cljs.core.chunked_seq_QMARK_(seq__56335_56882__$1)){
var c__4556__auto___56883 = cljs.core.chunk_first(seq__56335_56882__$1);
var G__56884 = cljs.core.chunk_rest(seq__56335_56882__$1);
var G__56885 = c__4556__auto___56883;
var G__56886 = cljs.core.count(c__4556__auto___56883);
var G__56887 = (0);
seq__56335_56870 = G__56884;
chunk__56336_56871 = G__56885;
count__56337_56872 = G__56886;
i__56338_56873 = G__56887;
continue;
} else {
var vec__56373_56891 = cljs.core.first(seq__56335_56882__$1);
var k_56892 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56373_56891,(0),null);
var v_56893 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56373_56891,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_56892);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_56892),v_56893);


var G__56894 = cljs.core.next(seq__56335_56882__$1);
var G__56895 = null;
var G__56896 = (0);
var G__56897 = (0);
seq__56335_56870 = G__56894;
chunk__56336_56871 = G__56895;
count__56337_56872 = G__56896;
i__56338_56873 = G__56897;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__56383 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56383,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56383,(1),null);
var seq__56386_56900 = cljs.core.seq(node_children);
var chunk__56388_56901 = null;
var count__56389_56902 = (0);
var i__56390_56903 = (0);
while(true){
if((i__56390_56903 < count__56389_56902)){
var child_struct_56904 = chunk__56388_56901.cljs$core$IIndexed$_nth$arity$2(null,i__56390_56903);
if((!((child_struct_56904 == null)))){
if(typeof child_struct_56904 === 'string'){
var text_56905 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_56905),child_struct_56904].join(''));
} else {
var children_56906 = shadow.dom.svg_node(child_struct_56904);
if(cljs.core.seq_QMARK_(children_56906)){
var seq__56447_56907 = cljs.core.seq(children_56906);
var chunk__56449_56908 = null;
var count__56450_56909 = (0);
var i__56451_56910 = (0);
while(true){
if((i__56451_56910 < count__56450_56909)){
var child_56911 = chunk__56449_56908.cljs$core$IIndexed$_nth$arity$2(null,i__56451_56910);
if(cljs.core.truth_(child_56911)){
node.appendChild(child_56911);


var G__56912 = seq__56447_56907;
var G__56913 = chunk__56449_56908;
var G__56914 = count__56450_56909;
var G__56915 = (i__56451_56910 + (1));
seq__56447_56907 = G__56912;
chunk__56449_56908 = G__56913;
count__56450_56909 = G__56914;
i__56451_56910 = G__56915;
continue;
} else {
var G__56919 = seq__56447_56907;
var G__56920 = chunk__56449_56908;
var G__56921 = count__56450_56909;
var G__56922 = (i__56451_56910 + (1));
seq__56447_56907 = G__56919;
chunk__56449_56908 = G__56920;
count__56450_56909 = G__56921;
i__56451_56910 = G__56922;
continue;
}
} else {
var temp__5735__auto___56923 = cljs.core.seq(seq__56447_56907);
if(temp__5735__auto___56923){
var seq__56447_56924__$1 = temp__5735__auto___56923;
if(cljs.core.chunked_seq_QMARK_(seq__56447_56924__$1)){
var c__4556__auto___56925 = cljs.core.chunk_first(seq__56447_56924__$1);
var G__56926 = cljs.core.chunk_rest(seq__56447_56924__$1);
var G__56927 = c__4556__auto___56925;
var G__56928 = cljs.core.count(c__4556__auto___56925);
var G__56929 = (0);
seq__56447_56907 = G__56926;
chunk__56449_56908 = G__56927;
count__56450_56909 = G__56928;
i__56451_56910 = G__56929;
continue;
} else {
var child_56930 = cljs.core.first(seq__56447_56924__$1);
if(cljs.core.truth_(child_56930)){
node.appendChild(child_56930);


var G__56931 = cljs.core.next(seq__56447_56924__$1);
var G__56932 = null;
var G__56933 = (0);
var G__56934 = (0);
seq__56447_56907 = G__56931;
chunk__56449_56908 = G__56932;
count__56450_56909 = G__56933;
i__56451_56910 = G__56934;
continue;
} else {
var G__56935 = cljs.core.next(seq__56447_56924__$1);
var G__56936 = null;
var G__56937 = (0);
var G__56938 = (0);
seq__56447_56907 = G__56935;
chunk__56449_56908 = G__56936;
count__56450_56909 = G__56937;
i__56451_56910 = G__56938;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_56906);
}
}


var G__56939 = seq__56386_56900;
var G__56940 = chunk__56388_56901;
var G__56941 = count__56389_56902;
var G__56942 = (i__56390_56903 + (1));
seq__56386_56900 = G__56939;
chunk__56388_56901 = G__56940;
count__56389_56902 = G__56941;
i__56390_56903 = G__56942;
continue;
} else {
var G__56943 = seq__56386_56900;
var G__56944 = chunk__56388_56901;
var G__56945 = count__56389_56902;
var G__56946 = (i__56390_56903 + (1));
seq__56386_56900 = G__56943;
chunk__56388_56901 = G__56944;
count__56389_56902 = G__56945;
i__56390_56903 = G__56946;
continue;
}
} else {
var temp__5735__auto___56947 = cljs.core.seq(seq__56386_56900);
if(temp__5735__auto___56947){
var seq__56386_56948__$1 = temp__5735__auto___56947;
if(cljs.core.chunked_seq_QMARK_(seq__56386_56948__$1)){
var c__4556__auto___56949 = cljs.core.chunk_first(seq__56386_56948__$1);
var G__56950 = cljs.core.chunk_rest(seq__56386_56948__$1);
var G__56951 = c__4556__auto___56949;
var G__56952 = cljs.core.count(c__4556__auto___56949);
var G__56953 = (0);
seq__56386_56900 = G__56950;
chunk__56388_56901 = G__56951;
count__56389_56902 = G__56952;
i__56390_56903 = G__56953;
continue;
} else {
var child_struct_56954 = cljs.core.first(seq__56386_56948__$1);
if((!((child_struct_56954 == null)))){
if(typeof child_struct_56954 === 'string'){
var text_56956 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_56956),child_struct_56954].join(''));
} else {
var children_56958 = shadow.dom.svg_node(child_struct_56954);
if(cljs.core.seq_QMARK_(children_56958)){
var seq__56465_56959 = cljs.core.seq(children_56958);
var chunk__56467_56960 = null;
var count__56468_56961 = (0);
var i__56469_56962 = (0);
while(true){
if((i__56469_56962 < count__56468_56961)){
var child_56963 = chunk__56467_56960.cljs$core$IIndexed$_nth$arity$2(null,i__56469_56962);
if(cljs.core.truth_(child_56963)){
node.appendChild(child_56963);


var G__56964 = seq__56465_56959;
var G__56965 = chunk__56467_56960;
var G__56966 = count__56468_56961;
var G__56967 = (i__56469_56962 + (1));
seq__56465_56959 = G__56964;
chunk__56467_56960 = G__56965;
count__56468_56961 = G__56966;
i__56469_56962 = G__56967;
continue;
} else {
var G__56968 = seq__56465_56959;
var G__56969 = chunk__56467_56960;
var G__56970 = count__56468_56961;
var G__56971 = (i__56469_56962 + (1));
seq__56465_56959 = G__56968;
chunk__56467_56960 = G__56969;
count__56468_56961 = G__56970;
i__56469_56962 = G__56971;
continue;
}
} else {
var temp__5735__auto___56975__$1 = cljs.core.seq(seq__56465_56959);
if(temp__5735__auto___56975__$1){
var seq__56465_56976__$1 = temp__5735__auto___56975__$1;
if(cljs.core.chunked_seq_QMARK_(seq__56465_56976__$1)){
var c__4556__auto___56977 = cljs.core.chunk_first(seq__56465_56976__$1);
var G__56978 = cljs.core.chunk_rest(seq__56465_56976__$1);
var G__56979 = c__4556__auto___56977;
var G__56980 = cljs.core.count(c__4556__auto___56977);
var G__56981 = (0);
seq__56465_56959 = G__56978;
chunk__56467_56960 = G__56979;
count__56468_56961 = G__56980;
i__56469_56962 = G__56981;
continue;
} else {
var child_56982 = cljs.core.first(seq__56465_56976__$1);
if(cljs.core.truth_(child_56982)){
node.appendChild(child_56982);


var G__56983 = cljs.core.next(seq__56465_56976__$1);
var G__56984 = null;
var G__56985 = (0);
var G__56986 = (0);
seq__56465_56959 = G__56983;
chunk__56467_56960 = G__56984;
count__56468_56961 = G__56985;
i__56469_56962 = G__56986;
continue;
} else {
var G__56987 = cljs.core.next(seq__56465_56976__$1);
var G__56988 = null;
var G__56989 = (0);
var G__56990 = (0);
seq__56465_56959 = G__56987;
chunk__56467_56960 = G__56988;
count__56468_56961 = G__56989;
i__56469_56962 = G__56990;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_56958);
}
}


var G__56991 = cljs.core.next(seq__56386_56948__$1);
var G__56992 = null;
var G__56993 = (0);
var G__56994 = (0);
seq__56386_56900 = G__56991;
chunk__56388_56901 = G__56992;
count__56389_56902 = G__56993;
i__56390_56903 = G__56994;
continue;
} else {
var G__56995 = cljs.core.next(seq__56386_56948__$1);
var G__56996 = null;
var G__56997 = (0);
var G__56998 = (0);
seq__56386_56900 = G__56995;
chunk__56388_56901 = G__56996;
count__56389_56902 = G__56997;
i__56390_56903 = G__56998;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___56999 = arguments.length;
var i__4737__auto___57000 = (0);
while(true){
if((i__4737__auto___57000 < len__4736__auto___56999)){
args__4742__auto__.push((arguments[i__4737__auto___57000]));

var G__57001 = (i__4737__auto___57000 + (1));
i__4737__auto___57000 = G__57001;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq56489){
var G__56490 = cljs.core.first(seq56489);
var seq56489__$1 = cljs.core.next(seq56489);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56490,seq56489__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__56498 = arguments.length;
switch (G__56498) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__52048__auto___57010 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52049__auto__ = (function (){var switch__51582__auto__ = (function (state_56504){
var state_val_56505 = (state_56504[(1)]);
if((state_val_56505 === (1))){
var state_56504__$1 = state_56504;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56504__$1,(2),once_or_cleanup);
} else {
if((state_val_56505 === (2))){
var inst_56501 = (state_56504[(2)]);
var inst_56502 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_56504__$1 = (function (){var statearr_56510 = state_56504;
(statearr_56510[(7)] = inst_56501);

return statearr_56510;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_56504__$1,inst_56502);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__51583__auto__ = null;
var shadow$dom$state_machine__51583__auto____0 = (function (){
var statearr_56512 = [null,null,null,null,null,null,null,null];
(statearr_56512[(0)] = shadow$dom$state_machine__51583__auto__);

(statearr_56512[(1)] = (1));

return statearr_56512;
});
var shadow$dom$state_machine__51583__auto____1 = (function (state_56504){
while(true){
var ret_value__51584__auto__ = (function (){try{while(true){
var result__51585__auto__ = switch__51582__auto__(state_56504);
if(cljs.core.keyword_identical_QMARK_(result__51585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51585__auto__;
}
break;
}
}catch (e56513){if((e56513 instanceof Object)){
var ex__51586__auto__ = e56513;
var statearr_56515_57020 = state_56504;
(statearr_56515_57020[(5)] = ex__51586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_56504);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56513;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57021 = state_56504;
state_56504 = G__57021;
continue;
} else {
return ret_value__51584__auto__;
}
break;
}
});
shadow$dom$state_machine__51583__auto__ = function(state_56504){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__51583__auto____0.call(this);
case 1:
return shadow$dom$state_machine__51583__auto____1.call(this,state_56504);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__51583__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__51583__auto____0;
shadow$dom$state_machine__51583__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__51583__auto____1;
return shadow$dom$state_machine__51583__auto__;
})()
})();
var state__52050__auto__ = (function (){var statearr_56517 = f__52049__auto__();
(statearr_56517[(6)] = c__52048__auto___57010);

return statearr_56517;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52050__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
