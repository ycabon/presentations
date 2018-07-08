// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["require","exports","dojo/has","./FreeList","./Utils"],function(n,t,u,p,v){function w(c){c=c.getStrides();var a={},b;for(b in c)a[q[b]]=c[b];return a}Object.defineProperty(t,"__esModule",{value:!0});var q=["FILL","LINE","MARKER","TEXT"];n=function(){function c(a,b,h){this._strides=a;this._displayList=b;this._vertexAlignments={};this._freeListsAndStorage={};for(var g in a){var f=b=!1;this._freeListsAndStorage[g]={vtxFreeList:h?new p.FreeList(h):null,idxFreeList:h?new p.FreeList(h):null,vertexBuffers:{},
indexBuffer:h?new Uint32Array(h):null};for(var d in a[g])this._freeListsAndStorage[g].vertexBuffers[d]={data:h?new Uint32Array(Math.floor(h*a[g][d]/4)):null,stride:a[g][d]},2===a[g][d]%4?b=!0:0!==a[g][d]%4&&(f=!0);this._vertexAlignments[g]=f?4:b?2:1}}c.fromTileData=function(a){var b=w(a),h=[0,0,0,0],g=[0,0,0,0],f=[];a.tileDisplayData.displayObjectRegistry.forEach(function(a){f.push(a)});for(var d=0;d<f.length;d++)for(var k=0,l=f[d].displayRecords;k<l.length;k++){var e=l[k];h[e.geometryType]=Math.max(h[e.geometryType],
e.vertexFrom+e.vertexCount);g[e.geometryType]=Math.max(g[e.geometryType],e.indexFrom+e.indexCount)}b=new c(b,a.tileDisplayData.displayList,null);for(d=0;d<a.tileBufferData.geometries.length;++d){var k=h[d],m=g[d],e=a.tileBufferData.geometries[d],l=b._storageFor(q[d]),n=a.tileBufferData.geometries[d].indexBuffer;l.indexBuffer=n;l.idxFreeList=new p.FreeList(n.length);l.idxFreeList.allocate(m);var m=void 0,r;for(r in e.vertexBuffer)e=a.tileBufferData.geometries[d].vertexBuffer[r],l.vertexBuffers[r].data=
e.data,l.vertexBuffers[r].stride=e.stride,m=4*e.data.length/e.stride;l.vtxFreeList=new p.FreeList(m);l.vtxFreeList.allocate(k)}return b};c.prototype.delete=function(a){var b=q[a.geometryType];this._freeVertices(b,a.vertexFrom,a.vertexCount);this._freeIndices(b,a.indexFrom,a.indexCount);this._displayList.removeFromList(a);a.vertexFrom=void 0;a.indexFrom=void 0};c.prototype.setMeshData=function(a,b,h,g){var f=q[a.geometryType];a.meshData=null;var d=void 0,k=void 0;void 0===a.vertexFrom?(k=this._align(f,
b.vertexCount),d=this._allocateVertices(f,k)):b.vertexCount>a.vertexCount?(this._freeVertices(f,a.vertexFrom,a.vertexCount),k=this._align(f,b.vertexCount),d=this._allocateVertices(f,k)):b.vertexCount===a.vertexCount?(d=a.vertexFrom,k=a.vertexCount):(this._freeVertices(f,a.vertexFrom+b.vertexCount,a.vertexCount-b.vertexCount),d=a.vertexFrom,k=b.vertexCount);var c=!0,e=void 0,m=void 0;void 0===a.indexFrom?(m=b.indexCount,e=this._allocateIndices(f,m)):b.indexCount>a.indexCount?(this._displayList.removeFromList(a),
this._freeIndices(f,a.indexFrom,a.indexCount),m=b.indexCount,e=this._allocateIndices(f,m)):b.indexCount===a.indexCount?(c=!1,e=a.indexFrom,m=a.indexCount):(this._displayList.removeFromList(a),this._freeIndices(f,a.indexFrom+b.indexCount,a.indexCount-b.indexCount),e=a.indexFrom,m=b.indexCount);if(-1!==d&&-1!==e)return f=this._storageFor(f),v.copyMeshData(d,e,f.vertexBuffers,f.indexBuffer,b,h,g),a.vertexFrom=d,a.indexFrom=e,a.vertexCount=b.vertexCount,a.indexCount=b.indexCount,c&&this._displayList.addToList(a),
!0;-1!==d&&this._freeVertices(f,d,k);-1!==e&&this._freeIndices(f,e,m);a.setMeshDataFromBuffers(b,h,g);a.vertexFrom=void 0;a.vertexCount=0;a.indexFrom=void 0;a.indexCount=0;return!1};c.prototype._allocateVertices=function(a,b){a=this._storageFor(a);b=a.vtxFreeList.allocate(b);return-1===b||.5<a.vtxFreeList.fragmentation?-1:b};c.prototype._freeVertices=function(a,b,h){var g=this._storageFor(a);g.vtxFreeList.free(b,h);if(u("esri-feature-tiles-debug"))for(var f in g.vertexBuffers)for(var d=g.vertexBuffers[f].data,
c=this._stridesFor(a,f),l=b*c/4,c=h*c/4,e=l;e<l+c;++e)d[e]=0};c.prototype._freeIndices=function(a,b,c){a=this._storageFor(a);a.idxFreeList.free(b,c);if(u("esri-feature-tiles-debug")){a=a.indexBuffer;for(var g=b;g<b+c;++g)a[g]=0}};c.prototype._align=function(a,b){var c=b%this._vertexAlignments[a];return 0===c?b:b+(this._vertexAlignments[a]-c)};c.prototype._allocateIndices=function(a,b){a=this._storageFor(a);b=a.idxFreeList.allocate(b);return-1===b||.5<a.idxFreeList.fragmentation?-1:b};c.prototype._storageFor=
function(a){return this._freeListsAndStorage[a]};c.prototype._stridesFor=function(a,b){return this._strides[a][b]};return c}();t.default=n});