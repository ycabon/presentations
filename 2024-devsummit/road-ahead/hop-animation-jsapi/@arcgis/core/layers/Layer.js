/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as t}from"../chunks/tslib.es6.js";import"../geometry.js";import r from"../request.js";import e from"../core/Error.js";import o from"../core/Evented.js";import{IdentifiableMixin as s}from"../core/Identifiable.js";import i from"../core/Loadable.js";import{L as a}from"../chunks/Logger.js";import{isAbortError as n}from"../core/promiseUtils.js";import{urlToObject as p}from"../core/urlUtils.js";import{property as l}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import{subclass as m}from"../core/accessorSupport/decorators/subclass.js";import c from"../config.js";import u from"../geometry/Extent.js";import y from"../geometry/SpatialReference.js";import"../chunks/ensureType.js";import"../geometry/Geometry.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/maybe.js";import"../chunks/metadata.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/ObservableBase.js";import"../chunks/tracking.js";import"../core/scheduling.js";import"../chunks/reader.js";import"../chunks/unitUtils.js";import"../chunks/jsonMap.js";import"../chunks/assets.js";import"../kernel.js";import"../chunks/writer.js";import"../geometry/Multipoint.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/coordsUtils.js";import"../chunks/Axis.js";import"../chunks/extentUtils.js";import"../chunks/aaBoundingRect.js";import"../chunks/mathUtils.js";import"../chunks/vec3.js";import"../chunks/vec3f64.js";import"../chunks/common.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../core/Promise.js";let d=0,h=class extends(o.EventedMixin(s(i))){constructor(){super(...arguments),this.attributionDataUrl=null,this.fullExtent=new u(-180,-90,180,90,y.WGS84),this.id=Date.now().toString(16)+"-layer-"+d++,this.legendEnabled=!0,this.listMode="show",this.opacity=1,this.parent=null,this.persistenceEnabled=!1,this.popupEnabled=!0,this.attributionVisible=!0,this.spatialReference=y.WGS84,this.title=null,this.type=null,this.url=null,this.visible=!0}static async fromArcGISServerUrl(t){const r="string"==typeof t?{url:t}:t;return(await import("../chunks/arcgisLayers.js")).fromUrl(r)}static fromPortalItem(t){return async function(t){const r="portalItem"in t?t:{portalItem:t},{fromItem:e}=await import("../chunks/portalLayers.js").then((t=>t.i));try{return await e(r)}catch(t){const e=r&&r.portalItem,o=e?.id||"unset",s=e&&e.portal&&e.portal.url||c.portalUrl;throw a.getLogger("esri.layers.support.fromPortalItem").error("#fromPortalItem()","Failed to create layer from portal item (portal: '"+s+"', id: '"+o+"')",t),t}}(t)}initialize(){this.when().catch((t=>{n(t)||a.getLogger(this).error("#load()",`Failed to load layer (title: '${this.title??"no title"}', id: '${this.id??"no id"}')`,{error:t})}))}destroy(){const t=this.parent;if(t){const r=this;"layers"in t&&t.layers.includes(r)?t.layers.remove(r):"tables"in t&&t.tables.includes(r)?t.tables.remove(r):"baseLayers"in t&&t.baseLayers.includes(r)?t.baseLayers.remove(r):"referenceLayers"in t&&t.referenceLayers.includes(r)&&t.referenceLayers.remove(r),this._set("parent",null)}}get hasAttributionData(){return null!=this.attributionDataUrl}get parsedUrl(){return p(this.url)}async fetchAttributionData(){const t=this.attributionDataUrl;if(this.hasAttributionData&&t)return(await r(t,{query:{f:"json"},responseType:"json"})).data;throw new e("layer:no-attribution-data","Layer does not have attribution data")}};t([l({type:String})],h.prototype,"attributionDataUrl",void 0),t([l({type:u})],h.prototype,"fullExtent",void 0),t([l({readOnly:!0})],h.prototype,"hasAttributionData",null),t([l({type:String,clonable:!1})],h.prototype,"id",void 0),t([l({type:Boolean,nonNullable:!0})],h.prototype,"legendEnabled",void 0),t([l({type:["show","hide","hide-children"]})],h.prototype,"listMode",void 0),t([l({type:Number,range:{min:0,max:1},nonNullable:!0})],h.prototype,"opacity",void 0),t([l({clonable:!1})],h.prototype,"parent",void 0),t([l({readOnly:!0})],h.prototype,"parsedUrl",null),t([l({type:Boolean,readOnly:!0})],h.prototype,"persistenceEnabled",void 0),t([l({type:Boolean})],h.prototype,"popupEnabled",void 0),t([l({type:Boolean})],h.prototype,"attributionVisible",void 0),t([l({type:y})],h.prototype,"spatialReference",void 0),t([l({type:String})],h.prototype,"title",void 0),t([l({readOnly:!0,json:{read:!1}})],h.prototype,"type",void 0),t([l()],h.prototype,"url",void 0),t([l({type:Boolean,nonNullable:!0})],h.prototype,"visible",void 0),h=t([m("esri.layers.Layer")],h);const j=h;export{j as default};
