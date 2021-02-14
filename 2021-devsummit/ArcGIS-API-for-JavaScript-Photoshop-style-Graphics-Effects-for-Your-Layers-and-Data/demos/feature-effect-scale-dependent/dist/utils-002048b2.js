import { cr as U } from './index.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function n(t,n){let e={query:t};return n&&(e={...n,...e}),e}function e(n){return "string"==typeof n?U(n):n}function r(t,n,e){const o={};for(const i in t){if("declaredClass"===i)continue;const f=t[i];if(null!=f&&"function"!=typeof f)if(Array.isArray(f)){o[i]=[];for(let t=0;t<f.length;t++)o[i][t]=r(f[t]);}else if("object"==typeof f)if(f.toJSON){const t=f.toJSON(e&&e[i]);o[i]=n?t:JSON.stringify(t);}else o[i]=n?f:JSON.stringify(f);else o[i]=f;}return o}

export { e, n, r };
