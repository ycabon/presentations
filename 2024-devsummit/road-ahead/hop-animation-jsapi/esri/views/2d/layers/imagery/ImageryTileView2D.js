// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../../../../chunks/tslib.es6 ../../../../core/accessorSupport/decorators/property ../../../../core/has ../../../../core/Logger ../../../../core/RandomLCG ../../../../core/accessorSupport/decorators/subclass ../../engine/imagery/RasterTileContainer ./BaseImageryTileSubView2D ../support/util ../../../layers/support/Geometry".split(" "),function(n,r,l,z,A,u,v,w,x,y){l=class extends w.BaseImageryTileSubView2D{constructor(){super(...arguments);this.type="raster"}attach(){super.attach();this.container=
new v.RasterTileContainer(this._tileInfoView);this.container.isCustomTilingScheme=this._isCustomTilingScheme;this.updateRasterFunctionParameters()}detach(){super.detach();this.container.removeAllChildren();this.container=null}canUseWebGLForProcessing(){const {symbolizer:a}=this.layer;var b=a.lookup?.colormapLut?.indexedColormap;b=b&&b.length>this._maxIndexedColormapSize;return this.useWebGLForProcessing&&a.canRenderInWebGL&&!b&&!("majority"===this.layer.interpolation&&x.canUseMajorityInterpolationOnDataSource(this.layer))}fetchTile(a,
b){return this.layer.fetchTile(a.level,a.row,a.col,b)}updateRasterFunctionParameters(){const {clips:a,view:b}=this.layerView;null!=this._geometry&&a.remove(this._geometry);const {raster:e,type:k}=this.layer;if("Function"===e.datasetFormat){var c=e.getClippingGeometry(b.spatialReference);c&&(c=new y({geometry:c}),a.add(c),this._geometry=c)}({container:c}=this);if("Function"!==e.datasetFormat||"wcs"===k)c.rasterFunctionChain=null,c.children.forEach(d=>{({bitmap:d}=d);d&&(d.suspended=!0,d.processed=
!1,d.projected&&(d.invalidateTexture(),d.rasterTexture=null))}),this._rasterFunctionState="na";else{var f=this._rasterFunctionState,{rasterFunction:g,primaryRasters:p}=e,m=g.supportsGPU&&(!p||1>=p.rasters.length),q=m?g.flatWebGLFunctionChain:null,{renderer:h}=this.layer;m=!m||!q?.functions.length||"raster-stretch"===h?.type&&h.dynamicRangeAdjustment||!this.canUseWebGLForProcessing();c.rasterFunctionChain=m?null:q;var t=null==g?"na":c.rasterFunctionChain?"gpu":"cpu";c.children.forEach(d=>{({bitmap:d}=
d);d&&(d.suspended=f!==t,d.processed=!1,d.processedTexture=null)});this._rasterFunctionState=t}}async updateTileSource(a,b){const e=this._getBandIds(),k=this._getLayerInterpolation(),c=this.canUseWebGLForProcessing(),{source:f,globalSymbolizerParams:g,suspended:p,coords:m,resolution:q}=b;b=this.layerView.hasTilingEffects?g:b.symbolizerParams;({bitmap:a}=a);[a.x,a.y]=m;a.resolution=q;if(null!=f?.pixelBlock){var h={extent:f.extent,pixelBlock:f.pixelBlock,srcPixelSize:f.srcTilePixelSize};a.rawPixelData=
h;c?(a.source=f.pixelBlock,a.isRendereredSource=!1):(h=await this.layer.applyRenderer(h,"stretch"===g?.type?g:void 0),a.source=h,a.isRendereredSource=!0);a.symbolizerParameters=c?b:null;a.transformGrid=c?f.transformGrid:null}else h=this.createEmptyTilePixelBlock(),a.source=h,a.symbolizerParameters=c?b:null,a.transformGrid=null;a.bandIds=c?e:null;a.width=this._tileInfoView.tileInfo.size[0];a.height=this._tileInfoView.tileInfo.size[1];a.interpolation=k;a.suspended=p;a.invalidateTexture()}async updateTileSymbolizerParameters(a,
b){const {local:e,global:k}=b;b=this._getBandIds();const c=this._getLayerInterpolation(),f=this.canUseWebGLForProcessing();({bitmap:a}=a);const {rawPixelData:g}=a;f||null==g?(a.isRendereredSource&&null!=g&&(a.source=g.pixelBlock),a.isRendereredSource=!1):(a.source=await this.layer.applyRenderer(g,"stretch"===k?.type?k:void 0),a.isRendereredSource=!0);a.symbolizerParameters=f?this.layerView.hasTilingEffects?k:e:null;a.bandIds=f?b:null;a.interpolation=c;a.suspended=!1}_getLayerInterpolation(){const {interpolation:a,
renderer:b}=this.layer;if(!b)return a;const e=b.type;return"raster-colormap"===e||"unique-value"===e||"class-breaks"===e?"nearest":"raster-stretch"===b.type&&null!=b.colorRamp?"bilinear"===a||"cubic"===a?"bilinear":"nearest":a}};n.__decorate([r.property()],l.prototype,"container",void 0);n.__decorate([r.property()],l.prototype,"layer",void 0);n.__decorate([r.property()],l.prototype,"type",void 0);return l=n.__decorate([u.subclass("esri.views.2d.layers.imagery.ImageryTileView2D")],l)});