/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{A as e}from"./TimeOnly.js";import{p as t,O as r,P as i,y as s,F as o,A as n,E as a,h as l,B as m,a0 as p,Z as u,M as c,Q as f,V as d,f as y,g as j,Y as h,e as g,w as b,z as I,H as w,a1 as F,a2 as D,a3 as S,a4 as T,a5 as x}from"./arcadeUtils.js";import{F as E,c as C,a as L,b as U,d as A,O as P,e as v,T as N,f as R,g as M,h as $,i as O,S as k,j as Z,k as V,A as B,l as z}from"./featureSetUtils.js";import{I as G}from"./ImmutableArray.js";import{g as H}from"./portalUtils.js";import{E as Q,i as W}from"./SpatialFilter.js";import{isPromiseLike as q}from"../core/promiseUtils.js";import{WhereClause as _}from"../core/sql/WhereClause.js";import K from"../layers/FeatureLayer.js";import J from"../layers/support/Field.js";import Y from"../portal/Portal.js";import"./Logger.js";import"../config.js";import"../core/lang.js";import"./UnknownTimeZone.js";import"./datetime.js";import"./locale.js";import"./handleUtils.js";import"../geometry/Extent.js";import"./tslib.es6.js";import"../core/accessorSupport/decorators/property.js";import"./ensureType.js";import"./utils.js";import"./metadata.js";import"../core/Error.js";import"../core/accessorSupport/decorators/subclass.js";import"./tracking.js";import"../geometry/Geometry.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../core/Handles.js";import"./maybe.js";import"./ObservableBase.js";import"../core/scheduling.js";import"./reader.js";import"../geometry/SpatialReference.js";import"./unitUtils.js";import"./jsonMap.js";import"./assets.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"./writer.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../geometry.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"../geometry/Polygon.js";import"./coordsUtils.js";import"./Axis.js";import"./extentUtils.js";import"./aaBoundingRect.js";import"./mathUtils.js";import"./vec3.js";import"./vec3f64.js";import"./common.js";import"../geometry/Polyline.js";import"./typeUtils.js";import"../geometry/support/jsonUtils.js";import"./number.js";import"./featureConversionUtils.js";import"./aaBoundingBox.js";import"./OptimizedFeature.js";import"./OptimizedFeatureSet.js";import"./OptimizedGeometry.js";import"../layers/support/FieldsIndex.js";import"../layers/support/fieldUtils.js";import"../core/sql.js";import"../intl.js";import"./date.js";import"./timeZoneUtils.js";import"./messages.js";import"./hash.js";import"../Graphic.js";import"../PopupTemplate.js";import"../core/Clonable.js";import"../core/Collection.js";import"../core/Evented.js";import"./shared.js";import"./SimpleObservable.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"./enumeration.js";import"../popup/support/FieldInfoFormat.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/mixins/ChartMediaInfo.js";import"../popup/content/mixins/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../Color.js";import"./colorUtils.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"./chartMediaInfoUtils.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/RelationshipContent.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../support/actions/ActionBase.js";import"../core/Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"./utils4.js";import"../symbols/edges/Edges3D.js";import"./screenUtils.js";import"./materialUtils.js";import"./opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"./Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"./lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"./utils5.js";import"./colors.js";import"./symbolLayerUtils3D.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"./persistableUrlUtils.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"./collectionUtils.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/support/StyleOrigin.js";import"../core/Loadable.js";import"../core/Promise.js";import"../portal/PortalGroup.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"./Thumbnail.js";import"./calloutUtils.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/support/Symbol3DVerticalOffset.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"./urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../core/reactiveUtils.js";import"./asyncUtils.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"./MD5.js";import"../layers/SubtypeGroupLayer.js";import"./loadAll.js";import"./MultiOriginJSONSupport.js";import"../layers/Layer.js";import"../layers/mixins/APIKeyMixin.js";import"./ArcGISService.js";import"./arcgisLayerUrl.js";import"../layers/mixins/BlendLayer.js";import"./jsonUtils.js";import"./parser.js";import"./utils3.js";import"./mat4.js";import"./_commonjsHelpers.js";import"../layers/mixins/CustomParametersMixin.js";import"./EditBusLayer.js";import"./uuid.js";import"../layers/mixins/FeatureLayerBase.js";import"./layerContainerType.js";import"../geometry/HeightModelInfo.js";import"./commonProperties2.js";import"../TimeExtent.js";import"./timeUtils.js";import"../support/timeUtils.js";import"./ElevationInfo.js";import"./unitConversionUtils.js";import"./lengthUtils.js";import"./featureLayerUtils.js";import"./featureQueryAll.js";import"../rest/support/Query.js";import"./DataLayerSource.js";import"./FullTextSearch.js";import"./spatialRelationships.js";import"../rest/support/StatisticDefinition.js";import"./layerUtils2.js";import"../renderers/SimpleRenderer.js";import"../renderers/Renderer.js";import"../renderers/support/AuthoringInfo.js";import"../renderers/support/AuthoringInfoVisualVariable.js";import"./colorRamps.js";import"../rest/support/AlgorithmicColorRamp.js";import"../rest/support/ColorRamp.js";import"../rest/support/MultipartColorRamp.js";import"../renderers/mixins/VisualVariablesMixin.js";import"../renderers/visualVariables/ColorVariable.js";import"../renderers/visualVariables/VisualVariable.js";import"./LegendOptions.js";import"../renderers/visualVariables/support/ColorStop.js";import"../renderers/visualVariables/OpacityVariable.js";import"../renderers/visualVariables/support/OpacityStop.js";import"../renderers/visualVariables/RotationVariable.js";import"../renderers/visualVariables/SizeVariable.js";import"../renderers/visualVariables/support/SizeStop.js";import"./sizeVariableUtils.js";import"./visualVariableUtils.js";import"./compilerUtils.js";import"./commonProperties.js";import"../symbols/support/jsonUtils.js";import"../renderers/UniqueValueRenderer.js";import"./diffUtils.js";import"../renderers/support/UniqueValue.js";import"../renderers/support/UniqueValueClass.js";import"../renderers/support/UniqueValueGroup.js";import"../renderers/support/UniqueValueInfo.js";import"./styleUtils.js";import"../rest/support/AttachmentQuery.js";import"../rest/support/RelationshipQuery.js";import"./domains.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"./fieldType.js";import"../layers/support/GeometryFieldsInfo.js";import"../layers/support/LayerFloorInfo.js";import"../layers/support/Relationship.js";import"./serviceCapabilitiesUtils.js";import"./jsonUtils2.js";import"../layers/support/Subtype.js";import"../layers/mixins/OperationalLayer.js";import"../layers/mixins/PortalLayer.js";import"../portal/PortalItem.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"./portalItemUtils.js";import"../geometry/projection.js";import"./projectBuffer.js";import"./geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"./zscale.js";import"../layers/mixins/RefreshableLayer.js";import"../layers/mixins/ScaleRangeLayer.js";import"../layers/mixins/TemporalLayer.js";import"../TimeInterval.js";import"../layers/support/TimeInfo.js";import"./fieldProperties.js";import"../layers/support/SubtypeSublayer.js";import"../renderers/ClassBreaksRenderer.js";import"../renderers/support/ClassBreakInfo.js";import"../renderers/DictionaryRenderer.js";import"./LRUCache.js";import"./MemCache.js";import"./Version.js";import"./OverrideHelper.js";import"./colorUtils2.js";import"./vec4.js";import"./vec4f64.js";import"./CIMSymbolHelper.js";import"./BidiEngine.js";import"./fontUtils.js";import"./GeometryUtils.js";import"./enums2.js";import"./utils6.js";import"./definitions.js";import"./HighlightOptions.js";import"./shapingUtils.js";import"./mat2d.js";import"./mat2df32.js";import"./vec2.js";import"./vec2f32.js";import"./Rect.js";import"./BoundingBox.js";import"./defaults.js";import"./defaultsJSON.js";import"./quantizationUtils.js";import"../renderers/DotDensityRenderer.js";import"../renderers/support/AttributeColorInfo.js";import"../renderers/HeatmapRenderer.js";import"../renderers/support/HeatmapColorStop.js";import"./heatmapUtils.js";import"../renderers/PieChartRenderer.js";import"../renderers/support/jsonUtils.js";import"../form/FormTemplate.js";import"../form/ExpressionInfo.js";import"../form/elements/GroupElement.js";import"../form/elements/InteractiveElement.js";import"../form/elements/Element.js";import"../form/support/elements.js";import"../form/elements/FieldElement.js";import"../form/elements/support/inputs.js";import"../form/elements/inputs/BarcodeScannerInput.js";import"../form/elements/inputs/TextInput.js";import"../form/elements/inputs/Input.js";import"../form/elements/inputs/ComboBoxInput.js";import"../form/elements/inputs/DatePickerInput.js";import"../form/elements/inputs/DateTimeOffsetPickerInput.js";import"../form/elements/inputs/DateTimePickerInput.js";import"../form/elements/inputs/RadioButtonsInput.js";import"../form/elements/inputs/SwitchInput.js";import"../form/elements/inputs/TextAreaInput.js";import"../form/elements/inputs/TextBoxInput.js";import"../form/elements/inputs/TimePickerInput.js";import"../form/elements/RelationshipElement.js";import"../form/elements/TextElement.js";import"../layers/support/FeatureTemplate.js";import"../layers/support/LabelClass.js";import"./labelUtils.js";import"./labelingInfo.js";import"../support/popupUtils.js";import"./versionUtils.js";import"./interfaces3.js";import"./executeQuery.js";import"./infoFor3D.js";import"./executeQueryJSON.js";import"./utils7.js";import"./query.js";import"../geometry/support/normalizeUtils.js";import"./normalizeUtilsCommon.js";import"./simplify.js";import"./utils8.js";import"./pbfQueryUtils.js";import"./pbf.js";import"./queryZScale.js";import"../rest/support/FeatureSet.js";import"./executeQueryPBF.js";import"../rest/query/support/AttachmentInfo.js";import"./executeForIds.js";import"../rest/support/TopFeaturesQuery.js";import"../rest/support/TopFilter.js";import"../layers/support/FeatureType.js";import"../geometry/geometryEngineAsync.js";import"../core/workers/workers.js";import"../core/workers/Connection.js";import"./Queue.js";import"../core/workers/RemoteClient.js";import"./editsZScale.js";import"../layers/mixins/FeatureEffectLayer.js";import"../layers/support/FeatureEffect.js";import"../layers/support/FeatureFilter.js";import"../layers/mixins/FeatureReductionLayer.js";import"../layers/support/AggregateField.js";import"../layers/support/ExpressionInfo.js";import"./FeatureReduction.js";import"../layers/support/FeatureReductionBinning.js";import"../layers/support/FeatureReductionCluster.js";import"../layers/support/FeatureReductionSelection.js";import"./clusterUtils.js";import"../layers/mixins/OrderedLayer.js";import"./OrderByInfo.js";import"../layers/mixins/PublishableLayer.js";import"../layers/support/PublishingInfo.js";import"./styleUtils2.js";async function X(e,t,r){const i=e.getVariables();if(i.length>0){const s=[];for(let e=0;e<i.length;e++){const o={name:i[e]};s.push(await t.evaluateIdentifier(r,o))}const o={};for(let e=0;e<i.length;e++)o[i[e]]=s[e];return e.parameters=o,e}return e}function ee(e,t,r=null){for(const r in e)if(r.toLowerCase()===t.toLowerCase())return e[r];return r}function te(e){if(null===e)return null;const t={type:ee(e,"type",""),name:ee(e,"name","")};if("range"===t.type)t.range=ee(e,"range",[]);else{t.codedValues=[];for(const r of ee(e,"codedValues",[]))t.codedValues.push({name:ee(r,"name",""),code:ee(r,"code",null)})}return t}function re(e){if(null===e)return null;const t={},r=ee(e,"wkt",null);null!==r&&(t.wkt=r);const i=ee(e,"wkid",null);return null!==i&&(t.wkid=i),t}function ie(e){if(null===e)return null;const t={hasZ:ee(e,"hasz",!1),hasM:ee(e,"hasm",!1)},r=ee(e,"spatialreference",null);r&&(t.spatialReference=re(r));const i=ee(e,"x",null);if(null!==i)return t.x=i,t.y=ee(e,"y",null),t;const s=ee(e,"rings",null);if(null!==s)return t.rings=s,t;const o=ee(e,"paths",null);if(null!==o)return t.paths=o,t;const n=ee(e,"points",null);if(null!==n)return t.points=n,t;for(const r of["xmin","xmax","ymin","ymax","zmin","zmax","mmin","mmax"]){const i=ee(e,r,null);null!==i&&(t[r]=i)}return t}function se(e){return"utc"===e?.toLowerCase()?"UTC":"unknown"===e?.toLowerCase()?"Unknown":e}function oe(oe){"async"===oe.mode&&(oe.functions.timezone=function(c,f){return oe.standardFunctionAsync(c,f,(async(d,y,j)=>{if(t(j,1,2,c,f),r(j[0]))return"Unknown";if(i(j[0]))return"Unknown";if(s(j[0])){if(await j[0].load(),1===j.length||null===j[1])return j[0].datesInUnknownTimezone?se("unknown"):se(j[0].dateFieldsTimeZone);if(!(j[1]instanceof o)||!1===j[1].hasField("type"))throw new n(c,a.InvalidParameter,f);const e=j[1].field("type");if(!1===l(e))throw new n(c,a.InvalidParameter,f);switch(m(e).toLowerCase()){case"preferredtimezone":return se(j[0].preferredTimeZone);case"editfieldsinfo":return se(j[0].editFieldsInfo?.timeZone??null);case"timeinfo":return se(j[0].timeInfo?.timeZone??null);case"field":if(j[1].hasField("fieldname")&&l(j[1].field("fieldname")))return se(j[0].fieldTimeZone(m(j[1].field("fieldname"))))}throw new n(c,a.InvalidParameter,f)}const h=p(j[0],u(c));if(null===h)return null;const g=h.timeZone;return"system"===g?e.systemTimeZoneCanonicalName:"utc"===g.toLowerCase()?"UTC":"unknown"===g.toLowerCase()?"Unknown":g}))},oe.functions.sqltimestamp=function(e,r){return oe.standardFunctionAsync(e,r,(async(o,l,p)=>{t(p,1,3,e,r);const u=p[0];if(c(u)){if(1===p.length)return u.toSQLWithKeyword();if(2===p.length)return u.changeTimeZone(m(p[1])).toSQLWithKeyword();throw new n(e,a.InvalidParameter,r)}if(i(u))return u.toSQLWithKeyword();if(s(u)){if(3!==p.length)throw new n(e,a.InvalidParameter,r);await u.load();const t=m(p[1]);if(i(p[2]))return p[2].toSQLWithKeyword();if(!1===c(p[2]))throw new n(e,a.InvalidParameter,r);const s=u.fieldTimeZone(t);return null===s?p[2].toSQLWithKeyword():p[2].changeTimeZone(s).toSQLWithKeyword()}throw new n(e,a.InvalidParameter,r)}))},oe.signatures.push({name:"sqltimestamp",min:2,max:4}),oe.functions.featuresetbyid=function(e,r){return oe.standardFunctionAsync(e,r,((i,s,o)=>{if(t(o,2,4,e,r),o[0]instanceof E){const t=m(o[1]);let i=f(o[2],null);const s=d(f(o[3],!0));if(null===i&&(i=["*"]),!1===y(i))throw new n(e,a.InvalidParameter,r);return o[0].featureSetById(t,s,i)}throw new n(e,a.InvalidParameter,r)}))},oe.signatures.push({name:"featuresetbyid",min:2,max:4}),oe.functions.getfeatureset=function(e,r){return oe.standardFunctionAsync(e,r,((i,s,o)=>{if(t(o,1,2,e,r),j(o[0])){let t=f(o[1],"datasource");return null===t&&(t="datasource"),t=m(t).toLowerCase(),C(o[0].fullSchema(),t,e.lrucache,e.interceptor,e.spatialReference)}throw new n(e,a.InvalidParameter,r)}))},oe.signatures.push({name:"getfeatureset",min:1,max:2}),oe.functions.featuresetbyportalitem=function(e,r){return oe.standardFunctionAsync(e,r,((i,s,o)=>{if(t(o,2,5,e,r),null===o[0])throw new n(e,a.PortalRequired,r);if(o[0]instanceof h){const t=m(o[1]),i=m(o[2]);let s=f(o[3],null);const l=d(f(o[4],!0));if(null===s&&(s=["*"]),!1===y(s))throw new n(e,a.InvalidParameter,r);let p=null;return p=e.services?.portal?e.services.portal:Y.getDefault(),p=H(o[0],p),L(t,i,e.spatialReference,s,l,p,e.lrucache,e.interceptor)}if(!1===l(o[0]))throw new n(e,a.PortalRequired,r);const p=m(o[0]),u=m(o[1]);let c=f(o[2],null);const j=d(f(o[3],!0));if(null===c&&(c=["*"]),!1===y(c))throw new n(e,a.InvalidParameter,r);return L(p,u,e.spatialReference,c,j,e.services?.portal??Y.getDefault(),e.lrucache,e.interceptor)}))},oe.signatures.push({name:"featuresetbyportalitem",min:2,max:5}),oe.functions.featuresetbyname=function(e,r){return oe.standardFunctionAsync(e,r,((i,s,o)=>{if(t(o,2,4,e,r),o[0]instanceof E){const t=m(o[1]);let i=f(o[2],null);const s=d(f(o[3],!0));if(null===i&&(i=["*"]),!1===y(i))throw new n(e,a.InvalidParameter,r);return o[0].featureSetByName(t,s,i)}throw new n(e,a.InvalidParameter,r)}))},oe.signatures.push({name:"featuresetbyname",min:2,max:4}),oe.functions.featureset=function(e,r){return oe.standardFunction(e,r,((i,s,m)=>{t(m,1,1,e,r);let p=m[0];const u={layerDefinition:{geometryType:"",objectIdField:"",hasM:!1,hasZ:!1,globalIdField:"",typeIdField:"",fields:[]},featureSet:{geometryType:"",features:[]}};if(l(p))p=JSON.parse(p),void 0!==p.layerDefinition?(u.layerDefinition=p.layerDefinition,u.featureSet=p.featureSet,p.layerDefinition.spatialReference&&(u.layerDefinition.spatialReference=p.layerDefinition.spatialReference)):(u.featureSet.features=p.features,u.featureSet.geometryType=p.geometryType,u.layerDefinition.geometryType=u.featureSet.geometryType,u.layerDefinition.objectIdField=p.objectIdFieldName??"",u.layerDefinition.typeIdField=p.typeIdFieldName,u.layerDefinition.globalIdField=p.globalIdFieldName,u.layerDefinition.fields=p.fields,p.spatialReference&&(u.layerDefinition.spatialReference=p.spatialReference));else{if(!(m[0]instanceof o))throw new n(e,a.InvalidParameter,r);{p=JSON.parse(m[0].castToText(!0));const e=ee(p,"layerdefinition");if(null!==e){u.layerDefinition.geometryType=ee(e,"geometrytype",""),u.featureSet.geometryType=u.layerDefinition.geometryType,u.layerDefinition.globalIdField=ee(e,"globalidfield",""),u.layerDefinition.objectIdField=ee(e,"objectidfield",""),u.layerDefinition.typeIdField=ee(e,"typeidfield",""),u.layerDefinition.hasZ=!0===ee(e,"hasz",!1),u.layerDefinition.hasM=!0===ee(e,"hasm",!1);const t=ee(e,"spatialreference",null);t&&(u.layerDefinition.spatialReference=re(t));for(const t of ee(e,"fields",[])){const e={name:ee(t,"name",""),alias:ee(t,"alias",""),type:ee(t,"type",""),nullable:ee(t,"nullable",!0),editable:ee(t,"editable",!0),length:ee(t,"length",null),domain:te(ee(t,"domain"))};u.layerDefinition.fields.push(e)}const r=ee(p,"featureset",null);if(r){const e={};for(const t of u.layerDefinition.fields)e[t.name.toLowerCase()]=t.name;for(const t of ee(r,"features",[])){const r={},i=ee(t,"attributes",{});for(const t in i)r[e[t.toLowerCase()]]=i[t];u.featureSet.features.push({attributes:r,geometry:ie(ee(t,"geometry",null))})}}}else{u.layerDefinition.hasZ=!0===ee(p,"hasz",!1),u.layerDefinition.hasM=!0===ee(p,"hasm",!1),u.layerDefinition.geometryType=ee(p,"geometrytype",""),u.featureSet.geometryType=u.layerDefinition.geometryType,u.layerDefinition.objectIdField=ee(p,"objectidfieldname",""),u.layerDefinition.typeIdField=ee(p,"typeidfieldname","");const e=ee(p,"spatialreference",null);e&&(u.layerDefinition.spatialReference=re(e));let t=ee(p,"fields",null);if(y(t))for(const e of t){const t={name:ee(e,"name",""),alias:ee(e,"alias",""),type:ee(e,"type",""),nullable:ee(e,"nullable",!0),editable:ee(e,"editable",!0),length:ee(e,"length",null),domain:te(ee(e,"domain"))};u.layerDefinition.fields.push(t)}else t=null,u.layerDefinition.fields=t;const r={};for(const e of u.layerDefinition.fields)r[e.name.toLowerCase()]=e.name;let i=ee(p,"features",null);if(y(i))for(const e of i){const t={},i=ee(e,"attributes",{});for(const e in i)t[r[e.toLowerCase()]]=i[e];u.featureSet.features.push({attributes:t,geometry:ie(ee(e,"geometry",null))})}else i=null,u.featureSet.features=i}}}if(0==(!!(c=u).layerDefinition&&!!c.featureSet&&!1!==function(e,t){for(const t of["",null,"esriGeometryNull","esriGeometryPoint","esriGeometryPolyline","esriGeometryPolygon","esriGeometryMultipoint","esriGeometryEnvelope"])if(t===e)return!0;return!1}(c.layerDefinition.geometryType)&&!1!==y(c.layerDefinition.fields)&&!1!==y(c.featureSet.features)))throw new n(e,a.InvalidParameter,r);var c;return u.layerDefinition.geometryType||(u.layerDefinition.geometryType="esriGeometryNull"),U.create(u,e.spatialReference)}))},oe.signatures.push({name:"featureset",min:1,max:1}),oe.functions.filter=function(e,r){return oe.standardFunctionAsync(e,r,(async(i,o,l)=>{if(t(l,2,2,e,r),y(l[0])||g(l[0])){const t=[];let i=l[0];i instanceof G&&(i=i.toArray());let s=null;if(!b(l[1]))throw new n(e,a.InvalidParameter,r);s=l[1].createFunction(e);for(const e of i){const r=s(e);q(r)?!0===await r&&t.push(e):!0===r&&t.push(e)}return t}if(s(l[0])){const t=await l[0].load(),r=_.create(l[1],t.getFieldsIndex(),t.dateFieldsTimeZoneDefaultUTC),i=r.getVariables();if(i.length>0){const t=[];for(let r=0;r<i.length;r++){const s={name:i[r]};t.push(await oe.evaluateIdentifier(e,s))}const s={};for(let e=0;e<i.length;e++)s[i[e]]=t[e];return r.parameters=s,new A({parentfeatureset:l[0],whereclause:r})}return new A({parentfeatureset:l[0],whereclause:r})}throw new n(e,a.InvalidParameter,r)}))},oe.signatures.push({name:"filter",min:2,max:2}),oe.functions.orderby=function(e,r){return oe.standardFunctionAsync(e,r,(async(i,o,l)=>{if(t(l,2,2,e,r),s(l[0])){const e=new P(l[1]);return new v({parentfeatureset:l[0],orderbyclause:e})}throw new n(e,a.InvalidParameter,r)}))},oe.signatures.push({name:"orderby",min:2,max:2}),oe.functions.top=function(e,r){return oe.standardFunctionAsync(e,r,(async(i,o,l)=>{if(t(l,2,2,e,r),s(l[0]))return new N({parentfeatureset:l[0],topnum:l[1]});if(y(l[0]))return I(l[1])>=l[0].length?l[0].slice(0):l[0].slice(0,I(l[1]));if(g(l[0]))return I(l[1])>=l[0].length()?l[0].slice(0):l[0].slice(0,I(l[1]));throw new n(e,a.InvalidParameter,r)}))},oe.signatures.push({name:"top",min:2,max:2}),oe.functions.first=function(e,r){return oe.standardFunctionAsync(e,r,(async(i,o,n)=>{if(t(n,1,1,e,r),s(n[0])){const t=await n[0].first(i.abortSignal);if(null!==t){const r=w.createFromGraphicLikeObject(t.geometry,t.attributes,n[0],e.timeZone);return r._underlyingGraphic=t,r}return t}return y(n[0])?0===n[0].length?null:n[0][0]:g(n[0])?0===n[0].length()?null:n[0].get(0):null}))},oe.signatures.push({name:"first",min:1,max:1}),oe.functions.attachments=function(e,r){return oe.standardFunctionAsync(e,r,(async(i,l,m)=>{t(m,1,2,e,r);const p={minsize:-1,maxsize:-1,types:null,returnMetadata:!1};if(m.length>1)if(m[1]instanceof o){if(m[1].hasField("minsize")&&(p.minsize=I(m[1].field("minsize"))),m[1].hasField("metadata")&&(p.returnMetadata=d(m[1].field("metadata"))),m[1].hasField("maxsize")&&(p.maxsize=I(m[1].field("maxsize"))),m[1].hasField("types")){const e=F(m[1].field("types"),!1);e.length>0&&(p.types=e)}}else if(null!==m[1])throw new n(e,a.InvalidParameter,r);if(j(m[0])){let t=m[0]._layer;return t instanceof K&&(t=R(t,e.spatialReference,["*"],!0,e.lrucache,e.interceptor)),null===t||!1===s(t)?[]:(await t.load(),t.queryAttachments(m[0].field(t.objectIdField),p.minsize,p.maxsize,p.types,p.returnMetadata))}if(null===m[0])return[];throw new n(e,a.InvalidParameter,r)}))},oe.signatures.push({name:"attachments",min:1,max:2}),oe.functions.featuresetbyrelationshipname=function(e,r){return oe.standardFunctionAsync(e,r,(async(i,o,l)=>{t(l,2,4,e,r);const p=l[0],u=m(l[1]);let c=f(l[2],null);const h=d(f(l[3],!0));if(null===c&&(c=["*"]),!1===y(c))throw new n(e,a.InvalidParameter,r);if(null===l[0])return null;if(!j(l[0]))throw new n(e,a.InvalidParameter,r);let g=p._layer;if(g instanceof K&&(g=R(g,e.spatialReference,["*"],!0,e.lrucache,e.interceptor)),null===g)return null;if(!1===s(g))return null;g=await g.load();const b=g.relationshipMetaData().filter((e=>e.name===u));if(0===b.length)return null;if(void 0!==b[0].relationshipTableId&&null!==b[0].relationshipTableId&&b[0].relationshipTableId>-1)return M(g,b[0],p.field(g.objectIdField),g.spatialReference,c,h,e.lrucache,e.interceptor);let I=g.serviceUrl();if(!I)return null;I="/"===I.charAt(I.length-1)?I+b[0].relatedTableId.toString():I+"/"+b[0].relatedTableId.toString();const w=await $(I,g.spatialReference,c,h,e.lrucache,e.interceptor);await w.load();let F=w.relationshipMetaData();if(F=F.filter((e=>e.id===b[0].id)),!1===p.hasField(b[0].keyField)||null===p.field(b[0].keyField)){const e=await g.getFeatureByObjectId(p.field(g.objectIdField),[b[0].keyField]);if(e){const t=_.create(F[0].keyField+"= @id",w.getFieldsIndex(),w.dateFieldsTimeZoneDefaultUTC);return t.parameters={id:e.attributes[b[0].keyField]},w.filter(t)}return new Q({parentfeatureset:w})}const D=_.create(F[0].keyField+"= @id",w.getFieldsIndex(),w.dateFieldsTimeZoneDefaultUTC);return D.parameters={id:p.field(b[0].keyField)},w.filter(D)}))},oe.signatures.push({name:"featuresetbyrelationshipname",min:2,max:4}),oe.functions.featuresetbyassociation=function(e,r){return oe.standardFunctionAsync(e,r,(async(i,o,p)=>{t(p,2,3,e,r);const u=p[0],c=m(f(p[1],"")).toLowerCase(),d=l(p[2])?m(p[2]):null;if(null===p[0])return null;if(!j(p[0]))throw new n(e,a.InvalidParameter,r);let y=u._layer;if(y instanceof K&&(y=R(y,e.spatialReference,["*"],!0,e.lrucache,e.interceptor)),null===y)return null;if(!1===s(y))return null;await y.load();const h=y.serviceUrl(),g=await O(h,e.spatialReference);let b=null,I=null,w=!1;if(null!==d&&""!==d&&void 0!==d){for(const e of g.terminals)e.terminalName===d&&(I=e.terminalId);null===I&&(w=!0)}const F=g.associations.getFieldsIndex(),T=F.get("TOGLOBALID").name,x=F.get("FROMGLOBALID").name,E=F.get("TOTERMINALID").name,C=F.get("FROMTERMINALID").name,L=F.get("FROMNETWORKSOURCEID").name,U=F.get("TONETWORKSOURCEID").name,A=F.get("ASSOCIATIONTYPE").name,P=F.get("ISCONTENTVISIBLE").name,v=F.get("OBJECTID").name;for(const e of y.fields)if("global-id"===e.type){b=u.field(e.name);break}let N=null,M=new k(new J({name:"percentalong",alias:"percentalong",type:"double"}),_.create("0",g.associations.getFieldsIndex(),g.associations.dateFieldsTimeZoneDefaultUTC)),$=new k(new J({name:"side",alias:"side",type:"string"}),_.create("''",g.associations.getFieldsIndex(),g.associations.dateFieldsTimeZoneDefaultUTC));const G="globalid",H="globalId",Q={};for(const e in g.lkp)Q[e]=g.lkp[e].sourceId;const W=new Z(new J({name:"classname",alias:"classname",type:"string"}),null,Q);let q="";switch(c){case"midspan":{q=`((${T}='${b}') OR ( ${x}='${b}')) AND (${A} IN (5))`,W.codefield=_.create(`CASE WHEN (${T}='${b}') THEN ${L} ELSE ${U} END`,g.associations.getFieldsIndex(),g.associations.dateFieldsTimeZoneDefaultUTC);const e=S(B.findField(g.associations.fields,x));e.name=G,e.alias=G,N=new k(e,_.create(`CASE WHEN (${x}='${b}') THEN ${T} ELSE ${x} END`,g.associations.getFieldsIndex(),g.associations.dateFieldsTimeZoneDefaultUTC)),M=g.unVersion>=4?new z(B.findField(g.associations.fields,F.get("PERCENTALONG").name)):new k(new J({name:"percentalong",alias:"percentalong",type:"double"}),_.create("0",g.associations.getFieldsIndex(),g.associations.dateFieldsTimeZoneDefaultUTC));break}case"junctionedge":{q=`((${T}='${b}') OR ( ${x}='${b}')) AND (${A} IN (4,6))`,W.codefield=_.create(`CASE WHEN (${T}='${b}') THEN ${L} ELSE ${U} END`,g.associations.getFieldsIndex(),g.associations.dateFieldsTimeZoneDefaultUTC);const e=S(B.findField(g.associations.fields,x));e.name=G,e.alias=G,N=new k(e,_.create(`CASE WHEN (${x}='${b}') THEN ${T} ELSE ${x} END`,g.associations.getFieldsIndex(),g.associations.dateFieldsTimeZoneDefaultUTC)),$=new k(new J({name:"side",alias:"side",type:"string"}),_.create(`CASE WHEN (${A}=4) THEN 'from' ELSE 'to' END`,g.associations.getFieldsIndex(),g.associations.dateFieldsTimeZoneDefaultUTC));break}case"connected":{let e=`${T}='@T'`,t=`${x}='@T'`;null!==I&&(e+=` AND ${E}=@A`,t+=` AND ${C}=@A`),q="(("+e+") OR ("+t+"))",q=D(q,"@T",b??""),e=D(e,"@T",b??""),null!==I&&(e=D(e,"@A",I.toString()),q=D(q,"@A",I.toString())),W.codefield=_.create("CASE WHEN "+e+` THEN ${L} ELSE ${U} END`,g.associations.getFieldsIndex(),g.associations.dateFieldsTimeZoneDefaultUTC);const r=S(B.findField(g.associations.fields,x));r.name=G,r.alias=G,N=new k(r,_.create("CASE WHEN "+e+` THEN ${x} ELSE ${T} END`,g.associations.getFieldsIndex(),g.associations.dateFieldsTimeZoneDefaultUTC));break}case"container":q=`${T}='${b}' AND ${A} = 2`,null!==I&&(q+=` AND ${E} = `+I.toString()),W.codefield=L,q="( "+q+" )",N=new V(B.findField(g.associations.fields,x),G,G);break;case"content":q=`(${x}='${b}' AND ${A} = 2)`,null!==I&&(q+=` AND ${C} = `+I.toString()),W.codefield=U,q="( "+q+" )",N=new V(B.findField(g.associations.fields,T),G,G);break;case"structure":q=`(${T}='${b}' AND ${A} = 3)`,null!==I&&(q+=` AND ${E} = `+I.toString()),W.codefield=L,q="( "+q+" )",N=new V(B.findField(g.associations.fields,x),G,H);break;case"attached":q=`(${x}='${b}' AND ${A} = 3)`,null!==I&&(q+=` AND ${C} = `+I.toString()),W.codefield=U,q="( "+q+" )",N=new V(B.findField(g.associations.fields,T),G,H);break;default:throw new n(e,a.InvalidParameter,r)}return w&&(q="1 <> 1"),new B({parentfeatureset:g.associations,adaptedFields:[new z(B.findField(g.associations.fields,v)),new z(B.findField(g.associations.fields,P)),N,$,W,M],extraFilter:q?_.create(q,g.associations.getFieldsIndex(),g.associations.dateFieldsTimeZoneDefaultUTC):null})}))},oe.signatures.push({name:"featuresetbyassociation",min:2,max:6}),oe.functions.groupby=function(e,r){return oe.standardFunctionAsync(e,r,(async(i,p,u)=>{if(t(u,3,3,e,r),!s(u[0]))throw new n(e,a.InvalidParameter,r);const c=await u[0].load(),f=[],d=[];let j=!1,h=[];if(l(u[1]))h.push(u[1]);else if(u[1]instanceof o)h.push(u[1]);else if(y(u[1]))h=u[1];else{if(!g(u[1]))throw new n(e,a.InvalidParameter,r);h=u[1].toArray()}for(const t of h)if(l(t)){const e=_.create(m(t),c.getFieldsIndex(),c.dateFieldsTimeZoneDefaultUTC),r=!0===W(e)?m(t):"%%%%FIELDNAME";f.push({name:r,expression:e}),"%%%%FIELDNAME"===r&&(j=!0)}else{if(!(t instanceof o))throw new n(e,a.InvalidParameter,r);{const i=t.hasField("name")?t.field("name"):"%%%%FIELDNAME",s=t.hasField("expression")?t.field("expression"):"";if("%%%%FIELDNAME"===i&&(j=!0),!i)throw new n(e,a.InvalidParameter,r);f.push({name:i,expression:_.create(s||i,c.getFieldsIndex(),c.dateFieldsTimeZoneDefaultUTC)})}}if(h=[],l(u[2]))h.push(u[2]);else if(y(u[2]))h=u[2];else if(g(u[2]))h=u[2].toArray();else{if(!(u[2]instanceof o))throw new n(e,a.InvalidParameter,r);h.push(u[2])}for(const t of h){if(!(t instanceof o))throw new n(e,a.InvalidParameter,r);{const i=t.hasField("name")?t.field("name"):"",s=t.hasField("statistic")?t.field("statistic"):"",o=t.hasField("expression")?t.field("expression"):"";if(!i||!s||!o)throw new n(e,a.InvalidParameter,r);d.push({name:i,statistic:s.toLowerCase(),expression:_.create(o,c.getFieldsIndex(),c.dateFieldsTimeZoneDefaultUTC)})}}if(j){const e={};for(const t of c.fields)e[t.name.toLowerCase()]=1;for(const t of f)"%%%%FIELDNAME"!==t.name&&(e[t.name.toLowerCase()]=1);for(const t of d)"%%%%FIELDNAME"!==t.name&&(e[t.name.toLowerCase()]=1);let t=0;for(const r of f)if("%%%%FIELDNAME"===r.name){for(;1===e["field_"+t.toString()];)t++;e["field_"+t.toString()]=1,r.name="FIELD_"+t.toString()}}for(const t of f)await X(t.expression,oe,e);for(const t of d)await X(t.expression,oe,e);return u[0].groupby(f,d)}))},oe.signatures.push({name:"groupby",min:3,max:3}),oe.functions.distinct=function(e,r){return oe.standardFunctionAsync(e,r,(async(i,p,u)=>{if(s(u[0])){t(u,2,2,e,r);const i=await u[0].load(),s=[];let p=[];if(l(u[1]))p.push(u[1]);else if(u[1]instanceof o)p.push(u[1]);else if(y(u[1]))p=u[1];else{if(!g(u[1]))throw new n(e,a.InvalidParameter,r);p=u[1].toArray()}let c=!1;for(const t of p)if(l(t)){const e=_.create(m(t),i.getFieldsIndex(),i.dateFieldsTimeZoneDefaultUTC),r=!0===W(e)?m(t):"%%%%FIELDNAME";s.push({name:r,expression:e}),"%%%%FIELDNAME"===r&&(c=!0)}else{if(!(t instanceof o))throw new n(e,a.InvalidParameter,r);{const o=t.hasField("name")?t.field("name"):"%%%%FIELDNAME",l=t.hasField("expression")?t.field("expression"):"";if("%%%%FIELDNAME"===o&&(c=!0),!o)throw new n(e,a.InvalidParameter,r);s.push({name:o,expression:_.create(l||o,i.getFieldsIndex(),i.dateFieldsTimeZoneDefaultUTC)})}}if(c){const e={};for(const t of i.fields)e[t.name.toLowerCase()]=1;for(const t of s)"%%%%FIELDNAME"!==t.name&&(e[t.name.toLowerCase()]=1);let t=0;for(const r of s)if("%%%%FIELDNAME"===r.name){for(;1===e["field_"+t.toString()];)t++;e["field_"+t.toString()]=1,r.name="FIELD_"+t.toString()}}for(const t of s)await X(t.expression,oe,e);return u[0].groupby(s,[])}return function(e,t,r,i){if(1===i.length){if(y(i[0]))return x(e,i[0],-1);if(g(i[0]))return x(e,i[0].toArray(),-1)}return x(e,i,-1)}("distinct",0,0,u)}))}),oe.functions.getfeaturesetinfo=function(e,r){return oe.standardFunctionAsync(e,r,(async(i,n,a)=>{if(t(a,1,1,e,r),!s(a[0]))return null;const l=await a[0].getFeatureSetInfo();return l?o.convertObjectToArcadeDictionary({layerId:l.layerId,layerName:l.layerName,itemId:l.itemId,serviceLayerUrl:l.serviceLayerUrl,webMapLayerId:l.webMapLayerId??null,webMapLayerTitle:l.webMapLayerTitle??null,className:null,objectClassId:null},u(e),!1,!1):null}))},oe.signatures.push({name:"getfeaturesetinfo",min:1,max:1}),oe.functions.filterbysubtypecode=function(e,r){return oe.standardFunctionAsync(e,r,(async(i,o,l)=>{if(t(l,2,2,e,r),s(l[0])){const t=await l[0].load(),i=l[1];if(!T(i))throw new n(e,a.InvalidParameter,r);if(null===t.typeIdField||""===t.typeIdField)throw new n(e,a.FeatureSetDoesNotHaveSubtypes,r);const s=_.create(`${t.typeIdField}= ${l[1]}`,t.getFieldsIndex(),t.dateFieldsTimeZoneDefaultUTC);return new A({parentfeatureset:l[0],whereclause:s})}throw new n(e,a.InvalidParameter,r)}))},oe.signatures.push({name:"filterbysubtypecode",min:2,max:2})}export{oe as registerFunctions};
