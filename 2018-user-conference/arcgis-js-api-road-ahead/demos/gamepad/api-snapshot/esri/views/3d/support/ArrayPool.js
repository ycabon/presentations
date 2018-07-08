// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(d,e){Object.defineProperty(e,"__esModule",{value:!0});d=function(){function c(b,a){void 0===a&&(a=50);this.arrayConstructor=b;this.maxPoolSizePerCount=a;this.pool={}}c.prototype.get=function(b){var a=this.pool[b];a||(a={ptr:0,data:Array(this.maxPoolSizePerCount)},this.pool[b]=a);0<a.ptr?(b=a.data[--a.ptr],a.data[a.ptr]=null):b=new this.arrayConstructor(b);return b};c.prototype.put=function(b){var a=this.pool[b.length];a.ptr<a.data.length&&(a.data[a.ptr++]=b)};
return c}();e.ArrayPool=d});