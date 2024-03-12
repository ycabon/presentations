// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../geometry/projection","../../geometry/spatialReferenceEllipsoidUtils"],function(d,e,b){d.computeEuclideanMeasurementSR=function(c){var a=b.getSphericalPCPF(c);a=a===b.SphericalECEFSpatialReference?b.WGS84ECEFSpatialReference:a;return e.canProjectWithoutEngine(c,a)?a:c};Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});