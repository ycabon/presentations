import { m as r$2, t, d3 as o$1, f as f$1, ap as F, ad as E, es as s, aj as a$4, cu as n$1, B as has, d8 as i$3, aH as D, u as e$2, z as n$3, aC as j, bI as u$4 } from './_virtual_index-1ea2035a.js';
import { s as s$1 } from './CircularArray-61b6424e.js';
import { E as E$1, I } from './enums-4e1a5b11.js';
import { h as he } from './Utils-7b2ac961.js';
import { i as i$2, m, o as o$2 } from './FeatureContainer-e333c7c0.js';
import { a as a$3, i as i$1, e as e$1 } from './BufferPool-73156673.js';
import { n as n$4 } from './schemaUtils-15a39169.js';
import { o as o$3 } from './BaseTileRenderer-88e51f6a.js';
import { b as f$2 } from './visualVariablesUtils-e0de182e.js';
import { b as n$2 } from './WGLContainer-be6ebd59.js';
import './number-7d0da80b.js';
import './enums-3e26cf0d.js';
import './definitions-a784b44f.js';
import './TileContainer-18a96df2.js';
import './utils-94e6680e.js';
import './EffectView-de5a8347.js';
import './MaterialKey-8672cbbb.js';
import './alignmentUtils-d4b065e2.js';
import './visualVariablesUtils-933d57c8.js';
import './createSymbolSchema-49eb4f50.js';
import './cimAnalyzer-32e4ad07.js';
import './fontUtils-49a60944.js';
import './BidiEngine-25d35bf3.js';
import './Rect-1c5846da.js';
import './GeometryUtils-10c98655.js';
import './ExpandedCIM-a44ee24d.js';
import './util-b1c4d8f0.js';
import './WGLBrushVTLSymbol-5326d98d.js';
import './StyleDefinition-98114241.js';
import './GeometryUtils-07c7843a.js';
import './ShaderCompiler-4879c29c.js';
import './ProgramTemplate-192f2ab9.js';
import './heatmapTextureUtils-076ceaf2.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const e=6,r$1=4294967296;class o{constructor(t){this._savedCursor=null,this._savedOffset=null,this._head=t,this._cursor=t;}static from(t){const s=i.from(new Float32Array(t));return new o(s)}get id(){return this._cursor.id}get baseZoom(){return this._cursor.baseZoom}get anchorX(){return this._cursor.anchorX}get anchorY(){return this._cursor.anchorY}get directionX(){return this._cursor.directionX}get directionY(){return this._cursor.directionY}get size(){return this._cursor.size}get materialKey(){return this._cursor.materialKey}get boundsCount(){return this._cursor.boundsCount}computedMinZoom(){return this._cursor.computedMinZoom()}setComputedMinZoom(t){return this._cursor.setComputedMinZoom(t)}boundsComputedAnchorX(t){return this._cursor.boundsComputedAnchorX(t)}boundsComputedAnchorY(t){return this._cursor.boundsComputedAnchorY(t)}setBoundsComputedAnchorX(t,s){return this._cursor.setBoundsComputedAnchorX(t,s)}setBoundsComputedAnchorY(t,s){return this._cursor.setBoundsComputedAnchorY(t,s)}boundsX(t){return this._cursor.boundsX(t)}boundsY(t){return this._cursor.boundsY(t)}boundsWidth(t){return this._cursor.boundsWidth(t)}boundsHeight(t){return this._cursor.boundsHeight(t)}link(s){if(r$2(s._head))return this._cursor.link(s._head)}getCursor(){return this.copy()}copy(){const t=new o(this._head?.copy());if(!t._head)return t;let s=t._head,e=t._head._link;for(;e;)s._link=e.copy(),s=e,e=s._link;return t}peekId(){return this._cursor.peekId()??this._cursor._link.peekId()}nextId(){const t=this.id;for(;t===this.id;)if(!this.next())return !1;return !0}save(){this._savedCursor=this._cursor,this._savedOffset=this._cursor._offset;}restore(){this._savedCursor&&(this._cursor=this._savedCursor),null!=this._savedOffset&&(this._cursor._offset=this._savedOffset);}next(){if(!this._cursor)return !1;if(!this._cursor.next()){if(!this._cursor._link)return !1;this._cursor=this._cursor._link,this._cursor._offset=0;}return !0}lookup(t){for(this._cursor=this._head;this._cursor&&!this._cursor.lookup(t);){if(!this._cursor._link)return !1;this._cursor=this._cursor._link;}return !!this._cursor}delete(s){let e=this._head,r=null;for(;e;){if(e.delete(s))return e.isEmpty()&&r$2(r)&&(r._link=e._link),!0;r=e,e=e._link;}return !1}}class i{constructor(t){this._offset=-1,this._link=null,this._count=0,this._deletedCount=0,this._offsets={instance:null},this._buffer=t;}static from(t){return new i(new Float32Array(t))}isEmpty(){return this._deletedCount===this.count}get count(){return this._count||(this._count=this._computeCount()),this._count}get id(){return this._buffer[this._offset+0]}set id(t){this._buffer[this._offset+0]=t;}get baseZoom(){return this._buffer[this._offset+1]}get anchorX(){return this._buffer[this._offset+2]}get anchorY(){return this._buffer[this._offset+3]}get directionX(){return this._buffer[this._offset+4]}get directionY(){return this._buffer[this._offset+5]}get size(){return this._buffer[this._offset+6]}get materialKey(){return this._buffer[this._offset+7]}computedMinZoom(){return this._buffer[this._offset+8]}setComputedMinZoom(t){this._buffer[this._offset+8]=t;}get boundsCount(){return this._buffer[this._offset+9]}boundsComputedAnchorX(t){return this._buffer[this._offset+10+t*e+0]}boundsComputedAnchorY(t){return this._buffer[this._offset+10+t*e+1]}setBoundsComputedAnchorX(t,s){this._buffer[this._offset+10+t*e+0]=s;}setBoundsComputedAnchorY(t,s){this._buffer[this._offset+10+t*e+1]=s;}boundsX(t){return this._buffer[this._offset+10+t*e+2]}boundsY(t){return this._buffer[this._offset+10+t*e+3]}boundsWidth(t){return this._buffer[this._offset+10+t*e+4]}boundsHeight(t){return this._buffer[this._offset+10+t*e+5]}link(t){let s=this;for(;s._link;)s=s._link;s._link=t;}getCursor(){return this.copy()}copy(){const t=new i(this._buffer);return t._link=this._link,t._offset=this._offset,t._deletedCount=this._deletedCount,t._offsets=this._offsets,t._count=this._count,t}peekId(){const t=this._offset+10+this.boundsCount*e+0;return t>=this._buffer.length?0:this._buffer[t]}next(){let t=0;for(;this._offset<this._buffer.length&&t++<100&&(-1===this._offset?this._offset=0:this._offset+=10+this.boundsCount*e,this.id===r$1););return this.id!==r$1&&this._offset<this._buffer.length}delete(t){const s=this._offset,e=this.lookup(t);if(e)for(this.id=4294967295,++this._deletedCount;this.next()&&this.id===t;)this.id=4294967295,++this._deletedCount;return this._offset=s,e}lookup(t$1){const e=this._offset;if(t(this._offsets.instance)){this._offsets.instance=new Map;const t=this.copy();t._offset=-1;let s=0;for(;t.next();)t.id!==s&&(this._offsets.instance.set(t.id,t._offset),s=t.id);}return !!this._offsets.instance.has(t$1)&&(this._offset=this._offsets.instance.get(t$1),this.id!==r$1||(this._offset=e,!1))}_computeCount(){const t=this._offset;let s=0;for(this._offset=-1;this.next();)s++;return this._offset=t,s}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class n{constructor(t,e,i,n,a){this.target=t,this.geometryType=e,this.materialKey=i,this.indexFrom=n,this.indexCount=a;}get indexEnd(){return this.indexFrom+this.indexCount}extend(t){this.indexCount+=t;}}class a$2{constructor(t,e){this.geometryType=0,this._target=t,this.geometryType=e;}static from(e,i,n,d){const r=new a$2(e,i);if(r$2(d))for(const t of d)n.seekIndex(t),r.addRecord(n);else for(;n.next();)r.addRecord(n);return r}addRecord(t$1){const a=this._target,d=this.geometryType,r=t$1.materialKey;let s=t$1.indexFrom,o=t$1.indexCount;const h=t$1.vertexFrom,x=t$1.vertexCount;if(o||(s=h,o=x),t(this._head)){const t=new n(a,d,r,s,o);return void(this._head=new a$3(t))}let m=null,c=this._head;for(;c;){if(s<c.data.indexFrom)return this._insert(r,s,o,m,c);m=c,c=c.next;}this._insert(r,s,o,m,null);}forEach(e){r$2(this._head)&&this._head.forEach(e);}*infos(){if(r$2(this._head))for(const t of this._head.values())yield t;}_insert(a,d,r,s,o){if(t(s)&&t(o)){const t=new n(this._target,this.geometryType,a,d,r);this._head=new a$3(t);}return t(s)&&r$2(o)?this._insertAtHead(a,d,r,o):r$2(s)&&t(o)?this._insertAtEnd(a,d,r,s):r$2(s)&&r$2(o)?this._insertAtMiddle(a,d,r,s,o):void 0}_insertAtHead(t,e,a,d){const r=e+a;if(t===d.data.materialKey&&r===d.data.indexFrom)d.data.indexFrom=e,d.data.indexCount+=a;else {const r=new n(this._target,this.geometryType,t,e,a);this._head=new a$3(r),this._head.next=d;}}_insertAtEnd(t,e,a,d){if(d.data.materialKey===t&&d.data.indexEnd===e)d.data.indexCount+=a;else {const r=new n(this._target,this.geometryType,t,e,a),s=new a$3(r);d.next=s;}}_insertAtMiddle(t,e,a,d,r){const s=e+a;if(d.data.materialKey===t&&d.data.indexEnd===e)d.data.indexCount+=a,d.data.materialKey===r.data.materialKey&&d.data.indexEnd===r.data.indexFrom&&(d.data.indexCount+=r.data.indexCount,d.next=r.next);else if(t===r.data.materialKey&&s===r.data.indexFrom)r.data.indexFrom=e,r.data.indexCount+=a;else {const s=new n(this._target,this.geometryType,t,e,a),o=new a$3(s);d.next=o,o.next=r;}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const a$1=1.25,u$3=32767,d=u$3<<16|u$3;class f{constructor(t,i,e,s){const h=i$1.create(i*e*Uint32Array.BYTES_PER_ELEMENT,s);this.size=i,this.strideInt=e,this.bufferType=t,this.dirty={start:1/0,end:0},this._gpu=null,this._cpu=h,this.clear();}get elementSize(){return this._cpu.length/this.strideInt}get invalidated(){return this.bufferSize&&!this._gpu}get invalidatedComputeBuffer(){return this.bufferSize&&!this._gpuComputeTriangles}invalidate(){this._invalidateTriangleBuffer(),o$1(this._gpu,(t=>t.dispose())),this._gpu=null;}_invalidateTriangleBuffer(){o$1(this._gpuComputeTriangles,(t=>t.dispose())),this._gpuComputeTriangles=null;}destroy(){o$1(this._gpu,(t=>t.dispose())),o$1(this._gpuComputeTriangles,(t=>t.dispose())),o$1(this._cpu,(t=>t.destroy())),o$1(this._cpu2,(t=>t.destroy()));}clear(){this.dirty.start=1/0,this.dirty.end=0,this.freeList=new e$1({start:0,end:this._cpu.length/this.strideInt}),this.fillPointer=0;}ensure(t){if(this.maxAvailableSpace()>=t)return;if(t*this.strideInt>this._cpu.length-this.fillPointer){this.invalidate();const i=this._cpu.length/this.strideInt,e=Math.round((i+t)*a$1),r=e*this.strideInt;this._cpu.expand(r*Uint32Array.BYTES_PER_ELEMENT),this.freeList.free(i,e-i);}}set(t,i){this._cpu.array[t]!==i&&(this._cpu.array[t]=i,this.dirty.start=Math.min(t,this.dirty.start),this.dirty.end=Math.max(t,this.dirty.end));}getGPUBuffer(t$1,e=!1){if(!this.bufferSize)return null;if(e){if("index"!==this.bufferType)throw new Error("Tired to get triangle buffer, but target is not an index buffer");return t(this._gpuComputeTriangles)&&(this._gpuComputeTriangles=this._createComputeBuffer(t$1)),this._gpuComputeTriangles}return t(this._gpu)&&(this._gpu=this._createBuffer(t$1)),this._gpu}getCPUBuffer(){if(!this._cpu2){const t=this._cpu.slice();this._cpu2=t;}return this._cpu2.length!==this._cpu.length&&this._cpu2.expand(this._cpu.length*this._cpu.array.BYTES_PER_ELEMENT),this._cpu2.set(this._cpu),this._cpu2}get bufferSize(){return this._cpu.length/this.strideInt}maxAvailableSpace(){return this.freeList.maxAvailableSpace()}insert(t,i,r,s){const h=r*this.strideInt;if(!h)return 0;const n=i*this.strideInt*Uint32Array.BYTES_PER_ELEMENT,a=new Uint32Array(t,n,h),u=f$1(this.freeList.firstFit(r),"First fit region must be defined")*this.strideInt,d=h,f=u/this.strideInt-i;if(0!==s)for(let e=0;e<a.length;e++)a[e]+=s;return this._cpu.array.set(a,u),this.dirty.start=Math.min(this.dirty.start,u),this.dirty.end=Math.max(this.dirty.end,u+d),this.fillPointer=Math.max(this.fillPointer,u+d),f}free(t,i,e){const r=t*this.strideInt,s=(t+i)*this.strideInt;if(!0===e)for(let h=t;h!==t+i;h++)this._cpu.array[h*this.strideInt]=d;this.dirty.start=Math.min(this.dirty.start,r),this.dirty.end=Math.max(this.dirty.end,s),this.freeList.free(t,i);}upload(){if(this.dirty.end){if(this._invalidateTriangleBuffer(),t(this._gpu))return this.dirty.start=1/0,void(this.dirty.end=0);this._gpu.setSubData(this._cpu.array,this.dirty.start,this.dirty.start,this.dirty.end),this.dirty.start=1/0,this.dirty.end=0;}}_createBuffer(t){const i=F.DYNAMIC_DRAW;return "index"===this.bufferType?E.createIndex(t,i,this._cpu.array):E.createVertex(t,i,this._cpu.array)}_createComputeBuffer(t){const i=F.DYNAMIC_DRAW,e=new Uint32Array(this.fillPointer/3);for(let r=0;r<this.fillPointer;r+=3)e[r/3]=this._cpu.array[r];return E.createIndex(t,i,e)}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const h=0,u$2=1;class c$1{constructor(e,t){this._vaos=new Map,this._indicesInvalid=!1,this.geometryType=e,this._stage=t;}destroy(){for(const[t,r]of this._vaos)r$2(r)&&r.dispose(!1);this._indexBuffer=s(this._indexBuffer),this._vertexBuffer=s(this._vertexBuffer);}insert(e,t,i){if(!e.records.byteLength)return;const s=e.stride;if(this._vertexBuffer&&this._indexBuffer){const i=e.indices.byteLength/4,f=e.vertices.byteLength/s;this._indexBuffer.ensure(i),this._vertexBuffer.ensure(f);const{vertices:n,indices:d}=e,h=i$2.from(e.records),u=this._vertexBuffer.insert(n,0,n.byteLength/s,0),c=this._indexBuffer.insert(d,0,d.byteLength/4,u);if(h.forEach((e=>{e.indexFrom+=c,e.vertexFrom+=u;})),f$1(this._records,"Expected records to be defined").link(h),t)this._indicesInvalid=!0;else if(this._displayList){const e=h.getCursor();for(;e.next();)this._displayList.addRecord(e);}}else {const r=e.indices.byteLength/4,i=e.vertices.byteLength/s,f$1=s/Uint32Array.BYTES_PER_ELEMENT,d=this._stage.bufferPool;this._records=i$2.from(e.records),this._indexBuffer=new f("index",r,1,d),this._vertexBuffer=new f("vertex",i,f$1,d),this._indexBuffer.insert(e.indices,0,e.indices.byteLength/4,0),this._vertexBuffer.insert(e.vertices,0,e.vertices.byteLength/s,0),t&&(this._indicesInvalid=!0);}}remove(e){if(!t(this._records))for(const t of e){const e=this._records.getCursor();if(!e.lookup(t))continue;const r=e.indexFrom,i=e.vertexFrom;let s=e.indexCount,f=e.vertexCount;for(;e.next()&&e.id===t;)s+=e.indexCount,f+=e.vertexCount;this._indexBuffer.free(r,s),this._vertexBuffer.free(i,f,!0),this._records.delete(t);}}getVAO(e,t$1,r,f){if(!this._vertexBuffer||!this._indexBuffer||t(this._records)||!this._vertexBuffer.bufferSize)return null;const n=f?u$2:h;let o=this._vaos.get(n);(this._vertexBuffer.invalidated||this._indexBuffer.invalidated||f&&this._indexBuffer.invalidatedComputeBuffer)&&(o$1(o,(e=>e.dispose(!1))),o=null),this._vertexBuffer.upload(),this._indexBuffer.upload();const c=this._indexBuffer.getGPUBuffer(e,1===n),_=this._vertexBuffer.getGPUBuffer(e);return o||(o=new a$4(e,r,t$1,{geometry:_},c),this._vaos.set(n,o)),o}forEachCommand(e){if(!t(this._records)){if(this._sortIndices(this._records),!this._displayList){const e=this._cursorIndexOrder;this._displayList=a$2.from(this,this.geometryType,this._records.getCursor(),e);}this._displayList.forEach(e);}}_sortIndices(e){const t=!!this._indexBuffer.bufferSize;if(!this._indicesInvalid)return;this._indicesInvalid=!1;let r=0;const i=e.getCursor(),s=[],f=[],n=[];for(;i.next();)f.push(i.index),n.push(i.sortKey),s.push(i.id);f.sort(((e,t)=>{const r=n[t],i=n[e];return i===r?s[t]-s[e]:r-i}));const o=e.getCursor(),d=t?this._indexBuffer.getCPUBuffer():this._vertexBuffer.getCPUBuffer();for(const h of f){if(!o.seekIndex(h))throw new Error("Expected to find index");if(t){const{indexFrom:e,indexCount:t}=o;o.indexFrom=r;for(let i=0;i<t;i++)this._indexBuffer.set(r++,d.array[e+i]);}else {const{vertexFrom:e,vertexCount:t}=o,i=this._vertexBuffer.strideInt,s=e*i,f=s+t*i;o.vertexFrom=r/i;for(let n=s;n<f;n++)this._vertexBuffer.set(r++,d.array[n]);}}this._cursorIndexOrder=f,this._displayList=null;}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const c=50,u$1=4,_=100;let p$1=0;class l extends m{constructor(t,r,s,a,n,h){super(t,r,s,a),this.instanceId=p$1++,this.patchCount=0,this._renderState={current:{geometry:new Map,metrics:null},next:null,swap:!1,swapFrames:0,locked:!1},this._patches=new s$1(_),this._bufferPatches=new s$1(_),this._lastCommitTime=0,this.transforms.labelMat2d=n$1(),this._store=n,this._requestLabelUpdate=h;}destroy(){super.destroy(),this._renderState.current.geometry.forEach((e=>e.destroy())),r$2(this._renderState.next)&&this._renderState.next.geometry.forEach((e=>e.destroy())),this._renderState.current=null,this._renderState.next=null;}get labelMetrics(){return this._renderState.current.metrics}get hasData(){return !!this._renderState.current.geometry.size}getGeometry(e){return this._renderState.current.geometry.get(e)}patch(e,t){this.patchCount++,e.clear&&this._patches.size>=c&&this._dropPatches();const r=e,s=r.addOrUpdate&&this.key.id!==r.addOrUpdate.tileKeyOrigin;t&&s?this._bufferPatches.enqueue(r):(r.sort=r.sort&&!t,this._patches.enqueue(r)),this.requestRender();}commit(e){if(this._lastCommitTime!==e.time){this._lastCommitTime=e.time;for(let e=0;e<u$1;e++)this._updateMesh(),this.isReady&&this._updateBufferMesh();this._renderState.swap&&(this._swapRenderStates(),this.requestRender());}}lock(){this._renderState.locked=!0;}unlock(){this._renderState.locked=!1,this._flushUpdates(),this._swap();}_swapRenderStates(){if(this._renderState.next){if(this._renderState.locked)return this._renderState.swap=!0,void this.requestRender();this._renderState.swap=!0,this._swap();}}_swap(){this._renderState.swap&&(this._renderState.swap=!1,r$2(this._renderState.next)&&(this._renderState.current.geometry.forEach((e=>e.destroy())),this._renderState.current=this._renderState.next,this._renderState.next=null,this._requestLabelUpdate()));}_flushUpdates(){let e=this._patches.maxSize;for(;this._patches.size&&e--;)this._updateMesh(),this._swap();}_updateBufferMesh(){const e=this._bufferPatches.peek();if(!r$2(e)||!e.clear||null===this._renderState.next)for(;this._bufferPatches.size;){const e=this._bufferPatches.dequeue();r$2(e)&&this._patchBuffer(e);}}_updateMesh(){const e=this._patches.dequeue();if(r$2(e)){if(has("esri-2d-update-debug")){const t=e,r=t.addOrUpdate?.tileKeyOrigin,s=this.key.id===r?"SELF":r;let i="";for(let e=0;e<5;e++)i+=t.addOrUpdate?.data[e]?.records?.byteLength?1:0;console.debug(this.key.id,"FeatureTile:patch",`[clear: ${t.clear} origin: ${s}, end:${t.end} data:${i}]`);}!0===e.clear&&(r$2(this._renderState.next)&&(this._renderState.next.geometry.forEach((e=>e.destroy())),this._renderState.next=null),this._renderState.next={geometry:new Map,metrics:null},has("esri-2d-update-debug")&&console.debug(this.key.id,"FeatureTile:_updateMesh - Creating new renderState")),this.requestRender(),this._patch(e),e.end&&(has("esri-2d-update-debug")&&console.debug(this.key.id,"FeatureTile:_updateMesh - Encountered end message"),this.ready(),this._swapRenderStates());}}_patch(e){he((t=>{this._remove(t,e.remove),this._insert(t,e,!1);}));}_patchBuffer(e){he((t=>{this._insert(t,e,!0);}));}_insert(e,t$1,i){try{const n=i$3(this._renderState.next,this._renderState.current),h=t$1.addOrUpdate?.data[e],d=n.geometry;if(t(h))return;d.has(e)||(has("esri-2d-update-debug")&&console.debug(this.key.id,`FeatureTile:_insert - Creating geometry buffer ${e}`),d.set(e,new c$1(e,this.stage))),has("esri-2d-update-debug")&&console.debug(this.key.id,`FeatureTile:_insert - Inserting into ${e}, version=${t$1.addOrUpdate.version} stride=${h.stride}`),d.get(e).insert(h,t$1.sort,i),e===E$1.LABEL&&this._insertLabelMetrics(t$1.type,h.metrics,t$1.clear);}catch(n){}}_insertLabelMetrics(e,t$1,i){const a=i$3(this._renderState.next,this._renderState.current);if(t(t$1))return;const n=o.from(t$1);if(t(a.metrics))a.metrics=n;else {if("update"===e){const e=n.getCursor();for(;e.next();)a.metrics.delete(e.id);}a.metrics.link(n);}}_remove(e,t){const s=i$3(this._renderState.next,this._renderState.current).geometry.get(e);t&&t.length&&s&&(s.remove(t),this._removeLabelMetrics(t));}_removeLabelMetrics(e){const{metrics:t$1}=i$3(this._renderState.next,this._renderState.current);if(!t(t$1)&&e.length)for(const r of e)for(;t$1.delete(r););}_dropPatches(){const e=new Array;let t$1=!1;for(;this._patches.size;){const r=this._patches.dequeue();if(t(r))break;if(r.clear){if(t$1)break;t$1=!0;}e.push(r);}this._patches.clear(),e.forEach((e=>this._patches.enqueue(e)));}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const r=has("featurelayer-order-by-server-enabled");class a extends o$2{constructor(e,t,s,i){super(e),this._hitTestsRequests=[],this._layer=s,this._layerView=t,this._onUpdate=i;}renderChildren(e){if(this.attributeView.update(),this.hasAnimation){e.painter.effects.integrate.draw(e,e.attributeView);}super.renderChildren(e);}hasEmptyAttributeView(){return this.attributeView.isEmpty()}isUpdating(){return this.attributeView.isUpdating()}hitTest(t){let s=this._hitTestsRequests.find((({x:e,y:s})=>e===t.x&&s===t.y));const i=D();return s?s.resolvers.push(i):(s={x:t.x,y:t.y,resolvers:[i]},this._hitTestsRequests.push(s)),this.requestRender(),i.promise}onTileData(e,t){const s=r&&"orderBy"in this._layer&&this._layer.orderBy,i=s?.length&&!s[0].valueExpression&&s[0].field,a=s&&this._layerView.orderByFields===i;e.patch(t,a),this.contains(e)||this.addChild(e),this.requestRender();}onTileError(e){this.contains(e)||this.addChild(e);}updateTransitionProperties(e,t){super.updateTransitionProperties(e,t),this._layerView.featureEffectView.transitionStep(e,t),this._layerView.featureEffectView.transitioning&&this.requestRender();}doRender(e){const{minScale:t,maxScale:s}=this._layer,i=e.state.scale;i<=(t||1/0)&&i>=s&&super.doRender(e);}afterRender(e){super.afterRender(e),this._hitTestsRequests.length&&this.requestRender();}onAttributeStoreUpdate(){this.hasLabels&&this._layerView.view.labelManager.requestUpdate(),this._onUpdate();}get hasAnimation(){return this.hasLabels}setStencilReference(e){const{rendererSchema:t}=e.rendererInfo;if("dot-density"===t?.type&&t?.dotSize>1||"heatmap"===t?.type){const e=1;for(const t of this.children)t.stencilRef=t.key.level+e;}else super.setStencilReference(e);}get hasLabels(){if("sublayers"in this._layer)return this._layer.sublayers.some((e=>e.labelingInfo&&e.labelingInfo.length&&e.labelsVisible));const e=this._layer.featureReduction,t=e&&"labelingInfo"in e&&e.labelsVisible&&e.labelingInfo&&e.labelingInfo.length;return this._layer.labelingInfo&&this._layer.labelingInfo.length&&this._layer.labelsVisible||!!t}prepareRenderPasses(e){const s=e.registerRenderPass({name:"label",brushes:[n$2.label],target:()=>this.hasLabels?this.children:null,drawPhase:I.LABEL|I.LABEL_ALPHA}),r=e.registerRenderPass({name:"geometry",brushes:[n$2.fill,n$2.dotDensity,n$2.line,n$2.marker,n$2.heatmap,n$2.pieChart,n$2.text],target:()=>this.children,enableDefaultDraw:()=>!this._layerView.featureEffectView.hasEffects,effects:[{apply:e.effects.outsideEffect,enable:()=>this._layerView.featureEffectView.hasEffects,args:()=>this._layerView.featureEffectView.excludedEffects},{apply:e.effects.insideEffect,enable:()=>this._layerView.featureEffectView.hasEffects,args:()=>this._layerView.featureEffectView.includedEffects},{apply:e.effects.hittest,enable:()=>!!this._hitTestsRequests.length,args:()=>this._hitTestsRequests}]}),a=e.registerRenderPass({name:"highlight",brushes:[n$2.fill,n$2.dotDensity,n$2.line,n$2.marker,n$2.pieChart,n$2.text],target:()=>this.children,drawPhase:I.HIGHLIGHT,enableDefaultDraw:()=>!1,effects:[{apply:e.effects.highlight,enable:()=>!!this._layerView.hasHighlight()}]});return [...super.prepareRenderPasses(e),r,a,s]}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let u=class extends o$3{constructor(){super(...arguments),this.type="symbol";}install(e){const t=()=>this.notifyChange("updating"),i=new a(this.tileInfoView,this.layerView,this.layer,t);this.featuresView=i,e.addChild(i);}uninstall(e){e.removeChild(this.featuresView),this.featuresView.destroy(),this.featuresView=null;}fetchResource(e,i){const{url:s}=e,r=this.featuresView.stage;try{return r.resourceManager.fetchResource(s,{signal:i.signal})}catch(a){return j(a)?Promise.resolve({width:0,height:0}):Promise.reject(a)}}isUpdating(){const e=super.isUpdating(),t=!this.featuresView||this.featuresView.isUpdating(),i=this.featuresView?.hasEmptyAttributeView(),s=e||t||e&&i;return has("esri-2d-log-updating")&&console.log(`Updating SymbolTileRenderer ${s}\n  -> updatingTiles ${e}\n  -> hasFeaturesView ${!!this.featuresView}\n  -> updatingFeaturesView ${t}`),s}hitTest(e){return this.featuresView.hitTest(e)}supportsRenderer(e){return null!=e&&["simple","class-breaks","unique-value","dot-density","dictionary","heatmap","pie-chart"].includes(e.type)}onConfigUpdate(e){let t=null;if(e&&"visualVariables"in e){const i=(n$4(e).visualVariables||[]).map((e=>{const t=e.clone();return "normalizationField"in e&&(t.normalizationField=null),e.valueExpression&&"$view.scale"!==e.valueExpression&&(t.valueExpression=null,t.field="nop"),t}));t=f$2(i);}this.featuresView.setRendererInfo(e,t,this.layerView.featureEffect);}onTileData(e){const t=this.tiles.get(e.tileKey);t&&e.data&&this.featuresView.onTileData(t,e.data),this.layerView.view.labelManager.requestUpdate();}onTileError(e){const t=this.tiles.get(e.tileKey);t&&this.featuresView.onTileError(t);}forceAttributeTextureUpload(){this.featuresView.attributeView.forceTextureUpload();}lockGPUUploads(){this.featuresView.attributeView.lockTextureUpload(),this.tiles.forEach((e=>e.lock()));}unlockGPUUploads(){this.featuresView.attributeView.unlockTextureUpload(),this.tiles.forEach((e=>e.unlock()));}async getMaterialItems(e){return this.featuresView.getMaterialItems(e)}invalidateLabels(){this.featuresView.hasLabels&&this.layerView.view.labelManager.requestUpdate();}createTile(e){const t=this.tileInfoView.getTileBounds(u$4(),e),i=()=>this.layerView.view.labelManager.requestUpdate(),a=this.tileInfoView.getTileResolution(e.level),o=this.featuresView.attributeView;return new l(e,a,t[0],t[3],o,i)}disposeTile(e){this.featuresView.removeChild(e),e.destroy(),this.layerView.view.labelManager.requestUpdate();}};u=e$2([n$3("esri.views.2d.layers.features.tileRenderers.SymbolTileRenderer")],u);const p=u;

export { p as default };
