// Compiled by ClojureScript 1.9.946 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__30096__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__30096__auto__){
return or__30096__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__30096__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__30096__auto__)){
return or__30096__auto__;
} else {
var or__30096__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__30096__auto____$1)){
return or__30096__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__37278_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__37278_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__37279 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__37280 = null;
var count__37281 = (0);
var i__37282 = (0);
while(true){
if((i__37282 < count__37281)){
var n = cljs.core._nth.call(null,chunk__37280,i__37282);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__37283 = seq__37279;
var G__37284 = chunk__37280;
var G__37285 = count__37281;
var G__37286 = (i__37282 + (1));
seq__37279 = G__37283;
chunk__37280 = G__37284;
count__37281 = G__37285;
i__37282 = G__37286;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__37279);
if(temp__5457__auto__){
var seq__37279__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37279__$1)){
var c__31027__auto__ = cljs.core.chunk_first.call(null,seq__37279__$1);
var G__37287 = cljs.core.chunk_rest.call(null,seq__37279__$1);
var G__37288 = c__31027__auto__;
var G__37289 = cljs.core.count.call(null,c__31027__auto__);
var G__37290 = (0);
seq__37279 = G__37287;
chunk__37280 = G__37288;
count__37281 = G__37289;
i__37282 = G__37290;
continue;
} else {
var n = cljs.core.first.call(null,seq__37279__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__37291 = cljs.core.next.call(null,seq__37279__$1);
var G__37292 = null;
var G__37293 = (0);
var G__37294 = (0);
seq__37279 = G__37291;
chunk__37280 = G__37292;
count__37281 = G__37293;
i__37282 = G__37294;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__37295){
var vec__37296 = p__37295;
var _ = cljs.core.nth.call(null,vec__37296,(0),null);
var v = cljs.core.nth.call(null,vec__37296,(1),null);
var and__30084__auto__ = v;
if(cljs.core.truth_(and__30084__auto__)){
return v.call(null,dep);
} else {
return and__30084__auto__;
}
}),cljs.core.filter.call(null,(function (p__37299){
var vec__37300 = p__37299;
var k = cljs.core.nth.call(null,vec__37300,(0),null);
var v = cljs.core.nth.call(null,vec__37300,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__37312_37320 = cljs.core.seq.call(null,deps);
var chunk__37313_37321 = null;
var count__37314_37322 = (0);
var i__37315_37323 = (0);
while(true){
if((i__37315_37323 < count__37314_37322)){
var dep_37324 = cljs.core._nth.call(null,chunk__37313_37321,i__37315_37323);
if(cljs.core.truth_((function (){var and__30084__auto__ = dep_37324;
if(cljs.core.truth_(and__30084__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_37324));
} else {
return and__30084__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_37324,(depth + (1)),state);
} else {
}

var G__37325 = seq__37312_37320;
var G__37326 = chunk__37313_37321;
var G__37327 = count__37314_37322;
var G__37328 = (i__37315_37323 + (1));
seq__37312_37320 = G__37325;
chunk__37313_37321 = G__37326;
count__37314_37322 = G__37327;
i__37315_37323 = G__37328;
continue;
} else {
var temp__5457__auto___37329 = cljs.core.seq.call(null,seq__37312_37320);
if(temp__5457__auto___37329){
var seq__37312_37330__$1 = temp__5457__auto___37329;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37312_37330__$1)){
var c__31027__auto___37331 = cljs.core.chunk_first.call(null,seq__37312_37330__$1);
var G__37332 = cljs.core.chunk_rest.call(null,seq__37312_37330__$1);
var G__37333 = c__31027__auto___37331;
var G__37334 = cljs.core.count.call(null,c__31027__auto___37331);
var G__37335 = (0);
seq__37312_37320 = G__37332;
chunk__37313_37321 = G__37333;
count__37314_37322 = G__37334;
i__37315_37323 = G__37335;
continue;
} else {
var dep_37336 = cljs.core.first.call(null,seq__37312_37330__$1);
if(cljs.core.truth_((function (){var and__30084__auto__ = dep_37336;
if(cljs.core.truth_(and__30084__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_37336));
} else {
return and__30084__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_37336,(depth + (1)),state);
} else {
}

var G__37337 = cljs.core.next.call(null,seq__37312_37330__$1);
var G__37338 = null;
var G__37339 = (0);
var G__37340 = (0);
seq__37312_37320 = G__37337;
chunk__37313_37321 = G__37338;
count__37314_37322 = G__37339;
i__37315_37323 = G__37340;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__37316){
var vec__37317 = p__37316;
var seq__37318 = cljs.core.seq.call(null,vec__37317);
var first__37319 = cljs.core.first.call(null,seq__37318);
var seq__37318__$1 = cljs.core.next.call(null,seq__37318);
var x = first__37319;
var xs = seq__37318__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__37317,seq__37318,first__37319,seq__37318__$1,x,xs,get_deps__$1){
return (function (p1__37303_SHARP_){
return clojure.set.difference.call(null,p1__37303_SHARP_,x);
});})(vec__37317,seq__37318,first__37319,seq__37318__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__37341 = cljs.core.seq.call(null,provides);
var chunk__37342 = null;
var count__37343 = (0);
var i__37344 = (0);
while(true){
if((i__37344 < count__37343)){
var prov = cljs.core._nth.call(null,chunk__37342,i__37344);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__37345_37353 = cljs.core.seq.call(null,requires);
var chunk__37346_37354 = null;
var count__37347_37355 = (0);
var i__37348_37356 = (0);
while(true){
if((i__37348_37356 < count__37347_37355)){
var req_37357 = cljs.core._nth.call(null,chunk__37346_37354,i__37348_37356);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37357,prov);

var G__37358 = seq__37345_37353;
var G__37359 = chunk__37346_37354;
var G__37360 = count__37347_37355;
var G__37361 = (i__37348_37356 + (1));
seq__37345_37353 = G__37358;
chunk__37346_37354 = G__37359;
count__37347_37355 = G__37360;
i__37348_37356 = G__37361;
continue;
} else {
var temp__5457__auto___37362 = cljs.core.seq.call(null,seq__37345_37353);
if(temp__5457__auto___37362){
var seq__37345_37363__$1 = temp__5457__auto___37362;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37345_37363__$1)){
var c__31027__auto___37364 = cljs.core.chunk_first.call(null,seq__37345_37363__$1);
var G__37365 = cljs.core.chunk_rest.call(null,seq__37345_37363__$1);
var G__37366 = c__31027__auto___37364;
var G__37367 = cljs.core.count.call(null,c__31027__auto___37364);
var G__37368 = (0);
seq__37345_37353 = G__37365;
chunk__37346_37354 = G__37366;
count__37347_37355 = G__37367;
i__37348_37356 = G__37368;
continue;
} else {
var req_37369 = cljs.core.first.call(null,seq__37345_37363__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37369,prov);

var G__37370 = cljs.core.next.call(null,seq__37345_37363__$1);
var G__37371 = null;
var G__37372 = (0);
var G__37373 = (0);
seq__37345_37353 = G__37370;
chunk__37346_37354 = G__37371;
count__37347_37355 = G__37372;
i__37348_37356 = G__37373;
continue;
}
} else {
}
}
break;
}

var G__37374 = seq__37341;
var G__37375 = chunk__37342;
var G__37376 = count__37343;
var G__37377 = (i__37344 + (1));
seq__37341 = G__37374;
chunk__37342 = G__37375;
count__37343 = G__37376;
i__37344 = G__37377;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__37341);
if(temp__5457__auto__){
var seq__37341__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37341__$1)){
var c__31027__auto__ = cljs.core.chunk_first.call(null,seq__37341__$1);
var G__37378 = cljs.core.chunk_rest.call(null,seq__37341__$1);
var G__37379 = c__31027__auto__;
var G__37380 = cljs.core.count.call(null,c__31027__auto__);
var G__37381 = (0);
seq__37341 = G__37378;
chunk__37342 = G__37379;
count__37343 = G__37380;
i__37344 = G__37381;
continue;
} else {
var prov = cljs.core.first.call(null,seq__37341__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__37349_37382 = cljs.core.seq.call(null,requires);
var chunk__37350_37383 = null;
var count__37351_37384 = (0);
var i__37352_37385 = (0);
while(true){
if((i__37352_37385 < count__37351_37384)){
var req_37386 = cljs.core._nth.call(null,chunk__37350_37383,i__37352_37385);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37386,prov);

var G__37387 = seq__37349_37382;
var G__37388 = chunk__37350_37383;
var G__37389 = count__37351_37384;
var G__37390 = (i__37352_37385 + (1));
seq__37349_37382 = G__37387;
chunk__37350_37383 = G__37388;
count__37351_37384 = G__37389;
i__37352_37385 = G__37390;
continue;
} else {
var temp__5457__auto___37391__$1 = cljs.core.seq.call(null,seq__37349_37382);
if(temp__5457__auto___37391__$1){
var seq__37349_37392__$1 = temp__5457__auto___37391__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37349_37392__$1)){
var c__31027__auto___37393 = cljs.core.chunk_first.call(null,seq__37349_37392__$1);
var G__37394 = cljs.core.chunk_rest.call(null,seq__37349_37392__$1);
var G__37395 = c__31027__auto___37393;
var G__37396 = cljs.core.count.call(null,c__31027__auto___37393);
var G__37397 = (0);
seq__37349_37382 = G__37394;
chunk__37350_37383 = G__37395;
count__37351_37384 = G__37396;
i__37352_37385 = G__37397;
continue;
} else {
var req_37398 = cljs.core.first.call(null,seq__37349_37392__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37398,prov);

var G__37399 = cljs.core.next.call(null,seq__37349_37392__$1);
var G__37400 = null;
var G__37401 = (0);
var G__37402 = (0);
seq__37349_37382 = G__37399;
chunk__37350_37383 = G__37400;
count__37351_37384 = G__37401;
i__37352_37385 = G__37402;
continue;
}
} else {
}
}
break;
}

var G__37403 = cljs.core.next.call(null,seq__37341__$1);
var G__37404 = null;
var G__37405 = (0);
var G__37406 = (0);
seq__37341 = G__37403;
chunk__37342 = G__37404;
count__37343 = G__37405;
i__37344 = G__37406;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__37407_37411 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__37408_37412 = null;
var count__37409_37413 = (0);
var i__37410_37414 = (0);
while(true){
if((i__37410_37414 < count__37409_37413)){
var ns_37415 = cljs.core._nth.call(null,chunk__37408_37412,i__37410_37414);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_37415);

var G__37416 = seq__37407_37411;
var G__37417 = chunk__37408_37412;
var G__37418 = count__37409_37413;
var G__37419 = (i__37410_37414 + (1));
seq__37407_37411 = G__37416;
chunk__37408_37412 = G__37417;
count__37409_37413 = G__37418;
i__37410_37414 = G__37419;
continue;
} else {
var temp__5457__auto___37420 = cljs.core.seq.call(null,seq__37407_37411);
if(temp__5457__auto___37420){
var seq__37407_37421__$1 = temp__5457__auto___37420;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37407_37421__$1)){
var c__31027__auto___37422 = cljs.core.chunk_first.call(null,seq__37407_37421__$1);
var G__37423 = cljs.core.chunk_rest.call(null,seq__37407_37421__$1);
var G__37424 = c__31027__auto___37422;
var G__37425 = cljs.core.count.call(null,c__31027__auto___37422);
var G__37426 = (0);
seq__37407_37411 = G__37423;
chunk__37408_37412 = G__37424;
count__37409_37413 = G__37425;
i__37410_37414 = G__37426;
continue;
} else {
var ns_37427 = cljs.core.first.call(null,seq__37407_37421__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_37427);

var G__37428 = cljs.core.next.call(null,seq__37407_37421__$1);
var G__37429 = null;
var G__37430 = (0);
var G__37431 = (0);
seq__37407_37411 = G__37428;
chunk__37408_37412 = G__37429;
count__37409_37413 = G__37430;
i__37410_37414 = G__37431;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__30096__auto__ = goog.require__;
if(cljs.core.truth_(or__30096__auto__)){
return or__30096__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__37432__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__37432 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37433__i = 0, G__37433__a = new Array(arguments.length -  0);
while (G__37433__i < G__37433__a.length) {G__37433__a[G__37433__i] = arguments[G__37433__i + 0]; ++G__37433__i;}
  args = new cljs.core.IndexedSeq(G__37433__a,0,null);
} 
return G__37432__delegate.call(this,args);};
G__37432.cljs$lang$maxFixedArity = 0;
G__37432.cljs$lang$applyTo = (function (arglist__37434){
var args = cljs.core.seq(arglist__37434);
return G__37432__delegate(args);
});
G__37432.cljs$core$IFn$_invoke$arity$variadic = G__37432__delegate;
return G__37432;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__37435_SHARP_,p2__37436_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37435_SHARP_)].join('')),p2__37436_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__37437_SHARP_,p2__37438_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37437_SHARP_)].join(''),p2__37438_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__37439 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__37439.addCallback(((function (G__37439){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__37439))
);

G__37439.addErrback(((function (G__37439){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__37439))
);

return G__37439;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e37440){if((e37440 instanceof Error)){
var e = e37440;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e37440;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e37441){if((e37441 instanceof Error)){
var e = e37441;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e37441;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__37442 = cljs.core._EQ_;
var expr__37443 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__37442.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__37443))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__37442.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__37443))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__37442.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__37443))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__37442,expr__37443){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__37442,expr__37443))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__37445,callback){
var map__37446 = p__37445;
var map__37446__$1 = ((((!((map__37446 == null)))?((((map__37446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37446.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37446):map__37446);
var file_msg = map__37446__$1;
var request_url = cljs.core.get.call(null,map__37446__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__30096__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__30096__auto__)){
return or__30096__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__37446,map__37446__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__37446,map__37446__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__33762__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33762__auto__){
return (function (){
var f__33763__auto__ = (function (){var switch__33672__auto__ = ((function (c__33762__auto__){
return (function (state_37486){
var state_val_37487 = (state_37486[(1)]);
if((state_val_37487 === (7))){
var inst_37482 = (state_37486[(2)]);
var state_37486__$1 = state_37486;
var statearr_37488_37515 = state_37486__$1;
(statearr_37488_37515[(2)] = inst_37482);

(statearr_37488_37515[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37487 === (1))){
var state_37486__$1 = state_37486;
var statearr_37489_37516 = state_37486__$1;
(statearr_37489_37516[(2)] = null);

(statearr_37489_37516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37487 === (4))){
var inst_37450 = (state_37486[(7)]);
var inst_37450__$1 = (state_37486[(2)]);
var state_37486__$1 = (function (){var statearr_37490 = state_37486;
(statearr_37490[(7)] = inst_37450__$1);

return statearr_37490;
})();
if(cljs.core.truth_(inst_37450__$1)){
var statearr_37491_37517 = state_37486__$1;
(statearr_37491_37517[(1)] = (5));

} else {
var statearr_37492_37518 = state_37486__$1;
(statearr_37492_37518[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37487 === (15))){
var inst_37467 = (state_37486[(8)]);
var inst_37464 = (state_37486[(9)]);
var inst_37469 = inst_37467.call(null,inst_37464);
var state_37486__$1 = state_37486;
var statearr_37493_37519 = state_37486__$1;
(statearr_37493_37519[(2)] = inst_37469);

(statearr_37493_37519[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37487 === (13))){
var inst_37476 = (state_37486[(2)]);
var state_37486__$1 = state_37486;
var statearr_37494_37520 = state_37486__$1;
(statearr_37494_37520[(2)] = inst_37476);

(statearr_37494_37520[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37487 === (6))){
var state_37486__$1 = state_37486;
var statearr_37495_37521 = state_37486__$1;
(statearr_37495_37521[(2)] = null);

(statearr_37495_37521[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37487 === (17))){
var inst_37473 = (state_37486[(2)]);
var state_37486__$1 = state_37486;
var statearr_37496_37522 = state_37486__$1;
(statearr_37496_37522[(2)] = inst_37473);

(statearr_37496_37522[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37487 === (3))){
var inst_37484 = (state_37486[(2)]);
var state_37486__$1 = state_37486;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37486__$1,inst_37484);
} else {
if((state_val_37487 === (12))){
var state_37486__$1 = state_37486;
var statearr_37497_37523 = state_37486__$1;
(statearr_37497_37523[(2)] = null);

(statearr_37497_37523[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37487 === (2))){
var state_37486__$1 = state_37486;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37486__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_37487 === (11))){
var inst_37455 = (state_37486[(10)]);
var inst_37462 = figwheel.client.file_reloading.blocking_load.call(null,inst_37455);
var state_37486__$1 = state_37486;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37486__$1,(14),inst_37462);
} else {
if((state_val_37487 === (9))){
var inst_37455 = (state_37486[(10)]);
var state_37486__$1 = state_37486;
if(cljs.core.truth_(inst_37455)){
var statearr_37498_37524 = state_37486__$1;
(statearr_37498_37524[(1)] = (11));

} else {
var statearr_37499_37525 = state_37486__$1;
(statearr_37499_37525[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37487 === (5))){
var inst_37450 = (state_37486[(7)]);
var inst_37456 = (state_37486[(11)]);
var inst_37455 = cljs.core.nth.call(null,inst_37450,(0),null);
var inst_37456__$1 = cljs.core.nth.call(null,inst_37450,(1),null);
var state_37486__$1 = (function (){var statearr_37500 = state_37486;
(statearr_37500[(11)] = inst_37456__$1);

(statearr_37500[(10)] = inst_37455);

return statearr_37500;
})();
if(cljs.core.truth_(inst_37456__$1)){
var statearr_37501_37526 = state_37486__$1;
(statearr_37501_37526[(1)] = (8));

} else {
var statearr_37502_37527 = state_37486__$1;
(statearr_37502_37527[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37487 === (14))){
var inst_37455 = (state_37486[(10)]);
var inst_37467 = (state_37486[(8)]);
var inst_37464 = (state_37486[(2)]);
var inst_37465 = console.log("Loading!",inst_37455);
var inst_37466 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_37467__$1 = cljs.core.get.call(null,inst_37466,inst_37455);
var state_37486__$1 = (function (){var statearr_37503 = state_37486;
(statearr_37503[(12)] = inst_37465);

(statearr_37503[(8)] = inst_37467__$1);

(statearr_37503[(9)] = inst_37464);

return statearr_37503;
})();
if(cljs.core.truth_(inst_37467__$1)){
var statearr_37504_37528 = state_37486__$1;
(statearr_37504_37528[(1)] = (15));

} else {
var statearr_37505_37529 = state_37486__$1;
(statearr_37505_37529[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37487 === (16))){
var inst_37464 = (state_37486[(9)]);
var inst_37471 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_37464);
var state_37486__$1 = state_37486;
var statearr_37506_37530 = state_37486__$1;
(statearr_37506_37530[(2)] = inst_37471);

(statearr_37506_37530[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37487 === (10))){
var inst_37478 = (state_37486[(2)]);
var state_37486__$1 = (function (){var statearr_37507 = state_37486;
(statearr_37507[(13)] = inst_37478);

return statearr_37507;
})();
var statearr_37508_37531 = state_37486__$1;
(statearr_37508_37531[(2)] = null);

(statearr_37508_37531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37487 === (8))){
var inst_37456 = (state_37486[(11)]);
var inst_37458 = console.log("Evaling!",inst_37456);
var inst_37459 = eval(inst_37456);
var state_37486__$1 = (function (){var statearr_37509 = state_37486;
(statearr_37509[(14)] = inst_37458);

return statearr_37509;
})();
var statearr_37510_37532 = state_37486__$1;
(statearr_37510_37532[(2)] = inst_37459);

(statearr_37510_37532[(1)] = (10));


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
});})(c__33762__auto__))
;
return ((function (switch__33672__auto__,c__33762__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__33673__auto__ = null;
var figwheel$client$file_reloading$state_machine__33673__auto____0 = (function (){
var statearr_37511 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37511[(0)] = figwheel$client$file_reloading$state_machine__33673__auto__);

(statearr_37511[(1)] = (1));

return statearr_37511;
});
var figwheel$client$file_reloading$state_machine__33673__auto____1 = (function (state_37486){
while(true){
var ret_value__33674__auto__ = (function (){try{while(true){
var result__33675__auto__ = switch__33672__auto__.call(null,state_37486);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33675__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33675__auto__;
}
break;
}
}catch (e37512){if((e37512 instanceof Object)){
var ex__33676__auto__ = e37512;
var statearr_37513_37533 = state_37486;
(statearr_37513_37533[(5)] = ex__33676__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37486);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37512;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37534 = state_37486;
state_37486 = G__37534;
continue;
} else {
return ret_value__33674__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__33673__auto__ = function(state_37486){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__33673__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__33673__auto____1.call(this,state_37486);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__33673__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__33673__auto____0;
figwheel$client$file_reloading$state_machine__33673__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__33673__auto____1;
return figwheel$client$file_reloading$state_machine__33673__auto__;
})()
;})(switch__33672__auto__,c__33762__auto__))
})();
var state__33764__auto__ = (function (){var statearr_37514 = f__33763__auto__.call(null);
(statearr_37514[(6)] = c__33762__auto__);

return statearr_37514;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33764__auto__);
});})(c__33762__auto__))
);

return c__33762__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__37536 = arguments.length;
switch (G__37536) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__37538,callback){
var map__37539 = p__37538;
var map__37539__$1 = ((((!((map__37539 == null)))?((((map__37539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37539.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37539):map__37539);
var file_msg = map__37539__$1;
var namespace = cljs.core.get.call(null,map__37539__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__37539,map__37539__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__37539,map__37539__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__37541){
var map__37542 = p__37541;
var map__37542__$1 = ((((!((map__37542 == null)))?((((map__37542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37542.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37542):map__37542);
var file_msg = map__37542__$1;
var namespace = cljs.core.get.call(null,map__37542__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__37544){
var map__37545 = p__37544;
var map__37545__$1 = ((((!((map__37545 == null)))?((((map__37545.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37545.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37545):map__37545);
var file_msg = map__37545__$1;
var namespace = cljs.core.get.call(null,map__37545__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__30084__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__30084__auto__){
var or__30096__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__30096__auto__)){
return or__30096__auto__;
} else {
var or__30096__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__30096__auto____$1)){
return or__30096__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__30084__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__37547,callback){
var map__37548 = p__37547;
var map__37548__$1 = ((((!((map__37548 == null)))?((((map__37548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37548.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37548):map__37548);
var file_msg = map__37548__$1;
var request_url = cljs.core.get.call(null,map__37548__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__37548__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__33762__auto___37598 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33762__auto___37598,out){
return (function (){
var f__33763__auto__ = (function (){var switch__33672__auto__ = ((function (c__33762__auto___37598,out){
return (function (state_37583){
var state_val_37584 = (state_37583[(1)]);
if((state_val_37584 === (1))){
var inst_37557 = cljs.core.seq.call(null,files);
var inst_37558 = cljs.core.first.call(null,inst_37557);
var inst_37559 = cljs.core.next.call(null,inst_37557);
var inst_37560 = files;
var state_37583__$1 = (function (){var statearr_37585 = state_37583;
(statearr_37585[(7)] = inst_37560);

(statearr_37585[(8)] = inst_37558);

(statearr_37585[(9)] = inst_37559);

return statearr_37585;
})();
var statearr_37586_37599 = state_37583__$1;
(statearr_37586_37599[(2)] = null);

(statearr_37586_37599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37584 === (2))){
var inst_37560 = (state_37583[(7)]);
var inst_37566 = (state_37583[(10)]);
var inst_37565 = cljs.core.seq.call(null,inst_37560);
var inst_37566__$1 = cljs.core.first.call(null,inst_37565);
var inst_37567 = cljs.core.next.call(null,inst_37565);
var inst_37568 = (inst_37566__$1 == null);
var inst_37569 = cljs.core.not.call(null,inst_37568);
var state_37583__$1 = (function (){var statearr_37587 = state_37583;
(statearr_37587[(11)] = inst_37567);

(statearr_37587[(10)] = inst_37566__$1);

return statearr_37587;
})();
if(inst_37569){
var statearr_37588_37600 = state_37583__$1;
(statearr_37588_37600[(1)] = (4));

} else {
var statearr_37589_37601 = state_37583__$1;
(statearr_37589_37601[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37584 === (3))){
var inst_37581 = (state_37583[(2)]);
var state_37583__$1 = state_37583;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37583__$1,inst_37581);
} else {
if((state_val_37584 === (4))){
var inst_37566 = (state_37583[(10)]);
var inst_37571 = figwheel.client.file_reloading.reload_js_file.call(null,inst_37566);
var state_37583__$1 = state_37583;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37583__$1,(7),inst_37571);
} else {
if((state_val_37584 === (5))){
var inst_37577 = cljs.core.async.close_BANG_.call(null,out);
var state_37583__$1 = state_37583;
var statearr_37590_37602 = state_37583__$1;
(statearr_37590_37602[(2)] = inst_37577);

(statearr_37590_37602[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37584 === (6))){
var inst_37579 = (state_37583[(2)]);
var state_37583__$1 = state_37583;
var statearr_37591_37603 = state_37583__$1;
(statearr_37591_37603[(2)] = inst_37579);

(statearr_37591_37603[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37584 === (7))){
var inst_37567 = (state_37583[(11)]);
var inst_37573 = (state_37583[(2)]);
var inst_37574 = cljs.core.async.put_BANG_.call(null,out,inst_37573);
var inst_37560 = inst_37567;
var state_37583__$1 = (function (){var statearr_37592 = state_37583;
(statearr_37592[(12)] = inst_37574);

(statearr_37592[(7)] = inst_37560);

return statearr_37592;
})();
var statearr_37593_37604 = state_37583__$1;
(statearr_37593_37604[(2)] = null);

(statearr_37593_37604[(1)] = (2));


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
});})(c__33762__auto___37598,out))
;
return ((function (switch__33672__auto__,c__33762__auto___37598,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33673__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33673__auto____0 = (function (){
var statearr_37594 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37594[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33673__auto__);

(statearr_37594[(1)] = (1));

return statearr_37594;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33673__auto____1 = (function (state_37583){
while(true){
var ret_value__33674__auto__ = (function (){try{while(true){
var result__33675__auto__ = switch__33672__auto__.call(null,state_37583);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33675__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33675__auto__;
}
break;
}
}catch (e37595){if((e37595 instanceof Object)){
var ex__33676__auto__ = e37595;
var statearr_37596_37605 = state_37583;
(statearr_37596_37605[(5)] = ex__33676__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37583);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37595;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37606 = state_37583;
state_37583 = G__37606;
continue;
} else {
return ret_value__33674__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33673__auto__ = function(state_37583){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33673__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33673__auto____1.call(this,state_37583);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33673__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33673__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33673__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33673__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33673__auto__;
})()
;})(switch__33672__auto__,c__33762__auto___37598,out))
})();
var state__33764__auto__ = (function (){var statearr_37597 = f__33763__auto__.call(null);
(statearr_37597[(6)] = c__33762__auto___37598);

return statearr_37597;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33764__auto__);
});})(c__33762__auto___37598,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__37607,opts){
var map__37608 = p__37607;
var map__37608__$1 = ((((!((map__37608 == null)))?((((map__37608.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37608.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37608):map__37608);
var eval_body = cljs.core.get.call(null,map__37608__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__37608__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__30084__auto__ = eval_body;
if(cljs.core.truth_(and__30084__auto__)){
return typeof eval_body === 'string';
} else {
return and__30084__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e37610){var e = e37610;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__37611_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37611_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__37612){
var vec__37613 = p__37612;
var k = cljs.core.nth.call(null,vec__37613,(0),null);
var v = cljs.core.nth.call(null,vec__37613,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__37616){
var vec__37617 = p__37616;
var k = cljs.core.nth.call(null,vec__37617,(0),null);
var v = cljs.core.nth.call(null,vec__37617,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__37623,p__37624){
var map__37625 = p__37623;
var map__37625__$1 = ((((!((map__37625 == null)))?((((map__37625.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37625.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37625):map__37625);
var opts = map__37625__$1;
var before_jsload = cljs.core.get.call(null,map__37625__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__37625__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__37625__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__37626 = p__37624;
var map__37626__$1 = ((((!((map__37626 == null)))?((((map__37626.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37626.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37626):map__37626);
var msg = map__37626__$1;
var files = cljs.core.get.call(null,map__37626__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__37626__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__37626__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__33762__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33762__auto__,map__37625,map__37625__$1,opts,before_jsload,on_jsload,reload_dependents,map__37626,map__37626__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__33763__auto__ = (function (){var switch__33672__auto__ = ((function (c__33762__auto__,map__37625,map__37625__$1,opts,before_jsload,on_jsload,reload_dependents,map__37626,map__37626__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_37780){
var state_val_37781 = (state_37780[(1)]);
if((state_val_37781 === (7))){
var inst_37642 = (state_37780[(7)]);
var inst_37643 = (state_37780[(8)]);
var inst_37641 = (state_37780[(9)]);
var inst_37640 = (state_37780[(10)]);
var inst_37648 = cljs.core._nth.call(null,inst_37641,inst_37643);
var inst_37649 = figwheel.client.file_reloading.eval_body.call(null,inst_37648,opts);
var inst_37650 = (inst_37643 + (1));
var tmp37782 = inst_37642;
var tmp37783 = inst_37641;
var tmp37784 = inst_37640;
var inst_37640__$1 = tmp37784;
var inst_37641__$1 = tmp37783;
var inst_37642__$1 = tmp37782;
var inst_37643__$1 = inst_37650;
var state_37780__$1 = (function (){var statearr_37785 = state_37780;
(statearr_37785[(7)] = inst_37642__$1);

(statearr_37785[(8)] = inst_37643__$1);

(statearr_37785[(11)] = inst_37649);

(statearr_37785[(9)] = inst_37641__$1);

(statearr_37785[(10)] = inst_37640__$1);

return statearr_37785;
})();
var statearr_37786_37869 = state_37780__$1;
(statearr_37786_37869[(2)] = null);

(statearr_37786_37869[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37781 === (20))){
var inst_37683 = (state_37780[(12)]);
var inst_37691 = figwheel.client.file_reloading.sort_files.call(null,inst_37683);
var state_37780__$1 = state_37780;
var statearr_37787_37870 = state_37780__$1;
(statearr_37787_37870[(2)] = inst_37691);

(statearr_37787_37870[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37781 === (27))){
var state_37780__$1 = state_37780;
var statearr_37788_37871 = state_37780__$1;
(statearr_37788_37871[(2)] = null);

(statearr_37788_37871[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37781 === (1))){
var inst_37632 = (state_37780[(13)]);
var inst_37629 = before_jsload.call(null,files);
var inst_37630 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_37631 = (function (){return ((function (inst_37632,inst_37629,inst_37630,state_val_37781,c__33762__auto__,map__37625,map__37625__$1,opts,before_jsload,on_jsload,reload_dependents,map__37626,map__37626__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37620_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37620_SHARP_);
});
;})(inst_37632,inst_37629,inst_37630,state_val_37781,c__33762__auto__,map__37625,map__37625__$1,opts,before_jsload,on_jsload,reload_dependents,map__37626,map__37626__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37632__$1 = cljs.core.filter.call(null,inst_37631,files);
var inst_37633 = cljs.core.not_empty.call(null,inst_37632__$1);
var state_37780__$1 = (function (){var statearr_37789 = state_37780;
(statearr_37789[(14)] = inst_37630);

(statearr_37789[(15)] = inst_37629);

(statearr_37789[(13)] = inst_37632__$1);

return statearr_37789;
})();
if(cljs.core.truth_(inst_37633)){
var statearr_37790_37872 = state_37780__$1;
(statearr_37790_37872[(1)] = (2));

} else {
var statearr_37791_37873 = state_37780__$1;
(statearr_37791_37873[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37781 === (24))){
var state_37780__$1 = state_37780;
var statearr_37792_37874 = state_37780__$1;
(statearr_37792_37874[(2)] = null);

(statearr_37792_37874[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37781 === (39))){
var inst_37733 = (state_37780[(16)]);
var state_37780__$1 = state_37780;
var statearr_37793_37875 = state_37780__$1;
(statearr_37793_37875[(2)] = inst_37733);

(statearr_37793_37875[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37781 === (46))){
var inst_37775 = (state_37780[(2)]);
var state_37780__$1 = state_37780;
var statearr_37794_37876 = state_37780__$1;
(statearr_37794_37876[(2)] = inst_37775);

(statearr_37794_37876[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37781 === (4))){
var inst_37677 = (state_37780[(2)]);
var inst_37678 = cljs.core.List.EMPTY;
var inst_37679 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_37678);
var inst_37680 = (function (){return ((function (inst_37677,inst_37678,inst_37679,state_val_37781,c__33762__auto__,map__37625,map__37625__$1,opts,before_jsload,on_jsload,reload_dependents,map__37626,map__37626__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37621_SHARP_){
var and__30084__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37621_SHARP_);
if(cljs.core.truth_(and__30084__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37621_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__37621_SHARP_)));
} else {
return and__30084__auto__;
}
});
;})(inst_37677,inst_37678,inst_37679,state_val_37781,c__33762__auto__,map__37625,map__37625__$1,opts,before_jsload,on_jsload,reload_dependents,map__37626,map__37626__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37681 = cljs.core.filter.call(null,inst_37680,files);
var inst_37682 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_37683 = cljs.core.concat.call(null,inst_37681,inst_37682);
var state_37780__$1 = (function (){var statearr_37795 = state_37780;
(statearr_37795[(17)] = inst_37679);

(statearr_37795[(18)] = inst_37677);

(statearr_37795[(12)] = inst_37683);

return statearr_37795;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_37796_37877 = state_37780__$1;
(statearr_37796_37877[(1)] = (16));

} else {
var statearr_37797_37878 = state_37780__$1;
(statearr_37797_37878[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37781 === (15))){
var inst_37667 = (state_37780[(2)]);
var state_37780__$1 = state_37780;
var statearr_37798_37879 = state_37780__$1;
(statearr_37798_37879[(2)] = inst_37667);

(statearr_37798_37879[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37781 === (21))){
var inst_37693 = (state_37780[(19)]);
var inst_37693__$1 = (state_37780[(2)]);
var inst_37694 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_37693__$1);
var state_37780__$1 = (function (){var statearr_37799 = state_37780;
(statearr_37799[(19)] = inst_37693__$1);

return statearr_37799;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37780__$1,(22),inst_37694);
} else {
if((state_val_37781 === (31))){
var inst_37778 = (state_37780[(2)]);
var state_37780__$1 = state_37780;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37780__$1,inst_37778);
} else {
if((state_val_37781 === (32))){
var inst_37733 = (state_37780[(16)]);
var inst_37738 = inst_37733.cljs$lang$protocol_mask$partition0$;
var inst_37739 = (inst_37738 & (64));
var inst_37740 = inst_37733.cljs$core$ISeq$;
var inst_37741 = (cljs.core.PROTOCOL_SENTINEL === inst_37740);
var inst_37742 = (inst_37739) || (inst_37741);
var state_37780__$1 = state_37780;
if(cljs.core.truth_(inst_37742)){
var statearr_37800_37880 = state_37780__$1;
(statearr_37800_37880[(1)] = (35));

} else {
var statearr_37801_37881 = state_37780__$1;
(statearr_37801_37881[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37781 === (40))){
var inst_37755 = (state_37780[(20)]);
var inst_37754 = (state_37780[(2)]);
var inst_37755__$1 = cljs.core.get.call(null,inst_37754,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_37756 = cljs.core.get.call(null,inst_37754,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_37757 = cljs.core.not_empty.call(null,inst_37755__$1);
var state_37780__$1 = (function (){var statearr_37802 = state_37780;
(statearr_37802[(20)] = inst_37755__$1);

(statearr_37802[(21)] = inst_37756);

return statearr_37802;
})();
if(cljs.core.truth_(inst_37757)){
var statearr_37803_37882 = state_37780__$1;
(statearr_37803_37882[(1)] = (41));

} else {
var statearr_37804_37883 = state_37780__$1;
(statearr_37804_37883[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37781 === (33))){
var state_37780__$1 = state_37780;
var statearr_37805_37884 = state_37780__$1;
(statearr_37805_37884[(2)] = false);

(statearr_37805_37884[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37781 === (13))){
var inst_37653 = (state_37780[(22)]);
var inst_37657 = cljs.core.chunk_first.call(null,inst_37653);
var inst_37658 = cljs.core.chunk_rest.call(null,inst_37653);
var inst_37659 = cljs.core.count.call(null,inst_37657);
var inst_37640 = inst_37658;
var inst_37641 = inst_37657;
var inst_37642 = inst_37659;
var inst_37643 = (0);
var state_37780__$1 = (function (){var statearr_37806 = state_37780;
(statearr_37806[(7)] = inst_37642);

(statearr_37806[(8)] = inst_37643);

(statearr_37806[(9)] = inst_37641);

(statearr_37806[(10)] = inst_37640);

return statearr_37806;
})();
var statearr_37807_37885 = state_37780__$1;
(statearr_37807_37885[(2)] = null);

(statearr_37807_37885[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37781 === (22))){
var inst_37696 = (state_37780[(23)]);
var inst_37693 = (state_37780[(19)]);
var inst_37701 = (state_37780[(24)]);
var inst_37697 = (state_37780[(25)]);
var inst_37696__$1 = (state_37780[(2)]);
var inst_37697__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37696__$1);
var inst_37698 = (function (){var all_files = inst_37693;
var res_SINGLEQUOTE_ = inst_37696__$1;
var res = inst_37697__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_37696,inst_37693,inst_37701,inst_37697,inst_37696__$1,inst_37697__$1,state_val_37781,c__33762__auto__,map__37625,map__37625__$1,opts,before_jsload,on_jsload,reload_dependents,map__37626,map__37626__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37622_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__37622_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_37696,inst_37693,inst_37701,inst_37697,inst_37696__$1,inst_37697__$1,state_val_37781,c__33762__auto__,map__37625,map__37625__$1,opts,before_jsload,on_jsload,reload_dependents,map__37626,map__37626__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37699 = cljs.core.filter.call(null,inst_37698,inst_37696__$1);
var inst_37700 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_37701__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37700);
var inst_37702 = cljs.core.not_empty.call(null,inst_37701__$1);
var state_37780__$1 = (function (){var statearr_37808 = state_37780;
(statearr_37808[(23)] = inst_37696__$1);

(statearr_37808[(26)] = inst_37699);

(statearr_37808[(24)] = inst_37701__$1);

(statearr_37808[(25)] = inst_37697__$1);

return statearr_37808;
})();
if(cljs.core.truth_(inst_37702)){
var statearr_37809_37886 = state_37780__$1;
(statearr_37809_37886[(1)] = (23));

} else {
var statearr_37810_37887 = state_37780__$1;
(statearr_37810_37887[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37781 === (36))){
var state_37780__$1 = state_37780;
var statearr_37811_37888 = state_37780__$1;
(statearr_37811_37888[(2)] = false);

(statearr_37811_37888[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37781 === (41))){
var inst_37755 = (state_37780[(20)]);
var inst_37759 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_37760 = cljs.core.map.call(null,inst_37759,inst_37755);
var inst_37761 = cljs.core.pr_str.call(null,inst_37760);
var inst_37762 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37761)].join('');
var inst_37763 = figwheel.client.utils.log.call(null,inst_37762);
var state_37780__$1 = state_37780;
var statearr_37812_37889 = state_37780__$1;
(statearr_37812_37889[(2)] = inst_37763);

(statearr_37812_37889[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37781 === (43))){
var inst_37756 = (state_37780[(21)]);
var inst_37766 = (state_37780[(2)]);
var inst_37767 = cljs.core.not_empty.call(null,inst_37756);
var state_37780__$1 = (function (){var statearr_37813 = state_37780;
(statearr_37813[(27)] = inst_37766);

return statearr_37813;
})();
if(cljs.core.truth_(inst_37767)){
var statearr_37814_37890 = state_37780__$1;
(statearr_37814_37890[(1)] = (44));

} else {
var statearr_37815_37891 = state_37780__$1;
(statearr_37815_37891[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37781 === (29))){
var inst_37733 = (state_37780[(16)]);
var inst_37696 = (state_37780[(23)]);
var inst_37693 = (state_37780[(19)]);
var inst_37699 = (state_37780[(26)]);
var inst_37701 = (state_37780[(24)]);
var inst_37697 = (state_37780[(25)]);
var inst_37729 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_37732 = (function (){var all_files = inst_37693;
var res_SINGLEQUOTE_ = inst_37696;
var res = inst_37697;
var files_not_loaded = inst_37699;
var dependencies_that_loaded = inst_37701;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37733,inst_37696,inst_37693,inst_37699,inst_37701,inst_37697,inst_37729,state_val_37781,c__33762__auto__,map__37625,map__37625__$1,opts,before_jsload,on_jsload,reload_dependents,map__37626,map__37626__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37731){
var map__37816 = p__37731;
var map__37816__$1 = ((((!((map__37816 == null)))?((((map__37816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37816.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37816):map__37816);
var namespace = cljs.core.get.call(null,map__37816__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37733,inst_37696,inst_37693,inst_37699,inst_37701,inst_37697,inst_37729,state_val_37781,c__33762__auto__,map__37625,map__37625__$1,opts,before_jsload,on_jsload,reload_dependents,map__37626,map__37626__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37733__$1 = cljs.core.group_by.call(null,inst_37732,inst_37699);
var inst_37735 = (inst_37733__$1 == null);
var inst_37736 = cljs.core.not.call(null,inst_37735);
var state_37780__$1 = (function (){var statearr_37818 = state_37780;
(statearr_37818[(16)] = inst_37733__$1);

(statearr_37818[(28)] = inst_37729);

return statearr_37818;
})();
if(inst_37736){
var statearr_37819_37892 = state_37780__$1;
(statearr_37819_37892[(1)] = (32));

} else {
var statearr_37820_37893 = state_37780__$1;
(statearr_37820_37893[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37781 === (44))){
var inst_37756 = (state_37780[(21)]);
var inst_37769 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37756);
var inst_37770 = cljs.core.pr_str.call(null,inst_37769);
var inst_37771 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37770)].join('');
var inst_37772 = figwheel.client.utils.log.call(null,inst_37771);
var state_37780__$1 = state_37780;
var statearr_37821_37894 = state_37780__$1;
(statearr_37821_37894[(2)] = inst_37772);

(statearr_37821_37894[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37781 === (6))){
var inst_37674 = (state_37780[(2)]);
var state_37780__$1 = state_37780;
var statearr_37822_37895 = state_37780__$1;
(statearr_37822_37895[(2)] = inst_37674);

(statearr_37822_37895[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37781 === (28))){
var inst_37699 = (state_37780[(26)]);
var inst_37726 = (state_37780[(2)]);
var inst_37727 = cljs.core.not_empty.call(null,inst_37699);
var state_37780__$1 = (function (){var statearr_37823 = state_37780;
(statearr_37823[(29)] = inst_37726);

return statearr_37823;
})();
if(cljs.core.truth_(inst_37727)){
var statearr_37824_37896 = state_37780__$1;
(statearr_37824_37896[(1)] = (29));

} else {
var statearr_37825_37897 = state_37780__$1;
(statearr_37825_37897[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37781 === (25))){
var inst_37697 = (state_37780[(25)]);
var inst_37713 = (state_37780[(2)]);
var inst_37714 = cljs.core.not_empty.call(null,inst_37697);
var state_37780__$1 = (function (){var statearr_37826 = state_37780;
(statearr_37826[(30)] = inst_37713);

return statearr_37826;
})();
if(cljs.core.truth_(inst_37714)){
var statearr_37827_37898 = state_37780__$1;
(statearr_37827_37898[(1)] = (26));

} else {
var statearr_37828_37899 = state_37780__$1;
(statearr_37828_37899[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37781 === (34))){
var inst_37749 = (state_37780[(2)]);
var state_37780__$1 = state_37780;
if(cljs.core.truth_(inst_37749)){
var statearr_37829_37900 = state_37780__$1;
(statearr_37829_37900[(1)] = (38));

} else {
var statearr_37830_37901 = state_37780__$1;
(statearr_37830_37901[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37781 === (17))){
var state_37780__$1 = state_37780;
var statearr_37831_37902 = state_37780__$1;
(statearr_37831_37902[(2)] = recompile_dependents);

(statearr_37831_37902[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37781 === (3))){
var state_37780__$1 = state_37780;
var statearr_37832_37903 = state_37780__$1;
(statearr_37832_37903[(2)] = null);

(statearr_37832_37903[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37781 === (12))){
var inst_37670 = (state_37780[(2)]);
var state_37780__$1 = state_37780;
var statearr_37833_37904 = state_37780__$1;
(statearr_37833_37904[(2)] = inst_37670);

(statearr_37833_37904[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37781 === (2))){
var inst_37632 = (state_37780[(13)]);
var inst_37639 = cljs.core.seq.call(null,inst_37632);
var inst_37640 = inst_37639;
var inst_37641 = null;
var inst_37642 = (0);
var inst_37643 = (0);
var state_37780__$1 = (function (){var statearr_37834 = state_37780;
(statearr_37834[(7)] = inst_37642);

(statearr_37834[(8)] = inst_37643);

(statearr_37834[(9)] = inst_37641);

(statearr_37834[(10)] = inst_37640);

return statearr_37834;
})();
var statearr_37835_37905 = state_37780__$1;
(statearr_37835_37905[(2)] = null);

(statearr_37835_37905[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37781 === (23))){
var inst_37696 = (state_37780[(23)]);
var inst_37693 = (state_37780[(19)]);
var inst_37699 = (state_37780[(26)]);
var inst_37701 = (state_37780[(24)]);
var inst_37697 = (state_37780[(25)]);
var inst_37704 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_37706 = (function (){var all_files = inst_37693;
var res_SINGLEQUOTE_ = inst_37696;
var res = inst_37697;
var files_not_loaded = inst_37699;
var dependencies_that_loaded = inst_37701;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37696,inst_37693,inst_37699,inst_37701,inst_37697,inst_37704,state_val_37781,c__33762__auto__,map__37625,map__37625__$1,opts,before_jsload,on_jsload,reload_dependents,map__37626,map__37626__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37705){
var map__37836 = p__37705;
var map__37836__$1 = ((((!((map__37836 == null)))?((((map__37836.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37836.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37836):map__37836);
var request_url = cljs.core.get.call(null,map__37836__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37696,inst_37693,inst_37699,inst_37701,inst_37697,inst_37704,state_val_37781,c__33762__auto__,map__37625,map__37625__$1,opts,before_jsload,on_jsload,reload_dependents,map__37626,map__37626__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37707 = cljs.core.reverse.call(null,inst_37701);
var inst_37708 = cljs.core.map.call(null,inst_37706,inst_37707);
var inst_37709 = cljs.core.pr_str.call(null,inst_37708);
var inst_37710 = figwheel.client.utils.log.call(null,inst_37709);
var state_37780__$1 = (function (){var statearr_37838 = state_37780;
(statearr_37838[(31)] = inst_37704);

return statearr_37838;
})();
var statearr_37839_37906 = state_37780__$1;
(statearr_37839_37906[(2)] = inst_37710);

(statearr_37839_37906[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37781 === (35))){
var state_37780__$1 = state_37780;
var statearr_37840_37907 = state_37780__$1;
(statearr_37840_37907[(2)] = true);

(statearr_37840_37907[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37781 === (19))){
var inst_37683 = (state_37780[(12)]);
var inst_37689 = figwheel.client.file_reloading.expand_files.call(null,inst_37683);
var state_37780__$1 = state_37780;
var statearr_37841_37908 = state_37780__$1;
(statearr_37841_37908[(2)] = inst_37689);

(statearr_37841_37908[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37781 === (11))){
var state_37780__$1 = state_37780;
var statearr_37842_37909 = state_37780__$1;
(statearr_37842_37909[(2)] = null);

(statearr_37842_37909[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37781 === (9))){
var inst_37672 = (state_37780[(2)]);
var state_37780__$1 = state_37780;
var statearr_37843_37910 = state_37780__$1;
(statearr_37843_37910[(2)] = inst_37672);

(statearr_37843_37910[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37781 === (5))){
var inst_37642 = (state_37780[(7)]);
var inst_37643 = (state_37780[(8)]);
var inst_37645 = (inst_37643 < inst_37642);
var inst_37646 = inst_37645;
var state_37780__$1 = state_37780;
if(cljs.core.truth_(inst_37646)){
var statearr_37844_37911 = state_37780__$1;
(statearr_37844_37911[(1)] = (7));

} else {
var statearr_37845_37912 = state_37780__$1;
(statearr_37845_37912[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37781 === (14))){
var inst_37653 = (state_37780[(22)]);
var inst_37662 = cljs.core.first.call(null,inst_37653);
var inst_37663 = figwheel.client.file_reloading.eval_body.call(null,inst_37662,opts);
var inst_37664 = cljs.core.next.call(null,inst_37653);
var inst_37640 = inst_37664;
var inst_37641 = null;
var inst_37642 = (0);
var inst_37643 = (0);
var state_37780__$1 = (function (){var statearr_37846 = state_37780;
(statearr_37846[(7)] = inst_37642);

(statearr_37846[(8)] = inst_37643);

(statearr_37846[(32)] = inst_37663);

(statearr_37846[(9)] = inst_37641);

(statearr_37846[(10)] = inst_37640);

return statearr_37846;
})();
var statearr_37847_37913 = state_37780__$1;
(statearr_37847_37913[(2)] = null);

(statearr_37847_37913[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37781 === (45))){
var state_37780__$1 = state_37780;
var statearr_37848_37914 = state_37780__$1;
(statearr_37848_37914[(2)] = null);

(statearr_37848_37914[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37781 === (26))){
var inst_37696 = (state_37780[(23)]);
var inst_37693 = (state_37780[(19)]);
var inst_37699 = (state_37780[(26)]);
var inst_37701 = (state_37780[(24)]);
var inst_37697 = (state_37780[(25)]);
var inst_37716 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_37718 = (function (){var all_files = inst_37693;
var res_SINGLEQUOTE_ = inst_37696;
var res = inst_37697;
var files_not_loaded = inst_37699;
var dependencies_that_loaded = inst_37701;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37696,inst_37693,inst_37699,inst_37701,inst_37697,inst_37716,state_val_37781,c__33762__auto__,map__37625,map__37625__$1,opts,before_jsload,on_jsload,reload_dependents,map__37626,map__37626__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37717){
var map__37849 = p__37717;
var map__37849__$1 = ((((!((map__37849 == null)))?((((map__37849.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37849.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37849):map__37849);
var namespace = cljs.core.get.call(null,map__37849__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__37849__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37696,inst_37693,inst_37699,inst_37701,inst_37697,inst_37716,state_val_37781,c__33762__auto__,map__37625,map__37625__$1,opts,before_jsload,on_jsload,reload_dependents,map__37626,map__37626__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37719 = cljs.core.map.call(null,inst_37718,inst_37697);
var inst_37720 = cljs.core.pr_str.call(null,inst_37719);
var inst_37721 = figwheel.client.utils.log.call(null,inst_37720);
var inst_37722 = (function (){var all_files = inst_37693;
var res_SINGLEQUOTE_ = inst_37696;
var res = inst_37697;
var files_not_loaded = inst_37699;
var dependencies_that_loaded = inst_37701;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37696,inst_37693,inst_37699,inst_37701,inst_37697,inst_37716,inst_37718,inst_37719,inst_37720,inst_37721,state_val_37781,c__33762__auto__,map__37625,map__37625__$1,opts,before_jsload,on_jsload,reload_dependents,map__37626,map__37626__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37696,inst_37693,inst_37699,inst_37701,inst_37697,inst_37716,inst_37718,inst_37719,inst_37720,inst_37721,state_val_37781,c__33762__auto__,map__37625,map__37625__$1,opts,before_jsload,on_jsload,reload_dependents,map__37626,map__37626__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37723 = setTimeout(inst_37722,(10));
var state_37780__$1 = (function (){var statearr_37851 = state_37780;
(statearr_37851[(33)] = inst_37716);

(statearr_37851[(34)] = inst_37721);

return statearr_37851;
})();
var statearr_37852_37915 = state_37780__$1;
(statearr_37852_37915[(2)] = inst_37723);

(statearr_37852_37915[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37781 === (16))){
var state_37780__$1 = state_37780;
var statearr_37853_37916 = state_37780__$1;
(statearr_37853_37916[(2)] = reload_dependents);

(statearr_37853_37916[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37781 === (38))){
var inst_37733 = (state_37780[(16)]);
var inst_37751 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37733);
var state_37780__$1 = state_37780;
var statearr_37854_37917 = state_37780__$1;
(statearr_37854_37917[(2)] = inst_37751);

(statearr_37854_37917[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37781 === (30))){
var state_37780__$1 = state_37780;
var statearr_37855_37918 = state_37780__$1;
(statearr_37855_37918[(2)] = null);

(statearr_37855_37918[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37781 === (10))){
var inst_37653 = (state_37780[(22)]);
var inst_37655 = cljs.core.chunked_seq_QMARK_.call(null,inst_37653);
var state_37780__$1 = state_37780;
if(inst_37655){
var statearr_37856_37919 = state_37780__$1;
(statearr_37856_37919[(1)] = (13));

} else {
var statearr_37857_37920 = state_37780__$1;
(statearr_37857_37920[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37781 === (18))){
var inst_37687 = (state_37780[(2)]);
var state_37780__$1 = state_37780;
if(cljs.core.truth_(inst_37687)){
var statearr_37858_37921 = state_37780__$1;
(statearr_37858_37921[(1)] = (19));

} else {
var statearr_37859_37922 = state_37780__$1;
(statearr_37859_37922[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37781 === (42))){
var state_37780__$1 = state_37780;
var statearr_37860_37923 = state_37780__$1;
(statearr_37860_37923[(2)] = null);

(statearr_37860_37923[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37781 === (37))){
var inst_37746 = (state_37780[(2)]);
var state_37780__$1 = state_37780;
var statearr_37861_37924 = state_37780__$1;
(statearr_37861_37924[(2)] = inst_37746);

(statearr_37861_37924[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37781 === (8))){
var inst_37653 = (state_37780[(22)]);
var inst_37640 = (state_37780[(10)]);
var inst_37653__$1 = cljs.core.seq.call(null,inst_37640);
var state_37780__$1 = (function (){var statearr_37862 = state_37780;
(statearr_37862[(22)] = inst_37653__$1);

return statearr_37862;
})();
if(inst_37653__$1){
var statearr_37863_37925 = state_37780__$1;
(statearr_37863_37925[(1)] = (10));

} else {
var statearr_37864_37926 = state_37780__$1;
(statearr_37864_37926[(1)] = (11));

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
}
});})(c__33762__auto__,map__37625,map__37625__$1,opts,before_jsload,on_jsload,reload_dependents,map__37626,map__37626__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__33672__auto__,c__33762__auto__,map__37625,map__37625__$1,opts,before_jsload,on_jsload,reload_dependents,map__37626,map__37626__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33673__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33673__auto____0 = (function (){
var statearr_37865 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37865[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__33673__auto__);

(statearr_37865[(1)] = (1));

return statearr_37865;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33673__auto____1 = (function (state_37780){
while(true){
var ret_value__33674__auto__ = (function (){try{while(true){
var result__33675__auto__ = switch__33672__auto__.call(null,state_37780);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33675__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33675__auto__;
}
break;
}
}catch (e37866){if((e37866 instanceof Object)){
var ex__33676__auto__ = e37866;
var statearr_37867_37927 = state_37780;
(statearr_37867_37927[(5)] = ex__33676__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37780);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37866;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37928 = state_37780;
state_37780 = G__37928;
continue;
} else {
return ret_value__33674__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__33673__auto__ = function(state_37780){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33673__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33673__auto____1.call(this,state_37780);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__33673__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33673__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__33673__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33673__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33673__auto__;
})()
;})(switch__33672__auto__,c__33762__auto__,map__37625,map__37625__$1,opts,before_jsload,on_jsload,reload_dependents,map__37626,map__37626__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__33764__auto__ = (function (){var statearr_37868 = f__33763__auto__.call(null);
(statearr_37868[(6)] = c__33762__auto__);

return statearr_37868;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33764__auto__);
});})(c__33762__auto__,map__37625,map__37625__$1,opts,before_jsload,on_jsload,reload_dependents,map__37626,map__37626__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__33762__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__37931,link){
var map__37932 = p__37931;
var map__37932__$1 = ((((!((map__37932 == null)))?((((map__37932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37932.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37932):map__37932);
var file = cljs.core.get.call(null,map__37932__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__37932,map__37932__$1,file){
return (function (p1__37929_SHARP_,p2__37930_SHARP_){
if(cljs.core._EQ_.call(null,p1__37929_SHARP_,p2__37930_SHARP_)){
return p1__37929_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__37932,map__37932__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__37935){
var map__37936 = p__37935;
var map__37936__$1 = ((((!((map__37936 == null)))?((((map__37936.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37936.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37936):map__37936);
var match_length = cljs.core.get.call(null,map__37936__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__37936__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__37934_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__37934_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__37938_SHARP_,p2__37939_SHARP_){
return cljs.core.assoc.call(null,p1__37938_SHARP_,cljs.core.get.call(null,p2__37939_SHARP_,key),p2__37939_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_37940 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_37940);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_37940);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__37941,p__37942){
var map__37943 = p__37941;
var map__37943__$1 = ((((!((map__37943 == null)))?((((map__37943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37943.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37943):map__37943);
var on_cssload = cljs.core.get.call(null,map__37943__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__37944 = p__37942;
var map__37944__$1 = ((((!((map__37944 == null)))?((((map__37944.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37944.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37944):map__37944);
var files_msg = map__37944__$1;
var files = cljs.core.get.call(null,map__37944__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1511975720135
