import { pK as h, pL as y$2, pM as r, b7 as l, d2 as e, aC as j, fD as E, $ as s, u as e$1, y as y$3, z as n$1 } from './_virtual_index-1ea2035a.js';
import { t, n } from './imageUtils-ad3bde5b.js';
import { y as y$1 } from './LayerView2D-0acb5666.js';
import { u } from './LayerView-04d8537b.js';
import { i } from './RefreshableLayerView-f32b8d34.js';
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
const y=[102113,102100,3857,3785,900913],_=[0,0];let w=class extends(i(t(y$1(u)))){constructor(){super(...arguments),this._tileStrategy=null,this._fetchQueue=null,this._tileRequests=new Map,this.layer=null;}get tileMatrixSet(){const e=this._getTileMatrixSetBySpatialReference(this.layer.activeLayer);return e?(e.id!==this.layer.activeLayer.tileMatrixSetId&&(this.layer.activeLayer.tileMatrixSetId=e.id),e):null}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume();}attach(){if(!this.tileMatrixSet)return;const{tileInfo:e}=this.tileMatrixSet;this._tileInfoView=new h(e),this._fetchQueue=new y$2({tileInfoView:this._tileInfoView,concurrency:16,process:(e,t)=>this.fetchTile(e,t)}),this._tileStrategy=new r({cachePolicy:"keep",resampling:!0,acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),tileInfoView:this._tileInfoView}),this.handles.add(l((()=>[this.layer?.activeLayer?.styleId,this.tileMatrixSet]),(()=>this._refresh())),this.declaredClass),super.attach();}detach(){super.detach(),this.handles.remove(this.declaredClass),this._tileStrategy?.destroy(),this._fetchQueue?.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null;}moveStart(){this.requestUpdate();}viewChange(){this.requestUpdate();}moveEnd(){this.requestUpdate();}releaseTile(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",(()=>e.destroy())),this.requestUpdate();}acquireTile(e){const t=this._bitmapView.createTile(e),i=t.bitmap;return [i.x,i.y]=this._tileInfoView.getTileCoords(_,t.key),i.resolution=this._tileInfoView.getTileResolution(t.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._enqueueTileFetch(t),this._bitmapView.addChild(t),this.requestUpdate(),t}async doRefresh(){!this.attached||this.updateRequested||this.suspended||this._refresh();}isUpdating(){return this._fetchQueue?.updating??!1}async fetchTile(e$1,t={}){const s="tilemapCache"in this.layer?this.layer.tilemapCache:null,{signal:r,resamplingLevel:a=0}=t;if(!s)return this._fetchImage(e$1,r);const l=new e(0,0,0,0);let o;try{await s.fetchAvailabilityUpsample(e$1.level,e$1.row,e$1.col,l,{signal:r}),o=await this._fetchImage(l,r);}catch(h){if(j(h))throw h;if(a<3){const i=this._tileInfoView.getTileParentId(e$1.id);if(i){const s=new e(i),r=await this.fetchTile(s,{...t,resamplingLevel:a+1});return n(this._tileInfoView,r,s,e$1)}}throw h}return n(this._tileInfoView,o,l,e$1)}canResume(){const e=super.canResume();return e?null!==this.tileMatrixSet:e}supportsSpatialReference(e){return this.layer.activeLayer.tileMatrixSets.some((t=>E(t.tileInfo.spatialReference,e)))}async _enqueueTileFetch(e){if(!this._fetchQueue.has(e.key.id)){try{const t=await this._fetchQueue.push(e.key);e.bitmap.source=t,e.bitmap.width=this._tileInfoView.tileInfo.size[0],e.bitmap.height=this._tileInfoView.tileInfo.size[1],e.once("attach",(()=>this.requestUpdate()));}catch(s$1){j(s$1)||s.getLogger(this.declaredClass).error(s$1);}this.requestUpdate();}}async _fetchImage(e,t){return this.layer.fetchImageBitmapTile(e.level,e.row,e.col,{signal:t})}_refresh(){this._fetchQueue.reset(),this._tileStrategy.tiles.forEach((e=>{if(!e.bitmap.source)return;const t={id:e.key.id,fulfilled:!1,promise:this._fetchQueue.push(e.key).then((t=>{e.bitmap.source=t;})).catch((t=>{j(t)||(e.bitmap.source=null);})).finally((()=>{e.requestRender(),t.fulfilled=!0;}))};this._tileRequests.set(e,t);}));}_getTileMatrixSetBySpatialReference(e){const t=this.view.spatialReference;if(!e.tileMatrixSets)return null;let i=e.tileMatrixSets.find((e=>E(e.tileInfo.spatialReference,t)));return !i&&t.isWebMercator&&(i=e.tileMatrixSets.find((e=>y.includes(e.tileInfo.spatialReference.wkid)))),i}};e$1([y$3()],w.prototype,"_fetchQueue",void 0),e$1([y$3({readOnly:!0})],w.prototype,"tileMatrixSet",null),w=e$1([n$1("esri.views.2d.layers.WMTSLayerView2D")],w);const g=w;

export { g as default };
