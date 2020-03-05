// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","./object","@dojo/framework/shim/string"],function(f,a,d,b){Object.defineProperty(a,"__esModule",{value:!0});var e=/\{([^\}]+)\}/g;a.endsWith=b.endsWith;a.startsWith=b.startsWith;a.padEnd=b.padEnd;a.padStart=b.padStart;a.replace=function(a,c){return a.replace(e,"object"===typeof c?function(a,b){return d.getDeepValue(b,c)}:function(a,b){return c(b)})};a.escapeRegExpString=function(a,c){return a.replace(/([\.$?*|{}\(\)\[\]\\\/\+\-^])/g,function(a){return c&&-1!==c.indexOf(a)?
a:"\\"+a})};a.numericHash=function(a){for(var c=0,b=0;b<a.length;b++)c=(c<<5)-c+a.charCodeAt(b),c|=0;return c}});