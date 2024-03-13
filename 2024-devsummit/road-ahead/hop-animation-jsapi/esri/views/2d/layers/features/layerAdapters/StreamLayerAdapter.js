// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ./featureReductionUtils ./geometryUtils ./labelingUtils ../schema/processor/SimpleProcessorSchema ../support/rendererUtils".split(" "),function(h,k,l,g,m,n){class p{constructor(b){this.layer=b}getLabelingDeconflictionInfo(b){const a=this.layer;b=g.getFeatureReductionDeconflictionEnabled(a,b)??g.getLayerDeconflictionEnabled(a);return[{vvEvaluators:{0:g.createLabelVVEvaluator(a.renderer)},deconflictionEnabled:b}]}async createServiceOptions(b){var a=this.layer;({objectIdField:b}=a);const d=
a.fields.map(c=>c.toJSON()),e=l.getEffectiveGeometryType(a),f=a.timeInfo?.toJSON()||null;a=a.spatialReference?a.spatialReference.toJSON():null;return{fields:d,fieldsIndex:this.layer.fieldsIndex.toJSON(),geometryType:e,objectIdField:b,timeInfo:f,source:this.layer.parsedUrl,spatialReference:a}}createSourceSchema(b,a,d){const {definitionExpression:e,geometryDefinition:f,customParameters:c}=this.layer;return{type:"stream",sourceRefreshVersion:d,service:b,tileInfoJSON:a.tileInfoJSON,availableFields:a.availableFields,
dataFilter:{geometryDefinition:f?.toJSON(),definitionExpression:e,outSpatialReference:a.outSpatialReference.toJSON(),customParameters:c??null,maxReconnectionAttempts:this.layer.maxReconnectionAttempts,maxReconnectionInterval:this.layer.maxReconnectionInterval,purgeOptions:this.layer.purgeOptions.toJSON()}}}createProcessorSchema(b,a,d){const {fields:e,renderer:f,geometryType:c,labelingInfo:q,labelsVisible:r,objectIdField:t}=this.layer,v={fields:e.map(u=>u.toJSON()),renderer:f?.clone(),featureReduction:k.getEffectiveFeatureReduction(this.layer,
a),geometryType:c,labelingInfo:q,labelsVisible:r,objectIdField:t,orderBy:"default"};return m.createSimpleProcessorSchema(b,a,v,d)}get hasRequiredSupport(){return n.isRendererSupported(this.layer.renderer)}getUpdateHashProperties(b){var a=this.layer;const {definitionExpression:d,renderer:e}=a,f=this.layer.labelsVisible?this.layer.labelingInfo:null,c=JSON.stringify(a.customParameters);b=k.getEffectiveFeatureReduction(a,b)?.toJSON();a=`${JSON.stringify(a.geometryDefinition)}${a.definitionExpression}`;
return{definitionExpression:d,renderer:e,labelingInfo:f,featureReduction:b,customParameters:c,streamFilter:a}}}h.StreamLayerAdapter=p;Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});