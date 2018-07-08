// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["require","exports","../../renderers/support/utils"],function(c,a,b){Object.defineProperty(a,"__esModule",{value:!0});a.supportsUnit=function(a){return null!=b.meterIn[a]};a.getMetersPerUnit=function(a){return 1/(b.meterIn[a]||1)}});