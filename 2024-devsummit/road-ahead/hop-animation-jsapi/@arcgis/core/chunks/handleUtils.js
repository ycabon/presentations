/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const n={remove:()=>{}};function r(r){return r?{remove(){r&&(r(),r=void 0)}}:n}function o(n){n.forEach((n=>n?.remove()))}function e(n){return r((()=>o(n)))}function t(n){return r((()=>n()?.remove()))}function u(n){return r((()=>n?.abort()))}function a(n){return r(null!=n?()=>n.destroy():void 0)}export{u as a,t as b,a as d,e as h,r as m,o as r};
