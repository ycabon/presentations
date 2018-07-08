// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["require","exports","./ManagedTextureBackedBuffer"],function(d,e,f){Object.defineProperty(e,"__esModule",{value:!0});d=function(){function c(a,b){void 0===b&&(b=1);this.rctx=a;this.fieldCount=b;this.buffers=[]}c.prototype.garbageCollect=function(){this.buffers=this.buffers.filter(function(a){return 0===a.activeCount?(a.dispose(),!1):!0})};c.prototype.getBuffer=function(a){for(var b=0,c=this.buffers;b<c.length;b++){var d=c[b];if(d.availableCount>=a)return d}if(a>f.MAX_INDEX_COUNT)return null;
a=new f.ManagedTextureBackedBuffer(this.rctx,this.fieldCount);this.buffers.push(a);return a};c.prototype.updateTextures=function(){for(var a=0,b=this.buffers;a<b.length;a++)b[a].textureBuffer.updateTexture()};return c}();e.BufferManager=d});