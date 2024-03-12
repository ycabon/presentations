// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../../../../chunks/tslib.es6 ../../../../Graphic ../../../../core/Accessor ../../../../core/Logger ../../../../core/promiseUtils ../../../../core/accessorSupport/decorators/property ../../../../core/has ../../../../core/RandomLCG ../../../../core/accessorSupport/decorators/subclass ../../../../layers/support/rasterFunctions/pixelUtils ../../engine/BitmapContainer ../../engine/Container ../../engine/ImageryBitmapSource ../support/ExportStrategy".split(" "),function(f,l,d,h,k,g,v,w,m,n,p,q,
r,t){d=class extends d{constructor(){super(...arguments);this.attached=!1;this.container=new q.Container;this.updateRequested=!1;this.type="imagery";this._bitmapView=new p.BitmapContainer}destroy(){this.attached&&(this.detach(),this.attached=!1);this.updateRequested=!1}get updating(){return!this.attached||this.isUpdating()}update(a){this.strategy.update(a).catch(b=>{k.isAbortError(b)||h.getLogger(this).error(b)})}hitTest(a){return new l({attributes:{},geometry:a.clone(),layer:this.layer})}attach(){this.container.addChild(this._bitmapView);
this.strategy=new t({container:this._bitmapView,imageNormalizationSupported:10<=this.layer.version,imageMaxHeight:10.1<=this.layer.version?this.layer.imageMaxHeight:2048,imageMaxWidth:10.1<=this.layer.version?this.layer.imageMaxWidth:2048,fetchSource:this._fetchImage.bind(this),requestUpdate:()=>this.requestUpdate()})}detach(){this.strategy.destroy();this._bitmapView.removeAllChildren();this.container.removeAllChildren();this.updateRequested=!1}redraw(){this.strategy.updateExports(async a=>{const {source:b}=
a;if(b&&!(b instanceof ImageBitmap)){var e=await this.layer.applyRenderer({extent:b.extent,pixelBlock:b.originalPixelBlock??b.pixelBlock});b.filter=c=>this.layer.pixelFilter?this.layer.applyFilter(c):{...e,extent:b.extent}}}).catch(a=>{k.isAbortError(a)||h.getLogger(this).error(a)})}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate())}isUpdating(){return this.strategy.updating||this.updateRequested}getPixelData(){if(this.updating)return null;var a=this.strategy.bitmaps;
if(1===a.length&&a[0].source)return{extent:a[0].source.extent,pixelBlock:a[0].source.originalPixelBlock};if(1<a.length){const b=this.view.extent;a=a.map(e=>e.source).filter(e=>e.extent&&e.extent.intersects(b)).map(e=>({extent:e.extent,pixelBlock:e.originalPixelBlock}));a=n.mosaicPixelData(a,b);return null!=a?{extent:a.extent,pixelBlock:a.pixelBlock}:null}return null}async _fetchImage(a,b,e,c){c=c||{};c.timeExtent=this.timeExtent;c.requestAsImageElement=!0;c.returnImageBitmap=!0;a=await this.layer.fetchImage(a,
b,e,c);if(a.imageBitmap)return a.imageBitmap;c=await this.layer.applyRenderer(a.pixelData,{signal:c.signal});c=new r(c.pixelBlock,c.extent?.clone(),a.pixelData.pixelBlock);c.filter=u=>this.layer.applyFilter(u);return c}};f.__decorate([g.property()],d.prototype,"attached",void 0);f.__decorate([g.property()],d.prototype,"container",void 0);f.__decorate([g.property()],d.prototype,"layer",void 0);f.__decorate([g.property()],d.prototype,"strategy",void 0);f.__decorate([g.property()],d.prototype,"timeExtent",
void 0);f.__decorate([g.property()],d.prototype,"view",void 0);f.__decorate([g.property()],d.prototype,"updateRequested",void 0);f.__decorate([g.property()],d.prototype,"updating",null);f.__decorate([g.property()],d.prototype,"type",void 0);return d=f.__decorate([m.subclass("esri.views.2d.layers.imagery.ImageryView2D")],d)});