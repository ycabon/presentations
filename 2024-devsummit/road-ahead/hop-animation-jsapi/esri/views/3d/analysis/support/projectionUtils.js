// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../../geometry/projection","../../support/ElevationProvider"],function(c,e,f){c.applyProjectionAndElevationAlignment=function(a,d,b,g=!1){a=e.tryProjectWithZConversion(a,d);if(null==a)return null;a.hasZ&&!g||null==b||(a.z=f.getElevationAtPoint(b,a)??0);return a};c.logFailedGeometryProjectionError=function(a,d,b){b.warnOnce(`Failed to project analysis geometry (id: '${a.id}'), projection from spatial reference `+`(wkid: '${d.wkid}') to view spatial reference is not supported. `+
"Projection may be possible after calling projection.load().")};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});