// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/tslib.es6 ../../core/Clonable ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass".split(" "),function(a,b,d,e,c,g,h,k,f){a.HeatmapLegendOptions=class extends d.ClonableMixin(e.JSONSupport){constructor(){super(...arguments);this.title=this.maxLabel=this.minLabel=null}};b.__decorate([c.property({type:String,json:{write:!0}})],a.HeatmapLegendOptions.prototype,
"minLabel",void 0);b.__decorate([c.property({type:String,json:{write:!0}})],a.HeatmapLegendOptions.prototype,"maxLabel",void 0);b.__decorate([c.property({type:String,json:{write:!0}})],a.HeatmapLegendOptions.prototype,"title",void 0);a.HeatmapLegendOptions=b.__decorate([f.subclass("esri.renderers.support.HeatmapLegendOptions")],a.HeatmapLegendOptions);Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});