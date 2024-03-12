// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports"],function(a){const b=new Set;a.hasPendingLoading=function(){return 0<b.size};a.registerLoading=function(c){b.add(c);c.finally(()=>b.delete(c))};Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});