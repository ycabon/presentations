/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function n(n,u){if(null==n)throw new Error(u??"value is None")}function u(n){return n?.destroy(),null}function r(n){return n?.dispose(),null}function l(n){return n?.remove(),null}function e(n){return n?.abort(),null}function t(n){return n?.release(),null}function o(n,u,r){return null!=n&&null!=u?null!=r?r(n,u):n.equals(u):n===u}function s(n,u){return n?.[u]}function a(n,u){let r;return n.some(((n,l)=>(r=u(n,l),null!=r))),r??void 0}export{e as a,n as b,t as c,u as d,o as e,r as f,s as g,a as m,l as r};
