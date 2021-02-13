import { q as e, y as y$2, d1 as m$2, r as i, bK as O, h as s, a as u, d0 as R, ah as w$1, i as i$1, du as u$1, dg as F, bZ as z, dl as q, T, U, ab as e$1, cy as n, dv as r$1, cP as i$2, a2 as d$2, dw as h$1 } from './index.js';
import { l, p } from './LayerView2D-bc0b7363.js';
import { d as d$1 } from './popupUtils-8c43b43d.js';
import { r } from './Container-b610f49b.js';
import { Q } from './GraphicsView2D-739ec37b.js';
import { p as p$1 } from './pixelUtils-00ff4a96.js';
import { h } from './Bitmap-c2d170a2.js';
import { t } from './BitmapContainer-7af2ce87.js';
import { w as w$2 } from './ExportStrategy-7258820c.js';
import './mat4f32-a4d1c0af.js';
import './_commonjsHelpers-34398bae.js';
import './quantizationUtils-27b2b015.js';
import './json-dc26b8a4.js';
import './quickselect-1f1691b9.js';
import './shapingUtils-030142c7.js';
import './BidiEngine-e6ac532e.js';
import './MD5-5f4e3a98.js';
import './Utils-f727cc5b.js';
import './RenderingContext-2178848d.js';
import './MaterialKey-9ff1409e.js';
import './visualVariablesUtils-46671f25.js';
import './Rect-49fd2d8c.js';
import './WGLMeshFactory-eb9dd34a.js';
import './VertexBuffer-c11864c0.js';
import './CircularArray-e5e35a7a.js';
import './TurboLine-22f8472d.js';
import './GeometryUtils-83dd86c8.js';
import './FeatureContainer-ba87c508.js';
import './TileContainer-ba62d40b.js';
import './WGLContainer-2372d076.js';
import './VertexArrayObject-5fd24fda.js';
import './ShaderCompiler-96f9028e.js';
import './earcut-54ba3d1d.js';
import './ComputedAttributeStorage-fa22d8a9.js';
import './FeatureSetReader-b8bac4a7.js';
import './centroid-6105d00e.js';
import './graphicsUtils-df24495c.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const m=m=>{let c=class extends m{constructor(){super(...arguments),this.view=null;}async fetchPopupFeatures(e,o){const{layer:t}=this;if(!e)return O(new s("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:t}));const{popupEnabled:a}=t,m=d$1(t,o);if(!a||!u(m))throw new s("imagerylayerview:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:a,popupTemplate:m});const c=await m.getRequiredFields(),l=new R;l.geometry=e,l.outFields=c,l.outSpatialReference=e.spatialReference;const y=this.view.resolution,d="2d"===this.view.type?new w$1(y,y,this.view.spatialReference):new w$1(.5*y,.5*y,this.view.spatialReference),{returnTopmostRaster:w,showNoDataRecords:f}=m.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1},h={returnDomainValues:!0,returnTopmostRaster:w,pixelSize:d,showNoDataRecords:f};return t.queryVisibleRasters(l,h).then((e=>e))}canResume(){var e;return !!super.canResume()&&(null==(e=this.timeExtent)||!e.isEmpty)}};return e([y$2()],c.prototype,"layer",void 0),e([y$2({dependsOn:["timeExtent"]})],c.prototype,"suspended",void 0),e([y$2(m$2)],c.prototype,"timeExtent",void 0),e([y$2()],c.prototype,"view",void 0),c=e([i("esri.views.layers.ImageryLayerView")],c),c};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const y=i$1.getLogger("esri.views.2d.layers.imagery.ImageryGraphicsView2D");let w=class extends(l(p)){constructor(){super(...arguments),this.container=new r,this._graphicsView=null,this.type="Graphics",this._graphics=new u$1,this._updateGraphics=F((async(e,t)=>{if(!e.stationary)return;const i=e.state,r=new z({xmin:i.extent.xmin,ymin:i.extent.ymin,xmax:i.extent.xmax,ymax:i.extent.ymax,spatialReference:i.spatialReference}),s=e.state.size[0],a=e.state.size[1],o={};o.timeExtent=this.timeExtent,o.requestAsImageElement=!1,o.signal=t;const n=this._getVectorFieldExportParams({extent:r,width:s,height:a}),c=await this.layer.fetchImage(n.extent,n.width,n.height,o),l=this.layer.renderer;if("vector-field"===l.type){this._pixelData={extent:n.extent,pixelBlock:c.pixelData.pixelBlock};const t=await l.getGraphicsFromPixelData(c.pixelData,"vector-uv"===this.layer.rasterInfo.dataType);this._graphicsView.update(e),await q(0).then((()=>{this._graphics.set("items",t);}));}}));}get updating(){var e;return null==(e=this._graphicsView)?void 0:e.updating}update(e){this._updateGraphics(e).catch((e=>{T(e)||y.error(e);}));}hitTest(e,t){if(this.suspended)return U(null);const i=this.view.toMap(e$1(e,t));return U(new n({attributes:{},geometry:i,layer:this.layer}))}attach(){this._graphicsView=new Q({view:this.view,graphics:this._graphics,requestUpdateCallback:()=>this.requestUpdate()});}detach(){this._graphics.destroy(),this._graphicsView.destroy(),this.container.removeChild(this._graphicsView.container),this._graphicsView=null;}moveStart(){}viewChange(){}moveEnd(){}install(e){this.container.addChild(this._graphicsView.container),e.addChild(this.container);}uninstall(e){this.container.removeChild(this._graphicsView.container),e.removeChild(this.container);}isUpdating(){return this._graphicsView.updating||this.updateRequested}getPixelData(){return this.updating?null:this._pixelData}redraw(){}_getVectorFieldExportParams(e){var t,i;let{extent:r,width:s,height:a}=e;const o=this.layer,n=null==(t=o.fullExtent)?void 0:t.xmin,p=null==(i=o.fullExtent)?void 0:i.ymax;let h;"vector-field"===o.renderer.type&&(h=o.renderer.symbolTileSize),h=Math.max(h||0,30),s=Math.ceil(s*(1/h)),a=Math.ceil(a*(1/h));const c=(r.xmax-r.xmin)/s,l=(r.ymax-r.ymin)/a;return r.xmin=n+Math.floor((r.xmin-n)/c)*c,r.xmax=n+Math.ceil((r.xmax-n)/c)*c,r.ymin=p+Math.floor((r.ymin-p)/l)*l,r.ymax=p+Math.ceil((r.ymax-p)/l)*l,{extent:r,width:s,height:a}}};e([y$2()],w.prototype,"container",void 0),e([y$2()],w.prototype,"layer",void 0),e([y$2()],w.prototype,"timeExtent",void 0),e([y$2({dependsOn:["_graphicsView.updating"]})],w.prototype,"updating",null),e([y$2()],w.prototype,"_graphicsView",void 0),e([r$1({graphics:"Graphics"})],w.prototype,"type",void 0),w=e([i("esri.views.2d.layers.imagery.ImageryGraphicsView2D")],w);var f=w;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const y$1=i$1.getLogger("esri.views.2d.layers.imagery.ImageryView2D");let x=class extends(l(p)){constructor(){super(...arguments),this.container=new r,this.type="Imagery",this._bitmapView=null;}get updating(){var e;return null==(e=this.strategy)?void 0:e.updating}update(e){this.strategy.update(e).catch((e=>{T(e)||y$1.error(e);}));}detach(){this.strategy.destroy(),this._bitmapView.removeAllChildren(),this.container.removeAllChildren();}hitTest(e,t){if(this.suspended)return U(null);const r=this.view.toMap(e$1(e,t));return U(new n({attributes:{},geometry:r,layer:this.layer}))}attach(){const e=this.layer.version>=10,t$1=this.layer.version>=10.1?this.layer.imageMaxHeight:2048,r=this.layer.version>=10.1?this.layer.imageMaxWidth:2048;this._bitmapView=new t,this.strategy=new w$2({container:this._bitmapView,imageNormalizationSupported:e,imageMaxHeight:t$1,imageMaxWidth:r,fetchSource:this._fetchImage.bind(this),requestUpdate:()=>this.requestUpdate()});}moveStart(){}viewChange(){}moveEnd(){}install(e){this.container.addChild(this._bitmapView),e.addChild(this.container);}uninstall(e){this.container.removeChild(this._bitmapView),e.removeChild(this.container);}redraw(){this.strategy.updateExports((e=>{e.source instanceof HTMLImageElement?e.requestRender():this.layer.applyRenderer({pixelBlock:e.source.pixelBlock}).then((t=>{const r=e.source;r.pixelBlock=t.pixelBlock,r.filter=e=>this.layer.applyFilter(e),this.container.requestRender();}));}));}isUpdating(){return this.strategy.updating||this.updateRequested}getPixelData(){if(this.updating)return null;const e=this.strategy.container.children;if(1===e.length&&e[0].source)return {extent:e[0].source.extent,pixelBlock:e[0].source.originalPixelBlock};if(e.length>1){const t=this.view.extent,r=e.map((e=>e.source)).filter((e=>e.extent&&e.extent.intersects(t))).map((e=>({extent:e.extent,pixelBlock:e.originalPixelBlock}))),i=p$1(r,t);return i?{extent:i.extent,pixelBlock:i.pixelBlock}:null}return null}_fetchImage(e,t,r,i){return (i=i||{}).timeExtent=this.timeExtent,i.requestAsImageElement=!0,this.layer.fetchImage(e,t,r,i).then((e=>e.imageElement?e.imageElement:this.layer.applyRenderer(e.pixelData,{signal:i.signal}).then((t=>{const r=new h(t.pixelBlock,t.extent.clone(),e.pixelData.pixelBlock);return r.filter=e=>this.layer.applyFilter(e),r}))))}};e([y$2()],x.prototype,"container",void 0),e([y$2()],x.prototype,"layer",void 0),e([y$2()],x.prototype,"strategy",void 0),e([y$2()],x.prototype,"timeExtent",void 0),e([y$2({dependsOn:["strategy.updating"]})],x.prototype,"updating",null),e([r$1({imagery:"Imagery"})],x.prototype,"type",void 0),x=e([i("esri.views.2d.layers.imagery.ImageryView2D")],x);var f$1=x;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
let m$1=class extends(m(i$2(l(p)))){constructor(){super(...arguments),this._exportImageVersion=-1;}get pixelData(){return this.updating?null:this.subview.getPixelData()}get updating(){return !(this.subview&&!this.subview.updating)}hitTest(e,t){return this.suspended||!this.subview?U(null):this.subview.hitTest(e,t)}update(e){var t;null==(t=this.subview)||t.update(e);}attach(){this.layer.increaseRasterJobHandlerUsage(),this._setSubView(),this.handles.add([d$2(this,"layer.exportImageServiceParameters.version",(e=>{this._exportImageVersion!==e&&(this._exportImageVersion=e,this.requestUpdate());})),this.watch("timeExtent",(()=>{this.subview.timeExtent=this.timeExtent,this.requestUpdate();})),this.layer.on("redraw",(()=>this.subview.redraw())),h$1(this.layer,"renderer",(()=>this._setSubView()))],"imagerylayerview-update");}detach(){this.layer.decreaseRasterJobHandlerUsage(),this.subview.destroy(),this.handles.remove("imagerylayerview-update"),this._exportImageVersion=-1;}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}async doRefresh(){this.requestUpdate();}isUpdating(){return !this.subview||this.subview.isUpdating()}_setSubView(){var e;let t="Imagery";var s,r;("vector-field"===(null==(e=this.layer.renderer)?void 0:e.type)&&"lerc"===this.layer.format&&(t="Graphics"),this.subview&&this.subview.type===t)||(null==(s=this.subview)||s.uninstall(this.container),null==(r=this.subview)||r.destroy(),this.subview="Imagery"===t?new f$1({layer:this.layer,view:this.view}):new f({layer:this.layer,view:this.view}),this.subview.attach(),this.subview.install(this.container));this.requestUpdate();}};e([y$2({dependsOn:["updating"]})],m$1.prototype,"pixelData",null),e([y$2({readOnly:!0,dependsOn:["subview.updating"]})],m$1.prototype,"updating",null),e([y$2()],m$1.prototype,"subview",void 0),m$1=e([i("esri.views.2d.layers.ImageryLayerView2D")],m$1);var d=m$1;

export default d;
