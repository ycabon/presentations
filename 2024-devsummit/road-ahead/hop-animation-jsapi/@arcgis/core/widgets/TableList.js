/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as e}from"../chunks/tslib.es6.js";import t from"../core/Collection.js";import i,{d as o}from"../core/Accessor.js";import{L as s}from"../chunks/Logger.js";import{property as n}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import{subclass as l}from"../core/accessorSupport/decorators/subclass.js";import{g as r,a}from"../chunks/actionUtils.js";import c,{l as d}from"./Widget.js";import{h as m,s as p}from"../chunks/layerListUtils.js";import{g as u}from"../chunks/globalCss.js";import"../chunks/widgetUtils.js";import{m as h}from"../chunks/messageBundle.js";import{v as g}from"../chunks/vmEvent.js";import{t as b}from"../chunks/jsxFactory.js";import{l as f}from"../chunks/legacyIcon.js";import v from"./TableList/ListItem.js";import y from"./TableList/TableListViewModel.js";import"../core/Evented.js";import"../chunks/handleUtils.js";import"../core/Handles.js";import"../config.js";import"../chunks/maybe.js";import"../chunks/ensureType.js";import"../chunks/utils.js";import"../chunks/metadata.js";import"../core/Error.js";import"../chunks/ObservableBase.js";import"../chunks/tracking.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../intl.js";import"../chunks/date.js";import"../chunks/jsonMap.js";import"../chunks/locale.js";import"../chunks/timeZoneUtils.js";import"../chunks/datetime.js";import"../chunks/messages.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../core/JSONSupport.js";import"../chunks/assets.js";import"../chunks/domUtils.js";import"../core/Promise.js";import"../core/reactiveUtils.js";import"../chunks/asyncUtils.js";import"../chunks/uuid.js";import"../core/accessorSupport/decorators/cast.js";import"../chunks/projector.js";import"../chunks/jsxWidgetSupport.js";import"../core/Identifiable.js";import"../support/actions/ActionBase.js";import"../support/actions/ActionButton.js";import"../chunks/ActionSlider.js";import"../support/actions/ActionToggle.js";import"./TableList/ListItemPanel.js";import"./support/widget.js";import"../chunks/accessibleHandler.js";import"../chunks/themeUtils.js";const _="esri-table-list",I=`${_}__item`,j={base:_,widgetIcon:f.table,filterNoResults:`${_}__filter-no-results`,item:I,itemContent:`${I}-content`,itemContentBottom:`${I}-content-bottom`,itemMessage:`${I}-message`,itemActionIcon:`${I}-action-icon`,itemActionImage:`${I}-action-image`,publishing:`${_}__publishing`};let k=class extends i{constructor(){super(...arguments),this.closeButton=!1,this.collapseButton=!1,this.errors=!1,this.filter=!1,this.flow=!0,this.heading=!1,this.statusIndicators=!0}};e([n({type:Boolean,nonNullable:!0})],k.prototype,"closeButton",void 0),e([n({type:Boolean,nonNullable:!0})],k.prototype,"collapseButton",void 0),e([n({type:Boolean,nonNullable:!0})],k.prototype,"errors",void 0),e([n({type:Boolean,nonNullable:!0})],k.prototype,"filter",void 0),e([n({type:Boolean,nonNullable:!0})],k.prototype,"flow",void 0),e([n({type:Boolean,nonNullable:!0})],k.prototype,"heading",void 0),e([n({type:Boolean,nonNullable:!0})],k.prototype,"statusIndicators",void 0),k=e([l("esri.widgets.TableList.TableListVisibleElements")],k);const w=k;function E(e){return e["data-item"]}const C=t.ofType(v);let F=class extends c{constructor(e,t){super(e,t),this._focusRootFlowItem=!1,this._focusPanelFlowItem=!1,this._lastDragDetail=null,this._selectedDragItemLayerUid=null,this.collapsed=!1,this.dragEnabled=!1,this.filterPlaceholder="",this.filterText="",this.headingLevel=2,this.icon=null,this.iconClass=j.widgetIcon,this.listItemCanGiveFunction=null,this.listItemCanReceiveFunction=null,this.messages=null,this.messagesCommon=null,this.selectedItems=new C,this.selectionMode="none",this.viewModel=new y,this.visibleElements=new w,this._canMove=({dragEl:e,fromEl:t,toEl:i},o)=>{const s="pull"===o?this.listItemCanGiveFunction:this.listItemCanReceiveFunction,n=E(e);if(!n?.sortable)return!1;const l=E(t),r=m(t),a=E(i),c=m(i),d=!!r&&!!c&&r===c,p={selected:n,from:l,to:a};return t.group&&i.group&&"function"==typeof s?s.call(null,p):d},this._onCalciteListOrderChange=e=>{const{_lastDragDetail:t,tableItems:i}=this,{toEl:o,fromEl:s,dragEl:n,oldIndex:l,newIndex:r}=e;if(!s||!o||t?.newIndex===r&&t?.dragEl===n&&t?.toEl===o&&t?.fromEl===s)return;this._lastDragDetail=e;const a=E(n);if(!a)return;const c=a.layer.uid,d=i.map((e=>e.layer.uid)).toArray();var m,p;d.splice(l,1),d.splice(r,0,c),m=this.map?.tables,p=d,m?.sort(((e,t)=>{const i=p.indexOf(e.uid),o=p.indexOf(t.uid);return i>o?-1:i<o?1:0}))}}loadDependencies(){return d({action:()=>import("../chunks/calcite-action.js"),"action-group":()=>import("../chunks/calcite-action-group.js"),"action-menu":()=>import("../chunks/calcite-action-menu.js"),button:()=>import("../chunks/calcite-button.js"),flow:()=>import("../chunks/calcite-flow.js"),"flow-item":()=>import("../chunks/calcite-flow-item.js"),icon:()=>import("../chunks/calcite-icon.js"),list:()=>import("../chunks/calcite-list.js"),"list-item":()=>import("../chunks/calcite-list-item.js"),notice:()=>import("../chunks/calcite-notice.js")})}get label(){return this.messages?.widgetLabel??""}set label(e){this._overrideIfSome("label",e)}get listItemCreatedFunction(){return this.viewModel.listItemCreatedFunction}set listItemCreatedFunction(e){this.viewModel.listItemCreatedFunction=e}get map(){return this.viewModel.map}set map(e){this.viewModel.map=e}get multipleSelectionEnabled(){return o(s.getLogger(this),"multipleSelectionEnabled",{replacement:"selectionMode",version:"4.29",warnOnce:!0}),"multiple"===this.selectionMode}set multipleSelectionEnabled(e){o(s.getLogger(this),"multipleSelectionEnabled",{replacement:"selectionMode",version:"4.29",warnOnce:!0}),this.selectionMode=e?"multiple":this.selectionEnabled?"single":"none"}get selectionEnabled(){return o(s.getLogger(this),"selectionEnabled",{replacement:"selectionMode, dragEnabled",version:"4.29",warnOnce:!0}),"none"!==this.selectionMode&&this.dragEnabled}set selectionEnabled(e){o(s.getLogger(this),"selectionEnabled",{replacement:"selectionMode, dragEnabled",version:"4.29",warnOnce:!0}),this.dragEnabled=e,this.selectionMode=e?this.multipleSelectionEnabled?"multiple":"single":"none"}get tableItems(){return this.viewModel.tableItems}triggerAction(e,t){return this.viewModel.triggerAction(e,t)}render(){const e=this.viewModel?.state,t={[u.hidden]:"loading"===e,[u.disabled]:"disabled"===e},i=this.tableItems?.filter((e=>!e.hidden&&(this.visibleElements.errors||!e.error)));return b("div",{class:this.classes(j.base,u.widget,u.panel,t)},i?.length?this._renderItems(i):this._renderNoItems())}_renderNoItemsMessage(){return b("div",{slot:"message"},this.messages.noItemsToDisplay)}_renderNoItems(){return b("div",{class:j.itemMessage,key:"esri-layer-list__no-items"},b("calcite-notice",{icon:"information",kind:"info",open:!0,scale:"m",width:"full"},this._renderNoItemsMessage()))}_renderPanelFlowItems(e){return e?.toArray().filter((({panel:e})=>e?.open&&!e.disabled&&e.flowEnabled)).map((({title:e,panel:t})=>{const i=()=>this._handlePanelFlowItemBack(t);return b("calcite-flow-item",{afterCreate:this._focusPanelFlowItemNode,afterUpdate:this._focusPanelFlowItemNode,bind:this,description:e,heading:t.title,headingLevel:this.headingLevel,key:`flow-panel-${t.uid}`,onCalciteFlowItemBack:e=>{e.preventDefault(),i()}},t.render(),b("calcite-button",{appearance:"transparent",onclick:i,slot:"footer-actions",width:"full"},this.messagesCommon.back))}))}_handlePanelFlowItemBack(e){e.open=!1,this._focusRootFlowItem=!0}_focusRootFlowItemNode(e){this._focusRootFlowItem&&(this._focusRootFlowItem=!1,requestAnimationFrame((()=>e?.setFocus())))}_focusPanelFlowItemNode(e){this._focusPanelFlowItem&&(this._focusPanelFlowItem=!1,requestAnimationFrame((()=>e?.setFocus())))}_renderItems(e){const{visible:t,collapsed:i,visibleElements:{closeButton:o,collapseButton:s,filter:n,heading:l,flow:r},dragEnabled:a,selectionMode:c,messages:d,filterPlaceholder:m,filterText:u}=this,h=[b("calcite-flow-item",{afterCreate:this._focusRootFlowItemNode,afterUpdate:this._focusRootFlowItemNode,bind:this,closable:o,closed:!t,collapsed:i,collapsible:s,heading:l?d.widgetLabel:void 0,headingLevel:this.headingLevel,key:"root-flow-item",onCalciteFlowItemClose:()=>this.visible=!1},b("calcite-list",{canPull:e=>this._canMove(e,"pull"),canPut:e=>this._canMove(e,"put"),"data-layer-type":"table",dragEnabled:a,filterEnabled:n,filterPlaceholder:m,filterText:u,group:p,key:"root-list",label:d.widgetLabel,selectionAppearance:"border",selectionMode:c,onCalciteListChange:e=>this._handleCalciteListChange(e),onCalciteListDragEnd:e=>this._handleCalciteListDragEnd(e.detail),onCalciteListFilter:e=>this.filterText=e.target?.filterText??"",onCalciteListOrderChange:e=>this._onCalciteListOrderChange(e.detail)},e?.toArray().map((e=>this._renderItem(e))),b("div",{class:j.filterNoResults,slot:"filter-no-results"},b("calcite-notice",{kind:"info",open:!0,scale:"m",width:"full"},this._renderNoItemsMessage())))),this._renderPanelFlowItems(e)];return t?r?b("calcite-flow",{key:"root-flow"},h):h:null}_handleCalciteListDragEnd(e){const{fromEl:t,dragEl:i,oldIndex:o}=e;t.insertBefore(i,t.children[o])}_renderItemMessage(e){return e.error?b("div",{class:j.itemMessage,key:"esri-layer-list__error",slot:"content-bottom"},b("calcite-notice",{icon:"exclamation-mark-triangle",kind:"warning",open:!0,scale:"s",width:"full"},b("div",{slot:"message"},this.messages.tableError))):null}_renderItem(e){const{_selectedDragItemLayerUid:t,selectionMode:i,selectedItems:o,messages:s}=this,n=e.title||s.untitledTable,l=this._filterActions(e.actionsSections),r=this._countActions(l);return b("calcite-list-item",{afterCreate:t=>this._focusSelectedDragEl(t,e),afterUpdate:t=>this._focusSelectedDragEl(t,e),class:j.item,"data-item":e,dragDisabled:!e.sortable,dragSelected:e.layer.uid===t,id:e.layer?.uid,key:`list-item-${e.layer.uid}`,selected:"none"!==i&&o.includes(e),title:n,value:n,onCalciteListItemDragHandleChange:t=>this._handleCalciteListItemDragHandleChange(t,e)},b("div",{class:j.itemContent,slot:"content"},n),this._renderItemStatus(e),this._renderItemMessage(e),this._renderPanel(e.panel),this._renderPanelAction(e.panel),r>1?this._renderActionsSections(e,l):1===r?this._renderAction({item:e,action:this._getSingleActionButton(l),textEnabled:!1}):null)}_renderItemStatus(e){const{visibleElements:t}=this;if(!t.statusIndicators)return null;const{publishing:i}=e;return b("calcite-icon",{class:this.classes({[j.publishing]:i}),icon:i?"stop-square":"blank",key:"layer-item-status",scale:"s",slot:"actions-end"})}_renderPanel(e){return!e?.open||e.disabled||e.flowEnabled?null:b("div",{class:j.itemContentBottom,key:`content-panel-${e.uid}`,slot:"content-bottom"},e.render())}_renderPanelAction(e){if(!e?.visible)return null;const{open:t,title:i,disabled:o}=e;return b("calcite-action",{active:t,appearance:"transparent",disabled:o,icon:r(e),key:`action-${e.uid}`,onclick:()=>this._togglePanel(e),scale:"s",slot:"actions-end",text:i??"",title:i??void 0},this._renderFallbackIcon(e))}_renderActionsSections(e,t){return b("calcite-action-menu",{appearance:"transparent",key:"item-action-menu",label:this.messagesCommon.menu,open:e.actionsOpen,overlayPositioning:"fixed",placement:"bottom-end",scale:"s",slot:"actions-end",onCalciteActionMenuOpen:t=>e.actionsOpen=t.target.open},t.toArray().map(((t,i)=>this._renderActionSection(e,t,i))))}_renderActionSection(e,t,i){return b("calcite-action-group",{key:`action-section-${i}`},t.toArray().map((t=>this._renderAction({item:e,action:t,textEnabled:!0}))))}_renderFallbackIcon(e){const{className:t,icon:i}=e;if(i)return null;const o="image"in e?e.image:void 0,s={[j.itemActionIcon]:!!t,[j.itemActionImage]:!!o};return t&&(s[t]=!0),o||t?b("span",{"aria-hidden":"true",class:this.classes(j.itemActionIcon,s),key:"icon",styles:a(o)}):null}_renderAction(e){const{item:t,action:i,textEnabled:o}=e,{active:s,disabled:n,title:l,type:a,indicator:c}=i;return b("calcite-action",{active:"toggle"===a&&i.value,appearance:"transparent",disabled:n,icon:r(i),indicator:c,key:`action-${i.uid}`,loading:s,onclick:()=>this._triggerAction(t,i),scale:"s",slot:o?void 0:"actions-end",text:l??"",textEnabled:o,title:l??void 0},this._renderFallbackIcon(i))}_filterActions(e){return e.map((e=>e.filter((e=>e.visible))))}_getSingleActionButton(e){return e.reduce((e=>e)).filter((e=>e&&"button"===e.type)).at(0)}_countActions(e){return e.reduce(((e,t)=>e+t.length),0)}_focusSelectedDragEl(e,t){this._selectedDragItemLayerUid===t.layer.uid&&requestAnimationFrame((()=>e?.setFocus()))}_handleCalciteListItemDragHandleChange(e,t){e.stopPropagation();const i=e.target.dragSelected;this._selectedDragItemLayerUid=i?t.layer.uid:null}_handleCalciteListChange(e){const{selectionMode:t,selectedItems:i}=this;if("none"===t)return;const o=e.target.selectedItems.map((e=>E(e))).filter(Boolean);i.removeAll(),i.addMany(o)}_togglePanel(e){e.open=!e.open,e.open&&(this._focusPanelFlowItem=!0)}_triggerAction(e,t){t&&e&&("toggle"===t.type&&(t.value=!t.value),this.triggerAction(t,e))}};e([n()],F.prototype,"_focusRootFlowItem",void 0),e([n()],F.prototype,"_focusPanelFlowItem",void 0),e([n()],F.prototype,"collapsed",void 0),e([n()],F.prototype,"dragEnabled",void 0),e([n()],F.prototype,"filterPlaceholder",void 0),e([n()],F.prototype,"filterText",void 0),e([n()],F.prototype,"headingLevel",void 0),e([n()],F.prototype,"icon",void 0),e([n()],F.prototype,"iconClass",void 0),e([n()],F.prototype,"label",null),e([n()],F.prototype,"listItemCanGiveFunction",void 0),e([n()],F.prototype,"listItemCanReceiveFunction",void 0),e([n()],F.prototype,"listItemCreatedFunction",null),e([n()],F.prototype,"map",null),e([n(),h("esri/widgets/TableList/t9n/TableList")],F.prototype,"messages",void 0),e([n(),h("esri/t9n/common")],F.prototype,"messagesCommon",void 0),e([n()],F.prototype,"multipleSelectionEnabled",null),e([n()],F.prototype,"selectionEnabled",null),e([n()],F.prototype,"selectedItems",void 0),e([n()],F.prototype,"selectionMode",void 0),e([n({readOnly:!0})],F.prototype,"tableItems",null),e([g("trigger-action"),n({type:y})],F.prototype,"viewModel",void 0),e([n({type:w,nonNullable:!0})],F.prototype,"visibleElements",void 0),F=e([l("esri.widgets.TableList")],F);const L=F;export{L as default};