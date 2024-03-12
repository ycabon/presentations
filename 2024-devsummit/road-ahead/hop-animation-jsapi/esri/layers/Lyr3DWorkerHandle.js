// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../core/workers/WorkerHandle"],function(a,b){class c extends b.WorkerHandle{constructor(d){super("Lyr3DWorker","process",{process:e=>e.inputs},d,{hasInitialize:!0})}destroyWasm(){return this.broadcast({},"destroyWasm")}}a.Lyr3DWorkerHandle=c;Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});