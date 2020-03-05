// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(e,c){function d(a,b){return Math.sqrt(a*a+b*b)}Object.defineProperty(c,"__esModule",{value:!0});c.sub=function(a,b,c){a[0]=b[0]-c[0];a[1]=b[1]-c[1];return a};c.len=d;c.normalize=function(a){var b=d(a[0],a[1]);a[0]/=b;a[1]/=b};c.dist=function(a,b){return d(a[0]-b[0],a[1]-b[1])};c.isFunction=function(a){return"function"===typeof a};c.getLimitCosine=function(a){return 1/Math.max(a,1)}});