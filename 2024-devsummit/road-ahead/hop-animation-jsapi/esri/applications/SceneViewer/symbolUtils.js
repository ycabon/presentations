// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../symbols/support/symbolLayerUtils","../../symbols/support/symbolLayerUtils3D"],function(a,c,d){a.computeObjectLayerSize=async function(b){const e=await c.computeObjectLayerResourceSize(b);return d.objectSymbolLayerSizeWithResourceSize(e,b)};Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});