/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import s from"../../core/Collection.js";import e from"../../core/Evented.js";import{watch as i,initial as o}from"../../core/reactiveUtils.js";import{property as r}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/Logger.js";import{subclass as a}from"../../core/accessorSupport/decorators/subclass.js";import{a as m}from"../../chunks/layerListUtils.js";import l from"./ListItem.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../config.js";import"../../chunks/ensureType.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../chunks/asyncUtils.js";import"../../core/Identifiable.js";import"../../core/accessorSupport/decorators/cast.js";import"../../support/actions/ActionBase.js";import"../../support/actions/ActionButton.js";import"../../chunks/ActionSlider.js";import"../../support/actions/ActionToggle.js";import"./ListItemPanel.js";import"../Widget.js";import"../../intl.js";import"../../chunks/date.js";import"../../chunks/jsonMap.js";import"../../chunks/locale.js";import"../../chunks/timeZoneUtils.js";import"../../chunks/datetime.js";import"../../chunks/messages.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../core/JSONSupport.js";import"../../chunks/assets.js";import"../../chunks/domUtils.js";import"../../core/Promise.js";import"../../chunks/uuid.js";import"../../chunks/projector.js";import"../../chunks/widgetUtils.js";import"../../chunks/jsxWidgetSupport.js";import"../../chunks/legacyIcon.js";import"../support/widget.js";import"../../chunks/accessibleHandler.js";import"../../chunks/messageBundle.js";import"../../chunks/vmEvent.js";import"../../chunks/jsxFactory.js";import"../../chunks/themeUtils.js";const c="tables",n="layer-list-mode",p=s.ofType(l);let h=class extends e.EventedAccessor{constructor(t){super(t),this.checkPublishStatusEnabled=!1,this.listItemCreatedFunction=null,this.tableItems=new p,this.map=null}initialize(){this.addHandles([i((()=>[this.map,this.map?.loadStatus]),(()=>this._mapHandles()),o),i((()=>[this.listItemCreatedFunction,this.checkPublishStatusEnabled]),(()=>this._recompileList()))],"map")}destroy(){this.map=null,this.tableItems.removeAll()}get state(){const{map:t}=this;if(!t)return"disabled";const s=t?.loadStatus;return"string"==typeof s?"loaded"===s?"ready":"loading"===s?"loading":"disabled":"ready"}triggerAction(t,s){t&&!t.disabled&&this.emit("trigger-action",{action:t,item:s})}_mapHandles(){this.removeHandles(c),!this.map||this.map.loadStatus&&"loaded"!==this.map.loadStatus?this._removeAllItems():this.addHandles(i((()=>this.map?.allTables?.toArray()),(()=>this._compileList()),o),c)}_removeAllItems(){this.tableItems.removeAll()}_getViewableTables(t){if(t)return t.filter((t=>"hide"!==m(t)))}_watchTablesListMode(t){this.removeHandles(n),t&&t.forEach((t=>{this.addHandles(i((()=>t.listMode),(()=>this._compileList())),n)}))}_compileList(){const t=this.map?.tables;this._watchTablesListMode(t);const s=this._getViewableTables(t);s?.length?(this._createNewItems(s),this._removeItems(s),this._sortItems(s)):this._removeAllItems()}_createNewItems(t){const{tableItems:s,listItemCreatedFunction:e,checkPublishStatusEnabled:i}=this;t.forEach((t=>{s.some((s=>s.layer===t))||s.add(new l({checkPublishStatusEnabled:i,layer:t,listItemCreatedFunction:e}))}))}_removeItems(t){const{tableItems:s}=this;s.forEach((e=>{if(!e)return;const i=t?.find((t=>e.layer===t));i||s.remove(e)}))}_sortItems(t){const{tableItems:s}=this;s.sort(((s,e)=>{const i=t.indexOf(s.layer),o=t.indexOf(e.layer);return i>o?-1:i<o?1:0}))}_recompileList(){this._removeAllItems(),this._compileList()}};t([r()],h.prototype,"checkPublishStatusEnabled",void 0),t([r()],h.prototype,"listItemCreatedFunction",void 0),t([r({type:p,readOnly:!0})],h.prototype,"tableItems",void 0),t([r()],h.prototype,"map",void 0),t([r({readOnly:!0})],h.prototype,"state",null),h=t([a("esri.widgets.TableList.TableListViewModel")],h);const d=h;export{d as default};
