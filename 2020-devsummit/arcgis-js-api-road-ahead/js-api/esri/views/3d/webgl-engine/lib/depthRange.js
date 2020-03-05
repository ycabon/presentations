// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(g,d){function e(a,b){return{near:a,far:b}}function f(a,b,c){a.near=b;a.far=c;return a}Object.defineProperty(d,"__esModule",{value:!0});d.create=e;d.empty=function(a){return a?f(a,Infinity,-Infinity):e(Infinity,-Infinity)};d.set=f;d.union=function(a,b,c){void 0===c&&(c=a);c.near=Math.min(a.near,b.near);c.far=Math.max(a.far,b.far);return c};d.within=function(a,b){return a.near<=b&&b<=a.far}});