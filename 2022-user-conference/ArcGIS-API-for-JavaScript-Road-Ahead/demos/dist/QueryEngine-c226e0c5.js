import { sD as h, gL as a, sE as r, dz as r$1, gi as h$1, es as s, t as t$1, sF as E, sG as F, sH as A, qV as w, oe as C, og as f, c6 as g, e1 as $, sI as q, fD as E$1, c4 as f$1, v, Q as v$1, E as s$1, m as r$2, lr as F$1, Y as y, sJ as z, eO as I, rD as x, rE as b, sK as l, sL as M, sM as v$3, d5 as nt, c3 as u, cB as o, bM as y$1, bZ as c, bI as u$1, kO as i, sN as c$1, sO as o$1, sP as a$1, sQ as f$2 } from './_virtual_index-1ea2035a.js';
import { t } from './QueryEngineCapabilities-45006836.js';
import { t as t$2, v as v$2, n, I as I$1, P } from './timeSupport-eac99e81.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function V(e){return e.every((e=>"exceedslimit"!==e.statisticType))}const W="feature-store:unsupported-query";const K=new h(2e6);let X=0;class Y{constructor(e){this.capabilities={query:t},this.geometryType=e.geometryType,this.hasM=e.hasM,this.hasZ=e.hasZ,this.objectIdField=e.objectIdField,this.spatialReference=e.spatialReference,this.definitionExpression=e.definitionExpression,this.featureStore=e.featureStore,this.aggregateAdapter=e.aggregateAdapter,this._changeHandle=this.featureStore.events.on("changed",(()=>this.clearCache())),this.timeInfo=e.timeInfo,e.cacheSpatialQueries&&(this._geometryQueryCache=new r(X+++"$$",K)),this.fieldsIndex=new r$1(e.fields),e.scheduler&&e.priority&&(this._frameTask=e.scheduler.registerTask(e.priority));}destroy(){this._frameTask=h$1(this._frameTask),this.clearCache(),s(this._geometryQueryCache),this._changeHandle=h$1(this._changeHandle),s(this.fieldsIndex);}get featureAdapter(){return this.featureStore.featureAdapter}get fullExtent(){const e=this.featureStore.fullBounds;return t$1(e)?null:{xmin:e[0],ymin:e[1],xmax:e[2],ymax:e[3],spatialReference:E(this.spatialReference)}}get timeExtent(){return this.timeInfo?(this._timeExtent||(this._timeExtent=t$2(this.timeInfo,this.featureStore)),this._timeExtent):null}clearCache(){this._geometryQueryCache?.clear(),this._allItems=null,this._timeExtent=null;}async executeQuery(e,t){try{return (await this._executeQuery(e,{},t)).createQueryResponse()}catch(i){if(i!==F)throw i;return new A([],e,this).createQueryResponse()}}async executeQueryForCount(e={},t){try{return (await this._executeQuery(e,{returnGeometry:!1,returnCentroid:!1,outSR:null},t)).createQueryResponseForCount()}catch(i){if(i!==F)throw i;return 0}}async executeQueryForExtent(e,t){const i=e.outSR;try{const s=await this._executeQuery(e,{returnGeometry:!0,returnCentroid:!1,outSR:null},t),r=s.size;if(!r)return {count:0,extent:null};w(te,C),this.featureStore.forEachBounds(s.items,(e=>f(te,e)),ee);const a={xmin:te[0],ymin:te[1],xmax:te[3],ymax:te[4],spatialReference:E(this.spatialReference)};this.hasZ&&isFinite(te[2])&&isFinite(te[5])&&(a.zmin=te[2],a.zmax=te[5]);const n=g(a,s.spatialReference,i);if(n.spatialReference=E(i||this.spatialReference),n.xmax-n.xmin==0){const e=$(n.spatialReference);n.xmin-=e,n.xmax+=e;}if(n.ymax-n.ymin==0){const e=$(n.spatialReference);n.ymin-=e,n.ymax+=e;}if(this.hasZ&&null!=n.zmin&&null!=n.zmax&&n.zmax-n.zmin==0){const e=$(n.spatialReference);n.zmin-=e,n.zmax+=e;}return {count:r,extent:n}}catch(s){if(s===F)return {count:0,extent:null};throw s}}async executeQueryForIds(e,t){return this.executeQueryForIdSet(e,t).then((e=>Array.from(e)))}async executeQueryForIdSet(e,t){try{const i=await this._executeQuery(e,{returnGeometry:!0,returnCentroid:!1,outSR:null},t),s=i.items,r=new Set;return await this._reschedule((()=>{for(const e of s)r.add(i.featureAdapter.getObjectId(e));}),t),r}catch(i){if(i===F)return new Set;throw i}}async executeQueryForSnapping(e,t){const{point:i,distance:s,types:r}=e;if(r===q.NONE)return {candidates:[]};const a=await this._reschedule((()=>this._checkQuerySupport(e.query)),t),o=!E$1(i.spatialReference,this.spatialReference);o&&await f$1(i.spatialReference,this.spatialReference);const u="number"==typeof s?s:s.x,c="number"==typeof s?s:s.y,h={xmin:i.x-u,xmax:i.x+u,ymin:i.y-c,ymax:i.y+c,spatialReference:i.spatialReference},l=o?g(h,this.spatialReference):h;if(!l)return {candidates:[]};const f=(await v(v$1(i),null,{signal:t}))[0],m=(await v(v$1(l),null,{signal:t}))[0];if(t$1(f)||t$1(m))return {candidates:[]};const p=new A(this._searchFeatures(this._getQueryBBoxes(m.toJSON())),a,this);await this._reschedule((()=>this._executeObjectIdsQuery(p)),t),await this._reschedule((()=>this._executeTimeQuery(p)),t),await this._reschedule((()=>this._executeAttributesQuery(p)),t);const d=f.toJSON(),y=o?g(d,this.spatialReference):d,g$1=o?Math.max(l.xmax-l.xmin,l.ymax-l.ymin)/2:s;return p.createSnappingResponse({...e,point:y,distance:g$1},i.spatialReference)}async executeQueryForLatestObservations(e,t){if(!this.timeInfo||!this.timeInfo.trackIdField)throw new s$1(W,"Missing timeInfo or timeInfo.trackIdField",{query:e,timeInfo:this.timeInfo});try{const i=await this._executeQuery(e,{},t);return await this._reschedule((()=>this._filterLatest(i)),t),i.createQueryResponse()}catch(s){if(s!==F)throw s;return new A([],e,this).createQueryResponse()}}async executeQueryForSummaryStatistics(e={},t,i){const{field:s,normalizationField:r,valueExpression:a}=t;return (await this._getQueryEngineResultForStats(e,{field:s,normalizationField:r,valueExpression:a},i)).createSummaryStatisticsResponse(t)}async executeQueryForUniqueValues(e={},t,i){const{field:s,field2:r,field3:a,valueExpression:n}=t;return (await this._getQueryEngineResultForStats(e,{field:s,field2:r,field3:a,valueExpression:n},i)).createUniqueValuesResponse(t)}async executeQueryForClassBreaks(e={},t,i){const{field:s,normalizationField:r,valueExpression:a}=t;return (await this._getQueryEngineResultForStats(e,{field:s,normalizationField:r,valueExpression:a},i)).createClassBreaksResponse(t)}async executeQueryForHistogram(e={},t,i){const{field:s,normalizationField:r,valueExpression:a}=t;return (await this._getQueryEngineResultForStats(e,{field:s,normalizationField:r,valueExpression:a},i)).createHistogramResponse(t)}async _schedule(e,t){return r$2(this._frameTask)?this._frameTask.schedule(e,t):e(F$1)}async _reschedule(e,t){return r$2(this._frameTask)?this._frameTask.reschedule(e,t):e(F$1)}_getAll(e){return t$1(this._allItems)&&(this._allItems=this.featureStore.toArray()),new A(this._allItems,e,this)}async _executeQuery(e,t,i){e=y(e),e=await this._schedule((()=>z(e,this.definitionExpression,this.spatialReference)),i),e=await this._reschedule((()=>this._checkQuerySupport(e)),i),e={...e,...t};const r=await this._reschedule((()=>this._executeSceneFilterQuery(e,i)),i),a=await this._reschedule((()=>this._executeGeometryQuery(e,r,i)),i);return await this._reschedule((()=>this._executeAggregateIdsQuery(a)),i),await this._reschedule((()=>this._executeObjectIdsQuery(a)),i),await this._reschedule((()=>this._executeTimeQuery(a)),i),await this._reschedule((()=>this._executeAttributesQuery(a)),i),a}async _executeSceneFilterQuery(e,t){if(t$1(e.sceneFilter))return null;const{outSR:i,returnGeometry:s,returnCentroid:r}=e,a=this.featureStore.featureSpatialReference,o=e.sceneFilter.geometry,u=t$1(a)||E$1(a,o.spatialReference)?o:g(o,a);if(!u)return null;const c=s||r,h=I(i)&&!E$1(this.spatialReference,i)&&c?async e=>this._project(e,i):e=>e,l=this.featureAdapter,f=this._searchFeatures(this._getQueryBBoxes(u));if("disjoint"===e.sceneFilter.spatialRelationship){if(!f.length)return null;const i=new Set;for(const e of f)i.add(l.getObjectId(e));const s=await this._reschedule((()=>this.featureStore.toArray()),t),r=await this._reschedule((async()=>{const r=await v$2("esriSpatialRelDisjoint",u,this.geometryType,this.hasZ,this.hasM),a=e=>!i.has(l.getObjectId(e))||r(l.getGeometry(e)),n=await this._runSpatialFilter(s,a,t);return new A(n,e,this)}),t);return h(r)}if(!f.length)return new A([],e,this);if(this._canExecuteSinglePass(u,e))return h(new A(f,e,this));const m=await v$2("esriSpatialRelContains",u,this.geometryType,this.hasZ,this.hasM),p=await this._runSpatialFilter(f,(e=>m(l.getGeometry(e))),t);return h(new A(p,e,this))}async _executeGeometryQuery(i,s,r){if(r$2(s)&&0===s.items.length)return s;i=r$2(s)?s.query:i;const{geometry:a,outSR:u,spatialRel:c,returnGeometry:h,returnCentroid:l}=i,f=this.featureStore.featureSpatialReference,m=!a||t$1(f)||E$1(f,a.spatialReference)?a:g(a,f),p=h||l,d=I(u)&&!E$1(this.spatialReference,u),y=this._geometryQueryCache&&t$1(s)?d&&p?JSON.stringify({originalFilterGeometry:a,spatialRelationship:c,outSpatialReference:u}):JSON.stringify({originalFilterGeometry:a,spatialRelationship:c}):null,g$1=y?this._geometryQueryCache.get(y):null;if(r$2(g$1))return new A(g$1,i,this);const x$1=async e=>(d&&p&&await this._project(e,u),y&&this._geometryQueryCache.put(y,e.items,e.items.length+1),e);if(!m)return x$1(r$2(s)?s:this._getAll(i));const _=this.featureAdapter;let w=this._searchFeatures(this._getQueryBBoxes(a));if("esriSpatialRelDisjoint"===c){if(!w.length)return x$1(r$2(s)?s:this._getAll(i));const e=new Set;for(const i of w)e.add(_.getObjectId(i));const t=r$2(s)?s.items:await this._reschedule((()=>this.featureStore.toArray()),r),a=await this._reschedule((async()=>{const s=await v$2(c,m,this.geometryType,this.hasZ,this.hasM),a=t=>!e.has(_.getObjectId(t))||s(_.getGeometry(t)),n=await this._runSpatialFilter(t,a,r);return new A(n,i,this)}),r);return x$1(a)}if(r$2(s)){const i=new x;w=w.filter((e=>b(s.items,e,s.items.length,i)>=0));}if(!w.length){const e=new A([],i,this);return y&&this._geometryQueryCache.put(y,e.items,1),e}if(this._canExecuteSinglePass(m,i))return x$1(new A(w,i,this));const S=await v$2(c,m,this.geometryType,this.hasZ,this.hasM),Q=await this._runSpatialFilter(w,(e=>S(_.getGeometry(e))),r);return x$1(new A(Q,i,this))}_executeAggregateIdsQuery(e){if(0===e.items.length||!e.query.aggregateIds||!e.query.aggregateIds.length||t$1(this.aggregateAdapter))return;const t=new Set;for(const s of e.query.aggregateIds){this.aggregateAdapter.getFeatureObjectIds(s).forEach((e=>t.add(e)));}const i=this.featureAdapter.getObjectId;e.items=e.items.filter((e=>t.has(i(e))));}_executeObjectIdsQuery(e){if(0===e.items.length||!e.query.objectIds||!e.query.objectIds.length)return;const t=new Set(e.query.objectIds),i=this.featureAdapter.getObjectId;e.items=e.items.filter((e=>t.has(i(e))));}_executeTimeQuery(e){if(0===e.items.length)return;const t=n(this.timeInfo,e.query.timeExtent,this.featureAdapter);t$1(t)||(e.items=e.items.filter(t));}_executeAttributesQuery(e){if(0===e.items.length)return;const t=l(e.query.where,this.fieldsIndex);if(t){if(!t.isStandardized)throw new TypeError("Where clause is not standardized");e.items=e.items.filter((e=>t.testFeature(e,this.featureAdapter)));}}async _runSpatialFilter(e,t,i){if(!t)return e;if(t$1(this._frameTask))return e.filter((e=>t(e)));let s=0;const r=new Array,a=async n=>{for(;s<e.length;){const o=e[s++];t(o)&&(r.push(o),n.madeProgress()),n.done&&await this._reschedule((e=>a(e)),i);}};return this._reschedule((e=>a(e)),i).then((()=>r))}_filterLatest(e){const{trackIdField:t,startTimeField:i,endTimeField:s}=this.timeInfo,r=s||i,a=new Map,n=this.featureAdapter.getAttribute;for(const o of e.items){const e=n(o,t),i=n(o,r),s=a.get(e);(!s||i>n(s,r))&&a.set(e,o);}e.items=Array.from(a.values());}_canExecuteSinglePass(e,t){const{spatialRel:i}=t;return I$1(e)&&("esriSpatialRelEnvelopeIntersects"===i||"esriGeometryPoint"===this.geometryType&&("esriSpatialRelIntersects"===i||"esriSpatialRelContains"===i||"esriSpatialRelWithin"===i))}async _project(e,t){if(!t||E$1(this.spatialReference,t))return e;const i=this.featureAdapter,s=await M(e.items.map((e=>v$3(this.geometryType,this.hasZ,this.hasM,i.getGeometry(e)))),this.spatialReference,t);return e.items=s.map(((t,s)=>i.cloneWithGeometry(e.items[s],nt(t,this.hasZ,this.hasM)))),e}_getQueryBBoxes(e){if(I$1(e)){if(u(e))return [o(e.xmin,e.ymin,e.xmax,e.ymax)];if(y$1(e))return e.rings.map((e=>o(Math.min(e[0][0],e[2][0]),Math.min(e[0][1],e[2][1]),Math.max(e[0][0],e[2][0]),Math.max(e[0][1],e[2][1]))))}return [c(u$1(),e)]}_searchFeatures(e){for(const i of e)this.featureStore.forEachInBounds(i,(e=>ie.add(e)));const t=Array.from(ie.values());return ie.clear(),t}async _checkStatisticsSupport(e,t){if(e.distance<0||null!=e.geometryPrecision||e.multipatchOption||e.pixelSize||e.relationParam||e.text||e.outStatistics||e.groupByFieldsForStatistics||e.having||e.orderByFields)throw new s$1(W,"Unsupported query options",{query:e});return this._checkAttributesQuerySupport(e),Promise.all([this._checkStatisticsParamsSupport(t),P(e,this.geometryType,this.spatialReference),f$1(this.spatialReference,e.outSR)]).then((()=>e))}async _checkStatisticsParamsSupport(e){let t=[];if(e.valueExpression){const{arcadeUtils:i$1}=await i();t=i$1.extractFieldNames(e.valueExpression);}if(e.field&&t.push(e.field),e.field2&&t.push(e.field2),e.field3&&t.push(e.field3),e.normalizationField&&t.push(e.normalizationField),!t.length)throw new s$1(W,"params should have at least a field or valueExpression",{params:e});c$1(this.fieldsIndex,t,"params contains missing fields");}async _checkQuerySupport(e){if(e.distance<0||null!=e.geometryPrecision||e.multipatchOption||e.pixelSize||e.relationParam||e.text)throw new s$1(W,"Unsupported query options",{query:e});return this._checkAttributesQuerySupport(e),this._checkStatisticsQuerySupport(e),Promise.all([P(e,this.geometryType,this.spatialReference),f$1(this.spatialReference,e.outSR)]).then((()=>e))}_checkAttributesQuerySupport(e){const{outFields:t,orderByFields:s,returnDistinctValues:r,outStatistics:a}=e,n=a?a.map((e=>e.outStatisticFieldName&&e.outStatisticFieldName.toLowerCase())).filter(Boolean):[];if(s&&s.length>0){const e=" asc",t=" desc",i=s.map((i=>{const s=i.toLowerCase();return s.includes(e)?s.split(e)[0]:s.includes(t)?s.split(t)[0]:i})).filter((e=>!n.includes(e)));c$1(this.fieldsIndex,i,"orderByFields contains missing fields");}if(t&&t.length>0)c$1(this.fieldsIndex,t,"outFields contains missing fields");else if(r)throw new s$1(W,"outFields should be specified for returnDistinctValues",{query:e});o$1(this.fieldsIndex,e.where);}_checkStatisticsQuerySupport(e){const{outStatistics:t,groupByFieldsForStatistics:s,having:r}=e,a=s&&s.length,n=t&&t.length;if(r){if(!a||!n)throw new s$1(W,"outStatistics and groupByFieldsForStatistics should be specified with having",{query:e});a$1(this.fieldsIndex,r,t);}if(n){if(!V(t))return;const r=t.map((e=>e.onStatisticField)).filter(Boolean);c$1(this.fieldsIndex,r,"onStatisticFields contains missing fields"),a&&c$1(this.fieldsIndex,s,"groupByFieldsForStatistics contains missing fields");for(const s of t){const{onStatisticField:t,statisticType:r}=s;if(("percentile_disc"===r||"percentile_cont"===r)&&"statisticParameters"in s){const{statisticParameters:t}=s;if(!t)throw new s$1(W,"statisticParamters should be set for percentile type",{definition:s,query:e})}else if("count"!==r&&t&&f$2(t,this.fieldsIndex))throw new s$1(W,"outStatistics contains non-numeric fields",{definition:s,query:e})}}}async _getQueryEngineResultForStats(e,t,i){e=y(e);try{e=await this._schedule((()=>z(e,this.definitionExpression,this.spatialReference)),i),e=await this._reschedule((()=>this._checkStatisticsSupport(e,t)),i);const s=await this._reschedule((()=>this._executeSceneFilterQuery(e,i)),i),r=await this._reschedule((()=>this._executeGeometryQuery(e,s,i)),i);return await this._reschedule((()=>this._executeAggregateIdsQuery(r)),i),await this._reschedule((()=>this._executeObjectIdsQuery(r)),i),await this._reschedule((()=>this._executeTimeQuery(r)),i),await this._reschedule((()=>this._executeAttributesQuery(r)),i),r}catch(r){if(r!==F)throw r;return new A([],e,this)}}}const ee=a(),te=a(),ie=new Set;

export { Y };