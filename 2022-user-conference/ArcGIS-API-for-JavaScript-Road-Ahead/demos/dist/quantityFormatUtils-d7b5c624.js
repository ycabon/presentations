import { f9 as P, t, fa as E, fb as w$1, fc as Z, d8 as i, fd as g$1, fe as p$1, ff as D$1, fg as x$1, fh as y$2, fi as F$1, fj as M$1, fk as h, fl as d$1, fm as j$2, fn as B, fo as $ } from './_virtual_index-1ea2035a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function r(t,u){return {type:P(u),value:t,unit:u}}function a(t,u){return {type:P(u),value:t,unit:u}}function o(t,u){return {type:P(u),value:t,unit:u}}function c(t,u,e="arithmetic"){return {type:P(u),value:t,unit:u,rotationType:e}}function v(t,n){return r(E(t.value,t.unit,n),n)}function p(n,u){return t(n)?u:t(u)||n.value>E(u.value,u.unit,n.unit)?n:u}function y$1(n,u){return t(n)?null:{...n,value:n.value*u}}const j$1=a(0,"meters"),U$1=o(0,"square-meters");c(0,"radians");

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function g(t,a,n,u=2,i="abbr"){return g$1(t,v(a,n).value,n,u,i)}function L(t,e,n,u=2,i="abbr"){return p$1(t,v(e,n).value,n,u,i)}function M(t,r,e=2,a="abbr"){return D$1(t,r.value,r.unit,e,a)}function d(t,r,e=2,a="abbr"){return x$1(t,r.value,r.unit,e,a)}function w(t,r,e=2,a="abbr"){return y$2(t,r.value,r.unit,e,a)}function I(t,r,e=2,a="abbr"){return F$1(t,r.value,r.unit,e,a)}function R(t,r,e=2,a="abbr"){return M$1(t,r.value,r.unit,e,a)}function y(t,r,e=2,a="abbr"){return h(t,r.value,r.unit,e,a)}function V(t,r,e=2,a="abbr"){return d$1(t,r.value,r.unit,e,a)}function j(t,r,e=2,a="abbr"){return j$2(t,r.value,r.unit,e,a)}function D(t,r,e=2,a="abbr"){return B(t,r.value,r.unit,e,a)}function A(t,r,e=2,a="abbr"){return $(t,r.value,r.unit,e,a)}function U(t,r,e){return w$1(t.value,t.unit,t.rotationType,r,e)}function q(t,r,e){return Z(t.value,t.unit,t.rotationType,r,e)}function x(r,e,a,n,u="abbr"){switch(n=i(n,2),a){case"imperial":return y(r,e,n,u);case"metric":return M(r,e,n,u);default:return g(r,e,a,n,u)}}function F(t,r,e,a=2,n="abbr"){switch(e){case"imperial":return V(t,r,a,n);case"metric":return d(t,r,a,n);default:return L(t,r,e,a,n)}}function S(t,r,e,a=2,n="abbr"){switch(e){case"imperial":return j(t,r,a,n);case"metric":return w(t,r,a,n);default:return g(t,r,e,a,n)}}function k(t,r,e,a=2,n="abbr"){switch(e){case"imperial":return D(t,r,a,n);case"metric":return I(t,r,a,n);default:return L(t,r,e,a,n)}}function z(t,r,e,a=2,n="abbr"){switch(e){case"imperial":return A(t,r,a,n);case"metric":return R(t,r,a,n);default:return g(t,r,e,a,n)}}

export { F, M, S, U$1 as U, a, U as b, c, y as d, j as e, g, j$1 as j, k, o, p, q, r, v, w, x, y$1 as y, z };
