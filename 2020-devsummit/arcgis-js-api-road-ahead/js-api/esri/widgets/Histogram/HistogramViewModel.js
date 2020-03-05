// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/Accessor ../../core/maybe ../../core/accessorSupport/decorators".split(" "),function(k,l,g,d,h,e,c){return function(f){function b(a){a=f.call(this,a)||this;a.average=null;a.bins=null;a.max=null;a.min=null;return a}g(b,f);Object.defineProperty(b.prototype,"binRange",{get:function(){var a=this.bins;return a&&1<a.length?a[a.length-1].maxValue-a[0].minValue:0},enumerable:!0,configurable:!0});
Object.defineProperty(b.prototype,"labelFormatFunction",{set:function(a){this._set("labelFormatFunction",a)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"range",{get:function(){var a=this.max,b=this.min;return e.isSome(a)&&e.isSome(b)?a-b:0},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"state",{get:function(){var a=this.bins;return 0<this.range&&a&&a.length?"ready":"disabled"},enumerable:!0,configurable:!0});d([c.property()],b.prototype,"average",void 0);
d([c.property()],b.prototype,"bins",void 0);d([c.property({dependsOn:["bins"],readOnly:!0})],b.prototype,"binRange",null);d([c.property()],b.prototype,"labelFormatFunction",null);d([c.property()],b.prototype,"max",void 0);d([c.property()],b.prototype,"min",void 0);d([c.property({dependsOn:["max","min"],readOnly:!0})],b.prototype,"range",null);d([c.property({dependsOn:["max","min","bins"],readOnly:!0})],b.prototype,"state",null);return b=d([c.subclass("esri.widgets.Histogram.HistogramViewModel")],
b)}(c.declared(h))});