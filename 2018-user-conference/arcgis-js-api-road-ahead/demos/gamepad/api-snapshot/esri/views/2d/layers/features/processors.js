// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/tsSupport/assignHelper","../../../../core/promiseUtils"],function(e,b,g,f){Object.defineProperty(b,"__esModule",{value:!0});b.createProcessor=function(b,c){var d;"heatmap"===b?d=f.create(function(a){return e(["./processors/HeatmapProcessor"],a)}):"symbol"===b&&(d=f.create(function(a){return e(["./processors/SymbolProcessor"],a)}));return d.then(function(a){return a.default}).then(function(a){return new a(g({},c.serviceAndViewInfo,{tileStore:c.tileStore,
remoteClient:c.remoteClient}))})}});