/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as t}from"./tslib.es6.js";import e from"../core/Error.js";import{h as s}from"../core/lang.js";import{f as o,a as i,d as r}from"./maybe.js";import{throwIfAborted as l,isAborted as p}from"../core/promiseUtils.js";import{whenOnce as a,watch as n,syncAndInitial as m}from"../core/reactiveUtils.js";import{property as j}from"../core/accessorSupport/decorators/property.js";import"./Logger.js";import{subclass as c}from"../core/accessorSupport/decorators/subclass.js";import{b as u}from"./MemCache.js";import{f as h}from"./mat3f32.js";import{c as y}from"./aaBoundingRect.js";import{S as d,a as g,C as f,b,T as S}from"./TileInfoViewPOT.js";import{w as v,V as C,a as _}from"./RenderableTile.js";import{V as L,S as M}from"./StyleDefinition.js";import{T as U}from"./TileKey2.js";import{W as T,a as w,b as R,c as I,d as D}from"./WGLBrushVTLSymbol.js";import{V as x}from"./VTLMaterialManager.js";import{k as P,j as O}from"./enums.js";import{S as E}from"./StyleRepository.js";import{L as V}from"./LayerView3D.js";import{T as B}from"./TiledLayerView3D.js";import{v as H,t as k}from"./terrainUtils.js";import F from"../views/layers/LayerView.js";import"../config.js";import"./handleUtils.js";import"./asyncUtils.js";import"../core/Accessor.js";import"../core/Handles.js";import"./metadata.js";import"./utils.js";import"./ObservableBase.js";import"./tracking.js";import"../core/scheduling.js";import"../core/Collection.js";import"../core/Evented.js";import"./ensureType.js";import"./shared.js";import"./SimpleObservable.js";import"./mathUtils.js";import"./vec3.js";import"./vec3f64.js";import"./common.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../core/JSONSupport.js";import"./reader.js";import"../geometry/SpatialReference.js";import"./unitUtils.js";import"./jsonMap.js";import"./assets.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"./writer.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../core/workers/workers.js";import"../core/workers/Connection.js";import"./Queue.js";import"../core/workers/RemoteClient.js";import"../intl.js";import"./date.js";import"./locale.js";import"./timeZoneUtils.js";import"./datetime.js";import"./messages.js";import"./Rect.js";import"./Texture.js";import"./pbf.js";import"./rasterizingUtils.js";import"./floatRGBA.js";import"./constants.js";import"./config.js";import"../layers/support/TileInfo.js";import"../layers/support/LOD.js";import"./TileKey.js";import"./TileStrategy.js";import"./vec2.js";import"./QueueProcessor.js";import"./ReactiveMap.js";import"../core/signal.js";import"./mat3.js";import"./enums3.js";import"./GeometryUtils.js";import"./coordsUtils.js";import"./Axis.js";import"./BufferObject.js";import"./VertexArrayObject.js";import"./TiledDisplayObject.js";import"./VertexElementDescriptor.js";import"./DisplayObject.js";import"./enums2.js";import"./vec4f32.js";import"./definitions.js";import"../Color.js";import"./colorUtils.js";import"./HighlightOptions.js";import"./vec2f32.js";import"./ShaderCompiler.js";import"./programUtils.js";import"./colorUtils2.js";import"./vec4.js";import"./vec4f64.js";import"./unitBezier.js";import"./heightModelInfoUtils.js";import"../geometry/HeightModelInfo.js";import"./arcgisLayerUrl.js";import"./persistableUrlUtils.js";import"./LayerViewPerformanceInfo.js";import"./EllipsoidMode.js";import"./Material.js";import"./interfaces5.js";import"./basicInterfaces.js";import"./ContentObject.js";import"./VertexAttribute.js";import"./aaBoundingBox.js";import"./ViewingMode.js";import"./Util.js";import"./vec2f64.js";import"./VertexArrayObject2.js";import"./StencilUtils.js";import"./mat3f64.js";import"./mat4f64.js";import"./mat4.js";import"./BindType.js";import"./ShaderTechniqueConfiguration.js";import"./doublePrecisionUtils.js";import"./lengthUtils.js";import"./debugFlags2.js";import"./requestImageUtils.js";import"./hydratedFeatures.js";import"../geometry.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"../geometry/Polygon.js";import"./extentUtils.js";import"../geometry/Polyline.js";import"./typeUtils.js";import"../geometry/support/jsonUtils.js";import"../Graphic.js";import"../PopupTemplate.js";import"../core/Clonable.js";import"../layers/support/fieldUtils.js";import"../core/sql.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"./enumeration.js";import"../popup/support/FieldInfoFormat.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/mixins/ChartMediaInfo.js";import"../popup/content/mixins/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"./chartMediaInfoUtils.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/RelationshipContent.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../support/actions/ActionBase.js";import"../core/Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"./utils4.js";import"../symbols/edges/Edges3D.js";import"./screenUtils.js";import"./materialUtils.js";import"./opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"./Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"./lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"./utils5.js";import"./colors.js";import"./symbolLayerUtils3D.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"./collectionUtils.js";import"../portal/Portal.js";import"../core/Loadable.js";import"../core/Promise.js";import"../portal/PortalGroup.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/support/StyleOrigin.js";import"./Thumbnail.js";import"./calloutUtils.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/support/Symbol3DVerticalOffset.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"./urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"./dehydratedPoint.js";import"./labelUtils.js";import"./ElevationUpdateEvent.js";import"./ElevationContext.js";import"./computeTranslationToOriginAndRotation.js";import"./projectBuffer.js";import"./geodesicConstants.js";import"./ElevationProvider.js";import"./unitConversionUtils.js";import"./graphicUtils.js";import"../geometry/projection.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"./zscale.js";import"./Attribute.js";import"./Geometry.js";import"./Indices.js";import"./triangle.js";import"./plane.js";import"./quatf64.js";import"./mathUtils2.js";import"./lineSegment.js";import"./InterleavedLayout.js";import"./BufferView.js";import"./types.js";import"./DefaultBufferWriter.js";import"./HUDMaterial.js";import"./VerticalOffset.glsl.js";import"./GLTextureMaterial.js";import"./RenderPlugin.js";import"./OutputHighlight.glsl.js";import"./OrderIndependentTransparency.js";import"./projectBoundingRect.js";import"./dehydratedFeatures.js";import"./quantizationUtils.js";import"../layers/support/Field.js";import"./domains.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"./fieldType.js";import"./featureConversionUtils.js";import"./OptimizedFeature.js";import"./OptimizedFeatureSet.js";import"./OptimizedGeometry.js";import"./sphere.js";import"./edgeUtils.js";import"./earcut.js";import"./_commonjsHelpers.js";import"./DoubleArray.js";import"./vec32.js";import"./SnappingCandidate.js";import"./visualVariableUtils.js";import"./compilerUtils.js";import"./sizeVariableUtils.js";import"./triangulationUtils.js";import"./deduplicate.js";import"./RenderGeometry.js";import"../views/3d/webgl/ManagedFBO.js";import"./IntegerPassUniform.js";import"./axisAngleDegrees.js";import"./quat.js";import"./weather.js";import"../views/3d/environment/CloudyWeather.js";import"../views/3d/environment/FoggyWeather.js";import"../views/3d/environment/RainyWeather.js";import"../views/3d/environment/SnowyWeather.js";import"../views/3d/environment/SunnyWeather.js";import"./RenderState.js";import"./NestedMap.js";import"./Camera.js";import"./frustum.js";import"./RibbonLineMaterial.js";import"./Octree.js";import"./Intersector.js";import"./Intersector2.js";import"./boundedPlane.js";import"./verticalOffsetUtils.js";import"./orientedBoundingBox.js";import"./spatialReferenceEllipsoidUtils.js";import"./glUtil.js";import"./Scheduler.js";import"./debugFlags.js";import"./Normals.js";import"./objectResourceUtils.js";import"./devEnvironmentUtils.js";import"./DefaultMaterial_COLOR_GAMMA.js";import"./Version.js";import"./resourceUtils3.js";import"./symbolColorUtils.js";import"./CameraSpace.glsl.js";import"./projectPointToVector.js";import"./CIMSymbolHelper.js";import"./BidiEngine.js";import"./fontUtils.js";import"./utils6.js";import"./shapingUtils.js";import"./mat2d.js";import"./mat2df32.js";import"./BoundingBox.js";import"./defaults.js";import"./defaultsJSON.js";import"./OverrideHelper.js";import"../symbols/support/cimSymbolUtils.js";import"./utils9.js";import"./jsonUtils.js";import"./parser.js";import"./utils3.js";import"./LRUCache.js";import"./GeometryUtil.js";import"./vec3f32.js";import"./line.js";import"./line2.js";import"./lineStippleUtils.js";import"./projectVectorToPoint.js";import"./projectVectorToVector.js";import"../geometry/support/MeshComponent.js";import"../geometry/support/MeshMaterial.js";import"../geometry/support/MeshTexture.js";import"./imageUtils.js";import"../geometry/support/MeshTextureTransform.js";import"../geometry/support/MeshMaterialMetallicRoughness.js";import"./meshVertexSpaceUtils.js";import"../geometry/support/MeshGeoreferencedVertexSpace.js";import"./georeference.js";import"../geometry/support/MeshLocalVertexSpace.js";import"../geometry/support/MeshTransform.js";import"./interfaces.js";import"./DefaultLayouts.js";import"./styleUtils.js";import"./webStyleSymbolUtils.js";import"../symbols/support/jsonUtils.js";import"./layerUtils2.js";import"./Intersector4.js";import"./ColorMaterial.js";import"./TriangleMaterial.js";import"./TerrainConst.js";import"./TilingScheme.js";import"./UpdatingHandles.js";class A{constructor(t,e,s){this._scale=t,this._shift=e,this._levelShift=s}getLevelRowColumn(t){const e=this.getLevelShift(t[0]),s=this._shift+e;return s?[t[0]-e,t[1]>>s,t[2]>>s]:t}getLevelShift(t){return Math.min(t,this._levelShift)}getOffset(t,e){let s=0,o=0;const i=this._shift+this.getLevelShift(t[0]);if(i){const r=(1<<i)-1,l=e/(this._scale*(1<<i-1));s=(t[2]&r)*l,o=(t[1]&r)*l}return[s,o]}getScale(t){return this._scale*(1<<this._shift+this.getLevelShift(t))}}class z extends b{constructor(t,e,s,o){super(t,e,s,t.tileInfo.lods.length-1),this._memCache=o,this._ongoingTileRequests=new Map,this._ongoingRequestToController=new Map,this._tileInfoView=new S(t.tileInfo,t.fullExtent)}destroy(){super.destroy(),this._ongoingRequestToController.forEach((t=>t.abort())),this._ongoingRequestToController.clear(),this._ongoingTileRequests.clear()}async getVectorTile(t,e,s,o){const i=new U(t,e,s,0);let r=this._memCache.get(i.id);if(null!=r)return r.retain(),r;const p=await this._getVectorTileData(i);if(l(o),!this._layer)return null;if(r=this._memCache.get(i.id),null!=r)return r.retain(),r;const a=this._layer.tileInfo.getTileBounds(y(),i),n=this._tileInfoView.getTileResolution(t);return r=new _(i,n,a[0],a[3],512,512,this._styleRepository,this._memCache),p?(r.setData(p),r.retain(),this._memCache.put(i.id,r,r.usedMemory,u)):r.setData(null),r.neededForCoverage=!0,r.transforms.tileUnitsToPixels=h(1/8,0,0,0,1/8,0,0,0,1),function(t){const e=[],s=new d(4096,e,(()=>{const t=new C;return t.show=!1,t.parts.push({startTime:0,startOpacity:0,targetOpacity:0,show:!1}),t.parts.push({startTime:0,startOpacity:0,targetOpacity:0,show:!1}),t})),o=new g(e,s,((e,s,o)=>new f(e,s,o,t.styleRepository,t.key.level,0)),((t,e)=>{v(t,e,!1)}),(()=>0),(e=>{const s=t.styleRepository.getStyleLayerByUID(e).getLayoutProperty("visibility");return!s||s.getValue()!==L.NONE}));e.push(t),s.add(t),o.setScreenSize(512,512),o.continue(1/0)}(r),r}_getVectorTileData(t){const e=t.id;if(this._ongoingTileRequests.has(e))return this._ongoingTileRequests.get(e);const s=new AbortController,o={signal:s.signal},i=this._getParsedVectorTileData(t,o).then((t=>(this._ongoingTileRequests.delete(e),this._ongoingRequestToController.delete(e),t))).catch((()=>(this._ongoingTileRequests.delete(e),this._ongoingRequestToController.delete(e),null)));return this._ongoingTileRequests.set(e,i),this._ongoingRequestToController.set(e,s),i}_getParsedVectorTileData(t,e){return this.fetchTileData(t,e).then((s=>this.parseTileData({key:t,data:s},e)))}}const q={vtlBackground:T,vtlFill:w,vtlLine:R,vtlCircle:I,vtlSymbol:D},G=1e-6;class N{constructor(t,e){this.spriteMosaic=t,this.glyphMosaic=e,this._brushCache=new Map,this._vtlMaterialManager=new x}dispose(){this._brushCache&&(this._brushCache.forEach((t=>t.dispose())),this._brushCache=null),this._vtlMaterialManager=o(this._vtlMaterialManager),this.spriteMosaic.dispose(),this.glyphMosaic.dispose()}get vectorTilesMaterialManager(){return this._vtlMaterialManager}drawSymbols(t,e,s){const o=s.layers;t.renderPass="translucent";for(let s=0;s<o.length;s++){const i=o[s];if(i.type!==M.SYMBOL)continue;const r=i.getLayoutProperty("visibility");if(r&&r.getValue()===L.NONE)continue;const l=t.displayLevel;void 0!==i.minzoom&&i.minzoom>l+G||void 0!==i.maxzoom&&i.maxzoom<=l-G||(t.styleLayerUID=i.uid,t.styleLayer=i,this._drawWithBrush(t,e,"vtlSymbol"))}}drawBackground(t,e,s){if(0===s.backgroundBucketIds.length)return;const{context:o,displayLevel:i,requiredLevel:r}=t;e.key.level=r,o.setBlendingEnabled(!0),o.setDepthTestEnabled(!1),o.setStencilTestEnabled(!1),t.renderPass="background",s.backgroundBucketIds.forEach((o=>{const r=s.getLayerById(o);if(r.type!==M.BACKGROUND)return;const l=r.getLayoutProperty("visibility");l&&l.getValue()===L.NONE||void 0!==r.minzoom&&r.minzoom>i+G||void 0!==r.maxzoom&&r.maxzoom<=i-G||(t.styleLayerUID=r.uid,t.styleLayer=r,this._drawWithBrush(t,e,"vtlBackground"))}))}drawTile(t,e,s,o){const{context:i}=t,r=s.layers;i.setBlendingEnabled(!1),i.setDepthTestEnabled(!0),i.setDepthWriteEnabled(!0),i.setDepthFunction(P.LEQUAL),t.renderPass="opaque";for(let s=r.length-1;s>=0;s--){const i=r[s];null!=o&&o!==i.type||this._renderStyleLayer(i,t,e,!1)}i.setDepthWriteEnabled(!1),i.setBlendingEnabled(!0),i.setBlendFunctionSeparate(O.ONE,O.ONE_MINUS_SRC_ALPHA,O.ONE,O.ONE_MINUS_SRC_ALPHA),t.renderPass="translucent";for(let s=0;s<r.length;s++){const i=r[s];null!=o&&o!==i.type||this._renderStyleLayer(i,t,e,!1)}i.setDepthTestEnabled(!1),i.bindVAO()}_renderStyleLayer(t,e,s,o){if(!(o||t&&s.layerData.has(t.uid)))return;const i=t.getLayoutProperty("visibility");if(i&&i.getValue()===L.NONE)return;const{renderPass:r}=e;let l;switch(t.type){case M.BACKGROUND:if("background"!==r)return;l="vtlBackground";break;case M.FILL:if("opaque"!==r&&"translucent"!==e.renderPass)return;l="vtlFill";break;case M.LINE:if("translucent"!==r)return;l="vtlLine";break;case M.CIRCLE:if("translucent"!==r)return;l="vtlCircle";break;case M.SYMBOL:if("translucent"!==r)return;l="vtlSymbol"}const p=e.displayLevel;if(void 0!==t.minzoom&&t.minzoom>p+G||void 0!==t.maxzoom&&t.maxzoom<=p-G)return;const{context:a}=e;a.setStencilTestEnabled(!1),a.setStencilWriteMask(0),e.styleLayerUID=t.uid,e.styleLayer=t,this._drawWithBrush(e,s,l)}_drawWithBrush(t,e,s){if(!this._brushCache.has(s)){const t=q[s];this._brushCache.set(s,new t)}this._brushCache.get(s).drawMany(t,[e])}}let W=class extends(B(V(F))){constructor(){super(...arguments),this._tileHandlerController=null,this.type="vector-tile-3d",this.levelShift=s("disable-feature:vtl-level-shift")?0:1}initialize(){if(null==this.layer.fullExtent)return void this.addResolvingPromise(Promise.reject(new e("vectortilelayerview:full-extent-undefined","This layer view's layer does not define a fullExtent.")));const{basemapTerrain:t,spatialReference:s,state:o,viewingMode:i}=this.view,r="local"===i&&!H(s)||k.force512VTL,l=this.layer.tileInfo.spatialReference.isGeographic,j=r?this.layer.tileInfo:this.layer.tileInfo.getOrCreateCompatible(256,l?1:2),c=this._getTileInfoSupportError(j,this.layer.fullExtent);if(null!=c)return this.addResolvingPromise(Promise.reject(c));const u=a((()=>this.view?.basemapTerrain?.tilingSchemeLocked)).then((()=>{const e=t.tilingScheme,s=e.pixelSize,o=256===s?1:2,i=t.spatialReference?.isGeographic&&256===s?1:0,r=t.spatialReference?.isGeographic||256!==s?0:1;let l;if(this.schemaHelper=new A(o,i,this.levelShift+r),256===s){const t=this.layer.tileInfo.spatialReference.isGeographic;l=this.layer.tileInfo.getOrCreateCompatible(256,t?1:2)}else l=this.view.spatialReference?.isGeographic?this.layer.tileInfo.getOrCreateCompatible(512,.5):this.layer.tileInfo;const p=this._getTileInfoCompatibilityError(l,e);if(p)throw p;this.tileInfo=l}));this._tileHandlerController=new AbortController;const h=this.view.resourceController;this._memCache=h.memoryController.newCache(`vtl-${this.layer.uid}`,(t=>{t.release()})),this.addHandles(n((()=>this.view.qualitySettings.memoryLimit),(t=>this._memCache.maxSize=Math.ceil(t/10*1048576)),m));const y=new E(this.layer.currentStyleInfo.style);this._tileHandler=new z(this.layer,y,o.contentPixelRatio,this._memCache);const d=this._tileHandlerController.signal,g=function(t){return e=>t.immediate.schedule(e)}(h),f=this._tileHandler.start({signal:d,schedule:g}),b=this._tileHandler.spriteMosaic;b.then((t=>{!p(d)&&this._tileHandler&&(this.painter=new N(t,this._tileHandler.glyphMosaic))})),f.then((()=>this._tileHandlerController=null)),this._updatingHandles.add((()=>({style:this.layer.currentStyleInfo.style,pixelRatio:this.view.state?.contentPixelRatio})),(({style:t,pixelRatio:e})=>{this._tileHandlerController&&this._tileHandlerController.abort(),this._tileHandlerController=new AbortController,this._memCache.clear();const s=new E(t),o=new z(this.layer,s,e,this._memCache),i=o.start({signal:this._tileHandlerController.signal,schedule:g}),r=o.spriteMosaic;i.then((()=>this._tileHandlerController=null)),this._updatingHandles.addPromise(Promise.all([i,r]).then((([,t])=>{const e=this._tileHandler,s=this.painter;this.painter=new N(t,o.glyphMosaic),this._tileHandler=o,this.emit("data-changed"),e.destroy(),s&&s.dispose()})))}));const S=Promise.all([u,f,b]);this.addResolvingPromise(S)}destroy(){this.painter=o(this.painter),this._tileHandlerController=i(this._tileHandlerController),this._tileHandler=r(this._tileHandler),this._memCache=r(this._memCache)}get contentZoom(){return s("disable-feature:vtl-level-shift")?1:this.view.qualitySettings.tiledSurface.vtlContentZoom}get displayLevelRange(){const t=this.tileInfo.lods,e=this.layer.minScale||t[0].scale,s=this.layer.maxScale||t[t.length-1].scale,o=this.levelRangeFromScaleRange(e,s);return this.layer.maxScale?o.maxLevel++:o.maxLevel+=this.levelShift,o}get dataScaleRange(){const t=this.tileInfo.lods;return{minScale:t[0].scale,maxScale:t[t.length-1].scale}}get dataLevelRange(){const{minScale:t,maxScale:e}=this.dataScaleRange,s=this.levelRangeFromScaleRange(t,e);return 1===s.minLevel&&256===this.tileInfo.size[0]&&(s.minLevel=0),s.maxLevel+=this.levelShift,s}async fetchTile(t,e,s,o){return this._tileHandler.getVectorTile(t,e,s,o)}};t([j()],W.prototype,"layer",void 0),t([j()],W.prototype,"levelShift",void 0),t([j()],W.prototype,"contentZoom",null),t([j()],W.prototype,"displayLevelRange",null),t([j()],W.prototype,"tileInfo",void 0),t([j()],W.prototype,"dataScaleRange",null),t([j()],W.prototype,"dataLevelRange",null),t([j()],W.prototype,"updatingProgressValue",void 0),W=t([c("esri.views.3d.layers.VectorTileLayerView3D")],W);const Q=W;export{Q as default};
