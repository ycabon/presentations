// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../request ../../geometry/support/jsonUtils ../utils ../operations/generalize ../support/GeneralizeParameters".split(" "),function(d,f,g,e,h,k){d.generalize=async function(b,a,c){a=k.from(a);const l=a.toJSON();a=h.generalizeToRESTParameters(a);b=e.parseUrl(b);const m=l.geometries[0].spatialReference;c=e.asValidOptions({...b.query,f:"json",...a},c);return f(b.path+"/generalize",c).then(({data:n})=>(n.geometries||[]).map(p=>g.fromJSON(p).set({spatialReference:m})))};Object.defineProperty(d,
Symbol.toStringTag,{value:"Module"})});