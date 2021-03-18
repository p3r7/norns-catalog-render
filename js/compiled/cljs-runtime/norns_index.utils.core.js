goog.provide('norns_index.utils.core');
norns_index.utils.core.find_indexes = (function norns_index$utils$core$find_indexes(needle,haystack){
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__54267_SHARP_,p2__54266_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p2__54266_SHARP_,needle)){
return p1__54267_SHARP_;
} else {
return null;
}
}),haystack);
});
/**
 * Like `dissoc` but allowing to pass a path like `assoc-in`.
 */
norns_index.utils.core.dissoc_in = (function norns_index$utils$core$dissoc_in(m,ks){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(m,cljs.core.butlast(ks),cljs.core.dissoc,cljs.core.last(ks));
});
norns_index.utils.core.entry_member_of_map_QMARK_ = (function norns_index$utils$core$entry_member_of_map_QMARK_(entry,coll){
var vec__54268 = entry;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54268,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54268,(1),null);
return ((cljs.core.contains_QMARK_(coll,k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(coll,k))));
});
/**
 * Returns a truthy value if V is found in collection COLL.
 */
norns_index.utils.core.member_QMARK_ = (function norns_index$utils$core$member_QMARK_(v,coll){
if(cljs.core.coll_QMARK_(coll)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Argument `coll` is not a collection",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ex-type","ex-type",1714248683),new cljs.core.Keyword(null,"unexpected-type","unexpected-type",-1389407954)], null));
}

if(cljs.core.set_QMARK_(coll)){
return (coll.cljs$core$IFn$_invoke$arity$1 ? coll.cljs$core$IFn$_invoke$arity$1(v) : coll.call(null,v));
} else {
if(cljs.core.map_QMARK_(coll)){
if(((cljs.core.vector_QMARK_(v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(v))))){
return norns_index.utils.core.entry_member_of_map_QMARK_(v,coll);
} else {
if(((cljs.core.map_QMARK_(v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(v))))){
return norns_index.utils.core.entry_member_of_map_QMARK_(cljs.core.first(v),coll);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Argument `coll` is a map, expecting `v` to be a vector of size 2 or map os size 1",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ex-type","ex-type",1714248683),new cljs.core.Keyword(null,"unexpected-type","unexpected-type",-1389407954),new cljs.core.Keyword(null,"v","v",21465059),v,new cljs.core.Keyword(null,"coll","coll",1647737163),coll], null));

}
}
} else {
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([v]),coll);

}
}
});
/**
 * Apply sequence processing FX (e.g. `map` or `filter`) with entry FN on each element of COLL while keeping the original collection type.
 * 
 *   Taken from book "Clojure the Essential Reference".
 */
norns_index.utils.core.maintain = (function norns_index$utils$core$maintain(var_args){
var G__54272 = arguments.length;
switch (G__54272) {
case 3:
return norns_index.utils.core.maintain.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return norns_index.utils.core.maintain.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(norns_index.utils.core.maintain.cljs$core$IFn$_invoke$arity$3 = (function (fx,f,coll){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(coll),(fx.cljs$core$IFn$_invoke$arity$2 ? fx.cljs$core$IFn$_invoke$arity$2(f,coll) : fx.call(null,f,coll)));
}));

(norns_index.utils.core.maintain.cljs$core$IFn$_invoke$arity$2 = (function (xform,coll){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.empty(coll),xform,coll);
}));

(norns_index.utils.core.maintain.cljs$lang$maxFixedArity = 3);

/**
 * Returns a lazy hashmap consisting of the result of applying f to
 *  the value of each set in hashmap.
 *  Function f should accept one single argument.
 */
norns_index.utils.core.map_vals = (function norns_index$utils$core$map_vals(f,m){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (m__$1,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m__$1,k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v)));
}),cljs.core.transient$(cljs.core.empty(m)),m));
});
/**
 * Returns a lazy hashmap consisting of the result of applying f to
 *   the key of each set in hashmap.
 *   Function f should accept one single argument.
 */
norns_index.utils.core.map_keys = (function norns_index$utils$core$map_keys(f,m){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (m__$1,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m__$1,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k) : f.call(null,k)),v);
}),cljs.core.transient$(cljs.core.empty(m)),m));
});
norns_index.utils.core.continuous_partition = (function norns_index$utils$core$continuous_partition(c){
var first_partition = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),c);
var second_partition = cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2((2),cljs.core.next(c));
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__54273_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(p1__54273_SHARP_));
}),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(first_partition,second_partition));
});
/**
 * Return new collection of same type as COLL with only elements satisfying PREDICATE.
 */
norns_index.utils.core.keep_in_coll = (function norns_index$utils$core$keep_in_coll(coll,predicate){
if((!(cljs.core.coll_QMARK_(coll)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Argument `coll` is not a collection",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ex-type","ex-type",1714248683),new cljs.core.Keyword(null,"unexpected-type","unexpected-type",-1389407954),new cljs.core.Keyword(null,"coll","coll",1647737163),coll], null));
} else {
}

return norns_index.utils.core.maintain.cljs$core$IFn$_invoke$arity$3(cljs.core.filter,predicate,coll);
});
/**
 * Return new collection of same type as COLL with only elements whose values satisfy PREDICATE.
 */
norns_index.utils.core.keep_vals_in_coll = (function norns_index$utils$core$keep_vals_in_coll(coll,predicate){
if((!(cljs.core.coll_QMARK_(coll)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Argument `coll` is not a collection",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ex-type","ex-type",1714248683),new cljs.core.Keyword(null,"unexpected-type","unexpected-type",-1389407954),new cljs.core.Keyword(null,"coll","coll",1647737163),coll], null));
} else {
}

var predicate__$1 = ((cljs.core.map_QMARK_(coll))?cljs.core.comp.cljs$core$IFn$_invoke$arity$2(predicate,cljs.core.val):predicate);
return norns_index.utils.core.maintain.cljs$core$IFn$_invoke$arity$3(cljs.core.filter,predicate__$1,coll);
});
/**
 * Return new collection of same type as COLL with elements satisfying PREDICATE removed.
 */
norns_index.utils.core.remove_in_coll = (function norns_index$utils$core$remove_in_coll(coll,predicate){
return norns_index.utils.core.keep_in_coll(coll,cljs.core.complement(predicate));
});
/**
 * Return new collection of same type as COLL with elements whose values satisfy PREDICATE removed.
 */
norns_index.utils.core.remove_vals_in_coll = (function norns_index$utils$core$remove_vals_in_coll(coll,predicate){
return norns_index.utils.core.keep_vals_in_coll(coll,cljs.core.complement(predicate));
});
norns_index.utils.core.remove_nils = (function norns_index$utils$core$remove_nils(coll){
return norns_index.utils.core.remove_vals_in_coll(coll,cljs.core.nil_QMARK_);
});
norns_index.utils.core.remove_falsy_zero_or_empty = (function norns_index$utils$core$remove_falsy_zero_or_empty(coll){
return norns_index.utils.core.remove_vals_in_coll(coll,(function (p1__54274_SHARP_){
return (((!(cljs.core.boolean$(p1__54274_SHARP_)))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),p1__54274_SHARP_)) || (((cljs.core.coll_QMARK_(p1__54274_SHARP_)) && (cljs.core.empty_QMARK_(p1__54274_SHARP_)))));
}));
});
/**
 * Recursively merges MAPS.
 *   Like `merge` but for nested maps.
 * 
 *   Gotten from http://dnaeon.github.io/recursively-merging-maps-in-clojure/
 * 
 *   See also https://cljdoc.org/d/clojure-deep-merge/clojure-deep-merge/0.0.1/api/deep.merge
 */
norns_index.utils.core.deep_merge = (function norns_index$utils$core$deep_merge(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54292 = arguments.length;
var i__4737__auto___54293 = (0);
while(true){
if((i__4737__auto___54293 < len__4736__auto___54292)){
args__4742__auto__.push((arguments[i__4737__auto___54293]));

var G__54294 = (i__4737__auto___54293 + (1));
i__4737__auto___54293 = G__54294;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return norns_index.utils.core.deep_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(norns_index.utils.core.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
var m = (function() { 
var norns_index$utils$core$m__delegate = function (xs){
if(cljs.core.truth_(cljs.core.some((function (p1__54275_SHARP_){
return ((cljs.core.map_QMARK_(p1__54275_SHARP_)) && ((!(cljs.core.record_QMARK_(p1__54275_SHARP_)))));
}),xs))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,norns_index$utils$core$m,xs);
} else {
return cljs.core.last(xs);
}
};
var norns_index$utils$core$m = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__54295__i = 0, G__54295__a = new Array(arguments.length -  0);
while (G__54295__i < G__54295__a.length) {G__54295__a[G__54295__i] = arguments[G__54295__i + 0]; ++G__54295__i;}
  xs = new cljs.core.IndexedSeq(G__54295__a,0,null);
} 
return norns_index$utils$core$m__delegate.call(this,xs);};
norns_index$utils$core$m.cljs$lang$maxFixedArity = 0;
norns_index$utils$core$m.cljs$lang$applyTo = (function (arglist__54296){
var xs = cljs.core.seq(arglist__54296);
return norns_index$utils$core$m__delegate(xs);
});
norns_index$utils$core$m.cljs$core$IFn$_invoke$arity$variadic = norns_index$utils$core$m__delegate;
return norns_index$utils$core$m;
})()
;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(m,maps);
}));

(norns_index.utils.core.deep_merge.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(norns_index.utils.core.deep_merge.cljs$lang$applyTo = (function (seq54276){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54276));
}));

/**
 * Recursively merges MAPS and and for deepest shared level use MERGE-FN.
 * Like `merge-into` but for nested maps.
 */
norns_index.utils.core.deep_merge_with = (function norns_index$utils$core$deep_merge_with(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54297 = arguments.length;
var i__4737__auto___54298 = (0);
while(true){
if((i__4737__auto___54298 < len__4736__auto___54297)){
args__4742__auto__.push((arguments[i__4737__auto___54298]));

var G__54299 = (i__4737__auto___54298 + (1));
i__4737__auto___54298 = G__54299;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return norns_index.utils.core.deep_merge_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(norns_index.utils.core.deep_merge_with.cljs$core$IFn$_invoke$arity$variadic = (function (merge_fn,maps){
var m = (function() { 
var norns_index$utils$core$m__delegate = function (xs){
if(cljs.core.every_QMARK_((function (p1__54277_SHARP_){
return ((cljs.core.map_QMARK_(p1__54277_SHARP_)) && ((!(cljs.core.record_QMARK_(p1__54277_SHARP_)))));
}),xs)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,norns_index$utils$core$m,xs);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(merge_fn,xs);
}
};
var norns_index$utils$core$m = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__54300__i = 0, G__54300__a = new Array(arguments.length -  0);
while (G__54300__i < G__54300__a.length) {G__54300__a[G__54300__i] = arguments[G__54300__i + 0]; ++G__54300__i;}
  xs = new cljs.core.IndexedSeq(G__54300__a,0,null);
} 
return norns_index$utils$core$m__delegate.call(this,xs);};
norns_index$utils$core$m.cljs$lang$maxFixedArity = 0;
norns_index$utils$core$m.cljs$lang$applyTo = (function (arglist__54301){
var xs = cljs.core.seq(arglist__54301);
return norns_index$utils$core$m__delegate(xs);
});
norns_index$utils$core$m.cljs$core$IFn$_invoke$arity$variadic = norns_index$utils$core$m__delegate;
return norns_index$utils$core$m;
})()
;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(m,maps);
}));

(norns_index.utils.core.deep_merge_with.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(norns_index.utils.core.deep_merge_with.cljs$lang$applyTo = (function (seq54278){
var G__54279 = cljs.core.first(seq54278);
var seq54278__$1 = cljs.core.next(seq54278);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54279,seq54278__$1);
}));

/**
 * Recursively merges MAPS and for deepest level use MERGE-FN.
 *   Contrarily to `causal-struct.utils.core/deep-merge-with`, doesn't test the level depth is shared amongst all MAPS.
 *   Like `merge-into` but for nested maps.
 */
norns_index.utils.core.deep_merge_with_ungarded = (function norns_index$utils$core$deep_merge_with_ungarded(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54302 = arguments.length;
var i__4737__auto___54303 = (0);
while(true){
if((i__4737__auto___54303 < len__4736__auto___54302)){
args__4742__auto__.push((arguments[i__4737__auto___54303]));

var G__54304 = (i__4737__auto___54303 + (1));
i__4737__auto___54303 = G__54304;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return norns_index.utils.core.deep_merge_with_ungarded.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(norns_index.utils.core.deep_merge_with_ungarded.cljs$core$IFn$_invoke$arity$variadic = (function (merge_fn,maps){
var m = (function() { 
var norns_index$utils$core$m__delegate = function (xs){
if(cljs.core.truth_(cljs.core.some((function (p1__54280_SHARP_){
return ((cljs.core.map_QMARK_(p1__54280_SHARP_)) && ((!(cljs.core.record_QMARK_(p1__54280_SHARP_)))));
}),xs))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,norns_index$utils$core$m,xs);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(merge_fn,xs);
}
};
var norns_index$utils$core$m = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__54306__i = 0, G__54306__a = new Array(arguments.length -  0);
while (G__54306__i < G__54306__a.length) {G__54306__a[G__54306__i] = arguments[G__54306__i + 0]; ++G__54306__i;}
  xs = new cljs.core.IndexedSeq(G__54306__a,0,null);
} 
return norns_index$utils$core$m__delegate.call(this,xs);};
norns_index$utils$core$m.cljs$lang$maxFixedArity = 0;
norns_index$utils$core$m.cljs$lang$applyTo = (function (arglist__54307){
var xs = cljs.core.seq(arglist__54307);
return norns_index$utils$core$m__delegate(xs);
});
norns_index$utils$core$m.cljs$core$IFn$_invoke$arity$variadic = norns_index$utils$core$m__delegate;
return norns_index$utils$core$m;
})()
;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(m,maps);
}));

(norns_index.utils.core.deep_merge_with_ungarded.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(norns_index.utils.core.deep_merge_with_ungarded.cljs$lang$applyTo = (function (seq54281){
var G__54282 = cljs.core.first(seq54281);
var seq54281__$1 = cljs.core.next(seq54281);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54282,seq54281__$1);
}));

norns_index.utils.core.flattened_map_key = (function norns_index$utils$core$flattened_map_key(prefix,k){
if((prefix == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null);
} else {
if(cljs.core.vector_QMARK_(prefix)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix,k);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prefix,k], null);

}
}
});
norns_index.utils.core.flatten_map_kvs = (function norns_index$utils$core$flatten_map_kvs(var_args){
var G__54284 = arguments.length;
switch (G__54284) {
case 1:
return norns_index.utils.core.flatten_map_kvs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return norns_index.utils.core.flatten_map_kvs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(norns_index.utils.core.flatten_map_kvs.cljs$core$IFn$_invoke$arity$1 = (function (map){
return norns_index.utils.core.flatten_map_kvs.cljs$core$IFn$_invoke$arity$2(map,null);
}));

(norns_index.utils.core.flatten_map_kvs.cljs$core$IFn$_invoke$arity$2 = (function (map,prefix){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (memo,p__54285){
var vec__54286 = p__54285;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54286,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54286,(1),null);
if(cljs.core.map_QMARK_(v)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(memo,norns_index.utils.core.flatten_map_kvs.cljs$core$IFn$_invoke$arity$2(v,norns_index.utils.core.flattened_map_key(prefix,k)));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(memo,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [norns_index.utils.core.flattened_map_key(prefix,k),v], null));
}
}),cljs.core.PersistentVector.EMPTY,map);
}));

(norns_index.utils.core.flatten_map_kvs.cljs$lang$maxFixedArity = 2);

norns_index.utils.core.flatten_map = (function norns_index$utils$core$flatten_map(m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,norns_index.utils.core.flatten_map_kvs.cljs$core$IFn$_invoke$arity$1(m));
});
/**
 * Returns true if O is an atom.
 */
norns_index.utils.core.atom_QMARK_ = (function norns_index$utils$core$atom_QMARK_(o){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(o),cljs.core.Atom);
});
/**
 * Recursively merges collection of maps MERGES into ATOM.
 */
norns_index.utils.core.multi_merge_BANG_ = (function norns_index$utils$core$multi_merge_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54309 = arguments.length;
var i__4737__auto___54310 = (0);
while(true){
if((i__4737__auto___54310 < len__4736__auto___54309)){
args__4742__auto__.push((arguments[i__4737__auto___54310]));

var G__54311 = (i__4737__auto___54310 + (1));
i__4737__auto___54310 = G__54311;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return norns_index.utils.core.multi_merge_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(norns_index.utils.core.multi_merge_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (atom,merges){
var merged = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(norns_index.utils.core.deep_merge,merges);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(atom,(function (a,merged__$1){
return norns_index.utils.core.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,merged__$1], 0));
}),merged);
}));

(norns_index.utils.core.multi_merge_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(norns_index.utils.core.multi_merge_BANG_.cljs$lang$applyTo = (function (seq54289){
var G__54290 = cljs.core.first(seq54289);
var seq54289__$1 = cljs.core.next(seq54289);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54290,seq54289__$1);
}));


//# sourceMappingURL=norns_index.utils.core.js.map
