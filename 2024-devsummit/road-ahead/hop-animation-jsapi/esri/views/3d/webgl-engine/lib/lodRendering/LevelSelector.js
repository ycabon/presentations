// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports"],function(d){class e{constructor(a,c){this._worldSpaceRadius=a;this._minScreenSpaceRadii=c}selectLevel(a,c,b){a=b.computeScreenPixelSizeAt(a);c=this._worldSpaceRadius*c/a;a=0;for(b=1;b<this._minScreenSpaceRadii.length;++b)c>=this._minScreenSpaceRadii[b]&&(a=b);return a}}d.LevelSelector=e;Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});