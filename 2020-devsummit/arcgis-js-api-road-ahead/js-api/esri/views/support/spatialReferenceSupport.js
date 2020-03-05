// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(c,a){Object.defineProperty(a,"__esModule",{value:!0});a.isSpatialReferenceSupported=function(b,a){return null==b?!1:"2d"===a?!0:"local"===a?!b.isGeographic:b.isWebMercator||b.isWGS84||4490===b.wkid}});