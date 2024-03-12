// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../request","../../geometry/support/jsonUtils","../utils","./utils"],function(d,k,e,f,l){d.intersect=async function(a,b,g,c){const h=b[0].spatialReference;a=f.parseUrl(a);b={...a.query,f:"json",sr:JSON.stringify(h.toJSON()),geometries:JSON.stringify(l.encodeGeometries(b)),geometry:JSON.stringify({geometryType:e.getJsonType(g),geometry:g.toJSON()})};c=f.asValidOptions(b,c);return k(a.path+"/intersect",c).then(({data:m})=>(m.geometries||[]).map(n=>e.fromJSON(n).set({spatialReference:h})))};
Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});