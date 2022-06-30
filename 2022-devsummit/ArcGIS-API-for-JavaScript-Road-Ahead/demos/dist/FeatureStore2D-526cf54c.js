import { n, bJ as m, t, dW as a, o as t$1, bs as i, E as n$1, r as r$2, bd as e } from './_virtual_index-2683c931.js';
import { O } from './aaBoundingBox-359badc3.js';
import { s } from './CircularArray-ee6c4092.js';
import { i as i$1 } from './ComputedAttributeStorage-bb926dc8.js';
import { d } from './FeatureSetReader-c8b784f1.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function r$1(r,a,t){r.referencesGeometry();const n$1=a.readArcadeFeature();try{return r.evaluate({...t,$feature:n$1})}catch(o){return n.getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:",o),null}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const c$1=import('./labelFormatUtils-a150d88b.js');class o{constructor(e,s){this._canCacheExpressionValue=!1,this._sourceInfo=e,this._bitsets={computed:s.getBitset(s.createBitset())};}invalidate(){this._bitsets.computed.clear();}async updateSchema(t$2,r){const c=m(this._schema,r);if(this._schema=r,!r||t(c)||!a(c,"attributes"))return;t$1("esri-2d-update-debug")&&console.debug("Applying Update - Store:",c),this._bitsets.computed.clear(),t$2.targets[r.name]=!0;const o=r.attributes,n=[],p=[];for(const e in o){const s=o[e];switch(s.type){case"field":break;case"expression":n.push(this._createArcadeComputedField(s));break;case"label-expression":n.push(this._createLabelArcadeComputedField(s));break;case"statistic":p.push(s);}}this._computedFields=await Promise.all(n),this._canCacheExpressionValue=!this._computedFields.some((e=>"expression"===e.type&&e.expression.referencesScale())),this._statisticFields=p;}setComputedAttributes(e,s,t,i){const a=this._bitsets.computed;if(!this._canCacheExpressionValue||!a.has(t)){a.set(t);for(const a of this._computedFields){const r=this._evaluateField(s,a,i);switch(a.resultType){case"numeric":e.setComputedNumericAtIndex(t,a.fieldIndex,r);break;case"string":e.setComputedStringAtIndex(t,a.fieldIndex,r);}}}}async _createArcadeComputedField(e){const s=this._sourceInfo.spatialReference,i$1=this._sourceInfo.fieldsIndex;return {...e,expression:await i(e.valueExpression,s,i$1)}}async _createLabelArcadeComputedField(e){const s=this._sourceInfo.spatialReference,t=this._sourceInfo.fields,{createLabelFunction:i}=await c$1,a=await i(e.label,t,s);return {...e,builder:a}}_evaluateField(e,s,t){switch(s.type){case"label-expression":{const t=e.readArcadeFeature();return s.builder.evaluate(t)||""}case"expression":{const{expression:i}=s;return r$1(i,e,{$view:{scale:t}})}}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class r extends d{constructor(r,t){super(d.createInstance()),this._currentIndex=-1,this._reader=r,this._indices=t;}static from(e,t){return new r(e.copy(),t)}get hasNext(){return this._currentIndex+1<this._indices.length}getApproximateSize(){return this._indices.length}getCursor(){return this.copy()}copy(){const e=new r(this._reader.copy(),this._indices);return e._currentIndex=this._currentIndex,e}next(){for(;this._nextIndex()&&!this._reader._passesFilter()&&!this._reader._getExists(););return this._currentIndex<this._indices.length}_nextIndex(){return ++this._currentIndex<this._indices.length&&(this._reader.setIndex(this._indices[this._currentIndex]),!0)}setArcadeSpatialReference(e){this._reader.setArcadeSpatialReference(e);}attachStorage(e){this._reader.attachStorage(e);}get geometryType(){return this._reader.geometryType}get hasFeatures(){return this._reader.hasFeatures}get exceededTransferLimit(){return this._reader.exceededTransferLimit}get hasZ(){return this._reader.hasZ}get hasM(){return this._reader.hasM}getStorage(){return this._reader.getStorage()}getComputedNumeric(e){return this._reader.getComputedNumericAtIndex(0)}setComputedNumeric(e,r){return this._reader.setComputedNumericAtIndex(r,0)}getComputedString(e){return this._reader.getComputedStringAtIndex(0)}setComputedString(e,r){return this._reader.setComputedStringAtIndex(0,r)}getComputedNumericAtIndex(e){return this._reader.getComputedNumericAtIndex(e)}setComputedNumericAtIndex(e,r){this._reader.setComputedNumericAtIndex(e,r);}getComputedStringAtIndex(e){return this._reader.getComputedStringAtIndex(e)}setComputedStringAtIndex(e,r){return this._reader.setComputedStringAtIndex(e,r)}transform(e,r,t,d){const a=this.copy();return a._reader=this._reader.transform(e,r,t,d),a}extent(e,r,t,d){const a=this.copy();return a._reader=this._reader.extent(e,r,t,d),a}hasFilter(){return this._reader.hasFilter()}readAttribute(e,r=!1){return this._reader.readAttribute(e,r)}readAttributes(){return this._reader.readAttributes()}joinAttributes(e){return this._reader.joinAttributes(e)}readArcadeFeature(){return this._reader.readArcadeFeature()}geometry(){return this._reader.geometry()}field(e){return this.readAttribute(e,!0)}hasField(e){return this._reader.hasField(e)}setField(e,r){return this._reader.setField(e,r)}keys(){return this._reader.keys()}castToText(){return this._reader.castToText()}getQuantizationTransform(){return this._reader.getQuantizationTransform()}getAttributeHash(){return this._reader.getAttributeHash()}getObjectId(){return this._reader.getObjectId()}getDisplayId(){return this._reader.getDisplayId()}setDisplayId(e){return this._reader.setDisplayId(e)}getGroupId(){return this._reader.getGroupId()}setGroupId(e){return this._reader.setGroupId(e)}getXHydrate(){return this._reader.getXHydrate()}getYHydrate(){return this._reader.getYHydrate()}getX(){return this._reader.getX()}getY(){return this._reader.getY()}setIndex(e){return this._reader.setIndex(e)}getIndex(){return this._reader.getIndex()}readLegacyFeature(){return this._reader.readLegacyFeature()}readOptimizedFeature(){return this._reader.readOptimizedFeature()}readLegacyPointGeometry(){return this._reader.readLegacyPointGeometry()}readLegacyGeometry(){return this._reader.readLegacyGeometry()}readLegacyCentroid(){return this._reader.readLegacyCentroid()}readGeometryArea(){return this._reader.readGeometryArea()}readUnquantizedGeometry(){return this._reader.readUnquantizedGeometry()}readHydratedGeometry(){return this._reader.readHydratedGeometry()}readGeometry(){return this._reader.readGeometry()}readCentroid(){return this._reader.readCentroid()}_passesFilter(){return this._reader._passesFilter()}_readAttribute(e,r){throw new Error("Error: Should not be called. Underlying _reader should be used instead")}_readAttributes(){throw new Error("Error: Should not be called. Underlying _reader should be used instead")}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function h(t,e){return t<<16|e}function c(t){return (4294901760&t)>>>16}function I(t){return 65535&t}const u={getObjectId:t=>t.getObjectId(),getAttributes:t=>t.readAttributes(),getAttribute:(t,e)=>t.readAttribute(e),cloneWithGeometry:(t,e)=>t,getGeometry:t=>t.readHydratedGeometry(),getCentroid:(t,e)=>t.readCentroid()};class l extends o{constructor(t,e,s$1){super(t,e),this.featureAdapter=u,this.events=new n$1,this._featureSetsByInstance=new Map,this._objectIdToDisplayId=new Map,this._spatialIndexInvalid=!0,this._indexSearchCache=new s(50),this._index=i$1(9,(t=>({minX:this._storage.getXMin(t),minY:this._storage.getYMin(t),maxX:this._storage.getXMax(t),maxY:this._storage.getYMax(t)}))),this._storage=e,this.mode=s$1;}get storeStatistics(){return {featureCount:0,vertexCount:0}}clear(){this._spatialIndexInvalid=!0,this._objectIdToDisplayId.forEach((t=>this._storage.releaseDisplayId(t))),this._objectIdToDisplayId.clear(),this._featureSetsByInstance.clear();}hasInstance(t){return this._featureSetsByInstance.has(t)}onTileData(e,s){if(t(s.addOrUpdate))return s;if(s.addOrUpdate.attachStorage(this._storage),"snapshot"===this.mode){const t=s.addOrUpdate.getCursor();for(;t.next();){const s=t.getDisplayId();this.setComputedAttributes(this._storage,t,s,e.scale);}return s}this._featureSetsByInstance.set(s.addOrUpdate.instance,s.addOrUpdate);const a=s.addOrUpdate.getCursor();for(;a.next();)this._insertFeature(a,e.scale);return this._spatialIndexInvalid=!0,this.events.emit("changed"),s}search(t){this._rebuildIndex();const s=t.id,a=this._indexSearchCache.find((t=>t.tileId===s));if(r$2(a))return a.readers;const r$1=new Map,i=this._searchIndex(t.bounds),n=[];for(const e of i){const t=this._storage.getInstanceId(e),s=c(t),a=I(t);r$1.has(s)||r$1.set(s,[]);r$1.get(s).push(a);}return r$1.forEach(((t,e)=>{const s=this._featureSetsByInstance.get(e);n.push(r.from(s,t));})),this._indexSearchCache.enqueue({tileId:s,readers:n}),n}insert(t){const e=t.getCursor(),s=this._storage;for(;e.next();){const t=h(e.instance,e.getIndex()),a=this._storage.createDisplayId(),r=e.getObjectId();e.setDisplayId(a),s.setInstanceId(a,t),this._objectIdToDisplayId.set(r,a);}this._featureSetsByInstance.set(t.instance,t),this._spatialIndexInvalid=!0;}remove(t){const e=this._objectIdToDisplayId.get(t);if(!e)return;const s=this._storage.getInstanceId(e),a=I(s),r=c(s),i=this._featureSetsByInstance.get(r);this._objectIdToDisplayId.delete(t),this._storage.releaseDisplayId(e),i.removeAtIndex(a),i.isEmpty&&this._featureSetsByInstance.delete(r),this._spatialIndexInvalid=!0;}forEach(t){this._objectIdToDisplayId.forEach((e=>{const s=this._storage.getInstanceId(e),a=this._lookupFeature(s);t(a);}));}forEachUnsafe(t){this._objectIdToDisplayId.forEach((e=>{const s=this._storage.getInstanceId(e),a=c(s),r=I(s),i=this._getFeatureSet(a);i.setIndex(r),t(i);}));}forEachInBounds(t,e$1){const a=this._searchIndex(t);for(const r of a){const t=this.lookupFeatureByDisplayId(r,this._storage);e$1(e(t));}}forEachBounds(t,e,s){this._rebuildIndex();const a=[0,0,0,0];for(const i of t){if(!i.readGeometry())continue;const t=i.getDisplayId();a[0]=this._storage.getXMin(t),a[1]=this._storage.getYMin(t),a[2]=this._storage.getXMax(t),a[3]=this._storage.getYMax(t),e(O(s,a));}}sweepFeatures(t,e,s){this._spatialIndexInvalid=!0,this._objectIdToDisplayId.forEach(((a,r)=>{t.has(a)||(e.releaseDisplayId(a),s.unsetAttributeData(a),this._objectIdToDisplayId.delete(r));})),this.events.emit("changed");}sweepFeatureSets(t){this._spatialIndexInvalid=!0,this._featureSetsByInstance.forEach(((e,s)=>{t.has(s)||this._featureSetsByInstance.delete(s);}));}lookupObjectId(e,s){const a=this.lookupFeatureByDisplayId(e,s);return t(a)?null:a.getObjectId()}lookupDisplayId(t){return this._objectIdToDisplayId.get(t)}lookupFeatureByDisplayId(t,e){const s=e.getInstanceId(t);return this._lookupFeature(s)}lookupByDisplayIdUnsafe(t){const e=this._storage.getInstanceId(t),s=c(e),a=I(e),r=this._getFeatureSet(s);return r?(r.setIndex(a),r):null}_insertFeature(t,e){const s=this._storage,a=t.getObjectId(),r=h(t.instance,t.getIndex());s.getInstanceId(t.getDisplayId());let i=this._objectIdToDisplayId.get(a);i||(i=s.createDisplayId(),this._objectIdToDisplayId.set(a,i),this._spatialIndexInvalid=!0),t.setDisplayId(i),s.setInstanceId(i,r),this.setComputedAttributes(s,t,i,e);}_searchIndex(t){this._rebuildIndex();const e={minX:t[0],minY:t[1],maxX:t[2],maxY:t[3]};return this._index.search(e)}_rebuildIndex(){if(!this._spatialIndexInvalid)return;const t=[];"snapshot"===this.mode?this._featureSetsByInstance.forEach((e=>{const s=e.getCursor();for(;s.next();){const e=s.getDisplayId();this._storage.setBounds(e,s)&&t.push(e);}})):this._objectIdToDisplayId.forEach((e=>{const s=this._storage.getInstanceId(e);this._storage.setBounds(e,this._lookupFeature(s))&&t.push(e);})),this._index.clear(),this._index.load(t),this._indexSearchCache.clear(),this._spatialIndexInvalid=!1;}_lookupFeature(t){const e=c(t),s=I(t),a=this._getFeatureSet(e);if(!a)return null;const r=a.getCursor();return r.setIndex(s),r}_getFeatureSet(t){return this._featureSetsByInstance.get(t)}}

export { l, o, r, u };
