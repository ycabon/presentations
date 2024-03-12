// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../Graphic ../../../core/arrayUtils ../../../core/Error ../../../core/maybe ../../../core/promiseUtils ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/Logger ../../../core/accessorSupport/decorators/subclass ../../../layers/support/arcgisLayerUrl ../../../layers/support/fieldUtils ../../../rest/generateRenderer ../../../rest/support/GenerateRendererParameters ../../../rest/support/StatisticDefinition ../../../rest/support/UniqueValueDefinition ../../statistics/support/predominanceUtils ../../statistics/support/utils ../../statistics/support/WorkerClient ../utils ./InMemoryLayerAdapter ./support/utils ../../../statistics/utils".split(" "),
function(F,I,G,v,J,y,K,C,T,L,M,A,N,D,O,P,H,r,Q,z,R,m,w){C=class extends R{constructor(){super(...arguments);this.adapterName="feature-layer-adapter"}_isStatsSupportedOnService(){const a=this.layer;if(!a.capabilities?.query?.supportsStatistics||"multipatch"===this.geometryType&&!M.isHostedAgolService(a.url)&&10.5>a.version)throw new v(`${this.adapterName}:not-supported`,"Layer does not support statistics query");return Promise.resolve()}_fetchFeaturesFromService(a,c){return this.layer.queryFeatures(a,
{signal:c}).then(b=>b.features)}_fetchFeaturesJSONFromService(a,c){return this._fetchFeaturesFromService(a,c).then(m.ensureFeaturesJSON)}_summaryStatsFromGenRend(a){const c=a.normalizationType,b=a.normalizationField;return this.classBreaks({field:a.field,numClasses:5,classificationMethod:"standard-deviation",standardDeviationInterval:.25,normalizationType:c,normalizationField:"field"===c?b:void 0,minValue:a.minValue,maxValue:a.maxValue,filter:a.filter,signal:a.signal}).then(d=>{let h,k;d.classBreakInfos?.some(g=>
{g.hasAvg&&(h=g);return!!h});if(h){var e=h.maxValue-h.minValue;k=h.minValue+e/2;e*=4}return w.processSummaryStatisticsResult({min:d.minValue,max:d.maxValue,avg:k,stddev:e})})}async _summaryStatsFromServiceQuery(a,c){await this._isStatsSupportedOnService();"percent-of-total"===a.normalizationType&&(a.normalizationTotal=await this._getNormalizationTotal(a.field,a.normalizationType,a.filter));var b=z.isAnyDateField(c)||A.isTimeOnlyField(c);c=m.getSummaryStatsQuery(this,a,c);a=await this.layer.queryFeatures(c,
{signal:a.signal});b=m.getSummaryStatisticsFromFeatureSet(a,b);return w.processSummaryStatisticsResult(b)}_uvFromGenRenderer(a,c){const b=a.field??void 0,d=new P;d.attributeField=b;const h=new D;h.classificationDefinition=d;return this.generateRenderer(h,a.signal).then(k=>{const e={},g=this.getField(b);k.uniqueValues.forEach(f=>{let l=f.value;if(null==l||""===l||"string"===typeof l&&(""===l.trim()||"\x3cnull\x3e"===l.toLowerCase()))l=null;null==e[l]?e[l]={count:f.count,data:A.isNumericField(g)&&l?
Number(l):l}:e[l].count+=f.count});return{count:e}}).then(k=>w.createUVResult(k,[c],a.returnAllCodedValues))}async _uvFromServiceQuery(a,c){return this._isStatsSupportedOnService().then(()=>this.layer.queryFeatures(m.getUVQuery(this,a),{signal:a.signal})).then(b=>m.getUniqueValuesFromFeatureSet(b,{layer:this,field:a.field,field2:a.field2,field3:a.field3,fieldDelimiter:z.fieldDelimiter,view:a.view,signal:a.signal})).then(b=>w.createUVResult(b,c,a.returnAllCodedValues,z.fieldDelimiter))}_calcBinsSQL(a,
c,b){const d=[],h=c.length;c.forEach((k,e)=>{const [g,f]=k;k=null;k=0!==e||b?e!==h-1||b?r.mergeWhereClauses(`${a} >= ${g}`,`${a} ${e===h-1?" \x3c\x3d ":" \x3c "} ${f}`):`${a} >= ${g}`:`${a} < ${f}`;d.push("WHEN ("+k+") THEN "+(e+1))});return["CASE",d.join(" "),"ELSE 0 END"].join(" ")}_getNormalizationTotal(a,c,b,d){return a&&"percent-of-total"===c?this.summaryStatistics({field:a,filter:b,signal:d}).then(h=>h.sum):Promise.resolve(null)}_getQueryParamsForExpr(a,c){const b=a.signal;if(!a.valueExpression&&
!a.sqlExpression){const {field:d,normalizationType:h,normalizationField:k}=a,e=d?this.getField(d):null,g=z.isAnyDateField(e)||A.isTimeOnlyField(e);c={field:d,normalizationType:h,normalizationField:k,normalizationTotal:c,layer:this};return{sqlExpression:g?m.getSQLExpressionForDateOrTimeField(this,e):m.getFieldExpr(c),sqlWhere:g?null:a.sqlWhere||r.getSQLFilterForNormalization({field:d,normalizationType:h,normalizationField:k}),filter:a.filter,signal:b}}return{valueExpression:a.valueExpression,sqlExpression:a.sqlExpression,
sqlWhere:a.sqlWhere,filter:a.filter,signal:b}}_getDataRange(a,c,b){return null!=c&&null!=b?Promise.resolve({min:c,max:b}):this.summaryStatistics(a).then(d=>({min:d.min,max:d.max}))}_histogramForExpr(a){return this._getNormalizationTotal(a.field,a.normalizationType,a.filter,a.signal).then(c=>{const b=this._getQueryParamsForExpr(a,c);return this._getDataRange(b,a.minValue,a.maxValue).then(d=>{const h=d.min,k=d.max;if(null==h||null==k)return{bins:[],minValue:h,maxValue:k,normalizationTotal:c};const e=
a.numBins||m.defaultNumBins;d=w.getEqualIntervalBins(h,k,e);d=this._calcBinsSQL(b.sqlExpression,d,null!=a.minValue&&null!=a.maxValue);const g=new O({statisticType:"count",outStatisticFieldName:"countOFExpr",onStatisticField:"1"}),f=this.layer.createQuery();f.where=r.mergeWhereClauses(f.where,b.sqlWhere);f.sqlFormat="standard";f.outStatistics=[g];f.groupByFieldsForStatistics=[d];f.orderByFields=[d];m.updateQueryWithFeatureFilter(f,a.filter);return this._isStatsSupportedOnService().then(()=>this.layer.queryFeatures(f,
{signal:b.signal})).then(l=>m.getHistogramFromFeatureSet(l,h,k,e,c))})})}_binParamsFromGenRend(a,c){const {field:b,normalizationType:d,normalizationField:h,signal:k}=a,e=r.getSQLFilterForNormalization({field:b,normalizationType:d,normalizationField:h});a=new D({classificationDefinition:w.createClassBreaksDefinition({field:b,normalizationType:d,normalizationField:h,classificationMethod:a.classificationMethod,standardDeviationInterval:a.standardDeviationInterval,breakCount:a.numBins||m.defaultNumBins}),
where:r.mergeWhereClauses(e,c)});return this.generateRenderer(a,k).then(g=>{const {normalizationTotal:f,classBreaks:l}=g;return m.generateBinParams({field:b,normalizationType:d,normalizationField:h,normalizationTotal:f,classBreaks:l,where:e,layer:this})})}_classBreaksFromGenRend(a){const {field:c,normalizationType:b,normalizationField:d,normalizationTotal:h,signal:k}=a,e=r.getSQLFilterForNormalization({field:c,normalizationType:b,normalizationField:d});var g=m.getFieldExpr({field:c,normalizationType:b,
normalizationField:d,normalizationTotal:h,layer:this});g=r.getRangeExpr(g,a.minValue,a.maxValue);const f=w.createClassBreaksDefinition({field:c,normalizationType:b,normalizationField:d,classificationMethod:a.classificationMethod,standardDeviationInterval:a.standardDeviationInterval,breakCount:a.numClasses||5}),l=new D;l.classificationDefinition=f;l.where=r.mergeWhereClauses(e,g);return this.generateRenderer(l,k).then(n=>w.resolveCBResult(n,a.classificationMethod))}async summaryStatistics(a){const {field:c,
normalizationType:b,sqlExpression:d,view:h,features:k,useFeaturesInView:e}=a,g=c?this.getField(c):null,f=z.isAnyDateField(g)||A.isTimeOnlyField(g),l=a.valueExpression||d,n=l&&!d,u=h&&"3d"===h.type;if(this._hasLocalSource||k||e||n)return n||k||e||u?this._summaryStatsFromMemory(a,g):this._summaryStatsFromClientQuery(a,g);if(!this.supportsSQLExpression&&(f||l||"natural-log"===b||"square-root"===b))throw new v(`${this.adapterName}:not-supported`,"Layer does not support standardized SQL expression for queries");
return(b&&!this.supportsSQLExpression?this._summaryStatsFromGenRend(a):this._summaryStatsFromServiceQuery(a,g)).catch(()=>{y.throwIfAborted(a.signal);return this._summaryStatsFromMemory(a,g)})}async uniqueValues(a){const {valueExpression:c,sqlExpression:b,features:d,useFeaturesInView:h,signal:k}=a,e=c&&(!b||!this.supportsSQLExpression),g=this._hasLocalSource||d||h||e,f=a.view,l=f&&"3d"===f.type,n=await m.getDomainsForFields(a,this);return g?e||d||h||l?this._uvFromMemory(a,n):this._uvFromClientQuery(a,
n):this._uvFromServiceQuery(a,n).catch(u=>{y.throwIfAborted(k);return!a.field||a.field2||a.field3||a.filter?u:this._uvFromGenRenderer(a,n[0])}).catch(()=>{y.throwIfAborted(k);return l?this._uvFromMemory(a,n):this._uvFromClientQuery(a,n)})}async histogram(a){const {field:c,normalizationType:b,normalizationField:d,classificationMethod:h,view:k,filter:e,signal:g}=a;var f=c?this.getField(c):null;f=z.isAnyDateField(f)||A.isTimeOnlyField(f);const l=a.valueExpression||a.sqlExpression,n=l&&!a.sqlExpression,
u=this.supportsSQLExpression,p=!h||"equal-interval"===h,q=a.minValue,x=a.maxValue,E=null!=q&&null!=x,B=a.numBins||m.defaultNumBins;if(this._hasLocalSource||a.features||a.useFeaturesInView||n)return this._histogramFromMemory(a);if((l||u)&&p){if(!u&&(l||"natural-log"===b||"square-root"===b))throw new v(`${this.adapterName}:not-supported`,"Layer does not support standardized SQL expression for queries");return this._histogramForExpr(a)}if(f&&p)throw new v(`${this.adapterName}:not-supported`,"Normalization and date field are not allowed when layer does not support standardized SQL expression for queries");
return b||!p?this._binParamsFromGenRend(a).then(t=>{if(!E)return m.getBins(this,t,c,B,k,e,g);if(q>t.max||x<t.min)throw new v(`${this.adapterName}:insufficient-data`,"Range defined by 'minValue' and 'maxValue' does not intersect available data range of the field");if(p)return m.getBins(this,{min:q,max:x,sqlExpr:t.sqlExpr,excludeZerosExpr:t.excludeZerosExpr},c,B,k,e,g);t=m.getFieldExpr({field:c,normalizationType:b,normalizationField:d,normalizationTotal:t.normTotal,layer:this});t=r.getRangeExpr(t,q,
x);return this._binParamsFromGenRend(a,t).then(S=>m.getBins(this,S,c,B,k,e,g))}):this._histogramForField(a)}async classBreaks(a){const c=!1!==a.analyzeData,b=this._hasLocalSource||a.features||a.useFeaturesInView||a.valueExpression||a.filter;return c&&b?this._classBreaksFromMemory(a):(c?this._classBreaksFromGenRend(a):this._classBreaksFromInterpolation(a)).catch(()=>{y.throwIfAborted(a.signal);return this._classBreaksFromMemory(a)})}async queryFeatureCount(a){if(this._hasLocalSource)throw new v(`${this.adapterName}:not-supported`,
"Layer does not support count query");const c=this.layer,b=c.createQuery();b.where=r.mergeWhereClauses(b.where,a.whereClause);m.updateQueryWithFeatureFilter(b,a.filter);return c.queryFeatureCount(b,{signal:a.signal})}async generateRenderer(a,c){const b=this.layer;if(this._hasLocalSource||10.1>b.version)throw new v(`${this.adapterName}:not-supported`,"Layer does not support generateRenderer operation (requires ArcGIS Server version 10.1+)");const d=b.createQuery();a.where=r.mergeWhereClauses(a.where,
d.where);return N.generateRenderer(b.parsedUrl.path,{source:b.dynamicDataSource??void 0,gdbVersion:b.gdbVersion??void 0},a,{signal:c})}async predominantCategories(a){if(!this._hasLocalSource&&!this.supportsSQLExpression)throw new v(`${this.adapterName}:not-supported`,"Layer does not support advanced SQL expressions and standardized queries");const {fields:c,view:b,signal:d}=a;a=H.getArcadeForPredominantCategory(c);const h=H.getSQLForPredominantCategoryName(c);a=b&&this._hasLocalSource?await this._uvFromMemory({valueExpression:a,
view:b,signal:d}):await this._uvFromServiceQuery({sqlExpression:h.expression,valueExpression:a,signal:d});return m.getPredominantCategoriesFromUVInfos(a.uniqueValueInfos,c)}async getSampleFeatures(a,c){const {view:b,requiredFields:d,returnGeometry:h,filter:k,signal:e}=a,g=a.sampleSize;if(null==g||0===g)return[];const f=this.layer.createQuery(),l="json"===c;f.outSpatialReference=b?.spatialReference;f.returnGeometry=!!h;f.outFields=d;m.updateQueryWithFeatureFilter(f,k);let n=[],u=!1;if(b)try{const p=
await b.whenLayerView(this.layer);if(u=!m.getMissingFields(this,d,p).length){if(1<=g&&!a.filter&&"getSampleFeatures"in p){const q=await p.getSampleFeatures({minFeatureCount:g,sampleSize:g});if(null!=q)return l?q:q.map(x=>I.fromJSON(x))}n=await this._fetchFeaturesFromMemory(p,f,e,c);if(n.length>=g&&0<g)return G.pickRandom(n,g,1)}}catch(p){y.throwIfAborted(e)}try{if(this._hasLocalSource)return u?n:l?this._fetchFeaturesJSONFromService(f,e):this._fetchFeaturesFromService(f,e);const p=await this.queryFeatureCount({view:b,
filter:k,signal:e}),q=this.layer.capabilities.query.maxRecordCount;c=-1===g?p:g;c=q&&c>q?q:c;if(p<=n.length||n.length>=q)return n;J.assertIsSome(b,"FeatureLayerAdapter: must have a view");const x=b.extent.width/b.width/b.scale*4E5;f.maxAllowableOffset=a.resolution||x;if(p<=c)return l?this._fetchFeaturesJSONFromService(f,e):this._fetchFeaturesFromService(f,e);if(2E4>=p){const E=this.layer.createQuery();m.updateQueryWithFeatureFilter(E,k);const B=await this.layer.queryObjectIds();f.objectIds=G.pickRandom(B,
c,1);return l?this._fetchFeaturesJSONFromService(f,e):this._fetchFeaturesFromService(f,e)}this.layer.capabilities?.query?.supportsPagination&&(f.num=Math.min(c,2E4));return l?this._fetchFeaturesJSONFromService(f,e):this._fetchFeaturesFromService(f,e)}catch(p){return y.throwIfAborted(e),n}}load(a){const c=this.layer.load(a).then(async b=>{this.geometryType=b.geometryType;this.objectIdField=b.objectIdField;this.supportsSQLExpression=b.capabilities?.query?.supportsSqlExpression;this.hasQueryEngine=this._hasLocalSource=
!b.url&&!!b.source;this.minScale=b.minScale;this.maxScale=b.maxScale;this.fullExtent=b.fullExtent;this.workerClient=Q.WorkerClient.getInstance();await this.workerClient.open(a.signal)});this.addResolvingPromise(c);return Promise.resolve(this)}};F.__decorate([K.property({constructOnly:!0})],C.prototype,"layer",void 0);return C=F.__decorate([L.subclass("esri.smartMapping.support.adapters.FeatureLayerAdapter")],C)});