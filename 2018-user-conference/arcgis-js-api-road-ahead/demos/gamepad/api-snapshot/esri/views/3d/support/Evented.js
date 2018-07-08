// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(c,d){Object.defineProperty(d,"__esModule",{value:!0});c=function(){function b(){this._listeners={}}b.prototype.hasEventListener=function(a){return null!=this._listeners[a]&&0<this._listeners[a].size};b.prototype.on=function(a,b){var e=this;null==this._listeners[a]&&(this._listeners[a]=new Map);var c={};this._listeners[a].set(c,b);return{remove:function(){return e._listeners[a].delete(c)}}};b.prototype.emit=function(a,b){null!=this._listeners[a]&&this._listeners[a].forEach(function(a){return a(b)})};
return b}();d.Evented=c});