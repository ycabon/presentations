// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/RandomLCG ../../core/has ../../core/accessorSupport/decorators/subclass".split(" "),function(b,a,c,d,f,g,e){a=class extends a.JSONSupport{constructor(){super(...arguments);this.isPublic=this.isDataset=!1;this.type="RasterFunctionVariable"}};b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"name",void 0);b.__decorate([c.property({type:Number,
json:{type:d.Integer,write:!0,name:"_object_id"}})],a.prototype,"id",void 0);b.__decorate([c.property({type:Boolean,json:{write:!0}})],a.prototype,"isDataset",void 0);b.__decorate([c.property({type:Boolean,json:{write:!0}})],a.prototype,"isPublic",void 0);b.__decorate([c.property({json:{write:!0}})],a.prototype,"value",void 0);b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"type",void 0);return a=b.__decorate([e.subclass("esri.layers.support.RasterFunctionVariable")],a)});