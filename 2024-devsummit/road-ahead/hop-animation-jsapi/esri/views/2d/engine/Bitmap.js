// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../core/promiseUtils ../../../core/libs/gl-matrix-2/math/mat3 ../../../core/libs/gl-matrix-2/factories/mat3f32 ../../../core/libs/gl-matrix-2/factories/vec2f32 ./DisplayObject ./ImageryBitmapSource ../../webgl/enums ../../webgl/Texture ../../webgl/TextureDescriptor".split(" "),function(h,k,e,r,l,t,u,m,v,w){function p(a){return a&&"render"in a}function q(a){const b=document.createElement("canvas");b.width=a.width;b.height=a.height;a.render(b.getContext("2d"));return b}class x extends t.DisplayObject{constructor(a=
null,b=!1){super();this.blendFunction="standard";this._sourceHeight=this._sourceWidth=0;this._textureInvalidated=!1;this._texture=null;this.stencilRef=0;this.coordScale=[1,1];this._height=void 0;this.pixelRatio=1;this.rotation=this.resolution=0;this._source=null;this._width=void 0;this.y=this.x=0;this.immutable=b;this.source=a;this.requestRender=this.requestRender.bind(this)}destroy(){this._texture&&(this._texture.dispose(),this._texture=null);null!=this._uploadStatus&&(this._uploadStatus.controller.abort(),
this._uploadStatus=null)}get isSourceScaled(){return this.width!==this._sourceWidth||this.height!==this._sourceHeight}get height(){return void 0!==this._height?this._height:this._sourceHeight}set height(a){this._height=a}get source(){return this._source}set source(a){if(null!=a||null!=this._source)this._source=a,this.invalidateTexture(),this.requestRender()}get width(){return void 0!==this._width?this._width:this._sourceWidth}set width(a){this._width=a}beforeRender(a){super.beforeRender(a);this.updateTexture(a)}async setSourceAsync(a,
b){null!=this._uploadStatus&&this._uploadStatus.controller.abort();const c=new AbortController,f=k.createResolver();k.onAbortOrThrow(b,()=>c.abort());k.onAbortOrThrow(c,d=>f.reject(d));this._uploadStatus={controller:c,resolver:f};this.source=a;return f.promise}invalidateTexture(){this._textureInvalidated||(this._textureInvalidated=!0,this._source instanceof HTMLImageElement?(this._sourceHeight=this._source.naturalHeight,this._sourceWidth=this._source.naturalWidth):this._source&&(this._sourceHeight=
this._source.height,this._sourceWidth=this._source.width))}updateTransitionProperties(a,b){64<=a&&(this.inFadeTransition=this.fadeTransitionEnabled=!1);super.updateTransitionProperties(a,b)}setTransform(a){const b=e.identity(this.transforms.displayViewScreenMat3),[c,f]=a.toScreenNoRotation([0,0],[this.x,this.y]);var d=this.resolution/this.pixelRatio/a.resolution;const g=d*this.width;d*=this.height;const n=Math.PI*this.rotation/180;e.translate(b,b,l.fromValues(c,f));e.translate(b,b,l.fromValues(g/
2,d/2));e.rotate(b,b,-n);e.translate(b,b,l.fromValues(-g/2,-d/2));e.scaleByVec2(b,b,l.fromValues(g,d));e.multiply(this.transforms.displayViewScreenMat3,a.displayViewMat3,b)}setSamplingProfile(a){this._texture&&(a.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(a.samplingMode))}bind(a,b){this._texture&&a.bindTexture(this._texture,b)}async updateTexture({context:a,painter:b}){if(this._textureInvalidated)if(this._textureInvalidated=!1,this._texture||
(this._texture=this._createTexture(a)),this.source){this._texture.resize(this._sourceWidth,this._sourceHeight);a=this.source;a=p(a)?a instanceof u?a.getRenderedRasterPixels()?.renderedRasterPixels:q(a):a;try{if(null!=this._uploadStatus){const {controller:c,resolver:f}=this._uploadStatus,d={signal:c.signal},{width:g,height:n}=this;await b.textureUploadManager.enqueueTextureUpdate({data:a,texture:this._texture,width:g,height:n},d);f.resolve();this._uploadStatus=null}else this._texture.setData(a);this.ready()}catch(c){k.throwIfNotAbortError(c)}}else this._texture.setData(null)}onDetach(){this.destroy()}_createTransforms(){return{displayViewScreenMat3:r.create()}}_createTexture(a){const b=
this.immutable,c=new w.TextureDescriptor;c.internalFormat=b?m.SizedPixelFormat.RGBA8:m.PixelFormat.RGBA;c.wrapMode=m.TextureWrapMode.CLAMP_TO_EDGE;c.isImmutable=b;c.width=this._sourceWidth;c.height=this._sourceHeight;return new v.Texture(a,c)}}h.Bitmap=x;h.isImageSource=p;h.rasterize=q;Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});