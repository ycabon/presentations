import { aD as s$1 } from './_virtual_index-1ea2035a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const n="woff2",s=new Map;async function o(t){const r=i(t);let o=s.get(r);if(o)return o;const a=new FontFace(t.family,`url('${s$1.fontsUrl}/woff2/${r}.${n}') format('${n}')`),u=document.fonts;return u.has(a)&&"loading"===a.status?a.loaded:(o=a.load(),s.set(r,o),u.add(a),o)}function a(e){if(!e)return "arial-unicode-ms";const t=e.toLowerCase().split(" ").join("-");switch(t){case"serif":return "noto-serif";case"sans-serif":return "arial-unicode-ms";case"monospace":return "ubuntu-mono";case"fantasy":return "cabin-sketch";case"cursive":return "redressed";default:return t}}function i(e){const t=c(e)+f(e);return a(e.family)+(t.length>0?t:"-regular")}function c(e){if(!e.weight)return "";switch(e.weight.toLowerCase()){case"bold":case"bolder":return "-bold"}return ""}function f(e){if(!e.style)return "";switch(e.style.toLowerCase()){case"italic":case"oblique":return "-italic"}return ""}

export { a, i, o };
