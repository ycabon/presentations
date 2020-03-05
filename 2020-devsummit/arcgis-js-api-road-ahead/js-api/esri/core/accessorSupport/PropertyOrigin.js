// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(e,b){function c(a){switch(a){case "defaults":return 0;case "service":return 2;case "portal-item":return 3;case "web-scene":return 4;case "web-map":return 5;case "user":return 6}}function d(a){switch(a){case 0:return"defaults";case 2:return"service";case 3:return"portal-item";case 4:return"web-scene";case 5:return"web-map";case 6:return"user"}}Object.defineProperty(b,"__esModule",{value:!0});b.nameToId=c;b.idToName=d;b.readableNameToId=function(a){return c(a)};
b.idToReadableName=function(a){return d(a)};b.writableNameToId=function(a){return c(a)};b.idToWritableName=function(a){return d(a)}});