import { jI as f, ck as $ } from './_virtual_index-64b818a8.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const e=96;function i(i,r){const o=r||i.extent,c=i.width,d=$(o&&o.spatialReference);return o&&c?o.width/c*d*f*e:0}function r(i,r){return i/($(r)*f*e)}

export { i, r };
