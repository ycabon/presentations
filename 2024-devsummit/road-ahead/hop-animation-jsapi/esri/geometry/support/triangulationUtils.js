// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/earcut ./Axis ./coordsUtils ./DoubleArray ./Indices ./meshUtils/deduplicate ../../views/3d/layers/graphics/polygonUtils".split(" "),function(n,F,p,x,u,A,B,G){function H(a,c,d){if(1===a.length)return a[0];c=u.newDoubleArray(c);d=Array(d);let m=0,b=0,g=0;for(const l of a){for(a=0;a<l.position.length;a++)c[m++]=l.position[a];for(const h of l.faces)d[b++]=h+g;g=m/3}return{position:c,faces:A.compactIndices(d)}}function C(a,c,d,m){const b=a.length,g=Array(b),l=Array(b),h=Array(b);
let k=0,D=0,v=0;var q=0;for(var f=0;f<b;++f)q+=a[f].length;q=u.newDoubleArray(3*q);f=0;for(let y=b-1;0<=y;y--){var e=a[y],r=d===n.CounterClockwiseMode.CCW_IS_HOLE?E(e,c,m):!1;if(r&&1!==b)g[k++]=e;else{var t=e.length;for(let z=0;z<k;++z)t+=g[z].length;t={index:f,pathLengths:Array(k+1),count:t,holeIndices:Array(k)};t.pathLengths[0]=e.length;0<e.length&&(h[v++]={index:f,count:e.length});f=r?w(e,e.length-1,-1,q,f,e.length,c):w(e,0,1,q,f,e.length,c);for(e=0;e<k;++e)r=g[e],t.holeIndices[e]=f,t.pathLengths[e+
1]=r.length,0<r.length&&(h[v++]={index:f,count:r.length}),f=w(r,0,1,q,f,r.length,c);k=0;0<t.count&&(l[D++]=t)}}for(a=0;a<k;++a)d=g[a],0<d.length&&(h[v++]={index:f,count:d.length}),f=w(d,0,1,q,f,d.length,c);l.length=D;h.length=v;return{position:q,polygons:l,outlines:h}}function w(a,c,d,m,b,g,l){b*=3;for(let h=0;h<g;++h){const k=a[c];m[b++]=k[0];m[b++]=k[1];m[b++]=l?k[2]:0;c+=d}return b/3}function E(a,c,d){if(c){c=G.leastSignificantAxis(a,a.length-1,d);if(c===p.Axis.X)return!x.isClockwise(a,p.Axis.Y,
p.Axis.Z);if(c===p.Axis.Y)return!x.isClockwise(a,p.Axis.X,p.Axis.Z)}return!x.isClockwise(a,p.Axis.X,p.Axis.Y)}n.CounterClockwiseMode=void 0;(function(a){a[a.NONE=0]="NONE";a[a.CCW_IS_HOLE=1]="CCW_IS_HOLE"})(n.CounterClockwiseMode||(n.CounterClockwiseMode={}));n.isCounterClockwise=E;n.pathsToTriangulationInfo=C;n.triangulate=function(a){a=C(a.rings,a.hasZ,n.CounterClockwiseMode.CCW_IS_HOLE,a.spatialReference);const c=[];let d=0,m=0;for(var b of a.polygons){const l=b.index,h=u.doubleSubArray(a.position,
3*l,3*b.count);var g=b.holeIndices.map(k=>k-l);g=A.compactIndices(F.earcut(h,g,3));c.push({position:h,faces:g});d+=h.length;m+=g.length}b=H(c,d,m);a=Array.isArray(b.position)?B.deduplicate(b.position,3,{originalIndices:b.faces}):B.deduplicate(b.position.buffer,6,{originalIndices:b.faces});b.position=u.doubleArrayFrom(new Float64Array(a.buffer));b.faces=a.indices;return b};Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})});