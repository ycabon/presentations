// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports"],function(g){function m(a,b){l(a.typedBuffer,b.typedBuffer,a.typedBufferStride,b.typedBufferStride)}function l(a,b,h=3,k=h){const c=b.length/k;let d=0,e=0;for(let f=0;f<c;++f)a[d]=b[e],a[d+1]=b[e+1],a[d+2]=b[e+2],d+=h,e+=k}function n(a,b,h,k,c){const d=a.typedBuffer,e=a.typedBufferStride;a=c?.count??a.count;c=(c?.dstIndex??0)*e;for(let f=0;f<a;++f)d[c]=b,d[c+1]=h,d[c+2]=k,c+=e}const p=Object.freeze(Object.defineProperty({__proto__:null,copy:l,copyView:m,fill:n},Symbol.toStringTag,
{value:"Module"}));g.copy=l;g.copyView=m;g.fill=n;g.vec3=p});