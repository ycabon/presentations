// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(c,d){return function(){function a(b,a){this.layerExtent=4096;this._features=[];this.layer=b;this.zoom=a;this._filter=b.getFeatureFilter()}a.prototype.pushFeature=function(a){this._filter.filter(a)&&this._features.push(a)};a.prototype.hasFeatures=function(){return 0<this._features.length};return a}()});