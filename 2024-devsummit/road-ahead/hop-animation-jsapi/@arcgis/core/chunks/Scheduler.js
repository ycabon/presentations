/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import e from"../core/Handles.js";import"../core/lang.js";import{L as t}from"./Logger.js";import{r as s}from"./maybe.js";import{a as r,P as i,M as a}from"../core/scheduling.js";import{isAborted as n,createAbortError as h,isPromiseLike as u,when as _}from"../core/promiseUtils.js";import{watch as o,initial as d,when as l}from"../core/reactiveUtils.js";import{signal as E}from"../core/signal.js";import{d as c}from"./debugFlags.js";import{R as T}from"./RenderState.js";const g=Symbol("Yield");class m{constructor(){this._tasks=new Array,this._runningTasks=E(0)}get length(){return this._tasks.length}get running(){return this._runningTasks.value>0}destroy(){this.cancelAll()}runTask(e){if(0===this.length)return g;for(;!e.done&&this._process(e);)e.madeProgress()}push(e,t,s){return++this._runningTasks.value,new Promise(((r,i)=>this._tasks.push(new I(r,i,e,t,s)))).finally((()=>--this._runningTasks.value))}unshift(e,t,s){return++this._runningTasks.value,new Promise(((r,i)=>this._tasks.unshift(new I(r,i,e,t,s)))).finally((()=>--this._runningTasks.value))}_process(e){if(0===this._tasks.length)return!1;const t=this._tasks.shift();try{const s=n(t.signal);if(s&&!t.abortCallback)t.reject(h());else{const r=s?t.abortCallback?.(h()):t.callback(e);u(r)?r.then(t.resolve,t.reject):t.resolve(r)}}catch(e){t.reject(e)}return!0}cancelAll(){const e=h();for(const t of this._tasks)if(t.abortCallback){const s=t.abortCallback(e);t.resolve(s)}else t.reject(e);this._tasks.length=0}}class I{constructor(e,t,s,r=void 0,i=void 0){this.resolve=e,this.reject=t,this.callback=s,this.signal=r,this.abortCallback=i}}function R(){return new O.Scheduler}var f;!function(e){e.RESOURCE_CONTROLLER_IMMEDIATE="immediate",e.RESOURCE_CONTROLLER="schedule",e.SLIDE="slide",e.STREAM_DATA_LOADER="stream loader",e.ELEVATION_QUERY="elevation query",e.TERRAIN_SURFACE="terrain",e.SURFACE_GEOMETRY_UPDATES="surface geometry updates",e.LOD_RENDERER="LoD renderer",e.GRAPHICS_CORE="Graphics3D",e.I3S_CONTROLLER="I3S",e.POINT_CLOUD_LAYER="point cloud",e.FEATURE_TILE_FETCHER="feature fetcher",e.OVERLAY="overlay",e.STAGE="stage",e.GRAPHICS_DECONFLICTOR="graphics deconflictor",e.FILTER_VISIBILITY="Graphics3D filter visibility",e.SCALE_VISIBILITY="Graphics3D scale visibility",e.FRUSTUM_VISIBILITY="Graphics3D frustum visibility",e.POINT_OF_INTEREST_FREQUENT="POI frequent",e.POINT_OF_INTEREST_INFREQUENT="POI infrequent",e.LABELER="labeler",e.FEATURE_QUERY_ENGINE="feature query",e.FEATURE_TILE_TREE="feature tile tree",e.FEATURE_TILE_TREE_ACTIVE="fast feature tile tree",e.ELEVATION_ALIGNMENT="elevation alignment",e.ELEVATION_ALIGNMENT_SCENE="elevation alignment scene",e.TEXT_TEXTURE_ATLAS="text texture atlas",e.TEXTURE_UNLOAD="texture unload",e.LINE_OF_SIGHT_TOOL="line of sight tool",e.LINE_OF_SIGHT_TOOL_INTERACTIVE="interactive line of sight tool",e.ELEVATION_PROFILE="elevation profile",e.SNAPPING="snapping",e.SHADOW_ACCUMULATOR="shadow accumulator",e.CLOUDS_GENERATOR="clouds generator",e[e.NONE=0]="NONE",e[e.TEST_PRIO=1]="TEST_PRIO"}(f||(f={}));const p=new Map([[f.RESOURCE_CONTROLLER_IMMEDIATE,0],[f.RESOURCE_CONTROLLER,4],[f.SLIDE,0],[f.STREAM_DATA_LOADER,0],[f.ELEVATION_QUERY,0],[f.TERRAIN_SURFACE,1],[f.SURFACE_GEOMETRY_UPDATES,1],[f.LOD_RENDERER,2],[f.GRAPHICS_CORE,2],[f.I3S_CONTROLLER,2],[f.POINT_CLOUD_LAYER,2],[f.FEATURE_TILE_FETCHER,2],[f.OVERLAY,4],[f.STAGE,4],[f.GRAPHICS_DECONFLICTOR,4],[f.FILTER_VISIBILITY,4],[f.SCALE_VISIBILITY,4],[f.FRUSTUM_VISIBILITY,4],[f.CLOUDS_GENERATOR,4],[f.POINT_OF_INTEREST_FREQUENT,6],[f.POINT_OF_INTEREST_INFREQUENT,30],[f.LABELER,8],[f.FEATURE_QUERY_ENGINE,8],[f.FEATURE_TILE_TREE,16],[f.FEATURE_TILE_TREE_ACTIVE,0],[f.ELEVATION_ALIGNMENT,12],[f.ELEVATION_ALIGNMENT_SCENE,14],[f.TEXT_TEXTURE_ATLAS,12],[f.TEXTURE_UNLOAD,12],[f.LINE_OF_SIGHT_TOOL,16],[f.LINE_OF_SIGHT_TOOL_INTERACTIVE,0],[f.SNAPPING,0],[f.SHADOW_ACCUMULATOR,30]]);function b(e){return p.has(e)?p.get(e):"number"==typeof e?e:1}const k=a(6.5),A=a(1),L=a(30),N=a(1e3/30),S=a(100);var O,C;!function(n){n.Scheduler=class{get updating(){return this._updating.value}_updatingChanged(){this._updating.value=this._tasks.some((e=>e.needsUpdate))}constructor(){this._updating=E(!0),this._microTaskQueued=!1,this._frameNumber=0,this.performanceInfo={total:new r("total"),tasks:new Map},this._frameTaskTimes=new Map,this._budget=new u,this._state=T.INTERACTING,this._tasks=new i,this._runQueue=new i,this._load=0,this._idleStateCallbacks=new i,this._idleUpdatesStartFired=!1,this._forceTask=!1,this._debug=!1,this._debugHandle=o((()=>c.SCHEDULER_LOG_SLOW_TASKS),(e=>this._debug=e),d);for(const e of Object.keys(f))this.performanceInfo.tasks.set(f[e],new r(f[e]));const e=this;this._test={FRAME_SAFETY_BUDGET:k,INTERACTING_BUDGET:N,IDLE_BUDGET:S,get availableBudget(){return e._budget.budget},usedBudget:0,getBudget:()=>e._budget,setBudget:t=>e._budget=t,updateTask:e=>this._updateTask(e),getState:e=>this._getState(e),getRuntime:e=>this._getRuntime(e),frameTaskTimes:this._frameTaskTimes,resetRuntimes:()=>this._resetRuntimes(),getRunning:()=>this._getRunning()}}destroy(){this._tasks.toArray().forEach((e=>e.remove())),this._tasks.clear(),s(this._debugHandle),this._microTaskQueued=!1,this._updatingChanged()}taskRunningChanged(e){this._updatingChanged(),e&&this._budget.remaining>0&&!this._microTaskQueued&&(this._microTaskQueued=!0,queueMicrotask((()=>{this._microTaskQueued&&(this._microTaskQueued=!1,this._budget.remaining>0&&this._schedule()&&this.frame())})))}registerTask(e,t){const s=new h(this,e,t);return this._tasks.push(s),this._updatingChanged(),this.performanceInfo.tasks.has(e)||this.performanceInfo.tasks.set(e,new r(e)),s}registerIdleStateCallbacks(e,t){const s={idleBegin:e,idleEnd:t};this._idleStateCallbacks.push(s),this.state===T.IDLE&&this._idleUpdatesStartFired&&s.idleBegin();const r=this;return{remove:()=>this._removeIdleStateCallbacks(s),set idleBegin(e){r._idleUpdatesStartFired&&(s.idleEnd(),r._state===T.IDLE&&e()),s.idleBegin=e},set idleEnd(e){s.idleEnd=e}}}get load(){return this._load}set state(e){this._state!==e&&(this._state=e,this.state!==T.IDLE&&this._idleUpdatesStartFired&&(this._idleUpdatesStartFired=!1,this._idleStateCallbacks.forAll((e=>e.idleEnd()))))}get state(){return this._state}updateBudget(e){this._test.usedBudget=0,++this._frameNumber;let t=k,s=e.frameDuration,r=A;switch(this.state){case T.IDLE:t=a(0),s=a(Math.max(S,e.frameDuration)),r=L;break;case T.INTERACTING:s=a(Math.max(N,e.frameDuration));case T.ANIMATING:}return s=a(s-e.elapsedFrameTime-t),this.state!==T.IDLE&&s<A&&!this._forceTask?(this._forceTask=!0,!1):(s=a(Math.max(s,r)),this._budget.reset(s,this.state),this._updateLoad(),this._schedule())}frame(){switch(this._forceTask=!1,this._microTaskQueued=!1,this.state){case T.IDLE:this._idleUpdatesStartFired||(this._idleUpdatesStartFired=!0,this._idleStateCallbacks.forAll((e=>e.idleBegin()))),this._runIdle();break;case T.INTERACTING:this._runInteracting();break;default:this._runAnimating()}this._test.usedBudget=this._budget.elapsed}stopFrame(){this._budget.reset(a(0),this._state),this._budget.madeProgress()}_removeIdleStateCallbacks(e){this._idleUpdatesStartFired&&e.idleEnd(),this._idleStateCallbacks.removeUnordered(e)}removeTask(e){this._tasks.removeUnordered(e),this._runQueue.removeUnordered(e),this._updatingChanged()}_updateTask(e){this._tasks.forAll((t=>{t.name===e&&t.setPriority(e)}))}_getState(e){if(this._runQueue.some((t=>t.name===e)))return C.SCHEDULED;let t=C.IDLE;return this._tasks.forAll((s=>{s.name===e&&s.needsUpdate&&(s.schedulePriority<=1?t=C.READY:t!==C.READY&&(t=C.WAITING))})),t}_getRuntime(e){let t=0;return this._tasks.forAll((s=>{s.name===e&&(t+=s.runtime)})),t}_resetRuntimes(){this._tasks.forAll((e=>e.runtime=0))}_getRunning(){const e=new Map;if(this._tasks.forAll((t=>{t.needsUpdate&&e.set(t.name,(e.get(t.name)||0)+1)})),0===e.size)return null;let t="";return e.forEach(((e,s)=>{t+=e>1?` ${e}x ${s}`:` ${s}`})),t}_runIdle(){this._run()}_runInteracting(){this._run()}_runAnimating(){this._run()}_updateLoad(){const e=this._tasks.reduce(((e,t)=>t.needsUpdate?++e:e),0);this._load=.9*this._load+e*(1-.9)}_schedule(){for(this._runQueue.filterInPlace((e=>!!e.needsUpdate||(e.schedulePriority=e.basePriority,!1))),this._tasks.forAll((e=>{0===e.basePriority&&e.needsUpdate&&!this._runQueue.includes(e)&&e.blockFrame!==this._frameNumber&&this._runQueue.unshift(e)}));0===this._runQueue.length;){let e=!1,t=0;if(this._tasks.forAll((s=>{s.needsUpdate&&0!==s.schedulePriority&&0!==s.basePriority&&s.blockFrame!==this._frameNumber&&(e=!0,t=Math.max(t,s.basePriority),1===s.schedulePriority?(s.schedulePriority=0,this._runQueue.push(s)):--s.schedulePriority)})),!e)return this._updatingChanged(),!1}return this._updatingChanged(),!0}_run(){const e=this._budget.now();this._startFrameTaskTimes();do{for(;this._runQueue.length>0;){const s=this._budget.now(),r=this._runQueue.pop();this._budget.resetProgress();try{r.task.runTask(this._budget)===g&&(r.blockFrame=this._frameNumber)}catch(e){t.getLogger("esri.views.support.Scheduler").error(`Exception in task "${r.name}"`,e),r.blockFrame=this._frameNumber}!this._budget.hasProgressed&&r.blockFrame!==this._frameNumber&&r.needsUpdate&&(r.name,f.I3S_CONTROLLER,r.blockFrame=this._frameNumber),r.schedulePriority=r.basePriority;const i=this._budget.now()-s;if(r.runtime+=i,this._frameTaskTimes.set(r.priority,this._frameTaskTimes.get(r.priority)+i),this._debug&&i>2*this._budget.budget&&console.log("Task",r.name,"used",i,"of max",this._budget.budget,"ms"),this._budget.remaining<=0)return this._updatingChanged(),void this._recordFrameTaskTimes(this._budget.now()-e)}}while(this._schedule());this._updatingChanged(),this._recordFrameTaskTimes(this._budget.now()-e)}_startFrameTaskTimes(){for(const e of Object.keys(f))this._frameTaskTimes.set(f[e],0)}_recordFrameTaskTimes(e){this._frameTaskTimes.forEach(((e,t)=>this.performanceInfo.tasks.get(t).record(e))),this.performanceInfo.total.record(e)}get test(){return this._test}};class h{get task(){return this._task.value}get updating(){return this._queue.running}constructor(t,s,r){this._scheduler=t,this.name=s,this.blockFrame=0,this.runtime=0,this._queue=new m,this._handles=new e,this._basePriority=b(s),this.schedulePriority=this._basePriority,this._task=E(null!=r?r:this._queue),this._handles.add(l((()=>this.task.running),(e=>t.taskRunningChanged(e))))}remove(){this.processQueue(U),this._scheduler.removeTask(this),this.schedule=P.schedule,this.reschedule=P.reschedule,this._handles.destroy()}get basePriority(){return this._basePriority}setPriority(e){if(this.name===e)return;this.name=e;const t=b(e);0!==this._basePriority&&0===this.schedulePriority||(this.schedulePriority=t),this._basePriority=t}get priority(){return this.name}set priority(e){this.setPriority(e)}get needsUpdate(){return this.updating||this.task.running}schedule(e,t,s){return this._queue.push(e,t,s)}reschedule(e,t,s){return this._queue.unshift(e,t,s)}processQueue(e){return this._queue.runTask(e)}}class u{constructor(){this._begin="undefined"!=typeof performance?performance.now():0,this._budget=0,this._state=T.IDLE,this._done=!1,this._progressed=!1,this._enabled=!0}run(e){return!this.done&&(!0===e()&&this.madeProgress(),!0)}get done(){return this._done}get budget(){return this._budget}madeProgress(){return this._progressed=!0,this._done=this.elapsed>=this._budget&&this._enabled,this._done}get state(){return this._state}get enabled(){return this._enabled}set enabled(e){this._enabled=e}reset(e,t){this._begin=this.now(),this._budget=e,this._state=t,this.resetProgress()}get remaining(){return Math.max(this._budget-this.elapsed,0)}now(){return performance.now()}get elapsed(){return performance.now()-this._begin}resetProgress(){this._progressed=!1,this._done=!1}get hasProgressed(){return this._progressed}}n.Budget=u}(O||(O={})),function(e){e.SCHEDULED="s",e.READY="r",e.WAITING="w",e.IDLE="i"}(C||(C={}));const U=(()=>{const e=new O.Budget;return e.enabled=!1,e})(),P=new class{remove(){}processQueue(){}schedule(e,t,s){try{if(n(t)){const e=h();return s?Promise.resolve(s(e)):Promise.reject(e)}return _(e(U))}catch(e){return Promise.reject(e)}}reschedule(e,t,s){return this.schedule(e,t,s)}};export{P as I,m as P,f as T,g as Y,R as a,U as n};