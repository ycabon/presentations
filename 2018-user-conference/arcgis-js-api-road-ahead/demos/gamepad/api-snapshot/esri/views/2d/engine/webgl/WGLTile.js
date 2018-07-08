// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/extendsHelper ../../../../core/libs/gl-matrix/mat4 ../../../../core/libs/gl-matrix/vec2 ../DisplayObject ./DisplayRecordStore ./enums ./WGLBuffers ./WGLDisplayList ./WGLDisplayObject ../../tiling/TileKey".split(" "),function(B,C,t,u,v,w,q,c,r,x,y,z){function A(c,a){return c.sortKey-a.sortKey}var p=new Set;return function(l){function a(b,a){var d=l.call(this)||this;d.tileStatus=c.TileStatus.INITIALIZED;d._data=null;d.hlDisplayList=null;d._wglBuffers=
null;d.coords=[0,0];d.bounds=[0,0,0,0];d.tileTransform={transform:Float32Array[16],displayCoord:Float32Array[2]};d._hasVisualVariables=!1;d.tileTransform.transform=u.create();d.tileTransform.displayCoord=v.create();d.key=z.pool.acquire(b);d.coords[0]=a[0];d.coords[1]=a[3];d.bounds=a;return d}t(a,l);Object.defineProperty(a.prototype,"iconGeometry",{get:function(){return this.getGeometry(c.WGLGeometryType.MARKER)},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"textGeometry",{get:function(){return this.getGeometry(c.WGLGeometryType.TEXT)},
enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"fillGeometry",{get:function(){return this.getGeometry(c.WGLGeometryType.FILL)},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"lineGeometry",{get:function(){return this.getGeometry(c.WGLGeometryType.LINE)},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"canDisplay",{get:function(){return!!this.attached&&!!this._data},enumerable:!0,configurable:!0});a.prototype.getGeometry=function(b){return this._wglBuffers&&
this._wglBuffers.has(b)?this._wglBuffers.get(b):null};a.prototype.getDisplayList=function(b){switch(b){case c.WGLDrawPhase.HIGHLIGHT:return this.hlDisplayList;default:return this._data&&this._data.tileDisplayData.displayList}};Object.defineProperty(a.prototype,"data",{get:function(){return this._data},enumerable:!0,configurable:!0});a.prototype.setData=function(b,a){this._hasVisualVariables=a;this._geometryTypes=[c.WGLGeometryType.FILL,c.WGLGeometryType.LINE,c.WGLGeometryType.MARKER,c.WGLGeometryType.TEXT];
b&&b.tileDisplayData?(this._dispRecStore=q.default.fromTileData(b),this._data=b,this.tileStatus=this.tileStatus===c.TileStatus.READY||this.tileStatus===c.TileStatus.NO_DATA||this.tileStatus===c.TileStatus.INVALID?c.TileStatus.MODIFIED:c.TileStatus.READY):(this.clear(),this.tileStatus=c.TileStatus.NO_DATA)};a.prototype.patchData=function(b){this._data||(this.setData(b.addOrUpdate,this._hasVisualVariables),b.addOrUpdate=null);this.tileStatus=c.TileStatus.MODIFIED;this._patchData(b)||(this._data.reshuffle(),
this._dispRecStore=q.default.fromTileData(this._data));this.requestRender()};a.prototype.commitChanges=function(b){this._data&&this.tileStatus===c.TileStatus.MODIFIED&&(this._wglBuffers&&(35048!==this._wglBuffers.usage&&(this._wglBuffers.dispose(),this._wglBuffers=new r.default(35048)),this._wglBuffers.ensureBuffers(b.context,this._geometryTypes,this._hasVisualVariables),this._wglBuffers.upload(this._data.tileBufferData,this._geometryTypes,["geometry","visibility"],!0)),this.tileStatus=c.TileStatus.READY)};
a.prototype.setVisibility=function(b){if(this._data){p.clear();for(var a=0;a<b.length;a++){var d=b[a],c=this._data.tileDisplayData.displayObjectRegistry.get(d.id);if(c)for(var g=0,c=c.displayRecords;g<c.length;g++){var f=c[g];p.add(f.geometryType);var e=this._data.tileBufferData.geometries[f.geometryType];if(e.vertexBuffer.visibility)for(var e=e.vertexBuffer.visibility,h=0;h<f.vertexCount;++h)e.data[(f.vertexFrom+h)*e.stride/4]=d.visibility?4294967295:0}}if(this._wglBuffers){var m=[];p.forEach(function(b){m.push(b)});
this._wglBuffers.upload(this._data.tileBufferData,m,["visibility"],!1);this.requestRender()}}};a.prototype.clear=function(){this._data=null;this.tileStatus=c.TileStatus.INVALID;this._wglBuffers&&(this._wglBuffers.dispose(),this._wglBuffers=null);this.hlDisplayList&&(this.hlDisplayList=null)};a.prototype.dispose=function(){this.clear()};a.prototype.attach=function(b){if(this.attached||this.tileStatus===c.TileStatus.INVALID)return!0;if(this.tileStatus===c.TileStatus.INITIALIZED)return!1;this._wglBuffers||
(this._wglBuffers=new r.default(35044));this._data&&(this._wglBuffers.ensureBuffers(b.context,this._geometryTypes,this._hasVisualVariables),this._wglBuffers.upload(this._data.tileBufferData,this._geometryTypes,["geometry","visibility"],!0));return!0};a.prototype.detach=function(b){l.prototype.detach.call(this,b)};a.prototype.doRender=function(b){var a=this;this.commitChanges(b);b.context.setStencilTestEnabled(!0);b.context.setStencilFunction(514,this.stencilRef,255);b.painter.getBrushes(b.drawPhase).forEach(function(d){return d.draw(b,
a)})};a.prototype.buildHLList=function(b){var a=this;this.hlDisplayList=new x;b.forEach(function(b){a._addToHLDisplayList(a.hlDisplayList,b)})};a.prototype._addToHLDisplayList=function(b,a){if(this._data){var d=this._data.tileDisplayData.displayObjectRegistry.get(a);if(d){a=[];for(var c=0,d=d.displayRecords;c<d.length;c++){var g=d[c].copy();g.meshData=null;g.symbolLevel=0;g.zOrder=0;a.push(g)}a.sort(A);b.addToList(a)}}};a.prototype._patchData=function(a){for(var b=!0,c=0,n=a.remove||[];c<n.length;c++){var g=
n[c],f=this._data.tileDisplayData.displayObjectRegistry.get(g);if(f){this._data.tileDisplayData.displayList.removeFromList(f.displayRecords);for(var e=0,h=f.displayRecords;e<h.length;e++)this._dispRecStore.delete(h[e]);this._data.tileDisplayData.displayObjectRegistry.delete(g);f=this._data.tileDisplayData.displayObjects.indexOf(f);this._data.tileDisplayData.displayObjects.splice(f,1)}}c=0;for(n=a.addOrUpdate&&a.addOrUpdate.tileDisplayData&&a.addOrUpdate.tileDisplayData.displayObjects||[];c<n.length;c++){g=
n[c];if(f=this._data.tileDisplayData.displayObjectRegistry.get(g.id)){for(var m=f.displayRecords.length,e=0;e<m;++e){var h=f.displayRecords[e],k=g.displayRecords[e];if(e>=g.displayRecords.length||h.geometryType!==k.geometryType||h.symbolLevel!==k.symbolLevel||h.zOrder!==k.zOrder||h.materialInfo.materialKey!==k.materialInfo.materialKey)this._dispRecStore.delete(f.displayRecords[e]),e<g.displayRecords.length&&(f.displayRecords[e]=void 0)}f.displayRecords.length=g.displayRecords.length}else f=new y(g.id),
this._data.tileDisplayData.displayObjectRegistry.set(g.id,f),this._data.tileDisplayData.displayObjects.push(f);m=g.displayRecords.length;for(e=0;e<m;++e){k=g.displayRecords[e];(h=f.displayRecords[e])?(h.meshData=k.meshData,h.materialInfo=k.materialInfo):(h=k.copy(),h.vertexFrom=void 0,h.indexFrom=void 0,f.displayRecords[e]=h);var l=a.addOrUpdate.tileBufferData.geometries[k.geometryType],b=this._dispRecStore.setMeshData(h,k,l.vertexBuffer,l.indexBuffer)&&b}}return b};return a}(w)});