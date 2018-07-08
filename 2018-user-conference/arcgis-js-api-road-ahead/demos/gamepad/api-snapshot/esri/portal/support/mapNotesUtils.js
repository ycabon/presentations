// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(d,c){Object.defineProperty(c,"__esModule",{value:!0});c.isMapNotesLayer=function(a){var b=["TITLE","DESCRIPTION","IMAGE_URL","IMAGE_LINK_URL"];if((a=a.layers||a.featureCollection&&a.featureCollection.layers)&&Array.isArray(a))return a=a[0],a.layerDefinition.fields&&a.layerDefinition.fields.forEach(function(a){a=b.indexOf(a.name);-1<a&&b.splice(a,1)}),b.length?!1:!0}});