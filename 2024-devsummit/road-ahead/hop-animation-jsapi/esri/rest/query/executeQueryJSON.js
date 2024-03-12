// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../utils","./operations/query","../support/FeatureSet","../support/Query"],function(d,f,g,h,k){async function e(b,a,c){b=f.parseUrl(b);c={...c};a=k.from(a);({data:a}=await g.executeQuery(b,a,a.sourceSpatialReference,c));return a}d.executeQueryJSON=async function(b,a,c){b=await e(b,a,c);return h.fromJSON(b)};d.executeRawQueryJSON=e;Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});