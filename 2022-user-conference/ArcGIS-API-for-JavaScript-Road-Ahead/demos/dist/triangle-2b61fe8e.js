import { s } from './vectorStacks-2787eca4.js';
import { cV as e, at as s$1, cX as _, a3 as n } from './_virtual_index-64b818a8.js';
import { v } from './lineSegment-ce9a3f78.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function S(t,n,e){const r=n[0]-t[0],p=n[1]-t[1],o=e[0]-t[0],c=e[1]-t[1];return .5*Math.abs(r*c-p*o)}function w(t,n,p){return e(O,n,t),e(V,p,t),s$1(_(O,O,V))/2}new s(v);new s((()=>({p0:null,p1:null,p2:null})));const O=n(),V=n();

export { S, w };
