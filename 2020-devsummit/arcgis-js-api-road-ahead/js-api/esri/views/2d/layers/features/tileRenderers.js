// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/nextTick","../../../../core/promiseUtils"],function(d,b,e,c){Object.defineProperty(b,"__esModule",{value:!0});b.createOrReuseTileRenderer=function(b,f){if(!b)return c.resolve(null);switch(b.type){case "class-breaks":case "simple":case "unique-value":case "dot-density":case "dictionary":return c.create(function(a){e(function(){return d(["./tileRenderers/SymbolTileRenderer"],a)})}).then(function(a){return a.default}).then(function(a){return new a(f)});case "heatmap":return c.create(function(a){e(function(){return d(["./tileRenderers/HeatmapTileRenderer"],
a)})}).then(function(a){return a.default}).then(function(a){return new a(f)})}return c.resolve(null)}});