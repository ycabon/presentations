// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(l,g){function f(a,b){return b&&b.xoffset?Math.max(a,Math.abs(b.xoffset)):b&&b.yoffset?Math.max(a,Math.abs(b.yoffset)):a}function h(a,b){if("number"===typeof a)return a;if(a&&a.stops&&a.stops.length){a=a.stops;for(var d=b=0,c=0;c<a.length;c++){var e=a[c].size;"number"===typeof e&&(b+=e,d++)}return b/d}return b}function k(a,b){if(!b)return a;b=b.filter(function(a){return"size"===a.type}).map(function(b){var c=b.minSize;return(h(b.maxSize,a)+h(c,a))/2});var d=0,
c=b.length;if(0===c)return a;for(var e=0;e<c;e++)d+=b[e];return Math.max(Math.floor(d/c),a)}Object.defineProperty(g,"__esModule",{value:!0});g.calculateTolerance=function(a){var b=a&&a.renderer;a="touch"===(a&&a.event&&a.event.pointerType)?9:6;if(!b)return a;a="visualVariables"in b?k(a,b.visualVariables):a;if("simple"===b.type)return f(a,b.symbol);if("unique-value"===b.type){var d=a;b.uniqueValueInfos.forEach(function(a){d=f(d,a.symbol)});return d}if("class-breaks"===b.type){var c=a;b.classBreakInfos.forEach(function(a){c=
f(c,a.symbol)});return c}return a}});