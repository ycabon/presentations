// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../core/maybe ../../../core/libs/gl-matrix-2/math/vec2 ../../../core/libs/gl-matrix-2/factories/vec2f64 ../../../layers/support/layerUtils ../support/StreamDataLoader ./BlendLayersTechnique ./interfaces ./ITile ./LayerClass ./terrainUtils ./TextureFader ./TextureReference ./TileCompositor ./TileRenderInfo ./TileTexture ./TileUpdate ../webgl-engine/core/shaderLibrary/output/BlendOptions ../webgl-engine/core/shaderLibrary/terrain/TileBackground.glsl ../webgl-engine/lib/glUtil3D ../../webgl/enums ../../webgl/Texture ../../webgl/TextureDescriptor".split(" "),
function(M,R,S,T,z,aa,ba,U,w,A,q,N,O,ca,da,G,H,V,r,ea,D,F,fa){function P(a,d,b){g.layerIndex=d;g.vtlNeighborInfos.clear();const c=a.layerInfo[A.LayerClass.MAP][d];S.set(g.offset,0,0);g.tile=a;g.scale=1;g.sourceLod=a.lij;g.sourceLayerInfo=c;g.isVTLBackground=b;if(c.data)return b&&a.forEachLoadedNeighbor((n,t)=>{if(n.level===a.level){var u=n.layerInfo[A.LayerClass.MAP][d];if(q.isVectorTilePerLayerInfo(u)&&c.data!==u.data){var l=g.vtlNeighborInfos.pushNew();l.offset=v[t];l.sourceLod=n.lij;l.sourceLayerInfo=
u}}}),g;const e=c.upsampleInfo;return e?(b=e.tile.layerInfo[A.LayerClass.MAP][d],g.tile=e.tile,S.copy(g.offset,e.offset),g.scale=e.scale,g.sourceLod=e.tile.lij,g.sourceLayerInfo=b,g):b?g:null}function W(a){let d="normal"!==a.blendMode;z.isGroupLayer(a.parent)&&(d=W(a.parent)||d);return d}function X(a,d){z.isGroupLayer(a.parent)&&X(a.parent,d);const b=a.uid;if(null!=b&&""!==b){const c=I.get(b);c?c.start=d:I.set(b,new Y(d,d,a.blendMode,a.opacity,r.BlendLayersOutput.Composite,1))}}class Y{constructor(a,
d,b,c,e,n){this.start=a;this.end=d;this.blendMode=b;this.opacity=c;this.output=e;this.baseOpacity=n}}class ha{constructor(a,d,b,c){this._rctx=a;this.tileSize=d;this._techniques=b;this._cache=c;this._passParameters=new ba.BlendLayersPassParameters;this._backgroundColor=this._backgroundTexture=null;this._backgroundDirty=!1;this._maxAnisotropy=this._rctx.parameters.maxMaxAnisotropy;this._composition=new ca.TileCompositor(this._rctx,this._techniques);this._ensureBackgroundTexture(this.tileSize)}dispose(){this._composition=
R.disposeMaybe(this._composition);this._backgroundTexture=R.releaseMaybe(this._backgroundTexture)}get backgroundIsGrid(){return null==this._backgroundColor}get backgroundColor(){return this._backgroundColor}updateTileTexture(a,d){if(a.renderData){var b=a.surface,c=b.baseOpacity,e=0,n=0,t=this.tileSize,u=!1,l=!1,B=b.view.state.contentPixelRatio,p=!1;I.clear();E.length=0;for(var x=a.layerInfo[A.LayerClass.MAP],k=0,C=null;k<x.length;k++){const f=b.layerViewByIndex(k,A.LayerClass.MAP);var h=f.layer.opacity;
const J=f.fullOpacity;l=l||z.isBaseLayer(f.layer);if(q.isBlendableLayerView(f)){var m="normal"!==f.layer.blendMode;if(z.isGroupLayer(f.layer.parent)){var y=f.layer.parent.uid;null!=y&&""!==y&&(m=W(f.layer.parent)||m)}m&&(p=m,u=!1)}if(0!==h||p){if(++n,h=q.isVectorTileLayerView(f),m=P(a,k,h))x[k].pendingUpdates&=~(H.TileUpdate.TEXTURE_NOFADING&H.TileUpdate.TEXTURE_FADING),z.isGroupLayer(f.layer.parent)&&(y=f.layer.parent.uid,null!=y&&""!==y&&X(f.layer.parent,k)),h?t=Math.max(t,this.tileSize*B):1===
c&&1===J&&(f.isOpaque||this._dataToTexture(m)&&m.sourceLayerInfo.data.descriptor.isOpaque)&&(u=!0),++e,null===C&&(C=k)}else x[k].pendingUpdates&=~(H.TileUpdate.TEXTURE_NOFADING&H.TileUpdate.TEXTURE_FADING)}b=t/this.tileSize;c=this._ensureBackgroundTexture(this.tileSize);0===e||null===C?this._useBackgroundTexture(a,n,c):(1!==e||p||!this._useLayerTexture(a,C))&&this._composeMapLayers(a,d,k-1,l,t,b,!u||p,I,p)}}_ensureBackgroundTexture(a){null==this._backgroundTexture&&(this._backgroundTexture=this._buildTexture(a,
!1),this._backgroundDirty=!0);this._backgroundDirty&&(this._composition.bind(a),this._passParameters.offset=T.ZEROS,this._passParameters.scale=1,this._passParameters.opacity=1,this.backgroundColor&&(this._passParameters.backgroundColor=this.backgroundColor),this._composition.drawBackground(this._passParameters,null!=this.backgroundColor),this._composition.copyFBOToTexture(this._backgroundTexture),this._composition.unbind(),this._backgroundDirty=!1);return this._backgroundTexture}_useBackgroundTexture(a,
d,b){let c=N.ActivationTime.Immediate;if(a.surface.view.layerViewManager.updating||0<d)c=N.ActivationTime.Delayed;d=a.renderData;null==d.textureReference&&(c=N.ActivationTime.Immediate);d.setTextureReference(new O.TextureReference(b,U.TextureUpdate.FADING,Z,a.surface.baseOpacity,0,1),c)}_useLayerTexture(a,d){var b=a.surface.layerViewByIndex(d,A.LayerClass.MAP),c=z.isBaseLayer(b.layer);const e=c?a.surface.baseOpacity:1;c=c?1:a.surface.baseOpacity;b=b.fullOpacity;d=P(a,d,!1);return this._dataToTexture(d)?
(a.renderData.setTextureReference(new O.TextureReference(d.sourceLayerInfo.data,U.TextureUpdate.FADING,d,e,c,b)),!0):!1}_composeMapLayers(a,d,b,c,e,n,t,u,l){this._composition.ensureBuffer(e);const B=a.surface.baseOpacity;let p=!1,x=D.TextureSamplingMode.LINEAR_MIPMAP_LINEAR,k=!1,C=0;for(let f=b;0<=f;f--){b=a.surface.layerViewByIndex(f,A.LayerClass.MAP);var h=q.isVectorTileLayerView(b);h=P(a,f,h);const J=b.layer.opacity;if(!h||0===J&&!l)continue;const K=!z.isBaseLayer(b.layer)&&!p;K&&(p=!0);let Q=
!1;u.forEach(L=>{L.start===f&&(L.output=c?r.BlendLayersOutput.Composite:t&&K?this.backgroundIsGrid?r.BlendLayersOutput.GridComposite:r.BlendLayersOutput.ColorComposite:r.BlendLayersOutput.Composite,L.baseOpacity=K?B:1,E.push(L),this._composition.openGroup(e),Q=!0)});this._passParameters.baseOpacity=K&&!Q&&1>B?B:1;var m=0===C;m=Q?r.BlendLayersOutput.GroupBackgroundComposite:t&&m?this.backgroundIsGrid?r.BlendLayersOutput.GridComposite:r.BlendLayersOutput.ColorComposite:r.BlendLayersOutput.Composite;
b=V.blendModeFromString[q.isBlendableLayerView(b)?b.layer.blendMode:"normal"];this._passParameters.opacity=J;q.isVectorTileRenderInfo(h)?k=this._composition.drawVectorData(this._passParameters,m,e,b,h,n,this.tileSize,k):q.isImageryTileRenderInfo(h)?(this._composition.drawImageryTileData(this._passParameters,m,e,b,h),this._hasNearestInterpolation(h)&&(x=D.TextureSamplingMode.NEAREST)):this._dataToTexture(h)&&(this._passParameters.texture=h.sourceLayerInfo.data.texture,this._passParameters.offset=h.offset,
this._passParameters.scale=h.scale,this._composition.drawRasterData(this._passParameters,m,e,b));for(;0<E.length&&E[E.length-1].end===f;)b=E.pop(),this._passParameters.baseOpacity=b.baseOpacity,this._passParameters.opacity=b.opacity,this._passParameters.offset=T.ZEROS,this._passParameters.scale=1,this._composition.drawGroup(this._passParameters,b.output,e,V.blendModeFromString[b.blendMode]);C++}a=a.renderData;const y=l||p&&1>B;l=a.ensureTexture(e,y,()=>this._buildTexture(e,y,x));this._composition.copyFBOToTexture(l);
this._composition.unbind();a.setTextureReference(new O.TextureReference(l,d,Z,p?1:B,0,1))}_hasNearestInterpolation(a){a=a.sourceLayerInfo.data;return a.source?"nearest"===a.interpolation:!1}_dataToTexture(a){if(q.isRasterTileRenderInfo(a)){const d=a.sourceLayerInfo;d.data=this._buildTexture(d.data,!0);a.tile.setMemoryDirty()}return q.isTextureTileRenderInfo(a)}setBackground(a){this._backgroundColor!==a&&(this._backgroundColor=a,this._backgroundDirty=!0)}_buildTexture(a,d,b=D.TextureSamplingMode.LINEAR_MIPMAP_LINEAR){if(null==
a)return null;const c=new fa.TextureDescriptor;c.wrapMode=D.TextureWrapMode.CLAMP_TO_EDGE;c.samplingMode=b;c.maxAnisotropy=this._maxAnisotropy;c.preMultiplyAlpha=!0;c.flipped=!0;c.hasMipmap=!0;d||(c.pixelFormat=D.PixelFormat.RGB);d=this._rctx;let e;if("number"===typeof a)c.width=c.height=a,(e=this._cache.pop(`${a} ${c.pixelFormat}`))?e.retain():e=new G(new F.Texture(d,c),this._cache);else if(aa.isImageWithType(a))c.isOpaque=a.isOpaque,c.isOpaque&&(c.pixelFormat=D.PixelFormat.RGB),(e=this._cache.pop(`${a} ${c.pixelFormat}`))?
(e.retain(),e.texture.setData(a.image)):e=new G(new F.Texture(d,c,a.image),this._cache),a.release();else try{c.width=a.width,c.height=a.height,e=new G(new F.Texture(d,c,a))}catch(n){e=new G(ea.createEmptyTexture(d)),console.warn("TileRenderer: failed to execute 'texImage2D', cross-origin image may not be loaded.")}a=d.bindTexture(e.texture,F.Texture.TEXTURE_UNIT_FOR_UPDATES);e.generateMipmap();d.bindTexture(a,F.Texture.TEXTURE_UNIT_FOR_UPDATES);return e}get test(){return{backgroundTexture:this._backgroundTexture}}}
const I=new Map,E=[],g=new da.TileRenderInfo,Z={offset:[0,0],scale:1},v=[];v[w.NeighborIndex.NORTH]=[0,-1];v[w.NeighborIndex.NORTH_EAST]=[-1,-1];v[w.NeighborIndex.EAST]=[-1,0];v[w.NeighborIndex.SOUTH_EAST]=[-1,1];v[w.NeighborIndex.SOUTH]=[0,1];v[w.NeighborIndex.SOUTH_WEST]=[1,1];v[w.NeighborIndex.WEST]=[1,0];v[w.NeighborIndex.NORTH_WEST]=[1,-1];M.GroupInfo=Y;M.TileRenderer=ha;Object.defineProperty(M,Symbol.toStringTag,{value:"Module"})});