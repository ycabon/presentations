/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function e(e,n){switch(e){case"point":case"multipoint":return"point";case"polyline":return function(e){return(null!=e&&"polyline"===e.type&&e.paths.length?e.paths[0].length:0)<2?"polylineZeroVertices":"polylineOneVertex"}(n);case"polygon":return function(e){const n=null!=e&&"polygon"===e.type&&e.rings.length?e.rings[0].length:0;return n<3?"polylineZeroVertices":n<4?"polygonOneVertex":"polygonTwoVertices"}(n);default:return}}export{e as g};
