// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/tsSupport/paramHelper ../core/JSONSupport ../core/lang ../core/accessorSupport/decorators ./support/stretchRendererUtils ../tasks/support/colorRamps".split(" "),function(n,p,l,d,q,m,f,c,e,k){return function(g){function b(){var a=null!==g&&g.apply(this,arguments)||this;a.colorRamp=null;a.computeGamma=!1;a.dynamicRangeAdjustment=!1;a.gamma=[];a.maxPercent=null;a.minPercent=null;a.numberOfStandardDeviations=
null;a.outputMax=null;a.outputMin=null;a.sigmoidStrengthLevel=null;a.statistics=[];a.histograms=null;a.useGamma=!1;a.stretchType="none";a.type="raster-stretch";return a}l(b,g);h=b;b.prototype.readColorRamp=function(a){if(a)return k.fromJSON(a)};b.prototype.writeStatistics=function(a,b,c){null==a||0===a.length?a=null:a[0]instanceof Array||(a=a.map(function(a){return[a.min,a.max,a.avg,a.stddev]}));b[c]=a};b.prototype.readStretchType=function(a,b){a=b.stretchType;"number"===typeof a&&(a=e.stretchTypeFunctionEnum[a]);
return e.stretchTypeJSONDict.read(a)};b.prototype.clone=function(){return new h({stretchType:this.stretchType,outputMin:this.outputMin,outputMax:this.outputMax,useGamma:this.useGamma,computeGamma:this.computeGamma,statistics:f.clone(this.statistics),gamma:f.clone(this.gamma),sigmoidStrengthLevel:this.sigmoidStrengthLevel,numberOfStandardDeviations:this.numberOfStandardDeviations,minPercent:this.minPercent,maxPercent:this.maxPercent,colorRamp:f.clone(this.colorRamp),histograms:f.clone(this.histograms),
dynamicRangeAdjustment:this.dynamicRangeAdjustment})};var h;d([c.property({types:k.types,json:{write:!0}})],b.prototype,"colorRamp",void 0);d([c.reader("colorRamp")],b.prototype,"readColorRamp",null);d([c.property({type:Boolean,json:{write:!0}})],b.prototype,"computeGamma",void 0);d([c.property({type:Boolean,json:{write:{target:"dra"},read:{source:"dra"}}})],b.prototype,"dynamicRangeAdjustment",void 0);d([c.property({type:[Number],json:{write:{allowNull:!0}}})],b.prototype,"gamma",void 0);d([c.property({type:Number,
json:{write:{allowNull:!0}}})],b.prototype,"maxPercent",void 0);d([c.property({type:Number,json:{write:{allowNull:!0}}})],b.prototype,"minPercent",void 0);d([c.property({type:Number,json:{write:{allowNull:!0}}})],b.prototype,"numberOfStandardDeviations",void 0);d([c.property({type:Number,json:{read:{source:"max"},write:{target:"max",allowNull:!0}}})],b.prototype,"outputMax",void 0);d([c.property({type:Number,json:{read:{source:"min"},write:{target:"min",allowNull:!0}}})],b.prototype,"outputMin",void 0);
d([c.property({type:Number,json:{write:{allowNull:!0}}})],b.prototype,"sigmoidStrengthLevel",void 0);d([c.property({json:{write:{allowNull:!0}}})],b.prototype,"statistics",void 0);d([c.property()],b.prototype,"histograms",void 0);d([c.writer("statistics")],b.prototype,"writeStatistics",null);d([c.property({type:Boolean,json:{write:!0}})],b.prototype,"useGamma",void 0);d([c.property({type:e.stretchTypeJSONDict.apiValues,json:{type:e.stretchTypeJSONDict.jsonValues,write:e.stretchTypeJSONDict.write}})],
b.prototype,"stretchType",void 0);d([c.reader("stretchType",["stretchType"])],b.prototype,"readStretchType",null);d([c.enumeration.serializable()({rasterStretch:"raster-stretch"})],b.prototype,"type",void 0);return b=h=d([c.subclass("esri.renderers.RasterStretchRenderer")],b)}(c.declared(m.JSONSupport))});