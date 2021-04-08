import { a6 as t$1, dU as e, s as s$1, U, r } from './_virtual_index-634cbc09.js';
import { u, F, a as a$1 } from './aaBoundingBox-3b33bb9e.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function t(r,{isPrimitive:t,width:n,depth:o,height:c}){const s=t?10:1;if(null==n&&null==c&&null==o)return [s*r[0],s*r[1],s*r[2]];const i=t$1(n,o,c);let u;for(let e=0;e<3;e++){const t=i[e];if(null!=t){u=t/r[e];break}}for(let e=0;e<3;e++)null==i[e]&&(i[e]=r[e]*u);return i}const n=u(-.5,-.5,-.5,.5,.5,.5),o=u(-.5,-.5,0,.5,.5,1),c$1=u(-.5,-.5,0,.5,.5,.5);function s(e){switch(e){case"sphere":case"cube":case"diamond":return n;case"cylinder":case"cone":case"inverted-cone":return o;case"tetrahedron":return c$1;default:return}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let c=m();function m(){return new e(50)}function a(){c=m();}function y(e,o){if("icon"===e.type)return l(e,o);if("object"===e.type)return b(e,o);throw new s$1("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object")}async function f(e,o){if("icon"===e.type)return p(e,o);if("object"===e.type)return d(e,o);throw new s$1("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object")}async function l(o,t){if(o.resource.href)return h(o.resource.href).then((e=>[e.width,e.height]));if(o.resource.primitive)return r(t)?[t,t]:[256,256];throw new s$1("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource")}function p(e,r){return l(e,r).then((r=>{if(null==e.size)return r;const o=r[0]/r[1];return o>1?[e.size,e.size/o]:[e.size*o,e.size]}))}function h(e){return U(e,{responseType:"image"}).then((e=>e.data))}function b(e,r){return w(e,r).then((e=>F(e)))}async function d(e,r){const o=await b(e,r);return t(o,e)}async function w(o,t){if(!o.isPrimitive){const e=o.resource.href,r=c.get(e);if(void 0!==r)return Promise.resolve(r);const t=await import('./objectResourceUtils-ef30fdbc.js').then(function (n) { return n.o; }),n=await t.fetch(e,{disableTextures:!0});return c.put(e,n.referenceBoundingBox),n.referenceBoundingBox}let i=null;if(o.resource&&o.resource.primitive&&(i=a$1(s(o.resource.primitive)),r(t)))for(let e=0;e<i.length;e++)i[e]*=t;return i?Promise.resolve(i):Promise.reject(new s$1("symbol:invalid-resource","The symbol does not have a valid resource"))}

export { a as clearBoundingBoxCache, l as computeIconLayerResourceSize, y as computeLayerResourceSize, f as computeLayerSize, b as computeObjectLayerResourceSize };
