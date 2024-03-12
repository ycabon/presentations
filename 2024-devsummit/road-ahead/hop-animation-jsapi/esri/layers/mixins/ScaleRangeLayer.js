// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/tslib.es6 ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass".split(" "),function(f,d,e,h,k,l,g){f.ScaleRangeLayer=c=>{c=class extends c{constructor(){super(...arguments);this.maxScale=this.minScale=0}get effectiveScaleRange(){const b={minScale:this.minScale,maxScale:this.maxScale};var a=this.parent;a&&"effectiveScaleRange"in a&&(a=a.effectiveScaleRange,b.minScale=0<b.minScale?
0<a.minScale?Math.min(b.minScale,a.minScale):b.minScale:a.minScale,b.maxScale=0<b.maxScale?0<a.maxScale?Math.max(b.maxScale,a.maxScale):b.maxScale:a.maxScale);return(a=this._get("effectiveScaleRange"))&&a.minScale===b.minScale&&a.maxScale===b.maxScale?a:b}};d.__decorate([e.property({type:Number,nonNullable:!0,json:{write:!0}})],c.prototype,"minScale",void 0);d.__decorate([e.property({type:Number,nonNullable:!0,json:{write:!0}})],c.prototype,"maxScale",void 0);d.__decorate([e.property({readOnly:!0})],
c.prototype,"effectiveScaleRange",null);return c=d.__decorate([g.subclass("esri.layers.mixins.ScaleRangeLayer")],c)};Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});