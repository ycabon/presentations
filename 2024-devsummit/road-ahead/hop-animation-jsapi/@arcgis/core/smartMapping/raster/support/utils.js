/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import s from"../../../core/Error.js";import{p as t,o as r,h as e}from"../../../chunks/rasterRendererHelper.js";import{_ as o}from"../../../chunks/tslib.es6.js";import"../../../geometry.js";import{property as i}from"../../../core/accessorSupport/decorators/property.js";import"../../../core/lang.js";import"../../../chunks/Logger.js";import{subclass as a}from"../../../core/accessorSupport/decorators/subclass.js";import{j as p,h as n}from"../../../chunks/stretchUtils.js";import m from"../../../rest/support/ImageHistogramParameters.js";import l from"../../../core/Loadable.js";import{L as u}from"../../../chunks/LRUCache.js";import c from"../../../geometry/Point.js";import j from"../../../geometry/Extent.js";import"../../../config.js";import"../../../Color.js";import"../../../chunks/colorUtils.js";import"../../../chunks/mathUtils.js";import"../../../chunks/vec3.js";import"../../../chunks/vec3f64.js";import"../../../chunks/common.js";import"../../../chunks/ensureType.js";import"../../../rasterRenderers.js";import"../../../renderers/ClassBreaksRenderer.js";import"../../../symbols.js";import"../../../symbols/CIMSymbol.js";import"../../../chunks/enumeration.js";import"../../../chunks/jsonMap.js";import"../../../chunks/reader.js";import"../../../chunks/writer.js";import"../../../layers/support/fieldUtils.js";import"../../../core/Accessor.js";import"../../../core/Handles.js";import"../../../chunks/maybe.js";import"../../../chunks/metadata.js";import"../../../chunks/utils.js";import"../../../chunks/handleUtils.js";import"../../../chunks/ObservableBase.js";import"../../../chunks/tracking.js";import"../../../core/scheduling.js";import"../../../core/promiseUtils.js";import"../../../core/sql.js";import"../../../intl.js";import"../../../chunks/date.js";import"../../../chunks/locale.js";import"../../../chunks/timeZoneUtils.js";import"../../../chunks/datetime.js";import"../../../chunks/messages.js";import"../../../request.js";import"../../../kernel.js";import"../../../core/urlUtils.js";import"../../../core/JSONSupport.js";import"../../../chunks/assets.js";import"../../../geometry/SpatialReference.js";import"../../../chunks/unitUtils.js";import"../../../symbols/Symbol.js";import"../../../geometry/Geometry.js";import"../../../core/accessorSupport/decorators/cast.js";import"../../../geometry/support/webMercatorUtils.js";import"../../../geometry/Multipoint.js";import"../../../chunks/zmUtils.js";import"../../../geometry/Polygon.js";import"../../../chunks/coordsUtils.js";import"../../../chunks/Axis.js";import"../../../chunks/extentUtils.js";import"../../../chunks/aaBoundingRect.js";import"../../../geometry/Polyline.js";import"../../../chunks/typeUtils.js";import"../../../geometry/support/jsonUtils.js";import"../../../symbols/ExtrudeSymbol3DLayer.js";import"../../../symbols/Symbol3DLayer.js";import"../../../chunks/utils4.js";import"../../../symbols/edges/Edges3D.js";import"../../../chunks/screenUtils.js";import"../../../chunks/materialUtils.js";import"../../../chunks/opacityUtils.js";import"../../../symbols/edges/SketchEdges3D.js";import"../../../symbols/edges/SolidEdges3D.js";import"../../../chunks/Symbol3DMaterial.js";import"../../../symbols/FillSymbol.js";import"../../../symbols/SimpleLineSymbol.js";import"../../../symbols/LineSymbol.js";import"../../../symbols/LineSymbolMarker.js";import"../../../chunks/lineMarkers.js";import"../../../symbols/FillSymbol3DLayer.js";import"../../../symbols/patterns/LineStylePattern3D.js";import"../../../symbols/patterns/StylePattern3D.js";import"../../../chunks/utils5.js";import"../../../chunks/colors.js";import"../../../chunks/symbolLayerUtils3D.js";import"../../../chunks/aaBoundingBox.js";import"../../../symbols/Font.js";import"../../../symbols/IconSymbol3DLayer.js";import"../../../chunks/persistableUrlUtils.js";import"../../../symbols/LabelSymbol3D.js";import"../../../core/Collection.js";import"../../../core/Evented.js";import"../../../chunks/shared.js";import"../../../chunks/SimpleObservable.js";import"../../../symbols/Symbol3D.js";import"../../../chunks/collectionUtils.js";import"../../../portal/Portal.js";import"../../../portal/PortalGroup.js";import"../../../portal/PortalQueryParams.js";import"../../../portal/PortalQueryResult.js";import"../../../portal/PortalUser.js";import"../../../portal/PortalFolder.js";import"../../../core/Promise.js";import"../../../symbols/LineSymbol3DLayer.js";import"../../../symbols/LineStyleMarker3D.js";import"../../../core/Clonable.js";import"../../../symbols/ObjectSymbol3DLayer.js";import"../../../symbols/PathSymbol3DLayer.js";import"../../../symbols/TextSymbol3DLayer.js";import"../../../symbols/WaterSymbol3DLayer.js";import"../../../symbols/support/StyleOrigin.js";import"../../../chunks/Thumbnail.js";import"../../../chunks/calloutUtils.js";import"../../../symbols/callouts/Callout3D.js";import"../../../symbols/callouts/LineCallout3D.js";import"../../../symbols/support/Symbol3DVerticalOffset.js";import"../../../symbols/LineSymbol3D.js";import"../../../symbols/MarkerSymbol.js";import"../../../symbols/MeshSymbol3D.js";import"../../../symbols/PictureFillSymbol.js";import"../../../chunks/urlUtils.js";import"../../../symbols/PictureMarkerSymbol.js";import"../../../symbols/PointSymbol3D.js";import"../../../symbols/PolygonSymbol3D.js";import"../../../core/reactiveUtils.js";import"../../../chunks/asyncUtils.js";import"../../../symbols/SimpleFillSymbol.js";import"../../../symbols/SimpleMarkerSymbol.js";import"../../../symbols/TextSymbol.js";import"../../../symbols/WebStyleSymbol.js";import"../../../renderers/Renderer.js";import"../../../renderers/support/AuthoringInfo.js";import"../../../renderers/support/AuthoringInfoVisualVariable.js";import"../../../chunks/colorRamps.js";import"../../../rest/support/AlgorithmicColorRamp.js";import"../../../rest/support/ColorRamp.js";import"../../../rest/support/MultipartColorRamp.js";import"../../../renderers/mixins/VisualVariablesMixin.js";import"../../../renderers/visualVariables/ColorVariable.js";import"../../../renderers/visualVariables/VisualVariable.js";import"../../../chunks/LegendOptions.js";import"../../../renderers/visualVariables/support/ColorStop.js";import"../../../renderers/visualVariables/OpacityVariable.js";import"../../../renderers/visualVariables/support/OpacityStop.js";import"../../../renderers/visualVariables/RotationVariable.js";import"../../../renderers/visualVariables/SizeVariable.js";import"../../../renderers/visualVariables/support/SizeStop.js";import"../../../chunks/sizeVariableUtils.js";import"../../../chunks/visualVariableUtils.js";import"../../../Graphic.js";import"../../../PopupTemplate.js";import"../../../popup/content.js";import"../../../popup/content/AttachmentsContent.js";import"../../../popup/content/Content.js";import"../../../popup/content/CustomContent.js";import"../../../popup/content/ExpressionContent.js";import"../../../popup/ElementExpressionInfo.js";import"../../../popup/content/FieldsContent.js";import"../../../popup/FieldInfo.js";import"../../../popup/support/FieldInfoFormat.js";import"../../../popup/content/MediaContent.js";import"../../../popup/content/BarChartMediaInfo.js";import"../../../popup/content/mixins/ChartMediaInfo.js";import"../../../popup/content/mixins/MediaInfo.js";import"../../../popup/content/support/ChartMediaInfoValue.js";import"../../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../../chunks/chartMediaInfoUtils.js";import"../../../popup/content/ColumnChartMediaInfo.js";import"../../../popup/content/ImageMediaInfo.js";import"../../../popup/content/support/ImageMediaInfoValue.js";import"../../../popup/content/LineChartMediaInfo.js";import"../../../popup/content/PieChartMediaInfo.js";import"../../../popup/content/RelationshipContent.js";import"../../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../../popup/content/TextContent.js";import"../../../popup/ExpressionInfo.js";import"../../../popup/LayerOptions.js";import"../../../popup/RelatedRecordsInfo.js";import"../../../support/actions/ActionBase.js";import"../../../core/Identifiable.js";import"../../../support/actions/ActionButton.js";import"../../../support/actions/ActionToggle.js";import"../../../chunks/compilerUtils.js";import"../../../chunks/lengthUtils.js";import"../../../renderers/support/ClassBreakInfo.js";import"../../../chunks/commonProperties.js";import"../../../symbols/support/jsonUtils.js";import"../../../chunks/layerUtils2.js";import"../../../renderers/FlowRenderer.js";import"../../../renderers/RasterColormapRenderer.js";import"../../../renderers/support/ColormapInfo.js";import"../../../chunks/colorRampUtils.js";import"../../../chunks/colorUtils2.js";import"../../../chunks/vec4.js";import"../../../chunks/vec4f64.js";import"../../../renderers/RasterShadedReliefRenderer.js";import"../../../renderers/RasterStretchRenderer.js";import"../../../chunks/stretchRendererUtils.js";import"../../../renderers/UniqueValueRenderer.js";import"../../../chunks/diffUtils.js";import"../../../renderers/support/UniqueValue.js";import"../../../renderers/support/UniqueValueClass.js";import"../../../renderers/support/UniqueValueGroup.js";import"../../../renderers/support/UniqueValueInfo.js";import"../../../chunks/styleUtils.js";import"../../../renderers/VectorFieldRenderer.js";import"../../../geometry/support/normalizeUtils.js";import"../../../chunks/normalizeUtilsCommon.js";import"../../../chunks/simplify.js";import"../../../chunks/utils7.js";import"../../../chunks/utils8.js";import"../../../chunks/vectorFieldUtils.js";import"../../../layers/support/PixelBlock.js";import"../../../chunks/pixelRangeUtils.js";import"../../../chunks/utils9.js";import"../../../chunks/jsonUtils.js";import"../../../chunks/parser.js";import"../../../chunks/utils3.js";import"../../../chunks/mat4.js";import"../../../chunks/_commonjsHelpers.js";import"../../../symbols/support/cimSymbolUtils.js";import"../../../chunks/utils6.js";import"../../../chunks/MemCache.js";import"../../../layers/support/Field.js";import"../../../chunks/domains.js";import"../../../layers/support/CodedValueDomain.js";import"../../../layers/support/Domain.js";import"../../../layers/support/InheritedDomain.js";import"../../../layers/support/RangeDomain.js";import"../../../chunks/fieldType.js";import"../../../chunks/generateRendererUtils.js";import"../../../TimeExtent.js";import"../../../chunks/timeUtils.js";import"../../../layers/support/MosaicRule.js";import"../../../layers/support/DimensionalDefinition.js";import"../../../layers/support/RasterFunction.js";let h=class extends l{constructor(){super(...arguments),this.type="raster-layer-adapter",this._statsCache=new u(20)}get serviceRasterInfo(){return this.rasterInfo}async updateRasterInfo(s){this.rasterInfo=await this.generateRasterInfo(s),this.rasterFunction=s?.rasterFunction}async updateRasterInfoWithEstimatedStats(s){const t=this.rasterInfo;if(null==t.histograms||null==t.statistics){const r=await this.estimateStatisticsHistograms(s);null!=r&&(null==t.statistics&&(t.statistics=r.statistics),null==t.histograms&&(t.histograms=r.histograms))}}};o([i()],h.prototype,"layer",void 0),o([i()],h.prototype,"serviceRasterInfo",null),o([i()],h.prototype,"rasterInfo",void 0),o([i()],h.prototype,"rasterFunction",void 0),o([i({readOnly:!0})],h.prototype,"type",void 0),o([i()],h.prototype,"version",void 0),h=o([a("esri.smartMapping.support.adapters.RasterLayerAdapter")],h);const y=h;let d=class extends y{generateRasterInfo(s){const t=s?.rasterFunction;try{return this.layer.generateRasterInfo(t,{signal:s?.signal})}catch{return Promise.resolve(this.layer.serviceRasterInfo)}}async estimateStatisticsHistograms(s){const{layer:t}=this,r=t.mosaicRule?.multidimensionalDefinition?.[0]?.variableName??"",e=`${s?.rasterFunction?.functionName??"default"}${r}`,o=this._statsCache.get(e);if(o)return o;let{width:i,height:a,pixelSize:n}=t.rasterInfo,l=1;for(;i>2e3||a>2e3;)i/=2,a/=2,l*=2;const u=s?.rasterFunction??t.rasterFunction,{fullExtent:j,mosaicRule:h}=t;n=new c(n.x*l,n.y*l,j.spatialReference);const y=new m({geometry:j,pixelSize:n,renderingRule:u,mosaicRule:h});let d;if(t.capabilities.operations.supportsComputeStatisticsHistograms)d=await t.computeStatisticsHistograms(y,s);else{const{histograms:r}=await t.computeHistograms(y,s);d={statistics:p(r),histograms:r}}return d&&this._statsCache.put(e,d),d}supportsMultidirectionalHillshade(){return this.layer.version>=10.81}load(s){return this.addResolvingPromise(this.layer.load(s).then((()=>{this.generateRasterInfo({rasterFunction:this.rasterFunction,signal:s?.signal}).then((s=>this.rasterInfo=s))}))),Promise.resolve(this)}};o([i()],d.prototype,"layer",void 0),d=o([a("esri.smartMapping.support.adapters.ImageryLayerAdapter")],d);const b=d;let f=class extends y{async generateRasterInfo(s){const{layer:t}=this,r=s?.rasterFunction;if("imagery-tile"===t.type&&r)try{return t.generateRasterInfo(r,{signal:s?.signal})}catch{return t.serviceRasterInfo}return this.rasterInfo}async estimateStatisticsHistograms(t){const{layer:r}=this,e=r.multidimensionalDefinition?.[0]?.variableName??"",o=`${r.rasterFunction?.functionName??"default"}${e}`,i=this._statsCache.get(o);if(i)return i;const{raster:a}=r,{extent:p,width:m,height:l}=this._getSamplePixelBlockDescriptor(a.rasterInfo),{pixelBlock:u}=await r.fetchPixels(p,m,l,t);if(null==u)throw new s("raster-layer-adapter","Unable to estimate histograms");const c=n(u);return c&&this._statsCache.put(o,c),c}supportsMultidirectionalHillshade(){return!0}load(s){return this.addResolvingPromise(this.layer.load(s).then((()=>this.rasterInfo=this.layer.raster.rasterInfo))),Promise.resolve(this)}_getSamplePixelBlockDescriptor(s,t=1e3){const{pyramidScalingFactor:r,maximumPyramidLevel:e}=s.storageInfo;let{extent:o,width:i,height:a,pixelSize:p}=s,n=Math.ceil(Math.log(Math.max(i,a)/t)/Math.log(r))-1,m=0,l=0;if(n<=e){const s=r**n;i=Math.floor(i/s),a=Math.floor(a/s)}else n=0,i=Math.min(i,t),a=Math.min(a,t),m=Math.max(Math.floor(i/2-500),0),l=Math.max(Math.floor(a/2-500),0),o=new j({xmin:o.xmin+m*p.x,xmax:Math.min(o.xmax,o.xmin+m*p.x*t),ymin:o.ymin+l*p.y,ymax:Math.min(o.ymax,o.ymin+l*p.y*t)});return{extent:o,width:i,height:a,origin:{x:m,y:l}}}};o([i()],f.prototype,"layer",void 0),f=o([a("esri.smartMapping.support.adapters.ImageryTileLayerAdapter")],f);const k={imagery:{adapter:b,label:"ImageryLayer"},"imagery-tile":{adapter:f,label:"ImageryTileLayer"},wcs:{adapter:f,label:"WCSLayer"}},g={"raster-stretch":"raster-stretch","unique-value":"raster-unique-value","raster-rgb":"raster-rgb","class-breaks":"raster-class-breaks","raster-colormap":"raster-colormap","raster-shaded-relief":"raster-shaded-relief","vector-field":"raster-vector-field",flow:"raster-flow"},S=Object.keys(k).map((s=>k[s].label));function R(s){if("raster-layer-adapter"===s.type)return s;const t=k[s.type]?.adapter;return null==t?null:new t({layer:s})}async function I(s){const e=R((s=await x(s)).layer),o=await e.generateRasterInfo(s),i=t(o,!0).map((s=>g[s])),a=r(o),{bandCount:p}=o;return p>1&&i.push("raster-rgb"),!i.includes("raster-class-breaks")&&1===p&&+e.layer?.version>=10.3&&i.push("raster-class-breaks"),{supportedTypes:i,defaultRenderer:a}}async function U(s){const t=R((s=await x(s)).layer),r=await t.generateRasterInfo(s);return e(r)}async function x(t){const{layer:r}=t;if(!r)throw new s("raster-renderer-creator:missing-parameters","'layer' parameter is required");const e=R(r);if(null==e)throw new s("raster-renderer-creator:invalid-parameters","'layer' must be one of these types: "+S.join(", "));await e.load();const o=t.rasterFunction??t.renderingRule;return await e.updateRasterInfo({rasterFunction:o,signal:t.signal}),{...t,layer:e,rasterFunction:o}}export{R as createRasterLayerAdapter,U as getDefaultBandCombination,I as getSupportedRendererInfo,x as processRasterRendererParameters};
