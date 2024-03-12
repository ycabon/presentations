"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[2727,5777],{15173:(e,t,r)=>{r.d(t,{Q:()=>o});var s=r(6540),n=r(89914);class o{constructor(e=(e=>e.values().next().value)){this._peeker=e,this._observable=new n.S,this._items=new Set}get length(){return(0,s.t)(this._observable),this._items.size}clear(){0!==this.length&&(this._items.clear(),this._observable.notify())}last(){if(0===this.length)return;let e;for(e of this._items);return e}peek(){if(0!==this.length)return this._peeker(this._items)}push(e){this.contains(e)||(this._items.add(e),this._observable.notify())}contains(e){return(0,s.t)(this._observable),this._items.has(e)}pop(){if(0===this.length)return;const e=this.peek();return this._items.delete(e),this._observable.notify(),e}popLast(){if(0===this.length)return;const e=this.last();return this._items.delete(e),this._observable.notify(),e}remove(e){this.contains(e)&&(this._items.delete(e),this._observable.notify())}filter(e){const t=this.length;return this._items.forEach((t=>{e(t)||this._items.delete(t)})),t!==this._items.size&&this._observable.notify(),this}*[Symbol.iterator](){(0,s.t)(this._observable),yield*this._items}}},5777:(e,t,r)=>{r.d(t,{c:()=>s,g:()=>n});var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==r.g?r.g:"undefined"!=typeof self?self:{};function n(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}},32727:(e,t,r)=>{r.r(t),r.d(t,{registerFunctions:()=>u});var s=r(94056),n=r(48675),o=r(72256),i=r(73796),a=r(42870);function l(e){return e instanceof i.Z}function c(e,t,r,c){return c(e,t,(async(c,u,h)=>{if(h.length<2)throw new s.A(e,s.E.WrongNumberOfParameters,t);if(null===(h=(0,s.L)(h))[0]&&null===h[1])return!1;if((0,s.y)(h[0])){if(h[1]instanceof i.Z)return new o.S({parentfeatureset:h[0],relation:r,relationGeom:h[1]});if(null===h[1])return new o.E({parentfeatureset:h[0]});throw new s.A(e,s.E.InvalidParameter,t)}if(l(h[0])){if(l(h[1])){switch(r){case"esriSpatialRelEnvelopeIntersects":return(0,a.kK)((0,n.s)(h[0]),(0,n.s)(h[1]));case"esriSpatialRelIntersects":return(0,a.kK)(h[0],h[1]);case"esriSpatialRelContains":return(0,a.r3)(h[0],h[1]);case"esriSpatialRelOverlaps":return(0,a.Nm)(h[0],h[1]);case"esriSpatialRelWithin":return(0,a.uh)(h[0],h[1]);case"esriSpatialRelTouches":return(0,a.W4)(h[0],h[1]);case"esriSpatialRelCrosses":return(0,a.jU)(h[0],h[1])}throw new s.A(e,s.E.InvalidParameter,t)}if((0,s.y)(h[1]))return new o.S({parentfeatureset:h[1],relation:r,relationGeom:h[0]});if(null===h[1])return!1;throw new s.A(e,s.E.InvalidParameter,t)}if(null!==h[0])throw new s.A(e,s.E.InvalidParameter,t);return(0,s.y)(h[1])?new o.E({parentfeatureset:h[1]}):!(h[1]instanceof i.Z||null===h[1])&&void 0}))}function u(e){"async"===e.mode&&(e.functions.intersects=function(t,r){return c(t,r,"esriSpatialRelIntersects",e.standardFunctionAsync)},e.functions.envelopeintersects=function(t,r){return c(t,r,"esriSpatialRelEnvelopeIntersects",e.standardFunctionAsync)},e.signatures.push({name:"envelopeintersects",min:2,max:2}),e.functions.contains=function(t,r){return c(t,r,"esriSpatialRelContains",e.standardFunctionAsync)},e.functions.overlaps=function(t,r){return c(t,r,"esriSpatialRelOverlaps",e.standardFunctionAsync)},e.functions.within=function(t,r){return c(t,r,"esriSpatialRelWithin",e.standardFunctionAsync)},e.functions.touches=function(t,r){return c(t,r,"esriSpatialRelTouches",e.standardFunctionAsync)},e.functions.crosses=function(t,r){return c(t,r,"esriSpatialRelCrosses",e.standardFunctionAsync)},e.functions.relate=function(t,r){return e.standardFunctionAsync(t,r,((e,n,c)=>{if(c=(0,s.L)(c),(0,s.p)(c,3,3,t,r),l(c[0])&&l(c[1]))return(0,a.LV)(c[0],c[1],(0,s.B)(c[2]));if(c[0]instanceof i.Z&&null===c[1])return!1;if(c[1]instanceof i.Z&&null===c[0])return!1;if((0,s.y)(c[0])&&null===c[1])return new o.E({parentfeatureset:c[0]});if((0,s.y)(c[1])&&null===c[0])return new o.E({parentfeatureset:c[1]});if((0,s.y)(c[0])&&c[1]instanceof i.Z)return c[0].relate(c[1],(0,s.B)(c[2]));if((0,s.y)(c[1])&&c[0]instanceof i.Z)return c[1].relate(c[0],(0,s.B)(c[2]));if(null===c[0]&&null===c[1])return!1;throw new s.A(t,s.E.InvalidParameter,r)}))})}r(74569),r(91306),r(76506),r(92143),r(31450),r(21801),r(29768),r(34250),r(66396),r(22723),r(86656),r(60991),r(17533),r(6540),r(91597),r(86787),r(97714),r(2906),r(60947),r(12047),r(21972),r(62062),r(6906),r(50406),r(53785),r(57251),r(73173),r(82058),r(88762),r(32101),r(35132),r(84069),r(44567),r(63685),r(89034),r(98380),r(92482),r(82426),r(72836),r(66106),r(29794),r(92896),r(22781),r(32422),r(97546),r(59465),r(9801),r(53523),r(42911),r(46826),r(45433),r(54732),r(36097),r(33921),r(3482),r(40267),r(53326),r(1709),r(35154),r(14249),r(66284),r(8925),r(76131),r(87239),r(49900),r(81184),r(33101),r(58943),r(67477),r(78533),r(74653),r(91091),r(72274),r(5777),r(65514),r(46987),r(15173),r(89914),r(37453)},46987:(e,t,r)=>{r.d(t,{Z:()=>c,r:()=>l});var s=r(22723),n=r(50406),o=r(15173),i=r(37453);r(60991),r(76506),r(92143),r(31450),r(6540),r(66396),r(89914),r(62062),r(88762),r(32101),r(12047),r(29768),r(21972),r(17533),r(86656),r(91306),r(34250),r(6906);const a=new FinalizationRegistry((e=>{e.close()}));function l(e,t){a.register(e,t,t)}class c{constructor(){this._inUseClients=new Array,this._clients=new Array,this._clientPromises=new Array,this._ongoingJobsQueue=new o.Q}destroy(){this.close()}get closed(){return!this._clients?.length}open(e,t){return new Promise(((r,s)=>{let o=!0;const a=e=>{(0,n.k_)(t.signal),o&&(o=!1,e())};this._clients.length=e.length,this._clientPromises.length=e.length,this._inUseClients.length=e.length;for(let o=0;o<e.length;++o){const l=e[o];(0,n.y8)(l)?this._clientPromises[o]=l.then((e=>(this._clients[o]=new i.default(e,t,this._ongoingJobsQueue),a(r),this._clients[o])),(()=>(a(s),null))):(this._clients[o]=new i.default(l,t,this._ongoingJobsQueue),this._clientPromises[o]=Promise.resolve(this._clients[o]),a(r))}}))}broadcast(e,t,r){const s=new Array(this._clientPromises.length);for(let n=0;n<this._clientPromises.length;++n){const o=this._clientPromises[n];s[n]=o.then((s=>s?.invoke(e,t,r)))}return s}close(){let e;for(;e=this._ongoingJobsQueue.pop();)e.resolver.reject((0,n.zE)(`Worker closing, aborting job calling '${e.methodName}'`));for(const e of this._clientPromises)e.then((e=>e?.close()));this._clients.length=0,this._clientPromises.length=0,this._inUseClients.length=0,a.unregister(this)}invoke(e,t,r){return this.apply(e,[t],r)}apply(e,t,r){const s=(0,n.hh)();this._ongoingJobsQueue.push({methodName:e,data:t,invokeOptions:r,resolver:s});for(let e=0;e<this._clientPromises.length;e++){const t=this._clients[e];t?t.jobAdded():this._clientPromises[e].then((e=>e?.jobAdded()))}return s.promise}createInvokeProxy(e){return(0,i.c)(this,e)}on(e,t){return Promise.all(this._clientPromises).then((()=>(0,s.h)(this._clients.map((r=>r.on(e,t))))))}openPorts(){return new Promise((e=>{const t=new Array(this._clientPromises.length);let r=t.length;for(let s=0;s<this._clientPromises.length;++s)this._clientPromises[s].then((n=>{n&&(t[s]=n.openPort()),0==--r&&e(t)}))}))}get test(){return{numClients:this._clients.length}}}},65514:(e,t,r)=>{r.d(t,{bA:()=>D});var s=r(60991),n=r(76506),o=r(50406),i=r(46987),a=r(37453),l=r(92143),c=r(71252),u=r(82058),h=r(32101),d=r(31450),f=(r(66284),r(88762)),g=r(73173),p=r(6906),m=r(3482);r(22723),r(15173),r(6540),r(66396),r(89914),r(62062),r(12047),r(29768),r(21972),r(17533),r(86656),r(91306),r(34250),r(8925),r(57251),r(76131),r(36097),r(87239);const b={async request(e,t){const r=e.options,s=r.responseType;r.signal=t?.signal,r.responseType="native"===s||"native-request-init"===s?"native-request-init":s&&["blob","json","text"].includes(s)&&(0,h.oh)(e.url)?.after?s:"array-buffer";const n=await(0,u.Z)(e.url,r),o={data:n.data,httpStatus:n.httpStatus,ssl:n.ssl};switch(n.requestOptions?.responseType){case"native-request-init":return delete o.data.signal,o;case"blob":o.data=await o.data.arrayBuffer();break;case"json":o.data=(new TextEncoder).encode(JSON.stringify(o.data)).buffer;break;case"text":o.data=(new TextEncoder).encode(o.data).buffer}return{result:o,transferList:[o.data]}}};let w=null;w=(0,h.hF)((0,g.g)("esri/core/workers/init.js"));const y={};y.baseUrl=(0,h.hF)((0,g.g)("dojo/")),y.packages=[{name:"esri",location:"../esri"}];class k{constructor(){const e=document.createDocumentFragment();["addEventListener","dispatchEvent","removeEventListener"].forEach((t=>{this[t]=(...r)=>e[t](...r)}))}}class v{constructor(){this._dispatcher=new k,this._workerPostMessage({type:a.M.HANDSHAKE})}terminate(){}get onmessage(){return this._onmessageHandler}set onmessage(e){this._onmessageHandler&&this.removeEventListener("message",this._onmessageHandler),this._onmessageHandler=e,e&&this.addEventListener("message",e)}get onmessageerror(){return this._onmessageerrorHandler}set onmessageerror(e){this._onmessageerrorHandler&&this.removeEventListener("messageerror",this._onmessageerrorHandler),this._onmessageerrorHandler=e,e&&this.addEventListener("messageerror",e)}get onerror(){return this._onerrorHandler}set onerror(e){this._onerrorHandler&&this.removeEventListener("error",this._onerrorHandler),this._onerrorHandler=e,e&&this.addEventListener("error",e)}postMessage(e){(0,p.n)((()=>{this._workerMessageHandler(new MessageEvent("message",{data:e}))}))}dispatchEvent(e){return this._dispatcher.dispatchEvent(e)}addEventListener(e,t,r){this._dispatcher.addEventListener(e,t,r)}removeEventListener(e,t,r){this._dispatcher.removeEventListener(e,t,r)}_workerPostMessage(e){(0,p.n)((()=>{this.dispatchEvent(new MessageEvent("message",{data:e}))}))}async _workerMessageHandler(e){const t=(0,a.r)(e);if(t&&t.type===a.M.OPEN){const{modulePath:e,jobId:r}=t;let s=await a.default.loadWorker(e);s||(s=await import(e));const n=a.default.connect(s);this._workerPostMessage({type:a.M.OPENED,jobId:r,data:n})}}}const _=()=>l.L.getLogger("esri.core.workers.workerFactory"),{HANDSHAKE:E}=a.M;let P,S;const A="Failed to create Worker. Fallback to execute module in main thread";async function O(e){return new Promise((t=>{function r(n){const o=(0,a.r)(n);o&&o.type===E&&(e.removeEventListener("message",r),e.removeEventListener("error",s),t(e))}function s(t){t.preventDefault(),e.removeEventListener("message",r),e.removeEventListener("error",s),_().warn("Failed to create Worker. Fallback to execute module in main thread",t),(e=new v).addEventListener("message",r),e.addEventListener("error",s)}e.addEventListener("message",r),e.addEventListener("error",s)}))}let I=0;const{ABORT:R,INVOKE:N,OPEN:C,OPENED:M,RESPONSE:L}=a.M;class j{static async create(e){const t=await async function(){if(!(0,n.h)("esri-workers"))return O(new v);if(!P&&!S)try{const e='let globalId=0;const outgoing=new Map,configuration=JSON.parse("{CONFIGURATION}");self.esriConfig=configuration.esriConfig;const workerPath=self.esriConfig.workers.workerPath,HANDSHAKE=0,OPEN=1,OPENED=2,RESPONSE=3,INVOKE=4,ABORT=5;function createAbortError(){const e=new Error("Aborted");return e.name="AbortError",e}function receiveMessage(e){return e&&e.data?"string"==typeof e.data?JSON.parse(e.data):e.data:null}function invokeStaticMessage(e,o,r){const t=r&&r.signal,n=globalId++;return new Promise(((r,s)=>{if(t){if(t.aborted)return s(createAbortError());t.addEventListener("abort",(()=>{outgoing.get(n)&&(outgoing.delete(n),self.postMessage({type:ABORT,jobId:n}),s(createAbortError()))}))}outgoing.set(n,{resolve:r,reject:s}),self.postMessage({type:INVOKE,jobId:n,methodName:e,abortable:null!=t,data:o})}))}let workerRevisionChecked=!1;function checkWorkerRevision(e){if(!workerRevisionChecked&&e.kernelInfo){workerRevisionChecked=!0;const{revision:o,fullVersion:r}=configuration.kernelInfo,{revision:t,fullVersion:n,version:s}=e.kernelInfo;esriConfig.assetsPath!==esriConfig.defaultAssetsPath&&o!==t&&console.warn(`Version mismatch detected between ArcGIS Maps SDK for JavaScript modules and assets. For more information visit https://bit.ly/3QnsuSo.\\nModules version: ${r}\\nAssets version: ${n??s}\\nAssets path: ${esriConfig.assetsPath}`)}}function messageHandler(e){const o=receiveMessage(e);if(!o)return;const r=o.jobId;switch(o.type){case OPEN:let n;function t(e){const o=n.connect(e);self.postMessage({type:OPENED,jobId:r,data:o},[o])}"function"==typeof define&&define.amd?require([workerPath],(e=>{n=e.default||e,checkWorkerRevision(n),n.loadWorker(o.modulePath).then((e=>e||new Promise((e=>{require([o.modulePath],e)})))).then(t)})):"System"in self&&"function"==typeof System.import?System.import(workerPath).then((e=>(n=e.default,checkWorkerRevision(n),n.loadWorker(o.modulePath)))).then((e=>e||System.import(o.modulePath))).then(t):esriConfig.workers.useDynamicImport?import(workerPath).then((e=>{n=e.default||e,checkWorkerRevision(n),n.loadWorker(o.modulePath).then((e=>e||import(o.modulePath))).then(t)})):(self.RemoteClient||importScripts(workerPath),n=self.RemoteClient.default||self.RemoteClient,checkWorkerRevision(n),n.loadWorker(o.modulePath).then(t));break;case RESPONSE:if(outgoing.has(r)){const s=outgoing.get(r);outgoing.delete(r),o.error?s.reject(JSON.parse(o.error)):s.resolve(o.data)}}}self.dojoConfig=configuration.loaderConfig,esriConfig.workers.loaderUrl&&(self.importScripts(esriConfig.workers.loaderUrl),"function"==typeof require&&"function"==typeof require.config&&require.config(configuration.loaderConfig)),self.addEventListener("message",messageHandler),self.postMessage({type:0});'.split('"{CONFIGURATION}"').join(`'${function(){let e;if(null!=d.default.default){const t={...d.default};delete t.default,e=JSON.parse(JSON.stringify(t))}else e=JSON.parse(JSON.stringify(d.default));e.assetsPath=(0,h.hF)(e.assetsPath),e.defaultAssetsPath=e.defaultAssetsPath?(0,h.hF)(e.defaultAssetsPath):void 0,e.request.interceptors=[],e.log.interceptors=[],e.locale=(0,m.g)(),e.has={"esri-csp-restrictions":(0,n.h)("esri-csp-restrictions"),"esri-2d-debug":!1,"esri-2d-update-debug":(0,n.h)("esri-2d-update-debug"),"esri-2d-log-updating":(0,n.h)("esri-2d-log-updating"),"featurelayer-pbf":(0,n.h)("featurelayer-pbf"),"featurelayer-fast-triangulation-enabled":(0,n.h)("featurelayer-fast-triangulation-enabled"),"featurelayer-simplify-thresholds":(0,n.h)("featurelayer-simplify-thresholds"),"featurelayer-simplify-payload-size-factors":(0,n.h)("featurelayer-simplify-payload-size-factors"),"featurelayer-simplify-mobile-factor":(0,n.h)("featurelayer-simplify-mobile-factor"),"featurelayer-query-max-depth":(0,n.h)("featurelayer-query-max-depth"),"featurelayer-query-pausing-enabled":(0,n.h)("featurelayer-query-pausing-enabled"),"featurelayer-snapshot-enabled":(0,n.h)("featurelayer-snapshot-enabled"),"esri-atomics":(0,n.h)("esri-atomics"),"esri-shared-array-buffer":(0,n.h)("esri-shared-array-buffer"),"esri-tiles-debug":(0,n.h)("esri-tiles-debug"),"esri-workers-arraybuffer-transfer":(0,n.h)("esri-workers-arraybuffer-transfer"),"feature-polyline-generalization-factor":(0,n.h)("feature-polyline-generalization-factor"),"host-webworker":1},e.workers.loaderUrl?e.workers.loaderUrl=(0,h.hF)(e.workers.loaderUrl):w&&(e.workers.loaderUrl=w),e.workers.workerPath?e.workers.workerPath=(0,h.hF)(e.workers.workerPath):e.workers.workerPath="esri/core/workers/RemoteClient",e.workers.useDynamicImport=!1;const t=d.default.workers.loaderConfig,r=function(e){const t={async:e.async,isDebug:e.isDebug,locale:e.locale,baseUrl:e.baseUrl,has:{...e.has},map:{...e.map},packages:e.packages?.concat()||[],paths:{...e.paths}};return e.hasOwnProperty("async")||(t.async=!0),e.hasOwnProperty("isDebug")||(t.isDebug=!1),e.baseUrl||(t.baseUrl=y.baseUrl),y.packages?.forEach((e=>{!function(e,t){for(const r of e)if(r.name===t.name)return;e.push(t)}(t.packages??[],e)})),t}({baseUrl:t?.baseUrl,locale:(0,m.g)(),has:{"csp-restrictions":1,"dojo-test-sniff":0,"host-webworker":1,...t?.has},map:{...t?.map},paths:{...t?.paths},packages:t?.packages||[]}),s={buildDate:f.rh,fullVersion:f.bR,revision:f.LB};return JSON.stringify({esriConfig:e,loaderConfig:r,kernelInfo:s})}()}'`);P=URL.createObjectURL(new Blob([e],{type:"text/javascript"}))}catch(e){S=e||{}}let e;if(P)try{e=new Worker(P,{name:"esri-worker-"+I++})}catch(t){_().warn(A,S),e=new v}else _().warn(A,S),e=new v;return O(e)}();return new j(t,e)}constructor(e,t){this._outJobs=new Map,this._inJobs=new Map,this.worker=e,this.id=t,e.addEventListener("message",this._onMessage.bind(this)),e.addEventListener("error",(e=>{e.preventDefault(),l.L.getLogger("esri.core.workers.WorkerOwner").error(e)}))}terminate(){this.worker.terminate()}async open(e,t={}){const{signal:r}=t,s=(0,a.n)();return new Promise(((t,n)=>{const i={resolve:t,reject:n,abortHandle:(0,o.$F)(r,(()=>{this._outJobs.delete(s),this._post({type:R,jobId:s})}))};this._outJobs.set(s,i),this._post({type:C,jobId:s,modulePath:e})}))}_onMessage(e){const t=(0,a.r)(e);if(t)switch(t.type){case M:this._onOpenedMessage(t);break;case L:this._onResponseMessage(t);break;case R:this._onAbortMessage(t);break;case N:this._onInvokeMessage(t)}}_onAbortMessage(e){const t=this._inJobs,r=e.jobId,s=t.get(r);s&&(s.controller&&s.controller.abort(),t.delete(r))}_onInvokeMessage(e){const{methodName:t,jobId:r,data:s,abortable:n}=e,i=n?new AbortController:null,l=this._inJobs,c=b[t];let u;try{if("function"!=typeof c)throw new TypeError(`${t} is not a function`);u=c.call(null,s,{signal:i?i.signal:null})}catch(e){return void this._post({type:L,jobId:r,error:(0,a.t)(e)})}(0,o.y8)(u)?(l.set(r,{controller:i,promise:u}),u.then((e=>{l.has(r)&&(l.delete(r),this._post({type:L,jobId:r},e))}),(e=>{l.has(r)&&(l.delete(r),e||(e={message:"Error encountered at method"+t}),(0,o.D_)(e)||this._post({type:L,jobId:r,error:(0,a.t)(e||{message:`Error encountered at method ${t}`})}))}))):this._post({type:L,jobId:r},u)}_onOpenedMessage(e){const{jobId:t,data:r}=e,s=this._outJobs.get(t);s&&(this._outJobs.delete(t),(0,c.r)(s.abortHandle),s.resolve(r))}_onResponseMessage(e){const{jobId:t,error:r,data:n}=e,o=this._outJobs.get(t);o&&(this._outJobs.delete(t),(0,c.r)(o.abortHandle),r?o.reject(s.Z.fromJSON(JSON.parse(r))):o.resolve(n))}_post(e,t,r){return(0,a.p)(this.worker,e,t,r)}}const J=(0,n.h)("host-browser")?Math.min(navigator.hardwareConcurrency-1,(0,n.h)("workers-pool-size")):0;let F=(0,n.h)("esri-mobile")?Math.min(J,3):J;F||(F=(0,n.h)("safari")&&(0,n.h)("mac")?7:2);let H=0;const W=[];async function U(e,t){const r=new i.Z,{registryTarget:s,...n}=t;return await r.open(e,n),s&&(0,i.r)(s,r),r}async function D(e,t={}){if("string"!=typeof e)throw new s.Z("workers:undefined-module","modulePath is missing");let r=t.strategy||"distributed";if((0,n.h)("host-webworker")&&!(0,n.h)("esri-workers")&&(r="local"),"local"===r){let r=await a.default.loadWorker(e);r||(r=await import(e)),(0,o.k_)(t.signal);const s=t.client||r;return U([a.default.connect(r)],{...t,client:s})}if(await async function(){if(q)return q;T=new AbortController;const e=[];for(let t=0;t<F;t++){const r=j.create(t).then((e=>(W[t]=e,e)));e.push(r)}return q=Promise.all(e),q}(),(0,o.k_)(t.signal),"dedicated"===r){const r=H++%F;return U([await W[r].open(e,t)],t)}if(t.maxNumWorkers&&t.maxNumWorkers>0){const r=Math.min(t.maxNumWorkers,F);if(r<F){const s=new Array(r);for(let n=0;n<r;++n){const r=H++%F;s[n]=W[r].open(e,t)}return U(s,t)}}return U(W.map((r=>r.open(e,t))),t)}let T,q=null}}]);