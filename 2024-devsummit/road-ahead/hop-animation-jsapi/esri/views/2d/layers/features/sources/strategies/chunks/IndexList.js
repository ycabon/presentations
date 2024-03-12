// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports"],function(a){class b{constructor(){this._counter=1;this._freeList=[]}create(){return this._freeList.length?this._freeList.pop():++this._counter}release(c){this._freeList.push(c)}}a.IndexList=b;Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});