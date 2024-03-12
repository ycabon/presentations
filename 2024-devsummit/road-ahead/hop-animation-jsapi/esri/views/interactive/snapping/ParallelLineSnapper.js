// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../core/libs/gl-matrix-2/math/vec2 ../../../core/libs/gl-matrix-2/factories/vec2f64 ../../../support/elevationInfoUtils ../sketch/normalizedPoint ./Settings ./SnappingAlgorithm ./snappingUtils ./candidates/ParallelLineSnappingCandidate ../support/viewUtils ../../support/geometry2dUtils".split(" "),function(w,x,A,r,c,y,B,t,C,u,v){class D extends B.SnappingAlgorithm{snapNewVertex(f,a){var b=a.editGeometryOperations.data.components[0],d=b.edges.length,e=b.vertices.length;const g=
[];if(2>d)return g;const {view:h}=this,k=u.vectorToScreenPoint(f,a.spatialReference,r.absoluteHeightElevationInfo,h);e=c.fromAnyMapPoint(b.vertices[e-1].pos,h,a);const m=c.fromAnyMapPoint(b.vertices[0].pos,h,a);d=b=b.edges[d-1];do{if(this.edgeExceedsShortLineThreshold(d,a)){const n=t.editEdgeToSnappingEdge(d,h,a);this._checkEdgeForParallelLines(n,e,f,k,a,g);this._checkEdgeForParallelLines(n,m,f,k,a,g)}d=d.leftVertex.leftEdge}while(d&&d!==b);return g}snapExistingVertex(f,a){const b=[],d=a.vertexHandle;
var e=d.component;if(3>e.edges.length)return b;const {view:g}=this,h=u.vectorToScreenPoint(f,a.spatialReference,r.absoluteHeightElevationInfo,g),k=d.leftEdge,m=d.rightEdge,n=e.vertices[0],E=c.fromAnyMapPoint(n.pos,g,a),z=e.vertices[e.vertices.length-1],F=c.fromAnyMapPoint(z.pos,g,a);let l=e=e.edges[0];do{if(l!==k&&l!==m&&this.edgeExceedsShortLineThreshold(l,a)){const q=t.editEdgeToSnappingEdge(l,g,a);k&&this._checkEdgeForParallelLines(q,c.fromAnyMapPoint(k.leftVertex.pos,g,a),f,h,a,b);m&&this._checkEdgeForParallelLines(q,
c.fromAnyMapPoint(m.rightVertex.pos,g,a),f,h,a,b);d===n?this._checkEdgeForParallelLines(q,F,f,h,a,b):d===z&&this._checkEdgeForParallelLines(q,E,f,h,a,b)}l=l.rightVertex.rightEdge}while(l&&l!==e);return b}_checkEdgeForParallelLines(f,a,b,d,e,g){const h=f.left,k=f.right;v.projectPointToLine(p,c.asVec2(a),c.asVec2(h),c.asVec2(k));if(!(x.squaredDistance(p,c.asVec2(a))<y.defaults.parallelLineThreshold)){v.projectPointToLine(p,c.asVec2(b),c.asVec2(h),c.asVec2(k),c.asVec2(a));var {spatialReference:m,pointer:n}=
e;b=c.fromValues(p[0],p[1],b[2]);t.squaredScreenDistance(d,u.vectorToScreenPoint(b,m,r.absoluteHeightElevationInfo,this.view))<this.squaredProximityThreshold(n)&&!(this.isVertical(b,a,e)||this.isVertical(h,k,e)||this._parallelToPreviousCandidate(f,g))&&g.push(new C.ParallelLineSnappingCandidate({referenceLine:f,lineStart:a,targetPoint:b,isDraped:"on-the-ground"===e.elevationInfo?.mode}))}}_parallelToPreviousCandidate(f,a){const b=f.left,d=f.right;for(const e of a)if(v.projectPointToLine(p,c.asVec2(d),
c.asVec2(e.constraint.start),c.asVec2(e.constraint.end),c.asVec2(b)),x.squaredDistance(p,c.asVec2(d))<y.defaults.parallelLineThreshold)return e.addReferenceLine(f),!0;return!1}}const p=A.create();w.ParallelLineSnapper=D;Object.defineProperty(w,Symbol.toStringTag,{value:"Module"})});