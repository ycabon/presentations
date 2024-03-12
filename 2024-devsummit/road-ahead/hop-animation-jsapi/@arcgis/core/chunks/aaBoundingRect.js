/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import"../core/lang.js";import{c as n}from"./mathUtils.js";import t from"../geometry/Extent.js";function a(n=U){return[n[0],n[1],n[2],n[3]]}function r(n){return[n[0],n[1],n[2],n[3]]}function i(n,t){return n!==t&&(n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3]),n}function u(n,t,r,i,u=a()){return u[0]=n,u[1]=t,u[2]=r,u[3]=i,u}function e(n,t=a()){return t[0]=n.xmin,t[1]=n.ymin,t[2]=n.xmax,t[3]=n.ymax,t}function s(n,a){return new t({xmin:n[0],ymin:n[1],xmax:n[2],ymax:n[3],spatialReference:a})}function o(n,t){t[0]<n[0]&&(n[0]=t[0]),t[0]>n[2]&&(n[2]=t[0]),t[1]<n[1]&&(n[1]=t[1]),t[1]>n[3]&&(n[3]=t[1])}function c(n,t,a){if(null!=t)if("length"in t)B(t)?(a[0]=Math.min(n[0],t[0]),a[1]=Math.min(n[1],t[1]),a[2]=Math.max(n[2],t[2]),a[3]=Math.max(n[3],t[3])):2!==t.length&&3!==t.length||(a[0]=Math.min(n[0],t[0]),a[1]=Math.min(n[1],t[1]),a[2]=Math.max(n[2],t[0]),a[3]=Math.max(n[3],t[1]));else switch(t.type){case"extent":a[0]=Math.min(n[0],t.xmin),a[1]=Math.min(n[1],t.ymin),a[2]=Math.max(n[2],t.xmax),a[3]=Math.max(n[3],t.ymax);break;case"point":a[0]=Math.min(n[0],t.x),a[1]=Math.min(n[1],t.y),a[2]=Math.max(n[2],t.x),a[3]=Math.max(n[3],t.y)}else i(a,n)}function m(n,t,a=n){const r=t.length;let i=n[0],u=n[1],e=n[2],s=n[3];for(let n=0;n<r;n++){const a=t[n];i=Math.min(i,a[0]),u=Math.min(u,a[1]),e=Math.max(e,a[0]),s=Math.max(s,a[1])}return a[0]=i,a[1]=u,a[2]=e,a[3]=s,a}function f(n){for(let t=0;t<4;t++)if(!isFinite(n[t]))return!1;return!0}function h(n){return null==n||n[0]>=n[2]?0:n[2]-n[0]}function x(n){return null==n||n[1]>=n[3]?0:n[3]-n[1]}function M(n){return h(n)*x(n)}function l(n){return h(n)>0&&x(n)>0}function y(n,t=[0,0]){return t[0]=(n[0]+n[2])/2,t[1]=(n[1]+n[3])/2,t}function g(n,t){return F(n,t[0],t[1])}function p(n,t){const a=t[3],r=.5*(n[0]+n[2]),i=Math.abs(t[0]-r),u=.5*(n[2]-n[0]);if(i>a+u)return!1;const e=.5*(n[1]+n[3]),s=.5*(n[3]-n[1]),o=Math.abs(t[1]-e);if(o>a+s)return!1;if(i<u||o<s)return!0;const c=i-u,m=o-s;return c*c+m*m<=a*a}function b(n,t,a){const r=n[0],i=n[1],u=n[2],e=n[3],{x:s,y:o}=t,{x:c,y:m}=a,f=(n,t)=>(m-o)*n+(s-c)*t+(c*o-s*m)<0,h=f(r,e),x=f(u,e),M=f(u,i),l=f(r,i);return!(h===x&&x===M&&M===l&&l===h||s<r&&c<r||s>u&&c>u||o>e&&m>e||o<i&&m<i)}function j(n,t){return F(n,t.x,t.y)}function F(n,t,a){return t>=n[0]&&a>=n[1]&&t<=n[2]&&a<=n[3]}function w(n,t,a){return t[0]>=n[0]-a&&t[1]>=n[1]-a&&t[0]<=n[2]+a&&t[1]<=n[3]+a}function k(n,t){return Math.max(t[0],n[0])<=Math.min(t[2],n[2])&&Math.max(t[1],n[1])<=Math.min(t[3],n[3])}function q(n,t){return t[0]>=n[0]&&t[2]<=n[2]&&t[1]>=n[1]&&t[3]<=n[3]}function E(t,a,r){if(null==a)return i(r,t);const u=a[0],e=a[1],s=a[2],o=a[3];return r[0]=n(t[0],u,s),r[1]=n(t[1],e,o),r[2]=n(t[2],u,s),r[3]=n(t[3],e,o),r}function d(n,t){const a=(n[0]+n[2])/2,r=(n[1]+n[3])/2,i=Math.max(Math.abs(t[0]-a)-h(n)/2,0),u=Math.max(Math.abs(t[1]-r)-x(n)/2,0);return Math.sqrt(i*i+u*u)}function v(n,t,a,r=n){return r[0]=n[0]+t,r[1]=n[1]+a,r[2]=n[2]+t,r[3]=n[3]+a,r}function z(n,t,a=n){return a[0]=n[0]-t,a[1]=n[1]-t,a[2]=n[2]+t,a[3]=n[3]+t,a}function A(n){return n?i(n,R):a(R)}function B(n){return null!=n&&4===n.length}function C(n){return!(0!==h(n)&&isFinite(n[0])||0!==x(n)&&isFinite(n[1]))}function D(n,t){return B(n)&&B(t)?n[0]===t[0]&&n[1]===t[1]&&n[2]===t[2]&&n[3]===t[3]:n===t}const G=[-1/0,-1/0,1/0,1/0],R=[1/0,1/0,-1/0,-1/0],U=[0,0,0,0];export{G as A,r as B,v as C,l as D,f as E,y as F,d as G,c as a,D as b,a as c,e as d,A as e,u as f,F as g,i as h,m as i,C as j,o as k,k as l,q as m,R as n,x as o,E as p,z as q,g as r,w as s,s as t,M as u,j as v,h as w,b as x,p as y,U as z};
