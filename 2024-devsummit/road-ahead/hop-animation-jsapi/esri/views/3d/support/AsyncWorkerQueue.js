// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../webgl-engine/lib/Util"],function(d,f){class g{constructor(a){this.client=a;this._cancelled=!1;this.duration=this.size=0}}class h{constructor(a){this.typeWorkerQuota=a;this.tasks=[];this.numWorkers=0;this.statistics=new k}}class k{constructor(){this.speed=this.duration=this.size=this.requests=0}}class l{constructor(a,b,c,e){this._workerFunc=a;this._callbackFunc=b;this._maxTotalNumWorkers=c;this._totalNumWorkers=0;this._clients=e.map(m=>new h(m))}destroy(){this._clients.length=
0}hasQuota(a){return(a=this._clients[a])?this._totalNumWorkers<this._maxTotalNumWorkers||a.numWorkers+a.tasks.length<a.typeWorkerQuota:!1}push(a){const b=this._clients[a.client];b&&(this._totalNumWorkers<this._maxTotalNumWorkers?(b.numWorkers++,this._totalNumWorkers++,this._workerFunc(a,(c,e)=>this._taskCallback(c,e))):b.tasks.push(a))}cancel(a){this._taskFinished(a);a._cancelled=!0}_taskFinished(a){const b=this._clients[a.client];this._totalNumWorkers--;b&&(b.numWorkers--,b.statistics.requests++,
b.statistics.size+=a.size||0,b.statistics.duration+=a.duration||0,b.statistics.speed=0<b.statistics.duration?b.statistics.size/b.statistics.duration:0,f.assert(0<=b.numWorkers));this._next()}_next(){for(const a of this._clients)if(a&&a.numWorkers<a.typeWorkerQuota&&this._processQueue(a))return;for(const a of this._clients)if(a&&this._processQueue(a))break}_processQueue(a){for(;0<a.tasks.length;)if(this._workerFunc(a.tasks.shift(),(b,c)=>this._taskCallback(b,c)))return a.numWorkers++,this._totalNumWorkers++,
!0;return!1}_taskCallback(a,b){a._cancelled||(this._callbackFunc(a,b),this._taskFinished(a))}getStatsForType(a){return(a=this._clients[a])?{quota:a.typeWorkerQuota,workers:a.numWorkers,queueSize:a.tasks.length,requestStats:a.statistics}:null}get test(){const a=this;return{set workerFunc(b){a._workerFunc=b}}}}d.AsyncWorkerQueue=l;d.BaseTask=g;Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});