// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../utils","./operations/queryTopFeatures","../support/FeatureSet","../support/TopFeaturesQuery"],function(d,e,f,g,h){d.executeTopFeaturesQuery=async function(a,b,k,c){a=e.parseUrl(a);c={...c};({data:b}=await f.executeTopFeaturesQuery(a,h.from(b),k,c));return g.fromJSON(b)};Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});