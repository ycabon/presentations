/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import"../core/Error.js";import"./Logger.js";import"../core/lang.js";import"./tracking.js";import"./unitUtils.js";import"../geometry/Extent.js";import"../geometry/Multipoint.js";import"../geometry/Point.js";import"../geometry/Polygon.js";import"../geometry/Polyline.js";import o from"../geometry/SpatialReference.js";import"./projectBuffer.js";import{p as t}from"./projectPointToVector.js";import{m as r}from"./dehydratedPoint.js";function e(o,r,e,m,p){return!(null==r||null==m||o.length<2)&&(i.x=o[0],i.y=o[1],i.z=o[2],i.spatialReference=r,t(i,e,m,p))}const i=r(0,0,0,o.WGS84);export{e as p};
