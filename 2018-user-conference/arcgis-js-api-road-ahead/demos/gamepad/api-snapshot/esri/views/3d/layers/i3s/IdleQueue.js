// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["require","exports","dojo/Deferred"],function(c,d,e){Object.defineProperty(d,"__esModule",{value:!0});c=function(){function a(){this._deferreds=[];this._values=[]}a.prototype.push=function(a){var b=new e;this._deferreds.push(b);this._values.push(a);return b.promise};a.prototype.length=function(){return this._deferreds.length};a.prototype.process=function(){this._deferreds.shift().resolve(this._values.shift())};a.prototype.cancelAll=function(){for(var a=0,b=this._deferreds;a<b.length;a++)b[a].cancel();
this._deferreds.length=0;this._values.length=0};return a}();d.IdleQueue=c});