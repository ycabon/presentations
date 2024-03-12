// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../core/workers/WorkerHandle"],function(a,b){class c extends b.WorkerHandle{constructor(d){super("SceneLayerWorker","dracoDecompressPointCloudData",{dracoDecompressPointCloudData:e=>[e.geometryBuffer]},d,{hasInitialize:!0})}}a.I3SPointsWorkerHandle=c;Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});