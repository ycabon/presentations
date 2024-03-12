// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports"],function(a){class c{constructor(b){this._store=b;this._controller=new AbortController}destroy(){this._controller.abort()}get _options(){return{signal:this._controller.signal}}async queryOverride(b){throw Error("InternalError: LoadStrategy does not support fetching");}}a.ALoadStrategy=c;Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});