// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports"],function(b){class d{constructor(a){this._store=a}destroy(){this._store.destroy()}get(a){return this._store.get(a)}put(a,c){this._store.put(a,c,c.values.byteLength+256)}}b.ElevationQueryTileCache=d;Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});