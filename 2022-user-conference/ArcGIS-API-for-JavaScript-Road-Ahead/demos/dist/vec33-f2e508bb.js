import { Z as s } from './_virtual_index-4b72c57d.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const e$1=s.getLogger("esri.views.3d.support.buffer.math");

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function t$1(t,r,f){if(t.count!==r.count)return void e$1.error("source and destination buffers need to have the same number of elements");const o=t.count,n=f[0],u=f[1],d=f[2],s=f[4],c=f[5],i=f[6],a=f[8],p=f[9],y=f[10],B=f[12],m=f[13],l=f[14],S=t.typedBuffer,h=t.typedBufferStride,b=r.typedBuffer,M=r.typedBufferStride;for(let e=0;e<o;e++){const t=e*h,r=e*M,f=b[r],o=b[r+1],v=b[r+2];S[t]=n*f+s*o+a*v+B,S[t+1]=u*f+c*o+p*v+m,S[t+2]=d*f+i*o+y*v+l;}}function r(t,r,f){if(t.count!==r.count)return void e$1.error("source and destination buffers need to have the same number of elements");const o=t.count,n=f[0],u=f[1],d=f[2],s=f[3],c=f[4],i=f[5],a=f[6],p=f[7],y=f[8],B=t.typedBuffer,m=t.typedBufferStride,l=r.typedBuffer,S=r.typedBufferStride;for(let e=0;e<o;e++){const t=e*m,r=e*S,f=l[r],o=l[r+1],h=l[r+2];B[t]=n*f+s*o+a*h,B[t+1]=u*f+c*o+p*h,B[t+2]=d*f+i*o+y*h;}}function f(e,t,r){const f=Math.min(e.count,t.count),o=e.typedBuffer,n=e.typedBufferStride,u=t.typedBuffer,d=t.typedBufferStride;for(let s=0;s<f;s++){const e=s*n,t=s*d;o[e]=r*u[t],o[e+1]=r*u[t+1],o[e+2]=r*u[t+2];}}function o(e,t){const r=Math.min(e.count,t.count),f=e.typedBuffer,o=e.typedBufferStride,n=t.typedBuffer,u=t.typedBufferStride;for(let d=0;d<r;d++){const e=d*o,t=d*u,r=n[t],s=n[t+1],c=n[t+2],i=r*r+s*s+c*c;if(i>0){const t=1/Math.sqrt(i);f[e]=t*r,f[e+1]=t*s,f[e+2]=t*c;}}}function n(e,t,r){const f=Math.min(e.count,t.count),o=e.typedBuffer,n=e.typedBufferStride,u=t.typedBuffer,d=t.typedBufferStride;for(let s=0;s<f;s++){const e=s*n,t=s*d;o[e]=u[t]>>r,o[e+1]=u[t+1]>>r,o[e+2]=u[t+2]>>r;}}Object.freeze(Object.defineProperty({__proto__:null,transformMat4:t$1,transformMat3:r,scale:f,normalize:o,shiftRight:n},Symbol.toStringTag,{value:"Module"}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function e(e,t,f){const d=e.typedBuffer,n=e.typedBufferStride,o=t.typedBuffer,r=t.typedBufferStride,c=f?f.count:t.count;let u=(f&&f.dstIndex?f.dstIndex:0)*n,l=(f&&f.srcIndex?f.srcIndex:0)*r;for(let s=0;s<c;++s)d[u]=o[l],d[u+1]=o[l+1],d[u+2]=o[l+2],u+=n,l+=r;}function t(e,t,f,d,n){const o=e.typedBuffer,r=e.typedBufferStride,c=n?.count??e.count;let u=(n?.dstIndex??0)*r;for(let l=0;l<c;++l)o[u]=t,o[u+1]=f,o[u+2]=d,u+=r;}Object.freeze(Object.defineProperty({__proto__:null,copy:e,fill:t},Symbol.toStringTag,{value:"Module"}));

export { e$1 as a, t as b, e, f, n, o, r, t$1 as t };
