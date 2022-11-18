import { gl as se, t, aK as n, aO as o, gm as jn, gn as q, go as j$1, gp as E, gq as v$1, ga as Y, gr as J, gs as S, dX as x } from './_virtual_index-1ea2035a.js';
import { o as o$1 } from './quantityFormatUtils-d7b5c624.js';
import { i } from './measurementUtils-d2a749ce.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function h(t,o=U()){return y(t,o)}function j(t,o=U()){return y(t,o,!1)}function y(n$1,h,j=n$1.hasZ){const y=i(n$1.spatialReference),U=se(y);if(t(U))return null;const C=(t,o$1)=>!(o$1.length<2)&&(o(t,o$1[0],o$1[1],j&&o$1[2]||0),!0);let R=0;for(const t of n$1.rings){const o$1=t.length;if(o$1<3)continue;const{positionsWorldCoords:r}=h;for(;r.length<o$1;)r.push(n());const g=d,j=o(k,0,0,0),U=1/o$1;for(let e=0;e<o$1;e++){if(!C(g,t[e]))return null;if(!jn(g,n$1.spatialReference,r[e],y))return null;q(j,j,r[e],U);}const W=j$1(r[0],r[1],j,E());if(0===v$1(Y(W)))continue;for(let t=0;t<o$1;t++)J(W,j,r[t],r[t]);const b=v(r);for(let t=0;t<b.length;t+=3)R+=S(r[b[t]],r[b[t+1]],r[b[t+2]]);}return o$1(R,U)}const d=n(),k=n();function U(){return {positionsWorldCoords:[]}}function v(t){return x(C(t),[],2)}function C(t){const o=new Float64Array(2*t.length);for(let r=0;r<t.length;++r){const n=t[r],e=2*r;o[e+0]=n[0],o[e+1]=n[1];}return o}

export { U, h, j, v };
