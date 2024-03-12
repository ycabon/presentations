// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../../../core/has ../../../../../core/lang ../../../../../core/mathUtils ../../../../../core/sql ../../../../../layers/support/arcgisLayerUrl ../../../../../layers/support/FeatureFilter ../../../../../layers/support/layerUtils ./featureServiceUtils ./floorFilterUtils ./geometryUtils ./labelingUtils ../schema/SourceSchema ../schema/processor/SubtypeProcessorSchema".split(" "),function(t,m,y,u,v,z,A,B,C,n,D,E,F,G){function H(a,b){return a.sublayers.some(d=>!w(d,b))}function w(a,
b){return a.visible&&(0===a.minScale||u.floatEqualAbsolute(b.scale,a.minScale)||b.scale<a.minScale)&&(0===a.maxScale||u.floatEqualAbsolute(b.scale,a.maxScale)||b.scale>a.maxScale)}class I{constructor(a){this.layer=a}getLabelingDeconflictionInfo(a){return[{vvEvaluators:{},deconflictionEnabled:this.layer.sublayers.every(b=>E.getLayerDeconflictionEnabled(b))}]}async createServiceOptions(a){var b=this.layer;const d=B.getEffectiveLayerCapabilities(b),{capabilities:c,datesInUnknownTimezone:e,editingInfo:g,
globalIdField:l,objectIdField:h,refreshInterval:f,subtypeField:p}=b,k=b.fieldsIndex.toJSON(),q=k.fields,J=b.fullExtent?.toJSON(),K=D.getEffectiveGeometryType(b),L=b.timeInfo?.toJSON(),M=b.spatialReference.toJSON(),x=y.clone(this.layer.parsedUrl);var r=null==g?.lastEditDate&&0<f;a=(r=m("featurelayer-snapshot-enabled")&&"point"===b.geometryType&&c?.query.supportsPagination&&!c?.operations.supportsEditing&&!r)&&C.exceedsMinimumSnapshotCoverage(a,b.fullExtent);b=z.isHostedAgolService(x.path);return{type:"feature-service",
supportsSnapshotMinThreshold:r,supportsSnapshotMaxThreshold:a,snapshotCountThresholds:{min:m("featurelayer-snapshot-point-min-threshold"),max:m("featurelayer-snapshot-point-max-threshold")},isSourceHosted:b,timeReferenceUnknownClient:e,subtypeField:p,globalIdField:l,maxRecordCount:c.query.maxRecordCount,tileMaxRecordCount:c.query.tileMaxRecordCount,capabilities:c,effectiveCapabilities:d,fields:q,fieldsIndex:k,fullExtent:J,geometryType:K,objectIdField:h,source:x,timeInfo:L,spatialReference:M,orderByFields:h,
lastEditDate:g?.lastEditDate?.getTime()}}createSourceSchema(a,b,d){const {definitionExpression:c,customParameters:e,gdbVersion:g,historicMoment:l,subtypeField:h,timeExtent:f,apiKey:p}=this.layer;var k=this.layer.sublayers.map(q=>q.subtypeCode).join(",");k={definitionExpression:v.sqlAnd(c,this.layer.sublayers.length?`${this.layer.subtypeField} IN (${k})`:"1\x3d2"),customParameters:e,gdbVersion:g,historicMoment:l,subtypeField:h,timeExtent:f};return F.createFeatureSourceSchema(a,k,b,d,p)}createProcessorSchema(a,
b,d){const c={subtypeField:this.layer.subtypeField,sublayers:Array.from(this.layer.sublayers,e=>({featureReduction:null,geometryType:this.layer.geometryType,labelingInfo:e.labelingInfo,labelsVisible:e.labelsVisible,renderer:e.renderer,subtypeCode:e.subtypeCode,orderBy:null}))};return G.createSubtypeProcessorSchema(a,b,c,d)}hasFilters(a){return n.hasFloorFilter(this.layer,a)||H(this.layer,a)}addFilters(a,b){a=n.addFloorFilter(this.layer,a,b);var d=this.layer.sublayers.filter(c=>!w(c,b)).map(c=>c.subtypeCode);
if(!d.length)return a;a??=new A;d=`NOT ${this.layer.subtypeField} IN (${d.join(",")})`;a.where=v.sqlAnd(a.where,d);return a}get hasRequiredSupport(){return!0}getUpdateHashProperties(a){var b=this.layer;const {definitionExpression:d,gdbVersion:c,apiKey:e}=b,g=b.historicMoment?.getTime()??void 0;b=JSON.stringify(b.customParameters);a=n.hasFloorFilter(this.layer,a)?a.floors:null;const l="sublayers"in this.layer&&this.layer.sublayers.items.reduce((h,f)=>h+`${f.visible?1:0}.${JSON.stringify(f.renderer)}.${f.labelsVisible}\n.${JSON.stringify(f.labelingInfo)}`,
"");return{gdbVersion:c,definitionExpression:d,historicMoment:g,customParameters:b,apiKey:e,sublayerHash:l,floors:a}}setGraphicOrigin(a){var b=this.layer.fieldsIndex.get(this.layer.subtypeField);const d=a.attributes[b.name];b=this.layer.sublayers.find(c=>c.subtypeCode===d);a.layer=a.sourceLayer=b}}t.SubtypeGroupLayerAdapter=I;Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})});