import { vm as fe, vn as Ie, oG as ie, vo as te, vp as ae, eO as I, t } from './_virtual_index-1ea2035a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class l{constructor(){this.code=null,this.description=null;}}class u{constructor(e){this.error=new l,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=e;}}function a(e){return new u(e)}class c{constructor(e){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=e;}}function f(e){return new c(e)}const d=new Set;function m(e,t,r,s=!1,o){d.clear();for(const l in r){const u=e.get(l);if(!u)continue;const c=r[l],f=p(u,c);if(f!==c&&o&&o.push({name:"invalid-value-type",message:"attribute value was converted to match the field type",details:{field:u,originalValue:c,sanitizedValue:f}}),d.add(u.name),u&&(s||u.editable)){const e=fe(u,f);if(e)return a(Ie(e,u,f));t[u.name]=f;}}for(const n of e?.requiredFields??[])if(!d.has(n.name))return a(`missing required field "${n.name}"`);return null}function p(e,t){let n=t;return "string"==typeof t&&ie(e)?n=parseFloat(t):null!=t&&te(e)&&"string"!=typeof t&&(n=String(t)),ae(n)}let h;function g(n,i){if(!n||!I(i))return n;if("rings"in n||"paths"in n){if(t(h))throw new TypeError("geometry engine not loaded");return h.simplify(i,n)}return n}async function y(){return t(h)&&(h=await import('./geometryEngineJSON-a8af17a0.js')),h}async function w(e,n){!I(e)||"esriGeometryPolygon"!==n&&"esriGeometryPolyline"!==n||await y();}

export { a, f, g, m, w };
