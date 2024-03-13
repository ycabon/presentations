/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{e as t}from"./earcut.js";import{A as e}from"./Axis.js";import{i as n}from"./coordsUtils.js";import{d as o,a as r,n as s}from"./DoubleArray.js";import{g as i,c as a}from"./Indices.js";import{d as c}from"./deduplicate.js";import"../geometry.js";import{d as l}from"./mathUtils.js";import{g as u,x as f}from"./unitUtils.js";import{s as h}from"./vec3.js";import{h as p,g,B as m}from"./plane.js";import{A as d}from"./Attribute.js";import{C as b}from"./ContentObject.js";import{G as y}from"./Geometry.js";import{V as A}from"./VertexAttribute.js";import j from"../geometry/Extent.js";import w from"../geometry/Polygon.js";function I(t,n,o){const r=function(t,e,n,o){const r=(s=e,Array.isArray(s[0])?(t,n)=>e[t][n]:(t,n)=>e[3*t+n]);var s;const i=o?u(o)/f(o):1;return m(t,((t,e)=>h(t,r(e,0)*i,r(e,1)*i,r(e,2))),n)}(C,t,n,o)?g(C):[0,0,1];return Math.abs(r[2])>Math.cos(l(80))?e.Z:Math.abs(r[1])>Math.abs(r[0])?e.Y:e.X}const C=p();function O(n,o,r){const s=I(n,(o.length>0?o[0]:n.length/3)-1,r);if(s!==e.Z){n=n.slice();for(let t=0;t<n.length;t+=3)n[t+s]=n[t+2]}return t(n,o,3)}function D(t){const e=[[A.POSITION,new d(t.attributeData.position,t.indices,3,!0)]],n=i(t.indices.length);return null!=t.attributeData.colorFeature?e.push([A.COLORFEATUREATTRIBUTE,new d([t.attributeData.colorFeature],n,1,!0)]):t.attributeData.color&&e.push([A.COLOR,new d(t.attributeData.color,n,4,!0)]),t.attributeData.uvMapSpace&&e.push([A.UVMAPSPACE,new d(t.attributeData.uvMapSpace,t.indices,4,!0)]),t.attributeData.boundingRect&&e.push([A.BOUNDINGRECT,new d(t.attributeData.boundingRect,t.indices,9,!0)]),new y(t.material,e,t.mapPositions,b.Mesh,t.attributeData.objectAndLayerIdColor)}function E(t,e=null){const n=[[A.POSITION,new d(t.attributeData.position,t.indices,3,!0)],[A.UV0,new d(t.attributeData.uv0,t.indices,2,!0)]];return new y(t.material,n,t.mapPositions,b.Mesh,e)}function x(t){switch(t.type){case"extent":if(t instanceof j)return w.fromExtent(t);break;case"polygon":return t}return null}class L{constructor(t,e,n){this.renderData=t,this.layerUid=e,this.graphicUid=n,this.outGeometries=new Array}}function U(e){const n=M(e.rings,e.hasZ,P.CCW_IS_HOLE,e.spatialReference),i=new Array;let l=0,u=0;for(const e of n.polygons){const r=e.count,s=e.index,c=o(n.position,3*s,3*r),f=e.holeIndices.map((t=>t-s)),h=a(t(c,f,3));i.push({position:c,faces:h}),l+=c.length,u+=h.length}const f=function(t,e,n){if(1===t.length)return t[0];const o=s(e),r=new Array(n);let i=0,c=0,l=0;for(const e of t){for(let t=0;t<e.position.length;t++)o[i++]=e.position[t];for(const t of e.faces)r[c++]=t+l;l=i/3}return{position:o,faces:a(r)}}(i,l,u),h=Array.isArray(f.position)?c(f.position,3,{originalIndices:f.faces}):c(f.position.buffer,6,{originalIndices:f.faces});return f.position=r(new Float64Array(h.buffer)),f.faces=h.indices,f}function M(t,e,n,o){const r=t.length,i=new Array(r),a=new Array(r),c=new Array(r);let l=0,u=0,f=0,h=0;for(let e=0;e<r;++e)h+=t[e].length;const p=s(3*h);let g=0;for(let s=r-1;s>=0;s--){const h=t[s],m=n===P.CCW_IS_HOLE&&N(h,e,o);if(m&&1!==r)i[l++]=h;else{let t=h.length;for(let e=0;e<l;++e)t+=i[e].length;const n={index:g,pathLengths:new Array(l+1),count:t,holeIndices:new Array(l)};n.pathLengths[0]=h.length,h.length>0&&(c[f++]={index:g,count:h.length}),g=m?S(h,h.length-1,-1,p,g,h.length,e):S(h,0,1,p,g,h.length,e);for(let t=0;t<l;++t){const o=i[t];n.holeIndices[t]=g,n.pathLengths[t+1]=o.length,o.length>0&&(c[f++]={index:g,count:o.length}),g=S(o,0,1,p,g,o.length,e)}l=0,n.count>0&&(a[u++]=n)}}for(let t=0;t<l;++t){const n=i[t];n.length>0&&(c[f++]={index:g,count:n.length}),g=S(n,0,1,p,g,n.length,e)}return a.length=u,c.length=f,{position:p,polygons:a,outlines:c}}function S(t,e,n,o,r,s,i){r*=3;for(let a=0;a<s;++a){const s=t[e];o[r++]=s[0],o[r++]=s[1],o[r++]=i?s[2]:0,e+=n}return r/3}function N(t,o,r){if(o){const o=I(t,t.length-1,r);if(o===e.X)return!n(t,e.Y,e.Z);if(o===e.Y)return!n(t,e.X,e.Z)}return!n(t,e.X,e.Y)}var P;!function(t){t[t.NONE=0]="NONE",t[t.CCW_IS_HOLE=1]="CCW_IS_HOLE"}(P||(P={}));export{P as C,L as P,D as a,E as b,O as c,x as g,M as p,U as t};