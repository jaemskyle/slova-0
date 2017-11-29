// Compiled by ClojureScript 1.9.946 {}
goog.provide('slova_0.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs.core.async');
goog.require('goog.net.XhrIo');
slova_0.core.clicks = reagent.core.atom.call(null,(0));
slova_0.core.vocabs = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
slova_0.core.qword = reagent.core.atom.call(null,"");
slova_0.core.col_selected = reagent.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
slova_0.core.GET = (function slova_0$core$GET(url,fnn){
return goog.net.XhrIo.send(url,(function (event){
var s = event.target.getResponseText();
return fnn.call(null,s);
}));
});
slova_0.core.get_item = (function slova_0$core$get_item(item,fn){
var href = (window["location"]["href"]);
return slova_0.core.GET.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(href),cljs.core.str.cljs$core$IFn$_invoke$arity$1(item)].join(''),fn);
});
slova_0.core.get_item.call(null,"/json/backup.json",(function (s){
return cljs.core.swap_BANG_.call(null,slova_0.core.vocabs,(function (){
return cljs.core.js__GT_clj.call(null,JSON.parse(s),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
}));
}));
slova_0.core.get_definition = (function slova_0$core$get_definition(item,fn){
var href = "https://ru.wiktionary.org/wiki/";
return slova_0.core.GET.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(href),cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.decodeURI(item))].join(''),fn);
});
slova_0.core.style = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"red",new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"none",new cljs.core.Keyword(null,"list-style-type","list-style-type",-1703248598),"none"], null),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"orange"], null),new cljs.core.Keyword(null,"card","card",-1430355152),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"left"], null)], null));
slova_0.core.info = (function slova_0$core$info(i){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),cljs.core.deref.call(null,i)], null);
});
slova_0.core.word_item = (function slova_0$core$word_item(w){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"word","word",-420123725).cljs$core$IFn$_invoke$arity$1(w)], null);
});
slova_0.core.words_of_the_day = (function slova_0$core$words_of_the_day(vocabulary){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.wotd","ul.wotd",1794060056),(function (){var iter__30978__auto__ = (function slova_0$core$words_of_the_day_$_iter__33932(s__33933){
return (new cljs.core.LazySeq(null,(function (){
var s__33933__$1 = s__33933;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__33933__$1);
if(temp__5457__auto__){
var s__33933__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33933__$2)){
var c__30976__auto__ = cljs.core.chunk_first.call(null,s__33933__$2);
var size__30977__auto__ = cljs.core.count.call(null,c__30976__auto__);
var b__33935 = cljs.core.chunk_buffer.call(null,size__30977__auto__);
if((function (){var i__33934 = (0);
while(true){
if((i__33934 < size__30977__auto__)){
var i = cljs.core._nth.call(null,c__30976__auto__,i__33934);
cljs.core.chunk_append.call(null,b__33935,(function (){var item = cljs.core.get.call(null,new cljs.core.Keyword(null,"list","list",765357683).cljs$core$IFn$_invoke$arity$1(i),cljs.core.rand.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"list","list",765357683).cljs$core$IFn$_invoke$arity$1(i))));
cljs.core.swap_BANG_.call(null,slova_0.core.col_selected,((function (i__33934,item,i,c__30976__auto__,size__30977__auto__,b__33935,s__33933__$2,temp__5457__auto__){
return (function (){
return cljs.core.conj.call(null,cljs.core.deref.call(null,slova_0.core.col_selected),new cljs.core.Keyword(null,"word","word",-420123725).cljs$core$IFn$_invoke$arity$1(item));
});})(i__33934,item,i,c__30976__auto__,size__30977__auto__,b__33935,s__33933__$2,temp__5457__auto__))
);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"word","word",-420123725).cljs$core$IFn$_invoke$arity$1(item)], null);
})());

var G__33936 = (i__33934 + (1));
i__33934 = G__33936;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33935),slova_0$core$words_of_the_day_$_iter__33932.call(null,cljs.core.chunk_rest.call(null,s__33933__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33935),null);
}
} else {
var i = cljs.core.first.call(null,s__33933__$2);
return cljs.core.cons.call(null,(function (){var item = cljs.core.get.call(null,new cljs.core.Keyword(null,"list","list",765357683).cljs$core$IFn$_invoke$arity$1(i),cljs.core.rand.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"list","list",765357683).cljs$core$IFn$_invoke$arity$1(i))));
cljs.core.swap_BANG_.call(null,slova_0.core.col_selected,((function (item,i,s__33933__$2,temp__5457__auto__){
return (function (){
return cljs.core.conj.call(null,cljs.core.deref.call(null,slova_0.core.col_selected),new cljs.core.Keyword(null,"word","word",-420123725).cljs$core$IFn$_invoke$arity$1(item));
});})(item,i,s__33933__$2,temp__5457__auto__))
);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"word","word",-420123725).cljs$core$IFn$_invoke$arity$1(item)], null);
})(),slova_0$core$words_of_the_day_$_iter__33932.call(null,cljs.core.rest.call(null,s__33933__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__30978__auto__.call(null,new cljs.core.Keyword(null,"lists","lists",-884730684).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,vocabulary)));
})()], null);
});
slova_0.core.lists = (function slova_0$core$lists(lists){
var item_style = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"#aaa",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"15px",new cljs.core.Keyword(null,"list-style-type","list-style-type",-1703248598),"none"], null));
var item_style_root = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0"], null));
var selected_word = cljs.core.get.call(null,lists,cljs.core.rand.call(null,cljs.core.count.call(null,lists)));
return ((function (item_style,item_style_root,selected_word){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.deref.call(null,item_style_root)], null),cljs.core.doall.call(null,(function (){var iter__30978__auto__ = ((function (item_style,item_style_root,selected_word){
return (function slova_0$core$lists_$_iter__33937(s__33938){
return (new cljs.core.LazySeq(null,((function (item_style,item_style_root,selected_word){
return (function (){
var s__33938__$1 = s__33938;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__33938__$1);
if(temp__5457__auto__){
var s__33938__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33938__$2)){
var c__30976__auto__ = cljs.core.chunk_first.call(null,s__33938__$2);
var size__30977__auto__ = cljs.core.count.call(null,c__30976__auto__);
var b__33940 = cljs.core.chunk_buffer.call(null,size__30977__auto__);
if((function (){var i__33939 = (0);
while(true){
if((i__33939 < size__30977__auto__)){
var item = cljs.core._nth.call(null,c__30976__auto__,i__33939);
cljs.core.chunk_append.call(null,b__33940,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-item","li.list-item",77124048),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__33939,item,c__30976__auto__,size__30977__auto__,b__33940,s__33938__$2,temp__5457__auto__,item_style,item_style_root,selected_word){
return (function (e){
(e["target"]["className"] = cljs.core.apply.call(null,cljs.core.str,cljs.core.concat.call(null,e.target.className," selected")));

return cljs.core.swap_BANG_.call(null,slova_0.core.qword,((function (i__33939,item,c__30976__auto__,size__30977__auto__,b__33940,s__33938__$2,temp__5457__auto__,item_style,item_style_root,selected_word){
return (function (){
return new cljs.core.Keyword(null,"word","word",-420123725).cljs$core$IFn$_invoke$arity$1(item);
});})(i__33939,item,c__30976__auto__,size__30977__auto__,b__33940,s__33938__$2,temp__5457__auto__,item_style,item_style_root,selected_word))
);
});})(i__33939,item,c__30976__auto__,size__30977__auto__,b__33940,s__33938__$2,temp__5457__auto__,item_style,item_style_root,selected_word))
,new cljs.core.Keyword(null,"class","class",-2030961996),(((cljs.core._EQ_.call(null,cljs.core.deref.call(null,slova_0.core.qword),new cljs.core.Keyword(null,"word","word",-420123725).cljs$core$IFn$_invoke$arity$1(item))) || (cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,slova_0.core.col_selected),new cljs.core.Keyword(null,"word","word",-420123725).cljs$core$IFn$_invoke$arity$1(item))))?"selected":null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slova_0.core.word_item,item], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)));

var G__33941 = (i__33939 + (1));
i__33939 = G__33941;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33940),slova_0$core$lists_$_iter__33937.call(null,cljs.core.chunk_rest.call(null,s__33938__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33940),null);
}
} else {
var item = cljs.core.first.call(null,s__33938__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-item","li.list-item",77124048),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (item,s__33938__$2,temp__5457__auto__,item_style,item_style_root,selected_word){
return (function (e){
(e["target"]["className"] = cljs.core.apply.call(null,cljs.core.str,cljs.core.concat.call(null,e.target.className," selected")));

return cljs.core.swap_BANG_.call(null,slova_0.core.qword,((function (item,s__33938__$2,temp__5457__auto__,item_style,item_style_root,selected_word){
return (function (){
return new cljs.core.Keyword(null,"word","word",-420123725).cljs$core$IFn$_invoke$arity$1(item);
});})(item,s__33938__$2,temp__5457__auto__,item_style,item_style_root,selected_word))
);
});})(item,s__33938__$2,temp__5457__auto__,item_style,item_style_root,selected_word))
,new cljs.core.Keyword(null,"class","class",-2030961996),(((cljs.core._EQ_.call(null,cljs.core.deref.call(null,slova_0.core.qword),new cljs.core.Keyword(null,"word","word",-420123725).cljs$core$IFn$_invoke$arity$1(item))) || (cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,slova_0.core.col_selected),new cljs.core.Keyword(null,"word","word",-420123725).cljs$core$IFn$_invoke$arity$1(item))))?"selected":null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slova_0.core.word_item,item], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)),slova_0$core$lists_$_iter__33937.call(null,cljs.core.rest.call(null,s__33938__$2)));
}
} else {
return null;
}
break;
}
});})(item_style,item_style_root,selected_word))
,null,null));
});})(item_style,item_style_root,selected_word))
;
return iter__30978__auto__.call(null,lists);
})())], null);
});
;})(item_style,item_style_root,selected_word))
});
slova_0.core.cards = (function slova_0$core$cards(cards){
var cards_style = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cards_style_root = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (cards_style,cards_style_root){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.card-holder","ul.card-holder",590805949),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.deref.call(null,cards_style_root)], null),cljs.core.doall.call(null,(function (){var iter__30978__auto__ = ((function (cards_style,cards_style_root){
return (function slova_0$core$cards_$_iter__33942(s__33943){
return (new cljs.core.LazySeq(null,((function (cards_style,cards_style_root){
return (function (){
var s__33943__$1 = s__33943;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__33943__$1);
if(temp__5457__auto__){
var s__33943__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33943__$2)){
var c__30976__auto__ = cljs.core.chunk_first.call(null,s__33943__$2);
var size__30977__auto__ = cljs.core.count.call(null,c__30976__auto__);
var b__33945 = cljs.core.chunk_buffer.call(null,size__30977__auto__);
if((function (){var i__33944 = (0);
while(true){
if((i__33944 < size__30977__auto__)){
var list = cljs.core._nth.call(null,c__30976__auto__,i__33944);
cljs.core.chunk_append.call(null,b__33945,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.cards","li.cards",-417729915),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,slova_0.core.style))], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(list)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slova_0.core.lists,new cljs.core.Keyword(null,"list","list",765357683).cljs$core$IFn$_invoke$arity$1(list)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),list], null)));

var G__33946 = (i__33944 + (1));
i__33944 = G__33946;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33945),slova_0$core$cards_$_iter__33942.call(null,cljs.core.chunk_rest.call(null,s__33943__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33945),null);
}
} else {
var list = cljs.core.first.call(null,s__33943__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.cards","li.cards",-417729915),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,slova_0.core.style))], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(list)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slova_0.core.lists,new cljs.core.Keyword(null,"list","list",765357683).cljs$core$IFn$_invoke$arity$1(list)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),list], null)),slova_0$core$cards_$_iter__33942.call(null,cljs.core.rest.call(null,s__33943__$2)));
}
} else {
return null;
}
break;
}
});})(cards_style,cards_style_root))
,null,null));
});})(cards_style,cards_style_root))
;
return iter__30978__auto__.call(null,new cljs.core.Keyword(null,"lists","lists",-884730684).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cards)));
})())], null);
});
;})(cards_style,cards_style_root))
});
slova_0.core.testing = (function slova_0$core$testing(){
var s = sessionStorage.getItem("yo");
var o = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"lists","lists",-884730684).cljs$core$IFn$_invoke$arity$1(cljs.core.js__GT_clj.call(null,JSON.parse(s),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true))));
console.log((window["location"]["href"]),cljs.core.deref.call(null,slova_0.core.vocabs));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(window["location"])], null);
});
slova_0.core.testing_element = (function slova_0$core$testing_element(){
var s = ["/json/backup.json"].join('');
var href = (window["location"]["href"]);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(href),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),JSON.stringify((window["location"]))], null)], null);
});
slova_0.core.item_definition = (function slova_0$core$item_definition(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),slova_0.core.get_definition.call(null,"%D0%B4%D0%B5%D0%BD%D1%8C",console.log)], null);
});
slova_0.core.fdefinition = (function slova_0$core$fdefinition(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"iframe","iframe",884422026),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),["https://ru.wiktionary.org/wiki/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.decodeURI("%D0%B4%D0%B5%D0%BD%D1%8C"))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"900px",new cljs.core.Keyword(null,"height","height",1025178622),"1000px",new cljs.core.Keyword(null,"border","border",1444987323),"none"], null)], null)], null);
});
slova_0.core.content = (function slova_0$core$content(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [slova_0.core.testing_element], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slova_0.core.words_of_the_day,slova_0.core.vocabs], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slova_0.core.info,slova_0.core.qword], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slova_0.core.cards,slova_0.core.vocabs], null)], null);
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [slova_0.core.content], null),document.querySelector("#app"));

//# sourceMappingURL=core.js.map?rel=1511978436889
