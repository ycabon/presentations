import { e3 as a$1, sa as t, m as r } from './_virtual_index-1ea2035a.js';
import { o } from './I3SNode-0a9d5c3f.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
var n$1,e$1;!function(n){n[n.None=0]="None",n[n.Int16=1]="Int16",n[n.Int32=2]="Int32";}(n$1||(n$1={})),function(n){n[n.Replace=0]="Replace",n[n.Outside=1]="Outside",n[n.Inside=2]="Inside",n[n.Finished=3]="Finished";}(e$1||(e$1={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function e(){return n||(n=new Promise((t=>import('./i3s-7ed35c12.js').then((t=>t.i)).then((({default:e})=>{const n=e({locateFile:i$1,onRuntimeInitialized:()=>t(n)});delete n.then;})))).catch((t=>{throw t}))),n}function i$1(e){return a$1(`esri/libs/i3s/${e}`)}let n;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
async function s(e){await g();const t=[e.geometryBuffer];return {result:m(e,t),transferList:t}}async function f(e){await g();const r=[e.geometryBuffer],{geometryBuffer:n}=e,o=n.byteLength,s=y._malloc(o),f=new Uint8Array(y.HEAPU8.buffer,s,o);f.set(new Uint8Array(n));const i=y.dracoDecompressPointCloudData(s,f.byteLength);if(y._free(s),i.error.length>0)throw `i3s.wasm: ${i.error}`;const a=i.featureIds?.length>0?t(i.featureIds):null,u=t(i.positions);return a&&r.push(a.buffer),r.push(u.buffer),{result:{positions:u,featureIds:a},transferList:r}}async function i(e){await g(),E(e);const t={buffer:e.buffer};return {result:t,transferList:[t.buffer]}}async function a(e){await g(),b(e);}async function u(e){await g(),y.setLegacySchema(e.context,e.jsonSchema);}function l(e){h(e);}let c,y;function b(e){const t=e.modifications,r=y._malloc(8*t.length),n=new Float64Array(y.HEAPU8.buffer,r,t.length);for(let o=0;o<t.length;++o)n[o]=t[o];y.setModifications(e.context,r,t.length,e.isGeodetic),y._free(r);}function m(n,o){if(!y)return null;const{context:s,localOrigin:f,globalTrafo:i,mbs:a,obb:u,elevationOffset:l,geometryBuffer:c,geometryDescriptor:b,indexToVertexProjector:m,vertexToRenderProjector:d}=n,E=y._malloc(c.byteLength),h=33,g=y._malloc(h*Float64Array.BYTES_PER_ELEMENT),w=new Uint8Array(y.HEAPU8.buffer,E,c.byteLength);w.set(new Uint8Array(c));const A=new Float64Array(y.HEAPU8.buffer,g,h);p(A,f);let _=A.byteOffset+3*A.BYTES_PER_ELEMENT,L=new Float64Array(A.buffer,_);p(L,i),_+=16*A.BYTES_PER_ELEMENT,L=new Float64Array(A.buffer,_),p(L,a),_+=4*A.BYTES_PER_ELEMENT,r(u)&&(L=new Float64Array(A.buffer,_),p(L,u.center),_+=3*A.BYTES_PER_ELEMENT,L=new Float64Array(A.buffer,_),p(L,u.halfSize),_+=3*A.BYTES_PER_ELEMENT,L=new Float64Array(A.buffer,_),p(L,u.quaternion));const I=b,T={isDraco:!1,isLegacy:!1,color:n.layouts.some((e=>e.some((e=>"color"===e.name)))),normal:n.needNormals&&n.layouts.some((e=>e.some((e=>"normalCompressed"===e.name)))),uv0:n.layouts.some((e=>e.some((e=>"uv0"===e.name)))),uvRegion:n.layouts.some((e=>e.some((e=>"uvRegion"===e.name)))),featureIndex:I.featureIndex},P=y.process(s,!!n.obb,E,w.byteLength,I,T,g,l,m,d,n.normalReferenceFrame);if(y._free(g),y._free(E),P.error.length>0)throw `i3s.wasm: ${P.error}`;if(P.discarded)return null;const U=P.componentOffsets.length>0?t(P.componentOffsets):null,B=P.featureIds.length>0?t(P.featureIds):null,F=t(P.interleavedVertedData).buffer,M=P.indicesType===n$1.Int16?t(new Uint16Array(P.indices.buffer,P.indices.byteOffset,P.indices.byteLength/2)):t(new Uint32Array(P.indices.buffer,P.indices.byteOffset,P.indices.byteLength/4)),S=t(P.positions),x=P.positionIndicesType===n$1.Int16?t(new Uint16Array(P.positionIndices.buffer,P.positionIndices.byteOffset,P.positionIndices.byteLength/2)):t(new Uint32Array(P.positionIndices.buffer,P.positionIndices.byteOffset,P.positionIndices.byteLength/4)),O={layout:n.layouts[0],interleavedVertexData:F,indices:M,hasColors:P.hasColors,hasModifications:P.hasModifications,positionData:{data:S,indices:x}};return B&&o.push(B.buffer),U&&o.push(U.buffer),o.push(F),o.push(M.buffer),o.push(S.buffer),o.push(x.buffer),{componentOffsets:U,featureIds:B,transformedGeometry:O,obb:P.obb}}function d(e){return 0===e?o.Unmodified:1===e?o.PotentiallyModified:2===e?o.Culled:o.Unknown}function E(e){const{context:t,buffer:r}=e,n=y._malloc(r.byteLength),o=r.byteLength/Float64Array.BYTES_PER_ELEMENT,s=new Float64Array(y.HEAPU8.buffer,n,o),f=new Float64Array(r);s.set(f),y.filterOBBs(t,n,o),f.set(s),y._free(n);}function h(e){y&&y.destroy(e);}function p(e,t){for(let r=0;r<t.length;++r)e[r]=t[r];}function g(){return y?Promise.resolve():(c||(c=e().then((e=>{y=e,c=null;}))),c)}const w={transform:m,destroy:h};

var SceneLayerWorker = /*#__PURE__*/Object.freeze({
	__proto__: null,
	destroyContext: l,
	dracoDecompressPointCloudData: f,
	filterObbsForModifications: i,
	filterObbsForModificationsSync: E,
	initialize: g,
	interpretObbModificationResults: d,
	process: s,
	setLegacySchema: u,
	setModifications: a,
	setModificationsSync: b,
	test: w
});

export { E, SceneLayerWorker as S, b, d, e$1 as e, g };
