// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","./AllocationTracer","./enums"],function(e,g,d){const f={RECORD_ALLOCATIONS:!1};class h{constructor(){this._current=[];for(this._allocations=f.RECORD_ALLOCATIONS?new g.AllocationTracer("WebGLObject"):null;this._current.length<d.ResourceType.COUNT;)this._current.push(0)}increment(a,b,c=1){this._current[a]+=c;this._allocations?.add(b)}decrement(a,b,c=1){this._current[a]-=c;this._allocations?.remove(b)}get current(){return this._current}get total(){return this.current.reduce((a,b,c)=>
a+(c<d.ResourceType.UNCOUNTED?b:0),0)}get resourceInformation(){let a="";if(0<this.total){a+="Live objects:\n";for(let b=0;b<d.ResourceType.COUNT;++b){const c=this._current[b];0<c&&(a+=`${d.ResourceType[b]}: ${c}\n`)}}return a+=this._allocations?.resetLog()}}e.InstanceCounter=h;e.test=f;Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});