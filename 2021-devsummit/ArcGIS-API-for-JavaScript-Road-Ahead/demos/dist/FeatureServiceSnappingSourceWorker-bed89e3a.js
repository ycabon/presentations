import { j as e$1, y as y$1, k as i$1, g as u$1, ai as i$2, ag as D, fs as u$2, t as t$2, e0 as a, aI as F, n as n$1, fe as d, aU as a$1, r as r$2, ft as l, fu as S$1, cF as R, bz as M, e2 as w$1, cg as n$2, bd as e$2, fv as c, fw as n$3, fx as re, fb as y$2, bE as oe, dZ as o, en as fe, fy as p, fz as l$1, E as n$4, fA as A, af as u$3, fB as l$2, fC as c$1, aP as k, z as h, cq as x$1, e1 as P, fD as A$1 } from './_virtual_index-634cbc09.js';
import { e as e$3, u as u$4 } from './FeatureStore-26ff5eb4.js';
import { Z } from './QueryEngine-0ab1178b.js';
import './aaBoundingBox-3b33bb9e.js';
import './PooledRBush-f83588b3.js';
import './quickselect-eae177f3.js';
import './_commonjsHelpers-3f70742c.js';
import './centroid-395619b0.js';
import './WhereClause-4822f72d.js';
import './timeSupport-2189e17f.js';
import './quantizationUtils-3c89c245.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function n(n){return 32+n.length}function t$1(){return 16}function e(e){if(!e)return 0;let r=32;for(const o in e)if(e.hasOwnProperty(o)){const c=e[o];switch(typeof c){case"string":r+=n(c);break;case"number":r+=t$1();break;case"boolean":r+=4;}}return r}function r$1(n,t){return 32+n.length*t}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let r=class extends u$1{constructor(){super(...arguments),this.updating=!1,this.pending=[];}push(s,t){this.pending.push({promise:s,callback:t}),1===this.pending.length&&this.process();}process(){if(!this.pending.length)return void(this.updating=!1);this.updating=!0;const s=this.pending[0];s.promise.then((t=>s.callback(t))).catch((()=>{})).then((()=>{this.pending.shift(),this.process();}));}};e$1([y$1()],r.prototype,"updating",void 0),r=e$1([i$1("esri.core.AsyncSequence")],r);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class u{constructor(t,e){this.data=t,this.resolution=e,this.state={type:0},this.alive=!0;}process(t){switch(this.state.type){case 0:return this.state=this.gotoFetchCount(this.state,t),this.state.task.promise.then(t.resume,t.resume);case 1:break;case 2:return this.state=this.gotoFetchFeatures(this.state,t),this.state.task.promise.then(t.resume,t.resume);case 3:break;case 4:this.state=this.goToDone(this.state,t);}return null}get debugInfo(){return {data:this.data,featureCount:this.featureCount,state:this.stateToString}}get featureCount(){switch(this.state.type){case 0:case 1:return 0;case 2:return this.state.featureCount;case 3:return this.state.previous.featureCount;case 4:return this.state.features.length;case 5:return this.state.previous.features.length}}get stateToString(){switch(this.state.type){case 0:return "created";case 1:return "fetch-count";case 2:return "fetched-count";case 3:return "fetch-features";case 4:return "fetched-features";case 5:return "done"}}gotoFetchCount(t,a){return {type:1,previous:t,task:D((async t=>{const e=await u$2(a.fetchCount(this,t));1===this.state.type&&(this.state=this.gotoFetchedCount(this.state,e.ok?e.value:1/0));}))}}gotoFetchedCount(t,e){return {type:2,featureCount:e,previous:t}}gotoFetchFeatures(t,a){return {type:3,previous:t,task:D((async e=>{const r=await u$2(a.fetchFeatures(this,t.featureCount,e));3===this.state.type&&(this.state=this.gotoFetchedFeatures(this.state,r.ok?r.value:[]));}))}}gotoFetchedFeatures(t,e){return {type:4,previous:t,features:e}}goToDone(t,e){return e.finish(this,t.features),{type:5,previous:t}}reset(){const t=this.state;switch(this.state={type:0},t.type){case 0:case 2:case 4:case 5:break;case 1:case 3:t.task.abort();}}intersects(e){return !(!t$2(e)&&this.data.extent)||(a(e,i),F(this.data.extent,i))}}const i=i$2();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const O=n$1.getLogger("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiledFetcher");let x=class extends d{constructor(e){super(e),this.tilesOfInterest=[],this.availability=0,this.pendingTiles=new Map,this.pendingEdits=new r,this.pendingEditsAbortController=a$1();}get minimumVerticesPerFeature(){var e;switch(null==(e=this.store)?void 0:e.featureStore.geometryType){case"esriGeometryPoint":case"esriGeometryMultipoint":return 1;case"esriGeometryPolygon":return 4;case"esriGeometryPolyline":return 2}}set filter(e){const t=this._get("filter"),i=this.filterProperties(e);JSON.stringify(t)!==JSON.stringify(i)&&this._set("filter",i);}set customParameters(e){const t=this._get("customParameters");JSON.stringify(t)!==JSON.stringify(e)&&this._set("customParameters",e);}get configuration(){return {filter:this.filter,customParameters:this.customParameters,tileInfo:this.tileInfo,tileSize:this.tileSize}}set tileInfo(e){const i=this._get("tileInfo");i!==e&&(r$2(e)&&r$2(i)&&JSON.stringify(e)===JSON.stringify(i)||(this._set("tileInfo",e),this.store.tileInfo=e));}set tileSize(e){this._get("tileSize")!==e&&this._set("tileSize",e);}get updating(){return this.updatingHandles.updating||this.pendingEdits.updating}initialize(){this.initializeFetchExtent(),this.updatingHandles.add(this,"configuration",(()=>this.refresh())),this.updatingHandles.add(this,"tilesOfInterest",((e,t)=>{l(e,t,(({id:e},{id:t})=>e===t))||this.process();}),1);}destroy(){this.pendingTiles.forEach((e=>this.deletePendingTile(e))),this.pendingTiles.clear(),this.store.destroy(),this.tilesOfInterest.length=0,this.pendingEditsAbortController.abort(),this.pendingEditsAbortController=null;}refresh(){this.store.refresh(),this.pendingTiles.forEach((e=>this.deletePendingTile(e))),this.process();}applyEdits(e){this.pendingEdits.push(e,(async e=>{if(0!==e.addedFeatures.length||0!==e.updatedFeatures.length||0!==e.deletedFeatures.length){for(const[,e]of this.pendingTiles)e.reset();await this.updatingHandles.addPromise(this.store.processEdits(e,((e,t)=>this.queryFeaturesById(e,t)),this.pendingEditsAbortController.signal)),this.processPendingTiles();}}));}initializeFetchExtent(){if(!this.capabilities.query.supportsExtent)return;const e=D((async e=>{try{var t;const i=await S$1(this.url,new R({where:"1=1",outSpatialReference:this.spatialReference,cacheHint:!!this.capabilities.query.supportsCacheHint||void 0}),{query:this.configuration.customParameters,signal:e});this.store.extent=M.fromJSON(null==(t=i.data)?void 0:t.extent);}catch(i){w$1(i),O.error("Failed to fetch data extent",i);}}));this.updatingHandles.addPromise(e.promise.then((()=>this.process()))),this.handles.add(n$2((()=>e.abort()))),this.fetchExtentTask=e;}get debugInfo(){return {numberOfFeatures:this.store.featureStore.numFeatures,tilesOfInterest:this.tilesOfInterest,pendingTiles:Array.from(this.pendingTiles.values()).map((e=>e.debugInfo)),storedTiles:this.store.debugInfo}}process(){!r$2(this.fetchExtentTask)||this.fetchExtentTask.finished?(this.markTilesNotAlive(),this.createPendingTiles(),this.deletePendingTiles(),this.processPendingTiles()):this.setAvailability(0);}markTilesNotAlive(){for(const[,e]of this.pendingTiles)e.alive=!1;}createPendingTiles(){const e=this.collectMissingTilesInfo();if(this.setAvailability(t$2(e)?1:e.coveredArea/e.fullArea),!t$2(e))for(const{data:t,resolution:i}of e.missingTiles){const e=this.pendingTiles.get(t.id);e?(e.resolution=i,e.alive=!0):this.createPendingTile(t,i);}}collectMissingTilesInfo(){let e=null;for(let t=this.tilesOfInterest.length-1;t>=0;t--){const s=this.tilesOfInterest[t],r=this.store.process(s,((e,t)=>this.verifyTileComplexity(e,t)));t$2(e)?e=r:e.prepend(r);}return e}deletePendingTiles(){for(const[,e]of this.pendingTiles)e.alive||this.deletePendingTile(e);}processPendingTiles(){const e={fetchCount:(e,t)=>this.fetchCount(e,t),fetchFeatures:(e,t,i)=>this.fetchFeatures(e,t,i),finish:(e,t)=>this.finishPendingTile(e,t),resume:()=>this.processPendingTiles()};if(this.ensureFetchAllCounts(e))for(const[,t]of this.pendingTiles)this.verifyTileComplexity(this.store.getFeatureCount(t.data),t.resolution)&&this.updatingHandles.addPromise(t.process(e));}verifyTileComplexity(e,t){return this.verifyVertexComplexity(e)&&this.verifyFeatureDensity(e,t)}verifyVertexComplexity(e){return e*this.minimumVerticesPerFeature<j$2}verifyFeatureDensity(e,t){if(t$2(this.tileInfo))return !1;const s=this.tileSize*t;return e*(q/(s*s))<E}ensureFetchAllCounts(e){let t=!0;for(const[,i]of this.pendingTiles)i.state.type<2&&this.updatingHandles.addPromise(i.process(e)),i.state.type<=1&&(t=!1);return t}finishPendingTile(e,t){this.store.add(e.data,t),this.deletePendingTile(e),this.updateAvailability();}updateAvailability(){const e=this.collectMissingTilesInfo();this.setAvailability(t$2(e)?1:e.coveredArea/e.fullArea);}setAvailability(e){this._set("availability",e);}createPendingTile(e,t){const i=new u(e,t);return this.pendingTiles.set(e.id,i),i}deletePendingTile(e){e.reset(),this.pendingTiles.delete(e.data.id);}async fetchCount(e,t){return this.store.fetchCount(e.data,this.url,this.createCountQuery(e),{query:this.customParameters,timeout:I,signal:t})}async fetchFeatures(e,t,i){let r,n=0,o=0,a=t;for(;;){const l=this.createFeaturesQuery(e),u=this.setPagingParameters(l,n,a),{features:c,exceededTransferLimit:h}=await this.queryFeatures(l,i);if(u&&(n+=e$2(l.num)),o+=c.length,r=r?r.concat(c):c,a=t-o,!u||!h||a<=0)return r}}filterProperties(e){return t$2(e)?{where:"1=1",gdbVersion:void 0,timeExtent:void 0}:{where:e.where||"1=1",timeExtent:e.timeExtent,gdbVersion:e.gdbVersion}}queryFeaturesById(e,t){const i=this.createFeaturesQuery(null);return i.objectIds=e,this.queryFeatures(i,t)}queryFeatures(e,t){return this.capabilities.query.supportsFormatPBF?this.queryFeaturesPBF(e,t):this.queryFeaturesJSON(e,t)}async queryFeaturesPBF(e,t){const{sourceSpatialReference:i}=this,{data:s}=await c(this.url,e,new n$3({sourceSpatialReference:i}),{query:this.configuration.customParameters,timeout:I,signal:t});return re(s)}async queryFeaturesJSON(e,t){const{sourceSpatialReference:i}=this,{data:s}=await y$2(this.url,e,i,{query:this.configuration.customParameters,timeout:I,signal:t});return oe(s,this.objectIdField)}createCountQuery(e){const t=this.createBaseQuery(e);return this.capabilities.query.supportsCacheHint&&(t.cacheHint=!0),t}createFeaturesQuery(e){const i=this.createBaseQuery(e);return i.outFields=[this.objectIdField],i.returnGeometry=!0,r$2(e)&&(this.capabilities.query.supportsResultType?i.resultType="tile":this.capabilities.query.supportsCacheHint&&(i.cacheHint=!0)),i}createBaseQuery(e){const i=new R({returnZ:!1,returnM:!1,geometry:r$2(this.tileInfo)&&r$2(e)?o(e.data.extent,this.tileInfo.spatialReference):void 0}),s=this.configuration.filter;return r$2(s)&&(i.where=s.where,i.gdbVersion=s.gdbVersion,i.timeExtent=s.timeExtent),i.outSpatialReference=this.spatialReference,i}setPagingParameters(e,t,i){if(!this.capabilities.query.supportsPagination)return !1;const{supportsMaxRecordCountFactor:s,supportsCacheHint:r,tileMaxRecordCount:n,maxRecordCount:o,supportsResultType:a}=this.capabilities.query,l=s?R.MAX_MAX_RECORD_COUNT_FACTOR:1,u=l*((a||r)&&n?n:o||C$1);return e.start=t,s?(e.maxRecordCountFactor=Math.min(l,Math.ceil(i/u)),e.num=Math.min(i,e.maxRecordCountFactor*u)):e.num=Math.min(i,u),!0}};e$1([y$1({constructOnly:!0})],x.prototype,"url",void 0),e$1([y$1({constructOnly:!0})],x.prototype,"objectIdField",void 0),e$1([y$1({constructOnly:!0})],x.prototype,"capabilities",void 0),e$1([y$1({constructOnly:!0})],x.prototype,"sourceSpatialReference",void 0),e$1([y$1({constructOnly:!0})],x.prototype,"spatialReference",void 0),e$1([y$1({constructOnly:!0})],x.prototype,"store",void 0),e$1([y$1({readOnly:!0})],x.prototype,"minimumVerticesPerFeature",null),e$1([y$1()],x.prototype,"filter",null),e$1([y$1()],x.prototype,"customParameters",null),e$1([y$1({readOnly:!0})],x.prototype,"configuration",null),e$1([y$1()],x.prototype,"tileInfo",null),e$1([y$1()],x.prototype,"tileSize",null),e$1([y$1()],x.prototype,"tilesOfInterest",void 0),e$1([y$1({readOnly:!0})],x.prototype,"updating",null),e$1([y$1({readOnly:!0})],x.prototype,"availability",void 0),x=e$1([i$1("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiledFetcher")],x);const C$1=2e3,I=6e5,j$2=1e6,q=25,E=1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class t{constructor(){this._store=new Map,this._byteSize=0;}set(t,e){this.delete(t),this._store.set(t,e),this._byteSize+=e.byteSize;}delete(t){const e=this._store.get(t);return !!this._store.delete(t)&&(this._byteSize-=e.byteSize,!0)}get(t){return this.used(t),this._store.get(t)}has(t){return this.used(t),this._store.has(t)}clear(){this._store.clear();}applyByteSizeLimit(t,e){for(const[s,r]of this._store){if(this._byteSize<=t)break;this.delete(s),e(r);}}values(){return this._store.values()}[Symbol.iterator](){return this._store[Symbol.iterator]()}used(t){const e=this._store.get(t);e&&(this._store.delete(t),this._store.set(t,e));}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let g=class extends u$1{constructor(e){super(e),this.tileInfo=null,this.extent=null,this.maximumByteSize=10485760,this.tileBounds=new e$3,this.tiles=new t,this.refCounts=new Map,this.tileFeatureCounts=new Map,this.tmpBoundingRect=i$2();}add(e,t){const s=[];for(const i of t)0===this.referenceFeature(i.objectId)&&s.push(i);this.addTileStorage(e,new Set(t.map((({objectId:e})=>e))),this.byteSizeOfFeatures(t)),this.featureStore.addMany(s),this.tiles.applyByteSizeLimit(this.maximumByteSize,(e=>this.removeTileStorage(e)));}destroy(){this.clear(),this.tileFeatureCounts.clear();}clear(){this.featureStore.clear(),this.tileBounds.clear(),this.tiles.clear(),this.refCounts.clear();}refresh(){this.clear(),this.tileFeatureCounts.clear();}processEdits(e,t,s){return this.processEditsDelete(e.deletedFeatures.concat(e.updatedFeatures)),this.processEditsRefetch(e.addedFeatures.concat(e.updatedFeatures),t,s)}addTileStorage(e,t,s){this.tiles.set(e.id,new y(e,t,s)),this.tileBounds.set(e.id,e.extent),this.tileFeatureCounts.set(e.id,t.size);}remove({id:e}){const t=this.tiles.get(e);t&&this.removeTileStorage(t);}removeTileStorage(e){const t=[];for(const i of e.objectIds)1===this.unreferenceFeature(i)&&t.push(i);this.featureStore.removeManyById(t);const s=e.data.id;this.tiles.delete(s),this.tileBounds.delete(s);}processEditsDelete(e){this.featureStore.removeManyById(e);for(const[,t]of this.tiles){for(const s of e)t.objectIds.delete(s);this.tileFeatureCounts.set(t.data.id,t.objectIds.size);}for(const t of e)this.refCounts.delete(t);}async processEditsRefetch(e,t,s){const i=(await t(e,s)).features,{hasZ:r,hasM:o}=this.featureStore;for(const n of i){const e=fe(this.tmpBoundingRect,n.geometry,r,o);this.tileBounds.forEachInBounds(e,(e=>{const t=this.tiles.get(e);this.featureStore.add(n),t.objectIds.has(n.objectId)||(t.objectIds.add(n.objectId),this.referenceFeature(n.objectId),this.tileFeatureCounts.set(t.data.id,t.objectIds.size));}));}}process(e,i=(()=>!0)){if(t$2(this.tileInfo)||!e.extent||r$2(this.extent)&&!F(a(this.extent,this.tmpBoundingRect),e.extent))return new S(e);if(this.tiles.has(e.id))return new S(e);const r=this.createTileTree(e,this.tileInfo);return this.simplify(r,i,null,0,1),this.collectMissingTiles(e,r,this.tileInfo)}get debugInfo(){return Array.from(this.tiles.values()).map((({data:e})=>({data:e,featureCount:this.tileFeatureCounts.get(e.id)||0})))}getFeatureCount(e){const t=this.tileFeatureCounts.get(e.id);return null!=t?t:0}async fetchCount(e,t,s,i){const r=this.tileFeatureCounts.get(e.id);if(null!=r)return r;const o=await p(t,s,i);return this.tileFeatureCounts.set(e.id,o.data.count),o.data.count}createTileTree(e,t){const s=new v(e.level,e.row,e.col);return t.updateTileInfo(s,1),this.tileBounds.forEachInBounds(e.extent,(i=>{const r=this.tiles.get(i).data;this.tilesAreRelated(e,r)&&this.populateChildren(s,r,t,this.tileFeatureCounts.get(r.id)||0);})),s}tilesAreRelated(e,t){if(!e||!t)return !1;if(e.level===t.level)return e.row===t.row&&e.col===t.col;const s=e.level<t.level,i=s?e:t,r=s?t:e,o=1<<r.level-i.level;return Math.floor(r.row/o)===i.row&&Math.floor(r.col/o)===i.col}populateChildren(e,t,i,r){const o=t.level-e.level-1;if(o<0)return void(e.isLeaf=!0);const n=t.row>>o,l=t.col>>o,c=e.row<<1,a=l-(e.col<<1)+(n-c<<1),h=e.children[a];if(r$2(h))this.populateChildren(h,t,i,r);else {const s=new v(e.level+1,n,l);i.updateTileInfo(s,1),e.children[a]=s,this.populateChildren(s,t,i,r);}}simplify(e,t,i,r,o){const n=o*o;if(e.isLeaf)return t(this.getFeatureCount(e),o)?0:(this.remove(e),r$2(i)&&(i.children[r]=null),n);const l=o/2,c=l*l;let a=0;for(let h=0;h<e.children.length;h++){const i=e.children[h];a+=r$2(i)?this.simplify(i,t,e,h,l):c;}return 0===a?this.mergeChildren(e):1-a/n<j$1&&(this.purge(e),r$2(i)&&(i.children[r]=null),a=n),a}mergeChildren(e){const t=new Set;let s=0;this.forEachLeaf(e,(e=>{const i=this.tiles.get(e.id);if(i){s+=i.byteSize;for(const e of i.objectIds)t.has(e)||(t.add(e),this.referenceFeature(e));this.remove(e);}})),this.addTileStorage(e,t,s),e.isLeaf=!0,e.children[0]=e.children[1]=e.children[2]=e.children[3]=null,this.tileFeatureCounts.set(e.id,t.size);}forEachLeaf(e,s){for(const i of e.children)t$2(i)||(i.isLeaf?s(i):this.forEachLeaf(i,s));}purge(e){if(!t$2(e))if(e.isLeaf)this.remove(e);else for(let t=0;t<e.children.length;t++){const s=e.children[t];this.purge(s),e.children[t]=null;}}collectMissingTiles(e,t,s){const i=new C(s,e,this.extent);return this.collectMissingTilesRecurse(t,i,1),i.info}collectMissingTilesRecurse(e,s,i){if(e.isLeaf)return;if(!e.hasChildren)return void s.addMissing(e.level,e.row,e.col,i);const r=i/2;for(let o=0;o<e.children.length;o++){const i=e.children[o];t$2(i)?s.addMissing(e.level+1,(e.row<<1)+((2&o)>>1),(e.col<<1)+(1&o),r):this.collectMissingTilesRecurse(i,s,r);}}referenceFeature(e){const t=(this.refCounts.get(e)||0)+1;return this.refCounts.set(e,t),1===t?0:2}unreferenceFeature(e){const t=(this.refCounts.get(e)||0)-1;return 0===t?(this.refCounts.delete(e),1):(t>0&&this.refCounts.set(e,t),2)}byteSizeOfFeatures(e){let t=0;for(const s of e)t+=this.byteSizeOfFeature(s);return t}byteSizeOfFeature(e$1){return 32+this.byteSizeOfGeometry(e$1.geometry)+e(e$1.attributes)}byteSizeOfGeometry(e){if(!e)return 0;const t=r$1(e.lengths,4);return 32+r$1(e.coords,8)+t}get test(){return {tiles:Array.from(this.tiles.values()).map((e=>`${e.data.id}:[${Array.from(e.objectIds)}]`)),featureReferences:Array.from(this.refCounts.keys()).map((e=>`${e}:${this.refCounts.get(e)}`))}}};e$1([y$1({constructOnly:!0})],g.prototype,"featureStore",void 0),e$1([y$1()],g.prototype,"tileInfo",void 0),e$1([y$1()],g.prototype,"extent",void 0),e$1([y$1()],g.prototype,"maximumByteSize",void 0),g=e$1([i$1("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTileStore")],g);class y{constructor(e,t,s){this.data=e,this.objectIds=t,this.byteSize=s;}}class v{constructor(e,t,s){this.level=e,this.row=t,this.col=s,this.isLeaf=!1,this.extent=null,this.children=[null,null,null,null];}get hasChildren(){return !this.isLeaf&&(r$2(this.children[0])||r$2(this.children[1])||r$2(this.children[2])||r$2(this.children[3]))}}class S{constructor(e,t=[]){this.missingTiles=t,this.fullArea=0,this.coveredArea=0,this.fullArea=l$1(e.extent),this.coveredArea=this.fullArea;}prepend(e){this.missingTiles=e.missingTiles.concat(this.missingTiles),this.coveredArea+=e.coveredArea,this.fullArea+=e.fullArea;}}class C{constructor(e,t,i){this.tileInfo=e,this.extent=null,this.info=new S(t),r$2(i)&&(this.extent=a(i));}addMissing(e,t,i,r){const o={id:null,level:e,row:t,col:i};this.tileInfo.updateTileInfo(o,1),!r$2(o.extent)||r$2(this.extent)&&!F(this.extent,o.extent)||(this.info.missingTiles.push({data:o,resolution:r}),this.info.coveredArea-=l$1(o.extent));}}const j$1=.18751;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let w=class extends n$4.EventedAccessor{constructor(){super(...arguments),this.isInitializing=!0,this.whenSetup=A(),this.handles=new u$3,this.updatingHandles=new l$2,this.pendingApplyEdits=new Map;}get updating(){return this.featureFetcher.updating||this.isInitializing||this.updatingHandles.updating}destroy(){this.featureFetcher.destroy(),this.queryEngine.destroy(),this.featureStore.clear(),this.handles.destroy();}async setup(e){const{geometryType:t,objectIdField:r,timeInfo:i,fields:s}=e.serviceInfo;return this.featureStore=new u$4({...e.serviceInfo,hasZ:!1,hasM:!1}),this.queryEngine=new Z({spatialReference:e.spatialReference,featureStore:this.featureStore,geometryType:t,fields:s,hasZ:!1,hasM:!1,objectIdField:r,timeInfo:i?c$1.fromJSON(i):null}),this.featureFetcher=new x({store:new g({featureStore:this.featureStore}),url:e.serviceInfo.url,objectIdField:e.serviceInfo.objectIdField,capabilities:e.serviceInfo.capabilities,spatialReference:k.fromJSON(e.spatialReference),sourceSpatialReference:k.fromJSON(e.serviceInfo.spatialReference)}),this.handles.add([this.featureFetcher.watch("availability",(e=>this.emit("notify-availability",{availability:e})),!0),this.watch("updating",(()=>this.notifyUpdating()))]),this.whenSetup.resolve(),this.isInitializing=!1,this.configure(e.configuration)}async configure(e){return await this.updatingHandles.addPromise(this.whenSetup.promise),this.updateFeatureFetcherConfiguration(e),{result:{}}}async fetchCandidates(e,r){await this.whenSetup.promise,h(r);return {result:await this.queryEngine.executeQueryForSnapping({point:e.point,distance:e.distance,types:e.types,query:r$2(e.filter)?e.filter:{where:"1=1"}},r$2(r)?r.signal:null)}}async updateTiles(e,r){return await this.updatingHandles.addPromise(this.whenSetup.promise),h(r),this.featureFetcher.tileSize=e.tileSize,this.featureFetcher.tilesOfInterest=e.tiles,this.featureFetcher.tileInfo=r$2(e.tileInfo)?x$1.fromJSON(e.tileInfo):null,{result:{}}}async refresh(e,t){return await this.updatingHandles.addPromise(this.whenSetup.promise),h(t),this.featureFetcher.refresh(),{result:{}}}async whenNotUpdating(e,t){return await this.updatingHandles.addPromise(this.whenSetup.promise),h(t),await P(A$1(this,"updating"),t),{result:{}}}async getDebugInfo(e,t){return h(t),{result:this.featureFetcher.debugInfo}}async beginApplyEdits(e,t){this.updatingHandles.addPromise(this.whenSetup.promise),h(t);const r=A();return this.pendingApplyEdits.set(e.id,r),this.featureFetcher.applyEdits(r.promise),this.updatingHandles.addPromise(r.promise),{result:{}}}async endApplyEdits(e,t){const r=this.pendingApplyEdits.get(e.id);return r&&r.resolve(e.edits),h(t),{result:{}}}updateFeatureFetcherConfiguration(e){this.featureFetcher.filter=r$2(e.filter)?R.fromJSON(e.filter):null,this.featureFetcher.customParameters=e.customParameters;}notifyUpdating(){this.emit("notify-updating",{updating:this.updating});}};function j(){return new w}e$1([y$1({readOnly:!0})],w.prototype,"updating",null),e$1([y$1()],w.prototype,"isInitializing",void 0),w=e$1([i$1("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceSnappingSourceWorker")],w);

export default j;
export { w as FeatureServiceSnappingSourceWorker };
