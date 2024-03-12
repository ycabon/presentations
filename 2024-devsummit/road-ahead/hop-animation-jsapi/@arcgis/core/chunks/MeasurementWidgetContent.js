/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import{property as t}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"./Logger.js";import{subclass as s}from"../core/accessorSupport/decorators/subclass.js";import r,{l as n}from"../widgets/Widget.js";import{U as i}from"./UnitSelect.js";import"./widgetUtils.js";import{t as o}from"./jsxFactory.js";const a="esri-measurement-widget-content",m={base:a,actions:`${a}__actions`,error:`${a}__error`,hint:`${a}__hint`,hintText:`${a}__hint-text`,panelError:`${a}__panel--error`,settings:`${a}__settings`,measurement:`${a}__measurement`,measurementItem:`${a}__measurement-item`,measurementItemDisabled:`${a}__measurement-item--disabled`,measurementItemTitle:`${a}__measurement-item__title`,measurementItemValue:`${a}__measurement-item__value`};let u=class extends r{constructor(e,t){super(e,t)}loadDependencies(){return n({button:()=>import("./calcite-button.js")})}render(){return o("div",{class:m.base},this._renderContent())}_renderContent(){const{supported:e,active:t,state:s}=this;switch(s){case"disabled":case"ready":return e?t?this._renderHint():this._renderActions():this._renderUnsupportedMessage();case"measuring":case"measured":return[this._renderSettings(),this._renderMeasurement(),this._renderActions()]}}_renderUnsupportedMessage(){return o("section",{class:m.error,key:"unsupported"},o("p",null,this.messages.unsupported))}_renderHint(){const{messages:e}=this;return o("section",{class:m.hint,key:"hint"},o("p",{class:m.hintText},e.hint))}_renderSettings(){return o("div",{class:m.settings,key:"settings"},o(i,{options:this.unitOptions,selectLabel:this.messages.unit,value:this.unit,onChange:this.onUnitChange}))}_renderMeasurement(){return o("section",{class:m.measurement,key:"measurement"},this.measurementItems.map((e=>this._renderMeasurementItem(e))))}_renderMeasurementItem({key:e,title:t,value:s}){return o("div",{class:this.classes(m.measurementItem,null==s&&m.measurementItemDisabled),key:e},o("span",{class:m.measurementItemTitle},t),o("span",{"aria-live":"polite",class:m.measurementItemValue},s??this.messages.notApplicable))}_renderActions(){const{messages:e}=this;return o("div",{class:m.actions},o("calcite-button",{class:this.newMeasurementButtonClass,disabled:"disabled"===this.state,onclick:this.onNewMeasurementClick},e.newMeasurement))}};e([t()],u.prototype,"active",void 0),e([t()],u.prototype,"measurementItems",void 0),e([t()],u.prototype,"messages",void 0),e([t()],u.prototype,"newMeasurementButtonClass",void 0),e([t()],u.prototype,"onNewMeasurementClick",void 0),e([t()],u.prototype,"onUnitChange",void 0),e([t()],u.prototype,"state",void 0),e([t()],u.prototype,"supported",void 0),e([t()],u.prototype,"unit",void 0),e([t()],u.prototype,"unitOptions",void 0),u=e([s("esri.widgets.support.MeasurementWidgetContent")],u);export{u as M};
