/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as e}from"../../chunks/tslib.es6.js";import t from"../../Basemap.js";import s from"../../core/Collection.js";import r from"../../core/Loadable.js";import{watch as i,on as o,when as a}from"../../core/reactiveUtils.js";import{property as n}from"../../core/accessorSupport/decorators/property.js";import{cast as p}from"../../core/accessorSupport/decorators/cast.js";import{i as c}from"../../core/lang.js";import{subclass as l}from"../../core/accessorSupport/decorators/subclass.js";import{canProjectWithoutEngine as m,isLoaded as u,load as h}from"../../geometry/projection.js";import{f}from"../../chunks/unitUtils.js";import{k as d}from"../../chunks/basemapUtils.js";import j from"../../core/Error.js";import{throwIfAborted as y}from"../../core/promiseUtils.js";import{q as b,r as g,t as k}from"../../chunks/layerUtils2.js";import{s as w,V as v}from"../../chunks/ViewingMode.js";import{g as B,c as R}from"../../chunks/terrainUtils.js";import{T as U}from"../../chunks/TilingScheme.js";import{i as S}from"../../chunks/spatialReferenceSupport.js";import I from"./support/BasemapGalleryItem.js";import P from"./support/LocalBasemapsSource.js";import L from"./support/PortalBasemapsSource.js";import"../../request.js";import"../../config.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../core/JSONSupport.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/Logger.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../chunks/ensureType.js";import"../../chunks/collectionUtils.js";import"../../chunks/loadAll.js";import"../../chunks/asyncUtils.js";import"../../chunks/writer.js";import"../../geometry/SpatialReference.js";import"../../chunks/jsonMap.js";import"../../chunks/assets.js";import"../../portal/Portal.js";import"../../chunks/reader.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../geometry/Point.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/locale.js";import"../../portal/PortalGroup.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../core/Promise.js";import"../../portal/PortalItem.js";import"../../portal/PortalItemResource.js";import"../../portal/PortalRating.js";import"../../chunks/persistableUrlUtils.js";import"../../chunks/messages.js";import"../../support/BasemapStyle.js";import"../../chunks/writeUtils.js";import"../../core/Evented.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../chunks/vec3f64.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/coordsUtils.js";import"../../chunks/Axis.js";import"../../chunks/extentUtils.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/common.js";import"../../geometry/Polyline.js";import"../../chunks/projectBuffer.js";import"../../chunks/geodesicConstants.js";import"../../geometry/support/GeographicTransformation.js";import"../../geometry/support/GeographicTransformationStep.js";import"../../chunks/zscale.js";import"../../chunks/utils3.js";import"../../chunks/colorUtils.js";import"../../chunks/screenUtils.js";import"../../chunks/mat4.js";import"../../chunks/Util.js";import"../../chunks/vec2f64.js";import"../../chunks/vec4.js";import"../../chunks/vec4f64.js";import"../../chunks/Scheduler.js";import"../../core/signal.js";import"../../chunks/debugFlags.js";import"../../chunks/RenderState.js";import"../../chunks/TerrainConst.js";import"../../geometry.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../layers/support/LOD.js";import"../../layers/support/TileInfo.js";import"../../chunks/TileKey.js";import"../../core/Identifiable.js";async function _(e,t={}){const{basemap:s,view:r}=e;await s.load(t),function(e){if(0===e.baseLayers.length&&0===e.referenceLayers.length)return;const t=e.baseLayers.concat(e.referenceLayers).toArray().filter((e=>!g(e))).map((e=>function(e){return new j("basemap-compatibility:unsupported-basemap-layer-type","Unsupported basemap layer type ${operationalLayerType}",{layer:e,operationalLayerType:e.operationalLayerType||"unknown"})}(e)));if(t.length)throw t[0]}(s),await async function(e,t,s){if(0===e.baseLayers.length)return;const r=e.baseLayers.at(0);if(k(r)){try{await r.load(s)}catch(e){const t="basemap-compatibility:unknown-error",s="Unknown basemap compatibility error",{name:r=t,message:i=s,details:o}=e;throw new j(r,i,o)}!function(e,t){const s=t.state.viewingMode;if(!s)return;let r,i;if("wmts"===e?.type){const o=B(e,t.spatialReference,s);if(null==o.tileInfo)throw new j("basemapgalleryitem:tiling-scheme-incompatible","Basemap tiling scheme is incompatible with the view");r=o.tileInfo,i=o.fullExtent}else r=e.tileInfo,i=e.fullExtent;if(null==r)return;if(!S(r.spatialReference,s))throw new j(`basemapgalleryitem:spatial-reference-unsupported-${w(s)}`,`Basemap spatial reference is unsupported in ${w(s)} mode`);const o=r.spatialReference.isGeographic,a="vector-tile"===e?.type?r.getOrCreateCompatible(256,o?1:2):null;if(s===v.Global){let t=R(r,i,null,s);if(t&&"vector-tile"===e?.type&&null!=i&&a&&!R(a,i,null,s)&&(t=null),t){const e=r.spatialReference.isWebMercator?"web-mercator":"wgs84";throw new j(`basemapgalleryitem:tiling-scheme-unsupported-${e}-global`,"Basemap tiling scheme is unsupported in global mode",{error:t})}}else if(U.checkUnsupported(r))throw new j("basemapgalleryitem:tiling-scheme-unsupported-local","Basemap tiling scheme is unsupported in local mode");const n=t.basemapTerrain?.tilingScheme;if(n&&!n.compatibleWith(r)&&("vector-tile"!==e?.type||!a||!n.compatibleWith(a)))throw new j("basemapgalleryitem:tiling-scheme-incompatible","Basemap tiling scheme is incompatible with the view")}(r,t)}}(s,r,t),y(t)}async function E(e,t={}){const{basemap:s,view:r}=e;y(t);const i=s.baseLayers.find((e=>"unknown"===e.type))?.loadError;if(null!=i)throw i;if(!r||"spatialReferenceLocked"in r&&!r.spatialReferenceLocked)return;if(await s.load(t),y(t),0===s.baseLayers.length)return;const o=s.baseLayers.at(0);if(!b(o))return;if(s.spatialReference){if(r.spatialReference.equals(s.spatialReference))return;T()}await o.load(t),y(t);const a=(("supportedSpatialReferences"in o?o.supportedSpatialReferences:null)||["tileInfo"in o?o.tileInfo?.spatialReference:null]).filter(c);0!==a.length&&a.every((e=>!r.spatialReference.equals(e)))&&T()}function T(){throw new j("basemap-compatibility:incompatible-spatial-reference","Basemap spatial reference is not compatible with the view")}const x=s.ofType(I);let O=class extends r{constructor(e){super(e),this._loadingProjectionEngine=!1,this.items=new x,this.source=new L,this.view=null}initialize(){const e=()=>this._recreateItems();this.addHandles([i((()=>"ready"===this.state?this.compatibilityFunction:null),(()=>this._updateItems())),o((()=>this.source?.basemaps),"change",e,{onListenerAdd:e}),a((()=>this.source),(()=>this.loadSource()),{sync:!0,initial:!0}),a((()=>this.view),(()=>{this.source instanceof L&&(this.source.viewType=this.view?.type)}),{once:!0})])}destroy(){const e=this.source.basemaps.find((e=>e===this.activeBasemap));e&&this.source.basemaps.remove(e),this.source?.destroy()}get activeBasemap(){return this.view?.map?.basemap??null}set activeBasemap(e){const s=this.view;if(!s?.map)return;const r="string"==typeof e?t.fromId(e):e;if(!r||!s.ready)return s.map.basemap=r,void this._clearOverride("activeBasemap");const i=r.spatialReference||this.items?.find((e=>this.basemapEquals(r,e.basemap)))?.spatialReference;if(i&&"spatialReferenceLocked"in s&&!s.spatialReferenceLocked){const t=s.spatialReference;if(null!=i&&!f(t,i)&&!m(s.spatialReference,i)&&!u())return this._override("activeBasemap",r),this._loadingProjectionEngine=!0,void h().then((()=>{this._get("activeBasemap")===e&&(s.map.basemap=e,s.spatialReference=i,this._clearOverride("activeBasemap"))}),(()=>{})).then((()=>{this._loadingProjectionEngine=!1}));s.map.basemap=r,this._clearOverride("activeBasemap"),null==i||f(s.spatialReference,i)||(s.spatialReference=i)}else s.map.basemap=r,this._clearOverride("activeBasemap")}get activeBasemapIndex(){const{state:e,activeBasemap:t}=this;return"ready"!==e?-1:this._findBasemapIndex(t)}get compatibilityFunction(){return"3d"===this.view?.type?_:E}set compatibilityFunction(e){this._overrideIfSome("compatibilityFunction",e)}castSource(e){return Array.isArray(e)||s.isCollection(e)?new P({basemaps:e}):function(e){return e&&"esri.portal.Portal"===e.declaredClass}(e)?new L({portal:e}):function(e){return e&&!(e instanceof L)&&(!!e.portal||!!e.query)}(e)?new L(e):function(e){return e&&"basemaps"in e&&"state"in e&&"refresh"in e}(e)?e:null}get state(){return this.view?.ready&&this.source?this._loadingProjectionEngine?"loading":"ready":"disabled"}basemapEquals(e,t){return d(e,t)}refresh(){this._recreateItems()}load(){return this.loadSource()}loadSource(e){return this.addResolvingPromise(r.isLoadable(this.source)?this.source.load(e):null),Promise.resolve(this)}_findBasemapIndex(e){const{items:t}=this,s=t.findIndex((t=>t.basemap===e));return-1===s?t.findIndex((t=>this.basemapEquals(t.basemap,e))):s}_recreateItems(){const e=this.source?.basemaps??[],{view:t,compatibilityFunction:s}=this,r=new Map(this.items.map((e=>[e.basemap,e]))),i=e.map((e=>{const i=r.get(e);return i?(r.delete(e),i):new I({basemap:e,compatibilityFunction:s,view:t})}));this.items.removeAll(),this.items.addMany(i),r.forEach((e=>e.destroy()))}_updateItems(){for(const e of this.items)e.compatibilityFunction=this.compatibilityFunction,e.view=this.view}};e([n()],O.prototype,"_loadingProjectionEngine",void 0),e([n()],O.prototype,"activeBasemap",null),e([n({readOnly:!0})],O.prototype,"activeBasemapIndex",null),e([n()],O.prototype,"compatibilityFunction",null),e([n({readOnly:!0,type:x})],O.prototype,"items",void 0),e([n()],O.prototype,"source",void 0),e([p("source")],O.prototype,"castSource",null),e([n({readOnly:!0})],O.prototype,"state",null),e([n()],O.prototype,"view",void 0),O=e([l("esri.widgets.BasemapGallery.BasemapGalleryViewModel")],O);const F=O;export{F as default};
