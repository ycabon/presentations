// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(c,a){Object.defineProperty(a,"__esModule",{value:!0});a.splitProps=function(a){return a.split(",").map(function(a){return a.trim()})};a.normalizePropNames=function(a,b){return a.map(function(a){a=0===a.indexOf(b)?a:b+"."+a;return a})}});