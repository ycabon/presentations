/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as e}from"../../chunks/tslib.es6.js";import{i as t}from"../../core/lang.js";import{d as s}from"../../chunks/maybe.js";import i,{g as l}from"../../core/Accessor.js";import{property as n}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/Logger.js";import{subclass as o}from"../../core/accessorSupport/decorators/subclass.js";import a,{l as r}from"../Widget.js";import{g as c}from"../../chunks/globalCss.js";import"../../chunks/widgetUtils.js";import{t as p,a as d}from"../../chunks/jsxFactory.js";import{l as h}from"../../chunks/legacyIcon.js";import{m as u}from"../../chunks/messageBundle.js";import g from"./SnappingControls/SnappingControlsViewModel.js";import"../../core/Handles.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../config.js";import"../../chunks/ensureType.js";import"../../intl.js";import"../../chunks/date.js";import"../../chunks/jsonMap.js";import"../../chunks/locale.js";import"../../chunks/timeZoneUtils.js";import"../../chunks/datetime.js";import"../../chunks/messages.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../core/JSONSupport.js";import"../../chunks/assets.js";import"../../chunks/domUtils.js";import"../../core/Evented.js";import"../../core/Promise.js";import"../../core/reactiveUtils.js";import"../../chunks/asyncUtils.js";import"../../core/Collection.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../chunks/uuid.js";import"../../core/accessorSupport/decorators/cast.js";import"../../chunks/projector.js";import"../../chunks/jsxWidgetSupport.js";import"../../views/interactive/snapping/FeatureSnappingLayerSource.js";import"../../views/interactive/snapping/SnappingOptions.js";import"../../chunks/Settings.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/vec3f64.js";import"../../chunks/common.js";import"../../chunks/layerListUtils.js";import"../LayerList/LayerListViewModel.js";import"../LayerList/ListItem.js";import"../../core/Identifiable.js";import"../../support/actions/ActionBase.js";import"../../support/actions/ActionButton.js";import"../../chunks/ActionSlider.js";import"../../support/actions/ActionToggle.js";import"../LayerList/ListItemPanel.js";import"./widget.js";import"../../chunks/accessibleHandler.js";import"../../chunks/vmEvent.js";import"../../chunks/themeUtils.js";let m=class extends i{constructor(e){super(e),this.enabledToggle=!0,this.featureEnabledToggle=!0,this.header=!1,this.layerList=!0,this.layerListToggleLayersButton=!0,this.selfEnabledToggle=!0}};e([n({type:Boolean,nonNullable:!0})],m.prototype,"enabledToggle",void 0),e([n({type:Boolean,nonNullable:!0})],m.prototype,"featureEnabledToggle",void 0),e([n({type:Boolean,nonNullable:!0})],m.prototype,"header",void 0),e([n({type:Boolean,nonNullable:!0})],m.prototype,"layerList",void 0),e([n({type:Boolean,nonNullable:!0})],m.prototype,"layerListToggleLayersButton",void 0),e([n({type:Boolean,nonNullable:!0})],m.prototype,"selfEnabledToggle",void 0),m=e([o("esri.widgets.support.SnappingControls.VisibleElements")],m);const b=m,y=()=>Promise.all([r({icon:()=>import("../../chunks/calcite-icon.js"),label:()=>import("../../chunks/calcite-label.js"),switch:()=>import("../../chunks/calcite-switch.js"),tooltip:()=>import("../../chunks/calcite-tooltip.js")})]),_="esri-labeled-switch",k={label:`${_}__label`,labelContent:`${_}__label-content`,icon:`${_}__icon`,tooltip:`${_}__tooltip`};function L({checked:e,disabled:t,hint:s,key:i,label:l,onChange:n}){return p("calcite-label",{class:k.label,disabled:t,key:i,layout:"inline-space-between",scale:"s"},p("div",{class:k.labelContent,key:"label-content"},s?p(d,null,p("div",null,l),p("calcite-icon",{class:k.icon,icon:"information",id:i,scale:"s"}),p("calcite-tooltip",{class:k.tooltip,referenceElement:i},s)):l),p("calcite-switch",{checked:e,disabled:t,scale:"s",onCalciteSwitchChange:e=>n(e.target.checked)}))}const j="esri-snapping-controls",v={base:j,widgetIcon:h.vertexGps,container:`${j}__container`,item:`${j}__item`,toggleBlock:`${j}__toggle-block`,layerListBlock:`${j}__layer-list-block`,layerList:`${j}__layer-list`,layerListFilter:`${j}__layer-list__filter`,layerListButton:`${j}__layer-list__button`,layerListItem:`${j}__layer-list__item`,layerListGroup:`${j}__layer-list__group`,nestedContainer:`${j}__nested-container`},w="check-square-f",f="square";let C=class extends a{constructor(e,t){super(e,t),this._defaultViewModel=null,this._layerListFilter=null,this.iconClass=v.widgetIcon,this.icon=null,this.layerListOpen=!0,this.messages=null,this.visibleElements=new b,this._enableSnappingSwitchChange=e=>{this.snappingOptions.enabled=e},this._featureEnabledSwitchChange=e=>{this.snappingOptions.featureEnabled=e},this._selfEnabledSwitchChange=e=>{this.snappingOptions.selfEnabled=e},this._onToggleLayersButtonClick=e=>{this.viewModel.toggleSnappingForAllLayers(!this.viewModel.allLayersEnabled),requestAnimationFrame((()=>e.target.setFocus()))};const{snappingOptions:s,view:i,viewModel:l}=e;this.viewModel=l??(this._defaultViewModel=new g({snappingOptions:s,view:i}))}normalizeCtorArgs(e){const{snappingOptions:t,view:s,viewModel:i,...l}=e;return l}destroy(){this.viewModel!==this._defaultViewModel&&(this._defaultViewModel=s(this._defaultViewModel))}loadDependencies(){return Promise.all([r({accordion:()=>import("../../chunks/calcite-accordion.js"),"accordion-item":()=>import("../../chunks/calcite-accordion-item.js"),action:()=>import("../../chunks/calcite-action.js"),block:()=>import("../../chunks/calcite-block.js"),button:()=>import("../../chunks/calcite-button.js"),icon:()=>import("../../chunks/calcite-icon.js"),input:()=>import("../../chunks/calcite-input.js"),list:()=>import("../../chunks/calcite-list.js"),"list-item":()=>import("../../chunks/calcite-list-item.js")}),y()])}get label(){return this.messages?.widgetLabel??""}set label(e){this._overrideIfSome("label",e)}get snappingOptions(){return this.viewModel.snappingOptions}set snappingOptions(e){this.viewModel.snappingOptions=e}get view(){return this.viewModel.view}set view(e){this.viewModel.view=e}set viewModel(e){e!==this._get("viewModel")&&(null!=this._defaultViewModel&&this._defaultViewModel===e||(this._defaultViewModel=s(this._defaultViewModel)),this._set("viewModel",e))}render(){const{label:e}=this;return p("div",{"aria-label":e,class:this.classes(v.base,c.widget)},p("div",{class:v.container},this._renderContent()))}_renderContent(){return[this._renderToggles(),this._renderLayerList()]}_renderToggles(){const{visibleElements:e}=this,s=[e.selfEnabledToggle?this._renderSelfEnabledToggle():null,e.featureEnabledToggle?this._renderFeatureEnabledToggle():null].filter(t),i=[e.enabledToggle?this._renderEnabledToggle():null,s.length>0?p("div",{class:v.nestedContainer},s):null].filter(t);return 0===i.length?null:p("calcite-block",{class:v.toggleBlock,heading:e.header?this.label:"",key:"toggle-block",open:!0},i)}_renderEnabledToggle(){const{messages:e,viewModel:t}=this,{snappingOptions:s}=t;return p(L,{checked:s.enabled,disabled:this._enabledToggleDisabled,key:`${this.id}__enabled-toggle`,label:e.enableSnapping,onChange:this._enableSnappingSwitchChange})}_renderSelfEnabledToggle(){const{messages:e,viewModel:t}=this,{snappingOptions:s}=t,i=s.enabled&&s.selfEnabled;return p(L,{checked:i,disabled:this._secondaryElementsDisabled,key:`${this.id}__self-enabled-toggle`,label:e.geometryGuides,onChange:this._selfEnabledSwitchChange})}_renderFeatureEnabledToggle(){const{messages:e,viewModel:t}=this,{snappingOptions:s}=t,i=s.enabled&&s.featureEnabled;return p(L,{checked:i,disabled:this._secondaryElementsDisabled,key:`${this.id}__feature-enabled-toggle`,label:e.featureToFeature,onChange:this._featureEnabledSwitchChange})}_renderLayerList(){if(!this.visibleElements.layerList)return null;const{messages:e,viewModel:t}=this,s=t.layerListViewModel.operationalItems.length>9?p("calcite-input",{class:v.layerListFilter,clearable:!0,placeholder:e?.searchLayers,onCalciteInputInput:({target:{value:e}})=>{this._layerListFilter=""===e?null:new RegExp(e,"i")}}):null,i=this._secondaryElementsDisabled,l=this.layerListOpen&&!i;return p("calcite-block",{class:v.layerListBlock,collapsible:!0,disabled:this._secondaryElementsDisabled,heading:e.snappingLayers,key:"list-block",open:l,onCalciteBlockToggle:e=>this.layerListOpen=e.target.open},s,this._renderToggleLayersButton(),p("calcite-list",{class:v.layerList},this._renderLayerListItemCollection(t.layerListViewModel.operationalItems,this._layerListFilter)))}_renderLayerListItemCollection(e,s){return e.map((e=>{if(!s||this._itemTitleMatchesFilter(e,s))return e.children.length>0?this._renderLayerListItemGroup(e):this._renderLayerListItem(e);const t=e.children.filter((e=>this._itemTitleMatchesFilter(e,s)));return t.length>0?this._renderLayerListItemGroup(e,t):null})).toArray().filter(t)}_renderToggleLayersButton(){if(!this.visibleElements.layerListToggleLayersButton)return null;const{viewModel:{allLayersEnabled:e},messages:t}=this,s=e?t.disableAllLayers:t.enableAllLayers;return p("calcite-button",{appearance:"transparent",class:v.layerListButton,label:s,name:"layer-toggle",onclick:this._onToggleLayersButtonClick,scale:"m"},s)}_renderLayerListItem(e){const{messages:{untitledLayer:t}}=this,s=e.title||t,i=e.enabled;return p("calcite-list-item",{class:v.layerListItem,key:`${this.id}-list-item-${e.uid}`,label:s,onCalciteListItemSelect:()=>{this._handleLayerListItemChange({checked:!i,value:e.layer.id})}},p("calcite-icon",{icon:i?w:f,scale:"s",slot:"content-start"}))}_renderLayerListItemGroup(e,t){const{allChildrenEnabled:s,children:i,hasChildrenEnabled:n,title:o}=e,a=this.messages,r=o||a.untitledLayer,c=o&&""!==o?o:l(),d=!!t,h=t??i,u=s?w:n?"minus-square":f,g=s?a.disableAllLayers:a.enableAllLayers;return p("calcite-list-item",{class:v.layerListItem,key:c},p("calcite-accordion",{appearance:"transparent",class:v.layerListGroup},p("calcite-accordion-item",{expanded:d,heading:r,key:e.uid},p("calcite-action",{onclick:()=>{this.viewModel.toggleSnappingForLayers(e.childLayerIds,!s)},scale:"m",slot:"actions-start",text:g,textEnabled:!1},p("calcite-icon",{icon:u,scale:"s"})),p("calcite-list",null,this._renderLayerListItemCollection(h)))))}_itemTitleMatchesFilter(e,t){return null!=t&&t.test(e.title)}async _handleLayerListItemChange(e){e.checked?this.viewModel.enableSnappingForLayer(e.value):this.viewModel.disableSnappingForLayer(e.value)}get _enabledToggleDisabled(){const e=this.snappingOptions;return e.enabledToggled||e.forceDisabled}get _secondaryElementsDisabled(){return this._enabledToggleDisabled||!this.snappingOptions.enabled}};e([n()],C.prototype,"_defaultViewModel",void 0),e([n()],C.prototype,"_layerListFilter",void 0),e([n()],C.prototype,"iconClass",void 0),e([n()],C.prototype,"icon",void 0),e([n()],C.prototype,"label",null),e([n({type:Boolean,nonNullable:!0})],C.prototype,"layerListOpen",void 0),e([n(),u("esri/widgets/support/SnappingControls/t9n/SnappingControls")],C.prototype,"messages",void 0),e([n()],C.prototype,"snappingOptions",null),e([n()],C.prototype,"view",null),e([n()],C.prototype,"viewModel",null),e([n({type:b,nonNullable:!0})],C.prototype,"visibleElements",void 0),e([n()],C.prototype,"_enabledToggleDisabled",null),e([n()],C.prototype,"_secondaryElementsDisabled",null),C=e([o("esri.widgets.support.SnappingControls")],C);const E=C;export{L,b as S,E as default,y as l};