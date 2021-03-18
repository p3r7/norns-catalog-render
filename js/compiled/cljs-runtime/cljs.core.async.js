goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__52128 = arguments.length;
switch (G__52128) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52129 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52129 = (function (f,blockable,meta52130){
this.f = f;
this.blockable = blockable;
this.meta52130 = meta52130;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async52129.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52131,meta52130__$1){
var self__ = this;
var _52131__$1 = this;
return (new cljs.core.async.t_cljs$core$async52129(self__.f,self__.blockable,meta52130__$1));
}));

(cljs.core.async.t_cljs$core$async52129.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52131){
var self__ = this;
var _52131__$1 = this;
return self__.meta52130;
}));

(cljs.core.async.t_cljs$core$async52129.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52129.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async52129.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async52129.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async52129.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta52130","meta52130",-1479528799,null)], null);
}));

(cljs.core.async.t_cljs$core$async52129.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async52129.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52129");

(cljs.core.async.t_cljs$core$async52129.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async52129");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52129.
 */
cljs.core.async.__GT_t_cljs$core$async52129 = (function cljs$core$async$__GT_t_cljs$core$async52129(f__$1,blockable__$1,meta52130){
return (new cljs.core.async.t_cljs$core$async52129(f__$1,blockable__$1,meta52130));
});

}

return (new cljs.core.async.t_cljs$core$async52129(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__52135 = arguments.length;
switch (G__52135) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__52137 = arguments.length;
switch (G__52137) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__52139 = arguments.length;
switch (G__52139) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_55081 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_55081) : fn1.call(null,val_55081));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_55081) : fn1.call(null,val_55081));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__52150 = arguments.length;
switch (G__52150) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___55138 = n;
var x_55141 = (0);
while(true){
if((x_55141 < n__4613__auto___55138)){
(a[x_55141] = x_55141);

var G__55144 = (x_55141 + (1));
x_55141 = G__55144;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52174 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52174 = (function (flag,meta52175){
this.flag = flag;
this.meta52175 = meta52175;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async52174.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52176,meta52175__$1){
var self__ = this;
var _52176__$1 = this;
return (new cljs.core.async.t_cljs$core$async52174(self__.flag,meta52175__$1));
}));

(cljs.core.async.t_cljs$core$async52174.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52176){
var self__ = this;
var _52176__$1 = this;
return self__.meta52175;
}));

(cljs.core.async.t_cljs$core$async52174.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52174.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async52174.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async52174.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async52174.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta52175","meta52175",-767166630,null)], null);
}));

(cljs.core.async.t_cljs$core$async52174.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async52174.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52174");

(cljs.core.async.t_cljs$core$async52174.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async52174");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52174.
 */
cljs.core.async.__GT_t_cljs$core$async52174 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async52174(flag__$1,meta52175){
return (new cljs.core.async.t_cljs$core$async52174(flag__$1,meta52175));
});

}

return (new cljs.core.async.t_cljs$core$async52174(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52193 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52193 = (function (flag,cb,meta52194){
this.flag = flag;
this.cb = cb;
this.meta52194 = meta52194;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async52193.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52195,meta52194__$1){
var self__ = this;
var _52195__$1 = this;
return (new cljs.core.async.t_cljs$core$async52193(self__.flag,self__.cb,meta52194__$1));
}));

(cljs.core.async.t_cljs$core$async52193.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52195){
var self__ = this;
var _52195__$1 = this;
return self__.meta52194;
}));

(cljs.core.async.t_cljs$core$async52193.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52193.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async52193.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async52193.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async52193.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta52194","meta52194",-445519536,null)], null);
}));

(cljs.core.async.t_cljs$core$async52193.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async52193.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52193");

(cljs.core.async.t_cljs$core$async52193.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async52193");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52193.
 */
cljs.core.async.__GT_t_cljs$core$async52193 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async52193(flag__$1,cb__$1,meta52194){
return (new cljs.core.async.t_cljs$core$async52193(flag__$1,cb__$1,meta52194));
});

}

return (new cljs.core.async.t_cljs$core$async52193(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__52218_SHARP_){
var G__52228 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__52218_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__52228) : fret.call(null,G__52228));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__52219_SHARP_){
var G__52233 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__52219_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__52233) : fret.call(null,G__52233));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__55164 = (i + (1));
i = G__55164;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___55167 = arguments.length;
var i__4737__auto___55168 = (0);
while(true){
if((i__4737__auto___55168 < len__4736__auto___55167)){
args__4742__auto__.push((arguments[i__4737__auto___55168]));

var G__55169 = (i__4737__auto___55168 + (1));
i__4737__auto___55168 = G__55169;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__52267){
var map__52268 = p__52267;
var map__52268__$1 = (((((!((map__52268 == null))))?(((((map__52268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52268.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52268):map__52268);
var opts = map__52268__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq52256){
var G__52261 = cljs.core.first(seq52256);
var seq52256__$1 = cljs.core.next(seq52256);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52261,seq52256__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__52289 = arguments.length;
switch (G__52289) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__52048__auto___55182 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52049__auto__ = (function (){var switch__51582__auto__ = (function (state_52337){
var state_val_52338 = (state_52337[(1)]);
if((state_val_52338 === (7))){
var inst_52333 = (state_52337[(2)]);
var state_52337__$1 = state_52337;
var statearr_52346_55183 = state_52337__$1;
(statearr_52346_55183[(2)] = inst_52333);

(statearr_52346_55183[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52338 === (1))){
var state_52337__$1 = state_52337;
var statearr_52350_55184 = state_52337__$1;
(statearr_52350_55184[(2)] = null);

(statearr_52350_55184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52338 === (4))){
var inst_52313 = (state_52337[(7)]);
var inst_52313__$1 = (state_52337[(2)]);
var inst_52315 = (inst_52313__$1 == null);
var state_52337__$1 = (function (){var statearr_52354 = state_52337;
(statearr_52354[(7)] = inst_52313__$1);

return statearr_52354;
})();
if(cljs.core.truth_(inst_52315)){
var statearr_52357_55186 = state_52337__$1;
(statearr_52357_55186[(1)] = (5));

} else {
var statearr_52360_55187 = state_52337__$1;
(statearr_52360_55187[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52338 === (13))){
var state_52337__$1 = state_52337;
var statearr_52361_55188 = state_52337__$1;
(statearr_52361_55188[(2)] = null);

(statearr_52361_55188[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52338 === (6))){
var inst_52313 = (state_52337[(7)]);
var state_52337__$1 = state_52337;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52337__$1,(11),to,inst_52313);
} else {
if((state_val_52338 === (3))){
var inst_52335 = (state_52337[(2)]);
var state_52337__$1 = state_52337;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52337__$1,inst_52335);
} else {
if((state_val_52338 === (12))){
var state_52337__$1 = state_52337;
var statearr_52371_55193 = state_52337__$1;
(statearr_52371_55193[(2)] = null);

(statearr_52371_55193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52338 === (2))){
var state_52337__$1 = state_52337;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52337__$1,(4),from);
} else {
if((state_val_52338 === (11))){
var inst_52325 = (state_52337[(2)]);
var state_52337__$1 = state_52337;
if(cljs.core.truth_(inst_52325)){
var statearr_52376_55197 = state_52337__$1;
(statearr_52376_55197[(1)] = (12));

} else {
var statearr_52379_55198 = state_52337__$1;
(statearr_52379_55198[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52338 === (9))){
var state_52337__$1 = state_52337;
var statearr_52382_55201 = state_52337__$1;
(statearr_52382_55201[(2)] = null);

(statearr_52382_55201[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52338 === (5))){
var state_52337__$1 = state_52337;
if(cljs.core.truth_(close_QMARK_)){
var statearr_52383_55204 = state_52337__$1;
(statearr_52383_55204[(1)] = (8));

} else {
var statearr_52387_55205 = state_52337__$1;
(statearr_52387_55205[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52338 === (14))){
var inst_52331 = (state_52337[(2)]);
var state_52337__$1 = state_52337;
var statearr_52388_55210 = state_52337__$1;
(statearr_52388_55210[(2)] = inst_52331);

(statearr_52388_55210[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52338 === (10))){
var inst_52322 = (state_52337[(2)]);
var state_52337__$1 = state_52337;
var statearr_52389_55211 = state_52337__$1;
(statearr_52389_55211[(2)] = inst_52322);

(statearr_52389_55211[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52338 === (8))){
var inst_52319 = cljs.core.async.close_BANG_(to);
var state_52337__$1 = state_52337;
var statearr_52392_55212 = state_52337__$1;
(statearr_52392_55212[(2)] = inst_52319);

(statearr_52392_55212[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__51583__auto__ = null;
var cljs$core$async$state_machine__51583__auto____0 = (function (){
var statearr_52398 = [null,null,null,null,null,null,null,null];
(statearr_52398[(0)] = cljs$core$async$state_machine__51583__auto__);

(statearr_52398[(1)] = (1));

return statearr_52398;
});
var cljs$core$async$state_machine__51583__auto____1 = (function (state_52337){
while(true){
var ret_value__51584__auto__ = (function (){try{while(true){
var result__51585__auto__ = switch__51582__auto__(state_52337);
if(cljs.core.keyword_identical_QMARK_(result__51585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51585__auto__;
}
break;
}
}catch (e52400){if((e52400 instanceof Object)){
var ex__51586__auto__ = e52400;
var statearr_52403_55220 = state_52337;
(statearr_52403_55220[(5)] = ex__51586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52337);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52400;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55223 = state_52337;
state_52337 = G__55223;
continue;
} else {
return ret_value__51584__auto__;
}
break;
}
});
cljs$core$async$state_machine__51583__auto__ = function(state_52337){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51583__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51583__auto____1.call(this,state_52337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51583__auto____0;
cljs$core$async$state_machine__51583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51583__auto____1;
return cljs$core$async$state_machine__51583__auto__;
})()
})();
var state__52050__auto__ = (function (){var statearr_52407 = f__52049__auto__();
(statearr_52407[(6)] = c__52048__auto___55182);

return statearr_52407;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52050__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__52427){
var vec__52428 = p__52427;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52428,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52428,(1),null);
var job = vec__52428;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__52048__auto___55227 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52049__auto__ = (function (){var switch__51582__auto__ = (function (state_52438){
var state_val_52439 = (state_52438[(1)]);
if((state_val_52439 === (1))){
var state_52438__$1 = state_52438;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52438__$1,(2),res,v);
} else {
if((state_val_52439 === (2))){
var inst_52435 = (state_52438[(2)]);
var inst_52436 = cljs.core.async.close_BANG_(res);
var state_52438__$1 = (function (){var statearr_52445 = state_52438;
(statearr_52445[(7)] = inst_52435);

return statearr_52445;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_52438__$1,inst_52436);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__51583__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__51583__auto____0 = (function (){
var statearr_52450 = [null,null,null,null,null,null,null,null];
(statearr_52450[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__51583__auto__);

(statearr_52450[(1)] = (1));

return statearr_52450;
});
var cljs$core$async$pipeline_STAR__$_state_machine__51583__auto____1 = (function (state_52438){
while(true){
var ret_value__51584__auto__ = (function (){try{while(true){
var result__51585__auto__ = switch__51582__auto__(state_52438);
if(cljs.core.keyword_identical_QMARK_(result__51585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51585__auto__;
}
break;
}
}catch (e52452){if((e52452 instanceof Object)){
var ex__51586__auto__ = e52452;
var statearr_52453_55236 = state_52438;
(statearr_52453_55236[(5)] = ex__51586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52438);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52452;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55239 = state_52438;
state_52438 = G__55239;
continue;
} else {
return ret_value__51584__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__51583__auto__ = function(state_52438){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__51583__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__51583__auto____1.call(this,state_52438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__51583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__51583__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__51583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__51583__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__51583__auto__;
})()
})();
var state__52050__auto__ = (function (){var statearr_52455 = f__52049__auto__();
(statearr_52455[(6)] = c__52048__auto___55227);

return statearr_52455;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52050__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__52456){
var vec__52459 = p__52456;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52459,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52459,(1),null);
var job = vec__52459;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___55246 = n;
var __55247 = (0);
while(true){
if((__55247 < n__4613__auto___55246)){
var G__52468_55248 = type;
var G__52468_55249__$1 = (((G__52468_55248 instanceof cljs.core.Keyword))?G__52468_55248.fqn:null);
switch (G__52468_55249__$1) {
case "compute":
var c__52048__auto___55253 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__55247,c__52048__auto___55253,G__52468_55248,G__52468_55249__$1,n__4613__auto___55246,jobs,results,process,async){
return (function (){
var f__52049__auto__ = (function (){var switch__51582__auto__ = ((function (__55247,c__52048__auto___55253,G__52468_55248,G__52468_55249__$1,n__4613__auto___55246,jobs,results,process,async){
return (function (state_52486){
var state_val_52487 = (state_52486[(1)]);
if((state_val_52487 === (1))){
var state_52486__$1 = state_52486;
var statearr_52494_55257 = state_52486__$1;
(statearr_52494_55257[(2)] = null);

(statearr_52494_55257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52487 === (2))){
var state_52486__$1 = state_52486;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52486__$1,(4),jobs);
} else {
if((state_val_52487 === (3))){
var inst_52484 = (state_52486[(2)]);
var state_52486__$1 = state_52486;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52486__$1,inst_52484);
} else {
if((state_val_52487 === (4))){
var inst_52474 = (state_52486[(2)]);
var inst_52477 = process(inst_52474);
var state_52486__$1 = state_52486;
if(cljs.core.truth_(inst_52477)){
var statearr_52498_55259 = state_52486__$1;
(statearr_52498_55259[(1)] = (5));

} else {
var statearr_52499_55261 = state_52486__$1;
(statearr_52499_55261[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52487 === (5))){
var state_52486__$1 = state_52486;
var statearr_52500_55264 = state_52486__$1;
(statearr_52500_55264[(2)] = null);

(statearr_52500_55264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52487 === (6))){
var state_52486__$1 = state_52486;
var statearr_52503_55265 = state_52486__$1;
(statearr_52503_55265[(2)] = null);

(statearr_52503_55265[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52487 === (7))){
var inst_52482 = (state_52486[(2)]);
var state_52486__$1 = state_52486;
var statearr_52504_55267 = state_52486__$1;
(statearr_52504_55267[(2)] = inst_52482);

(statearr_52504_55267[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__55247,c__52048__auto___55253,G__52468_55248,G__52468_55249__$1,n__4613__auto___55246,jobs,results,process,async))
;
return ((function (__55247,switch__51582__auto__,c__52048__auto___55253,G__52468_55248,G__52468_55249__$1,n__4613__auto___55246,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__51583__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__51583__auto____0 = (function (){
var statearr_52506 = [null,null,null,null,null,null,null];
(statearr_52506[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__51583__auto__);

(statearr_52506[(1)] = (1));

return statearr_52506;
});
var cljs$core$async$pipeline_STAR__$_state_machine__51583__auto____1 = (function (state_52486){
while(true){
var ret_value__51584__auto__ = (function (){try{while(true){
var result__51585__auto__ = switch__51582__auto__(state_52486);
if(cljs.core.keyword_identical_QMARK_(result__51585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51585__auto__;
}
break;
}
}catch (e52507){if((e52507 instanceof Object)){
var ex__51586__auto__ = e52507;
var statearr_52508_55277 = state_52486;
(statearr_52508_55277[(5)] = ex__51586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52486);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52507;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55281 = state_52486;
state_52486 = G__55281;
continue;
} else {
return ret_value__51584__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__51583__auto__ = function(state_52486){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__51583__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__51583__auto____1.call(this,state_52486);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__51583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__51583__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__51583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__51583__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__51583__auto__;
})()
;})(__55247,switch__51582__auto__,c__52048__auto___55253,G__52468_55248,G__52468_55249__$1,n__4613__auto___55246,jobs,results,process,async))
})();
var state__52050__auto__ = (function (){var statearr_52512 = f__52049__auto__();
(statearr_52512[(6)] = c__52048__auto___55253);

return statearr_52512;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52050__auto__);
});})(__55247,c__52048__auto___55253,G__52468_55248,G__52468_55249__$1,n__4613__auto___55246,jobs,results,process,async))
);


break;
case "async":
var c__52048__auto___55287 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__55247,c__52048__auto___55287,G__52468_55248,G__52468_55249__$1,n__4613__auto___55246,jobs,results,process,async){
return (function (){
var f__52049__auto__ = (function (){var switch__51582__auto__ = ((function (__55247,c__52048__auto___55287,G__52468_55248,G__52468_55249__$1,n__4613__auto___55246,jobs,results,process,async){
return (function (state_52525){
var state_val_52526 = (state_52525[(1)]);
if((state_val_52526 === (1))){
var state_52525__$1 = state_52525;
var statearr_52528_55295 = state_52525__$1;
(statearr_52528_55295[(2)] = null);

(statearr_52528_55295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52526 === (2))){
var state_52525__$1 = state_52525;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52525__$1,(4),jobs);
} else {
if((state_val_52526 === (3))){
var inst_52523 = (state_52525[(2)]);
var state_52525__$1 = state_52525;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52525__$1,inst_52523);
} else {
if((state_val_52526 === (4))){
var inst_52515 = (state_52525[(2)]);
var inst_52516 = async(inst_52515);
var state_52525__$1 = state_52525;
if(cljs.core.truth_(inst_52516)){
var statearr_52535_55304 = state_52525__$1;
(statearr_52535_55304[(1)] = (5));

} else {
var statearr_52536_55307 = state_52525__$1;
(statearr_52536_55307[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52526 === (5))){
var state_52525__$1 = state_52525;
var statearr_52541_55309 = state_52525__$1;
(statearr_52541_55309[(2)] = null);

(statearr_52541_55309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52526 === (6))){
var state_52525__$1 = state_52525;
var statearr_52542_55314 = state_52525__$1;
(statearr_52542_55314[(2)] = null);

(statearr_52542_55314[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52526 === (7))){
var inst_52521 = (state_52525[(2)]);
var state_52525__$1 = state_52525;
var statearr_52543_55318 = state_52525__$1;
(statearr_52543_55318[(2)] = inst_52521);

(statearr_52543_55318[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__55247,c__52048__auto___55287,G__52468_55248,G__52468_55249__$1,n__4613__auto___55246,jobs,results,process,async))
;
return ((function (__55247,switch__51582__auto__,c__52048__auto___55287,G__52468_55248,G__52468_55249__$1,n__4613__auto___55246,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__51583__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__51583__auto____0 = (function (){
var statearr_52547 = [null,null,null,null,null,null,null];
(statearr_52547[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__51583__auto__);

(statearr_52547[(1)] = (1));

return statearr_52547;
});
var cljs$core$async$pipeline_STAR__$_state_machine__51583__auto____1 = (function (state_52525){
while(true){
var ret_value__51584__auto__ = (function (){try{while(true){
var result__51585__auto__ = switch__51582__auto__(state_52525);
if(cljs.core.keyword_identical_QMARK_(result__51585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51585__auto__;
}
break;
}
}catch (e52548){if((e52548 instanceof Object)){
var ex__51586__auto__ = e52548;
var statearr_52551_55326 = state_52525;
(statearr_52551_55326[(5)] = ex__51586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52525);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52548;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55327 = state_52525;
state_52525 = G__55327;
continue;
} else {
return ret_value__51584__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__51583__auto__ = function(state_52525){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__51583__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__51583__auto____1.call(this,state_52525);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__51583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__51583__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__51583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__51583__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__51583__auto__;
})()
;})(__55247,switch__51582__auto__,c__52048__auto___55287,G__52468_55248,G__52468_55249__$1,n__4613__auto___55246,jobs,results,process,async))
})();
var state__52050__auto__ = (function (){var statearr_52555 = f__52049__auto__();
(statearr_52555[(6)] = c__52048__auto___55287);

return statearr_52555;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52050__auto__);
});})(__55247,c__52048__auto___55287,G__52468_55248,G__52468_55249__$1,n__4613__auto___55246,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52468_55249__$1)].join('')));

}

var G__55334 = (__55247 + (1));
__55247 = G__55334;
continue;
} else {
}
break;
}

var c__52048__auto___55335 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52049__auto__ = (function (){var switch__51582__auto__ = (function (state_52582){
var state_val_52584 = (state_52582[(1)]);
if((state_val_52584 === (7))){
var inst_52578 = (state_52582[(2)]);
var state_52582__$1 = state_52582;
var statearr_52589_55337 = state_52582__$1;
(statearr_52589_55337[(2)] = inst_52578);

(statearr_52589_55337[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52584 === (1))){
var state_52582__$1 = state_52582;
var statearr_52591_55339 = state_52582__$1;
(statearr_52591_55339[(2)] = null);

(statearr_52591_55339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52584 === (4))){
var inst_52560 = (state_52582[(7)]);
var inst_52560__$1 = (state_52582[(2)]);
var inst_52562 = (inst_52560__$1 == null);
var state_52582__$1 = (function (){var statearr_52595 = state_52582;
(statearr_52595[(7)] = inst_52560__$1);

return statearr_52595;
})();
if(cljs.core.truth_(inst_52562)){
var statearr_52596_55345 = state_52582__$1;
(statearr_52596_55345[(1)] = (5));

} else {
var statearr_52597_55346 = state_52582__$1;
(statearr_52597_55346[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52584 === (6))){
var inst_52566 = (state_52582[(8)]);
var inst_52560 = (state_52582[(7)]);
var inst_52566__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_52568 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_52569 = [inst_52560,inst_52566__$1];
var inst_52571 = (new cljs.core.PersistentVector(null,2,(5),inst_52568,inst_52569,null));
var state_52582__$1 = (function (){var statearr_52603 = state_52582;
(statearr_52603[(8)] = inst_52566__$1);

return statearr_52603;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52582__$1,(8),jobs,inst_52571);
} else {
if((state_val_52584 === (3))){
var inst_52580 = (state_52582[(2)]);
var state_52582__$1 = state_52582;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52582__$1,inst_52580);
} else {
if((state_val_52584 === (2))){
var state_52582__$1 = state_52582;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52582__$1,(4),from);
} else {
if((state_val_52584 === (9))){
var inst_52575 = (state_52582[(2)]);
var state_52582__$1 = (function (){var statearr_52609 = state_52582;
(statearr_52609[(9)] = inst_52575);

return statearr_52609;
})();
var statearr_52610_55350 = state_52582__$1;
(statearr_52610_55350[(2)] = null);

(statearr_52610_55350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52584 === (5))){
var inst_52564 = cljs.core.async.close_BANG_(jobs);
var state_52582__$1 = state_52582;
var statearr_52614_55353 = state_52582__$1;
(statearr_52614_55353[(2)] = inst_52564);

(statearr_52614_55353[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52584 === (8))){
var inst_52566 = (state_52582[(8)]);
var inst_52573 = (state_52582[(2)]);
var state_52582__$1 = (function (){var statearr_52617 = state_52582;
(statearr_52617[(10)] = inst_52573);

return statearr_52617;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52582__$1,(9),results,inst_52566);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__51583__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__51583__auto____0 = (function (){
var statearr_52620 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_52620[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__51583__auto__);

(statearr_52620[(1)] = (1));

return statearr_52620;
});
var cljs$core$async$pipeline_STAR__$_state_machine__51583__auto____1 = (function (state_52582){
while(true){
var ret_value__51584__auto__ = (function (){try{while(true){
var result__51585__auto__ = switch__51582__auto__(state_52582);
if(cljs.core.keyword_identical_QMARK_(result__51585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51585__auto__;
}
break;
}
}catch (e52622){if((e52622 instanceof Object)){
var ex__51586__auto__ = e52622;
var statearr_52623_55361 = state_52582;
(statearr_52623_55361[(5)] = ex__51586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52582);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52622;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55362 = state_52582;
state_52582 = G__55362;
continue;
} else {
return ret_value__51584__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__51583__auto__ = function(state_52582){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__51583__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__51583__auto____1.call(this,state_52582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__51583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__51583__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__51583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__51583__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__51583__auto__;
})()
})();
var state__52050__auto__ = (function (){var statearr_52626 = f__52049__auto__();
(statearr_52626[(6)] = c__52048__auto___55335);

return statearr_52626;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52050__auto__);
}));


var c__52048__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52049__auto__ = (function (){var switch__51582__auto__ = (function (state_52670){
var state_val_52671 = (state_52670[(1)]);
if((state_val_52671 === (7))){
var inst_52666 = (state_52670[(2)]);
var state_52670__$1 = state_52670;
var statearr_52678_55365 = state_52670__$1;
(statearr_52678_55365[(2)] = inst_52666);

(statearr_52678_55365[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52671 === (20))){
var state_52670__$1 = state_52670;
var statearr_52681_55367 = state_52670__$1;
(statearr_52681_55367[(2)] = null);

(statearr_52681_55367[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52671 === (1))){
var state_52670__$1 = state_52670;
var statearr_52684_55369 = state_52670__$1;
(statearr_52684_55369[(2)] = null);

(statearr_52684_55369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52671 === (4))){
var inst_52631 = (state_52670[(7)]);
var inst_52631__$1 = (state_52670[(2)]);
var inst_52632 = (inst_52631__$1 == null);
var state_52670__$1 = (function (){var statearr_52687 = state_52670;
(statearr_52687[(7)] = inst_52631__$1);

return statearr_52687;
})();
if(cljs.core.truth_(inst_52632)){
var statearr_52688_55371 = state_52670__$1;
(statearr_52688_55371[(1)] = (5));

} else {
var statearr_52689_55372 = state_52670__$1;
(statearr_52689_55372[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52671 === (15))){
var inst_52645 = (state_52670[(8)]);
var state_52670__$1 = state_52670;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52670__$1,(18),to,inst_52645);
} else {
if((state_val_52671 === (21))){
var inst_52661 = (state_52670[(2)]);
var state_52670__$1 = state_52670;
var statearr_52694_55379 = state_52670__$1;
(statearr_52694_55379[(2)] = inst_52661);

(statearr_52694_55379[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52671 === (13))){
var inst_52663 = (state_52670[(2)]);
var state_52670__$1 = (function (){var statearr_52697 = state_52670;
(statearr_52697[(9)] = inst_52663);

return statearr_52697;
})();
var statearr_52698_55386 = state_52670__$1;
(statearr_52698_55386[(2)] = null);

(statearr_52698_55386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52671 === (6))){
var inst_52631 = (state_52670[(7)]);
var state_52670__$1 = state_52670;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52670__$1,(11),inst_52631);
} else {
if((state_val_52671 === (17))){
var inst_52654 = (state_52670[(2)]);
var state_52670__$1 = state_52670;
if(cljs.core.truth_(inst_52654)){
var statearr_52703_55388 = state_52670__$1;
(statearr_52703_55388[(1)] = (19));

} else {
var statearr_52704_55389 = state_52670__$1;
(statearr_52704_55389[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52671 === (3))){
var inst_52668 = (state_52670[(2)]);
var state_52670__$1 = state_52670;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52670__$1,inst_52668);
} else {
if((state_val_52671 === (12))){
var inst_52642 = (state_52670[(10)]);
var state_52670__$1 = state_52670;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52670__$1,(14),inst_52642);
} else {
if((state_val_52671 === (2))){
var state_52670__$1 = state_52670;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52670__$1,(4),results);
} else {
if((state_val_52671 === (19))){
var state_52670__$1 = state_52670;
var statearr_52710_55395 = state_52670__$1;
(statearr_52710_55395[(2)] = null);

(statearr_52710_55395[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52671 === (11))){
var inst_52642 = (state_52670[(2)]);
var state_52670__$1 = (function (){var statearr_52711 = state_52670;
(statearr_52711[(10)] = inst_52642);

return statearr_52711;
})();
var statearr_52712_55396 = state_52670__$1;
(statearr_52712_55396[(2)] = null);

(statearr_52712_55396[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52671 === (9))){
var state_52670__$1 = state_52670;
var statearr_52717_55400 = state_52670__$1;
(statearr_52717_55400[(2)] = null);

(statearr_52717_55400[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52671 === (5))){
var state_52670__$1 = state_52670;
if(cljs.core.truth_(close_QMARK_)){
var statearr_52721_55402 = state_52670__$1;
(statearr_52721_55402[(1)] = (8));

} else {
var statearr_52724_55403 = state_52670__$1;
(statearr_52724_55403[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52671 === (14))){
var inst_52645 = (state_52670[(8)]);
var inst_52645__$1 = (state_52670[(2)]);
var inst_52647 = (inst_52645__$1 == null);
var inst_52648 = cljs.core.not(inst_52647);
var state_52670__$1 = (function (){var statearr_52725 = state_52670;
(statearr_52725[(8)] = inst_52645__$1);

return statearr_52725;
})();
if(inst_52648){
var statearr_52729_55411 = state_52670__$1;
(statearr_52729_55411[(1)] = (15));

} else {
var statearr_52730_55413 = state_52670__$1;
(statearr_52730_55413[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52671 === (16))){
var state_52670__$1 = state_52670;
var statearr_52731_55414 = state_52670__$1;
(statearr_52731_55414[(2)] = false);

(statearr_52731_55414[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52671 === (10))){
var inst_52638 = (state_52670[(2)]);
var state_52670__$1 = state_52670;
var statearr_52732_55419 = state_52670__$1;
(statearr_52732_55419[(2)] = inst_52638);

(statearr_52732_55419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52671 === (18))){
var inst_52651 = (state_52670[(2)]);
var state_52670__$1 = state_52670;
var statearr_52734_55424 = state_52670__$1;
(statearr_52734_55424[(2)] = inst_52651);

(statearr_52734_55424[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52671 === (8))){
var inst_52635 = cljs.core.async.close_BANG_(to);
var state_52670__$1 = state_52670;
var statearr_52736_55425 = state_52670__$1;
(statearr_52736_55425[(2)] = inst_52635);

(statearr_52736_55425[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__51583__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__51583__auto____0 = (function (){
var statearr_52738 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_52738[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__51583__auto__);

(statearr_52738[(1)] = (1));

return statearr_52738;
});
var cljs$core$async$pipeline_STAR__$_state_machine__51583__auto____1 = (function (state_52670){
while(true){
var ret_value__51584__auto__ = (function (){try{while(true){
var result__51585__auto__ = switch__51582__auto__(state_52670);
if(cljs.core.keyword_identical_QMARK_(result__51585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51585__auto__;
}
break;
}
}catch (e52740){if((e52740 instanceof Object)){
var ex__51586__auto__ = e52740;
var statearr_52741_55432 = state_52670;
(statearr_52741_55432[(5)] = ex__51586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52670);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52740;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55437 = state_52670;
state_52670 = G__55437;
continue;
} else {
return ret_value__51584__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__51583__auto__ = function(state_52670){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__51583__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__51583__auto____1.call(this,state_52670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__51583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__51583__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__51583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__51583__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__51583__auto__;
})()
})();
var state__52050__auto__ = (function (){var statearr_52745 = f__52049__auto__();
(statearr_52745[(6)] = c__52048__auto__);

return statearr_52745;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52050__auto__);
}));

return c__52048__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__52751 = arguments.length;
switch (G__52751) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__52760 = arguments.length;
switch (G__52760) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__52770 = arguments.length;
switch (G__52770) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__52048__auto___55467 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52049__auto__ = (function (){var switch__51582__auto__ = (function (state_52808){
var state_val_52809 = (state_52808[(1)]);
if((state_val_52809 === (7))){
var inst_52802 = (state_52808[(2)]);
var state_52808__$1 = state_52808;
var statearr_52812_55472 = state_52808__$1;
(statearr_52812_55472[(2)] = inst_52802);

(statearr_52812_55472[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52809 === (1))){
var state_52808__$1 = state_52808;
var statearr_52813_55476 = state_52808__$1;
(statearr_52813_55476[(2)] = null);

(statearr_52813_55476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52809 === (4))){
var inst_52782 = (state_52808[(7)]);
var inst_52782__$1 = (state_52808[(2)]);
var inst_52784 = (inst_52782__$1 == null);
var state_52808__$1 = (function (){var statearr_52814 = state_52808;
(statearr_52814[(7)] = inst_52782__$1);

return statearr_52814;
})();
if(cljs.core.truth_(inst_52784)){
var statearr_52815_55477 = state_52808__$1;
(statearr_52815_55477[(1)] = (5));

} else {
var statearr_52816_55479 = state_52808__$1;
(statearr_52816_55479[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52809 === (13))){
var state_52808__$1 = state_52808;
var statearr_52820_55480 = state_52808__$1;
(statearr_52820_55480[(2)] = null);

(statearr_52820_55480[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52809 === (6))){
var inst_52782 = (state_52808[(7)]);
var inst_52789 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_52782) : p.call(null,inst_52782));
var state_52808__$1 = state_52808;
if(cljs.core.truth_(inst_52789)){
var statearr_52821_55482 = state_52808__$1;
(statearr_52821_55482[(1)] = (9));

} else {
var statearr_52822_55483 = state_52808__$1;
(statearr_52822_55483[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52809 === (3))){
var inst_52804 = (state_52808[(2)]);
var state_52808__$1 = state_52808;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52808__$1,inst_52804);
} else {
if((state_val_52809 === (12))){
var state_52808__$1 = state_52808;
var statearr_52823_55486 = state_52808__$1;
(statearr_52823_55486[(2)] = null);

(statearr_52823_55486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52809 === (2))){
var state_52808__$1 = state_52808;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52808__$1,(4),ch);
} else {
if((state_val_52809 === (11))){
var inst_52782 = (state_52808[(7)]);
var inst_52793 = (state_52808[(2)]);
var state_52808__$1 = state_52808;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52808__$1,(8),inst_52793,inst_52782);
} else {
if((state_val_52809 === (9))){
var state_52808__$1 = state_52808;
var statearr_52825_55492 = state_52808__$1;
(statearr_52825_55492[(2)] = tc);

(statearr_52825_55492[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52809 === (5))){
var inst_52786 = cljs.core.async.close_BANG_(tc);
var inst_52787 = cljs.core.async.close_BANG_(fc);
var state_52808__$1 = (function (){var statearr_52827 = state_52808;
(statearr_52827[(8)] = inst_52786);

return statearr_52827;
})();
var statearr_52828_55493 = state_52808__$1;
(statearr_52828_55493[(2)] = inst_52787);

(statearr_52828_55493[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52809 === (14))){
var inst_52800 = (state_52808[(2)]);
var state_52808__$1 = state_52808;
var statearr_52829_55495 = state_52808__$1;
(statearr_52829_55495[(2)] = inst_52800);

(statearr_52829_55495[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52809 === (10))){
var state_52808__$1 = state_52808;
var statearr_52831_55498 = state_52808__$1;
(statearr_52831_55498[(2)] = fc);

(statearr_52831_55498[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52809 === (8))){
var inst_52795 = (state_52808[(2)]);
var state_52808__$1 = state_52808;
if(cljs.core.truth_(inst_52795)){
var statearr_52832_55499 = state_52808__$1;
(statearr_52832_55499[(1)] = (12));

} else {
var statearr_52833_55500 = state_52808__$1;
(statearr_52833_55500[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__51583__auto__ = null;
var cljs$core$async$state_machine__51583__auto____0 = (function (){
var statearr_52835 = [null,null,null,null,null,null,null,null,null];
(statearr_52835[(0)] = cljs$core$async$state_machine__51583__auto__);

(statearr_52835[(1)] = (1));

return statearr_52835;
});
var cljs$core$async$state_machine__51583__auto____1 = (function (state_52808){
while(true){
var ret_value__51584__auto__ = (function (){try{while(true){
var result__51585__auto__ = switch__51582__auto__(state_52808);
if(cljs.core.keyword_identical_QMARK_(result__51585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51585__auto__;
}
break;
}
}catch (e52836){if((e52836 instanceof Object)){
var ex__51586__auto__ = e52836;
var statearr_52837_55504 = state_52808;
(statearr_52837_55504[(5)] = ex__51586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52808);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52836;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55505 = state_52808;
state_52808 = G__55505;
continue;
} else {
return ret_value__51584__auto__;
}
break;
}
});
cljs$core$async$state_machine__51583__auto__ = function(state_52808){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51583__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51583__auto____1.call(this,state_52808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51583__auto____0;
cljs$core$async$state_machine__51583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51583__auto____1;
return cljs$core$async$state_machine__51583__auto__;
})()
})();
var state__52050__auto__ = (function (){var statearr_52840 = f__52049__auto__();
(statearr_52840[(6)] = c__52048__auto___55467);

return statearr_52840;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52050__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__52048__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52049__auto__ = (function (){var switch__51582__auto__ = (function (state_52867){
var state_val_52868 = (state_52867[(1)]);
if((state_val_52868 === (7))){
var inst_52861 = (state_52867[(2)]);
var state_52867__$1 = state_52867;
var statearr_52871_55514 = state_52867__$1;
(statearr_52871_55514[(2)] = inst_52861);

(statearr_52871_55514[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52868 === (1))){
var inst_52845 = init;
var state_52867__$1 = (function (){var statearr_52874 = state_52867;
(statearr_52874[(7)] = inst_52845);

return statearr_52874;
})();
var statearr_52875_55515 = state_52867__$1;
(statearr_52875_55515[(2)] = null);

(statearr_52875_55515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52868 === (4))){
var inst_52848 = (state_52867[(8)]);
var inst_52848__$1 = (state_52867[(2)]);
var inst_52849 = (inst_52848__$1 == null);
var state_52867__$1 = (function (){var statearr_52878 = state_52867;
(statearr_52878[(8)] = inst_52848__$1);

return statearr_52878;
})();
if(cljs.core.truth_(inst_52849)){
var statearr_52879_55524 = state_52867__$1;
(statearr_52879_55524[(1)] = (5));

} else {
var statearr_52880_55525 = state_52867__$1;
(statearr_52880_55525[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52868 === (6))){
var inst_52848 = (state_52867[(8)]);
var inst_52845 = (state_52867[(7)]);
var inst_52852 = (state_52867[(9)]);
var inst_52852__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_52845,inst_52848) : f.call(null,inst_52845,inst_52848));
var inst_52853 = cljs.core.reduced_QMARK_(inst_52852__$1);
var state_52867__$1 = (function (){var statearr_52884 = state_52867;
(statearr_52884[(9)] = inst_52852__$1);

return statearr_52884;
})();
if(inst_52853){
var statearr_52885_55527 = state_52867__$1;
(statearr_52885_55527[(1)] = (8));

} else {
var statearr_52886_55528 = state_52867__$1;
(statearr_52886_55528[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52868 === (3))){
var inst_52864 = (state_52867[(2)]);
var state_52867__$1 = state_52867;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52867__$1,inst_52864);
} else {
if((state_val_52868 === (2))){
var state_52867__$1 = state_52867;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52867__$1,(4),ch);
} else {
if((state_val_52868 === (9))){
var inst_52852 = (state_52867[(9)]);
var inst_52845 = inst_52852;
var state_52867__$1 = (function (){var statearr_52892 = state_52867;
(statearr_52892[(7)] = inst_52845);

return statearr_52892;
})();
var statearr_52893_55531 = state_52867__$1;
(statearr_52893_55531[(2)] = null);

(statearr_52893_55531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52868 === (5))){
var inst_52845 = (state_52867[(7)]);
var state_52867__$1 = state_52867;
var statearr_52896_55533 = state_52867__$1;
(statearr_52896_55533[(2)] = inst_52845);

(statearr_52896_55533[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52868 === (10))){
var inst_52859 = (state_52867[(2)]);
var state_52867__$1 = state_52867;
var statearr_52899_55534 = state_52867__$1;
(statearr_52899_55534[(2)] = inst_52859);

(statearr_52899_55534[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52868 === (8))){
var inst_52852 = (state_52867[(9)]);
var inst_52855 = cljs.core.deref(inst_52852);
var state_52867__$1 = state_52867;
var statearr_52902_55539 = state_52867__$1;
(statearr_52902_55539[(2)] = inst_52855);

(statearr_52902_55539[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__51583__auto__ = null;
var cljs$core$async$reduce_$_state_machine__51583__auto____0 = (function (){
var statearr_52905 = [null,null,null,null,null,null,null,null,null,null];
(statearr_52905[(0)] = cljs$core$async$reduce_$_state_machine__51583__auto__);

(statearr_52905[(1)] = (1));

return statearr_52905;
});
var cljs$core$async$reduce_$_state_machine__51583__auto____1 = (function (state_52867){
while(true){
var ret_value__51584__auto__ = (function (){try{while(true){
var result__51585__auto__ = switch__51582__auto__(state_52867);
if(cljs.core.keyword_identical_QMARK_(result__51585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51585__auto__;
}
break;
}
}catch (e52906){if((e52906 instanceof Object)){
var ex__51586__auto__ = e52906;
var statearr_52909_55541 = state_52867;
(statearr_52909_55541[(5)] = ex__51586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52867);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52906;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55544 = state_52867;
state_52867 = G__55544;
continue;
} else {
return ret_value__51584__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__51583__auto__ = function(state_52867){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__51583__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__51583__auto____1.call(this,state_52867);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__51583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__51583__auto____0;
cljs$core$async$reduce_$_state_machine__51583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__51583__auto____1;
return cljs$core$async$reduce_$_state_machine__51583__auto__;
})()
})();
var state__52050__auto__ = (function (){var statearr_52912 = f__52049__auto__();
(statearr_52912[(6)] = c__52048__auto__);

return statearr_52912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52050__auto__);
}));

return c__52048__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__52048__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52049__auto__ = (function (){var switch__51582__auto__ = (function (state_52923){
var state_val_52924 = (state_52923[(1)]);
if((state_val_52924 === (1))){
var inst_52918 = cljs.core.async.reduce(f__$1,init,ch);
var state_52923__$1 = state_52923;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52923__$1,(2),inst_52918);
} else {
if((state_val_52924 === (2))){
var inst_52920 = (state_52923[(2)]);
var inst_52921 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_52920) : f__$1.call(null,inst_52920));
var state_52923__$1 = state_52923;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52923__$1,inst_52921);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__51583__auto__ = null;
var cljs$core$async$transduce_$_state_machine__51583__auto____0 = (function (){
var statearr_52933 = [null,null,null,null,null,null,null];
(statearr_52933[(0)] = cljs$core$async$transduce_$_state_machine__51583__auto__);

(statearr_52933[(1)] = (1));

return statearr_52933;
});
var cljs$core$async$transduce_$_state_machine__51583__auto____1 = (function (state_52923){
while(true){
var ret_value__51584__auto__ = (function (){try{while(true){
var result__51585__auto__ = switch__51582__auto__(state_52923);
if(cljs.core.keyword_identical_QMARK_(result__51585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51585__auto__;
}
break;
}
}catch (e52936){if((e52936 instanceof Object)){
var ex__51586__auto__ = e52936;
var statearr_52939_55551 = state_52923;
(statearr_52939_55551[(5)] = ex__51586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52923);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52936;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55556 = state_52923;
state_52923 = G__55556;
continue;
} else {
return ret_value__51584__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__51583__auto__ = function(state_52923){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__51583__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__51583__auto____1.call(this,state_52923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__51583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__51583__auto____0;
cljs$core$async$transduce_$_state_machine__51583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__51583__auto____1;
return cljs$core$async$transduce_$_state_machine__51583__auto__;
})()
})();
var state__52050__auto__ = (function (){var statearr_52943 = f__52049__auto__();
(statearr_52943[(6)] = c__52048__auto__);

return statearr_52943;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52050__auto__);
}));

return c__52048__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__52950 = arguments.length;
switch (G__52950) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__52048__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52049__auto__ = (function (){var switch__51582__auto__ = (function (state_52980){
var state_val_52981 = (state_52980[(1)]);
if((state_val_52981 === (7))){
var inst_52961 = (state_52980[(2)]);
var state_52980__$1 = state_52980;
var statearr_52984_55562 = state_52980__$1;
(statearr_52984_55562[(2)] = inst_52961);

(statearr_52984_55562[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52981 === (1))){
var inst_52955 = cljs.core.seq(coll);
var inst_52956 = inst_52955;
var state_52980__$1 = (function (){var statearr_52986 = state_52980;
(statearr_52986[(7)] = inst_52956);

return statearr_52986;
})();
var statearr_52987_55563 = state_52980__$1;
(statearr_52987_55563[(2)] = null);

(statearr_52987_55563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52981 === (4))){
var inst_52956 = (state_52980[(7)]);
var inst_52959 = cljs.core.first(inst_52956);
var state_52980__$1 = state_52980;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52980__$1,(7),ch,inst_52959);
} else {
if((state_val_52981 === (13))){
var inst_52974 = (state_52980[(2)]);
var state_52980__$1 = state_52980;
var statearr_52989_55566 = state_52980__$1;
(statearr_52989_55566[(2)] = inst_52974);

(statearr_52989_55566[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52981 === (6))){
var inst_52964 = (state_52980[(2)]);
var state_52980__$1 = state_52980;
if(cljs.core.truth_(inst_52964)){
var statearr_52991_55567 = state_52980__$1;
(statearr_52991_55567[(1)] = (8));

} else {
var statearr_52994_55568 = state_52980__$1;
(statearr_52994_55568[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52981 === (3))){
var inst_52978 = (state_52980[(2)]);
var state_52980__$1 = state_52980;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52980__$1,inst_52978);
} else {
if((state_val_52981 === (12))){
var state_52980__$1 = state_52980;
var statearr_52997_55570 = state_52980__$1;
(statearr_52997_55570[(2)] = null);

(statearr_52997_55570[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52981 === (2))){
var inst_52956 = (state_52980[(7)]);
var state_52980__$1 = state_52980;
if(cljs.core.truth_(inst_52956)){
var statearr_52999_55572 = state_52980__$1;
(statearr_52999_55572[(1)] = (4));

} else {
var statearr_53000_55574 = state_52980__$1;
(statearr_53000_55574[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52981 === (11))){
var inst_52970 = cljs.core.async.close_BANG_(ch);
var state_52980__$1 = state_52980;
var statearr_53003_55575 = state_52980__$1;
(statearr_53003_55575[(2)] = inst_52970);

(statearr_53003_55575[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52981 === (9))){
var state_52980__$1 = state_52980;
if(cljs.core.truth_(close_QMARK_)){
var statearr_53005_55579 = state_52980__$1;
(statearr_53005_55579[(1)] = (11));

} else {
var statearr_53006_55581 = state_52980__$1;
(statearr_53006_55581[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52981 === (5))){
var inst_52956 = (state_52980[(7)]);
var state_52980__$1 = state_52980;
var statearr_53007_55582 = state_52980__$1;
(statearr_53007_55582[(2)] = inst_52956);

(statearr_53007_55582[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52981 === (10))){
var inst_52976 = (state_52980[(2)]);
var state_52980__$1 = state_52980;
var statearr_53014_55583 = state_52980__$1;
(statearr_53014_55583[(2)] = inst_52976);

(statearr_53014_55583[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52981 === (8))){
var inst_52956 = (state_52980[(7)]);
var inst_52966 = cljs.core.next(inst_52956);
var inst_52956__$1 = inst_52966;
var state_52980__$1 = (function (){var statearr_53016 = state_52980;
(statearr_53016[(7)] = inst_52956__$1);

return statearr_53016;
})();
var statearr_53017_55584 = state_52980__$1;
(statearr_53017_55584[(2)] = null);

(statearr_53017_55584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__51583__auto__ = null;
var cljs$core$async$state_machine__51583__auto____0 = (function (){
var statearr_53019 = [null,null,null,null,null,null,null,null];
(statearr_53019[(0)] = cljs$core$async$state_machine__51583__auto__);

(statearr_53019[(1)] = (1));

return statearr_53019;
});
var cljs$core$async$state_machine__51583__auto____1 = (function (state_52980){
while(true){
var ret_value__51584__auto__ = (function (){try{while(true){
var result__51585__auto__ = switch__51582__auto__(state_52980);
if(cljs.core.keyword_identical_QMARK_(result__51585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51585__auto__;
}
break;
}
}catch (e53020){if((e53020 instanceof Object)){
var ex__51586__auto__ = e53020;
var statearr_53023_55589 = state_52980;
(statearr_53023_55589[(5)] = ex__51586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52980);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53020;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55590 = state_52980;
state_52980 = G__55590;
continue;
} else {
return ret_value__51584__auto__;
}
break;
}
});
cljs$core$async$state_machine__51583__auto__ = function(state_52980){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51583__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51583__auto____1.call(this,state_52980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51583__auto____0;
cljs$core$async$state_machine__51583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51583__auto____1;
return cljs$core$async$state_machine__51583__auto__;
})()
})();
var state__52050__auto__ = (function (){var statearr_53036 = f__52049__auto__();
(statearr_53036[(6)] = c__52048__auto__);

return statearr_53036;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52050__auto__);
}));

return c__52048__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_55594 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_55594(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_55597 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_55597(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_55601 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_55601(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_55606 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_55606(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async53117 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53117 = (function (ch,cs,meta53118){
this.ch = ch;
this.cs = cs;
this.meta53118 = meta53118;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async53117.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53119,meta53118__$1){
var self__ = this;
var _53119__$1 = this;
return (new cljs.core.async.t_cljs$core$async53117(self__.ch,self__.cs,meta53118__$1));
}));

(cljs.core.async.t_cljs$core$async53117.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53119){
var self__ = this;
var _53119__$1 = this;
return self__.meta53118;
}));

(cljs.core.async.t_cljs$core$async53117.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53117.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async53117.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53117.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async53117.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async53117.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async53117.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta53118","meta53118",439567422,null)], null);
}));

(cljs.core.async.t_cljs$core$async53117.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async53117.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53117");

(cljs.core.async.t_cljs$core$async53117.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async53117");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async53117.
 */
cljs.core.async.__GT_t_cljs$core$async53117 = (function cljs$core$async$mult_$___GT_t_cljs$core$async53117(ch__$1,cs__$1,meta53118){
return (new cljs.core.async.t_cljs$core$async53117(ch__$1,cs__$1,meta53118));
});

}

return (new cljs.core.async.t_cljs$core$async53117(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__52048__auto___55612 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52049__auto__ = (function (){var switch__51582__auto__ = (function (state_53280){
var state_val_53281 = (state_53280[(1)]);
if((state_val_53281 === (7))){
var inst_53270 = (state_53280[(2)]);
var state_53280__$1 = state_53280;
var statearr_53283_55613 = state_53280__$1;
(statearr_53283_55613[(2)] = inst_53270);

(statearr_53283_55613[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53281 === (20))){
var inst_53167 = (state_53280[(7)]);
var inst_53180 = cljs.core.first(inst_53167);
var inst_53181 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_53180,(0),null);
var inst_53182 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_53180,(1),null);
var state_53280__$1 = (function (){var statearr_53287 = state_53280;
(statearr_53287[(8)] = inst_53181);

return statearr_53287;
})();
if(cljs.core.truth_(inst_53182)){
var statearr_53288_55614 = state_53280__$1;
(statearr_53288_55614[(1)] = (22));

} else {
var statearr_53292_55615 = state_53280__$1;
(statearr_53292_55615[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53281 === (27))){
var inst_53134 = (state_53280[(9)]);
var inst_53219 = (state_53280[(10)]);
var inst_53211 = (state_53280[(11)]);
var inst_53213 = (state_53280[(12)]);
var inst_53219__$1 = cljs.core._nth(inst_53211,inst_53213);
var inst_53220 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_53219__$1,inst_53134,done);
var state_53280__$1 = (function (){var statearr_53294 = state_53280;
(statearr_53294[(10)] = inst_53219__$1);

return statearr_53294;
})();
if(cljs.core.truth_(inst_53220)){
var statearr_53304_55617 = state_53280__$1;
(statearr_53304_55617[(1)] = (30));

} else {
var statearr_53306_55620 = state_53280__$1;
(statearr_53306_55620[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53281 === (1))){
var state_53280__$1 = state_53280;
var statearr_53309_55621 = state_53280__$1;
(statearr_53309_55621[(2)] = null);

(statearr_53309_55621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53281 === (24))){
var inst_53167 = (state_53280[(7)]);
var inst_53187 = (state_53280[(2)]);
var inst_53188 = cljs.core.next(inst_53167);
var inst_53144 = inst_53188;
var inst_53145 = null;
var inst_53146 = (0);
var inst_53147 = (0);
var state_53280__$1 = (function (){var statearr_53315 = state_53280;
(statearr_53315[(13)] = inst_53145);

(statearr_53315[(14)] = inst_53144);

(statearr_53315[(15)] = inst_53147);

(statearr_53315[(16)] = inst_53146);

(statearr_53315[(17)] = inst_53187);

return statearr_53315;
})();
var statearr_53316_55627 = state_53280__$1;
(statearr_53316_55627[(2)] = null);

(statearr_53316_55627[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53281 === (39))){
var state_53280__$1 = state_53280;
var statearr_53321_55628 = state_53280__$1;
(statearr_53321_55628[(2)] = null);

(statearr_53321_55628[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53281 === (4))){
var inst_53134 = (state_53280[(9)]);
var inst_53134__$1 = (state_53280[(2)]);
var inst_53135 = (inst_53134__$1 == null);
var state_53280__$1 = (function (){var statearr_53323 = state_53280;
(statearr_53323[(9)] = inst_53134__$1);

return statearr_53323;
})();
if(cljs.core.truth_(inst_53135)){
var statearr_53325_55629 = state_53280__$1;
(statearr_53325_55629[(1)] = (5));

} else {
var statearr_53326_55630 = state_53280__$1;
(statearr_53326_55630[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53281 === (15))){
var inst_53145 = (state_53280[(13)]);
var inst_53144 = (state_53280[(14)]);
var inst_53147 = (state_53280[(15)]);
var inst_53146 = (state_53280[(16)]);
var inst_53163 = (state_53280[(2)]);
var inst_53164 = (inst_53147 + (1));
var tmp53317 = inst_53145;
var tmp53318 = inst_53144;
var tmp53319 = inst_53146;
var inst_53144__$1 = tmp53318;
var inst_53145__$1 = tmp53317;
var inst_53146__$1 = tmp53319;
var inst_53147__$1 = inst_53164;
var state_53280__$1 = (function (){var statearr_53328 = state_53280;
(statearr_53328[(13)] = inst_53145__$1);

(statearr_53328[(14)] = inst_53144__$1);

(statearr_53328[(15)] = inst_53147__$1);

(statearr_53328[(16)] = inst_53146__$1);

(statearr_53328[(18)] = inst_53163);

return statearr_53328;
})();
var statearr_53330_55638 = state_53280__$1;
(statearr_53330_55638[(2)] = null);

(statearr_53330_55638[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53281 === (21))){
var inst_53192 = (state_53280[(2)]);
var state_53280__$1 = state_53280;
var statearr_53334_55639 = state_53280__$1;
(statearr_53334_55639[(2)] = inst_53192);

(statearr_53334_55639[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53281 === (31))){
var inst_53219 = (state_53280[(10)]);
var inst_53223 = done(null);
var inst_53225 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_53219);
var state_53280__$1 = (function (){var statearr_53336 = state_53280;
(statearr_53336[(19)] = inst_53223);

return statearr_53336;
})();
var statearr_53337_55640 = state_53280__$1;
(statearr_53337_55640[(2)] = inst_53225);

(statearr_53337_55640[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53281 === (32))){
var inst_53210 = (state_53280[(20)]);
var inst_53211 = (state_53280[(11)]);
var inst_53212 = (state_53280[(21)]);
var inst_53213 = (state_53280[(12)]);
var inst_53227 = (state_53280[(2)]);
var inst_53228 = (inst_53213 + (1));
var tmp53331 = inst_53210;
var tmp53332 = inst_53211;
var tmp53333 = inst_53212;
var inst_53210__$1 = tmp53331;
var inst_53211__$1 = tmp53332;
var inst_53212__$1 = tmp53333;
var inst_53213__$1 = inst_53228;
var state_53280__$1 = (function (){var statearr_53339 = state_53280;
(statearr_53339[(22)] = inst_53227);

(statearr_53339[(20)] = inst_53210__$1);

(statearr_53339[(11)] = inst_53211__$1);

(statearr_53339[(21)] = inst_53212__$1);

(statearr_53339[(12)] = inst_53213__$1);

return statearr_53339;
})();
var statearr_53340_55641 = state_53280__$1;
(statearr_53340_55641[(2)] = null);

(statearr_53340_55641[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53281 === (40))){
var inst_53242 = (state_53280[(23)]);
var inst_53246 = done(null);
var inst_53247 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_53242);
var state_53280__$1 = (function (){var statearr_53341 = state_53280;
(statearr_53341[(24)] = inst_53246);

return statearr_53341;
})();
var statearr_53344_55643 = state_53280__$1;
(statearr_53344_55643[(2)] = inst_53247);

(statearr_53344_55643[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53281 === (33))){
var inst_53231 = (state_53280[(25)]);
var inst_53234 = cljs.core.chunked_seq_QMARK_(inst_53231);
var state_53280__$1 = state_53280;
if(inst_53234){
var statearr_53348_55647 = state_53280__$1;
(statearr_53348_55647[(1)] = (36));

} else {
var statearr_53349_55648 = state_53280__$1;
(statearr_53349_55648[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53281 === (13))){
var inst_53156 = (state_53280[(26)]);
var inst_53160 = cljs.core.async.close_BANG_(inst_53156);
var state_53280__$1 = state_53280;
var statearr_53350_55649 = state_53280__$1;
(statearr_53350_55649[(2)] = inst_53160);

(statearr_53350_55649[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53281 === (22))){
var inst_53181 = (state_53280[(8)]);
var inst_53184 = cljs.core.async.close_BANG_(inst_53181);
var state_53280__$1 = state_53280;
var statearr_53353_55652 = state_53280__$1;
(statearr_53353_55652[(2)] = inst_53184);

(statearr_53353_55652[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53281 === (36))){
var inst_53231 = (state_53280[(25)]);
var inst_53236 = cljs.core.chunk_first(inst_53231);
var inst_53237 = cljs.core.chunk_rest(inst_53231);
var inst_53238 = cljs.core.count(inst_53236);
var inst_53210 = inst_53237;
var inst_53211 = inst_53236;
var inst_53212 = inst_53238;
var inst_53213 = (0);
var state_53280__$1 = (function (){var statearr_53357 = state_53280;
(statearr_53357[(20)] = inst_53210);

(statearr_53357[(11)] = inst_53211);

(statearr_53357[(21)] = inst_53212);

(statearr_53357[(12)] = inst_53213);

return statearr_53357;
})();
var statearr_53358_55657 = state_53280__$1;
(statearr_53358_55657[(2)] = null);

(statearr_53358_55657[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53281 === (41))){
var inst_53231 = (state_53280[(25)]);
var inst_53249 = (state_53280[(2)]);
var inst_53250 = cljs.core.next(inst_53231);
var inst_53210 = inst_53250;
var inst_53211 = null;
var inst_53212 = (0);
var inst_53213 = (0);
var state_53280__$1 = (function (){var statearr_53359 = state_53280;
(statearr_53359[(20)] = inst_53210);

(statearr_53359[(11)] = inst_53211);

(statearr_53359[(21)] = inst_53212);

(statearr_53359[(27)] = inst_53249);

(statearr_53359[(12)] = inst_53213);

return statearr_53359;
})();
var statearr_53362_55659 = state_53280__$1;
(statearr_53362_55659[(2)] = null);

(statearr_53362_55659[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53281 === (43))){
var state_53280__$1 = state_53280;
var statearr_53365_55661 = state_53280__$1;
(statearr_53365_55661[(2)] = null);

(statearr_53365_55661[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53281 === (29))){
var inst_53258 = (state_53280[(2)]);
var state_53280__$1 = state_53280;
var statearr_53367_55662 = state_53280__$1;
(statearr_53367_55662[(2)] = inst_53258);

(statearr_53367_55662[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53281 === (44))){
var inst_53267 = (state_53280[(2)]);
var state_53280__$1 = (function (){var statearr_53368 = state_53280;
(statearr_53368[(28)] = inst_53267);

return statearr_53368;
})();
var statearr_53369_55663 = state_53280__$1;
(statearr_53369_55663[(2)] = null);

(statearr_53369_55663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53281 === (6))){
var inst_53202 = (state_53280[(29)]);
var inst_53201 = cljs.core.deref(cs);
var inst_53202__$1 = cljs.core.keys(inst_53201);
var inst_53203 = cljs.core.count(inst_53202__$1);
var inst_53204 = cljs.core.reset_BANG_(dctr,inst_53203);
var inst_53209 = cljs.core.seq(inst_53202__$1);
var inst_53210 = inst_53209;
var inst_53211 = null;
var inst_53212 = (0);
var inst_53213 = (0);
var state_53280__$1 = (function (){var statearr_53370 = state_53280;
(statearr_53370[(29)] = inst_53202__$1);

(statearr_53370[(20)] = inst_53210);

(statearr_53370[(11)] = inst_53211);

(statearr_53370[(21)] = inst_53212);

(statearr_53370[(30)] = inst_53204);

(statearr_53370[(12)] = inst_53213);

return statearr_53370;
})();
var statearr_53371_55666 = state_53280__$1;
(statearr_53371_55666[(2)] = null);

(statearr_53371_55666[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53281 === (28))){
var inst_53210 = (state_53280[(20)]);
var inst_53231 = (state_53280[(25)]);
var inst_53231__$1 = cljs.core.seq(inst_53210);
var state_53280__$1 = (function (){var statearr_53374 = state_53280;
(statearr_53374[(25)] = inst_53231__$1);

return statearr_53374;
})();
if(inst_53231__$1){
var statearr_53376_55670 = state_53280__$1;
(statearr_53376_55670[(1)] = (33));

} else {
var statearr_53377_55671 = state_53280__$1;
(statearr_53377_55671[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53281 === (25))){
var inst_53212 = (state_53280[(21)]);
var inst_53213 = (state_53280[(12)]);
var inst_53216 = (inst_53213 < inst_53212);
var inst_53217 = inst_53216;
var state_53280__$1 = state_53280;
if(cljs.core.truth_(inst_53217)){
var statearr_53378_55675 = state_53280__$1;
(statearr_53378_55675[(1)] = (27));

} else {
var statearr_53379_55676 = state_53280__$1;
(statearr_53379_55676[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53281 === (34))){
var state_53280__$1 = state_53280;
var statearr_53380_55677 = state_53280__$1;
(statearr_53380_55677[(2)] = null);

(statearr_53380_55677[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53281 === (17))){
var state_53280__$1 = state_53280;
var statearr_53381_55679 = state_53280__$1;
(statearr_53381_55679[(2)] = null);

(statearr_53381_55679[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53281 === (3))){
var inst_53272 = (state_53280[(2)]);
var state_53280__$1 = state_53280;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53280__$1,inst_53272);
} else {
if((state_val_53281 === (12))){
var inst_53197 = (state_53280[(2)]);
var state_53280__$1 = state_53280;
var statearr_53382_55681 = state_53280__$1;
(statearr_53382_55681[(2)] = inst_53197);

(statearr_53382_55681[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53281 === (2))){
var state_53280__$1 = state_53280;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53280__$1,(4),ch);
} else {
if((state_val_53281 === (23))){
var state_53280__$1 = state_53280;
var statearr_53384_55683 = state_53280__$1;
(statearr_53384_55683[(2)] = null);

(statearr_53384_55683[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53281 === (35))){
var inst_53256 = (state_53280[(2)]);
var state_53280__$1 = state_53280;
var statearr_53385_55684 = state_53280__$1;
(statearr_53385_55684[(2)] = inst_53256);

(statearr_53385_55684[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53281 === (19))){
var inst_53167 = (state_53280[(7)]);
var inst_53172 = cljs.core.chunk_first(inst_53167);
var inst_53173 = cljs.core.chunk_rest(inst_53167);
var inst_53174 = cljs.core.count(inst_53172);
var inst_53144 = inst_53173;
var inst_53145 = inst_53172;
var inst_53146 = inst_53174;
var inst_53147 = (0);
var state_53280__$1 = (function (){var statearr_53386 = state_53280;
(statearr_53386[(13)] = inst_53145);

(statearr_53386[(14)] = inst_53144);

(statearr_53386[(15)] = inst_53147);

(statearr_53386[(16)] = inst_53146);

return statearr_53386;
})();
var statearr_53387_55685 = state_53280__$1;
(statearr_53387_55685[(2)] = null);

(statearr_53387_55685[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53281 === (11))){
var inst_53167 = (state_53280[(7)]);
var inst_53144 = (state_53280[(14)]);
var inst_53167__$1 = cljs.core.seq(inst_53144);
var state_53280__$1 = (function (){var statearr_53388 = state_53280;
(statearr_53388[(7)] = inst_53167__$1);

return statearr_53388;
})();
if(inst_53167__$1){
var statearr_53389_55688 = state_53280__$1;
(statearr_53389_55688[(1)] = (16));

} else {
var statearr_53390_55689 = state_53280__$1;
(statearr_53390_55689[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53281 === (9))){
var inst_53199 = (state_53280[(2)]);
var state_53280__$1 = state_53280;
var statearr_53392_55704 = state_53280__$1;
(statearr_53392_55704[(2)] = inst_53199);

(statearr_53392_55704[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53281 === (5))){
var inst_53141 = cljs.core.deref(cs);
var inst_53142 = cljs.core.seq(inst_53141);
var inst_53144 = inst_53142;
var inst_53145 = null;
var inst_53146 = (0);
var inst_53147 = (0);
var state_53280__$1 = (function (){var statearr_53393 = state_53280;
(statearr_53393[(13)] = inst_53145);

(statearr_53393[(14)] = inst_53144);

(statearr_53393[(15)] = inst_53147);

(statearr_53393[(16)] = inst_53146);

return statearr_53393;
})();
var statearr_53394_55707 = state_53280__$1;
(statearr_53394_55707[(2)] = null);

(statearr_53394_55707[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53281 === (14))){
var state_53280__$1 = state_53280;
var statearr_53396_55708 = state_53280__$1;
(statearr_53396_55708[(2)] = null);

(statearr_53396_55708[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53281 === (45))){
var inst_53264 = (state_53280[(2)]);
var state_53280__$1 = state_53280;
var statearr_53397_55710 = state_53280__$1;
(statearr_53397_55710[(2)] = inst_53264);

(statearr_53397_55710[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53281 === (26))){
var inst_53202 = (state_53280[(29)]);
var inst_53260 = (state_53280[(2)]);
var inst_53261 = cljs.core.seq(inst_53202);
var state_53280__$1 = (function (){var statearr_53399 = state_53280;
(statearr_53399[(31)] = inst_53260);

return statearr_53399;
})();
if(inst_53261){
var statearr_53400_55713 = state_53280__$1;
(statearr_53400_55713[(1)] = (42));

} else {
var statearr_53401_55715 = state_53280__$1;
(statearr_53401_55715[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53281 === (16))){
var inst_53167 = (state_53280[(7)]);
var inst_53170 = cljs.core.chunked_seq_QMARK_(inst_53167);
var state_53280__$1 = state_53280;
if(inst_53170){
var statearr_53402_55717 = state_53280__$1;
(statearr_53402_55717[(1)] = (19));

} else {
var statearr_53404_55718 = state_53280__$1;
(statearr_53404_55718[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53281 === (38))){
var inst_53253 = (state_53280[(2)]);
var state_53280__$1 = state_53280;
var statearr_53405_55720 = state_53280__$1;
(statearr_53405_55720[(2)] = inst_53253);

(statearr_53405_55720[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53281 === (30))){
var state_53280__$1 = state_53280;
var statearr_53406_55723 = state_53280__$1;
(statearr_53406_55723[(2)] = null);

(statearr_53406_55723[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53281 === (10))){
var inst_53145 = (state_53280[(13)]);
var inst_53147 = (state_53280[(15)]);
var inst_53155 = cljs.core._nth(inst_53145,inst_53147);
var inst_53156 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_53155,(0),null);
var inst_53158 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_53155,(1),null);
var state_53280__$1 = (function (){var statearr_53411 = state_53280;
(statearr_53411[(26)] = inst_53156);

return statearr_53411;
})();
if(cljs.core.truth_(inst_53158)){
var statearr_53412_55726 = state_53280__$1;
(statearr_53412_55726[(1)] = (13));

} else {
var statearr_53413_55727 = state_53280__$1;
(statearr_53413_55727[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53281 === (18))){
var inst_53195 = (state_53280[(2)]);
var state_53280__$1 = state_53280;
var statearr_53414_55729 = state_53280__$1;
(statearr_53414_55729[(2)] = inst_53195);

(statearr_53414_55729[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53281 === (42))){
var state_53280__$1 = state_53280;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53280__$1,(45),dchan);
} else {
if((state_val_53281 === (37))){
var inst_53134 = (state_53280[(9)]);
var inst_53242 = (state_53280[(23)]);
var inst_53231 = (state_53280[(25)]);
var inst_53242__$1 = cljs.core.first(inst_53231);
var inst_53243 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_53242__$1,inst_53134,done);
var state_53280__$1 = (function (){var statearr_53422 = state_53280;
(statearr_53422[(23)] = inst_53242__$1);

return statearr_53422;
})();
if(cljs.core.truth_(inst_53243)){
var statearr_53423_55731 = state_53280__$1;
(statearr_53423_55731[(1)] = (39));

} else {
var statearr_53424_55732 = state_53280__$1;
(statearr_53424_55732[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53281 === (8))){
var inst_53147 = (state_53280[(15)]);
var inst_53146 = (state_53280[(16)]);
var inst_53149 = (inst_53147 < inst_53146);
var inst_53150 = inst_53149;
var state_53280__$1 = state_53280;
if(cljs.core.truth_(inst_53150)){
var statearr_53425_55735 = state_53280__$1;
(statearr_53425_55735[(1)] = (10));

} else {
var statearr_53426_55738 = state_53280__$1;
(statearr_53426_55738[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__51583__auto__ = null;
var cljs$core$async$mult_$_state_machine__51583__auto____0 = (function (){
var statearr_53428 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53428[(0)] = cljs$core$async$mult_$_state_machine__51583__auto__);

(statearr_53428[(1)] = (1));

return statearr_53428;
});
var cljs$core$async$mult_$_state_machine__51583__auto____1 = (function (state_53280){
while(true){
var ret_value__51584__auto__ = (function (){try{while(true){
var result__51585__auto__ = switch__51582__auto__(state_53280);
if(cljs.core.keyword_identical_QMARK_(result__51585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51585__auto__;
}
break;
}
}catch (e53431){if((e53431 instanceof Object)){
var ex__51586__auto__ = e53431;
var statearr_53432_55741 = state_53280;
(statearr_53432_55741[(5)] = ex__51586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53280);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53431;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55742 = state_53280;
state_53280 = G__55742;
continue;
} else {
return ret_value__51584__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__51583__auto__ = function(state_53280){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__51583__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__51583__auto____1.call(this,state_53280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__51583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__51583__auto____0;
cljs$core$async$mult_$_state_machine__51583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__51583__auto____1;
return cljs$core$async$mult_$_state_machine__51583__auto__;
})()
})();
var state__52050__auto__ = (function (){var statearr_53436 = f__52049__auto__();
(statearr_53436[(6)] = c__52048__auto___55612);

return statearr_53436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52050__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__53441 = arguments.length;
switch (G__53441) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_55754 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_55754(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_55758 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_55758(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_55762 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_55762(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_55766 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_55766(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_55772 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_55772(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___55777 = arguments.length;
var i__4737__auto___55778 = (0);
while(true){
if((i__4737__auto___55778 < len__4736__auto___55777)){
args__4742__auto__.push((arguments[i__4737__auto___55778]));

var G__55779 = (i__4737__auto___55778 + (1));
i__4737__auto___55778 = G__55779;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__53506){
var map__53508 = p__53506;
var map__53508__$1 = (((((!((map__53508 == null))))?(((((map__53508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53508.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53508):map__53508);
var opts = map__53508__$1;
var statearr_53512_55780 = state;
(statearr_53512_55780[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_53515_55781 = state;
(statearr_53515_55781[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_53518_55786 = state;
(statearr_53518_55786[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq53501){
var G__53502 = cljs.core.first(seq53501);
var seq53501__$1 = cljs.core.next(seq53501);
var G__53503 = cljs.core.first(seq53501__$1);
var seq53501__$2 = cljs.core.next(seq53501__$1);
var G__53504 = cljs.core.first(seq53501__$2);
var seq53501__$3 = cljs.core.next(seq53501__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53502,G__53503,G__53504,seq53501__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async53538 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53538 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta53539){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta53539 = meta53539;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async53538.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53540,meta53539__$1){
var self__ = this;
var _53540__$1 = this;
return (new cljs.core.async.t_cljs$core$async53538(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta53539__$1));
}));

(cljs.core.async.t_cljs$core$async53538.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53540){
var self__ = this;
var _53540__$1 = this;
return self__.meta53539;
}));

(cljs.core.async.t_cljs$core$async53538.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53538.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async53538.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53538.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async53538.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async53538.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async53538.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async53538.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async53538.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta53539","meta53539",-26620172,null)], null);
}));

(cljs.core.async.t_cljs$core$async53538.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async53538.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53538");

(cljs.core.async.t_cljs$core$async53538.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async53538");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async53538.
 */
cljs.core.async.__GT_t_cljs$core$async53538 = (function cljs$core$async$mix_$___GT_t_cljs$core$async53538(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta53539){
return (new cljs.core.async.t_cljs$core$async53538(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta53539));
});

}

return (new cljs.core.async.t_cljs$core$async53538(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__52048__auto___55827 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52049__auto__ = (function (){var switch__51582__auto__ = (function (state_53685){
var state_val_53686 = (state_53685[(1)]);
if((state_val_53686 === (7))){
var inst_53588 = (state_53685[(2)]);
var state_53685__$1 = state_53685;
var statearr_53688_55830 = state_53685__$1;
(statearr_53688_55830[(2)] = inst_53588);

(statearr_53688_55830[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53686 === (20))){
var inst_53601 = (state_53685[(7)]);
var state_53685__$1 = state_53685;
var statearr_53689_55833 = state_53685__$1;
(statearr_53689_55833[(2)] = inst_53601);

(statearr_53689_55833[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53686 === (27))){
var state_53685__$1 = state_53685;
var statearr_53691_55835 = state_53685__$1;
(statearr_53691_55835[(2)] = null);

(statearr_53691_55835[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53686 === (1))){
var inst_53573 = (state_53685[(8)]);
var inst_53573__$1 = calc_state();
var inst_53576 = (inst_53573__$1 == null);
var inst_53577 = cljs.core.not(inst_53576);
var state_53685__$1 = (function (){var statearr_53692 = state_53685;
(statearr_53692[(8)] = inst_53573__$1);

return statearr_53692;
})();
if(inst_53577){
var statearr_53693_55839 = state_53685__$1;
(statearr_53693_55839[(1)] = (2));

} else {
var statearr_53694_55840 = state_53685__$1;
(statearr_53694_55840[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53686 === (24))){
var inst_53657 = (state_53685[(9)]);
var inst_53630 = (state_53685[(10)]);
var inst_53639 = (state_53685[(11)]);
var inst_53657__$1 = (inst_53630.cljs$core$IFn$_invoke$arity$1 ? inst_53630.cljs$core$IFn$_invoke$arity$1(inst_53639) : inst_53630.call(null,inst_53639));
var state_53685__$1 = (function (){var statearr_53696 = state_53685;
(statearr_53696[(9)] = inst_53657__$1);

return statearr_53696;
})();
if(cljs.core.truth_(inst_53657__$1)){
var statearr_53697_55843 = state_53685__$1;
(statearr_53697_55843[(1)] = (29));

} else {
var statearr_53698_55844 = state_53685__$1;
(statearr_53698_55844[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53686 === (4))){
var inst_53591 = (state_53685[(2)]);
var state_53685__$1 = state_53685;
if(cljs.core.truth_(inst_53591)){
var statearr_53699_55845 = state_53685__$1;
(statearr_53699_55845[(1)] = (8));

} else {
var statearr_53701_55846 = state_53685__$1;
(statearr_53701_55846[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53686 === (15))){
var inst_53624 = (state_53685[(2)]);
var state_53685__$1 = state_53685;
if(cljs.core.truth_(inst_53624)){
var statearr_53702_55847 = state_53685__$1;
(statearr_53702_55847[(1)] = (19));

} else {
var statearr_53703_55848 = state_53685__$1;
(statearr_53703_55848[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53686 === (21))){
var inst_53629 = (state_53685[(12)]);
var inst_53629__$1 = (state_53685[(2)]);
var inst_53630 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_53629__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_53631 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_53629__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_53632 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_53629__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_53685__$1 = (function (){var statearr_53706 = state_53685;
(statearr_53706[(12)] = inst_53629__$1);

(statearr_53706[(13)] = inst_53631);

(statearr_53706[(10)] = inst_53630);

return statearr_53706;
})();
return cljs.core.async.ioc_alts_BANG_(state_53685__$1,(22),inst_53632);
} else {
if((state_val_53686 === (31))){
var inst_53666 = (state_53685[(2)]);
var state_53685__$1 = state_53685;
if(cljs.core.truth_(inst_53666)){
var statearr_53710_55854 = state_53685__$1;
(statearr_53710_55854[(1)] = (32));

} else {
var statearr_53712_55855 = state_53685__$1;
(statearr_53712_55855[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53686 === (32))){
var inst_53638 = (state_53685[(14)]);
var state_53685__$1 = state_53685;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53685__$1,(35),out,inst_53638);
} else {
if((state_val_53686 === (33))){
var inst_53629 = (state_53685[(12)]);
var inst_53601 = inst_53629;
var state_53685__$1 = (function (){var statearr_53713 = state_53685;
(statearr_53713[(7)] = inst_53601);

return statearr_53713;
})();
var statearr_53714_55860 = state_53685__$1;
(statearr_53714_55860[(2)] = null);

(statearr_53714_55860[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53686 === (13))){
var inst_53601 = (state_53685[(7)]);
var inst_53612 = inst_53601.cljs$lang$protocol_mask$partition0$;
var inst_53613 = (inst_53612 & (64));
var inst_53614 = inst_53601.cljs$core$ISeq$;
var inst_53615 = (cljs.core.PROTOCOL_SENTINEL === inst_53614);
var inst_53616 = ((inst_53613) || (inst_53615));
var state_53685__$1 = state_53685;
if(cljs.core.truth_(inst_53616)){
var statearr_53717_55862 = state_53685__$1;
(statearr_53717_55862[(1)] = (16));

} else {
var statearr_53718_55863 = state_53685__$1;
(statearr_53718_55863[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53686 === (22))){
var inst_53638 = (state_53685[(14)]);
var inst_53639 = (state_53685[(11)]);
var inst_53637 = (state_53685[(2)]);
var inst_53638__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_53637,(0),null);
var inst_53639__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_53637,(1),null);
var inst_53642 = (inst_53638__$1 == null);
var inst_53644 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_53639__$1,change);
var inst_53646 = ((inst_53642) || (inst_53644));
var state_53685__$1 = (function (){var statearr_53724 = state_53685;
(statearr_53724[(14)] = inst_53638__$1);

(statearr_53724[(11)] = inst_53639__$1);

return statearr_53724;
})();
if(cljs.core.truth_(inst_53646)){
var statearr_53726_55870 = state_53685__$1;
(statearr_53726_55870[(1)] = (23));

} else {
var statearr_53727_55871 = state_53685__$1;
(statearr_53727_55871[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53686 === (36))){
var inst_53629 = (state_53685[(12)]);
var inst_53601 = inst_53629;
var state_53685__$1 = (function (){var statearr_53728 = state_53685;
(statearr_53728[(7)] = inst_53601);

return statearr_53728;
})();
var statearr_53730_55872 = state_53685__$1;
(statearr_53730_55872[(2)] = null);

(statearr_53730_55872[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53686 === (29))){
var inst_53657 = (state_53685[(9)]);
var state_53685__$1 = state_53685;
var statearr_53733_55873 = state_53685__$1;
(statearr_53733_55873[(2)] = inst_53657);

(statearr_53733_55873[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53686 === (6))){
var state_53685__$1 = state_53685;
var statearr_53737_55875 = state_53685__$1;
(statearr_53737_55875[(2)] = false);

(statearr_53737_55875[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53686 === (28))){
var inst_53653 = (state_53685[(2)]);
var inst_53654 = calc_state();
var inst_53601 = inst_53654;
var state_53685__$1 = (function (){var statearr_53738 = state_53685;
(statearr_53738[(7)] = inst_53601);

(statearr_53738[(15)] = inst_53653);

return statearr_53738;
})();
var statearr_53742_55877 = state_53685__$1;
(statearr_53742_55877[(2)] = null);

(statearr_53742_55877[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53686 === (25))){
var inst_53680 = (state_53685[(2)]);
var state_53685__$1 = state_53685;
var statearr_53743_55881 = state_53685__$1;
(statearr_53743_55881[(2)] = inst_53680);

(statearr_53743_55881[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53686 === (34))){
var inst_53678 = (state_53685[(2)]);
var state_53685__$1 = state_53685;
var statearr_53747_55882 = state_53685__$1;
(statearr_53747_55882[(2)] = inst_53678);

(statearr_53747_55882[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53686 === (17))){
var state_53685__$1 = state_53685;
var statearr_53748_55887 = state_53685__$1;
(statearr_53748_55887[(2)] = false);

(statearr_53748_55887[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53686 === (3))){
var state_53685__$1 = state_53685;
var statearr_53749_55888 = state_53685__$1;
(statearr_53749_55888[(2)] = false);

(statearr_53749_55888[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53686 === (12))){
var inst_53682 = (state_53685[(2)]);
var state_53685__$1 = state_53685;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53685__$1,inst_53682);
} else {
if((state_val_53686 === (2))){
var inst_53573 = (state_53685[(8)]);
var inst_53580 = inst_53573.cljs$lang$protocol_mask$partition0$;
var inst_53581 = (inst_53580 & (64));
var inst_53582 = inst_53573.cljs$core$ISeq$;
var inst_53583 = (cljs.core.PROTOCOL_SENTINEL === inst_53582);
var inst_53584 = ((inst_53581) || (inst_53583));
var state_53685__$1 = state_53685;
if(cljs.core.truth_(inst_53584)){
var statearr_53755_55896 = state_53685__$1;
(statearr_53755_55896[(1)] = (5));

} else {
var statearr_53758_55898 = state_53685__$1;
(statearr_53758_55898[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53686 === (23))){
var inst_53638 = (state_53685[(14)]);
var inst_53648 = (inst_53638 == null);
var state_53685__$1 = state_53685;
if(cljs.core.truth_(inst_53648)){
var statearr_53760_55904 = state_53685__$1;
(statearr_53760_55904[(1)] = (26));

} else {
var statearr_53761_55905 = state_53685__$1;
(statearr_53761_55905[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53686 === (35))){
var inst_53669 = (state_53685[(2)]);
var state_53685__$1 = state_53685;
if(cljs.core.truth_(inst_53669)){
var statearr_53765_55906 = state_53685__$1;
(statearr_53765_55906[(1)] = (36));

} else {
var statearr_53766_55907 = state_53685__$1;
(statearr_53766_55907[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53686 === (19))){
var inst_53601 = (state_53685[(7)]);
var inst_53626 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_53601);
var state_53685__$1 = state_53685;
var statearr_53769_55908 = state_53685__$1;
(statearr_53769_55908[(2)] = inst_53626);

(statearr_53769_55908[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53686 === (11))){
var inst_53601 = (state_53685[(7)]);
var inst_53605 = (inst_53601 == null);
var inst_53606 = cljs.core.not(inst_53605);
var state_53685__$1 = state_53685;
if(inst_53606){
var statearr_53771_55910 = state_53685__$1;
(statearr_53771_55910[(1)] = (13));

} else {
var statearr_53773_55911 = state_53685__$1;
(statearr_53773_55911[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53686 === (9))){
var inst_53573 = (state_53685[(8)]);
var state_53685__$1 = state_53685;
var statearr_53776_55912 = state_53685__$1;
(statearr_53776_55912[(2)] = inst_53573);

(statearr_53776_55912[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53686 === (5))){
var state_53685__$1 = state_53685;
var statearr_53777_55914 = state_53685__$1;
(statearr_53777_55914[(2)] = true);

(statearr_53777_55914[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53686 === (14))){
var state_53685__$1 = state_53685;
var statearr_53781_55915 = state_53685__$1;
(statearr_53781_55915[(2)] = false);

(statearr_53781_55915[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53686 === (26))){
var inst_53639 = (state_53685[(11)]);
var inst_53650 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_53639);
var state_53685__$1 = state_53685;
var statearr_53783_55922 = state_53685__$1;
(statearr_53783_55922[(2)] = inst_53650);

(statearr_53783_55922[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53686 === (16))){
var state_53685__$1 = state_53685;
var statearr_53786_55925 = state_53685__$1;
(statearr_53786_55925[(2)] = true);

(statearr_53786_55925[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53686 === (38))){
var inst_53674 = (state_53685[(2)]);
var state_53685__$1 = state_53685;
var statearr_53788_55926 = state_53685__$1;
(statearr_53788_55926[(2)] = inst_53674);

(statearr_53788_55926[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53686 === (30))){
var inst_53631 = (state_53685[(13)]);
var inst_53630 = (state_53685[(10)]);
var inst_53639 = (state_53685[(11)]);
var inst_53660 = cljs.core.empty_QMARK_(inst_53630);
var inst_53662 = (inst_53631.cljs$core$IFn$_invoke$arity$1 ? inst_53631.cljs$core$IFn$_invoke$arity$1(inst_53639) : inst_53631.call(null,inst_53639));
var inst_53663 = cljs.core.not(inst_53662);
var inst_53664 = ((inst_53660) && (inst_53663));
var state_53685__$1 = state_53685;
var statearr_53791_55927 = state_53685__$1;
(statearr_53791_55927[(2)] = inst_53664);

(statearr_53791_55927[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53686 === (10))){
var inst_53573 = (state_53685[(8)]);
var inst_53597 = (state_53685[(2)]);
var inst_53598 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_53597,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_53599 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_53597,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_53600 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_53597,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_53601 = inst_53573;
var state_53685__$1 = (function (){var statearr_53793 = state_53685;
(statearr_53793[(16)] = inst_53600);

(statearr_53793[(7)] = inst_53601);

(statearr_53793[(17)] = inst_53599);

(statearr_53793[(18)] = inst_53598);

return statearr_53793;
})();
var statearr_53796_55933 = state_53685__$1;
(statearr_53796_55933[(2)] = null);

(statearr_53796_55933[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53686 === (18))){
var inst_53621 = (state_53685[(2)]);
var state_53685__$1 = state_53685;
var statearr_53799_55940 = state_53685__$1;
(statearr_53799_55940[(2)] = inst_53621);

(statearr_53799_55940[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53686 === (37))){
var state_53685__$1 = state_53685;
var statearr_53801_55941 = state_53685__$1;
(statearr_53801_55941[(2)] = null);

(statearr_53801_55941[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53686 === (8))){
var inst_53573 = (state_53685[(8)]);
var inst_53594 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_53573);
var state_53685__$1 = state_53685;
var statearr_53806_55942 = state_53685__$1;
(statearr_53806_55942[(2)] = inst_53594);

(statearr_53806_55942[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__51583__auto__ = null;
var cljs$core$async$mix_$_state_machine__51583__auto____0 = (function (){
var statearr_53809 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53809[(0)] = cljs$core$async$mix_$_state_machine__51583__auto__);

(statearr_53809[(1)] = (1));

return statearr_53809;
});
var cljs$core$async$mix_$_state_machine__51583__auto____1 = (function (state_53685){
while(true){
var ret_value__51584__auto__ = (function (){try{while(true){
var result__51585__auto__ = switch__51582__auto__(state_53685);
if(cljs.core.keyword_identical_QMARK_(result__51585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51585__auto__;
}
break;
}
}catch (e53811){if((e53811 instanceof Object)){
var ex__51586__auto__ = e53811;
var statearr_53812_55945 = state_53685;
(statearr_53812_55945[(5)] = ex__51586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53685);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53811;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55947 = state_53685;
state_53685 = G__55947;
continue;
} else {
return ret_value__51584__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__51583__auto__ = function(state_53685){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__51583__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__51583__auto____1.call(this,state_53685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__51583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__51583__auto____0;
cljs$core$async$mix_$_state_machine__51583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__51583__auto____1;
return cljs$core$async$mix_$_state_machine__51583__auto__;
})()
})();
var state__52050__auto__ = (function (){var statearr_53816 = f__52049__auto__();
(statearr_53816[(6)] = c__52048__auto___55827);

return statearr_53816;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52050__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_55958 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_55958(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_55961 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_55961(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_55967 = (function() {
var G__55968 = null;
var G__55968__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__55968__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__55968 = function(p,v){
switch(arguments.length){
case 1:
return G__55968__1.call(this,p);
case 2:
return G__55968__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__55968.cljs$core$IFn$_invoke$arity$1 = G__55968__1;
G__55968.cljs$core$IFn$_invoke$arity$2 = G__55968__2;
return G__55968;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__53861 = arguments.length;
switch (G__53861) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_55967(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_55967(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__53882 = arguments.length;
switch (G__53882) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__53876_SHARP_){
if(cljs.core.truth_((p1__53876_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__53876_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__53876_SHARP_.call(null,topic)))){
return p1__53876_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__53876_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async53897 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53897 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta53898){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta53898 = meta53898;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async53897.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53899,meta53898__$1){
var self__ = this;
var _53899__$1 = this;
return (new cljs.core.async.t_cljs$core$async53897(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta53898__$1));
}));

(cljs.core.async.t_cljs$core$async53897.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53899){
var self__ = this;
var _53899__$1 = this;
return self__.meta53898;
}));

(cljs.core.async.t_cljs$core$async53897.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53897.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async53897.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53897.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async53897.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async53897.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async53897.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async53897.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta53898","meta53898",346491378,null)], null);
}));

(cljs.core.async.t_cljs$core$async53897.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async53897.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53897");

(cljs.core.async.t_cljs$core$async53897.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async53897");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async53897.
 */
cljs.core.async.__GT_t_cljs$core$async53897 = (function cljs$core$async$__GT_t_cljs$core$async53897(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta53898){
return (new cljs.core.async.t_cljs$core$async53897(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta53898));
});

}

return (new cljs.core.async.t_cljs$core$async53897(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__52048__auto___55985 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52049__auto__ = (function (){var switch__51582__auto__ = (function (state_54015){
var state_val_54016 = (state_54015[(1)]);
if((state_val_54016 === (7))){
var inst_54009 = (state_54015[(2)]);
var state_54015__$1 = state_54015;
var statearr_54022_55986 = state_54015__$1;
(statearr_54022_55986[(2)] = inst_54009);

(statearr_54022_55986[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54016 === (20))){
var state_54015__$1 = state_54015;
var statearr_54023_55987 = state_54015__$1;
(statearr_54023_55987[(2)] = null);

(statearr_54023_55987[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54016 === (1))){
var state_54015__$1 = state_54015;
var statearr_54031_55988 = state_54015__$1;
(statearr_54031_55988[(2)] = null);

(statearr_54031_55988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54016 === (24))){
var inst_53989 = (state_54015[(7)]);
var inst_54001 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_53989);
var state_54015__$1 = state_54015;
var statearr_54037_55990 = state_54015__$1;
(statearr_54037_55990[(2)] = inst_54001);

(statearr_54037_55990[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54016 === (4))){
var inst_53933 = (state_54015[(8)]);
var inst_53933__$1 = (state_54015[(2)]);
var inst_53934 = (inst_53933__$1 == null);
var state_54015__$1 = (function (){var statearr_54040 = state_54015;
(statearr_54040[(8)] = inst_53933__$1);

return statearr_54040;
})();
if(cljs.core.truth_(inst_53934)){
var statearr_54042_55992 = state_54015__$1;
(statearr_54042_55992[(1)] = (5));

} else {
var statearr_54044_55993 = state_54015__$1;
(statearr_54044_55993[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54016 === (15))){
var inst_53983 = (state_54015[(2)]);
var state_54015__$1 = state_54015;
var statearr_54046_55995 = state_54015__$1;
(statearr_54046_55995[(2)] = inst_53983);

(statearr_54046_55995[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54016 === (21))){
var inst_54006 = (state_54015[(2)]);
var state_54015__$1 = (function (){var statearr_54048 = state_54015;
(statearr_54048[(9)] = inst_54006);

return statearr_54048;
})();
var statearr_54049_55996 = state_54015__$1;
(statearr_54049_55996[(2)] = null);

(statearr_54049_55996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54016 === (13))){
var inst_53959 = (state_54015[(10)]);
var inst_53965 = cljs.core.chunked_seq_QMARK_(inst_53959);
var state_54015__$1 = state_54015;
if(inst_53965){
var statearr_54050_55998 = state_54015__$1;
(statearr_54050_55998[(1)] = (16));

} else {
var statearr_54051_55999 = state_54015__$1;
(statearr_54051_55999[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54016 === (22))){
var inst_53998 = (state_54015[(2)]);
var state_54015__$1 = state_54015;
if(cljs.core.truth_(inst_53998)){
var statearr_54052_56000 = state_54015__$1;
(statearr_54052_56000[(1)] = (23));

} else {
var statearr_54053_56001 = state_54015__$1;
(statearr_54053_56001[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54016 === (6))){
var inst_53989 = (state_54015[(7)]);
var inst_53933 = (state_54015[(8)]);
var inst_53992 = (state_54015[(11)]);
var inst_53989__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_53933) : topic_fn.call(null,inst_53933));
var inst_53990 = cljs.core.deref(mults);
var inst_53992__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_53990,inst_53989__$1);
var state_54015__$1 = (function (){var statearr_54055 = state_54015;
(statearr_54055[(7)] = inst_53989__$1);

(statearr_54055[(11)] = inst_53992__$1);

return statearr_54055;
})();
if(cljs.core.truth_(inst_53992__$1)){
var statearr_54056_56004 = state_54015__$1;
(statearr_54056_56004[(1)] = (19));

} else {
var statearr_54058_56006 = state_54015__$1;
(statearr_54058_56006[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54016 === (25))){
var inst_54003 = (state_54015[(2)]);
var state_54015__$1 = state_54015;
var statearr_54061_56007 = state_54015__$1;
(statearr_54061_56007[(2)] = inst_54003);

(statearr_54061_56007[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54016 === (17))){
var inst_53959 = (state_54015[(10)]);
var inst_53973 = cljs.core.first(inst_53959);
var inst_53974 = cljs.core.async.muxch_STAR_(inst_53973);
var inst_53975 = cljs.core.async.close_BANG_(inst_53974);
var inst_53977 = cljs.core.next(inst_53959);
var inst_53944 = inst_53977;
var inst_53945 = null;
var inst_53946 = (0);
var inst_53947 = (0);
var state_54015__$1 = (function (){var statearr_54065 = state_54015;
(statearr_54065[(12)] = inst_53944);

(statearr_54065[(13)] = inst_53945);

(statearr_54065[(14)] = inst_53975);

(statearr_54065[(15)] = inst_53947);

(statearr_54065[(16)] = inst_53946);

return statearr_54065;
})();
var statearr_54068_56011 = state_54015__$1;
(statearr_54068_56011[(2)] = null);

(statearr_54068_56011[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54016 === (3))){
var inst_54011 = (state_54015[(2)]);
var state_54015__$1 = state_54015;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54015__$1,inst_54011);
} else {
if((state_val_54016 === (12))){
var inst_53985 = (state_54015[(2)]);
var state_54015__$1 = state_54015;
var statearr_54070_56012 = state_54015__$1;
(statearr_54070_56012[(2)] = inst_53985);

(statearr_54070_56012[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54016 === (2))){
var state_54015__$1 = state_54015;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54015__$1,(4),ch);
} else {
if((state_val_54016 === (23))){
var state_54015__$1 = state_54015;
var statearr_54073_56015 = state_54015__$1;
(statearr_54073_56015[(2)] = null);

(statearr_54073_56015[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54016 === (19))){
var inst_53933 = (state_54015[(8)]);
var inst_53992 = (state_54015[(11)]);
var inst_53996 = cljs.core.async.muxch_STAR_(inst_53992);
var state_54015__$1 = state_54015;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54015__$1,(22),inst_53996,inst_53933);
} else {
if((state_val_54016 === (11))){
var inst_53959 = (state_54015[(10)]);
var inst_53944 = (state_54015[(12)]);
var inst_53959__$1 = cljs.core.seq(inst_53944);
var state_54015__$1 = (function (){var statearr_54076 = state_54015;
(statearr_54076[(10)] = inst_53959__$1);

return statearr_54076;
})();
if(inst_53959__$1){
var statearr_54078_56017 = state_54015__$1;
(statearr_54078_56017[(1)] = (13));

} else {
var statearr_54079_56018 = state_54015__$1;
(statearr_54079_56018[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54016 === (9))){
var inst_53987 = (state_54015[(2)]);
var state_54015__$1 = state_54015;
var statearr_54085_56019 = state_54015__$1;
(statearr_54085_56019[(2)] = inst_53987);

(statearr_54085_56019[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54016 === (5))){
var inst_53941 = cljs.core.deref(mults);
var inst_53942 = cljs.core.vals(inst_53941);
var inst_53943 = cljs.core.seq(inst_53942);
var inst_53944 = inst_53943;
var inst_53945 = null;
var inst_53946 = (0);
var inst_53947 = (0);
var state_54015__$1 = (function (){var statearr_54088 = state_54015;
(statearr_54088[(12)] = inst_53944);

(statearr_54088[(13)] = inst_53945);

(statearr_54088[(15)] = inst_53947);

(statearr_54088[(16)] = inst_53946);

return statearr_54088;
})();
var statearr_54090_56022 = state_54015__$1;
(statearr_54090_56022[(2)] = null);

(statearr_54090_56022[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54016 === (14))){
var state_54015__$1 = state_54015;
var statearr_54097_56023 = state_54015__$1;
(statearr_54097_56023[(2)] = null);

(statearr_54097_56023[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54016 === (16))){
var inst_53959 = (state_54015[(10)]);
var inst_53967 = cljs.core.chunk_first(inst_53959);
var inst_53968 = cljs.core.chunk_rest(inst_53959);
var inst_53969 = cljs.core.count(inst_53967);
var inst_53944 = inst_53968;
var inst_53945 = inst_53967;
var inst_53946 = inst_53969;
var inst_53947 = (0);
var state_54015__$1 = (function (){var statearr_54099 = state_54015;
(statearr_54099[(12)] = inst_53944);

(statearr_54099[(13)] = inst_53945);

(statearr_54099[(15)] = inst_53947);

(statearr_54099[(16)] = inst_53946);

return statearr_54099;
})();
var statearr_54101_56031 = state_54015__$1;
(statearr_54101_56031[(2)] = null);

(statearr_54101_56031[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54016 === (10))){
var inst_53944 = (state_54015[(12)]);
var inst_53945 = (state_54015[(13)]);
var inst_53947 = (state_54015[(15)]);
var inst_53946 = (state_54015[(16)]);
var inst_53952 = cljs.core._nth(inst_53945,inst_53947);
var inst_53953 = cljs.core.async.muxch_STAR_(inst_53952);
var inst_53954 = cljs.core.async.close_BANG_(inst_53953);
var inst_53955 = (inst_53947 + (1));
var tmp54091 = inst_53944;
var tmp54092 = inst_53945;
var tmp54093 = inst_53946;
var inst_53944__$1 = tmp54091;
var inst_53945__$1 = tmp54092;
var inst_53946__$1 = tmp54093;
var inst_53947__$1 = inst_53955;
var state_54015__$1 = (function (){var statearr_54103 = state_54015;
(statearr_54103[(12)] = inst_53944__$1);

(statearr_54103[(13)] = inst_53945__$1);

(statearr_54103[(17)] = inst_53954);

(statearr_54103[(15)] = inst_53947__$1);

(statearr_54103[(16)] = inst_53946__$1);

return statearr_54103;
})();
var statearr_54105_56036 = state_54015__$1;
(statearr_54105_56036[(2)] = null);

(statearr_54105_56036[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54016 === (18))){
var inst_53980 = (state_54015[(2)]);
var state_54015__$1 = state_54015;
var statearr_54106_56037 = state_54015__$1;
(statearr_54106_56037[(2)] = inst_53980);

(statearr_54106_56037[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54016 === (8))){
var inst_53947 = (state_54015[(15)]);
var inst_53946 = (state_54015[(16)]);
var inst_53949 = (inst_53947 < inst_53946);
var inst_53950 = inst_53949;
var state_54015__$1 = state_54015;
if(cljs.core.truth_(inst_53950)){
var statearr_54109_56045 = state_54015__$1;
(statearr_54109_56045[(1)] = (10));

} else {
var statearr_54110_56046 = state_54015__$1;
(statearr_54110_56046[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__51583__auto__ = null;
var cljs$core$async$state_machine__51583__auto____0 = (function (){
var statearr_54112 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54112[(0)] = cljs$core$async$state_machine__51583__auto__);

(statearr_54112[(1)] = (1));

return statearr_54112;
});
var cljs$core$async$state_machine__51583__auto____1 = (function (state_54015){
while(true){
var ret_value__51584__auto__ = (function (){try{while(true){
var result__51585__auto__ = switch__51582__auto__(state_54015);
if(cljs.core.keyword_identical_QMARK_(result__51585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51585__auto__;
}
break;
}
}catch (e54114){if((e54114 instanceof Object)){
var ex__51586__auto__ = e54114;
var statearr_54115_56050 = state_54015;
(statearr_54115_56050[(5)] = ex__51586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_54015);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54114;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56051 = state_54015;
state_54015 = G__56051;
continue;
} else {
return ret_value__51584__auto__;
}
break;
}
});
cljs$core$async$state_machine__51583__auto__ = function(state_54015){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51583__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51583__auto____1.call(this,state_54015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51583__auto____0;
cljs$core$async$state_machine__51583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51583__auto____1;
return cljs$core$async$state_machine__51583__auto__;
})()
})();
var state__52050__auto__ = (function (){var statearr_54117 = f__52049__auto__();
(statearr_54117[(6)] = c__52048__auto___55985);

return statearr_54117;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52050__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__54121 = arguments.length;
switch (G__54121) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__54134 = arguments.length;
switch (G__54134) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__54142 = arguments.length;
switch (G__54142) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__52048__auto___56075 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52049__auto__ = (function (){var switch__51582__auto__ = (function (state_54191){
var state_val_54192 = (state_54191[(1)]);
if((state_val_54192 === (7))){
var state_54191__$1 = state_54191;
var statearr_54194_56077 = state_54191__$1;
(statearr_54194_56077[(2)] = null);

(statearr_54194_56077[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54192 === (1))){
var state_54191__$1 = state_54191;
var statearr_54195_56078 = state_54191__$1;
(statearr_54195_56078[(2)] = null);

(statearr_54195_56078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54192 === (4))){
var inst_54152 = (state_54191[(7)]);
var inst_54154 = (inst_54152 < cnt);
var state_54191__$1 = state_54191;
if(cljs.core.truth_(inst_54154)){
var statearr_54196_56083 = state_54191__$1;
(statearr_54196_56083[(1)] = (6));

} else {
var statearr_54197_56084 = state_54191__$1;
(statearr_54197_56084[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54192 === (15))){
var inst_54186 = (state_54191[(2)]);
var state_54191__$1 = state_54191;
var statearr_54199_56088 = state_54191__$1;
(statearr_54199_56088[(2)] = inst_54186);

(statearr_54199_56088[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54192 === (13))){
var inst_54179 = cljs.core.async.close_BANG_(out);
var state_54191__$1 = state_54191;
var statearr_54200_56093 = state_54191__$1;
(statearr_54200_56093[(2)] = inst_54179);

(statearr_54200_56093[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54192 === (6))){
var state_54191__$1 = state_54191;
var statearr_54201_56094 = state_54191__$1;
(statearr_54201_56094[(2)] = null);

(statearr_54201_56094[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54192 === (3))){
var inst_54188 = (state_54191[(2)]);
var state_54191__$1 = state_54191;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54191__$1,inst_54188);
} else {
if((state_val_54192 === (12))){
var inst_54176 = (state_54191[(8)]);
var inst_54176__$1 = (state_54191[(2)]);
var inst_54177 = cljs.core.some(cljs.core.nil_QMARK_,inst_54176__$1);
var state_54191__$1 = (function (){var statearr_54203 = state_54191;
(statearr_54203[(8)] = inst_54176__$1);

return statearr_54203;
})();
if(cljs.core.truth_(inst_54177)){
var statearr_54205_56096 = state_54191__$1;
(statearr_54205_56096[(1)] = (13));

} else {
var statearr_54206_56097 = state_54191__$1;
(statearr_54206_56097[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54192 === (2))){
var inst_54149 = cljs.core.reset_BANG_(dctr,cnt);
var inst_54152 = (0);
var state_54191__$1 = (function (){var statearr_54208 = state_54191;
(statearr_54208[(7)] = inst_54152);

(statearr_54208[(9)] = inst_54149);

return statearr_54208;
})();
var statearr_54209_56098 = state_54191__$1;
(statearr_54209_56098[(2)] = null);

(statearr_54209_56098[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54192 === (11))){
var inst_54152 = (state_54191[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_54191,(10),Object,null,(9));
var inst_54162 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_54152) : chs__$1.call(null,inst_54152));
var inst_54163 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_54152) : done.call(null,inst_54152));
var inst_54164 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_54162,inst_54163);
var state_54191__$1 = state_54191;
var statearr_54210_56101 = state_54191__$1;
(statearr_54210_56101[(2)] = inst_54164);


cljs.core.async.impl.ioc_helpers.process_exception(state_54191__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54192 === (9))){
var inst_54152 = (state_54191[(7)]);
var inst_54166 = (state_54191[(2)]);
var inst_54167 = (inst_54152 + (1));
var inst_54152__$1 = inst_54167;
var state_54191__$1 = (function (){var statearr_54212 = state_54191;
(statearr_54212[(7)] = inst_54152__$1);

(statearr_54212[(10)] = inst_54166);

return statearr_54212;
})();
var statearr_54213_56104 = state_54191__$1;
(statearr_54213_56104[(2)] = null);

(statearr_54213_56104[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54192 === (5))){
var inst_54173 = (state_54191[(2)]);
var state_54191__$1 = (function (){var statearr_54215 = state_54191;
(statearr_54215[(11)] = inst_54173);

return statearr_54215;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54191__$1,(12),dchan);
} else {
if((state_val_54192 === (14))){
var inst_54176 = (state_54191[(8)]);
var inst_54181 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_54176);
var state_54191__$1 = state_54191;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54191__$1,(16),out,inst_54181);
} else {
if((state_val_54192 === (16))){
var inst_54183 = (state_54191[(2)]);
var state_54191__$1 = (function (){var statearr_54219 = state_54191;
(statearr_54219[(12)] = inst_54183);

return statearr_54219;
})();
var statearr_54220_56110 = state_54191__$1;
(statearr_54220_56110[(2)] = null);

(statearr_54220_56110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54192 === (10))){
var inst_54156 = (state_54191[(2)]);
var inst_54157 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_54191__$1 = (function (){var statearr_54221 = state_54191;
(statearr_54221[(13)] = inst_54156);

return statearr_54221;
})();
var statearr_54222_56111 = state_54191__$1;
(statearr_54222_56111[(2)] = inst_54157);


cljs.core.async.impl.ioc_helpers.process_exception(state_54191__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54192 === (8))){
var inst_54171 = (state_54191[(2)]);
var state_54191__$1 = state_54191;
var statearr_54224_56113 = state_54191__$1;
(statearr_54224_56113[(2)] = inst_54171);

(statearr_54224_56113[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__51583__auto__ = null;
var cljs$core$async$state_machine__51583__auto____0 = (function (){
var statearr_54228 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54228[(0)] = cljs$core$async$state_machine__51583__auto__);

(statearr_54228[(1)] = (1));

return statearr_54228;
});
var cljs$core$async$state_machine__51583__auto____1 = (function (state_54191){
while(true){
var ret_value__51584__auto__ = (function (){try{while(true){
var result__51585__auto__ = switch__51582__auto__(state_54191);
if(cljs.core.keyword_identical_QMARK_(result__51585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51585__auto__;
}
break;
}
}catch (e54230){if((e54230 instanceof Object)){
var ex__51586__auto__ = e54230;
var statearr_54231_56116 = state_54191;
(statearr_54231_56116[(5)] = ex__51586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_54191);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54230;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56117 = state_54191;
state_54191 = G__56117;
continue;
} else {
return ret_value__51584__auto__;
}
break;
}
});
cljs$core$async$state_machine__51583__auto__ = function(state_54191){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51583__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51583__auto____1.call(this,state_54191);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51583__auto____0;
cljs$core$async$state_machine__51583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51583__auto____1;
return cljs$core$async$state_machine__51583__auto__;
})()
})();
var state__52050__auto__ = (function (){var statearr_54233 = f__52049__auto__();
(statearr_54233[(6)] = c__52048__auto___56075);

return statearr_54233;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52050__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__54237 = arguments.length;
switch (G__54237) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__52048__auto___56119 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52049__auto__ = (function (){var switch__51582__auto__ = (function (state_54275){
var state_val_54276 = (state_54275[(1)]);
if((state_val_54276 === (7))){
var inst_54252 = (state_54275[(7)]);
var inst_54253 = (state_54275[(8)]);
var inst_54252__$1 = (state_54275[(2)]);
var inst_54253__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_54252__$1,(0),null);
var inst_54254 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_54252__$1,(1),null);
var inst_54255 = (inst_54253__$1 == null);
var state_54275__$1 = (function (){var statearr_54278 = state_54275;
(statearr_54278[(9)] = inst_54254);

(statearr_54278[(7)] = inst_54252__$1);

(statearr_54278[(8)] = inst_54253__$1);

return statearr_54278;
})();
if(cljs.core.truth_(inst_54255)){
var statearr_54279_56126 = state_54275__$1;
(statearr_54279_56126[(1)] = (8));

} else {
var statearr_54280_56127 = state_54275__$1;
(statearr_54280_56127[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54276 === (1))){
var inst_54241 = cljs.core.vec(chs);
var inst_54242 = inst_54241;
var state_54275__$1 = (function (){var statearr_54283 = state_54275;
(statearr_54283[(10)] = inst_54242);

return statearr_54283;
})();
var statearr_54285_56130 = state_54275__$1;
(statearr_54285_56130[(2)] = null);

(statearr_54285_56130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54276 === (4))){
var inst_54242 = (state_54275[(10)]);
var state_54275__$1 = state_54275;
return cljs.core.async.ioc_alts_BANG_(state_54275__$1,(7),inst_54242);
} else {
if((state_val_54276 === (6))){
var inst_54271 = (state_54275[(2)]);
var state_54275__$1 = state_54275;
var statearr_54291_56131 = state_54275__$1;
(statearr_54291_56131[(2)] = inst_54271);

(statearr_54291_56131[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54276 === (3))){
var inst_54273 = (state_54275[(2)]);
var state_54275__$1 = state_54275;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54275__$1,inst_54273);
} else {
if((state_val_54276 === (2))){
var inst_54242 = (state_54275[(10)]);
var inst_54245 = cljs.core.count(inst_54242);
var inst_54246 = (inst_54245 > (0));
var state_54275__$1 = state_54275;
if(cljs.core.truth_(inst_54246)){
var statearr_54293_56136 = state_54275__$1;
(statearr_54293_56136[(1)] = (4));

} else {
var statearr_54294_56137 = state_54275__$1;
(statearr_54294_56137[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54276 === (11))){
var inst_54242 = (state_54275[(10)]);
var inst_54262 = (state_54275[(2)]);
var tmp54292 = inst_54242;
var inst_54242__$1 = tmp54292;
var state_54275__$1 = (function (){var statearr_54297 = state_54275;
(statearr_54297[(11)] = inst_54262);

(statearr_54297[(10)] = inst_54242__$1);

return statearr_54297;
})();
var statearr_54300_56138 = state_54275__$1;
(statearr_54300_56138[(2)] = null);

(statearr_54300_56138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54276 === (9))){
var inst_54253 = (state_54275[(8)]);
var state_54275__$1 = state_54275;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54275__$1,(11),out,inst_54253);
} else {
if((state_val_54276 === (5))){
var inst_54268 = cljs.core.async.close_BANG_(out);
var state_54275__$1 = state_54275;
var statearr_54303_56146 = state_54275__$1;
(statearr_54303_56146[(2)] = inst_54268);

(statearr_54303_56146[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54276 === (10))){
var inst_54265 = (state_54275[(2)]);
var state_54275__$1 = state_54275;
var statearr_54305_56148 = state_54275__$1;
(statearr_54305_56148[(2)] = inst_54265);

(statearr_54305_56148[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54276 === (8))){
var inst_54254 = (state_54275[(9)]);
var inst_54252 = (state_54275[(7)]);
var inst_54242 = (state_54275[(10)]);
var inst_54253 = (state_54275[(8)]);
var inst_54257 = (function (){var cs = inst_54242;
var vec__54248 = inst_54252;
var v = inst_54253;
var c = inst_54254;
return (function (p1__54234_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__54234_SHARP_);
});
})();
var inst_54258 = cljs.core.filterv(inst_54257,inst_54242);
var inst_54242__$1 = inst_54258;
var state_54275__$1 = (function (){var statearr_54307 = state_54275;
(statearr_54307[(10)] = inst_54242__$1);

return statearr_54307;
})();
var statearr_54308_56153 = state_54275__$1;
(statearr_54308_56153[(2)] = null);

(statearr_54308_56153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__51583__auto__ = null;
var cljs$core$async$state_machine__51583__auto____0 = (function (){
var statearr_54311 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54311[(0)] = cljs$core$async$state_machine__51583__auto__);

(statearr_54311[(1)] = (1));

return statearr_54311;
});
var cljs$core$async$state_machine__51583__auto____1 = (function (state_54275){
while(true){
var ret_value__51584__auto__ = (function (){try{while(true){
var result__51585__auto__ = switch__51582__auto__(state_54275);
if(cljs.core.keyword_identical_QMARK_(result__51585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51585__auto__;
}
break;
}
}catch (e54312){if((e54312 instanceof Object)){
var ex__51586__auto__ = e54312;
var statearr_54313_56163 = state_54275;
(statearr_54313_56163[(5)] = ex__51586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_54275);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54312;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56168 = state_54275;
state_54275 = G__56168;
continue;
} else {
return ret_value__51584__auto__;
}
break;
}
});
cljs$core$async$state_machine__51583__auto__ = function(state_54275){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51583__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51583__auto____1.call(this,state_54275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51583__auto____0;
cljs$core$async$state_machine__51583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51583__auto____1;
return cljs$core$async$state_machine__51583__auto__;
})()
})();
var state__52050__auto__ = (function (){var statearr_54318 = f__52049__auto__();
(statearr_54318[(6)] = c__52048__auto___56119);

return statearr_54318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52050__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__54327 = arguments.length;
switch (G__54327) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__52048__auto___56172 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52049__auto__ = (function (){var switch__51582__auto__ = (function (state_54354){
var state_val_54355 = (state_54354[(1)]);
if((state_val_54355 === (7))){
var inst_54334 = (state_54354[(7)]);
var inst_54334__$1 = (state_54354[(2)]);
var inst_54335 = (inst_54334__$1 == null);
var inst_54336 = cljs.core.not(inst_54335);
var state_54354__$1 = (function (){var statearr_54358 = state_54354;
(statearr_54358[(7)] = inst_54334__$1);

return statearr_54358;
})();
if(inst_54336){
var statearr_54359_56177 = state_54354__$1;
(statearr_54359_56177[(1)] = (8));

} else {
var statearr_54361_56178 = state_54354__$1;
(statearr_54361_56178[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54355 === (1))){
var inst_54329 = (0);
var state_54354__$1 = (function (){var statearr_54364 = state_54354;
(statearr_54364[(8)] = inst_54329);

return statearr_54364;
})();
var statearr_54366_56179 = state_54354__$1;
(statearr_54366_56179[(2)] = null);

(statearr_54366_56179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54355 === (4))){
var state_54354__$1 = state_54354;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54354__$1,(7),ch);
} else {
if((state_val_54355 === (6))){
var inst_54349 = (state_54354[(2)]);
var state_54354__$1 = state_54354;
var statearr_54371_56182 = state_54354__$1;
(statearr_54371_56182[(2)] = inst_54349);

(statearr_54371_56182[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54355 === (3))){
var inst_54351 = (state_54354[(2)]);
var inst_54352 = cljs.core.async.close_BANG_(out);
var state_54354__$1 = (function (){var statearr_54373 = state_54354;
(statearr_54373[(9)] = inst_54351);

return statearr_54373;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_54354__$1,inst_54352);
} else {
if((state_val_54355 === (2))){
var inst_54329 = (state_54354[(8)]);
var inst_54331 = (inst_54329 < n);
var state_54354__$1 = state_54354;
if(cljs.core.truth_(inst_54331)){
var statearr_54377_56183 = state_54354__$1;
(statearr_54377_56183[(1)] = (4));

} else {
var statearr_54380_56184 = state_54354__$1;
(statearr_54380_56184[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54355 === (11))){
var inst_54329 = (state_54354[(8)]);
var inst_54340 = (state_54354[(2)]);
var inst_54342 = (inst_54329 + (1));
var inst_54329__$1 = inst_54342;
var state_54354__$1 = (function (){var statearr_54381 = state_54354;
(statearr_54381[(8)] = inst_54329__$1);

(statearr_54381[(10)] = inst_54340);

return statearr_54381;
})();
var statearr_54382_56185 = state_54354__$1;
(statearr_54382_56185[(2)] = null);

(statearr_54382_56185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54355 === (9))){
var state_54354__$1 = state_54354;
var statearr_54384_56189 = state_54354__$1;
(statearr_54384_56189[(2)] = null);

(statearr_54384_56189[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54355 === (5))){
var state_54354__$1 = state_54354;
var statearr_54387_56190 = state_54354__$1;
(statearr_54387_56190[(2)] = null);

(statearr_54387_56190[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54355 === (10))){
var inst_54346 = (state_54354[(2)]);
var state_54354__$1 = state_54354;
var statearr_54390_56195 = state_54354__$1;
(statearr_54390_56195[(2)] = inst_54346);

(statearr_54390_56195[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54355 === (8))){
var inst_54334 = (state_54354[(7)]);
var state_54354__$1 = state_54354;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54354__$1,(11),out,inst_54334);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__51583__auto__ = null;
var cljs$core$async$state_machine__51583__auto____0 = (function (){
var statearr_54395 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_54395[(0)] = cljs$core$async$state_machine__51583__auto__);

(statearr_54395[(1)] = (1));

return statearr_54395;
});
var cljs$core$async$state_machine__51583__auto____1 = (function (state_54354){
while(true){
var ret_value__51584__auto__ = (function (){try{while(true){
var result__51585__auto__ = switch__51582__auto__(state_54354);
if(cljs.core.keyword_identical_QMARK_(result__51585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51585__auto__;
}
break;
}
}catch (e54396){if((e54396 instanceof Object)){
var ex__51586__auto__ = e54396;
var statearr_54397_56198 = state_54354;
(statearr_54397_56198[(5)] = ex__51586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_54354);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54396;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56199 = state_54354;
state_54354 = G__56199;
continue;
} else {
return ret_value__51584__auto__;
}
break;
}
});
cljs$core$async$state_machine__51583__auto__ = function(state_54354){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51583__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51583__auto____1.call(this,state_54354);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51583__auto____0;
cljs$core$async$state_machine__51583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51583__auto____1;
return cljs$core$async$state_machine__51583__auto__;
})()
})();
var state__52050__auto__ = (function (){var statearr_54399 = f__52049__auto__();
(statearr_54399[(6)] = c__52048__auto___56172);

return statearr_54399;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52050__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async54402 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54402 = (function (f,ch,meta54403){
this.f = f;
this.ch = ch;
this.meta54403 = meta54403;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async54402.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54404,meta54403__$1){
var self__ = this;
var _54404__$1 = this;
return (new cljs.core.async.t_cljs$core$async54402(self__.f,self__.ch,meta54403__$1));
}));

(cljs.core.async.t_cljs$core$async54402.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54404){
var self__ = this;
var _54404__$1 = this;
return self__.meta54403;
}));

(cljs.core.async.t_cljs$core$async54402.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54402.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async54402.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async54402.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54402.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async54410 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54410 = (function (f,ch,meta54403,_,fn1,meta54411){
this.f = f;
this.ch = ch;
this.meta54403 = meta54403;
this._ = _;
this.fn1 = fn1;
this.meta54411 = meta54411;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async54410.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54412,meta54411__$1){
var self__ = this;
var _54412__$1 = this;
return (new cljs.core.async.t_cljs$core$async54410(self__.f,self__.ch,self__.meta54403,self__._,self__.fn1,meta54411__$1));
}));

(cljs.core.async.t_cljs$core$async54410.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54412){
var self__ = this;
var _54412__$1 = this;
return self__.meta54411;
}));

(cljs.core.async.t_cljs$core$async54410.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54410.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async54410.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async54410.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__54400_SHARP_){
var G__54415 = (((p1__54400_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__54400_SHARP_) : self__.f.call(null,p1__54400_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__54415) : f1.call(null,G__54415));
});
}));

(cljs.core.async.t_cljs$core$async54410.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta54403","meta54403",1213422936,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async54402","cljs.core.async/t_cljs$core$async54402",-1001965978,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta54411","meta54411",1350314866,null)], null);
}));

(cljs.core.async.t_cljs$core$async54410.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async54410.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54410");

(cljs.core.async.t_cljs$core$async54410.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async54410");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async54410.
 */
cljs.core.async.__GT_t_cljs$core$async54410 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async54410(f__$1,ch__$1,meta54403__$1,___$2,fn1__$1,meta54411){
return (new cljs.core.async.t_cljs$core$async54410(f__$1,ch__$1,meta54403__$1,___$2,fn1__$1,meta54411));
});

}

return (new cljs.core.async.t_cljs$core$async54410(self__.f,self__.ch,self__.meta54403,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__54421 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__54421) : self__.f.call(null,G__54421));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async54402.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54402.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async54402.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta54403","meta54403",1213422936,null)], null);
}));

(cljs.core.async.t_cljs$core$async54402.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async54402.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54402");

(cljs.core.async.t_cljs$core$async54402.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async54402");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async54402.
 */
cljs.core.async.__GT_t_cljs$core$async54402 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async54402(f__$1,ch__$1,meta54403){
return (new cljs.core.async.t_cljs$core$async54402(f__$1,ch__$1,meta54403));
});

}

return (new cljs.core.async.t_cljs$core$async54402(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async54428 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54428 = (function (f,ch,meta54429){
this.f = f;
this.ch = ch;
this.meta54429 = meta54429;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async54428.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54430,meta54429__$1){
var self__ = this;
var _54430__$1 = this;
return (new cljs.core.async.t_cljs$core$async54428(self__.f,self__.ch,meta54429__$1));
}));

(cljs.core.async.t_cljs$core$async54428.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54430){
var self__ = this;
var _54430__$1 = this;
return self__.meta54429;
}));

(cljs.core.async.t_cljs$core$async54428.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54428.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async54428.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54428.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async54428.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54428.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async54428.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta54429","meta54429",151303838,null)], null);
}));

(cljs.core.async.t_cljs$core$async54428.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async54428.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54428");

(cljs.core.async.t_cljs$core$async54428.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async54428");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async54428.
 */
cljs.core.async.__GT_t_cljs$core$async54428 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async54428(f__$1,ch__$1,meta54429){
return (new cljs.core.async.t_cljs$core$async54428(f__$1,ch__$1,meta54429));
});

}

return (new cljs.core.async.t_cljs$core$async54428(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async54448 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54448 = (function (p,ch,meta54449){
this.p = p;
this.ch = ch;
this.meta54449 = meta54449;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async54448.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54450,meta54449__$1){
var self__ = this;
var _54450__$1 = this;
return (new cljs.core.async.t_cljs$core$async54448(self__.p,self__.ch,meta54449__$1));
}));

(cljs.core.async.t_cljs$core$async54448.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54450){
var self__ = this;
var _54450__$1 = this;
return self__.meta54449;
}));

(cljs.core.async.t_cljs$core$async54448.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54448.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async54448.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async54448.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54448.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async54448.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54448.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async54448.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta54449","meta54449",-563536186,null)], null);
}));

(cljs.core.async.t_cljs$core$async54448.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async54448.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54448");

(cljs.core.async.t_cljs$core$async54448.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async54448");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async54448.
 */
cljs.core.async.__GT_t_cljs$core$async54448 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async54448(p__$1,ch__$1,meta54449){
return (new cljs.core.async.t_cljs$core$async54448(p__$1,ch__$1,meta54449));
});

}

return (new cljs.core.async.t_cljs$core$async54448(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__54461 = arguments.length;
switch (G__54461) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__52048__auto___56241 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52049__auto__ = (function (){var switch__51582__auto__ = (function (state_54495){
var state_val_54496 = (state_54495[(1)]);
if((state_val_54496 === (7))){
var inst_54491 = (state_54495[(2)]);
var state_54495__$1 = state_54495;
var statearr_54498_56242 = state_54495__$1;
(statearr_54498_56242[(2)] = inst_54491);

(statearr_54498_56242[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54496 === (1))){
var state_54495__$1 = state_54495;
var statearr_54499_56243 = state_54495__$1;
(statearr_54499_56243[(2)] = null);

(statearr_54499_56243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54496 === (4))){
var inst_54471 = (state_54495[(7)]);
var inst_54471__$1 = (state_54495[(2)]);
var inst_54474 = (inst_54471__$1 == null);
var state_54495__$1 = (function (){var statearr_54500 = state_54495;
(statearr_54500[(7)] = inst_54471__$1);

return statearr_54500;
})();
if(cljs.core.truth_(inst_54474)){
var statearr_54502_56244 = state_54495__$1;
(statearr_54502_56244[(1)] = (5));

} else {
var statearr_54503_56245 = state_54495__$1;
(statearr_54503_56245[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54496 === (6))){
var inst_54471 = (state_54495[(7)]);
var inst_54478 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_54471) : p.call(null,inst_54471));
var state_54495__$1 = state_54495;
if(cljs.core.truth_(inst_54478)){
var statearr_54505_56246 = state_54495__$1;
(statearr_54505_56246[(1)] = (8));

} else {
var statearr_54506_56247 = state_54495__$1;
(statearr_54506_56247[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54496 === (3))){
var inst_54493 = (state_54495[(2)]);
var state_54495__$1 = state_54495;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54495__$1,inst_54493);
} else {
if((state_val_54496 === (2))){
var state_54495__$1 = state_54495;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54495__$1,(4),ch);
} else {
if((state_val_54496 === (11))){
var inst_54485 = (state_54495[(2)]);
var state_54495__$1 = state_54495;
var statearr_54512_56248 = state_54495__$1;
(statearr_54512_56248[(2)] = inst_54485);

(statearr_54512_56248[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54496 === (9))){
var state_54495__$1 = state_54495;
var statearr_54515_56251 = state_54495__$1;
(statearr_54515_56251[(2)] = null);

(statearr_54515_56251[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54496 === (5))){
var inst_54476 = cljs.core.async.close_BANG_(out);
var state_54495__$1 = state_54495;
var statearr_54517_56254 = state_54495__$1;
(statearr_54517_56254[(2)] = inst_54476);

(statearr_54517_56254[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54496 === (10))){
var inst_54488 = (state_54495[(2)]);
var state_54495__$1 = (function (){var statearr_54520 = state_54495;
(statearr_54520[(8)] = inst_54488);

return statearr_54520;
})();
var statearr_54522_56255 = state_54495__$1;
(statearr_54522_56255[(2)] = null);

(statearr_54522_56255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54496 === (8))){
var inst_54471 = (state_54495[(7)]);
var state_54495__$1 = state_54495;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54495__$1,(11),out,inst_54471);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__51583__auto__ = null;
var cljs$core$async$state_machine__51583__auto____0 = (function (){
var statearr_54523 = [null,null,null,null,null,null,null,null,null];
(statearr_54523[(0)] = cljs$core$async$state_machine__51583__auto__);

(statearr_54523[(1)] = (1));

return statearr_54523;
});
var cljs$core$async$state_machine__51583__auto____1 = (function (state_54495){
while(true){
var ret_value__51584__auto__ = (function (){try{while(true){
var result__51585__auto__ = switch__51582__auto__(state_54495);
if(cljs.core.keyword_identical_QMARK_(result__51585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51585__auto__;
}
break;
}
}catch (e54524){if((e54524 instanceof Object)){
var ex__51586__auto__ = e54524;
var statearr_54525_56261 = state_54495;
(statearr_54525_56261[(5)] = ex__51586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_54495);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54524;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56262 = state_54495;
state_54495 = G__56262;
continue;
} else {
return ret_value__51584__auto__;
}
break;
}
});
cljs$core$async$state_machine__51583__auto__ = function(state_54495){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51583__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51583__auto____1.call(this,state_54495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51583__auto____0;
cljs$core$async$state_machine__51583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51583__auto____1;
return cljs$core$async$state_machine__51583__auto__;
})()
})();
var state__52050__auto__ = (function (){var statearr_54530 = f__52049__auto__();
(statearr_54530[(6)] = c__52048__auto___56241);

return statearr_54530;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52050__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__54533 = arguments.length;
switch (G__54533) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__52048__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52049__auto__ = (function (){var switch__51582__auto__ = (function (state_54610){
var state_val_54611 = (state_54610[(1)]);
if((state_val_54611 === (7))){
var inst_54605 = (state_54610[(2)]);
var state_54610__$1 = state_54610;
var statearr_54621_56267 = state_54610__$1;
(statearr_54621_56267[(2)] = inst_54605);

(statearr_54621_56267[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54611 === (20))){
var inst_54572 = (state_54610[(7)]);
var inst_54586 = (state_54610[(2)]);
var inst_54587 = cljs.core.next(inst_54572);
var inst_54556 = inst_54587;
var inst_54557 = null;
var inst_54558 = (0);
var inst_54559 = (0);
var state_54610__$1 = (function (){var statearr_54623 = state_54610;
(statearr_54623[(8)] = inst_54556);

(statearr_54623[(9)] = inst_54586);

(statearr_54623[(10)] = inst_54557);

(statearr_54623[(11)] = inst_54558);

(statearr_54623[(12)] = inst_54559);

return statearr_54623;
})();
var statearr_54624_56270 = state_54610__$1;
(statearr_54624_56270[(2)] = null);

(statearr_54624_56270[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54611 === (1))){
var state_54610__$1 = state_54610;
var statearr_54627_56272 = state_54610__$1;
(statearr_54627_56272[(2)] = null);

(statearr_54627_56272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54611 === (4))){
var inst_54544 = (state_54610[(13)]);
var inst_54544__$1 = (state_54610[(2)]);
var inst_54546 = (inst_54544__$1 == null);
var state_54610__$1 = (function (){var statearr_54630 = state_54610;
(statearr_54630[(13)] = inst_54544__$1);

return statearr_54630;
})();
if(cljs.core.truth_(inst_54546)){
var statearr_54631_56277 = state_54610__$1;
(statearr_54631_56277[(1)] = (5));

} else {
var statearr_54633_56278 = state_54610__$1;
(statearr_54633_56278[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54611 === (15))){
var state_54610__$1 = state_54610;
var statearr_54639_56280 = state_54610__$1;
(statearr_54639_56280[(2)] = null);

(statearr_54639_56280[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54611 === (21))){
var state_54610__$1 = state_54610;
var statearr_54642_56284 = state_54610__$1;
(statearr_54642_56284[(2)] = null);

(statearr_54642_56284[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54611 === (13))){
var inst_54556 = (state_54610[(8)]);
var inst_54557 = (state_54610[(10)]);
var inst_54558 = (state_54610[(11)]);
var inst_54559 = (state_54610[(12)]);
var inst_54567 = (state_54610[(2)]);
var inst_54569 = (inst_54559 + (1));
var tmp54635 = inst_54556;
var tmp54636 = inst_54557;
var tmp54637 = inst_54558;
var inst_54556__$1 = tmp54635;
var inst_54557__$1 = tmp54636;
var inst_54558__$1 = tmp54637;
var inst_54559__$1 = inst_54569;
var state_54610__$1 = (function (){var statearr_54645 = state_54610;
(statearr_54645[(8)] = inst_54556__$1);

(statearr_54645[(10)] = inst_54557__$1);

(statearr_54645[(14)] = inst_54567);

(statearr_54645[(11)] = inst_54558__$1);

(statearr_54645[(12)] = inst_54559__$1);

return statearr_54645;
})();
var statearr_54646_56288 = state_54610__$1;
(statearr_54646_56288[(2)] = null);

(statearr_54646_56288[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54611 === (22))){
var state_54610__$1 = state_54610;
var statearr_54647_56292 = state_54610__$1;
(statearr_54647_56292[(2)] = null);

(statearr_54647_56292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54611 === (6))){
var inst_54544 = (state_54610[(13)]);
var inst_54554 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_54544) : f.call(null,inst_54544));
var inst_54555 = cljs.core.seq(inst_54554);
var inst_54556 = inst_54555;
var inst_54557 = null;
var inst_54558 = (0);
var inst_54559 = (0);
var state_54610__$1 = (function (){var statearr_54650 = state_54610;
(statearr_54650[(8)] = inst_54556);

(statearr_54650[(10)] = inst_54557);

(statearr_54650[(11)] = inst_54558);

(statearr_54650[(12)] = inst_54559);

return statearr_54650;
})();
var statearr_54653_56295 = state_54610__$1;
(statearr_54653_56295[(2)] = null);

(statearr_54653_56295[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54611 === (17))){
var inst_54572 = (state_54610[(7)]);
var inst_54578 = cljs.core.chunk_first(inst_54572);
var inst_54579 = cljs.core.chunk_rest(inst_54572);
var inst_54580 = cljs.core.count(inst_54578);
var inst_54556 = inst_54579;
var inst_54557 = inst_54578;
var inst_54558 = inst_54580;
var inst_54559 = (0);
var state_54610__$1 = (function (){var statearr_54656 = state_54610;
(statearr_54656[(8)] = inst_54556);

(statearr_54656[(10)] = inst_54557);

(statearr_54656[(11)] = inst_54558);

(statearr_54656[(12)] = inst_54559);

return statearr_54656;
})();
var statearr_54661_56296 = state_54610__$1;
(statearr_54661_56296[(2)] = null);

(statearr_54661_56296[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54611 === (3))){
var inst_54607 = (state_54610[(2)]);
var state_54610__$1 = state_54610;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54610__$1,inst_54607);
} else {
if((state_val_54611 === (12))){
var inst_54595 = (state_54610[(2)]);
var state_54610__$1 = state_54610;
var statearr_54662_56297 = state_54610__$1;
(statearr_54662_56297[(2)] = inst_54595);

(statearr_54662_56297[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54611 === (2))){
var state_54610__$1 = state_54610;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54610__$1,(4),in$);
} else {
if((state_val_54611 === (23))){
var inst_54603 = (state_54610[(2)]);
var state_54610__$1 = state_54610;
var statearr_54664_56298 = state_54610__$1;
(statearr_54664_56298[(2)] = inst_54603);

(statearr_54664_56298[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54611 === (19))){
var inst_54590 = (state_54610[(2)]);
var state_54610__$1 = state_54610;
var statearr_54667_56299 = state_54610__$1;
(statearr_54667_56299[(2)] = inst_54590);

(statearr_54667_56299[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54611 === (11))){
var inst_54556 = (state_54610[(8)]);
var inst_54572 = (state_54610[(7)]);
var inst_54572__$1 = cljs.core.seq(inst_54556);
var state_54610__$1 = (function (){var statearr_54670 = state_54610;
(statearr_54670[(7)] = inst_54572__$1);

return statearr_54670;
})();
if(inst_54572__$1){
var statearr_54672_56300 = state_54610__$1;
(statearr_54672_56300[(1)] = (14));

} else {
var statearr_54673_56301 = state_54610__$1;
(statearr_54673_56301[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54611 === (9))){
var inst_54597 = (state_54610[(2)]);
var inst_54598 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_54610__$1 = (function (){var statearr_54674 = state_54610;
(statearr_54674[(15)] = inst_54597);

return statearr_54674;
})();
if(cljs.core.truth_(inst_54598)){
var statearr_54675_56305 = state_54610__$1;
(statearr_54675_56305[(1)] = (21));

} else {
var statearr_54676_56306 = state_54610__$1;
(statearr_54676_56306[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54611 === (5))){
var inst_54548 = cljs.core.async.close_BANG_(out);
var state_54610__$1 = state_54610;
var statearr_54678_56307 = state_54610__$1;
(statearr_54678_56307[(2)] = inst_54548);

(statearr_54678_56307[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54611 === (14))){
var inst_54572 = (state_54610[(7)]);
var inst_54576 = cljs.core.chunked_seq_QMARK_(inst_54572);
var state_54610__$1 = state_54610;
if(inst_54576){
var statearr_54679_56308 = state_54610__$1;
(statearr_54679_56308[(1)] = (17));

} else {
var statearr_54680_56312 = state_54610__$1;
(statearr_54680_56312[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54611 === (16))){
var inst_54593 = (state_54610[(2)]);
var state_54610__$1 = state_54610;
var statearr_54682_56313 = state_54610__$1;
(statearr_54682_56313[(2)] = inst_54593);

(statearr_54682_56313[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54611 === (10))){
var inst_54557 = (state_54610[(10)]);
var inst_54559 = (state_54610[(12)]);
var inst_54564 = cljs.core._nth(inst_54557,inst_54559);
var state_54610__$1 = state_54610;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54610__$1,(13),out,inst_54564);
} else {
if((state_val_54611 === (18))){
var inst_54572 = (state_54610[(7)]);
var inst_54584 = cljs.core.first(inst_54572);
var state_54610__$1 = state_54610;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54610__$1,(20),out,inst_54584);
} else {
if((state_val_54611 === (8))){
var inst_54558 = (state_54610[(11)]);
var inst_54559 = (state_54610[(12)]);
var inst_54561 = (inst_54559 < inst_54558);
var inst_54562 = inst_54561;
var state_54610__$1 = state_54610;
if(cljs.core.truth_(inst_54562)){
var statearr_54684_56325 = state_54610__$1;
(statearr_54684_56325[(1)] = (10));

} else {
var statearr_54685_56326 = state_54610__$1;
(statearr_54685_56326[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__51583__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__51583__auto____0 = (function (){
var statearr_54689 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54689[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__51583__auto__);

(statearr_54689[(1)] = (1));

return statearr_54689;
});
var cljs$core$async$mapcat_STAR__$_state_machine__51583__auto____1 = (function (state_54610){
while(true){
var ret_value__51584__auto__ = (function (){try{while(true){
var result__51585__auto__ = switch__51582__auto__(state_54610);
if(cljs.core.keyword_identical_QMARK_(result__51585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51585__auto__;
}
break;
}
}catch (e54690){if((e54690 instanceof Object)){
var ex__51586__auto__ = e54690;
var statearr_54691_56330 = state_54610;
(statearr_54691_56330[(5)] = ex__51586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_54610);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54690;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56342 = state_54610;
state_54610 = G__56342;
continue;
} else {
return ret_value__51584__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__51583__auto__ = function(state_54610){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__51583__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__51583__auto____1.call(this,state_54610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__51583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__51583__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__51583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__51583__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__51583__auto__;
})()
})();
var state__52050__auto__ = (function (){var statearr_54693 = f__52049__auto__();
(statearr_54693[(6)] = c__52048__auto__);

return statearr_54693;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52050__auto__);
}));

return c__52048__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__54696 = arguments.length;
switch (G__54696) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__54701 = arguments.length;
switch (G__54701) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__54705 = arguments.length;
switch (G__54705) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__52048__auto___56376 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52049__auto__ = (function (){var switch__51582__auto__ = (function (state_54735){
var state_val_54736 = (state_54735[(1)]);
if((state_val_54736 === (7))){
var inst_54729 = (state_54735[(2)]);
var state_54735__$1 = state_54735;
var statearr_54738_56377 = state_54735__$1;
(statearr_54738_56377[(2)] = inst_54729);

(statearr_54738_56377[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54736 === (1))){
var inst_54707 = null;
var state_54735__$1 = (function (){var statearr_54743 = state_54735;
(statearr_54743[(7)] = inst_54707);

return statearr_54743;
})();
var statearr_54745_56378 = state_54735__$1;
(statearr_54745_56378[(2)] = null);

(statearr_54745_56378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54736 === (4))){
var inst_54710 = (state_54735[(8)]);
var inst_54710__$1 = (state_54735[(2)]);
var inst_54712 = (inst_54710__$1 == null);
var inst_54713 = cljs.core.not(inst_54712);
var state_54735__$1 = (function (){var statearr_54747 = state_54735;
(statearr_54747[(8)] = inst_54710__$1);

return statearr_54747;
})();
if(inst_54713){
var statearr_54748_56380 = state_54735__$1;
(statearr_54748_56380[(1)] = (5));

} else {
var statearr_54749_56381 = state_54735__$1;
(statearr_54749_56381[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54736 === (6))){
var state_54735__$1 = state_54735;
var statearr_54753_56382 = state_54735__$1;
(statearr_54753_56382[(2)] = null);

(statearr_54753_56382[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54736 === (3))){
var inst_54731 = (state_54735[(2)]);
var inst_54732 = cljs.core.async.close_BANG_(out);
var state_54735__$1 = (function (){var statearr_54760 = state_54735;
(statearr_54760[(9)] = inst_54731);

return statearr_54760;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_54735__$1,inst_54732);
} else {
if((state_val_54736 === (2))){
var state_54735__$1 = state_54735;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54735__$1,(4),ch);
} else {
if((state_val_54736 === (11))){
var inst_54710 = (state_54735[(8)]);
var inst_54723 = (state_54735[(2)]);
var inst_54707 = inst_54710;
var state_54735__$1 = (function (){var statearr_54763 = state_54735;
(statearr_54763[(7)] = inst_54707);

(statearr_54763[(10)] = inst_54723);

return statearr_54763;
})();
var statearr_54765_56401 = state_54735__$1;
(statearr_54765_56401[(2)] = null);

(statearr_54765_56401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54736 === (9))){
var inst_54710 = (state_54735[(8)]);
var state_54735__$1 = state_54735;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54735__$1,(11),out,inst_54710);
} else {
if((state_val_54736 === (5))){
var inst_54707 = (state_54735[(7)]);
var inst_54710 = (state_54735[(8)]);
var inst_54718 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_54710,inst_54707);
var state_54735__$1 = state_54735;
if(inst_54718){
var statearr_54772_56402 = state_54735__$1;
(statearr_54772_56402[(1)] = (8));

} else {
var statearr_54773_56403 = state_54735__$1;
(statearr_54773_56403[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54736 === (10))){
var inst_54726 = (state_54735[(2)]);
var state_54735__$1 = state_54735;
var statearr_54777_56405 = state_54735__$1;
(statearr_54777_56405[(2)] = inst_54726);

(statearr_54777_56405[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54736 === (8))){
var inst_54707 = (state_54735[(7)]);
var tmp54769 = inst_54707;
var inst_54707__$1 = tmp54769;
var state_54735__$1 = (function (){var statearr_54783 = state_54735;
(statearr_54783[(7)] = inst_54707__$1);

return statearr_54783;
})();
var statearr_54784_56406 = state_54735__$1;
(statearr_54784_56406[(2)] = null);

(statearr_54784_56406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__51583__auto__ = null;
var cljs$core$async$state_machine__51583__auto____0 = (function (){
var statearr_54788 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_54788[(0)] = cljs$core$async$state_machine__51583__auto__);

(statearr_54788[(1)] = (1));

return statearr_54788;
});
var cljs$core$async$state_machine__51583__auto____1 = (function (state_54735){
while(true){
var ret_value__51584__auto__ = (function (){try{while(true){
var result__51585__auto__ = switch__51582__auto__(state_54735);
if(cljs.core.keyword_identical_QMARK_(result__51585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51585__auto__;
}
break;
}
}catch (e54789){if((e54789 instanceof Object)){
var ex__51586__auto__ = e54789;
var statearr_54790_56408 = state_54735;
(statearr_54790_56408[(5)] = ex__51586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_54735);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54789;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56410 = state_54735;
state_54735 = G__56410;
continue;
} else {
return ret_value__51584__auto__;
}
break;
}
});
cljs$core$async$state_machine__51583__auto__ = function(state_54735){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51583__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51583__auto____1.call(this,state_54735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51583__auto____0;
cljs$core$async$state_machine__51583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51583__auto____1;
return cljs$core$async$state_machine__51583__auto__;
})()
})();
var state__52050__auto__ = (function (){var statearr_54793 = f__52049__auto__();
(statearr_54793[(6)] = c__52048__auto___56376);

return statearr_54793;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52050__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__54800 = arguments.length;
switch (G__54800) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__52048__auto___56421 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52049__auto__ = (function (){var switch__51582__auto__ = (function (state_54850){
var state_val_54851 = (state_54850[(1)]);
if((state_val_54851 === (7))){
var inst_54846 = (state_54850[(2)]);
var state_54850__$1 = state_54850;
var statearr_54856_56424 = state_54850__$1;
(statearr_54856_56424[(2)] = inst_54846);

(statearr_54856_56424[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54851 === (1))){
var inst_54808 = (new Array(n));
var inst_54809 = inst_54808;
var inst_54810 = (0);
var state_54850__$1 = (function (){var statearr_54857 = state_54850;
(statearr_54857[(7)] = inst_54810);

(statearr_54857[(8)] = inst_54809);

return statearr_54857;
})();
var statearr_54858_56430 = state_54850__$1;
(statearr_54858_56430[(2)] = null);

(statearr_54858_56430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54851 === (4))){
var inst_54813 = (state_54850[(9)]);
var inst_54813__$1 = (state_54850[(2)]);
var inst_54817 = (inst_54813__$1 == null);
var inst_54818 = cljs.core.not(inst_54817);
var state_54850__$1 = (function (){var statearr_54859 = state_54850;
(statearr_54859[(9)] = inst_54813__$1);

return statearr_54859;
})();
if(inst_54818){
var statearr_54860_56438 = state_54850__$1;
(statearr_54860_56438[(1)] = (5));

} else {
var statearr_54861_56440 = state_54850__$1;
(statearr_54861_56440[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54851 === (15))){
var inst_54840 = (state_54850[(2)]);
var state_54850__$1 = state_54850;
var statearr_54863_56443 = state_54850__$1;
(statearr_54863_56443[(2)] = inst_54840);

(statearr_54863_56443[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54851 === (13))){
var state_54850__$1 = state_54850;
var statearr_54864_56444 = state_54850__$1;
(statearr_54864_56444[(2)] = null);

(statearr_54864_56444[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54851 === (6))){
var inst_54810 = (state_54850[(7)]);
var inst_54836 = (inst_54810 > (0));
var state_54850__$1 = state_54850;
if(cljs.core.truth_(inst_54836)){
var statearr_54865_56445 = state_54850__$1;
(statearr_54865_56445[(1)] = (12));

} else {
var statearr_54866_56446 = state_54850__$1;
(statearr_54866_56446[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54851 === (3))){
var inst_54848 = (state_54850[(2)]);
var state_54850__$1 = state_54850;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54850__$1,inst_54848);
} else {
if((state_val_54851 === (12))){
var inst_54809 = (state_54850[(8)]);
var inst_54838 = cljs.core.vec(inst_54809);
var state_54850__$1 = state_54850;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54850__$1,(15),out,inst_54838);
} else {
if((state_val_54851 === (2))){
var state_54850__$1 = state_54850;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54850__$1,(4),ch);
} else {
if((state_val_54851 === (11))){
var inst_54828 = (state_54850[(2)]);
var inst_54830 = (new Array(n));
var inst_54809 = inst_54830;
var inst_54810 = (0);
var state_54850__$1 = (function (){var statearr_54872 = state_54850;
(statearr_54872[(10)] = inst_54828);

(statearr_54872[(7)] = inst_54810);

(statearr_54872[(8)] = inst_54809);

return statearr_54872;
})();
var statearr_54873_56456 = state_54850__$1;
(statearr_54873_56456[(2)] = null);

(statearr_54873_56456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54851 === (9))){
var inst_54809 = (state_54850[(8)]);
var inst_54826 = cljs.core.vec(inst_54809);
var state_54850__$1 = state_54850;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54850__$1,(11),out,inst_54826);
} else {
if((state_val_54851 === (5))){
var inst_54813 = (state_54850[(9)]);
var inst_54810 = (state_54850[(7)]);
var inst_54809 = (state_54850[(8)]);
var inst_54821 = (state_54850[(11)]);
var inst_54820 = (inst_54809[inst_54810] = inst_54813);
var inst_54821__$1 = (inst_54810 + (1));
var inst_54822 = (inst_54821__$1 < n);
var state_54850__$1 = (function (){var statearr_54874 = state_54850;
(statearr_54874[(12)] = inst_54820);

(statearr_54874[(11)] = inst_54821__$1);

return statearr_54874;
})();
if(cljs.core.truth_(inst_54822)){
var statearr_54875_56460 = state_54850__$1;
(statearr_54875_56460[(1)] = (8));

} else {
var statearr_54876_56463 = state_54850__$1;
(statearr_54876_56463[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54851 === (14))){
var inst_54843 = (state_54850[(2)]);
var inst_54844 = cljs.core.async.close_BANG_(out);
var state_54850__$1 = (function (){var statearr_54879 = state_54850;
(statearr_54879[(13)] = inst_54843);

return statearr_54879;
})();
var statearr_54880_56471 = state_54850__$1;
(statearr_54880_56471[(2)] = inst_54844);

(statearr_54880_56471[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54851 === (10))){
var inst_54833 = (state_54850[(2)]);
var state_54850__$1 = state_54850;
var statearr_54881_56472 = state_54850__$1;
(statearr_54881_56472[(2)] = inst_54833);

(statearr_54881_56472[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54851 === (8))){
var inst_54809 = (state_54850[(8)]);
var inst_54821 = (state_54850[(11)]);
var tmp54877 = inst_54809;
var inst_54809__$1 = tmp54877;
var inst_54810 = inst_54821;
var state_54850__$1 = (function (){var statearr_54882 = state_54850;
(statearr_54882[(7)] = inst_54810);

(statearr_54882[(8)] = inst_54809__$1);

return statearr_54882;
})();
var statearr_54883_56476 = state_54850__$1;
(statearr_54883_56476[(2)] = null);

(statearr_54883_56476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__51583__auto__ = null;
var cljs$core$async$state_machine__51583__auto____0 = (function (){
var statearr_54886 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54886[(0)] = cljs$core$async$state_machine__51583__auto__);

(statearr_54886[(1)] = (1));

return statearr_54886;
});
var cljs$core$async$state_machine__51583__auto____1 = (function (state_54850){
while(true){
var ret_value__51584__auto__ = (function (){try{while(true){
var result__51585__auto__ = switch__51582__auto__(state_54850);
if(cljs.core.keyword_identical_QMARK_(result__51585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51585__auto__;
}
break;
}
}catch (e54889){if((e54889 instanceof Object)){
var ex__51586__auto__ = e54889;
var statearr_54890_56478 = state_54850;
(statearr_54890_56478[(5)] = ex__51586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_54850);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54889;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56481 = state_54850;
state_54850 = G__56481;
continue;
} else {
return ret_value__51584__auto__;
}
break;
}
});
cljs$core$async$state_machine__51583__auto__ = function(state_54850){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51583__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51583__auto____1.call(this,state_54850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51583__auto____0;
cljs$core$async$state_machine__51583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51583__auto____1;
return cljs$core$async$state_machine__51583__auto__;
})()
})();
var state__52050__auto__ = (function (){var statearr_54892 = f__52049__auto__();
(statearr_54892[(6)] = c__52048__auto___56421);

return statearr_54892;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52050__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__54902 = arguments.length;
switch (G__54902) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__52048__auto___56486 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52049__auto__ = (function (){var switch__51582__auto__ = (function (state_54958){
var state_val_54959 = (state_54958[(1)]);
if((state_val_54959 === (7))){
var inst_54954 = (state_54958[(2)]);
var state_54958__$1 = state_54958;
var statearr_54967_56487 = state_54958__$1;
(statearr_54967_56487[(2)] = inst_54954);

(statearr_54967_56487[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54959 === (1))){
var inst_54910 = [];
var inst_54911 = inst_54910;
var inst_54912 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_54958__$1 = (function (){var statearr_54973 = state_54958;
(statearr_54973[(7)] = inst_54912);

(statearr_54973[(8)] = inst_54911);

return statearr_54973;
})();
var statearr_54974_56488 = state_54958__$1;
(statearr_54974_56488[(2)] = null);

(statearr_54974_56488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54959 === (4))){
var inst_54915 = (state_54958[(9)]);
var inst_54915__$1 = (state_54958[(2)]);
var inst_54918 = (inst_54915__$1 == null);
var inst_54919 = cljs.core.not(inst_54918);
var state_54958__$1 = (function (){var statearr_54976 = state_54958;
(statearr_54976[(9)] = inst_54915__$1);

return statearr_54976;
})();
if(inst_54919){
var statearr_54977_56491 = state_54958__$1;
(statearr_54977_56491[(1)] = (5));

} else {
var statearr_54978_56492 = state_54958__$1;
(statearr_54978_56492[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54959 === (15))){
var inst_54948 = (state_54958[(2)]);
var state_54958__$1 = state_54958;
var statearr_54979_56493 = state_54958__$1;
(statearr_54979_56493[(2)] = inst_54948);

(statearr_54979_56493[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54959 === (13))){
var state_54958__$1 = state_54958;
var statearr_54980_56494 = state_54958__$1;
(statearr_54980_56494[(2)] = null);

(statearr_54980_56494[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54959 === (6))){
var inst_54911 = (state_54958[(8)]);
var inst_54943 = inst_54911.length;
var inst_54944 = (inst_54943 > (0));
var state_54958__$1 = state_54958;
if(cljs.core.truth_(inst_54944)){
var statearr_54983_56495 = state_54958__$1;
(statearr_54983_56495[(1)] = (12));

} else {
var statearr_54986_56496 = state_54958__$1;
(statearr_54986_56496[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54959 === (3))){
var inst_54956 = (state_54958[(2)]);
var state_54958__$1 = state_54958;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54958__$1,inst_54956);
} else {
if((state_val_54959 === (12))){
var inst_54911 = (state_54958[(8)]);
var inst_54946 = cljs.core.vec(inst_54911);
var state_54958__$1 = state_54958;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54958__$1,(15),out,inst_54946);
} else {
if((state_val_54959 === (2))){
var state_54958__$1 = state_54958;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54958__$1,(4),ch);
} else {
if((state_val_54959 === (11))){
var inst_54924 = (state_54958[(10)]);
var inst_54915 = (state_54958[(9)]);
var inst_54935 = (state_54958[(2)]);
var inst_54937 = [];
var inst_54938 = inst_54937.push(inst_54915);
var inst_54911 = inst_54937;
var inst_54912 = inst_54924;
var state_54958__$1 = (function (){var statearr_54996 = state_54958;
(statearr_54996[(7)] = inst_54912);

(statearr_54996[(8)] = inst_54911);

(statearr_54996[(11)] = inst_54938);

(statearr_54996[(12)] = inst_54935);

return statearr_54996;
})();
var statearr_54997_56499 = state_54958__$1;
(statearr_54997_56499[(2)] = null);

(statearr_54997_56499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54959 === (9))){
var inst_54911 = (state_54958[(8)]);
var inst_54933 = cljs.core.vec(inst_54911);
var state_54958__$1 = state_54958;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54958__$1,(11),out,inst_54933);
} else {
if((state_val_54959 === (5))){
var inst_54912 = (state_54958[(7)]);
var inst_54924 = (state_54958[(10)]);
var inst_54915 = (state_54958[(9)]);
var inst_54924__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_54915) : f.call(null,inst_54915));
var inst_54925 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_54924__$1,inst_54912);
var inst_54926 = cljs.core.keyword_identical_QMARK_(inst_54912,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_54927 = ((inst_54925) || (inst_54926));
var state_54958__$1 = (function (){var statearr_55001 = state_54958;
(statearr_55001[(10)] = inst_54924__$1);

return statearr_55001;
})();
if(cljs.core.truth_(inst_54927)){
var statearr_55003_56508 = state_54958__$1;
(statearr_55003_56508[(1)] = (8));

} else {
var statearr_55005_56509 = state_54958__$1;
(statearr_55005_56509[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54959 === (14))){
var inst_54951 = (state_54958[(2)]);
var inst_54952 = cljs.core.async.close_BANG_(out);
var state_54958__$1 = (function (){var statearr_55007 = state_54958;
(statearr_55007[(13)] = inst_54951);

return statearr_55007;
})();
var statearr_55008_56511 = state_54958__$1;
(statearr_55008_56511[(2)] = inst_54952);

(statearr_55008_56511[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54959 === (10))){
var inst_54941 = (state_54958[(2)]);
var state_54958__$1 = state_54958;
var statearr_55011_56514 = state_54958__$1;
(statearr_55011_56514[(2)] = inst_54941);

(statearr_55011_56514[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54959 === (8))){
var inst_54911 = (state_54958[(8)]);
var inst_54924 = (state_54958[(10)]);
var inst_54915 = (state_54958[(9)]);
var inst_54930 = inst_54911.push(inst_54915);
var tmp55006 = inst_54911;
var inst_54911__$1 = tmp55006;
var inst_54912 = inst_54924;
var state_54958__$1 = (function (){var statearr_55014 = state_54958;
(statearr_55014[(7)] = inst_54912);

(statearr_55014[(14)] = inst_54930);

(statearr_55014[(8)] = inst_54911__$1);

return statearr_55014;
})();
var statearr_55015_56518 = state_54958__$1;
(statearr_55015_56518[(2)] = null);

(statearr_55015_56518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__51583__auto__ = null;
var cljs$core$async$state_machine__51583__auto____0 = (function (){
var statearr_55022 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55022[(0)] = cljs$core$async$state_machine__51583__auto__);

(statearr_55022[(1)] = (1));

return statearr_55022;
});
var cljs$core$async$state_machine__51583__auto____1 = (function (state_54958){
while(true){
var ret_value__51584__auto__ = (function (){try{while(true){
var result__51585__auto__ = switch__51582__auto__(state_54958);
if(cljs.core.keyword_identical_QMARK_(result__51585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51585__auto__;
}
break;
}
}catch (e55027){if((e55027 instanceof Object)){
var ex__51586__auto__ = e55027;
var statearr_55029_56519 = state_54958;
(statearr_55029_56519[(5)] = ex__51586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_54958);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55027;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__51584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56520 = state_54958;
state_54958 = G__56520;
continue;
} else {
return ret_value__51584__auto__;
}
break;
}
});
cljs$core$async$state_machine__51583__auto__ = function(state_54958){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51583__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51583__auto____1.call(this,state_54958);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__51583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51583__auto____0;
cljs$core$async$state_machine__51583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51583__auto____1;
return cljs$core$async$state_machine__51583__auto__;
})()
})();
var state__52050__auto__ = (function (){var statearr_55036 = f__52049__auto__();
(statearr_55036[(6)] = c__52048__auto___56486);

return statearr_55036;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52050__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
