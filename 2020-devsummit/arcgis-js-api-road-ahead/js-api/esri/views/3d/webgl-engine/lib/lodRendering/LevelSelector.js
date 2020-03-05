// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","../Camera"],function(e,f,g){Object.defineProperty(f,"__esModule",{value:!0});e=function(){function b(a,c){this.thresholdScale=1;this._camera=new g.default;this._worldSpaceRadius=a;this._thresholds=c.map(function(a){return a})}b.prototype.updateCamera=function(a){this._camera.copyFrom(a)};b.prototype.selectLevel=function(a,c){a=this._camera.computeScreenPixelSizeAt(a);c=this._worldSpaceRadius*c/a;a=this._thresholds;for(var b=-1,d=0;d<a.length;++d)c>=a[d]*this.thresholdScale&&
(b=d);return b};return b}();f.LevelSelector=e});