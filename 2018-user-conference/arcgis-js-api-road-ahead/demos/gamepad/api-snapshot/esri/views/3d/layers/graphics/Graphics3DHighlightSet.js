// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["require","exports","../../webgl-engine/lib/HighlightSet"],function(d,e,b){return function(){function a(c,a){this.highlightSet=new b;this.ids=new Set;this.options=c;this.objectIdField=a}a.prototype.hasGraphic=function(a){return this.objectIdField?this.ids.has(a.graphic.attributes[this.objectIdField]):this.ids.has(a.graphic.uid)};return a}()});