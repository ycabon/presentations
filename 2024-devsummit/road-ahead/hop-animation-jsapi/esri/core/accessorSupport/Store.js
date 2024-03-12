// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../lang","./PropertyOrigin"],function(c,f,g){class d{constructor(){this._values=new Map;this.multipleOriginsSupported=!1}clone(a){const b=new d;this._values.forEach((h,e)=>{a&&a.has(e)||b.set(e,f.clone(h))});return b}get(a){return this._values.get(a)}originOf(){return g.OriginId.USER}keys(){return[...this._values.keys()]}set(a,b){this._values.set(a,b)}delete(a){this._values.delete(a)}has(a){return this._values.has(a)}forEach(a){this._values.forEach(a)}}c.Store=d;Object.defineProperty(c,
Symbol.toStringTag,{value:"Module"})});