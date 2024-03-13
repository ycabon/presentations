/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as t}from"../chunks/tslib.es6.js";import{property as s}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"../chunks/Logger.js";import{subclass as e}from"../core/accessorSupport/decorators/subclass.js";import r from"../layers/FeatureLayer.js";import{q as o}from"../chunks/featureQueryAll.js";import i from"./Network.js";import n from"../request.js";import{JSONSupportMixin as p}from"../core/JSONSupport.js";import a from"../core/Loadable.js";import{R as m}from"../chunks/typeUtils2.js";import l from"./support/NamedTraceConfiguration.js";import u from"./support/NetworkSystemLayers.js";import c from"./support/TerminalConfiguration.js";import j from"./support/TraceJobInfo.js";import y from"../rest/support/Query.js";import"../chunks/ensureType.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../core/Error.js";import"../config.js";import"../chunks/tracking.js";import"../PopupTemplate.js";import"../core/Clonable.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/maybe.js";import"../chunks/ObservableBase.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../core/Collection.js";import"../core/Evented.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../core/accessorSupport/decorators/cast.js";import"../chunks/reader.js";import"../chunks/writer.js";import"../layers/support/fieldUtils.js";import"../core/sql.js";import"../intl.js";import"../chunks/date.js";import"../chunks/jsonMap.js";import"../chunks/locale.js";import"../chunks/timeZoneUtils.js";import"../chunks/datetime.js";import"../chunks/messages.js";import"../chunks/assets.js";import"../core/urlUtils.js";import"../chunks/mathUtils.js";import"../chunks/vec3.js";import"../chunks/vec3f64.js";import"../chunks/common.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../geometry/SpatialReference.js";import"../chunks/unitUtils.js";import"../kernel.js";import"../geometry/Point.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/coordsUtils.js";import"../chunks/Axis.js";import"../chunks/extentUtils.js";import"../chunks/aaBoundingRect.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"../chunks/enumeration.js";import"../popup/support/FieldInfoFormat.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/mixins/ChartMediaInfo.js";import"../popup/content/mixins/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../Color.js";import"../chunks/colorUtils.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../chunks/chartMediaInfoUtils.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/RelationshipContent.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../support/actions/ActionBase.js";import"../core/Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../renderers/ClassBreaksRenderer.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"../chunks/utils4.js";import"../symbols/edges/Edges3D.js";import"../chunks/screenUtils.js";import"../chunks/materialUtils.js";import"../chunks/opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"../chunks/Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../chunks/lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"../chunks/utils5.js";import"../chunks/colors.js";import"../chunks/symbolLayerUtils3D.js";import"../chunks/aaBoundingBox.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../chunks/persistableUrlUtils.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"../chunks/collectionUtils.js";import"../portal/Portal.js";import"../portal/PortalGroup.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../core/Promise.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/support/StyleOrigin.js";import"../chunks/Thumbnail.js";import"../chunks/calloutUtils.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/support/Symbol3DVerticalOffset.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"../chunks/urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../core/reactiveUtils.js";import"../chunks/asyncUtils.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../renderers/Renderer.js";import"../renderers/support/AuthoringInfo.js";import"../renderers/support/AuthoringInfoVisualVariable.js";import"../chunks/colorRamps.js";import"../rest/support/AlgorithmicColorRamp.js";import"../rest/support/ColorRamp.js";import"../rest/support/MultipartColorRamp.js";import"../renderers/mixins/VisualVariablesMixin.js";import"../renderers/visualVariables/ColorVariable.js";import"../renderers/visualVariables/VisualVariable.js";import"../chunks/LegendOptions.js";import"../renderers/visualVariables/support/ColorStop.js";import"../renderers/visualVariables/OpacityVariable.js";import"../renderers/visualVariables/support/OpacityStop.js";import"../renderers/visualVariables/RotationVariable.js";import"../renderers/visualVariables/SizeVariable.js";import"../renderers/visualVariables/support/SizeStop.js";import"../chunks/sizeVariableUtils.js";import"../chunks/visualVariableUtils.js";import"../Graphic.js";import"../chunks/compilerUtils.js";import"../chunks/lengthUtils.js";import"../renderers/support/ClassBreakInfo.js";import"../chunks/commonProperties.js";import"../symbols/support/jsonUtils.js";import"../chunks/layerUtils2.js";import"../renderers/DictionaryRenderer.js";import"../chunks/LRUCache.js";import"../chunks/MemCache.js";import"../chunks/Version.js";import"../layers/support/FieldsIndex.js";import"../chunks/UnknownTimeZone.js";import"../chunks/OverrideHelper.js";import"../chunks/colorUtils2.js";import"../chunks/vec4.js";import"../chunks/vec4f64.js";import"../chunks/CIMSymbolHelper.js";import"../chunks/BidiEngine.js";import"../chunks/fontUtils.js";import"../chunks/OptimizedGeometry.js";import"../chunks/GeometryUtils.js";import"../chunks/enums2.js";import"../chunks/utils6.js";import"../chunks/definitions.js";import"../chunks/HighlightOptions.js";import"../chunks/shapingUtils.js";import"../chunks/mat2d.js";import"../chunks/mat2df32.js";import"../chunks/vec2.js";import"../chunks/vec2f32.js";import"../chunks/Rect.js";import"../chunks/BoundingBox.js";import"../chunks/defaults.js";import"../chunks/defaultsJSON.js";import"../chunks/quantizationUtils.js";import"../renderers/DotDensityRenderer.js";import"../renderers/support/AttributeColorInfo.js";import"../renderers/HeatmapRenderer.js";import"../renderers/support/HeatmapColorStop.js";import"../chunks/heatmapUtils.js";import"../renderers/PieChartRenderer.js";import"../renderers/SimpleRenderer.js";import"../renderers/UniqueValueRenderer.js";import"../chunks/diffUtils.js";import"../renderers/support/UniqueValue.js";import"../renderers/support/UniqueValueClass.js";import"../renderers/support/UniqueValueGroup.js";import"../renderers/support/UniqueValueInfo.js";import"../chunks/styleUtils.js";import"../renderers/support/jsonUtils.js";import"../chunks/MultiOriginJSONSupport.js";import"../chunks/layerContainerType.js";import"../form/FormTemplate.js";import"../form/ExpressionInfo.js";import"../form/elements/GroupElement.js";import"../form/elements/InteractiveElement.js";import"../form/elements/Element.js";import"../form/support/elements.js";import"../form/elements/FieldElement.js";import"../form/elements/support/inputs.js";import"../form/elements/inputs/BarcodeScannerInput.js";import"../form/elements/inputs/TextInput.js";import"../form/elements/inputs/Input.js";import"../form/elements/inputs/ComboBoxInput.js";import"../form/elements/inputs/DatePickerInput.js";import"../form/elements/inputs/DateTimeOffsetPickerInput.js";import"../form/elements/inputs/DateTimePickerInput.js";import"../form/elements/inputs/RadioButtonsInput.js";import"../form/elements/inputs/SwitchInput.js";import"../form/elements/inputs/TextAreaInput.js";import"../form/elements/inputs/TextBoxInput.js";import"../form/elements/inputs/TimePickerInput.js";import"../chunks/domains.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"../form/elements/RelationshipElement.js";import"../form/elements/TextElement.js";import"../layers/Layer.js";import"../core/workers/workers.js";import"../core/workers/Connection.js";import"../chunks/Queue.js";import"../core/workers/RemoteClient.js";import"../chunks/editsZScale.js";import"../chunks/queryZScale.js";import"../chunks/zscale.js";import"../rest/support/FeatureSet.js";import"../layers/support/Field.js";import"../chunks/fieldType.js";import"../layers/mixins/APIKeyMixin.js";import"../chunks/ArcGISService.js";import"../chunks/arcgisLayerUrl.js";import"../layers/mixins/BlendLayer.js";import"../chunks/jsonUtils.js";import"../chunks/parser.js";import"../chunks/utils3.js";import"../chunks/mat4.js";import"../chunks/_commonjsHelpers.js";import"../layers/mixins/CustomParametersMixin.js";import"../chunks/EditBusLayer.js";import"../chunks/uuid.js";import"../layers/mixins/FeatureEffectLayer.js";import"../layers/support/FeatureEffect.js";import"../layers/support/FeatureFilter.js";import"../TimeExtent.js";import"../chunks/timeUtils.js";import"../chunks/DataLayerSource.js";import"../chunks/FullTextSearch.js";import"../chunks/spatialRelationships.js";import"../rest/support/StatisticDefinition.js";import"../layers/mixins/FeatureLayerBase.js";import"../geometry/HeightModelInfo.js";import"../chunks/commonProperties2.js";import"../support/timeUtils.js";import"../chunks/ElevationInfo.js";import"../chunks/unitConversionUtils.js";import"../chunks/featureLayerUtils.js";import"../rest/support/AttachmentQuery.js";import"../rest/support/RelationshipQuery.js";import"../layers/support/GeometryFieldsInfo.js";import"../layers/support/LayerFloorInfo.js";import"../layers/support/Relationship.js";import"../chunks/serviceCapabilitiesUtils.js";import"../chunks/jsonUtils2.js";import"../layers/support/Subtype.js";import"../layers/mixins/FeatureReductionLayer.js";import"../layers/support/AggregateField.js";import"../layers/support/ExpressionInfo.js";import"../chunks/FeatureReduction.js";import"../layers/support/FeatureReductionBinning.js";import"../layers/support/LabelClass.js";import"../chunks/labelUtils.js";import"../layers/support/FeatureReductionCluster.js";import"../layers/support/FeatureReductionSelection.js";import"../chunks/clusterUtils.js";import"../chunks/MD5.js";import"../layers/mixins/OperationalLayer.js";import"../layers/mixins/OrderedLayer.js";import"../chunks/OrderByInfo.js";import"../layers/mixins/PortalLayer.js";import"../portal/PortalItem.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"../chunks/portalItemUtils.js";import"../geometry/projection.js";import"../chunks/projectBuffer.js";import"../chunks/geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"../layers/mixins/PublishableLayer.js";import"../layers/support/PublishingInfo.js";import"../layers/mixins/RefreshableLayer.js";import"../layers/mixins/ScaleRangeLayer.js";import"../layers/mixins/TemporalLayer.js";import"../TimeInterval.js";import"../layers/support/TimeInfo.js";import"../layers/support/FeatureTemplate.js";import"../layers/support/FeatureType.js";import"../chunks/fieldProperties.js";import"../chunks/labelingInfo.js";import"../chunks/versionUtils.js";import"../chunks/styleUtils2.js";import"../rest/support/TopFeaturesQuery.js";import"../rest/support/TopFilter.js";import"../support/popupUtils.js";import"../chunks/interfaces3.js";import"./support/TopologyValidationJobInfo.js";import"../rest/networks/support/ValidateNetworkTopologyResult.js";import"./support/TraceConfiguration.js";import"./support/UNTraceConfiguration.js";import"./support/Terminal.js";import"../rest/networks/support/TraceResult.js";import"../rest/networks/support/AggregatedGeometry.js";import"../rest/networks/support/FunctionResult.js";import"../rest/networks/support/NetworkElement.js";let d=class extends(p(a)){constructor(t){super(t),this.request=n}initialize(){}async load(t){const s=this.layer.load(t).then((()=>this._initializeRulesTable()));return this.addResolvingPromise(s),this}getFeatureSQL(t,s){const e=t.layerId.toString(),r=t.fieldsIndex?.normalizeFieldName("assetGroup"),o=t.fieldsIndex?.normalizeFieldName("assetType"),i=r?s.attributes[r]:null,n=o?s.attributes[o]:null,p=this.rulesHash[e];if(p){const t=p.assetGroupHash[i];if(t)return t.assetTypeHash[n]||null}return null}async _initializeRulesTable(){const t={};let s;!function(t){t[t.from=0]="from",t[t.to=1]="to",t[t.via=2]="via"}(s||(s={}));const e=[{networkSourceId:"fromNetworkSource",assetGroupId:"fromAssetGroup",assetTypeId:"fromAssetType"},{networkSourceId:"toNetworkSource",assetGroupId:"toAssetGroup",assetTypeId:"toAssetType"},{networkSourceId:"viaNetworkSource",assetGroupId:"viaAssetGroup",assetTypeId:"viaAssetType"}];for(const r of this.rules){if(r.ruleType!==m.RTJunctionEdgeConnectivity&&r.ruleType!==m.RTEdgeJunctionEdgeConnectivity)continue;let o=[[s.from,s.to],[s.to,s.from]];r.ruleType===m.RTEdgeJunctionEdgeConnectivity&&(o=[[s.from,s.via],[s.via,s.from],[s.to,s.via],[s.via,s.to]]);for(const i of o){const o=i.shift(),n=i.shift();let p=!1;switch(r.ruleType){case m.RTEdgeJunctionEdgeConnectivity:p=o===s.from||o===s.to;break;case m.RTJunctionEdgeConnectivity:p=o===s.to}const a=e[o],l=r[a.networkSourceId]?.layerId.toString()??"",u=r[a.assetGroupId]?.assetGroupCode?.toString(),c=r[a.assetTypeId],j=c?.assetTypeCode?.toString(),y=e[n],d=r[y.networkSourceId]?.layerId.toString()??"",h=r[y.assetGroupId]?.assetGroupCode?.toString(),f=r[y.assetTypeId],k=f?.assetTypeCode?.toString(),b=t[l]??{assetGroupHash:{}};if(!(u&&j&&h&&k))continue;const g=b.assetGroupHash[u]??{assetTypeHash:{}},S=g.assetTypeHash[j]??{};if(S[d]=S[d]??{},p){S[l]=S[l]??{};const t=`(assetgroup = ${u} AND assettype = ${j})`;S[l].anyVertex=S[l].anyVertex?`${S[l].anyVertex}`:`${t}`,"esriNECPEndVertex"===f?.connectivityPolicy&&(S[l].endVertex=S[l]?.endVertex?`${S[l].endVertex}`:`${t}`)}const T=`(assetgroup = ${h} AND assettype = ${k})`;S[d].anyVertex=S[d]?.anyVertex?`${S[d].anyVertex} OR ${T}`:`${T}`,"esriNECPEndVertex"===f?.connectivityPolicy&&(S[d].endVertex=S[d]?.endVertex?`${S[d].endVertex} OR ${T}`:`${T}`),g.assetTypeHash[j]=S,b.assetGroupHash[u]=g,t[l]=b}}this.rulesHash=t}};t([s({constructOnly:!0})],d.prototype,"layer",void 0),t([s({constructOnly:!0})],d.prototype,"rules",void 0),t([s()],d.prototype,"rulesHash",void 0),t([s({constructOnly:!0})],d.prototype,"request",void 0),d=t([e("esri.networks.RulesTable")],d);const h=d;let f=class extends i{constructor(t){super(t),this.sharedNamedTraceConfigurations=[],this.type="utility"}get serviceTerritoryFeatureLayerId(){return this.dataElement?.serviceTerritoryFeatureLayerId??null}get networkSystemLayers(){return new u({rulesTableId:this.sourceJSON?.systemLayers.rulesTableId,rulesTableUrl:this.sourceJSON?`${this.featureServiceUrl}/${this.sourceJSON?.systemLayers.rulesTableId}`:null,subnetworksTableId:this.sourceJSON?.systemLayers.subnetworksTableId,subnetworksTableUrl:this.sourceJSON?`${this.featureServiceUrl}/${this.sourceJSON?.systemLayers.subnetworksTableId}`:null,dirtyAreasLayerId:this.sourceJSON?.systemLayers.dirtyAreasLayerId,dirtyAreasLayerUrl:this.sourceJSON?`${this.featureServiceUrl}/${this.sourceJSON?.systemLayers.dirtyAreasLayerId}`:null})}get terminalConfigurations(){return this.dataElement?.terminalConfigurations.map((t=>c.fromJSON(t)))||[]}get domainNetworkNames(){return this.dataElement?.domainNetworks.map((t=>t.domainNetworkName))||[]}get _utilityLayerList(){const t=new Set;return this.dataElement?.domainNetworks?.map((s=>{s.edgeSources.map((s=>{t.add(s.layerId)})),s.junctionSources.map((s=>{t.add(s.layerId)}))})),t}async load(t){return this.addResolvingPromise(super.load(t)),this.addResolvingPromise(this._loadNamedTraceConfigurationsFromNetwork(t)),this}getTerminalConfiguration(t){let s=null,e=null;const r=t.layer;let o=null;if("feature"===r?.type){if(o=r.layerId,null===o)return null}else{if("subtype-sublayer"!==r?.type)return null;if(o=r?.parent?.layerId??null,null===o)return null}const i=t.attributes;if(null==i)return null;for(const r of Object.keys(i))"ASSETGROUP"===r.toUpperCase()&&(s=t.getAttribute(r)),"ASSETTYPE"===r.toUpperCase()&&(e=t.getAttribute(r));if(!this.dataElement)return null;let n=null;const p=this.dataElement.domainNetworks;for(const t of p){const r=t.junctionSources?.find((t=>t.layerId===o));if(r){const t=r.assetGroups?.find((t=>t.assetGroupCode===s));if(t){const s=t.assetTypes?.find((t=>t.assetTypeCode===e));if(s){n=s.terminalConfigurationId;break}}}}if(null!=n){const t=this.dataElement.terminalConfigurations,s=t?.find((t=>t.terminalConfigurationId===n));return s?c.fromJSON(s):null}return null}getTierNames(t){const s=this.dataElement?.domainNetworks.find((s=>s.domainNetworkName===t));return s?.tiers.map((t=>t.name))||[]}async getRulesTable(){return this._sharedRulesTable||(this._sharedRulesTable=this._createRulesTable()),await this._sharedRulesTable}isUtilityLayer(t){return this._utilityLayerList.has(t.layerId)&&(t.url?.startsWith(this.featureServiceUrl)??!1)}async queryAssociations(t){const[{queryAssociations:s},{default:e}]=await Promise.all([import("../rest/networks/queryAssociations.js"),import("../rest/networks/support/QueryAssociationsParameters.js")]),r=e.from(t);return r.gdbVersion=this.gdbVersion,r.moment=this.historicMoment,(await s(this.networkServiceUrl,r)).associations}async synthesizeAssociationGeometries(t){const[{synthesizeAssociationGeometries:s},{default:e}]=await Promise.all([import("../rest/networks/synthesizeAssociationGeometries.js"),import("../rest/networks/support/SynthesizeAssociationGeometriesParameters.js")]),r=e.from(t);return r.gdbVersion=this.gdbVersion,r.moment=this.historicMoment,s(this.networkServiceUrl,r)}async trace(t){const[{trace:s},{default:e}]=await Promise.all([import("../rest/networks/trace.js"),import("../rest/networks/support/TraceParameters.js")]),r=e.from(t);return r.gdbVersion=this.gdbVersion,r.moment=this.historicMoment,s(this.networkServiceUrl,r)}async submitTraceJob(t){const[{submitTraceJob:s},{default:e}]=await Promise.all([import("../rest/networks/trace.js"),import("../rest/networks/support/TraceParameters.js")]),r=e.from(t);r.gdbVersion=this.gdbVersion,r.moment=this.historicMoment;const o=await s(this.networkServiceUrl,r);return new j({statusUrl:o})}async _loadNamedTraceConfigurationsFromNetwork(t){if(0===this.sharedNamedTraceConfigurations?.length)return;const s=this.sharedNamedTraceConfigurations.map((t=>t.globalId)),e=await this.queryNamedTraceConfigurations({globalIds:s},t);for(const t of this.sharedNamedTraceConfigurations){const s=e?.find((s=>s.globalId===t.globalId));if(s){const e=s.write({},{origin:"service"});t.read(e,{origin:"service"})}}}async _createRulesTable(){const t=this.networkSystemLayers.rulesTableUrl,s=new r({url:t});await s.load();const e=this.dataElement?.domainNetworks;if(!e)return null;const o=e.flatMap((t=>[...t.edgeSources,...t.junctionSources])),i=(await this._queryRulesTable(s)).map((t=>this._hydrateRuleInfo(s,o,t)));return new h({layer:s,rules:i})}async _queryRulesTable(t){const s=new y({where:"1=1",outFields:["*"]});return(await o(t,s)).features}_hydrateRuleInfo(t,s,e){const r=t.fieldsIndex,o=r.get("RULETYPE"),i=r.get("CREATIONDATE"),n=r.get("FROMNETWORKSOURCEID"),p=r.get("FROMASSETGROUP"),a=r.get("FROMASSETTYPE"),l=r.get("FROMTERMINALID"),u=r.get("TONETWORKSOURCEID"),c=r.get("TOASSETGROUP"),j=r.get("TOASSETTYPE"),y=r.get("TOTERMINALID"),d=r.get("VIANETWORKSOURCEID"),h=r.get("VIAASSETGROUP"),f=r.get("VIAASSETTYPE"),k=r.get("VIATERMINALID"),b=e.attributes[o.name],g=new Date(e.attributes[i.name]),S=[{networkSourceId:e.attributes[n.name],assetGroupId:e.attributes[p.name],assetTypeId:e.attributes[a.name],terminalId:e.attributes[l.name]},{networkSourceId:e.attributes[u.name],assetGroupId:e.attributes[c.name],assetTypeId:e.attributes[j.name],terminalId:e.attributes[y.name]},{networkSourceId:e.attributes[d.name],assetGroupId:e.attributes[h.name],assetTypeId:e.attributes[f.name],terminalId:e.attributes[k.name]}];let T;!function(t){t[t.from=0]="from",t[t.to=1]="to",t[t.via=2]="via"}(T||(T={}));const I={ruleType:b,creationDate:g};for(const t of[T.from,T.to,T.via]){if(b!==m.RTEdgeJunctionEdgeConnectivity&&t===T.via)continue;const e=S[t],r=s.find((t=>t.sourceId===e.networkSourceId)),o=r?.assetGroups.find((t=>t.assetGroupCode===e.assetGroupId)),i=o?.assetTypes.find((t=>t.assetTypeCode===e.assetTypeId));let n=this._getTerminal(b,i,e);b!==m.RTContainment&&b!==m.RTAttachment||(n=null);let p="";switch(t){case T.from:p="from";break;case T.to:p="to";break;case T.via:p="via"}I[`${p}NetworkSource`]=r,I[`${p}AssetGroup`]=o,I[`${p}AssetType`]=i,I[`${p}Terminal`]=n?.toJSON()}return I}_getTerminal(t,s,e){if(t===m.RTAttachment||t===m.RTContainment)return null;const r=s?.terminalConfigurationId,o=this.terminalConfigurations?.find((t=>t.id===r));return o?.terminals?.find((t=>t.id===e.terminalId))??null}};t([s({type:[l],json:{origins:{"web-map":{read:{source:"traceConfigurations"},write:{target:"traceConfigurations"}},service:{read:{source:"traceConfigurations"}}},read:!1}})],f.prototype,"sharedNamedTraceConfigurations",void 0),t([s({type:["utility"],readOnly:!0,json:{read:!1,write:!1}})],f.prototype,"type",void 0),t([s({readOnly:!0})],f.prototype,"serviceTerritoryFeatureLayerId",null),t([s({readOnly:!0})],f.prototype,"networkSystemLayers",null),t([s({readOnly:!0})],f.prototype,"terminalConfigurations",null),t([s({readOnly:!0})],f.prototype,"domainNetworkNames",null),f=t([e("esri.networks.UtilityNetwork")],f);const k=f;export{k as default};