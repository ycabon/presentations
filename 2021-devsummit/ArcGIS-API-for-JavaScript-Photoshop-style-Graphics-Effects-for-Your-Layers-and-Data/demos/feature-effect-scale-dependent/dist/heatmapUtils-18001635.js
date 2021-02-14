import { cU as e, G as e$1 } from './index.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const r=(()=>{if(!("document"in e))return ()=>null;const e$1=document.createElement("canvas"),r=e$1.getContext("2d");return e$1.height=512,e$1.width=1,t=>{r.clearRect(0,0,1,e$1.height);const n=r.createLinearGradient(0,0,0,e$1.height);for(const{ratio:e,color:r}of t.colorStops)n.addColorStop(Math.max(e,.001),`rgba(${r[0]}, ${r[1]}, ${r[2]}, ${r[3]})`);return r.fillStyle=n,r.fillRect(0,0,1,e$1.height),r.getImageData(0,0,1,e$1.height).data}})();function o(t,e,r,n){const{blurRadius:o,fieldOffset:a,field:f}=e,c=new Float64Array(r*n),l=i(o),s=Math.round(3*o);let h,m=Number.NEGATIVE_INFINITY;const d=u(f,a),g=new Set;for(const e of t){const t=e.getCursor();for(;t.next();){const e=t.getObjectId();if(g.has(e))continue;g.add(e);const o=t.readLegacyPointGeometry(),a=+d(t),f=o.x-s,i=o.y-s,u=Math.max(0,f),y=Math.max(0,i),b=Math.min(n,o.y+s),x=Math.min(r,o.x+s);for(let t=y;t<b;t++){const e=l[t-i];for(let n=u;n<x;n++){const o=l[n-f];h=c[t*r+n]+=e*o*a,h>m&&(m=h);}}}}return {matrix:c.buffer,max:m}}function a(t,e,r,n,o,a){t.canvas.width=t.canvas.height=e,t.clearRect(0,0,e,e);const i=t.getImageData(0,0,e,e);r&&n&&i.data.set(new Uint8ClampedArray(f(e,r,n,o,a))),t.putImageData(i,0,0);}function f(t,r,n,o,a){const f=new Uint32Array(t*t),i="buffer"in r?r:new Float64Array(r),c="buffer"in n?new Uint32Array(n.buffer):new Uint32Array(new Uint8Array(n).buffer),u=c.length/(a-o);for(let t=0;t<i.length;t++){const r=i[t],n=Math.floor((r-o)*u);f[t]=c[e$1(n,0,c.length-1)];}return f.buffer}function i(t){const e=Math.round(3*t),r=2*t*t,n=new Float64Array(2*e+1);for(let o=0;o<=n.length;o++)n[o]=Math.exp(-Math.pow(o-e,2)/r)/Math.sqrt(2*Math.PI)*(t/2);return n}function u(t,e){return null!=t?"string"==typeof e?e=>-1*+e.readAttribute(t):r=>+r.readAttribute(t)+e:t=>1}

export { a, o, r };
