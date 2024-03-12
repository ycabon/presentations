// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports"],function(a){a.getEffectiveGeometryType=function(b){switch(b.geometryType){case "point":return"esriGeometryPoint";case "polyline":return"esriGeometryPolyline";case "polygon":return"esriGeometryPolygon";case "multipatch":return"esriGeometryPolygon";case "multipoint":return"esriGeometryMultipoint";default:return null}};Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});