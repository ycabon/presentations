import { fP as w$1, fQ as Z, cA as c, fR as g$1, fS as D$1, fT as h, fU as p, fV as x$1, fW as d$1, fX as y$1, fY as j$1, fZ as F$1, f_ as B, f$ as M$1, g0 as $ } from './_virtual_index-9b831d4a.js';
import { v } from './quantityUtils-95a87361.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function g(t,a,n,u=2,i="abbr"){return g$1(t,v(a,n).value,n,u,i)}function L(t,e,n,u=2,i="abbr"){return p(t,v(e,n).value,n,u,i)}function M(t,r,e=2,a="abbr"){return D$1(t,r.value,r.unit,e,a)}function d(t,r,e=2,a="abbr"){return x$1(t,r.value,r.unit,e,a)}function w(t,r,e=2,a="abbr"){return y$1(t,r.value,r.unit,e,a)}function I(t,r,e=2,a="abbr"){return F$1(t,r.value,r.unit,e,a)}function R(t,r,e=2,a="abbr"){return M$1(t,r.value,r.unit,e,a)}function y(t,r,e=2,a="abbr"){return h(t,r.value,r.unit,e,a)}function V(t,r,e=2,a="abbr"){return d$1(t,r.value,r.unit,e,a)}function j(t,r,e=2,a="abbr"){return j$1(t,r.value,r.unit,e,a)}function D(t,r,e=2,a="abbr"){return B(t,r.value,r.unit,e,a)}function A(t,r,e=2,a="abbr"){return $(t,r.value,r.unit,e,a)}function U(t,r,e){return w$1(t.value,t.unit,t.rotationType,r,e)}function q(t,r,e){return Z(t.value,t.unit,t.rotationType,r,e)}function x(r,e,a,n,u="abbr"){switch(n=c(n,2),a){case"imperial":return y(r,e,n,u);case"metric":return M(r,e,n,u);default:return g(r,e,a,n,u)}}function F(t,r,e,a=2,n="abbr"){switch(e){case"imperial":return V(t,r,a,n);case"metric":return d(t,r,a,n);default:return L(t,r,e,a,n)}}function S(t,r,e,a=2,n="abbr"){switch(e){case"imperial":return j(t,r,a,n);case"metric":return w(t,r,a,n);default:return g(t,r,e,a,n)}}function k(t,r,e,a=2,n="abbr"){switch(e){case"imperial":return D(t,r,a,n);case"metric":return I(t,r,a,n);default:return L(t,r,e,a,n)}}function z(t,r,e,a=2,n="abbr"){switch(e){case"imperial":return A(t,r,a,n);case"metric":return R(t,r,a,n);default:return g(t,r,e,a,n)}}

export { F, M, S, U, g, j, k, q, w, x, y, z };
