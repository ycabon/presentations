// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","../arrayUtils","../lang"],function(g,h,k,l){Object.defineProperty(h,"__esModule",{value:!0});g=function(){function c(){this._propertyOriginMap=new Map;this._originStores=Array(7);this._values=new Map}c.prototype.clone=function(a){for(var b=new c,d=function(d){var c=e._originStores[d];c&&c.forEach(function(c,e){a&&a.has(e)||b.set(e,l.clone(c),d)})},e=this,f=2;7>f;f++)d(f);return b};c.prototype.get=function(a,b){return(b=void 0===b?this._values:this._originStores[b])?b.get(a):
void 0};c.prototype.keys=function(a){return(a=null==a?this._values:this._originStores[a])?k.keysOfMap(a):[]};c.prototype.set=function(a,b,d){void 0===d&&(d=6);var c=this._originStores[d];c||(c=new Map,this._originStores[d]=c);c.set(a,b);return!this._values.has(a)||this._propertyOriginMap.get(a)<=d?(c=this._values.get(a),this._values.set(a,b),this._propertyOriginMap.set(a,d),c!==b):!1};c.prototype.delete=function(a,b){void 0===b&&(b=6);var d=this._originStores[b];if(d){var c=d.get(a);d.delete(a);if(this._values.has(a)&&
this._propertyOriginMap.get(a)===b)for(this._values.delete(a),--b;0<=b;b--)if((d=this._originStores[b])&&d.has(a)){this._values.set(a,d.get(a));this._propertyOriginMap.set(a,b);break}return c}};c.prototype.has=function(a,b){return(b=void 0===b?this._values:this._originStores[b])?b.has(a):!1};c.prototype.revert=function(a,b){for(;0<b&&!this.has(a,b);)--b;var c=this._originStores[b],c=c&&c.get(a),e=this._values.get(a);this._values.set(a,c);this._propertyOriginMap.set(a,b);return e!==c};c.prototype.originOf=
function(a){return this._propertyOriginMap.get(a)||0};c.prototype.forEach=function(a){this._values.forEach(a)};return c}();h.default=g});