/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{p as e,H as t,c as n,h as i,a as s}from"../widgets/Widget.js";import{e as o,v as l,g as a,t as c}from"./dom.js";import{c as r,u as d,d as h,I as m}from"./interactive.js";import{a as p,g as u,I as g,C,S as f,b,c as v,u as S}from"./utils32.js";import{c as I,d as j}from"./locale2.js";import{u as y,c as E,s as L,d as k}from"./t9n.js";import{s as x,a as A,c as w}from"./loadable.js";import{d as D}from"./action.js";import{d as H}from"./handle.js";import{d as M}from"./icon.js";import{d as P}from"./loader.js";import"./tslib.es6.js";import"../intl.js";import"./date.js";import"./jsonMap.js";import"../config.js";import"../core/lang.js";import"./locale.js";import"./handleUtils.js";import"./timeZoneUtils.js";import"./datetime.js";import"./Logger.js";import"./messages.js";import"../core/Error.js";import"../core/promiseUtils.js";import"./maybe.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../core/Handles.js";import"../core/accessorSupport/decorators/subclass.js";import"./metadata.js";import"./utils.js";import"./tracking.js";import"./ensureType.js";import"../core/accessorSupport/decorators/property.js";import"./ObservableBase.js";import"../core/scheduling.js";import"./assets.js";import"./domUtils.js";import"../core/Evented.js";import"../core/Promise.js";import"../core/reactiveUtils.js";import"./asyncUtils.js";import"../core/Collection.js";import"./shared.js";import"./SimpleObservable.js";import"./uuid.js";import"../core/accessorSupport/decorators/cast.js";import"./projector.js";import"./widgetUtils.js";import"./jsxWidgetSupport.js";import"./legacyIcon.js";import"./guid.js";import"./key.js";import"./observers.js";import"./component.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.3.0
 */const B=new Map,z=e(class extends t{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteListItemSelect=n(this,"calciteListItemSelect",6),this.calciteListItemClose=n(this,"calciteListItemClose",6),this.calciteListItemDragHandleChange=n(this,"calciteListItemDragHandleChange",6),this.calciteListItemToggle=n(this,"calciteListItemToggle",6),this.calciteInternalListItemSelect=n(this,"calciteInternalListItemSelect",6),this.calciteInternalListItemSelectMultiple=n(this,"calciteInternalListItemSelectMultiple",6),this.calciteInternalListItemActive=n(this,"calciteInternalListItemActive",6),this.calciteInternalFocusPreviousItem=n(this,"calciteInternalFocusPreviousItem",6),this.calciteInternalListItemChange=n(this,"calciteInternalListItemChange",6),this.dragHandleSelectedChangeHandler=e=>{this.dragSelected=e.target.selected,this.calciteListItemDragHandleChange.emit(),e.stopPropagation()},this.emitInternalListItemActive=()=>{this.calciteInternalListItemActive.emit()},this.focusCellHandle=()=>{this.focusCell(this.handleGridEl)},this.focusCellActionsStart=()=>{this.focusCell(this.actionsStartEl)},this.focusCellContent=()=>{this.focusCell(this.contentEl)},this.focusCellActionsEnd=()=>{this.focusCell(this.actionsEndEl)},this.handleCloseClick=()=>{this.closed=!0,this.calciteListItemClose.emit()},this.handleContentSlotChange=e=>{this.hasCustomContent=o(e)},this.handleActionsStartSlotChange=e=>{this.hasActionsStart=o(e)},this.handleActionsEndSlotChange=e=>{this.hasActionsEnd=o(e)},this.handleContentStartSlotChange=e=>{this.hasContentStart=o(e)},this.handleContentEndSlotChange=e=>{this.hasContentEnd=o(e)},this.handleContentBottomSlotChange=e=>{this.hasContentBottom=o(e)},this.handleDefaultSlotChange=e=>{this.handleOpenableChange(e.target)},this.handleToggleClick=()=>{this.toggle()},this.toggle=(e=!this.open)=>{this.open=e,this.calciteListItemToggle.emit()},this.handleItemClick=e=>{e.defaultPrevented||this.toggleSelected(e.shiftKey)},this.toggleSelected=e=>{const{selectionMode:t,selected:n}=this;this.disabled||("multiple"===t||"single"===t?this.selected=!n:"single-persist"===t&&(this.selected=!0),this.calciteInternalListItemSelectMultiple.emit({selectMultiple:e&&"multiple"===t}),this.calciteListItemSelect.emit())},this.handleItemKeyDown=e=>{if(e.defaultPrevented)return;const{key:t}=e,n=e.composedPath(),{containerEl:i,actionsStartEl:s,actionsEndEl:o,open:l,openable:a}=this,c=this.getGridCells(),r=c.findIndex((e=>n.includes(e)));if("Enter"!==t||n.includes(s)||n.includes(o)){if("ArrowRight"===t){e.preventDefault();const t=r+1;-1===r?!l&&a?(this.toggle(!0),this.focusCell(null)):c[0]&&this.focusCell(c[0]):c[r]&&c[t]&&this.focusCell(c[t])}else if("ArrowLeft"===t){e.preventDefault();const t=r-1;-1===r?(this.focusCell(null),l&&a?this.toggle(!1):this.calciteInternalFocusPreviousItem.emit()):0===r?(this.focusCell(null),i.focus()):c[r]&&c[t]&&this.focusCell(c[t])}}else e.preventDefault(),this.toggleSelected(e.shiftKey)},this.focusCellNull=()=>{this.focusCell(null)},this.focusCell=(e,t=!0)=>{const{parentListEl:n}=this;t&&B.set(n,null);const i=this.getGridCells();i.forEach((e=>{e.tabIndex=-1,e.removeAttribute(p)}));const s=l(e);e&&(e.tabIndex=e===s?0:-1,t&&B.set(n,i.indexOf(e)),e.setAttribute(p,"")),s?.focus()},this.active=!1,this.closable=!1,this.closed=!1,this.description=void 0,this.disabled=!1,this.dragDisabled=!1,this.dragHandle=!1,this.dragSelected=!1,this.filterHidden=!1,this.label=void 0,this.metadata=void 0,this.open=!1,this.setSize=null,this.setPosition=null,this.selected=!1,this.value=void 0,this.selectionMode=null,this.selectionAppearance=null,this.messageOverrides=void 0,this.messages=void 0,this.effectiveLocale="",this.defaultMessages=void 0,this.level=null,this.visualLevel=null,this.parentListEl=void 0,this.openable=!1,this.hasActionsStart=!1,this.hasActionsEnd=!1,this.hasCustomContent=!1,this.hasContentStart=!1,this.hasContentEnd=!1,this.hasContentBottom=!1}activeHandler(e){e||this.focusCell(null,!1)}handleClosedChange(){this.emitCalciteInternalListItemChange()}handleDisabledChange(){this.emitCalciteInternalListItemChange()}handleSelectedChange(){this.calciteInternalListItemSelect.emit()}onMessagesChange(){}handleCalciteInternalListDefaultSlotChanges(e){e.stopPropagation(),this.handleOpenableChange(this.defaultSlotEl)}effectiveLocaleChange(){y(this,this.effectiveLocale)}connectedCallback(){r(this),I(this),E(this);const{el:e}=this;this.parentListEl=e.closest("calcite-list"),this.level=u(e)+1,this.visualLevel=u(e,!0),this.setSelectionDefaults()}async componentWillLoad(){x(this),await L(this)}componentDidLoad(){A(this)}componentDidRender(){d(this)}disconnectedCallback(){h(this),j(this),k(this)}async setFocus(){await w(this);const{containerEl:e,parentListEl:t}=this,n=B.get(t);if("number"!=typeof n)e?.focus();else{const t=this.getGridCells();t[n]?this.focusCell(t[n]):e?.focus()}}renderSelected(){const{selected:e,selectionMode:t,selectionAppearance:n}=this;return"none"===t||"border"===n?null:i("td",{class:{[C.selectionContainer]:!0,[C.selectionContainerSingle]:"single"===t||"single-persist"===t},key:"selection-container",onClick:this.handleItemClick},i("calcite-icon",{icon:e?"multiple"===t?g.selectedMultiple:g.selectedSingle:"multiple"===t?g.unselectedMultiple:g.unselectedSingle,scale:"s"}))}renderDragHandle(){const{label:e,dragHandle:t,dragSelected:n,dragDisabled:s,setPosition:o,setSize:l}=this;return t?i("td",{"aria-label":e,class:C.dragContainer,key:"drag-handle-container",onFocusin:this.focusCellHandle,role:"gridcell",ref:e=>this.handleGridEl=e},i("calcite-handle",{disabled:s,label:e,onCalciteHandleChange:this.dragHandleSelectedChangeHandler,selected:n,setPosition:o,setSize:l})):null}renderOpen(){const{el:e,open:t,openable:n,messages:s}=this,o=a(e),l=t?g.open:"rtl"===o?g.closedRTL:g.closedLTR,c=t?s.collapse:s.expand;return n?i("td",{class:C.openContainer,key:"open-container",onClick:this.handleToggleClick,title:c},i("calcite-icon",{icon:l,key:l,scale:"s"})):null}renderActionsStart(){const{label:e,hasActionsStart:t}=this;return i("td",{"aria-label":e,class:C.actionsStart,hidden:!t,key:"actions-start-container",onFocusin:this.focusCellActionsStart,role:"gridcell",ref:e=>this.actionsStartEl=e},i("slot",{name:f.actionsStart,onSlotchange:this.handleActionsStartSlotChange}))}renderActionsEnd(){const{label:e,hasActionsEnd:t,closable:n,messages:s}=this;return i("td",{"aria-label":e,class:C.actionsEnd,hidden:!(t||n),key:"actions-end-container",onFocusin:this.focusCellActionsEnd,role:"gridcell",ref:e=>this.actionsEndEl=e},i("slot",{name:f.actionsEnd,onSlotchange:this.handleActionsEndSlotChange}),n?i("calcite-action",{appearance:"transparent",icon:g.close,key:"close-action",label:s.close,onClick:this.handleCloseClick,text:s.close}):null)}renderContentStart(){const{hasContentStart:e}=this;return i("div",{class:C.contentStart,hidden:!e},i("slot",{name:f.contentStart,onSlotchange:this.handleContentStartSlotChange}))}renderCustomContent(){const{hasCustomContent:e}=this;return i("div",{class:C.customContent,hidden:!e},i("slot",{name:f.content,onSlotchange:this.handleContentSlotChange}))}renderContentEnd(){const{hasContentEnd:e}=this;return i("div",{class:C.contentEnd,hidden:!e},i("slot",{name:f.contentEnd,onSlotchange:this.handleContentEndSlotChange}))}renderContentBottom(){const{hasContentBottom:e,visualLevel:t}=this;return i("div",{class:C.contentBottom,hidden:!e,style:{"--calcite-list-item-spacing-indent-multiplier":`${t}`}},i("slot",{name:f.contentBottom,onSlotchange:this.handleContentBottomSlotChange}))}renderDefaultContainer(){return i("div",{class:{[C.nestedContainer]:!0,[C.nestedContainerHidden]:this.openable&&!this.open}},i("slot",{onSlotchange:this.handleDefaultSlotChange,ref:e=>this.defaultSlotEl=e}))}renderContentProperties(){const{label:e,description:t,hasCustomContent:n}=this;return n||!e&&!t?null:i("div",{class:C.content,key:"content"},e?i("div",{class:C.label,key:"label"},e):null,t?i("div",{class:C.description,key:"description"},t):null)}renderContentContainer(){const{description:e,label:t,selectionMode:n,hasCustomContent:s}=this,o=s||!!t||!!e,l=[this.renderContentStart(),this.renderCustomContent(),this.renderContentProperties(),this.renderContentEnd()];return i("td",{"aria-label":t,class:{[C.contentContainer]:!0,[C.contentContainerSelectable]:"none"!==n,[C.contentContainerHasCenterContent]:o},key:"content-container",onClick:this.handleItemClick,onFocusin:this.focusCellContent,role:"gridcell",ref:e=>this.contentEl=e},l)}render(){const{openable:e,open:t,level:n,setPosition:o,setSize:l,active:a,label:r,selected:d,selectionAppearance:h,selectionMode:p,closed:u,visualLevel:g}=this,f="none"!==p&&"border"===h,b=f&&d,v=f&&!d;return i(s,null,i(m,{disabled:this.disabled},i("tr",{"aria-expanded":e?c(t):null,"aria-label":r,"aria-level":n,"aria-posinset":o,"aria-selected":c(d),"aria-setsize":l,class:{[C.container]:!0,[C.containerHover]:!0,[C.containerBorder]:f,[C.containerBorderSelected]:b,[C.containerBorderUnselected]:v},hidden:u,onFocus:this.focusCellNull,onFocusin:this.emitInternalListItemActive,onKeyDown:this.handleItemKeyDown,role:"row",style:{"--calcite-list-item-spacing-indent-multiplier":`${g}`},tabIndex:a?0:-1,ref:e=>this.containerEl=e},this.renderDragHandle(),this.renderSelected(),this.renderOpen(),this.renderActionsStart(),this.renderContentContainer(),this.renderActionsEnd()),this.renderContentBottom(),this.renderDefaultContainer()))}emitCalciteInternalListItemChange(){this.calciteInternalListItemChange.emit()}setSelectionDefaults(){const{parentListEl:e,selectionMode:t,selectionAppearance:n}=this;e&&(t||(this.selectionMode=e.selectionMode),n||(this.selectionAppearance=e.selectionAppearance))}handleOpenableChange(e){if(!e)return;const t=b(e),n=v(e);S(t),this.openable=!!t.length||!!n.length}getGridCells(){return[this.handleGridEl,this.actionsStartEl,this.contentEl,this.actionsEndEl].filter((e=>e&&!e.hidden))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{active:["activeHandler"],closed:["handleClosedChange"],disabled:["handleDisabledChange"],selected:["handleSelectedChange"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;flex-direction:column;--calcite-list-item-icon-color:var(--calcite-color-brand);--calcite-list-item-spacing-indent:1rem}:host([filter-hidden]){display:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.container{box-sizing:border-box;display:flex;flex:1 1 0%;background-color:var(--calcite-color-foreground-1);font-family:var(--calcite-sans-family);padding-inline-start:calc(var(--calcite-list-item-spacing-indent) * var(--calcite-list-item-spacing-indent-multiplier))}.container *{box-sizing:border-box}.container--hover:hover{cursor:pointer;background-color:var(--calcite-color-foreground-2)}.container:active{background-color:var(--calcite-color-foreground-1)}.container--border{border-inline-start-width:4px;border-inline-start-style:solid}.container--border-selected{border-inline-start-color:var(--calcite-color-brand)}.container--border-unselected{border-inline-start-color:transparent}.container:hover.container--border-unselected{border-color:var(--calcite-color-border-1)}.nested-container{display:flex;flex-direction:column;background-color:var(--calcite-color-foreground-1)}.nested-container--hidden{display:none}.content-container{display:flex;flex:1 1 auto;-webkit-user-select:none;user-select:none;align-items:stretch;padding:0px;font-family:var(--calcite-sans-family);font-weight:var(--calcite-font-weight-normal);color:var(--calcite-color-text-2)}tr,td{outline-color:transparent}tr:focus,td:focus{outline:2px solid var(--calcite-color-brand);outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}.content,.custom-content{display:flex;flex:1 1 auto;flex-direction:column;justify-content:center;padding-inline:0.75rem;padding-block:0.5rem;font-size:var(--calcite-font-size--2);line-height:1.375}.label,.description,.content-bottom{font-family:var(--calcite-sans-family);font-size:var(--calcite-font-size--2);font-weight:var(--calcite-font-weight-normal);word-wrap:break-word;word-break:break-word}.label:only-child,.description:only-child,.content-bottom:only-child{margin:0px;padding-block:0.25rem}.label{color:var(--calcite-color-text-1)}:host([selected]) .label{font-weight:var(--calcite-font-weight-medium)}.description{margin-block-start:0.125rem;color:var(--calcite-color-text-3)}:host([selected]) .description{color:var(--calcite-color-text-2)}.content-start{justify-content:flex-start}.content-end{justify-content:flex-end}.content-start,.content-end{flex:1 1 auto}.content-bottom{display:flex;flex-direction:column;background-color:var(--calcite-color-foreground-1);padding-inline-start:calc(var(--calcite-list-item-spacing-indent) * var(--calcite-list-item-spacing-indent-multiplier))}.content-container--has-center-content .content-start,.content-container--has-center-content .content-end{flex:0 1 auto}.selection-container{display:flex;padding-inline:0.75rem;color:var(--calcite-color-border-input)}.selection-container--single{color:transparent}:host(:not([disabled]):not([selected])) .container:hover .selection-container--single{color:var(--calcite-color-border-1)}:host([selected]:hover) .selection-container,:host([selected]:hover) .selection-container--single,:host([selected]) .selection-container{color:var(--calcite-list-item-icon-color)}.open-container{color:var(--calcite-color-text-3)}:host(:not([disabled])) .container:hover .open-container{color:var(--calcite-color-text-1)}.actions-start,.actions-end,.content-start,.content-end,.selection-container,.drag-container,.open-container{display:flex;align-items:center}.open-container,.selection-container{cursor:pointer}.content-start ::slotted(calcite-icon),.content-end ::slotted(calcite-icon){margin-inline:0.75rem;align-self:center}.actions-start ::slotted(calcite-action),.actions-start ::slotted(calcite-action-menu),.actions-start ::slotted(calcite-handle),.actions-start ::slotted(calcite-dropdown),.actions-end ::slotted(calcite-action),.actions-end ::slotted(calcite-action-menu),.actions-end ::slotted(calcite-handle),.actions-end ::slotted(calcite-dropdown){align-self:stretch;color:inherit}::slotted(calcite-list-item){border-width:0px;border-block-start-width:1px;border-style:solid;border-color:var(--calcite-color-border-3)}::slotted(calcite-list:empty){padding-block:0.75rem}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-list-item",{active:[4],closable:[516],closed:[1540],description:[1],disabled:[516],dragDisabled:[516,"drag-disabled"],dragHandle:[4,"drag-handle"],dragSelected:[1540,"drag-selected"],filterHidden:[516,"filter-hidden"],label:[1],metadata:[16],open:[1540],setSize:[2,"set-size"],setPosition:[2,"set-position"],selected:[1540],value:[8],selectionMode:[1025,"selection-mode"],selectionAppearance:[1025,"selection-appearance"],messageOverrides:[1040],messages:[1040],effectiveLocale:[32],defaultMessages:[32],level:[32],visualLevel:[32],parentListEl:[32],openable:[32],hasActionsStart:[32],hasActionsEnd:[32],hasCustomContent:[32],hasContentStart:[32],hasContentEnd:[32],hasContentBottom:[32],setFocus:[64]},[[0,"calciteInternalListItemGroupDefaultSlotChange","handleCalciteInternalListDefaultSlotChanges"],[0,"calciteInternalListDefaultSlotChange","handleCalciteInternalListDefaultSlotChanges"]],{active:["activeHandler"],closed:["handleClosedChange"],disabled:["handleDisabledChange"],selected:["handleSelectedChange"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function O(){"undefined"!=typeof customElements&&["calcite-list-item","calcite-action","calcite-handle","calcite-icon","calcite-loader"].forEach((e=>{switch(e){case"calcite-list-item":customElements.get(e)||customElements.define(e,z);break;case"calcite-action":customElements.get(e)||D();break;case"calcite-handle":customElements.get(e)||H();break;case"calcite-icon":customElements.get(e)||M();break;case"calcite-loader":customElements.get(e)||P()}}))}O();const F=z,U=O;export{F as CalciteListItem,U as defineCustomElement};