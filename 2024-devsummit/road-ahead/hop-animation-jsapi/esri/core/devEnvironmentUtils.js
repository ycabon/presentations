// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports"],function(c){const d=/^devext.arcgis.com$/,e=/^qaext.arcgis.com$/,f=/^[\w-]*\.mapsdevext.arcgis.com$/,g=/^[\w-]*\.mapsqa.arcgis.com$/,h=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,d,e,/^jsapps.esri.com$/,f,g];c.adjustStaticAGOUrl=function(a,b){return a?(b=b||globalThis.location.hostname)?null!=b.match(d)||null!=b.match(f)?a.replace("static.arcgis.com","staticdev.arcgis.com"):null!=b.match(e)||null!=b.match(g)?a.replace("static.arcgis.com","staticqa.arcgis.com"):a:a:a};c.devHostnames=
h;c.isDevEnvironment=function(a){a=a||globalThis.location.hostname;return h.some(b=>null!=a?.match(b))};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});