// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../utils","./operations/queryTopFeatures","../support/TopFeaturesQuery"],function(b,c,d,e){b.executeForTopCount=async function(a,f,g){a=c.parseUrl(a);return(await d.executeQueryForTopCount(a,e.from(f),{...g})).data.count};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});