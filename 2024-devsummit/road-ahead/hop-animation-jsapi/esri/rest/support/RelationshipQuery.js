// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../geometry ../../core/JSONSupport ../../core/lang ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../../core/accessorSupport/decorators/writer ../../layers/support/source/DataLayerSource ../../geometry/SpatialReference".split(" "),function(b,a,h,k,c,l,m,f,n,p){var g;a=g=class extends h.JSONSupport{constructor(d){super(d);this.dynamicDataSource=this.cacheHint=void 0;this.gdbVersion=
null;this.geometryPrecision=void 0;this.historicMoment=null;this.maxAllowableOffset=void 0;this.outSpatialReference=this.outFields=this.orderByFields=this.objectIds=null;this.num=this.start=this.relationshipId=void 0;this.returnGeometry=!1;this.returnZ=this.returnM=void 0;this.where=null}_writeHistoricMoment(d,e){e.historicMoment=d&&d.getTime()}writeStart(d,e){e.resultOffset=this.start;e.resultRecordCount=this.num||10;0<this.start&&null==this.where&&(e.definitionExpression="1\x3d1")}clone(){return new g(k.clone({cacheHint:this.cacheHint,
dynamicDataSource:this.dynamicDataSource,gdbVersion:this.gdbVersion,geometryPrecision:this.geometryPrecision,historicMoment:this.historicMoment&&new Date(this.historicMoment.getTime()),maxAllowableOffset:this.maxAllowableOffset,objectIds:this.objectIds,orderByFields:this.orderByFields,outFields:this.outFields,outSpatialReference:this.outSpatialReference,relationshipId:this.relationshipId,start:this.start,num:this.num,returnGeometry:this.returnGeometry,where:this.where,returnZ:this.returnZ,returnM:this.returnM}))}};
b.__decorate([c.property({type:Boolean,json:{write:!0}})],a.prototype,"cacheHint",void 0);b.__decorate([c.property({type:n.DataLayerSource,json:{write:!0}})],a.prototype,"dynamicDataSource",void 0);b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"gdbVersion",void 0);b.__decorate([c.property({type:Number,json:{write:!0}})],a.prototype,"geometryPrecision",void 0);b.__decorate([c.property({type:Date})],a.prototype,"historicMoment",void 0);b.__decorate([f.writer("historicMoment")],
a.prototype,"_writeHistoricMoment",null);b.__decorate([c.property({type:Number,json:{write:!0}})],a.prototype,"maxAllowableOffset",void 0);b.__decorate([c.property({type:[Number],json:{write:!0}})],a.prototype,"objectIds",void 0);b.__decorate([c.property({type:[String],json:{write:!0}})],a.prototype,"orderByFields",void 0);b.__decorate([c.property({type:[String],json:{write:!0}})],a.prototype,"outFields",void 0);b.__decorate([c.property({type:p,json:{read:{source:"outSR"},write:{target:"outSR"}}})],
a.prototype,"outSpatialReference",void 0);b.__decorate([c.property({json:{write:!0}})],a.prototype,"relationshipId",void 0);b.__decorate([c.property({type:Number,json:{read:{source:"resultOffset"}}})],a.prototype,"start",void 0);b.__decorate([f.writer("start"),f.writer("num")],a.prototype,"writeStart",null);b.__decorate([c.property({type:Number,json:{read:{source:"resultRecordCount"}}})],a.prototype,"num",void 0);b.__decorate([c.property({json:{write:!0}})],a.prototype,"returnGeometry",void 0);b.__decorate([c.property({type:Boolean,
json:{write:{overridePolicy(d){return{enabled:d}}}}})],a.prototype,"returnM",void 0);b.__decorate([c.property({type:Boolean,json:{write:{overridePolicy(d){return{enabled:d}}}}})],a.prototype,"returnZ",void 0);b.__decorate([c.property({type:String,json:{read:{source:"definitionExpression"},write:{target:"definitionExpression"}}})],a.prototype,"where",void 0);a=g=b.__decorate([m.subclass("esri.rest.support.RelationshipQuery")],a);a.from=l.ensureType(a);return a});