goog.provide('graphql_query.core');
graphql_query.core._STAR_kw__GT_gql_name_STAR_ = cljs.core.name;
graphql_query.core.kw_arg__GT_str = (function graphql_query$core$kw_arg__GT_str(kw){
return graphql_query.core._STAR_kw__GT_gql_name_STAR_.call(null,kw);
});

/**
 * Protocol responsible for query arguments' formatting to string.
 *   Has separate implementations for general data types in cljs and clj.
 * @interface
 */
graphql_query.core.ArgumentFormatter = function(){};

var graphql_query$core$ArgumentFormatter$arg__GT_str$dyn_43260 = (function (arg){
var x__4428__auto__ = (((arg == null))?null:arg);
var m__4429__auto__ = (graphql_query.core.arg__GT_str[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(arg) : m__4429__auto__.call(null,arg));
} else {
var m__4426__auto__ = (graphql_query.core.arg__GT_str["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(arg) : m__4426__auto__.call(null,arg));
} else {
throw cljs.core.missing_protocol("ArgumentFormatter.arg->str",arg);
}
}
});
graphql_query.core.arg__GT_str = (function graphql_query$core$arg__GT_str(arg){
if((((!((arg == null)))) && ((!((arg.graphql_query$core$ArgumentFormatter$arg__GT_str$arity$1 == null)))))){
return arg.graphql_query$core$ArgumentFormatter$arg__GT_str$arity$1(arg);
} else {
return graphql_query$core$ArgumentFormatter$arg__GT_str$dyn_43260(arg);
}
});

/**
 * Given a map of query arguments, formats them and concatenates to string.
 * 
 *   E.g. (arguments->str {:id 1 :type "human"}) => id:1,type:"human"
 */
graphql_query.core.arguments__GT_str = (function graphql_query$core$arguments__GT_str(args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.flatten(cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",(function (){var iter__4529__auto__ = (function graphql_query$core$arguments__GT_str_$_iter__42953(s__42954){
return (new cljs.core.LazySeq(null,(function (){
var s__42954__$1 = s__42954;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__42954__$1);
if(temp__5735__auto__){
var s__42954__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42954__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__42954__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__42957 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__42956 = (0);
while(true){
if((i__42956 < size__4528__auto__)){
var vec__42966 = cljs.core._nth(c__4527__auto__,i__42956);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42966,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42966,(1),null);
cljs.core.chunk_append(b__42957,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [graphql_query.core._STAR_kw__GT_gql_name_STAR_.call(null,k),":",graphql_query.core.arg__GT_str(v)], null));

var G__43278 = (i__42956 + (1));
i__42956 = G__43278;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42957),graphql_query$core$arguments__GT_str_$_iter__42953(cljs.core.chunk_rest(s__42954__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42957),null);
}
} else {
var vec__42977 = cljs.core.first(s__42954__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42977,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42977,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [graphql_query.core._STAR_kw__GT_gql_name_STAR_.call(null,k),":",graphql_query.core.arg__GT_str(v)], null),graphql_query$core$arguments__GT_str_$_iter__42953(cljs.core.rest(s__42954__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(args);
})())));
});
graphql_query.core.escape_chars = (function graphql_query$core$escape_chars(s){
return clojure.string.escape(s,new cljs.core.PersistentArrayMap(null, 1, ["\"","\\\""], null));
});
/**
 * Given something that is sequential format it to be like a JSON array.
 */
graphql_query.core.sequential__GT_str = (function graphql_query$core$sequential__GT_str(arg){
return ["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",cljs.core.map.cljs$core$IFn$_invoke$arity$2(graphql_query.core.arg__GT_str,arg)))),"]"].join('');
});
goog.object.set(graphql_query.core.ArgumentFormatter,"null",true);

goog.object.set(graphql_query.core.arg__GT_str,"null",(function (arg){
return "null";
}));

(cljs.core.IndexedSeq.prototype.graphql_query$core$ArgumentFormatter$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.IndexedSeq.prototype.graphql_query$core$ArgumentFormatter$arg__GT_str$arity$1 = (function (arg){
var arg__$1 = this;
return graphql_query.core.sequential__GT_str(arg__$1);
}));

(goog.date.UtcDateTime.prototype.graphql_query$core$ArgumentFormatter$ = cljs.core.PROTOCOL_SENTINEL);

(goog.date.UtcDateTime.prototype.graphql_query$core$ArgumentFormatter$arg__GT_str$arity$1 = (function (arg){
var arg__$1 = this;
return arg__$1.getTime();
}));

(cljs.core.LazySeq.prototype.graphql_query$core$ArgumentFormatter$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.graphql_query$core$ArgumentFormatter$arg__GT_str$arity$1 = (function (arg){
var arg__$1 = this;
return graphql_query.core.sequential__GT_str(arg__$1);
}));

goog.object.set(graphql_query.core.ArgumentFormatter,"boolean",true);

goog.object.set(graphql_query.core.arg__GT_str,"boolean",(function (arg){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg);
}));

goog.object.set(graphql_query.core.ArgumentFormatter,"object",true);

goog.object.set(graphql_query.core.arg__GT_str,"object",(function (arg){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg);
}));

goog.object.set(graphql_query.core.ArgumentFormatter,"number",true);

goog.object.set(graphql_query.core.arg__GT_str,"number",(function (arg){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg);
}));

(cljs.core.PersistentHashMap.prototype.graphql_query$core$ArgumentFormatter$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashMap.prototype.graphql_query$core$ArgumentFormatter$arg__GT_str$arity$1 = (function (arg){
var arg__$1 = this;
return ["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_query.core.arguments__GT_str(arg__$1)),"}"].join('');
}));

(cljs.core.PersistentVector.prototype.graphql_query$core$ArgumentFormatter$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.graphql_query$core$ArgumentFormatter$arg__GT_str$arity$1 = (function (arg){
var arg__$1 = this;
return graphql_query.core.sequential__GT_str(arg__$1);
}));

goog.object.set(graphql_query.core.ArgumentFormatter,"string",true);

goog.object.set(graphql_query.core.arg__GT_str,"string",(function (arg){
return ["\"",graphql_query.core.escape_chars(arg),"\""].join('');
}));

(cljs.core.Keyword.prototype.graphql_query$core$ArgumentFormatter$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.graphql_query$core$ArgumentFormatter$arg__GT_str$arity$1 = (function (arg){
var arg__$1 = this;
return graphql_query.core.kw_arg__GT_str(arg__$1);
}));

(cljs.core.PersistentArrayMap.prototype.graphql_query$core$ArgumentFormatter$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.graphql_query$core$ArgumentFormatter$arg__GT_str$arity$1 = (function (arg){
var arg__$1 = this;
return ["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_query.core.arguments__GT_str(arg__$1)),"}"].join('');
}));

(goog.date.DateTime.prototype.graphql_query$core$ArgumentFormatter$ = cljs.core.PROTOCOL_SENTINEL);

(goog.date.DateTime.prototype.graphql_query$core$ArgumentFormatter$arg__GT_str$arity$1 = (function (arg){
var arg__$1 = this;
return arg__$1.getTime();
}));

(goog.date.Date.prototype.graphql_query$core$ArgumentFormatter$ = cljs.core.PROTOCOL_SENTINEL);

(goog.date.Date.prototype.graphql_query$core$ArgumentFormatter$arg__GT_str$arity$1 = (function (arg){
var arg__$1 = this;
return arg__$1.getTime();
}));

(cljs.core.List.prototype.graphql_query$core$ArgumentFormatter$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.List.prototype.graphql_query$core$ArgumentFormatter$arg__GT_str$arity$1 = (function (arg){
var arg__$1 = this;
return graphql_query.core.sequential__GT_str(arg__$1);
}));
/**
 * Converts namespaced meta field keyword to graphql format, e.g :meta/typename -> __typename
 */
graphql_query.core.meta_field__GT_str = (function graphql_query$core$meta_field__GT_str(meta_field){
return ["__",cljs.core.name(meta_field)].join('');
});
/**
 * Given a spec conformed vector of query fields (and possibly nested fields),
 *   concatenates them to string, keeping nested structures intact.
 */
graphql_query.core.fields__GT_str = (function graphql_query$core$fields__GT_str(fields){
if((fields instanceof cljs.core.Keyword)){
return ["...",cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_query.core._STAR_kw__GT_gql_name_STAR_.call(null,cljs.core.name(fields)))].join('');
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",(function (){var iter__4529__auto__ = (function graphql_query$core$fields__GT_str_$_iter__43072(s__43073){
return (new cljs.core.LazySeq(null,(function (){
var s__43073__$1 = s__43073;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__43073__$1);
if(temp__5735__auto__){
var s__43073__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__43073__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__43073__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__43075 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__43074 = (0);
while(true){
if((i__43074 < size__4528__auto__)){
var vec__43085 = cljs.core._nth(c__4527__auto__,i__43074);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43085,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43085,(1),null);
cljs.core.chunk_append(b__43075,(function (){var pred__43089 = cljs.core._EQ_;
var expr__43090 = type;
if(cljs.core.truth_((pred__43089.cljs$core$IFn$_invoke$arity$2 ? pred__43089.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("graphql-query","meta-field","graphql-query/meta-field",-1316086536),expr__43090) : pred__43089.call(null,new cljs.core.Keyword("graphql-query","meta-field","graphql-query/meta-field",-1316086536),expr__43090)))){
return graphql_query.core.meta_field__GT_str(value);
} else {
if(cljs.core.truth_((pred__43089.cljs$core$IFn$_invoke$arity$2 ? pred__43089.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("graphql-query","field","graphql-query/field",1263918872),expr__43090) : pred__43089.call(null,new cljs.core.Keyword("graphql-query","field","graphql-query/field",1263918872),expr__43090)))){
return graphql_query.core._STAR_kw__GT_gql_name_STAR_.call(null,value);
} else {
if(cljs.core.truth_((pred__43089.cljs$core$IFn$_invoke$arity$2 ? pred__43089.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("graphql-query","field-with-args","graphql-query/field-with-args",346219238),expr__43090) : pred__43089.call(null,new cljs.core.Keyword("graphql-query","field-with-args","graphql-query/field-with-args",346219238),expr__43090)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_query.core._STAR_kw__GT_gql_name_STAR_.call(null,new cljs.core.Keyword("graphql-query","field","graphql-query/field",1263918872).cljs$core$IFn$_invoke$arity$1(value))),(cljs.core.truth_(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(value))?["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_query.core.arguments__GT_str(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(value))),")"].join(''):null)].join('');
} else {
if(cljs.core.truth_((pred__43089.cljs$core$IFn$_invoke$arity$2 ? pred__43089.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("graphql-query","field-with-data","graphql-query/field-with-data",1563015933),expr__43090) : pred__43089.call(null,new cljs.core.Keyword("graphql-query","field-with-data","graphql-query/field-with-data",1563015933),expr__43090)))){
return [(function (){var temp__5735__auto____$1 = graphql_query.core._STAR_kw__GT_gql_name_STAR_.call(null,new cljs.core.Keyword("field","alias","field/alias",-2112144072).cljs$core$IFn$_invoke$arity$1(value));
if(cljs.core.truth_(temp__5735__auto____$1)){
var alias = temp__5735__auto____$1;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),":"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__43107 = new cljs.core.Keyword("field","data","field/data",124985413).cljs$core$IFn$_invoke$arity$1(value);
return (graphql_query.core.fields__GT_str.cljs$core$IFn$_invoke$arity$1 ? graphql_query.core.fields__GT_str.cljs$core$IFn$_invoke$arity$1(G__43107) : graphql_query.core.fields__GT_str.call(null,G__43107));
})())].join('');
} else {
if(cljs.core.truth_((pred__43089.cljs$core$IFn$_invoke$arity$2 ? pred__43089.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("graphql-query","nested-field","graphql-query/nested-field",1694864949),expr__43090) : pred__43089.call(null,new cljs.core.Keyword("graphql-query","nested-field","graphql-query/nested-field",1694864949),expr__43090)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_query.core._STAR_kw__GT_gql_name_STAR_.call(null,new cljs.core.Keyword("graphql-query","nested-field-root","graphql-query/nested-field-root",-957564851).cljs$core$IFn$_invoke$arity$1(value))),(cljs.core.truth_(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(value))?["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_query.core.arguments__GT_str(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(value))),")"].join(''):null),"{",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__43112 = new cljs.core.Keyword("graphql-query","nested-field-children","graphql-query/nested-field-children",-848298602).cljs$core$IFn$_invoke$arity$1(value);
return (graphql_query.core.fields__GT_str.cljs$core$IFn$_invoke$arity$1 ? graphql_query.core.fields__GT_str.cljs$core$IFn$_invoke$arity$1(G__43112) : graphql_query.core.fields__GT_str.call(null,G__43112));
})()),"}"].join('');
} else {
if(cljs.core.truth_((pred__43089.cljs$core$IFn$_invoke$arity$2 ? pred__43089.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("graphql-query","nested-field-arg-only","graphql-query/nested-field-arg-only",679548765),expr__43090) : pred__43089.call(null,new cljs.core.Keyword("graphql-query","nested-field-arg-only","graphql-query/nested-field-arg-only",679548765),expr__43090)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_query.core._STAR_kw__GT_gql_name_STAR_.call(null,new cljs.core.Keyword("graphql-query","nested-field-root","graphql-query/nested-field-root",-957564851).cljs$core$IFn$_invoke$arity$1(value))),["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_query.core.arguments__GT_str(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(value))),")"].join('')].join('');
} else {
if(cljs.core.truth_((pred__43089.cljs$core$IFn$_invoke$arity$2 ? pred__43089.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fragments","fragments",1456109445),expr__43090) : pred__43089.call(null,new cljs.core.Keyword(null,"fragments","fragments",1456109445),expr__43090)))){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__43074,pred__43089,expr__43090,vec__43085,type,value,c__4527__auto__,size__4528__auto__,b__43075,s__43073__$2,temp__5735__auto__){
return (function (p1__43062_SHARP_){
return ["...",cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_query.core._STAR_kw__GT_gql_name_STAR_.call(null,cljs.core.name(p1__43062_SHARP_)))].join('');
});})(i__43074,pred__43089,expr__43090,vec__43085,type,value,c__4527__auto__,size__4528__auto__,b__43075,s__43073__$2,temp__5735__auto__))
,value));
} else {
if(cljs.core.truth_((pred__43089.cljs$core$IFn$_invoke$arity$2 ? pred__43089.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("graphql-query","nested-field-with-fragments","graphql-query/nested-field-with-fragments",2105204608),expr__43090) : pred__43089.call(null,new cljs.core.Keyword("graphql-query","nested-field-with-fragments","graphql-query/nested-field-with-fragments",2105204608),expr__43090)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_query.core._STAR_kw__GT_gql_name_STAR_.call(null,new cljs.core.Keyword("graphql-query","nested-field-root","graphql-query/nested-field-root",-957564851).cljs$core$IFn$_invoke$arity$1(value))),"{",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__43074,pred__43089,expr__43090,vec__43085,type,value,c__4527__auto__,size__4528__auto__,b__43075,s__43073__$2,temp__5735__auto__){
return (function (p1__43064_SHARP_){
return ["...",cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_query.core._STAR_kw__GT_gql_name_STAR_.call(null,cljs.core.name(p1__43064_SHARP_)))].join('');
});})(i__43074,pred__43089,expr__43090,vec__43085,type,value,c__4527__auto__,size__4528__auto__,b__43075,s__43073__$2,temp__5735__auto__))
,new cljs.core.Keyword(null,"fragments","fragments",1456109445).cljs$core$IFn$_invoke$arity$1(value))),"}"].join('');
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__43090)].join('')));
}
}
}
}
}
}
}
}
})());

var G__43373 = (i__43074 + (1));
i__43074 = G__43373;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43075),graphql_query$core$fields__GT_str_$_iter__43072(cljs.core.chunk_rest(s__43073__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43075),null);
}
} else {
var vec__43129 = cljs.core.first(s__43073__$2);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43129,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43129,(1),null);
return cljs.core.cons((function (){var pred__43133 = cljs.core._EQ_;
var expr__43134 = type;
if(cljs.core.truth_((pred__43133.cljs$core$IFn$_invoke$arity$2 ? pred__43133.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("graphql-query","meta-field","graphql-query/meta-field",-1316086536),expr__43134) : pred__43133.call(null,new cljs.core.Keyword("graphql-query","meta-field","graphql-query/meta-field",-1316086536),expr__43134)))){
return graphql_query.core.meta_field__GT_str(value);
} else {
if(cljs.core.truth_((pred__43133.cljs$core$IFn$_invoke$arity$2 ? pred__43133.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("graphql-query","field","graphql-query/field",1263918872),expr__43134) : pred__43133.call(null,new cljs.core.Keyword("graphql-query","field","graphql-query/field",1263918872),expr__43134)))){
return graphql_query.core._STAR_kw__GT_gql_name_STAR_.call(null,value);
} else {
if(cljs.core.truth_((pred__43133.cljs$core$IFn$_invoke$arity$2 ? pred__43133.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("graphql-query","field-with-args","graphql-query/field-with-args",346219238),expr__43134) : pred__43133.call(null,new cljs.core.Keyword("graphql-query","field-with-args","graphql-query/field-with-args",346219238),expr__43134)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_query.core._STAR_kw__GT_gql_name_STAR_.call(null,new cljs.core.Keyword("graphql-query","field","graphql-query/field",1263918872).cljs$core$IFn$_invoke$arity$1(value))),(cljs.core.truth_(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(value))?["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_query.core.arguments__GT_str(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(value))),")"].join(''):null)].join('');
} else {
if(cljs.core.truth_((pred__43133.cljs$core$IFn$_invoke$arity$2 ? pred__43133.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("graphql-query","field-with-data","graphql-query/field-with-data",1563015933),expr__43134) : pred__43133.call(null,new cljs.core.Keyword("graphql-query","field-with-data","graphql-query/field-with-data",1563015933),expr__43134)))){
return [(function (){var temp__5735__auto____$1 = graphql_query.core._STAR_kw__GT_gql_name_STAR_.call(null,new cljs.core.Keyword("field","alias","field/alias",-2112144072).cljs$core$IFn$_invoke$arity$1(value));
if(cljs.core.truth_(temp__5735__auto____$1)){
var alias = temp__5735__auto____$1;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),":"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__43140 = new cljs.core.Keyword("field","data","field/data",124985413).cljs$core$IFn$_invoke$arity$1(value);
return (graphql_query.core.fields__GT_str.cljs$core$IFn$_invoke$arity$1 ? graphql_query.core.fields__GT_str.cljs$core$IFn$_invoke$arity$1(G__43140) : graphql_query.core.fields__GT_str.call(null,G__43140));
})())].join('');
} else {
if(cljs.core.truth_((pred__43133.cljs$core$IFn$_invoke$arity$2 ? pred__43133.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("graphql-query","nested-field","graphql-query/nested-field",1694864949),expr__43134) : pred__43133.call(null,new cljs.core.Keyword("graphql-query","nested-field","graphql-query/nested-field",1694864949),expr__43134)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_query.core._STAR_kw__GT_gql_name_STAR_.call(null,new cljs.core.Keyword("graphql-query","nested-field-root","graphql-query/nested-field-root",-957564851).cljs$core$IFn$_invoke$arity$1(value))),(cljs.core.truth_(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(value))?["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_query.core.arguments__GT_str(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(value))),")"].join(''):null),"{",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__43147 = new cljs.core.Keyword("graphql-query","nested-field-children","graphql-query/nested-field-children",-848298602).cljs$core$IFn$_invoke$arity$1(value);
return (graphql_query.core.fields__GT_str.cljs$core$IFn$_invoke$arity$1 ? graphql_query.core.fields__GT_str.cljs$core$IFn$_invoke$arity$1(G__43147) : graphql_query.core.fields__GT_str.call(null,G__43147));
})()),"}"].join('');
} else {
if(cljs.core.truth_((pred__43133.cljs$core$IFn$_invoke$arity$2 ? pred__43133.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("graphql-query","nested-field-arg-only","graphql-query/nested-field-arg-only",679548765),expr__43134) : pred__43133.call(null,new cljs.core.Keyword("graphql-query","nested-field-arg-only","graphql-query/nested-field-arg-only",679548765),expr__43134)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_query.core._STAR_kw__GT_gql_name_STAR_.call(null,new cljs.core.Keyword("graphql-query","nested-field-root","graphql-query/nested-field-root",-957564851).cljs$core$IFn$_invoke$arity$1(value))),["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_query.core.arguments__GT_str(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(value))),")"].join('')].join('');
} else {
if(cljs.core.truth_((pred__43133.cljs$core$IFn$_invoke$arity$2 ? pred__43133.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fragments","fragments",1456109445),expr__43134) : pred__43133.call(null,new cljs.core.Keyword(null,"fragments","fragments",1456109445),expr__43134)))){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (pred__43133,expr__43134,vec__43129,type,value,s__43073__$2,temp__5735__auto__){
return (function (p1__43062_SHARP_){
return ["...",cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_query.core._STAR_kw__GT_gql_name_STAR_.call(null,cljs.core.name(p1__43062_SHARP_)))].join('');
});})(pred__43133,expr__43134,vec__43129,type,value,s__43073__$2,temp__5735__auto__))
,value));
} else {
if(cljs.core.truth_((pred__43133.cljs$core$IFn$_invoke$arity$2 ? pred__43133.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("graphql-query","nested-field-with-fragments","graphql-query/nested-field-with-fragments",2105204608),expr__43134) : pred__43133.call(null,new cljs.core.Keyword("graphql-query","nested-field-with-fragments","graphql-query/nested-field-with-fragments",2105204608),expr__43134)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_query.core._STAR_kw__GT_gql_name_STAR_.call(null,new cljs.core.Keyword("graphql-query","nested-field-root","graphql-query/nested-field-root",-957564851).cljs$core$IFn$_invoke$arity$1(value))),"{",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (pred__43133,expr__43134,vec__43129,type,value,s__43073__$2,temp__5735__auto__){
return (function (p1__43064_SHARP_){
return ["...",cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_query.core._STAR_kw__GT_gql_name_STAR_.call(null,cljs.core.name(p1__43064_SHARP_)))].join('');
});})(pred__43133,expr__43134,vec__43129,type,value,s__43073__$2,temp__5735__auto__))
,new cljs.core.Keyword(null,"fragments","fragments",1456109445).cljs$core$IFn$_invoke$arity$1(value))),"}"].join('');
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__43134)].join('')));
}
}
}
}
}
}
}
}
})(),graphql_query$core$fields__GT_str_$_iter__43072(cljs.core.rest(s__43073__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(fields);
})()));
}
});
/**
 * Given a vector of variable maps, formats them and concatenates to string.
 * 
 *   E.g. (variables->str [{:variable/name "id" :variable/type :Int}]) => "$id: Int"
 */
graphql_query.core.variables__GT_str = (function graphql_query$core$variables__GT_str(variables){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",(function (){var iter__4529__auto__ = (function graphql_query$core$variables__GT_str_$_iter__43153(s__43154){
return (new cljs.core.LazySeq(null,(function (){
var s__43154__$1 = s__43154;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__43154__$1);
if(temp__5735__auto__){
var s__43154__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__43154__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__43154__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__43156 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__43155 = (0);
while(true){
if((i__43155 < size__4528__auto__)){
var map__43159 = cljs.core._nth(c__4527__auto__,i__43155);
var map__43159__$1 = (((((!((map__43159 == null))))?(((((map__43159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43159.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43159):map__43159);
var var_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43159__$1,new cljs.core.Keyword("variable","name","variable/name",811639477));
var var_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43159__$1,new cljs.core.Keyword("variable","type","variable/type",-1953194216));
var var_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43159__$1,new cljs.core.Keyword("variable","default","variable/default",-1073804668));
cljs.core.chunk_append(b__43156,[cljs.core.name(var_name),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_query.core._STAR_kw__GT_gql_name_STAR_.call(null,var_type)),(cljs.core.truth_(var_default)?["=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_query.core.arg__GT_str(var_default))].join(''):null)].join(''));

var G__43437 = (i__43155 + (1));
i__43155 = G__43437;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43156),graphql_query$core$variables__GT_str_$_iter__43153(cljs.core.chunk_rest(s__43154__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43156),null);
}
} else {
var map__43162 = cljs.core.first(s__43154__$2);
var map__43162__$1 = (((((!((map__43162 == null))))?(((((map__43162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43162.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43162):map__43162);
var var_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43162__$1,new cljs.core.Keyword("variable","name","variable/name",811639477));
var var_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43162__$1,new cljs.core.Keyword("variable","type","variable/type",-1953194216));
var var_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43162__$1,new cljs.core.Keyword("variable","default","variable/default",-1073804668));
return cljs.core.cons([cljs.core.name(var_name),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_query.core._STAR_kw__GT_gql_name_STAR_.call(null,var_type)),(cljs.core.truth_(var_default)?["=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_query.core.arg__GT_str(var_default))].join(''):null)].join(''),graphql_query$core$variables__GT_str_$_iter__43153(cljs.core.rest(s__43154__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(variables);
})()));
});
/**
 * Given a fragment map, formats it and concatenates to string,
 */
graphql_query.core.fragment__GT_str = (function graphql_query$core$fragment__GT_str(fragment){
var fields = ["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_query.core.fields__GT_str(new cljs.core.Keyword("fragment","fields","fragment/fields",-429235046).cljs$core$IFn$_invoke$arity$1(fragment))),"}"].join('');
return ["fragment ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_query.core._STAR_kw__GT_gql_name_STAR_.call(null,cljs.core.name(new cljs.core.Keyword("fragment","name","fragment/name",1216787065).cljs$core$IFn$_invoke$arity$1(fragment))))," on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_query.core._STAR_kw__GT_gql_name_STAR_.call(null,new cljs.core.Keyword("fragment","type","fragment/type",-1548562724).cljs$core$IFn$_invoke$arity$1(fragment))),fields].join('');
});
/**
 * Include fields if fields is not empty or is a keyword.
 * fields could be nil or empty for operations that return a scalar.
 */
graphql_query.core.include_fields_QMARK_ = (function graphql_query$core$include_fields_QMARK_(fields){
return (((fields instanceof cljs.core.Keyword)) || ((!(cljs.core.empty_QMARK_(fields)))));
});
if((typeof graphql_query !== 'undefined') && (typeof graphql_query.core !== 'undefined') && (typeof graphql_query.core.__GT_query_str !== 'undefined')){
} else {
graphql_query.core.__GT_query_str = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__43172 = cljs.core.get_global_hierarchy;
return (fexpr__43172.cljs$core$IFn$_invoke$arity$0 ? fexpr__43172.cljs$core$IFn$_invoke$arity$0() : fexpr__43172.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("graphql-query.core","->query-str"),(function (query){
if(cljs.core.vector_QMARK_(query)){
return cljs.core.first(query);
} else {
if(cljs.core.truth_(new cljs.core.Keyword("graphql-query","query","graphql-query/query",206075446).cljs$core$IFn$_invoke$arity$1(query))){
return new cljs.core.Keyword("graphql-query","query","graphql-query/query",206075446);
} else {
if(cljs.core.truth_(new cljs.core.Keyword("graphql-query","query-with-data","graphql-query/query-with-data",-1538966023).cljs$core$IFn$_invoke$arity$1(query))){
return new cljs.core.Keyword("graphql-query","query-with-data","graphql-query/query-with-data",-1538966023);
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);

}
}
}
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
graphql_query.core.__GT_query_str.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("graphql-query","query-vector","graphql-query/query-vector",-1817956937),(function (p__43174){
var vec__43177 = p__43174;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43177,(0),null);
var query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43177,(1),null);

return ["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",cljs.core.map.cljs$core$IFn$_invoke$arity$2(graphql_query.core.__GT_query_str,query)))),"}"].join('');
}));
graphql_query.core.__GT_query_str.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("graphql-query","query-def","graphql-query/query-def",-1841092046),(function (p__43180){
var vec__43181 = p__43180;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43181,(0),null);
var query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43181,(1),null);

var operation = new cljs.core.Keyword(null,"operation","operation",-1267664310).cljs$core$IFn$_invoke$arity$1(query);
var operation_with_name = (cljs.core.truth_(operation)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_query.core._STAR_kw__GT_gql_name_STAR_.call(null,new cljs.core.Keyword("operation","type","operation/type",-518350333).cljs$core$IFn$_invoke$arity$1(operation)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_query.core._STAR_kw__GT_gql_name_STAR_.call(null,new cljs.core.Keyword("operation","name","operation/name",185509282).cljs$core$IFn$_invoke$arity$1(operation)))].join(''):null);
var variables = new cljs.core.Keyword(null,"variables","variables",1563680814).cljs$core$IFn$_invoke$arity$1(query);
var variables_str = (cljs.core.truth_(variables)?["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_query.core.variables__GT_str(variables)),")"].join(''):null);
var fragments = new cljs.core.Keyword(null,"fragments","fragments",1456109445).cljs$core$IFn$_invoke$arity$1(query);
var fragments_str = (cljs.core.truth_(fragments)?[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",cljs.core.map.cljs$core$IFn$_invoke$arity$2(graphql_query.core.fragment__GT_str,fragments))))].join(''):null);
return [operation_with_name,variables_str,"{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",cljs.core.map.cljs$core$IFn$_invoke$arity$2(graphql_query.core.__GT_query_str,new cljs.core.Keyword(null,"queries","queries",1446291995).cljs$core$IFn$_invoke$arity$1(query))))),"}",fragments_str].join('');
}));
graphql_query.core.__GT_query_str.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("graphql-query","query","graphql-query/query",206075446),(function (query){

var query_def = new cljs.core.Keyword("graphql-query","query","graphql-query/query",206075446).cljs$core$IFn$_invoke$arity$1(query);
var alias = (cljs.core.truth_(new cljs.core.Keyword("query","alias","query/alias",-2135243430).cljs$core$IFn$_invoke$arity$1(query))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_query.core._STAR_kw__GT_gql_name_STAR_.call(null,new cljs.core.Keyword("query","alias","query/alias",-2135243430).cljs$core$IFn$_invoke$arity$1(query))),":"].join(''):null);
var query_str = graphql_query.core._STAR_kw__GT_gql_name_STAR_.call(null,new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(query_def));
var args = (cljs.core.truth_(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(query_def))?["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_query.core.arguments__GT_str(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(query_def))),")"].join(''):null);
var fields = ["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_query.core.fields__GT_str(new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(query_def))),"}"].join('');
return [alias,cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_str),args,fields].join('');
}));
graphql_query.core.__GT_query_str.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"queries","queries",1446291995),(function (p__43196){
var vec__43197 = p__43196;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43197,(0),null);
var query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43197,(1),null);
return ["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",cljs.core.map.cljs$core$IFn$_invoke$arity$2(graphql_query.core.__GT_query_str,query)))),"}"].join('');
}));
graphql_query.core.__GT_query_str.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("graphql-query","query-with-data","graphql-query/query-with-data",-1538966023),(function (p__43202){
var vec__43203 = p__43202;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43203,(0),null);
var query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43203,(1),null);
var query_str = graphql_query.core.__GT_query_str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("query","data","query/data",131250295).cljs$core$IFn$_invoke$arity$1(query));
var alias = (cljs.core.truth_(new cljs.core.Keyword("query","alias","query/alias",-2135243430).cljs$core$IFn$_invoke$arity$1(query))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_query.core._STAR_kw__GT_gql_name_STAR_.call(null,new cljs.core.Keyword("query","alias","query/alias",-2135243430).cljs$core$IFn$_invoke$arity$1(query))),":"].join(''):null);
return [alias,cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_str)].join('');
}));
graphql_query.core.__GT_query_str.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("query","data","query/data",131250295),(function (p__43211){
var vec__43215 = p__43211;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43215,(0),null);
var query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43215,(1),null);

var query_str = graphql_query.core._STAR_kw__GT_gql_name_STAR_.call(null,new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(query));
var args = (cljs.core.truth_(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(query))?["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_query.core.arguments__GT_str(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(query))),")"].join(''):null);
var fields = ((graphql_query.core.include_fields_QMARK_(new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(query)))?["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_query.core.fields__GT_str(new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(query))),"}"].join(''):null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_str),args,fields].join('');
}));
graphql_query.core.__GT_query_str.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (query){

var query_str = graphql_query.core._STAR_kw__GT_gql_name_STAR_.call(null,new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(query));
var args = (cljs.core.truth_(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(query))?["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_query.core.arguments__GT_str(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(query))),")"].join(''):null);
var fields = ((graphql_query.core.include_fields_QMARK_(new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(query)))?["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_query.core.fields__GT_str(new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(query))),"}"].join(''):null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_str),args,fields].join('');
}));
/**
 * Formats clojure data structure to valid graphql query string.
 */
graphql_query.core.graphql_query = (function graphql_query$core$graphql_query(var_args){
var args__4742__auto__ = [];
var len__4736__auto___43570 = arguments.length;
var i__4737__auto___43571 = (0);
while(true){
if((i__4737__auto___43571 < len__4736__auto___43570)){
args__4742__auto__.push((arguments[i__4737__auto___43571]));

var G__43574 = (i__4737__auto___43571 + (1));
i__4737__auto___43571 = G__43574;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return graphql_query.core.graphql_query.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(graphql_query.core.graphql_query.cljs$core$IFn$_invoke$arity$variadic = (function (data,p__43242){
var vec__43243 = p__43242;
var map__43246 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43243,(0),null);
var map__43246__$1 = (((((!((map__43246 == null))))?(((((map__43246.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43246.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43246):map__43246);
var kw__GT_gql_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43246__$1,new cljs.core.Keyword(null,"kw->gql-name","kw->gql-name",-1726890150));
var _STAR_kw__GT_gql_name_STAR__orig_val__43249 = graphql_query.core._STAR_kw__GT_gql_name_STAR_;
var _STAR_kw__GT_gql_name_STAR__temp_val__43250 = (function (){var or__4126__auto__ = kw__GT_gql_name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return graphql_query.core._STAR_kw__GT_gql_name_STAR_;
}
})();
(graphql_query.core._STAR_kw__GT_gql_name_STAR_ = _STAR_kw__GT_gql_name_STAR__temp_val__43250);

try{return graphql_query.core.__GT_query_str.cljs$core$IFn$_invoke$arity$1(graphql_query.spec.query__GT_spec(data));
}finally {(graphql_query.core._STAR_kw__GT_gql_name_STAR_ = _STAR_kw__GT_gql_name_STAR__orig_val__43249);
}}));

(graphql_query.core.graphql_query.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(graphql_query.core.graphql_query.cljs$lang$applyTo = (function (seq43238){
var G__43239 = cljs.core.first(seq43238);
var seq43238__$1 = cljs.core.next(seq43238);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43239,seq43238__$1);
}));


//# sourceMappingURL=graphql_query.core.js.map
