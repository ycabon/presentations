// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","./global"],function(e,a,c){function b(a){return{setTimeout:function(b,c){var d=a.setTimeout(b,c);return{remove:function(){return a.clearTimeout(d)}}}}}Object.defineProperty(a,"__esModule",{value:!0});a.wrap=b;a.default=b(c)});