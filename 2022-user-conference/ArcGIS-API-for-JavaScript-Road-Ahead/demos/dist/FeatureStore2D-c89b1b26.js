import { s as s$1 } from './CircularArray-16e4be85.js';
import { Z as s, cC as m, t, kY as a$1, F as has, cq as i, aH as n, bx as i$1, r as r$2, al as e, iY as O } from './_virtual_index-fc1e0009.js';
import { x } from './ComputedAttributeStorage-7fb1a814.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function r$1(r,a,t){r.referencesGeometry();const n=a.readArcadeFeature();try{return r.evaluate({...t,$feature:n})}catch(o){return s.getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:",o),null}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const a=import('./labelFormatUtils-eac4a6a1.js');class o{constructor(e,s){this._canCacheExpressionValue=!1,this._sourceInfo=e,this._storage=s,this._bitsets={computed:s.getBitset(s.createBitset())};}get storage(){return this._storage}invalidate(){this._bitsets.computed.clear();}async updateSchema(i,r){const a=m(this._schema,r);if(this._schema=r,!r||t(a)||!a$1(a,"attributes"))return;has("esri-2d-update-debug")&&console.debug("Applying Update - Store:",a),this._bitsets.computed.clear(),i.targets[r.name]=!0;const o=r.attributes,c=[],n=[];for(const e in o){const s=o[e];switch(s.type){case"field":break;case"expression":c.push(this._createArcadeComputedField(s));break;case"label-expression":c.push(this._createLabelArcadeComputedField(s));break;case"statistic":n.push(s);}}this._computedFields=await Promise.all(c),this._canCacheExpressionValue=!this._computedFields.some((e=>"expression"===e.type&&e.expression.referencesScale())),this._statisticFields=n;}setComputedAttributes(e,s,t,i){const r=this._bitsets.computed;if(!this._canCacheExpressionValue||!r.has(t)){r.set(t);for(const r of this._computedFields){const a=this._evaluateField(s,r,i);switch(r.resultType){case"numeric":e.setComputedNumericAtIndex(t,r.fieldIndex,a);break;case"string":e.setComputedStringAtIndex(t,r.fieldIndex,a);}}}}async _createArcadeComputedField(e){const s=this._sourceInfo.spatialReference,t=this._sourceInfo.fieldsIndex;return {...e,expression:await i(e.valueExpression,s,t)}}async _createLabelArcadeComputedField(e){const s=this._sourceInfo.spatialReference,t=this._sourceInfo.fieldsIndex,{createLabelFunction:i}=await a,r=await i(e.label,t,s);return {...e,builder:r}}_evaluateField(e,s,t){switch(s.type){case"label-expression":{const t=e.readArcadeFeature();return s.builder.evaluate(t)||""}case"expression":{const{expression:i}=s;return r$1(i,e,{$view:{scale:t}})}}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class r extends x{constructor(r,t){super(x.createInstance(),r.fullSchema()),this._currentIndex=-1,this._reader=r,this._indices=t;}static from(e,t){return new r(e.copy(),t)}get hasNext(){return this._currentIndex+1<this._indices.length}getSize(){return this._indices.length}getCursor(){return this.copy()}copy(){const e=new r(this._reader.copy(),this._indices);return e._currentIndex=this._currentIndex,e}next(){for(;this._nextIndex()&&!this._reader._getExists(););return this._currentIndex<this._indices.length}_nextIndex(){return ++this._currentIndex<this._indices.length&&(this._reader.setIndex(this._indices[this._currentIndex]),!0)}setArcadeSpatialReference(e){this._reader.setArcadeSpatialReference(e);}attachStorage(e){this._reader.attachStorage(e);}get geometryType(){return this._reader.geometryType}get hasFeatures(){return this._reader.hasFeatures}get exceededTransferLimit(){return this._reader.exceededTransferLimit}get hasZ(){return this._reader.hasZ}get hasM(){return this._reader.hasM}getStorage(){return this._reader.getStorage()}getComputedNumeric(e){return this._reader.getComputedNumericAtIndex(0)}setComputedNumeric(e,r){return this._reader.setComputedNumericAtIndex(r,0)}getComputedString(e){return this._reader.getComputedStringAtIndex(0)}setComputedString(e,r){return this._reader.setComputedStringAtIndex(0,r)}getComputedNumericAtIndex(e){return this._reader.getComputedNumericAtIndex(e)}setComputedNumericAtIndex(e,r){this._reader.setComputedNumericAtIndex(e,r);}getComputedStringAtIndex(e){return this._reader.getComputedStringAtIndex(e)}setComputedStringAtIndex(e,r){return this._reader.setComputedStringAtIndex(e,r)}transform(e,r,t,d){const a=this.copy();return a._reader=this._reader.transform(e,r,t,d),a}readAttribute(e,r=!1){return this._reader.readAttribute(e,r)}readAttributes(){return this._reader.readAttributes()}joinAttributes(e){return this._reader.joinAttributes(e)}readArcadeFeature(){return this._reader.readArcadeFeature()}geometry(){return this._reader.geometry()}field(e){return this.readAttribute(e,!0)}hasField(e){return this._reader.hasField(e)}setField(e,r){return this._reader.setField(e,r)}keys(){return this._reader.keys()}castToText(){return this._reader.castToText()}getQuantizationTransform(){return this._reader.getQuantizationTransform()}getFieldNames(){return this._reader.getFieldNames()}getAttributeHash(){return this._reader.getAttributeHash()}getObjectId(){return this._reader.getObjectId()}getDisplayId(){return this._reader.getDisplayId()}setDisplayId(e){return this._reader.setDisplayId(e)}getGroupId(){return this._reader.getGroupId()}setGroupId(e){return this._reader.setGroupId(e)}getXHydrated(){return this._reader.getXHydrated()}getYHydrated(){return this._reader.getYHydrated()}getX(){return this._reader.getX()}getY(){return this._reader.getY()}setIndex(e){return this._reader.setIndex(e)}getIndex(){return this._reader.getIndex()}readLegacyFeature(){return this._reader.readLegacyFeature()}readOptimizedFeature(){return this._reader.readOptimizedFeature()}readLegacyPointGeometry(){return this._reader.readLegacyPointGeometry()}readLegacyGeometry(){return this._reader.readLegacyGeometry()}readLegacyCentroid(){return this._reader.readLegacyCentroid()}readGeometryArea(){return this._reader.readGeometryArea()}readUnquantizedGeometry(){return this._reader.readUnquantizedGeometry()}readHydratedGeometry(){return this._reader.readHydratedGeometry()}readGeometry(){return this._reader.readGeometry()}readCentroid(){return this._reader.readCentroid()}_readAttribute(e,r){throw new Error("Error: Should not be called. Underlying _reader should be used instead")}_readAttributes(){throw new Error("Error: Should not be called. Underlying _reader should be used instead")}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function h(t,e){return t<<16|e}function c(t){return (4294901760&t)>>>16}function I(t){return 65535&t}const u={getObjectId:t=>t.getObjectId(),getAttributes:t=>t.readAttributes(),getAttribute:(t,e)=>t.readAttribute(e),cloneWithGeometry:(t,e)=>t,getGeometry:t=>t.readHydratedGeometry(),getCentroid:(t,e)=>t.readCentroid()};class l extends o{constructor(s,a,r){super(s,a),this.featureAdapter=u,this.events=new n,this._featureSetsByInstance=new Map,this._objectIdToDisplayId=new Map,this._spatialIndexInvalid=!0,this._indexSearchCache=new s$1(50),this._index=i$1(9,(t=>({minX:this._storage.getXMin(t),minY:this._storage.getYMin(t),maxX:this._storage.getXMax(t),maxY:this._storage.getYMax(t)}))),this.mode=r;}get storeStatistics(){let t=0,e=0,s=0;return this.forEach((a=>{const r=a.readGeometry();r&&(e+=r.isPoint?1:r.lengths.reduce(((t,e)=>t+e),0),s+=r.isPoint?1:r.lengths.length,t+=1);})),{featureCount:t,vertexCount:e,ringCount:s}}hasInstance(t){return this._featureSetsByInstance.has(t)}onTileData(t$1,e){if(t(e.addOrUpdate))return e;if(e.addOrUpdate.attachStorage(this._storage),"snapshot"===this.mode){const s=e.addOrUpdate.getCursor();for(;s.next();){const e=s.getDisplayId();this.setComputedAttributes(this._storage,s,e,t$1.scale);}return e}this._featureSetsByInstance.set(e.addOrUpdate.instance,e.addOrUpdate);const a=e.addOrUpdate.getCursor();for(;a.next();)this._insertFeature(a,t$1.scale);return this._spatialIndexInvalid=!0,this.events.emit("changed"),e}search(t){this._rebuildIndex();const e=t.id,s=this._indexSearchCache.find((t=>t.tileId===e));if(r$2(s))return s.readers;const r$1=new Map,n=this._searchIndex(t.bounds),i=[];for(const a of n){const t=this._storage.getInstanceId(a),e=c(t),s=I(t);r$1.has(e)||r$1.set(e,[]);r$1.get(e).push(s);}return r$1.forEach(((t,e)=>{const s=this._featureSetsByInstance.get(e);i.push(r.from(s,t));})),this._indexSearchCache.enqueue({tileId:e,readers:i}),i}insert(t){const e=t.getCursor(),s=this._storage;for(;e.next();){const t=h(e.instance,e.getIndex()),a=e.getObjectId(),r=this._objectIdToDisplayId.get(a)??this._storage.createDisplayId();e.setDisplayId(r),s.setInstanceId(r,t),this._objectIdToDisplayId.set(a,r);}this._featureSetsByInstance.set(t.instance,t),this._spatialIndexInvalid=!0;}remove(t){const e=this._objectIdToDisplayId.get(t);if(!e)return;const s=this._storage.getInstanceId(e),a=I(s),r=c(s),n=this._featureSetsByInstance.get(r);this._objectIdToDisplayId.delete(t),this._storage.releaseDisplayId(e),n.removeAtIndex(a),n.isEmpty&&this._featureSetsByInstance.delete(r),this._spatialIndexInvalid=!0;}toArray(){const t=new Array;return this.forEach((e=>t.push(e))),t}forEach(t){this._objectIdToDisplayId.forEach((e=>{const s=this._storage.getInstanceId(e),a=this._lookupFeature(s);t(a);}));}forEachUnsafe(t){this._objectIdToDisplayId.forEach((e=>{const s=this._storage.getInstanceId(e),a=c(s),r=I(s),n=this._getFeatureSet(a);n.setIndex(r),t(n);}));}forEachInBounds(t,e$1){const s=this._searchIndex(t);for(const a of s){const t=this.lookupFeatureByDisplayId(a,this._storage);e$1(e(t));}}forEachBounds(t,e,s){this._rebuildIndex();const a=[0,0,0,0];for(const r of t){if(!r.readGeometry())continue;const t=r.getDisplayId();a[0]=this._storage.getXMin(t),a[1]=this._storage.getYMin(t),a[2]=this._storage.getXMax(t),a[3]=this._storage.getYMax(t),e(O(s,a));}}sweepFeatures(t,e,s){this._spatialIndexInvalid=!0,this._objectIdToDisplayId.forEach(((a,r)=>{t.has(a)||(e.releaseDisplayId(a),s&&s.unsetAttributeData(a),this._objectIdToDisplayId.delete(r));})),this.events.emit("changed");}sweepFeatureSets(t){this._spatialIndexInvalid=!0,this._featureSetsByInstance.forEach(((e,s)=>{t.has(s)||this._featureSetsByInstance.delete(s);}));}lookupObjectId(t$1,e){const a=this.lookupFeatureByDisplayId(t$1,e);return t(a)?null:a.getObjectId()}lookupDisplayId(t){return this._objectIdToDisplayId.get(t)}lookupFeatureByDisplayId(t,e){const s=e.getInstanceId(t);return this._lookupFeature(s)}lookupByDisplayIdUnsafe(t){const e=this._storage.getInstanceId(t),s=c(e),a=I(e),r=this._getFeatureSet(s);return r?(r.setIndex(a),r):null}_insertFeature(t,e){const s=this._storage,a=t.getObjectId(),r=h(t.instance,t.getIndex());s.getInstanceId(t.getDisplayId());let n=this._objectIdToDisplayId.get(a);n||(n=s.createDisplayId(),this._objectIdToDisplayId.set(a,n),this._spatialIndexInvalid=!0),t.setDisplayId(n),s.setInstanceId(n,r),this.setComputedAttributes(s,t,n,e);}_searchIndex(t){this._rebuildIndex();const e={minX:t[0],minY:t[1],maxX:t[2],maxY:t[3]};return this._index.search(e)}_rebuildIndex(){if(!this._spatialIndexInvalid)return;const t=[];"snapshot"===this.mode?this._featureSetsByInstance.forEach((e=>{const s=e.getCursor();for(;s.next();){const e=s.getDisplayId();this._storage.setBounds(e,s)&&t.push(e);}})):this._objectIdToDisplayId.forEach((e=>{const s=this._storage.getInstanceId(e);this._storage.setBounds(e,this._lookupFeature(s))&&t.push(e);})),this._index.clear(),this._index.load(t),this._indexSearchCache.clear(),this._spatialIndexInvalid=!1;}_lookupFeature(t){const e=c(t),s=this._getFeatureSet(e);if(!s)return null;const a=s.getCursor(),r=I(t);return a.setIndex(r),a}_getFeatureSet(t){return this._featureSetsByInstance.get(t)}}

export { l, o, r, u };
