// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../CIMOperators"],function(a,e){class f{static getPlacement(b,g,c,h,k,l){const d=e.getPlacementOperator(c);if(!d)return null;-1===g&&b.invertY();return d.execute(b,c,h,k,l)}}a.CIMMarkerPlacementHelper=f;Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});