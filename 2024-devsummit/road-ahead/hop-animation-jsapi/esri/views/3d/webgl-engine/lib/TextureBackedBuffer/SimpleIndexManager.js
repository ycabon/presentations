// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports"],function(b){class c{constructor(a){this._maxCount=a;this._nextIndex=0;this._recycledIndices=[]}get activeCount(){return this._nextIndex-this._recycledIndices.length}get availableCount(){return this._recycledIndices.length+this._maxCount-this._nextIndex}acquire(){if(0<this._recycledIndices.length)return this._recycledIndices.pop();if(this.availableCount)return this._nextIndex++}release(a){this._recycledIndices.push(a)}}b.SimpleIndexManager=c;Object.defineProperty(b,Symbol.toStringTag,
{value:"Module"})});