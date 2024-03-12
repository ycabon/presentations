/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function e(e,r,n){if(!r||!e?.map)return;const{map:s}=e,a=s.layers.find((e=>e===r));a||s.add(r,n),a&&null!=n&&s.layers.reorder(a,n)}function r(e,r){const n="subtype-sublayer"===r?.type?r.parent:r;return e.allLayerViews.find((e=>{const r=e.layer;return r===n||"sublayers"in r&&null!=r.sublayers&&r.sublayers.includes(n)}))}export{e as a,r as f};
