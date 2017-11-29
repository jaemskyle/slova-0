// Compiled by ClojureScript 1.9.946 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__30829__auto__ = (((value == null))?null:value);
var m__30830__auto__ = (devtools.format._header[goog.typeOf(x__30829__auto__)]);
if(!((m__30830__auto__ == null))){
return m__30830__auto__.call(null,value);
} else {
var m__30830__auto____$1 = (devtools.format._header["_"]);
if(!((m__30830__auto____$1 == null))){
return m__30830__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__30829__auto__ = (((value == null))?null:value);
var m__30830__auto__ = (devtools.format._has_body[goog.typeOf(x__30829__auto__)]);
if(!((m__30830__auto__ == null))){
return m__30830__auto__.call(null,value);
} else {
var m__30830__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__30830__auto____$1 == null))){
return m__30830__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__30829__auto__ = (((value == null))?null:value);
var m__30830__auto__ = (devtools.format._body[goog.typeOf(x__30829__auto__)]);
if(!((m__30830__auto__ == null))){
return m__30830__auto__.call(null,value);
} else {
var m__30830__auto____$1 = (devtools.format._body["_"]);
if(!((m__30830__auto____$1 == null))){
return m__30830__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o39572 = temp__5455__auto__;
var temp__5455__auto____$1 = (o39572["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o39573 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o39573["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o39574 = temp__5455__auto____$2;
return (o39574["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o39575 = temp__5455__auto__;
var temp__5455__auto____$1 = (o39575["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o39576 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o39576["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o39577 = temp__5455__auto____$2;
return (o39577["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o39578 = temp__5455__auto__;
var temp__5455__auto____$1 = (o39578["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o39579 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o39579["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o39580 = temp__5455__auto____$2;
return (o39580["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o39581 = temp__5455__auto__;
var temp__5455__auto____$1 = (o39581["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o39582 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o39582["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o39583 = temp__5455__auto____$2;
return (o39583["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o39584 = temp__5455__auto__;
var temp__5455__auto____$1 = (o39584["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o39585 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o39585["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o39586 = temp__5455__auto____$2;
return (o39586["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o39587 = temp__5455__auto__;
var temp__5455__auto____$1 = (o39587["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o39588 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o39588["markup"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o39589 = temp__5455__auto____$2;
return (o39589["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o39590 = temp__5455__auto__;
var temp__5455__auto____$1 = (o39590["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o39591 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o39591["markup"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o39592 = temp__5455__auto____$2;
return (o39592["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__31382__auto__ = [];
var len__31375__auto___39594 = arguments.length;
var i__31376__auto___39595 = (0);
while(true){
if((i__31376__auto___39595 < len__31375__auto___39594)){
args__31382__auto__.push((arguments[i__31376__auto___39595]));

var G__39596 = (i__31376__auto___39595 + (1));
i__31376__auto___39595 = G__39596;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((0) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__31383__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq39593){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39593));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__31382__auto__ = [];
var len__31375__auto___39598 = arguments.length;
var i__31376__auto___39599 = (0);
while(true){
if((i__31376__auto___39599 < len__31375__auto___39598)){
args__31382__auto__.push((arguments[i__31376__auto___39599]));

var G__39600 = (i__31376__auto___39599 + (1));
i__31376__auto___39599 = G__39600;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((0) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__31383__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq39597){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39597));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__31382__auto__ = [];
var len__31375__auto___39602 = arguments.length;
var i__31376__auto___39603 = (0);
while(true){
if((i__31376__auto___39603 < len__31375__auto___39602)){
args__31382__auto__.push((arguments[i__31376__auto___39603]));

var G__39604 = (i__31376__auto___39603 + (1));
i__31376__auto___39603 = G__39604;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((0) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__31383__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq39601){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39601));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__31382__auto__ = [];
var len__31375__auto___39606 = arguments.length;
var i__31376__auto___39607 = (0);
while(true){
if((i__31376__auto___39607 < len__31375__auto___39606)){
args__31382__auto__.push((arguments[i__31376__auto___39607]));

var G__39608 = (i__31376__auto___39607 + (1));
i__31376__auto___39607 = G__39608;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((0) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__31383__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq39605){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39605));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__31382__auto__ = [];
var len__31375__auto___39610 = arguments.length;
var i__31376__auto___39611 = (0);
while(true){
if((i__31376__auto___39611 < len__31375__auto___39610)){
args__31382__auto__.push((arguments[i__31376__auto___39611]));

var G__39612 = (i__31376__auto___39611 + (1));
i__31376__auto___39611 = G__39612;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((0) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__31383__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq39609){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39609));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__31382__auto__ = [];
var len__31375__auto___39614 = arguments.length;
var i__31376__auto___39615 = (0);
while(true){
if((i__31376__auto___39615 < len__31375__auto___39614)){
args__31382__auto__.push((arguments[i__31376__auto___39615]));

var G__39616 = (i__31376__auto___39615 + (1));
i__31376__auto___39615 = G__39616;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((0) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__31383__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq39613){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39613));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__31382__auto__ = [];
var len__31375__auto___39618 = arguments.length;
var i__31376__auto___39619 = (0);
while(true){
if((i__31376__auto___39619 < len__31375__auto___39618)){
args__31382__auto__.push((arguments[i__31376__auto___39619]));

var G__39620 = (i__31376__auto___39619 + (1));
i__31376__auto___39619 = G__39620;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((0) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__31383__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq39617){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39617));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__31382__auto__ = [];
var len__31375__auto___39628 = arguments.length;
var i__31376__auto___39629 = (0);
while(true){
if((i__31376__auto___39629 < len__31375__auto___39628)){
args__31382__auto__.push((arguments[i__31376__auto___39629]));

var G__39630 = (i__31376__auto___39629 + (1));
i__31376__auto___39629 = G__39630;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((1) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31383__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__39624){
var vec__39625 = p__39624;
var state_override = cljs.core.nth.call(null,vec__39625,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__39625,state_override){
return (function (p1__39621_SHARP_){
return cljs.core.merge.call(null,p1__39621_SHARP_,state_override);
});})(vec__39625,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq39622){
var G__39623 = cljs.core.first.call(null,seq39622);
var seq39622__$1 = cljs.core.next.call(null,seq39622);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__39623,seq39622__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__31382__auto__ = [];
var len__31375__auto___39632 = arguments.length;
var i__31376__auto___39633 = (0);
while(true){
if((i__31376__auto___39633 < len__31375__auto___39632)){
args__31382__auto__.push((arguments[i__31376__auto___39633]));

var G__39634 = (i__31376__auto___39633 + (1));
i__31376__auto___39633 = G__39634;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((0) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__31383__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq39631){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39631));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__31382__auto__ = [];
var len__31375__auto___39637 = arguments.length;
var i__31376__auto___39638 = (0);
while(true){
if((i__31376__auto___39638 < len__31375__auto___39637)){
args__31382__auto__.push((arguments[i__31376__auto___39638]));

var G__39639 = (i__31376__auto___39638 + (1));
i__31376__auto___39638 = G__39639;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((1) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31383__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq39635){
var G__39636 = cljs.core.first.call(null,seq39635);
var seq39635__$1 = cljs.core.next.call(null,seq39635);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__39636,seq39635__$1);
});


//# sourceMappingURL=format.js.map?rel=1511975722752
