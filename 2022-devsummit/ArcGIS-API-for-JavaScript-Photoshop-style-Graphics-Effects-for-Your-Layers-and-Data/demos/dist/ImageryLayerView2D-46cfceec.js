import { e as s, ac as e, ad as d$1, dc as r, ae as i, aa as p$1, ir as c, cX as q, c_ as M, is as m, h as r$1, q as g$1, cV as h, C, it as d$2, i9 as g$2, s as s$2, gI as b, am as j$1, W as i$4, iu as f$1 } from './_virtual_index-3ad07138.js';
import { p as p$2 } from './AnimatedFlowView2D-1e262006.js';
import { l, u as u$2 } from './LayerView-ccf9971d.js';
import { j } from './rasterProjectionHelper-d0fdf478.js';
import { s as s$1 } from './Container-0ea8b7c2.js';
import { i as i$1 } from './GraphicContainer-f108ffc8.js';
import { i as it } from './BaseGraphicContainer-e75c5940.js';
import { t } from './BitmapContainer-b9d43000.js';
import { i as i$2 } from './Bitmap-6fb4c9a4.js';
import { S } from './ExportStrategy-cc87358e.js';
import { d as d$3 } from './popupUtils-9bd5eacf.js';
import { i as i$3 } from './RefreshableLayerView-cd718d73.js';
import './WGLContainer-bec6b82e.js';
import './VertexArrayObject-3beb5624.js';
import './Texture-970325f3.js';
import './Utils-ba2d87f4.js';
import './ShaderCompiler-9e67e52b.js';
import './config-3e6df72b.js';
import './GeometryUtils-8e9bb139.js';
import './MaterialKey-8a7bcdbb.js';
import './earcut-211aa720.js';
import './CIMSymbolHelper-62ceca89.js';
import './BidiEngine-1d3a0a6d.js';
import './projectionSupport-f3b66f92.js';
import './json-2bf9d675.js';
import './FeatureContainer-c3691c35.js';
import './TileContainer-d98cb7c6.js';
import './visualVariablesUtils-c0918cfa.js';
import './visualVariablesUtils-b2bf8e17.js';
import './Matcher-f07858c6.js';
import './tileUtils-84582c2d.js';
import './TileClipper-f06c223a.js';
import './cimSymbolUtils-12bccbc7.js';
import './quantizationUtils-cc435f69.js';
import './devEnvironmentUtils-a78265ea.js';
import './schemaUtils-05c05689.js';
import './MD5-a16a7511.js';
import './util-af29771e.js';
import './ComputedAttributeStorage-64438d2c.js';
import './FeatureSetReader-25593c0a.js';
import './centroid-3bf097a6.js';
import './vec3f32-c4a8e2ae.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const f=s.getLogger("esri.views.2d.layers.imagery.ImageryGraphicsView2D");let _=class extends p$1{constructor(){super(...arguments),this.attached=!1,this.container=new s$1,this.updateRequested=!1,this._graphicsView=null,this._projectFullExtentPromise=null,this._dataParameters={exportParametersVersion:0,extents:[],tileResolution:0,time:"",isOceanStyle:!1,isOceanographic:!1},this.type="Graphics",this._graphics=new c,this._updateGraphics=q((async(e,t)=>{if(!e.stationary)return;const r=e.state,i=new M({xmin:r.extent.xmin,ymin:r.extent.ymin,xmax:r.extent.xmax,ymax:r.extent.ymax,spatialReference:r.spatialReference}),[s,o]=e.state.size,n={};n.timeExtent=this.timeExtent,n.requestAsImageElement=!1,n.signal=t,null==this._projectFullExtentPromise&&(this._projectFullExtentPromise=this._getProjectedFullExtent(i.spatialReference));const c="vector-field"===this.layer.renderer.type?this.layer.renderer.symbolTileSize:50,p=await this._projectFullExtentPromise,{extent:h,resolution:m$1,width:d,height:y}=m(i,s,o,c,p),g=await this.layer.fetchImage(h,d,y,n),x=this.layer.renderer;if("vector-field"===x.type){const t=g.pixelData.pixelBlock,r=x.sizeVariables[0];!r$1(t)||r.minDataValue&&r.maxDataValue||(r.minDataValue=t.statistics[0].minValue,r.maxDataValue=t.statistics[0].maxValue),this._pixelData={extent:h,pixelBlock:t};const i=h.clone().normalize(),s={exportParametersVersion:this.layer.exportImageServiceParameters.version,extents:i,tileResolution:m$1,time:JSON.stringify(this.timeExtent||""),isOceanStyle:"flow-to"===x.flowRepresentation,isOceanographic:"ocean-current-kn"===x.style||"ocean-current-m"===x.style},o=this._canReuseVectorFieldData(s)?this._dataParameters.extents:[],n=await x.getGraphicsFromPixelData(g.pixelData,"vector-uv"===this.layer.rasterInfo.dataType,o);if(o.length){const e=this._graphics.items.filter((e=>r$1(e.geometry)&&o.some((t=>t.intersects(e.geometry)))&&!i.some((t=>t.intersects(e.geometry)))));this._graphics.removeMany(e),this._graphics.addMany(n);}else this._graphics.set("items",n);this._graphicsView.update(e),this._dataParameters=s;}}));}destroy(){this.attached&&(this.detach(),this.attached=!1),this.updateRequested=!1;}get updating(){return !this.attached||this.isUpdating()}update(e){this._updateGraphics(e).catch((e=>{g$1(e)||f.error(e);}));}hitTest(e){return new h({attributes:{},geometry:e.clone(),layer:this.layer})}attach(){this._graphicsView=new it({view:this.view,graphics:this._graphics,requestUpdateCallback:()=>this.requestUpdate(),container:new i$1(this.view.featuresTilingScheme)}),this.attached=!0;}detach(){this._graphics.destroy(),this._graphicsView.destroy(),this.container.removeChild(this._graphicsView.container),this._graphicsView=null;}install(e){this.container.addChild(this._graphicsView.container),e.addChild(this.container);}uninstall(e){this.container.removeChild(this._graphicsView.container),e.removeChild(this.container);}isUpdating(){return this._graphicsView.updating||this.updateRequested}getPixelData(){return this.updating?null:this._pixelData}redraw(){}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate());}async _getProjectedFullExtent(e){try{return await j(this.layer.fullExtent,e)}catch(t){try{const t=(await C(this.layer.url,{query:{option:"footprints",outSR:e.wkid||JSON.stringify(e.toJSON()),f:"json"}})).data.featureCollection.layers[0].layerDefinition.extent;return t?M.fromJSON(t):null}catch{return null}}}_canReuseVectorFieldData(e){const t=this._dataParameters.exportParametersVersion===e.exportParametersVersion,r=this._dataParameters.time===e.time,i=Math.abs(this._dataParameters.tileResolution-e.tileResolution)/e.tileResolution<.01,s=this._dataParameters.extents.some((t=>e.extents.some((e=>t.intersects(e))))),a=this._dataParameters.isOceanStyle===e.isOceanStyle,o=this._dataParameters.isOceanographic===e.isOceanographic;return t&&r&&i&&s&&a&&o}};e([d$1()],_.prototype,"attached",void 0),e([d$1()],_.prototype,"container",void 0),e([d$1()],_.prototype,"layer",void 0),e([d$1()],_.prototype,"timeExtent",void 0),e([d$1()],_.prototype,"view",void 0),e([d$1()],_.prototype,"updateRequested",void 0),e([d$1()],_.prototype,"updating",null),e([r({graphics:"Graphics"})],_.prototype,"type",void 0),_=e([i("esri.views.2d.layers.imagery.ImageryGraphicsView2D")],_);const w=_;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const u$1=s.getLogger("esri.views.2d.layers.imagery.ImageryView2D");let y=class extends p$1{constructor(){super(...arguments),this.attached=!1,this.container=new s$1,this.updateRequested=!1,this.type="Imagery",this._bitmapView=null;}destroy(){this.attached&&(this.detach(),this.attached=!1),this.updateRequested=!1;}get updating(){return !this.attached||this.isUpdating()}update(e){this.strategy.update(e).catch((e=>{g$1(e)||u$1.error(e);}));}detach(){this.strategy.destroy(),this._bitmapView.removeAllChildren(),this.container.removeAllChildren();}hitTest(e){return new h({attributes:{},geometry:e.clone(),layer:this.layer})}attach(){const e=this.layer.version>=10,t$1=this.layer.version>=10.1?this.layer.imageMaxHeight:2048,r=this.layer.version>=10.1?this.layer.imageMaxWidth:2048;this._bitmapView=new t,this.strategy=new S({container:this._bitmapView,imageNormalizationSupported:e,imageMaxHeight:t$1,imageMaxWidth:r,fetchSource:this._fetchImage.bind(this),requestUpdate:()=>this.requestUpdate()}),this.attached=!0;}install(e){this.container.addChild(this._bitmapView),e.addChild(this.container);}uninstall(e){this.container.removeChild(this._bitmapView),e.removeChild(this.container);}redraw(){this.strategy.updateExports((e=>{e.source instanceof HTMLImageElement?e.requestRender():this.layer.applyRenderer({pixelBlock:e.source.pixelBlock}).then((t=>{const r=e.source;r.pixelBlock=t.pixelBlock,r.filter=e=>this.layer.applyFilter(e),this.container.requestRender();}));}));}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate());}isUpdating(){return this.strategy.updating||this.updateRequested}getPixelData(){if(this.updating)return null;const e=this.strategy.bitmaps;if(1===e.length&&e[0].source)return {extent:e[0].source.extent,pixelBlock:e[0].source.originalPixelBlock};if(e.length>1){const t=this.view.extent,r=e.map((e=>e.source)).filter((e=>e.extent&&e.extent.intersects(t))).map((e=>({extent:e.extent,pixelBlock:e.originalPixelBlock}))),i=d$2(r,t);return r$1(i)?{extent:i.extent,pixelBlock:i.pixelBlock}:null}return null}_fetchImage(e,t,r,i){return (i=i||{}).timeExtent=this.timeExtent,i.requestAsImageElement=!0,this.layer.fetchImage(e,t,r,i).then((e=>e.imageElement?e.imageElement:this.layer.applyRenderer(e.pixelData,{signal:i.signal}).then((t=>{const r=new i$2(t.pixelBlock,t.extent.clone(),e.pixelData.pixelBlock);return r.filter=e=>this.layer.applyFilter(e),r}))))}};e([d$1()],y.prototype,"attached",void 0),e([d$1()],y.prototype,"container",void 0),e([d$1()],y.prototype,"layer",void 0),e([d$1()],y.prototype,"strategy",void 0),e([d$1()],y.prototype,"timeExtent",void 0),e([d$1()],y.prototype,"view",void 0),e([d$1()],y.prototype,"updateRequested",void 0),e([d$1()],y.prototype,"updating",null),e([r({imagery:"Imagery"})],y.prototype,"type",void 0),y=e([i("esri.views.2d.layers.imagery.ImageryView2D")],y);const g=y;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const u=u=>{let m=class extends u{constructor(){super(...arguments),this.view=null;}async fetchPopupFeatures(e,o){const{layer:s}=this;if(!e)throw new s$2("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:s});const{popupEnabled:i}=s,u=d$3(s,o);if(!i||!r$1(u))throw new s$2("imagerylayerview:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:i,popupTemplate:u});const m=await u.getRequiredFields(),c=new b;c.timeExtent=this.timeExtent,c.geometry=e,c.outFields=m,c.outSpatialReference=e.spatialReference;const l=this.view.resolution,y="2d"===this.view.type?new j$1(l,l,this.view.spatialReference):new j$1(.5*l,.5*l,this.view.spatialReference),{returnTopmostRaster:h,showNoDataRecords:w}=u.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1},d={returnDomainValues:!0,returnTopmostRaster:h,pixelSize:y,showNoDataRecords:w,signal:r$1(o)?o.signal:null};return s.queryVisibleRasters(c,d).then((e=>e))}canResume(){var e;return !!super.canResume()&&(null==(e=this.timeExtent)||!e.isEmpty)}};return e([d$1()],m.prototype,"layer",void 0),e([d$1()],m.prototype,"suspended",void 0),e([d$1(g$2)],m.prototype,"timeExtent",void 0),e([d$1()],m.prototype,"view",void 0),m=e([i("esri.views.layers.ImageryLayerView")],m),m};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let p=class extends(u(i$3(l(u$2)))){constructor(){super(...arguments),this._exportImageVersion=-1;}initialize(){this.handles.add([i$4(this,["layer.blendMode","layer.effects"],(e=>{this.subview&&(this.subview.container.blendMode=e);}),!0),i$4(this,"layer.effect",(e=>{this.subview&&(this.subview.container.effect=e);}),!0)]);}get pixelData(){return this.updating?null:"getPixelData"in this.subview?this.subview.getPixelData():null}get updating(){return !!(!this.subview||"updating"in this.subview&&this.subview.updating)}async hitTest(e,t){return this.subview?"hitTest"in this.subview?[this.subview.hitTest(e)]:[]:null}update(e){var t;null==(t=this.subview)||t.update(e);}attach(){this.layer.increaseRasterJobHandlerUsage(),this._setSubView(),this.handles.add([i$4(this,"layer.exportImageServiceParameters.version",(e=>{this._exportImageVersion!==e&&(this._exportImageVersion=e,this.requestUpdate());})),this.watch("timeExtent",(()=>{"timeExtent"in this.subview&&(this.subview.timeExtent=this.timeExtent),this.requestUpdate();})),this.layer.on("redraw",(()=>{"redraw"in this.subview?this.subview.redraw():this.subview.redrawOrRefetch();})),f$1(this.layer,"renderer",(()=>this._setSubView()))],"imagerylayerview-update");}detach(){this.layer.decreaseRasterJobHandlerUsage(),this.subview.destroy(),this.handles.remove("imagerylayerview-update"),this._exportImageVersion=-1;}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}async doRefresh(){this.requestUpdate();}isUpdating(){return !this.subview||!this.suspended&&this.subview.updating}_setSubView(){var e,t;let i="Imagery";"vector-field"===(null==(e=this.layer.renderer)?void 0:e.type)&&"lerc"===this.layer.format&&(i="Graphics");var s,r;("animated-flow"===(null==(t=this.layer.renderer)?void 0:t.type)&&(i="Flow"),this.subview&&this.subview.type===i)||(null==(s=this.subview)||s.uninstall(this.container),null==(r=this.subview)||r.destroy(),this.subview="Imagery"===i?new g({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):"Graphics"===i?new w({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):new p$2({layer:this.layer,layerView:this}),this.subview.attach(),this.subview.install(this.container),this.subview.container.blendMode=this.layer.blendMode,this.subview.container.effect=this.layer.effect);this.requestUpdate();}};e([d$1()],p.prototype,"pixelData",null),e([d$1({readOnly:!0})],p.prototype,"updating",null),e([d$1()],p.prototype,"subview",void 0),p=e([i("esri.views.2d.layers.ImageryLayerView2D")],p);const d=p;

export { d as default };
