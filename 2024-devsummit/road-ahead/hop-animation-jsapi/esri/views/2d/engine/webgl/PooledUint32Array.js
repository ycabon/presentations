// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../../core/has","../../../../core/maybe","./cpuMapped/FreeList"],function(d,h,k,l){const e=h("esri-2d-log-allocations");class f{static create(a,b){a=b.acquireUint32Array(a);return new f(a,b)}constructor(a,b){this._array=a;this._pool=b}get array(){return this._array}get length(){return this._array.length}getUint32View(a,b){return new Uint32Array(this._array.buffer,a+this._array.byteOffset,b)}expand(a){a<=this._array.byteLength||(a=this._pool.acquireUint32Array(a),a.set(this._array),
this._pool.releaseUint32Array(this._array),this._array=a)}destroy(){this._pool.releaseUint32Array(this._array)}}class c{constructor(){this._data=new ArrayBuffer(c.BYTE_LENGTH);this._freeList=new l.FreeList({start:0,end:this._data.byteLength})}static get BYTE_LENGTH(){return 16E6}get buffer(){return this._data}acquireUint32Array(a){const b=this._freeList.firstFit(a);return null==b?null:new Uint32Array(this._data,b,a/Uint32Array.BYTES_PER_ELEMENT)}releaseUint32Array(a){this._freeList.free(a.byteOffset,
a.byteLength)}}class m{constructor(){this._pages=[];this._pagesByBuffer=new Map;this._bytesAllocated=0}destroy(){this._pages=[];this._pagesByBuffer=null}get _bytesTotal(){return this._pages.length*c.BYTE_LENGTH}acquireUint32Array(a){this._bytesAllocated+=a;e&&console.log(`Allocating ${a}, (${this._bytesAllocated} / ${this._bytesTotal})`);if(a>=c.BYTE_LENGTH)return new Uint32Array(a/Uint32Array.BYTES_PER_ELEMENT);for(const b of this._pages){const g=b.acquireUint32Array(a);if(null!=g)return g}a=this._addPage().acquireUint32Array(a);
k.assertIsSome(a,"Expected to allocate page");return a}releaseUint32Array(a){this._bytesAllocated-=a.byteLength;e&&console.log(`Freeing ${a.byteLength}, (${this._bytesAllocated} / ${this._bytesTotal})`);const b=this._pagesByBuffer.get(a.buffer);b&&b.releaseUint32Array(a)}_addPage(){const a=new c;this._pages.push(a);this._pagesByBuffer.set(a.buffer,a);return a}}d.ArrayBufferPool=m;d.PooledUint32Array=f;Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});