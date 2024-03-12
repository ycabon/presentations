// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../geometry ../../request ../../geometry/support/spatialReferenceUtils ../utils ./utils ../../geometry/Polygon".split(" "),function(d,q,h,k,e,f,l){d.autoComplete=async function(a,b,m,c){const g=b[0].spatialReference;a=e.parseUrl(a);b={...a.query,f:"json",sr:k.srToRESTValue(g),polygons:JSON.stringify(f.encodeGeometries(b).geometries),polylines:JSON.stringify(f.encodeGeometries(m).geometries)};c=e.asValidOptions(b,c);return h(a.path+"/autoComplete",c).then(({data:n})=>(n.geometries||
[]).map(({rings:p})=>new l({spatialReference:g,rings:p})))};Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});