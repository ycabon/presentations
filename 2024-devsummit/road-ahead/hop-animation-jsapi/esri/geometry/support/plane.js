// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../core/mathUtils ../../chunks/vec32 ../../core/libs/gl-matrix-2/factories/vec3f64 ../../chunks/vec42 ../../core/libs/gl-matrix-2/math/common ../../chunks/sphere ./vector ./vectorStacks ../../views/3d/support/mathUtils".split(" "),function(e,K,f,u,w,L,E,A,m,M){function B(a=r){return[a[0],a[1],a[2],a[3]]}function F(a,b){return C(b[0],b[1],b[2],b[3],a)}function C(a,b,c,d,g=B()){g[0]=a;g[1]=b;g[2]=c;g[3]=d;return g}function G(a,b,c){var d=b[0]*b[0]+b[1]*b[1]+b[2]*b[2];d=1E-5<Math.abs(d-
1)&&1E-12<d?1/Math.sqrt(d):1;c[0]=b[0]*d;c[1]=b[1]*d;c[2]=b[2]*d;c[3]=-(c[0]*a[0]+c[1]*a[1]+c[2]*a[2]);return c}function H(a,b,c,d=B()){var g=c[0]-b[0],h=c[1]-b[1],k=c[2]-b[2];c=a[0]-b[0];const l=a[1]-b[1],I=a[2]-b[2];b=h*I-k*l;k=k*c-g*I;g=g*l-h*c;h=b*b+k*k+g*g;h=1E-5<Math.abs(h-1)&&1E-12<h?1/Math.sqrt(h):1;d[0]=b*h;d[1]=k*h;d[2]=g*h;d[3]=-(d[0]*a[0]+d[1]*a[1]+d[2]*a[2]);return d}function D(a,b,c,d=0,g=Math.floor(1/3*c),h=Math.floor(2/3*c)){if(3>c)return!1;b(v,d);let k=g,l=!1;for(;k<c-1&&!l;)b(t,
k),k++,l=!f.exactEquals(v,t);if(!l)return!1;k=Math.max(k,h);for(l=!1;k<c&&!l;)b(q,k),k++,f.subtract(x,v,t),f.normalize(x,x),f.subtract(y,t,q),f.normalize(y,y),l=!f.exactEquals(v,q)&&!f.exactEquals(t,q)&&.99619469809>Math.abs(f.dot(x,y));if(!l)return 0===d&&1===g&&2===h?!1:D(a,b,c,0,1,2);H(v,t,q,a);return!0}function J(a,b,c){a=f.scale(m.sv3d.get(),a,f.dot(a,b));f.subtract(c,b,a);return c}function p(a,b){return f.dot(a,b)+a[3]}function z(a,b,c,d,g){const h=f.dot(a,c);if(0===h)return!1;a=-(f.dot(a,b)+
a[3])/h;d&n.CLAMP&&(a=K.clamp(a,0,1));if(!(d&n.INFINITE_MIN)&&0>a||!(d&n.INFINITE_MAX)&&1<a)return!1;f.add(g,b,f.scale(g,c,a));return!0}const N=w.exactEquals;w=w.equals;const v=u.create(),t=u.create(),q=u.create(),x=u.create(),y=u.create(),r=[0,0,1,0];var n;(function(a){a[a.NONE=0]="NONE";a[a.CLAMP=1]="CLAMP";a[a.INFINITE_MIN=4]="INFINITE_MIN";a[a.INFINITE_MAX=8]="INFINITE_MAX"})(n||={});const O=n.INFINITE_MIN|n.INFINITE_MAX,P=n.INFINITE_MAX;e.clip=function(a,b){const c=f.dot(a,b.ray.direction);a=
-p(a,b.ray.origin);if(0>a&&0<=c)return!1;if(-1E-6<c&&1E-6>c)return 0<a;if((0>a||0>c)&&!(0>a&&0>c))return!0;a/=c;0<c?a<b.c1&&(b.c1=a):a>b.c0&&(b.c0=a);return b.c0<=b.c1};e.clipInfinite=function(a,b){const c=f.dot(a,b.ray.direction);a=-p(a,b.ray.origin);if(-1E-6<c&&1E-6>c)return 0<a;a/=c;0<c?a<b.c1&&(b.c1=a):a>b.c0&&(b.c0=a);return b.c0<=b.c1};e.copy=F;e.create=B;e.distance=function(a,b){return Math.abs(p(a,b))};e.equals=w;e.exactEquals=N;e.fromArray=function(a,b,c=!0){const d=b.length/3;return D(a,
(g,h)=>f.set(g,b[3*h],b[3*h+1],b[3*h+2]),c?d-1:d)};e.fromManyPoints=D;e.fromNormalAndOffset=function(a,b,c){f.copy(c,a);c[3]=b;return c};e.fromPoints=H;e.fromPositionAndNormal=G;e.fromValues=C;e.fromVectorsAndPoint=function(a,b,c,d){f.cross(q,b,a);return G(c,q,d)};e.getNormal=function(a){return a};e.intersectLine=function(a,b,c,d){c=f.subtract(m.sv3d.get(),c,b);return z(a,b,c,O,d)};e.intersectLineSegment=function(a,b,c){return z(a,b.origin,b.vector,n.NONE,c)};e.intersectLineSegmentClamp=function(a,
b,c){return z(a,b.origin,b.vector,n.CLAMP,c)};e.intersectRay=function(a,b,c){return null!=b?z(a,b.origin,b.direction,P,c):!1};e.isPointInside=function(a,b){return 0<=p(a,b)};e.isPointOutside=function(a,b){return 0>p(a,b)};e.isSphereFullyInside=function(a,b){return 0<=p(a,E.getCenter(b))-b[3]};e.isSphereFullyOutside=function(a,b){return 0>p(a,E.getCenter(b))+b[3]};e.isVertical=function(a){return Math.abs(a[2])<L.getEpsilon()};e.negate=function(a,b){b[0]=-a[0];b[1]=-a[1];b[2]=-a[2];b[3]=-a[3];return b};
e.projectPoint=function(a,b,c){const d=f.scale(m.sv3d.get(),a,-a[3]);b=f.subtract(m.sv3d.get(),b,d);a=J(a,b,m.sv3d.get());f.add(c,a,d);return c};e.projectPointLocal=function(a,b,c,d){var g=m.sv3d.get(),h=m.sv3d.get();M.tangentFrame(a,g,h);b=f.subtract(m.sv3d.get(),c,b);g=A.projectPointSignedLength(g,b);h=A.projectPointSignedLength(h,b);a=A.projectPointSignedLength(a,b);return f.set(d,g,h,a)};e.projectVector=J;e.setOffsetFromPoint=function(a,b,c){b!==a&&F(a,b);a[3]=-f.dot(a,c);return a};e.signedDistance=
p;e.up=r;e.wrap=function(a=r[0],b=r[1],c=r[2],d=r[3]){return C(a,b,c,d,m.sv4d.get())};Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});