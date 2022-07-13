import { B as e$1, C as d$1, D as n$1, g, E as f, F as has, al as e$2, at as l$2, dM as _, c2 as D, dN as g$1, dO as f$1, am as b, cg as e$3, dP as l$3, r as r$1, Z as s$2, dQ as w, dR as y, dS as g$2, aP as l$4, dJ as w$1, dK as a$2, dT as y$1, dU as I, dV as t, d as b$1, dW as a$3, a5 as E, dX as j, dY as A$2, dZ as V, d_ as N$1, d$ as _$1, e0 as g$3, e1 as F, t as t$1, s as s$3, e2 as de, N as x, aJ as o$2, j as j$1, q as x$1, w as w$2, aQ as h, y as y$2, ar as j$2, bB as l$5, e3 as j$3 } from './_virtual_index-4b72c57d.js';
import { a as a$1 } from './EffectView-0ee93c44.js';
import { a6 as S } from './enums-1f2484bf.js';
import { f as f$2, u as u$3 } from './LayerView-a579da68.js';
import { c as c$2, p as p$1, v, f as f$3, u as u$2, S as S$1, h as h$1 } from './schemaUtils-9aaf6a24.js';
import { e as e$4 } from './util-04e40aaf.js';
import { o as o$1 } from './floorFilterUtils-776aae8e.js';
import { s as s$4, d as d$2 } from './popupUtils-967d9801.js';
import { i as i$1 } from './RefreshableLayerView-f638c9df.js';
import './utils-1dcda7d1.js';
import './Utils-af323e30.js';
import './number-7d0da80b.js';
import './enums-fb707d37.js';
import './Texture-e2dd4118.js';
import './VertexElementDescriptor-b07b83f4.js';
import './MaterialKey-98c27063.js';
import './alignmentUtils-d4b065e2.js';
import './visualVariablesUtils-a3d3fab4.js';
import './createSymbolSchema-35c250f9.js';
import './CIMSymbolHelper-50c786a1.js';
import './BidiEngine-d3dd902c.js';
import './GeometryUtils-10c98655.js';
import './cimAnalyzer-ee2b7de5.js';
import './quantizationUtils-994cbb23.js';
import './ExpandedCIM-72783fee.js';
import './MD5-efff06bc.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let p=class extends g{constructor(){super(...arguments),this.isAggregate=!0;}getEffectivePopupTemplate(e=!1){if(this.popupTemplate)return this.popupTemplate;const r=this.sourceLayer&&this.sourceLayer.featureReduction;return r&&"popupTemplate"in r&&r.popupEnabled?r.popupTemplate:null}getObjectId(){return this.objectId}};e$1([d$1({type:Boolean})],p.prototype,"isAggregate",void 0),e$1([d$1({type:[String,Number],json:{read:!0}})],p.prototype,"objectId",void 0),p=e$1([n$1("esri.AggregateGraphic")],p);const s$1=p;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let r=class extends f{constructor(e){super(e),this._filter=null,this.duration=has("mapview-transitions-duration"),this._excludedEffectView=new a$1(e),this._includedEffectView=new a$1(e);}get excludedEffects(){return this._excludedEffectView.effects}set featureEffect(e){this._get("featureEffect")!==e&&this._transitionTo(e);}get filter(){return this._filter||e$2(this.featureEffect)?.filter||null}get hasEffects(){return this._excludedEffectView.hasEffects||this._includedEffectView.hasEffects}get includedEffects(){return this._includedEffectView.effects}set scale(e){this._set("scale",e),this._excludedEffectView.scale=e,this._includedEffectView.scale=e;}get transitioning(){return this._excludedEffectView.transitioning||this._includedEffectView.transitioning}transitionStep(e,t){this._set("scale",t),this.transitioning?(this._includedEffectView.transitionStep(e,t),this._excludedEffectView.transitionStep(e,t),this.transitioning||(this._filter=null)):(this._excludedEffectView.scale=t,this._includedEffectView.scale=t);}end(){this._includedEffectView.end(),this._excludedEffectView.end(),this._filter=null;}_transitionTo(e){const t=this._get("featureEffect"),s=e$2(e),f=e$2(s?.includedEffect),c=e$2(s?.excludedEffect),r=this._includedEffectView.canTransitionTo(f)&&this._excludedEffectView.canTransitionTo(c);this._includedEffectView.effect=f,this._excludedEffectView.effect=c,this._set("featureEffect",s),this._filter=s?.filter||t?.filter||null,r||this.end();}};e$1([d$1()],r.prototype,"_filter",void 0),e$1([d$1()],r.prototype,"_excludedEffectView",void 0),e$1([d$1()],r.prototype,"_includedEffectView",void 0),e$1([d$1()],r.prototype,"duration",void 0),e$1([d$1()],r.prototype,"excludedEffects",null),e$1([d$1()],r.prototype,"featureEffect",null),e$1([d$1()],r.prototype,"filter",null),e$1([d$1()],r.prototype,"hasEffects",null),e$1([d$1()],r.prototype,"includedEffects",null),e$1([d$1({value:0})],r.prototype,"scale",null),e$1([d$1()],r.prototype,"transitioning",null),r=e$1([n$1("esri.layers.effects.FeatureEffectView")],r);const o=r;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
async function e(e,r){if(!e)return null;switch(e.type){case"symbol":return new((await import('./SymbolTileRenderer-8ead14dd.js')).default)(r);case"heatmap":return new((await import('./HeatmapTileRenderer-a1900c95.js')).default)(r)}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function a(e){return e.some((e=>e.globalId))}function d(e){return e.filter((e=>!e.error)).map((e=>e.objectId??e.globalId))}function i(e,r){const s=new Set(e);for(const t of r.values())s.add(t);return s}function n(e,r){const s=new Set(e);for(const t of r.values())s.delete(t);return s}let c$1=class extends f{constructor(e){super(e),this._hasGlobalIds=!1;}normalizeCtorArgs(e){return this._queueProcessor=new l$2({concurrency:1,process:e.process}),{}}destroy(){this.clear();}get updating(){return this._queueProcessor.length>0}clear(){this._queueProcessor.clear();}push(e){const r=this._queueProcessor,s=r.last();switch(e.type){case"update":case"refresh":if(s?.type===e.type)return;r.push(e).finally((()=>this.notifyChange("updating")));break;case"edit":{const t="processed-edit"===s?.type?s:null;t&&r.popLast();const o=this._mergeEdits(t,e);for(const e of o)r.push(e).finally((()=>this.notifyChange("updating")));break}}this.notifyChange("updating");}_mergeEdits(e,r){const{addedFeatures:s,deletedFeatures:t,updatedFeatures:o}=r.edits;if(this._hasGlobalIds=this._hasGlobalIds||a(s)||a(o)||a(t),this._hasGlobalIds){return [e,{type:"processed-edit",edits:{addOrModified:[...s,...o],removed:t}}]}const c=new Set(d(e?.edits.addOrModified??[])),u=new Set(d(e?.edits.removed??[])),p=new Set([...d(s),...d(o)]),l=new Set(d(t));return [{type:"processed-edit",edits:{addOrModified:Array.from(i(n(c,l),p)).map((e=>({objectId:e}))),removed:Array.from(i(n(u,p),l)).map((e=>({objectId:e})))}}]}};e$1([d$1({readOnly:!0})],c$1.prototype,"updating",null),c$1=e$1([n$1("esri.views.2d.layers.support.FeatureCommandQueue")],c$1);const u$1=c$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function c(e){return Array.isArray(e)}let l$1=class extends _{constructor(e){super(e),this._startupResolver=D(),this.isReady=!1;}initialize(){this._controller=new AbortController,this.addResolvingPromise(this._startWorker(this._controller.signal));}destroy(){this._controller.abort(),this._connection&&this._connection.close();}set tileRenderer(e){this.client.tileRenderer=e;}get closed(){return this._connection.closed}async startup(e,t,r,s){await this.when();const o=this._controller.signal,i=c(r.source)?{transferList:r.source,signal:o}:void 0,n={service:r,config:t,tileInfo:e.tileInfo.toJSON(),tiles:s};await this._connection.invoke("startup",n,i),this._startupResolver.resolve(),this._set("isReady",!0);}async updateTiles(e){return await this._startupResolver.promise,g$1(this._connection.invoke("updateTiles",e))}async update(e){const t={config:e};return await this._startupResolver.promise,this._connection.invoke("update",t)}async applyUpdate(e){return await this._startupResolver.promise,this._connection.invoke("applyUpdate",e)}async setHighlight(e){return await this._startupResolver.promise,g$1(this._connection.invoke("controller.setHighlight",e))}async stop(){if(await this._startupResolver.promise,!this.closed)return g$1(this._connection.invoke("stop"))}async refresh(e){return await this._startupResolver.promise,g$1(this._connection.invoke("controller.refresh",e))}async querySummaryStatistics(e,t,r){return await this._startupResolver.promise,this._connection.invoke("controller.querySummaryStatistics",{query:e.toJSON(),params:t},r)}async queryUniqueValues(e,t,r){return await this._startupResolver.promise,this._connection.invoke("controller.queryUniqueValues",{query:e.toJSON(),params:t},r)}async queryClassBreaks(e,t,r){return await this._startupResolver.promise,this._connection.invoke("controller.queryClassBreaks",{query:e.toJSON(),params:t},r)}async queryHistogram(e,t,r){return await this._startupResolver.promise,this._connection.invoke("controller.queryHistogram",{query:e.toJSON(),params:t},r)}async queryFeatures(e,t){return await this._startupResolver.promise,this._connection.invoke("controller.queryFeatures",e.toJSON(),t)}async queryVisibleFeatures(e,t){return await this._startupResolver.promise,this._connection.invoke("controller.queryVisibleFeatures",e.toJSON(),t)}async queryObjectIds(e,t){return await this._startupResolver.promise,this._connection.invoke("controller.queryObjectIds",e.toJSON(),t)}async queryFeatureCount(e,t){return await this._startupResolver.promise,this._connection.invoke("controller.queryFeatureCount",e.toJSON(),t)}async queryExtent(e,t){return this._connection.invoke("controller.queryExtent",e.toJSON(),t)}async queryLatestObservations(e,t){return await this._startupResolver.promise,this._connection.invoke("controller.queryLatestObservations",e.toJSON(),t)}async queryStatistics(e){return await this._startupResolver.promise,this._connection.invoke("controller.queryStatistics",e)}async getObjectId(e){return await this._startupResolver.promise,this._connection.invoke("controller.getObjectId",e)}async getDisplayId(e){return await this._startupResolver.promise,this._connection.invoke("controller.getDisplayId",e)}async getFeatures(e){return await this._startupResolver.promise,this._connection.invoke("controller.getFeatures",e)}async getAggregates(){return await this._startupResolver.promise,this._connection.invoke("controller.getAggregates")}async getAggregateValueRanges(){return await this._startupResolver.promise,this._connection.invoke("controller.getAggregateValueRanges")}async mapValidDisplayIds(e){return await this._startupResolver.promise,this._connection.invoke("controller.mapValidDisplayIds",e)}async onEdits(e){return await this._startupResolver.promise,g$1(this._connection.invoke("controller.onEdits",e))}async enableEvent(e,t){return await this._startupResolver.promise,g$1(this._connection.invoke("controller.enableEvent",{name:e,value:t}))}pauseStream(){return g$1(this._connection.invoke("controller.pauseStream"))}resumeStream(){return g$1(this._connection.invoke("controller.resumeStream"))}async _startWorker(e){try{this._connection=await f$1("Pipeline",{client:this.client,strategy:"dedicated",signal:e});}catch(t){b(t);}}};e$1([d$1()],l$1.prototype,"isReady",void 0),e$1([d$1()],l$1.prototype,"client",void 0),e$1([d$1()],l$1.prototype,"tileRenderer",null),l$1=e$1([n$1("esri.views.2d.layers.support.FeatureLayerProxy")],l$1);const u=l$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const l=1e-6;class s{constructor(e){this._tiles=new Map,this.buffer=0,this.acquireTile=e.acquireTile,this.releaseTile=e.releaseTile,this.tileInfoView=e.tileInfoView,this.buffer=e.buffer;}destroy(){}clear(){this._tiles.forEach((e=>this._releaseTile(e)));}tileKeys(){const e=[];return this._tiles.forEach(((i,t)=>e.push(t))),e}update(e){const l=this.tileInfoView.getTileCoverage(e.state,this.buffer,"closest"),{spans:s,lodInfo:r}=l,{level:a}=r,o=[],d=[],h=new Set,n=new Set;for(const{row:i,colFrom:c,colTo:f}of s)for(let e=c;e<=f;e++){const l=e$3.getId(a,i,r.normalizeCol(e),r.getWorldForColumn(e)),s=this._getOrAcquireTile(o,l);h.add(l),s.isReady?s.visible=!0:n.add(s.key);}n.forEach((e=>this._addPlaceholders(h,e))),this._tiles.forEach((e=>{h.has(e.key.id)||(d.push(e.key.id),this._releaseTile(e));})),l$3.pool.release(l);return {hasMissingTiles:n.size>0,added:o,removed:d}}_getOrAcquireTile(e,i){if(!this._tiles.has(i)){const l=this.acquireTile(new e$3(i));e.push(i),this._tiles.set(i,l),l.visible=!1;}return this._tiles.get(i)}_getTile(e){return this._tiles.get(e)}_releaseTile(e){this._tiles.delete(e.key.id),this.releaseTile(e);}_addPlaceholders(e,i){const t=this._addPlaceholderChildren(e,i);if(!(Math.abs(1-t)<l)){if(!this._addPlaceholderParent(e,i)){this._getTile(i.id).visible=!0;}}}_addPlaceholderChildren(e,i){let t=0;return this._tiles.forEach((l=>{t+=this._addPlaceholderChild(e,l,i);})),t}_addPlaceholderChild(e,i,t){if(i.key.level<=t.level||!i.hasData||!t.contains(i.key))return 0;i.visible=!0,e.add(i.key.id);return 1/(1<<2*(i.key.level-t.level))}_addPlaceholderParent(i,t){let l=t.getParentKey(),s=0,r=null;for(;r$1(l);){if(i.has(l.id))return !0;const e=this._getTile(l.id);if(e?.isReady)return e.visible=!0,i.add(e.key.id),!0;e?.hasData&&e.patchCount>s&&(s=e.patchCount,r=e),l=l.getParentKey();}return !!r&&(r.visible=!0,i.add(r.key.id),!0)}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const O="esri.views.layers.FeatureLayerView",A$1=s$2.getLogger(O),N=i=>{let N=class extends i{constructor(...e){super(...e),this._updatingRequiredFieldsPromise=null,this.filter=null,this.timeExtent=null,this.layer=null,this.requiredFields=[],this.view=null;}initialize(){this.handles.add([l$4((()=>{const e=this.layer;return [e?.elevationInfo?.featureExpressionInfo,e?.displayField,e?.timeInfo,e&&"renderer"in e&&e.renderer,e&&"labelingInfo"in e&&e.labelingInfo,e&&"floorInfo"in e&&e.floorInfo,this.filter,this.featureEffect,this.timeExtent]}),(()=>this._handleRequiredFieldsChange()),w$1),a$2((()=>this.view?.floors),"change",(()=>this._handleRequiredFieldsChange())),a$2((()=>{const e=this.layer;return e&&"sublayers"in e&&e.sublayers}),"change",(()=>this._handleRequiredFieldsChange()))]);}get availableFields(){const{layer:e,layer:{fieldsIndex:t},requiredFields:r}=this;return "outFields"in e&&e.outFields?y$1(t,[...I(t,e.outFields),...r]):y$1(t,r)}set effect(e){t(A$1,"effect",{replacement:"featureEffect",version:"4.22"}),this.featureEffect=e;}get effect(){return t(A$1,"effect",{replacement:"featureEffect",version:"4.22"}),this.featureEffect}get featureEffect(){return this.layer&&"featureEffect"in this.layer?this.layer.featureEffect:null}set featureEffect(e){void 0!==e?this._override("featureEffect",e):this._clearOverride("featureEffect");}get maximumNumberOfFeatures(){return 0}set maximumNumberOfFeatures(e){A$1.error("#maximumNumberOfFeatures=","Setting maximum number of features is not supported");}get maximumNumberOfFeaturesExceeded(){return !1}highlight(e){throw new Error("missing implementation")}createQuery(){const e={outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference},t=r$1(this.filter)?this.filter.createQuery(e):new b$1(e);if("feature"===this.layer.type){const e=o$1(this);r$1(e)&&(t.where=t.where?`(${t.where}) AND (${e})`:e);}return r$1(this.timeExtent)&&(t.timeExtent=r$1(t.timeExtent)?t.timeExtent.intersection(this.timeExtent):this.timeExtent.clone()),t}queryFeatures(e,t){throw new Error("missing implementation")}queryObjectIds(e,t){throw new Error("missing implementation")}queryFeatureCount(e,t){throw new Error("missing implementation")}queryExtent(e,t){throw new Error("missing implementation")}async fetchPopupFeatures(e,t){const r=this.validateFetchPopupFeatures(t);if(r)throw r;return this.fetchClientPopupFeatures(t)}_loadArcadeModules(e){if(e.get("expressionInfos.length")||Array.isArray(e.content)&&e.content.some((e=>"expression"===e.type)))return a$3()}_handleRequiredFieldsChange(){const e=this._updateRequiredFields();this._set("_updatingRequiredFieldsPromise",e),e.then((()=>{this._updatingRequiredFieldsPromise===e&&this._set("_updatingRequiredFieldsPromise",null);}));}async _updateRequiredFields(){if(!this.layer||!this.view)return;const e="3d"===this.view.type,{layer:t,layer:{fieldsIndex:r,objectIdField:i}}=this,o="renderer"in t&&t.renderer,a="orderBy"in t&&t.orderBy,l=t.featureReduction,u=new Set,p=await E([o?o.collectRequiredFields(u,r):null,j(u,t),e?A$2(u,t):null,r$1(this.filter)?V(u,t,this.filter):null,r$1(this.featureEffect)?V(u,t,this.featureEffect.filter):null,l?N$1(u,t,l):null,a?_$1(u,t,a):null]);if(t.timeInfo&&this.timeExtent&&g$3(u,t.fieldsIndex,[t.timeInfo.startField,t.timeInfo.endField]),"feature"===t.type&&t.floorInfo&&g$3(u,t.fieldsIndex,[t.floorInfo.floorField]),"subtype-group"===t.type){F(u,r,t.subtypeField);const e=t.sublayers.map((e=>Promise.all([e.renderer?.collectRequiredFields(u,r),j(u,e)])));await E(e);}for(const s of p)s.error&&A$1.error(s.error);F(u,r,i),e&&"displayField"in t&&t.displayField&&F(u,r,t.displayField);const f=Array.from(u).sort();this._set("requiredFields",f);}validateFetchPopupFeatures(e){if(t$1(e))return null;for(const t of e.clientGraphics){const i=t.layer;if("popupEnabled"in i&&!i.popupEnabled)return new s$3("featurelayerview:fetchPopupFeatures","Popups are disabled",{layer:i});if(t.isAggregate){if(!(i.featureReduction&&"popupTemplate"in i.featureReduction&&i.featureReduction.popupEnabled&&i.featureReduction.popupTemplate))return new s$3("featurelayerview:fetchPopupFeatures","Popups are disabled",{layer:i})}else if("popupTemplate"in i){if(!s$4(i,e))return new s$3("featurelayerview:fetchPopupFeatures","Layer does not define a popup template",{layer:i})}}}async fetchClientPopupFeatures(e){const t=r$1(e)?e.clientGraphics:null;if(!t||0===t.length)return [];const r=new Array(t.length),i=new Map,n=await this.createPopupQuery(e);for(let s=0;s<t.length;s++){const a=t[s];if(a.isAggregate){r[s]=a;continue}const{layer:l}=a;if(!("popupEnabled"in l))continue;const u=I(this.layer.fieldsIndex,n.outFields),p=s$4(l,e);if(t$1(p))continue;const f=await this._loadArcadeModules(p);f&&f.arcadeUtils.hasGeometryOperations(p)||!de(u,a)?i.set(a.getObjectId(),s):r[s]=a;}if("stream"===this.layer.type||0===i.size)return r.filter(Boolean);n.objectIds=Array.from(i.keys());try{const e=await this.layer.queryFeatures(n);for(const t of e.features){r[i.get(t.getObjectId())]=t;}}catch{}return r.filter(Boolean)}async createPopupQuery(e){const t=this.layer.createQuery(),r=new Set;let i=!1;const n=r$1(e)&&e.clientGraphics?e.clientGraphics.map((e=>e.layer)):[this.layer];for(const s of n){if(!("popupEnabled"in s))continue;const t=s$4(s,e);if(t$1(t))continue;const n=await this._loadArcadeModules(t),a=n&&n.arcadeUtils.hasGeometryOperations(t);i=!("point"!==this.layer.geometryType&&!a);const l=await d$2(this.layer,t);for(const e of l)r.add(e);}if(t.returnGeometry=i,t.returnZ=i,t.returnM=i,t.outFields=Array.from(r),t.outSpatialReference=this.view.spatialReference,"feature"===this.layer.type){const e=o$1(this);r$1(e)&&(t.where=t.where?`(${t.where}) AND (${e})`:e);}return t}canResume(){return !!super.canResume()&&(!r$1(this.timeExtent)||!this.timeExtent.isEmpty)}};return e$1([d$1()],N.prototype,"_updatingRequiredFieldsPromise",void 0),e$1([d$1({readOnly:!0})],N.prototype,"availableFields",null),e$1([d$1()],N.prototype,"effect",null),e$1([d$1({type:w})],N.prototype,"featureEffect",null),e$1([d$1({type:y})],N.prototype,"filter",void 0),e$1([d$1(g$2)],N.prototype,"timeExtent",void 0),e$1([d$1()],N.prototype,"layer",void 0),e$1([d$1({type:Number})],N.prototype,"maximumNumberOfFeatures",null),e$1([d$1({readOnly:!0,type:Boolean})],N.prototype,"maximumNumberOfFeaturesExceeded",null),e$1([d$1({readOnly:!0})],N.prototype,"requiredFields",void 0),e$1([d$1()],N.prototype,"suspended",void 0),e$1([d$1()],N.prototype,"view",void 0),N=e$1([n$1(O)],N),N};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function J(e){return e&&"openPorts"in e}let Q=class extends(N(i$1(f$2(u$3)))){constructor(){super(...arguments),this._pipelineIsUpdating=!0,this._commandsQueue=new u$1({process:e=>{switch(e.type){case"processed-edit":return this._doEdit(e);case"refresh":return this._doRefresh(e.dataChanged);case"update":return this._doUpdate()}}}),this._visibilityOverrides=new Set,this._highlightIds=new Map,this._updateHighlight=x((async()=>this._proxy.setHighlight(Array.from(this._highlightIds.keys())))),this._uploadsLocked=!1,this._needsClusterSizeUpdate=!1,this.featureEffectView=new o,this._lastDefinitionExpression=null;}destroy(){o$2(this._updateClusterSizeTask,(e=>e.remove())),this._proxy?.destroy(),this._commandsQueue.destroy();}initialize(){this.addResolvingPromise(Promise.all([this._initProxy(),this._initServiceOptions()])),this.handles.add([this.on("valueRangesChanged",(e=>{this._set("_aggregateValueRanges",e.valueRanges);})),l$4((()=>this.featureEffect),(e=>{this.featureEffectView.featureEffect=e;}),{initial:!0,sync:!0})]);}async _initProxy(){const e=this.layer;if("isTable"in e&&e.isTable)throw new s$3("featurelayerview:table-not-supported","table feature layer can't be displayed",{layer:this.layer});const t="feature"===e.type||"subtype-group"===e.type,i="capabilities"in e&&e.capabilities.operations.supportsQuery;if(t&&!i)throw new s$3("featurelayerview:query-not-supported","layer view requires a layer with query capability",{layer:e});this._proxy&&this._proxy.destroy();const r=this._createClientOptions();return this._set("_proxy",new u({client:r})),this._proxy.when()}async _initServiceOptions(){return this._set("_serviceOptions",await this._createServiceOptions()),this._serviceOptions}get orderByFields(){return "stream"!==this._serviceOptions.type&&this._serviceOptions.orderByFields}get labelsVisible(){const e="subtype-group"===this.layer.type?this.layer.sublayers.items:[this.layer];return !this.suspended&&e.some((e=>e.labelingInfo&&e.labelsVisible))}get queryMode(){return this._serviceOptions.type}get renderingConfigHash(){if(!this.layer)return null;const e=this.availableFields,t=this.layer,i=this.view.floors,{definitionExpression:r}=t,s="subtype-group"!==this.layer.type&&this.layer.labelsVisible&&this.layer.labelingInfo,a="renderer"in t&&t.renderer,n="feature"===t.type?t.gdbVersion:void 0,o="feature"===t.type&&t.historicMoment?t.historicMoment.getTime():void 0,{timeExtent:h}=this,u="customParameters"in t?JSON.stringify(t.customParameters):void 0,d="apiKey"in t?t.apiKey:void 0,p="stream"===t.type?`${JSON.stringify(t.geometryDefinition)}${t.definitionExpression}`:null,y=JSON.stringify(this.clips),c=t.featureReduction&&t.featureReduction.toJSON(),f="orderBy"in this.layer&&JSON.stringify(this.layer.orderBy),g="sublayers"in this.layer&&this.layer.sublayers.items.reduce(((e,t)=>e+`${t.visible?1:0}.${JSON.stringify(t.renderer)}.${t.labelsVisible}\n.${JSON.stringify(t.labelingInfo)}`),""),m="subtypeCode"in this.layer&&this.layer.subtypeCode;return JSON.stringify({orderBy:f,sublayerHash:g,subtypeCode:m,filterHash:r$1(this.filter)&&this.filter.toJSON(),effectHash:r$1(this.featureEffect)&&this.featureEffect.toJSON(),streamFilter:p,gdbVersion:n,definitionExpression:r,historicMoment:o,availableFields:e,renderer:a,labelingInfo:s,timeExtent:h,floors:i,clipsHash:y,featureReduction:c,customParameters:u,apiKey:d})}highlight(e){let t;return e instanceof g?t=[e.getObjectId()]:"number"==typeof e||"string"==typeof e?t=[e]:Array.isArray(e)&&e.length>0?t="number"==typeof e[0]||"string"==typeof e[0]?e:e.map((e=>e?.getObjectId())):j$1.isCollection(e)&&e.length>0&&(t=e.map((e=>e?.getObjectId())).toArray()),t=t?.filter((e=>null!=e)),t&&t.length?(this._addHighlight(t),{remove:()=>this._removeHighlight(t)}):{remove:()=>{}}}hasHighlight(){return !!this._highlightIds.size}async hitTest(e,r){if(!this.tileRenderer)return null;const s=await this.tileRenderer.hitTest(r);if(0===s.length)return null;const{features:a,aggregates:n}=await this._proxy.getFeatures(s);return [...n.map((i=>this._createGraphicHit(e,s$1.fromJSON(i)))),...a.map((t=>this._createGraphicHit(e,g.fromJSON(t))))]}async queryAggregates(){return (await this._proxy.getAggregates()).map((e=>s$1.fromJSON(e)))}queryStatistics(){return this._proxy.queryStatistics()}async querySummaryStatistics(e,t,i){const r={...t,scale:this.view.scale};return this._proxy.querySummaryStatistics(this._cleanUpQuery(e),r,i)}async queryUniqueValues(e,t,i){const r={...t,scale:this.view.scale};return this._proxy.queryUniqueValues(this._cleanUpQuery(e),r,i)}async queryClassBreaks(e,t,i){const r={...t,scale:this.view.scale};return this._proxy.queryClassBreaks(this._cleanUpQuery(e),r,i)}async queryHistogram(e,t,i){const r={...t,scale:this.view.scale};return this._proxy.queryHistogram(this._cleanUpQuery(e),r,i)}queryFeatures(e,t){return this.queryFeaturesJSON(e,t).then((e=>{const t=x$1.fromJSON(e);return t.features.forEach((e=>this._setLayersForFeature(e))),t}))}queryVisibleFeatures(e,t){return this._proxy.queryVisibleFeatures(this._cleanUpQuery(e),t).then((e=>{const t=x$1.fromJSON(e);return t.features.forEach((e=>this._setLayersForFeature(e))),t}))}queryFeaturesJSON(e,t){return this._proxy.queryFeatures(this._cleanUpQuery(e),t)}queryObjectIds(e,t){return this._proxy.queryObjectIds(this._cleanUpQuery(e),t)}queryFeatureCount(e,t){return this._proxy.queryFeatureCount(this._cleanUpQuery(e),t)}queryExtent(e,t){return this._proxy.queryExtent(this._cleanUpQuery(e),t).then((e=>({count:e.count,extent:w$2.fromJSON(e.extent)})))}setVisibility(e,t){t?this._visibilityOverrides.delete(e):this._visibilityOverrides.add(e),this._update();}update(e){if(!this._tileStrategy||!this.tileRenderer)return;const{hasMissingTiles:t,added:i,removed:r}=this._tileStrategy.update(e);(i.length||r.length)&&this._proxy.updateTiles({added:i,removed:r}),t&&this.requestUpdate(),this.notifyChange("updating");}attach(){this.view.timeline.record(`${this.layer.title} (FeatureLayer) Attach`),this._tileStrategy=new s({acquireTile:e=>this._acquireTile(e),releaseTile:e=>this._releaseTile(e),tileInfoView:this.view.featuresTilingScheme,buffer:0}),this.handles.add(l$4((()=>this.renderingConfigHash),(()=>this._update()),h),"attach"),"stream"!==this.layer.type&&this.handles.add(this.layer.on("edits",(e=>this._edit(e))),"attach");}detach(){this._commandsQueue.clear(),this._proxy?.stop(),this.container.removeAllChildren(),this.handles.remove("attach"),this.tileRenderer&&(this.tileRenderer.uninstall(this.container),this.tileRenderer=null),this._tileStrategy&&(this._tileStrategy.destroy(),this._tileStrategy=null),this._tileRendererHash=null;}moveStart(){this.requestUpdate();}viewChange(){this.requestUpdate();}moveEnd(){this.requestUpdate();}isUpdating(){const e="renderer"in this.layer&&null!=this.layer.renderer,t=this._commandsQueue.updating,i=null!=this._updatingRequiredFieldsPromise,r=!this._proxy||!this._proxy.isReady,s=this._pipelineIsUpdating,a=null==this.tileRenderer||this.tileRenderer?.updating,n=e&&(t||i||r||s||a);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${n}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${t}\n  -> updatingRequiredFields ${i}\n  -> updatingProxy ${r}\n  -> updatingPipeline ${s}\n  -> updatingTileRenderer ${a}\n`),n}_createClientOptions(){return {setUpdating:e=>{this._set("_pipelineIsUpdating",e);},emitEvent:e=>{this.emit(e.name,e.event);}}}async _detectQueryMode(e){const t="path"in e,i="editingInfo"in this.layer&&this.layer.editingInfo?.lastEditDate,r=!!this.layer.refreshInterval,s=!i&&r;if(t&&("feature"===this.layer.type||"subtype-group"===this.layer.type)&&"point"===this.layer.geometryType&&this.layer.capabilities.query.supportsPagination&&!this.layer.capabilities.operations.supportsEditing&&!s&&has("featurelayer-snapshot-enabled"))try{const e=await this.layer.queryFeatureCount();if(e<=has("featurelayer-snapshot-point-min-threshold"))return {mode:"snapshot",featureCount:e};const t=has("featurelayer-snapshot-point-max-threshold"),i=has("featurelayer-snapshot-point-coverage"),r=this.view.extent,s=e$2(this.layer.fullExtent),a=s?.clone().intersection(r),n=r$1(a)?a.width*a.height:0,o=s?.width*s?.height,u=0===o?0:n/o;if(e<=t&&u>=i)return {mode:"snapshot",featureCount:e}}catch(a){s$2.getLogger(this.declaredClass).warn("mapview-feature-layer","Encountered an error when querying for featureCount",{error:a});}return {mode:"on-demand"}}async _createServiceOptions(){const e=this.layer;if("stream"===e.type)return null;const{capabilities:t,objectIdField:i}=e,r=e.fields.map((e=>e.toJSON())),s=r$1(e.fullExtent)&&e.fullExtent.toJSON(),n=e$4(e.geometryType),o=e.timeInfo&&e.timeInfo.toJSON()||null,h=e.spatialReference?e.spatialReference.toJSON():null,u="feature"===e.type?e.globalIdField:null;let d;"ogc-feature"===e.type?d=e.source.getFeatureDefinition():J(e.source)?d=await e.source.openPorts():e.parsedUrl&&(d=y$2(e.parsedUrl),"dynamicDataSource"in e&&e.dynamicDataSource&&(d.query={layer:JSON.stringify({source:e.dynamicDataSource})}));const p="datesInUnknownTimezone"in this.layer&&this.layer.datesInUnknownTimezone,y=("subtypeField"in this.layer&&this.layer.subtypeField)??null,{mode:c,featureCount:f}=await this._detectQueryMode(d);let g=this.layer.objectIdField;if("feature"===this.layer.type&&r$1(this.layer.orderBy)&&this.layer.orderBy.length){const e=!this.layer.orderBy[0].valueExpression&&this.layer.orderBy[0].field;e&&(g=e);}return {type:c,timeReferenceUnknownClient:p,subtypeField:y,featureCount:f,globalIdField:u,maxRecordCount:t.query.maxRecordCount,tileMaxRecordCount:t.query.tileMaxRecordCount,capabilities:t,fields:r,fullExtent:s,geometryType:n,objectIdField:i,source:d,timeInfo:o,spatialReference:h,orderByFields:g}}async _createMemoryServiceOptions(e){const t=await e.openPorts();return {...this._createServiceOptions(),type:"memory",source:t}}_cleanUpQuery(e){const t=b$1.from(e)||this.createQuery();return t.outSpatialReference||(t.outSpatialReference=this.view.spatialReference),t}async _update(){return this._commandsQueue.push({type:"update"})}async _edit(e){if(this.suspended)return void this._clearTiles();return this._validateEdit(e)?this._commandsQueue.push({type:"edit",edits:e}):void 0}async doRefresh(e){if(this._tileStrategy.tileKeys().length)return this.suspended&&e?void this._clearTiles():this._commandsQueue.push({type:"refresh",dataChanged:e})}_clearTiles(){this._tileStrategy.tileKeys().length&&(this._proxy.updateTiles({added:[],removed:this._tileStrategy.tileKeys()}),this._tileStrategy.clear(),this.requestUpdate(),this._commandsQueue.clear(),this._update());}_validateEdit(e){const t="globalIdField"in this.layer&&this.layer.globalIdField,i=e.deletedFeatures.some((e=>-1===e.objectId||!e.objectId)),r=t&&this.availableFields.includes(t);return i&&!r?(s$2.getLogger(this.declaredClass).error(new s$3("mapview-apply-edits",`Editing the specified service requires the layer's globalIdField, ${t} to be included the layer's outFields for updates to be reflected on the map`)),null):e}async _doUpdate(){try{if(this.destroyed||!this._hasRequiredSupport(this.layer)||!this._tileStrategy)return;const{featureEffectView:t,filter:i}=this;await this._updateRequiredFields();const{renderer:r}=this._getEffectiveRenderer();this._set("_effectiveRenderer",r);const s=this._createSchemaConfig(),a=this._createConfiguration(s,i,t.filter),o=this._lastDefinitionExpression!==a.schema.source.definitionExpression;this._lastDefinitionExpression=a.schema.source.definitionExpression;const l=a.schema.tileRenderer,h=this._createTileRendererHash(l);if("snapshot"===this._serviceOptions.type&&(a.schema.source.featureCount=this._serviceOptions.featureCount),h!==this._tileRendererHash){await this._initTileRenderer(l,r);const e=this.layer,t="stream"===e.type?await this._initServiceOptions():this._serviceOptions;this.tileRenderer.onConfigUpdate(r),"stream"!==e.type&&J(e.source)&&(t.source=await e.source.openPorts());const i={added:this._tileStrategy.tileKeys(),removed:[]};await this._proxy.startup(this.view.featuresTilingScheme,a,t,i),this.hasHighlight()&&await this._proxy.setHighlight(Array.from(this._highlightIds.keys())),await this._onceTilesUpdated(),this.tileRenderer.onConfigUpdate(r);}else {"snapshot"===this._serviceOptions.type&&o&&(a.schema.source.featureCount=await this.layer.queryFeatureCount());const t=await this._proxy.update(a);(t.mesh||t.targets.aggregate)&&this._lockGPUUploads();try{await this._proxy.applyUpdate(t);}catch(e){j$2(e)||s$2.getLogger(this.declaredClass).error(e);}(t.mesh||t.targets.aggregate)&&this._unlockGPUUploads(),this.tileRenderer.onConfigUpdate(r),this._updateClusterSizeVariable(),this._forceAttributeTextureUpload();}this._tileRendererHash=h,this.tileRenderer.invalidateLabels(),this.requestUpdate();}catch(e){}}async _doEdit(e){try{await this._proxy.onEdits(e);}catch(t){j$2(t);}}async _doRefresh(e){this._lockGPUUploads();try{await this._proxy.refresh(e);}catch(t){j$2(t);}this._unlockGPUUploads(),this.layer?.featureReduction&&this._updateClusterSizeVariable();}_updateClusterSizeVariable(){this._needsClusterSizeUpdate&&(this.tileRenderer.onConfigUpdate(this._effectiveRenderer),this._needsClusterSizeUpdate=!1);}_createUpdateClusterSizeTask(e,t){return l$4((()=>this._aggregateValueRanges),(i=>{this._updateClusterEffectiveRendererSizeVariable(e,t,i),this._needsClusterSizeUpdate=!0,this._uploadsLocked||this._updateClusterSizeVariable();}))}async _updateClusterEffectiveRendererSizeVariable(e,t,i){if(e.dynamicClusterSize&&"visualVariables"in e&&e.visualVariables){const r=c$2(e.visualVariables);if(r$1(r)&&"cluster_count"===r.field){const s=e.visualVariables.indexOf(r);e.visualVariables[s]=p$1(t,i);const a=e.clone();a.dynamicClusterSize=!0,this._set("_effectiveRenderer",a);}}}_getEffectiveRenderer(){const e="renderer"in this.layer&&this.layer.renderer,t=this.layer.featureReduction;if(r$1(this._updateClusterSizeTask)&&(this._updateClusterSizeTask.remove(),this._updateClusterSizeTask=null),t&&"renderer"in t&&t.renderer){const e=[];for(const i of t.fields??[])v(e,i);return {renderer:t.renderer,aggregateFields:e,featureReduction:t}}if(t&&"cluster"===t.type&&f$3(e)){const i=t,r=[],s=u$2(r,e,i,this._aggregateValueRanges);return o$2(this._updateClusterSizeTask,(e=>e.remove())),this._updateClusterSizeTask=this._createUpdateClusterSizeTask(s,i),{renderer:s,aggregateFields:r,featureReduction:t}}return {renderer:e,aggregateFields:[],featureReduction:null}}_acquireTile(e){const t=this.tileRenderer.acquireTile(e);return t.once("attach",(()=>{this.requestUpdate();})),t}_releaseTile(e){this.tileRenderer.releaseTile(e);}async _initTileRenderer(e$1,t){const i=await e(e$1,{layerView:this,tileInfoView:this.view.featuresTilingScheme,layer:this.layer});return this.tileRenderer&&(this._tileStrategy.clear(),this.tileRenderer.uninstall(this.container),this.tileRenderer.destroy(),this.tileRenderer=null),this.destroyed?null:(this._proxy.tileRenderer=i,this._set("tileRenderer",i),this.tileRenderer.install(this.container),this.tileRenderer.onConfigUpdate(t),this.requestUpdate(),this.tileRenderer)}_createTileRendererHash(e){return `${e.type}`}get hasFilter(){const e=!!("floorInfo"in this.layer&&this.layer.floorInfo&&this.view.floors&&this.view.floors.length);return !!this.filter||e||!!this._visibilityOverrides.size||!!this.timeExtent}_injectOverrides(e){const t=r$1(e)?e.timeExtent:null,i=r$1(this.timeExtent)&&r$1(t)?this.timeExtent.intersection(t):this.timeExtent||t;let r=null;const s="floorInfo"in this.layer&&this.layer.floorInfo;if(s){const t=r$1(e)&&e.where;r=this._addFloorFilterClause(t);}if(!this._visibilityOverrides.size&&!i&&!s)return r$1(e)?e.toJSON():null;(e=r$1(e)&&e.clone()||new y).timeExtent=i,r&&(e.where=r);const a=e.toJSON();return a.hiddenIds=Array.from(this._visibilityOverrides),a}_addFloorFilterClause(e){const t=this.layer;let i=e||"";if("floorInfo"in t&&t.floorInfo){let e=this.view.floors;if(!e||!e.length)return i;t.floorInfo.viewAllLevelIds?.length&&(e=t.floorInfo.viewAllLevelIds);const r=e.filter((e=>""!==e)).map((e=>"'"+e+"'"));r.push("''");const s=t.floorInfo.floorField;let a="("+s+" IN ({ids}) OR "+s+" IS NULL)";if(a=a.replace("{ids}",r.join(", ")),r$1(i)&&i.includes(s)){let e=new RegExp("AND \\("+s+".*NULL\\)","g");i=i.replace(e,""),e=new RegExp("\\("+s+".*NULL\\)","g"),i=i.replace(e,""),i=i.replace(/\s+/g," ").trim();}i=""!==i?"("+i+") AND "+a:a;}return ""!==i?i:null}_createConfiguration(e,t,i){const r="feature"===this.layer.type&&this.layer.historicMoment?this.layer.historicMoment.getTime():void 0,s="feature"===this.layer.type?this.layer.gdbVersion:void 0,a=new Array(S),n=this._injectOverrides(t);a[0]=n,a[1]=r$1(i)?i.toJSON():null;const o=S$1(e);if(t$1(o))return null;const h=l$5("2d");return {availableFields:this.availableFields,gdbVersion:s,historicMoment:r,devicePixelRatio:window.devicePixelRatio||1,filters:a,schema:o,supportsTextureFloat:h.supportsTextureFloat,maxTextureSize:h.maxTextureSize}}_hasRequiredSupport(e){return !("renderer"in e)||h$1(e.renderer)}_onceTilesUpdated(){return this.requestUpdate(),j$3((()=>!this._pipelineIsUpdating))}_lockGPUUploads(){this.tileRenderer&&(this._uploadsLocked=!0,this.tileRenderer.lockGPUUploads());}_unlockGPUUploads(){this.tileRenderer&&(this._uploadsLocked=!1,this.tileRenderer.unlockGPUUploads());}_forceAttributeTextureUpload(){this.tileRenderer&&this.tileRenderer.forceAttributeTextureUpload();}_createSchemaConfig(){const e="feature"===this.layer.type?this.layer.historicMoment:null,t="feature"===this.layer.type?this.layer.gdbVersion:null;return {renderer:"renderer"in this.layer&&this.layer.renderer,spatialReference:this.layer.spatialReference,timeExtent:this.layer.timeExtent,definitionExpression:this.layer.definitionExpression,featureReduction:this.layer.featureReduction,fields:this.layer.fields,geometryType:this.layer.geometryType,historicMoment:e,labelsVisible:"labelsVisible"in this.layer&&this.layer.labelsVisible,labelingInfo:"labelingInfo"in this.layer&&this.layer.labelingInfo,availableFields:this.availableFields,featureEffect:this.featureEffect,filter:this.filter,gdbVersion:t,pixelBuffer:0,orderBy:"orderBy"in this.layer&&this.layer.orderBy?this.layer.orderBy:null,customParameters:{..."customParameters"in this.layer?this.layer.customParameters:void 0,token:"apiKey"in this.layer?this.layer.apiKey:void 0},subtypeCode:"subtypeCode"in this.layer?this.layer.subtypeCode:void 0,subtypeField:"subtypeField"in this.layer?this.layer.subtypeField:void 0}}_addHighlight(e){for(const t of e)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t);this._highlightIds.set(t,e+1);}else this._highlightIds.set(t,1);this._updateHighlight().catch((e=>{j$2(e)||s$2.getLogger(this.declaredClass).error(e);}));}_removeHighlight(e){for(const t of e)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t)-1;0===e?this._highlightIds.delete(t):this._highlightIds.set(t,e);}this._updateHighlight().catch((e=>{j$2(e)||s$2.getLogger(this.declaredClass).error(e);}));}_setLayersForFeature(e){const t=this.layer;e.layer=t,e.sourceLayer=t;}_createGraphicHit(e,t){return this._setLayersForFeature(t),r$1(t.geometry)&&(t.geometry.spatialReference=this.view.spatialReference),{type:"graphic",graphic:t,layer:this.layer,mapPoint:e}}};e$1([d$1()],Q.prototype,"_serviceOptions",void 0),e$1([d$1()],Q.prototype,"_proxy",void 0),e$1([d$1()],Q.prototype,"_pipelineIsUpdating",void 0),e$1([d$1()],Q.prototype,"_effectiveRenderer",void 0),e$1([d$1()],Q.prototype,"_aggregateValueRanges",void 0),e$1([d$1()],Q.prototype,"_commandsQueue",void 0),e$1([d$1()],Q.prototype,"featureEffectView",void 0),e$1([d$1()],Q.prototype,"labelsVisible",null),e$1([d$1({readOnly:!0})],Q.prototype,"queryMode",null),e$1([d$1()],Q.prototype,"renderingConfigHash",null),e$1([d$1()],Q.prototype,"tileRenderer",void 0),e$1([d$1()],Q.prototype,"updating",void 0),Q=e$1([n$1("esri.views.2d.layers.FeatureLayerView2D")],Q);const A=Q;

export { A as default };
