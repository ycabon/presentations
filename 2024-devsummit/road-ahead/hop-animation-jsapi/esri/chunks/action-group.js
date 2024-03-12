// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ./componentsUtils ./conditionalSlot ./loadable ./locale ./t9n ./action-menu ./dom ./action ./icon ./loader ./popover".split(" "),function(d,b,h,e,k,c,f,q,r,t,u,v){function l(){"undefined"!==typeof customElements&&"calcite-action-group calcite-action calcite-action-menu calcite-icon calcite-loader calcite-popover".split(" ").forEach(a=>{switch(a){case "calcite-action-group":customElements.get(a)||customElements.define(a,m);break;case "calcite-action":customElements.get(a)||r.defineCustomElement();
break;case "calcite-action-menu":customElements.get(a)||f.defineCustomElement();break;case "calcite-icon":customElements.get(a)||t.defineCustomElement();break;case "calcite-loader":customElements.get(a)||u.defineCustomElement();break;case "calcite-popover":customElements.get(a)||v.defineCustomElement()}})}const g={menuActions:"menu-actions",menuTooltip:"menu-tooltip"},m=b.proxyCustomElement(class extends b.H{constructor(){super();this.__registerHost();this.__attachShadow();this.setMenuOpen=a=>{this.menuOpen=
!!a.target.open};this.handleMenuActionsSlotChange=a=>{this.hasMenuActions=q.slotChangeHasAssignedElement(a)};this.expanded=!1;this.label=void 0;this.layout="vertical";this.columns=void 0;this.menuOpen=!1;this.overlayPositioning="absolute";this.messageOverrides=this.messages=this.scale=void 0;this.effectiveLocale="";this.defaultMessages=void 0;this.hasMenuActions=!1}expandedHandler(){this.menuOpen=!1}onMessagesChange(){}effectiveLocaleChange(){c.updateMessages(this,this.effectiveLocale)}async setFocus(){await e.componentFocusable(this);
this.el.focus()}connectedCallback(){k.connectLocalized(this);c.connectMessages(this);h.connectConditionalSlotComponent(this)}disconnectedCallback(){k.disconnectLocalized(this);c.disconnectMessages(this);h.disconnectConditionalSlotComponent(this)}async componentWillLoad(){e.setUpLoadableComponent(this);await c.setUpMessages(this)}componentDidLoad(){e.setComponentLoaded(this)}renderMenu(){const {expanded:a,menuOpen:w,scale:n,layout:x,messages:p,overlayPositioning:y,hasMenuActions:z}=this;return b.h("calcite-action-menu",
{expanded:a,flipPlacements:["left","right"],hidden:!z,label:p.more,onCalciteActionMenuOpen:this.setMenuOpen,open:w,overlayPositioning:y,placement:"horizontal"===x?"bottom-start":"leading-start",scale:n},b.h("calcite-action",{icon:"ellipsis",scale:n,slot:f.SLOTS.trigger,text:p.more,textEnabled:a}),b.h("slot",{name:g.menuActions,onSlotchange:this.handleMenuActionsSlotChange}),b.h("slot",{name:g.menuTooltip,slot:f.SLOTS.tooltip}))}render(){return b.h("div",{"aria-label":this.label,class:"container",
role:"group"},b.h("slot",null),this.renderMenu())}static get delegatesFocus(){return!0}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{expanded:["expandedHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return':host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{display:flex;flex-direction:column;padding:0px;--calcite-action-group-columns:3;--calcite-action-group-gap:1px;--calcite-action-group-padding:1px}.container{display:flex;flex-grow:1;flex-direction:column}:host([columns\x3d"1"]){--calcite-action-group-columns:1}:host([columns\x3d"2"]){--calcite-action-group-columns:2}:host([columns\x3d"3"]){--calcite-action-group-columns:3}:host([columns\x3d"4"]){--calcite-action-group-columns:4}:host([columns\x3d"5"]){--calcite-action-group-columns:5}:host([columns\x3d"6"]){--calcite-action-group-columns:6}:host(:first-child){padding-block-start:0px}:host([layout\x3dhorizontal]),:host([layout\x3dhorizontal]) .container{flex-direction:row}:host([layout\x3dgrid]){display:grid}:host([layout\x3dgrid]) .container{display:grid;place-content:stretch;background-color:var(--calcite-color-background);gap:var(--calcite-action-group-gap);padding:var(--calcite-action-group-gap);grid-template-columns:repeat(var(--calcite-action-group-columns), auto)}:host([hidden]){display:none}[hidden]{display:none}'}},
[17,"calcite-action-group",{expanded:[516],label:[1],layout:[513],columns:[514],menuOpen:[1540,"menu-open"],overlayPositioning:[513,"overlay-positioning"],scale:[513],messages:[1040],messageOverrides:[1040],effectiveLocale:[32],defaultMessages:[32],hasMenuActions:[32],setFocus:[64]},void 0,{expanded:["expandedHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);l();d.ActionGroup=m;d.SLOTS=g;d.defineCustomElement=l});