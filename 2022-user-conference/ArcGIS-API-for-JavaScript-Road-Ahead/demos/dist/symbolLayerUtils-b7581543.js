import { x2 as e, E as s, m as r, U, x3 as F, x4 as t, f as f$1, gL as a$1, x5 as c } from './_virtual_index-1ea2035a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let a=m();function m(){return new e(50)}function y(){a=m();}function f(e,o){if("icon"===e.type)return p(e,o);if("object"===e.type)return d(e,o);throw new s("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object")}async function l(e,o){if("icon"===e.type)return h(e,o);if("object"===e.type)return w(e,o);throw new s("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object")}async function p(e,o){if(e.resource?.href)return b(e.resource.href).then((e=>[e.width,e.height]));if(e.resource?.primitive)return r(o)?[o,o]:[256,256];throw new s("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource")}function h(e,r){return p(e,r).then((r=>{if(null==e.size)return r;const o=r[0]/r[1];return o>1?[e.size,e.size/o]:[e.size*o,e.size]}))}function b(r){return U(r,{responseType:"image"}).then((e=>e.data))}function d(e,r){return j(e,r).then((e=>F(e)))}async function w(e,r){const o=await d(e,r);return t(o,e)}async function j(e,o){if(!e.isPrimitive){const r=f$1(e.resource?.href),o=a.get(r);if(void 0!==o)return o;const t=await import('./_virtual_index-1ea2035a.js').then(function (n) { return n.zm; }),i=await t.fetch(r,{disableTextures:!0});return a.put(r,i.referenceBoundingBox),i.referenceBoundingBox}let i=null;if(e.resource&&e.resource.primitive&&(i=a$1(c(e.resource.primitive)),r(o)))for(let r=0;r<i.length;r++)i[r]*=o;return i?Promise.resolve(i):Promise.reject(new s("symbol:invalid-resource","The symbol does not have a valid resource"))}

export { y as clearBoundingBoxCache, p as computeIconLayerResourceSize, f as computeLayerResourceSize, l as computeLayerSize, d as computeObjectLayerResourceSize };
