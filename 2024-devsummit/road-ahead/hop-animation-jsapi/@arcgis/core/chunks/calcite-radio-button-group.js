/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{p as t,H as s,c as e,h as i,a as o}from"../widgets/Widget.js";import{c as a}from"./observers.js";import{s as r,a as n,c as l}from"./loadable.js";import{V as c}from"./Validation.js";import{d}from"./icon.js";import{d as p}from"./input-message.js";import"./tslib.es6.js";import"../intl.js";import"./date.js";import"./jsonMap.js";import"../config.js";import"../core/lang.js";import"./locale.js";import"./handleUtils.js";import"./timeZoneUtils.js";import"./datetime.js";import"./Logger.js";import"./messages.js";import"../core/Error.js";import"../core/promiseUtils.js";import"./maybe.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../core/Handles.js";import"../core/accessorSupport/decorators/subclass.js";import"./metadata.js";import"./utils.js";import"./tracking.js";import"./ensureType.js";import"../core/accessorSupport/decorators/property.js";import"./ObservableBase.js";import"../core/scheduling.js";import"./assets.js";import"./domUtils.js";import"../core/Evented.js";import"../core/Promise.js";import"../core/reactiveUtils.js";import"./asyncUtils.js";import"../core/Collection.js";import"./shared.js";import"./SimpleObservable.js";import"./uuid.js";import"../core/accessorSupport/decorators/cast.js";import"./projector.js";import"./widgetUtils.js";import"./jsxWidgetSupport.js";import"./legacyIcon.js";import"./dom.js";import"./guid.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.3.0
 */const m=t(class extends s{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteRadioButtonGroupChange=e(this,"calciteRadioButtonGroupChange",6),this.mutationObserver=a("mutation",(()=>this.passPropsToRadioButtons())),this.passPropsToRadioButtons=()=>{this.radioButtons=Array.from(this.el.querySelectorAll("calcite-radio-button")),this.selectedItem=Array.from(this.radioButtons).find((t=>t.checked))||null,this.radioButtons.length>0&&this.radioButtons.forEach((t=>{t.disabled=this.disabled||t.disabled,t.hidden=this.el.hidden,t.name=this.name,t.required=this.required,t.scale=this.scale}))},this.disabled=!1,this.layout="horizontal",this.name=void 0,this.required=!1,this.selectedItem=null,this.scale="m",this.status="idle",this.validationMessage=void 0,this.validationIcon=void 0,this.radioButtons=[]}handleHiddenChange(){this.passPropsToRadioButtons()}onDisabledChange(){this.passPropsToRadioButtons()}onLayoutChange(){this.passPropsToRadioButtons()}onScaleChange(){this.passPropsToRadioButtons()}connectedCallback(){this.passPropsToRadioButtons(),this.mutationObserver?.observe(this.el,{childList:!0,subtree:!0})}componentWillLoad(){r(this)}componentDidLoad(){n(this)}disconnectedCallback(){this.mutationObserver?.disconnect()}getFocusableRadioButton(){return this.radioButtons.find((t=>!t.disabled))??null}async setFocus(){return await l(this),this.selectedItem&&!this.selectedItem.disabled?this.selectedItem.setFocus():this.radioButtons.length>0?this.getFocusableRadioButton()?.setFocus():void 0}radioButtonChangeHandler(t){this.selectedItem=t.target,this.calciteRadioButtonGroupChange.emit()}render(){return i(o,{role:"radiogroup"},i("div",{class:"item-wrapper"},i("slot",null)),this.validationMessage?i(c,{icon:this.validationIcon,message:this.validationMessage,scale:this.scale,status:this.status}):null)}get el(){return this}static get watchers(){return{hidden:["handleHiddenChange"],disabled:["onDisabledChange"],layout:["onLayoutChange"],scale:["onScaleChange"]}}static get style(){return":host{display:flex;flex-direction:column}:host>.item-wrapper{display:flex;max-inline-size:100vw}:host([layout=horizontal])>.item-wrapper{flex-direction:row;flex-wrap:wrap}:host([layout=horizontal][scale=s])>.item-wrapper{column-gap:1rem}:host([layout=horizontal][scale=m])>.item-wrapper{column-gap:1.25rem}:host([layout=horizontal][scale=l])>.item-wrapper{column-gap:1.5rem}:host([layout=vertical])>.item-wrapper{flex-direction:column}:host([scale=s]) calcite-input-message{--calcite-input-message-spacing-value:calc(var(--calcite-spacing-xxs) * -1)}:host([scale=m]) calcite-input-message{--calcite-input-message-spacing-value:calc(var(--calcite-spacing-sm) * -1)}:host([scale=l]) calcite-input-message{--calcite-input-message-spacing-value:calc(var(--calcite-spacing-md) * -1)}.validation-container{display:flex;flex-direction:column;align-items:flex-start;align-self:stretch}:host([scale=m]) .validation-container,:host([scale=l]) .validation-container{padding-block-start:0.5rem}:host([scale=s]) .validation-container{padding-block-start:0.25rem}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-radio-button-group",{disabled:[516],layout:[513],name:[513],required:[516],selectedItem:[1040],scale:[513],status:[513],validationMessage:[1,"validation-message"],validationIcon:[520,"validation-icon"],radioButtons:[32],setFocus:[64]},[[0,"calciteRadioButtonChange","radioButtonChangeHandler"]],{hidden:["handleHiddenChange"],disabled:["onDisabledChange"],layout:["onLayoutChange"],scale:["onScaleChange"]}]);function u(){"undefined"!=typeof customElements&&["calcite-radio-button-group","calcite-icon","calcite-input-message"].forEach((t=>{switch(t){case"calcite-radio-button-group":customElements.get(t)||customElements.define(t,m);break;case"calcite-icon":customElements.get(t)||d();break;case"calcite-input-message":customElements.get(t)||p()}}))}u();const h=m,g=u;export{h as CalciteRadioButtonGroup,g as defineCustomElement};