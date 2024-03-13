// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../core/unitUtils","../ellipsoidUtils","./spatialReferenceUtils"],function(g,h,k,l){g.getGeometryZScaler=function(m,f,b){if(null==f||null==b||b.vcsWkid||l.equals(f,b)||k.isSphericalPCPF(f)||k.isSphericalPCPF(b))return null;f=h.getMetersPerVerticalUnitForSR(f);b=h.getMetersPerVerticalUnitForSR(b);const c=f/b;if(1===c)return null;switch(m){case "point":case "esriGeometryPoint":return a=>{null!=a?.z&&(a.z*=c)};case "polyline":case "esriGeometryPolyline":return a=>{if(a)for(const d of a.paths)for(const e of d)2<
e.length&&(e[2]*=c)};case "polygon":case "esriGeometryPolygon":return a=>{if(a)for(const d of a.rings)for(const e of d)2<e.length&&(e[2]*=c)};case "multipoint":case "esriGeometryMultipoint":return a=>{if(a)for(const d of a.points)2<d.length&&(d[2]*=c)};case "extent":case "esriGeometryEnvelope":return a=>{a&&null!=a.zmin&&null!=a.zmax&&(a.zmin*=c,a.zmax*=c)};default:return null}};Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});