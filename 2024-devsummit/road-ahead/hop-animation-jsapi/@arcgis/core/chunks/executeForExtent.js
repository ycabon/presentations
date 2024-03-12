/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import"../geometry.js";import{p as t}from"./utils7.js";import{a as o}from"./query.js";import r from"../rest/support/Query.js";import a from"../geometry/Extent.js";async function e(e,m,s){const n=t(e),i=await o(n,r.from(m),{...s}),u=i.data.extent;return!u||isNaN(u.xmin)||isNaN(u.ymin)||isNaN(u.xmax)||isNaN(u.ymax)?{count:i.data.count,extent:null}:{count:i.data.count,extent:a.fromJSON(u)}}export{e};
