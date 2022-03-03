import { kv as m, cN as H } from './_virtual_index-3ad07138.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const e=96;function r(r,i){const o=i||r.extent,c=r.width,u=H(o&&o.spatialReference);return o&&c?o.width/c*u*m*e:0}

export { r };
