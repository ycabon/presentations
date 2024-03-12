/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as o}from"../chunks/tslib.es6.js";import{clone as e}from"../core/lang.js";import{property as r}from"../core/accessorSupport/decorators/property.js";import"../chunks/Logger.js";import{e as s}from"../chunks/enumeration.js";import{subclass as t}from"../core/accessorSupport/decorators/subclass.js";import i from"./PointCloudRenderer.js";import{L as n}from"../chunks/LegendOptions.js";import p from"../Color.js";import{JSONSupport as l}from"../core/JSONSupport.js";import{I as u}from"../chunks/ensureType.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../core/Error.js";import"../config.js";import"../chunks/jsonMap.js";import"../chunks/tracking.js";import"../chunks/PointSizeSplatAlgorithm.js";import"../chunks/colorUtils.js";import"../chunks/mathUtils.js";import"../chunks/vec3.js";import"../chunks/vec3f64.js";import"../chunks/common.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/maybe.js";import"../chunks/ObservableBase.js";import"../core/scheduling.js";import"../core/promiseUtils.js";var c;let a=c=class extends l{constructor(){super(...arguments),this.description=null,this.label=null,this.values=null,this.color=null}clone(){return new c({description:this.description,label:this.label,values:e(this.values),color:e(this.color)})}};o([r({type:String,json:{write:!0}})],a.prototype,"description",void 0),o([r({type:String,json:{write:!0}})],a.prototype,"label",void 0),o([r({type:[String],json:{write:!0}})],a.prototype,"values",void 0),o([r({type:p,json:{type:[u],write:!0}})],a.prototype,"color",void 0),a=c=o([t("esri.renderers.support.pointCloud.ColorUniqueValueInfo")],a);const m=a;var d;let h=d=class extends i{constructor(o){super(o),this.type="point-cloud-unique-value",this.field=null,this.fieldTransformType=null,this.colorUniqueValueInfos=null,this.legendOptions=null}clone(){return new d({...this.cloneProperties(),field:e(this.field),fieldTransformType:e(this.fieldTransformType),colorUniqueValueInfos:e(this.colorUniqueValueInfos),legendOptions:e(this.legendOptions)})}};o([s({pointCloudUniqueValueRenderer:"point-cloud-unique-value"})],h.prototype,"type",void 0),o([r({json:{write:!0},type:String})],h.prototype,"field",void 0),o([r({type:i.fieldTransformTypeKebabDict.apiValues,json:{type:i.fieldTransformTypeKebabDict.jsonValues,read:i.fieldTransformTypeKebabDict.read,write:i.fieldTransformTypeKebabDict.write}})],h.prototype,"fieldTransformType",void 0),o([r({type:[m],json:{write:!0}})],h.prototype,"colorUniqueValueInfos",void 0),o([r({type:n,json:{write:!0}})],h.prototype,"legendOptions",void 0),h=d=o([t("esri.renderers.PointCloudUniqueValueRenderer")],h);const j=h;export{j as default};
