// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../core/Logger ../../../core/maybe ../../../core/libs/gl-matrix-2/factories/vec2f64 ../../2d/engine/imagery/enums ../../2d/engine/vectorTiles/VectorTileRendererHelper3D ./BlendLayersTechnique ./LayerClass ./RasterColorizerTechnique ./support/MultiSizeFramebuffer ../webgl-engine/core/shaderLibrary/output/BlendOptions ../webgl-engine/core/shaderLibrary/terrain/TileBackground.glsl ../../../chunks/BlendLayers.glsl ../webgl-engine/lib/BindParameters ../webgl-engine/lib/DefaultVertexBufferLayouts ../webgl-engine/lib/glUtil3D ../../webgl/enums ../../webgl/Texture ../../webgl/Util".split(" "),
function(r,F,l,G,t,H,u,v,w,x,q,d,y,I,J,K,m,z,L){class M{constructor(a,b){this._rctx=a;this._techniqueRepository=b;this._fbos=[];this._vectorTileHelper=new H.VectorTileRendererHelper3D;this._bindParameters=new I.BindParameters(null,null);this._blendLayersTechniqueConfig=new u.BlendLayersTechniqueConfiguration;this._current=0;this._lastUsedIds=[];this._lastCreatedBufferId=0;this._onHoldIds=[];this._vaoQuad=K.createQuadVAO(this._rctx,J.Pos2Tex)}dispose(){this._fbos.forEach(l.disposeMaybe);this._fbos=
null;this._vtFBO=l.disposeMaybe(this._vtFBO);this._vaoQuad=l.disposeMaybe(this._vaoQuad);this._vectorTileHelper=l.disposeMaybe(this._vectorTileHelper);this._backgroundTechnique=l.releaseMaybe(this._backgroundTechnique);this._applyOpacityTechnique=l.releaseMaybe(this._applyOpacityTechnique);this._blendLayersTechnique=l.releaseMaybe(this._blendLayersTechnique)}_getBlendLayersTechnique(a,b,e,f=d.PremultipliedAlphaSource.Off,c=y.BackgroundMode.BelowLayer){this._blendLayersTechniqueConfig.output=b;this._blendLayersTechniqueConfig.blendMode=
a;this._blendLayersTechniqueConfig.baseOpacityMode=e;this._blendLayersTechniqueConfig.premultipliedSource=f;this._blendLayersTechniqueConfig.background=c;return this._blendLayersTechnique=this._techniqueRepository.releaseAndAcquire(u.BlendLayersTechnique,this._blendLayersTechniqueConfig,this._blendLayersTechnique)}drawBackground(a,b){b=this._getBlendLayersTechnique(q.LayerBlendMode.Normal,b?d.BlendLayersOutput.ColorComposite:d.BlendLayersOutput.GridComposite,d.BaseOpacityMode.NotRequired,d.PremultipliedAlphaSource.Off,
y.BackgroundMode.Only);a=this._rctx.bindTechnique(b,this._bindParameters,a);this._render(a)}_render(a){this._rctx.bindVAO(this._vaoQuad);a.assertCompatibleVertexAttributeLocations(this._vaoQuad);this._rctx.drawArrays(m.PrimitiveType.TRIANGLE_STRIP,0,L.vertexCount(this._vaoQuad,"geometry"))}drawGroup(a,b,e,f,c=d.PremultipliedAlphaSource.On){b===d.BlendLayersOutput.Composite&&(a.fboTexture=this._fbos[this.getLastOnHoldId()].get(e).colorTexture);a.texture=this.currentFBO(e).colorTexture;this.closeGroup(e);
b=this._getBlendLayersTechnique(f,b,1>a.baseOpacity?d.BaseOpacityMode.Required:d.BaseOpacityMode.NotRequired,c);a=this._rctx.bindTechnique(b,this._bindParameters,a);this._render(a)}drawRasterData(a,b,e,f,c=d.PremultipliedAlphaSource.Off){if(null!=a.texture){var g=1>a.baseOpacity?d.BaseOpacityMode.Required:d.BaseOpacityMode.NotRequired;a.fboTexture=b===d.BlendLayersOutput.GroupBackgroundComposite||f===q.LayerBlendMode.Normal&&g===d.BaseOpacityMode.NotRequired&&c===d.PremultipliedAlphaSource.Off?null:
this.switch(e).colorTexture;b=this._getBlendLayersTechnique(f,b,g,c);a=this._rctx.bindTechnique(b,this._bindParameters,a);this._render(a)}}drawImageryTileData(a,b,e,f,c){var g=c.sourceLayerInfo.data;if(g.source&&(c.tile.surface.layerViewByIndex(c.layerIndex,v.LayerClass.MAP).ensureSymbolizerParameters(g),g.bind(this._rctx))){var p=1>a.baseOpacity?d.BaseOpacityMode.Required:d.BaseOpacityMode.NotRequired;a.fboTexture=f===q.LayerBlendMode.Normal&&p===d.BaseOpacityMode.NotRequired?null:this.switch(e).colorTexture;
b=this._getRasterColorizerTechnique(g,b,f,p);g.opacity=a.opacity;g=g.getUniforms();g.scale=c.scale;g.offset=c.offset;g.backgroundColor=a.backgroundColor;g.fboTexture=a.fboTexture;g.baseOpacity=a.baseOpacity;a=this._rctx.bindTechnique(b,null,g);this._render(a)}}_getRasterColorizerTechnique(a,b,e,f){const c=a.symbolizerParameters,g=["stretch","lut","hillshade"].indexOf(c.type);null==this._rasterColorizerConfig&&(this._rasterColorizerConfig=new w.RasterColorizerTechniqueConfiguration,this._rctx.gl.getExtension("WEBGL_color_buffer_float"),
this._rctx.gl.getExtension("OES_texture_float"));this._rasterColorizerConfig.output=b;this._rasterColorizerConfig.blendMode=e;this._rasterColorizerConfig.baseOpacityMode=f;this._rasterColorizerConfig.colorizerType=g;this._rasterColorizerConfig.applyColormap=!!c.colormap;this._rasterColorizerConfig.requireBilinearWithNN=a.isBilinearWithStretchColorRamp;this._rasterColorizerConfig.stretchType=a.hasStretchTypeNone()?t.RasterColorizerStretchType.Noop:t.RasterColorizerStretchType.PerBand;return this._rasterColorizerTechnique=
this._techniqueRepository.releaseAndAcquire(w.RasterColorizerTechnique,this._rasterColorizerConfig,this._rasterColorizerTechnique)}drawVectorData(a,b,e,f,c,g,p,A){const n=this._rctx,B=c.sourceLayerInfo.data,k=c.tile.surface.layerViewByIndex(c.layerIndex,v.LayerClass.MAP);var h=1>a.baseOpacity?d.BaseOpacityMode.Required:d.BaseOpacityMode.NotRequired;const C=h===d.BaseOpacityMode.Required||1>a.opacity||f!==q.LayerBlendMode.Normal||b!==d.BlendLayersOutput.Composite,D=C?d.PremultipliedAlphaSource.On:
d.PremultipliedAlphaSource.Off;h=this._getBlendLayersTechnique(f,b,h,D);n.setPipelineState(h.getPipeline());let E=h=null;C?(E=this.currentFBO(e),null==this._vtFBO&&(this._vtFBO=new x.MultiSizeFramebuffer(this._rctx)),h=this._vtFBO.get(e),n.bindFramebuffer(h),this._clearCurrentFBO()):A&&n.clearSafe(m.ClearBufferBit.DEPTH_BUFFER_BIT);try{this._vectorTileHelper.renderBackground(n,c.sourceLod,k.painter,k.layer.styleRepository,k.schemaHelper,Math.round(1/c.scale),c.offset,p,g,k.contentZoom),B&&this._vectorTileHelper.renderContent(n,
c.sourceLod,B,c.vtlNeighborInfos,k.painter,k.layer.styleRepository,k.schemaHelper,Math.round(1/c.scale),c.offset,p,g,k.contentZoom)}catch(N){F.getLogger("esri.views.3d.terrain").warnOnce("A render call containing vector tiles did not resolve correctly.",N)}return null!=h?(n.bindFramebuffer(E),a.texture=h.colorTexture,a.offset=G.ZEROS,a.scale=1,this.drawRasterData(a,b,e,f,D),A):!0}copyFBOToTexture(a){const b=this._rctx,e=b.bindTexture(a.texture,z.Texture.TEXTURE_UNIT_FOR_UPDATES),f=a.descriptor;b.gl.copyTexImage2D(m.TextureType.TEXTURE_2D,
0,f.pixelFormat,0,0,f.width,f.height,0);a.generateMipmap();b.bindTexture(e,z.Texture.TEXTURE_UNIT_FOR_UPDATES)}_clearCurrentFBO(){this._rctx.setStencilWriteMask(255);this._rctx.setClearColor(0,0,0,0);this._rctx.setClearDepth(1);this._rctx.setClearStencil(0);this._rctx.clearSafe(m.ClearBufferBit.COLOR_BUFFER_BIT|m.ClearBufferBit.DEPTH_BUFFER_BIT|m.ClearBufferBit.STENCIL_BUFFER_BIT)}_initFBO(a,b,e){this._rctx.bindFramebuffer(a);e&&(this._rctx.setViewport(0,0,b,b),this._clearCurrentFBO())}ensureBuffer(a){this._lastUsedIds.length=
0;this._lastUsedIds.push(1);this._lastCreatedBufferId=1;this._onHoldIds.length=0;this.bind(a)}bind(a,b=0,e=!0){this._current=b;if(b>=this._fbos.length)for(let f=this._fbos.length;f<=b;f++)this._fbos.push(new x.MultiSizeFramebuffer(this._rctx));this._initFBO(this._fbos[b].get(a),a,e)}_bindNextFreeBuffer(a){0<this._lastUsedIds.length?this.bind(a,this._lastUsedIds.pop()):(this._lastCreatedBufferId++,this.bind(a,this._lastCreatedBufferId))}openGroup(a){this._onHoldIds.push(this._current);this._bindNextFreeBuffer(a)}switch(a){const b=
this.currentFBO(a),e=this._current;this._bindNextFreeBuffer(a);this._lastUsedIds.push(e);return b}getLastOnHoldId(){return this._onHoldIds[this._onHoldIds.length-1]}closeGroup(a){const b=this._current;this._bindNextFreeBuffer(a);this._lastUsedIds.push(b);this._lastUsedIds.push(this._onHoldIds.pop())}unbind(){this._rctx.bindFramebuffer(null)}currentFBO(a){return this._fbos[this._current].get(a)}}r.TileCompositor=M;Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})});