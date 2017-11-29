// Compiled by ClojureScript 1.9.946 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.14";
figwheel.client.js_stringify = (((typeof JSON !== 'undefined') && (!((JSON.stringify == null))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e39033){if((e39033 instanceof Error)){
var e = e39033;
return "Error: Unable to stringify";
} else {
throw e39033;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__39036 = arguments.length;
switch (G__39036) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__39034_SHARP_){
if(typeof p1__39034_SHARP_ === 'string'){
return p1__39034_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__39034_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__31382__auto__ = [];
var len__31375__auto___39039 = arguments.length;
var i__31376__auto___39040 = (0);
while(true){
if((i__31376__auto___39040 < len__31375__auto___39039)){
args__31382__auto__.push((arguments[i__31376__auto___39040]));

var G__39041 = (i__31376__auto___39040 + (1));
i__31376__auto___39040 = G__39041;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((0) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__31383__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq39038){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39038));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__31382__auto__ = [];
var len__31375__auto___39043 = arguments.length;
var i__31376__auto___39044 = (0);
while(true){
if((i__31376__auto___39044 < len__31375__auto___39043)){
args__31382__auto__.push((arguments[i__31376__auto___39044]));

var G__39045 = (i__31376__auto___39044 + (1));
i__31376__auto___39044 = G__39045;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((0) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__31383__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq39042){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39042));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__39046){
var map__39047 = p__39046;
var map__39047__$1 = ((((!((map__39047 == null)))?((((map__39047.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39047.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39047):map__39047);
var message = cljs.core.get.call(null,map__39047__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__39047__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__30096__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__30096__auto__)){
return or__30096__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__30084__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__30084__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__30084__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__33762__auto___39126 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33762__auto___39126,ch){
return (function (){
var f__33763__auto__ = (function (){var switch__33672__auto__ = ((function (c__33762__auto___39126,ch){
return (function (state_39098){
var state_val_39099 = (state_39098[(1)]);
if((state_val_39099 === (7))){
var inst_39094 = (state_39098[(2)]);
var state_39098__$1 = state_39098;
var statearr_39100_39127 = state_39098__$1;
(statearr_39100_39127[(2)] = inst_39094);

(statearr_39100_39127[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39099 === (1))){
var state_39098__$1 = state_39098;
var statearr_39101_39128 = state_39098__$1;
(statearr_39101_39128[(2)] = null);

(statearr_39101_39128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39099 === (4))){
var inst_39051 = (state_39098[(7)]);
var inst_39051__$1 = (state_39098[(2)]);
var state_39098__$1 = (function (){var statearr_39102 = state_39098;
(statearr_39102[(7)] = inst_39051__$1);

return statearr_39102;
})();
if(cljs.core.truth_(inst_39051__$1)){
var statearr_39103_39129 = state_39098__$1;
(statearr_39103_39129[(1)] = (5));

} else {
var statearr_39104_39130 = state_39098__$1;
(statearr_39104_39130[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39099 === (15))){
var inst_39058 = (state_39098[(8)]);
var inst_39073 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_39058);
var inst_39074 = cljs.core.first.call(null,inst_39073);
var inst_39075 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_39074);
var inst_39076 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_39075)].join('');
var inst_39077 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_39076);
var state_39098__$1 = state_39098;
var statearr_39105_39131 = state_39098__$1;
(statearr_39105_39131[(2)] = inst_39077);

(statearr_39105_39131[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39099 === (13))){
var inst_39082 = (state_39098[(2)]);
var state_39098__$1 = state_39098;
var statearr_39106_39132 = state_39098__$1;
(statearr_39106_39132[(2)] = inst_39082);

(statearr_39106_39132[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39099 === (6))){
var state_39098__$1 = state_39098;
var statearr_39107_39133 = state_39098__$1;
(statearr_39107_39133[(2)] = null);

(statearr_39107_39133[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39099 === (17))){
var inst_39080 = (state_39098[(2)]);
var state_39098__$1 = state_39098;
var statearr_39108_39134 = state_39098__$1;
(statearr_39108_39134[(2)] = inst_39080);

(statearr_39108_39134[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39099 === (3))){
var inst_39096 = (state_39098[(2)]);
var state_39098__$1 = state_39098;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39098__$1,inst_39096);
} else {
if((state_val_39099 === (12))){
var inst_39057 = (state_39098[(9)]);
var inst_39071 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_39057,opts);
var state_39098__$1 = state_39098;
if(cljs.core.truth_(inst_39071)){
var statearr_39109_39135 = state_39098__$1;
(statearr_39109_39135[(1)] = (15));

} else {
var statearr_39110_39136 = state_39098__$1;
(statearr_39110_39136[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39099 === (2))){
var state_39098__$1 = state_39098;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39098__$1,(4),ch);
} else {
if((state_val_39099 === (11))){
var inst_39058 = (state_39098[(8)]);
var inst_39063 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39064 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_39058);
var inst_39065 = cljs.core.async.timeout.call(null,(1000));
var inst_39066 = [inst_39064,inst_39065];
var inst_39067 = (new cljs.core.PersistentVector(null,2,(5),inst_39063,inst_39066,null));
var state_39098__$1 = state_39098;
return cljs.core.async.ioc_alts_BANG_.call(null,state_39098__$1,(14),inst_39067);
} else {
if((state_val_39099 === (9))){
var inst_39058 = (state_39098[(8)]);
var inst_39084 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_39085 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_39058);
var inst_39086 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_39085);
var inst_39087 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_39086)].join('');
var inst_39088 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_39087);
var state_39098__$1 = (function (){var statearr_39111 = state_39098;
(statearr_39111[(10)] = inst_39084);

return statearr_39111;
})();
var statearr_39112_39137 = state_39098__$1;
(statearr_39112_39137[(2)] = inst_39088);

(statearr_39112_39137[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39099 === (5))){
var inst_39051 = (state_39098[(7)]);
var inst_39053 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_39054 = (new cljs.core.PersistentArrayMap(null,2,inst_39053,null));
var inst_39055 = (new cljs.core.PersistentHashSet(null,inst_39054,null));
var inst_39056 = figwheel.client.focus_msgs.call(null,inst_39055,inst_39051);
var inst_39057 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_39056);
var inst_39058 = cljs.core.first.call(null,inst_39056);
var inst_39059 = figwheel.client.autoload_QMARK_.call(null);
var state_39098__$1 = (function (){var statearr_39113 = state_39098;
(statearr_39113[(8)] = inst_39058);

(statearr_39113[(9)] = inst_39057);

return statearr_39113;
})();
if(cljs.core.truth_(inst_39059)){
var statearr_39114_39138 = state_39098__$1;
(statearr_39114_39138[(1)] = (8));

} else {
var statearr_39115_39139 = state_39098__$1;
(statearr_39115_39139[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39099 === (14))){
var inst_39069 = (state_39098[(2)]);
var state_39098__$1 = state_39098;
var statearr_39116_39140 = state_39098__$1;
(statearr_39116_39140[(2)] = inst_39069);

(statearr_39116_39140[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39099 === (16))){
var state_39098__$1 = state_39098;
var statearr_39117_39141 = state_39098__$1;
(statearr_39117_39141[(2)] = null);

(statearr_39117_39141[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39099 === (10))){
var inst_39090 = (state_39098[(2)]);
var state_39098__$1 = (function (){var statearr_39118 = state_39098;
(statearr_39118[(11)] = inst_39090);

return statearr_39118;
})();
var statearr_39119_39142 = state_39098__$1;
(statearr_39119_39142[(2)] = null);

(statearr_39119_39142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39099 === (8))){
var inst_39057 = (state_39098[(9)]);
var inst_39061 = figwheel.client.reload_file_state_QMARK_.call(null,inst_39057,opts);
var state_39098__$1 = state_39098;
if(cljs.core.truth_(inst_39061)){
var statearr_39120_39143 = state_39098__$1;
(statearr_39120_39143[(1)] = (11));

} else {
var statearr_39121_39144 = state_39098__$1;
(statearr_39121_39144[(1)] = (12));

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
});})(c__33762__auto___39126,ch))
;
return ((function (switch__33672__auto__,c__33762__auto___39126,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__33673__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__33673__auto____0 = (function (){
var statearr_39122 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39122[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__33673__auto__);

(statearr_39122[(1)] = (1));

return statearr_39122;
});
var figwheel$client$file_reloader_plugin_$_state_machine__33673__auto____1 = (function (state_39098){
while(true){
var ret_value__33674__auto__ = (function (){try{while(true){
var result__33675__auto__ = switch__33672__auto__.call(null,state_39098);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33675__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33675__auto__;
}
break;
}
}catch (e39123){if((e39123 instanceof Object)){
var ex__33676__auto__ = e39123;
var statearr_39124_39145 = state_39098;
(statearr_39124_39145[(5)] = ex__33676__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39098);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39123;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39146 = state_39098;
state_39098 = G__39146;
continue;
} else {
return ret_value__33674__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__33673__auto__ = function(state_39098){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__33673__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__33673__auto____1.call(this,state_39098);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__33673__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__33673__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__33673__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__33673__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__33673__auto__;
})()
;})(switch__33672__auto__,c__33762__auto___39126,ch))
})();
var state__33764__auto__ = (function (){var statearr_39125 = f__33763__auto__.call(null);
(statearr_39125[(6)] = c__33762__auto___39126);

return statearr_39125;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33764__auto__);
});})(c__33762__auto___39126,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__39147_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__39147_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_39149 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_39149){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e39148){if((e39148 instanceof Error)){
var e = e39148;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_39149], null));
} else {
var e = e39148;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_39149))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__39150){
var map__39151 = p__39150;
var map__39151__$1 = ((((!((map__39151 == null)))?((((map__39151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39151.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39151):map__39151);
var opts = map__39151__$1;
var build_id = cljs.core.get.call(null,map__39151__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__39151,map__39151__$1,opts,build_id){
return (function (p__39153){
var vec__39154 = p__39153;
var seq__39155 = cljs.core.seq.call(null,vec__39154);
var first__39156 = cljs.core.first.call(null,seq__39155);
var seq__39155__$1 = cljs.core.next.call(null,seq__39155);
var map__39157 = first__39156;
var map__39157__$1 = ((((!((map__39157 == null)))?((((map__39157.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39157.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39157):map__39157);
var msg = map__39157__$1;
var msg_name = cljs.core.get.call(null,map__39157__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39155__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__39154,seq__39155,first__39156,seq__39155__$1,map__39157,map__39157__$1,msg,msg_name,_,map__39151,map__39151__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__39154,seq__39155,first__39156,seq__39155__$1,map__39157,map__39157__$1,msg,msg_name,_,map__39151,map__39151__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__39151,map__39151__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__39159){
var vec__39160 = p__39159;
var seq__39161 = cljs.core.seq.call(null,vec__39160);
var first__39162 = cljs.core.first.call(null,seq__39161);
var seq__39161__$1 = cljs.core.next.call(null,seq__39161);
var map__39163 = first__39162;
var map__39163__$1 = ((((!((map__39163 == null)))?((((map__39163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39163.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39163):map__39163);
var msg = map__39163__$1;
var msg_name = cljs.core.get.call(null,map__39163__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39161__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__39165){
var map__39166 = p__39165;
var map__39166__$1 = ((((!((map__39166 == null)))?((((map__39166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39166.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39166):map__39166);
var on_compile_warning = cljs.core.get.call(null,map__39166__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__39166__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__39166,map__39166__$1,on_compile_warning,on_compile_fail){
return (function (p__39168){
var vec__39169 = p__39168;
var seq__39170 = cljs.core.seq.call(null,vec__39169);
var first__39171 = cljs.core.first.call(null,seq__39170);
var seq__39170__$1 = cljs.core.next.call(null,seq__39170);
var map__39172 = first__39171;
var map__39172__$1 = ((((!((map__39172 == null)))?((((map__39172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39172.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39172):map__39172);
var msg = map__39172__$1;
var msg_name = cljs.core.get.call(null,map__39172__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39170__$1;
var pred__39174 = cljs.core._EQ_;
var expr__39175 = msg_name;
if(cljs.core.truth_(pred__39174.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__39175))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__39174.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__39175))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__39166,map__39166__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__33762__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33762__auto__,msg_hist,msg_names,msg){
return (function (){
var f__33763__auto__ = (function (){var switch__33672__auto__ = ((function (c__33762__auto__,msg_hist,msg_names,msg){
return (function (state_39264){
var state_val_39265 = (state_39264[(1)]);
if((state_val_39265 === (7))){
var inst_39184 = (state_39264[(2)]);
var state_39264__$1 = state_39264;
if(cljs.core.truth_(inst_39184)){
var statearr_39266_39313 = state_39264__$1;
(statearr_39266_39313[(1)] = (8));

} else {
var statearr_39267_39314 = state_39264__$1;
(statearr_39267_39314[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39265 === (20))){
var inst_39258 = (state_39264[(2)]);
var state_39264__$1 = state_39264;
var statearr_39268_39315 = state_39264__$1;
(statearr_39268_39315[(2)] = inst_39258);

(statearr_39268_39315[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39265 === (27))){
var inst_39254 = (state_39264[(2)]);
var state_39264__$1 = state_39264;
var statearr_39269_39316 = state_39264__$1;
(statearr_39269_39316[(2)] = inst_39254);

(statearr_39269_39316[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39265 === (1))){
var inst_39177 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_39264__$1 = state_39264;
if(cljs.core.truth_(inst_39177)){
var statearr_39270_39317 = state_39264__$1;
(statearr_39270_39317[(1)] = (2));

} else {
var statearr_39271_39318 = state_39264__$1;
(statearr_39271_39318[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39265 === (24))){
var inst_39256 = (state_39264[(2)]);
var state_39264__$1 = state_39264;
var statearr_39272_39319 = state_39264__$1;
(statearr_39272_39319[(2)] = inst_39256);

(statearr_39272_39319[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39265 === (4))){
var inst_39262 = (state_39264[(2)]);
var state_39264__$1 = state_39264;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39264__$1,inst_39262);
} else {
if((state_val_39265 === (15))){
var inst_39260 = (state_39264[(2)]);
var state_39264__$1 = state_39264;
var statearr_39273_39320 = state_39264__$1;
(statearr_39273_39320[(2)] = inst_39260);

(statearr_39273_39320[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39265 === (21))){
var inst_39213 = (state_39264[(2)]);
var inst_39214 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39215 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39214);
var state_39264__$1 = (function (){var statearr_39274 = state_39264;
(statearr_39274[(7)] = inst_39213);

return statearr_39274;
})();
var statearr_39275_39321 = state_39264__$1;
(statearr_39275_39321[(2)] = inst_39215);

(statearr_39275_39321[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39265 === (31))){
var inst_39243 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_39264__$1 = state_39264;
if(cljs.core.truth_(inst_39243)){
var statearr_39276_39322 = state_39264__$1;
(statearr_39276_39322[(1)] = (34));

} else {
var statearr_39277_39323 = state_39264__$1;
(statearr_39277_39323[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39265 === (32))){
var inst_39252 = (state_39264[(2)]);
var state_39264__$1 = state_39264;
var statearr_39278_39324 = state_39264__$1;
(statearr_39278_39324[(2)] = inst_39252);

(statearr_39278_39324[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39265 === (33))){
var inst_39239 = (state_39264[(2)]);
var inst_39240 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39241 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39240);
var state_39264__$1 = (function (){var statearr_39279 = state_39264;
(statearr_39279[(8)] = inst_39239);

return statearr_39279;
})();
var statearr_39280_39325 = state_39264__$1;
(statearr_39280_39325[(2)] = inst_39241);

(statearr_39280_39325[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39265 === (13))){
var inst_39198 = figwheel.client.heads_up.clear.call(null);
var state_39264__$1 = state_39264;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39264__$1,(16),inst_39198);
} else {
if((state_val_39265 === (22))){
var inst_39219 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39220 = figwheel.client.heads_up.append_warning_message.call(null,inst_39219);
var state_39264__$1 = state_39264;
var statearr_39281_39326 = state_39264__$1;
(statearr_39281_39326[(2)] = inst_39220);

(statearr_39281_39326[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39265 === (36))){
var inst_39250 = (state_39264[(2)]);
var state_39264__$1 = state_39264;
var statearr_39282_39327 = state_39264__$1;
(statearr_39282_39327[(2)] = inst_39250);

(statearr_39282_39327[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39265 === (29))){
var inst_39230 = (state_39264[(2)]);
var inst_39231 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39232 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39231);
var state_39264__$1 = (function (){var statearr_39283 = state_39264;
(statearr_39283[(9)] = inst_39230);

return statearr_39283;
})();
var statearr_39284_39328 = state_39264__$1;
(statearr_39284_39328[(2)] = inst_39232);

(statearr_39284_39328[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39265 === (6))){
var inst_39179 = (state_39264[(10)]);
var state_39264__$1 = state_39264;
var statearr_39285_39329 = state_39264__$1;
(statearr_39285_39329[(2)] = inst_39179);

(statearr_39285_39329[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39265 === (28))){
var inst_39226 = (state_39264[(2)]);
var inst_39227 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39228 = figwheel.client.heads_up.display_warning.call(null,inst_39227);
var state_39264__$1 = (function (){var statearr_39286 = state_39264;
(statearr_39286[(11)] = inst_39226);

return statearr_39286;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39264__$1,(29),inst_39228);
} else {
if((state_val_39265 === (25))){
var inst_39224 = figwheel.client.heads_up.clear.call(null);
var state_39264__$1 = state_39264;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39264__$1,(28),inst_39224);
} else {
if((state_val_39265 === (34))){
var inst_39245 = figwheel.client.heads_up.flash_loaded.call(null);
var state_39264__$1 = state_39264;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39264__$1,(37),inst_39245);
} else {
if((state_val_39265 === (17))){
var inst_39204 = (state_39264[(2)]);
var inst_39205 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39206 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39205);
var state_39264__$1 = (function (){var statearr_39287 = state_39264;
(statearr_39287[(12)] = inst_39204);

return statearr_39287;
})();
var statearr_39288_39330 = state_39264__$1;
(statearr_39288_39330[(2)] = inst_39206);

(statearr_39288_39330[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39265 === (3))){
var inst_39196 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_39264__$1 = state_39264;
if(cljs.core.truth_(inst_39196)){
var statearr_39289_39331 = state_39264__$1;
(statearr_39289_39331[(1)] = (13));

} else {
var statearr_39290_39332 = state_39264__$1;
(statearr_39290_39332[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39265 === (12))){
var inst_39192 = (state_39264[(2)]);
var state_39264__$1 = state_39264;
var statearr_39291_39333 = state_39264__$1;
(statearr_39291_39333[(2)] = inst_39192);

(statearr_39291_39333[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39265 === (2))){
var inst_39179 = (state_39264[(10)]);
var inst_39179__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_39264__$1 = (function (){var statearr_39292 = state_39264;
(statearr_39292[(10)] = inst_39179__$1);

return statearr_39292;
})();
if(cljs.core.truth_(inst_39179__$1)){
var statearr_39293_39334 = state_39264__$1;
(statearr_39293_39334[(1)] = (5));

} else {
var statearr_39294_39335 = state_39264__$1;
(statearr_39294_39335[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39265 === (23))){
var inst_39222 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_39264__$1 = state_39264;
if(cljs.core.truth_(inst_39222)){
var statearr_39295_39336 = state_39264__$1;
(statearr_39295_39336[(1)] = (25));

} else {
var statearr_39296_39337 = state_39264__$1;
(statearr_39296_39337[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39265 === (35))){
var state_39264__$1 = state_39264;
var statearr_39297_39338 = state_39264__$1;
(statearr_39297_39338[(2)] = null);

(statearr_39297_39338[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39265 === (19))){
var inst_39217 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_39264__$1 = state_39264;
if(cljs.core.truth_(inst_39217)){
var statearr_39298_39339 = state_39264__$1;
(statearr_39298_39339[(1)] = (22));

} else {
var statearr_39299_39340 = state_39264__$1;
(statearr_39299_39340[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39265 === (11))){
var inst_39188 = (state_39264[(2)]);
var state_39264__$1 = state_39264;
var statearr_39300_39341 = state_39264__$1;
(statearr_39300_39341[(2)] = inst_39188);

(statearr_39300_39341[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39265 === (9))){
var inst_39190 = figwheel.client.heads_up.clear.call(null);
var state_39264__$1 = state_39264;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39264__$1,(12),inst_39190);
} else {
if((state_val_39265 === (5))){
var inst_39181 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_39264__$1 = state_39264;
var statearr_39301_39342 = state_39264__$1;
(statearr_39301_39342[(2)] = inst_39181);

(statearr_39301_39342[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39265 === (14))){
var inst_39208 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_39264__$1 = state_39264;
if(cljs.core.truth_(inst_39208)){
var statearr_39302_39343 = state_39264__$1;
(statearr_39302_39343[(1)] = (18));

} else {
var statearr_39303_39344 = state_39264__$1;
(statearr_39303_39344[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39265 === (26))){
var inst_39234 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_39264__$1 = state_39264;
if(cljs.core.truth_(inst_39234)){
var statearr_39304_39345 = state_39264__$1;
(statearr_39304_39345[(1)] = (30));

} else {
var statearr_39305_39346 = state_39264__$1;
(statearr_39305_39346[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39265 === (16))){
var inst_39200 = (state_39264[(2)]);
var inst_39201 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39202 = figwheel.client.heads_up.display_exception.call(null,inst_39201);
var state_39264__$1 = (function (){var statearr_39306 = state_39264;
(statearr_39306[(13)] = inst_39200);

return statearr_39306;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39264__$1,(17),inst_39202);
} else {
if((state_val_39265 === (30))){
var inst_39236 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39237 = figwheel.client.heads_up.display_warning.call(null,inst_39236);
var state_39264__$1 = state_39264;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39264__$1,(33),inst_39237);
} else {
if((state_val_39265 === (10))){
var inst_39194 = (state_39264[(2)]);
var state_39264__$1 = state_39264;
var statearr_39307_39347 = state_39264__$1;
(statearr_39307_39347[(2)] = inst_39194);

(statearr_39307_39347[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39265 === (18))){
var inst_39210 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39211 = figwheel.client.heads_up.display_exception.call(null,inst_39210);
var state_39264__$1 = state_39264;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39264__$1,(21),inst_39211);
} else {
if((state_val_39265 === (37))){
var inst_39247 = (state_39264[(2)]);
var state_39264__$1 = state_39264;
var statearr_39308_39348 = state_39264__$1;
(statearr_39308_39348[(2)] = inst_39247);

(statearr_39308_39348[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39265 === (8))){
var inst_39186 = figwheel.client.heads_up.flash_loaded.call(null);
var state_39264__$1 = state_39264;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39264__$1,(11),inst_39186);
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
});})(c__33762__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__33672__auto__,c__33762__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33673__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33673__auto____0 = (function (){
var statearr_39309 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39309[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33673__auto__);

(statearr_39309[(1)] = (1));

return statearr_39309;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33673__auto____1 = (function (state_39264){
while(true){
var ret_value__33674__auto__ = (function (){try{while(true){
var result__33675__auto__ = switch__33672__auto__.call(null,state_39264);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33675__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33675__auto__;
}
break;
}
}catch (e39310){if((e39310 instanceof Object)){
var ex__33676__auto__ = e39310;
var statearr_39311_39349 = state_39264;
(statearr_39311_39349[(5)] = ex__33676__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39264);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39310;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39350 = state_39264;
state_39264 = G__39350;
continue;
} else {
return ret_value__33674__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33673__auto__ = function(state_39264){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33673__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33673__auto____1.call(this,state_39264);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33673__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33673__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33673__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33673__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33673__auto__;
})()
;})(switch__33672__auto__,c__33762__auto__,msg_hist,msg_names,msg))
})();
var state__33764__auto__ = (function (){var statearr_39312 = f__33763__auto__.call(null);
(statearr_39312[(6)] = c__33762__auto__);

return statearr_39312;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33764__auto__);
});})(c__33762__auto__,msg_hist,msg_names,msg))
);

return c__33762__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__33762__auto___39379 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33762__auto___39379,ch){
return (function (){
var f__33763__auto__ = (function (){var switch__33672__auto__ = ((function (c__33762__auto___39379,ch){
return (function (state_39365){
var state_val_39366 = (state_39365[(1)]);
if((state_val_39366 === (1))){
var state_39365__$1 = state_39365;
var statearr_39367_39380 = state_39365__$1;
(statearr_39367_39380[(2)] = null);

(statearr_39367_39380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39366 === (2))){
var state_39365__$1 = state_39365;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39365__$1,(4),ch);
} else {
if((state_val_39366 === (3))){
var inst_39363 = (state_39365[(2)]);
var state_39365__$1 = state_39365;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39365__$1,inst_39363);
} else {
if((state_val_39366 === (4))){
var inst_39353 = (state_39365[(7)]);
var inst_39353__$1 = (state_39365[(2)]);
var state_39365__$1 = (function (){var statearr_39368 = state_39365;
(statearr_39368[(7)] = inst_39353__$1);

return statearr_39368;
})();
if(cljs.core.truth_(inst_39353__$1)){
var statearr_39369_39381 = state_39365__$1;
(statearr_39369_39381[(1)] = (5));

} else {
var statearr_39370_39382 = state_39365__$1;
(statearr_39370_39382[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39366 === (5))){
var inst_39353 = (state_39365[(7)]);
var inst_39355 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_39353);
var state_39365__$1 = state_39365;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39365__$1,(8),inst_39355);
} else {
if((state_val_39366 === (6))){
var state_39365__$1 = state_39365;
var statearr_39371_39383 = state_39365__$1;
(statearr_39371_39383[(2)] = null);

(statearr_39371_39383[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39366 === (7))){
var inst_39361 = (state_39365[(2)]);
var state_39365__$1 = state_39365;
var statearr_39372_39384 = state_39365__$1;
(statearr_39372_39384[(2)] = inst_39361);

(statearr_39372_39384[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39366 === (8))){
var inst_39357 = (state_39365[(2)]);
var state_39365__$1 = (function (){var statearr_39373 = state_39365;
(statearr_39373[(8)] = inst_39357);

return statearr_39373;
})();
var statearr_39374_39385 = state_39365__$1;
(statearr_39374_39385[(2)] = null);

(statearr_39374_39385[(1)] = (2));


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
});})(c__33762__auto___39379,ch))
;
return ((function (switch__33672__auto__,c__33762__auto___39379,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__33673__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__33673__auto____0 = (function (){
var statearr_39375 = [null,null,null,null,null,null,null,null,null];
(statearr_39375[(0)] = figwheel$client$heads_up_plugin_$_state_machine__33673__auto__);

(statearr_39375[(1)] = (1));

return statearr_39375;
});
var figwheel$client$heads_up_plugin_$_state_machine__33673__auto____1 = (function (state_39365){
while(true){
var ret_value__33674__auto__ = (function (){try{while(true){
var result__33675__auto__ = switch__33672__auto__.call(null,state_39365);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33675__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33675__auto__;
}
break;
}
}catch (e39376){if((e39376 instanceof Object)){
var ex__33676__auto__ = e39376;
var statearr_39377_39386 = state_39365;
(statearr_39377_39386[(5)] = ex__33676__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39365);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39376;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39387 = state_39365;
state_39365 = G__39387;
continue;
} else {
return ret_value__33674__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__33673__auto__ = function(state_39365){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__33673__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__33673__auto____1.call(this,state_39365);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__33673__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__33673__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__33673__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__33673__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__33673__auto__;
})()
;})(switch__33672__auto__,c__33762__auto___39379,ch))
})();
var state__33764__auto__ = (function (){var statearr_39378 = f__33763__auto__.call(null);
(statearr_39378[(6)] = c__33762__auto___39379);

return statearr_39378;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33764__auto__);
});})(c__33762__auto___39379,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__33762__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33762__auto__){
return (function (){
var f__33763__auto__ = (function (){var switch__33672__auto__ = ((function (c__33762__auto__){
return (function (state_39393){
var state_val_39394 = (state_39393[(1)]);
if((state_val_39394 === (1))){
var inst_39388 = cljs.core.async.timeout.call(null,(3000));
var state_39393__$1 = state_39393;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39393__$1,(2),inst_39388);
} else {
if((state_val_39394 === (2))){
var inst_39390 = (state_39393[(2)]);
var inst_39391 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_39393__$1 = (function (){var statearr_39395 = state_39393;
(statearr_39395[(7)] = inst_39390);

return statearr_39395;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39393__$1,inst_39391);
} else {
return null;
}
}
});})(c__33762__auto__))
;
return ((function (switch__33672__auto__,c__33762__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__33673__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__33673__auto____0 = (function (){
var statearr_39396 = [null,null,null,null,null,null,null,null];
(statearr_39396[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__33673__auto__);

(statearr_39396[(1)] = (1));

return statearr_39396;
});
var figwheel$client$enforce_project_plugin_$_state_machine__33673__auto____1 = (function (state_39393){
while(true){
var ret_value__33674__auto__ = (function (){try{while(true){
var result__33675__auto__ = switch__33672__auto__.call(null,state_39393);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33675__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33675__auto__;
}
break;
}
}catch (e39397){if((e39397 instanceof Object)){
var ex__33676__auto__ = e39397;
var statearr_39398_39400 = state_39393;
(statearr_39398_39400[(5)] = ex__33676__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39393);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39397;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39401 = state_39393;
state_39393 = G__39401;
continue;
} else {
return ret_value__33674__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__33673__auto__ = function(state_39393){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__33673__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__33673__auto____1.call(this,state_39393);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__33673__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__33673__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__33673__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__33673__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__33673__auto__;
})()
;})(switch__33672__auto__,c__33762__auto__))
})();
var state__33764__auto__ = (function (){var statearr_39399 = f__33763__auto__.call(null);
(statearr_39399[(6)] = c__33762__auto__);

return statearr_39399;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33764__auto__);
});})(c__33762__auto__))
);

return c__33762__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__33762__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33762__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__33763__auto__ = (function (){var switch__33672__auto__ = ((function (c__33762__auto__,figwheel_version,temp__5457__auto__){
return (function (state_39408){
var state_val_39409 = (state_39408[(1)]);
if((state_val_39409 === (1))){
var inst_39402 = cljs.core.async.timeout.call(null,(2000));
var state_39408__$1 = state_39408;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39408__$1,(2),inst_39402);
} else {
if((state_val_39409 === (2))){
var inst_39404 = (state_39408[(2)]);
var inst_39405 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_39406 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_39405);
var state_39408__$1 = (function (){var statearr_39410 = state_39408;
(statearr_39410[(7)] = inst_39404);

return statearr_39410;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39408__$1,inst_39406);
} else {
return null;
}
}
});})(c__33762__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__33672__auto__,c__33762__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33673__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33673__auto____0 = (function (){
var statearr_39411 = [null,null,null,null,null,null,null,null];
(statearr_39411[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33673__auto__);

(statearr_39411[(1)] = (1));

return statearr_39411;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33673__auto____1 = (function (state_39408){
while(true){
var ret_value__33674__auto__ = (function (){try{while(true){
var result__33675__auto__ = switch__33672__auto__.call(null,state_39408);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33675__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33675__auto__;
}
break;
}
}catch (e39412){if((e39412 instanceof Object)){
var ex__33676__auto__ = e39412;
var statearr_39413_39415 = state_39408;
(statearr_39413_39415[(5)] = ex__33676__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39408);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39412;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39416 = state_39408;
state_39408 = G__39416;
continue;
} else {
return ret_value__33674__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33673__auto__ = function(state_39408){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33673__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33673__auto____1.call(this,state_39408);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33673__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33673__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33673__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33673__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33673__auto__;
})()
;})(switch__33672__auto__,c__33762__auto__,figwheel_version,temp__5457__auto__))
})();
var state__33764__auto__ = (function (){var statearr_39414 = f__33763__auto__.call(null);
(statearr_39414[(6)] = c__33762__auto__);

return statearr_39414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33764__auto__);
});})(c__33762__auto__,figwheel_version,temp__5457__auto__))
);

return c__33762__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__39417){
var map__39418 = p__39417;
var map__39418__$1 = ((((!((map__39418 == null)))?((((map__39418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39418.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39418):map__39418);
var file = cljs.core.get.call(null,map__39418__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__39418__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__39418__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__39420 = "";
var G__39420__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39420),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__39420);
var G__39420__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39420__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__39420__$1);
if(cljs.core.truth_((function (){var and__30084__auto__ = line;
if(cljs.core.truth_(and__30084__auto__)){
return column;
} else {
return and__30084__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39420__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__39420__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__39421){
var map__39422 = p__39421;
var map__39422__$1 = ((((!((map__39422 == null)))?((((map__39422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39422.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39422):map__39422);
var ed = map__39422__$1;
var formatted_exception = cljs.core.get.call(null,map__39422__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__39422__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__39422__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__39424_39428 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__39425_39429 = null;
var count__39426_39430 = (0);
var i__39427_39431 = (0);
while(true){
if((i__39427_39431 < count__39426_39430)){
var msg_39432 = cljs.core._nth.call(null,chunk__39425_39429,i__39427_39431);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_39432);

var G__39433 = seq__39424_39428;
var G__39434 = chunk__39425_39429;
var G__39435 = count__39426_39430;
var G__39436 = (i__39427_39431 + (1));
seq__39424_39428 = G__39433;
chunk__39425_39429 = G__39434;
count__39426_39430 = G__39435;
i__39427_39431 = G__39436;
continue;
} else {
var temp__5457__auto___39437 = cljs.core.seq.call(null,seq__39424_39428);
if(temp__5457__auto___39437){
var seq__39424_39438__$1 = temp__5457__auto___39437;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39424_39438__$1)){
var c__31027__auto___39439 = cljs.core.chunk_first.call(null,seq__39424_39438__$1);
var G__39440 = cljs.core.chunk_rest.call(null,seq__39424_39438__$1);
var G__39441 = c__31027__auto___39439;
var G__39442 = cljs.core.count.call(null,c__31027__auto___39439);
var G__39443 = (0);
seq__39424_39428 = G__39440;
chunk__39425_39429 = G__39441;
count__39426_39430 = G__39442;
i__39427_39431 = G__39443;
continue;
} else {
var msg_39444 = cljs.core.first.call(null,seq__39424_39438__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_39444);

var G__39445 = cljs.core.next.call(null,seq__39424_39438__$1);
var G__39446 = null;
var G__39447 = (0);
var G__39448 = (0);
seq__39424_39428 = G__39445;
chunk__39425_39429 = G__39446;
count__39426_39430 = G__39447;
i__39427_39431 = G__39448;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__39449){
var map__39450 = p__39449;
var map__39450__$1 = ((((!((map__39450 == null)))?((((map__39450.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39450.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39450):map__39450);
var w = map__39450__$1;
var message = cljs.core.get.call(null,map__39450__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,363,363,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__30084__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__30084__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__30084__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__39452 = cljs.core.seq.call(null,plugins);
var chunk__39453 = null;
var count__39454 = (0);
var i__39455 = (0);
while(true){
if((i__39455 < count__39454)){
var vec__39456 = cljs.core._nth.call(null,chunk__39453,i__39455);
var k = cljs.core.nth.call(null,vec__39456,(0),null);
var plugin = cljs.core.nth.call(null,vec__39456,(1),null);
if(cljs.core.truth_(plugin)){
var pl_39462 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__39452,chunk__39453,count__39454,i__39455,pl_39462,vec__39456,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_39462.call(null,msg_hist);
});})(seq__39452,chunk__39453,count__39454,i__39455,pl_39462,vec__39456,k,plugin))
);
} else {
}

var G__39463 = seq__39452;
var G__39464 = chunk__39453;
var G__39465 = count__39454;
var G__39466 = (i__39455 + (1));
seq__39452 = G__39463;
chunk__39453 = G__39464;
count__39454 = G__39465;
i__39455 = G__39466;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__39452);
if(temp__5457__auto__){
var seq__39452__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39452__$1)){
var c__31027__auto__ = cljs.core.chunk_first.call(null,seq__39452__$1);
var G__39467 = cljs.core.chunk_rest.call(null,seq__39452__$1);
var G__39468 = c__31027__auto__;
var G__39469 = cljs.core.count.call(null,c__31027__auto__);
var G__39470 = (0);
seq__39452 = G__39467;
chunk__39453 = G__39468;
count__39454 = G__39469;
i__39455 = G__39470;
continue;
} else {
var vec__39459 = cljs.core.first.call(null,seq__39452__$1);
var k = cljs.core.nth.call(null,vec__39459,(0),null);
var plugin = cljs.core.nth.call(null,vec__39459,(1),null);
if(cljs.core.truth_(plugin)){
var pl_39471 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__39452,chunk__39453,count__39454,i__39455,pl_39471,vec__39459,k,plugin,seq__39452__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_39471.call(null,msg_hist);
});})(seq__39452,chunk__39453,count__39454,i__39455,pl_39471,vec__39459,k,plugin,seq__39452__$1,temp__5457__auto__))
);
} else {
}

var G__39472 = cljs.core.next.call(null,seq__39452__$1);
var G__39473 = null;
var G__39474 = (0);
var G__39475 = (0);
seq__39452 = G__39472;
chunk__39453 = G__39473;
count__39454 = G__39474;
i__39455 = G__39475;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__39477 = arguments.length;
switch (G__39477) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__39478_39483 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__39479_39484 = null;
var count__39480_39485 = (0);
var i__39481_39486 = (0);
while(true){
if((i__39481_39486 < count__39480_39485)){
var msg_39487 = cljs.core._nth.call(null,chunk__39479_39484,i__39481_39486);
figwheel.client.socket.handle_incoming_message.call(null,msg_39487);

var G__39488 = seq__39478_39483;
var G__39489 = chunk__39479_39484;
var G__39490 = count__39480_39485;
var G__39491 = (i__39481_39486 + (1));
seq__39478_39483 = G__39488;
chunk__39479_39484 = G__39489;
count__39480_39485 = G__39490;
i__39481_39486 = G__39491;
continue;
} else {
var temp__5457__auto___39492 = cljs.core.seq.call(null,seq__39478_39483);
if(temp__5457__auto___39492){
var seq__39478_39493__$1 = temp__5457__auto___39492;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39478_39493__$1)){
var c__31027__auto___39494 = cljs.core.chunk_first.call(null,seq__39478_39493__$1);
var G__39495 = cljs.core.chunk_rest.call(null,seq__39478_39493__$1);
var G__39496 = c__31027__auto___39494;
var G__39497 = cljs.core.count.call(null,c__31027__auto___39494);
var G__39498 = (0);
seq__39478_39483 = G__39495;
chunk__39479_39484 = G__39496;
count__39480_39485 = G__39497;
i__39481_39486 = G__39498;
continue;
} else {
var msg_39499 = cljs.core.first.call(null,seq__39478_39493__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_39499);

var G__39500 = cljs.core.next.call(null,seq__39478_39493__$1);
var G__39501 = null;
var G__39502 = (0);
var G__39503 = (0);
seq__39478_39483 = G__39500;
chunk__39479_39484 = G__39501;
count__39480_39485 = G__39502;
i__39481_39486 = G__39503;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__31382__auto__ = [];
var len__31375__auto___39508 = arguments.length;
var i__31376__auto___39509 = (0);
while(true){
if((i__31376__auto___39509 < len__31375__auto___39508)){
args__31382__auto__.push((arguments[i__31376__auto___39509]));

var G__39510 = (i__31376__auto___39509 + (1));
i__31376__auto___39509 = G__39510;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((0) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__31383__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__39505){
var map__39506 = p__39505;
var map__39506__$1 = ((((!((map__39506 == null)))?((((map__39506.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39506.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39506):map__39506);
var opts = map__39506__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq39504){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39504));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e39511){if((e39511 instanceof Error)){
var e = e39511;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e39511;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__39512){
var map__39513 = p__39512;
var map__39513__$1 = ((((!((map__39513 == null)))?((((map__39513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39513.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39513):map__39513);
var msg_name = cljs.core.get.call(null,map__39513__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1511975722467
