// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports"],function(b){b.getAllTemplatesForLayer=a=>{if(null==a||"object"!==typeof a)return[];const c="templates"in a&&Array.isArray(a.templates)?a.templates:[];a="types"in a&&Array.isArray(a.types)?a.types.flatMap(d=>d.templates):[];return[...c,...a]};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});