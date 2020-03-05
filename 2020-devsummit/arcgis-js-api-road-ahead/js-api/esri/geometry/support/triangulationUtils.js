// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","../../core/libs/earcut/earcut","./coordsUtils","./meshUtils/deduplicate"],function(A,r,w,x,y){function z(b,f,p){if(1===b.length)return b[0];f=new Float64Array(f);p=new Uint32Array(p);for(var e=0,g=0,d=0,k=0;k<b.length;k++){for(var a=b[k],h=0;h<a.position.length;h++)f[e++]=a.position[h];for(h=0;h<a.faces.length;h++)p[g++]=a.faces[h]+d;d=e/3}return{position:f,faces:p}}function t(b,f,p){for(var e=b.length,g=Array(e),d=Array(e),k=Array(e),a=0,h=0,u=0,q=0,l=0;l<e;++l)q+=b[l].length;
for(var q=new Float64Array(3*q),n=0,r=e-1;0<=r;r--){var c=b[r],m=1===p?!x.isClockwise(c,!1,!1):!1;if(m&&1!==e)g[a++]=c;else{for(var t=c.length,l=0;l<a;++l)t+=g[l].length;l={index:n,pathLengths:Array(a+1),count:t,holeIndices:Array(a)};l.pathLengths[0]=c.length;0<c.length&&(k[u++]={index:n,count:c.length});n=m?v(c,c.length-1,-1,q,n,c.length,f):v(c,0,1,q,n,c.length,f);for(c=0;c<a;++c)m=g[c],l.holeIndices[c]=n,l.pathLengths[c+1]=m.length,0<m.length&&(k[u++]={index:n,count:m.length}),n=v(m,0,1,q,n,m.length,
f);a=0;0<l.count&&(d[h++]=l)}}for(c=0;c<a;++c)m=g[c],0<m.length&&(k[u++]={index:n,count:m.length}),n=v(m,0,1,q,n,m.length,f);h<e&&(d.length=h);u<e&&(k.length=u);return{position:q,polygons:d,outlines:k}}function v(b,f,p,e,g,d,k){g*=3;for(var a=0;a<d;++a){var h=b[f];e[g++]=h[0];e[g++]=h[1];e[g++]=k?h[2]:0;f+=p}return g/3}Object.defineProperty(r,"__esModule",{value:!0});r.triangulate=function(b){var f=t(b.rings,b.hasZ,1),p=[],e=0,g=0;b=function(a){var b=a.index,d=new Float64Array(f.position.buffer,3*
b*f.position.BYTES_PER_ELEMENT,3*a.count);a=a.holeIndices.map(function(a){return a-b});a=new Uint32Array(w(d,a,3));p.push({position:d,faces:a});e+=d.length;g+=a.length};for(var d=0,k=f.polygons;d<k.length;d++)b(k[d]);b=z(p,e,g);d=y.default(b.position.buffer,6,{originalIndices:b.faces});b.position=new Float64Array(d.buffer);b.faces=d.indices;return b};r.pathsToTriangulationInfo=t});