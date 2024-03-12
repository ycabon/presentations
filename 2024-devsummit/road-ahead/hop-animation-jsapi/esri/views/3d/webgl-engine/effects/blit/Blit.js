// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/tslib.es6 ../../../../../core/accessorSupport/decorators/property ../../../../../core/has ../../../../../core/Logger ../../../../../core/RandomLCG ../../../../../core/accessorSupport/decorators/subclass ../RenderPlugin ../../lib/RenderSlot ../../../../../chunks/Compositing.glsl ../../shaders/CompositingTechnique ../../shaders/CompositingTechniqueConfiguration".split(" "),function(b,d,f,q,r,t,l,h,m,n,p,k){b.Blit=class extends h.SyncRenderPlugin{constructor(a){super(a);
this._context=null;this.opacity=1;this.alphaMode=k.AlphaMode.None;this._blitConfiguration=new k.CompositingTechniqueConfiguration;this._blitParameters=new n.CompositingPassParameters;this.produces=new Map([[m.RenderSlot.BLIT,()=>null!=this._context]])}consumes(){return h.ConsumesCompositeColor}initializeRenderContext(a){this._context=a}uninitializeRenderContext(){this._context=null}destroy(){}renderNode(a,g,c,e){g=c?.get("composite-color")?.getTexture();if(!this._context||!g)return e;c=this._context.techniqueRepository.acquire(p.CompositingTechnique,
this._blitConfiguration);if(!c?.compiled)return this._context.requestRender(),e;a.rctx.bindFramebuffer(e?.fbo);this._blitParameters.texture=g;this._blitParameters.opacity=this.opacity;a.rctx.bindTechnique(c,a.bindParameters,this._blitParameters);a.rctx.screen.draw();c.release();return e}};d.__decorate([f.property()],b.Blit.prototype,"_context",void 0);d.__decorate([f.property()],b.Blit.prototype,"opacity",void 0);d.__decorate([f.property()],b.Blit.prototype,"alphaMode",void 0);b.Blit=d.__decorate([l.subclass("esri.views.3d.webgl-engine.effects.blit.Blit")],
b.Blit);Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});