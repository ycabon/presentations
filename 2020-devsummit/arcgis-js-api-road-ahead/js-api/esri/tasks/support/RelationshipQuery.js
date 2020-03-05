// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../geometry ../../core/JSONSupport ../../core/lang ../../core/accessorSupport/decorators ../../core/accessorSupport/ensureType".split(" "),function(d,m,f,c,g,h,k,b,l){d=function(d){function a(a){a=d.call(this,a)||this;a.gdbVersion=null;a.geometryPrecision=void 0;a.historicMoment=null;a.maxAllowableOffset=void 0;a.objectIds=null;a.outFields=null;a.outSpatialReference=null;a.relationshipId=void 0;
a.returnGeometry=!1;a.source=null;a.where=null;return a}f(a,d);e=a;a.prototype._writeHistoricMoment=function(a,b){b.historicMoment=a&&a.getTime()};a.prototype.clone=function(){return new e(k.clone({gdbVersion:this.gdbVersion,geometryPrecision:this.geometryPrecision,historicMoment:this.historicMoment&&this.historicMoment.getTime(),maxAllowableOffset:this.maxAllowableOffset,objectIds:this.objectIds,outFields:this.outFields,outSpatialReference:this.outSpatialReference,relationshipId:this.relationshipId,
returnGeometry:this.returnGeometry,source:this.source,where:this.where}))};var e;c([b.property({type:String,json:{write:!0}})],a.prototype,"gdbVersion",void 0);c([b.property({type:Number,json:{write:!0}})],a.prototype,"geometryPrecision",void 0);c([b.property({type:Date})],a.prototype,"historicMoment",void 0);c([b.writer("historicMoment")],a.prototype,"_writeHistoricMoment",null);c([b.property({type:Number,json:{write:!0}})],a.prototype,"maxAllowableOffset",void 0);c([b.property({type:[Number],json:{write:!0}})],
a.prototype,"objectIds",void 0);c([b.property({type:[String],json:{write:!0}})],a.prototype,"outFields",void 0);c([b.property({type:g.SpatialReference,json:{read:{source:"outSR"},write:{target:"outSR"}}})],a.prototype,"outSpatialReference",void 0);c([b.property({json:{write:!0}})],a.prototype,"relationshipId",void 0);c([b.property({json:{write:!0}})],a.prototype,"returnGeometry",void 0);c([b.property({json:{write:!0}})],a.prototype,"source",void 0);c([b.property({type:String,json:{read:{source:"definitionExpression"},
write:{target:"definitionExpression"}}})],a.prototype,"where",void 0);return a=e=c([b.subclass("esri.tasks.support.RelationshipQuery")],a)}(b.declared(h.JSONSupport));d.from=l.default(d);return d});