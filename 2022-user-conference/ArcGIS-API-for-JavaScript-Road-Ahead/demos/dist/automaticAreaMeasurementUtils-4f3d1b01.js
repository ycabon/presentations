import { fH as w, fI as Wn, O as k$1, m as r$1 } from './_virtual_index-1ea2035a.js';
import { j, h, U } from './euclideanAreaMeasurementUtils-01fe08b0.js';
import { o } from './quantityFormatUtils-d7b5c624.js';
import { geodesicArea as k } from './geometryEngine-d05be472.js';
import { r } from './automaticLengthMeasurementUtils-ee98e9f2.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function m(e){const{spatialReference:r$1}=e;return r(r$1,i$1,a,u$1,e)}function i$1(r){return o(Math.abs(w([r],"square-meters")[0]),"square-meters")}function a(t){try{return o(Math.abs(k(t,"square-meters")),"square-meters")}catch(s){return null}}function u$1(r){const o$1=[];return Wn(r,o$1)?o(Math.abs(w([{type:"polygon",rings:o$1,spatialReference:k$1.WGS84}],"square-meters")[0]),"square-meters"):null}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function i(i,u,m$1=U()){if("on-the-ground"===u){const o=m(i);return r$1(o)?o:j(i,m$1)}return h(i,m$1)}function u(e,r=U()){return i(e,"on-the-ground",r)}

export { i, u };
