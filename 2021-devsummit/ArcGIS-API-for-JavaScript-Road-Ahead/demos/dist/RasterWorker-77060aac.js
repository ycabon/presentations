import { bz as M } from './_virtual_index-634cbc09.js';
import { u, r, C, d, T as T$1 } from './pixelUtils-da068947.js';
import { T, N } from './RasterSymbolizer-9d8daf58.js';
import './_commonjsHelpers-3f70742c.js';
import './LercCodec-5a1512e9.js';
import './colorUtils-9f723871.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class n{async decode(e){const r=await T(e.data,e.options);return r&&r.toJSON()}symbolize(o){o.pixelBlock=u.fromJSON(o.pixelBlock),o.extent=o.extent?M.fromJSON(o.extent):null;const s=this.symbolizer.symbolize(o);return Promise.resolve(s&&s.toJSON())}async updateSymbolizer(e){var r;this.symbolizer=N.fromJSON(e.symbolizerJSON),e.histograms&&"rasterStretch"===(null==(r=this.symbolizer)?void 0:r.rendererJSON.type)&&(this.symbolizer.rendererJSON.histograms=e.histograms);}stretch(e){const o=this.symbolizer.simpleStretch(u.fromJSON(e.srcPixelBlock),e.stretchParams);return Promise.resolve(o&&o.toJSON())}estimateStatisticsHistograms(e){const o=r(u.fromJSON(e.srcPixelBlock));return Promise.resolve(o)}split(e){const o=C(u.fromJSON(e.srcPixelBlock),e.tileSize,e.maximumPyramidLevel);return o&&o.forEach(((e,r)=>{o.set(r,null==e?void 0:e.toJSON());})),Promise.resolve(o)}async mosaicAndTransform(e){const o=e.srcPixelBlocks.map((e=>e?new u(e):null)),s=d(o,e.srcMosaicSize,null,null,e.alignmentInfo);if(!e.coefs)return s&&s.toJSON();const t=T$1(s,e.destDimension,e.coefs,e.sampleSpacing,e.interpolation);return t&&t.toJSON()}}

export default n;
