/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as t}from"./chunks/tslib.es6.js";import{ClonableMixin as e}from"./core/Clonable.js";import o from"./core/Collection.js";import{JSONSupport as s}from"./core/JSONSupport.js";import{clone as r}from"./core/lang.js";import{L as i}from"./chunks/Logger.js";import{isPromiseLike as n}from"./core/promiseUtils.js";import{property as p}from"./core/accessorSupport/decorators/property.js";import{cast as a}from"./core/accessorSupport/decorators/cast.js";import{r as l}from"./chunks/reader.js";import{subclass as m}from"./core/accessorSupport/decorators/subclass.js";import{w as c}from"./chunks/writer.js";import{a as d}from"./chunks/ensureType.js";import{collectFields as f,collectArcadeFieldNames as u}from"./layers/support/fieldUtils.js";import{persistableTypes as h}from"./popup/content.js";import y from"./popup/ExpressionInfo.js";import j from"./popup/FieldInfo.js";import I from"./popup/LayerOptions.js";import g from"./popup/RelatedRecordsInfo.js";import F,{t as x}from"./popup/content/MediaContent.js";import _ from"./support/actions/ActionBase.js";import w from"./support/actions/ActionButton.js";import C from"./support/actions/ActionToggle.js";import A from"./popup/content/TextContent.js";import k from"./popup/content/AttachmentsContent.js";import N from"./popup/content/FieldsContent.js";import E from"./popup/content/ExpressionContent.js";import R from"./popup/content/RelationshipContent.js";import O from"./popup/content/Content.js";import v from"./popup/content/CustomContent.js";import"./core/Accessor.js";import"./core/Handles.js";import"./chunks/maybe.js";import"./chunks/metadata.js";import"./chunks/utils.js";import"./chunks/handleUtils.js";import"./chunks/ObservableBase.js";import"./chunks/tracking.js";import"./core/scheduling.js";import"./core/Evented.js";import"./config.js";import"./core/Error.js";import"./chunks/shared.js";import"./chunks/SimpleObservable.js";import"./core/sql.js";import"./intl.js";import"./chunks/date.js";import"./chunks/jsonMap.js";import"./chunks/locale.js";import"./chunks/timeZoneUtils.js";import"./chunks/datetime.js";import"./chunks/messages.js";import"./request.js";import"./kernel.js";import"./core/urlUtils.js";import"./chunks/assets.js";import"./chunks/mathUtils.js";import"./chunks/vec3.js";import"./chunks/vec3f64.js";import"./chunks/common.js";import"./geometry.js";import"./geometry/Extent.js";import"./geometry/Geometry.js";import"./geometry/SpatialReference.js";import"./chunks/unitUtils.js";import"./geometry/Point.js";import"./geometry/support/webMercatorUtils.js";import"./geometry/Multipoint.js";import"./chunks/zmUtils.js";import"./geometry/Polygon.js";import"./chunks/coordsUtils.js";import"./chunks/Axis.js";import"./chunks/extentUtils.js";import"./chunks/aaBoundingRect.js";import"./geometry/Polyline.js";import"./chunks/typeUtils.js";import"./geometry/support/jsonUtils.js";import"./chunks/enumeration.js";import"./popup/support/FieldInfoFormat.js";import"./popup/support/RelatedRecordsInfoFieldOrder.js";import"./popup/content/BarChartMediaInfo.js";import"./popup/content/mixins/ChartMediaInfo.js";import"./popup/content/mixins/MediaInfo.js";import"./popup/content/support/ChartMediaInfoValue.js";import"./Color.js";import"./chunks/colorUtils.js";import"./popup/content/support/ChartMediaInfoValueSeries.js";import"./chunks/chartMediaInfoUtils.js";import"./popup/content/ColumnChartMediaInfo.js";import"./popup/content/ImageMediaInfo.js";import"./popup/content/support/ImageMediaInfoValue.js";import"./popup/content/LineChartMediaInfo.js";import"./popup/content/PieChartMediaInfo.js";import"./core/Identifiable.js";import"./popup/ElementExpressionInfo.js";const S="relationships/",b="expression/",M=o.ofType({key:"type",defaultKeyValue:"button",base:_,typeMap:{button:w,toggle:C}}),U={base:O,key:"type",typeMap:{media:F,custom:v,text:A,attachments:k,fields:N,expression:E,relationship:R}},T=new Set(["attachments","fields","media","text","expression","relationship"]);let J=class extends(e(s)){constructor(){super(...arguments),this.actions=null,this.content="",this.expressionInfos=null,this.fieldInfos=null,this.layerOptions=null,this.lastEditInfoEnabled=!0,this.outFields=null,this.overwriteActions=!1,this.returnGeometry=!1,this.title=""}castContent(t){return Array.isArray(t)?t.map((t=>d(U,t))):"string"==typeof t||"function"==typeof t||t instanceof HTMLElement||n(t)?t:(i.getLogger(this).error("content error","unsupported content value",{value:t}),null)}readContent(t,e){const{popupElements:o}=e;return Array.isArray(o)&&o.length>0?this._readPopupInfoElements(e.description,e.mediaInfos,o):this._readPopupInfo(e)}writeContent(t,e,o,s){"string"!=typeof t?Array.isArray(t)&&(e.popupElements=t.filter((t=>T.has(t.type))).map((t=>t?.toJSON(s))),e.popupElements.forEach((t=>{"attachments"===t.type?this._writeAttachmentContent(e):"media"===t.type?this._writeMediaContent(t,e):"text"===t.type?this._writeTextContent(t,e):"relationship"===t.type&&this._writeRelationshipContent(t,e)}))):e.description=t}writeFieldInfos(t,e,o,s){const{content:r}=this,i=Array.isArray(r)?r:null;if(t){const o=i?i.filter((t=>"fields"===t.type)):[],r=o.length&&o.every((t=>t.fieldInfos?.length));e.fieldInfos=t.filter(Boolean).map((t=>{const e=t.toJSON(s);return r&&(e.visible=!1),e}))}if(i)for(const t of i)"fields"===t.type&&this._writeFieldsContent(t,e)}writeLayerOptions(t,e,o,s){e[o]=!t||null===t.showNoDataRecords&&null===t.returnTopmostRaster?null:t.toJSON(s)}writeTitle(t,e){e.title=t||""}async collectRequiredFields(t,e){const o=this.expressionInfos||[];await this._collectExpressionInfoFields(t,e,[...o,...this._getContentExpressionInfos(this.content,o)]),f(t,e,[...this.outFields||[],...this._getActionsFields(this.actions),...this._getTitleFields(this.title),...this._getContentFields(this.content)])}async getRequiredFields(t){const e=new Set;return await this.collectRequiredFields(e,t),[...e].sort()}_writeFieldsContent(t,e){if(!Array.isArray(t.fieldInfos)||!t.fieldInfos.length)return;const o=r(t.fieldInfos);Array.isArray(e.fieldInfos)?o.forEach((t=>{const o=e.fieldInfos.find((e=>e.fieldName.toLowerCase()===t.fieldName.toLowerCase()));o?o.visible=!0:e.fieldInfos.push(t)})):e.fieldInfos=o}_writeAttachmentContent(t){t.showAttachments||(t.showAttachments=!0)}_writeRelationshipContent(t,e){const o=t.orderByFields?.map((e=>this._toFieldOrderJSON(e,t.relationshipId)))||[],s=[...e.relatedRecordsInfo?.orderByFields||[],...o];e.relatedRecordsInfo={showRelatedRecords:!0,...s?.length&&{orderByFields:s}}}_writeTextContent(t,e){!e.description&&t.text&&(e.description=t.text)}_writeMediaContent(t,e){if(!Array.isArray(t.mediaInfos)||!t.mediaInfos.length)return;const o=r(t.mediaInfos);Array.isArray(e.mediaInfos)?e.mediaInfos=[...e.mediaInfos,...o]:e.mediaInfos=o}_readPopupInfoElements(t,e,o){const s={description:!1,mediaInfos:!1};return o.map((o=>"media"===o.type?(o.mediaInfos||!e||s.mediaInfos||(o.mediaInfos=e,s.mediaInfos=!0),F.fromJSON(o)):"text"===o.type?(o.text||!t||s.description||(o.text=t,s.description=!0),A.fromJSON(o)):"attachments"===o.type?k.fromJSON(o):"fields"===o.type?N.fromJSON(o):"expression"===o.type?E.fromJSON(o):"relationship"===o.type?R.fromJSON(o):void 0)).filter(Boolean)}_toRelationshipContent(t){const{field:e,order:o}=t;if(!e?.startsWith(S))return null;const s=e.replace(S,"").split("/");if(2!==s.length)return null;const r=parseInt(s[0],10),i=s[1];return"number"==typeof r&&i?R.fromJSON({relationshipId:r,orderByFields:[{field:i,order:o}]}):null}_toFieldOrderJSON(t,e){const{order:o,field:s}=t;return{field:`${S}${e}/${s}`,order:o}}_readPopupInfo({description:t,mediaInfos:e,showAttachments:o,relatedRecordsInfo:s={showRelatedRecords:!1}}){const r=[];t?r.push(new A({text:t})):r.push(new N),Array.isArray(e)&&e.length&&r.push(F.fromJSON({mediaInfos:e})),o&&r.push(k.fromJSON({displayType:"auto"}));const{showRelatedRecords:i,orderByFields:n}=s;return i&&n?.length&&n.forEach((t=>{const e=this._toRelationshipContent(t);e&&r.push(e)})),r.length?r:t}_getContentElementFields(t){const e=t?.type;if("attachments"===e)return[...this._extractFieldNames(t.title),...this._extractFieldNames(t.description)];if("custom"===e)return t.outFields||[];if("fields"===e)return[...this._extractFieldNames(t.title),...this._extractFieldNames(t.description),...this._getFieldInfoFields(t.fieldInfos??this.fieldInfos)];if("media"===e){const e=t.mediaInfos||[];return[...this._extractFieldNames(t.title),...this._extractFieldNames(t.description),...e.reduce(((t,e)=>[...t,...this._getMediaInfoFields(e)]),[])]}return"text"===e?this._extractFieldNames(t.text):[]}_getMediaInfoFields(t){const{caption:e,title:o,value:s}=t,r=s||{},{fields:i,normalizeField:n,tooltipField:p,sourceURL:a,linkURL:l}=r,m=[...this._extractFieldNames(o),...this._extractFieldNames(e),...this._extractFieldNames(a),...this._extractFieldNames(l),...i??[]];return n&&m.push(n),p&&m.push(p),m}_getContentExpressionInfos(t,e){return Array.isArray(t)?t.reduce(((t,e)=>[...t,..."expression"===e.type&&e.expressionInfo?[e.expressionInfo]:[]]),e):[]}_getContentFields(t){return"string"==typeof t?this._extractFieldNames(t):Array.isArray(t)?t.reduce(((t,e)=>[...t,...this._getContentElementFields(e)]),[]):[]}async _collectExpressionInfoFields(t,e,o){o&&await Promise.all(o.map((o=>u(t,e,o.expression))))}_getFieldInfoFields(t){return t?t.filter((t=>void 0===t.visible||!!t.visible)).map((t=>t.fieldName)).filter((t=>!t.startsWith(S)&&!t.startsWith(b))):[]}_getActionsFields(t){return t?t.toArray().reduce(((t,e)=>[...t,...this._getActionFields(e)]),[]):[]}_getActionFields(t){const{className:e,title:o,type:s}=t,r="button"===s||"toggle"===s?t.image:"";return[...this._extractFieldNames(o),...this._extractFieldNames(e),...this._extractFieldNames(r)]}_getTitleFields(t){return"string"==typeof t?this._extractFieldNames(t):[]}_extractFieldNames(t){if(!t||"string"!=typeof t)return[];const e=t.match(/{[^}]*}/g);if(!e)return[];const o=/\{(\w+):.+\}/,s=e.filter((t=>!(0===t.indexOf(`{${S}`)||0===t.indexOf(`{${b}`)))).map((t=>t.replace(o,"{$1}")));return s?s.map((t=>t.slice(1,-1))):[]}};t([p({type:M})],J.prototype,"actions",void 0),t([p()],J.prototype,"content",void 0),t([a("content")],J.prototype,"castContent",null),t([l("content",["description","fieldInfos","popupElements","mediaInfos","showAttachments","relatedRecordsInfo"])],J.prototype,"readContent",null),t([c("content",{popupElements:{type:o.ofType(h)},showAttachments:{type:Boolean},mediaInfos:{type:o.ofType(x)},description:{type:String},relatedRecordsInfo:{type:g}})],J.prototype,"writeContent",null),t([p({type:[y],json:{write:!0}})],J.prototype,"expressionInfos",void 0),t([p({type:[j]})],J.prototype,"fieldInfos",void 0),t([c("fieldInfos")],J.prototype,"writeFieldInfos",null),t([p({type:I})],J.prototype,"layerOptions",void 0),t([c("layerOptions")],J.prototype,"writeLayerOptions",null),t([p({type:Boolean,json:{read:{source:"showLastEditInfo"},write:{target:"showLastEditInfo"},default:!0}})],J.prototype,"lastEditInfoEnabled",void 0),t([p()],J.prototype,"outFields",void 0),t([p()],J.prototype,"overwriteActions",void 0),t([p()],J.prototype,"returnGeometry",void 0),t([p({json:{type:String}})],J.prototype,"title",void 0),t([c("title")],J.prototype,"writeTitle",null),J=t([m("esri.PopupTemplate")],J);const B=J;export{B as default};
