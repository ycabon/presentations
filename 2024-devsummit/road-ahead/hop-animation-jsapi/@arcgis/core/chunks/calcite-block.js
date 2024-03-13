/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{p as e,H as i,c as t,h as o,a}from"../widgets/Widget.js";import{c as s,d as r}from"./conditionalSlot.js";import{f as c,b as n,t as l}from"./dom.js";import{c as d,d as m,u as p,I as g}from"./interactive.js";import{c as h,d as u}from"./locale2.js";import{u as f,c as b,d as v,s as j}from"./t9n.js";import{H as k}from"./Heading2.js";import{c as y,s as x,a as w}from"./loadable.js";import{o as B}from"./openCloseComponent.js";import{d as C}from"./action.js";import{d as E}from"./action-menu.js";import{d as z}from"./handle.js";import{d as O}from"./icon.js";import{d as L}from"./loader.js";import{d as H}from"./popover2.js";import{d as S}from"./scrim.js";import"./tslib.es6.js";import"../intl.js";import"./date.js";import"./jsonMap.js";import"../config.js";import"../core/lang.js";import"./locale.js";import"./handleUtils.js";import"./timeZoneUtils.js";import"./datetime.js";import"./Logger.js";import"./messages.js";import"../core/Error.js";import"../core/promiseUtils.js";import"./maybe.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../core/Handles.js";import"../core/accessorSupport/decorators/subclass.js";import"./metadata.js";import"./utils.js";import"./tracking.js";import"./ensureType.js";import"../core/accessorSupport/decorators/property.js";import"./ObservableBase.js";import"../core/scheduling.js";import"./assets.js";import"./domUtils.js";import"../core/Evented.js";import"../core/Promise.js";import"../core/reactiveUtils.js";import"./asyncUtils.js";import"../core/Collection.js";import"./shared.js";import"./SimpleObservable.js";import"./uuid.js";import"../core/accessorSupport/decorators/cast.js";import"./projector.js";import"./widgetUtils.js";import"./jsxWidgetSupport.js";import"./legacyIcon.js";import"./observers.js";import"./guid.js";import"./key.js";import"./component.js";import"./array.js";import"./floating-ui.js";import"./debounce.js";import"./focusTrapComponent.js";import"./FloatingArrow.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.3.0
 */const T="content",U="toggle",M="header",P="icon",q="icon",I="control",_="header-menu-actions",D={opened:"chevron-up",closed:"chevron-down",valid:"check-circle",invalid:"exclamation-mark-triangle"},F=e(class extends i{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteBlockBeforeClose=t(this,"calciteBlockBeforeClose",6),this.calciteBlockBeforeOpen=t(this,"calciteBlockBeforeOpen",6),this.calciteBlockClose=t(this,"calciteBlockClose",6),this.calciteBlockOpen=t(this,"calciteBlockOpen",6),this.calciteBlockToggle=t(this,"calciteBlockToggle",6),this.openTransitionProp="opacity",this.onHeaderClick=()=>{this.open=!this.open,this.calciteBlockToggle.emit()},this.setTransitionEl=e=>{this.transitionEl=e},this.collapsible=!1,this.disabled=!1,this.dragHandle=!1,this.heading=void 0,this.headingLevel=void 0,this.loading=!1,this.open=!1,this.status=void 0,this.description=void 0,this.messages=void 0,this.messageOverrides=void 0,this.overlayPositioning="absolute",this.effectiveLocale=void 0,this.defaultMessages=void 0}openHandler(){B(this)}onMessagesChange(){}async setFocus(){await y(this),c(this.el)}onBeforeOpen(){this.calciteBlockBeforeOpen.emit()}onOpen(){this.calciteBlockOpen.emit()}onBeforeClose(){this.calciteBlockBeforeClose.emit()}onClose(){this.calciteBlockClose.emit()}effectiveLocaleChange(){f(this,this.effectiveLocale)}connectedCallback(){s(this),d(this),h(this),b(this)}disconnectedCallback(){m(this),u(this),v(this),r(this)}async componentWillLoad(){await j(this),x(this),this.open&&B(this)}componentDidLoad(){w(this)}componentDidRender(){p(this)}renderScrim(){const{loading:e}=this,i=o("slot",null);return[e?o("calcite-scrim",{loading:e}):null,i]}renderIcon(){const{loading:e,messages:i,status:t}=this,a=!!n(this.el,q);return e?o("div",{class:P,key:"loader"},o("calcite-loader",{inline:!0,label:i.loading})):t?o("div",{class:P,key:"status-icon"},o("calcite-icon",{class:{"status-icon":!0,valid:"valid"==t,invalid:"invalid"==t},icon:D[t],scale:"s"})):a?o("div",{class:P,key:"icon-slot"},o("slot",{key:"icon-slot",name:q})):null}renderTitle(){const{heading:e,headingLevel:i,description:t}=this;return e||t?o("div",{class:"title"},o(k,{class:"heading",level:i},e),t?o("div",{class:"description"},t):null):null}render(){const{collapsible:e,el:i,loading:t,open:s,heading:r,messages:c}=this,d=s?c.collapse:c.expand,m=o("header",{class:"header",id:M},this.renderIcon(),this.renderTitle()),p=!!n(i,I),h=!!n(i,_),u=s?D.opened:D.closed,f=o("div",{class:"header-container"},this.dragHandle?o("calcite-handle",{label:r}):null,e?o("button",{"aria-controls":T,"aria-describedby":M,"aria-expanded":e?l(s):null,class:"toggle",id:U,onClick:this.onHeaderClick,title:d},m,o("calcite-icon",{"aria-hidden":"true",class:"toggle-icon",icon:u,scale:"s"})):m,p?o("div",{class:"control-container"},o("slot",{name:I})):null,h?o("calcite-action-menu",{label:c.options,overlayPositioning:this.overlayPositioning},o("slot",{name:_})):null);return o(a,null,o(g,{disabled:this.disabled},o("article",{"aria-busy":l(t),class:{container:!0}},f,o("section",{"aria-labelledby":U,class:"content",hidden:!s,id:T,ref:this.setTransitionEl},this.renderScrim()))))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{open:["openHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return':host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{--calcite-icon-size:1rem;--calcite-spacing-eighth:0.125rem;--calcite-spacing-quarter:0.25rem;--calcite-spacing-half:0.5rem;--calcite-spacing-three-quarters:0.75rem;--calcite-spacing:1rem;--calcite-spacing-plus-quarter:1.25rem;--calcite-spacing-plus-half:1.5rem;--calcite-spacing-double:2rem;--calcite-menu-min-width:10rem;--calcite-header-min-height:3rem;--calcite-footer-min-height:3rem}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;flex-shrink:0;flex-grow:0;flex-direction:column;border-width:0px;border-block-end-width:1px;border-style:solid;border-color:var(--calcite-color-border-3);padding:0px;transition-property:margin;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;transition-timing-function:cubic-bezier(0.215, 0.440, 0.420, 0.880);flex-basis:auto}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.header{margin:0px;display:flex;align-content:space-between;align-items:center;fill:var(--calcite-color-text-2);color:var(--calcite-color-text-2)}.heading{margin:0px;padding:0px;font-weight:var(--calcite-font-weight-medium)}.header .heading{flex:1 1 auto;padding:0.5rem}.header{justify-content:flex-start;padding:0px}.header,.toggle{grid-area:header}.header-container{display:grid;align-items:stretch;grid-template:auto/auto 1fr auto auto;grid-template-areas:"handle header control menu";grid-column:header-start/menu-end;grid-row:1/2}.toggle{margin:0px;display:flex;cursor:pointer;flex-wrap:nowrap;align-items:center;justify-content:space-between;border-style:none;padding:0px;font-family:inherit;outline-color:transparent;text-align:initial;background-color:transparent}.toggle:hover{background-color:var(--calcite-color-foreground-2)}.toggle:focus{outline:2px solid var(--calcite-color-brand);outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}calcite-loader[inline]{grid-area:control;align-self:center}calcite-handle{grid-area:handle}.title{margin:0px;padding:0.75rem}.header .title .heading{padding:0px;font-size:var(--calcite-font-size--1);font-weight:var(--calcite-font-weight-medium);line-height:1.25;color:var(--calcite-color-text-2);transition-property:color;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);word-wrap:break-word;word-break:break-word}.description{margin-block-start:0.125rem;padding:0px;font-size:var(--calcite-font-size--2);line-height:1.375;color:var(--calcite-color-text-3);word-wrap:break-word;word-break:break-word}.icon{display:flex;margin-inline-start:0.75rem;margin-inline-end:0px}.status-icon.valid{color:var(--calcite-color-status-success)}.status-icon.invalid{color:var(--calcite-color-status-danger)}@keyframes spin{0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}100%{transform:rotate(360deg)}}.toggle-icon{margin-block:0.75rem;align-self:center;justify-self:end;color:var(--calcite-color-text-3);transition-property:color;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);margin-inline-end:0.75rem;margin-inline-start:auto}.toggle:hover .toggle-icon{color:var(--calcite-color-text-1)}.container{position:relative;display:flex;block-size:100%;flex-direction:column}.content{position:relative;min-block-size:0px;flex:1 1 0%}@keyframes in{0%{opacity:0}100%{opacity:1}}.content{animation:in var(--calcite-internal-animation-timing-slow) ease-in-out;padding-block:var(--calcite-block-padding, 0.5rem);padding-inline:var(--calcite-block-padding, 0.625rem)}.control-container{margin:0px;display:flex;grid-area:control}calcite-action-menu{grid-area:menu}:host([open]){margin-block:0.5rem}:host([open]) .header .title .heading{color:var(--calcite-color-text-1)}:host([hidden]){display:none}[hidden]{display:none}'}},[1,"calcite-block",{collapsible:[516],disabled:[516],dragHandle:[516,"drag-handle"],heading:[1],headingLevel:[514,"heading-level"],loading:[516],open:[1540],status:[513],description:[1],messages:[1040],messageOverrides:[1040],overlayPositioning:[513,"overlay-positioning"],effectiveLocale:[32],defaultMessages:[32],setFocus:[64]},void 0,{open:["openHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function W(){"undefined"!=typeof customElements&&["calcite-block","calcite-action","calcite-action-menu","calcite-handle","calcite-icon","calcite-loader","calcite-popover","calcite-scrim"].forEach((e=>{switch(e){case"calcite-block":customElements.get(e)||customElements.define(e,F);break;case"calcite-action":customElements.get(e)||C();break;case"calcite-action-menu":customElements.get(e)||E();break;case"calcite-handle":customElements.get(e)||z();break;case"calcite-icon":customElements.get(e)||O();break;case"calcite-loader":customElements.get(e)||L();break;case"calcite-popover":customElements.get(e)||H();break;case"calcite-scrim":customElements.get(e)||S()}}))}W();const A=F,J=W;export{A as CalciteBlock,J as defineCustomElement};