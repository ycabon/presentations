/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function c(c){return c=c||globalThis.location.hostname,m.some((a=>null!=c?.match(a)))}function a(c,a){return c&&(a=a||globalThis.location.hostname)?null!=a.match(t)||null!=a.match(l)?c.replace("static.arcgis.com","staticdev.arcgis.com"):null!=a.match(s)||null!=a.match(i)?c.replace("static.arcgis.com","staticqa.arcgis.com"):c:c}const t=/^devext.arcgis.com$/,s=/^qaext.arcgis.com$/,l=/^[\w-]*\.mapsdevext.arcgis.com$/,i=/^[\w-]*\.mapsqa.arcgis.com$/,m=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,t,s,/^jsapps.esri.com$/,l,i];

export { a, c };
