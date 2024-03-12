// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports"],function(c){c.cache=function(a){const d=[];return function*(){yield*d;for(const b of a)d.push(b),yield b}};c.find=function(a,d){for(const b of a)if(null!=b&&d(b))return b};c.isIterable=function(a){return null!=a&&"function"===typeof a[Symbol.iterator]};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});