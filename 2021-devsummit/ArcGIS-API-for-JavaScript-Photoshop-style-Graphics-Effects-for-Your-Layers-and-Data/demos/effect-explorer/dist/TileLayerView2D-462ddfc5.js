import { q as e, y, r as i, bK as O, h as s, cM as k, a as u, i as i$1, cP as i$2, cQ as o, cR as l$1, cS as n$1, t, T as T$1, c as e$1 } from './index.js';
import { l, p } from './LayerView2D-c83abcff.js';
import { a } from './drapedUtils-f4befc22.js';
import { n } from './clickToleranceUtils-0f752c5c.js';
import { i as i$3 } from './BitmapTileLayerView2D-2a606f2f.js';
import './Container-a572c1be.js';
import './mat4f32-a4d1c0af.js';
import './_commonjsHelpers-34398bae.js';
import './BitmapTileContainer-40b75c4c.js';
import './Utils-da242892.js';
import './RenderingContext-4825733b.js';
import './WGLContainer-4d4d589d.js';
import './VertexArrayObject-aa888e2f.js';
import './ShaderCompiler-815c0eca.js';
import './earcut-54ba3d1d.js';
import './GeometryUtils-83dd86c8.js';
import './MaterialKey-cf85a3bf.js';
import './TileContainer-a66e3510.js';
import './Bitmap-c005945f.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const c=c=>{let l=class extends c{async fetchPopupFeatures(e,t){const{layer:o}=this;if(!e)return O(new s("tilelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:o}));if("tile"!==o.type)return O(new s("tilelayerview:fetchPopupFeatures","Layer type should be 'tile'",{type:o.type}));const c=this.get("view.scale"),l=o.allSublayers.toArray().filter((e=>{const r=0===e.minScale||c<=e.minScale,t=0===e.maxScale||c>=e.maxScale;return e.popupTemplate&&e.popupEnabled&&e.visible&&r&&t}));return k(l.map((async o=>{const s=o.createQuery(),p=u(t)?t.event:null,a=n({renderer:o.renderer,event:p});s.geometry=this.createFetchPopupFeaturesQueryGeometry(e,a),s.outFields=await o.popupTemplate.getRequiredFields();return (await o.queryFeatures(s)).features}))).then((e=>[].concat(...e.map((e=>e.value)).filter(Boolean))))}};return e([y()],l.prototype,"layer",void 0),l=e([i("esri.layers.mixins.TileLayerView")],l),l};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const w=i$1.getLogger("esri.views.2d.layers.TileLayerView2D"),_=[0,0];let I=class extends(c(i$2(i$3(l(p))))){constructor(){super(...arguments),this._tileStrategy=null,this._fetchQueue=null,this.layer=null;}initialize(){const e=this.layer.tileInfo,t=e&&e.spatialReference;let i;t||(i=new s("layerview:tiling-information-missing","The layer doesn't provide tiling information",{layer:this.layer})),t.equals(this.view.spatialReference)||(i=new s("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer})),this.watch("resampling",(()=>{this.refresh();})),i&&this.addResolvingPromise(O(i));}get resampling(){return !("resampling"in this.layer)||!1!==this.layer.resampling}hitTest(){return null}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume(),this.notifyChange("updating");}attach(){const e="tileServers"in this.layer?this.layer.tileServers:null;this._tileInfoView=new o(this.layer.tileInfo,this.layer.fullExtent),this._fetchQueue=new l$1({tileInfoView:this._tileInfoView,concurrency:e&&10*e.length||10,process:(e,t)=>this.fetchTile(e,t)}),this._tileStrategy=new n$1({cachePolicy:"keep",resampling:this.resampling,acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),tileInfoView:this._tileInfoView}),this.requestUpdate(),this.container.requestRender(),super.attach();}detach(){super.detach(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null;}moveStart(){this.requestUpdate();}viewChange(){this.requestUpdate();}moveEnd(){this.requestUpdate();}createFetchPopupFeaturesQueryGeometry(e,t){return a(e,t,this.view)}async doRefresh(){this.updateRequested||this.suspended||(this._fetchQueue.reset(),this._tileStrategy.tiles.forEach((e=>this._enqueueTileFetch(e))),this.notifyChange("updating"));}isUpdating(){var e;return (null==(e=this._fetchQueue)?void 0:e.length)>0}acquireTile(e){const t=this._bitmapView.createTile(e),i=t.bitmap;return [i.x,i.y]=this._tileInfoView.getTileCoords(_,t.key),i.resolution=this._tileInfoView.getTileResolution(t.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._enqueueTileFetch(t),this._bitmapView.addChild(t),this.requestUpdate(),t}releaseTile(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",(()=>e.destroy())),this.requestUpdate();}async fetchTile(e,i){const r="tilemapCache"in this.layer?this.layer.tilemapCache:null,s=!t(i)&&i.signal;if(!r)try{return await this._fetchImage(e,s)}catch(e){if(!T$1(e)&&!this.resampling)return this._createBlankImage();throw e}const a=new e$1(0,0,0,0);let l;try{if(await r.fetchAvailabilityUpsample(e.level,e.row,e.col,a,{signal:s}),a.level!==e.level&&!this.resampling)return this._createBlankImage();l=await this._fetchImage(a,s);}catch(t){if(T$1(t))throw t;l=await this._fetchImage(e,s);}const{level:h,row:c,col:u}=a;return this.resampling&&h!==e.level?this._resampleImage(l,h,c,u,e.level,e.row,e.col):l}async _enqueueTileFetch(e){if(!this._fetchQueue.has(e.key.id)){try{const t=await this._fetchQueue.push(e.key);e.bitmap.source=t,e.bitmap.width=this._tileInfoView.tileInfo.size[0],e.bitmap.height=this._tileInfoView.tileInfo.size[1],e.once("attach",(()=>this.requestUpdate()));}catch(e){T$1(e)||w.error(e);}this.requestUpdate();}}async _fetchImage(e,t){return this.layer.fetchTile(e.level,e.row,e.col,{timestamp:this.refreshTimestamp,signal:t})}_resampleImage(e,t,i,r,s,a,l){const o=this._tileInfoView.tileInfo.size,h=this._tileInfoView.getTileResolution(t),n=this._tileInfoView.getTileResolution(s);let c=this._tileInfoView.getLODInfoAt(s);const u=c.getXForColumn(l),p=c.getYForRow(a);c=this._tileInfoView.getLODInfoAt(t);const m=c.getXForColumn(r),f=c.getYForRow(i),g=Math.round((u-m)/h),y=Math.round(-(p-f)/h),d=Math.round(o[0]*(n/h)),w=Math.round(o[1]*(n/h)),_=this._createBlankImage();return _.getContext("2d").drawImage(e,g,y,d,w,0,0,o[0],o[1]),_}_createBlankImage(){const e=this._tileInfoView.tileInfo.size,t=document.createElement("canvas");return [t.width,t.height]=e,t}};e([y({dependsOn:["layer.resampling?"]})],I.prototype,"resampling",null),I=e([i("esri.views.2d.layers.TileLayerView2D")],I);var T=I;

export default T;
