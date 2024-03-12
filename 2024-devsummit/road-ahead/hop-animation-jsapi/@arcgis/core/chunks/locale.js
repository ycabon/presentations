/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{m as n}from"./handleUtils.js";let o,a;const t=globalThis.esriConfig?.locale??globalThis.dojoConfig?.locale;function e(){return t??globalThis.navigator?.language??"en"}function s(){return void 0===a&&(a=e()),a}function l(n){o=n||void 0,d()}function i(n=s()){const o=/^([a-zA-Z]{2,3})(?:[_\-]\w+)*$/.exec(n);return o?.[1].toLowerCase()}const c={he:!0,ar:!0};function r(n=s()){const o=i(n);return void 0!==o&&(c[o]||!1)}const u=[];function f(o){return u.push(o),n((()=>u.splice(u.indexOf(o),1)))}const g=[];function h(o){return g.push(o),n((()=>u.splice(g.indexOf(o),1)))}function d(){const n=o??e();a!==n&&(a=n,[...g].forEach((o=>{o.call(null,n)})),[...u].forEach((o=>{o.call(null,n)})))}globalThis.addEventListener?.("languagechange",d);export{i as a,h as b,s as g,f as o,r as p,l as s};
