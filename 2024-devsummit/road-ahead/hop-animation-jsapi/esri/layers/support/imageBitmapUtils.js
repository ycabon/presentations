// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../core/Error","../../core/promiseUtils"],function(d,g,h){d.createBitmap=async function(e,a,c){let b;try{b=await createImageBitmap(e)}catch(f){throw new g("request:server",`Unable to load ${a}`,{url:a,error:f});}h.throwIfAborted(c);return b};d.createTileBitmap=async function(e,a,c,b,f){let k;try{k=await createImageBitmap(e)}catch(l){throw new g("request:server",`Unable to load tile ${a}/${c}/${b}`,{error:l,level:a,row:c,col:b});}h.throwIfAborted(f);return k};Object.defineProperty(d,
Symbol.toStringTag,{value:"Module"})});