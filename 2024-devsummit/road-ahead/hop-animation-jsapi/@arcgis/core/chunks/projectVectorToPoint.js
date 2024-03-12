/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{c as e}from"./vec3f64.js";import{initializeProjection as r}from"../geometry/projection.js";import{p as o}from"./projectVectorToVector.js";function t(e,r,t){return!!o(e,r,c,t.spatialReference)&&(t.x=c[0],t.y=c[1],t.z=c[2],!0)}async function a(e,o,a,c){return await r(o,a.spatialReference,null,c),t(e,o,a)}const c=e();export{a,t as p};
