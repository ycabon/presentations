import { gk as U, eF as u, c6 as z, U as U$1, gl as R, gm as o, gn as A, go as c, gp as U$2 } from './_virtual:index-325c676c.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class RasterWorker{async decode(r){const t=await U(r.data,r.options);return t&&t.toJSON()}symbolize(o){o.pixelBlock=u.fromJSON(o.pixelBlock),o.extent=o.extent?z.fromJSON(o.extent):null;const s=this.symbolizer.symbolize(o);return U$1(s&&s.toJSON())}async updateSymbolizer(r){var t;this.symbolizer=R.fromJSON(r.symbolizerJSON),r.histograms&&"rasterStretch"===(null==(t=this.symbolizer)?void 0:t.rendererJSON.type)&&(this.symbolizer.rendererJSON.histograms=r.histograms);}stretch(t){const o=this.symbolizer.simpleStretch(u.fromJSON(t.srcPixelBlock),t.stretchParams);return U$1(o&&o.toJSON())}estimateStatisticsHistograms(t){const o$1=o(u.fromJSON(t.srcPixelBlock));return U$1(o$1)}split(t){const o=A(u.fromJSON(t.srcPixelBlock),t.tileSize,t.maximumPyramidLevel);return o&&o.forEach(((r,t)=>{o.set(t,null==r?void 0:r.toJSON());})),U$1(o)}async mosaicAndTransform(r){const t=r.srcPixelBlocks.map((r=>r?new u(r):null)),o=c(t,r.srcMosaicSize);if(!r.coefs)return o&&o.toJSON();const s=U$2(o,r.destDimension,r.coefs,r.sampleSpacing,r.interpolation);return s&&s.toJSON()}}

export default RasterWorker;
