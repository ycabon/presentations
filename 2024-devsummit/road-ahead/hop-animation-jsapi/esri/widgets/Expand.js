// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("require ../chunks/tslib.es6 ../core/accessorSupport/decorators/property ../core/has ../core/Logger ../core/RandomLCG ../core/accessorSupport/decorators/subclass ./Widget ./Expand/ExpandViewModel ../chunks/componentsUtils ./support/globalCss ./support/legacyIcon ./support/widget ./support/jsxFactory ./support/decorators/messageBundle".split(" "),function(u,c,d,b,A,B,v,w,q,x,r,l,m,h,t){b=class extends w{constructor(a,e){super(a,e);this.closeOnEsc=!0;this.collapseIcon=null;this.expandTooltip=
this.content=this.collapseTooltip="";this.icon=this.iconClass=null;this.iconNumber=0;this.messagesCommon=this.messages=null;this.mode="auto";this.viewModel=new q;this.toggle=()=>{this.viewModel.expanded=!this.viewModel.expanded};this._handleKeyDown=f=>{const {closeOnEsc:g,_toggleButtonEl:n,expanded:p}=this;p&&g&&f.target!==n&&"Escape"===f.key&&("function"===typeof g?g(f):g)&&(this.expanded=!1,n?.focus())}}loadDependencies(){return x.loadCalciteComponents({button:()=>new Promise((a,e)=>u(["../chunks/calcite-button"],
a,e))})}get contentId(){return`${this.id}_controls_content`}get expandTitle(){const {expanded:a,messagesCommon:e,collapseTooltip:f,expandTooltip:g}=this;return(a?f||e?.collapse:g||e?.expand)??""}get autoCollapse(){return this.viewModel.autoCollapse}set autoCollapse(a){this.viewModel.autoCollapse=a}get collapseIconClass(){return l.legacyIcon.collapse}set collapseIconClass(a){this._overrideIfSome("collapseIconClass",a)}get expanded(){return this.viewModel.expanded}set expanded(a){this.viewModel.expanded=
a}get expandIconClass(){return m.isWidget(this.content)?this.content.iconClass:l.legacyIcon.expand}set expandIconClass(a){this._overrideIfSome("expandIconClass",a)}get expandIcon(){return m.isWidget(this.content)?this.content.icon:void 0}set expandIcon(a){this._overrideIfSome("expandIcon",a)}get group(){return this.viewModel.group}set group(a){this.viewModel.group=a}get label(){return this.messages?.widgetLabel??""}set label(a){this._overrideIfSome("label",a)}get view(){return this.viewModel.view}set view(a){this.viewModel.view=
a}expand(){this.viewModel.expanded=!0}collapse(){this.viewModel.expanded=!1}render(){const {mode:a}=this;return h.tsx("div",{class:this.classes("esri-expand",r.globalCss.widget,{["esri-expand--auto"]:"auto"===a,["esri-expand--drawer"]:"drawer"===a,["esri-expand--floating"]:"floating"===a}),onkeydown:this._handleKeyDown},this._renderMask(),this._renderContainer())}_renderContainer(){const {expanded:a}=this;return h.tsx("div",{class:this.classes("esri-expand__container",{["esri-expand__container--expanded"]:a})},
this._renderPanel(),this._renderContent())}_renderMask(){const {expanded:a}=this;return h.tsx("div",{bind:this,class:this.classes("esri-expand__mask",{["esri-expand__mask--expanded"]:a}),onclick:this.toggle})}_renderBadgeNumber(){const {expanded:a,iconNumber:e}=this;return e&&!a?h.tsx("span",{class:"esri-expand__icon-number",key:"expand__icon-number"},e):null}_renderPanelNumber(){const {iconNumber:a,expanded:e}=this;return a&&e?h.tsx("span",{class:this.classes("esri-expand__icon-number","esri-expand__icon-number--expanded"),
key:"expand__expand-icon-number"},a):null}_renderLegacyIcon(){const {collapseIconClass:a,expandIconClass:e,expanded:f}=this,g={["esri-expand__icon--expanded"]:f};null!=e&&(g[e]=!f);null!=a&&(g[a]=a===e?!0:f);return h.tsx("span",{"aria-hidden":"true",class:this.classes("esri-collapse__icon",g),key:"legacy-icon",styles:{display:"flex"}})}_renderExpandButton(){const {expanded:a,expandTitle:e,expandIcon:f,collapseIcon:g,contentId:n,expandIconClass:p,collapseIconClass:y}=this;var k=p===l.legacyIcon.expand?
"chevrons-right":void 0;const z=y===l.legacyIcon.collapse?"chevrons-left":void 0;k=a?g??z:f??k;return h.tsx("calcite-button",{afterCreate:this._storeToggleButtonEl,"aria-controls":n,"aria-expanded":a?"true":"false",class:r.globalCss.widgetButton,iconFlipRtl:"both",iconStart:k,kind:"neutral",label:e,onclick:this.toggle,scale:k?"m":"s",title:e},k?null:this._renderLegacyIcon())}_renderPanel(){return h.tsx("div",{class:"esri-expand__panel"},this._renderExpandButton(),this._renderBadgeNumber(),this._renderPanelNumber())}_renderContent(){const {expanded:a,
contentId:e,content:f}=this,g={id:e,role:"region",class:this.classes("esri-expand__content",{["esri-expand__content--expanded"]:a})};return"string"===typeof f?h.tsx("div",{innerHTML:f,key:"content__string",...g}):m.isWidget(f)?h.tsx("div",{key:"content__widget",...g},f.render()):f instanceof HTMLElement?h.tsx("div",{afterCreate:this._attachToNode,bind:f,key:"content__html-element",...g}):m.hasDomNode(f)?h.tsx("div",{afterCreate:this._attachToNode,bind:f.domNode,key:"content__node",...g}):null}_attachToNode(a){a.appendChild(this)}_storeToggleButtonEl(a){this._toggleButtonEl=
a}};c.__decorate([d.property({readOnly:!0})],b.prototype,"contentId",null);c.__decorate([d.property({readOnly:!0})],b.prototype,"expandTitle",null);c.__decorate([d.property()],b.prototype,"autoCollapse",null);c.__decorate([d.property()],b.prototype,"closeOnEsc",void 0);c.__decorate([d.property()],b.prototype,"collapseIconClass",null);c.__decorate([d.property()],b.prototype,"collapseIcon",void 0);c.__decorate([d.property()],b.prototype,"collapseTooltip",void 0);c.__decorate([d.property()],b.prototype,
"content",void 0);c.__decorate([d.property()],b.prototype,"expanded",null);c.__decorate([d.property()],b.prototype,"expandIconClass",null);c.__decorate([d.property()],b.prototype,"expandIcon",null);c.__decorate([d.property()],b.prototype,"expandTooltip",void 0);c.__decorate([d.property()],b.prototype,"group",null);c.__decorate([d.property()],b.prototype,"iconClass",void 0);c.__decorate([d.property()],b.prototype,"icon",void 0);c.__decorate([d.property()],b.prototype,"iconNumber",void 0);c.__decorate([d.property()],
b.prototype,"label",null);c.__decorate([d.property(),t.messageBundle("esri/widgets/Expand/t9n/Expand")],b.prototype,"messages",void 0);c.__decorate([d.property(),t.messageBundle("esri/t9n/common")],b.prototype,"messagesCommon",void 0);c.__decorate([d.property()],b.prototype,"mode",void 0);c.__decorate([d.property()],b.prototype,"view",null);c.__decorate([d.property({type:q})],b.prototype,"viewModel",void 0);return b=c.__decorate([v.subclass("esri.widgets.Expand")],b)});