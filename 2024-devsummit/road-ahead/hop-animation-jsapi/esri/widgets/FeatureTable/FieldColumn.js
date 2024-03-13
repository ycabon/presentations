// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/Logger ../../core/reactiveUtils ../../core/accessorSupport/decorators/property ../../core/has ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass ../../intl/date ../../intl/number ../../layers/support/CodedValue ../../layers/support/CodedValueDomain ../../layers/support/editableLayers ../../layers/support/fieldUtils ../../layers/support/layerUtils ../FeatureForm/FieldInput ./Grid/EditorColumn ../support/DatePicker ../support/dateUtils ../support/legacyIcon ../support/TimePicker ../support/widgetUtils".split(" "),
function(k,C,F,l,h,T,G,y,u,H,I,J,n,K,L,M,N,t,z,O,v){const P=y.convertDateFormatToIntlOptions("short-date-short-time"),Q=y.convertDateFormatToIntlOptions("short-date"),D={useGrouping:!0,maximumFractionDigits:20};h=class extends M{constructor(b){super(b);this._fieldInput=null;this.cellValueFormatFunction=({rowData:a,value:c})=>{if(this.formatFunction){const {template:f,field:g}=this;return this.formatFunction({template:f,field:g,value:v.renderingSanitizer.sanitize(c)})}if(null===c)return"\x26nbsp;";
var {field:d}=this;if(a=this._getDomainForFeature(a?.item?.feature)){const f=this._getComputedDomain(c,a);return"date"===d.type&&"range"===a.type?this._formatDateValueForDisplay(d,f):n.isNumericField(d)&&"range"===a.type?(d=(d=this.template?.format)?u.convertNumberFormatToIntlOptions(d):D,u.formatNumber(parseFloat(c),d)):t.dateFieldsWithStringFieldValue.has(d.type)?"range"===a.type?v.renderingSanitizer.sanitize(t.getLabelForDateFieldValue(d,f)):v.renderingSanitizer.sanitize(f):f}return"date"===d.type||
t.dateFieldsWithStringFieldValue.has(d.type)?this._formatDateValueForDisplay(d,c):n.isNumericField(d)?(d=(d=this.template?.format)?u.convertNumberFormatToIntlOptions(d):D,u.formatNumber(parseFloat(c),d)):v.renderingSanitizer.sanitize(c)};this.cellValueValidatorFunction=({oldValue:a,value:c})=>{const {_fieldInput:d,field:f}=this;return d&&!d.valid||this.required&&(null==c||""===c)?!1:n.isNumericField(f)&&n.validateFieldValue(f,c)?(C.getLogger(this).warn("value-exceeds-valid-range","Field value exceeds valid range. Attempted edit was rejected."),
!1):a!==c};this.editingEnabled=!1;this.formatFunction=this.field=this.expressionInfos=null;this.headerRenderFunction=a=>{({root:a}=a);const {editable:c,editingEnabled:d,headerMenuEnabled:f,sortable:g}=this;if(!a.childElementCount){a.classList.add("esri-field-column__header-root");const m=document.createElement("div");m.classList.add("esri-field-column__header-content");a.appendChild(m);var e=document.createElement("div");e.classList.add(z.legacyIcon.locked);m.appendChild(e);g&&this.sortElement?m.appendChild(this.sortElement):
(e=document.createElement("span"),e.classList.add("esri-field-column__header-label"),e.textContent=this.label,m.appendChild(e));this.menu?.container&&m.appendChild(this.menu.container)}d&&!c?a.classList.add("esri-field-column__header-root--editable"):a.classList.remove("esri-field-column__header-root--editable");f?a.classList.add("esri-field-column__header-root--menu-enabled"):a.classList.remove("esri-field-column__header-root--menu-enabled")};this.inputRenderFunction=({root:a,column:c,rowData:d})=>
{if(!this.activeEditInfo?.updating&&this.editable){var f=this.getCellValue(c,d),{field:g}=this;n.isNumericField(g)&&n.validateFieldValue(g,f)?C.getLogger(this).warn("value-exceeds-valid-range","Field value is beyond supported limit. Editing is disabled for this field value."):(g=this.createInputElement({root:a,column:c,rowData:d,value:f}),this._set("activeEditInfo",{column:c,input:g,root:a,rowData:d,updating:!0,oldValue:f}),"date"===this.field.type?this._renderDateEditors(f,a,g):(c=this.createInputContainer(),
c.appendChild(g),this.removeCellContent(a),a.appendChild(c),g.focus(),g instanceof HTMLInputElement&&g.select()))}};this.layer=null;this.parseInputValueFunction=({input:a})=>{const c=this._fieldInput;if(!c)return null;a=a.value;const {dataType:d,required:f}=c;return f||""!==a?"number"===d||"date"===d?parseFloat(a):"text"===d?a.trim():a:null};this.sortable=!0;this.template=this.store=null;this.updateRowItemFunction=({rowData:a,column:c,value:d})=>{a&&c.path&&(a.item.feature.attributes[c.path]=d)};
this.updateStoreItemFunction=async({rowData:a,column:c,value:d})=>{a&&this.store&&c.path&&(a=this.store.getObjectIdIndex(a.item.objectId)??a.index,await this.store.updateItem({index:a,name:c.path,value:d}))}}get alias(){return this.field?.alias}get defaultValue(){return this.field?.defaultValue}get description(){return this.template?.description??this.field?.description??null}get editable(){const {editingEnabled:b,field:a,layer:c,template:d}=this;if(null==a||null==c)return!1;const f=J.isEditableLayer(c),
g=K.getEffectiveLayerCapabilities(c);return a.editable&&f&&g?.operations.supportsUpdate&&"oid"!==a.type&&!t.dateFieldsWithStringFieldValue.has(a.type)?b?!1!==d?.editable:!!d?.editable:!1}get header(){return this.template?.label||this.alias||this.path||null}get loadingMessage(){return this.messages?.loading||"..."}get maxLength(){const {field:b,template:a}=this,c=b?.length??-1,d=a?.input&&"maxLength"in a.input?a.input.maxLength:null;return null!=d&&!isNaN(d)&&-1<=d&&(-1===c||d<=c)?d:c}get minLength(){const {template:b,
maxLength:a}=this,c=b?.input&&"minLength"in b.input?b.input.minLength:null;return a&&c<=a?c:null}get name(){return this.field?.name}get nullable(){return this.field?.nullable??!1}get path(){return this.field?.name}get required(){const {field:b,template:a}=this;return this.editable&&(!b?.nullable||!0===a?.required)}createInputElement({rowData:b,value:a}){b=b?.item;if(!b?.feature)return null;this._fieldInput=this._setUpFieldInput(b.feature,a);const {field:c,maxLength:d,minLength:f,required:g}=this;
({domain:b}=this._fieldInput);let e;"coded-value"===b?.type?(e=this._createSelectElement(a,b.codedValues.map(({code:q,name:A})=>({value:q,name:A})),this._fieldInput),e.onchange=()=>{e.onblur=null;r()}):(e=document.createElement("input"),e.type=n.isNumericField(c)?"number":"text",-1<d&&(e.maxLength=d),0<f&&(e.minLength=f));e.classList.add("esri-field-column__cell-input");e.value=a;e.required=g;let m=!1;e.onkeydown=q=>{m="Escape"===q.key};e.onblur=()=>{e.onblur=null;r()};const r=()=>{m?this.cancel():
this.submit();this._fieldInput=null};return e}createInputContainer(){const b=document.createElement("div");b.classList.add("esri-field-column__cell__input-container");return b}getCellValue({path:b},a){return b&&a?.item?.feature?.attributes?a.item.feature.attributes?.[b]:null}_formatDateValueForDisplay(b,a){const {timeZone:c,timeZoneName:d}=this;return null!=a?t.getLabelForDateFieldValue(b,a,{...this._getDateFormatOptions(),timeZone:c??void 0,timeZoneName:d??void 0}):null}_renderDateEditors(b,a,c){const {messagesCommon:d,
template:f,timeZone:g}=this;var e=b?new Date(b):new Date(Date.now());const m=new N({dateInputEnabled:!0,timeZone:g,value:e}),r=new O({timeZone:g,value:e});c.value=e.getTime().toString();let q=!b;const A=()=>{q=!0;const w=this._getCombinedDateTime(m.value,r.value);c.value=w.getTime().toString()},R=()=>{q?this.submit():this.cancel()},S=()=>{c.value=null;this.submit()};F.watch(()=>[m.value,r.value],()=>A());var p=document.createElement("div");const E=document.createElement("div");m.container=p;r.container=
E;b=document.createElement("button");b.classList.add("esri-field-column__button",z.legacyIcon.save);b.onclick=()=>R();b.title=d?.save;e=document.createElement("button");e.classList.add("esri-field-column__button",z.legacyIcon.trash);e.onclick=()=>S();e.title=d?.clear;const x=document.createElement("div");x.classList.add("esri-field-column__cell__date-input-wrapper");x.appendChild(p);(!f?.input||"includeTime"in f.input&&!1!==f.input.includeTime)&&x.appendChild(E);p=document.createElement("div");p.classList.add("esri-field-column__cell__date-input-container");
p.appendChild(x);p.appendChild(b);p.appendChild(e);m.when(()=>{const w=m._inputOrButtonNode;w&&(w.onblur=B=>{(B=B.relatedTarget)&&B.className.includes("esri-date-picker")||m.close(!1)})});this.removeCellContent(a);a.appendChild(p)}_createSelectElement(b,a,c){let d=!1;a=a.map(g=>{g.value===b&&(d=!0);const e=document.createElement("option");e.text=g.name;e.value=g.value;return e});if(null!=b&&""!==b&&!d){const g=document.createElement("option");g.text=b;g.value=b;a.unshift(g)}c.required||null!=c.value||
(c=document.createElement("option"),c.value="",a.unshift(c));const f=document.createElement("select");a.forEach(g=>f.add(g));f.value=b;return f}_setUpFieldInput(b,a){const {field:c,layer:d}=this;b=new L({feature:b,initialFeature:b.clone(),field:c,layer:d});b.set("value",a);return b}_isDomainCompatible(b){const {field:a}=this;if(b&&"coded-value"===b.type){const c=typeof b.codedValues[0].code;if("string"===c&&n.isStringField(a)||"number"===c&&n.isNumericField(a))return!0}return b&&"range"===b.type&&
n.isNumericField(a)?!0:!1}_getDomainForFeature(b){const {layer:a,name:c,template:d}=this;if(!a||"wfs"===a.type||"geojson"===a.type||"csv"===a.type)return null;if(d?.domain&&this._isDomainCompatible(d.domain))return d.domain;const {typeIdField:f}=a,g=this.field.domain;return f!==c||g?f&&null!=c&&a.getFieldDomain(c,{feature:b})||g:new I({name:"__internal-type-based-coded-value-domain__",codedValues:a.types?.map(({id:e,name:m})=>new H.CodedValue({code:e,name:m}))})}_getComputedDomain(b,a){return a?"range"===
a.type?b:"coded-value"===a.type?(a=a.codedValues.filter(c=>c.hasOwnProperty("code")&&c.code===b))&&a.length?a[0].name:b:null:null}_getCombinedDateTime(b,a){return new Date(b.getFullYear(),b.getMonth(),b.getDate(),a.getHours(),a.getMinutes(),a.getSeconds())}_getDateFormatOptions(){const {template:b}=this,a=b?.format?.dateFormat;return a?y.convertDateFormatToIntlOptions(a):b?.input&&"includeTime"in b.input&&!1===b.input.includeTime?Q:P}};k.__decorate([l.property({readOnly:!0})],h.prototype,"alias",
null);k.__decorate([l.property()],h.prototype,"cellValueFormatFunction",void 0);k.__decorate([l.property()],h.prototype,"cellValueValidatorFunction",void 0);k.__decorate([l.property({readOnly:!0})],h.prototype,"defaultValue",null);k.__decorate([l.property({readOnly:!0})],h.prototype,"description",null);k.__decorate([l.property({readOnly:!0})],h.prototype,"editable",null);k.__decorate([l.property()],h.prototype,"editingEnabled",void 0);k.__decorate([l.property()],h.prototype,"expressionInfos",void 0);
k.__decorate([l.property()],h.prototype,"field",void 0);k.__decorate([l.property()],h.prototype,"formatFunction",void 0);k.__decorate([l.property({readOnly:!0})],h.prototype,"header",null);k.__decorate([l.property()],h.prototype,"headerRenderFunction",void 0);k.__decorate([l.property()],h.prototype,"inputRenderFunction",void 0);k.__decorate([l.property()],h.prototype,"layer",void 0);k.__decorate([l.property({readOnly:!0})],h.prototype,"loadingMessage",null);k.__decorate([l.property()],h.prototype,
"maxLength",null);k.__decorate([l.property()],h.prototype,"minLength",null);k.__decorate([l.property({readOnly:!0})],h.prototype,"name",null);k.__decorate([l.property({readOnly:!0})],h.prototype,"nullable",null);k.__decorate([l.property()],h.prototype,"parseInputValueFunction",void 0);k.__decorate([l.property({readOnly:!0})],h.prototype,"path",null);k.__decorate([l.property({readOnly:!0})],h.prototype,"required",null);k.__decorate([l.property()],h.prototype,"sortable",void 0);k.__decorate([l.property()],
h.prototype,"store",void 0);k.__decorate([l.property()],h.prototype,"template",void 0);k.__decorate([l.property()],h.prototype,"updateRowItemFunction",void 0);k.__decorate([l.property()],h.prototype,"updateStoreItemFunction",void 0);return h=k.__decorate([G.subclass("esri.widgets.FeatureTable.FieldColumn")],h)});