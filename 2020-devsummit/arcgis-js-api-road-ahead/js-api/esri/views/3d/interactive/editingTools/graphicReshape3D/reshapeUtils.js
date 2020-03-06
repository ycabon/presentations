// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../core/tsSupport/decorateHelper ../../../../../core/tsSupport/extendsHelper ../../../../../core/maybe ../../../../../core/libs/gl-matrix-2/vec2 ../../../../../core/libs/gl-matrix-2/vec2f64 ../../../../../core/libs/gl-matrix-2/vec3 ../../../../../core/libs/gl-matrix-2/vec3f64 ../../../../../core/libs/gl-matrix-2/vec4 ../../../../../core/libs/gl-matrix-2/vec4f64 ../../../../../geometry/support/coordsUtils ../../../../../geometry/support/spatialReferenceUtils".split(" "),
function(l,f,G,t,u,A,v,B,w,C,x,m,D){Object.defineProperty(f,"__esModule",{value:!0});var p=function(){function c(){this.vertices=[];this.edges=[];this.index=null}c.prototype.makeVertex=function(a,b,d){void 0===b&&(b=null);void 0===d&&(d=null);a={pos:a,unnormalizedPos:a,left:b,right:d,type:"vertex",component:this,index:null};this.vertices.push(a);return a};c.prototype.makeEdge=function(a,b){var d={v0:a,v1:b,type:"edge",component:this};a.right=d;b.left=d;this.edges.push(d);return d};c.prototype.removeVertex=
function(a){this.vertices.splice(this.vertices.indexOf(a),1);a.left&&this.removeEdge(a.left);a.right&&this.removeEdge(a.right)};c.prototype.removeEdge=function(a){this.edges.splice(this.edges.indexOf(a),1);a.v0.right=null;a.v1.left=null};return c}();f.Component=p;var y=function(){function c(){}c.prototype.createNew=function(){return v.vec2f64.create()};c.prototype.fromArray=function(a){return v.vec2f64.fromValues(a[0],a[1])};c.prototype.toArray=function(a){return[a[0],a[1]]};c.prototype.toPoint=function(a,
b){b.x=a[0];b.y=a[1];b.hasZ=!1;b.hasM=!1;return b};c.prototype.lerp=function(a,b,d,c){return A.vec2.lerp(c,a,b,d)};c.prototype.addDelta=function(a,b,d){a[0]+=b;a[1]+=d};return c}();f.CoordinateHelper2D=y;var q=function(){function c(a){this.ztype=a}c.prototype.createNew=function(){return w.vec3f64.create()};c.prototype.fromArray=function(a){return w.vec3f64.fromValues(a[0],a[1],a[2]||0)};c.prototype.toArray=function(a){return[a[0],a[1],a[2]]};c.prototype.toPoint=function(a,b){b.x=a[0];b.y=a[1];0===
this.ztype?(b.z=a[2],b.hasZ=!0,b.hasM=!1):(b.m=a[2],b.hasZ=!1,b.hasM=!0);return b};c.prototype.lerp=function(a,b,d,c){return B.vec3.lerp(c,a,b,d)};c.prototype.addDelta=function(a,b,d,c){a[0]+=b;a[1]+=d;0===this.ztype&&(a[2]+=c)};return c}();f.CoordinateHelper3D=q;var z=function(){function c(){}c.prototype.createNew=function(){return x.vec4f64.create()};c.prototype.fromArray=function(a){return x.vec4f64.fromValues(a[0],a[1],a[2]||0,a[3]||0)};c.prototype.toArray=function(a){return[a[0],a[1],a[2],a[3]]};
c.prototype.toPoint=function(a,b){b.x=a[0];b.y=a[1];b.z=a[2];b.m=a[3];b.hasZ=!0;b.hasM=!0;return b};c.prototype.lerp=function(a,b,d,c){return C.vec4.lerp(c,a,b,d)};c.prototype.addDelta=function(a,b,d,c){a[0]+=b;a[1]+=d;a[2]+=c};return c}();f.CoordinateHelper4D=z;l=function(){function c(a,b,d){this.geometry=a;this.doUnnormalization=b;this.coordinateHelper=d;this.components=[];a=D.getInfo(this.geometry.spatialReference);this._tmpMapPoint=d.createNew();a?(this._spanMin=a.valid[0],this._spanMax=a.valid[1],
this._span=this._spanMax-this._spanMin):this.doUnnormalization=!1}c.prototype.addDelta=function(a,b,d,c){this.coordinateHelper.addDelta(a.pos,b,d,c)};c.prototype.getVertexPositionAsPoint=function(a,b){this.coordinateHelper.toPoint(a.pos,b);b.spatialReference=this.geometry.spatialReference;return b};c.prototype.getEdgePosition=function(a,b,c){void 0===c&&(c=this.coordinateHelper.createNew());return this.coordinateHelper.lerp(a.v0.unnormalizedPos,a.v1.unnormalizedPos,b,c)};c.prototype.getEdgePositionAsPoint=
function(a,b,c){a=this.getEdgePosition(a,b,this._tmpMapPoint);this.coordinateHelper.toPoint(a,c);c.spatialReference=this.geometry.spatialReference;return c};c.prototype.canRemoveVertex=function(a){return!0};c.prototype.removeVertex=function(a){var b=a.component,c=a.left,h=a.right;b.removeVertex(a);return c&&h?b.makeEdge(c.v0,h.v1):null};c.prototype.splitEdge=function(a,b){var c=a.component;b=c.makeVertex(this.getEdgePosition(a,b));var h=a.v0,r=a.v1;c.removeEdge(a);c.makeEdge(h,b);c.makeEdge(b,r);
return b};return c}();f.ReshapeHelper=l;var E=function(c){function a(a,d,h){d=c.call(this,a,d,h)||this;d.geometry=a;a=d.geometry.rings;for(var b=0;b<a.length;++b){for(var k=a[b],e=new p,g=k.length-1,n=0;n<g;++n){var f=h.fromArray(k[n]);e.makeVertex(f).index=n}k=e.vertices.length-1;for(g=0;g<k;++g)e.makeEdge(e.vertices[g],e.vertices[g+1]);e.makeEdge(e.vertices[e.vertices.length-1],e.vertices[0]);d.doUnnormalization&&m.computeUnnormalizedVertexPositionsOnDateLineCrossing(e.vertices,d._spanMin,d._spanMax,
d._span);e.index=b;d.components.push(e)}return d}t(a,c);a.prototype.canRemoveVertex=function(a){return 3<a.component.vertices.length};a.prototype.commit=function(){var a=this,c=[],h=this.coordinateHelper.toArray;this.components.forEach(function(b,d){b.index=d;d=[];a.doUnnormalization&&m.computeUnnormalizedVertexPositionsOnDateLineCrossing(b.vertices,a._spanMin,a._spanMax,a._span);var e=b.vertices[0],r=e,k=0;do e.index=k++,d.push(h(e.unnormalizedPos)),e=e.right.v1;while(e&&e!==r);d.push(h(b.vertices[0].unnormalizedPos));
c.push(d)});this.geometry.rings=c;return this.geometry};return a}(l),F=function(c){function a(a,d,h){d=c.call(this,a,d,h)||this;d.geometry=a;a=d.geometry.paths;for(var b=0;b<a.length;++b){for(var k=a[b],e=new p,g=k.length,f=0;f<g;++f){var l=h.fromArray(k[f]);e.makeVertex(l).index=f}k=e.vertices.length-1;for(g=0;g<k;++g)e.makeEdge(e.vertices[g],e.vertices[g+1]);d.doUnnormalization&&m.computeUnnormalizedVertexPositionsOnDateLineCrossing(e.vertices,d._spanMin,d._spanMax,d._span);e.index=b;d.components.push(e)}return d}
t(a,c);a.prototype.canRemoveVertex=function(a){return 2<a.component.vertices.length};a.prototype.commit=function(){var a=this,c=[],f=this.coordinateHelper.toArray;this.components.forEach(function(b,d){b.index=d;d=[];a.doUnnormalization&&m.computeUnnormalizedVertexPositionsOnDateLineCrossing(b.vertices,a._spanMin,a._spanMax,a._span);var e=b=b.vertices[0],g=0;do b.index=g++,d.push(f(b.unnormalizedPos)),b=b.right?b.right.v1:null;while(b&&b!==e);c.push(d)});this.geometry.paths=c;return this.geometry};
return a}(l);f.isReshapeGeometry=function(c){return u.isSome(c)&&("polygon"===c.type||"polyline"===c.type)};f.createReshapeHelper=function(c,a){if(u.isNone(c))return null;var b;b=c.hasZ&&c.hasM?new z:c.hasM?new q(1):c.hasZ?new q(0):new y;return"polygon"===c.type?new E(c,a,b):new F(c,a,b)}});