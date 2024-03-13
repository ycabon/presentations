/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{p as e,H as t,c as a,h as n}from"../widgets/Widget.js";import{e as o,u as i,f as s,t as r}from"./dom.js";import{c as l,u as c,d,I as h}from"./interactive.js";import{s as p,a as g,c as m}from"./loadable.js";import{c as f}from"./observers.js";import{d as b,S as u}from"./action-menu.js";import{H as v}from"./Heading2.js";import{c as x,d as C}from"./locale2.js";import{c as y,s as S,d as k,u as A}from"./t9n.js";import{d as H}from"./action.js";import{d as w}from"./icon.js";import{d as z}from"./loader.js";import{d as E}from"./popover2.js";import{d as F}from"./scrim.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.3.0
 */const P="header-content",M="header-actions",j={actionBar:"action-bar",headerActionsStart:"header-actions-start",headerActionsEnd:"header-actions-end",headerMenuActions:"header-menu-actions",headerContent:"header-content",fab:"fab",footer:"footer",footerActions:"footer-actions"},L=e(class extends t{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calcitePanelClose=a(this,"calcitePanelClose",6),this.calcitePanelToggle=a(this,"calcitePanelToggle",6),this.calcitePanelScroll=a(this,"calcitePanelScroll",6),this.resizeObserver=f("resize",(()=>this.resizeHandler())),this.resizeHandler=()=>{const{panelScrollEl:e}=this;e&&"number"==typeof e.scrollHeight&&"number"==typeof e.offsetHeight&&(e.tabIndex=e.scrollHeight>e.offsetHeight?0:-1)},this.setContainerRef=e=>{this.containerEl=e},this.panelKeyDownHandler=e=>{this.closable&&"Escape"===e.key&&!e.defaultPrevented&&(this.close(),e.preventDefault())},this.close=()=>{this.closed=!0,this.calcitePanelClose.emit()},this.collapse=()=>{this.collapsed=!this.collapsed,this.calcitePanelToggle.emit()},this.panelScrollHandler=()=>{this.calcitePanelScroll.emit()},this.handleHeaderActionsStartSlotChange=e=>{this.hasStartActions=o(e)},this.handleHeaderActionsEndSlotChange=e=>{this.hasEndActions=o(e)},this.handleHeaderMenuActionsSlotChange=e=>{this.hasMenuItems=o(e)},this.handleActionBarSlotChange=e=>{const t=i(e).filter((e=>e?.matches("calcite-action-bar")));t.forEach((e=>e.layout="horizontal")),this.hasActionBar=!!t.length},this.handleHeaderContentSlotChange=e=>{this.hasHeaderContent=o(e)},this.handleFooterSlotChange=e=>{this.hasFooterContent=o(e)},this.handleFooterActionsSlotChange=e=>{this.hasFooterActions=o(e)},this.handleFabSlotChange=e=>{this.hasFab=o(e)},this.setPanelScrollEl=e=>{this.panelScrollEl=e,this.resizeObserver?.disconnect(),e&&(this.resizeObserver?.observe(e),this.resizeHandler())},this.closed=!1,this.disabled=!1,this.closable=!1,this.collapsed=!1,this.collapseDirection="down",this.collapsible=!1,this.headingLevel=void 0,this.loading=!1,this.heading=void 0,this.description=void 0,this.menuOpen=!1,this.messageOverrides=void 0,this.messages=void 0,this.overlayPositioning="absolute",this.hasStartActions=!1,this.hasEndActions=!1,this.hasMenuItems=!1,this.hasHeaderContent=!1,this.hasActionBar=!1,this.hasFooterContent=!1,this.hasFooterActions=!1,this.hasFab=!1,this.defaultMessages=void 0,this.effectiveLocale="",this.showHeaderContent=!1}onMessagesChange(){}connectedCallback(){l(this),x(this),y(this)}async componentWillLoad(){p(this),await S(this)}componentDidLoad(){g(this)}componentDidRender(){c(this)}disconnectedCallback(){d(this),C(this),k(this),this.resizeObserver?.disconnect()}effectiveLocaleChange(){A(this,this.effectiveLocale)}async setFocus(){await m(this),s(this.containerEl)}async scrollContentTo(e){this.panelScrollEl?.scrollTo(e)}renderHeaderContent(){const{heading:e,headingLevel:t,description:a,hasHeaderContent:o}=this,i=e?n(v,{class:"heading",level:t},e):null,s=a?n("span",{class:"description"},a):null;return o||!i&&!s?null:n("div",{class:P,key:"header-content"},i,s)}renderActionBar(){return n("div",{class:"action-bar-container",hidden:!this.hasActionBar},n("slot",{name:j.actionBar,onSlotchange:this.handleActionBarSlotChange}))}renderHeaderSlottedContent(){return n("div",{class:P,hidden:!this.hasHeaderContent,key:"slotted-header-content"},n("slot",{name:j.headerContent,onSlotchange:this.handleHeaderContentSlotChange}))}renderHeaderStartActions(){const{hasStartActions:e}=this;return n("div",{class:{"header-actions--start":!0,[M]:!0},hidden:!e,key:"header-actions-start"},n("slot",{name:j.headerActionsStart,onSlotchange:this.handleHeaderActionsStartSlotChange}))}renderHeaderActionsEnd(){const{hasEndActions:e,messages:t,closable:a,collapsed:o,collapseDirection:i,collapsible:s,hasMenuItems:l}=this,{collapse:c,expand:d,close:h}=t,p=["chevron-down","chevron-up"];"up"===i&&p.reverse();const g=s?n("calcite-action",{"aria-expanded":r(!o),"aria-label":c,"data-test":"collapse",icon:o?p[0]:p[1],onClick:this.collapse,text:c,title:o?d:c}):null,m=a?n("calcite-action",{"aria-label":h,"data-test":"close",icon:"x",onClick:this.close,text:h,title:h}):null,f=n("slot",{name:j.headerActionsEnd,onSlotchange:this.handleHeaderActionsEndSlotChange});return n("div",{class:{"header-actions--end":!0,[M]:!0},hidden:!(e||g||m||l),key:"header-actions-end"},f,this.renderMenu(),g,m)}renderMenu(){const{hasMenuItems:e,messages:t,menuOpen:a}=this;return n("calcite-action-menu",{flipPlacements:["top","bottom"],hidden:!e,key:"menu",label:t.options,open:a,overlayPositioning:this.overlayPositioning,placement:"bottom-end"},n("calcite-action",{icon:"ellipsis",slot:u.trigger,text:t.options}),n("slot",{name:j.headerMenuActions,onSlotchange:this.handleHeaderMenuActionsSlotChange}))}renderHeaderNode(){const{hasHeaderContent:e,hasStartActions:t,hasEndActions:a,closable:o,collapsible:i,hasMenuItems:s,hasActionBar:r}=this,l=this.renderHeaderContent(),c=e||!!l||t||a||i||o||s;return this.showHeaderContent=c,n("header",{class:"header",hidden:!(c||r)},n("div",{class:{"header-container":!0,"header-container--border-end":r},hidden:!c},this.renderHeaderStartActions(),this.renderHeaderSlottedContent(),l,this.renderHeaderActionsEnd()),this.renderActionBar())}renderFooterNode(){const{hasFooterContent:e,hasFooterActions:t}=this;return n("footer",{class:"footer",hidden:!(e||t)},n("slot",{key:"footer-slot",name:j.footer,onSlotchange:this.handleFooterSlotChange}),n("slot",{key:"footer-actions-slot",name:j.footerActions,onSlotchange:this.handleFooterActionsSlotChange}))}renderContent(){return n("div",{class:"content-wrapper",hidden:this.collapsible&&this.collapsed,onScroll:this.panelScrollHandler,ref:this.setPanelScrollEl},n("slot",null),this.renderFab())}renderFab(){return n("div",{class:"fab-container",hidden:!this.hasFab},n("slot",{name:j.fab,onSlotchange:this.handleFabSlotChange}))}render(){const{disabled:e,loading:t,panelKeyDownHandler:a,closed:o,closable:i}=this,s=n("article",{"aria-busy":r(t),class:"container",hidden:o,onKeyDown:a,tabIndex:i?0:-1,ref:this.setContainerRef},this.renderHeaderNode(),this.renderContent(),this.renderFooterNode());return n(h,{disabled:e},t?n("calcite-scrim",{loading:t}):null,s)}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return":host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:flex;block-size:100%;inline-size:100%;flex:1 1 auto;--calcite-min-header-height:calc(var(--calcite-icon-size) * 3)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.header{margin:0px;display:flex;align-content:space-between;align-items:center;fill:var(--calcite-color-text-2);color:var(--calcite-color-text-2)}.heading{margin:0px;padding:0px;font-weight:var(--calcite-font-weight-medium)}.header .heading{flex:1 1 auto;padding:0.5rem}.container{margin:0px;display:flex;inline-size:100%;flex:1 1 auto;flex-direction:column;align-items:stretch;background-color:var(--calcite-color-background);padding:0px;transition:max-block-size var(--calcite-animation-timing), inline-size var(--calcite-animation-timing)}.container[hidden]{display:none}.header{z-index:var(--calcite-z-index-header);display:flex;flex-direction:column;background-color:var(--calcite-color-foreground-1);border-block-end:var(--calcite-panel-header-border-block-end, 1px solid var(--calcite-color-border-3))}.header-container{display:flex;inline-size:100%;flex-direction:row;align-items:stretch;justify-content:flex-start;flex:0 0 auto}.header-container--border-end{border-block-end:1px solid var(--calcite-color-border-3)}.action-bar-container{inline-size:100%}.action-bar-container ::slotted(calcite-action-bar){inline-size:100%}.header-content{display:flex;flex-direction:column;overflow:hidden;padding-inline:0.75rem;padding-block:0.875rem;margin-inline-end:auto}.header-content .heading,.header-content .description{display:block;overflow-wrap:break-word;padding:0px}.header-content .heading{margin-inline:0px;margin-block:0px 0.25rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;font-weight:var(--calcite-font-weight-medium)}.header-content .heading:only-child{margin-block-end:0px}.header-content .description{font-size:var(--calcite-font-size--1);line-height:1rem;color:var(--calcite-color-text-2)}.back-button{border-width:0px;border-style:solid;border-color:var(--calcite-color-border-3);border-inline-end-width:1px}.header-actions{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:stretch}.header-actions--end{margin-inline-start:auto}.content-wrapper{display:flex;block-size:100%;flex:1 1 auto;flex-direction:column;flex-wrap:nowrap;align-items:stretch;overflow:auto;background-color:var(--calcite-color-background)}.footer{display:flex;inline-size:100%;justify-content:space-evenly;background-color:var(--calcite-color-foreground-1);flex:0 0 auto;padding:var(--calcite-panel-footer-padding, 0.5rem);border-block-start:1px solid var(--calcite-color-border-3)}.fab-container{position:sticky;inset-block-end:0px;z-index:var(--calcite-z-index-sticky);margin-block:0px;margin-inline:auto;display:block;padding:0.5rem;inset-inline:0;inline-size:-moz-fit-content;inline-size:fit-content}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-panel",{closed:[1540],disabled:[516],closable:[516],collapsed:[516],collapseDirection:[1,"collapse-direction"],collapsible:[516],headingLevel:[514,"heading-level"],loading:[516],heading:[1],description:[1],menuOpen:[516,"menu-open"],messageOverrides:[1040],messages:[1040],overlayPositioning:[513,"overlay-positioning"],hasStartActions:[32],hasEndActions:[32],hasMenuItems:[32],hasHeaderContent:[32],hasActionBar:[32],hasFooterContent:[32],hasFooterActions:[32],hasFab:[32],defaultMessages:[32],effectiveLocale:[32],showHeaderContent:[32],setFocus:[64],scrollContentTo:[64]},void 0,{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function B(){"undefined"!=typeof customElements&&["calcite-panel","calcite-action","calcite-action-menu","calcite-icon","calcite-loader","calcite-popover","calcite-scrim"].forEach((e=>{switch(e){case"calcite-panel":customElements.get(e)||customElements.define(e,L);break;case"calcite-action":customElements.get(e)||H();break;case"calcite-action-menu":customElements.get(e)||b();break;case"calcite-icon":customElements.get(e)||w();break;case"calcite-loader":customElements.get(e)||z();break;case"calcite-popover":customElements.get(e)||E();break;case"calcite-scrim":customElements.get(e)||F()}}))}B();export{L as P,j as S,B as d};