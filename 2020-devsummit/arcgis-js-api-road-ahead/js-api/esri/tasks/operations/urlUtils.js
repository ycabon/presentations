// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(g,c){function f(c){var d={},b;for(b in c)if("declaredClass"!==b){var a=c[b];if(null!=a&&"function"!==typeof a)if(Array.isArray(a)){d[b]=[];for(var e=0;e<a.length;e++)d[b][e]=f(a[e])}else"object"===typeof a?a.toJSON&&(d[b]=JSON.stringify(a)):d[b]=a}return d}Object.defineProperty(c,"__esModule",{value:!0});c.mapParameters=f});