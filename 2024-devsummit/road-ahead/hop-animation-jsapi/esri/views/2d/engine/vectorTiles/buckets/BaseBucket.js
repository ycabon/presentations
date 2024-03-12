// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(function(){class d{constructor(a,b,c){this.layerExtent=4096;this._features=[];this.layer=a;this.zoom=b;this._spriteInfo=c;this._filter=a.getFeatureFilter()}pushFeature(a){this._filter&&!this._filter.filter(a,this.zoom)||this._features.push(a)}hasFeatures(){return 0<this._features.length}getResources(a,b,c){}}return d});