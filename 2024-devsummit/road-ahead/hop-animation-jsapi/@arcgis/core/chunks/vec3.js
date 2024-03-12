/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{c as t}from"./vec3f64.js";import{g as n,R as a}from"./common.js";function r(t){const n=t[0],a=t[1],r=t[2];return Math.sqrt(n*n+a*a+r*r)}function s(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t}function o(t,n,a,r){return t[0]=n,t[1]=a,t[2]=r,t}function u(t,n,a){return t[0]=n[0]+a[0],t[1]=n[1]+a[1],t[2]=n[2]+a[2],t}function e(t,n,a){return t[0]=n[0]-a[0],t[1]=n[1]-a[1],t[2]=n[2]-a[2],t}function c(t,n,a){return t[0]=n[0]*a[0],t[1]=n[1]*a[1],t[2]=n[2]*a[2],t}function i(t,n,a){return t[0]=n[0]/a[0],t[1]=n[1]/a[1],t[2]=n[2]/a[2],t}function h(t,n){return t[0]=Math.floor(n[0]),t[1]=Math.floor(n[1]),t[2]=Math.floor(n[2]),t}function M(t,n){return t[0]=Math.abs(n[0]),t[1]=Math.abs(n[1]),t[2]=Math.abs(n[2]),t}function f(t,n){return t[0]=Math.sign(n[0]),t[1]=Math.sign(n[1]),t[2]=Math.sign(n[2]),t}function l(t,n,a){return t[0]=Math.min(n[0],a[0]),t[1]=Math.min(n[1],a[1]),t[2]=Math.min(n[2],a[2]),t}function m(t,n,a){return t[0]=Math.max(n[0],a[0]),t[1]=Math.max(n[1],a[1]),t[2]=Math.max(n[2],a[2]),t}function d(t,n,a){return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t}function b(t,n,a,r){return t[0]=n[0]+a[0]*r,t[1]=n[1]+a[1]*r,t[2]=n[2]+a[2]*r,t}function g(t,n){const a=n[0]-t[0],r=n[1]-t[1],s=n[2]-t[2];return Math.sqrt(a*a+r*r+s*s)}function q(t,n){const a=n[0]-t[0],r=n[1]-t[1],s=n[2]-t[2];return a*a+r*r+s*s}function x(t){const n=t[0],a=t[1],r=t[2];return n*n+a*a+r*r}function p(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t}function v(t,n){const a=n[0],r=n[1],s=n[2];let o=a*a+r*r+s*s;return o>0&&(o=1/Math.sqrt(o),t[0]=n[0]*o,t[1]=n[1]*o,t[2]=n[2]*o),t}function j(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]}function y(t,n,a){const r=n[0],s=n[1],o=n[2],u=a[0],e=a[1],c=a[2];return t[0]=s*c-o*e,t[1]=o*u-r*c,t[2]=r*e-s*u,t}function z(t,n,a,r){const s=n[0],o=n[1],u=n[2];return t[0]=s+r*(a[0]-s),t[1]=o+r*(a[1]-o),t[2]=u+r*(a[2]-u),t}function _(t,n,a){const r=n[0],s=n[1],o=n[2];return t[0]=a[0]*r+a[4]*s+a[8]*o+a[12],t[1]=a[1]*r+a[5]*s+a[9]*o+a[13],t[2]=a[2]*r+a[6]*s+a[10]*o+a[14],t}function A(t,n,a){const r=n[0],s=n[1],o=n[2];return t[0]=r*a[0]+s*a[3]+o*a[6],t[1]=r*a[1]+s*a[4]+o*a[7],t[2]=r*a[2]+s*a[5]+o*a[8],t}function D(t,n,a){const r=a[0],s=a[1],o=a[2],u=a[3],e=n[0],c=n[1],i=n[2],h=s*i-o*c,M=o*e-r*i,f=r*c-s*e,l=s*f-o*M,m=o*h-r*f,d=r*M-s*h,b=2*u;return t[0]=e+h*b+2*l,t[1]=c+M*b+2*m,t[2]=i+f*b+2*d,t}function I(t,n,a,r){const s=[],o=[];return s[0]=n[0]-a[0],s[1]=n[1]-a[1],s[2]=n[2]-a[2],o[0]=s[0]*Math.cos(r)-s[1]*Math.sin(r),o[1]=s[0]*Math.sin(r)+s[1]*Math.cos(r),o[2]=s[2],t[0]=o[0]+a[0],t[1]=o[1]+a[1],t[2]=o[2]+a[2],t}function P(t,n){s(E,t),s(L,n),v(E,E),v(L,L);const a=j(E,L);return a>1?0:a<-1?Math.PI:Math.acos(a)}const E=t(),L=t();function O(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]}function S(t,a){if(t===a)return!0;const r=t[0],s=t[1],o=t[2],u=a[0],e=a[1],c=a[2],i=n();return Math.abs(r-u)<=i*Math.max(1,Math.abs(r),Math.abs(u))&&Math.abs(s-e)<=i*Math.max(1,Math.abs(s),Math.abs(e))&&Math.abs(o-c)<=i*Math.max(1,Math.abs(o),Math.abs(c))}function k(t,n,a){const r=a[0]-n[0],s=a[1]-n[1],o=a[2]-n[2];let u=r*r+s*s+o*o;return u>0?(u=1/Math.sqrt(u),t[0]=r*u,t[1]=s*u,t[2]=o*u,t):(t[0]=0,t[1]=0,t[2]=0,t)}const w=e,B=c,C=i,F=g,G=q,H=r,J=x,Q=Object.freeze(Object.defineProperty({__proto__:null,abs:M,add:u,angle:P,bezier:function(t,n,a,r,s,o){const u=1-o,e=u*u,c=o*o,i=e*u,h=3*o*e,M=3*c*u,f=c*o;return t[0]=n[0]*i+a[0]*h+r[0]*M+s[0]*f,t[1]=n[1]*i+a[1]*h+r[1]*M+s[1]*f,t[2]=n[2]*i+a[2]*h+r[2]*M+s[2]*f,t},ceil:function(t,n){return t[0]=Math.ceil(n[0]),t[1]=Math.ceil(n[1]),t[2]=Math.ceil(n[2]),t},copy:s,cross:y,direction:k,dist:F,distance:g,div:C,divide:i,dot:j,equals:S,exactEquals:O,floor:h,hermite:function(t,n,a,r,s,o){const u=o*o,e=u*(2*o-3)+1,c=u*(o-2)+o,i=u*(o-1),h=u*(3-2*o);return t[0]=n[0]*e+a[0]*c+r[0]*i+s[0]*h,t[1]=n[1]*e+a[1]*c+r[1]*i+s[1]*h,t[2]=n[2]*e+a[2]*c+r[2]*i+s[2]*h,t},inverse:function(t,n){return t[0]=1/n[0],t[1]=1/n[1],t[2]=1/n[2],t},len:H,length:r,lerp:z,max:m,min:l,mul:B,multiply:c,negate:p,normalize:v,random:function(t,n){n=n||1;const r=a,s=2*r()*Math.PI,o=2*r()-1,u=Math.sqrt(1-o*o)*n;return t[0]=Math.cos(s)*u,t[1]=Math.sin(s)*u,t[2]=o*n,t},rotateX:function(t,n,a,r){const s=[],o=[];return s[0]=n[0]-a[0],s[1]=n[1]-a[1],s[2]=n[2]-a[2],o[0]=s[0],o[1]=s[1]*Math.cos(r)-s[2]*Math.sin(r),o[2]=s[1]*Math.sin(r)+s[2]*Math.cos(r),t[0]=o[0]+a[0],t[1]=o[1]+a[1],t[2]=o[2]+a[2],t},rotateY:function(t,n,a,r){const s=[],o=[];return s[0]=n[0]-a[0],s[1]=n[1]-a[1],s[2]=n[2]-a[2],o[0]=s[2]*Math.sin(r)+s[0]*Math.cos(r),o[1]=s[1],o[2]=s[2]*Math.cos(r)-s[0]*Math.sin(r),t[0]=o[0]+a[0],t[1]=o[1]+a[1],t[2]=o[2]+a[2],t},rotateZ:I,round:function(t,n){return t[0]=Math.round(n[0]),t[1]=Math.round(n[1]),t[2]=Math.round(n[2]),t},scale:d,scaleAndAdd:b,set:o,sign:f,sqrDist:G,sqrLen:J,squaredDistance:q,squaredLength:x,str:function(t){return"vec3("+t[0]+", "+t[1]+", "+t[2]+")"},sub:w,subtract:e,transformMat3:A,transformMat4:_,transformQuat:D},Symbol.toStringTag,{value:"Module"}));export{M as A,G as B,J as C,f as D,c as E,i as F,F as G,I as H,h as I,Q as J,z as a,d as b,e as c,j as d,y as e,H as f,_ as g,u as h,g as i,x as j,q as k,r as l,b as m,v as n,O as o,s as p,P as q,l as r,o as s,D as t,m as u,w as v,A as w,k as x,p as y,S as z};
