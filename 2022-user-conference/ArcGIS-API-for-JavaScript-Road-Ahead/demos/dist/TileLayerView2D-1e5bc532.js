import { lA as h, lB as p, lC as r, b3 as l, eA as E, aA as j, cu as e, Z as s, B as e$1, C as d, D as n$1 } from './_virtual_index-9b831d4a.js';
import { t, o, n } from './imageUtils-66323b05.js';
import { f } from './LayerView2D-bd5847a4.js';
import { u } from './LayerView-e26ca8f9.js';
import { i as i$1 } from './RefreshableLayerView-18d98912.js';
import { i } from './TileLayerView-b7d0adce.js';
import { a } from './drapedUtils-7abad8d8.js';
import './BitmapTileContainer-57cb0f6a.js';
import './Bitmap-04f84dc2.js';
import './brushes-0ba66925.js';
import './definitions-94cbc2bf.js';
import './Utils-0ee32720.js';
import './number-7d0da80b.js';
import './enums-11126df6.js';
import './ProgramTemplate-fb419b93.js';
import './MaterialKey-7b48d630.js';
import './alignmentUtils-d4b065e2.js';
import './utils-bc8fd4f8.js';
import './heatmapTextureUtils-0da3eb14.js';
import './StyleDefinition-8bdfb2b8.js';
import './GeometryUtils-0c093176.js';
import './TileContainer-d62dd38b.js';
import './WGLContainer-c474bc93.js';
import './Container-38939417.js';
import './EffectView-280fbeb4.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const _=[0,0];let I=class extends(i(i$1(t(f(u))))){constructor(){super(...arguments),this._tileStrategy=null,this._fetchQueue=null,this.layer=null;}get resampling(){return !("resampling"in this.layer)||!1!==this.layer.resampling}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume();}attach(){const e="tileServers"in this.layer?this.layer.tileServers:null;this._tileInfoView=new h(this.layer.tileInfo,this.layer.fullExtent),this._fetchQueue=new p({tileInfoView:this._tileInfoView,concurrency:e&&10*e.length||10,process:(e,t)=>this.fetchTile(e,t)}),this._tileStrategy=new r({cachePolicy:"keep",resampling:this.resampling,acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),tileInfoView:this._tileInfoView}),this.requestUpdate(),this.handles.add(l((()=>this.resampling),(()=>{this.doRefresh();}))),super.attach();}detach(){super.detach(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null;}moveStart(){this.requestUpdate();}viewChange(){this.requestUpdate();}moveEnd(){this.requestUpdate();}supportsSpatialReference(e){return E(this.layer.tileInfo?.spatialReference,e)}createFetchPopupFeaturesQueryGeometry(e,t){return a(e,t,this.view)}async doRefresh(){this.updateRequested||this.suspended||(this._fetchQueue.reset(),this._tileStrategy.tiles.forEach((e=>this._enqueueTileFetch(e))));}isUpdating(){return this._fetchQueue?.updating??!1}acquireTile(e){const t=this._bitmapView.createTile(e),i=t.bitmap;return [i.x,i.y]=this._tileInfoView.getTileCoords(_,t.key),i.resolution=this._tileInfoView.getTileResolution(t.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._enqueueTileFetch(t),this._bitmapView.addChild(t),this.requestUpdate(),t}releaseTile(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",(()=>e.destroy())),this.requestUpdate();}async fetchTile(e$1,t={}){const s="tilemapCache"in this.layer?this.layer.tilemapCache:null,{signal:r,resamplingLevel:l=0}=t;if(!s)try{return await this._fetchImage(e$1,r)}catch(h){if(!j(h)&&!this.resampling)return o(this._tileInfoView.tileInfo.size);if(l<3){const i=this._tileInfoView.getTileParentId(e$1.id);if(i){const s=new e(i),r=await this.fetchTile(s,{...t,resamplingLevel:l+1});return n(this._tileInfoView,r,s,e$1)}}throw h}const a=new e(0,0,0,0);let o$1;try{if(await s.fetchAvailabilityUpsample(e$1.level,e$1.row,e$1.col,a,{signal:r}),a.level!==e$1.level&&!this.resampling)return o(this._tileInfoView.tileInfo.size);o$1=await this._fetchImage(a,r);}catch(h){if(j(h))throw h;o$1=await this._fetchImage(e$1,r);}return this.resampling?n(this._tileInfoView,o$1,a,e$1):o$1}async _enqueueTileFetch(e){if(!this._fetchQueue.has(e.key.id)){try{const t=await this._fetchQueue.push(e.key);e.bitmap.source=t,e.bitmap.width=this._tileInfoView.tileInfo.size[0],e.bitmap.height=this._tileInfoView.tileInfo.size[1],e.once("attach",(()=>this.requestUpdate()));}catch(s$1){j(s$1)||s.getLogger(this.declaredClass).error(s$1);}this.requestUpdate();}}async _fetchImage(e,t){return this.layer.fetchTile(e.level,e.row,e.col,{signal:t})}};e$1([d()],I.prototype,"_fetchQueue",void 0),e$1([d()],I.prototype,"resampling",null),I=e$1([n$1("esri.views.2d.layers.TileLayerView2D")],I);const V=I;

export { V as default };
