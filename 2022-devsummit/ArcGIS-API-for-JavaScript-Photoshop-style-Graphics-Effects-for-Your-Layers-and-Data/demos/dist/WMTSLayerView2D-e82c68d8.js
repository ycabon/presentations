import { e as s, hr as h, i6 as p, i7 as r$1, bF as e, q as g, ac as e$1, ad as d$1, ae as i$1 } from './_virtual_index-49b2bc11.js';
import { r, n } from './imageUtils-fa2a7a82.js';
import { l, u } from './LayerView-9194fd82.js';
import { i } from './RefreshableLayerView-a108c313.js';
import './BitmapTileContainer-cefcbddf.js';
import './Bitmap-4819b4da.js';
import './Container-905526e1.js';
import './Texture-7f200883.js';
import './TileContainer-7b06a76e.js';
import './Utils-8759b086.js';
import './WGLContainer-0a7b434f.js';
import './VertexArrayObject-fabb4101.js';
import './ShaderCompiler-17283eff.js';
import './config-3e6df72b.js';
import './GeometryUtils-8e9bb139.js';
import './MaterialKey-67bb5654.js';
import './earcut-211aa720.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const d=[102113,102100,3857,3785,900913],y=[0,0],m=s.getLogger("esri.views.2d.layers.WMTSLayerView2D");let w=class extends(i(r(l(u)))){constructor(){super(...arguments),this._tileStrategy=null,this._fetchQueue=null,this._tileRequests=new Map,this.layer=null;}get tileMatrixSet(){if(this.layer.activeLayer.tileMatrixSetId)return this.layer.activeLayer.tileMatrixSet;const e=this._getTileMatrixSetBySpatialReference(this.layer.activeLayer);return e?(this.layer.activeLayer.tileMatrixSetId=e.id,e):null}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume(),this.notifyChange("updating");}attach(){if(!this.tileMatrixSet)return;const{tileInfo:e}=this.tileMatrixSet;this._tileInfoView=new h(e),this._fetchQueue=new p({tileInfoView:this._tileInfoView,concurrency:16,process:(e,t)=>this.fetchTile(e,t)}),this._tileStrategy=new r$1({cachePolicy:"keep",resampling:!0,acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),tileInfoView:this._tileInfoView}),this.handles.add(this.watch(["layer.activeLayer.styleId","tileMatrixSet"],(()=>this._refresh())),this.declaredClass),super.attach();}detach(){var e,t;super.detach(),this.handles.remove(this.declaredClass),null==(e=this._tileStrategy)||e.destroy(),null==(t=this._fetchQueue)||t.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null;}moveStart(){this.requestUpdate();}viewChange(){this.requestUpdate();}moveEnd(){this.requestUpdate();}releaseTile(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",(()=>e.destroy())),this.requestUpdate();}acquireTile(e){const t=this._bitmapView.createTile(e),i=t.bitmap;return [i.x,i.y]=this._tileInfoView.getTileCoords(y,t.key),i.resolution=this._tileInfoView.getTileResolution(t.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._enqueueTileFetch(t),this._bitmapView.addChild(t),this.requestUpdate(),t}async doRefresh(){this.updateRequested||this.suspended||this._refresh();}isUpdating(){return this._fetchQueue.length>0}async fetchTile(e$1,t={}){const s="tilemapCache"in this.layer?this.layer.tilemapCache:null,{signal:r,resamplingLevel:a=0}=t;if(!s)return this._fetchImage(e$1,r);const l=new e(0,0,0,0);let o;try{await s.fetchAvailabilityUpsample(e$1.level,e$1.row,e$1.col,l,{signal:r}),o=await this._fetchImage(l,r);}catch(c){if(g(c))throw c;if(a<3){const i=this._tileInfoView.getTileParentId(e$1.id);if(i){const s=new e(i),r=await this.fetchTile(s,{...t,resamplingLevel:a+1});return n(this._tileInfoView,r,s,e$1)}}throw c}return n(this._tileInfoView,o,l,e$1)}canResume(){const e=super.canResume();return e?null!==this.tileMatrixSet:e}async _enqueueTileFetch(e){if(!this._fetchQueue.has(e.key.id)){try{const t=await this._fetchQueue.push(e.key);e.bitmap.source=t,e.bitmap.width=this._tileInfoView.tileInfo.size[0],e.bitmap.height=this._tileInfoView.tileInfo.size[1],e.once("attach",(()=>this.requestUpdate()));}catch(t){g(t)||m.error(t);}this.requestUpdate();}}async _fetchImage(e,t){return this.layer.fetchTile(e.level,e.row,e.col,{signal:t})}_refresh(){this._fetchQueue.reset(),this._tileStrategy.tiles.forEach((e=>{if(!e.bitmap.source)return;const t={id:e.key.id,fulfilled:!1,promise:this._fetchQueue.push(e.key).then((t=>{e.bitmap.source=t;})).catch((t=>{g(t)||(e.bitmap.source=null);})).finally((()=>{e.requestRender(),this.notifyChange("updating"),t.fulfilled=!0;}))};this._tileRequests.set(e,t);})),this.notifyChange("updating");}_getTileMatrixSetBySpatialReference(e){const t=this.view.spatialReference;if(!e.tileMatrixSets)return null;let i=e.tileMatrixSets.find((e=>e.tileInfo.spatialReference.wkid===t.wkid));return !i&&t.isWebMercator&&(i=e.tileMatrixSets.find((e=>d.indexOf(e.tileInfo.spatialReference.wkid)>-1))),i}};e$1([d$1()],w.prototype,"suspended",void 0),e$1([d$1({readOnly:!0})],w.prototype,"tileMatrixSet",null),w=e$1([i$1("esri.views.2d.layers.WMTSLayerView2D")],w);const _=w;

export { _ as default };
