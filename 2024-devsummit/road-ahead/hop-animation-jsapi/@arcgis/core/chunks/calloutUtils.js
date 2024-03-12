/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import t from"../symbols/callouts/Callout3D.js";import n from"../symbols/callouts/LineCallout3D.js";function e(t){if(!t)return!1;const n=t.verticalOffset;return!!n&&!(n.screenLength<=0||null!=n.maxWorldLength&&n.maxWorldLength<=0)}function o(t){if(!t)return!1;if(!t.supportsCallout||!t.supportsCallout())return!1;const n=t.callout;return!!n&&!!n.visible&&!!e(t)}function r(t){return"point-3d"===t.type||"label-3d"===t.type}function l(t){return"center"===t.horizontalAlignment}const s={types:{key:"type",base:t,typeMap:{line:n}},json:{write:!0}};export{e as a,r as b,s as c,o as h,l as t};
