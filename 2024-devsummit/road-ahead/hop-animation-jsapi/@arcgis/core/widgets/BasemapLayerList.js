/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as e}from"../chunks/tslib.es6.js";import t from"../core/Collection.js";import i,{d as s}from"../core/Accessor.js";import{L as o}from"../chunks/Logger.js";import{property as n}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import{subclass as l}from"../core/accessorSupport/decorators/subclass.js";import{g as r,a}from"../chunks/actionUtils.js";import c,{l as d}from"./Widget.js";import m from"./BasemapLayerList/BasemapLayerListViewModel.js";import{l as p}from"../chunks/legacyIcon.js";import u from"./LayerList/ListItem.js";import{e as h,h as g,j as b,s as f,k as v,l as _,m as y,n as I,o as L}from"../chunks/layerListUtils.js";import{g as w}from"../chunks/globalCss.js";import{i as k}from"../chunks/Heading.js";import"../chunks/widgetUtils.js";import{m as E}from"../chunks/messageBundle.js";import{v as j}from"../chunks/vmEvent.js";import{t as C}from"../chunks/jsxFactory.js";import"../core/Evented.js";import"../chunks/handleUtils.js";import"../core/Handles.js";import"../config.js";import"../chunks/maybe.js";import"../chunks/ensureType.js";import"../chunks/utils.js";import"../chunks/metadata.js";import"../core/Error.js";import"../chunks/ObservableBase.js";import"../chunks/tracking.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../intl.js";import"../chunks/date.js";import"../chunks/jsonMap.js";import"../chunks/locale.js";import"../chunks/timeZoneUtils.js";import"../chunks/datetime.js";import"../chunks/messages.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../core/JSONSupport.js";import"../chunks/assets.js";import"../chunks/domUtils.js";import"../core/Promise.js";import"../core/reactiveUtils.js";import"../chunks/asyncUtils.js";import"../chunks/uuid.js";import"../core/accessorSupport/decorators/cast.js";import"../chunks/projector.js";import"../chunks/jsxWidgetSupport.js";import"../core/Identifiable.js";import"../support/actions/ActionBase.js";import"../support/actions/ActionButton.js";import"../chunks/ActionSlider.js";import"../support/actions/ActionToggle.js";import"./LayerList/ListItemPanel.js";import"./support/widget.js";import"../chunks/accessibleHandler.js";import"../chunks/themeUtils.js";import"../chunks/mathUtils.js";import"../chunks/vec3.js";import"../chunks/vec3f64.js";import"../chunks/common.js";let F=class extends i{constructor(){super(...arguments),this.baseLayers=!0,this.closeButton=!1,this.collapseButton=!1,this.editTitleButton=!1,this.errors=!1,this.filter=!1,this.flow=!0,this.heading=!0,this.referenceLayers=!0,this.statusIndicators=!0}};e([n({type:Boolean,nonNullable:!0})],F.prototype,"baseLayers",void 0),e([n({type:Boolean,nonNullable:!0})],F.prototype,"closeButton",void 0),e([n({type:Boolean,nonNullable:!0})],F.prototype,"collapseButton",void 0),e([n({type:Boolean,nonNullable:!0})],F.prototype,"editTitleButton",void 0),e([n({type:Boolean,nonNullable:!0})],F.prototype,"errors",void 0),e([n({type:Boolean,nonNullable:!0})],F.prototype,"filter",void 0),e([n({type:Boolean,nonNullable:!0})],F.prototype,"flow",void 0),e([n({type:Boolean,nonNullable:!0})],F.prototype,"heading",void 0),e([n({type:Boolean,nonNullable:!0})],F.prototype,"referenceLayers",void 0),e([n({type:Boolean,nonNullable:!0})],F.prototype,"statusIndicators",void 0),F=e([l("esri.widgets.BasemapLayerList.BasemapLayerListVisibleElements")],F);const T=F,A="esri-basemap-layer-list",M=`${A}__item`,B={base:A,widgetIcon:p.layers,filterNoResults:`${A}__filter-no-results`,item:M,itemActive:`${M}--active`,itemContent:`${M}-content`,itemContentBottom:`${M}-content-bottom`,itemMessage:`${M}-message`,itemInvisibleAtScale:`${M}--invisible-at-scale`,itemActionIcon:`${M}-action-icon`,itemActionImage:`${M}-action-image`,statusIndicator:`${A}__status-indicator`,publishing:`${A}__publishing`,updating:`${A}__updating`,editing:`${A}__editing`,connectionStatus:`${A}__connection-status`,connectionStatusConnected:`${A}__connection-status--connected`,visibleToggle:`${A}__visible-toggle`,visibleIcon:`${A}__visible-icon`,section:`${A}__section`},S=t.ofType(u),x="basemap";let P=class extends c{constructor(e,t){super(e,t),this._activeItem=null,this._tooltipReferenceMap=new Map,this._editTitleInput=null,this._focusRootFlowItem=!1,this._focusPanelFlowItem=!1,this._focusEditingFlowItem=!1,this._lastDragDetail=null,this._selectedDragItemLayerUid=null,this.collapsed=!1,this.dragEnabled=!1,this.editingTitle=!1,this.filterPlaceholder="",this.baseFilterText="",this.referenceFilterText="",this.listItemCanGiveFunction=null,this.listItemCanReceiveFunction=null,this.headingLevel=2,this.iconClass=B.widgetIcon,this.messages=null,this.messagesCommon=null,this.selectedItems=new S,this.selectionMode="none",this.viewModel=new m,this.visibilityAppearance="default",this.visibleElements=new T,this._canMove=({dragEl:e,fromEl:t,toEl:i},s)=>{const o="pull"===s?this.listItemCanGiveFunction:this.listItemCanReceiveFunction,n=h(e);if(!n?.sortable)return!1;const l=h(t),r=g(t),a=h(i),c=g(i),d=!!r&&!!c&&r===c,m={selected:n,from:l,to:a};return t.group&&i.group&&"function"==typeof o?o.call(null,m):d&&"sublayer"!==n?.layer?.type&&"map-image"!==l?.layer?.type&&"map-image"!==a?.layer?.type},this._clearActiveItem=()=>{this._activeItem=null},this._setActiveItem=e=>{if("default"!==this.visibilityAppearance)return;const t=Array.from(e.composedPath()).find((e=>e.classList?.contains(B.item)));this._activeItem=h(t)},this._onCalciteListOrderChange=e=>{const{_lastDragDetail:t,referenceItems:i,baseItems:s}=this,{toEl:o,fromEl:n,dragEl:l,oldIndex:r,newIndex:a}=e;if(!n||!o||t?.newIndex===a&&t?.dragEl===l&&t?.toEl===o&&t?.fromEl===n)return;this._lastDragDetail=e;const c=n,d=o;if(c===d){const e=h(l),t=g(c);if(!e||!t)return;const o="reference"===t?i:s,n=e.layer.uid,d=(e.parent?.children||o).map((e=>e.layer.uid)).toArray();return d.splice(r,1),d.splice(a,0,n),void this._sortLayers(c,d)}this._moveLayerFromChildList({toEl:d,fromEl:c,dragEl:l,newIndex:a})}}loadDependencies(){return d({action:()=>import("../chunks/calcite-action.js"),"action-group":()=>import("../chunks/calcite-action-group.js"),"action-menu":()=>import("../chunks/calcite-action-menu.js"),block:()=>import("../chunks/calcite-block.js"),label:()=>import("../chunks/calcite-label.js"),input:()=>import("../chunks/calcite-input.js"),button:()=>import("../chunks/calcite-button.js"),flow:()=>import("../chunks/calcite-flow.js"),"flow-item":()=>import("../chunks/calcite-flow-item.js"),icon:()=>import("../chunks/calcite-icon.js"),list:()=>import("../chunks/calcite-list.js"),"list-item":()=>import("../chunks/calcite-list-item.js"),notice:()=>import("../chunks/calcite-notice.js"),tooltip:()=>import("../chunks/calcite-tooltip.js")})}destroy(){this._tooltipReferenceMap.clear()}get basemapTitle(){return this.viewModel.basemapTitle}set basemapTitle(e){this.viewModel.basemapTitle=e}get baseListItemCreatedFunction(){return this.viewModel.baseListItemCreatedFunction}set baseListItemCreatedFunction(e){this.viewModel.baseListItemCreatedFunction=e}get editingEnabled(){return s(o.getLogger(this),"editingEnabled",{replacement:"selectionMode, dragEnabled, visibleElements.editTitleButton",version:"4.29",warnOnce:!0}),"none"!==this.selectionMode&&this.dragEnabled&&this.visibleElements.editTitleButton}set editingEnabled(e){s(o.getLogger(this),"editingEnabled",{replacement:"selectionMode, dragEnabled, visibleElements.editTitleButton",version:"4.29",warnOnce:!0}),this.dragEnabled=e,this.visibleElements.editTitleButton=e,this.selectionMode=e?this.multipleSelectionEnabled?"multiple":"single":"none"}get label(){return this.messages?.widgetLabel??""}set label(e){this._overrideIfSome("label",e)}get multipleSelectionEnabled(){return s(o.getLogger(this),"multipleSelectionEnabled",{replacement:"selectionMode",version:"4.29",warnOnce:!0}),"multiple"===this.selectionMode}set multipleSelectionEnabled(e){s(o.getLogger(this),"multipleSelectionEnabled",{replacement:"selectionMode",version:"4.29",warnOnce:!0}),this.selectionMode=e?"multiple":this.editingEnabled?"single":"none"}get referenceListItemCreatedFunction(){return this.viewModel.referenceListItemCreatedFunction}set referenceListItemCreatedFunction(e){this.viewModel.referenceListItemCreatedFunction=e}get baseItems(){return this.viewModel.baseItems}get referenceItems(){return this.viewModel.referenceItems}get view(){return this.viewModel.view}set view(e){this.viewModel.view=e}triggerAction(e,t){return this.viewModel.triggerAction(e,t)}render(){const{state:e}=this.viewModel,t={[w.hidden]:"loading"===e,[w.disabled]:"disabled"===e};return C("div",{class:this.classes(B.base,w.widget,w.panel,t)},this._renderItems())}_renderItemTooltip(e){return e?C("calcite-tooltip",{key:`tooltip-${e.layer.uid}`,referenceElement:this._tooltipReferenceMap.get(e.layer.uid)},this.messages.layerIncompatibleTooltip):null}_renderItemTooltipNodes(e){return e.incompatible?this._renderItemTooltip(e):e.children?.filter((e=>!e.hidden)).toArray().map((e=>this._renderItemTooltipNodes(e)))}_renderItemTooltips(e){return e?.toArray().map((e=>this._renderItemTooltipNodes(e)))}_renderPanelFlowItems(e){return e?e.flatten((e=>e.children)).filter((e=>!e.hidden)).toArray().filter((({panel:e})=>e?.open&&!e.disabled&&e.flowEnabled)).map((({title:e,panel:t})=>{const i=()=>this._handlePanelFlowItemBack(t);return C("calcite-flow-item",{afterCreate:this._focusPanelFlowItemNode,afterUpdate:this._focusPanelFlowItemNode,bind:this,description:e,heading:t.title,headingLevel:this.headingLevel,key:`flow-panel-${t.uid}`,onCalciteFlowItemBack:e=>{e.preventDefault(),i()}},t.render(),C("calcite-button",{appearance:"transparent",onclick:i,slot:"footer-actions",width:"full"},this.messagesCommon.back))})):[]}_handlePanelFlowItemBack(e){e.open=!1,this._focusRootFlowItem=!0}_focusEditingFlowItemNode(e){this._focusEditingFlowItem&&(this._focusEditingFlowItem=!1,requestAnimationFrame((()=>e?.setFocus())))}_focusRootFlowItemNode(e){this._focusRootFlowItem&&(this._focusRootFlowItem=!1,requestAnimationFrame((()=>e?.setFocus())))}_focusPanelFlowItemNode(e){this._focusPanelFlowItem&&(this._focusPanelFlowItem=!1,requestAnimationFrame((()=>e?.setFocus())))}_renderItemMessage(e){return e.error?C("div",{class:B.itemMessage,key:"esri-layer-list__error",slot:"content-bottom"},C("calcite-notice",{icon:"exclamation-mark-triangle",kind:"warning",open:!0,scale:"s",width:"full"},C("div",{slot:"message"},this.messages.layerError))):e.incompatible?C("div",{class:B.itemMessage,key:"esri-layer-list__incompatible",slot:"content-bottom"},C("calcite-notice",{afterCreate:t=>this._setTooltipReference(t,e),afterRemoved:()=>this._removeTooltipReference(e),icon:"exclamation-mark-triangle",kind:"warning",open:!0,scale:"s",tabIndex:0,width:"full"},C("div",{slot:"message"},this.messages.layerIncompatible))):null}_renderItem(e,t,i,s){const{_activeItem:o,_selectedDragItemLayerUid:n,selectionMode:l,selectedItems:r,messages:a}=this,c=e.title||a.untitledLayer,d=e.visibleAtCurrentScale?c:`${c} (${a.layerInvisibleAtScale})`,m=this._filterActions(e.actionsSections),p=this._countActions(m);return C("calcite-list-item",{afterCreate:t=>this._focusSelectedDragEl(t,e),afterUpdate:t=>this._focusSelectedDragEl(t,e),class:this.classes(B.item,{[B.itemActive]:o===e}),"data-item":e,dragDisabled:!e.sortable||i,dragSelected:e.layer.uid===n,id:e.layer.uid,key:`list-item-${e.layer.uid}`,metadata:{parentTitle:s?.title??null},open:e.open,selected:"none"!==l&&r.includes(e),title:d,value:c,onCalciteListItemDragHandleChange:t=>this._handleCalciteListItemDragHandleChange(t,e),onCalciteListItemSelect:t=>this._handleCalciteListItemSelect(t,e,s),onCalciteListItemToggle:t=>this._handleCalciteListItemToggle(t,e)},C("div",{class:B.itemContent,slot:"content"},C("div",{class:this.classes({[B.itemInvisibleAtScale]:!e.visibleAtCurrentScale})},c)),this._renderItemStatus(e,s),this._renderItemToggle(e,s),this._renderChildList(e,t),this._renderItemMessage(e),this._renderPanel(e.panel),this._renderPanelAction(e.panel),p>1?this._renderActionsSections(e,m):1===p?this._renderAction({item:e,action:this._getSingleActionButton(m),textEnabled:!1}):null)}_renderItemStatus(e,t){const{visibleElements:i}=this;if(!i.statusIndicators)return null;const{connectionStatus:s,publishing:o,updating:n}=e,l=n&&!t,r=!!s;return C("calcite-icon",{class:this.classes({[B.statusIndicator]:!0,[B.publishing]:o,[B.updating]:l,[B.connectionStatus]:r,[B.connectionStatusConnected]:r&&"connected"===s}),icon:b({connectionStatus:s,publishing:o,isUpdating:l}),key:"layer-item-status",scale:"s",slot:"actions-end"})}_renderItemToggle(e,t){const{messages:i,visibilityAppearance:s}=this,{visible:o}=e,n=t?.visibilityMode;if("inherited"===n)return null;const l=L({visible:o,exclusive:"exclusive"===n,visibilityAppearance:s}),r="checkbox"===s;return C("calcite-action",{appearance:"transparent",class:B.visibleToggle,icon:r?l:void 0,key:"visibility-toggle",onclick:()=>this._toggleVisibility(e,t),scale:"s",slot:r?"actions-start":"actions-end",text:i.layerVisibility,title:i.layerVisibility},r?null:C("calcite-icon",{class:this.classes({[B.visibleIcon]:"exclusive"!==n&&o}),icon:l,scale:"s"}))}_renderPanel(e){return!e?.open||e.disabled||e.flowEnabled?null:C("div",{class:B.itemContentBottom,key:`content-panel-${e.uid}`,slot:"content-bottom"},e.render())}_renderPanelAction(e){if(!e?.visible)return null;const{open:t,title:i,disabled:s}=e;return C("calcite-action",{active:t,appearance:"transparent",disabled:s,icon:r(e),key:`action-${e.uid}`,onclick:()=>this._togglePanel(e),scale:"s",slot:"actions-end",text:i??"",title:i??void 0},this._renderFallbackIcon(e))}_renderActionsSections(e,t){return C("calcite-action-menu",{appearance:"transparent",key:"item-action-menu",label:this.messagesCommon.menu,open:e.actionsOpen,overlayPositioning:"fixed",placement:"bottom-end",scale:"s",slot:"actions-end",onCalciteActionMenuOpen:t=>e.actionsOpen=t.target.open},t.toArray().map(((t,i)=>this._renderActionSection(e,t,i))))}_renderActionSection(e,t,i){return C("calcite-action-group",{key:`action-section-${i}`},t.toArray().map((t=>this._renderAction({item:e,action:t,textEnabled:!0}))))}_renderFallbackIcon(e){const{className:t,icon:i}=e;if(i)return null;const s="image"in e?e.image:void 0,o={[B.itemActionIcon]:!!t,[B.itemActionImage]:!!s};return t&&(o[t]=!0),s||t?C("span",{"aria-hidden":"true",class:this.classes(B.itemActionIcon,o),key:"icon",styles:a(s)}):null}_renderAction(e){const{item:t,action:i,textEnabled:s}=e,{active:o,disabled:n,title:l,type:a,indicator:c}=i;return C("calcite-action",{active:"toggle"===a&&i.value,appearance:"transparent",disabled:n,icon:r(i),indicator:c,key:`action-${i.uid}`,loading:o,onclick:()=>this._triggerAction(t,i),scale:"s",slot:s?void 0:"actions-end",text:l??"",textEnabled:s,title:l??void 0},this._renderFallbackIcon(i))}_setTooltipReference(e,t){this._tooltipReferenceMap.set(t.layer.uid,e)}_removeTooltipReference(e){this._tooltipReferenceMap.delete(e.layer.uid)}_moveLayerFromChildList({toEl:e,fromEl:t,dragEl:i,newIndex:s}){const o=h(i),n=h(e),l=h(t),r=N(t),a=N(e);r&&a&&this.viewModel.moveListItem({targetItem:o,fromParentItem:l,toParentItem:n,newIndex:s,from:r,to:a})}_handleCalciteListDragEnd(e){const{fromEl:t,dragEl:i,oldIndex:s}=e;t.insertBefore(i,t.children[s])}_sortLayers(e,t){if(e)if(e.group===f){const i=N(e),s="base"===i?this.view?.map?.basemap?.baseLayers:"reference"===i?this.view?.map?.basemap?.referenceLayers:null;v(s,t)}else{const i=h(e);if(!i)return;_(i,t)}}_getSingleActionButton(e){return e.reduce((e=>e)).filter((e=>e&&"button"===e.type)).at(0)}_filterActions(e){return e.map((e=>e.filter((e=>e.visible))))}_countActions(e){return e.reduce(((e,t)=>e+t.length),0)}_triggerAction(e,t){t&&e&&("toggle"===t.type&&(t.value=!t.value),this.triggerAction(t,e))}_handleCalciteListChange(e){const{selectionMode:t,selectedItems:i}=this;if("none"===t)return;const s=e.target.selectedItems.map((e=>h(e))).filter(Boolean);i.removeAll(),i.addMany(s)}_handleCalciteListItemToggle(e,t){e.stopPropagation(),t.open=e.target.open}_focusSelectedDragEl(e,t){this._selectedDragItemLayerUid===t.layer.uid&&requestAnimationFrame((()=>e?.setFocus()))}_handleCalciteListItemDragHandleChange(e,t){e.stopPropagation();const i=e.target.dragSelected;this._selectedDragItemLayerUid=i?t.layer.uid:null}_handleCalciteListItemSelect(e,t,i){h(e.target)===t&&"none"===this.selectionMode&&"inherited"!==i?.visibilityMode&&this._toggleVisibility(t,i)}_togglePanel(e){e.open=!e.open,e.open&&(this._focusPanelFlowItem=!0)}_toggleVisibility(e,t){if(!e)return;const i=t?.visibilityMode;"exclusive"===i&&e.visible||(e.visible=!e.visible)}_renderEditingInput(){const{messages:e}=this,{basemapTitle:t}=this.viewModel;return C("div",{class:B.editing},C("calcite-label",null,e.basemapTitle,C("calcite-input",{afterCreate:e=>this._editTitleInput=e,label:e.basemapTitle,name:"basemaptitle",pattern:".*\\S+.*",placeholder:e.basemapTitle,required:!0,title:e.basemapTitle,type:"text",value:t??void 0})))}_renderCancelButton(){const{messagesCommon:{cancel:e}}=this;return C("calcite-button",{appearance:"outline",bind:this,label:e,onclick:this._toggleEditingTitle,slot:"footer",title:e,width:"half"},e)}_renderSubmitButton(){const{messagesCommon:e}=this;return C("calcite-button",{label:e.form.submit,slot:"footer",title:e.form.submit,type:"submit",width:"half"},e.form.ok)}_renderEditingForm(){return this.editingTitle?C("form",{bind:this,onsubmit:this._formSubmit},C("calcite-flow-item",{afterCreate:this._focusEditingFlowItemNode,afterUpdate:this._focusEditingFlowItemNode,bind:this,heading:this.visibleElements.heading?this.messages.basemapTitle:void 0,headingLevel:this.headingLevel,onCalciteFlowItemBack:e=>{e.preventDefault(),this._toggleEditingTitle()}},this._renderEditingInput(),this._renderCancelButton(),this._renderSubmitButton())):null}_renderEditTitleButton(){const{editingTitle:e,visibleElements:{editTitleButton:t},messagesCommon:{edit:i}}=this;return t&&!e?C("calcite-action",{bind:this,icon:"pencil",label:i,onclick:this._toggleEditingTitle,slot:"header-actions-end",text:i,title:i}):null}_renderNoLayersInfoMessage(e){return C("div",{slot:"message"},e)}_renderNoLayersInfo(e,t){return C("div",{class:B.itemMessage},C("calcite-notice",{icon:"information",key:t,kind:"info",open:!0,scale:"m",width:"full"},this._renderNoLayersInfoMessage(e)))}_getFilteredItems(e){return e?.filter((e=>!e.hidden&&(this.visibleElements.errors||!e.error)))}_renderItems(){const{collapsed:e,visible:t,visibleElements:{closeButton:i,collapseButton:s,heading:o,flow:n},messages:l,viewModel:r,referenceItems:a,baseItems:c}=this,d=this.visibleElements.referenceLayers?this._getFilteredItems(a):null,m=this.visibleElements.baseLayers?this._getFilteredItems(c):null,p=[C("calcite-flow-item",{afterCreate:this._focusRootFlowItemNode,afterUpdate:this._focusRootFlowItemNode,bind:this,closable:i,closed:!t,collapsed:e,collapsible:s,heading:o?r.basemapTitle??l.widgetLabel:void 0,headingLevel:this.headingLevel,key:"root-flow-item",onCalciteFlowItemClose:()=>this.visible=!1},this._renderEditTitleButton(),this._renderReferenceSection(d),this._renderBaseSection(m,1===m?.length)),this._renderEditingForm(),this._renderPanelFlowItems(m),this._renderPanelFlowItems(d)];return t?[n?C("calcite-flow",{key:"root-flow"},p):p,this._renderItemTooltips(d),this._renderItemTooltips(m)]:null}_renderChildList(e,t){const{dragEnabled:i}=this,{children:s}=e,o=y(e),n=!o&&i&&"group"===e.layer?.type;return o||n?C("calcite-list",{canPull:e=>this._canMove(e,"pull"),canPut:e=>this._canMove(e,"put"),"data-basemap-layer-type":t,"data-item":e,"data-layer-type":x,dragEnabled:!!i&&e.childrenSortable&&I(e),group:e.layer.uid},s?.filter((e=>!e.hidden)).toArray().map((i=>this._renderItem(i,t,!1,e)))):null}_renderList(e,t,i){const{messages:s,dragEnabled:o,selectionMode:n,visibleElements:{filter:l},filterPlaceholder:r,baseFilterText:a,referenceFilterText:c}=this,d="reference"===t?s.noReferenceLayers:s.noBaseLayers;return C("calcite-block",{class:B.section,collapsible:!0,heading:"reference"===t?s.referenceHeading:s.baseHeading,headingLevel:k(this.headingLevel),key:`block-${t}`,open:!0},0===e?.length?this._renderNoLayersInfo(d,t):null,C("calcite-list",{afterCreate:e=>{e.addEventListener("focusin",this._setActiveItem),e.addEventListener("focusout",this._clearActiveItem)},afterRemoved:e=>{e.removeEventListener("focusin",this._setActiveItem),e.removeEventListener("focusout",this._clearActiveItem)},canPull:e=>this._canMove(e,"pull"),canPut:e=>this._canMove(e,"put"),"data-basemap-layer-type":t,"data-layer-type":x,dragEnabled:o,filterEnabled:l,filterPlaceholder:r,filterText:"reference"===t?c:a,group:f,key:`list-${t}`,label:s.widgetLabel,onmouseleave:this._clearActiveItem,onmouseover:this._setActiveItem,selectionAppearance:"border",selectionMode:n,onCalciteListChange:e=>this._handleCalciteListChange(e),onCalciteListDragEnd:e=>this._handleCalciteListDragEnd(e.detail),onCalciteListFilter:e=>this["reference"===t?"referenceFilterText":"baseFilterText"]=e.target?.filterText??"",onCalciteListOrderChange:e=>this._onCalciteListOrderChange(e.detail)},e?.toArray().map((e=>this._renderItem(e,t,i))),C("div",{class:B.filterNoResults,slot:"filter-no-results"},C("calcite-notice",{kind:"info",open:!0,scale:"m",width:"full"},this._renderNoLayersInfoMessage(d)))))}_renderBaseSection(e,t){return this.visibleElements.baseLayers?this._renderList(e,"base",t):null}_renderReferenceSection(e){return this.visibleElements.referenceLayers?this._renderList(e,"reference",!1):null}_toggleEditingTitle(){const{editingTitle:e}=this,t=!e;this.editingTitle=t,t?this._focusEditingFlowItem=!0:this._focusRootFlowItem=!0}_formSubmit(e){e.preventDefault();const t=this._editTitleInput?.value;t?.trim()&&(this.basemapTitle=t),this._toggleEditingTitle()}};function N(e){return e?.getAttribute("data-basemap-layer-type")}e([n()],P.prototype,"_activeItem",void 0),e([n()],P.prototype,"_tooltipReferenceMap",void 0),e([n()],P.prototype,"_focusRootFlowItem",void 0),e([n()],P.prototype,"_focusPanelFlowItem",void 0),e([n()],P.prototype,"_focusEditingFlowItem",void 0),e([n()],P.prototype,"basemapTitle",null),e([n()],P.prototype,"collapsed",void 0),e([n()],P.prototype,"dragEnabled",void 0),e([n()],P.prototype,"editingTitle",void 0),e([n()],P.prototype,"filterPlaceholder",void 0),e([n()],P.prototype,"baseFilterText",void 0),e([n()],P.prototype,"referenceFilterText",void 0),e([n()],P.prototype,"listItemCanGiveFunction",void 0),e([n()],P.prototype,"listItemCanReceiveFunction",void 0),e([n()],P.prototype,"baseListItemCreatedFunction",null),e([n()],P.prototype,"editingEnabled",null),e([n()],P.prototype,"headingLevel",void 0),e([n()],P.prototype,"iconClass",void 0),e([n()],P.prototype,"label",null),e([n(),E("esri/widgets/BasemapLayerList/t9n/BasemapLayerList")],P.prototype,"messages",void 0),e([n(),E("esri/t9n/common")],P.prototype,"messagesCommon",void 0),e([n()],P.prototype,"multipleSelectionEnabled",null),e([n()],P.prototype,"referenceListItemCreatedFunction",null),e([n({readOnly:!0})],P.prototype,"baseItems",null),e([n({readOnly:!0})],P.prototype,"referenceItems",null),e([n()],P.prototype,"selectedItems",void 0),e([n()],P.prototype,"selectionMode",void 0),e([n()],P.prototype,"view",null),e([j("trigger-action"),n({type:m})],P.prototype,"viewModel",void 0),e([n()],P.prototype,"visibilityAppearance",void 0),e([n({type:T,nonNullable:!0})],P.prototype,"visibleElements",void 0),P=e([l("esri.widgets.BasemapLayerList")],P);const R=P;export{R as default};