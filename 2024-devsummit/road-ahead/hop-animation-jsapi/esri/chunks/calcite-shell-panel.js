// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ./componentsUtils ./conditionalSlot ./dom ./locale ./math ./t9n".split(" "),function(y,d,z,p,A,B,w){function C(){"undefined"!==typeof customElements&&["calcite-shell-panel"].forEach(a=>{switch(a){case "calcite-shell-panel":customElements.get(a)||customElements.define(a,D)}})}const D=d.proxyCustomElement(class extends d.H{constructor(){super();this.__registerHost();this.__attachShadow();this.calciteInternalShellPanelResizeStart=d.createEvent(this,"calciteInternalShellPanelResizeStart",
6);this.calciteInternalShellPanelResizeEnd=d.createEvent(this,"calciteInternalShellPanelResizeEnd",6);this.contentHeightMin=this.contentHeightMax=this.contentWidthMin=this.contentWidthMax=this.initialClientY=this.initialClientX=this.initialContentHeight=this.initialContentWidth=null;this.step=1;this.stepMultiplier=10;this.actionBars=[];this.storeContentEl=a=>{this.contentEl=a};this.getKeyAdjustedSize=a=>{const {key:b}=a,{el:c,step:q,stepMultiplier:r,layout:f,contentWidthMin:t,contentWidthMax:m,initialContentWidth:k,
initialContentHeight:u,contentHeightMin:x,contentHeightMax:l,position:h}=this,e=q*r;-1<"ArrowUp ArrowDown ArrowLeft ArrowRight Home End PageUp PageDown".split(" ").indexOf(b)&&a.preventDefault();const g=["ArrowLeft","ArrowRight"],n=["ArrowDown","ArrowUp"],v="rtl"===p.getElementDir(c)&&g.includes(b)?-1:1;return("horizontal"===f?"end"===h?b===n[1]||b===g[0]:b===n[0]||b===g[1]:b===n[1]||("end"===h?b===g[0]:b===g[1]))?(a=a.shiftKey?e:q,"horizontal"===f?u+v*a:k+v*a):("horizontal"===f?"end"===h?b===n[0]||
b===g[0]:b===n[1]||b===g[1]:b===n[0]||("end"===h?b===g[1]:b===g[0]))?(a=a.shiftKey?e:q,"horizontal"===f?u-v*a:k-v*a):"Home"===b&&"horizontal"===f&&"number"===typeof x?x:"Home"===b&&"vertical"===f&&"number"===typeof t?t:"End"===b&&"horizontal"===f&&"number"===typeof l?l:"End"===b&&"vertical"===f&&"number"===typeof m?m:"PageDown"===b?"horizontal"===f?u-e:k-e:"PageUp"===b?"horizontal"===f?u+e:k+e:null};this.initialKeydownWidth=a=>{this.setInitialContentWidth();a=this.getKeyAdjustedSize(a);"number"===
typeof a&&this.setContentWidth(a)};this.initialKeydownHeight=a=>{this.setInitialContentHeight();a=this.getKeyAdjustedSize(a);"number"===typeof a&&this.setContentHeight(a)};this.separatorKeyDown=a=>{"horizontal"===this.layout?this.initialKeydownHeight(a):this.initialKeydownWidth(a)};this.separatorPointerMove=a=>{a.preventDefault();const {el:b,layout:c,initialContentWidth:q,initialContentHeight:r,position:f,initialClientX:t,initialClientY:m}=this;a="horizontal"===c?a.clientY-m:a.clientX-t;const k="vertical"===
c&&"rtl"===p.getElementDir(b)?-1:1;a="end"===f?-k*a:k*a;"horizontal"===c?this.setContentHeight(r+a):this.setContentWidth(q+a)};this.separatorPointerUp=a=>{p.isPrimaryPointerButton(a)&&(this.calciteInternalShellPanelResizeEnd.emit(),a.preventDefault(),window.removeEventListener("pointerup",this.separatorPointerUp),window.removeEventListener("pointermove",this.separatorPointerMove))};this.setInitialContentHeight=()=>{this.initialContentHeight=this.contentEl?.getBoundingClientRect().height};this.setInitialContentWidth=
()=>{this.initialContentWidth=this.contentEl?.getBoundingClientRect().width};this.separatorPointerDown=a=>{if(p.isPrimaryPointerButton(a)){this.calciteInternalShellPanelResizeStart.emit();a.preventDefault();var {separatorEl:b}=this;b&&document.activeElement!==b&&b.focus();"horizontal"===this.layout?(this.setInitialContentHeight(),this.initialClientY=a.clientY):(this.setInitialContentWidth(),this.initialClientX=a.clientX);window.addEventListener("pointerup",this.separatorPointerUp);window.addEventListener("pointermove",
this.separatorPointerMove)}};this.connectSeparator=a=>{this.disconnectSeparator();this.separatorEl=a;a?.addEventListener("pointerdown",this.separatorPointerDown)};this.disconnectSeparator=()=>{this.separatorEl?.removeEventListener("pointerdown",this.separatorPointerDown)};this.setActionBarsLayout=a=>{a.forEach(b=>b.layout=this.layout)};this.handleActionBarSlotChange=a=>{this.actionBars=a=p.slotChangeGetAssignedElements(a).filter(b=>b?.matches("calcite-action-bar"));this.setActionBarsLayout(a)};this.handleHeaderSlotChange=
a=>{this.hasHeader=p.slotChangeHasAssignedElement(a)};this.detached=this.collapsed=!1;this.displayMode="dock";this.heightScale=this.detachedHeightScale=void 0;this.widthScale="m";this.layout="vertical";this.position="start";this.resizable=!1;this.messageOverrides=this.messages=void 0;this.contentHeight=this.contentWidth=null;this.defaultMessages=void 0;this.effectiveLocale="";this.hasHeader=!1}handleDetached(a){a?this.displayMode="float":"float"===this.displayMode&&(this.displayMode="dock")}handleDisplayMode(a){this.detached=
"float"===a}handleDetachedHeightScale(a){this.heightScale=a}handleHeightScale(a){this.detachedHeightScale=a}layoutHandler(){this.setActionBarsLayout(this.actionBars)}onMessagesChange(){}connectedCallback(){z.connectConditionalSlotComponent(this);A.connectLocalized(this);w.connectMessages(this)}async componentWillLoad(){await w.setUpMessages(this)}disconnectedCallback(){z.disconnectConditionalSlotComponent(this);this.disconnectSeparator();A.disconnectLocalized(this);w.disconnectMessages(this)}componentDidLoad(){this.updateAriaValues()}effectiveLocaleChange(){w.updateMessages(this,
this.effectiveLocale)}renderHeader(){return d.h("div",{class:"content__header",hidden:!this.hasHeader,key:"header"},d.h("slot",{name:"header",onSlotchange:this.handleHeaderSlotChange}))}render(){const {collapsed:a,position:b,initialContentWidth:c,initialContentHeight:q,contentWidth:r,contentWidthMax:f,contentWidthMin:t,contentHeight:m,contentHeightMax:k,contentHeightMin:u,resizable:x,layout:l,displayMode:h}=this;var e=p.getElementDir(this.el),g="float"!==h&&x;const n=g?"horizontal"===l?m?{height:`${m}px`}:
null:r?{width:`${r}px`}:null:null;g=!a&&g?d.h("div",{"aria-label":this.messages.resize,"aria-orientation":"horizontal"===l?"vertical":"horizontal","aria-valuemax":"horizontal"==l?k:f,"aria-valuemin":"horizontal"==l?u:t,"aria-valuenow":"horizontal"==l?m??q:r??c,class:"separator",key:"separator",onKeyDown:this.separatorKeyDown,role:"separator",tabIndex:0,"touch-action":"none",ref:this.connectSeparator}):null;var v=d.h,E=d.CSS_UTILITY.rtl,F=d.CSS_UTILITY.calciteAnimate;var G="horizontal"===l?"start"===
b?d.CSS_UTILITY.calciteAnimateInDown:d.CSS_UTILITY.calciteAnimateInUp:"ltr"===e&&"end"===b||"rtl"===e&&"start"===b?d.CSS_UTILITY.calciteAnimateInLeft:d.CSS_UTILITY.calciteAnimateInRight;e=v.call(d,"div",{class:{[E]:"rtl"===e,content:!0,["content--overlay"]:"overlay"===h,["content--float"]:"float"===h,[F]:"overlay"===h,[G]:"overlay"===h},hidden:a,key:"content",style:n,ref:this.storeContentEl},this.renderHeader(),d.h("div",{class:"content__body"},d.h("slot",null)),g);e=[d.h("slot",{key:"action-bar",
name:"action-bar",onSlotchange:this.handleActionBarSlotChange}),e];"end"===b&&e.reverse();return d.h("div",{class:{container:!0}},e)}setContentWidth(a){const {contentWidthMax:b,contentWidthMin:c}=this;a=Math.round(a);this.contentWidth="number"===typeof b&&"number"===typeof c?B.clamp(a,c,b):a}updateAriaValues(){var {contentEl:a}=this;if(a=a&&getComputedStyle(a))"horizontal"===this.layout?this.updateHeights(a):this.updateWidths(a),d.forceUpdate(this)}setContentHeight(a){const {contentHeightMax:b,contentHeightMin:c}=
this;a=Math.round(a);this.contentHeight="number"===typeof b&&"number"===typeof c?B.clamp(a,c,b):a}updateWidths(a){const b=parseInt(a.getPropertyValue("max-width"),10),c=parseInt(a.getPropertyValue("min-width"),10);a=parseInt(a.getPropertyValue("width"),10);"number"!==typeof a||isNaN(a)||(this.initialContentWidth=a);"number"!==typeof b||isNaN(b)||(this.contentWidthMax=b);"number"!==typeof c||isNaN(c)||(this.contentWidthMin=c)}updateHeights(a){const b=parseInt(a.getPropertyValue("max-height"),10),c=
parseInt(a.getPropertyValue("min-height"),10);a=parseInt(a.getPropertyValue("height"),10);"number"!==typeof a||isNaN(a)||(this.initialContentHeight=a);"number"!==typeof b||isNaN(b)||(this.contentHeightMax=b);"number"!==typeof c||isNaN(c)||(this.contentHeightMin=c)}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{detached:["handleDetached"],displayMode:["handleDisplayMode"],detachedHeightScale:["handleDetachedHeightScale"],heightScale:["handleHeightScale"],
layout:["layoutHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return":host{pointer-events:none;position:relative;display:flex;flex:0 1 auto;align-items:stretch;z-index:var(--calcite-shell-panel-z-index, var(--calcite-z-index));--calcite-shell-panel-detached-max-height:unset;--calcite-shell-panel-max-height:unset;--calcite-shell-panel-shadow-block-start-internal:0 4px 8px -1px rgba(0, 0, 0, 0.08),\n    0 2px 4px -1px rgba(0, 0, 0, 0.04);--calcite-shell-panel-shadow-block-end-internal:0 -4px 8px -1px rgba(0, 0, 0, 0.08),\n    0 -2px 4px -1px rgba(0, 0, 0, 0.04);--calcite-shell-panel-shadow-inline-start-internal:4px 0 8px -1px rgba(0, 0, 0, 0.08),\n    2px 0 4px -1px rgba(0, 0, 0, 0.04);--calcite-shell-panel-shadow-inline-end-internal:-4px 0 8px -1px rgba(0, 0, 0, 0.08),\n    -2px 0 4px -1px rgba(0, 0, 0, 0.04)}.calcite--rtl.content--overlay{--calcite-shell-panel-shadow-inline-start-internal:-4px 0 8px -1px rgba(0, 0, 0, 0.08),\n    -2px 0 4px -1px rgba(0, 0, 0, 0.04);--calcite-shell-panel-shadow-inline-end-internal:4px 0 8px -1px rgba(0, 0, 0, 0.08),\n    2px 0 4px -1px rgba(0, 0, 0, 0.04)}:host([layout\x3dvertical]){z-index:var(--calcite-shell-panel-z-index, calc(var(--calcite-z-index) + 1))}:host([layout\x3dvertical][display-mode\x3doverlay]){z-index:var(--calcite-shell-panel-z-index, calc(var(--calcite-z-index-header) + 1))}:host([layout\x3dvertical][width-scale\x3ds]) .content{--calcite-shell-panel-width-internal:var(--calcite-shell-panel-width, 12vw);--calcite-shell-panel-max-width-internal:var(--calcite-shell-panel-max-width, 300px);--calcite-shell-panel-min-width-internal:var(--calcite-shell-panel-min-width, 150px)}:host([layout\x3dvertical][width-scale\x3dm]) .content{--calcite-shell-panel-width-internal:var(--calcite-shell-panel-width, 20vw);--calcite-shell-panel-max-width-internal:var(--calcite-shell-panel-max-width, 420px);--calcite-shell-panel-min-width-internal:var(--calcite-shell-panel-min-width, 240px)}:host([layout\x3dvertical][width-scale\x3dl]) .content{--calcite-shell-panel-width-internal:var(--calcite-shell-panel-width, 45vw);--calcite-shell-panel-max-width-internal:var(--calcite-shell-panel-max-width, 680px);--calcite-shell-panel-min-width-internal:var(--calcite-shell-panel-min-width, 340px)}:host([layout\x3dhorizontal][height-scale\x3ds]) .content{--calcite-shell-panel-max-height-internal:var(\n    --calcite-shell-panel-max-height,\n    var(--calcite-shell-panel-detached-max-height, 20vh)\n  )}:host([layout\x3dhorizontal]) .content{--calcite-shell-panel-min-height-internal:var(--calcite-shell-panel-min-height, 5vh);--calcite-shell-panel-max-height-internal:var(\n    --calcite-shell-panel-max-height,\n    var(--calcite-shell-panel-detached-max-height, 30vh)\n  )}:host([layout\x3dhorizontal][height-scale\x3dl]) .content{--calcite-shell-panel-max-height-internal:var(\n    --calcite-shell-panel-max-height,\n    var(--calcite-shell-panel-detached-max-height, 40vh)\n  )}.container{pointer-events:none;box-sizing:border-box;display:flex;flex:1 1 auto;align-items:stretch;background-color:transparent;font-size:var(--calcite-font-size--1);color:var(--calcite-color-text-2)}.container *{box-sizing:border-box}:host([layout\x3dhorizontal]) .container{flex-direction:column}:host(:hover) .separator:not(:hover):not(:focus),:host(:focus-within) .separator:not(:hover):not(:focus){opacity:1;background-color:var(--calcite-color-border-3)}.separator{pointer-events:auto;position:absolute;display:flex;background-color:transparent;opacity:0;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;cursor:col-resize;outline:none}.separator:hover{opacity:1;background-color:var(--calcite-color-border-2)}.separator:focus{background-color:var(--calcite-color-brand);opacity:1}:host([layout\x3dvertical]) .separator{inset-block:0px;block-size:100%;inline-size:0.125rem;cursor:col-resize}:host([layout\x3dhorizontal][position\x3dstart]) .separator{inset-block-end:0px}:host([layout\x3dhorizontal][position\x3dend]) .separator{inset-block-start:0px}:host([layout\x3dhorizontal]) .separator{inset-inline-end:0px;block-size:0.125rem;inline-size:100%;cursor:row-resize}:host([layout\x3dvertical][position\x3dstart]) .separator{inset-inline-end:-2px}:host([layout\x3dhorizontal][position\x3dstart]) .separator{inset-block-end:-2px}:host([layout\x3dvertical][position\x3dend]) .separator{inset-inline-start:-2px}:host([layout\x3dhorizontal][position\x3dend]) .separator{inset-block-start:-2px}::slotted(calcite-panel),::slotted(calcite-flow){block-size:100%;inline-size:100%;flex:1 1 auto;max-block-size:unset;max-inline-size:unset}::slotted(.calcite-match-height){display:flex;flex:1 1 auto;overflow:hidden}.content{pointer-events:auto;display:flex;flex-direction:column;flex-wrap:nowrap;align-items:stretch;align-self:stretch;background-color:var(--calcite-color-background);padding:0px;transition:max-block-size var(--calcite-animation-timing), max-inline-size var(--calcite-animation-timing)}:host([layout\x3dvertical]) .content{inline-size:var(--calcite-shell-panel-width-internal);max-inline-size:var(--calcite-shell-panel-max-width-internal);min-inline-size:var(--calcite-shell-panel-min-width-internal)}:host([layout\x3dhorizontal]) .content{block-size:var(--calcite-shell-panel-height-internal);max-block-size:var(--calcite-shell-panel-max-height-internal);min-block-size:var(--calcite-shell-panel-min-height-internal)}.content__header{display:flex;flex:0 1 auto;flex-direction:column;flex-wrap:nowrap;align-items:stretch}.content__body{display:flex;flex:1 1 auto;flex-direction:column;overflow:hidden}.content--overlay{position:absolute;--tw-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);--tw-shadow-colored:0 4px 8px -1px var(--tw-shadow-color), 0 2px 4px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host([layout\x3dvertical]) .content--overlay{inset-block-start:0px;block-size:100%}:host([layout\x3dhorizontal]) .content--overlay{inset-inline-start:0px;inline-size:100%}:host([layout\x3dvertical][position\x3dstart]) .content--overlay{inset-inline-start:100%;box-shadow:var(--calcite-shell-panel-shadow-inline-start-internal)}:host([layout\x3dvertical][position\x3dend]) .content--overlay{inset-inline-end:100%;box-shadow:var(--calcite-shell-panel-shadow-inline-end-internal)}:host([layout\x3dhorizontal][position\x3dstart]) .content--overlay{inset-block-start:100%;box-shadow:var(--calcite-shell-panel-shadow-block-start-internal)}:host([layout\x3dhorizontal][position\x3dend]) .content--overlay{inset-block-end:100%;box-shadow:var(--calcite-shell-panel-shadow-block-end-internal)}.content--float{margin-inline:0.5rem;margin-block:0.5rem auto;block-size:auto;overflow:hidden;border-radius:0.25rem;--tw-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);--tw-shadow-colored:0 4px 8px -1px var(--tw-shadow-color), 0 2px 4px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);max-block-size:var(--calcite-shell-panel-max-height-internal, calc(100% - 1rem))}.content--float ::slotted(calcite-panel),.content--float ::slotted(calcite-flow){max-block-size:unset}:host([layout\x3dhorizontal]) .content--float{margin-block:0.5rem}:host([position\x3dstart]) .content--float ::slotted(calcite-panel),:host([position\x3dstart]) .content--float ::slotted(calcite-flow),:host([position\x3dend]) .content--float ::slotted(calcite-panel),:host([position\x3dend]) .content--float ::slotted(calcite-flow){border-style:none}.content[hidden]{display:none}slot[name\x3daction-bar]::slotted(calcite-action-bar),.content ::slotted(calcite-flow),.content ::slotted(calcite-panel:not([closed])){border-width:1px;border-style:solid;border-color:var(--calcite-color-border-3)}:host([position\x3dstart]:not([slot\x3dpanel-end])) slot[name\x3daction-bar]::slotted(calcite-action-bar),:host([position\x3dstart]:not([slot\x3dpanel-end])) .content ::slotted(calcite-flow),:host([position\x3dstart]:not([slot\x3dpanel-end])) .content ::slotted(calcite-panel),:host([position\x3dend][slot\x3dpanel-start]) slot[name\x3daction-bar]::slotted(calcite-action-bar),:host([position\x3dend][slot\x3dpanel-start]) .content ::slotted(calcite-flow),:host([position\x3dend][slot\x3dpanel-start]) .content ::slotted(calcite-panel){border-inline-start:none}:host([position\x3dend]:not([slot\x3dpanel-start])) slot[name\x3daction-bar]::slotted(calcite-action-bar),:host([position\x3dend]:not([slot\x3dpanel-start])) .content ::slotted(calcite-flow),:host([position\x3dend]:not([slot\x3dpanel-start])) .content ::slotted(calcite-panel),:host([position\x3dstart][slot\x3dpanel-end]) slot[name\x3daction-bar]::slotted(calcite-action-bar),:host([position\x3dstart][slot\x3dpanel-end]) .content ::slotted(calcite-flow),:host([position\x3dstart][slot\x3dpanel-end]) .content ::slotted(calcite-panel){border-inline-end:none}:host([layout\x3dhorizontal]) slot[name\x3daction-bar]::slotted(calcite-action-bar){border-inline:0}:host([layout\x3dhorizontal][position\x3dstart]) .content ::slotted(calcite-flow),:host([layout\x3dhorizontal][position\x3dstart]) .content ::slotted(calcite-panel){border-inline:0;border-block-start:0}:host([layout\x3dhorizontal][position\x3dend]) .content ::slotted(calcite-flow),:host([layout\x3dhorizontal][position\x3dend]) .content ::slotted(calcite-panel){border-inline:0;border-block-end:0}:host([hidden]){display:none}[hidden]{display:none}"}},
[1,"calcite-shell-panel",{collapsed:[516],detached:[516],displayMode:[513,"display-mode"],detachedHeightScale:[513,"detached-height-scale"],heightScale:[513,"height-scale"],widthScale:[513,"width-scale"],layout:[513],position:[513],resizable:[516],messages:[1040],messageOverrides:[1040],contentWidth:[32],contentHeight:[32],defaultMessages:[32],effectiveLocale:[32],hasHeader:[32]},void 0,{detached:["handleDetached"],displayMode:["handleDisplayMode"],detachedHeightScale:["handleDetachedHeightScale"],
heightScale:["handleHeightScale"],layout:["layoutHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);C();y.CalciteShellPanel=D;y.defineCustomElement=C;Object.defineProperty(y,Symbol.toStringTag,{value:"Module"})});