import { s } from './vectorStacks-5f70b87b.js';
import { du as e, a_ as s$1, dw as _, ay as n } from './_virtual_index-a68dd1ed.js';
import { v } from './lineSegment-0f1ab256.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function S(t,n,e){const r=n[0]-t[0],p=n[1]-t[1],o=e[0]-t[0],c=e[1]-t[1];return .5*Math.abs(r*c-p*o)}function w(t,n,p){return e(O,n,t),e(V,p,t),s$1(_(O,O,V))/2}new s(v);new s((()=>({p0:null,p1:null,p2:null})));const O=n(),V=n();

export { S, w };
