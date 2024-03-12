/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as r}from"./tslib.es6.js";import o from"../PopupTemplate.js";import t from"../core/Collection.js";import{watch as s,initial as e}from"../core/reactiveUtils.js";import"./Logger.js";import"../core/lang.js";import"../core/Error.js";import{subclass as i}from"../core/accessorSupport/decorators/subclass.js";import p from"../renderers/SimpleRenderer.js";import{fromJSON as m}from"../renderers/support/jsonUtils.js";import l from"../rest/support/FeatureSet.js";import{L as a}from"./LayerView2D.js";import{G as n}from"./GraphicContainer.js";import{G as j}from"./GraphicsView2D.js";import y from"../views/layers/LayerView.js";import"../core/Clonable.js";import"../core/Accessor.js";import"../core/Handles.js";import"./maybe.js";import"../core/accessorSupport/decorators/property.js";import"./ensureType.js";import"./utils.js";import"./handleUtils.js";import"./metadata.js";import"./ObservableBase.js";import"./tracking.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../config.js";import"../core/JSONSupport.js";import"../core/accessorSupport/decorators/cast.js";import"./reader.js";import"./writer.js";import"../layers/support/fieldUtils.js";import"../core/sql.js";import"../intl.js";import"./date.js";import"./jsonMap.js";import"./locale.js";import"./timeZoneUtils.js";import"./datetime.js";import"./messages.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"./assets.js";import"./mathUtils.js";import"./vec3.js";import"./vec3f64.js";import"./common.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../geometry/SpatialReference.js";import"./unitUtils.js";import"../geometry/Point.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"../geometry/Polygon.js";import"./coordsUtils.js";import"./Axis.js";import"./extentUtils.js";import"./aaBoundingRect.js";import"../geometry/Polyline.js";import"./typeUtils.js";import"../geometry/support/jsonUtils.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"./enumeration.js";import"../popup/support/FieldInfoFormat.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/mixins/ChartMediaInfo.js";import"../popup/content/mixins/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../Color.js";import"./colorUtils.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"./chartMediaInfoUtils.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/RelationshipContent.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../support/actions/ActionBase.js";import"../core/Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../core/Evented.js";import"./shared.js";import"./SimpleObservable.js";import"./asyncUtils.js";import"../renderers/Renderer.js";import"../renderers/support/AuthoringInfo.js";import"../renderers/support/AuthoringInfoVisualVariable.js";import"./colorRamps.js";import"../rest/support/AlgorithmicColorRamp.js";import"../rest/support/ColorRamp.js";import"../rest/support/MultipartColorRamp.js";import"../renderers/mixins/VisualVariablesMixin.js";import"../renderers/visualVariables/ColorVariable.js";import"../renderers/visualVariables/VisualVariable.js";import"./LegendOptions.js";import"../renderers/visualVariables/support/ColorStop.js";import"../renderers/visualVariables/OpacityVariable.js";import"../renderers/visualVariables/support/OpacityStop.js";import"./opacityUtils.js";import"../renderers/visualVariables/RotationVariable.js";import"../renderers/visualVariables/SizeVariable.js";import"./screenUtils.js";import"../renderers/visualVariables/support/SizeStop.js";import"./sizeVariableUtils.js";import"./visualVariableUtils.js";import"../Graphic.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"./utils4.js";import"../symbols/edges/Edges3D.js";import"./materialUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"./Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"./lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"./utils5.js";import"./colors.js";import"./symbolLayerUtils3D.js";import"./aaBoundingBox.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"./persistableUrlUtils.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"./collectionUtils.js";import"../portal/Portal.js";import"../core/Loadable.js";import"../core/Promise.js";import"../portal/PortalGroup.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/support/StyleOrigin.js";import"./Thumbnail.js";import"./calloutUtils.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/support/Symbol3DVerticalOffset.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"./urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"./compilerUtils.js";import"./lengthUtils.js";import"./commonProperties.js";import"../symbols/support/jsonUtils.js";import"./layerUtils2.js";import"../renderers/ClassBreaksRenderer.js";import"../renderers/support/ClassBreakInfo.js";import"../renderers/DictionaryRenderer.js";import"./LRUCache.js";import"./MemCache.js";import"./Version.js";import"../layers/support/FieldsIndex.js";import"./UnknownTimeZone.js";import"./OverrideHelper.js";import"./colorUtils2.js";import"./vec4.js";import"./vec4f64.js";import"./CIMSymbolHelper.js";import"./BidiEngine.js";import"./fontUtils.js";import"./OptimizedGeometry.js";import"./GeometryUtils.js";import"./enums2.js";import"./utils6.js";import"./definitions.js";import"./HighlightOptions.js";import"./shapingUtils.js";import"./mat2d.js";import"./mat2df32.js";import"./vec2.js";import"./vec2f32.js";import"./Rect.js";import"./BoundingBox.js";import"./defaults.js";import"./defaultsJSON.js";import"./quantizationUtils.js";import"../renderers/DotDensityRenderer.js";import"../renderers/support/AttributeColorInfo.js";import"../renderers/HeatmapRenderer.js";import"../renderers/support/HeatmapColorStop.js";import"./heatmapUtils.js";import"../renderers/PieChartRenderer.js";import"../renderers/UniqueValueRenderer.js";import"./diffUtils.js";import"../renderers/support/UniqueValue.js";import"../renderers/support/UniqueValueClass.js";import"../renderers/support/UniqueValueGroup.js";import"../renderers/support/UniqueValueInfo.js";import"./styleUtils.js";import"../layers/support/Field.js";import"./domains.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"./fieldType.js";import"./scaleUtils.js";import"./Container.js";import"./mat3f32.js";import"./EffectView.js";import"./parser.js";import"./utils3.js";import"./mat4.js";import"./_commonjsHelpers.js";import"./DisplayObject.js";import"./enums.js";import"./Texture.js";import"./ClipRect.js";import"./AGraphicContainer.js";import"./TechniqueInstance.js";import"./UpdateTracking2D.js";import"./libtess.js";import"./earcut.js";import"./dataViewUtils.js";import"./FramebufferObject.js";import"./BufferObject.js";import"./Program.js";import"./VertexElementDescriptor.js";import"./TurboLine.js";import"./BindType.js";import"./Util.js";import"./vec2f64.js";import"./ReactiveMap.js";import"./UpdatingHandles.js";import"./TileContainer.js";import"./WGLContainer.js";import"./VertexArrayObject.js";import"./WGLBrushVTLSymbol.js";import"./vec4f32.js";import"./StyleDefinition.js";import"./config.js";import"./ShaderCompiler.js";import"./ProgramTemplate.js";import"./TiledDisplayObject.js";import"./mat3.js";import"./TileKey2.js";import"./featureConversionUtils.js";import"./OptimizedFeature.js";import"./OptimizedFeatureSet.js";import"./FeatureCommandQueue.js";import"./heatmapTextureUtils.js";import"./constants.js";import"./capabilities.js";import"./QueueProcessor.js";import"./Queue.js";import"../core/signal.js";import"./vec3f32.js";import"../geometry/support/normalizeUtils.js";import"./normalizeUtilsCommon.js";import"./simplify.js";import"./utils7.js";import"./utils8.js";import"./AttributeStore.js";import"./TimeOnly.js";import"./timeSupport.js";import"../geometry/projection.js";import"./projectBuffer.js";import"./geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"./zscale.js";import"./projectionSupport.js";import"./json.js";import"../rest/support/Query.js";import"../TimeExtent.js";import"./timeUtils.js";import"./DataLayerSource.js";import"./FullTextSearch.js";import"./spatialRelationships.js";import"../rest/support/StatisticDefinition.js";import"./Tile.js";import"./quickselect.js";import"./normalizeUtilsSync.js";let u=class extends(a(y)){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[]}async hitTest(r,o){if(!this.graphicsViews.length)return null;const t=this.layer;return this.graphicsViews.reverse().flatMap((o=>{const s=this._popupTemplates.get(o),e=o.hitTest(r);for(const r of e)r.layer=t,r.sourceLayer=t,r.popupTemplate=s;return e})).map((o=>({type:"graphic",graphic:o,layer:t,mapPoint:r})))}update(r){if(this.graphicsViews)for(const o of this.graphicsViews)o.processUpdate(r)}attach(){this.addAttachHandles([s((()=>this.layer?.featureCollections),(r=>{this._clear();for(const{popupInfo:s,featureSet:e,layerDefinition:i}of r){const r=l.fromJSON(e),p=new t(r.features),a=i.drawingInfo,y=s?o.fromJSON(s):null,u=m(a.renderer),c=new j({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:p,renderer:u,container:new n(this.view.featuresTilingScheme)});this._graphicsViewMap[r.geometryType]=c,this._popupTemplates.set(c,y),"polygon"!==r.geometryType||this.layer.polygonSymbol?"polyline"!==r.geometryType||this.layer.lineSymbol?"point"!==r.geometryType||this.layer.pointSymbol||(this.layer.pointSymbol=u.symbol):this.layer.lineSymbol=u.symbol:this.layer.polygonSymbol=u.symbol,this.graphicsViews.push(c),this.container.addChild(c.container)}}),e),s((()=>this.layer?.polygonSymbol),(r=>{this._graphicsViewMap.polygon.renderer=new p({symbol:r})}),e),s((()=>this.layer?.lineSymbol),(r=>{this._graphicsViewMap.polyline.renderer=new p({symbol:r})}),e),s((()=>this.layer?.pointSymbol),(r=>{this._graphicsViewMap.point.renderer=new p({symbol:r})}),e)])}detach(){this._clear()}moveStart(){}moveEnd(){}viewChange(){for(const r of this.graphicsViews)r.viewChange()}_clear(){this.container.removeAllChildren();for(const r of this.graphicsViews)r.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0}};u=r([i("esri.views.2d.layers.GeoRSSLayerView2D")],u);const c=u;export{c as default};
