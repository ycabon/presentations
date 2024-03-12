/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{l as t,s as n}from"./vec3.js";const r=new Float32Array(1);function a(t){--t;for(let n=1;n<32;n<<=1)t|=t>>n;return t+1}function e(t,n,r){return Math.min(Math.max(t,n),r)}function u(t,n){return 0===n?0:Math.round(t/n)*n}function i(t){return 0==(t&t-1)}function s(t){return t--,t|=t>>1,t|=t>>2,t|=t>>4,t|=t>>8,t|=t>>16,++t}function o(t){return 10**Math.ceil(Math.LOG10E*Math.log(t))}function c(t,n,r){return t+(n-t)*r}function f(t,n,r,a,e){return c(a,e,(t-n)/(r-n))}function h(t){return t*Math.PI/180}function M(t){return 180*t/Math.PI}function b(t,n=1e-6){return(t<0?-1:1)/Math.max(Math.abs(t),n)}function m(t){return Math.acos(e(t,-1,1))}function l(t){return Math.asin(e(t,-1,1))}function F(t,n,r=1e-6){return t===n||!(!Number.isFinite(t)||!Number.isFinite(n))&&(t>n?t-n:n-t)<=r}const g=new DataView(new ArrayBuffer(Float64Array.BYTES_PER_ELEMENT));function N(t){return g.setFloat64(0,t),g.getBigInt64(0)}const E=BigInt("1000000"),B=I(1);function I(t){const n=N(t=Math.abs(t)),r=(a=n<=E?E:n-E,g.setBigInt64(0,a),g.getFloat64(0));var a;return Math.abs(t-r)}function w(t,n,r=B){if(t===n)return!0;if(!Number.isFinite(t)||!Number.isFinite(n))return!1;if(null!=r&&I(Math.min(Math.abs(t),Math.abs(n)))<r)return Math.abs(t-n)<=r;const a=N(t),e=N(n);return a<0==e<0&&!((a<e?e-a:a-e)>E)}function x(t,n,r=1e-6){if(t===n)return!0;if(!Number.isFinite(t)||!Number.isFinite(n))return!1;const a=Math.abs(t-n),e=Math.abs(t),u=Math.abs(n);if(0===t||0===n||e<1e-12&&u<1e-12){if(a>.01*r)return!1}else if(a/(e+u)>r)return!1;return!0}function p(t){return v(Math.max(-j,Math.min(t,j)))}function v(t){return r[0]=t,r[0]}function y(t,n,r){const a=e((r-t)/(n-t),0,1);return a*a*(3-2*a)}function A(r,a){const e=t(r),u=l(r[2]/e),i=Math.atan2(r[1]/e,r[0]/e);return n(a,e,u,i),a}function P(t){const n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[3]*t[3]+t[4]*t[4]+t[5]*t[5],a=t[6]*t[6]+t[7]*t[7]+t[8]*t[8];return!(F(n,1)&&F(r,1)&&F(a,1))}function d(t,n){return(t%n+n)%n}const j=v(34028234663852886e22);export{m as a,A as b,e as c,h as d,l as e,F as f,p as g,j as h,x as i,s as j,P as k,c as l,d as m,a as n,o,u as p,w as q,M as r,f as s,b as t,y as u,i as v};
