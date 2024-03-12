// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../request ../../core/urlUtils ../../geometry/support/jsonUtils ../../geometry/support/spatialReferenceUtils ./utils".split(" "),function(c,f,g,h,k,d){c.simplify=async function(b,a,l){const e="string"===typeof b?g.urlToObject(b):b;b=a[0].spatialReference;const m=h.getJsonType(a[0]);a={...l,query:{...e.query,f:"json",sr:k.srToRESTValue(b),geometries:JSON.stringify(d.encodeGeometries(a))}};({data:a}=await f(e.path+"/simplify",a));return d.decodeGeometries(a.geometries,m,b)};Object.defineProperty(c,
Symbol.toStringTag,{value:"Module"})});