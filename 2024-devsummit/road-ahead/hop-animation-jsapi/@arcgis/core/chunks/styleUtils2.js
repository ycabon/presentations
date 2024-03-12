/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{r as e}from"./asyncUtils.js";import{throwIfAborted as r}from"../core/promiseUtils.js";import{W as s}from"../core/accessorSupport/decorators/subclass.js";async function o(o,t,i){const n=o&&o.getAtOrigin&&o.getAtOrigin("renderer",t.origin);if(n&&"unique-value"===n.type&&n.styleOrigin){const a=await e(n.populateFromStyle());if(r(i),!1===a.ok){const e=a.error;t?.messages&&t.messages.push(new s("renderer:style-reference",`Failed to create unique value renderer from style reference: ${e.message}`,{error:e,context:t})),o.clear("renderer",t?.origin)}}}export{o as l};
