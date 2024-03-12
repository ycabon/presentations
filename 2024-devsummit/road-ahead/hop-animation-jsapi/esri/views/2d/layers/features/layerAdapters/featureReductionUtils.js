// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports"],function(b){b.getEffectiveFeatureReduction=function(a,c){return(a=a.featureReduction)&&"selection"!==a.type?!("maxScale"in a&&a.maxScale)||a.maxScale<c.scale?a:null:null};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});