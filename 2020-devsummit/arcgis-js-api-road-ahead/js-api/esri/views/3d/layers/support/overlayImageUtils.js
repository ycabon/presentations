// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../../../geometry/support/aaBoundingRect ../../webgl-engine/lib/GeometryData ../../webgl-engine/lib/GeometryUtil ../../webgl-engine/lib/Util".split(" "),function(D,k,g,B,t,l){function x(a,b){return t.createSquareGeometry([[a[0],a[1],b],[a[2],a[1],b],[a[2],a[3],b],[a[0],a[3],b]])}Object.defineProperty(k,"__esModule",{value:!0});k.computeImageExportSize=function(a,b,c){var d=g.width(a)/g.height(a),e={width:c,height:c};1.0001<d?e.height=c/d:.9999>d&&(e.width=c*d);e.width=Math.round(e.width/
(g.width(a)/g.width(b)));e.height=Math.round(e.height/(g.height(a)/g.height(b)));return e};k.createGeometryForExtent=x;k.createOuterImageGeometry=function(a,b,c){if(!g.intersects(a,b))return x(b,c);var d=[a[1]-b[1],Math.min(a[3],b[3])-Math.max(a[1],b[1]),b[3]-a[3],123456],e=[a[0]-b[0],Math.min(a[2],b[2])-Math.max(a[0],b[0]),b[2]-a[2],123456],k=b[2]-b[0],t=b[3]-b[1],p=0<e[0]&&0<e[2]?3:2;a=0<d[0]&&0<d[2]?3:2;var m=(a+1)*(p+1),f=new Float32Array(3*m),m=new Float32Array(2*m);a=new Uint32Array(6*(a*p-
1));for(var u=0,v=0,y=0,h=0,n=0,q=0;4>q;q++){var z=d[q];if(!(0>=z)){for(var w=0,r=0;4>r;r++){var A=e[r];0>=A||(f[v++]=b[0]+w,f[v++]=b[1]+u,f[v++]=c,m[y++]=w/k,m[y++]=u/t,3>r&&3>q&&(1!==r||1!==q)&&(a[n++]=h,a[n++]=h+1,a[n++]=h+p+1,a[n++]=h+1,a[n++]=h+p+2,a[n++]=h+p+1),h++,w+=A)}u+=z}}b={};b[l.VertexAttrConstants.POSITION]={size:3,data:f};b[l.VertexAttrConstants.NORMAL]={size:3,data:C};b[l.VertexAttrConstants.UV0]={size:2,data:m};c={};d=new Uint32Array(a.length);for(f=0;f<d.length;f++)d[f]=0;c[l.VertexAttrConstants.POSITION]=
a;c[l.VertexAttrConstants.NORMAL]=d;c[l.VertexAttrConstants.UV0]=a;return new B.GeometryData(b,c)};var C=new Float32Array([0,0,1])});