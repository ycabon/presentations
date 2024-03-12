// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports"],function(b){class c{constructor(a){this._gain=a}reset(a){this._value=a}set gain(a){this._gain=a}get value(){return void 0===this._value?0:this._value}update(a){this._value=void 0===this._value?a:this._gain*a+(1-this._gain)*this._value}}b.ExponentialFalloff=c;Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});