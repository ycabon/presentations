import { l, k as o, S, a as s$1, t } from './index.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function i(t){return {renderer:{type:"simple",symbol:"esriGeometryPoint"===t||"esriGeometryMultipoint"===t?l:"esriGeometryPolyline"===t?o:S}}}function s(r,e){if(t("csp-restrictions"))return ()=>({[e]:null,...r});try{let t=`this.${e} = null;`;for(const e in r){t+=`this${e.indexOf(".")?`["${e}"]`:`.${e}`} = ${JSON.stringify(r[e])};`;}const n=new Function(t);return ()=>new n}catch(t){return ()=>({[e]:null,...r})}}function u(t={}){return [{name:"New Feature",description:"",prototype:{attributes:s$1(t)}}]}

export { i, s, u };
