// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../Color ../../core/Accessor ../../core/timeUtils ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass".split(" "),function(b,d,a,e,c,g,h,k,f){a=class extends a{constructor(){super(...arguments);this.color=new d([255,0,0,.7]);this.value=e.convertTime(4,"hours","milliseconds");this.minValue=0;this.maxValue=e.convertTime(8,"hours","milliseconds")}};b.__decorate([c.property({type:d})],
a.prototype,"color",void 0);b.__decorate([c.property()],a.prototype,"value",void 0);b.__decorate([c.property()],a.prototype,"minValue",void 0);b.__decorate([c.property()],a.prototype,"maxValue",void 0);return a=b.__decorate([f.subclass("esri.widgets.ShadowCast.ThresholdOptions")],a)});