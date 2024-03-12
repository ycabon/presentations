// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["./UpdateTracking2D","../../../support/QueueProcessor"],function(p,q){function g(a){return a.some(b=>b.globalId)}function f(a){return a.filter(b=>!b.error).map(b=>b.objectId??b.globalId).filter(b=>null!=b)}function k(a,b){a=new Set(a);for(const c of b.values())a.add(c);return a}function l(a,b){a=new Set(a);for(const c of b.values())a.delete(c);return a}class r{constructor(a){this.updateTracking=new p.UpdateTracking2D({debugName:"FeatureCommandQueue"});this._hasGlobalIds=!1;this._queueProcessor=
new q.QueueProcessor({concurrency:1,process:a.process})}destroy(){this.updateTracking.destroy();this._queueProcessor.destroy();this.clear()}clear(){this._queueProcessor.clear()}async push(a){return this.updateTracking.addPromise(this._doPush(a))}async _doPush(a){const b=this._queueProcessor;var c=b.last();const d=[];switch(a.type){case "update":if(c?.type===a.type)return;d.push(b.push(a));break;case "edit":(c="processed-edit"===c?.type?c:null)&&b.popLast();a=this._mergeEdits(c,a);for(const e of a)e&&
d.push(b.push(e))}await Promise.all(d)}_mergeEdits(a,b){const {addedFeatures:c,deletedFeatures:d,updatedFeatures:e}=b.edits;if(this._hasGlobalIds=this._hasGlobalIds||g(c)||g(e)||g(d))return b=[...c,...e],[a,{type:"processed-edit",edits:{addOrModified:b,removed:d}}];b=new Set(f(a?.edits.addOrModified??[]));a=new Set(f(a?.edits.removed??[]));const m=new Set([...f(c),...f(e)]),n=new Set(f(d));b=Array.from(k(l(b,n),m)).map(h=>({objectId:h}));a=Array.from(k(l(a,m),n)).map(h=>({objectId:h}));return[{type:"processed-edit",
edits:{addOrModified:b,removed:a}}]}}return r});