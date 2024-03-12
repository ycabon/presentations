/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{throwIfAborted as e}from"../core/promiseUtils.js";import{isLoaded as r,canProjectWithoutEngine as t,project as o,load as i}from"../geometry/projection.js";let n,s=null;async function c(r){s||(s=import("./geometryServiceUtils.js").then((e=>n=e))),await s,e(r)}async function a(e,s,m,p){if(!e)return null;const l=e.spatialReference;return r()||t(l,s)?o(e,s):n?n.projectGeometry(e,s,m,p):(await Promise.race([c(p),i(p)]),a(e,s,m,p))}export{a as p};
