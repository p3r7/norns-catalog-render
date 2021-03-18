goog.provide('graphql_query.exception');
if((typeof graphql_query !== 'undefined') && (typeof graphql_query.exception !== 'undefined') && (typeof graphql_query.exception.throw_ex !== 'undefined')){
} else {
graphql_query.exception.throw_ex = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__42349 = cljs.core.get_global_hierarchy;
return (fexpr__42349.cljs$core$IFn$_invoke$arity$0 ? fexpr__42349.cljs$core$IFn$_invoke$arity$0() : fexpr__42349.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("graphql-query.exception","throw-ex"),new cljs.core.Keyword("graphql-query","ex-type","graphql-query/ex-type",206825959),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
graphql_query.exception.throw_ex.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("graphql-query","spec-validation","graphql-query/spec-validation",-418117220),(function (data){
throw (new Error(["Invalid query data ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(data)].join('')));
}));
graphql_query.exception.throw_ex.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("graphql-query","invalid-fragments","graphql-query/invalid-fragments",613350178),(function (data){
throw (new Error(["Invalid fragments: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("graphql-query","ex-data","graphql-query/ex-data",-675354215).cljs$core$IFn$_invoke$arity$1(data))].join('')));
}));
graphql_query.exception.throw_ex.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("graphql-query","invalid-variables","graphql-query/invalid-variables",1315779878),(function (data){
throw (new Error(["Invalid variables: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("graphql-query","ex-data","graphql-query/ex-data",-675354215).cljs$core$IFn$_invoke$arity$1(data))].join('')));
}));

//# sourceMappingURL=graphql_query.exception.js.map
