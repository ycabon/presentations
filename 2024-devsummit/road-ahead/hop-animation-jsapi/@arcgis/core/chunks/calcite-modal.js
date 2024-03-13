/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{p as e,H as t,c as i,h as o,a as s}from"../widgets/Widget.js";import{c as a,d as n}from"./conditionalSlot.js";import{b as l,e as r,f as c,h as d}from"./dom.js";import{d as m,a as h,c as p,u as b}from"./focusTrapComponent.js";import{s as u,a as g,c as v}from"./loadable.js";import{c as f}from"./observers.js";import{o as x}from"./openCloseComponent.js";import{c as k,d as y}from"./locale2.js";import{s as w,c as z,d as C,u as j}from"./t9n.js";import{g as O,c as E}from"./component.js";import{d as M}from"./icon.js";import{d as S}from"./loader.js";import{d as T}from"./scrim.js";import"./tslib.es6.js";import"../intl.js";import"./date.js";import"./jsonMap.js";import"../config.js";import"../core/lang.js";import"./locale.js";import"./handleUtils.js";import"./timeZoneUtils.js";import"./datetime.js";import"./Logger.js";import"./messages.js";import"../core/Error.js";import"../core/promiseUtils.js";import"./maybe.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../core/Handles.js";import"../core/accessorSupport/decorators/subclass.js";import"./metadata.js";import"./utils.js";import"./tracking.js";import"./ensureType.js";import"../core/accessorSupport/decorators/property.js";import"./ObservableBase.js";import"../core/scheduling.js";import"./assets.js";import"./domUtils.js";import"../core/Evented.js";import"../core/Promise.js";import"../core/reactiveUtils.js";import"./asyncUtils.js";import"../core/Collection.js";import"./shared.js";import"./SimpleObservable.js";import"./uuid.js";import"../core/accessorSupport/decorators/cast.js";import"./projector.js";import"./widgetUtils.js";import"./jsxWidgetSupport.js";import"./legacyIcon.js";import"./guid.js";import"./key.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.3.0
 */const B="modal",D="header",F="container",L="modal--opening-idle",$="modal--opening-active",H="modal--closing-idle",W="modal--closing-active",V="content",I="back",U="secondary",P="primary";let _=0,q="";const A=e(class extends t{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteModalBeforeClose=i(this,"calciteModalBeforeClose",6),this.calciteModalClose=i(this,"calciteModalClose",6),this.calciteModalBeforeOpen=i(this,"calciteModalBeforeOpen",6),this.calciteModalOpen=i(this,"calciteModalOpen",6),this.ignoreOpenChange=!1,this.mutationObserver=f("mutation",(()=>this.handleMutationObserver())),this.cssVarObserver=f("mutation",(()=>{this.updateSizeCssVars()})),this.openTransitionProp="opacity",this.setTransitionEl=e=>{this.transitionEl=e},this.openEnd=()=>{this.setFocus(),this.el.removeEventListener("calciteModalOpen",this.openEnd)},this.handleCloseClick=()=>{this.open=!1},this.handleOutsideClose=()=>{this.outsideCloseDisabled||(this.open=!1)},this.closeModal=async()=>{if(this.beforeClose)try{await this.beforeClose(this.el)}catch(e){return void requestAnimationFrame((()=>{this.ignoreOpenChange=!0,this.open=!0,this.ignoreOpenChange=!1}))}_--,this.opened=!1,this.removeOverflowHiddenClass()},this.handleMutationObserver=()=>{this.updateFooterVisibility(),this.updateFocusTrapElements()},this.updateFooterVisibility=()=>{this.hasFooter=!!l(this.el,[I,P,U])},this.updateSizeCssVars=()=>{this.cssWidth=getComputedStyle(this.el).getPropertyValue("--calcite-modal-width"),this.cssHeight=getComputedStyle(this.el).getPropertyValue("--calcite-modal-height")},this.contentTopSlotChangeHandler=e=>{this.hasContentTop=r(e)},this.contentBottomSlotChangeHandler=e=>{this.hasContentBottom=r(e)},this.open=!1,this.opened=!1,this.beforeClose=void 0,this.closeButtonDisabled=!1,this.focusTrapDisabled=!1,this.outsideCloseDisabled=!1,this.docked=void 0,this.escapeDisabled=!1,this.scale="m",this.widthScale="m",this.fullscreen=void 0,this.kind=void 0,this.messages=void 0,this.messageOverrides=void 0,this.slottedInShell=void 0,this.cssWidth=void 0,this.cssHeight=void 0,this.hasFooter=!0,this.hasContentTop=!1,this.hasContentBottom=!1,this.effectiveLocale=void 0,this.defaultMessages=void 0}handleFocusTrapDisabled(e){this.open&&(e?m(this):h(this))}onMessagesChange(){}async componentWillLoad(){await w(this),u(this),this.open&&this.openModal()}componentDidLoad(){g(this)}connectedCallback(){this.mutationObserver?.observe(this.el,{childList:!0,subtree:!0}),this.cssVarObserver?.observe(this.el,{attributeFilter:["style"]}),this.updateSizeCssVars(),this.updateFooterVisibility(),a(this),k(this),z(this),p(this)}disconnectedCallback(){this.removeOverflowHiddenClass(),this.mutationObserver?.disconnect(),this.cssVarObserver?.disconnect(),n(this),m(this),y(this),C(this),this.slottedInShell=!1}render(){return o(s,{"aria-describedby":this.contentId,"aria-labelledby":this.titleId,"aria-modal":"true",role:"dialog"},o("div",{class:{[F]:!0,"container--open":this.opened,"slotted-in-shell":this.slottedInShell}},o("calcite-scrim",{class:"scrim",onClick:this.handleOutsideClose}),this.renderStyle(),o("div",{class:{[B]:!0},ref:this.setTransitionEl},o("div",{class:D},this.renderCloseButton(),o("header",{class:"title"},o("slot",{name:D}))),this.renderContentTop(),o("div",{class:{content:!0,"content--no-footer":!this.hasFooter},ref:e=>this.modalContent=e},o("slot",{name:V})),this.renderContentBottom(),this.renderFooter())))}renderFooter(){return this.hasFooter?o("div",{class:"footer",key:"footer"},o("span",{class:"back"},o("slot",{name:I})),o("span",{class:"secondary"},o("slot",{name:U})),o("span",{class:"primary"},o("slot",{name:P}))):null}renderContentTop(){return o("div",{class:"content-top",hidden:!this.hasContentTop},o("slot",{name:"content-top",onSlotchange:this.contentTopSlotChangeHandler}))}renderContentBottom(){return o("div",{class:"content-bottom",hidden:!this.hasContentBottom},o("slot",{name:"content-bottom",onSlotchange:this.contentBottomSlotChangeHandler}))}renderCloseButton(){return this.closeButtonDisabled?null:o("button",{"aria-label":this.messages.close,class:"close",key:"button",onClick:this.handleCloseClick,title:this.messages.close,ref:e=>this.closeButtonEl=e},o("calcite-icon",{icon:"x",scale:O(this.scale)}))}renderStyle(){if(!this.fullscreen&&(this.cssWidth||this.cssHeight))return o("style",null,`.${F} {\n              ${this.docked&&this.cssWidth?"align-items: center !important;":""}\n            }\n            .${B} {\n              block-size: ${this.cssHeight?this.cssHeight:"auto"} !important;\n              ${this.cssWidth?`inline-size: ${this.cssWidth} !important;`:""}\n              ${this.cssWidth?`max-inline-size: ${this.cssWidth} !important;`:""}\n              ${this.docked?"border-radius: var(--calcite-border-radius) !important;":""}\n            }\n            @media screen and (max-width: ${this.cssWidth}) {\n              .${F} {\n                ${this.docked?"align-items: flex-end !important;":""}\n              }\n              .${B} {\n                max-block-size: 100% !important;\n                inline-size: 100% !important;\n                max-inline-size: 100% !important;\n                min-inline-size: 100% !important;\n                margin: 0 !important;\n                ${this.docked?"":"block-size: 100% !important;"}\n                ${this.docked?"":"border-radius: 0 !important;"}\n                ${this.docked?"border-radius: var(--calcite-border-radius) var(--calcite-border-radius) 0 0 !important;":""}\n              }\n            }\n          `)}effectiveLocaleChange(){j(this,this.effectiveLocale)}handleEscape(e){!this.open||this.escapeDisabled||"Escape"!==e.key||e.defaultPrevented||(this.open=!1,e.preventDefault())}async setFocus(){await v(this),c(this.el)}async updateFocusTrapElements(){b(this)}async scrollContent(e=0,t=0){this.modalContent&&(this.modalContent.scrollTo?this.modalContent.scrollTo({top:e,left:t,behavior:"smooth"}):(this.modalContent.scrollTop=e,this.modalContent.scrollLeft=t))}onBeforeOpen(){this.transitionEl.classList.add($),this.calciteModalBeforeOpen.emit()}onOpen(){this.transitionEl.classList.remove(L,$),this.calciteModalOpen.emit(),h(this)}onBeforeClose(){this.transitionEl.classList.add(W),this.calciteModalBeforeClose.emit()}onClose(){this.transitionEl.classList.remove(H,W),this.calciteModalClose.emit(),m(this)}toggleModal(e){this.ignoreOpenChange||(e?this.openModal():this.closeModal())}handleOpenedChange(e){const t=e?L:H;this.transitionEl.classList.add(t),x(this)}async openModal(){await E(this.el),this.el.addEventListener("calciteModalOpen",this.openEnd),this.opened=!0;const e=l(this.el,"header"),t=l(this.el,V);this.titleId=d(e),this.contentId=d(t),this.slottedInShell||(0===_&&(q=document.documentElement.style.overflow),_++,document.documentElement.style.setProperty("overflow","hidden"))}removeOverflowHiddenClass(){document.documentElement.style.setProperty("overflow",q)}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{focusTrapDisabled:["handleFocusTrapDisabled"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"],open:["toggleModal"],opened:["handleOpenedChange"]}}static get style(){return":host{--calcite-modal-scrim-background:rgba(0, 0, 0, 0.85);position:absolute;inset:0px;z-index:var(--calcite-z-index-overlay);display:flex;opacity:0;visibility:hidden !important;transition:visibility 0ms linear var(--calcite-internal-animation-timing-slow), opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88);--calcite-modal-scrim-background-internal:rgba(0, 0, 0, 0.85)}.content-top[hidden],.content-bottom[hidden]{display:none}.container{position:fixed;inset:0px;z-index:var(--calcite-z-index-overlay);display:flex;align-items:center;justify-content:center;overflow-y:hidden;color:var(--calcite-color-text-2);opacity:0;visibility:hidden !important;transition:visibility 0ms linear var(--calcite-internal-animation-timing-slow), opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88)}:host([scale=s]){--calcite-modal-padding-internal:0.75rem;--calcite-modal-padding-large-internal:1rem;--calcite-modal-title-text-internal:var(--calcite-font-size-1);--calcite-modal-content-text-internal:var(--calcite-font-size--1)}:host([scale=m]){--calcite-modal-padding-internal:1rem;--calcite-modal-padding-large-internal:1.25rem;--calcite-modal-title-text-internal:var(--calcite-font-size-2);--calcite-modal-content-text-internal:var(--calcite-font-size-0)}:host([scale=l]){--calcite-modal-padding-internal:1.25rem;--calcite-modal-padding-large-internal:1.5rem;--calcite-modal-title-text-internal:var(--calcite-font-size-3);--calcite-modal-content-text-internal:var(--calcite-font-size-1)}.scrim{--calcite-scrim-background:var(--calcite-modal-scrim-background, var(--calcite-color-transparent-scrim));position:fixed;inset:0px;display:flex;overflow-y:hidden}.modal{pointer-events:none;z-index:var(--calcite-z-index-modal);float:none;margin:1.5rem;box-sizing:border-box;display:flex;inline-size:100%;flex-direction:column;overflow:hidden;border-radius:0.25rem;background-color:var(--calcite-color-foreground-1);opacity:0;--tw-shadow:0 2px 12px -4px rgba(0, 0, 0, 0.2), 0 2px 4px -2px rgba(0, 0, 0, 0.16);--tw-shadow-colored:0 2px 12px -4px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);-webkit-overflow-scrolling:touch;visibility:hidden;transition:transform var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), visibility 0ms linear var(--calcite-internal-animation-timing-slow), opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88);--calcite-modal-hidden-position:translate3d(0, 20px, 0);--calcite-modal-shown-position:translate3d(0, 0, 0)}.modal--opening-idle{transform:var(--calcite-modal-hidden-position)}.modal--opening-active{transform:var(--calcite-modal-shown-position)}.modal--closing-idle{transform:var(--calcite-modal-shown-position)}.modal--closing-active{transform:var(--calcite-modal-hidden-position)}:host([opened]){opacity:1;visibility:visible !important;transition-delay:0ms}.container--open{opacity:1;visibility:visible !important;transition-delay:0ms}.container--open .modal{pointer-events:auto;visibility:visible;opacity:1;transition:transform var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), visibility 0ms linear, opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), max-inline-size var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), max-block-size var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88);transition-delay:0ms}.header{z-index:var(--calcite-z-index-header);display:flex;min-inline-size:0px;max-inline-size:100%;border-start-start-radius:0.25rem;border-start-end-radius:0.25rem;border-width:0px;border-block-end-width:1px;border-style:solid;border-color:var(--calcite-color-border-3);background-color:var(--calcite-color-foreground-1);flex:0 0 auto}.close{order:2;margin:0px;cursor:pointer;appearance:none;border-style:none;background-color:transparent;color:var(--calcite-color-text-3);outline-color:transparent;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;padding-block:var(--calcite-modal-padding-internal);padding-inline:var(--calcite-modal-padding-internal);flex:0 0 auto}.close calcite-icon{pointer-events:none;vertical-align:-2px}.close:focus{outline:2px solid var(--calcite-color-brand);outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}.close:hover,.close:focus,.close:active{background-color:var(--calcite-color-foreground-2);color:var(--calcite-color-text-1)}.title{order:1;display:flex;min-inline-size:0px;align-items:center;flex:1 1 auto;padding-block:var(--calcite-modal-padding-internal);padding-inline:var(--calcite-modal-padding-large-internal)}slot[name=header]::slotted(*),*::slotted([slot=header]){margin:0px;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-color-text-1);font-size:var(--calcite-modal-title-text-internal)}.content{position:relative;box-sizing:border-box;display:block;block-size:100%;overflow:auto;padding:0px;background-color:var(--calcite-modal-content-background, var(--calcite-color-foreground-1));max-block-size:100%;padding:var(--calcite-modal-content-padding, var(--calcite-modal-padding-internal))}.content-top,.content-bottom{z-index:var(--calcite-z-index-header);display:flex;border-width:0px;border-style:solid;border-color:var(--calcite-color-border-3);background-color:var(--calcite-color-foreground-1);flex:0 0 auto;padding:var(--calcite-modal-padding-internal)}.content-top{min-inline-size:0px;max-inline-size:100%;border-block-end-width:1px}.content-bottom{margin-block-start:auto;box-sizing:border-box;inline-size:100%;justify-content:space-between;border-block-start-width:1px}.content-top:not(.header~.content-top){border-start-start-radius:0.25rem;border-start-end-radius:0.25rem}.content-bottom:not(.content-bottom~.footer),.content--no-footer{border-end-end-radius:0.25rem;border-end-start-radius:0.25rem}slot[name=content]::slotted(*),*::slotted([slot=content]){font-size:var(--calcite-modal-context-text-internal)}.footer{z-index:var(--calcite-z-index-header);margin-block-start:auto;box-sizing:border-box;display:flex;inline-size:100%;justify-content:space-between;border-end-end-radius:0.25rem;border-end-start-radius:0.25rem;border-width:0px;border-block-start-width:1px;border-style:solid;border-color:var(--calcite-color-border-3);background-color:var(--calcite-color-foreground-1);flex:0 0 auto;padding-block:var(--calcite-modal-padding-internal);padding-inline:var(--calcite-modal-padding-large-internal)}.footer--hide-back .back,.footer--hide-secondary .secondary{display:none}.back{display:block;margin-inline-end:auto}.secondary{margin-inline:0.25rem;display:block}slot[name=primary]{display:block}:host([width=small]) .modal{inline-size:auto}:host([width-scale=s]) .modal{max-block-size:100%;max-inline-size:100%;inline-size:var(--calcite-modal-width, 32rem);block-size:var(--calcite-modal-height, auto)}@media screen and (max-width: 35rem){:host([width-scale=s]) .modal{margin:0px;block-size:100%;max-block-size:100%;inline-size:100%;max-inline-size:100%}:host([width-scale=s]) .content{flex:1 1 auto;max-block-size:unset}:host([width-scale=s][docked]) .container{align-items:flex-end}}:host([width-scale=m]) .modal{max-block-size:100%;max-inline-size:100%;inline-size:var(--calcite-modal-width, 48rem);block-size:var(--calcite-modal-height, auto)}@media screen and (max-width: 51rem){:host([width-scale=m]) .modal{margin:0px;block-size:100%;max-block-size:100%;inline-size:100%;max-inline-size:100%}:host([width-scale=m]) .content{flex:1 1 auto;max-block-size:unset}:host([width-scale=m][docked]) .container{align-items:flex-end}}:host([width-scale=l]) .modal{max-block-size:100%;max-inline-size:100%;inline-size:var(--calcite-modal-width, 94rem);block-size:var(--calcite-modal-height, auto)}@media screen and (max-width: 97rem){:host([width-scale=l]) .modal{margin:0px;block-size:100%;max-block-size:100%;inline-size:100%;max-inline-size:100%}:host([width-scale=l]) .content{flex:1 1 auto;max-block-size:unset}:host([width-scale=l][docked]) .container{align-items:flex-end}}:host([fullscreen]) .modal{margin:0px;block-size:100%;max-block-size:100%;inline-size:100%;max-inline-size:100%;border-radius:0px;--calcite-modal-hidden-position:translate3D(0, 20px, 0) scale(0.95);--calcite-modal-shown-position:translate3D(0, 0, 0) scale(1)}:host([fullscreen]) .content{max-block-size:100%;flex:1 1 auto}:host([opened][fullscreen]) .header,:host([opened][fullscreen]) .footer,:host([opened][fullscreen]) .content-top,:host([opened][fullscreen]) .content-bottom{border-radius:0}:host([docked]) .modal{block-size:var(--calcite-modal-height, auto)}:host([docked]) .content{block-size:auto;flex:1 1 auto}:host([kind=brand]) .modal{border-color:var(--calcite-color-brand)}:host([kind=danger]) .modal{border-color:var(--calcite-color-status-danger)}:host([kind=info]) .modal{border-color:var(--calcite-color-status-info)}:host([kind=success]) .modal{border-color:var(--calcite-color-status-success)}:host([kind=warning]) .modal{border-color:var(--calcite-color-status-warning)}:host([kind=brand]) .modal,:host([kind=danger]) .modal,:host([kind=info]) .modal,:host([kind=success]) .modal,:host([kind=warning]) .modal{border-width:0px;border-block-start-width:4px;border-style:solid}:host([kind=brand]) .header,:host([kind=brand]) .content-top,:host([kind=danger]) .header,:host([kind=danger]) .content-top,:host([kind=info]) .header,:host([kind=info]) .content-top,:host([kind=success]) .header,:host([kind=success]) .content-top,:host([kind=warning]) .header,:host([kind=warning]) .content-top{border-radius:0.25rem;border-end-end-radius:0px;border-end-start-radius:0px}@media screen and (max-width: 860px){* slot[name=header]::slotted(content-top),* content-top::slotted([slot=header]){font-size:var(--calcite-font-size-1)}.footer,.content-bottom{position:sticky;inset-block-end:0px}}@media screen and (max-width: 480px){.footer,.content-bottom{flex-direction:column}.back,.secondary{margin:0px;margin-block-end:0.25rem}}.container.slotted-in-shell{position:absolute;pointer-events:auto}.container.slotted-in-shell calcite-scrim{position:absolute}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-modal",{open:[1540],opened:[1540],beforeClose:[16],closeButtonDisabled:[516,"close-button-disabled"],focusTrapDisabled:[516,"focus-trap-disabled"],outsideCloseDisabled:[516,"outside-close-disabled"],docked:[516],escapeDisabled:[516,"escape-disabled"],scale:[513],widthScale:[513,"width-scale"],fullscreen:[516],kind:[513],messages:[1040],messageOverrides:[1040],slottedInShell:[1028,"slotted-in-shell"],cssWidth:[32],cssHeight:[32],hasFooter:[32],hasContentTop:[32],hasContentBottom:[32],effectiveLocale:[32],defaultMessages:[32],setFocus:[64],updateFocusTrapElements:[64],scrollContent:[64]},[[8,"keydown","handleEscape"]],{focusTrapDisabled:["handleFocusTrapDisabled"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"],open:["toggleModal"],opened:["handleOpenedChange"]}]);function J(){"undefined"!=typeof customElements&&["calcite-modal","calcite-icon","calcite-loader","calcite-scrim"].forEach((e=>{switch(e){case"calcite-modal":customElements.get(e)||customElements.define(e,A);break;case"calcite-icon":customElements.get(e)||M();break;case"calcite-loader":customElements.get(e)||S();break;case"calcite-scrim":customElements.get(e)||T()}}))}J();const N=A,Z=J;export{N as CalciteModal,Z as defineCustomElement};