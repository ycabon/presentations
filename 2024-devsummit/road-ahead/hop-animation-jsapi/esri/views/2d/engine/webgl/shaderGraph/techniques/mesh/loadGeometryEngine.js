// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(c,a){let b=null;a.getGeometryEngine=function(){return b};a.loadGeometryEngine=async function(){b=await new Promise((d,e)=>c(["../../../../../../../geometry/geometryEngineJSON"],d,e))};Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});