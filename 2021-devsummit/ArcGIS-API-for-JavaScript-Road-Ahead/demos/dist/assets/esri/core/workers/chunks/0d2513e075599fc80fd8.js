self.webpackChunkRemoteClient([167],{651:function(e,r,t){"use strict";t.r(r),t.d(r,"clearBoundingBoxCache",(function(){return d})),t.d(r,"computeIconLayerResourceSize",(function(){return p})),t.d(r,"computeLayerResourceSize",(function(){return m})),t.d(r,"computeLayerSize",(function(){return b})),t.d(r,"computeObjectLayerResourceSize",(function(){return w}));var n=t(0),o=t(17),i=t(55),c=t(177),u=t(444),s=(t(4),t(94));const a=Object(c.i)(-.5,-.5,-.5,.5,.5,.5),l=Object(c.i)(-.5,-.5,0,.5,.5,1),f=Object(c.i)(-.5,-.5,0,.5,.5,.5);let y=h();function h(){return new u.a(50)}function d(){y=h()}function m(e,r){if("icon"===e.type)return p(e,r);if("object"===e.type)return w(e,r);throw new o.a("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object")}async function b(e,r){if("icon"===e.type)return function(e,r){return p(e,r).then(r=>{if(null==e.size)return r;const t=r[0]/r[1];return t>1?[e.size,e.size/t]:[e.size*t,e.size]})}(e,r);if("object"===e.type)return async function(e,r){return function(e,{isPrimitive:r,width:t,depth:n,height:o}){const i=r?10:1;if(null==t&&null==o&&null==n)return[i*e[0],i*e[1],i*e[2]];const c=Object(s.g)(t,n,o);let u;for(let r=0;r<3;r++){const t=c[r];if(null!=t){u=t/e[r];break}}for(let r=0;r<3;r++)null==c[r]&&(c[r]=e[r]*u);return c}(await w(e,r),e)}(e,r);throw new o.a("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object")}async function p(e,r){if(e.resource.href)return(t=e.resource.href,Object(i.default)(t,{responseType:"image"}).then(e=>e.data)).then(e=>[e.width,e.height]);var t;if(e.resource.primitive)return Object(n.h)(r)?[r,r]:[256,256];throw new o.a("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource")}function w(e,r){return async function(e,r){if(!e.isPrimitive){const r=e.resource.href,n=y.get(r);if(void 0!==n)return Promise.resolve(n);const o=await Promise.all([t.e(21),t.e(30)]).then(t.bind(null,629)),i=await o.fetch(r,{disableTextures:!0});return y.put(r,i.referenceBoundingBox),i.referenceBoundingBox}let i=null;if(e.resource&&e.resource.primitive&&(i=Object(c.b)(function(e){switch(e){case"sphere":case"cube":case"diamond":return a;case"cylinder":case"cone":case"inverted-cone":return l;case"tetrahedron":return f;default:return}}(e.resource.primitive)),Object(n.h)(r)))for(let e=0;e<i.length;e++)i[e]*=r;return i?Promise.resolve(i):Promise.reject(new o.a("symbol:invalid-resource","The symbol does not have a valid resource"))}(e,r).then(e=>Object(c.m)(e))}}});