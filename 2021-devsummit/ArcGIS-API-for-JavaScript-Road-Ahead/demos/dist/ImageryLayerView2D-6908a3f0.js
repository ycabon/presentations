import { j as e, y as y$1, dd as w$1, k as i, s, r, cF as R, a3 as j, n as n$1, dD as r$1, g as u$1, dE as m, ds as q, bz as M, w as g$1, Y as c, c8 as n$2, U, d0 as i$2, N as d$2, dF as h } from './_virtual_index-634cbc09.js';
import { l, d as d$3 } from './LayerView2D-9976179f.js';
import { d as d$1 } from './popupUtils-88c6ff22.js';
import { p as p$1 } from './vectorFieldUtils-00769f9f.js';
import { b } from './rasterProjectionHelper-a9b05e73.js';
import { r as r$2 } from './Container-87e93059.js';
import { e as et } from './BaseGraphicContainer-2d3f7320.js';
import { i as i$1 } from './GraphicContainer-c6966ce5.js';
import { p as p$2 } from './pixelUtils-da068947.js';
import { e as e$1 } from './Bitmap-0d3f5308.js';
import { t } from './BitmapContainer-aeb67527.js';
import { S } from './ExportStrategy-0e214a21.js';
import './mat4f32-8dd9e37a.js';
import './_commonjsHelpers-3f70742c.js';
import './definitions-12783a0f.js';
import './schemaUtils-35ff841b.js';
import './MD5-a554c7d9.js';
import './Utils-3e0360c1.js';
import './FramebufferObject-553bb493.js';
import './MaterialKey-202e82ff.js';
import './visualVariablesUtils-07a6daab.js';
import './Rect-a3838111.js';
import './BidiEngine-fb789855.js';
import './WGLMeshFactory-eed1b518.js';
import './ComputedAttributeStorage-ba368d24.js';
import './quickselect-eae177f3.js';
import './FeatureSetReader-261c974c.js';
import './centroid-395619b0.js';
import './visualVariablesUtils-de638f89.js';
import './tileUtils-5cb6bf04.js';
import './TurboLine-6581f402.js';
import './GeometryUtils-58fe63b9.js';
import './quantizationUtils-3c89c245.js';
import './FeatureContainer-0b3bbe85.js';
import './TileContainer-243d7e79.js';
import './WGLContainer-9f4143c6.js';
import './vec4f32-1b47f233.js';
import './ShaderCompiler-5b134693.js';
import './Program-83739cf0.js';
import './earcut-cd592b7a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const n=n=>{let c=class extends n{constructor(){super(...arguments),this.view=null;}async fetchPopupFeatures(e,o){const{layer:t}=this;if(!e)throw new s("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:t});const{popupEnabled:i}=t,n=d$1(t,o);if(!i||!r(n))throw new s("imagerylayerview:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:i,popupTemplate:n});const c=await n.getRequiredFields(),m=new R;m.geometry=e,m.outFields=c,m.outSpatialReference=e.spatialReference;const l=this.view.resolution,y="2d"===this.view.type?new j(l,l,this.view.spatialReference):new j(.5*l,.5*l,this.view.spatialReference),{returnTopmostRaster:d,showNoDataRecords:w}=n.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1},h={returnDomainValues:!0,returnTopmostRaster:d,pixelSize:y,showNoDataRecords:w};return t.queryVisibleRasters(m,h).then((e=>e))}canResume(){var e;return !!super.canResume()&&(null==(e=this.timeExtent)||!e.isEmpty)}};return e([y$1()],c.prototype,"layer",void 0),e([y$1()],c.prototype,"suspended",void 0),e([y$1(w$1)],c.prototype,"timeExtent",void 0),e([y$1()],c.prototype,"view",void 0),c=e([i("esri.views.layers.ImageryLayerView")],c),c};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const v=n$1.getLogger("esri.views.2d.layers.imagery.ImageryGraphicsView2D");let _=class extends u$1{constructor(){super(...arguments),this.attached=!1,this.container=new r$2,this.updateRequested=!1,this._graphicsView=null,this._projectFullExtentPromise=null,this._previousExtents=[],this._previousSymbolTileResolution=0,this._previousRendererSignature="",this.type="Graphics",this._graphics=new m,this._updateGraphics=q((async(e,r$1)=>{if(!e.stationary)return;const i=e.state,s=new M({xmin:i.extent.xmin,ymin:i.extent.ymin,xmax:i.extent.xmax,ymax:i.extent.ymax,spatialReference:i.spatialReference}),[o,a]=e.state.size,n={};n.timeExtent=this.timeExtent,n.requestAsImageElement=!1,n.signal=r$1,null==this._projectFullExtentPromise&&(this._projectFullExtentPromise=this._getProjectedFullExtent(s.spatialReference));const p="vector-field"===this.layer.renderer.type?this.layer.renderer.symbolTileSize:50,c=await this._projectFullExtentPromise,{extent:l,resolution:u,width:d,height:y}=p$1(s,o,a,p,c),g=await this.layer.fetchImage(l,d,y,n),x=this.layer.renderer;if("vector-field"===x.type){this._pixelData={extent:l,pixelBlock:g.pixelData.pixelBlock};const r$1=JSON.stringify(this.layer.renderer),i=this._previousRendererSignature===r$1,s=Math.abs(this._previousSymbolTileResolution-u)/u<.01,o=l.clone().normalize(),a=this._previousExtents.some((e=>o.some((t=>e.intersects(t))))),n=i&&s&&a?this._previousExtents:[],p=await x.getGraphicsFromPixelData(g.pixelData,"vector-uv"===this.layer.rasterInfo.dataType,n);if(n.length){const e=this._graphics.items.filter((e=>r(e.geometry)&&n.some((t=>t.intersects(e.geometry)))&&!o.some((t=>t.intersects(e.geometry)))));this._graphics.removeMany(e),this._graphics.addMany(p);}else this._graphics.set("items",p);this._graphicsView.update(e),this._previousExtents=o,this._previousRendererSignature=r$1,this._previousSymbolTileResolution=u;}}));}destroy(){this.attached&&(this.detach(),this.attached=!1),this.updateRequested=!1;}get updating(){return !this.attached||this.isUpdating()}update(e){this._updateGraphics(e).catch((e=>{g$1(e)||v.error(e);}));}hitTest(e,t){const r=this.view.toMap(c(e,t));return Promise.resolve(new n$2({attributes:{},geometry:r,layer:this.layer}))}attach(){this._graphicsView=new et({view:this.view,graphics:this._graphics,requestUpdateCallback:()=>this.requestUpdate(),container:new i$1(this.view.featuresTilingScheme)}),this.attached=!0;}detach(){this._graphics.destroy(),this._graphicsView.destroy(),this.container.removeChild(this._graphicsView.container),this._graphicsView=null;}moveStart(){}viewChange(){}moveEnd(){}install(e){this.container.addChild(this._graphicsView.container),e.addChild(this.container);}uninstall(e){this.container.removeChild(this._graphicsView.container),e.removeChild(this.container);}isUpdating(){return this._graphicsView.updating||this.updateRequested}getPixelData(){return this.updating?null:this._pixelData}redraw(){}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate());}async _getProjectedFullExtent(e){try{return await b(this.layer.fullExtent,e)}catch(t){try{const t=(await U(this.layer.url,{query:{option:"footprints",outSR:e.wkid||JSON.stringify(e.toJSON()),f:"json"}})).data.featureCollection.layers[0].layerDefinition.extent;return t?M.fromJSON(t):null}catch{return null}}}};e([y$1()],_.prototype,"attached",void 0),e([y$1()],_.prototype,"container",void 0),e([y$1()],_.prototype,"layer",void 0),e([y$1()],_.prototype,"timeExtent",void 0),e([y$1()],_.prototype,"view",void 0),e([y$1()],_.prototype,"updateRequested",void 0),e([y$1()],_.prototype,"updating",null),e([r$1({graphics:"Graphics"})],_.prototype,"type",void 0),_=e([i("esri.views.2d.layers.imagery.ImageryGraphicsView2D")],_);var w=_;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const u=n$1.getLogger("esri.views.2d.layers.imagery.ImageryView2D");let g=class extends u$1{constructor(){super(...arguments),this.attached=!1,this.container=new r$2,this.updateRequested=!1,this.type="Imagery",this._bitmapView=null;}destroy(){this.attached&&(this.detach(),this.attached=!1),this.updateRequested=!1;}get updating(){return !this.attached||this.isUpdating()}update(e){this.strategy.update(e).catch((e=>{g$1(e)||u.error(e);}));}detach(){this.strategy.destroy(),this._bitmapView.removeAllChildren(),this.container.removeAllChildren();}hitTest(e,t){const r=this.view.toMap(c(e,t));return Promise.resolve(new n$2({attributes:{},geometry:r,layer:this.layer}))}attach(){const e=this.layer.version>=10,t$1=this.layer.version>=10.1?this.layer.imageMaxHeight:2048,r=this.layer.version>=10.1?this.layer.imageMaxWidth:2048;this._bitmapView=new t,this.strategy=new S({container:this._bitmapView,imageNormalizationSupported:e,imageMaxHeight:t$1,imageMaxWidth:r,fetchSource:this._fetchImage.bind(this),requestUpdate:()=>this.requestUpdate()}),this.attached=!0;}moveStart(){}viewChange(){}moveEnd(){}install(e){this.container.addChild(this._bitmapView),e.addChild(this.container);}uninstall(e){this.container.removeChild(this._bitmapView),e.removeChild(this.container);}redraw(){this.strategy.updateExports((e=>{e.source instanceof HTMLImageElement?e.requestRender():this.layer.applyRenderer({pixelBlock:e.source.pixelBlock}).then((t=>{const r=e.source;r.pixelBlock=t.pixelBlock,r.filter=e=>this.layer.applyFilter(e),this.container.requestRender();}));}));}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate());}isUpdating(){return this.strategy.updating||this.updateRequested}getPixelData(){if(this.updating)return null;const e=this.strategy.container.children;if(1===e.length&&e[0].source)return {extent:e[0].source.extent,pixelBlock:e[0].source.originalPixelBlock};if(e.length>1){const t=this.view.extent,r=e.map((e=>e.source)).filter((e=>e.extent&&e.extent.intersects(t))).map((e=>({extent:e.extent,pixelBlock:e.originalPixelBlock}))),i=p$2(r,t);return i?{extent:i.extent,pixelBlock:i.pixelBlock}:null}return null}_fetchImage(e,t,r,i){return (i=i||{}).timeExtent=this.timeExtent,i.requestAsImageElement=!0,this.layer.fetchImage(e,t,r,i).then((e=>e.imageElement?e.imageElement:this.layer.applyRenderer(e.pixelData,{signal:i.signal}).then((t=>{const r=new e$1(t.pixelBlock,t.extent.clone(),e.pixelData.pixelBlock);return r.filter=e=>this.layer.applyFilter(e),r}))))}};e([y$1()],g.prototype,"attached",void 0),e([y$1()],g.prototype,"container",void 0),e([y$1()],g.prototype,"layer",void 0),e([y$1()],g.prototype,"strategy",void 0),e([y$1()],g.prototype,"timeExtent",void 0),e([y$1()],g.prototype,"view",void 0),e([y$1()],g.prototype,"updateRequested",void 0),e([y$1()],g.prototype,"updating",null),e([r$1({imagery:"Imagery"})],g.prototype,"type",void 0),g=e([i("esri.views.2d.layers.imagery.ImageryView2D")],g);var y=g;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let p=class extends(n(i$2(l(d$3)))){constructor(){super(...arguments),this._exportImageVersion=-1;}initialize(){this.handles.add(d$2(this,["layer.blendMode"],(e=>{this.subview&&(this.subview.container.blendMode=e);}),!0));}get pixelData(){return this.updating?null:this.subview.getPixelData()}get updating(){return !(this.subview&&!this.subview.updating)}hitTest(e,t){return this.suspended||!this.subview?Promise.resolve(null):this.subview.hitTest(e,t)}update(e){var t;null==(t=this.subview)||t.update(e);}attach(){this.layer.increaseRasterJobHandlerUsage(),this._setSubView(),this.handles.add([d$2(this,"layer.exportImageServiceParameters.version",(e=>{this._exportImageVersion!==e&&(this._exportImageVersion=e,this.requestUpdate());})),this.watch("timeExtent",(()=>{this.subview.timeExtent=this.timeExtent,this.requestUpdate();})),this.layer.on("redraw",(()=>this.subview.redraw())),h(this.layer,"renderer",(()=>this._setSubView()))],"imagerylayerview-update");}detach(){this.layer.decreaseRasterJobHandlerUsage(),this.subview.destroy(),this.handles.remove("imagerylayerview-update"),this._exportImageVersion=-1;}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}async doRefresh(){this.requestUpdate();}isUpdating(){return !this.subview||!this.suspended&&this.subview.isUpdating()}_setSubView(){var e;let t="Imagery";var s,i;("vector-field"===(null==(e=this.layer.renderer)?void 0:e.type)&&"lerc"===this.layer.format&&(t="Graphics"),this.subview&&this.subview.type===t)||(null==(s=this.subview)||s.uninstall(this.container),null==(i=this.subview)||i.destroy(),this.subview="Imagery"===t?new y({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):new w({layer:this.layer,view:this.view,timeExtent:this.timeExtent}),this.subview.attach(),this.subview.install(this.container),this.subview.container.blendMode=this.layer.blendMode);this.requestUpdate();}};e([y$1()],p.prototype,"pixelData",null),e([y$1({readOnly:!0})],p.prototype,"updating",null),e([y$1()],p.prototype,"subview",void 0),p=e([i("esri.views.2d.layers.ImageryLayerView2D")],p);var d=p;

export default d;
