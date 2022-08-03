import { mH as s, mI as a, cu as e$1, r as r$1, aB as f, bE as u, mM as m, qo as s$1, qp as t, al as s$2, aK as I, am as R, t as t$1, s as s$3, qq as V, qr as F, jX as j, cO as p$1, dX as l$3, B as e$2, C as d, D as n$1 } from './_virtual_index-9b831d4a.js';
import { r, i, l as l$1, c } from './SymbolRepository-c7f364f5.js';
import { i as i$1, a as a$1 } from './StyleDefinition-8bdfb2b8.js';
import { y } from './brushes-0ba66925.js';
import { o as o$1 } from './VTLMaterialManager-14e155ee.js';
import { l as l$2 } from './StyleRepository-8ffcbaad.js';
import { n } from './LayerView3D-b7813df6.js';
import { c as c$1 } from './TiledLayerView3D-3780d78b.js';
import { u as u$1 } from './LayerView-e26ca8f9.js';
import './BidiEngine-d3dd902c.js';
import './CIMSymbolHelper-6ee7aec0.js';
import './enums-11126df6.js';
import './alignmentUtils-d4b065e2.js';
import './definitions-94cbc2bf.js';
import './number-7d0da80b.js';
import './GeometryUtils-10c98655.js';
import './Utils-0ee32720.js';
import './ProgramTemplate-fb419b93.js';
import './MaterialKey-7b48d630.js';
import './utils-bc8fd4f8.js';
import './heatmapTextureUtils-0da3eb14.js';
import './GeometryUtils-0c093176.js';
import './programUtils-24cf67f4.js';
import './Geometry-bc69b0c8.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class e{constructor(e,i){this._lockedSchemaPixelSize=e,this._isGCS=i;}getLevelRowColumn(e){return this._isGCS?[e[0],e[1]>>1,e[2]>>1]:256===this._lockedSchemaPixelSize&&e[0]>0?[e[0]-1,e[1]>>1,e[2]>>1]:e}adjustLevel(e){return this._isGCS?e:256===this._lockedSchemaPixelSize?e>0?e-1:0:e}getShift(e,i){let t=0,s=0;return (256===this._lockedSchemaPixelSize||this._isGCS)&&(e[2]%2&&(t=i),e[1]%2&&(s=i)),[t,s]}getScale(e){if(this._isGCS){if(512===this._lockedSchemaPixelSize)return 4}else if(256===this._lockedSchemaPixelSize&&0===e)return 1;return 2}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function p(p,y){const a$1=[],m=new r(4096,a$1,(()=>{const e=new s;return e.show=!1,e.parts.push({startTime:0,startOpacity:0,targetOpacity:0,show:!1}),e.parts.push({startTime:0,startOpacity:0,targetOpacity:0,show:!1}),e})),n=new i(a$1,m,((t,r,o)=>new l$1(t,r,o,p.styleRepository,p.key.level,0)),((t,e)=>{a(t,e,!1);}),(()=>0),(t=>{const e=y.getStyleLayerByUID(t).getLayoutProperty("visibility");return !e||e.getValue()!==i$1.NONE}));a$1.push(p),m.add(p),n.setScreenSize(512,512),n.continue(1/0);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class g extends c{constructor(e,t,o,s,i){super(e,t,o),this._memCache=s,this._loader=i,this._ongoingTileRequests=new Map,this._ongoingRequestToController=new Map;}destroy(){super.destroy(),this._ongoingRequestToController.forEach((e=>e.abort())),this._ongoingRequestToController.clear(),this._ongoingTileRequests.clear();}async getVectorTile(r,g,h,m$1){const u$1=new e$1(r,g,h,0);let c=this._memCache.get(u$1.id);if(r$1(c))return c.retain(),c;const _=await this._getVectorTileData(u$1);if(f(m$1),!this._layer)return null;if(c=this._memCache.get(u$1.id),r$1(c))return c.retain(),c;const T=this._layer.tileInfo.getTileBounds(u(),u$1);return c=new m(u$1,T[0],T[3],512,512,this._styleRepository,this._memCache),r$1(_)?(c.setData(_),c.retain(),this._memCache.put(u$1.id,c,c.memoryUsage*c.referenced,s$1)):c.setData(null),c.neededForCoverage=!0,c.transforms.tileUnitsToPixels=t(1/8,0,0,0,1/8,0,0,0,1),p(c,this._styleRepository),c}_getVectorTileData(e){const t=e.id;if(this._ongoingTileRequests.has(t))return this._ongoingTileRequests.get(t);const o=new AbortController,s={signal:o.signal},i=this._getParsedVectorTileData(e,s).then((e=>(this._ongoingTileRequests.delete(t),this._ongoingRequestToController.delete(t),e))).catch((()=>(this._ongoingTileRequests.delete(t),this._ongoingRequestToController.delete(t),null)));return this._ongoingTileRequests.set(t,i),this._ongoingRequestToController.set(t,o),i}_getParsedVectorTileData(e,t){return this.fetchTileData(e,t).then((o=>this.parseTileData({key:e,data:o},t)))}request(e,t){return this._loader.request(e,"binary",t)}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const l=1e-6;class o{constructor(e,t){this.spriteMosaic=e,this.glyphMosaic=t,this._brushCache=new Map,this._vtlMaterialManager=new o$1;}dispose(){this._brushCache&&(this._brushCache.forEach((e=>e.dispose())),this._brushCache=null),this._vtlMaterialManager=s$2(this._vtlMaterialManager),this.spriteMosaic.dispose(),this.glyphMosaic.dispose();}get vectorTilesMaterialManager(){return this._vtlMaterialManager}drawTile(e,t,r){const{context:s}=e,a=r.layers;r.backgroundBucketIds.length>0&&(e.renderPass="background",r.backgroundBucketIds.forEach((s=>this._renderStyleLayer(r.getLayerById(s),e,t,!0)))),s.setBlendingEnabled(!1),s.setDepthTestEnabled(!0),s.setDepthWriteEnabled(!0),s.setDepthFunction(I.LEQUAL),e.renderPass="opaque";for(let i=a.length-1;i>=0;i--)this._renderStyleLayer(a[i],e,t,!1);s.setDepthWriteEnabled(!1),s.setBlendingEnabled(!0),s.setBlendFunctionSeparate(R.ONE,R.ONE_MINUS_SRC_ALPHA,R.ONE,R.ONE_MINUS_SRC_ALPHA),e.renderPass="translucent";for(let i=0;i<a.length;i++)this._renderStyleLayer(a[i],e,t,!1);s.setDepthTestEnabled(!1),e.renderPass="symbol";for(let i=0;i<a.length;i++)this._renderStyleLayer(a[i],e,t,!1);s.bindVAO();}_renderStyleLayer(e,t,r,i=!1){if(!(i||e&&r.layerData.has(e.uid)))return;const n=e.getLayoutProperty("visibility");if(n&&n.getValue()===i$1.NONE)return;const{renderPass:o}=t;let h;switch(e.type){case a$1.BACKGROUND:if("background"!==o)return;h="vtlBackground";break;case a$1.FILL:if("opaque"!==o&&"translucent"!==t.renderPass)return;h="vtlFill";break;case a$1.LINE:if("translucent"!==o)return;h="vtlLine";break;case a$1.CIRCLE:if("symbol"!==o)return;h="vtlCircle";break;case a$1.SYMBOL:if("symbol"!==o)return;h="vtlSymbol";}const c=t.displayLevel;void 0!==e.minzoom&&e.minzoom>c+l||void 0!==e.maxzoom&&e.maxzoom<=c-l||(t.styleLayerUID=e.uid,t.styleLayer=e,this._drawWithBrush(t,r,h));}_drawWithBrush(e,r,s){if(!this._brushCache.has(s)){const e=y[s];this._brushCache.set(s,new e);}this._brushCache.get(s).drawMany(e,[r]);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let C=class extends(c$1(n(u$1))){constructor(){super(...arguments),this.type="vector-tile-3d";}initialize(){if(t$1(this.layer.fullExtent))return void this.addResolvingPromise(Promise.reject(new s$3("vectortilelayerview:full-extent-undefined","This layer view's layer does not define a fullExtent.")));const{basemapTerrain:e$1,spatialReference:l,state:s,viewingMode:n}=this.view,{pixelRatio:h}=s,f="local"===n&&!V(l)||F.force512VTL,y=this.layer.tileInfo.spatialReference.isGeographic,_=f?this.layer.tileInfo:this.layer.tileInfo.getOrCreateCompatible(256,y?1:2),C=this._getTileInfoSupportError(_,this.layer.fullExtent);if(r$1(C))return this.addResolvingPromise(Promise.reject(C));const v=j((()=>this.view?.basemapTerrain?.tilingSchemeLocked)).then((()=>{const t=e$1.tilingScheme,i=t.pixelSize;let l;if(this.schemaHelper=new e(i,r$1(e$1.spatialReference)&&e$1.spatialReference.isGeographic),256===i){const e=this.layer.tileInfo.spatialReference.isGeographic;l=this.layer.tileInfo.getOrCreateCompatible(256,e?1:2);}else l=this.view.spatialReference.isGeographic?this.layer.tileInfo.getOrCreateCompatible(512,.5):this.layer.tileInfo;const s=this._getTileInfoCompatibilityError(l,t);if(s)throw s;this.tileInfo=l;}));this._tileHandlerController=new AbortController;const w=this.view.resourceController;this._memCache=w.memoryController.newCache(this.layer.uid,(e=>{e.release();}));const H=new l$2(this.layer.currentStyleInfo.style),j$1=e$1.mapTileRequester;this._tileHandler=new g(this.layer,H,h,this._memCache,j$1);const R=this._tileHandlerController.signal,T=e=>w.schedule(e),I=this._tileHandler.start({signal:R,schedule:T}),b=this._tileHandler.spriteMosaic;b.then((e=>{!p$1(R)&&this._tileHandler&&(this.painter=new o(e,this._tileHandler.glyphMosaic));})),I.then((()=>this._tileHandlerController=null)),this.updatingHandles.add((()=>({style:this.layer.currentStyleInfo.style,newPixelRatio:this.view.state?.pixelRatio})),(({style:e})=>{this._tileHandlerController&&this._tileHandlerController.abort(),this._tileHandlerController=new AbortController,this._memCache.clear();const t=new l$2(e),i=new g(this.layer,t,h,this._memCache,j$1),r=i.start({signal:this._tileHandlerController.signal,schedule:T}),l=i.spriteMosaic;r.then((()=>this._tileHandlerController=null)),this.updatingHandles.addPromise(Promise.all([r,l]).then((([,e])=>{const t=this._tileHandler,r=this.painter;this.painter=new o(e,i.glyphMosaic),this._tileHandler=i,this.emit("data-changed"),t.destroy(),r&&r.dispose();})));}));const S=Promise.all([v,I,b]);this.addResolvingPromise(S);}destroy(){this.painter=s$2(this.painter),this._tileHandlerController&&(this._tileHandlerController.abort(),this._tileHandlerController=null),l$3(this._tileHandler),this._memCache=l$3(this._memCache),this._tileHandler=null;}get dataLevelRange(){const e=this.tileInfo.lods,t=e[0].scale,i=e[e.length-1].scale,r=this.levelRangeFromScaleRange(t,i);return 1===r.minLevel&&256===this.tileInfo.size[0]&&(r.minLevel=0),r}async fetchTile(e,t,i,r){return this._tileHandler.getVectorTile(e,t,i,r)}};e$2([d()],C.prototype,"layer",void 0),e$2([d()],C.prototype,"dataLevelRange",null),e$2([d()],C.prototype,"updatingProgressValue",void 0),C=e$2([n$1("esri.views.3d.layers.VectorTileLayerView3D")],C);const v=C;

export { v as default };
