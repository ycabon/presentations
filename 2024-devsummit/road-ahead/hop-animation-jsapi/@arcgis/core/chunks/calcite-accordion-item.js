/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{p as t,H as i,c as e,h as o,C as c,a as n}from"../widgets/Widget.js";import{c as a,d as r}from"./conditionalSlot.js";import{b as s,g as l,t as d,a as p}from"./dom.js";import{g as m}from"./component.js";import{d as h}from"./icon.js";import"./tslib.es6.js";import"../intl.js";import"./date.js";import"./jsonMap.js";import"../config.js";import"../core/lang.js";import"./locale.js";import"./handleUtils.js";import"./timeZoneUtils.js";import"./datetime.js";import"./Logger.js";import"./messages.js";import"../core/Error.js";import"../core/promiseUtils.js";import"./maybe.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../core/Handles.js";import"../core/accessorSupport/decorators/subclass.js";import"./metadata.js";import"./utils.js";import"./tracking.js";import"./ensureType.js";import"../core/accessorSupport/decorators/property.js";import"./ObservableBase.js";import"../core/scheduling.js";import"./assets.js";import"./domUtils.js";import"../core/Evented.js";import"../core/Promise.js";import"../core/reactiveUtils.js";import"./asyncUtils.js";import"../core/Collection.js";import"./shared.js";import"./SimpleObservable.js";import"./uuid.js";import"../core/accessorSupport/decorators/cast.js";import"./projector.js";import"./widgetUtils.js";import"./jsxWidgetSupport.js";import"./legacyIcon.js";import"./observers.js";import"./guid.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.3.0
 */const g="actions-start",v="actions-end",u="section",x="section-toggle",f=t(class extends i{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteInternalAccordionItemSelect=e(this,"calciteInternalAccordionItemSelect",6),this.calciteInternalAccordionItemClose=e(this,"calciteInternalAccordionItemClose",6),this.itemHeaderClickHandler=()=>this.emitRequestedItem(),this.expanded=!1,this.heading=void 0,this.description=void 0,this.iconStart=void 0,this.iconEnd=void 0,this.iconFlipRtl=void 0,this.iconPosition=void 0,this.iconType=void 0,this.accordionParent=void 0,this.scale=void 0}connectedCallback(){a(this)}disconnectedCallback(){r(this)}renderActionsStart(){const{el:t}=this;return s(t,g)?o("div",{class:"actions-start"},o("slot",{name:g})):null}renderActionsEnd(){const{el:t}=this;return s(t,v)?o("div",{class:"actions-end"},o("slot",{name:v})):null}render(){const{iconFlipRtl:t}=this,i=l(this.el),e=this.iconStart?o("calcite-icon",{class:"icon--start",flipRtl:"both"===t||"start"===t,icon:this.iconStart,key:"icon-start",scale:m(this.scale)}):null,a=this.iconEnd?o("calcite-icon",{class:"icon--end",flipRtl:"both"===t||"end"===t,icon:this.iconEnd,key:"icon-end",scale:m(this.scale)}):null,{description:r}=this;return o(n,null,o("div",{class:{[`icon-position--${this.iconPosition}`]:!0,[`icon-type--${this.iconType}`]:!0}},o("div",{class:{header:!0,[c.rtl]:"rtl"===i}},this.renderActionsStart(),o("div",{"aria-controls":u,"aria-expanded":d(this.expanded),class:"header-content",id:x,onClick:this.itemHeaderClickHandler,role:"button",tabindex:"0"},o("div",{class:"header-container"},e,o("div",{class:"header-text"},o("span",{class:"heading"},this.heading),r?o("span",{class:"description"},r):null),a),o("calcite-icon",{class:"expand-icon",icon:"chevron"===this.iconType?"chevronDown":"caret"===this.iconType?"caretDown":this.expanded?"minus":"plus",scale:m(this.scale)})),this.renderActionsEnd()),o("section",{"aria-labelledby":x,class:"content",id:u},o("slot",null))))}keyDownHandler(t){if(t.target===this.el)switch(t.key){case" ":case"Enter":this.emitRequestedItem(),t.preventDefault()}}updateActiveItemOnChange(t){const[i]=t.composedPath(),e=p(this.el,"calcite-accordion");i===e&&(this.determineActiveItem(e.selectionMode,t.detail.requestedAccordionItem),t.stopPropagation())}accordionItemSyncHandler(t){const[i]=t.composedPath(),e=this.el;if(e.parentElement===i)return;const o=p(e,"calcite-accordion");i===o&&(e.iconPosition=o.iconPosition,e.iconType=o.iconType,e.scale=o.scale,t.stopPropagation())}determineActiveItem(t,i){switch(t){case"multiple":this.el===i&&(this.expanded=!this.expanded);break;case"single":this.expanded=this.el===i&&!this.expanded;break;case"single-persist":this.expanded=this.el===i}}emitRequestedItem(){this.calciteInternalAccordionItemSelect.emit({requestedAccordionItem:this.el})}get el(){return this}static get style(){return".icon-position--end,.icon-position--start{--calcite-accordion-item-icon-rotation:calc(90deg * -1);--calcite-accordion-item-active-icon-rotation:0deg;--calcite-accordion-item-icon-rotation-rtl:90deg;--calcite-accordion-item-active-icon-rotation-rtl:0deg}.icon-position--start{--calcite-accordion-item-flex-direction:row-reverse;--calcite-accordion-item-icon-spacing-start:0;--calcite-accordion-item-icon-spacing-end:var(--calcite-accordion-icon-margin)}.icon-position--end{--calcite-accordion-item-flex-direction:row;--calcite-accordion-item-icon-spacing-start:var(--calcite-accordion-icon-margin);--calcite-accordion-item-icon-spacing-end:0}.icon-position--end:not(.icon-type--plus-minus){--calcite-accordion-item-icon-rotation:0deg;--calcite-accordion-item-active-icon-rotation:180deg;--calcite-accordion-item-icon-rotation-rtl:0deg;--calcite-accordion-item-active-icon-rotation-rtl:calc(180deg * -1)}:host{position:relative;display:flex;flex-direction:column;color:var(--calcite-color-text-3);text-decoration-line:none;background-color:var(--calcite-accordion-item-background, var(--calcite-color-foreground-1))}:host .header-content{outline-color:transparent}:host(:focus) .header-content{outline:2px solid transparent;outline-offset:2px;outline:2px solid var(--calcite-color-brand);outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}:host([expanded]){color:var(--calcite-color-text-1)}:host([expanded]) .content{display:block;color:var(--calcite-color-text-1)}:host([expanded]) .header{border-block-end-color:transparent}:host .header{display:flex;align-items:stretch}:host .icon{position:relative;margin:0px;display:inline-flex;color:var(--calcite-color-text-3);transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);margin-inline-end:var(--calcite-accordion-item-icon-spacing-start);margin-inline-start:var(--calcite-accordion-item-icon-spacing-end)}.icon--start{display:flex;align-items:center;margin-inline-end:var(--calcite-accordion-icon-margin)}.icon--end{display:flex;align-items:center;margin-inline-end:var(--calcite-accordion-icon-margin);margin-inline-start:var(--calcite-accordion-icon-margin)}.header-container{inline-size:100%}.content{padding:var(--calcite-accordion-item-padding)}:host .content,:host .header{border-block-end:1px solid var(--calcite-accordion-item-border, var(--calcite-color-border-2))}:host .header *{display:inline-flex;align-items:center;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);word-wrap:break-word;word-break:break-word}:host .content{display:none;padding-block-start:0px;color:var(--calcite-color-text-3);text-align:initial}:host .expand-icon{color:var(--calcite-color-text-3);margin-inline-start:var(--calcite-accordion-item-icon-spacing-start);margin-inline-end:var(--calcite-accordion-item-icon-spacing-end);transform:rotate(var(--calcite-accordion-item-icon-rotation))}.calcite--rtl .expand-icon{transform:rotate(var(--calcite-accordion-item-icon-rotation-rtl))}:host([expanded]) .expand-icon{color:var(--calcite-color-text-3);transform:rotate(var(--calcite-accordion-item-active-icon-rotation))}:host([expanded]) .calcite--rtl .expand-icon{transform:rotate(var(--calcite-accordion-item-active-icon-rotation-rtl))}:host .header-text{margin-block:0px;flex-grow:1;flex-direction:column;padding-block:0px;text-align:initial;margin-inline-end:auto}:host .heading,:host .description{display:flex;inline-size:100%}:host .heading{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-2)}:host .description{margin-block-start:0.25rem;color:var(--calcite-color-text-3)}:host(:focus) .heading,:host(:hover) .heading{color:var(--calcite-color-text-1)}:host(:focus) .icon,:host(:hover) .icon{color:var(--calcite-color-text-1)}:host(:focus) .expand-icon,:host(:hover) .expand-icon{color:var(--calcite-color-text-1)}:host(:focus) .description,:host(:hover) .description{color:var(--calcite-color-text-2)}:host(:focus) .heading,:host(:active) .heading,:host([expanded]) .heading{color:var(--calcite-color-text-1)}:host(:focus) .icon,:host(:active) .icon,:host([expanded]) .icon{color:var(--calcite-color-text-1)}:host(:focus) .description,:host(:active) .description,:host([expanded]) .description{color:var(--calcite-color-text-2)}.header-content{flex-grow:1;cursor:pointer;padding:var(--calcite-accordion-item-padding);flex-direction:var(--calcite-accordion-item-flex-direction)}.actions-start,.actions-end{display:flex;align-items:center}@media (forced-colors: active){:host([expanded]) .header{border-block-end:none}:host([expanded]) .heading{font-weight:bolder}:host(:hover) .heading,:host(:focus) .heading{text-decoration:underline}}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-accordion-item",{expanded:[1540],heading:[1],description:[1],iconStart:[513,"icon-start"],iconEnd:[513,"icon-end"],iconFlipRtl:[513,"icon-flip-rtl"],iconPosition:[1,"icon-position"],iconType:[1,"icon-type"],accordionParent:[16],scale:[1]},[[0,"keydown","keyDownHandler"],[16,"calciteInternalAccordionChange","updateActiveItemOnChange"],[4,"calciteInternalAccordionItemsSync","accordionItemSyncHandler"]]]);function j(){"undefined"!=typeof customElements&&["calcite-accordion-item","calcite-icon"].forEach((t=>{switch(t){case"calcite-accordion-item":customElements.get(t)||customElements.define(t,f);break;case"calcite-icon":customElements.get(t)||h()}}))}j();const b=f,y=j;export{b as CalciteAccordionItem,y as defineCustomElement};
