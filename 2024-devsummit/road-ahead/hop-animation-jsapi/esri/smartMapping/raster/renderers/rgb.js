// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../core/Error","../../../renderers/support/rasterRendererHelper","../support/utils"],function(f,g,e,p){async function q(a){a=await p.processRasterRendererParameters(a);const {rasterInfo:b}=a.layer;if(1===b.bandCount)throw new g("raster-rgb-renderer:not-supported","Only multiband image is supported");var {rgbBandIds:c}=a;if(c&&3!==c.length)throw new g("raster-rgb-renderer:invalid-parameters","rgb band ids must have exactly three 0-based band indices");c||(c=e.getDefaultBandCombination(b),
a.rgbBandIds=c&&3>c.length&&2===b.bandCount?[0,1,1]:c);return a}f.createRenderer=async function(a){a=await q(a);var b=a.layer;const {rasterInfo:c}=b,{rgbBandIds:h}=a,k={bandIds:h,stretchType:a.stretchType,includeStatisticsInStretch:a.includeStatisticsInStretch};let d=e.createStretchRenderer(c,k);a.estimateStatistics&&d.dynamicRangeAdjustment&&(await b.updateRasterInfoWithEstimatedStats({rasterFunction:a.rasterFunction,signal:a.signal}),d=e.createStretchRenderer(c,k));b=d;const {gamma:l,useGamma:m,
dynamicRangeAdjustment:n}=a;3===l?.length&&(b.gamma=l);null!=m&&(b.useGamma=m);null!=n&&(b.dynamicRangeAdjustment=n);return{renderer:d,rgbBandIds:h}};Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});