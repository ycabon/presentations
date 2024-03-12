/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{p as r}from"./utils7.js";import{e as t}from"./query.js";import o from"../rest/support/FeatureSet.js";import s from"../rest/support/Query.js";async function e(r,t,s){const e=await a(r,t,s);return o.fromJSON(e)}async function a(o,e,a){const n=r(o),p={...a},u=s.from(e),{data:i}=await t(n,u,u.sourceSpatialReference,p);return i}export{e as a,a as e};
