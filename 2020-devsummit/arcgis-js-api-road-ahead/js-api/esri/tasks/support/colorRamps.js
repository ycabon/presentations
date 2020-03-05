// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","./AlgorithmicColorRamp","./ColorRamp","./MultipartColorRamp"],function(f,b,c,e,d){Object.defineProperty(b,"__esModule",{value:!0});b.types={key:"type",base:e,typeMap:{algorithmic:c,multipart:d}};b.fromJSON=function(a){return a&&a.type?"algorithmic"===a.type?c.fromJSON(a):"multipart"===a.type?d.fromJSON(a):null:null}});