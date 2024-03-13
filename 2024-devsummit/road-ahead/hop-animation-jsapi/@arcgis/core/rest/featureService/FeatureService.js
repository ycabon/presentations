/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import s from"../../request.js";import{clone as e,i as o}from"../../core/lang.js";import r from"../../core/Error.js";import{IdentifiableMixin as i}from"../../core/Identifiable.js";import{JSONSupportMixin as p}from"../../core/JSONSupport.js";import n from"../../core/Loadable.js";import{property as a}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/Logger.js";import{r as l}from"../../chunks/reader.js";import{subclass as m}from"../../core/accessorSupport/decorators/subclass.js";import u from"../../geometry/SpatialReference.js";import{g as c,a as d,b as y,i as j,u as h,c as b}from"../../chunks/applyEditsUtils.js";import{checkEditingCapabilities as f,normalizeEdits as k,normalizeGeometries as S}from"../../chunks/editingSupport.js";import{e as g,i as v,a as R,c as C}from"../../chunks/EditBusLayer.js";import{p as E,a as D,e as F}from"../../chunks/utils7.js";import{u as U}from"../../chunks/editsZScale.js";import{r as I,a as M}from"../../chunks/jsonUtils2.js";import"../../config.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../core/promiseUtils.js";import"../../chunks/handleUtils.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/tracking.js";import"../../chunks/ensureType.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/ObservableBase.js";import"../../core/scheduling.js";import"../../core/Promise.js";import"../../chunks/unitUtils.js";import"../../chunks/jsonMap.js";import"../../chunks/assets.js";import"../../chunks/writer.js";import"../../Graphic.js";import"../../geometry.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/coordsUtils.js";import"../../chunks/Axis.js";import"../../chunks/extentUtils.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/vec3f64.js";import"../../chunks/common.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../PopupTemplate.js";import"../../core/Clonable.js";import"../../core/Collection.js";import"../../core/Evented.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../layers/support/fieldUtils.js";import"../../core/sql.js";import"../../intl.js";import"../../chunks/date.js";import"../../chunks/locale.js";import"../../chunks/timeZoneUtils.js";import"../../chunks/datetime.js";import"../../chunks/messages.js";import"../../popup/content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/Content.js";import"../../popup/content/CustomContent.js";import"../../popup/content/ExpressionContent.js";import"../../popup/ElementExpressionInfo.js";import"../../popup/content/FieldsContent.js";import"../../popup/FieldInfo.js";import"../../chunks/enumeration.js";import"../../popup/support/FieldInfoFormat.js";import"../../popup/content/MediaContent.js";import"../../popup/content/BarChartMediaInfo.js";import"../../popup/content/mixins/ChartMediaInfo.js";import"../../popup/content/mixins/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../chunks/chartMediaInfoUtils.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/RelationshipContent.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../popup/content/TextContent.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/RelatedRecordsInfo.js";import"../../support/actions/ActionBase.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../symbols.js";import"../../symbols/CIMSymbol.js";import"../../symbols/Symbol.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/utils4.js";import"../../symbols/edges/Edges3D.js";import"../../chunks/screenUtils.js";import"../../chunks/materialUtils.js";import"../../chunks/opacityUtils.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/FillSymbol.js";import"../../symbols/SimpleLineSymbol.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../chunks/lineMarkers.js";import"../../symbols/FillSymbol3DLayer.js";import"../../symbols/patterns/LineStylePattern3D.js";import"../../symbols/patterns/StylePattern3D.js";import"../../chunks/utils5.js";import"../../chunks/colors.js";import"../../chunks/symbolLayerUtils3D.js";import"../../chunks/aaBoundingBox.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../chunks/persistableUrlUtils.js";import"../../symbols/LabelSymbol3D.js";import"../../symbols/Symbol3D.js";import"../../chunks/collectionUtils.js";import"../../portal/Portal.js";import"../../portal/PortalGroup.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/LineStyleMarker3D.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../symbols/support/StyleOrigin.js";import"../../chunks/Thumbnail.js";import"../../chunks/calloutUtils.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../symbols/support/Symbol3DVerticalOffset.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../symbols/PictureFillSymbol.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../core/reactiveUtils.js";import"../../chunks/asyncUtils.js";import"../../symbols/SimpleFillSymbol.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../geometry/projection.js";import"../../chunks/projectBuffer.js";import"../../chunks/geodesicConstants.js";import"../../geometry/support/GeographicTransformation.js";import"../../geometry/support/GeographicTransformationStep.js";import"../../chunks/zscale.js";import"../../chunks/uuid.js";import"../../geometry/support/normalizeUtils.js";import"../../chunks/normalizeUtilsCommon.js";import"../../chunks/simplify.js";import"../../chunks/utils8.js";import"../../chunks/infoFor3D.js";import"../../chunks/layerUtils2.js";function w(t){return{isDataVersioned:I(t,"hasVersionedData",!1)}}function P(t,s){const e=t?t.toLowerCase().split(",").map((t=>t.trim())):[],o=e.includes("query"),r=e.includes("editing")&&!s.datesInUnknownTimezone;let i=r&&e.includes("create"),p=r&&e.includes("delete"),n=r&&e.includes("update");return r&&!(i||p||n)&&(i=p=n=!0),{supportsAdd:i,supportsDelete:p,supportsEditing:r,supportsChangeTracking:e.includes("changetracking"),supportsQuery:o,supportsQueryDataElements:I(s,"supportsQueryDataElements",!1),supportsQueryDomains:I(s,"supportsQueryDomains",!1),supportsQueryContingentValues:I(s,"supportsQueryContingentValues",!1),supportsSync:e.includes("sync"),supportsUpdate:n}}function A(t){return{maxRecordCountFactor:M(t,"maxRecordCountFactor",void 0),maxRecordCount:M(t,"maxRecordCount",void 0)}}function L(t){const s=t?.advancedEditingCapabilities;return{supportsGlobalId:I(t,"supportsApplyEditsWithGlobalIds",!1),supportsReturnServiceEditsInSourceSpatialReference:I(s,"supportsReturnServiceEditsInSourceSR",!1),supportsSplit:I(s,"supportsSplit",!1),supportsAsyncApplyEdits:I(s,"supportsAsyncApplyEdits",!1)}}function O(t){const s=t?.syncCapabilities,e=s?.supportedSyncDataOptions;return{supportsAsync:I(s,"supportsAsync",!1),supportedSyncDataOptions:{annotations:1==(1&e),dimensions:2==(2&e),contingentValues:4==(4&e),attributeRules:8==(8&e),utilityNetworkSystem:16==(16&e),annotationFullModel:32==(32&e),include3DObjects:64==(64&e),utilityNetworkMissingLayers:128==(128&e),preserveTrueCurves:256==(256&e)}}}let x=class extends(p(i(n))){constructor(t){super(t),this.url=null,this.sourceJSON=null,this.userTypeExtensions=[],this.layerInfos=[],this.tableInfos=[],this.capabilities=null}read(t,s){this.sourceJSON=t,super.read(t,s)}get utilityNetworkUrl(){for(const t of this.sourceJSON.layers)if("Utility Network Layer"===t.type)return`${this.url}/${t.id}`;return null}get versionManagementServiceUrl(){return this.sourceJSON.hasBranchVersionedData?this.url.replace(/\/FeatureServer/i,"/VersionManagementServer"):null}readCapabilities(t,s){return function(t){return{data:w(t),sync:O(t),operations:P(t.capabilities,t),query:A(t),editing:L(t)}}(s)}load(t){return this.addResolvingPromise(this._fetchService(this.url,t)),Promise.resolve(this)}async applyEdits(t,s){let o=null;try{const{results:r,edits:i,editedFeatures:p}=await this._internalApplyEdits(t,s),n=t=>t.filter((t=>!t.error)).map(e);let a=0;return r.map((t=>{o=g(this.url,t.id,s?.gdbVersion,!0);const e={edits:i[a],addedFeatures:n(t.addFeatureResults),updatedFeatures:n(t.updateFeatureResults),deletedFeatures:n(t.deleteFeatureResults),addedAttachments:n(t.addAttachmentResults),updatedAttachments:n(t.updateAttachmentResults),deletedAttachments:n(t.deleteAttachmentResults),exceededTransferLimit:!1,historicMoment:t.editMoment?new Date(t.editMoment):null};a+=1,p.length>0&&(e.editedFeatures=p),o.resolve(e),o=null})),r}catch(t){throw o&&o.reject(t),t}}async _internalApplyEdits(t,e){const r=e?.globalIdUsed??!1,i=u.fromJSON(this.sourceJSON.spatialReference),{edits:p,options:n}=await this._processApplyEditsParams(t,e),a=await Promise.all(p.map((async t=>{const s=t.addFeatures?.map((t=>c({spatialReference:i},t,null)))??[],e=(await Promise.all(s)).filter(o),p=t.updateFeatures?.map((t=>c({spatialReference:i},t,null)))??[],n=(await Promise.all(p)).filter(o),a=d(t.identifierFields,t.deleteFeatures,r);U(e,n,i);const l=await y(t.identifierFields,t);return{id:t.id,adds:e,updates:n,deletes:a,attachments:l}}))),l={gdbVersion:n?.gdbVersion,rollbackOnFailure:!0,useGlobalIds:r,returnEditMoment:!0,honorSequenceOfEdits:n?.honorSequenceOfEdits,usePreviousEditMoment:n?.usePreviousEditMoment,returnServiceEditsInSourceSR:n?.returnServiceEditsInSourceSR,returnServiceEditsOption:"originalAndCurrentFeatures",async:!1};await v(this.url,e?.gdbVersion,!0);const m=R(this.url,e?.gdbVersion||null);l.edits=JSON.stringify(a);const h=E(this.url),b=D(h.query,{query:F({...l,f:"json"}),method:"post"});let f;m&&(b.authMode="immediate",b.query.sessionId=C);try{f=await s(this.url+"/applyEdits",b)}catch(t){if(!j(t))throw t;b.authMode="immediate",f=await s(this.url+"/applyEdits",b)}return{...this._createServiceEditsResult(f),edits:p}}_createServiceEditsResult(t){const s=t.data,e=[];return{results:s.map((t=>{const s={addResults:t.addResults??[],updateResults:t.updateResults??[],deleteResults:t.deleteResults??[],attachments:t.attachments,editMoment:t.editMoment},o=h(s),r=t.editedFeatures,i=r?.spatialReference?new u({wkid:r?.spatialReference.wkid,wkt:r?.spatialReference.wkt,latestWkid:r?.spatialReference.latestWkid,latestVcsWkid:r?.spatialReference.latestVcsWkid,vcsWkid:r?.spatialReference.vcsWkid}):null,p=r?b(r,i):null;return p&&e.push({layerId:t.id,editedFeatures:p}),{id:t.id,editedFeatures:p,...o}})),editedFeatures:e}}async _processApplyEditsParams(t,s){const e={...s};return{edits:await Promise.all(t.map((async t=>{const e=this.capabilities,o=t&&(t.addFeatures||t.updateFeatures||t.deleteFeatures),i=t&&(t.addAttachments||t.updateAttachments||t.deleteAttachments);if(f(t,e,s,!!o,!!i,"feature-service"),!e.data.isDataVersioned&&s?.gdbVersion)throw new r("feature-service:invalid-parameter","'gdbVersion' is applicable only if the layer supports versioned data. See: 'capabilities.data.isVersioned'");const p=k(t,e,"feature-service");return{...await S(p),id:t.id,identifierFields:t.identifierFields}}))),options:e}}async _fetchService(t,e){if(this.sourceJSON)return void this.read(this.sourceJSON,{origin:"service",url:E(t)});const o=await s(t,{responseType:"json",query:{f:"json"},...e});this.read(o.data)}};t([a()],x.prototype,"url",void 0),t([a()],x.prototype,"sourceJSON",void 0),t([a({readOnly:!0})],x.prototype,"utilityNetworkUrl",null),t([a({readOnly:!0})],x.prototype,"versionManagementServiceUrl",null),t([a()],x.prototype,"userTypeExtensions",void 0),t([a({json:{read:{source:"layers"}}})],x.prototype,"layerInfos",void 0),t([a({json:{read:{source:"tables"}}})],x.prototype,"tableInfos",void 0),t([a({readOnly:!0,json:{read:{source:["hasVersionedData","capabilities","supportsQueryDataElements","supportsQueryDomains","supportsQueryContingentValues","maxRecordCountFactor","maxRecordCount","advancedEditingCapabilities","supportsApplyEditsWithGlobalIds","syncCapabilities","datesInUnknownTimezone"]}}})],x.prototype,"capabilities",void 0),t([l("service","capabilities")],x.prototype,"readCapabilities",null),x=t([m("esri.services.FeatureService")],x);const V=x;export{V as default};