import{a as p}from"./chunk-6HHLNLNT.mjs";function y(s){let n=[];var c=4;function r(e){return e===c}function f(){return r(1)||r(2)||r(3)}function u(){return r(4)}function i(e){c=e}function k(e,o,t,a){switch(o.value){case"+":e=t+a;break;case"-":e=t-a;break;case"*":e=t*a;break;case"/":e=t/a;break;case"^":e=Math.pow(t,a);break;default:throw new Error("Unknown operator: "+o.value)}return e}return s.forEach(e=>{switch(e.type){case 0:n.push(parseFloat(e.value));break;case 1:let o=n.pop(),t=n.pop(),a=k(void 0,e,t,o);n.push(a);break;case 8:n.push(e.value),u()&&i(1);break;case 15:break;default:throw new Error("Unexpected TokenType: "+p[e.type])}}),n.pop()}export{y as a};
//# sourceMappingURL=chunk-ZGX2GOJX.mjs.map