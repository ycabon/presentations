// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","../../core/jsonMap"],function(g,a,e){Object.defineProperty(a,"__esModule",{value:!0});var f=new e.default({0:"default-curve-extension",1:"relocate-ends",2:"keep-end-attributes",4:"no-end-attributes",8:"no-extend-at-from",16:"no-extend-at-to"});a.trimExtendToRESTParameters=function(b){b=b.toJSON();var d=b.polylines,a=b.trimExtendTo,c={};c.extendHow=f.toJSON(b.extendHow);d&&d.length&&(c.polylines=JSON.stringify(d),c.sr=JSON.stringify(d[0].spatialReference));a&&(c.trimExtendTo=
JSON.stringify(a));return c}});