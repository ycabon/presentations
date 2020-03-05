// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(c,b){Object.defineProperty(b,"__esModule",{value:!0});b.eventMatchesPointerAction=function(a,b){switch(b){case "primary":return"touch"===a.pointerType||0===a.button;case "secondary":return"touch"!==a.pointerType&&2===a.button;case "tertiary":return"touch"!==a.pointerType&&1===a.button}};b.eventMatchesMousePointerAction=function(a,b){if("touch"===a.pointerType)return!1;switch(b){case "primary":return 0===a.button;case "secondary":return 2===a.button;case "tertiary":return 1===
a.button}}});