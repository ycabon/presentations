// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../core/Error ../../../core/has ../../../core/maybe ../../../core/scheduling ../../../core/signal ../../../core/libs/gl-matrix-2/factories/mat3f32 ../../../symbols/cim/cimAnalyzer ./Container ./ManagedCanvas ./webgl/definitions ./webgl/enums ./webgl/Painter ./webgl/PooledUint32Array ./webgl/Profiler ./webgl/TileReshuffleManager ./webgl/shaderGraph/techniques/TechniqueRegistry ../support/Timeline ../../support/screenshotUtils ../../webgl/enums ../../webgl/FramebufferObject ../../webgl/RenderbufferDescriptor ../../webgl/RenderingContext ../../webgl/TextureDescriptor ../../../core/imageUtils".split(" "),
function(l,t,p,q,u,v,w,x,y,z,A,h,B,C,D,E,r,F,G,g,H,I,J,K,L){class M extends y.Container{constructor(a,b){super();this._trash=new Set;this._lastFrameRenderTime=this._renderRemainingTime=0;this._renderRequested=v.signal(!1);this.stage=this;this._stationary=!0;this._reshuffleManager=new E.TileReshuffleManager;this._canvas=new z.ManagedCanvas(a);this.context=new J.RenderingContext(this._canvas.gl,b.contextOptions??{});this.painter=new B(this.context,this);this._cimAnalyzer=new x.CIMAnalyzer(this.painter.textureManager.resourceManager);
p("esri-2d-profiler")&&(this._debugOutput=document.createElement("div"),this._debugOutput.setAttribute("style","margin: 24px 64px; position: absolute; color: red;"),a.appendChild(this._debugOutput));const d=()=>this._highlightGradient;this._renderParameters={drawPhase:0,state:this.state,pixelRatio:window.devicePixelRatio,stationary:!1,globalOpacity:1,blendMode:null,deltaTime:-1,time:0,inFadeTransition:!1,effects:null,context:this.context,painter:this.painter,timeline:b.timeline||new F.Timeline,renderingOptions:b.renderingOptions,
requestRender:()=>this.requestRender(),allowDelayedRender:!1,requireFBO:!1,profiler:new D.Profiler(this.context,this._debugOutput),dataUploadCounter:0,get highlightGradient(){return d()},reshuffleManager:this._reshuffleManager,backgroundColor:b.backgroundColor};this._taskHandle=u.addFrameTask({render:c=>this.renderFrame(c)});this._taskHandle.pause();this._lostWebGLContextHandle=this._canvas.events.on("webgl-context-lost",c=>this.emit("webgl-error",{error:new t("webgl-context-lost",c.statusMessage)}));
this._bufferPool=new C.ArrayBufferPool;r.startup()}destroy(){r.shutdown();this.removeAllChildren();this._emptyTrash();this._taskHandle=q.removeMaybe(this._taskHandle);this._lostWebGLContextHandle=q.removeMaybe(this._lostWebGLContextHandle);this._canvas.destroy();this._debugOutput?.parentNode?.removeChild(this._debugOutput);this._bufferPool.destroy();this.painter.dispose();this.context.dispose();this._canvas=null}get textureManager(){return this.painter.textureManager}get backgroundColor(){return this._renderParameters.backgroundColor}set backgroundColor(a){this._renderParameters.backgroundColor=
a;this.requestRender()}get bufferPool(){return this._bufferPool}get cimAnalyzer(){return this._cimAnalyzer}get renderingOptions(){return this._renderingOptions}set renderingOptions(a){this._renderingOptions=a;this.requestRender()}get renderRequested(){return this._renderRequested.value}get state(){return this._state}set state(a){this._state=a;this.requestRender()}get stationary(){return this._stationary}set stationary(a){this._stationary!==a&&(this._stationary=a,this.requestRender())}trashDisplayObject(a){this._trash.add(a);
this.requestRender()}untrashDisplayObject(a){return this._trash.delete(a)}requestRender(){this._renderRemainingTime=2E3;this.renderRequested||(this._renderRequested.value=!0,this._taskHandle.resume())}renderFrame(a){this._renderRemainingTime-=this._lastFrameRenderTime?a.time-this._lastFrameRenderTime:0;0>=this._renderRemainingTime&&this._taskHandle.pause();this._lastFrameRenderTime=a.time;this._renderRequested.value=!1;this._renderParameters.state=this._state;this._renderParameters.stationary=this.stationary;
this._renderParameters.pixelRatio=window.devicePixelRatio;this._renderParameters.globalOpacity=1;this._renderParameters.time=a.time;this._renderParameters.deltaTime=a.deltaTime;this._renderParameters.effects=null;this.processRender(this._renderParameters);this._emptyTrash()}_createTransforms(){return{displayViewScreenMat3:w.create()}}renderChildren(a){for(const b of this.children)b.beforeRender(a);this._reshuffleManager.reshuffle(A.MAX_TILE_RESHUFFLES_PER_FRAME);this._canvas.render(a,()=>this._renderChildren(this.children,
a));for(const b of this.children)b.afterRender(a)}_renderChildren(a,b){const d=this.context;this.painter.textureUploadManager.upload();d.resetInfo();b.profiler.recordStart("drawLayers");b.dataUploadCounter=0;this.painter.beforeRenderPhases(b,b.backgroundColor,this.state.padding);b.drawPhase=h.WGLDrawPhase.MAP;for(const c of a)c.processRender(b);if(this.children.some(c=>c.hasHighlight)){b.drawPhase=h.WGLDrawPhase.HIGHLIGHT;for(const c of a)c.processRender(b)}if(this.children.some(c=>c.hasLabels)){b.drawPhase=
h.WGLDrawPhase.LABEL;for(const c of a)c.processRender(b)}if(p("esri-tiles-debug")){b.drawPhase=h.WGLDrawPhase.DEBUG;for(const c of a)c.processRender(b)}this.painter.afterRenderPhases(b);b.profiler.recordEnd("drawLayers");d.logInfo()}doRender(a){const b=this.context,{state:d,pixelRatio:c}=a;this._canvas.resize(a);b.setViewport(0,0,c*d.size[0],c*d.size[1]);b.setDepthWriteEnabled(!0);b.setStencilWriteMask(255);this.renderChildren(a)}async takeScreenshot(a,b,d,c){const m=Math.round(this.state.size[0]*
a.resolutionScale),k=Math.round(this.state.size[1]*a.resolutionScale);var n=a.resolutionScale,e=this.context,f=this._state.clone();if(null!=c){const N=f.viewpoint;f.viewpoint.rotation=c;f.viewpoint=N}c={...this._renderParameters,drawPhase:null,globalOpacity:1,stationary:!0,state:f,pixelRatio:n,time:performance.now(),deltaTime:0,blendMode:null,effects:null,inFadeTransition:!1,backgroundColor:d};d=new K.TextureDescriptor(m,k);d.wrapMode=g.TextureWrapMode.CLAMP_TO_EDGE;d.internalFormat=g.SizedPixelFormat.RGBA8;
d.isImmutable=!0;d=new H.FramebufferObject(e,d,new I.RenderbufferDescriptor(g.RenderbufferFormat.DEPTH_STENCIL,m,k));n=e.getBoundFramebufferObject();f=e.getViewport();e.bindFramebuffer(d);e.setViewport(0,0,m,k);this._renderChildren(b??this.children,c);b=this._readbackScreenshot(d,{...a.cropArea,y:k-(a.cropArea.y+a.cropArea.height)});e.bindFramebuffer(n);e.setViewport(f.x,f.y,f.width,f.height);this.requestRender();e=await b;1===a.outputScale?a=e:(a=new ImageData(Math.round(e.width*a.outputScale),Math.round(e.height*
a.outputScale)),G.resampleHermite(e,a,!0));d.dispose();return a}async _readbackScreenshot(a,b){const d=L.createEmptyImageData(b.width,b.height,document.createElement("canvas"));await a.readPixelsAsync(b.x,b.y,b.width,b.height,g.PixelFormat.RGBA,g.PixelType.UNSIGNED_BYTE,new Uint8Array(d.data.buffer));return d}_emptyTrash(){for(;0<this._trash.size;){const a=Array.from(this._trash);this._trash.clear();for(const b of a)b.processDetach()}}}l.Stage=M;l.extraRenderTime=2E3;Object.defineProperty(l,Symbol.toStringTag,
{value:"Module"})});