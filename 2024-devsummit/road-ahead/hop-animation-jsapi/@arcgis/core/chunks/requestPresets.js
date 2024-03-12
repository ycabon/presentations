/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import e from"../request.js";async function s(s,t){const{data:o}=await e(s,{responseType:"json",query:{f:"json",...t?.customParameters,token:t?.apiKey}});return o}export{s as f};
