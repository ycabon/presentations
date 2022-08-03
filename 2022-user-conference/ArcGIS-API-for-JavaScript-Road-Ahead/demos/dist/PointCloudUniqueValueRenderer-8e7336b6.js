import { B as e$1, C as d$2, D as n$1, iH as l$5, J as s$1, mG as r, mE as o, y, ct as l$6, nl as T, qc as p$5, qd as a$7 } from './_virtual_index-9b831d4a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
var s;let i$2=s=class extends l$5{constructor(){super(...arguments),this.field=null,this.minValue=0,this.maxValue=255;}clone(){return new s({field:this.field,minValue:this.minValue,maxValue:this.maxValue})}};e$1([d$2({type:String,json:{write:!0}})],i$2.prototype,"field",void 0),e$1([d$2({type:Number,nonNullable:!0,json:{write:!0}})],i$2.prototype,"minValue",void 0),e$1([d$2({type:Number,nonNullable:!0,json:{write:!0}})],i$2.prototype,"maxValue",void 0),i$2=s=e$1([n$1("esri.renderers.support.pointCloud.ColorModulation")],i$2);const p$4=i$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const p$3=new s$1({pointCloudFixedSizeAlgorithm:"fixed-size",pointCloudSplatAlgorithm:"splat"});let i$1=class extends l$5{};e$1([d$2({type:p$3.apiValues,readOnly:!0,nonNullable:!0,json:{type:p$3.jsonValues,read:!1,write:p$3.write}})],i$1.prototype,"type",void 0),i$1=e$1([n$1("esri.renderers.support.pointCloud.PointSizeAlgorithm")],i$1);const a$6=i$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
var i;let p$2=i=class extends a$6{constructor(){super(...arguments),this.type="fixed-size",this.size=0,this.useRealWorldSymbolSizes=null;}clone(){return new i({size:this.size,useRealWorldSymbolSizes:this.useRealWorldSymbolSizes})}};e$1([r({pointCloudFixedSizeAlgorithm:"fixed-size"})],p$2.prototype,"type",void 0),e$1([d$2({type:Number,nonNullable:!0,json:{write:!0}})],p$2.prototype,"size",void 0),e$1([d$2({type:Boolean,json:{write:!0}})],p$2.prototype,"useRealWorldSymbolSizes",void 0),p$2=i=e$1([n$1("esri.renderers.support.pointCloud.PointSizeFixedSizeAlgorithm")],p$2);const l$4=p$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
var p$1;let c$3=p$1=class extends a$6{constructor(){super(...arguments),this.type="splat",this.scaleFactor=1;}clone(){return new p$1({scaleFactor:this.scaleFactor})}};e$1([r({pointCloudSplatAlgorithm:"splat"})],c$3.prototype,"type",void 0),e$1([d$2({type:Number,value:1,nonNullable:!0,json:{write:!0}})],c$3.prototype,"scaleFactor",void 0),c$3=p$1=e$1([n$1("esri.renderers.support.pointCloud.PointSizeSplatAlgorithm")],c$3);const a$5=c$3;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const e={key:"type",base:a$6,typeMap:{"fixed-size":l$4,splat:a$5}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const u$1=o()({pointCloudClassBreaksRenderer:"point-cloud-class-breaks",pointCloudRGBRenderer:"point-cloud-rgb",pointCloudStretchRenderer:"point-cloud-stretch",pointCloudUniqueValueRenderer:"point-cloud-unique-value"});let c$2=class extends l$5{constructor(o){super(o),this.type=void 0,this.pointSizeAlgorithm=null,this.colorModulation=null,this.pointsPerInch=10;}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}cloneProperties(){return {pointSizeAlgorithm:y(this.pointSizeAlgorithm),colorModulation:y(this.colorModulation),pointsPerInch:y(this.pointsPerInch)}}};e$1([d$2({type:u$1.apiValues,readOnly:!0,nonNullable:!0,json:{type:u$1.jsonValues,read:!1,write:u$1.write}})],c$2.prototype,"type",void 0),e$1([d$2({types:e,json:{write:!0}})],c$2.prototype,"pointSizeAlgorithm",void 0),e$1([d$2({type:p$4,json:{write:!0}})],c$2.prototype,"colorModulation",void 0),e$1([d$2({json:{write:!0},nonNullable:!0,type:Number})],c$2.prototype,"pointsPerInch",void 0),c$2=e$1([n$1("esri.renderers.PointCloudRenderer")],c$2),function(o){o.fieldTransformTypeKebabDict=new s$1({none:"none",lowFourBit:"low-four-bit",highFourBit:"high-four-bit",absoluteValue:"absolute-value",moduloTen:"modulo-ten"});}(c$2||(c$2={}));const a$4=c$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
var a$3;let p=a$3=class extends l$5{constructor(){super(...arguments),this.description=null,this.label=null,this.minValue=0,this.maxValue=0,this.color=null;}clone(){return new a$3({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,color:y(this.color)})}};e$1([d$2({type:String,json:{write:!0}})],p.prototype,"description",void 0),e$1([d$2({type:String,json:{write:!0}})],p.prototype,"label",void 0),e$1([d$2({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue"}}})],p.prototype,"minValue",void 0),e$1([d$2({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue"}}})],p.prototype,"maxValue",void 0),e$1([d$2({type:l$6,json:{type:[T],write:!0}})],p.prototype,"color",void 0),p=a$3=e$1([n$1("esri.renderers.support.pointCloud.ColorClassBreakInfo")],p);const c$1=p;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
var l$3;let a$2=l$3=class extends a$4{constructor(e){super(e),this.type="point-cloud-class-breaks",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.colorClassBreakInfos=null;}clone(){return new l$3({...this.cloneProperties(),field:this.field,fieldTransformType:this.fieldTransformType,colorClassBreakInfos:y(this.colorClassBreakInfos),legendOptions:y(this.legendOptions)})}};e$1([r({pointCloudClassBreaksRenderer:"point-cloud-class-breaks"})],a$2.prototype,"type",void 0),e$1([d$2({json:{write:!0},type:String})],a$2.prototype,"field",void 0),e$1([d$2({type:p$5,json:{write:!0}})],a$2.prototype,"legendOptions",void 0),e$1([d$2({type:a$4.fieldTransformTypeKebabDict.apiValues,json:{type:a$4.fieldTransformTypeKebabDict.jsonValues,read:a$4.fieldTransformTypeKebabDict.read,write:a$4.fieldTransformTypeKebabDict.write}})],a$2.prototype,"fieldTransformType",void 0),e$1([d$2({type:[c$1],json:{write:!0}})],a$2.prototype,"colorClassBreakInfos",void 0),a$2=l$3=e$1([n$1("esri.renderers.PointCloudClassBreaksRenderer")],a$2);const d$1=a$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
var l$2;let d=l$2=class extends a$4{constructor(e){super(e),this.type="point-cloud-stretch",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.stops=null;}clone(){return new l$2({...this.cloneProperties(),field:y(this.field),fieldTransformType:y(this.fieldTransformType),stops:y(this.stops),legendOptions:y(this.legendOptions)})}};e$1([r({pointCloudStretchRenderer:"point-cloud-stretch"})],d.prototype,"type",void 0),e$1([d$2({json:{write:!0},type:String})],d.prototype,"field",void 0),e$1([d$2({type:p$5,json:{write:!0}})],d.prototype,"legendOptions",void 0),e$1([d$2({type:a$4.fieldTransformTypeKebabDict.apiValues,json:{type:a$4.fieldTransformTypeKebabDict.jsonValues,read:a$4.fieldTransformTypeKebabDict.read,write:a$4.fieldTransformTypeKebabDict.write}})],d.prototype,"fieldTransformType",void 0),e$1([d$2({type:[a$7],json:{write:!0}})],d.prototype,"stops",void 0),d=l$2=e$1([n$1("esri.renderers.PointCloudStretchRenderer")],d);const a$1=d;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
var l$1;let c=l$1=class extends l$5{constructor(){super(...arguments),this.description=null,this.label=null,this.values=null,this.color=null;}clone(){return new l$1({description:this.description,label:this.label,values:y(this.values),color:y(this.color)})}};e$1([d$2({type:String,json:{write:!0}})],c.prototype,"description",void 0),e$1([d$2({type:String,json:{write:!0}})],c.prototype,"label",void 0),e$1([d$2({type:[String],json:{write:!0}})],c.prototype,"values",void 0),e$1([d$2({type:l$6,json:{type:[T],write:!0}})],c.prototype,"color",void 0),c=l$1=e$1([n$1("esri.renderers.support.pointCloud.ColorUniqueValueInfo")],c);const n=c;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
var l;let u=l=class extends a$4{constructor(e){super(e),this.type="point-cloud-unique-value",this.field=null,this.fieldTransformType=null,this.colorUniqueValueInfos=null,this.legendOptions=null;}clone(){return new l({...this.cloneProperties(),field:y(this.field),fieldTransformType:y(this.fieldTransformType),colorUniqueValueInfos:y(this.colorUniqueValueInfos),legendOptions:y(this.legendOptions)})}};e$1([r({pointCloudUniqueValueRenderer:"point-cloud-unique-value"})],u.prototype,"type",void 0),e$1([d$2({json:{write:!0},type:String})],u.prototype,"field",void 0),e$1([d$2({type:a$4.fieldTransformTypeKebabDict.apiValues,json:{type:a$4.fieldTransformTypeKebabDict.jsonValues,read:a$4.fieldTransformTypeKebabDict.read,write:a$4.fieldTransformTypeKebabDict.write}})],u.prototype,"fieldTransformType",void 0),e$1([d$2({type:[n],json:{write:!0}})],u.prototype,"colorUniqueValueInfos",void 0),e$1([d$2({type:p$5,json:{write:!0}})],u.prototype,"legendOptions",void 0),u=l=e$1([n$1("esri.renderers.PointCloudUniqueValueRenderer")],u);const a=u;

export { a, a$1 as b, a$4 as c, d$1 as d };
