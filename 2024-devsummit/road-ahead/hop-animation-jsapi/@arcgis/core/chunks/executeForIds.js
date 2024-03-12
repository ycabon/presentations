/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{p as t}from"./utils7.js";import{b as r,c as o}from"./query.js";import s from"../rest/support/Query.js";async function n(o,n,a){const e=t(o);return r(e,s.from(n),{...a}).then((t=>t.data.count))}async function a(r,n,a){const e=t(r);return o(e,s.from(n),{...a}).then((t=>t.data.objectIds))}export{a,n as e};
