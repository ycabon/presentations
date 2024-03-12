// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../multiOriginJSONSupportUtils"],function(c,f){c.updateOrigins=function(d){d?.writtenProperties&&d.writtenProperties.forEach(({target:a,propName:e,newOrigin:b})=>{f.isMultiOriginJSONMixin(a)&&b&&a.originOf(e)!==b&&a.updateOrigin(e,b)})};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});