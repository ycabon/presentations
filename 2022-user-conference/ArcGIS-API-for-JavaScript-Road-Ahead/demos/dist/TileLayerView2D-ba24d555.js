import { B as e, C as d, D as n, s, a5 as E, r, dE as h, dF as p, dG as r$1, aP as l, cd as E$1, ar as j, cg as e$1, Z as s$2 } from './_virtual_index-4b72c57d.js';
import { t, o, n as n$1 } from './imageUtils-026ccf84.js';
import { f, u } from './LayerView-a579da68.js';
import { i as i$1 } from './RefreshableLayerView-f638c9df.js';
import { s as s$1, a } from './drapedUtils-98142925.js';
import './BitmapTileContainer-af9c9c4f.js';
import './Bitmap-b90cd0ba.js';
import './utils-1dcda7d1.js';
import './EffectView-0ee93c44.js';
import './Utils-af323e30.js';
import './number-7d0da80b.js';
import './enums-1f2484bf.js';
import './enums-fb707d37.js';
import './Texture-e2dd4118.js';
import './VertexElementDescriptor-b07b83f4.js';
import './MaterialKey-98c27063.js';
import './alignmentUtils-d4b065e2.js';
import './TileContainer-b4229202.js';
import './WGLContainer-e9b25fc8.js';
import './VertexArrayObject-47c5aa7a.js';
import './ProgramTemplate-cee70b37.js';
import './StyleDefinition-c3b89df1.js';
import './config-76ec2e12.js';
import './GeometryUtils-0c093176.js';
import './earcut-da8a3e33.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const i=i=>{let c=class extends i{async fetchPopupFeatures(e,s$2){const{layer:a}=this;if(!e)throw new s("tilelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:a});if("tile"!==a.type)throw new s("tilelayerview:fetchPopupFeatures","Layer type should be 'tile'",{type:a.type});const i=this.get("view.scale"),c=a.allSublayers.toArray().filter((e=>{const r=0===e.minScale||i<=e.minScale,t=0===e.maxScale||i>=e.maxScale;return e.popupTemplate&&e.popupEnabled&&e.visible&&r&&t}));return E(c.map((async r$1=>{const o=r$1.createQuery(),a=r(s$2)?s$2.event:null,i=s$1({renderer:r$1.renderer,event:a});o.geometry=this.createFetchPopupFeaturesQueryGeometry(e,i),o.outFields=await r$1.popupTemplate.getRequiredFields();return (await r$1.queryFeatures(o)).features}))).then((e=>[].concat(...e.map((e=>e.value)).filter(Boolean))))}};return e([d()],c.prototype,"layer",void 0),c=e([n("esri.layers.mixins.TileLayerView")],c),c};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const _=[0,0];let I=class extends(i(i$1(t(f(u))))){constructor(){super(...arguments),this._tileStrategy=null,this._fetchQueue=null,this.layer=null;}get resampling(){return !("resampling"in this.layer)||!1!==this.layer.resampling}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume();}attach(){const e="tileServers"in this.layer?this.layer.tileServers:null;this._tileInfoView=new h(this.layer.tileInfo,this.layer.fullExtent),this._fetchQueue=new p({tileInfoView:this._tileInfoView,concurrency:e&&10*e.length||10,process:(e,t)=>this.fetchTile(e,t)}),this._tileStrategy=new r$1({cachePolicy:"keep",resampling:this.resampling,acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),tileInfoView:this._tileInfoView}),this.requestUpdate(),this.handles.add(l((()=>this.resampling),(()=>{this.doRefresh();}))),super.attach();}detach(){super.detach(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null;}moveStart(){this.requestUpdate();}viewChange(){this.requestUpdate();}moveEnd(){this.requestUpdate();}supportsSpatialReference(e){return E$1(this.layer.tileInfo?.spatialReference,e)}createFetchPopupFeaturesQueryGeometry(e,t){return a(e,t,this.view)}async doRefresh(){this.updateRequested||this.suspended||(this._fetchQueue.reset(),this._tileStrategy.tiles.forEach((e=>this._enqueueTileFetch(e))));}isUpdating(){return this._fetchQueue?.updating??!1}acquireTile(e){const t=this._bitmapView.createTile(e),i=t.bitmap;return [i.x,i.y]=this._tileInfoView.getTileCoords(_,t.key),i.resolution=this._tileInfoView.getTileResolution(t.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._enqueueTileFetch(t),this._bitmapView.addChild(t),this.requestUpdate(),t}releaseTile(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",(()=>e.destroy())),this.requestUpdate();}async fetchTile(e,t={}){const s="tilemapCache"in this.layer?this.layer.tilemapCache:null,{signal:r,resamplingLevel:l=0}=t;if(!s)try{return await this._fetchImage(e,r)}catch(h){if(!j(h)&&!this.resampling)return o(this._tileInfoView.tileInfo.size);if(l<3){const i=this._tileInfoView.getTileParentId(e.id);if(i){const s=new e$1(i),r=await this.fetchTile(s,{...t,resamplingLevel:l+1});return n$1(this._tileInfoView,r,s,e)}}throw h}const a=new e$1(0,0,0,0);let o$1;try{if(await s.fetchAvailabilityUpsample(e.level,e.row,e.col,a,{signal:r}),a.level!==e.level&&!this.resampling)return o(this._tileInfoView.tileInfo.size);o$1=await this._fetchImage(a,r);}catch(h){if(j(h))throw h;o$1=await this._fetchImage(e,r);}return this.resampling?n$1(this._tileInfoView,o$1,a,e):o$1}async _enqueueTileFetch(e){if(!this._fetchQueue.has(e.key.id)){try{const t=await this._fetchQueue.push(e.key);e.bitmap.source=t,e.bitmap.width=this._tileInfoView.tileInfo.size[0],e.bitmap.height=this._tileInfoView.tileInfo.size[1],e.once("attach",(()=>this.requestUpdate()));}catch(s){j(s)||s$2.getLogger(this.declaredClass).error(s);}this.requestUpdate();}}async _fetchImage(e,t){return this.layer.fetchTile(e.level,e.row,e.col,{signal:t})}};e([d()],I.prototype,"_fetchQueue",void 0),e([d()],I.prototype,"resampling",null),I=e([n("esri.views.2d.layers.TileLayerView2D")],I);const V=I;

export { V as default };
