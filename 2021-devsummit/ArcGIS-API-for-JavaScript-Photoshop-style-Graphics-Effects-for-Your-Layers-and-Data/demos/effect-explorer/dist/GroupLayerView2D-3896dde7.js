import { q as e, y, di as t, r as i$1, cy as E, cK as n } from './index.js';
import { p, l } from './LayerView2D-6ede9be6.js';
import { r as r$1 } from './RenderingContext-241e9091.js';
import { b as t$1 } from './WGLContainer-ac96ee47.js';
import './Container-b4547994.js';
import './mat4f32-a4d1c0af.js';
import './_commonjsHelpers-34398bae.js';
import './Utils-0554c7ed.js';
import './VertexArrayObject-63d80198.js';
import './ShaderCompiler-2ec9968a.js';
import './earcut-54ba3d1d.js';
import './GeometryUtils-83dd86c8.js';
import './MaterialKey-d72dbce5.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
let o=class extends p{constructor(e){super(e),this.layerViews=new E;}initialize(){this.handles.add([this.layerViews.on("change",(e=>this._layerViewsChangeHandler(e))),this.layerViews.on("after-changes",(()=>this._layerViewsAfterChangesHandler())),this.layer.watch("visibilityMode",(()=>this._visibilityModeHandler()),!0),this.watch("visible",(()=>this._visibleHandler()),!0)],"grouplayerview"),this._layerViewsChangeHandler({target:null,added:this.layerViews.toArray(),removed:[],moved:[]}),this._layerViewsAfterChangesHandler();}set layerViews(e){this._set("layerViews",n(e,this._get("layerViews")));}isUpdating(){return this.layerViews.some((e=>e.updating))}_hasLayerViewVisibleOverrides(){return this.layerViews.some((e=>e._isOverridden("visible")))}_findLayerViewForLayer(e){return e&&this.layerViews.find((i=>i.layer===e))}_firstVisibleOnLayerOrder(){const e=this.layer.layers.find((e=>{const i=this._findLayerViewForLayer(e);return i&&i.visible}));return e&&this._findLayerViewForLayer(e)}_enforceExclusiveVisibility(e){this._hasLayerViewVisibleOverrides()&&(e||!(e=this._firstVisibleOnLayerOrder())&&this.layerViews.length>0&&(e=this._findLayerViewForLayer(this.layer.layers.getItemAt(0))),this.layerViews.forEach((i=>{i.visible=i===e;})));}_layerViewsChangeHandler(e){this.handles.remove("grouplayerview:visible"),this.handles.add(this.layerViews.map((e=>e.watch("visible",(i=>this._layerViewVisibleHandler(i,e)),!0))).toArray(),"grouplayerview:visible");const i=e.added[e.added.length-1];let s=null;i&&i.visible&&(s=i),this._enforceVisibility(s);}_layerViewsAfterChangesHandler(){this.handles.remove("grouplayerview:updating"),this.handles.add(this.layerViews.map((e=>e.watch("updating",(()=>this._updateUpdating()),!0))).toArray(),"grouplayerview:updating"),this._updateUpdating();}_enforceVisibility(e){if(this._hasLayerViewVisibleOverrides())switch(this.layer.visibilityMode){case"inherited":{const e=this.visible;this.layerViews.forEach((i=>{i.visible=e;}));break}case"exclusive":this._enforceExclusiveVisibility(e);}}_visibilityModeHandler(){this._enforceVisibility();}_layerViewVisibleHandler(e,i){if(this._hasLayerViewVisibleOverrides())switch(this.layer.visibilityMode){case"inherited":e!==this.visible&&(i.visible=this.visible);break;case"exclusive":this._enforceExclusiveVisibility(e&&i);}}_visibleHandler(){var e;this._hasLayerViewVisibleOverrides()&&"inherited"===(null==(e=this.layer)?void 0:e.visibilityMode)&&this._enforceVisibility();}_updateUpdating(){this.notifyChange("updating");}};e([y({cast:t})],o.prototype,"layerViews",null),e([y()],o.prototype,"view",void 0),o=e([i$1("esri.views.layers.GroupLayerView")],o);var h=o;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class r extends t$1{constructor(){super(...arguments),this._lastWidth=0,this._lastHeight=0;}dispose(){this._renderTarget&&(this._renderTarget.dispose(),this._renderTarget=null);}doRender(e){const t=this.createRenderParams(e),{context:r,painter:s,profiler:i}=t;this._prevFBO=r.getBoundFramebufferObject(),i.recordContainerStart(this.name);const n=this._getFbo(t),o=s.getRenderTarget();r.bindFramebuffer(n),s.setRenderTarget(n),r.setDepthWriteEnabled(!0),r.setClearColor(0,0,0,0),r.setClearDepth(1),r.clear(r.gl.COLOR_BUFFER_BIT|r.gl.DEPTH_BUFFER_BIT),r.setDepthWriteEnabled(!1);for(const t of this.children)t.beforeRender(e);for(const e of this.children)e.processRender(t);for(const t of this.children)t.afterRender(e);s.setRenderTarget(o),r.bindFramebuffer(this._prevFBO),s.beforeRenderLayer(t,this._clippingInfos?255:0,this.computedOpacity),r.setStencilTestEnabled(!1),r.setStencilWriteMask(0),s.blitTexture(r,n.colorTexture,9728),s.compositeLayer(t,this.computedOpacity),i.recordContainerEnd();}createRenderParams(e){return {...super.createRenderParams(e),blendMode:this.blendMode,effects:this.computedEffects,globalOpacity:1}}_getFbo(t){const{context:r,painter:s}=t,{width:i,height:n}=r.getViewport();if(i!==this._lastWidth||n!==this._lastHeight)if(this._lastWidth=i,this._lastHeight=n,this._renderTarget)this._renderTarget.resize(i,n);else {const t={target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728,wrapMode:33071,width:i,height:n},o={colorTarget:0,depthStencilTarget:3},a=s.getSharedStencilBuffer();this._renderTarget=new r$1(r,o,t,a);}return this._renderTarget}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
let i=class extends(l(h)){constructor(){super(...arguments),this.container=new r;}attach(){this._updateStageChildren(),this.handles.add(this.layerViews.on("after-changes",(()=>this._updateStageChildren())),"grouplayerview2d");}detach(){this.handles.remove("grouplayerview2d"),this.container.removeAllChildren();}hitTest(e,r){return null}update(e){}moveStart(){}viewChange(){}moveEnd(){}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach(((e,r)=>this.container.addChildAt(e.container,r)));}};i=e([i$1("esri.views.2d.layers.GroupLayerView2D")],i);var a=i;

export default a;
