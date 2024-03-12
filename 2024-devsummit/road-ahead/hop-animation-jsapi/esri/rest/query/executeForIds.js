// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../utils","./operations/query","../support/Query"],function(b,c,d,e){b.executeForIds=async function(a,f,g){a=c.parseUrl(a);return d.executeQueryForIds(a,e.from(f),{...g}).then(h=>h.data.objectIds)};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});