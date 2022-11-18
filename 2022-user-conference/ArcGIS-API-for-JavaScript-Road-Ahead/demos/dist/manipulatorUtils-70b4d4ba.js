import { t as t$1, h2 as f, m as r } from './_virtual_index-1ea2035a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function t(o,t=f(o)){return "on-the-ground"!==t.mode&&!(t$1(o.geometry)||!o.geometry.hasZ)}function n(e,r$1){let t=null;const n=e.events.on("grab-changed",(n=>{r(t)&&(t.remove(),t=null),"start"===n.action?(t=e.disableDisplay(),r$1&&r$1(n)):r$1&&r$1(n);}));return {remove(){r(t)&&t.remove(),n.remove();}}}

export { n, t };
