/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{c as r}from"./vec3f64.js";import{g as t}from"./projectBuffer.js";function n(r,n,e){if(null==n)return!1;const f=t(n);return null!=f&&(f(r,0,o,0),e!==o&&(e[0]=o[0],e[1]=o[1],e.length>2&&(e[2]=o[2])),!0)}const o=r();export{n as p};
