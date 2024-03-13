// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../lang","./PropertyOrigin"],function(f,h,e){class g{constructor(){this._values=new Map;this.multipleOriginsSupported=!1}clone(a){const b=new g;this._values.forEach((c,d)=>{a&&a.has(d)||b.set(d,h.clone(c.value),c.origin)});return b}get(a,b){b=this._normalizeOrigin(b);a=this._values.get(a);return null==b||a?.origin===b?a?.value:void 0}originOf(a){return this._values.get(a)?.origin??e.OriginId.USER}keys(a){a=this._normalizeOrigin(a);const b=[...this._values.keys()];return null==a?
b:b.filter(c=>this._values.get(c)?.origin===a)}set(a,b,c){c=this._normalizeOrigin(c);if(c===e.OriginId.DEFAULTS){const d=this._values.get(a);if(null!=d?.origin&&d.origin>c)return}this._values.set(a,new k(b,c))}delete(a,b){b=this._normalizeOrigin(b);null!=b&&this._values.get(a)?.origin!==b||this._values.delete(a)}has(a,b){b=this._normalizeOrigin(b);return null!=b?this._values.get(a)?.origin===b:this._values.has(a)}forEach(a){this._values.forEach(({value:b},c)=>a(b,c))}_normalizeOrigin(a){if(null!=
a)return a===e.OriginId.DEFAULTS?a:e.OriginId.USER}}class k{constructor(a,b){this.value=a;this.origin=b}}f.DefaultsStore=g;Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});