/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as e}from"../chunks/tslib.es6.js";import t from"../Graphic.js";import s from"../PopupTemplate.js";import"../renderers/ClassBreaksRenderer.js";import"../renderers/DictionaryRenderer.js";import"../renderers/DotDensityRenderer.js";import"../renderers/HeatmapRenderer.js";import"../renderers/PieChartRenderer.js";import"../renderers/Renderer.js";import"../renderers/SimpleRenderer.js";import"../renderers/UniqueValueRenderer.js";import{w as r}from"../renderers/support/jsonUtils.js";import o from"../request.js";import{ClonableMixin as i}from"../core/Clonable.js";import a from"../core/Collection.js";import n from"../core/Error.js";import{L as p}from"../chunks/Logger.js";import{M as l}from"../chunks/MultiOriginJSONSupport.js";import{throwIfAbortError as m,isAbortError as u}from"../core/promiseUtils.js";import{whenOnce as c}from"../core/reactiveUtils.js";import{join as d}from"../core/urlUtils.js";import{property as y}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import{g as h}from"../chunks/utils.js";import{r as j}from"../chunks/reader.js";import{subclass as f}from"../core/accessorSupport/decorators/subclass.js";import{O as g}from"../core/Accessor.js";import b from"../geometry/Mesh.js";import k from"../geometry/Point.js";import v from"./Layer.js";import{f as I,M as w}from"../chunks/uploadAssetErrors.js";import{APIKeyMixin as S}from"./mixins/APIKeyMixin.js";import{A as L}from"../chunks/ArcGISService.js";import{CustomParametersMixin as F}from"./mixins/CustomParametersMixin.js";import{E as U}from"../chunks/EditBusLayer.js";import{OperationalLayer as P}from"./mixins/OperationalLayer.js";import{PortalLayer as D}from"./mixins/PortalLayer.js";import{ScaleRangeLayer as x}from"./mixins/ScaleRangeLayer.js";import{SceneService as E,SaveOperationType as O}from"./mixins/SceneService.js";import{TemporalSceneLayer as A}from"./mixins/TemporalSceneLayer.js";import{i as T}from"../chunks/arcgisLayerUrl.js";import{f as C}from"../chunks/associatedFeatureServiceUtils.js";import{z as R}from"../chunks/capabilities2.js";import{e as _,l as M,a as V,p as q,f as G}from"../chunks/commonProperties2.js";import{a as Q,w as N}from"../chunks/featureLayerUtils.js";import{F as B}from"../chunks/FeatureReduction.js";import z from"./support/FeatureReductionSelection.js";import{d as H}from"../chunks/fieldProperties.js";import K from"./support/FieldsIndex.js";import{fixRendererFields as $,unpackFieldNames as W}from"./support/fieldUtils.js";import{I as Z,a as J,b as X,c as Y}from"../chunks/I3SLayerDefinitions.js";import{i as ee,f as te}from"../chunks/infoFor3D.js";import se from"./support/LabelClass.js";import{r as re}from"../chunks/labelingInfo.js";import oe from"./support/LayerFloorInfo.js";import{l as ie}from"../chunks/lazyLayerLoader.js";import{JSONSupport as ae}from"../core/JSONSupport.js";import ne from"./support/SceneFilter.js";import{l as pe}from"../chunks/styleUtils2.js";import le from"../rest/support/Query.js";import{l as me,n as ue,f as ce}from"../chunks/elevationInfoUtils.js";import{a as de}from"../chunks/styleUtils.js";import{createPopupTemplate as ye}from"../support/popupUtils.js";import{q as he}from"../chunks/I3SUtil.js";import{g as je,a as fe}from"../chunks/popupUtils.js";import{t as ge}from"../chunks/opacityUtils.js";import"../geometry.js";import"../chunks/ensureType.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../geometry/SpatialReference.js";import"../chunks/unitUtils.js";import"../chunks/jsonMap.js";import"../config.js";import"../chunks/assets.js";import"../chunks/writer.js";import"../core/Handles.js";import"../chunks/maybe.js";import"../chunks/metadata.js";import"../chunks/handleUtils.js";import"../chunks/ObservableBase.js";import"../chunks/tracking.js";import"../core/scheduling.js";import"../kernel.js";import"../geometry/support/webMercatorUtils.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/coordsUtils.js";import"../chunks/Axis.js";import"../chunks/extentUtils.js";import"../chunks/aaBoundingRect.js";import"../chunks/mathUtils.js";import"../chunks/vec3.js";import"../chunks/vec3f64.js";import"../chunks/common.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../chunks/enumeration.js";import"../symbols/Symbol.js";import"../Color.js";import"../chunks/colorUtils.js";import"../core/sql.js";import"../intl.js";import"../chunks/date.js";import"../chunks/locale.js";import"../chunks/timeZoneUtils.js";import"../chunks/datetime.js";import"../chunks/messages.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"../chunks/utils4.js";import"../symbols/edges/Edges3D.js";import"../chunks/screenUtils.js";import"../chunks/materialUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"../chunks/Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../chunks/lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"../chunks/utils5.js";import"../chunks/colors.js";import"../chunks/symbolLayerUtils3D.js";import"../chunks/aaBoundingBox.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../chunks/persistableUrlUtils.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"../chunks/collectionUtils.js";import"../portal/Portal.js";import"../core/Loadable.js";import"../core/Promise.js";import"../portal/PortalGroup.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/support/StyleOrigin.js";import"../chunks/Thumbnail.js";import"../core/Evented.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../chunks/calloutUtils.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/support/Symbol3DVerticalOffset.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"../chunks/urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../chunks/asyncUtils.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"../popup/support/FieldInfoFormat.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/mixins/ChartMediaInfo.js";import"../popup/content/mixins/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../chunks/chartMediaInfoUtils.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/RelationshipContent.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../support/actions/ActionBase.js";import"../core/Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../renderers/mixins/VisualVariablesMixin.js";import"../renderers/visualVariables/ColorVariable.js";import"../renderers/visualVariables/VisualVariable.js";import"../chunks/LegendOptions.js";import"../renderers/visualVariables/support/ColorStop.js";import"../renderers/visualVariables/OpacityVariable.js";import"../renderers/visualVariables/support/OpacityStop.js";import"../renderers/visualVariables/RotationVariable.js";import"../renderers/visualVariables/SizeVariable.js";import"../renderers/visualVariables/support/SizeStop.js";import"../chunks/sizeVariableUtils.js";import"../chunks/visualVariableUtils.js";import"../chunks/compilerUtils.js";import"../chunks/lengthUtils.js";import"../renderers/support/ClassBreakInfo.js";import"../chunks/commonProperties.js";import"../symbols/support/jsonUtils.js";import"../chunks/layerUtils2.js";import"../renderers/support/AuthoringInfo.js";import"../renderers/support/AuthoringInfoVisualVariable.js";import"../chunks/colorRamps.js";import"../rest/support/AlgorithmicColorRamp.js";import"../rest/support/ColorRamp.js";import"../rest/support/MultipartColorRamp.js";import"../chunks/LRUCache.js";import"../chunks/MemCache.js";import"../chunks/Version.js";import"../chunks/OverrideHelper.js";import"../chunks/colorUtils2.js";import"../chunks/vec4.js";import"../chunks/vec4f64.js";import"../chunks/CIMSymbolHelper.js";import"../chunks/BidiEngine.js";import"../chunks/fontUtils.js";import"../chunks/OptimizedGeometry.js";import"../chunks/GeometryUtils.js";import"../chunks/enums2.js";import"../chunks/utils6.js";import"../chunks/definitions.js";import"../chunks/HighlightOptions.js";import"../chunks/shapingUtils.js";import"../chunks/mat2d.js";import"../chunks/mat2df32.js";import"../chunks/vec2.js";import"../chunks/vec2f32.js";import"../chunks/Rect.js";import"../chunks/BoundingBox.js";import"../chunks/defaults.js";import"../chunks/defaultsJSON.js";import"../chunks/quantizationUtils.js";import"../chunks/UnknownTimeZone.js";import"../renderers/support/AttributeColorInfo.js";import"../renderers/support/HeatmapColorStop.js";import"../chunks/heatmapUtils.js";import"../chunks/diffUtils.js";import"../renderers/support/UniqueValue.js";import"../renderers/support/UniqueValueClass.js";import"../renderers/support/UniqueValueGroup.js";import"../renderers/support/UniqueValueInfo.js";import"../chunks/axisAngleDegrees.js";import"../chunks/quat.js";import"../chunks/quatf64.js";import"../geometry/support/MeshComponent.js";import"../geometry/support/MeshMaterial.js";import"../geometry/support/MeshTexture.js";import"../chunks/imageUtils.js";import"../geometry/support/MeshTextureTransform.js";import"../geometry/support/MeshMaterialMetallicRoughness.js";import"../geometry/support/MeshGeoreferencedVertexSpace.js";import"../geometry/support/MeshLocalVertexSpace.js";import"../geometry/support/MeshTransform.js";import"../chunks/mat4.js";import"../chunks/mat4f64.js";import"../chunks/meshVertexSpaceUtils.js";import"../chunks/vec32.js";import"../chunks/triangulationUtils.js";import"../chunks/earcut.js";import"../chunks/_commonjsHelpers.js";import"../chunks/DoubleArray.js";import"../chunks/Indices.js";import"../chunks/deduplicate.js";import"../chunks/plane.js";import"../chunks/mat3f64.js";import"../chunks/vec2f64.js";import"../chunks/mathUtils2.js";import"../chunks/Attribute.js";import"../chunks/ContentObject.js";import"../chunks/Geometry.js";import"../chunks/basicInterfaces.js";import"../chunks/Util.js";import"../chunks/triangle.js";import"../chunks/lineSegment.js";import"../chunks/VertexAttribute.js";import"../chunks/doublePrecisionUtils.js";import"../chunks/georeference.js";import"../chunks/mat3.js";import"../geometry/projection.js";import"../chunks/projectBuffer.js";import"../chunks/geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"../chunks/zscale.js";import"../chunks/spatialReferenceEllipsoidUtils.js";import"../chunks/computeTranslationToOriginAndRotation.js";import"../chunks/BufferView.js";import"../chunks/projectPointToVector.js";import"../chunks/External.js";import"../chunks/uuid.js";import"../chunks/layerContainerType.js";import"../TimeExtent.js";import"../chunks/timeUtils.js";import"../support/timeUtils.js";import"../chunks/ElevationInfo.js";import"../chunks/unitConversionUtils.js";import"../portal/PortalItem.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"../chunks/portalItemUtils.js";import"../chunks/originUtils.js";import"../chunks/multiOriginJSONSupportUtils.js";import"../geometry/HeightModelInfo.js";import"../chunks/I3SIndexInfo.js";import"../chunks/jsonContext.js";import"../chunks/resourceUtils2.js";import"../chunks/resourceUtils.js";import"../chunks/saveAPIKeyUtils.js";import"../chunks/saveUtils.js";import"../TimeInterval.js";import"./support/TimeInfo.js";import"../chunks/featureQueryAll.js";import"../rest/support/AttachmentQuery.js";import"../rest/support/RelationshipQuery.js";import"../chunks/DataLayerSource.js";import"./support/Field.js";import"../chunks/domains.js";import"./support/CodedValueDomain.js";import"./support/Domain.js";import"./support/InheritedDomain.js";import"./support/RangeDomain.js";import"../chunks/fieldType.js";import"../chunks/labelUtils.js";import"../chunks/persistable.js";import"../chunks/MD5.js";import"../chunks/resourceExtension.js";import"../chunks/FullTextSearch.js";import"../chunks/spatialRelationships.js";import"../rest/support/StatisticDefinition.js";import"../chunks/projectVectorToVector.js";import"../chunks/dehydratedPoint.js";import"../chunks/sphere.js";import"../chunks/I3SBinaryReader.js";import"../chunks/edgeUtils.js";import"../chunks/symbolColorUtils.js";import"../chunks/orientedBoundingBox.js";import"../chunks/ViewingMode.js";let be=class extends ae{constructor(){super(...arguments),this.name=null,this.field=null,this.currentRangeExtent=null,this.fullRangeExtent=null,this.type="rangeInfo"}};async function ke(e){const{BlobReader:t,ZipReader:s,BlobWriter:r}=await import("../chunks/zipjs-wrapper.js"),o=[],i=new s(new t(e));return(await i.getEntries()).forEach((e=>{if(e.directory||/^__MACOS/i.test(e.filename))return;const t=new r,s=e.getData?.(t).then((t=>new File([t],e.filename)));s&&o.push(s)})),Promise.all(o)}e([y({type:String,json:{read:!0,write:!0}})],be.prototype,"name",void 0),e([y({type:String,json:{read:!0,write:!0}})],be.prototype,"field",void 0),e([y({type:[Number],json:{read:!0,write:!0}})],be.prototype,"currentRangeExtent",void 0),e([y({type:[Number],json:{read:!0,write:!0}})],be.prototype,"fullRangeExtent",void 0),e([y({type:["rangeInfo"],readOnly:!0,json:{read:!1,write:!0}})],be.prototype,"type",void 0),be=e([f("esri.layers.support.RangeInfo")],be);const ve=new Set(["3DObject","Point"]),Ie=H();let we=class extends(A(U(E(L(P(D(x(l(F(S(i(v)))))))))))){constructor(...e){super(...e),this.featureReduction=null,this.rangeInfos=null,this.operationalLayerType="ArcGISSceneServiceLayer",this.type="scene",this.fields=null,this.floorInfo=null,this.outFields=null,this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.excludeObjectIds=new a,this.definitionExpression=null,this.filter=null,this.path=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.priority=null,this.semantic=null,this.cachedDrawingInfo={color:!1},this.popupEnabled=!0,this.popupTemplate=null,this.objectIdField=null,this.globalIdField=null,this._fieldUsageInfo={},this.screenSizePerspectiveEnabled=!0,this.serviceItemId=void 0}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}destroy(){this._set("renderer",null)}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){const s=this.getFeatureType(t?.feature)?.domains?.[e];return s&&"inherited"!==s.type?s:this.getField(e)?.domain??null}getFeatureType(e){return e&&this.associatedLayer?this.associatedLayer.getFeatureType(e):null}get types(){return this.associatedLayer?.types??[]}get typeIdField(){return this.associatedLayer?.typeIdField??null}get templates(){return this.associatedLayer?.templates??null}get formTemplate(){return this.associatedLayer?.formTemplate??null}get fieldsIndex(){return new K(this.fields)}readNodePages(e,t,s){return"Point"===t.layerType&&(e=t.pointNodePages),null==e||"object"!=typeof e?null:Z.fromJSON(e,s)}set elevationInfo(e){this._set("elevationInfo",e),this.loaded&&this._validateElevationInfo()}get effectiveCapabilities(){return this._capabilitiesFromAssociatedFeatureLayer(this.associatedLayer?.effectiveCapabilities)}get effectiveEditingEnabled(){return null!=this.associatedLayer&&Q(this.associatedLayer)}get geometryType(){return Le[this.profile]||"mesh"}set renderer(e){$(e,this.fieldsIndex),this._set("renderer",e)}readCachedDrawingInfo(e){return null!=e&&"object"==typeof e||(e={}),null==e.color&&(e.color=!1),e}get capabilities(){return this._capabilitiesFromAssociatedFeatureLayer(this.associatedLayer?.capabilities)}_capabilitiesFromAssociatedFeatureLayer(e){e=null!=e?e:R;const{query:t,queryRelated:s,editing:{supportsGlobalId:r,supportsRollbackOnFailure:o,supportsUploadWithItemId:i,supportsGeometryUpdate:a,supportsReturnServiceEditsInSourceSpatialReference:n},data:{supportsZ:p,supportsM:l,isVersioned:m,supportsAttachment:u},operations:{supportsEditing:c,supportsAdd:d,supportsUpdate:y,supportsDelete:h,supportsQuery:j,supportsQueryAttachments:f,supportsAsyncConvert3D:g}}=e,b=e.operations.supportsChangeTracking,k=!!this.associatedLayer?.infoFor3D&&de();return{query:t,queryRelated:s,editing:{supportsGlobalId:r,supportsReturnServiceEditsInSourceSpatialReference:n,supportsRollbackOnFailure:o,supportsGeometryUpdate:k&&a,supportsUploadWithItemId:i},data:{supportsAttachment:u,supportsZ:p,supportsM:l,isVersioned:m},operations:{supportsQuery:j,supportsQueryAttachments:f,supportsEditing:c&&b,supportsAdd:k&&d&&b,supportsDelete:k&&h&&b,supportsUpdate:y&&b,supportsAsyncConvert3D:g}}}get editingEnabled(){return this._isOverridden("editingEnabled")?this._get("editingEnabled"):this.associatedLayer?.editingEnabled??!1}set editingEnabled(e){this._overrideIfSome("editingEnabled",e)}get infoFor3D(){return this.associatedLayer?.infoFor3D??null}get relationships(){return this.associatedLayer?.relationships}get defaultPopupTemplate(){return this.associatedLayer||this.attributeStorageInfo?this.createPopupTemplate():null}readObjectIdField(e,t){return!e&&t.fields&&t.fields.some((t=>("esriFieldTypeOID"===t.type&&(e=t.name),!!e))),e||void 0}readGlobalIdField(e,t){return!e&&t.fields&&t.fields.some((t=>("esriFieldTypeGlobalID"===t.type&&(e=t.name),!!e))),e||void 0}get displayField(){return this.associatedLayer?.displayField??null}readProfile(e,t){const s=t.store.profile;return null!=s&&Se[s]?Se[s]:(p.getLogger(this).error("Unknown or missing profile",{profile:s,layer:this}),"mesh-pyramids")}load(e){return this.addResolvingPromise(this._load(e)),Promise.resolve(this)}async _load(e){const t=null!=e?e.signal:null;await this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(m),await this._fetchService(t),await Promise.all([this._fetchIndexAndUpdateExtent(this.nodePages,t),this._setAssociatedFeatureLayer(t),this._loadFilterGeometries()]),this._validateElevationInfo(),this._applyAssociatedLayerOverrides(),this._populateFieldUsageInfo(),await pe(this,{origin:"service"},t),$(this.renderer,this.fieldsIndex),await this.finishLoadEditablePortalLayer(e)}async beforeSave(){null!=this.filter&&(this.filter=this.filter.clone(),await this.load())}async _loadFilterGeometries(){if(this.filter)try{await this.filter.loadGeometries(this.spatialReference)}catch(e){p.getLogger(this).error("#_loadFilterGeometries()",this,"Failed to load filter geometries. Geometry filter will not be applied for this layer.",{error:e}),this.filter=null}}createQuery(){const e=new le;return"mesh"!==this.geometryType&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e.outFields=["*"],e}queryExtent(e,t){return this._getAssociatedLayerForQuery().then((s=>s.queryExtent(e||this.createQuery(),t)))}queryFeatureCount(e,t){return this._getAssociatedLayerForQuery().then((s=>s.queryFeatureCount(e||this.createQuery(),t)))}queryFeatures(e,t){return this._getAssociatedLayerForQuery().then((s=>s.queryFeatures(e||this.createQuery(),t))).then((e=>{if(e?.features)for(const t of e.features)t.layer=this,t.sourceLayer=this;return e}))}async queryRelatedFeatures(e,t){if(await this.load(),!this.associatedLayer)throw new n("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:this});return this.associatedLayer.queryRelatedFeatures(e,t)}async queryRelatedFeaturesCount(e,t){if(await this.load(),!this.associatedLayer)throw new n("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:this});return this.associatedLayer.queryRelatedFeaturesCount(e,t)}async queryCachedAttributes(e,t){const s=W(this.fieldsIndex,await je(this,fe(this)));return he(this.parsedUrl.path,this.attributeStorageInfo??[],e,t,s,this.apiKey,this.customParameters)}async queryCachedFeature(e,s){const r=await this.queryCachedAttributes(e,[s]);if(!r||0===r.length)throw new n("scenelayer:feature-not-in-cached-data","Feature not found in cached data");const o=new t;return o.attributes=r[0],o.layer=this,o.sourceLayer=this,o}queryObjectIds(e,t){return this._getAssociatedLayerForQuery().then((s=>s.queryObjectIds(e||this.createQuery(),t)))}queryAttachments(e,t){return this._getAssociatedLayerForQuery().then((s=>s.queryAttachments(e,t)))}getFieldUsageInfo(e){const t={supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1};return this.loaded?this._fieldUsageInfo[e]||t:(p.getLogger(this).error("#getFieldUsageInfo()","Unavailable until layer is loaded"),t)}createPopupTemplate(e){return ye(this,e)}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return e?.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),!this.associatedLayer)throw new n("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(e){throw new n("scenelayer:query-not-available","SceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}hasCachedStatistics(e){return null!=this.statisticsInfo&&this.statisticsInfo.some((t=>t.name===e))}async queryCachedStatistics(e,t){if(await this.load(t),!this.statisticsInfo)throw new n("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const s=this.fieldsIndex.get(e);if(!s)throw new n("scenelayer:field-unexisting",`Field '${e}' does not exist on the layer`);for(const e of this.statisticsInfo)if(e.name===s.name){const s=d(this.parsedUrl.path,e.href);return o(s,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:t?t.signal:null}).then((e=>e.data))}throw new n("scenelayer:no-cached-statistics","Cached statistics for this attribute are not available")}async saveAs(e,t){return this._debouncedSaveOperations(O.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"scene"};return this._debouncedSaveOperations(O.SAVE,e)}async applyEdits(e,t){const{applyEdits:s}=await import("../chunks/editingSupport.js");let r=t;await this.load();const o=this.associatedLayer;if(!o)throw new n(`${this.type}-layer:not-editable`,"Service is not editable");await o.load();const{globalIdField:i}=o,a=!!o.infoFor3D,p=r?.globalIdUsed??!0;if(a&&null==i)throw new n(`${this.type}-layer:not-editable`,"Valid globalIdField expected on editable SceneLayer");if(a&&!p)throw new n(`${this.type}-layer:globalid-required`,"globalIdUsed must not be false for SceneLayer editing as globalIds are required.");return T(o.url)&&a&&null!=e.deleteFeatures&&null!=i&&(r={...r,globalIdToObjectId:await N(o,e.deleteFeatures,i)}),s(this,o.source,e,r)}async uploadAssets(e,t){if(await this.load(),null==this.associatedLayer)throw new n(`${this.type}-layer:not-editable`,"Service is not editable");return await this.associatedLayer.load(),this.associatedLayer.uploadAssets(e,t)}on(e,t){return super.on(e,t)}async convertMesh(e,t){const s=e=>{throw p.getLogger(this).error(".convertMesh()",e.message),e};await this.load(),this.infoFor3D||s(new n("invalid:layer","SceneLayer has no capability for mesh conversion"));const r=await this.extractAndFilterFiles(e),o=r.reduce(((e,t)=>ee(this.infoFor3D,t)?e+1:e),0);0===o&&s(new I),o>1&&s(new w);const i=t?.location??new k({x:0,y:0,z:0,spatialReference:this.spatialReference}),a=b.createWithExternalSource(i,r),[l]=await this.uploadAssets([a],t);return l}async extractAndFilterFiles(e){await this.load();const t=this.infoFor3D;if(!t)return e;const s=await async function(e){const t=[];for(const s of e)s.name.toLowerCase().endsWith(".zip")?t.push(ke(s)):t.push(Promise.resolve(s));return(await Promise.all(t)).flat()}(e);return s.filter((e=>te(t,e)))}validateLayer(e){if(e.layerType&&!ve.has(e.layerType))throw new n("scenelayer:layer-type-not-supported","SceneLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new n("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x, 2.x"});if(this.version.major>2)throw new n("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x, 2.x"});!function(e,t){let s=!1,r=!1;if(null==e)s=!0,r=!0;else{const o=t&&t.isGeographic;switch(e){case"east-north-up":case"earth-centered":s=!0,r=o;break;case"vertex-reference-frame":s=!0,r=!o;break;default:s=!1}}if(!s)throw new n("scenelayer:unsupported-normal-reference-frame","Normal reference frame is invalid.");if(!r)throw new n("scenelayer:incompatible-normal-reference-frame","Normal reference frame is incompatible with layer spatial reference.")}(this.normalReferenceFrame,this.spatialReference)}_getTypeKeywords(){const e=[];if("points"===this.profile)e.push("Point");else{if("mesh-pyramids"!==this.profile)throw new n("scenelayer:unknown-profile","SceneLayer:save() encountered an unknown SceneLayer profile: "+this.profile);e.push("3DObject")}return e}_populateFieldUsageInfo(){if(this._fieldUsageInfo={},this.fields)for(const e of this.fields){const t=!(!this.attributeStorageInfo||!this.attributeStorageInfo.some((t=>t.name===e.name))),s=!!this.associatedLayer?.fields?.some((t=>t&&e.name===t.name)),r={supportsLabelingInfo:t,supportsRenderer:t,supportsPopupTemplate:t||s,supportsLayerQuery:s};this._fieldUsageInfo[e.name]=r}}_applyAssociatedLayerOverrides(){this._applyAssociatedLayerFieldsOverrides(),this._applyAssociatedLayerPopupOverrides(),this._applyAssociatedLayerExtentOverride(),this._applyAssociatedLayerPrivileges()}_applyAssociatedLayerFieldsOverrides(){if(!this.associatedLayer?.fields)return;let e=null;for(const t of this.associatedLayer.fields){const s=this.getField(t.name);s?(!s.domain&&t.domain&&(s.domain=t.domain.clone()),s.editable=t.editable,s.nullable=t.nullable,s.length=t.length):(e||(e=this.fields?this.fields.slice():[]),e.push(t.clone()))}e&&this._set("fields",e)}_applyAssociatedLayerPopupOverrides(){if(!this.associatedLayer)return;const e=["popupTemplate","popupEnabled"],t=h(this);for(let s=0;s<e.length;s++){const r=e[s],o=this.originIdOf(r),i=this.associatedLayer.originIdOf(r);o<i&&(i===g.SERVICE||i===g.PORTAL_ITEM)&&t.setAtOrigin(r,this.associatedLayer[r],i)}}_applyAssociatedLayerExtentOverride(){const e=this.associatedLayer?.editingInfo?.lastEditDate,t=this.associatedLayer?.serverGens,s=this.associatedLayer?.getAtOrigin("fullExtent","service");de()&&null!=this.associatedLayer?.infoFor3D&&s&&T(this.associatedLayer?.url)&&e&&this.serviceUpdateTimeStamp?.lastUpdate!==e.getTime()&&(this.serviceUpdateTimeStamp||t?.minServerGen!==t?.serverGen)&&h(this).setAtOrigin("fullExtent",s.clone(),g.SERVICE)}_applyAssociatedLayerPrivileges(){const e=this.associatedLayer;e&&(this._set("userHasEditingPrivileges",e.userHasEditingPrivileges),this._set("userHasFullEditingPrivileges",e.userHasFullEditingPrivileges),this._set("userHasUpdateItemPrivileges",e.userHasUpdateItemPrivileges))}async _setAssociatedFeatureLayer(e){if(["mesh-pyramids","points"].includes(this.profile))try{const{serverUrl:t,layerId:s,portalItem:r}=await C(`${this.url}/layers/${this.layerId}`,{sceneLayerItem:this.portalItem,customParameters:this.customParameters,apiKey:this.apiKey,signal:e}),o=await ie.FeatureLayer();this.associatedLayer=new o({url:t,customParameters:this.customParameters,layerId:s,portalItem:r}),await this.associatedLayer.load()}catch(e){u(e)||this._logWarningOnPopupEnabled()}}async _logWarningOnPopupEnabled(){await c((()=>this.popupEnabled&&null!=this.popupTemplate));const e=`this SceneLayer: ${this.title}`;null==this.attributeStorageInfo?p.getLogger(this).warn(`Associated FeatureLayer could not be loaded and no binary attributes found. Popups will not work on ${e}`):p.getLogger(this).info(`Associated FeatureLayer could not be loaded. Falling back to binary attributes for Popups on ${e}`)}_validateElevationInfo(){const e=this.elevationInfo;"mesh-pyramids"===this.profile&&me(p.getLogger(this),ue("Mesh scene layers","relative-to-scene",e)),me(p.getLogger(this),ce("Scene layers",e))}};e([y({types:{key:"type",base:B,typeMap:{selection:z}},json:{origins:{"web-scene":{name:"layerDefinition.featureReduction",write:!0},"portal-item":{name:"layerDefinition.featureReduction",write:!0}}}})],we.prototype,"featureReduction",void 0),e([y({type:[be],json:{read:!1,origins:{"web-scene":{name:"layerDefinition.rangeInfos",write:!0},"portal-item":{name:"layerDefinition.rangeInfos",write:!0}}}})],we.prototype,"rangeInfos",void 0),e([y({json:{read:!1}})],we.prototype,"associatedLayer",void 0),e([y({type:["show","hide"]})],we.prototype,"listMode",void 0),e([y({type:["ArcGISSceneServiceLayer"]})],we.prototype,"operationalLayerType",void 0),e([y({json:{read:!1},readOnly:!0})],we.prototype,"type",void 0),e([y({...Ie.fields,readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],we.prototype,"fields",void 0),e([y()],we.prototype,"types",null),e([y()],we.prototype,"typeIdField",null),e([y()],we.prototype,"templates",null),e([y()],we.prototype,"formTemplate",null),e([y({readOnly:!0,clonable:!1})],we.prototype,"fieldsIndex",null),e([y({type:oe,json:{read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo"}}})],we.prototype,"floorInfo",void 0),e([y(Ie.outFields)],we.prototype,"outFields",void 0),e([y({type:Z,readOnly:!0,json:{read:!1}})],we.prototype,"nodePages",void 0),e([j("service","nodePages",["nodePages","pointNodePages"])],we.prototype,"readNodePages",null),e([y({type:[J],readOnly:!0})],we.prototype,"materialDefinitions",void 0),e([y({type:[X],readOnly:!0})],we.prototype,"textureSetDefinitions",void 0),e([y({type:[Y],readOnly:!0})],we.prototype,"geometryDefinitions",void 0),e([y({readOnly:!0})],we.prototype,"serviceUpdateTimeStamp",void 0),e([y({readOnly:!0})],we.prototype,"attributeStorageInfo",void 0),e([y({readOnly:!0})],we.prototype,"statisticsInfo",void 0),e([y({type:a.ofType(Number),nonNullable:!0,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.excludeObjectIds",write:{enabled:!0}}})],we.prototype,"excludeObjectIds",void 0),e([y({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],we.prototype,"definitionExpression",void 0),e([y({type:ne,json:{name:"layerDefinition.polygonFilter",write:{enabled:!0,allowNull:!0},origins:{service:{read:!1,write:!1}}}})],we.prototype,"filter",void 0),e([y({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],we.prototype,"path",void 0),e([y(_)],we.prototype,"elevationInfo",null),e([y({readOnly:!0,json:{read:!1}})],we.prototype,"effectiveCapabilities",null),e([y({readOnly:!0})],we.prototype,"effectiveEditingEnabled",null),e([y({type:String})],we.prototype,"geometryType",null),e([y(M)],we.prototype,"labelsVisible",void 0),e([y({type:[se],json:{origins:{service:{name:"drawingInfo.labelingInfo",read:{reader:re},write:!1}},name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:re},write:!0}})],we.prototype,"labelingInfo",void 0),e([y(V)],we.prototype,"legendEnabled",void 0),e([y({type:Number,json:{origins:{"web-document":{default:1,write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}},read:{source:["opacity","layerDefinition.drawingInfo.transparency"],reader(e,t){if("number"==typeof e&&e>=0&&e<=1)return e;const s=t.layerDefinition?.drawingInfo?.transparency;return void 0!==s?ge(s):void 0}}},"portal-item":{write:!0},service:{read:!1}}}})],we.prototype,"opacity",void 0),e([y({type:["Low","High"],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],we.prototype,"priority",void 0),e([y({type:["Labels"],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],we.prototype,"semantic",void 0),e([y({types:r,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],we.prototype,"renderer",null),e([y({json:{read:!1}})],we.prototype,"cachedDrawingInfo",void 0),e([j("service","cachedDrawingInfo")],we.prototype,"readCachedDrawingInfo",null),e([y({readOnly:!0,json:{read:!1}})],we.prototype,"capabilities",null),e([y({type:Boolean,json:{read:!1}})],we.prototype,"editingEnabled",null),e([y({readOnly:!0,json:{write:!1,read:!1}})],we.prototype,"infoFor3D",null),e([y({readOnly:!0,json:{write:!1,read:!1}})],we.prototype,"relationships",null),e([y(q)],we.prototype,"popupEnabled",void 0),e([y({type:s,json:{name:"popupInfo",write:!0}})],we.prototype,"popupTemplate",void 0),e([y({readOnly:!0,json:{read:!1}})],we.prototype,"defaultPopupTemplate",null),e([y({type:String,json:{read:!1}})],we.prototype,"objectIdField",void 0),e([j("service","objectIdField",["objectIdField","fields"])],we.prototype,"readObjectIdField",null),e([y({type:String,json:{read:!1}})],we.prototype,"globalIdField",void 0),e([j("service","globalIdField",["globalIdField","fields"])],we.prototype,"readGlobalIdField",null),e([y({readOnly:!0,type:String,json:{read:!1}})],we.prototype,"displayField",null),e([y({type:String,json:{read:!1}})],we.prototype,"profile",void 0),e([j("service","profile",["store.profile"])],we.prototype,"readProfile",null),e([y({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],we.prototype,"normalReferenceFrame",void 0),e([y(G)],we.prototype,"screenSizePerspectiveEnabled",void 0),e([y({json:{read:!1,origins:{service:{read:!0}}}})],we.prototype,"serviceItemId",void 0),we=e([f("esri.layers.SceneLayer")],we);const Se={"mesh-pyramids":"mesh-pyramids",meshpyramids:"mesh-pyramids","features-meshes":"mesh-pyramids",points:"points","features-points":"points",lines:"lines","features-lines":"lines",polygons:"polygons","features-polygons":"polygons"},Le={"mesh-pyramids":"mesh",points:"point",lines:"polyline",polygons:"polygon"},Fe=we;export{Fe as default};