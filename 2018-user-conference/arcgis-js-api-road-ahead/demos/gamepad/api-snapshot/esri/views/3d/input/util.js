// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(c,d){Object.defineProperty(d,"__esModule",{value:!0});c=function(){function b(a){this._gain=a}b.prototype.reset=function(a){this._value=a};Object.defineProperty(b.prototype,"gain",{set:function(a){this._gain=a},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"value",{get:function(){return void 0===this._value?0:this._value},enumerable:!0,configurable:!0});b.prototype.update=function(a){this._value=void 0===this._value?a:this._gain*a+(1-this._gain)*
this._value};return b}();d.ExponentialFalloff=c});