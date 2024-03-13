// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../core/has ../core/Logger ../core/mathUtils ../core/libs/gl-matrix-2/math/mat4 ./vec32 ../core/libs/gl-matrix-2/factories/vec3f64 ./vec42 ../core/libs/gl-matrix-2/factories/vec4f64 ../core/libs/gl-matrix-2/math/common ../geometry/support/Axis ../geometry/support/ray ../geometry/support/vector ../geometry/support/vectorStacks".split(" "),function(e,w,ca,x,da,f,p,m,q,ea,r,G,fa,l){function t(){return q.create()}function y(a,b){return m.copy(b,a)}function H(a,b){return q.fromValues(a[0],
a[1],a[2],b)}function I(a){return a}function J(a){a[0]=a[1]=a[2]=a[3]=0}function K(a,b){a[0]=a[1]=a[2]=0;a[3]=b;return a}function L(a){return a[3]}function M(a){return a}function N(a,b,c,d){return q.fromValues(a,b,c,d)}function O(a,b,c){a!==c&&(c[0]=a[0],c[1]=a[1],c[2]=a[2]);c[3]=a[3]+b;return c}function P(a,b,c){ca.getLogger("esri.geometry.support.sphere").error("sphere.setExtent is not yet supported");a!==c&&y(a,c);return c}function n(a,b,c){if(null==b||!Q(a,b,u))return!1;let {t0:d,t1:h}=u;if(0>
d||h<d&&0<h)d=h;if(0>d)return!1;if(c){const {origin:g,direction:k}=b;c[0]=g[0]+k[0]*d;c[1]=g[1]+k[1]*d;c[2]=g[2]+k[2]*d}return!0}function R(a,b,c){b=G.fromPoints(b,c);if(!Q(a,b,u))return[];const {origin:d,direction:h}=b,{t0:g,t1:k}=u;b=ha=>{const z=p.create();f.scaleAndAdd(z,d,h,ha);return v(a,z,z)};return Math.abs(g-k)<ea.getEpsilon()?[b(g)]:[b(g),b(k)]}function Q(a,b,c){const {origin:d,direction:h}=b,g=ia;g[0]=d[0]-a[0];g[1]=d[1]-a[1];g[2]=d[2]-a[2];b=h[0]*h[0]+h[1]*h[1]+h[2]*h[2];if(0===b)return!1;
const k=2*(h[0]*g[0]+h[1]*g[1]+h[2]*g[2]);a=k*k-4*b*(g[0]*g[0]+g[1]*g[1]+g[2]*g[2]-a[3]*a[3]);if(0>a)return!1;a=Math.sqrt(a);c.t0=(-k-a)/(2*b);c.t1=(-k+a)/(2*b);return!0}function S(a,b){return n(a,b,null)}function T(a,b,c){if(n(a,b,c))return c;a=A(a,b,l.sv3d.get());f.add(c,b.origin,f.scale(l.sv3d.get(),b.direction,f.distance(b.origin,a)/f.length(b.direction)));return c}function A(a,b,c){const d=l.sv3d.get(),h=l.sm4d.get();f.cross(d,b.origin,b.direction);const g=a[3];f.cross(c,d,b.origin);f.scale(c,
c,1/f.length(c)*g);a=B(a,b.origin);b=fa.angle(b.origin,c);da.fromRotation(h,b+a,d);f.transformMat4(c,c,h);return c}function U(a,b,c){if(n(a,b,c))return c;G.closestPoint(b,a,c);return v(a,c,c)}function v(a,b,c){b=f.subtract(l.sv3d.get(),b,a);b=f.scale(l.sv3d.get(),b,a[3]/f.length(b));return f.add(c,b,a)}function V(a,b){b=f.subtract(l.sv3d.get(),b,a);b=f.squaredLength(b);return Math.sqrt(Math.abs(b-a[3]*a[3]))}function B(a,b){b=f.subtract(l.sv3d.get(),b,a);b=f.length(b);a=a[3];return x.acosClamped(a/
(a+Math.abs(a-b)))}function C(a,b,c,d){a=f.subtract(D,b,a);switch(c){case r.Axis.X:return c=x.cartesianToSpherical(a,D)[2],f.set(d,-Math.sin(c),Math.cos(c),0);case r.Axis.Y:return a=x.cartesianToSpherical(a,D),c=a[1],a=a[2],b=Math.sin(c),f.set(d,-b*Math.cos(a),-b*Math.sin(a),Math.cos(c));case r.Axis.Z:return f.normalize(d,a)}}function E(a,b){b=f.subtract(F,b,a);return f.length(b)-a[3]}function W(a,b,c,d){const h=E(a,b);a=C(a,b,r.Axis.Z,F);c=f.scale(F,a,c-h);return f.add(d,b,c)}function X(a,b){b=f.squaredDistance(a,
b);a=a[3];return b<=a*a}function Y(a,b,c=q.create()){const d=f.distance(a,b),h=a[3],g=b[3];if(d+g<h)return m.copy(c,a),c;if(d+h<g)return m.copy(c,b),c;f.lerp(c,a,b,(d+g-h)/(2*d));c[3]=(d+h+g)/2;return c}w=t();const Z=m.equals,aa=m.equals,u={t0:0,t1:0},ia=p.create(),D=p.create(),F=p.create(),ba=t(),ja=Object.freeze(Object.defineProperty({__proto__:null,NullSphere:w,altitudeAt:E,angleToSilhouette:B,axisAt:C,clear:J,closestPoint:U,closestPointOnSilhouette:A,containsPoint:X,copy:y,create:t,distanceToSilhouette:V,
elevate:O,equals:aa,exactEquals:Z,fromCenterAndRadius:H,fromRadius:K,fromValues:N,getCenter:M,getRadius:L,intersectLine:R,intersectRay:n,intersectRayClosestSilhouette:T,intersectsRay:S,projectPoint:v,setAltitudeAt:W,setExtent:P,tmpSphere:ba,union:Y,wrap:I},Symbol.toStringTag,{value:"Module"}));e.NullSphere=w;e.altitudeAt=E;e.angleToSilhouette=B;e.axisAt=C;e.clear=J;e.closestPoint=U;e.closestPointOnSilhouette=A;e.containsPoint=X;e.copy=y;e.create=t;e.distanceToSilhouette=V;e.elevate=O;e.equals=aa;
e.exactEquals=Z;e.fromCenterAndRadius=H;e.fromRadius=K;e.fromValues=N;e.getCenter=M;e.getRadius=L;e.intersectLine=R;e.intersectRay=n;e.intersectRayClosestSilhouette=T;e.intersectsRay=S;e.projectPoint=v;e.setAltitudeAt=W;e.setExtent=P;e.sphere=ja;e.tmpSphere=ba;e.union=Y;e.wrap=I});