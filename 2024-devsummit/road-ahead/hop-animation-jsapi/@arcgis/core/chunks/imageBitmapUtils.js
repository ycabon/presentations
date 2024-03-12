/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import r from"../core/Error.js";import{throwIfAborted as e}from"../core/promiseUtils.js";async function t(t,a,o){let c;try{c=await createImageBitmap(t)}catch(e){throw new r("request:server",`Unable to load ${a}`,{url:a,error:e})}return e(o),c}async function a(t,a,o,c,l){let n;try{n=await createImageBitmap(t)}catch(e){throw new r("request:server",`Unable to load tile ${a}/${o}/${c}`,{error:e,level:a,row:o,col:c})}return e(l),n}export{t as a,a as c};
