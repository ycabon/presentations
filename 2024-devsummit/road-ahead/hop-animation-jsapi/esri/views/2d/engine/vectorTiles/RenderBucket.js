// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/maybe ../../../../core/typedArrayUtil ../../tiling/TileInfoView ../../tiling/TileKey ../../tiling/TileQueue ../../tiling/TileStrategy ./enums ./decluttering/util ../../../webgl/BufferObject ../../../webgl/enums ../../../webgl/VertexArrayObject".split(" "),function(m,n,w,D,x,E,F,t,y,k,l,p){class r{constructor(a,b){this.layerUIDs=[];this.isDestroyed=!1;this._data=a;let c=1;a=new Uint32Array(a);this.layerUIDs=[];const e=a[c++];for(let d=0;d<e;d++)this.layerUIDs[d]=a[c++];
this.bufferDataOffset=c;b&&(this.layer=b.getStyleLayerByUID(this.layerUIDs[0]))}get isPreparedForRendering(){return null==this._data}get offset(){return this.bufferDataOffset}get data(){return this._data}destroy(){this.isDestroyed||(this.doDestroy(),this._data=null,this.isDestroyed=!0)}prepareForRendering(a){null!=this._data&&(this.doPrepareForRendering(a,this._data,this.bufferDataOffset),this._data=null)}}class z extends r{constructor(a,b){super(a,b);this.type=t.BucketType.LINE;this.lineIndexCount=
this.lineIndexStart=0;a=new Uint32Array(a);b=this.bufferDataOffset;this.lineIndexStart=a[b++];this.lineIndexCount=a[b++];const c=a[b++];if(0<c){this.patternMap=new Map;for(let e=0;e<c;e++){const d=a[b++],g=a[b++],f=a[b++];this.patternMap.set(d,[g,f])}}this.bufferDataOffset=b}get memoryUsed(){return(this.data?.byteLength??0)+(this.vao?.usedMemory??0)}hasData(){return 0<this.lineIndexCount}triangleCount(){return this.lineIndexCount/3}doDestroy(){this.vao=n.disposeMaybe(this.vao)}doPrepareForRendering(a,
b,c){var e=new Uint32Array(b);b=new Int32Array(e.buffer);var d=e[c++];b=k.BufferObject.createVertex(a,l.Usage.STATIC_DRAW,new Int32Array(b.buffer,4*c,d));c+=d;d=e[c++];e=k.BufferObject.createIndex(a,l.Usage.STATIC_DRAW,new Uint32Array(e.buffer,4*c,d));c+=d;c=this.layer.lineMaterial;this.vao=new p.VertexArrayObject(a,c.getAttributeLocations(),c.getLayoutInfo(),{geometry:b},e)}}class A extends r{constructor(a,b){super(a,b);this.type=t.BucketType.FILL;this.outlineIndexCount=this.outlineIndexStart=this.fillIndexCount=
this.fillIndexStart=0;a=new Uint32Array(a);b=this.bufferDataOffset;this.fillIndexStart=a[b++];this.fillIndexCount=a[b++];this.outlineIndexStart=a[b++];this.outlineIndexCount=a[b++];const c=a[b++];if(0<c){this.patternMap=new Map;for(let e=0;e<c;e++){const d=a[b++],g=a[b++],f=a[b++];this.patternMap.set(d,[g,f])}}this.bufferDataOffset=b}get memoryUsed(){return(this.data?.byteLength??0)+(this.fillVAO?.usedMemory??0)+(this.outlineVAO?.usedMemory??0)}hasData(){return 0<this.fillIndexCount||0<this.outlineIndexCount}triangleCount(){return(this.fillIndexCount+
this.outlineIndexCount)/3}doDestroy(){this.fillVAO=n.disposeMaybe(this.fillVAO);this.outlineVAO=n.disposeMaybe(this.outlineVAO)}doPrepareForRendering(a,b,c){var e=new Uint32Array(b),d=new Int32Array(e.buffer),g=e[c++];b=k.BufferObject.createVertex(a,l.Usage.STATIC_DRAW,new Int32Array(d.buffer,4*c,g));c+=g;var f=e[c++];g=k.BufferObject.createIndex(a,l.Usage.STATIC_DRAW,new Uint32Array(e.buffer,4*c,f));c+=f;f=e[c++];d=k.BufferObject.createVertex(a,l.Usage.STATIC_DRAW,new Int32Array(d.buffer,4*c,f));
c+=f;f=e[c++];e=k.BufferObject.createIndex(a,l.Usage.STATIC_DRAW,new Uint32Array(e.buffer,4*c,f));c+=f;f=this.layer;c=f.fillMaterial;f=f.outlineMaterial;this.fillVAO=new p.VertexArrayObject(a,c.getAttributeLocations(),c.getLayoutInfo(),{geometry:b},g);this.outlineVAO=new p.VertexArrayObject(a,f.getAttributeLocations(),f.getLayoutInfo(),{geometry:d},e)}}class B extends r{constructor(a,b,c){super(a,b);this.type=t.BucketType.SYMBOL;this.iconPerPageElementsMap=new Map;this.glyphPerPageElementsMap=new Map;
this.symbolInstances=[];this.opacityChanged=this.isIconSDF=!1;this.lastOpacityUpdate=0;this.symbols=[];b=new Uint32Array(a);const e=new Int32Array(a);a=new Float32Array(a);let d=this.bufferDataOffset;this.isIconSDF=!!b[d++];var g=b[d++],f=b[d++],h=b[d++];g=new x(g,f,h,0);f=b[d++];for(h=0;h<f;h++){var q=b[d++],u=b[d++],v=b[d++];this.iconPerPageElementsMap.set(q,[u,v])}f=b[d++];for(h=0;h<f;h++)q=b[d++],u=b[d++],v=b[d++],this.glyphPerPageElementsMap.set(q,[u,v]);f=b[d++];h=b[d++];this.iconOpacity=new Int32Array(f);
this.textOpacity=new Int32Array(h);this.bufferDataOffset=d=y.deserializeSymbols(b,e,a,d,this.symbols,c,g)}get memoryUsed(){return(this.data?.byteLength??0)+(this.iconVAO?.usedMemory??0)+(this.textVAO?.usedMemory??0)+w.estimateSize(this.iconOpacity)+w.estimateSize(this.textOpacity)}hasData(){return 0<this.iconPerPageElementsMap.size||0<this.glyphPerPageElementsMap.size}triangleCount(){let a=0;for(const [,b]of this.iconPerPageElementsMap)a+=b[1];for(const [,b]of this.glyphPerPageElementsMap)a+=b[1];
return a/3}doDestroy(){this.iconVAO=n.disposeMaybe(this.iconVAO);this.textVAO=n.disposeMaybe(this.textVAO)}updateOpacityInfo(){if(this.opacityChanged){this.opacityChanged=!1;var a=this.iconOpacity,b=this.iconVAO.vertexBuffers.opacity;0<a.length&&a.byteLength===b.usedMemory&&b.setSubData(a,0,0,a.length);a=this.textOpacity;b=this.textVAO.vertexBuffers.opacity;0<a.length&&a.byteLength===b.usedMemory&&b.setSubData(a,0,0,a.length)}}doPrepareForRendering(a,b,c){var e=new Uint32Array(b),d=new Int32Array(e.buffer),
g=e[c++];b=k.BufferObject.createVertex(a,l.Usage.STATIC_DRAW,new Int32Array(d.buffer,4*c,g));c+=g;var f=e[c++];g=k.BufferObject.createIndex(a,l.Usage.STATIC_DRAW,new Uint32Array(e.buffer,4*c,f));c+=f;f=e[c++];d=k.BufferObject.createVertex(a,l.Usage.STATIC_DRAW,new Int32Array(d.buffer,4*c,f));c+=f;f=e[c++];e=k.BufferObject.createIndex(a,l.Usage.STATIC_DRAW,new Uint32Array(e.buffer,4*c,f));c+=f;c=k.BufferObject.createVertex(a,l.Usage.STATIC_DRAW,this.iconOpacity.buffer);f=k.BufferObject.createVertex(a,
l.Usage.STATIC_DRAW,this.textOpacity.buffer);var h=this.layer;const q=h.iconMaterial;h=h.textMaterial;this.iconVAO=new p.VertexArrayObject(a,q.getAttributeLocations(),q.getLayoutInfo(),{geometry:b,opacity:c},g);this.textVAO=new p.VertexArrayObject(a,h.getAttributeLocations(),h.getLayoutInfo(),{geometry:d,opacity:f},e)}}class C extends r{constructor(a,b){super(a,b);this.type=t.BucketType.CIRCLE;this.circleIndexCount=this.circleIndexStart=0;a=new Uint32Array(a);b=this.bufferDataOffset;this.circleIndexStart=
a[b++];this.circleIndexCount=a[b++];this.bufferDataOffset=b}get memoryUsed(){return(this.data?.byteLength??0)+(this.vao?.usedMemory??0)}hasData(){return 0<this.circleIndexCount}triangleCount(){return this.circleIndexCount/3}doDestroy(){this.vao=n.disposeMaybe(this.vao)}doPrepareForRendering(a,b,c){var e=new Uint32Array(b);b=new Int32Array(e.buffer);var d=e[c++];b=k.BufferObject.createVertex(a,l.Usage.STATIC_DRAW,new Int32Array(b.buffer,4*c,d));c+=d;d=e[c++];e=k.BufferObject.createIndex(a,l.Usage.STATIC_DRAW,
new Uint32Array(e.buffer,4*c,d));c+=d;c=this.layer.circleMaterial;this.vao=new p.VertexArrayObject(a,c.getAttributeLocations(),c.getLayoutInfo(),{geometry:b},e)}}m.CircleRenderBucket=C;m.FillRenderBucket=A;m.LineRenderBucket=z;m.RenderBucketBase=r;m.SymbolRenderBucket=B;Object.defineProperty(m,Symbol.toStringTag,{value:"Module"})});