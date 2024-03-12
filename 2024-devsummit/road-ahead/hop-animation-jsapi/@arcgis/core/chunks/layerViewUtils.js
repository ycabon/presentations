/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function n(n){return n&&"function"==typeof n.highlight}function e(n){return n&&"function"==typeof n.maskOccludee}function t(n,e,t){return null==n||n>t&&(0===e||n<e)}function u(n,e){return null!=n&&n>0||null!=e&&e>0}function a(n){const e=n.effectiveScaleRange;return{minScale:e?.minScale??0,maxScale:e?.maxScale??0}}function c(n){return null!=n&&"object"==typeof n&&"createQuery"in n&&"queryFeatures"in n&&"layer"in n&&"view"in n}export{u as a,a as e,n as h,c as i,e as o,t as s};
