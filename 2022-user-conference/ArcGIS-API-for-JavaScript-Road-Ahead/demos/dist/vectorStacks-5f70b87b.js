import { fp as t$1, fq as o$1, fr as o$2, fs as u, ft as u$1, fu as n } from './_virtual_index-a68dd1ed.js';
import { n as n$1 } from './mat4f64-2ebd3575.js';
import { n as n$2 } from './quatf64-808fd6fd.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class s{constructor(t){this._allocator=t,this._items=[],this._itemsPtr=0,this._grow();}get(){return 0===this._itemsPtr&&t$1((()=>this._reset())),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}_reset(){const t=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*i);this._items.length=Math.min(t,this._items.length),this._itemsPtr=0;}_grow(){for(let t=0;t<Math.max(8,Math.min(this._items.length,i));t++)this._items.push(this._allocator());}}const i=1024;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class a{constructor(t,e,s){this._itemByteSize=t,this._itemCreate=e,this._buffers=new Array,this._items=new Array,this._itemsPtr=0,this._itemsPerBuffer=Math.ceil(s/this._itemByteSize);}get(){0===this._itemsPtr&&t$1((()=>this._reset()));const t=Math.floor(this._itemsPtr/this._itemsPerBuffer);for(;this._buffers.length<=t;){const t=new ArrayBuffer(this._itemsPerBuffer*this._itemByteSize);for(let e=0;e<this._itemsPerBuffer;++e)this._items.push(this._itemCreate(t,e*this._itemByteSize));this._buffers.push(t);}return this._items[this._itemsPtr++]}_reset(){const t=2*(Math.floor(this._itemsPtr/this._itemsPerBuffer)+1);for(;this._buffers.length>t;)this._buffers.pop(),this._items.length=this._buffers.length*this._itemsPerBuffer;this._itemsPtr=0;}static createVec2f64(t=c$1){return new a(16,o$2,t)}static createVec3f64(t=c$1){return new a(24,u,t)}static createVec4f64(t=c$1){return new a(32,u$1,t)}static createMat3f64(t=c$1){return new a(72,n,t)}static createMat4f64(t=c$1){return new a(128,n$1,t)}static createQuatf64(t=c$1){return new a(32,n$2,t)}get test(){return {size:this._buffers.length*this._itemsPerBuffer*this._itemByteSize}}}const c$1=4*o$1.KILOBYTES;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const t=a.createVec2f64(),c=a.createVec3f64(),r=a.createVec4f64();a.createMat3f64();const f=a.createMat4f64(),o=a.createQuatf64();

export { c, f, o, r, s, t };