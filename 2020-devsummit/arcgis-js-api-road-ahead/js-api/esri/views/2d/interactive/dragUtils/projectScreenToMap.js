// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../geometry/support/webMercatorUtils"],function(e,b,d){Object.defineProperty(b,"__esModule",{value:!0});b.createForView=function(b){return function(a,c){return(a=b.toMap(a))?a.spatialReference.equals(c)?a:d.canProject(a,c)?d.project(a,c):null:null}}});