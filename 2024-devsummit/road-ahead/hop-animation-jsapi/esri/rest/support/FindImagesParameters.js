// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/Clonable ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass ../../geometry/Point".split(" "),function(b,a,e,c,g,h,k,f,d){a=class extends a.ClonableMixin(e.JSONSupport){constructor(){super(...arguments);this.maxCount=this.where=this.objectIds=this.toGeometry=this.fromGeometry=null}};b.__decorate([c.property({type:d,json:{read:!0}})],a.prototype,
"fromGeometry",void 0);b.__decorate([c.property({type:d,json:{read:!0,write:!0}})],a.prototype,"toGeometry",void 0);b.__decorate([c.property({json:{write:!0}})],a.prototype,"objectIds",void 0);b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"where",void 0);b.__decorate([c.property({type:Number,json:{write:!0}})],a.prototype,"maxCount",void 0);return a=b.__decorate([f.subclass("esri.rest.support.FindImagesParameters")],a)});