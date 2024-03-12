// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../Ground","../../../core/arrayUtils","../../../core/unitUtils"],function(b,g,c,h){function d(a){if(null==a)return null;if(a instanceof g)return e(a);a=a.tileInfo;if(null==a)return null;const f=c.last(a.lods);return null==f?null:f.resolution*h.getMetersPerUnitForSR(a.spatialReference)}function e(a){if(null==a)return null;a=a.layers.items.map(k).filter(c.isSome);return c.min(a)??null}function k(a){return a&&"tileInfo"in a?d(a):null}b.getGroundMinDemResolution=e;b.getQuerySourceMinDemResolution=
d;Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});