// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__33822 = arguments.length;
switch (G__33822) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async33823 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33823 = (function (f,blockable,meta33824){
this.f = f;
this.blockable = blockable;
this.meta33824 = meta33824;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33823.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33825,meta33824__$1){
var self__ = this;
var _33825__$1 = this;
return (new cljs.core.async.t_cljs$core$async33823(self__.f,self__.blockable,meta33824__$1));
});

cljs.core.async.t_cljs$core$async33823.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33825){
var self__ = this;
var _33825__$1 = this;
return self__.meta33824;
});

cljs.core.async.t_cljs$core$async33823.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33823.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33823.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async33823.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async33823.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta33824","meta33824",-315406175,null)], null);
});

cljs.core.async.t_cljs$core$async33823.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33823.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33823";

cljs.core.async.t_cljs$core$async33823.cljs$lang$ctorPrWriter = (function (this__30767__auto__,writer__30768__auto__,opt__30769__auto__){
return cljs.core._write.call(null,writer__30768__auto__,"cljs.core.async/t_cljs$core$async33823");
});

cljs.core.async.__GT_t_cljs$core$async33823 = (function cljs$core$async$__GT_t_cljs$core$async33823(f__$1,blockable__$1,meta33824){
return (new cljs.core.async.t_cljs$core$async33823(f__$1,blockable__$1,meta33824));
});

}

return (new cljs.core.async.t_cljs$core$async33823(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__33829 = arguments.length;
switch (G__33829) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__33832 = arguments.length;
switch (G__33832) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__33835 = arguments.length;
switch (G__33835) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_33837 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_33837);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_33837,ret){
return (function (){
return fn1.call(null,val_33837);
});})(val_33837,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__33839 = arguments.length;
switch (G__33839) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__31141__auto___33841 = n;
var x_33842 = (0);
while(true){
if((x_33842 < n__31141__auto___33841)){
(a[x_33842] = (0));

var G__33843 = (x_33842 + (1));
x_33842 = G__33843;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__33844 = (i + (1));
i = G__33844;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async33845 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33845 = (function (flag,meta33846){
this.flag = flag;
this.meta33846 = meta33846;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33845.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_33847,meta33846__$1){
var self__ = this;
var _33847__$1 = this;
return (new cljs.core.async.t_cljs$core$async33845(self__.flag,meta33846__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async33845.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_33847){
var self__ = this;
var _33847__$1 = this;
return self__.meta33846;
});})(flag))
;

cljs.core.async.t_cljs$core$async33845.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33845.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async33845.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33845.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33845.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33846","meta33846",1875237065,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async33845.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33845.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33845";

cljs.core.async.t_cljs$core$async33845.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__30767__auto__,writer__30768__auto__,opt__30769__auto__){
return cljs.core._write.call(null,writer__30768__auto__,"cljs.core.async/t_cljs$core$async33845");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async33845 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async33845(flag__$1,meta33846){
return (new cljs.core.async.t_cljs$core$async33845(flag__$1,meta33846));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async33845(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async33848 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33848 = (function (flag,cb,meta33849){
this.flag = flag;
this.cb = cb;
this.meta33849 = meta33849;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33848.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33850,meta33849__$1){
var self__ = this;
var _33850__$1 = this;
return (new cljs.core.async.t_cljs$core$async33848(self__.flag,self__.cb,meta33849__$1));
});

cljs.core.async.t_cljs$core$async33848.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33850){
var self__ = this;
var _33850__$1 = this;
return self__.meta33849;
});

cljs.core.async.t_cljs$core$async33848.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33848.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async33848.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33848.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async33848.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33849","meta33849",975871176,null)], null);
});

cljs.core.async.t_cljs$core$async33848.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33848.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33848";

cljs.core.async.t_cljs$core$async33848.cljs$lang$ctorPrWriter = (function (this__30767__auto__,writer__30768__auto__,opt__30769__auto__){
return cljs.core._write.call(null,writer__30768__auto__,"cljs.core.async/t_cljs$core$async33848");
});

cljs.core.async.__GT_t_cljs$core$async33848 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async33848(flag__$1,cb__$1,meta33849){
return (new cljs.core.async.t_cljs$core$async33848(flag__$1,cb__$1,meta33849));
});

}

return (new cljs.core.async.t_cljs$core$async33848(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33851_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33851_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33852_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33852_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__30096__auto__ = wport;
if(cljs.core.truth_(or__30096__auto__)){
return or__30096__auto__;
} else {
return port;
}
})()], null));
} else {
var G__33853 = (i + (1));
i = G__33853;
continue;
}
} else {
return null;
}
break;
}
})();
var or__30096__auto__ = ret;
if(cljs.core.truth_(or__30096__auto__)){
return or__30096__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__30084__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__30084__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__30084__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__31382__auto__ = [];
var len__31375__auto___33859 = arguments.length;
var i__31376__auto___33860 = (0);
while(true){
if((i__31376__auto___33860 < len__31375__auto___33859)){
args__31382__auto__.push((arguments[i__31376__auto___33860]));

var G__33861 = (i__31376__auto___33860 + (1));
i__31376__auto___33860 = G__33861;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((1) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31383__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33856){
var map__33857 = p__33856;
var map__33857__$1 = ((((!((map__33857 == null)))?((((map__33857.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33857.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33857):map__33857);
var opts = map__33857__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33854){
var G__33855 = cljs.core.first.call(null,seq33854);
var seq33854__$1 = cljs.core.next.call(null,seq33854);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33855,seq33854__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__33863 = arguments.length;
switch (G__33863) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__33762__auto___33909 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33762__auto___33909){
return (function (){
var f__33763__auto__ = (function (){var switch__33672__auto__ = ((function (c__33762__auto___33909){
return (function (state_33887){
var state_val_33888 = (state_33887[(1)]);
if((state_val_33888 === (7))){
var inst_33883 = (state_33887[(2)]);
var state_33887__$1 = state_33887;
var statearr_33889_33910 = state_33887__$1;
(statearr_33889_33910[(2)] = inst_33883);

(statearr_33889_33910[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33888 === (1))){
var state_33887__$1 = state_33887;
var statearr_33890_33911 = state_33887__$1;
(statearr_33890_33911[(2)] = null);

(statearr_33890_33911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33888 === (4))){
var inst_33866 = (state_33887[(7)]);
var inst_33866__$1 = (state_33887[(2)]);
var inst_33867 = (inst_33866__$1 == null);
var state_33887__$1 = (function (){var statearr_33891 = state_33887;
(statearr_33891[(7)] = inst_33866__$1);

return statearr_33891;
})();
if(cljs.core.truth_(inst_33867)){
var statearr_33892_33912 = state_33887__$1;
(statearr_33892_33912[(1)] = (5));

} else {
var statearr_33893_33913 = state_33887__$1;
(statearr_33893_33913[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33888 === (13))){
var state_33887__$1 = state_33887;
var statearr_33894_33914 = state_33887__$1;
(statearr_33894_33914[(2)] = null);

(statearr_33894_33914[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33888 === (6))){
var inst_33866 = (state_33887[(7)]);
var state_33887__$1 = state_33887;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33887__$1,(11),to,inst_33866);
} else {
if((state_val_33888 === (3))){
var inst_33885 = (state_33887[(2)]);
var state_33887__$1 = state_33887;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33887__$1,inst_33885);
} else {
if((state_val_33888 === (12))){
var state_33887__$1 = state_33887;
var statearr_33895_33915 = state_33887__$1;
(statearr_33895_33915[(2)] = null);

(statearr_33895_33915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33888 === (2))){
var state_33887__$1 = state_33887;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33887__$1,(4),from);
} else {
if((state_val_33888 === (11))){
var inst_33876 = (state_33887[(2)]);
var state_33887__$1 = state_33887;
if(cljs.core.truth_(inst_33876)){
var statearr_33896_33916 = state_33887__$1;
(statearr_33896_33916[(1)] = (12));

} else {
var statearr_33897_33917 = state_33887__$1;
(statearr_33897_33917[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33888 === (9))){
var state_33887__$1 = state_33887;
var statearr_33898_33918 = state_33887__$1;
(statearr_33898_33918[(2)] = null);

(statearr_33898_33918[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33888 === (5))){
var state_33887__$1 = state_33887;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33899_33919 = state_33887__$1;
(statearr_33899_33919[(1)] = (8));

} else {
var statearr_33900_33920 = state_33887__$1;
(statearr_33900_33920[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33888 === (14))){
var inst_33881 = (state_33887[(2)]);
var state_33887__$1 = state_33887;
var statearr_33901_33921 = state_33887__$1;
(statearr_33901_33921[(2)] = inst_33881);

(statearr_33901_33921[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33888 === (10))){
var inst_33873 = (state_33887[(2)]);
var state_33887__$1 = state_33887;
var statearr_33902_33922 = state_33887__$1;
(statearr_33902_33922[(2)] = inst_33873);

(statearr_33902_33922[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33888 === (8))){
var inst_33870 = cljs.core.async.close_BANG_.call(null,to);
var state_33887__$1 = state_33887;
var statearr_33903_33923 = state_33887__$1;
(statearr_33903_33923[(2)] = inst_33870);

(statearr_33903_33923[(1)] = (10));


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
});})(c__33762__auto___33909))
;
return ((function (switch__33672__auto__,c__33762__auto___33909){
return (function() {
var cljs$core$async$state_machine__33673__auto__ = null;
var cljs$core$async$state_machine__33673__auto____0 = (function (){
var statearr_33904 = [null,null,null,null,null,null,null,null];
(statearr_33904[(0)] = cljs$core$async$state_machine__33673__auto__);

(statearr_33904[(1)] = (1));

return statearr_33904;
});
var cljs$core$async$state_machine__33673__auto____1 = (function (state_33887){
while(true){
var ret_value__33674__auto__ = (function (){try{while(true){
var result__33675__auto__ = switch__33672__auto__.call(null,state_33887);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33675__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33675__auto__;
}
break;
}
}catch (e33905){if((e33905 instanceof Object)){
var ex__33676__auto__ = e33905;
var statearr_33906_33924 = state_33887;
(statearr_33906_33924[(5)] = ex__33676__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33887);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33905;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33925 = state_33887;
state_33887 = G__33925;
continue;
} else {
return ret_value__33674__auto__;
}
break;
}
});
cljs$core$async$state_machine__33673__auto__ = function(state_33887){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33673__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33673__auto____1.call(this,state_33887);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33673__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33673__auto____0;
cljs$core$async$state_machine__33673__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33673__auto____1;
return cljs$core$async$state_machine__33673__auto__;
})()
;})(switch__33672__auto__,c__33762__auto___33909))
})();
var state__33764__auto__ = (function (){var statearr_33907 = f__33763__auto__.call(null);
(statearr_33907[(6)] = c__33762__auto___33909);

return statearr_33907;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33764__auto__);
});})(c__33762__auto___33909))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__33926){
var vec__33927 = p__33926;
var v = cljs.core.nth.call(null,vec__33927,(0),null);
var p = cljs.core.nth.call(null,vec__33927,(1),null);
var job = vec__33927;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__33762__auto___34098 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33762__auto___34098,res,vec__33927,v,p,job,jobs,results){
return (function (){
var f__33763__auto__ = (function (){var switch__33672__auto__ = ((function (c__33762__auto___34098,res,vec__33927,v,p,job,jobs,results){
return (function (state_33934){
var state_val_33935 = (state_33934[(1)]);
if((state_val_33935 === (1))){
var state_33934__$1 = state_33934;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33934__$1,(2),res,v);
} else {
if((state_val_33935 === (2))){
var inst_33931 = (state_33934[(2)]);
var inst_33932 = cljs.core.async.close_BANG_.call(null,res);
var state_33934__$1 = (function (){var statearr_33936 = state_33934;
(statearr_33936[(7)] = inst_33931);

return statearr_33936;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33934__$1,inst_33932);
} else {
return null;
}
}
});})(c__33762__auto___34098,res,vec__33927,v,p,job,jobs,results))
;
return ((function (switch__33672__auto__,c__33762__auto___34098,res,vec__33927,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33673__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33673__auto____0 = (function (){
var statearr_33937 = [null,null,null,null,null,null,null,null];
(statearr_33937[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33673__auto__);

(statearr_33937[(1)] = (1));

return statearr_33937;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33673__auto____1 = (function (state_33934){
while(true){
var ret_value__33674__auto__ = (function (){try{while(true){
var result__33675__auto__ = switch__33672__auto__.call(null,state_33934);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33675__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33675__auto__;
}
break;
}
}catch (e33938){if((e33938 instanceof Object)){
var ex__33676__auto__ = e33938;
var statearr_33939_34099 = state_33934;
(statearr_33939_34099[(5)] = ex__33676__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33934);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33938;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34100 = state_33934;
state_33934 = G__34100;
continue;
} else {
return ret_value__33674__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33673__auto__ = function(state_33934){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33673__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33673__auto____1.call(this,state_33934);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33673__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33673__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33673__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33673__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33673__auto__;
})()
;})(switch__33672__auto__,c__33762__auto___34098,res,vec__33927,v,p,job,jobs,results))
})();
var state__33764__auto__ = (function (){var statearr_33940 = f__33763__auto__.call(null);
(statearr_33940[(6)] = c__33762__auto___34098);

return statearr_33940;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33764__auto__);
});})(c__33762__auto___34098,res,vec__33927,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__33941){
var vec__33942 = p__33941;
var v = cljs.core.nth.call(null,vec__33942,(0),null);
var p = cljs.core.nth.call(null,vec__33942,(1),null);
var job = vec__33942;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__31141__auto___34101 = n;
var __34102 = (0);
while(true){
if((__34102 < n__31141__auto___34101)){
var G__33945_34103 = type;
var G__33945_34104__$1 = (((G__33945_34103 instanceof cljs.core.Keyword))?G__33945_34103.fqn:null);
switch (G__33945_34104__$1) {
case "compute":
var c__33762__auto___34106 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__34102,c__33762__auto___34106,G__33945_34103,G__33945_34104__$1,n__31141__auto___34101,jobs,results,process,async){
return (function (){
var f__33763__auto__ = (function (){var switch__33672__auto__ = ((function (__34102,c__33762__auto___34106,G__33945_34103,G__33945_34104__$1,n__31141__auto___34101,jobs,results,process,async){
return (function (state_33958){
var state_val_33959 = (state_33958[(1)]);
if((state_val_33959 === (1))){
var state_33958__$1 = state_33958;
var statearr_33960_34107 = state_33958__$1;
(statearr_33960_34107[(2)] = null);

(statearr_33960_34107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33959 === (2))){
var state_33958__$1 = state_33958;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33958__$1,(4),jobs);
} else {
if((state_val_33959 === (3))){
var inst_33956 = (state_33958[(2)]);
var state_33958__$1 = state_33958;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33958__$1,inst_33956);
} else {
if((state_val_33959 === (4))){
var inst_33948 = (state_33958[(2)]);
var inst_33949 = process.call(null,inst_33948);
var state_33958__$1 = state_33958;
if(cljs.core.truth_(inst_33949)){
var statearr_33961_34108 = state_33958__$1;
(statearr_33961_34108[(1)] = (5));

} else {
var statearr_33962_34109 = state_33958__$1;
(statearr_33962_34109[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33959 === (5))){
var state_33958__$1 = state_33958;
var statearr_33963_34110 = state_33958__$1;
(statearr_33963_34110[(2)] = null);

(statearr_33963_34110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33959 === (6))){
var state_33958__$1 = state_33958;
var statearr_33964_34111 = state_33958__$1;
(statearr_33964_34111[(2)] = null);

(statearr_33964_34111[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33959 === (7))){
var inst_33954 = (state_33958[(2)]);
var state_33958__$1 = state_33958;
var statearr_33965_34112 = state_33958__$1;
(statearr_33965_34112[(2)] = inst_33954);

(statearr_33965_34112[(1)] = (3));


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
});})(__34102,c__33762__auto___34106,G__33945_34103,G__33945_34104__$1,n__31141__auto___34101,jobs,results,process,async))
;
return ((function (__34102,switch__33672__auto__,c__33762__auto___34106,G__33945_34103,G__33945_34104__$1,n__31141__auto___34101,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33673__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33673__auto____0 = (function (){
var statearr_33966 = [null,null,null,null,null,null,null];
(statearr_33966[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33673__auto__);

(statearr_33966[(1)] = (1));

return statearr_33966;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33673__auto____1 = (function (state_33958){
while(true){
var ret_value__33674__auto__ = (function (){try{while(true){
var result__33675__auto__ = switch__33672__auto__.call(null,state_33958);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33675__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33675__auto__;
}
break;
}
}catch (e33967){if((e33967 instanceof Object)){
var ex__33676__auto__ = e33967;
var statearr_33968_34113 = state_33958;
(statearr_33968_34113[(5)] = ex__33676__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33958);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33967;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34114 = state_33958;
state_33958 = G__34114;
continue;
} else {
return ret_value__33674__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33673__auto__ = function(state_33958){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33673__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33673__auto____1.call(this,state_33958);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33673__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33673__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33673__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33673__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33673__auto__;
})()
;})(__34102,switch__33672__auto__,c__33762__auto___34106,G__33945_34103,G__33945_34104__$1,n__31141__auto___34101,jobs,results,process,async))
})();
var state__33764__auto__ = (function (){var statearr_33969 = f__33763__auto__.call(null);
(statearr_33969[(6)] = c__33762__auto___34106);

return statearr_33969;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33764__auto__);
});})(__34102,c__33762__auto___34106,G__33945_34103,G__33945_34104__$1,n__31141__auto___34101,jobs,results,process,async))
);


break;
case "async":
var c__33762__auto___34115 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__34102,c__33762__auto___34115,G__33945_34103,G__33945_34104__$1,n__31141__auto___34101,jobs,results,process,async){
return (function (){
var f__33763__auto__ = (function (){var switch__33672__auto__ = ((function (__34102,c__33762__auto___34115,G__33945_34103,G__33945_34104__$1,n__31141__auto___34101,jobs,results,process,async){
return (function (state_33982){
var state_val_33983 = (state_33982[(1)]);
if((state_val_33983 === (1))){
var state_33982__$1 = state_33982;
var statearr_33984_34116 = state_33982__$1;
(statearr_33984_34116[(2)] = null);

(statearr_33984_34116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33983 === (2))){
var state_33982__$1 = state_33982;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33982__$1,(4),jobs);
} else {
if((state_val_33983 === (3))){
var inst_33980 = (state_33982[(2)]);
var state_33982__$1 = state_33982;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33982__$1,inst_33980);
} else {
if((state_val_33983 === (4))){
var inst_33972 = (state_33982[(2)]);
var inst_33973 = async.call(null,inst_33972);
var state_33982__$1 = state_33982;
if(cljs.core.truth_(inst_33973)){
var statearr_33985_34117 = state_33982__$1;
(statearr_33985_34117[(1)] = (5));

} else {
var statearr_33986_34118 = state_33982__$1;
(statearr_33986_34118[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33983 === (5))){
var state_33982__$1 = state_33982;
var statearr_33987_34119 = state_33982__$1;
(statearr_33987_34119[(2)] = null);

(statearr_33987_34119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33983 === (6))){
var state_33982__$1 = state_33982;
var statearr_33988_34120 = state_33982__$1;
(statearr_33988_34120[(2)] = null);

(statearr_33988_34120[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33983 === (7))){
var inst_33978 = (state_33982[(2)]);
var state_33982__$1 = state_33982;
var statearr_33989_34121 = state_33982__$1;
(statearr_33989_34121[(2)] = inst_33978);

(statearr_33989_34121[(1)] = (3));


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
});})(__34102,c__33762__auto___34115,G__33945_34103,G__33945_34104__$1,n__31141__auto___34101,jobs,results,process,async))
;
return ((function (__34102,switch__33672__auto__,c__33762__auto___34115,G__33945_34103,G__33945_34104__$1,n__31141__auto___34101,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33673__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33673__auto____0 = (function (){
var statearr_33990 = [null,null,null,null,null,null,null];
(statearr_33990[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33673__auto__);

(statearr_33990[(1)] = (1));

return statearr_33990;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33673__auto____1 = (function (state_33982){
while(true){
var ret_value__33674__auto__ = (function (){try{while(true){
var result__33675__auto__ = switch__33672__auto__.call(null,state_33982);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33675__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33675__auto__;
}
break;
}
}catch (e33991){if((e33991 instanceof Object)){
var ex__33676__auto__ = e33991;
var statearr_33992_34122 = state_33982;
(statearr_33992_34122[(5)] = ex__33676__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33982);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33991;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34123 = state_33982;
state_33982 = G__34123;
continue;
} else {
return ret_value__33674__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33673__auto__ = function(state_33982){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33673__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33673__auto____1.call(this,state_33982);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33673__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33673__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33673__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33673__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33673__auto__;
})()
;})(__34102,switch__33672__auto__,c__33762__auto___34115,G__33945_34103,G__33945_34104__$1,n__31141__auto___34101,jobs,results,process,async))
})();
var state__33764__auto__ = (function (){var statearr_33993 = f__33763__auto__.call(null);
(statearr_33993[(6)] = c__33762__auto___34115);

return statearr_33993;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33764__auto__);
});})(__34102,c__33762__auto___34115,G__33945_34103,G__33945_34104__$1,n__31141__auto___34101,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33945_34104__$1)].join('')));

}

var G__34124 = (__34102 + (1));
__34102 = G__34124;
continue;
} else {
}
break;
}

var c__33762__auto___34125 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33762__auto___34125,jobs,results,process,async){
return (function (){
var f__33763__auto__ = (function (){var switch__33672__auto__ = ((function (c__33762__auto___34125,jobs,results,process,async){
return (function (state_34015){
var state_val_34016 = (state_34015[(1)]);
if((state_val_34016 === (1))){
var state_34015__$1 = state_34015;
var statearr_34017_34126 = state_34015__$1;
(statearr_34017_34126[(2)] = null);

(statearr_34017_34126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34016 === (2))){
var state_34015__$1 = state_34015;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34015__$1,(4),from);
} else {
if((state_val_34016 === (3))){
var inst_34013 = (state_34015[(2)]);
var state_34015__$1 = state_34015;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34015__$1,inst_34013);
} else {
if((state_val_34016 === (4))){
var inst_33996 = (state_34015[(7)]);
var inst_33996__$1 = (state_34015[(2)]);
var inst_33997 = (inst_33996__$1 == null);
var state_34015__$1 = (function (){var statearr_34018 = state_34015;
(statearr_34018[(7)] = inst_33996__$1);

return statearr_34018;
})();
if(cljs.core.truth_(inst_33997)){
var statearr_34019_34127 = state_34015__$1;
(statearr_34019_34127[(1)] = (5));

} else {
var statearr_34020_34128 = state_34015__$1;
(statearr_34020_34128[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34016 === (5))){
var inst_33999 = cljs.core.async.close_BANG_.call(null,jobs);
var state_34015__$1 = state_34015;
var statearr_34021_34129 = state_34015__$1;
(statearr_34021_34129[(2)] = inst_33999);

(statearr_34021_34129[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34016 === (6))){
var inst_34001 = (state_34015[(8)]);
var inst_33996 = (state_34015[(7)]);
var inst_34001__$1 = cljs.core.async.chan.call(null,(1));
var inst_34002 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34003 = [inst_33996,inst_34001__$1];
var inst_34004 = (new cljs.core.PersistentVector(null,2,(5),inst_34002,inst_34003,null));
var state_34015__$1 = (function (){var statearr_34022 = state_34015;
(statearr_34022[(8)] = inst_34001__$1);

return statearr_34022;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34015__$1,(8),jobs,inst_34004);
} else {
if((state_val_34016 === (7))){
var inst_34011 = (state_34015[(2)]);
var state_34015__$1 = state_34015;
var statearr_34023_34130 = state_34015__$1;
(statearr_34023_34130[(2)] = inst_34011);

(statearr_34023_34130[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34016 === (8))){
var inst_34001 = (state_34015[(8)]);
var inst_34006 = (state_34015[(2)]);
var state_34015__$1 = (function (){var statearr_34024 = state_34015;
(statearr_34024[(9)] = inst_34006);

return statearr_34024;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34015__$1,(9),results,inst_34001);
} else {
if((state_val_34016 === (9))){
var inst_34008 = (state_34015[(2)]);
var state_34015__$1 = (function (){var statearr_34025 = state_34015;
(statearr_34025[(10)] = inst_34008);

return statearr_34025;
})();
var statearr_34026_34131 = state_34015__$1;
(statearr_34026_34131[(2)] = null);

(statearr_34026_34131[(1)] = (2));


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
});})(c__33762__auto___34125,jobs,results,process,async))
;
return ((function (switch__33672__auto__,c__33762__auto___34125,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33673__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33673__auto____0 = (function (){
var statearr_34027 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34027[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33673__auto__);

(statearr_34027[(1)] = (1));

return statearr_34027;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33673__auto____1 = (function (state_34015){
while(true){
var ret_value__33674__auto__ = (function (){try{while(true){
var result__33675__auto__ = switch__33672__auto__.call(null,state_34015);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33675__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33675__auto__;
}
break;
}
}catch (e34028){if((e34028 instanceof Object)){
var ex__33676__auto__ = e34028;
var statearr_34029_34132 = state_34015;
(statearr_34029_34132[(5)] = ex__33676__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34015);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34028;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34133 = state_34015;
state_34015 = G__34133;
continue;
} else {
return ret_value__33674__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33673__auto__ = function(state_34015){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33673__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33673__auto____1.call(this,state_34015);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33673__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33673__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33673__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33673__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33673__auto__;
})()
;})(switch__33672__auto__,c__33762__auto___34125,jobs,results,process,async))
})();
var state__33764__auto__ = (function (){var statearr_34030 = f__33763__auto__.call(null);
(statearr_34030[(6)] = c__33762__auto___34125);

return statearr_34030;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33764__auto__);
});})(c__33762__auto___34125,jobs,results,process,async))
);


var c__33762__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33762__auto__,jobs,results,process,async){
return (function (){
var f__33763__auto__ = (function (){var switch__33672__auto__ = ((function (c__33762__auto__,jobs,results,process,async){
return (function (state_34068){
var state_val_34069 = (state_34068[(1)]);
if((state_val_34069 === (7))){
var inst_34064 = (state_34068[(2)]);
var state_34068__$1 = state_34068;
var statearr_34070_34134 = state_34068__$1;
(statearr_34070_34134[(2)] = inst_34064);

(statearr_34070_34134[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34069 === (20))){
var state_34068__$1 = state_34068;
var statearr_34071_34135 = state_34068__$1;
(statearr_34071_34135[(2)] = null);

(statearr_34071_34135[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34069 === (1))){
var state_34068__$1 = state_34068;
var statearr_34072_34136 = state_34068__$1;
(statearr_34072_34136[(2)] = null);

(statearr_34072_34136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34069 === (4))){
var inst_34033 = (state_34068[(7)]);
var inst_34033__$1 = (state_34068[(2)]);
var inst_34034 = (inst_34033__$1 == null);
var state_34068__$1 = (function (){var statearr_34073 = state_34068;
(statearr_34073[(7)] = inst_34033__$1);

return statearr_34073;
})();
if(cljs.core.truth_(inst_34034)){
var statearr_34074_34137 = state_34068__$1;
(statearr_34074_34137[(1)] = (5));

} else {
var statearr_34075_34138 = state_34068__$1;
(statearr_34075_34138[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34069 === (15))){
var inst_34046 = (state_34068[(8)]);
var state_34068__$1 = state_34068;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34068__$1,(18),to,inst_34046);
} else {
if((state_val_34069 === (21))){
var inst_34059 = (state_34068[(2)]);
var state_34068__$1 = state_34068;
var statearr_34076_34139 = state_34068__$1;
(statearr_34076_34139[(2)] = inst_34059);

(statearr_34076_34139[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34069 === (13))){
var inst_34061 = (state_34068[(2)]);
var state_34068__$1 = (function (){var statearr_34077 = state_34068;
(statearr_34077[(9)] = inst_34061);

return statearr_34077;
})();
var statearr_34078_34140 = state_34068__$1;
(statearr_34078_34140[(2)] = null);

(statearr_34078_34140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34069 === (6))){
var inst_34033 = (state_34068[(7)]);
var state_34068__$1 = state_34068;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34068__$1,(11),inst_34033);
} else {
if((state_val_34069 === (17))){
var inst_34054 = (state_34068[(2)]);
var state_34068__$1 = state_34068;
if(cljs.core.truth_(inst_34054)){
var statearr_34079_34141 = state_34068__$1;
(statearr_34079_34141[(1)] = (19));

} else {
var statearr_34080_34142 = state_34068__$1;
(statearr_34080_34142[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34069 === (3))){
var inst_34066 = (state_34068[(2)]);
var state_34068__$1 = state_34068;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34068__$1,inst_34066);
} else {
if((state_val_34069 === (12))){
var inst_34043 = (state_34068[(10)]);
var state_34068__$1 = state_34068;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34068__$1,(14),inst_34043);
} else {
if((state_val_34069 === (2))){
var state_34068__$1 = state_34068;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34068__$1,(4),results);
} else {
if((state_val_34069 === (19))){
var state_34068__$1 = state_34068;
var statearr_34081_34143 = state_34068__$1;
(statearr_34081_34143[(2)] = null);

(statearr_34081_34143[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34069 === (11))){
var inst_34043 = (state_34068[(2)]);
var state_34068__$1 = (function (){var statearr_34082 = state_34068;
(statearr_34082[(10)] = inst_34043);

return statearr_34082;
})();
var statearr_34083_34144 = state_34068__$1;
(statearr_34083_34144[(2)] = null);

(statearr_34083_34144[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34069 === (9))){
var state_34068__$1 = state_34068;
var statearr_34084_34145 = state_34068__$1;
(statearr_34084_34145[(2)] = null);

(statearr_34084_34145[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34069 === (5))){
var state_34068__$1 = state_34068;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34085_34146 = state_34068__$1;
(statearr_34085_34146[(1)] = (8));

} else {
var statearr_34086_34147 = state_34068__$1;
(statearr_34086_34147[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34069 === (14))){
var inst_34046 = (state_34068[(8)]);
var inst_34048 = (state_34068[(11)]);
var inst_34046__$1 = (state_34068[(2)]);
var inst_34047 = (inst_34046__$1 == null);
var inst_34048__$1 = cljs.core.not.call(null,inst_34047);
var state_34068__$1 = (function (){var statearr_34087 = state_34068;
(statearr_34087[(8)] = inst_34046__$1);

(statearr_34087[(11)] = inst_34048__$1);

return statearr_34087;
})();
if(inst_34048__$1){
var statearr_34088_34148 = state_34068__$1;
(statearr_34088_34148[(1)] = (15));

} else {
var statearr_34089_34149 = state_34068__$1;
(statearr_34089_34149[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34069 === (16))){
var inst_34048 = (state_34068[(11)]);
var state_34068__$1 = state_34068;
var statearr_34090_34150 = state_34068__$1;
(statearr_34090_34150[(2)] = inst_34048);

(statearr_34090_34150[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34069 === (10))){
var inst_34040 = (state_34068[(2)]);
var state_34068__$1 = state_34068;
var statearr_34091_34151 = state_34068__$1;
(statearr_34091_34151[(2)] = inst_34040);

(statearr_34091_34151[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34069 === (18))){
var inst_34051 = (state_34068[(2)]);
var state_34068__$1 = state_34068;
var statearr_34092_34152 = state_34068__$1;
(statearr_34092_34152[(2)] = inst_34051);

(statearr_34092_34152[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34069 === (8))){
var inst_34037 = cljs.core.async.close_BANG_.call(null,to);
var state_34068__$1 = state_34068;
var statearr_34093_34153 = state_34068__$1;
(statearr_34093_34153[(2)] = inst_34037);

(statearr_34093_34153[(1)] = (10));


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
});})(c__33762__auto__,jobs,results,process,async))
;
return ((function (switch__33672__auto__,c__33762__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33673__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33673__auto____0 = (function (){
var statearr_34094 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34094[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33673__auto__);

(statearr_34094[(1)] = (1));

return statearr_34094;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33673__auto____1 = (function (state_34068){
while(true){
var ret_value__33674__auto__ = (function (){try{while(true){
var result__33675__auto__ = switch__33672__auto__.call(null,state_34068);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33675__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33675__auto__;
}
break;
}
}catch (e34095){if((e34095 instanceof Object)){
var ex__33676__auto__ = e34095;
var statearr_34096_34154 = state_34068;
(statearr_34096_34154[(5)] = ex__33676__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34068);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34095;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34155 = state_34068;
state_34068 = G__34155;
continue;
} else {
return ret_value__33674__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33673__auto__ = function(state_34068){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33673__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33673__auto____1.call(this,state_34068);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33673__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33673__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33673__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33673__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33673__auto__;
})()
;})(switch__33672__auto__,c__33762__auto__,jobs,results,process,async))
})();
var state__33764__auto__ = (function (){var statearr_34097 = f__33763__auto__.call(null);
(statearr_34097[(6)] = c__33762__auto__);

return statearr_34097;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33764__auto__);
});})(c__33762__auto__,jobs,results,process,async))
);

return c__33762__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__34157 = arguments.length;
switch (G__34157) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__34160 = arguments.length;
switch (G__34160) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__34163 = arguments.length;
switch (G__34163) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__33762__auto___34212 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33762__auto___34212,tc,fc){
return (function (){
var f__33763__auto__ = (function (){var switch__33672__auto__ = ((function (c__33762__auto___34212,tc,fc){
return (function (state_34189){
var state_val_34190 = (state_34189[(1)]);
if((state_val_34190 === (7))){
var inst_34185 = (state_34189[(2)]);
var state_34189__$1 = state_34189;
var statearr_34191_34213 = state_34189__$1;
(statearr_34191_34213[(2)] = inst_34185);

(statearr_34191_34213[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34190 === (1))){
var state_34189__$1 = state_34189;
var statearr_34192_34214 = state_34189__$1;
(statearr_34192_34214[(2)] = null);

(statearr_34192_34214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34190 === (4))){
var inst_34166 = (state_34189[(7)]);
var inst_34166__$1 = (state_34189[(2)]);
var inst_34167 = (inst_34166__$1 == null);
var state_34189__$1 = (function (){var statearr_34193 = state_34189;
(statearr_34193[(7)] = inst_34166__$1);

return statearr_34193;
})();
if(cljs.core.truth_(inst_34167)){
var statearr_34194_34215 = state_34189__$1;
(statearr_34194_34215[(1)] = (5));

} else {
var statearr_34195_34216 = state_34189__$1;
(statearr_34195_34216[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34190 === (13))){
var state_34189__$1 = state_34189;
var statearr_34196_34217 = state_34189__$1;
(statearr_34196_34217[(2)] = null);

(statearr_34196_34217[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34190 === (6))){
var inst_34166 = (state_34189[(7)]);
var inst_34172 = p.call(null,inst_34166);
var state_34189__$1 = state_34189;
if(cljs.core.truth_(inst_34172)){
var statearr_34197_34218 = state_34189__$1;
(statearr_34197_34218[(1)] = (9));

} else {
var statearr_34198_34219 = state_34189__$1;
(statearr_34198_34219[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34190 === (3))){
var inst_34187 = (state_34189[(2)]);
var state_34189__$1 = state_34189;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34189__$1,inst_34187);
} else {
if((state_val_34190 === (12))){
var state_34189__$1 = state_34189;
var statearr_34199_34220 = state_34189__$1;
(statearr_34199_34220[(2)] = null);

(statearr_34199_34220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34190 === (2))){
var state_34189__$1 = state_34189;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34189__$1,(4),ch);
} else {
if((state_val_34190 === (11))){
var inst_34166 = (state_34189[(7)]);
var inst_34176 = (state_34189[(2)]);
var state_34189__$1 = state_34189;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34189__$1,(8),inst_34176,inst_34166);
} else {
if((state_val_34190 === (9))){
var state_34189__$1 = state_34189;
var statearr_34200_34221 = state_34189__$1;
(statearr_34200_34221[(2)] = tc);

(statearr_34200_34221[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34190 === (5))){
var inst_34169 = cljs.core.async.close_BANG_.call(null,tc);
var inst_34170 = cljs.core.async.close_BANG_.call(null,fc);
var state_34189__$1 = (function (){var statearr_34201 = state_34189;
(statearr_34201[(8)] = inst_34169);

return statearr_34201;
})();
var statearr_34202_34222 = state_34189__$1;
(statearr_34202_34222[(2)] = inst_34170);

(statearr_34202_34222[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34190 === (14))){
var inst_34183 = (state_34189[(2)]);
var state_34189__$1 = state_34189;
var statearr_34203_34223 = state_34189__$1;
(statearr_34203_34223[(2)] = inst_34183);

(statearr_34203_34223[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34190 === (10))){
var state_34189__$1 = state_34189;
var statearr_34204_34224 = state_34189__$1;
(statearr_34204_34224[(2)] = fc);

(statearr_34204_34224[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34190 === (8))){
var inst_34178 = (state_34189[(2)]);
var state_34189__$1 = state_34189;
if(cljs.core.truth_(inst_34178)){
var statearr_34205_34225 = state_34189__$1;
(statearr_34205_34225[(1)] = (12));

} else {
var statearr_34206_34226 = state_34189__$1;
(statearr_34206_34226[(1)] = (13));

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
});})(c__33762__auto___34212,tc,fc))
;
return ((function (switch__33672__auto__,c__33762__auto___34212,tc,fc){
return (function() {
var cljs$core$async$state_machine__33673__auto__ = null;
var cljs$core$async$state_machine__33673__auto____0 = (function (){
var statearr_34207 = [null,null,null,null,null,null,null,null,null];
(statearr_34207[(0)] = cljs$core$async$state_machine__33673__auto__);

(statearr_34207[(1)] = (1));

return statearr_34207;
});
var cljs$core$async$state_machine__33673__auto____1 = (function (state_34189){
while(true){
var ret_value__33674__auto__ = (function (){try{while(true){
var result__33675__auto__ = switch__33672__auto__.call(null,state_34189);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33675__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33675__auto__;
}
break;
}
}catch (e34208){if((e34208 instanceof Object)){
var ex__33676__auto__ = e34208;
var statearr_34209_34227 = state_34189;
(statearr_34209_34227[(5)] = ex__33676__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34189);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34208;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34228 = state_34189;
state_34189 = G__34228;
continue;
} else {
return ret_value__33674__auto__;
}
break;
}
});
cljs$core$async$state_machine__33673__auto__ = function(state_34189){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33673__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33673__auto____1.call(this,state_34189);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33673__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33673__auto____0;
cljs$core$async$state_machine__33673__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33673__auto____1;
return cljs$core$async$state_machine__33673__auto__;
})()
;})(switch__33672__auto__,c__33762__auto___34212,tc,fc))
})();
var state__33764__auto__ = (function (){var statearr_34210 = f__33763__auto__.call(null);
(statearr_34210[(6)] = c__33762__auto___34212);

return statearr_34210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33764__auto__);
});})(c__33762__auto___34212,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__33762__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33762__auto__){
return (function (){
var f__33763__auto__ = (function (){var switch__33672__auto__ = ((function (c__33762__auto__){
return (function (state_34249){
var state_val_34250 = (state_34249[(1)]);
if((state_val_34250 === (7))){
var inst_34245 = (state_34249[(2)]);
var state_34249__$1 = state_34249;
var statearr_34251_34269 = state_34249__$1;
(statearr_34251_34269[(2)] = inst_34245);

(statearr_34251_34269[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34250 === (1))){
var inst_34229 = init;
var state_34249__$1 = (function (){var statearr_34252 = state_34249;
(statearr_34252[(7)] = inst_34229);

return statearr_34252;
})();
var statearr_34253_34270 = state_34249__$1;
(statearr_34253_34270[(2)] = null);

(statearr_34253_34270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34250 === (4))){
var inst_34232 = (state_34249[(8)]);
var inst_34232__$1 = (state_34249[(2)]);
var inst_34233 = (inst_34232__$1 == null);
var state_34249__$1 = (function (){var statearr_34254 = state_34249;
(statearr_34254[(8)] = inst_34232__$1);

return statearr_34254;
})();
if(cljs.core.truth_(inst_34233)){
var statearr_34255_34271 = state_34249__$1;
(statearr_34255_34271[(1)] = (5));

} else {
var statearr_34256_34272 = state_34249__$1;
(statearr_34256_34272[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34250 === (6))){
var inst_34229 = (state_34249[(7)]);
var inst_34236 = (state_34249[(9)]);
var inst_34232 = (state_34249[(8)]);
var inst_34236__$1 = f.call(null,inst_34229,inst_34232);
var inst_34237 = cljs.core.reduced_QMARK_.call(null,inst_34236__$1);
var state_34249__$1 = (function (){var statearr_34257 = state_34249;
(statearr_34257[(9)] = inst_34236__$1);

return statearr_34257;
})();
if(inst_34237){
var statearr_34258_34273 = state_34249__$1;
(statearr_34258_34273[(1)] = (8));

} else {
var statearr_34259_34274 = state_34249__$1;
(statearr_34259_34274[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34250 === (3))){
var inst_34247 = (state_34249[(2)]);
var state_34249__$1 = state_34249;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34249__$1,inst_34247);
} else {
if((state_val_34250 === (2))){
var state_34249__$1 = state_34249;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34249__$1,(4),ch);
} else {
if((state_val_34250 === (9))){
var inst_34236 = (state_34249[(9)]);
var inst_34229 = inst_34236;
var state_34249__$1 = (function (){var statearr_34260 = state_34249;
(statearr_34260[(7)] = inst_34229);

return statearr_34260;
})();
var statearr_34261_34275 = state_34249__$1;
(statearr_34261_34275[(2)] = null);

(statearr_34261_34275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34250 === (5))){
var inst_34229 = (state_34249[(7)]);
var state_34249__$1 = state_34249;
var statearr_34262_34276 = state_34249__$1;
(statearr_34262_34276[(2)] = inst_34229);

(statearr_34262_34276[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34250 === (10))){
var inst_34243 = (state_34249[(2)]);
var state_34249__$1 = state_34249;
var statearr_34263_34277 = state_34249__$1;
(statearr_34263_34277[(2)] = inst_34243);

(statearr_34263_34277[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34250 === (8))){
var inst_34236 = (state_34249[(9)]);
var inst_34239 = cljs.core.deref.call(null,inst_34236);
var state_34249__$1 = state_34249;
var statearr_34264_34278 = state_34249__$1;
(statearr_34264_34278[(2)] = inst_34239);

(statearr_34264_34278[(1)] = (10));


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
});})(c__33762__auto__))
;
return ((function (switch__33672__auto__,c__33762__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__33673__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33673__auto____0 = (function (){
var statearr_34265 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34265[(0)] = cljs$core$async$reduce_$_state_machine__33673__auto__);

(statearr_34265[(1)] = (1));

return statearr_34265;
});
var cljs$core$async$reduce_$_state_machine__33673__auto____1 = (function (state_34249){
while(true){
var ret_value__33674__auto__ = (function (){try{while(true){
var result__33675__auto__ = switch__33672__auto__.call(null,state_34249);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33675__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33675__auto__;
}
break;
}
}catch (e34266){if((e34266 instanceof Object)){
var ex__33676__auto__ = e34266;
var statearr_34267_34279 = state_34249;
(statearr_34267_34279[(5)] = ex__33676__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34249);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34266;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34280 = state_34249;
state_34249 = G__34280;
continue;
} else {
return ret_value__33674__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33673__auto__ = function(state_34249){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33673__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33673__auto____1.call(this,state_34249);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__33673__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33673__auto____0;
cljs$core$async$reduce_$_state_machine__33673__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33673__auto____1;
return cljs$core$async$reduce_$_state_machine__33673__auto__;
})()
;})(switch__33672__auto__,c__33762__auto__))
})();
var state__33764__auto__ = (function (){var statearr_34268 = f__33763__auto__.call(null);
(statearr_34268[(6)] = c__33762__auto__);

return statearr_34268;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33764__auto__);
});})(c__33762__auto__))
);

return c__33762__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__33762__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33762__auto__,f__$1){
return (function (){
var f__33763__auto__ = (function (){var switch__33672__auto__ = ((function (c__33762__auto__,f__$1){
return (function (state_34286){
var state_val_34287 = (state_34286[(1)]);
if((state_val_34287 === (1))){
var inst_34281 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_34286__$1 = state_34286;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34286__$1,(2),inst_34281);
} else {
if((state_val_34287 === (2))){
var inst_34283 = (state_34286[(2)]);
var inst_34284 = f__$1.call(null,inst_34283);
var state_34286__$1 = state_34286;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34286__$1,inst_34284);
} else {
return null;
}
}
});})(c__33762__auto__,f__$1))
;
return ((function (switch__33672__auto__,c__33762__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__33673__auto__ = null;
var cljs$core$async$transduce_$_state_machine__33673__auto____0 = (function (){
var statearr_34288 = [null,null,null,null,null,null,null];
(statearr_34288[(0)] = cljs$core$async$transduce_$_state_machine__33673__auto__);

(statearr_34288[(1)] = (1));

return statearr_34288;
});
var cljs$core$async$transduce_$_state_machine__33673__auto____1 = (function (state_34286){
while(true){
var ret_value__33674__auto__ = (function (){try{while(true){
var result__33675__auto__ = switch__33672__auto__.call(null,state_34286);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33675__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33675__auto__;
}
break;
}
}catch (e34289){if((e34289 instanceof Object)){
var ex__33676__auto__ = e34289;
var statearr_34290_34292 = state_34286;
(statearr_34290_34292[(5)] = ex__33676__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34286);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34289;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34293 = state_34286;
state_34286 = G__34293;
continue;
} else {
return ret_value__33674__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33673__auto__ = function(state_34286){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33673__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33673__auto____1.call(this,state_34286);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__33673__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33673__auto____0;
cljs$core$async$transduce_$_state_machine__33673__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33673__auto____1;
return cljs$core$async$transduce_$_state_machine__33673__auto__;
})()
;})(switch__33672__auto__,c__33762__auto__,f__$1))
})();
var state__33764__auto__ = (function (){var statearr_34291 = f__33763__auto__.call(null);
(statearr_34291[(6)] = c__33762__auto__);

return statearr_34291;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33764__auto__);
});})(c__33762__auto__,f__$1))
);

return c__33762__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__34295 = arguments.length;
switch (G__34295) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__33762__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33762__auto__){
return (function (){
var f__33763__auto__ = (function (){var switch__33672__auto__ = ((function (c__33762__auto__){
return (function (state_34320){
var state_val_34321 = (state_34320[(1)]);
if((state_val_34321 === (7))){
var inst_34302 = (state_34320[(2)]);
var state_34320__$1 = state_34320;
var statearr_34322_34343 = state_34320__$1;
(statearr_34322_34343[(2)] = inst_34302);

(statearr_34322_34343[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34321 === (1))){
var inst_34296 = cljs.core.seq.call(null,coll);
var inst_34297 = inst_34296;
var state_34320__$1 = (function (){var statearr_34323 = state_34320;
(statearr_34323[(7)] = inst_34297);

return statearr_34323;
})();
var statearr_34324_34344 = state_34320__$1;
(statearr_34324_34344[(2)] = null);

(statearr_34324_34344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34321 === (4))){
var inst_34297 = (state_34320[(7)]);
var inst_34300 = cljs.core.first.call(null,inst_34297);
var state_34320__$1 = state_34320;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34320__$1,(7),ch,inst_34300);
} else {
if((state_val_34321 === (13))){
var inst_34314 = (state_34320[(2)]);
var state_34320__$1 = state_34320;
var statearr_34325_34345 = state_34320__$1;
(statearr_34325_34345[(2)] = inst_34314);

(statearr_34325_34345[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34321 === (6))){
var inst_34305 = (state_34320[(2)]);
var state_34320__$1 = state_34320;
if(cljs.core.truth_(inst_34305)){
var statearr_34326_34346 = state_34320__$1;
(statearr_34326_34346[(1)] = (8));

} else {
var statearr_34327_34347 = state_34320__$1;
(statearr_34327_34347[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34321 === (3))){
var inst_34318 = (state_34320[(2)]);
var state_34320__$1 = state_34320;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34320__$1,inst_34318);
} else {
if((state_val_34321 === (12))){
var state_34320__$1 = state_34320;
var statearr_34328_34348 = state_34320__$1;
(statearr_34328_34348[(2)] = null);

(statearr_34328_34348[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34321 === (2))){
var inst_34297 = (state_34320[(7)]);
var state_34320__$1 = state_34320;
if(cljs.core.truth_(inst_34297)){
var statearr_34329_34349 = state_34320__$1;
(statearr_34329_34349[(1)] = (4));

} else {
var statearr_34330_34350 = state_34320__$1;
(statearr_34330_34350[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34321 === (11))){
var inst_34311 = cljs.core.async.close_BANG_.call(null,ch);
var state_34320__$1 = state_34320;
var statearr_34331_34351 = state_34320__$1;
(statearr_34331_34351[(2)] = inst_34311);

(statearr_34331_34351[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34321 === (9))){
var state_34320__$1 = state_34320;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34332_34352 = state_34320__$1;
(statearr_34332_34352[(1)] = (11));

} else {
var statearr_34333_34353 = state_34320__$1;
(statearr_34333_34353[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34321 === (5))){
var inst_34297 = (state_34320[(7)]);
var state_34320__$1 = state_34320;
var statearr_34334_34354 = state_34320__$1;
(statearr_34334_34354[(2)] = inst_34297);

(statearr_34334_34354[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34321 === (10))){
var inst_34316 = (state_34320[(2)]);
var state_34320__$1 = state_34320;
var statearr_34335_34355 = state_34320__$1;
(statearr_34335_34355[(2)] = inst_34316);

(statearr_34335_34355[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34321 === (8))){
var inst_34297 = (state_34320[(7)]);
var inst_34307 = cljs.core.next.call(null,inst_34297);
var inst_34297__$1 = inst_34307;
var state_34320__$1 = (function (){var statearr_34336 = state_34320;
(statearr_34336[(7)] = inst_34297__$1);

return statearr_34336;
})();
var statearr_34337_34356 = state_34320__$1;
(statearr_34337_34356[(2)] = null);

(statearr_34337_34356[(1)] = (2));


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
});})(c__33762__auto__))
;
return ((function (switch__33672__auto__,c__33762__auto__){
return (function() {
var cljs$core$async$state_machine__33673__auto__ = null;
var cljs$core$async$state_machine__33673__auto____0 = (function (){
var statearr_34338 = [null,null,null,null,null,null,null,null];
(statearr_34338[(0)] = cljs$core$async$state_machine__33673__auto__);

(statearr_34338[(1)] = (1));

return statearr_34338;
});
var cljs$core$async$state_machine__33673__auto____1 = (function (state_34320){
while(true){
var ret_value__33674__auto__ = (function (){try{while(true){
var result__33675__auto__ = switch__33672__auto__.call(null,state_34320);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33675__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33675__auto__;
}
break;
}
}catch (e34339){if((e34339 instanceof Object)){
var ex__33676__auto__ = e34339;
var statearr_34340_34357 = state_34320;
(statearr_34340_34357[(5)] = ex__33676__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34320);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34339;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34358 = state_34320;
state_34320 = G__34358;
continue;
} else {
return ret_value__33674__auto__;
}
break;
}
});
cljs$core$async$state_machine__33673__auto__ = function(state_34320){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33673__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33673__auto____1.call(this,state_34320);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33673__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33673__auto____0;
cljs$core$async$state_machine__33673__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33673__auto____1;
return cljs$core$async$state_machine__33673__auto__;
})()
;})(switch__33672__auto__,c__33762__auto__))
})();
var state__33764__auto__ = (function (){var statearr_34341 = f__33763__auto__.call(null);
(statearr_34341[(6)] = c__33762__auto__);

return statearr_34341;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33764__auto__);
});})(c__33762__auto__))
);

return c__33762__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__30829__auto__ = (((_ == null))?null:_);
var m__30830__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__30829__auto__)]);
if(!((m__30830__auto__ == null))){
return m__30830__auto__.call(null,_);
} else {
var m__30830__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__30830__auto____$1 == null))){
return m__30830__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__30829__auto__ = (((m == null))?null:m);
var m__30830__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__30829__auto__)]);
if(!((m__30830__auto__ == null))){
return m__30830__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__30830__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__30830__auto____$1 == null))){
return m__30830__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__30829__auto__ = (((m == null))?null:m);
var m__30830__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__30829__auto__)]);
if(!((m__30830__auto__ == null))){
return m__30830__auto__.call(null,m,ch);
} else {
var m__30830__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__30830__auto____$1 == null))){
return m__30830__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__30829__auto__ = (((m == null))?null:m);
var m__30830__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__30829__auto__)]);
if(!((m__30830__auto__ == null))){
return m__30830__auto__.call(null,m);
} else {
var m__30830__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__30830__auto____$1 == null))){
return m__30830__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async34359 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34359 = (function (ch,cs,meta34360){
this.ch = ch;
this.cs = cs;
this.meta34360 = meta34360;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34359.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_34361,meta34360__$1){
var self__ = this;
var _34361__$1 = this;
return (new cljs.core.async.t_cljs$core$async34359(self__.ch,self__.cs,meta34360__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async34359.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_34361){
var self__ = this;
var _34361__$1 = this;
return self__.meta34360;
});})(cs))
;

cljs.core.async.t_cljs$core$async34359.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34359.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async34359.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34359.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34359.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34359.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34359.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34360","meta34360",2057262825,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async34359.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34359.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34359";

cljs.core.async.t_cljs$core$async34359.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__30767__auto__,writer__30768__auto__,opt__30769__auto__){
return cljs.core._write.call(null,writer__30768__auto__,"cljs.core.async/t_cljs$core$async34359");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async34359 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async34359(ch__$1,cs__$1,meta34360){
return (new cljs.core.async.t_cljs$core$async34359(ch__$1,cs__$1,meta34360));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async34359(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__33762__auto___34581 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33762__auto___34581,cs,m,dchan,dctr,done){
return (function (){
var f__33763__auto__ = (function (){var switch__33672__auto__ = ((function (c__33762__auto___34581,cs,m,dchan,dctr,done){
return (function (state_34496){
var state_val_34497 = (state_34496[(1)]);
if((state_val_34497 === (7))){
var inst_34492 = (state_34496[(2)]);
var state_34496__$1 = state_34496;
var statearr_34498_34582 = state_34496__$1;
(statearr_34498_34582[(2)] = inst_34492);

(statearr_34498_34582[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34497 === (20))){
var inst_34395 = (state_34496[(7)]);
var inst_34407 = cljs.core.first.call(null,inst_34395);
var inst_34408 = cljs.core.nth.call(null,inst_34407,(0),null);
var inst_34409 = cljs.core.nth.call(null,inst_34407,(1),null);
var state_34496__$1 = (function (){var statearr_34499 = state_34496;
(statearr_34499[(8)] = inst_34408);

return statearr_34499;
})();
if(cljs.core.truth_(inst_34409)){
var statearr_34500_34583 = state_34496__$1;
(statearr_34500_34583[(1)] = (22));

} else {
var statearr_34501_34584 = state_34496__$1;
(statearr_34501_34584[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34497 === (27))){
var inst_34364 = (state_34496[(9)]);
var inst_34439 = (state_34496[(10)]);
var inst_34444 = (state_34496[(11)]);
var inst_34437 = (state_34496[(12)]);
var inst_34444__$1 = cljs.core._nth.call(null,inst_34437,inst_34439);
var inst_34445 = cljs.core.async.put_BANG_.call(null,inst_34444__$1,inst_34364,done);
var state_34496__$1 = (function (){var statearr_34502 = state_34496;
(statearr_34502[(11)] = inst_34444__$1);

return statearr_34502;
})();
if(cljs.core.truth_(inst_34445)){
var statearr_34503_34585 = state_34496__$1;
(statearr_34503_34585[(1)] = (30));

} else {
var statearr_34504_34586 = state_34496__$1;
(statearr_34504_34586[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34497 === (1))){
var state_34496__$1 = state_34496;
var statearr_34505_34587 = state_34496__$1;
(statearr_34505_34587[(2)] = null);

(statearr_34505_34587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34497 === (24))){
var inst_34395 = (state_34496[(7)]);
var inst_34414 = (state_34496[(2)]);
var inst_34415 = cljs.core.next.call(null,inst_34395);
var inst_34373 = inst_34415;
var inst_34374 = null;
var inst_34375 = (0);
var inst_34376 = (0);
var state_34496__$1 = (function (){var statearr_34506 = state_34496;
(statearr_34506[(13)] = inst_34376);

(statearr_34506[(14)] = inst_34374);

(statearr_34506[(15)] = inst_34373);

(statearr_34506[(16)] = inst_34375);

(statearr_34506[(17)] = inst_34414);

return statearr_34506;
})();
var statearr_34507_34588 = state_34496__$1;
(statearr_34507_34588[(2)] = null);

(statearr_34507_34588[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34497 === (39))){
var state_34496__$1 = state_34496;
var statearr_34511_34589 = state_34496__$1;
(statearr_34511_34589[(2)] = null);

(statearr_34511_34589[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34497 === (4))){
var inst_34364 = (state_34496[(9)]);
var inst_34364__$1 = (state_34496[(2)]);
var inst_34365 = (inst_34364__$1 == null);
var state_34496__$1 = (function (){var statearr_34512 = state_34496;
(statearr_34512[(9)] = inst_34364__$1);

return statearr_34512;
})();
if(cljs.core.truth_(inst_34365)){
var statearr_34513_34590 = state_34496__$1;
(statearr_34513_34590[(1)] = (5));

} else {
var statearr_34514_34591 = state_34496__$1;
(statearr_34514_34591[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34497 === (15))){
var inst_34376 = (state_34496[(13)]);
var inst_34374 = (state_34496[(14)]);
var inst_34373 = (state_34496[(15)]);
var inst_34375 = (state_34496[(16)]);
var inst_34391 = (state_34496[(2)]);
var inst_34392 = (inst_34376 + (1));
var tmp34508 = inst_34374;
var tmp34509 = inst_34373;
var tmp34510 = inst_34375;
var inst_34373__$1 = tmp34509;
var inst_34374__$1 = tmp34508;
var inst_34375__$1 = tmp34510;
var inst_34376__$1 = inst_34392;
var state_34496__$1 = (function (){var statearr_34515 = state_34496;
(statearr_34515[(13)] = inst_34376__$1);

(statearr_34515[(18)] = inst_34391);

(statearr_34515[(14)] = inst_34374__$1);

(statearr_34515[(15)] = inst_34373__$1);

(statearr_34515[(16)] = inst_34375__$1);

return statearr_34515;
})();
var statearr_34516_34592 = state_34496__$1;
(statearr_34516_34592[(2)] = null);

(statearr_34516_34592[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34497 === (21))){
var inst_34418 = (state_34496[(2)]);
var state_34496__$1 = state_34496;
var statearr_34520_34593 = state_34496__$1;
(statearr_34520_34593[(2)] = inst_34418);

(statearr_34520_34593[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34497 === (31))){
var inst_34444 = (state_34496[(11)]);
var inst_34448 = done.call(null,null);
var inst_34449 = cljs.core.async.untap_STAR_.call(null,m,inst_34444);
var state_34496__$1 = (function (){var statearr_34521 = state_34496;
(statearr_34521[(19)] = inst_34448);

return statearr_34521;
})();
var statearr_34522_34594 = state_34496__$1;
(statearr_34522_34594[(2)] = inst_34449);

(statearr_34522_34594[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34497 === (32))){
var inst_34439 = (state_34496[(10)]);
var inst_34438 = (state_34496[(20)]);
var inst_34436 = (state_34496[(21)]);
var inst_34437 = (state_34496[(12)]);
var inst_34451 = (state_34496[(2)]);
var inst_34452 = (inst_34439 + (1));
var tmp34517 = inst_34438;
var tmp34518 = inst_34436;
var tmp34519 = inst_34437;
var inst_34436__$1 = tmp34518;
var inst_34437__$1 = tmp34519;
var inst_34438__$1 = tmp34517;
var inst_34439__$1 = inst_34452;
var state_34496__$1 = (function (){var statearr_34523 = state_34496;
(statearr_34523[(22)] = inst_34451);

(statearr_34523[(10)] = inst_34439__$1);

(statearr_34523[(20)] = inst_34438__$1);

(statearr_34523[(21)] = inst_34436__$1);

(statearr_34523[(12)] = inst_34437__$1);

return statearr_34523;
})();
var statearr_34524_34595 = state_34496__$1;
(statearr_34524_34595[(2)] = null);

(statearr_34524_34595[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34497 === (40))){
var inst_34464 = (state_34496[(23)]);
var inst_34468 = done.call(null,null);
var inst_34469 = cljs.core.async.untap_STAR_.call(null,m,inst_34464);
var state_34496__$1 = (function (){var statearr_34525 = state_34496;
(statearr_34525[(24)] = inst_34468);

return statearr_34525;
})();
var statearr_34526_34596 = state_34496__$1;
(statearr_34526_34596[(2)] = inst_34469);

(statearr_34526_34596[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34497 === (33))){
var inst_34455 = (state_34496[(25)]);
var inst_34457 = cljs.core.chunked_seq_QMARK_.call(null,inst_34455);
var state_34496__$1 = state_34496;
if(inst_34457){
var statearr_34527_34597 = state_34496__$1;
(statearr_34527_34597[(1)] = (36));

} else {
var statearr_34528_34598 = state_34496__$1;
(statearr_34528_34598[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34497 === (13))){
var inst_34385 = (state_34496[(26)]);
var inst_34388 = cljs.core.async.close_BANG_.call(null,inst_34385);
var state_34496__$1 = state_34496;
var statearr_34529_34599 = state_34496__$1;
(statearr_34529_34599[(2)] = inst_34388);

(statearr_34529_34599[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34497 === (22))){
var inst_34408 = (state_34496[(8)]);
var inst_34411 = cljs.core.async.close_BANG_.call(null,inst_34408);
var state_34496__$1 = state_34496;
var statearr_34530_34600 = state_34496__$1;
(statearr_34530_34600[(2)] = inst_34411);

(statearr_34530_34600[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34497 === (36))){
var inst_34455 = (state_34496[(25)]);
var inst_34459 = cljs.core.chunk_first.call(null,inst_34455);
var inst_34460 = cljs.core.chunk_rest.call(null,inst_34455);
var inst_34461 = cljs.core.count.call(null,inst_34459);
var inst_34436 = inst_34460;
var inst_34437 = inst_34459;
var inst_34438 = inst_34461;
var inst_34439 = (0);
var state_34496__$1 = (function (){var statearr_34531 = state_34496;
(statearr_34531[(10)] = inst_34439);

(statearr_34531[(20)] = inst_34438);

(statearr_34531[(21)] = inst_34436);

(statearr_34531[(12)] = inst_34437);

return statearr_34531;
})();
var statearr_34532_34601 = state_34496__$1;
(statearr_34532_34601[(2)] = null);

(statearr_34532_34601[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34497 === (41))){
var inst_34455 = (state_34496[(25)]);
var inst_34471 = (state_34496[(2)]);
var inst_34472 = cljs.core.next.call(null,inst_34455);
var inst_34436 = inst_34472;
var inst_34437 = null;
var inst_34438 = (0);
var inst_34439 = (0);
var state_34496__$1 = (function (){var statearr_34533 = state_34496;
(statearr_34533[(27)] = inst_34471);

(statearr_34533[(10)] = inst_34439);

(statearr_34533[(20)] = inst_34438);

(statearr_34533[(21)] = inst_34436);

(statearr_34533[(12)] = inst_34437);

return statearr_34533;
})();
var statearr_34534_34602 = state_34496__$1;
(statearr_34534_34602[(2)] = null);

(statearr_34534_34602[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34497 === (43))){
var state_34496__$1 = state_34496;
var statearr_34535_34603 = state_34496__$1;
(statearr_34535_34603[(2)] = null);

(statearr_34535_34603[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34497 === (29))){
var inst_34480 = (state_34496[(2)]);
var state_34496__$1 = state_34496;
var statearr_34536_34604 = state_34496__$1;
(statearr_34536_34604[(2)] = inst_34480);

(statearr_34536_34604[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34497 === (44))){
var inst_34489 = (state_34496[(2)]);
var state_34496__$1 = (function (){var statearr_34537 = state_34496;
(statearr_34537[(28)] = inst_34489);

return statearr_34537;
})();
var statearr_34538_34605 = state_34496__$1;
(statearr_34538_34605[(2)] = null);

(statearr_34538_34605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34497 === (6))){
var inst_34428 = (state_34496[(29)]);
var inst_34427 = cljs.core.deref.call(null,cs);
var inst_34428__$1 = cljs.core.keys.call(null,inst_34427);
var inst_34429 = cljs.core.count.call(null,inst_34428__$1);
var inst_34430 = cljs.core.reset_BANG_.call(null,dctr,inst_34429);
var inst_34435 = cljs.core.seq.call(null,inst_34428__$1);
var inst_34436 = inst_34435;
var inst_34437 = null;
var inst_34438 = (0);
var inst_34439 = (0);
var state_34496__$1 = (function (){var statearr_34539 = state_34496;
(statearr_34539[(30)] = inst_34430);

(statearr_34539[(10)] = inst_34439);

(statearr_34539[(20)] = inst_34438);

(statearr_34539[(29)] = inst_34428__$1);

(statearr_34539[(21)] = inst_34436);

(statearr_34539[(12)] = inst_34437);

return statearr_34539;
})();
var statearr_34540_34606 = state_34496__$1;
(statearr_34540_34606[(2)] = null);

(statearr_34540_34606[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34497 === (28))){
var inst_34455 = (state_34496[(25)]);
var inst_34436 = (state_34496[(21)]);
var inst_34455__$1 = cljs.core.seq.call(null,inst_34436);
var state_34496__$1 = (function (){var statearr_34541 = state_34496;
(statearr_34541[(25)] = inst_34455__$1);

return statearr_34541;
})();
if(inst_34455__$1){
var statearr_34542_34607 = state_34496__$1;
(statearr_34542_34607[(1)] = (33));

} else {
var statearr_34543_34608 = state_34496__$1;
(statearr_34543_34608[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34497 === (25))){
var inst_34439 = (state_34496[(10)]);
var inst_34438 = (state_34496[(20)]);
var inst_34441 = (inst_34439 < inst_34438);
var inst_34442 = inst_34441;
var state_34496__$1 = state_34496;
if(cljs.core.truth_(inst_34442)){
var statearr_34544_34609 = state_34496__$1;
(statearr_34544_34609[(1)] = (27));

} else {
var statearr_34545_34610 = state_34496__$1;
(statearr_34545_34610[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34497 === (34))){
var state_34496__$1 = state_34496;
var statearr_34546_34611 = state_34496__$1;
(statearr_34546_34611[(2)] = null);

(statearr_34546_34611[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34497 === (17))){
var state_34496__$1 = state_34496;
var statearr_34547_34612 = state_34496__$1;
(statearr_34547_34612[(2)] = null);

(statearr_34547_34612[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34497 === (3))){
var inst_34494 = (state_34496[(2)]);
var state_34496__$1 = state_34496;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34496__$1,inst_34494);
} else {
if((state_val_34497 === (12))){
var inst_34423 = (state_34496[(2)]);
var state_34496__$1 = state_34496;
var statearr_34548_34613 = state_34496__$1;
(statearr_34548_34613[(2)] = inst_34423);

(statearr_34548_34613[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34497 === (2))){
var state_34496__$1 = state_34496;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34496__$1,(4),ch);
} else {
if((state_val_34497 === (23))){
var state_34496__$1 = state_34496;
var statearr_34549_34614 = state_34496__$1;
(statearr_34549_34614[(2)] = null);

(statearr_34549_34614[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34497 === (35))){
var inst_34478 = (state_34496[(2)]);
var state_34496__$1 = state_34496;
var statearr_34550_34615 = state_34496__$1;
(statearr_34550_34615[(2)] = inst_34478);

(statearr_34550_34615[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34497 === (19))){
var inst_34395 = (state_34496[(7)]);
var inst_34399 = cljs.core.chunk_first.call(null,inst_34395);
var inst_34400 = cljs.core.chunk_rest.call(null,inst_34395);
var inst_34401 = cljs.core.count.call(null,inst_34399);
var inst_34373 = inst_34400;
var inst_34374 = inst_34399;
var inst_34375 = inst_34401;
var inst_34376 = (0);
var state_34496__$1 = (function (){var statearr_34551 = state_34496;
(statearr_34551[(13)] = inst_34376);

(statearr_34551[(14)] = inst_34374);

(statearr_34551[(15)] = inst_34373);

(statearr_34551[(16)] = inst_34375);

return statearr_34551;
})();
var statearr_34552_34616 = state_34496__$1;
(statearr_34552_34616[(2)] = null);

(statearr_34552_34616[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34497 === (11))){
var inst_34395 = (state_34496[(7)]);
var inst_34373 = (state_34496[(15)]);
var inst_34395__$1 = cljs.core.seq.call(null,inst_34373);
var state_34496__$1 = (function (){var statearr_34553 = state_34496;
(statearr_34553[(7)] = inst_34395__$1);

return statearr_34553;
})();
if(inst_34395__$1){
var statearr_34554_34617 = state_34496__$1;
(statearr_34554_34617[(1)] = (16));

} else {
var statearr_34555_34618 = state_34496__$1;
(statearr_34555_34618[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34497 === (9))){
var inst_34425 = (state_34496[(2)]);
var state_34496__$1 = state_34496;
var statearr_34556_34619 = state_34496__$1;
(statearr_34556_34619[(2)] = inst_34425);

(statearr_34556_34619[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34497 === (5))){
var inst_34371 = cljs.core.deref.call(null,cs);
var inst_34372 = cljs.core.seq.call(null,inst_34371);
var inst_34373 = inst_34372;
var inst_34374 = null;
var inst_34375 = (0);
var inst_34376 = (0);
var state_34496__$1 = (function (){var statearr_34557 = state_34496;
(statearr_34557[(13)] = inst_34376);

(statearr_34557[(14)] = inst_34374);

(statearr_34557[(15)] = inst_34373);

(statearr_34557[(16)] = inst_34375);

return statearr_34557;
})();
var statearr_34558_34620 = state_34496__$1;
(statearr_34558_34620[(2)] = null);

(statearr_34558_34620[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34497 === (14))){
var state_34496__$1 = state_34496;
var statearr_34559_34621 = state_34496__$1;
(statearr_34559_34621[(2)] = null);

(statearr_34559_34621[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34497 === (45))){
var inst_34486 = (state_34496[(2)]);
var state_34496__$1 = state_34496;
var statearr_34560_34622 = state_34496__$1;
(statearr_34560_34622[(2)] = inst_34486);

(statearr_34560_34622[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34497 === (26))){
var inst_34428 = (state_34496[(29)]);
var inst_34482 = (state_34496[(2)]);
var inst_34483 = cljs.core.seq.call(null,inst_34428);
var state_34496__$1 = (function (){var statearr_34561 = state_34496;
(statearr_34561[(31)] = inst_34482);

return statearr_34561;
})();
if(inst_34483){
var statearr_34562_34623 = state_34496__$1;
(statearr_34562_34623[(1)] = (42));

} else {
var statearr_34563_34624 = state_34496__$1;
(statearr_34563_34624[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34497 === (16))){
var inst_34395 = (state_34496[(7)]);
var inst_34397 = cljs.core.chunked_seq_QMARK_.call(null,inst_34395);
var state_34496__$1 = state_34496;
if(inst_34397){
var statearr_34564_34625 = state_34496__$1;
(statearr_34564_34625[(1)] = (19));

} else {
var statearr_34565_34626 = state_34496__$1;
(statearr_34565_34626[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34497 === (38))){
var inst_34475 = (state_34496[(2)]);
var state_34496__$1 = state_34496;
var statearr_34566_34627 = state_34496__$1;
(statearr_34566_34627[(2)] = inst_34475);

(statearr_34566_34627[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34497 === (30))){
var state_34496__$1 = state_34496;
var statearr_34567_34628 = state_34496__$1;
(statearr_34567_34628[(2)] = null);

(statearr_34567_34628[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34497 === (10))){
var inst_34376 = (state_34496[(13)]);
var inst_34374 = (state_34496[(14)]);
var inst_34384 = cljs.core._nth.call(null,inst_34374,inst_34376);
var inst_34385 = cljs.core.nth.call(null,inst_34384,(0),null);
var inst_34386 = cljs.core.nth.call(null,inst_34384,(1),null);
var state_34496__$1 = (function (){var statearr_34568 = state_34496;
(statearr_34568[(26)] = inst_34385);

return statearr_34568;
})();
if(cljs.core.truth_(inst_34386)){
var statearr_34569_34629 = state_34496__$1;
(statearr_34569_34629[(1)] = (13));

} else {
var statearr_34570_34630 = state_34496__$1;
(statearr_34570_34630[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34497 === (18))){
var inst_34421 = (state_34496[(2)]);
var state_34496__$1 = state_34496;
var statearr_34571_34631 = state_34496__$1;
(statearr_34571_34631[(2)] = inst_34421);

(statearr_34571_34631[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34497 === (42))){
var state_34496__$1 = state_34496;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34496__$1,(45),dchan);
} else {
if((state_val_34497 === (37))){
var inst_34364 = (state_34496[(9)]);
var inst_34464 = (state_34496[(23)]);
var inst_34455 = (state_34496[(25)]);
var inst_34464__$1 = cljs.core.first.call(null,inst_34455);
var inst_34465 = cljs.core.async.put_BANG_.call(null,inst_34464__$1,inst_34364,done);
var state_34496__$1 = (function (){var statearr_34572 = state_34496;
(statearr_34572[(23)] = inst_34464__$1);

return statearr_34572;
})();
if(cljs.core.truth_(inst_34465)){
var statearr_34573_34632 = state_34496__$1;
(statearr_34573_34632[(1)] = (39));

} else {
var statearr_34574_34633 = state_34496__$1;
(statearr_34574_34633[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34497 === (8))){
var inst_34376 = (state_34496[(13)]);
var inst_34375 = (state_34496[(16)]);
var inst_34378 = (inst_34376 < inst_34375);
var inst_34379 = inst_34378;
var state_34496__$1 = state_34496;
if(cljs.core.truth_(inst_34379)){
var statearr_34575_34634 = state_34496__$1;
(statearr_34575_34634[(1)] = (10));

} else {
var statearr_34576_34635 = state_34496__$1;
(statearr_34576_34635[(1)] = (11));

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
});})(c__33762__auto___34581,cs,m,dchan,dctr,done))
;
return ((function (switch__33672__auto__,c__33762__auto___34581,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__33673__auto__ = null;
var cljs$core$async$mult_$_state_machine__33673__auto____0 = (function (){
var statearr_34577 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34577[(0)] = cljs$core$async$mult_$_state_machine__33673__auto__);

(statearr_34577[(1)] = (1));

return statearr_34577;
});
var cljs$core$async$mult_$_state_machine__33673__auto____1 = (function (state_34496){
while(true){
var ret_value__33674__auto__ = (function (){try{while(true){
var result__33675__auto__ = switch__33672__auto__.call(null,state_34496);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33675__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33675__auto__;
}
break;
}
}catch (e34578){if((e34578 instanceof Object)){
var ex__33676__auto__ = e34578;
var statearr_34579_34636 = state_34496;
(statearr_34579_34636[(5)] = ex__33676__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34496);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34578;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34637 = state_34496;
state_34496 = G__34637;
continue;
} else {
return ret_value__33674__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33673__auto__ = function(state_34496){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33673__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33673__auto____1.call(this,state_34496);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__33673__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33673__auto____0;
cljs$core$async$mult_$_state_machine__33673__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33673__auto____1;
return cljs$core$async$mult_$_state_machine__33673__auto__;
})()
;})(switch__33672__auto__,c__33762__auto___34581,cs,m,dchan,dctr,done))
})();
var state__33764__auto__ = (function (){var statearr_34580 = f__33763__auto__.call(null);
(statearr_34580[(6)] = c__33762__auto___34581);

return statearr_34580;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33764__auto__);
});})(c__33762__auto___34581,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__34639 = arguments.length;
switch (G__34639) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__30829__auto__ = (((m == null))?null:m);
var m__30830__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__30829__auto__)]);
if(!((m__30830__auto__ == null))){
return m__30830__auto__.call(null,m,ch);
} else {
var m__30830__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__30830__auto____$1 == null))){
return m__30830__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__30829__auto__ = (((m == null))?null:m);
var m__30830__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__30829__auto__)]);
if(!((m__30830__auto__ == null))){
return m__30830__auto__.call(null,m,ch);
} else {
var m__30830__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__30830__auto____$1 == null))){
return m__30830__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__30829__auto__ = (((m == null))?null:m);
var m__30830__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__30829__auto__)]);
if(!((m__30830__auto__ == null))){
return m__30830__auto__.call(null,m);
} else {
var m__30830__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__30830__auto____$1 == null))){
return m__30830__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__30829__auto__ = (((m == null))?null:m);
var m__30830__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__30829__auto__)]);
if(!((m__30830__auto__ == null))){
return m__30830__auto__.call(null,m,state_map);
} else {
var m__30830__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__30830__auto____$1 == null))){
return m__30830__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__30829__auto__ = (((m == null))?null:m);
var m__30830__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__30829__auto__)]);
if(!((m__30830__auto__ == null))){
return m__30830__auto__.call(null,m,mode);
} else {
var m__30830__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__30830__auto____$1 == null))){
return m__30830__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__31382__auto__ = [];
var len__31375__auto___34651 = arguments.length;
var i__31376__auto___34652 = (0);
while(true){
if((i__31376__auto___34652 < len__31375__auto___34651)){
args__31382__auto__.push((arguments[i__31376__auto___34652]));

var G__34653 = (i__31376__auto___34652 + (1));
i__31376__auto___34652 = G__34653;
continue;
} else {
}
break;
}

var argseq__31383__auto__ = ((((3) < args__31382__auto__.length))?(new cljs.core.IndexedSeq(args__31382__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__31383__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__34645){
var map__34646 = p__34645;
var map__34646__$1 = ((((!((map__34646 == null)))?((((map__34646.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34646.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34646):map__34646);
var opts = map__34646__$1;
var statearr_34648_34654 = state;
(statearr_34648_34654[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__34646,map__34646__$1,opts){
return (function (val){
var statearr_34649_34655 = state;
(statearr_34649_34655[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__34646,map__34646__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_34650_34656 = state;
(statearr_34650_34656[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq34641){
var G__34642 = cljs.core.first.call(null,seq34641);
var seq34641__$1 = cljs.core.next.call(null,seq34641);
var G__34643 = cljs.core.first.call(null,seq34641__$1);
var seq34641__$2 = cljs.core.next.call(null,seq34641__$1);
var G__34644 = cljs.core.first.call(null,seq34641__$2);
var seq34641__$3 = cljs.core.next.call(null,seq34641__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__34642,G__34643,G__34644,seq34641__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async34657 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34657 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta34658){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta34658 = meta34658;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34657.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34659,meta34658__$1){
var self__ = this;
var _34659__$1 = this;
return (new cljs.core.async.t_cljs$core$async34657(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta34658__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34657.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34659){
var self__ = this;
var _34659__$1 = this;
return self__.meta34658;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34657.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34657.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34657.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34657.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34657.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34657.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34657.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34657.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34657.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta34658","meta34658",465028553,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34657.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34657.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34657";

cljs.core.async.t_cljs$core$async34657.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__30767__auto__,writer__30768__auto__,opt__30769__auto__){
return cljs.core._write.call(null,writer__30768__auto__,"cljs.core.async/t_cljs$core$async34657");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async34657 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async34657(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta34658){
return (new cljs.core.async.t_cljs$core$async34657(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta34658));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async34657(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33762__auto___34821 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33762__auto___34821,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__33763__auto__ = (function (){var switch__33672__auto__ = ((function (c__33762__auto___34821,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_34761){
var state_val_34762 = (state_34761[(1)]);
if((state_val_34762 === (7))){
var inst_34676 = (state_34761[(2)]);
var state_34761__$1 = state_34761;
var statearr_34763_34822 = state_34761__$1;
(statearr_34763_34822[(2)] = inst_34676);

(statearr_34763_34822[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34762 === (20))){
var inst_34688 = (state_34761[(7)]);
var state_34761__$1 = state_34761;
var statearr_34764_34823 = state_34761__$1;
(statearr_34764_34823[(2)] = inst_34688);

(statearr_34764_34823[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34762 === (27))){
var state_34761__$1 = state_34761;
var statearr_34765_34824 = state_34761__$1;
(statearr_34765_34824[(2)] = null);

(statearr_34765_34824[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34762 === (1))){
var inst_34663 = (state_34761[(8)]);
var inst_34663__$1 = calc_state.call(null);
var inst_34665 = (inst_34663__$1 == null);
var inst_34666 = cljs.core.not.call(null,inst_34665);
var state_34761__$1 = (function (){var statearr_34766 = state_34761;
(statearr_34766[(8)] = inst_34663__$1);

return statearr_34766;
})();
if(inst_34666){
var statearr_34767_34825 = state_34761__$1;
(statearr_34767_34825[(1)] = (2));

} else {
var statearr_34768_34826 = state_34761__$1;
(statearr_34768_34826[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34762 === (24))){
var inst_34721 = (state_34761[(9)]);
var inst_34712 = (state_34761[(10)]);
var inst_34735 = (state_34761[(11)]);
var inst_34735__$1 = inst_34712.call(null,inst_34721);
var state_34761__$1 = (function (){var statearr_34769 = state_34761;
(statearr_34769[(11)] = inst_34735__$1);

return statearr_34769;
})();
if(cljs.core.truth_(inst_34735__$1)){
var statearr_34770_34827 = state_34761__$1;
(statearr_34770_34827[(1)] = (29));

} else {
var statearr_34771_34828 = state_34761__$1;
(statearr_34771_34828[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34762 === (4))){
var inst_34679 = (state_34761[(2)]);
var state_34761__$1 = state_34761;
if(cljs.core.truth_(inst_34679)){
var statearr_34772_34829 = state_34761__$1;
(statearr_34772_34829[(1)] = (8));

} else {
var statearr_34773_34830 = state_34761__$1;
(statearr_34773_34830[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34762 === (15))){
var inst_34706 = (state_34761[(2)]);
var state_34761__$1 = state_34761;
if(cljs.core.truth_(inst_34706)){
var statearr_34774_34831 = state_34761__$1;
(statearr_34774_34831[(1)] = (19));

} else {
var statearr_34775_34832 = state_34761__$1;
(statearr_34775_34832[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34762 === (21))){
var inst_34711 = (state_34761[(12)]);
var inst_34711__$1 = (state_34761[(2)]);
var inst_34712 = cljs.core.get.call(null,inst_34711__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34713 = cljs.core.get.call(null,inst_34711__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34714 = cljs.core.get.call(null,inst_34711__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_34761__$1 = (function (){var statearr_34776 = state_34761;
(statearr_34776[(12)] = inst_34711__$1);

(statearr_34776[(13)] = inst_34713);

(statearr_34776[(10)] = inst_34712);

return statearr_34776;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_34761__$1,(22),inst_34714);
} else {
if((state_val_34762 === (31))){
var inst_34743 = (state_34761[(2)]);
var state_34761__$1 = state_34761;
if(cljs.core.truth_(inst_34743)){
var statearr_34777_34833 = state_34761__$1;
(statearr_34777_34833[(1)] = (32));

} else {
var statearr_34778_34834 = state_34761__$1;
(statearr_34778_34834[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34762 === (32))){
var inst_34720 = (state_34761[(14)]);
var state_34761__$1 = state_34761;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34761__$1,(35),out,inst_34720);
} else {
if((state_val_34762 === (33))){
var inst_34711 = (state_34761[(12)]);
var inst_34688 = inst_34711;
var state_34761__$1 = (function (){var statearr_34779 = state_34761;
(statearr_34779[(7)] = inst_34688);

return statearr_34779;
})();
var statearr_34780_34835 = state_34761__$1;
(statearr_34780_34835[(2)] = null);

(statearr_34780_34835[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34762 === (13))){
var inst_34688 = (state_34761[(7)]);
var inst_34695 = inst_34688.cljs$lang$protocol_mask$partition0$;
var inst_34696 = (inst_34695 & (64));
var inst_34697 = inst_34688.cljs$core$ISeq$;
var inst_34698 = (cljs.core.PROTOCOL_SENTINEL === inst_34697);
var inst_34699 = (inst_34696) || (inst_34698);
var state_34761__$1 = state_34761;
if(cljs.core.truth_(inst_34699)){
var statearr_34781_34836 = state_34761__$1;
(statearr_34781_34836[(1)] = (16));

} else {
var statearr_34782_34837 = state_34761__$1;
(statearr_34782_34837[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34762 === (22))){
var inst_34721 = (state_34761[(9)]);
var inst_34720 = (state_34761[(14)]);
var inst_34719 = (state_34761[(2)]);
var inst_34720__$1 = cljs.core.nth.call(null,inst_34719,(0),null);
var inst_34721__$1 = cljs.core.nth.call(null,inst_34719,(1),null);
var inst_34722 = (inst_34720__$1 == null);
var inst_34723 = cljs.core._EQ_.call(null,inst_34721__$1,change);
var inst_34724 = (inst_34722) || (inst_34723);
var state_34761__$1 = (function (){var statearr_34783 = state_34761;
(statearr_34783[(9)] = inst_34721__$1);

(statearr_34783[(14)] = inst_34720__$1);

return statearr_34783;
})();
if(cljs.core.truth_(inst_34724)){
var statearr_34784_34838 = state_34761__$1;
(statearr_34784_34838[(1)] = (23));

} else {
var statearr_34785_34839 = state_34761__$1;
(statearr_34785_34839[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34762 === (36))){
var inst_34711 = (state_34761[(12)]);
var inst_34688 = inst_34711;
var state_34761__$1 = (function (){var statearr_34786 = state_34761;
(statearr_34786[(7)] = inst_34688);

return statearr_34786;
})();
var statearr_34787_34840 = state_34761__$1;
(statearr_34787_34840[(2)] = null);

(statearr_34787_34840[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34762 === (29))){
var inst_34735 = (state_34761[(11)]);
var state_34761__$1 = state_34761;
var statearr_34788_34841 = state_34761__$1;
(statearr_34788_34841[(2)] = inst_34735);

(statearr_34788_34841[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34762 === (6))){
var state_34761__$1 = state_34761;
var statearr_34789_34842 = state_34761__$1;
(statearr_34789_34842[(2)] = false);

(statearr_34789_34842[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34762 === (28))){
var inst_34731 = (state_34761[(2)]);
var inst_34732 = calc_state.call(null);
var inst_34688 = inst_34732;
var state_34761__$1 = (function (){var statearr_34790 = state_34761;
(statearr_34790[(15)] = inst_34731);

(statearr_34790[(7)] = inst_34688);

return statearr_34790;
})();
var statearr_34791_34843 = state_34761__$1;
(statearr_34791_34843[(2)] = null);

(statearr_34791_34843[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34762 === (25))){
var inst_34757 = (state_34761[(2)]);
var state_34761__$1 = state_34761;
var statearr_34792_34844 = state_34761__$1;
(statearr_34792_34844[(2)] = inst_34757);

(statearr_34792_34844[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34762 === (34))){
var inst_34755 = (state_34761[(2)]);
var state_34761__$1 = state_34761;
var statearr_34793_34845 = state_34761__$1;
(statearr_34793_34845[(2)] = inst_34755);

(statearr_34793_34845[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34762 === (17))){
var state_34761__$1 = state_34761;
var statearr_34794_34846 = state_34761__$1;
(statearr_34794_34846[(2)] = false);

(statearr_34794_34846[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34762 === (3))){
var state_34761__$1 = state_34761;
var statearr_34795_34847 = state_34761__$1;
(statearr_34795_34847[(2)] = false);

(statearr_34795_34847[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34762 === (12))){
var inst_34759 = (state_34761[(2)]);
var state_34761__$1 = state_34761;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34761__$1,inst_34759);
} else {
if((state_val_34762 === (2))){
var inst_34663 = (state_34761[(8)]);
var inst_34668 = inst_34663.cljs$lang$protocol_mask$partition0$;
var inst_34669 = (inst_34668 & (64));
var inst_34670 = inst_34663.cljs$core$ISeq$;
var inst_34671 = (cljs.core.PROTOCOL_SENTINEL === inst_34670);
var inst_34672 = (inst_34669) || (inst_34671);
var state_34761__$1 = state_34761;
if(cljs.core.truth_(inst_34672)){
var statearr_34796_34848 = state_34761__$1;
(statearr_34796_34848[(1)] = (5));

} else {
var statearr_34797_34849 = state_34761__$1;
(statearr_34797_34849[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34762 === (23))){
var inst_34720 = (state_34761[(14)]);
var inst_34726 = (inst_34720 == null);
var state_34761__$1 = state_34761;
if(cljs.core.truth_(inst_34726)){
var statearr_34798_34850 = state_34761__$1;
(statearr_34798_34850[(1)] = (26));

} else {
var statearr_34799_34851 = state_34761__$1;
(statearr_34799_34851[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34762 === (35))){
var inst_34746 = (state_34761[(2)]);
var state_34761__$1 = state_34761;
if(cljs.core.truth_(inst_34746)){
var statearr_34800_34852 = state_34761__$1;
(statearr_34800_34852[(1)] = (36));

} else {
var statearr_34801_34853 = state_34761__$1;
(statearr_34801_34853[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34762 === (19))){
var inst_34688 = (state_34761[(7)]);
var inst_34708 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34688);
var state_34761__$1 = state_34761;
var statearr_34802_34854 = state_34761__$1;
(statearr_34802_34854[(2)] = inst_34708);

(statearr_34802_34854[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34762 === (11))){
var inst_34688 = (state_34761[(7)]);
var inst_34692 = (inst_34688 == null);
var inst_34693 = cljs.core.not.call(null,inst_34692);
var state_34761__$1 = state_34761;
if(inst_34693){
var statearr_34803_34855 = state_34761__$1;
(statearr_34803_34855[(1)] = (13));

} else {
var statearr_34804_34856 = state_34761__$1;
(statearr_34804_34856[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34762 === (9))){
var inst_34663 = (state_34761[(8)]);
var state_34761__$1 = state_34761;
var statearr_34805_34857 = state_34761__$1;
(statearr_34805_34857[(2)] = inst_34663);

(statearr_34805_34857[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34762 === (5))){
var state_34761__$1 = state_34761;
var statearr_34806_34858 = state_34761__$1;
(statearr_34806_34858[(2)] = true);

(statearr_34806_34858[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34762 === (14))){
var state_34761__$1 = state_34761;
var statearr_34807_34859 = state_34761__$1;
(statearr_34807_34859[(2)] = false);

(statearr_34807_34859[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34762 === (26))){
var inst_34721 = (state_34761[(9)]);
var inst_34728 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_34721);
var state_34761__$1 = state_34761;
var statearr_34808_34860 = state_34761__$1;
(statearr_34808_34860[(2)] = inst_34728);

(statearr_34808_34860[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34762 === (16))){
var state_34761__$1 = state_34761;
var statearr_34809_34861 = state_34761__$1;
(statearr_34809_34861[(2)] = true);

(statearr_34809_34861[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34762 === (38))){
var inst_34751 = (state_34761[(2)]);
var state_34761__$1 = state_34761;
var statearr_34810_34862 = state_34761__$1;
(statearr_34810_34862[(2)] = inst_34751);

(statearr_34810_34862[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34762 === (30))){
var inst_34721 = (state_34761[(9)]);
var inst_34713 = (state_34761[(13)]);
var inst_34712 = (state_34761[(10)]);
var inst_34738 = cljs.core.empty_QMARK_.call(null,inst_34712);
var inst_34739 = inst_34713.call(null,inst_34721);
var inst_34740 = cljs.core.not.call(null,inst_34739);
var inst_34741 = (inst_34738) && (inst_34740);
var state_34761__$1 = state_34761;
var statearr_34811_34863 = state_34761__$1;
(statearr_34811_34863[(2)] = inst_34741);

(statearr_34811_34863[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34762 === (10))){
var inst_34663 = (state_34761[(8)]);
var inst_34684 = (state_34761[(2)]);
var inst_34685 = cljs.core.get.call(null,inst_34684,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34686 = cljs.core.get.call(null,inst_34684,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34687 = cljs.core.get.call(null,inst_34684,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_34688 = inst_34663;
var state_34761__$1 = (function (){var statearr_34812 = state_34761;
(statearr_34812[(16)] = inst_34685);

(statearr_34812[(17)] = inst_34687);

(statearr_34812[(18)] = inst_34686);

(statearr_34812[(7)] = inst_34688);

return statearr_34812;
})();
var statearr_34813_34864 = state_34761__$1;
(statearr_34813_34864[(2)] = null);

(statearr_34813_34864[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34762 === (18))){
var inst_34703 = (state_34761[(2)]);
var state_34761__$1 = state_34761;
var statearr_34814_34865 = state_34761__$1;
(statearr_34814_34865[(2)] = inst_34703);

(statearr_34814_34865[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34762 === (37))){
var state_34761__$1 = state_34761;
var statearr_34815_34866 = state_34761__$1;
(statearr_34815_34866[(2)] = null);

(statearr_34815_34866[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34762 === (8))){
var inst_34663 = (state_34761[(8)]);
var inst_34681 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34663);
var state_34761__$1 = state_34761;
var statearr_34816_34867 = state_34761__$1;
(statearr_34816_34867[(2)] = inst_34681);

(statearr_34816_34867[(1)] = (10));


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
});})(c__33762__auto___34821,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__33672__auto__,c__33762__auto___34821,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__33673__auto__ = null;
var cljs$core$async$mix_$_state_machine__33673__auto____0 = (function (){
var statearr_34817 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34817[(0)] = cljs$core$async$mix_$_state_machine__33673__auto__);

(statearr_34817[(1)] = (1));

return statearr_34817;
});
var cljs$core$async$mix_$_state_machine__33673__auto____1 = (function (state_34761){
while(true){
var ret_value__33674__auto__ = (function (){try{while(true){
var result__33675__auto__ = switch__33672__auto__.call(null,state_34761);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33675__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33675__auto__;
}
break;
}
}catch (e34818){if((e34818 instanceof Object)){
var ex__33676__auto__ = e34818;
var statearr_34819_34868 = state_34761;
(statearr_34819_34868[(5)] = ex__33676__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34761);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34818;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34869 = state_34761;
state_34761 = G__34869;
continue;
} else {
return ret_value__33674__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33673__auto__ = function(state_34761){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33673__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33673__auto____1.call(this,state_34761);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__33673__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33673__auto____0;
cljs$core$async$mix_$_state_machine__33673__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33673__auto____1;
return cljs$core$async$mix_$_state_machine__33673__auto__;
})()
;})(switch__33672__auto__,c__33762__auto___34821,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__33764__auto__ = (function (){var statearr_34820 = f__33763__auto__.call(null);
(statearr_34820[(6)] = c__33762__auto___34821);

return statearr_34820;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33764__auto__);
});})(c__33762__auto___34821,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__30829__auto__ = (((p == null))?null:p);
var m__30830__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__30829__auto__)]);
if(!((m__30830__auto__ == null))){
return m__30830__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__30830__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__30830__auto____$1 == null))){
return m__30830__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__30829__auto__ = (((p == null))?null:p);
var m__30830__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__30829__auto__)]);
if(!((m__30830__auto__ == null))){
return m__30830__auto__.call(null,p,v,ch);
} else {
var m__30830__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__30830__auto____$1 == null))){
return m__30830__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__34871 = arguments.length;
switch (G__34871) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__30829__auto__ = (((p == null))?null:p);
var m__30830__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__30829__auto__)]);
if(!((m__30830__auto__ == null))){
return m__30830__auto__.call(null,p);
} else {
var m__30830__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__30830__auto____$1 == null))){
return m__30830__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__30829__auto__ = (((p == null))?null:p);
var m__30830__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__30829__auto__)]);
if(!((m__30830__auto__ == null))){
return m__30830__auto__.call(null,p,v);
} else {
var m__30830__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__30830__auto____$1 == null))){
return m__30830__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__34875 = arguments.length;
switch (G__34875) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__30096__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__30096__auto__)){
return or__30096__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__30096__auto__,mults){
return (function (p1__34873_SHARP_){
if(cljs.core.truth_(p1__34873_SHARP_.call(null,topic))){
return p1__34873_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__34873_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__30096__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async34876 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34876 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta34877){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta34877 = meta34877;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34876.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_34878,meta34877__$1){
var self__ = this;
var _34878__$1 = this;
return (new cljs.core.async.t_cljs$core$async34876(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta34877__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34876.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_34878){
var self__ = this;
var _34878__$1 = this;
return self__.meta34877;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34876.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34876.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34876.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34876.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34876.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34876.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34876.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34876.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta34877","meta34877",1983283533,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34876.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34876.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34876";

cljs.core.async.t_cljs$core$async34876.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__30767__auto__,writer__30768__auto__,opt__30769__auto__){
return cljs.core._write.call(null,writer__30768__auto__,"cljs.core.async/t_cljs$core$async34876");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async34876 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async34876(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34877){
return (new cljs.core.async.t_cljs$core$async34876(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34877));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async34876(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33762__auto___34996 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33762__auto___34996,mults,ensure_mult,p){
return (function (){
var f__33763__auto__ = (function (){var switch__33672__auto__ = ((function (c__33762__auto___34996,mults,ensure_mult,p){
return (function (state_34950){
var state_val_34951 = (state_34950[(1)]);
if((state_val_34951 === (7))){
var inst_34946 = (state_34950[(2)]);
var state_34950__$1 = state_34950;
var statearr_34952_34997 = state_34950__$1;
(statearr_34952_34997[(2)] = inst_34946);

(statearr_34952_34997[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34951 === (20))){
var state_34950__$1 = state_34950;
var statearr_34953_34998 = state_34950__$1;
(statearr_34953_34998[(2)] = null);

(statearr_34953_34998[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34951 === (1))){
var state_34950__$1 = state_34950;
var statearr_34954_34999 = state_34950__$1;
(statearr_34954_34999[(2)] = null);

(statearr_34954_34999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34951 === (24))){
var inst_34929 = (state_34950[(7)]);
var inst_34938 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_34929);
var state_34950__$1 = state_34950;
var statearr_34955_35000 = state_34950__$1;
(statearr_34955_35000[(2)] = inst_34938);

(statearr_34955_35000[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34951 === (4))){
var inst_34881 = (state_34950[(8)]);
var inst_34881__$1 = (state_34950[(2)]);
var inst_34882 = (inst_34881__$1 == null);
var state_34950__$1 = (function (){var statearr_34956 = state_34950;
(statearr_34956[(8)] = inst_34881__$1);

return statearr_34956;
})();
if(cljs.core.truth_(inst_34882)){
var statearr_34957_35001 = state_34950__$1;
(statearr_34957_35001[(1)] = (5));

} else {
var statearr_34958_35002 = state_34950__$1;
(statearr_34958_35002[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34951 === (15))){
var inst_34923 = (state_34950[(2)]);
var state_34950__$1 = state_34950;
var statearr_34959_35003 = state_34950__$1;
(statearr_34959_35003[(2)] = inst_34923);

(statearr_34959_35003[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34951 === (21))){
var inst_34943 = (state_34950[(2)]);
var state_34950__$1 = (function (){var statearr_34960 = state_34950;
(statearr_34960[(9)] = inst_34943);

return statearr_34960;
})();
var statearr_34961_35004 = state_34950__$1;
(statearr_34961_35004[(2)] = null);

(statearr_34961_35004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34951 === (13))){
var inst_34905 = (state_34950[(10)]);
var inst_34907 = cljs.core.chunked_seq_QMARK_.call(null,inst_34905);
var state_34950__$1 = state_34950;
if(inst_34907){
var statearr_34962_35005 = state_34950__$1;
(statearr_34962_35005[(1)] = (16));

} else {
var statearr_34963_35006 = state_34950__$1;
(statearr_34963_35006[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34951 === (22))){
var inst_34935 = (state_34950[(2)]);
var state_34950__$1 = state_34950;
if(cljs.core.truth_(inst_34935)){
var statearr_34964_35007 = state_34950__$1;
(statearr_34964_35007[(1)] = (23));

} else {
var statearr_34965_35008 = state_34950__$1;
(statearr_34965_35008[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34951 === (6))){
var inst_34929 = (state_34950[(7)]);
var inst_34931 = (state_34950[(11)]);
var inst_34881 = (state_34950[(8)]);
var inst_34929__$1 = topic_fn.call(null,inst_34881);
var inst_34930 = cljs.core.deref.call(null,mults);
var inst_34931__$1 = cljs.core.get.call(null,inst_34930,inst_34929__$1);
var state_34950__$1 = (function (){var statearr_34966 = state_34950;
(statearr_34966[(7)] = inst_34929__$1);

(statearr_34966[(11)] = inst_34931__$1);

return statearr_34966;
})();
if(cljs.core.truth_(inst_34931__$1)){
var statearr_34967_35009 = state_34950__$1;
(statearr_34967_35009[(1)] = (19));

} else {
var statearr_34968_35010 = state_34950__$1;
(statearr_34968_35010[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34951 === (25))){
var inst_34940 = (state_34950[(2)]);
var state_34950__$1 = state_34950;
var statearr_34969_35011 = state_34950__$1;
(statearr_34969_35011[(2)] = inst_34940);

(statearr_34969_35011[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34951 === (17))){
var inst_34905 = (state_34950[(10)]);
var inst_34914 = cljs.core.first.call(null,inst_34905);
var inst_34915 = cljs.core.async.muxch_STAR_.call(null,inst_34914);
var inst_34916 = cljs.core.async.close_BANG_.call(null,inst_34915);
var inst_34917 = cljs.core.next.call(null,inst_34905);
var inst_34891 = inst_34917;
var inst_34892 = null;
var inst_34893 = (0);
var inst_34894 = (0);
var state_34950__$1 = (function (){var statearr_34970 = state_34950;
(statearr_34970[(12)] = inst_34891);

(statearr_34970[(13)] = inst_34892);

(statearr_34970[(14)] = inst_34916);

(statearr_34970[(15)] = inst_34893);

(statearr_34970[(16)] = inst_34894);

return statearr_34970;
})();
var statearr_34971_35012 = state_34950__$1;
(statearr_34971_35012[(2)] = null);

(statearr_34971_35012[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34951 === (3))){
var inst_34948 = (state_34950[(2)]);
var state_34950__$1 = state_34950;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34950__$1,inst_34948);
} else {
if((state_val_34951 === (12))){
var inst_34925 = (state_34950[(2)]);
var state_34950__$1 = state_34950;
var statearr_34972_35013 = state_34950__$1;
(statearr_34972_35013[(2)] = inst_34925);

(statearr_34972_35013[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34951 === (2))){
var state_34950__$1 = state_34950;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34950__$1,(4),ch);
} else {
if((state_val_34951 === (23))){
var state_34950__$1 = state_34950;
var statearr_34973_35014 = state_34950__$1;
(statearr_34973_35014[(2)] = null);

(statearr_34973_35014[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34951 === (19))){
var inst_34931 = (state_34950[(11)]);
var inst_34881 = (state_34950[(8)]);
var inst_34933 = cljs.core.async.muxch_STAR_.call(null,inst_34931);
var state_34950__$1 = state_34950;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34950__$1,(22),inst_34933,inst_34881);
} else {
if((state_val_34951 === (11))){
var inst_34891 = (state_34950[(12)]);
var inst_34905 = (state_34950[(10)]);
var inst_34905__$1 = cljs.core.seq.call(null,inst_34891);
var state_34950__$1 = (function (){var statearr_34974 = state_34950;
(statearr_34974[(10)] = inst_34905__$1);

return statearr_34974;
})();
if(inst_34905__$1){
var statearr_34975_35015 = state_34950__$1;
(statearr_34975_35015[(1)] = (13));

} else {
var statearr_34976_35016 = state_34950__$1;
(statearr_34976_35016[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34951 === (9))){
var inst_34927 = (state_34950[(2)]);
var state_34950__$1 = state_34950;
var statearr_34977_35017 = state_34950__$1;
(statearr_34977_35017[(2)] = inst_34927);

(statearr_34977_35017[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34951 === (5))){
var inst_34888 = cljs.core.deref.call(null,mults);
var inst_34889 = cljs.core.vals.call(null,inst_34888);
var inst_34890 = cljs.core.seq.call(null,inst_34889);
var inst_34891 = inst_34890;
var inst_34892 = null;
var inst_34893 = (0);
var inst_34894 = (0);
var state_34950__$1 = (function (){var statearr_34978 = state_34950;
(statearr_34978[(12)] = inst_34891);

(statearr_34978[(13)] = inst_34892);

(statearr_34978[(15)] = inst_34893);

(statearr_34978[(16)] = inst_34894);

return statearr_34978;
})();
var statearr_34979_35018 = state_34950__$1;
(statearr_34979_35018[(2)] = null);

(statearr_34979_35018[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34951 === (14))){
var state_34950__$1 = state_34950;
var statearr_34983_35019 = state_34950__$1;
(statearr_34983_35019[(2)] = null);

(statearr_34983_35019[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34951 === (16))){
var inst_34905 = (state_34950[(10)]);
var inst_34909 = cljs.core.chunk_first.call(null,inst_34905);
var inst_34910 = cljs.core.chunk_rest.call(null,inst_34905);
var inst_34911 = cljs.core.count.call(null,inst_34909);
var inst_34891 = inst_34910;
var inst_34892 = inst_34909;
var inst_34893 = inst_34911;
var inst_34894 = (0);
var state_34950__$1 = (function (){var statearr_34984 = state_34950;
(statearr_34984[(12)] = inst_34891);

(statearr_34984[(13)] = inst_34892);

(statearr_34984[(15)] = inst_34893);

(statearr_34984[(16)] = inst_34894);

return statearr_34984;
})();
var statearr_34985_35020 = state_34950__$1;
(statearr_34985_35020[(2)] = null);

(statearr_34985_35020[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34951 === (10))){
var inst_34891 = (state_34950[(12)]);
var inst_34892 = (state_34950[(13)]);
var inst_34893 = (state_34950[(15)]);
var inst_34894 = (state_34950[(16)]);
var inst_34899 = cljs.core._nth.call(null,inst_34892,inst_34894);
var inst_34900 = cljs.core.async.muxch_STAR_.call(null,inst_34899);
var inst_34901 = cljs.core.async.close_BANG_.call(null,inst_34900);
var inst_34902 = (inst_34894 + (1));
var tmp34980 = inst_34891;
var tmp34981 = inst_34892;
var tmp34982 = inst_34893;
var inst_34891__$1 = tmp34980;
var inst_34892__$1 = tmp34981;
var inst_34893__$1 = tmp34982;
var inst_34894__$1 = inst_34902;
var state_34950__$1 = (function (){var statearr_34986 = state_34950;
(statearr_34986[(12)] = inst_34891__$1);

(statearr_34986[(17)] = inst_34901);

(statearr_34986[(13)] = inst_34892__$1);

(statearr_34986[(15)] = inst_34893__$1);

(statearr_34986[(16)] = inst_34894__$1);

return statearr_34986;
})();
var statearr_34987_35021 = state_34950__$1;
(statearr_34987_35021[(2)] = null);

(statearr_34987_35021[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34951 === (18))){
var inst_34920 = (state_34950[(2)]);
var state_34950__$1 = state_34950;
var statearr_34988_35022 = state_34950__$1;
(statearr_34988_35022[(2)] = inst_34920);

(statearr_34988_35022[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34951 === (8))){
var inst_34893 = (state_34950[(15)]);
var inst_34894 = (state_34950[(16)]);
var inst_34896 = (inst_34894 < inst_34893);
var inst_34897 = inst_34896;
var state_34950__$1 = state_34950;
if(cljs.core.truth_(inst_34897)){
var statearr_34989_35023 = state_34950__$1;
(statearr_34989_35023[(1)] = (10));

} else {
var statearr_34990_35024 = state_34950__$1;
(statearr_34990_35024[(1)] = (11));

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
});})(c__33762__auto___34996,mults,ensure_mult,p))
;
return ((function (switch__33672__auto__,c__33762__auto___34996,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__33673__auto__ = null;
var cljs$core$async$state_machine__33673__auto____0 = (function (){
var statearr_34991 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34991[(0)] = cljs$core$async$state_machine__33673__auto__);

(statearr_34991[(1)] = (1));

return statearr_34991;
});
var cljs$core$async$state_machine__33673__auto____1 = (function (state_34950){
while(true){
var ret_value__33674__auto__ = (function (){try{while(true){
var result__33675__auto__ = switch__33672__auto__.call(null,state_34950);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33675__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33675__auto__;
}
break;
}
}catch (e34992){if((e34992 instanceof Object)){
var ex__33676__auto__ = e34992;
var statearr_34993_35025 = state_34950;
(statearr_34993_35025[(5)] = ex__33676__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34950);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34992;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35026 = state_34950;
state_34950 = G__35026;
continue;
} else {
return ret_value__33674__auto__;
}
break;
}
});
cljs$core$async$state_machine__33673__auto__ = function(state_34950){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33673__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33673__auto____1.call(this,state_34950);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33673__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33673__auto____0;
cljs$core$async$state_machine__33673__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33673__auto____1;
return cljs$core$async$state_machine__33673__auto__;
})()
;})(switch__33672__auto__,c__33762__auto___34996,mults,ensure_mult,p))
})();
var state__33764__auto__ = (function (){var statearr_34994 = f__33763__auto__.call(null);
(statearr_34994[(6)] = c__33762__auto___34996);

return statearr_34994;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33764__auto__);
});})(c__33762__auto___34996,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__35028 = arguments.length;
switch (G__35028) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__35031 = arguments.length;
switch (G__35031) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__35034 = arguments.length;
switch (G__35034) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__33762__auto___35101 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33762__auto___35101,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__33763__auto__ = (function (){var switch__33672__auto__ = ((function (c__33762__auto___35101,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_35073){
var state_val_35074 = (state_35073[(1)]);
if((state_val_35074 === (7))){
var state_35073__$1 = state_35073;
var statearr_35075_35102 = state_35073__$1;
(statearr_35075_35102[(2)] = null);

(statearr_35075_35102[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35074 === (1))){
var state_35073__$1 = state_35073;
var statearr_35076_35103 = state_35073__$1;
(statearr_35076_35103[(2)] = null);

(statearr_35076_35103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35074 === (4))){
var inst_35037 = (state_35073[(7)]);
var inst_35039 = (inst_35037 < cnt);
var state_35073__$1 = state_35073;
if(cljs.core.truth_(inst_35039)){
var statearr_35077_35104 = state_35073__$1;
(statearr_35077_35104[(1)] = (6));

} else {
var statearr_35078_35105 = state_35073__$1;
(statearr_35078_35105[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35074 === (15))){
var inst_35069 = (state_35073[(2)]);
var state_35073__$1 = state_35073;
var statearr_35079_35106 = state_35073__$1;
(statearr_35079_35106[(2)] = inst_35069);

(statearr_35079_35106[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35074 === (13))){
var inst_35062 = cljs.core.async.close_BANG_.call(null,out);
var state_35073__$1 = state_35073;
var statearr_35080_35107 = state_35073__$1;
(statearr_35080_35107[(2)] = inst_35062);

(statearr_35080_35107[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35074 === (6))){
var state_35073__$1 = state_35073;
var statearr_35081_35108 = state_35073__$1;
(statearr_35081_35108[(2)] = null);

(statearr_35081_35108[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35074 === (3))){
var inst_35071 = (state_35073[(2)]);
var state_35073__$1 = state_35073;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35073__$1,inst_35071);
} else {
if((state_val_35074 === (12))){
var inst_35059 = (state_35073[(8)]);
var inst_35059__$1 = (state_35073[(2)]);
var inst_35060 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_35059__$1);
var state_35073__$1 = (function (){var statearr_35082 = state_35073;
(statearr_35082[(8)] = inst_35059__$1);

return statearr_35082;
})();
if(cljs.core.truth_(inst_35060)){
var statearr_35083_35109 = state_35073__$1;
(statearr_35083_35109[(1)] = (13));

} else {
var statearr_35084_35110 = state_35073__$1;
(statearr_35084_35110[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35074 === (2))){
var inst_35036 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_35037 = (0);
var state_35073__$1 = (function (){var statearr_35085 = state_35073;
(statearr_35085[(7)] = inst_35037);

(statearr_35085[(9)] = inst_35036);

return statearr_35085;
})();
var statearr_35086_35111 = state_35073__$1;
(statearr_35086_35111[(2)] = null);

(statearr_35086_35111[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35074 === (11))){
var inst_35037 = (state_35073[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35073,(10),Object,null,(9));
var inst_35046 = chs__$1.call(null,inst_35037);
var inst_35047 = done.call(null,inst_35037);
var inst_35048 = cljs.core.async.take_BANG_.call(null,inst_35046,inst_35047);
var state_35073__$1 = state_35073;
var statearr_35087_35112 = state_35073__$1;
(statearr_35087_35112[(2)] = inst_35048);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35073__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35074 === (9))){
var inst_35037 = (state_35073[(7)]);
var inst_35050 = (state_35073[(2)]);
var inst_35051 = (inst_35037 + (1));
var inst_35037__$1 = inst_35051;
var state_35073__$1 = (function (){var statearr_35088 = state_35073;
(statearr_35088[(7)] = inst_35037__$1);

(statearr_35088[(10)] = inst_35050);

return statearr_35088;
})();
var statearr_35089_35113 = state_35073__$1;
(statearr_35089_35113[(2)] = null);

(statearr_35089_35113[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35074 === (5))){
var inst_35057 = (state_35073[(2)]);
var state_35073__$1 = (function (){var statearr_35090 = state_35073;
(statearr_35090[(11)] = inst_35057);

return statearr_35090;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35073__$1,(12),dchan);
} else {
if((state_val_35074 === (14))){
var inst_35059 = (state_35073[(8)]);
var inst_35064 = cljs.core.apply.call(null,f,inst_35059);
var state_35073__$1 = state_35073;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35073__$1,(16),out,inst_35064);
} else {
if((state_val_35074 === (16))){
var inst_35066 = (state_35073[(2)]);
var state_35073__$1 = (function (){var statearr_35091 = state_35073;
(statearr_35091[(12)] = inst_35066);

return statearr_35091;
})();
var statearr_35092_35114 = state_35073__$1;
(statearr_35092_35114[(2)] = null);

(statearr_35092_35114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35074 === (10))){
var inst_35041 = (state_35073[(2)]);
var inst_35042 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_35073__$1 = (function (){var statearr_35093 = state_35073;
(statearr_35093[(13)] = inst_35041);

return statearr_35093;
})();
var statearr_35094_35115 = state_35073__$1;
(statearr_35094_35115[(2)] = inst_35042);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35073__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35074 === (8))){
var inst_35055 = (state_35073[(2)]);
var state_35073__$1 = state_35073;
var statearr_35095_35116 = state_35073__$1;
(statearr_35095_35116[(2)] = inst_35055);

(statearr_35095_35116[(1)] = (5));


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
});})(c__33762__auto___35101,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__33672__auto__,c__33762__auto___35101,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__33673__auto__ = null;
var cljs$core$async$state_machine__33673__auto____0 = (function (){
var statearr_35096 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35096[(0)] = cljs$core$async$state_machine__33673__auto__);

(statearr_35096[(1)] = (1));

return statearr_35096;
});
var cljs$core$async$state_machine__33673__auto____1 = (function (state_35073){
while(true){
var ret_value__33674__auto__ = (function (){try{while(true){
var result__33675__auto__ = switch__33672__auto__.call(null,state_35073);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33675__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33675__auto__;
}
break;
}
}catch (e35097){if((e35097 instanceof Object)){
var ex__33676__auto__ = e35097;
var statearr_35098_35117 = state_35073;
(statearr_35098_35117[(5)] = ex__33676__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35073);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35097;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35118 = state_35073;
state_35073 = G__35118;
continue;
} else {
return ret_value__33674__auto__;
}
break;
}
});
cljs$core$async$state_machine__33673__auto__ = function(state_35073){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33673__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33673__auto____1.call(this,state_35073);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33673__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33673__auto____0;
cljs$core$async$state_machine__33673__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33673__auto____1;
return cljs$core$async$state_machine__33673__auto__;
})()
;})(switch__33672__auto__,c__33762__auto___35101,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__33764__auto__ = (function (){var statearr_35099 = f__33763__auto__.call(null);
(statearr_35099[(6)] = c__33762__auto___35101);

return statearr_35099;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33764__auto__);
});})(c__33762__auto___35101,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__35121 = arguments.length;
switch (G__35121) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33762__auto___35175 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33762__auto___35175,out){
return (function (){
var f__33763__auto__ = (function (){var switch__33672__auto__ = ((function (c__33762__auto___35175,out){
return (function (state_35153){
var state_val_35154 = (state_35153[(1)]);
if((state_val_35154 === (7))){
var inst_35133 = (state_35153[(7)]);
var inst_35132 = (state_35153[(8)]);
var inst_35132__$1 = (state_35153[(2)]);
var inst_35133__$1 = cljs.core.nth.call(null,inst_35132__$1,(0),null);
var inst_35134 = cljs.core.nth.call(null,inst_35132__$1,(1),null);
var inst_35135 = (inst_35133__$1 == null);
var state_35153__$1 = (function (){var statearr_35155 = state_35153;
(statearr_35155[(9)] = inst_35134);

(statearr_35155[(7)] = inst_35133__$1);

(statearr_35155[(8)] = inst_35132__$1);

return statearr_35155;
})();
if(cljs.core.truth_(inst_35135)){
var statearr_35156_35176 = state_35153__$1;
(statearr_35156_35176[(1)] = (8));

} else {
var statearr_35157_35177 = state_35153__$1;
(statearr_35157_35177[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35154 === (1))){
var inst_35122 = cljs.core.vec.call(null,chs);
var inst_35123 = inst_35122;
var state_35153__$1 = (function (){var statearr_35158 = state_35153;
(statearr_35158[(10)] = inst_35123);

return statearr_35158;
})();
var statearr_35159_35178 = state_35153__$1;
(statearr_35159_35178[(2)] = null);

(statearr_35159_35178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35154 === (4))){
var inst_35123 = (state_35153[(10)]);
var state_35153__$1 = state_35153;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35153__$1,(7),inst_35123);
} else {
if((state_val_35154 === (6))){
var inst_35149 = (state_35153[(2)]);
var state_35153__$1 = state_35153;
var statearr_35160_35179 = state_35153__$1;
(statearr_35160_35179[(2)] = inst_35149);

(statearr_35160_35179[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35154 === (3))){
var inst_35151 = (state_35153[(2)]);
var state_35153__$1 = state_35153;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35153__$1,inst_35151);
} else {
if((state_val_35154 === (2))){
var inst_35123 = (state_35153[(10)]);
var inst_35125 = cljs.core.count.call(null,inst_35123);
var inst_35126 = (inst_35125 > (0));
var state_35153__$1 = state_35153;
if(cljs.core.truth_(inst_35126)){
var statearr_35162_35180 = state_35153__$1;
(statearr_35162_35180[(1)] = (4));

} else {
var statearr_35163_35181 = state_35153__$1;
(statearr_35163_35181[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35154 === (11))){
var inst_35123 = (state_35153[(10)]);
var inst_35142 = (state_35153[(2)]);
var tmp35161 = inst_35123;
var inst_35123__$1 = tmp35161;
var state_35153__$1 = (function (){var statearr_35164 = state_35153;
(statearr_35164[(10)] = inst_35123__$1);

(statearr_35164[(11)] = inst_35142);

return statearr_35164;
})();
var statearr_35165_35182 = state_35153__$1;
(statearr_35165_35182[(2)] = null);

(statearr_35165_35182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35154 === (9))){
var inst_35133 = (state_35153[(7)]);
var state_35153__$1 = state_35153;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35153__$1,(11),out,inst_35133);
} else {
if((state_val_35154 === (5))){
var inst_35147 = cljs.core.async.close_BANG_.call(null,out);
var state_35153__$1 = state_35153;
var statearr_35166_35183 = state_35153__$1;
(statearr_35166_35183[(2)] = inst_35147);

(statearr_35166_35183[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35154 === (10))){
var inst_35145 = (state_35153[(2)]);
var state_35153__$1 = state_35153;
var statearr_35167_35184 = state_35153__$1;
(statearr_35167_35184[(2)] = inst_35145);

(statearr_35167_35184[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35154 === (8))){
var inst_35123 = (state_35153[(10)]);
var inst_35134 = (state_35153[(9)]);
var inst_35133 = (state_35153[(7)]);
var inst_35132 = (state_35153[(8)]);
var inst_35137 = (function (){var cs = inst_35123;
var vec__35128 = inst_35132;
var v = inst_35133;
var c = inst_35134;
return ((function (cs,vec__35128,v,c,inst_35123,inst_35134,inst_35133,inst_35132,state_val_35154,c__33762__auto___35175,out){
return (function (p1__35119_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__35119_SHARP_);
});
;})(cs,vec__35128,v,c,inst_35123,inst_35134,inst_35133,inst_35132,state_val_35154,c__33762__auto___35175,out))
})();
var inst_35138 = cljs.core.filterv.call(null,inst_35137,inst_35123);
var inst_35123__$1 = inst_35138;
var state_35153__$1 = (function (){var statearr_35168 = state_35153;
(statearr_35168[(10)] = inst_35123__$1);

return statearr_35168;
})();
var statearr_35169_35185 = state_35153__$1;
(statearr_35169_35185[(2)] = null);

(statearr_35169_35185[(1)] = (2));


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
});})(c__33762__auto___35175,out))
;
return ((function (switch__33672__auto__,c__33762__auto___35175,out){
return (function() {
var cljs$core$async$state_machine__33673__auto__ = null;
var cljs$core$async$state_machine__33673__auto____0 = (function (){
var statearr_35170 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35170[(0)] = cljs$core$async$state_machine__33673__auto__);

(statearr_35170[(1)] = (1));

return statearr_35170;
});
var cljs$core$async$state_machine__33673__auto____1 = (function (state_35153){
while(true){
var ret_value__33674__auto__ = (function (){try{while(true){
var result__33675__auto__ = switch__33672__auto__.call(null,state_35153);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33675__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33675__auto__;
}
break;
}
}catch (e35171){if((e35171 instanceof Object)){
var ex__33676__auto__ = e35171;
var statearr_35172_35186 = state_35153;
(statearr_35172_35186[(5)] = ex__33676__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35153);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35171;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35187 = state_35153;
state_35153 = G__35187;
continue;
} else {
return ret_value__33674__auto__;
}
break;
}
});
cljs$core$async$state_machine__33673__auto__ = function(state_35153){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33673__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33673__auto____1.call(this,state_35153);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33673__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33673__auto____0;
cljs$core$async$state_machine__33673__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33673__auto____1;
return cljs$core$async$state_machine__33673__auto__;
})()
;})(switch__33672__auto__,c__33762__auto___35175,out))
})();
var state__33764__auto__ = (function (){var statearr_35173 = f__33763__auto__.call(null);
(statearr_35173[(6)] = c__33762__auto___35175);

return statearr_35173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33764__auto__);
});})(c__33762__auto___35175,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__35189 = arguments.length;
switch (G__35189) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33762__auto___35234 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33762__auto___35234,out){
return (function (){
var f__33763__auto__ = (function (){var switch__33672__auto__ = ((function (c__33762__auto___35234,out){
return (function (state_35213){
var state_val_35214 = (state_35213[(1)]);
if((state_val_35214 === (7))){
var inst_35195 = (state_35213[(7)]);
var inst_35195__$1 = (state_35213[(2)]);
var inst_35196 = (inst_35195__$1 == null);
var inst_35197 = cljs.core.not.call(null,inst_35196);
var state_35213__$1 = (function (){var statearr_35215 = state_35213;
(statearr_35215[(7)] = inst_35195__$1);

return statearr_35215;
})();
if(inst_35197){
var statearr_35216_35235 = state_35213__$1;
(statearr_35216_35235[(1)] = (8));

} else {
var statearr_35217_35236 = state_35213__$1;
(statearr_35217_35236[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35214 === (1))){
var inst_35190 = (0);
var state_35213__$1 = (function (){var statearr_35218 = state_35213;
(statearr_35218[(8)] = inst_35190);

return statearr_35218;
})();
var statearr_35219_35237 = state_35213__$1;
(statearr_35219_35237[(2)] = null);

(statearr_35219_35237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35214 === (4))){
var state_35213__$1 = state_35213;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35213__$1,(7),ch);
} else {
if((state_val_35214 === (6))){
var inst_35208 = (state_35213[(2)]);
var state_35213__$1 = state_35213;
var statearr_35220_35238 = state_35213__$1;
(statearr_35220_35238[(2)] = inst_35208);

(statearr_35220_35238[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35214 === (3))){
var inst_35210 = (state_35213[(2)]);
var inst_35211 = cljs.core.async.close_BANG_.call(null,out);
var state_35213__$1 = (function (){var statearr_35221 = state_35213;
(statearr_35221[(9)] = inst_35210);

return statearr_35221;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35213__$1,inst_35211);
} else {
if((state_val_35214 === (2))){
var inst_35190 = (state_35213[(8)]);
var inst_35192 = (inst_35190 < n);
var state_35213__$1 = state_35213;
if(cljs.core.truth_(inst_35192)){
var statearr_35222_35239 = state_35213__$1;
(statearr_35222_35239[(1)] = (4));

} else {
var statearr_35223_35240 = state_35213__$1;
(statearr_35223_35240[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35214 === (11))){
var inst_35190 = (state_35213[(8)]);
var inst_35200 = (state_35213[(2)]);
var inst_35201 = (inst_35190 + (1));
var inst_35190__$1 = inst_35201;
var state_35213__$1 = (function (){var statearr_35224 = state_35213;
(statearr_35224[(8)] = inst_35190__$1);

(statearr_35224[(10)] = inst_35200);

return statearr_35224;
})();
var statearr_35225_35241 = state_35213__$1;
(statearr_35225_35241[(2)] = null);

(statearr_35225_35241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35214 === (9))){
var state_35213__$1 = state_35213;
var statearr_35226_35242 = state_35213__$1;
(statearr_35226_35242[(2)] = null);

(statearr_35226_35242[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35214 === (5))){
var state_35213__$1 = state_35213;
var statearr_35227_35243 = state_35213__$1;
(statearr_35227_35243[(2)] = null);

(statearr_35227_35243[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35214 === (10))){
var inst_35205 = (state_35213[(2)]);
var state_35213__$1 = state_35213;
var statearr_35228_35244 = state_35213__$1;
(statearr_35228_35244[(2)] = inst_35205);

(statearr_35228_35244[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35214 === (8))){
var inst_35195 = (state_35213[(7)]);
var state_35213__$1 = state_35213;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35213__$1,(11),out,inst_35195);
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
});})(c__33762__auto___35234,out))
;
return ((function (switch__33672__auto__,c__33762__auto___35234,out){
return (function() {
var cljs$core$async$state_machine__33673__auto__ = null;
var cljs$core$async$state_machine__33673__auto____0 = (function (){
var statearr_35229 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35229[(0)] = cljs$core$async$state_machine__33673__auto__);

(statearr_35229[(1)] = (1));

return statearr_35229;
});
var cljs$core$async$state_machine__33673__auto____1 = (function (state_35213){
while(true){
var ret_value__33674__auto__ = (function (){try{while(true){
var result__33675__auto__ = switch__33672__auto__.call(null,state_35213);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33675__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33675__auto__;
}
break;
}
}catch (e35230){if((e35230 instanceof Object)){
var ex__33676__auto__ = e35230;
var statearr_35231_35245 = state_35213;
(statearr_35231_35245[(5)] = ex__33676__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35213);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35230;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35246 = state_35213;
state_35213 = G__35246;
continue;
} else {
return ret_value__33674__auto__;
}
break;
}
});
cljs$core$async$state_machine__33673__auto__ = function(state_35213){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33673__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33673__auto____1.call(this,state_35213);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33673__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33673__auto____0;
cljs$core$async$state_machine__33673__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33673__auto____1;
return cljs$core$async$state_machine__33673__auto__;
})()
;})(switch__33672__auto__,c__33762__auto___35234,out))
})();
var state__33764__auto__ = (function (){var statearr_35232 = f__33763__auto__.call(null);
(statearr_35232[(6)] = c__33762__auto___35234);

return statearr_35232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33764__auto__);
});})(c__33762__auto___35234,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async35248 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35248 = (function (f,ch,meta35249){
this.f = f;
this.ch = ch;
this.meta35249 = meta35249;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35248.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35250,meta35249__$1){
var self__ = this;
var _35250__$1 = this;
return (new cljs.core.async.t_cljs$core$async35248(self__.f,self__.ch,meta35249__$1));
});

cljs.core.async.t_cljs$core$async35248.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35250){
var self__ = this;
var _35250__$1 = this;
return self__.meta35249;
});

cljs.core.async.t_cljs$core$async35248.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35248.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35248.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35248.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35248.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async35251 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35251 = (function (f,ch,meta35249,_,fn1,meta35252){
this.f = f;
this.ch = ch;
this.meta35249 = meta35249;
this._ = _;
this.fn1 = fn1;
this.meta35252 = meta35252;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35251.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_35253,meta35252__$1){
var self__ = this;
var _35253__$1 = this;
return (new cljs.core.async.t_cljs$core$async35251(self__.f,self__.ch,self__.meta35249,self__._,self__.fn1,meta35252__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async35251.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_35253){
var self__ = this;
var _35253__$1 = this;
return self__.meta35252;
});})(___$1))
;

cljs.core.async.t_cljs$core$async35251.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35251.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async35251.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async35251.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__35247_SHARP_){
return f1.call(null,(((p1__35247_SHARP_ == null))?null:self__.f.call(null,p1__35247_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async35251.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35249","meta35249",-476274197,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async35248","cljs.core.async/t_cljs$core$async35248",1188041126,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta35252","meta35252",1682826009,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async35251.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35251.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35251";

cljs.core.async.t_cljs$core$async35251.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__30767__auto__,writer__30768__auto__,opt__30769__auto__){
return cljs.core._write.call(null,writer__30768__auto__,"cljs.core.async/t_cljs$core$async35251");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async35251 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35251(f__$1,ch__$1,meta35249__$1,___$2,fn1__$1,meta35252){
return (new cljs.core.async.t_cljs$core$async35251(f__$1,ch__$1,meta35249__$1,___$2,fn1__$1,meta35252));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async35251(self__.f,self__.ch,self__.meta35249,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__30084__auto__ = ret;
if(cljs.core.truth_(and__30084__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__30084__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async35248.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35248.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async35248.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35249","meta35249",-476274197,null)], null);
});

cljs.core.async.t_cljs$core$async35248.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35248.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35248";

cljs.core.async.t_cljs$core$async35248.cljs$lang$ctorPrWriter = (function (this__30767__auto__,writer__30768__auto__,opt__30769__auto__){
return cljs.core._write.call(null,writer__30768__auto__,"cljs.core.async/t_cljs$core$async35248");
});

cljs.core.async.__GT_t_cljs$core$async35248 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35248(f__$1,ch__$1,meta35249){
return (new cljs.core.async.t_cljs$core$async35248(f__$1,ch__$1,meta35249));
});

}

return (new cljs.core.async.t_cljs$core$async35248(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async35254 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35254 = (function (f,ch,meta35255){
this.f = f;
this.ch = ch;
this.meta35255 = meta35255;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35254.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35256,meta35255__$1){
var self__ = this;
var _35256__$1 = this;
return (new cljs.core.async.t_cljs$core$async35254(self__.f,self__.ch,meta35255__$1));
});

cljs.core.async.t_cljs$core$async35254.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35256){
var self__ = this;
var _35256__$1 = this;
return self__.meta35255;
});

cljs.core.async.t_cljs$core$async35254.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35254.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35254.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35254.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async35254.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35254.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async35254.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35255","meta35255",-1216303981,null)], null);
});

cljs.core.async.t_cljs$core$async35254.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35254.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35254";

cljs.core.async.t_cljs$core$async35254.cljs$lang$ctorPrWriter = (function (this__30767__auto__,writer__30768__auto__,opt__30769__auto__){
return cljs.core._write.call(null,writer__30768__auto__,"cljs.core.async/t_cljs$core$async35254");
});

cljs.core.async.__GT_t_cljs$core$async35254 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async35254(f__$1,ch__$1,meta35255){
return (new cljs.core.async.t_cljs$core$async35254(f__$1,ch__$1,meta35255));
});

}

return (new cljs.core.async.t_cljs$core$async35254(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async35257 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35257 = (function (p,ch,meta35258){
this.p = p;
this.ch = ch;
this.meta35258 = meta35258;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35257.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35259,meta35258__$1){
var self__ = this;
var _35259__$1 = this;
return (new cljs.core.async.t_cljs$core$async35257(self__.p,self__.ch,meta35258__$1));
});

cljs.core.async.t_cljs$core$async35257.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35259){
var self__ = this;
var _35259__$1 = this;
return self__.meta35258;
});

cljs.core.async.t_cljs$core$async35257.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35257.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35257.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35257.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35257.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async35257.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35257.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async35257.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35258","meta35258",437329394,null)], null);
});

cljs.core.async.t_cljs$core$async35257.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35257.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35257";

cljs.core.async.t_cljs$core$async35257.cljs$lang$ctorPrWriter = (function (this__30767__auto__,writer__30768__auto__,opt__30769__auto__){
return cljs.core._write.call(null,writer__30768__auto__,"cljs.core.async/t_cljs$core$async35257");
});

cljs.core.async.__GT_t_cljs$core$async35257 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async35257(p__$1,ch__$1,meta35258){
return (new cljs.core.async.t_cljs$core$async35257(p__$1,ch__$1,meta35258));
});

}

return (new cljs.core.async.t_cljs$core$async35257(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__35261 = arguments.length;
switch (G__35261) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33762__auto___35301 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33762__auto___35301,out){
return (function (){
var f__33763__auto__ = (function (){var switch__33672__auto__ = ((function (c__33762__auto___35301,out){
return (function (state_35282){
var state_val_35283 = (state_35282[(1)]);
if((state_val_35283 === (7))){
var inst_35278 = (state_35282[(2)]);
var state_35282__$1 = state_35282;
var statearr_35284_35302 = state_35282__$1;
(statearr_35284_35302[(2)] = inst_35278);

(statearr_35284_35302[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35283 === (1))){
var state_35282__$1 = state_35282;
var statearr_35285_35303 = state_35282__$1;
(statearr_35285_35303[(2)] = null);

(statearr_35285_35303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35283 === (4))){
var inst_35264 = (state_35282[(7)]);
var inst_35264__$1 = (state_35282[(2)]);
var inst_35265 = (inst_35264__$1 == null);
var state_35282__$1 = (function (){var statearr_35286 = state_35282;
(statearr_35286[(7)] = inst_35264__$1);

return statearr_35286;
})();
if(cljs.core.truth_(inst_35265)){
var statearr_35287_35304 = state_35282__$1;
(statearr_35287_35304[(1)] = (5));

} else {
var statearr_35288_35305 = state_35282__$1;
(statearr_35288_35305[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35283 === (6))){
var inst_35264 = (state_35282[(7)]);
var inst_35269 = p.call(null,inst_35264);
var state_35282__$1 = state_35282;
if(cljs.core.truth_(inst_35269)){
var statearr_35289_35306 = state_35282__$1;
(statearr_35289_35306[(1)] = (8));

} else {
var statearr_35290_35307 = state_35282__$1;
(statearr_35290_35307[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35283 === (3))){
var inst_35280 = (state_35282[(2)]);
var state_35282__$1 = state_35282;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35282__$1,inst_35280);
} else {
if((state_val_35283 === (2))){
var state_35282__$1 = state_35282;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35282__$1,(4),ch);
} else {
if((state_val_35283 === (11))){
var inst_35272 = (state_35282[(2)]);
var state_35282__$1 = state_35282;
var statearr_35291_35308 = state_35282__$1;
(statearr_35291_35308[(2)] = inst_35272);

(statearr_35291_35308[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35283 === (9))){
var state_35282__$1 = state_35282;
var statearr_35292_35309 = state_35282__$1;
(statearr_35292_35309[(2)] = null);

(statearr_35292_35309[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35283 === (5))){
var inst_35267 = cljs.core.async.close_BANG_.call(null,out);
var state_35282__$1 = state_35282;
var statearr_35293_35310 = state_35282__$1;
(statearr_35293_35310[(2)] = inst_35267);

(statearr_35293_35310[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35283 === (10))){
var inst_35275 = (state_35282[(2)]);
var state_35282__$1 = (function (){var statearr_35294 = state_35282;
(statearr_35294[(8)] = inst_35275);

return statearr_35294;
})();
var statearr_35295_35311 = state_35282__$1;
(statearr_35295_35311[(2)] = null);

(statearr_35295_35311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35283 === (8))){
var inst_35264 = (state_35282[(7)]);
var state_35282__$1 = state_35282;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35282__$1,(11),out,inst_35264);
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
});})(c__33762__auto___35301,out))
;
return ((function (switch__33672__auto__,c__33762__auto___35301,out){
return (function() {
var cljs$core$async$state_machine__33673__auto__ = null;
var cljs$core$async$state_machine__33673__auto____0 = (function (){
var statearr_35296 = [null,null,null,null,null,null,null,null,null];
(statearr_35296[(0)] = cljs$core$async$state_machine__33673__auto__);

(statearr_35296[(1)] = (1));

return statearr_35296;
});
var cljs$core$async$state_machine__33673__auto____1 = (function (state_35282){
while(true){
var ret_value__33674__auto__ = (function (){try{while(true){
var result__33675__auto__ = switch__33672__auto__.call(null,state_35282);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33675__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33675__auto__;
}
break;
}
}catch (e35297){if((e35297 instanceof Object)){
var ex__33676__auto__ = e35297;
var statearr_35298_35312 = state_35282;
(statearr_35298_35312[(5)] = ex__33676__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35282);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35297;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35313 = state_35282;
state_35282 = G__35313;
continue;
} else {
return ret_value__33674__auto__;
}
break;
}
});
cljs$core$async$state_machine__33673__auto__ = function(state_35282){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33673__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33673__auto____1.call(this,state_35282);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33673__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33673__auto____0;
cljs$core$async$state_machine__33673__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33673__auto____1;
return cljs$core$async$state_machine__33673__auto__;
})()
;})(switch__33672__auto__,c__33762__auto___35301,out))
})();
var state__33764__auto__ = (function (){var statearr_35299 = f__33763__auto__.call(null);
(statearr_35299[(6)] = c__33762__auto___35301);

return statearr_35299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33764__auto__);
});})(c__33762__auto___35301,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__35315 = arguments.length;
switch (G__35315) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__33762__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33762__auto__){
return (function (){
var f__33763__auto__ = (function (){var switch__33672__auto__ = ((function (c__33762__auto__){
return (function (state_35378){
var state_val_35379 = (state_35378[(1)]);
if((state_val_35379 === (7))){
var inst_35374 = (state_35378[(2)]);
var state_35378__$1 = state_35378;
var statearr_35380_35418 = state_35378__$1;
(statearr_35380_35418[(2)] = inst_35374);

(statearr_35380_35418[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35379 === (20))){
var inst_35344 = (state_35378[(7)]);
var inst_35355 = (state_35378[(2)]);
var inst_35356 = cljs.core.next.call(null,inst_35344);
var inst_35330 = inst_35356;
var inst_35331 = null;
var inst_35332 = (0);
var inst_35333 = (0);
var state_35378__$1 = (function (){var statearr_35381 = state_35378;
(statearr_35381[(8)] = inst_35333);

(statearr_35381[(9)] = inst_35355);

(statearr_35381[(10)] = inst_35332);

(statearr_35381[(11)] = inst_35330);

(statearr_35381[(12)] = inst_35331);

return statearr_35381;
})();
var statearr_35382_35419 = state_35378__$1;
(statearr_35382_35419[(2)] = null);

(statearr_35382_35419[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35379 === (1))){
var state_35378__$1 = state_35378;
var statearr_35383_35420 = state_35378__$1;
(statearr_35383_35420[(2)] = null);

(statearr_35383_35420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35379 === (4))){
var inst_35319 = (state_35378[(13)]);
var inst_35319__$1 = (state_35378[(2)]);
var inst_35320 = (inst_35319__$1 == null);
var state_35378__$1 = (function (){var statearr_35384 = state_35378;
(statearr_35384[(13)] = inst_35319__$1);

return statearr_35384;
})();
if(cljs.core.truth_(inst_35320)){
var statearr_35385_35421 = state_35378__$1;
(statearr_35385_35421[(1)] = (5));

} else {
var statearr_35386_35422 = state_35378__$1;
(statearr_35386_35422[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35379 === (15))){
var state_35378__$1 = state_35378;
var statearr_35390_35423 = state_35378__$1;
(statearr_35390_35423[(2)] = null);

(statearr_35390_35423[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35379 === (21))){
var state_35378__$1 = state_35378;
var statearr_35391_35424 = state_35378__$1;
(statearr_35391_35424[(2)] = null);

(statearr_35391_35424[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35379 === (13))){
var inst_35333 = (state_35378[(8)]);
var inst_35332 = (state_35378[(10)]);
var inst_35330 = (state_35378[(11)]);
var inst_35331 = (state_35378[(12)]);
var inst_35340 = (state_35378[(2)]);
var inst_35341 = (inst_35333 + (1));
var tmp35387 = inst_35332;
var tmp35388 = inst_35330;
var tmp35389 = inst_35331;
var inst_35330__$1 = tmp35388;
var inst_35331__$1 = tmp35389;
var inst_35332__$1 = tmp35387;
var inst_35333__$1 = inst_35341;
var state_35378__$1 = (function (){var statearr_35392 = state_35378;
(statearr_35392[(8)] = inst_35333__$1);

(statearr_35392[(14)] = inst_35340);

(statearr_35392[(10)] = inst_35332__$1);

(statearr_35392[(11)] = inst_35330__$1);

(statearr_35392[(12)] = inst_35331__$1);

return statearr_35392;
})();
var statearr_35393_35425 = state_35378__$1;
(statearr_35393_35425[(2)] = null);

(statearr_35393_35425[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35379 === (22))){
var state_35378__$1 = state_35378;
var statearr_35394_35426 = state_35378__$1;
(statearr_35394_35426[(2)] = null);

(statearr_35394_35426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35379 === (6))){
var inst_35319 = (state_35378[(13)]);
var inst_35328 = f.call(null,inst_35319);
var inst_35329 = cljs.core.seq.call(null,inst_35328);
var inst_35330 = inst_35329;
var inst_35331 = null;
var inst_35332 = (0);
var inst_35333 = (0);
var state_35378__$1 = (function (){var statearr_35395 = state_35378;
(statearr_35395[(8)] = inst_35333);

(statearr_35395[(10)] = inst_35332);

(statearr_35395[(11)] = inst_35330);

(statearr_35395[(12)] = inst_35331);

return statearr_35395;
})();
var statearr_35396_35427 = state_35378__$1;
(statearr_35396_35427[(2)] = null);

(statearr_35396_35427[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35379 === (17))){
var inst_35344 = (state_35378[(7)]);
var inst_35348 = cljs.core.chunk_first.call(null,inst_35344);
var inst_35349 = cljs.core.chunk_rest.call(null,inst_35344);
var inst_35350 = cljs.core.count.call(null,inst_35348);
var inst_35330 = inst_35349;
var inst_35331 = inst_35348;
var inst_35332 = inst_35350;
var inst_35333 = (0);
var state_35378__$1 = (function (){var statearr_35397 = state_35378;
(statearr_35397[(8)] = inst_35333);

(statearr_35397[(10)] = inst_35332);

(statearr_35397[(11)] = inst_35330);

(statearr_35397[(12)] = inst_35331);

return statearr_35397;
})();
var statearr_35398_35428 = state_35378__$1;
(statearr_35398_35428[(2)] = null);

(statearr_35398_35428[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35379 === (3))){
var inst_35376 = (state_35378[(2)]);
var state_35378__$1 = state_35378;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35378__$1,inst_35376);
} else {
if((state_val_35379 === (12))){
var inst_35364 = (state_35378[(2)]);
var state_35378__$1 = state_35378;
var statearr_35399_35429 = state_35378__$1;
(statearr_35399_35429[(2)] = inst_35364);

(statearr_35399_35429[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35379 === (2))){
var state_35378__$1 = state_35378;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35378__$1,(4),in$);
} else {
if((state_val_35379 === (23))){
var inst_35372 = (state_35378[(2)]);
var state_35378__$1 = state_35378;
var statearr_35400_35430 = state_35378__$1;
(statearr_35400_35430[(2)] = inst_35372);

(statearr_35400_35430[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35379 === (19))){
var inst_35359 = (state_35378[(2)]);
var state_35378__$1 = state_35378;
var statearr_35401_35431 = state_35378__$1;
(statearr_35401_35431[(2)] = inst_35359);

(statearr_35401_35431[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35379 === (11))){
var inst_35344 = (state_35378[(7)]);
var inst_35330 = (state_35378[(11)]);
var inst_35344__$1 = cljs.core.seq.call(null,inst_35330);
var state_35378__$1 = (function (){var statearr_35402 = state_35378;
(statearr_35402[(7)] = inst_35344__$1);

return statearr_35402;
})();
if(inst_35344__$1){
var statearr_35403_35432 = state_35378__$1;
(statearr_35403_35432[(1)] = (14));

} else {
var statearr_35404_35433 = state_35378__$1;
(statearr_35404_35433[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35379 === (9))){
var inst_35366 = (state_35378[(2)]);
var inst_35367 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_35378__$1 = (function (){var statearr_35405 = state_35378;
(statearr_35405[(15)] = inst_35366);

return statearr_35405;
})();
if(cljs.core.truth_(inst_35367)){
var statearr_35406_35434 = state_35378__$1;
(statearr_35406_35434[(1)] = (21));

} else {
var statearr_35407_35435 = state_35378__$1;
(statearr_35407_35435[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35379 === (5))){
var inst_35322 = cljs.core.async.close_BANG_.call(null,out);
var state_35378__$1 = state_35378;
var statearr_35408_35436 = state_35378__$1;
(statearr_35408_35436[(2)] = inst_35322);

(statearr_35408_35436[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35379 === (14))){
var inst_35344 = (state_35378[(7)]);
var inst_35346 = cljs.core.chunked_seq_QMARK_.call(null,inst_35344);
var state_35378__$1 = state_35378;
if(inst_35346){
var statearr_35409_35437 = state_35378__$1;
(statearr_35409_35437[(1)] = (17));

} else {
var statearr_35410_35438 = state_35378__$1;
(statearr_35410_35438[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35379 === (16))){
var inst_35362 = (state_35378[(2)]);
var state_35378__$1 = state_35378;
var statearr_35411_35439 = state_35378__$1;
(statearr_35411_35439[(2)] = inst_35362);

(statearr_35411_35439[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35379 === (10))){
var inst_35333 = (state_35378[(8)]);
var inst_35331 = (state_35378[(12)]);
var inst_35338 = cljs.core._nth.call(null,inst_35331,inst_35333);
var state_35378__$1 = state_35378;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35378__$1,(13),out,inst_35338);
} else {
if((state_val_35379 === (18))){
var inst_35344 = (state_35378[(7)]);
var inst_35353 = cljs.core.first.call(null,inst_35344);
var state_35378__$1 = state_35378;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35378__$1,(20),out,inst_35353);
} else {
if((state_val_35379 === (8))){
var inst_35333 = (state_35378[(8)]);
var inst_35332 = (state_35378[(10)]);
var inst_35335 = (inst_35333 < inst_35332);
var inst_35336 = inst_35335;
var state_35378__$1 = state_35378;
if(cljs.core.truth_(inst_35336)){
var statearr_35412_35440 = state_35378__$1;
(statearr_35412_35440[(1)] = (10));

} else {
var statearr_35413_35441 = state_35378__$1;
(statearr_35413_35441[(1)] = (11));

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
});})(c__33762__auto__))
;
return ((function (switch__33672__auto__,c__33762__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__33673__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33673__auto____0 = (function (){
var statearr_35414 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35414[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33673__auto__);

(statearr_35414[(1)] = (1));

return statearr_35414;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33673__auto____1 = (function (state_35378){
while(true){
var ret_value__33674__auto__ = (function (){try{while(true){
var result__33675__auto__ = switch__33672__auto__.call(null,state_35378);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33675__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33675__auto__;
}
break;
}
}catch (e35415){if((e35415 instanceof Object)){
var ex__33676__auto__ = e35415;
var statearr_35416_35442 = state_35378;
(statearr_35416_35442[(5)] = ex__33676__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35378);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35415;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35443 = state_35378;
state_35378 = G__35443;
continue;
} else {
return ret_value__33674__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33673__auto__ = function(state_35378){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33673__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33673__auto____1.call(this,state_35378);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__33673__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33673__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33673__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33673__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33673__auto__;
})()
;})(switch__33672__auto__,c__33762__auto__))
})();
var state__33764__auto__ = (function (){var statearr_35417 = f__33763__auto__.call(null);
(statearr_35417[(6)] = c__33762__auto__);

return statearr_35417;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33764__auto__);
});})(c__33762__auto__))
);

return c__33762__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__35445 = arguments.length;
switch (G__35445) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__35448 = arguments.length;
switch (G__35448) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__35451 = arguments.length;
switch (G__35451) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33762__auto___35498 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33762__auto___35498,out){
return (function (){
var f__33763__auto__ = (function (){var switch__33672__auto__ = ((function (c__33762__auto___35498,out){
return (function (state_35475){
var state_val_35476 = (state_35475[(1)]);
if((state_val_35476 === (7))){
var inst_35470 = (state_35475[(2)]);
var state_35475__$1 = state_35475;
var statearr_35477_35499 = state_35475__$1;
(statearr_35477_35499[(2)] = inst_35470);

(statearr_35477_35499[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35476 === (1))){
var inst_35452 = null;
var state_35475__$1 = (function (){var statearr_35478 = state_35475;
(statearr_35478[(7)] = inst_35452);

return statearr_35478;
})();
var statearr_35479_35500 = state_35475__$1;
(statearr_35479_35500[(2)] = null);

(statearr_35479_35500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35476 === (4))){
var inst_35455 = (state_35475[(8)]);
var inst_35455__$1 = (state_35475[(2)]);
var inst_35456 = (inst_35455__$1 == null);
var inst_35457 = cljs.core.not.call(null,inst_35456);
var state_35475__$1 = (function (){var statearr_35480 = state_35475;
(statearr_35480[(8)] = inst_35455__$1);

return statearr_35480;
})();
if(inst_35457){
var statearr_35481_35501 = state_35475__$1;
(statearr_35481_35501[(1)] = (5));

} else {
var statearr_35482_35502 = state_35475__$1;
(statearr_35482_35502[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35476 === (6))){
var state_35475__$1 = state_35475;
var statearr_35483_35503 = state_35475__$1;
(statearr_35483_35503[(2)] = null);

(statearr_35483_35503[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35476 === (3))){
var inst_35472 = (state_35475[(2)]);
var inst_35473 = cljs.core.async.close_BANG_.call(null,out);
var state_35475__$1 = (function (){var statearr_35484 = state_35475;
(statearr_35484[(9)] = inst_35472);

return statearr_35484;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35475__$1,inst_35473);
} else {
if((state_val_35476 === (2))){
var state_35475__$1 = state_35475;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35475__$1,(4),ch);
} else {
if((state_val_35476 === (11))){
var inst_35455 = (state_35475[(8)]);
var inst_35464 = (state_35475[(2)]);
var inst_35452 = inst_35455;
var state_35475__$1 = (function (){var statearr_35485 = state_35475;
(statearr_35485[(7)] = inst_35452);

(statearr_35485[(10)] = inst_35464);

return statearr_35485;
})();
var statearr_35486_35504 = state_35475__$1;
(statearr_35486_35504[(2)] = null);

(statearr_35486_35504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35476 === (9))){
var inst_35455 = (state_35475[(8)]);
var state_35475__$1 = state_35475;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35475__$1,(11),out,inst_35455);
} else {
if((state_val_35476 === (5))){
var inst_35452 = (state_35475[(7)]);
var inst_35455 = (state_35475[(8)]);
var inst_35459 = cljs.core._EQ_.call(null,inst_35455,inst_35452);
var state_35475__$1 = state_35475;
if(inst_35459){
var statearr_35488_35505 = state_35475__$1;
(statearr_35488_35505[(1)] = (8));

} else {
var statearr_35489_35506 = state_35475__$1;
(statearr_35489_35506[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35476 === (10))){
var inst_35467 = (state_35475[(2)]);
var state_35475__$1 = state_35475;
var statearr_35490_35507 = state_35475__$1;
(statearr_35490_35507[(2)] = inst_35467);

(statearr_35490_35507[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35476 === (8))){
var inst_35452 = (state_35475[(7)]);
var tmp35487 = inst_35452;
var inst_35452__$1 = tmp35487;
var state_35475__$1 = (function (){var statearr_35491 = state_35475;
(statearr_35491[(7)] = inst_35452__$1);

return statearr_35491;
})();
var statearr_35492_35508 = state_35475__$1;
(statearr_35492_35508[(2)] = null);

(statearr_35492_35508[(1)] = (2));


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
});})(c__33762__auto___35498,out))
;
return ((function (switch__33672__auto__,c__33762__auto___35498,out){
return (function() {
var cljs$core$async$state_machine__33673__auto__ = null;
var cljs$core$async$state_machine__33673__auto____0 = (function (){
var statearr_35493 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35493[(0)] = cljs$core$async$state_machine__33673__auto__);

(statearr_35493[(1)] = (1));

return statearr_35493;
});
var cljs$core$async$state_machine__33673__auto____1 = (function (state_35475){
while(true){
var ret_value__33674__auto__ = (function (){try{while(true){
var result__33675__auto__ = switch__33672__auto__.call(null,state_35475);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33675__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33675__auto__;
}
break;
}
}catch (e35494){if((e35494 instanceof Object)){
var ex__33676__auto__ = e35494;
var statearr_35495_35509 = state_35475;
(statearr_35495_35509[(5)] = ex__33676__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35475);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35494;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35510 = state_35475;
state_35475 = G__35510;
continue;
} else {
return ret_value__33674__auto__;
}
break;
}
});
cljs$core$async$state_machine__33673__auto__ = function(state_35475){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33673__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33673__auto____1.call(this,state_35475);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33673__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33673__auto____0;
cljs$core$async$state_machine__33673__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33673__auto____1;
return cljs$core$async$state_machine__33673__auto__;
})()
;})(switch__33672__auto__,c__33762__auto___35498,out))
})();
var state__33764__auto__ = (function (){var statearr_35496 = f__33763__auto__.call(null);
(statearr_35496[(6)] = c__33762__auto___35498);

return statearr_35496;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33764__auto__);
});})(c__33762__auto___35498,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__35512 = arguments.length;
switch (G__35512) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33762__auto___35578 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33762__auto___35578,out){
return (function (){
var f__33763__auto__ = (function (){var switch__33672__auto__ = ((function (c__33762__auto___35578,out){
return (function (state_35550){
var state_val_35551 = (state_35550[(1)]);
if((state_val_35551 === (7))){
var inst_35546 = (state_35550[(2)]);
var state_35550__$1 = state_35550;
var statearr_35552_35579 = state_35550__$1;
(statearr_35552_35579[(2)] = inst_35546);

(statearr_35552_35579[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35551 === (1))){
var inst_35513 = (new Array(n));
var inst_35514 = inst_35513;
var inst_35515 = (0);
var state_35550__$1 = (function (){var statearr_35553 = state_35550;
(statearr_35553[(7)] = inst_35514);

(statearr_35553[(8)] = inst_35515);

return statearr_35553;
})();
var statearr_35554_35580 = state_35550__$1;
(statearr_35554_35580[(2)] = null);

(statearr_35554_35580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35551 === (4))){
var inst_35518 = (state_35550[(9)]);
var inst_35518__$1 = (state_35550[(2)]);
var inst_35519 = (inst_35518__$1 == null);
var inst_35520 = cljs.core.not.call(null,inst_35519);
var state_35550__$1 = (function (){var statearr_35555 = state_35550;
(statearr_35555[(9)] = inst_35518__$1);

return statearr_35555;
})();
if(inst_35520){
var statearr_35556_35581 = state_35550__$1;
(statearr_35556_35581[(1)] = (5));

} else {
var statearr_35557_35582 = state_35550__$1;
(statearr_35557_35582[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35551 === (15))){
var inst_35540 = (state_35550[(2)]);
var state_35550__$1 = state_35550;
var statearr_35558_35583 = state_35550__$1;
(statearr_35558_35583[(2)] = inst_35540);

(statearr_35558_35583[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35551 === (13))){
var state_35550__$1 = state_35550;
var statearr_35559_35584 = state_35550__$1;
(statearr_35559_35584[(2)] = null);

(statearr_35559_35584[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35551 === (6))){
var inst_35515 = (state_35550[(8)]);
var inst_35536 = (inst_35515 > (0));
var state_35550__$1 = state_35550;
if(cljs.core.truth_(inst_35536)){
var statearr_35560_35585 = state_35550__$1;
(statearr_35560_35585[(1)] = (12));

} else {
var statearr_35561_35586 = state_35550__$1;
(statearr_35561_35586[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35551 === (3))){
var inst_35548 = (state_35550[(2)]);
var state_35550__$1 = state_35550;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35550__$1,inst_35548);
} else {
if((state_val_35551 === (12))){
var inst_35514 = (state_35550[(7)]);
var inst_35538 = cljs.core.vec.call(null,inst_35514);
var state_35550__$1 = state_35550;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35550__$1,(15),out,inst_35538);
} else {
if((state_val_35551 === (2))){
var state_35550__$1 = state_35550;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35550__$1,(4),ch);
} else {
if((state_val_35551 === (11))){
var inst_35530 = (state_35550[(2)]);
var inst_35531 = (new Array(n));
var inst_35514 = inst_35531;
var inst_35515 = (0);
var state_35550__$1 = (function (){var statearr_35562 = state_35550;
(statearr_35562[(7)] = inst_35514);

(statearr_35562[(8)] = inst_35515);

(statearr_35562[(10)] = inst_35530);

return statearr_35562;
})();
var statearr_35563_35587 = state_35550__$1;
(statearr_35563_35587[(2)] = null);

(statearr_35563_35587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35551 === (9))){
var inst_35514 = (state_35550[(7)]);
var inst_35528 = cljs.core.vec.call(null,inst_35514);
var state_35550__$1 = state_35550;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35550__$1,(11),out,inst_35528);
} else {
if((state_val_35551 === (5))){
var inst_35514 = (state_35550[(7)]);
var inst_35515 = (state_35550[(8)]);
var inst_35518 = (state_35550[(9)]);
var inst_35523 = (state_35550[(11)]);
var inst_35522 = (inst_35514[inst_35515] = inst_35518);
var inst_35523__$1 = (inst_35515 + (1));
var inst_35524 = (inst_35523__$1 < n);
var state_35550__$1 = (function (){var statearr_35564 = state_35550;
(statearr_35564[(11)] = inst_35523__$1);

(statearr_35564[(12)] = inst_35522);

return statearr_35564;
})();
if(cljs.core.truth_(inst_35524)){
var statearr_35565_35588 = state_35550__$1;
(statearr_35565_35588[(1)] = (8));

} else {
var statearr_35566_35589 = state_35550__$1;
(statearr_35566_35589[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35551 === (14))){
var inst_35543 = (state_35550[(2)]);
var inst_35544 = cljs.core.async.close_BANG_.call(null,out);
var state_35550__$1 = (function (){var statearr_35568 = state_35550;
(statearr_35568[(13)] = inst_35543);

return statearr_35568;
})();
var statearr_35569_35590 = state_35550__$1;
(statearr_35569_35590[(2)] = inst_35544);

(statearr_35569_35590[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35551 === (10))){
var inst_35534 = (state_35550[(2)]);
var state_35550__$1 = state_35550;
var statearr_35570_35591 = state_35550__$1;
(statearr_35570_35591[(2)] = inst_35534);

(statearr_35570_35591[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35551 === (8))){
var inst_35514 = (state_35550[(7)]);
var inst_35523 = (state_35550[(11)]);
var tmp35567 = inst_35514;
var inst_35514__$1 = tmp35567;
var inst_35515 = inst_35523;
var state_35550__$1 = (function (){var statearr_35571 = state_35550;
(statearr_35571[(7)] = inst_35514__$1);

(statearr_35571[(8)] = inst_35515);

return statearr_35571;
})();
var statearr_35572_35592 = state_35550__$1;
(statearr_35572_35592[(2)] = null);

(statearr_35572_35592[(1)] = (2));


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
});})(c__33762__auto___35578,out))
;
return ((function (switch__33672__auto__,c__33762__auto___35578,out){
return (function() {
var cljs$core$async$state_machine__33673__auto__ = null;
var cljs$core$async$state_machine__33673__auto____0 = (function (){
var statearr_35573 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35573[(0)] = cljs$core$async$state_machine__33673__auto__);

(statearr_35573[(1)] = (1));

return statearr_35573;
});
var cljs$core$async$state_machine__33673__auto____1 = (function (state_35550){
while(true){
var ret_value__33674__auto__ = (function (){try{while(true){
var result__33675__auto__ = switch__33672__auto__.call(null,state_35550);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33675__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33675__auto__;
}
break;
}
}catch (e35574){if((e35574 instanceof Object)){
var ex__33676__auto__ = e35574;
var statearr_35575_35593 = state_35550;
(statearr_35575_35593[(5)] = ex__33676__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35550);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35574;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35594 = state_35550;
state_35550 = G__35594;
continue;
} else {
return ret_value__33674__auto__;
}
break;
}
});
cljs$core$async$state_machine__33673__auto__ = function(state_35550){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33673__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33673__auto____1.call(this,state_35550);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33673__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33673__auto____0;
cljs$core$async$state_machine__33673__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33673__auto____1;
return cljs$core$async$state_machine__33673__auto__;
})()
;})(switch__33672__auto__,c__33762__auto___35578,out))
})();
var state__33764__auto__ = (function (){var statearr_35576 = f__33763__auto__.call(null);
(statearr_35576[(6)] = c__33762__auto___35578);

return statearr_35576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33764__auto__);
});})(c__33762__auto___35578,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__35596 = arguments.length;
switch (G__35596) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33762__auto___35666 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33762__auto___35666,out){
return (function (){
var f__33763__auto__ = (function (){var switch__33672__auto__ = ((function (c__33762__auto___35666,out){
return (function (state_35638){
var state_val_35639 = (state_35638[(1)]);
if((state_val_35639 === (7))){
var inst_35634 = (state_35638[(2)]);
var state_35638__$1 = state_35638;
var statearr_35640_35667 = state_35638__$1;
(statearr_35640_35667[(2)] = inst_35634);

(statearr_35640_35667[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35639 === (1))){
var inst_35597 = [];
var inst_35598 = inst_35597;
var inst_35599 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_35638__$1 = (function (){var statearr_35641 = state_35638;
(statearr_35641[(7)] = inst_35598);

(statearr_35641[(8)] = inst_35599);

return statearr_35641;
})();
var statearr_35642_35668 = state_35638__$1;
(statearr_35642_35668[(2)] = null);

(statearr_35642_35668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35639 === (4))){
var inst_35602 = (state_35638[(9)]);
var inst_35602__$1 = (state_35638[(2)]);
var inst_35603 = (inst_35602__$1 == null);
var inst_35604 = cljs.core.not.call(null,inst_35603);
var state_35638__$1 = (function (){var statearr_35643 = state_35638;
(statearr_35643[(9)] = inst_35602__$1);

return statearr_35643;
})();
if(inst_35604){
var statearr_35644_35669 = state_35638__$1;
(statearr_35644_35669[(1)] = (5));

} else {
var statearr_35645_35670 = state_35638__$1;
(statearr_35645_35670[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35639 === (15))){
var inst_35628 = (state_35638[(2)]);
var state_35638__$1 = state_35638;
var statearr_35646_35671 = state_35638__$1;
(statearr_35646_35671[(2)] = inst_35628);

(statearr_35646_35671[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35639 === (13))){
var state_35638__$1 = state_35638;
var statearr_35647_35672 = state_35638__$1;
(statearr_35647_35672[(2)] = null);

(statearr_35647_35672[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35639 === (6))){
var inst_35598 = (state_35638[(7)]);
var inst_35623 = inst_35598.length;
var inst_35624 = (inst_35623 > (0));
var state_35638__$1 = state_35638;
if(cljs.core.truth_(inst_35624)){
var statearr_35648_35673 = state_35638__$1;
(statearr_35648_35673[(1)] = (12));

} else {
var statearr_35649_35674 = state_35638__$1;
(statearr_35649_35674[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35639 === (3))){
var inst_35636 = (state_35638[(2)]);
var state_35638__$1 = state_35638;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35638__$1,inst_35636);
} else {
if((state_val_35639 === (12))){
var inst_35598 = (state_35638[(7)]);
var inst_35626 = cljs.core.vec.call(null,inst_35598);
var state_35638__$1 = state_35638;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35638__$1,(15),out,inst_35626);
} else {
if((state_val_35639 === (2))){
var state_35638__$1 = state_35638;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35638__$1,(4),ch);
} else {
if((state_val_35639 === (11))){
var inst_35602 = (state_35638[(9)]);
var inst_35606 = (state_35638[(10)]);
var inst_35616 = (state_35638[(2)]);
var inst_35617 = [];
var inst_35618 = inst_35617.push(inst_35602);
var inst_35598 = inst_35617;
var inst_35599 = inst_35606;
var state_35638__$1 = (function (){var statearr_35650 = state_35638;
(statearr_35650[(7)] = inst_35598);

(statearr_35650[(11)] = inst_35616);

(statearr_35650[(12)] = inst_35618);

(statearr_35650[(8)] = inst_35599);

return statearr_35650;
})();
var statearr_35651_35675 = state_35638__$1;
(statearr_35651_35675[(2)] = null);

(statearr_35651_35675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35639 === (9))){
var inst_35598 = (state_35638[(7)]);
var inst_35614 = cljs.core.vec.call(null,inst_35598);
var state_35638__$1 = state_35638;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35638__$1,(11),out,inst_35614);
} else {
if((state_val_35639 === (5))){
var inst_35602 = (state_35638[(9)]);
var inst_35599 = (state_35638[(8)]);
var inst_35606 = (state_35638[(10)]);
var inst_35606__$1 = f.call(null,inst_35602);
var inst_35607 = cljs.core._EQ_.call(null,inst_35606__$1,inst_35599);
var inst_35608 = cljs.core.keyword_identical_QMARK_.call(null,inst_35599,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_35609 = (inst_35607) || (inst_35608);
var state_35638__$1 = (function (){var statearr_35652 = state_35638;
(statearr_35652[(10)] = inst_35606__$1);

return statearr_35652;
})();
if(cljs.core.truth_(inst_35609)){
var statearr_35653_35676 = state_35638__$1;
(statearr_35653_35676[(1)] = (8));

} else {
var statearr_35654_35677 = state_35638__$1;
(statearr_35654_35677[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35639 === (14))){
var inst_35631 = (state_35638[(2)]);
var inst_35632 = cljs.core.async.close_BANG_.call(null,out);
var state_35638__$1 = (function (){var statearr_35656 = state_35638;
(statearr_35656[(13)] = inst_35631);

return statearr_35656;
})();
var statearr_35657_35678 = state_35638__$1;
(statearr_35657_35678[(2)] = inst_35632);

(statearr_35657_35678[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35639 === (10))){
var inst_35621 = (state_35638[(2)]);
var state_35638__$1 = state_35638;
var statearr_35658_35679 = state_35638__$1;
(statearr_35658_35679[(2)] = inst_35621);

(statearr_35658_35679[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35639 === (8))){
var inst_35598 = (state_35638[(7)]);
var inst_35602 = (state_35638[(9)]);
var inst_35606 = (state_35638[(10)]);
var inst_35611 = inst_35598.push(inst_35602);
var tmp35655 = inst_35598;
var inst_35598__$1 = tmp35655;
var inst_35599 = inst_35606;
var state_35638__$1 = (function (){var statearr_35659 = state_35638;
(statearr_35659[(7)] = inst_35598__$1);

(statearr_35659[(8)] = inst_35599);

(statearr_35659[(14)] = inst_35611);

return statearr_35659;
})();
var statearr_35660_35680 = state_35638__$1;
(statearr_35660_35680[(2)] = null);

(statearr_35660_35680[(1)] = (2));


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
});})(c__33762__auto___35666,out))
;
return ((function (switch__33672__auto__,c__33762__auto___35666,out){
return (function() {
var cljs$core$async$state_machine__33673__auto__ = null;
var cljs$core$async$state_machine__33673__auto____0 = (function (){
var statearr_35661 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35661[(0)] = cljs$core$async$state_machine__33673__auto__);

(statearr_35661[(1)] = (1));

return statearr_35661;
});
var cljs$core$async$state_machine__33673__auto____1 = (function (state_35638){
while(true){
var ret_value__33674__auto__ = (function (){try{while(true){
var result__33675__auto__ = switch__33672__auto__.call(null,state_35638);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33675__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33675__auto__;
}
break;
}
}catch (e35662){if((e35662 instanceof Object)){
var ex__33676__auto__ = e35662;
var statearr_35663_35681 = state_35638;
(statearr_35663_35681[(5)] = ex__33676__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35638);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35662;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35682 = state_35638;
state_35638 = G__35682;
continue;
} else {
return ret_value__33674__auto__;
}
break;
}
});
cljs$core$async$state_machine__33673__auto__ = function(state_35638){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33673__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33673__auto____1.call(this,state_35638);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33673__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33673__auto____0;
cljs$core$async$state_machine__33673__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33673__auto____1;
return cljs$core$async$state_machine__33673__auto__;
})()
;})(switch__33672__auto__,c__33762__auto___35666,out))
})();
var state__33764__auto__ = (function (){var statearr_35664 = f__33763__auto__.call(null);
(statearr_35664[(6)] = c__33762__auto___35666);

return statearr_35664;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33764__auto__);
});})(c__33762__auto___35666,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1511975715939
