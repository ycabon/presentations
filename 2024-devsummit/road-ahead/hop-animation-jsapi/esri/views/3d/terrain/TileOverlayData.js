// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["../../../core/libs/gl-matrix-2/factories/vec4f64"],function(d){class e{constructor(){this._scales=d.fromValues(-1,-1,-1,-1);this._offsets=d.fromValues(-1,-1,-1,-1)}clear(){this._scales[0]=this._scales[1]=this._scales[2]=this._scales[3]=-1;this._offsets[0]=this._offsets[1]=this._offsets[2]=this._offsets[3]=-1}setScale(a,b,c){this._scales[2*a]=b;this._scales[2*a+1]=c}setOffset(a,b,c){this._offsets[2*a]=b;this._offsets[2*a+1]=c}get scales(){return this._scales}get offsets(){return this._offsets}}
return e});