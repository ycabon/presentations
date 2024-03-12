// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../request","../../geometry/support/jsonUtils","../utils","./utils"],function(c,h,d,k,l){c.difference=async function(b,a,e,f){const g=a[0].spatialReference;b=k.parseUrl(b);a={query:{...b.query,f:"json",sr:JSON.stringify(g.toJSON()),geometries:JSON.stringify(l.encodeGeometries(a)),geometry:JSON.stringify({geometryType:d.getJsonType(e),geometry:e.toJSON()})}};f&&(a={...f,...a});return h(b.path+"/difference",a).then(({data:m})=>(m.geometries||[]).map(n=>d.fromJSON(n).set({spatialReference:g})))};
Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});