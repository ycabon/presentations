// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(d,e){Object.defineProperty(e,"__esModule",{value:!0});d=function(){function c(a,b){void 0===b&&(b=250);this.duration=b;this._startTime=this._lastTime=0;this._parent=a}c.prototype.reset=function(){0===this._lastTime;this._startTime=performance.now()};c.prototype.step=function(){var a=performance.now();if(0===this._lastTime)return this._lastTime=a,this._parent.requestRender(),0;var b=a-this._lastTime;this._lastTime=a;a-this._startTime<2*this.duration&&this._parent.requestRender();
return b/this.duration};return c}();e.default=d});