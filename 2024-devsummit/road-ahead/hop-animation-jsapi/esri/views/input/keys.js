// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../core/has"],function(a,b){b=b("mac")?"Meta":"Ctrl";const c=new Set(["Alt","Ctrl","Meta","Shift","Primary"]);a.isSystemModifier=d=>c.has(d);a.primaryKey=b;Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});