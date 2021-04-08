import { j as e$1, y, k as i$4, c9 as a$4, bn as t, dD as r, fm as o, b3 as y$1, b5 as o$1, fn as N, fo as i$5, fp as u$2 } from './_virtual_index-634cbc09.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var s;let p$3=s=class extends a$4{constructor(){super(...arguments),this.field=null,this.minValue=0,this.maxValue=255;}clone(){return new s({field:this.field,minValue:this.minValue,maxValue:this.maxValue})}};e$1([y({type:String,json:{write:!0}})],p$3.prototype,"field",void 0),e$1([y({type:Number,nonNullable:!0,json:{write:!0}})],p$3.prototype,"minValue",void 0),e$1([y({type:Number,nonNullable:!0,json:{write:!0}})],p$3.prototype,"maxValue",void 0),p$3=s=e$1([i$4("esri.renderers.support.pointCloud.ColorModulation")],p$3);var i$3=p$3;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const p$2=new t({pointCloudFixedSizeAlgorithm:"fixed-size",pointCloudSplatAlgorithm:"splat"});let i$2=class extends a$4{};e$1([y({type:p$2.apiValues,readOnly:!0,nonNullable:!0,json:{type:p$2.jsonValues,read:!1,write:p$2.write}})],i$2.prototype,"type",void 0),i$2=e$1([i$4("esri.renderers.support.pointCloud.PointSizeAlgorithm")],i$2);var c$6=i$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var i$1;let p$1=i$1=class extends c$6{constructor(){super(...arguments),this.type="fixed-size",this.size=0,this.useRealWorldSymbolSizes=null;}clone(){return new i$1({size:this.size,useRealWorldSymbolSizes:this.useRealWorldSymbolSizes})}};e$1([r({pointCloudFixedSizeAlgorithm:"fixed-size"})],p$1.prototype,"type",void 0),e$1([y({type:Number,nonNullable:!0,json:{write:!0}})],p$1.prototype,"size",void 0),e$1([y({type:Boolean,json:{write:!0}})],p$1.prototype,"useRealWorldSymbolSizes",void 0),p$1=i$1=e$1([i$4("esri.renderers.support.pointCloud.PointSizeFixedSizeAlgorithm")],p$1);var l$4=p$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var p;let c$5=p=class extends c$6{constructor(){super(...arguments),this.type="splat",this.scaleFactor=1;}clone(){return new p({scaleFactor:this.scaleFactor})}};e$1([r({pointCloudSplatAlgorithm:"splat"})],c$5.prototype,"type",void 0),e$1([y({type:Number,value:1,nonNullable:!0,json:{write:!0}})],c$5.prototype,"scaleFactor",void 0),c$5=p=e$1([i$4("esri.renderers.support.pointCloud.PointSizeSplatAlgorithm")],c$5);var i=c$5;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const e={key:"type",base:c$6,typeMap:{"fixed-size":l$4,splat:i}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const u$1=o()({pointCloudClassBreaksRenderer:"point-cloud-class-breaks",pointCloudRGBRenderer:"point-cloud-rgb",pointCloudStretchRenderer:"point-cloud-stretch",pointCloudUniqueValueRenderer:"point-cloud-unique-value"});let c$4=class extends a$4{constructor(o){super(o),this.type=void 0,this.pointSizeAlgorithm=null,this.colorModulation=null,this.pointsPerInch=10;}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}cloneProperties(){return {pointSizeAlgorithm:y$1(this.pointSizeAlgorithm),colorModulation:y$1(this.colorModulation),pointsPerInch:y$1(this.pointsPerInch)}}};e$1([y({type:u$1.apiValues,readOnly:!0,nonNullable:!0,json:{type:u$1.jsonValues,read:!1,write:u$1.write}})],c$4.prototype,"type",void 0),e$1([y({types:e,json:{write:!0}})],c$4.prototype,"pointSizeAlgorithm",void 0),e$1([y({type:i$3,json:{write:!0}})],c$4.prototype,"colorModulation",void 0),e$1([y({json:{write:!0},nonNullable:!0,type:Number})],c$4.prototype,"pointsPerInch",void 0),c$4=e$1([i$4("esri.renderers.PointCloudRenderer")],c$4),function(o){o.fieldTransformTypeKebabDict=new t({none:"none",lowFourBit:"low-four-bit",highFourBit:"high-four-bit",absoluteValue:"absolute-value",moduloTen:"modulo-ten"});}(c$4||(c$4={}));var a$3=c$4;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var l$3;let a$2=l$3=class extends a$4{constructor(){super(...arguments),this.description=null,this.label=null,this.minValue=0,this.maxValue=0,this.color=null;}clone(){return new l$3({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,color:y$1(this.color)})}};e$1([y({type:String,json:{write:!0}})],a$2.prototype,"description",void 0),e$1([y({type:String,json:{write:!0}})],a$2.prototype,"label",void 0),e$1([y({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue"}}})],a$2.prototype,"minValue",void 0),e$1([y({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue"}}})],a$2.prototype,"maxValue",void 0),e$1([y({type:o$1,json:{type:[N],write:!0}})],a$2.prototype,"color",void 0),a$2=l$3=e$1([i$4("esri.renderers.support.pointCloud.ColorClassBreakInfo")],a$2);var c$3=a$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var n$1;let a$1=n$1=class extends a$3{constructor(o){super(o),this.type="point-cloud-class-breaks",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.colorClassBreakInfos=null;}clone(){return new n$1({...this.cloneProperties(),field:this.field,fieldTransformType:this.fieldTransformType,colorClassBreakInfos:y$1(this.colorClassBreakInfos),legendOptions:y$1(this.legendOptions)})}};e$1([r({pointCloudClassBreaksRenderer:"point-cloud-class-breaks"})],a$1.prototype,"type",void 0),e$1([y({json:{write:!0},type:String})],a$1.prototype,"field",void 0),e$1([y({type:i$5,json:{write:!0}})],a$1.prototype,"legendOptions",void 0),e$1([y({type:a$3.fieldTransformTypeKebabDict.apiValues,json:{type:a$3.fieldTransformTypeKebabDict.jsonValues,read:a$3.fieldTransformTypeKebabDict.read,write:a$3.fieldTransformTypeKebabDict.write}})],a$1.prototype,"fieldTransformType",void 0),e$1([y({type:[c$3],json:{write:!0}})],a$1.prototype,"colorClassBreakInfos",void 0),a$1=n$1=e$1([i$4("esri.renderers.PointCloudClassBreaksRenderer")],a$1);var c$2=a$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var l$2;let d=l$2=class extends a$3{constructor(e){super(e),this.type="point-cloud-stretch",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.stops=null;}clone(){return new l$2({...this.cloneProperties(),field:y$1(this.field),fieldTransformType:y$1(this.fieldTransformType),stops:y$1(this.stops),legendOptions:y$1(this.legendOptions)})}};e$1([r({pointCloudStretchRenderer:"point-cloud-stretch"})],d.prototype,"type",void 0),e$1([y({json:{write:!0},type:String})],d.prototype,"field",void 0),e$1([y({type:i$5,json:{write:!0}})],d.prototype,"legendOptions",void 0),e$1([y({type:a$3.fieldTransformTypeKebabDict.apiValues,json:{type:a$3.fieldTransformTypeKebabDict.jsonValues,read:a$3.fieldTransformTypeKebabDict.read,write:a$3.fieldTransformTypeKebabDict.write}})],d.prototype,"fieldTransformType",void 0),e$1([y({type:[u$2],json:{write:!0}})],d.prototype,"stops",void 0),d=l$2=e$1([i$4("esri.renderers.PointCloudStretchRenderer")],d);var c$1=d;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var l$1;let c=l$1=class extends a$4{constructor(){super(...arguments),this.description=null,this.label=null,this.values=null,this.color=null;}clone(){return new l$1({description:this.description,label:this.label,values:y$1(this.values),color:y$1(this.color)})}};e$1([y({type:String,json:{write:!0}})],c.prototype,"description",void 0),e$1([y({type:String,json:{write:!0}})],c.prototype,"label",void 0),e$1([y({type:[String],json:{write:!0}})],c.prototype,"values",void 0),e$1([y({type:o$1,json:{type:[N],write:!0}})],c.prototype,"color",void 0),c=l$1=e$1([i$4("esri.renderers.support.pointCloud.ColorUniqueValueInfo")],c);var n=c;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var l;let u=l=class extends a$3{constructor(e){super(e),this.type="point-cloud-unique-value",this.field=null,this.fieldTransformType=null,this.colorUniqueValueInfos=null,this.legendOptions=null;}clone(){return new l({...this.cloneProperties(),field:y$1(this.field),fieldTransformType:y$1(this.fieldTransformType),colorUniqueValueInfos:y$1(this.colorUniqueValueInfos),legendOptions:y$1(this.legendOptions)})}};e$1([r({pointCloudUniqueValueRenderer:"point-cloud-unique-value"})],u.prototype,"type",void 0),e$1([y({json:{write:!0},type:String})],u.prototype,"field",void 0),e$1([y({type:a$3.fieldTransformTypeKebabDict.apiValues,json:{type:a$3.fieldTransformTypeKebabDict.jsonValues,read:a$3.fieldTransformTypeKebabDict.read,write:a$3.fieldTransformTypeKebabDict.write}})],u.prototype,"fieldTransformType",void 0),e$1([y({type:[n],json:{write:!0}})],u.prototype,"colorUniqueValueInfos",void 0),e$1([y({type:i$5,json:{write:!0}})],u.prototype,"legendOptions",void 0),u=l=e$1([i$4("esri.renderers.PointCloudUniqueValueRenderer")],u);var a=u;

export { a, c$2 as b, c$1 as c, a$3 as d };
