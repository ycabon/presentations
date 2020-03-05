// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(c,d){Object.defineProperty(d,"__esModule",{value:!0});c=function(){function b(){this._pool=[];this._set=new Set}b.prototype.acquire=function(){if(0===this._pool.length)return new Set;var a=this._pool.pop();this._set.delete(a);return a};b.prototype.release=function(a){a&&!this._set.has(a)&&(a.clear(),5E4>this._pool.length&&(this._pool.push(a),this._set.add(a)))};b.acquire=function(){return e.acquire()};b.release=function(a){return e.release(a)};return b}();d.default=
c;var e=new c});