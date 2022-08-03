import { B as e, C as d$1, D as n, E as f$1, aA as j, Z as s$1, g as g$2, m0 as c, r, N as x, w, t as t$2, eI as d$2, m1 as g$3, bG as e$1, m2 as d$3, b3 as l, er as w$1, m3 as F, h as L, m4 as i$2, h5 as U, j as j$1 } from './_virtual_index-9b831d4a.js';
import { y, d as d$4 } from './RasterVFDisplayObject-81f23e4c.js';
import { f as f$2 } from './LayerView2D-bd5847a4.js';
import { o as oe } from './BaseGraphicContainer-bd052543.js';
import { n as n$1 } from './HighlightGraphicContainer-d38de3d8.js';
import { t as t$1 } from './BitmapContainer-000ea42e.js';
import { s } from './Container-38939417.js';
import { i } from './Bitmap-04f84dc2.js';
import { S } from './ExportStrategy-a6f2b423.js';
import { m as m$1 } from './brushes-0ba66925.js';
import { I } from './Utils-0ee32720.js';
import { a } from './WGLContainer-c474bc93.js';
import { m as m$2 } from './ImageryLayerView-0e7432d9.js';
import { u as u$1 } from './LayerView-e26ca8f9.js';
import { i as i$1 } from './RefreshableLayerView-18d98912.js';
import './CIMSymbolHelper-6ee7aec0.js';
import './BidiEngine-d3dd902c.js';
import './enums-11126df6.js';
import './alignmentUtils-d4b065e2.js';
import './definitions-94cbc2bf.js';
import './number-7d0da80b.js';
import './GeometryUtils-10c98655.js';
import './FeatureContainer-b528cf81.js';
import './visualVariablesUtils-e83355ec.js';
import './visualVariablesUtils-3a3b1834.js';
import './TileContainer-d62dd38b.js';
import './utils-bc8fd4f8.js';
import './MaterialKey-7b48d630.js';
import './Matcher-1541592c.js';
import './tileUtils-2aab94aa.js';
import './TileClipper-42f55302.js';
import './Geometry-bc69b0c8.js';
import './GeometryUtils-0c093176.js';
import './cimAnalyzer-320e051b.js';
import './ExpandedCIM-aa105730.js';
import './schemaUtils-c67b468a.js';
import './createSymbolSchema-aa6ae1a4.js';
import './MD5-efff06bc.js';
import './util-301a8acd.js';
import './ComputedAttributeStorage-559bdb74.js';
import './centroid-3313e4f0.js';
import './GraphicsView-d48dcc3f.js';
import './EffectView-280fbeb4.js';
import './ProgramTemplate-fb419b93.js';
import './heatmapTextureUtils-0da3eb14.js';
import './StyleDefinition-8bdfb2b8.js';
import './popupUtils-c1e7b664.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let d=class extends f$1{constructor(){super(...arguments),this.attached=!1,this.container=new s,this.updateRequested=!1,this.type="imagery",this._bitmapView=new t$1;}destroy(){this.attached&&(this.detach(),this.attached=!1),this.updateRequested=!1;}get updating(){return !this.attached||this.isUpdating()}update(e){this.strategy.update(e).catch((e=>{j(e)||s$1.getLogger(this.declaredClass).error(e);}));}hitTest(e){return new g$2({attributes:{},geometry:e.clone(),layer:this.layer})}attach(){this.container.addChild(this._bitmapView);const e=this.layer.version>=10,t=this.layer.version>=10.1?this.layer.imageMaxHeight:2048,r=this.layer.version>=10.1?this.layer.imageMaxWidth:2048;this.strategy=new S({container:this._bitmapView,imageNormalizationSupported:e,imageMaxHeight:t,imageMaxWidth:r,fetchSource:this._fetchImage.bind(this),requestUpdate:()=>this.requestUpdate()});}detach(){this.strategy.destroy(),this._bitmapView.removeAllChildren(),this.container.removeAllChildren(),this.updateRequested=!1;}redraw(){this.strategy.updateExports((e=>{e.source instanceof HTMLImageElement?e.requestRender():this.layer.applyRenderer({pixelBlock:e.source.pixelBlock}).then((t=>{const r=e.source;r.pixelBlock=t.pixelBlock,r.filter=e=>this.layer.applyFilter(e),this.container.requestRender();}));}));}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate());}isUpdating(){return this.strategy.updating||this.updateRequested}getPixelData(){if(this.updating)return null;const e=this.strategy.bitmaps;if(1===e.length&&e[0].source)return {extent:e[0].source.extent,pixelBlock:e[0].source.originalPixelBlock};if(e.length>1){const t=this.view.extent,r$1=e.map((e=>e.source)).filter((e=>e.extent&&e.extent.intersects(t))).map((e=>({extent:e.extent,pixelBlock:e.originalPixelBlock}))),i=c(r$1,t);return r(i)?{extent:i.extent,pixelBlock:i.pixelBlock}:null}return null}_fetchImage(e,t,r,i$1){return (i$1=i$1||{}).timeExtent=this.timeExtent,i$1.requestAsImageElement=!0,this.layer.fetchImage(e,t,r,i$1).then((e=>e.imageElement?e.imageElement:this.layer.applyRenderer(e.pixelData,{signal:i$1.signal}).then((t=>{const r=new i(t.pixelBlock,t.extent.clone(),e.pixelData.pixelBlock);return r.filter=e=>this.layer.applyFilter(e),r}))))}};e([d$1()],d.prototype,"attached",void 0),e([d$1()],d.prototype,"container",void 0),e([d$1()],d.prototype,"layer",void 0),e([d$1()],d.prototype,"strategy",void 0),e([d$1()],d.prototype,"timeExtent",void 0),e([d$1()],d.prototype,"view",void 0),e([d$1()],d.prototype,"updateRequested",void 0),e([d$1()],d.prototype,"updating",null),e([d$1()],d.prototype,"type",void 0),d=e([n("esri.views.2d.layers.imagery.ImageryView2D")],d);const u=d;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class t extends a{constructor(){super(...arguments),this.symbolTypes=["triangle"];}get requiresDedicatedFBO(){return !1}prepareRenderPasses(s){const t=s.registerRenderPass({name:"imagery (vf)",brushes:[m$1],target:()=>this.children,drawPhase:I.MAP});return [...super.prepareRenderPasses(s),t]}doRender(e){this.visible&&e.drawPhase===I.MAP&&this.symbolTypes.forEach((r=>{e.renderPass=r,super.doRender(e);}));}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let p=class extends f$1{constructor(e){super(e),this.update=x(((e,t)=>this._update(e,t).catch((e=>{j(e)||s$1.getLogger(this.declaredClass).error(e);}))));}get updating(){return !!this._loading}redraw(e){if(!this.container.children.length)return;const t=this.container.children[0];t.symbolizerParameters=e,t.invalidateVAO(),this.container.symbolTypes="wind_speed"===e.style?["scalar","triangle"]:"simple_scalar"===e.style?["scalar"]:["triangle"],this.container.requestRender();}async _update(e,t,r){if(!e.stationary)return;const{extent:i,spatialReference:s}=e.state,o=new w({xmin:i.xmin,ymin:i.ymin,xmax:i.xmax,ymax:i.ymax,spatialReference:s}),[a,n]=e.state.size;this._loading=this.fetchPixels(o,a,n,r);const c=await this._loading;this._addToDisplay(c,t,e.state),this._loading=null;}_addToDisplay(e,t,r){if(t$2(e.pixelBlock))return this.container.children.forEach((e=>e.destroy())),void this.container.removeAllChildren();const{extent:s,pixelBlock:o}=e,a=new y(o);a.offset=[0,0],a.symbolizerParameters=t,a.rawPixelData=e,a.invalidateVAO(),a.x=s.xmin,a.y=s.ymax,a.pixelRatio=r.pixelRatio,a.rotation=r.rotation,a.resolution=r.resolution,a.width=o.width*t.symbolTileSize,a.height=o.height*t.symbolTileSize,this.container.children.forEach((e=>e.destroy())),this.container.removeAllChildren(),this.container.symbolTypes="wind_speed"===t.style?["scalar","triangle"]:"simple_scalar"===t.style?["scalar"]:["triangle"],this.container.addChild(a);}};e([d$1()],p.prototype,"fetchPixels",void 0),e([d$1()],p.prototype,"container",void 0),e([d$1()],p.prototype,"_loading",void 0),e([d$1()],p.prototype,"updating",null),p=e([n("esri.views.2d.layers.imagery.ImageryVFStrategy")],p);const m=p;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let f=class extends d$2{constructor(){super(...arguments),this.attached=!1,this.container=new t,this.type="imageryVF",this._dataParameters={exportParametersVersion:0,bbox:"",symbolTileSize:0,time:""},this._fetchpixels=async(e,t,r$1,i)=>{const n=await this._projectFullExtentPromise,{symbolTileSize:l}=this.layer.renderer,{extent:c,width:m,height:p}=g$3(e,t,r$1,l,n);if(r(n)&&!n.intersects(e))return {extent:c,pixelBlock:null};const h={bbox:`${c.xmin}, ${c.ymin}, ${c.xmax}, ${c.ymax}`,exportParametersVersion:this.layer.exportImageServiceParameters.version,symbolTileSize:l,time:JSON.stringify(this.timeExtent||"")};if(this._canReuseVectorFieldData(h)){const e=this.getPixelData();if(r(e)){if(`${e.extent.xmin}, ${e.extent.ymin}, ${e.extent.xmax}, ${e.extent.ymax}`===h.bbox)return e}}const{pixelData:u}=await this.layer.fetchImage(c,m,p,{timeExtent:this.timeExtent,requestAsImageElement:!1,signal:i});if(this._dataParameters=h,t$2(u.pixelBlock))return {extent:c,pixelBlock:null};return {extent:c,pixelBlock:"vector-uv"===this.layer.rasterInfo.dataType?e$1(d$3(u.pixelBlock,"vector-uv")):u.pixelBlock}};}get updating(){return !this.attached||this._strategy.updating}attach(){this._projectFullExtentPromise=this._getProjectedFullExtent(this.view.spatialReference),this._strategy=new m({container:this.container,fetchPixels:this._fetchpixels}),this.handles.add(l((()=>this.layer.renderer),(e=>this._updateSymbolizerParams(e)),w$1),"vector-field-view-update");}detach(){this._strategy.destroy(),this.container.children.forEach((e=>e.destroy())),this.container.removeAllChildren(),this.handles.remove("vector-field-view-update"),this._strategy=this.container=this._projectFullExtentPromise=null;}getPixelData(){if(this.updating||!this.container.children.length)return null;const{extent:e,pixelBlock:t}=this.container.children[0].rawPixelData;return {extent:e,pixelBlock:t}}hitTest(e){return new g$2({attributes:{},geometry:e.clone(),layer:this.layer})}update(e){this._strategy.update(e,this._symbolizerParams);}redraw(){this._updateSymbolizerParams(this.layer.renderer),this._strategy.redraw(this._symbolizerParams);}_canReuseVectorFieldData(e){const t=this._dataParameters.exportParametersVersion===e.exportParametersVersion,r=this._dataParameters.time===e.time,i=this._dataParameters.symbolTileSize===e.symbolTileSize,s=this._dataParameters.bbox===e.bbox;return t&&r&&i&&s}async _getProjectedFullExtent(e){try{return await F(this.layer.fullExtent,e)}catch(t){try{const t=(await L(this.layer.url,{query:{option:"footprints",outSR:e.wkid||JSON.stringify(e.toJSON()),f:"json"}})).data.featureCollection.layers[0].layerDefinition.extent;return t?w.fromJSON(t):null}catch{return null}}}_updateSymbolizerParams(e){"vector-field"===e.type&&(this._symbolizerParams=this.layer.symbolizer.generateWebGLParameters({pixelBlock:null}));}};e([d$1()],f.prototype,"attached",void 0),e([d$1()],f.prototype,"container",void 0),e([d$1()],f.prototype,"layer",void 0),e([d$1()],f.prototype,"timeExtent",void 0),e([d$1()],f.prototype,"type",void 0),e([d$1()],f.prototype,"view",void 0),e([d$1()],f.prototype,"updating",null),f=e([n("esri.views.2d.layers.imagery.VectorFieldView2D")],f);const g$1=f;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let g=class extends(m$2(i$1(f$2(u$1)))){constructor(){super(...arguments),this._exportImageVersion=-1,this._highlightGraphics=new i$2,this.subview=null;}get pixelData(){return this.updating?null:"getPixelData"in this.subview?this.subview.getPixelData():null}get updating(){return !!(!this.subview||"updating"in this.subview&&this.subview.updating)}async hitTest(e,i){return this.subview?[{type:"graphic",graphic:this.subview.hitTest(e),layer:this.layer,mapPoint:e}]:null}update(e){this.subview?.update(e);}attach(){this.layer.increaseRasterJobHandlerUsage(),this._setSubView(),this.view&&(this._highlightView=new oe({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new n$1(this.view.featuresTilingScheme)}),this.container.addChild(this._highlightView.container)),this.handles.add([l((()=>this.layer.blendMode??"normal"),(e=>this.subview.container.blendMode=e),w$1),l((()=>this.layer.effect??null),(e=>this.subview.container.effect=e),w$1),l((()=>this.layer.exportImageServiceParameters.version),(e=>{e&&this._exportImageVersion!==e&&(this._exportImageVersion=e,this.requestUpdate());}),U),l((()=>this.timeExtent),(e=>{this.subview.timeExtent=e,"redraw"in this.subview?this.requestUpdate():this.subview.redrawOrRefetch();}),U),this.layer.on("redraw",(()=>{"redraw"in this.subview?this.subview.redraw():this.subview.redrawOrRefetch();})),l((()=>this.layer.renderer),(()=>this._setSubView()))],"imagerylayerview-update");}detach(){this.layer.decreaseRasterJobHandlerUsage(),this.container.removeAllChildren(),this._detachSubview(this.subview),this.subview?.destroy(),this.handles.remove("imagerylayerview-update"),this.subview=null,this._highlightView?.destroy(),this._exportImageVersion=-1;}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}highlight(e,r){if(!((Array.isArray(e)?e[0]:j$1.isCollection(e)?e.getItemAt(0):e)instanceof g$2))return {remove:()=>{}};let s=[];return Array.isArray(e)||j$1.isCollection(e)?s=e.map((e=>e.clone())):e instanceof g$2&&(s=[e.clone()]),this._highlightGraphics.addMany(s),{remove:()=>{this._highlightGraphics.removeMany(s);}}}async doRefresh(){this.requestUpdate();}isUpdating(){return !this.subview||this.subview.updating}_setSubView(){if(!this.view)return;const e=this.layer.renderer?.type;let i="imagery";if("vector-field"===e?i="imageryVF":"flow"===e&&(i="flow"),this.subview){if(this.subview.type===i)return this._attachSubview(this.subview),void("flow"===this.subview.type&&this.subview.redrawOrRefetch());this._detachSubview(this.subview),this.subview?.destroy();}this.subview="imagery"===i?new u({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):"imageryVF"===i?new g$1({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):new d$4({layer:this.layer,layerView:this}),this._attachSubview(this.subview),this.requestUpdate();}_attachSubview(e){e&&!e.attached&&(e.attach(),e.attached=!0,this.container.addChildAt(e.container,0),e.container.blendMode=this.layer.blendMode,e.container.effect=this.layer.effect);}_detachSubview(e){e?.attached&&(this.container.removeChild(e.container),e.detach(),e.attached=!1);}};e([d$1()],g.prototype,"pixelData",null),e([d$1({readOnly:!0})],g.prototype,"updating",null),e([d$1()],g.prototype,"subview",void 0),g=e([n("esri.views.2d.layers.ImageryLayerView2D")],g);const b=g;

export { b as default };
