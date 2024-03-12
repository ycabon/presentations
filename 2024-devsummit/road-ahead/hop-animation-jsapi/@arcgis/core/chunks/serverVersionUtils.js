/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import e from"../request.js";async function r(r,t){let a=null;const n="string"==typeof t?t:t.path;if(!r.has(n)){const s=await e(n.replace(/\/VersionManagementServer/i,"/FeatureServer"),{query:{f:"json"}});a={serverVersion:Number(s.data.currentVersion),featureServerUrl:n.replace(/\/VersionManagementServer/i,"/FeatureServer")},r.set(t,a)}}export{r as a};
