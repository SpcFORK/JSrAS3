"use strict";(()=>{var a=class{listeners=new Map;addEventListener(e,n,s=!1,r=0,i=!1){this.listeners.has(e)||this.listeners.set(e,[]);let t=this.listeners.get(e);if(t){let l=t.findIndex(f=>f.priority<r),o={priority:r,listener:n,useCapture:s};i&&(o.listener=new WeakRef(n)),l===-1?t.push(o):t.splice(l,0,o)}}dispatchEvent(e){let n=this.listeners.get(e.type);if(n){for(let{listener:s}of n)if(!(s instanceof WeakRef))s(e);else{let r=s.deref();r&&r(e)}return!0}return!1}hasEventListener(e){return this.listeners.has(e)}removeEventListener(e,n,s=!1){let r=this.listeners.get(e),i=t=>t.listener instanceof WeakRef?t.listener.deref()!==n:t.listener!==n;r&&this.listeners.set(e,r.filter(t=>i(t)))}willTrigger(e){return this.hasEventListener(e)}};})();
//# sourceMappingURL=index.global.js.map