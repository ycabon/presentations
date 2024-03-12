// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","./AComputedField"],function(b,c){class d extends c.AComputedField{constructor(a){super();this._field=a}resize(a){throw Error("Method not implemented.");}read(a,e){return a.readAttribute(this._field)}readWithDefault(a,e){return a.readAttribute(this._field)}referencesScale(){return!1}referencesGeometry(){return!1}}b.CachedField=d;Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});