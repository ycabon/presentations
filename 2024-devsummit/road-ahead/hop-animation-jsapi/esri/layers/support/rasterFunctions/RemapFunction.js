// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../core/mathUtils ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/Logger ../../../core/RandomLCG ../../../core/accessorSupport/decorators/subclass ../rasterFormats/pixelRangeUtils ./BaseRasterFunction ./pixelUtils ./RemapFunctionArguments".split(" "),function(q,t,r,m,y,z,u,v,w,h,x){m=class extends w{constructor(){super(...arguments);this.functionName="Remap";this.functionArguments=null;this.rasterArgumentNames=["raster"];this.lookup=
null}_bindSourceRasters(){const b=this.sourceRasterInfos[0].clone(),{pixelType:e}=b;this.outputPixelType=this._getOutputPixelType(e);b.pixelType=this.outputPixelType;b.colormap=null;b.histograms=null;b.bandCount=1;b.attributeTable=null;const {statistics:f}=b,{allowUnmatched:d,outputValues:a,inputRanges:k,noDataRanges:l,isLastInputRangeInclusive:c}=this.functionArguments;if(null!=f&&f.length&&a?.length)if(d){var g=Math.min.apply(null,[...a,f[0].min]),n=Math.max.apply(null,[...a,f[0].max]);b.statistics=
[{...f[0],min:g,max:n}]}else{n=g=a[0];for(let p=0;p<a.length;p++)g=g>a[p]?a[p]:g,n=n>a[p]?n:a[p];b.statistics=[{...f[0],min:g,max:n}]}this.rasterInfo=b;this.lookup=d?null:h.createRemapLUT({srcPixelType:e,inputRanges:k,outputValues:a,noDataRanges:l,allowUnmatched:d,isLastInputRangeInclusive:c,outputPixelType:this.outputPixelType});return{success:!0,supportsGPU:(!a||a.length<=h.maxMapSizeGpu)&&(!l||l.length<=h.maxMapSizeGpu)}}_processPixels(b){b=b.pixelBlocks?.[0];if(null==b)return null;const {lookup:e,
outputPixelType:f}=this;if(e){const g=h.lookupPixels(b,{lut:[e.lut],offset:e.offset,outputPixelType:f});null!=g&&e.mask&&(g.mask=h.lookupBandValues(b.pixels[0],b.mask,e.mask,e.offset,"u8"));return g}const {inputRanges:d,outputValues:a,noDataRanges:k,allowUnmatched:l,isLastInputRangeInclusive:c}=this.functionArguments;return h.remap(b,{inputRanges:d,outputValues:a,noDataRanges:k,outputPixelType:f,allowUnmatched:l,isLastInputRangeInclusive:c})}_getWebGLParameters(){const {allowUnmatched:b,noDataRanges:e,
isLastInputRangeInclusive:f}=this.functionArguments,d=new Float32Array(3*h.maxMapSizeGpu);var a=this.functionArguments.inputRanges??[],k=this.functionArguments.outputValues??[];const l=k.length;for(let c=0;c<h.maxMapSizeGpu;c++)if(d[3*c]=a[2*c]??t.numberMaxFloat32-1,d[3*c+1]=a[2*c+1]??t.numberMaxFloat32,d[3*c+2]=k[c]??0,c<l&&(0<c&&(d[3*c]-=1E-5),c<l-1||!f))d[3*c+1]-=1E-5;a=new Float32Array(2*h.maxMapSizeGpu);a.fill(t.numberMaxFloat32);e?.length&&a.set(e);k=v.getPixelValueRange(this.outputPixelType);
return{allowUnmatched:b,rangeMaps:d,noDataRanges:a,clampRange:k}}};q.__decorate([r.property({json:{write:!0,name:"rasterFunction"}})],m.prototype,"functionName",void 0);q.__decorate([r.property({type:x,json:{write:!0,name:"rasterFunctionArguments"}})],m.prototype,"functionArguments",void 0);q.__decorate([r.property()],m.prototype,"rasterArgumentNames",void 0);q.__decorate([r.property({json:{write:!0}})],m.prototype,"lookup",void 0);return m=q.__decorate([u.subclass("esri.layers.support.rasterFunctions.RemapFunction")],
m)});