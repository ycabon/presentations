// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","../../core/unitUtils"],function(e,c,d){Object.defineProperty(c,"__esModule",{value:!0});c.defaultUnitPropertyMetadata={dependsOn:["view.map.portalItem?.portal.units","view.map.portalItem?.portal.user.units","view.spatialReference"],readOnly:!0,get:function(){var a=this.view;if(!a)return"metric";var b=a.get("map.portalItem.portal");if(b)switch(b.get("user.units")||b.units){case "metric":return"metric";case "english":return"imperial"}return d.getDefaultUnitSystem(a.spatialReference)||
"metric"}}});