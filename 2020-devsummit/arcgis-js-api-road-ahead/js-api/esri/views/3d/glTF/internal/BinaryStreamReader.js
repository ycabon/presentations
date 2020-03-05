// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(c,d){Object.defineProperty(d,"__esModule",{value:!0});c=function(){function a(b){this.data=b;this.offset4=0;this.dataUint32=new Uint32Array(this.data,0,Math.floor(this.data.byteLength/4))}a.prototype.readUint32=function(){var b=this.offset4;this.offset4+=1;return this.dataUint32[b]};a.prototype.readUint8Array=function(b){var a=4*this.offset4;this.offset4+=b/4;return new Uint8Array(this.data,a,b)};a.prototype.remainingBytes=function(){return this.data.byteLength-
4*this.offset4};return a}();d.BinaryStreamReader=c});