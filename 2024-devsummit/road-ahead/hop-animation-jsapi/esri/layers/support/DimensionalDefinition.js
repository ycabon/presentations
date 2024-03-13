// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/JSONSupport ../../core/lang ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass".split(" "),function(b,a,f,d,c,g){var e;a=e=class extends a.JSONSupport{constructor(h){super(h);this.dimensionName=this.variableName=null;this.values=[];this.isSlice=!1}clone(){return new e({variableName:this.variableName,dimensionName:this.dimensionName,values:f.clone(this.values),isSlice:this.isSlice})}};
b.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"variableName",void 0);b.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"dimensionName",void 0);b.__decorate([d.property({type:c.types.array(c.types.oneOf([c.types.native(Number),c.types.array(c.types.native(Number))])),json:{write:!0}})],a.prototype,"values",void 0);b.__decorate([d.property({type:Boolean,json:{write:!0}})],a.prototype,"isSlice",void 0);return a=e=b.__decorate([g.subclass("esri.layers.support.DimensionalDefinition")],
a)});