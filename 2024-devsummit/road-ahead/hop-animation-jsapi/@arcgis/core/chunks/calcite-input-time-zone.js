/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{p as e,H as t,c as o,h as s,a as i}from"../widgets/Widget.js";import{c as a,d as n}from"./label2.js";import{u as r,I as m}from"./interactive.js";import{c,d as l,b as p}from"./locale2.js";import{u as d,c as h,d as u,s as f}from"./t9n.js";import{c as b,s as g,a as j}from"./loadable.js";import{c as v,d as T,a as C,H as I}from"./form.js";import{d as Z}from"./chip.js";import{d as x}from"./combobox.js";import{d as y}from"./combobox-item.js";import{d as D}from"./icon.js";import{d as E}from"./input-message.js";import"./tslib.es6.js";import"../intl.js";import"./date.js";import"./jsonMap.js";import"../config.js";import"../core/lang.js";import"./locale.js";import"./handleUtils.js";import"./timeZoneUtils.js";import"./datetime.js";import"./Logger.js";import"./messages.js";import"../core/Error.js";import"../core/promiseUtils.js";import"./maybe.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../core/Handles.js";import"../core/accessorSupport/decorators/subclass.js";import"./metadata.js";import"./utils.js";import"./tracking.js";import"./ensureType.js";import"../core/accessorSupport/decorators/property.js";import"./ObservableBase.js";import"../core/scheduling.js";import"./assets.js";import"./domUtils.js";import"../core/Evented.js";import"../core/Promise.js";import"../core/reactiveUtils.js";import"./asyncUtils.js";import"../core/Collection.js";import"./shared.js";import"./SimpleObservable.js";import"./uuid.js";import"../core/accessorSupport/decorators/cast.js";import"./projector.js";import"./widgetUtils.js";import"./jsxWidgetSupport.js";import"./legacyIcon.js";import"./dom.js";import"./guid.js";import"./component.js";import"./key.js";import"./observers.js";import"./conditionalSlot.js";import"./filter.js";import"./debounce.js";import"./floating-ui.js";import"./openCloseComponent.js";import"./utils24.js";import"./Validation.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.3.0
 */const O=["CET","CST6CDT","EET","EST","EST5EDT","Factory","HST","MET","MST","MST7MDT","PST8PDT","UTC","WET"];function S(e){return e.replace(":15",".25").replace(":30",".5").replace(":45",".75").replace("−","-")}let w;function P(e){return e.replace(/_/g," ")}function L(e,t,o=Date.now()){return p(t,{timeZone:e,timeZoneName:"shortOffset"}).formatToParts(o).find((({type:e})=>"timeZoneName"===e)).value}const k=e(class extends t{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteInputTimeZoneBeforeClose=o(this,"calciteInputTimeZoneBeforeClose",6),this.calciteInputTimeZoneBeforeOpen=o(this,"calciteInputTimeZoneBeforeOpen",6),this.calciteInputTimeZoneChange=o(this,"calciteInputTimeZoneChange",6),this.calciteInputTimeZoneClose=o(this,"calciteInputTimeZoneClose",6),this.calciteInputTimeZoneOpen=o(this,"calciteInputTimeZoneOpen",6),this.setComboboxRef=e=>{this.comboboxEl=e},this.onComboboxBeforeClose=e=>{e.stopPropagation(),this.calciteInputTimeZoneBeforeClose.emit()},this.onComboboxBeforeOpen=e=>{e.stopPropagation(),this.calciteInputTimeZoneBeforeOpen.emit()},this.onComboboxChange=e=>{e.stopPropagation();const t=e.target,o=this.findTimeZoneItem(t.selectedItems[0].getAttribute("data-value")),s=`${o.value}`;this.value!==s&&(this.value=s,this.selectedTimeZoneItem=o,this.calciteInputTimeZoneChange.emit())},this.onComboboxClose=e=>{e.stopPropagation(),this.open=!1,this.calciteInputTimeZoneClose.emit()},this.onComboboxOpen=e=>{this.open=!0,e.stopPropagation(),this.calciteInputTimeZoneOpen.emit()},this.disabled=!1,this.form=void 0,this.maxItems=0,this.messages=void 0,this.messageOverrides=void 0,this.mode="offset",this.validationMessage=void 0,this.validationIcon=void 0,this.name=void 0,this.open=!1,this.overlayPositioning="absolute",this.referenceDate=void 0,this.required=!1,this.scale="m",this.status="idle",this.value=void 0,this.defaultMessages=void 0,this.effectiveLocale=""}onMessagesChange(){}handleTimeZoneItemPropsChange(){this.updateTimeZoneItemsAndSelection()}handleValueChange(e,t){const o=this.findTimeZoneItem(e);o?this.selectedTimeZoneItem=o:this.value=t}async setFocus(){await b(this),await this.comboboxEl.setFocus()}effectiveLocaleWatcher(){d(this,this.effectiveLocale)}onLabelClick(){this.setFocus()}findTimeZoneItem(e){const t=e;return this.timeZoneItems.find((({value:e})=>e==t))}async updateTimeZoneItemsAndSelection(){this.timeZoneItems=await this.createTimeZoneItems();const e="offset"===this.mode?-1*(new Date).getTimezoneOffset():(new Intl.DateTimeFormat).resolvedOptions().timeZone,t=this.value??e;this.selectedTimeZoneItem=this.findTimeZoneItem(t),this.selectedTimeZoneItem||(this.selectedTimeZoneItem=this.findTimeZoneItem(e))}async createTimeZoneItems(){return this.effectiveLocale&&this.messages?async function(e,t,o,s){const i=s.getTime(),a=Intl.supportedValuesOf("timeZone");return"offset"===o?(w||(w=Promise.all([import("./index3.js"),import("./index4.js")])),w.then((async([{groupTimeZones:o},{DateEngine:s}])=>{const a=await o({dateEngine:new s,groupDateRange:1,startDate:new Date(i).toISOString()}),n=new Intl.ListFormat(e,{style:"long",type:"conjunction"});return a.forEach((e=>{const t=[];let o=0;e.tzs.forEach(((e,s)=>{O.includes(e)&&o++,t[s]=o})),e.tzs=e.tzs.filter((e=>!O.includes(e))),e.labelTzIndices=e.labelTzIndices.map((e=>e-t[e])).filter((t=>t>=0&&t<e.tzs.length))})),a.map((({labelTzIndices:o,tzs:s})=>{const a=s[0],r=S(L(a,e,i)),m=function(e,t){const o=L(e,"en-US",t).replace("GMT","");return""===o?0:60*Number(S(o))}(a,i),c=o.map((e=>{const o=s[e];return t[o]||o.split("/").pop()})),l=function(e,t,o){return e.timeZoneLabel.replace("{offset}",t).replace("{cities}",o)}(t,r,n.format(c));return{label:l,value:m,filterValue:s.map((e=>P(e)))}})).filter((e=>!!e)).sort(((e,t)=>e.value-t.value))}))):a.map((e=>({label:P(e),value:e,filterValue:e}))).filter((e=>!!e)).sort()}(this.effectiveLocale,this.messages,this.mode,this.referenceDate instanceof Date?this.referenceDate:new Date(this.referenceDate??Date.now())):[]}connectedCallback(){v(this),a(this),c(this),h(this)}disconnectedCallback(){T(this),n(this),l(this),u(this)}async componentWillLoad(){g(this),await f(this),await this.updateTimeZoneItemsAndSelection();const e=`${this.selectedTimeZoneItem.value}`;C(this,e),this.value=e}componentDidLoad(){j(this)}componentDidRender(){r(this)}render(){return s(i,null,s(m,{disabled:this.disabled},s("calcite-combobox",{clearDisabled:!0,disabled:this.disabled,label:this.messages.chooseTimeZone,lang:this.effectiveLocale,maxItems:this.maxItems,onCalciteComboboxBeforeClose:this.onComboboxBeforeClose,onCalciteComboboxBeforeOpen:this.onComboboxBeforeOpen,onCalciteComboboxChange:this.onComboboxChange,onCalciteComboboxClose:this.onComboboxClose,onCalciteComboboxOpen:this.onComboboxOpen,open:this.open,overlayPositioning:this.overlayPositioning,scale:this.scale,selectionMode:"single-persist",status:this.status,"validation-icon":this.validationIcon,"validation-message":this.validationMessage,ref:this.setComboboxRef},this.timeZoneItems.map((e=>{const t=this.selectedTimeZoneItem===e,{label:o,value:i}=e;return s("calcite-combobox-item",{"data-value":i,key:o,selected:t,textLabel:o,value:`${e.filterValue}`})}))),s(I,{component:this})))}static get delegatesFocus(){return!0}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messageOverrides:["onMessagesChange"],messages:["handleTimeZoneItemPropsChange"],mode:["handleTimeZoneItemPropsChange"],referenceDate:["handleTimeZoneItemPropsChange"],value:["handleValueChange"],effectiveLocale:["effectiveLocaleWatcher"]}}static get style(){return":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block}:host([hidden]){display:none}[hidden]{display:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}"}},[17,"calcite-input-time-zone",{disabled:[516],form:[513],maxItems:[514,"max-items"],messages:[1040],messageOverrides:[1040],mode:[513],validationMessage:[1,"validation-message"],validationIcon:[520,"validation-icon"],name:[513],open:[1540],overlayPositioning:[513,"overlay-positioning"],referenceDate:[1,"reference-date"],required:[516],scale:[513],status:[513],value:[1025],defaultMessages:[32],effectiveLocale:[32],setFocus:[64]},void 0,{messageOverrides:["onMessagesChange"],messages:["handleTimeZoneItemPropsChange"],mode:["handleTimeZoneItemPropsChange"],referenceDate:["handleTimeZoneItemPropsChange"],value:["handleValueChange"],effectiveLocale:["effectiveLocaleWatcher"]}]);function M(){"undefined"!=typeof customElements&&["calcite-input-time-zone","calcite-chip","calcite-combobox","calcite-combobox-item","calcite-icon","calcite-input-message"].forEach((e=>{switch(e){case"calcite-input-time-zone":customElements.get(e)||customElements.define(e,k);break;case"calcite-chip":customElements.get(e)||Z();break;case"calcite-combobox":customElements.get(e)||x();break;case"calcite-combobox-item":customElements.get(e)||y();break;case"calcite-icon":customElements.get(e)||D();break;case"calcite-input-message":customElements.get(e)||E()}}))}M();const z=k,B=M;export{z as CalciteInputTimeZone,B as defineCustomElement};