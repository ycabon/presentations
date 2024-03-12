// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../core/Error ../../../core/reactiveUtils ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/Logger ../../../core/RandomLCG ../../../core/accessorSupport/decorators/subclass ../../../layers/support/rasterFunctions/rasterProjectionHelper ./LayerView3D ./TiledLayerView3D ../terrain/RasterTile ../../layers/ImageryTileLayerView ../../layers/LayerView ../../layers/RefreshableLayerView ../../support/drapedUtils ../../webgl/capabilities".split(" "),
function(g,n,p,h,e,B,C,q,r,t,u,v,w,x,y,z,A){e=class extends w(y(u.TiledLayerView3D(t.LayerView3D(x)))){constructor(){super(...arguments);this.type="imagery-tile-3d";this.isAlignedMapTile=!0}initialize(){this.layer.increaseRasterJobHandlerUsage();null==this.fullExtent&&this.addResolvingPromise(Promise.reject(new n("layerview:spatial-reference-incompatible","The layer extent cannot be projected to the view's spatial reference",{layer:this.layer})));const a=p.whenOnce(()=>this.view?.basemapTerrain?.tilingSchemeLocked).then(()=>
{const b=this.view.basemapTerrain.tilingScheme,d=this.layer.tileInfo,c=["png","png24","png32","jpg","mixed"].includes(d.format)&&b.compatibleWith(d);this.tileInfo=(this.isAlignedMapTile=c)?d:b.toTileInfo();this._updatingHandles.add(()=>[this.layer.renderer,this.layer.interpolation,this.layer.bandIds,this.layer.multidimensionalDefinition,this.layer.multidimensionalSubset,this.layer.rasterFunction,this.timeExtent],()=>this.refresh())});this.addResolvingPromise(a)}destroy(){this.layer.decreaseRasterJobHandlerUsage();
this.view=null}get _blankTile(){const a=document.createElement("canvas"),b=a.getContext("2d"),[d,c]=this.tileInfo.size;a.width=d;a.height=c;b.clearRect(0,0,d,c);return b.getImageData(0,0,d,c)}get imageFormatIsOpaque(){return"jpg"===this.layer.tileInfo.format}get hasMixedImageFormats(){return"mixed"===this.layer.tileInfo.format}get dataLevelRange(){var a=this.layer.tileInfo;const b=this.tileInfo.lodAt(0)?.scale;a=this.layer.tileInfo.lodAt(a.lods.length-1)?.scale;return this.levelRangeFromScaleRange(b,
a)}_getfullExtent(){return r.projectDatasetExtent(this.layer.serviceRasterInfo,null!=this.view.basemapTerrain?.spatialReference?this.view.basemapTerrain.spatialReference:this.view.spatialReference)}async fetchTile(a,b,d,c){const l=this.tileInfo,m=this._canSymbolizeInWebGL();var f={tileInfo:l,requestRawData:m,signal:c.signal,timeExtent:this.timeExtent,requestAsImageElement:this.isAlignedMapTile,noClip:!1};({layer:c}=this);f=await c.fetchTile(a,b,d,f);if(f instanceof HTMLImageElement)return f;let k=
f?.pixelBlock;if(null==k||!m&&(k=await c.applyRenderer(f),null==k))return this._blankTile;b=new v.RasterTile([a,b,d],k,l.size[0],l.size[1]);m?(b.symbolizerRenderer=c.symbolizer.rendererJSON,b.symbolizerParameters=c.symbolizer.generateWebGLParameters(this._getSymbolizerOptions(a)),b.transformGrid=f.transformGrid,b.bandIds=c.bandIds):(b.isRendereredSource=!0,b.bandIds=null);b.interpolation=c.interpolation;return b}_getSymbolizerOptions(a){a=this.tileInfo.lodAt(a).resolution;return{pixelBlock:null,isGCS:null!=
this.view.basemapTerrain?.spatialReference?this.view.basemapTerrain.spatialReference.isGeographic:this.view.spatialReference.isGeographic,resolution:{x:a,y:a},bandIds:this.layer.bandIds}}ensureSymbolizerParameters(a){this._canSymbolizeInWebGL()&&JSON.stringify(a.symbolizerRenderer)!==JSON.stringify(this.layer.symbolizer.rendererJSON)&&(a.symbolizerParameters=this.layer.symbolizer.generateWebGLParameters(this._getSymbolizerOptions(a.lij[0])))}createFetchPopupFeaturesQueryGeometry(a,b){return z.createQueryGeometry(a,
b,this.view)}refresh(){this.emit("data-changed")}async doRefresh(){this.suspended||this.emit("data-changed")}_canSymbolizeInWebGL(){var a=A.getWebGLCapabilities();const {symbolizer:b}=this.layer,d=b.lookup?.colormapLut?.indexedColormap,c=!!this.layer.rasterFunction?.hasClipFunction;a=d&&d.length>4*(a.maxTextureSize||4906);return b.canRenderInWebGL&&!a&&!c}};g.__decorate([h.property({readOnly:!0})],e.prototype,"_blankTile",null);g.__decorate([h.property({readOnly:!0})],e.prototype,"imageFormatIsOpaque",
null);g.__decorate([h.property({readOnly:!0})],e.prototype,"hasMixedImageFormats",null);g.__decorate([h.property({readOnly:!0})],e.prototype,"dataLevelRange",null);return e=g.__decorate([q.subclass("esri.views.3d.layers.ImageryTileLayerView3D")],e)});