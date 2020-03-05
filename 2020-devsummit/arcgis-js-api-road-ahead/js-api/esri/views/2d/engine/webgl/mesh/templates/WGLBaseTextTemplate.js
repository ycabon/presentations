// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../../core/tsSupport/extendsHelper ../../../../../../core/Error ../../../../../../core/Logger ../../../../../../core/libs/gl-matrix-2/mat2d ../../../../../../core/libs/gl-matrix-2/mat2df32 ../../../../../../core/libs/gl-matrix-2/vec2 ../../../../../../core/libs/gl-matrix-2/vec2f32 ../../definitions ../../enums ../../number ../../TextShapingNew ../../WGLDisplayRecord ../../collisions/BoundingBox ../../materialKey/MaterialKey ./ComputedGlyph".split(" "),function(M,
q,B,C,D,u,E,p,v,w,F,x,y,A,G,H,I){Object.defineProperty(q,"__esModule",{value:!0});var J=D.getLogger("esri.views.2d.engine.webgl.WGLTextTemplate"),K=Math.PI/180,L=E.mat2df32.create(),z=v.vec2f32.create();q.default=function(q){return function(q){function l(){for(var b=[],a=0;a<arguments.length;a++)b[a]=arguments[a];b=q.apply(this,b)||this;b.geometryType=F.WGLGeometryType.TEXT;return b}B(l,q);l.prototype.bindTextInfo=function(b,a,c){b=this._computeShaping(b,this._justify).getShaping(a,c);isNaN(this._decorationTop)||
y.TextShaping.addDecoration(b,this._decorationTop);this._shapedGlyphs=b;this._shapedBox=y.TextShaping.getBox(b)};l.prototype.writeMesh=function(b,a,c,d,f){var e=this._computedGlyphs;if(e){var g=x.i8888to32(0,0,this._referenceSize,this._bitset);switch(c){case "esriGeometryPoint":f=f.geometry;c=f.x;f=f.y;for(var k=0;k<e.length;k++){var h=e[k];h.anchorX=c;h.anchorY=f}this._writeVertices(b,a,d,e,g,0,0);break;case "esriGeometryPolygon":if(f.centroid){f=f.centroid;c=f.x;f=f.y;for(k=0;k<e.length;k++)h=e[k],
h.anchorX=c,h.anchorY=f;this._writeVertices(b,a,d,e,g,0,0);break}case "esriGeometryMultipoint":for(var k=f.geometry.points,r=f=c=0;r<k.length;r++){h=k[r];c+=h[0];f+=h[1];for(var n=0,m=e;n<m.length;n++)h=m[n],h.anchorX=c,h.anchorY=f;this._writeVertices(b,a,d,e,g,0,0)}break;default:b=void 0,void 0===b&&(b="mapview-processing"),J.error(C(b,"Unable to handle geometryType: "+c))}}};l.prototype._computeGlyphs=function(b,a){if(b&&0!==b.length){var c=Array(b.length);a=this._computeGlyphTransform(a);for(var d=
H.MaterialKeyBase.load(this._materialKey),f=0;f<b.length;f++){var e=b[f],g=e.x,k=e.y,h=e.codePoint,e=e.glyphMosaicItem;d.textureBinding=e.textureBinding;c[f]=I.default.from(g,k,0,0,-1,0,25,e,h,d.data,a,this._size,this._haloSize,!1,!0)}this._computedGlyphs=c}};l.prototype._createBounds=function(b,a){var c=b.width/2,d=b.height/2,f=a[4],e=a[5],g;if(this._angle){b=v.vec2f32.fromValues(-c,-d);g=v.vec2f32.fromValues(c,-d);var k=v.vec2f32.fromValues(-c,d),h=v.vec2f32.fromValues(c,d);p.vec2.transformMat2d(b,
b,a);p.vec2.transformMat2d(g,g,a);p.vec2.transformMat2d(k,k,a);p.vec2.transformMat2d(h,h,a);a=d=Infinity;var r=0,n=c=0;for(b=[b,g,k,h];n<b.length;n++)g=b[n],d=Math.min(g[0],d),r=Math.max(g[0],r),a=Math.min(g[1],a),c=Math.max(g[1],c);g=r-d;b=c-a}else g=b.width*this._scale,b=b.height*this._scale;return new G.default(f,e,g+w.COLLISION_BOX_PADDING,b+w.COLLISION_BOX_PADDING)};l.prototype._computeShaping=function(b,a){return new y.TextShaping([b],512,w.TEXT_LINE_HEIGHT,w.TEXT_SPACING,[0,.5*-w.TEXT_LINE_HEIGHT],
.5*(1-this._xAlignD),0,a)};l.prototype._computeGlyphTransform=function(b){var a=this._scale,c=this._angle*K,d=u.mat2d.identity(L);u.mat2d.rotate(d,d,c);u.mat2d.translate(d,d,p.vec2.set(z,this._xOffset,-this._yOffset));u.mat2d.scale(d,d,p.vec2.set(z,a,a));u.mat2d.translate(d,d,p.vec2.set(z,-4,-4-(this._baseline?25:b.y+(1-this._yAlignD)*b.height*.5)));return d};l.prototype._writeVertices=function(b,a,c,d,f,e,g){this._writeHalos(b,a,c,d,f,e,g);this._writeText(b,a,c,d,f,e,g)};l.prototype._writeHalos=
function(b,a,c,d,f,e,g){var k=a.indexVector,h=a.getVector("geometry").vertexCount,r=0;if(this._haloSize)for(var n=0;n<d.length;n++,r+=4){var m=d[n],l=x.i1616to32(2*m.anchorX+1,2*m.anchorY),q=null==e?Math.floor(10*m.minZoom):e,p=null==g?Math.floor(10*m.maxZoom):g,t=new A(c,this.geometryType,m.materialKey,q,p);t.vertexFrom=h+r;t.indexFrom=k.length;this._writeVertex(t,a,c,l,this._haloColor,m,f,q,p);this._writeIndices(t,k,h+r);b.push(t)}};l.prototype._writeText=function(b,a,c,d,f,e,g){for(var k=a.indexVector,
h=a.getVector("geometry").vertexCount,l=0,n=0;n<d.length;n++,l+=4){var m=d[n],q=x.i1616to32(2*m.anchorX,2*m.anchorY),p=null==e?Math.floor(10*m.minZoom):e,u=null==g?Math.floor(10*m.maxZoom):g,t=new A(c,this.geometryType,m.materialKey,p,u);t.vertexFrom=h+l;t.indexFrom=k.length;this._writeVertex(t,a,c,q,this._color,m,f,p,u);this._writeIndices(t,k,h+l);b.push(t)}};l.prototype._writeVertex=function(b,a,c,d,f,e,g,k,h){a=a.get("geometry");a.push(d);a.push(c);a.push(f);a.push(e.vertexOffsetUpperLeft);a.push(e.texFontSizeUpperLeft);
a.push(g);a.push(d);a.push(c);a.push(f);a.push(e.vertexOffsetUpperRight);a.push(e.texFontSizeUpperRight);a.push(g);a.push(d);a.push(c);a.push(f);a.push(e.vertexOffsetLowerLeft);a.push(e.texFontSizeLowerLeft);a.push(g);a.push(d);a.push(c);a.push(f);a.push(e.vertexOffsetLowerRight);a.push(e.texFontSizeLowerRight);a.push(g);b.vertexCount+=4};l.prototype._writeIndices=function(b,a,c){a.push(c+0);a.push(c+1);a.push(c+2);a.push(c+1);a.push(c+3);a.push(c+2);b.indexCount+=6};return l}(q)}});