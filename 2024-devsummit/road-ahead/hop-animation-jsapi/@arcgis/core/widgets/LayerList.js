/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as e}from"../chunks/tslib.es6.js";import t from"../core/Collection.js";import i,{d as o}from"../core/Accessor.js";import{L as s}from"../chunks/Logger.js";import{R as n}from"../chunks/ReactiveMap.js";import{property as l}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import{subclass as r}from"../core/accessorSupport/decorators/subclass.js";import{g as a,a as c}from"../chunks/actionUtils.js";import d,{l as m}from"./Widget.js";import{l as p}from"../chunks/legacyIcon.js";import u from"./LayerList/LayerListViewModel.js";import h from"./LayerList/ListItem.js";import{e as g,h as v,s as y,m as _,n as f,j as b,k as I,l as w,o as k}from"../chunks/layerListUtils.js";import{g as j}from"../chunks/globalCss.js";import"../chunks/widgetUtils.js";import{m as L}from"../chunks/messageBundle.js";import{v as C}from"../chunks/vmEvent.js";import{t as E}from"../chunks/jsxFactory.js";import"../core/Evented.js";import"../chunks/handleUtils.js";import"../core/Handles.js";import"../config.js";import"../chunks/maybe.js";import"../chunks/ensureType.js";import"../chunks/utils.js";import"../chunks/metadata.js";import"../core/Error.js";import"../chunks/ObservableBase.js";import"../chunks/tracking.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../intl.js";import"../chunks/date.js";import"../chunks/jsonMap.js";import"../chunks/locale.js";import"../chunks/timeZoneUtils.js";import"../chunks/datetime.js";import"../chunks/messages.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../core/JSONSupport.js";import"../chunks/assets.js";import"../chunks/domUtils.js";import"../core/Promise.js";import"../core/reactiveUtils.js";import"../chunks/asyncUtils.js";import"../chunks/uuid.js";import"../core/accessorSupport/decorators/cast.js";import"../chunks/projector.js";import"../chunks/jsxWidgetSupport.js";import"../core/Identifiable.js";import"../support/actions/ActionBase.js";import"../support/actions/ActionButton.js";import"../chunks/ActionSlider.js";import"../support/actions/ActionToggle.js";import"./LayerList/ListItemPanel.js";import"./support/widget.js";import"../chunks/accessibleHandler.js";import"../chunks/themeUtils.js";const A="esri-layer-list",M=`${A}__item`,F={base:A,widgetIcon:p.layers,filterNoResults:`${A}__filter-no-results`,item:M,itemActive:`${M}--active`,itemContent:`${M}-content`,itemContentBottom:`${M}-content-bottom`,itemMessage:`${M}-message`,itemInvisibleAtScale:`${M}--invisible-at-scale`,itemActionIcon:`${M}-action-icon`,itemActionImage:`${M}-action-image`,statusIndicator:`${A}__status-indicator`,publishing:`${A}__publishing`,updating:`${A}__updating`,connectionStatus:`${A}__connection-status`,connectionStatusConnected:`${A}__connection-status--connected`,visibleToggle:`${A}__visible-toggle`,visibleIcon:`${A}__visible-icon`};let S=class extends i{constructor(){super(...arguments),this.closeButton=!1,this.collapseButton=!1,this.errors=!1,this.filter=!1,this.flow=!0,this.heading=!1,this.statusIndicators=!0}};e([l({type:Boolean,nonNullable:!0})],S.prototype,"closeButton",void 0),e([l({type:Boolean,nonNullable:!0})],S.prototype,"collapseButton",void 0),e([l({type:Boolean,nonNullable:!0})],S.prototype,"errors",void 0),e([l({type:Boolean,nonNullable:!0})],S.prototype,"filter",void 0),e([l({type:Boolean,nonNullable:!0})],S.prototype,"flow",void 0),e([l({type:Boolean,nonNullable:!0})],S.prototype,"heading",void 0),e([l({type:Boolean,nonNullable:!0})],S.prototype,"statusIndicators",void 0),S=e([r("esri.widgets.LayerList.LayerListVisibleElements")],S);const x=S,P=t.ofType(h),T="operational";let R=class extends d{constructor(e,t){super(e,t),this._activeItem=null,this._tooltipReferenceMap=new n,this._focusRootFlowItem=!1,this._focusPanelFlowItem=!1,this._lastDragDetail=null,this._selectedDragItemLayerUid=null,this.collapsed=!1,this.dragEnabled=!1,this.filterPlaceholder="",this.filterText="",this.headingLevel=2,this.icon=null,this.iconClass=F.widgetIcon,this.listItemCanGiveFunction=null,this.listItemCanReceiveFunction=null,this.messages=null,this.messagesCommon=null,this.selectedItems=new P,this.selectionMode="none",this.viewModel=new u,this.visibilityAppearance="default",this.visibleElements=new x,this._canMove=({dragEl:e,fromEl:t,toEl:i},o)=>{const s="pull"===o?this.listItemCanGiveFunction:this.listItemCanReceiveFunction,n=g(e);if(!n?.sortable)return!1;const l=g(t),r=v(t),a=g(i),c=v(i),d=!!r&&!!c&&r===c,m={selected:n,from:l,to:a};return t.group&&i.group&&"function"==typeof s?s.call(null,m):d&&"sublayer"!==n?.layer?.type&&"map-image"!==l?.layer?.type&&"map-image"!==a?.layer?.type},this._clearActiveItem=()=>{this._activeItem=null},this._setActiveItem=e=>{if("default"!==this.visibilityAppearance)return;const t=Array.from(e.composedPath()).find((e=>e.classList?.contains(F.item)));this._activeItem=g(t)},this._onCalciteListOrderChange=e=>{const{_lastDragDetail:t,operationalItems:i}=this,{toEl:o,fromEl:s,dragEl:n,oldIndex:l,newIndex:r}=e;if(s&&o&&(t?.newIndex!==r||t?.dragEl!==n||t?.toEl!==o||t?.fromEl!==s)){if(this._lastDragDetail=e,s===o){const e=g(n);if(!e)return;const t=e.layer.uid,o=(e.parent?.children||i).map((e=>e.layer.uid)).toArray();return o.splice(l,1),o.splice(r,0,t),void this._sortLayers(s,o)}this._moveLayerFromChildList({toEl:o,fromEl:s,dragEl:n,newIndex:r})}}}loadDependencies(){return m({action:()=>import("../chunks/calcite-action.js"),"action-group":()=>import("../chunks/calcite-action-group.js"),"action-menu":()=>import("../chunks/calcite-action-menu.js"),button:()=>import("../chunks/calcite-button.js"),flow:()=>import("../chunks/calcite-flow.js"),"flow-item":()=>import("../chunks/calcite-flow-item.js"),icon:()=>import("../chunks/calcite-icon.js"),list:()=>import("../chunks/calcite-list.js"),"list-item":()=>import("../chunks/calcite-list-item.js"),notice:()=>import("../chunks/calcite-notice.js"),tooltip:()=>import("../chunks/calcite-tooltip.js")})}destroy(){this._tooltipReferenceMap.clear()}get label(){return this.messages?.widgetLabel??""}set label(e){this._overrideIfSome("label",e)}get listItemCreatedFunction(){return this.viewModel.listItemCreatedFunction}set listItemCreatedFunction(e){this.viewModel.listItemCreatedFunction=e}get multipleSelectionEnabled(){return o(s.getLogger(this),"multipleSelectionEnabled",{replacement:"selectionMode",version:"4.29",warnOnce:!0}),"multiple"===this.selectionMode}set multipleSelectionEnabled(e){o(s.getLogger(this),"multipleSelectionEnabled",{replacement:"selectionMode",version:"4.29",warnOnce:!0}),this.selectionMode=e?"multiple":this.selectionEnabled?"single":"none"}get operationalItems(){return this.viewModel.operationalItems}set operationalItems(e){this.viewModel.operationalItems=e}get selectionEnabled(){return o(s.getLogger(this),"selectionEnabled",{replacement:"selectionMode, dragEnabled",version:"4.29",warnOnce:!0}),"none"!==this.selectionMode&&this.dragEnabled}set selectionEnabled(e){o(s.getLogger(this),"selectionEnabled",{replacement:"selectionMode, dragEnabled",version:"4.29",warnOnce:!0}),this.dragEnabled=e,this.selectionMode=e?this.multipleSelectionEnabled?"multiple":"single":"none"}get view(){return this.viewModel.view}set view(e){this.viewModel.view=e}triggerAction(e,t){return this.viewModel.triggerAction(e,t)}render(){const e=this.viewModel?.state,t={[j.hidden]:"loading"===e,[j.disabled]:"disabled"===e},i=this.operationalItems?.filter((e=>!e.hidden&&(this.visibleElements.errors||!e.error)));return E("div",{class:this.classes(F.base,j.widget,j.panel,t)},i?.length?[this._renderItemTooltips(i),this._renderItems(i)]:this._renderNoItems())}_renderItemTooltip(e){const{_tooltipReferenceMap:t,messages:i}=this;return e?E("calcite-tooltip",{key:`tooltip-${e.layer.uid}`,referenceElement:t.get(e.layer.uid)},i.layerIncompatibleTooltip):null}_renderItemTooltipNodes(e){return e.incompatible?this._renderItemTooltip(e):e.children?.filter((e=>!e.hidden)).toArray().map((e=>this._renderItemTooltipNodes(e)))}_renderItemTooltips(e){return e?.toArray().map((e=>this._renderItemTooltipNodes(e)))}_renderNoItemsMessage(){return E("div",{slot:"message"},this.messages.noItemsToDisplay)}_renderNoItems(){return E("div",{class:F.itemMessage,key:"esri-layer-list__no-items"},E("calcite-notice",{icon:"information",kind:"info",open:!0,scale:"m",width:"full"},this._renderNoItemsMessage()))}_renderPanelFlowItems(e){return e?e.flatten((e=>e.children)).filter((e=>!e.hidden)).toArray().filter((({panel:e})=>e?.open&&!e.disabled&&e.flowEnabled)).map((({title:e,panel:t})=>{const i=()=>this._handlePanelFlowItemBack(t);return E("calcite-flow-item",{afterCreate:this._focusPanelFlowItemNode,afterUpdate:this._focusPanelFlowItemNode,bind:this,description:e,heading:t.title,headingLevel:this.headingLevel,key:`flow-panel-${t.uid}`,onCalciteFlowItemBack:e=>{e.preventDefault(),i()}},t.render(),E("calcite-button",{appearance:"transparent",onclick:i,slot:"footer-actions",width:"full"},this.messagesCommon.back))})):[]}_handlePanelFlowItemBack(e){e.open=!1,this._focusRootFlowItem=!0}_focusRootFlowItemNode(e){this._focusRootFlowItem&&(this._focusRootFlowItem=!1,requestAnimationFrame((()=>e?.setFocus())))}_focusPanelFlowItemNode(e){this._focusPanelFlowItem&&(this._focusPanelFlowItem=!1,requestAnimationFrame((()=>e?.setFocus())))}_renderItems(e){const{visible:t,collapsed:i,visibleElements:{closeButton:o,collapseButton:s,filter:n,heading:l,flow:r},dragEnabled:a,selectionMode:c,filterText:d,filterPlaceholder:m,messages:p}=this,u=[E("calcite-flow-item",{afterCreate:this._focusRootFlowItemNode,afterUpdate:this._focusRootFlowItemNode,bind:this,closable:o,closed:!t,collapsed:i,collapsible:s,heading:l?p.widgetLabel:void 0,headingLevel:this.headingLevel,key:"root-flow-item",onCalciteFlowItemClose:()=>this.visible=!1},E("calcite-list",{afterCreate:e=>{e.addEventListener("focusin",this._setActiveItem),e.addEventListener("focusout",this._clearActiveItem)},afterRemoved:e=>{e.removeEventListener("focusin",this._setActiveItem),e.removeEventListener("focusout",this._clearActiveItem)},canPull:e=>this._canMove(e,"pull"),canPut:e=>this._canMove(e,"put"),"data-layer-type":T,dragEnabled:a,filterEnabled:n,filterPlaceholder:m,filterText:d,group:y,key:"root-list",label:p.widgetLabel,onmouseleave:this._clearActiveItem,onmouseover:this._setActiveItem,selectionAppearance:"border",selectionMode:c,onCalciteListChange:e=>this._handleCalciteListChange(e),onCalciteListDragEnd:e=>this._handleCalciteListDragEnd(e.detail),onCalciteListFilter:e=>this.filterText=e.target?.filterText??"",onCalciteListOrderChange:e=>this._onCalciteListOrderChange(e.detail)},e?.toArray().map((e=>this._renderItem(e))),E("div",{class:F.filterNoResults,slot:"filter-no-results"},E("calcite-notice",{kind:"info",open:!0,scale:"m",width:"full"},this._renderNoItemsMessage())))),this._renderPanelFlowItems(e)];return t?r?E("calcite-flow",{key:"root-flow"},u):u:null}_renderChildList(e){const{dragEnabled:t}=this,{children:i}=e,o=_(e),s=!o&&t&&"group"===e.layer?.type;return o||s?E("calcite-list",{canPull:e=>this._canMove(e,"pull"),canPut:e=>this._canMove(e,"put"),"data-item":e,"data-layer-type":T,dragEnabled:!!t&&e.childrenSortable&&f(e),group:e.layer.uid},i?.filter((e=>!e.hidden)).toArray().map((t=>this._renderItem(t,e)))):null}_renderItemMessage(e){return e.error?E("div",{class:F.itemMessage,key:"esri-layer-list__error",slot:"content-bottom"},E("calcite-notice",{icon:"exclamation-mark-triangle",kind:"warning",open:!0,scale:"s",width:"full"},E("div",{slot:"message"},this.messages.layerError))):e.incompatible?E("div",{class:F.itemMessage,key:"esri-layer-list__incompatible",slot:"content-bottom"},E("calcite-notice",{afterCreate:t=>this._setTooltipReference(t,e),afterRemoved:()=>this._removeTooltipReference(e),bind:this,icon:"exclamation-mark-triangle",kind:"warning",open:!0,scale:"s",tabIndex:0,width:"full"},E("div",{slot:"message"},this.messages.layerIncompatible))):null}_renderItem(e,t){const{_activeItem:i,_selectedDragItemLayerUid:o,selectionMode:s,selectedItems:n,messages:l}=this,r=e.title||l.untitledLayer,a=e.visibleAtCurrentScale?r:`${r} (${l.layerInvisibleAtScale})`,c=this._filterActions(e.actionsSections),d=this._countActions(c);return E("calcite-list-item",{afterCreate:t=>this._focusSelectedDragEl(t,e),afterUpdate:t=>this._focusSelectedDragEl(t,e),class:this.classes(F.item,{[F.itemActive]:i===e}),"data-item":e,dragDisabled:!e.sortable,dragSelected:e.layer.uid===o,id:e.layer.uid,key:`list-item-${e.layer.uid}`,metadata:{parentTitle:t?.title??null},open:e.open,selected:"none"!==s&&n.includes(e),title:a,value:r,onCalciteListItemDragHandleChange:t=>this._handleCalciteListItemDragHandleChange(t,e),onCalciteListItemSelect:i=>this._handleCalciteListItemSelect(i,e,t),onCalciteListItemToggle:t=>this._handleCalciteListItemToggle(t,e)},E("div",{class:F.itemContent,slot:"content"},E("div",{class:this.classes({[F.itemInvisibleAtScale]:!e.visibleAtCurrentScale})},r)),this._renderItemStatus(e,t),this._renderItemToggle(e,t),this._renderChildList(e),this._renderItemMessage(e),this._renderPanel(e.panel),this._renderPanelAction(e.panel),d>1?this._renderActionsSections(e,c):1===d?this._renderAction({item:e,action:this._getSingleActionButton(c),textEnabled:!1}):null)}_renderItemStatus(e,t){const{visibleElements:i}=this;if(!i.statusIndicators)return null;const{connectionStatus:o,publishing:s,updating:n}=e,l=n&&!t,r=!!o;return E("calcite-icon",{class:this.classes({[F.statusIndicator]:!0,[F.publishing]:s,[F.updating]:l,[F.connectionStatus]:r,[F.connectionStatusConnected]:r&&"connected"===o}),icon:b({connectionStatus:o,publishing:s,isUpdating:l}),key:"layer-item-status",scale:"s",slot:"actions-end"})}_renderItemToggle(e,t){const{messages:i,visibilityAppearance:o}=this,{visible:s}=e,n=t?.visibilityMode;if("inherited"===n)return null;const l=k({visible:s,exclusive:"exclusive"===n,visibilityAppearance:o}),r="checkbox"===o;return E("calcite-action",{appearance:"transparent",class:F.visibleToggle,icon:r?l:void 0,key:"visibility-toggle",onclick:()=>this._toggleVisibility(e,t),scale:"s",slot:r?"actions-start":"actions-end",text:i.layerVisibility,title:i.layerVisibility},r?null:E("calcite-icon",{class:this.classes({[F.visibleIcon]:"exclusive"!==n&&s}),icon:l,scale:"s"}))}_renderPanel(e){return!e?.open||e.disabled||e.flowEnabled?null:E("div",{class:F.itemContentBottom,key:`content-panel-${e.uid}`,slot:"content-bottom"},e.render())}_renderPanelAction(e){if(!e?.visible)return null;const{open:t,title:i,disabled:o}=e;return E("calcite-action",{active:t,appearance:"transparent",disabled:o,icon:a(e),key:`action-${e.uid}`,onclick:()=>this._togglePanel(e),scale:"s",slot:"actions-end",text:i??"",title:i??void 0},this._renderFallbackIcon(e))}_renderActionsSections(e,t){return E("calcite-action-menu",{appearance:"transparent",key:"item-action-menu",label:this.messagesCommon.menu,open:e.actionsOpen,overlayPositioning:"fixed",placement:"bottom-end",scale:"s",slot:"actions-end",onCalciteActionMenuOpen:t=>e.actionsOpen=t.target.open},t.toArray().map(((t,i)=>this._renderActionSection(e,t,i))))}_renderActionSection(e,t,i){return E("calcite-action-group",{key:`action-section-${i}`},t.toArray().map((t=>this._renderAction({item:e,action:t,textEnabled:!0}))))}_renderFallbackIcon(e){const{className:t,icon:i}=e;if(i)return null;const o="image"in e?e.image:void 0,s={[F.itemActionIcon]:!!t,[F.itemActionImage]:!!o};return t&&(s[t]=!0),o||t?E("span",{"aria-hidden":"true",class:this.classes(F.itemActionIcon,s),key:"icon",styles:c(o)}):null}_renderAction(e){const{item:t,action:i,textEnabled:o}=e,{active:s,disabled:n,title:l,type:r,indicator:c}=i;return E("calcite-action",{active:"toggle"===r&&i.value,appearance:"transparent",disabled:n,icon:a(i),indicator:c,key:`action-${i.uid}`,loading:s,onclick:()=>this._triggerAction(t,i),scale:"s",slot:o?void 0:"actions-end",text:l??"",textEnabled:o,title:l??void 0},this._renderFallbackIcon(i))}_setTooltipReference(e,t){this._tooltipReferenceMap.set(t.layer.uid,e)}_removeTooltipReference(e){this._tooltipReferenceMap.delete(e.layer.uid)}_moveLayerFromChildList({toEl:e,fromEl:t,dragEl:i,newIndex:o}){const s=g(i),n=g(e),l=g(t);this.viewModel.moveListItem(s,l,n,o)}_handleCalciteListDragEnd(e){const{fromEl:t,dragEl:i,oldIndex:o}=e;t.insertBefore(i,t.children[o])}_sortLayers(e,t){if(e)if(e.group===y)I(this.view?.map?.layers,t);else{const i=g(e);if(!i)return;w(i,t)}}_getSingleActionButton(e){return e.reduce((e=>e)).filter((e=>e&&"button"===e.type)).at(0)}_filterActions(e){return e.map((e=>e.filter((e=>e.visible))))}_countActions(e){return e.reduce(((e,t)=>e+t.length),0)}_triggerAction(e,t){t&&e&&("toggle"===t.type&&(t.value=!t.value),this.triggerAction(t,e))}_handleCalciteListChange(e){const{selectionMode:t,selectedItems:i}=this;if("none"===t)return;const o=e.target.selectedItems.map((e=>g(e))).filter(Boolean);i.removeAll(),i.addMany(o)}_handleCalciteListItemToggle(e,t){e.stopPropagation(),t.open=e.target.open}_focusSelectedDragEl(e,t){this._selectedDragItemLayerUid===t.layer.uid&&requestAnimationFrame((()=>e?.setFocus()))}_handleCalciteListItemDragHandleChange(e,t){e.stopPropagation();const i=e.target.dragSelected;this._selectedDragItemLayerUid=i?t.layer.uid:null}_handleCalciteListItemSelect(e,t,i){g(e.target)===t&&"none"===this.selectionMode&&"inherited"!==i?.visibilityMode&&this._toggleVisibility(t,i)}_togglePanel(e){e.open=!e.open,e.open&&(this._focusPanelFlowItem=!0)}_toggleVisibility(e,t){if(!e)return;const i=t?.visibilityMode;"exclusive"===i&&e.visible||(e.visible=!e.visible)}};e([l()],R.prototype,"_activeItem",void 0),e([l()],R.prototype,"_tooltipReferenceMap",void 0),e([l()],R.prototype,"_focusRootFlowItem",void 0),e([l()],R.prototype,"_focusPanelFlowItem",void 0),e([l()],R.prototype,"collapsed",void 0),e([l()],R.prototype,"dragEnabled",void 0),e([l()],R.prototype,"filterPlaceholder",void 0),e([l()],R.prototype,"filterText",void 0),e([l()],R.prototype,"headingLevel",void 0),e([l()],R.prototype,"icon",void 0),e([l()],R.prototype,"iconClass",void 0),e([l()],R.prototype,"label",null),e([l()],R.prototype,"listItemCanGiveFunction",void 0),e([l()],R.prototype,"listItemCanReceiveFunction",void 0),e([l()],R.prototype,"listItemCreatedFunction",null),e([l(),L("esri/widgets/LayerList/t9n/LayerList")],R.prototype,"messages",void 0),e([l(),L("esri/t9n/common")],R.prototype,"messagesCommon",void 0),e([l()],R.prototype,"multipleSelectionEnabled",null),e([l()],R.prototype,"operationalItems",null),e([l()],R.prototype,"selectionEnabled",null),e([l()],R.prototype,"selectedItems",void 0),e([l()],R.prototype,"selectionMode",void 0),e([l()],R.prototype,"view",null),e([C("trigger-action"),l({type:u})],R.prototype,"viewModel",void 0),e([l()],R.prototype,"visibilityAppearance",void 0),e([l({type:x,nonNullable:!0})],R.prototype,"visibleElements",void 0),R=e([r("esri.widgets.LayerList")],R);const B=R;export{B as default};