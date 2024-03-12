// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/Error ../../core/reactiveUtils ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass ../../layers/support/CodedValue ../../layers/support/CodedValueDomain ../../layers/support/Domain ../../layers/support/InheritedDomain ../../layers/support/RangeDomain ../../layers/support/domainUtils ../../layers/support/fieldUtils ../../smartMapping/support/utils ../Feature/support/featureUtils ./EditableInput ./featureFormUtils ../support/dataUtils ../support/dateUtils".split(" "),
function(f,C,y,g,e,H,I,D,z,A,J,K,L,u,p,B,E,F,t,v,w){var r;(function(a){a.Text="text";a.Number="number";a.Date="date";a.Unsupported="unsupported"})(r||={});e=class extends F{constructor(a){super(a);this.error=this._storedValue=null;this.preservesValueWhenHidden=!0;this.requiredExpressionExecutor=this.group=this.field=null;this.type="field";this._fieldInputWasVisibleDuringLifetime=!1;this.valueExpressionExecutor=null}initialize(){this.addHandles(y.watch(()=>this.feature,()=>this._fieldInputWasVisibleDuringLifetime=
!1,y.sync))}get _dateFormRange(){const {element:a,field:b}=this;if("date"!==this.dataType)return{};const d=a?.domain?u.getDomainRange(b,a.domain):null;if(!a?.input)return d??{};var c=a.input,{type:h}=c;let l={};if("date-picker"===h||"time-picker"===h||"datetimeoffset-picker"===h)l=u.dateTimeFieldValuesToNumericRange(b,c.max,c.min);if("datetime-picker"===h){const {max:k,min:q}=c;l={max:null!=k&&k&&!Number.isNaN(k.valueOf())?k.getTime():null,min:null!=q&&q&&!Number.isNaN(q.valueOf())?q.getTime():null}}const {max:n,
min:m}=l;if(d){const {max:k,min:q}=d;c=v.isNumber(k)&&(null==n||null!=n&&k<n);h=v.isNumber(q)&&(null==m||null!=m&&q>m);return{max:c?k:n??null,min:h?q:m??null,rawMax:c?d.rawMax:l?.rawMax??null,rawMin:h?d.rawMin:l?.rawMin??null}}return{min:m,max:n,rawMax:l?.rawMax??null,rawMin:l?.rawMin??null}}get _dateRange(){const {_dateFormRange:a,field:b}=this;if("date"!==this.dataType)return{};var d=u.getDomainRange(b);if(!d)return a;const {max:c,min:h,rawMax:l,rawMin:n}=a;if("date"===b.type){const {max:m,min:k}=
d;return{max:v.isNumber(c)&&(null===m||null!=m&&c<m)?c:m??null,min:v.isNumber(h)&&(null===k||null!=k&&h>k)?h:k??null}}if("date-only"===b.type||"time-only"===b.type||"timestamp-offset"===b.type){const {max:m,min:k,rawMax:q,rawMin:x}=d;d=v.isNumber(c)&&l&&(null==m||c<m);const G=v.isNumber(h)&&n&&(null==k||h>k);return{max:d?c:m,min:G?h:k,rawMax:d?l:q,rawMin:d?n:x}}return{max:null,min:null}}get _configAllowsEdits(){const {element:a,layer:b,name:d}=this;return null!=a?a.editableExpression?!!this.evaluatedEditableExpression:
!1!==a.editable:b?.userHasUpdateItemPrivileges?!0:(b&&"popupTemplate"in b?b?.popupTemplate?.fieldInfos?.find(({fieldName:c})=>c===d):null)?.isEditable??!0}get _layerAndFieldAllowEdits(){return this.layerAllowsEdits&&this.field?.editable}get _isVisibleByDefault(){const {field:a,layer:b}=this;return!!a?.visible&&p.isFieldVisibleByDefault(a,b)}get _isEditTrackingField(){return p.getLowerCaseEditTrackingFields(this.layer).includes(this.name?.toLowerCase())}get _shouldUseValueExpression(){return this._layerAndFieldAllowEdits&&
!this._configAllowsEdits&&null!=this.valueExpressionExecutor}get _isSubtypeField(){const {layer:a}=this;if(a&&"subtypeField"in a){const {subtypeField:b,fieldsIndex:d}=a;return(d.get(b)?.name??b)===this.name}return!1}get test(){return{_isSubtypeField:this._isSubtypeField}}get dataType(){const {field:a}=this;return p.isNumericField(a)?r.Number:p.isStringField(a)?r.Text:B.isAnyDateField(a)||p.isTimeOnlyField(a)?r.Date:r.Unsupported}get dateDataType(){if(this.dataType===r.Date)return"date"!==this.field.type?
"string":"number"}get description(){const {element:a,feature:b,layer:d,timeZone:c}=this,h=a?.description;return null!=d&&null!=h?t.parseFormTemplateString({label:h,attributes:b.attributes,fieldsIndex:d.fieldsIndex,timeZone:c}):h}get domain(){var {layer:a}=this;const {typeFieldName:b,types:d}=t.getNormalizedFeatureTypeInfo(a);if(this._isSubtypeField&&"subtypes"in a&&a.subtypes)return new A({name:"__internal-type-based-coded-value-domain__",codedValues:a.subtypes.map(({code:h,name:l})=>new z.CodedValue({code:h,
name:l}))});if(b===this.name&&null==this.field.domain)return new A({name:"__internal-type-based-coded-value-domain__",codedValues:d.map(({code:h,name:l})=>new z.CodedValue({code:h,name:l}))});var {feature:c}=this;a=a?.getFieldDomain(this.name,{feature:c});c=this.element?.domain;return null!=c&&this._isDomainCompatible(c)?c:a}get editable(){return this._layerAndFieldAllowEdits?this.evaluatedEditableExpression??this._configAllowsEdits:!1}get evaluatedRequiredExpression(){const {requiredExpressionExecutor:a}=
this;return null!=a?!!a.lastEvaluatedValue:null}get evaluatedValueExpression(){const {valueExpressionExecutor:a}=this;return null!=a?a.lastEvaluatedValue:null}get hint(){return this.element?.hint}get includeDate(){return!(this.dataType!==r.Date||"time-only"===this.field.type)}get includeTime(){const {element:a,field:b}=this;if(this.dataType!==r.Date)return!1;if("time-only"===b.type)return!0;if("date-only"===b.type)return!1;const d="datetime-picker"===a?.input?.type?a.input.includeTime:void 0;return void 0===
d||d}get includeTimeOffset(){if("timestamp-offset"!==this.field.type)return!1;const a=this.element?.input;return a?"datetimeoffset-picker"===a.type&&a.includeTimeOffset:!0}set initialFeature(a){this._set("initialFeature",a);this.notifyChange("valid")}get inputType(){return this.element?.input?.type}get hasInvalidSwitchValue(){var {element:a}=this;a=t.isFieldElementWithInputType(a,"switch")?a.input:null;return!a||t.valueIsInvalidSwitchValue(this.value,a)}get isRelationshipKeyField(){const {field:a,
layer:b}=this;return E.isRelatableFeatureSupportedLayer(b)&&!!b.relationships?.some(d=>d.keyField===a.name)}get label(){const {element:a,feature:b,field:d,layer:c,timeZone:h}=this;return null!=c&&null!=a?.label?t.parseFormTemplateString({label:a.label,attributes:b.attributes,fieldsIndex:c.fieldsIndex,timeZone:h}):a?.label||d.alias||d.name}get maxLength(){if(this.dataType===r.Date)return-1;const {field:a,element:b}=this,d=a?.length??-1,c=t.isFieldElementWithTextInput(b)?b.input.maxLength:NaN;return null!=
c&&!isNaN(c)&&-1<=c&&(-1===d||c<=d)?c:d}get minLength(){if(this.dataType===r.Date)return-1;const {field:a,element:b}=this,d=a?.length??-1,c=t.isFieldElementWithTextInput(b)?b.input.minLength:NaN;return null!=c&&!isNaN(c)&&-1<=c&&(-1===d||c<=d)?c:-1}get name(){return this.field?.name}get range(){const {domain:a,element:b,field:d}=this;if("date"===this.dataType)return this._dateRange;var c=u.getDomainRange(d,a)||p.getFieldRange(d,a);const h=c?.max===Number.MAX_VALUE?null:c?.max??null;c=c?.min===-Number.MAX_VALUE?
null:c?.min??null;if(!b?.domain||"range"!==b.domain.type)return{max:h,min:c};const {max:l,min:n}=u.getDomainRange(d)||{};return{max:null!=l&&(null===h||null!=h&&l<h)?l:h,min:null!=n&&(null===c||null!=c&&n>c)?n:c}}get required(){const {editable:a,evaluatedRequiredExpression:b,field:d,visible:c,_isSubtypeField:h}=this;return a?!1===d?.nullable||h?!0:c&&null!=b?b:!1:!1}set required(a){this._overrideIfSome("required",a)}get showNoValueOptionEnabled(){const {element:a}=this;return this.required?!1:t.isFieldElementWithShowNoValueOptionInput(a)?
a.input.showNoValueOption:!0}get showNoValueLabel(){const {element:a}=this;return t.isFieldElementWithShowNoValueOptionInput(a)?a.input.noValueOptionLabel:null}get submittable(){const {field:a,required:b,valid:d,value:c}=this;return b&&null==c?!1:d?!0:this.initialFeature.getAttribute(a.name)===c}get timeResolution(){const a=this.element?.input;if(a&&("datetimeoffset-picker"===a.type||"time-picker"===a.type))return a.timeResolution??"minutes"}get timeStep(){return null!=this.timeResolution?w.timeResolutionToStepMap.get(this.timeResolution):
void 0}get updating(){const {editableExpressionExecutor:a,valueExpressionExecutor:b,visibilityExpressionExecutor:d,preservesValueWhenHidden:c}=this;return null!=b&&b.updating||null!=a&&a.updating||!1===c&&null!=d&&d.updating}get valid(){const a=this.editable?this._validate():null;this._set("error",a);return null===a}get value(){this._fieldInputWasVisibleDuringLifetime=this._fieldInputWasVisibleDuringLifetime||this.visible&&!1!==this.group?.visible;if(!1===this.preservesValueWhenHidden&&this._fieldInputWasVisibleDuringLifetime&&
(!1===this.visibilityExpressionExecutor?.lastEvaluatedValue||!1===this.group?.visibilityExpressionExecutor?.lastEvaluatedValue))return null!==this._storedValue&&this.set("_storedValue",null),null;if(this._shouldUseValueExpression){const a=this.evaluatedValueExpression;return this.dataType===r.Date?this._arcadeOutputToDateFieldValue(a):null!=a&&"object"===typeof a?a.toString():a}return this._storedValue}set value(a){this.notifyChange("evaluatedVisibilityExpression");this.set("_storedValue",a)}get visible(){return this._isEditTrackingField?
!1:null!=this.evaluatedVisibilityExpression?this.evaluatedVisibilityExpression:null!=this.element?!0:this._isVisibleByDefault}_arcadeOutputToDateFieldValue(a){const b=this.field.type;try{if("object"===typeof a){if(null!==a){if(w.isArcadeDate(a))return w.arcadeDateToFieldValue(a,b);if("getTime"in a&&"function"===typeof a.getTime&&"date"===b)return parseInt(a.getTime(),10);if("date-only"===b||"time-only"===b||"timestamp-offset"===b)return a.toString()}}else{if("string"===typeof a)return"date"===b?parseInt(a,
10):a;if("number"===typeof a&&"date"===b)return a}throw new C("feature-form:invalid-date-value");}catch{return"date"===b?NaN:""}}_isDomainCompatible(a){const {field:b}=this;if("coded-value"===a?.type){const d=typeof a.codedValues[0].code;if("string"===d&&p.isStringField(b)||"number"===d&&p.isNumericField(b))return!0}return"range"===a?.type&&p.isNumericField(b)||B.isAnyDateField(b)||p.isTimeOnlyField(b)?!0:!1}_validate(){const {dataType:a,domain:b,field:d,initialFeature:c,minLength:h,range:l,required:n,
valid:m,value:k}=this,q=n&&null==k,x=void 0!==m;return!q&&c.getAttribute(d.name)===k&&x?null:q?p.TypeValidationError.INVALID_TYPE:"text"===a&&-1<h&&"string"===typeof k&&k.length<h?t.LengthValidationError.TOO_SHORT:"date"!==a||null==k||w.dateTimeIsInRange({type:d.type,range:l,value:k})?b?null!==k||n?u.validateDomainValue(d,k):null:p.validateFieldValue(d,k):p.NumericRangeValidationError.OUT_OF_RANGE}};f.__decorate([g.property()],e.prototype,"_dateFormRange",null);f.__decorate([g.property()],e.prototype,
"_dateRange",null);f.__decorate([g.property()],e.prototype,"_storedValue",void 0);f.__decorate([g.property()],e.prototype,"_configAllowsEdits",null);f.__decorate([g.property()],e.prototype,"_layerAndFieldAllowEdits",null);f.__decorate([g.property()],e.prototype,"_isVisibleByDefault",null);f.__decorate([g.property()],e.prototype,"_isEditTrackingField",null);f.__decorate([g.property()],e.prototype,"_shouldUseValueExpression",null);f.__decorate([g.property()],e.prototype,"_isSubtypeField",null);f.__decorate([g.property()],
e.prototype,"dataType",null);f.__decorate([g.property()],e.prototype,"dateDataType",null);f.__decorate([g.property()],e.prototype,"description",null);f.__decorate([g.property()],e.prototype,"domain",null);f.__decorate([g.property()],e.prototype,"editable",null);f.__decorate([g.property({readOnly:!0})],e.prototype,"error",void 0);f.__decorate([g.property({constructOnly:!0})],e.prototype,"preservesValueWhenHidden",void 0);f.__decorate([g.property()],e.prototype,"evaluatedRequiredExpression",null);f.__decorate([g.property()],
e.prototype,"evaluatedValueExpression",null);f.__decorate([g.property()],e.prototype,"field",void 0);f.__decorate([g.property()],e.prototype,"group",void 0);f.__decorate([g.property({readOnly:!0})],e.prototype,"hint",null);f.__decorate([g.property()],e.prototype,"includeDate",null);f.__decorate([g.property()],e.prototype,"includeTime",null);f.__decorate([g.property()],e.prototype,"includeTimeOffset",null);f.__decorate([g.property()],e.prototype,"initialFeature",null);f.__decorate([g.property({readOnly:!0})],
e.prototype,"inputType",null);f.__decorate([g.property()],e.prototype,"hasInvalidSwitchValue",null);f.__decorate([g.property()],e.prototype,"isRelationshipKeyField",null);f.__decorate([g.property()],e.prototype,"label",null);f.__decorate([g.property()],e.prototype,"maxLength",null);f.__decorate([g.property()],e.prototype,"minLength",null);f.__decorate([g.property({readOnly:!0})],e.prototype,"name",null);f.__decorate([g.property()],e.prototype,"range",null);f.__decorate([g.property()],e.prototype,
"required",null);f.__decorate([g.property()],e.prototype,"requiredExpressionExecutor",void 0);f.__decorate([g.property()],e.prototype,"showNoValueOptionEnabled",null);f.__decorate([g.property()],e.prototype,"submittable",null);f.__decorate([g.property()],e.prototype,"timeResolution",null);f.__decorate([g.property()],e.prototype,"timeStep",null);f.__decorate([g.property({readOnly:!0})],e.prototype,"type",void 0);f.__decorate([g.property()],e.prototype,"updating",null);f.__decorate([g.property()],e.prototype,
"valid",null);f.__decorate([g.property({value:null})],e.prototype,"value",null);f.__decorate([g.property()],e.prototype,"valueExpressionExecutor",void 0);f.__decorate([g.property()],e.prototype,"visible",null);return e=f.__decorate([D.subclass("esri.widgets.FeatureForm.FieldInput")],e)});