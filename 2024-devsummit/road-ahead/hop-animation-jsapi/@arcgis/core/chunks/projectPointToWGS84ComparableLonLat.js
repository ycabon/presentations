/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{c as o}from"./vec3f64.js";import{p as r}from"./projectVectorToWGS84ComparableLonLat.js";function t(o,t){e[0]=o.x,e[1]=o.y;const a=o.z;return e[2]=void 0!==a?a:0,r(e,o.spatialReference,t)}const e=o();export{t as p};
