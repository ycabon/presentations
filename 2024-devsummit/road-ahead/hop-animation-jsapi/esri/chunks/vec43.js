// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports"],function(g){function m(b,d){h(b.typedBuffer,d,b.typedBufferStride)}function h(b,d,k=4){const e=d.typedBuffer,l=d.typedBufferStride;d=d.count;let a=0,c=0;for(let f=0;f<d;++f)b[a]=e[c],b[a+1]=e[c+1],b[a+2]=e[c+2],b[a+3]=e[c+3],a+=k,c+=l}function n(b,d,k,e,l,a){const c=b.typedBuffer,f=b.typedBufferStride;b=a?.count??b.count;a=(a?.dstIndex??0)*f;for(let p=0;p<b;++p)c[a]=d,c[a+1]=k,c[a+2]=e,c[a+3]=l,a+=f}const q=Object.freeze(Object.defineProperty({__proto__:null,copy:h,copyView:m,fill:n},
Symbol.toStringTag,{value:"Module"}));g.copy=h;g.copyView=m;g.fill=n;g.vec4=q});