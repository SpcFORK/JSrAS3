"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _chunkF3ENEXIHjs = require('./chunk-F3ENEXIH.js');var _chunk54A7JTPAjs = require('./chunk-54A7JTPA.js');var _chunkDEYC77JCjs = require('./chunk-DEYC77JC.js');function X(L){let l=_chunk54A7JTPAjs.a.call(void 0, L),T=[],o=[];var p=4;let r=e=>e===p;function B(e){return new Error("Invalid expression"+(e?`: ${e}`:""))}function b(e){return _chunkF3ENEXIHjs.a[e.value].associativity==="Left"}function i(e){return _chunkF3ENEXIHjs.a[e.value].precedence}function u(e=1){return o[o.length-e]}function h(e){return o.push(e)}function m(){return o.pop()}function f(e){return T.push(e)}function c(e=1){let t=m();if(t)return f(t);throw B()}function n(e,t){return e.type===t}function g(e){return n(e,1)}function N(e){return n(e,0)}function w(e){return n(e,2)}function O(e){return n(e,3)}function v(e){return n(e,4)}function E(e){return n(e,5)}function x(e){return n(e,6)}function P(e){return n(e,7)}function R(e){return n(e,8)}function I(e){return n(e,9)}function U(e){return n(e,10)}function K(e){return n(e,11)}function $(e){return n(e,12)}function j(e){return n(e,13)}function q(e){return n(e,14)}function V(e){return n(e,15)}function F(e){return o.length&&g(u())&&(b(e)&&i(e)<=i(u())||!b(e)&&i(e)<i(u()))}function H(){return r(1)||r(2)||r(3)}function z(){return r(4)}function y(e){p=e}function A(){for(;o.length;)c()}function a(e,t){let _=parseInt(e.value,t);Q(0,_)}function Q(e,t){return f(new (0, _chunkDEYC77JCjs.c)(e,t))}function s(e){for(;o.length&&u().type!==e;)c();m()}for(;l.length;){let e=l.shift();if(N(e))f(e),z()&&y(0);else if(R(e))H()||y(1),f(e);else if(g(e)){for(;F(e);)c();h(e)}else w(e)||v(e)||x(e)?h(e):I(e)?a(e,16):U(e)?a(e,2):K(e)?a(e,8):O(e)?s(2):E(e)?s(4):P(e)?s(6):V(e)&&A()}return T}exports.a = X;
//# sourceMappingURL=chunk-L5P4VXKU.js.map