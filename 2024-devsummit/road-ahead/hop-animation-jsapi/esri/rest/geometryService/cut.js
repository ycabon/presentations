// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../geometry ../../request ../../geometry/support/jsonUtils ../../geometry/support/spatialReferenceUtils ../utils".split(" "),function(d,q,g,e,h,k){d.cut=async function(b,a,l,m){b=k.parseUrl(b);const f=a[0].spatialReference;a={...m,responseType:"json",query:{...b.query,f:"json",sr:h.srToRESTValue(f),target:JSON.stringify({geometryType:e.getJsonType(a[0]),geometries:a}),cutter:JSON.stringify(l)}};a=await g(b.path+"/cut",a);const {cutIndexes:n,geometries:p=[]}=a.data;return{cutIndexes:n,
geometries:p.map(c=>{c=e.fromJSON(c);c.spatialReference=f;return c})}};Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});