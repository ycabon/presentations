// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","./componentsUtils","./dom","./observers"],function(l,e,f,p){function m(){"undefined"!==typeof customElements&&["calcite-tab-nav"].forEach(a=>{switch(a){case "calcite-tab-nav":customElements.get(a)||customElements.define(a,n)}})}const n=e.proxyCustomElement(class extends e.H{constructor(){super();this.__registerHost();this.__attachShadow();this.calciteTabChange=e.createEvent(this,"calciteTabChange",6);this.calciteInternalTabChange=e.createEvent(this,"calciteInternalTabChange",6);
this.animationActiveDuration=.3;this.resizeObserver=p.createObserver("resize",()=>{this.activeIndicatorEl&&(this.activeIndicatorEl.style.transitionDuration="0s",this.updateActiveWidth(),this.updateOffsetPosition())});this.handleTabFocus=(a,b,d)=>{f.focusElementInGroup(this.enabledTabTitles,b,d);a.stopPropagation()};this.handleContainerScroll=()=>{this.activeIndicatorEl.style.transitionDuration="0s";this.updateOffsetPosition()};this.syncId=this.storageId=void 0;this.selectedTitle=null;this.scale="m";
this.layout="inline";this.position="bottom";this.bordered=!1;this.selectedTabId=this.indicatorWidth=this.indicatorOffset=void 0}async selectedTabIdChanged(){localStorage&&this.storageId&&void 0!==this.selectedTabId&&null!==this.selectedTabId&&localStorage.setItem(`calcite-tab-nav-${this.storageId}`,JSON.stringify(this.selectedTabId));this.calciteInternalTabChange.emit({tab:this.selectedTabId});this.selectedTitle=await this.getTabTitleById(this.selectedTabId)}selectedTitleChanged(){this.updateOffsetPosition();
this.updateActiveWidth();this.activeIndicatorEl.style.transitionDuration=`${this.animationActiveDuration}s`}connectedCallback(){this.parentTabsEl=this.el.closest("calcite-tabs");this.resizeObserver?.observe(this.el)}componentWillLoad(){const a=`calcite-tab-nav-${this.storageId}`;localStorage&&this.storageId&&localStorage.getItem(a)&&(this.selectedTabId=JSON.parse(localStorage.getItem(a)))}componentWillRender(){const {parentTabsEl:a}=this;this.layout=a?.layout;this.bordered=a?.bordered;this.selectedTitle&&
this.updateOffsetPosition()}componentDidRender(){this.tabTitles.length&&this.tabTitles.every(a=>!a.selected)&&!this.selectedTabId&&this.tabTitles[0].getTabIdentifier().then(a=>{this.calciteInternalTabChange.emit({tab:a})})}disconnectedCallback(){this.resizeObserver?.disconnect()}render(){var a=f.getElementDir(this.el);const b=`${this.indicatorWidth}px`,d=`${this.indicatorOffset}px`;a="rtl"!==a?{width:b,left:d}:{width:b,right:d};return e.h(e.Host,{role:"tablist"},e.h("div",{class:{["tab-nav"]:!0,[`scale-${this.scale}`]:!0,
[`position-${this.position}`]:!0},onScroll:this.handleContainerScroll,ref:c=>this.tabNavEl=c},e.h("slot",null),e.h("div",{class:"tab-nav-active-indicator-container",ref:c=>this.activeIndicatorContainerEl=c},e.h("div",{class:"tab-nav-active-indicator",style:a,ref:c=>this.activeIndicatorEl=c}))))}focusPreviousTabHandler(a){this.handleTabFocus(a,a.target,"previous")}focusNextTabHandler(a){this.handleTabFocus(a,a.target,"next")}focusFirstTabHandler(a){this.handleTabFocus(a,a.target,"first")}focusLastTabHandler(a){this.handleTabFocus(a,
a.target,"last")}internalActivateTabHandler(a){this.selectedTabId=a.detail.tab?a.detail.tab:this.getIndexOfTabTitle(a.target);a.stopPropagation()}activateTabHandler(a){this.calciteTabChange.emit();a.stopPropagation()}internalCloseTabHandler(a){this.handleTabTitleClose(a.target);a.stopPropagation()}updateTabTitles(a){a.target.selected&&(this.selectedTabId=a.detail)}globalInternalTabChangeHandler(a){this.syncId&&a.target!==this.el&&a.target.syncId===this.syncId&&this.selectedTabId!==a.detail.tab&&(this.selectedTabId=
a.detail.tab);a.stopPropagation()}iconStartChangeHandler(){this.updateActiveWidth();this.updateOffsetPosition()}updateOffsetPosition(){const a=f.getElementDir(this.el),b=this.activeIndicatorContainerEl?.offsetWidth,d=this.selectedTitle?.offsetLeft,c=this.selectedTitle?.offsetWidth;this.indicatorOffset="rtl"!==a?d-this.tabNavEl?.scrollLeft:b-(d+c)+this.tabNavEl?.scrollLeft}updateActiveWidth(){this.indicatorWidth=this.selectedTitle?.offsetWidth}getIndexOfTabTitle(a,b=this.tabTitles){return b.indexOf(a)}async getTabTitleById(a){return Promise.all(this.tabTitles.map(b=>
b.getTabIdentifier())).then(b=>this.tabTitles[b.indexOf(a)])}get tabTitles(){return f.filterDirectChildren(this.el,"calcite-tab-title")}get enabledTabTitles(){return f.filterDirectChildren(this.el,"calcite-tab-title:not([disabled])").filter(a=>!a.closed)}handleTabTitleClose(a){const {tabTitles:b}=this;var d=a.selected;const c=b.reduce((g,h,q)=>h.closed?g:[...g,q],[]),k=c.length;if(1===k&&b[c[0]].closable)b[c[0]].closable=!1,this.selectedTabId=c[0],d&&b[c[0]].activateTab();else if(1<k){const g=b.findIndex(h=>
h===a);d=c.find(h=>h>g);this.selectedTabId===g&&(this.selectedTabId=d?d:k-1,b[this.selectedTabId].activateTab())}requestAnimationFrame(()=>{this.updateOffsetPosition();this.updateActiveWidth();b[this.selectedTabId].focus()})}get el(){return this}static get watchers(){return{selectedTabId:["selectedTabIdChanged"],selectedTitle:["selectedTitleChanged"]}}static get style(){return":host{position:relative;display:flex}.scale-s{min-block-size:1.5rem}.scale-m{min-block-size:2rem}.scale-l{min-block-size:2.75rem}:host([layout\x3dcenter]:not([bordered])){padding-inline:1.25rem}:host([layout\x3dcenter]:not([bordered])) .tab-nav ::slotted(calcite-tab-title:last-child){margin-inline-end:0px}:host(:not([bordered])) .scale-l ::slotted(calcite-tab-title){margin-inline-end:1.5rem}:host(:not([bordered])) .scale-m ::slotted(calcite-tab-title){margin-inline-end:1.25rem}:host(:not([bordered])) .scale-s ::slotted(calcite-tab-title){margin-inline-end:1rem}.tab-nav{display:flex;inline-size:100%;justify-content:flex-start;overflow:auto}.tab-nav-active-indicator-container{position:absolute;inset-inline:0px;inset-block-end:0px;block-size:0.125rem;inline-size:100%;overflow:hidden}.tab-nav-active-indicator{position:absolute;inset-block-end:0px;display:block;block-size:0.125rem;background-color:var(--calcite-color-brand);transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;transition-timing-function:cubic-bezier(0, 0, 0.2, 1)}:host([layout\x3dcenter]) .tab-nav{justify-content:space-evenly}:host .position-bottom .tab-nav-active-indicator{inset-block-end:unset;inset-block-start:0px}:host .position-bottom .tab-nav-active-indicator-container{inset-block-end:unset;inset-block-start:0px}:host([bordered]) .tab-nav-active-indicator-container{inset-block-end:unset}:host([bordered]) .position-bottom .tab-nav-active-indicator-container{inset-block-end:0;inset-block-start:unset}@media (forced-colors: active){.tab-nav-active-indicator{background-color:highlight}}:host([hidden]){display:none}[hidden]{display:none}"}},
[1,"calcite-tab-nav",{storageId:[513,"storage-id"],syncId:[513,"sync-id"],selectedTitle:[1040],scale:[1],layout:[1537],position:[1],bordered:[1540],indicatorOffset:[1026,"indicator-offset"],indicatorWidth:[1026,"indicator-width"],selectedTabId:[32]},[[0,"calciteInternalTabsFocusPrevious","focusPreviousTabHandler"],[0,"calciteInternalTabsFocusNext","focusNextTabHandler"],[0,"calciteInternalTabsFocusFirst","focusFirstTabHandler"],[0,"calciteInternalTabsFocusLast","focusLastTabHandler"],[0,"calciteInternalTabsActivate",
"internalActivateTabHandler"],[0,"calciteTabsActivate","activateTabHandler"],[0,"calciteInternalTabsClose","internalCloseTabHandler"],[0,"calciteInternalTabTitleRegister","updateTabTitles"],[16,"calciteInternalTabChange","globalInternalTabChangeHandler"],[0,"calciteInternalTabIconChanged","iconStartChangeHandler"]],{selectedTabId:["selectedTabIdChanged"],selectedTitle:["selectedTitleChanged"]}]);m();l.TabNav=n;l.defineCustomElement=m});