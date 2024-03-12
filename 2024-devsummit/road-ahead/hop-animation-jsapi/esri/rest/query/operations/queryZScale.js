// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../geometry/support/zscale"],function(c,d){c.applyFeatureSetZUnitScaling=function(a,e,b){if(b?.features&&b.hasZ&&(a=d.getGeometryZScaler(b.geometryType,e,a.outSpatialReference),null!=a))for(const f of b.features)a(f.geometry)};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});