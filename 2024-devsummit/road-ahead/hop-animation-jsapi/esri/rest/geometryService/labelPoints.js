// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../request","../../geometry/support/jsonUtils","../../geometry/support/spatialReferenceUtils","../utils"],function(e,k,l,m,f){e.labelPoints=function(a,g,b){var d=g.map(c=>c.toJSON());const h=g[0].spatialReference;a=f.parseUrl(a);d={...a.query,f:"json",sr:m.srToRESTValue(h),polygons:JSON.stringify(d)};b=f.asValidOptions(d,b);return k(a.path+"/labelPoints",b).then(({data:c})=>(c.labelPoints||[]).map(n=>l.fromJSON(n).set({spatialReference:h})))};Object.defineProperty(e,Symbol.toStringTag,
{value:"Module"})});