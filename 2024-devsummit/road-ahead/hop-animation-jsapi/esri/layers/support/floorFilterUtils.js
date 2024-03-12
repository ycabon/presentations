// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports"],function(c){function e(a,b){if(!a?.length)return null;a=a.filter(d=>""!==d).map(d=>`'${d}'`);a.push("''");return`${b} IN (${a.join(",")}) OR ${b} IS NULL`}c.getFloorFilterClause=function(a){const b=a.layer;return"floorInfo"in b&&b.floorInfo?.floorField&&"floors"in a.view?e(a.view.floors,b.floorInfo.floorField):null};c.getLayerFloorFilterClause=function(a,b){return"floorInfo"in b&&b.floorInfo?.floorField?e(a,b.floorInfo.floorField):null};Object.defineProperty(c,Symbol.toStringTag,
{value:"Module"})});