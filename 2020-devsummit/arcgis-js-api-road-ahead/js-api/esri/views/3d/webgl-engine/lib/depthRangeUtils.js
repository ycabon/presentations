// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/PooledArray ../../../../core/libs/gl-matrix-2/mat4 ../../../../core/libs/gl-matrix-2/mat4f64 ../../../../core/libs/gl-matrix-2/vec3 ../../../../core/libs/gl-matrix-2/vec3f64 ../../../../core/libs/gl-matrix-2/vec4 ../../../../core/libs/gl-matrix-2/vec4f64 ../../support/geometryUtils ../../support/mathUtils ./ComponentUtils ./depthRange ./Util".split(" "),function(C,q,H,v,w,x,I,J,n,r,y,K,p,L){function D(c,a){if(a.isVisible){var b=p.empty(),d=a.getObjects();a.getSpatialQueryAccelerator()?
M(b,c,a.getSpatialQueryAccelerator()):N(b,c,d);return b}}function M(c,a,b){var d=a.eye,f=a.viewForward,e=a.frustum,h=function(a){return!a.isHidden()},g=b.objectCount;500>g?(p.set(k,a.near,Math.min(c.near,a.far)),b.forEachInDepthRange(d,f,"front-to-back",k,function(b,d){z(c,a,b);k.far=c.near;d.setRange(k)},e,h),p.set(k,Math.max(c.far,a.near),a.far),b.forEachInDepthRange(d,f,"back-to-front",k,function(b,d){z(c,a,b);k.near=c.far;d.setRange(k)},e,h)):(g=Math.max(Math.min(g,500),Math.ceil(.1*g)),d=b.findClosest(f,
"front-to-back",e,h,g),b=b.findClosest(f,"back-to-front",e,h,g),d&&b&&(E(c,a,d.getCenter(),d.getBSRadius()),E(c,a,b.getCenter(),b.getBSRadius())))}function N(c,a,b){t.clear();b.forEach(function(a){a.isHidden()||t.add(a)});t.empty||(t.sort(a),p.set(k,a.near,Math.min(c.near,a.far)),t.forEachInDepthRange(k,"front-to-back",function(b,f){f<c.near&&z(c,a,b)}),p.set(k,Math.max(c.far,a.near),a.far),t.forEachInDepthRange(k,"back-to-front",function(a,b,e){c.far=Math.max(c.far,e)}))}function z(c,a,b){if(!b.isHidden()&&
r.frustum.intersectsSphere(a.frustum.planes,r.sphere.wrap(b.getBSRadius(),b.getCenter()))){var d=b.objectTransformation,f=O;b.geometryRecords.forEach(function(b){v.mat4.multiply(f,d,b.getShaderTransformation());var e=y.maxScale(f);F(c,a,b.geometry.boundingInfo,f,e)})}}function F(c,a,b,d,f){var e=a.eye,h=a.viewForward;x.vec3.transformMat4(m,b.center,d);e=h[0]*(m[0]-e[0])+h[1]*(m[1]-e[1])+h[2]*(m[2]-e[2]);h=b.bsRadius*f;if(!(e-h>c.near&&e+h<c.far)&&r.frustum.intersectsSphere(a.frustum.planes,r.sphere.wrap(h,
m)))if(100<b.bsRadius&&b.getChildren())for(b=b.getChildren(),e=0;8>e;++e)b[e]&&F(c,a,b[e],d,f);else A.unionDepthRangeWithAABB(c,a.viewProjectionMatrix,d,b.bbMin,b.bbMax)}function E(c,a,b,d){var f=a.eye;a=a.viewForward;b=(b[0]-f[0])*a[0]+(b[1]-f[1])*a[1]+(b[2]-f[2])*a[2];c.near=Math.min(c.near,b-d);c.far=Math.max(c.far,b+d)}Object.defineProperty(q,"__esModule",{value:!0});q.depthRangeFromScene=function(c,a,b){if(1E4>a.size)return P.compute(c,a);var d=p.empty();b.forEach(function(a){a.isVisible&&p.union(d,
D(c,a))});return d};q.depthRangeFromLayer=D;C=function(){function c(){this._items=new H({allocator:function(a){return a||{obj:null,distance:0,near:0,far:0}},deallocator:function(a){a.obj=null;a.distance=0;a.near=0;a.far=0;return a}})}Object.defineProperty(c.prototype,"length",{get:function(){return this._items.length},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"empty",{get:function(){return 0===this._items.length},enumerable:!0,configurable:!0});c.prototype.clear=function(){this._items.clear()};
c.prototype.add=function(a){this._items.pushNew().obj=a};c.prototype.sort=function(a){var b=a.eye,d=a.viewForward;this._items.forEach(function(a){var e=a.obj,f=e.getCenter(),e=e.getBSRadius(),f=(f[0]-b[0])*d[0]+(f[1]-b[1])*d[1]+(f[2]-b[2])*d[2];a.distance=f;a.near=f-e;a.far=f+e});this._items.sort(function(a,b){return a.distance-b.distance})};c.prototype.forEachInDepthRange=function(a,b,d){if("front-to-back"===b)for(b=0;b<this._items.length;++b){var f=this._items.data[b];f.far<a.near||f.near>a.far||
d(f.obj,f.near,f.far)}else for(b=this._items.length-1;0<=b;--b)f=this._items.data[b],f.far<a.near||f.near>a.far||d(f.obj,f.near,f.far)};return c}();var G=function(){function c(){this.view=w.mat4f64.create();this.viewProj=w.mat4f64.create();this.frustum=r.frustum.create();this.geometries=[];this.near=[];this.far=[];this.nearCandidates=[];this.farCandidates=[];this.range={near:0,far:0};this.looseRange={near:0,far:0}}c.prototype.compute=function(a,b){var d=this;this.reset();v.mat4.copy(this.view,a.viewMatrix);
v.mat4.multiply(this.viewProj,a.projectionMatrix,this.view);r.frustum.copy(a.frustum,this.frustum);a=this.view;var f=a[2],e=a[6],h=a[10],c=a[14];a=this.range;var k=0;b.forEach(function(a){if(!K.isAllHidden(a.instanceParameters.componentVisibilities,a.componentOffsets)&&a.castShadow){var b,g;a.hasShaderTransformation?(b=a.getBoundingSphere(a.getShaderTransformation(),1,m),g=m):(b=a.bsRadius,g=a.center);g=f*g[0]+e*g[1]+h*g[2]+c;d.geometries[k]=a;d.near[k]=-(g+b);d.far[k]=-(g-b);++k}});if(0===this.geometries.length)return a;
for(b=0;b<this.geometries.length;++b)this.near[b]>a.far&&(a.far=this.near[b]),2<this.near[b]&&this.far[b]<a.near&&(a.near=this.far[b]);var l=this.looseRange;l.near=Math.max(.5*a.near,2);l.far=2*a.far;var u=0,n=0;for(b=0;b<this.geometries.length;++b)this.near[b]<a.near&&(this.near[b]>=l.near?a.near=this.near[b]:this.nearCandidates[u++]=b),this.far[b]>a.far&&(this.far[b]<=l.far?a.far=this.far[b]:this.farCandidates[n++]=b);if(0===this.nearCandidates.length&&0===this.farCandidates.length)return a;this.nearCandidates.sort(function(a,
b){return d.near[a]<d.near[b]?-1:d.near[a]>d.near[b]?1:0});this.farCandidates.sort(function(a,b){return d.far[a]<d.far[b]?1:d.far[a]>d.far[b]?-1:0});for(b=0;b<this.nearCandidates.length;++b)l=this.nearCandidates[b],this.near[l]<a.near&&(l=this.geometries[l],u=l.boundingInfo,this.includeNearBoundingInfoRec(u,l.getShaderTransformation()));for(b=0;b<this.farCandidates.length;++b)l=this.farCandidates[b],this.far[l]>a.far&&(l=this.geometries[l],u=l.boundingInfo,this.includeFarBoundingInfoRec(u,l.getShaderTransformation()));
return a};c.prototype.reset=function(){this.geometries.length=0;this.near.length=0;this.far.length=0;this.nearCandidates.length=0;this.farCandidates.length=0;this.range.near=Number.MAX_VALUE;this.range.far=-Number.MAX_VALUE};c.prototype.includeNearBoundingInfoRec=function(a,b){var d=a.getBSRadius(),f=a.getCenter();x.vec3.transformMat4(m,f,b);var e=y.maxScale(b),f=m[0],h=m[1],c=m[2],d=d*e,e=this.frustum.planes;if(!(e[0][0]*f+e[0][1]*h+e[0][2]*c+e[0][3]>d||e[1][0]*f+e[1][1]*h+e[1][2]*c+e[1][3]>d||e[2][0]*
f+e[2][1]*h+e[2][2]*c+e[2][3]>d||e[3][0]*f+e[3][1]*h+e[3][2]*c+e[3][3]>d||(f=this.view[2]*f+this.view[6]*h+this.view[10]*c+this.view[14],h=f+d,2>-(f-d)||-h>=this.range.near)))if(-h>this.looseRange.near)this.range.near=-h;else{if(100<d&&(d=a.getChildren(),void 0!==d)){for(a=0;8>a;++a)void 0!==d[a]&&this.includeNearBoundingInfoRec(d[a],b);return}A.unionDepthRangeWithAABB(this.range,this.viewProj,b,a.getBBMin(),a.getBBMax())}};c.prototype.includeFarBoundingInfoRec=function(a,b){var d=a.getBSRadius(),
f=a.getCenter();x.vec3.transformMat4(m,f,b);var e=y.maxScale(b),f=m[0],c=m[1],g=m[2],d=d*e,e=this.frustum.planes;if(!(e[0][0]*f+e[0][1]*c+e[0][2]*g+e[0][3]>d||e[1][0]*f+e[1][1]*c+e[1][2]*g+e[1][3]>d||e[2][0]*f+e[2][1]*c+e[2][2]*g+e[2][3]>d||e[3][0]*f+e[3][1]*c+e[3][2]*g+e[3][3]>d||(f=this.view[2]*f+this.view[6]*c+this.view[10]*g+this.view[14]-d,-f<=this.range.far)))if(-f<this.looseRange.far)this.range.far=-f;else{if(100<d&&(d=a.getChildren(),void 0!==d)){for(a=0;8>a;++a)void 0!==d[a]&&this.includeFarBoundingInfoRec(d[a],
b);return}A.unionDepthRangeWithAABB(this.range,this.viewProj,b,a.getBBMin(),a.getBBMax())}};return c}();q.DepthRangeFromRenderGeometries=G;q=function(){function c(){this.modelViewProj=w.mat4f64.create();this.clipPosition=[n.vec4f64.create(),n.vec4f64.create(),n.vec4f64.create(),n.vec4f64.create(),n.vec4f64.create(),n.vec4f64.create(),n.vec4f64.create(),n.vec4f64.create()]}c.prototype.unionDepthRangeWithAABB=function(a,b,d,f,e){var c=this.modelViewProj;v.mat4.multiply(c,b,d);b=!1;for(d=0;8>d;++d){var g=
this.clipPosition[d],k=0===d||3===d||4===d||7===d?f[0]:e[0],l=0===d||1===d||4===d||5===d?f[1]:e[1],m=4>d?f[2]:e[2];g[0]=c[0]*k+c[4]*l+c[8]*m+c[12];g[1]=c[1]*k+c[5]*l+c[9]*m+c[13];g[2]=c[2]*k+c[6]*l+c[10]*m+c[14];g[3]=c[3]*k+c[7]*l+c[11]*m+c[15]}for(d=0;12>d;++d){f=this.clipTriangle(this.clipPosition[B[d][0]],this.clipPosition[B[d][1]],this.clipPosition[B[d][2]]);e=!0;for(c=0;c<f.length;++c)if(g=f[c][3],2<=g){e=!1;break}if(!e)for(b=!0,c=0;c<f.length;++c)g=f[c][3],g<a.near&&(a.near=g),g>a.far&&(a.far=
g)}return b};c.prototype.inside=function(a,b){if(0===b)return a[0]>=-a[3];if(1===b)return a[1]>=-a[3];if(2===b)return a[0]<=a[3];if(3===b)return a[1]<=a[3];L.assert(!1)};c.prototype.intersect=function(a,b,d){var c=0;0===d?c=(-a[3]-a[0])/(b[0]-a[0]+b[3]-a[3]):1===d?c=(-a[3]-a[1])/(b[1]-a[1]+b[3]-a[3]):2===d?c=(a[3]-a[0])/(b[0]-a[0]-b[3]+a[3]):3===d&&(c=(a[3]-a[1])/(b[1]-a[1]-b[3]+a[3]));return J.vec4.lerp(n.vec4f64.create(),a,b,c)};c.prototype.clipTriangle=function(a,b,d){a=[a,b,d];for(b=0;4>b;++b){d=
a;a=[];for(var c=0;c<d.length;++c){var e=d[c],h=d[(c+1)%d.length];this.inside(h,b)?(this.inside(e,b)||a.push(this.intersect(e,h,b)),a.push(h)):this.inside(e,b)&&a.push(this.intersect(e,h,b))}}return a};return c}();var B=[[0,1,3],[2,3,1],[1,5,2],[6,2,5],[5,4,6],[7,6,4],[4,0,7],[3,7,0],[3,2,7],[6,7,2],[4,5,0],[1,0,5]],m=I.vec3f64.create(),O=w.mat4f64.create(),k=p.empty(),t=new C,P=new G,A=new q});