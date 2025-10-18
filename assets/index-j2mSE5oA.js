(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&a(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(o){if(o.ep)return;o.ep=!0;const u=n(o);fetch(o.href,u)}})();var Rh={exports:{}},Wo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ov;function oE(){if(ov)return Wo;ov=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(a,o,u){var f=null;if(u!==void 0&&(f=""+u),o.key!==void 0&&(f=""+o.key),"key"in o){u={};for(var h in o)h!=="key"&&(u[h]=o[h])}else u=o;return o=u.ref,{$$typeof:r,type:a,key:f,ref:o!==void 0?o:null,props:u}}return Wo.Fragment=e,Wo.jsx=n,Wo.jsxs=n,Wo}var lv;function lE(){return lv||(lv=1,Rh.exports=oE()),Rh.exports}var ke=lE(),wh={exports:{}},pt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uv;function uE(){if(uv)return pt;uv=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.iterator;function S(N){return N===null||typeof N!="object"?null:(N=_&&N[_]||N["@@iterator"],typeof N=="function"?N:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,T={};function x(N,Q,ve){this.props=N,this.context=Q,this.refs=T,this.updater=ve||y}x.prototype.isReactComponent={},x.prototype.setState=function(N,Q){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,Q,"setState")},x.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function v(){}v.prototype=x.prototype;function D(N,Q,ve){this.props=N,this.context=Q,this.refs=T,this.updater=ve||y}var L=D.prototype=new v;L.constructor=D,E(L,x.prototype),L.isPureReactComponent=!0;var C=Array.isArray,P={H:null,A:null,T:null,S:null,V:null},F=Object.prototype.hasOwnProperty;function I(N,Q,ve,be,Ne,Ve){return ve=Ve.ref,{$$typeof:r,type:N,key:Q,ref:ve!==void 0?ve:null,props:Ve}}function X(N,Q){return I(N.type,Q,void 0,void 0,void 0,N.props)}function U(N){return typeof N=="object"&&N!==null&&N.$$typeof===r}function R(N){var Q={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(ve){return Q[ve]})}var k=/\/+/g;function J(N,Q){return typeof N=="object"&&N!==null&&N.key!=null?R(""+N.key):Q.toString(36)}function ue(){}function me(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(ue,ue):(N.status="pending",N.then(function(Q){N.status==="pending"&&(N.status="fulfilled",N.value=Q)},function(Q){N.status==="pending"&&(N.status="rejected",N.reason=Q)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function he(N,Q,ve,be,Ne){var Ve=typeof N;(Ve==="undefined"||Ve==="boolean")&&(N=null);var ne=!1;if(N===null)ne=!0;else switch(Ve){case"bigint":case"string":case"number":ne=!0;break;case"object":switch(N.$$typeof){case r:case e:ne=!0;break;case g:return ne=N._init,he(ne(N._payload),Q,ve,be,Ne)}}if(ne)return Ne=Ne(N),ne=be===""?"."+J(N,0):be,C(Ne)?(ve="",ne!=null&&(ve=ne.replace(k,"$&/")+"/"),he(Ne,Q,ve,"",function(et){return et})):Ne!=null&&(U(Ne)&&(Ne=X(Ne,ve+(Ne.key==null||N&&N.key===Ne.key?"":(""+Ne.key).replace(k,"$&/")+"/")+ne)),Q.push(Ne)),1;ne=0;var ye=be===""?".":be+":";if(C(N))for(var Ue=0;Ue<N.length;Ue++)be=N[Ue],Ve=ye+J(be,Ue),ne+=he(be,Q,ve,Ve,Ne);else if(Ue=S(N),typeof Ue=="function")for(N=Ue.call(N),Ue=0;!(be=N.next()).done;)be=be.value,Ve=ye+J(be,Ue++),ne+=he(be,Q,ve,Ve,Ne);else if(Ve==="object"){if(typeof N.then=="function")return he(me(N),Q,ve,be,Ne);throw Q=String(N),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return ne}function B(N,Q,ve){if(N==null)return N;var be=[],Ne=0;return he(N,be,"","",function(Ve){return Q.call(ve,Ve,Ne++)}),be}function Z(N){if(N._status===-1){var Q=N._result;Q=Q(),Q.then(function(ve){(N._status===0||N._status===-1)&&(N._status=1,N._result=ve)},function(ve){(N._status===0||N._status===-1)&&(N._status=2,N._result=ve)}),N._status===-1&&(N._status=0,N._result=Q)}if(N._status===1)return N._result.default;throw N._result}var q=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)};function Te(){}return pt.Children={map:B,forEach:function(N,Q,ve){B(N,function(){Q.apply(this,arguments)},ve)},count:function(N){var Q=0;return B(N,function(){Q++}),Q},toArray:function(N){return B(N,function(Q){return Q})||[]},only:function(N){if(!U(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},pt.Component=x,pt.Fragment=n,pt.Profiler=o,pt.PureComponent=D,pt.StrictMode=a,pt.Suspense=m,pt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,pt.__COMPILER_RUNTIME={__proto__:null,c:function(N){return P.H.useMemoCache(N)}},pt.cache=function(N){return function(){return N.apply(null,arguments)}},pt.cloneElement=function(N,Q,ve){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var be=E({},N.props),Ne=N.key,Ve=void 0;if(Q!=null)for(ne in Q.ref!==void 0&&(Ve=void 0),Q.key!==void 0&&(Ne=""+Q.key),Q)!F.call(Q,ne)||ne==="key"||ne==="__self"||ne==="__source"||ne==="ref"&&Q.ref===void 0||(be[ne]=Q[ne]);var ne=arguments.length-2;if(ne===1)be.children=ve;else if(1<ne){for(var ye=Array(ne),Ue=0;Ue<ne;Ue++)ye[Ue]=arguments[Ue+2];be.children=ye}return I(N.type,Ne,void 0,void 0,Ve,be)},pt.createContext=function(N){return N={$$typeof:f,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:u,_context:N},N},pt.createElement=function(N,Q,ve){var be,Ne={},Ve=null;if(Q!=null)for(be in Q.key!==void 0&&(Ve=""+Q.key),Q)F.call(Q,be)&&be!=="key"&&be!=="__self"&&be!=="__source"&&(Ne[be]=Q[be]);var ne=arguments.length-2;if(ne===1)Ne.children=ve;else if(1<ne){for(var ye=Array(ne),Ue=0;Ue<ne;Ue++)ye[Ue]=arguments[Ue+2];Ne.children=ye}if(N&&N.defaultProps)for(be in ne=N.defaultProps,ne)Ne[be]===void 0&&(Ne[be]=ne[be]);return I(N,Ve,void 0,void 0,null,Ne)},pt.createRef=function(){return{current:null}},pt.forwardRef=function(N){return{$$typeof:h,render:N}},pt.isValidElement=U,pt.lazy=function(N){return{$$typeof:g,_payload:{_status:-1,_result:N},_init:Z}},pt.memo=function(N,Q){return{$$typeof:d,type:N,compare:Q===void 0?null:Q}},pt.startTransition=function(N){var Q=P.T,ve={};P.T=ve;try{var be=N(),Ne=P.S;Ne!==null&&Ne(ve,be),typeof be=="object"&&be!==null&&typeof be.then=="function"&&be.then(Te,q)}catch(Ve){q(Ve)}finally{P.T=Q}},pt.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},pt.use=function(N){return P.H.use(N)},pt.useActionState=function(N,Q,ve){return P.H.useActionState(N,Q,ve)},pt.useCallback=function(N,Q){return P.H.useCallback(N,Q)},pt.useContext=function(N){return P.H.useContext(N)},pt.useDebugValue=function(){},pt.useDeferredValue=function(N,Q){return P.H.useDeferredValue(N,Q)},pt.useEffect=function(N,Q,ve){var be=P.H;if(typeof ve=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return be.useEffect(N,Q)},pt.useId=function(){return P.H.useId()},pt.useImperativeHandle=function(N,Q,ve){return P.H.useImperativeHandle(N,Q,ve)},pt.useInsertionEffect=function(N,Q){return P.H.useInsertionEffect(N,Q)},pt.useLayoutEffect=function(N,Q){return P.H.useLayoutEffect(N,Q)},pt.useMemo=function(N,Q){return P.H.useMemo(N,Q)},pt.useOptimistic=function(N,Q){return P.H.useOptimistic(N,Q)},pt.useReducer=function(N,Q,ve){return P.H.useReducer(N,Q,ve)},pt.useRef=function(N){return P.H.useRef(N)},pt.useState=function(N){return P.H.useState(N)},pt.useSyncExternalStore=function(N,Q,ve){return P.H.useSyncExternalStore(N,Q,ve)},pt.useTransition=function(){return P.H.useTransition()},pt.version="19.1.1",pt}var cv;function dp(){return cv||(cv=1,wh.exports=uE()),wh.exports}var ge=dp(),Ch={exports:{}},qo={},Dh={exports:{}},Uh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fv;function cE(){return fv||(fv=1,(function(r){function e(B,Z){var q=B.length;B.push(Z);e:for(;0<q;){var Te=q-1>>>1,N=B[Te];if(0<o(N,Z))B[Te]=Z,B[q]=N,q=Te;else break e}}function n(B){return B.length===0?null:B[0]}function a(B){if(B.length===0)return null;var Z=B[0],q=B.pop();if(q!==Z){B[0]=q;e:for(var Te=0,N=B.length,Q=N>>>1;Te<Q;){var ve=2*(Te+1)-1,be=B[ve],Ne=ve+1,Ve=B[Ne];if(0>o(be,q))Ne<N&&0>o(Ve,be)?(B[Te]=Ve,B[Ne]=q,Te=Ne):(B[Te]=be,B[ve]=q,Te=ve);else if(Ne<N&&0>o(Ve,q))B[Te]=Ve,B[Ne]=q,Te=Ne;else break e}}return Z}function o(B,Z){var q=B.sortIndex-Z.sortIndex;return q!==0?q:B.id-Z.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var f=Date,h=f.now();r.unstable_now=function(){return f.now()-h}}var m=[],d=[],g=1,_=null,S=3,y=!1,E=!1,T=!1,x=!1,v=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function C(B){for(var Z=n(d);Z!==null;){if(Z.callback===null)a(d);else if(Z.startTime<=B)a(d),Z.sortIndex=Z.expirationTime,e(m,Z);else break;Z=n(d)}}function P(B){if(T=!1,C(B),!E)if(n(m)!==null)E=!0,F||(F=!0,J());else{var Z=n(d);Z!==null&&he(P,Z.startTime-B)}}var F=!1,I=-1,X=5,U=-1;function R(){return x?!0:!(r.unstable_now()-U<X)}function k(){if(x=!1,F){var B=r.unstable_now();U=B;var Z=!0;try{e:{E=!1,T&&(T=!1,D(I),I=-1),y=!0;var q=S;try{t:{for(C(B),_=n(m);_!==null&&!(_.expirationTime>B&&R());){var Te=_.callback;if(typeof Te=="function"){_.callback=null,S=_.priorityLevel;var N=Te(_.expirationTime<=B);if(B=r.unstable_now(),typeof N=="function"){_.callback=N,C(B),Z=!0;break t}_===n(m)&&a(m),C(B)}else a(m);_=n(m)}if(_!==null)Z=!0;else{var Q=n(d);Q!==null&&he(P,Q.startTime-B),Z=!1}}break e}finally{_=null,S=q,y=!1}Z=void 0}}finally{Z?J():F=!1}}}var J;if(typeof L=="function")J=function(){L(k)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,me=ue.port2;ue.port1.onmessage=k,J=function(){me.postMessage(null)}}else J=function(){v(k,0)};function he(B,Z){I=v(function(){B(r.unstable_now())},Z)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(B){B.callback=null},r.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<B?Math.floor(1e3/B):5},r.unstable_getCurrentPriorityLevel=function(){return S},r.unstable_next=function(B){switch(S){case 1:case 2:case 3:var Z=3;break;default:Z=S}var q=S;S=Z;try{return B()}finally{S=q}},r.unstable_requestPaint=function(){x=!0},r.unstable_runWithPriority=function(B,Z){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var q=S;S=B;try{return Z()}finally{S=q}},r.unstable_scheduleCallback=function(B,Z,q){var Te=r.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?Te+q:Te):q=Te,B){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=q+N,B={id:g++,callback:Z,priorityLevel:B,startTime:q,expirationTime:N,sortIndex:-1},q>Te?(B.sortIndex=q,e(d,B),n(m)===null&&B===n(d)&&(T?(D(I),I=-1):T=!0,he(P,q-Te))):(B.sortIndex=N,e(m,B),E||y||(E=!0,F||(F=!0,J()))),B},r.unstable_shouldYield=R,r.unstable_wrapCallback=function(B){var Z=S;return function(){var q=S;S=Z;try{return B.apply(this,arguments)}finally{S=q}}}})(Uh)),Uh}var hv;function fE(){return hv||(hv=1,Dh.exports=cE()),Dh.exports}var Lh={exports:{}},Nn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dv;function hE(){if(dv)return Nn;dv=1;var r=dp();function e(m){var d="https://react.dev/errors/"+m;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)d+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(m,d,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:_==null?null:""+_,children:m,containerInfo:d,implementation:g}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,d){if(m==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return Nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Nn.createPortal=function(m,d){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(e(299));return u(m,d,null,g)},Nn.flushSync=function(m){var d=f.T,g=a.p;try{if(f.T=null,a.p=2,m)return m()}finally{f.T=d,a.p=g,a.d.f()}},Nn.preconnect=function(m,d){typeof m=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,a.d.C(m,d))},Nn.prefetchDNS=function(m){typeof m=="string"&&a.d.D(m)},Nn.preinit=function(m,d){if(typeof m=="string"&&d&&typeof d.as=="string"){var g=d.as,_=h(g,d.crossOrigin),S=typeof d.integrity=="string"?d.integrity:void 0,y=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;g==="style"?a.d.S(m,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:_,integrity:S,fetchPriority:y}):g==="script"&&a.d.X(m,{crossOrigin:_,integrity:S,fetchPriority:y,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},Nn.preinitModule=function(m,d){if(typeof m=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var g=h(d.as,d.crossOrigin);a.d.M(m,{crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&a.d.M(m)},Nn.preload=function(m,d){if(typeof m=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var g=d.as,_=h(g,d.crossOrigin);a.d.L(m,g,{crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},Nn.preloadModule=function(m,d){if(typeof m=="string")if(d){var g=h(d.as,d.crossOrigin);a.d.m(m,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else a.d.m(m)},Nn.requestFormReset=function(m){a.d.r(m)},Nn.unstable_batchedUpdates=function(m,d){return m(d)},Nn.useFormState=function(m,d,g){return f.H.useFormState(m,d,g)},Nn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Nn.version="19.1.1",Nn}var pv;function dE(){if(pv)return Lh.exports;pv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Lh.exports=hE(),Lh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mv;function pE(){if(mv)return qo;mv=1;var r=fE(),e=dp(),n=dE();function a(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function f(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function h(t){if(u(t)!==t)throw Error(a(188))}function m(t){var i=t.alternate;if(!i){if(i=u(t),i===null)throw Error(a(188));return i!==t?null:t}for(var s=t,l=i;;){var c=s.return;if(c===null)break;var p=c.alternate;if(p===null){if(l=c.return,l!==null){s=l;continue}break}if(c.child===p.child){for(p=c.child;p;){if(p===s)return h(c),t;if(p===l)return h(c),i;p=p.sibling}throw Error(a(188))}if(s.return!==l.return)s=c,l=p;else{for(var M=!1,A=c.child;A;){if(A===s){M=!0,s=c,l=p;break}if(A===l){M=!0,l=c,s=p;break}A=A.sibling}if(!M){for(A=p.child;A;){if(A===s){M=!0,s=p,l=c;break}if(A===l){M=!0,l=p,s=c;break}A=A.sibling}if(!M)throw Error(a(189))}}if(s.alternate!==l)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?t:i}function d(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=d(t),i!==null)return i;t=t.sibling}return null}var g=Object.assign,_=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),D=Symbol.for("react.consumer"),L=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function J(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var ue=Symbol.for("react.client.reference");function me(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ue?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case E:return"Fragment";case x:return"Profiler";case T:return"StrictMode";case P:return"Suspense";case F:return"SuspenseList";case U:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case y:return"Portal";case L:return(t.displayName||"Context")+".Provider";case D:return(t._context.displayName||"Context")+".Consumer";case C:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case I:return i=t.displayName||null,i!==null?i:me(t.type)||"Memo";case X:i=t._payload,t=t._init;try{return me(t(i))}catch{}}return null}var he=Array.isArray,B=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},Te=[],N=-1;function Q(t){return{current:t}}function ve(t){0>N||(t.current=Te[N],Te[N]=null,N--)}function be(t,i){N++,Te[N]=t.current,t.current=i}var Ne=Q(null),Ve=Q(null),ne=Q(null),ye=Q(null);function Ue(t,i){switch(be(ne,i),be(Ve,t),be(Ne,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?P_(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=P_(i),t=B_(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ve(Ne),be(Ne,t)}function et(){ve(Ne),ve(Ve),ve(ne)}function je(t){t.memoizedState!==null&&be(ye,t);var i=Ne.current,s=B_(i,t.type);i!==s&&(be(Ve,t),be(Ne,s))}function dt(t){Ve.current===t&&(ve(Ne),ve(Ve)),ye.current===t&&(ve(ye),Ho._currentValue=q)}var Qt=Object.prototype.hasOwnProperty,G=r.unstable_scheduleCallback,Ut=r.unstable_cancelCallback,ut=r.unstable_shouldYield,at=r.unstable_requestPaint,ze=r.unstable_now,Ot=r.unstable_getCurrentPriorityLevel,We=r.unstable_ImmediatePriority,ct=r.unstable_UserBlockingPriority,qt=r.unstable_NormalPriority,Xt=r.unstable_LowPriority,O=r.unstable_IdlePriority,b=r.log,ie=r.unstable_setDisableYieldValue,de=null,Se=null;function fe(t){if(typeof b=="function"&&ie(t),Se&&typeof Se.setStrictMode=="function")try{Se.setStrictMode(de,t)}catch{}}var Ge=Math.clz32?Math.clz32:Ze,Le=Math.log,Ye=Math.LN2;function Ze(t){return t>>>=0,t===0?32:31-(Le(t)/Ye|0)|0}var Ae=256,Oe=4194304;function Ke(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function H(t,i,s){var l=t.pendingLanes;if(l===0)return 0;var c=0,p=t.suspendedLanes,M=t.pingedLanes;t=t.warmLanes;var A=l&134217727;return A!==0?(l=A&~p,l!==0?c=Ke(l):(M&=A,M!==0?c=Ke(M):s||(s=A&~t,s!==0&&(c=Ke(s))))):(A=l&~p,A!==0?c=Ke(A):M!==0?c=Ke(M):s||(s=l&~t,s!==0&&(c=Ke(s)))),c===0?0:i!==0&&i!==c&&(i&p)===0&&(p=c&-c,s=i&-i,p>=s||p===32&&(s&4194048)!==0)?i:c}function ae(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function De(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function V(){var t=Ae;return Ae<<=1,(Ae&4194048)===0&&(Ae=256),t}function Me(){var t=Oe;return Oe<<=1,(Oe&62914560)===0&&(Oe=4194304),t}function we(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function Pe(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Re(t,i,s,l,c,p){var M=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var A=t.entanglements,z=t.expirationTimes,te=t.hiddenUpdates;for(s=M&~s;0<s;){var pe=31-Ge(s),Ee=1<<pe;A[pe]=0,z[pe]=-1;var re=te[pe];if(re!==null)for(te[pe]=null,pe=0;pe<re.length;pe++){var se=re[pe];se!==null&&(se.lane&=-536870913)}s&=~Ee}l!==0&&xe(t,l,0),p!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=p&~(M&~i))}function xe(t,i,s){t.pendingLanes|=i,t.suspendedLanes&=~i;var l=31-Ge(i);t.entangledLanes|=i,t.entanglements[l]=t.entanglements[l]|1073741824|s&4194090}function He(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var l=31-Ge(s),c=1<<l;c&i|t[l]&i&&(t[l]|=i),s&=~c}}function Je(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function At(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function St(){var t=Z.p;return t!==0?t:(t=window.event,t===void 0?32:tv(t.type))}function Tn(t,i){var s=Z.p;try{return Z.p=t,i()}finally{Z.p=s}}var jt=Math.random().toString(36).slice(2),pn="__reactFiber$"+jt,en="__reactProps$"+jt,wi="__reactContainer$"+jt,zr="__reactEvents$"+jt,xl="__reactListeners$"+jt,Hr="__reactHandles$"+jt,Qs="__reactResources$"+jt,Ci="__reactMarker$"+jt;function Gr(t){delete t[pn],delete t[en],delete t[zr],delete t[xl],delete t[Hr]}function qi(t){var i=t[pn];if(i)return i;for(var s=t.parentNode;s;){if(i=s[wi]||s[pn]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=H_(t);t!==null;){if(s=t[pn])return s;t=H_(t)}return i}t=s,s=t.parentNode}return null}function xa(t){if(t=t[pn]||t[wi]){var i=t.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return t}return null}function ar(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(a(33))}function ya(t){var i=t[Qs];return i||(i=t[Qs]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function cn(t){t[Ci]=!0}var yl=new Set,El={};function w(t,i){Y(t,i),Y(t+"Capture",i)}function Y(t,i){for(El[t]=i,t=0;t<i.length;t++)yl.add(i[t])}var oe=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ce={},K={};function Ce(t){return Qt.call(K,t)?!0:Qt.call(ce,t)?!1:oe.test(t)?K[t]=!0:(ce[t]=!0,!1)}function Be(t,i,s){if(Ce(i))if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+s)}}function Xe(t,i,s){if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+s)}}function Ie(t,i,s,l){if(l===null)t.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(i,s,""+l)}}var nt,st;function Qe(t){if(nt===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);nt=i&&i[1]||"",st=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+nt+t+st}var gt=!1;function wt(t,i){if(!t||gt)return"";gt=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var Ee=function(){throw Error()};if(Object.defineProperty(Ee.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Ee,[])}catch(se){var re=se}Reflect.construct(t,[],Ee)}else{try{Ee.call()}catch(se){re=se}t.call(Ee.prototype)}}else{try{throw Error()}catch(se){re=se}(Ee=t())&&typeof Ee.catch=="function"&&Ee.catch(function(){})}}catch(se){if(se&&re&&typeof se.stack=="string")return[se.stack,re.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var p=l.DetermineComponentFrameRoot(),M=p[0],A=p[1];if(M&&A){var z=M.split(`
`),te=A.split(`
`);for(c=l=0;l<z.length&&!z[l].includes("DetermineComponentFrameRoot");)l++;for(;c<te.length&&!te[c].includes("DetermineComponentFrameRoot");)c++;if(l===z.length||c===te.length)for(l=z.length-1,c=te.length-1;1<=l&&0<=c&&z[l]!==te[c];)c--;for(;1<=l&&0<=c;l--,c--)if(z[l]!==te[c]){if(l!==1||c!==1)do if(l--,c--,0>c||z[l]!==te[c]){var pe=`
`+z[l].replace(" at new "," at ");return t.displayName&&pe.includes("<anonymous>")&&(pe=pe.replace("<anonymous>",t.displayName)),pe}while(1<=l&&0<=c);break}}}finally{gt=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?Qe(s):""}function Zt(t){switch(t.tag){case 26:case 27:case 5:return Qe(t.type);case 16:return Qe("Lazy");case 13:return Qe("Suspense");case 19:return Qe("SuspenseList");case 0:case 15:return wt(t.type,!1);case 11:return wt(t.type.render,!1);case 1:return wt(t.type,!0);case 31:return Qe("Activity");default:return""}}function It(t){try{var i="";do i+=Zt(t),t=t.return;while(t);return i}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function _t(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function tt(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Yt(t){var i=tt(t)?"checked":"value",s=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,p=s.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return c.call(this)},set:function(M){l=""+M,p.call(this,M)}}),Object.defineProperty(t,i,{enumerable:s.enumerable}),{getValue:function(){return l},setValue:function(M){l=""+M},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Et(t){t._valueTracker||(t._valueTracker=Yt(t))}function Dn(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return t&&(l=tt(t)?t.checked?"true":"false":t.value),t=l,t!==s?(i.setValue(t),!0):!1}function _i(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Fn=/[\n"\\]/g;function Sn(t){return t.replace(Fn,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Vt(t,i,s,l,c,p,M,A){t.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?t.type=M:t.removeAttribute("type"),i!=null?M==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+_t(i)):t.value!==""+_t(i)&&(t.value=""+_t(i)):M!=="submit"&&M!=="reset"||t.removeAttribute("value"),i!=null?Un(t,M,_t(i)):s!=null?Un(t,M,_t(s)):l!=null&&t.removeAttribute("value"),c==null&&p!=null&&(t.defaultChecked=!!p),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.name=""+_t(A):t.removeAttribute("name")}function zn(t,i,s,l,c,p,M,A){if(p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(t.type=p),i!=null||s!=null){if(!(p!=="submit"&&p!=="reset"||i!=null))return;s=s!=null?""+_t(s):"",i=i!=null?""+_t(i):s,A||i===t.value||(t.value=i),t.defaultValue=i}l=l??c,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=A?t.checked:!!l,t.defaultChecked=!!l,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(t.name=M)}function Un(t,i,s){i==="number"&&_i(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function tn(t,i,s,l){if(t=t.options,i){i={};for(var c=0;c<s.length;c++)i["$"+s[c]]=!0;for(s=0;s<t.length;s++)c=i.hasOwnProperty("$"+t[s].value),t[s].selected!==c&&(t[s].selected=c),c&&l&&(t[s].defaultSelected=!0)}else{for(s=""+_t(s),i=null,c=0;c<t.length;c++){if(t[c].value===s){t[c].selected=!0,l&&(t[c].defaultSelected=!0);return}i!==null||t[c].disabled||(i=t[c])}i!==null&&(i.selected=!0)}}function bn(t,i,s){if(i!=null&&(i=""+_t(i),i!==t.value&&(t.value=i),s==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=s!=null?""+_t(s):""}function Vr(t,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(a(92));if(he(l)){if(1<l.length)throw Error(a(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=_t(i),t.defaultValue=s,l=t.textContent,l===s&&l!==""&&l!==null&&(t.value=l)}function kn(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var ax=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Pp(t,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":l?t.setProperty(i,s):typeof s!="number"||s===0||ax.has(i)?i==="float"?t.cssFloat=s:t[i]=(""+s).trim():t[i]=s+"px"}function Bp(t,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(t=t.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var c in i)l=i[c],i.hasOwnProperty(c)&&s[c]!==l&&Pp(t,c,l)}else for(var p in i)i.hasOwnProperty(p)&&Pp(t,p,i[p])}function bc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),sx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ml(t){return sx.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Ac=null;function Rc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var kr=null,Xr=null;function Ip(t){var i=xa(t);if(i&&(t=i.stateNode)){var s=t[en]||null;e:switch(t=i.stateNode,i.type){case"input":if(Vt(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+Sn(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==t&&l.form===t.form){var c=l[en]||null;if(!c)throw Error(a(90));Vt(l,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===t.form&&Dn(l)}break e;case"textarea":bn(t,s.value,s.defaultValue);break e;case"select":i=s.value,i!=null&&tn(t,!!s.multiple,i,!1)}}}var wc=!1;function Fp(t,i,s){if(wc)return t(i,s);wc=!0;try{var l=t(i);return l}finally{if(wc=!1,(kr!==null||Xr!==null)&&(lu(),kr&&(i=kr,t=Xr,Xr=kr=null,Ip(i),t)))for(i=0;i<t.length;i++)Ip(t[i])}}function Js(t,i){var s=t.stateNode;if(s===null)return null;var l=s[en]||null;if(l===null)return null;s=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var Yi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cc=!1;if(Yi)try{var $s={};Object.defineProperty($s,"passive",{get:function(){Cc=!0}}),window.addEventListener("test",$s,$s),window.removeEventListener("test",$s,$s)}catch{Cc=!1}var Ea=null,Dc=null,Tl=null;function zp(){if(Tl)return Tl;var t,i=Dc,s=i.length,l,c="value"in Ea?Ea.value:Ea.textContent,p=c.length;for(t=0;t<s&&i[t]===c[t];t++);var M=s-t;for(l=1;l<=M&&i[s-l]===c[p-l];l++);return Tl=c.slice(t,1<l?1-l:void 0)}function bl(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function Al(){return!0}function Hp(){return!1}function Xn(t){function i(s,l,c,p,M){this._reactName=s,this._targetInst=c,this.type=l,this.nativeEvent=p,this.target=M,this.currentTarget=null;for(var A in t)t.hasOwnProperty(A)&&(s=t[A],this[A]=s?s(p):p[A]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Al:Hp,this.isPropagationStopped=Hp,this}return g(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Al)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Al)},persist:function(){},isPersistent:Al}),i}var rr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rl=Xn(rr),eo=g({},rr,{view:0,detail:0}),ox=Xn(eo),Uc,Lc,to,wl=g({},eo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Oc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==to&&(to&&t.type==="mousemove"?(Uc=t.screenX-to.screenX,Lc=t.screenY-to.screenY):Lc=Uc=0,to=t),Uc)},movementY:function(t){return"movementY"in t?t.movementY:Lc}}),Gp=Xn(wl),lx=g({},wl,{dataTransfer:0}),ux=Xn(lx),cx=g({},eo,{relatedTarget:0}),Nc=Xn(cx),fx=g({},rr,{animationName:0,elapsedTime:0,pseudoElement:0}),hx=Xn(fx),dx=g({},rr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),px=Xn(dx),mx=g({},rr,{data:0}),Vp=Xn(mx),gx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_x={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sx(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=vx[t])?!!i[t]:!1}function Oc(){return Sx}var xx=g({},eo,{key:function(t){if(t.key){var i=gx[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=bl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?_x[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Oc,charCode:function(t){return t.type==="keypress"?bl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?bl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),yx=Xn(xx),Ex=g({},wl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),kp=Xn(Ex),Mx=g({},eo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Oc}),Tx=Xn(Mx),bx=g({},rr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ax=Xn(bx),Rx=g({},wl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),wx=Xn(Rx),Cx=g({},rr,{newState:0,oldState:0}),Dx=Xn(Cx),Ux=[9,13,27,32],Pc=Yi&&"CompositionEvent"in window,no=null;Yi&&"documentMode"in document&&(no=document.documentMode);var Lx=Yi&&"TextEvent"in window&&!no,Xp=Yi&&(!Pc||no&&8<no&&11>=no),Wp=" ",qp=!1;function Yp(t,i){switch(t){case"keyup":return Ux.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Wr=!1;function Nx(t,i){switch(t){case"compositionend":return jp(i);case"keypress":return i.which!==32?null:(qp=!0,Wp);case"textInput":return t=i.data,t===Wp&&qp?null:t;default:return null}}function Ox(t,i){if(Wr)return t==="compositionend"||!Pc&&Yp(t,i)?(t=zp(),Tl=Dc=Ea=null,Wr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Xp&&i.locale!=="ko"?null:i.data;default:return null}}var Px={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zp(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Px[t.type]:i==="textarea"}function Kp(t,i,s,l){kr?Xr?Xr.push(l):Xr=[l]:kr=l,i=pu(i,"onChange"),0<i.length&&(s=new Rl("onChange","change",null,s,l),t.push({event:s,listeners:i}))}var io=null,ao=null;function Bx(t){D_(t,0)}function Cl(t){var i=ar(t);if(Dn(i))return t}function Qp(t,i){if(t==="change")return i}var Jp=!1;if(Yi){var Bc;if(Yi){var Ic="oninput"in document;if(!Ic){var $p=document.createElement("div");$p.setAttribute("oninput","return;"),Ic=typeof $p.oninput=="function"}Bc=Ic}else Bc=!1;Jp=Bc&&(!document.documentMode||9<document.documentMode)}function em(){io&&(io.detachEvent("onpropertychange",tm),ao=io=null)}function tm(t){if(t.propertyName==="value"&&Cl(ao)){var i=[];Kp(i,ao,t,Rc(t)),Fp(Bx,i)}}function Ix(t,i,s){t==="focusin"?(em(),io=i,ao=s,io.attachEvent("onpropertychange",tm)):t==="focusout"&&em()}function Fx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Cl(ao)}function zx(t,i){if(t==="click")return Cl(i)}function Hx(t,i){if(t==="input"||t==="change")return Cl(i)}function Gx(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var $n=typeof Object.is=="function"?Object.is:Gx;function ro(t,i){if($n(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var c=s[l];if(!Qt.call(i,c)||!$n(t[c],i[c]))return!1}return!0}function nm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function im(t,i){var s=nm(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=i&&l>=i)return{node:s,offset:i-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=nm(s)}}function am(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?am(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function rm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=_i(t.document);i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=_i(t.document)}return i}function Fc(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var Vx=Yi&&"documentMode"in document&&11>=document.documentMode,qr=null,zc=null,so=null,Hc=!1;function sm(t,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Hc||qr==null||qr!==_i(l)||(l=qr,"selectionStart"in l&&Fc(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),so&&ro(so,l)||(so=l,l=pu(zc,"onSelect"),0<l.length&&(i=new Rl("onSelect","select",null,i,s),t.push({event:i,listeners:l}),i.target=qr)))}function sr(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var Yr={animationend:sr("Animation","AnimationEnd"),animationiteration:sr("Animation","AnimationIteration"),animationstart:sr("Animation","AnimationStart"),transitionrun:sr("Transition","TransitionRun"),transitionstart:sr("Transition","TransitionStart"),transitioncancel:sr("Transition","TransitionCancel"),transitionend:sr("Transition","TransitionEnd")},Gc={},om={};Yi&&(om=document.createElement("div").style,"AnimationEvent"in window||(delete Yr.animationend.animation,delete Yr.animationiteration.animation,delete Yr.animationstart.animation),"TransitionEvent"in window||delete Yr.transitionend.transition);function or(t){if(Gc[t])return Gc[t];if(!Yr[t])return t;var i=Yr[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in om)return Gc[t]=i[s];return t}var lm=or("animationend"),um=or("animationiteration"),cm=or("animationstart"),kx=or("transitionrun"),Xx=or("transitionstart"),Wx=or("transitioncancel"),fm=or("transitionend"),hm=new Map,Vc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Vc.push("scrollEnd");function vi(t,i){hm.set(t,i),w(i,[t])}var dm=new WeakMap;function li(t,i){if(typeof t=="object"&&t!==null){var s=dm.get(t);return s!==void 0?s:(i={value:t,source:i,stack:It(i)},dm.set(t,i),i)}return{value:t,source:i,stack:It(i)}}var ui=[],jr=0,kc=0;function Dl(){for(var t=jr,i=kc=jr=0;i<t;){var s=ui[i];ui[i++]=null;var l=ui[i];ui[i++]=null;var c=ui[i];ui[i++]=null;var p=ui[i];if(ui[i++]=null,l!==null&&c!==null){var M=l.pending;M===null?c.next=c:(c.next=M.next,M.next=c),l.pending=c}p!==0&&pm(s,c,p)}}function Ul(t,i,s,l){ui[jr++]=t,ui[jr++]=i,ui[jr++]=s,ui[jr++]=l,kc|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Xc(t,i,s,l){return Ul(t,i,s,l),Ll(t)}function Zr(t,i){return Ul(t,null,null,i),Ll(t)}function pm(t,i,s){t.lanes|=s;var l=t.alternate;l!==null&&(l.lanes|=s);for(var c=!1,p=t.return;p!==null;)p.childLanes|=s,l=p.alternate,l!==null&&(l.childLanes|=s),p.tag===22&&(t=p.stateNode,t===null||t._visibility&1||(c=!0)),t=p,p=p.return;return t.tag===3?(p=t.stateNode,c&&i!==null&&(c=31-Ge(s),t=p.hiddenUpdates,l=t[c],l===null?t[c]=[i]:l.push(i),i.lane=s|536870912),p):null}function Ll(t){if(50<Lo)throw Lo=0,Qf=null,Error(a(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var Kr={};function qx(t,i,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ei(t,i,s,l){return new qx(t,i,s,l)}function Wc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ji(t,i){var s=t.alternate;return s===null?(s=ei(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function mm(t,i){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,i=s.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function Nl(t,i,s,l,c,p){var M=0;if(l=t,typeof t=="function")Wc(t)&&(M=1);else if(typeof t=="string")M=jy(t,s,Ne.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case U:return t=ei(31,s,i,c),t.elementType=U,t.lanes=p,t;case E:return lr(s.children,c,p,i);case T:M=8,c|=24;break;case x:return t=ei(12,s,i,c|2),t.elementType=x,t.lanes=p,t;case P:return t=ei(13,s,i,c),t.elementType=P,t.lanes=p,t;case F:return t=ei(19,s,i,c),t.elementType=F,t.lanes=p,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case v:case L:M=10;break e;case D:M=9;break e;case C:M=11;break e;case I:M=14;break e;case X:M=16,l=null;break e}M=29,s=Error(a(130,t===null?"null":typeof t,"")),l=null}return i=ei(M,s,i,c),i.elementType=t,i.type=l,i.lanes=p,i}function lr(t,i,s,l){return t=ei(7,t,l,i),t.lanes=s,t}function qc(t,i,s){return t=ei(6,t,null,i),t.lanes=s,t}function Yc(t,i,s){return i=ei(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var Qr=[],Jr=0,Ol=null,Pl=0,ci=[],fi=0,ur=null,Zi=1,Ki="";function cr(t,i){Qr[Jr++]=Pl,Qr[Jr++]=Ol,Ol=t,Pl=i}function gm(t,i,s){ci[fi++]=Zi,ci[fi++]=Ki,ci[fi++]=ur,ur=t;var l=Zi;t=Ki;var c=32-Ge(l)-1;l&=~(1<<c),s+=1;var p=32-Ge(i)+c;if(30<p){var M=c-c%5;p=(l&(1<<M)-1).toString(32),l>>=M,c-=M,Zi=1<<32-Ge(i)+c|s<<c|l,Ki=p+t}else Zi=1<<p|s<<c|l,Ki=t}function jc(t){t.return!==null&&(cr(t,1),gm(t,1,0))}function Zc(t){for(;t===Ol;)Ol=Qr[--Jr],Qr[Jr]=null,Pl=Qr[--Jr],Qr[Jr]=null;for(;t===ur;)ur=ci[--fi],ci[fi]=null,Ki=ci[--fi],ci[fi]=null,Zi=ci[--fi],ci[fi]=null}var Hn=null,nn=null,Lt=!1,fr=null,Di=!1,Kc=Error(a(519));function hr(t){var i=Error(a(418,""));throw uo(li(i,t)),Kc}function _m(t){var i=t.stateNode,s=t.type,l=t.memoizedProps;switch(i[pn]=t,i[en]=l,s){case"dialog":Tt("cancel",i),Tt("close",i);break;case"iframe":case"object":case"embed":Tt("load",i);break;case"video":case"audio":for(s=0;s<Oo.length;s++)Tt(Oo[s],i);break;case"source":Tt("error",i);break;case"img":case"image":case"link":Tt("error",i),Tt("load",i);break;case"details":Tt("toggle",i);break;case"input":Tt("invalid",i),zn(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),Et(i);break;case"select":Tt("invalid",i);break;case"textarea":Tt("invalid",i),Vr(i,l.value,l.defaultValue,l.children),Et(i)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||O_(i.textContent,s)?(l.popover!=null&&(Tt("beforetoggle",i),Tt("toggle",i)),l.onScroll!=null&&Tt("scroll",i),l.onScrollEnd!=null&&Tt("scrollend",i),l.onClick!=null&&(i.onclick=mu),i=!0):i=!1,i||hr(t)}function vm(t){for(Hn=t.return;Hn;)switch(Hn.tag){case 5:case 13:Di=!1;return;case 27:case 3:Di=!0;return;default:Hn=Hn.return}}function oo(t){if(t!==Hn)return!1;if(!Lt)return vm(t),Lt=!0,!1;var i=t.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||dh(t.type,t.memoizedProps)),s=!s),s&&nn&&hr(t),vm(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8)if(s=t.data,s==="/$"){if(i===0){nn=xi(t.nextSibling);break e}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++;t=t.nextSibling}nn=null}}else i===27?(i=nn,Fa(t.type)?(t=_h,_h=null,nn=t):nn=i):nn=Hn?xi(t.stateNode.nextSibling):null;return!0}function lo(){nn=Hn=null,Lt=!1}function Sm(){var t=fr;return t!==null&&(Yn===null?Yn=t:Yn.push.apply(Yn,t),fr=null),t}function uo(t){fr===null?fr=[t]:fr.push(t)}var Qc=Q(null),dr=null,Qi=null;function Ma(t,i,s){be(Qc,i._currentValue),i._currentValue=s}function Ji(t){t._currentValue=Qc.current,ve(Qc)}function Jc(t,i,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===s)break;t=t.return}}function $c(t,i,s,l){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var p=c.dependencies;if(p!==null){var M=c.child;p=p.firstContext;e:for(;p!==null;){var A=p;p=c;for(var z=0;z<i.length;z++)if(A.context===i[z]){p.lanes|=s,A=p.alternate,A!==null&&(A.lanes|=s),Jc(p.return,s,t),l||(M=null);break e}p=A.next}}else if(c.tag===18){if(M=c.return,M===null)throw Error(a(341));M.lanes|=s,p=M.alternate,p!==null&&(p.lanes|=s),Jc(M,s,t),M=null}else M=c.child;if(M!==null)M.return=c;else for(M=c;M!==null;){if(M===t){M=null;break}if(c=M.sibling,c!==null){c.return=M.return,M=c;break}M=M.return}c=M}}function co(t,i,s,l){t=null;for(var c=i,p=!1;c!==null;){if(!p){if((c.flags&524288)!==0)p=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var M=c.alternate;if(M===null)throw Error(a(387));if(M=M.memoizedProps,M!==null){var A=c.type;$n(c.pendingProps.value,M.value)||(t!==null?t.push(A):t=[A])}}else if(c===ye.current){if(M=c.alternate,M===null)throw Error(a(387));M.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(Ho):t=[Ho])}c=c.return}t!==null&&$c(i,t,s,l),i.flags|=262144}function Bl(t){for(t=t.firstContext;t!==null;){if(!$n(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function pr(t){dr=t,Qi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Ln(t){return xm(dr,t)}function Il(t,i){return dr===null&&pr(t),xm(t,i)}function xm(t,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},Qi===null){if(t===null)throw Error(a(308));Qi=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else Qi=Qi.next=i;return s}var Yx=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(s,l){t.push(l)}};this.abort=function(){i.aborted=!0,t.forEach(function(s){return s()})}},jx=r.unstable_scheduleCallback,Zx=r.unstable_NormalPriority,mn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ef(){return{controller:new Yx,data:new Map,refCount:0}}function fo(t){t.refCount--,t.refCount===0&&jx(Zx,function(){t.controller.abort()})}var ho=null,tf=0,$r=0,es=null;function Kx(t,i){if(ho===null){var s=ho=[];tf=0,$r=ah(),es={status:"pending",value:void 0,then:function(l){s.push(l)}}}return tf++,i.then(ym,ym),i}function ym(){if(--tf===0&&ho!==null){es!==null&&(es.status="fulfilled");var t=ho;ho=null,$r=0,es=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function Qx(t,i){var s=[],l={status:"pending",value:null,reason:null,then:function(c){s.push(c)}};return t.then(function(){l.status="fulfilled",l.value=i;for(var c=0;c<s.length;c++)(0,s[c])(i)},function(c){for(l.status="rejected",l.reason=c,c=0;c<s.length;c++)(0,s[c])(void 0)}),l}var Em=B.S;B.S=function(t,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&Kx(t,i),Em!==null&&Em(t,i)};var mr=Q(null);function nf(){var t=mr.current;return t!==null?t:Wt.pooledCache}function Fl(t,i){i===null?be(mr,mr.current):be(mr,i.pool)}function Mm(){var t=nf();return t===null?null:{parent:mn._currentValue,pool:t}}var po=Error(a(460)),Tm=Error(a(474)),zl=Error(a(542)),af={then:function(){}};function bm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Hl(){}function Am(t,i,s){switch(s=t[s],s===void 0?t.push(i):s!==i&&(i.then(Hl,Hl),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,wm(t),t;default:if(typeof i.status=="string")i.then(Hl,Hl);else{if(t=Wt,t!==null&&100<t.shellSuspendCounter)throw Error(a(482));t=i,t.status="pending",t.then(function(l){if(i.status==="pending"){var c=i;c.status="fulfilled",c.value=l}},function(l){if(i.status==="pending"){var c=i;c.status="rejected",c.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,wm(t),t}throw mo=i,po}}var mo=null;function Rm(){if(mo===null)throw Error(a(459));var t=mo;return mo=null,t}function wm(t){if(t===po||t===zl)throw Error(a(483))}var Ta=!1;function rf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function sf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ba(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Aa(t,i,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Pt&2)!==0){var c=l.pending;return c===null?i.next=i:(i.next=c.next,c.next=i),l.pending=i,i=Ll(t),pm(t,null,s),i}return Ul(t,l,i,s),Ll(t)}function go(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,He(t,s)}}function of(t,i){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var c=null,p=null;if(s=s.firstBaseUpdate,s!==null){do{var M={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};p===null?c=p=M:p=p.next=M,s=s.next}while(s!==null);p===null?c=p=i:p=p.next=i}else c=p=i;s={baseState:l.baseState,firstBaseUpdate:c,lastBaseUpdate:p,shared:l.shared,callbacks:l.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}var lf=!1;function _o(){if(lf){var t=es;if(t!==null)throw t}}function vo(t,i,s,l){lf=!1;var c=t.updateQueue;Ta=!1;var p=c.firstBaseUpdate,M=c.lastBaseUpdate,A=c.shared.pending;if(A!==null){c.shared.pending=null;var z=A,te=z.next;z.next=null,M===null?p=te:M.next=te,M=z;var pe=t.alternate;pe!==null&&(pe=pe.updateQueue,A=pe.lastBaseUpdate,A!==M&&(A===null?pe.firstBaseUpdate=te:A.next=te,pe.lastBaseUpdate=z))}if(p!==null){var Ee=c.baseState;M=0,pe=te=z=null,A=p;do{var re=A.lane&-536870913,se=re!==A.lane;if(se?(Rt&re)===re:(l&re)===re){re!==0&&re===$r&&(lf=!0),pe!==null&&(pe=pe.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var lt=t,rt=A;re=i;var Ht=s;switch(rt.tag){case 1:if(lt=rt.payload,typeof lt=="function"){Ee=lt.call(Ht,Ee,re);break e}Ee=lt;break e;case 3:lt.flags=lt.flags&-65537|128;case 0:if(lt=rt.payload,re=typeof lt=="function"?lt.call(Ht,Ee,re):lt,re==null)break e;Ee=g({},Ee,re);break e;case 2:Ta=!0}}re=A.callback,re!==null&&(t.flags|=64,se&&(t.flags|=8192),se=c.callbacks,se===null?c.callbacks=[re]:se.push(re))}else se={lane:re,tag:A.tag,payload:A.payload,callback:A.callback,next:null},pe===null?(te=pe=se,z=Ee):pe=pe.next=se,M|=re;if(A=A.next,A===null){if(A=c.shared.pending,A===null)break;se=A,A=se.next,se.next=null,c.lastBaseUpdate=se,c.shared.pending=null}}while(!0);pe===null&&(z=Ee),c.baseState=z,c.firstBaseUpdate=te,c.lastBaseUpdate=pe,p===null&&(c.shared.lanes=0),Oa|=M,t.lanes=M,t.memoizedState=Ee}}function Cm(t,i){if(typeof t!="function")throw Error(a(191,t));t.call(i)}function Dm(t,i){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)Cm(s[t],i)}var ts=Q(null),Gl=Q(0);function Um(t,i){t=ra,be(Gl,t),be(ts,i),ra=t|i.baseLanes}function uf(){be(Gl,ra),be(ts,ts.current)}function cf(){ra=Gl.current,ve(ts),ve(Gl)}var Ra=0,xt=null,Ft=null,fn=null,Vl=!1,ns=!1,gr=!1,kl=0,So=0,is=null,Jx=0;function on(){throw Error(a(321))}function ff(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!$n(t[s],i[s]))return!1;return!0}function hf(t,i,s,l,c,p){return Ra=p,xt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,B.H=t===null||t.memoizedState===null?pg:mg,gr=!1,p=s(l,c),gr=!1,ns&&(p=Nm(i,s,l,c)),Lm(t),p}function Lm(t){B.H=Zl;var i=Ft!==null&&Ft.next!==null;if(Ra=0,fn=Ft=xt=null,Vl=!1,So=0,is=null,i)throw Error(a(300));t===null||xn||(t=t.dependencies,t!==null&&Bl(t)&&(xn=!0))}function Nm(t,i,s,l){xt=t;var c=0;do{if(ns&&(is=null),So=0,ns=!1,25<=c)throw Error(a(301));if(c+=1,fn=Ft=null,t.updateQueue!=null){var p=t.updateQueue;p.lastEffect=null,p.events=null,p.stores=null,p.memoCache!=null&&(p.memoCache.index=0)}B.H=ry,p=i(s,l)}while(ns);return p}function $x(){var t=B.H,i=t.useState()[0];return i=typeof i.then=="function"?xo(i):i,t=t.useState()[0],(Ft!==null?Ft.memoizedState:null)!==t&&(xt.flags|=1024),i}function df(){var t=kl!==0;return kl=0,t}function pf(t,i,s){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~s}function mf(t){if(Vl){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}Vl=!1}Ra=0,fn=Ft=xt=null,ns=!1,So=kl=0,is=null}function Wn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fn===null?xt.memoizedState=fn=t:fn=fn.next=t,fn}function hn(){if(Ft===null){var t=xt.alternate;t=t!==null?t.memoizedState:null}else t=Ft.next;var i=fn===null?xt.memoizedState:fn.next;if(i!==null)fn=i,Ft=t;else{if(t===null)throw xt.alternate===null?Error(a(467)):Error(a(310));Ft=t,t={memoizedState:Ft.memoizedState,baseState:Ft.baseState,baseQueue:Ft.baseQueue,queue:Ft.queue,next:null},fn===null?xt.memoizedState=fn=t:fn=fn.next=t}return fn}function gf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function xo(t){var i=So;return So+=1,is===null&&(is=[]),t=Am(is,t,i),i=xt,(fn===null?i.memoizedState:fn.next)===null&&(i=i.alternate,B.H=i===null||i.memoizedState===null?pg:mg),t}function Xl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return xo(t);if(t.$$typeof===L)return Ln(t)}throw Error(a(438,String(t)))}function _f(t){var i=null,s=xt.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=xt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(c){return c.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=gf(),xt.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(t),l=0;l<t;l++)s[l]=R;return i.index++,s}function $i(t,i){return typeof i=="function"?i(t):i}function Wl(t){var i=hn();return vf(i,Ft,t)}function vf(t,i,s){var l=t.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=s;var c=t.baseQueue,p=l.pending;if(p!==null){if(c!==null){var M=c.next;c.next=p.next,p.next=M}i.baseQueue=c=p,l.pending=null}if(p=t.baseState,c===null)t.memoizedState=p;else{i=c.next;var A=M=null,z=null,te=i,pe=!1;do{var Ee=te.lane&-536870913;if(Ee!==te.lane?(Rt&Ee)===Ee:(Ra&Ee)===Ee){var re=te.revertLane;if(re===0)z!==null&&(z=z.next={lane:0,revertLane:0,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),Ee===$r&&(pe=!0);else if((Ra&re)===re){te=te.next,re===$r&&(pe=!0);continue}else Ee={lane:0,revertLane:te.revertLane,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},z===null?(A=z=Ee,M=p):z=z.next=Ee,xt.lanes|=re,Oa|=re;Ee=te.action,gr&&s(p,Ee),p=te.hasEagerState?te.eagerState:s(p,Ee)}else re={lane:Ee,revertLane:te.revertLane,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},z===null?(A=z=re,M=p):z=z.next=re,xt.lanes|=Ee,Oa|=Ee;te=te.next}while(te!==null&&te!==i);if(z===null?M=p:z.next=A,!$n(p,t.memoizedState)&&(xn=!0,pe&&(s=es,s!==null)))throw s;t.memoizedState=p,t.baseState=M,t.baseQueue=z,l.lastRenderedState=p}return c===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Sf(t){var i=hn(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=t;var l=s.dispatch,c=s.pending,p=i.memoizedState;if(c!==null){s.pending=null;var M=c=c.next;do p=t(p,M.action),M=M.next;while(M!==c);$n(p,i.memoizedState)||(xn=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),s.lastRenderedState=p}return[p,l]}function Om(t,i,s){var l=xt,c=hn(),p=Lt;if(p){if(s===void 0)throw Error(a(407));s=s()}else s=i();var M=!$n((Ft||c).memoizedState,s);M&&(c.memoizedState=s,xn=!0),c=c.queue;var A=Im.bind(null,l,c,t);if(yo(2048,8,A,[t]),c.getSnapshot!==i||M||fn!==null&&fn.memoizedState.tag&1){if(l.flags|=2048,as(9,ql(),Bm.bind(null,l,c,s,i),null),Wt===null)throw Error(a(349));p||(Ra&124)!==0||Pm(l,i,s)}return s}function Pm(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=xt.updateQueue,i===null?(i=gf(),xt.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function Bm(t,i,s,l){i.value=s,i.getSnapshot=l,Fm(i)&&zm(t)}function Im(t,i,s){return s(function(){Fm(i)&&zm(t)})}function Fm(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!$n(t,s)}catch{return!0}}function zm(t){var i=Zr(t,2);i!==null&&ri(i,t,2)}function xf(t){var i=Wn();if(typeof t=="function"){var s=t;if(t=s(),gr){fe(!0);try{s()}finally{fe(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:t},i}function Hm(t,i,s,l){return t.baseState=s,vf(t,Ft,typeof l=="function"?l:$i)}function ey(t,i,s,l,c){if(jl(t))throw Error(a(485));if(t=i.action,t!==null){var p={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){p.listeners.push(M)}};B.T!==null?s(!0):p.isTransition=!1,l(p),s=i.pending,s===null?(p.next=i.pending=p,Gm(i,p)):(p.next=s.next,i.pending=s.next=p)}}function Gm(t,i){var s=i.action,l=i.payload,c=t.state;if(i.isTransition){var p=B.T,M={};B.T=M;try{var A=s(c,l),z=B.S;z!==null&&z(M,A),Vm(t,i,A)}catch(te){yf(t,i,te)}finally{B.T=p}}else try{p=s(c,l),Vm(t,i,p)}catch(te){yf(t,i,te)}}function Vm(t,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){km(t,i,l)},function(l){return yf(t,i,l)}):km(t,i,s)}function km(t,i,s){i.status="fulfilled",i.value=s,Xm(i),t.state=s,i=t.pending,i!==null&&(s=i.next,s===i?t.pending=null:(s=s.next,i.next=s,Gm(t,s)))}function yf(t,i,s){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,Xm(i),i=i.next;while(i!==l)}t.action=null}function Xm(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function Wm(t,i){return i}function qm(t,i){if(Lt){var s=Wt.formState;if(s!==null){e:{var l=xt;if(Lt){if(nn){t:{for(var c=nn,p=Di;c.nodeType!==8;){if(!p){c=null;break t}if(c=xi(c.nextSibling),c===null){c=null;break t}}p=c.data,c=p==="F!"||p==="F"?c:null}if(c){nn=xi(c.nextSibling),l=c.data==="F!";break e}}hr(l)}l=!1}l&&(i=s[0])}}return s=Wn(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wm,lastRenderedState:i},s.queue=l,s=fg.bind(null,xt,l),l.dispatch=s,l=xf(!1),p=Af.bind(null,xt,!1,l.queue),l=Wn(),c={state:i,dispatch:null,action:t,pending:null},l.queue=c,s=ey.bind(null,xt,c,p,s),c.dispatch=s,l.memoizedState=t,[i,s,!1]}function Ym(t){var i=hn();return jm(i,Ft,t)}function jm(t,i,s){if(i=vf(t,i,Wm)[0],t=Wl($i)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=xo(i)}catch(M){throw M===po?zl:M}else l=i;i=hn();var c=i.queue,p=c.dispatch;return s!==i.memoizedState&&(xt.flags|=2048,as(9,ql(),ty.bind(null,c,s),null)),[l,p,t]}function ty(t,i){t.action=i}function Zm(t){var i=hn(),s=Ft;if(s!==null)return jm(i,s,t);hn(),i=i.memoizedState,s=hn();var l=s.queue.dispatch;return s.memoizedState=t,[i,l,!1]}function as(t,i,s,l){return t={tag:t,create:s,deps:l,inst:i,next:null},i=xt.updateQueue,i===null&&(i=gf(),xt.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,i.lastEffect=t),t}function ql(){return{destroy:void 0,resource:void 0}}function Km(){return hn().memoizedState}function Yl(t,i,s,l){var c=Wn();l=l===void 0?null:l,xt.flags|=t,c.memoizedState=as(1|i,ql(),s,l)}function yo(t,i,s,l){var c=hn();l=l===void 0?null:l;var p=c.memoizedState.inst;Ft!==null&&l!==null&&ff(l,Ft.memoizedState.deps)?c.memoizedState=as(i,p,s,l):(xt.flags|=t,c.memoizedState=as(1|i,p,s,l))}function Qm(t,i){Yl(8390656,8,t,i)}function Jm(t,i){yo(2048,8,t,i)}function $m(t,i){return yo(4,2,t,i)}function eg(t,i){return yo(4,4,t,i)}function tg(t,i){if(typeof i=="function"){t=t();var s=i(t);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function ng(t,i,s){s=s!=null?s.concat([t]):null,yo(4,4,tg.bind(null,i,t),s)}function Ef(){}function ig(t,i){var s=hn();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&ff(i,l[1])?l[0]:(s.memoizedState=[t,i],t)}function ag(t,i){var s=hn();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&ff(i,l[1]))return l[0];if(l=t(),gr){fe(!0);try{t()}finally{fe(!1)}}return s.memoizedState=[l,i],l}function Mf(t,i,s){return s===void 0||(Ra&1073741824)!==0?t.memoizedState=i:(t.memoizedState=s,t=o_(),xt.lanes|=t,Oa|=t,s)}function rg(t,i,s,l){return $n(s,i)?s:ts.current!==null?(t=Mf(t,s,l),$n(t,i)||(xn=!0),t):(Ra&42)===0?(xn=!0,t.memoizedState=s):(t=o_(),xt.lanes|=t,Oa|=t,i)}function sg(t,i,s,l,c){var p=Z.p;Z.p=p!==0&&8>p?p:8;var M=B.T,A={};B.T=A,Af(t,!1,i,s);try{var z=c(),te=B.S;if(te!==null&&te(A,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var pe=Qx(z,l);Eo(t,i,pe,ai(t))}else Eo(t,i,l,ai(t))}catch(Ee){Eo(t,i,{then:function(){},status:"rejected",reason:Ee},ai())}finally{Z.p=p,B.T=M}}function ny(){}function Tf(t,i,s,l){if(t.tag!==5)throw Error(a(476));var c=og(t).queue;sg(t,c,i,q,s===null?ny:function(){return lg(t),s(l)})}function og(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:q},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:s},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function lg(t){var i=og(t).next.queue;Eo(t,i,{},ai())}function bf(){return Ln(Ho)}function ug(){return hn().memoizedState}function cg(){return hn().memoizedState}function iy(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var s=ai();t=ba(s);var l=Aa(i,t,s);l!==null&&(ri(l,i,s),go(l,i,s)),i={cache:ef()},t.payload=i;return}i=i.return}}function ay(t,i,s){var l=ai();s={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},jl(t)?hg(i,s):(s=Xc(t,i,s,l),s!==null&&(ri(s,t,l),dg(s,i,l)))}function fg(t,i,s){var l=ai();Eo(t,i,s,l)}function Eo(t,i,s,l){var c={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(jl(t))hg(i,c);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var M=i.lastRenderedState,A=p(M,s);if(c.hasEagerState=!0,c.eagerState=A,$n(A,M))return Ul(t,i,c,0),Wt===null&&Dl(),!1}catch{}finally{}if(s=Xc(t,i,c,l),s!==null)return ri(s,t,l),dg(s,i,l),!0}return!1}function Af(t,i,s,l){if(l={lane:2,revertLane:ah(),action:l,hasEagerState:!1,eagerState:null,next:null},jl(t)){if(i)throw Error(a(479))}else i=Xc(t,s,l,2),i!==null&&ri(i,t,2)}function jl(t){var i=t.alternate;return t===xt||i!==null&&i===xt}function hg(t,i){ns=Vl=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function dg(t,i,s){if((s&4194048)!==0){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,He(t,s)}}var Zl={readContext:Ln,use:Xl,useCallback:on,useContext:on,useEffect:on,useImperativeHandle:on,useLayoutEffect:on,useInsertionEffect:on,useMemo:on,useReducer:on,useRef:on,useState:on,useDebugValue:on,useDeferredValue:on,useTransition:on,useSyncExternalStore:on,useId:on,useHostTransitionStatus:on,useFormState:on,useActionState:on,useOptimistic:on,useMemoCache:on,useCacheRefresh:on},pg={readContext:Ln,use:Xl,useCallback:function(t,i){return Wn().memoizedState=[t,i===void 0?null:i],t},useContext:Ln,useEffect:Qm,useImperativeHandle:function(t,i,s){s=s!=null?s.concat([t]):null,Yl(4194308,4,tg.bind(null,i,t),s)},useLayoutEffect:function(t,i){return Yl(4194308,4,t,i)},useInsertionEffect:function(t,i){Yl(4,2,t,i)},useMemo:function(t,i){var s=Wn();i=i===void 0?null:i;var l=t();if(gr){fe(!0);try{t()}finally{fe(!1)}}return s.memoizedState=[l,i],l},useReducer:function(t,i,s){var l=Wn();if(s!==void 0){var c=s(i);if(gr){fe(!0);try{s(i)}finally{fe(!1)}}}else c=i;return l.memoizedState=l.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},l.queue=t,t=t.dispatch=ay.bind(null,xt,t),[l.memoizedState,t]},useRef:function(t){var i=Wn();return t={current:t},i.memoizedState=t},useState:function(t){t=xf(t);var i=t.queue,s=fg.bind(null,xt,i);return i.dispatch=s,[t.memoizedState,s]},useDebugValue:Ef,useDeferredValue:function(t,i){var s=Wn();return Mf(s,t,i)},useTransition:function(){var t=xf(!1);return t=sg.bind(null,xt,t.queue,!0,!1),Wn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,s){var l=xt,c=Wn();if(Lt){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),Wt===null)throw Error(a(349));(Rt&124)!==0||Pm(l,i,s)}c.memoizedState=s;var p={value:s,getSnapshot:i};return c.queue=p,Qm(Im.bind(null,l,p,t),[t]),l.flags|=2048,as(9,ql(),Bm.bind(null,l,p,s,i),null),s},useId:function(){var t=Wn(),i=Wt.identifierPrefix;if(Lt){var s=Ki,l=Zi;s=(l&~(1<<32-Ge(l)-1)).toString(32)+s,i="«"+i+"R"+s,s=kl++,0<s&&(i+="H"+s.toString(32)),i+="»"}else s=Jx++,i="«"+i+"r"+s.toString(32)+"»";return t.memoizedState=i},useHostTransitionStatus:bf,useFormState:qm,useActionState:qm,useOptimistic:function(t){var i=Wn();i.memoizedState=i.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=Af.bind(null,xt,!0,s),s.dispatch=i,[t,i]},useMemoCache:_f,useCacheRefresh:function(){return Wn().memoizedState=iy.bind(null,xt)}},mg={readContext:Ln,use:Xl,useCallback:ig,useContext:Ln,useEffect:Jm,useImperativeHandle:ng,useInsertionEffect:$m,useLayoutEffect:eg,useMemo:ag,useReducer:Wl,useRef:Km,useState:function(){return Wl($i)},useDebugValue:Ef,useDeferredValue:function(t,i){var s=hn();return rg(s,Ft.memoizedState,t,i)},useTransition:function(){var t=Wl($i)[0],i=hn().memoizedState;return[typeof t=="boolean"?t:xo(t),i]},useSyncExternalStore:Om,useId:ug,useHostTransitionStatus:bf,useFormState:Ym,useActionState:Ym,useOptimistic:function(t,i){var s=hn();return Hm(s,Ft,t,i)},useMemoCache:_f,useCacheRefresh:cg},ry={readContext:Ln,use:Xl,useCallback:ig,useContext:Ln,useEffect:Jm,useImperativeHandle:ng,useInsertionEffect:$m,useLayoutEffect:eg,useMemo:ag,useReducer:Sf,useRef:Km,useState:function(){return Sf($i)},useDebugValue:Ef,useDeferredValue:function(t,i){var s=hn();return Ft===null?Mf(s,t,i):rg(s,Ft.memoizedState,t,i)},useTransition:function(){var t=Sf($i)[0],i=hn().memoizedState;return[typeof t=="boolean"?t:xo(t),i]},useSyncExternalStore:Om,useId:ug,useHostTransitionStatus:bf,useFormState:Zm,useActionState:Zm,useOptimistic:function(t,i){var s=hn();return Ft!==null?Hm(s,Ft,t,i):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:_f,useCacheRefresh:cg},rs=null,Mo=0;function Kl(t){var i=Mo;return Mo+=1,rs===null&&(rs=[]),Am(rs,t,i)}function To(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function Ql(t,i){throw i.$$typeof===_?Error(a(525)):(t=Object.prototype.toString.call(i),Error(a(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function gg(t){var i=t._init;return i(t._payload)}function _g(t){function i(j,W){if(t){var $=j.deletions;$===null?(j.deletions=[W],j.flags|=16):$.push(W)}}function s(j,W){if(!t)return null;for(;W!==null;)i(j,W),W=W.sibling;return null}function l(j){for(var W=new Map;j!==null;)j.key!==null?W.set(j.key,j):W.set(j.index,j),j=j.sibling;return W}function c(j,W){return j=ji(j,W),j.index=0,j.sibling=null,j}function p(j,W,$){return j.index=$,t?($=j.alternate,$!==null?($=$.index,$<W?(j.flags|=67108866,W):$):(j.flags|=67108866,W)):(j.flags|=1048576,W)}function M(j){return t&&j.alternate===null&&(j.flags|=67108866),j}function A(j,W,$,_e){return W===null||W.tag!==6?(W=qc($,j.mode,_e),W.return=j,W):(W=c(W,$),W.return=j,W)}function z(j,W,$,_e){var qe=$.type;return qe===E?pe(j,W,$.props.children,_e,$.key):W!==null&&(W.elementType===qe||typeof qe=="object"&&qe!==null&&qe.$$typeof===X&&gg(qe)===W.type)?(W=c(W,$.props),To(W,$),W.return=j,W):(W=Nl($.type,$.key,$.props,null,j.mode,_e),To(W,$),W.return=j,W)}function te(j,W,$,_e){return W===null||W.tag!==4||W.stateNode.containerInfo!==$.containerInfo||W.stateNode.implementation!==$.implementation?(W=Yc($,j.mode,_e),W.return=j,W):(W=c(W,$.children||[]),W.return=j,W)}function pe(j,W,$,_e,qe){return W===null||W.tag!==7?(W=lr($,j.mode,_e,qe),W.return=j,W):(W=c(W,$),W.return=j,W)}function Ee(j,W,$){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=qc(""+W,j.mode,$),W.return=j,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case S:return $=Nl(W.type,W.key,W.props,null,j.mode,$),To($,W),$.return=j,$;case y:return W=Yc(W,j.mode,$),W.return=j,W;case X:var _e=W._init;return W=_e(W._payload),Ee(j,W,$)}if(he(W)||J(W))return W=lr(W,j.mode,$,null),W.return=j,W;if(typeof W.then=="function")return Ee(j,Kl(W),$);if(W.$$typeof===L)return Ee(j,Il(j,W),$);Ql(j,W)}return null}function re(j,W,$,_e){var qe=W!==null?W.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return qe!==null?null:A(j,W,""+$,_e);if(typeof $=="object"&&$!==null){switch($.$$typeof){case S:return $.key===qe?z(j,W,$,_e):null;case y:return $.key===qe?te(j,W,$,_e):null;case X:return qe=$._init,$=qe($._payload),re(j,W,$,_e)}if(he($)||J($))return qe!==null?null:pe(j,W,$,_e,null);if(typeof $.then=="function")return re(j,W,Kl($),_e);if($.$$typeof===L)return re(j,W,Il(j,$),_e);Ql(j,$)}return null}function se(j,W,$,_e,qe){if(typeof _e=="string"&&_e!==""||typeof _e=="number"||typeof _e=="bigint")return j=j.get($)||null,A(W,j,""+_e,qe);if(typeof _e=="object"&&_e!==null){switch(_e.$$typeof){case S:return j=j.get(_e.key===null?$:_e.key)||null,z(W,j,_e,qe);case y:return j=j.get(_e.key===null?$:_e.key)||null,te(W,j,_e,qe);case X:var yt=_e._init;return _e=yt(_e._payload),se(j,W,$,_e,qe)}if(he(_e)||J(_e))return j=j.get($)||null,pe(W,j,_e,qe,null);if(typeof _e.then=="function")return se(j,W,$,Kl(_e),qe);if(_e.$$typeof===L)return se(j,W,$,Il(W,_e),qe);Ql(W,_e)}return null}function lt(j,W,$,_e){for(var qe=null,yt=null,$e=W,ot=W=0,En=null;$e!==null&&ot<$.length;ot++){$e.index>ot?(En=$e,$e=null):En=$e.sibling;var Ct=re(j,$e,$[ot],_e);if(Ct===null){$e===null&&($e=En);break}t&&$e&&Ct.alternate===null&&i(j,$e),W=p(Ct,W,ot),yt===null?qe=Ct:yt.sibling=Ct,yt=Ct,$e=En}if(ot===$.length)return s(j,$e),Lt&&cr(j,ot),qe;if($e===null){for(;ot<$.length;ot++)$e=Ee(j,$[ot],_e),$e!==null&&(W=p($e,W,ot),yt===null?qe=$e:yt.sibling=$e,yt=$e);return Lt&&cr(j,ot),qe}for($e=l($e);ot<$.length;ot++)En=se($e,j,ot,$[ot],_e),En!==null&&(t&&En.alternate!==null&&$e.delete(En.key===null?ot:En.key),W=p(En,W,ot),yt===null?qe=En:yt.sibling=En,yt=En);return t&&$e.forEach(function(ka){return i(j,ka)}),Lt&&cr(j,ot),qe}function rt(j,W,$,_e){if($==null)throw Error(a(151));for(var qe=null,yt=null,$e=W,ot=W=0,En=null,Ct=$.next();$e!==null&&!Ct.done;ot++,Ct=$.next()){$e.index>ot?(En=$e,$e=null):En=$e.sibling;var ka=re(j,$e,Ct.value,_e);if(ka===null){$e===null&&($e=En);break}t&&$e&&ka.alternate===null&&i(j,$e),W=p(ka,W,ot),yt===null?qe=ka:yt.sibling=ka,yt=ka,$e=En}if(Ct.done)return s(j,$e),Lt&&cr(j,ot),qe;if($e===null){for(;!Ct.done;ot++,Ct=$.next())Ct=Ee(j,Ct.value,_e),Ct!==null&&(W=p(Ct,W,ot),yt===null?qe=Ct:yt.sibling=Ct,yt=Ct);return Lt&&cr(j,ot),qe}for($e=l($e);!Ct.done;ot++,Ct=$.next())Ct=se($e,j,ot,Ct.value,_e),Ct!==null&&(t&&Ct.alternate!==null&&$e.delete(Ct.key===null?ot:Ct.key),W=p(Ct,W,ot),yt===null?qe=Ct:yt.sibling=Ct,yt=Ct);return t&&$e.forEach(function(sE){return i(j,sE)}),Lt&&cr(j,ot),qe}function Ht(j,W,$,_e){if(typeof $=="object"&&$!==null&&$.type===E&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case S:e:{for(var qe=$.key;W!==null;){if(W.key===qe){if(qe=$.type,qe===E){if(W.tag===7){s(j,W.sibling),_e=c(W,$.props.children),_e.return=j,j=_e;break e}}else if(W.elementType===qe||typeof qe=="object"&&qe!==null&&qe.$$typeof===X&&gg(qe)===W.type){s(j,W.sibling),_e=c(W,$.props),To(_e,$),_e.return=j,j=_e;break e}s(j,W);break}else i(j,W);W=W.sibling}$.type===E?(_e=lr($.props.children,j.mode,_e,$.key),_e.return=j,j=_e):(_e=Nl($.type,$.key,$.props,null,j.mode,_e),To(_e,$),_e.return=j,j=_e)}return M(j);case y:e:{for(qe=$.key;W!==null;){if(W.key===qe)if(W.tag===4&&W.stateNode.containerInfo===$.containerInfo&&W.stateNode.implementation===$.implementation){s(j,W.sibling),_e=c(W,$.children||[]),_e.return=j,j=_e;break e}else{s(j,W);break}else i(j,W);W=W.sibling}_e=Yc($,j.mode,_e),_e.return=j,j=_e}return M(j);case X:return qe=$._init,$=qe($._payload),Ht(j,W,$,_e)}if(he($))return lt(j,W,$,_e);if(J($)){if(qe=J($),typeof qe!="function")throw Error(a(150));return $=qe.call($),rt(j,W,$,_e)}if(typeof $.then=="function")return Ht(j,W,Kl($),_e);if($.$$typeof===L)return Ht(j,W,Il(j,$),_e);Ql(j,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,W!==null&&W.tag===6?(s(j,W.sibling),_e=c(W,$),_e.return=j,j=_e):(s(j,W),_e=qc($,j.mode,_e),_e.return=j,j=_e),M(j)):s(j,W)}return function(j,W,$,_e){try{Mo=0;var qe=Ht(j,W,$,_e);return rs=null,qe}catch($e){if($e===po||$e===zl)throw $e;var yt=ei(29,$e,null,j.mode);return yt.lanes=_e,yt.return=j,yt}finally{}}}var ss=_g(!0),vg=_g(!1),hi=Q(null),Ui=null;function wa(t){var i=t.alternate;be(gn,gn.current&1),be(hi,t),Ui===null&&(i===null||ts.current!==null||i.memoizedState!==null)&&(Ui=t)}function Sg(t){if(t.tag===22){if(be(gn,gn.current),be(hi,t),Ui===null){var i=t.alternate;i!==null&&i.memoizedState!==null&&(Ui=t)}}else Ca()}function Ca(){be(gn,gn.current),be(hi,hi.current)}function ea(t){ve(hi),Ui===t&&(Ui=null),ve(gn)}var gn=Q(0);function Jl(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||gh(s)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function Rf(t,i,s,l){i=t.memoizedState,s=s(l,i),s=s==null?i:g({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var wf={enqueueSetState:function(t,i,s){t=t._reactInternals;var l=ai(),c=ba(l);c.payload=i,s!=null&&(c.callback=s),i=Aa(t,c,l),i!==null&&(ri(i,t,l),go(i,t,l))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var l=ai(),c=ba(l);c.tag=1,c.payload=i,s!=null&&(c.callback=s),i=Aa(t,c,l),i!==null&&(ri(i,t,l),go(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=ai(),l=ba(s);l.tag=2,i!=null&&(l.callback=i),i=Aa(t,l,s),i!==null&&(ri(i,t,s),go(i,t,s))}};function xg(t,i,s,l,c,p,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,p,M):i.prototype&&i.prototype.isPureReactComponent?!ro(s,l)||!ro(c,p):!0}function yg(t,i,s,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==t&&wf.enqueueReplaceState(i,i.state,null)}function _r(t,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(t=t.defaultProps){s===i&&(s=g({},s));for(var c in t)s[c]===void 0&&(s[c]=t[c])}return s}var $l=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Eg(t){$l(t)}function Mg(t){console.error(t)}function Tg(t){$l(t)}function eu(t,i){try{var s=t.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function bg(t,i,s){try{var l=t.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Cf(t,i,s){return s=ba(s),s.tag=3,s.payload={element:null},s.callback=function(){eu(t,i)},s}function Ag(t){return t=ba(t),t.tag=3,t}function Rg(t,i,s,l){var c=s.type.getDerivedStateFromError;if(typeof c=="function"){var p=l.value;t.payload=function(){return c(p)},t.callback=function(){bg(i,s,l)}}var M=s.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(t.callback=function(){bg(i,s,l),typeof c!="function"&&(Pa===null?Pa=new Set([this]):Pa.add(this));var A=l.stack;this.componentDidCatch(l.value,{componentStack:A!==null?A:""})})}function sy(t,i,s,l,c){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&co(i,s,c,!0),s=hi.current,s!==null){switch(s.tag){case 13:return Ui===null?$f():s.alternate===null&&an===0&&(an=3),s.flags&=-257,s.flags|=65536,s.lanes=c,l===af?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),th(t,l,c)),!1;case 22:return s.flags|=65536,l===af?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),th(t,l,c)),!1}throw Error(a(435,s.tag))}return th(t,l,c),$f(),!1}if(Lt)return i=hi.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=c,l!==Kc&&(t=Error(a(422),{cause:l}),uo(li(t,s)))):(l!==Kc&&(i=Error(a(423),{cause:l}),uo(li(i,s))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,l=li(l,s),c=Cf(t.stateNode,l,c),of(t,c),an!==4&&(an=2)),!1;var p=Error(a(520),{cause:l});if(p=li(p,s),Uo===null?Uo=[p]:Uo.push(p),an!==4&&(an=2),i===null)return!0;l=li(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,t=c&-c,s.lanes|=t,t=Cf(s.stateNode,l,t),of(s,t),!1;case 1:if(i=s.type,p=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Pa===null||!Pa.has(p))))return s.flags|=65536,c&=-c,s.lanes|=c,c=Ag(c),Rg(c,t,s,l),of(s,c),!1}s=s.return}while(s!==null);return!1}var wg=Error(a(461)),xn=!1;function An(t,i,s,l){i.child=t===null?vg(i,null,s,l):ss(i,t.child,s,l)}function Cg(t,i,s,l,c){s=s.render;var p=i.ref;if("ref"in l){var M={};for(var A in l)A!=="ref"&&(M[A]=l[A])}else M=l;return pr(i),l=hf(t,i,s,M,p,c),A=df(),t!==null&&!xn?(pf(t,i,c),ta(t,i,c)):(Lt&&A&&jc(i),i.flags|=1,An(t,i,l,c),i.child)}function Dg(t,i,s,l,c){if(t===null){var p=s.type;return typeof p=="function"&&!Wc(p)&&p.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=p,Ug(t,i,p,l,c)):(t=Nl(s.type,null,l,i,i.mode,c),t.ref=i.ref,t.return=i,i.child=t)}if(p=t.child,!If(t,c)){var M=p.memoizedProps;if(s=s.compare,s=s!==null?s:ro,s(M,l)&&t.ref===i.ref)return ta(t,i,c)}return i.flags|=1,t=ji(p,l),t.ref=i.ref,t.return=i,i.child=t}function Ug(t,i,s,l,c){if(t!==null){var p=t.memoizedProps;if(ro(p,l)&&t.ref===i.ref)if(xn=!1,i.pendingProps=l=p,If(t,c))(t.flags&131072)!==0&&(xn=!0);else return i.lanes=t.lanes,ta(t,i,c)}return Df(t,i,s,l,c)}function Lg(t,i,s){var l=i.pendingProps,c=l.children,p=t!==null?t.memoizedState:null;if(l.mode==="hidden"){if((i.flags&128)!==0){if(l=p!==null?p.baseLanes|s:s,t!==null){for(c=i.child=t.child,p=0;c!==null;)p=p|c.lanes|c.childLanes,c=c.sibling;i.childLanes=p&~l}else i.childLanes=0,i.child=null;return Ng(t,i,l,s)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&Fl(i,p!==null?p.cachePool:null),p!==null?Um(i,p):uf(),Sg(i);else return i.lanes=i.childLanes=536870912,Ng(t,i,p!==null?p.baseLanes|s:s,s)}else p!==null?(Fl(i,p.cachePool),Um(i,p),Ca(),i.memoizedState=null):(t!==null&&Fl(i,null),uf(),Ca());return An(t,i,c,s),i.child}function Ng(t,i,s,l){var c=nf();return c=c===null?null:{parent:mn._currentValue,pool:c},i.memoizedState={baseLanes:s,cachePool:c},t!==null&&Fl(i,null),uf(),Sg(i),t!==null&&co(t,i,l,!0),null}function tu(t,i){var s=i.ref;if(s===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(t===null||t.ref!==s)&&(i.flags|=4194816)}}function Df(t,i,s,l,c){return pr(i),s=hf(t,i,s,l,void 0,c),l=df(),t!==null&&!xn?(pf(t,i,c),ta(t,i,c)):(Lt&&l&&jc(i),i.flags|=1,An(t,i,s,c),i.child)}function Og(t,i,s,l,c,p){return pr(i),i.updateQueue=null,s=Nm(i,l,s,c),Lm(t),l=df(),t!==null&&!xn?(pf(t,i,p),ta(t,i,p)):(Lt&&l&&jc(i),i.flags|=1,An(t,i,s,p),i.child)}function Pg(t,i,s,l,c){if(pr(i),i.stateNode===null){var p=Kr,M=s.contextType;typeof M=="object"&&M!==null&&(p=Ln(M)),p=new s(l,p),i.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,p.updater=wf,i.stateNode=p,p._reactInternals=i,p=i.stateNode,p.props=l,p.state=i.memoizedState,p.refs={},rf(i),M=s.contextType,p.context=typeof M=="object"&&M!==null?Ln(M):Kr,p.state=i.memoizedState,M=s.getDerivedStateFromProps,typeof M=="function"&&(Rf(i,s,M,l),p.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(M=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),M!==p.state&&wf.enqueueReplaceState(p,p.state,null),vo(i,l,p,c),_o(),p.state=i.memoizedState),typeof p.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(t===null){p=i.stateNode;var A=i.memoizedProps,z=_r(s,A);p.props=z;var te=p.context,pe=s.contextType;M=Kr,typeof pe=="object"&&pe!==null&&(M=Ln(pe));var Ee=s.getDerivedStateFromProps;pe=typeof Ee=="function"||typeof p.getSnapshotBeforeUpdate=="function",A=i.pendingProps!==A,pe||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(A||te!==M)&&yg(i,p,l,M),Ta=!1;var re=i.memoizedState;p.state=re,vo(i,l,p,c),_o(),te=i.memoizedState,A||re!==te||Ta?(typeof Ee=="function"&&(Rf(i,s,Ee,l),te=i.memoizedState),(z=Ta||xg(i,s,z,l,re,te,M))?(pe||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(i.flags|=4194308)):(typeof p.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=te),p.props=l,p.state=te,p.context=M,l=z):(typeof p.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{p=i.stateNode,sf(t,i),M=i.memoizedProps,pe=_r(s,M),p.props=pe,Ee=i.pendingProps,re=p.context,te=s.contextType,z=Kr,typeof te=="object"&&te!==null&&(z=Ln(te)),A=s.getDerivedStateFromProps,(te=typeof A=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(M!==Ee||re!==z)&&yg(i,p,l,z),Ta=!1,re=i.memoizedState,p.state=re,vo(i,l,p,c),_o();var se=i.memoizedState;M!==Ee||re!==se||Ta||t!==null&&t.dependencies!==null&&Bl(t.dependencies)?(typeof A=="function"&&(Rf(i,s,A,l),se=i.memoizedState),(pe=Ta||xg(i,s,pe,l,re,se,z)||t!==null&&t.dependencies!==null&&Bl(t.dependencies))?(te||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(l,se,z),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(l,se,z)),typeof p.componentDidUpdate=="function"&&(i.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof p.componentDidUpdate!="function"||M===t.memoizedProps&&re===t.memoizedState||(i.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||M===t.memoizedProps&&re===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=se),p.props=l,p.state=se,p.context=z,l=pe):(typeof p.componentDidUpdate!="function"||M===t.memoizedProps&&re===t.memoizedState||(i.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||M===t.memoizedProps&&re===t.memoizedState||(i.flags|=1024),l=!1)}return p=l,tu(t,i),l=(i.flags&128)!==0,p||l?(p=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:p.render(),i.flags|=1,t!==null&&l?(i.child=ss(i,t.child,null,c),i.child=ss(i,null,s,c)):An(t,i,s,c),i.memoizedState=p.state,t=i.child):t=ta(t,i,c),t}function Bg(t,i,s,l){return lo(),i.flags|=256,An(t,i,s,l),i.child}var Uf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Lf(t){return{baseLanes:t,cachePool:Mm()}}function Nf(t,i,s){return t=t!==null?t.childLanes&~s:0,i&&(t|=di),t}function Ig(t,i,s){var l=i.pendingProps,c=!1,p=(i.flags&128)!==0,M;if((M=p)||(M=t!==null&&t.memoizedState===null?!1:(gn.current&2)!==0),M&&(c=!0,i.flags&=-129),M=(i.flags&32)!==0,i.flags&=-33,t===null){if(Lt){if(c?wa(i):Ca(),Lt){var A=nn,z;if(z=A){e:{for(z=A,A=Di;z.nodeType!==8;){if(!A){A=null;break e}if(z=xi(z.nextSibling),z===null){A=null;break e}}A=z}A!==null?(i.memoizedState={dehydrated:A,treeContext:ur!==null?{id:Zi,overflow:Ki}:null,retryLane:536870912,hydrationErrors:null},z=ei(18,null,null,0),z.stateNode=A,z.return=i,i.child=z,Hn=i,nn=null,z=!0):z=!1}z||hr(i)}if(A=i.memoizedState,A!==null&&(A=A.dehydrated,A!==null))return gh(A)?i.lanes=32:i.lanes=536870912,null;ea(i)}return A=l.children,l=l.fallback,c?(Ca(),c=i.mode,A=nu({mode:"hidden",children:A},c),l=lr(l,c,s,null),A.return=i,l.return=i,A.sibling=l,i.child=A,c=i.child,c.memoizedState=Lf(s),c.childLanes=Nf(t,M,s),i.memoizedState=Uf,l):(wa(i),Of(i,A))}if(z=t.memoizedState,z!==null&&(A=z.dehydrated,A!==null)){if(p)i.flags&256?(wa(i),i.flags&=-257,i=Pf(t,i,s)):i.memoizedState!==null?(Ca(),i.child=t.child,i.flags|=128,i=null):(Ca(),c=l.fallback,A=i.mode,l=nu({mode:"visible",children:l.children},A),c=lr(c,A,s,null),c.flags|=2,l.return=i,c.return=i,l.sibling=c,i.child=l,ss(i,t.child,null,s),l=i.child,l.memoizedState=Lf(s),l.childLanes=Nf(t,M,s),i.memoizedState=Uf,i=c);else if(wa(i),gh(A)){if(M=A.nextSibling&&A.nextSibling.dataset,M)var te=M.dgst;M=te,l=Error(a(419)),l.stack="",l.digest=M,uo({value:l,source:null,stack:null}),i=Pf(t,i,s)}else if(xn||co(t,i,s,!1),M=(s&t.childLanes)!==0,xn||M){if(M=Wt,M!==null&&(l=s&-s,l=(l&42)!==0?1:Je(l),l=(l&(M.suspendedLanes|s))!==0?0:l,l!==0&&l!==z.retryLane))throw z.retryLane=l,Zr(t,l),ri(M,t,l),wg;A.data==="$?"||$f(),i=Pf(t,i,s)}else A.data==="$?"?(i.flags|=192,i.child=t.child,i=null):(t=z.treeContext,nn=xi(A.nextSibling),Hn=i,Lt=!0,fr=null,Di=!1,t!==null&&(ci[fi++]=Zi,ci[fi++]=Ki,ci[fi++]=ur,Zi=t.id,Ki=t.overflow,ur=i),i=Of(i,l.children),i.flags|=4096);return i}return c?(Ca(),c=l.fallback,A=i.mode,z=t.child,te=z.sibling,l=ji(z,{mode:"hidden",children:l.children}),l.subtreeFlags=z.subtreeFlags&65011712,te!==null?c=ji(te,c):(c=lr(c,A,s,null),c.flags|=2),c.return=i,l.return=i,l.sibling=c,i.child=l,l=c,c=i.child,A=t.child.memoizedState,A===null?A=Lf(s):(z=A.cachePool,z!==null?(te=mn._currentValue,z=z.parent!==te?{parent:te,pool:te}:z):z=Mm(),A={baseLanes:A.baseLanes|s,cachePool:z}),c.memoizedState=A,c.childLanes=Nf(t,M,s),i.memoizedState=Uf,l):(wa(i),s=t.child,t=s.sibling,s=ji(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,t!==null&&(M=i.deletions,M===null?(i.deletions=[t],i.flags|=16):M.push(t)),i.child=s,i.memoizedState=null,s)}function Of(t,i){return i=nu({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function nu(t,i){return t=ei(22,t,null,i),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Pf(t,i,s){return ss(i,t.child,null,s),t=Of(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Fg(t,i,s){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Jc(t.return,i,s)}function Bf(t,i,s,l,c){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:c}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=l,p.tail=s,p.tailMode=c)}function zg(t,i,s){var l=i.pendingProps,c=l.revealOrder,p=l.tail;if(An(t,i,l.children,s),l=gn.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Fg(t,s,i);else if(t.tag===19)Fg(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}switch(be(gn,l),c){case"forwards":for(s=i.child,c=null;s!==null;)t=s.alternate,t!==null&&Jl(t)===null&&(c=s),s=s.sibling;s=c,s===null?(c=i.child,i.child=null):(c=s.sibling,s.sibling=null),Bf(i,!1,c,s,p);break;case"backwards":for(s=null,c=i.child,i.child=null;c!==null;){if(t=c.alternate,t!==null&&Jl(t)===null){i.child=c;break}t=c.sibling,c.sibling=s,s=c,c=t}Bf(i,!0,s,null,p);break;case"together":Bf(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ta(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),Oa|=i.lanes,(s&i.childLanes)===0)if(t!==null){if(co(t,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(a(153));if(i.child!==null){for(t=i.child,s=ji(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=ji(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function If(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&Bl(t)))}function oy(t,i,s){switch(i.tag){case 3:Ue(i,i.stateNode.containerInfo),Ma(i,mn,t.memoizedState.cache),lo();break;case 27:case 5:je(i);break;case 4:Ue(i,i.stateNode.containerInfo);break;case 10:Ma(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(wa(i),i.flags|=128,null):(s&i.child.childLanes)!==0?Ig(t,i,s):(wa(i),t=ta(t,i,s),t!==null?t.sibling:null);wa(i);break;case 19:var c=(t.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||(co(t,i,s,!1),l=(s&i.childLanes)!==0),c){if(l)return zg(t,i,s);i.flags|=128}if(c=i.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),be(gn,gn.current),l)break;return null;case 22:case 23:return i.lanes=0,Lg(t,i,s);case 24:Ma(i,mn,t.memoizedState.cache)}return ta(t,i,s)}function Hg(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps)xn=!0;else{if(!If(t,s)&&(i.flags&128)===0)return xn=!1,oy(t,i,s);xn=(t.flags&131072)!==0}else xn=!1,Lt&&(i.flags&1048576)!==0&&gm(i,Pl,i.index);switch(i.lanes=0,i.tag){case 16:e:{t=i.pendingProps;var l=i.elementType,c=l._init;if(l=c(l._payload),i.type=l,typeof l=="function")Wc(l)?(t=_r(l,t),i.tag=1,i=Pg(null,i,l,t,s)):(i.tag=0,i=Df(null,i,l,t,s));else{if(l!=null){if(c=l.$$typeof,c===C){i.tag=11,i=Cg(null,i,l,t,s);break e}else if(c===I){i.tag=14,i=Dg(null,i,l,t,s);break e}}throw i=me(l)||l,Error(a(306,i,""))}}return i;case 0:return Df(t,i,i.type,i.pendingProps,s);case 1:return l=i.type,c=_r(l,i.pendingProps),Pg(t,i,l,c,s);case 3:e:{if(Ue(i,i.stateNode.containerInfo),t===null)throw Error(a(387));l=i.pendingProps;var p=i.memoizedState;c=p.element,sf(t,i),vo(i,l,null,s);var M=i.memoizedState;if(l=M.cache,Ma(i,mn,l),l!==p.cache&&$c(i,[mn],s,!0),_o(),l=M.element,p.isDehydrated)if(p={element:l,isDehydrated:!1,cache:M.cache},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){i=Bg(t,i,l,s);break e}else if(l!==c){c=li(Error(a(424)),i),uo(c),i=Bg(t,i,l,s);break e}else{switch(t=i.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(nn=xi(t.firstChild),Hn=i,Lt=!0,fr=null,Di=!0,s=vg(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(lo(),l===c){i=ta(t,i,s);break e}An(t,i,l,s)}i=i.child}return i;case 26:return tu(t,i),t===null?(s=X_(i.type,null,i.pendingProps,null))?i.memoizedState=s:Lt||(s=i.type,t=i.pendingProps,l=gu(ne.current).createElement(s),l[pn]=i,l[en]=t,wn(l,s,t),cn(l),i.stateNode=l):i.memoizedState=X_(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return je(i),t===null&&Lt&&(l=i.stateNode=G_(i.type,i.pendingProps,ne.current),Hn=i,Di=!0,c=nn,Fa(i.type)?(_h=c,nn=xi(l.firstChild)):nn=c),An(t,i,i.pendingProps.children,s),tu(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&Lt&&((c=l=nn)&&(l=Py(l,i.type,i.pendingProps,Di),l!==null?(i.stateNode=l,Hn=i,nn=xi(l.firstChild),Di=!1,c=!0):c=!1),c||hr(i)),je(i),c=i.type,p=i.pendingProps,M=t!==null?t.memoizedProps:null,l=p.children,dh(c,p)?l=null:M!==null&&dh(c,M)&&(i.flags|=32),i.memoizedState!==null&&(c=hf(t,i,$x,null,null,s),Ho._currentValue=c),tu(t,i),An(t,i,l,s),i.child;case 6:return t===null&&Lt&&((t=s=nn)&&(s=By(s,i.pendingProps,Di),s!==null?(i.stateNode=s,Hn=i,nn=null,t=!0):t=!1),t||hr(i)),null;case 13:return Ig(t,i,s);case 4:return Ue(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=ss(i,null,l,s):An(t,i,l,s),i.child;case 11:return Cg(t,i,i.type,i.pendingProps,s);case 7:return An(t,i,i.pendingProps,s),i.child;case 8:return An(t,i,i.pendingProps.children,s),i.child;case 12:return An(t,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,Ma(i,i.type,l.value),An(t,i,l.children,s),i.child;case 9:return c=i.type._context,l=i.pendingProps.children,pr(i),c=Ln(c),l=l(c),i.flags|=1,An(t,i,l,s),i.child;case 14:return Dg(t,i,i.type,i.pendingProps,s);case 15:return Ug(t,i,i.type,i.pendingProps,s);case 19:return zg(t,i,s);case 31:return l=i.pendingProps,s=i.mode,l={mode:l.mode,children:l.children},t===null?(s=nu(l,s),s.ref=i.ref,i.child=s,s.return=i,i=s):(s=ji(t.child,l),s.ref=i.ref,i.child=s,s.return=i,i=s),i;case 22:return Lg(t,i,s);case 24:return pr(i),l=Ln(mn),t===null?(c=nf(),c===null&&(c=Wt,p=ef(),c.pooledCache=p,p.refCount++,p!==null&&(c.pooledCacheLanes|=s),c=p),i.memoizedState={parent:l,cache:c},rf(i),Ma(i,mn,c)):((t.lanes&s)!==0&&(sf(t,i),vo(i,null,null,s),_o()),c=t.memoizedState,p=i.memoizedState,c.parent!==l?(c={parent:l,cache:l},i.memoizedState=c,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=c),Ma(i,mn,l)):(l=p.cache,Ma(i,mn,l),l!==c.cache&&$c(i,[mn],s,!0))),An(t,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function na(t){t.flags|=4}function Gg(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Z_(i)){if(i=hi.current,i!==null&&((Rt&4194048)===Rt?Ui!==null:(Rt&62914560)!==Rt&&(Rt&536870912)===0||i!==Ui))throw mo=af,Tm;t.flags|=8192}}function iu(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?Me():536870912,t.lanes|=i,cs|=i)}function bo(t,i){if(!Lt)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function Jt(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(i)for(var c=t.child;c!==null;)s|=c.lanes|c.childLanes,l|=c.subtreeFlags&65011712,l|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)s|=c.lanes|c.childLanes,l|=c.subtreeFlags,l|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=l,t.childLanes=s,i}function ly(t,i,s){var l=i.pendingProps;switch(Zc(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Jt(i),null;case 1:return Jt(i),null;case 3:return s=i.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),Ji(mn),et(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(oo(i)?na(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Sm())),Jt(i),null;case 26:return s=i.memoizedState,t===null?(na(i),s!==null?(Jt(i),Gg(i,s)):(Jt(i),i.flags&=-16777217)):s?s!==t.memoizedState?(na(i),Jt(i),Gg(i,s)):(Jt(i),i.flags&=-16777217):(t.memoizedProps!==l&&na(i),Jt(i),i.flags&=-16777217),null;case 27:dt(i),s=ne.current;var c=i.type;if(t!==null&&i.stateNode!=null)t.memoizedProps!==l&&na(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return Jt(i),null}t=Ne.current,oo(i)?_m(i):(t=G_(c,l,s),i.stateNode=t,na(i))}return Jt(i),null;case 5:if(dt(i),s=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&na(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return Jt(i),null}if(t=Ne.current,oo(i))_m(i);else{switch(c=gu(ne.current),t){case 1:t=c.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:t=c.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":t=c.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":t=c.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":t=c.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof l.is=="string"?c.createElement("select",{is:l.is}):c.createElement("select"),l.multiple?t.multiple=!0:l.size&&(t.size=l.size);break;default:t=typeof l.is=="string"?c.createElement(s,{is:l.is}):c.createElement(s)}}t[pn]=i,t[en]=l;e:for(c=i.child;c!==null;){if(c.tag===5||c.tag===6)t.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===i)break e;for(;c.sibling===null;){if(c.return===null||c.return===i)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}i.stateNode=t;e:switch(wn(t,s,l),s){case"button":case"input":case"select":case"textarea":t=!!l.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&na(i)}}return Jt(i),i.flags&=-16777217,null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==l&&na(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(a(166));if(t=ne.current,oo(i)){if(t=i.stateNode,s=i.memoizedProps,l=null,c=Hn,c!==null)switch(c.tag){case 27:case 5:l=c.memoizedProps}t[pn]=i,t=!!(t.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||O_(t.nodeValue,s)),t||hr(i)}else t=gu(t).createTextNode(l),t[pn]=i,i.stateNode=t}return Jt(i),null;case 13:if(l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=oo(i),l!==null&&l.dehydrated!==null){if(t===null){if(!c)throw Error(a(318));if(c=i.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(a(317));c[pn]=i}else lo(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Jt(i),c=!1}else c=Sm(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return i.flags&256?(ea(i),i):(ea(i),null)}if(ea(i),(i.flags&128)!==0)return i.lanes=s,i;if(s=l!==null,t=t!==null&&t.memoizedState!==null,s){l=i.child,c=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(c=l.alternate.memoizedState.cachePool.pool);var p=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(p=l.memoizedState.cachePool.pool),p!==c&&(l.flags|=2048)}return s!==t&&s&&(i.child.flags|=8192),iu(i,i.updateQueue),Jt(i),null;case 4:return et(),t===null&&lh(i.stateNode.containerInfo),Jt(i),null;case 10:return Ji(i.type),Jt(i),null;case 19:if(ve(gn),c=i.memoizedState,c===null)return Jt(i),null;if(l=(i.flags&128)!==0,p=c.rendering,p===null)if(l)bo(c,!1);else{if(an!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(p=Jl(t),p!==null){for(i.flags|=128,bo(c,!1),t=p.updateQueue,i.updateQueue=t,iu(i,t),i.subtreeFlags=0,t=s,s=i.child;s!==null;)mm(s,t),s=s.sibling;return be(gn,gn.current&1|2),i.child}t=t.sibling}c.tail!==null&&ze()>su&&(i.flags|=128,l=!0,bo(c,!1),i.lanes=4194304)}else{if(!l)if(t=Jl(p),t!==null){if(i.flags|=128,l=!0,t=t.updateQueue,i.updateQueue=t,iu(i,t),bo(c,!0),c.tail===null&&c.tailMode==="hidden"&&!p.alternate&&!Lt)return Jt(i),null}else 2*ze()-c.renderingStartTime>su&&s!==536870912&&(i.flags|=128,l=!0,bo(c,!1),i.lanes=4194304);c.isBackwards?(p.sibling=i.child,i.child=p):(t=c.last,t!==null?t.sibling=p:i.child=p,c.last=p)}return c.tail!==null?(i=c.tail,c.rendering=i,c.tail=i.sibling,c.renderingStartTime=ze(),i.sibling=null,t=gn.current,be(gn,l?t&1|2:t&1),i):(Jt(i),null);case 22:case 23:return ea(i),cf(),l=i.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&(Jt(i),i.subtreeFlags&6&&(i.flags|=8192)):Jt(i),s=i.updateQueue,s!==null&&iu(i,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),t!==null&&ve(mr),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),Ji(mn),Jt(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function uy(t,i){switch(Zc(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Ji(mn),et(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return dt(i),null;case 13:if(ea(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(a(340));lo()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return ve(gn),null;case 4:return et(),null;case 10:return Ji(i.type),null;case 22:case 23:return ea(i),cf(),t!==null&&ve(mr),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return Ji(mn),null;case 25:return null;default:return null}}function Vg(t,i){switch(Zc(i),i.tag){case 3:Ji(mn),et();break;case 26:case 27:case 5:dt(i);break;case 4:et();break;case 13:ea(i);break;case 19:ve(gn);break;case 10:Ji(i.type);break;case 22:case 23:ea(i),cf(),t!==null&&ve(mr);break;case 24:Ji(mn)}}function Ao(t,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var c=l.next;s=c;do{if((s.tag&t)===t){l=void 0;var p=s.create,M=s.inst;l=p(),M.destroy=l}s=s.next}while(s!==c)}}catch(A){kt(i,i.return,A)}}function Da(t,i,s){try{var l=i.updateQueue,c=l!==null?l.lastEffect:null;if(c!==null){var p=c.next;l=p;do{if((l.tag&t)===t){var M=l.inst,A=M.destroy;if(A!==void 0){M.destroy=void 0,c=i;var z=s,te=A;try{te()}catch(pe){kt(c,z,pe)}}}l=l.next}while(l!==p)}}catch(pe){kt(i,i.return,pe)}}function kg(t){var i=t.updateQueue;if(i!==null){var s=t.stateNode;try{Dm(i,s)}catch(l){kt(t,t.return,l)}}}function Xg(t,i,s){s.props=_r(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(l){kt(t,i,l)}}function Ro(t,i){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof s=="function"?t.refCleanup=s(l):s.current=l}}catch(c){kt(t,i,c)}}function Li(t,i){var s=t.ref,l=t.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(c){kt(t,i,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(c){kt(t,i,c)}else s.current=null}function Wg(t){var i=t.type,s=t.memoizedProps,l=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(c){kt(t,t.return,c)}}function Ff(t,i,s){try{var l=t.stateNode;Dy(l,t.type,s,i),l[en]=i}catch(c){kt(t,t.return,c)}}function qg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Fa(t.type)||t.tag===4}function zf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||qg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Fa(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Hf(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(t),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=mu));else if(l!==4&&(l===27&&Fa(t.type)&&(s=t.stateNode,i=null),t=t.child,t!==null))for(Hf(t,i,s),t=t.sibling;t!==null;)Hf(t,i,s),t=t.sibling}function au(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(l!==4&&(l===27&&Fa(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(au(t,i,s),t=t.sibling;t!==null;)au(t,i,s),t=t.sibling}function Yg(t){var i=t.stateNode,s=t.memoizedProps;try{for(var l=t.type,c=i.attributes;c.length;)i.removeAttributeNode(c[0]);wn(i,l,s),i[pn]=t,i[en]=s}catch(p){kt(t,t.return,p)}}var ia=!1,ln=!1,Gf=!1,jg=typeof WeakSet=="function"?WeakSet:Set,yn=null;function cy(t,i){if(t=t.containerInfo,fh=Eu,t=rm(t),Fc(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var c=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{s.nodeType,p.nodeType}catch{s=null;break e}var M=0,A=-1,z=-1,te=0,pe=0,Ee=t,re=null;t:for(;;){for(var se;Ee!==s||c!==0&&Ee.nodeType!==3||(A=M+c),Ee!==p||l!==0&&Ee.nodeType!==3||(z=M+l),Ee.nodeType===3&&(M+=Ee.nodeValue.length),(se=Ee.firstChild)!==null;)re=Ee,Ee=se;for(;;){if(Ee===t)break t;if(re===s&&++te===c&&(A=M),re===p&&++pe===l&&(z=M),(se=Ee.nextSibling)!==null)break;Ee=re,re=Ee.parentNode}Ee=se}s=A===-1||z===-1?null:{start:A,end:z}}else s=null}s=s||{start:0,end:0}}else s=null;for(hh={focusedElem:t,selectionRange:s},Eu=!1,yn=i;yn!==null;)if(i=yn,t=i.child,(i.subtreeFlags&1024)!==0&&t!==null)t.return=i,yn=t;else for(;yn!==null;){switch(i=yn,p=i.alternate,t=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&p!==null){t=void 0,s=i,c=p.memoizedProps,p=p.memoizedState,l=s.stateNode;try{var lt=_r(s.type,c,s.elementType===s.type);t=l.getSnapshotBeforeUpdate(lt,p),l.__reactInternalSnapshotBeforeUpdate=t}catch(rt){kt(s,s.return,rt)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,s=t.nodeType,s===9)mh(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":mh(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(a(163))}if(t=i.sibling,t!==null){t.return=i.return,yn=t;break}yn=i.return}}function Zg(t,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:Ua(t,s),l&4&&Ao(5,s);break;case 1:if(Ua(t,s),l&4)if(t=s.stateNode,i===null)try{t.componentDidMount()}catch(M){kt(s,s.return,M)}else{var c=_r(s.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(c,i,t.__reactInternalSnapshotBeforeUpdate)}catch(M){kt(s,s.return,M)}}l&64&&kg(s),l&512&&Ro(s,s.return);break;case 3:if(Ua(t,s),l&64&&(t=s.updateQueue,t!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{Dm(t,i)}catch(M){kt(s,s.return,M)}}break;case 27:i===null&&l&4&&Yg(s);case 26:case 5:Ua(t,s),i===null&&l&4&&Wg(s),l&512&&Ro(s,s.return);break;case 12:Ua(t,s);break;case 13:Ua(t,s),l&4&&Jg(t,s),l&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=Sy.bind(null,s),Iy(t,s))));break;case 22:if(l=s.memoizedState!==null||ia,!l){i=i!==null&&i.memoizedState!==null||ln,c=ia;var p=ln;ia=l,(ln=i)&&!p?La(t,s,(s.subtreeFlags&8772)!==0):Ua(t,s),ia=c,ln=p}break;case 30:break;default:Ua(t,s)}}function Kg(t){var i=t.alternate;i!==null&&(t.alternate=null,Kg(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&Gr(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Kt=null,qn=!1;function aa(t,i,s){for(s=s.child;s!==null;)Qg(t,i,s),s=s.sibling}function Qg(t,i,s){if(Se&&typeof Se.onCommitFiberUnmount=="function")try{Se.onCommitFiberUnmount(de,s)}catch{}switch(s.tag){case 26:ln||Li(s,i),aa(t,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:ln||Li(s,i);var l=Kt,c=qn;Fa(s.type)&&(Kt=s.stateNode,qn=!1),aa(t,i,s),Bo(s.stateNode),Kt=l,qn=c;break;case 5:ln||Li(s,i);case 6:if(l=Kt,c=qn,Kt=null,aa(t,i,s),Kt=l,qn=c,Kt!==null)if(qn)try{(Kt.nodeType===9?Kt.body:Kt.nodeName==="HTML"?Kt.ownerDocument.body:Kt).removeChild(s.stateNode)}catch(p){kt(s,i,p)}else try{Kt.removeChild(s.stateNode)}catch(p){kt(s,i,p)}break;case 18:Kt!==null&&(qn?(t=Kt,z_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),Xo(t)):z_(Kt,s.stateNode));break;case 4:l=Kt,c=qn,Kt=s.stateNode.containerInfo,qn=!0,aa(t,i,s),Kt=l,qn=c;break;case 0:case 11:case 14:case 15:ln||Da(2,s,i),ln||Da(4,s,i),aa(t,i,s);break;case 1:ln||(Li(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&Xg(s,i,l)),aa(t,i,s);break;case 21:aa(t,i,s);break;case 22:ln=(l=ln)||s.memoizedState!==null,aa(t,i,s),ln=l;break;default:aa(t,i,s)}}function Jg(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Xo(t)}catch(s){kt(i,i.return,s)}}function fy(t){switch(t.tag){case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new jg),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new jg),i;default:throw Error(a(435,t.tag))}}function Vf(t,i){var s=fy(t);i.forEach(function(l){var c=xy.bind(null,t,l);s.has(l)||(s.add(l),l.then(c,c))})}function ti(t,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var c=s[l],p=t,M=i,A=M;e:for(;A!==null;){switch(A.tag){case 27:if(Fa(A.type)){Kt=A.stateNode,qn=!1;break e}break;case 5:Kt=A.stateNode,qn=!1;break e;case 3:case 4:Kt=A.stateNode.containerInfo,qn=!0;break e}A=A.return}if(Kt===null)throw Error(a(160));Qg(p,M,c),Kt=null,qn=!1,p=c.alternate,p!==null&&(p.return=null),c.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)$g(i,t),i=i.sibling}var Si=null;function $g(t,i){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:ti(i,t),ni(t),l&4&&(Da(3,t,t.return),Ao(3,t),Da(5,t,t.return));break;case 1:ti(i,t),ni(t),l&512&&(ln||s===null||Li(s,s.return)),l&64&&ia&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var c=Si;if(ti(i,t),ni(t),l&512&&(ln||s===null||Li(s,s.return)),l&4){var p=s!==null?s.memoizedState:null;if(l=t.memoizedState,s===null)if(l===null)if(t.stateNode===null){e:{l=t.type,s=t.memoizedProps,c=c.ownerDocument||c;t:switch(l){case"title":p=c.getElementsByTagName("title")[0],(!p||p[Ci]||p[pn]||p.namespaceURI==="http://www.w3.org/2000/svg"||p.hasAttribute("itemprop"))&&(p=c.createElement(l),c.head.insertBefore(p,c.querySelector("head > title"))),wn(p,l,s),p[pn]=t,cn(p),l=p;break e;case"link":var M=Y_("link","href",c).get(l+(s.href||""));if(M){for(var A=0;A<M.length;A++)if(p=M[A],p.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&p.getAttribute("rel")===(s.rel==null?null:s.rel)&&p.getAttribute("title")===(s.title==null?null:s.title)&&p.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){M.splice(A,1);break t}}p=c.createElement(l),wn(p,l,s),c.head.appendChild(p);break;case"meta":if(M=Y_("meta","content",c).get(l+(s.content||""))){for(A=0;A<M.length;A++)if(p=M[A],p.getAttribute("content")===(s.content==null?null:""+s.content)&&p.getAttribute("name")===(s.name==null?null:s.name)&&p.getAttribute("property")===(s.property==null?null:s.property)&&p.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&p.getAttribute("charset")===(s.charSet==null?null:s.charSet)){M.splice(A,1);break t}}p=c.createElement(l),wn(p,l,s),c.head.appendChild(p);break;default:throw Error(a(468,l))}p[pn]=t,cn(p),l=p}t.stateNode=l}else j_(c,t.type,t.stateNode);else t.stateNode=q_(c,l,t.memoizedProps);else p!==l?(p===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):p.count--,l===null?j_(c,t.type,t.stateNode):q_(c,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Ff(t,t.memoizedProps,s.memoizedProps)}break;case 27:ti(i,t),ni(t),l&512&&(ln||s===null||Li(s,s.return)),s!==null&&l&4&&Ff(t,t.memoizedProps,s.memoizedProps);break;case 5:if(ti(i,t),ni(t),l&512&&(ln||s===null||Li(s,s.return)),t.flags&32){c=t.stateNode;try{kn(c,"")}catch(se){kt(t,t.return,se)}}l&4&&t.stateNode!=null&&(c=t.memoizedProps,Ff(t,c,s!==null?s.memoizedProps:c)),l&1024&&(Gf=!0);break;case 6:if(ti(i,t),ni(t),l&4){if(t.stateNode===null)throw Error(a(162));l=t.memoizedProps,s=t.stateNode;try{s.nodeValue=l}catch(se){kt(t,t.return,se)}}break;case 3:if(Su=null,c=Si,Si=_u(i.containerInfo),ti(i,t),Si=c,ni(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Xo(i.containerInfo)}catch(se){kt(t,t.return,se)}Gf&&(Gf=!1,e_(t));break;case 4:l=Si,Si=_u(t.stateNode.containerInfo),ti(i,t),ni(t),Si=l;break;case 12:ti(i,t),ni(t);break;case 13:ti(i,t),ni(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(jf=ze()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Vf(t,l)));break;case 22:c=t.memoizedState!==null;var z=s!==null&&s.memoizedState!==null,te=ia,pe=ln;if(ia=te||c,ln=pe||z,ti(i,t),ln=pe,ia=te,ni(t),l&8192)e:for(i=t.stateNode,i._visibility=c?i._visibility&-2:i._visibility|1,c&&(s===null||z||ia||ln||vr(t)),s=null,i=t;;){if(i.tag===5||i.tag===26){if(s===null){z=s=i;try{if(p=z.stateNode,c)M=p.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{A=z.stateNode;var Ee=z.memoizedProps.style,re=Ee!=null&&Ee.hasOwnProperty("display")?Ee.display:null;A.style.display=re==null||typeof re=="boolean"?"":(""+re).trim()}}catch(se){kt(z,z.return,se)}}}else if(i.tag===6){if(s===null){z=i;try{z.stateNode.nodeValue=c?"":z.memoizedProps}catch(se){kt(z,z.return,se)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=t.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,Vf(t,s))));break;case 19:ti(i,t),ni(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Vf(t,l)));break;case 30:break;case 21:break;default:ti(i,t),ni(t)}}function ni(t){var i=t.flags;if(i&2){try{for(var s,l=t.return;l!==null;){if(qg(l)){s=l;break}l=l.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var c=s.stateNode,p=zf(t);au(t,p,c);break;case 5:var M=s.stateNode;s.flags&32&&(kn(M,""),s.flags&=-33);var A=zf(t);au(t,A,M);break;case 3:case 4:var z=s.stateNode.containerInfo,te=zf(t);Hf(t,te,z);break;default:throw Error(a(161))}}catch(pe){kt(t,t.return,pe)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function e_(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;e_(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function Ua(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Zg(t,i.alternate,i),i=i.sibling}function vr(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:Da(4,i,i.return),vr(i);break;case 1:Li(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&Xg(i,i.return,s),vr(i);break;case 27:Bo(i.stateNode);case 26:case 5:Li(i,i.return),vr(i);break;case 22:i.memoizedState===null&&vr(i);break;case 30:vr(i);break;default:vr(i)}t=t.sibling}}function La(t,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,c=t,p=i,M=p.flags;switch(p.tag){case 0:case 11:case 15:La(c,p,s),Ao(4,p);break;case 1:if(La(c,p,s),l=p,c=l.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(te){kt(l,l.return,te)}if(l=p,c=l.updateQueue,c!==null){var A=l.stateNode;try{var z=c.shared.hiddenCallbacks;if(z!==null)for(c.shared.hiddenCallbacks=null,c=0;c<z.length;c++)Cm(z[c],A)}catch(te){kt(l,l.return,te)}}s&&M&64&&kg(p),Ro(p,p.return);break;case 27:Yg(p);case 26:case 5:La(c,p,s),s&&l===null&&M&4&&Wg(p),Ro(p,p.return);break;case 12:La(c,p,s);break;case 13:La(c,p,s),s&&M&4&&Jg(c,p);break;case 22:p.memoizedState===null&&La(c,p,s),Ro(p,p.return);break;case 30:break;default:La(c,p,s)}i=i.sibling}}function kf(t,i){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&fo(s))}function Xf(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&fo(t))}function Ni(t,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)t_(t,i,s,l),i=i.sibling}function t_(t,i,s,l){var c=i.flags;switch(i.tag){case 0:case 11:case 15:Ni(t,i,s,l),c&2048&&Ao(9,i);break;case 1:Ni(t,i,s,l);break;case 3:Ni(t,i,s,l),c&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&fo(t)));break;case 12:if(c&2048){Ni(t,i,s,l),t=i.stateNode;try{var p=i.memoizedProps,M=p.id,A=p.onPostCommit;typeof A=="function"&&A(M,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(z){kt(i,i.return,z)}}else Ni(t,i,s,l);break;case 13:Ni(t,i,s,l);break;case 23:break;case 22:p=i.stateNode,M=i.alternate,i.memoizedState!==null?p._visibility&2?Ni(t,i,s,l):wo(t,i):p._visibility&2?Ni(t,i,s,l):(p._visibility|=2,os(t,i,s,l,(i.subtreeFlags&10256)!==0)),c&2048&&kf(M,i);break;case 24:Ni(t,i,s,l),c&2048&&Xf(i.alternate,i);break;default:Ni(t,i,s,l)}}function os(t,i,s,l,c){for(c=c&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var p=t,M=i,A=s,z=l,te=M.flags;switch(M.tag){case 0:case 11:case 15:os(p,M,A,z,c),Ao(8,M);break;case 23:break;case 22:var pe=M.stateNode;M.memoizedState!==null?pe._visibility&2?os(p,M,A,z,c):wo(p,M):(pe._visibility|=2,os(p,M,A,z,c)),c&&te&2048&&kf(M.alternate,M);break;case 24:os(p,M,A,z,c),c&&te&2048&&Xf(M.alternate,M);break;default:os(p,M,A,z,c)}i=i.sibling}}function wo(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=t,l=i,c=l.flags;switch(l.tag){case 22:wo(s,l),c&2048&&kf(l.alternate,l);break;case 24:wo(s,l),c&2048&&Xf(l.alternate,l);break;default:wo(s,l)}i=i.sibling}}var Co=8192;function ls(t){if(t.subtreeFlags&Co)for(t=t.child;t!==null;)n_(t),t=t.sibling}function n_(t){switch(t.tag){case 26:ls(t),t.flags&Co&&t.memoizedState!==null&&Ky(Si,t.memoizedState,t.memoizedProps);break;case 5:ls(t);break;case 3:case 4:var i=Si;Si=_u(t.stateNode.containerInfo),ls(t),Si=i;break;case 22:t.memoizedState===null&&(i=t.alternate,i!==null&&i.memoizedState!==null?(i=Co,Co=16777216,ls(t),Co=i):ls(t));break;default:ls(t)}}function i_(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function Do(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];yn=l,r_(l,t)}i_(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)a_(t),t=t.sibling}function a_(t){switch(t.tag){case 0:case 11:case 15:Do(t),t.flags&2048&&Da(9,t,t.return);break;case 3:Do(t);break;case 12:Do(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,ru(t)):Do(t);break;default:Do(t)}}function ru(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];yn=l,r_(l,t)}i_(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:Da(8,i,i.return),ru(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,ru(i));break;default:ru(i)}t=t.sibling}}function r_(t,i){for(;yn!==null;){var s=yn;switch(s.tag){case 0:case 11:case 15:Da(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:fo(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,yn=l;else e:for(s=t;yn!==null;){l=yn;var c=l.sibling,p=l.return;if(Kg(l),l===s){yn=null;break e}if(c!==null){c.return=p,yn=c;break e}yn=p}}}var hy={getCacheForType:function(t){var i=Ln(mn),s=i.data.get(t);return s===void 0&&(s=t(),i.data.set(t,s)),s}},dy=typeof WeakMap=="function"?WeakMap:Map,Pt=0,Wt=null,Mt=null,Rt=0,Bt=0,ii=null,Na=!1,us=!1,Wf=!1,ra=0,an=0,Oa=0,Sr=0,qf=0,di=0,cs=0,Uo=null,Yn=null,Yf=!1,jf=0,su=1/0,ou=null,Pa=null,Rn=0,Ba=null,fs=null,hs=0,Zf=0,Kf=null,s_=null,Lo=0,Qf=null;function ai(){if((Pt&2)!==0&&Rt!==0)return Rt&-Rt;if(B.T!==null){var t=$r;return t!==0?t:ah()}return St()}function o_(){di===0&&(di=(Rt&536870912)===0||Lt?V():536870912);var t=hi.current;return t!==null&&(t.flags|=32),di}function ri(t,i,s){(t===Wt&&(Bt===2||Bt===9)||t.cancelPendingCommit!==null)&&(ds(t,0),Ia(t,Rt,di,!1)),Pe(t,s),((Pt&2)===0||t!==Wt)&&(t===Wt&&((Pt&2)===0&&(Sr|=s),an===4&&Ia(t,Rt,di,!1)),Oi(t))}function l_(t,i,s){if((Pt&6)!==0)throw Error(a(327));var l=!s&&(i&124)===0&&(i&t.expiredLanes)===0||ae(t,i),c=l?gy(t,i):eh(t,i,!0),p=l;do{if(c===0){us&&!l&&Ia(t,i,0,!1);break}else{if(s=t.current.alternate,p&&!py(s)){c=eh(t,i,!1),p=!1;continue}if(c===2){if(p=i,t.errorRecoveryDisabledLanes&p)var M=0;else M=t.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){i=M;e:{var A=t;c=Uo;var z=A.current.memoizedState.isDehydrated;if(z&&(ds(A,M).flags|=256),M=eh(A,M,!1),M!==2){if(Wf&&!z){A.errorRecoveryDisabledLanes|=p,Sr|=p,c=4;break e}p=Yn,Yn=c,p!==null&&(Yn===null?Yn=p:Yn.push.apply(Yn,p))}c=M}if(p=!1,c!==2)continue}}if(c===1){ds(t,0),Ia(t,i,0,!0);break}e:{switch(l=t,p=c,p){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:Ia(l,i,di,!Na);break e;case 2:Yn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(c=jf+300-ze(),10<c)){if(Ia(l,i,di,!Na),H(l,0,!0)!==0)break e;l.timeoutHandle=I_(u_.bind(null,l,s,Yn,ou,Yf,i,di,Sr,cs,Na,p,2,-0,0),c);break e}u_(l,s,Yn,ou,Yf,i,di,Sr,cs,Na,p,0,-0,0)}}break}while(!0);Oi(t)}function u_(t,i,s,l,c,p,M,A,z,te,pe,Ee,re,se){if(t.timeoutHandle=-1,Ee=i.subtreeFlags,(Ee&8192||(Ee&16785408)===16785408)&&(zo={stylesheets:null,count:0,unsuspend:Zy},n_(i),Ee=Qy(),Ee!==null)){t.cancelPendingCommit=Ee(g_.bind(null,t,i,p,s,l,c,M,A,z,pe,1,re,se)),Ia(t,p,M,!te);return}g_(t,i,p,s,l,c,M,A,z)}function py(t){for(var i=t;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var c=s[l],p=c.getSnapshot;c=c.value;try{if(!$n(p(),c))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Ia(t,i,s,l){i&=~qf,i&=~Sr,t.suspendedLanes|=i,t.pingedLanes&=~i,l&&(t.warmLanes|=i),l=t.expirationTimes;for(var c=i;0<c;){var p=31-Ge(c),M=1<<p;l[p]=-1,c&=~M}s!==0&&xe(t,s,i)}function lu(){return(Pt&6)===0?(No(0),!1):!0}function Jf(){if(Mt!==null){if(Bt===0)var t=Mt.return;else t=Mt,Qi=dr=null,mf(t),rs=null,Mo=0,t=Mt;for(;t!==null;)Vg(t.alternate,t),t=t.return;Mt=null}}function ds(t,i){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,Ly(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),Jf(),Wt=t,Mt=s=ji(t.current,null),Rt=i,Bt=0,ii=null,Na=!1,us=ae(t,i),Wf=!1,cs=di=qf=Sr=Oa=an=0,Yn=Uo=null,Yf=!1,(i&8)!==0&&(i|=i&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=i;0<l;){var c=31-Ge(l),p=1<<c;i|=t[c],l&=~p}return ra=i,Dl(),s}function c_(t,i){xt=null,B.H=Zl,i===po||i===zl?(i=Rm(),Bt=3):i===Tm?(i=Rm(),Bt=4):Bt=i===wg?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,ii=i,Mt===null&&(an=1,eu(t,li(i,t.current)))}function f_(){var t=B.H;return B.H=Zl,t===null?Zl:t}function h_(){var t=B.A;return B.A=hy,t}function $f(){an=4,Na||(Rt&4194048)!==Rt&&hi.current!==null||(us=!0),(Oa&134217727)===0&&(Sr&134217727)===0||Wt===null||Ia(Wt,Rt,di,!1)}function eh(t,i,s){var l=Pt;Pt|=2;var c=f_(),p=h_();(Wt!==t||Rt!==i)&&(ou=null,ds(t,i)),i=!1;var M=an;e:do try{if(Bt!==0&&Mt!==null){var A=Mt,z=ii;switch(Bt){case 8:Jf(),M=6;break e;case 3:case 2:case 9:case 6:hi.current===null&&(i=!0);var te=Bt;if(Bt=0,ii=null,ps(t,A,z,te),s&&us){M=0;break e}break;default:te=Bt,Bt=0,ii=null,ps(t,A,z,te)}}my(),M=an;break}catch(pe){c_(t,pe)}while(!0);return i&&t.shellSuspendCounter++,Qi=dr=null,Pt=l,B.H=c,B.A=p,Mt===null&&(Wt=null,Rt=0,Dl()),M}function my(){for(;Mt!==null;)d_(Mt)}function gy(t,i){var s=Pt;Pt|=2;var l=f_(),c=h_();Wt!==t||Rt!==i?(ou=null,su=ze()+500,ds(t,i)):us=ae(t,i);e:do try{if(Bt!==0&&Mt!==null){i=Mt;var p=ii;t:switch(Bt){case 1:Bt=0,ii=null,ps(t,i,p,1);break;case 2:case 9:if(bm(p)){Bt=0,ii=null,p_(i);break}i=function(){Bt!==2&&Bt!==9||Wt!==t||(Bt=7),Oi(t)},p.then(i,i);break e;case 3:Bt=7;break e;case 4:Bt=5;break e;case 7:bm(p)?(Bt=0,ii=null,p_(i)):(Bt=0,ii=null,ps(t,i,p,7));break;case 5:var M=null;switch(Mt.tag){case 26:M=Mt.memoizedState;case 5:case 27:var A=Mt;if(!M||Z_(M)){Bt=0,ii=null;var z=A.sibling;if(z!==null)Mt=z;else{var te=A.return;te!==null?(Mt=te,uu(te)):Mt=null}break t}}Bt=0,ii=null,ps(t,i,p,5);break;case 6:Bt=0,ii=null,ps(t,i,p,6);break;case 8:Jf(),an=6;break e;default:throw Error(a(462))}}_y();break}catch(pe){c_(t,pe)}while(!0);return Qi=dr=null,B.H=l,B.A=c,Pt=s,Mt!==null?0:(Wt=null,Rt=0,Dl(),an)}function _y(){for(;Mt!==null&&!ut();)d_(Mt)}function d_(t){var i=Hg(t.alternate,t,ra);t.memoizedProps=t.pendingProps,i===null?uu(t):Mt=i}function p_(t){var i=t,s=i.alternate;switch(i.tag){case 15:case 0:i=Og(s,i,i.pendingProps,i.type,void 0,Rt);break;case 11:i=Og(s,i,i.pendingProps,i.type.render,i.ref,Rt);break;case 5:mf(i);default:Vg(s,i),i=Mt=mm(i,ra),i=Hg(s,i,ra)}t.memoizedProps=t.pendingProps,i===null?uu(t):Mt=i}function ps(t,i,s,l){Qi=dr=null,mf(i),rs=null,Mo=0;var c=i.return;try{if(sy(t,c,i,s,Rt)){an=1,eu(t,li(s,t.current)),Mt=null;return}}catch(p){if(c!==null)throw Mt=c,p;an=1,eu(t,li(s,t.current)),Mt=null;return}i.flags&32768?(Lt||l===1?t=!0:us||(Rt&536870912)!==0?t=!1:(Na=t=!0,(l===2||l===9||l===3||l===6)&&(l=hi.current,l!==null&&l.tag===13&&(l.flags|=16384))),m_(i,t)):uu(i)}function uu(t){var i=t;do{if((i.flags&32768)!==0){m_(i,Na);return}t=i.return;var s=ly(i.alternate,i,ra);if(s!==null){Mt=s;return}if(i=i.sibling,i!==null){Mt=i;return}Mt=i=t}while(i!==null);an===0&&(an=5)}function m_(t,i){do{var s=uy(t.alternate,t);if(s!==null){s.flags&=32767,Mt=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(t=t.sibling,t!==null)){Mt=t;return}Mt=t=s}while(t!==null);an=6,Mt=null}function g_(t,i,s,l,c,p,M,A,z){t.cancelPendingCommit=null;do cu();while(Rn!==0);if((Pt&6)!==0)throw Error(a(327));if(i!==null){if(i===t.current)throw Error(a(177));if(p=i.lanes|i.childLanes,p|=kc,Re(t,s,p,M,A,z),t===Wt&&(Mt=Wt=null,Rt=0),fs=i,Ba=t,hs=s,Zf=p,Kf=c,s_=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,yy(qt,function(){return y_(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=B.T,B.T=null,c=Z.p,Z.p=2,M=Pt,Pt|=4;try{cy(t,i,s)}finally{Pt=M,Z.p=c,B.T=l}}Rn=1,__(),v_(),S_()}}function __(){if(Rn===1){Rn=0;var t=Ba,i=fs,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=B.T,B.T=null;var l=Z.p;Z.p=2;var c=Pt;Pt|=4;try{$g(i,t);var p=hh,M=rm(t.containerInfo),A=p.focusedElem,z=p.selectionRange;if(M!==A&&A&&A.ownerDocument&&am(A.ownerDocument.documentElement,A)){if(z!==null&&Fc(A)){var te=z.start,pe=z.end;if(pe===void 0&&(pe=te),"selectionStart"in A)A.selectionStart=te,A.selectionEnd=Math.min(pe,A.value.length);else{var Ee=A.ownerDocument||document,re=Ee&&Ee.defaultView||window;if(re.getSelection){var se=re.getSelection(),lt=A.textContent.length,rt=Math.min(z.start,lt),Ht=z.end===void 0?rt:Math.min(z.end,lt);!se.extend&&rt>Ht&&(M=Ht,Ht=rt,rt=M);var j=im(A,rt),W=im(A,Ht);if(j&&W&&(se.rangeCount!==1||se.anchorNode!==j.node||se.anchorOffset!==j.offset||se.focusNode!==W.node||se.focusOffset!==W.offset)){var $=Ee.createRange();$.setStart(j.node,j.offset),se.removeAllRanges(),rt>Ht?(se.addRange($),se.extend(W.node,W.offset)):($.setEnd(W.node,W.offset),se.addRange($))}}}}for(Ee=[],se=A;se=se.parentNode;)se.nodeType===1&&Ee.push({element:se,left:se.scrollLeft,top:se.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<Ee.length;A++){var _e=Ee[A];_e.element.scrollLeft=_e.left,_e.element.scrollTop=_e.top}}Eu=!!fh,hh=fh=null}finally{Pt=c,Z.p=l,B.T=s}}t.current=i,Rn=2}}function v_(){if(Rn===2){Rn=0;var t=Ba,i=fs,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=B.T,B.T=null;var l=Z.p;Z.p=2;var c=Pt;Pt|=4;try{Zg(t,i.alternate,i)}finally{Pt=c,Z.p=l,B.T=s}}Rn=3}}function S_(){if(Rn===4||Rn===3){Rn=0,at();var t=Ba,i=fs,s=hs,l=s_;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Rn=5:(Rn=0,fs=Ba=null,x_(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(Pa=null),At(s),i=i.stateNode,Se&&typeof Se.onCommitFiberRoot=="function")try{Se.onCommitFiberRoot(de,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=B.T,c=Z.p,Z.p=2,B.T=null;try{for(var p=t.onRecoverableError,M=0;M<l.length;M++){var A=l[M];p(A.value,{componentStack:A.stack})}}finally{B.T=i,Z.p=c}}(hs&3)!==0&&cu(),Oi(t),c=t.pendingLanes,(s&4194090)!==0&&(c&42)!==0?t===Qf?Lo++:(Lo=0,Qf=t):Lo=0,No(0)}}function x_(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,fo(i)))}function cu(t){return __(),v_(),S_(),y_()}function y_(){if(Rn!==5)return!1;var t=Ba,i=Zf;Zf=0;var s=At(hs),l=B.T,c=Z.p;try{Z.p=32>s?32:s,B.T=null,s=Kf,Kf=null;var p=Ba,M=hs;if(Rn=0,fs=Ba=null,hs=0,(Pt&6)!==0)throw Error(a(331));var A=Pt;if(Pt|=4,a_(p.current),t_(p,p.current,M,s),Pt=A,No(0,!1),Se&&typeof Se.onPostCommitFiberRoot=="function")try{Se.onPostCommitFiberRoot(de,p)}catch{}return!0}finally{Z.p=c,B.T=l,x_(t,i)}}function E_(t,i,s){i=li(s,i),i=Cf(t.stateNode,i,2),t=Aa(t,i,2),t!==null&&(Pe(t,2),Oi(t))}function kt(t,i,s){if(t.tag===3)E_(t,t,s);else for(;i!==null;){if(i.tag===3){E_(i,t,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Pa===null||!Pa.has(l))){t=li(s,t),s=Ag(2),l=Aa(i,s,2),l!==null&&(Rg(s,l,i,t),Pe(l,2),Oi(l));break}}i=i.return}}function th(t,i,s){var l=t.pingCache;if(l===null){l=t.pingCache=new dy;var c=new Set;l.set(i,c)}else c=l.get(i),c===void 0&&(c=new Set,l.set(i,c));c.has(s)||(Wf=!0,c.add(s),t=vy.bind(null,t,i,s),i.then(t,t))}function vy(t,i,s){var l=t.pingCache;l!==null&&l.delete(i),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,Wt===t&&(Rt&s)===s&&(an===4||an===3&&(Rt&62914560)===Rt&&300>ze()-jf?(Pt&2)===0&&ds(t,0):qf|=s,cs===Rt&&(cs=0)),Oi(t)}function M_(t,i){i===0&&(i=Me()),t=Zr(t,i),t!==null&&(Pe(t,i),Oi(t))}function Sy(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),M_(t,s)}function xy(t,i){var s=0;switch(t.tag){case 13:var l=t.stateNode,c=t.memoizedState;c!==null&&(s=c.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(i),M_(t,s)}function yy(t,i){return G(t,i)}var fu=null,ms=null,nh=!1,hu=!1,ih=!1,xr=0;function Oi(t){t!==ms&&t.next===null&&(ms===null?fu=ms=t:ms=ms.next=t),hu=!0,nh||(nh=!0,My())}function No(t,i){if(!ih&&hu){ih=!0;do for(var s=!1,l=fu;l!==null;){if(t!==0){var c=l.pendingLanes;if(c===0)var p=0;else{var M=l.suspendedLanes,A=l.pingedLanes;p=(1<<31-Ge(42|t)+1)-1,p&=c&~(M&~A),p=p&201326741?p&201326741|1:p?p|2:0}p!==0&&(s=!0,R_(l,p))}else p=Rt,p=H(l,l===Wt?p:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(p&3)===0||ae(l,p)||(s=!0,R_(l,p));l=l.next}while(s);ih=!1}}function Ey(){T_()}function T_(){hu=nh=!1;var t=0;xr!==0&&(Uy()&&(t=xr),xr=0);for(var i=ze(),s=null,l=fu;l!==null;){var c=l.next,p=b_(l,i);p===0?(l.next=null,s===null?fu=c:s.next=c,c===null&&(ms=s)):(s=l,(t!==0||(p&3)!==0)&&(hu=!0)),l=c}No(t)}function b_(t,i){for(var s=t.suspendedLanes,l=t.pingedLanes,c=t.expirationTimes,p=t.pendingLanes&-62914561;0<p;){var M=31-Ge(p),A=1<<M,z=c[M];z===-1?((A&s)===0||(A&l)!==0)&&(c[M]=De(A,i)):z<=i&&(t.expiredLanes|=A),p&=~A}if(i=Wt,s=Rt,s=H(t,t===i?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,s===0||t===i&&(Bt===2||Bt===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Ut(l),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||ae(t,s)){if(i=s&-s,i===t.callbackPriority)return i;switch(l!==null&&Ut(l),At(s)){case 2:case 8:s=ct;break;case 32:s=qt;break;case 268435456:s=O;break;default:s=qt}return l=A_.bind(null,t),s=G(s,l),t.callbackPriority=i,t.callbackNode=s,i}return l!==null&&l!==null&&Ut(l),t.callbackPriority=2,t.callbackNode=null,2}function A_(t,i){if(Rn!==0&&Rn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(cu()&&t.callbackNode!==s)return null;var l=Rt;return l=H(t,t===Wt?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(l_(t,l,i),b_(t,ze()),t.callbackNode!=null&&t.callbackNode===s?A_.bind(null,t):null)}function R_(t,i){if(cu())return null;l_(t,i,!0)}function My(){Ny(function(){(Pt&6)!==0?G(We,Ey):T_()})}function ah(){return xr===0&&(xr=V()),xr}function w_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ml(""+t)}function C_(t,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,t.id&&s.setAttribute("form",t.id),i.parentNode.insertBefore(s,i),t=new FormData(t),s.parentNode.removeChild(s),t}function Ty(t,i,s,l,c){if(i==="submit"&&s&&s.stateNode===c){var p=w_((c[en]||null).action),M=l.submitter;M&&(i=(i=M[en]||null)?w_(i.formAction):M.getAttribute("formAction"),i!==null&&(p=i,M=null));var A=new Rl("action","action",null,l,c);t.push({event:A,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(xr!==0){var z=M?C_(c,M):new FormData(c);Tf(s,{pending:!0,data:z,method:c.method,action:p},null,z)}}else typeof p=="function"&&(A.preventDefault(),z=M?C_(c,M):new FormData(c),Tf(s,{pending:!0,data:z,method:c.method,action:p},p,z))},currentTarget:c}]})}}for(var rh=0;rh<Vc.length;rh++){var sh=Vc[rh],by=sh.toLowerCase(),Ay=sh[0].toUpperCase()+sh.slice(1);vi(by,"on"+Ay)}vi(lm,"onAnimationEnd"),vi(um,"onAnimationIteration"),vi(cm,"onAnimationStart"),vi("dblclick","onDoubleClick"),vi("focusin","onFocus"),vi("focusout","onBlur"),vi(kx,"onTransitionRun"),vi(Xx,"onTransitionStart"),vi(Wx,"onTransitionCancel"),vi(fm,"onTransitionEnd"),Y("onMouseEnter",["mouseout","mouseover"]),Y("onMouseLeave",["mouseout","mouseover"]),Y("onPointerEnter",["pointerout","pointerover"]),Y("onPointerLeave",["pointerout","pointerover"]),w("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),w("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),w("onBeforeInput",["compositionend","keypress","textInput","paste"]),w("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Oo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ry=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Oo));function D_(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],c=l.event;l=l.listeners;e:{var p=void 0;if(i)for(var M=l.length-1;0<=M;M--){var A=l[M],z=A.instance,te=A.currentTarget;if(A=A.listener,z!==p&&c.isPropagationStopped())break e;p=A,c.currentTarget=te;try{p(c)}catch(pe){$l(pe)}c.currentTarget=null,p=z}else for(M=0;M<l.length;M++){if(A=l[M],z=A.instance,te=A.currentTarget,A=A.listener,z!==p&&c.isPropagationStopped())break e;p=A,c.currentTarget=te;try{p(c)}catch(pe){$l(pe)}c.currentTarget=null,p=z}}}}function Tt(t,i){var s=i[zr];s===void 0&&(s=i[zr]=new Set);var l=t+"__bubble";s.has(l)||(U_(i,t,2,!1),s.add(l))}function oh(t,i,s){var l=0;i&&(l|=4),U_(s,t,l,i)}var du="_reactListening"+Math.random().toString(36).slice(2);function lh(t){if(!t[du]){t[du]=!0,yl.forEach(function(s){s!=="selectionchange"&&(Ry.has(s)||oh(s,!1,t),oh(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[du]||(i[du]=!0,oh("selectionchange",!1,i))}}function U_(t,i,s,l){switch(tv(i)){case 2:var c=eE;break;case 8:c=tE;break;default:c=Eh}s=c.bind(null,i,s,t),c=void 0,!Cc||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(c=!0),l?c!==void 0?t.addEventListener(i,s,{capture:!0,passive:c}):t.addEventListener(i,s,!0):c!==void 0?t.addEventListener(i,s,{passive:c}):t.addEventListener(i,s,!1)}function uh(t,i,s,l,c){var p=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var A=l.stateNode.containerInfo;if(A===c)break;if(M===4)for(M=l.return;M!==null;){var z=M.tag;if((z===3||z===4)&&M.stateNode.containerInfo===c)return;M=M.return}for(;A!==null;){if(M=qi(A),M===null)return;if(z=M.tag,z===5||z===6||z===26||z===27){l=p=M;continue e}A=A.parentNode}}l=l.return}Fp(function(){var te=p,pe=Rc(s),Ee=[];e:{var re=hm.get(t);if(re!==void 0){var se=Rl,lt=t;switch(t){case"keypress":if(bl(s)===0)break e;case"keydown":case"keyup":se=yx;break;case"focusin":lt="focus",se=Nc;break;case"focusout":lt="blur",se=Nc;break;case"beforeblur":case"afterblur":se=Nc;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":se=Gp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":se=ux;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":se=Tx;break;case lm:case um:case cm:se=hx;break;case fm:se=Ax;break;case"scroll":case"scrollend":se=ox;break;case"wheel":se=wx;break;case"copy":case"cut":case"paste":se=px;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":se=kp;break;case"toggle":case"beforetoggle":se=Dx}var rt=(i&4)!==0,Ht=!rt&&(t==="scroll"||t==="scrollend"),j=rt?re!==null?re+"Capture":null:re;rt=[];for(var W=te,$;W!==null;){var _e=W;if($=_e.stateNode,_e=_e.tag,_e!==5&&_e!==26&&_e!==27||$===null||j===null||(_e=Js(W,j),_e!=null&&rt.push(Po(W,_e,$))),Ht)break;W=W.return}0<rt.length&&(re=new se(re,lt,null,s,pe),Ee.push({event:re,listeners:rt}))}}if((i&7)===0){e:{if(re=t==="mouseover"||t==="pointerover",se=t==="mouseout"||t==="pointerout",re&&s!==Ac&&(lt=s.relatedTarget||s.fromElement)&&(qi(lt)||lt[wi]))break e;if((se||re)&&(re=pe.window===pe?pe:(re=pe.ownerDocument)?re.defaultView||re.parentWindow:window,se?(lt=s.relatedTarget||s.toElement,se=te,lt=lt?qi(lt):null,lt!==null&&(Ht=u(lt),rt=lt.tag,lt!==Ht||rt!==5&&rt!==27&&rt!==6)&&(lt=null)):(se=null,lt=te),se!==lt)){if(rt=Gp,_e="onMouseLeave",j="onMouseEnter",W="mouse",(t==="pointerout"||t==="pointerover")&&(rt=kp,_e="onPointerLeave",j="onPointerEnter",W="pointer"),Ht=se==null?re:ar(se),$=lt==null?re:ar(lt),re=new rt(_e,W+"leave",se,s,pe),re.target=Ht,re.relatedTarget=$,_e=null,qi(pe)===te&&(rt=new rt(j,W+"enter",lt,s,pe),rt.target=$,rt.relatedTarget=Ht,_e=rt),Ht=_e,se&&lt)t:{for(rt=se,j=lt,W=0,$=rt;$;$=gs($))W++;for($=0,_e=j;_e;_e=gs(_e))$++;for(;0<W-$;)rt=gs(rt),W--;for(;0<$-W;)j=gs(j),$--;for(;W--;){if(rt===j||j!==null&&rt===j.alternate)break t;rt=gs(rt),j=gs(j)}rt=null}else rt=null;se!==null&&L_(Ee,re,se,rt,!1),lt!==null&&Ht!==null&&L_(Ee,Ht,lt,rt,!0)}}e:{if(re=te?ar(te):window,se=re.nodeName&&re.nodeName.toLowerCase(),se==="select"||se==="input"&&re.type==="file")var qe=Qp;else if(Zp(re))if(Jp)qe=Hx;else{qe=Fx;var yt=Ix}else se=re.nodeName,!se||se.toLowerCase()!=="input"||re.type!=="checkbox"&&re.type!=="radio"?te&&bc(te.elementType)&&(qe=Qp):qe=zx;if(qe&&(qe=qe(t,te))){Kp(Ee,qe,s,pe);break e}yt&&yt(t,re,te),t==="focusout"&&te&&re.type==="number"&&te.memoizedProps.value!=null&&Un(re,"number",re.value)}switch(yt=te?ar(te):window,t){case"focusin":(Zp(yt)||yt.contentEditable==="true")&&(qr=yt,zc=te,so=null);break;case"focusout":so=zc=qr=null;break;case"mousedown":Hc=!0;break;case"contextmenu":case"mouseup":case"dragend":Hc=!1,sm(Ee,s,pe);break;case"selectionchange":if(Vx)break;case"keydown":case"keyup":sm(Ee,s,pe)}var $e;if(Pc)e:{switch(t){case"compositionstart":var ot="onCompositionStart";break e;case"compositionend":ot="onCompositionEnd";break e;case"compositionupdate":ot="onCompositionUpdate";break e}ot=void 0}else Wr?Yp(t,s)&&(ot="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(ot="onCompositionStart");ot&&(Xp&&s.locale!=="ko"&&(Wr||ot!=="onCompositionStart"?ot==="onCompositionEnd"&&Wr&&($e=zp()):(Ea=pe,Dc="value"in Ea?Ea.value:Ea.textContent,Wr=!0)),yt=pu(te,ot),0<yt.length&&(ot=new Vp(ot,t,null,s,pe),Ee.push({event:ot,listeners:yt}),$e?ot.data=$e:($e=jp(s),$e!==null&&(ot.data=$e)))),($e=Lx?Nx(t,s):Ox(t,s))&&(ot=pu(te,"onBeforeInput"),0<ot.length&&(yt=new Vp("onBeforeInput","beforeinput",null,s,pe),Ee.push({event:yt,listeners:ot}),yt.data=$e)),Ty(Ee,t,te,s,pe)}D_(Ee,i)})}function Po(t,i,s){return{instance:t,listener:i,currentTarget:s}}function pu(t,i){for(var s=i+"Capture",l=[];t!==null;){var c=t,p=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||p===null||(c=Js(t,s),c!=null&&l.unshift(Po(t,c,p)),c=Js(t,i),c!=null&&l.push(Po(t,c,p))),t.tag===3)return l;t=t.return}return[]}function gs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function L_(t,i,s,l,c){for(var p=i._reactName,M=[];s!==null&&s!==l;){var A=s,z=A.alternate,te=A.stateNode;if(A=A.tag,z!==null&&z===l)break;A!==5&&A!==26&&A!==27||te===null||(z=te,c?(te=Js(s,p),te!=null&&M.unshift(Po(s,te,z))):c||(te=Js(s,p),te!=null&&M.push(Po(s,te,z)))),s=s.return}M.length!==0&&t.push({event:i,listeners:M})}var wy=/\r\n?/g,Cy=/\u0000|\uFFFD/g;function N_(t){return(typeof t=="string"?t:""+t).replace(wy,`
`).replace(Cy,"")}function O_(t,i){return i=N_(i),N_(t)===i}function mu(){}function zt(t,i,s,l,c,p){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||kn(t,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&kn(t,""+l);break;case"className":Xe(t,"class",l);break;case"tabIndex":Xe(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Xe(t,s,l);break;case"style":Bp(t,l,p);break;case"data":if(i!=="object"){Xe(t,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){t.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=Ml(""+l),t.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof p=="function"&&(s==="formAction"?(i!=="input"&&zt(t,i,"name",c.name,c,null),zt(t,i,"formEncType",c.formEncType,c,null),zt(t,i,"formMethod",c.formMethod,c,null),zt(t,i,"formTarget",c.formTarget,c,null)):(zt(t,i,"encType",c.encType,c,null),zt(t,i,"method",c.method,c,null),zt(t,i,"target",c.target,c,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=Ml(""+l),t.setAttribute(s,l);break;case"onClick":l!=null&&(t.onclick=mu);break;case"onScroll":l!=null&&Tt("scroll",t);break;case"onScrollEnd":l!=null&&Tt("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(c.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}s=Ml(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""+l):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":l===!0?t.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,l):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(s,l):t.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(s):t.setAttribute(s,l);break;case"popover":Tt("beforetoggle",t),Tt("toggle",t),Be(t,"popover",l);break;case"xlinkActuate":Ie(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ie(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ie(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ie(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ie(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ie(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ie(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ie(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ie(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Be(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=rx.get(s)||s,Be(t,s,l))}}function ch(t,i,s,l,c,p){switch(s){case"style":Bp(t,l,p);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(c.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"children":typeof l=="string"?kn(t,l):(typeof l=="number"||typeof l=="bigint")&&kn(t,""+l);break;case"onScroll":l!=null&&Tt("scroll",t);break;case"onScrollEnd":l!=null&&Tt("scrollend",t);break;case"onClick":l!=null&&(t.onclick=mu);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!El.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(c=s.endsWith("Capture"),i=s.slice(2,c?s.length-7:void 0),p=t[en]||null,p=p!=null?p[s]:null,typeof p=="function"&&t.removeEventListener(i,p,c),typeof l=="function")){typeof p!="function"&&p!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(i,l,c);break e}s in t?t[s]=l:l===!0?t.setAttribute(s,""):Be(t,s,l)}}}function wn(t,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Tt("error",t),Tt("load",t);var l=!1,c=!1,p;for(p in s)if(s.hasOwnProperty(p)){var M=s[p];if(M!=null)switch(p){case"src":l=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:zt(t,i,p,M,s,null)}}c&&zt(t,i,"srcSet",s.srcSet,s,null),l&&zt(t,i,"src",s.src,s,null);return;case"input":Tt("invalid",t);var A=p=M=c=null,z=null,te=null;for(l in s)if(s.hasOwnProperty(l)){var pe=s[l];if(pe!=null)switch(l){case"name":c=pe;break;case"type":M=pe;break;case"checked":z=pe;break;case"defaultChecked":te=pe;break;case"value":p=pe;break;case"defaultValue":A=pe;break;case"children":case"dangerouslySetInnerHTML":if(pe!=null)throw Error(a(137,i));break;default:zt(t,i,l,pe,s,null)}}zn(t,p,A,z,te,M,c,!1),Et(t);return;case"select":Tt("invalid",t),l=M=p=null;for(c in s)if(s.hasOwnProperty(c)&&(A=s[c],A!=null))switch(c){case"value":p=A;break;case"defaultValue":M=A;break;case"multiple":l=A;default:zt(t,i,c,A,s,null)}i=p,s=M,t.multiple=!!l,i!=null?tn(t,!!l,i,!1):s!=null&&tn(t,!!l,s,!0);return;case"textarea":Tt("invalid",t),p=c=l=null;for(M in s)if(s.hasOwnProperty(M)&&(A=s[M],A!=null))switch(M){case"value":l=A;break;case"defaultValue":c=A;break;case"children":p=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(a(91));break;default:zt(t,i,M,A,s,null)}Vr(t,l,c,p),Et(t);return;case"option":for(z in s)if(s.hasOwnProperty(z)&&(l=s[z],l!=null))switch(z){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:zt(t,i,z,l,s,null)}return;case"dialog":Tt("beforetoggle",t),Tt("toggle",t),Tt("cancel",t),Tt("close",t);break;case"iframe":case"object":Tt("load",t);break;case"video":case"audio":for(l=0;l<Oo.length;l++)Tt(Oo[l],t);break;case"image":Tt("error",t),Tt("load",t);break;case"details":Tt("toggle",t);break;case"embed":case"source":case"link":Tt("error",t),Tt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(te in s)if(s.hasOwnProperty(te)&&(l=s[te],l!=null))switch(te){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:zt(t,i,te,l,s,null)}return;default:if(bc(i)){for(pe in s)s.hasOwnProperty(pe)&&(l=s[pe],l!==void 0&&ch(t,i,pe,l,s,void 0));return}}for(A in s)s.hasOwnProperty(A)&&(l=s[A],l!=null&&zt(t,i,A,l,s,null))}function Dy(t,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,p=null,M=null,A=null,z=null,te=null,pe=null;for(se in s){var Ee=s[se];if(s.hasOwnProperty(se)&&Ee!=null)switch(se){case"checked":break;case"value":break;case"defaultValue":z=Ee;default:l.hasOwnProperty(se)||zt(t,i,se,null,l,Ee)}}for(var re in l){var se=l[re];if(Ee=s[re],l.hasOwnProperty(re)&&(se!=null||Ee!=null))switch(re){case"type":p=se;break;case"name":c=se;break;case"checked":te=se;break;case"defaultChecked":pe=se;break;case"value":M=se;break;case"defaultValue":A=se;break;case"children":case"dangerouslySetInnerHTML":if(se!=null)throw Error(a(137,i));break;default:se!==Ee&&zt(t,i,re,se,l,Ee)}}Vt(t,M,A,z,te,pe,p,c);return;case"select":se=M=A=re=null;for(p in s)if(z=s[p],s.hasOwnProperty(p)&&z!=null)switch(p){case"value":break;case"multiple":se=z;default:l.hasOwnProperty(p)||zt(t,i,p,null,l,z)}for(c in l)if(p=l[c],z=s[c],l.hasOwnProperty(c)&&(p!=null||z!=null))switch(c){case"value":re=p;break;case"defaultValue":A=p;break;case"multiple":M=p;default:p!==z&&zt(t,i,c,p,l,z)}i=A,s=M,l=se,re!=null?tn(t,!!s,re,!1):!!l!=!!s&&(i!=null?tn(t,!!s,i,!0):tn(t,!!s,s?[]:"",!1));return;case"textarea":se=re=null;for(A in s)if(c=s[A],s.hasOwnProperty(A)&&c!=null&&!l.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:zt(t,i,A,null,l,c)}for(M in l)if(c=l[M],p=s[M],l.hasOwnProperty(M)&&(c!=null||p!=null))switch(M){case"value":re=c;break;case"defaultValue":se=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(a(91));break;default:c!==p&&zt(t,i,M,c,l,p)}bn(t,re,se);return;case"option":for(var lt in s)if(re=s[lt],s.hasOwnProperty(lt)&&re!=null&&!l.hasOwnProperty(lt))switch(lt){case"selected":t.selected=!1;break;default:zt(t,i,lt,null,l,re)}for(z in l)if(re=l[z],se=s[z],l.hasOwnProperty(z)&&re!==se&&(re!=null||se!=null))switch(z){case"selected":t.selected=re&&typeof re!="function"&&typeof re!="symbol";break;default:zt(t,i,z,re,l,se)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var rt in s)re=s[rt],s.hasOwnProperty(rt)&&re!=null&&!l.hasOwnProperty(rt)&&zt(t,i,rt,null,l,re);for(te in l)if(re=l[te],se=s[te],l.hasOwnProperty(te)&&re!==se&&(re!=null||se!=null))switch(te){case"children":case"dangerouslySetInnerHTML":if(re!=null)throw Error(a(137,i));break;default:zt(t,i,te,re,l,se)}return;default:if(bc(i)){for(var Ht in s)re=s[Ht],s.hasOwnProperty(Ht)&&re!==void 0&&!l.hasOwnProperty(Ht)&&ch(t,i,Ht,void 0,l,re);for(pe in l)re=l[pe],se=s[pe],!l.hasOwnProperty(pe)||re===se||re===void 0&&se===void 0||ch(t,i,pe,re,l,se);return}}for(var j in s)re=s[j],s.hasOwnProperty(j)&&re!=null&&!l.hasOwnProperty(j)&&zt(t,i,j,null,l,re);for(Ee in l)re=l[Ee],se=s[Ee],!l.hasOwnProperty(Ee)||re===se||re==null&&se==null||zt(t,i,Ee,re,l,se)}var fh=null,hh=null;function gu(t){return t.nodeType===9?t:t.ownerDocument}function P_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function B_(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function dh(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var ph=null;function Uy(){var t=window.event;return t&&t.type==="popstate"?t===ph?!1:(ph=t,!0):(ph=null,!1)}var I_=typeof setTimeout=="function"?setTimeout:void 0,Ly=typeof clearTimeout=="function"?clearTimeout:void 0,F_=typeof Promise=="function"?Promise:void 0,Ny=typeof queueMicrotask=="function"?queueMicrotask:typeof F_<"u"?function(t){return F_.resolve(null).then(t).catch(Oy)}:I_;function Oy(t){setTimeout(function(){throw t})}function Fa(t){return t==="head"}function z_(t,i){var s=i,l=0,c=0;do{var p=s.nextSibling;if(t.removeChild(s),p&&p.nodeType===8)if(s=p.data,s==="/$"){if(0<l&&8>l){s=l;var M=t.ownerDocument;if(s&1&&Bo(M.documentElement),s&2&&Bo(M.body),s&4)for(s=M.head,Bo(s),M=s.firstChild;M;){var A=M.nextSibling,z=M.nodeName;M[Ci]||z==="SCRIPT"||z==="STYLE"||z==="LINK"&&M.rel.toLowerCase()==="stylesheet"||s.removeChild(M),M=A}}if(c===0){t.removeChild(p),Xo(i);return}c--}else s==="$"||s==="$?"||s==="$!"?c++:l=s.charCodeAt(0)-48;else l=0;s=p}while(s);Xo(i)}function mh(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":mh(s),Gr(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function Py(t,i,s,l){for(;t.nodeType===1;){var c=s;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[Ci])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(p=t.getAttribute("rel"),p==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(p!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(p=t.getAttribute("src"),(p!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&p&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var p=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===p)return t}else return t;if(t=xi(t.nextSibling),t===null)break}return null}function By(t,i,s){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=xi(t.nextSibling),t===null))return null;return t}function gh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function Iy(t,i){var s=t.ownerDocument;if(t.data!=="$?"||s.readyState==="complete")i();else{var l=function(){i(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function xi(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return t}var _h=null;function H_(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return t;i--}else s==="/$"&&i++}t=t.previousSibling}return null}function G_(t,i,s){switch(i=gu(s),t){case"html":if(t=i.documentElement,!t)throw Error(a(452));return t;case"head":if(t=i.head,!t)throw Error(a(453));return t;case"body":if(t=i.body,!t)throw Error(a(454));return t;default:throw Error(a(451))}}function Bo(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Gr(t)}var pi=new Map,V_=new Set;function _u(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var sa=Z.d;Z.d={f:Fy,r:zy,D:Hy,C:Gy,L:Vy,m:ky,X:Wy,S:Xy,M:qy};function Fy(){var t=sa.f(),i=lu();return t||i}function zy(t){var i=xa(t);i!==null&&i.tag===5&&i.type==="form"?lg(i):sa.r(t)}var _s=typeof document>"u"?null:document;function k_(t,i,s){var l=_s;if(l&&typeof i=="string"&&i){var c=Sn(i);c='link[rel="'+t+'"][href="'+c+'"]',typeof s=="string"&&(c+='[crossorigin="'+s+'"]'),V_.has(c)||(V_.add(c),t={rel:t,crossOrigin:s,href:i},l.querySelector(c)===null&&(i=l.createElement("link"),wn(i,"link",t),cn(i),l.head.appendChild(i)))}}function Hy(t){sa.D(t),k_("dns-prefetch",t,null)}function Gy(t,i){sa.C(t,i),k_("preconnect",t,i)}function Vy(t,i,s){sa.L(t,i,s);var l=_s;if(l&&t&&i){var c='link[rel="preload"][as="'+Sn(i)+'"]';i==="image"&&s&&s.imageSrcSet?(c+='[imagesrcset="'+Sn(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(c+='[imagesizes="'+Sn(s.imageSizes)+'"]')):c+='[href="'+Sn(t)+'"]';var p=c;switch(i){case"style":p=vs(t);break;case"script":p=Ss(t)}pi.has(p)||(t=g({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:t,as:i},s),pi.set(p,t),l.querySelector(c)!==null||i==="style"&&l.querySelector(Io(p))||i==="script"&&l.querySelector(Fo(p))||(i=l.createElement("link"),wn(i,"link",t),cn(i),l.head.appendChild(i)))}}function ky(t,i){sa.m(t,i);var s=_s;if(s&&t){var l=i&&typeof i.as=="string"?i.as:"script",c='link[rel="modulepreload"][as="'+Sn(l)+'"][href="'+Sn(t)+'"]',p=c;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":p=Ss(t)}if(!pi.has(p)&&(t=g({rel:"modulepreload",href:t},i),pi.set(p,t),s.querySelector(c)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Fo(p)))return}l=s.createElement("link"),wn(l,"link",t),cn(l),s.head.appendChild(l)}}}function Xy(t,i,s){sa.S(t,i,s);var l=_s;if(l&&t){var c=ya(l).hoistableStyles,p=vs(t);i=i||"default";var M=c.get(p);if(!M){var A={loading:0,preload:null};if(M=l.querySelector(Io(p)))A.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":i},s),(s=pi.get(p))&&vh(t,s);var z=M=l.createElement("link");cn(z),wn(z,"link",t),z._p=new Promise(function(te,pe){z.onload=te,z.onerror=pe}),z.addEventListener("load",function(){A.loading|=1}),z.addEventListener("error",function(){A.loading|=2}),A.loading|=4,vu(M,i,l)}M={type:"stylesheet",instance:M,count:1,state:A},c.set(p,M)}}}function Wy(t,i){sa.X(t,i);var s=_s;if(s&&t){var l=ya(s).hoistableScripts,c=Ss(t),p=l.get(c);p||(p=s.querySelector(Fo(c)),p||(t=g({src:t,async:!0},i),(i=pi.get(c))&&Sh(t,i),p=s.createElement("script"),cn(p),wn(p,"link",t),s.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},l.set(c,p))}}function qy(t,i){sa.M(t,i);var s=_s;if(s&&t){var l=ya(s).hoistableScripts,c=Ss(t),p=l.get(c);p||(p=s.querySelector(Fo(c)),p||(t=g({src:t,async:!0,type:"module"},i),(i=pi.get(c))&&Sh(t,i),p=s.createElement("script"),cn(p),wn(p,"link",t),s.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},l.set(c,p))}}function X_(t,i,s,l){var c=(c=ne.current)?_u(c):null;if(!c)throw Error(a(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=vs(s.href),s=ya(c).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=vs(s.href);var p=ya(c).hoistableStyles,M=p.get(t);if(M||(c=c.ownerDocument||c,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},p.set(t,M),(p=c.querySelector(Io(t)))&&!p._p&&(M.instance=p,M.state.loading=5),pi.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},pi.set(t,s),p||Yy(c,t,s,M.state))),i&&l===null)throw Error(a(528,""));return M}if(i&&l!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Ss(s),s=ya(c).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,t))}}function vs(t){return'href="'+Sn(t)+'"'}function Io(t){return'link[rel="stylesheet"]['+t+"]"}function W_(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function Yy(t,i,s,l){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=t.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),wn(i,"link",s),cn(i),t.head.appendChild(i))}function Ss(t){return'[src="'+Sn(t)+'"]'}function Fo(t){return"script[async]"+t}function q_(t,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=t.querySelector('style[data-href~="'+Sn(s.href)+'"]');if(l)return i.instance=l,cn(l),l;var c=g({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),cn(l),wn(l,"style",c),vu(l,s.precedence,t),i.instance=l;case"stylesheet":c=vs(s.href);var p=t.querySelector(Io(c));if(p)return i.state.loading|=4,i.instance=p,cn(p),p;l=W_(s),(c=pi.get(c))&&vh(l,c),p=(t.ownerDocument||t).createElement("link"),cn(p);var M=p;return M._p=new Promise(function(A,z){M.onload=A,M.onerror=z}),wn(p,"link",l),i.state.loading|=4,vu(p,s.precedence,t),i.instance=p;case"script":return p=Ss(s.src),(c=t.querySelector(Fo(p)))?(i.instance=c,cn(c),c):(l=s,(c=pi.get(p))&&(l=g({},s),Sh(l,c)),t=t.ownerDocument||t,c=t.createElement("script"),cn(c),wn(c,"link",l),t.head.appendChild(c),i.instance=c);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,vu(l,s.precedence,t));return i.instance}function vu(t,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=l.length?l[l.length-1]:null,p=c,M=0;M<l.length;M++){var A=l[M];if(A.dataset.precedence===i)p=A;else if(p!==c)break}p?p.parentNode.insertBefore(t,p.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(t,i.firstChild))}function vh(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function Sh(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var Su=null;function Y_(t,i,s){if(Su===null){var l=new Map,c=Su=new Map;c.set(s,l)}else c=Su,l=c.get(s),l||(l=new Map,c.set(s,l));if(l.has(t))return l;for(l.set(t,null),s=s.getElementsByTagName(t),c=0;c<s.length;c++){var p=s[c];if(!(p[Ci]||p[pn]||t==="link"&&p.getAttribute("rel")==="stylesheet")&&p.namespaceURI!=="http://www.w3.org/2000/svg"){var M=p.getAttribute(i)||"";M=t+M;var A=l.get(M);A?A.push(p):l.set(M,[p])}}return l}function j_(t,i,s){t=t.ownerDocument||t,t.head.insertBefore(s,i==="title"?t.querySelector("head > title"):null)}function jy(t,i,s){if(s===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return t=i.disabled,typeof i.precedence=="string"&&t==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function Z_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var zo=null;function Zy(){}function Ky(t,i,s){if(zo===null)throw Error(a(475));var l=zo;if(i.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var c=vs(s.href),p=t.querySelector(Io(c));if(p){t=p._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(l.count++,l=xu.bind(l),t.then(l,l)),i.state.loading|=4,i.instance=p,cn(p);return}p=t.ownerDocument||t,s=W_(s),(c=pi.get(c))&&vh(s,c),p=p.createElement("link"),cn(p);var M=p;M._p=new Promise(function(A,z){M.onload=A,M.onerror=z}),wn(p,"link",s),i.instance=p}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,t),(t=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=xu.bind(l),t.addEventListener("load",i),t.addEventListener("error",i))}}function Qy(){if(zo===null)throw Error(a(475));var t=zo;return t.stylesheets&&t.count===0&&xh(t,t.stylesheets),0<t.count?function(i){var s=setTimeout(function(){if(t.stylesheets&&xh(t,t.stylesheets),t.unsuspend){var l=t.unsuspend;t.unsuspend=null,l()}},6e4);return t.unsuspend=i,function(){t.unsuspend=null,clearTimeout(s)}}:null}function xu(){if(this.count--,this.count===0){if(this.stylesheets)xh(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var yu=null;function xh(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,yu=new Map,i.forEach(Jy,t),yu=null,xu.call(t))}function Jy(t,i){if(!(i.state.loading&4)){var s=yu.get(t);if(s)var l=s.get(null);else{s=new Map,yu.set(t,s);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),p=0;p<c.length;p++){var M=c[p];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(s.set(M.dataset.precedence,M),l=M)}l&&s.set(null,l)}c=i.instance,M=c.getAttribute("data-precedence"),p=s.get(M)||l,p===l&&s.set(null,c),s.set(M,c),this.count++,l=xu.bind(this),c.addEventListener("load",l),c.addEventListener("error",l),p?p.parentNode.insertBefore(c,p.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),i.state.loading|=4}}var Ho={$$typeof:L,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function $y(t,i,s,l,c,p,M,A){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=we(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=we(0),this.hiddenUpdates=we(null),this.identifierPrefix=l,this.onUncaughtError=c,this.onCaughtError=p,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function K_(t,i,s,l,c,p,M,A,z,te,pe,Ee){return t=new $y(t,i,s,M,A,z,te,Ee),i=1,p===!0&&(i|=24),p=ei(3,null,null,i),t.current=p,p.stateNode=t,i=ef(),i.refCount++,t.pooledCache=i,i.refCount++,p.memoizedState={element:l,isDehydrated:s,cache:i},rf(p),t}function Q_(t){return t?(t=Kr,t):Kr}function J_(t,i,s,l,c,p){c=Q_(c),l.context===null?l.context=c:l.pendingContext=c,l=ba(i),l.payload={element:s},p=p===void 0?null:p,p!==null&&(l.callback=p),s=Aa(t,l,i),s!==null&&(ri(s,t,i),go(s,t,i))}function $_(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function yh(t,i){$_(t,i),(t=t.alternate)&&$_(t,i)}function ev(t){if(t.tag===13){var i=Zr(t,67108864);i!==null&&ri(i,t,67108864),yh(t,67108864)}}var Eu=!0;function eE(t,i,s,l){var c=B.T;B.T=null;var p=Z.p;try{Z.p=2,Eh(t,i,s,l)}finally{Z.p=p,B.T=c}}function tE(t,i,s,l){var c=B.T;B.T=null;var p=Z.p;try{Z.p=8,Eh(t,i,s,l)}finally{Z.p=p,B.T=c}}function Eh(t,i,s,l){if(Eu){var c=Mh(l);if(c===null)uh(t,i,l,Mu,s),nv(t,l);else if(iE(c,t,i,s,l))l.stopPropagation();else if(nv(t,l),i&4&&-1<nE.indexOf(t)){for(;c!==null;){var p=xa(c);if(p!==null)switch(p.tag){case 3:if(p=p.stateNode,p.current.memoizedState.isDehydrated){var M=Ke(p.pendingLanes);if(M!==0){var A=p;for(A.pendingLanes|=2,A.entangledLanes|=2;M;){var z=1<<31-Ge(M);A.entanglements[1]|=z,M&=~z}Oi(p),(Pt&6)===0&&(su=ze()+500,No(0))}}break;case 13:A=Zr(p,2),A!==null&&ri(A,p,2),lu(),yh(p,2)}if(p=Mh(l),p===null&&uh(t,i,l,Mu,s),p===c)break;c=p}c!==null&&l.stopPropagation()}else uh(t,i,l,null,s)}}function Mh(t){return t=Rc(t),Th(t)}var Mu=null;function Th(t){if(Mu=null,t=qi(t),t!==null){var i=u(t);if(i===null)t=null;else{var s=i.tag;if(s===13){if(t=f(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return Mu=t,null}function tv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ot()){case We:return 2;case ct:return 8;case qt:case Xt:return 32;case O:return 268435456;default:return 32}default:return 32}}var bh=!1,za=null,Ha=null,Ga=null,Go=new Map,Vo=new Map,Va=[],nE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function nv(t,i){switch(t){case"focusin":case"focusout":za=null;break;case"dragenter":case"dragleave":Ha=null;break;case"mouseover":case"mouseout":Ga=null;break;case"pointerover":case"pointerout":Go.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vo.delete(i.pointerId)}}function ko(t,i,s,l,c,p){return t===null||t.nativeEvent!==p?(t={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:p,targetContainers:[c]},i!==null&&(i=xa(i),i!==null&&ev(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,c!==null&&i.indexOf(c)===-1&&i.push(c),t)}function iE(t,i,s,l,c){switch(i){case"focusin":return za=ko(za,t,i,s,l,c),!0;case"dragenter":return Ha=ko(Ha,t,i,s,l,c),!0;case"mouseover":return Ga=ko(Ga,t,i,s,l,c),!0;case"pointerover":var p=c.pointerId;return Go.set(p,ko(Go.get(p)||null,t,i,s,l,c)),!0;case"gotpointercapture":return p=c.pointerId,Vo.set(p,ko(Vo.get(p)||null,t,i,s,l,c)),!0}return!1}function iv(t){var i=qi(t.target);if(i!==null){var s=u(i);if(s!==null){if(i=s.tag,i===13){if(i=f(s),i!==null){t.blockedOn=i,Tn(t.priority,function(){if(s.tag===13){var l=ai();l=Je(l);var c=Zr(s,l);c!==null&&ri(c,s,l),yh(s,l)}});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Tu(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=Mh(t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);Ac=l,s.target.dispatchEvent(l),Ac=null}else return i=xa(s),i!==null&&ev(i),t.blockedOn=s,!1;i.shift()}return!0}function av(t,i,s){Tu(t)&&s.delete(i)}function aE(){bh=!1,za!==null&&Tu(za)&&(za=null),Ha!==null&&Tu(Ha)&&(Ha=null),Ga!==null&&Tu(Ga)&&(Ga=null),Go.forEach(av),Vo.forEach(av)}function bu(t,i){t.blockedOn===i&&(t.blockedOn=null,bh||(bh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,aE)))}var Au=null;function rv(t){Au!==t&&(Au=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Au===t&&(Au=null);for(var i=0;i<t.length;i+=3){var s=t[i],l=t[i+1],c=t[i+2];if(typeof l!="function"){if(Th(l||s)===null)continue;break}var p=xa(s);p!==null&&(t.splice(i,3),i-=3,Tf(p,{pending:!0,data:c,method:s.method,action:l},l,c))}}))}function Xo(t){function i(z){return bu(z,t)}za!==null&&bu(za,t),Ha!==null&&bu(Ha,t),Ga!==null&&bu(Ga,t),Go.forEach(i),Vo.forEach(i);for(var s=0;s<Va.length;s++){var l=Va[s];l.blockedOn===t&&(l.blockedOn=null)}for(;0<Va.length&&(s=Va[0],s.blockedOn===null);)iv(s),s.blockedOn===null&&Va.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var c=s[l],p=s[l+1],M=c[en]||null;if(typeof p=="function")M||rv(s);else if(M){var A=null;if(p&&p.hasAttribute("formAction")){if(c=p,M=p[en]||null)A=M.formAction;else if(Th(c)!==null)continue}else A=M.action;typeof A=="function"?s[l+1]=A:(s.splice(l,3),l-=3),rv(s)}}}function Ah(t){this._internalRoot=t}Ru.prototype.render=Ah.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,l=ai();J_(s,l,t,i,null,null)},Ru.prototype.unmount=Ah.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;J_(t.current,2,null,t,null,null),lu(),i[wi]=null}};function Ru(t){this._internalRoot=t}Ru.prototype.unstable_scheduleHydration=function(t){if(t){var i=St();t={blockedOn:null,target:t,priority:i};for(var s=0;s<Va.length&&i!==0&&i<Va[s].priority;s++);Va.splice(s,0,t),s===0&&iv(t)}};var sv=e.version;if(sv!=="19.1.1")throw Error(a(527,sv,"19.1.1"));Z.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(a(188)):(t=Object.keys(t).join(","),Error(a(268,t)));return t=m(i),t=t!==null?d(t):null,t=t===null?null:t.stateNode,t};var rE={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wu.isDisabled&&wu.supportsFiber)try{de=wu.inject(rE),Se=wu}catch{}}return qo.createRoot=function(t,i){if(!o(t))throw Error(a(299));var s=!1,l="",c=Eg,p=Mg,M=Tg,A=null;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(c=i.onUncaughtError),i.onCaughtError!==void 0&&(p=i.onCaughtError),i.onRecoverableError!==void 0&&(M=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(A=i.unstable_transitionCallbacks)),i=K_(t,1,!1,null,null,s,l,c,p,M,A,null),t[wi]=i.current,lh(t),new Ah(i)},qo.hydrateRoot=function(t,i,s){if(!o(t))throw Error(a(299));var l=!1,c="",p=Eg,M=Mg,A=Tg,z=null,te=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onUncaughtError!==void 0&&(p=s.onUncaughtError),s.onCaughtError!==void 0&&(M=s.onCaughtError),s.onRecoverableError!==void 0&&(A=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(z=s.unstable_transitionCallbacks),s.formState!==void 0&&(te=s.formState)),i=K_(t,1,!0,i,s??null,l,c,p,M,A,z,te),i.context=Q_(null),s=i.current,l=ai(),l=Je(l),c=ba(l),c.callback=null,Aa(s,c,l),s=l,i.current.lanes=s,Pe(i,s),Oi(i),t[wi]=i.current,lh(t),new Ru(i)},qo.version="19.1.1",qo}var gv;function mE(){if(gv)return Ch.exports;gv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Ch.exports=pE(),Ch.exports}var gE=mE();/**
 * react-router v7.9.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var _v="popstate";function _E(r={}){function e(a,o){let{pathname:u,search:f,hash:h}=a.location;return _d("",{pathname:u,search:f,hash:h},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(a,o){return typeof o=="string"?o:nl(o)}return SE(e,n,null,r)}function $t(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function Vi(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function vE(){return Math.random().toString(36).substring(2,10)}function vv(r,e){return{usr:r.state,key:r.key,idx:e}}function _d(r,e,n=null,a){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?Ws(e):e,state:n,key:e&&e.key||a||vE()}}function nl({pathname:r="/",search:e="",hash:n=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(r+=n.charAt(0)==="#"?n:"#"+n),r}function Ws(r){let e={};if(r){let n=r.indexOf("#");n>=0&&(e.hash=r.substring(n),r=r.substring(0,n));let a=r.indexOf("?");a>=0&&(e.search=r.substring(a),r=r.substring(0,a)),r&&(e.pathname=r)}return e}function SE(r,e,n,a={}){let{window:o=document.defaultView,v5Compat:u=!1}=a,f=o.history,h="POP",m=null,d=g();d==null&&(d=0,f.replaceState({...f.state,idx:d},""));function g(){return(f.state||{idx:null}).idx}function _(){h="POP";let x=g(),v=x==null?null:x-d;d=x,m&&m({action:h,location:T.location,delta:v})}function S(x,v){h="PUSH";let D=_d(T.location,x,v);d=g()+1;let L=vv(D,d),C=T.createHref(D);try{f.pushState(L,"",C)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;o.location.assign(C)}u&&m&&m({action:h,location:T.location,delta:1})}function y(x,v){h="REPLACE";let D=_d(T.location,x,v);d=g();let L=vv(D,d),C=T.createHref(D);f.replaceState(L,"",C),u&&m&&m({action:h,location:T.location,delta:0})}function E(x){return xE(x)}let T={get action(){return h},get location(){return r(o,f)},listen(x){if(m)throw new Error("A history only accepts one active listener");return o.addEventListener(_v,_),m=x,()=>{o.removeEventListener(_v,_),m=null}},createHref(x){return e(o,x)},createURL:E,encodeLocation(x){let v=E(x);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:S,replace:y,go(x){return f.go(x)}};return T}function xE(r,e=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),$t(n,"No window.location.(origin|href) available to create URL");let a=typeof r=="string"?r:nl(r);return a=a.replace(/ $/,"%20"),!e&&a.startsWith("//")&&(a=n+a),new URL(a,n)}function H0(r,e,n="/"){return yE(r,e,n,!1)}function yE(r,e,n,a){let o=typeof e=="string"?Ws(e):e,u=va(o.pathname||"/",n);if(u==null)return null;let f=G0(r);EE(f);let h=null;for(let m=0;h==null&&m<f.length;++m){let d=NE(u);h=UE(f[m],d,a)}return h}function G0(r,e=[],n=[],a="",o=!1){let u=(f,h,m=o,d)=>{let g={relativePath:d===void 0?f.path||"":d,caseSensitive:f.caseSensitive===!0,childrenIndex:h,route:f};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(a)&&m)return;$t(g.relativePath.startsWith(a),`Absolute route path "${g.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(a.length)}let _=ga([a,g.relativePath]),S=n.concat(g);f.children&&f.children.length>0&&($t(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${_}".`),G0(f.children,e,S,_,m)),!(f.path==null&&!f.index)&&e.push({path:_,score:CE(_,f.index),routesMeta:S})};return r.forEach((f,h)=>{if(f.path===""||!f.path?.includes("?"))u(f,h);else for(let m of V0(f.path))u(f,h,!0,m)}),e}function V0(r){let e=r.split("/");if(e.length===0)return[];let[n,...a]=e,o=n.endsWith("?"),u=n.replace(/\?$/,"");if(a.length===0)return o?[u,""]:[u];let f=V0(a.join("/")),h=[];return h.push(...f.map(m=>m===""?u:[u,m].join("/"))),o&&h.push(...f),h.map(m=>r.startsWith("/")&&m===""?"/":m)}function EE(r){r.sort((e,n)=>e.score!==n.score?n.score-e.score:DE(e.routesMeta.map(a=>a.childrenIndex),n.routesMeta.map(a=>a.childrenIndex)))}var ME=/^:[\w-]+$/,TE=3,bE=2,AE=1,RE=10,wE=-2,Sv=r=>r==="*";function CE(r,e){let n=r.split("/"),a=n.length;return n.some(Sv)&&(a+=wE),e&&(a+=bE),n.filter(o=>!Sv(o)).reduce((o,u)=>o+(ME.test(u)?TE:u===""?AE:RE),a)}function DE(r,e){return r.length===e.length&&r.slice(0,-1).every((a,o)=>a===e[o])?r[r.length-1]-e[e.length-1]:0}function UE(r,e,n=!1){let{routesMeta:a}=r,o={},u="/",f=[];for(let h=0;h<a.length;++h){let m=a[h],d=h===a.length-1,g=u==="/"?e:e.slice(u.length)||"/",_=cc({path:m.relativePath,caseSensitive:m.caseSensitive,end:d},g),S=m.route;if(!_&&d&&n&&!a[a.length-1].route.index&&(_=cc({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},g)),!_)return null;Object.assign(o,_.params),f.push({params:o,pathname:ga([u,_.pathname]),pathnameBase:IE(ga([u,_.pathnameBase])),route:S}),_.pathnameBase!=="/"&&(u=ga([u,_.pathnameBase]))}return f}function cc(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[n,a]=LE(r.path,r.caseSensitive,r.end),o=e.match(n);if(!o)return null;let u=o[0],f=u.replace(/(.)\/+$/,"$1"),h=o.slice(1);return{params:a.reduce((d,{paramName:g,isOptional:_},S)=>{if(g==="*"){let E=h[S]||"";f=u.slice(0,u.length-E.length).replace(/(.)\/+$/,"$1")}const y=h[S];return _&&!y?d[g]=void 0:d[g]=(y||"").replace(/%2F/g,"/"),d},{}),pathname:u,pathnameBase:f,pattern:r}}function LE(r,e=!1,n=!0){Vi(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let a=[],o="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,h,m)=>(a.push({paramName:h,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(a.push({paramName:"*"}),o+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":r!==""&&r!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),a]}function NE(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Vi(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function va(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,a=r.charAt(n);return a&&a!=="/"?null:r.slice(n)||"/"}function OE(r,e="/"){let{pathname:n,search:a="",hash:o=""}=typeof r=="string"?Ws(r):r;return{pathname:n?n.startsWith("/")?n:PE(n,e):e,search:FE(a),hash:zE(o)}}function PE(r,e){let n=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Nh(r,e,n,a){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function BE(r){return r.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function k0(r){let e=BE(r);return e.map((n,a)=>a===e.length-1?n.pathname:n.pathnameBase)}function X0(r,e,n,a=!1){let o;typeof r=="string"?o=Ws(r):(o={...r},$t(!o.pathname||!o.pathname.includes("?"),Nh("?","pathname","search",o)),$t(!o.pathname||!o.pathname.includes("#"),Nh("#","pathname","hash",o)),$t(!o.search||!o.search.includes("#"),Nh("#","search","hash",o)));let u=r===""||o.pathname==="",f=u?"/":o.pathname,h;if(f==null)h=n;else{let _=e.length-1;if(!a&&f.startsWith("..")){let S=f.split("/");for(;S[0]==="..";)S.shift(),_-=1;o.pathname=S.join("/")}h=_>=0?e[_]:"/"}let m=OE(o,h),d=f&&f!=="/"&&f.endsWith("/"),g=(u||f===".")&&n.endsWith("/");return!m.pathname.endsWith("/")&&(d||g)&&(m.pathname+="/"),m}var ga=r=>r.join("/").replace(/\/\/+/g,"/"),IE=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),FE=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,zE=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function HE(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var W0=["POST","PUT","PATCH","DELETE"];new Set(W0);var GE=["GET",...W0];new Set(GE);var qs=ge.createContext(null);qs.displayName="DataRouter";var mc=ge.createContext(null);mc.displayName="DataRouterState";ge.createContext(!1);var q0=ge.createContext({isTransitioning:!1});q0.displayName="ViewTransition";var VE=ge.createContext(new Map);VE.displayName="Fetchers";var kE=ge.createContext(null);kE.displayName="Await";var Wi=ge.createContext(null);Wi.displayName="Navigation";var ll=ge.createContext(null);ll.displayName="Location";var Sa=ge.createContext({outlet:null,matches:[],isDataRoute:!1});Sa.displayName="Route";var pp=ge.createContext(null);pp.displayName="RouteError";function XE(r,{relative:e}={}){$t(ul(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:a}=ge.useContext(Wi),{hash:o,pathname:u,search:f}=cl(r,{relative:e}),h=u;return n!=="/"&&(h=u==="/"?n:ga([n,u])),a.createHref({pathname:h,search:f,hash:o})}function ul(){return ge.useContext(ll)!=null}function Fr(){return $t(ul(),"useLocation() may be used only in the context of a <Router> component."),ge.useContext(ll).location}var Y0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function j0(r){ge.useContext(Wi).static||ge.useLayoutEffect(r)}function Z0(){let{isDataRoute:r}=ge.useContext(Sa);return r?iM():WE()}function WE(){$t(ul(),"useNavigate() may be used only in the context of a <Router> component.");let r=ge.useContext(qs),{basename:e,navigator:n}=ge.useContext(Wi),{matches:a}=ge.useContext(Sa),{pathname:o}=Fr(),u=JSON.stringify(k0(a)),f=ge.useRef(!1);return j0(()=>{f.current=!0}),ge.useCallback((m,d={})=>{if(Vi(f.current,Y0),!f.current)return;if(typeof m=="number"){n.go(m);return}let g=X0(m,JSON.parse(u),o,d.relative==="path");r==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:ga([e,g.pathname])),(d.replace?n.replace:n.push)(g,d.state,d)},[e,n,u,o,r])}ge.createContext(null);function cl(r,{relative:e}={}){let{matches:n}=ge.useContext(Sa),{pathname:a}=Fr(),o=JSON.stringify(k0(n));return ge.useMemo(()=>X0(r,JSON.parse(o),a,e==="path"),[r,o,a,e])}function qE(r,e){return K0(r,e)}function K0(r,e,n,a,o){$t(ul(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:u}=ge.useContext(Wi),{matches:f}=ge.useContext(Sa),h=f[f.length-1],m=h?h.params:{},d=h?h.pathname:"/",g=h?h.pathnameBase:"/",_=h&&h.route;{let D=_&&_.path||"";Q0(d,!_||D.endsWith("*")||D.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${d}" (under <Route path="${D}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${D}"> to <Route path="${D==="/"?"*":`${D}/*`}">.`)}let S=Fr(),y;if(e){let D=typeof e=="string"?Ws(e):e;$t(g==="/"||D.pathname?.startsWith(g),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${D.pathname}" was given in the \`location\` prop.`),y=D}else y=S;let E=y.pathname||"/",T=E;if(g!=="/"){let D=g.replace(/^\//,"").split("/");T="/"+E.replace(/^\//,"").split("/").slice(D.length).join("/")}let x=H0(r,{pathname:T});Vi(_||x!=null,`No routes matched location "${y.pathname}${y.search}${y.hash}" `),Vi(x==null||x[x.length-1].route.element!==void 0||x[x.length-1].route.Component!==void 0||x[x.length-1].route.lazy!==void 0,`Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let v=QE(x&&x.map(D=>Object.assign({},D,{params:Object.assign({},m,D.params),pathname:ga([g,u.encodeLocation?u.encodeLocation(D.pathname).pathname:D.pathname]),pathnameBase:D.pathnameBase==="/"?g:ga([g,u.encodeLocation?u.encodeLocation(D.pathnameBase).pathname:D.pathnameBase])})),f,n,a,o);return e&&v?ge.createElement(ll.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...y},navigationType:"POP"}},v):v}function YE(){let r=nM(),e=HE(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),n=r instanceof Error?r.stack:null,a="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:a},u={padding:"2px 4px",backgroundColor:a},f=null;return console.error("Error handled by React Router default ErrorBoundary:",r),f=ge.createElement(ge.Fragment,null,ge.createElement("p",null,"💿 Hey developer 👋"),ge.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",ge.createElement("code",{style:u},"ErrorBoundary")," or"," ",ge.createElement("code",{style:u},"errorElement")," prop on your route.")),ge.createElement(ge.Fragment,null,ge.createElement("h2",null,"Unexpected Application Error!"),ge.createElement("h3",{style:{fontStyle:"italic"}},e),n?ge.createElement("pre",{style:o},n):null,f)}var jE=ge.createElement(YE,null),ZE=class extends ge.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){this.props.unstable_onError?this.props.unstable_onError(r,e):console.error("React Router caught the following error during render",r)}render(){return this.state.error!==void 0?ge.createElement(Sa.Provider,{value:this.props.routeContext},ge.createElement(pp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function KE({routeContext:r,match:e,children:n}){let a=ge.useContext(qs);return a&&a.static&&a.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=e.route.id),ge.createElement(Sa.Provider,{value:r},n)}function QE(r,e=[],n=null,a=null,o=null){if(r==null){if(!n)return null;if(n.errors)r=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)r=n.matches;else return null}let u=r,f=n?.errors;if(f!=null){let d=u.findIndex(g=>g.route.id&&f?.[g.route.id]!==void 0);$t(d>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),u=u.slice(0,Math.min(u.length,d+1))}let h=!1,m=-1;if(n)for(let d=0;d<u.length;d++){let g=u[d];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(m=d),g.route.id){let{loaderData:_,errors:S}=n,y=g.route.loader&&!_.hasOwnProperty(g.route.id)&&(!S||S[g.route.id]===void 0);if(g.route.lazy||y){h=!0,m>=0?u=u.slice(0,m+1):u=[u[0]];break}}}return u.reduceRight((d,g,_)=>{let S,y=!1,E=null,T=null;n&&(S=f&&g.route.id?f[g.route.id]:void 0,E=g.route.errorElement||jE,h&&(m<0&&_===0?(Q0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),y=!0,T=null):m===_&&(y=!0,T=g.route.hydrateFallbackElement||null)));let x=e.concat(u.slice(0,_+1)),v=()=>{let D;return S?D=E:y?D=T:g.route.Component?D=ge.createElement(g.route.Component,null):g.route.element?D=g.route.element:D=d,ge.createElement(KE,{match:g,routeContext:{outlet:d,matches:x,isDataRoute:n!=null},children:D})};return n&&(g.route.ErrorBoundary||g.route.errorElement||_===0)?ge.createElement(ZE,{location:n.location,revalidation:n.revalidation,component:E,error:S,children:v(),routeContext:{outlet:null,matches:x,isDataRoute:!0},unstable_onError:a}):v()},null)}function mp(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function JE(r){let e=ge.useContext(qs);return $t(e,mp(r)),e}function $E(r){let e=ge.useContext(mc);return $t(e,mp(r)),e}function eM(r){let e=ge.useContext(Sa);return $t(e,mp(r)),e}function gp(r){let e=eM(r),n=e.matches[e.matches.length-1];return $t(n.route.id,`${r} can only be used on routes that contain a unique "id"`),n.route.id}function tM(){return gp("useRouteId")}function nM(){let r=ge.useContext(pp),e=$E("useRouteError"),n=gp("useRouteError");return r!==void 0?r:e.errors?.[n]}function iM(){let{router:r}=JE("useNavigate"),e=gp("useNavigate"),n=ge.useRef(!1);return j0(()=>{n.current=!0}),ge.useCallback(async(o,u={})=>{Vi(n.current,Y0),n.current&&(typeof o=="number"?r.navigate(o):await r.navigate(o,{fromRouteId:e,...u}))},[r,e])}var xv={};function Q0(r,e,n){!e&&!xv[r]&&(xv[r]=!0,Vi(!1,n))}ge.memo(aM);function aM({routes:r,future:e,state:n,unstable_onError:a}){return K0(r,void 0,n,a,e)}function ha(r){$t(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function rM({basename:r="/",children:e=null,location:n,navigationType:a="POP",navigator:o,static:u=!1}){$t(!ul(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=r.replace(/^\/*/,"/"),h=ge.useMemo(()=>({basename:f,navigator:o,static:u,future:{}}),[f,o,u]);typeof n=="string"&&(n=Ws(n));let{pathname:m="/",search:d="",hash:g="",state:_=null,key:S="default"}=n,y=ge.useMemo(()=>{let E=va(m,f);return E==null?null:{location:{pathname:E,search:d,hash:g,state:_,key:S},navigationType:a}},[f,m,d,g,_,S,a]);return Vi(y!=null,`<Router basename="${f}"> is not able to match the URL "${m}${d}${g}" because it does not start with the basename, so the <Router> won't render anything.`),y==null?null:ge.createElement(Wi.Provider,{value:h},ge.createElement(ll.Provider,{children:e,value:y}))}function sM({children:r,location:e}){return qE(vd(r),e)}function vd(r,e=[]){let n=[];return ge.Children.forEach(r,(a,o)=>{if(!ge.isValidElement(a))return;let u=[...e,o];if(a.type===ge.Fragment){n.push.apply(n,vd(a.props.children,u));return}$t(a.type===ha,`[${typeof a.type=="string"?a.type:a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),$t(!a.props.index||!a.props.children,"An index route cannot have child routes.");let f={id:a.props.id||u.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,hydrateFallbackElement:a.props.hydrateFallbackElement,HydrateFallback:a.props.HydrateFallback,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.hasErrorBoundary===!0||a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(f.children=vd(a.props.children,u)),n.push(f)}),n}var ec="get",tc="application/x-www-form-urlencoded";function gc(r){return r!=null&&typeof r.tagName=="string"}function oM(r){return gc(r)&&r.tagName.toLowerCase()==="button"}function lM(r){return gc(r)&&r.tagName.toLowerCase()==="form"}function uM(r){return gc(r)&&r.tagName.toLowerCase()==="input"}function cM(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function fM(r,e){return r.button===0&&(!e||e==="_self")&&!cM(r)}var Cu=null;function hM(){if(Cu===null)try{new FormData(document.createElement("form"),0),Cu=!1}catch{Cu=!0}return Cu}var dM=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Oh(r){return r!=null&&!dM.has(r)?(Vi(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${tc}"`),null):r}function pM(r,e){let n,a,o,u,f;if(lM(r)){let h=r.getAttribute("action");a=h?va(h,e):null,n=r.getAttribute("method")||ec,o=Oh(r.getAttribute("enctype"))||tc,u=new FormData(r)}else if(oM(r)||uM(r)&&(r.type==="submit"||r.type==="image")){let h=r.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=r.getAttribute("formaction")||h.getAttribute("action");if(a=m?va(m,e):null,n=r.getAttribute("formmethod")||h.getAttribute("method")||ec,o=Oh(r.getAttribute("formenctype"))||Oh(h.getAttribute("enctype"))||tc,u=new FormData(h,r),!hM()){let{name:d,type:g,value:_}=r;if(g==="image"){let S=d?`${d}.`:"";u.append(`${S}x`,"0"),u.append(`${S}y`,"0")}else d&&u.append(d,_)}}else{if(gc(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=ec,a=null,o=tc,f=r}return u&&o==="text/plain"&&(f=u,u=void 0),{action:a,method:n.toLowerCase(),encType:o,formData:u,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function _p(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function mM(r,e,n){let a=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return a.pathname==="/"?a.pathname=`_root.${n}`:e&&va(a.pathname,e)==="/"?a.pathname=`${e.replace(/\/$/,"")}/_root.${n}`:a.pathname=`${a.pathname.replace(/\/$/,"")}.${n}`,a}async function gM(r,e){if(r.id in e)return e[r.id];try{let n=await import(r.module);return e[r.id]=n,n}catch(n){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function _M(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function vM(r,e,n){let a=await Promise.all(r.map(async o=>{let u=e.routes[o.route.id];if(u){let f=await gM(u,n);return f.links?f.links():[]}return[]}));return EM(a.flat(1).filter(_M).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function yv(r,e,n,a,o,u){let f=(m,d)=>n[d]?m.route.id!==n[d].route.id:!0,h=(m,d)=>n[d].pathname!==m.pathname||n[d].route.path?.endsWith("*")&&n[d].params["*"]!==m.params["*"];return u==="assets"?e.filter((m,d)=>f(m,d)||h(m,d)):u==="data"?e.filter((m,d)=>{let g=a.routes[m.route.id];if(!g||!g.hasLoader)return!1;if(f(m,d)||h(m,d))return!0;if(m.route.shouldRevalidate){let _=m.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof _=="boolean")return _}return!0}):[]}function SM(r,e,{includeHydrateFallback:n}={}){return xM(r.map(a=>{let o=e.routes[a.route.id];if(!o)return[];let u=[o.module];return o.clientActionModule&&(u=u.concat(o.clientActionModule)),o.clientLoaderModule&&(u=u.concat(o.clientLoaderModule)),n&&o.hydrateFallbackModule&&(u=u.concat(o.hydrateFallbackModule)),o.imports&&(u=u.concat(o.imports)),u}).flat(1))}function xM(r){return[...new Set(r)]}function yM(r){let e={},n=Object.keys(r).sort();for(let a of n)e[a]=r[a];return e}function EM(r,e){let n=new Set;return new Set(e),r.reduce((a,o)=>{let u=JSON.stringify(yM(o));return n.has(u)||(n.add(u),a.push({key:u,link:o})),a},[])}function J0(){let r=ge.useContext(qs);return _p(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function MM(){let r=ge.useContext(mc);return _p(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var vp=ge.createContext(void 0);vp.displayName="FrameworkContext";function $0(){let r=ge.useContext(vp);return _p(r,"You must render this element inside a <HydratedRouter> element"),r}function TM(r,e){let n=ge.useContext(vp),[a,o]=ge.useState(!1),[u,f]=ge.useState(!1),{onFocus:h,onBlur:m,onMouseEnter:d,onMouseLeave:g,onTouchStart:_}=e,S=ge.useRef(null);ge.useEffect(()=>{if(r==="render"&&f(!0),r==="viewport"){let T=v=>{v.forEach(D=>{f(D.isIntersecting)})},x=new IntersectionObserver(T,{threshold:.5});return S.current&&x.observe(S.current),()=>{x.disconnect()}}},[r]),ge.useEffect(()=>{if(a){let T=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(T)}}},[a]);let y=()=>{o(!0)},E=()=>{o(!1),f(!1)};return n?r!=="intent"?[u,S,{}]:[u,S,{onFocus:Yo(h,y),onBlur:Yo(m,E),onMouseEnter:Yo(d,y),onMouseLeave:Yo(g,E),onTouchStart:Yo(_,y)}]:[!1,S,{}]}function Yo(r,e){return n=>{r&&r(n),n.defaultPrevented||e(n)}}function bM({page:r,...e}){let{router:n}=J0(),a=ge.useMemo(()=>H0(n.routes,r,n.basename),[n.routes,r,n.basename]);return a?ge.createElement(RM,{page:r,matches:a,...e}):null}function AM(r){let{manifest:e,routeModules:n}=$0(),[a,o]=ge.useState([]);return ge.useEffect(()=>{let u=!1;return vM(r,e,n).then(f=>{u||o(f)}),()=>{u=!0}},[r,e,n]),a}function RM({page:r,matches:e,...n}){let a=Fr(),{manifest:o,routeModules:u}=$0(),{basename:f}=J0(),{loaderData:h,matches:m}=MM(),d=ge.useMemo(()=>yv(r,e,m,o,a,"data"),[r,e,m,o,a]),g=ge.useMemo(()=>yv(r,e,m,o,a,"assets"),[r,e,m,o,a]),_=ge.useMemo(()=>{if(r===a.pathname+a.search+a.hash)return[];let E=new Set,T=!1;if(e.forEach(v=>{let D=o.routes[v.route.id];!D||!D.hasLoader||(!d.some(L=>L.route.id===v.route.id)&&v.route.id in h&&u[v.route.id]?.shouldRevalidate||D.hasClientLoader?T=!0:E.add(v.route.id))}),E.size===0)return[];let x=mM(r,f,"data");return T&&E.size>0&&x.searchParams.set("_routes",e.filter(v=>E.has(v.route.id)).map(v=>v.route.id).join(",")),[x.pathname+x.search]},[f,h,a,o,d,e,r,u]),S=ge.useMemo(()=>SM(g,o),[g,o]),y=AM(g);return ge.createElement(ge.Fragment,null,_.map(E=>ge.createElement("link",{key:E,rel:"prefetch",as:"fetch",href:E,...n})),S.map(E=>ge.createElement("link",{key:E,rel:"modulepreload",href:E,...n})),y.map(({key:E,link:T})=>ge.createElement("link",{key:E,nonce:n.nonce,...T})))}function wM(...r){return e=>{r.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var eS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{eS&&(window.__reactRouterVersion="7.9.1")}catch{}function CM({basename:r,children:e,window:n}){let a=ge.useRef();a.current==null&&(a.current=_E({window:n,v5Compat:!0}));let o=a.current,[u,f]=ge.useState({action:o.action,location:o.location}),h=ge.useCallback(m=>{ge.startTransition(()=>f(m))},[f]);return ge.useLayoutEffect(()=>o.listen(h),[o,h]),ge.createElement(rM,{basename:r,children:e,location:u.location,navigationType:u.action,navigator:o})}var tS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ka=ge.forwardRef(function({onClick:e,discover:n="render",prefetch:a="none",relative:o,reloadDocument:u,replace:f,state:h,target:m,to:d,preventScrollReset:g,viewTransition:_,...S},y){let{basename:E}=ge.useContext(Wi),T=typeof d=="string"&&tS.test(d),x,v=!1;if(typeof d=="string"&&T&&(x=d,eS))try{let U=new URL(window.location.href),R=d.startsWith("//")?new URL(U.protocol+d):new URL(d),k=va(R.pathname,E);R.origin===U.origin&&k!=null?d=k+R.search+R.hash:v=!0}catch{Vi(!1,`<Link to="${d}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let D=XE(d,{relative:o}),[L,C,P]=TM(a,S),F=NM(d,{replace:f,state:h,target:m,preventScrollReset:g,relative:o,viewTransition:_});function I(U){e&&e(U),U.defaultPrevented||F(U)}let X=ge.createElement("a",{...S,...P,href:x||D,onClick:v||u?e:I,ref:wM(y,C),target:m,"data-discover":!T&&n==="render"?"true":void 0});return L&&!T?ge.createElement(ge.Fragment,null,X,ge.createElement(bM,{page:D})):X});Ka.displayName="Link";var DM=ge.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:a="",end:o=!1,style:u,to:f,viewTransition:h,children:m,...d},g){let _=cl(f,{relative:d.relative}),S=Fr(),y=ge.useContext(mc),{navigator:E,basename:T}=ge.useContext(Wi),x=y!=null&&FM(_)&&h===!0,v=E.encodeLocation?E.encodeLocation(_).pathname:_.pathname,D=S.pathname,L=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;n||(D=D.toLowerCase(),L=L?L.toLowerCase():null,v=v.toLowerCase()),L&&T&&(L=va(L,T)||L);const C=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let P=D===v||!o&&D.startsWith(v)&&D.charAt(C)==="/",F=L!=null&&(L===v||!o&&L.startsWith(v)&&L.charAt(v.length)==="/"),I={isActive:P,isPending:F,isTransitioning:x},X=P?e:void 0,U;typeof a=="function"?U=a(I):U=[a,P?"active":null,F?"pending":null,x?"transitioning":null].filter(Boolean).join(" ");let R=typeof u=="function"?u(I):u;return ge.createElement(Ka,{...d,"aria-current":X,className:U,ref:g,style:R,to:f,viewTransition:h},typeof m=="function"?m(I):m)});DM.displayName="NavLink";var UM=ge.forwardRef(({discover:r="render",fetcherKey:e,navigate:n,reloadDocument:a,replace:o,state:u,method:f=ec,action:h,onSubmit:m,relative:d,preventScrollReset:g,viewTransition:_,...S},y)=>{let E=BM(),T=IM(h,{relative:d}),x=f.toLowerCase()==="get"?"get":"post",v=typeof h=="string"&&tS.test(h),D=L=>{if(m&&m(L),L.defaultPrevented)return;L.preventDefault();let C=L.nativeEvent.submitter,P=C?.getAttribute("formmethod")||f;E(C||L.currentTarget,{fetcherKey:e,method:P,navigate:n,replace:o,state:u,relative:d,preventScrollReset:g,viewTransition:_})};return ge.createElement("form",{ref:y,method:x,action:T,onSubmit:a?m:D,...S,"data-discover":!v&&r==="render"?"true":void 0})});UM.displayName="Form";function LM(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function nS(r){let e=ge.useContext(qs);return $t(e,LM(r)),e}function NM(r,{target:e,replace:n,state:a,preventScrollReset:o,relative:u,viewTransition:f}={}){let h=Z0(),m=Fr(),d=cl(r,{relative:u});return ge.useCallback(g=>{if(fM(g,e)){g.preventDefault();let _=n!==void 0?n:nl(m)===nl(d);h(r,{replace:_,state:a,preventScrollReset:o,relative:u,viewTransition:f})}},[m,h,d,n,a,e,r,o,u,f])}var OM=0,PM=()=>`__${String(++OM)}__`;function BM(){let{router:r}=nS("useSubmit"),{basename:e}=ge.useContext(Wi),n=tM();return ge.useCallback(async(a,o={})=>{let{action:u,method:f,encType:h,formData:m,body:d}=pM(a,e);if(o.navigate===!1){let g=o.fetcherKey||PM();await r.fetch(g,n,o.action||u,{preventScrollReset:o.preventScrollReset,formData:m,body:d,formMethod:o.method||f,formEncType:o.encType||h,flushSync:o.flushSync})}else await r.navigate(o.action||u,{preventScrollReset:o.preventScrollReset,formData:m,body:d,formMethod:o.method||f,formEncType:o.encType||h,replace:o.replace,state:o.state,fromRouteId:n,flushSync:o.flushSync,viewTransition:o.viewTransition})},[r,e,n])}function IM(r,{relative:e}={}){let{basename:n}=ge.useContext(Wi),a=ge.useContext(Sa);$t(a,"useFormAction must be used inside a RouteContext");let[o]=a.matches.slice(-1),u={...cl(r||".",{relative:e})},f=Fr();if(r==null){u.search=f.search;let h=new URLSearchParams(u.search),m=h.getAll("index");if(m.some(g=>g==="")){h.delete("index"),m.filter(_=>_).forEach(_=>h.append("index",_));let g=h.toString();u.search=g?`?${g}`:""}}return(!r||r===".")&&o.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(u.pathname=u.pathname==="/"?n:ga([n,u.pathname])),nl(u)}function FM(r,{relative:e}={}){let n=ge.useContext(q0);$t(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=nS("useViewTransitionState"),o=cl(r,{relative:e});if(!n.isTransitioning)return!1;let u=va(n.currentLocation.pathname,a)||n.currentLocation.pathname,f=va(n.nextLocation.pathname,a)||n.nextLocation.pathname;return cc(o.pathname,f)!=null||cc(o.pathname,u)!=null}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Sp="180",xs={ROTATE:0,DOLLY:1,PAN:2},ys={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},zM=0,Ev=1,HM=2,iS=1,GM=2,da=3,tr=0,Zn=1,pa=2,$a=0,Is=1,Mv=2,Tv=3,bv=4,VM=5,wr=100,kM=101,XM=102,WM=103,qM=104,YM=200,jM=201,ZM=202,KM=203,Sd=204,xd=205,QM=206,JM=207,$M=208,eT=209,tT=210,nT=211,iT=212,aT=213,rT=214,yd=0,Ed=1,Md=2,zs=3,Td=4,bd=5,Ad=6,Rd=7,aS=0,sT=1,oT=2,er=0,lT=1,uT=2,cT=3,fT=4,hT=5,dT=6,pT=7,rS=300,Hs=301,Gs=302,wd=303,Cd=304,_c=306,Dd=1e3,Dr=1001,Ud=1002,Ai=1003,mT=1004,Du=1005,Ii=1006,Ph=1007,Ur=1008,ki=1009,sS=1010,oS=1011,il=1012,xp=1013,Or=1014,ma=1015,fl=1016,yp=1017,Ep=1018,al=1020,lS=35902,uS=35899,cS=1021,fS=1022,bi=1023,rl=1026,sl=1027,hS=1028,Mp=1029,dS=1030,Tp=1031,bp=1033,nc=33776,ic=33777,ac=33778,rc=33779,Ld=35840,Nd=35841,Od=35842,Pd=35843,Bd=36196,Id=37492,Fd=37496,zd=37808,Hd=37809,Gd=37810,Vd=37811,kd=37812,Xd=37813,Wd=37814,qd=37815,Yd=37816,jd=37817,Zd=37818,Kd=37819,Qd=37820,Jd=37821,$d=36492,ep=36494,tp=36495,np=36283,ip=36284,ap=36285,rp=36286,gT=3200,_T=3201,pS=0,vT=1,Ja="",gi="srgb",Vs="srgb-linear",fc="linear",Gt="srgb",Es=7680,Av=519,ST=512,xT=513,yT=514,mS=515,ET=516,MT=517,TT=518,bT=519,Rv=35044,wv="300 es",Fi=2e3,hc=2001;let Ys=class{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(n)===-1&&a[e].push(n)}hasEventListener(e,n){const a=this._listeners;return a===void 0?!1:a[e]!==void 0&&a[e].indexOf(n)!==-1}removeEventListener(e,n){const a=this._listeners;if(a===void 0)return;const o=a[e];if(o!==void 0){const u=o.indexOf(n);u!==-1&&o.splice(u,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const a=n[e.type];if(a!==void 0){e.target=this;const o=a.slice(0);for(let u=0,f=o.length;u<f;u++)o[u].call(this,e);e.target=null}}};const On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bh=Math.PI/180,sp=180/Math.PI;function hl(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(On[r&255]+On[r>>8&255]+On[r>>16&255]+On[r>>24&255]+"-"+On[e&255]+On[e>>8&255]+"-"+On[e>>16&15|64]+On[e>>24&255]+"-"+On[n&63|128]+On[n>>8&255]+"-"+On[n>>16&255]+On[n>>24&255]+On[a&255]+On[a>>8&255]+On[a>>16&255]+On[a>>24&255]).toLowerCase()}function bt(r,e,n){return Math.max(e,Math.min(n,r))}function AT(r,e){return(r%e+e)%e}function Ih(r,e,n){return(1-n)*r+n*e}function jo(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function jn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class ft{constructor(e=0,n=0){ft.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,a=this.y,o=e.elements;return this.x=o[0]*n+o[3]*a+o[6],this.y=o[1]*n+o[4]*a+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=bt(this.x,e.x,n.x),this.y=bt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=bt(this.x,e,n),this.y=bt(this.y,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(bt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(bt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y;return n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const a=Math.cos(n),o=Math.sin(n),u=this.x-e.x,f=this.y-e.y;return this.x=u*a-f*o+e.x,this.y=u*o+f*a+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Pr{constructor(e=0,n=0,a=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=a,this._w=o}static slerpFlat(e,n,a,o,u,f,h){let m=a[o+0],d=a[o+1],g=a[o+2],_=a[o+3];const S=u[f+0],y=u[f+1],E=u[f+2],T=u[f+3];if(h===0){e[n+0]=m,e[n+1]=d,e[n+2]=g,e[n+3]=_;return}if(h===1){e[n+0]=S,e[n+1]=y,e[n+2]=E,e[n+3]=T;return}if(_!==T||m!==S||d!==y||g!==E){let x=1-h;const v=m*S+d*y+g*E+_*T,D=v>=0?1:-1,L=1-v*v;if(L>Number.EPSILON){const P=Math.sqrt(L),F=Math.atan2(P,v*D);x=Math.sin(x*F)/P,h=Math.sin(h*F)/P}const C=h*D;if(m=m*x+S*C,d=d*x+y*C,g=g*x+E*C,_=_*x+T*C,x===1-h){const P=1/Math.sqrt(m*m+d*d+g*g+_*_);m*=P,d*=P,g*=P,_*=P}}e[n]=m,e[n+1]=d,e[n+2]=g,e[n+3]=_}static multiplyQuaternionsFlat(e,n,a,o,u,f){const h=a[o],m=a[o+1],d=a[o+2],g=a[o+3],_=u[f],S=u[f+1],y=u[f+2],E=u[f+3];return e[n]=h*E+g*_+m*y-d*S,e[n+1]=m*E+g*S+d*_-h*y,e[n+2]=d*E+g*y+h*S-m*_,e[n+3]=g*E-h*_-m*S-d*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,a,o){return this._x=e,this._y=n,this._z=a,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const a=e._x,o=e._y,u=e._z,f=e._order,h=Math.cos,m=Math.sin,d=h(a/2),g=h(o/2),_=h(u/2),S=m(a/2),y=m(o/2),E=m(u/2);switch(f){case"XYZ":this._x=S*g*_+d*y*E,this._y=d*y*_-S*g*E,this._z=d*g*E+S*y*_,this._w=d*g*_-S*y*E;break;case"YXZ":this._x=S*g*_+d*y*E,this._y=d*y*_-S*g*E,this._z=d*g*E-S*y*_,this._w=d*g*_+S*y*E;break;case"ZXY":this._x=S*g*_-d*y*E,this._y=d*y*_+S*g*E,this._z=d*g*E+S*y*_,this._w=d*g*_-S*y*E;break;case"ZYX":this._x=S*g*_-d*y*E,this._y=d*y*_+S*g*E,this._z=d*g*E-S*y*_,this._w=d*g*_+S*y*E;break;case"YZX":this._x=S*g*_+d*y*E,this._y=d*y*_+S*g*E,this._z=d*g*E-S*y*_,this._w=d*g*_-S*y*E;break;case"XZY":this._x=S*g*_-d*y*E,this._y=d*y*_-S*g*E,this._z=d*g*E+S*y*_,this._w=d*g*_+S*y*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const a=n/2,o=Math.sin(a);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,a=n[0],o=n[4],u=n[8],f=n[1],h=n[5],m=n[9],d=n[2],g=n[6],_=n[10],S=a+h+_;if(S>0){const y=.5/Math.sqrt(S+1);this._w=.25/y,this._x=(g-m)*y,this._y=(u-d)*y,this._z=(f-o)*y}else if(a>h&&a>_){const y=2*Math.sqrt(1+a-h-_);this._w=(g-m)/y,this._x=.25*y,this._y=(o+f)/y,this._z=(u+d)/y}else if(h>_){const y=2*Math.sqrt(1+h-a-_);this._w=(u-d)/y,this._x=(o+f)/y,this._y=.25*y,this._z=(m+g)/y}else{const y=2*Math.sqrt(1+_-a-h);this._w=(f-o)/y,this._x=(u+d)/y,this._y=(m+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let a=e.dot(n)+1;return a<1e-8?(a=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=a),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,n){const a=this.angleTo(e);if(a===0)return this;const o=Math.min(1,n/a);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const a=e._x,o=e._y,u=e._z,f=e._w,h=n._x,m=n._y,d=n._z,g=n._w;return this._x=a*g+f*h+o*d-u*m,this._y=o*g+f*m+u*h-a*d,this._z=u*g+f*d+a*m-o*h,this._w=f*g-a*h-o*m-u*d,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const a=this._x,o=this._y,u=this._z,f=this._w;let h=f*e._w+a*e._x+o*e._y+u*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=f,this._x=a,this._y=o,this._z=u,this;const m=1-h*h;if(m<=Number.EPSILON){const y=1-n;return this._w=y*f+n*this._w,this._x=y*a+n*this._x,this._y=y*o+n*this._y,this._z=y*u+n*this._z,this.normalize(),this}const d=Math.sqrt(m),g=Math.atan2(d,h),_=Math.sin((1-n)*g)/d,S=Math.sin(n*g)/d;return this._w=f*_+this._w*S,this._x=a*_+this._x*S,this._y=o*_+this._y*S,this._z=u*_+this._z*S,this._onChangeCallback(),this}slerpQuaternions(e,n,a){return this.copy(e).slerp(n,a)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),o=Math.sqrt(1-a),u=Math.sqrt(a);return this.set(o*Math.sin(e),o*Math.cos(e),u*Math.sin(n),u*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ee{constructor(e=0,n=0,a=0){ee.prototype.isVector3=!0,this.x=e,this.y=n,this.z=a}set(e,n,a){return a===void 0&&(a=this.z),this.x=e,this.y=n,this.z=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Cv.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Cv.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,a=this.y,o=this.z,u=e.elements;return this.x=u[0]*n+u[3]*a+u[6]*o,this.y=u[1]*n+u[4]*a+u[7]*o,this.z=u[2]*n+u[5]*a+u[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,a=this.y,o=this.z,u=e.elements,f=1/(u[3]*n+u[7]*a+u[11]*o+u[15]);return this.x=(u[0]*n+u[4]*a+u[8]*o+u[12])*f,this.y=(u[1]*n+u[5]*a+u[9]*o+u[13])*f,this.z=(u[2]*n+u[6]*a+u[10]*o+u[14])*f,this}applyQuaternion(e){const n=this.x,a=this.y,o=this.z,u=e.x,f=e.y,h=e.z,m=e.w,d=2*(f*o-h*a),g=2*(h*n-u*o),_=2*(u*a-f*n);return this.x=n+m*d+f*_-h*g,this.y=a+m*g+h*d-u*_,this.z=o+m*_+u*g-f*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,a=this.y,o=this.z,u=e.elements;return this.x=u[0]*n+u[4]*a+u[8]*o,this.y=u[1]*n+u[5]*a+u[9]*o,this.z=u[2]*n+u[6]*a+u[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=bt(this.x,e.x,n.x),this.y=bt(this.y,e.y,n.y),this.z=bt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=bt(this.x,e,n),this.y=bt(this.y,e,n),this.z=bt(this.z,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(bt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const a=e.x,o=e.y,u=e.z,f=n.x,h=n.y,m=n.z;return this.x=o*m-u*h,this.y=u*f-a*m,this.z=a*h-o*f,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const a=e.dot(this)/n;return this.copy(e).multiplyScalar(a)}projectOnPlane(e){return Fh.copy(this).projectOnVector(e),this.sub(Fh)}reflect(e){return this.sub(Fh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(bt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y,o=this.z-e.z;return n*n+a*a+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,a){const o=Math.sin(n)*e;return this.x=o*Math.sin(a),this.y=Math.cos(n)*e,this.z=o*Math.cos(a),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,a){return this.x=e*Math.sin(n),this.y=a,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=a,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(e),this.y=n,this.z=a*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fh=new ee,Cv=new Pr;class mt{constructor(e,n,a,o,u,f,h,m,d){mt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,a,o,u,f,h,m,d)}set(e,n,a,o,u,f,h,m,d){const g=this.elements;return g[0]=e,g[1]=o,g[2]=h,g[3]=n,g[4]=u,g[5]=m,g[6]=a,g[7]=f,g[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(e,n,a){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,o=n.elements,u=this.elements,f=a[0],h=a[3],m=a[6],d=a[1],g=a[4],_=a[7],S=a[2],y=a[5],E=a[8],T=o[0],x=o[3],v=o[6],D=o[1],L=o[4],C=o[7],P=o[2],F=o[5],I=o[8];return u[0]=f*T+h*D+m*P,u[3]=f*x+h*L+m*F,u[6]=f*v+h*C+m*I,u[1]=d*T+g*D+_*P,u[4]=d*x+g*L+_*F,u[7]=d*v+g*C+_*I,u[2]=S*T+y*D+E*P,u[5]=S*x+y*L+E*F,u[8]=S*v+y*C+E*I,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[1],o=e[2],u=e[3],f=e[4],h=e[5],m=e[6],d=e[7],g=e[8];return n*f*g-n*h*d-a*u*g+a*h*m+o*u*d-o*f*m}invert(){const e=this.elements,n=e[0],a=e[1],o=e[2],u=e[3],f=e[4],h=e[5],m=e[6],d=e[7],g=e[8],_=g*f-h*d,S=h*m-g*u,y=d*u-f*m,E=n*_+a*S+o*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=_*T,e[1]=(o*d-g*a)*T,e[2]=(h*a-o*f)*T,e[3]=S*T,e[4]=(g*n-o*m)*T,e[5]=(o*u-h*n)*T,e[6]=y*T,e[7]=(a*m-d*n)*T,e[8]=(f*n-a*u)*T,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,a,o,u,f,h){const m=Math.cos(u),d=Math.sin(u);return this.set(a*m,a*d,-a*(m*f+d*h)+f+e,-o*d,o*m,-o*(-d*f+m*h)+h+n,0,0,1),this}scale(e,n){return this.premultiply(zh.makeScale(e,n)),this}rotate(e){return this.premultiply(zh.makeRotation(-e)),this}translate(e,n){return this.premultiply(zh.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,a=e.elements;for(let o=0;o<9;o++)if(n[o]!==a[o])return!1;return!0}fromArray(e,n=0){for(let a=0;a<9;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const zh=new mt;function gS(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function dc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function RT(){const r=dc("canvas");return r.style.display="block",r}const Dv={};function ol(r){r in Dv||(Dv[r]=!0,console.warn(r))}function wT(r,e,n){return new Promise(function(a,o){function u(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:o();break;case r.TIMEOUT_EXPIRED:setTimeout(u,n);break;default:a()}}setTimeout(u,n)})}const Uv=new mt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lv=new mt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function CT(){const r={enabled:!0,workingColorSpace:Vs,spaces:{},convert:function(o,u,f){return this.enabled===!1||u===f||!u||!f||(this.spaces[u].transfer===Gt&&(o.r=_a(o.r),o.g=_a(o.g),o.b=_a(o.b)),this.spaces[u].primaries!==this.spaces[f].primaries&&(o.applyMatrix3(this.spaces[u].toXYZ),o.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Gt&&(o.r=Fs(o.r),o.g=Fs(o.g),o.b=Fs(o.b))),o},workingToColorSpace:function(o,u){return this.convert(o,this.workingColorSpace,u)},colorSpaceToWorking:function(o,u){return this.convert(o,u,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Ja?fc:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,u=this.workingColorSpace){return o.fromArray(this.spaces[u].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,u,f){return o.copy(this.spaces[u].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,u){return ol("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(o,u)},toWorkingColorSpace:function(o,u){return ol("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(o,u)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return r.define({[Vs]:{primaries:e,whitePoint:a,transfer:fc,toXYZ:Uv,fromXYZ:Lv,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:gi},outputColorSpaceConfig:{drawingBufferColorSpace:gi}},[gi]:{primaries:e,whitePoint:a,transfer:Gt,toXYZ:Uv,fromXYZ:Lv,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:gi}}}),r}const Dt=CT();function _a(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Fs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ms;class DT{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let a;if(e instanceof HTMLCanvasElement)a=e;else{Ms===void 0&&(Ms=dc("canvas")),Ms.width=e.width,Ms.height=e.height;const o=Ms.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),a=Ms}return a.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=dc("canvas");n.width=e.width,n.height=e.height;const a=n.getContext("2d");a.drawImage(e,0,0,e.width,e.height);const o=a.getImageData(0,0,e.width,e.height),u=o.data;for(let f=0;f<u.length;f++)u[f]=_a(u[f]/255)*255;return a.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(_a(n[a]/255)*255):n[a]=_a(n[a]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let UT=0;class Ap{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:UT++}),this.uuid=hl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const a={uuid:this.uuid,url:""},o=this.data;if(o!==null){let u;if(Array.isArray(o)){u=[];for(let f=0,h=o.length;f<h;f++)o[f].isDataTexture?u.push(Hh(o[f].image)):u.push(Hh(o[f]))}else u=Hh(o);a.url=u}return n||(e.images[this.uuid]=a),a}}function Hh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?DT.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let LT=0;const Gh=new ee;class Kn extends Ys{constructor(e=Kn.DEFAULT_IMAGE,n=Kn.DEFAULT_MAPPING,a=Dr,o=Dr,u=Ii,f=Ur,h=bi,m=ki,d=Kn.DEFAULT_ANISOTROPY,g=Ja){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:LT++}),this.uuid=hl(),this.name="",this.source=new Ap(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=o,this.magFilter=u,this.minFilter=f,this.anisotropy=d,this.format=h,this.internalFormat=null,this.type=m,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Gh).x}get height(){return this.source.getSize(Gh).y}get depth(){return this.source.getSize(Gh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const a=e[n];if(a===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}o&&a&&o.isVector2&&a.isVector2||o&&a&&o.isVector3&&a.isVector3||o&&a&&o.isMatrix3&&a.isMatrix3?o.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(e.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Dd:e.x=e.x-Math.floor(e.x);break;case Dr:e.x=e.x<0?0:1;break;case Ud:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Dd:e.y=e.y-Math.floor(e.y);break;case Dr:e.y=e.y<0?0:1;break;case Ud:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Kn.DEFAULT_IMAGE=null;Kn.DEFAULT_MAPPING=rS;Kn.DEFAULT_ANISOTROPY=1;class rn{constructor(e=0,n=0,a=0,o=1){rn.prototype.isVector4=!0,this.x=e,this.y=n,this.z=a,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,a,o){return this.x=e,this.y=n,this.z=a,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,a=this.y,o=this.z,u=this.w,f=e.elements;return this.x=f[0]*n+f[4]*a+f[8]*o+f[12]*u,this.y=f[1]*n+f[5]*a+f[9]*o+f[13]*u,this.z=f[2]*n+f[6]*a+f[10]*o+f[14]*u,this.w=f[3]*n+f[7]*a+f[11]*o+f[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,a,o,u;const m=e.elements,d=m[0],g=m[4],_=m[8],S=m[1],y=m[5],E=m[9],T=m[2],x=m[6],v=m[10];if(Math.abs(g-S)<.01&&Math.abs(_-T)<.01&&Math.abs(E-x)<.01){if(Math.abs(g+S)<.1&&Math.abs(_+T)<.1&&Math.abs(E+x)<.1&&Math.abs(d+y+v-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const L=(d+1)/2,C=(y+1)/2,P=(v+1)/2,F=(g+S)/4,I=(_+T)/4,X=(E+x)/4;return L>C&&L>P?L<.01?(a=0,o=.707106781,u=.707106781):(a=Math.sqrt(L),o=F/a,u=I/a):C>P?C<.01?(a=.707106781,o=0,u=.707106781):(o=Math.sqrt(C),a=F/o,u=X/o):P<.01?(a=.707106781,o=.707106781,u=0):(u=Math.sqrt(P),a=I/u,o=X/u),this.set(a,o,u,n),this}let D=Math.sqrt((x-E)*(x-E)+(_-T)*(_-T)+(S-g)*(S-g));return Math.abs(D)<.001&&(D=1),this.x=(x-E)/D,this.y=(_-T)/D,this.z=(S-g)/D,this.w=Math.acos((d+y+v-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=bt(this.x,e.x,n.x),this.y=bt(this.y,e.y,n.y),this.z=bt(this.z,e.z,n.z),this.w=bt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=bt(this.x,e,n),this.y=bt(this.y,e,n),this.z=bt(this.z,e,n),this.w=bt(this.w,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(bt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this.w=e.w+(n.w-e.w)*a,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class NT extends Ys{constructor(e=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ii,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=a.depth,this.scissor=new rn(0,0,e,n),this.scissorTest=!1,this.viewport=new rn(0,0,e,n);const o={width:e,height:n,depth:a.depth},u=new Kn(o);this.textures=[];const f=a.count;for(let h=0;h<f;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(e={}){const n={minFilter:Ii,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,a=1){if(this.width!==e||this.height!==n||this.depth!==a){this.width=e,this.height=n,this.depth=a;for(let o=0,u=this.textures.length;o<u;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=a,this.textures[o].isArrayTexture=this.textures[o].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,a=e.textures.length;n<a;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new Ap(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Br extends NT{constructor(e=1,n=1,a={}){super(e,n,a),this.isWebGLRenderTarget=!0}}class _S extends Kn{constructor(e=null,n=1,a=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:a,depth:o},this.magFilter=Ai,this.minFilter=Ai,this.wrapR=Dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class OT extends Kn{constructor(e=null,n=1,a=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:a,depth:o},this.magFilter=Ai,this.minFilter=Ai,this.wrapR=Dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dl{constructor(e=new ee(1/0,1/0,1/0),n=new ee(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n+=3)this.expandByPoint(yi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,a=e.count;n<a;n++)this.expandByPoint(yi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const a=yi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const a=e.geometry;if(a!==void 0){const u=a.getAttribute("position");if(n===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let f=0,h=u.count;f<h;f++)e.isMesh===!0?e.getVertexPosition(f,yi):yi.fromBufferAttribute(u,f),yi.applyMatrix4(e.matrixWorld),this.expandByPoint(yi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Uu.copy(e.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),Uu.copy(a.boundingBox)),Uu.applyMatrix4(e.matrixWorld),this.union(Uu)}const o=e.children;for(let u=0,f=o.length;u<f;u++)this.expandByObject(o[u],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,yi),yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,a;return e.normal.x>0?(n=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,a=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),n<=-e.constant&&a>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zo),Lu.subVectors(this.max,Zo),Ts.subVectors(e.a,Zo),bs.subVectors(e.b,Zo),As.subVectors(e.c,Zo),Xa.subVectors(bs,Ts),Wa.subVectors(As,bs),yr.subVectors(Ts,As);let n=[0,-Xa.z,Xa.y,0,-Wa.z,Wa.y,0,-yr.z,yr.y,Xa.z,0,-Xa.x,Wa.z,0,-Wa.x,yr.z,0,-yr.x,-Xa.y,Xa.x,0,-Wa.y,Wa.x,0,-yr.y,yr.x,0];return!Vh(n,Ts,bs,As,Lu)||(n=[1,0,0,0,1,0,0,0,1],!Vh(n,Ts,bs,As,Lu))?!1:(Nu.crossVectors(Xa,Wa),n=[Nu.x,Nu.y,Nu.z],Vh(n,Ts,bs,As,Lu))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(oa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),oa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),oa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),oa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),oa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),oa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),oa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),oa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(oa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const oa=[new ee,new ee,new ee,new ee,new ee,new ee,new ee,new ee],yi=new ee,Uu=new dl,Ts=new ee,bs=new ee,As=new ee,Xa=new ee,Wa=new ee,yr=new ee,Zo=new ee,Lu=new ee,Nu=new ee,Er=new ee;function Vh(r,e,n,a,o){for(let u=0,f=r.length-3;u<=f;u+=3){Er.fromArray(r,u);const h=o.x*Math.abs(Er.x)+o.y*Math.abs(Er.y)+o.z*Math.abs(Er.z),m=e.dot(Er),d=n.dot(Er),g=a.dot(Er);if(Math.max(-Math.max(m,d,g),Math.min(m,d,g))>h)return!1}return!0}const PT=new dl,Ko=new ee,kh=new ee;class Rp{constructor(e=new ee,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const a=this.center;n!==void 0?a.copy(n):PT.setFromPoints(e).getCenter(a);let o=0;for(let u=0,f=e.length;u<f;u++)o=Math.max(o,a.distanceToSquared(e[u]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const a=this.center.distanceToSquared(e);return n.copy(e),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ko.subVectors(e,this.center);const n=Ko.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),o=(a-this.radius)*.5;this.center.addScaledVector(Ko,o/a),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(kh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ko.copy(e.center).add(kh)),this.expandByPoint(Ko.copy(e.center).sub(kh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const la=new ee,Xh=new ee,Ou=new ee,qa=new ee,Wh=new ee,Pu=new ee,qh=new ee;class vS{constructor(e=new ee,n=new ee(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,la)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=la.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(la.copy(this.origin).addScaledVector(this.direction,n),la.distanceToSquared(e))}distanceSqToSegment(e,n,a,o){Xh.copy(e).add(n).multiplyScalar(.5),Ou.copy(n).sub(e).normalize(),qa.copy(this.origin).sub(Xh);const u=e.distanceTo(n)*.5,f=-this.direction.dot(Ou),h=qa.dot(this.direction),m=-qa.dot(Ou),d=qa.lengthSq(),g=Math.abs(1-f*f);let _,S,y,E;if(g>0)if(_=f*m-h,S=f*h-m,E=u*g,_>=0)if(S>=-E)if(S<=E){const T=1/g;_*=T,S*=T,y=_*(_+f*S+2*h)+S*(f*_+S+2*m)+d}else S=u,_=Math.max(0,-(f*S+h)),y=-_*_+S*(S+2*m)+d;else S=-u,_=Math.max(0,-(f*S+h)),y=-_*_+S*(S+2*m)+d;else S<=-E?(_=Math.max(0,-(-f*u+h)),S=_>0?-u:Math.min(Math.max(-u,-m),u),y=-_*_+S*(S+2*m)+d):S<=E?(_=0,S=Math.min(Math.max(-u,-m),u),y=S*(S+2*m)+d):(_=Math.max(0,-(f*u+h)),S=_>0?u:Math.min(Math.max(-u,-m),u),y=-_*_+S*(S+2*m)+d);else S=f>0?-u:u,_=Math.max(0,-(f*S+h)),y=-_*_+S*(S+2*m)+d;return a&&a.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(Xh).addScaledVector(Ou,S),y}intersectSphere(e,n){la.subVectors(e.center,this.origin);const a=la.dot(this.direction),o=la.dot(la)-a*a,u=e.radius*e.radius;if(o>u)return null;const f=Math.sqrt(u-o),h=a-f,m=a+f;return m<0?null:h<0?this.at(m,n):this.at(h,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(e.normal)+e.constant)/n;return a>=0?a:null}intersectPlane(e,n){const a=this.distanceToPlane(e);return a===null?null:this.at(a,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let a,o,u,f,h,m;const d=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,S=this.origin;return d>=0?(a=(e.min.x-S.x)*d,o=(e.max.x-S.x)*d):(a=(e.max.x-S.x)*d,o=(e.min.x-S.x)*d),g>=0?(u=(e.min.y-S.y)*g,f=(e.max.y-S.y)*g):(u=(e.max.y-S.y)*g,f=(e.min.y-S.y)*g),a>f||u>o||((u>a||isNaN(a))&&(a=u),(f<o||isNaN(o))&&(o=f),_>=0?(h=(e.min.z-S.z)*_,m=(e.max.z-S.z)*_):(h=(e.max.z-S.z)*_,m=(e.min.z-S.z)*_),a>m||h>o)||((h>a||a!==a)&&(a=h),(m<o||o!==o)&&(o=m),o<0)?null:this.at(a>=0?a:o,n)}intersectsBox(e){return this.intersectBox(e,la)!==null}intersectTriangle(e,n,a,o,u){Wh.subVectors(n,e),Pu.subVectors(a,e),qh.crossVectors(Wh,Pu);let f=this.direction.dot(qh),h;if(f>0){if(o)return null;h=1}else if(f<0)h=-1,f=-f;else return null;qa.subVectors(this.origin,e);const m=h*this.direction.dot(Pu.crossVectors(qa,Pu));if(m<0)return null;const d=h*this.direction.dot(Wh.cross(qa));if(d<0||m+d>f)return null;const g=-h*qa.dot(qh);return g<0?null:this.at(g/f,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class un{constructor(e,n,a,o,u,f,h,m,d,g,_,S,y,E,T,x){un.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,a,o,u,f,h,m,d,g,_,S,y,E,T,x)}set(e,n,a,o,u,f,h,m,d,g,_,S,y,E,T,x){const v=this.elements;return v[0]=e,v[4]=n,v[8]=a,v[12]=o,v[1]=u,v[5]=f,v[9]=h,v[13]=m,v[2]=d,v[6]=g,v[10]=_,v[14]=S,v[3]=y,v[7]=E,v[11]=T,v[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new un().fromArray(this.elements)}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(e){const n=this.elements,a=e.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,a){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(e,n,a){return this.set(e.x,n.x,a.x,0,e.y,n.y,a.y,0,e.z,n.z,a.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,a=e.elements,o=1/Rs.setFromMatrixColumn(e,0).length(),u=1/Rs.setFromMatrixColumn(e,1).length(),f=1/Rs.setFromMatrixColumn(e,2).length();return n[0]=a[0]*o,n[1]=a[1]*o,n[2]=a[2]*o,n[3]=0,n[4]=a[4]*u,n[5]=a[5]*u,n[6]=a[6]*u,n[7]=0,n[8]=a[8]*f,n[9]=a[9]*f,n[10]=a[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,a=e.x,o=e.y,u=e.z,f=Math.cos(a),h=Math.sin(a),m=Math.cos(o),d=Math.sin(o),g=Math.cos(u),_=Math.sin(u);if(e.order==="XYZ"){const S=f*g,y=f*_,E=h*g,T=h*_;n[0]=m*g,n[4]=-m*_,n[8]=d,n[1]=y+E*d,n[5]=S-T*d,n[9]=-h*m,n[2]=T-S*d,n[6]=E+y*d,n[10]=f*m}else if(e.order==="YXZ"){const S=m*g,y=m*_,E=d*g,T=d*_;n[0]=S+T*h,n[4]=E*h-y,n[8]=f*d,n[1]=f*_,n[5]=f*g,n[9]=-h,n[2]=y*h-E,n[6]=T+S*h,n[10]=f*m}else if(e.order==="ZXY"){const S=m*g,y=m*_,E=d*g,T=d*_;n[0]=S-T*h,n[4]=-f*_,n[8]=E+y*h,n[1]=y+E*h,n[5]=f*g,n[9]=T-S*h,n[2]=-f*d,n[6]=h,n[10]=f*m}else if(e.order==="ZYX"){const S=f*g,y=f*_,E=h*g,T=h*_;n[0]=m*g,n[4]=E*d-y,n[8]=S*d+T,n[1]=m*_,n[5]=T*d+S,n[9]=y*d-E,n[2]=-d,n[6]=h*m,n[10]=f*m}else if(e.order==="YZX"){const S=f*m,y=f*d,E=h*m,T=h*d;n[0]=m*g,n[4]=T-S*_,n[8]=E*_+y,n[1]=_,n[5]=f*g,n[9]=-h*g,n[2]=-d*g,n[6]=y*_+E,n[10]=S-T*_}else if(e.order==="XZY"){const S=f*m,y=f*d,E=h*m,T=h*d;n[0]=m*g,n[4]=-_,n[8]=d*g,n[1]=S*_+T,n[5]=f*g,n[9]=y*_-E,n[2]=E*_-y,n[6]=h*g,n[10]=T*_+S}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(BT,e,IT)}lookAt(e,n,a){const o=this.elements;return si.subVectors(e,n),si.lengthSq()===0&&(si.z=1),si.normalize(),Ya.crossVectors(a,si),Ya.lengthSq()===0&&(Math.abs(a.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),Ya.crossVectors(a,si)),Ya.normalize(),Bu.crossVectors(si,Ya),o[0]=Ya.x,o[4]=Bu.x,o[8]=si.x,o[1]=Ya.y,o[5]=Bu.y,o[9]=si.y,o[2]=Ya.z,o[6]=Bu.z,o[10]=si.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,o=n.elements,u=this.elements,f=a[0],h=a[4],m=a[8],d=a[12],g=a[1],_=a[5],S=a[9],y=a[13],E=a[2],T=a[6],x=a[10],v=a[14],D=a[3],L=a[7],C=a[11],P=a[15],F=o[0],I=o[4],X=o[8],U=o[12],R=o[1],k=o[5],J=o[9],ue=o[13],me=o[2],he=o[6],B=o[10],Z=o[14],q=o[3],Te=o[7],N=o[11],Q=o[15];return u[0]=f*F+h*R+m*me+d*q,u[4]=f*I+h*k+m*he+d*Te,u[8]=f*X+h*J+m*B+d*N,u[12]=f*U+h*ue+m*Z+d*Q,u[1]=g*F+_*R+S*me+y*q,u[5]=g*I+_*k+S*he+y*Te,u[9]=g*X+_*J+S*B+y*N,u[13]=g*U+_*ue+S*Z+y*Q,u[2]=E*F+T*R+x*me+v*q,u[6]=E*I+T*k+x*he+v*Te,u[10]=E*X+T*J+x*B+v*N,u[14]=E*U+T*ue+x*Z+v*Q,u[3]=D*F+L*R+C*me+P*q,u[7]=D*I+L*k+C*he+P*Te,u[11]=D*X+L*J+C*B+P*N,u[15]=D*U+L*ue+C*Z+P*Q,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[4],o=e[8],u=e[12],f=e[1],h=e[5],m=e[9],d=e[13],g=e[2],_=e[6],S=e[10],y=e[14],E=e[3],T=e[7],x=e[11],v=e[15];return E*(+u*m*_-o*d*_-u*h*S+a*d*S+o*h*y-a*m*y)+T*(+n*m*y-n*d*S+u*f*S-o*f*y+o*d*g-u*m*g)+x*(+n*d*_-n*h*y-u*f*_+a*f*y+u*h*g-a*d*g)+v*(-o*h*g-n*m*_+n*h*S+o*f*_-a*f*S+a*m*g)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,a){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=a),this}invert(){const e=this.elements,n=e[0],a=e[1],o=e[2],u=e[3],f=e[4],h=e[5],m=e[6],d=e[7],g=e[8],_=e[9],S=e[10],y=e[11],E=e[12],T=e[13],x=e[14],v=e[15],D=_*x*d-T*S*d+T*m*y-h*x*y-_*m*v+h*S*v,L=E*S*d-g*x*d-E*m*y+f*x*y+g*m*v-f*S*v,C=g*T*d-E*_*d+E*h*y-f*T*y-g*h*v+f*_*v,P=E*_*m-g*T*m-E*h*S+f*T*S+g*h*x-f*_*x,F=n*D+a*L+o*C+u*P;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/F;return e[0]=D*I,e[1]=(T*S*u-_*x*u-T*o*y+a*x*y+_*o*v-a*S*v)*I,e[2]=(h*x*u-T*m*u+T*o*d-a*x*d-h*o*v+a*m*v)*I,e[3]=(_*m*u-h*S*u-_*o*d+a*S*d+h*o*y-a*m*y)*I,e[4]=L*I,e[5]=(g*x*u-E*S*u+E*o*y-n*x*y-g*o*v+n*S*v)*I,e[6]=(E*m*u-f*x*u-E*o*d+n*x*d+f*o*v-n*m*v)*I,e[7]=(f*S*u-g*m*u+g*o*d-n*S*d-f*o*y+n*m*y)*I,e[8]=C*I,e[9]=(E*_*u-g*T*u-E*a*y+n*T*y+g*a*v-n*_*v)*I,e[10]=(f*T*u-E*h*u+E*a*d-n*T*d-f*a*v+n*h*v)*I,e[11]=(g*h*u-f*_*u-g*a*d+n*_*d+f*a*y-n*h*y)*I,e[12]=P*I,e[13]=(g*T*o-E*_*o+E*a*S-n*T*S-g*a*x+n*_*x)*I,e[14]=(E*h*o-f*T*o-E*a*m+n*T*m+f*a*x-n*h*x)*I,e[15]=(f*_*o-g*h*o+g*a*m-n*_*m-f*a*S+n*h*S)*I,this}scale(e){const n=this.elements,a=e.x,o=e.y,u=e.z;return n[0]*=a,n[4]*=o,n[8]*=u,n[1]*=a,n[5]*=o,n[9]*=u,n[2]*=a,n[6]*=o,n[10]*=u,n[3]*=a,n[7]*=o,n[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,a,o))}makeTranslation(e,n,a){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),a=Math.sin(e);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const a=Math.cos(n),o=Math.sin(n),u=1-a,f=e.x,h=e.y,m=e.z,d=u*f,g=u*h;return this.set(d*f+a,d*h-o*m,d*m+o*h,0,d*h+o*m,g*h+a,g*m-o*f,0,d*m-o*h,g*m+o*f,u*m*m+a,0,0,0,0,1),this}makeScale(e,n,a){return this.set(e,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(e,n,a,o,u,f){return this.set(1,a,u,0,e,1,f,0,n,o,1,0,0,0,0,1),this}compose(e,n,a){const o=this.elements,u=n._x,f=n._y,h=n._z,m=n._w,d=u+u,g=f+f,_=h+h,S=u*d,y=u*g,E=u*_,T=f*g,x=f*_,v=h*_,D=m*d,L=m*g,C=m*_,P=a.x,F=a.y,I=a.z;return o[0]=(1-(T+v))*P,o[1]=(y+C)*P,o[2]=(E-L)*P,o[3]=0,o[4]=(y-C)*F,o[5]=(1-(S+v))*F,o[6]=(x+D)*F,o[7]=0,o[8]=(E+L)*I,o[9]=(x-D)*I,o[10]=(1-(S+T))*I,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,a){const o=this.elements;let u=Rs.set(o[0],o[1],o[2]).length();const f=Rs.set(o[4],o[5],o[6]).length(),h=Rs.set(o[8],o[9],o[10]).length();this.determinant()<0&&(u=-u),e.x=o[12],e.y=o[13],e.z=o[14],Ei.copy(this);const d=1/u,g=1/f,_=1/h;return Ei.elements[0]*=d,Ei.elements[1]*=d,Ei.elements[2]*=d,Ei.elements[4]*=g,Ei.elements[5]*=g,Ei.elements[6]*=g,Ei.elements[8]*=_,Ei.elements[9]*=_,Ei.elements[10]*=_,n.setFromRotationMatrix(Ei),a.x=u,a.y=f,a.z=h,this}makePerspective(e,n,a,o,u,f,h=Fi,m=!1){const d=this.elements,g=2*u/(n-e),_=2*u/(a-o),S=(n+e)/(n-e),y=(a+o)/(a-o);let E,T;if(m)E=u/(f-u),T=f*u/(f-u);else if(h===Fi)E=-(f+u)/(f-u),T=-2*f*u/(f-u);else if(h===hc)E=-f/(f-u),T=-f*u/(f-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return d[0]=g,d[4]=0,d[8]=S,d[12]=0,d[1]=0,d[5]=_,d[9]=y,d[13]=0,d[2]=0,d[6]=0,d[10]=E,d[14]=T,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,n,a,o,u,f,h=Fi,m=!1){const d=this.elements,g=2/(n-e),_=2/(a-o),S=-(n+e)/(n-e),y=-(a+o)/(a-o);let E,T;if(m)E=1/(f-u),T=f/(f-u);else if(h===Fi)E=-2/(f-u),T=-(f+u)/(f-u);else if(h===hc)E=-1/(f-u),T=-u/(f-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return d[0]=g,d[4]=0,d[8]=0,d[12]=S,d[1]=0,d[5]=_,d[9]=0,d[13]=y,d[2]=0,d[6]=0,d[10]=E,d[14]=T,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const n=this.elements,a=e.elements;for(let o=0;o<16;o++)if(n[o]!==a[o])return!1;return!0}fromArray(e,n=0){for(let a=0;a<16;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e[n+9]=a[9],e[n+10]=a[10],e[n+11]=a[11],e[n+12]=a[12],e[n+13]=a[13],e[n+14]=a[14],e[n+15]=a[15],e}}const Rs=new ee,Ei=new un,BT=new ee(0,0,0),IT=new ee(1,1,1),Ya=new ee,Bu=new ee,si=new ee,Nv=new un,Ov=new Pr;class Xi{constructor(e=0,n=0,a=0,o=Xi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=a,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,a,o=this._order){return this._x=e,this._y=n,this._z=a,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,a=!0){const o=e.elements,u=o[0],f=o[4],h=o[8],m=o[1],d=o[5],g=o[9],_=o[2],S=o[6],y=o[10];switch(n){case"XYZ":this._y=Math.asin(bt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-f,u)):(this._x=Math.atan2(S,d),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,y),this._z=Math.atan2(m,d)):(this._y=Math.atan2(-_,u),this._z=0);break;case"ZXY":this._x=Math.asin(bt(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-f,d)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-bt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(S,y),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-f,d));break;case"YZX":this._z=Math.asin(bt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,d),this._y=Math.atan2(-_,u)):(this._x=0,this._y=Math.atan2(h,y));break;case"XZY":this._z=Math.asin(-bt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(S,d),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-g,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,a){return Nv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Nv,n,a)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Ov.setFromEuler(this),this.setFromQuaternion(Ov,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xi.DEFAULT_ORDER="XYZ";class SS{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let FT=0;const Pv=new ee,ws=new Pr,ua=new un,Iu=new ee,Qo=new ee,zT=new ee,HT=new Pr,Bv=new ee(1,0,0),Iv=new ee(0,1,0),Fv=new ee(0,0,1),zv={type:"added"},GT={type:"removed"},Cs={type:"childadded",child:null},Yh={type:"childremoved",child:null};class In extends Ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:FT++}),this.uuid=hl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=In.DEFAULT_UP.clone();const e=new ee,n=new Xi,a=new Pr,o=new ee(1,1,1);function u(){a.setFromEuler(n,!1)}function f(){n.setFromQuaternion(a,void 0,!1)}n._onChange(u),a._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new un},normalMatrix:{value:new mt}}),this.matrix=new un,this.matrixWorld=new un,this.matrixAutoUpdate=In.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new SS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ws.setFromAxisAngle(e,n),this.quaternion.multiply(ws),this}rotateOnWorldAxis(e,n){return ws.setFromAxisAngle(e,n),this.quaternion.premultiply(ws),this}rotateX(e){return this.rotateOnAxis(Bv,e)}rotateY(e){return this.rotateOnAxis(Iv,e)}rotateZ(e){return this.rotateOnAxis(Fv,e)}translateOnAxis(e,n){return Pv.copy(e).applyQuaternion(this.quaternion),this.position.add(Pv.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Bv,e)}translateY(e){return this.translateOnAxis(Iv,e)}translateZ(e){return this.translateOnAxis(Fv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ua.copy(this.matrixWorld).invert())}lookAt(e,n,a){e.isVector3?Iu.copy(e):Iu.set(e,n,a);const o=this.parent;this.updateWorldMatrix(!0,!1),Qo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ua.lookAt(Qo,Iu,this.up):ua.lookAt(Iu,Qo,this.up),this.quaternion.setFromRotationMatrix(ua),o&&(ua.extractRotation(o.matrixWorld),ws.setFromRotationMatrix(ua),this.quaternion.premultiply(ws.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zv),Cs.child=e,this.dispatchEvent(Cs),Cs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(GT),Yh.child=e,this.dispatchEvent(Yh),Yh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ua.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ua.multiply(e.parent.matrixWorld)),e.applyMatrix4(ua),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zv),Cs.child=e,this.dispatchEvent(Cs),Cs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let a=0,o=this.children.length;a<o;a++){const f=this.children[a].getObjectByProperty(e,n);if(f!==void 0)return f}}getObjectsByProperty(e,n,a=[]){this[e]===n&&a.push(this);const o=this.children;for(let u=0,f=o.length;u<f;u++)o[u].getObjectsByProperty(e,n,a);return a}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qo,e,zT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qo,HT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].updateMatrixWorld(e)}updateWorldMatrix(e,n){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let u=0,f=o.length;u<f;u++)o[u].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",a={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(h=>({...h})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function u(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=u(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let d=0,g=m.length;d<g;d++){const _=m[d];u(e.shapes,_)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,d=this.material.length;m<d;m++)h.push(u(e.materials,this.material[m]));o.material=h}else o.material=u(e.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];o.animations.push(u(e.animations,m))}}if(n){const h=f(e.geometries),m=f(e.materials),d=f(e.textures),g=f(e.images),_=f(e.shapes),S=f(e.skeletons),y=f(e.animations),E=f(e.nodes);h.length>0&&(a.geometries=h),m.length>0&&(a.materials=m),d.length>0&&(a.textures=d),g.length>0&&(a.images=g),_.length>0&&(a.shapes=_),S.length>0&&(a.skeletons=S),y.length>0&&(a.animations=y),E.length>0&&(a.nodes=E)}return a.object=o,a;function f(h){const m=[];for(const d in h){const g=h[d];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let a=0;a<e.children.length;a++){const o=e.children[a];this.add(o.clone())}return this}}In.DEFAULT_UP=new ee(0,1,0);In.DEFAULT_MATRIX_AUTO_UPDATE=!0;In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mi=new ee,ca=new ee,jh=new ee,fa=new ee,Ds=new ee,Us=new ee,Hv=new ee,Zh=new ee,Kh=new ee,Qh=new ee,Jh=new rn,$h=new rn,ed=new rn;class Ti{constructor(e=new ee,n=new ee,a=new ee){this.a=e,this.b=n,this.c=a}static getNormal(e,n,a,o){o.subVectors(a,n),Mi.subVectors(e,n),o.cross(Mi);const u=o.lengthSq();return u>0?o.multiplyScalar(1/Math.sqrt(u)):o.set(0,0,0)}static getBarycoord(e,n,a,o,u){Mi.subVectors(o,n),ca.subVectors(a,n),jh.subVectors(e,n);const f=Mi.dot(Mi),h=Mi.dot(ca),m=Mi.dot(jh),d=ca.dot(ca),g=ca.dot(jh),_=f*d-h*h;if(_===0)return u.set(0,0,0),null;const S=1/_,y=(d*m-h*g)*S,E=(f*g-h*m)*S;return u.set(1-y-E,E,y)}static containsPoint(e,n,a,o){return this.getBarycoord(e,n,a,o,fa)===null?!1:fa.x>=0&&fa.y>=0&&fa.x+fa.y<=1}static getInterpolation(e,n,a,o,u,f,h,m){return this.getBarycoord(e,n,a,o,fa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,fa.x),m.addScaledVector(f,fa.y),m.addScaledVector(h,fa.z),m)}static getInterpolatedAttribute(e,n,a,o,u,f){return Jh.setScalar(0),$h.setScalar(0),ed.setScalar(0),Jh.fromBufferAttribute(e,n),$h.fromBufferAttribute(e,a),ed.fromBufferAttribute(e,o),f.setScalar(0),f.addScaledVector(Jh,u.x),f.addScaledVector($h,u.y),f.addScaledVector(ed,u.z),f}static isFrontFacing(e,n,a,o){return Mi.subVectors(a,n),ca.subVectors(e,n),Mi.cross(ca).dot(o)<0}set(e,n,a){return this.a.copy(e),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(e,n,a,o){return this.a.copy(e[n]),this.b.copy(e[a]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,a,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,a),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mi.subVectors(this.c,this.b),ca.subVectors(this.a,this.b),Mi.cross(ca).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Ti.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,a,o,u){return Ti.getInterpolation(e,this.a,this.b,this.c,n,a,o,u)}containsPoint(e){return Ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const a=this.a,o=this.b,u=this.c;let f,h;Ds.subVectors(o,a),Us.subVectors(u,a),Zh.subVectors(e,a);const m=Ds.dot(Zh),d=Us.dot(Zh);if(m<=0&&d<=0)return n.copy(a);Kh.subVectors(e,o);const g=Ds.dot(Kh),_=Us.dot(Kh);if(g>=0&&_<=g)return n.copy(o);const S=m*_-g*d;if(S<=0&&m>=0&&g<=0)return f=m/(m-g),n.copy(a).addScaledVector(Ds,f);Qh.subVectors(e,u);const y=Ds.dot(Qh),E=Us.dot(Qh);if(E>=0&&y<=E)return n.copy(u);const T=y*d-m*E;if(T<=0&&d>=0&&E<=0)return h=d/(d-E),n.copy(a).addScaledVector(Us,h);const x=g*E-y*_;if(x<=0&&_-g>=0&&y-E>=0)return Hv.subVectors(u,o),h=(_-g)/(_-g+(y-E)),n.copy(o).addScaledVector(Hv,h);const v=1/(x+T+S);return f=T*v,h=S*v,n.copy(a).addScaledVector(Ds,f).addScaledVector(Us,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const xS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ja={h:0,s:0,l:0},Fu={h:0,s:0,l:0};function td(r,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?r+(e-r)*6*n:n<1/2?e:n<2/3?r+(e-r)*6*(2/3-n):r}class Nt{constructor(e,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,a)}set(e,n,a){if(n===void 0&&a===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,a);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=gi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Dt.colorSpaceToWorking(this,n),this}setRGB(e,n,a,o=Dt.workingColorSpace){return this.r=e,this.g=n,this.b=a,Dt.colorSpaceToWorking(this,o),this}setHSL(e,n,a,o=Dt.workingColorSpace){if(e=AT(e,1),n=bt(n,0,1),a=bt(a,0,1),n===0)this.r=this.g=this.b=a;else{const u=a<=.5?a*(1+n):a+n-a*n,f=2*a-u;this.r=td(f,u,e+1/3),this.g=td(f,u,e),this.b=td(f,u,e-1/3)}return Dt.colorSpaceToWorking(this,o),this}setStyle(e,n=gi){function a(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const f=o[1],h=o[2];switch(f){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,n);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,n);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=o[1],f=u.length;if(f===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(u,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=gi){const a=xS[e.toLowerCase()];return a!==void 0?this.setHex(a,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_a(e.r),this.g=_a(e.g),this.b=_a(e.b),this}copyLinearToSRGB(e){return this.r=Fs(e.r),this.g=Fs(e.g),this.b=Fs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gi){return Dt.workingToColorSpace(Pn.copy(this),e),Math.round(bt(Pn.r*255,0,255))*65536+Math.round(bt(Pn.g*255,0,255))*256+Math.round(bt(Pn.b*255,0,255))}getHexString(e=gi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Dt.workingColorSpace){Dt.workingToColorSpace(Pn.copy(this),n);const a=Pn.r,o=Pn.g,u=Pn.b,f=Math.max(a,o,u),h=Math.min(a,o,u);let m,d;const g=(h+f)/2;if(h===f)m=0,d=0;else{const _=f-h;switch(d=g<=.5?_/(f+h):_/(2-f-h),f){case a:m=(o-u)/_+(o<u?6:0);break;case o:m=(u-a)/_+2;break;case u:m=(a-o)/_+4;break}m/=6}return e.h=m,e.s=d,e.l=g,e}getRGB(e,n=Dt.workingColorSpace){return Dt.workingToColorSpace(Pn.copy(this),n),e.r=Pn.r,e.g=Pn.g,e.b=Pn.b,e}getStyle(e=gi){Dt.workingToColorSpace(Pn.copy(this),e);const n=Pn.r,a=Pn.g,o=Pn.b;return e!==gi?`color(${e} ${n.toFixed(3)} ${a.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(o*255)})`}offsetHSL(e,n,a){return this.getHSL(ja),this.setHSL(ja.h+e,ja.s+n,ja.l+a)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,a){return this.r=e.r+(n.r-e.r)*a,this.g=e.g+(n.g-e.g)*a,this.b=e.b+(n.b-e.b)*a,this}lerpHSL(e,n){this.getHSL(ja),e.getHSL(Fu);const a=Ih(ja.h,Fu.h,n),o=Ih(ja.s,Fu.s,n),u=Ih(ja.l,Fu.l,n);return this.setHSL(a,o,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,a=this.g,o=this.b,u=e.elements;return this.r=u[0]*n+u[3]*a+u[6]*o,this.g=u[1]*n+u[4]*a+u[7]*o,this.b=u[2]*n+u[5]*a+u[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new Nt;Nt.NAMES=xS;let VT=0;class pl extends Ys{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:VT++}),this.uuid=hl(),this.name="",this.type="Material",this.blending=Is,this.side=tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sd,this.blendDst=xd,this.blendEquation=wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Nt(0,0,0),this.blendAlpha=0,this.depthFunc=zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Av,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Es,this.stencilZFail=Es,this.stencilZPass=Es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const a=e[n];if(a===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(a):o&&o.isVector3&&a&&a.isVector3?o.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==Is&&(a.blending=this.blending),this.side!==tr&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==Sd&&(a.blendSrc=this.blendSrc),this.blendDst!==xd&&(a.blendDst=this.blendDst),this.blendEquation!==wr&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==zs&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Av&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Es&&(a.stencilFail=this.stencilFail),this.stencilZFail!==Es&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==Es&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function o(u){const f=[];for(const h in u){const m=u[h];delete m.metadata,f.push(m)}return f}if(n){const u=o(e.textures),f=o(e.images);u.length>0&&(a.textures=u),f.length>0&&(a.images=f)}return a}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let a=null;if(n!==null){const o=n.length;a=new Array(o);for(let u=0;u!==o;++u)a[u]=n[u].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class yS extends pl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xi,this.combine=aS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dn=new ee,zu=new ft;let kT=0;class Hi{constructor(e,n,a=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:kT++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=a,this.usage=Rv,this.updateRanges=[],this.gpuType=ma,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,a){e*=this.itemSize,a*=n.itemSize;for(let o=0,u=this.itemSize;o<u;o++)this.array[e+o]=n.array[a+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)zu.fromBufferAttribute(this,n),zu.applyMatrix3(e),this.setXY(n,zu.x,zu.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)dn.fromBufferAttribute(this,n),dn.applyMatrix3(e),this.setXYZ(n,dn.x,dn.y,dn.z);return this}applyMatrix4(e){for(let n=0,a=this.count;n<a;n++)dn.fromBufferAttribute(this,n),dn.applyMatrix4(e),this.setXYZ(n,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let n=0,a=this.count;n<a;n++)dn.fromBufferAttribute(this,n),dn.applyNormalMatrix(e),this.setXYZ(n,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let n=0,a=this.count;n<a;n++)dn.fromBufferAttribute(this,n),dn.transformDirection(e),this.setXYZ(n,dn.x,dn.y,dn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let a=this.array[e*this.itemSize+n];return this.normalized&&(a=jo(a,this.array)),a}setComponent(e,n,a){return this.normalized&&(a=jn(a,this.array)),this.array[e*this.itemSize+n]=a,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=jo(n,this.array)),n}setX(e,n){return this.normalized&&(n=jn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=jo(n,this.array)),n}setY(e,n){return this.normalized&&(n=jn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=jo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=jn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=jo(n,this.array)),n}setW(e,n){return this.normalized&&(n=jn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,a){return e*=this.itemSize,this.normalized&&(n=jn(n,this.array),a=jn(a,this.array)),this.array[e+0]=n,this.array[e+1]=a,this}setXYZ(e,n,a,o){return e*=this.itemSize,this.normalized&&(n=jn(n,this.array),a=jn(a,this.array),o=jn(o,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=o,this}setXYZW(e,n,a,o,u){return e*=this.itemSize,this.normalized&&(n=jn(n,this.array),a=jn(a,this.array),o=jn(o,this.array),u=jn(u,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=o,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Rv&&(e.usage=this.usage),e}}class ES extends Hi{constructor(e,n,a){super(new Uint16Array(e),n,a)}}class MS extends Hi{constructor(e,n,a){super(new Uint32Array(e),n,a)}}class Gi extends Hi{constructor(e,n,a){super(new Float32Array(e),n,a)}}let XT=0;const mi=new un,nd=new In,Ls=new ee,oi=new dl,Jo=new dl,Mn=new ee;class ir extends Ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:XT++}),this.uuid=hl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gS(e)?MS:ES)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,a=0){this.groups.push({start:e,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const u=new mt().getNormalMatrix(e);a.applyNormalMatrix(u),a.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mi.makeRotationFromQuaternion(e),this.applyMatrix4(mi),this}rotateX(e){return mi.makeRotationX(e),this.applyMatrix4(mi),this}rotateY(e){return mi.makeRotationY(e),this.applyMatrix4(mi),this}rotateZ(e){return mi.makeRotationZ(e),this.applyMatrix4(mi),this}translate(e,n,a){return mi.makeTranslation(e,n,a),this.applyMatrix4(mi),this}scale(e,n,a){return mi.makeScale(e,n,a),this.applyMatrix4(mi),this}lookAt(e){return nd.lookAt(e),nd.updateMatrix(),this.applyMatrix4(nd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ls).negate(),this.translate(Ls.x,Ls.y,Ls.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let o=0,u=e.length;o<u;o++){const f=e[o];a.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Gi(a,3))}else{const a=Math.min(e.length,n.count);for(let o=0;o<a;o++){const u=e[o];n.setXYZ(o,u.x,u.y,u.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ee(-1/0,-1/0,-1/0),new ee(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let a=0,o=n.length;a<o;a++){const u=n[a];oi.setFromBufferAttribute(u),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rp);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ee,1/0);return}if(e){const a=this.boundingSphere.center;if(oi.setFromBufferAttribute(e),n)for(let u=0,f=n.length;u<f;u++){const h=n[u];Jo.setFromBufferAttribute(h),this.morphTargetsRelative?(Mn.addVectors(oi.min,Jo.min),oi.expandByPoint(Mn),Mn.addVectors(oi.max,Jo.max),oi.expandByPoint(Mn)):(oi.expandByPoint(Jo.min),oi.expandByPoint(Jo.max))}oi.getCenter(a);let o=0;for(let u=0,f=e.count;u<f;u++)Mn.fromBufferAttribute(e,u),o=Math.max(o,a.distanceToSquared(Mn));if(n)for(let u=0,f=n.length;u<f;u++){const h=n[u],m=this.morphTargetsRelative;for(let d=0,g=h.count;d<g;d++)Mn.fromBufferAttribute(h,d),m&&(Ls.fromBufferAttribute(e,d),Mn.add(Ls)),o=Math.max(o,a.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,o=n.normal,u=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Hi(new Float32Array(4*a.count),4));const f=this.getAttribute("tangent"),h=[],m=[];for(let X=0;X<a.count;X++)h[X]=new ee,m[X]=new ee;const d=new ee,g=new ee,_=new ee,S=new ft,y=new ft,E=new ft,T=new ee,x=new ee;function v(X,U,R){d.fromBufferAttribute(a,X),g.fromBufferAttribute(a,U),_.fromBufferAttribute(a,R),S.fromBufferAttribute(u,X),y.fromBufferAttribute(u,U),E.fromBufferAttribute(u,R),g.sub(d),_.sub(d),y.sub(S),E.sub(S);const k=1/(y.x*E.y-E.x*y.y);isFinite(k)&&(T.copy(g).multiplyScalar(E.y).addScaledVector(_,-y.y).multiplyScalar(k),x.copy(_).multiplyScalar(y.x).addScaledVector(g,-E.x).multiplyScalar(k),h[X].add(T),h[U].add(T),h[R].add(T),m[X].add(x),m[U].add(x),m[R].add(x))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let X=0,U=D.length;X<U;++X){const R=D[X],k=R.start,J=R.count;for(let ue=k,me=k+J;ue<me;ue+=3)v(e.getX(ue+0),e.getX(ue+1),e.getX(ue+2))}const L=new ee,C=new ee,P=new ee,F=new ee;function I(X){P.fromBufferAttribute(o,X),F.copy(P);const U=h[X];L.copy(U),L.sub(P.multiplyScalar(P.dot(U))).normalize(),C.crossVectors(F,U);const k=C.dot(m[X])<0?-1:1;f.setXYZW(X,L.x,L.y,L.z,k)}for(let X=0,U=D.length;X<U;++X){const R=D[X],k=R.start,J=R.count;for(let ue=k,me=k+J;ue<me;ue+=3)I(e.getX(ue+0)),I(e.getX(ue+1)),I(e.getX(ue+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new Hi(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let S=0,y=a.count;S<y;S++)a.setXYZ(S,0,0,0);const o=new ee,u=new ee,f=new ee,h=new ee,m=new ee,d=new ee,g=new ee,_=new ee;if(e)for(let S=0,y=e.count;S<y;S+=3){const E=e.getX(S+0),T=e.getX(S+1),x=e.getX(S+2);o.fromBufferAttribute(n,E),u.fromBufferAttribute(n,T),f.fromBufferAttribute(n,x),g.subVectors(f,u),_.subVectors(o,u),g.cross(_),h.fromBufferAttribute(a,E),m.fromBufferAttribute(a,T),d.fromBufferAttribute(a,x),h.add(g),m.add(g),d.add(g),a.setXYZ(E,h.x,h.y,h.z),a.setXYZ(T,m.x,m.y,m.z),a.setXYZ(x,d.x,d.y,d.z)}else for(let S=0,y=n.count;S<y;S+=3)o.fromBufferAttribute(n,S+0),u.fromBufferAttribute(n,S+1),f.fromBufferAttribute(n,S+2),g.subVectors(f,u),_.subVectors(o,u),g.cross(_),a.setXYZ(S+0,g.x,g.y,g.z),a.setXYZ(S+1,g.x,g.y,g.z),a.setXYZ(S+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,a=e.count;n<a;n++)Mn.fromBufferAttribute(e,n),Mn.normalize(),e.setXYZ(n,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function e(h,m){const d=h.array,g=h.itemSize,_=h.normalized,S=new d.constructor(m.length*g);let y=0,E=0;for(let T=0,x=m.length;T<x;T++){h.isInterleavedBufferAttribute?y=m[T]*h.data.stride+h.offset:y=m[T]*g;for(let v=0;v<g;v++)S[E++]=d[y++]}return new Hi(S,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ir,a=this.index.array,o=this.attributes;for(const h in o){const m=o[h],d=e(m,a);n.setAttribute(h,d)}const u=this.morphAttributes;for(const h in u){const m=[],d=u[h];for(let g=0,_=d.length;g<_;g++){const S=d[g],y=e(S,a);m.push(y)}n.morphAttributes[h]=m}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,m=f.length;h<m;h++){const d=f[h];n.addGroup(d.start,d.count,d.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const d in m)m[d]!==void 0&&(e[d]=m[d]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const m in a){const d=a[m];e.data.attributes[m]=d.toJSON(e.data)}const o={};let u=!1;for(const m in this.morphAttributes){const d=this.morphAttributes[m],g=[];for(let _=0,S=d.length;_<S;_++){const y=d[_];g.push(y.toJSON(e.data))}g.length>0&&(o[m]=g,u=!0)}u&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const a=e.index;a!==null&&this.setIndex(a.clone());const o=e.attributes;for(const d in o){const g=o[d];this.setAttribute(d,g.clone(n))}const u=e.morphAttributes;for(const d in u){const g=[],_=u[d];for(let S=0,y=_.length;S<y;S++)g.push(_[S].clone(n));this.morphAttributes[d]=g}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let d=0,g=f.length;d<g;d++){const _=f[d];this.addGroup(_.start,_.count,_.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Gv=new un,Mr=new vS,Hu=new Rp,Vv=new ee,Gu=new ee,Vu=new ee,ku=new ee,id=new ee,Xu=new ee,kv=new ee,Wu=new ee;class zi extends In{constructor(e=new ir,n=new yS){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=o.length;u<f;u++){const h=o[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(e,n){const a=this.geometry,o=a.attributes.position,u=a.morphAttributes.position,f=a.morphTargetsRelative;n.fromBufferAttribute(o,e);const h=this.morphTargetInfluences;if(u&&h){Xu.set(0,0,0);for(let m=0,d=u.length;m<d;m++){const g=h[m],_=u[m];g!==0&&(id.fromBufferAttribute(_,e),f?Xu.addScaledVector(id,g):Xu.addScaledVector(id.sub(n),g))}n.add(Xu)}return n}raycast(e,n){const a=this.geometry,o=this.material,u=this.matrixWorld;o!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Hu.copy(a.boundingSphere),Hu.applyMatrix4(u),Mr.copy(e.ray).recast(e.near),!(Hu.containsPoint(Mr.origin)===!1&&(Mr.intersectSphere(Hu,Vv)===null||Mr.origin.distanceToSquared(Vv)>(e.far-e.near)**2))&&(Gv.copy(u).invert(),Mr.copy(e.ray).applyMatrix4(Gv),!(a.boundingBox!==null&&Mr.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(e,n,Mr)))}_computeIntersections(e,n,a){let o;const u=this.geometry,f=this.material,h=u.index,m=u.attributes.position,d=u.attributes.uv,g=u.attributes.uv1,_=u.attributes.normal,S=u.groups,y=u.drawRange;if(h!==null)if(Array.isArray(f))for(let E=0,T=S.length;E<T;E++){const x=S[E],v=f[x.materialIndex],D=Math.max(x.start,y.start),L=Math.min(h.count,Math.min(x.start+x.count,y.start+y.count));for(let C=D,P=L;C<P;C+=3){const F=h.getX(C),I=h.getX(C+1),X=h.getX(C+2);o=qu(this,v,e,a,d,g,_,F,I,X),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=x.materialIndex,n.push(o))}}else{const E=Math.max(0,y.start),T=Math.min(h.count,y.start+y.count);for(let x=E,v=T;x<v;x+=3){const D=h.getX(x),L=h.getX(x+1),C=h.getX(x+2);o=qu(this,f,e,a,d,g,_,D,L,C),o&&(o.faceIndex=Math.floor(x/3),n.push(o))}}else if(m!==void 0)if(Array.isArray(f))for(let E=0,T=S.length;E<T;E++){const x=S[E],v=f[x.materialIndex],D=Math.max(x.start,y.start),L=Math.min(m.count,Math.min(x.start+x.count,y.start+y.count));for(let C=D,P=L;C<P;C+=3){const F=C,I=C+1,X=C+2;o=qu(this,v,e,a,d,g,_,F,I,X),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=x.materialIndex,n.push(o))}}else{const E=Math.max(0,y.start),T=Math.min(m.count,y.start+y.count);for(let x=E,v=T;x<v;x+=3){const D=x,L=x+1,C=x+2;o=qu(this,f,e,a,d,g,_,D,L,C),o&&(o.faceIndex=Math.floor(x/3),n.push(o))}}}}function WT(r,e,n,a,o,u,f,h){let m;if(e.side===Zn?m=a.intersectTriangle(f,u,o,!0,h):m=a.intersectTriangle(o,u,f,e.side===tr,h),m===null)return null;Wu.copy(h),Wu.applyMatrix4(r.matrixWorld);const d=n.ray.origin.distanceTo(Wu);return d<n.near||d>n.far?null:{distance:d,point:Wu.clone(),object:r}}function qu(r,e,n,a,o,u,f,h,m,d){r.getVertexPosition(h,Gu),r.getVertexPosition(m,Vu),r.getVertexPosition(d,ku);const g=WT(r,e,n,a,Gu,Vu,ku,kv);if(g){const _=new ee;Ti.getBarycoord(kv,Gu,Vu,ku,_),o&&(g.uv=Ti.getInterpolatedAttribute(o,h,m,d,_,new ft)),u&&(g.uv1=Ti.getInterpolatedAttribute(u,h,m,d,_,new ft)),f&&(g.normal=Ti.getInterpolatedAttribute(f,h,m,d,_,new ee),g.normal.dot(a.direction)>0&&g.normal.multiplyScalar(-1));const S={a:h,b:m,c:d,normal:new ee,materialIndex:0};Ti.getNormal(Gu,Vu,ku,S.normal),g.face=S,g.barycoord=_}return g}class ml extends ir{constructor(e=1,n=1,a=1,o=1,u=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:a,widthSegments:o,heightSegments:u,depthSegments:f};const h=this;o=Math.floor(o),u=Math.floor(u),f=Math.floor(f);const m=[],d=[],g=[],_=[];let S=0,y=0;E("z","y","x",-1,-1,a,n,e,f,u,0),E("z","y","x",1,-1,a,n,-e,f,u,1),E("x","z","y",1,1,e,a,n,o,f,2),E("x","z","y",1,-1,e,a,-n,o,f,3),E("x","y","z",1,-1,e,n,a,o,u,4),E("x","y","z",-1,-1,e,n,-a,o,u,5),this.setIndex(m),this.setAttribute("position",new Gi(d,3)),this.setAttribute("normal",new Gi(g,3)),this.setAttribute("uv",new Gi(_,2));function E(T,x,v,D,L,C,P,F,I,X,U){const R=C/I,k=P/X,J=C/2,ue=P/2,me=F/2,he=I+1,B=X+1;let Z=0,q=0;const Te=new ee;for(let N=0;N<B;N++){const Q=N*k-ue;for(let ve=0;ve<he;ve++){const be=ve*R-J;Te[T]=be*D,Te[x]=Q*L,Te[v]=me,d.push(Te.x,Te.y,Te.z),Te[T]=0,Te[x]=0,Te[v]=F>0?1:-1,g.push(Te.x,Te.y,Te.z),_.push(ve/I),_.push(1-N/X),Z+=1}}for(let N=0;N<X;N++)for(let Q=0;Q<I;Q++){const ve=S+Q+he*N,be=S+Q+he*(N+1),Ne=S+(Q+1)+he*(N+1),Ve=S+(Q+1)+he*N;m.push(ve,be,Ve),m.push(be,Ne,Ve),q+=6}h.addGroup(y,q,U),y+=q,S+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ml(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ks(r){const e={};for(const n in r){e[n]={};for(const a in r[n]){const o=r[n][a];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][a]=null):e[n][a]=o.clone():Array.isArray(o)?e[n][a]=o.slice():e[n][a]=o}}return e}function Gn(r){const e={};for(let n=0;n<r.length;n++){const a=ks(r[n]);for(const o in a)e[o]=a[o]}return e}function qT(r){const e=[];for(let n=0;n<r.length;n++)e.push(r[n].clone());return e}function TS(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Dt.workingColorSpace}const YT={clone:ks,merge:Gn};var jT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ZT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class nr extends pl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jT,this.fragmentShader=ZT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ks(e.uniforms),this.uniformsGroups=qT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const f=this.uniforms[o].value;f&&f.isTexture?n.uniforms[o]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?n.uniforms[o]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[o]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[o]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[o]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[o]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[o]={type:"m4",value:f.toArray()}:n.uniforms[o]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const o in this.extensions)this.extensions[o]===!0&&(a[o]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class bS extends In{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new un,this.projectionMatrix=new un,this.projectionMatrixInverse=new un,this.coordinateSystem=Fi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Za=new ee,Xv=new ft,Wv=new ft;class Vn extends bS{constructor(e=50,n=1,a=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=a,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=sp*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Bh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sp*2*Math.atan(Math.tan(Bh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,a){Za.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Za.x,Za.y).multiplyScalar(-e/Za.z),Za.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(Za.x,Za.y).multiplyScalar(-e/Za.z)}getViewSize(e,n){return this.getViewBounds(e,Xv,Wv),n.subVectors(Wv,Xv)}setViewOffset(e,n,a,o,u,f){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Bh*.5*this.fov)/this.zoom,a=2*n,o=this.aspect*a,u=-.5*o;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,d=f.fullHeight;u+=f.offsetX*o/m,n-=f.offsetY*a/d,o*=f.width/m,a*=f.height/d}const h=this.filmOffset;h!==0&&(u+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+o,n,n-a,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ns=-90,Os=1;class KT extends In{constructor(e,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Vn(Ns,Os,e,n);o.layers=this.layers,this.add(o);const u=new Vn(Ns,Os,e,n);u.layers=this.layers,this.add(u);const f=new Vn(Ns,Os,e,n);f.layers=this.layers,this.add(f);const h=new Vn(Ns,Os,e,n);h.layers=this.layers,this.add(h);const m=new Vn(Ns,Os,e,n);m.layers=this.layers,this.add(m);const d=new Vn(Ns,Os,e,n);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[a,o,u,f,h,m]=n;for(const d of n)this.remove(d);if(e===Fi)a.up.set(0,1,0),a.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===hc)a.up.set(0,-1,0),a.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of n)this.add(d),d.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,f,h,m,d,g]=this.children,_=e.getRenderTarget(),S=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const T=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,e.setRenderTarget(a,0,o),e.render(n,u),e.setRenderTarget(a,1,o),e.render(n,f),e.setRenderTarget(a,2,o),e.render(n,h),e.setRenderTarget(a,3,o),e.render(n,m),e.setRenderTarget(a,4,o),e.render(n,d),a.texture.generateMipmaps=T,e.setRenderTarget(a,5,o),e.render(n,g),e.setRenderTarget(_,S,y),e.xr.enabled=E,a.texture.needsPMREMUpdate=!0}}class AS extends Kn{constructor(e=[],n=Hs,a,o,u,f,h,m,d,g){super(e,n,a,o,u,f,h,m,d,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class QT extends Br{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const a={width:e,height:e,depth:1},o=[a,a,a,a,a,a];this.texture=new AS(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new ml(5,5,5),u=new nr({name:"CubemapFromEquirect",uniforms:ks(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:Zn,blending:$a});u.uniforms.tEquirect.value=n;const f=new zi(o,u),h=n.minFilter;return n.minFilter===Ur&&(n.minFilter=Ii),new KT(1,10,this).update(e,f),n.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(e,n=!0,a=!0,o=!0){const u=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(n,a,o);e.setRenderTarget(u)}}class Yu extends In{constructor(){super(),this.isGroup=!0,this.type="Group"}}const JT={type:"move"};class ad{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ee,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ee),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ee,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ee),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const a of e.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,a){let o=null,u=null,f=null;const h=this._targetRay,m=this._grip,d=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(d&&e.hand){f=!0;for(const T of e.hand.values()){const x=n.getJointPose(T,a),v=this._getHandJoint(d,T);x!==null&&(v.matrix.fromArray(x.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=x.radius),v.visible=x!==null}const g=d.joints["index-finger-tip"],_=d.joints["thumb-tip"],S=g.position.distanceTo(_.position),y=.02,E=.005;d.inputState.pinching&&S>y+E?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&S<=y-E&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=n.getPose(e.gripSpace,a),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(o=n.getPose(e.targetRaySpace,a),o===null&&u!==null&&(o=u),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(JT)))}return h!==null&&(h.visible=o!==null),m!==null&&(m.visible=u!==null),d!==null&&(d.visible=f!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const a=new Yu;a.matrixAutoUpdate=!1,a.visible=!1,e.joints[n.jointName]=a,e.add(a)}return e.joints[n.jointName]}}class $T extends In{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xi,this.environmentIntensity=1,this.environmentRotation=new Xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const rd=new ee,eb=new ee,tb=new mt;class Qa{constructor(e=new ee(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,a,o){return this.normal.set(e,n,a),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,a){const o=rd.subVectors(a,n).cross(eb.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const a=e.delta(rd),o=this.normal.dot(a);if(o===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/o;return u<0||u>1?null:n.copy(e.start).addScaledVector(a,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return n<0&&a>0||a<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const a=n||tb.getNormalMatrix(e),o=this.coplanarPoint(rd).applyMatrix4(e),u=this.normal.applyMatrix3(a).normalize();return this.constant=-o.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Tr=new Rp,nb=new ft(.5,.5),ju=new ee;class wp{constructor(e=new Qa,n=new Qa,a=new Qa,o=new Qa,u=new Qa,f=new Qa){this.planes=[e,n,a,o,u,f]}set(e,n,a,o,u,f){const h=this.planes;return h[0].copy(e),h[1].copy(n),h[2].copy(a),h[3].copy(o),h[4].copy(u),h[5].copy(f),this}copy(e){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(e.planes[a]);return this}setFromProjectionMatrix(e,n=Fi,a=!1){const o=this.planes,u=e.elements,f=u[0],h=u[1],m=u[2],d=u[3],g=u[4],_=u[5],S=u[6],y=u[7],E=u[8],T=u[9],x=u[10],v=u[11],D=u[12],L=u[13],C=u[14],P=u[15];if(o[0].setComponents(d-f,y-g,v-E,P-D).normalize(),o[1].setComponents(d+f,y+g,v+E,P+D).normalize(),o[2].setComponents(d+h,y+_,v+T,P+L).normalize(),o[3].setComponents(d-h,y-_,v-T,P-L).normalize(),a)o[4].setComponents(m,S,x,C).normalize(),o[5].setComponents(d-m,y-S,v-x,P-C).normalize();else if(o[4].setComponents(d-m,y-S,v-x,P-C).normalize(),n===Fi)o[5].setComponents(d+m,y+S,v+x,P+C).normalize();else if(n===hc)o[5].setComponents(m,S,x,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Tr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Tr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Tr)}intersectsSprite(e){Tr.center.set(0,0,0);const n=nb.distanceTo(e.center);return Tr.radius=.7071067811865476+n,Tr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Tr)}intersectsSphere(e){const n=this.planes,a=e.center,o=-e.radius;for(let u=0;u<6;u++)if(n[u].distanceToPoint(a)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let a=0;a<6;a++){const o=n[a];if(ju.x=o.normal.x>0?e.max.x:e.min.x,ju.y=o.normal.y>0?e.max.y:e.min.y,ju.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(ju)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class RS extends Kn{constructor(e,n,a=Or,o,u,f,h=Ai,m=Ai,d,g=rl,_=1){if(g!==rl&&g!==sl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:e,height:n,depth:_};super(S,o,u,f,h,m,g,a,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ap(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class wS extends Kn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Cp extends ir{constructor(e=[],n=[],a=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:a,detail:o};const u=[],f=[];h(o),d(a),g(),this.setAttribute("position",new Gi(u,3)),this.setAttribute("normal",new Gi(u.slice(),3)),this.setAttribute("uv",new Gi(f,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function h(D){const L=new ee,C=new ee,P=new ee;for(let F=0;F<n.length;F+=3)y(n[F+0],L),y(n[F+1],C),y(n[F+2],P),m(L,C,P,D)}function m(D,L,C,P){const F=P+1,I=[];for(let X=0;X<=F;X++){I[X]=[];const U=D.clone().lerp(C,X/F),R=L.clone().lerp(C,X/F),k=F-X;for(let J=0;J<=k;J++)J===0&&X===F?I[X][J]=U:I[X][J]=U.clone().lerp(R,J/k)}for(let X=0;X<F;X++)for(let U=0;U<2*(F-X)-1;U++){const R=Math.floor(U/2);U%2===0?(S(I[X][R+1]),S(I[X+1][R]),S(I[X][R])):(S(I[X][R+1]),S(I[X+1][R+1]),S(I[X+1][R]))}}function d(D){const L=new ee;for(let C=0;C<u.length;C+=3)L.x=u[C+0],L.y=u[C+1],L.z=u[C+2],L.normalize().multiplyScalar(D),u[C+0]=L.x,u[C+1]=L.y,u[C+2]=L.z}function g(){const D=new ee;for(let L=0;L<u.length;L+=3){D.x=u[L+0],D.y=u[L+1],D.z=u[L+2];const C=x(D)/2/Math.PI+.5,P=v(D)/Math.PI+.5;f.push(C,1-P)}E(),_()}function _(){for(let D=0;D<f.length;D+=6){const L=f[D+0],C=f[D+2],P=f[D+4],F=Math.max(L,C,P),I=Math.min(L,C,P);F>.9&&I<.1&&(L<.2&&(f[D+0]+=1),C<.2&&(f[D+2]+=1),P<.2&&(f[D+4]+=1))}}function S(D){u.push(D.x,D.y,D.z)}function y(D,L){const C=D*3;L.x=e[C+0],L.y=e[C+1],L.z=e[C+2]}function E(){const D=new ee,L=new ee,C=new ee,P=new ee,F=new ft,I=new ft,X=new ft;for(let U=0,R=0;U<u.length;U+=9,R+=6){D.set(u[U+0],u[U+1],u[U+2]),L.set(u[U+3],u[U+4],u[U+5]),C.set(u[U+6],u[U+7],u[U+8]),F.set(f[R+0],f[R+1]),I.set(f[R+2],f[R+3]),X.set(f[R+4],f[R+5]),P.copy(D).add(L).add(C).divideScalar(3);const k=x(P);T(F,R+0,D,k),T(I,R+2,L,k),T(X,R+4,C,k)}}function T(D,L,C,P){P<0&&D.x===1&&(f[L]=D.x-1),C.x===0&&C.z===0&&(f[L]=P/2/Math.PI+.5)}function x(D){return Math.atan2(D.z,-D.x)}function v(D){return Math.atan2(-D.y,Math.sqrt(D.x*D.x+D.z*D.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cp(e.vertices,e.indices,e.radius,e.details)}}class Dp extends Cp{constructor(e=1,n=0){const a=(1+Math.sqrt(5))/2,o=[-1,a,0,1,a,0,-1,-a,0,1,-a,0,0,-1,a,0,1,a,0,-1,-a,0,1,-a,a,0,-1,a,0,1,-a,0,-1,-a,0,1],u=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(o,u,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Dp(e.radius,e.detail)}}class vc extends ir{constructor(e=1,n=1,a=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:a,heightSegments:o};const u=e/2,f=n/2,h=Math.floor(a),m=Math.floor(o),d=h+1,g=m+1,_=e/h,S=n/m,y=[],E=[],T=[],x=[];for(let v=0;v<g;v++){const D=v*S-f;for(let L=0;L<d;L++){const C=L*_-u;E.push(C,-D,0),T.push(0,0,1),x.push(L/h),x.push(1-v/m)}}for(let v=0;v<m;v++)for(let D=0;D<h;D++){const L=D+d*v,C=D+d*(v+1),P=D+1+d*(v+1),F=D+1+d*v;y.push(L,C,F),y.push(C,P,F)}this.setIndex(y),this.setAttribute("position",new Gi(E,3)),this.setAttribute("normal",new Gi(T,3)),this.setAttribute("uv",new Gi(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vc(e.width,e.height,e.widthSegments,e.heightSegments)}}class ib extends pl{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Nt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pS,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ab extends pl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class rb extends pl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class sb extends In{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Nt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const sd=new un,qv=new ee,Yv=new ee;class ob{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ft(512,512),this.mapType=ki,this.map=null,this.mapPass=null,this.matrix=new un,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wp,this._frameExtents=new ft(1,1),this._viewportCount=1,this._viewports=[new rn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,a=this.matrix;qv.setFromMatrixPosition(e.matrixWorld),n.position.copy(qv),Yv.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Yv),n.updateMatrixWorld(),sd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sd,n.coordinateSystem,n.reversedDepth),n.reversedDepth?a.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(sd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class tl extends bS{constructor(e=-1,n=1,a=1,o=-1,u=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=a,this.bottom=o,this.near=u,this.far=f,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,a,o,u,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let u=a-e,f=a+e,h=o+n,m=o-n;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=d*this.view.offsetX,f=u+d*this.view.width,h-=g*this.view.offsetY,m=h-g*this.view.height}this.projectionMatrix.makeOrthographic(u,f,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class lb extends ob{constructor(){super(new tl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ub extends sb{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(In.DEFAULT_UP),this.updateMatrix(),this.target=new In,this.shadow=new lb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class cb extends Vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class jv{constructor(e=1,n=0,a=0){this.radius=e,this.phi=n,this.theta=a}set(e,n,a){return this.radius=e,this.phi=n,this.theta=a,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=bt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,a){return this.radius=Math.sqrt(e*e+n*n+a*a),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,a),this.phi=Math.acos(bt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}function Zv(r,e,n,a){const o=fb(a);switch(n){case cS:return r*e;case hS:return r*e/o.components*o.byteLength;case Mp:return r*e/o.components*o.byteLength;case dS:return r*e*2/o.components*o.byteLength;case Tp:return r*e*2/o.components*o.byteLength;case fS:return r*e*3/o.components*o.byteLength;case bi:return r*e*4/o.components*o.byteLength;case bp:return r*e*4/o.components*o.byteLength;case nc:case ic:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ac:case rc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Nd:case Pd:return Math.max(r,16)*Math.max(e,8)/4;case Ld:case Od:return Math.max(r,8)*Math.max(e,8)/2;case Bd:case Id:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Fd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case zd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Hd:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Gd:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Vd:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case kd:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Xd:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Wd:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case qd:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Yd:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case jd:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Zd:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Kd:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Qd:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Jd:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case $d:case ep:case tp:return Math.ceil(r/4)*Math.ceil(e/4)*16;case np:case ip:return Math.ceil(r/4)*Math.ceil(e/4)*8;case ap:case rp:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function fb(r){switch(r){case ki:case sS:return{byteLength:1,components:1};case il:case oS:case fl:return{byteLength:2,components:1};case yp:case Ep:return{byteLength:2,components:4};case Or:case xp:case ma:return{byteLength:4,components:1};case lS:case uS:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function CS(){let r=null,e=!1,n=null,a=null;function o(u,f){n(u,f),a=r.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&(a=r.requestAnimationFrame(o),e=!0)},stop:function(){r.cancelAnimationFrame(a),e=!1},setAnimationLoop:function(u){n=u},setContext:function(u){r=u}}}function hb(r){const e=new WeakMap;function n(h,m){const d=h.array,g=h.usage,_=d.byteLength,S=r.createBuffer();r.bindBuffer(m,S),r.bufferData(m,d,g),h.onUploadCallback();let y;if(d instanceof Float32Array)y=r.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)y=r.HALF_FLOAT;else if(d instanceof Uint16Array)h.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=r.SHORT;else if(d instanceof Uint32Array)y=r.UNSIGNED_INT;else if(d instanceof Int32Array)y=r.INT;else if(d instanceof Int8Array)y=r.BYTE;else if(d instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:S,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:h.version,size:_}}function a(h,m,d){const g=m.array,_=m.updateRanges;if(r.bindBuffer(d,h),_.length===0)r.bufferSubData(d,0,g);else{_.sort((y,E)=>y.start-E.start);let S=0;for(let y=1;y<_.length;y++){const E=_[S],T=_[y];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++S,_[S]=T)}_.length=S+1;for(let y=0,E=_.length;y<E;y++){const T=_[y];r.bufferSubData(d,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(r.deleteBuffer(m.buffer),e.delete(h))}function f(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=e.get(h);(!g||g.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const d=e.get(h);if(d===void 0)e.set(h,n(h,m));else if(d.version<h.version){if(d.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(d.buffer,h,m),d.version=h.version}}return{get:o,remove:u,update:f}}var db=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pb=`#ifdef USE_ALPHAHASH
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
#endif`,mb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_b=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sb=`#ifdef USE_AOMAP
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
#endif`,xb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yb=`#ifdef USE_BATCHING
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
#endif`,Eb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Mb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ab=`#ifdef USE_IRIDESCENCE
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
#endif`,Rb=`#ifdef USE_BUMPMAP
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
#endif`,wb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Cb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Db=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ub=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Nb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ob=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Pb=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Bb=`#define PI 3.141592653589793
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
} // validated`,Ib=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Fb=`vec3 transformedNormal = objectNormal;
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
#endif`,zb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Wb=`#ifdef USE_ENVMAP
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
#endif`,qb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Yb=`#ifdef USE_ENVMAP
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
#endif`,jb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zb=`#ifdef USE_ENVMAP
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
#endif`,Kb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$b=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,eA=`#ifdef USE_GRADIENTMAP
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
}`,tA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,iA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,aA=`uniform bool receiveShadow;
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
#endif`,rA=`#ifdef USE_ENVMAP
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
#endif`,sA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,oA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,uA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cA=`PhysicalMaterial material;
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
#endif`,fA=`struct PhysicalMaterial {
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
}`,hA=`
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
#endif`,dA=`#if defined( RE_IndirectDiffuse )
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
#endif`,pA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_A=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,SA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,EA=`#if defined( USE_POINTS_UV )
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
#endif`,MA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,TA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,AA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,RA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wA=`#ifdef USE_MORPHTARGETS
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
#endif`,CA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,DA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,UA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,LA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,NA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,OA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,PA=`#ifdef USE_NORMALMAP
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
#endif`,BA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,IA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,FA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,HA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,GA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,VA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,XA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,WA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,YA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ZA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,KA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,QA=`float getShadowMask() {
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
}`,JA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$A=`#ifdef USE_SKINNING
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
#endif`,e1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,t1=`#ifdef USE_SKINNING
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
#endif`,n1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,i1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,a1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,r1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,s1=`#ifdef USE_TRANSMISSION
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
#endif`,o1=`#ifdef USE_TRANSMISSION
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
#endif`,l1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,u1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,c1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,f1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const h1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,d1=`uniform sampler2D t2D;
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
}`,p1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,m1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,g1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v1=`#include <common>
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
}`,S1=`#if DEPTH_PACKING == 3200
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
}`,x1=`#define DISTANCE
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
}`,y1=`#define DISTANCE
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
}`,E1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,M1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,T1=`uniform float scale;
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
}`,b1=`uniform vec3 diffuse;
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
}`,A1=`#include <common>
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
}`,R1=`uniform vec3 diffuse;
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
}`,w1=`#define LAMBERT
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
}`,C1=`#define LAMBERT
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
}`,D1=`#define MATCAP
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
}`,U1=`#define MATCAP
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
}`,L1=`#define NORMAL
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
}`,N1=`#define NORMAL
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
}`,O1=`#define PHONG
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
}`,P1=`#define PHONG
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
}`,B1=`#define STANDARD
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
}`,I1=`#define STANDARD
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
}`,F1=`#define TOON
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
}`,z1=`#define TOON
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
}`,H1=`uniform float size;
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
}`,G1=`uniform vec3 diffuse;
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
}`,V1=`#include <common>
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
}`,k1=`uniform vec3 color;
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
}`,X1=`uniform float rotation;
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
}`,W1=`uniform vec3 diffuse;
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
}`,vt={alphahash_fragment:db,alphahash_pars_fragment:pb,alphamap_fragment:mb,alphamap_pars_fragment:gb,alphatest_fragment:_b,alphatest_pars_fragment:vb,aomap_fragment:Sb,aomap_pars_fragment:xb,batching_pars_vertex:yb,batching_vertex:Eb,begin_vertex:Mb,beginnormal_vertex:Tb,bsdfs:bb,iridescence_fragment:Ab,bumpmap_pars_fragment:Rb,clipping_planes_fragment:wb,clipping_planes_pars_fragment:Cb,clipping_planes_pars_vertex:Db,clipping_planes_vertex:Ub,color_fragment:Lb,color_pars_fragment:Nb,color_pars_vertex:Ob,color_vertex:Pb,common:Bb,cube_uv_reflection_fragment:Ib,defaultnormal_vertex:Fb,displacementmap_pars_vertex:zb,displacementmap_vertex:Hb,emissivemap_fragment:Gb,emissivemap_pars_fragment:Vb,colorspace_fragment:kb,colorspace_pars_fragment:Xb,envmap_fragment:Wb,envmap_common_pars_fragment:qb,envmap_pars_fragment:Yb,envmap_pars_vertex:jb,envmap_physical_pars_fragment:rA,envmap_vertex:Zb,fog_vertex:Kb,fog_pars_vertex:Qb,fog_fragment:Jb,fog_pars_fragment:$b,gradientmap_pars_fragment:eA,lightmap_pars_fragment:tA,lights_lambert_fragment:nA,lights_lambert_pars_fragment:iA,lights_pars_begin:aA,lights_toon_fragment:sA,lights_toon_pars_fragment:oA,lights_phong_fragment:lA,lights_phong_pars_fragment:uA,lights_physical_fragment:cA,lights_physical_pars_fragment:fA,lights_fragment_begin:hA,lights_fragment_maps:dA,lights_fragment_end:pA,logdepthbuf_fragment:mA,logdepthbuf_pars_fragment:gA,logdepthbuf_pars_vertex:_A,logdepthbuf_vertex:vA,map_fragment:SA,map_pars_fragment:xA,map_particle_fragment:yA,map_particle_pars_fragment:EA,metalnessmap_fragment:MA,metalnessmap_pars_fragment:TA,morphinstance_vertex:bA,morphcolor_vertex:AA,morphnormal_vertex:RA,morphtarget_pars_vertex:wA,morphtarget_vertex:CA,normal_fragment_begin:DA,normal_fragment_maps:UA,normal_pars_fragment:LA,normal_pars_vertex:NA,normal_vertex:OA,normalmap_pars_fragment:PA,clearcoat_normal_fragment_begin:BA,clearcoat_normal_fragment_maps:IA,clearcoat_pars_fragment:FA,iridescence_pars_fragment:zA,opaque_fragment:HA,packing:GA,premultiplied_alpha_fragment:VA,project_vertex:kA,dithering_fragment:XA,dithering_pars_fragment:WA,roughnessmap_fragment:qA,roughnessmap_pars_fragment:YA,shadowmap_pars_fragment:jA,shadowmap_pars_vertex:ZA,shadowmap_vertex:KA,shadowmask_pars_fragment:QA,skinbase_vertex:JA,skinning_pars_vertex:$A,skinning_vertex:e1,skinnormal_vertex:t1,specularmap_fragment:n1,specularmap_pars_fragment:i1,tonemapping_fragment:a1,tonemapping_pars_fragment:r1,transmission_fragment:s1,transmission_pars_fragment:o1,uv_pars_fragment:l1,uv_pars_vertex:u1,uv_vertex:c1,worldpos_vertex:f1,background_vert:h1,background_frag:d1,backgroundCube_vert:p1,backgroundCube_frag:m1,cube_vert:g1,cube_frag:_1,depth_vert:v1,depth_frag:S1,distanceRGBA_vert:x1,distanceRGBA_frag:y1,equirect_vert:E1,equirect_frag:M1,linedashed_vert:T1,linedashed_frag:b1,meshbasic_vert:A1,meshbasic_frag:R1,meshlambert_vert:w1,meshlambert_frag:C1,meshmatcap_vert:D1,meshmatcap_frag:U1,meshnormal_vert:L1,meshnormal_frag:N1,meshphong_vert:O1,meshphong_frag:P1,meshphysical_vert:B1,meshphysical_frag:I1,meshtoon_vert:F1,meshtoon_frag:z1,points_vert:H1,points_frag:G1,shadow_vert:V1,shadow_frag:k1,sprite_vert:X1,sprite_frag:W1},Fe={common:{diffuse:{value:new Nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new mt}},envmap:{envMap:{value:null},envMapRotation:{value:new mt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new mt},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0},uvTransform:{value:new mt}},sprite:{diffuse:{value:new Nt(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}}},Bi={basic:{uniforms:Gn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:vt.meshbasic_vert,fragmentShader:vt.meshbasic_frag},lambert:{uniforms:Gn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Nt(0)}}]),vertexShader:vt.meshlambert_vert,fragmentShader:vt.meshlambert_frag},phong:{uniforms:Gn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Nt(0)},specular:{value:new Nt(1118481)},shininess:{value:30}}]),vertexShader:vt.meshphong_vert,fragmentShader:vt.meshphong_frag},standard:{uniforms:Gn([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new Nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag},toon:{uniforms:Gn([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new Nt(0)}}]),vertexShader:vt.meshtoon_vert,fragmentShader:vt.meshtoon_frag},matcap:{uniforms:Gn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:vt.meshmatcap_vert,fragmentShader:vt.meshmatcap_frag},points:{uniforms:Gn([Fe.points,Fe.fog]),vertexShader:vt.points_vert,fragmentShader:vt.points_frag},dashed:{uniforms:Gn([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:vt.linedashed_vert,fragmentShader:vt.linedashed_frag},depth:{uniforms:Gn([Fe.common,Fe.displacementmap]),vertexShader:vt.depth_vert,fragmentShader:vt.depth_frag},normal:{uniforms:Gn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:vt.meshnormal_vert,fragmentShader:vt.meshnormal_frag},sprite:{uniforms:Gn([Fe.sprite,Fe.fog]),vertexShader:vt.sprite_vert,fragmentShader:vt.sprite_frag},background:{uniforms:{uvTransform:{value:new mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:vt.background_vert,fragmentShader:vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new mt}},vertexShader:vt.backgroundCube_vert,fragmentShader:vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:vt.cube_vert,fragmentShader:vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:vt.equirect_vert,fragmentShader:vt.equirect_frag},distanceRGBA:{uniforms:Gn([Fe.common,Fe.displacementmap,{referencePosition:{value:new ee},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:vt.distanceRGBA_vert,fragmentShader:vt.distanceRGBA_frag},shadow:{uniforms:Gn([Fe.lights,Fe.fog,{color:{value:new Nt(0)},opacity:{value:1}}]),vertexShader:vt.shadow_vert,fragmentShader:vt.shadow_frag}};Bi.physical={uniforms:Gn([Bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new mt},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new mt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new mt},sheen:{value:0},sheenColor:{value:new Nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new mt},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new mt},attenuationDistance:{value:0},attenuationColor:{value:new Nt(0)},specularColor:{value:new Nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new mt},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new mt}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag};const Zu={r:0,b:0,g:0},br=new Xi,q1=new un;function Y1(r,e,n,a,o,u,f){const h=new Nt(0);let m=u===!0?0:1,d,g,_=null,S=0,y=null;function E(L){let C=L.isScene===!0?L.background:null;return C&&C.isTexture&&(C=(L.backgroundBlurriness>0?n:e).get(C)),C}function T(L){let C=!1;const P=E(L);P===null?v(h,m):P&&P.isColor&&(v(P,1),C=!0);const F=r.xr.getEnvironmentBlendMode();F==="additive"?a.buffers.color.setClear(0,0,0,1,f):F==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,f),(r.autoClear||C)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function x(L,C){const P=E(C);P&&(P.isCubeTexture||P.mapping===_c)?(g===void 0&&(g=new zi(new ml(1,1,1),new nr({name:"BackgroundCubeMaterial",uniforms:ks(Bi.backgroundCube.uniforms),vertexShader:Bi.backgroundCube.vertexShader,fragmentShader:Bi.backgroundCube.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(F,I,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),br.copy(C.backgroundRotation),br.x*=-1,br.y*=-1,br.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(br.y*=-1,br.z*=-1),g.material.uniforms.envMap.value=P,g.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(q1.makeRotationFromEuler(br)),g.material.toneMapped=Dt.getTransfer(P.colorSpace)!==Gt,(_!==P||S!==P.version||y!==r.toneMapping)&&(g.material.needsUpdate=!0,_=P,S=P.version,y=r.toneMapping),g.layers.enableAll(),L.unshift(g,g.geometry,g.material,0,0,null)):P&&P.isTexture&&(d===void 0&&(d=new zi(new vc(2,2),new nr({name:"BackgroundMaterial",uniforms:ks(Bi.background.uniforms),vertexShader:Bi.background.vertexShader,fragmentShader:Bi.background.fragmentShader,side:tr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(d)),d.material.uniforms.t2D.value=P,d.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,d.material.toneMapped=Dt.getTransfer(P.colorSpace)!==Gt,P.matrixAutoUpdate===!0&&P.updateMatrix(),d.material.uniforms.uvTransform.value.copy(P.matrix),(_!==P||S!==P.version||y!==r.toneMapping)&&(d.material.needsUpdate=!0,_=P,S=P.version,y=r.toneMapping),d.layers.enableAll(),L.unshift(d,d.geometry,d.material,0,0,null))}function v(L,C){L.getRGB(Zu,TS(r)),a.buffers.color.setClear(Zu.r,Zu.g,Zu.b,C,f)}function D(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return h},setClearColor:function(L,C=1){h.set(L),m=C,v(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(L){m=L,v(h,m)},render:T,addToRenderList:x,dispose:D}}function j1(r,e){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),a={},o=S(null);let u=o,f=!1;function h(R,k,J,ue,me){let he=!1;const B=_(ue,J,k);u!==B&&(u=B,d(u.object)),he=y(R,ue,J,me),he&&E(R,ue,J,me),me!==null&&e.update(me,r.ELEMENT_ARRAY_BUFFER),(he||f)&&(f=!1,C(R,k,J,ue),me!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(me).buffer))}function m(){return r.createVertexArray()}function d(R){return r.bindVertexArray(R)}function g(R){return r.deleteVertexArray(R)}function _(R,k,J){const ue=J.wireframe===!0;let me=a[R.id];me===void 0&&(me={},a[R.id]=me);let he=me[k.id];he===void 0&&(he={},me[k.id]=he);let B=he[ue];return B===void 0&&(B=S(m()),he[ue]=B),B}function S(R){const k=[],J=[],ue=[];for(let me=0;me<n;me++)k[me]=0,J[me]=0,ue[me]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:J,attributeDivisors:ue,object:R,attributes:{},index:null}}function y(R,k,J,ue){const me=u.attributes,he=k.attributes;let B=0;const Z=J.getAttributes();for(const q in Z)if(Z[q].location>=0){const N=me[q];let Q=he[q];if(Q===void 0&&(q==="instanceMatrix"&&R.instanceMatrix&&(Q=R.instanceMatrix),q==="instanceColor"&&R.instanceColor&&(Q=R.instanceColor)),N===void 0||N.attribute!==Q||Q&&N.data!==Q.data)return!0;B++}return u.attributesNum!==B||u.index!==ue}function E(R,k,J,ue){const me={},he=k.attributes;let B=0;const Z=J.getAttributes();for(const q in Z)if(Z[q].location>=0){let N=he[q];N===void 0&&(q==="instanceMatrix"&&R.instanceMatrix&&(N=R.instanceMatrix),q==="instanceColor"&&R.instanceColor&&(N=R.instanceColor));const Q={};Q.attribute=N,N&&N.data&&(Q.data=N.data),me[q]=Q,B++}u.attributes=me,u.attributesNum=B,u.index=ue}function T(){const R=u.newAttributes;for(let k=0,J=R.length;k<J;k++)R[k]=0}function x(R){v(R,0)}function v(R,k){const J=u.newAttributes,ue=u.enabledAttributes,me=u.attributeDivisors;J[R]=1,ue[R]===0&&(r.enableVertexAttribArray(R),ue[R]=1),me[R]!==k&&(r.vertexAttribDivisor(R,k),me[R]=k)}function D(){const R=u.newAttributes,k=u.enabledAttributes;for(let J=0,ue=k.length;J<ue;J++)k[J]!==R[J]&&(r.disableVertexAttribArray(J),k[J]=0)}function L(R,k,J,ue,me,he,B){B===!0?r.vertexAttribIPointer(R,k,J,me,he):r.vertexAttribPointer(R,k,J,ue,me,he)}function C(R,k,J,ue){T();const me=ue.attributes,he=J.getAttributes(),B=k.defaultAttributeValues;for(const Z in he){const q=he[Z];if(q.location>=0){let Te=me[Z];if(Te===void 0&&(Z==="instanceMatrix"&&R.instanceMatrix&&(Te=R.instanceMatrix),Z==="instanceColor"&&R.instanceColor&&(Te=R.instanceColor)),Te!==void 0){const N=Te.normalized,Q=Te.itemSize,ve=e.get(Te);if(ve===void 0)continue;const be=ve.buffer,Ne=ve.type,Ve=ve.bytesPerElement,ne=Ne===r.INT||Ne===r.UNSIGNED_INT||Te.gpuType===xp;if(Te.isInterleavedBufferAttribute){const ye=Te.data,Ue=ye.stride,et=Te.offset;if(ye.isInstancedInterleavedBuffer){for(let je=0;je<q.locationSize;je++)v(q.location+je,ye.meshPerAttribute);R.isInstancedMesh!==!0&&ue._maxInstanceCount===void 0&&(ue._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let je=0;je<q.locationSize;je++)x(q.location+je);r.bindBuffer(r.ARRAY_BUFFER,be);for(let je=0;je<q.locationSize;je++)L(q.location+je,Q/q.locationSize,Ne,N,Ue*Ve,(et+Q/q.locationSize*je)*Ve,ne)}else{if(Te.isInstancedBufferAttribute){for(let ye=0;ye<q.locationSize;ye++)v(q.location+ye,Te.meshPerAttribute);R.isInstancedMesh!==!0&&ue._maxInstanceCount===void 0&&(ue._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let ye=0;ye<q.locationSize;ye++)x(q.location+ye);r.bindBuffer(r.ARRAY_BUFFER,be);for(let ye=0;ye<q.locationSize;ye++)L(q.location+ye,Q/q.locationSize,Ne,N,Q*Ve,Q/q.locationSize*ye*Ve,ne)}}else if(B!==void 0){const N=B[Z];if(N!==void 0)switch(N.length){case 2:r.vertexAttrib2fv(q.location,N);break;case 3:r.vertexAttrib3fv(q.location,N);break;case 4:r.vertexAttrib4fv(q.location,N);break;default:r.vertexAttrib1fv(q.location,N)}}}}D()}function P(){X();for(const R in a){const k=a[R];for(const J in k){const ue=k[J];for(const me in ue)g(ue[me].object),delete ue[me];delete k[J]}delete a[R]}}function F(R){if(a[R.id]===void 0)return;const k=a[R.id];for(const J in k){const ue=k[J];for(const me in ue)g(ue[me].object),delete ue[me];delete k[J]}delete a[R.id]}function I(R){for(const k in a){const J=a[k];if(J[R.id]===void 0)continue;const ue=J[R.id];for(const me in ue)g(ue[me].object),delete ue[me];delete J[R.id]}}function X(){U(),f=!0,u!==o&&(u=o,d(u.object))}function U(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:X,resetDefaultState:U,dispose:P,releaseStatesOfGeometry:F,releaseStatesOfProgram:I,initAttributes:T,enableAttribute:x,disableUnusedAttributes:D}}function Z1(r,e,n){let a;function o(d){a=d}function u(d,g){r.drawArrays(a,d,g),n.update(g,a,1)}function f(d,g,_){_!==0&&(r.drawArraysInstanced(a,d,g,_),n.update(g,a,_))}function h(d,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,d,0,g,0,_);let y=0;for(let E=0;E<_;E++)y+=g[E];n.update(y,a,1)}function m(d,g,_,S){if(_===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<d.length;E++)f(d[E],g[E],S[E]);else{y.multiDrawArraysInstancedWEBGL(a,d,0,g,0,S,0,_);let E=0;for(let T=0;T<_;T++)E+=g[T]*S[T];n.update(E,a,1)}}this.setMode=o,this.render=u,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function K1(r,e,n,a){let o;function u(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");o=r.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function f(I){return!(I!==bi&&a.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(I){const X=I===fl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==ki&&a.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==ma&&!X)}function m(I){if(I==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=n.precision!==void 0?n.precision:"highp";const g=m(d);g!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",g,"instead."),d=g);const _=n.logarithmicDepthBuffer===!0,S=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_TEXTURE_SIZE),x=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),D=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),C=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),P=E>0,F=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:h,precision:d,logarithmicDepthBuffer:_,reversedDepthBuffer:S,maxTextures:y,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:x,maxAttributes:v,maxVertexUniforms:D,maxVaryings:L,maxFragmentUniforms:C,vertexTextures:P,maxSamples:F}}function Q1(r){const e=this;let n=null,a=0,o=!1,u=!1;const f=new Qa,h=new mt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,S){const y=_.length!==0||S||a!==0||o;return o=S,a=_.length,y},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(_,S){n=g(_,S,0)},this.setState=function(_,S,y){const E=_.clippingPlanes,T=_.clipIntersection,x=_.clipShadows,v=r.get(_);if(!o||E===null||E.length===0||u&&!x)u?g(null):d();else{const D=u?0:a,L=D*4;let C=v.clippingState||null;m.value=C,C=g(E,S,L,y);for(let P=0;P!==L;++P)C[P]=n[P];v.clippingState=C,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=D}};function d(){m.value!==n&&(m.value=n,m.needsUpdate=a>0),e.numPlanes=a,e.numIntersection=0}function g(_,S,y,E){const T=_!==null?_.length:0;let x=null;if(T!==0){if(x=m.value,E!==!0||x===null){const v=y+T*4,D=S.matrixWorldInverse;h.getNormalMatrix(D),(x===null||x.length<v)&&(x=new Float32Array(v));for(let L=0,C=y;L!==T;++L,C+=4)f.copy(_[L]).applyMatrix4(D,h),f.normal.toArray(x,C),x[C+3]=f.constant}m.value=x,m.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,x}}function J1(r){let e=new WeakMap;function n(f,h){return h===wd?f.mapping=Hs:h===Cd&&(f.mapping=Gs),f}function a(f){if(f&&f.isTexture){const h=f.mapping;if(h===wd||h===Cd)if(e.has(f)){const m=e.get(f).texture;return n(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const d=new QT(m.height);return d.fromEquirectangularTexture(r,f),e.set(f,d),f.addEventListener("dispose",o),n(d.texture,f.mapping)}else return null}}return f}function o(f){const h=f.target;h.removeEventListener("dispose",o);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function u(){e=new WeakMap}return{get:a,dispose:u}}const Bs=4,Kv=[.125,.215,.35,.446,.526,.582],Cr=20,od=new tl,Qv=new Nt;let ld=null,ud=0,cd=0,fd=!1;const Rr=(1+Math.sqrt(5))/2,Ps=1/Rr,Jv=[new ee(-Rr,Ps,0),new ee(Rr,Ps,0),new ee(-Ps,0,Rr),new ee(Ps,0,Rr),new ee(0,Rr,-Ps),new ee(0,Rr,Ps),new ee(-1,1,-1),new ee(1,1,-1),new ee(-1,1,1),new ee(1,1,1)],$1=new ee;class $v{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,a=.1,o=100,u={}){const{size:f=256,position:h=$1}=u;ld=this._renderer.getRenderTarget(),ud=this._renderer.getActiveCubeFace(),cd=this._renderer.getActiveMipmapLevel(),fd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,a,o,m,h),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=n0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=t0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ld,ud,cd),this._renderer.xr.enabled=fd,e.scissorTest=!1,Ku(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Hs||e.mapping===Gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ld=this._renderer.getRenderTarget(),ud=this._renderer.getActiveCubeFace(),cd=this._renderer.getActiveMipmapLevel(),fd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(e,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:Ii,minFilter:Ii,generateMipmaps:!1,type:fl,format:bi,colorSpace:Vs,depthBuffer:!1},o=e0(e,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=e0(e,n,a);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=eR(u)),this._blurMaterial=tR(u,e,n)}return o}_compileMaterial(e){const n=new zi(this._lodPlanes[0],e);this._renderer.compile(n,od)}_sceneToCubeUV(e,n,a,o,u){const m=new Vn(90,1,n,a),d=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,S=_.autoClear,y=_.toneMapping;_.getClearColor(Qv),_.toneMapping=er,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(o),_.clearDepth(),_.setRenderTarget(null));const T=new yS({name:"PMREM.Background",side:Zn,depthWrite:!1,depthTest:!1}),x=new zi(new ml,T);let v=!1;const D=e.background;D?D.isColor&&(T.color.copy(D),e.background=null,v=!0):(T.color.copy(Qv),v=!0);for(let L=0;L<6;L++){const C=L%3;C===0?(m.up.set(0,d[L],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+g[L],u.y,u.z)):C===1?(m.up.set(0,0,d[L]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+g[L],u.z)):(m.up.set(0,d[L],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+g[L]));const P=this._cubeSize;Ku(o,C*P,L>2?P:0,P,P),_.setRenderTarget(o),v&&_.render(x,m),_.render(e,m)}x.geometry.dispose(),x.material.dispose(),_.toneMapping=y,_.autoClear=S,e.background=D}_textureToCubeUV(e,n){const a=this._renderer,o=e.mapping===Hs||e.mapping===Gs;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=n0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=t0());const u=o?this._cubemapMaterial:this._equirectMaterial,f=new zi(this._lodPlanes[0],u),h=u.uniforms;h.envMap.value=e;const m=this._cubeSize;Ku(n,0,0,3*m,2*m),a.setRenderTarget(n),a.render(f,od)}_applyPMREM(e){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const o=this._lodPlanes.length;for(let u=1;u<o;u++){const f=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),h=Jv[(o-u-1)%Jv.length];this._blur(e,u-1,u,f,h)}n.autoClear=a}_blur(e,n,a,o,u){const f=this._pingPongRenderTarget;this._halfBlur(e,f,n,a,o,"latitudinal",u),this._halfBlur(f,e,a,a,o,"longitudinal",u)}_halfBlur(e,n,a,o,u,f,h){const m=this._renderer,d=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new zi(this._lodPlanes[o],d),S=d.uniforms,y=this._sizeLods[a]-1,E=isFinite(u)?Math.PI/(2*y):2*Math.PI/(2*Cr-1),T=u/E,x=isFinite(u)?1+Math.floor(g*T):Cr;x>Cr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Cr}`);const v=[];let D=0;for(let I=0;I<Cr;++I){const X=I/T,U=Math.exp(-X*X/2);v.push(U),I===0?D+=U:I<x&&(D+=2*U)}for(let I=0;I<v.length;I++)v[I]=v[I]/D;S.envMap.value=e.texture,S.samples.value=x,S.weights.value=v,S.latitudinal.value=f==="latitudinal",h&&(S.poleAxis.value=h);const{_lodMax:L}=this;S.dTheta.value=E,S.mipInt.value=L-a;const C=this._sizeLods[o],P=3*C*(o>L-Bs?o-L+Bs:0),F=4*(this._cubeSize-C);Ku(n,P,F,3*C,2*C),m.setRenderTarget(n),m.render(_,od)}}function eR(r){const e=[],n=[],a=[];let o=r;const u=r-Bs+1+Kv.length;for(let f=0;f<u;f++){const h=Math.pow(2,o);n.push(h);let m=1/h;f>r-Bs?m=Kv[f-r+Bs-1]:f===0&&(m=0),a.push(m);const d=1/(h-2),g=-d,_=1+d,S=[g,g,_,g,_,_,g,g,_,_,g,_],y=6,E=6,T=3,x=2,v=1,D=new Float32Array(T*E*y),L=new Float32Array(x*E*y),C=new Float32Array(v*E*y);for(let F=0;F<y;F++){const I=F%3*2/3-1,X=F>2?0:-1,U=[I,X,0,I+2/3,X,0,I+2/3,X+1,0,I,X,0,I+2/3,X+1,0,I,X+1,0];D.set(U,T*E*F),L.set(S,x*E*F);const R=[F,F,F,F,F,F];C.set(R,v*E*F)}const P=new ir;P.setAttribute("position",new Hi(D,T)),P.setAttribute("uv",new Hi(L,x)),P.setAttribute("faceIndex",new Hi(C,v)),e.push(P),o>Bs&&o--}return{lodPlanes:e,sizeLods:n,sigmas:a}}function e0(r,e,n){const a=new Br(r,e,n);return a.texture.mapping=_c,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Ku(r,e,n,a,o){r.viewport.set(e,n,a,o),r.scissor.set(e,n,a,o)}function tR(r,e,n){const a=new Float32Array(Cr),o=new ee(0,1,0);return new nr({name:"SphericalGaussianBlur",defines:{n:Cr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Up(),fragmentShader:`

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
		`,blending:$a,depthTest:!1,depthWrite:!1})}function t0(){return new nr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Up(),fragmentShader:`

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
		`,blending:$a,depthTest:!1,depthWrite:!1})}function n0(){return new nr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Up(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$a,depthTest:!1,depthWrite:!1})}function Up(){return`

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
	`}function nR(r){let e=new WeakMap,n=null;function a(h){if(h&&h.isTexture){const m=h.mapping,d=m===wd||m===Cd,g=m===Hs||m===Gs;if(d||g){let _=e.get(h);const S=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==S)return n===null&&(n=new $v(r)),_=d?n.fromEquirectangular(h,_):n.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,e.set(h,_),_.texture;if(_!==void 0)return _.texture;{const y=h.image;return d&&y&&y.height>0||g&&y&&o(y)?(n===null&&(n=new $v(r)),_=d?n.fromEquirectangular(h):n.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,e.set(h,_),h.addEventListener("dispose",u),_.texture):null}}}return h}function o(h){let m=0;const d=6;for(let g=0;g<d;g++)h[g]!==void 0&&m++;return m===d}function u(h){const m=h.target;m.removeEventListener("dispose",u);const d=e.get(m);d!==void 0&&(e.delete(m),d.dispose())}function f(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:f}}function iR(r){const e={};function n(a){if(e[a]!==void 0)return e[a];let o;switch(a){case"WEBGL_depth_texture":o=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=r.getExtension(a)}return e[a]=o,o}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const o=n(a);return o===null&&ol("THREE.WebGLRenderer: "+a+" extension not supported."),o}}}function aR(r,e,n,a){const o={},u=new WeakMap;function f(_){const S=_.target;S.index!==null&&e.remove(S.index);for(const E in S.attributes)e.remove(S.attributes[E]);S.removeEventListener("dispose",f),delete o[S.id];const y=u.get(S);y&&(e.remove(y),u.delete(S)),a.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,n.memory.geometries--}function h(_,S){return o[S.id]===!0||(S.addEventListener("dispose",f),o[S.id]=!0,n.memory.geometries++),S}function m(_){const S=_.attributes;for(const y in S)e.update(S[y],r.ARRAY_BUFFER)}function d(_){const S=[],y=_.index,E=_.attributes.position;let T=0;if(y!==null){const D=y.array;T=y.version;for(let L=0,C=D.length;L<C;L+=3){const P=D[L+0],F=D[L+1],I=D[L+2];S.push(P,F,F,I,I,P)}}else if(E!==void 0){const D=E.array;T=E.version;for(let L=0,C=D.length/3-1;L<C;L+=3){const P=L+0,F=L+1,I=L+2;S.push(P,F,F,I,I,P)}}else return;const x=new(gS(S)?MS:ES)(S,1);x.version=T;const v=u.get(_);v&&e.remove(v),u.set(_,x)}function g(_){const S=u.get(_);if(S){const y=_.index;y!==null&&S.version<y.version&&d(_)}else d(_);return u.get(_)}return{get:h,update:m,getWireframeAttribute:g}}function rR(r,e,n){let a;function o(S){a=S}let u,f;function h(S){u=S.type,f=S.bytesPerElement}function m(S,y){r.drawElements(a,y,u,S*f),n.update(y,a,1)}function d(S,y,E){E!==0&&(r.drawElementsInstanced(a,y,u,S*f,E),n.update(y,a,E))}function g(S,y,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,y,0,u,S,0,E);let x=0;for(let v=0;v<E;v++)x+=y[v];n.update(x,a,1)}function _(S,y,E,T){if(E===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let v=0;v<S.length;v++)d(S[v]/f,y[v],T[v]);else{x.multiDrawElementsInstancedWEBGL(a,y,0,u,S,0,T,0,E);let v=0;for(let D=0;D<E;D++)v+=y[D]*T[D];n.update(v,a,1)}}this.setMode=o,this.setIndex=h,this.render=m,this.renderInstances=d,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function sR(r){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(u,f,h){switch(n.calls++,f){case r.TRIANGLES:n.triangles+=h*(u/3);break;case r.LINES:n.lines+=h*(u/2);break;case r.LINE_STRIP:n.lines+=h*(u-1);break;case r.LINE_LOOP:n.lines+=h*u;break;case r.POINTS:n.points+=h*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:a}}function oR(r,e,n){const a=new WeakMap,o=new rn;function u(f,h,m){const d=f.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let S=a.get(h);if(S===void 0||S.count!==_){let R=function(){X.dispose(),a.delete(h),h.removeEventListener("dispose",R)};var y=R;S!==void 0&&S.texture.dispose();const E=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,x=h.morphAttributes.color!==void 0,v=h.morphAttributes.position||[],D=h.morphAttributes.normal||[],L=h.morphAttributes.color||[];let C=0;E===!0&&(C=1),T===!0&&(C=2),x===!0&&(C=3);let P=h.attributes.position.count*C,F=1;P>e.maxTextureSize&&(F=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const I=new Float32Array(P*F*4*_),X=new _S(I,P,F,_);X.type=ma,X.needsUpdate=!0;const U=C*4;for(let k=0;k<_;k++){const J=v[k],ue=D[k],me=L[k],he=P*F*4*k;for(let B=0;B<J.count;B++){const Z=B*U;E===!0&&(o.fromBufferAttribute(J,B),I[he+Z+0]=o.x,I[he+Z+1]=o.y,I[he+Z+2]=o.z,I[he+Z+3]=0),T===!0&&(o.fromBufferAttribute(ue,B),I[he+Z+4]=o.x,I[he+Z+5]=o.y,I[he+Z+6]=o.z,I[he+Z+7]=0),x===!0&&(o.fromBufferAttribute(me,B),I[he+Z+8]=o.x,I[he+Z+9]=o.y,I[he+Z+10]=o.z,I[he+Z+11]=me.itemSize===4?o.w:1)}}S={count:_,texture:X,size:new ft(P,F)},a.set(h,S),h.addEventListener("dispose",R)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,n);else{let E=0;for(let x=0;x<d.length;x++)E+=d[x];const T=h.morphTargetsRelative?1:1-E;m.getUniforms().setValue(r,"morphTargetBaseInfluence",T),m.getUniforms().setValue(r,"morphTargetInfluences",d)}m.getUniforms().setValue(r,"morphTargetsTexture",S.texture,n),m.getUniforms().setValue(r,"morphTargetsTextureSize",S.size)}return{update:u}}function lR(r,e,n,a){let o=new WeakMap;function u(m){const d=a.render.frame,g=m.geometry,_=e.get(m,g);if(o.get(_)!==d&&(e.update(_),o.set(_,d)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),o.get(m)!==d&&(n.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&n.update(m.instanceColor,r.ARRAY_BUFFER),o.set(m,d))),m.isSkinnedMesh){const S=m.skeleton;o.get(S)!==d&&(S.update(),o.set(S,d))}return _}function f(){o=new WeakMap}function h(m){const d=m.target;d.removeEventListener("dispose",h),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:u,dispose:f}}const DS=new Kn,i0=new RS(1,1),US=new _S,LS=new OT,NS=new AS,a0=[],r0=[],s0=new Float32Array(16),o0=new Float32Array(9),l0=new Float32Array(4);function js(r,e,n){const a=r[0];if(a<=0||a>0)return r;const o=e*n;let u=a0[o];if(u===void 0&&(u=new Float32Array(o),a0[o]=u),e!==0){a.toArray(u,0);for(let f=1,h=0;f!==e;++f)h+=n,r[f].toArray(u,h)}return u}function _n(r,e){if(r.length!==e.length)return!1;for(let n=0,a=r.length;n<a;n++)if(r[n]!==e[n])return!1;return!0}function vn(r,e){for(let n=0,a=e.length;n<a;n++)r[n]=e[n]}function Sc(r,e){let n=r0[e];n===void 0&&(n=new Int32Array(e),r0[e]=n);for(let a=0;a!==e;++a)n[a]=r.allocateTextureUnit();return n}function uR(r,e){const n=this.cache;n[0]!==e&&(r.uniform1f(this.addr,e),n[0]=e)}function cR(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(_n(n,e))return;r.uniform2fv(this.addr,e),vn(n,e)}}function fR(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(_n(n,e))return;r.uniform3fv(this.addr,e),vn(n,e)}}function hR(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(_n(n,e))return;r.uniform4fv(this.addr,e),vn(n,e)}}function dR(r,e){const n=this.cache,a=e.elements;if(a===void 0){if(_n(n,e))return;r.uniformMatrix2fv(this.addr,!1,e),vn(n,e)}else{if(_n(n,a))return;l0.set(a),r.uniformMatrix2fv(this.addr,!1,l0),vn(n,a)}}function pR(r,e){const n=this.cache,a=e.elements;if(a===void 0){if(_n(n,e))return;r.uniformMatrix3fv(this.addr,!1,e),vn(n,e)}else{if(_n(n,a))return;o0.set(a),r.uniformMatrix3fv(this.addr,!1,o0),vn(n,a)}}function mR(r,e){const n=this.cache,a=e.elements;if(a===void 0){if(_n(n,e))return;r.uniformMatrix4fv(this.addr,!1,e),vn(n,e)}else{if(_n(n,a))return;s0.set(a),r.uniformMatrix4fv(this.addr,!1,s0),vn(n,a)}}function gR(r,e){const n=this.cache;n[0]!==e&&(r.uniform1i(this.addr,e),n[0]=e)}function _R(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(_n(n,e))return;r.uniform2iv(this.addr,e),vn(n,e)}}function vR(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(_n(n,e))return;r.uniform3iv(this.addr,e),vn(n,e)}}function SR(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(_n(n,e))return;r.uniform4iv(this.addr,e),vn(n,e)}}function xR(r,e){const n=this.cache;n[0]!==e&&(r.uniform1ui(this.addr,e),n[0]=e)}function yR(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(_n(n,e))return;r.uniform2uiv(this.addr,e),vn(n,e)}}function ER(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(_n(n,e))return;r.uniform3uiv(this.addr,e),vn(n,e)}}function MR(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(_n(n,e))return;r.uniform4uiv(this.addr,e),vn(n,e)}}function TR(r,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o);let u;this.type===r.SAMPLER_2D_SHADOW?(i0.compareFunction=mS,u=i0):u=DS,n.setTexture2D(e||u,o)}function bR(r,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTexture3D(e||LS,o)}function AR(r,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTextureCube(e||NS,o)}function RR(r,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTexture2DArray(e||US,o)}function wR(r){switch(r){case 5126:return uR;case 35664:return cR;case 35665:return fR;case 35666:return hR;case 35674:return dR;case 35675:return pR;case 35676:return mR;case 5124:case 35670:return gR;case 35667:case 35671:return _R;case 35668:case 35672:return vR;case 35669:case 35673:return SR;case 5125:return xR;case 36294:return yR;case 36295:return ER;case 36296:return MR;case 35678:case 36198:case 36298:case 36306:case 35682:return TR;case 35679:case 36299:case 36307:return bR;case 35680:case 36300:case 36308:case 36293:return AR;case 36289:case 36303:case 36311:case 36292:return RR}}function CR(r,e){r.uniform1fv(this.addr,e)}function DR(r,e){const n=js(e,this.size,2);r.uniform2fv(this.addr,n)}function UR(r,e){const n=js(e,this.size,3);r.uniform3fv(this.addr,n)}function LR(r,e){const n=js(e,this.size,4);r.uniform4fv(this.addr,n)}function NR(r,e){const n=js(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,n)}function OR(r,e){const n=js(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,n)}function PR(r,e){const n=js(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,n)}function BR(r,e){r.uniform1iv(this.addr,e)}function IR(r,e){r.uniform2iv(this.addr,e)}function FR(r,e){r.uniform3iv(this.addr,e)}function zR(r,e){r.uniform4iv(this.addr,e)}function HR(r,e){r.uniform1uiv(this.addr,e)}function GR(r,e){r.uniform2uiv(this.addr,e)}function VR(r,e){r.uniform3uiv(this.addr,e)}function kR(r,e){r.uniform4uiv(this.addr,e)}function XR(r,e,n){const a=this.cache,o=e.length,u=Sc(n,o);_n(a,u)||(r.uniform1iv(this.addr,u),vn(a,u));for(let f=0;f!==o;++f)n.setTexture2D(e[f]||DS,u[f])}function WR(r,e,n){const a=this.cache,o=e.length,u=Sc(n,o);_n(a,u)||(r.uniform1iv(this.addr,u),vn(a,u));for(let f=0;f!==o;++f)n.setTexture3D(e[f]||LS,u[f])}function qR(r,e,n){const a=this.cache,o=e.length,u=Sc(n,o);_n(a,u)||(r.uniform1iv(this.addr,u),vn(a,u));for(let f=0;f!==o;++f)n.setTextureCube(e[f]||NS,u[f])}function YR(r,e,n){const a=this.cache,o=e.length,u=Sc(n,o);_n(a,u)||(r.uniform1iv(this.addr,u),vn(a,u));for(let f=0;f!==o;++f)n.setTexture2DArray(e[f]||US,u[f])}function jR(r){switch(r){case 5126:return CR;case 35664:return DR;case 35665:return UR;case 35666:return LR;case 35674:return NR;case 35675:return OR;case 35676:return PR;case 5124:case 35670:return BR;case 35667:case 35671:return IR;case 35668:case 35672:return FR;case 35669:case 35673:return zR;case 5125:return HR;case 36294:return GR;case 36295:return VR;case 36296:return kR;case 35678:case 36198:case 36298:case 36306:case 35682:return XR;case 35679:case 36299:case 36307:return WR;case 35680:case 36300:case 36308:case 36293:return qR;case 36289:case 36303:case 36311:case 36292:return YR}}class ZR{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.setValue=wR(n.type)}}class KR{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=jR(n.type)}}class QR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,a){const o=this.seq;for(let u=0,f=o.length;u!==f;++u){const h=o[u];h.setValue(e,n[h.id],a)}}}const hd=/(\w+)(\])?(\[|\.)?/g;function u0(r,e){r.seq.push(e),r.map[e.id]=e}function JR(r,e,n){const a=r.name,o=a.length;for(hd.lastIndex=0;;){const u=hd.exec(a),f=hd.lastIndex;let h=u[1];const m=u[2]==="]",d=u[3];if(m&&(h=h|0),d===void 0||d==="["&&f+2===o){u0(n,d===void 0?new ZR(h,r,e):new KR(h,r,e));break}else{let _=n.map[h];_===void 0&&(_=new QR(h),u0(n,_)),n=_}}}class sc{constructor(e,n){this.seq=[],this.map={};const a=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<a;++o){const u=e.getActiveUniform(n,o),f=e.getUniformLocation(n,u.name);JR(u,f,this)}}setValue(e,n,a,o){const u=this.map[n];u!==void 0&&u.setValue(e,a,o)}setOptional(e,n,a){const o=n[a];o!==void 0&&this.setValue(e,a,o)}static upload(e,n,a,o){for(let u=0,f=n.length;u!==f;++u){const h=n[u],m=a[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,o)}}static seqWithValue(e,n){const a=[];for(let o=0,u=e.length;o!==u;++o){const f=e[o];f.id in n&&a.push(f)}return a}}function c0(r,e,n){const a=r.createShader(e);return r.shaderSource(a,n),r.compileShader(a),a}const $R=37297;let ew=0;function tw(r,e){const n=r.split(`
`),a=[],o=Math.max(e-6,0),u=Math.min(e+6,n.length);for(let f=o;f<u;f++){const h=f+1;a.push(`${h===e?">":" "} ${h}: ${n[f]}`)}return a.join(`
`)}const f0=new mt;function nw(r){Dt._getMatrix(f0,Dt.workingColorSpace,r);const e=`mat3( ${f0.elements.map(n=>n.toFixed(4))} )`;switch(Dt.getTransfer(r)){case fc:return[e,"LinearTransferOETF"];case Gt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function h0(r,e,n){const a=r.getShaderParameter(e,r.COMPILE_STATUS),u=(r.getShaderInfoLog(e)||"").trim();if(a&&u==="")return"";const f=/ERROR: 0:(\d+)/.exec(u);if(f){const h=parseInt(f[1]);return n.toUpperCase()+`

`+u+`

`+tw(r.getShaderSource(e),h)}else return u}function iw(r,e){const n=nw(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function aw(r,e){let n;switch(e){case lT:n="Linear";break;case uT:n="Reinhard";break;case cT:n="Cineon";break;case fT:n="ACESFilmic";break;case dT:n="AgX";break;case pT:n="Neutral";break;case hT:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+r+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Qu=new ee;function rw(){Dt.getLuminanceCoefficients(Qu);const r=Qu.x.toFixed(4),e=Qu.y.toFixed(4),n=Qu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sw(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(el).join(`
`)}function ow(r){const e=[];for(const n in r){const a=r[n];a!==!1&&e.push("#define "+n+" "+a)}return e.join(`
`)}function lw(r,e){const n={},a=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let o=0;o<a;o++){const u=r.getActiveAttrib(e,o),f=u.name;let h=1;u.type===r.FLOAT_MAT2&&(h=2),u.type===r.FLOAT_MAT3&&(h=3),u.type===r.FLOAT_MAT4&&(h=4),n[f]={type:u.type,location:r.getAttribLocation(e,f),locationSize:h}}return n}function el(r){return r!==""}function d0(r,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function p0(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const uw=/^[ \t]*#include +<([\w\d./]+)>/gm;function op(r){return r.replace(uw,fw)}const cw=new Map;function fw(r,e){let n=vt[e];if(n===void 0){const a=cw.get(e);if(a!==void 0)n=vt[a],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,a);else throw new Error("Can not resolve #include <"+e+">")}return op(n)}const hw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function m0(r){return r.replace(hw,dw)}function dw(r,e,n,a){let o="";for(let u=parseInt(e);u<parseInt(n);u++)o+=a.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return o}function g0(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function pw(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===iS?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===GM?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===da&&(e="SHADOWMAP_TYPE_VSM"),e}function mw(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Hs:case Gs:e="ENVMAP_TYPE_CUBE";break;case _c:e="ENVMAP_TYPE_CUBE_UV";break}return e}function gw(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Gs:e="ENVMAP_MODE_REFRACTION";break}return e}function _w(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case aS:e="ENVMAP_BLENDING_MULTIPLY";break;case sT:e="ENVMAP_BLENDING_MIX";break;case oT:e="ENVMAP_BLENDING_ADD";break}return e}function vw(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,a=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function Sw(r,e,n,a){const o=r.getContext(),u=n.defines;let f=n.vertexShader,h=n.fragmentShader;const m=pw(n),d=mw(n),g=gw(n),_=_w(n),S=vw(n),y=sw(n),E=ow(u),T=o.createProgram();let x,v,D=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(el).join(`
`),x.length>0&&(x+=`
`),v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(el).join(`
`),v.length>0&&(v+=`
`)):(x=[g0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(el).join(`
`),v=[g0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.envMap?"#define "+g:"",n.envMap?"#define "+_:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==er?"#define TONE_MAPPING":"",n.toneMapping!==er?vt.tonemapping_pars_fragment:"",n.toneMapping!==er?aw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",vt.colorspace_pars_fragment,iw("linearToOutputTexel",n.outputColorSpace),rw(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(el).join(`
`)),f=op(f),f=d0(f,n),f=p0(f,n),h=op(h),h=d0(h,n),h=p0(h,n),f=m0(f),h=m0(h),n.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,x=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,v=["#define varying in",n.glslVersion===wv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===wv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const L=D+x+f,C=D+v+h,P=c0(o,o.VERTEX_SHADER,L),F=c0(o,o.FRAGMENT_SHADER,C);o.attachShader(T,P),o.attachShader(T,F),n.index0AttributeName!==void 0?o.bindAttribLocation(T,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(T,0,"position"),o.linkProgram(T);function I(k){if(r.debug.checkShaderErrors){const J=o.getProgramInfoLog(T)||"",ue=o.getShaderInfoLog(P)||"",me=o.getShaderInfoLog(F)||"",he=J.trim(),B=ue.trim(),Z=me.trim();let q=!0,Te=!0;if(o.getProgramParameter(T,o.LINK_STATUS)===!1)if(q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,T,P,F);else{const N=h0(o,P,"vertex"),Q=h0(o,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(T,o.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+he+`
`+N+`
`+Q)}else he!==""?console.warn("THREE.WebGLProgram: Program Info Log:",he):(B===""||Z==="")&&(Te=!1);Te&&(k.diagnostics={runnable:q,programLog:he,vertexShader:{log:B,prefix:x},fragmentShader:{log:Z,prefix:v}})}o.deleteShader(P),o.deleteShader(F),X=new sc(o,T),U=lw(o,T)}let X;this.getUniforms=function(){return X===void 0&&I(this),X};let U;this.getAttributes=function(){return U===void 0&&I(this),U};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=o.getProgramParameter(T,$R)),R},this.destroy=function(){a.releaseStatesOfProgram(this),o.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=ew++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=P,this.fragmentShader=F,this}let xw=0;class yw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,a=e.fragmentShader,o=this._getShaderStage(n),u=this._getShaderStage(a),f=this._getShaderCacheForMaterial(e);return f.has(o)===!1&&(f.add(o),o.usedTimes++),f.has(u)===!1&&(f.add(u),u.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let a=n.get(e);return a===void 0&&(a=new Set,n.set(e,a)),a}_getShaderStage(e){const n=this.shaderCache;let a=n.get(e);return a===void 0&&(a=new Ew(e),n.set(e,a)),a}}class Ew{constructor(e){this.id=xw++,this.code=e,this.usedTimes=0}}function Mw(r,e,n,a,o,u,f){const h=new SS,m=new yw,d=new Set,g=[],_=o.logarithmicDepthBuffer,S=o.vertexTextures;let y=o.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(U){return d.add(U),U===0?"uv":`uv${U}`}function x(U,R,k,J,ue){const me=J.fog,he=ue.geometry,B=U.isMeshStandardMaterial?J.environment:null,Z=(U.isMeshStandardMaterial?n:e).get(U.envMap||B),q=Z&&Z.mapping===_c?Z.image.height:null,Te=E[U.type];U.precision!==null&&(y=o.getMaxPrecision(U.precision),y!==U.precision&&console.warn("THREE.WebGLProgram.getParameters:",U.precision,"not supported, using",y,"instead."));const N=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,Q=N!==void 0?N.length:0;let ve=0;he.morphAttributes.position!==void 0&&(ve=1),he.morphAttributes.normal!==void 0&&(ve=2),he.morphAttributes.color!==void 0&&(ve=3);let be,Ne,Ve,ne;if(Te){const St=Bi[Te];be=St.vertexShader,Ne=St.fragmentShader}else be=U.vertexShader,Ne=U.fragmentShader,m.update(U),Ve=m.getVertexShaderID(U),ne=m.getFragmentShaderID(U);const ye=r.getRenderTarget(),Ue=r.state.buffers.depth.getReversed(),et=ue.isInstancedMesh===!0,je=ue.isBatchedMesh===!0,dt=!!U.map,Qt=!!U.matcap,G=!!Z,Ut=!!U.aoMap,ut=!!U.lightMap,at=!!U.bumpMap,ze=!!U.normalMap,Ot=!!U.displacementMap,We=!!U.emissiveMap,ct=!!U.metalnessMap,qt=!!U.roughnessMap,Xt=U.anisotropy>0,O=U.clearcoat>0,b=U.dispersion>0,ie=U.iridescence>0,de=U.sheen>0,Se=U.transmission>0,fe=Xt&&!!U.anisotropyMap,Ge=O&&!!U.clearcoatMap,Le=O&&!!U.clearcoatNormalMap,Ye=O&&!!U.clearcoatRoughnessMap,Ze=ie&&!!U.iridescenceMap,Ae=ie&&!!U.iridescenceThicknessMap,Oe=de&&!!U.sheenColorMap,Ke=de&&!!U.sheenRoughnessMap,H=!!U.specularMap,ae=!!U.specularColorMap,De=!!U.specularIntensityMap,V=Se&&!!U.transmissionMap,Me=Se&&!!U.thicknessMap,we=!!U.gradientMap,Pe=!!U.alphaMap,Re=U.alphaTest>0,xe=!!U.alphaHash,He=!!U.extensions;let Je=er;U.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(Je=r.toneMapping);const At={shaderID:Te,shaderType:U.type,shaderName:U.name,vertexShader:be,fragmentShader:Ne,defines:U.defines,customVertexShaderID:Ve,customFragmentShaderID:ne,isRawShaderMaterial:U.isRawShaderMaterial===!0,glslVersion:U.glslVersion,precision:y,batching:je,batchingColor:je&&ue._colorsTexture!==null,instancing:et,instancingColor:et&&ue.instanceColor!==null,instancingMorph:et&&ue.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:ye===null?r.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:Vs,alphaToCoverage:!!U.alphaToCoverage,map:dt,matcap:Qt,envMap:G,envMapMode:G&&Z.mapping,envMapCubeUVHeight:q,aoMap:Ut,lightMap:ut,bumpMap:at,normalMap:ze,displacementMap:S&&Ot,emissiveMap:We,normalMapObjectSpace:ze&&U.normalMapType===vT,normalMapTangentSpace:ze&&U.normalMapType===pS,metalnessMap:ct,roughnessMap:qt,anisotropy:Xt,anisotropyMap:fe,clearcoat:O,clearcoatMap:Ge,clearcoatNormalMap:Le,clearcoatRoughnessMap:Ye,dispersion:b,iridescence:ie,iridescenceMap:Ze,iridescenceThicknessMap:Ae,sheen:de,sheenColorMap:Oe,sheenRoughnessMap:Ke,specularMap:H,specularColorMap:ae,specularIntensityMap:De,transmission:Se,transmissionMap:V,thicknessMap:Me,gradientMap:we,opaque:U.transparent===!1&&U.blending===Is&&U.alphaToCoverage===!1,alphaMap:Pe,alphaTest:Re,alphaHash:xe,combine:U.combine,mapUv:dt&&T(U.map.channel),aoMapUv:Ut&&T(U.aoMap.channel),lightMapUv:ut&&T(U.lightMap.channel),bumpMapUv:at&&T(U.bumpMap.channel),normalMapUv:ze&&T(U.normalMap.channel),displacementMapUv:Ot&&T(U.displacementMap.channel),emissiveMapUv:We&&T(U.emissiveMap.channel),metalnessMapUv:ct&&T(U.metalnessMap.channel),roughnessMapUv:qt&&T(U.roughnessMap.channel),anisotropyMapUv:fe&&T(U.anisotropyMap.channel),clearcoatMapUv:Ge&&T(U.clearcoatMap.channel),clearcoatNormalMapUv:Le&&T(U.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ye&&T(U.clearcoatRoughnessMap.channel),iridescenceMapUv:Ze&&T(U.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&T(U.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&T(U.sheenColorMap.channel),sheenRoughnessMapUv:Ke&&T(U.sheenRoughnessMap.channel),specularMapUv:H&&T(U.specularMap.channel),specularColorMapUv:ae&&T(U.specularColorMap.channel),specularIntensityMapUv:De&&T(U.specularIntensityMap.channel),transmissionMapUv:V&&T(U.transmissionMap.channel),thicknessMapUv:Me&&T(U.thicknessMap.channel),alphaMapUv:Pe&&T(U.alphaMap.channel),vertexTangents:!!he.attributes.tangent&&(ze||Xt),vertexColors:U.vertexColors,vertexAlphas:U.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,pointsUvs:ue.isPoints===!0&&!!he.attributes.uv&&(dt||Pe),fog:!!me,useFog:U.fog===!0,fogExp2:!!me&&me.isFogExp2,flatShading:U.flatShading===!0&&U.wireframe===!1,sizeAttenuation:U.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Ue,skinning:ue.isSkinnedMesh===!0,morphTargets:he.morphAttributes.position!==void 0,morphNormals:he.morphAttributes.normal!==void 0,morphColors:he.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:ve,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:U.dithering,shadowMapEnabled:r.shadowMap.enabled&&k.length>0,shadowMapType:r.shadowMap.type,toneMapping:Je,decodeVideoTexture:dt&&U.map.isVideoTexture===!0&&Dt.getTransfer(U.map.colorSpace)===Gt,decodeVideoTextureEmissive:We&&U.emissiveMap.isVideoTexture===!0&&Dt.getTransfer(U.emissiveMap.colorSpace)===Gt,premultipliedAlpha:U.premultipliedAlpha,doubleSided:U.side===pa,flipSided:U.side===Zn,useDepthPacking:U.depthPacking>=0,depthPacking:U.depthPacking||0,index0AttributeName:U.index0AttributeName,extensionClipCullDistance:He&&U.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&U.extensions.multiDraw===!0||je)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:U.customProgramCacheKey()};return At.vertexUv1s=d.has(1),At.vertexUv2s=d.has(2),At.vertexUv3s=d.has(3),d.clear(),At}function v(U){const R=[];if(U.shaderID?R.push(U.shaderID):(R.push(U.customVertexShaderID),R.push(U.customFragmentShaderID)),U.defines!==void 0)for(const k in U.defines)R.push(k),R.push(U.defines[k]);return U.isRawShaderMaterial===!1&&(D(R,U),L(R,U),R.push(r.outputColorSpace)),R.push(U.customProgramCacheKey),R.join()}function D(U,R){U.push(R.precision),U.push(R.outputColorSpace),U.push(R.envMapMode),U.push(R.envMapCubeUVHeight),U.push(R.mapUv),U.push(R.alphaMapUv),U.push(R.lightMapUv),U.push(R.aoMapUv),U.push(R.bumpMapUv),U.push(R.normalMapUv),U.push(R.displacementMapUv),U.push(R.emissiveMapUv),U.push(R.metalnessMapUv),U.push(R.roughnessMapUv),U.push(R.anisotropyMapUv),U.push(R.clearcoatMapUv),U.push(R.clearcoatNormalMapUv),U.push(R.clearcoatRoughnessMapUv),U.push(R.iridescenceMapUv),U.push(R.iridescenceThicknessMapUv),U.push(R.sheenColorMapUv),U.push(R.sheenRoughnessMapUv),U.push(R.specularMapUv),U.push(R.specularColorMapUv),U.push(R.specularIntensityMapUv),U.push(R.transmissionMapUv),U.push(R.thicknessMapUv),U.push(R.combine),U.push(R.fogExp2),U.push(R.sizeAttenuation),U.push(R.morphTargetsCount),U.push(R.morphAttributeCount),U.push(R.numDirLights),U.push(R.numPointLights),U.push(R.numSpotLights),U.push(R.numSpotLightMaps),U.push(R.numHemiLights),U.push(R.numRectAreaLights),U.push(R.numDirLightShadows),U.push(R.numPointLightShadows),U.push(R.numSpotLightShadows),U.push(R.numSpotLightShadowsWithMaps),U.push(R.numLightProbes),U.push(R.shadowMapType),U.push(R.toneMapping),U.push(R.numClippingPlanes),U.push(R.numClipIntersection),U.push(R.depthPacking)}function L(U,R){h.disableAll(),R.supportsVertexTextures&&h.enable(0),R.instancing&&h.enable(1),R.instancingColor&&h.enable(2),R.instancingMorph&&h.enable(3),R.matcap&&h.enable(4),R.envMap&&h.enable(5),R.normalMapObjectSpace&&h.enable(6),R.normalMapTangentSpace&&h.enable(7),R.clearcoat&&h.enable(8),R.iridescence&&h.enable(9),R.alphaTest&&h.enable(10),R.vertexColors&&h.enable(11),R.vertexAlphas&&h.enable(12),R.vertexUv1s&&h.enable(13),R.vertexUv2s&&h.enable(14),R.vertexUv3s&&h.enable(15),R.vertexTangents&&h.enable(16),R.anisotropy&&h.enable(17),R.alphaHash&&h.enable(18),R.batching&&h.enable(19),R.dispersion&&h.enable(20),R.batchingColor&&h.enable(21),R.gradientMap&&h.enable(22),U.push(h.mask),h.disableAll(),R.fog&&h.enable(0),R.useFog&&h.enable(1),R.flatShading&&h.enable(2),R.logarithmicDepthBuffer&&h.enable(3),R.reversedDepthBuffer&&h.enable(4),R.skinning&&h.enable(5),R.morphTargets&&h.enable(6),R.morphNormals&&h.enable(7),R.morphColors&&h.enable(8),R.premultipliedAlpha&&h.enable(9),R.shadowMapEnabled&&h.enable(10),R.doubleSided&&h.enable(11),R.flipSided&&h.enable(12),R.useDepthPacking&&h.enable(13),R.dithering&&h.enable(14),R.transmission&&h.enable(15),R.sheen&&h.enable(16),R.opaque&&h.enable(17),R.pointsUvs&&h.enable(18),R.decodeVideoTexture&&h.enable(19),R.decodeVideoTextureEmissive&&h.enable(20),R.alphaToCoverage&&h.enable(21),U.push(h.mask)}function C(U){const R=E[U.type];let k;if(R){const J=Bi[R];k=YT.clone(J.uniforms)}else k=U.uniforms;return k}function P(U,R){let k;for(let J=0,ue=g.length;J<ue;J++){const me=g[J];if(me.cacheKey===R){k=me,++k.usedTimes;break}}return k===void 0&&(k=new Sw(r,R,U,u),g.push(k)),k}function F(U){if(--U.usedTimes===0){const R=g.indexOf(U);g[R]=g[g.length-1],g.pop(),U.destroy()}}function I(U){m.remove(U)}function X(){m.dispose()}return{getParameters:x,getProgramCacheKey:v,getUniforms:C,acquireProgram:P,releaseProgram:F,releaseShaderCache:I,programs:g,dispose:X}}function Tw(){let r=new WeakMap;function e(f){return r.has(f)}function n(f){let h=r.get(f);return h===void 0&&(h={},r.set(f,h)),h}function a(f){r.delete(f)}function o(f,h,m){r.get(f)[h]=m}function u(){r=new WeakMap}return{has:e,get:n,remove:a,update:o,dispose:u}}function bw(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function _0(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function v0(){const r=[];let e=0;const n=[],a=[],o=[];function u(){e=0,n.length=0,a.length=0,o.length=0}function f(_,S,y,E,T,x){let v=r[e];return v===void 0?(v={id:_.id,object:_,geometry:S,material:y,groupOrder:E,renderOrder:_.renderOrder,z:T,group:x},r[e]=v):(v.id=_.id,v.object=_,v.geometry=S,v.material=y,v.groupOrder=E,v.renderOrder=_.renderOrder,v.z=T,v.group=x),e++,v}function h(_,S,y,E,T,x){const v=f(_,S,y,E,T,x);y.transmission>0?a.push(v):y.transparent===!0?o.push(v):n.push(v)}function m(_,S,y,E,T,x){const v=f(_,S,y,E,T,x);y.transmission>0?a.unshift(v):y.transparent===!0?o.unshift(v):n.unshift(v)}function d(_,S){n.length>1&&n.sort(_||bw),a.length>1&&a.sort(S||_0),o.length>1&&o.sort(S||_0)}function g(){for(let _=e,S=r.length;_<S;_++){const y=r[_];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:a,transparent:o,init:u,push:h,unshift:m,finish:g,sort:d}}function Aw(){let r=new WeakMap;function e(a,o){const u=r.get(a);let f;return u===void 0?(f=new v0,r.set(a,[f])):o>=u.length?(f=new v0,u.push(f)):f=u[o],f}function n(){r=new WeakMap}return{get:e,dispose:n}}function Rw(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new ee,color:new Nt};break;case"SpotLight":n={position:new ee,direction:new ee,color:new Nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ee,color:new Nt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ee,skyColor:new Nt,groundColor:new Nt};break;case"RectAreaLight":n={color:new Nt,position:new ee,halfWidth:new ee,halfHeight:new ee};break}return r[e.id]=n,n}}}function ww(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=n,n}}}let Cw=0;function Dw(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Uw(r){const e=new Rw,n=ww(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)a.probe.push(new ee);const o=new ee,u=new un,f=new un;function h(d){let g=0,_=0,S=0;for(let U=0;U<9;U++)a.probe[U].set(0,0,0);let y=0,E=0,T=0,x=0,v=0,D=0,L=0,C=0,P=0,F=0,I=0;d.sort(Dw);for(let U=0,R=d.length;U<R;U++){const k=d[U],J=k.color,ue=k.intensity,me=k.distance,he=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)g+=J.r*ue,_+=J.g*ue,S+=J.b*ue;else if(k.isLightProbe){for(let B=0;B<9;B++)a.probe[B].addScaledVector(k.sh.coefficients[B],ue);I++}else if(k.isDirectionalLight){const B=e.get(k);if(B.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const Z=k.shadow,q=n.get(k);q.shadowIntensity=Z.intensity,q.shadowBias=Z.bias,q.shadowNormalBias=Z.normalBias,q.shadowRadius=Z.radius,q.shadowMapSize=Z.mapSize,a.directionalShadow[y]=q,a.directionalShadowMap[y]=he,a.directionalShadowMatrix[y]=k.shadow.matrix,D++}a.directional[y]=B,y++}else if(k.isSpotLight){const B=e.get(k);B.position.setFromMatrixPosition(k.matrixWorld),B.color.copy(J).multiplyScalar(ue),B.distance=me,B.coneCos=Math.cos(k.angle),B.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),B.decay=k.decay,a.spot[T]=B;const Z=k.shadow;if(k.map&&(a.spotLightMap[P]=k.map,P++,Z.updateMatrices(k),k.castShadow&&F++),a.spotLightMatrix[T]=Z.matrix,k.castShadow){const q=n.get(k);q.shadowIntensity=Z.intensity,q.shadowBias=Z.bias,q.shadowNormalBias=Z.normalBias,q.shadowRadius=Z.radius,q.shadowMapSize=Z.mapSize,a.spotShadow[T]=q,a.spotShadowMap[T]=he,C++}T++}else if(k.isRectAreaLight){const B=e.get(k);B.color.copy(J).multiplyScalar(ue),B.halfWidth.set(k.width*.5,0,0),B.halfHeight.set(0,k.height*.5,0),a.rectArea[x]=B,x++}else if(k.isPointLight){const B=e.get(k);if(B.color.copy(k.color).multiplyScalar(k.intensity),B.distance=k.distance,B.decay=k.decay,k.castShadow){const Z=k.shadow,q=n.get(k);q.shadowIntensity=Z.intensity,q.shadowBias=Z.bias,q.shadowNormalBias=Z.normalBias,q.shadowRadius=Z.radius,q.shadowMapSize=Z.mapSize,q.shadowCameraNear=Z.camera.near,q.shadowCameraFar=Z.camera.far,a.pointShadow[E]=q,a.pointShadowMap[E]=he,a.pointShadowMatrix[E]=k.shadow.matrix,L++}a.point[E]=B,E++}else if(k.isHemisphereLight){const B=e.get(k);B.skyColor.copy(k.color).multiplyScalar(ue),B.groundColor.copy(k.groundColor).multiplyScalar(ue),a.hemi[v]=B,v++}}x>0&&(r.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Fe.LTC_FLOAT_1,a.rectAreaLTC2=Fe.LTC_FLOAT_2):(a.rectAreaLTC1=Fe.LTC_HALF_1,a.rectAreaLTC2=Fe.LTC_HALF_2)),a.ambient[0]=g,a.ambient[1]=_,a.ambient[2]=S;const X=a.hash;(X.directionalLength!==y||X.pointLength!==E||X.spotLength!==T||X.rectAreaLength!==x||X.hemiLength!==v||X.numDirectionalShadows!==D||X.numPointShadows!==L||X.numSpotShadows!==C||X.numSpotMaps!==P||X.numLightProbes!==I)&&(a.directional.length=y,a.spot.length=T,a.rectArea.length=x,a.point.length=E,a.hemi.length=v,a.directionalShadow.length=D,a.directionalShadowMap.length=D,a.pointShadow.length=L,a.pointShadowMap.length=L,a.spotShadow.length=C,a.spotShadowMap.length=C,a.directionalShadowMatrix.length=D,a.pointShadowMatrix.length=L,a.spotLightMatrix.length=C+P-F,a.spotLightMap.length=P,a.numSpotLightShadowsWithMaps=F,a.numLightProbes=I,X.directionalLength=y,X.pointLength=E,X.spotLength=T,X.rectAreaLength=x,X.hemiLength=v,X.numDirectionalShadows=D,X.numPointShadows=L,X.numSpotShadows=C,X.numSpotMaps=P,X.numLightProbes=I,a.version=Cw++)}function m(d,g){let _=0,S=0,y=0,E=0,T=0;const x=g.matrixWorldInverse;for(let v=0,D=d.length;v<D;v++){const L=d[v];if(L.isDirectionalLight){const C=a.directional[_];C.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(x),_++}else if(L.isSpotLight){const C=a.spot[y];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(x),C.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(x),y++}else if(L.isRectAreaLight){const C=a.rectArea[E];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(x),f.identity(),u.copy(L.matrixWorld),u.premultiply(x),f.extractRotation(u),C.halfWidth.set(L.width*.5,0,0),C.halfHeight.set(0,L.height*.5,0),C.halfWidth.applyMatrix4(f),C.halfHeight.applyMatrix4(f),E++}else if(L.isPointLight){const C=a.point[S];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(x),S++}else if(L.isHemisphereLight){const C=a.hemi[T];C.direction.setFromMatrixPosition(L.matrixWorld),C.direction.transformDirection(x),T++}}}return{setup:h,setupView:m,state:a}}function S0(r){const e=new Uw(r),n=[],a=[];function o(g){d.camera=g,n.length=0,a.length=0}function u(g){n.push(g)}function f(g){a.push(g)}function h(){e.setup(n)}function m(g){e.setupView(n,g)}const d={lightsArray:n,shadowsArray:a,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:d,setupLights:h,setupLightsView:m,pushLight:u,pushShadow:f}}function Lw(r){let e=new WeakMap;function n(o,u=0){const f=e.get(o);let h;return f===void 0?(h=new S0(r),e.set(o,[h])):u>=f.length?(h=new S0(r),f.push(h)):h=f[u],h}function a(){e=new WeakMap}return{get:n,dispose:a}}const Nw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ow=`uniform sampler2D shadow_pass;
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
}`;function Pw(r,e,n){let a=new wp;const o=new ft,u=new ft,f=new rn,h=new ab({depthPacking:_T}),m=new rb,d={},g=n.maxTextureSize,_={[tr]:Zn,[Zn]:tr,[pa]:pa},S=new nr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:Nw,fragmentShader:Ow}),y=S.clone();y.defines.HORIZONTAL_PASS=1;const E=new ir;E.setAttribute("position",new Hi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new zi(E,S),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=iS;let v=this.type;this.render=function(F,I,X){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||F.length===0)return;const U=r.getRenderTarget(),R=r.getActiveCubeFace(),k=r.getActiveMipmapLevel(),J=r.state;J.setBlending($a),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const ue=v!==da&&this.type===da,me=v===da&&this.type!==da;for(let he=0,B=F.length;he<B;he++){const Z=F[he],q=Z.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;o.copy(q.mapSize);const Te=q.getFrameExtents();if(o.multiply(Te),u.copy(q.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(u.x=Math.floor(g/Te.x),o.x=u.x*Te.x,q.mapSize.x=u.x),o.y>g&&(u.y=Math.floor(g/Te.y),o.y=u.y*Te.y,q.mapSize.y=u.y)),q.map===null||ue===!0||me===!0){const Q=this.type!==da?{minFilter:Ai,magFilter:Ai}:{};q.map!==null&&q.map.dispose(),q.map=new Br(o.x,o.y,Q),q.map.texture.name=Z.name+".shadowMap",q.camera.updateProjectionMatrix()}r.setRenderTarget(q.map),r.clear();const N=q.getViewportCount();for(let Q=0;Q<N;Q++){const ve=q.getViewport(Q);f.set(u.x*ve.x,u.y*ve.y,u.x*ve.z,u.y*ve.w),J.viewport(f),q.updateMatrices(Z,Q),a=q.getFrustum(),C(I,X,q.camera,Z,this.type)}q.isPointLightShadow!==!0&&this.type===da&&D(q,X),q.needsUpdate=!1}v=this.type,x.needsUpdate=!1,r.setRenderTarget(U,R,k)};function D(F,I){const X=e.update(T);S.defines.VSM_SAMPLES!==F.blurSamples&&(S.defines.VSM_SAMPLES=F.blurSamples,y.defines.VSM_SAMPLES=F.blurSamples,S.needsUpdate=!0,y.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Br(o.x,o.y)),S.uniforms.shadow_pass.value=F.map.texture,S.uniforms.resolution.value=F.mapSize,S.uniforms.radius.value=F.radius,r.setRenderTarget(F.mapPass),r.clear(),r.renderBufferDirect(I,null,X,S,T,null),y.uniforms.shadow_pass.value=F.mapPass.texture,y.uniforms.resolution.value=F.mapSize,y.uniforms.radius.value=F.radius,r.setRenderTarget(F.map),r.clear(),r.renderBufferDirect(I,null,X,y,T,null)}function L(F,I,X,U){let R=null;const k=X.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(k!==void 0)R=k;else if(R=X.isPointLight===!0?m:h,r.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const J=R.uuid,ue=I.uuid;let me=d[J];me===void 0&&(me={},d[J]=me);let he=me[ue];he===void 0&&(he=R.clone(),me[ue]=he,I.addEventListener("dispose",P)),R=he}if(R.visible=I.visible,R.wireframe=I.wireframe,U===da?R.side=I.shadowSide!==null?I.shadowSide:I.side:R.side=I.shadowSide!==null?I.shadowSide:_[I.side],R.alphaMap=I.alphaMap,R.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,R.map=I.map,R.clipShadows=I.clipShadows,R.clippingPlanes=I.clippingPlanes,R.clipIntersection=I.clipIntersection,R.displacementMap=I.displacementMap,R.displacementScale=I.displacementScale,R.displacementBias=I.displacementBias,R.wireframeLinewidth=I.wireframeLinewidth,R.linewidth=I.linewidth,X.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const J=r.properties.get(R);J.light=X}return R}function C(F,I,X,U,R){if(F.visible===!1)return;if(F.layers.test(I.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&R===da)&&(!F.frustumCulled||a.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,F.matrixWorld);const ue=e.update(F),me=F.material;if(Array.isArray(me)){const he=ue.groups;for(let B=0,Z=he.length;B<Z;B++){const q=he[B],Te=me[q.materialIndex];if(Te&&Te.visible){const N=L(F,Te,U,R);F.onBeforeShadow(r,F,I,X,ue,N,q),r.renderBufferDirect(X,null,ue,N,F,q),F.onAfterShadow(r,F,I,X,ue,N,q)}}}else if(me.visible){const he=L(F,me,U,R);F.onBeforeShadow(r,F,I,X,ue,he,null),r.renderBufferDirect(X,null,ue,he,F,null),F.onAfterShadow(r,F,I,X,ue,he,null)}}const J=F.children;for(let ue=0,me=J.length;ue<me;ue++)C(J[ue],I,X,U,R)}function P(F){F.target.removeEventListener("dispose",P);for(const X in d){const U=d[X],R=F.target.uuid;R in U&&(U[R].dispose(),delete U[R])}}}const Bw={[yd]:Ed,[Md]:Ad,[Td]:Rd,[zs]:bd,[Ed]:yd,[Ad]:Md,[Rd]:Td,[bd]:zs};function Iw(r,e){function n(){let V=!1;const Me=new rn;let we=null;const Pe=new rn(0,0,0,0);return{setMask:function(Re){we!==Re&&!V&&(r.colorMask(Re,Re,Re,Re),we=Re)},setLocked:function(Re){V=Re},setClear:function(Re,xe,He,Je,At){At===!0&&(Re*=Je,xe*=Je,He*=Je),Me.set(Re,xe,He,Je),Pe.equals(Me)===!1&&(r.clearColor(Re,xe,He,Je),Pe.copy(Me))},reset:function(){V=!1,we=null,Pe.set(-1,0,0,0)}}}function a(){let V=!1,Me=!1,we=null,Pe=null,Re=null;return{setReversed:function(xe){if(Me!==xe){const He=e.get("EXT_clip_control");xe?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT),Me=xe;const Je=Re;Re=null,this.setClear(Je)}},getReversed:function(){return Me},setTest:function(xe){xe?ye(r.DEPTH_TEST):Ue(r.DEPTH_TEST)},setMask:function(xe){we!==xe&&!V&&(r.depthMask(xe),we=xe)},setFunc:function(xe){if(Me&&(xe=Bw[xe]),Pe!==xe){switch(xe){case yd:r.depthFunc(r.NEVER);break;case Ed:r.depthFunc(r.ALWAYS);break;case Md:r.depthFunc(r.LESS);break;case zs:r.depthFunc(r.LEQUAL);break;case Td:r.depthFunc(r.EQUAL);break;case bd:r.depthFunc(r.GEQUAL);break;case Ad:r.depthFunc(r.GREATER);break;case Rd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Pe=xe}},setLocked:function(xe){V=xe},setClear:function(xe){Re!==xe&&(Me&&(xe=1-xe),r.clearDepth(xe),Re=xe)},reset:function(){V=!1,we=null,Pe=null,Re=null,Me=!1}}}function o(){let V=!1,Me=null,we=null,Pe=null,Re=null,xe=null,He=null,Je=null,At=null;return{setTest:function(St){V||(St?ye(r.STENCIL_TEST):Ue(r.STENCIL_TEST))},setMask:function(St){Me!==St&&!V&&(r.stencilMask(St),Me=St)},setFunc:function(St,Tn,jt){(we!==St||Pe!==Tn||Re!==jt)&&(r.stencilFunc(St,Tn,jt),we=St,Pe=Tn,Re=jt)},setOp:function(St,Tn,jt){(xe!==St||He!==Tn||Je!==jt)&&(r.stencilOp(St,Tn,jt),xe=St,He=Tn,Je=jt)},setLocked:function(St){V=St},setClear:function(St){At!==St&&(r.clearStencil(St),At=St)},reset:function(){V=!1,Me=null,we=null,Pe=null,Re=null,xe=null,He=null,Je=null,At=null}}}const u=new n,f=new a,h=new o,m=new WeakMap,d=new WeakMap;let g={},_={},S=new WeakMap,y=[],E=null,T=!1,x=null,v=null,D=null,L=null,C=null,P=null,F=null,I=new Nt(0,0,0),X=0,U=!1,R=null,k=null,J=null,ue=null,me=null;const he=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,Z=0;const q=r.getParameter(r.VERSION);q.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(q)[1]),B=Z>=1):q.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),B=Z>=2);let Te=null,N={};const Q=r.getParameter(r.SCISSOR_BOX),ve=r.getParameter(r.VIEWPORT),be=new rn().fromArray(Q),Ne=new rn().fromArray(ve);function Ve(V,Me,we,Pe){const Re=new Uint8Array(4),xe=r.createTexture();r.bindTexture(V,xe),r.texParameteri(V,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(V,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let He=0;He<we;He++)V===r.TEXTURE_3D||V===r.TEXTURE_2D_ARRAY?r.texImage3D(Me,0,r.RGBA,1,1,Pe,0,r.RGBA,r.UNSIGNED_BYTE,Re):r.texImage2D(Me+He,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Re);return xe}const ne={};ne[r.TEXTURE_2D]=Ve(r.TEXTURE_2D,r.TEXTURE_2D,1),ne[r.TEXTURE_CUBE_MAP]=Ve(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[r.TEXTURE_2D_ARRAY]=Ve(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ne[r.TEXTURE_3D]=Ve(r.TEXTURE_3D,r.TEXTURE_3D,1,1),u.setClear(0,0,0,1),f.setClear(1),h.setClear(0),ye(r.DEPTH_TEST),f.setFunc(zs),at(!1),ze(Ev),ye(r.CULL_FACE),Ut($a);function ye(V){g[V]!==!0&&(r.enable(V),g[V]=!0)}function Ue(V){g[V]!==!1&&(r.disable(V),g[V]=!1)}function et(V,Me){return _[V]!==Me?(r.bindFramebuffer(V,Me),_[V]=Me,V===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=Me),V===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=Me),!0):!1}function je(V,Me){let we=y,Pe=!1;if(V){we=S.get(Me),we===void 0&&(we=[],S.set(Me,we));const Re=V.textures;if(we.length!==Re.length||we[0]!==r.COLOR_ATTACHMENT0){for(let xe=0,He=Re.length;xe<He;xe++)we[xe]=r.COLOR_ATTACHMENT0+xe;we.length=Re.length,Pe=!0}}else we[0]!==r.BACK&&(we[0]=r.BACK,Pe=!0);Pe&&r.drawBuffers(we)}function dt(V){return E!==V?(r.useProgram(V),E=V,!0):!1}const Qt={[wr]:r.FUNC_ADD,[kM]:r.FUNC_SUBTRACT,[XM]:r.FUNC_REVERSE_SUBTRACT};Qt[WM]=r.MIN,Qt[qM]=r.MAX;const G={[YM]:r.ZERO,[jM]:r.ONE,[ZM]:r.SRC_COLOR,[Sd]:r.SRC_ALPHA,[tT]:r.SRC_ALPHA_SATURATE,[$M]:r.DST_COLOR,[QM]:r.DST_ALPHA,[KM]:r.ONE_MINUS_SRC_COLOR,[xd]:r.ONE_MINUS_SRC_ALPHA,[eT]:r.ONE_MINUS_DST_COLOR,[JM]:r.ONE_MINUS_DST_ALPHA,[nT]:r.CONSTANT_COLOR,[iT]:r.ONE_MINUS_CONSTANT_COLOR,[aT]:r.CONSTANT_ALPHA,[rT]:r.ONE_MINUS_CONSTANT_ALPHA};function Ut(V,Me,we,Pe,Re,xe,He,Je,At,St){if(V===$a){T===!0&&(Ue(r.BLEND),T=!1);return}if(T===!1&&(ye(r.BLEND),T=!0),V!==VM){if(V!==x||St!==U){if((v!==wr||C!==wr)&&(r.blendEquation(r.FUNC_ADD),v=wr,C=wr),St)switch(V){case Is:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Mv:r.blendFunc(r.ONE,r.ONE);break;case Tv:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case bv:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Is:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Mv:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Tv:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bv:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}D=null,L=null,P=null,F=null,I.set(0,0,0),X=0,x=V,U=St}return}Re=Re||Me,xe=xe||we,He=He||Pe,(Me!==v||Re!==C)&&(r.blendEquationSeparate(Qt[Me],Qt[Re]),v=Me,C=Re),(we!==D||Pe!==L||xe!==P||He!==F)&&(r.blendFuncSeparate(G[we],G[Pe],G[xe],G[He]),D=we,L=Pe,P=xe,F=He),(Je.equals(I)===!1||At!==X)&&(r.blendColor(Je.r,Je.g,Je.b,At),I.copy(Je),X=At),x=V,U=!1}function ut(V,Me){V.side===pa?Ue(r.CULL_FACE):ye(r.CULL_FACE);let we=V.side===Zn;Me&&(we=!we),at(we),V.blending===Is&&V.transparent===!1?Ut($a):Ut(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),f.setFunc(V.depthFunc),f.setTest(V.depthTest),f.setMask(V.depthWrite),u.setMask(V.colorWrite);const Pe=V.stencilWrite;h.setTest(Pe),Pe&&(h.setMask(V.stencilWriteMask),h.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),h.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),We(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?ye(r.SAMPLE_ALPHA_TO_COVERAGE):Ue(r.SAMPLE_ALPHA_TO_COVERAGE)}function at(V){R!==V&&(V?r.frontFace(r.CW):r.frontFace(r.CCW),R=V)}function ze(V){V!==zM?(ye(r.CULL_FACE),V!==k&&(V===Ev?r.cullFace(r.BACK):V===HM?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ue(r.CULL_FACE),k=V}function Ot(V){V!==J&&(B&&r.lineWidth(V),J=V)}function We(V,Me,we){V?(ye(r.POLYGON_OFFSET_FILL),(ue!==Me||me!==we)&&(r.polygonOffset(Me,we),ue=Me,me=we)):Ue(r.POLYGON_OFFSET_FILL)}function ct(V){V?ye(r.SCISSOR_TEST):Ue(r.SCISSOR_TEST)}function qt(V){V===void 0&&(V=r.TEXTURE0+he-1),Te!==V&&(r.activeTexture(V),Te=V)}function Xt(V,Me,we){we===void 0&&(Te===null?we=r.TEXTURE0+he-1:we=Te);let Pe=N[we];Pe===void 0&&(Pe={type:void 0,texture:void 0},N[we]=Pe),(Pe.type!==V||Pe.texture!==Me)&&(Te!==we&&(r.activeTexture(we),Te=we),r.bindTexture(V,Me||ne[V]),Pe.type=V,Pe.texture=Me)}function O(){const V=N[Te];V!==void 0&&V.type!==void 0&&(r.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function b(){try{r.compressedTexImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ie(){try{r.compressedTexImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function de(){try{r.texSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Se(){try{r.texSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function fe(){try{r.compressedTexSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ge(){try{r.compressedTexSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Le(){try{r.texStorage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ye(){try{r.texStorage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ze(){try{r.texImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ae(){try{r.texImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Oe(V){be.equals(V)===!1&&(r.scissor(V.x,V.y,V.z,V.w),be.copy(V))}function Ke(V){Ne.equals(V)===!1&&(r.viewport(V.x,V.y,V.z,V.w),Ne.copy(V))}function H(V,Me){let we=d.get(Me);we===void 0&&(we=new WeakMap,d.set(Me,we));let Pe=we.get(V);Pe===void 0&&(Pe=r.getUniformBlockIndex(Me,V.name),we.set(V,Pe))}function ae(V,Me){const Pe=d.get(Me).get(V);m.get(Me)!==Pe&&(r.uniformBlockBinding(Me,Pe,V.__bindingPointIndex),m.set(Me,Pe))}function De(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},Te=null,N={},_={},S=new WeakMap,y=[],E=null,T=!1,x=null,v=null,D=null,L=null,C=null,P=null,F=null,I=new Nt(0,0,0),X=0,U=!1,R=null,k=null,J=null,ue=null,me=null,be.set(0,0,r.canvas.width,r.canvas.height),Ne.set(0,0,r.canvas.width,r.canvas.height),u.reset(),f.reset(),h.reset()}return{buffers:{color:u,depth:f,stencil:h},enable:ye,disable:Ue,bindFramebuffer:et,drawBuffers:je,useProgram:dt,setBlending:Ut,setMaterial:ut,setFlipSided:at,setCullFace:ze,setLineWidth:Ot,setPolygonOffset:We,setScissorTest:ct,activeTexture:qt,bindTexture:Xt,unbindTexture:O,compressedTexImage2D:b,compressedTexImage3D:ie,texImage2D:Ze,texImage3D:Ae,updateUBOMapping:H,uniformBlockBinding:ae,texStorage2D:Le,texStorage3D:Ye,texSubImage2D:de,texSubImage3D:Se,compressedTexSubImage2D:fe,compressedTexSubImage3D:Ge,scissor:Oe,viewport:Ke,reset:De}}function Fw(r,e,n,a,o,u,f){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new ft,g=new WeakMap;let _;const S=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(O,b){return y?new OffscreenCanvas(O,b):dc("canvas")}function T(O,b,ie){let de=1;const Se=Xt(O);if((Se.width>ie||Se.height>ie)&&(de=ie/Math.max(Se.width,Se.height)),de<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const fe=Math.floor(de*Se.width),Ge=Math.floor(de*Se.height);_===void 0&&(_=E(fe,Ge));const Le=b?E(fe,Ge):_;return Le.width=fe,Le.height=Ge,Le.getContext("2d").drawImage(O,0,0,fe,Ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Se.width+"x"+Se.height+") to ("+fe+"x"+Ge+")."),Le}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Se.width+"x"+Se.height+")."),O;return O}function x(O){return O.generateMipmaps}function v(O){r.generateMipmap(O)}function D(O){return O.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?r.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(O,b,ie,de,Se=!1){if(O!==null){if(r[O]!==void 0)return r[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let fe=b;if(b===r.RED&&(ie===r.FLOAT&&(fe=r.R32F),ie===r.HALF_FLOAT&&(fe=r.R16F),ie===r.UNSIGNED_BYTE&&(fe=r.R8)),b===r.RED_INTEGER&&(ie===r.UNSIGNED_BYTE&&(fe=r.R8UI),ie===r.UNSIGNED_SHORT&&(fe=r.R16UI),ie===r.UNSIGNED_INT&&(fe=r.R32UI),ie===r.BYTE&&(fe=r.R8I),ie===r.SHORT&&(fe=r.R16I),ie===r.INT&&(fe=r.R32I)),b===r.RG&&(ie===r.FLOAT&&(fe=r.RG32F),ie===r.HALF_FLOAT&&(fe=r.RG16F),ie===r.UNSIGNED_BYTE&&(fe=r.RG8)),b===r.RG_INTEGER&&(ie===r.UNSIGNED_BYTE&&(fe=r.RG8UI),ie===r.UNSIGNED_SHORT&&(fe=r.RG16UI),ie===r.UNSIGNED_INT&&(fe=r.RG32UI),ie===r.BYTE&&(fe=r.RG8I),ie===r.SHORT&&(fe=r.RG16I),ie===r.INT&&(fe=r.RG32I)),b===r.RGB_INTEGER&&(ie===r.UNSIGNED_BYTE&&(fe=r.RGB8UI),ie===r.UNSIGNED_SHORT&&(fe=r.RGB16UI),ie===r.UNSIGNED_INT&&(fe=r.RGB32UI),ie===r.BYTE&&(fe=r.RGB8I),ie===r.SHORT&&(fe=r.RGB16I),ie===r.INT&&(fe=r.RGB32I)),b===r.RGBA_INTEGER&&(ie===r.UNSIGNED_BYTE&&(fe=r.RGBA8UI),ie===r.UNSIGNED_SHORT&&(fe=r.RGBA16UI),ie===r.UNSIGNED_INT&&(fe=r.RGBA32UI),ie===r.BYTE&&(fe=r.RGBA8I),ie===r.SHORT&&(fe=r.RGBA16I),ie===r.INT&&(fe=r.RGBA32I)),b===r.RGB&&(ie===r.UNSIGNED_INT_5_9_9_9_REV&&(fe=r.RGB9_E5),ie===r.UNSIGNED_INT_10F_11F_11F_REV&&(fe=r.R11F_G11F_B10F)),b===r.RGBA){const Ge=Se?fc:Dt.getTransfer(de);ie===r.FLOAT&&(fe=r.RGBA32F),ie===r.HALF_FLOAT&&(fe=r.RGBA16F),ie===r.UNSIGNED_BYTE&&(fe=Ge===Gt?r.SRGB8_ALPHA8:r.RGBA8),ie===r.UNSIGNED_SHORT_4_4_4_4&&(fe=r.RGBA4),ie===r.UNSIGNED_SHORT_5_5_5_1&&(fe=r.RGB5_A1)}return(fe===r.R16F||fe===r.R32F||fe===r.RG16F||fe===r.RG32F||fe===r.RGBA16F||fe===r.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function C(O,b){let ie;return O?b===null||b===Or||b===al?ie=r.DEPTH24_STENCIL8:b===ma?ie=r.DEPTH32F_STENCIL8:b===il&&(ie=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Or||b===al?ie=r.DEPTH_COMPONENT24:b===ma?ie=r.DEPTH_COMPONENT32F:b===il&&(ie=r.DEPTH_COMPONENT16),ie}function P(O,b){return x(O)===!0||O.isFramebufferTexture&&O.minFilter!==Ai&&O.minFilter!==Ii?Math.log2(Math.max(b.width,b.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?b.mipmaps.length:1}function F(O){const b=O.target;b.removeEventListener("dispose",F),X(b),b.isVideoTexture&&g.delete(b)}function I(O){const b=O.target;b.removeEventListener("dispose",I),R(b)}function X(O){const b=a.get(O);if(b.__webglInit===void 0)return;const ie=O.source,de=S.get(ie);if(de){const Se=de[b.__cacheKey];Se.usedTimes--,Se.usedTimes===0&&U(O),Object.keys(de).length===0&&S.delete(ie)}a.remove(O)}function U(O){const b=a.get(O);r.deleteTexture(b.__webglTexture);const ie=O.source,de=S.get(ie);delete de[b.__cacheKey],f.memory.textures--}function R(O){const b=a.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),a.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(b.__webglFramebuffer[de]))for(let Se=0;Se<b.__webglFramebuffer[de].length;Se++)r.deleteFramebuffer(b.__webglFramebuffer[de][Se]);else r.deleteFramebuffer(b.__webglFramebuffer[de]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[de])}else{if(Array.isArray(b.__webglFramebuffer))for(let de=0;de<b.__webglFramebuffer.length;de++)r.deleteFramebuffer(b.__webglFramebuffer[de]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let de=0;de<b.__webglColorRenderbuffer.length;de++)b.__webglColorRenderbuffer[de]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[de]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const ie=O.textures;for(let de=0,Se=ie.length;de<Se;de++){const fe=a.get(ie[de]);fe.__webglTexture&&(r.deleteTexture(fe.__webglTexture),f.memory.textures--),a.remove(ie[de])}a.remove(O)}let k=0;function J(){k=0}function ue(){const O=k;return O>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+o.maxTextures),k+=1,O}function me(O){const b=[];return b.push(O.wrapS),b.push(O.wrapT),b.push(O.wrapR||0),b.push(O.magFilter),b.push(O.minFilter),b.push(O.anisotropy),b.push(O.internalFormat),b.push(O.format),b.push(O.type),b.push(O.generateMipmaps),b.push(O.premultiplyAlpha),b.push(O.flipY),b.push(O.unpackAlignment),b.push(O.colorSpace),b.join()}function he(O,b){const ie=a.get(O);if(O.isVideoTexture&&ct(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&ie.__version!==O.version){const de=O.image;if(de===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne(ie,O,b);return}}else O.isExternalTexture&&(ie.__webglTexture=O.sourceTexture?O.sourceTexture:null);n.bindTexture(r.TEXTURE_2D,ie.__webglTexture,r.TEXTURE0+b)}function B(O,b){const ie=a.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&ie.__version!==O.version){ne(ie,O,b);return}n.bindTexture(r.TEXTURE_2D_ARRAY,ie.__webglTexture,r.TEXTURE0+b)}function Z(O,b){const ie=a.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&ie.__version!==O.version){ne(ie,O,b);return}n.bindTexture(r.TEXTURE_3D,ie.__webglTexture,r.TEXTURE0+b)}function q(O,b){const ie=a.get(O);if(O.version>0&&ie.__version!==O.version){ye(ie,O,b);return}n.bindTexture(r.TEXTURE_CUBE_MAP,ie.__webglTexture,r.TEXTURE0+b)}const Te={[Dd]:r.REPEAT,[Dr]:r.CLAMP_TO_EDGE,[Ud]:r.MIRRORED_REPEAT},N={[Ai]:r.NEAREST,[mT]:r.NEAREST_MIPMAP_NEAREST,[Du]:r.NEAREST_MIPMAP_LINEAR,[Ii]:r.LINEAR,[Ph]:r.LINEAR_MIPMAP_NEAREST,[Ur]:r.LINEAR_MIPMAP_LINEAR},Q={[ST]:r.NEVER,[bT]:r.ALWAYS,[xT]:r.LESS,[mS]:r.LEQUAL,[yT]:r.EQUAL,[TT]:r.GEQUAL,[ET]:r.GREATER,[MT]:r.NOTEQUAL};function ve(O,b){if(b.type===ma&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Ii||b.magFilter===Ph||b.magFilter===Du||b.magFilter===Ur||b.minFilter===Ii||b.minFilter===Ph||b.minFilter===Du||b.minFilter===Ur)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(O,r.TEXTURE_WRAP_S,Te[b.wrapS]),r.texParameteri(O,r.TEXTURE_WRAP_T,Te[b.wrapT]),(O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY)&&r.texParameteri(O,r.TEXTURE_WRAP_R,Te[b.wrapR]),r.texParameteri(O,r.TEXTURE_MAG_FILTER,N[b.magFilter]),r.texParameteri(O,r.TEXTURE_MIN_FILTER,N[b.minFilter]),b.compareFunction&&(r.texParameteri(O,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(O,r.TEXTURE_COMPARE_FUNC,Q[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ai||b.minFilter!==Du&&b.minFilter!==Ur||b.type===ma&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||a.get(b).__currentAnisotropy){const ie=e.get("EXT_texture_filter_anisotropic");r.texParameterf(O,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,o.getMaxAnisotropy())),a.get(b).__currentAnisotropy=b.anisotropy}}}function be(O,b){let ie=!1;O.__webglInit===void 0&&(O.__webglInit=!0,b.addEventListener("dispose",F));const de=b.source;let Se=S.get(de);Se===void 0&&(Se={},S.set(de,Se));const fe=me(b);if(fe!==O.__cacheKey){Se[fe]===void 0&&(Se[fe]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,ie=!0),Se[fe].usedTimes++;const Ge=Se[O.__cacheKey];Ge!==void 0&&(Se[O.__cacheKey].usedTimes--,Ge.usedTimes===0&&U(b)),O.__cacheKey=fe,O.__webglTexture=Se[fe].texture}return ie}function Ne(O,b,ie){return Math.floor(Math.floor(O/ie)/b)}function Ve(O,b,ie,de){const fe=O.updateRanges;if(fe.length===0)n.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,ie,de,b.data);else{fe.sort((Ae,Oe)=>Ae.start-Oe.start);let Ge=0;for(let Ae=1;Ae<fe.length;Ae++){const Oe=fe[Ge],Ke=fe[Ae],H=Oe.start+Oe.count,ae=Ne(Ke.start,b.width,4),De=Ne(Oe.start,b.width,4);Ke.start<=H+1&&ae===De&&Ne(Ke.start+Ke.count-1,b.width,4)===ae?Oe.count=Math.max(Oe.count,Ke.start+Ke.count-Oe.start):(++Ge,fe[Ge]=Ke)}fe.length=Ge+1;const Le=r.getParameter(r.UNPACK_ROW_LENGTH),Ye=r.getParameter(r.UNPACK_SKIP_PIXELS),Ze=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let Ae=0,Oe=fe.length;Ae<Oe;Ae++){const Ke=fe[Ae],H=Math.floor(Ke.start/4),ae=Math.ceil(Ke.count/4),De=H%b.width,V=Math.floor(H/b.width),Me=ae,we=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,De),r.pixelStorei(r.UNPACK_SKIP_ROWS,V),n.texSubImage2D(r.TEXTURE_2D,0,De,V,Me,we,ie,de,b.data)}O.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Le),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ye),r.pixelStorei(r.UNPACK_SKIP_ROWS,Ze)}}function ne(O,b,ie){let de=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(de=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(de=r.TEXTURE_3D);const Se=be(O,b),fe=b.source;n.bindTexture(de,O.__webglTexture,r.TEXTURE0+ie);const Ge=a.get(fe);if(fe.version!==Ge.__version||Se===!0){n.activeTexture(r.TEXTURE0+ie);const Le=Dt.getPrimaries(Dt.workingColorSpace),Ye=b.colorSpace===Ja?null:Dt.getPrimaries(b.colorSpace),Ze=b.colorSpace===Ja||Le===Ye?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);let Ae=T(b.image,!1,o.maxTextureSize);Ae=qt(b,Ae);const Oe=u.convert(b.format,b.colorSpace),Ke=u.convert(b.type);let H=L(b.internalFormat,Oe,Ke,b.colorSpace,b.isVideoTexture);ve(de,b);let ae;const De=b.mipmaps,V=b.isVideoTexture!==!0,Me=Ge.__version===void 0||Se===!0,we=fe.dataReady,Pe=P(b,Ae);if(b.isDepthTexture)H=C(b.format===sl,b.type),Me&&(V?n.texStorage2D(r.TEXTURE_2D,1,H,Ae.width,Ae.height):n.texImage2D(r.TEXTURE_2D,0,H,Ae.width,Ae.height,0,Oe,Ke,null));else if(b.isDataTexture)if(De.length>0){V&&Me&&n.texStorage2D(r.TEXTURE_2D,Pe,H,De[0].width,De[0].height);for(let Re=0,xe=De.length;Re<xe;Re++)ae=De[Re],V?we&&n.texSubImage2D(r.TEXTURE_2D,Re,0,0,ae.width,ae.height,Oe,Ke,ae.data):n.texImage2D(r.TEXTURE_2D,Re,H,ae.width,ae.height,0,Oe,Ke,ae.data);b.generateMipmaps=!1}else V?(Me&&n.texStorage2D(r.TEXTURE_2D,Pe,H,Ae.width,Ae.height),we&&Ve(b,Ae,Oe,Ke)):n.texImage2D(r.TEXTURE_2D,0,H,Ae.width,Ae.height,0,Oe,Ke,Ae.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){V&&Me&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Pe,H,De[0].width,De[0].height,Ae.depth);for(let Re=0,xe=De.length;Re<xe;Re++)if(ae=De[Re],b.format!==bi)if(Oe!==null)if(V){if(we)if(b.layerUpdates.size>0){const He=Zv(ae.width,ae.height,b.format,b.type);for(const Je of b.layerUpdates){const At=ae.data.subarray(Je*He/ae.data.BYTES_PER_ELEMENT,(Je+1)*He/ae.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Re,0,0,Je,ae.width,ae.height,1,Oe,At)}b.clearLayerUpdates()}else n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Re,0,0,0,ae.width,ae.height,Ae.depth,Oe,ae.data)}else n.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Re,H,ae.width,ae.height,Ae.depth,0,ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?we&&n.texSubImage3D(r.TEXTURE_2D_ARRAY,Re,0,0,0,ae.width,ae.height,Ae.depth,Oe,Ke,ae.data):n.texImage3D(r.TEXTURE_2D_ARRAY,Re,H,ae.width,ae.height,Ae.depth,0,Oe,Ke,ae.data)}else{V&&Me&&n.texStorage2D(r.TEXTURE_2D,Pe,H,De[0].width,De[0].height);for(let Re=0,xe=De.length;Re<xe;Re++)ae=De[Re],b.format!==bi?Oe!==null?V?we&&n.compressedTexSubImage2D(r.TEXTURE_2D,Re,0,0,ae.width,ae.height,Oe,ae.data):n.compressedTexImage2D(r.TEXTURE_2D,Re,H,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?we&&n.texSubImage2D(r.TEXTURE_2D,Re,0,0,ae.width,ae.height,Oe,Ke,ae.data):n.texImage2D(r.TEXTURE_2D,Re,H,ae.width,ae.height,0,Oe,Ke,ae.data)}else if(b.isDataArrayTexture)if(V){if(Me&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Pe,H,Ae.width,Ae.height,Ae.depth),we)if(b.layerUpdates.size>0){const Re=Zv(Ae.width,Ae.height,b.format,b.type);for(const xe of b.layerUpdates){const He=Ae.data.subarray(xe*Re/Ae.data.BYTES_PER_ELEMENT,(xe+1)*Re/Ae.data.BYTES_PER_ELEMENT);n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,xe,Ae.width,Ae.height,1,Oe,Ke,He)}b.clearLayerUpdates()}else n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Ae.width,Ae.height,Ae.depth,Oe,Ke,Ae.data)}else n.texImage3D(r.TEXTURE_2D_ARRAY,0,H,Ae.width,Ae.height,Ae.depth,0,Oe,Ke,Ae.data);else if(b.isData3DTexture)V?(Me&&n.texStorage3D(r.TEXTURE_3D,Pe,H,Ae.width,Ae.height,Ae.depth),we&&n.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Ae.width,Ae.height,Ae.depth,Oe,Ke,Ae.data)):n.texImage3D(r.TEXTURE_3D,0,H,Ae.width,Ae.height,Ae.depth,0,Oe,Ke,Ae.data);else if(b.isFramebufferTexture){if(Me)if(V)n.texStorage2D(r.TEXTURE_2D,Pe,H,Ae.width,Ae.height);else{let Re=Ae.width,xe=Ae.height;for(let He=0;He<Pe;He++)n.texImage2D(r.TEXTURE_2D,He,H,Re,xe,0,Oe,Ke,null),Re>>=1,xe>>=1}}else if(De.length>0){if(V&&Me){const Re=Xt(De[0]);n.texStorage2D(r.TEXTURE_2D,Pe,H,Re.width,Re.height)}for(let Re=0,xe=De.length;Re<xe;Re++)ae=De[Re],V?we&&n.texSubImage2D(r.TEXTURE_2D,Re,0,0,Oe,Ke,ae):n.texImage2D(r.TEXTURE_2D,Re,H,Oe,Ke,ae);b.generateMipmaps=!1}else if(V){if(Me){const Re=Xt(Ae);n.texStorage2D(r.TEXTURE_2D,Pe,H,Re.width,Re.height)}we&&n.texSubImage2D(r.TEXTURE_2D,0,0,0,Oe,Ke,Ae)}else n.texImage2D(r.TEXTURE_2D,0,H,Oe,Ke,Ae);x(b)&&v(de),Ge.__version=fe.version,b.onUpdate&&b.onUpdate(b)}O.__version=b.version}function ye(O,b,ie){if(b.image.length!==6)return;const de=be(O,b),Se=b.source;n.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+ie);const fe=a.get(Se);if(Se.version!==fe.__version||de===!0){n.activeTexture(r.TEXTURE0+ie);const Ge=Dt.getPrimaries(Dt.workingColorSpace),Le=b.colorSpace===Ja?null:Dt.getPrimaries(b.colorSpace),Ye=b.colorSpace===Ja||Ge===Le?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);const Ze=b.isCompressedTexture||b.image[0].isCompressedTexture,Ae=b.image[0]&&b.image[0].isDataTexture,Oe=[];for(let xe=0;xe<6;xe++)!Ze&&!Ae?Oe[xe]=T(b.image[xe],!0,o.maxCubemapSize):Oe[xe]=Ae?b.image[xe].image:b.image[xe],Oe[xe]=qt(b,Oe[xe]);const Ke=Oe[0],H=u.convert(b.format,b.colorSpace),ae=u.convert(b.type),De=L(b.internalFormat,H,ae,b.colorSpace),V=b.isVideoTexture!==!0,Me=fe.__version===void 0||de===!0,we=Se.dataReady;let Pe=P(b,Ke);ve(r.TEXTURE_CUBE_MAP,b);let Re;if(Ze){V&&Me&&n.texStorage2D(r.TEXTURE_CUBE_MAP,Pe,De,Ke.width,Ke.height);for(let xe=0;xe<6;xe++){Re=Oe[xe].mipmaps;for(let He=0;He<Re.length;He++){const Je=Re[He];b.format!==bi?H!==null?V?we&&n.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,He,0,0,Je.width,Je.height,H,Je.data):n.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,He,De,Je.width,Je.height,0,Je.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?we&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,He,0,0,Je.width,Je.height,H,ae,Je.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,He,De,Je.width,Je.height,0,H,ae,Je.data)}}}else{if(Re=b.mipmaps,V&&Me){Re.length>0&&Pe++;const xe=Xt(Oe[0]);n.texStorage2D(r.TEXTURE_CUBE_MAP,Pe,De,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(Ae){V?we&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Oe[xe].width,Oe[xe].height,H,ae,Oe[xe].data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,De,Oe[xe].width,Oe[xe].height,0,H,ae,Oe[xe].data);for(let He=0;He<Re.length;He++){const At=Re[He].image[xe].image;V?we&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,He+1,0,0,At.width,At.height,H,ae,At.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,He+1,De,At.width,At.height,0,H,ae,At.data)}}else{V?we&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,H,ae,Oe[xe]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,De,H,ae,Oe[xe]);for(let He=0;He<Re.length;He++){const Je=Re[He];V?we&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,He+1,0,0,H,ae,Je.image[xe]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,He+1,De,H,ae,Je.image[xe])}}}x(b)&&v(r.TEXTURE_CUBE_MAP),fe.__version=Se.version,b.onUpdate&&b.onUpdate(b)}O.__version=b.version}function Ue(O,b,ie,de,Se,fe){const Ge=u.convert(ie.format,ie.colorSpace),Le=u.convert(ie.type),Ye=L(ie.internalFormat,Ge,Le,ie.colorSpace),Ze=a.get(b),Ae=a.get(ie);if(Ae.__renderTarget=b,!Ze.__hasExternalTextures){const Oe=Math.max(1,b.width>>fe),Ke=Math.max(1,b.height>>fe);Se===r.TEXTURE_3D||Se===r.TEXTURE_2D_ARRAY?n.texImage3D(Se,fe,Ye,Oe,Ke,b.depth,0,Ge,Le,null):n.texImage2D(Se,fe,Ye,Oe,Ke,0,Ge,Le,null)}n.bindFramebuffer(r.FRAMEBUFFER,O),We(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,de,Se,Ae.__webglTexture,0,Ot(b)):(Se===r.TEXTURE_2D||Se>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Se<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,de,Se,Ae.__webglTexture,fe),n.bindFramebuffer(r.FRAMEBUFFER,null)}function et(O,b,ie){if(r.bindRenderbuffer(r.RENDERBUFFER,O),b.depthBuffer){const de=b.depthTexture,Se=de&&de.isDepthTexture?de.type:null,fe=C(b.stencilBuffer,Se),Ge=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Le=Ot(b);We(b)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Le,fe,b.width,b.height):ie?r.renderbufferStorageMultisample(r.RENDERBUFFER,Le,fe,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,fe,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ge,r.RENDERBUFFER,O)}else{const de=b.textures;for(let Se=0;Se<de.length;Se++){const fe=de[Se],Ge=u.convert(fe.format,fe.colorSpace),Le=u.convert(fe.type),Ye=L(fe.internalFormat,Ge,Le,fe.colorSpace),Ze=Ot(b);ie&&We(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ze,Ye,b.width,b.height):We(b)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ze,Ye,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,Ye,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function je(O,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(r.FRAMEBUFFER,O),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const de=a.get(b.depthTexture);de.__renderTarget=b,(!de.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),he(b.depthTexture,0);const Se=de.__webglTexture,fe=Ot(b);if(b.depthTexture.format===rl)We(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Se,0,fe):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Se,0);else if(b.depthTexture.format===sl)We(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Se,0,fe):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Se,0);else throw new Error("Unknown depthTexture format")}function dt(O){const b=a.get(O),ie=O.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==O.depthTexture){const de=O.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),de){const Se=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,de.removeEventListener("dispose",Se)};de.addEventListener("dispose",Se),b.__depthDisposeCallback=Se}b.__boundDepthTexture=de}if(O.depthTexture&&!b.__autoAllocateDepthBuffer){if(ie)throw new Error("target.depthTexture not supported in Cube render targets");const de=O.texture.mipmaps;de&&de.length>0?je(b.__webglFramebuffer[0],O):je(b.__webglFramebuffer,O)}else if(ie){b.__webglDepthbuffer=[];for(let de=0;de<6;de++)if(n.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[de]),b.__webglDepthbuffer[de]===void 0)b.__webglDepthbuffer[de]=r.createRenderbuffer(),et(b.__webglDepthbuffer[de],O,!1);else{const Se=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,fe=b.__webglDepthbuffer[de];r.bindRenderbuffer(r.RENDERBUFFER,fe),r.framebufferRenderbuffer(r.FRAMEBUFFER,Se,r.RENDERBUFFER,fe)}}else{const de=O.texture.mipmaps;if(de&&de.length>0?n.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):n.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),et(b.__webglDepthbuffer,O,!1);else{const Se=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,fe=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,fe),r.framebufferRenderbuffer(r.FRAMEBUFFER,Se,r.RENDERBUFFER,fe)}}n.bindFramebuffer(r.FRAMEBUFFER,null)}function Qt(O,b,ie){const de=a.get(O);b!==void 0&&Ue(de.__webglFramebuffer,O,O.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),ie!==void 0&&dt(O)}function G(O){const b=O.texture,ie=a.get(O),de=a.get(b);O.addEventListener("dispose",I);const Se=O.textures,fe=O.isWebGLCubeRenderTarget===!0,Ge=Se.length>1;if(Ge||(de.__webglTexture===void 0&&(de.__webglTexture=r.createTexture()),de.__version=b.version,f.memory.textures++),fe){ie.__webglFramebuffer=[];for(let Le=0;Le<6;Le++)if(b.mipmaps&&b.mipmaps.length>0){ie.__webglFramebuffer[Le]=[];for(let Ye=0;Ye<b.mipmaps.length;Ye++)ie.__webglFramebuffer[Le][Ye]=r.createFramebuffer()}else ie.__webglFramebuffer[Le]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){ie.__webglFramebuffer=[];for(let Le=0;Le<b.mipmaps.length;Le++)ie.__webglFramebuffer[Le]=r.createFramebuffer()}else ie.__webglFramebuffer=r.createFramebuffer();if(Ge)for(let Le=0,Ye=Se.length;Le<Ye;Le++){const Ze=a.get(Se[Le]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=r.createTexture(),f.memory.textures++)}if(O.samples>0&&We(O)===!1){ie.__webglMultisampledFramebuffer=r.createFramebuffer(),ie.__webglColorRenderbuffer=[],n.bindFramebuffer(r.FRAMEBUFFER,ie.__webglMultisampledFramebuffer);for(let Le=0;Le<Se.length;Le++){const Ye=Se[Le];ie.__webglColorRenderbuffer[Le]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,ie.__webglColorRenderbuffer[Le]);const Ze=u.convert(Ye.format,Ye.colorSpace),Ae=u.convert(Ye.type),Oe=L(Ye.internalFormat,Ze,Ae,Ye.colorSpace,O.isXRRenderTarget===!0),Ke=Ot(O);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ke,Oe,O.width,O.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Le,r.RENDERBUFFER,ie.__webglColorRenderbuffer[Le])}r.bindRenderbuffer(r.RENDERBUFFER,null),O.depthBuffer&&(ie.__webglDepthRenderbuffer=r.createRenderbuffer(),et(ie.__webglDepthRenderbuffer,O,!0)),n.bindFramebuffer(r.FRAMEBUFFER,null)}}if(fe){n.bindTexture(r.TEXTURE_CUBE_MAP,de.__webglTexture),ve(r.TEXTURE_CUBE_MAP,b);for(let Le=0;Le<6;Le++)if(b.mipmaps&&b.mipmaps.length>0)for(let Ye=0;Ye<b.mipmaps.length;Ye++)Ue(ie.__webglFramebuffer[Le][Ye],O,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Ye);else Ue(ie.__webglFramebuffer[Le],O,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0);x(b)&&v(r.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ge){for(let Le=0,Ye=Se.length;Le<Ye;Le++){const Ze=Se[Le],Ae=a.get(Ze);let Oe=r.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Oe=O.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(Oe,Ae.__webglTexture),ve(Oe,Ze),Ue(ie.__webglFramebuffer,O,Ze,r.COLOR_ATTACHMENT0+Le,Oe,0),x(Ze)&&v(Oe)}n.unbindTexture()}else{let Le=r.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Le=O.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(Le,de.__webglTexture),ve(Le,b),b.mipmaps&&b.mipmaps.length>0)for(let Ye=0;Ye<b.mipmaps.length;Ye++)Ue(ie.__webglFramebuffer[Ye],O,b,r.COLOR_ATTACHMENT0,Le,Ye);else Ue(ie.__webglFramebuffer,O,b,r.COLOR_ATTACHMENT0,Le,0);x(b)&&v(Le),n.unbindTexture()}O.depthBuffer&&dt(O)}function Ut(O){const b=O.textures;for(let ie=0,de=b.length;ie<de;ie++){const Se=b[ie];if(x(Se)){const fe=D(O),Ge=a.get(Se).__webglTexture;n.bindTexture(fe,Ge),v(fe),n.unbindTexture()}}}const ut=[],at=[];function ze(O){if(O.samples>0){if(We(O)===!1){const b=O.textures,ie=O.width,de=O.height;let Se=r.COLOR_BUFFER_BIT;const fe=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ge=a.get(O),Le=b.length>1;if(Le)for(let Ze=0;Ze<b.length;Ze++)n.bindFramebuffer(r.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ze,r.RENDERBUFFER,null),n.bindFramebuffer(r.FRAMEBUFFER,Ge.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ze,r.TEXTURE_2D,null,0);n.bindFramebuffer(r.READ_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer);const Ye=O.texture.mipmaps;Ye&&Ye.length>0?n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer[0]):n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer);for(let Ze=0;Ze<b.length;Ze++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(Se|=r.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(Se|=r.STENCIL_BUFFER_BIT)),Le){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ge.__webglColorRenderbuffer[Ze]);const Ae=a.get(b[Ze]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ae,0)}r.blitFramebuffer(0,0,ie,de,0,0,ie,de,Se,r.NEAREST),m===!0&&(ut.length=0,at.length=0,ut.push(r.COLOR_ATTACHMENT0+Ze),O.depthBuffer&&O.resolveDepthBuffer===!1&&(ut.push(fe),at.push(fe),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,at)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ut))}if(n.bindFramebuffer(r.READ_FRAMEBUFFER,null),n.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Le)for(let Ze=0;Ze<b.length;Ze++){n.bindFramebuffer(r.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ze,r.RENDERBUFFER,Ge.__webglColorRenderbuffer[Ze]);const Ae=a.get(b[Ze]).__webglTexture;n.bindFramebuffer(r.FRAMEBUFFER,Ge.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ze,r.TEXTURE_2D,Ae,0)}n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&m){const b=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function Ot(O){return Math.min(o.maxSamples,O.samples)}function We(O){const b=a.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ct(O){const b=f.render.frame;g.get(O)!==b&&(g.set(O,b),O.update())}function qt(O,b){const ie=O.colorSpace,de=O.format,Se=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||ie!==Vs&&ie!==Ja&&(Dt.getTransfer(ie)===Gt?(de!==bi||Se!==ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ie)),b}function Xt(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(d.width=O.naturalWidth||O.width,d.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(d.width=O.displayWidth,d.height=O.displayHeight):(d.width=O.width,d.height=O.height),d}this.allocateTextureUnit=ue,this.resetTextureUnits=J,this.setTexture2D=he,this.setTexture2DArray=B,this.setTexture3D=Z,this.setTextureCube=q,this.rebindTextures=Qt,this.setupRenderTarget=G,this.updateRenderTargetMipmap=Ut,this.updateMultisampleRenderTarget=ze,this.setupDepthRenderbuffer=dt,this.setupFrameBufferTexture=Ue,this.useMultisampledRTT=We}function zw(r,e){function n(a,o=Ja){let u;const f=Dt.getTransfer(o);if(a===ki)return r.UNSIGNED_BYTE;if(a===yp)return r.UNSIGNED_SHORT_4_4_4_4;if(a===Ep)return r.UNSIGNED_SHORT_5_5_5_1;if(a===lS)return r.UNSIGNED_INT_5_9_9_9_REV;if(a===uS)return r.UNSIGNED_INT_10F_11F_11F_REV;if(a===sS)return r.BYTE;if(a===oS)return r.SHORT;if(a===il)return r.UNSIGNED_SHORT;if(a===xp)return r.INT;if(a===Or)return r.UNSIGNED_INT;if(a===ma)return r.FLOAT;if(a===fl)return r.HALF_FLOAT;if(a===cS)return r.ALPHA;if(a===fS)return r.RGB;if(a===bi)return r.RGBA;if(a===rl)return r.DEPTH_COMPONENT;if(a===sl)return r.DEPTH_STENCIL;if(a===hS)return r.RED;if(a===Mp)return r.RED_INTEGER;if(a===dS)return r.RG;if(a===Tp)return r.RG_INTEGER;if(a===bp)return r.RGBA_INTEGER;if(a===nc||a===ic||a===ac||a===rc)if(f===Gt)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(a===nc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===ic)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===ac)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===rc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(a===nc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===ic)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===ac)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===rc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Ld||a===Nd||a===Od||a===Pd)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(a===Ld)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Nd)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Od)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Pd)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Bd||a===Id||a===Fd)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(a===Bd||a===Id)return f===Gt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(a===Fd)return f===Gt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===zd||a===Hd||a===Gd||a===Vd||a===kd||a===Xd||a===Wd||a===qd||a===Yd||a===jd||a===Zd||a===Kd||a===Qd||a===Jd)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(a===zd)return f===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Hd)return f===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Gd)return f===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Vd)return f===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===kd)return f===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Xd)return f===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Wd)return f===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===qd)return f===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Yd)return f===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===jd)return f===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Zd)return f===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Kd)return f===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Qd)return f===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Jd)return f===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===$d||a===ep||a===tp)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(a===$d)return f===Gt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===ep)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===tp)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===np||a===ip||a===ap||a===rp)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(a===np)return u.COMPRESSED_RED_RGTC1_EXT;if(a===ip)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===ap)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===rp)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===al?r.UNSIGNED_INT_24_8:r[a]!==void 0?r[a]:null}return{convert:n}}const Hw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Gw=`
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

}`;class Vw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const a=new wS(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,a=new nr({vertexShader:Hw,fragmentShader:Gw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new zi(new vc(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class kw extends Ys{constructor(e,n){super();const a=this;let o=null,u=1,f=null,h="local-floor",m=1,d=null,g=null,_=null,S=null,y=null,E=null;const T=typeof XRWebGLBinding<"u",x=new Vw,v={},D=n.getContextAttributes();let L=null,C=null;const P=[],F=[],I=new ft;let X=null;const U=new Vn;U.viewport=new rn;const R=new Vn;R.viewport=new rn;const k=[U,R],J=new cb;let ue=null,me=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let ye=P[ne];return ye===void 0&&(ye=new ad,P[ne]=ye),ye.getTargetRaySpace()},this.getControllerGrip=function(ne){let ye=P[ne];return ye===void 0&&(ye=new ad,P[ne]=ye),ye.getGripSpace()},this.getHand=function(ne){let ye=P[ne];return ye===void 0&&(ye=new ad,P[ne]=ye),ye.getHandSpace()};function he(ne){const ye=F.indexOf(ne.inputSource);if(ye===-1)return;const Ue=P[ye];Ue!==void 0&&(Ue.update(ne.inputSource,ne.frame,d||f),Ue.dispatchEvent({type:ne.type,data:ne.inputSource}))}function B(){o.removeEventListener("select",he),o.removeEventListener("selectstart",he),o.removeEventListener("selectend",he),o.removeEventListener("squeeze",he),o.removeEventListener("squeezestart",he),o.removeEventListener("squeezeend",he),o.removeEventListener("end",B),o.removeEventListener("inputsourceschange",Z);for(let ne=0;ne<P.length;ne++){const ye=F[ne];ye!==null&&(F[ne]=null,P[ne].disconnect(ye))}ue=null,me=null,x.reset();for(const ne in v)delete v[ne];e.setRenderTarget(L),y=null,S=null,_=null,o=null,C=null,Ve.stop(),a.isPresenting=!1,e.setPixelRatio(X),e.setSize(I.width,I.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){u=ne,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){h=ne,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||f},this.setReferenceSpace=function(ne){d=ne},this.getBaseLayer=function(){return S!==null?S:y},this.getBinding=function(){return _===null&&T&&(_=new XRWebGLBinding(o,n)),_},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(ne){if(o=ne,o!==null){if(L=e.getRenderTarget(),o.addEventListener("select",he),o.addEventListener("selectstart",he),o.addEventListener("selectend",he),o.addEventListener("squeeze",he),o.addEventListener("squeezestart",he),o.addEventListener("squeezeend",he),o.addEventListener("end",B),o.addEventListener("inputsourceschange",Z),D.xrCompatible!==!0&&await n.makeXRCompatible(),X=e.getPixelRatio(),e.getSize(I),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ue=null,et=null,je=null;D.depth&&(je=D.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Ue=D.stencil?sl:rl,et=D.stencil?al:Or);const dt={colorFormat:n.RGBA8,depthFormat:je,scaleFactor:u};_=this.getBinding(),S=_.createProjectionLayer(dt),o.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),C=new Br(S.textureWidth,S.textureHeight,{format:bi,type:ki,depthTexture:new RS(S.textureWidth,S.textureHeight,et,void 0,void 0,void 0,void 0,void 0,void 0,Ue),stencilBuffer:D.stencil,colorSpace:e.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const Ue={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:u};y=new XRWebGLLayer(o,n,Ue),o.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),C=new Br(y.framebufferWidth,y.framebufferHeight,{format:bi,type:ki,colorSpace:e.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(m),d=null,f=await o.requestReferenceSpace(h),Ve.setContext(o),Ve.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Z(ne){for(let ye=0;ye<ne.removed.length;ye++){const Ue=ne.removed[ye],et=F.indexOf(Ue);et>=0&&(F[et]=null,P[et].disconnect(Ue))}for(let ye=0;ye<ne.added.length;ye++){const Ue=ne.added[ye];let et=F.indexOf(Ue);if(et===-1){for(let dt=0;dt<P.length;dt++)if(dt>=F.length){F.push(Ue),et=dt;break}else if(F[dt]===null){F[dt]=Ue,et=dt;break}if(et===-1)break}const je=P[et];je&&je.connect(Ue)}}const q=new ee,Te=new ee;function N(ne,ye,Ue){q.setFromMatrixPosition(ye.matrixWorld),Te.setFromMatrixPosition(Ue.matrixWorld);const et=q.distanceTo(Te),je=ye.projectionMatrix.elements,dt=Ue.projectionMatrix.elements,Qt=je[14]/(je[10]-1),G=je[14]/(je[10]+1),Ut=(je[9]+1)/je[5],ut=(je[9]-1)/je[5],at=(je[8]-1)/je[0],ze=(dt[8]+1)/dt[0],Ot=Qt*at,We=Qt*ze,ct=et/(-at+ze),qt=ct*-at;if(ye.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(qt),ne.translateZ(ct),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),je[10]===-1)ne.projectionMatrix.copy(ye.projectionMatrix),ne.projectionMatrixInverse.copy(ye.projectionMatrixInverse);else{const Xt=Qt+ct,O=G+ct,b=Ot-qt,ie=We+(et-qt),de=Ut*G/O*Xt,Se=ut*G/O*Xt;ne.projectionMatrix.makePerspective(b,ie,de,Se,Xt,O),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function Q(ne,ye){ye===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(ye.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(o===null)return;let ye=ne.near,Ue=ne.far;x.texture!==null&&(x.depthNear>0&&(ye=x.depthNear),x.depthFar>0&&(Ue=x.depthFar)),J.near=R.near=U.near=ye,J.far=R.far=U.far=Ue,(ue!==J.near||me!==J.far)&&(o.updateRenderState({depthNear:J.near,depthFar:J.far}),ue=J.near,me=J.far),J.layers.mask=ne.layers.mask|6,U.layers.mask=J.layers.mask&3,R.layers.mask=J.layers.mask&5;const et=ne.parent,je=J.cameras;Q(J,et);for(let dt=0;dt<je.length;dt++)Q(je[dt],et);je.length===2?N(J,U,R):J.projectionMatrix.copy(U.projectionMatrix),ve(ne,J,et)};function ve(ne,ye,Ue){Ue===null?ne.matrix.copy(ye.matrixWorld):(ne.matrix.copy(Ue.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(ye.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(ye.projectionMatrix),ne.projectionMatrixInverse.copy(ye.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=sp*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(S===null&&y===null))return m},this.setFoveation=function(ne){m=ne,S!==null&&(S.fixedFoveation=ne),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=ne)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(J)},this.getCameraTexture=function(ne){return v[ne]};let be=null;function Ne(ne,ye){if(g=ye.getViewerPose(d||f),E=ye,g!==null){const Ue=g.views;y!==null&&(e.setRenderTargetFramebuffer(C,y.framebuffer),e.setRenderTarget(C));let et=!1;Ue.length!==J.cameras.length&&(J.cameras.length=0,et=!0);for(let G=0;G<Ue.length;G++){const Ut=Ue[G];let ut=null;if(y!==null)ut=y.getViewport(Ut);else{const ze=_.getViewSubImage(S,Ut);ut=ze.viewport,G===0&&(e.setRenderTargetTextures(C,ze.colorTexture,ze.depthStencilTexture),e.setRenderTarget(C))}let at=k[G];at===void 0&&(at=new Vn,at.layers.enable(G),at.viewport=new rn,k[G]=at),at.matrix.fromArray(Ut.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(Ut.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(ut.x,ut.y,ut.width,ut.height),G===0&&(J.matrix.copy(at.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),et===!0&&J.cameras.push(at)}const je=o.enabledFeatures;if(je&&je.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&T){_=a.getBinding();const G=_.getDepthInformation(Ue[0]);G&&G.isValid&&G.texture&&x.init(G,o.renderState)}if(je&&je.includes("camera-access")&&T){e.state.unbindTexture(),_=a.getBinding();for(let G=0;G<Ue.length;G++){const Ut=Ue[G].camera;if(Ut){let ut=v[Ut];ut||(ut=new wS,v[Ut]=ut);const at=_.getCameraImage(Ut);ut.sourceTexture=at}}}}for(let Ue=0;Ue<P.length;Ue++){const et=F[Ue],je=P[Ue];et!==null&&je!==void 0&&je.update(et,ye,d||f)}be&&be(ne,ye),ye.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:ye}),E=null}const Ve=new CS;Ve.setAnimationLoop(Ne),this.setAnimationLoop=function(ne){be=ne},this.dispose=function(){}}}const Ar=new Xi,Xw=new un;function Ww(r,e){function n(x,v){x.matrixAutoUpdate===!0&&x.updateMatrix(),v.value.copy(x.matrix)}function a(x,v){v.color.getRGB(x.fogColor.value,TS(r)),v.isFog?(x.fogNear.value=v.near,x.fogFar.value=v.far):v.isFogExp2&&(x.fogDensity.value=v.density)}function o(x,v,D,L,C){v.isMeshBasicMaterial||v.isMeshLambertMaterial?u(x,v):v.isMeshToonMaterial?(u(x,v),_(x,v)):v.isMeshPhongMaterial?(u(x,v),g(x,v)):v.isMeshStandardMaterial?(u(x,v),S(x,v),v.isMeshPhysicalMaterial&&y(x,v,C)):v.isMeshMatcapMaterial?(u(x,v),E(x,v)):v.isMeshDepthMaterial?u(x,v):v.isMeshDistanceMaterial?(u(x,v),T(x,v)):v.isMeshNormalMaterial?u(x,v):v.isLineBasicMaterial?(f(x,v),v.isLineDashedMaterial&&h(x,v)):v.isPointsMaterial?m(x,v,D,L):v.isSpriteMaterial?d(x,v):v.isShadowMaterial?(x.color.value.copy(v.color),x.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function u(x,v){x.opacity.value=v.opacity,v.color&&x.diffuse.value.copy(v.color),v.emissive&&x.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(x.map.value=v.map,n(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,n(v.alphaMap,x.alphaMapTransform)),v.bumpMap&&(x.bumpMap.value=v.bumpMap,n(v.bumpMap,x.bumpMapTransform),x.bumpScale.value=v.bumpScale,v.side===Zn&&(x.bumpScale.value*=-1)),v.normalMap&&(x.normalMap.value=v.normalMap,n(v.normalMap,x.normalMapTransform),x.normalScale.value.copy(v.normalScale),v.side===Zn&&x.normalScale.value.negate()),v.displacementMap&&(x.displacementMap.value=v.displacementMap,n(v.displacementMap,x.displacementMapTransform),x.displacementScale.value=v.displacementScale,x.displacementBias.value=v.displacementBias),v.emissiveMap&&(x.emissiveMap.value=v.emissiveMap,n(v.emissiveMap,x.emissiveMapTransform)),v.specularMap&&(x.specularMap.value=v.specularMap,n(v.specularMap,x.specularMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest);const D=e.get(v),L=D.envMap,C=D.envMapRotation;L&&(x.envMap.value=L,Ar.copy(C),Ar.x*=-1,Ar.y*=-1,Ar.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Ar.y*=-1,Ar.z*=-1),x.envMapRotation.value.setFromMatrix4(Xw.makeRotationFromEuler(Ar)),x.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=v.reflectivity,x.ior.value=v.ior,x.refractionRatio.value=v.refractionRatio),v.lightMap&&(x.lightMap.value=v.lightMap,x.lightMapIntensity.value=v.lightMapIntensity,n(v.lightMap,x.lightMapTransform)),v.aoMap&&(x.aoMap.value=v.aoMap,x.aoMapIntensity.value=v.aoMapIntensity,n(v.aoMap,x.aoMapTransform))}function f(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,v.map&&(x.map.value=v.map,n(v.map,x.mapTransform))}function h(x,v){x.dashSize.value=v.dashSize,x.totalSize.value=v.dashSize+v.gapSize,x.scale.value=v.scale}function m(x,v,D,L){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.size.value=v.size*D,x.scale.value=L*.5,v.map&&(x.map.value=v.map,n(v.map,x.uvTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,n(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function d(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.rotation.value=v.rotation,v.map&&(x.map.value=v.map,n(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,n(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function g(x,v){x.specular.value.copy(v.specular),x.shininess.value=Math.max(v.shininess,1e-4)}function _(x,v){v.gradientMap&&(x.gradientMap.value=v.gradientMap)}function S(x,v){x.metalness.value=v.metalness,v.metalnessMap&&(x.metalnessMap.value=v.metalnessMap,n(v.metalnessMap,x.metalnessMapTransform)),x.roughness.value=v.roughness,v.roughnessMap&&(x.roughnessMap.value=v.roughnessMap,n(v.roughnessMap,x.roughnessMapTransform)),v.envMap&&(x.envMapIntensity.value=v.envMapIntensity)}function y(x,v,D){x.ior.value=v.ior,v.sheen>0&&(x.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),x.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(x.sheenColorMap.value=v.sheenColorMap,n(v.sheenColorMap,x.sheenColorMapTransform)),v.sheenRoughnessMap&&(x.sheenRoughnessMap.value=v.sheenRoughnessMap,n(v.sheenRoughnessMap,x.sheenRoughnessMapTransform))),v.clearcoat>0&&(x.clearcoat.value=v.clearcoat,x.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(x.clearcoatMap.value=v.clearcoatMap,n(v.clearcoatMap,x.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,n(v.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(x.clearcoatNormalMap.value=v.clearcoatNormalMap,n(v.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Zn&&x.clearcoatNormalScale.value.negate())),v.dispersion>0&&(x.dispersion.value=v.dispersion),v.iridescence>0&&(x.iridescence.value=v.iridescence,x.iridescenceIOR.value=v.iridescenceIOR,x.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(x.iridescenceMap.value=v.iridescenceMap,n(v.iridescenceMap,x.iridescenceMapTransform)),v.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=v.iridescenceThicknessMap,n(v.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),v.transmission>0&&(x.transmission.value=v.transmission,x.transmissionSamplerMap.value=D.texture,x.transmissionSamplerSize.value.set(D.width,D.height),v.transmissionMap&&(x.transmissionMap.value=v.transmissionMap,n(v.transmissionMap,x.transmissionMapTransform)),x.thickness.value=v.thickness,v.thicknessMap&&(x.thicknessMap.value=v.thicknessMap,n(v.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=v.attenuationDistance,x.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(x.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(x.anisotropyMap.value=v.anisotropyMap,n(v.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=v.specularIntensity,x.specularColor.value.copy(v.specularColor),v.specularColorMap&&(x.specularColorMap.value=v.specularColorMap,n(v.specularColorMap,x.specularColorMapTransform)),v.specularIntensityMap&&(x.specularIntensityMap.value=v.specularIntensityMap,n(v.specularIntensityMap,x.specularIntensityMapTransform))}function E(x,v){v.matcap&&(x.matcap.value=v.matcap)}function T(x,v){const D=e.get(v).light;x.referencePosition.value.setFromMatrixPosition(D.matrixWorld),x.nearDistance.value=D.shadow.camera.near,x.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:o}}function qw(r,e,n,a){let o={},u={},f=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(D,L){const C=L.program;a.uniformBlockBinding(D,C)}function d(D,L){let C=o[D.id];C===void 0&&(E(D),C=g(D),o[D.id]=C,D.addEventListener("dispose",x));const P=L.program;a.updateUBOMapping(D,P);const F=e.render.frame;u[D.id]!==F&&(S(D),u[D.id]=F)}function g(D){const L=_();D.__bindingPointIndex=L;const C=r.createBuffer(),P=D.__size,F=D.usage;return r.bindBuffer(r.UNIFORM_BUFFER,C),r.bufferData(r.UNIFORM_BUFFER,P,F),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,C),C}function _(){for(let D=0;D<h;D++)if(f.indexOf(D)===-1)return f.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(D){const L=o[D.id],C=D.uniforms,P=D.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let F=0,I=C.length;F<I;F++){const X=Array.isArray(C[F])?C[F]:[C[F]];for(let U=0,R=X.length;U<R;U++){const k=X[U];if(y(k,F,U,P)===!0){const J=k.__offset,ue=Array.isArray(k.value)?k.value:[k.value];let me=0;for(let he=0;he<ue.length;he++){const B=ue[he],Z=T(B);typeof B=="number"||typeof B=="boolean"?(k.__data[0]=B,r.bufferSubData(r.UNIFORM_BUFFER,J+me,k.__data)):B.isMatrix3?(k.__data[0]=B.elements[0],k.__data[1]=B.elements[1],k.__data[2]=B.elements[2],k.__data[3]=0,k.__data[4]=B.elements[3],k.__data[5]=B.elements[4],k.__data[6]=B.elements[5],k.__data[7]=0,k.__data[8]=B.elements[6],k.__data[9]=B.elements[7],k.__data[10]=B.elements[8],k.__data[11]=0):(B.toArray(k.__data,me),me+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,J,k.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(D,L,C,P){const F=D.value,I=L+"_"+C;if(P[I]===void 0)return typeof F=="number"||typeof F=="boolean"?P[I]=F:P[I]=F.clone(),!0;{const X=P[I];if(typeof F=="number"||typeof F=="boolean"){if(X!==F)return P[I]=F,!0}else if(X.equals(F)===!1)return X.copy(F),!0}return!1}function E(D){const L=D.uniforms;let C=0;const P=16;for(let I=0,X=L.length;I<X;I++){const U=Array.isArray(L[I])?L[I]:[L[I]];for(let R=0,k=U.length;R<k;R++){const J=U[R],ue=Array.isArray(J.value)?J.value:[J.value];for(let me=0,he=ue.length;me<he;me++){const B=ue[me],Z=T(B),q=C%P,Te=q%Z.boundary,N=q+Te;C+=Te,N!==0&&P-N<Z.storage&&(C+=P-N),J.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=C,C+=Z.storage}}}const F=C%P;return F>0&&(C+=P-F),D.__size=C,D.__cache={},this}function T(D){const L={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(L.boundary=4,L.storage=4):D.isVector2?(L.boundary=8,L.storage=8):D.isVector3||D.isColor?(L.boundary=16,L.storage=12):D.isVector4?(L.boundary=16,L.storage=16):D.isMatrix3?(L.boundary=48,L.storage=48):D.isMatrix4?(L.boundary=64,L.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),L}function x(D){const L=D.target;L.removeEventListener("dispose",x);const C=f.indexOf(L.__bindingPointIndex);f.splice(C,1),r.deleteBuffer(o[L.id]),delete o[L.id],delete u[L.id]}function v(){for(const D in o)r.deleteBuffer(o[D]);f=[],o={},u={}}return{bind:m,update:d,dispose:v}}class Yw{constructor(e={}){const{canvas:n=RT(),context:a=null,depth:o=!0,stencil:u=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:d=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:S=!1}=e;this.isWebGLRenderer=!0;let y;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=a.getContextAttributes().alpha}else y=f;const E=new Uint32Array(4),T=new Int32Array(4);let x=null,v=null;const D=[],L=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=er,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let P=!1;this._outputColorSpace=gi;let F=0,I=0,X=null,U=-1,R=null;const k=new rn,J=new rn;let ue=null;const me=new Nt(0);let he=0,B=n.width,Z=n.height,q=1,Te=null,N=null;const Q=new rn(0,0,B,Z),ve=new rn(0,0,B,Z);let be=!1;const Ne=new wp;let Ve=!1,ne=!1;const ye=new un,Ue=new ee,et=new rn,je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let dt=!1;function Qt(){return X===null?q:1}let G=a;function Ut(w,Y){return n.getContext(w,Y)}try{const w={alpha:!0,depth:o,stencil:u,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:d,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Sp}`),n.addEventListener("webglcontextlost",we,!1),n.addEventListener("webglcontextrestored",Pe,!1),n.addEventListener("webglcontextcreationerror",Re,!1),G===null){const Y="webgl2";if(G=Ut(Y,w),G===null)throw Ut(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ut,at,ze,Ot,We,ct,qt,Xt,O,b,ie,de,Se,fe,Ge,Le,Ye,Ze,Ae,Oe,Ke,H,ae,De;function V(){ut=new iR(G),ut.init(),H=new zw(G,ut),at=new K1(G,ut,e,H),ze=new Iw(G,ut),at.reversedDepthBuffer&&S&&ze.buffers.depth.setReversed(!0),Ot=new sR(G),We=new Tw,ct=new Fw(G,ut,ze,We,at,H,Ot),qt=new J1(C),Xt=new nR(C),O=new hb(G),ae=new j1(G,O),b=new aR(G,O,Ot,ae),ie=new lR(G,b,O,Ot),Ae=new oR(G,at,ct),Le=new Q1(We),de=new Mw(C,qt,Xt,ut,at,ae,Le),Se=new Ww(C,We),fe=new Aw,Ge=new Lw(ut),Ze=new Y1(C,qt,Xt,ze,ie,y,m),Ye=new Pw(C,ie,at),De=new qw(G,Ot,at,ze),Oe=new Z1(G,ut,Ot),Ke=new rR(G,ut,Ot),Ot.programs=de.programs,C.capabilities=at,C.extensions=ut,C.properties=We,C.renderLists=fe,C.shadowMap=Ye,C.state=ze,C.info=Ot}V();const Me=new kw(C,G);this.xr=Me,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const w=ut.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ut.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(w){w!==void 0&&(q=w,this.setSize(B,Z,!1))},this.getSize=function(w){return w.set(B,Z)},this.setSize=function(w,Y,oe=!0){if(Me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=w,Z=Y,n.width=Math.floor(w*q),n.height=Math.floor(Y*q),oe===!0&&(n.style.width=w+"px",n.style.height=Y+"px"),this.setViewport(0,0,w,Y)},this.getDrawingBufferSize=function(w){return w.set(B*q,Z*q).floor()},this.setDrawingBufferSize=function(w,Y,oe){B=w,Z=Y,q=oe,n.width=Math.floor(w*oe),n.height=Math.floor(Y*oe),this.setViewport(0,0,w,Y)},this.getCurrentViewport=function(w){return w.copy(k)},this.getViewport=function(w){return w.copy(Q)},this.setViewport=function(w,Y,oe,ce){w.isVector4?Q.set(w.x,w.y,w.z,w.w):Q.set(w,Y,oe,ce),ze.viewport(k.copy(Q).multiplyScalar(q).round())},this.getScissor=function(w){return w.copy(ve)},this.setScissor=function(w,Y,oe,ce){w.isVector4?ve.set(w.x,w.y,w.z,w.w):ve.set(w,Y,oe,ce),ze.scissor(J.copy(ve).multiplyScalar(q).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(w){ze.setScissorTest(be=w)},this.setOpaqueSort=function(w){Te=w},this.setTransparentSort=function(w){N=w},this.getClearColor=function(w){return w.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor(...arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha(...arguments)},this.clear=function(w=!0,Y=!0,oe=!0){let ce=0;if(w){let K=!1;if(X!==null){const Ce=X.texture.format;K=Ce===bp||Ce===Tp||Ce===Mp}if(K){const Ce=X.texture.type,Be=Ce===ki||Ce===Or||Ce===il||Ce===al||Ce===yp||Ce===Ep,Xe=Ze.getClearColor(),Ie=Ze.getClearAlpha(),nt=Xe.r,st=Xe.g,Qe=Xe.b;Be?(E[0]=nt,E[1]=st,E[2]=Qe,E[3]=Ie,G.clearBufferuiv(G.COLOR,0,E)):(T[0]=nt,T[1]=st,T[2]=Qe,T[3]=Ie,G.clearBufferiv(G.COLOR,0,T))}else ce|=G.COLOR_BUFFER_BIT}Y&&(ce|=G.DEPTH_BUFFER_BIT),oe&&(ce|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(ce)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",we,!1),n.removeEventListener("webglcontextrestored",Pe,!1),n.removeEventListener("webglcontextcreationerror",Re,!1),Ze.dispose(),fe.dispose(),Ge.dispose(),We.dispose(),qt.dispose(),Xt.dispose(),ie.dispose(),ae.dispose(),De.dispose(),de.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",jt),Me.removeEventListener("sessionend",pn),en.stop()};function we(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function Pe(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const w=Ot.autoReset,Y=Ye.enabled,oe=Ye.autoUpdate,ce=Ye.needsUpdate,K=Ye.type;V(),Ot.autoReset=w,Ye.enabled=Y,Ye.autoUpdate=oe,Ye.needsUpdate=ce,Ye.type=K}function Re(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function xe(w){const Y=w.target;Y.removeEventListener("dispose",xe),He(Y)}function He(w){Je(w),We.remove(w)}function Je(w){const Y=We.get(w).programs;Y!==void 0&&(Y.forEach(function(oe){de.releaseProgram(oe)}),w.isShaderMaterial&&de.releaseShaderCache(w))}this.renderBufferDirect=function(w,Y,oe,ce,K,Ce){Y===null&&(Y=je);const Be=K.isMesh&&K.matrixWorld.determinant()<0,Xe=xa(w,Y,oe,ce,K);ze.setMaterial(ce,Be);let Ie=oe.index,nt=1;if(ce.wireframe===!0){if(Ie=b.getWireframeAttribute(oe),Ie===void 0)return;nt=2}const st=oe.drawRange,Qe=oe.attributes.position;let gt=st.start*nt,wt=(st.start+st.count)*nt;Ce!==null&&(gt=Math.max(gt,Ce.start*nt),wt=Math.min(wt,(Ce.start+Ce.count)*nt)),Ie!==null?(gt=Math.max(gt,0),wt=Math.min(wt,Ie.count)):Qe!=null&&(gt=Math.max(gt,0),wt=Math.min(wt,Qe.count));const Zt=wt-gt;if(Zt<0||Zt===1/0)return;ae.setup(K,ce,Xe,oe,Ie);let It,_t=Oe;if(Ie!==null&&(It=O.get(Ie),_t=Ke,_t.setIndex(It)),K.isMesh)ce.wireframe===!0?(ze.setLineWidth(ce.wireframeLinewidth*Qt()),_t.setMode(G.LINES)):_t.setMode(G.TRIANGLES);else if(K.isLine){let tt=ce.linewidth;tt===void 0&&(tt=1),ze.setLineWidth(tt*Qt()),K.isLineSegments?_t.setMode(G.LINES):K.isLineLoop?_t.setMode(G.LINE_LOOP):_t.setMode(G.LINE_STRIP)}else K.isPoints?_t.setMode(G.POINTS):K.isSprite&&_t.setMode(G.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)ol("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),_t.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(ut.get("WEBGL_multi_draw"))_t.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const tt=K._multiDrawStarts,Yt=K._multiDrawCounts,Et=K._multiDrawCount,Dn=Ie?O.get(Ie).bytesPerElement:1,_i=We.get(ce).currentProgram.getUniforms();for(let Fn=0;Fn<Et;Fn++)_i.setValue(G,"_gl_DrawID",Fn),_t.render(tt[Fn]/Dn,Yt[Fn])}else if(K.isInstancedMesh)_t.renderInstances(gt,Zt,K.count);else if(oe.isInstancedBufferGeometry){const tt=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,Yt=Math.min(oe.instanceCount,tt);_t.renderInstances(gt,Zt,Yt)}else _t.render(gt,Zt)};function At(w,Y,oe){w.transparent===!0&&w.side===pa&&w.forceSinglePass===!1?(w.side=Zn,w.needsUpdate=!0,Ci(w,Y,oe),w.side=tr,w.needsUpdate=!0,Ci(w,Y,oe),w.side=pa):Ci(w,Y,oe)}this.compile=function(w,Y,oe=null){oe===null&&(oe=w),v=Ge.get(oe),v.init(Y),L.push(v),oe.traverseVisible(function(K){K.isLight&&K.layers.test(Y.layers)&&(v.pushLight(K),K.castShadow&&v.pushShadow(K))}),w!==oe&&w.traverseVisible(function(K){K.isLight&&K.layers.test(Y.layers)&&(v.pushLight(K),K.castShadow&&v.pushShadow(K))}),v.setupLights();const ce=new Set;return w.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Ce=K.material;if(Ce)if(Array.isArray(Ce))for(let Be=0;Be<Ce.length;Be++){const Xe=Ce[Be];At(Xe,oe,K),ce.add(Xe)}else At(Ce,oe,K),ce.add(Ce)}),v=L.pop(),ce},this.compileAsync=function(w,Y,oe=null){const ce=this.compile(w,Y,oe);return new Promise(K=>{function Ce(){if(ce.forEach(function(Be){We.get(Be).currentProgram.isReady()&&ce.delete(Be)}),ce.size===0){K(w);return}setTimeout(Ce,10)}ut.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let St=null;function Tn(w){St&&St(w)}function jt(){en.stop()}function pn(){en.start()}const en=new CS;en.setAnimationLoop(Tn),typeof self<"u"&&en.setContext(self),this.setAnimationLoop=function(w){St=w,Me.setAnimationLoop(w),w===null?en.stop():en.start()},Me.addEventListener("sessionstart",jt),Me.addEventListener("sessionend",pn),this.render=function(w,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(Y),Y=Me.getCamera()),w.isScene===!0&&w.onBeforeRender(C,w,Y,X),v=Ge.get(w,L.length),v.init(Y),L.push(v),ye.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Ne.setFromProjectionMatrix(ye,Fi,Y.reversedDepth),ne=this.localClippingEnabled,Ve=Le.init(this.clippingPlanes,ne),x=fe.get(w,D.length),x.init(),D.push(x),Me.enabled===!0&&Me.isPresenting===!0){const Ce=C.xr.getDepthSensingMesh();Ce!==null&&wi(Ce,Y,-1/0,C.sortObjects)}wi(w,Y,0,C.sortObjects),x.finish(),C.sortObjects===!0&&x.sort(Te,N),dt=Me.enabled===!1||Me.isPresenting===!1||Me.hasDepthSensing()===!1,dt&&Ze.addToRenderList(x,w),this.info.render.frame++,Ve===!0&&Le.beginShadows();const oe=v.state.shadowsArray;Ye.render(oe,w,Y),Ve===!0&&Le.endShadows(),this.info.autoReset===!0&&this.info.reset();const ce=x.opaque,K=x.transmissive;if(v.setupLights(),Y.isArrayCamera){const Ce=Y.cameras;if(K.length>0)for(let Be=0,Xe=Ce.length;Be<Xe;Be++){const Ie=Ce[Be];xl(ce,K,w,Ie)}dt&&Ze.render(w);for(let Be=0,Xe=Ce.length;Be<Xe;Be++){const Ie=Ce[Be];zr(x,w,Ie,Ie.viewport)}}else K.length>0&&xl(ce,K,w,Y),dt&&Ze.render(w),zr(x,w,Y);X!==null&&I===0&&(ct.updateMultisampleRenderTarget(X),ct.updateRenderTargetMipmap(X)),w.isScene===!0&&w.onAfterRender(C,w,Y),ae.resetDefaultState(),U=-1,R=null,L.pop(),L.length>0?(v=L[L.length-1],Ve===!0&&Le.setGlobalState(C.clippingPlanes,v.state.camera)):v=null,D.pop(),D.length>0?x=D[D.length-1]:x=null};function wi(w,Y,oe,ce){if(w.visible===!1)return;if(w.layers.test(Y.layers)){if(w.isGroup)oe=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(Y);else if(w.isLight)v.pushLight(w),w.castShadow&&v.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Ne.intersectsSprite(w)){ce&&et.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ye);const Be=ie.update(w),Xe=w.material;Xe.visible&&x.push(w,Be,Xe,oe,et.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Ne.intersectsObject(w))){const Be=ie.update(w),Xe=w.material;if(ce&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),et.copy(w.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),et.copy(Be.boundingSphere.center)),et.applyMatrix4(w.matrixWorld).applyMatrix4(ye)),Array.isArray(Xe)){const Ie=Be.groups;for(let nt=0,st=Ie.length;nt<st;nt++){const Qe=Ie[nt],gt=Xe[Qe.materialIndex];gt&&gt.visible&&x.push(w,Be,gt,oe,et.z,Qe)}}else Xe.visible&&x.push(w,Be,Xe,oe,et.z,null)}}const Ce=w.children;for(let Be=0,Xe=Ce.length;Be<Xe;Be++)wi(Ce[Be],Y,oe,ce)}function zr(w,Y,oe,ce){const K=w.opaque,Ce=w.transmissive,Be=w.transparent;v.setupLightsView(oe),Ve===!0&&Le.setGlobalState(C.clippingPlanes,oe),ce&&ze.viewport(k.copy(ce)),K.length>0&&Hr(K,Y,oe),Ce.length>0&&Hr(Ce,Y,oe),Be.length>0&&Hr(Be,Y,oe),ze.buffers.depth.setTest(!0),ze.buffers.depth.setMask(!0),ze.buffers.color.setMask(!0),ze.setPolygonOffset(!1)}function xl(w,Y,oe,ce){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[ce.id]===void 0&&(v.state.transmissionRenderTarget[ce.id]=new Br(1,1,{generateMipmaps:!0,type:ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float")?fl:ki,minFilter:Ur,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Dt.workingColorSpace}));const Ce=v.state.transmissionRenderTarget[ce.id],Be=ce.viewport||k;Ce.setSize(Be.z*C.transmissionResolutionScale,Be.w*C.transmissionResolutionScale);const Xe=C.getRenderTarget(),Ie=C.getActiveCubeFace(),nt=C.getActiveMipmapLevel();C.setRenderTarget(Ce),C.getClearColor(me),he=C.getClearAlpha(),he<1&&C.setClearColor(16777215,.5),C.clear(),dt&&Ze.render(oe);const st=C.toneMapping;C.toneMapping=er;const Qe=ce.viewport;if(ce.viewport!==void 0&&(ce.viewport=void 0),v.setupLightsView(ce),Ve===!0&&Le.setGlobalState(C.clippingPlanes,ce),Hr(w,oe,ce),ct.updateMultisampleRenderTarget(Ce),ct.updateRenderTargetMipmap(Ce),ut.has("WEBGL_multisampled_render_to_texture")===!1){let gt=!1;for(let wt=0,Zt=Y.length;wt<Zt;wt++){const It=Y[wt],_t=It.object,tt=It.geometry,Yt=It.material,Et=It.group;if(Yt.side===pa&&_t.layers.test(ce.layers)){const Dn=Yt.side;Yt.side=Zn,Yt.needsUpdate=!0,Qs(_t,oe,ce,tt,Yt,Et),Yt.side=Dn,Yt.needsUpdate=!0,gt=!0}}gt===!0&&(ct.updateMultisampleRenderTarget(Ce),ct.updateRenderTargetMipmap(Ce))}C.setRenderTarget(Xe,Ie,nt),C.setClearColor(me,he),Qe!==void 0&&(ce.viewport=Qe),C.toneMapping=st}function Hr(w,Y,oe){const ce=Y.isScene===!0?Y.overrideMaterial:null;for(let K=0,Ce=w.length;K<Ce;K++){const Be=w[K],Xe=Be.object,Ie=Be.geometry,nt=Be.group;let st=Be.material;st.allowOverride===!0&&ce!==null&&(st=ce),Xe.layers.test(oe.layers)&&Qs(Xe,Y,oe,Ie,st,nt)}}function Qs(w,Y,oe,ce,K,Ce){w.onBeforeRender(C,Y,oe,ce,K,Ce),w.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),K.onBeforeRender(C,Y,oe,ce,w,Ce),K.transparent===!0&&K.side===pa&&K.forceSinglePass===!1?(K.side=Zn,K.needsUpdate=!0,C.renderBufferDirect(oe,Y,ce,K,w,Ce),K.side=tr,K.needsUpdate=!0,C.renderBufferDirect(oe,Y,ce,K,w,Ce),K.side=pa):C.renderBufferDirect(oe,Y,ce,K,w,Ce),w.onAfterRender(C,Y,oe,ce,K,Ce)}function Ci(w,Y,oe){Y.isScene!==!0&&(Y=je);const ce=We.get(w),K=v.state.lights,Ce=v.state.shadowsArray,Be=K.state.version,Xe=de.getParameters(w,K.state,Ce,Y,oe),Ie=de.getProgramCacheKey(Xe);let nt=ce.programs;ce.environment=w.isMeshStandardMaterial?Y.environment:null,ce.fog=Y.fog,ce.envMap=(w.isMeshStandardMaterial?Xt:qt).get(w.envMap||ce.environment),ce.envMapRotation=ce.environment!==null&&w.envMap===null?Y.environmentRotation:w.envMapRotation,nt===void 0&&(w.addEventListener("dispose",xe),nt=new Map,ce.programs=nt);let st=nt.get(Ie);if(st!==void 0){if(ce.currentProgram===st&&ce.lightsStateVersion===Be)return qi(w,Xe),st}else Xe.uniforms=de.getUniforms(w),w.onBeforeCompile(Xe,C),st=de.acquireProgram(Xe,Ie),nt.set(Ie,st),ce.uniforms=Xe.uniforms;const Qe=ce.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Qe.clippingPlanes=Le.uniform),qi(w,Xe),ce.needsLights=ya(w),ce.lightsStateVersion=Be,ce.needsLights&&(Qe.ambientLightColor.value=K.state.ambient,Qe.lightProbe.value=K.state.probe,Qe.directionalLights.value=K.state.directional,Qe.directionalLightShadows.value=K.state.directionalShadow,Qe.spotLights.value=K.state.spot,Qe.spotLightShadows.value=K.state.spotShadow,Qe.rectAreaLights.value=K.state.rectArea,Qe.ltc_1.value=K.state.rectAreaLTC1,Qe.ltc_2.value=K.state.rectAreaLTC2,Qe.pointLights.value=K.state.point,Qe.pointLightShadows.value=K.state.pointShadow,Qe.hemisphereLights.value=K.state.hemi,Qe.directionalShadowMap.value=K.state.directionalShadowMap,Qe.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Qe.spotShadowMap.value=K.state.spotShadowMap,Qe.spotLightMatrix.value=K.state.spotLightMatrix,Qe.spotLightMap.value=K.state.spotLightMap,Qe.pointShadowMap.value=K.state.pointShadowMap,Qe.pointShadowMatrix.value=K.state.pointShadowMatrix),ce.currentProgram=st,ce.uniformsList=null,st}function Gr(w){if(w.uniformsList===null){const Y=w.currentProgram.getUniforms();w.uniformsList=sc.seqWithValue(Y.seq,w.uniforms)}return w.uniformsList}function qi(w,Y){const oe=We.get(w);oe.outputColorSpace=Y.outputColorSpace,oe.batching=Y.batching,oe.batchingColor=Y.batchingColor,oe.instancing=Y.instancing,oe.instancingColor=Y.instancingColor,oe.instancingMorph=Y.instancingMorph,oe.skinning=Y.skinning,oe.morphTargets=Y.morphTargets,oe.morphNormals=Y.morphNormals,oe.morphColors=Y.morphColors,oe.morphTargetsCount=Y.morphTargetsCount,oe.numClippingPlanes=Y.numClippingPlanes,oe.numIntersection=Y.numClipIntersection,oe.vertexAlphas=Y.vertexAlphas,oe.vertexTangents=Y.vertexTangents,oe.toneMapping=Y.toneMapping}function xa(w,Y,oe,ce,K){Y.isScene!==!0&&(Y=je),ct.resetTextureUnits();const Ce=Y.fog,Be=ce.isMeshStandardMaterial?Y.environment:null,Xe=X===null?C.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Vs,Ie=(ce.isMeshStandardMaterial?Xt:qt).get(ce.envMap||Be),nt=ce.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,st=!!oe.attributes.tangent&&(!!ce.normalMap||ce.anisotropy>0),Qe=!!oe.morphAttributes.position,gt=!!oe.morphAttributes.normal,wt=!!oe.morphAttributes.color;let Zt=er;ce.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Zt=C.toneMapping);const It=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,_t=It!==void 0?It.length:0,tt=We.get(ce),Yt=v.state.lights;if(Ve===!0&&(ne===!0||w!==R)){const tn=w===R&&ce.id===U;Le.setState(ce,w,tn)}let Et=!1;ce.version===tt.__version?(tt.needsLights&&tt.lightsStateVersion!==Yt.state.version||tt.outputColorSpace!==Xe||K.isBatchedMesh&&tt.batching===!1||!K.isBatchedMesh&&tt.batching===!0||K.isBatchedMesh&&tt.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&tt.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&tt.instancing===!1||!K.isInstancedMesh&&tt.instancing===!0||K.isSkinnedMesh&&tt.skinning===!1||!K.isSkinnedMesh&&tt.skinning===!0||K.isInstancedMesh&&tt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&tt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&tt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&tt.instancingMorph===!1&&K.morphTexture!==null||tt.envMap!==Ie||ce.fog===!0&&tt.fog!==Ce||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==Le.numPlanes||tt.numIntersection!==Le.numIntersection)||tt.vertexAlphas!==nt||tt.vertexTangents!==st||tt.morphTargets!==Qe||tt.morphNormals!==gt||tt.morphColors!==wt||tt.toneMapping!==Zt||tt.morphTargetsCount!==_t)&&(Et=!0):(Et=!0,tt.__version=ce.version);let Dn=tt.currentProgram;Et===!0&&(Dn=Ci(ce,Y,K));let _i=!1,Fn=!1,Sn=!1;const Vt=Dn.getUniforms(),zn=tt.uniforms;if(ze.useProgram(Dn.program)&&(_i=!0,Fn=!0,Sn=!0),ce.id!==U&&(U=ce.id,Fn=!0),_i||R!==w){ze.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Vt.setValue(G,"projectionMatrix",w.projectionMatrix),Vt.setValue(G,"viewMatrix",w.matrixWorldInverse);const bn=Vt.map.cameraPosition;bn!==void 0&&bn.setValue(G,Ue.setFromMatrixPosition(w.matrixWorld)),at.logarithmicDepthBuffer&&Vt.setValue(G,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ce.isMeshPhongMaterial||ce.isMeshToonMaterial||ce.isMeshLambertMaterial||ce.isMeshBasicMaterial||ce.isMeshStandardMaterial||ce.isShaderMaterial)&&Vt.setValue(G,"isOrthographic",w.isOrthographicCamera===!0),R!==w&&(R=w,Fn=!0,Sn=!0)}if(K.isSkinnedMesh){Vt.setOptional(G,K,"bindMatrix"),Vt.setOptional(G,K,"bindMatrixInverse");const tn=K.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),Vt.setValue(G,"boneTexture",tn.boneTexture,ct))}K.isBatchedMesh&&(Vt.setOptional(G,K,"batchingTexture"),Vt.setValue(G,"batchingTexture",K._matricesTexture,ct),Vt.setOptional(G,K,"batchingIdTexture"),Vt.setValue(G,"batchingIdTexture",K._indirectTexture,ct),Vt.setOptional(G,K,"batchingColorTexture"),K._colorsTexture!==null&&Vt.setValue(G,"batchingColorTexture",K._colorsTexture,ct));const Un=oe.morphAttributes;if((Un.position!==void 0||Un.normal!==void 0||Un.color!==void 0)&&Ae.update(K,oe,Dn),(Fn||tt.receiveShadow!==K.receiveShadow)&&(tt.receiveShadow=K.receiveShadow,Vt.setValue(G,"receiveShadow",K.receiveShadow)),ce.isMeshGouraudMaterial&&ce.envMap!==null&&(zn.envMap.value=Ie,zn.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),ce.isMeshStandardMaterial&&ce.envMap===null&&Y.environment!==null&&(zn.envMapIntensity.value=Y.environmentIntensity),Fn&&(Vt.setValue(G,"toneMappingExposure",C.toneMappingExposure),tt.needsLights&&ar(zn,Sn),Ce&&ce.fog===!0&&Se.refreshFogUniforms(zn,Ce),Se.refreshMaterialUniforms(zn,ce,q,Z,v.state.transmissionRenderTarget[w.id]),sc.upload(G,Gr(tt),zn,ct)),ce.isShaderMaterial&&ce.uniformsNeedUpdate===!0&&(sc.upload(G,Gr(tt),zn,ct),ce.uniformsNeedUpdate=!1),ce.isSpriteMaterial&&Vt.setValue(G,"center",K.center),Vt.setValue(G,"modelViewMatrix",K.modelViewMatrix),Vt.setValue(G,"normalMatrix",K.normalMatrix),Vt.setValue(G,"modelMatrix",K.matrixWorld),ce.isShaderMaterial||ce.isRawShaderMaterial){const tn=ce.uniformsGroups;for(let bn=0,Vr=tn.length;bn<Vr;bn++){const kn=tn[bn];De.update(kn,Dn),De.bind(kn,Dn)}}return Dn}function ar(w,Y){w.ambientLightColor.needsUpdate=Y,w.lightProbe.needsUpdate=Y,w.directionalLights.needsUpdate=Y,w.directionalLightShadows.needsUpdate=Y,w.pointLights.needsUpdate=Y,w.pointLightShadows.needsUpdate=Y,w.spotLights.needsUpdate=Y,w.spotLightShadows.needsUpdate=Y,w.rectAreaLights.needsUpdate=Y,w.hemisphereLights.needsUpdate=Y}function ya(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(w,Y,oe){const ce=We.get(w);ce.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,ce.__autoAllocateDepthBuffer===!1&&(ce.__useRenderToTexture=!1),We.get(w.texture).__webglTexture=Y,We.get(w.depthTexture).__webglTexture=ce.__autoAllocateDepthBuffer?void 0:oe,ce.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,Y){const oe=We.get(w);oe.__webglFramebuffer=Y,oe.__useDefaultFramebuffer=Y===void 0};const cn=G.createFramebuffer();this.setRenderTarget=function(w,Y=0,oe=0){X=w,F=Y,I=oe;let ce=!0,K=null,Ce=!1,Be=!1;if(w){const Ie=We.get(w);if(Ie.__useDefaultFramebuffer!==void 0)ze.bindFramebuffer(G.FRAMEBUFFER,null),ce=!1;else if(Ie.__webglFramebuffer===void 0)ct.setupRenderTarget(w);else if(Ie.__hasExternalTextures)ct.rebindTextures(w,We.get(w.texture).__webglTexture,We.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Qe=w.depthTexture;if(Ie.__boundDepthTexture!==Qe){if(Qe!==null&&We.has(Qe)&&(w.width!==Qe.image.width||w.height!==Qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ct.setupDepthRenderbuffer(w)}}const nt=w.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(Be=!0);const st=We.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(st[Y])?K=st[Y][oe]:K=st[Y],Ce=!0):w.samples>0&&ct.useMultisampledRTT(w)===!1?K=We.get(w).__webglMultisampledFramebuffer:Array.isArray(st)?K=st[oe]:K=st,k.copy(w.viewport),J.copy(w.scissor),ue=w.scissorTest}else k.copy(Q).multiplyScalar(q).floor(),J.copy(ve).multiplyScalar(q).floor(),ue=be;if(oe!==0&&(K=cn),ze.bindFramebuffer(G.FRAMEBUFFER,K)&&ce&&ze.drawBuffers(w,K),ze.viewport(k),ze.scissor(J),ze.setScissorTest(ue),Ce){const Ie=We.get(w.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ie.__webglTexture,oe)}else if(Be){const Ie=Y;for(let nt=0;nt<w.textures.length;nt++){const st=We.get(w.textures[nt]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+nt,st.__webglTexture,oe,Ie)}}else if(w!==null&&oe!==0){const Ie=We.get(w.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Ie.__webglTexture,oe)}U=-1},this.readRenderTargetPixels=function(w,Y,oe,ce,K,Ce,Be,Xe=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=We.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Be!==void 0&&(Ie=Ie[Be]),Ie){ze.bindFramebuffer(G.FRAMEBUFFER,Ie);try{const nt=w.textures[Xe],st=nt.format,Qe=nt.type;if(!at.textureFormatReadable(st)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!at.textureTypeReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=w.width-ce&&oe>=0&&oe<=w.height-K&&(w.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Xe),G.readPixels(Y,oe,ce,K,H.convert(st),H.convert(Qe),Ce))}finally{const nt=X!==null?We.get(X).__webglFramebuffer:null;ze.bindFramebuffer(G.FRAMEBUFFER,nt)}}},this.readRenderTargetPixelsAsync=async function(w,Y,oe,ce,K,Ce,Be,Xe=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=We.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Be!==void 0&&(Ie=Ie[Be]),Ie)if(Y>=0&&Y<=w.width-ce&&oe>=0&&oe<=w.height-K){ze.bindFramebuffer(G.FRAMEBUFFER,Ie);const nt=w.textures[Xe],st=nt.format,Qe=nt.type;if(!at.textureFormatReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!at.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const gt=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,gt),G.bufferData(G.PIXEL_PACK_BUFFER,Ce.byteLength,G.STREAM_READ),w.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Xe),G.readPixels(Y,oe,ce,K,H.convert(st),H.convert(Qe),0);const wt=X!==null?We.get(X).__webglFramebuffer:null;ze.bindFramebuffer(G.FRAMEBUFFER,wt);const Zt=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await wT(G,Zt,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,gt),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Ce),G.deleteBuffer(gt),G.deleteSync(Zt),Ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,Y=null,oe=0){const ce=Math.pow(2,-oe),K=Math.floor(w.image.width*ce),Ce=Math.floor(w.image.height*ce),Be=Y!==null?Y.x:0,Xe=Y!==null?Y.y:0;ct.setTexture2D(w,0),G.copyTexSubImage2D(G.TEXTURE_2D,oe,0,0,Be,Xe,K,Ce),ze.unbindTexture()};const yl=G.createFramebuffer(),El=G.createFramebuffer();this.copyTextureToTexture=function(w,Y,oe=null,ce=null,K=0,Ce=null){Ce===null&&(K!==0?(ol("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ce=K,K=0):Ce=0);let Be,Xe,Ie,nt,st,Qe,gt,wt,Zt;const It=w.isCompressedTexture?w.mipmaps[Ce]:w.image;if(oe!==null)Be=oe.max.x-oe.min.x,Xe=oe.max.y-oe.min.y,Ie=oe.isBox3?oe.max.z-oe.min.z:1,nt=oe.min.x,st=oe.min.y,Qe=oe.isBox3?oe.min.z:0;else{const Un=Math.pow(2,-K);Be=Math.floor(It.width*Un),Xe=Math.floor(It.height*Un),w.isDataArrayTexture?Ie=It.depth:w.isData3DTexture?Ie=Math.floor(It.depth*Un):Ie=1,nt=0,st=0,Qe=0}ce!==null?(gt=ce.x,wt=ce.y,Zt=ce.z):(gt=0,wt=0,Zt=0);const _t=H.convert(Y.format),tt=H.convert(Y.type);let Yt;Y.isData3DTexture?(ct.setTexture3D(Y,0),Yt=G.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(ct.setTexture2DArray(Y,0),Yt=G.TEXTURE_2D_ARRAY):(ct.setTexture2D(Y,0),Yt=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,Y.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,Y.unpackAlignment);const Et=G.getParameter(G.UNPACK_ROW_LENGTH),Dn=G.getParameter(G.UNPACK_IMAGE_HEIGHT),_i=G.getParameter(G.UNPACK_SKIP_PIXELS),Fn=G.getParameter(G.UNPACK_SKIP_ROWS),Sn=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,It.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,It.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,nt),G.pixelStorei(G.UNPACK_SKIP_ROWS,st),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Qe);const Vt=w.isDataArrayTexture||w.isData3DTexture,zn=Y.isDataArrayTexture||Y.isData3DTexture;if(w.isDepthTexture){const Un=We.get(w),tn=We.get(Y),bn=We.get(Un.__renderTarget),Vr=We.get(tn.__renderTarget);ze.bindFramebuffer(G.READ_FRAMEBUFFER,bn.__webglFramebuffer),ze.bindFramebuffer(G.DRAW_FRAMEBUFFER,Vr.__webglFramebuffer);for(let kn=0;kn<Ie;kn++)Vt&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,We.get(w).__webglTexture,K,Qe+kn),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,We.get(Y).__webglTexture,Ce,Zt+kn)),G.blitFramebuffer(nt,st,Be,Xe,gt,wt,Be,Xe,G.DEPTH_BUFFER_BIT,G.NEAREST);ze.bindFramebuffer(G.READ_FRAMEBUFFER,null),ze.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(K!==0||w.isRenderTargetTexture||We.has(w)){const Un=We.get(w),tn=We.get(Y);ze.bindFramebuffer(G.READ_FRAMEBUFFER,yl),ze.bindFramebuffer(G.DRAW_FRAMEBUFFER,El);for(let bn=0;bn<Ie;bn++)Vt?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Un.__webglTexture,K,Qe+bn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Un.__webglTexture,K),zn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,tn.__webglTexture,Ce,Zt+bn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,tn.__webglTexture,Ce),K!==0?G.blitFramebuffer(nt,st,Be,Xe,gt,wt,Be,Xe,G.COLOR_BUFFER_BIT,G.NEAREST):zn?G.copyTexSubImage3D(Yt,Ce,gt,wt,Zt+bn,nt,st,Be,Xe):G.copyTexSubImage2D(Yt,Ce,gt,wt,nt,st,Be,Xe);ze.bindFramebuffer(G.READ_FRAMEBUFFER,null),ze.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else zn?w.isDataTexture||w.isData3DTexture?G.texSubImage3D(Yt,Ce,gt,wt,Zt,Be,Xe,Ie,_t,tt,It.data):Y.isCompressedArrayTexture?G.compressedTexSubImage3D(Yt,Ce,gt,wt,Zt,Be,Xe,Ie,_t,It.data):G.texSubImage3D(Yt,Ce,gt,wt,Zt,Be,Xe,Ie,_t,tt,It):w.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Ce,gt,wt,Be,Xe,_t,tt,It.data):w.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Ce,gt,wt,It.width,It.height,_t,It.data):G.texSubImage2D(G.TEXTURE_2D,Ce,gt,wt,Be,Xe,_t,tt,It);G.pixelStorei(G.UNPACK_ROW_LENGTH,Et),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Dn),G.pixelStorei(G.UNPACK_SKIP_PIXELS,_i),G.pixelStorei(G.UNPACK_SKIP_ROWS,Fn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Sn),Ce===0&&Y.generateMipmaps&&G.generateMipmap(Yt),ze.unbindTexture()},this.initRenderTarget=function(w){We.get(w).__webglFramebuffer===void 0&&ct.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?ct.setTextureCube(w,0):w.isData3DTexture?ct.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?ct.setTexture2DArray(w,0):ct.setTexture2D(w,0),ze.unbindTexture()},this.resetState=function(){F=0,I=0,X=null,ze.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Dt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Dt._getUnpackColorSpace()}}var jw=Object.defineProperty,Zw=(r,e,n)=>e in r?jw(r,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[e]=n,Kw=(r,e,n)=>(Zw(r,e+"",n),n);class Qw{constructor(){Kw(this,"_listeners")}addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(n)===-1&&a[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const a=this._listeners;return a[e]!==void 0&&a[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const u=o.indexOf(n);u!==-1&&o.splice(u,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const a=this._listeners[e.type];if(a!==void 0){e.target=this;const o=a.slice(0);for(let u=0,f=o.length;u<f;u++)o[u].call(this,e);e.target=null}}}var Jw=Object.defineProperty,$w=(r,e,n)=>e in r?Jw(r,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[e]=n,it=(r,e,n)=>($w(r,typeof e!="symbol"?e+"":e,n),n);const Ju=new vS,x0=new Qa,eC=Math.cos(70*(Math.PI/180)),y0=(r,e)=>(r%e+e)%e;class tC extends Qw{constructor(e,n){super(),it(this,"object"),it(this,"domElement"),it(this,"enabled",!0),it(this,"target",new ee),it(this,"minDistance",0),it(this,"maxDistance",1/0),it(this,"minZoom",0),it(this,"maxZoom",1/0),it(this,"minPolarAngle",0),it(this,"maxPolarAngle",Math.PI),it(this,"minAzimuthAngle",-1/0),it(this,"maxAzimuthAngle",1/0),it(this,"enableDamping",!1),it(this,"dampingFactor",.05),it(this,"enableZoom",!0),it(this,"zoomSpeed",1),it(this,"enableRotate",!0),it(this,"rotateSpeed",1),it(this,"enablePan",!0),it(this,"panSpeed",1),it(this,"screenSpacePanning",!0),it(this,"keyPanSpeed",7),it(this,"zoomToCursor",!1),it(this,"autoRotate",!1),it(this,"autoRotateSpeed",2),it(this,"reverseOrbit",!1),it(this,"reverseHorizontalOrbit",!1),it(this,"reverseVerticalOrbit",!1),it(this,"keys",{LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"}),it(this,"mouseButtons",{LEFT:xs.ROTATE,MIDDLE:xs.DOLLY,RIGHT:xs.PAN}),it(this,"touches",{ONE:ys.ROTATE,TWO:ys.DOLLY_PAN}),it(this,"target0"),it(this,"position0"),it(this,"zoom0"),it(this,"_domElementKeyEvents",null),it(this,"getPolarAngle"),it(this,"getAzimuthalAngle"),it(this,"setPolarAngle"),it(this,"setAzimuthalAngle"),it(this,"getDistance"),it(this,"getZoomScale"),it(this,"listenToKeyEvents"),it(this,"stopListenToKeyEvents"),it(this,"saveState"),it(this,"reset"),it(this,"update"),it(this,"connect"),it(this,"dispose"),it(this,"dollyIn"),it(this,"dollyOut"),it(this,"getScale"),it(this,"setScale"),this.object=e,this.domElement=n,this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=()=>g.phi,this.getAzimuthalAngle=()=>g.theta,this.setPolarAngle=H=>{let ae=y0(H,2*Math.PI),De=g.phi;De<0&&(De+=2*Math.PI),ae<0&&(ae+=2*Math.PI);let V=Math.abs(ae-De);2*Math.PI-V<V&&(ae<De?ae+=2*Math.PI:De+=2*Math.PI),_.phi=ae-De,a.update()},this.setAzimuthalAngle=H=>{let ae=y0(H,2*Math.PI),De=g.theta;De<0&&(De+=2*Math.PI),ae<0&&(ae+=2*Math.PI);let V=Math.abs(ae-De);2*Math.PI-V<V&&(ae<De?ae+=2*Math.PI:De+=2*Math.PI),_.theta=ae-De,a.update()},this.getDistance=()=>a.object.position.distanceTo(a.target),this.listenToKeyEvents=H=>{H.addEventListener("keydown",fe),this._domElementKeyEvents=H},this.stopListenToKeyEvents=()=>{this._domElementKeyEvents.removeEventListener("keydown",fe),this._domElementKeyEvents=null},this.saveState=()=>{a.target0.copy(a.target),a.position0.copy(a.object.position),a.zoom0=a.object.zoom},this.reset=()=>{a.target.copy(a.target0),a.object.position.copy(a.position0),a.object.zoom=a.zoom0,a.object.updateProjectionMatrix(),a.dispatchEvent(o),a.update(),m=h.NONE},this.update=(()=>{const H=new ee,ae=new ee(0,1,0),De=new Pr().setFromUnitVectors(e.up,ae),V=De.clone().invert(),Me=new ee,we=new Pr,Pe=2*Math.PI;return function(){const xe=a.object.position;De.setFromUnitVectors(e.up,ae),V.copy(De).invert(),H.copy(xe).sub(a.target),H.applyQuaternion(De),g.setFromVector3(H),a.autoRotate&&m===h.NONE&&me(J()),a.enableDamping?(g.theta+=_.theta*a.dampingFactor,g.phi+=_.phi*a.dampingFactor):(g.theta+=_.theta,g.phi+=_.phi);let He=a.minAzimuthAngle,Je=a.maxAzimuthAngle;isFinite(He)&&isFinite(Je)&&(He<-Math.PI?He+=Pe:He>Math.PI&&(He-=Pe),Je<-Math.PI?Je+=Pe:Je>Math.PI&&(Je-=Pe),He<=Je?g.theta=Math.max(He,Math.min(Je,g.theta)):g.theta=g.theta>(He+Je)/2?Math.max(He,g.theta):Math.min(Je,g.theta)),g.phi=Math.max(a.minPolarAngle,Math.min(a.maxPolarAngle,g.phi)),g.makeSafe(),a.enableDamping===!0?a.target.addScaledVector(y,a.dampingFactor):a.target.add(y),a.zoomToCursor&&U||a.object.isOrthographicCamera?g.radius=be(g.radius):g.radius=be(g.radius*S),H.setFromSpherical(g),H.applyQuaternion(V),xe.copy(a.target).add(H),a.object.matrixAutoUpdate||a.object.updateMatrix(),a.object.lookAt(a.target),a.enableDamping===!0?(_.theta*=1-a.dampingFactor,_.phi*=1-a.dampingFactor,y.multiplyScalar(1-a.dampingFactor)):(_.set(0,0,0),y.set(0,0,0));let At=!1;if(a.zoomToCursor&&U){let St=null;if(a.object instanceof Vn&&a.object.isPerspectiveCamera){const Tn=H.length();St=be(Tn*S);const jt=Tn-St;a.object.position.addScaledVector(I,jt),a.object.updateMatrixWorld()}else if(a.object.isOrthographicCamera){const Tn=new ee(X.x,X.y,0);Tn.unproject(a.object),a.object.zoom=Math.max(a.minZoom,Math.min(a.maxZoom,a.object.zoom/S)),a.object.updateProjectionMatrix(),At=!0;const jt=new ee(X.x,X.y,0);jt.unproject(a.object),a.object.position.sub(jt).add(Tn),a.object.updateMatrixWorld(),St=H.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),a.zoomToCursor=!1;St!==null&&(a.screenSpacePanning?a.target.set(0,0,-1).transformDirection(a.object.matrix).multiplyScalar(St).add(a.object.position):(Ju.origin.copy(a.object.position),Ju.direction.set(0,0,-1).transformDirection(a.object.matrix),Math.abs(a.object.up.dot(Ju.direction))<eC?e.lookAt(a.target):(x0.setFromNormalAndCoplanarPoint(a.object.up,a.target),Ju.intersectPlane(x0,a.target))))}else a.object instanceof tl&&a.object.isOrthographicCamera&&(At=S!==1,At&&(a.object.zoom=Math.max(a.minZoom,Math.min(a.maxZoom,a.object.zoom/S)),a.object.updateProjectionMatrix()));return S=1,U=!1,At||Me.distanceToSquared(a.object.position)>d||8*(1-we.dot(a.object.quaternion))>d?(a.dispatchEvent(o),Me.copy(a.object.position),we.copy(a.object.quaternion),At=!1,!0):!1}})(),this.connect=H=>{a.domElement=H,a.domElement.style.touchAction="none",a.domElement.addEventListener("contextmenu",Ye),a.domElement.addEventListener("pointerdown",Xt),a.domElement.addEventListener("pointercancel",b),a.domElement.addEventListener("wheel",Se)},this.dispose=()=>{var H,ae,De,V,Me,we;a.domElement&&(a.domElement.style.touchAction="auto"),(H=a.domElement)==null||H.removeEventListener("contextmenu",Ye),(ae=a.domElement)==null||ae.removeEventListener("pointerdown",Xt),(De=a.domElement)==null||De.removeEventListener("pointercancel",b),(V=a.domElement)==null||V.removeEventListener("wheel",Se),(Me=a.domElement)==null||Me.ownerDocument.removeEventListener("pointermove",O),(we=a.domElement)==null||we.ownerDocument.removeEventListener("pointerup",b),a._domElementKeyEvents!==null&&a._domElementKeyEvents.removeEventListener("keydown",fe)};const a=this,o={type:"change"},u={type:"start"},f={type:"end"},h={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let m=h.NONE;const d=1e-6,g=new jv,_=new jv;let S=1;const y=new ee,E=new ft,T=new ft,x=new ft,v=new ft,D=new ft,L=new ft,C=new ft,P=new ft,F=new ft,I=new ee,X=new ft;let U=!1;const R=[],k={};function J(){return 2*Math.PI/60/60*a.autoRotateSpeed}function ue(){return Math.pow(.95,a.zoomSpeed)}function me(H){a.reverseOrbit||a.reverseHorizontalOrbit?_.theta+=H:_.theta-=H}function he(H){a.reverseOrbit||a.reverseVerticalOrbit?_.phi+=H:_.phi-=H}const B=(()=>{const H=new ee;return function(De,V){H.setFromMatrixColumn(V,0),H.multiplyScalar(-De),y.add(H)}})(),Z=(()=>{const H=new ee;return function(De,V){a.screenSpacePanning===!0?H.setFromMatrixColumn(V,1):(H.setFromMatrixColumn(V,0),H.crossVectors(a.object.up,H)),H.multiplyScalar(De),y.add(H)}})(),q=(()=>{const H=new ee;return function(De,V){const Me=a.domElement;if(Me&&a.object instanceof Vn&&a.object.isPerspectiveCamera){const we=a.object.position;H.copy(we).sub(a.target);let Pe=H.length();Pe*=Math.tan(a.object.fov/2*Math.PI/180),B(2*De*Pe/Me.clientHeight,a.object.matrix),Z(2*V*Pe/Me.clientHeight,a.object.matrix)}else Me&&a.object instanceof tl&&a.object.isOrthographicCamera?(B(De*(a.object.right-a.object.left)/a.object.zoom/Me.clientWidth,a.object.matrix),Z(V*(a.object.top-a.object.bottom)/a.object.zoom/Me.clientHeight,a.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),a.enablePan=!1)}})();function Te(H){a.object instanceof Vn&&a.object.isPerspectiveCamera||a.object instanceof tl&&a.object.isOrthographicCamera?S=H:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),a.enableZoom=!1)}function N(H){Te(S/H)}function Q(H){Te(S*H)}function ve(H){if(!a.zoomToCursor||!a.domElement)return;U=!0;const ae=a.domElement.getBoundingClientRect(),De=H.clientX-ae.left,V=H.clientY-ae.top,Me=ae.width,we=ae.height;X.x=De/Me*2-1,X.y=-(V/we)*2+1,I.set(X.x,X.y,1).unproject(a.object).sub(a.object.position).normalize()}function be(H){return Math.max(a.minDistance,Math.min(a.maxDistance,H))}function Ne(H){E.set(H.clientX,H.clientY)}function Ve(H){ve(H),C.set(H.clientX,H.clientY)}function ne(H){v.set(H.clientX,H.clientY)}function ye(H){T.set(H.clientX,H.clientY),x.subVectors(T,E).multiplyScalar(a.rotateSpeed);const ae=a.domElement;ae&&(me(2*Math.PI*x.x/ae.clientHeight),he(2*Math.PI*x.y/ae.clientHeight)),E.copy(T),a.update()}function Ue(H){P.set(H.clientX,H.clientY),F.subVectors(P,C),F.y>0?N(ue()):F.y<0&&Q(ue()),C.copy(P),a.update()}function et(H){D.set(H.clientX,H.clientY),L.subVectors(D,v).multiplyScalar(a.panSpeed),q(L.x,L.y),v.copy(D),a.update()}function je(H){ve(H),H.deltaY<0?Q(ue()):H.deltaY>0&&N(ue()),a.update()}function dt(H){let ae=!1;switch(H.code){case a.keys.UP:q(0,a.keyPanSpeed),ae=!0;break;case a.keys.BOTTOM:q(0,-a.keyPanSpeed),ae=!0;break;case a.keys.LEFT:q(a.keyPanSpeed,0),ae=!0;break;case a.keys.RIGHT:q(-a.keyPanSpeed,0),ae=!0;break}ae&&(H.preventDefault(),a.update())}function Qt(){if(R.length==1)E.set(R[0].pageX,R[0].pageY);else{const H=.5*(R[0].pageX+R[1].pageX),ae=.5*(R[0].pageY+R[1].pageY);E.set(H,ae)}}function G(){if(R.length==1)v.set(R[0].pageX,R[0].pageY);else{const H=.5*(R[0].pageX+R[1].pageX),ae=.5*(R[0].pageY+R[1].pageY);v.set(H,ae)}}function Ut(){const H=R[0].pageX-R[1].pageX,ae=R[0].pageY-R[1].pageY,De=Math.sqrt(H*H+ae*ae);C.set(0,De)}function ut(){a.enableZoom&&Ut(),a.enablePan&&G()}function at(){a.enableZoom&&Ut(),a.enableRotate&&Qt()}function ze(H){if(R.length==1)T.set(H.pageX,H.pageY);else{const De=Ke(H),V=.5*(H.pageX+De.x),Me=.5*(H.pageY+De.y);T.set(V,Me)}x.subVectors(T,E).multiplyScalar(a.rotateSpeed);const ae=a.domElement;ae&&(me(2*Math.PI*x.x/ae.clientHeight),he(2*Math.PI*x.y/ae.clientHeight)),E.copy(T)}function Ot(H){if(R.length==1)D.set(H.pageX,H.pageY);else{const ae=Ke(H),De=.5*(H.pageX+ae.x),V=.5*(H.pageY+ae.y);D.set(De,V)}L.subVectors(D,v).multiplyScalar(a.panSpeed),q(L.x,L.y),v.copy(D)}function We(H){const ae=Ke(H),De=H.pageX-ae.x,V=H.pageY-ae.y,Me=Math.sqrt(De*De+V*V);P.set(0,Me),F.set(0,Math.pow(P.y/C.y,a.zoomSpeed)),N(F.y),C.copy(P)}function ct(H){a.enableZoom&&We(H),a.enablePan&&Ot(H)}function qt(H){a.enableZoom&&We(H),a.enableRotate&&ze(H)}function Xt(H){var ae,De;a.enabled!==!1&&(R.length===0&&((ae=a.domElement)==null||ae.ownerDocument.addEventListener("pointermove",O),(De=a.domElement)==null||De.ownerDocument.addEventListener("pointerup",b)),Ze(H),H.pointerType==="touch"?Ge(H):ie(H))}function O(H){a.enabled!==!1&&(H.pointerType==="touch"?Le(H):de(H))}function b(H){var ae,De,V;Ae(H),R.length===0&&((ae=a.domElement)==null||ae.releasePointerCapture(H.pointerId),(De=a.domElement)==null||De.ownerDocument.removeEventListener("pointermove",O),(V=a.domElement)==null||V.ownerDocument.removeEventListener("pointerup",b)),a.dispatchEvent(f),m=h.NONE}function ie(H){let ae;switch(H.button){case 0:ae=a.mouseButtons.LEFT;break;case 1:ae=a.mouseButtons.MIDDLE;break;case 2:ae=a.mouseButtons.RIGHT;break;default:ae=-1}switch(ae){case xs.DOLLY:if(a.enableZoom===!1)return;Ve(H),m=h.DOLLY;break;case xs.ROTATE:if(H.ctrlKey||H.metaKey||H.shiftKey){if(a.enablePan===!1)return;ne(H),m=h.PAN}else{if(a.enableRotate===!1)return;Ne(H),m=h.ROTATE}break;case xs.PAN:if(H.ctrlKey||H.metaKey||H.shiftKey){if(a.enableRotate===!1)return;Ne(H),m=h.ROTATE}else{if(a.enablePan===!1)return;ne(H),m=h.PAN}break;default:m=h.NONE}m!==h.NONE&&a.dispatchEvent(u)}function de(H){if(a.enabled!==!1)switch(m){case h.ROTATE:if(a.enableRotate===!1)return;ye(H);break;case h.DOLLY:if(a.enableZoom===!1)return;Ue(H);break;case h.PAN:if(a.enablePan===!1)return;et(H);break}}function Se(H){a.enabled===!1||a.enableZoom===!1||m!==h.NONE&&m!==h.ROTATE||(H.preventDefault(),a.dispatchEvent(u),je(H),a.dispatchEvent(f))}function fe(H){a.enabled===!1||a.enablePan===!1||dt(H)}function Ge(H){switch(Oe(H),R.length){case 1:switch(a.touches.ONE){case ys.ROTATE:if(a.enableRotate===!1)return;Qt(),m=h.TOUCH_ROTATE;break;case ys.PAN:if(a.enablePan===!1)return;G(),m=h.TOUCH_PAN;break;default:m=h.NONE}break;case 2:switch(a.touches.TWO){case ys.DOLLY_PAN:if(a.enableZoom===!1&&a.enablePan===!1)return;ut(),m=h.TOUCH_DOLLY_PAN;break;case ys.DOLLY_ROTATE:if(a.enableZoom===!1&&a.enableRotate===!1)return;at(),m=h.TOUCH_DOLLY_ROTATE;break;default:m=h.NONE}break;default:m=h.NONE}m!==h.NONE&&a.dispatchEvent(u)}function Le(H){switch(Oe(H),m){case h.TOUCH_ROTATE:if(a.enableRotate===!1)return;ze(H),a.update();break;case h.TOUCH_PAN:if(a.enablePan===!1)return;Ot(H),a.update();break;case h.TOUCH_DOLLY_PAN:if(a.enableZoom===!1&&a.enablePan===!1)return;ct(H),a.update();break;case h.TOUCH_DOLLY_ROTATE:if(a.enableZoom===!1&&a.enableRotate===!1)return;qt(H),a.update();break;default:m=h.NONE}}function Ye(H){a.enabled!==!1&&H.preventDefault()}function Ze(H){R.push(H)}function Ae(H){delete k[H.pointerId];for(let ae=0;ae<R.length;ae++)if(R[ae].pointerId==H.pointerId){R.splice(ae,1);return}}function Oe(H){let ae=k[H.pointerId];ae===void 0&&(ae=new ft,k[H.pointerId]=ae),ae.set(H.pageX,H.pageY)}function Ke(H){const ae=H.pointerId===R[0].pointerId?R[1]:R[0];return k[ae.pointerId]}this.dollyIn=(H=ue())=>{Q(H),a.update()},this.dollyOut=(H=ue())=>{N(H),a.update()},this.getScale=()=>S,this.setScale=H=>{Te(H),a.update()},this.getZoomScale=()=>ue(),n!==void 0&&this.connect(n),this.update()}}const nC="_introContainer_tmudu_1",iC="_introTitle_tmudu_8",E0={introContainer:nC,introTitle:iC};function aC(){const r=ge.useRef(),e=Z0();return ge.useEffect(()=>{const n=new $T,a=new Vn(75,window.innerWidth/window.innerHeight,.1,1e3),o=new Yw({canvas:r.current,antialias:!0});o.setSize(window.innerWidth,window.innerHeight),o.setPixelRatio(window.devicePixelRatio),o.setClearColor(723723,1);const u=new ub(16777215,2);u.position.set(2,2,5),n.add(u);const f=new Dp(1,2),h=new ib({color:3381759,roughness:.4,metalness:.6}),m=new zi(f,h);n.add(m),new tC(a,o.domElement),a.position.z=3;const d=()=>{m.rotation.y+=.01,m.rotation.x+=.005,o.render(n,a),requestAnimationFrame(d)};d();const g=()=>{a.aspect=window.innerWidth/window.innerHeight,a.updateProjectionMatrix(),o.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",g);const _=()=>{window.innerHeight+window.scrollY>=document.body.offsetHeight-10&&e("/main")};return window.addEventListener("scroll",_),()=>{window.removeEventListener("resize",g),window.removeEventListener("scroll",_),o.dispose()}},[e]),ke.jsxs("div",{className:E0.introContainer,children:[ke.jsx("canvas",{ref:r}),ke.jsx("h1",{className:E0.introTitle,children:"OK"})]})}const rC="_mainContainer_ok0tr_1",sC="_mainVideo_ok0tr_8",oC="_nav_ok0tr_14",dd={mainContainer:rC,mainVideo:sC,nav:oC};function lC(){return ke.jsxs("div",{className:dd.mainContainer,children:[ke.jsx("video",{className:dd.mainVideo,src:"/assets/ok-main.mp4",autoPlay:!0,loop:!0,muted:!0}),ke.jsxs("nav",{className:dd.nav,children:[ke.jsx(Ka,{to:"/system-before",children:"SYSTEM BEFORE"}),ke.jsx(Ka,{to:"/design-guide",children:"DESIGN GUIDE"}),ke.jsx(Ka,{to:"/tablet",children:"TABLET"}),ke.jsx(Ka,{to:"/smart-watch",children:"SMART WATCH"}),ke.jsx(Ka,{to:"/kiosk",children:"KIOSK"}),ke.jsx(Ka,{to:"/ok-e",children:"OK-E"})]})]})}const uC="_pageContainer_1g2z4_1",cC={pageContainer:uC};function fC(){return ke.jsx("div",{className:cC.pageContainer,children:ke.jsx("h1",{children:"System Before Page"})})}const hC="_pageContainer_1g2z4_1",dC={pageContainer:hC};function pC(){return ke.jsx("div",{className:dC.pageContainer,children:ke.jsx("h1",{children:"Design Guide Page"})})}const mC="_pageContainer_1g2z4_1",gC={pageContainer:mC};function _C(){return ke.jsx("div",{className:gC.pageContainer,children:ke.jsx("h1",{children:"Tablet Page"})})}const vC="_pageContainer_1g2z4_1",SC={pageContainer:vC};function xC(){return ke.jsx("div",{className:SC.pageContainer,children:ke.jsx("h1",{children:"Smart Watch Page"})})}const yC="_pageContainer_1g2z4_1",EC={pageContainer:yC};function MC(){return ke.jsx("div",{className:EC.pageContainer,children:ke.jsx("h1",{children:"Kiosk Page"})})}function OS(r,e){return function(){return r.apply(e,arguments)}}const{toString:TC}=Object.prototype,{getPrototypeOf:Lp}=Object,{iterator:xc,toStringTag:PS}=Symbol,yc=(r=>e=>{const n=TC.call(e);return r[n]||(r[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Ri=r=>(r=r.toLowerCase(),e=>yc(e)===r),Ec=r=>e=>typeof e===r,{isArray:Zs}=Array,Xs=Ec("undefined");function gl(r){return r!==null&&!Xs(r)&&r.constructor!==null&&!Xs(r.constructor)&&Qn(r.constructor.isBuffer)&&r.constructor.isBuffer(r)}const BS=Ri("ArrayBuffer");function bC(r){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(r):e=r&&r.buffer&&BS(r.buffer),e}const AC=Ec("string"),Qn=Ec("function"),IS=Ec("number"),_l=r=>r!==null&&typeof r=="object",RC=r=>r===!0||r===!1,oc=r=>{if(yc(r)!=="object")return!1;const e=Lp(r);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(PS in r)&&!(xc in r)},wC=r=>{if(!_l(r)||gl(r))return!1;try{return Object.keys(r).length===0&&Object.getPrototypeOf(r)===Object.prototype}catch{return!1}},CC=Ri("Date"),DC=Ri("File"),UC=Ri("Blob"),LC=Ri("FileList"),NC=r=>_l(r)&&Qn(r.pipe),OC=r=>{let e;return r&&(typeof FormData=="function"&&r instanceof FormData||Qn(r.append)&&((e=yc(r))==="formdata"||e==="object"&&Qn(r.toString)&&r.toString()==="[object FormData]"))},PC=Ri("URLSearchParams"),[BC,IC,FC,zC]=["ReadableStream","Request","Response","Headers"].map(Ri),HC=r=>r.trim?r.trim():r.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function vl(r,e,{allOwnKeys:n=!1}={}){if(r===null||typeof r>"u")return;let a,o;if(typeof r!="object"&&(r=[r]),Zs(r))for(a=0,o=r.length;a<o;a++)e.call(null,r[a],a,r);else{if(gl(r))return;const u=n?Object.getOwnPropertyNames(r):Object.keys(r),f=u.length;let h;for(a=0;a<f;a++)h=u[a],e.call(null,r[h],h,r)}}function FS(r,e){if(gl(r))return null;e=e.toLowerCase();const n=Object.keys(r);let a=n.length,o;for(;a-- >0;)if(o=n[a],e===o.toLowerCase())return o;return null}const Lr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,zS=r=>!Xs(r)&&r!==Lr;function lp(){const{caseless:r,skipUndefined:e}=zS(this)&&this||{},n={},a=(o,u)=>{const f=r&&FS(n,u)||u;oc(n[f])&&oc(o)?n[f]=lp(n[f],o):oc(o)?n[f]=lp({},o):Zs(o)?n[f]=o.slice():(!e||!Xs(o))&&(n[f]=o)};for(let o=0,u=arguments.length;o<u;o++)arguments[o]&&vl(arguments[o],a);return n}const GC=(r,e,n,{allOwnKeys:a}={})=>(vl(e,(o,u)=>{n&&Qn(o)?r[u]=OS(o,n):r[u]=o},{allOwnKeys:a}),r),VC=r=>(r.charCodeAt(0)===65279&&(r=r.slice(1)),r),kC=(r,e,n,a)=>{r.prototype=Object.create(e.prototype,a),r.prototype.constructor=r,Object.defineProperty(r,"super",{value:e.prototype}),n&&Object.assign(r.prototype,n)},XC=(r,e,n,a)=>{let o,u,f;const h={};if(e=e||{},r==null)return e;do{for(o=Object.getOwnPropertyNames(r),u=o.length;u-- >0;)f=o[u],(!a||a(f,r,e))&&!h[f]&&(e[f]=r[f],h[f]=!0);r=n!==!1&&Lp(r)}while(r&&(!n||n(r,e))&&r!==Object.prototype);return e},WC=(r,e,n)=>{r=String(r),(n===void 0||n>r.length)&&(n=r.length),n-=e.length;const a=r.indexOf(e,n);return a!==-1&&a===n},qC=r=>{if(!r)return null;if(Zs(r))return r;let e=r.length;if(!IS(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=r[e];return n},YC=(r=>e=>r&&e instanceof r)(typeof Uint8Array<"u"&&Lp(Uint8Array)),jC=(r,e)=>{const a=(r&&r[xc]).call(r);let o;for(;(o=a.next())&&!o.done;){const u=o.value;e.call(r,u[0],u[1])}},ZC=(r,e)=>{let n;const a=[];for(;(n=r.exec(e))!==null;)a.push(n);return a},KC=Ri("HTMLFormElement"),QC=r=>r.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,a,o){return a.toUpperCase()+o}),M0=(({hasOwnProperty:r})=>(e,n)=>r.call(e,n))(Object.prototype),JC=Ri("RegExp"),HS=(r,e)=>{const n=Object.getOwnPropertyDescriptors(r),a={};vl(n,(o,u)=>{let f;(f=e(o,u,r))!==!1&&(a[u]=f||o)}),Object.defineProperties(r,a)},$C=r=>{HS(r,(e,n)=>{if(Qn(r)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const a=r[n];if(Qn(a)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},e2=(r,e)=>{const n={},a=o=>{o.forEach(u=>{n[u]=!0})};return Zs(r)?a(r):a(String(r).split(e)),n},t2=()=>{},n2=(r,e)=>r!=null&&Number.isFinite(r=+r)?r:e;function i2(r){return!!(r&&Qn(r.append)&&r[PS]==="FormData"&&r[xc])}const a2=r=>{const e=new Array(10),n=(a,o)=>{if(_l(a)){if(e.indexOf(a)>=0)return;if(gl(a))return a;if(!("toJSON"in a)){e[o]=a;const u=Zs(a)?[]:{};return vl(a,(f,h)=>{const m=n(f,o+1);!Xs(m)&&(u[h]=m)}),e[o]=void 0,u}}return a};return n(r,0)},r2=Ri("AsyncFunction"),s2=r=>r&&(_l(r)||Qn(r))&&Qn(r.then)&&Qn(r.catch),GS=((r,e)=>r?setImmediate:e?((n,a)=>(Lr.addEventListener("message",({source:o,data:u})=>{o===Lr&&u===n&&a.length&&a.shift()()},!1),o=>{a.push(o),Lr.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",Qn(Lr.postMessage)),o2=typeof queueMicrotask<"u"?queueMicrotask.bind(Lr):typeof process<"u"&&process.nextTick||GS,l2=r=>r!=null&&Qn(r[xc]),le={isArray:Zs,isArrayBuffer:BS,isBuffer:gl,isFormData:OC,isArrayBufferView:bC,isString:AC,isNumber:IS,isBoolean:RC,isObject:_l,isPlainObject:oc,isEmptyObject:wC,isReadableStream:BC,isRequest:IC,isResponse:FC,isHeaders:zC,isUndefined:Xs,isDate:CC,isFile:DC,isBlob:UC,isRegExp:JC,isFunction:Qn,isStream:NC,isURLSearchParams:PC,isTypedArray:YC,isFileList:LC,forEach:vl,merge:lp,extend:GC,trim:HC,stripBOM:VC,inherits:kC,toFlatObject:XC,kindOf:yc,kindOfTest:Ri,endsWith:WC,toArray:qC,forEachEntry:jC,matchAll:ZC,isHTMLForm:KC,hasOwnProperty:M0,hasOwnProp:M0,reduceDescriptors:HS,freezeMethods:$C,toObjectSet:e2,toCamelCase:QC,noop:t2,toFiniteNumber:n2,findKey:FS,global:Lr,isContextDefined:zS,isSpecCompliantForm:i2,toJSONObject:a2,isAsyncFn:r2,isThenable:s2,setImmediate:GS,asap:o2,isIterable:l2};function ht(r,e,n,a,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=r,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),a&&(this.request=a),o&&(this.response=o,this.status=o.status?o.status:null)}le.inherits(ht,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:le.toJSONObject(this.config),code:this.code,status:this.status}}});const VS=ht.prototype,kS={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(r=>{kS[r]={value:r}});Object.defineProperties(ht,kS);Object.defineProperty(VS,"isAxiosError",{value:!0});ht.from=(r,e,n,a,o,u)=>{const f=Object.create(VS);le.toFlatObject(r,f,function(g){return g!==Error.prototype},d=>d!=="isAxiosError");const h=r&&r.message?r.message:"Error",m=e==null&&r?r.code:e;return ht.call(f,h,m,n,a,o),r&&f.cause==null&&Object.defineProperty(f,"cause",{value:r,configurable:!0}),f.name=r&&r.name||"Error",u&&Object.assign(f,u),f};const u2=null;function up(r){return le.isPlainObject(r)||le.isArray(r)}function XS(r){return le.endsWith(r,"[]")?r.slice(0,-2):r}function T0(r,e,n){return r?r.concat(e).map(function(o,u){return o=XS(o),!n&&u?"["+o+"]":o}).join(n?".":""):e}function c2(r){return le.isArray(r)&&!r.some(up)}const f2=le.toFlatObject(le,{},null,function(e){return/^is[A-Z]/.test(e)});function Mc(r,e,n){if(!le.isObject(r))throw new TypeError("target must be an object");e=e||new FormData,n=le.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(T,x){return!le.isUndefined(x[T])});const a=n.metaTokens,o=n.visitor||g,u=n.dots,f=n.indexes,m=(n.Blob||typeof Blob<"u"&&Blob)&&le.isSpecCompliantForm(e);if(!le.isFunction(o))throw new TypeError("visitor must be a function");function d(E){if(E===null)return"";if(le.isDate(E))return E.toISOString();if(le.isBoolean(E))return E.toString();if(!m&&le.isBlob(E))throw new ht("Blob is not supported. Use a Buffer instead.");return le.isArrayBuffer(E)||le.isTypedArray(E)?m&&typeof Blob=="function"?new Blob([E]):Buffer.from(E):E}function g(E,T,x){let v=E;if(E&&!x&&typeof E=="object"){if(le.endsWith(T,"{}"))T=a?T:T.slice(0,-2),E=JSON.stringify(E);else if(le.isArray(E)&&c2(E)||(le.isFileList(E)||le.endsWith(T,"[]"))&&(v=le.toArray(E)))return T=XS(T),v.forEach(function(L,C){!(le.isUndefined(L)||L===null)&&e.append(f===!0?T0([T],C,u):f===null?T:T+"[]",d(L))}),!1}return up(E)?!0:(e.append(T0(x,T,u),d(E)),!1)}const _=[],S=Object.assign(f2,{defaultVisitor:g,convertValue:d,isVisitable:up});function y(E,T){if(!le.isUndefined(E)){if(_.indexOf(E)!==-1)throw Error("Circular reference detected in "+T.join("."));_.push(E),le.forEach(E,function(v,D){(!(le.isUndefined(v)||v===null)&&o.call(e,v,le.isString(D)?D.trim():D,T,S))===!0&&y(v,T?T.concat(D):[D])}),_.pop()}}if(!le.isObject(r))throw new TypeError("data must be an object");return y(r),e}function b0(r){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(r).replace(/[!'()~]|%20|%00/g,function(a){return e[a]})}function Np(r,e){this._pairs=[],r&&Mc(r,this,e)}const WS=Np.prototype;WS.append=function(e,n){this._pairs.push([e,n])};WS.toString=function(e){const n=e?function(a){return e.call(this,a,b0)}:b0;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function h2(r){return encodeURIComponent(r).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function qS(r,e,n){if(!e)return r;const a=n&&n.encode||h2;le.isFunction(n)&&(n={serialize:n});const o=n&&n.serialize;let u;if(o?u=o(e,n):u=le.isURLSearchParams(e)?e.toString():new Np(e,n).toString(a),u){const f=r.indexOf("#");f!==-1&&(r=r.slice(0,f)),r+=(r.indexOf("?")===-1?"?":"&")+u}return r}class A0{constructor(){this.handlers=[]}use(e,n,a){return this.handlers.push({fulfilled:e,rejected:n,synchronous:a?a.synchronous:!1,runWhen:a?a.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){le.forEach(this.handlers,function(a){a!==null&&e(a)})}}const YS={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},d2=typeof URLSearchParams<"u"?URLSearchParams:Np,p2=typeof FormData<"u"?FormData:null,m2=typeof Blob<"u"?Blob:null,g2={isBrowser:!0,classes:{URLSearchParams:d2,FormData:p2,Blob:m2},protocols:["http","https","file","blob","url","data"]},Op=typeof window<"u"&&typeof document<"u",cp=typeof navigator=="object"&&navigator||void 0,_2=Op&&(!cp||["ReactNative","NativeScript","NS"].indexOf(cp.product)<0),v2=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",S2=Op&&window.location.href||"http://localhost",x2=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Op,hasStandardBrowserEnv:_2,hasStandardBrowserWebWorkerEnv:v2,navigator:cp,origin:S2},Symbol.toStringTag,{value:"Module"})),Bn={...x2,...g2};function y2(r,e){return Mc(r,new Bn.classes.URLSearchParams,{visitor:function(n,a,o,u){return Bn.isNode&&le.isBuffer(n)?(this.append(a,n.toString("base64")),!1):u.defaultVisitor.apply(this,arguments)},...e})}function E2(r){return le.matchAll(/\w+|\[(\w*)]/g,r).map(e=>e[0]==="[]"?"":e[1]||e[0])}function M2(r){const e={},n=Object.keys(r);let a;const o=n.length;let u;for(a=0;a<o;a++)u=n[a],e[u]=r[u];return e}function jS(r){function e(n,a,o,u){let f=n[u++];if(f==="__proto__")return!0;const h=Number.isFinite(+f),m=u>=n.length;return f=!f&&le.isArray(o)?o.length:f,m?(le.hasOwnProp(o,f)?o[f]=[o[f],a]:o[f]=a,!h):((!o[f]||!le.isObject(o[f]))&&(o[f]=[]),e(n,a,o[f],u)&&le.isArray(o[f])&&(o[f]=M2(o[f])),!h)}if(le.isFormData(r)&&le.isFunction(r.entries)){const n={};return le.forEachEntry(r,(a,o)=>{e(E2(a),o,n,0)}),n}return null}function T2(r,e,n){if(le.isString(r))try{return(e||JSON.parse)(r),le.trim(r)}catch(a){if(a.name!=="SyntaxError")throw a}return(n||JSON.stringify)(r)}const Sl={transitional:YS,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const a=n.getContentType()||"",o=a.indexOf("application/json")>-1,u=le.isObject(e);if(u&&le.isHTMLForm(e)&&(e=new FormData(e)),le.isFormData(e))return o?JSON.stringify(jS(e)):e;if(le.isArrayBuffer(e)||le.isBuffer(e)||le.isStream(e)||le.isFile(e)||le.isBlob(e)||le.isReadableStream(e))return e;if(le.isArrayBufferView(e))return e.buffer;if(le.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let h;if(u){if(a.indexOf("application/x-www-form-urlencoded")>-1)return y2(e,this.formSerializer).toString();if((h=le.isFileList(e))||a.indexOf("multipart/form-data")>-1){const m=this.env&&this.env.FormData;return Mc(h?{"files[]":e}:e,m&&new m,this.formSerializer)}}return u||o?(n.setContentType("application/json",!1),T2(e)):e}],transformResponse:[function(e){const n=this.transitional||Sl.transitional,a=n&&n.forcedJSONParsing,o=this.responseType==="json";if(le.isResponse(e)||le.isReadableStream(e))return e;if(e&&le.isString(e)&&(a&&!this.responseType||o)){const f=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(e,this.parseReviver)}catch(h){if(f)throw h.name==="SyntaxError"?ht.from(h,ht.ERR_BAD_RESPONSE,this,null,this.response):h}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Bn.classes.FormData,Blob:Bn.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};le.forEach(["delete","get","head","post","put","patch"],r=>{Sl.headers[r]={}});const b2=le.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),A2=r=>{const e={};let n,a,o;return r&&r.split(`
`).forEach(function(f){o=f.indexOf(":"),n=f.substring(0,o).trim().toLowerCase(),a=f.substring(o+1).trim(),!(!n||e[n]&&b2[n])&&(n==="set-cookie"?e[n]?e[n].push(a):e[n]=[a]:e[n]=e[n]?e[n]+", "+a:a)}),e},R0=Symbol("internals");function $o(r){return r&&String(r).trim().toLowerCase()}function lc(r){return r===!1||r==null?r:le.isArray(r)?r.map(lc):String(r)}function R2(r){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let a;for(;a=n.exec(r);)e[a[1]]=a[2];return e}const w2=r=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(r.trim());function pd(r,e,n,a,o){if(le.isFunction(a))return a.call(this,e,n);if(o&&(e=n),!!le.isString(e)){if(le.isString(a))return e.indexOf(a)!==-1;if(le.isRegExp(a))return a.test(e)}}function C2(r){return r.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,a)=>n.toUpperCase()+a)}function D2(r,e){const n=le.toCamelCase(" "+e);["get","set","has"].forEach(a=>{Object.defineProperty(r,a+n,{value:function(o,u,f){return this[a].call(this,e,o,u,f)},configurable:!0})})}let Jn=class{constructor(e){e&&this.set(e)}set(e,n,a){const o=this;function u(h,m,d){const g=$o(m);if(!g)throw new Error("header name must be a non-empty string");const _=le.findKey(o,g);(!_||o[_]===void 0||d===!0||d===void 0&&o[_]!==!1)&&(o[_||m]=lc(h))}const f=(h,m)=>le.forEach(h,(d,g)=>u(d,g,m));if(le.isPlainObject(e)||e instanceof this.constructor)f(e,n);else if(le.isString(e)&&(e=e.trim())&&!w2(e))f(A2(e),n);else if(le.isObject(e)&&le.isIterable(e)){let h={},m,d;for(const g of e){if(!le.isArray(g))throw TypeError("Object iterator must return a key-value pair");h[d=g[0]]=(m=h[d])?le.isArray(m)?[...m,g[1]]:[m,g[1]]:g[1]}f(h,n)}else e!=null&&u(n,e,a);return this}get(e,n){if(e=$o(e),e){const a=le.findKey(this,e);if(a){const o=this[a];if(!n)return o;if(n===!0)return R2(o);if(le.isFunction(n))return n.call(this,o,a);if(le.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=$o(e),e){const a=le.findKey(this,e);return!!(a&&this[a]!==void 0&&(!n||pd(this,this[a],a,n)))}return!1}delete(e,n){const a=this;let o=!1;function u(f){if(f=$o(f),f){const h=le.findKey(a,f);h&&(!n||pd(a,a[h],h,n))&&(delete a[h],o=!0)}}return le.isArray(e)?e.forEach(u):u(e),o}clear(e){const n=Object.keys(this);let a=n.length,o=!1;for(;a--;){const u=n[a];(!e||pd(this,this[u],u,e,!0))&&(delete this[u],o=!0)}return o}normalize(e){const n=this,a={};return le.forEach(this,(o,u)=>{const f=le.findKey(a,u);if(f){n[f]=lc(o),delete n[u];return}const h=e?C2(u):String(u).trim();h!==u&&delete n[u],n[h]=lc(o),a[h]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return le.forEach(this,(a,o)=>{a!=null&&a!==!1&&(n[o]=e&&le.isArray(a)?a.join(", "):a)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const a=new this(e);return n.forEach(o=>a.set(o)),a}static accessor(e){const a=(this[R0]=this[R0]={accessors:{}}).accessors,o=this.prototype;function u(f){const h=$o(f);a[h]||(D2(o,f),a[h]=!0)}return le.isArray(e)?e.forEach(u):u(e),this}};Jn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);le.reduceDescriptors(Jn.prototype,({value:r},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>r,set(a){this[n]=a}}});le.freezeMethods(Jn);function md(r,e){const n=this||Sl,a=e||n,o=Jn.from(a.headers);let u=a.data;return le.forEach(r,function(h){u=h.call(n,u,o.normalize(),e?e.status:void 0)}),o.normalize(),u}function ZS(r){return!!(r&&r.__CANCEL__)}function Ks(r,e,n){ht.call(this,r??"canceled",ht.ERR_CANCELED,e,n),this.name="CanceledError"}le.inherits(Ks,ht,{__CANCEL__:!0});function KS(r,e,n){const a=n.config.validateStatus;!n.status||!a||a(n.status)?r(n):e(new ht("Request failed with status code "+n.status,[ht.ERR_BAD_REQUEST,ht.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function U2(r){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(r);return e&&e[1]||""}function L2(r,e){r=r||10;const n=new Array(r),a=new Array(r);let o=0,u=0,f;return e=e!==void 0?e:1e3,function(m){const d=Date.now(),g=a[u];f||(f=d),n[o]=m,a[o]=d;let _=u,S=0;for(;_!==o;)S+=n[_++],_=_%r;if(o=(o+1)%r,o===u&&(u=(u+1)%r),d-f<e)return;const y=g&&d-g;return y?Math.round(S*1e3/y):void 0}}function N2(r,e){let n=0,a=1e3/e,o,u;const f=(d,g=Date.now())=>{n=g,o=null,u&&(clearTimeout(u),u=null),r(...d)};return[(...d)=>{const g=Date.now(),_=g-n;_>=a?f(d,g):(o=d,u||(u=setTimeout(()=>{u=null,f(o)},a-_)))},()=>o&&f(o)]}const pc=(r,e,n=3)=>{let a=0;const o=L2(50,250);return N2(u=>{const f=u.loaded,h=u.lengthComputable?u.total:void 0,m=f-a,d=o(m),g=f<=h;a=f;const _={loaded:f,total:h,progress:h?f/h:void 0,bytes:m,rate:d||void 0,estimated:d&&h&&g?(h-f)/d:void 0,event:u,lengthComputable:h!=null,[e?"download":"upload"]:!0};r(_)},n)},w0=(r,e)=>{const n=r!=null;return[a=>e[0]({lengthComputable:n,total:r,loaded:a}),e[1]]},C0=r=>(...e)=>le.asap(()=>r(...e)),O2=Bn.hasStandardBrowserEnv?((r,e)=>n=>(n=new URL(n,Bn.origin),r.protocol===n.protocol&&r.host===n.host&&(e||r.port===n.port)))(new URL(Bn.origin),Bn.navigator&&/(msie|trident)/i.test(Bn.navigator.userAgent)):()=>!0,P2=Bn.hasStandardBrowserEnv?{write(r,e,n,a,o,u){const f=[r+"="+encodeURIComponent(e)];le.isNumber(n)&&f.push("expires="+new Date(n).toGMTString()),le.isString(a)&&f.push("path="+a),le.isString(o)&&f.push("domain="+o),u===!0&&f.push("secure"),document.cookie=f.join("; ")},read(r){const e=document.cookie.match(new RegExp("(^|;\\s*)("+r+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(r){this.write(r,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function B2(r){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(r)}function I2(r,e){return e?r.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):r}function QS(r,e,n){let a=!B2(e);return r&&(a||n==!1)?I2(r,e):e}const D0=r=>r instanceof Jn?{...r}:r;function Ir(r,e){e=e||{};const n={};function a(d,g,_,S){return le.isPlainObject(d)&&le.isPlainObject(g)?le.merge.call({caseless:S},d,g):le.isPlainObject(g)?le.merge({},g):le.isArray(g)?g.slice():g}function o(d,g,_,S){if(le.isUndefined(g)){if(!le.isUndefined(d))return a(void 0,d,_,S)}else return a(d,g,_,S)}function u(d,g){if(!le.isUndefined(g))return a(void 0,g)}function f(d,g){if(le.isUndefined(g)){if(!le.isUndefined(d))return a(void 0,d)}else return a(void 0,g)}function h(d,g,_){if(_ in e)return a(d,g);if(_ in r)return a(void 0,d)}const m={url:u,method:u,data:u,baseURL:f,transformRequest:f,transformResponse:f,paramsSerializer:f,timeout:f,timeoutMessage:f,withCredentials:f,withXSRFToken:f,adapter:f,responseType:f,xsrfCookieName:f,xsrfHeaderName:f,onUploadProgress:f,onDownloadProgress:f,decompress:f,maxContentLength:f,maxBodyLength:f,beforeRedirect:f,transport:f,httpAgent:f,httpsAgent:f,cancelToken:f,socketPath:f,responseEncoding:f,validateStatus:h,headers:(d,g,_)=>o(D0(d),D0(g),_,!0)};return le.forEach(Object.keys({...r,...e}),function(g){const _=m[g]||o,S=_(r[g],e[g],g);le.isUndefined(S)&&_!==h||(n[g]=S)}),n}const JS=r=>{const e=Ir({},r);let{data:n,withXSRFToken:a,xsrfHeaderName:o,xsrfCookieName:u,headers:f,auth:h}=e;if(e.headers=f=Jn.from(f),e.url=qS(QS(e.baseURL,e.url,e.allowAbsoluteUrls),r.params,r.paramsSerializer),h&&f.set("Authorization","Basic "+btoa((h.username||"")+":"+(h.password?unescape(encodeURIComponent(h.password)):""))),le.isFormData(n)){if(Bn.hasStandardBrowserEnv||Bn.hasStandardBrowserWebWorkerEnv)f.setContentType(void 0);else if(le.isFunction(n.getHeaders)){const m=n.getHeaders(),d=["content-type","content-length"];Object.entries(m).forEach(([g,_])=>{d.includes(g.toLowerCase())&&f.set(g,_)})}}if(Bn.hasStandardBrowserEnv&&(a&&le.isFunction(a)&&(a=a(e)),a||a!==!1&&O2(e.url))){const m=o&&u&&P2.read(u);m&&f.set(o,m)}return e},F2=typeof XMLHttpRequest<"u",z2=F2&&function(r){return new Promise(function(n,a){const o=JS(r);let u=o.data;const f=Jn.from(o.headers).normalize();let{responseType:h,onUploadProgress:m,onDownloadProgress:d}=o,g,_,S,y,E;function T(){y&&y(),E&&E(),o.cancelToken&&o.cancelToken.unsubscribe(g),o.signal&&o.signal.removeEventListener("abort",g)}let x=new XMLHttpRequest;x.open(o.method.toUpperCase(),o.url,!0),x.timeout=o.timeout;function v(){if(!x)return;const L=Jn.from("getAllResponseHeaders"in x&&x.getAllResponseHeaders()),P={data:!h||h==="text"||h==="json"?x.responseText:x.response,status:x.status,statusText:x.statusText,headers:L,config:r,request:x};KS(function(I){n(I),T()},function(I){a(I),T()},P),x=null}"onloadend"in x?x.onloadend=v:x.onreadystatechange=function(){!x||x.readyState!==4||x.status===0&&!(x.responseURL&&x.responseURL.indexOf("file:")===0)||setTimeout(v)},x.onabort=function(){x&&(a(new ht("Request aborted",ht.ECONNABORTED,r,x)),x=null)},x.onerror=function(C){const P=C&&C.message?C.message:"Network Error",F=new ht(P,ht.ERR_NETWORK,r,x);F.event=C||null,a(F),x=null},x.ontimeout=function(){let C=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const P=o.transitional||YS;o.timeoutErrorMessage&&(C=o.timeoutErrorMessage),a(new ht(C,P.clarifyTimeoutError?ht.ETIMEDOUT:ht.ECONNABORTED,r,x)),x=null},u===void 0&&f.setContentType(null),"setRequestHeader"in x&&le.forEach(f.toJSON(),function(C,P){x.setRequestHeader(P,C)}),le.isUndefined(o.withCredentials)||(x.withCredentials=!!o.withCredentials),h&&h!=="json"&&(x.responseType=o.responseType),d&&([S,E]=pc(d,!0),x.addEventListener("progress",S)),m&&x.upload&&([_,y]=pc(m),x.upload.addEventListener("progress",_),x.upload.addEventListener("loadend",y)),(o.cancelToken||o.signal)&&(g=L=>{x&&(a(!L||L.type?new Ks(null,r,x):L),x.abort(),x=null)},o.cancelToken&&o.cancelToken.subscribe(g),o.signal&&(o.signal.aborted?g():o.signal.addEventListener("abort",g)));const D=U2(o.url);if(D&&Bn.protocols.indexOf(D)===-1){a(new ht("Unsupported protocol "+D+":",ht.ERR_BAD_REQUEST,r));return}x.send(u||null)})},H2=(r,e)=>{const{length:n}=r=r?r.filter(Boolean):[];if(e||n){let a=new AbortController,o;const u=function(d){if(!o){o=!0,h();const g=d instanceof Error?d:this.reason;a.abort(g instanceof ht?g:new Ks(g instanceof Error?g.message:g))}};let f=e&&setTimeout(()=>{f=null,u(new ht(`timeout ${e} of ms exceeded`,ht.ETIMEDOUT))},e);const h=()=>{r&&(f&&clearTimeout(f),f=null,r.forEach(d=>{d.unsubscribe?d.unsubscribe(u):d.removeEventListener("abort",u)}),r=null)};r.forEach(d=>d.addEventListener("abort",u));const{signal:m}=a;return m.unsubscribe=()=>le.asap(h),m}},G2=function*(r,e){let n=r.byteLength;if(n<e){yield r;return}let a=0,o;for(;a<n;)o=a+e,yield r.slice(a,o),a=o},V2=async function*(r,e){for await(const n of k2(r))yield*G2(n,e)},k2=async function*(r){if(r[Symbol.asyncIterator]){yield*r;return}const e=r.getReader();try{for(;;){const{done:n,value:a}=await e.read();if(n)break;yield a}}finally{await e.cancel()}},U0=(r,e,n,a)=>{const o=V2(r,e);let u=0,f,h=m=>{f||(f=!0,a&&a(m))};return new ReadableStream({async pull(m){try{const{done:d,value:g}=await o.next();if(d){h(),m.close();return}let _=g.byteLength;if(n){let S=u+=_;n(S)}m.enqueue(new Uint8Array(g))}catch(d){throw h(d),d}},cancel(m){return h(m),o.return()}},{highWaterMark:2})},L0=64*1024,{isFunction:$u}=le,X2=(({Request:r,Response:e})=>({Request:r,Response:e}))(le.global),{ReadableStream:N0,TextEncoder:O0}=le.global,P0=(r,...e)=>{try{return!!r(...e)}catch{return!1}},W2=r=>{r=le.merge.call({skipUndefined:!0},X2,r);const{fetch:e,Request:n,Response:a}=r,o=e?$u(e):typeof fetch=="function",u=$u(n),f=$u(a);if(!o)return!1;const h=o&&$u(N0),m=o&&(typeof O0=="function"?(E=>T=>E.encode(T))(new O0):async E=>new Uint8Array(await new n(E).arrayBuffer())),d=u&&h&&P0(()=>{let E=!1;const T=new n(Bn.origin,{body:new N0,method:"POST",get duplex(){return E=!0,"half"}}).headers.has("Content-Type");return E&&!T}),g=f&&h&&P0(()=>le.isReadableStream(new a("").body)),_={stream:g&&(E=>E.body)};o&&["text","arrayBuffer","blob","formData","stream"].forEach(E=>{!_[E]&&(_[E]=(T,x)=>{let v=T&&T[E];if(v)return v.call(T);throw new ht(`Response type '${E}' is not supported`,ht.ERR_NOT_SUPPORT,x)})});const S=async E=>{if(E==null)return 0;if(le.isBlob(E))return E.size;if(le.isSpecCompliantForm(E))return(await new n(Bn.origin,{method:"POST",body:E}).arrayBuffer()).byteLength;if(le.isArrayBufferView(E)||le.isArrayBuffer(E))return E.byteLength;if(le.isURLSearchParams(E)&&(E=E+""),le.isString(E))return(await m(E)).byteLength},y=async(E,T)=>{const x=le.toFiniteNumber(E.getContentLength());return x??S(T)};return async E=>{let{url:T,method:x,data:v,signal:D,cancelToken:L,timeout:C,onDownloadProgress:P,onUploadProgress:F,responseType:I,headers:X,withCredentials:U="same-origin",fetchOptions:R}=JS(E),k=e||fetch;I=I?(I+"").toLowerCase():"text";let J=H2([D,L&&L.toAbortSignal()],C),ue=null;const me=J&&J.unsubscribe&&(()=>{J.unsubscribe()});let he;try{if(F&&d&&x!=="get"&&x!=="head"&&(he=await y(X,v))!==0){let Q=new n(T,{method:"POST",body:v,duplex:"half"}),ve;if(le.isFormData(v)&&(ve=Q.headers.get("content-type"))&&X.setContentType(ve),Q.body){const[be,Ne]=w0(he,pc(C0(F)));v=U0(Q.body,L0,be,Ne)}}le.isString(U)||(U=U?"include":"omit");const B=u&&"credentials"in n.prototype,Z={...R,signal:J,method:x.toUpperCase(),headers:X.normalize().toJSON(),body:v,duplex:"half",credentials:B?U:void 0};ue=u&&new n(T,Z);let q=await(u?k(ue,R):k(T,Z));const Te=g&&(I==="stream"||I==="response");if(g&&(P||Te&&me)){const Q={};["status","statusText","headers"].forEach(Ve=>{Q[Ve]=q[Ve]});const ve=le.toFiniteNumber(q.headers.get("content-length")),[be,Ne]=P&&w0(ve,pc(C0(P),!0))||[];q=new a(U0(q.body,L0,be,()=>{Ne&&Ne(),me&&me()}),Q)}I=I||"text";let N=await _[le.findKey(_,I)||"text"](q,E);return!Te&&me&&me(),await new Promise((Q,ve)=>{KS(Q,ve,{data:N,headers:Jn.from(q.headers),status:q.status,statusText:q.statusText,config:E,request:ue})})}catch(B){throw me&&me(),B&&B.name==="TypeError"&&/Load failed|fetch/i.test(B.message)?Object.assign(new ht("Network Error",ht.ERR_NETWORK,E,ue),{cause:B.cause||B}):ht.from(B,B&&B.code,E,ue)}}},q2=new Map,$S=r=>{let e=r?r.env:{};const{fetch:n,Request:a,Response:o}=e,u=[a,o,n];let f=u.length,h=f,m,d,g=q2;for(;h--;)m=u[h],d=g.get(m),d===void 0&&g.set(m,d=h?new Map:W2(e)),g=d;return d};$S();const fp={http:u2,xhr:z2,fetch:{get:$S}};le.forEach(fp,(r,e)=>{if(r){try{Object.defineProperty(r,"name",{value:e})}catch{}Object.defineProperty(r,"adapterName",{value:e})}});const B0=r=>`- ${r}`,Y2=r=>le.isFunction(r)||r===null||r===!1,ex={getAdapter:(r,e)=>{r=le.isArray(r)?r:[r];const{length:n}=r;let a,o;const u={};for(let f=0;f<n;f++){a=r[f];let h;if(o=a,!Y2(a)&&(o=fp[(h=String(a)).toLowerCase()],o===void 0))throw new ht(`Unknown adapter '${h}'`);if(o&&(le.isFunction(o)||(o=o.get(e))))break;u[h||"#"+f]=o}if(!o){const f=Object.entries(u).map(([m,d])=>`adapter ${m} `+(d===!1?"is not supported by the environment":"is not available in the build"));let h=n?f.length>1?`since :
`+f.map(B0).join(`
`):" "+B0(f[0]):"as no adapter specified";throw new ht("There is no suitable adapter to dispatch the request "+h,"ERR_NOT_SUPPORT")}return o},adapters:fp};function gd(r){if(r.cancelToken&&r.cancelToken.throwIfRequested(),r.signal&&r.signal.aborted)throw new Ks(null,r)}function I0(r){return gd(r),r.headers=Jn.from(r.headers),r.data=md.call(r,r.transformRequest),["post","put","patch"].indexOf(r.method)!==-1&&r.headers.setContentType("application/x-www-form-urlencoded",!1),ex.getAdapter(r.adapter||Sl.adapter,r)(r).then(function(a){return gd(r),a.data=md.call(r,r.transformResponse,a),a.headers=Jn.from(a.headers),a},function(a){return ZS(a)||(gd(r),a&&a.response&&(a.response.data=md.call(r,r.transformResponse,a.response),a.response.headers=Jn.from(a.response.headers))),Promise.reject(a)})}const tx="1.12.2",Tc={};["object","boolean","number","function","string","symbol"].forEach((r,e)=>{Tc[r]=function(a){return typeof a===r||"a"+(e<1?"n ":" ")+r}});const F0={};Tc.transitional=function(e,n,a){function o(u,f){return"[Axios v"+tx+"] Transitional option '"+u+"'"+f+(a?". "+a:"")}return(u,f,h)=>{if(e===!1)throw new ht(o(f," has been removed"+(n?" in "+n:"")),ht.ERR_DEPRECATED);return n&&!F0[f]&&(F0[f]=!0,console.warn(o(f," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(u,f,h):!0}};Tc.spelling=function(e){return(n,a)=>(console.warn(`${a} is likely a misspelling of ${e}`),!0)};function j2(r,e,n){if(typeof r!="object")throw new ht("options must be an object",ht.ERR_BAD_OPTION_VALUE);const a=Object.keys(r);let o=a.length;for(;o-- >0;){const u=a[o],f=e[u];if(f){const h=r[u],m=h===void 0||f(h,u,r);if(m!==!0)throw new ht("option "+u+" must be "+m,ht.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new ht("Unknown option "+u,ht.ERR_BAD_OPTION)}}const uc={assertOptions:j2,validators:Tc},Pi=uc.validators;let Nr=class{constructor(e){this.defaults=e||{},this.interceptors={request:new A0,response:new A0}}async request(e,n){try{return await this._request(e,n)}catch(a){if(a instanceof Error){let o={};Error.captureStackTrace?Error.captureStackTrace(o):o=new Error;const u=o.stack?o.stack.replace(/^.+\n/,""):"";try{a.stack?u&&!String(a.stack).endsWith(u.replace(/^.+\n.+\n/,""))&&(a.stack+=`
`+u):a.stack=u}catch{}}throw a}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Ir(this.defaults,n);const{transitional:a,paramsSerializer:o,headers:u}=n;a!==void 0&&uc.assertOptions(a,{silentJSONParsing:Pi.transitional(Pi.boolean),forcedJSONParsing:Pi.transitional(Pi.boolean),clarifyTimeoutError:Pi.transitional(Pi.boolean)},!1),o!=null&&(le.isFunction(o)?n.paramsSerializer={serialize:o}:uc.assertOptions(o,{encode:Pi.function,serialize:Pi.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),uc.assertOptions(n,{baseUrl:Pi.spelling("baseURL"),withXsrfToken:Pi.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let f=u&&le.merge(u.common,u[n.method]);u&&le.forEach(["delete","get","head","post","put","patch","common"],E=>{delete u[E]}),n.headers=Jn.concat(f,u);const h=[];let m=!0;this.interceptors.request.forEach(function(T){typeof T.runWhen=="function"&&T.runWhen(n)===!1||(m=m&&T.synchronous,h.unshift(T.fulfilled,T.rejected))});const d=[];this.interceptors.response.forEach(function(T){d.push(T.fulfilled,T.rejected)});let g,_=0,S;if(!m){const E=[I0.bind(this),void 0];for(E.unshift(...h),E.push(...d),S=E.length,g=Promise.resolve(n);_<S;)g=g.then(E[_++],E[_++]);return g}S=h.length;let y=n;for(;_<S;){const E=h[_++],T=h[_++];try{y=E(y)}catch(x){T.call(this,x);break}}try{g=I0.call(this,y)}catch(E){return Promise.reject(E)}for(_=0,S=d.length;_<S;)g=g.then(d[_++],d[_++]);return g}getUri(e){e=Ir(this.defaults,e);const n=QS(e.baseURL,e.url,e.allowAbsoluteUrls);return qS(n,e.params,e.paramsSerializer)}};le.forEach(["delete","get","head","options"],function(e){Nr.prototype[e]=function(n,a){return this.request(Ir(a||{},{method:e,url:n,data:(a||{}).data}))}});le.forEach(["post","put","patch"],function(e){function n(a){return function(u,f,h){return this.request(Ir(h||{},{method:e,headers:a?{"Content-Type":"multipart/form-data"}:{},url:u,data:f}))}}Nr.prototype[e]=n(),Nr.prototype[e+"Form"]=n(!0)});let Z2=class nx{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(u){n=u});const a=this;this.promise.then(o=>{if(!a._listeners)return;let u=a._listeners.length;for(;u-- >0;)a._listeners[u](o);a._listeners=null}),this.promise.then=o=>{let u;const f=new Promise(h=>{a.subscribe(h),u=h}).then(o);return f.cancel=function(){a.unsubscribe(u)},f},e(function(u,f,h){a.reason||(a.reason=new Ks(u,f,h),n(a.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=a=>{e.abort(a)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new nx(function(o){e=o}),cancel:e}}};function K2(r){return function(n){return r.apply(null,n)}}function Q2(r){return le.isObject(r)&&r.isAxiosError===!0}const hp={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(hp).forEach(([r,e])=>{hp[e]=r});function ix(r){const e=new Nr(r),n=OS(Nr.prototype.request,e);return le.extend(n,Nr.prototype,e,{allOwnKeys:!0}),le.extend(n,e,null,{allOwnKeys:!0}),n.create=function(o){return ix(Ir(r,o))},n}const sn=ix(Sl);sn.Axios=Nr;sn.CanceledError=Ks;sn.CancelToken=Z2;sn.isCancel=ZS;sn.VERSION=tx;sn.toFormData=Mc;sn.AxiosError=ht;sn.Cancel=sn.CanceledError;sn.all=function(e){return Promise.all(e)};sn.spread=K2;sn.isAxiosError=Q2;sn.mergeConfig=Ir;sn.AxiosHeaders=Jn;sn.formToJSON=r=>jS(le.isHTMLForm(r)?new FormData(r):r);sn.getAdapter=ex.getAdapter;sn.HttpStatusCode=hp;sn.default=sn;const{Axios:mD,AxiosError:gD,CanceledError:_D,isCancel:vD,CancelToken:SD,VERSION:xD,all:yD,Cancel:ED,isAxiosError:MD,spread:TD,toFormData:bD,AxiosHeaders:AD,HttpStatusCode:RD,formToJSON:wD,getAdapter:CD,mergeConfig:DD}=sn,J2="_chatContainer_l0721_1",$2="_chat__header_l0721_13",eD="_pulse_l0721_1",tD="_chat__messages_l0721_57",nD="_chat__message_l0721_57",iD="_messageSlideIn_l0721_1",aD="_typing_l0721_1",rD="_chat__input_l0721_217",sD="_chat__container_l0721_291",Cn={chatContainer:J2,chat__header:$2,"chat__status-indicator":"_chat__status-indicator_l0721_27","chat__status-dot":"_chat__status-dot_l0721_34","chat__status-dot--connected":"_chat__status-dot--connected_l0721_40","chat__status-dot--loading":"_chat__status-dot--loading_l0721_44",pulse:eD,chat__messages:tD,"chat__welcome-message":"_chat__welcome-message_l0721_76",chat__message:nD,messageSlideIn:iD,"chat__message--user":"_chat__message--user_l0721_97","chat__message-content":"_chat__message-content_l0721_100","chat__message--assistant":"_chat__message--assistant_l0721_118","chat__typing-indicator":"_chat__typing-indicator_l0721_183",typing:aD,chat__input:rD,"chat__send-button":"_chat__send-button_l0721_255",chat__container:sD};function oD(){const[r,e]=ge.useState([]),[n,a]=ge.useState(""),[o,u]=ge.useState(!1),[f,h]=ge.useState(!1),m=ge.useRef(null),d=()=>{m.current?.scrollIntoView({behavior:"smooth"})};ge.useEffect(()=>{d()},[r]),ge.useEffect(()=>{const S=async()=>{try{const E=await sn.post("https://ok-production-92f2.up.railway.app /api/ok-e",{messages:[{role:"user",content:"test"}],model:"gpt-4o-mini",temperature:.7});h(!0)}catch(E){console.error("Server connection error:",E),h(!1)}};S();const y=setInterval(S,1e4);return()=>clearInterval(y)},[]);const g=async()=>{if(!n.trim()||o)return;const S={role:"user",content:n},y=[...r,S];e(y),a(""),u(!0);try{const T={role:"assistant",content:(await sn.post("https://ok-production-92f2.up.railway.app /api/ok-e",{messages:y,model:"gpt-4o-mini",temperature:.7})).data.message.content};e(x=>[...x,T])}catch(E){console.error("Error:",E);const T={role:"assistant",content:"죄송합니다. 서버에 연결할 수 없습니다."};e(x=>[...x,T])}finally{u(!1)}},_=S=>{S.key==="Enter"&&!S.shiftKey&&(S.preventDefault(),g())};return ke.jsxs("div",{className:Cn.chat__container,children:[ke.jsxs("div",{className:Cn.chat__header,children:[ke.jsx("h3",{children:"OK-E Chat"}),ke.jsxs("div",{className:Cn["chat__status-indicator"],children:[ke.jsx("div",{className:`${Cn["chat__status-dot"]} ${f?Cn["chat__status-dot--connected"]:Cn["chat__status-dot--disconnected"]}`}),ke.jsx("span",{children:f?"서버 연결됨":"서버 연결 끊김"})]})]}),ke.jsxs("div",{className:Cn.chat__messages,children:[r.length===0&&ke.jsx("div",{className:Cn["chat__welcome-message"],children:ke.jsx("p",{children:"안녕하세요! OK-E와 대화해보세요."})}),r.map((S,y)=>ke.jsx("div",{className:`${Cn.chat__message} ${Cn[`chat__message--${S.role}`]}`,children:ke.jsx("div",{className:Cn["chat__message-content"],children:S.content})},y)),o&&ke.jsx("div",{className:`${Cn.chat__message} ${Cn["chat__message--assistant"]}`,children:ke.jsx("div",{className:Cn["chat__message-content"],children:ke.jsxs("div",{className:Cn["chat__typing-indicator"],children:[ke.jsx("span",{}),ke.jsx("span",{}),ke.jsx("span",{})]})})}),ke.jsx("div",{ref:m})]}),ke.jsxs("div",{className:Cn.chat__input,children:[ke.jsx("textarea",{value:n,onChange:S=>a(S.target.value),onKeyPress:_,placeholder:"메시지를 입력하세요...",disabled:o,rows:1}),ke.jsx("button",{onClick:g,disabled:!n.trim()||o,className:Cn["chat__send-button"],children:"전송"})]})]})}const lD="_okEContainer_1ayoi_1",uD="_okEHeader_1ayoi_7",z0={okEContainer:lD,okEHeader:uD};function cD(){return ke.jsxs("div",{className:z0.okEContainer,children:[ke.jsxs("div",{className:z0.okEHeader,children:[ke.jsx("h1",{children:"OK-E"}),ke.jsx("p",{children:"AI와 대화하며 새로운 아이디어를 탐색해보세요"})]}),ke.jsx(oD,{})]})}function fD(){return ke.jsxs(sM,{children:[ke.jsx(ha,{path:"/",element:ke.jsx(aC,{})}),ke.jsx(ha,{path:"/main",element:ke.jsx(lC,{})}),ke.jsx(ha,{path:"/system-before",element:ke.jsx(fC,{})}),ke.jsx(ha,{path:"/design-guide",element:ke.jsx(pC,{})}),ke.jsx(ha,{path:"/tablet",element:ke.jsx(_C,{})}),ke.jsx(ha,{path:"/smart-watch",element:ke.jsx(xC,{})}),ke.jsx(ha,{path:"/kiosk",element:ke.jsx(MC,{})}),ke.jsx(ha,{path:"/ok-e",element:ke.jsx(cD,{})})]})}gE.createRoot(document.getElementById("root")).render(ke.jsx(ge.StrictMode,{children:ke.jsx(CM,{basename:"/OK/",children:ke.jsx(fD,{})})}));
