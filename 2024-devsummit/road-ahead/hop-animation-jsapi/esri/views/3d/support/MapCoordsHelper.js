// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../geometry ../../../core/Error ../../../core/unitUtils ../../../geometry/ellipsoidUtils ../../../portal/support/geometryServiceUtils ../../../rest/geometryService/project ../../../rest/support/ProjectParameters ../../../geometry/Point ../../../geometry/SpatialReference".split(" "),function(d,r,g,h,k,l,m,n,e,p){class q{constructor(a,c){this.spatialReference=c;this.unitInMeters=h.getMetersPerUnitForSR(this.spatialReference,k.getReferenceEllipsoid(this.spatialReference).metersPerDegree);
this._geometryServiceURLPromise=l.getGeometryServiceURL(a&&"portalItem"in a?a.portalItem:void 0).catch(()=>{throw new g("mapcoordshelper:missing-geometry-service","Must specify geometryService in esri/config");})}async toGeographic(a){var c=await this._geometryServiceURLPromise;let f=!0;Array.isArray(a[0])&&"number"!==typeof a[0]||(a=[a],f=!1);a=a.map(b=>b instanceof e?b:new e(b,this.spatialReference));a=new n({geometries:a,outSpatialReference:p.WGS84});c=(await m.project(c,a)).map(b=>"point"===b.type?
[b.x,b.y]:void 0).filter(b=>!!b);return f?c:c[0]}}d.MapCoordsHelper=q;Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});