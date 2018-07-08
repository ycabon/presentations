// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(g,d){function e(a,c){return{near:a,far:c}}function f(a,c,b){a.near=c;a.far=b;return a}Object.defineProperty(d,"__esModule",{value:!0});d.create=e;d.empty=function(a){return a?f(a,Infinity,-Infinity):e(Infinity,-Infinity)};d.set=f;d.union=function(a,c,b){void 0===b&&(b=a);b.near=Math.min(a.near,c.near);b.far=Math.max(a.far,c.far);return b}});