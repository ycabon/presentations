/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as t}from"./tslib.es6.js";import"../geometry.js";import{id as e}from"../kernel.js";import s from"../request.js";import r from"../TimeExtent.js";import{h as o,i}from"../core/lang.js";import a from"../core/Error.js";import{J as p}from"./jsonMap.js";import n from"../core/Loadable.js";import{L as l}from"./Logger.js";import{s as m}from"../config.js";import{debounce as u,after as c,throwIfAbortError as d}from"../core/promiseUtils.js";import{join as y}from"../core/urlUtils.js";import{a as j}from"./uuid.js";import{property as h}from"../core/accessorSupport/decorators/property.js";import{subclass as f}from"../core/accessorSupport/decorators/subclass.js";import g from"../geometry/Extent.js";import{i as b,t as S}from"./meshVertexSpaceUtils.js";import{i as q}from"./External.js";import{d as w,g as R,a as O,b as E,i as F,u as x,c as I}from"./applyEditsUtils.js";import{c as U}from"./clientSideDefaults.js";import{Q as A}from"./QueryTask.js";import{i as C}from"./arcgisLayerUrl.js";import{e as M}from"./featureLayerUtils.js";import{c as v}from"./infoFor3D.js";import{a as _}from"./executeQueryJSON.js";import{u as D}from"./editsZScale.js";import T from"../rest/support/Query.js";import{i as L,a as V,c as P}from"./EditBusLayer.js";import N from"../geometry/SpatialReference.js";import"./ensureType.js";import"../geometry/Geometry.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../core/Handles.js";import"./maybe.js";import"./metadata.js";import"./utils.js";import"./handleUtils.js";import"./ObservableBase.js";import"./tracking.js";import"../core/scheduling.js";import"./reader.js";import"./unitUtils.js";import"./assets.js";import"./writer.js";import"../geometry/Multipoint.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"./zmUtils.js";import"../geometry/Polygon.js";import"./coordsUtils.js";import"./Axis.js";import"./extentUtils.js";import"./aaBoundingRect.js";import"./mathUtils.js";import"./vec3.js";import"./vec3f64.js";import"./common.js";import"../geometry/Polyline.js";import"./typeUtils.js";import"../geometry/support/jsonUtils.js";import"./timeUtils.js";import"./date.js";import"./locale.js";import"./timeZoneUtils.js";import"./datetime.js";import"../core/Promise.js";import"./mat4.js";import"./mat4f64.js";import"../geometry/support/MeshGeoreferencedVertexSpace.js";import"../core/Clonable.js";import"./enumeration.js";import"./vec32.js";import"../Graphic.js";import"../PopupTemplate.js";import"../core/Collection.js";import"../core/Evented.js";import"./shared.js";import"./SimpleObservable.js";import"../layers/support/fieldUtils.js";import"../core/sql.js";import"../intl.js";import"./messages.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"../popup/support/FieldInfoFormat.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/mixins/ChartMediaInfo.js";import"../popup/content/mixins/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../Color.js";import"./colorUtils.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"./chartMediaInfoUtils.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/RelationshipContent.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../support/actions/ActionBase.js";import"../core/Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"./utils4.js";import"../symbols/edges/Edges3D.js";import"./screenUtils.js";import"./materialUtils.js";import"./opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"./Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"./lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"./utils5.js";import"./colors.js";import"./symbolLayerUtils3D.js";import"./aaBoundingBox.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"./persistableUrlUtils.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"./collectionUtils.js";import"../portal/Portal.js";import"../portal/PortalGroup.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/support/StyleOrigin.js";import"./Thumbnail.js";import"./calloutUtils.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/support/Symbol3DVerticalOffset.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"./urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../core/reactiveUtils.js";import"./asyncUtils.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../geometry/projection.js";import"./projectBuffer.js";import"./geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"./zscale.js";import"./editingSupport.js";import"../geometry/support/normalizeUtils.js";import"./normalizeUtilsCommon.js";import"./simplify.js";import"./utils7.js";import"./utils8.js";import"./layerUtils2.js";import"./QueryEngineCapabilities.js";import"./defaultsJSON.js";import"./DataLayerSource.js";import"../layers/support/Field.js";import"./domains.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"./fieldType.js";import"./executeForIds.js";import"./query.js";import"./pbfQueryUtils.js";import"./pbf.js";import"./OptimizedGeometry.js";import"./OptimizedFeature.js";import"./OptimizedFeatureSet.js";import"./queryZScale.js";import"./executeForExtent.js";import"./executeQueryPBF.js";import"./featureConversionUtils.js";import"../rest/support/FeatureSet.js";import"./featureQueryAll.js";import"../renderers/SimpleRenderer.js";import"../renderers/Renderer.js";import"../renderers/support/AuthoringInfo.js";import"../renderers/support/AuthoringInfoVisualVariable.js";import"./colorRamps.js";import"../rest/support/AlgorithmicColorRamp.js";import"../rest/support/ColorRamp.js";import"../rest/support/MultipartColorRamp.js";import"../renderers/mixins/VisualVariablesMixin.js";import"../renderers/visualVariables/ColorVariable.js";import"../renderers/visualVariables/VisualVariable.js";import"./LegendOptions.js";import"../renderers/visualVariables/support/ColorStop.js";import"../renderers/visualVariables/OpacityVariable.js";import"../renderers/visualVariables/support/OpacityStop.js";import"../renderers/visualVariables/RotationVariable.js";import"../renderers/visualVariables/SizeVariable.js";import"../renderers/visualVariables/support/SizeStop.js";import"./sizeVariableUtils.js";import"./visualVariableUtils.js";import"./compilerUtils.js";import"./lengthUtils.js";import"./commonProperties.js";import"../symbols/support/jsonUtils.js";import"../renderers/UniqueValueRenderer.js";import"./diffUtils.js";import"../renderers/support/UniqueValue.js";import"../renderers/support/UniqueValueClass.js";import"../renderers/support/UniqueValueGroup.js";import"../renderers/support/UniqueValueInfo.js";import"./styleUtils.js";import"../rest/support/AttachmentQuery.js";import"../rest/support/RelationshipQuery.js";import"./FullTextSearch.js";import"./spatialRelationships.js";import"../rest/support/StatisticDefinition.js";const k=new p({originalAndCurrentFeatures:"original-and-current-features",none:"none"}),J=new Set(["Feature Layer","Oriented Imagery Layer","Table","Catalog Layer"]),Q=new p({Started:"published",Publishing:"publishing",Stopped:"unavailable"});let G=class extends n{constructor(){super(...arguments),this.type="feature-layer",this.refresh=u((async()=>{await this.load();const t=this.sourceJSON.editingInfo?.lastEditDate;if(null==t)return{dataChanged:!0,updates:{}};try{await this._fetchService(null)}catch{return{dataChanged:!0,updates:{}}}const e=t!==this.sourceJSON.editingInfo?.lastEditDate;return{dataChanged:e,updates:e?{editingInfo:this.sourceJSON.editingInfo,extent:this.sourceJSON.extent}:null}})),this._ongoingAssetUploads=new Map}load(t){const e=this.layer.sourceJSON,s=this._fetchService(e,{...t}).then((()=>this.layer.setUserPrivileges(this.sourceJSON.serviceItemId,t))).then((()=>this._ensureLatestMetadata(t)));return this.addResolvingPromise(s),Promise.resolve(this)}get queryTask(){const{capabilities:t,parsedUrl:e,dynamicDataSource:s,infoFor3D:r,gdbVersion:i,spatialReference:a,fieldsIndex:p}=this.layer,n=o("featurelayer-pbf")&&t?.query.supportsFormatPBF&&null==r,l=t?.operations?.supportsQueryAttachments??!1;return new A({url:e.path,pbfSupported:n,fieldsIndex:p,infoFor3D:r,dynamicDataSource:s,gdbVersion:i,sourceSpatialReference:a,queryAttachmentsSupported:l})}async addAttachment(t,e){await this.load();const{layer:r}=this;await M(r,"editing");const o=t.attributes[r.objectIdField],i=r.parsedUrl.path+"/"+o+"/addAttachment",a=this._getLayerRequestOptions(),p=this._getFormDataForAttachment(e,a.query);try{const t=await s(i,{body:p});return w(t.data.addAttachmentResult)}catch(t){throw this._createAttachmentErrorResult(o,t)}}async updateAttachment(t,e,r){await this.load();const{layer:o}=this;await M(o,"editing");const i=t.attributes[o.objectIdField],a=o.parsedUrl.path+"/"+i+"/updateAttachment",p=this._getLayerRequestOptions({query:{attachmentId:e}}),n=this._getFormDataForAttachment(r,p.query);try{const t=await s(a,{body:n});return w(t.data.updateAttachmentResult)}catch(t){throw this._createAttachmentErrorResult(i,t)}}async applyEdits(t,r){await this.load();const{layer:o}=this;await M(o,"editing");const a=o.infoFor3D,p=null!=a,n=p||(r?.globalIdUsed??!1),l=p?await this._uploadMeshesAndGetAssetMapEditsJSON(t):null,m=t.addFeatures?.map((t=>R(this.layer,t,a)))??[],u=(await Promise.all(m)).filter(i),c=t.updateFeatures?.map((t=>R(this.layer,t,a)))??[],d=(await Promise.all(c)).filter(i),y=O(this.layer,t.deleteFeatures,n);D(u,d,o.spatialReference);const j=await E(this.layer,t),h=o.capabilities.editing.supportsAsyncApplyEdits&&p,f=r?.gdbVersion||o.gdbVersion,g={gdbVersion:f,rollbackOnFailure:r?.rollbackOnFailureEnabled,useGlobalIds:n,returnEditMoment:r?.returnEditMoment,usePreviousEditMoment:r?.usePreviousEditMoment,async:h};await L(this.layer.url,f,!0);const b=V(this.layer.url,f||null);r?.returnServiceEditsOption?(g.edits=JSON.stringify([{id:o.layerId,adds:u,updates:d,deletes:y,attachments:j,assetMaps:l}]),g.returnServiceEditsOption=k.toJSON(r?.returnServiceEditsOption),g.returnServiceEditsInSourceSR=r?.returnServiceEditsInSourceSR):(g.adds=u.length?JSON.stringify(u):null,g.updates=d.length?JSON.stringify(d):null,g.deletes=y.length?n?JSON.stringify(y):y.join(","):null,g.attachments=j&&JSON.stringify(j),g.assetMaps=null!=l?JSON.stringify(l):void 0);const S=this._getLayerRequestOptions({method:"post",query:g});b&&(S.authMode="immediate",S.query.returnEditMoment=!0,S.query.sessionId=P);const q=r?.returnServiceEditsOption?o.url:o.parsedUrl.path;let w;try{w=h?await this._asyncApplyEdits(q+"/applyEdits",S):await s(q+"/applyEdits",S)}catch(t){if(!F(t))throw t;S.authMode="immediate",w=h?await this._asyncApplyEdits(q+"/applyEdits",S):await s(q+"/applyEdits",S)}if(!o.capabilities.operations?.supportsEditing&&o.effectiveCapabilities?.operations?.supportsEditing){const t=e?.findCredential(o.url);await(t?.refreshToken())}return this._createEditsResult(w)}async deleteAttachments(t,e){await this.load();const{layer:r}=this;await M(r,"editing");const o=t.attributes[r.objectIdField],i=r.parsedUrl.path+"/"+o+"/deleteAttachments";try{return(await s(i,this._getLayerRequestOptions({query:{attachmentIds:e.join(",")},method:"post"}))).data.deleteAttachmentResults.map(w)}catch(t){throw this._createAttachmentErrorResult(o,t)}}fetchRecomputedExtents(t={}){const e=t.signal;return this.load({signal:e}).then((async()=>{const e=this._getLayerRequestOptions({...t,query:{returnUpdates:!0}}),{layerId:o,url:i}=this.layer,{data:a}=await s(`${i}/${o}`,e),{id:p,extent:n,fullExtent:l,timeExtent:m}=a,u=n||l;return{id:p,fullExtent:u&&g.fromJSON(u),timeExtent:m&&r.fromJSON({start:m[0],end:m[1]})}}))}async queryAttachments(t,e={}){await this.load();const s=this._getLayerRequestOptions(e);return this.queryTask.executeAttachmentQuery(t,s)}async queryFeatures(t,e){await this.load();const s=await this.queryTask.execute(t,{...e,query:this._createRequestQueryOptions(e)});return t.outStatistics?.length&&s.features.length&&s.features.forEach((e=>{const s=e.attributes;t.outStatistics?.forEach((({outStatisticFieldName:t})=>{if(t){const e=t.toLowerCase();e&&e in s&&t!==e&&(s[t]=s[e],delete s[e])}}))})),s}async queryFeaturesJSON(t,e){return await this.load(),this.queryTask.executeJSON(t,{...e,query:this._createRequestQueryOptions(e)})}async queryObjectIds(t,e){return await this.load(),this.queryTask.executeForIds(t,{...e,query:this._createRequestQueryOptions(e)})}async queryFeatureCount(t,e){return await this.load(),this.queryTask.executeForCount(t,{...e,query:this._createRequestQueryOptions(e)})}async queryExtent(t,e){return await this.load(),this.queryTask.executeForExtent(t,{...e,query:this._createRequestQueryOptions(e)})}async queryRelatedFeatures(t,e){return await this.load(),this.queryTask.executeRelationshipQuery(t,{...e,query:this._createRequestQueryOptions(e)})}async queryRelatedFeaturesCount(t,e){return await this.load(),this.queryTask.executeRelationshipQueryForCount(t,{...e,query:this._createRequestQueryOptions(e)})}async queryTopFeatures(t,e){return await this.load(),this.queryTask.executeTopFeaturesQuery(t,{...e,query:this._createRequestQueryOptions(e)})}async queryTopObjectIds(t,e){return await this.load(),this.queryTask.executeForTopIds(t,{...e,query:this._createRequestQueryOptions(e)})}async queryTopExtents(t,e){return await this.load(),this.queryTask.executeForTopExtents(t,{...e,query:this._createRequestQueryOptions(e)})}async queryTopCount(t,e){return await this.load(),this.queryTask.executeForTopCount(t,{...e,query:this._createRequestQueryOptions(e)})}async fetchPublishingStatus(){if(!C(this.layer.url))return"unavailable";const t=y(this.layer.url,"status"),e=await s(t,{query:{f:"json"}});return Q.fromJSON(e.data.status)}async uploadAssets(t,e){const{uploadAssets:s}=await import("./uploadAssets.js");return s(t,{layer:this.layer,ongoingUploads:this._ongoingAssetUploads},e)}async _asyncApplyEdits(t,e){const r=(await s(t,e)).data.statusUrl;for(;;){const t=(await s(r,{query:{f:"json"},responseType:"json"})).data;switch(t.status){case"Completed":return s(t.resultUrl,{query:{f:"json"},responseType:"json"});case"CompletedWithErrors":throw new a("async-applyEdits-failed","asynchronous applyEdits call failed.");case"Failed ImportChanges":case"InProgress":case"Pending":case"ExportAttachments":case"ExportChanges":case"ExportingData":case"ExportingSnapshot":case"ImportAttachments":case"ProvisioningReplica":case"UnRegisteringReplica":break;default:throw new a("async-applyEdits-failed","asynchronous applyEdits call failed (undefined response status)")}await c(B)}}_createRequestQueryOptions(t){const e={...this.layer.customParameters,token:this.layer.apiKey,...t?.query};return this.layer.datesInUnknownTimezone&&(e.timeReferenceUnknownClient=!0),e}async _fetchService(t,e){if(!t){const r={};o("featurelayer-advanced-symbols")&&(r.returnAdvancedSymbols=!0),e?.cacheBust&&(r._ts=Date.now());const{data:i}=await s(this.layer.parsedUrl.path,this._getLayerRequestOptions({query:r,signal:e?.signal}));t=i}this.sourceJSON=await this._patchServiceJSON(t,e?.signal);const r=t.type;if(!J.has(r))throw new a("feature-layer-source:unsupported-type",`Source type "${r}" is not supported`)}async _patchServiceJSON(t,e){if("Table"!==t.type&&t.geometryType&&!t?.drawingInfo?.renderer&&!t.defaultSymbol){const e=U(t.geometryType).renderer;m("drawingInfo.renderer",e,t)}if("esriGeometryMultiPatch"===t.geometryType&&t.infoFor3D&&(t.geometryType="mesh"),null==t.extent)try{const{data:r}=await s(this.layer.url,this._getLayerRequestOptions({signal:e}));r.spatialReference&&(t.extent={xmin:0,ymin:0,xmax:0,ymax:0,spatialReference:r.spatialReference})}catch(t){d(t)}return t}async _ensureLatestMetadata(t){if(this.layer.userHasUpdateItemPrivileges&&this.sourceJSON.cacheMaxAge>0)return this._fetchService(null,{...t,cacheBust:!0})}async _uploadMeshesAndGetAssetMapEditsJSON(t){const{addAssetFeatures:e}=t;if(!e?.length)return null;const s=await this._filterRedundantAssetMaps(e);if(!e?.length)return null;const r=new Array,o=new Map;for(const t of s){const{geometry:e}=t,{vertexSpace:s}=e;if(b(s))r.push(e);else{const s=S(e);o.set(s,e),t.geometry=s,r.push(s)}}await this.uploadAssets(r);for(const[t,e]of o)e.addExternalSources(t.metadata.externalSources.items);return{adds:this._getAssetMapEditsJSON(s),updates:[],deletes:[]}}_getAssetMapEditsJSON(t){const e=new Array,s=this.layer.globalIdField,r=this.layer.parsedUrl;for(const o of t){const t=o.geometry,{metadata:i}=t,a=i.getExternalSourcesOnService(r),p=o.getAttribute(s);if(0===a.length){l.getLogger(this).error(`Skipping feature ${p}. The mesh it is associated with has not been uploaded to the service and cannot be mapped to it.`);continue}const{source:n}=a.find(q)??a[0],{vertexSpace:m}=t,u="georeferenced"===m.type?["PROJECT_VERTICES"]:[];for(const t of n)1===t.parts.length?e.push({globalId:j(),parentGlobalId:p,assetName:t.assetName,assetHash:t.parts[0].partHash,flags:u}):l.getLogger(this).error(`Skipping asset ${t.assetName}. It does not have exactly one part, so we cannot map it to a feature.`)}return e}_createEditsResult(t){const e=t.data,{layerId:s}=this.layer,r=[];let o=null;if(Array.isArray(e))for(const t of e)r.push({id:t.id,editedFeatures:t.editedFeatures}),t.id===s&&(o={addResults:t.addResults??[],updateResults:t.updateResults??[],deleteResults:t.deleteResults??[],attachments:t.attachments,editMoment:t.editMoment});else o=e;const i=x(o);if(r.length>0){i.editedFeatureResults=[];for(const t of r){const{editedFeatures:e}=t,s=e?.spatialReference?new N(e.spatialReference):null;i.editedFeatureResults.push({layerId:t.id,editedFeatures:I(e,s)})}}return i}_createAttachmentErrorResult(t,e){const s=e.details.messages?.[0]||e.message,r=e.details.httpStatus||e.details.messageCode;return{objectId:t,globalId:null,error:new a("feature-layer-source:attachment-failure",s,{code:r})}}_getFormDataForAttachment(t,e){const s=t instanceof FormData?t:t&&t.elements?new FormData(t):null;if(s)for(const t in e){const r=e[t];null!=r&&(s.set?s.set(t,r):s.append(t,r))}return s}_getLayerRequestOptions(t={}){const{parsedUrl:e,gdbVersion:s,dynamicDataSource:r}=this.layer;return{...t,query:{gdbVersion:s,layer:r?JSON.stringify({source:r}):void 0,...e.query,f:"json",...this._createRequestQueryOptions(t)},responseType:"json"}}async _filterRedundantAssetMaps(t){const{layer:e}=this,{globalIdField:s,infoFor3D:r,parsedUrl:o}=e;if(null==r||null==s)return t;const a=v(r);if(null==a)return t;const p=y(o.path,`../${a.id}`),n=new Array,l=new Array;for(const e of t)e.geometry.metadata.getExternalSourcesOnService(o).length>0?l.push(e):n.push(e);const m=l.map((t=>t.getAttribute(s))).filter(i);if(0===m.length)return t;const{assetMapFieldRoles:{parentGlobalId:u,assetHash:c}}=r,d=new T;d.where=`${u} IN (${m.map((t=>`'${t}'`))})`,d.outFields=[c,u],d.returnGeometry=!1;const j=await _(p,d),{features:h}=j;return 0===h.length?t:[...n,...l.filter((t=>{const e=t.getAttribute(s);if(!e)return!0;const{metadata:r}=t.geometry,i=h.filter((t=>t.getAttribute(u)===e));if(0===i.length)return!0;const a=i.map((t=>t.getAttribute(c)));return r.getExternalSourcesOnService(o).flatMap((({source:t})=>t.flatMap((t=>t.parts.map((t=>t.partHash)))))).some((t=>a.every((e=>t!==e))))}))]}};t([h()],G.prototype,"type",void 0),t([h({constructOnly:!0})],G.prototype,"layer",void 0),t([h({readOnly:!0})],G.prototype,"queryTask",null),G=t([f("esri.layers.graphics.sources.FeatureLayerSource")],G);const B=1e3,z=G;export{z as default};
