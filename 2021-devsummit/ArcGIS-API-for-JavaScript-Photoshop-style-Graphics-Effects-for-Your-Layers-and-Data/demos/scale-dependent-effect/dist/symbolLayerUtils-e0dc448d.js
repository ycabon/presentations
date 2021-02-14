import { a7 as t$1, U, a as u, bv as O, h as s$1, L } from './index.js';
import { n as n$1 } from './ItemCache-93cecb98.js';
import { a, i, p as p$1 } from './aaBoundingBox-1795e3de.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function t(r,{isPrimitive:t,width:n,depth:o,height:c}){const s=t?10:1;if(null==n&&null==c&&null==o)return [s*r[0],s*r[1],s*r[2]];const i=t$1(n,o,c);let u;for(let e=0;e<3;e++){const t=i[e];if(null!=t){u=t/r[e];break}}for(let e=0;e<3;e++)null==i[e]&&(i[e]=r[e]*u);return i}const n=a(-.5,-.5,-.5,.5,.5,.5),o=a(-.5,-.5,0,.5,.5,1),c=a(-.5,-.5,0,.5,.5,.5);function s(e){switch(e){case"sphere":case"cube":case"diamond":return n;case"cylinder":case"cone":case"inverted-cone":return o;case"tetrahedron":return c;default:return}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
let m=y();function y(){return new n$1(50)}function f(){m=y();}function l(e,o){if("icon"===e.type)return h(e,o);if("object"===e.type)return b(e,o);throw new s$1("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object")}async function p(e,o){if("icon"===e.type)return function(e,r){return h(e,r).then((r=>{if(null==e.size)return r;const o=r[0]/r[1];return o>1?[e.size,e.size/o]:[e.size*o,e.size]}))}(e,o);if("object"===e.type)return async function(e,r){const o=await b(e,r);return t(o,e)}(e,o);throw new s$1("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object")}async function h(o,t){if(o.resource.href)return (n=o.resource.href,L(n,{responseType:"image"}).then((e=>e.data))).then((e=>[e.width,e.height]));var n;if(o.resource.primitive)return u(t)?[t,t]:[256,256];throw new s$1("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource")}function b(i$1,n){return async function(i$1,n){if(!i$1.isPrimitive){const e=i$1.resource.href,r=m.get(e);if(void 0!==r)return U(r);const t=await import('./objectResourceUtils-a3fa0984.js').then(function (n) { return n.o; }),n=await t.fetch(e,{disableTextures:!0});return m.put(e,n.referenceBoundingBox),n.referenceBoundingBox}let s$2=null;if(i$1.resource&&i$1.resource.primitive&&(s$2=i(s(i$1.resource.primitive)),u(n)))for(let e=0;e<s$2.length;e++)s$2[e]*=n;return s$2?U(s$2):O(new s$1("symbol:invalid-resource","The symbol does not have a valid resource"))}(i$1,n).then((e=>p$1(e)))}

export { f as clearBoundingBoxCache, h as computeIconLayerResourceSize, l as computeLayerResourceSize, p as computeLayerSize, b as computeObjectLayerResourceSize };
