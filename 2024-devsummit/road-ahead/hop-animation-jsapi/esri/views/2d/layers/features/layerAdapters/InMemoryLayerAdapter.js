// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../../../core/Error ../../../../../layers/support/layerUtils ./featureReductionUtils ./geometryUtils ./labelingUtils ../schema/SourceSchema ../schema/processor/SimpleProcessorSchema ../support/rendererUtils".split(" "),function(n,q,r,p,t,f,u,v,w){class x{constructor(b){this.layer=b}getLabelingDeconflictionInfo(b){const a=this.layer;b=f.getFeatureReductionDeconflictionEnabled(a,b)??f.getLayerDeconflictionEnabled(a);return[{vvEvaluators:{0:f.createLabelVVEvaluator(a.renderer)},
deconflictionEnabled:b}]}async createServiceOptions(b){var a=this.layer;b=r.getEffectiveLayerCapabilities(a);const {capabilities:c,objectIdField:d}=a,e=a.fieldsIndex.toJSON(),g=e.fields,h=null!=a.fullExtent?a.fullExtent.toJSON():null,k=t.getEffectiveGeometryType(a),l=a.timeInfo?.toJSON(),m=a.spatialReference.toJSON();if(!("openPorts"in a.source))throw new q("source-not-supported");a=await a.source.openPorts();return{type:"memory",maxRecordCount:c.query.maxRecordCount,tileMaxRecordCount:c.query.tileMaxRecordCount,
capabilities:c,effectiveCapabilities:b,fields:g,fieldsIndex:e,fullExtent:h,geometryType:k,objectIdField:d,source:a,timeInfo:l,spatialReference:m,orderByFields:d}}createSourceSchema(b,a,c){const {definitionExpression:d,timeExtent:e}=this.layer;return u.createFeatureSourceSchema(b,{definitionExpression:d,timeExtent:e,customParameters:null},a,c,null)}createProcessorSchema(b,a,c){const {fields:d,renderer:e,geometryType:g,labelingInfo:h,labelsVisible:k,orderBy:l,objectIdField:m}=this.layer,z={fields:d.map(y=>
y.toJSON()),renderer:e?.clone(),featureReduction:p.getEffectiveFeatureReduction(this.layer,a),geometryType:g,labelingInfo:h,labelsVisible:k,objectIdField:m,orderBy:l??"default"};return v.createSimpleProcessorSchema(b,a,z,c)}get hasRequiredSupport(){return w.isRendererSupported(this.layer.renderer)}getUpdateHashProperties(b){const a=this.layer,{definitionExpression:c,renderer:d}=a,e=this.layer.labelsVisible?this.layer.labelingInfo:null;b=p.getEffectiveFeatureReduction(a,b)?.toJSON();return{orderBy:JSON.stringify(a.orderBy),
definitionExpression:c,renderer:d,labelingInfo:e,featureReduction:b}}}n.InMemoryLayerAdapter=x;Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})});