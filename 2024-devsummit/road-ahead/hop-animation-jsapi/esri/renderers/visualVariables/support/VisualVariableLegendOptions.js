// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/Logger ../../../core/RandomLCG ../../../core/accessorSupport/decorators/subclass ../../support/LegendOptions".split(" "),function(c,d,a,g,h,e,f){var b;a=b=class extends f.LegendOptions{constructor(){super(...arguments);this.showLegend=null}clone(){return new b({title:this.title,showLegend:this.showLegend})}};c.__decorate([d.property({type:Boolean,json:{write:!0}})],a.prototype,"showLegend",
void 0);return a=b=c.__decorate([e.subclass("esri.renderers.visualVariables.support.VisualVariableLegendOptions")],a)});