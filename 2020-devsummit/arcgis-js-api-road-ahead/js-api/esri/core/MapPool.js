// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","./ObjectPool"],function(b,f,e){b=function(){function a(c,a){void 0===c&&(c=50);void 0===a&&(a=50);this._pool=new e(Map,!1,function(a){return a.clear()},a,c)}a.prototype.acquire=function(){return this._pool.acquire()};a.prototype.release=function(a){this._pool.release(a)};a.acquire=function(){return d.acquire()};a.release=function(a){return d.release(a)};return a}();var d=new b(100);return b});