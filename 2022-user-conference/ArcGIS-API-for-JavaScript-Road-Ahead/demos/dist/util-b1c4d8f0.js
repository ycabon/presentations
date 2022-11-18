import { F as s } from './_virtual_index-1ea2035a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const o=new s({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryMultiPatch:"multipatch",mesh:"mesh"});function e(t){return o.toJSON(t)}function r(t){const{bandCount:o,attributeTable:e,colormap:n,pixelType:r}=t.rasterInfo;return 1===o&&(null!=e||null!=n||"u8"===r||"s8"===r)}

export { e, r };
