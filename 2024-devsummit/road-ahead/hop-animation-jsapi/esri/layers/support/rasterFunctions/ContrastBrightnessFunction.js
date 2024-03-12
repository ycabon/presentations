// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/Logger ../../../core/RandomLCG ../../../core/accessorSupport/decorators/subclass ./BaseRasterFunction ./ContrastBrightnessFunctionArguments ./pixelUtils ./stretchUtils".split(" "),function(c,d,b,n,p,f,g,h,k,l){b=class extends g{constructor(){super(...arguments);this.functionName="ContrastBrightness";this.functionArguments=null;this.rasterArgumentNames=["raster"];this.lookup=null}_bindSourceRasters(){var {sourceRasterInfos:a}=
this;a=a[0];if("u8"!==a.pixelType)return{success:!1,supportsGPU:!1,error:"Only unsigned 8 bit raster is supported by ContrastBrightness function."};this.outputPixelType=this._getOutputPixelType("u8");a=a.clone();this._removeStatsHistColormapVAT(a);this.rasterInfo=a;const {contrastOffset:e,brightnessOffset:m}=this.functionArguments;this.lookup=l.createContrastBrightnessLUT(e,m);return{success:!0,supportsGPU:!0}}_processPixels(a){a=a.pixelBlocks?.[0];return null==a?null:k.lookupPixels(a,{lut:a.pixels.map(()=>
this.lookup),offset:0,outputPixelType:"u8"})}_getWebGLParameters(){const {contrastOffset:a,brightnessOffset:e}=this.functionArguments;return{contrastOffset:a,brightnessOffset:e}}};c.__decorate([d.property({json:{write:!0,name:"rasterFunction"}})],b.prototype,"functionName",void 0);c.__decorate([d.property({type:h,json:{write:!0,name:"rasterFunctionArguments"}})],b.prototype,"functionArguments",void 0);c.__decorate([d.property()],b.prototype,"rasterArgumentNames",void 0);c.__decorate([d.property({json:{write:!0}})],
b.prototype,"lookup",void 0);return b=c.__decorate([f.subclass("esri.layers.support.rasterFunctions.ContrastBrightnessFunction")],b)});