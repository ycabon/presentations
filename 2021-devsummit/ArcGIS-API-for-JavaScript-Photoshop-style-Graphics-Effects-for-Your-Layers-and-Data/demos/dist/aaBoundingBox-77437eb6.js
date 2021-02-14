import { f as t } from './_virtual:index-1982596a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function i(n=D){return [n[0],n[1],n[2],n[3],n[4],n[5]]}function a(n,t,r,a,u,e,m=i()){return m[0]=n,m[1]=t,m[2]=r,m[3]=a,m[4]=u,m[5]=e,m}function o(n,t){n[0]=Math.min(n[0],t[0]),n[1]=Math.min(n[1],t[1]),n[2]=Math.min(n[2],t[2]),n[3]=Math.max(n[3],t[3]),n[4]=Math.max(n[4],t[4]),n[5]=Math.max(n[5],t[5]);}function h(n,t){n[0]=Math.min(n[0],t[0]),n[1]=Math.min(n[1],t[1]),n[2]=Math.min(n[2],t[2]),n[3]=Math.max(n[3],t[0]),n[4]=Math.max(n[4],t[1]),n[5]=Math.max(n[5],t[2]);}function l(n){return n[0]>=n[3]?0:n[3]-n[0]}function I(n){return n[1]>=n[4]?0:n[4]-n[1]}function y(n){return n[2]>=n[5]?0:n[5]-n[2]}function p(n,t=[0,0,0]){return t[0]=l(n),t[1]=I(n),t[2]=y(n),t}function d(n,t,r=n){return r[0]=t[0],r[1]=t[1],r[2]=t[2],r!==n&&(r[3]=n[3],r[4]=n[4],r[5]=n[5]),r}function q(n,t,r=n){return r[3]=t[0],r[4]=t[1],r[5]=t[2],r!==n&&(r[0]=n[0],r[1]=n[1],r[2]=n[2]),n}function w(n,t){return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n}function A(n){return n?w(n,C):i(C)}function G(n,t){return n[0]=t[0],n[1]=t[1],n[2]=Number.NEGATIVE_INFINITY,n[3]=t[2],n[4]=t[3],n[5]=Number.POSITIVE_INFINITY,n}function O(n){return 6===n.length}function S(t$1,r,i){if(t(t$1)||t(r))return t$1===r;if(!O(t$1)||!O(r))return !1;if(i){for(let n=0;n<t$1.length;n++)if(!i(t$1[n],r[n]))return !1}else for(let n=0;n<t$1.length;n++)if(t$1[n]!==r[n])return !1;return !0}const C=[1/0,1/0,1/0,-1/0,-1/0,-1/0],D=[0,0,0,0,0,0];i();

export { A, C, G, S, a, d, h, i, o, p, q, w };
