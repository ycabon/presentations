// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../core/jsonMap","../../geometry/support/spatialReferenceUtils"],function(b,g,h){const k=new g.JSONMap({preserveShape:"preserve-shape"});b.lengthsToRESTParameters=function(c){const {polylines:l,lengthUnit:d,geodesic:e,calculationType:f}=c.toJSON(),a={};a.polylines=JSON.stringify(l);a.sr=h.srToRESTValue(c.polylines[0].spatialReference);d&&(a.lengthUnit=d);e&&(a.geodesic=e);f&&(a.calculationType=k.toJSON(f));return a};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});