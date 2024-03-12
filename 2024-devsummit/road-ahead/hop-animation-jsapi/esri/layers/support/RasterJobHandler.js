// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["../../core/Error","../../core/workers/workers","./PixelBlock"],function(d,h,e){class k{constructor(){this._workerThread=null;this._destroyed=!1}async initialize(){const a=await h.open("RasterWorker");this._destroyed?a.close():this._workerThread=a}destroy(){this._destroyed=!0;this._workerThread&&(this._workerThread.close(),this._workerThread=null)}async convertVectorFieldData(a,b){if(!this._workerThread)throw new d("raster-jobhandler:no-connection","no available worker connection");return(a=
await this._workerThread.invoke("convertVectorFieldData",{pixelBlock:a.pixelBlock.toJSON(),type:a.dataType},b))?new e(a):null}computeStatisticsHistograms(a,b){if(!this._workerThread)throw new d("raster-jobhandler:no-connection","no available worker connection");return this._workerThread.invoke("computeStatisticsHistograms",{pixelBlock:a.pixelBlock.toJSON()},b)}async decode(a,b){if(!this._workerThread)throw new d("raster-jobhandler:no-connection","no available worker connection");return(a=await this._workerThread.invoke("decode",
a,b))?new e(a):null}async symbolize(a,b){if(!this._workerThread)throw new d("raster-jobhandler:no-connection","no available worker connection");a={extent:a.extent?.toJSON(),pixelBlock:a.pixelBlock?.toJSON(),simpleStretchParams:a.simpleStretchParams,bandIds:a.bandIds};return(b=await this._workerThread.invoke("symbolize",a,b))?new e(b):null}async updateSymbolizer(a,b){if(!this._workerThread)throw new d("raster-jobhandler:no-connection","no available worker connection");const c=a?.rendererJSON?.histograms;
await Promise.all(this._workerThread.broadcast("updateSymbolizer",{symbolizerJSON:a.toJSON(),histograms:c},b))}async updateRasterFunction(a,b){if(!this._workerThread)throw new d("raster-jobhandler:no-connection","no available worker connection");await Promise.all(this._workerThread.broadcast("updateRasterFunction",{rasterFunctionJSON:a.toJSON()},b))}async process(a,b){if(!this._workerThread)throw new d("raster-jobhandler:no-connection","no available worker connection");return(a=await this._workerThread.invoke("process",
{extent:a.extent?.toJSON(),primaryPixelSizes:a.primaryPixelSizes?.map(c=>null!=c?c.toJSON():null),primaryPixelBlocks:a.primaryPixelBlocks.map(c=>null!=c?c.toJSON():null),primaryRasterIds:a.primaryRasterIds},b))?new e(a):null}async stretch(a,b){if(!this._workerThread)throw new d("raster-jobhandler:no-connection","no available worker connection");if(!a?.pixelBlock)return null;a={srcPixelBlock:a.pixelBlock.toJSON(),stretchParams:a.stretchParams};return(b=await this._workerThread.invoke("stretch",a,b))?
new e(b):null}async split(a,b){if(!this._workerThread)throw new d("raster-jobhandler:no-connection","no available worker connection");if(!a?.pixelBlock)return null;a={srcPixelBlock:a.pixelBlock.toJSON(),tileSize:a.tileSize,maximumPyramidLevel:a.maximumPyramidLevel,useBilinear:a.useBilinear};const c=await this._workerThread.invoke("split",a,b);c&&c.forEach((g,f)=>{c.set(f,g?e.fromJSON(g):null)});return c}async clipTile(a,b){if(!this._workerThread)throw new d("raster-jobhandler:no-connection","no available worker connection");
if(!a?.pixelBlock)return null;a={...a,pixelBlock:a.pixelBlock.toJSON()};return(b=await this._workerThread.invoke("clipTile",a,b))?e.fromJSON(b):null}async estimateStatisticsHistograms(a,b){if(!this._workerThread)throw new d("raster-jobhandler:no-connection","no available worker connection");if(!a?.pixelBlock)return null;a={srcPixelBlock:a.pixelBlock.toJSON()};return await this._workerThread.invoke("estimateStatisticsHistograms",a,b)}async mosaicAndTransform(a,b){if(!this._workerThread)throw new d("raster-jobhandler:no-connection",
"no available worker connection");if(!a?.srcPixelBlocks?.length)return{pixelBlock:null};a={...a,srcPixelBlocks:a.srcPixelBlocks.map(c=>null!=c?c.toJSON():null)};b=await this._workerThread.invoke("mosaicAndTransform",a,b);return{pixelBlock:b.pixelBlock?new e(b.pixelBlock):null,localNorthDirections:b.localNorthDirections}}async createFlowMesh(a,b){if(!this._workerThread)throw new d("raster-jobhandler:no-connection","no available worker connection");const c={buffer:a.flowData.data.buffer,maskBuffer:a.flowData.mask.buffer,
width:a.flowData.width,height:a.flowData.height},{meshType:g,simulationSettings:f}=a;a=await this._workerThread.invoke("createFlowMesh",{meshType:g,flowData:c,simulationSettings:f},{...b,transferList:[c.buffer,c.maskBuffer]});return{vertexData:new Float32Array(a.vertexBuffer),indexData:new Uint32Array(a.indexBuffer)}}getProjectionOffsetGrid(a,b){if(!this._workerThread)throw new d("raster-jobhandler:no-connection","no available worker connection");const c=null!=a.datumTransformation?a.datumTransformation.steps.map(f=>
({wkid:f.wkid,wkt:f.wkt,isInverse:f.isInverse})):null,g=null!=a.rasterTransform?a.rasterTransform.toJSON():null;a={projectedExtent:a.projectedExtent.toJSON(),srcBufferExtent:a.srcBufferExtent.toJSON(),pixelSize:a.pixelSize,hasWrapAround:a.hasWrapAround,spacing:a.spacing,datumTransformationSteps:c,rasterTransform:g,isAdaptive:a.isAdaptive,includeGCSGrid:a.includeGCSGrid};return this._workerThread.invoke("getProjectionOffsetGrid",a,b)}}return k});