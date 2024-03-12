// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../geometry/support/geodesicUtils","../../geometry/support/spatialReferenceUtils"],function(a,e,d){a.geodesicDistanceThreshold=1E5;a.geodesicMeasure=function(b,f,g,h,...c){return d.isGeographic(b)&&e.isSupported(b)?f.apply(void 0,c):d.isWebMercator(b)?g.apply(void 0,c):h.apply(void 0,c)};Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});