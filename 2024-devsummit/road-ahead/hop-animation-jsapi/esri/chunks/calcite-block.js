// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ./componentsUtils ./conditionalSlot ./dom ./interactive ./locale ./t9n ./Heading ./loadable ./openCloseComponent ./action ./action-menu ./handle ./icon ./loader ./popover ./scrim".split(" "),function(k,a,q,e,g,r,h,x,l,t,y,z,A,B,C,D,E){function u(){"undefined"!==typeof customElements&&"calcite-block calcite-action calcite-action-menu calcite-handle calcite-icon calcite-loader calcite-popover calcite-scrim".split(" ").forEach(b=>{switch(b){case "calcite-block":customElements.get(b)||
customElements.define(b,v);break;case "calcite-action":customElements.get(b)||y.defineCustomElement();break;case "calcite-action-menu":customElements.get(b)||z.defineCustomElement();break;case "calcite-handle":customElements.get(b)||A.defineCustomElement();break;case "calcite-icon":customElements.get(b)||B.defineCustomElement();break;case "calcite-loader":customElements.get(b)||C.defineCustomElement();break;case "calcite-popover":customElements.get(b)||D.defineCustomElement();break;case "calcite-scrim":customElements.get(b)||
E.defineCustomElement()}})}const m={opened:"chevron-up",closed:"chevron-down",valid:"check-circle",invalid:"exclamation-mark-triangle"},v=a.proxyCustomElement(class extends a.H{constructor(){super();this.__registerHost();this.__attachShadow();this.calciteBlockBeforeClose=a.createEvent(this,"calciteBlockBeforeClose",6);this.calciteBlockBeforeOpen=a.createEvent(this,"calciteBlockBeforeOpen",6);this.calciteBlockClose=a.createEvent(this,"calciteBlockClose",6);this.calciteBlockOpen=a.createEvent(this,
"calciteBlockOpen",6);this.calciteBlockToggle=a.createEvent(this,"calciteBlockToggle",6);this.openTransitionProp="opacity";this.onHeaderClick=()=>{this.open=!this.open;this.calciteBlockToggle.emit()};this.setTransitionEl=b=>{this.transitionEl=b};this.dragHandle=this.disabled=this.collapsible=!1;this.headingLevel=this.heading=void 0;this.open=this.loading=!1;this.messageOverrides=this.messages=this.description=this.status=void 0;this.overlayPositioning="absolute";this.defaultMessages=this.effectiveLocale=
void 0}openHandler(){t.onToggleOpenCloseComponent(this)}onMessagesChange(){}async setFocus(){await l.componentFocusable(this);e.focusFirstTabbable(this.el)}onBeforeOpen(){this.calciteBlockBeforeOpen.emit()}onOpen(){this.calciteBlockOpen.emit()}onBeforeClose(){this.calciteBlockBeforeClose.emit()}onClose(){this.calciteBlockClose.emit()}effectiveLocaleChange(){h.updateMessages(this,this.effectiveLocale)}connectedCallback(){q.connectConditionalSlotComponent(this);g.connectInteractive(this);r.connectLocalized(this);
h.connectMessages(this)}disconnectedCallback(){g.disconnectInteractive(this);r.disconnectLocalized(this);h.disconnectMessages(this);q.disconnectConditionalSlotComponent(this)}async componentWillLoad(){await h.setUpMessages(this);l.setUpLoadableComponent(this);if(this.open)t.onToggleOpenCloseComponent(this)}componentDidLoad(){l.setComponentLoaded(this)}componentDidRender(){g.updateHostInteraction(this)}renderScrim(){const {loading:b}=this,d=a.h("slot",null);return[b?a.h("calcite-scrim",{loading:b}):
null,d]}renderIcon(){const {loading:b,messages:d,status:c}=this,f=!!e.getSlotted(this.el,"icon");return b?a.h("div",{class:"icon",key:"loader"},a.h("calcite-loader",{inline:!0,label:d.loading})):c?a.h("div",{class:"icon",key:"status-icon"},a.h("calcite-icon",{class:{["status-icon"]:!0,valid:"valid"==c,invalid:"invalid"==c},icon:m[c],scale:"s"})):f?a.h("div",{class:"icon",key:"icon-slot"},a.h("slot",{key:"icon-slot",name:"icon"})):null}renderTitle(){const {heading:b,headingLevel:d,description:c}=this;
return b||c?a.h("div",{class:"title"},a.h(x.Heading,{class:"heading",level:d},b),c?a.h("div",{class:"description"},c):null):null}render(){const {collapsible:b,el:d,loading:c,open:f,heading:F,messages:n}=this;var p=f?n.collapse:n.expand;const w=a.h("header",{class:"header",id:"header"},this.renderIcon(),this.renderTitle()),G=!!e.getSlotted(d,"control"),H=!!e.getSlotted(d,"header-menu-actions"),I=f?m.opened:m.closed;p=a.h("div",{class:"header-container"},this.dragHandle?a.h("calcite-handle",{label:F}):
null,b?a.h("button",{"aria-controls":"content","aria-describedby":"header","aria-expanded":b?e.toAriaBoolean(f):null,class:"toggle",id:"toggle",onClick:this.onHeaderClick,title:p},w,a.h("calcite-icon",{"aria-hidden":"true",class:"toggle-icon",icon:I,scale:"s"})):w,G?a.h("div",{class:"control-container"},a.h("slot",{name:"control"})):null,H?a.h("calcite-action-menu",{label:n.options,overlayPositioning:this.overlayPositioning},a.h("slot",{name:"header-menu-actions"})):null);return a.h(a.Host,null,a.h(g.InteractiveContainer,
{disabled:this.disabled},a.h("article",{"aria-busy":e.toAriaBoolean(c),class:{container:!0}},p,a.h("section",{"aria-labelledby":"toggle",class:"content",hidden:!f,id:"content",ref:this.setTransitionEl},this.renderScrim()))))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{open:["openHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return':host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{--calcite-icon-size:1rem;--calcite-spacing-eighth:0.125rem;--calcite-spacing-quarter:0.25rem;--calcite-spacing-half:0.5rem;--calcite-spacing-three-quarters:0.75rem;--calcite-spacing:1rem;--calcite-spacing-plus-quarter:1.25rem;--calcite-spacing-plus-half:1.5rem;--calcite-spacing-double:2rem;--calcite-menu-min-width:10rem;--calcite-header-min-height:3rem;--calcite-footer-min-height:3rem}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;flex-shrink:0;flex-grow:0;flex-direction:column;border-width:0px;border-block-end-width:1px;border-style:solid;border-color:var(--calcite-color-border-3);padding:0px;transition-property:margin;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;transition-timing-function:cubic-bezier(0.215, 0.440, 0.420, 0.880);flex-basis:auto}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.header{margin:0px;display:flex;align-content:space-between;align-items:center;fill:var(--calcite-color-text-2);color:var(--calcite-color-text-2)}.heading{margin:0px;padding:0px;font-weight:var(--calcite-font-weight-medium)}.header .heading{flex:1 1 auto;padding:0.5rem}.header{justify-content:flex-start;padding:0px}.header,.toggle{grid-area:header}.header-container{display:grid;align-items:stretch;grid-template:auto/auto 1fr auto auto;grid-template-areas:"handle header control menu";grid-column:header-start/menu-end;grid-row:1/2}.toggle{margin:0px;display:flex;cursor:pointer;flex-wrap:nowrap;align-items:center;justify-content:space-between;border-style:none;padding:0px;font-family:inherit;outline-color:transparent;text-align:initial;background-color:transparent}.toggle:hover{background-color:var(--calcite-color-foreground-2)}.toggle:focus{outline:2px solid var(--calcite-color-brand);outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}calcite-loader[inline]{grid-area:control;align-self:center}calcite-handle{grid-area:handle}.title{margin:0px;padding:0.75rem}.header .title .heading{padding:0px;font-size:var(--calcite-font-size--1);font-weight:var(--calcite-font-weight-medium);line-height:1.25;color:var(--calcite-color-text-2);transition-property:color;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);word-wrap:break-word;word-break:break-word}.description{margin-block-start:0.125rem;padding:0px;font-size:var(--calcite-font-size--2);line-height:1.375;color:var(--calcite-color-text-3);word-wrap:break-word;word-break:break-word}.icon{display:flex;margin-inline-start:0.75rem;margin-inline-end:0px}.status-icon.valid{color:var(--calcite-color-status-success)}.status-icon.invalid{color:var(--calcite-color-status-danger)}@keyframes spin{0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}100%{transform:rotate(360deg)}}.toggle-icon{margin-block:0.75rem;align-self:center;justify-self:end;color:var(--calcite-color-text-3);transition-property:color;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);margin-inline-end:0.75rem;margin-inline-start:auto}.toggle:hover .toggle-icon{color:var(--calcite-color-text-1)}.container{position:relative;display:flex;block-size:100%;flex-direction:column}.content{position:relative;min-block-size:0px;flex:1 1 0%}@keyframes in{0%{opacity:0}100%{opacity:1}}.content{animation:in var(--calcite-internal-animation-timing-slow) ease-in-out;padding-block:var(--calcite-block-padding, 0.5rem);padding-inline:var(--calcite-block-padding, 0.625rem)}.control-container{margin:0px;display:flex;grid-area:control}calcite-action-menu{grid-area:menu}:host([open]){margin-block:0.5rem}:host([open]) .header .title .heading{color:var(--calcite-color-text-1)}:host([hidden]){display:none}[hidden]{display:none}'}},
[1,"calcite-block",{collapsible:[516],disabled:[516],dragHandle:[516,"drag-handle"],heading:[1],headingLevel:[514,"heading-level"],loading:[516],open:[1540],status:[513],description:[1],messages:[1040],messageOverrides:[1040],overlayPositioning:[513,"overlay-positioning"],effectiveLocale:[32],defaultMessages:[32],setFocus:[64]},void 0,{open:["openHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);u();k.CalciteBlock=v;k.defineCustomElement=u;Object.defineProperty(k,
Symbol.toStringTag,{value:"Module"})});