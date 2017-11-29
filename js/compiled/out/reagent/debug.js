// Compiled by ClojureScript 1.9.946 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__31878__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__31878 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31879__i = 0, G__31879__a = new Array(arguments.length -  0);
while (G__31879__i < G__31879__a.length) {G__31879__a[G__31879__i] = arguments[G__31879__i + 0]; ++G__31879__i;}
  args = new cljs.core.IndexedSeq(G__31879__a,0,null);
} 
return G__31878__delegate.call(this,args);};
G__31878.cljs$lang$maxFixedArity = 0;
G__31878.cljs$lang$applyTo = (function (arglist__31880){
var args = cljs.core.seq(arglist__31880);
return G__31878__delegate(args);
});
G__31878.cljs$core$IFn$_invoke$arity$variadic = G__31878__delegate;
return G__31878;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__31881__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__31881 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31882__i = 0, G__31882__a = new Array(arguments.length -  0);
while (G__31882__i < G__31882__a.length) {G__31882__a[G__31882__i] = arguments[G__31882__i + 0]; ++G__31882__i;}
  args = new cljs.core.IndexedSeq(G__31882__a,0,null);
} 
return G__31881__delegate.call(this,args);};
G__31881.cljs$lang$maxFixedArity = 0;
G__31881.cljs$lang$applyTo = (function (arglist__31883){
var args = cljs.core.seq(arglist__31883);
return G__31881__delegate(args);
});
G__31881.cljs$core$IFn$_invoke$arity$variadic = G__31881__delegate;
return G__31881;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1511975712230
