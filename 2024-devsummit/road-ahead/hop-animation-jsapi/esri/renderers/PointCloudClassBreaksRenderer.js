// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../chunks/tslib.es6 ../core/lang ../core/accessorSupport/decorators/property ../core/has ../core/Logger ../core/accessorSupport/decorators/enumeration ../core/accessorSupport/decorators/subclass ./PointCloudRenderer ./support/LegendOptions ./support/pointCloud/ColorClassBreakInfo".split(" "),function(b,f,d,a,n,g,h,c,k,l){var e;a=e=class extends c{constructor(m){super(m);this.type="point-cloud-class-breaks";this.colorClassBreakInfos=this.fieldTransformType=this.legendOptions=this.field=null}clone(){return new e({...this.cloneProperties(),
field:this.field,fieldTransformType:this.fieldTransformType,colorClassBreakInfos:f.clone(this.colorClassBreakInfos),legendOptions:f.clone(this.legendOptions)})}};b.__decorate([g.enumeration({pointCloudClassBreaksRenderer:"point-cloud-class-breaks"})],a.prototype,"type",void 0);b.__decorate([d.property({json:{write:!0},type:String})],a.prototype,"field",void 0);b.__decorate([d.property({type:k.LegendOptions,json:{write:!0}})],a.prototype,"legendOptions",void 0);b.__decorate([d.property({type:c.fieldTransformTypeKebabDict.apiValues,
json:{type:c.fieldTransformTypeKebabDict.jsonValues,read:c.fieldTransformTypeKebabDict.read,write:c.fieldTransformTypeKebabDict.write}})],a.prototype,"fieldTransformType",void 0);b.__decorate([d.property({type:[l],json:{write:!0}})],a.prototype,"colorClassBreakInfos",void 0);return a=e=b.__decorate([h.subclass("esri.renderers.PointCloudClassBreaksRenderer")],a)});