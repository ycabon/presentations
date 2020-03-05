// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../../../renderers/support/heatmapUtils"],function(a,b,c){Object.defineProperty(b,"__esModule",{value:!0});a=function(){function a(){this.gradient=null;this.width=this.height=512}a.prototype.render=function(a){c.drawHeatmap(a,512,this.intensities,this.gradient,this.minPixelIntensity,this.maxPixelIntensity)};return a}();b.HeatmapSource=a});