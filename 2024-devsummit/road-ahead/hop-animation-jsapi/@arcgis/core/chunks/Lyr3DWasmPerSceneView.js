/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import t from"../request.js";import r from"../core/Accessor.js";import{L as s}from"./Logger.js";import{isAbortError as i}from"../core/promiseUtils.js";import{watch as o}from"../core/reactiveUtils.js";import{addFrameTask as p}from"../core/scheduling.js";import{property as a}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import{subclass as n}from"../core/accessorSupport/decorators/subclass.js";import{w as m,L as l,i as j}from"./ILyr3DWasmPerSceneView.js";import{W as u}from"./WorkerHandle.js";import{a as d}from"./Lyr3DModule.js";import{g as y}from"./unitConversionUtils.js";import{m as c}from"./I3SMeshView3D.js";import"../config.js";import"../kernel.js";import"../core/urlUtils.js";import"../core/Error.js";import"../core/JSONSupport.js";import"./utils.js";import"./handleUtils.js";import"../core/Handles.js";import"./maybe.js";import"./metadata.js";import"./tracking.js";import"./ensureType.js";import"./ObservableBase.js";import"./asyncUtils.js";import"../core/Collection.js";import"../core/Evented.js";import"./shared.js";import"./SimpleObservable.js";import"../core/workers/workers.js";import"../core/workers/Connection.js";import"./Queue.js";import"../core/workers/RemoteClient.js";import"../intl.js";import"./date.js";import"./jsonMap.js";import"./locale.js";import"./timeZoneUtils.js";import"./datetime.js";import"./messages.js";import"./assets.js";import"./lengthUtils.js";import"./unitUtils.js";import"../Color.js";import"./colorUtils.js";import"./mathUtils.js";import"./vec3.js";import"./vec3f64.js";import"./common.js";import"../Graphic.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"./reader.js";import"../geometry/SpatialReference.js";import"./writer.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"../geometry/Polygon.js";import"./coordsUtils.js";import"./Axis.js";import"./extentUtils.js";import"./aaBoundingRect.js";import"../geometry/Polyline.js";import"./typeUtils.js";import"../geometry/support/jsonUtils.js";import"../PopupTemplate.js";import"../core/Clonable.js";import"../layers/support/fieldUtils.js";import"../core/sql.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"./enumeration.js";import"../popup/support/FieldInfoFormat.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/mixins/ChartMediaInfo.js";import"../popup/content/mixins/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"./chartMediaInfoUtils.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/RelationshipContent.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../support/actions/ActionBase.js";import"../core/Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"./utils4.js";import"../symbols/edges/Edges3D.js";import"./screenUtils.js";import"./materialUtils.js";import"./opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"./Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"./lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"./utils5.js";import"./colors.js";import"./symbolLayerUtils3D.js";import"./aaBoundingBox.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"./persistableUrlUtils.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"./collectionUtils.js";import"../portal/Portal.js";import"../core/Loadable.js";import"../core/Promise.js";import"../portal/PortalGroup.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/support/StyleOrigin.js";import"./Thumbnail.js";import"./calloutUtils.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/support/Symbol3DVerticalOffset.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"./urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"./ByteSizeUnit.js";import"./mat3.js";import"./mat3f64.js";import"./mat4.js";import"./mat4f64.js";import"./quatf64.js";import"./vec4.js";import"./vec4f64.js";import"./UpdatingHandles.js";import"./LayerElevationProvider.js";import"./projectBuffer.js";import"./geodesicConstants.js";import"./RenderTexture.js";import"./sphere.js";import"./plane.js";import"./vec2f64.js";import"./mathUtils2.js";import"./ElevationRange.js";import"./ElevationUpdateEvent.js";import"./ElevationContext.js";import"./computeTranslationToOriginAndRotation.js";import"./ElevationProvider.js";import"./VertexAttribute.js";import"./hydratedFeatures.js";import"./dehydratedPoint.js";import"./graphicUtils.js";import"../geometry/projection.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"./zscale.js";import"./Attribute.js";import"./ContentObject.js";import"./Geometry.js";import"./Indices.js";import"./basicInterfaces.js";import"./Util.js";import"./triangle.js";import"./lineSegment.js";import"./doublePrecisionUtils.js";import"./vec2f32.js";import"./InterleavedLayout.js";import"./BufferView.js";import"./vec2.js";import"./types.js";import"./StencilUtils.js";import"./BindType.js";import"./interfaces5.js";import"./ShaderTechniqueConfiguration.js";import"./debugFlags2.js";import"./Material.js";import"./ViewingMode.js";import"./requestImageUtils.js";import"./enums.js";import"./Texture.js";import"./DefaultBufferWriter.js";import"./HUDMaterial.js";import"./VerticalOffset.glsl.js";import"./GLTextureMaterial.js";import"./RenderPlugin.js";import"./VertexArrayObject2.js";import"./VertexArrayObject.js";import"./OutputHighlight.glsl.js";import"./OrderIndependentTransparency.js";import"./projectBoundingRect.js";import"./dehydratedFeatures.js";import"./quantizationUtils.js";import"../layers/support/Field.js";import"./domains.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"./fieldType.js";import"./featureConversionUtils.js";import"./OptimizedFeature.js";import"./OptimizedFeatureSet.js";import"./OptimizedGeometry.js";import"./edgeUtils.js";import"./earcut.js";import"./_commonjsHelpers.js";import"./DoubleArray.js";import"./vec32.js";import"./SnappingCandidate.js";import"./visualVariableUtils.js";import"./compilerUtils.js";import"./sizeVariableUtils.js";import"./triangulationUtils.js";import"./deduplicate.js";import"./RenderGeometry.js";import"../views/3d/webgl/ManagedFBO.js";import"./IntegerPassUniform.js";import"./axisAngleDegrees.js";import"./quat.js";import"./weather.js";import"../views/3d/environment/CloudyWeather.js";import"../views/3d/environment/FoggyWeather.js";import"../views/3d/environment/RainyWeather.js";import"../views/3d/environment/SnowyWeather.js";import"../views/3d/environment/SunnyWeather.js";import"./RenderState.js";import"./NestedMap.js";import"./Camera.js";import"./frustum.js";import"./RibbonLineMaterial.js";import"./Octree.js";import"./floatRGBA.js";import"./Intersector.js";import"./Intersector2.js";import"./boundedPlane.js";import"./verticalOffsetUtils.js";import"./orientedBoundingBox.js";import"./spatialReferenceEllipsoidUtils.js";import"./glUtil.js";import"./VertexElementDescriptor.js";import"./MemCache.js";import"./BufferObject.js";import"./Scheduler.js";import"../core/signal.js";import"./debugFlags.js";import"./Normals.js";import"./objectResourceUtils.js";import"./devEnvironmentUtils.js";import"./DefaultMaterial_COLOR_GAMMA.js";import"./Version.js";import"./resourceUtils3.js";import"./symbolColorUtils.js";import"./CameraSpace.glsl.js";import"./projectPointToVector.js";import"./CIMSymbolHelper.js";import"./BidiEngine.js";import"./fontUtils.js";import"./GeometryUtils.js";import"./enums2.js";import"./utils6.js";import"./definitions.js";import"./HighlightOptions.js";import"./shapingUtils.js";import"./mat2d.js";import"./mat2df32.js";import"./Rect.js";import"./BoundingBox.js";import"./defaults.js";import"./defaultsJSON.js";import"./OverrideHelper.js";import"./colorUtils2.js";import"../symbols/support/cimSymbolUtils.js";import"./utils9.js";import"./jsonUtils.js";import"./parser.js";import"./utils3.js";import"./LRUCache.js";import"./GeometryUtil.js";import"./vec3f32.js";import"./line.js";import"./line2.js";import"./lineStippleUtils.js";import"./projectVectorToPoint.js";import"./projectVectorToVector.js";import"../geometry/support/MeshComponent.js";import"../geometry/support/MeshMaterial.js";import"../geometry/support/MeshTexture.js";import"./imageUtils.js";import"../geometry/support/MeshTextureTransform.js";import"../geometry/support/MeshMaterialMetallicRoughness.js";import"./meshVertexSpaceUtils.js";import"../geometry/support/MeshGeoreferencedVertexSpace.js";import"./georeference.js";import"../geometry/support/MeshLocalVertexSpace.js";import"../geometry/support/MeshTransform.js";import"./interfaces.js";import"./DefaultLayouts.js";import"./styleUtils.js";import"./webStyleSymbolUtils.js";import"../symbols/support/jsonUtils.js";import"./layerUtils2.js";import"./Intersector4.js";import"./ColorMaterial.js";import"./TriangleMaterial.js";import"./LayerConstants.js";import"./I3SOverrides.js";import"./uuid.js";import"./I3SNode.js";import"./I3SUtil.js";import"../rest/support/Query.js";import"../TimeExtent.js";import"./timeUtils.js";import"./DataLayerSource.js";import"./FullTextSearch.js";import"./spatialRelationships.js";import"../rest/support/StatisticDefinition.js";import"./I3SBinaryReader.js";import"./EllipsoidMode.js";import"./labelUtils.js";import"./layerViewUtils.js";import"./ReactiveSet.js";import"./featureQueryAll.js";import"./meshFeatureSet.js";import"../geometry/Mesh.js";import"./External.js";import"./infoFor3D.js";import"../rest/support/FeatureSet.js";import"./FeatureLayerView3D.js";import"./FeatureLayerViewBase3D.js";import"./FeatureLikeLayerView3D.js";import"./arcgisLayerUrl.js";import"./geometryServiceUtils.js";import"./project.js";import"./utils7.js";import"./utils8.js";import"../rest/support/ProjectParameters.js";import"./ReactiveMap.js";import"./dehydratedFeatureComparison.js";import"./TilingScheme.js";import"../layers/support/LOD.js";import"../layers/support/TileInfo.js";import"./TileKey.js";import"./queryForSymbologySnapping.js";import"./elevationInfoUtils.js";import"./hash.js";import"./diffUtils.js";import"../renderers/mixins/VisualVariablesMixin.js";import"../renderers/visualVariables/ColorVariable.js";import"../renderers/visualVariables/VisualVariable.js";import"./LegendOptions.js";import"../renderers/visualVariables/support/ColorStop.js";import"../renderers/visualVariables/OpacityVariable.js";import"../renderers/visualVariables/support/OpacityStop.js";import"../renderers/visualVariables/RotationVariable.js";import"../renderers/visualVariables/SizeVariable.js";import"../renderers/visualVariables/support/SizeStop.js";import"./Graphics3DObjectStates.js";import"../renderers/ClassBreaksRenderer.js";import"../renderers/Renderer.js";import"../renderers/support/AuthoringInfo.js";import"../renderers/support/AuthoringInfoVisualVariable.js";import"./colorRamps.js";import"../rest/support/AlgorithmicColorRamp.js";import"../rest/support/ColorRamp.js";import"../rest/support/MultipartColorRamp.js";import"../renderers/support/ClassBreakInfo.js";import"./commonProperties.js";import"../renderers/DictionaryRenderer.js";import"../layers/support/FieldsIndex.js";import"./UnknownTimeZone.js";import"../renderers/DotDensityRenderer.js";import"../renderers/support/AttributeColorInfo.js";import"../renderers/HeatmapRenderer.js";import"../renderers/support/HeatmapColorStop.js";import"./heatmapUtils.js";import"../renderers/PieChartRenderer.js";import"../renderers/SimpleRenderer.js";import"../renderers/UniqueValueRenderer.js";import"../renderers/support/UniqueValue.js";import"../renderers/support/UniqueValueClass.js";import"../renderers/support/UniqueValueGroup.js";import"../renderers/support/UniqueValueInfo.js";import"../renderers/support/jsonUtils.js";import"../layers/Layer.js";import"./rendererConversion.js";import"./basemapUtils.js";import"../Basemap.js";import"./loadAll.js";import"../portal/PortalItem.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"../support/BasemapStyle.js";import"./writeUtils.js";import"./optimizedFeatureQueryEngineAdapter.js";import"./PooledRBush.js";import"./quickselect.js";import"./PropertiesPool.js";import"./popupUtils.js";import"../layers/support/FeatureFilter.js";import"./floorFilterUtils.js";import"./QueryEngine.js";import"../geometry/support/normalizeUtils.js";import"./normalizeUtilsCommon.js";import"./simplify.js";import"../core/sql/WhereClause.js";import"./TimeOnly.js";import"./timeSupport.js";import"./projectionSupport.js";import"./json.js";import"./QueryEngineCapabilities.js";import"./utils10.js";import"./utils2.js";import"./utils11.js";import"./generateRendererUtils.js";import"./scaleUtils.js";import"./FeatureStore.js";import"./BoundsStore.js";import"./FramebufferObject.js";import"./heatmapTextureUtils.js";import"./LayerViewPerformanceInfo.js";import"./projectExtentUtils.js";import"./LayerView3D.js";import"./heightModelInfoUtils.js";import"../geometry/HeightModelInfo.js";import"./query.js";import"./pbfQueryUtils.js";import"./pbf.js";import"./queryZScale.js";import"./EventedSet.js";import"./FeatureLayerView.js";import"./commonProperties2.js";import"./layerContainerType.js";import"../support/timeUtils.js";import"./ElevationInfo.js";import"../layers/support/FeatureEffect.js";import"../views/layers/LayerView.js";import"./RefreshableLayerView.js";import"../layers/support/SceneModification.js";import"./persistable.js";import"./MD5.js";import"./multiOriginJSONSupportUtils.js";import"./resourceExtension.js";import"./SceneLayerWorker.js";import"./Intersector3.js";class h extends u{constructor(e){super("Lyr3DWorker","process",{process:e=>e.inputs},e,{hasInitialize:!0})}destroyWasm(){return this.broadcast({},"destroyWasm")}}var b,g;!function(e){e[e.Lifetime=0]="Lifetime",e[e.Jobs=1]="Jobs",e[e.Renderables=2]="Renderables"}(b||(b={})),function(e){e[e.Critical=0]="Critical",e[e.Error=1]="Error",e[e.Warning=2]="Warning",e[e.Info=3]="Info"}(g||(g={}));let f=class extends r{constructor(e){super(e),this._lyr3DMainPromise=null,this._lyr3DMain=null,this._layers=new Map,this._debugFlags=new Set,this._debugLevel=g.Critical,this._pulseTaskHandle=null,this._session=null,this._debugFlags.add(b.Lifetime),this._debugFlags.add(b.Jobs),this._debugFlags.add(b.Renderables)}_debugLog(e,t,r,i=!0){if(this._debugFlags.has(e)&&this._debugLevel>=t){const e=i?`[js] ${r}`:`${r}`;t===g.Error?s.getLogger(this).error(e):t===g.Warning&&s.getLogger(this).warn(e),s.getLogger(this).info(e)}}initialize(){this._debugLevel>g.Warning&&(s.getLogger(this).level="info"),this._debugLog(b.Lifetime,g.Info,"Lyr3DWasmPerSceneView.initialize()"),this.addHandles([o((()=>this.view.state?.contentCamera),(()=>this._updateWasmCamera()))]),this._pulseTaskHandle=p({preRender:()=>this._pulseTask()})}destroy(){this._debugLog(b.Lifetime,g.Info,"Lyr3DWasmPerSceneView.destroy()"),this._lyr3DMain&&(this._layers.forEach((e=>{e.abortController.abort()})),this._lyr3DMain.uninitialize_lyr3d_wasm(),this._lyr3DMain=null);const e=this._worker;e&&e.destroyWasm().then((()=>{this._worker?.destroy(),this._worker=null})),this._pulseTaskHandle?.remove(),this._pulseTaskHandle=null}add3DTilesLayerView(e){return this._lyr3DMain?this._add3DTilesLayerView(e):(this._debugLog(b.Lifetime,g.Error,"Lyr3DWasmPerSceneView.add3DTilesLayerView() called when WASM wasn't initialized"),m)}remove3DTilesLayerView(e){if(!this._lyr3DMain)return this._debugLog(b.Lifetime,g.Error,"Lyr3DWasmPerSceneView.remove3DTilesLayerView() called when WASM wasn't loaded!"),0;this._doRemoveLayerView(e);const t=this._layers.size;return 0===t&&(this._debugLog(b.Lifetime,g.Info,"Lyr3DWasmPerSceneView.remove3DTilesLayerView() no Lyr3D layers left after removing a layer, destroying"),this.destroy()),t}setEnabled(e,t){if(!this._lyr3DMain)return void this._debugLog(b.Lifetime,g.Error,"Lyr3DWasmPerSceneView.setEnabled() called when WASM wasn't loaded!");const r=this._layers.get(e.wasmLayerId);r&&(this._lyr3DMain.set_enabled(e.wasmLayerId,t),r.needMemoryUsageUpdate=!0)}setLayerOffset(e,t){this._lyr3DMain?this._layers.get(e.wasmLayerId)&&this._lyr3DMain.set_carto_offset_z(e.wasmLayerId,t):this._debugLog(b.Lifetime,g.Error,"Lyr3DWasmPerSceneView.setLayerOffset() called when WASM wasn't loaded!")}getAttributionText(){return this._lyr3DMain?this._lyr3DMain.get_current_attribution_text().split("|"):(this._debugLog(b.Lifetime,g.Error,"Lyr3DWasmPerSceneView.getAttributionText() called when WASM wasn't loaded!"),[])}isUpdating(e){if(!this._lyr3DMain&&this._lyr3DMainPromise)return!0;const t=this._layers.get(e);return!!t&&(t.outstandingJobCount>0||t.outstandingRenderableCount>0)}initializeWasm(){return this._lyr3DMain?Promise.resolve():(this._debugLog(b.Lifetime,g.Info,"Lyr3DWasmPerSceneView.initializeWasm()"),this._lyr3DMainPromise||(this._lyr3DMainPromise=d().then((e=>{this._lyr3DMain=e,this._lyr3DMainPromise=null;const t=this._lyr3DMain.addFunction(this._onNewJob.bind(this),"v"),r=this._lyr3DMain.addFunction(this._onNewRenderable.bind(this),"v"),s=this._lyr3DMain.addFunction(this._freeRenderables.bind(this),"viii"),i=this._lyr3DMain.addFunction(this._setRenderableVisibility.bind(this),"viiii"),o=this._lyr3DMain.addFunction(this._onWasmError.bind(this),"viiii"),p="global"===this.view.viewingMode,a=this.view.renderSpatialReference?.isWebMercator?3857:this.view.renderSpatialReference?.wkid??-1,n=this.view.heightModelInfo?.heightModel,m=!n||"gravity-related-height"===n;return this._lyr3DMain.initialize_lyr3d_wasm(o,t,r,s,i,p,m,a)?(this._worker=new h(c(this.view.resourceController)),this._worker.promise?this._worker.promise:void 0):(this._lyr3DMain=null,void this._debugLog(b.Lifetime,g.Critical,"Lyr3d Main WASM failed to initialize",!1))})).catch((e=>{this._debugLog(b.Lifetime,g.Critical,`Lyr3d WASM failed to download error = ${e}`,!1)}))),this._lyr3DMainPromise)}_pulseTask(){this._lyr3DMain&&this._lyr3DMain.frame_pulse()}_incrementJobCount(e){e.outstandingJobCount+=1,1===e.outstandingJobCount&&e.outstandingRenderableCount<1&&e.layerView.updatingFlagChanged()}_decrementJobCount(e){e.outstandingJobCount-=1,0===e.outstandingJobCount&&e.outstandingRenderableCount<1&&e.layerView.updatingFlagChanged()}_incrementRenderableCount(e){e.outstandingRenderableCount+=1,e.outstandingJobCount<1&&1===e.outstandingRenderableCount&&e.layerView.updatingFlagChanged()}_decrementRenderableCount(e){e.outstandingRenderableCount-=1,e.outstandingJobCount<1&&0===e.outstandingRenderableCount&&e.layerView.updatingFlagChanged()}_onJobFailed(e,t,r){t.error.length&&this._debugLog(b.Jobs,g.Error,t.error,!1),this._lyr3DMain&&this._lyr3DMain.on_job_failed(r.jobId,r.desc),this._decrementJobCount(e)}_onJobSucceeded(e,t,r){if(this._lyr3DMain){const e=t.data.byteLength,s=this._lyr3DMain._malloc(e);new Uint8Array(this._lyr3DMain.HEAPU8.buffer,s,e).set(t.data),this._lyr3DMain.on_job_completed(r.jobId,t.jobDescJson,s,e),this._lyr3DMain._free(s)}this._decrementJobCount(e)}_getRequestPromises(e,r,s){const i=[];for(const o of e){const e=new URL(o),p=e.searchParams.get("session");p?this._session=p:this._session&&e.searchParams.append("session",this._session),s&&e.searchParams.append("key",s),i.push(t(e.toString(),r).then((e=>e.data)))}return i}_onNewJob(){const e=this._lyr3DMain.get_next_job(),t=this._layers.get(e.layerId);if(!t)return;this._incrementJobCount(t);const r=t.abortController.signal,s={responseType:"array-buffer",signal:r},o={inputs:[],jobDescJson:e.desc,isMissingResourceCase:!1},p=new URL(t.layerView.layer.url).searchParams.get("key"),a=this._getRequestPromises(e.urls,s,p);Promise.all(a).then((e=>(o.inputs=e,this._worker.invoke(o,r)))).then((e=>e)).catch((t=>(i(t)?this._debugLog(b.Jobs,g.Warning,`job ${e.jobId} was cancelled.`):this._debugLog(b.Jobs,g.Error,`job ${e.jobId} failed with error ${t}.`),{status:l.Failed,error:"",jobDescJson:"",data:new Uint8Array(0),missingInputUrls:[],inputs:[]}))).then((a=>{if(a.status===l.Failed)this._onJobFailed(t,a,e);else if(a.status===l.Succeeded)this._onJobSucceeded(t,a,e);else if(a.status===l.MissingInputs){const n=this._getRequestPromises(a.missingInputUrls,s,p);Promise.all(n).then((e=>{o.jobDescJson=a.jobDescJson,a.originalInputs?o.inputs=a.originalInputs:o.inputs=[],o.isMissingResourceCase=!0;for(const t of e)o.inputs.push(t);return this._worker.invoke(o,r)})).then((r=>{r.status===l.Failed?this._onJobFailed(t,r,e):r.status===l.Succeeded&&this._onJobSucceeded(t,r,e)})).catch((r=>{this._decrementJobCount(t),i(r)?this._debugLog(b.Jobs,g.Warning,`job ${e.jobId} was cancelled.`):this._debugLog(b.Jobs,g.Error,`job ${e.jobId} failed with error2 ${r}.`),this._lyr3DMain&&this._lyr3DMain.on_job_failed(e.jobId,e.desc)}))}}))}_onNewRenderable(){const e=this._lyr3DMain.get_next_renderable(),t=e.meshData;if(t.data&&t.data.byteLength>0){const e=t.data.slice();t.data=e}const r=this._layers.get(e.layerId);r&&(this._incrementRenderableCount(r),r.layerView.createRenderable(e).then((t=>{this._lyr3DMain&&this._lyr3DMain.on_renderable_created(!0,e.layerId,e.handle,t.vertexCount,t.vbMemUsage,t.ibMemUsage,t.texMemUsage),this._decrementRenderableCount(r)})).catch((t=>{i(t)||this._debugLog(b.Renderables,g.Error,`createRenderable failed with error ${t}.`),this._lyr3DMain&&this._lyr3DMain.on_renderable_created(!1,e.layerId,e.handle,0,0,0,0),this._decrementRenderableCount(r)})))}_freeRenderables(e,t,r){if(r<1)return;const s=this._layers.get(e);if(!s)return;const i=s.layerView,o=[],p=new Uint32Array(this._lyr3DMain.HEAPU32.buffer,t,r);for(let e=0;e<r;++e)o.push(p[e]);for(let e=0;e<r;++e)i.freeRenderable(o[e])}_setRenderableVisibility(e,t,r,s){if(s<1)return;const i=this._layers.get(e);if(!i)return;const o=i.layerView,p=[],a=[],n=new Uint32Array(this._lyr3DMain.HEAPU32.buffer,t,s),m=new Uint8Array(this._lyr3DMain.HEAPU8.buffer,r,s);for(let e=0;e<s;++e)p.push(n[e]),a.push(1===m[e]);for(let e=0;e<s;++e)o.setRenderableVisibility(p[e],a[e])}_onWasmError(e,t,r,s){this._lyr3DMain&&this._debugLog(r,s,this._lyr3DMain.UTF8ToString(e,t),!1)}_doRemoveLayerView(e){const t=this._layers.get(e.wasmLayerId);return!!t&&(t.abortController.abort(),this._lyr3DMain.remove_layer(e.wasmLayerId),this._layers.delete(e.wasmLayerId),!0)}_add3DTilesLayerView(e){const t=e.layer;if(!t.url)return j;const r=this._lyr3DMain.get_next_layer_id(),s=new AbortController;this._layers.set(r,{layerView:e,abortController:s,needMemoryUsageUpdate:!1,outstandingJobCount:0,outstandingRenderableCount:0});const i=t.elevationInfo?.offset??0,o=t.elevationInfo?.unit?y(t.elevationInfo?.unit):1;return this._lyr3DMain.add_layer(t.url,r,i*o)?(this._updateWasmCamera(),r):(this._layers.delete(r),j)}_updateWasmCamera(){const e=this.view.state?.contentCamera;if(!e||!this._lyr3DMain)return;const{eye:t,center:r,up:s,near:i,far:o,fov:p}=e,a=[e.viewport[2],e.viewport[3]],n=e.width/e.height;this._lyr3DMain.set_camera_parameters({eye:t,center:r,up:s,near:i,far:o,fov:p,aspectRatio:n,viewport:a})}};e([a({constructOnly:!0})],f.prototype,"view",void 0),f=e([n("esri.layers.Lyr3DWasmPerSceneView")],f);const _=f;export{_ as default};