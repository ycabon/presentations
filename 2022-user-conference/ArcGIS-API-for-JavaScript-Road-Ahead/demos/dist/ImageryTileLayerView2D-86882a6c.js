import { a4 as e, aN as u, jw as mt, a as e$1, d, n as n$3, dY as d$1, dW as x, iY as r$2, eP as w, b7 as l$1, iW as h, iX as p$1, G as r$3, e as e$2, aw as b, ji as S, Y as j, C as s, cx as E, ci as s$2, bm as i$3, l as l$2, j4 as g$1, s as s$3, O as t, cG as g$2, dn as w$1, ai as h$1 } from './_virtual_index-64b818a8.js';
import { y as y$1, d as d$2 } from './RasterVFDisplayObject-c09808a7.js';
import { f } from './LayerView2D-246827ac.js';
import { p, W, c as m$2 } from './WGLContainer-ddc57cf6.js';
import { r as r$1, i as i$1 } from './TileContainer-a9754968.js';
import { I } from './Utils-9723b65e.js';
import { u as u$2, o as o$1 } from './pixelUtils-d970883c.js';
import { g, u as u$1, s as s$1, i as i$2 } from './RawBlockCache-8b40176f.js';
import { X, n as ne, T as T$1, F } from './rasterProjectionHelper-b669eeb7.js';
import { r as r$4 } from './util-4c696f7e.js';
import { j as j$1 } from './dataUtils-7eaa3915.js';
import { s as s$4 } from './popupUtils-0b937595.js';
import { u as u$3 } from './LayerView-9b4453e0.js';
import { i as i$4 } from './RefreshableLayerView-1ab1c1be.js';
import './VertexArrayObject-8b8ec2c7.js';
import './Texture-0a4fb0f7.js';
import './enums-fb707d37.js';
import './VertexElementDescriptor-b07b83f4.js';
import './utils-b2399430.js';
import './MaterialKey-a43b2cc5.js';
import './alignmentUtils-d4b065e2.js';
import './definitions-20a531fc.js';
import './vec4f32-0748677e.js';
import './ProgramTemplate-047af3b2.js';
import './number-7d0da80b.js';
import './StyleDefinition-8bdfb2b8.js';
import './enums-11126df6.js';
import './config-76ec2e12.js';
import './GeometryUtils-0c093176.js';
import './earcut-da8a3e33.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class i extends r$1{constructor(t,e,i,r,a,n=null){super(t,e,i,r,a),this.bitmap=new p(n,null,null),this.bitmap.coordScale=[r,a],this.bitmap.once("isReady",(()=>this.ready()));}destroy(){super.destroy(),this.bitmap.destroy(),this.bitmap=null,this.stage=null;}set stencilRef(t){this.bitmap.stencilRef=t;}get stencilRef(){return this.bitmap.stencilRef}setTransform(t,s){super.setTransform(t,s),this.bitmap.transforms.dvs=this.transforms.dvs;}_createTransforms(){return {dvs:e(),tileMat3:e()}}onAttach(){this.bitmap.stage=this.stage;}onDetach(){this.bitmap.stage=null;}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class n$2 extends i$1{constructor(){super(...arguments),this.isCustomTilingScheme=!1;}createTile(e){const s=this._getTileBounds(e),[r,t]=this._tileInfoView.tileInfo.size;return new i(e,s[0],s[3],r,t)}prepareRenderPasses(e){const s=e.registerRenderPass({name:"imagery (tile)",brushes:[W.raster],target:()=>this.children.map((e=>e.bitmap)),drawPhase:I.MAP});return [...super.prepareRenderPasses(e),s]}doRender(e){this.visible&&e.drawPhase===I.MAP&&super.doRender(e);}_getTileBounds(r){const i=this._tileInfoView.getTileBounds(u(),r);if(this.isCustomTilingScheme&&r.world){const{tileInfo:e}=this._tileInfoView,t=mt(e.spatialReference);if(t){const{resolution:s}=e.lodAt(r.level),o=t/s%e.size[0],n=o?(e.size[0]-o)*s:0;i[0]-=n*r.world,i[2]-=n*r.world;}}return i}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const v=[0,0];let T=class extends d$1{constructor(){super(...arguments),this._emptyTilePixelBlock=null,this._tileStrategy=null,this._tileInfoView=null,this._fetchQueue=null,this._blockCacheRegistryUrl=null,this._blockCacheRegistryId=null,this._srcResolutions=null,this.previousLOD=null,this._needBlockCacheUpdate=!1,this._globalSymbolizerParams=null,this._symbolizerParams=null,this._abortController=null,this._isCustomTilingScheme=!1,this._globalUpdateRequested=!1,this.attached=!1,this.container=null,this.layer=null,this.timeExtent=null,this.redrawOrRefetch=x(((e,t)=>!this.previousLOD||this.layerView.suspended?Promise.resolve():e?this.updatingHandles.addPromise(this.doRefresh()):this.updatingHandles.addPromise(this._redrawImage(t))));}get useWebGLForProcessing(){return this._get("useWebGLForProcessing")??!0}set useWebGLForProcessing(e){this._set("useWebGLForProcessing",e);}get useProgressiveUpdate(){return null==this._get("useProgressiveUpdate")||this._get("useProgressiveUpdate")}set useProgressiveUpdate(e){if(this._tileStrategy&&this.useProgressiveUpdate!==e){this._tileStrategy.destroy(),this.container.removeAllChildren();const t=this._getCacheSize(e);this._tileStrategy=new r$2({cachePolicy:"purge",acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),cacheSize:t,tileInfoView:this._tileInfoView}),this._set("useProgressiveUpdate",e),this.layerView.requestUpdate();}}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume();const{extent:t,resolution:i,scale:s}=e.state,r=this._tileInfoView.getClosestInfoForScale(s);if(this.layer.raster){if(!this.useProgressiveUpdate||this._needBlockCacheUpdate){const e=this._srcResolutions[r.level],s=t.toJSON?t:w.fromJSON(t);g(this._blockCacheRegistryUrl,this._blockCacheRegistryId,s,i,e,this.layer.raster.ioConfig.sampling);}this._needBlockCacheUpdate=!1,this.previousLOD?.level!==r.level&&(this.previousLOD=r,null==this._symbolizerParams||this.layerView.hasTilingEffects||this._updateSymbolizerParams(),this._tileStrategy.updateCacheSize(0));}}moveEnd(){!this.layerView.hasTilingEffects&&this.useProgressiveUpdate||(this._abortController&&this._abortController.abort(),this._abortController=new AbortController,0===this._fetchQueue.length&&this._redrawImage(this._abortController.signal).then((()=>{this._globalUpdateRequested=!1,this.layerView.requestUpdate();})));const e=this._getCacheSize(this.useProgressiveUpdate);this._tileStrategy.updateCacheSize(e),this.layerView.requestUpdate();}get updating(){return this._fetchQueue?.updating||this._globalUpdateRequested||!(!this.updatingHandles||!this.updatingHandles.updating)}attach(){l$1("2d").supportsTextureFloat||(this.useWebGLForProcessing=!1),this._initializeTileInfo(),this._tileInfoView=new h(this.layerView.tileInfo,this.layerView.fullExtent);const e=this._computeFetchConcurrency();this._fetchQueue=new p$1({tileInfoView:this._tileInfoView,concurrency:e,process:(e,t)=>this._fetchTile1(e,t)});const t=this._getCacheSize(this.useProgressiveUpdate);this._tileStrategy=new r$2({cachePolicy:"purge",acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),cacheSize:t,tileInfoView:this._tileInfoView}),this._updateBlockCacheRegistry();}detach(){this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null,u$1(this._blockCacheRegistryUrl,this._blockCacheRegistryId),this._blockCacheRegistryUrl=this._blockCacheRegistryId=null;}acquireTile(e){const t=this.container.createTile(e);return this._enqueueTileFetch(t),this.layerView.requestUpdate(),this._needBlockCacheUpdate=!0,this._globalUpdateRequested=this.layerView.hasTilingEffects||!this.useProgressiveUpdate,t}releaseTile(e){this._fetchQueue.abort(e.key.id),this.container.removeChild(e),e.once("detach",(()=>{e.destroy(),this.layerView.requestUpdate();})),this.layerView.requestUpdate();}createEmptyTilePixelBlock(e=null){const t=null==e||e.join(",")===this._tileInfoView.tileInfo.size.join(",");if(t&&r$3(this._emptyTilePixelBlock))return this._emptyTilePixelBlock;e=e||this._tileInfoView.tileInfo.size;const[i,r]=e,l=new u$2({width:i,height:r,pixels:[new Uint8Array(i*r)],mask:new Uint8Array(i*r),pixelType:"u8"});return t&&(this._emptyTilePixelBlock=l),l}_fetchTile1(e,t){const i=r$3(t)&&t.signal,l=this.canUseWebGLForProcessing(),{layerView:a}=this,o=!a.tileInfo.isWrappable&&r$3(X(a.view.spatialReference)),h={allowPartialFill:!0,datumTransformation:a.datumTransformation,interpolation:l?"nearest":this.layer.interpolation,registryId:this._blockCacheRegistryId,requestRawData:l,signal:e$2(i),srcResolution:this._srcResolutions[e.level],timeExtent:a.timeExtent,tileInfo:a.tileInfo,disableWrapAround:o};return this.fetchTile(e,h)}_getCacheSize(e){return e?40:0}_initializeTileInfo(){const e=this.layerView.view.spatialReference,t=new b({x:this.layerView.fullExtent.xmin,y:this.layerView.fullExtent.ymax,spatialReference:e}),{scales:i,srcResolutions:s,isCustomTilingScheme:r}=ne(this.layer.rasterInfo,e),l=S.create({spatialReference:e,size:512,scales:i});(0===l.origin.x||l.origin.x>t.x)&&(l.origin=t),this._isCustomTilingScheme=r,this.layerView.set("tileInfo",l),this._srcResolutions=s??[];}_computeFetchConcurrency(){const{blockBoundary:e}=this.layer.rasterInfo.storageInfo,t=e[e.length-1];return (t.maxCol-t.minCol+1)*(t.maxRow-t.minRow+1)>64?2:10}async _enqueueTileFetch(e,t){this.updatingHandles.addPromise(this._enqueueTileFetch1(e,t));}async _enqueueTileFetch1(e,t){if(!this._fetchQueue.has(e.key.id)){try{const t=await this._fetchQueue.push(e.key),{bandIds:r}=this.layer;let l=!this.useProgressiveUpdate||this.layerView.hasTilingEffects&&!this._globalSymbolizerParams;if(this._globalUpdateRequested&&!this.layerView.moving&&0===this._fetchQueue.length){l=!1;try{await this._redrawImage(this._abortController&&this._abortController.signal);}catch(s$1){j(s$1)&&s.getLogger(this.declaredClass).error(s$1);}this._globalUpdateRequested=!1;}!this.canUseWebGLForProcessing()&&"rasterVF"!==this.type||this.layerView.hasTilingEffects||null!=this._symbolizerParams||this._updateSymbolizerParams();const o=this._tileInfoView.getTileCoords(v,e.key),h=this._tileInfoView.getTileResolution(e.key);await this.updateTileSource(e,{source:t,symbolizerParams:this._symbolizerParams,globalSymbolizerParams:this._globalSymbolizerParams,suspended:l,bandIds:r,coords:o,resolution:h}),e.once("attach",(()=>this.layerView.requestUpdate())),this.container.addChild(e);}catch(s$1){j(s$1)||s.getLogger(this.declaredClass).error(s$1);}this.layerView.requestUpdate();}}async _redrawImage(e){if(0===this.container.children.length)return;await this.layer.updateRenderer(),this.layerView.hasTilingEffects?await this._updateGlobalSymbolizerParams(e):(this._updateSymbolizerParams(),this._globalSymbolizerParams=null);const t=this.container.children.map((async e=>this.updateTileSymbolizerParameters(e,{local:this._symbolizerParams,global:this._globalSymbolizerParams})));await E(t),this.container.requestRender();}async _updateGlobalSymbolizerParams(e){const t={srcResolution:this._srcResolutions[this.previousLOD.level],registryId:this._blockCacheRegistryId,signal:e},i=await this.layer.fetchPixels(this.layerView.view.extent,this.layerView.view.width,this.layerView.view.height,t);if(!i||!i.pixelBlock)return;const s=this.layer.symbolizer.generateWebGLParameters({pixelBlock:o$1(i.pixelBlock,this.layer.bandIds),isGCS:this.layerView.view.spatialReference.isGeographic,resolution:{x:this.previousLOD.resolution,y:this.previousLOD.resolution},bandIds:this.layer.bandIds});!this.canUseWebGLForProcessing()&&s&&"stretch"===s.type&&this.layer.renderer&&"raster-stretch"===this.layer.renderer.type&&(s.factor=s.factor.map((e=>255*e)),s.outMin=Math.round(255*s.outMin),s.outMax=Math.round(255*s.outMax)),this._globalSymbolizerParams=s;}_updateSymbolizerParams(){this._symbolizerParams=this.layer.symbolizer.generateWebGLParameters({pixelBlock:null,isGCS:this.layerView.view.spatialReference.isGeographic,resolution:{x:this.previousLOD.resolution,y:this.previousLOD.resolution},bandIds:this.layer.bandIds});}_updateBlockCacheRegistry(e=!1){const{url:t,rasterInfo:i,raster:s}=this.layer,{multidimensionalDefinition:r}=this.layer.normalizeRasterFetchOptions({multidimensionalDefinition:this.layer.multidimensionalDefinition,timeExtent:this.layerView.timeExtent}),l=i?.multidimensionalInfo?s.getSliceIndex(r):null,a=i$2(t,l);if(a!==this._blockCacheRegistryUrl){if(null!=this._blockCacheRegistryUrl&&u$1(this._blockCacheRegistryUrl,this._blockCacheRegistryId),this._blockCacheRegistryId=s$1(a,this.layer.raster.rasterInfo),e){const e=this._tileInfoView.getClosestInfoForScale(this.layerView.view.scale),t=this._srcResolutions[e.level];g(a,this._blockCacheRegistryId,this.layerView.view.extent,this.layerView.view.resolution,t,this.layer.raster.ioConfig.sampling);}this._blockCacheRegistryUrl=a;}}async doRefresh(){await this.layer.updateRenderer(),this.layerView.hasTilingEffects||this._updateSymbolizerParams(),this._updateBlockCacheRegistry(!0),this._fetchQueue.reset();const e=[];this._globalUpdateRequested=this.layerView.hasTilingEffects||!this.useProgressiveUpdate,this._tileStrategy.tiles.forEach((t=>e.push(this._enqueueTileFetch(t)))),await E(e);}};e$1([d()],T.prototype,"_fetchQueue",void 0),e$1([d()],T.prototype,"_globalUpdateRequested",void 0),e$1([d()],T.prototype,"attached",void 0),e$1([d()],T.prototype,"container",void 0),e$1([d()],T.prototype,"layer",void 0),e$1([d()],T.prototype,"layerView",void 0),e$1([d()],T.prototype,"type",void 0),e$1([d()],T.prototype,"useWebGLForProcessing",null),e$1([d()],T.prototype,"useProgressiveUpdate",null),e$1([d()],T.prototype,"timeExtent",void 0),e$1([d()],T.prototype,"updating",null),T=e$1([n$3("esri.views.2d.layers.imagery.BaseImageryTileSubView2D")],T);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let l=class extends T{constructor(){super(...arguments),this.container=null,this.layer=null,this.type="raster";}attach(){super.attach(),this.container=new n$2(this._tileInfoView),this.container.isCustomTilingScheme=this._isCustomTilingScheme;}detach(){super.detach(),this.container.removeAllChildren(),this.container=null;}canUseWebGLForProcessing(){return this.useWebGLForProcessing&&this.layer.symbolizer.canRenderInWebGL&&!("majority"===this.layer.interpolation&&r$4(this.layer))}fetchTile(e,r){return this.layer.fetchTile(e.level,e.row,e.col,r)}async updateTileSource(e,t){const{bandIds:s}=this.layer,i=this._getLayerInterpolation(),o=this.canUseWebGLForProcessing(),{source:a,globalSymbolizerParams:l,suspended:n,coords:c,resolution:p}=t,u=this.layerView.hasTilingEffects?l:t.symbolizerParams,{bitmap:m}=e;if([m.x,m.y]=c,m.resolution=p,a&&r$3(a)&&r$3(a.pixelBlock)){const e={extent:a.extent,pixelBlock:a.pixelBlock};if(m.rawPixelData=e,o)m.source=a.pixelBlock,m.isRendereredSource=!1;else {const r=await this.layer.applyRenderer(e,"stretch"===l?.type?l:null);m.source=r,m.isRendereredSource=!0;}m.symbolizerParameters=o?u:null,o?m.transformGrid||(m.transformGrid=a.transformGrid):m.transformGrid=null;}else {const e=this.createEmptyTilePixelBlock();m.source=e,m.symbolizerParameters=o?u:null,m.transformGrid=null;}m.bandIds=o?s:null,m.width=this._tileInfoView.tileInfo.size[0],m.height=this._tileInfoView.tileInfo.size[1],m.interpolation=i,m.suspended=n,m.invalidateTexture();}async updateTileSymbolizerParameters(e,t){const{local:s,global:i}=t,{bandIds:o}=this.layer,a=this._getLayerInterpolation(),l=this.canUseWebGLForProcessing(),{bitmap:n}=e,{rawPixelData:c}=n;!l&&r$3(c)?(n.source=await this.layer.applyRenderer(c,"stretch"===i?.type?i:null),n.isRendereredSource=!0):(n.isRendereredSource&&r$3(c)&&(n.source=c.pixelBlock),n.isRendereredSource=!1),n.symbolizerParameters=l?this.layerView.hasTilingEffects?i:s:null,n.bandIds=l?o:null,n.interpolation=a,n.suspended=!1;}_getLayerInterpolation(){const e=this.layer.renderer.type;if("raster-colormap"===e||"unique-value"===e||"class-breaks"===e)return "nearest";const{interpolation:r}=this.layer,{renderer:t}=this.layer;return "raster-stretch"===t.type&&null!=t.colorRamp?"bilinear"===r||"cubic"===r?"bilinear":"nearest":r}};e$1([d()],l.prototype,"container",void 0),e$1([d()],l.prototype,"layer",void 0),e$1([d()],l.prototype,"type",void 0),l=e$1([n$3("esri.views.2d.layers.imagery.ImageryTileView2D")],l);const n$1=l;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class r extends r$1{constructor(t,s,e,i,r,o=null){super(t,s,e,i,r),this.tileData=new y$1(o),this.tileData.coordScale=[i,r],this.tileData.once("isReady",(()=>this.ready()));}destroy(){super.destroy(),this.tileData.destroy(),this.tileData=null,this.stage=null;}set stencilRef(t){this.tileData.stencilRef=t;}get stencilRef(){return this.tileData.stencilRef}_createTransforms(){return {dvs:e(),tileMat3:e()}}setTransform(e,a){super.setTransform(e,a);const i=a/(e.resolution*e.pixelRatio),r=this.transforms.tileMat3,[o,l]=this.tileData.offset,h=[this.x+o*a,this.y-l*a],[n,f]=e.toScreenNoRotation([0,0],h),{symbolTileSize:m}=this.tileData.symbolizerParameters,c=Math.round((this.width-this.tileData.offset[0])/m)*m,D=Math.round((this.height-this.tileData.offset[1])/m)*m,d=c/this.rangeX*i,u=D/this.rangeY*i;s$2(r,d,0,0,0,u,0,n,f,1),i$3(this.transforms.dvs,e.displayViewMat3,r),this.tileData.transforms.dvs=this.transforms.dvs;}onAttach(){this.tileData.stage=this.stage;}onDetach(){this.tileData.stage=null;}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class o extends i$1{constructor(){super(...arguments),this.isCustomTilingScheme=!1,this.symbolTypes=["triangle"];}createTile(s){const t=this._tileInfoView.getTileBounds(u(),s),[i,o]=this._tileInfoView.tileInfo.size;return new r(s,t[0],t[3],i,o)}prepareRenderPasses(e){const r=e.registerRenderPass({name:"imagery (vf tile)",brushes:[m$2],target:()=>this.children.map((e=>e.tileData)),drawPhase:I.MAP});return [...super.prepareRenderPasses(e),r]}doRender(e){this.visible&&e.drawPhase===I.MAP&&this.symbolTypes.forEach((s=>{e.renderPass=s,super.doRender(e);}));}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let c=class extends T{constructor(){super(...arguments),this._handle=null,this.container=null,this.layer=null,this.type="rasterVF";}canUseWebGLForProcessing(){return !1}async fetchTile(e,t){t={...t,interpolation:"nearest",requestProjectedLocalDirections:!0};const i=await this.layer.fetchTile(e.level,e.row,e.col,t);return "vector-magdir"===this.layer.rasterInfo.dataType&&i?.pixelBlock&&(i.pixelBlock=await this.layer.convertVectorFieldData(i.pixelBlock,t)),i}updateTileSource(e,i){const r=i.symbolizerParams,{tileData:o}=e;o.key=e.key,o.width=this._tileInfoView.tileInfo.size[0],o.height=this._tileInfoView.tileInfo.size[1];const{symbolTileSize:s}=r,{source:l}=i;if(o.offset=this._getTileSymbolOffset(o.key,s),r$3(l)&&r$3(l.pixelBlock)){const e={extent:l.extent,pixelBlock:l.pixelBlock};o.rawPixelData=e,o.symbolizerParameters=r,o.source=this._sampleVectorFieldData(l.pixelBlock,r,o.offset);}else {const e=[Math.round((this._tileInfoView.tileInfo[0]-o.offset[0])/s),Math.round((this._tileInfoView.tileInfo[1]-o.offset[1])/s)],t=this.createEmptyTilePixelBlock(e);o.source=t,o.symbolizerParameters=r;}return o.invalidateVAO(),Promise.resolve(null)}updateTileSymbolizerParameters(e,i){const r=i.local,{symbolTileSize:o}=r,{tileData:s}=e;s.offset=this._getTileSymbolOffset(s.key,o);const l=s.symbolizerParameters.symbolTileSize;return s.symbolizerParameters=r,r$3(s.rawPixelData?.pixelBlock)&&l!==o&&(s.source=this._sampleVectorFieldData(s.rawPixelData.pixelBlock,s.symbolizerParameters,s.offset)),Promise.resolve(null)}attach(){super.attach(),this.container=new o(this._tileInfoView),this.container.isCustomTilingScheme=this._isCustomTilingScheme,this._updateSymbolType(this.layer.renderer),this._handle=l$2((()=>this.layer.renderer),(e=>this._updateSymbolType(e)));}detach(){super.detach(),this.container.removeAllChildren(),this._handle.remove(),this._handle=null;}_getTileSymbolOffset(e,t){const i=e.col*this._tileInfoView.tileInfo.size[0]%t,r=e.row*this._tileInfoView.tileInfo.size[1]%t;return [i>t/2?t-i:-i,r>t/2?t-r:-r]}_sampleVectorFieldData(e,t,i){const{symbolTileSize:r}=t;return j$1(e,"vector-uv",r,i)}_updateSymbolType(e){"vector-field"===e.type&&(this.container.symbolTypes="wind-barb"===e.style?["scalar","triangle"]:"simple-scalar"===e.style?["scalar"]:["triangle"]);}};e$1([d()],c.prototype,"container",void 0),e$1([d()],c.prototype,"layer",void 0),e$1([d()],c.prototype,"type",void 0),c=e$1([n$3("esri.views.2d.layers.imagery.VectorFieldTileView2D")],c);const n=c;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const m$1=m=>{let f=class extends m{constructor(){super(...arguments),this._rasterFieldPrefix="Raster.",this.layer=null,this.view=null,this.tileInfo=null;}get fullExtent(){return this._getfullExtent()}_getfullExtent(){return this.projectFullExtent(this.view.spatialReference)}get hasTilingEffects(){return this.layer.renderer&&"dynamicRangeAdjustment"in this.layer.renderer&&this.layer.renderer.dynamicRangeAdjustment}get datumTransformation(){return T$1(e$2(this.layer.fullExtent),this.view.spatialReference,!0)}supportsSpatialReference(t){return !!this.projectFullExtent(t)}projectFullExtent(t){const e=e$2(this.layer.fullExtent),r=T$1(e,t,!1);return F(e,t,r)}async fetchPopupFeatures(t$1,i){const{layer:s}=this;if(!t$1)throw new s$3("imageryTileLayerView:fetchPopupFeatures","Nothing to fetch without area",{layer:s});const{popupEnabled:a}=s,n=s$4(s,i);if(!a||t(n))throw new s$3("imageryTileLayerView:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:a,popupTemplate:n});const l=[],{value:u,magdirValue:m}=await s.identify(t$1,{timeExtent:this.timeExtent});let f="";if(u&&u.length){f="imagery-tile"===s.type&&s.hasStandardTime()&&null!=u[0]?u.map((t=>s.getStandardTimeValue(t))).join(", "):u.join(", ");const t$1={ObjectId:0},r="Raster.ServicePixelValue";t$1[r]=this._formatAttributeValue(f,r);const i=s.rasterInfo?.attributeTable,a=t(i)?null:i.features;if(a&&a.length>0){const e=a.filter((t=>{const e=t.attributes.value||t.attributes.Value||t.attributes.VALUE;return String(e)===f}));if(e.length>0){const r=e[0];if(r)for(const e in r.attributes)if(r.attributes.hasOwnProperty(e)){const i=this._rasterFieldPrefix+e;t$1[i]=this._formatAttributeValue(r.attributes[e],i);}}}const n=s.rasterInfo.dataType;"vector-magdir"!==n&&"vector-uv"!==n||(t$1["Raster.Magnitude"]=m?.[0],t$1["Raster.Direction"]=m?.[1]);const p=new g$2(this.fullExtent.clone(),null,t$1);p.layer=s,p.sourceLayer=p.layer,l.push(p);}return l}_formatAttributeValue(t,e){if("string"==typeof t){const r=this.layer.popupTemplate&&this.layer.popupTemplate.fieldInfos,i=this._getFieldInfo(r,e),o=i&&i.format;if(o){let e,r;return t.trim().includes(",")?(e=",",r=e+" ",this._formatDelimitedString(t,e,r,o)):t.trim().includes(" ")?(e=r=" ",this._formatDelimitedString(t,e,r,o)):this._formatNumberFromString(t,o)}}return t}_getFieldInfo(t,e){if(!t||!t.length||!e)return;const r=e.toLowerCase();let i;return t.some((t=>!(!t.fieldName||t.fieldName.toLowerCase()!==r&&t.fieldName.toLowerCase()!==r.replace(/ /g,"_"))&&(i=t,!0))),i}_formatDelimitedString(t,e,r,i){return t&&e&&r&&i?t.trim().split(e).map((t=>this._formatNumberFromString(t,i))).join(r):t}_formatNumberFromString(t,e){if(!t||!e)return t;const r=Number(t);return isNaN(r)?t:e.format(r)}};return e$1([d()],f.prototype,"layer",void 0),e$1([d(g$1)],f.prototype,"timeExtent",void 0),e$1([d()],f.prototype,"view",void 0),e$1([d()],f.prototype,"fullExtent",null),e$1([d()],f.prototype,"tileInfo",void 0),e$1([d({readOnly:!0})],f.prototype,"hasTilingEffects",null),f=e$1([n$3("esri.views.layers.ImageryTileLayerView")],f),f};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let m=class extends(m$1(i$4(f(u$3)))){constructor(){super(...arguments),this._useWebGLForProcessing=!0,this._useProgressiveUpdate=!0,this.subview=null;}get useWebGLForProcessing(){return this._useWebGLForProcessing}set useWebGLForProcessing(e){this._useWebGLForProcessing=e,this.subview&&"useWebGLForProcessing"in this.subview&&(this.subview.useWebGLForProcessing=e);}get useProgressiveUpdate(){return this._useWebGLForProcessing}set useProgressiveUpdate(e){this._useProgressiveUpdate=e,this.subview&&"useProgressiveUpdate"in this.subview&&(this.subview.useProgressiveUpdate=e);}update(e){this.subview.update(e),this.notifyChange("updating");}isUpdating(){return !this.subview||this.subview.updating}attach(){this.layer.increaseRasterJobHandlerUsage(),this._updateSubview(),this.handles.add([l$2((()=>{const{layer:e}=this;return {bandIds:e.bandIds,renderer:e.renderer,interpolation:e.interpolation,multidimensionalDefinition:e.multidimensionalDefinition}}),((e,s$1)=>{const r=e.interpolation!==s$1.interpolation&&("majority"===e.interpolation||"majority"===s$1.interpolation)&&r$4(this.layer),o=e.renderer!==s$1.renderer&&s$1.renderer?.type!==e.renderer?.type;o&&this._updateSubview();const a=e.multidimensionalDefinition!==s$1.multidimensionalDefinition||r||o;this.subview.redrawOrRefetch(a).catch((e=>{j(e)||s.getLogger(this.declaredClass).error(e);})),this.notifyChange("updating");})),l$2((()=>this.layer.blendMode??"normal"),(e=>{this.subview.container.blendMode=e;}),w$1),l$2((()=>this.layer.effect??null),(e=>{this.subview.container.effect=e;}),w$1),l$2((()=>this.timeExtent),(()=>{this.subview.timeExtent=this.timeExtent,this.subview.redrawOrRefetch(!0).catch((e=>{j(e)||s.getLogger(this.declaredClass).error(e);}));}),h$1)],"attach");}detach(){this.handles.remove("attach"),this.layer.decreaseRasterJobHandlerUsage(),this._detachSubview(this.subview),this.subview?.destroy(),this.subview=null;}moveStart(){this.requestUpdate();}viewChange(){this.requestUpdate();}moveEnd(){this.subview.moveEnd();}async hitTest(e,i){return [{type:"graphic",layer:this.layer,mapPoint:e,graphic:new g$2({attributes:{},geometry:e.clone()})}]}doRefresh(){return this.subview.doRefresh()}_updateSubview(){const e="vector-field"===this.layer.renderer.type?"rasterVF":"flow"===this.layer.renderer.type?"flow":"raster";if(this.subview){if(this.subview.type===e)return void this._attachSubview(this.subview);this._detachSubview(this.subview),this.subview?.destroy(),this.subview=null;}const{layer:s}=this;let i;i="rasterVF"===e?new n({layer:s,layerView:this}):"flow"===e?new d$2({layer:s,layerView:this}):new n$1({layer:s,layerView:this}),"useWebGLForProcessing"in i&&(i.useWebGLForProcessing=this._useWebGLForProcessing),"useProgressiveUpdate"in i&&(i.useProgressiveUpdate=this._useProgressiveUpdate),"previousLOD"in i&&(i.previousLOD=this.subview&&"previousLOD"in this.subview&&this.subview.previousLOD),this._attachSubview(i),this.subview=i,this.requestUpdate();}_attachSubview(e){e&&!e.attached&&(e.attach(),e.attached=!0,this.container.addChildAt(e.container,0),e.container.blendMode=this.layer.blendMode,e.container.effect=this.layer.effect);}_detachSubview(e){e?.attached&&(this.container.removeChild(e.container),e.detach(),e.attached=!1);}};e$1([d()],m.prototype,"subview",void 0),e$1([d()],m.prototype,"useWebGLForProcessing",null),e$1([d()],m.prototype,"useProgressiveUpdate",null),m=e$1([n$3("esri.views.2d.layers.ImageryTileLayerView2D")],m);const y=m;

export { y as default };
