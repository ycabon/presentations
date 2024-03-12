// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../request","../../geometry/support/jsonUtils","../utils"],function(d,f,g,e){d.densify=async function(a,b,c){const h=b.geometries?.[0].spatialReference;a=e.parseUrl(a);b={...a.query,f:"json",...b.toJSON()};c=e.asValidOptions(b,c);return f(a.path+"/densify",c).then(({data:k})=>(k.geometries||[]).map(l=>g.fromJSON(l).set({spatialReference:h})))};Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});