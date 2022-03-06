import { ac as e, ad as d$1, ae as i$1, s, E, h as r, e as s$2, hr as h, i6 as p, i7 as r$2, q as g, bF as e$1 } from './_virtual_index-49b2bc11.js';
import { r as r$1, o, n } from './imageUtils-fa2a7a82.js';
import { l, u } from './LayerView-9194fd82.js';
import { i as i$2 } from './RefreshableLayerView-a108c313.js';
import { s as s$1, a } from './drapedUtils-548aa09d.js';
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
const i=i=>{let c=class extends i{async fetchPopupFeatures(e,s$2){const{layer:a}=this;if(!e)return Promise.reject(new s("tilelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:a}));if("tile"!==a.type)return Promise.reject(new s("tilelayerview:fetchPopupFeatures","Layer type should be 'tile'",{type:a.type}));const i=this.get("view.scale"),c=a.allSublayers.toArray().filter((e=>{const r=0===e.minScale||i<=e.minScale,t=0===e.maxScale||i>=e.maxScale;return e.popupTemplate&&e.popupEnabled&&e.visible&&r&&t}));return E(c.map((async r$1=>{const o=r$1.createQuery(),a=r(s$2)?s$2.event:null,i=s$1({renderer:r$1.renderer,event:a});o.geometry=this.createFetchPopupFeaturesQueryGeometry(e,i),o.outFields=await r$1.popupTemplate.getRequiredFields();return (await r$1.queryFeatures(o)).features}))).then((e=>[].concat(...e.map((e=>e.value)).filter(Boolean))))}};return e([d$1()],c.prototype,"layer",void 0),c=e([i$1("esri.layers.mixins.TileLayerView")],c),c};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const d=s$2.getLogger("esri.views.2d.layers.TileLayerView2D"),_=[0,0];let I=class extends(i(i$2(r$1(l(u))))){constructor(){super(...arguments),this._tileStrategy=null,this._fetchQueue=null,this.layer=null;}initialize(){const e=this.layer.tileInfo,i=e&&e.spatialReference;let s$1;i||(s$1=new s("layerview:tiling-information-missing","The layer doesn't provide tiling information",{layer:this.layer})),i.equals(this.view.spatialReference)||(s$1=new s("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer})),this.watch("resampling",(()=>{this.doRefresh();})),s$1&&this.addResolvingPromise(Promise.reject(s$1));}get resampling(){return !("resampling"in this.layer)||!1!==this.layer.resampling}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume(),this.notifyChange("updating");}attach(){const e="tileServers"in this.layer?this.layer.tileServers:null;this._tileInfoView=new h(this.layer.tileInfo,this.layer.fullExtent),this._fetchQueue=new p({tileInfoView:this._tileInfoView,concurrency:e&&10*e.length||10,process:(e,t)=>this.fetchTile(e,t)}),this._tileStrategy=new r$2({cachePolicy:"keep",resampling:this.resampling,acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),tileInfoView:this._tileInfoView}),this.requestUpdate(),this.container.requestRender(),super.attach();}detach(){super.detach(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null;}moveStart(){this.requestUpdate();}viewChange(){this.requestUpdate();}moveEnd(){this.requestUpdate();}createFetchPopupFeaturesQueryGeometry(e,t){return a(e,t,this.view)}async doRefresh(){this.updateRequested||this.suspended||(this._fetchQueue.reset(),this._tileStrategy.tiles.forEach((e=>this._enqueueTileFetch(e))),this.notifyChange("updating"));}isUpdating(){var e;return (null==(e=this._fetchQueue)?void 0:e.length)>0}acquireTile(e){const t=this._bitmapView.createTile(e),i=t.bitmap;return [i.x,i.y]=this._tileInfoView.getTileCoords(_,t.key),i.resolution=this._tileInfoView.getTileResolution(t.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._enqueueTileFetch(t),this._bitmapView.addChild(t),this.requestUpdate(),t}releaseTile(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",(()=>e.destroy())),this.requestUpdate();}async fetchTile(e,t={}){const i="tilemapCache"in this.layer?this.layer.tilemapCache:null,{signal:r,resamplingLevel:a=0}=t;if(!i)try{return await this._fetchImage(e,r)}catch(c){if(!g(c)&&!this.resampling)return o(this._tileInfoView.tileInfo.size);if(a<3){const i=this._tileInfoView.getTileParentId(e.id);if(i){const s=new e$1(i),r=await this.fetchTile(s,{...t,resamplingLevel:a+1});return n(this._tileInfoView,r,s,e)}}throw c}const l=new e$1(0,0,0,0);let o$1;try{if(await i.fetchAvailabilityUpsample(e.level,e.row,e.col,l,{signal:r}),l.level!==e.level&&!this.resampling)return o(this._tileInfoView.tileInfo.size);o$1=await this._fetchImage(l,r);}catch(c){if(g(c))throw c;o$1=await this._fetchImage(e,r);}return this.resampling?n(this._tileInfoView,o$1,l,e):o$1}async _enqueueTileFetch(e){if(!this._fetchQueue.has(e.key.id)){try{const t=await this._fetchQueue.push(e.key);e.bitmap.source=t,e.bitmap.width=this._tileInfoView.tileInfo.size[0],e.bitmap.height=this._tileInfoView.tileInfo.size[1],e.once("attach",(()=>this.requestUpdate()));}catch(t){g(t)||d.error(t);}this.requestUpdate();}}async _fetchImage(e,t){return this.layer.fetchTile(e.level,e.row,e.col,{signal:t})}};e([d$1()],I.prototype,"resampling",null),I=e([i$1("esri.views.2d.layers.TileLayerView2D")],I);const T=I;

export { T as default };
