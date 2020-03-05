// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/compilerUtils ../../../../core/Logger ../../../../core/mathUtils ../../../../core/ObjectStack ../../../../core/libs/gl-matrix-2/mat4 ../../../../core/libs/gl-matrix-2/mat4f64 ../../../../core/libs/gl-matrix-2/vec3 ../../../../core/libs/gl-matrix-2/vec3f64 ../mathUtils ../stack ./lineSegment ./plane ./ray ./vector".split(" "),function(E,f,P,Q,R,w,F,S,d,g,T,h,q,k,U,r){function t(a){void 0===a&&(a=f.UP);return{plane:k.create(a.plane),origin:g.vec3f64.clone(a.origin),
basis1:g.vec3f64.clone(a.basis1),basis2:g.vec3f64.clone(a.basis2)}}function x(a,b){void 0===b&&(b=t());return G(a.origin,a.basis1,a.basis2,b)}function G(a,b,c,e){void 0===e&&(e=t());d.vec3.copy(e.origin,a);d.vec3.copy(e.basis1,b);d.vec3.copy(e.basis2,c);k.fromVectorsAndPoint(c,b,a,e.plane);a=e;1E-6<Math.abs(d.vec3.dot(a.basis1,a.basis2)/(d.vec3.length(a.basis1)*d.vec3.length(a.basis2)))&&y.warn("fromValues()","Provided basis vectors are not perpendicular");1E-6<Math.abs(d.vec3.dot(a.basis1,a.plane))&&
y.warn("fromValues()","Basis vectors and plane normal are not perpendicular");1E-6<Math.abs(-d.vec3.dot(a.plane,a.origin)-a.plane[3])&&y.warn("fromValues()","Plane offset is not consistent with plane origin");return e}function H(a,b,c){a!==c&&x(a,c);a=d.vec3.scale(h.sv3d.get(),a.plane,b);d.vec3.add(c.origin,c.origin,a);c.plane[3]-=b;return c}function I(a,b){void 0===b&&(b=t());var c=(a[2]-a[0])/2,e=(a[3]-a[1])/2;d.vec3.set(b.origin,a[0]+c,a[1]+e,0);d.vec3.set(b.basis1,c,0,0);d.vec3.set(b.basis2,0,
e,0);k.fromValues(0,0,1,0,b.plane);return b}function z(a,b,c){return k.intersectRay(a.plane,b,c)?J(a,c):!1}function K(a,b,c){var e=u.get(),f=u.get();L(a,b,e,f);for(var f=Number.POSITIVE_INFINITY,l=0,g=A;l<g.length;l++){var n=B(a,g[l],v.get()),p=h.sv3d.get();k.intersectLineSegment(e,n,p)&&(n=T.directionFromTo(h.sv3d.get(),b.origin,p),n=Math.abs(R.acosClamped(d.vec3.dot(b.direction,n))),n<f&&(f=n,d.vec3.copy(c,p)))}return f===Number.POSITIVE_INFINITY?M(a,b,c):c}function M(a,b,c){if(z(a,b,c))return c;
var e=u.get(),f=u.get();L(a,b,e,f);for(var l=Number.POSITIVE_INFINITY,g=0,n=A;g<n.length;g++){var p=B(a,n[g],v.get()),m=h.sv3d.get();k.intersectLineSegmentClamp(e,p,m)&&(p=U.distance2(b,m),k.isPointInside(f,m)&&p<l&&(l=p,d.vec3.copy(c,m)))}C(a,b.origin)<l&&d.vec3.copy(c,b.origin);return c}function N(a,b,c){var e=a.origin,f=a.basis1,l=a.basis2;b=d.vec3.subtract(h.sv3d.get(),b,e);f=r.projectPointSignedLength(f,b)/d.vec3.length(f);l=r.projectPointSignedLength(l,b)/d.vec3.length(l);a=r.projectPointSignedLength(a.plane,
b);return d.vec3.set(c,f,l,a)}function C(a,b){b=N(a,b,h.sv3d.get());var c=a.basis2;a=d.vec3.length(a.basis1);c=d.vec3.length(c);a=Math.max(Math.abs(b[0])-a,0);c=Math.max(Math.abs(b[1])-c,0);b=b[2];return a*a+c*c+b*b}function D(a,b){var c=-a.plane[3];return r.projectPointSignedLength(a.plane,b)-c}function J(a,b){var c=d.vec3.subtract(h.sv3d.get(),b,a.origin);b=d.vec3.squaredLength(a.basis1);var e=d.vec3.squaredLength(a.basis2),f=d.vec3.dot(a.basis1,c);a=d.vec3.dot(a.basis2,c);return 0>-f-b&&0>f-b&&
0>-a-e&&0>a-e}function O(a,b){var c=v.get();d.vec3.copy(c.origin,a.origin);d.vec3.copy(c.vector,b);return c}function B(a,b,c){var e=a.basis1,f=a.basis2;a=a.origin;var l=d.vec3.scale(h.sv3d.get(),e,b.origin[0]),g=d.vec3.scale(h.sv3d.get(),f,b.origin[1]);d.vec3.add(c.origin,l,g);d.vec3.add(c.origin,c.origin,a);e=d.vec3.scale(h.sv3d.get(),e,b.direction[0]);b=d.vec3.scale(h.sv3d.get(),f,b.direction[1]);d.vec3.scale(c.vector,d.vec3.add(e,e,b),2);return c}function L(a,b,c,e){a=a.plane;k.fromVectorsAndPoint(a,
b.direction,b.origin,c);k.fromVectorsAndPoint(c,a,b.origin,e)}Object.defineProperty(f,"__esModule",{value:!0});var y=Q.getLogger("esri.views.3d.support.geometryUtils.boundedPlane");E=function(){return function(){this.plane=k.create();this.origin=g.vec3f64.create();this.basis1=g.vec3f64.create();this.basis2=g.vec3f64.create()}}();f.BoundedPlaneClass=E;f.create=t;f.wrap=function(a,b,c){var e=V.get();e.origin=a;e.basis1=b;e.basis2=c;e.plane=k.fromVectorsAndPoint(c,b,a,k.wrap(0,0,0,0));return e};f.copy=
x;f.fromValues=G;f.elevate=H;f.setExtent=function(a,b,c){I(b,c);H(c,D(a,a.origin),c);return c};f.fromAABoundingRect=I;f.intersectRay=z;f.intersectRayClosestSilhouette=function(a,b,c){if(z(a,b,c))return c;a=K(a,b,h.sv3d.get());d.vec3.add(c,b.origin,d.vec3.scale(h.sv3d.get(),b.direction,d.vec3.distance(b.origin,a)/d.vec3.length(b.direction)));return c};f.closestPointOnSilhouette=K;f.closestPoint=M;f.projectPoint=function(a,b,c){var e=k.projectPoint(a.plane,b,h.sv3d.get());b=q.projectPointClamp(O(a,
a.basis1),e,-1,1,h.sv3d.get());e=q.projectPointClamp(O(a,a.basis2),e,-1,1,h.sv3d.get());d.vec3.subtract(c,d.vec3.add(h.sv3d.get(),b,e),a.origin);return c};f.projectPointLocal=N;f.distance2=C;f.distance=function(a,b){return Math.sqrt(C(a,b))};f.distanceToSilhouette=function(a,b){for(var c=Number.NEGATIVE_INFINITY,e=0,d=A;e<d.length;e++){var f=B(a,d[e],v.get()),f=q.distance2(f,b);f>c&&(c=f)}return Math.sqrt(c)};f.extrusionContainsPoint=function(a,b){return k.isPointInside(a.plane,b)&&J(a,b)};f.axisAt=
function(a,b,c,e){switch(c){case 0:d.vec3.copy(e,a.basis1);d.vec3.normalize(e,e);break;case 1:d.vec3.copy(e,a.basis2);d.vec3.normalize(e,e);break;case 2:d.vec3.copy(e,a.plane);break;default:P.neverReached(c)}return e};f.altitudeAt=D;f.setAltitudeAt=function(a,b,c,e){var f=D(a,b);a=d.vec3.scale(W,a.plane,c-f);d.vec3.add(e,b,a);return e};f.transform=function(a,b,c){a!==c&&x(a,c);F.mat4.invert(m,b);F.mat4.transpose(m,m);d.vec3.transformMat4(c.basis1,a.basis1,m);d.vec3.transformMat4(c.basis2,a.basis2,
m);d.vec3.transformMat4(c.plane,a.plane,m);d.vec3.transformMat4(c.origin,a.origin,b);k.setOffsetFromPoint(c.plane,c.origin,c.plane);return c};f.UP={plane:k.create(),origin:g.vec3f64.fromValues(0,0,0),basis1:g.vec3f64.fromValues(1,0,0),basis2:g.vec3f64.fromValues(0,1,0)};var u=new w.ObjectStack(k.create),v=new w.ObjectStack(q.create),W=g.vec3f64.create(),V=new w.ObjectStack(function(){return{origin:null,basis1:null,basis2:null,plane:null}}),A=[{origin:[-1,-1],direction:[1,0]},{origin:[1,-1],direction:[0,
1]},{origin:[1,1],direction:[-1,0]},{origin:[-1,1],direction:[0,-1]}],m=S.mat4f64.create()});