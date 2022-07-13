import { B as e, C as d$1, D as n, E as f$1, ar as j, Z as s$1, g as g$2, kn as c, r, N as x, w, t as t$2, ey as d$2, ko as g$3, al as e$1, kp as d$3, aP as l, d$ as w$1, kq as F, h as L, k5 as g$4, s as s$2, d as b$1, b1 as b$2, kr as i$2, gx as U, j as j$1 } from './_virtual_index-a68dd1ed.js';
import { y, d as d$4 } from './RasterVFDisplayObject-63fd303e.js';
import { f as f$2 } from './LayerView2D-5e78fc62.js';
import { o as oe } from './BaseGraphicContainer-7910f35d.js';
import { n as n$1 } from './HighlightGraphicContainer-bd7d886c.js';
import { t as t$1 } from './BitmapContainer-58ae455b.js';
import { s } from './utils-65fe22dc.js';
import { i } from './Bitmap-192f4ac0.js';
import { S } from './ExportStrategy-2abdeb60.js';
import { b as a, c as m$2 } from './WGLContainer-f0084bc3.js';
import { I } from './Utils-13ecd570.js';
import { s as s$3 } from './popupUtils-f156b80b.js';
import { u as u$1 } from './LayerView-c3f47c16.js';
import { i as i$1 } from './RefreshableLayerView-7acfc04f.js';
import './VertexArrayObject-8465ed50.js';
import './Texture-6d086a89.js';
import './enums-fb707d37.js';
import './VertexElementDescriptor-b07b83f4.js';
import './CIMSymbolHelper-207e14e1.js';
import './BidiEngine-d3dd902c.js';
import './floatRGBA-86b5337e.js';
import './enums-11126df6.js';
import './alignmentUtils-d4b065e2.js';
import './definitions-20a531fc.js';
import './number-7d0da80b.js';
import './GeometryUtils-10c98655.js';
import './FeatureContainer-bfa84563.js';
import './TileContainer-fc4bdcaf.js';
import './visualVariablesUtils-9ffa569b.js';
import './visualVariablesUtils-2b7ff03c.js';
import './MaterialKey-c720612c.js';
import './Matcher-74eec27a.js';
import './tileUtils-dcde4a9f.js';
import './TileClipper-b97993cf.js';
import './Geometry-bc69b0c8.js';
import './GeometryUtils-0c093176.js';
import './cimAnalyzer-cdc9ead8.js';
import './callExpressionWithFeature-61b951a0.js';
import './earcut-da8a3e33.js';
import './ExpandedCIM-ab130668.js';
import './devEnvironmentUtils-0f97b5c2.js';
import './schemaUtils-b5b76e05.js';
import './createSymbolSchema-b0736342.js';
import './MD5-efff06bc.js';
import './util-d93141bf.js';
import './ComputedAttributeStorage-85ce72ec.js';
import './centroid-6ca6c7bb.js';
import './vec3f32-3c06790e.js';
import './EffectView-f0c56014.js';
import './vec4f32-0748677e.js';
import './ProgramTemplate-0f5b7acb.js';
import './StyleDefinition-8bdfb2b8.js';
import './config-76ec2e12.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let d=class extends f$1{constructor(){super(...arguments),this.attached=!1,this.container=new s,this.updateRequested=!1,this.type="imagery",this._bitmapView=new t$1;}destroy(){this.attached&&(this.detach(),this.attached=!1),this.updateRequested=!1;}get updating(){return !this.attached||this.isUpdating()}update(e){this.strategy.update(e).catch((e=>{j(e)||s$1.getLogger(this.declaredClass).error(e);}));}hitTest(e){return new g$2({attributes:{},geometry:e.clone(),layer:this.layer})}attach(){this.container.addChild(this._bitmapView);const e=this.layer.version>=10,t=this.layer.version>=10.1?this.layer.imageMaxHeight:2048,r=this.layer.version>=10.1?this.layer.imageMaxWidth:2048;this.strategy=new S({container:this._bitmapView,imageNormalizationSupported:e,imageMaxHeight:t,imageMaxWidth:r,fetchSource:this._fetchImage.bind(this),requestUpdate:()=>this.requestUpdate()});}detach(){this.strategy.destroy(),this._bitmapView.removeAllChildren(),this.container.removeAllChildren(),this.updateRequested=!1;}redraw(){this.strategy.updateExports((e=>{e.source instanceof HTMLImageElement?e.requestRender():this.layer.applyRenderer({pixelBlock:e.source.pixelBlock}).then((t=>{const r=e.source;r.pixelBlock=t.pixelBlock,r.filter=e=>this.layer.applyFilter(e),this.container.requestRender();}));}));}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate());}isUpdating(){return this.strategy.updating||this.updateRequested}getPixelData(){if(this.updating)return null;const e=this.strategy.bitmaps;if(1===e.length&&e[0].source)return {extent:e[0].source.extent,pixelBlock:e[0].source.originalPixelBlock};if(e.length>1){const t=this.view.extent,r$1=e.map((e=>e.source)).filter((e=>e.extent&&e.extent.intersects(t))).map((e=>({extent:e.extent,pixelBlock:e.originalPixelBlock}))),i=c(r$1,t);return r(i)?{extent:i.extent,pixelBlock:i.pixelBlock}:null}return null}_fetchImage(e,t,r,i$1){return (i$1=i$1||{}).timeExtent=this.timeExtent,i$1.requestAsImageElement=!0,this.layer.fetchImage(e,t,r,i$1).then((e=>e.imageElement?e.imageElement:this.layer.applyRenderer(e.pixelData,{signal:i$1.signal}).then((t=>{const r=new i(t.pixelBlock,t.extent.clone(),e.pixelData.pixelBlock);return r.filter=e=>this.layer.applyFilter(e),r}))))}};e([d$1()],d.prototype,"attached",void 0),e([d$1()],d.prototype,"container",void 0),e([d$1()],d.prototype,"layer",void 0),e([d$1()],d.prototype,"strategy",void 0),e([d$1()],d.prototype,"timeExtent",void 0),e([d$1()],d.prototype,"view",void 0),e([d$1()],d.prototype,"updateRequested",void 0),e([d$1()],d.prototype,"updating",null),e([d$1()],d.prototype,"type",void 0),d=e([n("esri.views.2d.layers.imagery.ImageryView2D")],d);const u=d;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class t extends a{constructor(){super(...arguments),this.symbolTypes=["triangle"];}get requiresDedicatedFBO(){return !1}prepareRenderPasses(s){const t=s.registerRenderPass({name:"imagery (vf)",brushes:[m$2],target:()=>this.children,drawPhase:I.MAP});return [...super.prepareRenderPasses(s),t]}doRender(e){this.visible&&e.drawPhase===I.MAP&&this.symbolTypes.forEach((r=>{e.renderPass=r,super.doRender(e);}));}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let p=class extends f$1{constructor(e){super(e),this.update=x(((e,t)=>this._update(e,t).catch((e=>{j(e)||s$1.getLogger(this.declaredClass).error(e);}))));}get updating(){return !!this._loading}redraw(e){if(!this.container.children.length)return;const t=this.container.children[0];t.symbolizerParameters=e,t.invalidateVAO(),this.container.symbolTypes="wind_speed"===e.style?["scalar","triangle"]:"simple_scalar"===e.style?["scalar"]:["triangle"],this.container.requestRender();}async _update(e,t,r){if(!e.stationary)return;const{extent:i,spatialReference:s}=e.state,o=new w({xmin:i.xmin,ymin:i.ymin,xmax:i.xmax,ymax:i.ymax,spatialReference:s}),[a,n]=e.state.size;this._loading=this.fetchPixels(o,a,n,r);const c=await this._loading;this._addToDisplay(c,t,e.state),this._loading=null;}_addToDisplay(e,t,r){if(t$2(e.pixelBlock))return this.container.children.forEach((e=>e.destroy())),void this.container.removeAllChildren();const{extent:s,pixelBlock:o}=e,a=new y(o);a.offset=[0,0],a.symbolizerParameters=t,a.rawPixelData=e,a.invalidateVAO(),a.x=s.xmin,a.y=s.ymax,a.pixelRatio=r.pixelRatio,a.rotation=r.rotation,a.resolution=r.resolution,a.width=o.width*t.symbolTileSize,a.height=o.height*t.symbolTileSize,this.container.children.forEach((e=>e.destroy())),this.container.removeAllChildren(),this.container.symbolTypes="wind_speed"===t.style?["scalar","triangle"]:"simple_scalar"===t.style?["scalar"]:["triangle"],this.container.addChild(a);}};e([d$1()],p.prototype,"fetchPixels",void 0),e([d$1()],p.prototype,"container",void 0),e([d$1()],p.prototype,"_loading",void 0),e([d$1()],p.prototype,"updating",null),p=e([n("esri.views.2d.layers.imagery.ImageryVFStrategy")],p);const m$1=p;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let f=class extends d$2{constructor(){super(...arguments),this.attached=!1,this.container=new t,this.type="imageryVF",this._dataParameters={exportParametersVersion:0,bbox:"",symbolTileSize:0,time:""},this._fetchpixels=async(e,t,r$1,i)=>{const n=await this._projectFullExtentPromise,{symbolTileSize:l}=this.layer.renderer,{extent:c,width:m,height:p}=g$3(e,t,r$1,l,n);if(r(n)&&!n.intersects(e))return {extent:c,pixelBlock:null};const h={bbox:`${c.xmin}, ${c.ymin}, ${c.xmax}, ${c.ymax}`,exportParametersVersion:this.layer.exportImageServiceParameters.version,symbolTileSize:l,time:JSON.stringify(this.timeExtent||"")};if(this._canReuseVectorFieldData(h)){const e=this.getPixelData();if(r(e)){if(`${e.extent.xmin}, ${e.extent.ymin}, ${e.extent.xmax}, ${e.extent.ymax}`===h.bbox)return e}}const{pixelData:u}=await this.layer.fetchImage(c,m,p,{timeExtent:this.timeExtent,requestAsImageElement:!1,signal:i});if(this._dataParameters=h,t$2(u.pixelBlock))return {extent:c,pixelBlock:null};return {extent:c,pixelBlock:"vector-uv"===this.layer.rasterInfo.dataType?e$1(d$3(u.pixelBlock,"vector-uv")):u.pixelBlock}};}get updating(){return !this.attached||this._strategy.updating}attach(){this._projectFullExtentPromise=this._getProjectedFullExtent(this.view.spatialReference),this._strategy=new m$1({container:this.container,fetchPixels:this._fetchpixels}),this.handles.add(l((()=>this.layer.renderer),(e=>this._updateSymbolizerParams(e)),w$1),"vector-field-view-update");}detach(){this._strategy.destroy(),this.container.children.forEach((e=>e.destroy())),this.container.removeAllChildren(),this.handles.remove("vector-field-view-update"),this._strategy=this.container=this._projectFullExtentPromise=null;}getPixelData(){if(this.updating||!this.container.children.length)return null;const{extent:e,pixelBlock:t}=this.container.children[0].rawPixelData;return {extent:e,pixelBlock:t}}hitTest(e){return new g$2({attributes:{},geometry:e.clone(),layer:this.layer})}update(e){this._strategy.update(e,this._symbolizerParams);}redraw(){this._updateSymbolizerParams(this.layer.renderer),this._strategy.redraw(this._symbolizerParams);}_canReuseVectorFieldData(e){const t=this._dataParameters.exportParametersVersion===e.exportParametersVersion,r=this._dataParameters.time===e.time,i=this._dataParameters.symbolTileSize===e.symbolTileSize,s=this._dataParameters.bbox===e.bbox;return t&&r&&i&&s}async _getProjectedFullExtent(e){try{return await F(this.layer.fullExtent,e)}catch(t){try{const t=(await L(this.layer.url,{query:{option:"footprints",outSR:e.wkid||JSON.stringify(e.toJSON()),f:"json"}})).data.featureCollection.layers[0].layerDefinition.extent;return t?w.fromJSON(t):null}catch{return null}}}_updateSymbolizerParams(e){"vector-field"===e.type&&(this._symbolizerParams=this.layer.symbolizer.generateWebGLParameters({pixelBlock:null}));}};e([d$1()],f.prototype,"attached",void 0),e([d$1()],f.prototype,"container",void 0),e([d$1()],f.prototype,"layer",void 0),e([d$1()],f.prototype,"timeExtent",void 0),e([d$1()],f.prototype,"type",void 0),e([d$1()],f.prototype,"view",void 0),e([d$1()],f.prototype,"updating",null),f=e([n("esri.views.2d.layers.imagery.VectorFieldView2D")],f);const g$1=f;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const m=m=>{let c=class extends m{constructor(){super(...arguments),this.view=null;}async fetchPopupFeatures(e,s){const{layer:p}=this;if(!e)throw new s$2("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:p});const{popupEnabled:a}=p,m=s$3(p,s);if(!a||t$2(m))throw new s$2("imagerylayerview:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:a,popupTemplate:m});const c=await m.getRequiredFields(),l=new b$1;l.timeExtent=this.timeExtent,l.geometry=e,l.outFields=c,l.outSpatialReference=e.spatialReference;const y=this.view.resolution,h="2d"===this.view.type?new b$2(y,y,this.view.spatialReference):new b$2(.5*y,.5*y,this.view.spatialReference),{returnTopmostRaster:w,showNoDataRecords:d}=m.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1},f={returnDomainValues:!0,returnTopmostRaster:w,pixelSize:h,showNoDataRecords:d,signal:r(s)?s.signal:null};return p.queryVisibleRasters(l,f).then((e=>e))}canResume(){return !!super.canResume()&&!this.timeExtent?.isEmpty}};return e([d$1()],c.prototype,"layer",void 0),e([d$1()],c.prototype,"suspended",void 0),e([d$1(g$4)],c.prototype,"timeExtent",void 0),e([d$1()],c.prototype,"view",void 0),c=e([n("esri.views.layers.ImageryLayerView")],c),c};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let g=class extends(m(i$1(f$2(u$1)))){constructor(){super(...arguments),this._exportImageVersion=-1,this._highlightGraphics=new i$2,this.subview=null;}get pixelData(){return this.updating?null:"getPixelData"in this.subview?this.subview.getPixelData():null}get updating(){return !!(!this.subview||"updating"in this.subview&&this.subview.updating)}async hitTest(e,i){return this.subview?[{type:"graphic",graphic:this.subview.hitTest(e),layer:this.layer,mapPoint:e}]:null}update(e){this.subview?.update(e);}attach(){this.layer.increaseRasterJobHandlerUsage(),this._setSubView(),this.view&&(this._highlightView=new oe({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new n$1(this.view.featuresTilingScheme)}),this.container.addChild(this._highlightView.container)),this.handles.add([l((()=>this.layer.blendMode??"normal"),(e=>this.subview.container.blendMode=e),w$1),l((()=>this.layer.effect??null),(e=>this.subview.container.effect=e),w$1),l((()=>this.layer.exportImageServiceParameters.version),(e=>{e&&this._exportImageVersion!==e&&(this._exportImageVersion=e,this.requestUpdate());}),U),l((()=>this.timeExtent),(e=>{this.subview.timeExtent=e,"redraw"in this.subview?this.requestUpdate():this.subview.redrawOrRefetch();}),U),this.layer.on("redraw",(()=>{"redraw"in this.subview?this.subview.redraw():this.subview.redrawOrRefetch();})),l((()=>this.layer.renderer),(()=>this._setSubView()))],"imagerylayerview-update");}detach(){this.layer.decreaseRasterJobHandlerUsage(),this.container.removeAllChildren(),this._detachSubview(this.subview),this.subview?.destroy(),this.handles.remove("imagerylayerview-update"),this.subview=null,this._highlightView?.destroy(),this._exportImageVersion=-1;}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}highlight(e,r){if(!((Array.isArray(e)?e[0]:j$1.isCollection(e)?e.getItemAt(0):e)instanceof g$2))return {remove:()=>{}};let s=[];return Array.isArray(e)||j$1.isCollection(e)?s=e.map((e=>e.clone())):e instanceof g$2&&(s=[e.clone()]),this._highlightGraphics.addMany(s),{remove:()=>{this._highlightGraphics.removeMany(s);}}}async doRefresh(){this.requestUpdate();}isUpdating(){return !this.subview||this.subview.updating}_setSubView(){if(!this.view)return;const e=this.layer.renderer?.type;let i="imagery";if("vector-field"===e?i="imageryVF":"flow"===e&&(i="flow"),this.subview){if(this.subview.type===i)return this._attachSubview(this.subview),void("flow"===this.subview.type&&this.subview.redrawOrRefetch());this._detachSubview(this.subview),this.subview?.destroy();}this.subview="imagery"===i?new u({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):"imageryVF"===i?new g$1({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):new d$4({layer:this.layer,layerView:this}),this._attachSubview(this.subview),this.requestUpdate();}_attachSubview(e){e&&!e.attached&&(e.attach(),e.attached=!0,this.container.addChildAt(e.container,0),e.container.blendMode=this.layer.blendMode,e.container.effect=this.layer.effect);}_detachSubview(e){e?.attached&&(this.container.removeChild(e.container),e.detach(),e.attached=!1);}};e([d$1()],g.prototype,"pixelData",null),e([d$1({readOnly:!0})],g.prototype,"updating",null),e([d$1()],g.prototype,"subview",void 0),g=e([n("esri.views.2d.layers.ImageryLayerView2D")],g);const b=g;

export { b as default };
