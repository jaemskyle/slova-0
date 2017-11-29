// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__38745){
var map__38746 = p__38745;
var map__38746__$1 = ((((!((map__38746 == null)))?((((map__38746.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38746.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38746):map__38746);
var m = map__38746__$1;
var n = cljs.core.get.call(null,map__38746__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__38746__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__38748_38770 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38749_38771 = null;
var count__38750_38772 = (0);
var i__38751_38773 = (0);
while(true){
if((i__38751_38773 < count__38750_38772)){
var f_38774 = cljs.core._nth.call(null,chunk__38749_38771,i__38751_38773);
cljs.core.println.call(null,"  ",f_38774);

var G__38775 = seq__38748_38770;
var G__38776 = chunk__38749_38771;
var G__38777 = count__38750_38772;
var G__38778 = (i__38751_38773 + (1));
seq__38748_38770 = G__38775;
chunk__38749_38771 = G__38776;
count__38750_38772 = G__38777;
i__38751_38773 = G__38778;
continue;
} else {
var temp__5457__auto___38779 = cljs.core.seq.call(null,seq__38748_38770);
if(temp__5457__auto___38779){
var seq__38748_38780__$1 = temp__5457__auto___38779;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38748_38780__$1)){
var c__31027__auto___38781 = cljs.core.chunk_first.call(null,seq__38748_38780__$1);
var G__38782 = cljs.core.chunk_rest.call(null,seq__38748_38780__$1);
var G__38783 = c__31027__auto___38781;
var G__38784 = cljs.core.count.call(null,c__31027__auto___38781);
var G__38785 = (0);
seq__38748_38770 = G__38782;
chunk__38749_38771 = G__38783;
count__38750_38772 = G__38784;
i__38751_38773 = G__38785;
continue;
} else {
var f_38786 = cljs.core.first.call(null,seq__38748_38780__$1);
cljs.core.println.call(null,"  ",f_38786);

var G__38787 = cljs.core.next.call(null,seq__38748_38780__$1);
var G__38788 = null;
var G__38789 = (0);
var G__38790 = (0);
seq__38748_38770 = G__38787;
chunk__38749_38771 = G__38788;
count__38750_38772 = G__38789;
i__38751_38773 = G__38790;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_38791 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__30096__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__30096__auto__)){
return or__30096__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_38791);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_38791)))?cljs.core.second.call(null,arglists_38791):arglists_38791));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__38752_38792 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38753_38793 = null;
var count__38754_38794 = (0);
var i__38755_38795 = (0);
while(true){
if((i__38755_38795 < count__38754_38794)){
var vec__38756_38796 = cljs.core._nth.call(null,chunk__38753_38793,i__38755_38795);
var name_38797 = cljs.core.nth.call(null,vec__38756_38796,(0),null);
var map__38759_38798 = cljs.core.nth.call(null,vec__38756_38796,(1),null);
var map__38759_38799__$1 = ((((!((map__38759_38798 == null)))?((((map__38759_38798.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38759_38798.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38759_38798):map__38759_38798);
var doc_38800 = cljs.core.get.call(null,map__38759_38799__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38801 = cljs.core.get.call(null,map__38759_38799__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_38797);

cljs.core.println.call(null," ",arglists_38801);

if(cljs.core.truth_(doc_38800)){
cljs.core.println.call(null," ",doc_38800);
} else {
}

var G__38802 = seq__38752_38792;
var G__38803 = chunk__38753_38793;
var G__38804 = count__38754_38794;
var G__38805 = (i__38755_38795 + (1));
seq__38752_38792 = G__38802;
chunk__38753_38793 = G__38803;
count__38754_38794 = G__38804;
i__38755_38795 = G__38805;
continue;
} else {
var temp__5457__auto___38806 = cljs.core.seq.call(null,seq__38752_38792);
if(temp__5457__auto___38806){
var seq__38752_38807__$1 = temp__5457__auto___38806;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38752_38807__$1)){
var c__31027__auto___38808 = cljs.core.chunk_first.call(null,seq__38752_38807__$1);
var G__38809 = cljs.core.chunk_rest.call(null,seq__38752_38807__$1);
var G__38810 = c__31027__auto___38808;
var G__38811 = cljs.core.count.call(null,c__31027__auto___38808);
var G__38812 = (0);
seq__38752_38792 = G__38809;
chunk__38753_38793 = G__38810;
count__38754_38794 = G__38811;
i__38755_38795 = G__38812;
continue;
} else {
var vec__38761_38813 = cljs.core.first.call(null,seq__38752_38807__$1);
var name_38814 = cljs.core.nth.call(null,vec__38761_38813,(0),null);
var map__38764_38815 = cljs.core.nth.call(null,vec__38761_38813,(1),null);
var map__38764_38816__$1 = ((((!((map__38764_38815 == null)))?((((map__38764_38815.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38764_38815.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38764_38815):map__38764_38815);
var doc_38817 = cljs.core.get.call(null,map__38764_38816__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38818 = cljs.core.get.call(null,map__38764_38816__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_38814);

cljs.core.println.call(null," ",arglists_38818);

if(cljs.core.truth_(doc_38817)){
cljs.core.println.call(null," ",doc_38817);
} else {
}

var G__38819 = cljs.core.next.call(null,seq__38752_38807__$1);
var G__38820 = null;
var G__38821 = (0);
var G__38822 = (0);
seq__38752_38792 = G__38819;
chunk__38753_38793 = G__38820;
count__38754_38794 = G__38821;
i__38755_38795 = G__38822;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__38766 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__38767 = null;
var count__38768 = (0);
var i__38769 = (0);
while(true){
if((i__38769 < count__38768)){
var role = cljs.core._nth.call(null,chunk__38767,i__38769);
var temp__5457__auto___38823__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___38823__$1)){
var spec_38824 = temp__5457__auto___38823__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_38824));
} else {
}

var G__38825 = seq__38766;
var G__38826 = chunk__38767;
var G__38827 = count__38768;
var G__38828 = (i__38769 + (1));
seq__38766 = G__38825;
chunk__38767 = G__38826;
count__38768 = G__38827;
i__38769 = G__38828;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__38766);
if(temp__5457__auto____$1){
var seq__38766__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38766__$1)){
var c__31027__auto__ = cljs.core.chunk_first.call(null,seq__38766__$1);
var G__38829 = cljs.core.chunk_rest.call(null,seq__38766__$1);
var G__38830 = c__31027__auto__;
var G__38831 = cljs.core.count.call(null,c__31027__auto__);
var G__38832 = (0);
seq__38766 = G__38829;
chunk__38767 = G__38830;
count__38768 = G__38831;
i__38769 = G__38832;
continue;
} else {
var role = cljs.core.first.call(null,seq__38766__$1);
var temp__5457__auto___38833__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___38833__$2)){
var spec_38834 = temp__5457__auto___38833__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_38834));
} else {
}

var G__38835 = cljs.core.next.call(null,seq__38766__$1);
var G__38836 = null;
var G__38837 = (0);
var G__38838 = (0);
seq__38766 = G__38835;
chunk__38767 = G__38836;
count__38768 = G__38837;
i__38769 = G__38838;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1511975721864
