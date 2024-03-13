/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{V as e}from"./VertexAttribute.js";import{l as t,n as f}from"./mat4.js";import{o as s,c as o,B as r,a as i,D as n,b as c}from"./BufferView.js";import{a as l}from"./Util.js";function a(e,t,f,s=1){const{data:o,indices:r}=e,i=t.typedBuffer,n=t.typedBufferStride,c=r.length;if(f*=n,1===s)for(let e=0;e<c;++e)i[f]=o[r[e]],f+=n;else for(let e=0;e<c;++e){const t=o[r[e]];for(let e=0;e<s;e++)i[f]=t,f+=n}}function d(e,t,f){const{data:s,indices:o}=e,r=t.typedBuffer,i=t.typedBufferStride,n=o.length;f*=i;for(let e=0;e<n;++e){const t=2*o[e];r[f]=s[t],r[f+1]=s[t+1],f+=i}}function u(e,t,f,s){const{data:o,indices:r}=e,i=t.typedBuffer,n=t.typedBufferStride,c=r.length;if(f*=n,null==s||1===s)for(let e=0;e<c;++e){const t=3*r[e];i[f]=o[t],i[f+1]=o[t+1],i[f+2]=o[t+2],f+=n}else for(let e=0;e<c;++e){const t=3*r[e];for(let e=0;e<s;++e)i[f]=o[t],i[f+1]=o[t+1],i[f+2]=o[t+2],f+=n}}function B(e,t,f,s=1){const{data:o,indices:r}=e,i=t.typedBuffer,n=t.typedBufferStride,c=r.length;if(f*=n,1===s)for(let e=0;e<c;++e){const t=4*r[e];i[f]=o[t],i[f+1]=o[t+1],i[f+2]=o[t+2],i[f+3]=o[t+3],f+=n}else for(let e=0;e<c;++e){const t=4*r[e];for(let e=0;e<s;++e)i[f]=o[t],i[f+1]=o[t+1],i[f+2]=o[t+2],i[f+3]=o[t+3],f+=n}}function y(e,t,f){const s=e.typedBuffer,o=e.typedBufferStride;t*=o;for(let e=0;e<f;++e)s[t]=0,s[t+1]=0,s[t+2]=0,s[t+3]=0,t+=o}function p(e,f,s,o,r=1){if(!f)return void u(e,s,o,r);const{data:i,indices:n}=e,c=s.typedBuffer,l=s.typedBufferStride,a=n.length,d=f[0],B=f[1],y=f[2],p=f[4],g=f[5],b=f[6],O=f[8],h=f[9],N=f[10],L=f[12],R=f[13],S=f[14];o*=l;let E=0,A=0,F=0;const I=t(f)?e=>{E=i[e]+L,A=i[e+1]+R,F=i[e+2]+S}:e=>{const t=i[e],f=i[e+1],s=i[e+2];E=d*t+p*f+O*s+L,A=B*t+g*f+h*s+R,F=y*t+b*f+N*s+S};if(1===r)for(let e=0;e<a;++e)I(3*n[e]),c[o]=E,c[o+1]=A,c[o+2]=F,o+=l;else for(let e=0;e<a;++e){I(3*n[e]);for(let e=0;e<r;++e)c[o]=E,c[o+1]=A,c[o+2]=F,o+=l}}function g(e,s,o,r,i=1){if(!s)return void u(e,o,r,i);const{data:n,indices:c}=e,l=s,a=o.typedBuffer,d=o.typedBufferStride,B=c.length,y=l[0],p=l[1],g=l[2],b=l[4],O=l[5],h=l[6],N=l[8],L=l[9],R=l[10],S=!f(l),E=1e-6,A=.999999;r*=d;let F=0,I=0,v=0;const w=t(l)?e=>{F=n[e],I=n[e+1],v=n[e+2]}:e=>{const t=n[e],f=n[e+1],s=n[e+2];F=y*t+b*f+N*s,I=p*t+O*f+L*s,v=g*t+h*f+R*s};if(1===i)if(S)for(let e=0;e<B;++e){w(3*c[e]);const t=F*F+I*I+v*v;if(t<A&&t>E){const e=1/Math.sqrt(t);a[r]=F*e,a[r+1]=I*e,a[r+2]=v*e}else a[r]=F,a[r+1]=I,a[r+2]=v;r+=d}else for(let e=0;e<B;++e)w(3*c[e]),a[r]=F,a[r+1]=I,a[r+2]=v,r+=d;else for(let e=0;e<B;++e){if(w(3*c[e]),S){const e=F*F+I*I+v*v;if(e<A&&e>E){const t=1/Math.sqrt(e);F*=t,I*=t,v*=t}}for(let e=0;e<i;++e)a[r]=F,a[r+1]=I,a[r+2]=v,r+=d}}function b(e,t,f,s,o=1){const{data:r,indices:i}=e,n=f.typedBuffer,c=f.typedBufferStride,l=i.length;if(s*=c,t!==r.length||4!==t)if(1!==o)if(4!==t)for(let e=0;e<l;++e){const t=3*i[e];for(let e=0;e<o;++e)n[s]=r[t],n[s+1]=r[t+1],n[s+2]=r[t+2],n[s+3]=255,s+=c}else for(let e=0;e<l;++e){const t=4*i[e];for(let e=0;e<o;++e)n[s]=r[t],n[s+1]=r[t+1],n[s+2]=r[t+2],n[s+3]=r[t+3],s+=c}else{if(4===t){for(let e=0;e<l;++e){const t=4*i[e];n[s]=r[t],n[s+1]=r[t+1],n[s+2]=r[t+2],n[s+3]=r[t+3],s+=c}return}for(let e=0;e<l;++e){const t=3*i[e];n[s]=r[t],n[s+1]=r[t+1],n[s+2]=r[t+2],n[s+3]=255,s+=c}}else{n[s]=r[0],n[s+1]=r[1],n[s+2]=r[2],n[s+3]=r[3];const e=new Uint32Array(f.typedBuffer.buffer,f.start),t=c/4,i=e[s/=4];s+=t;const a=l*o;for(let f=1;f<a;++f)e[s]=i,s+=t}}function O(e,t,f,s,o=1){const r=t.typedBuffer,i=t.typedBufferStride;if(s*=i,1===o)for(let t=0;t<f;++t)r[s]=e[0],r[s+1]=e[1],r[s+2]=e[2],r[s+3]=e[3],s+=i;else for(let t=0;t<f;++t)for(let t=0;t<o;++t)r[s]=e[0],r[s+1]=e[1],r[s+2]=e[2],r[s+3]=e[3],s+=i}function h(t,f,o,r,i,n){for(const c of f.fields.keys()){const f=t.attributes.get(c),l=f?.indices;if(f&&l)N(c,f,o,r,i,n);else if(c===e.OBJECTANDLAYERIDCOLOR&&null!=t.objectAndLayerIdColor){const f=t.attributes.get(e.POSITION)?.indices;if(f){const e=f.length,o=i.getField(c,s);O(t.objectAndLayerIdColor,o,e,n)}}}}function N(t,a,u,y,O,h){switch(t){case e.POSITION:{l(3===a.size);const e=O.getField(t,c);l(!!e,`No buffer view for ${t}`),e&&p(a,u,e,h);break}case e.NORMAL:{l(3===a.size);const e=O.getField(t,c);l(!!e,`No buffer view for ${t}`),e&&g(a,y,e,h);break}case e.NORMALCOMPRESSED:{l(2===a.size);const e=O.getField(t,n);l(!!e,`No buffer view for ${t}`),e&&d(a,e,h);break}case e.UV0:{l(2===a.size);const e=O.getField(t,i);l(!!e,`No buffer view for ${t}`),e&&d(a,e,h);break}case e.COLOR:case e.SYMBOLCOLOR:{const e=O.getField(t,s);l(!!e,`No buffer view for ${t}`),l(3===a.size||4===a.size),!e||3!==a.size&&4!==a.size||b(a,a.size,e,h);break}case e.COLORFEATUREATTRIBUTE:{const e=O.getField(t,r);l(!!e,`No buffer view for ${t}`),l(1===a.size),e&&1===a.size&&function(e,t,f){const{data:s,indices:o}=e,r=t.typedBuffer,i=t.typedBufferStride,n=o.length,c=s[0];f*=i;for(let e=0;e<n;++e)r[f]=c,f+=i}(a,e,h);break}case e.TANGENT:{l(4===a.size);const e=O.getField(t,o);l(!!e,`No buffer view for ${t}`),e&&function(e,t,s,o,r=1){if(!t)return void B(e,s,o,r);const{data:i,indices:n}=e,c=t,l=s.typedBuffer,a=s.typedBufferStride,d=n.length,u=c[0],y=c[1],p=c[2],g=c[4],b=c[5],O=c[6],h=c[8],N=c[9],L=c[10],R=!f(c),S=1e-6,E=.999999;if(o*=a,1===r)for(let e=0;e<d;++e){const t=4*n[e],f=i[t],s=i[t+1],r=i[t+2],c=i[t+3];let d=u*f+g*s+h*r,B=y*f+b*s+N*r,A=p*f+O*s+L*r;if(R){const e=d*d+B*B+A*A;if(e<E&&e>S){const t=1/Math.sqrt(e);d*=t,B*=t,A*=t}}l[o]=d,l[o+1]=B,l[o+2]=A,l[o+3]=c,o+=a}else for(let e=0;e<d;++e){const t=4*n[e],f=i[t],s=i[t+1],c=i[t+2],d=i[t+3];let B=u*f+g*s+h*c,A=y*f+b*s+N*c,F=p*f+O*s+L*c;if(R){const e=B*B+A*A+F*F;if(e<E&&e>S){const t=1/Math.sqrt(e);B*=t,A*=t,F*=t}}for(let e=0;e<r;++e)l[o]=B,l[o+1]=A,l[o+2]=F,l[o+3]=d,o+=a}}(a,y,e,h);break}case e.PROFILERIGHT:case e.PROFILEUP:case e.PROFILEVERTEXANDNORMAL:case e.FEATUREVALUE:{l(4===a.size);const e=O.getField(t,o);l(!!e,`No buffer view for ${t}`),e&&B(a,e,h)}}}class L{constructor(e){this.vertexBufferLayout=e}elementCount(t){return t.attributes.get(e.POSITION).indices.length}write(e,t,f,s,o){h(f,this.vertexBufferLayout,e,t,s,o)}}export{L as D,N as a,h as b,p as c,g as d,b as e,B as f,y as g,O as h,a as w};