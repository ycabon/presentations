// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../factories/quatf64 ../factories/vec3f64 ./common ./mat4 ./quat".split(" "),function(m,y,z,F,G,w){function C(a,b,c){const d=.5*c[0],e=.5*c[1];c=.5*c[2];const f=b[0],g=b[1],h=b[2];b=b[3];a[0]=f;a[1]=g;a[2]=h;a[3]=b;a[4]=d*b+e*h-c*g;a[5]=e*b+c*f-d*h;a[6]=c*b+d*g-e*f;a[7]=-d*f-e*g-c*h;return a}function H(a,b){a[0]=0;a[1]=0;a[2]=0;a[3]=1;a[4]=.5*b[0];a[5]=.5*b[1];a[6]=.5*b[2];a[7]=0;return a}function I(a,b){a[0]=b[0];a[1]=b[1];a[2]=b[2];a[3]=b[3];a[4]=0;a[5]=0;a[6]=0;a[7]=0;return a}
function J(a,b){const c=ha;G.getRotation(c,b);const d=ia;G.getTranslation(d,b);C(a,c,d);return a}function D(a,b){a[0]=b[0];a[1]=b[1];a[2]=b[2];a[3]=b[3];a[4]=b[4];a[5]=b[5];a[6]=b[6];a[7]=b[7];return a}function K(a){a[0]=0;a[1]=0;a[2]=0;a[3]=1;a[4]=0;a[5]=0;a[6]=0;a[7]=0;return a}function L(a,b,c,d,e,f,g,h,k){a[0]=b;a[1]=c;a[2]=d;a[3]=e;a[4]=f;a[5]=g;a[6]=h;a[7]=k;return a}function M(a,b){a[0]=b[4];a[1]=b[5];a[2]=b[6];a[3]=b[7];return a}function N(a,b){a[4]=b[0];a[5]=b[1];a[6]=b[2];a[7]=b[3];return a}
function O(a,b){const c=b[4],d=b[5],e=b[6],f=b[7],g=-b[0],h=-b[1],k=-b[2];b=b[3];a[0]=2*(c*b+f*g+d*k-e*h);a[1]=2*(d*b+f*h+e*g-c*k);a[2]=2*(e*b+f*k+c*h-d*g);return a}function P(a,b,c){const d=b[0],e=b[1],f=b[2],g=b[3],h=.5*c[0],k=.5*c[1];c=.5*c[2];const l=b[4],n=b[5],p=b[6];b=b[7];a[0]=d;a[1]=e;a[2]=f;a[3]=g;a[4]=g*h+e*c-f*k+l;a[5]=g*k+f*h-d*c+n;a[6]=g*c+d*k-e*h+p;a[7]=-d*h-e*k-f*c+b;return a}function Q(a,b,c){let d=-b[0],e=-b[1],f=-b[2],g=b[3];var h=b[4];const k=b[5],l=b[6],n=b[7],p=h*g+n*d+k*f-l*
e,q=k*g+n*e+l*d-h*f,r=l*g+n*f+h*e-k*d;h=n*g-h*d-k*e-l*f;w.rotateX(a,b,c);d=a[0];e=a[1];f=a[2];g=a[3];a[4]=p*g+h*d+q*f-r*e;a[5]=q*g+h*e+r*d-p*f;a[6]=r*g+h*f+p*e-q*d;a[7]=h*g-p*d-q*e-r*f;return a}function R(a,b,c){let d=-b[0],e=-b[1],f=-b[2],g=b[3];var h=b[4];const k=b[5],l=b[6],n=b[7],p=h*g+n*d+k*f-l*e,q=k*g+n*e+l*d-h*f,r=l*g+n*f+h*e-k*d;h=n*g-h*d-k*e-l*f;w.rotateY(a,b,c);d=a[0];e=a[1];f=a[2];g=a[3];a[4]=p*g+h*d+q*f-r*e;a[5]=q*g+h*e+r*d-p*f;a[6]=r*g+h*f+p*e-q*d;a[7]=h*g-p*d-q*e-r*f;return a}function S(a,
b,c){let d=-b[0],e=-b[1],f=-b[2],g=b[3];var h=b[4];const k=b[5],l=b[6],n=b[7],p=h*g+n*d+k*f-l*e,q=k*g+n*e+l*d-h*f,r=l*g+n*f+h*e-k*d;h=n*g-h*d-k*e-l*f;w.rotateZ(a,b,c);d=a[0];e=a[1];f=a[2];g=a[3];a[4]=p*g+h*d+q*f-r*e;a[5]=q*g+h*e+r*d-p*f;a[6]=r*g+h*f+p*e-q*d;a[7]=h*g-p*d-q*e-r*f;return a}function T(a,b,c){const d=c[0],e=c[1],f=c[2];c=c[3];let g=b[0],h=b[1],k=b[2],l=b[3];a[0]=g*c+l*d+h*f-k*e;a[1]=h*c+l*e+k*d-g*f;a[2]=k*c+l*f+g*e-h*d;a[3]=l*c-g*d-h*e-k*f;g=b[4];h=b[5];k=b[6];l=b[7];a[4]=g*c+l*d+h*f-
k*e;a[5]=h*c+l*e+k*d-g*f;a[6]=k*c+l*f+g*e-h*d;a[7]=l*c-g*d-h*e-k*f;return a}function U(a,b,c){const d=b[0],e=b[1],f=b[2];b=b[3];let g=c[0],h=c[1],k=c[2],l=c[3];a[0]=d*l+b*g+e*k-f*h;a[1]=e*l+b*h+f*g-d*k;a[2]=f*l+b*k+d*h-e*g;a[3]=b*l-d*g-e*h-f*k;g=c[4];h=c[5];k=c[6];l=c[7];a[4]=d*l+b*g+e*k-f*h;a[5]=e*l+b*h+f*g-d*k;a[6]=f*l+b*k+d*h-e*g;a[7]=b*l-d*g-e*h-f*k;return a}function V(a,b,c,d){if(Math.abs(d)<F.getEpsilon())return D(a,b);var e=Math.sqrt(c[0]*c[0]+c[1]*c[1]+c[2]*c[2]);d*=.5;var f=Math.sin(d);const g=
f*c[0]/e,h=f*c[1]/e;c=f*c[2]/e;d=Math.cos(d);e=b[0];f=b[1];var k=b[2];const l=b[3];a[0]=e*d+l*g+f*c-k*h;a[1]=f*d+l*h+k*g-e*c;a[2]=k*d+l*c+e*h-f*g;a[3]=l*d-e*g-f*h-k*c;e=b[4];f=b[5];k=b[6];b=b[7];a[4]=e*d+b*g+f*c-k*h;a[5]=f*d+b*h+k*g-e*c;a[6]=k*d+b*c+e*h-f*g;a[7]=b*d-e*g-f*h-k*c;return a}function W(a,b,c){a[0]=b[0]+c[0];a[1]=b[1]+c[1];a[2]=b[2]+c[2];a[3]=b[3]+c[3];a[4]=b[4]+c[4];a[5]=b[5]+c[5];a[6]=b[6]+c[6];a[7]=b[7]+c[7];return a}function A(a,b,c){const d=b[0],e=b[1],f=b[2],g=b[3],h=c[4],k=c[5],
l=c[6],n=c[7],p=b[4],q=b[5],r=b[6];b=b[7];const u=c[0],v=c[1],t=c[2];c=c[3];a[0]=d*c+g*u+e*t-f*v;a[1]=e*c+g*v+f*u-d*t;a[2]=f*c+g*t+d*v-e*u;a[3]=g*c-d*u-e*v-f*t;a[4]=d*n+g*h+e*l-f*k+p*c+b*u+q*t-r*v;a[5]=e*n+g*k+f*h-d*l+q*c+b*v+r*u-p*t;a[6]=f*n+g*l+d*k-e*h+r*c+b*t+p*v-q*u;a[7]=g*n-d*h-e*k-f*l+b*c-p*u-q*v-r*t;return a}function X(a,b,c){a[0]=b[0]*c;a[1]=b[1]*c;a[2]=b[2]*c;a[3]=b[3]*c;a[4]=b[4]*c;a[5]=b[5]*c;a[6]=b[6]*c;a[7]=b[7]*c;return a}function Y(a,b,c,d){const e=1-d;0>E(b,c)&&(d=-d);a[0]=b[0]*e+
c[0]*d;a[1]=b[1]*e+c[1]*d;a[2]=b[2]*e+c[2]*d;a[3]=b[3]*e+c[3]*d;a[4]=b[4]*e+c[4]*d;a[5]=b[5]*e+c[5]*d;a[6]=b[6]*e+c[6]*d;a[7]=b[7]*e+c[7]*d;return a}function Z(a,b){const c=x(b);a[0]=-b[0]/c;a[1]=-b[1]/c;a[2]=-b[2]/c;a[3]=b[3]/c;a[4]=-b[4]/c;a[5]=-b[5]/c;a[6]=-b[6]/c;a[7]=b[7]/c;return a}function aa(a,b){a[0]=-b[0];a[1]=-b[1];a[2]=-b[2];a[3]=b[3];a[4]=-b[4];a[5]=-b[5];a[6]=-b[6];a[7]=b[7];return a}function ba(a,b){let c=x(b);if(0<c){c=Math.sqrt(c);const d=b[0]/c,e=b[1]/c,f=b[2]/c,g=b[3]/c,h=b[4],
k=b[5],l=b[6];b=b[7];const n=d*h+e*k+f*l+g*b;a[0]=d;a[1]=e;a[2]=f;a[3]=g;a[4]=(h-d*n)/c;a[5]=(k-e*n)/c;a[6]=(l-f*n)/c;a[7]=(b-g*n)/c}return a}function ca(a){return"quat2("+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+", "+a[4]+", "+a[5]+", "+a[6]+", "+a[7]+")"}function da(a,b){return a[0]===b[0]&&a[1]===b[1]&&a[2]===b[2]&&a[3]===b[3]&&a[4]===b[4]&&a[5]===b[5]&&a[6]===b[6]&&a[7]===b[7]}function ea(a,b){const c=a[0],d=a[1],e=a[2],f=a[3],g=a[4],h=a[5],k=a[6];a=a[7];const l=b[0],n=b[1],p=b[2],q=b[3],r=b[4],u=b[5],
v=b[6];b=b[7];const t=F.getEpsilon();return Math.abs(c-l)<=t*Math.max(1,Math.abs(c),Math.abs(l))&&Math.abs(d-n)<=t*Math.max(1,Math.abs(d),Math.abs(n))&&Math.abs(e-p)<=t*Math.max(1,Math.abs(e),Math.abs(p))&&Math.abs(f-q)<=t*Math.max(1,Math.abs(f),Math.abs(q))&&Math.abs(g-r)<=t*Math.max(1,Math.abs(g),Math.abs(r))&&Math.abs(h-u)<=t*Math.max(1,Math.abs(h),Math.abs(u))&&Math.abs(k-v)<=t*Math.max(1,Math.abs(k),Math.abs(v))&&Math.abs(a-b)<=t*Math.max(1,Math.abs(a),Math.abs(b))}const ha=y.create(),ia=z.create();
z=y=w.copy;const E=w.dot,B=w.length,x=w.squaredLength,fa=x,ja=Object.freeze(Object.defineProperty({__proto__:null,add:W,conjugate:aa,copy:D,dot:E,equals:ea,exactEquals:da,fromMat4:J,fromRotation:I,fromRotationTranslation:C,fromTranslation:H,getDual:M,getReal:y,getTranslation:O,identity:K,invert:Z,len:B,length:B,lerp:Y,mul:A,multiply:A,normalize:ba,rotateAroundAxis:V,rotateByQuatAppend:T,rotateByQuatPrepend:U,rotateX:Q,rotateY:R,rotateZ:S,scale:X,set:L,setDual:N,setReal:z,sqrLen:fa,squaredLength:x,
str:ca,translate:P},Symbol.toStringTag,{value:"Module"}));m.add=W;m.conjugate=aa;m.copy=D;m.dot=E;m.equals=ea;m.exactEquals=da;m.fromMat4=J;m.fromRotation=I;m.fromRotationTranslation=C;m.fromTranslation=H;m.getDual=M;m.getReal=y;m.getTranslation=O;m.identity=K;m.invert=Z;m.len=B;m.length=B;m.lerp=Y;m.mul=A;m.multiply=A;m.normalize=ba;m.quat2=ja;m.rotateAroundAxis=V;m.rotateByQuatAppend=T;m.rotateByQuatPrepend=U;m.rotateX=Q;m.rotateY=R;m.rotateZ=S;m.scale=X;m.set=L;m.setDual=N;m.setReal=z;m.sqrLen=
fa;m.squaredLength=x;m.str=ca;m.translate=P;Object.defineProperty(m,Symbol.toStringTag,{value:"Module"})});