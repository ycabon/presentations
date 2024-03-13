/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as e}from"../../chunks/tslib.es6.js";import"../../geometry.js";import t from"../../PopupTemplate.js";import"../../renderers/ClassBreaksRenderer.js";import"../../renderers/DictionaryRenderer.js";import"../../renderers/DotDensityRenderer.js";import"../../renderers/HeatmapRenderer.js";import"../../renderers/PieChartRenderer.js";import"../../renderers/Renderer.js";import"../../renderers/SimpleRenderer.js";import"../../renderers/UniqueValueRenderer.js";import{fromJSON as s,r as o}from"../../renderers/support/jsonUtils.js";import"../../core/workers/workers.js";import{property as r}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import{L as i}from"../../chunks/Logger.js";import{subclass as n}from"../../core/accessorSupport/decorators/subclass.js";import{initializeProjection as p,project as a}from"../../geometry/projection.js";import{w as m}from"../../chunks/unitUtils.js";import l from"../Layer.js";import{F as u}from"../../chunks/FeatureStore.js";import{Q as c}from"../../chunks/QueryEngine.js";import{d as h,c as d}from"../../chunks/clientSideDefaults.js";import y from"../../core/Accessor.js";import j from"../../core/Error.js";import{g as f}from"../../chunks/ensureType.js";import{parseWhereClause as g}from"../../core/sql.js";import{e as T}from"../../chunks/geohashUtils.js";import b from"../../geometry/Polygon.js";import{d as k}from"../../chunks/featureConversionUtils.js";import{O as E}from"../../chunks/OptimizedFeature.js";import{fromJSON as I}from"../../geometry/support/jsonUtils.js";import"../../request.js";import"../../chunks/aaBoundingBox.js";import"../../chunks/mathUtils.js";import w from"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../geometry/Multipoint.js";import"../../geometry/Point.js";import S from"../../geometry/Polyline.js";import{executeQueryStreaming as D}from"../../rest/knowledgeGraphService.js";import R from"../../rest/knowledgeGraph/GraphQueryStreaming.js";import"../../config.js";import"../../core/urlUtils.js";import x from"../../rest/support/Query.js";import{d as L}from"../../chunks/fieldProperties.js";import{BlendLayer as N}from"../mixins/BlendLayer.js";import{FeatureReductionLayer as C}from"../mixins/FeatureReductionLayer.js";import{RefreshableLayer as M}from"../mixins/RefreshableLayer.js";import{ScaleRangeLayer as G}from"../mixins/ScaleRangeLayer.js";import{p as A}from"../../chunks/commonProperties2.js";import U from"../support/Field.js";import{fixRendererFields as O}from"../support/fieldUtils.js";import F from"../../rest/support/FeatureSet.js";import{createPopupTemplate as v}from"../../support/popupUtils.js";import q from"../../core/workers/RemoteClient.js";import{f as _}from"../../chunks/typeUtils.js";import"../../geometry/SpatialReference.js";import"../../core/JSONSupport.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../chunks/writer.js";import"../../chunks/jsonMap.js";import"../../chunks/assets.js";import"../../kernel.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/reader.js";import"../../chunks/zmUtils.js";import"../../core/accessorSupport/decorators/cast.js";import"../../chunks/coordsUtils.js";import"../../chunks/Axis.js";import"../../chunks/extentUtils.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/vec3.js";import"../../chunks/vec3f64.js";import"../../chunks/common.js";import"../../core/Clonable.js";import"../../core/Collection.js";import"../../core/Evented.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../popup/content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/Content.js";import"../../popup/content/CustomContent.js";import"../../popup/content/ExpressionContent.js";import"../../popup/ElementExpressionInfo.js";import"../../popup/content/FieldsContent.js";import"../../popup/FieldInfo.js";import"../../chunks/enumeration.js";import"../../popup/support/FieldInfoFormat.js";import"../../chunks/date.js";import"../../chunks/locale.js";import"../../chunks/timeZoneUtils.js";import"../../chunks/datetime.js";import"../../popup/content/MediaContent.js";import"../../popup/content/BarChartMediaInfo.js";import"../../popup/content/mixins/ChartMediaInfo.js";import"../../popup/content/mixins/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../chunks/chartMediaInfoUtils.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/RelationshipContent.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../popup/content/TextContent.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/RelatedRecordsInfo.js";import"../../support/actions/ActionBase.js";import"../../core/Identifiable.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../intl.js";import"../../chunks/messages.js";import"../../symbols.js";import"../../symbols/CIMSymbol.js";import"../../symbols/Symbol.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/utils4.js";import"../../symbols/edges/Edges3D.js";import"../../chunks/screenUtils.js";import"../../chunks/materialUtils.js";import"../../chunks/opacityUtils.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/FillSymbol.js";import"../../symbols/SimpleLineSymbol.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../chunks/lineMarkers.js";import"../../symbols/FillSymbol3DLayer.js";import"../../symbols/patterns/LineStylePattern3D.js";import"../../symbols/patterns/StylePattern3D.js";import"../../chunks/utils5.js";import"../../chunks/colors.js";import"../../chunks/symbolLayerUtils3D.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../chunks/persistableUrlUtils.js";import"../../symbols/LabelSymbol3D.js";import"../../symbols/Symbol3D.js";import"../../chunks/collectionUtils.js";import"../../portal/Portal.js";import"../../core/Loadable.js";import"../../core/Promise.js";import"../../portal/PortalGroup.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/LineStyleMarker3D.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../symbols/support/StyleOrigin.js";import"../../chunks/Thumbnail.js";import"../../chunks/calloutUtils.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../symbols/support/Symbol3DVerticalOffset.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../symbols/PictureFillSymbol.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../core/reactiveUtils.js";import"../../chunks/asyncUtils.js";import"../../symbols/SimpleFillSymbol.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../renderers/mixins/VisualVariablesMixin.js";import"../../renderers/visualVariables/ColorVariable.js";import"../../renderers/visualVariables/VisualVariable.js";import"../../chunks/LegendOptions.js";import"../../renderers/visualVariables/support/ColorStop.js";import"../../renderers/visualVariables/OpacityVariable.js";import"../../renderers/visualVariables/support/OpacityStop.js";import"../../renderers/visualVariables/RotationVariable.js";import"../../renderers/visualVariables/SizeVariable.js";import"../../renderers/visualVariables/support/SizeStop.js";import"../../chunks/sizeVariableUtils.js";import"../../chunks/visualVariableUtils.js";import"../../Graphic.js";import"../../chunks/compilerUtils.js";import"../../chunks/lengthUtils.js";import"../../renderers/support/ClassBreakInfo.js";import"../../chunks/commonProperties.js";import"../../symbols/support/jsonUtils.js";import"../../chunks/layerUtils2.js";import"../../renderers/support/AuthoringInfo.js";import"../../renderers/support/AuthoringInfoVisualVariable.js";import"../../chunks/colorRamps.js";import"../../rest/support/AlgorithmicColorRamp.js";import"../../rest/support/ColorRamp.js";import"../../rest/support/MultipartColorRamp.js";import"../../chunks/LRUCache.js";import"../../chunks/MemCache.js";import"../../chunks/Version.js";import"../support/FieldsIndex.js";import"../../chunks/UnknownTimeZone.js";import"../../chunks/OverrideHelper.js";import"../../chunks/colorUtils2.js";import"../../chunks/vec4.js";import"../../chunks/vec4f64.js";import"../../chunks/CIMSymbolHelper.js";import"../../chunks/BidiEngine.js";import"../../chunks/fontUtils.js";import"../../chunks/OptimizedGeometry.js";import"../../chunks/GeometryUtils.js";import"../../chunks/enums2.js";import"../../chunks/utils6.js";import"../../chunks/definitions.js";import"../../chunks/HighlightOptions.js";import"../../chunks/shapingUtils.js";import"../../chunks/mat2d.js";import"../../chunks/mat2df32.js";import"../../chunks/vec2.js";import"../../chunks/vec2f32.js";import"../../chunks/Rect.js";import"../../chunks/BoundingBox.js";import"../../chunks/defaults.js";import"../../chunks/defaultsJSON.js";import"../../chunks/quantizationUtils.js";import"../../renderers/support/AttributeColorInfo.js";import"../../renderers/support/HeatmapColorStop.js";import"../../chunks/heatmapUtils.js";import"../../chunks/diffUtils.js";import"../../renderers/support/UniqueValue.js";import"../../renderers/support/UniqueValueClass.js";import"../../renderers/support/UniqueValueGroup.js";import"../../renderers/support/UniqueValueInfo.js";import"../../chunks/styleUtils.js";import"../../core/workers/Connection.js";import"../../chunks/Queue.js";import"../../chunks/projectBuffer.js";import"../../chunks/geodesicConstants.js";import"../../geometry/support/GeographicTransformation.js";import"../../geometry/support/GeographicTransformationStep.js";import"../../chunks/zscale.js";import"../../chunks/BoundsStore.js";import"../../chunks/PooledRBush.js";import"../../chunks/quickselect.js";import"../../chunks/_commonjsHelpers.js";import"../../chunks/timeSupport.js";import"../../geometry/support/normalizeUtils.js";import"../../chunks/normalizeUtilsCommon.js";import"../../chunks/simplify.js";import"../../chunks/utils7.js";import"../../chunks/utils8.js";import"../../chunks/projectionSupport.js";import"../../chunks/json.js";import"../../chunks/optimizedFeatureQueryEngineAdapter.js";import"../../core/sql/WhereClause.js";import"../../chunks/TimeOnly.js";import"../../chunks/fieldType.js";import"../../chunks/QueryEngineCapabilities.js";import"../../chunks/utils10.js";import"../../chunks/timeUtils.js";import"../../chunks/utils2.js";import"../../chunks/basemapUtils.js";import"../../Basemap.js";import"../../chunks/loadAll.js";import"../../portal/PortalItem.js";import"../../portal/PortalItemResource.js";import"../../portal/PortalRating.js";import"../../support/BasemapStyle.js";import"../../chunks/writeUtils.js";import"../../chunks/utils3.js";import"../../chunks/mat4.js";import"../../chunks/utils11.js";import"../../chunks/generateRendererUtils.js";import"../../chunks/SnappingCandidate.js";import"../../chunks/Scheduler.js";import"../../core/signal.js";import"../../chunks/debugFlags.js";import"../../chunks/RenderState.js";import"../../chunks/OptimizedFeatureSet.js";import"../../rest/knowledgeGraph/GraphQueryResult.js";import"../../rest/knowledgeGraph/GraphQueryStreamingResult.js";import"../../rest/knowledgeGraph/KnowledgeGraph.js";import"../../rest/knowledgeGraph/DataModel.js";import"../../rest/knowledgeGraph/EntityType.js";import"../../rest/knowledgeGraph/GraphObjectType.js";import"../../rest/knowledgeGraph/FieldIndex.js";import"../../rest/knowledgeGraph/GraphProperty.js";import"../../rest/knowledgeGraph/RelationshipType.js";import"../../rest/knowledgeGraph/ServiceDefinition.js";import"../../rest/knowledgeGraph/Entity.js";import"../../rest/knowledgeGraph/GraphNamedObject.js";import"../../rest/knowledgeGraph/GraphObject.js";import"../../rest/knowledgeGraph/Relationship.js";import"../../rest/knowledgeGraph/SearchIndex.js";import"../../rest/knowledgeGraph/Path.js";import"../../rest/knowledgeGraph/GraphApplyEditsResult.js";import"../../rest/knowledgeGraph/GraphQuery.js";import"../../TimeExtent.js";import"../../chunks/DataLayerSource.js";import"../../chunks/FullTextSearch.js";import"../../chunks/spatialRelationships.js";import"../../rest/support/StatisticDefinition.js";import"../../chunks/domains.js";import"../support/CodedValueDomain.js";import"../support/Domain.js";import"../support/InheritedDomain.js";import"../support/RangeDomain.js";import"../../chunks/jsonUtils.js";import"../../chunks/parser.js";import"../support/AggregateField.js";import"../support/ExpressionInfo.js";import"../../chunks/layerContainerType.js";import"../../chunks/FeatureReduction.js";import"../support/FeatureReductionBinning.js";import"../../chunks/featureLayerUtils.js";import"../../chunks/featureQueryAll.js";import"../../rest/support/AttachmentQuery.js";import"../../rest/support/RelationshipQuery.js";import"../support/LabelClass.js";import"../../chunks/labelUtils.js";import"../../support/timeUtils.js";import"../../chunks/ElevationInfo.js";import"../../chunks/unitConversionUtils.js";import"../support/FeatureReductionCluster.js";import"../support/FeatureReductionSelection.js";import"../../chunks/clusterUtils.js";import"../../chunks/MD5.js";class P{constructor(){this._featureLookup=new Map}static getInstance(){return P.instance||(P.instance=new P),P.instance}static resetInstance(){P.instance&&(P.instance=null)}deleteFromStore(e){e.forEach((e=>{this._featureLookup.delete(e)}))}readFromStoreByList(e){const t=[];return e.forEach((e=>{const s=this.readFromStoreById(e);s&&t.push(s)})),t}readFromStoreById(e){return this._featureLookup.get(e)??null}writeToStore(e,t,s){const o=[];return e.forEach((e=>{if(!e?.id)return;e.properties||(e.properties=[]);let r,i=null;if(s&&e.properties[s]&&(i=k(e.properties[s])),"originId"in e&&"destinationId"in e&&(e.properties.ESRI__ORIGIN_ID=e.originId,e.properties.ESRI__DESTINATION_ID=e.destinationId),e.properties[t]=e.id,e.id&&this._featureLookup.has(e.id)&&this._featureLookup.get(e.id).attributes){const o=this._featureLookup.get(e.id),n=JSON.parse(JSON.stringify(Object.assign(o.attributes,e.properties)));s&&e.properties[s]&&(n[s]=I(e.properties[s])),r=new E(i?JSON.parse(JSON.stringify(i)):o?.geometry?JSON.parse(JSON.stringify(o.geometry)):null,n,null,e.properties[t])}else r=new E(i?JSON.parse(JSON.stringify(i)):null,e.properties,null,e.properties[t]);this._featureLookup.set(e.id,r),o.push(r)})),o}}var Q,V,B,Y,$,J,H,W;function z(e){if(!e.spatialReference.isWGS84)throw new j("knowledge-graph:layer-support-utils","The extentToInBoundsRings function only supports WGS84 spatial references.");let t;return t=e.xmax>180&&e.xmin<180?[[[e.xmin,e.ymin],[e.xmin,e.ymax],[180,e.ymax],[180,e.ymin],[e.xmin,e.ymin]],[[-180,e.ymin],[-180,e.ymax],[e.xmax-360,e.ymax],[e.xmax-360,e.ymin],[-180,e.ymin]]]:e.xmax>180&&e.xmin>180?[[[e.xmin-360,e.ymin],[e.xmin-360,e.ymax],[e.xmax-360,e.ymax],[e.xmax-360,e.ymin],[e.xmin-360,e.ymin]]]:e.xmax>-180&&e.xmin<-180?[[[e.xmin+360,e.ymin],[e.xmin+360,e.ymax],[180,e.ymax],[180,e.ymin],[e.xmin+360,e.ymin]],[[-180,e.ymin],[-180,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[-180,e.ymin]]]:e.xmax<-180&&e.xmin<-180?[[[e.xmin+360,e.ymin],[e.xmin+360,e.ymax],[e.xmax+360,e.ymax],[e.xmax+360,e.ymin],[e.xmin+360,e.ymin]]]:[[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]],t}async function Z(e,t){const s=[],o=new Map,r=[];if(t.dataModel?.relationshipTypes)for(const e of t.dataModel.relationshipTypes)e.name&&o.set(e.name,[]);for(const t of e)o.has(t.typeName)&&o.get(t.typeName)?.push(t.id);for(const[e,i]of o){if(i.length<1)continue;const o=new R({openCypherQuery:`MATCH (n)-[r:${e}]->(m) WHERE id(r) in $ids RETURN id(n), labels(n)[0], id(m), labels(m)[0]`,bindParameters:{ids:i}});r.push(D(t,o).then((async e=>{const t=e.resultRowsStream.getReader();for(;;){const{done:e,value:o}=await t.read();if(e)break;for(const e of o)s.push({id:e[0],typeName:e[1]}),s.push({id:e[2],typeName:e[3]})}})))}return await Promise.all(r),s}!function(e){e[e.OID=0]="OID",e[e.ELEMENTUID=1]="ELEMENTUID",e[e.TYPENAME=2]="TYPENAME",e[e.AGGREGATEDBY=3]="AGGREGATEDBY",e[e.CENTRALITYDEGREE=4]="CENTRALITYDEGREE",e[e.CENTRALITYINDEGREE=5]="CENTRALITYINDEGREE",e[e.CENTRALITYOUTDEGREE=6]="CENTRALITYOUTDEGREE",e[e.CENTRALITYBETWEENNESS=7]="CENTRALITYBETWEENNESS",e[e.CENTRALITYHARMONIC=8]="CENTRALITYHARMONIC",e[e.CENTRALITYCLOSENESS=9]="CENTRALITYCLOSENESS",e[e.CENTRALITYEIGEN=10]="CENTRALITYEIGEN",e[e.CENTRALITYPAGERANK=11]="CENTRALITYPAGERANK"}(Q||(Q={})),function(e){e[e.ELEMENTUID=0]="ELEMENTUID",e[e.TYPENAME=1]="TYPENAME"}(V||(V={})),function(e){e[e.OID=0]="OID",e[e.ELEMENTUID=1]="ELEMENTUID",e[e.TYPENAME=2]="TYPENAME",e[e.FROMUID=3]="FROMUID",e[e.TOUID=4]="TOUID",e[e.AGGREGATEDBY=5]="AGGREGATEDBY"}(B||(B={})),function(e){e[e.ELEMENTUID=0]="ELEMENTUID",e[e.TYPENAME=1]="TYPENAME",e[e.FROMUID=2]="FROMUID",e[e.TOUID=3]="TOUID"}(Y||(Y={})),function(e){e[e.featureResult=0]="featureResult",e[e.countResult=1]="countResult",e[e.idsResult=2]="idsResult"}($||($={})),function(e){e[e.upperLeft=0]="upperLeft",e[e.lowerLeft=1]="lowerLeft"}(J||(J={})),function(e){e[e.sqlTypeBigInt=0]="sqlTypeBigInt",e[e.sqlTypeBinary=1]="sqlTypeBinary",e[e.sqlTypeBit=2]="sqlTypeBit",e[e.sqlTypeChar=3]="sqlTypeChar",e[e.sqlTypeDate=4]="sqlTypeDate",e[e.sqlTypeDecimal=5]="sqlTypeDecimal",e[e.sqlTypeDouble=6]="sqlTypeDouble",e[e.sqlTypeFloat=7]="sqlTypeFloat",e[e.sqlTypeGeometry=8]="sqlTypeGeometry",e[e.sqlTypeGUID=9]="sqlTypeGUID",e[e.sqlTypeInteger=10]="sqlTypeInteger",e[e.sqlTypeLongNVarchar=11]="sqlTypeLongNVarchar",e[e.sqlTypeLongVarbinary=12]="sqlTypeLongVarbinary",e[e.sqlTypeLongVarchar=13]="sqlTypeLongVarchar",e[e.sqlTypeNChar=14]="sqlTypeNChar",e[e.sqlTypeNVarChar=15]="sqlTypeNVarChar",e[e.sqlTypeOther=16]="sqlTypeOther",e[e.sqlTypeReal=17]="sqlTypeReal",e[e.sqlTypeSmallInt=18]="sqlTypeSmallInt",e[e.sqlTypeSqlXml=19]="sqlTypeSqlXml",e[e.sqlTypeTime=20]="sqlTypeTime",e[e.sqlTypeTimestamp=21]="sqlTypeTimestamp",e[e.sqlTypeTimestamp2=22]="sqlTypeTimestamp2",e[e.sqlTypeTinyInt=23]="sqlTypeTinyInt",e[e.sqlTypeVarbinary=24]="sqlTypeVarbinary",e[e.sqlTypeVarchar=25]="sqlTypeVarchar"}(H||(H={})),function(e){e[e.OID_ARRAY=0]="OID_ARRAY",e[e.GLOBALID_ARRAY=1]="GLOBALID_ARRAY",e[e.STRING_ARRAY=2]="STRING_ARRAY",e[e.IDENTIFIER_ARRAY=3]="IDENTIFIER_ARRAY"}(W||(W={}));const K="ESRI__ID",X="ESRI__ORIGIN_ID",ee="ESRI__DESTINATION_ID",te="ESRI__LAYOUT_GEOMETRY",se=12;let oe=class extends y{constructor(e){super(e),this._processingCacheUpdatesLookup=new Map,this.knowledgeGraph=null,this.inclusionModeDefinition={generateAllSublayers:!0,namedTypeDefinitions:new Map},this.entityTypeNames=new Set,this.relationshipTypeNames=new Set,this.geographicLookup=new Map,this.sublayerCaches=new Map,this.nodeConnectionsLookup=new Map,this.relationshipConnectionsLookup=new Map,this.memberIdTypeLookup=new Map;const t=new Map;e.knowledgeGraph.dataModel.entityTypes?.forEach((s=>{s.name&&(t.set(s.name,"entity"),this._processingCacheUpdatesLookup.set(s.name,[]),e.inclusionModeDefinition&&!e.inclusionModeDefinition?.generateAllSublayers||this.entityTypeNames.add(s.name),s.properties?.forEach((e=>{e.geometryType&&"esriGeometryNull"!==e.geometryType&&this.geographicLookup.set(s.name,{name:e.name??"",geometryType:e.geometryType})})))})),e.knowledgeGraph.dataModel.relationshipTypes?.forEach((s=>{s.name&&(t.set(s.name,"relationship"),this._processingCacheUpdatesLookup.set(s.name,[]),e.inclusionModeDefinition&&!e.inclusionModeDefinition?.generateAllSublayers||this.relationshipTypeNames.add(s.name),s.properties?.forEach((e=>{e.geometryType&&"esriGeometryNull"!==e.geometryType&&this.geographicLookup.set(s.name,{name:e.name??"",geometryType:e.geometryType})})))})),e.inclusionModeDefinition?.namedTypeDefinitions.forEach(((s,o)=>{if("entity"===t.get(o))this.entityTypeNames.add(o);else{if("relationship"!==t.get(o))return i.getLogger(this).warn(`A named type, ${o}, was in the inclusion list that wasn't in the data model and will be removed`),void e.inclusionModeDefinition?.namedTypeDefinitions.delete(o);this.relationshipTypeNames.add(o)}const r=new Map;s.members?.forEach((e=>{f(this.memberIdTypeLookup,e.id,(()=>new Set)).add(o);const t=this.getById(e.id);t&&r.set(e.id,t)})),this.sublayerCaches.set(o,r)}))}addToLayer(e){e.forEach((({typeName:e,id:t})=>{if(!this.inclusionModeDefinition)throw new j("knowledge-graph:layer-data-manager","You cannot add to a layer's exclusion list if it was not created with an exclusion list originally");if(this.inclusionModeDefinition.namedTypeDefinitions.has(e)){if(this.inclusionModeDefinition.namedTypeDefinitions.has(e)){const s=this.inclusionModeDefinition.namedTypeDefinitions.get(e);s.members||(s.members=new Map),s.members.set(t,{id:t}),f(this.memberIdTypeLookup,t,(()=>new Set)).add(e)}}else{const s=new Map;s.set(t,{id:t}),this.inclusionModeDefinition.namedTypeDefinitions.set(e,{useAllData:!1,members:s}),f(this.memberIdTypeLookup,t,(()=>new Set)).add(e)}}))}getById(e){return P.getInstance().readFromStoreById(e)}async getData(e,t,s){if(t.objectType.name&&this.inclusionModeDefinition?.namedTypeDefinitions&&this.inclusionModeDefinition.namedTypeDefinitions.size>0&&!this.inclusionModeDefinition.namedTypeDefinitions.has(t.objectType.name))return[];let o;if(o=e||new x({where:"1=1",outFields:["*"]}),"link-chart"===t.parentCompositeLayer.type){const e=t.parentCompositeLayer,s=this._processingCacheUpdatesLookup.get(t.objectType.name??""),r=o.outFields,i=o.geometry;let n="",p="";i&&i.extent&&(n=T(i.extent.ymin,i.extent.xmin,12),p=T(i.extent.ymax,i.extent.xmax,12)),r&&1===r.length&&r[0]===K&&"1=1"===o.where||await Promise.all(s??[]);const a=this.sublayerCaches.has(t.objectType.name??"")?Array.from(this.sublayerCaches.get(t.objectType.name)?.values()):[],m=[];return a.forEach((s=>{if(this.relationshipTypeNames.has(t.objectType.name)?s.geometry=e.relationshipLinkChartDiagramLookup.get(s.attributes[t.objectIdField]):s.geometry=e.entityLinkChartDiagramLookup.get(s.attributes[t.objectIdField]),s.attributes[te]=s.geometry,n&&p){const o=e.linkChartGeohashLookup.get(s.attributes[t.objectIdField]);o?o>=n&&o<=p&&m.push(s):m.push(s)}else m.push(s)})),m}return this.retrieveDataFromService(o,t,s)}async getConnectedRecordIds(e,t){const s=[];let o="";const r=[],n=new Map;if(e.forEach((e=>{if(this.memberIdTypeLookup.has(e))for(const t of this.memberIdTypeLookup.get(e)){if(!this.entityTypeNames.has(t))return;n.has(t)?n.get(t)?.push(e):n.set(t,[e])}})),t&&0!==t?.length){for(const e of t)o=o+e+"|";o=o.slice(0,-1)}return n.forEach(((e,n)=>{let p;p=t&&0!==t?.length?`MATCH (n:${n})-[r:${o}]-(m) WHERE id(n) IN $ids RETURN id(r), type(r), id(m), labels(m)[0]`:`MATCH (n:${n})-[r]-(m) WHERE id(n) IN $ids RETURN id(r), type(r), id(m), labels(m)[0]`;const a=new Promise((t=>{(async()=>{const t=(await D(this.knowledgeGraph,new R({openCypherQuery:p,bindParameters:{ids:e}}))).resultRowsStream.getReader();try{for(;;){const{done:e,value:o}=await t.read();if(e)break;for(let e=0;e<o.length;e++){const t=o[e];s.push({id:t[0],typeName:t[1]}),s.push({id:t[2],typeName:t[3]})}}}catch(e){if("AbortError"!==e.name)throw e;i.getLogger(this).info("Request aborted as expected")}})().then((()=>{t()}))}));r.push(a)})),this.refreshCacheContent(),await Promise.all(r),s}async refreshCacheContent(e,t,s,o=!0){const r=P.getInstance(),i=[],n=new Map,p=new Map;this.knowledgeGraph.dataModel.entityTypes?.forEach((e=>{e.name&&p.set(e.name,e)})),this.knowledgeGraph.dataModel.relationshipTypes?.forEach((e=>{e.name&&p.set(e.name,e)})),e||this.inclusionModeDefinition?e?e.forEach((e=>{if(this.memberIdTypeLookup.has(e))for(const t of this.memberIdTypeLookup.get(e))n.has(t)?n.get(t)?.push(e):n.set(t,[e])})):this.inclusionModeDefinition?.namedTypeDefinitions?.forEach(((e,t)=>{e.useAllData?n.set(t,null):e.members&&e.members.forEach((e=>{n.has(t)&&null!==n.get(t)?n.get(t)?.push(e.id):n.set(t,[e.id])}))})):(this.knowledgeGraph.dataModel.entityTypes?.forEach((e=>{e.name&&n.set(e.name,null)})),this.knowledgeGraph.dataModel.entityTypes?.forEach((e=>{e.name&&n.set(e.name,null)})));for(const[e,a]of n){const n=new Promise((i=>{(async()=>{const i=new Set,n=[];let m,l="",u=!1;if(t||p.get(e)?.properties?.forEach((e=>{e.name&&i.add(e.name)})),s&&this.geographicLookup.has(e)){const t=this.geographicLookup.get(e)?.name;t&&i.add(t)}if(this.entityTypeNames.has(e))l=`MATCH (n:${e}) ${a?"WHERE id(n) IN $ids ":""}return ID(n)`,i.forEach((e=>{l+=`, n.${e}`,n.push(e)}));else{if(!this.relationshipTypeNames.has(e))throw new j("knowledge-graph:layer-data-manager",`The graph type of ${e} could not be determined. Was this type set in the KG data model and inclusion definition?`);u=!0,l=`MATCH ()-[n:${e}]->() ${a?"WHERE id(n) IN $ids ":""}return ID(n), id(startNode(n)), id(endNode(n))`,i.forEach((e=>{l+=`, n.${e}`,n.push(e)}))}m=new R(a?{openCypherQuery:l,bindParameters:{ids:a}}:{openCypherQuery:l});const c=(await D(this.knowledgeGraph,m)).resultRowsStream.getReader();for(;;){const{done:t,value:s}=await c.read();if(t)break;const i=[];for(let e=0;e<s.length;e++){const t=s[e];let o=0,r=0;const p={properties:{}};for(p.id=t[o],o++,r++,u&&(p.originId=t[o],o++,r++,p.destinationId=t[o],o++,r++,f(this.nodeConnectionsLookup,p.originId,(()=>new Set)).add(p.id),f(this.nodeConnectionsLookup,p.destinationId,(()=>new Set)).add(p.id),f(this.relationshipConnectionsLookup,p.id,(()=>[p.originId,p.destinationId])));o<t.length;o++)p.properties[n[o-r]]=t[o];i.push(p)}const p=r.writeToStore(i,K,this.geographicLookup.get(e)?.name);this.sublayerCaches.has(e)||this.sublayerCaches.set(e,new Map),o&&!this.inclusionModeDefinition?.namedTypeDefinitions.has(e)&&this.inclusionModeDefinition?.namedTypeDefinitions.set(e,{useAllData:!1,members:new Map}),o&&!this.inclusionModeDefinition?.namedTypeDefinitions.get(e).members&&(this.inclusionModeDefinition.namedTypeDefinitions.get(e).members=new Map);const a=this.sublayerCaches.get(e);p.forEach((t=>{a?.set(t.attributes[K],t),o&&!this.inclusionModeDefinition?.namedTypeDefinitions.get(e).members.has(t.attributes[K])&&(this.inclusionModeDefinition?.namedTypeDefinitions.get(e).members.set(t.attributes[K],{id:t.attributes[K]}),f(this.memberIdTypeLookup,t.attributes[K],(()=>new Set)).add(e))}))}})().then((()=>{i(null)}))}));i.push(n),this._processingCacheUpdatesLookup.get(e)?.push(n)}await Promise.all(i)}removeFromLayer(e){const t=new Set,s=new Set(e.map((e=>e.id)));for(const s of e)t.add(s.typeName),1===this.memberIdTypeLookup.get(s.id)?.size?this.memberIdTypeLookup.delete(s.id):this.memberIdTypeLookup.get(s.id)?.delete(s.typeName),this.inclusionModeDefinition?.namedTypeDefinitions.forEach(((e,t)=>{t===s.typeName&&e.members?.has(s.id)&&e.members.delete(s.id)}));t.forEach((e=>{this.sublayerCaches.get(e)?.forEach(((t,o)=>{s.has(o)&&this.sublayerCaches.get(e)?.delete(o)}))}))}async retrieveDataFromService(e,t,s){const o=P.getInstance(),r=new Set,i=[];let n,l="",u=[];const c="relationship"===t.graphType,h=this.inclusionModeDefinition?.namedTypeDefinitions?.get(t.objectType.name)?.useAllData,d=t.parentCompositeLayer.sublayerIdsCache.get(t.objectType.name);let y=!h&&d?Array.from(d).sort():null;if(this.inclusionModeDefinition?.namedTypeDefinitions?.get(t.objectType.name)?.useAllData)this.inclusionModeDefinition?.namedTypeDefinitions?.get(t.objectType.name)?.useAllData&&null!=e.objectIds&&(y=e.objectIds);else if(null!=e.objectIds&&y&&y.length>0){const t=e.objectIds;e.objectIds=y.filter((e=>t.includes(e)))}else if(null!=e.objectIds)y=e.objectIds;else{if(this.inclusionModeDefinition?.namedTypeDefinitions.has(t.objectType.name)&&(!this.inclusionModeDefinition.namedTypeDefinitions.get(t.objectType.name)?.members||this.inclusionModeDefinition.namedTypeDefinitions.get(t.objectType.name)?.members?.size<1))return e.objectIds=[],[];e.objectIds=y}if(null!=e.outFields){const s=e.outFields;s.includes("*")?t.fields.forEach((e=>{r.add(e.name)})):s.forEach((e=>{e!==K&&e!==t.geometryFieldName&&r.add(e)}))}if(null!=e.geometry){const s=e.geometry;let o;const u=t.parentCompositeLayer.dataManager.knowledgeGraph.serviceDefinition,h=u?.spatialReference,d=u?.serviceCapabilities?.geometryCapabilities;let y=d?.geometryMaxBoundingRectangleSizeX,f=d?.geometryMaxBoundingRectangleSizeY;if(s?.extent?.spatialReference&&!s.spatialReference?.isWGS84?(await p(s.extent.spatialReference,m),o=a(s.extent,m)):o=s.extent,y&&f&&h){if(4326!==h.wkid){const e=new w({spatialReference:h,xmax:y,ymax:f}),t=a(e,m);y=t.xmax,f=t.ymax}if(o.xmax-o.xmin>y)throw new j("knowledge-graph:layer-data-manager",`Extent x bounds should be within ${y}° latitude, limit exceeded`);if(o.ymax-o.ymin>f)throw new j("knowledge-graph:layer-data-manager",`Extent y bounds should be within ${f}° longitude, limit exceeded`)}if(null!=e.where&&"1=1"!==e.where){const s=await g(e.where.toUpperCase(),t.fieldsIndex);t.fields.forEach((e=>{s.fieldNames.includes(e.name)&&r.add(e.name)}))}l=c?`Match ()-[n:${t.objectType.name}]->() WHERE esri.graph.ST_Intersects($param_filter_geom, n.${t.geometryFieldName}) return ID(n), id(startNode(r)), id(endNode(r))`:`Match (n:${t.objectType.name}) WHERE esri.graph.ST_Intersects($param_filter_geom, n.${t.geometryFieldName}) return ID(n)`,t.geometryFieldName&&r.add(t.geometryFieldName),r.forEach((e=>{l+=`, n.${e}`,i.push(e)})),n=new R({openCypherQuery:l,bindParameters:{param_filter_geom:new b({rings:z(o)})}})}else{let s="";if(null!=e.where&&"1=1"!==e.where){const o=await g(e.where,t.fieldsIndex);t.fields.forEach((e=>{o.fieldNames.includes(e.name)&&r.add(e.name)}));const i=new Set(["column-reference","string","number","binary-expression"]),n=new Set(["=","<","<=","<>",">",">=","AND","OR","LIKE"]);let p=!1;const a=e=>{if("column-reference"===e.type)return`n.${e.column}`;if("string"===e.type)return`'${e.value}'`;if("number"===e.type)return`${e.value}`;if("binary-expression"===e.type&&i.has(e.left.type)&&i.has(e.right.type)&&n.has(e.operator))return`${a(e.left)} ${e.operator} ${a(e.right)}`;if("binary-expression"===e.type&&"LIKE"===e.operator){let t="";if("function"===e.left.type&&"column-reference"===e.left.args.value[0].type)t+=`lower(n.${e.left.args.value[0].column})`;else{if("column-reference"!==e.left.type)return p=!0,"";t+=`lower(n.${e.left.column})`}if(t+=" CONTAINS (","string"!==e.right.type)return p=!0,"";{let s=e.right.value;"%"===s.charAt(0)&&(s=s.slice(1)),"%"===s.charAt(s.length-1)&&(s=s.slice(0,-1)),t+=`'${s.toLowerCase()}')`}return t}return p=!0,""};s=a(o.parseTree),p&&(s="")}let o="";o=c?`Match ()-[n:${t.objectType.name}]->()`:`Match (n:${t.objectType.name})`;let p=!1;y&&(p=!0,o+=" WHERE ID(n) IN $ids"),s&&(o+=p?" AND":" WHERE",o+=` ${s}`),o+=" return ID(n)",c&&(o+=", id(startNode(n)), id(endNode(n))"),e.returnGeometry&&t.geometryFieldName&&r.add(t.geometryFieldName),r.forEach((e=>{o+=`, n.${e}`,i.push(e)})),n=new R(y?{openCypherQuery:o,bindParameters:{ids:y}}:{openCypherQuery:o})}const f=(await D(t.parentCompositeLayer.dataManager.knowledgeGraph,n,s)).resultRowsStream.getReader();for(;;){const{done:e,value:s}=await f.read();if(e)break;const r=[];for(let e=0;e<s.length;e++){const t=s[e];let o=0,n=0;const p={properties:{}};for(p.id=t[o],o++,n++,c&&(p.originId=t[o],o++,n++,p.destinationId=t[o],o++,n++);o<t.length;o++)p.properties[i[o-n]]=t[o];r.push(p)}u=u.concat(o.writeToStore(r,K,t.parentCompositeLayer.dataManager.geographicLookup.get(t.objectType.name)?.name))}return u}};e([r()],oe.prototype,"knowledgeGraph",void 0),e([r()],oe.prototype,"inclusionModeDefinition",void 0),e([r()],oe.prototype,"entityTypeNames",void 0),e([r()],oe.prototype,"relationshipTypeNames",void 0),e([r()],oe.prototype,"geographicLookup",void 0),e([r()],oe.prototype,"sublayerCaches",void 0),e([r()],oe.prototype,"nodeConnectionsLookup",void 0),e([r()],oe.prototype,"relationshipConnectionsLookup",void 0),e([r()],oe.prototype,"memberIdTypeLookup",void 0),oe=e([n("esri.rest.knowledgeGraph.knowledgeGraphLayer.KnowledgeGraphLayerDataManager")],oe);const re=L(),ie=t=>{let s=class extends t{constructor(){super(...arguments),this.fields=[],this.fieldsIndex=null}};return e([r(re.fields)],s.prototype,"fields",void 0),e([r(re.fieldsIndex)],s.prototype,"fieldsIndex",void 0),s=e([n("esri.layers.knowledgeGraphLayer.KnowledgeGraphSublayerBase")],s),s};let ne=class extends(C(ie(N(G(M(l)))))){constructor(e){if(super(e),this.capabilities=h(!1,!1),this.definitionExpression="",this.displayField="",this.elevationInfo=null,this.geometryType=null,this.geometryFieldName=null,this.graphType=null,this.hasM=!1,this.hasZ=!1,this.labelsVisible=null,this.labelingInfo=null,this.objectIdField=K,this.objectType=null,this.parentCompositeLayer=null,this.popupEnabled=!0,this.popupTemplate=null,this.source={openPorts:()=>this.load().then((()=>{const e=new MessageChannel;return new q(e.port1,{channel:e,client:{queryFeatures:(e,t={})=>{const s=x.fromJSON(e);return this.queryFeaturesJSON(s,t)}}}),[e.port2]}))},this.type="knowledge-graph-sublayer","link-chart"===e.parentCompositeLayer.type)"relationship"===e.graphType?this.geometryType="polyline":this.geometryType="point",this.geometryFieldName=te;else if(e.parentCompositeLayer.dataManager.geographicLookup.get(e.objectType.name)?.geometryType&&"esriGeometryNull"!==e.parentCompositeLayer.dataManager.geographicLookup.get(e.objectType.name)?.geometryType){const t=e.parentCompositeLayer.dataManager.geographicLookup.get(e.objectType.name);this.geometryFieldName=t?.name??null,this.geometryType=t?.geometryType?_.fromJSON(t.geometryType):null;const s=t?.name,o=s?e.objectType.properties?.[s]:null;o?(this.hasM=o.hasM??!1,this.hasZ=o.hasZ??!1):(this.hasM=!1,this.hasZ=!1)}else this.geometryType=null;e.objectType.properties?.forEach((e=>{let t=e.fieldType;"esriFieldTypeOID"===t&&(t="esriFieldTypeInteger"),this.fields.push(U.fromJSON({name:e.name,type:t,alias:e.alias,defaultValue:null,editable:e.editable,nullable:e.nullable}))})),this.fields.push(U.fromJSON({name:this.objectIdField,type:"esriFieldTypeString",alias:this.objectIdField,editable:!1})),this._set("fields",[...this.fields]),e.parentCompositeLayer.dataManager.knowledgeGraph.dataModel?.spatialReference&&(this.spatialReference=e.parentCompositeLayer.dataManager.knowledgeGraph.dataModel.spatialReference),"link-chart"===e.parentCompositeLayer.type?"relationship"===e.graphType?this.renderer=s(d(_.toJSON("polyline")).renderer):this.renderer=s(d(_.toJSON("point")).renderer):this.renderer=s(d(_.toJSON(this.geometryType)).renderer)}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){O(e,this.fieldsIndex),this._set("renderer",e)}createPopupTemplate(e){return v(this,e)}createQuery(){return new x({where:"1=1",outFields:["*"]})}getField(e){for(let t=0;t<this.fields.length;t++)if(this.fields[t].name===e)return this.fields[t];throw new Error("Field not found")}getFieldDomain(e,t){return null}async queryFeatures(e,t){const{resolvedQuery:s,queryEngine:o}=await this._setupQueryObjects(e),r=F.fromJSON(await o.executeQuery(s.toJSON(),t?.signal));return r.features.forEach((e=>{e.sourceLayer=this})),r}async queryFeaturesJSON(e,t){const{resolvedQuery:s,queryEngine:o}=await this._setupQueryObjects(e);return await o.executeQuery(s.toJSON(),t?.signal)}async queryFeatureCount(e,t){const{resolvedQuery:s,queryEngine:o}=await this._setupQueryObjects(e);return o.executeQueryForCount(s.toJSON(),t?.signal)}async queryExtent(e={},t){const s={...e,returnGeometry:!0},{resolvedQuery:o,queryEngine:r}=await this._setupQueryObjects(s),i=await r.executeQueryForExtent(o.toJSON(),t?.signal);let n;return n=null!=i.extent?.xmin&&null!=i.extent?.xmax&&null!=i.extent?.ymin&&null!=i.extent?.ymax?new w(i.extent):new w,{count:i.count,extent:n}}async queryObjectIds(e,t){const s=x.from(e);let o;if("link-chart"===this.parentCompositeLayer.type&&this._cachedQueryEngine)o=this._cachedQueryEngine;else{const e=await this.parentCompositeLayer.dataManager.getData(s,this,t);o=this.loadQueryEngine(e)}return o.executeQueryForIds(s.toJSON(),t?.signal)}loadQueryEngine(e){const t=new u({geometryType:_.toJSON(this.geometryType),hasM:this.hasM,hasZ:this.hasZ}),s=new c({fieldsIndex:this.fieldsIndex.toJSON(),geometryType:_.toJSON(this.geometryType),hasM:this.hasM,hasZ:this.hasZ,objectIdField:this.objectIdField,spatialReference:this.spatialReference.toJSON(),timeInfo:null,featureStore:t});return s.featureStore.addMany(e),s}async refreshCachedQueryEngine(){const e=await this.parentCompositeLayer.dataManager.getData(new x({where:"1=1",outFields:[K]}),this);this._cachedQueryEngine=this.loadQueryEngine(e)}async _setupQueryObjects(e,t){const s=x.from(e),o=s.geometry;let r;if(o&&!o.spatialReference?.isWGS84&&(await p(o.spatialReference,m),s.geometry=a(o instanceof b||o instanceof S?o:o.extent,m)),"link-chart"===this.parentCompositeLayer.type&&this._cachedQueryEngine)r=this._cachedQueryEngine;else{const e=await this.parentCompositeLayer.dataManager.getData(s,this,t);r=this.loadQueryEngine(e)}return{resolvedQuery:s,queryEngine:r}}};e([r()],ne.prototype,"capabilities",void 0),e([r({readOnly:!0})],ne.prototype,"defaultPopupTemplate",null),e([r()],ne.prototype,"definitionExpression",void 0),e([r()],ne.prototype,"displayField",void 0),e([r()],ne.prototype,"elevationInfo",void 0),e([r()],ne.prototype,"geometryType",void 0),e([r()],ne.prototype,"geometryFieldName",void 0),e([r()],ne.prototype,"graphType",void 0),e([r()],ne.prototype,"hasM",void 0),e([r()],ne.prototype,"hasZ",void 0),e([r()],ne.prototype,"labelsVisible",void 0),e([r()],ne.prototype,"labelingInfo",void 0),e([r()],ne.prototype,"objectIdField",void 0),e([r()],ne.prototype,"objectType",void 0),e([r()],ne.prototype,"parentCompositeLayer",void 0),e([r(A)],ne.prototype,"popupEnabled",void 0),e([r({type:t,json:{name:"popupInfo",write:!0}})],ne.prototype,"popupTemplate",void 0),e([r({types:o,json:{write:{target:"layerDefinition.drawingInfo.renderer"}}})],ne.prototype,"renderer",null),e([r()],ne.prototype,"source",void 0),e([r({json:{read:!1}})],ne.prototype,"type",void 0),ne=e([n("esri.layers.knowledgeGraph.KnowledgeGraphSublayer")],ne);const pe=ne;export{oe as K,X as a,ee as b,te as c,se as d,pe as default,Z as g,K as m};