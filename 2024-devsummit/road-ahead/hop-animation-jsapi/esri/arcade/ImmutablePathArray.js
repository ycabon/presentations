// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["./ImmutableArray","./ImmutablePointArray"],function(d,e){class c extends d{constructor(a,b,f,g,h){super(a);this._lazyPath=[];this._hasM=this._hasZ=!1;this._hasZ=f;this._hasM=g;this._spRef=b;this._cacheId=h}get(a){if(void 0===this._lazyPath[a]){const b=this._elements[a];if(void 0===b)return;this._lazyPath[a]=new e(b,this._spRef,this._hasZ,this._hasM,this._cacheId,a)}return this._lazyPath[a]}equalityTest(a){return a===this?!0:null===a||!1===a instanceof c?!1:a.getUniqueHash()===this.getUniqueHash()}getUniqueHash(){return this._cacheId.toString()}}
return c});