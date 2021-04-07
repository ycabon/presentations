import { k as i$1, ch as y, f as t, f2 as p, G as t$1, E as f, bJ as c$1, a2 as i$2, bQ as f$1 } from './_virtual:index-325c676c.js';
import { G } from './aaBoundingBox-c7eff59a.js';
import { i as i$3 } from './quantizationUtils-521d4bba.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function r(r,a,t){r.referencesGeometry();const n=a.readArcadeFeature();try{return r.evaluate({...t,$feature:n})}catch(r){return i$1.getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:",r),null}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const c=import('./labelFormatUtils-d94a510a.js');class n{constructor(e,s){this._canCacheExpressionValue=!1,this._sourceInfo=e,this._bitsets={computed:s.getBitset(s.createBitset())};}async updateSchema(r,o){const c=y(this._schema,o);if(this._schema=o,!o||t(c)||!p(c,"attributes"))return;t$1("esri-2d-update-debug")&&console.debug("Applying Update - Store:",c),this._bitsets.computed.clear(),r.targets[o.name]=!0;const n=o.attributes,p$1=[],u=[];for(const e in n){const s=n[e];switch(s.type){case"field":break;case"expression":p$1.push(this._createArcadeComputedField(s));break;case"label-expression":p$1.push(this._createLabelArcadeComputedField(s));break;case"statistic":u.push(s);}}this._computedFields=await f(p$1),this._canCacheExpressionValue=!this._computedFields.some((e=>"expression"===e.type&&e.expression.referencesScale())),this._statisticFields=u;}setComputedAttributes(e,s,t,r){const i=this._bitsets.computed;if(!this._canCacheExpressionValue||!i.has(t)){i.set(t);for(const i of this._computedFields){const a=this._evaluateField(s,i,r);switch(i.resultType){case"numeric":e.setComputedNumericAtIndex(t,i.fieldIndex,a);break;case"string":e.setComputedStringAtIndex(t,i.fieldIndex,a);}}}}async _createArcadeComputedField(e){const s=this._sourceInfo.spatialReference,t=this._sourceInfo.fieldsIndex;return {...e,expression:await c$1(e.valueExpression,s,t)}}async _createLabelArcadeComputedField(e){const s=this._sourceInfo.spatialReference,t=this._sourceInfo.fields,{createLabelFunction:r}=await c,i=await r(e.label,t,s);return {...e,builder:i}}_evaluateField(e,s,t){switch(s.type){case"label-expression":{const t=e.readArcadeFeature();return s.builder.evaluate(t)||""}case"expression":{const{expression:r$1}=s;return r(r$1,e,{$view:{scale:t}})}}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function o(t){return (4294901760&t)>>>16}function i(t){return 65535&t}const d={getObjectId:t=>t.getObjectId(),getAttributes:t=>t.readAttributes(),getAttribute:(t,e)=>t.readAttribute(e),cloneWithGeometry:(t,e)=>t,getGeometry:t=>t.readHydratedGeometry(),getCentroid:(t,e)=>t.readCentroid()};class u extends n{constructor(t,e){super(t,e),this.featureAdapter=d,this.events=new i$2,this._featureSetsByInstance=new Map,this._objectIdToDisplayId=new Map,this._spatialIndexInvalid=!0,this._index=i$3(9,(t=>({minX:this._storage.getXMin(t),minY:this._storage.getYMin(t),maxX:this._storage.getXMax(t),maxY:this._storage.getYMax(t)})));}get storeStatistics(){return {featureCount:0,vertexCount:0}}onTileData(e,s,a){if(t(s.addOrUpdate))return s;this._featureSetsByInstance.set(s.addOrUpdate.instance,s.addOrUpdate),this._storage=a,s.addOrUpdate._storage=a;const r=s.addOrUpdate.getCursor();for(;r.next();){const t=r.getObjectId(),s=(n=r.instance,o=r.getIndex(),n<<16|o);let i=this._objectIdToDisplayId.get(t);i||(i=a.createDisplayId(),this._objectIdToDisplayId.set(t,i),this._spatialIndexInvalid=!0),r.setDisplayId(i),a.setInstanceId(i,s),this.setComputedAttributes(a,r,i,e.scale);}var n,o;return "update"===s.type&&(this._spatialIndexInvalid=!0),this.events.emit("changed"),s}forEach(t){this._objectIdToDisplayId.forEach((e=>{const s=this._storage.getInstanceId(e),a=this._lookupFeature(s);t(a);}));}forEachUnsafe(t){this._objectIdToDisplayId.forEach((e=>{const s=this._storage.getInstanceId(e),a=o(s),r=i(s),n=this._getFeatureSet(a);n.setIndex(r),t(n);}));}forEachInBounds(t,s){const a=this._searchIndex(t);for(const t of a){const a=this.lookupFeatureByDisplayId(t,this._storage);s(f$1(a));}}forEachBounds(t,e,s){this._rebuildIndex();const r=[0,0,0,0];for(const n of t){if(!n.readGeometry())continue;const t=n.getDisplayId();r[0]=this._storage.getXMin(t),r[1]=this._storage.getYMin(t),r[2]=this._storage.getXMax(t),r[3]=this._storage.getYMax(t),e(G(s,r));}}sweepFeatures(t,e,s){this._objectIdToDisplayId.forEach(((a,r)=>{t.has(a)||(e.releaseDisplayId(a),s.unsetAttributeData(a),this._objectIdToDisplayId.delete(r));})),this.events.emit("changed");}sweepFeatureSets(t){this._featureSetsByInstance.forEach(((e,s)=>{t.has(s)||this._featureSetsByInstance.delete(s);}));}lookupObjectId(e,s){const a=this.lookupFeatureByDisplayId(e,s);return t(a)?null:a.getObjectId()}lookupDisplayId(t){return this._objectIdToDisplayId.get(t)}lookupFeatureByDisplayId(t,e){const s=e.getInstanceId(t);return this._lookupFeature(s)}lookupByDisplayIdUnsafe(t){const e=this._storage.getInstanceId(t),s=o(e),a=i(e),r=this._getFeatureSet(s);return r?(r.setIndex(a),r):null}hasInstance(t){return this._featureSetsByInstance.has(t)}_rebuildIndex(){if(!this._spatialIndexInvalid)return;this._index.clear();const t=[];this._objectIdToDisplayId.forEach((e=>{const s=this._storage.getInstanceId(e);this._storage.setBounds(e,this._lookupFeature(s))&&t.push(e);})),this._index.load(t),this._spatialIndexInvalid=!1;}_lookupFeature(t){const e=o(t),s=i(t),a=this._getFeatureSet(e);if(!a)return null;const r=a.getCursor();return r.setIndex(s),r}_getFeatureSet(t){return this._featureSetsByInstance.get(t)}_searchIndex(t){this._rebuildIndex();const e={minX:t[0],minY:t[1],maxX:t[2],maxY:t[3]};return this._index.search(e)}}

export { d, n, u };