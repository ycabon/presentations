import { gw as l, bA as K } from './index.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function e(e,r){const i=r||e.extent,o=e.width,c=K(i&&i.spatialReference);return i&&o?i.width/o*c*l*96:0}

export { e };
