// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/Accessor ../../core/accessorSupport/decorators".split(" "),function(h,k,f,e,g,c){return function(d){function b(){var a=null!==d&&d.apply(this,arguments)||this;a.refreshInterval=0;return a}f(b,d);b.prototype.refresh=function(){this.emit("refresh")};e([c.property({type:Number,cast:function(a){return.1<=a?a:0>=a?0:.1},json:{write:!0}})],b.prototype,"refreshInterval",void 0);return b=e([c.subclass("esri.layers.mixins.RefreshableLayer")],
b)}(c.declared(g))});