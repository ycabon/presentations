"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[5892,3981],{43981:(e,n,t)=>{t.r(n),t.d(n,{g:()=>o});var i=t(33361),r=t(77314);const o=Object.freeze(Object.defineProperty({__proto__:null,buffer:function(e,n,t,o,s=!1){return i.G.buffer(r.j,e,n,t,o,s)},changeDefaultSpatialReferenceTolerance:function(e,n){i.G.changeDefaultSpatialReferenceTolerance(e,n)},clearDefaultSpatialReferenceTolerance:function(e){i.G.clearDefaultSpatialReferenceTolerance(e)},clip:function(e,n,t){return i.G.clip(r.j,e,n,t)},contains:function(e,n,t){return i.G.contains(r.j,e,n,t)},convexHull:function(e,n,t=!1){return i.G.convexHull(r.j,e,n,t)},crosses:function(e,n,t){return i.G.crosses(r.j,e,n,t)},cut:function(e,n,t){return i.G.cut(r.j,e,n,t)},densify:function(e,n,t,o){return i.G.densify(r.j,e,n,t,o)},difference:function(e,n,t){return i.G.difference(r.j,e,n,t)},disjoint:function(e,n,t){return i.G.disjoint(r.j,e,n,t)},distance:function(e,n,t,o){return i.G.distance(r.j,e,n,t,o)},equals:function(e,n,t){return i.G.equals(r.j,e,n,t)},extendedSpatialReferenceInfo:function(e){return i.G.extendedSpatialReferenceInfo(e)},flipHorizontal:function(e,n,t){if(null==n||null==t)throw new Error("Illegal Argument Exception");const r=i.G.flipHorizontal(n,t);return r.spatialReference=e,r},flipVertical:function(e,n,t){if(null==n||null==t)throw new Error("Illegal Argument Exception");const r=i.G.flipVertical(n,t);return r.spatialReference=e,r},generalize:function(e,n,t,o,s){return i.G.generalize(r.j,e,n,t,o,s)},geodesicArea:function(e,n,t,o){return i.G.geodesicArea(r.j,e,n,t,o)},geodesicBuffer:function(e,n,t,o,s,c,u){return i.G.geodesicBuffer(r.j,e,n,t,o,s,c,u)},geodesicDensify:function(e,n,t,o,s=0){return i.G.geodesicDensify(r.j,e,n,t,o,s)},geodesicLength:function(e,n,t,o){return i.G.geodesicLength(r.j,e,n,t,o)},intersect:function(e,n,t){return i.G.intersect(r.j,e,n,t)},intersectLinesToPoints:function(e,n,t){return null==n||null==t?[]:i.G.intersectLinesToPoints(r.j,e,n,t)},intersects:function(e,n,t){return i.G.intersects(r.j,e,n,t)},isSimple:function(e,n){return i.G.isSimple(r.j,e,n)},nearestCoordinate:function(e,n,t,o=!0){return i.G.nearestCoordinate(r.j,e,n,t,o)},nearestVertex:function(e,n,t){return i.G.nearestVertex(r.j,e,n,t)},nearestVertices:function(e,n,t,o,s){return i.G.nearestVertices(r.j,e,n,t,o,s)},offset:function(e,n,t,o,s,c,u){return i.G.offset(r.j,e,n,t,o,s,c,u)},overlaps:function(e,n,t){return i.G.overlaps(r.j,e,n,t)},planarArea:function(e,n,t){return i.G.planarArea(r.j,e,n,t)},planarLength:function(e,n,t){return i.G.planarLength(r.j,e,n,t)},relate:function(e,n,t,o){return i.G.relate(r.j,e,n,t,o)},rotate:function(e,n,t,r){if(null==n||null==r)throw new Error("Illegal Argument Exception");const o=i.G.rotate(n,t,r);return o.spatialReference=e,o},simplify:function(e,n){return i.G.simplify(r.j,e,n)},symmetricDifference:function(e,n,t){return i.G.symmetricDifference(r.j,e,n,t)},touches:function(e,n,t){return i.G.touches(r.j,e,n,t)},union:function(e,n,t=null){return i.G.union(r.j,e,n,t)},within:function(e,n,t){return i.G.within(r.j,e,n,t)}},Symbol.toStringTag,{value:"Module"}))},77314:(e,n,t)=>{t.d(n,{j:()=>i});const i={convertToGEGeometry:function(e,n){return null==n?null:e.convertJSONToGeometry(n)},exportPoint:function(e,n,t){const i=new r(e.getPointX(n),e.getPointY(n),t),o=e.hasZ(n),s=e.hasM(n);return o&&(i.z=e.getPointZ(n)),s&&(i.m=e.getPointM(n)),i},exportPolygon:function(e,n,t){return new o(e.exportPaths(n),t,e.hasZ(n),e.hasM(n))},exportPolyline:function(e,n,t){return new s(e.exportPaths(n),t,e.hasZ(n),e.hasM(n))},exportMultipoint:function(e,n,t){return new c(e.exportPoints(n),t,e.hasZ(n),e.hasM(n))},exportExtent:function(e,n,t){const i=e.hasZ(n),r=e.hasM(n),o=new u(e.getXMin(n),e.getYMin(n),e.getXMax(n),e.getYMax(n),t);if(i){const t=e.getZExtent(n);o.zmin=t.vmin,o.zmax=t.vmax}if(r){const t=e.getMExtent(n);o.mmin=t.vmin,o.mmax=t.vmax}return o}};class r{constructor(e,n,t){this.x=e,this.y=n,this.spatialReference=t,this.z=void 0,this.m=void 0}}class o{constructor(e,n,t,i){this.rings=e,this.spatialReference=n,this.hasZ=void 0,this.hasM=void 0,t&&(this.hasZ=t),i&&(this.hasM=i)}}class s{constructor(e,n,t,i){this.paths=e,this.spatialReference=n,this.hasZ=void 0,this.hasM=void 0,t&&(this.hasZ=t),i&&(this.hasM=i)}}class c{constructor(e,n,t,i){this.points=e,this.spatialReference=n,this.hasZ=void 0,this.hasM=void 0,t&&(this.hasZ=t),i&&(this.hasM=i)}}class u{constructor(e,n,t,i,r){this.xmin=e,this.ymin=n,this.xmax=t,this.ymax=i,this.spatialReference=r,this.zmin=void 0,this.zmax=void 0,this.mmin=void 0,this.mmax=void 0}}}}]);