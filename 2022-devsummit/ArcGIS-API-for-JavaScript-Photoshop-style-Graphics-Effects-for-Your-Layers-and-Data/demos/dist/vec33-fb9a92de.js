import { e as s } from './_virtual_index-3ad07138.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e$3(){return [1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function n$1(e){return [e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15]]}function r$1(e,n,r,t,a,o,c,u,s,f,i,l,_,I,b,m){return [e,n,r,t,a,o,c,u,s,f,i,l,_,I,b,m]}function t$1(e,n){return new Float64Array(e,n,16)}const a=e$3();Object.freeze({__proto__:null,create:e$3,clone:n$1,fromValues:r$1,createView:t$1,IDENTITY:a});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const e$2=s.getLogger("esri.views.3d.support.buffer.math");

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e$1(e,f,r){if(e.count!==f.count)return void e$2.error("source and destination buffers need to have the same number of elements");const o=e.count,n=r[0],u=r[1],d=r[2],s=r[4],c=r[5],i=r[6],a=r[8],p=r[9],y=r[10],B=r[12],m=r[13],h=r[14],l=e.typedBuffer,S=e.typedBufferStride,b=f.typedBuffer,M=f.typedBufferStride;for(let t=0;t<o;t++){const e=t*S,f=t*M,r=b[f],o=b[f+1],v=b[f+2];l[e]=n*r+s*o+a*v+B,l[e+1]=u*r+c*o+p*v+m,l[e+2]=d*r+i*o+y*v+h;}}function f(e,f,r){if(e.count!==f.count)return void e$2.error("source and destination buffers need to have the same number of elements");const o=e.count,n=r[0],u=r[1],d=r[2],s=r[3],c=r[4],i=r[5],a=r[6],p=r[7],y=r[8],B=e.typedBuffer,m=e.typedBufferStride,h=f.typedBuffer,l=f.typedBufferStride;for(let t=0;t<o;t++){const e=t*m,f=t*l,r=h[f],o=h[f+1],S=h[f+2];B[e]=n*r+s*o+a*S,B[e+1]=u*r+c*o+p*S,B[e+2]=d*r+i*o+y*S;}}function r(t,e,f){const r=Math.min(t.count,e.count),o=t.typedBuffer,n=t.typedBufferStride,u=e.typedBuffer,d=e.typedBufferStride;for(let s=0;s<r;s++){const t=s*n,e=s*d;o[t]=f*u[e],o[t+1]=f*u[e+1],o[t+2]=f*u[e+2];}}function o(t,e){const f=Math.min(t.count,e.count),r=t.typedBuffer,o=t.typedBufferStride,n=e.typedBuffer,u=e.typedBufferStride;for(let d=0;d<f;d++){const t=d*o,e=d*u,f=n[e],s=n[e+1],c=n[e+2],i=Math.sqrt(f*f+s*s+c*c);if(i>0){const e=1/i;r[t]=e*f,r[t+1]=e*s,r[t+2]=e*c;}}}function n(t,e,f){const r=Math.min(t.count,e.count),o=t.typedBuffer,n=t.typedBufferStride,u=e.typedBuffer,d=e.typedBufferStride;for(let s=0;s<r;s++){const t=s*n,e=s*d;o[t]=u[e]>>f,o[t+1]=u[e+1]>>f,o[t+2]=u[e+2]>>f;}}Object.freeze({__proto__:null,transformMat4:e$1,transformMat3:f,scale:r,normalize:o,shiftRight:n});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e(e,t,n){const d=e.typedBuffer,f=e.typedBufferStride,o=t.typedBuffer,r=t.typedBufferStride,u=n?n.count:t.count;let l=(n&&n.dstIndex?n.dstIndex:0)*f,c=(n&&n.srcIndex?n.srcIndex:0)*r;for(let s=0;s<u;++s)d[l]=o[c],d[l+1]=o[c+1],d[l+2]=o[c+2],l+=f,c+=r;}function t(e,t,n,d,f){var o,r;const u=e.typedBuffer,l=e.typedBufferStride,c=null!=(o=null==f?void 0:f.count)?o:e.count;let s=(null!=(r=null==f?void 0:f.dstIndex)?r:0)*l;for(let p=0;p<c;++p)u[s]=t,u[s+1]=n,u[s+2]=d,s+=l;}Object.freeze({__proto__:null,copy:e,fill:t});

export { e$1 as a, a as b, e as c, e$2 as d, e$3 as e, f, t as g, n as h, n$1 as n, o, r, t$1 as t };
