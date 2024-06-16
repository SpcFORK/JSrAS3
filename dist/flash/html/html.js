"use strict";var l=Object.defineProperty;var g=Object.getOwnPropertyDescriptor;var h=Object.getOwnPropertyNames;var c=Object.prototype.hasOwnProperty;var f=(a,t)=>{for(var e in t)l(a,e,{get:t[e],enumerable:!0})},u=(a,t,e,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of h(t))!c.call(a,r)&&r!==e&&l(a,r,{get:()=>t[r],enumerable:!(s=g(t,r))||s.enumerable});return a};var b=a=>u(l({},"__esModule",{value:!0}),a);var v={};f(v,{HTMLParser:()=>o});module.exports=b(v);var o=class a{constructor(t,e){this.html=t;this.last=t,this.handler=e,this.parseHTML()}static makeMap(t){let e=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)e[s[r]]=!0;return e}static startTag=/^<([-A-Za-z0-9_]+)((?:\s+[-A-Za-z0-9_]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/;static endTag=/^<\/([-A-Za-z0-9_]+)[^>]*>/;static attr=/([-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g;static empty=this.makeMap("area,base,basefont,br,col,frame,hr,img,input,isindex,link,meta,param,embed");static block=this.makeMap("address,applet,blockquote,button,center,dd,del,dir,div,dl,dt,fieldset,form,frameset,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,p,pre,script,table,tbody,td,tfoot,th,thead,tr,ul");static inline=this.makeMap("a,abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var");static closeSelf=this.makeMap("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr");static fillAttrs=this.makeMap("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected");static special=this.makeMap("script,style");stack=[];last;handler;top(){return this.stack[this.stack.length-1]}parseHTML(){let t,e,s,r=this.html;for(;r;){if(e=!0,!this.top()||!a.special[this.top()]?{index:t,html:r}=this.handleNode(t,s,r,e):r=this.handleScript(r),r==this.last)throw"Parse Error: "+r;this.last=r}this.parseEndTag()}handleNode(t,e,s,r){if({index:t,match:e}=this.handleNormalNode(s,r,e),r){t=s.indexOf("<");let n=t<0?s:s.substring(0,t);s=t<0?"":s.substring(t),this.dumpHandlerChars(n)}return{index:t,html:s}}dumpHandlerChars(t){this.handler.chars&&this.handler.chars(t)}handleScript(t){return t=t.replace(new RegExp("(.*)</"+this.top()+"[^>]*>"),(e,s)=>(s=s.replace(/<!--(.*?)-->/g,"$1").replace(/<!\[CDATA\[(.*?)]]>/g,"$1"),this.dumpHandlerChars(s),"")),this.parseEndTag("",this.top()),t}handleNormalNode(t,e,s){let r;return t.indexOf("<!--")==0?(r=t.indexOf("-->"),{html:t,chars:e}=this.handleComment(r,t,e)):t.indexOf("</")==0?(s=t.match(a.endTag),{html:t,chars:e}=this.handleEndTag(s,t,e)):t.indexOf("<")==0&&(s=t.match(a.startTag),{html:t,chars:e}=this.handleStartTag(s,t,e)),{index:r,match:s}}handleStartTag(t,e,s){return t&&(e=e.substring(t[0].length),t[0].replace(a.startTag,this.parseStartTag.bind(this)),s=!1),{html:e,chars:s}}handleEndTag(t,e,s){return t&&(e=e.substring(t[0].length),t[0].replace(a.endTag,this.parseEndTag.bind(this)),s=!1),{html:e,chars:s}}handleComment(t,e,s){return t>=0&&(this.handler.comment&&this.handler.comment(e.substring(4,t)),e=e.substring(t+3),s=!1),{html:e,chars:s}}parseStartTag(t,e,s,r){if(e=e.toLowerCase(),a.block[e])for(;this.top()&&a.inline[this.top()];)this.parseEndTag("",this.top());if(a.closeSelf[e]&&this.top()==e&&this.parseEndTag("",e),r=a.empty[e]||!!r,r||this.stack.push(e),this.handler.start){let n=Object.create(null);s.replace(a.attr,(d,i)=>{i=i.toLowerCase();let p=arguments[2]?arguments[2]:arguments[3]?arguments[3]:arguments[4]?arguments[4]:a.fillAttrs[i]?i:"";return n[i]=p,d}),this.handler.start&&this.handler.start(e,n,!!r)}}parseEndTag(t,e){if(e)for(var s=this.stack.length-1;s>=0&&this.stack[s]!=e;s--);else var s=0;if(s>=0){for(var r=this.stack.length-1;r>=s;r--)this.handler.end&&this.handler.end(this.stack[r]);this.stack.length=s}}};
//# sourceMappingURL=html.js.map