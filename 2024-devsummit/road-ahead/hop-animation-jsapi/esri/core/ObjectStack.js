// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","./nextTick"],function(b,c){class d{constructor(a){this._allocator=a;this._items=[];this._itemsPtr=0;this._grow()}get(){0===this._itemsPtr&&c.nextTick(()=>this._reset());this._itemsPtr===this._items.length&&this._grow();return this._items[this._itemsPtr++]}_reset(){this._items.length=Math.min(Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3072),this._items.length);this._itemsPtr=0}_grow(){for(let a=0;a<Math.max(8,Math.min(this._items.length,1024));a++)this._items.push(this._allocator())}}
b.ObjectStack=d;Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});