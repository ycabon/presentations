// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports"],function(c){function d(a,b,e){a.near=b;a.far=e;return a}class f{constructor(){this.near=Number.MAX_VALUE;this.far=-Number.MAX_VALUE}}c.DepthRange=f;c.create=function(a,b){return{near:a,far:b}};c.empty=function(a){return a?d(a,Infinity,-Infinity):{near:Infinity,far:-Infinity}};c.set=d;c.union=function(a,b){null!=b&&(a.near=Math.min(a.near,b.near),a.far=Math.max(a.far,b.far))};c.within=function(a,b){return a.near<=b&&b<=a.far};c.zero={near:0,far:0};Object.defineProperty(c,Symbol.toStringTag,
{value:"Module"})});