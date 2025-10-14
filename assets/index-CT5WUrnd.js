(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))a(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&a(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Qf={exports:{}},Do={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x_;function US(){if(x_)return Do;x_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(a,l,u){var f=null;if(u!==void 0&&(f=""+u),l.key!==void 0&&(f=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:s,type:a,key:f,ref:l!==void 0?l:null,props:u}}return Do.Fragment=t,Do.jsx=i,Do.jsxs=i,Do}var S_;function LS(){return S_||(S_=1,Qf.exports=US()),Qf.exports}var ce=LS(),Jf={exports:{}},he={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y_;function NS(){if(y_)return he;y_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.iterator;function x(N){return N===null||typeof N!="object"?null:(N=_&&N[_]||N["@@iterator"],typeof N=="function"?N:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,C={};function S(N,J,Mt){this.props=N,this.context=J,this.refs=C,this.updater=Mt||M}S.prototype.isReactComponent={},S.prototype.setState=function(N,J){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,J,"setState")},S.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function v(){}v.prototype=S.prototype;function U(N,J,Mt){this.props=N,this.context=J,this.refs=C,this.updater=Mt||M}var L=U.prototype=new v;L.constructor=U,E(L,S.prototype),L.isPureReactComponent=!0;var D=Array.isArray,P={H:null,A:null,T:null,S:null,V:null},F=Object.prototype.hasOwnProperty;function V(N,J,Mt,Tt,Lt,Vt){return Mt=Vt.ref,{$$typeof:s,type:N,key:J,ref:Mt!==void 0?Mt:null,props:Vt}}function X(N,J){return V(N.type,J,void 0,void 0,void 0,N.props)}function w(N){return typeof N=="object"&&N!==null&&N.$$typeof===s}function A(N){var J={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(Mt){return J[Mt]})}var k=/\/+/g;function et(N,J){return typeof N=="object"&&N!==null&&N.key!=null?A(""+N.key):J.toString(36)}function ct(){}function _t(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(ct,ct):(N.status="pending",N.then(function(J){N.status==="pending"&&(N.status="fulfilled",N.value=J)},function(J){N.status==="pending"&&(N.status="rejected",N.reason=J)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function ft(N,J,Mt,Tt,Lt){var Vt=typeof N;(Vt==="undefined"||Vt==="boolean")&&(N=null);var nt=!1;if(N===null)nt=!0;else switch(Vt){case"bigint":case"string":case"number":nt=!0;break;case"object":switch(N.$$typeof){case s:case t:nt=!0;break;case g:return nt=N._init,ft(nt(N._payload),J,Mt,Tt,Lt)}}if(nt)return Lt=Lt(N),nt=Tt===""?"."+et(N,0):Tt,D(Lt)?(Mt="",nt!=null&&(Mt=nt.replace(k,"$&/")+"/"),ft(Lt,J,Mt,"",function(Jt){return Jt})):Lt!=null&&(w(Lt)&&(Lt=X(Lt,Mt+(Lt.key==null||N&&N.key===Lt.key?"":(""+Lt.key).replace(k,"$&/")+"/")+nt)),J.push(Lt)),1;nt=0;var vt=Tt===""?".":Tt+":";if(D(N))for(var Dt=0;Dt<N.length;Dt++)Tt=N[Dt],Vt=vt+et(Tt,Dt),nt+=ft(Tt,J,Mt,Vt,Lt);else if(Dt=x(N),typeof Dt=="function")for(N=Dt.call(N),Dt=0;!(Tt=N.next()).done;)Tt=Tt.value,Vt=vt+et(Tt,Dt++),nt+=ft(Tt,J,Mt,Vt,Lt);else if(Vt==="object"){if(typeof N.then=="function")return ft(_t(N),J,Mt,Tt,Lt);throw J=String(N),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return nt}function B(N,J,Mt){if(N==null)return N;var Tt=[],Lt=0;return ft(N,Tt,"","",function(Vt){return J.call(Mt,Vt,Lt++)}),Tt}function Z(N){if(N._status===-1){var J=N._result;J=J(),J.then(function(Mt){(N._status===0||N._status===-1)&&(N._status=1,N._result=Mt)},function(Mt){(N._status===0||N._status===-1)&&(N._status=2,N._result=Mt)}),N._status===-1&&(N._status=0,N._result=J)}if(N._status===1)return N._result.default;throw N._result}var q=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)};function Et(){}return he.Children={map:B,forEach:function(N,J,Mt){B(N,function(){J.apply(this,arguments)},Mt)},count:function(N){var J=0;return B(N,function(){J++}),J},toArray:function(N){return B(N,function(J){return J})||[]},only:function(N){if(!w(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},he.Component=S,he.Fragment=i,he.Profiler=l,he.PureComponent=U,he.StrictMode=a,he.Suspense=m,he.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,he.__COMPILER_RUNTIME={__proto__:null,c:function(N){return P.H.useMemoCache(N)}},he.cache=function(N){return function(){return N.apply(null,arguments)}},he.cloneElement=function(N,J,Mt){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var Tt=E({},N.props),Lt=N.key,Vt=void 0;if(J!=null)for(nt in J.ref!==void 0&&(Vt=void 0),J.key!==void 0&&(Lt=""+J.key),J)!F.call(J,nt)||nt==="key"||nt==="__self"||nt==="__source"||nt==="ref"&&J.ref===void 0||(Tt[nt]=J[nt]);var nt=arguments.length-2;if(nt===1)Tt.children=Mt;else if(1<nt){for(var vt=Array(nt),Dt=0;Dt<nt;Dt++)vt[Dt]=arguments[Dt+2];Tt.children=vt}return V(N.type,Lt,void 0,void 0,Vt,Tt)},he.createContext=function(N){return N={$$typeof:f,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:u,_context:N},N},he.createElement=function(N,J,Mt){var Tt,Lt={},Vt=null;if(J!=null)for(Tt in J.key!==void 0&&(Vt=""+J.key),J)F.call(J,Tt)&&Tt!=="key"&&Tt!=="__self"&&Tt!=="__source"&&(Lt[Tt]=J[Tt]);var nt=arguments.length-2;if(nt===1)Lt.children=Mt;else if(1<nt){for(var vt=Array(nt),Dt=0;Dt<nt;Dt++)vt[Dt]=arguments[Dt+2];Lt.children=vt}if(N&&N.defaultProps)for(Tt in nt=N.defaultProps,nt)Lt[Tt]===void 0&&(Lt[Tt]=nt[Tt]);return V(N,Vt,void 0,void 0,null,Lt)},he.createRef=function(){return{current:null}},he.forwardRef=function(N){return{$$typeof:d,render:N}},he.isValidElement=w,he.lazy=function(N){return{$$typeof:g,_payload:{_status:-1,_result:N},_init:Z}},he.memo=function(N,J){return{$$typeof:p,type:N,compare:J===void 0?null:J}},he.startTransition=function(N){var J=P.T,Mt={};P.T=Mt;try{var Tt=N(),Lt=P.S;Lt!==null&&Lt(Mt,Tt),typeof Tt=="object"&&Tt!==null&&typeof Tt.then=="function"&&Tt.then(Et,q)}catch(Vt){q(Vt)}finally{P.T=J}},he.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},he.use=function(N){return P.H.use(N)},he.useActionState=function(N,J,Mt){return P.H.useActionState(N,J,Mt)},he.useCallback=function(N,J){return P.H.useCallback(N,J)},he.useContext=function(N){return P.H.useContext(N)},he.useDebugValue=function(){},he.useDeferredValue=function(N,J){return P.H.useDeferredValue(N,J)},he.useEffect=function(N,J,Mt){var Tt=P.H;if(typeof Mt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Tt.useEffect(N,J)},he.useId=function(){return P.H.useId()},he.useImperativeHandle=function(N,J,Mt){return P.H.useImperativeHandle(N,J,Mt)},he.useInsertionEffect=function(N,J){return P.H.useInsertionEffect(N,J)},he.useLayoutEffect=function(N,J){return P.H.useLayoutEffect(N,J)},he.useMemo=function(N,J){return P.H.useMemo(N,J)},he.useOptimistic=function(N,J){return P.H.useOptimistic(N,J)},he.useReducer=function(N,J,Mt){return P.H.useReducer(N,J,Mt)},he.useRef=function(N){return P.H.useRef(N)},he.useState=function(N){return P.H.useState(N)},he.useSyncExternalStore=function(N,J,Mt){return P.H.useSyncExternalStore(N,J,Mt)},he.useTransition=function(){return P.H.useTransition()},he.version="19.1.1",he}var M_;function Cd(){return M_||(M_=1,Jf.exports=NS()),Jf.exports}var St=Cd(),$f={exports:{}},Uo={},th={exports:{}},eh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E_;function OS(){return E_||(E_=1,(function(s){function t(B,Z){var q=B.length;B.push(Z);t:for(;0<q;){var Et=q-1>>>1,N=B[Et];if(0<l(N,Z))B[Et]=Z,B[q]=N,q=Et;else break t}}function i(B){return B.length===0?null:B[0]}function a(B){if(B.length===0)return null;var Z=B[0],q=B.pop();if(q!==Z){B[0]=q;t:for(var Et=0,N=B.length,J=N>>>1;Et<J;){var Mt=2*(Et+1)-1,Tt=B[Mt],Lt=Mt+1,Vt=B[Lt];if(0>l(Tt,q))Lt<N&&0>l(Vt,Tt)?(B[Et]=Vt,B[Lt]=q,Et=Lt):(B[Et]=Tt,B[Mt]=q,Et=Mt);else if(Lt<N&&0>l(Vt,q))B[Et]=Vt,B[Lt]=q,Et=Lt;else break t}}return Z}function l(B,Z){var q=B.sortIndex-Z.sortIndex;return q!==0?q:B.id-Z.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var f=Date,d=f.now();s.unstable_now=function(){return f.now()-d}}var m=[],p=[],g=1,_=null,x=3,M=!1,E=!1,C=!1,S=!1,v=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function D(B){for(var Z=i(p);Z!==null;){if(Z.callback===null)a(p);else if(Z.startTime<=B)a(p),Z.sortIndex=Z.expirationTime,t(m,Z);else break;Z=i(p)}}function P(B){if(C=!1,D(B),!E)if(i(m)!==null)E=!0,F||(F=!0,et());else{var Z=i(p);Z!==null&&ft(P,Z.startTime-B)}}var F=!1,V=-1,X=5,w=-1;function A(){return S?!0:!(s.unstable_now()-w<X)}function k(){if(S=!1,F){var B=s.unstable_now();w=B;var Z=!0;try{t:{E=!1,C&&(C=!1,U(V),V=-1),M=!0;var q=x;try{e:{for(D(B),_=i(m);_!==null&&!(_.expirationTime>B&&A());){var Et=_.callback;if(typeof Et=="function"){_.callback=null,x=_.priorityLevel;var N=Et(_.expirationTime<=B);if(B=s.unstable_now(),typeof N=="function"){_.callback=N,D(B),Z=!0;break e}_===i(m)&&a(m),D(B)}else a(m);_=i(m)}if(_!==null)Z=!0;else{var J=i(p);J!==null&&ft(P,J.startTime-B),Z=!1}}break t}finally{_=null,x=q,M=!1}Z=void 0}}finally{Z?et():F=!1}}}var et;if(typeof L=="function")et=function(){L(k)};else if(typeof MessageChannel<"u"){var ct=new MessageChannel,_t=ct.port2;ct.port1.onmessage=k,et=function(){_t.postMessage(null)}}else et=function(){v(k,0)};function ft(B,Z){V=v(function(){B(s.unstable_now())},Z)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(B){B.callback=null},s.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<B?Math.floor(1e3/B):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_next=function(B){switch(x){case 1:case 2:case 3:var Z=3;break;default:Z=x}var q=x;x=Z;try{return B()}finally{x=q}},s.unstable_requestPaint=function(){S=!0},s.unstable_runWithPriority=function(B,Z){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var q=x;x=B;try{return Z()}finally{x=q}},s.unstable_scheduleCallback=function(B,Z,q){var Et=s.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?Et+q:Et):q=Et,B){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=q+N,B={id:g++,callback:Z,priorityLevel:B,startTime:q,expirationTime:N,sortIndex:-1},q>Et?(B.sortIndex=q,t(p,B),i(m)===null&&B===i(p)&&(C?(U(V),V=-1):C=!0,ft(P,q-Et))):(B.sortIndex=N,t(m,B),E||M||(E=!0,F||(F=!0,et()))),B},s.unstable_shouldYield=A,s.unstable_wrapCallback=function(B){var Z=x;return function(){var q=x;x=Z;try{return B.apply(this,arguments)}finally{x=q}}}})(eh)),eh}var T_;function PS(){return T_||(T_=1,th.exports=OS()),th.exports}var nh={exports:{}},wn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b_;function IS(){if(b_)return wn;b_=1;var s=Cd();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:g}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return wn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,wn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(m,p,null,g)},wn.flushSync=function(m){var p=f.T,g=a.p;try{if(f.T=null,a.p=2,m)return m()}finally{f.T=p,a.p=g,a.d.f()}},wn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,a.d.C(m,p))},wn.prefetchDNS=function(m){typeof m=="string"&&a.d.D(m)},wn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?a.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:x,fetchPriority:M}):g==="script"&&a.d.X(m,{crossOrigin:_,integrity:x,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},wn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);a.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&a.d.M(m)},wn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin);a.d.L(m,g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},wn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);a.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else a.d.m(m)},wn.requestFormReset=function(m){a.d.r(m)},wn.unstable_batchedUpdates=function(m,p){return m(p)},wn.useFormState=function(m,p,g){return f.H.useFormState(m,p,g)},wn.useFormStatus=function(){return f.H.useHostTransitionStatus()},wn.version="19.1.1",wn}var A_;function BS(){if(A_)return nh.exports;A_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),nh.exports=IS(),nh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R_;function zS(){if(R_)return Uo;R_=1;var s=PS(),t=Cd(),i=BS();function a(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,r=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(r=n.return),e=n.return;while(e)}return n.tag===3?r:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(u(e)!==e)throw Error(a(188))}function m(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(a(188));return n!==e?null:e}for(var r=e,o=n;;){var c=r.return;if(c===null)break;var h=c.alternate;if(h===null){if(o=c.return,o!==null){r=o;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===r)return d(c),e;if(h===o)return d(c),n;h=h.sibling}throw Error(a(188))}if(r.return!==o.return)r=c,o=h;else{for(var y=!1,b=c.child;b;){if(b===r){y=!0,r=c,o=h;break}if(b===o){y=!0,o=c,r=h;break}b=b.sibling}if(!y){for(b=h.child;b;){if(b===r){y=!0,r=h,o=c;break}if(b===o){y=!0,o=h,r=c;break}b=b.sibling}if(!y)throw Error(a(189))}}if(r.alternate!==o)throw Error(a(190))}if(r.tag!==3)throw Error(a(188));return r.stateNode.current===r?e:n}function p(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=p(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,_=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),U=Symbol.for("react.consumer"),L=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),V=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),A=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function et(e){return e===null||typeof e!="object"?null:(e=k&&e[k]||e["@@iterator"],typeof e=="function"?e:null)}var ct=Symbol.for("react.client.reference");function _t(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ct?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case S:return"Profiler";case C:return"StrictMode";case P:return"Suspense";case F:return"SuspenseList";case w:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case M:return"Portal";case L:return(e.displayName||"Context")+".Provider";case U:return(e._context.displayName||"Context")+".Consumer";case D:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case V:return n=e.displayName||null,n!==null?n:_t(e.type)||"Memo";case X:n=e._payload,e=e._init;try{return _t(e(n))}catch{}}return null}var ft=Array.isArray,B=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},Et=[],N=-1;function J(e){return{current:e}}function Mt(e){0>N||(e.current=Et[N],Et[N]=null,N--)}function Tt(e,n){N++,Et[N]=e.current,e.current=n}var Lt=J(null),Vt=J(null),nt=J(null),vt=J(null);function Dt(e,n){switch(Tt(nt,n),Tt(Vt,e),Tt(Lt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Yg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Yg(n),e=jg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Mt(Lt),Tt(Lt,e)}function Jt(){Mt(Lt),Mt(Vt),Mt(nt)}function qt(e){e.memoizedState!==null&&Tt(vt,e);var n=Lt.current,r=jg(n,e.type);n!==r&&(Tt(Vt,e),Tt(Lt,r))}function fe(e){Vt.current===e&&(Mt(Lt),Mt(Vt)),vt.current===e&&(Mt(vt),bo._currentValue=q)}var Ze=Object.prototype.hasOwnProperty,H=s.unstable_scheduleCallback,we=s.unstable_cancelCallback,oe=s.unstable_shouldYield,ne=s.unstable_requestPaint,zt=s.unstable_now,Le=s.unstable_getCurrentPriorityLevel,kt=s.unstable_ImmediatePriority,le=s.unstable_UserBlockingPriority,Xe=s.unstable_NormalPriority,Ve=s.unstable_LowPriority,O=s.unstable_IdlePriority,T=s.log,it=s.unstable_setDisableYieldValue,ht=null,mt=null;function ut(e){if(typeof T=="function"&&it(e),mt&&typeof mt.setStrictMode=="function")try{mt.setStrictMode(ht,e)}catch{}}var Ht=Math.clz32?Math.clz32:Yt,Ut=Math.log,Wt=Math.LN2;function Yt(e){return e>>>=0,e===0?32:31-(Ut(e)/Wt|0)|0}var bt=256,Nt=4194304;function jt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function z(e,n,r){var o=e.pendingLanes;if(o===0)return 0;var c=0,h=e.suspendedLanes,y=e.pingedLanes;e=e.warmLanes;var b=o&134217727;return b!==0?(o=b&~h,o!==0?c=jt(o):(y&=b,y!==0?c=jt(y):r||(r=b&~e,r!==0&&(c=jt(r))))):(b=o&~h,b!==0?c=jt(b):y!==0?c=jt(y):r||(r=o&~e,r!==0&&(c=jt(r)))),c===0?0:n!==0&&n!==c&&(n&h)===0&&(h=c&-c,r=n&-n,h>=r||h===32&&(r&4194048)!==0)?n:c}function at(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function wt(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function G(){var e=bt;return bt<<=1,(bt&4194048)===0&&(bt=256),e}function yt(){var e=Nt;return Nt<<=1,(Nt&62914560)===0&&(Nt=4194304),e}function Rt(e){for(var n=[],r=0;31>r;r++)n.push(e);return n}function Ot(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function At(e,n,r,o,c,h){var y=e.pendingLanes;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0;var b=e.entanglements,I=e.expirationTimes,tt=e.hiddenUpdates;for(r=y&~r;0<r;){var dt=31-Ht(r),xt=1<<dt;b[dt]=0,I[dt]=-1;var rt=tt[dt];if(rt!==null)for(tt[dt]=null,dt=0;dt<rt.length;dt++){var st=rt[dt];st!==null&&(st.lane&=-536870913)}r&=~xt}o!==0&&gt(e,o,0),h!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=h&~(y&~n))}function gt(e,n,r){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Ht(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|r&4194090}function Ft(e,n){var r=e.entangledLanes|=n;for(e=e.entanglements;r;){var o=31-Ht(r),c=1<<o;c&n|e[o]&n&&(e[o]|=n),r&=~c}}function Kt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Te(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function _e(){var e=Z.p;return e!==0?e:(e=window.event,e===void 0?32:d_(e.type))}function yn(e,n){var r=Z.p;try{return Z.p=e,n()}finally{Z.p=r}}var qe=Math.random().toString(36).slice(2),fn="__reactFiber$"+qe,Je="__reactProps$"+qe,Si="__reactContainer$"+qe,Rr="__reactEvents$"+qe,tl="__reactListeners$"+qe,Cr="__reactHandles$"+qe,Is="__reactResources$"+qe,yi="__reactMarker$"+qe;function wr(e){delete e[fn],delete e[Je],delete e[Rr],delete e[tl],delete e[Cr]}function Bi(e){var n=e[fn];if(n)return n;for(var r=e.parentNode;r;){if(n=r[Si]||r[fn]){if(r=n.alternate,n.child!==null||r!==null&&r.child!==null)for(e=Jg(e);e!==null;){if(r=e[fn])return r;e=Jg(e)}return n}e=r,r=e.parentNode}return null}function fa(e){if(e=e[fn]||e[Si]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function Za(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(a(33))}function ha(e){var n=e[Is];return n||(n=e[Is]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function on(e){e[yi]=!0}var el=new Set,nl={};function R(e,n){Y(e,n),Y(e+"Capture",n)}function Y(e,n){for(nl[e]=n,e=0;e<n.length;e++)el.add(n[e])}var ot=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),lt={},K={};function Ct(e){return Ze.call(K,e)?!0:Ze.call(lt,e)?!1:ot.test(e)?K[e]=!0:(lt[e]=!0,!1)}function Pt(e,n,r){if(Ct(n))if(r===null)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+r)}}function Gt(e,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+r)}}function It(e,n,r,o){if(o===null)e.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttributeNS(n,r,""+o)}}var te,ae;function Zt(e){if(te===void 0)try{throw Error()}catch(r){var n=r.stack.trim().match(/\n( *(at )?)/);te=n&&n[1]||"",ae=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+te+e+ae}var pe=!1;function Ae(e,n){if(!e||pe)return"";pe=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var xt=function(){throw Error()};if(Object.defineProperty(xt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xt,[])}catch(st){var rt=st}Reflect.construct(e,[],xt)}else{try{xt.call()}catch(st){rt=st}e.call(xt.prototype)}}else{try{throw Error()}catch(st){rt=st}(xt=e())&&typeof xt.catch=="function"&&xt.catch(function(){})}}catch(st){if(st&&rt&&typeof st.stack=="string")return[st.stack,rt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),y=h[0],b=h[1];if(y&&b){var I=y.split(`
`),tt=b.split(`
`);for(c=o=0;o<I.length&&!I[o].includes("DetermineComponentFrameRoot");)o++;for(;c<tt.length&&!tt[c].includes("DetermineComponentFrameRoot");)c++;if(o===I.length||c===tt.length)for(o=I.length-1,c=tt.length-1;1<=o&&0<=c&&I[o]!==tt[c];)c--;for(;1<=o&&0<=c;o--,c--)if(I[o]!==tt[c]){if(o!==1||c!==1)do if(o--,c--,0>c||I[o]!==tt[c]){var dt=`
`+I[o].replace(" at new "," at ");return e.displayName&&dt.includes("<anonymous>")&&(dt=dt.replace("<anonymous>",e.displayName)),dt}while(1<=o&&0<=c);break}}}finally{pe=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?Zt(r):""}function Ye(e){switch(e.tag){case 26:case 27:case 5:return Zt(e.type);case 16:return Zt("Lazy");case 13:return Zt("Suspense");case 19:return Zt("SuspenseList");case 0:case 15:return Ae(e.type,!1);case 11:return Ae(e.type.render,!1);case 1:return Ae(e.type,!0);case 31:return Zt("Activity");default:return""}}function Pe(e){try{var n="";do n+=Ye(e),e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}function me(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function $t(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function We(e){var n=$t(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,h=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(y){o=""+y,h.call(this,y)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return o},setValue:function(y){o=""+y},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Se(e){e._valueTracker||(e._valueTracker=We(e))}function An(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var r=n.getValue(),o="";return e&&(o=$t(e)?e.checked?"true":"false":e.value),e=o,e!==r?(n.setValue(e),!0):!1}function ci(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Nn=/[\n"\\]/g;function gn(e){return e.replace(Nn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function He(e,n,r,o,c,h,y,b){e.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.type=y:e.removeAttribute("type"),n!=null?y==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+me(n)):e.value!==""+me(n)&&(e.value=""+me(n)):y!=="submit"&&y!=="reset"||e.removeAttribute("value"),n!=null?Rn(e,y,me(n)):r!=null?Rn(e,y,me(r)):o!=null&&e.removeAttribute("value"),c==null&&h!=null&&(e.defaultChecked=!!h),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+me(b):e.removeAttribute("name")}function On(e,n,r,o,c,h,y,b){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),n!=null||r!=null){if(!(h!=="submit"&&h!=="reset"||n!=null))return;r=r!=null?""+me(r):"",n=n!=null?""+me(n):r,b||n===e.value||(e.value=n),e.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=b?e.checked:!!o,e.defaultChecked=!!o,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(e.name=y)}function Rn(e,n,r){n==="number"&&ci(e.ownerDocument)===e||e.defaultValue===""+r||(e.defaultValue=""+r)}function $e(e,n,r,o){if(e=e.options,n){n={};for(var c=0;c<r.length;c++)n["$"+r[c]]=!0;for(r=0;r<e.length;r++)c=n.hasOwnProperty("$"+e[r].value),e[r].selected!==c&&(e[r].selected=c),c&&o&&(e[r].defaultSelected=!0)}else{for(r=""+me(r),n=null,c=0;c<e.length;c++){if(e[c].value===r){e[c].selected=!0,o&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function Mn(e,n,r){if(n!=null&&(n=""+me(n),n!==e.value&&(e.value=n),r==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=r!=null?""+me(r):""}function Dr(e,n,r,o){if(n==null){if(o!=null){if(r!=null)throw Error(a(92));if(ft(o)){if(1<o.length)throw Error(a(93));o=o[0]}r=o}r==null&&(r=""),n=r}r=me(n),e.defaultValue=r,o=e.textContent,o===r&&o!==""&&o!==null&&(e.value=o)}function zn(e,n){if(n){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=n;return}}e.textContent=n}var C0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Yd(e,n,r){var o=n.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,r):typeof r!="number"||r===0||C0.has(n)?n==="float"?e.cssFloat=r:e[n]=(""+r).trim():e[n]=r+"px"}function jd(e,n,r){if(n!=null&&typeof n!="object")throw Error(a(62));if(e=e.style,r!=null){for(var o in r)!r.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var c in n)o=n[c],n.hasOwnProperty(c)&&r[c]!==o&&Yd(e,c,o)}else for(var h in n)n.hasOwnProperty(h)&&Yd(e,h,n[h])}function Zu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var w0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),D0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function il(e){return D0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Ku=null;function Qu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ur=null,Lr=null;function Zd(e){var n=fa(e);if(n&&(e=n.stateNode)){var r=e[Je]||null;t:switch(e=n.stateNode,n.type){case"input":if(He(e,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),n=r.name,r.type==="radio"&&n!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+gn(""+n)+'"][type="radio"]'),n=0;n<r.length;n++){var o=r[n];if(o!==e&&o.form===e.form){var c=o[Je]||null;if(!c)throw Error(a(90));He(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<r.length;n++)o=r[n],o.form===e.form&&An(o)}break t;case"textarea":Mn(e,r.value,r.defaultValue);break t;case"select":n=r.value,n!=null&&$e(e,!!r.multiple,n,!1)}}}var Ju=!1;function Kd(e,n,r){if(Ju)return e(n,r);Ju=!0;try{var o=e(n);return o}finally{if(Ju=!1,(Ur!==null||Lr!==null)&&(Vl(),Ur&&(n=Ur,e=Lr,Lr=Ur=null,Zd(n),e)))for(n=0;n<e.length;n++)Zd(e[n])}}function Bs(e,n){var r=e.stateNode;if(r===null)return null;var o=r[Je]||null;if(o===null)return null;r=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(a(231,n,typeof r));return r}var zi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$u=!1;if(zi)try{var zs={};Object.defineProperty(zs,"passive",{get:function(){$u=!0}}),window.addEventListener("test",zs,zs),window.removeEventListener("test",zs,zs)}catch{$u=!1}var da=null,tc=null,al=null;function Qd(){if(al)return al;var e,n=tc,r=n.length,o,c="value"in da?da.value:da.textContent,h=c.length;for(e=0;e<r&&n[e]===c[e];e++);var y=r-e;for(o=1;o<=y&&n[r-o]===c[h-o];o++);return al=c.slice(e,1<o?1-o:void 0)}function rl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function sl(){return!0}function Jd(){return!1}function Fn(e){function n(r,o,c,h,y){this._reactName=r,this._targetInst=c,this.type=o,this.nativeEvent=h,this.target=y,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(r=e[b],this[b]=r?r(h):h[b]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?sl:Jd,this.isPropagationStopped=Jd,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=sl)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=sl)},persist:function(){},isPersistent:sl}),n}var Ka={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ol=Fn(Ka),Fs=g({},Ka,{view:0,detail:0}),U0=Fn(Fs),ec,nc,Hs,ll=g({},Fs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ac,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Hs&&(Hs&&e.type==="mousemove"?(ec=e.screenX-Hs.screenX,nc=e.screenY-Hs.screenY):nc=ec=0,Hs=e),ec)},movementY:function(e){return"movementY"in e?e.movementY:nc}}),$d=Fn(ll),L0=g({},ll,{dataTransfer:0}),N0=Fn(L0),O0=g({},Fs,{relatedTarget:0}),ic=Fn(O0),P0=g({},Ka,{animationName:0,elapsedTime:0,pseudoElement:0}),I0=Fn(P0),B0=g({},Ka,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),z0=Fn(B0),F0=g({},Ka,{data:0}),tp=Fn(F0),H0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},G0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},V0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function k0(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=V0[e])?!!n[e]:!1}function ac(){return k0}var X0=g({},Fs,{key:function(e){if(e.key){var n=H0[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=rl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?G0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ac,charCode:function(e){return e.type==="keypress"?rl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?rl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),W0=Fn(X0),q0=g({},ll,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ep=Fn(q0),Y0=g({},Fs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ac}),j0=Fn(Y0),Z0=g({},Ka,{propertyName:0,elapsedTime:0,pseudoElement:0}),K0=Fn(Z0),Q0=g({},ll,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),J0=Fn(Q0),$0=g({},Ka,{newState:0,oldState:0}),tx=Fn($0),ex=[9,13,27,32],rc=zi&&"CompositionEvent"in window,Gs=null;zi&&"documentMode"in document&&(Gs=document.documentMode);var nx=zi&&"TextEvent"in window&&!Gs,np=zi&&(!rc||Gs&&8<Gs&&11>=Gs),ip=" ",ap=!1;function rp(e,n){switch(e){case"keyup":return ex.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Nr=!1;function ix(e,n){switch(e){case"compositionend":return sp(n);case"keypress":return n.which!==32?null:(ap=!0,ip);case"textInput":return e=n.data,e===ip&&ap?null:e;default:return null}}function ax(e,n){if(Nr)return e==="compositionend"||!rc&&rp(e,n)?(e=Qd(),al=tc=da=null,Nr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return np&&n.locale!=="ko"?null:n.data;default:return null}}var rx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function op(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!rx[e.type]:n==="textarea"}function lp(e,n,r,o){Ur?Lr?Lr.push(o):Lr=[o]:Ur=o,n=jl(n,"onChange"),0<n.length&&(r=new ol("onChange","change",null,r,o),e.push({event:r,listeners:n}))}var Vs=null,ks=null;function sx(e){Vg(e,0)}function ul(e){var n=Za(e);if(An(n))return e}function up(e,n){if(e==="change")return n}var cp=!1;if(zi){var sc;if(zi){var oc="oninput"in document;if(!oc){var fp=document.createElement("div");fp.setAttribute("oninput","return;"),oc=typeof fp.oninput=="function"}sc=oc}else sc=!1;cp=sc&&(!document.documentMode||9<document.documentMode)}function hp(){Vs&&(Vs.detachEvent("onpropertychange",dp),ks=Vs=null)}function dp(e){if(e.propertyName==="value"&&ul(ks)){var n=[];lp(n,ks,e,Qu(e)),Kd(sx,n)}}function ox(e,n,r){e==="focusin"?(hp(),Vs=n,ks=r,Vs.attachEvent("onpropertychange",dp)):e==="focusout"&&hp()}function lx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ul(ks)}function ux(e,n){if(e==="click")return ul(n)}function cx(e,n){if(e==="input"||e==="change")return ul(n)}function fx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var qn=typeof Object.is=="function"?Object.is:fx;function Xs(e,n){if(qn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var r=Object.keys(e),o=Object.keys(n);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var c=r[o];if(!Ze.call(n,c)||!qn(e[c],n[c]))return!1}return!0}function pp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function mp(e,n){var r=pp(e);e=0;for(var o;r;){if(r.nodeType===3){if(o=e+r.textContent.length,e<=n&&o>=n)return{node:r,offset:n-e};e=o}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=pp(r)}}function gp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?gp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function _p(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=ci(e.document);n instanceof e.HTMLIFrameElement;){try{var r=typeof n.contentWindow.location.href=="string"}catch{r=!1}if(r)e=n.contentWindow;else break;n=ci(e.document)}return n}function lc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var hx=zi&&"documentMode"in document&&11>=document.documentMode,Or=null,uc=null,Ws=null,cc=!1;function vp(e,n,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;cc||Or==null||Or!==ci(o)||(o=Or,"selectionStart"in o&&lc(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Ws&&Xs(Ws,o)||(Ws=o,o=jl(uc,"onSelect"),0<o.length&&(n=new ol("onSelect","select",null,n,r),e.push({event:n,listeners:o}),n.target=Or)))}function Qa(e,n){var r={};return r[e.toLowerCase()]=n.toLowerCase(),r["Webkit"+e]="webkit"+n,r["Moz"+e]="moz"+n,r}var Pr={animationend:Qa("Animation","AnimationEnd"),animationiteration:Qa("Animation","AnimationIteration"),animationstart:Qa("Animation","AnimationStart"),transitionrun:Qa("Transition","TransitionRun"),transitionstart:Qa("Transition","TransitionStart"),transitioncancel:Qa("Transition","TransitionCancel"),transitionend:Qa("Transition","TransitionEnd")},fc={},xp={};zi&&(xp=document.createElement("div").style,"AnimationEvent"in window||(delete Pr.animationend.animation,delete Pr.animationiteration.animation,delete Pr.animationstart.animation),"TransitionEvent"in window||delete Pr.transitionend.transition);function Ja(e){if(fc[e])return fc[e];if(!Pr[e])return e;var n=Pr[e],r;for(r in n)if(n.hasOwnProperty(r)&&r in xp)return fc[e]=n[r];return e}var Sp=Ja("animationend"),yp=Ja("animationiteration"),Mp=Ja("animationstart"),dx=Ja("transitionrun"),px=Ja("transitionstart"),mx=Ja("transitioncancel"),Ep=Ja("transitionend"),Tp=new Map,hc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");hc.push("scrollEnd");function fi(e,n){Tp.set(e,n),R(n,[e])}var bp=new WeakMap;function ei(e,n){if(typeof e=="object"&&e!==null){var r=bp.get(e);return r!==void 0?r:(n={value:e,source:n,stack:Pe(n)},bp.set(e,n),n)}return{value:e,source:n,stack:Pe(n)}}var ni=[],Ir=0,dc=0;function cl(){for(var e=Ir,n=dc=Ir=0;n<e;){var r=ni[n];ni[n++]=null;var o=ni[n];ni[n++]=null;var c=ni[n];ni[n++]=null;var h=ni[n];if(ni[n++]=null,o!==null&&c!==null){var y=o.pending;y===null?c.next=c:(c.next=y.next,y.next=c),o.pending=c}h!==0&&Ap(r,c,h)}}function fl(e,n,r,o){ni[Ir++]=e,ni[Ir++]=n,ni[Ir++]=r,ni[Ir++]=o,dc|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function pc(e,n,r,o){return fl(e,n,r,o),hl(e)}function Br(e,n){return fl(e,null,null,n),hl(e)}function Ap(e,n,r){e.lanes|=r;var o=e.alternate;o!==null&&(o.lanes|=r);for(var c=!1,h=e.return;h!==null;)h.childLanes|=r,o=h.alternate,o!==null&&(o.childLanes|=r),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(c=!0)),e=h,h=h.return;return e.tag===3?(h=e.stateNode,c&&n!==null&&(c=31-Ht(r),e=h.hiddenUpdates,o=e[c],o===null?e[c]=[n]:o.push(n),n.lane=r|536870912),h):null}function hl(e){if(50<_o)throw _o=0,yf=null,Error(a(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var zr={};function gx(e,n,r,o){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(e,n,r,o){return new gx(e,n,r,o)}function mc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Fi(e,n){var r=e.alternate;return r===null?(r=Yn(e.tag,n,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=n,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&65011712,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,n=e.dependencies,r.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function Rp(e,n){e.flags&=65011714;var r=e.alternate;return r===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,n=r.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function dl(e,n,r,o,c,h){var y=0;if(o=e,typeof e=="function")mc(e)&&(y=1);else if(typeof e=="string")y=vS(e,r,Lt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case w:return e=Yn(31,r,n,c),e.elementType=w,e.lanes=h,e;case E:return $a(r.children,c,h,n);case C:y=8,c|=24;break;case S:return e=Yn(12,r,n,c|2),e.elementType=S,e.lanes=h,e;case P:return e=Yn(13,r,n,c),e.elementType=P,e.lanes=h,e;case F:return e=Yn(19,r,n,c),e.elementType=F,e.lanes=h,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case v:case L:y=10;break t;case U:y=9;break t;case D:y=11;break t;case V:y=14;break t;case X:y=16,o=null;break t}y=29,r=Error(a(130,e===null?"null":typeof e,"")),o=null}return n=Yn(y,r,n,c),n.elementType=e,n.type=o,n.lanes=h,n}function $a(e,n,r,o){return e=Yn(7,e,o,n),e.lanes=r,e}function gc(e,n,r){return e=Yn(6,e,null,n),e.lanes=r,e}function _c(e,n,r){return n=Yn(4,e.children!==null?e.children:[],e.key,n),n.lanes=r,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Fr=[],Hr=0,pl=null,ml=0,ii=[],ai=0,tr=null,Hi=1,Gi="";function er(e,n){Fr[Hr++]=ml,Fr[Hr++]=pl,pl=e,ml=n}function Cp(e,n,r){ii[ai++]=Hi,ii[ai++]=Gi,ii[ai++]=tr,tr=e;var o=Hi;e=Gi;var c=32-Ht(o)-1;o&=~(1<<c),r+=1;var h=32-Ht(n)+c;if(30<h){var y=c-c%5;h=(o&(1<<y)-1).toString(32),o>>=y,c-=y,Hi=1<<32-Ht(n)+c|r<<c|o,Gi=h+e}else Hi=1<<h|r<<c|o,Gi=e}function vc(e){e.return!==null&&(er(e,1),Cp(e,1,0))}function xc(e){for(;e===pl;)pl=Fr[--Hr],Fr[Hr]=null,ml=Fr[--Hr],Fr[Hr]=null;for(;e===tr;)tr=ii[--ai],ii[ai]=null,Gi=ii[--ai],ii[ai]=null,Hi=ii[--ai],ii[ai]=null}var Pn=null,tn=null,De=!1,nr=null,Mi=!1,Sc=Error(a(519));function ir(e){var n=Error(a(418,""));throw js(ei(n,e)),Sc}function wp(e){var n=e.stateNode,r=e.type,o=e.memoizedProps;switch(n[fn]=e,n[Je]=o,r){case"dialog":Me("cancel",n),Me("close",n);break;case"iframe":case"object":case"embed":Me("load",n);break;case"video":case"audio":for(r=0;r<xo.length;r++)Me(xo[r],n);break;case"source":Me("error",n);break;case"img":case"image":case"link":Me("error",n),Me("load",n);break;case"details":Me("toggle",n);break;case"input":Me("invalid",n),On(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),Se(n);break;case"select":Me("invalid",n);break;case"textarea":Me("invalid",n),Dr(n,o.value,o.defaultValue,o.children),Se(n)}r=o.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||n.textContent===""+r||o.suppressHydrationWarning===!0||qg(n.textContent,r)?(o.popover!=null&&(Me("beforetoggle",n),Me("toggle",n)),o.onScroll!=null&&Me("scroll",n),o.onScrollEnd!=null&&Me("scrollend",n),o.onClick!=null&&(n.onclick=Zl),n=!0):n=!1,n||ir(e)}function Dp(e){for(Pn=e.return;Pn;)switch(Pn.tag){case 5:case 13:Mi=!1;return;case 27:case 3:Mi=!0;return;default:Pn=Pn.return}}function qs(e){if(e!==Pn)return!1;if(!De)return Dp(e),De=!0,!1;var n=e.tag,r;if((r=n!==3&&n!==27)&&((r=n===5)&&(r=e.type,r=!(r!=="form"&&r!=="button")||Bf(e.type,e.memoizedProps)),r=!r),r&&tn&&ir(e),Dp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(r=e.data,r==="/$"){if(n===0){tn=di(e.nextSibling);break t}n--}else r!=="$"&&r!=="$!"&&r!=="$?"||n++;e=e.nextSibling}tn=null}}else n===27?(n=tn,wa(e.type)?(e=Gf,Gf=null,tn=e):tn=n):tn=Pn?di(e.stateNode.nextSibling):null;return!0}function Ys(){tn=Pn=null,De=!1}function Up(){var e=nr;return e!==null&&(Vn===null?Vn=e:Vn.push.apply(Vn,e),nr=null),e}function js(e){nr===null?nr=[e]:nr.push(e)}var yc=J(null),ar=null,Vi=null;function pa(e,n,r){Tt(yc,n._currentValue),n._currentValue=r}function ki(e){e._currentValue=yc.current,Mt(yc)}function Mc(e,n,r){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===r)break;e=e.return}}function Ec(e,n,r,o){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var h=c.dependencies;if(h!==null){var y=c.child;h=h.firstContext;t:for(;h!==null;){var b=h;h=c;for(var I=0;I<n.length;I++)if(b.context===n[I]){h.lanes|=r,b=h.alternate,b!==null&&(b.lanes|=r),Mc(h.return,r,e),o||(y=null);break t}h=b.next}}else if(c.tag===18){if(y=c.return,y===null)throw Error(a(341));y.lanes|=r,h=y.alternate,h!==null&&(h.lanes|=r),Mc(y,r,e),y=null}else y=c.child;if(y!==null)y.return=c;else for(y=c;y!==null;){if(y===e){y=null;break}if(c=y.sibling,c!==null){c.return=y.return,y=c;break}y=y.return}c=y}}function Zs(e,n,r,o){e=null;for(var c=n,h=!1;c!==null;){if(!h){if((c.flags&524288)!==0)h=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var y=c.alternate;if(y===null)throw Error(a(387));if(y=y.memoizedProps,y!==null){var b=c.type;qn(c.pendingProps.value,y.value)||(e!==null?e.push(b):e=[b])}}else if(c===vt.current){if(y=c.alternate,y===null)throw Error(a(387));y.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(bo):e=[bo])}c=c.return}e!==null&&Ec(n,e,r,o),n.flags|=262144}function gl(e){for(e=e.firstContext;e!==null;){if(!qn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function rr(e){ar=e,Vi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Cn(e){return Lp(ar,e)}function _l(e,n){return ar===null&&rr(e),Lp(e,n)}function Lp(e,n){var r=n._currentValue;if(n={context:n,memoizedValue:r,next:null},Vi===null){if(e===null)throw Error(a(308));Vi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Vi=Vi.next=n;return r}var _x=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(r,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(r){return r()})}},vx=s.unstable_scheduleCallback,xx=s.unstable_NormalPriority,hn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Tc(){return{controller:new _x,data:new Map,refCount:0}}function Ks(e){e.refCount--,e.refCount===0&&vx(xx,function(){e.controller.abort()})}var Qs=null,bc=0,Gr=0,Vr=null;function Sx(e,n){if(Qs===null){var r=Qs=[];bc=0,Gr=Cf(),Vr={status:"pending",value:void 0,then:function(o){r.push(o)}}}return bc++,n.then(Np,Np),n}function Np(){if(--bc===0&&Qs!==null){Vr!==null&&(Vr.status="fulfilled");var e=Qs;Qs=null,Gr=0,Vr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function yx(e,n){var r=[],o={status:"pending",value:null,reason:null,then:function(c){r.push(c)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<r.length;c++)(0,r[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<r.length;c++)(0,r[c])(void 0)}),o}var Op=B.S;B.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Sx(e,n),Op!==null&&Op(e,n)};var sr=J(null);function Ac(){var e=sr.current;return e!==null?e:ke.pooledCache}function vl(e,n){n===null?Tt(sr,sr.current):Tt(sr,n.pool)}function Pp(){var e=Ac();return e===null?null:{parent:hn._currentValue,pool:e}}var Js=Error(a(460)),Ip=Error(a(474)),xl=Error(a(542)),Rc={then:function(){}};function Bp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Sl(){}function zp(e,n,r){switch(r=e[r],r===void 0?e.push(n):r!==n&&(n.then(Sl,Sl),n=r),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Hp(e),e;default:if(typeof n.status=="string")n.then(Sl,Sl);else{if(e=ke,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Hp(e),e}throw $s=n,Js}}var $s=null;function Fp(){if($s===null)throw Error(a(459));var e=$s;return $s=null,e}function Hp(e){if(e===Js||e===xl)throw Error(a(483))}var ma=!1;function Cc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function wc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ga(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function _a(e,n,r){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ne&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=hl(e),Ap(e,null,r),n}return fl(e,o,n,r),hl(e)}function to(e,n,r){if(n=n.updateQueue,n!==null&&(n=n.shared,(r&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,r|=o,n.lanes=r,Ft(e,r)}}function Dc(e,n){var r=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var c=null,h=null;if(r=r.firstBaseUpdate,r!==null){do{var y={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};h===null?c=h=y:h=h.next=y,r=r.next}while(r!==null);h===null?c=h=n:h=h.next=n}else c=h=n;r={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=n:e.next=n,r.lastBaseUpdate=n}var Uc=!1;function eo(){if(Uc){var e=Vr;if(e!==null)throw e}}function no(e,n,r,o){Uc=!1;var c=e.updateQueue;ma=!1;var h=c.firstBaseUpdate,y=c.lastBaseUpdate,b=c.shared.pending;if(b!==null){c.shared.pending=null;var I=b,tt=I.next;I.next=null,y===null?h=tt:y.next=tt,y=I;var dt=e.alternate;dt!==null&&(dt=dt.updateQueue,b=dt.lastBaseUpdate,b!==y&&(b===null?dt.firstBaseUpdate=tt:b.next=tt,dt.lastBaseUpdate=I))}if(h!==null){var xt=c.baseState;y=0,dt=tt=I=null,b=h;do{var rt=b.lane&-536870913,st=rt!==b.lane;if(st?(be&rt)===rt:(o&rt)===rt){rt!==0&&rt===Gr&&(Uc=!0),dt!==null&&(dt=dt.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var se=e,ie=b;rt=n;var ze=r;switch(ie.tag){case 1:if(se=ie.payload,typeof se=="function"){xt=se.call(ze,xt,rt);break t}xt=se;break t;case 3:se.flags=se.flags&-65537|128;case 0:if(se=ie.payload,rt=typeof se=="function"?se.call(ze,xt,rt):se,rt==null)break t;xt=g({},xt,rt);break t;case 2:ma=!0}}rt=b.callback,rt!==null&&(e.flags|=64,st&&(e.flags|=8192),st=c.callbacks,st===null?c.callbacks=[rt]:st.push(rt))}else st={lane:rt,tag:b.tag,payload:b.payload,callback:b.callback,next:null},dt===null?(tt=dt=st,I=xt):dt=dt.next=st,y|=rt;if(b=b.next,b===null){if(b=c.shared.pending,b===null)break;st=b,b=st.next,st.next=null,c.lastBaseUpdate=st,c.shared.pending=null}}while(!0);dt===null&&(I=xt),c.baseState=I,c.firstBaseUpdate=tt,c.lastBaseUpdate=dt,h===null&&(c.shared.lanes=0),ba|=y,e.lanes=y,e.memoizedState=xt}}function Gp(e,n){if(typeof e!="function")throw Error(a(191,e));e.call(n)}function Vp(e,n){var r=e.callbacks;if(r!==null)for(e.callbacks=null,e=0;e<r.length;e++)Gp(r[e],n)}var kr=J(null),yl=J(0);function kp(e,n){e=Ki,Tt(yl,e),Tt(kr,n),Ki=e|n.baseLanes}function Lc(){Tt(yl,Ki),Tt(kr,kr.current)}function Nc(){Ki=yl.current,Mt(kr),Mt(yl)}var va=0,ve=null,Ie=null,ln=null,Ml=!1,Xr=!1,or=!1,El=0,io=0,Wr=null,Mx=0;function an(){throw Error(a(321))}function Oc(e,n){if(n===null)return!1;for(var r=0;r<n.length&&r<e.length;r++)if(!qn(e[r],n[r]))return!1;return!0}function Pc(e,n,r,o,c,h){return va=h,ve=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,B.H=e===null||e.memoizedState===null?Am:Rm,or=!1,h=r(o,c),or=!1,Xr&&(h=Wp(n,r,o,c)),Xp(e),h}function Xp(e){B.H=wl;var n=Ie!==null&&Ie.next!==null;if(va=0,ln=Ie=ve=null,Ml=!1,io=0,Wr=null,n)throw Error(a(300));e===null||_n||(e=e.dependencies,e!==null&&gl(e)&&(_n=!0))}function Wp(e,n,r,o){ve=e;var c=0;do{if(Xr&&(Wr=null),io=0,Xr=!1,25<=c)throw Error(a(301));if(c+=1,ln=Ie=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}B.H=wx,h=n(r,o)}while(Xr);return h}function Ex(){var e=B.H,n=e.useState()[0];return n=typeof n.then=="function"?ao(n):n,e=e.useState()[0],(Ie!==null?Ie.memoizedState:null)!==e&&(ve.flags|=1024),n}function Ic(){var e=El!==0;return El=0,e}function Bc(e,n,r){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r}function zc(e){if(Ml){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Ml=!1}va=0,ln=Ie=ve=null,Xr=!1,io=El=0,Wr=null}function Hn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?ve.memoizedState=ln=e:ln=ln.next=e,ln}function un(){if(Ie===null){var e=ve.alternate;e=e!==null?e.memoizedState:null}else e=Ie.next;var n=ln===null?ve.memoizedState:ln.next;if(n!==null)ln=n,Ie=e;else{if(e===null)throw ve.alternate===null?Error(a(467)):Error(a(310));Ie=e,e={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},ln===null?ve.memoizedState=ln=e:ln=ln.next=e}return ln}function Fc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ao(e){var n=io;return io+=1,Wr===null&&(Wr=[]),e=zp(Wr,e,n),n=ve,(ln===null?n.memoizedState:ln.next)===null&&(n=n.alternate,B.H=n===null||n.memoizedState===null?Am:Rm),e}function Tl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ao(e);if(e.$$typeof===L)return Cn(e)}throw Error(a(438,String(e)))}function Hc(e){var n=null,r=ve.updateQueue;if(r!==null&&(n=r.memoCache),n==null){var o=ve.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),r===null&&(r=Fc(),ve.updateQueue=r),r.memoCache=n,r=n.data[n.index],r===void 0)for(r=n.data[n.index]=Array(e),o=0;o<e;o++)r[o]=A;return n.index++,r}function Xi(e,n){return typeof n=="function"?n(e):n}function bl(e){var n=un();return Gc(n,Ie,e)}function Gc(e,n,r){var o=e.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=r;var c=e.baseQueue,h=o.pending;if(h!==null){if(c!==null){var y=c.next;c.next=h.next,h.next=y}n.baseQueue=c=h,o.pending=null}if(h=e.baseState,c===null)e.memoizedState=h;else{n=c.next;var b=y=null,I=null,tt=n,dt=!1;do{var xt=tt.lane&-536870913;if(xt!==tt.lane?(be&xt)===xt:(va&xt)===xt){var rt=tt.revertLane;if(rt===0)I!==null&&(I=I.next={lane:0,revertLane:0,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null}),xt===Gr&&(dt=!0);else if((va&rt)===rt){tt=tt.next,rt===Gr&&(dt=!0);continue}else xt={lane:0,revertLane:tt.revertLane,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},I===null?(b=I=xt,y=h):I=I.next=xt,ve.lanes|=rt,ba|=rt;xt=tt.action,or&&r(h,xt),h=tt.hasEagerState?tt.eagerState:r(h,xt)}else rt={lane:xt,revertLane:tt.revertLane,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},I===null?(b=I=rt,y=h):I=I.next=rt,ve.lanes|=xt,ba|=xt;tt=tt.next}while(tt!==null&&tt!==n);if(I===null?y=h:I.next=b,!qn(h,e.memoizedState)&&(_n=!0,dt&&(r=Vr,r!==null)))throw r;e.memoizedState=h,e.baseState=y,e.baseQueue=I,o.lastRenderedState=h}return c===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Vc(e){var n=un(),r=n.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=e;var o=r.dispatch,c=r.pending,h=n.memoizedState;if(c!==null){r.pending=null;var y=c=c.next;do h=e(h,y.action),y=y.next;while(y!==c);qn(h,n.memoizedState)||(_n=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),r.lastRenderedState=h}return[h,o]}function qp(e,n,r){var o=ve,c=un(),h=De;if(h){if(r===void 0)throw Error(a(407));r=r()}else r=n();var y=!qn((Ie||c).memoizedState,r);y&&(c.memoizedState=r,_n=!0),c=c.queue;var b=Zp.bind(null,o,c,e);if(ro(2048,8,b,[e]),c.getSnapshot!==n||y||ln!==null&&ln.memoizedState.tag&1){if(o.flags|=2048,qr(9,Al(),jp.bind(null,o,c,r,n),null),ke===null)throw Error(a(349));h||(va&124)!==0||Yp(o,n,r)}return r}function Yp(e,n,r){e.flags|=16384,e={getSnapshot:n,value:r},n=ve.updateQueue,n===null?(n=Fc(),ve.updateQueue=n,n.stores=[e]):(r=n.stores,r===null?n.stores=[e]:r.push(e))}function jp(e,n,r,o){n.value=r,n.getSnapshot=o,Kp(n)&&Qp(e)}function Zp(e,n,r){return r(function(){Kp(n)&&Qp(e)})}function Kp(e){var n=e.getSnapshot;e=e.value;try{var r=n();return!qn(e,r)}catch{return!0}}function Qp(e){var n=Br(e,2);n!==null&&Jn(n,e,2)}function kc(e){var n=Hn();if(typeof e=="function"){var r=e;if(e=r(),or){ut(!0);try{r()}finally{ut(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:e},n}function Jp(e,n,r,o){return e.baseState=r,Gc(e,Ie,typeof o=="function"?o:Xi)}function Tx(e,n,r,o,c){if(Cl(e))throw Error(a(485));if(e=n.action,e!==null){var h={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){h.listeners.push(y)}};B.T!==null?r(!0):h.isTransition=!1,o(h),r=n.pending,r===null?(h.next=n.pending=h,$p(n,h)):(h.next=r.next,n.pending=r.next=h)}}function $p(e,n){var r=n.action,o=n.payload,c=e.state;if(n.isTransition){var h=B.T,y={};B.T=y;try{var b=r(c,o),I=B.S;I!==null&&I(y,b),tm(e,n,b)}catch(tt){Xc(e,n,tt)}finally{B.T=h}}else try{h=r(c,o),tm(e,n,h)}catch(tt){Xc(e,n,tt)}}function tm(e,n,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(o){em(e,n,o)},function(o){return Xc(e,n,o)}):em(e,n,r)}function em(e,n,r){n.status="fulfilled",n.value=r,nm(n),e.state=r,n=e.pending,n!==null&&(r=n.next,r===n?e.pending=null:(r=r.next,n.next=r,$p(e,r)))}function Xc(e,n,r){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=r,nm(n),n=n.next;while(n!==o)}e.action=null}function nm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function im(e,n){return n}function am(e,n){if(De){var r=ke.formState;if(r!==null){t:{var o=ve;if(De){if(tn){e:{for(var c=tn,h=Mi;c.nodeType!==8;){if(!h){c=null;break e}if(c=di(c.nextSibling),c===null){c=null;break e}}h=c.data,c=h==="F!"||h==="F"?c:null}if(c){tn=di(c.nextSibling),o=c.data==="F!";break t}}ir(o)}o=!1}o&&(n=r[0])}}return r=Hn(),r.memoizedState=r.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:im,lastRenderedState:n},r.queue=o,r=Em.bind(null,ve,o),o.dispatch=r,o=kc(!1),h=Zc.bind(null,ve,!1,o.queue),o=Hn(),c={state:n,dispatch:null,action:e,pending:null},o.queue=c,r=Tx.bind(null,ve,c,h,r),c.dispatch=r,o.memoizedState=e,[n,r,!1]}function rm(e){var n=un();return sm(n,Ie,e)}function sm(e,n,r){if(n=Gc(e,n,im)[0],e=bl(Xi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=ao(n)}catch(y){throw y===Js?xl:y}else o=n;n=un();var c=n.queue,h=c.dispatch;return r!==n.memoizedState&&(ve.flags|=2048,qr(9,Al(),bx.bind(null,c,r),null)),[o,h,e]}function bx(e,n){e.action=n}function om(e){var n=un(),r=Ie;if(r!==null)return sm(n,r,e);un(),n=n.memoizedState,r=un();var o=r.queue.dispatch;return r.memoizedState=e,[n,o,!1]}function qr(e,n,r,o){return e={tag:e,create:r,deps:o,inst:n,next:null},n=ve.updateQueue,n===null&&(n=Fc(),ve.updateQueue=n),r=n.lastEffect,r===null?n.lastEffect=e.next=e:(o=r.next,r.next=e,e.next=o,n.lastEffect=e),e}function Al(){return{destroy:void 0,resource:void 0}}function lm(){return un().memoizedState}function Rl(e,n,r,o){var c=Hn();o=o===void 0?null:o,ve.flags|=e,c.memoizedState=qr(1|n,Al(),r,o)}function ro(e,n,r,o){var c=un();o=o===void 0?null:o;var h=c.memoizedState.inst;Ie!==null&&o!==null&&Oc(o,Ie.memoizedState.deps)?c.memoizedState=qr(n,h,r,o):(ve.flags|=e,c.memoizedState=qr(1|n,h,r,o))}function um(e,n){Rl(8390656,8,e,n)}function cm(e,n){ro(2048,8,e,n)}function fm(e,n){return ro(4,2,e,n)}function hm(e,n){return ro(4,4,e,n)}function dm(e,n){if(typeof n=="function"){e=e();var r=n(e);return function(){typeof r=="function"?r():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function pm(e,n,r){r=r!=null?r.concat([e]):null,ro(4,4,dm.bind(null,n,e),r)}function Wc(){}function mm(e,n){var r=un();n=n===void 0?null:n;var o=r.memoizedState;return n!==null&&Oc(n,o[1])?o[0]:(r.memoizedState=[e,n],e)}function gm(e,n){var r=un();n=n===void 0?null:n;var o=r.memoizedState;if(n!==null&&Oc(n,o[1]))return o[0];if(o=e(),or){ut(!0);try{e()}finally{ut(!1)}}return r.memoizedState=[o,n],o}function qc(e,n,r){return r===void 0||(va&1073741824)!==0?e.memoizedState=n:(e.memoizedState=r,e=xg(),ve.lanes|=e,ba|=e,r)}function _m(e,n,r,o){return qn(r,n)?r:kr.current!==null?(e=qc(e,r,o),qn(e,n)||(_n=!0),e):(va&42)===0?(_n=!0,e.memoizedState=r):(e=xg(),ve.lanes|=e,ba|=e,n)}function vm(e,n,r,o,c){var h=Z.p;Z.p=h!==0&&8>h?h:8;var y=B.T,b={};B.T=b,Zc(e,!1,n,r);try{var I=c(),tt=B.S;if(tt!==null&&tt(b,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var dt=yx(I,o);so(e,n,dt,Qn(e))}else so(e,n,o,Qn(e))}catch(xt){so(e,n,{then:function(){},status:"rejected",reason:xt},Qn())}finally{Z.p=h,B.T=y}}function Ax(){}function Yc(e,n,r,o){if(e.tag!==5)throw Error(a(476));var c=xm(e).queue;vm(e,c,n,q,r===null?Ax:function(){return Sm(e),r(o)})}function xm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:q},next:null};var r={};return n.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:r},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Sm(e){var n=xm(e).next.queue;so(e,n,{},Qn())}function jc(){return Cn(bo)}function ym(){return un().memoizedState}function Mm(){return un().memoizedState}function Rx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var r=Qn();e=ga(r);var o=_a(n,e,r);o!==null&&(Jn(o,n,r),to(o,n,r)),n={cache:Tc()},e.payload=n;return}n=n.return}}function Cx(e,n,r){var o=Qn();r={lane:o,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null},Cl(e)?Tm(n,r):(r=pc(e,n,r,o),r!==null&&(Jn(r,e,o),bm(r,n,o)))}function Em(e,n,r){var o=Qn();so(e,n,r,o)}function so(e,n,r,o){var c={lane:o,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null};if(Cl(e))Tm(n,c);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var y=n.lastRenderedState,b=h(y,r);if(c.hasEagerState=!0,c.eagerState=b,qn(b,y))return fl(e,n,c,0),ke===null&&cl(),!1}catch{}finally{}if(r=pc(e,n,c,o),r!==null)return Jn(r,e,o),bm(r,n,o),!0}return!1}function Zc(e,n,r,o){if(o={lane:2,revertLane:Cf(),action:o,hasEagerState:!1,eagerState:null,next:null},Cl(e)){if(n)throw Error(a(479))}else n=pc(e,r,o,2),n!==null&&Jn(n,e,2)}function Cl(e){var n=e.alternate;return e===ve||n!==null&&n===ve}function Tm(e,n){Xr=Ml=!0;var r=e.pending;r===null?n.next=n:(n.next=r.next,r.next=n),e.pending=n}function bm(e,n,r){if((r&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,r|=o,n.lanes=r,Ft(e,r)}}var wl={readContext:Cn,use:Tl,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useLayoutEffect:an,useInsertionEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useSyncExternalStore:an,useId:an,useHostTransitionStatus:an,useFormState:an,useActionState:an,useOptimistic:an,useMemoCache:an,useCacheRefresh:an},Am={readContext:Cn,use:Tl,useCallback:function(e,n){return Hn().memoizedState=[e,n===void 0?null:n],e},useContext:Cn,useEffect:um,useImperativeHandle:function(e,n,r){r=r!=null?r.concat([e]):null,Rl(4194308,4,dm.bind(null,n,e),r)},useLayoutEffect:function(e,n){return Rl(4194308,4,e,n)},useInsertionEffect:function(e,n){Rl(4,2,e,n)},useMemo:function(e,n){var r=Hn();n=n===void 0?null:n;var o=e();if(or){ut(!0);try{e()}finally{ut(!1)}}return r.memoizedState=[o,n],o},useReducer:function(e,n,r){var o=Hn();if(r!==void 0){var c=r(n);if(or){ut(!0);try{r(n)}finally{ut(!1)}}}else c=n;return o.memoizedState=o.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},o.queue=e,e=e.dispatch=Cx.bind(null,ve,e),[o.memoizedState,e]},useRef:function(e){var n=Hn();return e={current:e},n.memoizedState=e},useState:function(e){e=kc(e);var n=e.queue,r=Em.bind(null,ve,n);return n.dispatch=r,[e.memoizedState,r]},useDebugValue:Wc,useDeferredValue:function(e,n){var r=Hn();return qc(r,e,n)},useTransition:function(){var e=kc(!1);return e=vm.bind(null,ve,e.queue,!0,!1),Hn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,r){var o=ve,c=Hn();if(De){if(r===void 0)throw Error(a(407));r=r()}else{if(r=n(),ke===null)throw Error(a(349));(be&124)!==0||Yp(o,n,r)}c.memoizedState=r;var h={value:r,getSnapshot:n};return c.queue=h,um(Zp.bind(null,o,h,e),[e]),o.flags|=2048,qr(9,Al(),jp.bind(null,o,h,r,n),null),r},useId:function(){var e=Hn(),n=ke.identifierPrefix;if(De){var r=Gi,o=Hi;r=(o&~(1<<32-Ht(o)-1)).toString(32)+r,n="«"+n+"R"+r,r=El++,0<r&&(n+="H"+r.toString(32)),n+="»"}else r=Mx++,n="«"+n+"r"+r.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:jc,useFormState:am,useActionState:am,useOptimistic:function(e){var n=Hn();n.memoizedState=n.baseState=e;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=r,n=Zc.bind(null,ve,!0,r),r.dispatch=n,[e,n]},useMemoCache:Hc,useCacheRefresh:function(){return Hn().memoizedState=Rx.bind(null,ve)}},Rm={readContext:Cn,use:Tl,useCallback:mm,useContext:Cn,useEffect:cm,useImperativeHandle:pm,useInsertionEffect:fm,useLayoutEffect:hm,useMemo:gm,useReducer:bl,useRef:lm,useState:function(){return bl(Xi)},useDebugValue:Wc,useDeferredValue:function(e,n){var r=un();return _m(r,Ie.memoizedState,e,n)},useTransition:function(){var e=bl(Xi)[0],n=un().memoizedState;return[typeof e=="boolean"?e:ao(e),n]},useSyncExternalStore:qp,useId:ym,useHostTransitionStatus:jc,useFormState:rm,useActionState:rm,useOptimistic:function(e,n){var r=un();return Jp(r,Ie,e,n)},useMemoCache:Hc,useCacheRefresh:Mm},wx={readContext:Cn,use:Tl,useCallback:mm,useContext:Cn,useEffect:cm,useImperativeHandle:pm,useInsertionEffect:fm,useLayoutEffect:hm,useMemo:gm,useReducer:Vc,useRef:lm,useState:function(){return Vc(Xi)},useDebugValue:Wc,useDeferredValue:function(e,n){var r=un();return Ie===null?qc(r,e,n):_m(r,Ie.memoizedState,e,n)},useTransition:function(){var e=Vc(Xi)[0],n=un().memoizedState;return[typeof e=="boolean"?e:ao(e),n]},useSyncExternalStore:qp,useId:ym,useHostTransitionStatus:jc,useFormState:om,useActionState:om,useOptimistic:function(e,n){var r=un();return Ie!==null?Jp(r,Ie,e,n):(r.baseState=e,[e,r.queue.dispatch])},useMemoCache:Hc,useCacheRefresh:Mm},Yr=null,oo=0;function Dl(e){var n=oo;return oo+=1,Yr===null&&(Yr=[]),zp(Yr,e,n)}function lo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Ul(e,n){throw n.$$typeof===_?Error(a(525)):(e=Object.prototype.toString.call(n),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Cm(e){var n=e._init;return n(e._payload)}function wm(e){function n(j,W){if(e){var Q=j.deletions;Q===null?(j.deletions=[W],j.flags|=16):Q.push(W)}}function r(j,W){if(!e)return null;for(;W!==null;)n(j,W),W=W.sibling;return null}function o(j){for(var W=new Map;j!==null;)j.key!==null?W.set(j.key,j):W.set(j.index,j),j=j.sibling;return W}function c(j,W){return j=Fi(j,W),j.index=0,j.sibling=null,j}function h(j,W,Q){return j.index=Q,e?(Q=j.alternate,Q!==null?(Q=Q.index,Q<W?(j.flags|=67108866,W):Q):(j.flags|=67108866,W)):(j.flags|=1048576,W)}function y(j){return e&&j.alternate===null&&(j.flags|=67108866),j}function b(j,W,Q,pt){return W===null||W.tag!==6?(W=gc(Q,j.mode,pt),W.return=j,W):(W=c(W,Q),W.return=j,W)}function I(j,W,Q,pt){var Xt=Q.type;return Xt===E?dt(j,W,Q.props.children,pt,Q.key):W!==null&&(W.elementType===Xt||typeof Xt=="object"&&Xt!==null&&Xt.$$typeof===X&&Cm(Xt)===W.type)?(W=c(W,Q.props),lo(W,Q),W.return=j,W):(W=dl(Q.type,Q.key,Q.props,null,j.mode,pt),lo(W,Q),W.return=j,W)}function tt(j,W,Q,pt){return W===null||W.tag!==4||W.stateNode.containerInfo!==Q.containerInfo||W.stateNode.implementation!==Q.implementation?(W=_c(Q,j.mode,pt),W.return=j,W):(W=c(W,Q.children||[]),W.return=j,W)}function dt(j,W,Q,pt,Xt){return W===null||W.tag!==7?(W=$a(Q,j.mode,pt,Xt),W.return=j,W):(W=c(W,Q),W.return=j,W)}function xt(j,W,Q){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=gc(""+W,j.mode,Q),W.return=j,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case x:return Q=dl(W.type,W.key,W.props,null,j.mode,Q),lo(Q,W),Q.return=j,Q;case M:return W=_c(W,j.mode,Q),W.return=j,W;case X:var pt=W._init;return W=pt(W._payload),xt(j,W,Q)}if(ft(W)||et(W))return W=$a(W,j.mode,Q,null),W.return=j,W;if(typeof W.then=="function")return xt(j,Dl(W),Q);if(W.$$typeof===L)return xt(j,_l(j,W),Q);Ul(j,W)}return null}function rt(j,W,Q,pt){var Xt=W!==null?W.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Xt!==null?null:b(j,W,""+Q,pt);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case x:return Q.key===Xt?I(j,W,Q,pt):null;case M:return Q.key===Xt?tt(j,W,Q,pt):null;case X:return Xt=Q._init,Q=Xt(Q._payload),rt(j,W,Q,pt)}if(ft(Q)||et(Q))return Xt!==null?null:dt(j,W,Q,pt,null);if(typeof Q.then=="function")return rt(j,W,Dl(Q),pt);if(Q.$$typeof===L)return rt(j,W,_l(j,Q),pt);Ul(j,Q)}return null}function st(j,W,Q,pt,Xt){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return j=j.get(Q)||null,b(W,j,""+pt,Xt);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case x:return j=j.get(pt.key===null?Q:pt.key)||null,I(W,j,pt,Xt);case M:return j=j.get(pt.key===null?Q:pt.key)||null,tt(W,j,pt,Xt);case X:var xe=pt._init;return pt=xe(pt._payload),st(j,W,Q,pt,Xt)}if(ft(pt)||et(pt))return j=j.get(Q)||null,dt(W,j,pt,Xt,null);if(typeof pt.then=="function")return st(j,W,Q,Dl(pt),Xt);if(pt.$$typeof===L)return st(j,W,Q,_l(W,pt),Xt);Ul(W,pt)}return null}function se(j,W,Q,pt){for(var Xt=null,xe=null,Qt=W,re=W=0,xn=null;Qt!==null&&re<Q.length;re++){Qt.index>re?(xn=Qt,Qt=null):xn=Qt.sibling;var Re=rt(j,Qt,Q[re],pt);if(Re===null){Qt===null&&(Qt=xn);break}e&&Qt&&Re.alternate===null&&n(j,Qt),W=h(Re,W,re),xe===null?Xt=Re:xe.sibling=Re,xe=Re,Qt=xn}if(re===Q.length)return r(j,Qt),De&&er(j,re),Xt;if(Qt===null){for(;re<Q.length;re++)Qt=xt(j,Q[re],pt),Qt!==null&&(W=h(Qt,W,re),xe===null?Xt=Qt:xe.sibling=Qt,xe=Qt);return De&&er(j,re),Xt}for(Qt=o(Qt);re<Q.length;re++)xn=st(Qt,j,re,Q[re],pt),xn!==null&&(e&&xn.alternate!==null&&Qt.delete(xn.key===null?re:xn.key),W=h(xn,W,re),xe===null?Xt=xn:xe.sibling=xn,xe=xn);return e&&Qt.forEach(function(Oa){return n(j,Oa)}),De&&er(j,re),Xt}function ie(j,W,Q,pt){if(Q==null)throw Error(a(151));for(var Xt=null,xe=null,Qt=W,re=W=0,xn=null,Re=Q.next();Qt!==null&&!Re.done;re++,Re=Q.next()){Qt.index>re?(xn=Qt,Qt=null):xn=Qt.sibling;var Oa=rt(j,Qt,Re.value,pt);if(Oa===null){Qt===null&&(Qt=xn);break}e&&Qt&&Oa.alternate===null&&n(j,Qt),W=h(Oa,W,re),xe===null?Xt=Oa:xe.sibling=Oa,xe=Oa,Qt=xn}if(Re.done)return r(j,Qt),De&&er(j,re),Xt;if(Qt===null){for(;!Re.done;re++,Re=Q.next())Re=xt(j,Re.value,pt),Re!==null&&(W=h(Re,W,re),xe===null?Xt=Re:xe.sibling=Re,xe=Re);return De&&er(j,re),Xt}for(Qt=o(Qt);!Re.done;re++,Re=Q.next())Re=st(Qt,j,re,Re.value,pt),Re!==null&&(e&&Re.alternate!==null&&Qt.delete(Re.key===null?re:Re.key),W=h(Re,W,re),xe===null?Xt=Re:xe.sibling=Re,xe=Re);return e&&Qt.forEach(function(DS){return n(j,DS)}),De&&er(j,re),Xt}function ze(j,W,Q,pt){if(typeof Q=="object"&&Q!==null&&Q.type===E&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case x:t:{for(var Xt=Q.key;W!==null;){if(W.key===Xt){if(Xt=Q.type,Xt===E){if(W.tag===7){r(j,W.sibling),pt=c(W,Q.props.children),pt.return=j,j=pt;break t}}else if(W.elementType===Xt||typeof Xt=="object"&&Xt!==null&&Xt.$$typeof===X&&Cm(Xt)===W.type){r(j,W.sibling),pt=c(W,Q.props),lo(pt,Q),pt.return=j,j=pt;break t}r(j,W);break}else n(j,W);W=W.sibling}Q.type===E?(pt=$a(Q.props.children,j.mode,pt,Q.key),pt.return=j,j=pt):(pt=dl(Q.type,Q.key,Q.props,null,j.mode,pt),lo(pt,Q),pt.return=j,j=pt)}return y(j);case M:t:{for(Xt=Q.key;W!==null;){if(W.key===Xt)if(W.tag===4&&W.stateNode.containerInfo===Q.containerInfo&&W.stateNode.implementation===Q.implementation){r(j,W.sibling),pt=c(W,Q.children||[]),pt.return=j,j=pt;break t}else{r(j,W);break}else n(j,W);W=W.sibling}pt=_c(Q,j.mode,pt),pt.return=j,j=pt}return y(j);case X:return Xt=Q._init,Q=Xt(Q._payload),ze(j,W,Q,pt)}if(ft(Q))return se(j,W,Q,pt);if(et(Q)){if(Xt=et(Q),typeof Xt!="function")throw Error(a(150));return Q=Xt.call(Q),ie(j,W,Q,pt)}if(typeof Q.then=="function")return ze(j,W,Dl(Q),pt);if(Q.$$typeof===L)return ze(j,W,_l(j,Q),pt);Ul(j,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,W!==null&&W.tag===6?(r(j,W.sibling),pt=c(W,Q),pt.return=j,j=pt):(r(j,W),pt=gc(Q,j.mode,pt),pt.return=j,j=pt),y(j)):r(j,W)}return function(j,W,Q,pt){try{oo=0;var Xt=ze(j,W,Q,pt);return Yr=null,Xt}catch(Qt){if(Qt===Js||Qt===xl)throw Qt;var xe=Yn(29,Qt,null,j.mode);return xe.lanes=pt,xe.return=j,xe}finally{}}}var jr=wm(!0),Dm=wm(!1),ri=J(null),Ei=null;function xa(e){var n=e.alternate;Tt(dn,dn.current&1),Tt(ri,e),Ei===null&&(n===null||kr.current!==null||n.memoizedState!==null)&&(Ei=e)}function Um(e){if(e.tag===22){if(Tt(dn,dn.current),Tt(ri,e),Ei===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(Ei=e)}}else Sa()}function Sa(){Tt(dn,dn.current),Tt(ri,ri.current)}function Wi(e){Mt(ri),Ei===e&&(Ei=null),Mt(dn)}var dn=J(0);function Ll(e){for(var n=e;n!==null;){if(n.tag===13){var r=n.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||Hf(r)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Kc(e,n,r,o){n=e.memoizedState,r=r(o,n),r=r==null?n:g({},n,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Qc={enqueueSetState:function(e,n,r){e=e._reactInternals;var o=Qn(),c=ga(o);c.payload=n,r!=null&&(c.callback=r),n=_a(e,c,o),n!==null&&(Jn(n,e,o),to(n,e,o))},enqueueReplaceState:function(e,n,r){e=e._reactInternals;var o=Qn(),c=ga(o);c.tag=1,c.payload=n,r!=null&&(c.callback=r),n=_a(e,c,o),n!==null&&(Jn(n,e,o),to(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var r=Qn(),o=ga(r);o.tag=2,n!=null&&(o.callback=n),n=_a(e,o,r),n!==null&&(Jn(n,e,r),to(n,e,r))}};function Lm(e,n,r,o,c,h,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,h,y):n.prototype&&n.prototype.isPureReactComponent?!Xs(r,o)||!Xs(c,h):!0}function Nm(e,n,r,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(r,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(r,o),n.state!==e&&Qc.enqueueReplaceState(n,n.state,null)}function lr(e,n){var r=n;if("ref"in n){r={};for(var o in n)o!=="ref"&&(r[o]=n[o])}if(e=e.defaultProps){r===n&&(r=g({},r));for(var c in e)r[c]===void 0&&(r[c]=e[c])}return r}var Nl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Om(e){Nl(e)}function Pm(e){console.error(e)}function Im(e){Nl(e)}function Ol(e,n){try{var r=e.onUncaughtError;r(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Bm(e,n,r){try{var o=e.onCaughtError;o(r.value,{componentStack:r.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Jc(e,n,r){return r=ga(r),r.tag=3,r.payload={element:null},r.callback=function(){Ol(e,n)},r}function zm(e){return e=ga(e),e.tag=3,e}function Fm(e,n,r,o){var c=r.type.getDerivedStateFromError;if(typeof c=="function"){var h=o.value;e.payload=function(){return c(h)},e.callback=function(){Bm(n,r,o)}}var y=r.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(e.callback=function(){Bm(n,r,o),typeof c!="function"&&(Aa===null?Aa=new Set([this]):Aa.add(this));var b=o.stack;this.componentDidCatch(o.value,{componentStack:b!==null?b:""})})}function Dx(e,n,r,o,c){if(r.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=r.alternate,n!==null&&Zs(n,r,c,!0),r=ri.current,r!==null){switch(r.tag){case 13:return Ei===null?Ef():r.alternate===null&&en===0&&(en=3),r.flags&=-257,r.flags|=65536,r.lanes=c,o===Rc?r.flags|=16384:(n=r.updateQueue,n===null?r.updateQueue=new Set([o]):n.add(o),bf(e,o,c)),!1;case 22:return r.flags|=65536,o===Rc?r.flags|=16384:(n=r.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},r.updateQueue=n):(r=n.retryQueue,r===null?n.retryQueue=new Set([o]):r.add(o)),bf(e,o,c)),!1}throw Error(a(435,r.tag))}return bf(e,o,c),Ef(),!1}if(De)return n=ri.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==Sc&&(e=Error(a(422),{cause:o}),js(ei(e,r)))):(o!==Sc&&(n=Error(a(423),{cause:o}),js(ei(n,r))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,o=ei(o,r),c=Jc(e.stateNode,o,c),Dc(e,c),en!==4&&(en=2)),!1;var h=Error(a(520),{cause:o});if(h=ei(h,r),go===null?go=[h]:go.push(h),en!==4&&(en=2),n===null)return!0;o=ei(o,r),r=n;do{switch(r.tag){case 3:return r.flags|=65536,e=c&-c,r.lanes|=e,e=Jc(r.stateNode,o,e),Dc(r,e),!1;case 1:if(n=r.type,h=r.stateNode,(r.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Aa===null||!Aa.has(h))))return r.flags|=65536,c&=-c,r.lanes|=c,c=zm(c),Fm(c,e,r,o),Dc(r,c),!1}r=r.return}while(r!==null);return!1}var Hm=Error(a(461)),_n=!1;function En(e,n,r,o){n.child=e===null?Dm(n,null,r,o):jr(n,e.child,r,o)}function Gm(e,n,r,o,c){r=r.render;var h=n.ref;if("ref"in o){var y={};for(var b in o)b!=="ref"&&(y[b]=o[b])}else y=o;return rr(n),o=Pc(e,n,r,y,h,c),b=Ic(),e!==null&&!_n?(Bc(e,n,c),qi(e,n,c)):(De&&b&&vc(n),n.flags|=1,En(e,n,o,c),n.child)}function Vm(e,n,r,o,c){if(e===null){var h=r.type;return typeof h=="function"&&!mc(h)&&h.defaultProps===void 0&&r.compare===null?(n.tag=15,n.type=h,km(e,n,h,o,c)):(e=dl(r.type,null,o,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(h=e.child,!of(e,c)){var y=h.memoizedProps;if(r=r.compare,r=r!==null?r:Xs,r(y,o)&&e.ref===n.ref)return qi(e,n,c)}return n.flags|=1,e=Fi(h,o),e.ref=n.ref,e.return=n,n.child=e}function km(e,n,r,o,c){if(e!==null){var h=e.memoizedProps;if(Xs(h,o)&&e.ref===n.ref)if(_n=!1,n.pendingProps=o=h,of(e,c))(e.flags&131072)!==0&&(_n=!0);else return n.lanes=e.lanes,qi(e,n,c)}return $c(e,n,r,o,c)}function Xm(e,n,r){var o=n.pendingProps,c=o.children,h=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=h!==null?h.baseLanes|r:r,e!==null){for(c=n.child=e.child,h=0;c!==null;)h=h|c.lanes|c.childLanes,c=c.sibling;n.childLanes=h&~o}else n.childLanes=0,n.child=null;return Wm(e,n,o,r)}if((r&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&vl(n,h!==null?h.cachePool:null),h!==null?kp(n,h):Lc(),Um(n);else return n.lanes=n.childLanes=536870912,Wm(e,n,h!==null?h.baseLanes|r:r,r)}else h!==null?(vl(n,h.cachePool),kp(n,h),Sa(),n.memoizedState=null):(e!==null&&vl(n,null),Lc(),Sa());return En(e,n,c,r),n.child}function Wm(e,n,r,o){var c=Ac();return c=c===null?null:{parent:hn._currentValue,pool:c},n.memoizedState={baseLanes:r,cachePool:c},e!==null&&vl(n,null),Lc(),Um(n),e!==null&&Zs(e,n,o,!0),null}function Pl(e,n){var r=n.ref;if(r===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(a(284));(e===null||e.ref!==r)&&(n.flags|=4194816)}}function $c(e,n,r,o,c){return rr(n),r=Pc(e,n,r,o,void 0,c),o=Ic(),e!==null&&!_n?(Bc(e,n,c),qi(e,n,c)):(De&&o&&vc(n),n.flags|=1,En(e,n,r,c),n.child)}function qm(e,n,r,o,c,h){return rr(n),n.updateQueue=null,r=Wp(n,o,r,c),Xp(e),o=Ic(),e!==null&&!_n?(Bc(e,n,h),qi(e,n,h)):(De&&o&&vc(n),n.flags|=1,En(e,n,r,h),n.child)}function Ym(e,n,r,o,c){if(rr(n),n.stateNode===null){var h=zr,y=r.contextType;typeof y=="object"&&y!==null&&(h=Cn(y)),h=new r(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=Qc,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},Cc(n),y=r.contextType,h.context=typeof y=="object"&&y!==null?Cn(y):zr,h.state=n.memoizedState,y=r.getDerivedStateFromProps,typeof y=="function"&&(Kc(n,r,y,o),h.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(y=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),y!==h.state&&Qc.enqueueReplaceState(h,h.state,null),no(n,o,h,c),eo(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){h=n.stateNode;var b=n.memoizedProps,I=lr(r,b);h.props=I;var tt=h.context,dt=r.contextType;y=zr,typeof dt=="object"&&dt!==null&&(y=Cn(dt));var xt=r.getDerivedStateFromProps;dt=typeof xt=="function"||typeof h.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,dt||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(b||tt!==y)&&Nm(n,h,o,y),ma=!1;var rt=n.memoizedState;h.state=rt,no(n,o,h,c),eo(),tt=n.memoizedState,b||rt!==tt||ma?(typeof xt=="function"&&(Kc(n,r,xt,o),tt=n.memoizedState),(I=ma||Lm(n,r,I,o,rt,tt,y))?(dt||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=tt),h.props=o,h.state=tt,h.context=y,o=I):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,wc(e,n),y=n.memoizedProps,dt=lr(r,y),h.props=dt,xt=n.pendingProps,rt=h.context,tt=r.contextType,I=zr,typeof tt=="object"&&tt!==null&&(I=Cn(tt)),b=r.getDerivedStateFromProps,(tt=typeof b=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(y!==xt||rt!==I)&&Nm(n,h,o,I),ma=!1,rt=n.memoizedState,h.state=rt,no(n,o,h,c),eo();var st=n.memoizedState;y!==xt||rt!==st||ma||e!==null&&e.dependencies!==null&&gl(e.dependencies)?(typeof b=="function"&&(Kc(n,r,b,o),st=n.memoizedState),(dt=ma||Lm(n,r,dt,o,rt,st,I)||e!==null&&e.dependencies!==null&&gl(e.dependencies))?(tt||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,st,I),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,st,I)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||y===e.memoizedProps&&rt===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&rt===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=st),h.props=o,h.state=st,h.context=I,o=dt):(typeof h.componentDidUpdate!="function"||y===e.memoizedProps&&rt===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&rt===e.memoizedState||(n.flags|=1024),o=!1)}return h=o,Pl(e,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,r=o&&typeof r.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,e!==null&&o?(n.child=jr(n,e.child,null,c),n.child=jr(n,null,r,c)):En(e,n,r,c),n.memoizedState=h.state,e=n.child):e=qi(e,n,c),e}function jm(e,n,r,o){return Ys(),n.flags|=256,En(e,n,r,o),n.child}var tf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ef(e){return{baseLanes:e,cachePool:Pp()}}function nf(e,n,r){return e=e!==null?e.childLanes&~r:0,n&&(e|=si),e}function Zm(e,n,r){var o=n.pendingProps,c=!1,h=(n.flags&128)!==0,y;if((y=h)||(y=e!==null&&e.memoizedState===null?!1:(dn.current&2)!==0),y&&(c=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,e===null){if(De){if(c?xa(n):Sa(),De){var b=tn,I;if(I=b){t:{for(I=b,b=Mi;I.nodeType!==8;){if(!b){b=null;break t}if(I=di(I.nextSibling),I===null){b=null;break t}}b=I}b!==null?(n.memoizedState={dehydrated:b,treeContext:tr!==null?{id:Hi,overflow:Gi}:null,retryLane:536870912,hydrationErrors:null},I=Yn(18,null,null,0),I.stateNode=b,I.return=n,n.child=I,Pn=n,tn=null,I=!0):I=!1}I||ir(n)}if(b=n.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return Hf(b)?n.lanes=32:n.lanes=536870912,null;Wi(n)}return b=o.children,o=o.fallback,c?(Sa(),c=n.mode,b=Il({mode:"hidden",children:b},c),o=$a(o,c,r,null),b.return=n,o.return=n,b.sibling=o,n.child=b,c=n.child,c.memoizedState=ef(r),c.childLanes=nf(e,y,r),n.memoizedState=tf,o):(xa(n),af(n,b))}if(I=e.memoizedState,I!==null&&(b=I.dehydrated,b!==null)){if(h)n.flags&256?(xa(n),n.flags&=-257,n=rf(e,n,r)):n.memoizedState!==null?(Sa(),n.child=e.child,n.flags|=128,n=null):(Sa(),c=o.fallback,b=n.mode,o=Il({mode:"visible",children:o.children},b),c=$a(c,b,r,null),c.flags|=2,o.return=n,c.return=n,o.sibling=c,n.child=o,jr(n,e.child,null,r),o=n.child,o.memoizedState=ef(r),o.childLanes=nf(e,y,r),n.memoizedState=tf,n=c);else if(xa(n),Hf(b)){if(y=b.nextSibling&&b.nextSibling.dataset,y)var tt=y.dgst;y=tt,o=Error(a(419)),o.stack="",o.digest=y,js({value:o,source:null,stack:null}),n=rf(e,n,r)}else if(_n||Zs(e,n,r,!1),y=(r&e.childLanes)!==0,_n||y){if(y=ke,y!==null&&(o=r&-r,o=(o&42)!==0?1:Kt(o),o=(o&(y.suspendedLanes|r))!==0?0:o,o!==0&&o!==I.retryLane))throw I.retryLane=o,Br(e,o),Jn(y,e,o),Hm;b.data==="$?"||Ef(),n=rf(e,n,r)}else b.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=I.treeContext,tn=di(b.nextSibling),Pn=n,De=!0,nr=null,Mi=!1,e!==null&&(ii[ai++]=Hi,ii[ai++]=Gi,ii[ai++]=tr,Hi=e.id,Gi=e.overflow,tr=n),n=af(n,o.children),n.flags|=4096);return n}return c?(Sa(),c=o.fallback,b=n.mode,I=e.child,tt=I.sibling,o=Fi(I,{mode:"hidden",children:o.children}),o.subtreeFlags=I.subtreeFlags&65011712,tt!==null?c=Fi(tt,c):(c=$a(c,b,r,null),c.flags|=2),c.return=n,o.return=n,o.sibling=c,n.child=o,o=c,c=n.child,b=e.child.memoizedState,b===null?b=ef(r):(I=b.cachePool,I!==null?(tt=hn._currentValue,I=I.parent!==tt?{parent:tt,pool:tt}:I):I=Pp(),b={baseLanes:b.baseLanes|r,cachePool:I}),c.memoizedState=b,c.childLanes=nf(e,y,r),n.memoizedState=tf,o):(xa(n),r=e.child,e=r.sibling,r=Fi(r,{mode:"visible",children:o.children}),r.return=n,r.sibling=null,e!==null&&(y=n.deletions,y===null?(n.deletions=[e],n.flags|=16):y.push(e)),n.child=r,n.memoizedState=null,r)}function af(e,n){return n=Il({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Il(e,n){return e=Yn(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function rf(e,n,r){return jr(n,e.child,null,r),e=af(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Km(e,n,r){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Mc(e.return,n,r)}function sf(e,n,r,o,c){var h=e.memoizedState;h===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:c}:(h.isBackwards=n,h.rendering=null,h.renderingStartTime=0,h.last=o,h.tail=r,h.tailMode=c)}function Qm(e,n,r){var o=n.pendingProps,c=o.revealOrder,h=o.tail;if(En(e,n,o.children,r),o=dn.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Km(e,r,n);else if(e.tag===19)Km(e,r,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(Tt(dn,o),c){case"forwards":for(r=n.child,c=null;r!==null;)e=r.alternate,e!==null&&Ll(e)===null&&(c=r),r=r.sibling;r=c,r===null?(c=n.child,n.child=null):(c=r.sibling,r.sibling=null),sf(n,!1,c,r,h);break;case"backwards":for(r=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&Ll(e)===null){n.child=c;break}e=c.sibling,c.sibling=r,r=c,c=e}sf(n,!0,r,null,h);break;case"together":sf(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function qi(e,n,r){if(e!==null&&(n.dependencies=e.dependencies),ba|=n.lanes,(r&n.childLanes)===0)if(e!==null){if(Zs(e,n,r,!1),(r&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(a(153));if(n.child!==null){for(e=n.child,r=Fi(e,e.pendingProps),n.child=r,r.return=n;e.sibling!==null;)e=e.sibling,r=r.sibling=Fi(e,e.pendingProps),r.return=n;r.sibling=null}return n.child}function of(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&gl(e)))}function Ux(e,n,r){switch(n.tag){case 3:Dt(n,n.stateNode.containerInfo),pa(n,hn,e.memoizedState.cache),Ys();break;case 27:case 5:qt(n);break;case 4:Dt(n,n.stateNode.containerInfo);break;case 10:pa(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(xa(n),n.flags|=128,null):(r&n.child.childLanes)!==0?Zm(e,n,r):(xa(n),e=qi(e,n,r),e!==null?e.sibling:null);xa(n);break;case 19:var c=(e.flags&128)!==0;if(o=(r&n.childLanes)!==0,o||(Zs(e,n,r,!1),o=(r&n.childLanes)!==0),c){if(o)return Qm(e,n,r);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Tt(dn,dn.current),o)break;return null;case 22:case 23:return n.lanes=0,Xm(e,n,r);case 24:pa(n,hn,e.memoizedState.cache)}return qi(e,n,r)}function Jm(e,n,r){if(e!==null)if(e.memoizedProps!==n.pendingProps)_n=!0;else{if(!of(e,r)&&(n.flags&128)===0)return _n=!1,Ux(e,n,r);_n=(e.flags&131072)!==0}else _n=!1,De&&(n.flags&1048576)!==0&&Cp(n,ml,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var o=n.elementType,c=o._init;if(o=c(o._payload),n.type=o,typeof o=="function")mc(o)?(e=lr(o,e),n.tag=1,n=Ym(null,n,o,e,r)):(n.tag=0,n=$c(null,n,o,e,r));else{if(o!=null){if(c=o.$$typeof,c===D){n.tag=11,n=Gm(null,n,o,e,r);break t}else if(c===V){n.tag=14,n=Vm(null,n,o,e,r);break t}}throw n=_t(o)||o,Error(a(306,n,""))}}return n;case 0:return $c(e,n,n.type,n.pendingProps,r);case 1:return o=n.type,c=lr(o,n.pendingProps),Ym(e,n,o,c,r);case 3:t:{if(Dt(n,n.stateNode.containerInfo),e===null)throw Error(a(387));o=n.pendingProps;var h=n.memoizedState;c=h.element,wc(e,n),no(n,o,null,r);var y=n.memoizedState;if(o=y.cache,pa(n,hn,o),o!==h.cache&&Ec(n,[hn],r,!0),eo(),o=y.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=jm(e,n,o,r);break t}else if(o!==c){c=ei(Error(a(424)),n),js(c),n=jm(e,n,o,r);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(tn=di(e.firstChild),Pn=n,De=!0,nr=null,Mi=!0,r=Dm(n,null,o,r),n.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling}else{if(Ys(),o===c){n=qi(e,n,r);break t}En(e,n,o,r)}n=n.child}return n;case 26:return Pl(e,n),e===null?(r=n_(n.type,null,n.pendingProps,null))?n.memoizedState=r:De||(r=n.type,e=n.pendingProps,o=Kl(nt.current).createElement(r),o[fn]=n,o[Je]=e,bn(o,r,e),on(o),n.stateNode=o):n.memoizedState=n_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return qt(n),e===null&&De&&(o=n.stateNode=$g(n.type,n.pendingProps,nt.current),Pn=n,Mi=!0,c=tn,wa(n.type)?(Gf=c,tn=di(o.firstChild)):tn=c),En(e,n,n.pendingProps.children,r),Pl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&De&&((c=o=tn)&&(o=rS(o,n.type,n.pendingProps,Mi),o!==null?(n.stateNode=o,Pn=n,tn=di(o.firstChild),Mi=!1,c=!0):c=!1),c||ir(n)),qt(n),c=n.type,h=n.pendingProps,y=e!==null?e.memoizedProps:null,o=h.children,Bf(c,h)?o=null:y!==null&&Bf(c,y)&&(n.flags|=32),n.memoizedState!==null&&(c=Pc(e,n,Ex,null,null,r),bo._currentValue=c),Pl(e,n),En(e,n,o,r),n.child;case 6:return e===null&&De&&((e=r=tn)&&(r=sS(r,n.pendingProps,Mi),r!==null?(n.stateNode=r,Pn=n,tn=null,e=!0):e=!1),e||ir(n)),null;case 13:return Zm(e,n,r);case 4:return Dt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=jr(n,null,o,r):En(e,n,o,r),n.child;case 11:return Gm(e,n,n.type,n.pendingProps,r);case 7:return En(e,n,n.pendingProps,r),n.child;case 8:return En(e,n,n.pendingProps.children,r),n.child;case 12:return En(e,n,n.pendingProps.children,r),n.child;case 10:return o=n.pendingProps,pa(n,n.type,o.value),En(e,n,o.children,r),n.child;case 9:return c=n.type._context,o=n.pendingProps.children,rr(n),c=Cn(c),o=o(c),n.flags|=1,En(e,n,o,r),n.child;case 14:return Vm(e,n,n.type,n.pendingProps,r);case 15:return km(e,n,n.type,n.pendingProps,r);case 19:return Qm(e,n,r);case 31:return o=n.pendingProps,r=n.mode,o={mode:o.mode,children:o.children},e===null?(r=Il(o,r),r.ref=n.ref,n.child=r,r.return=n,n=r):(r=Fi(e.child,o),r.ref=n.ref,n.child=r,r.return=n,n=r),n;case 22:return Xm(e,n,r);case 24:return rr(n),o=Cn(hn),e===null?(c=Ac(),c===null&&(c=ke,h=Tc(),c.pooledCache=h,h.refCount++,h!==null&&(c.pooledCacheLanes|=r),c=h),n.memoizedState={parent:o,cache:c},Cc(n),pa(n,hn,c)):((e.lanes&r)!==0&&(wc(e,n),no(n,null,null,r),eo()),c=e.memoizedState,h=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),pa(n,hn,o)):(o=h.cache,pa(n,hn,o),o!==c.cache&&Ec(n,[hn],r,!0))),En(e,n,n.pendingProps.children,r),n.child;case 29:throw n.pendingProps}throw Error(a(156,n.tag))}function Yi(e){e.flags|=4}function $m(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!o_(n)){if(n=ri.current,n!==null&&((be&4194048)===be?Ei!==null:(be&62914560)!==be&&(be&536870912)===0||n!==Ei))throw $s=Rc,Ip;e.flags|=8192}}function Bl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?yt():536870912,e.lanes|=n,Jr|=n)}function uo(e,n){if(!De)switch(e.tailMode){case"hidden":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ke(e){var n=e.alternate!==null&&e.alternate.child===e.child,r=0,o=0;if(n)for(var c=e.child;c!==null;)r|=c.lanes|c.childLanes,o|=c.subtreeFlags&65011712,o|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)r|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=o,e.childLanes=r,n}function Lx(e,n,r){var o=n.pendingProps;switch(xc(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(n),null;case 1:return Ke(n),null;case 3:return r=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ki(hn),Jt(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(qs(n)?Yi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Up())),Ke(n),null;case 26:return r=n.memoizedState,e===null?(Yi(n),r!==null?(Ke(n),$m(n,r)):(Ke(n),n.flags&=-16777217)):r?r!==e.memoizedState?(Yi(n),Ke(n),$m(n,r)):(Ke(n),n.flags&=-16777217):(e.memoizedProps!==o&&Yi(n),Ke(n),n.flags&=-16777217),null;case 27:fe(n),r=nt.current;var c=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Yi(n);else{if(!o){if(n.stateNode===null)throw Error(a(166));return Ke(n),null}e=Lt.current,qs(n)?wp(n):(e=$g(c,o,r),n.stateNode=e,Yi(n))}return Ke(n),null;case 5:if(fe(n),r=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Yi(n);else{if(!o){if(n.stateNode===null)throw Error(a(166));return Ke(n),null}if(e=Lt.current,qs(n))wp(n);else{switch(c=Kl(nt.current),e){case 1:e=c.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:e=c.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":e=c.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":e=c.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?c.createElement("select",{is:o.is}):c.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?c.createElement(r,{is:o.is}):c.createElement(r)}}e[fn]=n,e[Je]=o;t:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)e.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break t;for(;c.sibling===null;){if(c.return===null||c.return===n)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=e;t:switch(bn(e,r,o),r){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Yi(n)}}return Ke(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&Yi(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(a(166));if(e=nt.current,qs(n)){if(e=n.stateNode,r=n.memoizedProps,o=null,c=Pn,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}e[fn]=n,e=!!(e.nodeValue===r||o!==null&&o.suppressHydrationWarning===!0||qg(e.nodeValue,r)),e||ir(n)}else e=Kl(e).createTextNode(o),e[fn]=n,n.stateNode=e}return Ke(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=qs(n),o!==null&&o.dehydrated!==null){if(e===null){if(!c)throw Error(a(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(a(317));c[fn]=n}else Ys(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),c=!1}else c=Up(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Wi(n),n):(Wi(n),null)}if(Wi(n),(n.flags&128)!==0)return n.lanes=r,n;if(r=o!==null,e=e!==null&&e.memoizedState!==null,r){o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool);var h=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==c&&(o.flags|=2048)}return r!==e&&r&&(n.child.flags|=8192),Bl(n,n.updateQueue),Ke(n),null;case 4:return Jt(),e===null&&Lf(n.stateNode.containerInfo),Ke(n),null;case 10:return ki(n.type),Ke(n),null;case 19:if(Mt(dn),c=n.memoizedState,c===null)return Ke(n),null;if(o=(n.flags&128)!==0,h=c.rendering,h===null)if(o)uo(c,!1);else{if(en!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(h=Ll(e),h!==null){for(n.flags|=128,uo(c,!1),e=h.updateQueue,n.updateQueue=e,Bl(n,e),n.subtreeFlags=0,e=r,r=n.child;r!==null;)Rp(r,e),r=r.sibling;return Tt(dn,dn.current&1|2),n.child}e=e.sibling}c.tail!==null&&zt()>Hl&&(n.flags|=128,o=!0,uo(c,!1),n.lanes=4194304)}else{if(!o)if(e=Ll(h),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,Bl(n,e),uo(c,!0),c.tail===null&&c.tailMode==="hidden"&&!h.alternate&&!De)return Ke(n),null}else 2*zt()-c.renderingStartTime>Hl&&r!==536870912&&(n.flags|=128,o=!0,uo(c,!1),n.lanes=4194304);c.isBackwards?(h.sibling=n.child,n.child=h):(e=c.last,e!==null?e.sibling=h:n.child=h,c.last=h)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=zt(),n.sibling=null,e=dn.current,Tt(dn,o?e&1|2:e&1),n):(Ke(n),null);case 22:case 23:return Wi(n),Nc(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(r&536870912)!==0&&(n.flags&128)===0&&(Ke(n),n.subtreeFlags&6&&(n.flags|=8192)):Ke(n),r=n.updateQueue,r!==null&&Bl(n,r.retryQueue),r=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==r&&(n.flags|=2048),e!==null&&Mt(sr),null;case 24:return r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),ki(hn),Ke(n),null;case 25:return null;case 30:return null}throw Error(a(156,n.tag))}function Nx(e,n){switch(xc(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ki(hn),Jt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return fe(n),null;case 13:if(Wi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(a(340));Ys()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Mt(dn),null;case 4:return Jt(),null;case 10:return ki(n.type),null;case 22:case 23:return Wi(n),Nc(),e!==null&&Mt(sr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ki(hn),null;case 25:return null;default:return null}}function tg(e,n){switch(xc(n),n.tag){case 3:ki(hn),Jt();break;case 26:case 27:case 5:fe(n);break;case 4:Jt();break;case 13:Wi(n);break;case 19:Mt(dn);break;case 10:ki(n.type);break;case 22:case 23:Wi(n),Nc(),e!==null&&Mt(sr);break;case 24:ki(hn)}}function co(e,n){try{var r=n.updateQueue,o=r!==null?r.lastEffect:null;if(o!==null){var c=o.next;r=c;do{if((r.tag&e)===e){o=void 0;var h=r.create,y=r.inst;o=h(),y.destroy=o}r=r.next}while(r!==c)}}catch(b){Ge(n,n.return,b)}}function ya(e,n,r){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var h=c.next;o=h;do{if((o.tag&e)===e){var y=o.inst,b=y.destroy;if(b!==void 0){y.destroy=void 0,c=n;var I=r,tt=b;try{tt()}catch(dt){Ge(c,I,dt)}}}o=o.next}while(o!==h)}}catch(dt){Ge(n,n.return,dt)}}function eg(e){var n=e.updateQueue;if(n!==null){var r=e.stateNode;try{Vp(n,r)}catch(o){Ge(e,e.return,o)}}}function ng(e,n,r){r.props=lr(e.type,e.memoizedProps),r.state=e.memoizedState;try{r.componentWillUnmount()}catch(o){Ge(e,n,o)}}function fo(e,n){try{var r=e.ref;if(r!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof r=="function"?e.refCleanup=r(o):r.current=o}}catch(c){Ge(e,n,c)}}function Ti(e,n){var r=e.ref,o=e.refCleanup;if(r!==null)if(typeof o=="function")try{o()}catch(c){Ge(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(c){Ge(e,n,c)}else r.current=null}function ig(e){var n=e.type,r=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":r.autoFocus&&o.focus();break t;case"img":r.src?o.src=r.src:r.srcSet&&(o.srcset=r.srcSet)}}catch(c){Ge(e,e.return,c)}}function lf(e,n,r){try{var o=e.stateNode;tS(o,e.type,r,n),o[Je]=n}catch(c){Ge(e,e.return,c)}}function ag(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&wa(e.type)||e.tag===4}function uf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||ag(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&wa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function cf(e,n,r){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(e,n):(n=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,n.appendChild(e),r=r._reactRootContainer,r!=null||n.onclick!==null||(n.onclick=Zl));else if(o!==4&&(o===27&&wa(e.type)&&(r=e.stateNode,n=null),e=e.child,e!==null))for(cf(e,n,r),e=e.sibling;e!==null;)cf(e,n,r),e=e.sibling}function zl(e,n,r){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?r.insertBefore(e,n):r.appendChild(e);else if(o!==4&&(o===27&&wa(e.type)&&(r=e.stateNode),e=e.child,e!==null))for(zl(e,n,r),e=e.sibling;e!==null;)zl(e,n,r),e=e.sibling}function rg(e){var n=e.stateNode,r=e.memoizedProps;try{for(var o=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);bn(n,o,r),n[fn]=e,n[Je]=r}catch(h){Ge(e,e.return,h)}}var ji=!1,rn=!1,ff=!1,sg=typeof WeakSet=="function"?WeakSet:Set,vn=null;function Ox(e,n){if(e=e.containerInfo,Pf=nu,e=_p(e),lc(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else t:{r=(r=e.ownerDocument)&&r.defaultView||window;var o=r.getSelection&&r.getSelection();if(o&&o.rangeCount!==0){r=o.anchorNode;var c=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{r.nodeType,h.nodeType}catch{r=null;break t}var y=0,b=-1,I=-1,tt=0,dt=0,xt=e,rt=null;e:for(;;){for(var st;xt!==r||c!==0&&xt.nodeType!==3||(b=y+c),xt!==h||o!==0&&xt.nodeType!==3||(I=y+o),xt.nodeType===3&&(y+=xt.nodeValue.length),(st=xt.firstChild)!==null;)rt=xt,xt=st;for(;;){if(xt===e)break e;if(rt===r&&++tt===c&&(b=y),rt===h&&++dt===o&&(I=y),(st=xt.nextSibling)!==null)break;xt=rt,rt=xt.parentNode}xt=st}r=b===-1||I===-1?null:{start:b,end:I}}else r=null}r=r||{start:0,end:0}}else r=null;for(If={focusedElem:e,selectionRange:r},nu=!1,vn=n;vn!==null;)if(n=vn,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,vn=e;else for(;vn!==null;){switch(n=vn,h=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&h!==null){e=void 0,r=n,c=h.memoizedProps,h=h.memoizedState,o=r.stateNode;try{var se=lr(r.type,c,r.elementType===r.type);e=o.getSnapshotBeforeUpdate(se,h),o.__reactInternalSnapshotBeforeUpdate=e}catch(ie){Ge(r,r.return,ie)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,r=e.nodeType,r===9)Ff(e);else if(r===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Ff(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=n.sibling,e!==null){e.return=n.return,vn=e;break}vn=n.return}}function og(e,n,r){var o=r.flags;switch(r.tag){case 0:case 11:case 15:Ma(e,r),o&4&&co(5,r);break;case 1:if(Ma(e,r),o&4)if(e=r.stateNode,n===null)try{e.componentDidMount()}catch(y){Ge(r,r.return,y)}else{var c=lr(r.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(y){Ge(r,r.return,y)}}o&64&&eg(r),o&512&&fo(r,r.return);break;case 3:if(Ma(e,r),o&64&&(e=r.updateQueue,e!==null)){if(n=null,r.child!==null)switch(r.child.tag){case 27:case 5:n=r.child.stateNode;break;case 1:n=r.child.stateNode}try{Vp(e,n)}catch(y){Ge(r,r.return,y)}}break;case 27:n===null&&o&4&&rg(r);case 26:case 5:Ma(e,r),n===null&&o&4&&ig(r),o&512&&fo(r,r.return);break;case 12:Ma(e,r);break;case 13:Ma(e,r),o&4&&cg(e,r),o&64&&(e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(r=kx.bind(null,r),oS(e,r))));break;case 22:if(o=r.memoizedState!==null||ji,!o){n=n!==null&&n.memoizedState!==null||rn,c=ji;var h=rn;ji=o,(rn=n)&&!h?Ea(e,r,(r.subtreeFlags&8772)!==0):Ma(e,r),ji=c,rn=h}break;case 30:break;default:Ma(e,r)}}function lg(e){var n=e.alternate;n!==null&&(e.alternate=null,lg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&wr(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var je=null,Gn=!1;function Zi(e,n,r){for(r=r.child;r!==null;)ug(e,n,r),r=r.sibling}function ug(e,n,r){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(ht,r)}catch{}switch(r.tag){case 26:rn||Ti(r,n),Zi(e,n,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:rn||Ti(r,n);var o=je,c=Gn;wa(r.type)&&(je=r.stateNode,Gn=!1),Zi(e,n,r),yo(r.stateNode),je=o,Gn=c;break;case 5:rn||Ti(r,n);case 6:if(o=je,c=Gn,je=null,Zi(e,n,r),je=o,Gn=c,je!==null)if(Gn)try{(je.nodeType===9?je.body:je.nodeName==="HTML"?je.ownerDocument.body:je).removeChild(r.stateNode)}catch(h){Ge(r,n,h)}else try{je.removeChild(r.stateNode)}catch(h){Ge(r,n,h)}break;case 18:je!==null&&(Gn?(e=je,Qg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,r.stateNode),wo(e)):Qg(je,r.stateNode));break;case 4:o=je,c=Gn,je=r.stateNode.containerInfo,Gn=!0,Zi(e,n,r),je=o,Gn=c;break;case 0:case 11:case 14:case 15:rn||ya(2,r,n),rn||ya(4,r,n),Zi(e,n,r);break;case 1:rn||(Ti(r,n),o=r.stateNode,typeof o.componentWillUnmount=="function"&&ng(r,n,o)),Zi(e,n,r);break;case 21:Zi(e,n,r);break;case 22:rn=(o=rn)||r.memoizedState!==null,Zi(e,n,r),rn=o;break;default:Zi(e,n,r)}}function cg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{wo(e)}catch(r){Ge(n,n.return,r)}}function Px(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new sg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new sg),n;default:throw Error(a(435,e.tag))}}function hf(e,n){var r=Px(e);n.forEach(function(o){var c=Xx.bind(null,e,o);r.has(o)||(r.add(o),o.then(c,c))})}function jn(e,n){var r=n.deletions;if(r!==null)for(var o=0;o<r.length;o++){var c=r[o],h=e,y=n,b=y;t:for(;b!==null;){switch(b.tag){case 27:if(wa(b.type)){je=b.stateNode,Gn=!1;break t}break;case 5:je=b.stateNode,Gn=!1;break t;case 3:case 4:je=b.stateNode.containerInfo,Gn=!0;break t}b=b.return}if(je===null)throw Error(a(160));ug(h,y,c),je=null,Gn=!1,h=c.alternate,h!==null&&(h.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)fg(n,e),n=n.sibling}var hi=null;function fg(e,n){var r=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:jn(n,e),Zn(e),o&4&&(ya(3,e,e.return),co(3,e),ya(5,e,e.return));break;case 1:jn(n,e),Zn(e),o&512&&(rn||r===null||Ti(r,r.return)),o&64&&ji&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(r=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=r===null?o:r.concat(o))));break;case 26:var c=hi;if(jn(n,e),Zn(e),o&512&&(rn||r===null||Ti(r,r.return)),o&4){var h=r!==null?r.memoizedState:null;if(o=e.memoizedState,r===null)if(o===null)if(e.stateNode===null){t:{o=e.type,r=e.memoizedProps,c=c.ownerDocument||c;e:switch(o){case"title":h=c.getElementsByTagName("title")[0],(!h||h[yi]||h[fn]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=c.createElement(o),c.head.insertBefore(h,c.querySelector("head > title"))),bn(h,o,r),h[fn]=e,on(h),o=h;break t;case"link":var y=r_("link","href",c).get(o+(r.href||""));if(y){for(var b=0;b<y.length;b++)if(h=y[b],h.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&h.getAttribute("rel")===(r.rel==null?null:r.rel)&&h.getAttribute("title")===(r.title==null?null:r.title)&&h.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){y.splice(b,1);break e}}h=c.createElement(o),bn(h,o,r),c.head.appendChild(h);break;case"meta":if(y=r_("meta","content",c).get(o+(r.content||""))){for(b=0;b<y.length;b++)if(h=y[b],h.getAttribute("content")===(r.content==null?null:""+r.content)&&h.getAttribute("name")===(r.name==null?null:r.name)&&h.getAttribute("property")===(r.property==null?null:r.property)&&h.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&h.getAttribute("charset")===(r.charSet==null?null:r.charSet)){y.splice(b,1);break e}}h=c.createElement(o),bn(h,o,r),c.head.appendChild(h);break;default:throw Error(a(468,o))}h[fn]=e,on(h),o=h}e.stateNode=o}else s_(c,e.type,e.stateNode);else e.stateNode=a_(c,o,e.memoizedProps);else h!==o?(h===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):h.count--,o===null?s_(c,e.type,e.stateNode):a_(c,o,e.memoizedProps)):o===null&&e.stateNode!==null&&lf(e,e.memoizedProps,r.memoizedProps)}break;case 27:jn(n,e),Zn(e),o&512&&(rn||r===null||Ti(r,r.return)),r!==null&&o&4&&lf(e,e.memoizedProps,r.memoizedProps);break;case 5:if(jn(n,e),Zn(e),o&512&&(rn||r===null||Ti(r,r.return)),e.flags&32){c=e.stateNode;try{zn(c,"")}catch(st){Ge(e,e.return,st)}}o&4&&e.stateNode!=null&&(c=e.memoizedProps,lf(e,c,r!==null?r.memoizedProps:c)),o&1024&&(ff=!0);break;case 6:if(jn(n,e),Zn(e),o&4){if(e.stateNode===null)throw Error(a(162));o=e.memoizedProps,r=e.stateNode;try{r.nodeValue=o}catch(st){Ge(e,e.return,st)}}break;case 3:if($l=null,c=hi,hi=Ql(n.containerInfo),jn(n,e),hi=c,Zn(e),o&4&&r!==null&&r.memoizedState.isDehydrated)try{wo(n.containerInfo)}catch(st){Ge(e,e.return,st)}ff&&(ff=!1,hg(e));break;case 4:o=hi,hi=Ql(e.stateNode.containerInfo),jn(n,e),Zn(e),hi=o;break;case 12:jn(n,e),Zn(e);break;case 13:jn(n,e),Zn(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(vf=zt()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,hf(e,o)));break;case 22:c=e.memoizedState!==null;var I=r!==null&&r.memoizedState!==null,tt=ji,dt=rn;if(ji=tt||c,rn=dt||I,jn(n,e),rn=dt,ji=tt,Zn(e),o&8192)t:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(r===null||I||ji||rn||ur(e)),r=null,n=e;;){if(n.tag===5||n.tag===26){if(r===null){I=r=n;try{if(h=I.stateNode,c)y=h.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{b=I.stateNode;var xt=I.memoizedProps.style,rt=xt!=null&&xt.hasOwnProperty("display")?xt.display:null;b.style.display=rt==null||typeof rt=="boolean"?"":(""+rt).trim()}}catch(st){Ge(I,I.return,st)}}}else if(n.tag===6){if(r===null){I=n;try{I.stateNode.nodeValue=c?"":I.memoizedProps}catch(st){Ge(I,I.return,st)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;r===n&&(r=null),n=n.return}r===n&&(r=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(r=o.retryQueue,r!==null&&(o.retryQueue=null,hf(e,r))));break;case 19:jn(n,e),Zn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,hf(e,o)));break;case 30:break;case 21:break;default:jn(n,e),Zn(e)}}function Zn(e){var n=e.flags;if(n&2){try{for(var r,o=e.return;o!==null;){if(ag(o)){r=o;break}o=o.return}if(r==null)throw Error(a(160));switch(r.tag){case 27:var c=r.stateNode,h=uf(e);zl(e,h,c);break;case 5:var y=r.stateNode;r.flags&32&&(zn(y,""),r.flags&=-33);var b=uf(e);zl(e,b,y);break;case 3:case 4:var I=r.stateNode.containerInfo,tt=uf(e);cf(e,tt,I);break;default:throw Error(a(161))}}catch(dt){Ge(e,e.return,dt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function hg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;hg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Ma(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)og(e,n.alternate,n),n=n.sibling}function ur(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:ya(4,n,n.return),ur(n);break;case 1:Ti(n,n.return);var r=n.stateNode;typeof r.componentWillUnmount=="function"&&ng(n,n.return,r),ur(n);break;case 27:yo(n.stateNode);case 26:case 5:Ti(n,n.return),ur(n);break;case 22:n.memoizedState===null&&ur(n);break;case 30:ur(n);break;default:ur(n)}e=e.sibling}}function Ea(e,n,r){for(r=r&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,c=e,h=n,y=h.flags;switch(h.tag){case 0:case 11:case 15:Ea(c,h,r),co(4,h);break;case 1:if(Ea(c,h,r),o=h,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(tt){Ge(o,o.return,tt)}if(o=h,c=o.updateQueue,c!==null){var b=o.stateNode;try{var I=c.shared.hiddenCallbacks;if(I!==null)for(c.shared.hiddenCallbacks=null,c=0;c<I.length;c++)Gp(I[c],b)}catch(tt){Ge(o,o.return,tt)}}r&&y&64&&eg(h),fo(h,h.return);break;case 27:rg(h);case 26:case 5:Ea(c,h,r),r&&o===null&&y&4&&ig(h),fo(h,h.return);break;case 12:Ea(c,h,r);break;case 13:Ea(c,h,r),r&&y&4&&cg(c,h);break;case 22:h.memoizedState===null&&Ea(c,h,r),fo(h,h.return);break;case 30:break;default:Ea(c,h,r)}n=n.sibling}}function df(e,n){var r=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==r&&(e!=null&&e.refCount++,r!=null&&Ks(r))}function pf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ks(e))}function bi(e,n,r,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)dg(e,n,r,o),n=n.sibling}function dg(e,n,r,o){var c=n.flags;switch(n.tag){case 0:case 11:case 15:bi(e,n,r,o),c&2048&&co(9,n);break;case 1:bi(e,n,r,o);break;case 3:bi(e,n,r,o),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ks(e)));break;case 12:if(c&2048){bi(e,n,r,o),e=n.stateNode;try{var h=n.memoizedProps,y=h.id,b=h.onPostCommit;typeof b=="function"&&b(y,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(I){Ge(n,n.return,I)}}else bi(e,n,r,o);break;case 13:bi(e,n,r,o);break;case 23:break;case 22:h=n.stateNode,y=n.alternate,n.memoizedState!==null?h._visibility&2?bi(e,n,r,o):ho(e,n):h._visibility&2?bi(e,n,r,o):(h._visibility|=2,Zr(e,n,r,o,(n.subtreeFlags&10256)!==0)),c&2048&&df(y,n);break;case 24:bi(e,n,r,o),c&2048&&pf(n.alternate,n);break;default:bi(e,n,r,o)}}function Zr(e,n,r,o,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var h=e,y=n,b=r,I=o,tt=y.flags;switch(y.tag){case 0:case 11:case 15:Zr(h,y,b,I,c),co(8,y);break;case 23:break;case 22:var dt=y.stateNode;y.memoizedState!==null?dt._visibility&2?Zr(h,y,b,I,c):ho(h,y):(dt._visibility|=2,Zr(h,y,b,I,c)),c&&tt&2048&&df(y.alternate,y);break;case 24:Zr(h,y,b,I,c),c&&tt&2048&&pf(y.alternate,y);break;default:Zr(h,y,b,I,c)}n=n.sibling}}function ho(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var r=e,o=n,c=o.flags;switch(o.tag){case 22:ho(r,o),c&2048&&df(o.alternate,o);break;case 24:ho(r,o),c&2048&&pf(o.alternate,o);break;default:ho(r,o)}n=n.sibling}}var po=8192;function Kr(e){if(e.subtreeFlags&po)for(e=e.child;e!==null;)pg(e),e=e.sibling}function pg(e){switch(e.tag){case 26:Kr(e),e.flags&po&&e.memoizedState!==null&&SS(hi,e.memoizedState,e.memoizedProps);break;case 5:Kr(e);break;case 3:case 4:var n=hi;hi=Ql(e.stateNode.containerInfo),Kr(e),hi=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=po,po=16777216,Kr(e),po=n):Kr(e));break;default:Kr(e)}}function mg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function mo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];vn=o,_g(o,e)}mg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)gg(e),e=e.sibling}function gg(e){switch(e.tag){case 0:case 11:case 15:mo(e),e.flags&2048&&ya(9,e,e.return);break;case 3:mo(e);break;case 12:mo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Fl(e)):mo(e);break;default:mo(e)}}function Fl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];vn=o,_g(o,e)}mg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:ya(8,n,n.return),Fl(n);break;case 22:r=n.stateNode,r._visibility&2&&(r._visibility&=-3,Fl(n));break;default:Fl(n)}e=e.sibling}}function _g(e,n){for(;vn!==null;){var r=vn;switch(r.tag){case 0:case 11:case 15:ya(8,r,n);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var o=r.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Ks(r.memoizedState.cache)}if(o=r.child,o!==null)o.return=r,vn=o;else t:for(r=e;vn!==null;){o=vn;var c=o.sibling,h=o.return;if(lg(o),o===r){vn=null;break t}if(c!==null){c.return=h,vn=c;break t}vn=h}}}var Ix={getCacheForType:function(e){var n=Cn(hn),r=n.data.get(e);return r===void 0&&(r=e(),n.data.set(e,r)),r}},Bx=typeof WeakMap=="function"?WeakMap:Map,Ne=0,ke=null,ye=null,be=0,Oe=0,Kn=null,Ta=!1,Qr=!1,mf=!1,Ki=0,en=0,ba=0,cr=0,gf=0,si=0,Jr=0,go=null,Vn=null,_f=!1,vf=0,Hl=1/0,Gl=null,Aa=null,Tn=0,Ra=null,$r=null,ts=0,xf=0,Sf=null,vg=null,_o=0,yf=null;function Qn(){if((Ne&2)!==0&&be!==0)return be&-be;if(B.T!==null){var e=Gr;return e!==0?e:Cf()}return _e()}function xg(){si===0&&(si=(be&536870912)===0||De?G():536870912);var e=ri.current;return e!==null&&(e.flags|=32),si}function Jn(e,n,r){(e===ke&&(Oe===2||Oe===9)||e.cancelPendingCommit!==null)&&(es(e,0),Ca(e,be,si,!1)),Ot(e,r),((Ne&2)===0||e!==ke)&&(e===ke&&((Ne&2)===0&&(cr|=r),en===4&&Ca(e,be,si,!1)),Ai(e))}function Sg(e,n,r){if((Ne&6)!==0)throw Error(a(327));var o=!r&&(n&124)===0&&(n&e.expiredLanes)===0||at(e,n),c=o?Hx(e,n):Tf(e,n,!0),h=o;do{if(c===0){Qr&&!o&&Ca(e,n,0,!1);break}else{if(r=e.current.alternate,h&&!zx(r)){c=Tf(e,n,!1),h=!1;continue}if(c===2){if(h=n,e.errorRecoveryDisabledLanes&h)var y=0;else y=e.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;t:{var b=e;c=go;var I=b.current.memoizedState.isDehydrated;if(I&&(es(b,y).flags|=256),y=Tf(b,y,!1),y!==2){if(mf&&!I){b.errorRecoveryDisabledLanes|=h,cr|=h,c=4;break t}h=Vn,Vn=c,h!==null&&(Vn===null?Vn=h:Vn.push.apply(Vn,h))}c=y}if(h=!1,c!==2)continue}}if(c===1){es(e,0),Ca(e,n,0,!0);break}t:{switch(o=e,h=c,h){case 0:case 1:throw Error(a(345));case 4:if((n&4194048)!==n)break;case 6:Ca(o,n,si,!Ta);break t;case 2:Vn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((n&62914560)===n&&(c=vf+300-zt(),10<c)){if(Ca(o,n,si,!Ta),z(o,0,!0)!==0)break t;o.timeoutHandle=Zg(yg.bind(null,o,r,Vn,Gl,_f,n,si,cr,Jr,Ta,h,2,-0,0),c);break t}yg(o,r,Vn,Gl,_f,n,si,cr,Jr,Ta,h,0,-0,0)}}break}while(!0);Ai(e)}function yg(e,n,r,o,c,h,y,b,I,tt,dt,xt,rt,st){if(e.timeoutHandle=-1,xt=n.subtreeFlags,(xt&8192||(xt&16785408)===16785408)&&(To={stylesheets:null,count:0,unsuspend:xS},pg(n),xt=yS(),xt!==null)){e.cancelPendingCommit=xt(Cg.bind(null,e,n,h,r,o,c,y,b,I,dt,1,rt,st)),Ca(e,h,y,!tt);return}Cg(e,n,h,r,o,c,y,b,I)}function zx(e){for(var n=e;;){var r=n.tag;if((r===0||r===11||r===15)&&n.flags&16384&&(r=n.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var o=0;o<r.length;o++){var c=r[o],h=c.getSnapshot;c=c.value;try{if(!qn(h(),c))return!1}catch{return!1}}if(r=n.child,n.subtreeFlags&16384&&r!==null)r.return=n,n=r;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ca(e,n,r,o){n&=~gf,n&=~cr,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var c=n;0<c;){var h=31-Ht(c),y=1<<h;o[h]=-1,c&=~y}r!==0&&gt(e,r,n)}function Vl(){return(Ne&6)===0?(vo(0),!1):!0}function Mf(){if(ye!==null){if(Oe===0)var e=ye.return;else e=ye,Vi=ar=null,zc(e),Yr=null,oo=0,e=ye;for(;e!==null;)tg(e.alternate,e),e=e.return;ye=null}}function es(e,n){var r=e.timeoutHandle;r!==-1&&(e.timeoutHandle=-1,nS(r)),r=e.cancelPendingCommit,r!==null&&(e.cancelPendingCommit=null,r()),Mf(),ke=e,ye=r=Fi(e.current,null),be=n,Oe=0,Kn=null,Ta=!1,Qr=at(e,n),mf=!1,Jr=si=gf=cr=ba=en=0,Vn=go=null,_f=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var c=31-Ht(o),h=1<<c;n|=e[c],o&=~h}return Ki=n,cl(),r}function Mg(e,n){ve=null,B.H=wl,n===Js||n===xl?(n=Fp(),Oe=3):n===Ip?(n=Fp(),Oe=4):Oe=n===Hm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Kn=n,ye===null&&(en=1,Ol(e,ei(n,e.current)))}function Eg(){var e=B.H;return B.H=wl,e===null?wl:e}function Tg(){var e=B.A;return B.A=Ix,e}function Ef(){en=4,Ta||(be&4194048)!==be&&ri.current!==null||(Qr=!0),(ba&134217727)===0&&(cr&134217727)===0||ke===null||Ca(ke,be,si,!1)}function Tf(e,n,r){var o=Ne;Ne|=2;var c=Eg(),h=Tg();(ke!==e||be!==n)&&(Gl=null,es(e,n)),n=!1;var y=en;t:do try{if(Oe!==0&&ye!==null){var b=ye,I=Kn;switch(Oe){case 8:Mf(),y=6;break t;case 3:case 2:case 9:case 6:ri.current===null&&(n=!0);var tt=Oe;if(Oe=0,Kn=null,ns(e,b,I,tt),r&&Qr){y=0;break t}break;default:tt=Oe,Oe=0,Kn=null,ns(e,b,I,tt)}}Fx(),y=en;break}catch(dt){Mg(e,dt)}while(!0);return n&&e.shellSuspendCounter++,Vi=ar=null,Ne=o,B.H=c,B.A=h,ye===null&&(ke=null,be=0,cl()),y}function Fx(){for(;ye!==null;)bg(ye)}function Hx(e,n){var r=Ne;Ne|=2;var o=Eg(),c=Tg();ke!==e||be!==n?(Gl=null,Hl=zt()+500,es(e,n)):Qr=at(e,n);t:do try{if(Oe!==0&&ye!==null){n=ye;var h=Kn;e:switch(Oe){case 1:Oe=0,Kn=null,ns(e,n,h,1);break;case 2:case 9:if(Bp(h)){Oe=0,Kn=null,Ag(n);break}n=function(){Oe!==2&&Oe!==9||ke!==e||(Oe=7),Ai(e)},h.then(n,n);break t;case 3:Oe=7;break t;case 4:Oe=5;break t;case 7:Bp(h)?(Oe=0,Kn=null,Ag(n)):(Oe=0,Kn=null,ns(e,n,h,7));break;case 5:var y=null;switch(ye.tag){case 26:y=ye.memoizedState;case 5:case 27:var b=ye;if(!y||o_(y)){Oe=0,Kn=null;var I=b.sibling;if(I!==null)ye=I;else{var tt=b.return;tt!==null?(ye=tt,kl(tt)):ye=null}break e}}Oe=0,Kn=null,ns(e,n,h,5);break;case 6:Oe=0,Kn=null,ns(e,n,h,6);break;case 8:Mf(),en=6;break t;default:throw Error(a(462))}}Gx();break}catch(dt){Mg(e,dt)}while(!0);return Vi=ar=null,B.H=o,B.A=c,Ne=r,ye!==null?0:(ke=null,be=0,cl(),en)}function Gx(){for(;ye!==null&&!oe();)bg(ye)}function bg(e){var n=Jm(e.alternate,e,Ki);e.memoizedProps=e.pendingProps,n===null?kl(e):ye=n}function Ag(e){var n=e,r=n.alternate;switch(n.tag){case 15:case 0:n=qm(r,n,n.pendingProps,n.type,void 0,be);break;case 11:n=qm(r,n,n.pendingProps,n.type.render,n.ref,be);break;case 5:zc(n);default:tg(r,n),n=ye=Rp(n,Ki),n=Jm(r,n,Ki)}e.memoizedProps=e.pendingProps,n===null?kl(e):ye=n}function ns(e,n,r,o){Vi=ar=null,zc(n),Yr=null,oo=0;var c=n.return;try{if(Dx(e,c,n,r,be)){en=1,Ol(e,ei(r,e.current)),ye=null;return}}catch(h){if(c!==null)throw ye=c,h;en=1,Ol(e,ei(r,e.current)),ye=null;return}n.flags&32768?(De||o===1?e=!0:Qr||(be&536870912)!==0?e=!1:(Ta=e=!0,(o===2||o===9||o===3||o===6)&&(o=ri.current,o!==null&&o.tag===13&&(o.flags|=16384))),Rg(n,e)):kl(n)}function kl(e){var n=e;do{if((n.flags&32768)!==0){Rg(n,Ta);return}e=n.return;var r=Lx(n.alternate,n,Ki);if(r!==null){ye=r;return}if(n=n.sibling,n!==null){ye=n;return}ye=n=e}while(n!==null);en===0&&(en=5)}function Rg(e,n){do{var r=Nx(e.alternate,e);if(r!==null){r.flags&=32767,ye=r;return}if(r=e.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!n&&(e=e.sibling,e!==null)){ye=e;return}ye=e=r}while(e!==null);en=6,ye=null}function Cg(e,n,r,o,c,h,y,b,I){e.cancelPendingCommit=null;do Xl();while(Tn!==0);if((Ne&6)!==0)throw Error(a(327));if(n!==null){if(n===e.current)throw Error(a(177));if(h=n.lanes|n.childLanes,h|=dc,At(e,r,h,y,b,I),e===ke&&(ye=ke=null,be=0),$r=n,Ra=e,ts=r,xf=h,Sf=c,vg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Wx(Xe,function(){return Ng(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=B.T,B.T=null,c=Z.p,Z.p=2,y=Ne,Ne|=4;try{Ox(e,n,r)}finally{Ne=y,Z.p=c,B.T=o}}Tn=1,wg(),Dg(),Ug()}}function wg(){if(Tn===1){Tn=0;var e=Ra,n=$r,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=B.T,B.T=null;var o=Z.p;Z.p=2;var c=Ne;Ne|=4;try{fg(n,e);var h=If,y=_p(e.containerInfo),b=h.focusedElem,I=h.selectionRange;if(y!==b&&b&&b.ownerDocument&&gp(b.ownerDocument.documentElement,b)){if(I!==null&&lc(b)){var tt=I.start,dt=I.end;if(dt===void 0&&(dt=tt),"selectionStart"in b)b.selectionStart=tt,b.selectionEnd=Math.min(dt,b.value.length);else{var xt=b.ownerDocument||document,rt=xt&&xt.defaultView||window;if(rt.getSelection){var st=rt.getSelection(),se=b.textContent.length,ie=Math.min(I.start,se),ze=I.end===void 0?ie:Math.min(I.end,se);!st.extend&&ie>ze&&(y=ze,ze=ie,ie=y);var j=mp(b,ie),W=mp(b,ze);if(j&&W&&(st.rangeCount!==1||st.anchorNode!==j.node||st.anchorOffset!==j.offset||st.focusNode!==W.node||st.focusOffset!==W.offset)){var Q=xt.createRange();Q.setStart(j.node,j.offset),st.removeAllRanges(),ie>ze?(st.addRange(Q),st.extend(W.node,W.offset)):(Q.setEnd(W.node,W.offset),st.addRange(Q))}}}}for(xt=[],st=b;st=st.parentNode;)st.nodeType===1&&xt.push({element:st,left:st.scrollLeft,top:st.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<xt.length;b++){var pt=xt[b];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}nu=!!Pf,If=Pf=null}finally{Ne=c,Z.p=o,B.T=r}}e.current=n,Tn=2}}function Dg(){if(Tn===2){Tn=0;var e=Ra,n=$r,r=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||r){r=B.T,B.T=null;var o=Z.p;Z.p=2;var c=Ne;Ne|=4;try{og(e,n.alternate,n)}finally{Ne=c,Z.p=o,B.T=r}}Tn=3}}function Ug(){if(Tn===4||Tn===3){Tn=0,ne();var e=Ra,n=$r,r=ts,o=vg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Tn=5:(Tn=0,$r=Ra=null,Lg(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(Aa=null),Te(r),n=n.stateNode,mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(ht,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=B.T,c=Z.p,Z.p=2,B.T=null;try{for(var h=e.onRecoverableError,y=0;y<o.length;y++){var b=o[y];h(b.value,{componentStack:b.stack})}}finally{B.T=n,Z.p=c}}(ts&3)!==0&&Xl(),Ai(e),c=e.pendingLanes,(r&4194090)!==0&&(c&42)!==0?e===yf?_o++:(_o=0,yf=e):_o=0,vo(0)}}function Lg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Ks(n)))}function Xl(e){return wg(),Dg(),Ug(),Ng()}function Ng(){if(Tn!==5)return!1;var e=Ra,n=xf;xf=0;var r=Te(ts),o=B.T,c=Z.p;try{Z.p=32>r?32:r,B.T=null,r=Sf,Sf=null;var h=Ra,y=ts;if(Tn=0,$r=Ra=null,ts=0,(Ne&6)!==0)throw Error(a(331));var b=Ne;if(Ne|=4,gg(h.current),dg(h,h.current,y,r),Ne=b,vo(0,!1),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(ht,h)}catch{}return!0}finally{Z.p=c,B.T=o,Lg(e,n)}}function Og(e,n,r){n=ei(r,n),n=Jc(e.stateNode,n,2),e=_a(e,n,2),e!==null&&(Ot(e,2),Ai(e))}function Ge(e,n,r){if(e.tag===3)Og(e,e,r);else for(;n!==null;){if(n.tag===3){Og(n,e,r);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Aa===null||!Aa.has(o))){e=ei(r,e),r=zm(2),o=_a(n,r,2),o!==null&&(Fm(r,o,n,e),Ot(o,2),Ai(o));break}}n=n.return}}function bf(e,n,r){var o=e.pingCache;if(o===null){o=e.pingCache=new Bx;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(r)||(mf=!0,c.add(r),e=Vx.bind(null,e,n,r),n.then(e,e))}function Vx(e,n,r){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,ke===e&&(be&r)===r&&(en===4||en===3&&(be&62914560)===be&&300>zt()-vf?(Ne&2)===0&&es(e,0):gf|=r,Jr===be&&(Jr=0)),Ai(e)}function Pg(e,n){n===0&&(n=yt()),e=Br(e,n),e!==null&&(Ot(e,n),Ai(e))}function kx(e){var n=e.memoizedState,r=0;n!==null&&(r=n.retryLane),Pg(e,r)}function Xx(e,n){var r=0;switch(e.tag){case 13:var o=e.stateNode,c=e.memoizedState;c!==null&&(r=c.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(a(314))}o!==null&&o.delete(n),Pg(e,r)}function Wx(e,n){return H(e,n)}var Wl=null,is=null,Af=!1,ql=!1,Rf=!1,fr=0;function Ai(e){e!==is&&e.next===null&&(is===null?Wl=is=e:is=is.next=e),ql=!0,Af||(Af=!0,Yx())}function vo(e,n){if(!Rf&&ql){Rf=!0;do for(var r=!1,o=Wl;o!==null;){if(e!==0){var c=o.pendingLanes;if(c===0)var h=0;else{var y=o.suspendedLanes,b=o.pingedLanes;h=(1<<31-Ht(42|e)+1)-1,h&=c&~(y&~b),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(r=!0,Fg(o,h))}else h=be,h=z(o,o===ke?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||at(o,h)||(r=!0,Fg(o,h));o=o.next}while(r);Rf=!1}}function qx(){Ig()}function Ig(){ql=Af=!1;var e=0;fr!==0&&(eS()&&(e=fr),fr=0);for(var n=zt(),r=null,o=Wl;o!==null;){var c=o.next,h=Bg(o,n);h===0?(o.next=null,r===null?Wl=c:r.next=c,c===null&&(is=r)):(r=o,(e!==0||(h&3)!==0)&&(ql=!0)),o=c}vo(e)}function Bg(e,n){for(var r=e.suspendedLanes,o=e.pingedLanes,c=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var y=31-Ht(h),b=1<<y,I=c[y];I===-1?((b&r)===0||(b&o)!==0)&&(c[y]=wt(b,n)):I<=n&&(e.expiredLanes|=b),h&=~b}if(n=ke,r=be,r=z(e,e===n?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,r===0||e===n&&(Oe===2||Oe===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&we(o),e.callbackNode=null,e.callbackPriority=0;if((r&3)===0||at(e,r)){if(n=r&-r,n===e.callbackPriority)return n;switch(o!==null&&we(o),Te(r)){case 2:case 8:r=le;break;case 32:r=Xe;break;case 268435456:r=O;break;default:r=Xe}return o=zg.bind(null,e),r=H(r,o),e.callbackPriority=n,e.callbackNode=r,n}return o!==null&&o!==null&&we(o),e.callbackPriority=2,e.callbackNode=null,2}function zg(e,n){if(Tn!==0&&Tn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var r=e.callbackNode;if(Xl()&&e.callbackNode!==r)return null;var o=be;return o=z(e,e===ke?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Sg(e,o,n),Bg(e,zt()),e.callbackNode!=null&&e.callbackNode===r?zg.bind(null,e):null)}function Fg(e,n){if(Xl())return null;Sg(e,n,!0)}function Yx(){iS(function(){(Ne&6)!==0?H(kt,qx):Ig()})}function Cf(){return fr===0&&(fr=G()),fr}function Hg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:il(""+e)}function Gg(e,n){var r=n.ownerDocument.createElement("input");return r.name=n.name,r.value=n.value,e.id&&r.setAttribute("form",e.id),n.parentNode.insertBefore(r,n),e=new FormData(e),r.parentNode.removeChild(r),e}function jx(e,n,r,o,c){if(n==="submit"&&r&&r.stateNode===c){var h=Hg((c[Je]||null).action),y=o.submitter;y&&(n=(n=y[Je]||null)?Hg(n.formAction):y.getAttribute("formAction"),n!==null&&(h=n,y=null));var b=new ol("action","action",null,o,c);e.push({event:b,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(fr!==0){var I=y?Gg(c,y):new FormData(c);Yc(r,{pending:!0,data:I,method:c.method,action:h},null,I)}}else typeof h=="function"&&(b.preventDefault(),I=y?Gg(c,y):new FormData(c),Yc(r,{pending:!0,data:I,method:c.method,action:h},h,I))},currentTarget:c}]})}}for(var wf=0;wf<hc.length;wf++){var Df=hc[wf],Zx=Df.toLowerCase(),Kx=Df[0].toUpperCase()+Df.slice(1);fi(Zx,"on"+Kx)}fi(Sp,"onAnimationEnd"),fi(yp,"onAnimationIteration"),fi(Mp,"onAnimationStart"),fi("dblclick","onDoubleClick"),fi("focusin","onFocus"),fi("focusout","onBlur"),fi(dx,"onTransitionRun"),fi(px,"onTransitionStart"),fi(mx,"onTransitionCancel"),fi(Ep,"onTransitionEnd"),Y("onMouseEnter",["mouseout","mouseover"]),Y("onMouseLeave",["mouseout","mouseover"]),Y("onPointerEnter",["pointerout","pointerover"]),Y("onPointerLeave",["pointerout","pointerover"]),R("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),R("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),R("onBeforeInput",["compositionend","keypress","textInput","paste"]),R("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),R("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),R("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(xo));function Vg(e,n){n=(n&4)!==0;for(var r=0;r<e.length;r++){var o=e[r],c=o.event;o=o.listeners;t:{var h=void 0;if(n)for(var y=o.length-1;0<=y;y--){var b=o[y],I=b.instance,tt=b.currentTarget;if(b=b.listener,I!==h&&c.isPropagationStopped())break t;h=b,c.currentTarget=tt;try{h(c)}catch(dt){Nl(dt)}c.currentTarget=null,h=I}else for(y=0;y<o.length;y++){if(b=o[y],I=b.instance,tt=b.currentTarget,b=b.listener,I!==h&&c.isPropagationStopped())break t;h=b,c.currentTarget=tt;try{h(c)}catch(dt){Nl(dt)}c.currentTarget=null,h=I}}}}function Me(e,n){var r=n[Rr];r===void 0&&(r=n[Rr]=new Set);var o=e+"__bubble";r.has(o)||(kg(n,e,2,!1),r.add(o))}function Uf(e,n,r){var o=0;n&&(o|=4),kg(r,e,o,n)}var Yl="_reactListening"+Math.random().toString(36).slice(2);function Lf(e){if(!e[Yl]){e[Yl]=!0,el.forEach(function(r){r!=="selectionchange"&&(Qx.has(r)||Uf(r,!1,e),Uf(r,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Yl]||(n[Yl]=!0,Uf("selectionchange",!1,n))}}function kg(e,n,r,o){switch(d_(n)){case 2:var c=TS;break;case 8:c=bS;break;default:c=qf}r=c.bind(null,n,r,e),c=void 0,!$u||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?e.addEventListener(n,r,{capture:!0,passive:c}):e.addEventListener(n,r,!0):c!==void 0?e.addEventListener(n,r,{passive:c}):e.addEventListener(n,r,!1)}function Nf(e,n,r,o,c){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var y=o.tag;if(y===3||y===4){var b=o.stateNode.containerInfo;if(b===c)break;if(y===4)for(y=o.return;y!==null;){var I=y.tag;if((I===3||I===4)&&y.stateNode.containerInfo===c)return;y=y.return}for(;b!==null;){if(y=Bi(b),y===null)return;if(I=y.tag,I===5||I===6||I===26||I===27){o=h=y;continue t}b=b.parentNode}}o=o.return}Kd(function(){var tt=h,dt=Qu(r),xt=[];t:{var rt=Tp.get(e);if(rt!==void 0){var st=ol,se=e;switch(e){case"keypress":if(rl(r)===0)break t;case"keydown":case"keyup":st=W0;break;case"focusin":se="focus",st=ic;break;case"focusout":se="blur",st=ic;break;case"beforeblur":case"afterblur":st=ic;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":st=$d;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":st=N0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":st=j0;break;case Sp:case yp:case Mp:st=I0;break;case Ep:st=K0;break;case"scroll":case"scrollend":st=U0;break;case"wheel":st=J0;break;case"copy":case"cut":case"paste":st=z0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":st=ep;break;case"toggle":case"beforetoggle":st=tx}var ie=(n&4)!==0,ze=!ie&&(e==="scroll"||e==="scrollend"),j=ie?rt!==null?rt+"Capture":null:rt;ie=[];for(var W=tt,Q;W!==null;){var pt=W;if(Q=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||Q===null||j===null||(pt=Bs(W,j),pt!=null&&ie.push(So(W,pt,Q))),ze)break;W=W.return}0<ie.length&&(rt=new st(rt,se,null,r,dt),xt.push({event:rt,listeners:ie}))}}if((n&7)===0){t:{if(rt=e==="mouseover"||e==="pointerover",st=e==="mouseout"||e==="pointerout",rt&&r!==Ku&&(se=r.relatedTarget||r.fromElement)&&(Bi(se)||se[Si]))break t;if((st||rt)&&(rt=dt.window===dt?dt:(rt=dt.ownerDocument)?rt.defaultView||rt.parentWindow:window,st?(se=r.relatedTarget||r.toElement,st=tt,se=se?Bi(se):null,se!==null&&(ze=u(se),ie=se.tag,se!==ze||ie!==5&&ie!==27&&ie!==6)&&(se=null)):(st=null,se=tt),st!==se)){if(ie=$d,pt="onMouseLeave",j="onMouseEnter",W="mouse",(e==="pointerout"||e==="pointerover")&&(ie=ep,pt="onPointerLeave",j="onPointerEnter",W="pointer"),ze=st==null?rt:Za(st),Q=se==null?rt:Za(se),rt=new ie(pt,W+"leave",st,r,dt),rt.target=ze,rt.relatedTarget=Q,pt=null,Bi(dt)===tt&&(ie=new ie(j,W+"enter",se,r,dt),ie.target=Q,ie.relatedTarget=ze,pt=ie),ze=pt,st&&se)e:{for(ie=st,j=se,W=0,Q=ie;Q;Q=as(Q))W++;for(Q=0,pt=j;pt;pt=as(pt))Q++;for(;0<W-Q;)ie=as(ie),W--;for(;0<Q-W;)j=as(j),Q--;for(;W--;){if(ie===j||j!==null&&ie===j.alternate)break e;ie=as(ie),j=as(j)}ie=null}else ie=null;st!==null&&Xg(xt,rt,st,ie,!1),se!==null&&ze!==null&&Xg(xt,ze,se,ie,!0)}}t:{if(rt=tt?Za(tt):window,st=rt.nodeName&&rt.nodeName.toLowerCase(),st==="select"||st==="input"&&rt.type==="file")var Xt=up;else if(op(rt))if(cp)Xt=cx;else{Xt=lx;var xe=ox}else st=rt.nodeName,!st||st.toLowerCase()!=="input"||rt.type!=="checkbox"&&rt.type!=="radio"?tt&&Zu(tt.elementType)&&(Xt=up):Xt=ux;if(Xt&&(Xt=Xt(e,tt))){lp(xt,Xt,r,dt);break t}xe&&xe(e,rt,tt),e==="focusout"&&tt&&rt.type==="number"&&tt.memoizedProps.value!=null&&Rn(rt,"number",rt.value)}switch(xe=tt?Za(tt):window,e){case"focusin":(op(xe)||xe.contentEditable==="true")&&(Or=xe,uc=tt,Ws=null);break;case"focusout":Ws=uc=Or=null;break;case"mousedown":cc=!0;break;case"contextmenu":case"mouseup":case"dragend":cc=!1,vp(xt,r,dt);break;case"selectionchange":if(hx)break;case"keydown":case"keyup":vp(xt,r,dt)}var Qt;if(rc)t:{switch(e){case"compositionstart":var re="onCompositionStart";break t;case"compositionend":re="onCompositionEnd";break t;case"compositionupdate":re="onCompositionUpdate";break t}re=void 0}else Nr?rp(e,r)&&(re="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(re="onCompositionStart");re&&(np&&r.locale!=="ko"&&(Nr||re!=="onCompositionStart"?re==="onCompositionEnd"&&Nr&&(Qt=Qd()):(da=dt,tc="value"in da?da.value:da.textContent,Nr=!0)),xe=jl(tt,re),0<xe.length&&(re=new tp(re,e,null,r,dt),xt.push({event:re,listeners:xe}),Qt?re.data=Qt:(Qt=sp(r),Qt!==null&&(re.data=Qt)))),(Qt=nx?ix(e,r):ax(e,r))&&(re=jl(tt,"onBeforeInput"),0<re.length&&(xe=new tp("onBeforeInput","beforeinput",null,r,dt),xt.push({event:xe,listeners:re}),xe.data=Qt)),jx(xt,e,tt,r,dt)}Vg(xt,n)})}function So(e,n,r){return{instance:e,listener:n,currentTarget:r}}function jl(e,n){for(var r=n+"Capture",o=[];e!==null;){var c=e,h=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||h===null||(c=Bs(e,r),c!=null&&o.unshift(So(e,c,h)),c=Bs(e,n),c!=null&&o.push(So(e,c,h))),e.tag===3)return o;e=e.return}return[]}function as(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Xg(e,n,r,o,c){for(var h=n._reactName,y=[];r!==null&&r!==o;){var b=r,I=b.alternate,tt=b.stateNode;if(b=b.tag,I!==null&&I===o)break;b!==5&&b!==26&&b!==27||tt===null||(I=tt,c?(tt=Bs(r,h),tt!=null&&y.unshift(So(r,tt,I))):c||(tt=Bs(r,h),tt!=null&&y.push(So(r,tt,I)))),r=r.return}y.length!==0&&e.push({event:n,listeners:y})}var Jx=/\r\n?/g,$x=/\u0000|\uFFFD/g;function Wg(e){return(typeof e=="string"?e:""+e).replace(Jx,`
`).replace($x,"")}function qg(e,n){return n=Wg(n),Wg(e)===n}function Zl(){}function Be(e,n,r,o,c,h){switch(r){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||zn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&zn(e,""+o);break;case"className":Gt(e,"class",o);break;case"tabIndex":Gt(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Gt(e,r,o);break;case"style":jd(e,o,h);break;case"data":if(n!=="object"){Gt(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||r!=="href")){e.removeAttribute(r);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(r);break}o=il(""+o),e.setAttribute(r,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(r==="formAction"?(n!=="input"&&Be(e,n,"name",c.name,c,null),Be(e,n,"formEncType",c.formEncType,c,null),Be(e,n,"formMethod",c.formMethod,c,null),Be(e,n,"formTarget",c.formTarget,c,null)):(Be(e,n,"encType",c.encType,c,null),Be(e,n,"method",c.method,c,null),Be(e,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(r);break}o=il(""+o),e.setAttribute(r,o);break;case"onClick":o!=null&&(e.onclick=Zl);break;case"onScroll":o!=null&&Me("scroll",e);break;case"onScrollEnd":o!=null&&Me("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(r=o.__html,r!=null){if(c.children!=null)throw Error(a(60));e.innerHTML=r}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}r=il(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(r,""+o):e.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(r,""):e.removeAttribute(r);break;case"capture":case"download":o===!0?e.setAttribute(r,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(r,o):e.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(r,o):e.removeAttribute(r);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(r):e.setAttribute(r,o);break;case"popover":Me("beforetoggle",e),Me("toggle",e),Pt(e,"popover",o);break;case"xlinkActuate":It(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":It(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":It(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":It(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":It(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":It(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":It(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":It(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":It(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Pt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=w0.get(r)||r,Pt(e,r,o))}}function Of(e,n,r,o,c,h){switch(r){case"style":jd(e,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(r=o.__html,r!=null){if(c.children!=null)throw Error(a(60));e.innerHTML=r}}break;case"children":typeof o=="string"?zn(e,o):(typeof o=="number"||typeof o=="bigint")&&zn(e,""+o);break;case"onScroll":o!=null&&Me("scroll",e);break;case"onScrollEnd":o!=null&&Me("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Zl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!nl.hasOwnProperty(r))t:{if(r[0]==="o"&&r[1]==="n"&&(c=r.endsWith("Capture"),n=r.slice(2,c?r.length-7:void 0),h=e[Je]||null,h=h!=null?h[r]:null,typeof h=="function"&&e.removeEventListener(n,h,c),typeof o=="function")){typeof h!="function"&&h!==null&&(r in e?e[r]=null:e.hasAttribute(r)&&e.removeAttribute(r)),e.addEventListener(n,o,c);break t}r in e?e[r]=o:o===!0?e.setAttribute(r,""):Pt(e,r,o)}}}function bn(e,n,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Me("error",e),Me("load",e);var o=!1,c=!1,h;for(h in r)if(r.hasOwnProperty(h)){var y=r[h];if(y!=null)switch(h){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:Be(e,n,h,y,r,null)}}c&&Be(e,n,"srcSet",r.srcSet,r,null),o&&Be(e,n,"src",r.src,r,null);return;case"input":Me("invalid",e);var b=h=y=c=null,I=null,tt=null;for(o in r)if(r.hasOwnProperty(o)){var dt=r[o];if(dt!=null)switch(o){case"name":c=dt;break;case"type":y=dt;break;case"checked":I=dt;break;case"defaultChecked":tt=dt;break;case"value":h=dt;break;case"defaultValue":b=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(a(137,n));break;default:Be(e,n,o,dt,r,null)}}On(e,h,b,I,tt,y,c,!1),Se(e);return;case"select":Me("invalid",e),o=y=h=null;for(c in r)if(r.hasOwnProperty(c)&&(b=r[c],b!=null))switch(c){case"value":h=b;break;case"defaultValue":y=b;break;case"multiple":o=b;default:Be(e,n,c,b,r,null)}n=h,r=y,e.multiple=!!o,n!=null?$e(e,!!o,n,!1):r!=null&&$e(e,!!o,r,!0);return;case"textarea":Me("invalid",e),h=c=o=null;for(y in r)if(r.hasOwnProperty(y)&&(b=r[y],b!=null))switch(y){case"value":o=b;break;case"defaultValue":c=b;break;case"children":h=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(a(91));break;default:Be(e,n,y,b,r,null)}Dr(e,o,c,h),Se(e);return;case"option":for(I in r)if(r.hasOwnProperty(I)&&(o=r[I],o!=null))switch(I){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Be(e,n,I,o,r,null)}return;case"dialog":Me("beforetoggle",e),Me("toggle",e),Me("cancel",e),Me("close",e);break;case"iframe":case"object":Me("load",e);break;case"video":case"audio":for(o=0;o<xo.length;o++)Me(xo[o],e);break;case"image":Me("error",e),Me("load",e);break;case"details":Me("toggle",e);break;case"embed":case"source":case"link":Me("error",e),Me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(tt in r)if(r.hasOwnProperty(tt)&&(o=r[tt],o!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:Be(e,n,tt,o,r,null)}return;default:if(Zu(n)){for(dt in r)r.hasOwnProperty(dt)&&(o=r[dt],o!==void 0&&Of(e,n,dt,o,r,void 0));return}}for(b in r)r.hasOwnProperty(b)&&(o=r[b],o!=null&&Be(e,n,b,o,r,null))}function tS(e,n,r,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,h=null,y=null,b=null,I=null,tt=null,dt=null;for(st in r){var xt=r[st];if(r.hasOwnProperty(st)&&xt!=null)switch(st){case"checked":break;case"value":break;case"defaultValue":I=xt;default:o.hasOwnProperty(st)||Be(e,n,st,null,o,xt)}}for(var rt in o){var st=o[rt];if(xt=r[rt],o.hasOwnProperty(rt)&&(st!=null||xt!=null))switch(rt){case"type":h=st;break;case"name":c=st;break;case"checked":tt=st;break;case"defaultChecked":dt=st;break;case"value":y=st;break;case"defaultValue":b=st;break;case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(a(137,n));break;default:st!==xt&&Be(e,n,rt,st,o,xt)}}He(e,y,b,I,tt,dt,h,c);return;case"select":st=y=b=rt=null;for(h in r)if(I=r[h],r.hasOwnProperty(h)&&I!=null)switch(h){case"value":break;case"multiple":st=I;default:o.hasOwnProperty(h)||Be(e,n,h,null,o,I)}for(c in o)if(h=o[c],I=r[c],o.hasOwnProperty(c)&&(h!=null||I!=null))switch(c){case"value":rt=h;break;case"defaultValue":b=h;break;case"multiple":y=h;default:h!==I&&Be(e,n,c,h,o,I)}n=b,r=y,o=st,rt!=null?$e(e,!!r,rt,!1):!!o!=!!r&&(n!=null?$e(e,!!r,n,!0):$e(e,!!r,r?[]:"",!1));return;case"textarea":st=rt=null;for(b in r)if(c=r[b],r.hasOwnProperty(b)&&c!=null&&!o.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Be(e,n,b,null,o,c)}for(y in o)if(c=o[y],h=r[y],o.hasOwnProperty(y)&&(c!=null||h!=null))switch(y){case"value":rt=c;break;case"defaultValue":st=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(a(91));break;default:c!==h&&Be(e,n,y,c,o,h)}Mn(e,rt,st);return;case"option":for(var se in r)if(rt=r[se],r.hasOwnProperty(se)&&rt!=null&&!o.hasOwnProperty(se))switch(se){case"selected":e.selected=!1;break;default:Be(e,n,se,null,o,rt)}for(I in o)if(rt=o[I],st=r[I],o.hasOwnProperty(I)&&rt!==st&&(rt!=null||st!=null))switch(I){case"selected":e.selected=rt&&typeof rt!="function"&&typeof rt!="symbol";break;default:Be(e,n,I,rt,o,st)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ie in r)rt=r[ie],r.hasOwnProperty(ie)&&rt!=null&&!o.hasOwnProperty(ie)&&Be(e,n,ie,null,o,rt);for(tt in o)if(rt=o[tt],st=r[tt],o.hasOwnProperty(tt)&&rt!==st&&(rt!=null||st!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(a(137,n));break;default:Be(e,n,tt,rt,o,st)}return;default:if(Zu(n)){for(var ze in r)rt=r[ze],r.hasOwnProperty(ze)&&rt!==void 0&&!o.hasOwnProperty(ze)&&Of(e,n,ze,void 0,o,rt);for(dt in o)rt=o[dt],st=r[dt],!o.hasOwnProperty(dt)||rt===st||rt===void 0&&st===void 0||Of(e,n,dt,rt,o,st);return}}for(var j in r)rt=r[j],r.hasOwnProperty(j)&&rt!=null&&!o.hasOwnProperty(j)&&Be(e,n,j,null,o,rt);for(xt in o)rt=o[xt],st=r[xt],!o.hasOwnProperty(xt)||rt===st||rt==null&&st==null||Be(e,n,xt,rt,o,st)}var Pf=null,If=null;function Kl(e){return e.nodeType===9?e:e.ownerDocument}function Yg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function jg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Bf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var zf=null;function eS(){var e=window.event;return e&&e.type==="popstate"?e===zf?!1:(zf=e,!0):(zf=null,!1)}var Zg=typeof setTimeout=="function"?setTimeout:void 0,nS=typeof clearTimeout=="function"?clearTimeout:void 0,Kg=typeof Promise=="function"?Promise:void 0,iS=typeof queueMicrotask=="function"?queueMicrotask:typeof Kg<"u"?function(e){return Kg.resolve(null).then(e).catch(aS)}:Zg;function aS(e){setTimeout(function(){throw e})}function wa(e){return e==="head"}function Qg(e,n){var r=n,o=0,c=0;do{var h=r.nextSibling;if(e.removeChild(r),h&&h.nodeType===8)if(r=h.data,r==="/$"){if(0<o&&8>o){r=o;var y=e.ownerDocument;if(r&1&&yo(y.documentElement),r&2&&yo(y.body),r&4)for(r=y.head,yo(r),y=r.firstChild;y;){var b=y.nextSibling,I=y.nodeName;y[yi]||I==="SCRIPT"||I==="STYLE"||I==="LINK"&&y.rel.toLowerCase()==="stylesheet"||r.removeChild(y),y=b}}if(c===0){e.removeChild(h),wo(n);return}c--}else r==="$"||r==="$?"||r==="$!"?c++:o=r.charCodeAt(0)-48;else o=0;r=h}while(r);wo(n)}function Ff(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var r=n;switch(n=n.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":Ff(r),wr(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}e.removeChild(r)}}function rS(e,n,r,o){for(;e.nodeType===1;){var c=r;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[yi])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var h=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=di(e.nextSibling),e===null)break}return null}function sS(e,n,r){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!r||(e=di(e.nextSibling),e===null))return null;return e}function Hf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function oS(e,n){var r=e.ownerDocument;if(e.data!=="$?"||r.readyState==="complete")n();else{var o=function(){n(),r.removeEventListener("DOMContentLoaded",o)};r.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function di(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var Gf=null;function Jg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(n===0)return e;n--}else r==="/$"&&n++}e=e.previousSibling}return null}function $g(e,n,r){switch(n=Kl(r),e){case"html":if(e=n.documentElement,!e)throw Error(a(452));return e;case"head":if(e=n.head,!e)throw Error(a(453));return e;case"body":if(e=n.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function yo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);wr(e)}var oi=new Map,t_=new Set;function Ql(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Qi=Z.d;Z.d={f:lS,r:uS,D:cS,C:fS,L:hS,m:dS,X:mS,S:pS,M:gS};function lS(){var e=Qi.f(),n=Vl();return e||n}function uS(e){var n=fa(e);n!==null&&n.tag===5&&n.type==="form"?Sm(n):Qi.r(e)}var rs=typeof document>"u"?null:document;function e_(e,n,r){var o=rs;if(o&&typeof n=="string"&&n){var c=gn(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof r=="string"&&(c+='[crossorigin="'+r+'"]'),t_.has(c)||(t_.add(c),e={rel:e,crossOrigin:r,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),bn(n,"link",e),on(n),o.head.appendChild(n)))}}function cS(e){Qi.D(e),e_("dns-prefetch",e,null)}function fS(e,n){Qi.C(e,n),e_("preconnect",e,n)}function hS(e,n,r){Qi.L(e,n,r);var o=rs;if(o&&e&&n){var c='link[rel="preload"][as="'+gn(n)+'"]';n==="image"&&r&&r.imageSrcSet?(c+='[imagesrcset="'+gn(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(c+='[imagesizes="'+gn(r.imageSizes)+'"]')):c+='[href="'+gn(e)+'"]';var h=c;switch(n){case"style":h=ss(e);break;case"script":h=os(e)}oi.has(h)||(e=g({rel:"preload",href:n==="image"&&r&&r.imageSrcSet?void 0:e,as:n},r),oi.set(h,e),o.querySelector(c)!==null||n==="style"&&o.querySelector(Mo(h))||n==="script"&&o.querySelector(Eo(h))||(n=o.createElement("link"),bn(n,"link",e),on(n),o.head.appendChild(n)))}}function dS(e,n){Qi.m(e,n);var r=rs;if(r&&e){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+gn(o)+'"][href="'+gn(e)+'"]',h=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=os(e)}if(!oi.has(h)&&(e=g({rel:"modulepreload",href:e},n),oi.set(h,e),r.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(Eo(h)))return}o=r.createElement("link"),bn(o,"link",e),on(o),r.head.appendChild(o)}}}function pS(e,n,r){Qi.S(e,n,r);var o=rs;if(o&&e){var c=ha(o).hoistableStyles,h=ss(e);n=n||"default";var y=c.get(h);if(!y){var b={loading:0,preload:null};if(y=o.querySelector(Mo(h)))b.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},r),(r=oi.get(h))&&Vf(e,r);var I=y=o.createElement("link");on(I),bn(I,"link",e),I._p=new Promise(function(tt,dt){I.onload=tt,I.onerror=dt}),I.addEventListener("load",function(){b.loading|=1}),I.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Jl(y,n,o)}y={type:"stylesheet",instance:y,count:1,state:b},c.set(h,y)}}}function mS(e,n){Qi.X(e,n);var r=rs;if(r&&e){var o=ha(r).hoistableScripts,c=os(e),h=o.get(c);h||(h=r.querySelector(Eo(c)),h||(e=g({src:e,async:!0},n),(n=oi.get(c))&&kf(e,n),h=r.createElement("script"),on(h),bn(h,"link",e),r.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(c,h))}}function gS(e,n){Qi.M(e,n);var r=rs;if(r&&e){var o=ha(r).hoistableScripts,c=os(e),h=o.get(c);h||(h=r.querySelector(Eo(c)),h||(e=g({src:e,async:!0,type:"module"},n),(n=oi.get(c))&&kf(e,n),h=r.createElement("script"),on(h),bn(h,"link",e),r.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(c,h))}}function n_(e,n,r,o){var c=(c=nt.current)?Ql(c):null;if(!c)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(n=ss(r.href),r=ha(c).hoistableStyles,o=r.get(n),o||(o={type:"style",instance:null,count:0,state:null},r.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){e=ss(r.href);var h=ha(c).hoistableStyles,y=h.get(e);if(y||(c=c.ownerDocument||c,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,y),(h=c.querySelector(Mo(e)))&&!h._p&&(y.instance=h,y.state.loading=5),oi.has(e)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},oi.set(e,r),h||_S(c,e,r,y.state))),n&&o===null)throw Error(a(528,""));return y}if(n&&o!==null)throw Error(a(529,""));return null;case"script":return n=r.async,r=r.src,typeof r=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=os(r),r=ha(c).hoistableScripts,o=r.get(n),o||(o={type:"script",instance:null,count:0,state:null},r.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function ss(e){return'href="'+gn(e)+'"'}function Mo(e){return'link[rel="stylesheet"]['+e+"]"}function i_(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function _S(e,n,r,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),bn(n,"link",r),on(n),e.head.appendChild(n))}function os(e){return'[src="'+gn(e)+'"]'}function Eo(e){return"script[async]"+e}function a_(e,n,r){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+gn(r.href)+'"]');if(o)return n.instance=o,on(o),o;var c=g({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),on(o),bn(o,"style",c),Jl(o,r.precedence,e),n.instance=o;case"stylesheet":c=ss(r.href);var h=e.querySelector(Mo(c));if(h)return n.state.loading|=4,n.instance=h,on(h),h;o=i_(r),(c=oi.get(c))&&Vf(o,c),h=(e.ownerDocument||e).createElement("link"),on(h);var y=h;return y._p=new Promise(function(b,I){y.onload=b,y.onerror=I}),bn(h,"link",o),n.state.loading|=4,Jl(h,r.precedence,e),n.instance=h;case"script":return h=os(r.src),(c=e.querySelector(Eo(h)))?(n.instance=c,on(c),c):(o=r,(c=oi.get(h))&&(o=g({},r),kf(o,c)),e=e.ownerDocument||e,c=e.createElement("script"),on(c),bn(c,"link",o),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(a(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Jl(o,r.precedence,e));return n.instance}function Jl(e,n,r){for(var o=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,h=c,y=0;y<o.length;y++){var b=o[y];if(b.dataset.precedence===n)h=b;else if(h!==c)break}h?h.parentNode.insertBefore(e,h.nextSibling):(n=r.nodeType===9?r.head:r,n.insertBefore(e,n.firstChild))}function Vf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function kf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var $l=null;function r_(e,n,r){if($l===null){var o=new Map,c=$l=new Map;c.set(r,o)}else c=$l,o=c.get(r),o||(o=new Map,c.set(r,o));if(o.has(e))return o;for(o.set(e,null),r=r.getElementsByTagName(e),c=0;c<r.length;c++){var h=r[c];if(!(h[yi]||h[fn]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var y=h.getAttribute(n)||"";y=e+y;var b=o.get(y);b?b.push(h):o.set(y,[h])}}return o}function s_(e,n,r){e=e.ownerDocument||e,e.head.insertBefore(r,n==="title"?e.querySelector("head > title"):null)}function vS(e,n,r){if(r===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function o_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var To=null;function xS(){}function SS(e,n,r){if(To===null)throw Error(a(475));var o=To;if(n.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=ss(r.href),h=e.querySelector(Mo(c));if(h){e=h._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=tu.bind(o),e.then(o,o)),n.state.loading|=4,n.instance=h,on(h);return}h=e.ownerDocument||e,r=i_(r),(c=oi.get(c))&&Vf(r,c),h=h.createElement("link"),on(h);var y=h;y._p=new Promise(function(b,I){y.onload=b,y.onerror=I}),bn(h,"link",r),n.instance=h}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=tu.bind(o),e.addEventListener("load",n),e.addEventListener("error",n))}}function yS(){if(To===null)throw Error(a(475));var e=To;return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r)}}:null}function tu(){if(this.count--,this.count===0){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var eu=null;function Xf(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,eu=new Map,n.forEach(MS,e),eu=null,tu.call(e))}function MS(e,n){if(!(n.state.loading&4)){var r=eu.get(e);if(r)var o=r.get(null);else{r=new Map,eu.set(e,r);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<c.length;h++){var y=c[h];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(r.set(y.dataset.precedence,y),o=y)}o&&r.set(null,o)}c=n.instance,y=c.getAttribute("data-precedence"),h=r.get(y)||o,h===o&&r.set(null,c),r.set(y,c),this.count++,o=tu.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),h?h.parentNode.insertBefore(c,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var bo={$$typeof:L,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function ES(e,n,r,o,c,h,y,b){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Rt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rt(0),this.hiddenUpdates=Rt(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=h,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function l_(e,n,r,o,c,h,y,b,I,tt,dt,xt){return e=new ES(e,n,r,y,b,I,tt,xt),n=1,h===!0&&(n|=24),h=Yn(3,null,null,n),e.current=h,h.stateNode=e,n=Tc(),n.refCount++,e.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:r,cache:n},Cc(h),e}function u_(e){return e?(e=zr,e):zr}function c_(e,n,r,o,c,h){c=u_(c),o.context===null?o.context=c:o.pendingContext=c,o=ga(n),o.payload={element:r},h=h===void 0?null:h,h!==null&&(o.callback=h),r=_a(e,o,n),r!==null&&(Jn(r,e,n),to(r,e,n))}function f_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<n?r:n}}function Wf(e,n){f_(e,n),(e=e.alternate)&&f_(e,n)}function h_(e){if(e.tag===13){var n=Br(e,67108864);n!==null&&Jn(n,e,67108864),Wf(e,67108864)}}var nu=!0;function TS(e,n,r,o){var c=B.T;B.T=null;var h=Z.p;try{Z.p=2,qf(e,n,r,o)}finally{Z.p=h,B.T=c}}function bS(e,n,r,o){var c=B.T;B.T=null;var h=Z.p;try{Z.p=8,qf(e,n,r,o)}finally{Z.p=h,B.T=c}}function qf(e,n,r,o){if(nu){var c=Yf(o);if(c===null)Nf(e,n,o,iu,r),p_(e,o);else if(RS(c,e,n,r,o))o.stopPropagation();else if(p_(e,o),n&4&&-1<AS.indexOf(e)){for(;c!==null;){var h=fa(c);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var y=jt(h.pendingLanes);if(y!==0){var b=h;for(b.pendingLanes|=2,b.entangledLanes|=2;y;){var I=1<<31-Ht(y);b.entanglements[1]|=I,y&=~I}Ai(h),(Ne&6)===0&&(Hl=zt()+500,vo(0))}}break;case 13:b=Br(h,2),b!==null&&Jn(b,h,2),Vl(),Wf(h,2)}if(h=Yf(o),h===null&&Nf(e,n,o,iu,r),h===c)break;c=h}c!==null&&o.stopPropagation()}else Nf(e,n,o,null,r)}}function Yf(e){return e=Qu(e),jf(e)}var iu=null;function jf(e){if(iu=null,e=Bi(e),e!==null){var n=u(e);if(n===null)e=null;else{var r=n.tag;if(r===13){if(e=f(n),e!==null)return e;e=null}else if(r===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return iu=e,null}function d_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Le()){case kt:return 2;case le:return 8;case Xe:case Ve:return 32;case O:return 268435456;default:return 32}default:return 32}}var Zf=!1,Da=null,Ua=null,La=null,Ao=new Map,Ro=new Map,Na=[],AS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function p_(e,n){switch(e){case"focusin":case"focusout":Da=null;break;case"dragenter":case"dragleave":Ua=null;break;case"mouseover":case"mouseout":La=null;break;case"pointerover":case"pointerout":Ao.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ro.delete(n.pointerId)}}function Co(e,n,r,o,c,h){return e===null||e.nativeEvent!==h?(e={blockedOn:n,domEventName:r,eventSystemFlags:o,nativeEvent:h,targetContainers:[c]},n!==null&&(n=fa(n),n!==null&&h_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function RS(e,n,r,o,c){switch(n){case"focusin":return Da=Co(Da,e,n,r,o,c),!0;case"dragenter":return Ua=Co(Ua,e,n,r,o,c),!0;case"mouseover":return La=Co(La,e,n,r,o,c),!0;case"pointerover":var h=c.pointerId;return Ao.set(h,Co(Ao.get(h)||null,e,n,r,o,c)),!0;case"gotpointercapture":return h=c.pointerId,Ro.set(h,Co(Ro.get(h)||null,e,n,r,o,c)),!0}return!1}function m_(e){var n=Bi(e.target);if(n!==null){var r=u(n);if(r!==null){if(n=r.tag,n===13){if(n=f(r),n!==null){e.blockedOn=n,yn(e.priority,function(){if(r.tag===13){var o=Qn();o=Kt(o);var c=Br(r,o);c!==null&&Jn(c,r,o),Wf(r,o)}});return}}else if(n===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function au(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var r=Yf(e.nativeEvent);if(r===null){r=e.nativeEvent;var o=new r.constructor(r.type,r);Ku=o,r.target.dispatchEvent(o),Ku=null}else return n=fa(r),n!==null&&h_(n),e.blockedOn=r,!1;n.shift()}return!0}function g_(e,n,r){au(e)&&r.delete(n)}function CS(){Zf=!1,Da!==null&&au(Da)&&(Da=null),Ua!==null&&au(Ua)&&(Ua=null),La!==null&&au(La)&&(La=null),Ao.forEach(g_),Ro.forEach(g_)}function ru(e,n){e.blockedOn===n&&(e.blockedOn=null,Zf||(Zf=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,CS)))}var su=null;function __(e){su!==e&&(su=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){su===e&&(su=null);for(var n=0;n<e.length;n+=3){var r=e[n],o=e[n+1],c=e[n+2];if(typeof o!="function"){if(jf(o||r)===null)continue;break}var h=fa(r);h!==null&&(e.splice(n,3),n-=3,Yc(h,{pending:!0,data:c,method:r.method,action:o},o,c))}}))}function wo(e){function n(I){return ru(I,e)}Da!==null&&ru(Da,e),Ua!==null&&ru(Ua,e),La!==null&&ru(La,e),Ao.forEach(n),Ro.forEach(n);for(var r=0;r<Na.length;r++){var o=Na[r];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Na.length&&(r=Na[0],r.blockedOn===null);)m_(r),r.blockedOn===null&&Na.shift();if(r=(e.ownerDocument||e).$$reactFormReplay,r!=null)for(o=0;o<r.length;o+=3){var c=r[o],h=r[o+1],y=c[Je]||null;if(typeof h=="function")y||__(r);else if(y){var b=null;if(h&&h.hasAttribute("formAction")){if(c=h,y=h[Je]||null)b=y.formAction;else if(jf(c)!==null)continue}else b=y.action;typeof b=="function"?r[o+1]=b:(r.splice(o,3),o-=3),__(r)}}}function Kf(e){this._internalRoot=e}ou.prototype.render=Kf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(a(409));var r=n.current,o=Qn();c_(r,o,e,n,null,null)},ou.prototype.unmount=Kf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;c_(e.current,2,null,e,null,null),Vl(),n[Si]=null}};function ou(e){this._internalRoot=e}ou.prototype.unstable_scheduleHydration=function(e){if(e){var n=_e();e={blockedOn:null,target:e,priority:n};for(var r=0;r<Na.length&&n!==0&&n<Na[r].priority;r++);Na.splice(r,0,e),r===0&&m_(e)}};var v_=t.version;if(v_!=="19.1.1")throw Error(a(527,v_,"19.1.1"));Z.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=m(n),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var wS={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lu.isDisabled&&lu.supportsFiber)try{ht=lu.inject(wS),mt=lu}catch{}}return Uo.createRoot=function(e,n){if(!l(e))throw Error(a(299));var r=!1,o="",c=Om,h=Pm,y=Im,b=null;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(b=n.unstable_transitionCallbacks)),n=l_(e,1,!1,null,null,r,o,c,h,y,b,null),e[Si]=n.current,Lf(e),new Kf(n)},Uo.hydrateRoot=function(e,n,r){if(!l(e))throw Error(a(299));var o=!1,c="",h=Om,y=Pm,b=Im,I=null,tt=null;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onUncaughtError!==void 0&&(h=r.onUncaughtError),r.onCaughtError!==void 0&&(y=r.onCaughtError),r.onRecoverableError!==void 0&&(b=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(I=r.unstable_transitionCallbacks),r.formState!==void 0&&(tt=r.formState)),n=l_(e,1,!0,n,r??null,o,c,h,y,b,I,tt),n.context=u_(null),r=n.current,o=Qn(),o=Kt(o),c=ga(o),c.callback=null,_a(r,c,o),r=o,n.current.lanes=r,Ot(n,r),Ai(n),e[Si]=n.current,Lf(e),new ou(n)},Uo.version="19.1.1",Uo}var C_;function FS(){if(C_)return $f.exports;C_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),$f.exports=zS(),$f.exports}var HS=FS();/**
 * react-router v7.9.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var w_="popstate";function GS(s={}){function t(a,l){let{pathname:u,search:f,hash:d}=a.location;return Bh("",{pathname:u,search:f,hash:d},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function i(a,l){return typeof l=="string"?l:Ho(l)}return kS(t,i,null,s)}function Qe(s,t){if(s===!1||s===null||typeof s>"u")throw new Error(t)}function Ni(s,t){if(!s){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function VS(){return Math.random().toString(36).substring(2,10)}function D_(s,t){return{usr:s.state,key:s.key,idx:t}}function Bh(s,t,i=null,a){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof t=="string"?Ls(t):t,state:i,key:t&&t.key||a||VS()}}function Ho({pathname:s="/",search:t="",hash:i=""}){return t&&t!=="?"&&(s+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(s+=i.charAt(0)==="#"?i:"#"+i),s}function Ls(s){let t={};if(s){let i=s.indexOf("#");i>=0&&(t.hash=s.substring(i),s=s.substring(0,i));let a=s.indexOf("?");a>=0&&(t.search=s.substring(a),s=s.substring(0,a)),s&&(t.pathname=s)}return t}function kS(s,t,i,a={}){let{window:l=document.defaultView,v5Compat:u=!1}=a,f=l.history,d="POP",m=null,p=g();p==null&&(p=0,f.replaceState({...f.state,idx:p},""));function g(){return(f.state||{idx:null}).idx}function _(){d="POP";let S=g(),v=S==null?null:S-p;p=S,m&&m({action:d,location:C.location,delta:v})}function x(S,v){d="PUSH";let U=Bh(C.location,S,v);p=g()+1;let L=D_(U,p),D=C.createHref(U);try{f.pushState(L,"",D)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;l.location.assign(D)}u&&m&&m({action:d,location:C.location,delta:1})}function M(S,v){d="REPLACE";let U=Bh(C.location,S,v);p=g();let L=D_(U,p),D=C.createHref(U);f.replaceState(L,"",D),u&&m&&m({action:d,location:C.location,delta:0})}function E(S){return XS(S)}let C={get action(){return d},get location(){return s(l,f)},listen(S){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(w_,_),m=S,()=>{l.removeEventListener(w_,_),m=null}},createHref(S){return t(l,S)},createURL:E,encodeLocation(S){let v=E(S);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:x,replace:M,go(S){return f.go(S)}};return C}function XS(s,t=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),Qe(i,"No window.location.(origin|href) available to create URL");let a=typeof s=="string"?s:Ho(s);return a=a.replace(/ $/,"%20"),!t&&a.startsWith("//")&&(a=i+a),new URL(a,i)}function Ov(s,t,i="/"){return WS(s,t,i,!1)}function WS(s,t,i,a){let l=typeof t=="string"?Ls(t):t,u=ua(l.pathname||"/",i);if(u==null)return null;let f=Pv(s);qS(f);let d=null;for(let m=0;d==null&&m<f.length;++m){let p=iy(u);d=ey(f[m],p,a)}return d}function Pv(s,t=[],i=[],a="",l=!1){let u=(f,d,m=l,p)=>{let g={relativePath:p===void 0?f.path||"":p,caseSensitive:f.caseSensitive===!0,childrenIndex:d,route:f};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(a)&&m)return;Qe(g.relativePath.startsWith(a),`Absolute route path "${g.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(a.length)}let _=oa([a,g.relativePath]),x=i.concat(g);f.children&&f.children.length>0&&(Qe(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${_}".`),Pv(f.children,t,x,_,m)),!(f.path==null&&!f.index)&&t.push({path:_,score:$S(_,f.index),routesMeta:x})};return s.forEach((f,d)=>{if(f.path===""||!f.path?.includes("?"))u(f,d);else for(let m of Iv(f.path))u(f,d,!0,m)}),t}function Iv(s){let t=s.split("/");if(t.length===0)return[];let[i,...a]=t,l=i.endsWith("?"),u=i.replace(/\?$/,"");if(a.length===0)return l?[u,""]:[u];let f=Iv(a.join("/")),d=[];return d.push(...f.map(m=>m===""?u:[u,m].join("/"))),l&&d.push(...f),d.map(m=>s.startsWith("/")&&m===""?"/":m)}function qS(s){s.sort((t,i)=>t.score!==i.score?i.score-t.score:ty(t.routesMeta.map(a=>a.childrenIndex),i.routesMeta.map(a=>a.childrenIndex)))}var YS=/^:[\w-]+$/,jS=3,ZS=2,KS=1,QS=10,JS=-2,U_=s=>s==="*";function $S(s,t){let i=s.split("/"),a=i.length;return i.some(U_)&&(a+=JS),t&&(a+=ZS),i.filter(l=>!U_(l)).reduce((l,u)=>l+(YS.test(u)?jS:u===""?KS:QS),a)}function ty(s,t){return s.length===t.length&&s.slice(0,-1).every((a,l)=>a===t[l])?s[s.length-1]-t[t.length-1]:0}function ey(s,t,i=!1){let{routesMeta:a}=s,l={},u="/",f=[];for(let d=0;d<a.length;++d){let m=a[d],p=d===a.length-1,g=u==="/"?t:t.slice(u.length)||"/",_=Hu({path:m.relativePath,caseSensitive:m.caseSensitive,end:p},g),x=m.route;if(!_&&p&&i&&!a[a.length-1].route.index&&(_=Hu({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},g)),!_)return null;Object.assign(l,_.params),f.push({params:l,pathname:oa([u,_.pathname]),pathnameBase:oy(oa([u,_.pathnameBase])),route:x}),_.pathnameBase!=="/"&&(u=oa([u,_.pathnameBase]))}return f}function Hu(s,t){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[i,a]=ny(s.path,s.caseSensitive,s.end),l=t.match(i);if(!l)return null;let u=l[0],f=u.replace(/(.)\/+$/,"$1"),d=l.slice(1);return{params:a.reduce((p,{paramName:g,isOptional:_},x)=>{if(g==="*"){let E=d[x]||"";f=u.slice(0,u.length-E.length).replace(/(.)\/+$/,"$1")}const M=d[x];return _&&!M?p[g]=void 0:p[g]=(M||"").replace(/%2F/g,"/"),p},{}),pathname:u,pathnameBase:f,pattern:s}}function ny(s,t=!1,i=!0){Ni(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let a=[],l="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,d,m)=>(a.push({paramName:d,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return s.endsWith("*")?(a.push({paramName:"*"}),l+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":s!==""&&s!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),a]}function iy(s){try{return s.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Ni(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),s}}function ua(s,t){if(t==="/")return s;if(!s.toLowerCase().startsWith(t.toLowerCase()))return null;let i=t.endsWith("/")?t.length-1:t.length,a=s.charAt(i);return a&&a!=="/"?null:s.slice(i)||"/"}function ay(s,t="/"){let{pathname:i,search:a="",hash:l=""}=typeof s=="string"?Ls(s):s;return{pathname:i?i.startsWith("/")?i:ry(i,t):t,search:ly(a),hash:uy(l)}}function ry(s,t){let i=t.replace(/\/+$/,"").split("/");return s.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function ih(s,t,i,a){return`Cannot include a '${s}' character in a manually specified \`to.${t}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function sy(s){return s.filter((t,i)=>i===0||t.route.path&&t.route.path.length>0)}function Bv(s){let t=sy(s);return t.map((i,a)=>a===t.length-1?i.pathname:i.pathnameBase)}function zv(s,t,i,a=!1){let l;typeof s=="string"?l=Ls(s):(l={...s},Qe(!l.pathname||!l.pathname.includes("?"),ih("?","pathname","search",l)),Qe(!l.pathname||!l.pathname.includes("#"),ih("#","pathname","hash",l)),Qe(!l.search||!l.search.includes("#"),ih("#","search","hash",l)));let u=s===""||l.pathname==="",f=u?"/":l.pathname,d;if(f==null)d=i;else{let _=t.length-1;if(!a&&f.startsWith("..")){let x=f.split("/");for(;x[0]==="..";)x.shift(),_-=1;l.pathname=x.join("/")}d=_>=0?t[_]:"/"}let m=ay(l,d),p=f&&f!=="/"&&f.endsWith("/"),g=(u||f===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(p||g)&&(m.pathname+="/"),m}var oa=s=>s.join("/").replace(/\/\/+/g,"/"),oy=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),ly=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,uy=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function cy(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}var Fv=["POST","PUT","PATCH","DELETE"];new Set(Fv);var fy=["GET",...Fv];new Set(fy);var Ns=St.createContext(null);Ns.displayName="DataRouter";var Xu=St.createContext(null);Xu.displayName="DataRouterState";St.createContext(!1);var Hv=St.createContext({isTransitioning:!1});Hv.displayName="ViewTransition";var hy=St.createContext(new Map);hy.displayName="Fetchers";var dy=St.createContext(null);dy.displayName="Await";var Ii=St.createContext(null);Ii.displayName="Navigation";var qo=St.createContext(null);qo.displayName="Location";var ca=St.createContext({outlet:null,matches:[],isDataRoute:!1});ca.displayName="Route";var wd=St.createContext(null);wd.displayName="RouteError";function py(s,{relative:t}={}){Qe(Yo(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:a}=St.useContext(Ii),{hash:l,pathname:u,search:f}=jo(s,{relative:t}),d=u;return i!=="/"&&(d=u==="/"?i:oa([i,u])),a.createHref({pathname:d,search:f,hash:l})}function Yo(){return St.useContext(qo)!=null}function Ar(){return Qe(Yo(),"useLocation() may be used only in the context of a <Router> component."),St.useContext(qo).location}var Gv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Vv(s){St.useContext(Ii).static||St.useLayoutEffect(s)}function kv(){let{isDataRoute:s}=St.useContext(ca);return s?Ry():my()}function my(){Qe(Yo(),"useNavigate() may be used only in the context of a <Router> component.");let s=St.useContext(Ns),{basename:t,navigator:i}=St.useContext(Ii),{matches:a}=St.useContext(ca),{pathname:l}=Ar(),u=JSON.stringify(Bv(a)),f=St.useRef(!1);return Vv(()=>{f.current=!0}),St.useCallback((m,p={})=>{if(Ni(f.current,Gv),!f.current)return;if(typeof m=="number"){i.go(m);return}let g=zv(m,JSON.parse(u),l,p.relative==="path");s==null&&t!=="/"&&(g.pathname=g.pathname==="/"?t:oa([t,g.pathname])),(p.replace?i.replace:i.push)(g,p.state,p)},[t,i,u,l,s])}St.createContext(null);function jo(s,{relative:t}={}){let{matches:i}=St.useContext(ca),{pathname:a}=Ar(),l=JSON.stringify(Bv(i));return St.useMemo(()=>zv(s,JSON.parse(l),a,t==="path"),[s,l,a,t])}function gy(s,t){return Xv(s,t)}function Xv(s,t,i,a,l){Qe(Yo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:u}=St.useContext(Ii),{matches:f}=St.useContext(ca),d=f[f.length-1],m=d?d.params:{},p=d?d.pathname:"/",g=d?d.pathnameBase:"/",_=d&&d.route;{let U=_&&_.path||"";Wv(p,!_||U.endsWith("*")||U.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${U}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${U}"> to <Route path="${U==="/"?"*":`${U}/*`}">.`)}let x=Ar(),M;if(t){let U=typeof t=="string"?Ls(t):t;Qe(g==="/"||U.pathname?.startsWith(g),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${U.pathname}" was given in the \`location\` prop.`),M=U}else M=x;let E=M.pathname||"/",C=E;if(g!=="/"){let U=g.replace(/^\//,"").split("/");C="/"+E.replace(/^\//,"").split("/").slice(U.length).join("/")}let S=Ov(s,{pathname:C});Ni(_||S!=null,`No routes matched location "${M.pathname}${M.search}${M.hash}" `),Ni(S==null||S[S.length-1].route.element!==void 0||S[S.length-1].route.Component!==void 0||S[S.length-1].route.lazy!==void 0,`Matched leaf route at location "${M.pathname}${M.search}${M.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let v=yy(S&&S.map(U=>Object.assign({},U,{params:Object.assign({},m,U.params),pathname:oa([g,u.encodeLocation?u.encodeLocation(U.pathname).pathname:U.pathname]),pathnameBase:U.pathnameBase==="/"?g:oa([g,u.encodeLocation?u.encodeLocation(U.pathnameBase).pathname:U.pathnameBase])})),f,i,a,l);return t&&v?St.createElement(qo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...M},navigationType:"POP"}},v):v}function _y(){let s=Ay(),t=cy(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),i=s instanceof Error?s.stack:null,a="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:a},u={padding:"2px 4px",backgroundColor:a},f=null;return console.error("Error handled by React Router default ErrorBoundary:",s),f=St.createElement(St.Fragment,null,St.createElement("p",null,"💿 Hey developer 👋"),St.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",St.createElement("code",{style:u},"ErrorBoundary")," or"," ",St.createElement("code",{style:u},"errorElement")," prop on your route.")),St.createElement(St.Fragment,null,St.createElement("h2",null,"Unexpected Application Error!"),St.createElement("h3",{style:{fontStyle:"italic"}},t),i?St.createElement("pre",{style:l},i):null,f)}var vy=St.createElement(_y,null),xy=class extends St.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,t){return t.location!==s.location||t.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:t.error,location:t.location,revalidation:s.revalidation||t.revalidation}}componentDidCatch(s,t){this.props.unstable_onError?this.props.unstable_onError(s,t):console.error("React Router caught the following error during render",s)}render(){return this.state.error!==void 0?St.createElement(ca.Provider,{value:this.props.routeContext},St.createElement(wd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Sy({routeContext:s,match:t,children:i}){let a=St.useContext(Ns);return a&&a.static&&a.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=t.route.id),St.createElement(ca.Provider,{value:s},i)}function yy(s,t=[],i=null,a=null,l=null){if(s==null){if(!i)return null;if(i.errors)s=i.matches;else if(t.length===0&&!i.initialized&&i.matches.length>0)s=i.matches;else return null}let u=s,f=i?.errors;if(f!=null){let p=u.findIndex(g=>g.route.id&&f?.[g.route.id]!==void 0);Qe(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),u=u.slice(0,Math.min(u.length,p+1))}let d=!1,m=-1;if(i)for(let p=0;p<u.length;p++){let g=u[p];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(m=p),g.route.id){let{loaderData:_,errors:x}=i,M=g.route.loader&&!_.hasOwnProperty(g.route.id)&&(!x||x[g.route.id]===void 0);if(g.route.lazy||M){d=!0,m>=0?u=u.slice(0,m+1):u=[u[0]];break}}}return u.reduceRight((p,g,_)=>{let x,M=!1,E=null,C=null;i&&(x=f&&g.route.id?f[g.route.id]:void 0,E=g.route.errorElement||vy,d&&(m<0&&_===0?(Wv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),M=!0,C=null):m===_&&(M=!0,C=g.route.hydrateFallbackElement||null)));let S=t.concat(u.slice(0,_+1)),v=()=>{let U;return x?U=E:M?U=C:g.route.Component?U=St.createElement(g.route.Component,null):g.route.element?U=g.route.element:U=p,St.createElement(Sy,{match:g,routeContext:{outlet:p,matches:S,isDataRoute:i!=null},children:U})};return i&&(g.route.ErrorBoundary||g.route.errorElement||_===0)?St.createElement(xy,{location:i.location,revalidation:i.revalidation,component:E,error:x,children:v(),routeContext:{outlet:null,matches:S,isDataRoute:!0},unstable_onError:a}):v()},null)}function Dd(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function My(s){let t=St.useContext(Ns);return Qe(t,Dd(s)),t}function Ey(s){let t=St.useContext(Xu);return Qe(t,Dd(s)),t}function Ty(s){let t=St.useContext(ca);return Qe(t,Dd(s)),t}function Ud(s){let t=Ty(s),i=t.matches[t.matches.length-1];return Qe(i.route.id,`${s} can only be used on routes that contain a unique "id"`),i.route.id}function by(){return Ud("useRouteId")}function Ay(){let s=St.useContext(wd),t=Ey("useRouteError"),i=Ud("useRouteError");return s!==void 0?s:t.errors?.[i]}function Ry(){let{router:s}=My("useNavigate"),t=Ud("useNavigate"),i=St.useRef(!1);return Vv(()=>{i.current=!0}),St.useCallback(async(l,u={})=>{Ni(i.current,Gv),i.current&&(typeof l=="number"?s.navigate(l):await s.navigate(l,{fromRouteId:t,...u}))},[s,t])}var L_={};function Wv(s,t,i){!t&&!L_[s]&&(L_[s]=!0,Ni(!1,i))}St.memo(Cy);function Cy({routes:s,future:t,state:i,unstable_onError:a}){return Xv(s,void 0,i,a,t)}function ia(s){Qe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function wy({basename:s="/",children:t=null,location:i,navigationType:a="POP",navigator:l,static:u=!1}){Qe(!Yo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=s.replace(/^\/*/,"/"),d=St.useMemo(()=>({basename:f,navigator:l,static:u,future:{}}),[f,l,u]);typeof i=="string"&&(i=Ls(i));let{pathname:m="/",search:p="",hash:g="",state:_=null,key:x="default"}=i,M=St.useMemo(()=>{let E=ua(m,f);return E==null?null:{location:{pathname:E,search:p,hash:g,state:_,key:x},navigationType:a}},[f,m,p,g,_,x,a]);return Ni(M!=null,`<Router basename="${f}"> is not able to match the URL "${m}${p}${g}" because it does not start with the basename, so the <Router> won't render anything.`),M==null?null:St.createElement(Ii.Provider,{value:d},St.createElement(qo.Provider,{children:t,value:M}))}function Dy({children:s,location:t}){return gy(zh(s),t)}function zh(s,t=[]){let i=[];return St.Children.forEach(s,(a,l)=>{if(!St.isValidElement(a))return;let u=[...t,l];if(a.type===St.Fragment){i.push.apply(i,zh(a.props.children,u));return}Qe(a.type===ia,`[${typeof a.type=="string"?a.type:a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Qe(!a.props.index||!a.props.children,"An index route cannot have child routes.");let f={id:a.props.id||u.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,hydrateFallbackElement:a.props.hydrateFallbackElement,HydrateFallback:a.props.HydrateFallback,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.hasErrorBoundary===!0||a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(f.children=zh(a.props.children,u)),i.push(f)}),i}var Nu="get",Ou="application/x-www-form-urlencoded";function Wu(s){return s!=null&&typeof s.tagName=="string"}function Uy(s){return Wu(s)&&s.tagName.toLowerCase()==="button"}function Ly(s){return Wu(s)&&s.tagName.toLowerCase()==="form"}function Ny(s){return Wu(s)&&s.tagName.toLowerCase()==="input"}function Oy(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function Py(s,t){return s.button===0&&(!t||t==="_self")&&!Oy(s)}var uu=null;function Iy(){if(uu===null)try{new FormData(document.createElement("form"),0),uu=!1}catch{uu=!0}return uu}var By=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ah(s){return s!=null&&!By.has(s)?(Ni(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ou}"`),null):s}function zy(s,t){let i,a,l,u,f;if(Ly(s)){let d=s.getAttribute("action");a=d?ua(d,t):null,i=s.getAttribute("method")||Nu,l=ah(s.getAttribute("enctype"))||Ou,u=new FormData(s)}else if(Uy(s)||Ny(s)&&(s.type==="submit"||s.type==="image")){let d=s.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=s.getAttribute("formaction")||d.getAttribute("action");if(a=m?ua(m,t):null,i=s.getAttribute("formmethod")||d.getAttribute("method")||Nu,l=ah(s.getAttribute("formenctype"))||ah(d.getAttribute("enctype"))||Ou,u=new FormData(d,s),!Iy()){let{name:p,type:g,value:_}=s;if(g==="image"){let x=p?`${p}.`:"";u.append(`${x}x`,"0"),u.append(`${x}y`,"0")}else p&&u.append(p,_)}}else{if(Wu(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Nu,a=null,l=Ou,f=s}return u&&l==="text/plain"&&(f=u,u=void 0),{action:a,method:i.toLowerCase(),encType:l,formData:u,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Ld(s,t){if(s===!1||s===null||typeof s>"u")throw new Error(t)}function Fy(s,t,i){let a=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return a.pathname==="/"?a.pathname=`_root.${i}`:t&&ua(a.pathname,t)==="/"?a.pathname=`${t.replace(/\/$/,"")}/_root.${i}`:a.pathname=`${a.pathname.replace(/\/$/,"")}.${i}`,a}async function Hy(s,t){if(s.id in t)return t[s.id];try{let i=await import(s.module);return t[s.id]=i,i}catch(i){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Gy(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function Vy(s,t,i){let a=await Promise.all(s.map(async l=>{let u=t.routes[l.route.id];if(u){let f=await Hy(u,i);return f.links?f.links():[]}return[]}));return qy(a.flat(1).filter(Gy).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function N_(s,t,i,a,l,u){let f=(m,p)=>i[p]?m.route.id!==i[p].route.id:!0,d=(m,p)=>i[p].pathname!==m.pathname||i[p].route.path?.endsWith("*")&&i[p].params["*"]!==m.params["*"];return u==="assets"?t.filter((m,p)=>f(m,p)||d(m,p)):u==="data"?t.filter((m,p)=>{let g=a.routes[m.route.id];if(!g||!g.hasLoader)return!1;if(f(m,p)||d(m,p))return!0;if(m.route.shouldRevalidate){let _=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(s,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof _=="boolean")return _}return!0}):[]}function ky(s,t,{includeHydrateFallback:i}={}){return Xy(s.map(a=>{let l=t.routes[a.route.id];if(!l)return[];let u=[l.module];return l.clientActionModule&&(u=u.concat(l.clientActionModule)),l.clientLoaderModule&&(u=u.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(u=u.concat(l.hydrateFallbackModule)),l.imports&&(u=u.concat(l.imports)),u}).flat(1))}function Xy(s){return[...new Set(s)]}function Wy(s){let t={},i=Object.keys(s).sort();for(let a of i)t[a]=s[a];return t}function qy(s,t){let i=new Set;return new Set(t),s.reduce((a,l)=>{let u=JSON.stringify(Wy(l));return i.has(u)||(i.add(u),a.push({key:u,link:l})),a},[])}function qv(){let s=St.useContext(Ns);return Ld(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function Yy(){let s=St.useContext(Xu);return Ld(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var Nd=St.createContext(void 0);Nd.displayName="FrameworkContext";function Yv(){let s=St.useContext(Nd);return Ld(s,"You must render this element inside a <HydratedRouter> element"),s}function jy(s,t){let i=St.useContext(Nd),[a,l]=St.useState(!1),[u,f]=St.useState(!1),{onFocus:d,onBlur:m,onMouseEnter:p,onMouseLeave:g,onTouchStart:_}=t,x=St.useRef(null);St.useEffect(()=>{if(s==="render"&&f(!0),s==="viewport"){let C=v=>{v.forEach(U=>{f(U.isIntersecting)})},S=new IntersectionObserver(C,{threshold:.5});return x.current&&S.observe(x.current),()=>{S.disconnect()}}},[s]),St.useEffect(()=>{if(a){let C=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(C)}}},[a]);let M=()=>{l(!0)},E=()=>{l(!1),f(!1)};return i?s!=="intent"?[u,x,{}]:[u,x,{onFocus:Lo(d,M),onBlur:Lo(m,E),onMouseEnter:Lo(p,M),onMouseLeave:Lo(g,E),onTouchStart:Lo(_,M)}]:[!1,x,{}]}function Lo(s,t){return i=>{s&&s(i),i.defaultPrevented||t(i)}}function Zy({page:s,...t}){let{router:i}=qv(),a=St.useMemo(()=>Ov(i.routes,s,i.basename),[i.routes,s,i.basename]);return a?St.createElement(Qy,{page:s,matches:a,...t}):null}function Ky(s){let{manifest:t,routeModules:i}=Yv(),[a,l]=St.useState([]);return St.useEffect(()=>{let u=!1;return Vy(s,t,i).then(f=>{u||l(f)}),()=>{u=!0}},[s,t,i]),a}function Qy({page:s,matches:t,...i}){let a=Ar(),{manifest:l,routeModules:u}=Yv(),{basename:f}=qv(),{loaderData:d,matches:m}=Yy(),p=St.useMemo(()=>N_(s,t,m,l,a,"data"),[s,t,m,l,a]),g=St.useMemo(()=>N_(s,t,m,l,a,"assets"),[s,t,m,l,a]),_=St.useMemo(()=>{if(s===a.pathname+a.search+a.hash)return[];let E=new Set,C=!1;if(t.forEach(v=>{let U=l.routes[v.route.id];!U||!U.hasLoader||(!p.some(L=>L.route.id===v.route.id)&&v.route.id in d&&u[v.route.id]?.shouldRevalidate||U.hasClientLoader?C=!0:E.add(v.route.id))}),E.size===0)return[];let S=Fy(s,f,"data");return C&&E.size>0&&S.searchParams.set("_routes",t.filter(v=>E.has(v.route.id)).map(v=>v.route.id).join(",")),[S.pathname+S.search]},[f,d,a,l,p,t,s,u]),x=St.useMemo(()=>ky(g,l),[g,l]),M=Ky(g);return St.createElement(St.Fragment,null,_.map(E=>St.createElement("link",{key:E,rel:"prefetch",as:"fetch",href:E,...i})),x.map(E=>St.createElement("link",{key:E,rel:"modulepreload",href:E,...i})),M.map(({key:E,link:C})=>St.createElement("link",{key:E,nonce:i.nonce,...C})))}function Jy(...s){return t=>{s.forEach(i=>{typeof i=="function"?i(t):i!=null&&(i.current=t)})}}var jv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{jv&&(window.__reactRouterVersion="7.9.1")}catch{}function $y({basename:s,children:t,window:i}){let a=St.useRef();a.current==null&&(a.current=GS({window:i,v5Compat:!0}));let l=a.current,[u,f]=St.useState({action:l.action,location:l.location}),d=St.useCallback(m=>{St.startTransition(()=>f(m))},[f]);return St.useLayoutEffect(()=>l.listen(d),[l,d]),St.createElement(wy,{basename:s,children:t,location:u.location,navigationType:u.action,navigator:l})}var Zv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ga=St.forwardRef(function({onClick:t,discover:i="render",prefetch:a="none",relative:l,reloadDocument:u,replace:f,state:d,target:m,to:p,preventScrollReset:g,viewTransition:_,...x},M){let{basename:E}=St.useContext(Ii),C=typeof p=="string"&&Zv.test(p),S,v=!1;if(typeof p=="string"&&C&&(S=p,jv))try{let w=new URL(window.location.href),A=p.startsWith("//")?new URL(w.protocol+p):new URL(p),k=ua(A.pathname,E);A.origin===w.origin&&k!=null?p=k+A.search+A.hash:v=!0}catch{Ni(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let U=py(p,{relative:l}),[L,D,P]=jy(a,x),F=iM(p,{replace:f,state:d,target:m,preventScrollReset:g,relative:l,viewTransition:_});function V(w){t&&t(w),w.defaultPrevented||F(w)}let X=St.createElement("a",{...x,...P,href:S||U,onClick:v||u?t:V,ref:Jy(M,D),target:m,"data-discover":!C&&i==="render"?"true":void 0});return L&&!C?St.createElement(St.Fragment,null,X,St.createElement(Zy,{page:U})):X});Ga.displayName="Link";var tM=St.forwardRef(function({"aria-current":t="page",caseSensitive:i=!1,className:a="",end:l=!1,style:u,to:f,viewTransition:d,children:m,...p},g){let _=jo(f,{relative:p.relative}),x=Ar(),M=St.useContext(Xu),{navigator:E,basename:C}=St.useContext(Ii),S=M!=null&&lM(_)&&d===!0,v=E.encodeLocation?E.encodeLocation(_).pathname:_.pathname,U=x.pathname,L=M&&M.navigation&&M.navigation.location?M.navigation.location.pathname:null;i||(U=U.toLowerCase(),L=L?L.toLowerCase():null,v=v.toLowerCase()),L&&C&&(L=ua(L,C)||L);const D=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let P=U===v||!l&&U.startsWith(v)&&U.charAt(D)==="/",F=L!=null&&(L===v||!l&&L.startsWith(v)&&L.charAt(v.length)==="/"),V={isActive:P,isPending:F,isTransitioning:S},X=P?t:void 0,w;typeof a=="function"?w=a(V):w=[a,P?"active":null,F?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let A=typeof u=="function"?u(V):u;return St.createElement(Ga,{...p,"aria-current":X,className:w,ref:g,style:A,to:f,viewTransition:d},typeof m=="function"?m(V):m)});tM.displayName="NavLink";var eM=St.forwardRef(({discover:s="render",fetcherKey:t,navigate:i,reloadDocument:a,replace:l,state:u,method:f=Nu,action:d,onSubmit:m,relative:p,preventScrollReset:g,viewTransition:_,...x},M)=>{let E=sM(),C=oM(d,{relative:p}),S=f.toLowerCase()==="get"?"get":"post",v=typeof d=="string"&&Zv.test(d),U=L=>{if(m&&m(L),L.defaultPrevented)return;L.preventDefault();let D=L.nativeEvent.submitter,P=D?.getAttribute("formmethod")||f;E(D||L.currentTarget,{fetcherKey:t,method:P,navigate:i,replace:l,state:u,relative:p,preventScrollReset:g,viewTransition:_})};return St.createElement("form",{ref:M,method:S,action:C,onSubmit:a?m:U,...x,"data-discover":!v&&s==="render"?"true":void 0})});eM.displayName="Form";function nM(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Kv(s){let t=St.useContext(Ns);return Qe(t,nM(s)),t}function iM(s,{target:t,replace:i,state:a,preventScrollReset:l,relative:u,viewTransition:f}={}){let d=kv(),m=Ar(),p=jo(s,{relative:u});return St.useCallback(g=>{if(Py(g,t)){g.preventDefault();let _=i!==void 0?i:Ho(m)===Ho(p);d(s,{replace:_,state:a,preventScrollReset:l,relative:u,viewTransition:f})}},[m,d,p,i,a,t,s,l,u,f])}var aM=0,rM=()=>`__${String(++aM)}__`;function sM(){let{router:s}=Kv("useSubmit"),{basename:t}=St.useContext(Ii),i=by();return St.useCallback(async(a,l={})=>{let{action:u,method:f,encType:d,formData:m,body:p}=zy(a,t);if(l.navigate===!1){let g=l.fetcherKey||rM();await s.fetch(g,i,l.action||u,{preventScrollReset:l.preventScrollReset,formData:m,body:p,formMethod:l.method||f,formEncType:l.encType||d,flushSync:l.flushSync})}else await s.navigate(l.action||u,{preventScrollReset:l.preventScrollReset,formData:m,body:p,formMethod:l.method||f,formEncType:l.encType||d,replace:l.replace,state:l.state,fromRouteId:i,flushSync:l.flushSync,viewTransition:l.viewTransition})},[s,t,i])}function oM(s,{relative:t}={}){let{basename:i}=St.useContext(Ii),a=St.useContext(ca);Qe(a,"useFormAction must be used inside a RouteContext");let[l]=a.matches.slice(-1),u={...jo(s||".",{relative:t})},f=Ar();if(s==null){u.search=f.search;let d=new URLSearchParams(u.search),m=d.getAll("index");if(m.some(g=>g==="")){d.delete("index"),m.filter(_=>_).forEach(_=>d.append("index",_));let g=d.toString();u.search=g?`?${g}`:""}}return(!s||s===".")&&l.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(u.pathname=u.pathname==="/"?i:oa([i,u.pathname])),Ho(u)}function lM(s,{relative:t}={}){let i=St.useContext(Hv);Qe(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=Kv("useViewTransitionState"),l=jo(s,{relative:t});if(!i.isTransitioning)return!1;let u=ua(i.currentLocation.pathname,a)||i.currentLocation.pathname,f=ua(i.nextLocation.pathname,a)||i.nextLocation.pathname;return Hu(l.pathname,f)!=null||Hu(l.pathname,u)!=null}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Od="180",ls={ROTATE:0,DOLLY:1,PAN:2},us={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},uM=0,O_=1,cM=2,Qv=1,fM=2,aa=3,qa=0,Xn=1,ra=2,Xa=0,bs=1,P_=2,I_=3,B_=4,hM=5,xr=100,dM=101,pM=102,mM=103,gM=104,_M=200,vM=201,xM=202,SM=203,Fh=204,Hh=205,yM=206,MM=207,EM=208,TM=209,bM=210,AM=211,RM=212,CM=213,wM=214,Gh=0,Vh=1,kh=2,Rs=3,Xh=4,Wh=5,qh=6,Yh=7,Jv=0,DM=1,UM=2,Wa=0,LM=1,NM=2,OM=3,PM=4,IM=5,BM=6,zM=7,$v=300,Cs=301,ws=302,jh=303,Zh=304,qu=306,Kh=1e3,yr=1001,Qh=1002,xi=1003,FM=1004,cu=1005,Ci=1006,rh=1007,Mr=1008,Oi=1009,t0=1010,e0=1011,Go=1012,Pd=1013,Er=1014,sa=1015,Zo=1016,Id=1017,Bd=1018,Vo=1020,n0=35902,i0=35899,a0=1021,r0=1022,vi=1023,ko=1026,Xo=1027,s0=1028,zd=1029,o0=1030,Fd=1031,Hd=1033,Pu=33776,Iu=33777,Bu=33778,zu=33779,Jh=35840,$h=35841,td=35842,ed=35843,nd=36196,id=37492,ad=37496,rd=37808,sd=37809,od=37810,ld=37811,ud=37812,cd=37813,fd=37814,hd=37815,dd=37816,pd=37817,md=37818,gd=37819,_d=37820,vd=37821,xd=36492,Sd=36494,yd=36495,Md=36283,Ed=36284,Td=36285,bd=36286,HM=3200,GM=3201,l0=0,VM=1,ka="",ui="srgb",Ds="srgb-linear",Gu="linear",Fe="srgb",cs=7680,z_=519,kM=512,XM=513,WM=514,u0=515,qM=516,YM=517,jM=518,ZM=519,F_=35044,H_="300 es",wi=2e3,Vu=2001;let Os=class{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(i)===-1&&a[t].push(i)}hasEventListener(t,i){const a=this._listeners;return a===void 0?!1:a[t]!==void 0&&a[t].indexOf(i)!==-1}removeEventListener(t,i){const a=this._listeners;if(a===void 0)return;const l=a[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const a=i[t.type];if(a!==void 0){t.target=this;const l=a.slice(0);for(let u=0,f=l.length;u<f;u++)l[u].call(this,t);t.target=null}}};const Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sh=Math.PI/180,Ad=180/Math.PI;function Ko(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Dn[s&255]+Dn[s>>8&255]+Dn[s>>16&255]+Dn[s>>24&255]+"-"+Dn[t&255]+Dn[t>>8&255]+"-"+Dn[t>>16&15|64]+Dn[t>>24&255]+"-"+Dn[i&63|128]+Dn[i>>8&255]+"-"+Dn[i>>16&255]+Dn[i>>24&255]+Dn[a&255]+Dn[a>>8&255]+Dn[a>>16&255]+Dn[a>>24&255]).toLowerCase()}function Ee(s,t,i){return Math.max(t,Math.min(i,s))}function KM(s,t){return(s%t+t)%t}function oh(s,t,i){return(1-i)*s+i*t}function No(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function kn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class ue{constructor(t=0,i=0){ue.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,a=this.y,l=t.elements;return this.x=l[0]*i+l[3]*a+l[6],this.y=l[1]*i+l[4]*a+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Ee(this.x,t.x,i.x),this.y=Ee(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Ee(this.x,t,i),this.y=Ee(this.y,t,i),this}clampLength(t,i){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Ee(a,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const a=this.dot(t)/i;return Math.acos(Ee(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,a=this.y-t.y;return i*i+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,a){return this.x=t.x+(i.x-t.x)*a,this.y=t.y+(i.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const a=Math.cos(i),l=Math.sin(i),u=this.x-t.x,f=this.y-t.y;return this.x=u*a-f*l+t.x,this.y=u*l+f*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Tr{constructor(t=0,i=0,a=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=a,this._w=l}static slerpFlat(t,i,a,l,u,f,d){let m=a[l+0],p=a[l+1],g=a[l+2],_=a[l+3];const x=u[f+0],M=u[f+1],E=u[f+2],C=u[f+3];if(d===0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=_;return}if(d===1){t[i+0]=x,t[i+1]=M,t[i+2]=E,t[i+3]=C;return}if(_!==C||m!==x||p!==M||g!==E){let S=1-d;const v=m*x+p*M+g*E+_*C,U=v>=0?1:-1,L=1-v*v;if(L>Number.EPSILON){const P=Math.sqrt(L),F=Math.atan2(P,v*U);S=Math.sin(S*F)/P,d=Math.sin(d*F)/P}const D=d*U;if(m=m*S+x*D,p=p*S+M*D,g=g*S+E*D,_=_*S+C*D,S===1-d){const P=1/Math.sqrt(m*m+p*p+g*g+_*_);m*=P,p*=P,g*=P,_*=P}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=_}static multiplyQuaternionsFlat(t,i,a,l,u,f){const d=a[l],m=a[l+1],p=a[l+2],g=a[l+3],_=u[f],x=u[f+1],M=u[f+2],E=u[f+3];return t[i]=d*E+g*_+m*M-p*x,t[i+1]=m*E+g*x+p*_-d*M,t[i+2]=p*E+g*M+d*x-m*_,t[i+3]=g*E-d*_-m*x-p*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,a,l){return this._x=t,this._y=i,this._z=a,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const a=t._x,l=t._y,u=t._z,f=t._order,d=Math.cos,m=Math.sin,p=d(a/2),g=d(l/2),_=d(u/2),x=m(a/2),M=m(l/2),E=m(u/2);switch(f){case"XYZ":this._x=x*g*_+p*M*E,this._y=p*M*_-x*g*E,this._z=p*g*E+x*M*_,this._w=p*g*_-x*M*E;break;case"YXZ":this._x=x*g*_+p*M*E,this._y=p*M*_-x*g*E,this._z=p*g*E-x*M*_,this._w=p*g*_+x*M*E;break;case"ZXY":this._x=x*g*_-p*M*E,this._y=p*M*_+x*g*E,this._z=p*g*E+x*M*_,this._w=p*g*_-x*M*E;break;case"ZYX":this._x=x*g*_-p*M*E,this._y=p*M*_+x*g*E,this._z=p*g*E-x*M*_,this._w=p*g*_+x*M*E;break;case"YZX":this._x=x*g*_+p*M*E,this._y=p*M*_+x*g*E,this._z=p*g*E-x*M*_,this._w=p*g*_-x*M*E;break;case"XZY":this._x=x*g*_-p*M*E,this._y=p*M*_-x*g*E,this._z=p*g*E+x*M*_,this._w=p*g*_+x*M*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const a=i/2,l=Math.sin(a);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,a=i[0],l=i[4],u=i[8],f=i[1],d=i[5],m=i[9],p=i[2],g=i[6],_=i[10],x=a+d+_;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(g-m)*M,this._y=(u-p)*M,this._z=(f-l)*M}else if(a>d&&a>_){const M=2*Math.sqrt(1+a-d-_);this._w=(g-m)/M,this._x=.25*M,this._y=(l+f)/M,this._z=(u+p)/M}else if(d>_){const M=2*Math.sqrt(1+d-a-_);this._w=(u-p)/M,this._x=(l+f)/M,this._y=.25*M,this._z=(m+g)/M}else{const M=2*Math.sqrt(1+_-a-d);this._w=(f-l)/M,this._x=(u+p)/M,this._y=(m+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let a=t.dot(i)+1;return a<1e-8?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ee(this.dot(t),-1,1)))}rotateTowards(t,i){const a=this.angleTo(t);if(a===0)return this;const l=Math.min(1,i/a);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const a=t._x,l=t._y,u=t._z,f=t._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=a*g+f*d+l*p-u*m,this._y=l*g+f*m+u*d-a*p,this._z=u*g+f*p+a*m-l*d,this._w=f*g-a*d-l*m-u*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const a=this._x,l=this._y,u=this._z,f=this._w;let d=f*t._w+a*t._x+l*t._y+u*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=f,this._x=a,this._y=l,this._z=u,this;const m=1-d*d;if(m<=Number.EPSILON){const M=1-i;return this._w=M*f+i*this._w,this._x=M*a+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,d),_=Math.sin((1-i)*g)/p,x=Math.sin(i*g)/p;return this._w=f*_+this._w*x,this._x=a*_+this._x*x,this._y=l*_+this._y*x,this._z=u*_+this._z*x,this._onChangeCallback(),this}slerpQuaternions(t,i,a){return this.copy(t).slerp(i,a)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),a=Math.random(),l=Math.sqrt(1-a),u=Math.sqrt(a);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(t=0,i=0,a=0){$.prototype.isVector3=!0,this.x=t,this.y=i,this.z=a}set(t,i,a){return a===void 0&&(a=this.z),this.x=t,this.y=i,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(G_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(G_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,a=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*a+u[6]*l,this.y=u[1]*i+u[4]*a+u[7]*l,this.z=u[2]*i+u[5]*a+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,a=this.y,l=this.z,u=t.elements,f=1/(u[3]*i+u[7]*a+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*a+u[8]*l+u[12])*f,this.y=(u[1]*i+u[5]*a+u[9]*l+u[13])*f,this.z=(u[2]*i+u[6]*a+u[10]*l+u[14])*f,this}applyQuaternion(t){const i=this.x,a=this.y,l=this.z,u=t.x,f=t.y,d=t.z,m=t.w,p=2*(f*l-d*a),g=2*(d*i-u*l),_=2*(u*a-f*i);return this.x=i+m*p+f*_-d*g,this.y=a+m*g+d*p-u*_,this.z=l+m*_+u*g-f*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,a=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*a+u[8]*l,this.y=u[1]*i+u[5]*a+u[9]*l,this.z=u[2]*i+u[6]*a+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Ee(this.x,t.x,i.x),this.y=Ee(this.y,t.y,i.y),this.z=Ee(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Ee(this.x,t,i),this.y=Ee(this.y,t,i),this.z=Ee(this.z,t,i),this}clampLength(t,i){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Ee(a,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,a){return this.x=t.x+(i.x-t.x)*a,this.y=t.y+(i.y-t.y)*a,this.z=t.z+(i.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const a=t.x,l=t.y,u=t.z,f=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*f-a*m,this.z=a*d-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const a=t.dot(this)/i;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return lh.copy(this).projectOnVector(t),this.sub(lh)}reflect(t){return this.sub(lh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const a=this.dot(t)/i;return Math.acos(Ee(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,a=this.y-t.y,l=this.z-t.z;return i*i+a*a+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,a){const l=Math.sin(i)*t;return this.x=l*Math.sin(a),this.y=Math.cos(i)*t,this.z=l*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,a){return this.x=t*Math.sin(i),this.y=a,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=a,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,a=Math.sqrt(1-i*i);return this.x=a*Math.cos(t),this.y=i,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const lh=new $,G_=new Tr;class de{constructor(t,i,a,l,u,f,d,m,p){de.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,a,l,u,f,d,m,p)}set(t,i,a,l,u,f,d,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=d,g[3]=i,g[4]=u,g[5]=m,g[6]=a,g[7]=f,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,a=t.elements;return i[0]=a[0],i[1]=a[1],i[2]=a[2],i[3]=a[3],i[4]=a[4],i[5]=a[5],i[6]=a[6],i[7]=a[7],i[8]=a[8],this}extractBasis(t,i,a){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const a=t.elements,l=i.elements,u=this.elements,f=a[0],d=a[3],m=a[6],p=a[1],g=a[4],_=a[7],x=a[2],M=a[5],E=a[8],C=l[0],S=l[3],v=l[6],U=l[1],L=l[4],D=l[7],P=l[2],F=l[5],V=l[8];return u[0]=f*C+d*U+m*P,u[3]=f*S+d*L+m*F,u[6]=f*v+d*D+m*V,u[1]=p*C+g*U+_*P,u[4]=p*S+g*L+_*F,u[7]=p*v+g*D+_*V,u[2]=x*C+M*U+E*P,u[5]=x*S+M*L+E*F,u[8]=x*v+M*D+E*V,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],a=t[1],l=t[2],u=t[3],f=t[4],d=t[5],m=t[6],p=t[7],g=t[8];return i*f*g-i*d*p-a*u*g+a*d*m+l*u*p-l*f*m}invert(){const t=this.elements,i=t[0],a=t[1],l=t[2],u=t[3],f=t[4],d=t[5],m=t[6],p=t[7],g=t[8],_=g*f-d*p,x=d*m-g*u,M=p*u-f*m,E=i*_+a*x+l*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/E;return t[0]=_*C,t[1]=(l*p-g*a)*C,t[2]=(d*a-l*f)*C,t[3]=x*C,t[4]=(g*i-l*m)*C,t[5]=(l*u-d*i)*C,t[6]=M*C,t[7]=(a*m-p*i)*C,t[8]=(f*i-a*u)*C,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,a,l,u,f,d){const m=Math.cos(u),p=Math.sin(u);return this.set(a*m,a*p,-a*(m*f+p*d)+f+t,-l*p,l*m,-l*(-p*f+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(uh.makeScale(t,i)),this}rotate(t){return this.premultiply(uh.makeRotation(-t)),this}translate(t,i){return this.premultiply(uh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),a=Math.sin(t);return this.set(i,-a,0,a,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,a=t.elements;for(let l=0;l<9;l++)if(i[l]!==a[l])return!1;return!0}fromArray(t,i=0){for(let a=0;a<9;a++)this.elements[a]=t[a+i];return this}toArray(t=[],i=0){const a=this.elements;return t[i]=a[0],t[i+1]=a[1],t[i+2]=a[2],t[i+3]=a[3],t[i+4]=a[4],t[i+5]=a[5],t[i+6]=a[6],t[i+7]=a[7],t[i+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const uh=new de;function c0(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function ku(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function QM(){const s=ku("canvas");return s.style.display="block",s}const V_={};function Wo(s){s in V_||(V_[s]=!0,console.warn(s))}function JM(s,t,i){return new Promise(function(a,l){function u(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:a()}}setTimeout(u,i)})}const k_=new de().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),X_=new de().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $M(){const s={enabled:!0,workingColorSpace:Ds,spaces:{},convert:function(l,u,f){return this.enabled===!1||u===f||!u||!f||(this.spaces[u].transfer===Fe&&(l.r=la(l.r),l.g=la(l.g),l.b=la(l.b)),this.spaces[u].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Fe&&(l.r=As(l.r),l.g=As(l.g),l.b=As(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ka?Gu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,f){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return Wo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return Wo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,u)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],a=[.3127,.329];return s.define({[Ds]:{primaries:t,whitePoint:a,transfer:Gu,toXYZ:k_,fromXYZ:X_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ui},outputColorSpaceConfig:{drawingBufferColorSpace:ui}},[ui]:{primaries:t,whitePoint:a,transfer:Fe,toXYZ:k_,fromXYZ:X_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ui}}}),s}const Ce=$M();function la(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function As(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let fs;class tE{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let a;if(t instanceof HTMLCanvasElement)a=t;else{fs===void 0&&(fs=ku("canvas")),fs.width=t.width,fs.height=t.height;const l=fs.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),a=fs}return a.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=ku("canvas");i.width=t.width,i.height=t.height;const a=i.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const l=a.getImageData(0,0,t.width,t.height),u=l.data;for(let f=0;f<u.length;f++)u[f]=la(u[f]/255)*255;return a.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let a=0;a<i.length;a++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[a]=Math.floor(la(i[a]/255)*255):i[a]=la(i[a]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let eE=0;class Gd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:eE++}),this.uuid=Ko(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let f=0,d=l.length;f<d;f++)l[f].isDataTexture?u.push(ch(l[f].image)):u.push(ch(l[f]))}else u=ch(l);a.url=u}return i||(t.images[this.uuid]=a),a}}function ch(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?tE.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let nE=0;const fh=new $;class Wn extends Os{constructor(t=Wn.DEFAULT_IMAGE,i=Wn.DEFAULT_MAPPING,a=yr,l=yr,u=Ci,f=Mr,d=vi,m=Oi,p=Wn.DEFAULT_ANISOTROPY,g=ka){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nE++}),this.uuid=Ko(),this.name="",this.source=new Gd(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=a,this.wrapT=l,this.magFilter=u,this.minFilter=f,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new de,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(fh).x}get height(){return this.source.getSize(fh).y}get depth(){return this.source.getSize(fh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const a=t[i];if(a===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&a&&l.isVector2&&a.isVector2||l&&a&&l.isVector3&&a.isVector3||l&&a&&l.isMatrix3&&a.isMatrix3?l.copy(a):this[i]=a}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),i||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==$v)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Kh:t.x=t.x-Math.floor(t.x);break;case yr:t.x=t.x<0?0:1;break;case Qh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Kh:t.y=t.y-Math.floor(t.y);break;case yr:t.y=t.y<0?0:1;break;case Qh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Wn.DEFAULT_IMAGE=null;Wn.DEFAULT_MAPPING=$v;Wn.DEFAULT_ANISOTROPY=1;class nn{constructor(t=0,i=0,a=0,l=1){nn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=a,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,a,l){return this.x=t,this.y=i,this.z=a,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,a=this.y,l=this.z,u=this.w,f=t.elements;return this.x=f[0]*i+f[4]*a+f[8]*l+f[12]*u,this.y=f[1]*i+f[5]*a+f[9]*l+f[13]*u,this.z=f[2]*i+f[6]*a+f[10]*l+f[14]*u,this.w=f[3]*i+f[7]*a+f[11]*l+f[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,a,l,u;const m=t.elements,p=m[0],g=m[4],_=m[8],x=m[1],M=m[5],E=m[9],C=m[2],S=m[6],v=m[10];if(Math.abs(g-x)<.01&&Math.abs(_-C)<.01&&Math.abs(E-S)<.01){if(Math.abs(g+x)<.1&&Math.abs(_+C)<.1&&Math.abs(E+S)<.1&&Math.abs(p+M+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(p+1)/2,D=(M+1)/2,P=(v+1)/2,F=(g+x)/4,V=(_+C)/4,X=(E+S)/4;return L>D&&L>P?L<.01?(a=0,l=.707106781,u=.707106781):(a=Math.sqrt(L),l=F/a,u=V/a):D>P?D<.01?(a=.707106781,l=0,u=.707106781):(l=Math.sqrt(D),a=F/l,u=X/l):P<.01?(a=.707106781,l=.707106781,u=0):(u=Math.sqrt(P),a=V/u,l=X/u),this.set(a,l,u,i),this}let U=Math.sqrt((S-E)*(S-E)+(_-C)*(_-C)+(x-g)*(x-g));return Math.abs(U)<.001&&(U=1),this.x=(S-E)/U,this.y=(_-C)/U,this.z=(x-g)/U,this.w=Math.acos((p+M+v-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Ee(this.x,t.x,i.x),this.y=Ee(this.y,t.y,i.y),this.z=Ee(this.z,t.z,i.z),this.w=Ee(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Ee(this.x,t,i),this.y=Ee(this.y,t,i),this.z=Ee(this.z,t,i),this.w=Ee(this.w,t,i),this}clampLength(t,i){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Ee(a,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,a){return this.x=t.x+(i.x-t.x)*a,this.y=t.y+(i.y-t.y)*a,this.z=t.z+(i.z-t.z)*a,this.w=t.w+(i.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class iE extends Os{constructor(t=1,i=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ci,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=a.depth,this.scissor=new nn(0,0,t,i),this.scissorTest=!1,this.viewport=new nn(0,0,t,i);const l={width:t,height:i,depth:a.depth},u=new Wn(l);this.textures=[];const f=a.count;for(let d=0;d<f;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(t={}){const i={minFilter:Ci,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,a=1){if(this.width!==t||this.height!==i||this.depth!==a){this.width=t,this.height=i,this.depth=a;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=a,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,a=t.textures.length;i<a;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Gd(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class br extends iE{constructor(t=1,i=1,a={}){super(t,i,a),this.isWebGLRenderTarget=!0}}class f0 extends Wn{constructor(t=null,i=1,a=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:a,depth:l},this.magFilter=xi,this.minFilter=xi,this.wrapR=yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class aE extends Wn{constructor(t=null,i=1,a=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:a,depth:l},this.magFilter=xi,this.minFilter=xi,this.wrapR=yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qo{constructor(t=new $(1/0,1/0,1/0),i=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,a=t.length;i<a;i+=3)this.expandByPoint(pi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,a=t.count;i<a;i++)this.expandByPoint(pi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,a=t.length;i<a;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const a=pi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const u=a.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let f=0,d=u.count;f<d;f++)t.isMesh===!0?t.getVertexPosition(f,pi):pi.fromBufferAttribute(u,f),pi.applyMatrix4(t.matrixWorld),this.expandByPoint(pi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),fu.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),fu.copy(a.boundingBox)),fu.applyMatrix4(t.matrixWorld),this.union(fu)}const l=t.children;for(let u=0,f=l.length;u<f;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,pi),pi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,a;return t.normal.x>0?(i=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),i<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Oo),hu.subVectors(this.max,Oo),hs.subVectors(t.a,Oo),ds.subVectors(t.b,Oo),ps.subVectors(t.c,Oo),Pa.subVectors(ds,hs),Ia.subVectors(ps,ds),hr.subVectors(hs,ps);let i=[0,-Pa.z,Pa.y,0,-Ia.z,Ia.y,0,-hr.z,hr.y,Pa.z,0,-Pa.x,Ia.z,0,-Ia.x,hr.z,0,-hr.x,-Pa.y,Pa.x,0,-Ia.y,Ia.x,0,-hr.y,hr.x,0];return!hh(i,hs,ds,ps,hu)||(i=[1,0,0,0,1,0,0,0,1],!hh(i,hs,ds,ps,hu))?!1:(du.crossVectors(Pa,Ia),i=[du.x,du.y,du.z],hh(i,hs,ds,ps,hu))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,pi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(pi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ji),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ji=[new $,new $,new $,new $,new $,new $,new $,new $],pi=new $,fu=new Qo,hs=new $,ds=new $,ps=new $,Pa=new $,Ia=new $,hr=new $,Oo=new $,hu=new $,du=new $,dr=new $;function hh(s,t,i,a,l){for(let u=0,f=s.length-3;u<=f;u+=3){dr.fromArray(s,u);const d=l.x*Math.abs(dr.x)+l.y*Math.abs(dr.y)+l.z*Math.abs(dr.z),m=t.dot(dr),p=i.dot(dr),g=a.dot(dr);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const rE=new Qo,Po=new $,dh=new $;class Vd{constructor(t=new $,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const a=this.center;i!==void 0?a.copy(i):rE.setFromPoints(t).getCenter(a);let l=0;for(let u=0,f=t.length;u<f;u++)l=Math.max(l,a.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const a=this.center.distanceToSquared(t);return i.copy(t),a>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Po.subVectors(t,this.center);const i=Po.lengthSq();if(i>this.radius*this.radius){const a=Math.sqrt(i),l=(a-this.radius)*.5;this.center.addScaledVector(Po,l/a),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(dh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Po.copy(t.center).add(dh)),this.expandByPoint(Po.copy(t.center).sub(dh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const $i=new $,ph=new $,pu=new $,Ba=new $,mh=new $,mu=new $,gh=new $;class h0{constructor(t=new $,i=new $(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,$i)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const a=i.dot(this.direction);return a<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=$i.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):($i.copy(this.origin).addScaledVector(this.direction,i),$i.distanceToSquared(t))}distanceSqToSegment(t,i,a,l){ph.copy(t).add(i).multiplyScalar(.5),pu.copy(i).sub(t).normalize(),Ba.copy(this.origin).sub(ph);const u=t.distanceTo(i)*.5,f=-this.direction.dot(pu),d=Ba.dot(this.direction),m=-Ba.dot(pu),p=Ba.lengthSq(),g=Math.abs(1-f*f);let _,x,M,E;if(g>0)if(_=f*m-d,x=f*d-m,E=u*g,_>=0)if(x>=-E)if(x<=E){const C=1/g;_*=C,x*=C,M=_*(_+f*x+2*d)+x*(f*_+x+2*m)+p}else x=u,_=Math.max(0,-(f*x+d)),M=-_*_+x*(x+2*m)+p;else x=-u,_=Math.max(0,-(f*x+d)),M=-_*_+x*(x+2*m)+p;else x<=-E?(_=Math.max(0,-(-f*u+d)),x=_>0?-u:Math.min(Math.max(-u,-m),u),M=-_*_+x*(x+2*m)+p):x<=E?(_=0,x=Math.min(Math.max(-u,-m),u),M=x*(x+2*m)+p):(_=Math.max(0,-(f*u+d)),x=_>0?u:Math.min(Math.max(-u,-m),u),M=-_*_+x*(x+2*m)+p);else x=f>0?-u:u,_=Math.max(0,-(f*x+d)),M=-_*_+x*(x+2*m)+p;return a&&a.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(ph).addScaledVector(pu,x),M}intersectSphere(t,i){$i.subVectors(t.center,this.origin);const a=$i.dot(this.direction),l=$i.dot($i)-a*a,u=t.radius*t.radius;if(l>u)return null;const f=Math.sqrt(u-l),d=a-f,m=a+f;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/i;return a>=0?a:null}intersectPlane(t,i){const a=this.distanceToPlane(t);return a===null?null:this.at(a,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let a,l,u,f,d,m;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,x=this.origin;return p>=0?(a=(t.min.x-x.x)*p,l=(t.max.x-x.x)*p):(a=(t.max.x-x.x)*p,l=(t.min.x-x.x)*p),g>=0?(u=(t.min.y-x.y)*g,f=(t.max.y-x.y)*g):(u=(t.max.y-x.y)*g,f=(t.min.y-x.y)*g),a>f||u>l||((u>a||isNaN(a))&&(a=u),(f<l||isNaN(l))&&(l=f),_>=0?(d=(t.min.z-x.z)*_,m=(t.max.z-x.z)*_):(d=(t.max.z-x.z)*_,m=(t.min.z-x.z)*_),a>m||d>l)||((d>a||a!==a)&&(a=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(a>=0?a:l,i)}intersectsBox(t){return this.intersectBox(t,$i)!==null}intersectTriangle(t,i,a,l,u){mh.subVectors(i,t),mu.subVectors(a,t),gh.crossVectors(mh,mu);let f=this.direction.dot(gh),d;if(f>0){if(l)return null;d=1}else if(f<0)d=-1,f=-f;else return null;Ba.subVectors(this.origin,t);const m=d*this.direction.dot(mu.crossVectors(Ba,mu));if(m<0)return null;const p=d*this.direction.dot(mh.cross(Ba));if(p<0||m+p>f)return null;const g=-d*Ba.dot(gh);return g<0?null:this.at(g/f,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class sn{constructor(t,i,a,l,u,f,d,m,p,g,_,x,M,E,C,S){sn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,a,l,u,f,d,m,p,g,_,x,M,E,C,S)}set(t,i,a,l,u,f,d,m,p,g,_,x,M,E,C,S){const v=this.elements;return v[0]=t,v[4]=i,v[8]=a,v[12]=l,v[1]=u,v[5]=f,v[9]=d,v[13]=m,v[2]=p,v[6]=g,v[10]=_,v[14]=x,v[3]=M,v[7]=E,v[11]=C,v[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new sn().fromArray(this.elements)}copy(t){const i=this.elements,a=t.elements;return i[0]=a[0],i[1]=a[1],i[2]=a[2],i[3]=a[3],i[4]=a[4],i[5]=a[5],i[6]=a[6],i[7]=a[7],i[8]=a[8],i[9]=a[9],i[10]=a[10],i[11]=a[11],i[12]=a[12],i[13]=a[13],i[14]=a[14],i[15]=a[15],this}copyPosition(t){const i=this.elements,a=t.elements;return i[12]=a[12],i[13]=a[13],i[14]=a[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,a){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(t,i,a){return this.set(t.x,i.x,a.x,0,t.y,i.y,a.y,0,t.z,i.z,a.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,a=t.elements,l=1/ms.setFromMatrixColumn(t,0).length(),u=1/ms.setFromMatrixColumn(t,1).length(),f=1/ms.setFromMatrixColumn(t,2).length();return i[0]=a[0]*l,i[1]=a[1]*l,i[2]=a[2]*l,i[3]=0,i[4]=a[4]*u,i[5]=a[5]*u,i[6]=a[6]*u,i[7]=0,i[8]=a[8]*f,i[9]=a[9]*f,i[10]=a[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,a=t.x,l=t.y,u=t.z,f=Math.cos(a),d=Math.sin(a),m=Math.cos(l),p=Math.sin(l),g=Math.cos(u),_=Math.sin(u);if(t.order==="XYZ"){const x=f*g,M=f*_,E=d*g,C=d*_;i[0]=m*g,i[4]=-m*_,i[8]=p,i[1]=M+E*p,i[5]=x-C*p,i[9]=-d*m,i[2]=C-x*p,i[6]=E+M*p,i[10]=f*m}else if(t.order==="YXZ"){const x=m*g,M=m*_,E=p*g,C=p*_;i[0]=x+C*d,i[4]=E*d-M,i[8]=f*p,i[1]=f*_,i[5]=f*g,i[9]=-d,i[2]=M*d-E,i[6]=C+x*d,i[10]=f*m}else if(t.order==="ZXY"){const x=m*g,M=m*_,E=p*g,C=p*_;i[0]=x-C*d,i[4]=-f*_,i[8]=E+M*d,i[1]=M+E*d,i[5]=f*g,i[9]=C-x*d,i[2]=-f*p,i[6]=d,i[10]=f*m}else if(t.order==="ZYX"){const x=f*g,M=f*_,E=d*g,C=d*_;i[0]=m*g,i[4]=E*p-M,i[8]=x*p+C,i[1]=m*_,i[5]=C*p+x,i[9]=M*p-E,i[2]=-p,i[6]=d*m,i[10]=f*m}else if(t.order==="YZX"){const x=f*m,M=f*p,E=d*m,C=d*p;i[0]=m*g,i[4]=C-x*_,i[8]=E*_+M,i[1]=_,i[5]=f*g,i[9]=-d*g,i[2]=-p*g,i[6]=M*_+E,i[10]=x-C*_}else if(t.order==="XZY"){const x=f*m,M=f*p,E=d*m,C=d*p;i[0]=m*g,i[4]=-_,i[8]=p*g,i[1]=x*_+C,i[5]=f*g,i[9]=M*_-E,i[2]=E*_-M,i[6]=d*g,i[10]=C*_+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(sE,t,oE)}lookAt(t,i,a){const l=this.elements;return $n.subVectors(t,i),$n.lengthSq()===0&&($n.z=1),$n.normalize(),za.crossVectors(a,$n),za.lengthSq()===0&&(Math.abs(a.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),za.crossVectors(a,$n)),za.normalize(),gu.crossVectors($n,za),l[0]=za.x,l[4]=gu.x,l[8]=$n.x,l[1]=za.y,l[5]=gu.y,l[9]=$n.y,l[2]=za.z,l[6]=gu.z,l[10]=$n.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const a=t.elements,l=i.elements,u=this.elements,f=a[0],d=a[4],m=a[8],p=a[12],g=a[1],_=a[5],x=a[9],M=a[13],E=a[2],C=a[6],S=a[10],v=a[14],U=a[3],L=a[7],D=a[11],P=a[15],F=l[0],V=l[4],X=l[8],w=l[12],A=l[1],k=l[5],et=l[9],ct=l[13],_t=l[2],ft=l[6],B=l[10],Z=l[14],q=l[3],Et=l[7],N=l[11],J=l[15];return u[0]=f*F+d*A+m*_t+p*q,u[4]=f*V+d*k+m*ft+p*Et,u[8]=f*X+d*et+m*B+p*N,u[12]=f*w+d*ct+m*Z+p*J,u[1]=g*F+_*A+x*_t+M*q,u[5]=g*V+_*k+x*ft+M*Et,u[9]=g*X+_*et+x*B+M*N,u[13]=g*w+_*ct+x*Z+M*J,u[2]=E*F+C*A+S*_t+v*q,u[6]=E*V+C*k+S*ft+v*Et,u[10]=E*X+C*et+S*B+v*N,u[14]=E*w+C*ct+S*Z+v*J,u[3]=U*F+L*A+D*_t+P*q,u[7]=U*V+L*k+D*ft+P*Et,u[11]=U*X+L*et+D*B+P*N,u[15]=U*w+L*ct+D*Z+P*J,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],a=t[4],l=t[8],u=t[12],f=t[1],d=t[5],m=t[9],p=t[13],g=t[2],_=t[6],x=t[10],M=t[14],E=t[3],C=t[7],S=t[11],v=t[15];return E*(+u*m*_-l*p*_-u*d*x+a*p*x+l*d*M-a*m*M)+C*(+i*m*M-i*p*x+u*f*x-l*f*M+l*p*g-u*m*g)+S*(+i*p*_-i*d*M-u*f*_+a*f*M+u*d*g-a*p*g)+v*(-l*d*g-i*m*_+i*d*x+l*f*_-a*f*x+a*m*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,a){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=a),this}invert(){const t=this.elements,i=t[0],a=t[1],l=t[2],u=t[3],f=t[4],d=t[5],m=t[6],p=t[7],g=t[8],_=t[9],x=t[10],M=t[11],E=t[12],C=t[13],S=t[14],v=t[15],U=_*S*p-C*x*p+C*m*M-d*S*M-_*m*v+d*x*v,L=E*x*p-g*S*p-E*m*M+f*S*M+g*m*v-f*x*v,D=g*C*p-E*_*p+E*d*M-f*C*M-g*d*v+f*_*v,P=E*_*m-g*C*m-E*d*x+f*C*x+g*d*S-f*_*S,F=i*U+a*L+l*D+u*P;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/F;return t[0]=U*V,t[1]=(C*x*u-_*S*u-C*l*M+a*S*M+_*l*v-a*x*v)*V,t[2]=(d*S*u-C*m*u+C*l*p-a*S*p-d*l*v+a*m*v)*V,t[3]=(_*m*u-d*x*u-_*l*p+a*x*p+d*l*M-a*m*M)*V,t[4]=L*V,t[5]=(g*S*u-E*x*u+E*l*M-i*S*M-g*l*v+i*x*v)*V,t[6]=(E*m*u-f*S*u-E*l*p+i*S*p+f*l*v-i*m*v)*V,t[7]=(f*x*u-g*m*u+g*l*p-i*x*p-f*l*M+i*m*M)*V,t[8]=D*V,t[9]=(E*_*u-g*C*u-E*a*M+i*C*M+g*a*v-i*_*v)*V,t[10]=(f*C*u-E*d*u+E*a*p-i*C*p-f*a*v+i*d*v)*V,t[11]=(g*d*u-f*_*u-g*a*p+i*_*p+f*a*M-i*d*M)*V,t[12]=P*V,t[13]=(g*C*l-E*_*l+E*a*x-i*C*x-g*a*S+i*_*S)*V,t[14]=(E*d*l-f*C*l-E*a*m+i*C*m+f*a*S-i*d*S)*V,t[15]=(f*_*l-g*d*l+g*a*m-i*_*m-f*a*x+i*d*x)*V,this}scale(t){const i=this.elements,a=t.x,l=t.y,u=t.z;return i[0]*=a,i[4]*=l,i[8]*=u,i[1]*=a,i[5]*=l,i[9]*=u,i[2]*=a,i[6]*=l,i[10]*=u,i[3]*=a,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,a,l))}makeTranslation(t,i,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,a,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,i,-a,0,0,a,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),a=Math.sin(t);return this.set(i,0,a,0,0,1,0,0,-a,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),a=Math.sin(t);return this.set(i,-a,0,0,a,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const a=Math.cos(i),l=Math.sin(i),u=1-a,f=t.x,d=t.y,m=t.z,p=u*f,g=u*d;return this.set(p*f+a,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+a,g*m-l*f,0,p*m-l*d,g*m+l*f,u*m*m+a,0,0,0,0,1),this}makeScale(t,i,a){return this.set(t,0,0,0,0,i,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,i,a,l,u,f){return this.set(1,a,u,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,a){const l=this.elements,u=i._x,f=i._y,d=i._z,m=i._w,p=u+u,g=f+f,_=d+d,x=u*p,M=u*g,E=u*_,C=f*g,S=f*_,v=d*_,U=m*p,L=m*g,D=m*_,P=a.x,F=a.y,V=a.z;return l[0]=(1-(C+v))*P,l[1]=(M+D)*P,l[2]=(E-L)*P,l[3]=0,l[4]=(M-D)*F,l[5]=(1-(x+v))*F,l[6]=(S+U)*F,l[7]=0,l[8]=(E+L)*V,l[9]=(S-U)*V,l[10]=(1-(x+C))*V,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,a){const l=this.elements;let u=ms.set(l[0],l[1],l[2]).length();const f=ms.set(l[4],l[5],l[6]).length(),d=ms.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),t.x=l[12],t.y=l[13],t.z=l[14],mi.copy(this);const p=1/u,g=1/f,_=1/d;return mi.elements[0]*=p,mi.elements[1]*=p,mi.elements[2]*=p,mi.elements[4]*=g,mi.elements[5]*=g,mi.elements[6]*=g,mi.elements[8]*=_,mi.elements[9]*=_,mi.elements[10]*=_,i.setFromRotationMatrix(mi),a.x=u,a.y=f,a.z=d,this}makePerspective(t,i,a,l,u,f,d=wi,m=!1){const p=this.elements,g=2*u/(i-t),_=2*u/(a-l),x=(i+t)/(i-t),M=(a+l)/(a-l);let E,C;if(m)E=u/(f-u),C=f*u/(f-u);else if(d===wi)E=-(f+u)/(f-u),C=-2*f*u/(f-u);else if(d===Vu)E=-f/(f-u),C=-f*u/(f-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=_,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,a,l,u,f,d=wi,m=!1){const p=this.elements,g=2/(i-t),_=2/(a-l),x=-(i+t)/(i-t),M=-(a+l)/(a-l);let E,C;if(m)E=1/(f-u),C=f/(f-u);else if(d===wi)E=-2/(f-u),C=-(f+u)/(f-u);else if(d===Vu)E=-1/(f-u),C=-u/(f-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=_,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=E,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,a=t.elements;for(let l=0;l<16;l++)if(i[l]!==a[l])return!1;return!0}fromArray(t,i=0){for(let a=0;a<16;a++)this.elements[a]=t[a+i];return this}toArray(t=[],i=0){const a=this.elements;return t[i]=a[0],t[i+1]=a[1],t[i+2]=a[2],t[i+3]=a[3],t[i+4]=a[4],t[i+5]=a[5],t[i+6]=a[6],t[i+7]=a[7],t[i+8]=a[8],t[i+9]=a[9],t[i+10]=a[10],t[i+11]=a[11],t[i+12]=a[12],t[i+13]=a[13],t[i+14]=a[14],t[i+15]=a[15],t}}const ms=new $,mi=new sn,sE=new $(0,0,0),oE=new $(1,1,1),za=new $,gu=new $,$n=new $,W_=new sn,q_=new Tr;class Pi{constructor(t=0,i=0,a=0,l=Pi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=a,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,a,l=this._order){return this._x=t,this._y=i,this._z=a,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,a=!0){const l=t.elements,u=l[0],f=l[4],d=l[8],m=l[1],p=l[5],g=l[9],_=l[2],x=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Ee(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-f,u)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Ee(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,u),this._z=0);break;case"ZXY":this._x=Math.asin(Ee(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Ee(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(Ee(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,u)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Ee(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,a){return W_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(W_,i,a)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return q_.setFromEuler(this),this.setFromQuaternion(q_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pi.DEFAULT_ORDER="XYZ";class d0{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let lE=0;const Y_=new $,gs=new Tr,ta=new sn,_u=new $,Io=new $,uE=new $,cE=new Tr,j_=new $(1,0,0),Z_=new $(0,1,0),K_=new $(0,0,1),Q_={type:"added"},fE={type:"removed"},_s={type:"childadded",child:null},_h={type:"childremoved",child:null};class Ln extends Os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lE++}),this.uuid=Ko(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ln.DEFAULT_UP.clone();const t=new $,i=new Pi,a=new Tr,l=new $(1,1,1);function u(){a.setFromEuler(i,!1)}function f(){i.setFromQuaternion(a,void 0,!1)}i._onChange(u),a._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new sn},normalMatrix:{value:new de}}),this.matrix=new sn,this.matrixWorld=new sn,this.matrixAutoUpdate=Ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new d0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return gs.setFromAxisAngle(t,i),this.quaternion.multiply(gs),this}rotateOnWorldAxis(t,i){return gs.setFromAxisAngle(t,i),this.quaternion.premultiply(gs),this}rotateX(t){return this.rotateOnAxis(j_,t)}rotateY(t){return this.rotateOnAxis(Z_,t)}rotateZ(t){return this.rotateOnAxis(K_,t)}translateOnAxis(t,i){return Y_.copy(t).applyQuaternion(this.quaternion),this.position.add(Y_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(j_,t)}translateY(t){return this.translateOnAxis(Z_,t)}translateZ(t){return this.translateOnAxis(K_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ta.copy(this.matrixWorld).invert())}lookAt(t,i,a){t.isVector3?_u.copy(t):_u.set(t,i,a);const l=this.parent;this.updateWorldMatrix(!0,!1),Io.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ta.lookAt(Io,_u,this.up):ta.lookAt(_u,Io,this.up),this.quaternion.setFromRotationMatrix(ta),l&&(ta.extractRotation(l.matrixWorld),gs.setFromRotationMatrix(ta),this.quaternion.premultiply(gs.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Q_),_s.child=t,this.dispatchEvent(_s),_s.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(fE),_h.child=t,this.dispatchEvent(_h),_h.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ta.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ta.multiply(t.parent.matrixWorld)),t.applyMatrix4(ta),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Q_),_s.child=t,this.dispatchEvent(_s),_s.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let a=0,l=this.children.length;a<l;a++){const f=this.children[a].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,a=[]){this[t]===i&&a.push(this);const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].getObjectsByProperty(t,i,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Io,t,uE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Io,cE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let a=0,l=i.length;a<l;a++)i[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let a=0,l=i.length;a<l;a++)i[a].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let a=0,l=i.length;a<l;a++)i[a].updateMatrixWorld(t)}updateWorldMatrix(t,i){const a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",a={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const _=m[p];u(t.shapes,_)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(t.materials,this.material[m]));l.material=d}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(t.animations,m))}}if(i){const d=f(t.geometries),m=f(t.materials),p=f(t.textures),g=f(t.images),_=f(t.shapes),x=f(t.skeletons),M=f(t.animations),E=f(t.nodes);d.length>0&&(a.geometries=d),m.length>0&&(a.materials=m),p.length>0&&(a.textures=p),g.length>0&&(a.images=g),_.length>0&&(a.shapes=_),x.length>0&&(a.skeletons=x),M.length>0&&(a.animations=M),E.length>0&&(a.nodes=E)}return a.object=l,a;function f(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let a=0;a<t.children.length;a++){const l=t.children[a];this.add(l.clone())}return this}}Ln.DEFAULT_UP=new $(0,1,0);Ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gi=new $,ea=new $,vh=new $,na=new $,vs=new $,xs=new $,J_=new $,xh=new $,Sh=new $,yh=new $,Mh=new nn,Eh=new nn,Th=new nn;class _i{constructor(t=new $,i=new $,a=new $){this.a=t,this.b=i,this.c=a}static getNormal(t,i,a,l){l.subVectors(a,i),gi.subVectors(t,i),l.cross(gi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,a,l,u){gi.subVectors(l,i),ea.subVectors(a,i),vh.subVectors(t,i);const f=gi.dot(gi),d=gi.dot(ea),m=gi.dot(vh),p=ea.dot(ea),g=ea.dot(vh),_=f*p-d*d;if(_===0)return u.set(0,0,0),null;const x=1/_,M=(p*m-d*g)*x,E=(f*g-d*m)*x;return u.set(1-M-E,E,M)}static containsPoint(t,i,a,l){return this.getBarycoord(t,i,a,l,na)===null?!1:na.x>=0&&na.y>=0&&na.x+na.y<=1}static getInterpolation(t,i,a,l,u,f,d,m){return this.getBarycoord(t,i,a,l,na)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,na.x),m.addScaledVector(f,na.y),m.addScaledVector(d,na.z),m)}static getInterpolatedAttribute(t,i,a,l,u,f){return Mh.setScalar(0),Eh.setScalar(0),Th.setScalar(0),Mh.fromBufferAttribute(t,i),Eh.fromBufferAttribute(t,a),Th.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(Mh,u.x),f.addScaledVector(Eh,u.y),f.addScaledVector(Th,u.z),f}static isFrontFacing(t,i,a,l){return gi.subVectors(a,i),ea.subVectors(t,i),gi.cross(ea).dot(l)<0}set(t,i,a){return this.a.copy(t),this.b.copy(i),this.c.copy(a),this}setFromPointsAndIndices(t,i,a,l){return this.a.copy(t[i]),this.b.copy(t[a]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,a,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return gi.subVectors(this.c,this.b),ea.subVectors(this.a,this.b),gi.cross(ea).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return _i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return _i.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,a,l,u){return _i.getInterpolation(t,this.a,this.b,this.c,i,a,l,u)}containsPoint(t){return _i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return _i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const a=this.a,l=this.b,u=this.c;let f,d;vs.subVectors(l,a),xs.subVectors(u,a),xh.subVectors(t,a);const m=vs.dot(xh),p=xs.dot(xh);if(m<=0&&p<=0)return i.copy(a);Sh.subVectors(t,l);const g=vs.dot(Sh),_=xs.dot(Sh);if(g>=0&&_<=g)return i.copy(l);const x=m*_-g*p;if(x<=0&&m>=0&&g<=0)return f=m/(m-g),i.copy(a).addScaledVector(vs,f);yh.subVectors(t,u);const M=vs.dot(yh),E=xs.dot(yh);if(E>=0&&M<=E)return i.copy(u);const C=M*p-m*E;if(C<=0&&p>=0&&E<=0)return d=p/(p-E),i.copy(a).addScaledVector(xs,d);const S=g*E-M*_;if(S<=0&&_-g>=0&&M-E>=0)return J_.subVectors(u,l),d=(_-g)/(_-g+(M-E)),i.copy(l).addScaledVector(J_,d);const v=1/(S+C+x);return f=C*v,d=x*v,i.copy(a).addScaledVector(vs,f).addScaledVector(xs,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const p0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fa={h:0,s:0,l:0},vu={h:0,s:0,l:0};function bh(s,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(t-s)*6*i:i<1/2?t:i<2/3?s+(t-s)*6*(2/3-i):s}class Ue{constructor(t,i,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,a)}set(t,i,a){if(i===void 0&&a===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=ui){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ce.colorSpaceToWorking(this,i),this}setRGB(t,i,a,l=Ce.workingColorSpace){return this.r=t,this.g=i,this.b=a,Ce.colorSpaceToWorking(this,l),this}setHSL(t,i,a,l=Ce.workingColorSpace){if(t=KM(t,1),i=Ee(i,0,1),a=Ee(a,0,1),i===0)this.r=this.g=this.b=a;else{const u=a<=.5?a*(1+i):a+i-a*i,f=2*a-u;this.r=bh(f,u,t+1/3),this.g=bh(f,u,t),this.b=bh(f,u,t-1/3)}return Ce.colorSpaceToWorking(this,l),this}setStyle(t,i=ui){function a(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const f=l[1],d=l[2];switch(f){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],f=u.length;if(f===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=ui){const a=p0[t.toLowerCase()];return a!==void 0?this.setHex(a,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=la(t.r),this.g=la(t.g),this.b=la(t.b),this}copyLinearToSRGB(t){return this.r=As(t.r),this.g=As(t.g),this.b=As(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ui){return Ce.workingToColorSpace(Un.copy(this),t),Math.round(Ee(Un.r*255,0,255))*65536+Math.round(Ee(Un.g*255,0,255))*256+Math.round(Ee(Un.b*255,0,255))}getHexString(t=ui){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ce.workingColorSpace){Ce.workingToColorSpace(Un.copy(this),i);const a=Un.r,l=Un.g,u=Un.b,f=Math.max(a,l,u),d=Math.min(a,l,u);let m,p;const g=(d+f)/2;if(d===f)m=0,p=0;else{const _=f-d;switch(p=g<=.5?_/(f+d):_/(2-f-d),f){case a:m=(l-u)/_+(l<u?6:0);break;case l:m=(u-a)/_+2;break;case u:m=(a-l)/_+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=Ce.workingColorSpace){return Ce.workingToColorSpace(Un.copy(this),i),t.r=Un.r,t.g=Un.g,t.b=Un.b,t}getStyle(t=ui){Ce.workingToColorSpace(Un.copy(this),t);const i=Un.r,a=Un.g,l=Un.b;return t!==ui?`color(${t} ${i.toFixed(3)} ${a.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(a*255)},${Math.round(l*255)})`}offsetHSL(t,i,a){return this.getHSL(Fa),this.setHSL(Fa.h+t,Fa.s+i,Fa.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,a){return this.r=t.r+(i.r-t.r)*a,this.g=t.g+(i.g-t.g)*a,this.b=t.b+(i.b-t.b)*a,this}lerpHSL(t,i){this.getHSL(Fa),t.getHSL(vu);const a=oh(Fa.h,vu.h,i),l=oh(Fa.s,vu.s,i),u=oh(Fa.l,vu.l,i);return this.setHSL(a,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,a=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*a+u[6]*l,this.g=u[1]*i+u[4]*a+u[7]*l,this.b=u[2]*i+u[5]*a+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Un=new Ue;Ue.NAMES=p0;let hE=0;class Jo extends Os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hE++}),this.uuid=Ko(),this.name="",this.type="Material",this.blending=bs,this.side=qa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fh,this.blendDst=Hh,this.blendEquation=xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=Rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=z_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cs,this.stencilZFail=cs,this.stencilZPass=cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const a=t[i];if(a===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(a):l&&l.isVector3&&a&&a.isVector3?l.copy(a):this[i]=a}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==bs&&(a.blending=this.blending),this.side!==qa&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==Fh&&(a.blendSrc=this.blendSrc),this.blendDst!==Hh&&(a.blendDst=this.blendDst),this.blendEquation!==xr&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==Rs&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==z_&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cs&&(a.stencilFail=this.stencilFail),this.stencilZFail!==cs&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==cs&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function l(u){const f=[];for(const d in u){const m=u[d];delete m.metadata,f.push(m)}return f}if(i){const u=l(t.textures),f=l(t.images);u.length>0&&(a.textures=u),f.length>0&&(a.images=f)}return a}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let a=null;if(i!==null){const l=i.length;a=new Array(l);for(let u=0;u!==l;++u)a[u]=i[u].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class m0 extends Jo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.combine=Jv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const cn=new $,xu=new ue;let dE=0;class Ui{constructor(t,i,a=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:dE++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=a,this.usage=F_,this.updateRanges=[],this.gpuType=sa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,a){t*=this.itemSize,a*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[a+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,a=this.count;i<a;i++)xu.fromBufferAttribute(this,i),xu.applyMatrix3(t),this.setXY(i,xu.x,xu.y);else if(this.itemSize===3)for(let i=0,a=this.count;i<a;i++)cn.fromBufferAttribute(this,i),cn.applyMatrix3(t),this.setXYZ(i,cn.x,cn.y,cn.z);return this}applyMatrix4(t){for(let i=0,a=this.count;i<a;i++)cn.fromBufferAttribute(this,i),cn.applyMatrix4(t),this.setXYZ(i,cn.x,cn.y,cn.z);return this}applyNormalMatrix(t){for(let i=0,a=this.count;i<a;i++)cn.fromBufferAttribute(this,i),cn.applyNormalMatrix(t),this.setXYZ(i,cn.x,cn.y,cn.z);return this}transformDirection(t){for(let i=0,a=this.count;i<a;i++)cn.fromBufferAttribute(this,i),cn.transformDirection(t),this.setXYZ(i,cn.x,cn.y,cn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let a=this.array[t*this.itemSize+i];return this.normalized&&(a=No(a,this.array)),a}setComponent(t,i,a){return this.normalized&&(a=kn(a,this.array)),this.array[t*this.itemSize+i]=a,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=No(i,this.array)),i}setX(t,i){return this.normalized&&(i=kn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=No(i,this.array)),i}setY(t,i){return this.normalized&&(i=kn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=No(i,this.array)),i}setZ(t,i){return this.normalized&&(i=kn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=No(i,this.array)),i}setW(t,i){return this.normalized&&(i=kn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,a){return t*=this.itemSize,this.normalized&&(i=kn(i,this.array),a=kn(a,this.array)),this.array[t+0]=i,this.array[t+1]=a,this}setXYZ(t,i,a,l){return t*=this.itemSize,this.normalized&&(i=kn(i,this.array),a=kn(a,this.array),l=kn(l,this.array)),this.array[t+0]=i,this.array[t+1]=a,this.array[t+2]=l,this}setXYZW(t,i,a,l,u){return t*=this.itemSize,this.normalized&&(i=kn(i,this.array),a=kn(a,this.array),l=kn(l,this.array),u=kn(u,this.array)),this.array[t+0]=i,this.array[t+1]=a,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==F_&&(t.usage=this.usage),t}}class g0 extends Ui{constructor(t,i,a){super(new Uint16Array(t),i,a)}}class _0 extends Ui{constructor(t,i,a){super(new Uint32Array(t),i,a)}}class Li extends Ui{constructor(t,i,a){super(new Float32Array(t),i,a)}}let pE=0;const li=new sn,Ah=new Ln,Ss=new $,ti=new Qo,Bo=new Qo,Sn=new $;class ja extends Os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pE++}),this.uuid=Ko(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(c0(t)?_0:g0)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,a=0){this.groups.push({start:t,count:i,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const u=new de().getNormalMatrix(t);a.applyNormalMatrix(u),a.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return li.makeRotationFromQuaternion(t),this.applyMatrix4(li),this}rotateX(t){return li.makeRotationX(t),this.applyMatrix4(li),this}rotateY(t){return li.makeRotationY(t),this.applyMatrix4(li),this}rotateZ(t){return li.makeRotationZ(t),this.applyMatrix4(li),this}translate(t,i,a){return li.makeTranslation(t,i,a),this.applyMatrix4(li),this}scale(t,i,a){return li.makeScale(t,i,a),this.applyMatrix4(li),this}lookAt(t){return Ah.lookAt(t),Ah.updateMatrix(),this.applyMatrix4(Ah.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ss).negate(),this.translate(Ss.x,Ss.y,Ss.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const a=[];for(let l=0,u=t.length;l<u;l++){const f=t[l];a.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Li(a,3))}else{const a=Math.min(t.length,i.count);for(let l=0;l<a;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let a=0,l=i.length;a<l;a++){const u=i[a];ti.setFromBufferAttribute(u),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vd);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(t){const a=this.boundingSphere.center;if(ti.setFromBufferAttribute(t),i)for(let u=0,f=i.length;u<f;u++){const d=i[u];Bo.setFromBufferAttribute(d),this.morphTargetsRelative?(Sn.addVectors(ti.min,Bo.min),ti.expandByPoint(Sn),Sn.addVectors(ti.max,Bo.max),ti.expandByPoint(Sn)):(ti.expandByPoint(Bo.min),ti.expandByPoint(Bo.max))}ti.getCenter(a);let l=0;for(let u=0,f=t.count;u<f;u++)Sn.fromBufferAttribute(t,u),l=Math.max(l,a.distanceToSquared(Sn));if(i)for(let u=0,f=i.length;u<f;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)Sn.fromBufferAttribute(d,p),m&&(Ss.fromBufferAttribute(t,p),Sn.add(Ss)),l=Math.max(l,a.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ui(new Float32Array(4*a.count),4));const f=this.getAttribute("tangent"),d=[],m=[];for(let X=0;X<a.count;X++)d[X]=new $,m[X]=new $;const p=new $,g=new $,_=new $,x=new ue,M=new ue,E=new ue,C=new $,S=new $;function v(X,w,A){p.fromBufferAttribute(a,X),g.fromBufferAttribute(a,w),_.fromBufferAttribute(a,A),x.fromBufferAttribute(u,X),M.fromBufferAttribute(u,w),E.fromBufferAttribute(u,A),g.sub(p),_.sub(p),M.sub(x),E.sub(x);const k=1/(M.x*E.y-E.x*M.y);isFinite(k)&&(C.copy(g).multiplyScalar(E.y).addScaledVector(_,-M.y).multiplyScalar(k),S.copy(_).multiplyScalar(M.x).addScaledVector(g,-E.x).multiplyScalar(k),d[X].add(C),d[w].add(C),d[A].add(C),m[X].add(S),m[w].add(S),m[A].add(S))}let U=this.groups;U.length===0&&(U=[{start:0,count:t.count}]);for(let X=0,w=U.length;X<w;++X){const A=U[X],k=A.start,et=A.count;for(let ct=k,_t=k+et;ct<_t;ct+=3)v(t.getX(ct+0),t.getX(ct+1),t.getX(ct+2))}const L=new $,D=new $,P=new $,F=new $;function V(X){P.fromBufferAttribute(l,X),F.copy(P);const w=d[X];L.copy(w),L.sub(P.multiplyScalar(P.dot(w))).normalize(),D.crossVectors(F,w);const k=D.dot(m[X])<0?-1:1;f.setXYZW(X,L.x,L.y,L.z,k)}for(let X=0,w=U.length;X<w;++X){const A=U[X],k=A.start,et=A.count;for(let ct=k,_t=k+et;ct<_t;ct+=3)V(t.getX(ct+0)),V(t.getX(ct+1)),V(t.getX(ct+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new Ui(new Float32Array(i.count*3),3),this.setAttribute("normal",a);else for(let x=0,M=a.count;x<M;x++)a.setXYZ(x,0,0,0);const l=new $,u=new $,f=new $,d=new $,m=new $,p=new $,g=new $,_=new $;if(t)for(let x=0,M=t.count;x<M;x+=3){const E=t.getX(x+0),C=t.getX(x+1),S=t.getX(x+2);l.fromBufferAttribute(i,E),u.fromBufferAttribute(i,C),f.fromBufferAttribute(i,S),g.subVectors(f,u),_.subVectors(l,u),g.cross(_),d.fromBufferAttribute(a,E),m.fromBufferAttribute(a,C),p.fromBufferAttribute(a,S),d.add(g),m.add(g),p.add(g),a.setXYZ(E,d.x,d.y,d.z),a.setXYZ(C,m.x,m.y,m.z),a.setXYZ(S,p.x,p.y,p.z)}else for(let x=0,M=i.count;x<M;x+=3)l.fromBufferAttribute(i,x+0),u.fromBufferAttribute(i,x+1),f.fromBufferAttribute(i,x+2),g.subVectors(f,u),_.subVectors(l,u),g.cross(_),a.setXYZ(x+0,g.x,g.y,g.z),a.setXYZ(x+1,g.x,g.y,g.z),a.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,a=t.count;i<a;i++)Sn.fromBufferAttribute(t,i),Sn.normalize(),t.setXYZ(i,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function t(d,m){const p=d.array,g=d.itemSize,_=d.normalized,x=new p.constructor(m.length*g);let M=0,E=0;for(let C=0,S=m.length;C<S;C++){d.isInterleavedBufferAttribute?M=m[C]*d.data.stride+d.offset:M=m[C]*g;for(let v=0;v<g;v++)x[E++]=p[M++]}return new Ui(x,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ja,a=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,a);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let g=0,_=p.length;g<_;g++){const x=p[g],M=t(x,a);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,m=f.length;d<m;d++){const p=f[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const a=this.attributes;for(const m in a){const p=a[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let _=0,x=p.length;_<x;_++){const M=p[_];g.push(M.toJSON(t.data))}g.length>0&&(l[m]=g,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone());const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const u=t.morphAttributes;for(const p in u){const g=[],_=u[p];for(let x=0,M=_.length;x<M;x++)g.push(_[x].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let p=0,g=f.length;p<g;p++){const _=f[p];this.addGroup(_.start,_.count,_.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $_=new sn,pr=new h0,Su=new Vd,tv=new $,yu=new $,Mu=new $,Eu=new $,Rh=new $,Tu=new $,ev=new $,bu=new $;class Di extends Ln{constructor(t=new ja,i=new m0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,a=Object.keys(i);if(a.length>0){const l=i[a[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=l.length;u<f;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(t,i){const a=this.geometry,l=a.attributes.position,u=a.morphAttributes.position,f=a.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(u&&d){Tu.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const g=d[m],_=u[m];g!==0&&(Rh.fromBufferAttribute(_,t),f?Tu.addScaledVector(Rh,g):Tu.addScaledVector(Rh.sub(i),g))}i.add(Tu)}return i}raycast(t,i){const a=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Su.copy(a.boundingSphere),Su.applyMatrix4(u),pr.copy(t.ray).recast(t.near),!(Su.containsPoint(pr.origin)===!1&&(pr.intersectSphere(Su,tv)===null||pr.origin.distanceToSquared(tv)>(t.far-t.near)**2))&&($_.copy(u).invert(),pr.copy(t.ray).applyMatrix4($_),!(a.boundingBox!==null&&pr.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,i,pr)))}_computeIntersections(t,i,a){let l;const u=this.geometry,f=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,g=u.attributes.uv1,_=u.attributes.normal,x=u.groups,M=u.drawRange;if(d!==null)if(Array.isArray(f))for(let E=0,C=x.length;E<C;E++){const S=x[E],v=f[S.materialIndex],U=Math.max(S.start,M.start),L=Math.min(d.count,Math.min(S.start+S.count,M.start+M.count));for(let D=U,P=L;D<P;D+=3){const F=d.getX(D),V=d.getX(D+1),X=d.getX(D+2);l=Au(this,v,t,a,p,g,_,F,V,X),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),C=Math.min(d.count,M.start+M.count);for(let S=E,v=C;S<v;S+=3){const U=d.getX(S),L=d.getX(S+1),D=d.getX(S+2);l=Au(this,f,t,a,p,g,_,U,L,D),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let E=0,C=x.length;E<C;E++){const S=x[E],v=f[S.materialIndex],U=Math.max(S.start,M.start),L=Math.min(m.count,Math.min(S.start+S.count,M.start+M.count));for(let D=U,P=L;D<P;D+=3){const F=D,V=D+1,X=D+2;l=Au(this,v,t,a,p,g,_,F,V,X),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),C=Math.min(m.count,M.start+M.count);for(let S=E,v=C;S<v;S+=3){const U=S,L=S+1,D=S+2;l=Au(this,f,t,a,p,g,_,U,L,D),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function mE(s,t,i,a,l,u,f,d){let m;if(t.side===Xn?m=a.intersectTriangle(f,u,l,!0,d):m=a.intersectTriangle(l,u,f,t.side===qa,d),m===null)return null;bu.copy(d),bu.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(bu);return p<i.near||p>i.far?null:{distance:p,point:bu.clone(),object:s}}function Au(s,t,i,a,l,u,f,d,m,p){s.getVertexPosition(d,yu),s.getVertexPosition(m,Mu),s.getVertexPosition(p,Eu);const g=mE(s,t,i,a,yu,Mu,Eu,ev);if(g){const _=new $;_i.getBarycoord(ev,yu,Mu,Eu,_),l&&(g.uv=_i.getInterpolatedAttribute(l,d,m,p,_,new ue)),u&&(g.uv1=_i.getInterpolatedAttribute(u,d,m,p,_,new ue)),f&&(g.normal=_i.getInterpolatedAttribute(f,d,m,p,_,new $),g.normal.dot(a.direction)>0&&g.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new $,materialIndex:0};_i.getNormal(yu,Mu,Eu,x.normal),g.face=x,g.barycoord=_}return g}class $o extends ja{constructor(t=1,i=1,a=1,l=1,u=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:a,widthSegments:l,heightSegments:u,depthSegments:f};const d=this;l=Math.floor(l),u=Math.floor(u),f=Math.floor(f);const m=[],p=[],g=[],_=[];let x=0,M=0;E("z","y","x",-1,-1,a,i,t,f,u,0),E("z","y","x",1,-1,a,i,-t,f,u,1),E("x","z","y",1,1,t,a,i,l,f,2),E("x","z","y",1,-1,t,a,-i,l,f,3),E("x","y","z",1,-1,t,i,a,l,u,4),E("x","y","z",-1,-1,t,i,-a,l,u,5),this.setIndex(m),this.setAttribute("position",new Li(p,3)),this.setAttribute("normal",new Li(g,3)),this.setAttribute("uv",new Li(_,2));function E(C,S,v,U,L,D,P,F,V,X,w){const A=D/V,k=P/X,et=D/2,ct=P/2,_t=F/2,ft=V+1,B=X+1;let Z=0,q=0;const Et=new $;for(let N=0;N<B;N++){const J=N*k-ct;for(let Mt=0;Mt<ft;Mt++){const Tt=Mt*A-et;Et[C]=Tt*U,Et[S]=J*L,Et[v]=_t,p.push(Et.x,Et.y,Et.z),Et[C]=0,Et[S]=0,Et[v]=F>0?1:-1,g.push(Et.x,Et.y,Et.z),_.push(Mt/V),_.push(1-N/X),Z+=1}}for(let N=0;N<X;N++)for(let J=0;J<V;J++){const Mt=x+J+ft*N,Tt=x+J+ft*(N+1),Lt=x+(J+1)+ft*(N+1),Vt=x+(J+1)+ft*N;m.push(Mt,Tt,Vt),m.push(Tt,Lt,Vt),q+=6}d.addGroup(M,q,w),M+=q,x+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $o(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Us(s){const t={};for(const i in s){t[i]={};for(const a in s[i]){const l=s[i][a];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][a]=null):t[i][a]=l.clone():Array.isArray(l)?t[i][a]=l.slice():t[i][a]=l}}return t}function In(s){const t={};for(let i=0;i<s.length;i++){const a=Us(s[i]);for(const l in a)t[l]=a[l]}return t}function gE(s){const t=[];for(let i=0;i<s.length;i++)t.push(s[i].clone());return t}function v0(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ce.workingColorSpace}const _E={clone:Us,merge:In};var vE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ya extends Jo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vE,this.fragmentShader=xE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Us(t.uniforms),this.uniformsGroups=gE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const a={};for(const l in this.extensions)this.extensions[l]===!0&&(a[l]=!0);return Object.keys(a).length>0&&(i.extensions=a),i}}class x0 extends Ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new sn,this.projectionMatrix=new sn,this.projectionMatrixInverse=new sn,this.coordinateSystem=wi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ha=new $,nv=new ue,iv=new ue;class Bn extends x0{constructor(t=50,i=1,a=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Ad*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(sh*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ad*2*Math.atan(Math.tan(sh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,a){Ha.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ha.x,Ha.y).multiplyScalar(-t/Ha.z),Ha.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(Ha.x,Ha.y).multiplyScalar(-t/Ha.z)}getViewSize(t,i){return this.getViewBounds(t,nv,iv),i.subVectors(iv,nv)}setViewOffset(t,i,a,l,u,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=a,this.view.offsetY=l,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(sh*.5*this.fov)/this.zoom,a=2*i,l=this.aspect*a,u=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;u+=f.offsetX*l/m,i-=f.offsetY*a/p,l*=f.width/m,a*=f.height/p}const d=this.filmOffset;d!==0&&(u+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-a,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const ys=-90,Ms=1;class SE extends Ln{constructor(t,i,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Bn(ys,Ms,t,i);l.layers=this.layers,this.add(l);const u=new Bn(ys,Ms,t,i);u.layers=this.layers,this.add(u);const f=new Bn(ys,Ms,t,i);f.layers=this.layers,this.add(f);const d=new Bn(ys,Ms,t,i);d.layers=this.layers,this.add(d);const m=new Bn(ys,Ms,t,i);m.layers=this.layers,this.add(m);const p=new Bn(ys,Ms,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[a,l,u,f,d,m]=i;for(const p of i)this.remove(p);if(t===wi)a.up.set(0,1,0),a.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Vu)a.up.set(0,-1,0),a.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,f,d,m,p,g]=this.children,_=t.getRenderTarget(),x=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const C=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,t.setRenderTarget(a,0,l),t.render(i,u),t.setRenderTarget(a,1,l),t.render(i,f),t.setRenderTarget(a,2,l),t.render(i,d),t.setRenderTarget(a,3,l),t.render(i,m),t.setRenderTarget(a,4,l),t.render(i,p),a.texture.generateMipmaps=C,t.setRenderTarget(a,5,l),t.render(i,g),t.setRenderTarget(_,x,M),t.xr.enabled=E,a.texture.needsPMREMUpdate=!0}}class S0 extends Wn{constructor(t=[],i=Cs,a,l,u,f,d,m,p,g){super(t,i,a,l,u,f,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class yE extends br{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},l=[a,a,a,a,a,a];this.texture=new S0(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new $o(5,5,5),u=new Ya({name:"CubemapFromEquirect",uniforms:Us(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:Xn,blending:Xa});u.uniforms.tEquirect.value=i;const f=new Di(l,u),d=i.minFilter;return i.minFilter===Mr&&(i.minFilter=Ci),new SE(1,10,this).update(t,f),i.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,a=!0,l=!0){const u=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,a,l);t.setRenderTarget(u)}}class Ru extends Ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ME={type:"move"};class Ch{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ru,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ru,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ru,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const a of t.hand.values())this._getHandJoint(i,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,a){let l=null,u=null,f=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){f=!0;for(const C of t.hand.values()){const S=i.getJointPose(C,a),v=this._getHandJoint(p,C);S!==null&&(v.matrix.fromArray(S.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=S.radius),v.visible=S!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],x=g.position.distanceTo(_.position),M=.02,E=.005;p.inputState.pinching&&x>M+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&x<=M-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,a),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,a),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(ME)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const a=new Ru;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[i.jointName]=a,t.add(a)}return t.joints[i.jointName]}}class EE extends Ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pi,this.environmentIntensity=1,this.environmentRotation=new Pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const wh=new $,TE=new $,bE=new de;class Va{constructor(t=new $(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,a,l){return this.normal.set(t,i,a),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,a){const l=wh.subVectors(a,i).cross(TE.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const a=t.delta(wh),l=this.normal.dot(a);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(a,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return i<0&&a>0||a<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const a=i||bE.getNormalMatrix(t),l=this.coplanarPoint(wh).applyMatrix4(t),u=this.normal.applyMatrix3(a).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const mr=new Vd,AE=new ue(.5,.5),Cu=new $;class kd{constructor(t=new Va,i=new Va,a=new Va,l=new Va,u=new Va,f=new Va){this.planes=[t,i,a,l,u,f]}set(t,i,a,l,u,f){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(a),d[3].copy(l),d[4].copy(u),d[5].copy(f),this}copy(t){const i=this.planes;for(let a=0;a<6;a++)i[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,i=wi,a=!1){const l=this.planes,u=t.elements,f=u[0],d=u[1],m=u[2],p=u[3],g=u[4],_=u[5],x=u[6],M=u[7],E=u[8],C=u[9],S=u[10],v=u[11],U=u[12],L=u[13],D=u[14],P=u[15];if(l[0].setComponents(p-f,M-g,v-E,P-U).normalize(),l[1].setComponents(p+f,M+g,v+E,P+U).normalize(),l[2].setComponents(p+d,M+_,v+C,P+L).normalize(),l[3].setComponents(p-d,M-_,v-C,P-L).normalize(),a)l[4].setComponents(m,x,S,D).normalize(),l[5].setComponents(p-m,M-x,v-S,P-D).normalize();else if(l[4].setComponents(p-m,M-x,v-S,P-D).normalize(),i===wi)l[5].setComponents(p+m,M+x,v+S,P+D).normalize();else if(i===Vu)l[5].setComponents(m,x,S,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),mr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),mr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(mr)}intersectsSprite(t){mr.center.set(0,0,0);const i=AE.distanceTo(t.center);return mr.radius=.7071067811865476+i,mr.applyMatrix4(t.matrixWorld),this.intersectsSphere(mr)}intersectsSphere(t){const i=this.planes,a=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(a)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let a=0;a<6;a++){const l=i[a];if(Cu.x=l.normal.x>0?t.max.x:t.min.x,Cu.y=l.normal.y>0?t.max.y:t.min.y,Cu.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Cu)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let a=0;a<6;a++)if(i[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class y0 extends Wn{constructor(t,i,a=Er,l,u,f,d=xi,m=xi,p,g=ko,_=1){if(g!==ko&&g!==Xo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:t,height:i,depth:_};super(x,l,u,f,d,m,g,a,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Gd(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class M0 extends Wn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Xd extends ja{constructor(t=[],i=[],a=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:i,radius:a,detail:l};const u=[],f=[];d(l),p(a),g(),this.setAttribute("position",new Li(u,3)),this.setAttribute("normal",new Li(u.slice(),3)),this.setAttribute("uv",new Li(f,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function d(U){const L=new $,D=new $,P=new $;for(let F=0;F<i.length;F+=3)M(i[F+0],L),M(i[F+1],D),M(i[F+2],P),m(L,D,P,U)}function m(U,L,D,P){const F=P+1,V=[];for(let X=0;X<=F;X++){V[X]=[];const w=U.clone().lerp(D,X/F),A=L.clone().lerp(D,X/F),k=F-X;for(let et=0;et<=k;et++)et===0&&X===F?V[X][et]=w:V[X][et]=w.clone().lerp(A,et/k)}for(let X=0;X<F;X++)for(let w=0;w<2*(F-X)-1;w++){const A=Math.floor(w/2);w%2===0?(x(V[X][A+1]),x(V[X+1][A]),x(V[X][A])):(x(V[X][A+1]),x(V[X+1][A+1]),x(V[X+1][A]))}}function p(U){const L=new $;for(let D=0;D<u.length;D+=3)L.x=u[D+0],L.y=u[D+1],L.z=u[D+2],L.normalize().multiplyScalar(U),u[D+0]=L.x,u[D+1]=L.y,u[D+2]=L.z}function g(){const U=new $;for(let L=0;L<u.length;L+=3){U.x=u[L+0],U.y=u[L+1],U.z=u[L+2];const D=S(U)/2/Math.PI+.5,P=v(U)/Math.PI+.5;f.push(D,1-P)}E(),_()}function _(){for(let U=0;U<f.length;U+=6){const L=f[U+0],D=f[U+2],P=f[U+4],F=Math.max(L,D,P),V=Math.min(L,D,P);F>.9&&V<.1&&(L<.2&&(f[U+0]+=1),D<.2&&(f[U+2]+=1),P<.2&&(f[U+4]+=1))}}function x(U){u.push(U.x,U.y,U.z)}function M(U,L){const D=U*3;L.x=t[D+0],L.y=t[D+1],L.z=t[D+2]}function E(){const U=new $,L=new $,D=new $,P=new $,F=new ue,V=new ue,X=new ue;for(let w=0,A=0;w<u.length;w+=9,A+=6){U.set(u[w+0],u[w+1],u[w+2]),L.set(u[w+3],u[w+4],u[w+5]),D.set(u[w+6],u[w+7],u[w+8]),F.set(f[A+0],f[A+1]),V.set(f[A+2],f[A+3]),X.set(f[A+4],f[A+5]),P.copy(U).add(L).add(D).divideScalar(3);const k=S(P);C(F,A+0,U,k),C(V,A+2,L,k),C(X,A+4,D,k)}}function C(U,L,D,P){P<0&&U.x===1&&(f[L]=U.x-1),D.x===0&&D.z===0&&(f[L]=P/2/Math.PI+.5)}function S(U){return Math.atan2(U.z,-U.x)}function v(U){return Math.atan2(-U.y,Math.sqrt(U.x*U.x+U.z*U.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xd(t.vertices,t.indices,t.radius,t.details)}}class Wd extends Xd{constructor(t=1,i=0){const a=(1+Math.sqrt(5))/2,l=[-1,a,0,1,a,0,-1,-a,0,1,-a,0,0,-1,a,0,1,a,0,-1,-a,0,1,-a,a,0,-1,a,0,1,-a,0,-1,-a,0,1],u=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(l,u,t,i),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new Wd(t.radius,t.detail)}}class Yu extends ja{constructor(t=1,i=1,a=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:a,heightSegments:l};const u=t/2,f=i/2,d=Math.floor(a),m=Math.floor(l),p=d+1,g=m+1,_=t/d,x=i/m,M=[],E=[],C=[],S=[];for(let v=0;v<g;v++){const U=v*x-f;for(let L=0;L<p;L++){const D=L*_-u;E.push(D,-U,0),C.push(0,0,1),S.push(L/d),S.push(1-v/m)}}for(let v=0;v<m;v++)for(let U=0;U<d;U++){const L=U+p*v,D=U+p*(v+1),P=U+1+p*(v+1),F=U+1+p*v;M.push(L,D,F),M.push(D,P,F)}this.setIndex(M),this.setAttribute("position",new Li(E,3)),this.setAttribute("normal",new Li(C,3)),this.setAttribute("uv",new Li(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yu(t.width,t.height,t.widthSegments,t.heightSegments)}}class RE extends Jo{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=l0,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class CE extends Jo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=HM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class wE extends Jo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class DE extends Ln{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const Dh=new sn,av=new $,rv=new $;class UE{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.mapType=Oi,this.map=null,this.mapPass=null,this.matrix=new sn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new kd,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new nn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,a=this.matrix;av.setFromMatrixPosition(t.matrixWorld),i.position.copy(av),rv.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(rv),i.updateMatrixWorld(),Dh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dh,i.coordinateSystem,i.reversedDepth),i.reversedDepth?a.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(Dh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Fo extends x0{constructor(t=-1,i=1,a=1,l=-1,u=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=a,this.bottom=l,this.near=u,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,a,l,u,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=a,this.view.offsetY=l,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=a-t,f=a+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,f=u+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(u,f,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class LE extends UE{constructor(){super(new Fo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class NE extends DE{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ln.DEFAULT_UP),this.updateMatrix(),this.target=new Ln,this.shadow=new LE}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class OE extends Bn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class sv{constructor(t=1,i=0,a=0){this.radius=t,this.phi=i,this.theta=a}set(t,i,a){return this.radius=t,this.phi=i,this.theta=a,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Ee(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,a){return this.radius=Math.sqrt(t*t+i*i+a*a),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,a),this.phi=Math.acos(Ee(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}function ov(s,t,i,a){const l=PE(a);switch(i){case a0:return s*t;case s0:return s*t/l.components*l.byteLength;case zd:return s*t/l.components*l.byteLength;case o0:return s*t*2/l.components*l.byteLength;case Fd:return s*t*2/l.components*l.byteLength;case r0:return s*t*3/l.components*l.byteLength;case vi:return s*t*4/l.components*l.byteLength;case Hd:return s*t*4/l.components*l.byteLength;case Pu:case Iu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Bu:case zu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case $h:case ed:return Math.max(s,16)*Math.max(t,8)/4;case Jh:case td:return Math.max(s,8)*Math.max(t,8)/2;case nd:case id:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ad:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case rd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case sd:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case od:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case ld:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case ud:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case cd:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case fd:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case hd:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case dd:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case pd:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case md:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case gd:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case _d:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case vd:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case xd:case Sd:case yd:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Md:case Ed:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Td:case bd:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function PE(s){switch(s){case Oi:case t0:return{byteLength:1,components:1};case Go:case e0:case Zo:return{byteLength:2,components:1};case Id:case Bd:return{byteLength:2,components:4};case Er:case Pd:case sa:return{byteLength:4,components:1};case n0:case i0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Od}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Od);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function E0(){let s=null,t=!1,i=null,a=null;function l(u,f){i(u,f),a=s.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(a=s.requestAnimationFrame(l),t=!0)},stop:function(){s.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){s=u}}}function IE(s){const t=new WeakMap;function i(d,m){const p=d.array,g=d.usage,_=p.byteLength,x=s.createBuffer();s.bindBuffer(m,x),s.bufferData(m,p,g),d.onUploadCallback();let M;if(p instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=s.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=s.SHORT;else if(p instanceof Uint32Array)M=s.UNSIGNED_INT;else if(p instanceof Int32Array)M=s.INT;else if(p instanceof Int8Array)M=s.BYTE;else if(p instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:_}}function a(d,m,p){const g=m.array,_=m.updateRanges;if(s.bindBuffer(p,d),_.length===0)s.bufferSubData(p,0,g);else{_.sort((M,E)=>M.start-E.start);let x=0;for(let M=1;M<_.length;M++){const E=_[x],C=_[M];C.start<=E.start+E.count+1?E.count=Math.max(E.count,C.start+C.count-E.start):(++x,_[x]=C)}_.length=x+1;for(let M=0,E=_.length;M<E;M++){const C=_[M];s.bufferSubData(p,C.start*g.BYTES_PER_ELEMENT,g,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(s.deleteBuffer(m.buffer),t.delete(d))}function f(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=t.get(d);(!g||g.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:f}}var BE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,FE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,HE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,GE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,VE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,XE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,WE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,qE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,YE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ZE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,KE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,QE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,JE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,$E=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,eT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,iT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,aT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,rT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,sT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,oT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,lT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,uT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dT="gl_FragColor = linearToOutputTexel( gl_FragColor );",pT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,gT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_T=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,vT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ST=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,MT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ET=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,TT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,bT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,AT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,RT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,CT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,wT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,DT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,UT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,LT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,NT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,OT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,PT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,IT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,BT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,zT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,FT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,HT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,GT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,VT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,XT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,WT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,qT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,YT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ZT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,KT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,QT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,JT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,$T=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,eb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,nb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ib=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ab=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,sb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ob=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ub=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,hb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,db=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_b=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,xb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Sb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,yb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Mb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Eb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Tb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ab=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Db=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ub=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Lb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Nb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ob=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Pb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ib=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,kb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Xb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Wb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,qb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Zb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Kb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Qb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$b=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,eA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,iA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,aA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,oA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,fA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ge={alphahash_fragment:BE,alphahash_pars_fragment:zE,alphamap_fragment:FE,alphamap_pars_fragment:HE,alphatest_fragment:GE,alphatest_pars_fragment:VE,aomap_fragment:kE,aomap_pars_fragment:XE,batching_pars_vertex:WE,batching_vertex:qE,begin_vertex:YE,beginnormal_vertex:jE,bsdfs:ZE,iridescence_fragment:KE,bumpmap_pars_fragment:QE,clipping_planes_fragment:JE,clipping_planes_pars_fragment:$E,clipping_planes_pars_vertex:tT,clipping_planes_vertex:eT,color_fragment:nT,color_pars_fragment:iT,color_pars_vertex:aT,color_vertex:rT,common:sT,cube_uv_reflection_fragment:oT,defaultnormal_vertex:lT,displacementmap_pars_vertex:uT,displacementmap_vertex:cT,emissivemap_fragment:fT,emissivemap_pars_fragment:hT,colorspace_fragment:dT,colorspace_pars_fragment:pT,envmap_fragment:mT,envmap_common_pars_fragment:gT,envmap_pars_fragment:_T,envmap_pars_vertex:vT,envmap_physical_pars_fragment:wT,envmap_vertex:xT,fog_vertex:ST,fog_pars_vertex:yT,fog_fragment:MT,fog_pars_fragment:ET,gradientmap_pars_fragment:TT,lightmap_pars_fragment:bT,lights_lambert_fragment:AT,lights_lambert_pars_fragment:RT,lights_pars_begin:CT,lights_toon_fragment:DT,lights_toon_pars_fragment:UT,lights_phong_fragment:LT,lights_phong_pars_fragment:NT,lights_physical_fragment:OT,lights_physical_pars_fragment:PT,lights_fragment_begin:IT,lights_fragment_maps:BT,lights_fragment_end:zT,logdepthbuf_fragment:FT,logdepthbuf_pars_fragment:HT,logdepthbuf_pars_vertex:GT,logdepthbuf_vertex:VT,map_fragment:kT,map_pars_fragment:XT,map_particle_fragment:WT,map_particle_pars_fragment:qT,metalnessmap_fragment:YT,metalnessmap_pars_fragment:jT,morphinstance_vertex:ZT,morphcolor_vertex:KT,morphnormal_vertex:QT,morphtarget_pars_vertex:JT,morphtarget_vertex:$T,normal_fragment_begin:tb,normal_fragment_maps:eb,normal_pars_fragment:nb,normal_pars_vertex:ib,normal_vertex:ab,normalmap_pars_fragment:rb,clearcoat_normal_fragment_begin:sb,clearcoat_normal_fragment_maps:ob,clearcoat_pars_fragment:lb,iridescence_pars_fragment:ub,opaque_fragment:cb,packing:fb,premultiplied_alpha_fragment:hb,project_vertex:db,dithering_fragment:pb,dithering_pars_fragment:mb,roughnessmap_fragment:gb,roughnessmap_pars_fragment:_b,shadowmap_pars_fragment:vb,shadowmap_pars_vertex:xb,shadowmap_vertex:Sb,shadowmask_pars_fragment:yb,skinbase_vertex:Mb,skinning_pars_vertex:Eb,skinning_vertex:Tb,skinnormal_vertex:bb,specularmap_fragment:Ab,specularmap_pars_fragment:Rb,tonemapping_fragment:Cb,tonemapping_pars_fragment:wb,transmission_fragment:Db,transmission_pars_fragment:Ub,uv_pars_fragment:Lb,uv_pars_vertex:Nb,uv_vertex:Ob,worldpos_vertex:Pb,background_vert:Ib,background_frag:Bb,backgroundCube_vert:zb,backgroundCube_frag:Fb,cube_vert:Hb,cube_frag:Gb,depth_vert:Vb,depth_frag:kb,distanceRGBA_vert:Xb,distanceRGBA_frag:Wb,equirect_vert:qb,equirect_frag:Yb,linedashed_vert:jb,linedashed_frag:Zb,meshbasic_vert:Kb,meshbasic_frag:Qb,meshlambert_vert:Jb,meshlambert_frag:$b,meshmatcap_vert:tA,meshmatcap_frag:eA,meshnormal_vert:nA,meshnormal_frag:iA,meshphong_vert:aA,meshphong_frag:rA,meshphysical_vert:sA,meshphysical_frag:oA,meshtoon_vert:lA,meshtoon_frag:uA,points_vert:cA,points_frag:fA,shadow_vert:hA,shadow_frag:dA,sprite_vert:pA,sprite_frag:mA},Bt={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new de}},envmap:{envMap:{value:null},envMapRotation:{value:new de},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new de}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new de}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new de},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new de},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new de},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new de}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new de}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new de}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0},uvTransform:{value:new de}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}}},Ri={basic:{uniforms:In([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.fog]),vertexShader:ge.meshbasic_vert,fragmentShader:ge.meshbasic_frag},lambert:{uniforms:In([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new Ue(0)}}]),vertexShader:ge.meshlambert_vert,fragmentShader:ge.meshlambert_frag},phong:{uniforms:In([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30}}]),vertexShader:ge.meshphong_vert,fragmentShader:ge.meshphong_frag},standard:{uniforms:In([Bt.common,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.roughnessmap,Bt.metalnessmap,Bt.fog,Bt.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag},toon:{uniforms:In([Bt.common,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.gradientmap,Bt.fog,Bt.lights,{emissive:{value:new Ue(0)}}]),vertexShader:ge.meshtoon_vert,fragmentShader:ge.meshtoon_frag},matcap:{uniforms:In([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,{matcap:{value:null}}]),vertexShader:ge.meshmatcap_vert,fragmentShader:ge.meshmatcap_frag},points:{uniforms:In([Bt.points,Bt.fog]),vertexShader:ge.points_vert,fragmentShader:ge.points_frag},dashed:{uniforms:In([Bt.common,Bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ge.linedashed_vert,fragmentShader:ge.linedashed_frag},depth:{uniforms:In([Bt.common,Bt.displacementmap]),vertexShader:ge.depth_vert,fragmentShader:ge.depth_frag},normal:{uniforms:In([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,{opacity:{value:1}}]),vertexShader:ge.meshnormal_vert,fragmentShader:ge.meshnormal_frag},sprite:{uniforms:In([Bt.sprite,Bt.fog]),vertexShader:ge.sprite_vert,fragmentShader:ge.sprite_frag},background:{uniforms:{uvTransform:{value:new de},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ge.background_vert,fragmentShader:ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new de}},vertexShader:ge.backgroundCube_vert,fragmentShader:ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ge.cube_vert,fragmentShader:ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ge.equirect_vert,fragmentShader:ge.equirect_frag},distanceRGBA:{uniforms:In([Bt.common,Bt.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ge.distanceRGBA_vert,fragmentShader:ge.distanceRGBA_frag},shadow:{uniforms:In([Bt.lights,Bt.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:ge.shadow_vert,fragmentShader:ge.shadow_frag}};Ri.physical={uniforms:In([Ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new de},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new de},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new de},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new de},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new de},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new de},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new de},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new de},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new de},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new de},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new de},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new de}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag};const wu={r:0,b:0,g:0},gr=new Pi,gA=new sn;function _A(s,t,i,a,l,u,f){const d=new Ue(0);let m=u===!0?0:1,p,g,_=null,x=0,M=null;function E(L){let D=L.isScene===!0?L.background:null;return D&&D.isTexture&&(D=(L.backgroundBlurriness>0?i:t).get(D)),D}function C(L){let D=!1;const P=E(L);P===null?v(d,m):P&&P.isColor&&(v(P,1),D=!0);const F=s.xr.getEnvironmentBlendMode();F==="additive"?a.buffers.color.setClear(0,0,0,1,f):F==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,f),(s.autoClear||D)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(L,D){const P=E(D);P&&(P.isCubeTexture||P.mapping===qu)?(g===void 0&&(g=new Di(new $o(1,1,1),new Ya({name:"BackgroundCubeMaterial",uniforms:Us(Ri.backgroundCube.uniforms),vertexShader:Ri.backgroundCube.vertexShader,fragmentShader:Ri.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(F,V,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),gr.copy(D.backgroundRotation),gr.x*=-1,gr.y*=-1,gr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(gr.y*=-1,gr.z*=-1),g.material.uniforms.envMap.value=P,g.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(gA.makeRotationFromEuler(gr)),g.material.toneMapped=Ce.getTransfer(P.colorSpace)!==Fe,(_!==P||x!==P.version||M!==s.toneMapping)&&(g.material.needsUpdate=!0,_=P,x=P.version,M=s.toneMapping),g.layers.enableAll(),L.unshift(g,g.geometry,g.material,0,0,null)):P&&P.isTexture&&(p===void 0&&(p=new Di(new Yu(2,2),new Ya({name:"BackgroundMaterial",uniforms:Us(Ri.background.uniforms),vertexShader:Ri.background.vertexShader,fragmentShader:Ri.background.fragmentShader,side:qa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=P,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=Ce.getTransfer(P.colorSpace)!==Fe,P.matrixAutoUpdate===!0&&P.updateMatrix(),p.material.uniforms.uvTransform.value.copy(P.matrix),(_!==P||x!==P.version||M!==s.toneMapping)&&(p.material.needsUpdate=!0,_=P,x=P.version,M=s.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function v(L,D){L.getRGB(wu,v0(s)),a.buffers.color.setClear(wu.r,wu.g,wu.b,D,f)}function U(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(L,D=1){d.set(L),m=D,v(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(L){m=L,v(d,m)},render:C,addToRenderList:S,dispose:U}}function vA(s,t){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),a={},l=x(null);let u=l,f=!1;function d(A,k,et,ct,_t){let ft=!1;const B=_(ct,et,k);u!==B&&(u=B,p(u.object)),ft=M(A,ct,et,_t),ft&&E(A,ct,et,_t),_t!==null&&t.update(_t,s.ELEMENT_ARRAY_BUFFER),(ft||f)&&(f=!1,D(A,k,et,ct),_t!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(_t).buffer))}function m(){return s.createVertexArray()}function p(A){return s.bindVertexArray(A)}function g(A){return s.deleteVertexArray(A)}function _(A,k,et){const ct=et.wireframe===!0;let _t=a[A.id];_t===void 0&&(_t={},a[A.id]=_t);let ft=_t[k.id];ft===void 0&&(ft={},_t[k.id]=ft);let B=ft[ct];return B===void 0&&(B=x(m()),ft[ct]=B),B}function x(A){const k=[],et=[],ct=[];for(let _t=0;_t<i;_t++)k[_t]=0,et[_t]=0,ct[_t]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:et,attributeDivisors:ct,object:A,attributes:{},index:null}}function M(A,k,et,ct){const _t=u.attributes,ft=k.attributes;let B=0;const Z=et.getAttributes();for(const q in Z)if(Z[q].location>=0){const N=_t[q];let J=ft[q];if(J===void 0&&(q==="instanceMatrix"&&A.instanceMatrix&&(J=A.instanceMatrix),q==="instanceColor"&&A.instanceColor&&(J=A.instanceColor)),N===void 0||N.attribute!==J||J&&N.data!==J.data)return!0;B++}return u.attributesNum!==B||u.index!==ct}function E(A,k,et,ct){const _t={},ft=k.attributes;let B=0;const Z=et.getAttributes();for(const q in Z)if(Z[q].location>=0){let N=ft[q];N===void 0&&(q==="instanceMatrix"&&A.instanceMatrix&&(N=A.instanceMatrix),q==="instanceColor"&&A.instanceColor&&(N=A.instanceColor));const J={};J.attribute=N,N&&N.data&&(J.data=N.data),_t[q]=J,B++}u.attributes=_t,u.attributesNum=B,u.index=ct}function C(){const A=u.newAttributes;for(let k=0,et=A.length;k<et;k++)A[k]=0}function S(A){v(A,0)}function v(A,k){const et=u.newAttributes,ct=u.enabledAttributes,_t=u.attributeDivisors;et[A]=1,ct[A]===0&&(s.enableVertexAttribArray(A),ct[A]=1),_t[A]!==k&&(s.vertexAttribDivisor(A,k),_t[A]=k)}function U(){const A=u.newAttributes,k=u.enabledAttributes;for(let et=0,ct=k.length;et<ct;et++)k[et]!==A[et]&&(s.disableVertexAttribArray(et),k[et]=0)}function L(A,k,et,ct,_t,ft,B){B===!0?s.vertexAttribIPointer(A,k,et,_t,ft):s.vertexAttribPointer(A,k,et,ct,_t,ft)}function D(A,k,et,ct){C();const _t=ct.attributes,ft=et.getAttributes(),B=k.defaultAttributeValues;for(const Z in ft){const q=ft[Z];if(q.location>=0){let Et=_t[Z];if(Et===void 0&&(Z==="instanceMatrix"&&A.instanceMatrix&&(Et=A.instanceMatrix),Z==="instanceColor"&&A.instanceColor&&(Et=A.instanceColor)),Et!==void 0){const N=Et.normalized,J=Et.itemSize,Mt=t.get(Et);if(Mt===void 0)continue;const Tt=Mt.buffer,Lt=Mt.type,Vt=Mt.bytesPerElement,nt=Lt===s.INT||Lt===s.UNSIGNED_INT||Et.gpuType===Pd;if(Et.isInterleavedBufferAttribute){const vt=Et.data,Dt=vt.stride,Jt=Et.offset;if(vt.isInstancedInterleavedBuffer){for(let qt=0;qt<q.locationSize;qt++)v(q.location+qt,vt.meshPerAttribute);A.isInstancedMesh!==!0&&ct._maxInstanceCount===void 0&&(ct._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let qt=0;qt<q.locationSize;qt++)S(q.location+qt);s.bindBuffer(s.ARRAY_BUFFER,Tt);for(let qt=0;qt<q.locationSize;qt++)L(q.location+qt,J/q.locationSize,Lt,N,Dt*Vt,(Jt+J/q.locationSize*qt)*Vt,nt)}else{if(Et.isInstancedBufferAttribute){for(let vt=0;vt<q.locationSize;vt++)v(q.location+vt,Et.meshPerAttribute);A.isInstancedMesh!==!0&&ct._maxInstanceCount===void 0&&(ct._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let vt=0;vt<q.locationSize;vt++)S(q.location+vt);s.bindBuffer(s.ARRAY_BUFFER,Tt);for(let vt=0;vt<q.locationSize;vt++)L(q.location+vt,J/q.locationSize,Lt,N,J*Vt,J/q.locationSize*vt*Vt,nt)}}else if(B!==void 0){const N=B[Z];if(N!==void 0)switch(N.length){case 2:s.vertexAttrib2fv(q.location,N);break;case 3:s.vertexAttrib3fv(q.location,N);break;case 4:s.vertexAttrib4fv(q.location,N);break;default:s.vertexAttrib1fv(q.location,N)}}}}U()}function P(){X();for(const A in a){const k=a[A];for(const et in k){const ct=k[et];for(const _t in ct)g(ct[_t].object),delete ct[_t];delete k[et]}delete a[A]}}function F(A){if(a[A.id]===void 0)return;const k=a[A.id];for(const et in k){const ct=k[et];for(const _t in ct)g(ct[_t].object),delete ct[_t];delete k[et]}delete a[A.id]}function V(A){for(const k in a){const et=a[k];if(et[A.id]===void 0)continue;const ct=et[A.id];for(const _t in ct)g(ct[_t].object),delete ct[_t];delete et[A.id]}}function X(){w(),f=!0,u!==l&&(u=l,p(u.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:X,resetDefaultState:w,dispose:P,releaseStatesOfGeometry:F,releaseStatesOfProgram:V,initAttributes:C,enableAttribute:S,disableUnusedAttributes:U}}function xA(s,t,i){let a;function l(p){a=p}function u(p,g){s.drawArrays(a,p,g),i.update(g,a,1)}function f(p,g,_){_!==0&&(s.drawArraysInstanced(a,p,g,_),i.update(g,a,_))}function d(p,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,p,0,g,0,_);let M=0;for(let E=0;E<_;E++)M+=g[E];i.update(M,a,1)}function m(p,g,_,x){if(_===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<p.length;E++)f(p[E],g[E],x[E]);else{M.multiDrawArraysInstancedWEBGL(a,p,0,g,0,x,0,_);let E=0;for(let C=0;C<_;C++)E+=g[C]*x[C];i.update(E,a,1)}}this.setMode=l,this.render=u,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function SA(s,t,i,a){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const V=t.get("EXT_texture_filter_anisotropic");l=s.getParameter(V.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(V){return!(V!==vi&&a.convert(V)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(V){const X=V===Zo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(V!==Oi&&a.convert(V)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&V!==sa&&!X)}function m(V){if(V==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";V="mediump"}return V==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),U=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),D=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),P=E>0,F=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:x,maxTextures:M,maxVertexTextures:E,maxTextureSize:C,maxCubemapSize:S,maxAttributes:v,maxVertexUniforms:U,maxVaryings:L,maxFragmentUniforms:D,vertexTextures:P,maxSamples:F}}function yA(s){const t=this;let i=null,a=0,l=!1,u=!1;const f=new Va,d=new de,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const M=_.length!==0||x||a!==0||l;return l=x,a=_.length,M},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(_,x){i=g(_,x,0)},this.setState=function(_,x,M){const E=_.clippingPlanes,C=_.clipIntersection,S=_.clipShadows,v=s.get(_);if(!l||E===null||E.length===0||u&&!S)u?g(null):p();else{const U=u?0:a,L=U*4;let D=v.clippingState||null;m.value=D,D=g(E,x,L,M);for(let P=0;P!==L;++P)D[P]=i[P];v.clippingState=D,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=U}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function g(_,x,M,E){const C=_!==null?_.length:0;let S=null;if(C!==0){if(S=m.value,E!==!0||S===null){const v=M+C*4,U=x.matrixWorldInverse;d.getNormalMatrix(U),(S===null||S.length<v)&&(S=new Float32Array(v));for(let L=0,D=M;L!==C;++L,D+=4)f.copy(_[L]).applyMatrix4(U,d),f.normal.toArray(S,D),S[D+3]=f.constant}m.value=S,m.needsUpdate=!0}return t.numPlanes=C,t.numIntersection=0,S}}function MA(s){let t=new WeakMap;function i(f,d){return d===jh?f.mapping=Cs:d===Zh&&(f.mapping=ws),f}function a(f){if(f&&f.isTexture){const d=f.mapping;if(d===jh||d===Zh)if(t.has(f)){const m=t.get(f).texture;return i(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new yE(m.height);return p.fromEquirectangularTexture(s,f),t.set(f,p),f.addEventListener("dispose",l),i(p.texture,f.mapping)}else return null}}return f}function l(f){const d=f.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function u(){t=new WeakMap}return{get:a,dispose:u}}const Ts=4,lv=[.125,.215,.35,.446,.526,.582],Sr=20,Uh=new Fo,uv=new Ue;let Lh=null,Nh=0,Oh=0,Ph=!1;const vr=(1+Math.sqrt(5))/2,Es=1/vr,cv=[new $(-vr,Es,0),new $(vr,Es,0),new $(-Es,0,vr),new $(Es,0,vr),new $(0,vr,-Es),new $(0,vr,Es),new $(-1,1,-1),new $(1,1,-1),new $(-1,1,1),new $(1,1,1)],EA=new $;class fv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,a=.1,l=100,u={}){const{size:f=256,position:d=EA}=u;Lh=this._renderer.getRenderTarget(),Nh=this._renderer.getActiveCubeFace(),Oh=this._renderer.getActiveMipmapLevel(),Ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,a,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Lh,Nh,Oh),this._renderer.xr.enabled=Ph,t.scissorTest=!1,Du(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Cs||t.mapping===ws?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Lh=this._renderer.getRenderTarget(),Nh=this._renderer.getActiveCubeFace(),Oh=this._renderer.getActiveMipmapLevel(),Ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=i||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,a={magFilter:Ci,minFilter:Ci,generateMipmaps:!1,type:Zo,format:vi,colorSpace:Ds,depthBuffer:!1},l=hv(t,i,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hv(t,i,a);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=TA(u)),this._blurMaterial=bA(u,t,i)}return l}_compileMaterial(t){const i=new Di(this._lodPlanes[0],t);this._renderer.compile(i,Uh)}_sceneToCubeUV(t,i,a,l,u){const m=new Bn(90,1,i,a),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,M=_.toneMapping;_.getClearColor(uv),_.toneMapping=Wa,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null));const C=new m0({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1}),S=new Di(new $o,C);let v=!1;const U=t.background;U?U.isColor&&(C.color.copy(U),t.background=null,v=!0):(C.color.copy(uv),v=!0);for(let L=0;L<6;L++){const D=L%3;D===0?(m.up.set(0,p[L],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+g[L],u.y,u.z)):D===1?(m.up.set(0,0,p[L]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+g[L],u.z)):(m.up.set(0,p[L],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+g[L]));const P=this._cubeSize;Du(l,D*P,L>2?P:0,P,P),_.setRenderTarget(l),v&&_.render(S,m),_.render(t,m)}S.geometry.dispose(),S.material.dispose(),_.toneMapping=M,_.autoClear=x,t.background=U}_textureToCubeUV(t,i){const a=this._renderer,l=t.mapping===Cs||t.mapping===ws;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=pv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dv());const u=l?this._cubemapMaterial:this._equirectMaterial,f=new Di(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=t;const m=this._cubeSize;Du(i,0,0,3*m,2*m),a.setRenderTarget(i),a.render(f,Uh)}_applyPMREM(t){const i=this._renderer,a=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const f=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=cv[(l-u-1)%cv.length];this._blur(t,u-1,u,f,d)}i.autoClear=a}_blur(t,i,a,l,u){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,a,l,"latitudinal",u),this._halfBlur(f,t,a,a,l,"longitudinal",u)}_halfBlur(t,i,a,l,u,f,d){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new Di(this._lodPlanes[l],p),x=p.uniforms,M=this._sizeLods[a]-1,E=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*Sr-1),C=u/E,S=isFinite(u)?1+Math.floor(g*C):Sr;S>Sr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Sr}`);const v=[];let U=0;for(let V=0;V<Sr;++V){const X=V/C,w=Math.exp(-X*X/2);v.push(w),V===0?U+=w:V<S&&(U+=2*w)}for(let V=0;V<v.length;V++)v[V]=v[V]/U;x.envMap.value=t.texture,x.samples.value=S,x.weights.value=v,x.latitudinal.value=f==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:L}=this;x.dTheta.value=E,x.mipInt.value=L-a;const D=this._sizeLods[l],P=3*D*(l>L-Ts?l-L+Ts:0),F=4*(this._cubeSize-D);Du(i,P,F,3*D,2*D),m.setRenderTarget(i),m.render(_,Uh)}}function TA(s){const t=[],i=[],a=[];let l=s;const u=s-Ts+1+lv.length;for(let f=0;f<u;f++){const d=Math.pow(2,l);i.push(d);let m=1/d;f>s-Ts?m=lv[f-s+Ts-1]:f===0&&(m=0),a.push(m);const p=1/(d-2),g=-p,_=1+p,x=[g,g,_,g,_,_,g,g,_,_,g,_],M=6,E=6,C=3,S=2,v=1,U=new Float32Array(C*E*M),L=new Float32Array(S*E*M),D=new Float32Array(v*E*M);for(let F=0;F<M;F++){const V=F%3*2/3-1,X=F>2?0:-1,w=[V,X,0,V+2/3,X,0,V+2/3,X+1,0,V,X,0,V+2/3,X+1,0,V,X+1,0];U.set(w,C*E*F),L.set(x,S*E*F);const A=[F,F,F,F,F,F];D.set(A,v*E*F)}const P=new ja;P.setAttribute("position",new Ui(U,C)),P.setAttribute("uv",new Ui(L,S)),P.setAttribute("faceIndex",new Ui(D,v)),t.push(P),l>Ts&&l--}return{lodPlanes:t,sizeLods:i,sigmas:a}}function hv(s,t,i){const a=new br(s,t,i);return a.texture.mapping=qu,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Du(s,t,i,a,l){s.viewport.set(t,i,a,l),s.scissor.set(t,i,a,l)}function bA(s,t,i){const a=new Float32Array(Sr),l=new $(0,1,0);return new Ya({name:"SphericalGaussianBlur",defines:{n:Sr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:qd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Xa,depthTest:!1,depthWrite:!1})}function dv(){return new Ya({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Xa,depthTest:!1,depthWrite:!1})}function pv(){return new Ya({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xa,depthTest:!1,depthWrite:!1})}function qd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function AA(s){let t=new WeakMap,i=null;function a(d){if(d&&d.isTexture){const m=d.mapping,p=m===jh||m===Zh,g=m===Cs||m===ws;if(p||g){let _=t.get(d);const x=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new fv(s)),_=p?i.fromEquirectangular(d,_):i.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),_.texture;if(_!==void 0)return _.texture;{const M=d.image;return p&&M&&M.height>0||g&&M&&l(M)?(i===null&&(i=new fv(s)),_=p?i.fromEquirectangular(d):i.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),d.addEventListener("dispose",u),_.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function f(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:f}}function RA(s){const t={};function i(a){if(t[a]!==void 0)return t[a];let l;switch(a){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(a)}return t[a]=l,l}return{has:function(a){return i(a)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(a){const l=i(a);return l===null&&Wo("THREE.WebGLRenderer: "+a+" extension not supported."),l}}}function CA(s,t,i,a){const l={},u=new WeakMap;function f(_){const x=_.target;x.index!==null&&t.remove(x.index);for(const E in x.attributes)t.remove(x.attributes[E]);x.removeEventListener("dispose",f),delete l[x.id];const M=u.get(x);M&&(t.remove(M),u.delete(x)),a.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(_,x){return l[x.id]===!0||(x.addEventListener("dispose",f),l[x.id]=!0,i.memory.geometries++),x}function m(_){const x=_.attributes;for(const M in x)t.update(x[M],s.ARRAY_BUFFER)}function p(_){const x=[],M=_.index,E=_.attributes.position;let C=0;if(M!==null){const U=M.array;C=M.version;for(let L=0,D=U.length;L<D;L+=3){const P=U[L+0],F=U[L+1],V=U[L+2];x.push(P,F,F,V,V,P)}}else if(E!==void 0){const U=E.array;C=E.version;for(let L=0,D=U.length/3-1;L<D;L+=3){const P=L+0,F=L+1,V=L+2;x.push(P,F,F,V,V,P)}}else return;const S=new(c0(x)?_0:g0)(x,1);S.version=C;const v=u.get(_);v&&t.remove(v),u.set(_,S)}function g(_){const x=u.get(_);if(x){const M=_.index;M!==null&&x.version<M.version&&p(_)}else p(_);return u.get(_)}return{get:d,update:m,getWireframeAttribute:g}}function wA(s,t,i){let a;function l(x){a=x}let u,f;function d(x){u=x.type,f=x.bytesPerElement}function m(x,M){s.drawElements(a,M,u,x*f),i.update(M,a,1)}function p(x,M,E){E!==0&&(s.drawElementsInstanced(a,M,u,x*f,E),i.update(M,a,E))}function g(x,M,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,M,0,u,x,0,E);let S=0;for(let v=0;v<E;v++)S+=M[v];i.update(S,a,1)}function _(x,M,E,C){if(E===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let v=0;v<x.length;v++)p(x[v]/f,M[v],C[v]);else{S.multiDrawElementsInstancedWEBGL(a,M,0,u,x,0,C,0,E);let v=0;for(let U=0;U<E;U++)v+=M[U]*C[U];i.update(v,a,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function DA(s){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function a(u,f,d){switch(i.calls++,f){case s.TRIANGLES:i.triangles+=d*(u/3);break;case s.LINES:i.lines+=d*(u/2);break;case s.LINE_STRIP:i.lines+=d*(u-1);break;case s.LINE_LOOP:i.lines+=d*u;break;case s.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:a}}function UA(s,t,i){const a=new WeakMap,l=new nn;function u(f,d,m){const p=f.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=g!==void 0?g.length:0;let x=a.get(d);if(x===void 0||x.count!==_){let A=function(){X.dispose(),a.delete(d),d.removeEventListener("dispose",A)};var M=A;x!==void 0&&x.texture.dispose();const E=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],U=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let D=0;E===!0&&(D=1),C===!0&&(D=2),S===!0&&(D=3);let P=d.attributes.position.count*D,F=1;P>t.maxTextureSize&&(F=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const V=new Float32Array(P*F*4*_),X=new f0(V,P,F,_);X.type=sa,X.needsUpdate=!0;const w=D*4;for(let k=0;k<_;k++){const et=v[k],ct=U[k],_t=L[k],ft=P*F*4*k;for(let B=0;B<et.count;B++){const Z=B*w;E===!0&&(l.fromBufferAttribute(et,B),V[ft+Z+0]=l.x,V[ft+Z+1]=l.y,V[ft+Z+2]=l.z,V[ft+Z+3]=0),C===!0&&(l.fromBufferAttribute(ct,B),V[ft+Z+4]=l.x,V[ft+Z+5]=l.y,V[ft+Z+6]=l.z,V[ft+Z+7]=0),S===!0&&(l.fromBufferAttribute(_t,B),V[ft+Z+8]=l.x,V[ft+Z+9]=l.y,V[ft+Z+10]=l.z,V[ft+Z+11]=_t.itemSize===4?l.w:1)}}x={count:_,texture:X,size:new ue(P,F)},a.set(d,x),d.addEventListener("dispose",A)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",f.morphTexture,i);else{let E=0;for(let S=0;S<p.length;S++)E+=p[S];const C=d.morphTargetsRelative?1:1-E;m.getUniforms().setValue(s,"morphTargetBaseInfluence",C),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:u}}function LA(s,t,i,a){let l=new WeakMap;function u(m){const p=a.render.frame,g=m.geometry,_=t.get(m,g);if(l.get(_)!==p&&(t.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return _}function f(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:f}}const T0=new Wn,mv=new y0(1,1),b0=new f0,A0=new aE,R0=new S0,gv=[],_v=[],vv=new Float32Array(16),xv=new Float32Array(9),Sv=new Float32Array(4);function Ps(s,t,i){const a=s[0];if(a<=0||a>0)return s;const l=t*i;let u=gv[l];if(u===void 0&&(u=new Float32Array(l),gv[l]=u),t!==0){a.toArray(u,0);for(let f=1,d=0;f!==t;++f)d+=i,s[f].toArray(u,d)}return u}function pn(s,t){if(s.length!==t.length)return!1;for(let i=0,a=s.length;i<a;i++)if(s[i]!==t[i])return!1;return!0}function mn(s,t){for(let i=0,a=t.length;i<a;i++)s[i]=t[i]}function ju(s,t){let i=_v[t];i===void 0&&(i=new Int32Array(t),_v[t]=i);for(let a=0;a!==t;++a)i[a]=s.allocateTextureUnit();return i}function NA(s,t){const i=this.cache;i[0]!==t&&(s.uniform1f(this.addr,t),i[0]=t)}function OA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(pn(i,t))return;s.uniform2fv(this.addr,t),mn(i,t)}}function PA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(pn(i,t))return;s.uniform3fv(this.addr,t),mn(i,t)}}function IA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(pn(i,t))return;s.uniform4fv(this.addr,t),mn(i,t)}}function BA(s,t){const i=this.cache,a=t.elements;if(a===void 0){if(pn(i,t))return;s.uniformMatrix2fv(this.addr,!1,t),mn(i,t)}else{if(pn(i,a))return;Sv.set(a),s.uniformMatrix2fv(this.addr,!1,Sv),mn(i,a)}}function zA(s,t){const i=this.cache,a=t.elements;if(a===void 0){if(pn(i,t))return;s.uniformMatrix3fv(this.addr,!1,t),mn(i,t)}else{if(pn(i,a))return;xv.set(a),s.uniformMatrix3fv(this.addr,!1,xv),mn(i,a)}}function FA(s,t){const i=this.cache,a=t.elements;if(a===void 0){if(pn(i,t))return;s.uniformMatrix4fv(this.addr,!1,t),mn(i,t)}else{if(pn(i,a))return;vv.set(a),s.uniformMatrix4fv(this.addr,!1,vv),mn(i,a)}}function HA(s,t){const i=this.cache;i[0]!==t&&(s.uniform1i(this.addr,t),i[0]=t)}function GA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(pn(i,t))return;s.uniform2iv(this.addr,t),mn(i,t)}}function VA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(pn(i,t))return;s.uniform3iv(this.addr,t),mn(i,t)}}function kA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(pn(i,t))return;s.uniform4iv(this.addr,t),mn(i,t)}}function XA(s,t){const i=this.cache;i[0]!==t&&(s.uniform1ui(this.addr,t),i[0]=t)}function WA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(pn(i,t))return;s.uniform2uiv(this.addr,t),mn(i,t)}}function qA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(pn(i,t))return;s.uniform3uiv(this.addr,t),mn(i,t)}}function YA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(pn(i,t))return;s.uniform4uiv(this.addr,t),mn(i,t)}}function jA(s,t,i){const a=this.cache,l=i.allocateTextureUnit();a[0]!==l&&(s.uniform1i(this.addr,l),a[0]=l);let u;this.type===s.SAMPLER_2D_SHADOW?(mv.compareFunction=u0,u=mv):u=T0,i.setTexture2D(t||u,l)}function ZA(s,t,i){const a=this.cache,l=i.allocateTextureUnit();a[0]!==l&&(s.uniform1i(this.addr,l),a[0]=l),i.setTexture3D(t||A0,l)}function KA(s,t,i){const a=this.cache,l=i.allocateTextureUnit();a[0]!==l&&(s.uniform1i(this.addr,l),a[0]=l),i.setTextureCube(t||R0,l)}function QA(s,t,i){const a=this.cache,l=i.allocateTextureUnit();a[0]!==l&&(s.uniform1i(this.addr,l),a[0]=l),i.setTexture2DArray(t||b0,l)}function JA(s){switch(s){case 5126:return NA;case 35664:return OA;case 35665:return PA;case 35666:return IA;case 35674:return BA;case 35675:return zA;case 35676:return FA;case 5124:case 35670:return HA;case 35667:case 35671:return GA;case 35668:case 35672:return VA;case 35669:case 35673:return kA;case 5125:return XA;case 36294:return WA;case 36295:return qA;case 36296:return YA;case 35678:case 36198:case 36298:case 36306:case 35682:return jA;case 35679:case 36299:case 36307:return ZA;case 35680:case 36300:case 36308:case 36293:return KA;case 36289:case 36303:case 36311:case 36292:return QA}}function $A(s,t){s.uniform1fv(this.addr,t)}function t1(s,t){const i=Ps(t,this.size,2);s.uniform2fv(this.addr,i)}function e1(s,t){const i=Ps(t,this.size,3);s.uniform3fv(this.addr,i)}function n1(s,t){const i=Ps(t,this.size,4);s.uniform4fv(this.addr,i)}function i1(s,t){const i=Ps(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function a1(s,t){const i=Ps(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function r1(s,t){const i=Ps(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function s1(s,t){s.uniform1iv(this.addr,t)}function o1(s,t){s.uniform2iv(this.addr,t)}function l1(s,t){s.uniform3iv(this.addr,t)}function u1(s,t){s.uniform4iv(this.addr,t)}function c1(s,t){s.uniform1uiv(this.addr,t)}function f1(s,t){s.uniform2uiv(this.addr,t)}function h1(s,t){s.uniform3uiv(this.addr,t)}function d1(s,t){s.uniform4uiv(this.addr,t)}function p1(s,t,i){const a=this.cache,l=t.length,u=ju(i,l);pn(a,u)||(s.uniform1iv(this.addr,u),mn(a,u));for(let f=0;f!==l;++f)i.setTexture2D(t[f]||T0,u[f])}function m1(s,t,i){const a=this.cache,l=t.length,u=ju(i,l);pn(a,u)||(s.uniform1iv(this.addr,u),mn(a,u));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||A0,u[f])}function g1(s,t,i){const a=this.cache,l=t.length,u=ju(i,l);pn(a,u)||(s.uniform1iv(this.addr,u),mn(a,u));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||R0,u[f])}function _1(s,t,i){const a=this.cache,l=t.length,u=ju(i,l);pn(a,u)||(s.uniform1iv(this.addr,u),mn(a,u));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||b0,u[f])}function v1(s){switch(s){case 5126:return $A;case 35664:return t1;case 35665:return e1;case 35666:return n1;case 35674:return i1;case 35675:return a1;case 35676:return r1;case 5124:case 35670:return s1;case 35667:case 35671:return o1;case 35668:case 35672:return l1;case 35669:case 35673:return u1;case 5125:return c1;case 36294:return f1;case 36295:return h1;case 36296:return d1;case 35678:case 36198:case 36298:case 36306:case 35682:return p1;case 35679:case 36299:case 36307:return m1;case 35680:case 36300:case 36308:case 36293:return g1;case 36289:case 36303:case 36311:case 36292:return _1}}class x1{constructor(t,i,a){this.id=t,this.addr=a,this.cache=[],this.type=i.type,this.setValue=JA(i.type)}}class S1{constructor(t,i,a){this.id=t,this.addr=a,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=v1(i.type)}}class y1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,a){const l=this.seq;for(let u=0,f=l.length;u!==f;++u){const d=l[u];d.setValue(t,i[d.id],a)}}}const Ih=/(\w+)(\])?(\[|\.)?/g;function yv(s,t){s.seq.push(t),s.map[t.id]=t}function M1(s,t,i){const a=s.name,l=a.length;for(Ih.lastIndex=0;;){const u=Ih.exec(a),f=Ih.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&f+2===l){yv(i,p===void 0?new x1(d,s,t):new S1(d,s,t));break}else{let _=i.map[d];_===void 0&&(_=new y1(d),yv(i,_)),i=_}}}class Fu{constructor(t,i){this.seq=[],this.map={};const a=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<a;++l){const u=t.getActiveUniform(i,l),f=t.getUniformLocation(i,u.name);M1(u,f,this)}}setValue(t,i,a,l){const u=this.map[i];u!==void 0&&u.setValue(t,a,l)}setOptional(t,i,a){const l=i[a];l!==void 0&&this.setValue(t,a,l)}static upload(t,i,a,l){for(let u=0,f=i.length;u!==f;++u){const d=i[u],m=a[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const a=[];for(let l=0,u=t.length;l!==u;++l){const f=t[l];f.id in i&&a.push(f)}return a}}function Mv(s,t,i){const a=s.createShader(t);return s.shaderSource(a,i),s.compileShader(a),a}const E1=37297;let T1=0;function b1(s,t){const i=s.split(`
`),a=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let f=l;f<u;f++){const d=f+1;a.push(`${d===t?">":" "} ${d}: ${i[f]}`)}return a.join(`
`)}const Ev=new de;function A1(s){Ce._getMatrix(Ev,Ce.workingColorSpace,s);const t=`mat3( ${Ev.elements.map(i=>i.toFixed(4))} )`;switch(Ce.getTransfer(s)){case Gu:return[t,"LinearTransferOETF"];case Fe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Tv(s,t,i){const a=s.getShaderParameter(t,s.COMPILE_STATUS),u=(s.getShaderInfoLog(t)||"").trim();if(a&&u==="")return"";const f=/ERROR: 0:(\d+)/.exec(u);if(f){const d=parseInt(f[1]);return i.toUpperCase()+`

`+u+`

`+b1(s.getShaderSource(t),d)}else return u}function R1(s,t){const i=A1(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function C1(s,t){let i;switch(t){case LM:i="Linear";break;case NM:i="Reinhard";break;case OM:i="Cineon";break;case PM:i="ACESFilmic";break;case BM:i="AgX";break;case zM:i="Neutral";break;case IM:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Uu=new $;function w1(){Ce.getLuminanceCoefficients(Uu);const s=Uu.x.toFixed(4),t=Uu.y.toFixed(4),i=Uu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function D1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zo).join(`
`)}function U1(s){const t=[];for(const i in s){const a=s[i];a!==!1&&t.push("#define "+i+" "+a)}return t.join(`
`)}function L1(s,t){const i={},a=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let l=0;l<a;l++){const u=s.getActiveAttrib(t,l),f=u.name;let d=1;u.type===s.FLOAT_MAT2&&(d=2),u.type===s.FLOAT_MAT3&&(d=3),u.type===s.FLOAT_MAT4&&(d=4),i[f]={type:u.type,location:s.getAttribLocation(t,f),locationSize:d}}return i}function zo(s){return s!==""}function bv(s,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Av(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const N1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rd(s){return s.replace(N1,P1)}const O1=new Map;function P1(s,t){let i=ge[t];if(i===void 0){const a=O1.get(t);if(a!==void 0)i=ge[a],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("Can not resolve #include <"+t+">")}return Rd(i)}const I1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rv(s){return s.replace(I1,B1)}function B1(s,t,i,a){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=a.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function Cv(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function z1(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Qv?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===fM?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===aa&&(t="SHADOWMAP_TYPE_VSM"),t}function F1(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Cs:case ws:t="ENVMAP_TYPE_CUBE";break;case qu:t="ENVMAP_TYPE_CUBE_UV";break}return t}function H1(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ws:t="ENVMAP_MODE_REFRACTION";break}return t}function G1(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Jv:t="ENVMAP_BLENDING_MULTIPLY";break;case DM:t="ENVMAP_BLENDING_MIX";break;case UM:t="ENVMAP_BLENDING_ADD";break}return t}function V1(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:a,maxMip:i}}function k1(s,t,i,a){const l=s.getContext(),u=i.defines;let f=i.vertexShader,d=i.fragmentShader;const m=z1(i),p=F1(i),g=H1(i),_=G1(i),x=V1(i),M=D1(i),E=U1(u),C=l.createProgram();let S,v,U=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(zo).join(`
`),S.length>0&&(S+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(zo).join(`
`),v.length>0&&(v+=`
`)):(S=[Cv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zo).join(`
`),v=[Cv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Wa?"#define TONE_MAPPING":"",i.toneMapping!==Wa?ge.tonemapping_pars_fragment:"",i.toneMapping!==Wa?C1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ge.colorspace_pars_fragment,R1("linearToOutputTexel",i.outputColorSpace),w1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(zo).join(`
`)),f=Rd(f),f=bv(f,i),f=Av(f,i),d=Rd(d),d=bv(d,i),d=Av(d,i),f=Rv(f),d=Rv(d),i.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,v=["#define varying in",i.glslVersion===H_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===H_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const L=U+S+f,D=U+v+d,P=Mv(l,l.VERTEX_SHADER,L),F=Mv(l,l.FRAGMENT_SHADER,D);l.attachShader(C,P),l.attachShader(C,F),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function V(k){if(s.debug.checkShaderErrors){const et=l.getProgramInfoLog(C)||"",ct=l.getShaderInfoLog(P)||"",_t=l.getShaderInfoLog(F)||"",ft=et.trim(),B=ct.trim(),Z=_t.trim();let q=!0,Et=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,C,P,F);else{const N=Tv(l,P,"vertex"),J=Tv(l,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+ft+`
`+N+`
`+J)}else ft!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ft):(B===""||Z==="")&&(Et=!1);Et&&(k.diagnostics={runnable:q,programLog:ft,vertexShader:{log:B,prefix:S},fragmentShader:{log:Z,prefix:v}})}l.deleteShader(P),l.deleteShader(F),X=new Fu(l,C),w=L1(l,C)}let X;this.getUniforms=function(){return X===void 0&&V(this),X};let w;this.getAttributes=function(){return w===void 0&&V(this),w};let A=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=l.getProgramParameter(C,E1)),A},this.destroy=function(){a.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=T1++,this.cacheKey=t,this.usedTimes=1,this.program=C,this.vertexShader=P,this.fragmentShader=F,this}let X1=0;class W1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,a=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(a),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(u)===!1&&(f.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const a of i)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let a=i.get(t);return a===void 0&&(a=new Set,i.set(t,a)),a}_getShaderStage(t){const i=this.shaderCache;let a=i.get(t);return a===void 0&&(a=new q1(t),i.set(t,a)),a}}class q1{constructor(t){this.id=X1++,this.code=t,this.usedTimes=0}}function Y1(s,t,i,a,l,u,f){const d=new d0,m=new W1,p=new Set,g=[],_=l.logarithmicDepthBuffer,x=l.vertexTextures;let M=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(w){return p.add(w),w===0?"uv":`uv${w}`}function S(w,A,k,et,ct){const _t=et.fog,ft=ct.geometry,B=w.isMeshStandardMaterial?et.environment:null,Z=(w.isMeshStandardMaterial?i:t).get(w.envMap||B),q=Z&&Z.mapping===qu?Z.image.height:null,Et=E[w.type];w.precision!==null&&(M=l.getMaxPrecision(w.precision),M!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",M,"instead."));const N=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,J=N!==void 0?N.length:0;let Mt=0;ft.morphAttributes.position!==void 0&&(Mt=1),ft.morphAttributes.normal!==void 0&&(Mt=2),ft.morphAttributes.color!==void 0&&(Mt=3);let Tt,Lt,Vt,nt;if(Et){const _e=Ri[Et];Tt=_e.vertexShader,Lt=_e.fragmentShader}else Tt=w.vertexShader,Lt=w.fragmentShader,m.update(w),Vt=m.getVertexShaderID(w),nt=m.getFragmentShaderID(w);const vt=s.getRenderTarget(),Dt=s.state.buffers.depth.getReversed(),Jt=ct.isInstancedMesh===!0,qt=ct.isBatchedMesh===!0,fe=!!w.map,Ze=!!w.matcap,H=!!Z,we=!!w.aoMap,oe=!!w.lightMap,ne=!!w.bumpMap,zt=!!w.normalMap,Le=!!w.displacementMap,kt=!!w.emissiveMap,le=!!w.metalnessMap,Xe=!!w.roughnessMap,Ve=w.anisotropy>0,O=w.clearcoat>0,T=w.dispersion>0,it=w.iridescence>0,ht=w.sheen>0,mt=w.transmission>0,ut=Ve&&!!w.anisotropyMap,Ht=O&&!!w.clearcoatMap,Ut=O&&!!w.clearcoatNormalMap,Wt=O&&!!w.clearcoatRoughnessMap,Yt=it&&!!w.iridescenceMap,bt=it&&!!w.iridescenceThicknessMap,Nt=ht&&!!w.sheenColorMap,jt=ht&&!!w.sheenRoughnessMap,z=!!w.specularMap,at=!!w.specularColorMap,wt=!!w.specularIntensityMap,G=mt&&!!w.transmissionMap,yt=mt&&!!w.thicknessMap,Rt=!!w.gradientMap,Ot=!!w.alphaMap,At=w.alphaTest>0,gt=!!w.alphaHash,Ft=!!w.extensions;let Kt=Wa;w.toneMapped&&(vt===null||vt.isXRRenderTarget===!0)&&(Kt=s.toneMapping);const Te={shaderID:Et,shaderType:w.type,shaderName:w.name,vertexShader:Tt,fragmentShader:Lt,defines:w.defines,customVertexShaderID:Vt,customFragmentShaderID:nt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:M,batching:qt,batchingColor:qt&&ct._colorsTexture!==null,instancing:Jt,instancingColor:Jt&&ct.instanceColor!==null,instancingMorph:Jt&&ct.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:vt===null?s.outputColorSpace:vt.isXRRenderTarget===!0?vt.texture.colorSpace:Ds,alphaToCoverage:!!w.alphaToCoverage,map:fe,matcap:Ze,envMap:H,envMapMode:H&&Z.mapping,envMapCubeUVHeight:q,aoMap:we,lightMap:oe,bumpMap:ne,normalMap:zt,displacementMap:x&&Le,emissiveMap:kt,normalMapObjectSpace:zt&&w.normalMapType===VM,normalMapTangentSpace:zt&&w.normalMapType===l0,metalnessMap:le,roughnessMap:Xe,anisotropy:Ve,anisotropyMap:ut,clearcoat:O,clearcoatMap:Ht,clearcoatNormalMap:Ut,clearcoatRoughnessMap:Wt,dispersion:T,iridescence:it,iridescenceMap:Yt,iridescenceThicknessMap:bt,sheen:ht,sheenColorMap:Nt,sheenRoughnessMap:jt,specularMap:z,specularColorMap:at,specularIntensityMap:wt,transmission:mt,transmissionMap:G,thicknessMap:yt,gradientMap:Rt,opaque:w.transparent===!1&&w.blending===bs&&w.alphaToCoverage===!1,alphaMap:Ot,alphaTest:At,alphaHash:gt,combine:w.combine,mapUv:fe&&C(w.map.channel),aoMapUv:we&&C(w.aoMap.channel),lightMapUv:oe&&C(w.lightMap.channel),bumpMapUv:ne&&C(w.bumpMap.channel),normalMapUv:zt&&C(w.normalMap.channel),displacementMapUv:Le&&C(w.displacementMap.channel),emissiveMapUv:kt&&C(w.emissiveMap.channel),metalnessMapUv:le&&C(w.metalnessMap.channel),roughnessMapUv:Xe&&C(w.roughnessMap.channel),anisotropyMapUv:ut&&C(w.anisotropyMap.channel),clearcoatMapUv:Ht&&C(w.clearcoatMap.channel),clearcoatNormalMapUv:Ut&&C(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Wt&&C(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Yt&&C(w.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&C(w.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&C(w.sheenColorMap.channel),sheenRoughnessMapUv:jt&&C(w.sheenRoughnessMap.channel),specularMapUv:z&&C(w.specularMap.channel),specularColorMapUv:at&&C(w.specularColorMap.channel),specularIntensityMapUv:wt&&C(w.specularIntensityMap.channel),transmissionMapUv:G&&C(w.transmissionMap.channel),thicknessMapUv:yt&&C(w.thicknessMap.channel),alphaMapUv:Ot&&C(w.alphaMap.channel),vertexTangents:!!ft.attributes.tangent&&(zt||Ve),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,pointsUvs:ct.isPoints===!0&&!!ft.attributes.uv&&(fe||Ot),fog:!!_t,useFog:w.fog===!0,fogExp2:!!_t&&_t.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Dt,skinning:ct.isSkinnedMesh===!0,morphTargets:ft.morphAttributes.position!==void 0,morphNormals:ft.morphAttributes.normal!==void 0,morphColors:ft.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:Mt,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&k.length>0,shadowMapType:s.shadowMap.type,toneMapping:Kt,decodeVideoTexture:fe&&w.map.isVideoTexture===!0&&Ce.getTransfer(w.map.colorSpace)===Fe,decodeVideoTextureEmissive:kt&&w.emissiveMap.isVideoTexture===!0&&Ce.getTransfer(w.emissiveMap.colorSpace)===Fe,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ra,flipSided:w.side===Xn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ft&&w.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&w.extensions.multiDraw===!0||qt)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Te.vertexUv1s=p.has(1),Te.vertexUv2s=p.has(2),Te.vertexUv3s=p.has(3),p.clear(),Te}function v(w){const A=[];if(w.shaderID?A.push(w.shaderID):(A.push(w.customVertexShaderID),A.push(w.customFragmentShaderID)),w.defines!==void 0)for(const k in w.defines)A.push(k),A.push(w.defines[k]);return w.isRawShaderMaterial===!1&&(U(A,w),L(A,w),A.push(s.outputColorSpace)),A.push(w.customProgramCacheKey),A.join()}function U(w,A){w.push(A.precision),w.push(A.outputColorSpace),w.push(A.envMapMode),w.push(A.envMapCubeUVHeight),w.push(A.mapUv),w.push(A.alphaMapUv),w.push(A.lightMapUv),w.push(A.aoMapUv),w.push(A.bumpMapUv),w.push(A.normalMapUv),w.push(A.displacementMapUv),w.push(A.emissiveMapUv),w.push(A.metalnessMapUv),w.push(A.roughnessMapUv),w.push(A.anisotropyMapUv),w.push(A.clearcoatMapUv),w.push(A.clearcoatNormalMapUv),w.push(A.clearcoatRoughnessMapUv),w.push(A.iridescenceMapUv),w.push(A.iridescenceThicknessMapUv),w.push(A.sheenColorMapUv),w.push(A.sheenRoughnessMapUv),w.push(A.specularMapUv),w.push(A.specularColorMapUv),w.push(A.specularIntensityMapUv),w.push(A.transmissionMapUv),w.push(A.thicknessMapUv),w.push(A.combine),w.push(A.fogExp2),w.push(A.sizeAttenuation),w.push(A.morphTargetsCount),w.push(A.morphAttributeCount),w.push(A.numDirLights),w.push(A.numPointLights),w.push(A.numSpotLights),w.push(A.numSpotLightMaps),w.push(A.numHemiLights),w.push(A.numRectAreaLights),w.push(A.numDirLightShadows),w.push(A.numPointLightShadows),w.push(A.numSpotLightShadows),w.push(A.numSpotLightShadowsWithMaps),w.push(A.numLightProbes),w.push(A.shadowMapType),w.push(A.toneMapping),w.push(A.numClippingPlanes),w.push(A.numClipIntersection),w.push(A.depthPacking)}function L(w,A){d.disableAll(),A.supportsVertexTextures&&d.enable(0),A.instancing&&d.enable(1),A.instancingColor&&d.enable(2),A.instancingMorph&&d.enable(3),A.matcap&&d.enable(4),A.envMap&&d.enable(5),A.normalMapObjectSpace&&d.enable(6),A.normalMapTangentSpace&&d.enable(7),A.clearcoat&&d.enable(8),A.iridescence&&d.enable(9),A.alphaTest&&d.enable(10),A.vertexColors&&d.enable(11),A.vertexAlphas&&d.enable(12),A.vertexUv1s&&d.enable(13),A.vertexUv2s&&d.enable(14),A.vertexUv3s&&d.enable(15),A.vertexTangents&&d.enable(16),A.anisotropy&&d.enable(17),A.alphaHash&&d.enable(18),A.batching&&d.enable(19),A.dispersion&&d.enable(20),A.batchingColor&&d.enable(21),A.gradientMap&&d.enable(22),w.push(d.mask),d.disableAll(),A.fog&&d.enable(0),A.useFog&&d.enable(1),A.flatShading&&d.enable(2),A.logarithmicDepthBuffer&&d.enable(3),A.reversedDepthBuffer&&d.enable(4),A.skinning&&d.enable(5),A.morphTargets&&d.enable(6),A.morphNormals&&d.enable(7),A.morphColors&&d.enable(8),A.premultipliedAlpha&&d.enable(9),A.shadowMapEnabled&&d.enable(10),A.doubleSided&&d.enable(11),A.flipSided&&d.enable(12),A.useDepthPacking&&d.enable(13),A.dithering&&d.enable(14),A.transmission&&d.enable(15),A.sheen&&d.enable(16),A.opaque&&d.enable(17),A.pointsUvs&&d.enable(18),A.decodeVideoTexture&&d.enable(19),A.decodeVideoTextureEmissive&&d.enable(20),A.alphaToCoverage&&d.enable(21),w.push(d.mask)}function D(w){const A=E[w.type];let k;if(A){const et=Ri[A];k=_E.clone(et.uniforms)}else k=w.uniforms;return k}function P(w,A){let k;for(let et=0,ct=g.length;et<ct;et++){const _t=g[et];if(_t.cacheKey===A){k=_t,++k.usedTimes;break}}return k===void 0&&(k=new k1(s,A,w,u),g.push(k)),k}function F(w){if(--w.usedTimes===0){const A=g.indexOf(w);g[A]=g[g.length-1],g.pop(),w.destroy()}}function V(w){m.remove(w)}function X(){m.dispose()}return{getParameters:S,getProgramCacheKey:v,getUniforms:D,acquireProgram:P,releaseProgram:F,releaseShaderCache:V,programs:g,dispose:X}}function j1(){let s=new WeakMap;function t(f){return s.has(f)}function i(f){let d=s.get(f);return d===void 0&&(d={},s.set(f,d)),d}function a(f){s.delete(f)}function l(f,d,m){s.get(f)[d]=m}function u(){s=new WeakMap}return{has:t,get:i,remove:a,update:l,dispose:u}}function Z1(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function wv(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Dv(){const s=[];let t=0;const i=[],a=[],l=[];function u(){t=0,i.length=0,a.length=0,l.length=0}function f(_,x,M,E,C,S){let v=s[t];return v===void 0?(v={id:_.id,object:_,geometry:x,material:M,groupOrder:E,renderOrder:_.renderOrder,z:C,group:S},s[t]=v):(v.id=_.id,v.object=_,v.geometry=x,v.material=M,v.groupOrder=E,v.renderOrder=_.renderOrder,v.z=C,v.group=S),t++,v}function d(_,x,M,E,C,S){const v=f(_,x,M,E,C,S);M.transmission>0?a.push(v):M.transparent===!0?l.push(v):i.push(v)}function m(_,x,M,E,C,S){const v=f(_,x,M,E,C,S);M.transmission>0?a.unshift(v):M.transparent===!0?l.unshift(v):i.unshift(v)}function p(_,x){i.length>1&&i.sort(_||Z1),a.length>1&&a.sort(x||wv),l.length>1&&l.sort(x||wv)}function g(){for(let _=t,x=s.length;_<x;_++){const M=s[_];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:a,transparent:l,init:u,push:d,unshift:m,finish:g,sort:p}}function K1(){let s=new WeakMap;function t(a,l){const u=s.get(a);let f;return u===void 0?(f=new Dv,s.set(a,[f])):l>=u.length?(f=new Dv,u.push(f)):f=u[l],f}function i(){s=new WeakMap}return{get:t,dispose:i}}function Q1(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new $,color:new Ue};break;case"SpotLight":i={position:new $,direction:new $,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new $,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":i={direction:new $,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":i={color:new Ue,position:new $,halfWidth:new $,halfHeight:new $};break}return s[t.id]=i,i}}}function J1(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=i,i}}}let $1=0;function tR(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function eR(s){const t=new Q1,i=J1(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)a.probe.push(new $);const l=new $,u=new sn,f=new sn;function d(p){let g=0,_=0,x=0;for(let w=0;w<9;w++)a.probe[w].set(0,0,0);let M=0,E=0,C=0,S=0,v=0,U=0,L=0,D=0,P=0,F=0,V=0;p.sort(tR);for(let w=0,A=p.length;w<A;w++){const k=p[w],et=k.color,ct=k.intensity,_t=k.distance,ft=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)g+=et.r*ct,_+=et.g*ct,x+=et.b*ct;else if(k.isLightProbe){for(let B=0;B<9;B++)a.probe[B].addScaledVector(k.sh.coefficients[B],ct);V++}else if(k.isDirectionalLight){const B=t.get(k);if(B.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const Z=k.shadow,q=i.get(k);q.shadowIntensity=Z.intensity,q.shadowBias=Z.bias,q.shadowNormalBias=Z.normalBias,q.shadowRadius=Z.radius,q.shadowMapSize=Z.mapSize,a.directionalShadow[M]=q,a.directionalShadowMap[M]=ft,a.directionalShadowMatrix[M]=k.shadow.matrix,U++}a.directional[M]=B,M++}else if(k.isSpotLight){const B=t.get(k);B.position.setFromMatrixPosition(k.matrixWorld),B.color.copy(et).multiplyScalar(ct),B.distance=_t,B.coneCos=Math.cos(k.angle),B.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),B.decay=k.decay,a.spot[C]=B;const Z=k.shadow;if(k.map&&(a.spotLightMap[P]=k.map,P++,Z.updateMatrices(k),k.castShadow&&F++),a.spotLightMatrix[C]=Z.matrix,k.castShadow){const q=i.get(k);q.shadowIntensity=Z.intensity,q.shadowBias=Z.bias,q.shadowNormalBias=Z.normalBias,q.shadowRadius=Z.radius,q.shadowMapSize=Z.mapSize,a.spotShadow[C]=q,a.spotShadowMap[C]=ft,D++}C++}else if(k.isRectAreaLight){const B=t.get(k);B.color.copy(et).multiplyScalar(ct),B.halfWidth.set(k.width*.5,0,0),B.halfHeight.set(0,k.height*.5,0),a.rectArea[S]=B,S++}else if(k.isPointLight){const B=t.get(k);if(B.color.copy(k.color).multiplyScalar(k.intensity),B.distance=k.distance,B.decay=k.decay,k.castShadow){const Z=k.shadow,q=i.get(k);q.shadowIntensity=Z.intensity,q.shadowBias=Z.bias,q.shadowNormalBias=Z.normalBias,q.shadowRadius=Z.radius,q.shadowMapSize=Z.mapSize,q.shadowCameraNear=Z.camera.near,q.shadowCameraFar=Z.camera.far,a.pointShadow[E]=q,a.pointShadowMap[E]=ft,a.pointShadowMatrix[E]=k.shadow.matrix,L++}a.point[E]=B,E++}else if(k.isHemisphereLight){const B=t.get(k);B.skyColor.copy(k.color).multiplyScalar(ct),B.groundColor.copy(k.groundColor).multiplyScalar(ct),a.hemi[v]=B,v++}}S>0&&(s.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Bt.LTC_FLOAT_1,a.rectAreaLTC2=Bt.LTC_FLOAT_2):(a.rectAreaLTC1=Bt.LTC_HALF_1,a.rectAreaLTC2=Bt.LTC_HALF_2)),a.ambient[0]=g,a.ambient[1]=_,a.ambient[2]=x;const X=a.hash;(X.directionalLength!==M||X.pointLength!==E||X.spotLength!==C||X.rectAreaLength!==S||X.hemiLength!==v||X.numDirectionalShadows!==U||X.numPointShadows!==L||X.numSpotShadows!==D||X.numSpotMaps!==P||X.numLightProbes!==V)&&(a.directional.length=M,a.spot.length=C,a.rectArea.length=S,a.point.length=E,a.hemi.length=v,a.directionalShadow.length=U,a.directionalShadowMap.length=U,a.pointShadow.length=L,a.pointShadowMap.length=L,a.spotShadow.length=D,a.spotShadowMap.length=D,a.directionalShadowMatrix.length=U,a.pointShadowMatrix.length=L,a.spotLightMatrix.length=D+P-F,a.spotLightMap.length=P,a.numSpotLightShadowsWithMaps=F,a.numLightProbes=V,X.directionalLength=M,X.pointLength=E,X.spotLength=C,X.rectAreaLength=S,X.hemiLength=v,X.numDirectionalShadows=U,X.numPointShadows=L,X.numSpotShadows=D,X.numSpotMaps=P,X.numLightProbes=V,a.version=$1++)}function m(p,g){let _=0,x=0,M=0,E=0,C=0;const S=g.matrixWorldInverse;for(let v=0,U=p.length;v<U;v++){const L=p[v];if(L.isDirectionalLight){const D=a.directional[_];D.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(S),_++}else if(L.isSpotLight){const D=a.spot[M];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(S),D.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(S),M++}else if(L.isRectAreaLight){const D=a.rectArea[E];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(S),f.identity(),u.copy(L.matrixWorld),u.premultiply(S),f.extractRotation(u),D.halfWidth.set(L.width*.5,0,0),D.halfHeight.set(0,L.height*.5,0),D.halfWidth.applyMatrix4(f),D.halfHeight.applyMatrix4(f),E++}else if(L.isPointLight){const D=a.point[x];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(S),x++}else if(L.isHemisphereLight){const D=a.hemi[C];D.direction.setFromMatrixPosition(L.matrixWorld),D.direction.transformDirection(S),C++}}}return{setup:d,setupView:m,state:a}}function Uv(s){const t=new eR(s),i=[],a=[];function l(g){p.camera=g,i.length=0,a.length=0}function u(g){i.push(g)}function f(g){a.push(g)}function d(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:a,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:f}}function nR(s){let t=new WeakMap;function i(l,u=0){const f=t.get(l);let d;return f===void 0?(d=new Uv(s),t.set(l,[d])):u>=f.length?(d=new Uv(s),f.push(d)):d=f[u],d}function a(){t=new WeakMap}return{get:i,dispose:a}}const iR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,aR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function rR(s,t,i){let a=new kd;const l=new ue,u=new ue,f=new nn,d=new CE({depthPacking:GM}),m=new wE,p={},g=i.maxTextureSize,_={[qa]:Xn,[Xn]:qa,[ra]:ra},x=new Ya({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:iR,fragmentShader:aR}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const E=new ja;E.setAttribute("position",new Ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Di(E,x),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qv;let v=this.type;this.render=function(F,V,X){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||F.length===0)return;const w=s.getRenderTarget(),A=s.getActiveCubeFace(),k=s.getActiveMipmapLevel(),et=s.state;et.setBlending(Xa),et.buffers.depth.getReversed()===!0?et.buffers.color.setClear(0,0,0,0):et.buffers.color.setClear(1,1,1,1),et.buffers.depth.setTest(!0),et.setScissorTest(!1);const ct=v!==aa&&this.type===aa,_t=v===aa&&this.type!==aa;for(let ft=0,B=F.length;ft<B;ft++){const Z=F[ft],q=Z.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;l.copy(q.mapSize);const Et=q.getFrameExtents();if(l.multiply(Et),u.copy(q.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/Et.x),l.x=u.x*Et.x,q.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/Et.y),l.y=u.y*Et.y,q.mapSize.y=u.y)),q.map===null||ct===!0||_t===!0){const J=this.type!==aa?{minFilter:xi,magFilter:xi}:{};q.map!==null&&q.map.dispose(),q.map=new br(l.x,l.y,J),q.map.texture.name=Z.name+".shadowMap",q.camera.updateProjectionMatrix()}s.setRenderTarget(q.map),s.clear();const N=q.getViewportCount();for(let J=0;J<N;J++){const Mt=q.getViewport(J);f.set(u.x*Mt.x,u.y*Mt.y,u.x*Mt.z,u.y*Mt.w),et.viewport(f),q.updateMatrices(Z,J),a=q.getFrustum(),D(V,X,q.camera,Z,this.type)}q.isPointLightShadow!==!0&&this.type===aa&&U(q,X),q.needsUpdate=!1}v=this.type,S.needsUpdate=!1,s.setRenderTarget(w,A,k)};function U(F,V){const X=t.update(C);x.defines.VSM_SAMPLES!==F.blurSamples&&(x.defines.VSM_SAMPLES=F.blurSamples,M.defines.VSM_SAMPLES=F.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new br(l.x,l.y)),x.uniforms.shadow_pass.value=F.map.texture,x.uniforms.resolution.value=F.mapSize,x.uniforms.radius.value=F.radius,s.setRenderTarget(F.mapPass),s.clear(),s.renderBufferDirect(V,null,X,x,C,null),M.uniforms.shadow_pass.value=F.mapPass.texture,M.uniforms.resolution.value=F.mapSize,M.uniforms.radius.value=F.radius,s.setRenderTarget(F.map),s.clear(),s.renderBufferDirect(V,null,X,M,C,null)}function L(F,V,X,w){let A=null;const k=X.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(k!==void 0)A=k;else if(A=X.isPointLight===!0?m:d,s.localClippingEnabled&&V.clipShadows===!0&&Array.isArray(V.clippingPlanes)&&V.clippingPlanes.length!==0||V.displacementMap&&V.displacementScale!==0||V.alphaMap&&V.alphaTest>0||V.map&&V.alphaTest>0||V.alphaToCoverage===!0){const et=A.uuid,ct=V.uuid;let _t=p[et];_t===void 0&&(_t={},p[et]=_t);let ft=_t[ct];ft===void 0&&(ft=A.clone(),_t[ct]=ft,V.addEventListener("dispose",P)),A=ft}if(A.visible=V.visible,A.wireframe=V.wireframe,w===aa?A.side=V.shadowSide!==null?V.shadowSide:V.side:A.side=V.shadowSide!==null?V.shadowSide:_[V.side],A.alphaMap=V.alphaMap,A.alphaTest=V.alphaToCoverage===!0?.5:V.alphaTest,A.map=V.map,A.clipShadows=V.clipShadows,A.clippingPlanes=V.clippingPlanes,A.clipIntersection=V.clipIntersection,A.displacementMap=V.displacementMap,A.displacementScale=V.displacementScale,A.displacementBias=V.displacementBias,A.wireframeLinewidth=V.wireframeLinewidth,A.linewidth=V.linewidth,X.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const et=s.properties.get(A);et.light=X}return A}function D(F,V,X,w,A){if(F.visible===!1)return;if(F.layers.test(V.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&A===aa)&&(!F.frustumCulled||a.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,F.matrixWorld);const ct=t.update(F),_t=F.material;if(Array.isArray(_t)){const ft=ct.groups;for(let B=0,Z=ft.length;B<Z;B++){const q=ft[B],Et=_t[q.materialIndex];if(Et&&Et.visible){const N=L(F,Et,w,A);F.onBeforeShadow(s,F,V,X,ct,N,q),s.renderBufferDirect(X,null,ct,N,F,q),F.onAfterShadow(s,F,V,X,ct,N,q)}}}else if(_t.visible){const ft=L(F,_t,w,A);F.onBeforeShadow(s,F,V,X,ct,ft,null),s.renderBufferDirect(X,null,ct,ft,F,null),F.onAfterShadow(s,F,V,X,ct,ft,null)}}const et=F.children;for(let ct=0,_t=et.length;ct<_t;ct++)D(et[ct],V,X,w,A)}function P(F){F.target.removeEventListener("dispose",P);for(const X in p){const w=p[X],A=F.target.uuid;A in w&&(w[A].dispose(),delete w[A])}}}const sR={[Gh]:Vh,[kh]:qh,[Xh]:Yh,[Rs]:Wh,[Vh]:Gh,[qh]:kh,[Yh]:Xh,[Wh]:Rs};function oR(s,t){function i(){let G=!1;const yt=new nn;let Rt=null;const Ot=new nn(0,0,0,0);return{setMask:function(At){Rt!==At&&!G&&(s.colorMask(At,At,At,At),Rt=At)},setLocked:function(At){G=At},setClear:function(At,gt,Ft,Kt,Te){Te===!0&&(At*=Kt,gt*=Kt,Ft*=Kt),yt.set(At,gt,Ft,Kt),Ot.equals(yt)===!1&&(s.clearColor(At,gt,Ft,Kt),Ot.copy(yt))},reset:function(){G=!1,Rt=null,Ot.set(-1,0,0,0)}}}function a(){let G=!1,yt=!1,Rt=null,Ot=null,At=null;return{setReversed:function(gt){if(yt!==gt){const Ft=t.get("EXT_clip_control");gt?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT),yt=gt;const Kt=At;At=null,this.setClear(Kt)}},getReversed:function(){return yt},setTest:function(gt){gt?vt(s.DEPTH_TEST):Dt(s.DEPTH_TEST)},setMask:function(gt){Rt!==gt&&!G&&(s.depthMask(gt),Rt=gt)},setFunc:function(gt){if(yt&&(gt=sR[gt]),Ot!==gt){switch(gt){case Gh:s.depthFunc(s.NEVER);break;case Vh:s.depthFunc(s.ALWAYS);break;case kh:s.depthFunc(s.LESS);break;case Rs:s.depthFunc(s.LEQUAL);break;case Xh:s.depthFunc(s.EQUAL);break;case Wh:s.depthFunc(s.GEQUAL);break;case qh:s.depthFunc(s.GREATER);break;case Yh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ot=gt}},setLocked:function(gt){G=gt},setClear:function(gt){At!==gt&&(yt&&(gt=1-gt),s.clearDepth(gt),At=gt)},reset:function(){G=!1,Rt=null,Ot=null,At=null,yt=!1}}}function l(){let G=!1,yt=null,Rt=null,Ot=null,At=null,gt=null,Ft=null,Kt=null,Te=null;return{setTest:function(_e){G||(_e?vt(s.STENCIL_TEST):Dt(s.STENCIL_TEST))},setMask:function(_e){yt!==_e&&!G&&(s.stencilMask(_e),yt=_e)},setFunc:function(_e,yn,qe){(Rt!==_e||Ot!==yn||At!==qe)&&(s.stencilFunc(_e,yn,qe),Rt=_e,Ot=yn,At=qe)},setOp:function(_e,yn,qe){(gt!==_e||Ft!==yn||Kt!==qe)&&(s.stencilOp(_e,yn,qe),gt=_e,Ft=yn,Kt=qe)},setLocked:function(_e){G=_e},setClear:function(_e){Te!==_e&&(s.clearStencil(_e),Te=_e)},reset:function(){G=!1,yt=null,Rt=null,Ot=null,At=null,gt=null,Ft=null,Kt=null,Te=null}}}const u=new i,f=new a,d=new l,m=new WeakMap,p=new WeakMap;let g={},_={},x=new WeakMap,M=[],E=null,C=!1,S=null,v=null,U=null,L=null,D=null,P=null,F=null,V=new Ue(0,0,0),X=0,w=!1,A=null,k=null,et=null,ct=null,_t=null;const ft=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,Z=0;const q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(q)[1]),B=Z>=1):q.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),B=Z>=2);let Et=null,N={};const J=s.getParameter(s.SCISSOR_BOX),Mt=s.getParameter(s.VIEWPORT),Tt=new nn().fromArray(J),Lt=new nn().fromArray(Mt);function Vt(G,yt,Rt,Ot){const At=new Uint8Array(4),gt=s.createTexture();s.bindTexture(G,gt),s.texParameteri(G,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(G,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ft=0;Ft<Rt;Ft++)G===s.TEXTURE_3D||G===s.TEXTURE_2D_ARRAY?s.texImage3D(yt,0,s.RGBA,1,1,Ot,0,s.RGBA,s.UNSIGNED_BYTE,At):s.texImage2D(yt+Ft,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,At);return gt}const nt={};nt[s.TEXTURE_2D]=Vt(s.TEXTURE_2D,s.TEXTURE_2D,1),nt[s.TEXTURE_CUBE_MAP]=Vt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[s.TEXTURE_2D_ARRAY]=Vt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),nt[s.TEXTURE_3D]=Vt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),u.setClear(0,0,0,1),f.setClear(1),d.setClear(0),vt(s.DEPTH_TEST),f.setFunc(Rs),ne(!1),zt(O_),vt(s.CULL_FACE),we(Xa);function vt(G){g[G]!==!0&&(s.enable(G),g[G]=!0)}function Dt(G){g[G]!==!1&&(s.disable(G),g[G]=!1)}function Jt(G,yt){return _[G]!==yt?(s.bindFramebuffer(G,yt),_[G]=yt,G===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=yt),G===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=yt),!0):!1}function qt(G,yt){let Rt=M,Ot=!1;if(G){Rt=x.get(yt),Rt===void 0&&(Rt=[],x.set(yt,Rt));const At=G.textures;if(Rt.length!==At.length||Rt[0]!==s.COLOR_ATTACHMENT0){for(let gt=0,Ft=At.length;gt<Ft;gt++)Rt[gt]=s.COLOR_ATTACHMENT0+gt;Rt.length=At.length,Ot=!0}}else Rt[0]!==s.BACK&&(Rt[0]=s.BACK,Ot=!0);Ot&&s.drawBuffers(Rt)}function fe(G){return E!==G?(s.useProgram(G),E=G,!0):!1}const Ze={[xr]:s.FUNC_ADD,[dM]:s.FUNC_SUBTRACT,[pM]:s.FUNC_REVERSE_SUBTRACT};Ze[mM]=s.MIN,Ze[gM]=s.MAX;const H={[_M]:s.ZERO,[vM]:s.ONE,[xM]:s.SRC_COLOR,[Fh]:s.SRC_ALPHA,[bM]:s.SRC_ALPHA_SATURATE,[EM]:s.DST_COLOR,[yM]:s.DST_ALPHA,[SM]:s.ONE_MINUS_SRC_COLOR,[Hh]:s.ONE_MINUS_SRC_ALPHA,[TM]:s.ONE_MINUS_DST_COLOR,[MM]:s.ONE_MINUS_DST_ALPHA,[AM]:s.CONSTANT_COLOR,[RM]:s.ONE_MINUS_CONSTANT_COLOR,[CM]:s.CONSTANT_ALPHA,[wM]:s.ONE_MINUS_CONSTANT_ALPHA};function we(G,yt,Rt,Ot,At,gt,Ft,Kt,Te,_e){if(G===Xa){C===!0&&(Dt(s.BLEND),C=!1);return}if(C===!1&&(vt(s.BLEND),C=!0),G!==hM){if(G!==S||_e!==w){if((v!==xr||D!==xr)&&(s.blendEquation(s.FUNC_ADD),v=xr,D=xr),_e)switch(G){case bs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case P_:s.blendFunc(s.ONE,s.ONE);break;case I_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case B_:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case bs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case P_:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case I_:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case B_:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}U=null,L=null,P=null,F=null,V.set(0,0,0),X=0,S=G,w=_e}return}At=At||yt,gt=gt||Rt,Ft=Ft||Ot,(yt!==v||At!==D)&&(s.blendEquationSeparate(Ze[yt],Ze[At]),v=yt,D=At),(Rt!==U||Ot!==L||gt!==P||Ft!==F)&&(s.blendFuncSeparate(H[Rt],H[Ot],H[gt],H[Ft]),U=Rt,L=Ot,P=gt,F=Ft),(Kt.equals(V)===!1||Te!==X)&&(s.blendColor(Kt.r,Kt.g,Kt.b,Te),V.copy(Kt),X=Te),S=G,w=!1}function oe(G,yt){G.side===ra?Dt(s.CULL_FACE):vt(s.CULL_FACE);let Rt=G.side===Xn;yt&&(Rt=!Rt),ne(Rt),G.blending===bs&&G.transparent===!1?we(Xa):we(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),f.setFunc(G.depthFunc),f.setTest(G.depthTest),f.setMask(G.depthWrite),u.setMask(G.colorWrite);const Ot=G.stencilWrite;d.setTest(Ot),Ot&&(d.setMask(G.stencilWriteMask),d.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),d.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),kt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?vt(s.SAMPLE_ALPHA_TO_COVERAGE):Dt(s.SAMPLE_ALPHA_TO_COVERAGE)}function ne(G){A!==G&&(G?s.frontFace(s.CW):s.frontFace(s.CCW),A=G)}function zt(G){G!==uM?(vt(s.CULL_FACE),G!==k&&(G===O_?s.cullFace(s.BACK):G===cM?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Dt(s.CULL_FACE),k=G}function Le(G){G!==et&&(B&&s.lineWidth(G),et=G)}function kt(G,yt,Rt){G?(vt(s.POLYGON_OFFSET_FILL),(ct!==yt||_t!==Rt)&&(s.polygonOffset(yt,Rt),ct=yt,_t=Rt)):Dt(s.POLYGON_OFFSET_FILL)}function le(G){G?vt(s.SCISSOR_TEST):Dt(s.SCISSOR_TEST)}function Xe(G){G===void 0&&(G=s.TEXTURE0+ft-1),Et!==G&&(s.activeTexture(G),Et=G)}function Ve(G,yt,Rt){Rt===void 0&&(Et===null?Rt=s.TEXTURE0+ft-1:Rt=Et);let Ot=N[Rt];Ot===void 0&&(Ot={type:void 0,texture:void 0},N[Rt]=Ot),(Ot.type!==G||Ot.texture!==yt)&&(Et!==Rt&&(s.activeTexture(Rt),Et=Rt),s.bindTexture(G,yt||nt[G]),Ot.type=G,Ot.texture=yt)}function O(){const G=N[Et];G!==void 0&&G.type!==void 0&&(s.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function T(){try{s.compressedTexImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function it(){try{s.compressedTexImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ht(){try{s.texSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function mt(){try{s.texSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ut(){try{s.compressedTexSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ht(){try{s.compressedTexSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ut(){try{s.texStorage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Wt(){try{s.texStorage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Yt(){try{s.texImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function bt(){try{s.texImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Nt(G){Tt.equals(G)===!1&&(s.scissor(G.x,G.y,G.z,G.w),Tt.copy(G))}function jt(G){Lt.equals(G)===!1&&(s.viewport(G.x,G.y,G.z,G.w),Lt.copy(G))}function z(G,yt){let Rt=p.get(yt);Rt===void 0&&(Rt=new WeakMap,p.set(yt,Rt));let Ot=Rt.get(G);Ot===void 0&&(Ot=s.getUniformBlockIndex(yt,G.name),Rt.set(G,Ot))}function at(G,yt){const Ot=p.get(yt).get(G);m.get(yt)!==Ot&&(s.uniformBlockBinding(yt,Ot,G.__bindingPointIndex),m.set(yt,Ot))}function wt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},Et=null,N={},_={},x=new WeakMap,M=[],E=null,C=!1,S=null,v=null,U=null,L=null,D=null,P=null,F=null,V=new Ue(0,0,0),X=0,w=!1,A=null,k=null,et=null,ct=null,_t=null,Tt.set(0,0,s.canvas.width,s.canvas.height),Lt.set(0,0,s.canvas.width,s.canvas.height),u.reset(),f.reset(),d.reset()}return{buffers:{color:u,depth:f,stencil:d},enable:vt,disable:Dt,bindFramebuffer:Jt,drawBuffers:qt,useProgram:fe,setBlending:we,setMaterial:oe,setFlipSided:ne,setCullFace:zt,setLineWidth:Le,setPolygonOffset:kt,setScissorTest:le,activeTexture:Xe,bindTexture:Ve,unbindTexture:O,compressedTexImage2D:T,compressedTexImage3D:it,texImage2D:Yt,texImage3D:bt,updateUBOMapping:z,uniformBlockBinding:at,texStorage2D:Ut,texStorage3D:Wt,texSubImage2D:ht,texSubImage3D:mt,compressedTexSubImage2D:ut,compressedTexSubImage3D:Ht,scissor:Nt,viewport:jt,reset:wt}}function lR(s,t,i,a,l,u,f){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ue,g=new WeakMap;let _;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(O,T){return M?new OffscreenCanvas(O,T):ku("canvas")}function C(O,T,it){let ht=1;const mt=Ve(O);if((mt.width>it||mt.height>it)&&(ht=it/Math.max(mt.width,mt.height)),ht<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const ut=Math.floor(ht*mt.width),Ht=Math.floor(ht*mt.height);_===void 0&&(_=E(ut,Ht));const Ut=T?E(ut,Ht):_;return Ut.width=ut,Ut.height=Ht,Ut.getContext("2d").drawImage(O,0,0,ut,Ht),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+mt.width+"x"+mt.height+") to ("+ut+"x"+Ht+")."),Ut}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+mt.width+"x"+mt.height+")."),O;return O}function S(O){return O.generateMipmaps}function v(O){s.generateMipmap(O)}function U(O){return O.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?s.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(O,T,it,ht,mt=!1){if(O!==null){if(s[O]!==void 0)return s[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let ut=T;if(T===s.RED&&(it===s.FLOAT&&(ut=s.R32F),it===s.HALF_FLOAT&&(ut=s.R16F),it===s.UNSIGNED_BYTE&&(ut=s.R8)),T===s.RED_INTEGER&&(it===s.UNSIGNED_BYTE&&(ut=s.R8UI),it===s.UNSIGNED_SHORT&&(ut=s.R16UI),it===s.UNSIGNED_INT&&(ut=s.R32UI),it===s.BYTE&&(ut=s.R8I),it===s.SHORT&&(ut=s.R16I),it===s.INT&&(ut=s.R32I)),T===s.RG&&(it===s.FLOAT&&(ut=s.RG32F),it===s.HALF_FLOAT&&(ut=s.RG16F),it===s.UNSIGNED_BYTE&&(ut=s.RG8)),T===s.RG_INTEGER&&(it===s.UNSIGNED_BYTE&&(ut=s.RG8UI),it===s.UNSIGNED_SHORT&&(ut=s.RG16UI),it===s.UNSIGNED_INT&&(ut=s.RG32UI),it===s.BYTE&&(ut=s.RG8I),it===s.SHORT&&(ut=s.RG16I),it===s.INT&&(ut=s.RG32I)),T===s.RGB_INTEGER&&(it===s.UNSIGNED_BYTE&&(ut=s.RGB8UI),it===s.UNSIGNED_SHORT&&(ut=s.RGB16UI),it===s.UNSIGNED_INT&&(ut=s.RGB32UI),it===s.BYTE&&(ut=s.RGB8I),it===s.SHORT&&(ut=s.RGB16I),it===s.INT&&(ut=s.RGB32I)),T===s.RGBA_INTEGER&&(it===s.UNSIGNED_BYTE&&(ut=s.RGBA8UI),it===s.UNSIGNED_SHORT&&(ut=s.RGBA16UI),it===s.UNSIGNED_INT&&(ut=s.RGBA32UI),it===s.BYTE&&(ut=s.RGBA8I),it===s.SHORT&&(ut=s.RGBA16I),it===s.INT&&(ut=s.RGBA32I)),T===s.RGB&&(it===s.UNSIGNED_INT_5_9_9_9_REV&&(ut=s.RGB9_E5),it===s.UNSIGNED_INT_10F_11F_11F_REV&&(ut=s.R11F_G11F_B10F)),T===s.RGBA){const Ht=mt?Gu:Ce.getTransfer(ht);it===s.FLOAT&&(ut=s.RGBA32F),it===s.HALF_FLOAT&&(ut=s.RGBA16F),it===s.UNSIGNED_BYTE&&(ut=Ht===Fe?s.SRGB8_ALPHA8:s.RGBA8),it===s.UNSIGNED_SHORT_4_4_4_4&&(ut=s.RGBA4),it===s.UNSIGNED_SHORT_5_5_5_1&&(ut=s.RGB5_A1)}return(ut===s.R16F||ut===s.R32F||ut===s.RG16F||ut===s.RG32F||ut===s.RGBA16F||ut===s.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function D(O,T){let it;return O?T===null||T===Er||T===Vo?it=s.DEPTH24_STENCIL8:T===sa?it=s.DEPTH32F_STENCIL8:T===Go&&(it=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Er||T===Vo?it=s.DEPTH_COMPONENT24:T===sa?it=s.DEPTH_COMPONENT32F:T===Go&&(it=s.DEPTH_COMPONENT16),it}function P(O,T){return S(O)===!0||O.isFramebufferTexture&&O.minFilter!==xi&&O.minFilter!==Ci?Math.log2(Math.max(T.width,T.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?T.mipmaps.length:1}function F(O){const T=O.target;T.removeEventListener("dispose",F),X(T),T.isVideoTexture&&g.delete(T)}function V(O){const T=O.target;T.removeEventListener("dispose",V),A(T)}function X(O){const T=a.get(O);if(T.__webglInit===void 0)return;const it=O.source,ht=x.get(it);if(ht){const mt=ht[T.__cacheKey];mt.usedTimes--,mt.usedTimes===0&&w(O),Object.keys(ht).length===0&&x.delete(it)}a.remove(O)}function w(O){const T=a.get(O);s.deleteTexture(T.__webglTexture);const it=O.source,ht=x.get(it);delete ht[T.__cacheKey],f.memory.textures--}function A(O){const T=a.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),a.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let ht=0;ht<6;ht++){if(Array.isArray(T.__webglFramebuffer[ht]))for(let mt=0;mt<T.__webglFramebuffer[ht].length;mt++)s.deleteFramebuffer(T.__webglFramebuffer[ht][mt]);else s.deleteFramebuffer(T.__webglFramebuffer[ht]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[ht])}else{if(Array.isArray(T.__webglFramebuffer))for(let ht=0;ht<T.__webglFramebuffer.length;ht++)s.deleteFramebuffer(T.__webglFramebuffer[ht]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ht=0;ht<T.__webglColorRenderbuffer.length;ht++)T.__webglColorRenderbuffer[ht]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[ht]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const it=O.textures;for(let ht=0,mt=it.length;ht<mt;ht++){const ut=a.get(it[ht]);ut.__webglTexture&&(s.deleteTexture(ut.__webglTexture),f.memory.textures--),a.remove(it[ht])}a.remove(O)}let k=0;function et(){k=0}function ct(){const O=k;return O>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+l.maxTextures),k+=1,O}function _t(O){const T=[];return T.push(O.wrapS),T.push(O.wrapT),T.push(O.wrapR||0),T.push(O.magFilter),T.push(O.minFilter),T.push(O.anisotropy),T.push(O.internalFormat),T.push(O.format),T.push(O.type),T.push(O.generateMipmaps),T.push(O.premultiplyAlpha),T.push(O.flipY),T.push(O.unpackAlignment),T.push(O.colorSpace),T.join()}function ft(O,T){const it=a.get(O);if(O.isVideoTexture&&le(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&it.__version!==O.version){const ht=O.image;if(ht===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{nt(it,O,T);return}}else O.isExternalTexture&&(it.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,it.__webglTexture,s.TEXTURE0+T)}function B(O,T){const it=a.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&it.__version!==O.version){nt(it,O,T);return}i.bindTexture(s.TEXTURE_2D_ARRAY,it.__webglTexture,s.TEXTURE0+T)}function Z(O,T){const it=a.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&it.__version!==O.version){nt(it,O,T);return}i.bindTexture(s.TEXTURE_3D,it.__webglTexture,s.TEXTURE0+T)}function q(O,T){const it=a.get(O);if(O.version>0&&it.__version!==O.version){vt(it,O,T);return}i.bindTexture(s.TEXTURE_CUBE_MAP,it.__webglTexture,s.TEXTURE0+T)}const Et={[Kh]:s.REPEAT,[yr]:s.CLAMP_TO_EDGE,[Qh]:s.MIRRORED_REPEAT},N={[xi]:s.NEAREST,[FM]:s.NEAREST_MIPMAP_NEAREST,[cu]:s.NEAREST_MIPMAP_LINEAR,[Ci]:s.LINEAR,[rh]:s.LINEAR_MIPMAP_NEAREST,[Mr]:s.LINEAR_MIPMAP_LINEAR},J={[kM]:s.NEVER,[ZM]:s.ALWAYS,[XM]:s.LESS,[u0]:s.LEQUAL,[WM]:s.EQUAL,[jM]:s.GEQUAL,[qM]:s.GREATER,[YM]:s.NOTEQUAL};function Mt(O,T){if(T.type===sa&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Ci||T.magFilter===rh||T.magFilter===cu||T.magFilter===Mr||T.minFilter===Ci||T.minFilter===rh||T.minFilter===cu||T.minFilter===Mr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(O,s.TEXTURE_WRAP_S,Et[T.wrapS]),s.texParameteri(O,s.TEXTURE_WRAP_T,Et[T.wrapT]),(O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY)&&s.texParameteri(O,s.TEXTURE_WRAP_R,Et[T.wrapR]),s.texParameteri(O,s.TEXTURE_MAG_FILTER,N[T.magFilter]),s.texParameteri(O,s.TEXTURE_MIN_FILTER,N[T.minFilter]),T.compareFunction&&(s.texParameteri(O,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(O,s.TEXTURE_COMPARE_FUNC,J[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===xi||T.minFilter!==cu&&T.minFilter!==Mr||T.type===sa&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||a.get(T).__currentAnisotropy){const it=t.get("EXT_texture_filter_anisotropic");s.texParameterf(O,it.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),a.get(T).__currentAnisotropy=T.anisotropy}}}function Tt(O,T){let it=!1;O.__webglInit===void 0&&(O.__webglInit=!0,T.addEventListener("dispose",F));const ht=T.source;let mt=x.get(ht);mt===void 0&&(mt={},x.set(ht,mt));const ut=_t(T);if(ut!==O.__cacheKey){mt[ut]===void 0&&(mt[ut]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,it=!0),mt[ut].usedTimes++;const Ht=mt[O.__cacheKey];Ht!==void 0&&(mt[O.__cacheKey].usedTimes--,Ht.usedTimes===0&&w(T)),O.__cacheKey=ut,O.__webglTexture=mt[ut].texture}return it}function Lt(O,T,it){return Math.floor(Math.floor(O/it)/T)}function Vt(O,T,it,ht){const ut=O.updateRanges;if(ut.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,T.width,T.height,it,ht,T.data);else{ut.sort((bt,Nt)=>bt.start-Nt.start);let Ht=0;for(let bt=1;bt<ut.length;bt++){const Nt=ut[Ht],jt=ut[bt],z=Nt.start+Nt.count,at=Lt(jt.start,T.width,4),wt=Lt(Nt.start,T.width,4);jt.start<=z+1&&at===wt&&Lt(jt.start+jt.count-1,T.width,4)===at?Nt.count=Math.max(Nt.count,jt.start+jt.count-Nt.start):(++Ht,ut[Ht]=jt)}ut.length=Ht+1;const Ut=s.getParameter(s.UNPACK_ROW_LENGTH),Wt=s.getParameter(s.UNPACK_SKIP_PIXELS),Yt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,T.width);for(let bt=0,Nt=ut.length;bt<Nt;bt++){const jt=ut[bt],z=Math.floor(jt.start/4),at=Math.ceil(jt.count/4),wt=z%T.width,G=Math.floor(z/T.width),yt=at,Rt=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,wt),s.pixelStorei(s.UNPACK_SKIP_ROWS,G),i.texSubImage2D(s.TEXTURE_2D,0,wt,G,yt,Rt,it,ht,T.data)}O.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Ut),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Wt),s.pixelStorei(s.UNPACK_SKIP_ROWS,Yt)}}function nt(O,T,it){let ht=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ht=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ht=s.TEXTURE_3D);const mt=Tt(O,T),ut=T.source;i.bindTexture(ht,O.__webglTexture,s.TEXTURE0+it);const Ht=a.get(ut);if(ut.version!==Ht.__version||mt===!0){i.activeTexture(s.TEXTURE0+it);const Ut=Ce.getPrimaries(Ce.workingColorSpace),Wt=T.colorSpace===ka?null:Ce.getPrimaries(T.colorSpace),Yt=T.colorSpace===ka||Ut===Wt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);let bt=C(T.image,!1,l.maxTextureSize);bt=Xe(T,bt);const Nt=u.convert(T.format,T.colorSpace),jt=u.convert(T.type);let z=L(T.internalFormat,Nt,jt,T.colorSpace,T.isVideoTexture);Mt(ht,T);let at;const wt=T.mipmaps,G=T.isVideoTexture!==!0,yt=Ht.__version===void 0||mt===!0,Rt=ut.dataReady,Ot=P(T,bt);if(T.isDepthTexture)z=D(T.format===Xo,T.type),yt&&(G?i.texStorage2D(s.TEXTURE_2D,1,z,bt.width,bt.height):i.texImage2D(s.TEXTURE_2D,0,z,bt.width,bt.height,0,Nt,jt,null));else if(T.isDataTexture)if(wt.length>0){G&&yt&&i.texStorage2D(s.TEXTURE_2D,Ot,z,wt[0].width,wt[0].height);for(let At=0,gt=wt.length;At<gt;At++)at=wt[At],G?Rt&&i.texSubImage2D(s.TEXTURE_2D,At,0,0,at.width,at.height,Nt,jt,at.data):i.texImage2D(s.TEXTURE_2D,At,z,at.width,at.height,0,Nt,jt,at.data);T.generateMipmaps=!1}else G?(yt&&i.texStorage2D(s.TEXTURE_2D,Ot,z,bt.width,bt.height),Rt&&Vt(T,bt,Nt,jt)):i.texImage2D(s.TEXTURE_2D,0,z,bt.width,bt.height,0,Nt,jt,bt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){G&&yt&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ot,z,wt[0].width,wt[0].height,bt.depth);for(let At=0,gt=wt.length;At<gt;At++)if(at=wt[At],T.format!==vi)if(Nt!==null)if(G){if(Rt)if(T.layerUpdates.size>0){const Ft=ov(at.width,at.height,T.format,T.type);for(const Kt of T.layerUpdates){const Te=at.data.subarray(Kt*Ft/at.data.BYTES_PER_ELEMENT,(Kt+1)*Ft/at.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,At,0,0,Kt,at.width,at.height,1,Nt,Te)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,At,0,0,0,at.width,at.height,bt.depth,Nt,at.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,At,z,at.width,at.height,bt.depth,0,at.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?Rt&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,At,0,0,0,at.width,at.height,bt.depth,Nt,jt,at.data):i.texImage3D(s.TEXTURE_2D_ARRAY,At,z,at.width,at.height,bt.depth,0,Nt,jt,at.data)}else{G&&yt&&i.texStorage2D(s.TEXTURE_2D,Ot,z,wt[0].width,wt[0].height);for(let At=0,gt=wt.length;At<gt;At++)at=wt[At],T.format!==vi?Nt!==null?G?Rt&&i.compressedTexSubImage2D(s.TEXTURE_2D,At,0,0,at.width,at.height,Nt,at.data):i.compressedTexImage2D(s.TEXTURE_2D,At,z,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?Rt&&i.texSubImage2D(s.TEXTURE_2D,At,0,0,at.width,at.height,Nt,jt,at.data):i.texImage2D(s.TEXTURE_2D,At,z,at.width,at.height,0,Nt,jt,at.data)}else if(T.isDataArrayTexture)if(G){if(yt&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ot,z,bt.width,bt.height,bt.depth),Rt)if(T.layerUpdates.size>0){const At=ov(bt.width,bt.height,T.format,T.type);for(const gt of T.layerUpdates){const Ft=bt.data.subarray(gt*At/bt.data.BYTES_PER_ELEMENT,(gt+1)*At/bt.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,gt,bt.width,bt.height,1,Nt,jt,Ft)}T.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,Nt,jt,bt.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,z,bt.width,bt.height,bt.depth,0,Nt,jt,bt.data);else if(T.isData3DTexture)G?(yt&&i.texStorage3D(s.TEXTURE_3D,Ot,z,bt.width,bt.height,bt.depth),Rt&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,Nt,jt,bt.data)):i.texImage3D(s.TEXTURE_3D,0,z,bt.width,bt.height,bt.depth,0,Nt,jt,bt.data);else if(T.isFramebufferTexture){if(yt)if(G)i.texStorage2D(s.TEXTURE_2D,Ot,z,bt.width,bt.height);else{let At=bt.width,gt=bt.height;for(let Ft=0;Ft<Ot;Ft++)i.texImage2D(s.TEXTURE_2D,Ft,z,At,gt,0,Nt,jt,null),At>>=1,gt>>=1}}else if(wt.length>0){if(G&&yt){const At=Ve(wt[0]);i.texStorage2D(s.TEXTURE_2D,Ot,z,At.width,At.height)}for(let At=0,gt=wt.length;At<gt;At++)at=wt[At],G?Rt&&i.texSubImage2D(s.TEXTURE_2D,At,0,0,Nt,jt,at):i.texImage2D(s.TEXTURE_2D,At,z,Nt,jt,at);T.generateMipmaps=!1}else if(G){if(yt){const At=Ve(bt);i.texStorage2D(s.TEXTURE_2D,Ot,z,At.width,At.height)}Rt&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Nt,jt,bt)}else i.texImage2D(s.TEXTURE_2D,0,z,Nt,jt,bt);S(T)&&v(ht),Ht.__version=ut.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version}function vt(O,T,it){if(T.image.length!==6)return;const ht=Tt(O,T),mt=T.source;i.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+it);const ut=a.get(mt);if(mt.version!==ut.__version||ht===!0){i.activeTexture(s.TEXTURE0+it);const Ht=Ce.getPrimaries(Ce.workingColorSpace),Ut=T.colorSpace===ka?null:Ce.getPrimaries(T.colorSpace),Wt=T.colorSpace===ka||Ht===Ut?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);const Yt=T.isCompressedTexture||T.image[0].isCompressedTexture,bt=T.image[0]&&T.image[0].isDataTexture,Nt=[];for(let gt=0;gt<6;gt++)!Yt&&!bt?Nt[gt]=C(T.image[gt],!0,l.maxCubemapSize):Nt[gt]=bt?T.image[gt].image:T.image[gt],Nt[gt]=Xe(T,Nt[gt]);const jt=Nt[0],z=u.convert(T.format,T.colorSpace),at=u.convert(T.type),wt=L(T.internalFormat,z,at,T.colorSpace),G=T.isVideoTexture!==!0,yt=ut.__version===void 0||ht===!0,Rt=mt.dataReady;let Ot=P(T,jt);Mt(s.TEXTURE_CUBE_MAP,T);let At;if(Yt){G&&yt&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Ot,wt,jt.width,jt.height);for(let gt=0;gt<6;gt++){At=Nt[gt].mipmaps;for(let Ft=0;Ft<At.length;Ft++){const Kt=At[Ft];T.format!==vi?z!==null?G?Rt&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ft,0,0,Kt.width,Kt.height,z,Kt.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ft,wt,Kt.width,Kt.height,0,Kt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?Rt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ft,0,0,Kt.width,Kt.height,z,at,Kt.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ft,wt,Kt.width,Kt.height,0,z,at,Kt.data)}}}else{if(At=T.mipmaps,G&&yt){At.length>0&&Ot++;const gt=Ve(Nt[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Ot,wt,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(bt){G?Rt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Nt[gt].width,Nt[gt].height,z,at,Nt[gt].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,wt,Nt[gt].width,Nt[gt].height,0,z,at,Nt[gt].data);for(let Ft=0;Ft<At.length;Ft++){const Te=At[Ft].image[gt].image;G?Rt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ft+1,0,0,Te.width,Te.height,z,at,Te.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ft+1,wt,Te.width,Te.height,0,z,at,Te.data)}}else{G?Rt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,z,at,Nt[gt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,wt,z,at,Nt[gt]);for(let Ft=0;Ft<At.length;Ft++){const Kt=At[Ft];G?Rt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ft+1,0,0,z,at,Kt.image[gt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ft+1,wt,z,at,Kt.image[gt])}}}S(T)&&v(s.TEXTURE_CUBE_MAP),ut.__version=mt.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version}function Dt(O,T,it,ht,mt,ut){const Ht=u.convert(it.format,it.colorSpace),Ut=u.convert(it.type),Wt=L(it.internalFormat,Ht,Ut,it.colorSpace),Yt=a.get(T),bt=a.get(it);if(bt.__renderTarget=T,!Yt.__hasExternalTextures){const Nt=Math.max(1,T.width>>ut),jt=Math.max(1,T.height>>ut);mt===s.TEXTURE_3D||mt===s.TEXTURE_2D_ARRAY?i.texImage3D(mt,ut,Wt,Nt,jt,T.depth,0,Ht,Ut,null):i.texImage2D(mt,ut,Wt,Nt,jt,0,Ht,Ut,null)}i.bindFramebuffer(s.FRAMEBUFFER,O),kt(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ht,mt,bt.__webglTexture,0,Le(T)):(mt===s.TEXTURE_2D||mt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&mt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ht,mt,bt.__webglTexture,ut),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Jt(O,T,it){if(s.bindRenderbuffer(s.RENDERBUFFER,O),T.depthBuffer){const ht=T.depthTexture,mt=ht&&ht.isDepthTexture?ht.type:null,ut=D(T.stencilBuffer,mt),Ht=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ut=Le(T);kt(T)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ut,ut,T.width,T.height):it?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ut,ut,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,ut,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ht,s.RENDERBUFFER,O)}else{const ht=T.textures;for(let mt=0;mt<ht.length;mt++){const ut=ht[mt],Ht=u.convert(ut.format,ut.colorSpace),Ut=u.convert(ut.type),Wt=L(ut.internalFormat,Ht,Ut,ut.colorSpace),Yt=Le(T);it&&kt(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Yt,Wt,T.width,T.height):kt(T)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Yt,Wt,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Wt,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function qt(O,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,O),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ht=a.get(T.depthTexture);ht.__renderTarget=T,(!ht.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ft(T.depthTexture,0);const mt=ht.__webglTexture,ut=Le(T);if(T.depthTexture.format===ko)kt(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,mt,0,ut):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,mt,0);else if(T.depthTexture.format===Xo)kt(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,mt,0,ut):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,mt,0);else throw new Error("Unknown depthTexture format")}function fe(O){const T=a.get(O),it=O.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==O.depthTexture){const ht=O.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ht){const mt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ht.removeEventListener("dispose",mt)};ht.addEventListener("dispose",mt),T.__depthDisposeCallback=mt}T.__boundDepthTexture=ht}if(O.depthTexture&&!T.__autoAllocateDepthBuffer){if(it)throw new Error("target.depthTexture not supported in Cube render targets");const ht=O.texture.mipmaps;ht&&ht.length>0?qt(T.__webglFramebuffer[0],O):qt(T.__webglFramebuffer,O)}else if(it){T.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)if(i.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[ht]),T.__webglDepthbuffer[ht]===void 0)T.__webglDepthbuffer[ht]=s.createRenderbuffer(),Jt(T.__webglDepthbuffer[ht],O,!1);else{const mt=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ut=T.__webglDepthbuffer[ht];s.bindRenderbuffer(s.RENDERBUFFER,ut),s.framebufferRenderbuffer(s.FRAMEBUFFER,mt,s.RENDERBUFFER,ut)}}else{const ht=O.texture.mipmaps;if(ht&&ht.length>0?i.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),Jt(T.__webglDepthbuffer,O,!1);else{const mt=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ut=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ut),s.framebufferRenderbuffer(s.FRAMEBUFFER,mt,s.RENDERBUFFER,ut)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function Ze(O,T,it){const ht=a.get(O);T!==void 0&&Dt(ht.__webglFramebuffer,O,O.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),it!==void 0&&fe(O)}function H(O){const T=O.texture,it=a.get(O),ht=a.get(T);O.addEventListener("dispose",V);const mt=O.textures,ut=O.isWebGLCubeRenderTarget===!0,Ht=mt.length>1;if(Ht||(ht.__webglTexture===void 0&&(ht.__webglTexture=s.createTexture()),ht.__version=T.version,f.memory.textures++),ut){it.__webglFramebuffer=[];for(let Ut=0;Ut<6;Ut++)if(T.mipmaps&&T.mipmaps.length>0){it.__webglFramebuffer[Ut]=[];for(let Wt=0;Wt<T.mipmaps.length;Wt++)it.__webglFramebuffer[Ut][Wt]=s.createFramebuffer()}else it.__webglFramebuffer[Ut]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){it.__webglFramebuffer=[];for(let Ut=0;Ut<T.mipmaps.length;Ut++)it.__webglFramebuffer[Ut]=s.createFramebuffer()}else it.__webglFramebuffer=s.createFramebuffer();if(Ht)for(let Ut=0,Wt=mt.length;Ut<Wt;Ut++){const Yt=a.get(mt[Ut]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=s.createTexture(),f.memory.textures++)}if(O.samples>0&&kt(O)===!1){it.__webglMultisampledFramebuffer=s.createFramebuffer(),it.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,it.__webglMultisampledFramebuffer);for(let Ut=0;Ut<mt.length;Ut++){const Wt=mt[Ut];it.__webglColorRenderbuffer[Ut]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,it.__webglColorRenderbuffer[Ut]);const Yt=u.convert(Wt.format,Wt.colorSpace),bt=u.convert(Wt.type),Nt=L(Wt.internalFormat,Yt,bt,Wt.colorSpace,O.isXRRenderTarget===!0),jt=Le(O);s.renderbufferStorageMultisample(s.RENDERBUFFER,jt,Nt,O.width,O.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ut,s.RENDERBUFFER,it.__webglColorRenderbuffer[Ut])}s.bindRenderbuffer(s.RENDERBUFFER,null),O.depthBuffer&&(it.__webglDepthRenderbuffer=s.createRenderbuffer(),Jt(it.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ut){i.bindTexture(s.TEXTURE_CUBE_MAP,ht.__webglTexture),Mt(s.TEXTURE_CUBE_MAP,T);for(let Ut=0;Ut<6;Ut++)if(T.mipmaps&&T.mipmaps.length>0)for(let Wt=0;Wt<T.mipmaps.length;Wt++)Dt(it.__webglFramebuffer[Ut][Wt],O,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,Wt);else Dt(it.__webglFramebuffer[Ut],O,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0);S(T)&&v(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ht){for(let Ut=0,Wt=mt.length;Ut<Wt;Ut++){const Yt=mt[Ut],bt=a.get(Yt);let Nt=s.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Nt=O.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Nt,bt.__webglTexture),Mt(Nt,Yt),Dt(it.__webglFramebuffer,O,Yt,s.COLOR_ATTACHMENT0+Ut,Nt,0),S(Yt)&&v(Nt)}i.unbindTexture()}else{let Ut=s.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Ut=O.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Ut,ht.__webglTexture),Mt(Ut,T),T.mipmaps&&T.mipmaps.length>0)for(let Wt=0;Wt<T.mipmaps.length;Wt++)Dt(it.__webglFramebuffer[Wt],O,T,s.COLOR_ATTACHMENT0,Ut,Wt);else Dt(it.__webglFramebuffer,O,T,s.COLOR_ATTACHMENT0,Ut,0);S(T)&&v(Ut),i.unbindTexture()}O.depthBuffer&&fe(O)}function we(O){const T=O.textures;for(let it=0,ht=T.length;it<ht;it++){const mt=T[it];if(S(mt)){const ut=U(O),Ht=a.get(mt).__webglTexture;i.bindTexture(ut,Ht),v(ut),i.unbindTexture()}}}const oe=[],ne=[];function zt(O){if(O.samples>0){if(kt(O)===!1){const T=O.textures,it=O.width,ht=O.height;let mt=s.COLOR_BUFFER_BIT;const ut=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ht=a.get(O),Ut=T.length>1;if(Ut)for(let Yt=0;Yt<T.length;Yt++)i.bindFramebuffer(s.FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Yt,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Ht.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Yt,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Ht.__webglMultisampledFramebuffer);const Wt=O.texture.mipmaps;Wt&&Wt.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ht.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ht.__webglFramebuffer);for(let Yt=0;Yt<T.length;Yt++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(mt|=s.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(mt|=s.STENCIL_BUFFER_BIT)),Ut){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ht.__webglColorRenderbuffer[Yt]);const bt=a.get(T[Yt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,bt,0)}s.blitFramebuffer(0,0,it,ht,0,0,it,ht,mt,s.NEAREST),m===!0&&(oe.length=0,ne.length=0,oe.push(s.COLOR_ATTACHMENT0+Yt),O.depthBuffer&&O.resolveDepthBuffer===!1&&(oe.push(ut),ne.push(ut),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,ne)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,oe))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ut)for(let Yt=0;Yt<T.length;Yt++){i.bindFramebuffer(s.FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Yt,s.RENDERBUFFER,Ht.__webglColorRenderbuffer[Yt]);const bt=a.get(T[Yt]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Ht.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Yt,s.TEXTURE_2D,bt,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ht.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&m){const T=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function Le(O){return Math.min(l.maxSamples,O.samples)}function kt(O){const T=a.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function le(O){const T=f.render.frame;g.get(O)!==T&&(g.set(O,T),O.update())}function Xe(O,T){const it=O.colorSpace,ht=O.format,mt=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||it!==Ds&&it!==ka&&(Ce.getTransfer(it)===Fe?(ht!==vi||mt!==Oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",it)),T}function Ve(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(p.width=O.naturalWidth||O.width,p.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(p.width=O.displayWidth,p.height=O.displayHeight):(p.width=O.width,p.height=O.height),p}this.allocateTextureUnit=ct,this.resetTextureUnits=et,this.setTexture2D=ft,this.setTexture2DArray=B,this.setTexture3D=Z,this.setTextureCube=q,this.rebindTextures=Ze,this.setupRenderTarget=H,this.updateRenderTargetMipmap=we,this.updateMultisampleRenderTarget=zt,this.setupDepthRenderbuffer=fe,this.setupFrameBufferTexture=Dt,this.useMultisampledRTT=kt}function uR(s,t){function i(a,l=ka){let u;const f=Ce.getTransfer(l);if(a===Oi)return s.UNSIGNED_BYTE;if(a===Id)return s.UNSIGNED_SHORT_4_4_4_4;if(a===Bd)return s.UNSIGNED_SHORT_5_5_5_1;if(a===n0)return s.UNSIGNED_INT_5_9_9_9_REV;if(a===i0)return s.UNSIGNED_INT_10F_11F_11F_REV;if(a===t0)return s.BYTE;if(a===e0)return s.SHORT;if(a===Go)return s.UNSIGNED_SHORT;if(a===Pd)return s.INT;if(a===Er)return s.UNSIGNED_INT;if(a===sa)return s.FLOAT;if(a===Zo)return s.HALF_FLOAT;if(a===a0)return s.ALPHA;if(a===r0)return s.RGB;if(a===vi)return s.RGBA;if(a===ko)return s.DEPTH_COMPONENT;if(a===Xo)return s.DEPTH_STENCIL;if(a===s0)return s.RED;if(a===zd)return s.RED_INTEGER;if(a===o0)return s.RG;if(a===Fd)return s.RG_INTEGER;if(a===Hd)return s.RGBA_INTEGER;if(a===Pu||a===Iu||a===Bu||a===zu)if(f===Fe)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(a===Pu)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Iu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Bu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===zu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(a===Pu)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Iu)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Bu)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===zu)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Jh||a===$h||a===td||a===ed)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(a===Jh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===$h)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===td)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===ed)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===nd||a===id||a===ad)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(a===nd||a===id)return f===Fe?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(a===ad)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===rd||a===sd||a===od||a===ld||a===ud||a===cd||a===fd||a===hd||a===dd||a===pd||a===md||a===gd||a===_d||a===vd)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(a===rd)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===sd)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===od)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===ld)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===ud)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===cd)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===fd)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===hd)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===dd)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===pd)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===md)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===gd)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===_d)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===vd)return f===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===xd||a===Sd||a===yd)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(a===xd)return f===Fe?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Sd)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===yd)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Md||a===Ed||a===Td||a===bd)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(a===Md)return u.COMPRESSED_RED_RGTC1_EXT;if(a===Ed)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Td)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===bd)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Vo?s.UNSIGNED_INT_24_8:s[a]!==void 0?s[a]:null}return{convert:i}}const cR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class hR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const a=new M0(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,a=new Ya({vertexShader:cR,fragmentShader:fR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Di(new Yu(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class dR extends Os{constructor(t,i){super();const a=this;let l=null,u=1,f=null,d="local-floor",m=1,p=null,g=null,_=null,x=null,M=null,E=null;const C=typeof XRWebGLBinding<"u",S=new hR,v={},U=i.getContextAttributes();let L=null,D=null;const P=[],F=[],V=new ue;let X=null;const w=new Bn;w.viewport=new nn;const A=new Bn;A.viewport=new nn;const k=[w,A],et=new OE;let ct=null,_t=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let vt=P[nt];return vt===void 0&&(vt=new Ch,P[nt]=vt),vt.getTargetRaySpace()},this.getControllerGrip=function(nt){let vt=P[nt];return vt===void 0&&(vt=new Ch,P[nt]=vt),vt.getGripSpace()},this.getHand=function(nt){let vt=P[nt];return vt===void 0&&(vt=new Ch,P[nt]=vt),vt.getHandSpace()};function ft(nt){const vt=F.indexOf(nt.inputSource);if(vt===-1)return;const Dt=P[vt];Dt!==void 0&&(Dt.update(nt.inputSource,nt.frame,p||f),Dt.dispatchEvent({type:nt.type,data:nt.inputSource}))}function B(){l.removeEventListener("select",ft),l.removeEventListener("selectstart",ft),l.removeEventListener("selectend",ft),l.removeEventListener("squeeze",ft),l.removeEventListener("squeezestart",ft),l.removeEventListener("squeezeend",ft),l.removeEventListener("end",B),l.removeEventListener("inputsourceschange",Z);for(let nt=0;nt<P.length;nt++){const vt=F[nt];vt!==null&&(F[nt]=null,P[nt].disconnect(vt))}ct=null,_t=null,S.reset();for(const nt in v)delete v[nt];t.setRenderTarget(L),M=null,x=null,_=null,l=null,D=null,Vt.stop(),a.isPresenting=!1,t.setPixelRatio(X),t.setSize(V.width,V.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){u=nt,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){d=nt,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(nt){p=nt},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return _===null&&C&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(nt){if(l=nt,l!==null){if(L=t.getRenderTarget(),l.addEventListener("select",ft),l.addEventListener("selectstart",ft),l.addEventListener("selectend",ft),l.addEventListener("squeeze",ft),l.addEventListener("squeezestart",ft),l.addEventListener("squeezeend",ft),l.addEventListener("end",B),l.addEventListener("inputsourceschange",Z),U.xrCompatible!==!0&&await i.makeXRCompatible(),X=t.getPixelRatio(),t.getSize(V),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Dt=null,Jt=null,qt=null;U.depth&&(qt=U.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Dt=U.stencil?Xo:ko,Jt=U.stencil?Vo:Er);const fe={colorFormat:i.RGBA8,depthFormat:qt,scaleFactor:u};_=this.getBinding(),x=_.createProjectionLayer(fe),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),D=new br(x.textureWidth,x.textureHeight,{format:vi,type:Oi,depthTexture:new y0(x.textureWidth,x.textureHeight,Jt,void 0,void 0,void 0,void 0,void 0,void 0,Dt),stencilBuffer:U.stencil,colorSpace:t.outputColorSpace,samples:U.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Dt={antialias:U.antialias,alpha:!0,depth:U.depth,stencil:U.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,Dt),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),D=new br(M.framebufferWidth,M.framebufferHeight,{format:vi,type:Oi,colorSpace:t.outputColorSpace,stencilBuffer:U.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(d),Vt.setContext(l),Vt.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function Z(nt){for(let vt=0;vt<nt.removed.length;vt++){const Dt=nt.removed[vt],Jt=F.indexOf(Dt);Jt>=0&&(F[Jt]=null,P[Jt].disconnect(Dt))}for(let vt=0;vt<nt.added.length;vt++){const Dt=nt.added[vt];let Jt=F.indexOf(Dt);if(Jt===-1){for(let fe=0;fe<P.length;fe++)if(fe>=F.length){F.push(Dt),Jt=fe;break}else if(F[fe]===null){F[fe]=Dt,Jt=fe;break}if(Jt===-1)break}const qt=P[Jt];qt&&qt.connect(Dt)}}const q=new $,Et=new $;function N(nt,vt,Dt){q.setFromMatrixPosition(vt.matrixWorld),Et.setFromMatrixPosition(Dt.matrixWorld);const Jt=q.distanceTo(Et),qt=vt.projectionMatrix.elements,fe=Dt.projectionMatrix.elements,Ze=qt[14]/(qt[10]-1),H=qt[14]/(qt[10]+1),we=(qt[9]+1)/qt[5],oe=(qt[9]-1)/qt[5],ne=(qt[8]-1)/qt[0],zt=(fe[8]+1)/fe[0],Le=Ze*ne,kt=Ze*zt,le=Jt/(-ne+zt),Xe=le*-ne;if(vt.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(Xe),nt.translateZ(le),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),qt[10]===-1)nt.projectionMatrix.copy(vt.projectionMatrix),nt.projectionMatrixInverse.copy(vt.projectionMatrixInverse);else{const Ve=Ze+le,O=H+le,T=Le-Xe,it=kt+(Jt-Xe),ht=we*H/O*Ve,mt=oe*H/O*Ve;nt.projectionMatrix.makePerspective(T,it,ht,mt,Ve,O),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function J(nt,vt){vt===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(vt.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(l===null)return;let vt=nt.near,Dt=nt.far;S.texture!==null&&(S.depthNear>0&&(vt=S.depthNear),S.depthFar>0&&(Dt=S.depthFar)),et.near=A.near=w.near=vt,et.far=A.far=w.far=Dt,(ct!==et.near||_t!==et.far)&&(l.updateRenderState({depthNear:et.near,depthFar:et.far}),ct=et.near,_t=et.far),et.layers.mask=nt.layers.mask|6,w.layers.mask=et.layers.mask&3,A.layers.mask=et.layers.mask&5;const Jt=nt.parent,qt=et.cameras;J(et,Jt);for(let fe=0;fe<qt.length;fe++)J(qt[fe],Jt);qt.length===2?N(et,w,A):et.projectionMatrix.copy(w.projectionMatrix),Mt(nt,et,Jt)};function Mt(nt,vt,Dt){Dt===null?nt.matrix.copy(vt.matrixWorld):(nt.matrix.copy(Dt.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(vt.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(vt.projectionMatrix),nt.projectionMatrixInverse.copy(vt.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=Ad*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return et},this.getFoveation=function(){if(!(x===null&&M===null))return m},this.setFoveation=function(nt){m=nt,x!==null&&(x.fixedFoveation=nt),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=nt)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(et)},this.getCameraTexture=function(nt){return v[nt]};let Tt=null;function Lt(nt,vt){if(g=vt.getViewerPose(p||f),E=vt,g!==null){const Dt=g.views;M!==null&&(t.setRenderTargetFramebuffer(D,M.framebuffer),t.setRenderTarget(D));let Jt=!1;Dt.length!==et.cameras.length&&(et.cameras.length=0,Jt=!0);for(let H=0;H<Dt.length;H++){const we=Dt[H];let oe=null;if(M!==null)oe=M.getViewport(we);else{const zt=_.getViewSubImage(x,we);oe=zt.viewport,H===0&&(t.setRenderTargetTextures(D,zt.colorTexture,zt.depthStencilTexture),t.setRenderTarget(D))}let ne=k[H];ne===void 0&&(ne=new Bn,ne.layers.enable(H),ne.viewport=new nn,k[H]=ne),ne.matrix.fromArray(we.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(we.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(oe.x,oe.y,oe.width,oe.height),H===0&&(et.matrix.copy(ne.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale)),Jt===!0&&et.cameras.push(ne)}const qt=l.enabledFeatures;if(qt&&qt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){_=a.getBinding();const H=_.getDepthInformation(Dt[0]);H&&H.isValid&&H.texture&&S.init(H,l.renderState)}if(qt&&qt.includes("camera-access")&&C){t.state.unbindTexture(),_=a.getBinding();for(let H=0;H<Dt.length;H++){const we=Dt[H].camera;if(we){let oe=v[we];oe||(oe=new M0,v[we]=oe);const ne=_.getCameraImage(we);oe.sourceTexture=ne}}}}for(let Dt=0;Dt<P.length;Dt++){const Jt=F[Dt],qt=P[Dt];Jt!==null&&qt!==void 0&&qt.update(Jt,vt,p||f)}Tt&&Tt(nt,vt),vt.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:vt}),E=null}const Vt=new E0;Vt.setAnimationLoop(Lt),this.setAnimationLoop=function(nt){Tt=nt},this.dispose=function(){}}}const _r=new Pi,pR=new sn;function mR(s,t){function i(S,v){S.matrixAutoUpdate===!0&&S.updateMatrix(),v.value.copy(S.matrix)}function a(S,v){v.color.getRGB(S.fogColor.value,v0(s)),v.isFog?(S.fogNear.value=v.near,S.fogFar.value=v.far):v.isFogExp2&&(S.fogDensity.value=v.density)}function l(S,v,U,L,D){v.isMeshBasicMaterial||v.isMeshLambertMaterial?u(S,v):v.isMeshToonMaterial?(u(S,v),_(S,v)):v.isMeshPhongMaterial?(u(S,v),g(S,v)):v.isMeshStandardMaterial?(u(S,v),x(S,v),v.isMeshPhysicalMaterial&&M(S,v,D)):v.isMeshMatcapMaterial?(u(S,v),E(S,v)):v.isMeshDepthMaterial?u(S,v):v.isMeshDistanceMaterial?(u(S,v),C(S,v)):v.isMeshNormalMaterial?u(S,v):v.isLineBasicMaterial?(f(S,v),v.isLineDashedMaterial&&d(S,v)):v.isPointsMaterial?m(S,v,U,L):v.isSpriteMaterial?p(S,v):v.isShadowMaterial?(S.color.value.copy(v.color),S.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function u(S,v){S.opacity.value=v.opacity,v.color&&S.diffuse.value.copy(v.color),v.emissive&&S.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(S.map.value=v.map,i(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.bumpMap&&(S.bumpMap.value=v.bumpMap,i(v.bumpMap,S.bumpMapTransform),S.bumpScale.value=v.bumpScale,v.side===Xn&&(S.bumpScale.value*=-1)),v.normalMap&&(S.normalMap.value=v.normalMap,i(v.normalMap,S.normalMapTransform),S.normalScale.value.copy(v.normalScale),v.side===Xn&&S.normalScale.value.negate()),v.displacementMap&&(S.displacementMap.value=v.displacementMap,i(v.displacementMap,S.displacementMapTransform),S.displacementScale.value=v.displacementScale,S.displacementBias.value=v.displacementBias),v.emissiveMap&&(S.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,S.emissiveMapTransform)),v.specularMap&&(S.specularMap.value=v.specularMap,i(v.specularMap,S.specularMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest);const U=t.get(v),L=U.envMap,D=U.envMapRotation;L&&(S.envMap.value=L,_r.copy(D),_r.x*=-1,_r.y*=-1,_r.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(_r.y*=-1,_r.z*=-1),S.envMapRotation.value.setFromMatrix4(pR.makeRotationFromEuler(_r)),S.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=v.reflectivity,S.ior.value=v.ior,S.refractionRatio.value=v.refractionRatio),v.lightMap&&(S.lightMap.value=v.lightMap,S.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,S.lightMapTransform)),v.aoMap&&(S.aoMap.value=v.aoMap,S.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,S.aoMapTransform))}function f(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,v.map&&(S.map.value=v.map,i(v.map,S.mapTransform))}function d(S,v){S.dashSize.value=v.dashSize,S.totalSize.value=v.dashSize+v.gapSize,S.scale.value=v.scale}function m(S,v,U,L){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.size.value=v.size*U,S.scale.value=L*.5,v.map&&(S.map.value=v.map,i(v.map,S.uvTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function p(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.rotation.value=v.rotation,v.map&&(S.map.value=v.map,i(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function g(S,v){S.specular.value.copy(v.specular),S.shininess.value=Math.max(v.shininess,1e-4)}function _(S,v){v.gradientMap&&(S.gradientMap.value=v.gradientMap)}function x(S,v){S.metalness.value=v.metalness,v.metalnessMap&&(S.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,S.metalnessMapTransform)),S.roughness.value=v.roughness,v.roughnessMap&&(S.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,S.roughnessMapTransform)),v.envMap&&(S.envMapIntensity.value=v.envMapIntensity)}function M(S,v,U){S.ior.value=v.ior,v.sheen>0&&(S.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),S.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(S.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,S.sheenColorMapTransform)),v.sheenRoughnessMap&&(S.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,S.sheenRoughnessMapTransform))),v.clearcoat>0&&(S.clearcoat.value=v.clearcoat,S.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(S.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,S.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(S.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Xn&&S.clearcoatNormalScale.value.negate())),v.dispersion>0&&(S.dispersion.value=v.dispersion),v.iridescence>0&&(S.iridescence.value=v.iridescence,S.iridescenceIOR.value=v.iridescenceIOR,S.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(S.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,S.iridescenceMapTransform)),v.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),v.transmission>0&&(S.transmission.value=v.transmission,S.transmissionSamplerMap.value=U.texture,S.transmissionSamplerSize.value.set(U.width,U.height),v.transmissionMap&&(S.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,S.transmissionMapTransform)),S.thickness.value=v.thickness,v.thicknessMap&&(S.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=v.attenuationDistance,S.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(S.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(S.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=v.specularIntensity,S.specularColor.value.copy(v.specularColor),v.specularColorMap&&(S.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,S.specularColorMapTransform)),v.specularIntensityMap&&(S.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,v){v.matcap&&(S.matcap.value=v.matcap)}function C(S,v){const U=t.get(v).light;S.referencePosition.value.setFromMatrixPosition(U.matrixWorld),S.nearDistance.value=U.shadow.camera.near,S.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:l}}function gR(s,t,i,a){let l={},u={},f=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(U,L){const D=L.program;a.uniformBlockBinding(U,D)}function p(U,L){let D=l[U.id];D===void 0&&(E(U),D=g(U),l[U.id]=D,U.addEventListener("dispose",S));const P=L.program;a.updateUBOMapping(U,P);const F=t.render.frame;u[U.id]!==F&&(x(U),u[U.id]=F)}function g(U){const L=_();U.__bindingPointIndex=L;const D=s.createBuffer(),P=U.__size,F=U.usage;return s.bindBuffer(s.UNIFORM_BUFFER,D),s.bufferData(s.UNIFORM_BUFFER,P,F),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,D),D}function _(){for(let U=0;U<d;U++)if(f.indexOf(U)===-1)return f.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(U){const L=l[U.id],D=U.uniforms,P=U.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let F=0,V=D.length;F<V;F++){const X=Array.isArray(D[F])?D[F]:[D[F]];for(let w=0,A=X.length;w<A;w++){const k=X[w];if(M(k,F,w,P)===!0){const et=k.__offset,ct=Array.isArray(k.value)?k.value:[k.value];let _t=0;for(let ft=0;ft<ct.length;ft++){const B=ct[ft],Z=C(B);typeof B=="number"||typeof B=="boolean"?(k.__data[0]=B,s.bufferSubData(s.UNIFORM_BUFFER,et+_t,k.__data)):B.isMatrix3?(k.__data[0]=B.elements[0],k.__data[1]=B.elements[1],k.__data[2]=B.elements[2],k.__data[3]=0,k.__data[4]=B.elements[3],k.__data[5]=B.elements[4],k.__data[6]=B.elements[5],k.__data[7]=0,k.__data[8]=B.elements[6],k.__data[9]=B.elements[7],k.__data[10]=B.elements[8],k.__data[11]=0):(B.toArray(k.__data,_t),_t+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,et,k.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(U,L,D,P){const F=U.value,V=L+"_"+D;if(P[V]===void 0)return typeof F=="number"||typeof F=="boolean"?P[V]=F:P[V]=F.clone(),!0;{const X=P[V];if(typeof F=="number"||typeof F=="boolean"){if(X!==F)return P[V]=F,!0}else if(X.equals(F)===!1)return X.copy(F),!0}return!1}function E(U){const L=U.uniforms;let D=0;const P=16;for(let V=0,X=L.length;V<X;V++){const w=Array.isArray(L[V])?L[V]:[L[V]];for(let A=0,k=w.length;A<k;A++){const et=w[A],ct=Array.isArray(et.value)?et.value:[et.value];for(let _t=0,ft=ct.length;_t<ft;_t++){const B=ct[_t],Z=C(B),q=D%P,Et=q%Z.boundary,N=q+Et;D+=Et,N!==0&&P-N<Z.storage&&(D+=P-N),et.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),et.__offset=D,D+=Z.storage}}}const F=D%P;return F>0&&(D+=P-F),U.__size=D,U.__cache={},this}function C(U){const L={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(L.boundary=4,L.storage=4):U.isVector2?(L.boundary=8,L.storage=8):U.isVector3||U.isColor?(L.boundary=16,L.storage=12):U.isVector4?(L.boundary=16,L.storage=16):U.isMatrix3?(L.boundary=48,L.storage=48):U.isMatrix4?(L.boundary=64,L.storage=64):U.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U),L}function S(U){const L=U.target;L.removeEventListener("dispose",S);const D=f.indexOf(L.__bindingPointIndex);f.splice(D,1),s.deleteBuffer(l[L.id]),delete l[L.id],delete u[L.id]}function v(){for(const U in l)s.deleteBuffer(l[U]);f=[],l={},u={}}return{bind:m,update:p,dispose:v}}class _R{constructor(t={}){const{canvas:i=QM(),context:a=null,depth:l=!0,stencil:u=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:x=!1}=t;this.isWebGLRenderer=!0;let M;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=a.getContextAttributes().alpha}else M=f;const E=new Uint32Array(4),C=new Int32Array(4);let S=null,v=null;const U=[],L=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let P=!1;this._outputColorSpace=ui;let F=0,V=0,X=null,w=-1,A=null;const k=new nn,et=new nn;let ct=null;const _t=new Ue(0);let ft=0,B=i.width,Z=i.height,q=1,Et=null,N=null;const J=new nn(0,0,B,Z),Mt=new nn(0,0,B,Z);let Tt=!1;const Lt=new kd;let Vt=!1,nt=!1;const vt=new sn,Dt=new $,Jt=new nn,qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let fe=!1;function Ze(){return X===null?q:1}let H=a;function we(R,Y){return i.getContext(R,Y)}try{const R={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Od}`),i.addEventListener("webglcontextlost",Rt,!1),i.addEventListener("webglcontextrestored",Ot,!1),i.addEventListener("webglcontextcreationerror",At,!1),H===null){const Y="webgl2";if(H=we(Y,R),H===null)throw we(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let oe,ne,zt,Le,kt,le,Xe,Ve,O,T,it,ht,mt,ut,Ht,Ut,Wt,Yt,bt,Nt,jt,z,at,wt;function G(){oe=new RA(H),oe.init(),z=new uR(H,oe),ne=new SA(H,oe,t,z),zt=new oR(H,oe),ne.reversedDepthBuffer&&x&&zt.buffers.depth.setReversed(!0),Le=new DA(H),kt=new j1,le=new lR(H,oe,zt,kt,ne,z,Le),Xe=new MA(D),Ve=new AA(D),O=new IE(H),at=new vA(H,O),T=new CA(H,O,Le,at),it=new LA(H,T,O,Le),bt=new UA(H,ne,le),Ut=new yA(kt),ht=new Y1(D,Xe,Ve,oe,ne,at,Ut),mt=new mR(D,kt),ut=new K1,Ht=new nR(oe),Yt=new _A(D,Xe,Ve,zt,it,M,m),Wt=new rR(D,it,ne),wt=new gR(H,Le,ne,zt),Nt=new xA(H,oe,Le),jt=new wA(H,oe,Le),Le.programs=ht.programs,D.capabilities=ne,D.extensions=oe,D.properties=kt,D.renderLists=ut,D.shadowMap=Wt,D.state=zt,D.info=Le}G();const yt=new dR(D,H);this.xr=yt,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const R=oe.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=oe.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(R){R!==void 0&&(q=R,this.setSize(B,Z,!1))},this.getSize=function(R){return R.set(B,Z)},this.setSize=function(R,Y,ot=!0){if(yt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=R,Z=Y,i.width=Math.floor(R*q),i.height=Math.floor(Y*q),ot===!0&&(i.style.width=R+"px",i.style.height=Y+"px"),this.setViewport(0,0,R,Y)},this.getDrawingBufferSize=function(R){return R.set(B*q,Z*q).floor()},this.setDrawingBufferSize=function(R,Y,ot){B=R,Z=Y,q=ot,i.width=Math.floor(R*ot),i.height=Math.floor(Y*ot),this.setViewport(0,0,R,Y)},this.getCurrentViewport=function(R){return R.copy(k)},this.getViewport=function(R){return R.copy(J)},this.setViewport=function(R,Y,ot,lt){R.isVector4?J.set(R.x,R.y,R.z,R.w):J.set(R,Y,ot,lt),zt.viewport(k.copy(J).multiplyScalar(q).round())},this.getScissor=function(R){return R.copy(Mt)},this.setScissor=function(R,Y,ot,lt){R.isVector4?Mt.set(R.x,R.y,R.z,R.w):Mt.set(R,Y,ot,lt),zt.scissor(et.copy(Mt).multiplyScalar(q).round())},this.getScissorTest=function(){return Tt},this.setScissorTest=function(R){zt.setScissorTest(Tt=R)},this.setOpaqueSort=function(R){Et=R},this.setTransparentSort=function(R){N=R},this.getClearColor=function(R){return R.copy(Yt.getClearColor())},this.setClearColor=function(){Yt.setClearColor(...arguments)},this.getClearAlpha=function(){return Yt.getClearAlpha()},this.setClearAlpha=function(){Yt.setClearAlpha(...arguments)},this.clear=function(R=!0,Y=!0,ot=!0){let lt=0;if(R){let K=!1;if(X!==null){const Ct=X.texture.format;K=Ct===Hd||Ct===Fd||Ct===zd}if(K){const Ct=X.texture.type,Pt=Ct===Oi||Ct===Er||Ct===Go||Ct===Vo||Ct===Id||Ct===Bd,Gt=Yt.getClearColor(),It=Yt.getClearAlpha(),te=Gt.r,ae=Gt.g,Zt=Gt.b;Pt?(E[0]=te,E[1]=ae,E[2]=Zt,E[3]=It,H.clearBufferuiv(H.COLOR,0,E)):(C[0]=te,C[1]=ae,C[2]=Zt,C[3]=It,H.clearBufferiv(H.COLOR,0,C))}else lt|=H.COLOR_BUFFER_BIT}Y&&(lt|=H.DEPTH_BUFFER_BIT),ot&&(lt|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(lt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Rt,!1),i.removeEventListener("webglcontextrestored",Ot,!1),i.removeEventListener("webglcontextcreationerror",At,!1),Yt.dispose(),ut.dispose(),Ht.dispose(),kt.dispose(),Xe.dispose(),Ve.dispose(),it.dispose(),at.dispose(),wt.dispose(),ht.dispose(),yt.dispose(),yt.removeEventListener("sessionstart",qe),yt.removeEventListener("sessionend",fn),Je.stop()};function Rt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function Ot(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const R=Le.autoReset,Y=Wt.enabled,ot=Wt.autoUpdate,lt=Wt.needsUpdate,K=Wt.type;G(),Le.autoReset=R,Wt.enabled=Y,Wt.autoUpdate=ot,Wt.needsUpdate=lt,Wt.type=K}function At(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function gt(R){const Y=R.target;Y.removeEventListener("dispose",gt),Ft(Y)}function Ft(R){Kt(R),kt.remove(R)}function Kt(R){const Y=kt.get(R).programs;Y!==void 0&&(Y.forEach(function(ot){ht.releaseProgram(ot)}),R.isShaderMaterial&&ht.releaseShaderCache(R))}this.renderBufferDirect=function(R,Y,ot,lt,K,Ct){Y===null&&(Y=qt);const Pt=K.isMesh&&K.matrixWorld.determinant()<0,Gt=fa(R,Y,ot,lt,K);zt.setMaterial(lt,Pt);let It=ot.index,te=1;if(lt.wireframe===!0){if(It=T.getWireframeAttribute(ot),It===void 0)return;te=2}const ae=ot.drawRange,Zt=ot.attributes.position;let pe=ae.start*te,Ae=(ae.start+ae.count)*te;Ct!==null&&(pe=Math.max(pe,Ct.start*te),Ae=Math.min(Ae,(Ct.start+Ct.count)*te)),It!==null?(pe=Math.max(pe,0),Ae=Math.min(Ae,It.count)):Zt!=null&&(pe=Math.max(pe,0),Ae=Math.min(Ae,Zt.count));const Ye=Ae-pe;if(Ye<0||Ye===1/0)return;at.setup(K,lt,Gt,ot,It);let Pe,me=Nt;if(It!==null&&(Pe=O.get(It),me=jt,me.setIndex(Pe)),K.isMesh)lt.wireframe===!0?(zt.setLineWidth(lt.wireframeLinewidth*Ze()),me.setMode(H.LINES)):me.setMode(H.TRIANGLES);else if(K.isLine){let $t=lt.linewidth;$t===void 0&&($t=1),zt.setLineWidth($t*Ze()),K.isLineSegments?me.setMode(H.LINES):K.isLineLoop?me.setMode(H.LINE_LOOP):me.setMode(H.LINE_STRIP)}else K.isPoints?me.setMode(H.POINTS):K.isSprite&&me.setMode(H.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)Wo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),me.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(oe.get("WEBGL_multi_draw"))me.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const $t=K._multiDrawStarts,We=K._multiDrawCounts,Se=K._multiDrawCount,An=It?O.get(It).bytesPerElement:1,ci=kt.get(lt).currentProgram.getUniforms();for(let Nn=0;Nn<Se;Nn++)ci.setValue(H,"_gl_DrawID",Nn),me.render($t[Nn]/An,We[Nn])}else if(K.isInstancedMesh)me.renderInstances(pe,Ye,K.count);else if(ot.isInstancedBufferGeometry){const $t=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,We=Math.min(ot.instanceCount,$t);me.renderInstances(pe,Ye,We)}else me.render(pe,Ye)};function Te(R,Y,ot){R.transparent===!0&&R.side===ra&&R.forceSinglePass===!1?(R.side=Xn,R.needsUpdate=!0,yi(R,Y,ot),R.side=qa,R.needsUpdate=!0,yi(R,Y,ot),R.side=ra):yi(R,Y,ot)}this.compile=function(R,Y,ot=null){ot===null&&(ot=R),v=Ht.get(ot),v.init(Y),L.push(v),ot.traverseVisible(function(K){K.isLight&&K.layers.test(Y.layers)&&(v.pushLight(K),K.castShadow&&v.pushShadow(K))}),R!==ot&&R.traverseVisible(function(K){K.isLight&&K.layers.test(Y.layers)&&(v.pushLight(K),K.castShadow&&v.pushShadow(K))}),v.setupLights();const lt=new Set;return R.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Ct=K.material;if(Ct)if(Array.isArray(Ct))for(let Pt=0;Pt<Ct.length;Pt++){const Gt=Ct[Pt];Te(Gt,ot,K),lt.add(Gt)}else Te(Ct,ot,K),lt.add(Ct)}),v=L.pop(),lt},this.compileAsync=function(R,Y,ot=null){const lt=this.compile(R,Y,ot);return new Promise(K=>{function Ct(){if(lt.forEach(function(Pt){kt.get(Pt).currentProgram.isReady()&&lt.delete(Pt)}),lt.size===0){K(R);return}setTimeout(Ct,10)}oe.get("KHR_parallel_shader_compile")!==null?Ct():setTimeout(Ct,10)})};let _e=null;function yn(R){_e&&_e(R)}function qe(){Je.stop()}function fn(){Je.start()}const Je=new E0;Je.setAnimationLoop(yn),typeof self<"u"&&Je.setContext(self),this.setAnimationLoop=function(R){_e=R,yt.setAnimationLoop(R),R===null?Je.stop():Je.start()},yt.addEventListener("sessionstart",qe),yt.addEventListener("sessionend",fn),this.render=function(R,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),yt.enabled===!0&&yt.isPresenting===!0&&(yt.cameraAutoUpdate===!0&&yt.updateCamera(Y),Y=yt.getCamera()),R.isScene===!0&&R.onBeforeRender(D,R,Y,X),v=Ht.get(R,L.length),v.init(Y),L.push(v),vt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Lt.setFromProjectionMatrix(vt,wi,Y.reversedDepth),nt=this.localClippingEnabled,Vt=Ut.init(this.clippingPlanes,nt),S=ut.get(R,U.length),S.init(),U.push(S),yt.enabled===!0&&yt.isPresenting===!0){const Ct=D.xr.getDepthSensingMesh();Ct!==null&&Si(Ct,Y,-1/0,D.sortObjects)}Si(R,Y,0,D.sortObjects),S.finish(),D.sortObjects===!0&&S.sort(Et,N),fe=yt.enabled===!1||yt.isPresenting===!1||yt.hasDepthSensing()===!1,fe&&Yt.addToRenderList(S,R),this.info.render.frame++,Vt===!0&&Ut.beginShadows();const ot=v.state.shadowsArray;Wt.render(ot,R,Y),Vt===!0&&Ut.endShadows(),this.info.autoReset===!0&&this.info.reset();const lt=S.opaque,K=S.transmissive;if(v.setupLights(),Y.isArrayCamera){const Ct=Y.cameras;if(K.length>0)for(let Pt=0,Gt=Ct.length;Pt<Gt;Pt++){const It=Ct[Pt];tl(lt,K,R,It)}fe&&Yt.render(R);for(let Pt=0,Gt=Ct.length;Pt<Gt;Pt++){const It=Ct[Pt];Rr(S,R,It,It.viewport)}}else K.length>0&&tl(lt,K,R,Y),fe&&Yt.render(R),Rr(S,R,Y);X!==null&&V===0&&(le.updateMultisampleRenderTarget(X),le.updateRenderTargetMipmap(X)),R.isScene===!0&&R.onAfterRender(D,R,Y),at.resetDefaultState(),w=-1,A=null,L.pop(),L.length>0?(v=L[L.length-1],Vt===!0&&Ut.setGlobalState(D.clippingPlanes,v.state.camera)):v=null,U.pop(),U.length>0?S=U[U.length-1]:S=null};function Si(R,Y,ot,lt){if(R.visible===!1)return;if(R.layers.test(Y.layers)){if(R.isGroup)ot=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Y);else if(R.isLight)v.pushLight(R),R.castShadow&&v.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Lt.intersectsSprite(R)){lt&&Jt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(vt);const Pt=it.update(R),Gt=R.material;Gt.visible&&S.push(R,Pt,Gt,ot,Jt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Lt.intersectsObject(R))){const Pt=it.update(R),Gt=R.material;if(lt&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Jt.copy(R.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),Jt.copy(Pt.boundingSphere.center)),Jt.applyMatrix4(R.matrixWorld).applyMatrix4(vt)),Array.isArray(Gt)){const It=Pt.groups;for(let te=0,ae=It.length;te<ae;te++){const Zt=It[te],pe=Gt[Zt.materialIndex];pe&&pe.visible&&S.push(R,Pt,pe,ot,Jt.z,Zt)}}else Gt.visible&&S.push(R,Pt,Gt,ot,Jt.z,null)}}const Ct=R.children;for(let Pt=0,Gt=Ct.length;Pt<Gt;Pt++)Si(Ct[Pt],Y,ot,lt)}function Rr(R,Y,ot,lt){const K=R.opaque,Ct=R.transmissive,Pt=R.transparent;v.setupLightsView(ot),Vt===!0&&Ut.setGlobalState(D.clippingPlanes,ot),lt&&zt.viewport(k.copy(lt)),K.length>0&&Cr(K,Y,ot),Ct.length>0&&Cr(Ct,Y,ot),Pt.length>0&&Cr(Pt,Y,ot),zt.buffers.depth.setTest(!0),zt.buffers.depth.setMask(!0),zt.buffers.color.setMask(!0),zt.setPolygonOffset(!1)}function tl(R,Y,ot,lt){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[lt.id]===void 0&&(v.state.transmissionRenderTarget[lt.id]=new br(1,1,{generateMipmaps:!0,type:oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float")?Zo:Oi,minFilter:Mr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ce.workingColorSpace}));const Ct=v.state.transmissionRenderTarget[lt.id],Pt=lt.viewport||k;Ct.setSize(Pt.z*D.transmissionResolutionScale,Pt.w*D.transmissionResolutionScale);const Gt=D.getRenderTarget(),It=D.getActiveCubeFace(),te=D.getActiveMipmapLevel();D.setRenderTarget(Ct),D.getClearColor(_t),ft=D.getClearAlpha(),ft<1&&D.setClearColor(16777215,.5),D.clear(),fe&&Yt.render(ot);const ae=D.toneMapping;D.toneMapping=Wa;const Zt=lt.viewport;if(lt.viewport!==void 0&&(lt.viewport=void 0),v.setupLightsView(lt),Vt===!0&&Ut.setGlobalState(D.clippingPlanes,lt),Cr(R,ot,lt),le.updateMultisampleRenderTarget(Ct),le.updateRenderTargetMipmap(Ct),oe.has("WEBGL_multisampled_render_to_texture")===!1){let pe=!1;for(let Ae=0,Ye=Y.length;Ae<Ye;Ae++){const Pe=Y[Ae],me=Pe.object,$t=Pe.geometry,We=Pe.material,Se=Pe.group;if(We.side===ra&&me.layers.test(lt.layers)){const An=We.side;We.side=Xn,We.needsUpdate=!0,Is(me,ot,lt,$t,We,Se),We.side=An,We.needsUpdate=!0,pe=!0}}pe===!0&&(le.updateMultisampleRenderTarget(Ct),le.updateRenderTargetMipmap(Ct))}D.setRenderTarget(Gt,It,te),D.setClearColor(_t,ft),Zt!==void 0&&(lt.viewport=Zt),D.toneMapping=ae}function Cr(R,Y,ot){const lt=Y.isScene===!0?Y.overrideMaterial:null;for(let K=0,Ct=R.length;K<Ct;K++){const Pt=R[K],Gt=Pt.object,It=Pt.geometry,te=Pt.group;let ae=Pt.material;ae.allowOverride===!0&&lt!==null&&(ae=lt),Gt.layers.test(ot.layers)&&Is(Gt,Y,ot,It,ae,te)}}function Is(R,Y,ot,lt,K,Ct){R.onBeforeRender(D,Y,ot,lt,K,Ct),R.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),K.onBeforeRender(D,Y,ot,lt,R,Ct),K.transparent===!0&&K.side===ra&&K.forceSinglePass===!1?(K.side=Xn,K.needsUpdate=!0,D.renderBufferDirect(ot,Y,lt,K,R,Ct),K.side=qa,K.needsUpdate=!0,D.renderBufferDirect(ot,Y,lt,K,R,Ct),K.side=ra):D.renderBufferDirect(ot,Y,lt,K,R,Ct),R.onAfterRender(D,Y,ot,lt,K,Ct)}function yi(R,Y,ot){Y.isScene!==!0&&(Y=qt);const lt=kt.get(R),K=v.state.lights,Ct=v.state.shadowsArray,Pt=K.state.version,Gt=ht.getParameters(R,K.state,Ct,Y,ot),It=ht.getProgramCacheKey(Gt);let te=lt.programs;lt.environment=R.isMeshStandardMaterial?Y.environment:null,lt.fog=Y.fog,lt.envMap=(R.isMeshStandardMaterial?Ve:Xe).get(R.envMap||lt.environment),lt.envMapRotation=lt.environment!==null&&R.envMap===null?Y.environmentRotation:R.envMapRotation,te===void 0&&(R.addEventListener("dispose",gt),te=new Map,lt.programs=te);let ae=te.get(It);if(ae!==void 0){if(lt.currentProgram===ae&&lt.lightsStateVersion===Pt)return Bi(R,Gt),ae}else Gt.uniforms=ht.getUniforms(R),R.onBeforeCompile(Gt,D),ae=ht.acquireProgram(Gt,It),te.set(It,ae),lt.uniforms=Gt.uniforms;const Zt=lt.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Zt.clippingPlanes=Ut.uniform),Bi(R,Gt),lt.needsLights=ha(R),lt.lightsStateVersion=Pt,lt.needsLights&&(Zt.ambientLightColor.value=K.state.ambient,Zt.lightProbe.value=K.state.probe,Zt.directionalLights.value=K.state.directional,Zt.directionalLightShadows.value=K.state.directionalShadow,Zt.spotLights.value=K.state.spot,Zt.spotLightShadows.value=K.state.spotShadow,Zt.rectAreaLights.value=K.state.rectArea,Zt.ltc_1.value=K.state.rectAreaLTC1,Zt.ltc_2.value=K.state.rectAreaLTC2,Zt.pointLights.value=K.state.point,Zt.pointLightShadows.value=K.state.pointShadow,Zt.hemisphereLights.value=K.state.hemi,Zt.directionalShadowMap.value=K.state.directionalShadowMap,Zt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Zt.spotShadowMap.value=K.state.spotShadowMap,Zt.spotLightMatrix.value=K.state.spotLightMatrix,Zt.spotLightMap.value=K.state.spotLightMap,Zt.pointShadowMap.value=K.state.pointShadowMap,Zt.pointShadowMatrix.value=K.state.pointShadowMatrix),lt.currentProgram=ae,lt.uniformsList=null,ae}function wr(R){if(R.uniformsList===null){const Y=R.currentProgram.getUniforms();R.uniformsList=Fu.seqWithValue(Y.seq,R.uniforms)}return R.uniformsList}function Bi(R,Y){const ot=kt.get(R);ot.outputColorSpace=Y.outputColorSpace,ot.batching=Y.batching,ot.batchingColor=Y.batchingColor,ot.instancing=Y.instancing,ot.instancingColor=Y.instancingColor,ot.instancingMorph=Y.instancingMorph,ot.skinning=Y.skinning,ot.morphTargets=Y.morphTargets,ot.morphNormals=Y.morphNormals,ot.morphColors=Y.morphColors,ot.morphTargetsCount=Y.morphTargetsCount,ot.numClippingPlanes=Y.numClippingPlanes,ot.numIntersection=Y.numClipIntersection,ot.vertexAlphas=Y.vertexAlphas,ot.vertexTangents=Y.vertexTangents,ot.toneMapping=Y.toneMapping}function fa(R,Y,ot,lt,K){Y.isScene!==!0&&(Y=qt),le.resetTextureUnits();const Ct=Y.fog,Pt=lt.isMeshStandardMaterial?Y.environment:null,Gt=X===null?D.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Ds,It=(lt.isMeshStandardMaterial?Ve:Xe).get(lt.envMap||Pt),te=lt.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,ae=!!ot.attributes.tangent&&(!!lt.normalMap||lt.anisotropy>0),Zt=!!ot.morphAttributes.position,pe=!!ot.morphAttributes.normal,Ae=!!ot.morphAttributes.color;let Ye=Wa;lt.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Ye=D.toneMapping);const Pe=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,me=Pe!==void 0?Pe.length:0,$t=kt.get(lt),We=v.state.lights;if(Vt===!0&&(nt===!0||R!==A)){const $e=R===A&&lt.id===w;Ut.setState(lt,R,$e)}let Se=!1;lt.version===$t.__version?($t.needsLights&&$t.lightsStateVersion!==We.state.version||$t.outputColorSpace!==Gt||K.isBatchedMesh&&$t.batching===!1||!K.isBatchedMesh&&$t.batching===!0||K.isBatchedMesh&&$t.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&$t.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&$t.instancing===!1||!K.isInstancedMesh&&$t.instancing===!0||K.isSkinnedMesh&&$t.skinning===!1||!K.isSkinnedMesh&&$t.skinning===!0||K.isInstancedMesh&&$t.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&$t.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&$t.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&$t.instancingMorph===!1&&K.morphTexture!==null||$t.envMap!==It||lt.fog===!0&&$t.fog!==Ct||$t.numClippingPlanes!==void 0&&($t.numClippingPlanes!==Ut.numPlanes||$t.numIntersection!==Ut.numIntersection)||$t.vertexAlphas!==te||$t.vertexTangents!==ae||$t.morphTargets!==Zt||$t.morphNormals!==pe||$t.morphColors!==Ae||$t.toneMapping!==Ye||$t.morphTargetsCount!==me)&&(Se=!0):(Se=!0,$t.__version=lt.version);let An=$t.currentProgram;Se===!0&&(An=yi(lt,Y,K));let ci=!1,Nn=!1,gn=!1;const He=An.getUniforms(),On=$t.uniforms;if(zt.useProgram(An.program)&&(ci=!0,Nn=!0,gn=!0),lt.id!==w&&(w=lt.id,Nn=!0),ci||A!==R){zt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),He.setValue(H,"projectionMatrix",R.projectionMatrix),He.setValue(H,"viewMatrix",R.matrixWorldInverse);const Mn=He.map.cameraPosition;Mn!==void 0&&Mn.setValue(H,Dt.setFromMatrixPosition(R.matrixWorld)),ne.logarithmicDepthBuffer&&He.setValue(H,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(lt.isMeshPhongMaterial||lt.isMeshToonMaterial||lt.isMeshLambertMaterial||lt.isMeshBasicMaterial||lt.isMeshStandardMaterial||lt.isShaderMaterial)&&He.setValue(H,"isOrthographic",R.isOrthographicCamera===!0),A!==R&&(A=R,Nn=!0,gn=!0)}if(K.isSkinnedMesh){He.setOptional(H,K,"bindMatrix"),He.setOptional(H,K,"bindMatrixInverse");const $e=K.skeleton;$e&&($e.boneTexture===null&&$e.computeBoneTexture(),He.setValue(H,"boneTexture",$e.boneTexture,le))}K.isBatchedMesh&&(He.setOptional(H,K,"batchingTexture"),He.setValue(H,"batchingTexture",K._matricesTexture,le),He.setOptional(H,K,"batchingIdTexture"),He.setValue(H,"batchingIdTexture",K._indirectTexture,le),He.setOptional(H,K,"batchingColorTexture"),K._colorsTexture!==null&&He.setValue(H,"batchingColorTexture",K._colorsTexture,le));const Rn=ot.morphAttributes;if((Rn.position!==void 0||Rn.normal!==void 0||Rn.color!==void 0)&&bt.update(K,ot,An),(Nn||$t.receiveShadow!==K.receiveShadow)&&($t.receiveShadow=K.receiveShadow,He.setValue(H,"receiveShadow",K.receiveShadow)),lt.isMeshGouraudMaterial&&lt.envMap!==null&&(On.envMap.value=It,On.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),lt.isMeshStandardMaterial&&lt.envMap===null&&Y.environment!==null&&(On.envMapIntensity.value=Y.environmentIntensity),Nn&&(He.setValue(H,"toneMappingExposure",D.toneMappingExposure),$t.needsLights&&Za(On,gn),Ct&&lt.fog===!0&&mt.refreshFogUniforms(On,Ct),mt.refreshMaterialUniforms(On,lt,q,Z,v.state.transmissionRenderTarget[R.id]),Fu.upload(H,wr($t),On,le)),lt.isShaderMaterial&&lt.uniformsNeedUpdate===!0&&(Fu.upload(H,wr($t),On,le),lt.uniformsNeedUpdate=!1),lt.isSpriteMaterial&&He.setValue(H,"center",K.center),He.setValue(H,"modelViewMatrix",K.modelViewMatrix),He.setValue(H,"normalMatrix",K.normalMatrix),He.setValue(H,"modelMatrix",K.matrixWorld),lt.isShaderMaterial||lt.isRawShaderMaterial){const $e=lt.uniformsGroups;for(let Mn=0,Dr=$e.length;Mn<Dr;Mn++){const zn=$e[Mn];wt.update(zn,An),wt.bind(zn,An)}}return An}function Za(R,Y){R.ambientLightColor.needsUpdate=Y,R.lightProbe.needsUpdate=Y,R.directionalLights.needsUpdate=Y,R.directionalLightShadows.needsUpdate=Y,R.pointLights.needsUpdate=Y,R.pointLightShadows.needsUpdate=Y,R.spotLights.needsUpdate=Y,R.spotLightShadows.needsUpdate=Y,R.rectAreaLights.needsUpdate=Y,R.hemisphereLights.needsUpdate=Y}function ha(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(R,Y,ot){const lt=kt.get(R);lt.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,lt.__autoAllocateDepthBuffer===!1&&(lt.__useRenderToTexture=!1),kt.get(R.texture).__webglTexture=Y,kt.get(R.depthTexture).__webglTexture=lt.__autoAllocateDepthBuffer?void 0:ot,lt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Y){const ot=kt.get(R);ot.__webglFramebuffer=Y,ot.__useDefaultFramebuffer=Y===void 0};const on=H.createFramebuffer();this.setRenderTarget=function(R,Y=0,ot=0){X=R,F=Y,V=ot;let lt=!0,K=null,Ct=!1,Pt=!1;if(R){const It=kt.get(R);if(It.__useDefaultFramebuffer!==void 0)zt.bindFramebuffer(H.FRAMEBUFFER,null),lt=!1;else if(It.__webglFramebuffer===void 0)le.setupRenderTarget(R);else if(It.__hasExternalTextures)le.rebindTextures(R,kt.get(R.texture).__webglTexture,kt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Zt=R.depthTexture;if(It.__boundDepthTexture!==Zt){if(Zt!==null&&kt.has(Zt)&&(R.width!==Zt.image.width||R.height!==Zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");le.setupDepthRenderbuffer(R)}}const te=R.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(Pt=!0);const ae=kt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ae[Y])?K=ae[Y][ot]:K=ae[Y],Ct=!0):R.samples>0&&le.useMultisampledRTT(R)===!1?K=kt.get(R).__webglMultisampledFramebuffer:Array.isArray(ae)?K=ae[ot]:K=ae,k.copy(R.viewport),et.copy(R.scissor),ct=R.scissorTest}else k.copy(J).multiplyScalar(q).floor(),et.copy(Mt).multiplyScalar(q).floor(),ct=Tt;if(ot!==0&&(K=on),zt.bindFramebuffer(H.FRAMEBUFFER,K)&&lt&&zt.drawBuffers(R,K),zt.viewport(k),zt.scissor(et),zt.setScissorTest(ct),Ct){const It=kt.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+Y,It.__webglTexture,ot)}else if(Pt){const It=Y;for(let te=0;te<R.textures.length;te++){const ae=kt.get(R.textures[te]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+te,ae.__webglTexture,ot,It)}}else if(R!==null&&ot!==0){const It=kt.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,It.__webglTexture,ot)}w=-1},this.readRenderTargetPixels=function(R,Y,ot,lt,K,Ct,Pt,Gt=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=kt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Pt!==void 0&&(It=It[Pt]),It){zt.bindFramebuffer(H.FRAMEBUFFER,It);try{const te=R.textures[Gt],ae=te.format,Zt=te.type;if(!ne.textureFormatReadable(ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ne.textureTypeReadable(Zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=R.width-lt&&ot>=0&&ot<=R.height-K&&(R.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Gt),H.readPixels(Y,ot,lt,K,z.convert(ae),z.convert(Zt),Ct))}finally{const te=X!==null?kt.get(X).__webglFramebuffer:null;zt.bindFramebuffer(H.FRAMEBUFFER,te)}}},this.readRenderTargetPixelsAsync=async function(R,Y,ot,lt,K,Ct,Pt,Gt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=kt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Pt!==void 0&&(It=It[Pt]),It)if(Y>=0&&Y<=R.width-lt&&ot>=0&&ot<=R.height-K){zt.bindFramebuffer(H.FRAMEBUFFER,It);const te=R.textures[Gt],ae=te.format,Zt=te.type;if(!ne.textureFormatReadable(ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ne.textureTypeReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const pe=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,pe),H.bufferData(H.PIXEL_PACK_BUFFER,Ct.byteLength,H.STREAM_READ),R.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Gt),H.readPixels(Y,ot,lt,K,z.convert(ae),z.convert(Zt),0);const Ae=X!==null?kt.get(X).__webglFramebuffer:null;zt.bindFramebuffer(H.FRAMEBUFFER,Ae);const Ye=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await JM(H,Ye,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,pe),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Ct),H.deleteBuffer(pe),H.deleteSync(Ye),Ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Y=null,ot=0){const lt=Math.pow(2,-ot),K=Math.floor(R.image.width*lt),Ct=Math.floor(R.image.height*lt),Pt=Y!==null?Y.x:0,Gt=Y!==null?Y.y:0;le.setTexture2D(R,0),H.copyTexSubImage2D(H.TEXTURE_2D,ot,0,0,Pt,Gt,K,Ct),zt.unbindTexture()};const el=H.createFramebuffer(),nl=H.createFramebuffer();this.copyTextureToTexture=function(R,Y,ot=null,lt=null,K=0,Ct=null){Ct===null&&(K!==0?(Wo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ct=K,K=0):Ct=0);let Pt,Gt,It,te,ae,Zt,pe,Ae,Ye;const Pe=R.isCompressedTexture?R.mipmaps[Ct]:R.image;if(ot!==null)Pt=ot.max.x-ot.min.x,Gt=ot.max.y-ot.min.y,It=ot.isBox3?ot.max.z-ot.min.z:1,te=ot.min.x,ae=ot.min.y,Zt=ot.isBox3?ot.min.z:0;else{const Rn=Math.pow(2,-K);Pt=Math.floor(Pe.width*Rn),Gt=Math.floor(Pe.height*Rn),R.isDataArrayTexture?It=Pe.depth:R.isData3DTexture?It=Math.floor(Pe.depth*Rn):It=1,te=0,ae=0,Zt=0}lt!==null?(pe=lt.x,Ae=lt.y,Ye=lt.z):(pe=0,Ae=0,Ye=0);const me=z.convert(Y.format),$t=z.convert(Y.type);let We;Y.isData3DTexture?(le.setTexture3D(Y,0),We=H.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(le.setTexture2DArray(Y,0),We=H.TEXTURE_2D_ARRAY):(le.setTexture2D(Y,0),We=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,Y.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,Y.unpackAlignment);const Se=H.getParameter(H.UNPACK_ROW_LENGTH),An=H.getParameter(H.UNPACK_IMAGE_HEIGHT),ci=H.getParameter(H.UNPACK_SKIP_PIXELS),Nn=H.getParameter(H.UNPACK_SKIP_ROWS),gn=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Pe.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Pe.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,te),H.pixelStorei(H.UNPACK_SKIP_ROWS,ae),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Zt);const He=R.isDataArrayTexture||R.isData3DTexture,On=Y.isDataArrayTexture||Y.isData3DTexture;if(R.isDepthTexture){const Rn=kt.get(R),$e=kt.get(Y),Mn=kt.get(Rn.__renderTarget),Dr=kt.get($e.__renderTarget);zt.bindFramebuffer(H.READ_FRAMEBUFFER,Mn.__webglFramebuffer),zt.bindFramebuffer(H.DRAW_FRAMEBUFFER,Dr.__webglFramebuffer);for(let zn=0;zn<It;zn++)He&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,kt.get(R).__webglTexture,K,Zt+zn),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,kt.get(Y).__webglTexture,Ct,Ye+zn)),H.blitFramebuffer(te,ae,Pt,Gt,pe,Ae,Pt,Gt,H.DEPTH_BUFFER_BIT,H.NEAREST);zt.bindFramebuffer(H.READ_FRAMEBUFFER,null),zt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(K!==0||R.isRenderTargetTexture||kt.has(R)){const Rn=kt.get(R),$e=kt.get(Y);zt.bindFramebuffer(H.READ_FRAMEBUFFER,el),zt.bindFramebuffer(H.DRAW_FRAMEBUFFER,nl);for(let Mn=0;Mn<It;Mn++)He?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Rn.__webglTexture,K,Zt+Mn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Rn.__webglTexture,K),On?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,$e.__webglTexture,Ct,Ye+Mn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,$e.__webglTexture,Ct),K!==0?H.blitFramebuffer(te,ae,Pt,Gt,pe,Ae,Pt,Gt,H.COLOR_BUFFER_BIT,H.NEAREST):On?H.copyTexSubImage3D(We,Ct,pe,Ae,Ye+Mn,te,ae,Pt,Gt):H.copyTexSubImage2D(We,Ct,pe,Ae,te,ae,Pt,Gt);zt.bindFramebuffer(H.READ_FRAMEBUFFER,null),zt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else On?R.isDataTexture||R.isData3DTexture?H.texSubImage3D(We,Ct,pe,Ae,Ye,Pt,Gt,It,me,$t,Pe.data):Y.isCompressedArrayTexture?H.compressedTexSubImage3D(We,Ct,pe,Ae,Ye,Pt,Gt,It,me,Pe.data):H.texSubImage3D(We,Ct,pe,Ae,Ye,Pt,Gt,It,me,$t,Pe):R.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Ct,pe,Ae,Pt,Gt,me,$t,Pe.data):R.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Ct,pe,Ae,Pe.width,Pe.height,me,Pe.data):H.texSubImage2D(H.TEXTURE_2D,Ct,pe,Ae,Pt,Gt,me,$t,Pe);H.pixelStorei(H.UNPACK_ROW_LENGTH,Se),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,An),H.pixelStorei(H.UNPACK_SKIP_PIXELS,ci),H.pixelStorei(H.UNPACK_SKIP_ROWS,Nn),H.pixelStorei(H.UNPACK_SKIP_IMAGES,gn),Ct===0&&Y.generateMipmaps&&H.generateMipmap(We),zt.unbindTexture()},this.initRenderTarget=function(R){kt.get(R).__webglFramebuffer===void 0&&le.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?le.setTextureCube(R,0):R.isData3DTexture?le.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?le.setTexture2DArray(R,0):le.setTexture2D(R,0),zt.unbindTexture()},this.resetState=function(){F=0,V=0,X=null,zt.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ce._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ce._getUnpackColorSpace()}}var vR=Object.defineProperty,xR=(s,t,i)=>t in s?vR(s,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):s[t]=i,SR=(s,t,i)=>(xR(s,t+"",i),i);class yR{constructor(){SR(this,"_listeners")}addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(i)===-1&&a[t].push(i)}hasEventListener(t,i){if(this._listeners===void 0)return!1;const a=this._listeners;return a[t]!==void 0&&a[t].indexOf(i)!==-1}removeEventListener(t,i){if(this._listeners===void 0)return;const l=this._listeners[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const a=this._listeners[t.type];if(a!==void 0){t.target=this;const l=a.slice(0);for(let u=0,f=l.length;u<f;u++)l[u].call(this,t);t.target=null}}}var MR=Object.defineProperty,ER=(s,t,i)=>t in s?MR(s,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):s[t]=i,ee=(s,t,i)=>(ER(s,typeof t!="symbol"?t+"":t,i),i);const Lu=new h0,Lv=new Va,TR=Math.cos(70*(Math.PI/180)),Nv=(s,t)=>(s%t+t)%t;class bR extends yR{constructor(t,i){super(),ee(this,"object"),ee(this,"domElement"),ee(this,"enabled",!0),ee(this,"target",new $),ee(this,"minDistance",0),ee(this,"maxDistance",1/0),ee(this,"minZoom",0),ee(this,"maxZoom",1/0),ee(this,"minPolarAngle",0),ee(this,"maxPolarAngle",Math.PI),ee(this,"minAzimuthAngle",-1/0),ee(this,"maxAzimuthAngle",1/0),ee(this,"enableDamping",!1),ee(this,"dampingFactor",.05),ee(this,"enableZoom",!0),ee(this,"zoomSpeed",1),ee(this,"enableRotate",!0),ee(this,"rotateSpeed",1),ee(this,"enablePan",!0),ee(this,"panSpeed",1),ee(this,"screenSpacePanning",!0),ee(this,"keyPanSpeed",7),ee(this,"zoomToCursor",!1),ee(this,"autoRotate",!1),ee(this,"autoRotateSpeed",2),ee(this,"reverseOrbit",!1),ee(this,"reverseHorizontalOrbit",!1),ee(this,"reverseVerticalOrbit",!1),ee(this,"keys",{LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"}),ee(this,"mouseButtons",{LEFT:ls.ROTATE,MIDDLE:ls.DOLLY,RIGHT:ls.PAN}),ee(this,"touches",{ONE:us.ROTATE,TWO:us.DOLLY_PAN}),ee(this,"target0"),ee(this,"position0"),ee(this,"zoom0"),ee(this,"_domElementKeyEvents",null),ee(this,"getPolarAngle"),ee(this,"getAzimuthalAngle"),ee(this,"setPolarAngle"),ee(this,"setAzimuthalAngle"),ee(this,"getDistance"),ee(this,"getZoomScale"),ee(this,"listenToKeyEvents"),ee(this,"stopListenToKeyEvents"),ee(this,"saveState"),ee(this,"reset"),ee(this,"update"),ee(this,"connect"),ee(this,"dispose"),ee(this,"dollyIn"),ee(this,"dollyOut"),ee(this,"getScale"),ee(this,"setScale"),this.object=t,this.domElement=i,this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=()=>g.phi,this.getAzimuthalAngle=()=>g.theta,this.setPolarAngle=z=>{let at=Nv(z,2*Math.PI),wt=g.phi;wt<0&&(wt+=2*Math.PI),at<0&&(at+=2*Math.PI);let G=Math.abs(at-wt);2*Math.PI-G<G&&(at<wt?at+=2*Math.PI:wt+=2*Math.PI),_.phi=at-wt,a.update()},this.setAzimuthalAngle=z=>{let at=Nv(z,2*Math.PI),wt=g.theta;wt<0&&(wt+=2*Math.PI),at<0&&(at+=2*Math.PI);let G=Math.abs(at-wt);2*Math.PI-G<G&&(at<wt?at+=2*Math.PI:wt+=2*Math.PI),_.theta=at-wt,a.update()},this.getDistance=()=>a.object.position.distanceTo(a.target),this.listenToKeyEvents=z=>{z.addEventListener("keydown",ut),this._domElementKeyEvents=z},this.stopListenToKeyEvents=()=>{this._domElementKeyEvents.removeEventListener("keydown",ut),this._domElementKeyEvents=null},this.saveState=()=>{a.target0.copy(a.target),a.position0.copy(a.object.position),a.zoom0=a.object.zoom},this.reset=()=>{a.target.copy(a.target0),a.object.position.copy(a.position0),a.object.zoom=a.zoom0,a.object.updateProjectionMatrix(),a.dispatchEvent(l),a.update(),m=d.NONE},this.update=(()=>{const z=new $,at=new $(0,1,0),wt=new Tr().setFromUnitVectors(t.up,at),G=wt.clone().invert(),yt=new $,Rt=new Tr,Ot=2*Math.PI;return function(){const gt=a.object.position;wt.setFromUnitVectors(t.up,at),G.copy(wt).invert(),z.copy(gt).sub(a.target),z.applyQuaternion(wt),g.setFromVector3(z),a.autoRotate&&m===d.NONE&&_t(et()),a.enableDamping?(g.theta+=_.theta*a.dampingFactor,g.phi+=_.phi*a.dampingFactor):(g.theta+=_.theta,g.phi+=_.phi);let Ft=a.minAzimuthAngle,Kt=a.maxAzimuthAngle;isFinite(Ft)&&isFinite(Kt)&&(Ft<-Math.PI?Ft+=Ot:Ft>Math.PI&&(Ft-=Ot),Kt<-Math.PI?Kt+=Ot:Kt>Math.PI&&(Kt-=Ot),Ft<=Kt?g.theta=Math.max(Ft,Math.min(Kt,g.theta)):g.theta=g.theta>(Ft+Kt)/2?Math.max(Ft,g.theta):Math.min(Kt,g.theta)),g.phi=Math.max(a.minPolarAngle,Math.min(a.maxPolarAngle,g.phi)),g.makeSafe(),a.enableDamping===!0?a.target.addScaledVector(M,a.dampingFactor):a.target.add(M),a.zoomToCursor&&w||a.object.isOrthographicCamera?g.radius=Tt(g.radius):g.radius=Tt(g.radius*x),z.setFromSpherical(g),z.applyQuaternion(G),gt.copy(a.target).add(z),a.object.matrixAutoUpdate||a.object.updateMatrix(),a.object.lookAt(a.target),a.enableDamping===!0?(_.theta*=1-a.dampingFactor,_.phi*=1-a.dampingFactor,M.multiplyScalar(1-a.dampingFactor)):(_.set(0,0,0),M.set(0,0,0));let Te=!1;if(a.zoomToCursor&&w){let _e=null;if(a.object instanceof Bn&&a.object.isPerspectiveCamera){const yn=z.length();_e=Tt(yn*x);const qe=yn-_e;a.object.position.addScaledVector(V,qe),a.object.updateMatrixWorld()}else if(a.object.isOrthographicCamera){const yn=new $(X.x,X.y,0);yn.unproject(a.object),a.object.zoom=Math.max(a.minZoom,Math.min(a.maxZoom,a.object.zoom/x)),a.object.updateProjectionMatrix(),Te=!0;const qe=new $(X.x,X.y,0);qe.unproject(a.object),a.object.position.sub(qe).add(yn),a.object.updateMatrixWorld(),_e=z.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),a.zoomToCursor=!1;_e!==null&&(a.screenSpacePanning?a.target.set(0,0,-1).transformDirection(a.object.matrix).multiplyScalar(_e).add(a.object.position):(Lu.origin.copy(a.object.position),Lu.direction.set(0,0,-1).transformDirection(a.object.matrix),Math.abs(a.object.up.dot(Lu.direction))<TR?t.lookAt(a.target):(Lv.setFromNormalAndCoplanarPoint(a.object.up,a.target),Lu.intersectPlane(Lv,a.target))))}else a.object instanceof Fo&&a.object.isOrthographicCamera&&(Te=x!==1,Te&&(a.object.zoom=Math.max(a.minZoom,Math.min(a.maxZoom,a.object.zoom/x)),a.object.updateProjectionMatrix()));return x=1,w=!1,Te||yt.distanceToSquared(a.object.position)>p||8*(1-Rt.dot(a.object.quaternion))>p?(a.dispatchEvent(l),yt.copy(a.object.position),Rt.copy(a.object.quaternion),Te=!1,!0):!1}})(),this.connect=z=>{a.domElement=z,a.domElement.style.touchAction="none",a.domElement.addEventListener("contextmenu",Wt),a.domElement.addEventListener("pointerdown",Ve),a.domElement.addEventListener("pointercancel",T),a.domElement.addEventListener("wheel",mt)},this.dispose=()=>{var z,at,wt,G,yt,Rt;a.domElement&&(a.domElement.style.touchAction="auto"),(z=a.domElement)==null||z.removeEventListener("contextmenu",Wt),(at=a.domElement)==null||at.removeEventListener("pointerdown",Ve),(wt=a.domElement)==null||wt.removeEventListener("pointercancel",T),(G=a.domElement)==null||G.removeEventListener("wheel",mt),(yt=a.domElement)==null||yt.ownerDocument.removeEventListener("pointermove",O),(Rt=a.domElement)==null||Rt.ownerDocument.removeEventListener("pointerup",T),a._domElementKeyEvents!==null&&a._domElementKeyEvents.removeEventListener("keydown",ut)};const a=this,l={type:"change"},u={type:"start"},f={type:"end"},d={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let m=d.NONE;const p=1e-6,g=new sv,_=new sv;let x=1;const M=new $,E=new ue,C=new ue,S=new ue,v=new ue,U=new ue,L=new ue,D=new ue,P=new ue,F=new ue,V=new $,X=new ue;let w=!1;const A=[],k={};function et(){return 2*Math.PI/60/60*a.autoRotateSpeed}function ct(){return Math.pow(.95,a.zoomSpeed)}function _t(z){a.reverseOrbit||a.reverseHorizontalOrbit?_.theta+=z:_.theta-=z}function ft(z){a.reverseOrbit||a.reverseVerticalOrbit?_.phi+=z:_.phi-=z}const B=(()=>{const z=new $;return function(wt,G){z.setFromMatrixColumn(G,0),z.multiplyScalar(-wt),M.add(z)}})(),Z=(()=>{const z=new $;return function(wt,G){a.screenSpacePanning===!0?z.setFromMatrixColumn(G,1):(z.setFromMatrixColumn(G,0),z.crossVectors(a.object.up,z)),z.multiplyScalar(wt),M.add(z)}})(),q=(()=>{const z=new $;return function(wt,G){const yt=a.domElement;if(yt&&a.object instanceof Bn&&a.object.isPerspectiveCamera){const Rt=a.object.position;z.copy(Rt).sub(a.target);let Ot=z.length();Ot*=Math.tan(a.object.fov/2*Math.PI/180),B(2*wt*Ot/yt.clientHeight,a.object.matrix),Z(2*G*Ot/yt.clientHeight,a.object.matrix)}else yt&&a.object instanceof Fo&&a.object.isOrthographicCamera?(B(wt*(a.object.right-a.object.left)/a.object.zoom/yt.clientWidth,a.object.matrix),Z(G*(a.object.top-a.object.bottom)/a.object.zoom/yt.clientHeight,a.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),a.enablePan=!1)}})();function Et(z){a.object instanceof Bn&&a.object.isPerspectiveCamera||a.object instanceof Fo&&a.object.isOrthographicCamera?x=z:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),a.enableZoom=!1)}function N(z){Et(x/z)}function J(z){Et(x*z)}function Mt(z){if(!a.zoomToCursor||!a.domElement)return;w=!0;const at=a.domElement.getBoundingClientRect(),wt=z.clientX-at.left,G=z.clientY-at.top,yt=at.width,Rt=at.height;X.x=wt/yt*2-1,X.y=-(G/Rt)*2+1,V.set(X.x,X.y,1).unproject(a.object).sub(a.object.position).normalize()}function Tt(z){return Math.max(a.minDistance,Math.min(a.maxDistance,z))}function Lt(z){E.set(z.clientX,z.clientY)}function Vt(z){Mt(z),D.set(z.clientX,z.clientY)}function nt(z){v.set(z.clientX,z.clientY)}function vt(z){C.set(z.clientX,z.clientY),S.subVectors(C,E).multiplyScalar(a.rotateSpeed);const at=a.domElement;at&&(_t(2*Math.PI*S.x/at.clientHeight),ft(2*Math.PI*S.y/at.clientHeight)),E.copy(C),a.update()}function Dt(z){P.set(z.clientX,z.clientY),F.subVectors(P,D),F.y>0?N(ct()):F.y<0&&J(ct()),D.copy(P),a.update()}function Jt(z){U.set(z.clientX,z.clientY),L.subVectors(U,v).multiplyScalar(a.panSpeed),q(L.x,L.y),v.copy(U),a.update()}function qt(z){Mt(z),z.deltaY<0?J(ct()):z.deltaY>0&&N(ct()),a.update()}function fe(z){let at=!1;switch(z.code){case a.keys.UP:q(0,a.keyPanSpeed),at=!0;break;case a.keys.BOTTOM:q(0,-a.keyPanSpeed),at=!0;break;case a.keys.LEFT:q(a.keyPanSpeed,0),at=!0;break;case a.keys.RIGHT:q(-a.keyPanSpeed,0),at=!0;break}at&&(z.preventDefault(),a.update())}function Ze(){if(A.length==1)E.set(A[0].pageX,A[0].pageY);else{const z=.5*(A[0].pageX+A[1].pageX),at=.5*(A[0].pageY+A[1].pageY);E.set(z,at)}}function H(){if(A.length==1)v.set(A[0].pageX,A[0].pageY);else{const z=.5*(A[0].pageX+A[1].pageX),at=.5*(A[0].pageY+A[1].pageY);v.set(z,at)}}function we(){const z=A[0].pageX-A[1].pageX,at=A[0].pageY-A[1].pageY,wt=Math.sqrt(z*z+at*at);D.set(0,wt)}function oe(){a.enableZoom&&we(),a.enablePan&&H()}function ne(){a.enableZoom&&we(),a.enableRotate&&Ze()}function zt(z){if(A.length==1)C.set(z.pageX,z.pageY);else{const wt=jt(z),G=.5*(z.pageX+wt.x),yt=.5*(z.pageY+wt.y);C.set(G,yt)}S.subVectors(C,E).multiplyScalar(a.rotateSpeed);const at=a.domElement;at&&(_t(2*Math.PI*S.x/at.clientHeight),ft(2*Math.PI*S.y/at.clientHeight)),E.copy(C)}function Le(z){if(A.length==1)U.set(z.pageX,z.pageY);else{const at=jt(z),wt=.5*(z.pageX+at.x),G=.5*(z.pageY+at.y);U.set(wt,G)}L.subVectors(U,v).multiplyScalar(a.panSpeed),q(L.x,L.y),v.copy(U)}function kt(z){const at=jt(z),wt=z.pageX-at.x,G=z.pageY-at.y,yt=Math.sqrt(wt*wt+G*G);P.set(0,yt),F.set(0,Math.pow(P.y/D.y,a.zoomSpeed)),N(F.y),D.copy(P)}function le(z){a.enableZoom&&kt(z),a.enablePan&&Le(z)}function Xe(z){a.enableZoom&&kt(z),a.enableRotate&&zt(z)}function Ve(z){var at,wt;a.enabled!==!1&&(A.length===0&&((at=a.domElement)==null||at.ownerDocument.addEventListener("pointermove",O),(wt=a.domElement)==null||wt.ownerDocument.addEventListener("pointerup",T)),Yt(z),z.pointerType==="touch"?Ht(z):it(z))}function O(z){a.enabled!==!1&&(z.pointerType==="touch"?Ut(z):ht(z))}function T(z){var at,wt,G;bt(z),A.length===0&&((at=a.domElement)==null||at.releasePointerCapture(z.pointerId),(wt=a.domElement)==null||wt.ownerDocument.removeEventListener("pointermove",O),(G=a.domElement)==null||G.ownerDocument.removeEventListener("pointerup",T)),a.dispatchEvent(f),m=d.NONE}function it(z){let at;switch(z.button){case 0:at=a.mouseButtons.LEFT;break;case 1:at=a.mouseButtons.MIDDLE;break;case 2:at=a.mouseButtons.RIGHT;break;default:at=-1}switch(at){case ls.DOLLY:if(a.enableZoom===!1)return;Vt(z),m=d.DOLLY;break;case ls.ROTATE:if(z.ctrlKey||z.metaKey||z.shiftKey){if(a.enablePan===!1)return;nt(z),m=d.PAN}else{if(a.enableRotate===!1)return;Lt(z),m=d.ROTATE}break;case ls.PAN:if(z.ctrlKey||z.metaKey||z.shiftKey){if(a.enableRotate===!1)return;Lt(z),m=d.ROTATE}else{if(a.enablePan===!1)return;nt(z),m=d.PAN}break;default:m=d.NONE}m!==d.NONE&&a.dispatchEvent(u)}function ht(z){if(a.enabled!==!1)switch(m){case d.ROTATE:if(a.enableRotate===!1)return;vt(z);break;case d.DOLLY:if(a.enableZoom===!1)return;Dt(z);break;case d.PAN:if(a.enablePan===!1)return;Jt(z);break}}function mt(z){a.enabled===!1||a.enableZoom===!1||m!==d.NONE&&m!==d.ROTATE||(z.preventDefault(),a.dispatchEvent(u),qt(z),a.dispatchEvent(f))}function ut(z){a.enabled===!1||a.enablePan===!1||fe(z)}function Ht(z){switch(Nt(z),A.length){case 1:switch(a.touches.ONE){case us.ROTATE:if(a.enableRotate===!1)return;Ze(),m=d.TOUCH_ROTATE;break;case us.PAN:if(a.enablePan===!1)return;H(),m=d.TOUCH_PAN;break;default:m=d.NONE}break;case 2:switch(a.touches.TWO){case us.DOLLY_PAN:if(a.enableZoom===!1&&a.enablePan===!1)return;oe(),m=d.TOUCH_DOLLY_PAN;break;case us.DOLLY_ROTATE:if(a.enableZoom===!1&&a.enableRotate===!1)return;ne(),m=d.TOUCH_DOLLY_ROTATE;break;default:m=d.NONE}break;default:m=d.NONE}m!==d.NONE&&a.dispatchEvent(u)}function Ut(z){switch(Nt(z),m){case d.TOUCH_ROTATE:if(a.enableRotate===!1)return;zt(z),a.update();break;case d.TOUCH_PAN:if(a.enablePan===!1)return;Le(z),a.update();break;case d.TOUCH_DOLLY_PAN:if(a.enableZoom===!1&&a.enablePan===!1)return;le(z),a.update();break;case d.TOUCH_DOLLY_ROTATE:if(a.enableZoom===!1&&a.enableRotate===!1)return;Xe(z),a.update();break;default:m=d.NONE}}function Wt(z){a.enabled!==!1&&z.preventDefault()}function Yt(z){A.push(z)}function bt(z){delete k[z.pointerId];for(let at=0;at<A.length;at++)if(A[at].pointerId==z.pointerId){A.splice(at,1);return}}function Nt(z){let at=k[z.pointerId];at===void 0&&(at=new ue,k[z.pointerId]=at),at.set(z.pageX,z.pageY)}function jt(z){const at=z.pointerId===A[0].pointerId?A[1]:A[0];return k[at.pointerId]}this.dollyIn=(z=ct())=>{J(z),a.update()},this.dollyOut=(z=ct())=>{N(z),a.update()},this.getScale=()=>x,this.setScale=z=>{Et(z),a.update()},this.getZoomScale=()=>ct(),i!==void 0&&this.connect(i),this.update()}}function AR(){const s=St.useRef(),t=kv();return St.useEffect(()=>{const i=new EE,a=new Bn(75,window.innerWidth/window.innerHeight,.1,1e3),l=new _R({canvas:s.current,antialias:!0});l.setSize(window.innerWidth,window.innerHeight),l.setPixelRatio(window.devicePixelRatio),l.setClearColor(723723,1);const u=new NE(16777215,2);u.position.set(2,2,5),i.add(u);const f=new Wd(1,2),d=new RE({color:3381759,roughness:.4,metalness:.6}),m=new Di(f,d);i.add(m),new bR(a,l.domElement),a.position.z=3;const p=()=>{m.rotation.y+=.01,m.rotation.x+=.005,l.render(i,a),requestAnimationFrame(p)};p();const g=()=>{a.aspect=window.innerWidth/window.innerHeight,a.updateProjectionMatrix(),l.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",g);const _=()=>{window.innerHeight+window.scrollY>=document.body.offsetHeight-10&&t("/main")};return window.addEventListener("scroll",_),()=>{window.removeEventListener("resize",g),window.removeEventListener("scroll",_),l.dispose()}},[t]),ce.jsxs("div",{className:"intro-container",children:[ce.jsx("canvas",{ref:s}),ce.jsx("h1",{className:"intro-title",children:"OK"})]})}function RR(){return ce.jsxs("div",{className:"main-container",children:[ce.jsx("video",{className:"main-video",src:"/assets/ok-main.mp4",autoPlay:!0,loop:!0,muted:!0}),ce.jsxs("nav",{className:"nav",children:[ce.jsx(Ga,{to:"/system-before",children:"SYSTEM BEFORE"}),ce.jsx(Ga,{to:"/design-guide",children:"DESIGN GUIDE"}),ce.jsx(Ga,{to:"/tablet",children:"TABLET"}),ce.jsx(Ga,{to:"/smart-watch",children:"SMART WATCH"}),ce.jsx(Ga,{to:"/kiosk",children:"KIOSK"}),ce.jsx(Ga,{to:"/ok-e",children:"OK-E"})]})]})}function CR(){return ce.jsx("div",{className:"page-container",children:ce.jsx("h1",{children:"System Before Page"})})}function wR(){return ce.jsx("div",{className:"page-container",children:ce.jsx("h1",{children:"Design Guide Page"})})}function DR(){return ce.jsx("div",{className:"page-container",children:ce.jsx("h1",{children:"Tablet Page"})})}function UR(){return ce.jsx("div",{className:"page-container",children:ce.jsx("h1",{children:"Smart Watch Page"})})}function LR(){return ce.jsx("div",{className:"page-container",children:ce.jsx("h1",{children:"Kiosk Page"})})}function NR(){return ce.jsx("div",{className:"page-container",children:ce.jsx("h1",{children:"OK-E Page"})})}function OR(){return ce.jsx($y,{children:ce.jsxs(Dy,{children:[ce.jsx(ia,{path:"/",element:ce.jsx(AR,{})}),ce.jsx(ia,{path:"/main",element:ce.jsx(RR,{})}),ce.jsx(ia,{path:"/system-before",element:ce.jsx(CR,{})}),ce.jsx(ia,{path:"/design-guide",element:ce.jsx(wR,{})}),ce.jsx(ia,{path:"/tablet",element:ce.jsx(DR,{})}),ce.jsx(ia,{path:"/smart-watch",element:ce.jsx(UR,{})}),ce.jsx(ia,{path:"/kiosk",element:ce.jsx(LR,{})}),ce.jsx(ia,{path:"/ok-e",element:ce.jsx(NR,{})})]})})}HS.createRoot(document.getElementById("root")).render(ce.jsx(St.StrictMode,{children:ce.jsx(OR,{})}));
