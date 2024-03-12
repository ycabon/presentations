/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{m as o,r as a}from"./asyncUtils.js";import r from"../core/Collection.js";import l from"../core/Loadable.js";async function t(o,a){return await o.load(),n(o,a)}async function n(t,n){const s=[],i=(...o)=>{for(const a of o)null!=a&&(Array.isArray(a)?i(...a):r.isCollection(a)?a.forEach((o=>i(o))):l.isLoadable(a)&&s.push(a))};n(i);let c=null;if(await o(s,(async o=>{const r=await a((l=o,"loadAll"in l&&"function"==typeof l.loadAll?o.loadAll():o.load()));var l;!1!==r.ok||c||(c=r)})),c)throw c.error;return t}export{n as a,t as l};
