/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{c as e}from"./vec3f64.js";import{canProjectWithoutEngine as r,tryProjectWithZConversion as t,initializeProjection as n}from"../geometry/projection.js";import{p as o}from"./projectBuffer.js";function a(e,n,a,s){if(r(e.spatialReference,a)){c[0]=e.x,c[1]=e.y;const r=e.z;return c[2]=r??s??0,o(c,e.spatialReference,0,n,a,0,1)}const f=t(e,a);return!!f&&(n[0]=f?.x,n[1]=f?.y,n[2]=f?.z??s??0,!0)}async function s(e,r,t,o,s){return await n(e.spatialReference,t,null,s),a(e,r,t,o)}const c=e();export{s as a,a as p};
