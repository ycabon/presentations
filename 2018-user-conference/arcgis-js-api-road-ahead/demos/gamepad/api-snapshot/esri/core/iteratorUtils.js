// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(e,c){Object.defineProperty(c,"__esModule",{value:!0});c.forEachUntilMap=Map.prototype.entries?function(a,d){for(a=a.entries();;){var b=a.next();if(b.done)break;if(!1===d(b.value[1],b.value[0]))return!1}return!0}:function(a,d){var b=!0;a.forEach(function(a,c){b&&(b=!1!==d(a,c))});return b}});