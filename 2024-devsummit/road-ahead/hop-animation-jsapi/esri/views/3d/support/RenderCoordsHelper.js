// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../core/mathUtils ../../../core/unitUtils ../../../core/libs/gl-matrix-2/math/mat4 ../../../chunks/vec32 ../../../geometry/ellipsoidUtils ../../../geometry/spatialReferenceEllipsoidUtils ../../../geometry/projection/projectPointToVector ../../../geometry/projection/projectVectorToPoint ../../../geometry/projection/projectVectorToVector ../../../geometry/support/Axis ../../../geometry/support/coordinateSystem ../../../geometry/support/plane ../../../geometry/support/vector ../../../geometry/support/vectorStacks ../../../layers/graphics/dehydratedFeatureUtils ../../ViewingMode".split(" "),
function(m,r,k,t,n,u,v,w,x,p,h,d,y,z,f,q,g){class l{constructor(b,a,c,e){this.viewingMode=b;this.spatialReference=a;this.unitInMeters=c;this._coordinateSystem=e;this._tmpCoordinateSystem=d.create(e);this.referenceEllipsoid=u.getReferenceEllipsoid(a);this.sphericalPCPF=v.getSphericalPCPF(a)}set extent(b){b&&d.setExtent(this._coordinateSystem,b,this._coordinateSystem)}getAltitude(b){return d.altitudeAt(this._coordinateSystem,b)}setAltitude(b,a,c=b){return d.setAltitudeAt(this._coordinateSystem,c,a,
b)}setAltitudeOfTransformation(b,a){d.setAltitudeOfTransformation(this._coordinateSystem,a,b,a)}worldUpAtPosition(b,a){return d.normalAt(this._coordinateSystem,b,a)}worldBasisAtPosition(b,a,c){return d.axisAt(this._coordinateSystem,b,a,c)}basisMatrixAtPosition(b,a){const c=this.worldBasisAtPosition(b,h.Axis.X,f.sv3d.get()),e=this.worldBasisAtPosition(b,h.Axis.Y,f.sv3d.get());b=this.worldBasisAtPosition(b,h.Axis.Z,f.sv3d.get());t.set(a,c[0],c[1],c[2],0,e[0],e[1],e[2],0,b[0],b[1],b[2],0,0,0,0,1);return a}headingAtPosition(b,
a){const c=this.worldUpAtPosition(b,f.sv3d.get());b=this.worldBasisAtPosition(b,h.Axis.Y,f.sv3d.get());a=z.angleAroundAxis(a,b,c);return r.rad2deg(a)}intersectManifoldClosestSilhouette(b,a,c){d.elevate(this._coordinateSystem,a,this._tmpCoordinateSystem);d.intersectRayClosestSilhouette(this._tmpCoordinateSystem,b,c);return c}intersectManifold(b,a,c){d.elevate(this._coordinateSystem,a,this._tmpCoordinateSystem);a=f.sv3d.get();return d.intersectRay(this._tmpCoordinateSystem,b,a)?n.copy(c,a):null}intersectInfiniteManifold(b,
a,c){if(this.viewingMode===g.ViewingMode.Global)return this.intersectManifold(b,a,c);d.elevate(this._coordinateSystem,a,this._tmpCoordinateSystem);a=this._tmpCoordinateSystem.value;const e=f.sv3d.get();return y.intersectRay(a.plane,b,e)?n.copy(c,e):null}toRenderCoords(b,a,c){return q.isDehydratedPoint(b)?w.projectPointToVector(b,a,this.spatialReference):p.projectVectorToVector(b,a,c,this.spatialReference)}fromRenderCoords(b,a,c=null){return q.isDehydratedPoint(a)?(null!=c&&(a.spatialReference=c),
x.projectVectorToPoint(b,this.spatialReference,a)?a:null):p.projectVectorToVector(b,this.spatialReference,a,c)?a:null}static create(b,a){switch(b){case g.ViewingMode.Local:return new l(g.ViewingMode.Local,a,k.getMetersPerUnitForSR(a),d.createLocal());case g.ViewingMode.Global:return new l(g.ViewingMode.Global,a,1,d.createGlobal(a))}}static renderUnitScaleFactor(b,a){return k.getMetersPerCartesianUnitForSR(b)/k.getMetersPerCartesianUnitForSR(a)}}m.RenderCoordsHelper=l;Object.defineProperty(m,Symbol.toStringTag,
{value:"Module"})});