// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../core/libs/gl-matrix-2/factories/vec3f64","../core/libs/gl-matrix-2/math/common"],function(g,n,D){function p(a){const b=a[0],c=a[1];a=a[2];return Math.sqrt(b*b+c*c+a*a)}function q(a,b){a[0]=b[0];a[1]=b[1];a[2]=b[2];return a}function E(a,b,c,d){a[0]=b;a[1]=c;a[2]=d;return a}function F(a,b,c){a[0]=b[0]+c[0];a[1]=b[1]+c[1];a[2]=b[2]+c[2];return a}function r(a,b,c){a[0]=b[0]-c[0];a[1]=b[1]-c[1];a[2]=b[2]-c[2];return a}function t(a,b,c){a[0]=b[0]*c[0];a[1]=b[1]*c[1];a[2]=b[2]*c[2];
return a}function u(a,b,c){a[0]=b[0]/c[0];a[1]=b[1]/c[1];a[2]=b[2]/c[2];return a}function G(a,b){a[0]=Math.ceil(b[0]);a[1]=Math.ceil(b[1]);a[2]=Math.ceil(b[2]);return a}function H(a,b){a[0]=Math.floor(b[0]);a[1]=Math.floor(b[1]);a[2]=Math.floor(b[2]);return a}function I(a,b){a[0]=Math.abs(b[0]);a[1]=Math.abs(b[1]);a[2]=Math.abs(b[2]);return a}function J(a,b){a[0]=Math.sign(b[0]);a[1]=Math.sign(b[1]);a[2]=Math.sign(b[2]);return a}function K(a,b,c){a[0]=Math.min(b[0],c[0]);a[1]=Math.min(b[1],c[1]);
a[2]=Math.min(b[2],c[2]);return a}function L(a,b,c){a[0]=Math.max(b[0],c[0]);a[1]=Math.max(b[1],c[1]);a[2]=Math.max(b[2],c[2]);return a}function M(a,b){a[0]=Math.round(b[0]);a[1]=Math.round(b[1]);a[2]=Math.round(b[2]);return a}function N(a,b,c){a[0]=b[0]*c;a[1]=b[1]*c;a[2]=b[2]*c;return a}function O(a,b,c,d){a[0]=b[0]+c[0]*d;a[1]=b[1]+c[1]*d;a[2]=b[2]+c[2]*d;return a}function v(a,b){const c=b[0]-a[0],d=b[1]-a[1];a=b[2]-a[2];return Math.sqrt(c*c+d*d+a*a)}function w(a,b){const c=b[0]-a[0],d=b[1]-a[1];
a=b[2]-a[2];return c*c+d*d+a*a}function x(a){const b=a[0],c=a[1];a=a[2];return b*b+c*c+a*a}function P(a,b){a[0]=-b[0];a[1]=-b[1];a[2]=-b[2];return a}function Q(a,b){a[0]=1/b[0];a[1]=1/b[1];a[2]=1/b[2];return a}function y(a,b){var c=b[0];const d=b[1],e=b[2];c=c*c+d*d+e*e;0<c&&(c=1/Math.sqrt(c),a[0]=b[0]*c,a[1]=b[1]*c,a[2]=b[2]*c);return a}function B(a,b){return a[0]*b[0]+a[1]*b[1]+a[2]*b[2]}function R(a,b,c){const d=b[0],e=b[1];b=b[2];const f=c[0],h=c[1];c=c[2];a[0]=e*c-b*h;a[1]=b*f-d*c;a[2]=d*h-e*
f;return a}function S(a,b,c,d){const e=b[0],f=b[1];b=b[2];a[0]=e+d*(c[0]-e);a[1]=f+d*(c[1]-f);a[2]=b+d*(c[2]-b);return a}function T(a,b,c,d,e,f){const h=f*f,k=h*(2*f-3)+1,m=h*(f-2)+f,l=h*(f-1);f=h*(3-2*f);a[0]=b[0]*k+c[0]*m+d[0]*l+e[0]*f;a[1]=b[1]*k+c[1]*m+d[1]*l+e[1]*f;a[2]=b[2]*k+c[2]*m+d[2]*l+e[2]*f;return a}function U(a,b,c,d,e,f){var h=1-f,k=h*h;const m=f*f,l=k*h;k*=3*f;h*=3*m;f*=m;a[0]=b[0]*l+c[0]*k+d[0]*h+e[0]*f;a[1]=b[1]*l+c[1]*k+d[1]*h+e[1]*f;a[2]=b[2]*l+c[2]*k+d[2]*h+e[2]*f;return a}function V(a,
b){b=b||1;var c=D.RANDOM;const d=2*c()*Math.PI;c=2*c()-1;const e=Math.sqrt(1-c*c)*b;a[0]=Math.cos(d)*e;a[1]=Math.sin(d)*e;a[2]=c*b;return a}function W(a,b,c){const d=b[0],e=b[1];b=b[2];a[0]=c[0]*d+c[4]*e+c[8]*b+c[12];a[1]=c[1]*d+c[5]*e+c[9]*b+c[13];a[2]=c[2]*d+c[6]*e+c[10]*b+c[14];return a}function X(a,b,c){const d=b[0],e=b[1];b=b[2];a[0]=d*c[0]+e*c[3]+b*c[6];a[1]=d*c[1]+e*c[4]+b*c[7];a[2]=d*c[2]+e*c[5]+b*c[8];return a}function Y(a,b,c){const d=c[0],e=c[1],f=c[2],h=b[0],k=b[1];b=b[2];const m=e*b-
f*k,l=f*h-d*b,C=d*k-e*h;c=2*c[3];a[0]=h+m*c+2*(e*C-f*l);a[1]=k+l*c+2*(f*m-d*C);a[2]=b+C*c+2*(d*l-e*m);return a}function Z(a,b,c,d){const e=[],f=[];e[0]=b[0]-c[0];e[1]=b[1]-c[1];e[2]=b[2]-c[2];f[0]=e[0];f[1]=e[1]*Math.cos(d)-e[2]*Math.sin(d);f[2]=e[1]*Math.sin(d)+e[2]*Math.cos(d);a[0]=f[0]+c[0];a[1]=f[1]+c[1];a[2]=f[2]+c[2];return a}function aa(a,b,c,d){const e=[],f=[];e[0]=b[0]-c[0];e[1]=b[1]-c[1];e[2]=b[2]-c[2];f[0]=e[2]*Math.sin(d)+e[0]*Math.cos(d);f[1]=e[1];f[2]=e[2]*Math.cos(d)-e[0]*Math.sin(d);
a[0]=f[0]+c[0];a[1]=f[1]+c[1];a[2]=f[2]+c[2];return a}function ba(a,b,c,d){const e=[],f=[];e[0]=b[0]-c[0];e[1]=b[1]-c[1];e[2]=b[2]-c[2];f[0]=e[0]*Math.cos(d)-e[1]*Math.sin(d);f[1]=e[0]*Math.sin(d)+e[1]*Math.cos(d);f[2]=e[2];a[0]=f[0]+c[0];a[1]=f[1]+c[1];a[2]=f[2]+c[2];return a}function ca(a,b){q(z,a);q(A,b);y(z,z);y(A,A);a=B(z,A);return 1<a?0:-1>a?Math.PI:Math.acos(a)}function da(a){return"vec3("+a[0]+", "+a[1]+", "+a[2]+")"}function ea(a,b){return a[0]===b[0]&&a[1]===b[1]&&a[2]===b[2]}function fa(a,
b){if(a===b)return!0;const c=a[0],d=a[1];a=a[2];const e=b[0],f=b[1];b=b[2];const h=D.getEpsilon();return Math.abs(c-e)<=h*Math.max(1,Math.abs(c),Math.abs(e))&&Math.abs(d-f)<=h*Math.max(1,Math.abs(d),Math.abs(f))&&Math.abs(a-b)<=h*Math.max(1,Math.abs(a),Math.abs(b))}function ha(a,b,c){const d=c[0]-b[0],e=c[1]-b[1];b=c[2]-b[2];c=d*d+e*e+b*b;if(0<c)return c=1/Math.sqrt(c),a[0]=d*c,a[1]=e*c,a[2]=b*c,a;a[0]=0;a[1]=0;a[2]=0;return a}const z=n.create(),A=n.create();n=Object.freeze(Object.defineProperty({__proto__:null,
abs:I,add:F,angle:ca,bezier:U,ceil:G,copy:q,cross:R,direction:ha,dist:v,distance:v,div:u,divide:u,dot:B,equals:fa,exactEquals:ea,floor:H,hermite:T,inverse:Q,len:p,length:p,lerp:S,max:L,min:K,mul:t,multiply:t,negate:P,normalize:y,random:V,rotateX:Z,rotateY:aa,rotateZ:ba,round:M,scale:N,scaleAndAdd:O,set:E,sign:J,sqrDist:w,sqrLen:x,squaredDistance:w,squaredLength:x,str:da,sub:r,subtract:r,transformMat3:X,transformMat4:W,transformQuat:Y},Symbol.toStringTag,{value:"Module"}));g.abs=I;g.add=F;g.angle=
ca;g.bezier=U;g.ceil=G;g.copy=q;g.cross=R;g.direction=ha;g.dist=v;g.distance=v;g.div=u;g.divide=u;g.dot=B;g.equals=fa;g.exactEquals=ea;g.floor=H;g.hermite=T;g.inverse=Q;g.len=p;g.length=p;g.lerp=S;g.max=L;g.min=K;g.mul=t;g.multiply=t;g.negate=P;g.normalize=y;g.random=V;g.rotateX=Z;g.rotateY=aa;g.rotateZ=ba;g.round=M;g.scale=N;g.scaleAndAdd=O;g.set=E;g.sign=J;g.sqrDist=w;g.sqrLen=x;g.squaredDistance=w;g.squaredLength=x;g.str=da;g.sub=r;g.subtract=r;g.transformMat3=X;g.transformMat4=W;g.transformQuat=
Y;g.vec3=n});