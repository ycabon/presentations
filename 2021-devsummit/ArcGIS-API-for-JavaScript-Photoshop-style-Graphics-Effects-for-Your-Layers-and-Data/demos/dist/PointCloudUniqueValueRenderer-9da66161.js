import { y as e$1, z as y, A as i$5, d7 as a$4, bA as t, eB as r, gh as o, bf as s$1, bs as o$1, gi as k, gj as i$6 } from './_virtual:index-a8a6346c.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
var s;let p=s=class extends a$4{constructor(){super(...arguments),this.field=null,this.minValue=0,this.maxValue=255;}clone(){return new s({field:this.field,minValue:this.minValue,maxValue:this.maxValue})}};e$1([y({type:String,json:{write:!0}})],p.prototype,"field",void 0),e$1([y({type:Number,nonNullable:!0,json:{write:!0}})],p.prototype,"minValue",void 0),e$1([y({type:Number,nonNullable:!0,json:{write:!0}})],p.prototype,"maxValue",void 0),p=s=e$1([i$5("esri.renderers.support.pointCloud.ColorModulation")],p);var i=p;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const p$1=new t({pointCloudFixedSizeAlgorithm:"fixed-size",pointCloudSplatAlgorithm:"splat"});let i$1=class extends a$4{};e$1([y({type:p$1.apiValues,readOnly:!0,nonNullable:!0,json:{type:p$1.jsonValues,read:!1,write:p$1.write}})],i$1.prototype,"type",void 0),i$1=e$1([i$5("esri.renderers.support.pointCloud.PointSizeAlgorithm")],i$1);var c=i$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
var i$2;let p$2=i$2=class extends c{constructor(){super(...arguments),this.type="fixed-size",this.size=0,this.useRealWorldSymbolSizes=null;}clone(){return new i$2({size:this.size,useRealWorldSymbolSizes:this.useRealWorldSymbolSizes})}};e$1([r({pointCloudFixedSizeAlgorithm:"fixed-size"})],p$2.prototype,"type",void 0),e$1([y({type:Number,nonNullable:!0,json:{write:!0}})],p$2.prototype,"size",void 0),e$1([y({type:Boolean,json:{write:!0}})],p$2.prototype,"useRealWorldSymbolSizes",void 0),p$2=i$2=e$1([i$5("esri.renderers.support.pointCloud.PointSizeFixedSizeAlgorithm")],p$2);var l=p$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
var p$3;let c$1=p$3=class extends c{constructor(){super(...arguments),this.type="splat",this.scaleFactor=1;}clone(){return new p$3({scaleFactor:this.scaleFactor})}};e$1([r({pointCloudSplatAlgorithm:"splat"})],c$1.prototype,"type",void 0),e$1([y({type:Number,value:1,nonNullable:!0,json:{write:!0}})],c$1.prototype,"scaleFactor",void 0),c$1=p$3=e$1([i$5("esri.renderers.support.pointCloud.PointSizeSplatAlgorithm")],c$1);var i$3=c$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const e={key:"type",base:c,typeMap:{"fixed-size":l,splat:i$3}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const u=o()({pointCloudClassBreaksRenderer:"point-cloud-class-breaks",pointCloudRGBRenderer:"point-cloud-rgb",pointCloudStretchRenderer:"point-cloud-stretch",pointCloudUniqueValueRenderer:"point-cloud-unique-value"});let c$2=class extends a$4{constructor(o){super(o),this.type=void 0,this.pointSizeAlgorithm=null,this.colorModulation=null,this.pointsPerInch=10;}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}cloneProperties(){return {pointSizeAlgorithm:s$1(this.pointSizeAlgorithm),colorModulation:s$1(this.colorModulation),pointsPerInch:s$1(this.pointsPerInch)}}};e$1([y({type:u.apiValues,readOnly:!0,nonNullable:!0,json:{type:u.jsonValues,read:!1,write:u.write}})],c$2.prototype,"type",void 0),e$1([y({types:e,json:{write:!0}})],c$2.prototype,"pointSizeAlgorithm",void 0),e$1([y({type:i,json:{write:!0}})],c$2.prototype,"colorModulation",void 0),e$1([y({json:{write:!0},nonNullable:!0,type:Number})],c$2.prototype,"pointsPerInch",void 0),c$2=e$1([i$5("esri.renderers.PointCloudRenderer")],c$2),function(o){o.fieldTransformTypeKebabDict=new t({none:"none",lowFourBit:"low-four-bit",highFourBit:"high-four-bit",absoluteValue:"absolute-value",moduloTen:"modulo-ten"});}(c$2||(c$2={}));var a=c$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
var l$1;let a$1=l$1=class extends a$4{constructor(){super(...arguments),this.description=null,this.label=null,this.minValue=0,this.maxValue=0,this.color=null;}clone(){return new l$1({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,color:s$1(this.color)})}};e$1([y({type:String,json:{write:!0}})],a$1.prototype,"description",void 0),e$1([y({type:String,json:{write:!0}})],a$1.prototype,"label",void 0),e$1([y({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue"}}})],a$1.prototype,"minValue",void 0),e$1([y({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue"}}})],a$1.prototype,"maxValue",void 0),e$1([y({type:o$1,json:{type:[k],write:!0}})],a$1.prototype,"color",void 0),a$1=l$1=e$1([i$5("esri.renderers.support.pointCloud.ColorClassBreakInfo")],a$1);var c$3=a$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
var n;let a$2=n=class extends a{constructor(o){super(o),this.type="point-cloud-class-breaks",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.colorClassBreakInfos=null;}clone(){return new n({...this.cloneProperties(),field:this.field,fieldTransformType:this.fieldTransformType,colorClassBreakInfos:s$1(this.colorClassBreakInfos),legendOptions:s$1(this.legendOptions)})}};e$1([r({pointCloudClassBreaksRenderer:"point-cloud-class-breaks"})],a$2.prototype,"type",void 0),e$1([y({json:{write:!0},type:String})],a$2.prototype,"field",void 0),e$1([y({type:i$6,json:{write:!0}})],a$2.prototype,"legendOptions",void 0),e$1([y({type:a.fieldTransformTypeKebabDict.apiValues,json:{type:a.fieldTransformTypeKebabDict.jsonValues,read:a.fieldTransformTypeKebabDict.read,write:a.fieldTransformTypeKebabDict.write}})],a$2.prototype,"fieldTransformType",void 0),e$1([y({type:[c$3],json:{write:!0}})],a$2.prototype,"colorClassBreakInfos",void 0),a$2=n=e$1([i$5("esri.renderers.PointCloudClassBreaksRenderer")],a$2);var c$4=a$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
var i$4;let c$5=i$4=class extends a$4{constructor(){super(...arguments),this.label=null,this.value=0,this.color=null;}clone(){return new i$4({label:this.label,value:this.value,color:s$1(this.color)})}};e$1([y({type:String,json:{write:!0}})],c$5.prototype,"label",void 0),e$1([y({type:Number,nonNullable:!0,json:{write:!0}})],c$5.prototype,"value",void 0),e$1([y({type:o$1,json:{type:[k],write:!0}})],c$5.prototype,"color",void 0),c$5=i$4=e$1([i$5("esri.renderers.support.pointCloud.StopInfo")],c$5);var u$1=c$5;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
var l$2;let d=l$2=class extends a{constructor(e){super(e),this.type="point-cloud-stretch",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.stops=null;}clone(){return new l$2({...this.cloneProperties(),field:s$1(this.field),fieldTransformType:s$1(this.fieldTransformType),stops:s$1(this.stops),legendOptions:s$1(this.legendOptions)})}};e$1([r({pointCloudStretchRenderer:"point-cloud-stretch"})],d.prototype,"type",void 0),e$1([y({json:{write:!0},type:String})],d.prototype,"field",void 0),e$1([y({type:i$6,json:{write:!0}})],d.prototype,"legendOptions",void 0),e$1([y({type:a.fieldTransformTypeKebabDict.apiValues,json:{type:a.fieldTransformTypeKebabDict.jsonValues,read:a.fieldTransformTypeKebabDict.read,write:a.fieldTransformTypeKebabDict.write}})],d.prototype,"fieldTransformType",void 0),e$1([y({type:[u$1],json:{write:!0}})],d.prototype,"stops",void 0),d=l$2=e$1([i$5("esri.renderers.PointCloudStretchRenderer")],d);var c$6=d;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
var l$3;let c$7=l$3=class extends a$4{constructor(){super(...arguments),this.description=null,this.label=null,this.values=null,this.color=null;}clone(){return new l$3({description:this.description,label:this.label,values:s$1(this.values),color:s$1(this.color)})}};e$1([y({type:String,json:{write:!0}})],c$7.prototype,"description",void 0),e$1([y({type:String,json:{write:!0}})],c$7.prototype,"label",void 0),e$1([y({type:[String],json:{write:!0}})],c$7.prototype,"values",void 0),e$1([y({type:o$1,json:{type:[k],write:!0}})],c$7.prototype,"color",void 0),c$7=l$3=e$1([i$5("esri.renderers.support.pointCloud.ColorUniqueValueInfo")],c$7);var n$1=c$7;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
var l$4;let u$2=l$4=class extends a{constructor(e){super(e),this.type="point-cloud-unique-value",this.field=null,this.fieldTransformType=null,this.colorUniqueValueInfos=null,this.legendOptions=null;}clone(){return new l$4({...this.cloneProperties(),field:s$1(this.field),fieldTransformType:s$1(this.fieldTransformType),colorUniqueValueInfos:s$1(this.colorUniqueValueInfos),legendOptions:s$1(this.legendOptions)})}};e$1([r({pointCloudUniqueValueRenderer:"point-cloud-unique-value"})],u$2.prototype,"type",void 0),e$1([y({json:{write:!0},type:String})],u$2.prototype,"field",void 0),e$1([y({type:a.fieldTransformTypeKebabDict.apiValues,json:{type:a.fieldTransformTypeKebabDict.jsonValues,read:a.fieldTransformTypeKebabDict.read,write:a.fieldTransformTypeKebabDict.write}})],u$2.prototype,"fieldTransformType",void 0),e$1([y({type:[n$1],json:{write:!0}})],u$2.prototype,"colorUniqueValueInfos",void 0),e$1([y({type:i$6,json:{write:!0}})],u$2.prototype,"legendOptions",void 0),u$2=l$4=e$1([i$5("esri.renderers.PointCloudUniqueValueRenderer")],u$2);var a$3=u$2;

export { a$3 as a, c$4 as b, c$6 as c, a as d };
