/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as e}from"../../chunks/tslib.es6.js";import s from"../../core/Collection.js";import t from"../../core/Evented.js";import{watch as i,initial as r}from"../../core/reactiveUtils.js";import{property as a}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/Logger.js";import{subclass as o}from"../../core/accessorSupport/decorators/subclass.js";import c from"../LayerList/ListItem.js";import{g as m}from"../../chunks/layerListUtils.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../config.js";import"../../chunks/ensureType.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../chunks/asyncUtils.js";import"../../core/Identifiable.js";import"../../core/accessorSupport/decorators/cast.js";import"../../support/actions/ActionBase.js";import"../../support/actions/ActionButton.js";import"../../chunks/ActionSlider.js";import"../../support/actions/ActionToggle.js";import"../LayerList/ListItemPanel.js";import"../Widget.js";import"../../intl.js";import"../../chunks/date.js";import"../../chunks/jsonMap.js";import"../../chunks/locale.js";import"../../chunks/timeZoneUtils.js";import"../../chunks/datetime.js";import"../../chunks/messages.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../core/JSONSupport.js";import"../../chunks/assets.js";import"../../chunks/domUtils.js";import"../../core/Promise.js";import"../../chunks/uuid.js";import"../../chunks/projector.js";import"../../chunks/widgetUtils.js";import"../../chunks/jsxWidgetSupport.js";import"../../chunks/legacyIcon.js";import"../support/widget.js";import"../../chunks/accessibleHandler.js";import"../../chunks/messageBundle.js";import"../../chunks/vmEvent.js";import"../../chunks/jsxFactory.js";import"../../chunks/themeUtils.js";const n="basemap",l="base-layers",p="reference-layers",h="base-layer-views",d="reference-layer-views",u="children",y=s.ofType(c);let b=class extends t.EventedAccessor{constructor(e){super(e),this.baseItems=new y,this.baseListItemCreatedFunction=null,this.checkPublishStatusEnabled=!1,this.referenceListItemCreatedFunction=null,this.referenceItems=new y,this.view=null,this._compileBaseList=this._compileBaseList.bind(this),this._compileReferenceList=this._compileReferenceList.bind(this)}initialize(){this.addHandles([i((()=>[this.view?.map?.basemap,!0===this.view?.ready,this.view?.basemapView]),(()=>this._watchBasemapLayers()),r),i((()=>[this.baseListItemCreatedFunction,this.checkPublishStatusEnabled]),(()=>this._baseListItemCreatedFunctionChanged())),i((()=>[this.referenceListItemCreatedFunction,this.checkPublishStatusEnabled]),(()=>this._referenceListItemCreatedFunctionChanged()))],"view")}destroy(){this.view=null,this.baseItems.removeAll(),this.referenceItems.removeAll()}get basemapTitle(){return this.view?.map?.basemap?.title??null}set basemapTitle(e){this._override("basemapTitle",e)}get state(){return this.view?.ready?"ready":this.view?"loading":"disabled"}triggerAction(e,s){e&&!e.disabled&&this.emit("trigger-action",{action:e,item:s})}moveListItem({targetItem:e,fromParentItem:s,toParentItem:t,from:i,to:r,newIndex:a}){const o=e?.layer;if(!o)return;const c=this.view?.map?.basemap,n=c?.baseLayers,l=c?.referenceLayers,p=s?m(s):"base"===i?n:l,h=t?m(t):"base"===r?n:l;if(!p||!h)return;const{baseItems:d,referenceItems:u}=this,y="base"===i?d:u,b="base"===r?d:u,j=s?.children||y,L=t?.children||b,k=h.length-a;e.parent=t||null,j.remove(e),p.remove(o),L.includes(e)||L.add(e,k),h.includes(o)||h.add(o,k),this._compileLists()}_createItemChangeHandles({items:e,key:s,callback:t}){this.removeHandles(s),t(),e&&this.addHandles(e.on("change",(()=>t())),s)}_createListItem({layer:e,type:s}){const{view:t,baseListItemCreatedFunction:i,referenceListItemCreatedFunction:r,checkPublishStatusEnabled:a}=this;return new c({layer:e,checkPublishStatusEnabled:a,listItemCreatedFunction:"base"===s?i:r,view:t})}_watchLayersListMode({layers:e,key:s,callback:t}){this.removeHandles(s),e&&e.forEach((e=>{this.addHandles(i((()=>e.listMode),(()=>t())),s)}))}_compileListItems({layers:e,items:s,key:t,type:i,callback:r}){this._watchLayersListMode({layers:e,key:t,callback:r}),this._createNewItems({type:i,items:s,layers:e}),this._removeItems({items:s,layers:e}),this._sortItems(s,e)}_compileReferenceList(){const{referenceItems:e}=this,s=this.view?.map?.basemap?.referenceLayers;this._compileListItems({type:"reference",layers:s,items:e,key:"base-layers-list-mode",callback:this._compileReferenceList})}_compileBaseList(){const{baseItems:e}=this,s=this.view?.map?.basemap?.baseLayers;this._compileListItems({type:"base",layers:s,items:e,key:"reference-layers-list-mode",callback:this._compileBaseList})}_compileLists(){this._compileReferenceList(),this._compileBaseList()}_createNewItems({items:e,layers:s,type:t}){s?.forEach((s=>{e.some((e=>e.layer===s))||e.add(this._createListItem({type:t,layer:s}))}))}_removeItems({items:e,layers:s}){e&&e.forEach((t=>{if(!t)return;const i=s?.some((e=>t.layer===e));i||(this.removeHandles(`${u}-${t.uid}`),e.remove(t))}))}_sortItems(e,s){e&&s&&e.sort(((e,t)=>{const i=s.indexOf(e.layer),r=s.indexOf(t.layer);return i>r?-1:i<r?1:0}))}_removeAllBaseItems(){const{baseItems:e}=this;e.forEach((e=>{this.removeHandles(`${u}-${e.uid}`)})),e.removeAll()}_removeAllReferenceItems(){const{referenceItems:e}=this;e.forEach((e=>{this.removeHandles(`${u}-${e.uid}`)})),e.removeAll()}_baseListItemCreatedFunctionChanged(){this._removeAllBaseItems(),this._compileLists()}_referenceListItemCreatedFunctionChanged(){this._removeAllReferenceItems(),this._compileLists()}_watchBasemapLayers(){const{view:e}=this;if(this.removeHandles([l,p,n,h,d]),!e?.ready)return this._removeAllBaseItems(),void this._removeAllReferenceItems();this._compileLists(),this.addHandles([i((()=>this.view?.map?.basemap?.baseLayers),(e=>this._createItemChangeHandles({items:e,key:l,callback:this._compileBaseList})),r),i((()=>this.view?.map?.basemap?.referenceLayers),(e=>this._createItemChangeHandles({items:e,key:p,callback:this._compileReferenceList})),r),i((()=>this.view?.basemapView?.baseLayerViews),(e=>this._createItemChangeHandles({items:e,key:h,callback:this._compileBaseList})),r),i((()=>this.view?.basemapView?.referenceLayerViews),(e=>this._createItemChangeHandles({items:e,key:d,callback:this._compileReferenceList})),r)],n)}};e([a({type:y,readOnly:!0})],b.prototype,"baseItems",void 0),e([a()],b.prototype,"basemapTitle",null),e([a()],b.prototype,"baseListItemCreatedFunction",void 0),e([a()],b.prototype,"checkPublishStatusEnabled",void 0),e([a()],b.prototype,"referenceListItemCreatedFunction",void 0),e([a({type:y,readOnly:!0})],b.prototype,"referenceItems",void 0),e([a({readOnly:!0})],b.prototype,"state",null),e([a()],b.prototype,"view",void 0),b=e([o("esri.widgets.BasemapLayerList.BasemapLayerListViewModel")],b);const j=b;export{j as default};
