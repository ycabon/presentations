// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
require({cache:{"esri/support/actions/actionUtils":function(){define(["exports","../../intl","../../intl/substitute"],function(e,c,h){e.getActionIcon=function(u){if(u.icon)return u.icon;if(!("image"in u&&u.image||u.className))return"question"};e.getActionStyles=function(u){return u?{backgroundImage:`url(${u})`}:{}};e.substituteActionImage=function({action:u,feature:A}){A=A?.attributes;return(u="image"in u?u.image:void 0)&&A?h.substitute(u,A):u??""};Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})})},
"esri/widgets/LayerList/css":function(){define(["exports","../support/legacyIcon"],function(e,c){e.css={base:"esri-layer-list",widgetIcon:c.legacyIcon.layers,filterNoResults:"esri-layer-list__filter-no-results",item:"esri-layer-list__item",itemActive:"esri-layer-list__item--active",itemContent:"esri-layer-list__item-content",itemContentBottom:"esri-layer-list__item-content-bottom",itemMessage:"esri-layer-list__item-message",itemInvisibleAtScale:"esri-layer-list__item--invisible-at-scale",itemActionIcon:"esri-layer-list__item-action-icon",
itemActionImage:"esri-layer-list__item-action-image",statusIndicator:"esri-layer-list__status-indicator",publishing:"esri-layer-list__publishing",updating:"esri-layer-list__updating",connectionStatus:"esri-layer-list__connection-status",connectionStatusConnected:"esri-layer-list__connection-status--connected",visibleToggle:"esri-layer-list__visible-toggle",visibleIcon:"esri-layer-list__visible-icon"};Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})})},"esri/widgets/LayerList/LayerListViewModel":function(){define("../../chunks/tslib.es6 ../../core/Collection ../../core/Evented ../../core/reactiveUtils ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass ./ListItem ./support/layerListUtils".split(" "),
function(e,c,h,u,A,w,m,L,M,d,p){const t=c.ofType(d);c=class extends h.EventedAccessor{constructor(f){super(f);this.checkPublishStatusEnabled=!1;this.listItemCreatedFunction=null;this.operationalItems=new t;this.view=null}initialize(){this.addHandles([u.watch(()=>!0===this.view?.ready,()=>this._viewHandles(),u.initial),u.watch(()=>[this.listItemCreatedFunction,this.checkPublishStatusEnabled],()=>this._recompileList())],"view")}destroy(){this.view=null;this.operationalItems.removeAll()}get state(){const {view:f}=
this;return f?.ready?"ready":f?"loading":"disabled"}triggerAction(f,v){f&&!f.disabled&&this.emit("trigger-action",{action:f,item:v})}moveListItem(f,v,g,n){const r=f?.layer;if(r){var F=this.view?.map?.layers,J=v?p.getItemLayers(v):F;F=g?p.getItemLayers(g):F;if(J&&F){var {operationalItems:k}=this,y=g?.children||k;n=F.length-n;f.parent=g||null;(v?.children||k).remove(f);J.remove(r);y.includes(f)||y.add(f,n);F.includes(r)||F.add(r,n);this._compileList()}}}_createLayerViewHandles(f){this.removeHandles("layer-views");
this._compileList();f&&this.addHandles(f.on("change",()=>this._compileList()),"layer-views")}_createMapLayerHandles(f){this.removeHandles("map-layers");this._compileList();f&&this.addHandles(f.on("change",()=>this._compileList()),"map-layers")}_createListItem(f){const {view:v,listItemCreatedFunction:g,checkPublishStatusEnabled:n}=this;return new d({checkPublishStatusEnabled:n,layer:f,listItemCreatedFunction:g,view:v})}_removeAllItems(){this.operationalItems.removeAll()}_getViewableLayers(f){if(f)return f.filter(v=>
"hide"!==p.findLayerListMode(v))}_watchLayersListMode(f){this.removeHandles("layer-list-mode");f&&f.forEach(v=>{"listMode"in v&&this.addHandles(u.watch(()=>v.listMode,()=>this._compileList()),"layer-list-mode")})}_compileList(){var f=this.view?.map?.layers;this._watchLayersListMode(f);f=this._getViewableLayers(f);f?.length?(this._createNewItems(f),this._removeItems(f),this._sortItems(f)):this._removeAllItems()}_createNewItems(f){const {operationalItems:v}=this;f.forEach(g=>{v.some(n=>n.layer===g)||
v.add(this._createListItem(g))})}_removeItems(f){const {operationalItems:v}=this,g=[];v.forEach(n=>{n&&f&&f.includes(n.layer)||g.push(n)});v.removeMany(g)}_sortItems(f){const {operationalItems:v}=this;v.sort((g,n)=>{g=f.indexOf(g.layer);n=f.indexOf(n.layer);return g>n?-1:g<n?1:0})}_recompileList(){this._removeAllItems();this._compileList()}_viewHandles(){const {view:f}=this;this.removeHandles(["map-layers","layer-views","view-layers"]);f?.ready?this.addHandles([u.watch(()=>this.view?.map?.allLayers,
v=>this._createMapLayerHandles(v),u.initial),u.watch(()=>this.view?.allLayerViews,v=>this._createLayerViewHandles(v),u.initial)],"view-layers"):this._removeAllItems()}};e.__decorate([A.property()],c.prototype,"checkPublishStatusEnabled",void 0);e.__decorate([A.property()],c.prototype,"listItemCreatedFunction",void 0);e.__decorate([A.property({type:t})],c.prototype,"operationalItems",void 0);e.__decorate([A.property({readOnly:!0})],c.prototype,"state",null);e.__decorate([A.property()],c.prototype,
"view",void 0);return c=e.__decorate([M.subclass("esri.widgets.LayerList.LayerListViewModel")],c)})},"esri/widgets/LayerList/ListItem":function(){define("../../chunks/tslib.es6 ../../core/Accessor ../../core/arrayUtils ../../core/Collection ../../core/Identifiable ../../core/reactiveUtils ../../core/accessorSupport/decorators/property ../../core/accessorSupport/decorators/cast ../../core/has ../../core/accessorSupport/decorators/subclass ../../core/accessorSupport/get ../../support/actions/ActionBase ../../support/actions/ActionButton ../../support/actions/ActionSlider ../../support/actions/ActionToggle ./ListItemPanel ./support/layerListUtils".split(" "),
function(e,c,h,u,A,w,m,L,M,d,p,t,f,v,g,n,r){var F;M=u.ofType({key:"type",defaultKeyValue:"button",base:t,typeMap:{button:f,toggle:g,slider:v}});const J=u.ofType(M);c=F=class extends A.IdentifiableMixin(c){constructor(k){super(k);this.actionsSections=new J;this.checkPublishStatusEnabled=this.actionsOpen=!1;this.children=new (u.ofType(F));this.childrenSortable=!0;this.hidden=!1;this.listItemCreatedFunction=this.layerView=this.layer=null;this.open=!1;this.parent=this.panel=null;this.sortable=!0;this.view=
null}initialize(){this.addHandles([w.watch(()=>[this.layer,this.layer?.listMode],()=>this._watchLayerProperties(this.layer),w.initial),w.watch(()=>this.checkPublishStatusEnabled,k=>this._updateChildrenPublishing(k),w.initial),w.watch(()=>this.view,k=>this._updateChildrenView(k),w.initial),w.watch(()=>this.panel,k=>this._setListItemOnPanel(k),w.initial),w.watch(()=>[this.layer,this.view],()=>this._getLayerView(),w.initial)]);"function"===typeof this.listItemCreatedFunction&&this.listItemCreatedFunction.call(null,
{item:this})}destroy(){this.view=null}get connectionStatus(){const {layerView:k,publishing:y}=this;if(!y&&k&&"connectionStatus"in k)return k.connectionStatus}get error(){return this.layer?.loadError}get incompatible(){const {layerView:k}=this;return k&&"spatialReferenceSupported"in k?!k.spatialReferenceSupported:!1}castPanel(k){this.panel?.open&&!k.hasOwnProperty("open")&&(k.open=!0);return k?new n(k):null}get title(){const k=p.get(this,"layer.layer");return(!k||k&&p.get(this,"layer.layer.loaded"))&&
p.get(this,"layer.title")||p.get(this,"layer.attributes.title")||""}set title(k){this._override("title",k)}get publishing(){const {layer:k,checkPublishStatusEnabled:y}=this;return y&&k&&"publishingInfo"in k&&"publishing"===k.publishingInfo?.status}get updating(){const {layerView:k,connectionStatus:y,layer:G,publishing:x}=this;return x||y?!1:k?k.updating:"loading"===G?.loadStatus||!1}get visible(){return this.layer?.visible}set visible(k){const y=this.layer;y&&(y.visible=k)}get visibleAtCurrentScale(){return!r.isLayerOutsideScaleRange(this.layer,
this.view?.scale)}get visibilityMode(){return r.findLayerVisibilityMode(this.layer)}clone(){return new F({actionsSections:this.actionsSections.clone(),actionsOpen:this.actionsOpen,checkPublishStatusEnabled:this.checkPublishStatusEnabled,children:this.children.clone(),childrenSortable:this.childrenSortable,hidden:this.hidden,layer:this.layer,listItemCreatedFunction:this.listItemCreatedFunction,open:this.open,panel:this.panel,parent:this.parent,sortable:this.sortable,title:this.title,view:this.view,
visible:this.visible})}_setListItemOnPanel(k){k&&(k.listItem=this)}_updateChildrenPublishing(k){const y=this.children;y&&y.forEach(G=>G.checkPublishStatusEnabled=k)}_updateChildrenView(k){const y=this.children;y&&y.forEach(G=>G.view=k)}_addChildren(k){this.removeHandles("child-list-mode");this.children.removeAll();if(k){k.forEach(G=>{this.addHandles(w.watch(()=>G.listMode,()=>this._addChildren(k)),"child-list-mode")});var y=k.filter(G=>"hide"!==r.findLayerListMode(G));this.children.addMany(this._makeChildren(y))}}_watchSublayerChanges(k){k&&
this.addHandles(k.on("change",()=>{this._addChildren(k)}),"layer")}_initializeChildLayers(k){this._addChildren(k);this._watchSublayerChanges(k)}_makeChildren(k){return k.map(y=>r.canDisplayLayer(y)?new F({layer:y,checkPublishStatusEnabled:this.checkPublishStatusEnabled,listItemCreatedFunction:this.listItemCreatedFunction,parent:this,view:this.view}):null).filter(h.isSome).reverse()}_watchLayerProperties(k){this.removeHandles("layer");this.removeHandles("child-list-mode");if(k)if("hide-children"===
r.findLayerListMode(k))this.children.removeAll();else{var y=r.getNormalizedChildLayerProperty(k);y&&this.addHandles(w.watch(()=>k[y],G=>{k.hasOwnProperty(y)&&this._initializeChildLayers(G)},w.initial),"layer")}}async _getLayerView(){const {layer:k,view:y}=this;if(k&&y)try{const G=await y.whenLayerView(k);G.layer===this.layer&&this._set("layerView",G)}catch{}}};e.__decorate([m.property({type:J})],c.prototype,"actionsSections",void 0);e.__decorate([m.property()],c.prototype,"actionsOpen",void 0);e.__decorate([m.property()],
c.prototype,"checkPublishStatusEnabled",void 0);e.__decorate([m.property({type:u})],c.prototype,"children",void 0);e.__decorate([m.property()],c.prototype,"childrenSortable",void 0);e.__decorate([m.property({readOnly:!0})],c.prototype,"connectionStatus",null);e.__decorate([m.property({readOnly:!0})],c.prototype,"error",null);e.__decorate([m.property()],c.prototype,"hidden",void 0);e.__decorate([m.property({readOnly:!0})],c.prototype,"incompatible",null);e.__decorate([m.property()],c.prototype,"layer",
void 0);e.__decorate([m.property({readOnly:!0})],c.prototype,"layerView",void 0);e.__decorate([m.property()],c.prototype,"listItemCreatedFunction",void 0);e.__decorate([m.property()],c.prototype,"open",void 0);e.__decorate([m.property({type:n})],c.prototype,"panel",void 0);e.__decorate([L.cast("panel")],c.prototype,"castPanel",null);e.__decorate([m.property()],c.prototype,"parent",void 0);e.__decorate([m.property()],c.prototype,"sortable",void 0);e.__decorate([m.property()],c.prototype,"title",null);
e.__decorate([m.property({readOnly:!0})],c.prototype,"publishing",null);e.__decorate([m.property({readOnly:!0})],c.prototype,"updating",null);e.__decorate([m.property()],c.prototype,"view",void 0);e.__decorate([m.property()],c.prototype,"visible",null);e.__decorate([m.property({readOnly:!0})],c.prototype,"visibleAtCurrentScale",null);e.__decorate([m.property({readOnly:!0})],c.prototype,"visibilityMode",null);return c=F=e.__decorate([d.subclass("esri.widgets.LayerList.ListItem")],c)})},"esri/support/actions/ActionSlider":function(){define("../../chunks/tslib.es6 ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass ./ActionBase".split(" "),
function(e,c,h,u,A,w,m){var L;h=L=class extends m{constructor(M){super(M);this.displayValueEnabled=!1;this.max=1;this.min=0;this.step=.1;this.type="slider";this.value=null}clone(){return new L({active:this.active,className:this.className,disabled:this.disabled,id:this.id,indicator:this.indicator,title:this.title,visible:this.visible,displayValueEnabled:this.displayValueEnabled,max:this.max,min:this.min,step:this.step,value:this.value})}};e.__decorate([c.property()],h.prototype,"displayValueEnabled",
void 0);e.__decorate([c.property()],h.prototype,"max",void 0);e.__decorate([c.property()],h.prototype,"min",void 0);e.__decorate([c.property()],h.prototype,"step",void 0);e.__decorate([c.property()],h.prototype,"value",void 0);return h=L=e.__decorate([w.subclass("esri.support.Action.ActionSlider")],h)})},"esri/widgets/LayerList/ListItemPanel":function(){define("require ../../chunks/tslib.es6 ../../core/Identifiable ../../core/maybe ../../core/reactiveUtils ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass ../Widget ./support/layerListUtils ../support/widget ../support/jsxFactory".split(" "),
function(e,c,h,u,A,w,m,L,M,d,p,t,f,v){h=class extends h.IdentifiableMixin(p){constructor(g,n){super(g,n);this.content=this._legend=null;this.flowEnabled=!1;this.listItem=this.image=null;this.open=!1;this.visible=!0}initialize(){this.addHandles(A.watch(()=>this.content,g=>this._createLegend(g),A.initial))}destroy(){this._legend=u.destroyMaybe(this._legend)}get className(){const {image:g}=this,n=this._getFirstWidget();return this._get("className")||(!g&&n?n.iconClass??"":"")}set className(g){this._override("className",
g)}get disabled(){const {listItem:g,_legend:n,content:r}=this;return g?Array.isArray(r)&&1<r.length?!1:n?!n.activeLayerInfos?.length||!g.visibleAtCurrentScale||!g.visible:!1:!0}set disabled(g){this._overrideIfSome("disabled",g)}get title(){return this._get("title")||(this._getFirstWidget()?.label??"")}set title(g){this._override("title",g)}render(){return v.tsx("div",{class:"esri-list-item-panel"},this._renderContents())}_renderContent(g){const {_legend:n,disabled:r}=this;return!g||r?null:"legend"===
g&&n?v.tsx("div",{key:"legend-widget"},n.render()):"string"===typeof g?v.tsx("div",{innerHTML:g,key:g}):f.isWidget(g)?v.tsx("div",{key:"content-widget"},g.render()):g instanceof HTMLElement?v.tsx("div",{afterCreate:this._attachToNode,bind:g,key:"content-element"}):null}_renderContents(){const {content:g}=this;return Array.isArray(g)?g.map(n=>this._renderContent(n)):this._renderContent(g)}_getLegendOptions(){const {listItem:g}=this;if(!g)return{};const {layer:n,view:r}=g;return n&&r?{view:r,layerInfos:[t.getLegendLayerInfo(n)]}:
{}}async _createLegend(g){if(this._hasLegend(g)&&!this._legend){({default:g}=await new Promise((F,J)=>e(["../Legend"],k=>F(Object.freeze(Object.defineProperty({__proto__:null,default:k},Symbol.toStringTag,{value:"Module"}))),J)));var {listItem:n}=this,r=new g(this._getLegendOptions());this._legend=r;this.notifyChange("className");this.notifyChange("title");g=A.watch(()=>[n?.view,n?.layer,n?.layer?.source,n?.layer?.parent],()=>this._updateLegend(r),A.initial);this.addHandles(g,"legends");this.scheduleRender()}}_hasLegend(g){return"legend"===
g?!0:null!=g&&(Array.isArray(g)?g.includes("legend"):!1)}_attachToNode(g){g.appendChild(this)}_updateLegend(g){g.set(this._getLegendOptions());this.scheduleRender()}_getWidget(g){return"legend"===g?this._legend:f.isWidget(g)?g:null}_getFirstWidget(){const {content:g}=this;return Array.isArray(g)?g.map(n=>this._getWidget(n)).find(n=>n):this._getWidget(g)}};c.__decorate([w.property()],h.prototype,"_legend",void 0);c.__decorate([w.property()],h.prototype,"className",null);c.__decorate([w.property()],
h.prototype,"content",void 0);c.__decorate([w.property()],h.prototype,"disabled",null);c.__decorate([w.property()],h.prototype,"flowEnabled",void 0);c.__decorate([w.property()],h.prototype,"image",void 0);c.__decorate([w.property()],h.prototype,"listItem",void 0);c.__decorate([w.property()],h.prototype,"open",void 0);c.__decorate([w.property()],h.prototype,"title",null);c.__decorate([w.property()],h.prototype,"visible",void 0);return h=c.__decorate([d.subclass("esri.widgets.LayerList.ListItemPanel")],
h)})},"esri/widgets/LayerList/support/layerListUtils":function(){define(["exports"],function(e){function c(d){if(d)return null!=d.listMode?d.listMode:void 0}function h(d){return null!=d&&"minScale"in d&&null!=d.minScale?d.minScale:void 0}function u(d){return null!=d&&"maxScale"in d&&null!=d.maxScale?d.maxScale:void 0}function A(d){if(d&&!("type"in d&&"wmts"===d.type)&&d.listMode!==M.hideChildren)return"sublayers"in d?"sublayers":"layers"in d?"layers":void 0}function w(d,p){d?.sort((t,f)=>{t="uid"in
t?p.indexOf(t.uid):-1;f="uid"in f?p.indexOf(f.uid):-1;return t>f?-1:t<f?1:0})}function m(d){return null!=d&&"layer"in d&&null!=d.layer}function L(d){return d&&"capabilities"in d&&null!=d.capabilities&&"exportMap"in d.capabilities?d.capabilities.exportMap:void 0}const M={hide:"hide",hideChildren:"hide-children"};e.canDisplayLayer=function(d){return c(d)!==M.hide};e.canSortSublayers=function(d){d=(d?.layer&&m(d.layer)?d.layer.layer:void 0)??d?.layer;if(!d)return!1;d=L(d);return(null!=d&&"supportsDynamicLayers"in
d?d.supportsDynamicLayers:void 0)??!0};e.findLayerListMode=c;e.findLayerMaxScale=u;e.findLayerMinScale=h;e.findLayerVisibilityMode=function(d){if(!d)return"inherited";var p=m(d)?d.layer:d;p=L(p);p=null!=p&&"supportsSublayerVisibility"in p?p.supportsSublayerVisibility:void 0;return null!=p?p?"independent":"inherited":"visibilityMode"in d&&null!=d.visibilityMode?d.visibilityMode:"independent"};e.getItem=function(d){return d?.["data-item"]};e.getItemLayers=function(d){return(d=d?.layer)&&"layers"in d?
d.layers:null};e.getLayerType=function(d){return d?.getAttribute("data-layer-type")};e.getLegendLayerInfo=function(d){var p=m(d)?d:null;const t=d?.parent;return(p=null!=t&&"type"in t&&"map-image"===t.type?p?.source:null)&&t?{layer:t,title:"",sublayerIds:[p.mapLayerId]}:{layer:d,title:""}};e.getNormalizedChildLayerProperty=A;e.getStatusIcon=function({connectionStatus:d,isUpdating:p,publishing:t}){const f=!!d;return f||t||p?f?"connected"===d?"beacon":"offline":t?"stop-square":"bullet-point":"blank"};
e.getVisibilityIcon=function({exclusive:d,visible:p,visibilityAppearance:t}){t="checkbox"===t;return p?d?"circle-f":t?"check-square-f":"view-visible":d?"circle":t?"square":"view-hide"};e.isLayerOutsideScaleRange=function(d,p){if(!d||null==p||isNaN(p))return!1;var t=h(d);d=u(d);t=null!=t&&!isNaN(t)&&0<t&&p>t;p=null!=d&&!isNaN(d)&&0<d&&p<d;return t||p};e.isSublayer=m;e.listItemHasChildren=function({children:d,error:p,incompatible:t}){return!!d?.filter(f=>!f.hidden).length&&!p&&!t};e.sortChildLayersToIds=
function(d,p){if(d=d?.layer){var t=A(d);if(t){if("layers"===t&&"layers"in d)var f=d.layers;else"sublayers"===t&&"sublayers"in d&&(f=d.sublayers);w(f,p)}}};e.sortLayersToIds=w;e.sortableRoot="root";Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})})},"esri/widgets/LayerList/LayerListVisibleElements":function(){define("../../chunks/tslib.es6 ../../core/Accessor ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass".split(" "),
function(e,c,h,u,A,w,m){c=class extends c{constructor(){super(...arguments);this.filter=this.errors=this.collapseButton=this.closeButton=!1;this.flow=!0;this.heading=!1;this.statusIndicators=!0}};e.__decorate([h.property({type:Boolean,nonNullable:!0})],c.prototype,"closeButton",void 0);e.__decorate([h.property({type:Boolean,nonNullable:!0})],c.prototype,"collapseButton",void 0);e.__decorate([h.property({type:Boolean,nonNullable:!0})],c.prototype,"errors",void 0);e.__decorate([h.property({type:Boolean,
nonNullable:!0})],c.prototype,"filter",void 0);e.__decorate([h.property({type:Boolean,nonNullable:!0})],c.prototype,"flow",void 0);e.__decorate([h.property({type:Boolean,nonNullable:!0})],c.prototype,"heading",void 0);e.__decorate([h.property({type:Boolean,nonNullable:!0})],c.prototype,"statusIndicators",void 0);return c=e.__decorate([m.subclass("esri.widgets.LayerList.LayerListVisibleElements")],c)})},"esri/widgets/support/globalCss":function(){define(["exports"],function(e){e.globalCss={anchor:"esri-widget__anchor",
anchorDisabled:"esri-widget__anchor--disabled",button:"esri-button",buttonDisabled:"esri-button--disabled",buttonHalf:"esri-button--half",buttonSecondary:"esri-button--secondary",buttonSmall:"esri-button--small",buttonTertiary:"esri-button--tertiary",buttonThird:"esri-button--third",disabled:"esri-disabled",disabledElement:"esri-disabled-element",empty:"esri-widget__content--empty",emptyIllustration:"esri-widget__content-illustration--empty",heading:"esri-widget__heading",hidden:"esri-hidden",input:"esri-input",
interactive:"esri-interactive",loader:"esri-widget__loader",loaderAnimation:"esri-widget__loader-animation",loaderText:"esri-widget__loader-text",menu:"esri-menu",menuHeader:"esri-menu__header",menuItem:"esri-menu__list-item",menuItemActive:"esri-menu__list-item--active",menuItemFocus:"esri-menu__list-item--focus",menuList:"esri-menu__list",noBookmarksIcon:"esri-widget__no-bookmark-icon",panel:"esri-widget--panel",panelHeightOnly:"esri-widget--panel-height-only",primaryTick:"primary-tick",primaryTickAmPm:"primary-tick__ampm",
primaryTickLabel:"primary-tick__label",rotating:"esri-rotating",secondaryTick:"secondary-tick",select:"esri-select",table:"esri-widget__table",widget:"esri-widget",widgetButton:"esri-widget--button",widgetButtonActive:"esri-widget--button-active",widgetDisabled:"esri-widget--disabled"};Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})})},"*noref":1}});
define("require ../chunks/tslib.es6 ../core/Collection ../core/deprecate ../core/Logger ../core/ReactiveMap ../core/accessorSupport/decorators/property ../core/has ../core/RandomLCG ../core/accessorSupport/decorators/subclass ../support/actions/actionUtils ./Widget ./LayerList/css ./LayerList/LayerListViewModel ./LayerList/LayerListVisibleElements ./LayerList/ListItem ./LayerList/support/layerListUtils ../chunks/componentsUtils ./support/globalCss ./support/widgetUtils ./support/decorators/messageBundle ./support/decorators/vmEvent ./support/jsxFactory".split(" "),function(e,
c,h,u,A,w,m,L,M,d,p,t,f,v,g,n,r,F,J,k,y,G,x){const P=h.ofType(n);h=class extends t{constructor(a,b){super(a,b);this._activeItem=null;this._tooltipReferenceMap=new w;this._focusPanelFlowItem=this._focusRootFlowItem=!1;this._selectedDragItemLayerUid=this._lastDragDetail=null;this.dragEnabled=this.collapsed=!1;this.filterText=this.filterPlaceholder="";this.headingLevel=2;this.icon=null;this.iconClass=f.css.widgetIcon;this.messagesCommon=this.messages=this.listItemCanReceiveFunction=this.listItemCanGiveFunction=
null;this.selectedItems=new P;this.selectionMode="none";this.viewModel=new v;this.visibilityAppearance="default";this.visibleElements=new g;this._canMove=({dragEl:l,fromEl:q,toEl:B},z)=>{z="pull"===z?this.listItemCanGiveFunction:this.listItemCanReceiveFunction;l=r.getItem(l);if(!l?.sortable)return!1;const D=r.getItem(q);var C=r.getLayerType(q);const N=r.getItem(B);var H=r.getLayerType(B);C=!!C&&!!H&&C===H;H={selected:l,from:D,to:N};return q.group&&B.group&&"function"===typeof z?z.call(null,H):C&&
"sublayer"!==l?.layer?.type&&"map-image"!==D?.layer?.type&&"map-image"!==N?.layer?.type};this._clearActiveItem=()=>{this._activeItem=null};this._setActiveItem=l=>{"default"===this.visibilityAppearance&&(l=Array.from(l.composedPath()).find(q=>q.classList?.contains(f.css.item)),this._activeItem=r.getItem(l))};this._onCalciteListOrderChange=l=>{const {_lastDragDetail:q,operationalItems:B}=this,{toEl:z,fromEl:D,dragEl:C,oldIndex:N,newIndex:H}=l;if(D&&z&&(q?.newIndex!==H||q?.dragEl!==C||q?.toEl!==z||q?.fromEl!==
D))if(this._lastDragDetail=l,D===z){var K=r.getItem(C);K&&(l=K.layer.uid,K=(K.parent?.children||B).map(I=>I.layer.uid).toArray(),K.splice(N,1),K.splice(H,0,l),this._sortLayers(D,K))}else this._moveLayerFromChildList({toEl:z,fromEl:D,dragEl:C,newIndex:H})}}loadDependencies(){return F.loadCalciteComponents({action:()=>new Promise((a,b)=>e(["../chunks/calcite-action"],a,b)),"action-group":()=>new Promise((a,b)=>e(["../chunks/calcite-action-group"],a,b)),"action-menu":()=>new Promise((a,b)=>e(["../chunks/calcite-action-menu"],
a,b)),button:()=>new Promise((a,b)=>e(["../chunks/calcite-button"],a,b)),flow:()=>new Promise((a,b)=>e(["../chunks/calcite-flow"],a,b)),"flow-item":()=>new Promise((a,b)=>e(["../chunks/calcite-flow-item"],a,b)),icon:()=>new Promise((a,b)=>e(["../chunks/calcite-icon"],a,b)),list:()=>new Promise((a,b)=>e(["../chunks/calcite-list"],a,b)),"list-item":()=>new Promise((a,b)=>e(["../chunks/calcite-list-item"],a,b)),notice:()=>new Promise((a,b)=>e(["../chunks/calcite-notice"],a,b)),tooltip:()=>new Promise((a,
b)=>e(["../chunks/calcite-tooltip"],a,b))})}destroy(){this._tooltipReferenceMap.clear()}get label(){return this.messages?.widgetLabel??""}set label(a){this._overrideIfSome("label",a)}get listItemCreatedFunction(){return this.viewModel.listItemCreatedFunction}set listItemCreatedFunction(a){this.viewModel.listItemCreatedFunction=a}get multipleSelectionEnabled(){u.deprecatedProperty(A.getLogger(this),"multipleSelectionEnabled",{replacement:"selectionMode",version:"4.29",warnOnce:!0});return"multiple"===
this.selectionMode}set multipleSelectionEnabled(a){u.deprecatedProperty(A.getLogger(this),"multipleSelectionEnabled",{replacement:"selectionMode",version:"4.29",warnOnce:!0});this.selectionMode=a?"multiple":this.selectionEnabled?"single":"none"}get operationalItems(){return this.viewModel.operationalItems}set operationalItems(a){this.viewModel.operationalItems=a}get selectionEnabled(){u.deprecatedProperty(A.getLogger(this),"selectionEnabled",{replacement:"selectionMode, dragEnabled",version:"4.29",
warnOnce:!0});return"none"!==this.selectionMode&&this.dragEnabled}set selectionEnabled(a){u.deprecatedProperty(A.getLogger(this),"selectionEnabled",{replacement:"selectionMode, dragEnabled",version:"4.29",warnOnce:!0});this.selectionMode=(this.dragEnabled=a)?this.multipleSelectionEnabled?"multiple":"single":"none"}get view(){return this.viewModel.view}set view(a){this.viewModel.view=a}triggerAction(a,b){return this.viewModel.triggerAction(a,b)}render(){var a=this.viewModel?.state;a={[J.globalCss.hidden]:"loading"===
a,[J.globalCss.disabled]:"disabled"===a};const b=this.operationalItems?.filter(l=>!l.hidden&&(this.visibleElements.errors||!l.error));return x.tsx("div",{class:this.classes(f.css.base,J.globalCss.widget,J.globalCss.panel,a)},b?.length?[this._renderItemTooltips(b),this._renderItems(b)]:this._renderNoItems())}_renderItemTooltip(a){const {_tooltipReferenceMap:b,messages:l}=this;return a?x.tsx("calcite-tooltip",{key:`tooltip-${a.layer.uid}`,referenceElement:b.get(a.layer.uid)},l.layerIncompatibleTooltip):
null}_renderItemTooltipNodes(a){return a.incompatible?this._renderItemTooltip(a):a.children?.filter(b=>!b.hidden).toArray().map(b=>this._renderItemTooltipNodes(b))}_renderItemTooltips(a){return a?.toArray().map(b=>this._renderItemTooltipNodes(b))}_renderNoItemsMessage(){return x.tsx("div",{slot:"message"},this.messages.noItemsToDisplay)}_renderNoItems(){return x.tsx("div",{class:f.css.itemMessage,key:"esri-layer-list__no-items"},x.tsx("calcite-notice",{icon:"information",kind:"info",open:!0,scale:"m",
width:"full"},this._renderNoItemsMessage()))}_renderPanelFlowItems(a){return a?a.flatten(b=>b.children).filter(b=>!b.hidden).toArray().filter(({panel:b})=>b?.open&&!b.disabled&&b.flowEnabled).map(({title:b,panel:l})=>{const q=()=>this._handlePanelFlowItemBack(l);return x.tsx("calcite-flow-item",{afterCreate:this._focusPanelFlowItemNode,afterUpdate:this._focusPanelFlowItemNode,bind:this,description:b,heading:l.title,headingLevel:this.headingLevel,key:`flow-panel-${l.uid}`,onCalciteFlowItemBack:B=>
{B.preventDefault();q()}},l.render(),x.tsx("calcite-button",{appearance:"transparent",onclick:q,slot:"footer-actions",width:"full"},this.messagesCommon.back))}):[]}_handlePanelFlowItemBack(a){a.open=!1;this._focusRootFlowItem=!0}_focusRootFlowItemNode(a){this._focusRootFlowItem&&(this._focusRootFlowItem=!1,requestAnimationFrame(()=>a?.setFocus()))}_focusPanelFlowItemNode(a){this._focusPanelFlowItem&&(this._focusPanelFlowItem=!1,requestAnimationFrame(()=>a?.setFocus()))}_renderItems(a){const {visible:b,
collapsed:l,visibleElements:{closeButton:q,collapseButton:B,filter:z,heading:D,flow:C},dragEnabled:N,selectionMode:H,filterText:K,filterPlaceholder:I,messages:O}=this;a=[x.tsx("calcite-flow-item",{afterCreate:this._focusRootFlowItemNode,afterUpdate:this._focusRootFlowItemNode,bind:this,closable:q,closed:!b,collapsed:l,collapsible:B,heading:D?O.widgetLabel:void 0,headingLevel:this.headingLevel,key:"root-flow-item",onCalciteFlowItemClose:()=>this.visible=!1},x.tsx("calcite-list",{afterCreate:E=>{E.addEventListener("focusin",
this._setActiveItem);E.addEventListener("focusout",this._clearActiveItem)},afterRemoved:E=>{E.removeEventListener("focusin",this._setActiveItem);E.removeEventListener("focusout",this._clearActiveItem)},canPull:E=>this._canMove(E,"pull"),canPut:E=>this._canMove(E,"put"),"data-layer-type":"operational",dragEnabled:N,filterEnabled:z,filterPlaceholder:I,filterText:K,group:r.sortableRoot,key:"root-list",label:O.widgetLabel,onmouseleave:this._clearActiveItem,onmouseover:this._setActiveItem,selectionAppearance:"border",
selectionMode:H,onCalciteListChange:E=>this._handleCalciteListChange(E),onCalciteListDragEnd:E=>this._handleCalciteListDragEnd(E.detail),onCalciteListFilter:E=>this.filterText=E.target?.filterText??"",onCalciteListOrderChange:E=>this._onCalciteListOrderChange(E.detail)},a?.toArray().map(E=>this._renderItem(E)),x.tsx("div",{class:f.css.filterNoResults,slot:"filter-no-results"},x.tsx("calcite-notice",{kind:"info",open:!0,scale:"m",width:"full"},this._renderNoItemsMessage())))),this._renderPanelFlowItems(a)];
return b?C?x.tsx("calcite-flow",{key:"root-flow"},a):a:null}_renderChildList(a){const {dragEnabled:b}=this,{children:l}=a,q=r.listItemHasChildren(a),B=!q&&b&&"group"===a.layer?.type;return q||B?x.tsx("calcite-list",{canPull:z=>this._canMove(z,"pull"),canPut:z=>this._canMove(z,"put"),"data-item":a,"data-layer-type":"operational",dragEnabled:b?a.childrenSortable&&r.canSortSublayers(a):!1,group:a.layer.uid},l?.filter(z=>!z.hidden).toArray().map(z=>this._renderItem(z,a))):null}_renderItemMessage(a){return a.error?
x.tsx("div",{class:f.css.itemMessage,key:"esri-layer-list__error",slot:"content-bottom"},x.tsx("calcite-notice",{icon:"exclamation-mark-triangle",kind:"warning",open:!0,scale:"s",width:"full"},x.tsx("div",{slot:"message"},this.messages.layerError))):a.incompatible?x.tsx("div",{class:f.css.itemMessage,key:"esri-layer-list__incompatible",slot:"content-bottom"},x.tsx("calcite-notice",{afterCreate:b=>this._setTooltipReference(b,a),afterRemoved:()=>this._removeTooltipReference(a),bind:this,icon:"exclamation-mark-triangle",
kind:"warning",open:!0,scale:"s",tabIndex:0,width:"full"},x.tsx("div",{slot:"message"},this.messages.layerIncompatible))):null}_renderItem(a,b){const {_activeItem:l,_selectedDragItemLayerUid:q,selectionMode:B,selectedItems:z,messages:D}=this,C=a.title||D.untitledLayer,N=a.visibleAtCurrentScale?C:`${C} (${D.layerInvisibleAtScale})`,H=this._filterActions(a.actionsSections),K=this._countActions(H);return x.tsx("calcite-list-item",{afterCreate:I=>this._focusSelectedDragEl(I,a),afterUpdate:I=>this._focusSelectedDragEl(I,
a),class:this.classes(f.css.item,{[f.css.itemActive]:l===a}),"data-item":a,dragDisabled:!a.sortable,dragSelected:a.layer.uid===q,id:a.layer.uid,key:`list-item-${a.layer.uid}`,metadata:{parentTitle:b?.title??null},open:a.open,selected:"none"!==B?z.includes(a):!1,title:N,value:C,onCalciteListItemDragHandleChange:I=>this._handleCalciteListItemDragHandleChange(I,a),onCalciteListItemSelect:I=>this._handleCalciteListItemSelect(I,a,b),onCalciteListItemToggle:I=>this._handleCalciteListItemToggle(I,a)},x.tsx("div",
{class:f.css.itemContent,slot:"content"},x.tsx("div",{class:this.classes({[f.css.itemInvisibleAtScale]:!a.visibleAtCurrentScale})},C)),this._renderItemStatus(a,b),this._renderItemToggle(a,b),this._renderChildList(a),this._renderItemMessage(a),this._renderPanel(a.panel),this._renderPanelAction(a.panel),1<K?this._renderActionsSections(a,H):1===K?this._renderAction({item:a,action:this._getSingleActionButton(H),textEnabled:!1}):null)}_renderItemStatus(a,b){const {visibleElements:l}=this;if(!l.statusIndicators)return null;
const {connectionStatus:q,publishing:B,updating:z}=a;a=z&&!b;b=!!q;return x.tsx("calcite-icon",{class:this.classes({[f.css.statusIndicator]:!0,[f.css.publishing]:B,[f.css.updating]:a,[f.css.connectionStatus]:b,[f.css.connectionStatusConnected]:b&&"connected"===q}),icon:r.getStatusIcon({connectionStatus:q,publishing:B,isUpdating:a}),key:"layer-item-status",scale:"s",slot:"actions-end"})}_renderItemToggle(a,b){const {messages:l,visibilityAppearance:q}=this,{visible:B}=a,z=b?.visibilityMode;if("inherited"===
z)return null;const D=r.getVisibilityIcon({visible:B,exclusive:"exclusive"===z,visibilityAppearance:q}),C="checkbox"===q;return x.tsx("calcite-action",{appearance:"transparent",class:f.css.visibleToggle,icon:C?D:void 0,key:"visibility-toggle",onclick:()=>this._toggleVisibility(a,b),scale:"s",slot:C?"actions-start":"actions-end",text:l.layerVisibility,title:l.layerVisibility},C?null:x.tsx("calcite-icon",{class:this.classes({[f.css.visibleIcon]:"exclusive"!==z&&B}),icon:D,scale:"s"}))}_renderPanel(a){return!a?.open||
a.disabled||a.flowEnabled?null:x.tsx("div",{class:f.css.itemContentBottom,key:`content-panel-${a.uid}`,slot:"content-bottom"},a.render())}_renderPanelAction(a){if(!a?.visible)return null;const {open:b,title:l,disabled:q}=a;return x.tsx("calcite-action",{active:b,appearance:"transparent",disabled:q,icon:p.getActionIcon(a),key:`action-${a.uid}`,onclick:()=>this._togglePanel(a),scale:"s",slot:"actions-end",text:l??"",title:l??void 0},this._renderFallbackIcon(a))}_renderActionsSections(a,b){return x.tsx("calcite-action-menu",
{appearance:"transparent",key:"item-action-menu",label:this.messagesCommon.menu,open:a.actionsOpen,overlayPositioning:"fixed",placement:"bottom-end",scale:"s",slot:"actions-end",onCalciteActionMenuOpen:l=>a.actionsOpen=l.target.open},b.toArray().map((l,q)=>this._renderActionSection(a,l,q)))}_renderActionSection(a,b,l){return x.tsx("calcite-action-group",{key:`action-section-${l}`},b.toArray().map(q=>this._renderAction({item:a,action:q,textEnabled:!0})))}_renderFallbackIcon(a){const {className:b,icon:l}=
a;if(l)return null;a="image"in a?a.image:void 0;const q={[f.css.itemActionIcon]:!!b,[f.css.itemActionImage]:!!a};b&&(q[b]=!0);return a||b?x.tsx("span",{"aria-hidden":"true",class:this.classes(f.css.itemActionIcon,q),key:"icon",styles:p.getActionStyles(a)}):null}_renderAction(a){const {item:b,action:l,textEnabled:q}=a,{active:B,disabled:z,title:D,type:C,indicator:N}=l;return x.tsx("calcite-action",{active:"toggle"===C?l.value:!1,appearance:"transparent",disabled:z,icon:p.getActionIcon(l),indicator:N,
key:`action-${l.uid}`,loading:B,onclick:()=>this._triggerAction(b,l),scale:"s",slot:q?void 0:"actions-end",text:D??"",textEnabled:q,title:D??void 0},this._renderFallbackIcon(l))}_setTooltipReference(a,b){this._tooltipReferenceMap.set(b.layer.uid,a)}_removeTooltipReference(a){this._tooltipReferenceMap.delete(a.layer.uid)}_moveLayerFromChildList({toEl:a,fromEl:b,dragEl:l,newIndex:q}){l=r.getItem(l);a=r.getItem(a);b=r.getItem(b);this.viewModel.moveListItem(l,b,a,q)}_handleCalciteListDragEnd(a){const {fromEl:b,
dragEl:l,oldIndex:q}=a;b.insertBefore(l,b.children[q])}_sortLayers(a,b){a&&(a.group===r.sortableRoot?r.sortLayersToIds(this.view?.map?.layers,b):(a=r.getItem(a))&&r.sortChildLayersToIds(a,b))}_getSingleActionButton(a){return a.reduce(b=>b).filter(b=>b&&"button"===b.type).at(0)}_filterActions(a){return a.map(b=>b.filter(l=>l.visible))}_countActions(a){return a.reduce((b,l)=>b+l.length,0)}_triggerAction(a,b){b&&a&&("toggle"===b.type&&(b.value=!b.value),this.triggerAction(b,a))}_handleCalciteListChange(a){const {selectionMode:b,
selectedItems:l}=this;"none"!==b&&(a=a.target.selectedItems.map(q=>r.getItem(q)).filter(Boolean),l.removeAll(),l.addMany(a))}_handleCalciteListItemToggle(a,b){a.stopPropagation();b.open=a.target.open}_focusSelectedDragEl(a,b){this._selectedDragItemLayerUid===b.layer.uid&&requestAnimationFrame(()=>a?.setFocus())}_handleCalciteListItemDragHandleChange(a,b){a.stopPropagation();this._selectedDragItemLayerUid=a.target.dragSelected?b.layer.uid:null}_handleCalciteListItemSelect(a,b,l){r.getItem(a.target)===
b&&"none"===this.selectionMode&&"inherited"!==l?.visibilityMode&&this._toggleVisibility(b,l)}_togglePanel(a){a.open=!a.open;a.open&&(this._focusPanelFlowItem=!0)}_toggleVisibility(a,b){!a||"exclusive"===b?.visibilityMode&&a.visible||(a.visible=!a.visible)}};c.__decorate([m.property()],h.prototype,"_activeItem",void 0);c.__decorate([m.property()],h.prototype,"_tooltipReferenceMap",void 0);c.__decorate([m.property()],h.prototype,"_focusRootFlowItem",void 0);c.__decorate([m.property()],h.prototype,"_focusPanelFlowItem",
void 0);c.__decorate([m.property()],h.prototype,"collapsed",void 0);c.__decorate([m.property()],h.prototype,"dragEnabled",void 0);c.__decorate([m.property()],h.prototype,"filterPlaceholder",void 0);c.__decorate([m.property()],h.prototype,"filterText",void 0);c.__decorate([m.property()],h.prototype,"headingLevel",void 0);c.__decorate([m.property()],h.prototype,"icon",void 0);c.__decorate([m.property()],h.prototype,"iconClass",void 0);c.__decorate([m.property()],h.prototype,"label",null);c.__decorate([m.property()],
h.prototype,"listItemCanGiveFunction",void 0);c.__decorate([m.property()],h.prototype,"listItemCanReceiveFunction",void 0);c.__decorate([m.property()],h.prototype,"listItemCreatedFunction",null);c.__decorate([m.property(),y.messageBundle("esri/widgets/LayerList/t9n/LayerList")],h.prototype,"messages",void 0);c.__decorate([m.property(),y.messageBundle("esri/t9n/common")],h.prototype,"messagesCommon",void 0);c.__decorate([m.property()],h.prototype,"multipleSelectionEnabled",null);c.__decorate([m.property()],
h.prototype,"operationalItems",null);c.__decorate([m.property()],h.prototype,"selectionEnabled",null);c.__decorate([m.property()],h.prototype,"selectedItems",void 0);c.__decorate([m.property()],h.prototype,"selectionMode",void 0);c.__decorate([m.property()],h.prototype,"view",null);c.__decorate([G.vmEvent("trigger-action"),m.property({type:v})],h.prototype,"viewModel",void 0);c.__decorate([m.property()],h.prototype,"visibilityAppearance",void 0);c.__decorate([m.property({type:g,nonNullable:!0})],
h.prototype,"visibleElements",void 0);return h=c.__decorate([d.subclass("esri.widgets.LayerList")],h)});