import { bn as t$2, eu as l$1, aR as p, cb as L, bU as p$1, t as t$3, aS as y, ev as L$1, ew as R$1, eg as u$1, ek as I$1, ay as le, az as ce, ex as ge, aB as t$4, ey as w$1, aA as A, ez as $, eA as V, ao as y$1, bQ as C, an as u$2, d_ as t$5, eB as r$1, eC as G$2, s, aC as s$1, au as d } from './_virtual_index-2683c931.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const w=new t$2({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),j$1=Object.freeze({}),U=new t$4,M=new t$4,F=new t$4,G$1={esriGeometryPoint:w$1,esriGeometryPolyline:A,esriGeometryPolygon:$,esriGeometryMultipoint:V};function N(e,t,r,i=e.hasZ,o=e.hasM){const n=e.hasZ&&i,s=e.hasM&&o;if(r){const a=ce(F,t,e.hasZ,e.hasM,"esriGeometryPoint",r,i,o);return w$1(a,n,s)}return w$1(t,n,s)}function _(e,t,r,i,o,n,s=t,a=r){const l=t&&s,m=r&&a,u=i?"coords"in i?i:i.geometry:null;if(!u)return null;if(o){let i=le(M,u,t,r,e,o,s,a);return n&&(i=ce(F,i,l,m,e,n)),G$1[e](i,l,m)}if(n){const i=ce(F,u,t,r,e,n,s,a);return G$1[e](i,l,m)}return ge(U,u,t,r,s,a),G$1[e](U,l,m)}async function J(e,t,r){const{outFields:i,orderByFields:o,groupByFieldsForStatistics:n,outStatistics:s}=e;if(i)for(let a=0;a<i.length;a++)i[a]=i[a].trim();if(o)for(let a=0;a<o.length;a++)o[a]=o[a].trim();if(n)for(let a=0;a<n.length;a++)n[a]=n[a].trim();if(s)for(let a=0;a<s.length;a++)s[a].onStatisticField&&(s[a].onStatisticField=s[a].onStatisticField.trim());return e.geometry&&!e.outSR&&(e.outSR=e.geometry.spatialReference),v$1(e,t,r)}async function v$1(t,r,i){if(!t)return null;let{where:o}=t;if(t.where=o=o&&o.trim(),(!o||/^1 *= *1$/.test(o)||r&&r===o)&&(t.where=null),!t.geometry)return t;let a=await Z(t);if(t.distance=0,t.units=null,"esriSpatialRelEnvelopeIntersects"===t.spatialRel){const{spatialReference:e}=t.geometry;a=l$1(a),a.spatialReference=e;}t.geometry=a,await p(a.spatialReference,i);const m=(await L(p$1(a)))[0];if(t$3(m))throw j$1;const c=m.toJSON(),u=await y(c,c.spatialReference,i);if(!u)throw j$1;return u.spatialReference=i,t.geometry=u,t}async function Z(e){const{geometry:t,distance:n,units:s}=e;if(null==n||"vertexAttributes"in t)return t;const l=t.spatialReference,m=s?w.fromJSON(s):L$1(l),c=l&&(R$1(l)||u$1(l))?t:await p(l,I$1).then((()=>y(t,I$1)));return (await b())(c.spatialReference,c,n,m)}async function b(){return (await import('./geometryEngineJSON-8823f45e.js')).geodesicBuffer}function x(e){return e&&z in e?JSON.parse(JSON.stringify(e,B)):e}const z="_geVersion",B=(e,t)=>e!==z?t:void 0;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function n$1(n,t){return n?t?4:3:t?3:2}function t$1(n,t,r,e){return o(n,t,r,e.coords[0],e.coords[1])}function r(t,r,e,c,u,f){const s=n$1(u,f),{coords:i,lengths:l}=c;if(!l)return !1;for(let n=0,d=0;n<l.length;n++,d+=s)if(!o(t,r,e,i[d],i[d+1]))return !1;return !0}function o(t,r,o,c,u){if(!t)return !1;const f=n$1(r,o),{coords:s,lengths:i}=t;let l=!1,d=0;for(const n of i)l=e$1(l,s,f,d,n,c,u),d+=n*f;return l}function e$1(n,t,r,o,e,c,u){let f=n,s=o;for(let i=o,l=o+e*r;i<l;i+=r){s=i+r,s===l&&(s=o);const n=t[i],e=t[i+1],d=t[s],g=t[s+1];(e<u&&g>=u||g<u&&e>=u)&&n+(u-e)/(g-e)*(d-n)<c&&(f=!f);}return f}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const c="feature-store:unsupported-query",R={esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"intersects",esriSpatialRelIndexIntersects:null,esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:null},S={spatialRelationship:{esriSpatialRelIntersects:!0,esriSpatialRelContains:!0,esriSpatialRelWithin:!0,esriSpatialRelCrosses:!0,esriSpatialRelDisjoint:!0,esriSpatialRelTouches:!0,esriSpatialRelOverlaps:!0,esriSpatialRelEnvelopeIntersects:!0,esriSpatialRelIndexIntersects:!1,esriSpatialRelRelation:!1},queryGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!0},layerGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!1}};function G(e){return !0===S.spatialRelationship[e]}function g(e){return !0===S.queryGeometry[d(e)]}function j(e){return !0===S.layerGeometry[e]}function h(){return import('./geometryEngineJSON-8823f45e.js')}function v(e,r$2,l,m,c){if(y$1(r$2)&&"esriGeometryPoint"===l&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e)){const e=C(new t$4,r$2,!1,!1);return Promise.resolve((r=>t$1(e,!1,!1,r)))}if(y$1(r$2)&&"esriGeometryMultipoint"===l){const t=C(new t$4,r$2,!1,!1);if("esriSpatialRelContains"===e)return Promise.resolve((e=>r(t,!1,!1,e,m,c)))}if(u$2(r$2)&&"esriGeometryPoint"===l&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e))return Promise.resolve((e=>t$5(r$2,_(l,m,c,e))));if(u$2(r$2)&&"esriGeometryMultipoint"===l&&"esriSpatialRelContains"===e)return Promise.resolve((e=>r$1(r$2,_(l,m,c,e))));if(u$2(r$2)&&"esriSpatialRelIntersects"===e){const e=G$2(l);return Promise.resolve((t=>e(r$2,_(l,m,c,t))))}return h().then((t=>{const i=t[R[e]].bind(null,r$2.spatialReference,r$2);return e=>i(_(l,m,c,e))}))}async function P(t,i,s$2){const{spatialRel:o,geometry:n}=t;if(n){if(!G(o))throw new s(c,"Unsupported query spatial relationship",{query:t});if(s$1(n.spatialReference)&&s$1(s$2)){if(!g(n))throw new s(c,"Unsupported query geometry type",{query:t});if(!j(i))throw new s(c,"Unsupported layer geometry type",{query:t});if(t.outSR)return p(t.geometry&&t.geometry.spatialReference,t.outSR)}}}function I(e){if(u$2(e))return !0;if(y$1(e)){for(const r of e.rings){if(5!==r.length)return !1;if(r[0][0]!==r[1][0]||r[0][0]!==r[4][0]||r[2][0]!==r[3][0]||r[0][1]!==r[3][1]||r[0][1]!==r[4][1]||r[1][1]!==r[2][1])return !1}return !0}return !1}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function t(t,n){if(!t)return null;const e=n.featureAdapter,{startTimeField:u,endTimeField:l}=t;let r=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;if(u&&l)n.forEach((t=>{const n=e.getAttribute(t,u),o=e.getAttribute(t,l);null==n||isNaN(n)||(r=Math.min(r,n)),null==o||isNaN(o)||(i=Math.max(i,o));}));else {const t=u||l;n.forEach((n=>{const u=e.getAttribute(n,t);null==u||isNaN(u)||(r=Math.min(r,u),i=Math.max(i,u));}));}return {start:r,end:i}}function n(t,n,r){if(!n||!t)return null;const{startTimeField:i,endTimeField:o}=t;if(!i&&!o)return null;const{start:s,end:a}=n;return null===s&&null===a?null:void 0===s&&void 0===a?l():i&&o?e(r,i,o,s,a):u(r,i||o,s,a)}function e(t,n,e,u,l){return null!=u&&null!=l?r=>{const i=t.getAttribute(r,n),o=t.getAttribute(r,e);return (null==i||i<=l)&&(null==o||o>=u)}:null!=u?n=>{const l=t.getAttribute(n,e);return null==l||l>=u}:null!=l?e=>{const u=t.getAttribute(e,n);return null==u||u<=l}:void 0}function u(t,n,e,u){return null!=e&&null!=u&&e===u?u=>t.getAttribute(u,n)===e:null!=e&&null!=u?l=>{const r=t.getAttribute(l,n);return r>=e&&r<=u}:null!=e?u=>t.getAttribute(u,n)>=e:null!=u?e=>t.getAttribute(e,n)<=u:void 0}function l(){return ()=>!1}

export { I, J, N, P, _, v$1 as a, j$1 as j, n, t, v, x };
