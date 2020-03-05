// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(e,f){return function(){function a(a){void 0===a&&(a=1);this._seed=a}Object.defineProperty(a.prototype,"seed",{set:function(b){this._seed=null==b?Math.random()*a._m:b},enumerable:!0,configurable:!0});a.prototype.getInt=function(){return this._seed=(a._a*this._seed+a._c)%a._m};a.prototype.getFloat=function(){return this.getInt()/(a._m-1)};a.prototype.getIntRange=function(a,c){return Math.round(this.getFloatRange(a,c))};a.prototype.getFloatRange=function(b,c){c-=
b;var d=this.getInt()/a._m;return b+Math.floor(d*c)};a._m=2147483647;a._a=48271;a._c=0;return a}()});