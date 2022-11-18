import { pK as h, pL as y$1, pM as r, b7 as l, fD as E, aC as j, d2 as e, $ as s, u as e$1, y as y$2, z as n$1 } from './_virtual_index-1ea2035a.js';
import { t, o, n } from './imageUtils-ad3bde5b.js';
import { y } from './LayerView2D-0acb5666.js';
import { u } from './LayerView-04d8537b.js';
import { i as i$1 } from './RefreshableLayerView-f32b8d34.js';
import { i } from './TileLayerView-bf7416b0.js';
import { a } from './drapedUtils-fff0739e.js';
import './BitmapTileContainer-ef52b9ed.js';
import './Bitmap-c8e15fa6.js';
import './WGLContainer-be6ebd59.js';
import './WGLBrushVTLSymbol-5326d98d.js';
import './definitions-a784b44f.js';
import './enums-4e1a5b11.js';
import './number-7d0da80b.js';
import './StyleDefinition-98114241.js';
import './enums-3e26cf0d.js';
import './GeometryUtils-07c7843a.js';
import './Utils-7b2ac961.js';
import './ShaderCompiler-4879c29c.js';
import './ProgramTemplate-192f2ab9.js';
import './MaterialKey-8672cbbb.js';
import './alignmentUtils-d4b065e2.js';
import './utils-94e6680e.js';
import './EffectView-de5a8347.js';
import './heatmapTextureUtils-076ceaf2.js';
import './TileContainer-18a96df2.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const _=[0,0];let I=class extends(i(i$1(t(y(u))))){constructor(){super(...arguments),this._tileStrategy=null,this._fetchQueue=null,this.layer=null;}get resampling(){return !("resampling"in this.layer)||!1!==this.layer.resampling}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume();}attach(){const e="tileServers"in this.layer?this.layer.tileServers:null;this._tileInfoView=new h(this.layer.tileInfo,this.layer.fullExtent),this._fetchQueue=new y$1({tileInfoView:this._tileInfoView,concurrency:e&&10*e.length||10,process:(e,t)=>this.fetchTile(e,t)}),this._tileStrategy=new r({cachePolicy:"keep",resampling:this.resampling,acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),tileInfoView:this._tileInfoView}),this.requestUpdate(),this.handles.add(l((()=>this.resampling),(()=>{this.doRefresh();}))),super.attach();}detach(){super.detach(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null;}moveStart(){this.requestUpdate();}viewChange(){this.requestUpdate();}moveEnd(){this.requestUpdate();}supportsSpatialReference(e){return E(this.layer.tileInfo?.spatialReference,e)}createFetchPopupFeaturesQueryGeometry(e,t){return a(e,t,this.view)}async doRefresh(){!this.attached||this.updateRequested||this.suspended||(this._fetchQueue.reset(),this._tileStrategy.tiles.forEach((e=>this._enqueueTileFetch(e))));}isUpdating(){return this._fetchQueue?.updating??!1}acquireTile(e){const t=this._bitmapView.createTile(e),i=t.bitmap;return [i.x,i.y]=this._tileInfoView.getTileCoords(_,t.key),i.resolution=this._tileInfoView.getTileResolution(t.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._enqueueTileFetch(t),this._bitmapView.addChild(t),this.requestUpdate(),t}releaseTile(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",(()=>e.destroy())),this.requestUpdate();}async fetchTile(e$1,t={}){const s="tilemapCache"in this.layer?this.layer.tilemapCache:null,{signal:r,resamplingLevel:a=0}=t;if(!s)try{return await this._fetchImage(e$1,r)}catch(h){if(!j(h)&&!this.resampling)return o(this._tileInfoView.tileInfo.size);if(a<3){const i=this._tileInfoView.getTileParentId(e$1.id);if(i){const s=new e(i),r=await this.fetchTile(s,{...t,resamplingLevel:a+1});return n(this._tileInfoView,r,s,e$1)}}throw h}const l=new e(0,0,0,0);let o$1;try{if(await s.fetchAvailabilityUpsample(e$1.level,e$1.row,e$1.col,l,{signal:r}),l.level!==e$1.level&&!this.resampling)return o(this._tileInfoView.tileInfo.size);o$1=await this._fetchImage(l,r);}catch(h){if(j(h))throw h;o$1=await this._fetchImage(e$1,r);}return this.resampling?n(this._tileInfoView,o$1,l,e$1):o$1}async _enqueueTileFetch(e){if(!this._fetchQueue.has(e.key.id)){try{const t=await this._fetchQueue.push(e.key);e.bitmap.source=t,e.bitmap.width=this._tileInfoView.tileInfo.size[0],e.bitmap.height=this._tileInfoView.tileInfo.size[1],e.once("attach",(()=>this.requestUpdate()));}catch(s$1){j(s$1)||s.getLogger(this.declaredClass).error(s$1);}this.requestUpdate();}}async _fetchImage(e,t){return this.layer.fetchImageBitmapTile(e.level,e.row,e.col,{signal:t})}};e$1([y$2()],I.prototype,"_fetchQueue",void 0),e$1([y$2()],I.prototype,"resampling",null),I=e$1([n$1("esri.views.2d.layers.TileLayerView2D")],I);const V=I;

export { V as default };
