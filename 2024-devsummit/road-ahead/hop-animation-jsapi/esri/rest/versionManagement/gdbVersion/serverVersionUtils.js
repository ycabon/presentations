// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../request"],function(c,e){c.addServerVersion=async function(d,b){var a=null;a="string"===typeof b?b:b.path;if(!d.has(a)){const f=await e(a.replace(/\/VersionManagementServer/i,"/FeatureServer"),{query:{f:"json"}});a={serverVersion:Number(f.data.currentVersion),featureServerUrl:a.replace(/\/VersionManagementServer/i,"/FeatureServer")};d.set(b,a)}};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});