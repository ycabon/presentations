// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["require","exports","../../core/sniff"],function(f,c,e){Object.defineProperty(c,"__esModule",{value:!0});c.isVolumetricSymbol=function(b){return(b=b&&b.symbolLayers)?b.some(function(a){a=a.type;return"object"===a||"path"===a||"extrude"===a}):!1};c.getIconHref=function(b,a){a=a.resource.href;return!e("esri-canvas-svg-support")&&b.styleOrigin&&d.test(a)?a.replace(d,"/resource/png/$1.png"):a};var d=/\/resource\/(.*?)\.svg$/});