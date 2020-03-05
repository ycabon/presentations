// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","../../renderers/support/utils"],function(d,b,c){Object.defineProperty(b,"__esModule",{value:!0});b.supportsUnit=function(a){return null!=c.meterIn[a]};b.getMetersPerUnit=function(a){return 1/(c.meterIn[a]||1)};b.supportedUnits=function(){var a=Object.keys(c.meterIn);a.sort();return a}()});