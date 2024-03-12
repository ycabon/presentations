// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports"],function(b){class d{constructor(a){this._stage=a;this._materials=new Map}get(a){return this._materials.get(a)}add(a,c){this._materials.set(a,c);this._stage.add(c)}dispose(){this._stage.removeMany(Array.from(this._materials.values()));this._materials.clear()}}b.MaterialCollection=d;Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});