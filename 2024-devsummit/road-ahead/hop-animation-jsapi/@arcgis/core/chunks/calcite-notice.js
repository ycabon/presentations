/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{p as e,H as t,c as o,h as i}from"../widgets/Widget.js";import{c as s,d as n}from"./conditionalSlot.js";import{s as c,b as a}from"./dom.js";import{s as l,a as r,c as d}from"./loadable.js";import{c as m,d as p}from"./locale2.js";import{c as h,d as g,s as f,u}from"./t9n.js";import{o as v}from"./openCloseComponent.js";import{g as b}from"./component.js";import{d as k}from"./icon.js";import"./tslib.es6.js";import"../intl.js";import"./date.js";import"./jsonMap.js";import"../config.js";import"../core/lang.js";import"./locale.js";import"./handleUtils.js";import"./timeZoneUtils.js";import"./datetime.js";import"./Logger.js";import"./messages.js";import"../core/Error.js";import"../core/promiseUtils.js";import"./maybe.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../core/Handles.js";import"../core/accessorSupport/decorators/subclass.js";import"./metadata.js";import"./utils.js";import"./tracking.js";import"./ensureType.js";import"../core/accessorSupport/decorators/property.js";import"./ObservableBase.js";import"../core/scheduling.js";import"./assets.js";import"./domUtils.js";import"../core/Evented.js";import"../core/Promise.js";import"../core/reactiveUtils.js";import"./asyncUtils.js";import"../core/Collection.js";import"./shared.js";import"./SimpleObservable.js";import"./uuid.js";import"../core/accessorSupport/decorators/cast.js";import"./projector.js";import"./widgetUtils.js";import"./jsxWidgetSupport.js";import"./legacyIcon.js";import"./observers.js";import"./guid.js";import"./key.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.3.0
 */var j;!function(e){e.brand="lightbulb",e.danger="exclamationMarkTriangle",e.info="information",e.success="checkCircle",e.warning="exclamationMarkTriangle"}(j||(j={}));
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.3.0
 */
const x="actions-end",w=e(class extends t{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteNoticeBeforeClose=o(this,"calciteNoticeBeforeClose",6),this.calciteNoticeBeforeOpen=o(this,"calciteNoticeBeforeOpen",6),this.calciteNoticeClose=o(this,"calciteNoticeClose",6),this.calciteNoticeOpen=o(this,"calciteNoticeOpen",6),this.setTransitionEl=e=>{this.transitionEl=e},this.close=()=>{this.open=!1},this.openTransitionProp="opacity",this.open=!1,this.kind="brand",this.closable=!1,this.icon=void 0,this.iconFlipRtl=!1,this.scale="m",this.width="auto",this.messages=void 0,this.messageOverrides=void 0,this.effectiveLocale=void 0,this.defaultMessages=void 0}openHandler(){v(this)}onMessagesChange(){}updateRequestedIcon(){this.requestedIcon=c(j,this.icon,this.kind)}connectedCallback(){s(this),m(this),h(this)}disconnectedCallback(){n(this),p(this),g(this)}async componentWillLoad(){l(this),this.requestedIcon=c(j,this.icon,this.kind),await f(this),this.open&&v(this)}componentDidLoad(){r(this)}render(){const{el:e}=this,t=i("button",{"aria-label":this.messages.close,class:"notice-close",onClick:this.close,ref:e=>this.closeButton=e},i("calcite-icon",{icon:"x",scale:b(this.scale)})),o=a(e,x);return i("div",{class:"container",ref:this.setTransitionEl},this.requestedIcon?i("div",{class:"notice-icon"},i("calcite-icon",{flipRtl:this.iconFlipRtl,icon:this.requestedIcon,scale:b(this.scale)})):null,i("div",{class:"notice-content"},i("slot",{name:"title"}),i("slot",{name:"message"}),i("slot",{name:"link"})),o?i("div",{class:"actions-end"},i("slot",{name:x})):null,this.closable?t:null)}async setFocus(){await d(this);const e=this.el.querySelector("calcite-link");if(this.closeButton||e)return e?e.setFocus():void(this.closeButton&&this.closeButton.focus())}onBeforeClose(){this.calciteNoticeBeforeClose.emit()}onBeforeOpen(){this.calciteNoticeBeforeOpen.emit()}onClose(){this.calciteNoticeClose.emit()}onOpen(){this.calciteNoticeOpen.emit()}effectiveLocaleChange(){u(this,this.effectiveLocale)}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{open:["openHandler"],messageOverrides:["onMessagesChange"],icon:["updateRequestedIcon"],kind:["updateRequestedIcon"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return":host([scale=s]){--calcite-notice-spacing-token-small:0.5rem;--calcite-notice-spacing-token-large:0.75rem}:host([scale=s]) .container slot[name=title]::slotted(*),:host([scale=s]) .container *::slotted([slot=title]){margin-block:0.125rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=s]) .container slot[name=message]::slotted(*),:host([scale=s]) .container *::slotted([slot=message]){margin-block:0.125rem;font-size:var(--calcite-font-size--2);line-height:1.375}:host([scale=s]) ::slotted(calcite-link){margin-block:0.125rem;font-size:var(--calcite-font-size--2);line-height:1.375}:host([scale=s]) .notice-close{padding:0.5rem}:host([scale=m]){--calcite-notice-spacing-token-small:0.75rem;--calcite-notice-spacing-token-large:1rem}:host([scale=m]) .container slot[name=title]::slotted(*),:host([scale=m]) .container *::slotted([slot=title]){margin-block:0.125rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=m]) .container slot[name=message]::slotted(*),:host([scale=m]) .container *::slotted([slot=message]){margin-block:0.125rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=m]) ::slotted(calcite-link){margin-block:0.125rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=l]){--calcite-notice-spacing-token-small:1rem;--calcite-notice-spacing-token-large:1.25rem}:host([scale=l]) .container slot[name=title]::slotted(*),:host([scale=l]) .container *::slotted([slot=title]){margin-block:0.125rem;font-size:var(--calcite-font-size-1);line-height:1.375}:host([scale=l]) .container slot[name=message]::slotted(*),:host([scale=l]) .container *::slotted([slot=message]){margin-block:0.125rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=l]) ::slotted(calcite-link){margin-block:0.125rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([width=auto]){--calcite-notice-width:auto}:host([width=half]){--calcite-notice-width:50%}:host([width=full]){--calcite-notice-width:100%}:host{margin-inline:auto;display:none;max-inline-size:100%;align-items:center;inline-size:var(--calcite-notice-width)}.container{pointer-events:none;margin-block:0px;box-sizing:border-box;display:none;inline-size:100%;background-color:var(--calcite-color-foreground-1);opacity:0;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;max-block-size:0;text-align:start;border-inline-start:0px solid;box-shadow:0 0 0 0 transparent}.notice-close{outline-color:transparent}.notice-close:focus{outline:2px solid var(--calcite-color-brand);outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}:host{display:flex}:host([open]) .container{pointer-events:auto;display:flex;max-block-size:100%;align-items:center;border-width:2px;opacity:1;--tw-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);--tw-shadow-colored:0 4px 8px -1px var(--tw-shadow-color), 0 2px 4px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.container slot[name=title]::slotted(*),.container *::slotted([slot=title]){margin:0px;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-1)}.container slot[name=message]::slotted(*),.container *::slotted([slot=message]){margin:0px;display:inline;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-color-text-2);margin-inline-end:var(--calcite-notice-spacing-token-small)}.notice-content{box-sizing:border-box;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;padding-inline:var(--calcite-notice-spacing-token-large);flex:0 0 auto;display:flex;min-inline-size:0px;flex-direction:column;overflow-wrap:break-word;flex:1 1 0;padding-block:var(--calcite-notice-spacing-token-small);padding-inline:0 var(--calcite-notice-spacing-token-small)}.notice-content:first-of-type:not(:only-child){padding-inline-start:var(--calcite-notice-spacing-token-large)}.notice-content:only-of-type{padding-block:var(--calcite-notice-spacing-token-small);padding-inline:var(--calcite-notice-spacing-token-large)}.notice-icon{display:flex;align-items:center;box-sizing:border-box;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;padding-block:var(--calcite-notice-spacing-token-small);padding-inline:var(--calcite-notice-spacing-token-large);flex:0 0 auto}.notice-close{display:flex;cursor:pointer;align-items:center;align-self:stretch;border-style:none;background-color:transparent;color:var(--calcite-color-text-3);outline:2px solid transparent;outline-offset:2px;box-sizing:border-box;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;padding-block:var(--calcite-notice-spacing-token-small);padding-inline:var(--calcite-notice-spacing-token-large);flex:0 0 auto;-webkit-appearance:none}.notice-close:hover,.notice-close:focus{background-color:var(--calcite-color-foreground-2);color:var(--calcite-color-text-1)}.notice-close:active{background-color:var(--calcite-color-foreground-3)}.actions-end{display:flex;align-self:stretch}:host([kind=brand]) .container{border-color:var(--calcite-color-brand)}:host([kind=brand]) .container .notice-icon{color:var(--calcite-color-brand)}:host([kind=info]) .container{border-color:var(--calcite-color-status-info)}:host([kind=info]) .container .notice-icon{color:var(--calcite-color-status-info)}:host([kind=danger]) .container{border-color:var(--calcite-color-status-danger)}:host([kind=danger]) .container .notice-icon{color:var(--calcite-color-status-danger)}:host([kind=success]) .container{border-color:var(--calcite-color-status-success)}:host([kind=success]) .container .notice-icon{color:var(--calcite-color-status-success)}:host([kind=warning]) .container{border-color:var(--calcite-color-status-warning)}:host([kind=warning]) .container .notice-icon{color:var(--calcite-color-status-warning)}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-notice",{open:[1540],kind:[513],closable:[516],icon:[520],iconFlipRtl:[516,"icon-flip-rtl"],scale:[513],width:[513],messages:[1040],messageOverrides:[1040],effectiveLocale:[32],defaultMessages:[32],setFocus:[64]},void 0,{open:["openHandler"],messageOverrides:["onMessagesChange"],icon:["updateRequestedIcon"],kind:["updateRequestedIcon"],effectiveLocale:["effectiveLocaleChange"]}]);function y(){"undefined"!=typeof customElements&&["calcite-notice","calcite-icon"].forEach((e=>{switch(e){case"calcite-notice":customElements.get(e)||customElements.define(e,w);break;case"calcite-icon":customElements.get(e)||k()}}))}y();const z=w,C=y;export{z as CalciteNotice,C as defineCustomElement};