// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["../../ViewState","../../engine/Container","../../engine/webgl/enums"],function(h,k,l){class m extends k.Container{constructor(a){super();this.layerView=a;this._childrenRenderParameters={context:null,pixelRatio:1,state:new h,stationary:!0,painter:null};this._name=this.constructor.name;this.requestRender=this.requestRender.bind(this)}doRender(a){if(a.drawPhase===l.WGLDrawPhase.MAP){a.painter.setPipelineState(null);var e=window.devicePixelRatio,{stationary:n,context:c,painter:f,profiler:g}=
a,d=this._childrenRenderParameters;d.context=c.gl;d.state.copy(a.state);d.state.pixelRatio=e;d.stationary=n;d.painter=f;a=this.createRenderParams(a);f.beforeRenderLayer(a,this.clips?255:0,a.globalOpacity);g.recordContainerStart(this._name);e=c.getBoundFramebufferObject();var b=c.getViewport();c.resetState();c.bindFramebuffer(e);c.setViewport(b.x,b.y,b.width,b.height);this.layerView._renderTarget.framebuffer=e.glName;this.layerView._renderTarget.viewport[0]=b.x;this.layerView._renderTarget.viewport[1]=
b.y;this.layerView._renderTarget.viewport[2]=b.width;this.layerView._renderTarget.viewport[3]=b.height;this.layerView.render(d);c.enforceState();f.afterRenderLayer(a,a.globalOpacity);g.recordContainerEnd()}}createRenderParams(a){return{...a,blendMode:this.blendMode,effects:this.computedEffects,globalOpacity:a.globalOpacity*this.opacity,inFadeTransition:this.inFadeTransition}}}return m});