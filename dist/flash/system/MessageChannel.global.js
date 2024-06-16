"use strict";(()=>{var o=class{static CLOSED;static CLOSING;static OPEN};var s=class{listeners=new Map;addEventListener(e,t,n=!1,i=0,a=!1){this.listeners.has(e)||this.listeners.set(e,[]);let r=this.listeners.get(e);if(r){let u=r.findIndex(m=>m.priority<i),l={priority:i,listener:t,useCapture:n};a&&(l.listener=new WeakRef(t)),u===-1?r.push(l):r.splice(u,0,l)}}dispatchEvent(e){let t=this.listeners.get(e.type);if(t){for(let{listener:n}of t)if(!(n instanceof WeakRef))n(e);else{let i=n.deref();i&&i(e)}return!0}return!1}hasEventListener(e){return this.listeners.has(e)}removeEventListener(e,t,n=!1){let i=this.listeners.get(e),a=r=>r.listener instanceof WeakRef?r.listener.deref()!==t:r.listener!==t;i&&this.listeners.set(e,i.filter(r=>a(r)))}willTrigger(e){return this.hasEventListener(e)}};var c=class extends s{#e;#t;#n;#r;#i;#o;constructor(e,t,n){super(),this.#s(e,t,n)}#s(e,t,n){this.#e=o.OPEN,this.#t=e,this.#n=new DataView(e,t,n),this.#r=t,this.#i=n,this.#o=!1}get state(){return this.#e}get buffer(){return this.#t}get view(){return this.#n}get byteOffset(){return this.#r}get byteLength(){return this.#i}get isClosed(){return this.#o}};})();
//# sourceMappingURL=MessageChannel.global.js.map