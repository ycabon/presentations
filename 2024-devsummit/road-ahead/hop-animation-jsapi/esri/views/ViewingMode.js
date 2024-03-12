// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports"],function(a){a.ViewingMode=void 0;(function(b){b[b.Global=1]="Global";b[b.Local=2]="Local"})(a.ViewingMode||(a.ViewingMode={}));a.stringFromViewingMode=function(b){return b===a.ViewingMode.Global?"global":"local"};a.viewingModeFromString=function(b){return"global"===b?a.ViewingMode.Global:a.ViewingMode.Local};Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});