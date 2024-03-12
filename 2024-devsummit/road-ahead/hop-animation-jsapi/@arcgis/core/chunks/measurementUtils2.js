/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{canProjectWithoutEngine as o}from"../geometry/projection.js";import{g as r,S as s,W as t}from"./spatialReferenceEllipsoidUtils.js";function e(e){const i=r(e),a=i===s?t:i;return o(e,a)?a:e}export{e as c};
