// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports"],function(b){function c(a,d){return a.layerType&&"ArcGISFeatureLayer"===a.layerType?a.featureCollectionType===d?!0:!1:!1}b.isMapNotesLayer=function(a){return c(a,"notes")};b.isMarkupLayer=function(a){return c(a,"markup")};b.isRouteLayer=function(a){return c(a,"route")};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});