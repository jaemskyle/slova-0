// Compiled by ClojureScript 1.9.946 {}
goog.provide('figwheel.connect.build_dev');
goog.require('cljs.core');
goog.require('slova_0.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__33949__delegate = function (x){
if(cljs.core.truth_(slova_0.core.on_js_reload)){
return cljs.core.apply.call(null,slova_0.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'slova-0.core/on-js-reload' is missing");
}
};
var G__33949 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__33950__i = 0, G__33950__a = new Array(arguments.length -  0);
while (G__33950__i < G__33950__a.length) {G__33950__a[G__33950__i] = arguments[G__33950__i + 0]; ++G__33950__i;}
  x = new cljs.core.IndexedSeq(G__33950__a,0,null);
} 
return G__33949__delegate.call(this,x);};
G__33949.cljs$lang$maxFixedArity = 0;
G__33949.cljs$lang$applyTo = (function (arglist__33951){
var x = cljs.core.seq(arglist__33951);
return G__33949__delegate(x);
});
G__33949.cljs$core$IFn$_invoke$arity$variadic = G__33949__delegate;
return G__33949;
})()
,new cljs.core.Keyword(null,"open-urls","open-urls",-1478664930),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http://localhost:3449/index.html"], null),new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=build_dev.js.map?rel=1511978437056
