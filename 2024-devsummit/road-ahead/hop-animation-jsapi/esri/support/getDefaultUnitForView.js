// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../core/unitUtils","../portal/Portal"],function(c,d,e){c.getDefaultUnitForView=function(b){if(null==b)return"metric";var a=b.map;a=(a&&"portalItem"in a?a.portalItem?.portal:null)??e.getDefault();switch(a.user?.units??a.units){case "metric":return"metric";case "english":return"imperial"}return d.getDefaultUnitSystem(b.spatialReference)??"metric"};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});