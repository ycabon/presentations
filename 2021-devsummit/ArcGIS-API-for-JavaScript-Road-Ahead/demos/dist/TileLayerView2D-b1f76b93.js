import { j as e, y, k as i$1, s, b_ as E, r, n, d0 as i$2, d1 as h, d2 as p, d3 as o, t, w as g, bu as e$1 } from './_virtual_index-634cbc09.js';
import { l, d as d$1 } from './LayerView2D-9976179f.js';
import { a } from './drapedUtils-302ab53b.js';
import { s as s$1 } from './clickToleranceUtils-0399fce2.js';
import { i as i$3 } from './BitmapTileLayerView2D-452987c6.js';
import './Container-87e93059.js';
import './mat4f32-8dd9e37a.js';
import './_commonjsHelpers-3f70742c.js';
import './BitmapTileContainer-b7db1a7f.js';
import './Utils-3e0360c1.js';
import './FramebufferObject-553bb493.js';
import './WGLContainer-9f4143c6.js';
import './definitions-12783a0f.js';
import './vec4f32-1b47f233.js';
import './ShaderCompiler-5b134693.js';
import './Program-83739cf0.js';
import './earcut-cd592b7a.js';
import './GeometryUtils-58fe63b9.js';
import './MaterialKey-202e82ff.js';
import './TileContainer-243d7e79.js';
import './Bitmap-0d3f5308.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const i=i=>{let c=class extends i{async fetchPopupFeatures(e,t){const{layer:o}=this;if(!e)return Promise.reject(new s("tilelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:o}));if("tile"!==o.type)return Promise.reject(new s("tilelayerview:fetchPopupFeatures","Layer type should be 'tile'",{type:o.type}));const i=this.get("view.scale"),c=o.allSublayers.toArray().filter((e=>{const r=0===e.minScale||i<=e.minScale,t=0===e.maxScale||i>=e.maxScale;return e.popupTemplate&&e.popupEnabled&&e.visible&&r&&t}));return E(c.map((async o=>{const s=o.createQuery(),p=r(t)?t.event:null,i=s$1({renderer:o.renderer,event:p});s.geometry=this.createFetchPopupFeaturesQueryGeometry(e,i),s.outFields=await o.popupTemplate.getRequiredFields();return (await o.queryFeatures(s)).features}))).then((e=>[].concat(...e.map((e=>e.value)).filter(Boolean))))}};return e([y()],c.prototype,"layer",void 0),c=e([i$1("esri.layers.mixins.TileLayerView")],c),c};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const w=n.getLogger("esri.views.2d.layers.TileLayerView2D"),d=[0,0];let _=class extends(i(i$2(i$3(l(d$1))))){constructor(){super(...arguments),this._tileStrategy=null,this._fetchQueue=null,this.layer=null;}initialize(){const e=this.layer.tileInfo,t=e&&e.spatialReference;let i;t||(i=new s("layerview:tiling-information-missing","The layer doesn't provide tiling information",{layer:this.layer})),t.equals(this.view.spatialReference)||(i=new s("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer})),this.watch("resampling",(()=>{this.refresh();})),i&&this.addResolvingPromise(Promise.reject(i));}get resampling(){return !("resampling"in this.layer)||!1!==this.layer.resampling}hitTest(){return null}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume(),this.notifyChange("updating");}attach(){const e="tileServers"in this.layer?this.layer.tileServers:null;this._tileInfoView=new h(this.layer.tileInfo,this.layer.fullExtent),this._fetchQueue=new p({tileInfoView:this._tileInfoView,concurrency:e&&10*e.length||10,process:(e,t)=>this.fetchTile(e,t)}),this._tileStrategy=new o({cachePolicy:"keep",resampling:this.resampling,acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),tileInfoView:this._tileInfoView}),this.requestUpdate(),this.container.requestRender(),super.attach();}detach(){super.detach(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null;}moveStart(){this.requestUpdate();}viewChange(){this.requestUpdate();}moveEnd(){this.requestUpdate();}createFetchPopupFeaturesQueryGeometry(e,t){return a(e,t,this.view)}async doRefresh(){this.updateRequested||this.suspended||(this._fetchQueue.reset(),this._tileStrategy.tiles.forEach((e=>this._enqueueTileFetch(e))),this.notifyChange("updating"));}isUpdating(){var e;return (null==(e=this._fetchQueue)?void 0:e.length)>0}acquireTile(e){const t=this._bitmapView.createTile(e),i=t.bitmap;return [i.x,i.y]=this._tileInfoView.getTileCoords(d,t.key),i.resolution=this._tileInfoView.getTileResolution(t.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._enqueueTileFetch(t),this._bitmapView.addChild(t),this.requestUpdate(),t}releaseTile(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",(()=>e.destroy())),this.requestUpdate();}async fetchTile(e,i){const r="tilemapCache"in this.layer?this.layer.tilemapCache:null,s=!t(i)&&i.signal;if(!r)try{return await this._fetchImage(e,s)}catch(m){if(!g(m)&&!this.resampling)return this._createBlankImage();throw m}const a=new e$1(0,0,0,0);let h;try{if(await r.fetchAvailabilityUpsample(e.level,e.row,e.col,a,{signal:s}),a.level!==e.level&&!this.resampling)return this._createBlankImage();h=await this._fetchImage(a,s);}catch(m){if(g(m))throw m;h=await this._fetchImage(e,s);}const{level:n,row:c,col:u}=a;return this.resampling&&n!==e.level?this._resampleImage(h,n,c,u,e.level,e.row,e.col):h}async _enqueueTileFetch(e){if(!this._fetchQueue.has(e.key.id)){try{const t=await this._fetchQueue.push(e.key);e.bitmap.source=t,e.bitmap.width=this._tileInfoView.tileInfo.size[0],e.bitmap.height=this._tileInfoView.tileInfo.size[1],e.once("attach",(()=>this.requestUpdate()));}catch(t){g(t)||w.error(t);}this.requestUpdate();}}async _fetchImage(e,t){return this.layer.fetchTile(e.level,e.row,e.col,{timestamp:this.refreshTimestamp,signal:t})}_resampleImage(e,t,i,r,s,a,l){const o=this._tileInfoView.tileInfo.size,h=this._tileInfoView.getTileResolution(t),n=this._tileInfoView.getTileResolution(s);let c=this._tileInfoView.getLODInfoAt(s);const u=c.getXForColumn(l),m=c.getYForRow(a);c=this._tileInfoView.getLODInfoAt(t);const p=c.getXForColumn(r),f=c.getYForRow(i),g=Math.round((u-p)/h),y=Math.round(-(m-f)/h),w=Math.round(o[0]*(n/h)),d=Math.round(o[1]*(n/h)),_=this._createBlankImage();return _.getContext("2d").drawImage(e,g,y,w,d,0,0,o[0],o[1]),_}_createBlankImage(){const e=this._tileInfoView.tileInfo.size,t=document.createElement("canvas");return [t.width,t.height]=e,t}};e([y()],_.prototype,"resampling",null),_=e([i$1("esri.views.2d.layers.TileLayerView2D")],_);var I=_;

export default I;
