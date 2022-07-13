import { hf as t, ay as n, gT as r, gY as e, a$ as g, aT as o, g$ as u, gU as P, iE as v$1 } from './_virtual_index-4b72c57d.js';
import { s, c } from './vectorStacks-29d5a183.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function v(t$1){return t$1?{origin:t(t$1.origin),vector:t(t$1.vector)}:{origin:n(),vector:n()}}function l(t,r$1,i=v()){return r(i.origin,t),e(i.vector,r$1,t),i}function d(t,r,n){return A(t,r,0,1,n)}function A(r,n,s,a,g$1){const{vector:v,origin:p}=r,h=e(c.get(),n,p),m=P(v,h)/v$1(v);return g(g$1,v,o(m,s,a)),u(g$1,g$1,r.origin)}new s((()=>({origin:null,vector:null})));

export { d, l, v };
