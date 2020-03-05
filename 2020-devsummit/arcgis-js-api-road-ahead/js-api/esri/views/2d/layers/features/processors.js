// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/tsSupport/assignHelper","../../../../core/promiseUtils"],function(b,a,d,c){Object.defineProperty(a,"__esModule",{value:!0});a.loadProcessorModule=function(a){return"heatmap"===a?c.create(function(a){return b(["./processors/HeatmapProcessor"],a)}):c.create(function(a){return b(["./processors/SymbolProcessor"],a)})}});