// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["../../core/screenUtils","../../views/2d/support/engineHelpers"],function(c,d){return async function(a,b){await b.when();a=a.clone();a.text="999";b=await d.getTextBounds(a,b);return c.px2pt(b.width)}});