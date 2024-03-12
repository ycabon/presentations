// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports"],function(a){a.onVisibilityChange=function(c){const b=()=>c("visible"===document.visibilityState);document.addEventListener("visibilitychange",b);return{remove:()=>document.addEventListener("visibilitychange",b)}};Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});