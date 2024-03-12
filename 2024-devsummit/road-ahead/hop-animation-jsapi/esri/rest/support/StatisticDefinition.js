// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/jsonMap ../../core/JSONSupport ../../core/lang ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/accessorSupport/decorators/subclass ../../core/accessorSupport/decorators/writer".split(" "),function(b,d,a,g,c,m,n,h,k){var e;d=new d.JSONMap({count:"count",sum:"sum",min:"min",max:"max",avg:"avg",stddev:"stddev",var:"var",exceedslimit:"exceedslimit",percentile_cont:"percentile-continuous",percentile_disc:"percentile-discrete",
EnvelopeAggregate:"envelope-aggregate",CentroidAggregate:"centroid-aggregate",ConvexHullAggregate:"convex-hull-aggregate"});a=e=class extends a.JSONSupport{constructor(f){super(f);this.maxVertexCount=this.maxRecordCount=this.maxPointCount=void 0;this.statisticParameters=this.statisticType=this.outStatisticFieldName=this.onStatisticField=null}writeStatisticParameters(f,l){if("percentile-continuous"===this.statisticType||"percentile-discrete"===this.statisticType)l.statisticParameters=g.clone(f)}clone(){return new e({maxPointCount:this.maxPointCount,
maxRecordCount:this.maxRecordCount,maxVertexCount:this.maxVertexCount,onStatisticField:this.onStatisticField,outStatisticFieldName:this.outStatisticFieldName,statisticType:this.statisticType,statisticParameters:g.clone(this.statisticParameters)})}};b.__decorate([c.property({type:Number,json:{write:!0}})],a.prototype,"maxPointCount",void 0);b.__decorate([c.property({type:Number,json:{write:!0}})],a.prototype,"maxRecordCount",void 0);b.__decorate([c.property({type:Number,json:{write:!0}})],a.prototype,
"maxVertexCount",void 0);b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"onStatisticField",void 0);b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"outStatisticFieldName",void 0);b.__decorate([c.property({type:String,json:{read:{source:"statisticType",reader:d.read},write:{target:"statisticType",writer:d.write}}})],a.prototype,"statisticType",void 0);b.__decorate([c.property({type:Object})],a.prototype,"statisticParameters",void 0);b.__decorate([k.writer("statisticParameters")],
a.prototype,"writeStatisticParameters",null);return a=e=b.__decorate([h.subclass("esri.rest.support.StatisticDefinition")],a)});