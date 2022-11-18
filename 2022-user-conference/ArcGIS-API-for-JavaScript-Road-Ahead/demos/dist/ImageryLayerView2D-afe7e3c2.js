import { u as e, y, z as n, A as m$1, aC as j, $ as s, P as g$2, q1 as A, m as r, I as x, w, t as t$1, eY as d$2, q2 as x$1, L as e$1, q3 as d$3, b7 as l, eX as w$1, q4 as J, U, q5 as i$3, hH as U$1, e9 as j$1 } from './_virtual_index-1ea2035a.js';
import { y as y$1, d as d$4 } from './RasterVFDisplayObject-b7d5257f.js';
import { y as y$2 } from './LayerView2D-0acb5666.js';
import { o as oe } from './BaseGraphicContainer-aab27617.js';
import { n as n$1 } from './HighlightGraphicContainer-d51c97ba.js';
import { a } from './BitmapContainer-6c702079.js';
import { i } from './utils-94e6680e.js';
import { i as i$1 } from './Bitmap-c8e15fa6.js';
import { v } from './ExportStrategy-610b458a.js';
import { o, d as d$1 } from './WGLContainer-be6ebd59.js';
import { I } from './enums-4e1a5b11.js';
import { m as m$2 } from './ImageryLayerView-5d49c55d.js';
import { u as u$1 } from './LayerView-04d8537b.js';
import { i as i$2 } from './RefreshableLayerView-f32b8d34.js';
import './Utils-7b2ac961.js';
import './number-7d0da80b.js';
import './enums-3e26cf0d.js';
import './cimAnalyzer-32e4ad07.js';
import './fontUtils-49a60944.js';
import './BidiEngine-25d35bf3.js';
import './alignmentUtils-d4b065e2.js';
import './definitions-a784b44f.js';
import './Rect-1c5846da.js';
import './GeometryUtils-10c98655.js';
import './FeatureContainer-e333c7c0.js';
import './visualVariablesUtils-e0de182e.js';
import './visualVariablesUtils-933d57c8.js';
import './TileContainer-18a96df2.js';
import './MaterialKey-8672cbbb.js';
import './Matcher-39feddc4.js';
import './tileUtils-e3849516.js';
import './TileClipper-b7d453c3.js';
import './Geometry-bc69b0c8.js';
import './GeometryUtils-07c7843a.js';
import './ExpandedCIM-a44ee24d.js';
import './schemaUtils-15a39169.js';
import './createSymbolSchema-49eb4f50.js';
import './util-b1c4d8f0.js';
import './ComputedAttributeStorage-5652149f.js';
import './centroid-205dc6cf.js';
import './GraphicsView-fce768d1.js';
import './EffectView-de5a8347.js';
import './WGLBrushVTLSymbol-5326d98d.js';
import './StyleDefinition-98114241.js';
import './ShaderCompiler-4879c29c.js';
import './ProgramTemplate-192f2ab9.js';
import './heatmapTextureUtils-076ceaf2.js';
import './popupUtils-4fcb9e6d.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let d=class extends m$1{constructor(){super(...arguments),this.attached=!1,this.container=new i,this.updateRequested=!1,this.type="imagery",this._bitmapView=new a;}destroy(){this.attached&&(this.detach(),this.attached=!1),this.updateRequested=!1;}get updating(){return !this.attached||this.isUpdating()}update(e){this.strategy.update(e).catch((e=>{j(e)||s.getLogger(this.declaredClass).error(e);}));}hitTest(e){return new g$2({attributes:{},geometry:e.clone(),layer:this.layer})}attach(){this.container.addChild(this._bitmapView);const e=this.layer.version>=10,t=this.layer.version>=10.1?this.layer.imageMaxHeight:2048,r=this.layer.version>=10.1?this.layer.imageMaxWidth:2048;this.strategy=new v({container:this._bitmapView,imageNormalizationSupported:e,imageMaxHeight:t,imageMaxWidth:r,fetchSource:this._fetchImage.bind(this),requestUpdate:()=>this.requestUpdate()});}detach(){this.strategy.destroy(),this._bitmapView.removeAllChildren(),this.container.removeAllChildren(),this.updateRequested=!1;}redraw(){this.strategy.updateExports((async e=>{if(e.source instanceof HTMLImageElement)return;const t=await this.layer.applyRenderer({extent:e.source.extent,pixelBlock:e.source.originalPixelBlock??e.source.pixelBlock}),r=e.source;r.filter=e=>this.layer.pixelFilter?this.layer.applyFilter(e):{...t,extent:r.extent};})).catch((e=>{j(e)||s.getLogger(this.declaredClass).error(e);}));}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate());}isUpdating(){return this.strategy.updating||this.updateRequested}getPixelData(){if(this.updating)return null;const e=this.strategy.bitmaps;if(1===e.length&&e[0].source)return {extent:e[0].source.extent,pixelBlock:e[0].source.originalPixelBlock};if(e.length>1){const t=this.view.extent,r$1=e.map((e=>e.source)).filter((e=>e.extent&&e.extent.intersects(t))).map((e=>({extent:e.extent,pixelBlock:e.originalPixelBlock}))),i=A(r$1,t);return r(i)?{extent:i.extent,pixelBlock:i.pixelBlock}:null}return null}_fetchImage(e,t,r,i){return (i=i||{}).timeExtent=this.timeExtent,i.requestAsImageElement=!0,this.layer.fetchImage(e,t,r,i).then((e=>e.imageOrCanvasElement?e.imageOrCanvasElement:this.layer.applyRenderer(e.pixelData,{signal:i.signal}).then((t=>{const r=new i$1(t.pixelBlock,t.extent.clone(),e.pixelData.pixelBlock);return r.filter=e=>this.layer.applyFilter(e),r}))))}};e([y()],d.prototype,"attached",void 0),e([y()],d.prototype,"container",void 0),e([y()],d.prototype,"layer",void 0),e([y()],d.prototype,"strategy",void 0),e([y()],d.prototype,"timeExtent",void 0),e([y()],d.prototype,"view",void 0),e([y()],d.prototype,"updateRequested",void 0),e([y()],d.prototype,"updating",null),e([y()],d.prototype,"type",void 0),d=e([n("esri.views.2d.layers.imagery.ImageryView2D")],d);const u=d;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class t extends o{constructor(){super(...arguments),this.symbolTypes=["triangle"];}get requiresDedicatedFBO(){return !1}prepareRenderPasses(s){const t=s.registerRenderPass({name:"imagery (vf)",brushes:[d$1],target:()=>this.children,drawPhase:I.MAP});return [...super.prepareRenderPasses(s),t]}doRender(e){this.visible&&e.drawPhase===I.MAP&&this.symbolTypes.forEach((r=>{e.renderPass=r,super.doRender(e);}));}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let p=class extends m$1{constructor(e){super(e),this.update=x(((e,t)=>this._update(e,t).catch((e=>{j(e)||s.getLogger(this.declaredClass).error(e);}))));}get updating(){return !!this._loading}redraw(e){if(!this.container.children.length)return;const t=this.container.children[0];t.symbolizerParameters=e,t.invalidateVAO(),this.container.symbolTypes="wind_speed"===e.style?["scalar","triangle"]:"simple_scalar"===e.style?["scalar"]:["triangle"],this.container.requestRender();}async _update(e,t,r){if(!e.stationary)return;const{extent:i,spatialReference:s}=e.state,o=new w({xmin:i.xmin,ymin:i.ymin,xmax:i.xmax,ymax:i.ymax,spatialReference:s}),[a,n]=e.state.size;this._loading=this.fetchPixels(o,a,n,r);const c=await this._loading;this._addToDisplay(c,t,e.state),this._loading=null;}_addToDisplay(e,t,r){if(t$1(e.pixelBlock))return this.container.children.forEach((e=>e.destroy())),void this.container.removeAllChildren();const{extent:s,pixelBlock:o}=e,a=new y$1(o);a.offset=[0,0],a.symbolizerParameters=t,a.rawPixelData=e,a.invalidateVAO(),a.x=s.xmin,a.y=s.ymax,a.pixelRatio=r.pixelRatio,a.rotation=r.rotation,a.resolution=r.resolution,a.width=o.width*t.symbolTileSize,a.height=o.height*t.symbolTileSize,this.container.children.forEach((e=>e.destroy())),this.container.removeAllChildren(),this.container.symbolTypes="wind_speed"===t.style?["scalar","triangle"]:"simple_scalar"===t.style?["scalar"]:["triangle"],this.container.addChild(a);}};e([y()],p.prototype,"fetchPixels",void 0),e([y()],p.prototype,"container",void 0),e([y()],p.prototype,"_loading",void 0),e([y()],p.prototype,"updating",null),p=e([n("esri.views.2d.layers.imagery.ImageryVFStrategy")],p);const m=p;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let f=class extends d$2{constructor(){super(...arguments),this.attached=!1,this.container=new t,this.type="imageryVF",this._dataParameters={exportParametersVersion:0,bbox:"",symbolTileSize:0,time:""},this._fetchpixels=async(e,t,r$1,i)=>{const n=await this._projectFullExtentPromise,{symbolTileSize:l}=this.layer.renderer,{extent:c,width:m,height:p}=x$1(e,t,r$1,l,n);if(r(n)&&!n.intersects(e))return {extent:c,pixelBlock:null};const h={bbox:`${c.xmin}, ${c.ymin}, ${c.xmax}, ${c.ymax}`,exportParametersVersion:this.layer.exportImageServiceParameters.version,symbolTileSize:l,time:JSON.stringify(this.timeExtent||"")};if(this._canReuseVectorFieldData(h)){const e=this.getPixelData();if(r(e)){if(`${e.extent.xmin}, ${e.extent.ymin}, ${e.extent.xmax}, ${e.extent.ymax}`===h.bbox)return e}}const{pixelData:u}=await this.layer.fetchImage(c,m,p,{timeExtent:this.timeExtent,requestAsImageElement:!1,signal:i});if(this._dataParameters=h,t$1(u.pixelBlock))return {extent:c,pixelBlock:null};return {extent:c,pixelBlock:"vector-uv"===this.layer.rasterInfo.dataType?e$1(d$3(u.pixelBlock,"vector-uv")):u.pixelBlock}};}get updating(){return !this.attached||this._strategy.updating}attach(){this._projectFullExtentPromise=this._getProjectedFullExtent(this.view.spatialReference),this._strategy=new m({container:this.container,fetchPixels:this._fetchpixels}),this.handles.add(l((()=>this.layer.renderer),(e=>this._updateSymbolizerParams(e)),w$1),"vector-field-view-update");}detach(){this._strategy.destroy(),this.container.children.forEach((e=>e.destroy())),this.container.removeAllChildren(),this.handles.remove("vector-field-view-update"),this._strategy=this.container=this._projectFullExtentPromise=null;}getPixelData(){if(this.updating||!this.container.children.length)return null;const{extent:e,pixelBlock:t}=this.container.children[0].rawPixelData;return {extent:e,pixelBlock:t}}hitTest(e){return new g$2({attributes:{},geometry:e.clone(),layer:this.layer})}update(e){this._strategy.update(e,this._symbolizerParams);}redraw(){this._updateSymbolizerParams(this.layer.renderer),this._strategy.redraw(this._symbolizerParams);}_canReuseVectorFieldData(e){const t=this._dataParameters.exportParametersVersion===e.exportParametersVersion,r=this._dataParameters.time===e.time,i=this._dataParameters.symbolTileSize===e.symbolTileSize,s=this._dataParameters.bbox===e.bbox;return t&&r&&i&&s}async _getProjectedFullExtent(e){try{return await J(this.layer.fullExtent,e)}catch(t){try{const t=(await U(this.layer.url,{query:{option:"footprints",outSR:e.wkid||JSON.stringify(e.toJSON()),f:"json"}})).data.featureCollection.layers[0].layerDefinition.extent;return t?w.fromJSON(t):null}catch{return null}}}_updateSymbolizerParams(e){"vector-field"===e.type&&(this._symbolizerParams=this.layer.symbolizer.generateWebGLParameters({pixelBlock:null}));}};e([y()],f.prototype,"attached",void 0),e([y()],f.prototype,"container",void 0),e([y()],f.prototype,"layer",void 0),e([y()],f.prototype,"timeExtent",void 0),e([y()],f.prototype,"type",void 0),e([y()],f.prototype,"view",void 0),e([y()],f.prototype,"updating",null),f=e([n("esri.views.2d.layers.imagery.VectorFieldView2D")],f);const g$1=f;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let g=class extends(m$2(i$2(y$2(u$1)))){constructor(){super(...arguments),this._exportImageVersion=-1,this._highlightGraphics=new i$3,this.subview=null;}get pixelData(){return this.updating?null:"getPixelData"in this.subview?this.subview.getPixelData():null}async hitTest(e,i){return this.subview?[{type:"graphic",graphic:this.subview.hitTest(e),layer:this.layer,mapPoint:e}]:null}update(e){this.subview?.update(e);}attach(){this.layer.increaseRasterJobHandlerUsage(),this._setSubView(),this.view&&(this._highlightView=new oe({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new n$1(this.view.featuresTilingScheme)}),this.container.addChild(this._highlightView.container)),this.handles.add([l((()=>this.layer.blendMode??"normal"),(e=>this.subview.container.blendMode=e),w$1),l((()=>this.layer.effect??null),(e=>this.subview.container.effect=e),w$1),l((()=>this.layer.exportImageServiceParameters.version),(e=>{e&&this._exportImageVersion!==e&&(this._exportImageVersion=e,this.requestUpdate());}),U$1),l((()=>this.timeExtent),(e=>{this.subview.timeExtent=e,"redraw"in this.subview?this.requestUpdate():this.subview.redrawOrRefetch();}),U$1),this.layer.on("redraw",(()=>{"redraw"in this.subview?this.subview.redraw():this.subview.redrawOrRefetch();})),l((()=>this.layer.renderer),(()=>this._setSubView()))],"imagerylayerview-update");}detach(){this.layer.decreaseRasterJobHandlerUsage(),this.container.removeAllChildren(),this._detachSubview(this.subview),this.subview?.destroy(),this.handles.remove("imagerylayerview-update"),this.subview=null,this._highlightView?.destroy(),this._exportImageVersion=-1;}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}highlight(e,r){if(!((Array.isArray(e)?e[0]:j$1.isCollection(e)?e.getItemAt(0):e)instanceof g$2))return {remove:()=>{}};let s=[];return Array.isArray(e)||j$1.isCollection(e)?s=e.map((e=>e.clone())):e instanceof g$2&&(s=[e.clone()]),this._highlightGraphics.addMany(s),{remove:()=>{this._highlightGraphics.removeMany(s);}}}async doRefresh(){this.requestUpdate();}isUpdating(){return !this.subview||this.subview.updating}_setSubView(){if(!this.view)return;const e=this.layer.renderer?.type;let i="imagery";if("vector-field"===e?i="imageryVF":"flow"===e&&(i="flow"),this.subview){const{type:e}=this.subview;if(e===i)return this._attachSubview(this.subview),void("flow"===e?this.subview.redrawOrRefetch():"imagery"===e&&"lerc"===this.layer.format?this.subview.redraw():this.requestUpdate());this._detachSubview(this.subview),this.subview?.destroy();}this.subview="imagery"===i?new u({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):"imageryVF"===i?new g$1({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):new d$4({layer:this.layer,layerView:this}),this._attachSubview(this.subview),this.requestUpdate();}_attachSubview(e){e&&!e.attached&&(e.attach(),e.attached=!0,this.container.addChildAt(e.container,0),e.container.blendMode=this.layer.blendMode,e.container.effect=this.layer.effect);}_detachSubview(e){e?.attached&&(this.container.removeChild(e.container),e.detach(),e.attached=!1);}};e([y()],g.prototype,"pixelData",null),e([y()],g.prototype,"subview",void 0),g=e([n("esri.views.2d.layers.ImageryLayerView2D")],g);const b=g;

export { b as default };
