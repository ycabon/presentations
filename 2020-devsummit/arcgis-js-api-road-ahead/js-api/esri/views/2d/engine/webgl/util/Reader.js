// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(b,c){Object.defineProperty(c,"__esModule",{value:!0});b=function(){function a(a){this._pos=0;this._buffer=a;this._i32View=new Int32Array(this._buffer);this._f32View=new Float32Array(this._buffer)}a.prototype.readInt32=function(){return this._i32View[this._pos++]};a.prototype.readF32=function(){return this._f32View[this._pos++]};return a}();c.default=b});