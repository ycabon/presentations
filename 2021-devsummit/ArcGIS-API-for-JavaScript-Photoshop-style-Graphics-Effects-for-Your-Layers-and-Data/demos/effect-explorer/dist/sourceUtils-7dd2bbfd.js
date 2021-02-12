import { fR as Y, fS as J, fT as Q, fU as Z, fV as se, bf as s } from './index.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class o{constructor(){this.code=null,this.description=null;}}class l{constructor(t){this.error=new o,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=t;}}function u(t){return new l(t)}class a{constructor(t){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=t;}}function c(t){return new a(t)}const f=new Set;function d(t,e,r,s,o=!1,l){f.clear();for(const e in s){const a=t.get(e);if(!a)continue;const c=s[e],d=m(a,c);if(d!==c&&l&&l.push({name:"invalid-value-type",message:"attribute value was converted to match the field type",details:{field:a,originalValue:c,sanitizedValue:d}}),f.add(a.name),a&&(o||a.editable)){const t=Z(a,d);if(t)return u(se(t,a,d));r[a.name]=d;}}for(const t of e)if(!f.has(t.name))return u(`missing required field "${t.name}"`);return null}function m(t,n){let i=n;return "string"==typeof n&&Y(t)?i=parseFloat(n):null!=n&&J(t)&&"string"!=typeof n&&(i=String(n)),Q(i)}let p;function h(e,n){if(!e||!s(n))return e;if("rings"in e||"paths"in e){if(!p)throw new TypeError("geometry engine not loaded");return p.simplify(n,e)}return e}async function g(){return p||(p=await import('./geometryEngineJSON-cfa0f1aa.js'),p)}async function y(e,n){!s(e)||"esriGeometryPolygon"!==n&&"esriGeometryPolyline"!==n||await g();}

export { c, d, h, u, y };
