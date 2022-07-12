import { G as r, eP as w, e, ly as s } from './_virtual_index-64b818a8.js';
import { u, A, p, T as T$1, C } from './pixelUtils-d970883c.js';
import { O as O$1, T, m } from './RasterSymbolizer-6f387eb1.js';
import { M, k, V } from './rasterProjectionHelper-b669eeb7.js';
import { d, m as m$1, f } from './dataUtils-7eaa3915.js';
import { i } from './utils-8dee73ad.js';
import './colorUtils-d9f4d315.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class O{convertVectorFieldData(e){const t=u.fromJSON(e.pixelBlock),o=d(t,e.type);return Promise.resolve(r(o)&&o.toJSON())}async decode(r){const e=await O$1(r.data,r.options);return e&&e.toJSON()}symbolize(e){e.pixelBlock=u.fromJSON(e.pixelBlock),e.extent=e.extent?w.fromJSON(e.extent):null;const t=this.symbolizer.symbolize(e);return Promise.resolve(r(t)&&t.toJSON())}async updateSymbolizer(r){this.symbolizer=T.fromJSON(r.symbolizerJSON),r.histograms&&"rasterStretch"===this.symbolizer?.rendererJSON.type&&(this.symbolizer.rendererJSON.histograms=r.histograms);}stretch(e){const t=this.symbolizer.simpleStretch(u.fromJSON(e.srcPixelBlock),e.stretchParams);return Promise.resolve(r(t)&&t.toJSON())}estimateStatisticsHistograms(r){const e=m(u.fromJSON(r.srcPixelBlock));return Promise.resolve(e)}split(r){const e=A(u.fromJSON(r.srcPixelBlock),r.tileSize,r.maximumPyramidLevel);return e&&e.forEach(((r,t)=>{e.set(t,r?.toJSON());})),Promise.resolve(e)}async mosaicAndTransform(r){const t=r.srcPixelBlocks.map((r=>r?new u(r):null)),o=p(t,r.srcMosaicSize,{blockWidths:r.blockWidths,alignmentInfo:r.alignmentInfo,clipOffset:r.clipOffset,clipSize:r.clipSize});let i,l=o;return r.coefs&&(l=T$1(o,r.destDimension,r.coefs,r.sampleSpacing,r.interpolation)),r.projectDirections&&r.gcsGrid&&(i=C(r.destDimension,r.gcsGrid),l=e(m$1(l,r.isUV?"vector-uv":"vector-magdir",i))),{pixelBlock:l?.toJSON(),localNorthDirections:i}}async createFlowMesh(r,e){const t={data:new Float32Array(r.flowData.buffer),mask:new Uint8Array(r.flowData.maskBuffer),width:r.flowData.width,height:r.flowData.height},{vertexData:s,indexData:o}=await f(r.meshType,r.simulationSettings,t,e.signal);return {result:{vertexBuffer:s.buffer,indexBuffer:o.buffer},transferList:[s.buffer,o.buffer]}}async getProjectionOffsetGrid(r){const e=w.fromJSON(r.projectedExtent),s$1=w.fromJSON(r.srcBufferExtent);let o=null;r.datumTransformationSteps&&(o=new s({steps:r.datumTransformationSteps})),(r.includeGCSGrid||M(e.spatialReference,s$1.spatialReference,o))&&await k();const i$1=r.rasterTransform?i(r.rasterTransform):null;return V({...r,projectedExtent:e,srcBufferExtent:s$1,datumTransformation:o,rasterTransform:i$1})}}

export { O as default };
