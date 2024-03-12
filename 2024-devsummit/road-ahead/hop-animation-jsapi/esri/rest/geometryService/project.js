// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../request ../../core/accessorSupport/ensureType ../../geometry/support/jsonUtils ../utils ./utils ../support/ProjectParameters".split(" "),function(c,e,f,g,d,h,k){const l=f.ensureType(k);c.project=async function(b,a,m){a=l(a);b=d.parseUrl(b);const n={...b.query,f:"json",...a.toJSON()},p=a.outSpatialReference,q=g.getJsonType(a.geometries[0]);a=d.asValidOptions(n,m);return e(b.path+"/project",a).then(({data:{geometries:r}})=>h.decodeGeometries(r,q,p))};Object.defineProperty(c,Symbol.toStringTag,
{value:"Module"})});