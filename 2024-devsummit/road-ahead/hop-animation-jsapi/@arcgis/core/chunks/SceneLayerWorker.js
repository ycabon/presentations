/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import e from"../geometry/SpatialReference.js";import{t}from"./DoubleArray.js";import r from"../geometry/support/MeshGeoreferencedVertexSpace.js";import n from"../geometry/support/MeshLocalVertexSpace.js";import{c as o,d as s}from"./vec32.js";import{g as i}from"./assets.js";import{a}from"./I3SNode.js";var f,c;function l(e){return i(`esri/libs/i3s/${e}`)}let u,m,d;function y(e){if(!d)return;const t=e.modifications,r=d._malloc(8*t.length),n=new Float64Array(d.HEAPU8.buffer,r,t.length);for(let e=0;e<t.length;++e)n[e]=t[e];d.setModifications(e.context,r,t.length,e.isGeodetic),d._free(r)}function p(e,t,r){const{context:n,localOrigin:o,globalTrafo:s,mbs:i,obbData:a,elevationOffset:c,geometryBuffer:l,geometryDescriptor:u,indexToVertexProjector:m,vertexToRenderProjector:d}=t,y=e._malloc(l.byteLength),p=e._malloc(33*Float64Array.BYTES_PER_ELEMENT),b=new Uint8Array(e.HEAPU8.buffer,y,l.byteLength);b.set(new Uint8Array(l));const h=new Float64Array(e.HEAPU8.buffer,p,33);w(h,o);let g=h.byteOffset+3*h.BYTES_PER_ELEMENT,E=new Float64Array(h.buffer,g);w(E,s),g+=16*h.BYTES_PER_ELEMENT,E=new Float64Array(h.buffer,g),w(E,i),g+=4*h.BYTES_PER_ELEMENT,a&&(E=new Float64Array(h.buffer,g),w(E,a));const I=u,A={isDraco:!1,isLegacy:!1,color:t.layouts.some((e=>e.some((e=>"color"===e.name)))),normal:t.needNormals&&t.layouts.some((e=>e.some((e=>"normalCompressed"===e.name)))),uv0:t.layouts.some((e=>e.some((e=>"uv0"===e.name)))),uvRegion:t.layouts.some((e=>e.some((e=>"uvRegion"===e.name)))),featureIndex:I.featureIndex},S=e.process(n,!!t.obbData,y,b.byteLength,I,A,p,c,m,d,t.normalReferenceFrame);if(e._free(p),e._free(y),S.error.length>0)throw new Error(`i3s.wasm: ${S.error}`);if(S.discarded)return null;const L=S.componentOffsets.length>0?S.componentOffsets.slice():null,_=S.featureIds.length>0?S.featureIds.slice():null,j=S.anchorIds.length>0?Array.from(S.anchorIds):null,M=S.anchors.length>0?Array.from(S.anchors):null,O=S.interleavedVertedData.slice().buffer,P=S.indicesType===f.Int16?new Uint16Array(S.indices.buffer,S.indices.byteOffset,S.indices.byteLength/2).slice():new Uint32Array(S.indices.buffer,S.indices.byteOffset,S.indices.byteLength/4).slice(),x=S.positions.slice(),R=S.positionIndicesType===f.Int16?new Uint16Array(S.positionIndices.buffer,S.positionIndices.byteOffset,S.positionIndices.byteLength/2).slice():new Uint32Array(S.positionIndices.buffer,S.positionIndices.byteOffset,S.positionIndices.byteLength/4).slice(),F={layout:t.layouts[0],interleavedVertexData:O,indices:P,hasColors:S.hasColors,hasModifications:S.hasModifications,positionData:{data:x,indices:R}};return _&&r.push(_.buffer),L&&r.push(L.buffer),r.push(O),r.push(P.buffer),r.push(x.buffer),r.push(R.buffer),{componentOffsets:L,featureIds:_,anchorIds:j,anchors:M,transformedGeometry:F,obb:S.obb}}function b(e){return 0===e?a.Unmodified:1===e?a.PotentiallyModified:2===e?a.Culled:a.Unknown}function h(e){if(!d)return;const{context:t,buffer:r}=e,n=d._malloc(r.byteLength),o=r.byteLength/Float64Array.BYTES_PER_ELEMENT,s=new Float64Array(d.HEAPU8.buffer,n,o),i=new Float64Array(r);s.set(i),d.filterOBBs(t,n,o),i.set(s),d._free(n)}function g(e){d&&0===d.destroy(e)&&(d=null)}function w(e,t){for(let r=0;r<t.length;++r)e[r]=t[r]}async function E(){d||await I()}function I(){return d?Promise.resolve(d):(m||(m=(u||(u=new Promise((e=>import("./i3s.js").then((e=>e.i)).then((({default:t})=>{const r=t({locateFile:l,onRuntimeInitialized:()=>e(r)});delete r.then})))).catch((e=>{throw e}))),u).then((e=>(d=e,m=null,d)))),m)}!function(e){e[e.None=0]="None",e[e.Int16=1]="Int16",e[e.Int32=2]="Int32"}(f||(f={})),function(e){e[e.Replace=0]="Replace",e[e.Outside=1]="Outside",e[e.Inside=2]="Inside",e[e.Finished=3]="Finished"}(c||(c={}));const A={transform:(e,t)=>d&&p(d,e,t),destroy:g},S=Object.freeze(Object.defineProperty({__proto__:null,destroyContext:function(e){g(e)},dracoDecompressPointCloudData:async function(e){d=await I();const t=[e.geometryBuffer],{geometryBuffer:r}=e,n=r.byteLength,o=d._malloc(n),s=new Uint8Array(d.HEAPU8.buffer,o,n);s.set(new Uint8Array(r));const i=d.dracoDecompressPointCloudData(o,s.byteLength);if(d._free(o),i.error.length>0)throw new Error(`i3s.wasm: ${i.error}`);const a=i.featureIds?.length>0?i.featureIds.slice():null,f=i.positions.slice();return a&&t.push(a.buffer),t.push(f.buffer),{result:{positions:f,featureIds:a},transferList:t}},filterObbsForModifications:async function(e){await I(),h(e);const t={buffer:e.buffer};return{result:t,transferList:[t.buffer]}},filterObbsForModificationsSync:h,initialize:E,interpretObbModificationResults:b,process:async function(e){d=await I();const t=[e.geometryBuffer];return{result:p(d,e,t),transferList:t}},project:async function(o){const{localMatrix:s,origin:i,positions:a,vertexSpace:f,localMode:c}=o,l=e.fromJSON(o.inSpatialReference),u=e.fromJSON(o.outSpatialReference);let m;if("georeferenced"===f.type&&null==f.origin){const[{projectBuffer:e},{initializeProjection:t}]=await Promise.all([import("./projectBuffer.js").then((e=>e.n)),import("../geometry/projection.js").then((e=>e.a))]);await t(l,u),m=new Float64Array(a.length),e(a,l,0,m,u,0,m.length/3)}else{const e="georeferenced"===f.type?r.fromJSON(f):n.fromJSON(f),{project:o}=await import("./georeference.js").then((e=>e.n));m=t(o({positions:a,transform:s?{localMatrix:s}:void 0,vertexSpace:e,inSpatialReference:l,outSpatialReference:u,localMode:c}))}const d=m.length,[y,p,b]=i;for(let e=0;e<d;e+=3)m[e]-=y,m[e+1]-=p,m[e+2]-=b;return{result:{projected:m,original:a},transferList:[m.buffer,a.buffer]}},setLegacySchema:async function(e){d=await I(),d.setLegacySchema(e.context,e.jsonSchema)},setModifications:async function(e){await I(),y(e)},setModificationsSync:y,test:A,transformNormals:async function({normalMatrix:e,normals:t}){const r=new Float32Array(t.length);return o(r,t,e),s(r,r),{result:{transformed:r,original:t},transferList:[r.buffer,t.buffer]}}},Symbol.toStringTag,{value:"Module"}));export{c as M,S,b as a,h as f,E as i,y as s};
