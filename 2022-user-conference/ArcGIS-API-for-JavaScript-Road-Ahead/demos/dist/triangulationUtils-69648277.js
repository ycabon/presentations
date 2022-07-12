import { x } from './earcut-da8a3e33.js';
import { c_ as f } from './_virtual_index-64b818a8.js';
import { n } from './deduplicate-365f71f3.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function o(t){const o=l(t.rings,t.hasZ,c.CCW_IS_HOLE),s=[];let i=0,h=0;for(const e of o.polygons){const t=e.count,r=e.index,l=new Float64Array(o.position.buffer,3*r*o.position.BYTES_PER_ELEMENT,3*t),c=e.holeIndices.map((n=>n-r)),f=new Uint32Array(x(l,c,3));s.push({position:l,faces:f}),i+=l.length,h+=f.length;}const f=r(s,i,h),a=n(f.position.buffer,6,{originalIndices:f.faces});return f.position=new Float64Array(a.buffer),f.faces=a.indices,f}function r(n,t,e){if(1===n.length)return n[0];const o=new Float64Array(t),r=new Uint32Array(e);let l=0,s=0,i=0;for(const c of n){for(let n=0;n<c.position.length;n++)o[l++]=c.position[n];for(let n=0;n<c.faces.length;n++)r[s++]=c.faces[n]+i;i=l/3;}return {position:o,faces:r}}function l(n,t,e){const o=n.length,r=new Array(o),l=new Array(o),h=new Array(o);let f=0,a=0,g=0,u=0;for(let s=0;s<o;++s)u+=n[s].length;const p=new Float64Array(3*u);let d=0;for(let y=o-1;y>=0;y--){const u=n[y],w=e===c.CCW_IS_HOLE&&i(u);if(w&&1!==o)r[f++]=u;else {let n=u.length;for(let t=0;t<f;++t)n+=r[t].length;const e={index:d,pathLengths:new Array(f+1),count:n,holeIndices:new Array(f)};e.pathLengths[0]=u.length,u.length>0&&(h[g++]={index:d,count:u.length}),d=w?s(u,u.length-1,-1,p,d,u.length,t):s(u,0,1,p,d,u.length,t);for(let o=0;o<f;++o){const n=r[o];e.holeIndices[o]=d,e.pathLengths[o+1]=n.length,n.length>0&&(h[g++]={index:d,count:n.length}),d=s(n,0,1,p,d,n.length,t);}f=0,e.count>0&&(l[a++]=e);}}for(let i=0;i<f;++i){const n=r[i];n.length>0&&(h[g++]={index:d,count:n.length}),d=s(n,0,1,p,d,n.length,t);}return a<o&&(l.length=a),g<o&&(h.length=g),{position:p,polygons:l,outlines:h}}function s(n,t,e,o,r,l,s){r*=3;for(let i=0;i<l;++i){const l=n[t];o[r++]=l[0],o[r++]=l[1],o[r++]=s?l[2]:0,t+=e;}return r/3}function i(n){return !f(n,!1,!1)}var c;!function(n){n[n.NONE=0]="NONE",n[n.CCW_IS_HOLE=1]="CCW_IS_HOLE";}(c||(c={}));

export { c, l, o };
