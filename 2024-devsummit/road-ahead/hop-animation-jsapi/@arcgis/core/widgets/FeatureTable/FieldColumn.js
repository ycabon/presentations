/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import{L as e}from"../../chunks/Logger.js";import{watch as o}from"../../core/reactiveUtils.js";import{property as i}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import{subclass as r}from"../../core/accessorSupport/decorators/subclass.js";import{c as n}from"../../chunks/date.js";import{convertNumberFormatToIntlOptions as s,formatNumber as a}from"../../intl.js";import l,{C as u}from"../../layers/support/CodedValueDomain.js";import{i as p}from"../../chunks/editableLayers.js";import{isNumericField as m,h as d,g as c,validateFieldValue as h,isStringField as j}from"../../layers/support/fieldUtils.js";import{g as f}from"../../chunks/layerUtils2.js";import g from"../FeatureForm/FieldInput.js";import y from"./Grid/EditorColumn.js";import v from"../support/DatePicker.js";import{l as b}from"../../chunks/legacyIcon.js";import k from"../support/TimePicker.js";import{r as _}from"../../chunks/widgetUtils.js";import"../../config.js";import"../../chunks/asyncUtils.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../core/Collection.js";import"../../core/Evented.js";import"../../chunks/ensureType.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../chunks/jsonMap.js";import"../../chunks/locale.js";import"../../chunks/timeZoneUtils.js";import"../../chunks/datetime.js";import"../../chunks/messages.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../core/JSONSupport.js";import"../../chunks/assets.js";import"../../chunks/enumeration.js";import"../../layers/support/Domain.js";import"../../chunks/unitUtils.js";import"../../chunks/infoFor3D.js";import"../../core/sql.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/vec3f64.js";import"../../chunks/common.js";import"../../geometry.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../chunks/reader.js";import"../../geometry/SpatialReference.js";import"../../chunks/writer.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/coordsUtils.js";import"../../chunks/Axis.js";import"../../chunks/extentUtils.js";import"../../chunks/aaBoundingRect.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../layers/support/InheritedDomain.js";import"../../layers/support/RangeDomain.js";import"../../chunks/utils2.js";import"../../chunks/basemapUtils.js";import"../../Basemap.js";import"../../chunks/collectionUtils.js";import"../../core/Loadable.js";import"../../core/Promise.js";import"../../chunks/loadAll.js";import"../../portal/Portal.js";import"../../portal/PortalGroup.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../portal/PortalItem.js";import"../../portal/PortalItemResource.js";import"../../portal/PortalRating.js";import"../../chunks/persistableUrlUtils.js";import"../../support/BasemapStyle.js";import"../../chunks/writeUtils.js";import"../../chunks/utils3.js";import"../../chunks/colorUtils.js";import"../../chunks/screenUtils.js";import"../../chunks/mat4.js";import"../../chunks/featureUtils.js";import"../FeatureForm/EditableInput.js";import"../../chunks/featureFormUtils.js";import"../../chunks/compilerUtils.js";import"../FeatureForm/InputBase.js";import"./Grid/Column.js";import"./Grid/support/ButtonMenu.js";import"../Widget.js";import"../../chunks/domUtils.js";import"../../chunks/uuid.js";import"../../chunks/projector.js";import"../../chunks/jsxWidgetSupport.js";import"./Grid/support/ButtonMenuViewModel.js";import"./Grid/support/ButtonMenuItem.js";import"../../chunks/globalCss.js";import"../../chunks/jsxFactory.js";import"../../chunks/uriUtils.js";import"../support/DatePickerViewModel.js";import"../support/DateTimeElementViewModel.js";import"../../chunks/Popover.js";import"../../chunks/accessibleHandler.js";import"../../chunks/messageBundle.js";import"../support/TimePickerViewModel.js";const F="esri-field-column",E={headerRoot:`${F}__header-root`,headerRootEditable:`${F}__header-root--editable`,headerRootMenuEnabled:`${F}__header-root--menu-enabled`,headerContent:`${F}__header-content`,headerLabel:`${F}__header-label`,input:`${F}__cell-input`,inputContainer:`${F}__cell__input-container`,dateInputContainer:`${F}__cell__date-input-container`,dateInputWrapper:`${F}__cell__date-input-wrapper`,button:`${F}__button`},C=n("short-date-short-time"),I=n("short-date"),D={useGrouping:!0,maximumFractionDigits:20};let w=class extends y{constructor(t){super(t),this._fieldInput=null,this.cellValueFormatFunction=({rowData:t,value:e})=>{if(this.formatFunction){const{template:t,field:o}=this;return this.formatFunction({template:t,field:o,value:_.sanitize(e)})}if(null===e)return"&nbsp;";const{field:o}=this,i=t?.item?.feature,r=this._getDomainForFeature(i);if(r){const t=this._getComputedDomain(e,r);if("date"===o.type&&"range"===r.type)return this._formatDateValueForDisplay(o,t);if(m(o)&&"range"===r.type){const t=this.template?.format,o=t?s(t):D;return a(parseFloat(e),o)}return d.has(o.type)?"range"===r.type?_.sanitize(c(o,t)):_.sanitize(t):t}if("date"===o.type||d.has(o.type))return this._formatDateValueForDisplay(o,e);if(m(o)){const t=this.template?.format,o=t?s(t):D;return a(parseFloat(e),o)}return _.sanitize(e)},this.cellValueValidatorFunction=({oldValue:t,value:o})=>{const{_fieldInput:i,field:r}=this;return!(i&&!i.valid||this.required&&(null==o||""===o)||(m(r)&&h(r,o)?(e.getLogger(this).warn("value-exceeds-valid-range","Field value exceeds valid range. Attempted edit was rejected."),1):t===o))},this.editingEnabled=!1,this.expressionInfos=null,this.field=null,this.formatFunction=null,this.headerRenderFunction=t=>{const{root:e}=t,{editable:o,editingEnabled:i,headerMenuEnabled:r,sortable:n}=this;if(!e.childElementCount){e.classList.add(E.headerRoot);const t=document.createElement("div");t.classList.add(E.headerContent),e.appendChild(t);const o=document.createElement("div");if(o.classList.add(b.locked),t.appendChild(o),n&&this.sortElement)t.appendChild(this.sortElement);else{const e=document.createElement("span");e.classList.add(E.headerLabel),e.textContent=this.label,t.appendChild(e)}this.menu?.container&&t.appendChild(this.menu.container)}i&&!o?e.classList.add(E.headerRootEditable):e.classList.remove(E.headerRootEditable),r?e.classList.add(E.headerRootMenuEnabled):e.classList.remove(E.headerRootMenuEnabled)},this.inputRenderFunction=({root:t,column:o,rowData:i})=>{if(this.activeEditInfo?.updating||!this.editable)return;const r=this.getCellValue(o,i),{field:n}=this;if(m(n)&&h(n,r))return void e.getLogger(this).warn("value-exceeds-valid-range","Field value is beyond supported limit. Editing is disabled for this field value.");const s=this.createInputElement({root:t,column:o,rowData:i,value:r});if(this._set("activeEditInfo",{column:o,input:s,root:t,rowData:i,updating:!0,oldValue:r}),"date"===this.field.type)return void this._renderDateEditors(r,t,s);const a=this.createInputContainer();a.appendChild(s),this.removeCellContent(t),t.appendChild(a),s.focus(),s instanceof HTMLInputElement&&s.select()},this.layer=null,this.parseInputValueFunction=({input:t})=>{const e=this._fieldInput;if(!e)return null;const o=t.value,{dataType:i,required:r}=e;return r||""!==o?"number"===i||"date"===i?parseFloat(o):"text"===i?o.trim():o:null},this.sortable=!0,this.store=null,this.template=null,this.updateRowItemFunction=({rowData:t,column:e,value:o})=>{t&&e.path&&(t.item.feature.attributes[e.path]=o)},this.updateStoreItemFunction=async({rowData:t,column:e,value:o})=>{if(!t||!this.store||!e.path)return;const i=t.item.objectId,r=this.store.getObjectIdIndex(i)??t.index;await this.store.updateItem({index:r,name:e.path,value:o})}}get alias(){return this.field?.alias}get defaultValue(){return this.field?.defaultValue}get description(){return this.template?.description??this.field?.description??null}get editable(){const{editingEnabled:t,field:e,layer:o,template:i}=this;if(null==e||null==o)return!1;const r=p(o),n=f(o),s=n?.operations.supportsUpdate;return!(!(e.editable&&r&&s&&"oid"!==e.type)||d.has(e.type)||(t?!1===i?.editable:!i?.editable))}get header(){return this.template?.label||this.alias||this.path||null}get loadingMessage(){return this.messages?.loading||"..."}get maxLength(){const{field:t,template:e}=this,o=t?.length??-1,i=e?.input&&"maxLength"in e.input?e.input.maxLength:null;return null!=i&&!isNaN(i)&&i>=-1&&(-1===o||i<=o)?i:o}get minLength(){const{template:t,maxLength:e}=this,o=t?.input&&"minLength"in t.input?t.input.minLength:null;return e&&o<=e?o:null}get name(){return this.field?.name}get nullable(){return this.field?.nullable??!1}get path(){return this.field?.name}get required(){const{field:t,template:e}=this,o=t?.nullable,i=e?.required;return this.editable&&(!o||!0===i)}createInputElement({rowData:t,value:e}){const o=t?.item;if(!o?.feature)return null;this._fieldInput=this._setUpFieldInput(o.feature,e);const{field:i,maxLength:r,minLength:n,required:s}=this,{domain:a}=this._fieldInput;let l;"coded-value"===a?.type?(l=this._createSelectElement(e,a.codedValues.map((({code:t,name:e})=>({value:t,name:e}))),this._fieldInput),l.onchange=()=>{l.onblur=null,p()}):(l=document.createElement("input"),l.type=m(i)?"number":"text",r>-1&&(l.maxLength=r),n>0&&(l.minLength=n)),l.classList.add(E.input),l.value=e,l.required=s;let u=!1;l.onkeydown=t=>{u="Escape"===t.key},l.onblur=()=>{l.onblur=null,p()};const p=()=>{u?this.cancel():this.submit(),this._fieldInput=null};return l}createInputContainer(){const t=document.createElement("div");return t.classList.add(E.inputContainer),t}getCellValue({path:t},e){return t&&e?.item?.feature?.attributes?e.item.feature.attributes?.[t]:null}_formatDateValueForDisplay(t,e){const{timeZone:o,timeZoneName:i}=this;return null!=e?c(t,e,{...this._getDateFormatOptions(),timeZone:o??void 0,timeZoneName:i??void 0}):null}_renderDateEditors(t,e,i){const{messagesCommon:r,template:n,timeZone:s}=this,a=t?new Date(t):new Date(Date.now()),l=new v({dateInputEnabled:!0,timeZone:s,value:a}),u=new k({timeZone:s,value:a});i.value=a.getTime().toString();let p=!t;const m=()=>{p=!0;const t=this._getCombinedDateTime(l.value,u.value);i.value=t.getTime().toString()},d=()=>{p?this.submit():this.cancel()},c=()=>{i.value=null,this.submit()};o((()=>[l.value,u.value]),(()=>m()));const h=document.createElement("div"),j=document.createElement("div");l.container=h,u.container=j;const f=document.createElement("button");f.classList.add(E.button,b.save),f.onclick=()=>d(),f.title=r?.save;const g=document.createElement("button");g.classList.add(E.button,b.trash),g.onclick=()=>c(),g.title=r?.clear;const y=document.createElement("div");y.classList.add(E.dateInputWrapper),y.appendChild(h),(!n?.input||"includeTime"in n.input&&!1!==n.input.includeTime)&&y.appendChild(j);const _=document.createElement("div");_.classList.add(E.dateInputContainer),_.appendChild(y),_.appendChild(f),_.appendChild(g),l.when((()=>{const t=l._inputOrButtonNode;t&&(t.onblur=t=>{const e=t.relatedTarget;e&&e.className.includes("esri-date-picker")||l.close(!1)})})),this.removeCellContent(e),e.appendChild(_)}_createSelectElement(t,e,o){let i=!1;const r=e.map((e=>{e.value===t&&(i=!0);const o=document.createElement("option");return o.text=e.name,o.value=e.value,o}));if(null!=t&&""!==t&&!i){const e=document.createElement("option");e.text=t,e.value=t,r.unshift(e)}if(!o.required&&null==o.value){const t=document.createElement("option");t.value="",r.unshift(t)}const n=document.createElement("select");return r.forEach((t=>n.add(t))),n.value=t,n}_setUpFieldInput(t,e){const{field:o,layer:i}=this,r=new g({feature:t,initialFeature:t.clone(),field:o,layer:i});return r.set("value",e),r}_isDomainCompatible(t){const{field:e}=this;if(t&&"coded-value"===t.type){const o=typeof t.codedValues[0].code;if("string"===o&&j(e)||"number"===o&&m(e))return!0}return!(!t||"range"!==t.type||!m(e))}_getDomainForFeature(t){const{layer:e,name:o,template:i}=this;if(!e)return null;if("wfs"===e.type||"geojson"===e.type||"csv"===e.type)return null;if(i?.domain&&this._isDomainCompatible(i.domain))return i.domain;const{typeIdField:r}=e,n=r===o,s=this.field.domain;return n&&!s?new l({name:"__internal-type-based-coded-value-domain__",codedValues:e.types?.map((({id:t,name:e})=>new u({code:t,name:e})))}):r&&null!=o&&e.getFieldDomain(o,{feature:t})||s}_getComputedDomain(t,e){if(!e)return null;if("range"===e.type)return t;if("coded-value"===e.type){const o=e.codedValues.filter((e=>e.hasOwnProperty("code")&&e.code===t));return o&&o.length?o[0].name:t}return null}_getCombinedDateTime(t,e){return new Date(t.getFullYear(),t.getMonth(),t.getDate(),e.getHours(),e.getMinutes(),e.getSeconds())}_getDateFormatOptions(){const{template:t}=this,e=t?.format?.dateFormat;return e?n(e):t?.input&&"includeTime"in t.input&&!1===t.input.includeTime?I:C}};t([i({readOnly:!0})],w.prototype,"alias",null),t([i()],w.prototype,"cellValueFormatFunction",void 0),t([i()],w.prototype,"cellValueValidatorFunction",void 0),t([i({readOnly:!0})],w.prototype,"defaultValue",null),t([i({readOnly:!0})],w.prototype,"description",null),t([i({readOnly:!0})],w.prototype,"editable",null),t([i()],w.prototype,"editingEnabled",void 0),t([i()],w.prototype,"expressionInfos",void 0),t([i()],w.prototype,"field",void 0),t([i()],w.prototype,"formatFunction",void 0),t([i({readOnly:!0})],w.prototype,"header",null),t([i()],w.prototype,"headerRenderFunction",void 0),t([i()],w.prototype,"inputRenderFunction",void 0),t([i()],w.prototype,"layer",void 0),t([i({readOnly:!0})],w.prototype,"loadingMessage",null),t([i()],w.prototype,"maxLength",null),t([i()],w.prototype,"minLength",null),t([i({readOnly:!0})],w.prototype,"name",null),t([i({readOnly:!0})],w.prototype,"nullable",null),t([i()],w.prototype,"parseInputValueFunction",void 0),t([i({readOnly:!0})],w.prototype,"path",null),t([i({readOnly:!0})],w.prototype,"required",null),t([i()],w.prototype,"sortable",void 0),t([i()],w.prototype,"store",void 0),t([i()],w.prototype,"template",void 0),t([i()],w.prototype,"updateRowItemFunction",void 0),t([i()],w.prototype,"updateStoreItemFunction",void 0),w=t([r("esri.widgets.FeatureTable.FieldColumn")],w);const L=w;export{L as default};
