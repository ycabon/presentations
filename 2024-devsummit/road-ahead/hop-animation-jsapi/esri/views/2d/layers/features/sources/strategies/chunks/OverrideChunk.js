// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","./ASourceChunk","../../../support/FeatureSetReaderJSON"],function(g,k,l){class m extends k.ASourceChunk{constructor(){super(...arguments);this.chunkId="override";this.removed=new Set;this.overridenIds=new Set;this._features=[]}get reader(){return l.FeatureSetReaderJSON.fromOptimizedFeatures(this._features,this._layerSchema??{fields:[]})}get queryInfo(){return{}}get first(){return!1}get end(){return!1}applyOverrides(b){super.invalidate();this._layerSchema||(this._layerSchema=b.reader.fullSchema());
const {reader:d,removed:h}=b;b=[];const e=new Set;var c=d.getCursor();const n=new Set(h);for(this.overridenIds.clear();c.next();){const a=c.readOptimizedFeatureWorldSpace(),f=a.objectId;b.push(a);e.add(f);this.overridenIds.add(f);this.removed.delete(f)}for(const a of this._features)c=a.objectId,n.has(c)||e.has(c)||(b.push(a),this.overridenIds.add(c));this._features=b;for(const a of e.values())this.removed.delete(a);for(const a of h)this.removed.add(a),this.overridenIds.add(a)}getTileReader(b){if(!this._features.length)return null;
const d=this.queryFeaturesInBounds(b.bounds);d.setTransformForDisplay(b.transform);return d}}g.OverrideChunk=m;Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});