import { al as l$1, ap as f$1, ao as y$1, am as s$1, an as u } from './_virtual_index-2683c931.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const o=(n,t,r)=>[t,r],l=(n,t,r)=>[t,r,n[2]],a=(n,t,r)=>[t,r,n[2],n[3]];function m(n){if(!n)return null;return {originPosition:"upper-left"===n.originPosition?"upperLeft":"lower-left"===n.originPosition?"lowerLeft":n.originPosition,scale:n.tolerance?[n.tolerance,n.tolerance]:[1,1],translate:n.extent?[n.extent.xmin,n.extent.ymax]:[0,0]}}function s({scale:n,translate:t},r){return Math.round((r-t[0])/n[0])}function f({scale:n,translate:t},r){return Math.round((t[1]-r)/n[1])}function x(n,t,r){const e=[];let u,i,o,l;for(let a=0;a<r.length;a++){const m=r[a];a>0?(o=s(n,m[0]),l=f(n,m[1]),o===u&&l===i||(e.push(t(m,o-u,l-i)),u=o,i=l)):(u=s(n,m[0]),i=f(n,m[1]),e.push(t(m,u,i)));}return e.length>0?e:null}function I(n,t,r,e){return x(n,r?e?a:l:e?l:o,t)}function g(n,t,r,e){const u=[],i=r?e?a:l:e?l:o;for(let o=0;o<t.length;o++){const r=x(n,i,t[o]);r&&r.length>=3&&u.push(r);}return u.length?u:null}function N(n,t,r,e){const u=[],i=r?e?a:l:e?l:o;for(let o=0;o<t.length;o++){const r=x(n,i,t[o]);r&&r.length>=2&&u.push(r);}return u.length?u:null}function p({scale:n,translate:t},r){return r*n[0]+t[0]}function y({scale:n,translate:t},r){return t[1]-r*n[1]}function z(n,t,r){const e=new Array(r.length);if(!r.length)return e;const[u,i]=n.scale;let o=p(n,r[0][0]),l=y(n,r[0][1]);e[0]=t(r[0],o,l);for(let a=1;a<r.length;a++){const n=r[a];o+=n[0]*u,l-=n[1]*i,e[a]=t(n,o,l);}return e}function T(n,t,r){const e=new Array(r.length);for(let u=0;u<r.length;u++)e[u]=z(n,t,r[u]);return e}function E(n,t,r,e){return z(n,r?e?a:l:e?l:o,t)}function P(n,t,r,e){return T(n,r?e?a:l:e?l:o,t)}function b(n,t,r,e){return T(n,r?e?a:l:e?l:o,t)}function w(n,t,r,e,u){return t.xmin=s(n,r.xmin),t.ymin=f(n,r.ymin),t.xmax=s(n,r.xmax),t.ymax=f(n,r.ymax),t!==r&&(e&&(t.zmin=r.zmin,t.zmax=r.zmax),u&&(t.mmin=r.mmin,t.mmax=r.mmax)),t}function G(n,t,r,e,u){return t.points=I(n,r.points,e,u),t}function L(n,t,r,e,u){return t.x=s(n,r.x),t.y=f(n,r.y),t!==r&&(e&&(t.z=r.z),u&&(t.m=r.m)),t}function O(n,t,r,e,u){const i=g(n,r.rings,e,u);return i?(t.rings=i,t):null}function S(n,t,r,e,u){const i=N(n,r.paths,e,u);return i?(t.paths=i,t):null}function d(i,o){return i&&o?l$1(o)?L(i,{},o,!1,!1):f$1(o)?S(i,{},o,!1,!1):y$1(o)?O(i,{},o,!1,!1):s$1(o)?G(i,{},o,!1,!1):u(o)?w(i,{},o,!1,!1):null:null}function U(n,t,r,e,u){return t.points=E(n,r.points,e,u),t}function k(n,t,r,e,u){return t.x=p(n,r.x),t.y=y(n,r.y),t!==r&&(e&&(t.z=r.z),u&&(t.m=r.m)),t}function q(n,t,r,e,u){return t.rings=b(n,r.rings,e,u),t}function v(n,t,r,e,u){return t.paths=P(n,r.paths,e,u),t}

export { L, U, d, k, m, q, v };
