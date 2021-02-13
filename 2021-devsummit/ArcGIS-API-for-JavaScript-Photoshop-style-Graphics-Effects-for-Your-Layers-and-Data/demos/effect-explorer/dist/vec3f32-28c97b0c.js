import { fb as a$2, f7 as z$1, f3 as _$3, fJ as Y$1, f0 as j$1, ac as n$3, ak as t$3, fc as t$4 } from './index.js';
import { a as a$3, r as r$3, s as s$1, l as l$1, _ as _$2, j, x as x$1, q, g, D as D$1, E as E$1 } from './vec4-dd5ce214.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function e(){return [1,0,0,0,1,0,0,0,1]}function r(e){return [e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8]]}function n(e,r,n,t,a,o,u,c,f){return [e,r,n,t,a,o,u,c,f]}function t(e,r){return new Float64Array(e,r,9)}Object.freeze({__proto__:null,create:e,clone:r,fromValues:n,createView:t});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function e$1(){return [0,0,0,1]}function r$1(e){return [e[0],e[1],e[2],e[3]]}function n$1(e,r,n,t){return [e,r,n,t]}function t$1(e,r){return new Float64Array(e,r,4)}const a=[0,0,0,1];Object.freeze({__proto__:null,create:e$1,clone:r$1,fromValues:n$1,createView:t$1,IDENTITY:a});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function x(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t}function A(t,s,a){a*=.5;const n=Math.sin(a);return t[0]=n*s[0],t[1]=n*s[1],t[2]=n*s[2],t[3]=Math.cos(a),t}function I(t,s){const n=2*Math.acos(s[3]),o=Math.sin(n/2);return o>a$2?(t[0]=s[0]/o,t[1]=s[1]/o,t[2]=s[2]/o):(t[0]=1,t[1]=0,t[2]=0),n}function P(t,s,a){const n=s[0],o=s[1],r=s[2],c=s[3],e=a[0],u=a[1],i=a[2],h=a[3];return t[0]=n*h+c*e+o*i-r*u,t[1]=o*h+c*u+r*e-n*i,t[2]=r*h+c*i+n*u-o*e,t[3]=c*h-n*e-o*u-r*i,t}function b(t,s,a){a*=.5;const n=s[0],o=s[1],r=s[2],c=s[3],e=Math.sin(a),u=Math.cos(a);return t[0]=n*u+c*e,t[1]=o*u+r*e,t[2]=r*u-o*e,t[3]=c*u-n*e,t}function y(t,s,a){a*=.5;const n=s[0],o=s[1],r=s[2],c=s[3],e=Math.sin(a),u=Math.cos(a);return t[0]=n*u-r*e,t[1]=o*u+c*e,t[2]=r*u+n*e,t[3]=c*u-o*e,t}function E(t,s,a){a*=.5;const n=s[0],o=s[1],r=s[2],c=s[3],e=Math.sin(a),u=Math.cos(a);return t[0]=n*u+o*e,t[1]=o*u-n*e,t[2]=r*u+c*e,t[3]=c*u-r*e,t}function _(t,s){const a=s[0],n=s[1],o=s[2];return t[0]=a,t[1]=n,t[2]=o,t[3]=Math.sqrt(Math.abs(1-a*a-n*n-o*o)),t}function z(t,s,n,o){const r=s[0],c=s[1],e=s[2],u=s[3];let i,h,M,f,l,m=n[0],p=n[1],q=n[2],j=n[3];return h=r*m+c*p+e*q+u*j,h<0&&(h=-h,m=-m,p=-p,q=-q,j=-j),1-h>a$2?(i=Math.acos(h),M=Math.sin(i),f=Math.sin((1-o)*i)/M,l=Math.sin(o*i)/M):(f=1-o,l=o),t[0]=f*r+l*m,t[1]=f*c+l*p,t[2]=f*e+l*q,t[3]=f*u+l*j,t}function L(t){const s=t$4(),a=t$4(),o=t$4(),r=Math.sqrt(1-s),c=Math.sqrt(s);return t[0]=r*Math.sin(2*Math.PI*a),t[1]=r*Math.cos(2*Math.PI*a),t[2]=c*Math.sin(2*Math.PI*o),t[3]=c*Math.cos(2*Math.PI*o),t}function k(t,s){const a=s[0],n=s[1],o=s[2],r=s[3],c=a*a+n*n+o*o+r*r,e=c?1/c:0;return t[0]=-a*e,t[1]=-n*e,t[2]=-o*e,t[3]=r*e,t}function w(t,s){return t[0]=-s[0],t[1]=-s[1],t[2]=-s[2],t[3]=s[3],t}function B(t,s){const a=s[0]+s[4]+s[8];let n;if(a>0)n=Math.sqrt(a+1),t[3]=.5*n,n=.5/n,t[0]=(s[5]-s[7])*n,t[1]=(s[6]-s[2])*n,t[2]=(s[1]-s[3])*n;else {let a=0;s[4]>s[0]&&(a=1),s[8]>s[3*a+a]&&(a=2);const o=(a+1)%3,r=(a+2)%3;n=Math.sqrt(s[3*a+a]-s[3*o+o]-s[3*r+r]+1),t[a]=.5*n,n=.5/n,t[3]=(s[3*o+r]-s[3*r+o])*n,t[o]=(s[3*o+a]+s[3*a+o])*n,t[r]=(s[3*r+a]+s[3*a+r])*n;}return t}function C(t,s,a,n){const o=.5*Math.PI/180;s*=o,a*=o,n*=o;const r=Math.sin(s),c=Math.cos(s),e=Math.sin(a),u=Math.cos(a),i=Math.sin(n),h=Math.cos(n);return t[0]=r*u*h-c*e*i,t[1]=c*e*h+r*u*i,t[2]=c*u*i-r*e*h,t[3]=c*u*h+r*e*i,t}function D(t){return "quat("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"}const F=a$3,G=r$3,O=s$1,R=P,T=l$1,W=_$2,X=j,Y=x$1,Z=Y,H=q,J=H,K=g,N=D$1,Q=E$1;function S(t,s,a){const n=z$1(s,a);return n<-.999999?(_$3(U,V,s),Y$1(U)<1e-6&&_$3(U,$,s),j$1(U,U),A(t,U,Math.PI),t):n>.999999?(t[0]=0,t[1]=0,t[2]=0,t[3]=1,t):(_$3(U,s,a),t[0]=U[0],t[1]=U[1],t[2]=U[2],t[3]=1+n,K(t,t))}const U=n$3(),V=t$3(1,0,0),$=t$3(0,1,0);function tt(t,s,a,n,o,r){return z(st,s,o,r),z(at,a,n,r),z(t,st,at,2*r*(1-r)),t}const st=e$1(),at=e$1();function nt(t,s,a,n){const o=ot;return o[0]=a[0],o[3]=a[1],o[6]=a[2],o[1]=n[0],o[4]=n[1],o[7]=n[2],o[2]=-s[0],o[5]=-s[1],o[8]=-s[2],K(t,B(t,o))}const ot=e();Object.freeze({__proto__:null,identity:x,setAxisAngle:A,getAxisAngle:I,multiply:P,rotateX:b,rotateY:y,rotateZ:E,calculateW:_,slerp:z,random:L,invert:k,conjugate:w,fromMat3:B,fromEuler:C,str:D,copy:F,set:G,add:O,mul:R,scale:T,dot:W,lerp:X,length:Y,len:Z,squaredLength:H,sqrLen:J,normalize:K,exactEquals:N,equals:Q,rotationTo:S,sqlerp:tt,setAxes:nt});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function n$2(){return new Float32Array(3)}function r$2(n){const r=new Float32Array(3);return r[0]=n[0],r[1]=n[1],r[2]=n[2],r}function t$2(n,r,t){const a=new Float32Array(3);return a[0]=n,a[1]=r,a[2]=t,a}function a$1(n,r){return new Float32Array(n,r,3)}function e$2(){return n$2()}function o(){return t$2(1,1,1)}function u(){return t$2(1,0,0)}function s(){return t$2(0,1,0)}function c(){return t$2(0,0,1)}const i=e$2(),f=o(),l=u(),_$1=s(),w$1=c();Object.freeze({__proto__:null,create:n$2,clone:r$2,fromValues:t$2,createView:a$1,zeros:e$2,ones:o,unitX:u,unitY:s,unitZ:c,ZEROS:i,ONES:f,UNIT_X:l,UNIT_Y:_$1,UNIT_Z:w$1});

export { I, t as a, t$1 as b, e$1 as c, e, n$2 as n, t$2 as t, w };
