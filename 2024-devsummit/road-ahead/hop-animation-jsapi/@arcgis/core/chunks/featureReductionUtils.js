/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function e(e,a){const c=e.featureReduction;return c&&"selection"!==c.type&&(!("maxScale"in c)||!c.maxScale||c.maxScale<a.scale)?c:null}export{e as g};
