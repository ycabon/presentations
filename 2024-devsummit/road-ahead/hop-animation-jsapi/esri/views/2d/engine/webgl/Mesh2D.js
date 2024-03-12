// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../../../../core/Error ../../../../core/Logger ../../../../chunks/earcut ../../../../core/libs/gl-matrix-2/math/vec2 ../../../../core/libs/gl-matrix-2/factories/vec2f64 ../../../../layers/graphics/featureConversionUtils ../../../../layers/graphics/OptimizedGeometry ./number ../../../webgl/BufferObject ../../../webgl/enums".split(" "),function(r,y,z,A,t,u,v,f,w,k){const x=({coords:b,lengths:a},c)=>{const d=[];for(let e=0,m=0;e<a.length;m+=a[e],e+=1){const q=m;for(var h=[];e<a.length-1;e+=1,
m+=a[e]){var g=m+a[e];let p=0;for(let n=1;n<a[e+1];n++)p+=(b[2*(g+n)]-b[2*(g+n-1)])*(b[2*(g+n)+1]+b[2*(g+n-1)+1]);if(!(c?0<p:0>p))break;h.push(m+a[e]-q)}g=b.slice(2*q,2*(m+a[e]));h=z.earcut(g,h,2);for(const p of h)d.push(p+q)}return d};class l{constructor(b,a,c,d=!1){this._cache={};this.vertices=b;this.indices=a;this.primitiveType=c;this.isMapSpace=d}static fromRect({x:b,y:a,width:c,height:d}){return l.fromScreenExtent({xmin:b,ymin:a,xmax:b+c,ymax:a+d})}static fromPath(b){var a=u.convertFromNestedArray(new v,
b.path,!1,!1);b=a.coords;a=new Uint32Array(x(a,!0));const c=new Uint32Array(b.length/2);for(let d=0;d<c.length;d++)c[d]=f.i1616to32(Math.floor(b[2*d]),Math.floor(b[2*d+1]));return new l({geometry:c},a,k.PrimitiveType.TRIANGLES)}static fromGeometry(b,a){const c=a.geometry?.type;switch(c){case "polygon":return l.fromPolygon(b,a.geometry);case "extent":return l.fromMapExtent(b,a.geometry);default:return y.getLogger("esri.views.2d.engine.webgl.Mesh2D").error(new r("mapview-bad-type",`Unable to create a mesh from type ${c}`,
a)),l.fromRect({x:0,y:0,width:1,height:1})}}static fromPolygon(b,a){var c=u.convertFromPolygon(new v,a,!1,!1);a=c.coords;c=new Uint32Array(x(c,!1));const d=new Uint32Array(a.length/2),h=t.create(),g=t.create();for(let e=0;e<d.length;e++)A.set(h,a[2*e],a[2*e+1]),b.toScreen(g,h),d[e]=f.i1616to32(Math.floor(g[0]),Math.floor(g[1]));return new l({geometry:d},c,k.PrimitiveType.TRIANGLES,!0)}static fromScreenExtent({xmin:b,xmax:a,ymin:c,ymax:d}){b={geometry:new Uint32Array([f.i1616to32(b,c),f.i1616to32(a,
c),f.i1616to32(b,d),f.i1616to32(b,d),f.i1616to32(a,c),f.i1616to32(a,d)])};a=new Uint32Array([0,1,2,3,4,5]);return new l(b,a,k.PrimitiveType.TRIANGLES)}static fromMapExtent(b,a){const [c,d]=b.toScreen([0,0],[a.xmin,a.ymin]),[h,g]=b.toScreen([0,0],[a.xmax,a.ymax]);b={geometry:new Uint32Array([f.i1616to32(c,d),f.i1616to32(h,d),f.i1616to32(c,g),f.i1616to32(c,g),f.i1616to32(h,d),f.i1616to32(h,g)])};a=new Uint32Array([0,1,2,3,4,5]);return new l(b,a,k.PrimitiveType.TRIANGLES)}destroy(){null!=this._cache.indexBuffer&&
this._cache.indexBuffer.dispose();for(const b in this._cache.vertexBuffers)null!=this._cache.vertexBuffers[b]&&this._cache.vertexBuffers[b].dispose()}get elementType(){a:switch(this.indices.BYTES_PER_ELEMENT){case 1:var b=k.DataType.UNSIGNED_BYTE;break a;case 2:b=k.DataType.UNSIGNED_SHORT;break a;case 4:b=k.DataType.UNSIGNED_INT;break a;default:throw new r("Cannot get DataType of array");}return b}getIndexBuffer(b,a=k.Usage.STATIC_DRAW){this._cache.indexBuffer||(this._cache.indexBuffer=w.BufferObject.createIndex(b,
a,this.indices));return this._cache.indexBuffer}getVertexBuffers(b,a=k.Usage.STATIC_DRAW){this._cache.vertexBuffers||(this._cache.vertexBuffers=Object.keys(this.vertices).reduce((c,d)=>({...c,[d]:w.BufferObject.createVertex(b,a,this.vertices[d])}),{}));return this._cache.vertexBuffers}}return l});