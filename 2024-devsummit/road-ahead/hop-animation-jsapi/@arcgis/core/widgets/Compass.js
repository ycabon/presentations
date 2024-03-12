/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as s}from"../chunks/tslib.es6.js";import{property as e}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"../chunks/Logger.js";import{subclass as o}from"../core/accessorSupport/decorators/subclass.js";import t,{l as r}from"./Widget.js";import i from"./Compass/CompassViewModel.js";import{l as c}from"../chunks/legacyIcon.js";import{g as n}from"../chunks/globalCss.js";import"../chunks/widgetUtils.js";import{m as p}from"../chunks/messageBundle.js";import{t as a}from"../chunks/jsxFactory.js";import"../chunks/ensureType.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../core/Error.js";import"../config.js";import"../chunks/tracking.js";import"../intl.js";import"../chunks/date.js";import"../chunks/jsonMap.js";import"../chunks/locale.js";import"../chunks/timeZoneUtils.js";import"../chunks/datetime.js";import"../chunks/messages.js";import"../core/promiseUtils.js";import"../chunks/maybe.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/ObservableBase.js";import"../core/scheduling.js";import"../chunks/assets.js";import"../chunks/domUtils.js";import"../core/Evented.js";import"../core/Promise.js";import"../core/reactiveUtils.js";import"../chunks/asyncUtils.js";import"../core/Collection.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../chunks/uuid.js";import"../core/accessorSupport/decorators/cast.js";import"../chunks/projector.js";import"../chunks/jsxWidgetSupport.js";import"../chunks/utils18.js";import"./support/GoTo.js";const l="esri-compass",m={base:l,widgetIcon:c.locateCircled,iconContainer:`${l}__icon-container`};let u=class extends t{constructor(s,e){super(s,e),this.iconClass=m.widgetIcon,this.icon=null,this.messages=null,this.viewModel=new i,this._reset=()=>{this.viewModel.reset()},this._toRotationTransform=s=>({transform:`rotateZ(${s.z}deg)`})}loadDependencies(){return r({button:()=>import("../chunks/calcite-button.js"),icon:()=>import("../chunks/calcite-icon.js")})}get goToOverride(){return this.viewModel.goToOverride}set goToOverride(s){this.viewModel.goToOverride=s}get label(){return this.messages?.widgetLabel??""}set label(s){this._overrideIfSome("label",s)}get view(){return this.viewModel.view}set view(s){this.viewModel.view=s}reset(){return this.viewModel.reset()}render(){const{orientation:s,state:e}=this.viewModel,o="rotation"===e?"arrow-up":"compass-needle",t=this.icon??o,{messages:r}=this;return a("div",{class:this.classes(m.base,n.widget)},a("calcite-button",{class:n.widgetButton,disabled:"disabled"===e,kind:"neutral",label:r.reset,onclick:this._reset,round:!0,scale:"s",title:r.reset},a("div",{"aria-hidden":"true",class:m.iconContainer,title:r.reset},a("calcite-icon",{icon:t,scale:"m",styles:this._toRotationTransform(s)}))))}};s([e()],u.prototype,"goToOverride",null),s([e()],u.prototype,"iconClass",void 0),s([e()],u.prototype,"icon",void 0),s([e()],u.prototype,"label",null),s([e(),p("esri/widgets/Compass/t9n/Compass")],u.prototype,"messages",void 0),s([e()],u.prototype,"view",null),s([e({type:i})],u.prototype,"viewModel",void 0),u=s([o("esri.widgets.Compass")],u);const d=u;export{d as default};
