// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(e,d){Object.defineProperty(d,"__esModule",{value:!0});d.encodeSymbolColor=function(a,c,b){null==a||"ignore"===c?(b[0]=255,b[1]=255,b[2]=255,b[3]=255):(b[0]=Math.floor(255*a[0]),b[1]=Math.floor(255*a[1]),b[2]=Math.floor(255*a[2]),a=Math.floor(85*a[3]),b[3]=0===a?0:"tint"===c?a:"replace"===c?a+85:a+170)}});