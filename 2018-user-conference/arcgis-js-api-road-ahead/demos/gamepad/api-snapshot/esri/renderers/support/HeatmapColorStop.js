// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../Color ../../core/JSONSupport ../../core/accessorSupport/decorators".split(" "),function(c,a,f,e,g,h,d){Object.defineProperty(a,"__esModule",{value:!0});c=function(c){function b(a){a=c.call(this)||this;a.color=null;a.ratio=null;return a}f(b,c);a=b;b.prototype.clone=function(){return new a({color:this.color,ratio:this.ratio})};e([d.property({type:g,json:{write:!0}})],b.prototype,"color",void 0);
e([d.property({type:Number,json:{write:!0}})],b.prototype,"ratio",void 0);return b=a=e([d.subclass("esri.renderers.support.HeatmapColorStop")],b);var a}(d.declared(h));a.HeatmapColorStop=c;a.default=c});