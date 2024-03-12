// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports"],function(c){c.collectMultipath=function(a){const b=[];for(a.reset();a.nextPath();){const d=[];for(;a.nextPoint();)d.push([a.x,a.y]);b.push(d)}a.reset();return b};c.collectPath=function(a){const b=[];for(;a.nextPoint();)b.push([a.x,a.y]);a.seekPathStart();return b};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});