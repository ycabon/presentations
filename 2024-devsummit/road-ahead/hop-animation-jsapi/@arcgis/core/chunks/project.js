/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import t from"../request.js";import{e as r}from"./ensureType.js";import{getJsonType as e}from"../geometry/support/jsonUtils.js";import{p as o,a as s}from"./utils7.js";import{d as p}from"./utils8.js";import m from"../rest/support/ProjectParameters.js";const a=r(m);async function i(r,m,i){m=a(m);const n=o(r),j={...n.query,f:"json",...m.toJSON()},u=m.outSpatialReference,f=e(m.geometries[0]),c=s(j,i);return t(n.path+"/project",c).then((({data:{geometries:t}})=>p(t,f,u)))}export{i as p};
