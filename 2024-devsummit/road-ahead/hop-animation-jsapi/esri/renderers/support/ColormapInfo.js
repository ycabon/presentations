// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../Color ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/RandomLCG ../../core/has ../../core/accessorSupport/decorators/subclass".split(" "),function(b,d,a,c,e,g,h,f){a=class extends a.JSONSupport{constructor(){super(...arguments);this.color=this.label=this.value=null}};b.__decorate([c.property({type:Number,json:{write:!0}})],a.prototype,"value",void 0);b.__decorate([c.property({type:String,json:{write:!0}})],
a.prototype,"label",void 0);b.__decorate([c.property({type:d,json:{type:[e.Integer],write:!0}})],a.prototype,"color",void 0);return a=b.__decorate([f.subclass("esri.renderers.support.ColormapInfo")],a)});