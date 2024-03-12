/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import"../../intl.js";import i from"../../core/Accessor.js";import e from"../../core/Collection.js";import r from"../../core/Error.js";import{L as s}from"../../chunks/Logger.js";import{watch as o,initial as a,on as n}from"../../core/reactiveUtils.js";import{property as l}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import{subclass as p}from"../../core/accessorSupport/decorators/subclass.js";import{U as d}from"../../chunks/UpdatingHandles.js";import{a as h}from"../../chunks/layerUtils2.js";import c from"../../portal/Portal.js";import{h as u}from"../../chunks/utils20.js";import{o as y}from"../../chunks/locale.js";import{f as m}from"../../chunks/messages.js";import"../../chunks/date.js";import"../../chunks/jsonMap.js";import"../../config.js";import"../../chunks/timeZoneUtils.js";import"../../chunks/datetime.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../core/JSONSupport.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../core/promiseUtils.js";import"../../chunks/maybe.js";import"../../chunks/assets.js";import"../../core/Handles.js";import"../../chunks/metadata.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../core/Evented.js";import"../../chunks/ensureType.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../chunks/asyncUtils.js";import"../../core/Loadable.js";import"../../core/Promise.js";import"../../chunks/reader.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../geometry/SpatialReference.js";import"../../chunks/unitUtils.js";import"../../chunks/writer.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../portal/PortalGroup.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";let g=class extends i{constructor(t){super(t),this._activeOperationDidSucceed=!1,this._initialValidationsFinished=!1,this._dirtyAreasLayer=null,this._serverVersion=null,this._updatingHandles=new d,this._validConstructProperties=!1,this.executionError="",this.extentToValidate="current",this.loadErrors=new e}initialize(){const t=async()=>{this.messages||(this.messages=await m("esri/widgets/UtilityNetworkValidateTopology/t9n/UtilityNetworkValidateTopology"))};t().then((()=>{this.view||(this.view=null),this.utilityNetwork||(this.utilityNetwork=null),this.addHandles([o((()=>[this.view,this.utilityNetwork]),(async()=>{const{loadErrors:t,messages:{info:{noUtilityNetwork:i,noView:e}}}=this;this._initialValidationsFinished=!1,t.removeAll(),this._validConstructProperties=!0,this._dirtyAreasLayer=null,this._serverVersion=null,"utility"!==this.utilityNetwork?.type&&(this.loadErrors.push(i),s.getLogger(this).error(new r("utilityNetworkValidateTopology:missing-property",i)),this._validConstructProperties=!1),"2d"!==this.view?.type&&(this.loadErrors.push(e),s.getLogger(this).error(new r("utilityNetworkValidateTopology:missing-property",e)),this._validConstructProperties=!1),this._validConstructProperties&&(this.utilityNetwork.loaded||await this.utilityNetwork.load().catch((t=>{s.getLogger(this).error(t),this._validConstructProperties=!1})),await this._setDirtyAreasLayer()),this._validConstructProperties&&await this._validateNetworkExtension()}),a),n((()=>this.view?.map?.layers),"change",(async()=>{const{loadErrors:t,messages:{info:{noUtilityNetwork:i}}}=this,e=t.find((t=>t===i));this._initialValidationsFinished=!1,e||(t.removeAll(),await this._validateNetworkExtension(),await this._setDirtyAreasLayer()),this._initialValidationsFinished=!0})),y(t)])}))}destroy(){this._updatingHandles.destroy()}get state(){return this.loadErrors.length||!this._validConstructProperties?"disabled":this.executionError?"failed":this._updatingHandles.updating?"executing":this._activeOperationDidSucceed?"success":this._initialValidationsFinished?"ready":"loading"}set utilityNetwork(t){this._get("utilityNetwork")!==t&&this._set("utilityNetwork",t)}set view(t){this._get("view")!==t&&this._set("view",t)}async validateTopology(){const{messages:{info:{cannotAcquireVersionLock:t,noDirtyAreasInExtent:i}},utilityNetwork:e,view:s}=this;this.loadErrors.length||(this._activeOperationDidSucceed=!1,this._set("executionError",""),this._updatingHandles.addPromise(e?.validateTopology({validateArea:"current"===this.extentToValidate?s.extent.clone():e.fullExtent.clone()}).then((()=>{this._activeOperationDidSucceed=!0}),(e=>{let s="Error: "+e;if(e instanceof r&&e.details?.raw)switch(e.details.raw.extendedCode){case-2147208940:s=i;break;case-2147217146:case-2147220947:s=t;break;default:s=e.details.message}this._set("executionError",s)}))))}async _setDirtyAreasLayer(){const{messages:{info:{noDirtyAreasLayer:t}}}=this,i=this.view?.map.allLayers.items.filter((t=>h(t))).find((t=>t.parsedUrl?.path===this.utilityNetwork?.networkSystemLayers.dirtyAreasLayerUrl));i?(this._dirtyAreasLayer=i,await this._dirtyAreasLayer.load(),this._serverVersion=this._dirtyAreasLayer.version??0,this._validConstructProperties=!0):(this.loadErrors.push(t),s.getLogger(this).error(new r("utilityNetworkValidateTopology:missing-layer",t)),this._validConstructProperties=!1)}async _validateNetworkExtension(){const{messages:{info:{noAdvancedEditingUserTypeExtension:t,noUtilityNetworkServiceUserTypeExtension:i}}}=this,e=await new c({url:new URL(this.utilityNetwork.layerUrl).origin+"/portal"}).load(),o=e?.user?.username;if(!o){const t="No portal user found.";return this.loadErrors.push(t),s.getLogger(this).error(new r("utilityNetworkValidateTopology:no-user",t)),this._validConstructProperties=!1,void(this._initialValidationsFinished=!0)}const a=Number(this._serverVersion)<=11.1?"utilityNetwork":"advediting";u(e,o,a).then((e=>{if(!e){const e=Number(this._serverVersion)<=11.1?i:t;this.loadErrors.push(e),s.getLogger(this).error(new r("utilityNetworkValidateTopology:no-user-type-extension",e)),this._validConstructProperties=!1}})).catch((e=>{this.loadErrors.push(Number(this._serverVersion)<=11.1?i:t),s.getLogger(this).error(e),this._validConstructProperties=!1})).finally((()=>{this._initialValidationsFinished=!0}))}};t([l()],g.prototype,"_initialValidationsFinished",void 0),t([l()],g.prototype,"_dirtyAreasLayer",void 0),t([l()],g.prototype,"_validConstructProperties",void 0),t([l({readOnly:!0})],g.prototype,"executionError",void 0),t([l()],g.prototype,"extentToValidate",void 0),t([l()],g.prototype,"loadErrors",void 0),t([l()],g.prototype,"messages",void 0),t([l({readOnly:!0})],g.prototype,"state",null),t([l()],g.prototype,"utilityNetwork",null),t([l()],g.prototype,"view",null),g=t([p("esri.widgets.UtilityNetworkValidateTopology.UtilityNetworkValidateTopologyViewModel")],g);const w=g;export{w as default};
