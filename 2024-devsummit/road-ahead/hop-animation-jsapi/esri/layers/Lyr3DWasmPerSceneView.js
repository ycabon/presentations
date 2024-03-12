// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../chunks/tslib.es6 ../request ../core/Accessor ../core/Logger ../core/promiseUtils ../core/reactiveUtils ../core/scheduling ../core/accessorSupport/decorators/property ../core/has ../core/RandomLCG ../core/accessorSupport/decorators/subclass ./ILyr3DWasmPerSceneView ./Lyr3DWorkerHandle ../libs/lyr3d/Lyr3DModule ../symbols/support/unitConversionUtils ../views/3d/layers/I3SMeshView3D".split(" "),function(t,u,p,q,r,v,w,x,F,G,y,m,z,A,B,C){var g;(function(a){a[a.Lifetime=0]="Lifetime";a[a.Jobs=
1]="Jobs";a[a.Renderables=2]="Renderables"})(g||={});var f;(function(a){a[a.Critical=0]="Critical";a[a.Error=1]="Error";a[a.Warning=2]="Warning";a[a.Info=3]="Info"})(f||={});p=class extends p{constructor(a){super(a);this._lyr3DMain=this._lyr3DMainPromise=null;this._layers=new Map;this._debugFlags=new Set;this._debugLevel=f.Critical;this._session=this._pulseTaskHandle=null;this._debugFlags.add(g.Lifetime);this._debugFlags.add(g.Jobs);this._debugFlags.add(g.Renderables)}_debugLog(a,b,c,d=!0){this._debugFlags.has(a)&&
this._debugLevel>=b&&(a=d?`[js] ${c}`:`${c}`,b===f.Error?q.getLogger(this).error(a):b===f.Warning&&q.getLogger(this).warn(a),q.getLogger(this).info(a))}initialize(){this._debugLevel>f.Warning&&(q.getLogger(this).level="info");this._debugLog(g.Lifetime,f.Info,"Lyr3DWasmPerSceneView.initialize()");this.addHandles([v.watch(()=>this.view.state?.contentCamera,()=>this._updateWasmCamera())]);this._pulseTaskHandle=w.addFrameTask({preRender:()=>this._pulseTask()})}destroy(){this._debugLog(g.Lifetime,f.Info,
"Lyr3DWasmPerSceneView.destroy()");this._lyr3DMain&&(this._layers.forEach(b=>{b.abortController.abort()}),this._lyr3DMain.uninitialize_lyr3d_wasm(),this._lyr3DMain=null);const a=this._worker;a&&a.destroyWasm().then(()=>{this._worker?.destroy();this._worker=null});this._pulseTaskHandle?.remove();this._pulseTaskHandle=null}add3DTilesLayerView(a){return this._lyr3DMain?this._add3DTilesLayerView(a):(this._debugLog(g.Lifetime,f.Error,"Lyr3DWasmPerSceneView.add3DTilesLayerView() called when WASM wasn't initialized"),
m.wasmFailedToInit)}remove3DTilesLayerView(a){if(!this._lyr3DMain)return this._debugLog(g.Lifetime,f.Error,"Lyr3DWasmPerSceneView.remove3DTilesLayerView() called when WASM wasn't loaded!"),0;this._doRemoveLayerView(a);a=this._layers.size;0===a&&(this._debugLog(g.Lifetime,f.Info,"Lyr3DWasmPerSceneView.remove3DTilesLayerView() no Lyr3D layers left after removing a layer, destroying"),this.destroy());return a}setEnabled(a,b){if(this._lyr3DMain){var c=this._layers.get(a.wasmLayerId);c&&(this._lyr3DMain.set_enabled(a.wasmLayerId,
b),c.needMemoryUsageUpdate=!0)}else this._debugLog(g.Lifetime,f.Error,"Lyr3DWasmPerSceneView.setEnabled() called when WASM wasn't loaded!")}setLayerOffset(a,b){this._lyr3DMain?this._layers.get(a.wasmLayerId)&&this._lyr3DMain.set_carto_offset_z(a.wasmLayerId,b):this._debugLog(g.Lifetime,f.Error,"Lyr3DWasmPerSceneView.setLayerOffset() called when WASM wasn't loaded!")}getAttributionText(){return this._lyr3DMain?this._lyr3DMain.get_current_attribution_text().split("|"):(this._debugLog(g.Lifetime,f.Error,
"Lyr3DWasmPerSceneView.getAttributionText() called when WASM wasn't loaded!"),[])}isUpdating(a){return!this._lyr3DMain&&this._lyr3DMainPromise?!0:(a=this._layers.get(a))?0<a.outstandingJobCount||0<a.outstandingRenderableCount:!1}initializeWasm(){if(this._lyr3DMain)return Promise.resolve();this._debugLog(g.Lifetime,f.Info,"Lyr3DWasmPerSceneView.initializeWasm()");this._lyr3DMainPromise||(this._lyr3DMainPromise=A.loadLyr3DMainWASM().then(a=>{this._lyr3DMain=a;this._lyr3DMainPromise=null;a=this._lyr3DMain.addFunction(this._onNewJob.bind(this),
"v");const b=this._lyr3DMain.addFunction(this._onNewRenderable.bind(this),"v"),c=this._lyr3DMain.addFunction(this._freeRenderables.bind(this),"viii"),d=this._lyr3DMain.addFunction(this._setRenderableVisibility.bind(this),"viiii"),e=this._lyr3DMain.addFunction(this._onWasmError.bind(this),"viiii"),k=this.view.heightModelInfo?.heightModel;if(this._lyr3DMain.initialize_lyr3d_wasm(e,a,b,c,d,"global"===this.view.viewingMode,!k||"gravity-related-height"===k,this.view.renderSpatialReference?.isWebMercator?
3857:this.view.renderSpatialReference?.wkid??-1)){if(this._worker=new z.Lyr3DWorkerHandle(C.makeScheduleFunction(this.view.resourceController)),this._worker.promise)return this._worker.promise}else this._lyr3DMain=null,this._debugLog(g.Lifetime,f.Critical,"Lyr3d Main WASM failed to initialize",!1)}).catch(a=>{this._debugLog(g.Lifetime,f.Critical,`Lyr3d WASM failed to download error = ${a}`,!1)}));return this._lyr3DMainPromise}_pulseTask(){this._lyr3DMain&&this._lyr3DMain.frame_pulse()}_incrementJobCount(a){a.outstandingJobCount+=
1;1===a.outstandingJobCount&&1>a.outstandingRenderableCount&&a.layerView.updatingFlagChanged()}_decrementJobCount(a){--a.outstandingJobCount;0===a.outstandingJobCount&&1>a.outstandingRenderableCount&&a.layerView.updatingFlagChanged()}_incrementRenderableCount(a){a.outstandingRenderableCount+=1;1>a.outstandingJobCount&&1===a.outstandingRenderableCount&&a.layerView.updatingFlagChanged()}_decrementRenderableCount(a){--a.outstandingRenderableCount;1>a.outstandingJobCount&&0===a.outstandingRenderableCount&&
a.layerView.updatingFlagChanged()}_onJobFailed(a,b,c){b.error.length&&this._debugLog(g.Jobs,f.Error,b.error,!1);if(this._lyr3DMain)this._lyr3DMain.on_job_failed(c.jobId,c.desc);this._decrementJobCount(a)}_onJobSucceeded(a,b,c){if(this._lyr3DMain){const d=b.data.byteLength,e=this._lyr3DMain._malloc(d);(new Uint8Array(this._lyr3DMain.HEAPU8.buffer,e,d)).set(b.data);this._lyr3DMain.on_job_completed(c.jobId,b.jobDescJson,e,d);this._lyr3DMain._free(e)}this._decrementJobCount(a)}_getRequestPromises(a,b,
c){const d=[];for(const e of a){a=new URL(e);const k=a.searchParams.get("session");k?this._session=k:this._session&&a.searchParams.append("session",this._session);c&&a.searchParams.append("key",c);d.push(u(a.toString(),b).then(l=>l.data))}return d}_onNewJob(){const a=this._lyr3DMain.get_next_job(),b=this._layers.get(a.layerId);if(b){this._incrementJobCount(b);var c=b.abortController.signal,d={responseType:"array-buffer",signal:c},e={inputs:[],jobDescJson:a.desc,isMissingResourceCase:!1},k=(new URL(b.layerView.layer.url)).searchParams.get("key"),
l=this._getRequestPromises(a.urls,d,k);Promise.all(l).then(h=>{e.inputs=h;return this._worker.invoke(e,c)}).then(h=>h).catch(h=>{r.isAbortError(h)?this._debugLog(g.Jobs,f.Warning,`job ${a.jobId} was cancelled.`):this._debugLog(g.Jobs,f.Error,`job ${a.jobId} failed with error ${h}.`);return{status:m.Lyr3DWasmWorkerOutputStatus.Failed,error:"",jobDescJson:"",data:new Uint8Array(0),missingInputUrls:[],inputs:[]}}).then(h=>{if(h.status===m.Lyr3DWasmWorkerOutputStatus.Failed)this._onJobFailed(b,h,a);else if(h.status===
m.Lyr3DWasmWorkerOutputStatus.Succeeded)this._onJobSucceeded(b,h,a);else if(h.status===m.Lyr3DWasmWorkerOutputStatus.MissingInputs){const D=this._getRequestPromises(h.missingInputUrls,d,k);Promise.all(D).then(n=>{e.jobDescJson=h.jobDescJson;e.inputs=h.originalInputs?h.originalInputs:[];e.isMissingResourceCase=!0;for(const E of n)e.inputs.push(E);return this._worker.invoke(e,c)}).then(n=>{n.status===m.Lyr3DWasmWorkerOutputStatus.Failed?this._onJobFailed(b,n,a):n.status===m.Lyr3DWasmWorkerOutputStatus.Succeeded&&
this._onJobSucceeded(b,n,a)}).catch(n=>{this._decrementJobCount(b);r.isAbortError(n)?this._debugLog(g.Jobs,f.Warning,`job ${a.jobId} was cancelled.`):this._debugLog(g.Jobs,f.Error,`job ${a.jobId} failed with error2 ${n}.`);if(this._lyr3DMain)this._lyr3DMain.on_job_failed(a.jobId,a.desc)})}})}}_onNewRenderable(){const a=this._lyr3DMain.get_next_renderable(),b=a.meshData;if(b.data&&0<b.data.byteLength){const d=b.data.slice();b.data=d}const c=this._layers.get(a.layerId);c&&(this._incrementRenderableCount(c),
c.layerView.createRenderable(a).then(d=>{if(this._lyr3DMain)this._lyr3DMain.on_renderable_created(!0,a.layerId,a.handle,d.vertexCount,d.vbMemUsage,d.ibMemUsage,d.texMemUsage);this._decrementRenderableCount(c)}).catch(d=>{r.isAbortError(d)||this._debugLog(g.Renderables,f.Error,`createRenderable failed with error ${d}.`);if(this._lyr3DMain)this._lyr3DMain.on_renderable_created(!1,a.layerId,a.handle,0,0,0,0);this._decrementRenderableCount(c)}))}_freeRenderables(a,b,c){if(!(1>c)&&(a=this._layers.get(a))){a=
a.layerView;var d=[];b=new Uint32Array(this._lyr3DMain.HEAPU32.buffer,b,c);for(let e=0;e<c;++e)d.push(b[e]);for(b=0;b<c;++b)a.freeRenderable(d[b])}}_setRenderableVisibility(a,b,c,d){if(!(1>d)&&(a=this._layers.get(a))){a=a.layerView;var e=[],k=[];b=new Uint32Array(this._lyr3DMain.HEAPU32.buffer,b,d);c=new Uint8Array(this._lyr3DMain.HEAPU8.buffer,c,d);for(let l=0;l<d;++l)e.push(b[l]),k.push(1===c[l]?!0:!1);for(c=0;c<d;++c)a.setRenderableVisibility(e[c],k[c])}}_onWasmError(a,b,c,d){this._lyr3DMain&&
this._debugLog(c,d,this._lyr3DMain.UTF8ToString(a,b),!1)}_doRemoveLayerView(a){const b=this._layers.get(a.wasmLayerId);return b?(b.abortController.abort(),this._lyr3DMain.remove_layer(a.wasmLayerId),this._layers.delete(a.wasmLayerId),!0):!1}_add3DTilesLayerView(a){const b=a.layer;if(!b.url)return m.invalidLayerView;const c=this._lyr3DMain.get_next_layer_id();var d=new AbortController;this._layers.set(c,{layerView:a,abortController:d,needMemoryUsageUpdate:!1,outstandingJobCount:0,outstandingRenderableCount:0});
a=b.elevationInfo?.offset??0;d=b.elevationInfo?.unit?B.getMetersPerUnit(b.elevationInfo?.unit):1;if(!this._lyr3DMain.add_layer(b.url,c,a*d))return this._layers.delete(c),m.invalidLayerView;this._updateWasmCamera();return c}_updateWasmCamera(){const a=this.view.state?.contentCamera;if(a&&this._lyr3DMain){var {eye:b,center:c,up:d,near:e,far:k,fov:l}=a;this._lyr3DMain.set_camera_parameters({eye:b,center:c,up:d,near:e,far:k,fov:l,aspectRatio:a.width/a.height,viewport:[a.viewport[2],a.viewport[3]]})}}};
t.__decorate([x.property({constructOnly:!0})],p.prototype,"view",void 0);return p=t.__decorate([y.subclass("esri.layers.Lyr3DWasmPerSceneView")],p)});