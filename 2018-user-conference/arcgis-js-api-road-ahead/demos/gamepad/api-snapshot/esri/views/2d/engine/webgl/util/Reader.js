// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(a,b){Object.defineProperty(b,"__esModule",{value:!0});a=function(){function a(a){this._pos=0;this._buffer=a;this._view=new Int32Array(this._buffer)}a.prototype.readInt32=function(){return this._view[this._pos++]};return a}();b.default=a});