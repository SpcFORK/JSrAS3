"use strict";(()=>{var f=class{listeners=new Map;addEventListener(e,s,i=!1,n=0,r=!1){this.listeners.has(e)||this.listeners.set(e,[]);let t=this.listeners.get(e);if(t){let l=t.findIndex(a=>a.priority<n),o={priority:n,listener:s,useCapture:i};r&&(o.listener=new WeakRef(s)),l===-1?t.push(o):t.splice(l,0,o)}}dispatchEvent(e){let s=this.listeners.get(e.type);if(s){for(let{listener:i}of s)if(!(i instanceof WeakRef))i(e);else{let n=i.deref();n&&n(e)}return!0}return!1}hasEventListener(e){return this.listeners.has(e)}removeEventListener(e,s,i=!1){let n=this.listeners.get(e),r=t=>t.listener instanceof WeakRef?t.listener.deref()!==s:t.listener!==s;n&&this.listeners.set(e,n.filter(t=>r(t)))}willTrigger(e){return this.hasEventListener(e)}};})();
//# sourceMappingURL=EventDispatcher.global.js.map