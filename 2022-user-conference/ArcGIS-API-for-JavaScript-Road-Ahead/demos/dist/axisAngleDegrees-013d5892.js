import { e8 as r, eZ as M, fm as m } from './_virtual_index-a68dd1ed.js';
import { v as v$1, y, x as x$1 } from './quat-08f73fae.js';
import { e } from './quatf64-808fd6fd.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function a(n=b){return [n[0],n[1],n[2],n[3]]}function k(n,r$1,t=a()){return r(g(t),n),t[3]=r$1,t}function v(r,c,f=a()){return v$1(d,g(r),x(r)),v$1(w,g(c),x(c)),y(d,w,d),U(f,m(x$1(g(f),d)))}function g(n){return n}function l(n){return n[3]}function x(n){return M(n[3])}function U(n,r){return n[3]=r,n}const b=[0,0,1,0],d=e(),w=e();a();

export { a, g, k, l, v, x };
