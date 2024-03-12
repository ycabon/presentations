// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../geometry ../../request ../utils ../operations/trimExtend ../support/TrimExtendParameters ../../geometry/Polyline".split(" "),function(c,q,e,d,f,g,h){c.trimExtend=async function(b,a,k){a=g.from(a);const l=f.trimExtendToRESTParameters(a);b=d.parseUrl(b);const m=a.sr;a=d.asValidOptions({...b.query,f:"json",...l},k);return e(b.path+"/trimExtend",a).then(({data:n})=>(n.geometries||[]).map(({paths:p})=>new h({spatialReference:m,paths:p})))};Object.defineProperty(c,Symbol.toStringTag,
{value:"Module"})});