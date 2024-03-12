/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function e(e){return"point"===e.type}class t{constructor(e,t=null,a=0){this.array=e,this.spatialReference=t,this.offset=a}}function a(e){return"array"in e}function r(t,r,n="ground"){if(e(r))return t.getElevation(r.x,r.y,r.z||0,r.spatialReference,n);if(a(r)){let e=r.offset;return t.getElevation(r.array[e++],r.array[e++],r.array[e]||0,r.spatialReference??t.spatialReference,n)}return t.getElevation(r[0],r[1],r[2]||0,t.spatialReference,n)}export{t as S,a,r as g,e as i};
