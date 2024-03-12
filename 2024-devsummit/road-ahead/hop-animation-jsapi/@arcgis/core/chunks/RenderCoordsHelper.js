/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{r as t}from"./mathUtils.js";import{r as e,g as s,Z as o}from"./unitUtils.js";import{c as i,u as r}from"./mat4.js";import{s as n,d as a,p as l,n as c,e as u}from"./vec3.js";import{g as m}from"./spatialReferenceEllipsoidUtils.js";import{p}from"./projectPointToVector.js";import{p as d}from"./projectVectorToPoint.js";import{p as f}from"./projectVectorToVector.js";import{A as h}from"./Axis.js";import{c as v}from"./vec3f64.js";import y from"../geometry/SpatialReference.js";import{f as S,b as j}from"./boundedPlane.js";import{f as A,s as _}from"./sphere.js";import{s as g,I as P,m as w}from"./plane.js";import{i as C}from"./ElevationProvider.js";import{V as R}from"./ViewingMode.js";function M(t,e,s=function(t){return{operations:t,value:t.create()}}(t)){return s.operations=t,t.copy(e,s.value),s}const x=2**50;function b(t,e,s,o){return t.operations.setAltitudeAt(t.value,e,s,o)}function U(t,e,s){return t.operations.elevate(t.value,e,s.value)}const V=v();function B(t,e,s,o,i){return i[0]=a(t,e),i[1]=a(t,s),i[2]=a(t,o),i}function E(t,e,s,o,i){l(s,t),l(T,e),c(T,T),u(o,T,s),u(i,o,s)}function G(t,e){return t?m(e):e.isGeographic?y.PlateCarree:e}const T=v();class I{constructor(t,s,o,i){this.viewingMode=t,this.spatialReference=s,this.unitInMeters=o,this._coordinateSystem=i,this._tmpCoordinateSystem=function(t){const{value:e,operations:s}=t;return{operations:s,value:s.create(e)}}(i),this.referenceEllipsoid=e(s),this.sphericalPCPF=m(s)}set extent(t){t&&function(t,e,s){t.operations.setExtent(t.value,e,s.value)}(this._coordinateSystem,t,this._coordinateSystem)}getAltitude(t){return s=t,(e=this._coordinateSystem).operations.altitudeAt(e.value,s);var e,s}setAltitude(t,e,s=t){return b(this._coordinateSystem,s,e,t)}setAltitudeOfTransformation(t,e){!function(t,e,s,o){e!==o&&i(o,e),n(V,o[12],o[13],o[14]),b(t,V,s,V),o[12]=V[0],o[13]=V[1],o[14]=V[2]}(this._coordinateSystem,e,t,e)}worldUpAtPosition(t,e){return o=t,i=e,(s=this._coordinateSystem).operations.axisAt(s.value,o,h.Z,i);var s,o,i}worldBasisAtPosition(t,e,s){return i=t,r=e,n=s,(o=this._coordinateSystem).operations.axisAt(o.value,i,r,n);var o,i,r,n}basisMatrixAtPosition(t,e){const s=this.worldBasisAtPosition(t,h.X,g.get()),o=this.worldBasisAtPosition(t,h.Y,g.get()),i=this.worldBasisAtPosition(t,h.Z,g.get());return r(e,s[0],s[1],s[2],0,o[0],o[1],o[2],0,i[0],i[1],i[2],0,0,0,0,1),e}headingAtPosition(e,s){const o=this.worldUpAtPosition(e,g.get()),i=this.worldBasisAtPosition(e,h.Y,g.get()),r=P(s,i,o);return t(r)}intersectManifoldClosestSilhouette(t,e,s){var o,i,r;return U(this._coordinateSystem,e,this._tmpCoordinateSystem),i=t,r=s,(o=this._tmpCoordinateSystem).operations.intersectRayClosestSilhouette(o.value,i,r),s}intersectManifold(t,e,s){U(this._coordinateSystem,e,this._tmpCoordinateSystem);const o=g.get();return r=t,n=o,(i=this._tmpCoordinateSystem).operations.intersectRay(i.value,r,n)?l(s,o):null;var i,r,n}intersectInfiniteManifold(t,e,s){if(this.viewingMode===R.Global)return this.intersectManifold(t,e,s);U(this._coordinateSystem,e,this._tmpCoordinateSystem);const o=this._tmpCoordinateSystem.value,i=g.get();return w(o.plane,t,i)?l(s,i):null}toRenderCoords(t,e,s){return C(t)?p(t,e,this.spatialReference):f(t,e,s,this.spatialReference)}fromRenderCoords(t,e,s=null){return C(e)?(null!=s&&(e.spatialReference=s),d(t,this.spatialReference,e)?e:null):f(t,this.spatialReference,e,s)?e:null}static create(t,o){switch(t){case R.Local:return new I(R.Local,o,s(o),M(j,S([0,0,0],[x,0,0],[0,x,0])));case R.Global:return new I(R.Global,o,1,function(t){return M(_,A(0,0,0,e(t).radius))}(o))}}static renderUnitScaleFactor(t,e){return o(t)/o(e)}}export{I as R,E as c,G as r,B as v};
