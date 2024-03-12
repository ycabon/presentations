// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(function(){class d{constructor(a){this._array=[];0>=a&&console.error("strideInBytes must be positive!");this._stride=a}get array(){return this._array}get index(){return 4*this._array.length/this._stride}get itemSize(){return this._stride}get sizeInBytes(){return 4*this._array.length}reset(){this.array.length=0}toBuffer(){return(new Uint32Array(this._array)).buffer}static i1616to32(a,b){return 65535&a|b<<16}static i8888to32(a,b,c,e){return a&255|(b&255)<<8|(c&255)<<16|e<<24}static i8816to32(a,
b,c){return a&255|(b&255)<<8|c<<16}}return d});