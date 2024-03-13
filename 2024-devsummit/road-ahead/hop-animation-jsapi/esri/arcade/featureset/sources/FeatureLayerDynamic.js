// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../../../Graphic ../../../kernel ../../../request ../../Attachment ../../Dictionary ../support/errorsupport ../support/FeatureSet ../support/IdSet ../support/shared ../support/sqlUtils ../support/stats ../../../core/MD5 ../../../geometry/support/jsonUtils ../../../geometry/support/spatialReferenceUtils ../../../layers/FeatureLayer ../../../layers/SubtypeGroupLayer ../../../rest/query/executeQuery ../../../config ../../../core/RandomLCG ../../../core/has ../../../core/urlUtils ../../../rest/query/support/AttachmentInfo ../../../rest/support/AttachmentQuery ../../../rest/query/executeForCount ../../../geometry ../../../core/Error ../../../core/Logger ../../../geometry/Polygon ../../../geometry/Polyline ../../../geometry/support/normalizeUtilsCommon ../../../geometry/SpatialReference ../../../geometry/support/Ellipsoid ../../../core/pbf ../../../core/unitUtils ../../../geometry/ellipsoidUtils ../../../rest/support/Query ../../../rest/query/executeForIds ../../../rest/query/executeQueryJSON ../../../geometry/support/aaBoundingBox ../../../core/mathUtils ../../../geometry/Extent ../../../rest/support/FeatureSet ../../../rest/support/RelationshipQuery ../../../rest/support/TopFeaturesQuery ../../../rest/support/StatisticDefinition".split(" "),
function(z,A,x,E,F,p,G,w,u,q,H,B,I,J,K,L,M,P,Q,R,S,T,U,N,V,W,X,Y,Z,aa,ba,ca,da,ea,fa,t,O,C,ha,ia,ja,ka,la,ma,D){class y extends G{constructor(a){super(a);this.declaredClass="esri.arcade.featureset.sources.FeatureLayerDynamic";this._removeGeometry=!1;this.formulaCredential=this._overrideFields=null;this._requestStandardised=this._pageJustIds=!1;this._useDefinitionExpression=!0;a.spatialReference&&(this.spatialReference=a.spatialReference);this._transparent=!0;this._maxProcessing=1E3;this._layer=a.layer;
this._wset=null;void 0!==a.outFields&&(this._overrideFields=a.outFields);void 0!==a.includeGeometry&&(this._removeGeometry=!1===a.includeGeometry)}_maxQueryRate(){return u.defaultMaxRecords}end(){return this._layer}optimisePagingFeatureQueries(a){this._pageJustIds=a}get urlQueryPath(){return this._layer.parsedUrl.path||""}convertQueryToLruCacheKey(a){a=this.urlQueryPath+","+u.stableStringify(a.toJSON());return B.createMD5Hash(a,B.outputTypes.String)}async loadImpl(){if(!0===this._layer.loaded)return this._initialiseFeatureSet(),
this;await this._layer.load();this._initialiseFeatureSet();return this}_initialiseFeatureSet(){null==this.spatialReference&&(this.spatialReference=this._layer.spatialReference);this.geometryType=this._layer.geometryType;this.fields=this._layer.fields.slice(0);this.hasZ=!0===this._layer?.capabilities?.data?.supportsZ;this.hasM=!0===this._layer?.capabilities?.data?.supportsM;if(null!==this._overrideFields)if(1===this._overrideFields.length&&"*"===this._overrideFields[0])this._overrideFields=null;else{var a=
[];const b=[];for(const d of this.fields)if("oid"===d.type)a.push(d),b.push(d.name);else for(const c of this._overrideFields)if(c.toLowerCase()===d.name.toLowerCase()){a.push(d);b.push(d.name);break}this.fields=a;this._overrideFields=b}this._layer.source&&this._layer.source.sourceJSON&&(a=this._layer.source.sourceJSON.currentVersion,!0===this._layer.source.sourceJSON.useStandardizedQueries?(this._databaseType=u.FeatureServiceDatabaseType.StandardisedNoInterval,void 0!==a&&null!==a&&10.61<=a&&(this._databaseType=
u.FeatureServiceDatabaseType.Standardised)):void 0!==a&&null!==a&&(10.5<=a&&(this._databaseType=u.FeatureServiceDatabaseType.StandardisedNoInterval,this._requestStandardised=!0),10.61<=a&&(this._databaseType=u.FeatureServiceDatabaseType.Standardised)));this.objectIdField=this._layer.objectIdField;for(const b of this.fields)"global-id"===b.type&&(this.globalIdField=b.name);this._layer instanceof L?(this.typeIdField=this._layer.subtypeField??"",this.types=this._layer.subtypes):(this.typeIdField=this._layer.typeIdField??
"",this.types=this._layer.types)}_isInFeatureSet(){return u.IdState.InFeatureSet}async _refineSetBlock(a){return a}_candidateIdTransform(a){return a}async _getSet(a){return null===this._wset?(await this._ensureLoaded(),this._wset=a=await this._getFilteredSet("",null,null,null,a)):this._wset}async _runDatabaseProbe(a){await this._ensureLoaded();const b=new t;this.datesInUnknownTimezone&&(b.timeReferenceUnknownClient=!0);b.where=a.replace("OBJECTID",this._layer.objectIdField);try{return await this._layer.queryObjectIds(b),
!0}catch(d){return!1}}_canUsePagination(){return this._layer.capabilities&&this._layer.capabilities.query&&!0===this._layer.capabilities.query.supportsPagination?!0:!1}_cacheableFeatureSetSourceKey(){return this._layer.url}pbfSupportedForQuery(a){const b=this._layer?.capabilities?.query;return!a.outStatistics&&!0===b?.supportsFormatPBF&&!0===b?.supportsQuantizationEditMode}async queryPBF(a){a.quantizationParameters={mode:"edit"};return(await M.executeQuery(this._layer.parsedUrl,a,{format:"pbf"},{})).unquantize()}get gdbVersion(){return this._layer&&
this._layer.capabilities&&this._layer.capabilities.data&&this._layer.capabilities.data.isVersioned?this._layer.gdbVersion||"SDE.DEFAULT":""}nativeCapabilities(){return{title:this._layer.title??"",source:this,canQueryRelated:!0,capabilities:this._layer.capabilities,databaseType:this._databaseType,requestStandardised:this._requestStandardised}}executeQuery(a,b){a.returnZ=this.hasZ;a.returnM=this.hasM;const d="execute"===b?C.executeQueryJSON:"executeForCount"===b?N.executeForCount:O.executeForIds,c=
"execute"===b&&this.pbfSupportedForQuery(a);let e=null;if(this.recentlyUsedQueries){const f=this.convertQueryToLruCacheKey(a);e=this.recentlyUsedQueries.getFromCache(f);null===e&&(e=!0!==c?d(this._layer.parsedUrl.path,a):this.queryPBF(a),this.recentlyUsedQueries.addToCache(f,e),e=e.catch(h=>{this.recentlyUsedQueries?.removeFromCache(f);throw h;}))}this.featureSetQueryInterceptor&&this.featureSetQueryInterceptor.preLayerQueryCallback({layer:this._layer,query:a,method:b});null===e&&(e=!0!==c?d(this._layer.parsedUrl.path,
a):this.queryPBF(a));return e}async _getFilteredSet(a,b,d,c,e){const f=await this.databaseType();if(this.isTable()&&b&&null!==a&&""!==a)return new w([],[],!0,null);if(this._canUsePagination())return this._getFilteredSetUsingPaging(a,b,d,c,e);let h="",g=!1;null!==c&&this._layer.capabilities&&this._layer.capabilities.query&&!0===this._layer.capabilities.query.supportsOrderBy&&(h=c.constructClause(),g=!0);c=new t;this.datesInUnknownTimezone&&(c.timeReferenceUnknownClient=!0);c.where=null===d?null===
b?"1\x3d1":"":q.toWhereClause(d,f);this._requestStandardised&&(c.sqlFormat="standard");c.spatialRelationship=this._makeRelationshipEnum(a);c.outSpatialReference=this.spatialReference;c.orderByFields=""!==h?h.split(","):null;c.geometry=null===b?null:b;c.relationParameter=this._makeRelationshipParam(a);a=await this.executeQuery(c,"executeForIds");null===a&&(a=[]);this._checkCancelled(e);return new w([],a,g,null)}_expandPagedSet(a,b,d,c,e){return this._expandPagedSetFeatureSet(a,b,d,c,e)}async _getFilteredSetUsingPaging(a,
b,d,c,e){let f="",h=!1;null!==c&&this._layer.capabilities&&this._layer.capabilities.query&&!0===this._layer.capabilities.query.supportsOrderBy&&(f=c.constructClause(),h=!0);c=await this.databaseType();d=null===d?null===b?"1\x3d1":"":q.toWhereClause(d,c);this._layer.definitionExpression&&this._useDefinitionExpression&&(d=""!==d?"(("+this._layer.definitionExpression+") AND ("+d+"))":this._layer.definitionExpression);c=this._maxQueryRate();var g=this._layer.capabilities?.query.maxRecordCount;null!=g&&
g<c&&(c=g);g=null;if(!0===this._pageJustIds)g=new w([],["GETPAGES"],h,{spatialRel:this._makeRelationshipEnum(a),relationParam:this._makeRelationshipParam(a),outFields:this._layer.objectIdField,resultRecordCount:c,resultOffset:0,geometry:null===b?null:b,where:d,orderByFields:f,returnGeometry:!1,returnIdsOnly:"false",internal:{set:[],lastRetrieved:0,lastPage:0,fullyResolved:!1}});else{g=!0;!0===this._removeGeometry&&(g=!1);const n=this._overrideFields??this._fieldsIncludingObjectId(["*"]);g=new w([],
["GETPAGES"],h,{spatialRel:this._makeRelationshipEnum(a),relationParam:this._makeRelationshipParam(a),outFields:n.join(","),resultRecordCount:c,resultOffset:0,geometry:null===b?null:b,where:d,orderByFields:f,returnGeometry:g,returnIdsOnly:"false",internal:{set:[],lastRetrieved:0,lastPage:0,fullyResolved:!1}})}await this._expandPagedSet(g,c,0,1,e);return g}_clonePageDefinition(a){return null===a?null:!0!==a.groupbypage?{groupbypage:!1,spatialRel:a.spatialRel,relationParam:a.relationParam,outFields:a.outFields,
resultRecordCount:a.resultRecordCount,resultOffset:a.resultOffset,geometry:a.geometry,where:a.where,orderByFields:a.orderByFields,returnGeometry:a.returnGeometry,returnIdsOnly:a.returnIdsOnly,internal:a.internal}:{groupbypage:!0,spatialRel:a.spatialRel,relationParam:a.relationParam,outFields:a.outFields,resultRecordCount:a.resultRecordCount,useOIDpagination:a.useOIDpagination,generatedOid:a.generatedOid,groupByFieldsForStatistics:a.groupByFieldsForStatistics,resultOffset:a.resultOffset,outStatistics:a.outStatistics,
geometry:a.geometry,where:a.where,orderByFields:a.orderByFields,returnGeometry:a.returnGeometry,returnIdsOnly:a.returnIdsOnly,internal:a.internal}}async _getPhysicalPage(a,b,d){b=a.pagesDefinition.internal.lastRetrieved;var c=a.pagesDefinition.internal.lastPage,e=new t;this._requestStandardised&&(e.sqlFormat="standard");this.datesInUnknownTimezone&&(e.timeReferenceUnknownClient=!0);e.spatialRelationship=a.pagesDefinition.spatialRel;e.relationParameter=a.pagesDefinition.relationParam;e.outFields=a.pagesDefinition.outFields.split(",");
e.num=a.pagesDefinition.resultRecordCount;e.start=a.pagesDefinition.internal.lastPage;e.geometry=a.pagesDefinition.geometry;e.where=a.pagesDefinition.where;e.orderByFields=""!==a.pagesDefinition.orderByFields?a.pagesDefinition.orderByFields.split(","):null;e.returnGeometry=a.pagesDefinition.returnGeometry;e.outSpatialReference=this.spatialReference;e=await this.executeQuery(e,"execute");this._checkCancelled(d);if(a.pagesDefinition.internal.lastPage!==c)return"done";d=this._layer.objectIdField;for(c=
0;c<e.features.length;c++)a.pagesDefinition.internal.set[b+c]=e.features[c].attributes[d];if(!1===this._pageJustIds)for(c=0;c<e.features.length;c++)this._featureCache[e.features[c].attributes[d]]=e.features[c];if(void 0===e.exceededTransferLimit&&e.features.length!==a.pagesDefinition.resultRecordCount||!1===e.exceededTransferLimit)a.pagesDefinition.internal.fullyResolved=!0;a.pagesDefinition.internal.lastRetrieved=b+e.features.length;a.pagesDefinition.internal.lastPage+=a.pagesDefinition.resultRecordCount;
return"done"}_fieldsIncludingObjectId(a){if(null===a)return[this.objectIdField];a=a.slice(0);if(a.includes("*"))return a;let b=!1;for(const d of a)if(d.toUpperCase()===this.objectIdField.toUpperCase()){b=!0;break}!1===b&&a.push(this.objectIdField);return a}async _getFeatures(a,b,d,c){var e=[];-1!==b&&void 0===this._featureCache[b]&&e.push(b);if(!0===this._checkIfNeedToExpandKnownPage(a,this._maxProcessingRate()))return await this._expandPagedSet(a,this._maxProcessingRate(),0,0,c),this._getFeatures(a,
b,d,c);let f=0;for(let g=a._lastFetchedIndex;g<a._known.length;g++){a._lastFetchedIndex+=1;f++;if(void 0===this._featureCache[a._known[g]]){let n=!1;if(null!==this._layer._mode&&void 0!==this._layer._mode){var h=this._layer._mode;void 0!==h._featureMap[a._known[g]]&&(h=h._featureMap[a._known[g]],null!==h&&(n=!0,this._featureCache[a._known[g]]=h))}if(!1===n&&(a._known[g]!==b&&e.push(a._known[g]),e.length>=this._maxProcessingRate()-1))break}if(f>=d&&0===e.length)break}if(0===e.length)return"success";
a=new t;this._requestStandardised&&(a.sqlFormat="standard");this.datesInUnknownTimezone&&(a.timeReferenceUnknownClient=!0);a.objectIds=e;a.outFields=this._overrideFields??this._fieldsIncludingObjectId(["*"]);a.returnGeometry=!0;!0===this._removeGeometry&&(a.returnGeometry=!1);a.outSpatialReference=this.spatialReference;e=await this.executeQuery(a,"execute");this._checkCancelled(c);if(void 0!==e.error)throw new p.FeatureSetError(p.FeatureSetErrorCodes.RequestFailed,{reason:e.error});c=this._layer.objectIdField;
for(a=0;a<e.features.length;a++)this._featureCache[e.features[a].attributes[c]]=e.features[a];return"success"}async _getDistinctPages(a,b,d,c,e,f,h,g,n){await this._ensureLoaded();var k=await this.databaseType();let r=d.parseTree.column;var m=this._layer.fields??[];for(var l=0;l<m.length;l++)if(m[l].name.toLowerCase()===r.toLowerCase()){r=m[l].name;break}l=new t;this._requestStandardised&&(l.sqlFormat="standard");this.datesInUnknownTimezone&&(l.timeReferenceUnknownClient=!0);k=null===f?null===e?"1\x3d1":
"":q.toWhereClause(f,k);this._layer.definitionExpression&&this._useDefinitionExpression&&(k=""!==k?"(("+this._layer.definitionExpression+") AND ("+k+"))":this._layer.definitionExpression);l.where=k;l.spatialRelationship=this._makeRelationshipEnum(c);l.relationParameter=this._makeRelationshipParam(c);l.geometry=null===e?null:e;l.returnDistinctValues=!0;l.returnGeometry=!1;l.outFields=[r];k=await this.executeQuery(l,"execute");this._checkCancelled(n);if(!k.hasOwnProperty("features"))throw new p.FeatureSetError(p.FeatureSetErrorCodes.InvalidStatResponse);
l=!1;for(var v=0;v<m.length;v++)if(m[v].name===r){"date"===m[v].type&&(l=!0);break}for(m=0;m<k.features.length&&!(l?(v=k.features[m].attributes[r],null!==v?g.push(new Date(v)):g.push(v)):g.push(k.features[m].attributes[r]),g.length>=h);m++);return 0===k.features.length?g:k.features.length===this._layer.capabilities?.query.maxRecordCount&&g.length<h?{calculated:!0,result:await this._getDistinctPages(a+k.features.length,b,d,c,e,f,h,g,n)}:g}async _distinctStat(a,b,d,c,e,f,h){return{calculated:!0,result:await this._getDistinctPages(0,
a,b,d,c,e,f,[],h)}}isTable(){return this._layer.isTable||null===this._layer.geometryType||"table"===this._layer.type||""===this._layer.geometryType||"esriGeometryNull"===this._layer.geometryType}async _countstat(a,b,d,c){const e=await this.databaseType();a=new t;this._requestStandardised&&(a.sqlFormat="standard");if(this.isTable()&&d&&null!==b&&""!==b)return{calculated:!0,result:0};c=null===c?null===d?"1\x3d1":"":q.toWhereClause(c,e);this._layer.definitionExpression&&this._useDefinitionExpression&&
(c=""!==c?"(("+this._layer.definitionExpression+") AND ("+c+"))":this._layer.definitionExpression);a.where=c;this.datesInUnknownTimezone&&(a.timeReferenceUnknownClient=!0);a.where=c;a.spatialRelationship=this._makeRelationshipEnum(b);a.relationParameter=this._makeRelationshipParam(b);a.geometry=null===d?null:d;a.returnGeometry=!1;return{calculated:!0,result:await this.executeQuery(a,"executeForCount")}}async _stats(a,b,d,c,e,f,h){await this._ensureLoaded();const g=this._layer.capabilities&&this._layer.capabilities.query&&
!0===this._layer.capabilities.query.supportsSqlExpression,n=this._layer.capabilities&&this._layer.capabilities.query&&!0===this._layer.capabilities.query.supportsStatistics,k=this._layer.capabilities&&this._layer.capabilities.query&&!0===this._layer.capabilities.query.supportsDistinct;if("count"===a)return k?this._countstat(a,d,c,e):{calculated:!1};if(!1===n||!1===q.isSingleField(b)&&!1===g||!1===b.isStandardized)return""!==d||null!==e?{calculated:!1}:this._manualStat(a,b,f,h);if("distinct"===a)return!1===
k?""!==d||null!==e?{calculated:!1}:this._manualStat(a,b,f,h):this._distinctStat(a,b,d,c,e,f,h);h=await this.databaseType();if(this.isTable()&&c&&null!==d&&""!==d)return{calculated:!0,result:null};f=new t;this._requestStandardised&&(f.sqlFormat="standard");e=null===e?null===c?"1\x3d1":"":q.toWhereClause(e,h);this._layer.definitionExpression&&this._useDefinitionExpression&&(e=""!==e?"(("+this._layer.definitionExpression+") AND ("+e+"))":this._layer.definitionExpression);f.where=e;f.spatialRelationship=
this._makeRelationshipEnum(d);f.relationParameter=this._makeRelationshipParam(d);f.geometry=null===c?null:c;this.datesInUnknownTimezone&&(f.timeReferenceUnknownClient=!0);d=new D;d.statisticType=H.decodeStatType(a);d.onStatisticField=q.toWhereClause(b,h);d.outStatisticFieldName="ARCADE_STAT_RESULT";f.returnGeometry=!1;a="ARCADE_STAT_RESULT";f.outStatistics=[d];b=await this.executeQuery(f,"execute");if(!b.hasOwnProperty("features")||0===b.features.length)throw new p.FeatureSetError(p.FeatureSetErrorCodes.InvalidStatResponse);
d=!1;c=b.fields??[];for(e=0;e<c.length;e++)if("ARCADE_STAT_RESULT"===c[e].name.toUpperCase()){a=c[e].name;"date"===c[e].type&&(d=!0);break}return d?(d=b.features[0].attributes[a],null!==d&&(d=new Date(b.features[0].attributes[a])),{calculated:!0,result:d}):{calculated:!0,result:b.features[0].attributes[a]}}_stat(a,b,d,c,e,f,h){return this._stats(a,b,d,c,e,f,h)}async _canDoAggregates(a,b){await this._ensureLoaded();a=!1;var d=this._layer.capabilities?.query;const c=!0===d?.supportsSqlExpression;null!=
d&&!0===d.supportsStatistics&&!0===d.supportsOrderBy&&(a=!0);if(a)for(d=0;d<b.length-1;d++)!1===b[d].workingexpr?.isStandardized?a=!1:!1===q.isSingleField(b[d].workingexpr)&&!1===c&&(a=!1);return!1===a?!1:!0}_makeRelationshipEnum(a){if(a.includes("esriSpatialRelRelation"))return"relation";switch(a){case "esriSpatialRelRelation":return"relation";case "esriSpatialRelIntersects":return"intersects";case "esriSpatialRelContains":return"contains";case "esriSpatialRelOverlaps":return"overlaps";case "esriSpatialRelWithin":return"within";
case "esriSpatialRelTouches":return"touches";case "esriSpatialRelCrosses":return"crosses";case "esriSpatialRelEnvelopeIntersects":return"envelope-intersects"}return a}_makeRelationshipParam(a){return a.includes("esriSpatialRelRelation")?a.split(":")[1]:""}async _getAggregatePagesDataSourceDefinition(a,b,d,c,e,f,h){await this._ensureLoaded();const g=await this.databaseType();let n="",k=!1,r=!1;null!==f&&this._layer.capabilities&&this._layer.capabilities.query&&!0===this._layer.capabilities.query.supportsOrderBy&&
(n=f.constructClause(),r=!0);this._layer.capabilities&&this._layer.capabilities.query&&!1===this._layer.capabilities.query.supportsPagination&&(r=!1,k=!0,n=this._layer.objectIdField);f=[];for(var m=0;m<b.length;m++){const l=new D;l.onStatisticField=null!==b[m].workingexpr?q.toWhereClause(b[m].workingexpr,g):"";l.outStatisticFieldName=b[m].field;l.statisticType=b[m].toStatisticsName();f.push(l)}""===n&&(n=a.join(","));b=this._maxQueryRate();m=this._layer.capabilities?.query.maxRecordCount;null!=m&&
m<b&&(b=m);e=null===e?null===c?"1\x3d1":"":q.toWhereClause(e,g);this._layer.definitionExpression&&this._useDefinitionExpression&&(e=""!==e?"(("+this._layer.definitionExpression+") AND ("+e+"))":this._layer.definitionExpression);return new w([],["GETPAGES"],r,{groupbypage:!0,spatialRel:this._makeRelationshipEnum(d),relationParam:this._makeRelationshipParam(d),outFields:["*"],useOIDpagination:k,generatedOid:h,resultRecordCount:b,resultOffset:0,groupByFieldsForStatistics:a,outStatistics:f,geometry:null===
c?null:c,where:e,orderByFields:n,returnGeometry:!1,returnIdsOnly:!1,internal:{lastMaxId:-1,set:[],lastRetrieved:0,lastPage:0,fullyResolved:!1}})}async _getAgregagtePhysicalPage(a,b,d){var c=a.pagesDefinition.where;!0===a.pagesDefinition.useOIDpagination&&(c=""!==c?"("+c+") AND ("+a.pagesDefinition.generatedOid+"\x3e"+a.pagesDefinition.internal.lastMaxId.toString()+")":a.pagesDefinition.generatedOid+"\x3e"+a.pagesDefinition.internal.lastMaxId.toString());b=a.pagesDefinition.internal.lastRetrieved;
var e=a.pagesDefinition.internal.lastPage;const f=new t;this._requestStandardised&&(f.sqlFormat="standard");f.where=c;f.spatialRelationship=a.pagesDefinition.spatialRel;f.relationParameter=a.pagesDefinition.relationParam;f.outFields=a.pagesDefinition.outFields;f.outStatistics=a.pagesDefinition.outStatistics;f.geometry=a.pagesDefinition.geometry;f.groupByFieldsForStatistics=a.pagesDefinition.groupByFieldsForStatistics;f.num=a.pagesDefinition.resultRecordCount;f.start=a.pagesDefinition.internal.lastPage;
f.returnGeometry=a.pagesDefinition.returnGeometry;this.datesInUnknownTimezone&&(f.timeReferenceUnknownClient=!0);f.orderByFields=""!==a.pagesDefinition.orderByFields?a.pagesDefinition.orderByFields.split(","):null;if(this.isTable()&&f.geometry&&f.spatialRelationship)return[];c=await this.executeQuery(f,"execute");this._checkCancelled(d);if(!c.hasOwnProperty("features"))throw new p.FeatureSetError(p.FeatureSetErrorCodes.InvalidStatResponse);d=[];if(a.pagesDefinition.internal.lastPage!==e)return[];
0<c.features.length&&void 0===c.features[0].attributes[a.pagesDefinition.generatedOid]&&(a.pagesDefinition.generatedOid=a.pagesDefinition.generatedOid.toLowerCase());for(e=0;e<c.features.length;e++)a.pagesDefinition.internal.set[b+e]=c.features[e].attributes[a.pagesDefinition.generatedOid];for(e=0;e<c.features.length;e++)d.push(new z({attributes:c.features[e].attributes,geometry:null}));if(!0===a.pagesDefinition.useOIDpagination)0===c.features.length?a.pagesDefinition.internal.fullyResolved=!0:a.pagesDefinition.internal.lastMaxId=
c.features[c.features.length-1].attributes[a.pagesDefinition.generatedOid];else if(void 0===c.exceededTransferLimit&&c.features.length!==a.pagesDefinition.resultRecordCount||!1===c.exceededTransferLimit)a.pagesDefinition.internal.fullyResolved=!0;a.pagesDefinition.internal.lastRetrieved=b+c.features.length;a.pagesDefinition.internal.lastPage+=a.pagesDefinition.resultRecordCount;return d}static create(a,b,d,c,e){a=new K({url:a,outFields:null===b?["*"]:b});return new y({layer:a,spatialReference:d,lrucache:c,
interceptor:e})}relationshipMetaData(){return this._layer&&this._layer.source&&this._layer.source.sourceJSON?.relationships?this._layer.source.sourceJSON.relationships:[]}serviceUrl(){return u.extractServiceUrl(this._layer.parsedUrl.path)}async queryAttachments(a,b,d,c,e){var f=this._layer.capabilities;if(f?.data.supportsAttachment&&f?.operations.supportsQueryAttachments){f={objectIds:[a],returnMetadata:e};if(b&&0<b||d&&0<d)f.size=[b&&0<b?b:0,d&&0<d?d:b+1];c&&0<c.length&&(f.attachmentTypes=c);this.featureSetQueryInterceptor&&
this.featureSetQueryInterceptor.preLayerQueryCallback({layer:this._layer,query:f,method:"attachments"});b=await this._layer.queryAttachments(f);const h=[];b&&b[a]&&b[a].forEach(g=>{const n=this._layer.parsedUrl.path+"/"+a.toString()+"/attachments/"+g.id.toString();let k=null;e&&g.exifInfo&&(k=F.convertJsonToArcade(g.exifInfo,"system",!0));h.push(new E(g.id,g.name,g.contentType,g.size,n,k,g.keywords??null))});return h}return[]}async queryRelatedFeatures(a){var b={f:"json",relationshipId:a.relationshipId.toString(),
definitionExpression:a.where,outFields:a.outFields?.join(","),returnGeometry:a.returnGeometry.toString()};void 0!==a.resultOffset&&null!==a.resultOffset&&(b.resultOffset=a.resultOffset.toString());void 0!==a.resultRecordCount&&null!==a.resultRecordCount&&(b.resultRecordCount=a.resultRecordCount.toString());a.orderByFields&&(b.orderByFields=a.orderByFields.join(","));a.objectIds&&0<a.objectIds.length&&(b.objectIds=a.objectIds.join(","));a.outSpatialReference&&(b.outSR=J.srToRESTValue(a.outSpatialReference));
this.featureSetQueryInterceptor&&this.featureSetQueryInterceptor.preRequestCallback({layer:this._layer,queryPayload:b,method:"relatedrecords",url:this._layer.parsedUrl.path+"/queryRelatedRecords"});b=await x(this._layer.parsedUrl.path+"/queryRelatedRecords",{responseType:"json",query:b});if(b.data){a={};b=b.data;if(b?.relatedRecordGroups){const d=b.spatialReference;for(const c of b.relatedRecordGroups){const e=c.objectId,f=[];for(const h of c.relatedRecords){h.geometry&&(h.geometry.spatialReference=
d);const g=new z({geometry:h.geometry?I.fromJSON(h.geometry):null,attributes:h.attributes});f.push(g)}a[e]={features:f,exceededTransferLimit:!0===b.exceededTransferLimit}}}return a}throw new p.FeatureSetError(p.FeatureSetErrorCodes.InvalidRequest);}async getFeatureByObjectId(a,b){const d=new t;d.outFields=b;d.returnGeometry=!1;d.outSpatialReference=this.spatialReference;d.where=this.objectIdField+"\x3d"+a.toString();this.datesInUnknownTimezone&&(d.timeReferenceUnknownClient=!0);this.featureSetQueryInterceptor&&
this.featureSetQueryInterceptor.preLayerQueryCallback({layer:this._layer,query:d,method:"execute"});a=await C.executeQueryJSON(this._layer.parsedUrl.path,d);return 1===a.features.length?a.features[0]:null}async getIdentityUser(){await this.load();const a=A.id?.findCredential(this._layer.url);return a?a.userId:null}async getOwningSystemUrl(){await this.load();var a=A.id?.findServerInfo(this._layer.url);if(a)return a.owningSystemUrl;a=this._layer.url;const b=a.toLowerCase().indexOf("/rest/services");
if(a=-1<b?a.substring(0,b):a)try{const d=await x(a+"/rest/info",{query:{f:"json"}});a="";d.data?.owningSystemUrl&&(a=d.data.owningSystemUrl);return a}catch(d){}return""}getDataSourceFeatureSet(){const a=new y({layer:this._layer,spatialReference:this.spatialReference??void 0,outFields:this._overrideFields??void 0,includeGeometry:!this._removeGeometry,lrucache:this.recentlyUsedQueries??void 0,interceptor:this.featureSetQueryInterceptor??void 0});a._useDefinitionExpression=!1;return a}get preferredTimeZone(){return this._layer.preferredTimeZone??
null}get dateFieldsTimeZone(){return this._layer.dateFieldsTimeZone??null}get datesInUnknownTimezone(){return this._layer.datesInUnknownTimezone}get editFieldsInfo(){return this._layer.editFieldsInfo??null}get timeInfo(){return this._layer.timeInfo??null}async getFeatureSetInfo(){if(this.fsetInfo)return this.fsetInfo;let a=null,{parsedUrl:{path:b},serviceItemId:d=null}=this._layer;if(b){var c=await x(b,{responseType:"json",query:{f:"json"}});a=c?.data?.name??null;d=c?.data?.serviceItemId??null}c=
this._layer.title&&null!==(this._layer.parent??null);this.featureSetInfo={layerId:this._layer.layerId,layerName:""===a?null:a,itemId:""===d?null:d,serviceLayerUrl:""===b?null:b,webMapLayerId:c?this._layer.id??null:null,webMapLayerTitle:c?this._layer.title??null:null,className:null,objectClassId:null};return this.fsetInfo}}return y});