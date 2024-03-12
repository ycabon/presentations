// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../core/jsonMap"],function(c,e){const f=new e.JSONMap({0:"default-curve-extension",1:"relocate-ends",2:"keep-end-attributes",4:"no-end-attributes",8:"no-extend-at-from",16:"no-extend-at-to"});c.trimExtendToRESTParameters=function(a){const {extendHow:g,polylines:b,trimExtendTo:d}=a.toJSON();a={};a.extendHow=f.toJSON(g);b?.length&&(a.polylines=JSON.stringify(b),a.sr=JSON.stringify(b[0].spatialReference));d&&(a.trimExtendTo=JSON.stringify(d));return a};Object.defineProperty(c,Symbol.toStringTag,
{value:"Module"})});