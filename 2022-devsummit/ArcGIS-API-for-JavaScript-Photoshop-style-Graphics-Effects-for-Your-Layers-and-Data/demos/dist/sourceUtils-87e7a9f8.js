import { gW as B, fn as H, gX as ne, gY as ie, gZ as de, bz as I } from './_virtual_index-3ad07138.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class o{constructor(){this.code=null,this.description=null;}}class l{constructor(e){this.error=new o,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=e;}}function u(e){return new l(e)}class a{constructor(e){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=e;}}function c(e){return new a(e)}const f=new Set;function d(e,t,r,s=!1,o){f.clear();for(const l in r){const a=e.get(l);if(!a)continue;const c=r[l],d=m(a,c);if(d!==c&&o&&o.push({name:"invalid-value-type",message:"attribute value was converted to match the field type",details:{field:a,originalValue:c,sanitizedValue:d}}),f.add(a.name),a&&(s||a.editable)){const e=ie(a,d);if(e)return u(de(e,a,d));t[a.name]=d;}}for(const n of e.requiredFields)if(!f.has(n.name))return u(`missing required field "${n.name}"`);return null}function m(e,n){let i=n;return "string"==typeof n&&B(e)?i=parseFloat(n):null!=n&&H(e)&&"string"!=typeof n&&(i=String(n)),ne(i)}let p;function h(t,n){if(!t||!I(n))return t;if("rings"in t||"paths"in t){if(!p)throw new TypeError("geometry engine not loaded");return p.simplify(n,t)}return t}async function g(){return p||(p=await import('./geometryEngineJSON-ae7082ff.js'),p)}async function y(t,n){!I(t)||"esriGeometryPolygon"!==n&&"esriGeometryPolyline"!==n||await g();}

export { c, d, h, u, y };
