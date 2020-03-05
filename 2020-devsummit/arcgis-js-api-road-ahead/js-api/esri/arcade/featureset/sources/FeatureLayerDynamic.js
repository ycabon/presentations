// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/extendsHelper ../../../Graphic ../../../request ../../Attachment ../support/FeatureSet ../support/IdSet ../support/shared ../support/sqlUtils ../support/sqlUtils ../support/stats ../../../core/MD5 ../../../core/promiseUtils ../../../geometry/support/jsonUtils ../../../layers/FeatureLayer ../../../layers/graphics/featureConversionUtils ../../../tasks/QueryTask ../../../tasks/operations/query ../../../tasks/support/FeatureSet ../../../tasks/support/Query ../../../tasks/support/StatisticDefinition".split(" "),
function(O,P,E,y,F,G,H,x,v,w,z,I,A,p,J,K,L,B,M,N,u,C){return function(D){function d(a){var c=D.call(this,a)||this;c.declaredClass="esri.arcade.featureset.sources.FeatureLayerDynamic";c._removeGeometry=!1;c._overrideFields=null;c.formulaCredential=null;c._pageJustIds=!1;c._requestStandardised=!1;a.spatialReference&&(c.spatialReference=a.spatialReference);c._transparent=!0;c._maxProcessing=1E3;c._layer=a.layer;c._wset=null;void 0!==a.outFields&&(c._overrideFields=a.outFields);void 0!==a.includeGeometry&&
(c._removeGeometry=!1===a.includeGeometry);return c}E(d,D);d.prototype._maxQueryRate=function(){return v.defaultMaxRecords};d.prototype.end=function(){return this._layer};d.prototype.optimisePagingFeatureQueries=function(a){this._pageJustIds=a};d.prototype.convertQueryToLruCacheKey=function(a){a=v.stableStringify(a.toJSON());return A.createMD5Hash(a,A.outputTypes.String)};d.prototype.load=function(){var a=this;null===this._loadPromise&&(this._loadPromise=p.create(function(c,g){try{!0===a._layer.loaded?
(a._initialiseFeatureSet(),c(a)):(a._layer.when().then(function(){try{a._initialiseFeatureSet(),c(a)}catch(e){g(e)}},g),a._layer.load())}catch(e){g(e)}}));return this._loadPromise};d.prototype._initialiseFeatureSet=function(){null==this.spatialReference&&(this.spatialReference=this._layer.spatialReference);this.geometryType=this._layer.geometryType;this.fields=this._layer.fields.slice(0);if(this._layer.outFields&&(1!==this._layer.outFields.length||"*"!==this._layer.outFields[0])){for(var a=[],c=0,
g=this.fields;c<g.length;c++){var e=g[c];if("oid"===e.type)a.push(e);else for(var h=0,b=this._layer.outFields;h<b.length;h++){var l=b[h];if(l.toLowerCase()===e.name.toLowerCase()){a.push(e);break}}}this.fields=a}if(null!==this._overrideFields)if(1===this._overrideFields.length&&"*"===this._overrideFields[0])this._overrideFields=null;else{a=[];c=[];g=0;for(h=this.fields;g<h.length;g++)if(e=h[g],"oid"===e.type)a.push(e),c.push(e.name);else for(var b=0,f=this._overrideFields;b<f.length;b++)if(l=f[b],
l.toLowerCase()===e.name.toLowerCase()){a.push(e);c.push(e.name);break}this.fields=a;this._overrideFields=c}this._layer.source&&this._layer.source.sourceJSON&&(a=this._layer.source.sourceJSON.currentVersion,!0===this._layer.source.sourceJSON.useStandardizedQueries?(this._databaseType=v.FeatureServiceDatabaseType.StandardisedNoInterval,void 0!==a&&null!==a&&10.61<=a&&(this._databaseType=v.FeatureServiceDatabaseType.Standardised)):void 0!==a&&null!==a&&(10.5<=a&&(this._databaseType=v.FeatureServiceDatabaseType.StandardisedNoInterval,
this._requestStandardised=!0),10.61<=a&&(this._databaseType=v.FeatureServiceDatabaseType.Standardised)));this.objectIdField=this._layer.objectIdField;this.hasM=this._layer.supportsM;this.hasZ=this._layer.supportsZ;this.typeIdField=this._layer.typeIdField;this.types=this._layer.types};d.prototype._isInFeatureSet=function(){return v.IdState.InFeatureSet};d.prototype._refineSetBlock=function(a){return p.resolve(a)};d.prototype._candidateIdTransform=function(a){return a};d.prototype._getSet=function(a){var c=
this;return null===this._wset?this._ensureLoaded().then(function(){return c._getFilteredSet("",null,null,null,a)}).then(function(a){return c._wset=a}):p.resolve(this._wset)};d.prototype._runDatabaseProbe=function(a){var c=this;return p.create(function(g,e){try{c._ensureLoaded().then(function(){try{var h=new u;h.where=a.replace("OBJECTID",c._layer.objectIdField);c._layer.queryObjectIds(h).then(function(){g(!0)},function(){try{g(!1)}catch(b){e(b)}})}catch(b){e(b)}})}catch(h){e(h)}})};d.prototype._canUsePagination=
function(){return this._layer.capabilities&&this._layer.capabilities.query&&!0===this._layer.capabilities.query.supportsPagination?!0:!1};d.prototype._cacheableFeatureSetSourceKey=function(){return this._layer.url};d.prototype.pbfSupportedForQuery=function(a){return!a.outStatistics&&this._layer&&this._layer.capabilities&&this._layer.capabilities.query&&!0===this._layer.capabilities.query.supportsFormatPBF&&!0===this._layer.capabilities.query.supportsQuantizationEditMode};d.prototype.queryPBF=function(a){a.quantizationParameters=
{mode:"edit"};return M.executeQueryPBF(this._layer.parsedUrl,a,{type:"optimized"}).then(function(a){return N.fromJSON(L.convertToFeatureSet(a.data)).unquantize()})};d.prototype.nativeCapabilities=function(){return{title:this._layer.title,source:this,canQueryRelated:!0,capabilities:this._layer.capabilities,databaseType:this._databaseType,requestStandardised:this._requestStandardised}};d.prototype.executeQuery=function(a,c){var g=this,e=new B({url:this._layer.parsedUrl.path}),h="execute"===c&&this.pbfSupportedForQuery(a),
b=null;if(this.recentlyUsedQueries){var l=this.convertQueryToLruCacheKey(a),b=this.recentlyUsedQueries.getFromCache(l);null===b&&(b=!0!==h?e[c](a):this.queryPBF(a),this.recentlyUsedQueries.addToCache(l,b),b=b.catch(function(a){g.recentlyUsedQueries.removeFromCache(l);throw a;}))}null===b&&(b=!0!==h?e[c](a):this.queryPBF(a));return b};d.prototype._getFilteredSet=function(a,c,g,e,h){var b=this;return this.databaseType().then(function(l){if(b.isTable()&&c&&null!==a&&""!==a)return new x([],[],!0,null);
if(b._canUsePagination())return b._getFilteredSetUsingPaging(a,c,g,e,h);var f="",d=!1;null!==e&&b._layer.capabilities&&b._layer.capabilities.query&&!0===b._layer.capabilities.query.supportsOrderBy&&(f=e.constructClause(),d=!0);var k=new u;k.where=null===g?null===c?"1\x3d1":"":w.toWhereClause(g,l);b._requestStandardised&&(k.sqlFormat="standard");k.spatialRelationship=b._makeRelationshipEnum(a);k.outSpatialReference=b.spatialReference;k.orderByFields=""!==f?f.split(","):null;k.geometry=null===c?null:
c;k.relationParameter=b._makeRelationshipParam(a);return b.executeQuery(k,"executeForIds").then(function(a){null===a&&(a=[]);b._checkCancelled(h);return new x([],a,d,null)})})};d.prototype._expandPagedSet=function(a,c,g,e,h){return this._expandPagedSetFeatureSet(a,c,g,e,h)};d.prototype._getFilteredSetUsingPaging=function(a,c,g,e,h){var b=this;try{var l="",f=!1;null!==e&&this._layer.capabilities&&this._layer.capabilities.query&&!0===this._layer.capabilities.query.supportsOrderBy&&(l=e.constructClause(),
f=!0);return this.databaseType().then(function(e){e=null===g?null===c?"1\x3d1":"":w.toWhereClause(g,e);b._layer.definitionExpression&&(e=""!==e?"(("+b._layer.definitionExpression+") AND ("+e+"))":b._layer.definitionExpression);var k=b._maxQueryRate(),d=b._layer.capabilities.query.maxRecordCount;void 0!==d&&d<k&&(k=d);var m=null;if(!0===b._pageJustIds)m=new x([],["GETPAGES"],f,{spatialRel:b._makeRelationshipEnum(a),relationParam:b._makeRelationshipParam(a),outFields:b._layer.objectIdField,resultRecordCount:k,
resultOffset:0,geometry:null===c?null:c,where:e,orderByFields:l,returnGeometry:!1,returnIdsOnly:"false",internal:{set:[],lastRetrieved:0,fullyResolved:!1}});else{d=!0;!0===b._removeGeometry&&(d=!1);var n=null!==b._overrideFields?b._overrideFields:b._fieldsIncludingObjectId(b._layer.outFields?b._layer.outFields:["*"]),m=new x([],["GETPAGES"],f,{spatialRel:b._makeRelationshipEnum(a),relationParam:b._makeRelationshipParam(a),outFields:n.join(","),resultRecordCount:k,resultOffset:0,geometry:null===c?
null:c,where:e,orderByFields:l,returnGeometry:d,returnIdsOnly:"false",internal:{set:[],lastRetrieved:0,fullyResolved:!1}})}return b._expandPagedSet(m,k,0,1,h).then(function(){return m})})}catch(r){return p.reject(r)}};d.prototype._clonePageDefinition=function(a){return null===a?null:!0!==a.groupbypage?{groupbypage:!1,spatialRel:a.spatialRel,relationParam:a.relationParam,outFields:a.outFields,resultRecordCount:a.resultRecordCount,resultOffset:a.resultOffset,geometry:a.geometry,where:a.where,orderByFields:a.orderByFields,
returnGeometry:a.returnGeometry,returnIdsOnly:a.returnIdsOnly,internal:a.internal}:{groupbypage:!0,spatialRel:a.spatialRel,relationParam:a.relationParam,outFields:a.outFields,resultRecordCount:a.resultRecordCount,useOIDpagination:a.useOIDpagination,generatedOid:a.generatedOid,groupByFieldsForStatistics:a.groupByFieldsForStatistics,resultOffset:a.resultOffset,outStatistics:a.outStatistics,geometry:a.geometry,where:a.where,orderByFields:a.orderByFields,returnGeometry:a.returnGeometry,returnIdsOnly:a.returnIdsOnly,
internal:a.internal}};d.prototype._getPhysicalPage=function(a,c,g){var e=this;try{var h=a.pagesDefinition.internal.lastRetrieved,b=new u;this._requestStandardised&&(b.sqlFormat="standard");b.spatialRelationship=a.pagesDefinition.spatialRel;b.relationParameter=a.pagesDefinition.relationParam;b.outFields=a.pagesDefinition.outFields.split(",");b.num=a.pagesDefinition.resultRecordCount;b.start=a.pagesDefinition.internal.lastRetrieved;b.geometry=a.pagesDefinition.geometry;b.where=a.pagesDefinition.where;
b.orderByFields=""!==a.pagesDefinition.orderByFields?a.pagesDefinition.orderByFields.split(","):null;b.returnGeometry=a.pagesDefinition.returnGeometry;b.outSpatialReference=this.spatialReference;return this.executeQuery(b,"execute").then(function(b){e._checkCancelled(g);if(a.pagesDefinition.internal.lastRetrieved!==h)return"done";for(var c=0;c<b.features.length;c++)a.pagesDefinition.internal.set[h+c]=b.features[c].attributes[e._layer.objectIdField];if(!1===e._pageJustIds)for(c=0;c<b.features.length;c++)e._featureCache[b.features[c].attributes[e._layer.objectIdField]]=
b.features[c];b.features.length!==a.pagesDefinition.resultRecordCount&&(a.pagesDefinition.internal.fullyResolved=!0);a.pagesDefinition.internal.lastRetrieved=h+a.pagesDefinition.resultRecordCount;return"done"})}catch(l){return p.reject(l)}};d.prototype._fieldsIncludingObjectId=function(a){if(null===a)return[this.objectIdField];a=a.slice(0);if(-1<a.indexOf("*"))return a;for(var c=!1,g=0;g<a.length;g++)if(a[g].toUpperCase()===this.objectIdField.toUpperCase()){c=!0;break}!1===c&&a.push(this.objectIdField);
return a};d.prototype._getFeatures=function(a,c,g,e){var h=this,b=[];try{-1!==c&&void 0===this._featureCache[c]&&b.push(c);if(!0===this._checkIfNeedToExpandKnownPage(a,this._maxProcessingRate()))return this._expandPagedSet(a,this._maxProcessingRate(),0,0,e).then(function(){return h._getFeatures(a,c,g,e)});for(var l=0,f=a._lastFetchedIndex;f<a._known.length;f++){a._lastFetchedIndex+=1;l++;if(void 0===this._featureCache[a._known[f]]){var d=!1;if(null!==this._layer._mode&&void 0!==this._layer._mode){var k=
this._layer._mode;if(void 0!==k._featureMap[a._known[f]]){var t=k._featureMap[a._known[f]];null!==t&&(d=!0,this._featureCache[a._known[f]]=t)}}if(!1===d&&(a._known[f]!==c&&b.push(a._known[f]),b.length>=this._maxProcessingRate()-1))break}if(l>=g&&0===b.length)break}if(0===b.length)return p.resolve("success");try{var m=new u;this._requestStandardised&&(m.sqlFormat="standard");m.objectIds=b;m.outFields=null!==this._overrideFields?this._overrideFields:this._fieldsIncludingObjectId(this._layer.outFields?
this._layer.outFields:["*"]);m.returnGeometry=!0;!0===this._removeGeometry&&(m.returnGeometry=!1);m.outSpatialReference=this.spatialReference;return this.executeQuery(m,"execute").then(function(a){h._checkCancelled(e);if(void 0!==a.error)return p.reject(Error(a.error));for(var b=0;b<a.features.length;b++)h._featureCache[a.features[b].attributes[h._layer.objectIdField]]=a.features[b];return"success"})}catch(n){return p.reject(n)}}catch(n){return p.reject(n)}};d.prototype._getDistinctPages=function(a,
c,g,e,h,b,l,f,d){var k=this;return this._ensureLoaded().then(function(){return k.databaseType()}).then(function(r){for(var m=g.parseTree.column,n=0;n<k._layer.fields.length;n++)if(k._layer.fields[n].name.toLowerCase()===m.toLowerCase()){m=k._layer.fields[n].name;break}n=new u;k._requestStandardised&&(n.sqlFormat="standard");r=null===b?null===h?"1\x3d1":"":w.toWhereClause(b,r);k._layer.definitionExpression&&(r=""!==r?"(("+k._layer.definitionExpression+") AND ("+r+"))":k._layer.definitionExpression);
n.where=r;n.spatialRelationship=k._makeRelationshipEnum(e);n.relationParameter=k._makeRelationshipParam(e);n.geometry=null===h?null:h;n.returnDistinctValues=!0;n.returnGeometry=!1;n.outFields=[m];return k.executeQuery(n,"execute").then(function(n){k._checkCancelled(d);if(!n.hasOwnProperty("features"))return p.reject(Error("Unnexected Result querying statistics from layer"));for(var r=!1,q=0;q<k._layer.fields.length;q++)if(k._layer.fields[q].name===m){"date"===k._layer.fields[q].type&&(r=!0);break}for(q=
0;q<n.features.length;q++){if(r){var t=n.features[q].attributes[m];null!==t?f.push(new Date(t)):f.push(t)}else f.push(n.features[q].attributes[m]);if(f.length>=l)break}return 0===n.features.length?f:n.features.length===k._layer.capabilities.query.maxRecordCount&&f.length<l?k._getDistinctPages(a+n.features.length,c,g,e,h,b,l,f,d).then(function(a){return{calculated:!0,result:a}}):f})})};d.prototype._distinctStat=function(a,c,g,e,h,b,l){return this._getDistinctPages(0,a,c,g,e,h,b,[],l).then(function(a){return{calculated:!0,
result:a}})};d.prototype.isTable=function(){return this._layer.isTable||null===this._layer.geometryType||"table"===this._layer.type||""===this._layer.geometryType};d.prototype._countstat=function(a,c,g,e){var h=this;return this.databaseType().then(function(a){var b=new u;h._requestStandardised&&(b.sqlFormat="standard");if(h.isTable()&&g&&null!==c&&""!==c)return{calculated:!0,result:0};a=null===e?null===g?"1\x3d1":"":w.toWhereClause(e,a);h._layer.definitionExpression&&(a=""!==a?"(("+h._layer.definitionExpression+
") AND ("+a+"))":h._layer.definitionExpression);b.where=a;b.where=a;b.spatialRelationship=h._makeRelationshipEnum(c);b.relationParameter=h._makeRelationshipParam(c);b.geometry=null===g?null:g;b.returnGeometry=!1;return h.executeQuery(b,"executeForCount").then(function(a){return{calculated:!0,result:a}})})};d.prototype._stats=function(a,c,g,e,h,b,d){var f=this;return this._ensureLoaded().then(function(){var l=f._layer.capabilities&&f._layer.capabilities.query&&!0===f._layer.capabilities.query.supportsSqlExpression,
k=f._layer.capabilities&&f._layer.capabilities.query&&!0===f._layer.capabilities.query.supportsStatistics,t=f._layer.capabilities&&f._layer.capabilities.query&&!0===f._layer.capabilities.query.supportsDistinct;return"count"===a?t?f._countstat(a,g,e,h):{calculated:!1}:!1===k||!1===z.isSingleField(c)&&!1===l||!1===c.isStandardized?""!==g||null!==h?{calculated:!1}:f._manualStat(a,c,b,d):"distinct"===a?!1===t?""!==g||null!==h?{calculated:!1}:f._manualStat(a,c,b,d):f._distinctStat(a,c,g,e,h,b,d):f.databaseType().then(function(b){if(f.isTable()&&
e&&null!==g&&""!==g)return{calculated:!0,result:null};var d=new u;f._requestStandardised&&(d.sqlFormat="standard");var k=null===h?null===e?"1\x3d1":"":w.toWhereClause(h,b);f._layer.definitionExpression&&(k=""!==k?"(("+f._layer.definitionExpression+") AND ("+k+"))":f._layer.definitionExpression);d.where=k;d.spatialRelationship=f._makeRelationshipEnum(g);d.relationParameter=f._makeRelationshipParam(g);d.geometry=null===e?null:e;k=new C;k.statisticType=I.decodeStatType(a);k.onStatisticField=w.toWhereClause(c,
b);k.outStatisticFieldName="ARCADE_STAT_RESULT";d.returnGeometry=!1;var l="ARCADE_STAT_RESULT";d.outStatistics=[k];return f.executeQuery(d,"execute").then(function(a){if(!a.hasOwnProperty("features")||0===a.features.length)return p.reject(Error("Unnexected Result querying statistics from layer"));for(var b=!1,c=0;c<a.fields.length;c++)if("ARCADE_STAT_RESULT"===a.fields[c].name.toUpperCase()){l=a.fields[c].name;"date"===a.fields[c].type&&(b=!0);break}return b?(b=a.features[0].attributes[l],null!==
b&&(b=new Date(a.features[0].attributes[l])),{calculated:!0,result:b}):{calculated:!0,result:a.features[0].attributes[l]}})})})};d.prototype._stat=function(a,c,g,e,d,b,l){return this._stats(a,c,g,e,d,b,l)};d.prototype._canDoAggregates=function(a,c){var g=this;return this._ensureLoaded().then(function(){var a=!1,d=g._layer.capabilities&&g._layer.capabilities.query&&!0===g._layer.capabilities.query.supportsSqlExpression;void 0!==g._layer.capabilities&&null!==g._layer.capabilities.query&&!0===g._layer.capabilities.query.supportsStatistics&&
!0===g._layer.capabilities.query.supportsOrderBy&&(a=!0);if(a)for(var b=0;b<c.length-1;b++)null!==c[b].workingexpr&&(!1===c[b].workingexpr.isStandardized?a=!1:!1===z.isSingleField(c[b].workingexpr)&&!1===d&&(a=!1));return!1===a?!1:!0})};d.prototype._makeRelationshipEnum=function(a){if(0<=a.indexOf("esriSpatialRelRelation"))return"relation";switch(a){case "esriSpatialRelRelation":return"relation";case "esriSpatialRelIntersects":return"intersects";case "esriSpatialRelContains":return"contains";case "esriSpatialRelOverlaps":return"overlaps";
case "esriSpatialRelWithin":return"within";case "esriSpatialRelTouches":return"touches";case "esriSpatialRelCrosses":return"crosses";case "esriSpatialRelEnvelopeIntersects":return"envelope-intersects"}return a};d.prototype._makeRelationshipParam=function(a){return 0<=a.indexOf("esriSpatialRelRelation")?a.split(":")[1]:""};d.prototype._getAggregatePagesDataSourceDefinition=function(a,c,g,e,d,b,l){var f=this;return this._ensureLoaded().then(function(){return f.databaseType()}).then(function(h){var k=
"",r=!1,m=!1;null!==b&&f._layer.capabilities&&f._layer.capabilities.query&&!0===f._layer.capabilities.query.supportsOrderBy&&(k=b.constructClause(),m=!0);f._layer.capabilities&&f._layer.capabilities.query&&!1===f._layer.capabilities.query.supportsPagination&&(m=!1,r=!0,k=f._layer.objectIdField);for(var n=[],q=0;q<c.length;q++){var p=new C;p.onStatisticField=null!==c[q].workingexpr?w.toWhereClause(c[q].workingexpr,h):"";p.outStatisticFieldName=c[q].field;p.statisticType=c[q].toStatisticsName();n.push(p)}""===
k&&(k=a.join(","));q=f._maxQueryRate();p=f._layer.capabilities.query.maxRecordCount;void 0!==p&&p<q&&(q=p);h=null===d?null===e?"1\x3d1":"":w.toWhereClause(d,h);f._layer.definitionExpression&&(h=""!==h?"(("+f._layer.definitionExpression+") AND ("+h+"))":f._layer.definitionExpression);return new x([],["GETPAGES"],m,{groupbypage:!0,spatialRel:f._makeRelationshipEnum(g),relationParam:f._makeRelationshipParam(g),outFields:["*"],useOIDpagination:r,generatedOid:l,resultRecordCount:q,resultOffset:0,groupByFieldsForStatistics:a,
outStatistics:n,geometry:null===e?null:e,where:h,orderByFields:k,returnGeometry:!1,returnIdsOnly:!1,internal:{lastMaxId:-1,set:[],lastRetrieved:0,fullyResolved:!1}})})};d.prototype._getAgregagtePhysicalPage=function(a,c,g){var e=this;try{var d=a.pagesDefinition.where;!0===a.pagesDefinition.useOIDpagination&&(d=""!==d?"("+d+") AND ("+a.pagesDefinition.generatedOid+"\x3e"+a.pagesDefinition.internal.lastMaxId.toString()+")":a.pagesDefinition.generatedOid+"\x3e"+a.pagesDefinition.internal.lastMaxId.toString());
var b=a.pagesDefinition.internal.lastRetrieved,l=new u;this._requestStandardised&&(l.sqlFormat="standard");l.where=d;l.spatialRelationship=a.pagesDefinition.spatialRel;l.relationParameter=a.pagesDefinition.relationParam;l.outFields=a.pagesDefinition.outFields;l.outStatistics=a.pagesDefinition.outStatistics;l.geometry=a.pagesDefinition.geometry;l.groupByFieldsForStatistics=a.pagesDefinition.groupByFieldsForStatistics;l.num=a.pagesDefinition.resultRecordCount;l.start=a.pagesDefinition.internal.lastRetrieved;
l.returnGeometry=a.pagesDefinition.returnGeometry;l.orderByFields=""!==a.pagesDefinition.orderByFields?a.pagesDefinition.orderByFields.split(","):null;return this.isTable()&&l.geometry&&l.spatialRelationship?p.resolve([]):this.executeQuery(l,"execute").then(function(c){e._checkCancelled(g);if(!c.hasOwnProperty("features"))return p.reject(Error("Unnexected Result querying aggregates from layer"));var d=[];if(a.pagesDefinition.internal.lastRetrieved!==b)return[];for(var f=0;f<c.features.length;f++)a.pagesDefinition.internal.set[b+
f]=c.features[f].attributes[a.pagesDefinition.generatedOid];for(f=0;f<c.features.length;f++)d.push(new y({attributes:c.features[f].attributes,geometry:null}));!0===a.pagesDefinition.useOIDpagination?0===c.features.length?a.pagesDefinition.internal.fullyResolved=!0:a.pagesDefinition.internal.lastMaxId=c.features[c.features.length-1].attributes[a.pagesDefinition.generatedOid]:c.features.length!==a.pagesDefinition.resultRecordCount&&(a.pagesDefinition.internal.fullyResolved=!0);a.pagesDefinition.internal.lastRetrieved=
b+a.pagesDefinition.resultRecordCount;return d})}catch(f){return p.reject(f)}};d.create=function(a,c,g,e){a=new K({url:a,outFields:null===c?["*"]:c});return new d({layer:a,spatialReference:g,lrucache:e})};d.prototype.relationshipMetaData=function(){return this._layer&&this._layer.source&&this._layer.source.sourceJSON&&this._layer.source.sourceJSON.relationships?this._layer.source.sourceJSON.relationships:[]};d.prototype.serviceUrl=function(){return v.extractServiceUrl(this._layer.parsedUrl.path)};
d.prototype.queryAttachments=function(a,c,d,e){var g=this;if(this._layer.capabilities.data.supportsAttachment&&this._layer.capabilities.operations.supportsQueryAttachments){var b={objectIds:[a]};if(c&&0<c||d&&0<d)b.size=[c&&0<c?c:0,d&&0<d?d:c+1];e&&0<e.length&&(b.attachmentTypes=e);return this._layer.queryAttachments(b).then(function(b){var c=[];b&&b[a]&&b[a].forEach(function(b){c.push(new G(b.id,b.name,b.contentType,b.size,g._layer.parsedUrl.path+"/"+a.toString()+"/attachments/"+b.id.toString()))});
return c})}return p.resolve([])};d.prototype.queryRelatedFeatures=function(a){var c={f:"json",relationshipId:a.relationshipId.toString(),definitionExpression:a.where,outFields:a.outFields.join(","),returnGeometry:a.returnGeometry.toString()};void 0!==a.resultOffset&&null!==a.resultOffset&&(c.resultOffset=a.resultOffset.toString());void 0!==a.resultRecordCount&&null!==a.resultRecordCount&&(c.resultRecordCount=a.resultRecordCount.toString());a.orderByFields&&(c.orderByFields=a.orderByFields.join(","));
0<a.objectIds.length&&(c.objectIds=a.objectIds.join(","));a.outSpatialReference&&(c.outSR=JSON.stringify(a.outSpatialReference.toJSON()));return F(this._layer.parsedUrl.path+"/queryRelatedRecords",{responseType:"json",query:c}).then(function(a){if(a.data){var c={};if((a=a.data)&&a.relatedRecordGroups)for(var d=a.spatialReference,b=0,g=a.relatedRecordGroups;b<g.length;b++){for(var f=g[b],r=f.objectId,k=[],t=0,f=f.relatedRecords;t<f.length;t++){var m=f[t];m.geometry&&(m.geometry.spatialReference=d);
m=new y({geometry:m.geometry?J.fromJSON(m.geometry):null,attributes:m.attributes});k.push(m)}c[r]={features:k,exceededTransferLimit:!0===a.exceededTransferLimit}}return c}return p.reject("Invalid Request")})};d.prototype.getFeatureByObjectId=function(a,c){var d=new B({url:this._layer.parsedUrl.path}),e=new u;e.outFields=c;e.returnGeometry=!1;e.outSpatialReference=this.spatialReference;e.where=this.objectIdField+"\x3d"+a.toString();return d.execute(e).then(function(a){return 1===a.features.length?
a.features[0]:null})};return d}(H)});