// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../request","../../geometry/support/jsonUtils","../../geometry/support/spatialReferenceUtils","../utils"],function(d,h,e,k,f){d.reshape=async function(b,a,l,c){const g=a.spatialReference;b=f.parseUrl(b);a={...b.query,f:"json",sr:k.srToRESTValue(g),target:JSON.stringify({geometryType:e.getJsonType(a),geometry:a.toJSON()}),reshaper:JSON.stringify(l.toJSON())};c=f.asValidOptions(a,c);return h(b.path+"/reshape",c).then(({data:m})=>e.fromJSON(m.geometry).set({spatialReference:g}))};
Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});