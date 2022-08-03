import { fB as se, t, aH as n, aL as o, fu as Bn, fC as F, fD as j$1, fE as E, f2 as r, fF as c, fG as K, dN as x, fH as S } from './_virtual_index-9b831d4a.js';
import { a } from './quantityUtils-95a87361.js';
import { i } from './measurementUtils-77091aae.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function h(t,r=d()){return y(t,r)}function j(t,r=d()){return y(t,r,!1)}function y(e,h,j=e.hasZ){const y=i(e.spatialReference),d=se(y);if(t(d))return null;const R=(t,r)=>!(r.length<2)&&(o(t,r[0],r[1],j&&r[2]||0),!0);let U=0;for(const t of e.rings){if(t.length<3)continue;const{positionsWorldCoords:r$1}=h;for(;r$1.length<t.length;)r$1.push(n());const o=k;for(let n=0;n<3;n++){if(!R(o,t[n]))return null;if(!Bn(o,e.spatialReference,r$1[n],y))return null}if(F(r$1[0],r$1[1])||F(r$1[0],r$1[2])||F(r$1[1],r$1[2]))continue;const i=j$1(r$1[0],r$1[1],r$1[2],E()),g=r(c.get(),r$1[0]);for(let t=0;t<3;t++)K(i,g,r$1[t],r$1[t]);for(let n=3;n<t.length;n++){if(!R(o,t[n]))return null;Bn(o,e.spatialReference,r$1[n],y),K(i,g,r$1[n],r$1[n]);}const j=v(r$1);for(let t=0;t<j.length;t+=3)U+=S(r$1[j[t]],r$1[j[t+1]],r$1[j[t+2]]);}return a(U,d)}const k=n();function d(){return {positionsWorldCoords:[]}}function v(t){return x(R(t),[],2)}function R(t){const r=new Float64Array(2*t.length);for(let o=0;o<t.length;++o){const e=t[o],n=2*o;r[n+0]=e[0],r[n+1]=e[1];}return r}

export { d, h, j, v };
