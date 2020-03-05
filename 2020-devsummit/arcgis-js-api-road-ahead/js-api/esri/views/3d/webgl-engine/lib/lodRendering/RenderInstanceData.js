// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../support/buffer/BufferView","../Util","./BackedBufferObject"],function(g,f,c,e,l){Object.defineProperty(f,"__esModule",{value:!0});var h=function(){return function(a){this.modelOriginHi=a.getField("modelOriginHi",c.BufferViewVec3f);this.modelOriginLo=a.getField("modelOriginLo",c.BufferViewVec3f);this.model=a.getField("model",c.BufferViewMat3f);this.modelNormal=a.getField("modelNormal",c.BufferViewMat3f);this.color=a.getField("instanceColor",c.BufferViewVec4f);
this.featureAttribute=a.getField("instanceFeatureAttribute",c.BufferViewVec4f)}}();f.View=h;g=function(){function a(a,b){this._tailIndex=this._headIndex=0;this._captureFirstIndex=!0;this._updating=!1;this._prevHeadIndex=0;this._resized=!1;this._rctx=a;this._instanceBufferLayout=b;this._elementSize=b.stride;this._capacity=1}a.prototype.destroy=function(){this._buffer&&this._buffer.destroy()};Object.defineProperty(a.prototype,"buffer",{get:function(){return this._buffer.buffer},enumerable:!0,configurable:!0});
Object.defineProperty(a.prototype,"view",{get:function(){return this._view},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"capacity",{get:function(){return this._capacity},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"size",{get:function(){var a=this._headIndex,b=this._tailIndex;return a>=b?a-b:a+this._capacity-b},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"isEmpty",{get:function(){return this._headIndex===this._tailIndex},enumerable:!0,
configurable:!0});Object.defineProperty(a.prototype,"isFull",{get:function(){return this._tailIndex===(this._headIndex+1)%this._capacity},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"headIndex",{get:function(){return this._headIndex},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"tailIndex",{get:function(){return this._tailIndex},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"firstIndex",{get:function(){return this._firstIndex},enumerable:!0,
configurable:!0});Object.defineProperty(a.prototype,"memoryUsage",{get:function(){return this._buffer?this._buffer.memoryUsage:{cpu:0,gpu:0}},enumerable:!0,configurable:!0});a.prototype.reset=function(){this._tailIndex=this._headIndex=0;this._firstIndex=null};a.prototype.startUpdateCylce=function(){this._captureFirstIndex=!0};a.prototype.beginUpdate=function(){e.assert(!this._updating,"already updating");this._updating=!0;this._prevHeadIndex=this._headIndex};a.prototype.endUpdate=function(){e.assert(this._updating,
"not updating");this.size<m*this.capacity&&this.shrink();this._resized?(this._buffer.transferAll(),this._resized=!1):this.transferRange(this._prevHeadIndex,this._headIndex);this._updating=!1};a.prototype.allocateHead=function(){e.assert(this._updating,"not updating");this.isFull&&this.grow();var a=this.headIndex;this._captureFirstIndex&&(this._firstIndex=a,this._captureFirstIndex=!1);this.incrementHead();e.assert(this._headIndex!==this._tailIndex,"invalid pointers");return a};a.prototype.freeTail=
function(){e.assert(this._updating,"not updating");e.assert(0<this.size,"invalid size");var a=this._tailIndex===this._firstIndex;this.incrementTail();a&&(this._firstIndex=this._tailIndex)};a.prototype.grow=function(){this.resize(Math.max(k,Math.floor(this._capacity*n)))};a.prototype.shrink=function(){p&&this.resize(Math.max(k,Math.floor(this._capacity*q)))};a.prototype.resize=function(a){e.assert(this._updating,"not updating");if(a!==this._capacity){var b=new l(this._rctx,34962,35044,this._elementSize,
a);if(this._buffer){this._firstIndex&&(this._firstIndex=(this._firstIndex+this._capacity-this._tailIndex)%this._capacity);var d=this.size,c=this.compactInstances(b);e.assert(c===d,"invalid compaction");this._buffer.destroy();this._tailIndex=0;this._headIndex=c;this._prevHeadIndex=0}this._resized=!0;this._capacity=a;this._buffer=b;this._view=new h(this._instanceBufferLayout.createView(this._buffer.array))}};a.prototype.compactInstances=function(a){var b=this._headIndex,d=this._tailIndex;return d<b?
(this._buffer.copyRange(d,b,a),b-d):d>b?(this._buffer.copyRange(d,this._capacity,a),0<b&&this._buffer.copyRange(0,b,a,this._capacity-d),b+(this._capacity-d)):0};a.prototype.incrementHead=function(a){void 0===a&&(a=1);this._headIndex=(this._headIndex+a)%this._capacity};a.prototype.incrementTail=function(a){void 0===a&&(a=1);this._tailIndex=(this._tailIndex+a)%this._capacity};a.prototype.transferRange=function(a,b){a<b?this._buffer.transferRange(a,b):a>b&&(0<b&&this._buffer.transferRange(0,b),this._buffer.transferRange(a,
this._capacity))};return a}();f.RenderInstanceData=g;var k=1024,n=2,m=.3,q=.5,p=!0});