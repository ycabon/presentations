// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports"],function(e){function f(a){const {tagName:b,tags:c}=a;return c&&b?c.find(d=>d.name===b)?.value||null:null}e.getExifValue=function(a){const {exifInfo:b,exifName:c,tagName:d}=a;return b&&c&&d?(a=b.find(g=>g.name===c))?f({tagName:d,tags:a.tags}):null:null};Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});