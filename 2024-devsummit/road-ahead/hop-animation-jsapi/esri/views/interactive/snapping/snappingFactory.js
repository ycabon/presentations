// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","./FeatureSnappingEngine","./SelfSnappingEngine"],function(b,d,e){b.defaultSnappingEnginesFactory=function(a,c){return[new e.SelfSnappingEngine({view:a,options:c}),new d.FeatureSnappingEngine({view:a,options:c,spatialReference:a.spatialReference})]};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});