// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","./DepthRange"],function(b,e,f){Object.defineProperty(e,"__esModule",{value:!0});b=function(){function a(d){this._objects=d}a.prototype.submit=function(d,c){this._objects.preSubmit(c);c=this._objects.visibleObjects;for(var a=0;a<c.length;a++){var b=c[a];b.renderable.material.submit(d,b)}};a.prototype.queryShadowCasterDepthRange=function(a){return this._objects.visibleObjects.length?f.computeDepthRange(a,this._objects.visibleObjects):null};return a}();e.RenderSubmitSystem=
b});