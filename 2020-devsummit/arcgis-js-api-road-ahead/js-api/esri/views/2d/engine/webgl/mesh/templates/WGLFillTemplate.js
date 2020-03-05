// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../../core/tsSupport/extendsHelper ../../../../../../core/Logger ../../../../../../core/mathUtils ../../../../../../core/screenUtils ../../../../../../core/libs/earcut/earcut ../../color ../../definitions ../../enums ../../number ../../TileClipper ../../WGLDisplayRecord ../../materialKey/MaterialKey ../Tesselator ./WGLMeshTemplate".split(" "),function(D,G,L,M,x,u,H,I,E,N,n,O,J,F,P,Q){Object.defineProperty(G,"__esModule",{value:!0});var R=M.getLogger("esri.views.2d.engine.webgl.mesh.templates.WGLFillTemplate"),
y=[],A=[];D=function(D){function l(h,a,d,c,f,b,e,g,m){var k=D.call(this)||this;k.fillColor=d;k.tl=c;k.br=f;k.aux1=b;k.aux2=e;k.aux3=g;k.isBFS=m;k.geometryType=N.WGLGeometryType.FILL;k.forceLibtess=!1;h=F.FillMaterialKey.load(F.createMaterialKey(k.geometryType,h,!1));a&&(h.sdf=a.sdf,h.pattern=!0,h.textureBinding=a.textureBinding);k._materialKey=h.data;k._tesselator=new P.default;k._tileClipper=new O.TileClipper(0,0,0,1,8);k._tileClipper.setExtent(E.TILE_SIZE);return k}L(l,D);l.fromCIMFill=function(h,
a,d,c){void 0===c&&(c=!1);var f=a.color,f=f&&I.premultiplyAlphaRGBA(f)||0,b=n.i8888to32(0,0,0,a.colorLocked?1:0);if(!d)return new l(h,null,f,0,0,0,0,b,c);var b=d.rect,e=d.width,g=d.height,m=b.x+1,k=b.y+1,r=m+e,K=k+g,b=x.nextHighestPowerOfTwo(u.pt2px(a.height||0));255<b?b=255:0>=b&&(b=x.nextHighestPowerOfTwo(K-k));e=x.nextHighestPowerOfTwo(u.pt2px(a.height/g*e||0));255<e?e=255:0>=e&&(e=x.nextHighestPowerOfTwo(r-m));g=u.pt2px(a.offsetX||0)+128;255<g&&(g=255);var p=u.pt2px(-a.offsetY||0)+128;255<p&&
(p=255);a=a.scaleX||1;m=n.i1616to32(m,k);r=n.i1616to32(r,K);b=n.i8888to32(e,b,g,p);a=n.i1616to32(128*a,128);return new l(h,d,f,m,r,b,a,0,c)};l.fromSimpleFill=function(h,a,d,c){void 0===c&&(c=!1);var f=a.color;a=f&&"none"!==a.style&&I.premultiplyAlphaRGBA(f)||0;f=n.i8888to32(0,0,0,c?255:0);if(!d)return new l(h,null,a,0,0,0,0,f,c);var b=d.rect,e=b.x+1,g=b.y+1,m=b.x+1+d.width,k=b.y+1+d.height,b=n.i1616to32(e,g),r=n.i1616to32(m,k),e=n.i8888to32(x.nextHighestPowerOfTwo(m-e),x.nextHighestPowerOfTwo(k-g),
0,0),g=n.i1616to32(128,128);return new l(h,d,a,b,r,e,g,f,c)};l.fromPictureFill=function(h,a,d,c){void 0===c&&(c=!1);var f=E.PICTURE_FILL_COLOR,b=d.rect,e=b.x+1,g=b.y+1,b=e+d.width,m=g+d.height,e=n.i1616to32(e,g),b=n.i1616to32(b,m),m=x.nextHighestPowerOfTwo(u.pt2px(a.width));255<m&&(m=255);g=x.nextHighestPowerOfTwo(u.pt2px(a.height));255<g&&(g=255);var k=u.pt2px(a.xoffset)+128;255<k&&(k=255);var r=u.pt2px(-a.yoffset)+128;255<r&&(r=255);m=n.i8888to32(m,g,k,r);a=n.i1616to32(128*a.xscale,128*a.yscale);
g=n.i8888to32(0,0,0,c?255:0);return new l(h,d,f,e,b,m,a,g,c)};l.prototype.writeMesh=function(h,a,d,c,f){y.length=0;if("esriGeometryPolygon"!==d)"esriGeometryPolyline"!==d&&R.error("Unable to handle geometryType: "+d);else{var b=f.geometry;d=F.FillMaterialKey.load(this._materialKey);var e=(f=this._isClippingRequired(b))?this._clip(b,!1):b.rings;if(d.dotDensity){for(var b=b.rings,g=0,m=0;m<b.length;m++)for(var k=b[m],r=k[0],l=r[0],r=r[1],p=1;p<k.length;p++)var n=k[p],q=l+n[0],n=r+n[1],g=g-(q-l)*(n+
r)/2,l=q,r=n;b=g}else b=0;this.forceLibtess?this._writeMeshLibtess(h,a,c,e,f,d,b):this._writeMeshEarcut(h,a,c,e,f,d,b)||this._writeMeshLibtess(h,a,c,e,f,d,b)}};l.prototype._isClippingRequired=function(h){var a=E.TILE_SIZE+8,d=0;for(h=h.rings;d<h.length;d++){var c=h[d],f=c.length;if(!(3>f)){var b=c[0][0],e=c[0][1];if(-8>b||b>a||-8>e||e>a)return!0;for(var g=1;g<f;++g)if(b+=c[g][0],e+=c[g][1],-8>b||b>a||-8>e||e>a)return!0}}return!1};l.prototype._clip=function(h,a){var d;this._tileClipper.reset(3);for(var c=
0,f=h.rings;c<f.length;c++){var b=f[c],e=b.length;if(!(3>e)){h=b[0][0];d=b[0][1];this._tileClipper.moveTo(h,d);for(var g=1;g<e;++g)h+=b[g][0],d+=b[g][1],this._tileClipper.lineTo(h,d);this._tileClipper.close()}}return this._tileClipper.result(a)};l.prototype._writeMeshLibtess=function(h,a,d,c,f,b,e){if(c&&c.length){var g=[],m=a.indexVector;a=a.getVector("geometry");var k=new J(d,this.geometryType,this._materialKey),l=a.vertexCount;k.vertexFrom=l;k.indexFrom=m.length;this._tesselator.beginPolygon(y,
g);for(var n=0;n<c.length;n++){var p=c[n];if(!(3>p.length)){this._tesselator.beginContour();var z=void 0,q=void 0;f?(z=p[0].x,q=p[0].y):(z=p[0][0],q=p[0][1]);var t=[z,q,0];this._tesselator.addVertex(t,t);for(t=1;t<p.length-1;t++){var v=void 0,w=void 0;f?(z=p[t].x,q=p[t].y):(v=p[t][0],w=p[t][1],z+=v,q+=w);v=[z,q,0];this._tesselator.addVertex(v,v)}this._tesselator.endContour()}}this._tesselator.endPolygon();this._writeVerticesLibTess(k,a,d,y,b,e);this._writeIndicesLibTess(k,m,l,g);0<k.indexCount&&h.push(k)}};
l.prototype._writeMeshEarcut=function(h,a,d,c,f,b,e){if(c&&c.length){var g=a.indexVector;a=a.getVector("geometry");var m=new J(d,this.geometryType,this._materialKey),k=g.length,n=a.data.length;m.vertexFrom=a.vertexCount;m.indexFrom=g.length;for(var l=0,p=0,z=0;z<c.length;z++){var q=c[z],t=p,v=void 0,w=void 0;f?(v=q[0].x,w=q[0].y):(v=q[0][0],w=q[0][1]);y[p++]=v;y[p++]=w;for(var x=0,u=1;u<q.length;++u){var B=void 0,C=void 0;f?(B=v,C=w,v=q[u].x,w=q[u].y,B=v-B,C=w-C):(B=q[u][0],C=q[u][1],v+=B,w+=C);x-=
B*(w+w-C);y[p++]=v;y[p++]=w}if(0<x){if(0<t-l){if(!this._write(m,g,a,d,y,A,l,t,b,e))return g.seek(k),a.data.seek(n),y.length=A.length=0,!1;l=t}A.length=0}else 0>x?0<t-l?A.push(.5*(t-l)):p=t:p=t}if(0<p-l&&!this._write(m,g,a,d,y,A,l,p,b,e))return g.seek(k),a.data.seek(n),y.length=A.length=0,!1;y.length=A.length=0;h.push(m);return!0}};l.prototype._write=function(h,a,d,c,f,b,e,g,l,k){f=f.slice(e,g);e=H(f,b,2);if(H.deviation(f,b,2,e))return!1;if(e.length)return b=d.vertexCount,this._writeVertices(h,d,c,
f,l,k),this._writeIndices(h,a,b,e),!0};l.prototype._writeVertices=function(h,a,d,c,f,b){for(var e=0;e<c.length;e+=2){var g=n.i1616to32(c[e],c[e+1]);a.data.push(g);a.data.push(d);f.dotDensity?a.data.writeF32(1/b):(a.data.push(this.fillColor),a.data.push(this.tl),a.data.push(this.br),a.data.push(this.aux1),a.data.push(this.aux2),a.data.push(this.aux3));h.vertexCount++}};l.prototype._writeIndices=function(h,a,d,c){for(var f=0;f<c.length;f+=3)a.push(d+c[f]),a.push(d+c[f+1]),a.push(d+c[f+2]),h.indexCount+=
3};l.prototype._writeVerticesLibTess=function(h,a,d,c,f,b){for(var e=0;e<c.length;e+=2){var g=n.i1616to32(c[e],c[e+1]);a.data.push(g);a.data.push(d);f.dotDensity?a.data.writeF32(1/b):(a.data.push(this.fillColor),a.data.push(this.tl),a.data.push(this.br),a.data.push(this.aux1),a.data.push(this.aux2),a.data.push(this.aux3));h.vertexCount++}};l.prototype._writeIndicesLibTess=function(h,a,d,c){for(var f=0;f<c.length;f++)a.push(d+c[f]),h.indexCount++};return l}(Q.default);G.default=D});