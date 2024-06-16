"use strict";var v=Object.defineProperty;var T=Object.getOwnPropertyDescriptor;var D=Object.getOwnPropertyNames;var w=Object.prototype.hasOwnProperty;var L=(t,e)=>{for(var n in e)v(t,n,{get:e[n],enumerable:!0})},M=(t,e,n,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of D(e))!w.call(t,r)&&r!==n&&v(t,r,{get:()=>e[r],enumerable:!(o=T(e,r))||o.enumerable});return t};var k=t=>M(v({},"__esModule",{value:!0}),t);var R={};L(R,{AS_System:()=>E});module.exports=k(R);function y(t,...e){if(typeof t!="string")throw new TypeError("command must be a string");let n=e.length===0?[""]:e.map(o=>{if(typeof o=="string"||typeof o=="number")return o.toString();throw new TypeError("args must be strings or numbers")});switch(t.toLowerCase()){case"fullscreen":document.documentElement.requestFullscreen();break;case"allowscale":P(n[0]==="true");break;case"quit":window.close();break;case"showmenu":I(n[0]==="true");break;case"exec":break;case"trapallkeys":F(n[0]==="true");break;default:let o=new URL(window.location.href),r=new URLSearchParams(o.search);r.set("fscommand",t),r.set("fsargs",n.join(",")),o.search=r.toString(),window.location.href=o.toString();break}}var x=globalThis;function P(t){x.AS_allowscale=t}function I(t){x.AS_showmenu=t;let e=new CustomEvent("AS_showmenu",{detail:t});globalThis.dispatchEvent(e)}function F(t){x.AS_trapallkeys=t;let e=new CustomEvent("AS_trapallkeys",{detail:t})}var a=class t{static currentDomain=new t;get parentDomain(){return this.#e}#e;#t=new Map;constructor(e,n){this.#e=e||t.currentDomain,t.currentDomain&&this!==t.currentDomain?this.#e.#t.set(n+"",this):this.#e=null}getDefinition(e){return this.#t.get(e)}hasDefinition(e){return this.#t.has(e)}};var l=class{};var c=class{};var m=class{};var p=class{};var s=class{static CLOSED;static CLOSING;static OPEN};var g=class{listeners=new Map;addEventListener(e,n,o=!1,r=0,S=!1){this.listeners.has(e)||this.listeners.set(e,[]);let i=this.listeners.get(e);if(i){let _=i.findIndex(C=>C.priority<r),A={priority:r,listener:n,useCapture:o};S&&(A.listener=new WeakRef(n)),_===-1?i.push(A):i.splice(_,0,A)}}dispatchEvent(e){let n=this.listeners.get(e.type);if(n){for(let{listener:o}of n)if(!(o instanceof WeakRef))o(e);else{let r=o.deref();r&&r(e)}return!0}return!1}hasEventListener(e){return this.listeners.has(e)}removeEventListener(e,n,o=!1){let r=this.listeners.get(e),S=i=>i.listener instanceof WeakRef?i.listener.deref()!==n:i.listener!==n;r&&this.listeners.set(e,r.filter(i=>S(i)))}willTrigger(e){return this.hasEventListener(e)}};var u=class extends g{#e;#t;#n;#o;#r;#i;constructor(e,n,o){super(),this.#s(e,n,o)}#s(e,n,o){this.#e=s.OPEN,this.#t=e,this.#n=new DataView(e,n,o),this.#o=n,this.#r=o,this.#i=!1}get state(){return this.#e}get buffer(){return this.#t}get view(){return this.#n}get byteOffset(){return this.#o}get byteLength(){return this.#r}get isClosed(){return this.#i}};var f=class{};var d=class{};var h=class{};var b=class{};var E=class{fxcommand=y.bind(this);ApplicationDomain=a;Capabilities=l;IME=c;IMEConversionMode=m;LoaderContext=p;MessageChannel=u;MessageChannelState=s;Security=f;SecurityDomain=d;SecurityPanel=h;System=b};
//# sourceMappingURL=index.js.map