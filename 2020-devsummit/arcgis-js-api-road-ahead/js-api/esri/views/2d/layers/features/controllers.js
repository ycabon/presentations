// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/assignHelper ../../../../core/tsSupport/generatorHelper ../../../../core/tsSupport/awaiterHelper ../../../../core/Error ../../../../core/promiseUtils".split(" "),function(c,a,e,f,g,d,b){Object.defineProperty(a,"__esModule",{value:!0});a.loadControllerModule=function(a){switch(a){case "on-demand":return b.create(function(a){return c(["./controllers/OnDemandController"],a)});case "stream":return b.create(function(a){return c(["./controllers/StreamController"],
a)});default:return b.reject(new d("mapview-controller:bad-type","Unable to create controller for unknown type: "+a))}}});