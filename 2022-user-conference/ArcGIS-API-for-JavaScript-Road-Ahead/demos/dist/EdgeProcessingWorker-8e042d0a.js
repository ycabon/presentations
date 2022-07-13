import { y, u as u$1, i, c as c$1, l as l$1, p as p$1, o as o$1, m, T, h, a, b, d as d$1, A, O as O$1, x, g as g$1, w, E, L, B, F as F$1, I, U, j, V, M, S, k, q, v, z as z$1, C, D, G, H as H$1 } from './BufferView-1591d5ec.js';
import './_virtual_index-fc1e0009.js';
import { A as A$1, f as f$1, u as u$2, h as h$1, d as d$2, a as a$1 } from './edgeProcessing-aade5eeb.js';
import './deduplicate-deb6faa8.js';
import './InterleavedLayout-255af609.js';
import './types-a3ffebbf.js';
import './VertexAttribute-f7d7a686.js';
import './glUtil-2dc26fa6.js';
import './enums-fb707d37.js';
import './VertexElementDescriptor-b07b83f4.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function z(e,t){return t.push(e.buffer),{buffer:e.buffer,layout:F(e.layout)}}function F(e){const t=new Array;return e.fields.forEach(((e,r)=>{const o={...e,constructor:J(e.constructor)};t.push([r,o]);})),{stride:e.stride,fields:t,fieldNames:e.fieldNames}}const H=[y,u$1,i,c$1,l$1,p$1,o$1,m,T,h,a,b,d$1,A,O$1,x,g$1,w,E,L,B,F$1,I,U,j,V,M,S,k,q,v,z$1,C,D,G,H$1];function J(e){return `${e.ElementType}_${e.ElementCount}`}const O=new Map;H.forEach((e=>O.set(J(e),e)));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class o{async extract(e){const t=c(e),n=f$1(t),s=[t.data.buffer];return {result:u(n,s),transferList:s}}async extractComponentsEdgeLocations(t){const r=c(t),i=u$2(r.data,r.skipDeduplicate,r.indices,r.indicesLength),a=h$1(i,p,g),o=[];return {result:z(a.regular.instancesData,o),transferList:o}}async extractEdgeLocations(t){const r=c(t),i=u$2(r.data,r.skipDeduplicate,r.indices,r.indicesLength),a=h$1(i,d,g),o=[];return {result:z(a.regular.instancesData,o),transferList:o}}}function c(e){return {data:A$1.createView(e.dataBuffer),indices:"Uint32Array"===e.indicesType?new Uint32Array(e.indicesBuffer):"Uint16Array"===e.indicesType?new Uint16Array(e.indicesBuffer):void 0,indicesLength:e.indicesLength,writerSettings:e.writerSettings,skipDeduplicate:e.skipDeduplicate}}function u(t,n){n.push(t.regular.lodInfo.lengths.buffer),n.push(t.silhouette.lodInfo.lengths.buffer);return {regular:{instancesData:z(t.regular.instancesData,n),lodInfo:{lengths:t.regular.lodInfo.lengths.buffer}},silhouette:{instancesData:z(t.silhouette.instancesData,n),lodInfo:{lengths:t.silhouette.lodInfo.lengths.buffer}},averageEdgeLength:t.averageEdgeLength}}class l{allocate(e){return d$2.createBuffer(e)}trim(e,t){return e.slice(0,t)}write(e,t,n){e.position0.setVec(t,n.position0),e.position1.setVec(t,n.position1);}}class f{allocate(e){return a$1.createBuffer(e)}trim(e,t){return e.slice(0,t)}write(e,t,n){e.position0.setVec(t,n.position0),e.position1.setVec(t,n.position1),e.componentIndex.set(t,n.componentIndex);}}const d=new l,p=new f,g={allocate:()=>null,write:()=>{},trim:()=>null};

export { o as default };
