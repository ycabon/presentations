// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports dojo/Deferred ../../core/executeAsync ../../core/ObjectPool ../../core/promiseUtils ./BackgroundBucket ./CircleBucket ./FillBucket ./GeometryUtils ./IndexMemoryBuffer ./LineBucket ./Placement ./SymbolBucket ./TileParser ./VertexMemoryBuffer".split(" "),function(O,P,E,F,G,x,H,I,J,y,g,K,L,M,N,e){return function(){function b(){this.status=this.rotation=0;this._symbolBuckets=[];this.placementEngine=new L.PlacementEngine;this.fillVertexBuffer=new e.FillVertexBuffer(!1);this.fillDDVertexBuffer=
new e.FillVertexBuffer(!0);this.fillIndexBuffer=new g.TriangleIndexBuffer;this.outlineVertexBuffer=new e.OutlineVertexBuffer(!1);this.outlineDDVertexBuffer=new e.OutlineVertexBuffer(!0);this.outlineIndexBuffer=new g.TriangleIndexBuffer;this.lineVertexBuffer=new e.LineVertexBuffer(!1);this.lineDDVertexBuffer=new e.LineVertexBuffer(!0);this.lineIndexBuffer=new g.TriangleIndexBuffer;this.iconVertexBuffer=new e.SymbolVertexBuffer(!1);this.iconDDVertexBuffer=new e.SymbolVertexBuffer(!0);this.iconIndexBuffer=
new g.TriangleIndexBuffer;this.textVertexBuffer=new e.SymbolVertexBuffer(!1);this.textDDVertexBuffer=new e.SymbolVertexBuffer(!0);this.textIndexBuffer=new g.TriangleIndexBuffer;this.circleVertexBuffer=new e.CircleVertexBuffer;this.circleIndexBuffer=new g.TriangleIndexBuffer}b.prototype.initialize=function(b,e,a,f){void 0===f&&(f=0);this.tileKey=b;this.refKey=e;this._workerTileHandler=a;this.rotation=f;this.placementEngine.setAngle(y.C_DEG_TO_RAD*f)};b.prototype.release=function(){this.tileKey=this.refKey=
"";this.rotation=this.status=0;this.fillVertexBuffer.reset();this.fillDDVertexBuffer.reset();this.fillIndexBuffer.reset();this.outlineVertexBuffer.reset();this.outlineDDVertexBuffer.reset();this.outlineIndexBuffer.reset();this.lineVertexBuffer.reset();this.lineDDVertexBuffer.reset();this.lineIndexBuffer.reset();this.iconVertexBuffer.reset();this.iconDDVertexBuffer.reset();this.iconIndexBuffer.reset();this.textVertexBuffer.reset();this.textDDVertexBuffer.reset();this.textIndexBuffer.reset();this.circleVertexBuffer.reset();
this.circleIndexBuffer.reset();this.placementEngine.reset();this._symbolBuckets.length=0;this._workerTileHandler=null};b.prototype.setDataAndParse=function(b,e){var a=this,f=new E(function(b){a.status=6});this._parse(b,e).then(function(b){a.status=4;for(var e=new Uint32Array([1,a.fillVertexBuffer.sizeInBytes,2,a.fillDDVertexBuffer.sizeInBytes,3,a.fillIndexBuffer.sizeInBytes,4,a.outlineVertexBuffer.sizeInBytes,5,a.outlineDDVertexBuffer.sizeInBytes,6,a.outlineIndexBuffer.sizeInBytes,7,a.lineVertexBuffer.sizeInBytes,
8,a.lineDDVertexBuffer.sizeInBytes,9,a.lineIndexBuffer.sizeInBytes,10,a.iconVertexBuffer.sizeInBytes,11,a.iconDDVertexBuffer.sizeInBytes,12,a.iconIndexBuffer.sizeInBytes,13,a.textVertexBuffer.sizeInBytes,14,a.textDDVertexBuffer.sizeInBytes,15,a.textIndexBuffer.sizeInBytes,16,a.circleVertexBuffer.sizeInBytes,17,a.circleIndexBuffer.sizeInBytes]),d=[],l=b.length,k=0;k<l;k++){var c=b[k];if(c instanceof J)d.push(c.layerIndex),d.push(1),d.push(c.fillIndexStart),d.push(c.fillIndexCount),d.push(c.outlineIndexStart),
d.push(c.outlineIndexCount);else if(c instanceof K)d.push(c.layerIndex),d.push(2),d.push(c.lineIndexStart),d.push(c.lineIndexCount);else if(c instanceof M){d.push(c.layerIndex);d.push(3);d.push(c.sdfMarker?1:0);var m=c.markerPageMap;d.push(m.size);m.forEach(function(a,c){d.push(c);d.push(a[0]);d.push(a[1])});c=c.glyphsPageMap;d.push(c.size);c.forEach(function(a,c){d.push(c);d.push(a[0]);d.push(a[1])})}else c instanceof I?(d.push(c.layerIndex),d.push(4),d.push(c.circleIndexStart),d.push(c.circleIndexCount)):
c instanceof H&&(d.push(c.layerIndex),d.push(0))}b=new Uint32Array(d);var l=a.fillVertexBuffer.toBuffer(),k=a.fillDDVertexBuffer.toBuffer(),c=a.fillIndexBuffer.toBuffer(),m=a.outlineVertexBuffer.toBuffer(),n=a.outlineDDVertexBuffer.toBuffer(),g=a.outlineIndexBuffer.toBuffer(),A=a.lineVertexBuffer.toBuffer(),t=a.lineDDVertexBuffer.toBuffer(),B=a.lineIndexBuffer.toBuffer(),h=a.iconVertexBuffer.toBuffer(),p=a.iconDDVertexBuffer.toBuffer(),r=a.iconIndexBuffer.toBuffer(),z=a.textVertexBuffer.toBuffer(),
u=a.textDDVertexBuffer.toBuffer(),v=a.textIndexBuffer.toBuffer(),C=a.circleVertexBuffer.toBuffer(),D=a.circleIndexBuffer.toBuffer();f.resolve({result:{bufferDataInfo:e.buffer,bucketDataInfo:b.buffer,bufferData:[l,k,c,m,n,g,A,t,B,h,p,r,z,u,v,C,D]},transferList:[l,k,c,m,n,g,A,t,B,h,p,r,z,u,v,C,D,e.buffer,b.buffer]})});return f.promise};b.prototype.addBucket=function(b){this._symbolBuckets.push(b)};b.prototype.updateSymbols=function(b){var e=this,a=this._symbolBuckets;if(!a||0===a.length)return x.resolve();
this.rotation=b;var f=this.placementEngine;f.reset();f.setAngle(b/256*360*y.C_DEG_TO_RAD);var g=this.iconVertexBuffer;g.reset();var n=this.iconDDVertexBuffer;n.reset();var d=this.iconIndexBuffer;d.reset();var l=this.textVertexBuffer;l.reset();var k=this.textDDVertexBuffer;k.reset();var c=this.textIndexBuffer;c.reset();var m=[],w=a.length,q=0;return F(function(){if(6===e.status||0===e.status)return!0;if(q<w){var b=a[q++],t=b.layer;if(b=b.copy(t.hasDataDrivenIcon?n:g,d,t.hasDataDrivenText?k:l,c,f))m.push(b),
b.updateSymbols()}return q>=w}).then(function(){if(6===e.status||0===e.status||0===g.sizeInBytes&&0===n.sizeInBytes&&0===d.sizeInBytes&&0===l.sizeInBytes&&0===k.sizeInBytes&&0===c.sizeInBytes)return{result:null,transferList:null};var a=new Uint32Array([10,g.sizeInBytes,11,n.sizeInBytes,12,d.sizeInBytes,13,l.sizeInBytes,14,k.sizeInBytes,15,c.sizeInBytes]),b=[];w=m.length;for(var f=0;f<w;f++){var h=m[f];b.push(h.layerIndex);b.push(3);b.push(h.sdfMarker?1:0);var p=h.markerPageMap;b.push(p.size);p.forEach(function(a,
c){b.push(c);b.push(a[0]);b.push(a[1])});h=h.glyphsPageMap;b.push(h.size);h.forEach(function(a,c){b.push(c);b.push(a[0]);b.push(a[1])})}var f=new Uint32Array(b),h=g.toBuffer(),p=n.toBuffer(),r=d.toBuffer(),q=l.toBuffer(),u=k.toBuffer(),v=c.toBuffer();return{result:{bufferDataInfo:a.buffer,bucketDataInfo:f.buffer,bufferData:[h,p,r,q,u,v]},transferList:[h,p,r,q,u,v,a.buffer,f.buffer]}}).catch(function(){return null})};b.prototype.setObsolete=function(){this.status=6};b.prototype.getLayers=function(){return this._workerTileHandler.getLayers()};
b.prototype.getWorkerTileHandler=function(){return this._workerTileHandler};b.prototype._parse=function(b,e){if(!b||0===b.byteLength)return x.resolve([]);this.status=2;return(new N(b,this,e)).parse()};b.pool=new G(b);return b}()});