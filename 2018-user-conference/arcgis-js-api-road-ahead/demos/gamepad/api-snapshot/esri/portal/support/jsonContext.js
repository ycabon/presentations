// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["require","exports","../../core/urlUtils","../Portal"],function(d,a,b,c){Object.defineProperty(a,"__esModule",{value:!0});a.createForItem=function(a){return{origin:"portal-item",url:b.urlToObject(a.itemUrl),portal:a.portal||c.getDefault()}}});