// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports"],function(c){function d(a){return"graphic"===a?.type}c.filterGraphicHits=function(a){return a.filter(d)};c.findFirstGraphicHit=function(a){return a.find(d)??null};c.hitTestSelectSimilarDistance=async function(a,b){if("2d"===a.type)return a.hitTest(b);a=await a.hitTest(b);if(0===a.results.length)return a;b=a.results[0];const e=1.05*(b.distance??0),f=a.results.findIndex(g=>(g.distance??0)>e);-1!==f&&(a.results=a.results.slice(0,f));b&&a.ground.distance>e&&(a.ground.mapPoint=null);
return a};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});