// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["require","exports","./propUtils"],function(e,c,d){Object.defineProperty(c,"__esModule",{value:!0});c.renderable=function(b){var c="string"===typeof b?d.splitProps(b):b;return function(a,b){a._renderableProps||(a._renderableProps=[]);a=a._renderableProps;c?a.push.apply(a,d.normalizePropNames(c,b)):a.push(b)}}});