// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["require","exports","./Collection"],function(e,b,d){Object.defineProperty(b,"__esModule",{value:!0});b.referenceSetter=function(a,c,b){void 0===b&&(b=d);c||(c=new b);c.removeAll();a&&(Array.isArray(a)||a.isInstanceOf&&a.isInstanceOf(d))?c.addMany(a):c.add(a);return c};b.castForReferenceSetter=function(a){return a}});