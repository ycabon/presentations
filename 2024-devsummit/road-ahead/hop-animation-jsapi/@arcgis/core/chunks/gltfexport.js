/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{isDataProtocol as e,dataComponents as t,downloadBlobAsFile as s}from"../core/urlUtils.js";import r from"../geometry/Point.js";import i from"../core/Error.js";import{L as o}from"./Logger.js";import{g as n}from"./ensureType.js";import{d as a}from"./mathUtils.js";import{Z as c}from"./unitUtils.js";import{s as l}from"./mat4.js";import{I as h,c as f}from"./mat4f64.js";import{e as u,f as p}from"./quat.js";import{I as m,a as d,c as g}from"./quatf64.js";import{s as _,c as w,e as T,n as E,o as y}from"./vec3.js";import{c as A,Z as b,a as x,O as R}from"./vec3f64.js";import M from"../geometry/support/MeshGeoreferencedVertexSpace.js";import S from"../geometry/support/MeshMaterialMetallicRoughness.js";import{k as I,l as j}from"./georeference.js";import{D as N,b as O}from"./enums.js";import{d as B}from"../core/lang.js";import{i as L}from"./resourceUtils3.js";import"../config.js";import"../core/JSONSupport.js";import"./tslib.es6.js";import"../core/Accessor.js";import"../core/Handles.js";import"./maybe.js";import"../core/accessorSupport/decorators/subclass.js";import"./metadata.js";import"./utils.js";import"./handleUtils.js";import"./tracking.js";import"../core/accessorSupport/decorators/property.js";import"./ObservableBase.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../core/accessorSupport/decorators/cast.js";import"./reader.js";import"./writer.js";import"../geometry/Geometry.js";import"../geometry/SpatialReference.js";import"./jsonMap.js";import"./assets.js";import"../request.js";import"../kernel.js";import"../geometry/support/webMercatorUtils.js";import"./common.js";import"./vec4.js";import"../core/Clonable.js";import"./enumeration.js";import"../Color.js";import"./colorUtils.js";import"../geometry/support/MeshMaterial.js";import"../geometry/support/MeshTexture.js";import"./imageUtils.js";import"./persistableUrlUtils.js";import"../geometry/support/MeshTextureTransform.js";import"./mat3f64.js";import"./mat3.js";import"../geometry/projection.js";import"./SimpleObservable.js";import"../geometry/Extent.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"../geometry/Polygon.js";import"./coordsUtils.js";import"./Axis.js";import"./extentUtils.js";import"./aaBoundingRect.js";import"../geometry/Polyline.js";import"./projectBuffer.js";import"./geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"./zscale.js";import"./spatialReferenceEllipsoidUtils.js";import"./computeTranslationToOriginAndRotation.js";import"./DoubleArray.js";import"../geometry/support/MeshLocalVertexSpace.js";import"../geometry/support/MeshTransform.js";import"./axisAngleDegrees.js";import"./vec4f64.js";import"./meshVertexSpaceUtils.js";import"./vec32.js";import"./BufferView.js";import"./vec2.js";import"./basicInterfaces.js";var C,V,U,z,F,D,P,G;!function(e){e[e.JSON=1313821514]="JSON",e[e.BIN=5130562]="BIN"}(C||(C={}));class v{constructor(e,t){if(!e)throw new Error("GLB requires a JSON gltf chunk");this._length=v.HEADER_SIZE,this._length+=v.CHUNK_HEADER_SIZE;const s=this._textToArrayBuffer(e);if(this._length+=this._alignTo(s.byteLength,4),t&&(this._length+=v.CHUNK_HEADER_SIZE,this._length+=t.byteLength,t.byteLength%4))throw new Error("Expected BIN chunk length to be divisible by 4 at this point");this.buffer=new ArrayBuffer(this._length),this._outView=new DataView(this.buffer),this._writeHeader();const r=this._writeChunk(s,12,C.JSON,32);t&&this._writeChunk(t,r,C.BIN)}_writeHeader(){this._outView.setUint32(0,v.MAGIC,!0),this._outView.setUint32(4,v.VERSION,!0),this._outView.setUint32(8,this._length,!0)}_writeChunk(e,t,s,r=0){const i=this._alignTo(e.byteLength,4);for(this._outView.setUint32(t,i,!0),this._outView.setUint32(t+=4,s,!0),this._writeArrayBuffer(this._outView.buffer,e,t+=4,0,e.byteLength),t+=e.byteLength;t%4;)r&&this._outView.setUint8(t,r),t++;return t}_writeArrayBuffer(e,t,s,r,i){new Uint8Array(e,s,i).set(new Uint8Array(t,r,i),0)}_textToArrayBuffer(e){return(new TextEncoder).encode(e).buffer}_alignTo(e,t){return t*Math.ceil(e/t)}}v.HEADER_SIZE=12,v.CHUNK_HEADER_SIZE=8,v.MAGIC=1179937895,v.VERSION=2,function(e){e[e.External=0]="External",e[e.DataURI=1]="DataURI",e[e.GLB=2]="GLB"}(V||(V={})),function(e){e[e.External=0]="External",e[e.DataURI=1]="DataURI",e[e.GLB=2]="GLB"}(U||(U={})),function(e){e[e.ARRAY_BUFFER=34962]="ARRAY_BUFFER",e[e.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER"}(z||(z={})),function(e){e.SCALAR="SCALAR",e.VEC2="VEC2",e.VEC3="VEC3",e.VEC4="VEC4",e.MAT2="MAT2",e.MAT3="MAT3",e.MAT4="MAT4"}(F||(F={})),function(e){e[e.POINTS=0]="POINTS",e[e.LINES=1]="LINES",e[e.LINE_LOOP=2]="LINE_LOOP",e[e.LINE_STRIP=3]="LINE_STRIP",e[e.TRIANGLES=4]="TRIANGLES",e[e.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",e[e.TRIANGLE_FAN=6]="TRIANGLE_FAN"}(D||(D={})),function(e){e.OPAQUE="OPAQUE",e.MASK="MASK",e.BLEND="BLEND"}(P||(P={})),function(e){e[e.NoColor=0]="NoColor",e[e.FaceColor=1]="FaceColor",e[e.VertexColor=2]="VertexColor"}(G||(G={}));class k{constructor(e,t,s,r,i){this._buffer=e,this._componentType=s,this._dataType=r,this._data=[],this._isFinalized=!1,this._accessorIndex=-1,this._accessorAttribute=null,this._accessorMin=null,this._accessorMax=null,t.bufferViews||(t.bufferViews=[]),this.index=t.bufferViews.length,this._bufferView={buffer:e.index,byteLength:-1,target:i};const o=this._getElementSize();o>=4&&i!==z.ELEMENT_ARRAY_BUFFER&&(this._bufferView.byteStride=o),t.bufferViews.push(this._bufferView),this._numComponentsForDataType=this._calculateNumComponentsForDataType()}push(e){const t=this._data.length;if(this._data.push(e),this._accessorIndex>=0){const s=t%this._numComponentsForDataType,r=this._accessorMin[s];this._accessorMin[s]="number"!=typeof r?e:Math.min(r,e);const i=this._accessorMax[s];this._accessorMax[s]="number"!=typeof i?e:Math.max(i,e)}}get dataSize(){return this._data.length*this._sizeComponentType()}get byteSize(){return e=this.dataSize,4*Math.ceil(e/4);var e}getByteOffset(){if(!this._isFinalized)throw new Error("Cannot get BufferView offset until it is finalized");return this._buffer.getByteOffset(this)}get byteOffset(){if(!this._isFinalized)throw new Error("Cannot get BufferView offset until it is finalized");return this._buffer.getByteOffset(this)}_createTypedArray(e,t){switch(this._componentType){case N.BYTE:return new Int8Array(e,t);case N.FLOAT:return new Float32Array(e,t);case N.SHORT:return new Int16Array(e,t);case N.UNSIGNED_BYTE:return new Uint8Array(e,t);case N.UNSIGNED_INT:return new Uint32Array(e,t);case N.UNSIGNED_SHORT:return new Uint16Array(e,t)}}writeOutToBuffer(e,t){this._createTypedArray(e,t).set(this._data)}writeAsync(e){if(this._asyncWritePromise)throw new Error("Can't write multiple bufferView values asynchronously");return this._asyncWritePromise=e.then((e=>{const t=new Uint8Array(e);for(let e=0;e<t.length;++e)this._data.push(t[e]);delete this._asyncWritePromise})),this._asyncWritePromise}startAccessor(e){if(this._accessorIndex>=0)throw new Error("Accessor was started without ending the previous one");this._accessorIndex=this._data.length,this._accessorAttribute=e;const t=this._numComponentsForDataType;this._accessorMin=new Array(t),this._accessorMax=new Array(t)}endAccessor(){if(this._accessorIndex<0)throw new Error("An accessor was not started, but was attempted to be ended");const e=this._getElementSize(),t=this._numComponentsForDataType,s=(this._data.length-this._accessorIndex)/t;if(s%1)throw new Error("An accessor was ended with missing component values");for(let e=0;e<this._accessorMin.length;++e)"number"!=typeof this._accessorMin[e]&&(this._accessorMin[e]=0),"number"!=typeof this._accessorMax[e]&&(this._accessorMax[e]=0);const r={byteOffset:e*(this._accessorIndex/t),componentType:this._componentType,count:s,type:this._dataType,min:this._accessorMin,max:this._accessorMax,name:this._accessorAttribute};switch(this._accessorAttribute){case"TEXCOORD_0":case"TEXCOORD_1":case"COLOR_0":case"WEIGHTS_0":switch(this._componentType){case N.UNSIGNED_BYTE:case N.UNSIGNED_SHORT:r.normalized=!0}}return this._accessorIndex=-1,this._accessorAttribute=null,this._accessorMin=null,this._accessorMax=null,r}get finalized(){return this._finalizedPromise?this._finalizedPromise:this._isFinalized?this._finalizedPromise=Promise.resolve():this._finalizedPromise=new Promise((e=>this._finalizedPromiseResolve=e))}async finalize(){const e=this._bufferView,t=this._buffer.getViewFinalizePromises(this);this._asyncWritePromise&&t.push(this._asyncWritePromise),await Promise.allSettled(t),this._isFinalized=!0,e.byteOffset=this.getByteOffset(),e.byteLength=this.dataSize,this._finalizedPromiseResolve&&this._finalizedPromiseResolve()}_getElementSize(){return this._sizeComponentType()*this._numComponentsForDataType}_sizeComponentType(){switch(this._componentType){case N.BYTE:case N.UNSIGNED_BYTE:return 1;case N.SHORT:case N.UNSIGNED_SHORT:return 2;case N.UNSIGNED_INT:case N.FLOAT:return 4}}_calculateNumComponentsForDataType(){switch(this._dataType){case F.SCALAR:return 1;case F.VEC2:return 2;case F.VEC3:return 3;case F.VEC4:case F.MAT2:return 4;case F.MAT3:return 9;case F.MAT4:return 16}}}class Y{constructor(e){this._gltf=e,this._bufferViews=[],this._isFinalized=!1,e.buffers||(e.buffers=[]),this.index=e.buffers.length;const t={byteLength:-1};e.buffers.push(t),this._buffer=t}addBufferView(e,t,s){if(this._finalizePromise)throw new Error("Cannot add buffer view after fiinalizing buffer");const r=new k(this,this._gltf,e,t,s);return this._bufferViews.push(r),r}getByteOffset(e){let t=0;for(const s of this._bufferViews){if(s===e)return t;t+=s.byteSize}throw new Error("Given bufferView was not present in this buffer")}getViewFinalizePromises(e){const t=[];for(const s of this._bufferViews){if(e&&s===e)return t;t.push(s.finalized)}return t}getArrayBuffer(){if(!this._isFinalized)throw new Error("Cannot get ArrayBuffer from Buffer before it is finalized");const e=this._getTotalSize(),t=new ArrayBuffer(e);let s=0;for(const e of this._bufferViews)e.writeOutToBuffer(t,s),s+=e.byteSize;return t}finalize(){if(this._finalizePromise)throw new Error(`Buffer ${this.index} was already finalized`);return this._finalizePromise=Promise.allSettled(this.getViewFinalizePromises()).then((()=>{this._isFinalized=!0;const e=this.getArrayBuffer();this._buffer.byteLength=e.byteLength,this._buffer.uri=e})),this._gltf.extras?.promises.push(this._finalizePromise),this._finalizePromise}_getTotalSize(){let e=0;for(const t of this._bufferViews)e+=t.byteSize;return e}}function H(e,t){null==t.normal&&(t.normal=new Float32Array(t.position.length));const s=e.faces,{position:r,normal:i}=t,o=s.length/3;for(let e=0;e<o;++e){const t=3*s[3*e],o=3*s[3*e+1],n=3*s[3*e+2],a=_(Z,r[t],r[t+1],r[t+2]),c=_(J,r[o],r[o+1],r[o+2]),l=_(K,r[n],r[n+1],r[n+2]),h=w(c,c,a),f=w(l,l,a),u=T(h,h,f);i[t]+=u[0],i[t+1]+=u[1],i[t+2]+=u[2],i[o]+=u[0],i[o+1]+=u[1],i[o+2]+=u[2],i[n]+=u[0],i[n+1]+=u[1],i[n+2]+=u[2]}for(let e=0;e<i.length;e+=3)_(W,i[e],i[e+1],i[e+2]),E(W,W),i[e]=W[0],i[e+1]=W[1],i[e+2]=W[2]}const Z=A(),J=A(),K=A(),W=A();async function X(s){const r=$(s);if(null==r)throw new i("imageToArrayBuffer","Unsupported image type");const o=await async function(s){if(!(s instanceof HTMLImageElement))return"image/png";const r=s.src;if(e(r)){const e=t(r);return"image/jpeg"===e?.mediaType?e.mediaType:"image/png"}return/\.png$/i.test(r)?"image/png":/\.(jpg|jpeg)$/i.test(r)?"image/jpeg":"image/png"}(s),n=await new Promise((e=>r.toBlob(e,o)));if(!n)throw new i("imageToArrayBuffer","Failed to encode image");return{data:await n.arrayBuffer(),type:o}}function $(e){if(e instanceof HTMLCanvasElement)return e;if(e instanceof HTMLVideoElement)return null;const t=document.createElement("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");return e instanceof HTMLImageElement?s.drawImage(e,0,0,e.width,e.height):e instanceof ImageData&&s.putImageData(e,0,0),t}const q=()=>o.getLogger("gltf");class Q{constructor(e,t,s){this.params={},this._materialMap=new Array,this._imageMap=new Map,this._textureMap=new Map,this.gltf={asset:{version:"2.0",copyright:e.copyright,generator:e.generator},extras:{options:t,binChunkBuffer:null,promises:[]}},s&&(this.params=s),this._addScenes(e)}_addScenes(e){this.gltf.scene=e.defaultScene;const t=this.gltf.extras,s=t.options.bufferOutputType===V.GLB||t.options.imageOutputType===U.GLB;s&&(t.binChunkBuffer=new Y(this.gltf)),e.forEachScene((e=>{this._addScene(e)})),s&&t.binChunkBuffer.finalize()}_addScene(e){this.gltf.scenes||(this.gltf.scenes=[]);const t={};e.name&&(t.name=e.name),e.forEachNode((e=>{t.nodes||(t.nodes=[]),t.nodes.push(...this._addNodes(e))})),this.gltf.scenes.push(t)}_addNodes(e){this.gltf.nodes||(this.gltf.nodes=[]);const t={};e.name&&(t.name=e.name);const s=e.translation;y(s,b)||(t.translation=x(s));const r=e.rotation;u(r,m)||(t.rotation=d(r));const i=e.scale;y(i,R)||(t.scale=x(i));const o=this.gltf.nodes.length;if(this.gltf.nodes.push(t),e.mesh&&e.mesh.vertexAttributes.position){const s=this._createMeshes(e.mesh),r=[o];if(1===s.length)this._addMesh(t,s[0]);else for(const e of s){const t={};this._addMesh(t,e),r.push(this.gltf.nodes.length),this.gltf.nodes.push(t)}return r}return e.forEachNode((e=>{t.children||(t.children=[]),t.children.push(...this._addNodes(e))})),[o]}_addMesh(e,t){this.gltf.meshes??=[];const s=this.gltf.meshes.length;this.gltf.meshes.push(t),e.mesh=s}_createMeshes(e){const t=this.gltf.extras,s=t.options.bufferOutputType===V.GLB;let r;r=s?t.binChunkBuffer:new Y(this.gltf),this.params.origin||(this.params.origin=e.anchor);const{ignoreLocalTransform:o}=this.params,n=o?null:e.transform,{vertexSpace:a,spatialReference:f}=e,u=a.origin,p=e.vertexAttributes;let m=null;if("local"===a.type){const e=c(f);l(ee,n?.localMatrix??h,[e,e,e]),m=j(p,ee)}else{const e=o?new M({origin:u?x(u):null}):a;m=I(p,e,n,this.params.origin,{geographic:this.params.geographic,unit:"meters"})}if(null==m)throw new i("Error during gltf export.");p.position&&m.position===p.position&&(m.position=p.position.slice()),p.normal&&m.normal===p.normal&&(m.normal=p.normal.slice()),p.tangent&&m.tangent===p.tangent&&(m.tangent=p.tangent.slice()),function(e,t){if(e.components)for(const s of e.components)s.faces&&"smooth"===s.shading&&H(s,t)}(e,m),this._flipYZAxis(m);const d=r.addBufferView(N.FLOAT,F.VEC3,z.ARRAY_BUFFER);let g,_,w,T;m.normal&&(g=r.addBufferView(N.FLOAT,F.VEC3,z.ARRAY_BUFFER)),p.uv&&(_=r.addBufferView(N.FLOAT,F.VEC2,z.ARRAY_BUFFER)),m.tangent&&(w=r.addBufferView(N.FLOAT,F.VEC4,z.ARRAY_BUFFER)),p.color&&(T=r.addBufferView(N.UNSIGNED_BYTE,F.VEC4,z.ARRAY_BUFFER)),d.startAccessor("POSITION"),g&&g.startAccessor("NORMAL"),_&&_.startAccessor("TEXCOORD_0"),w&&w.startAccessor("TANGENT"),T&&T.startAccessor("COLOR_0");const E=m.position.length/3,{position:y,normal:A,tangent:b}=m,{color:R,uv:S}=p;for(let e=0;e<E;++e)d.push(y[3*e]),d.push(y[3*e+1]),d.push(y[3*e+2]),g&&null!=A&&(g.push(A[3*e]),g.push(A[3*e+1]),g.push(A[3*e+2])),_&&null!=S&&(_.push(S[2*e]),_.push(S[2*e+1])),w&&null!=b&&(w.push(b[4*e]),w.push(b[4*e+1]),w.push(b[4*e+2]),w.push(b[4*e+3])),T&&null!=R&&(T.push(R[4*e]),T.push(R[4*e+1]),T.push(R[4*e+2]),T.push(R[4*e+3]));const O=d.endAccessor(),B=this._addAccessor(d.index,O);let L,C,U,D,P;if(g){const e=g.endAccessor();L=this._addAccessor(g.index,e)}if(_){const e=_.endAccessor();C=this._addAccessor(_.index,e)}if(w){const e=w.endAccessor();U=this._addAccessor(w.index,e)}if(T){const e=T.endAccessor();D=this._addAccessor(T.index,e)}const G=[];return e.components&&e.components.length>0&&e.components[0].faces?(P=r.addBufferView(N.UNSIGNED_INT,F.SCALAR,z.ELEMENT_ARRAY_BUFFER),this._addMeshVertexIndexed(P,e.components,G,B,L,C,U,D)):this._addMeshVertexNonIndexed(e.components,G,B,L,C,U,D),d.finalize(),g&&g.finalize(),_&&_.finalize(),w&&w.finalize(),P&&P.finalize(),T&&T.finalize(),s||r.finalize(),G}_flipYZAxis({position:e,normal:t,tangent:s}){this._flipYZBuffer(e,3),this._flipYZBuffer(t,3),this._flipYZBuffer(s,4)}_flipYZBuffer(e,t){if(null!=e)for(let s=1,r=2;s<e.length;s+=t,r+=t){const t=e[s],i=e[r];e[s]=i,e[r]=-t}}_addMaterial(e){if(null===e)return;const t=this._materialMap.indexOf(e);if(-1!==t)return t;this.gltf.materials||(this.gltf.materials=[]);const s={};switch(e.alphaMode){case"mask":s.alphaMode=P.MASK;break;case"auto":case"blend":s.alphaMode=P.BLEND}.5!==e.alphaCutoff&&(s.alphaCutoff=e.alphaCutoff),e.doubleSided&&(s.doubleSided=e.doubleSided),s.pbrMetallicRoughness={};const r=e=>e**2.1,i=e=>{const t=e.toRgba();return t[0]=r(t[0]/255),t[1]=r(t[1]/255),t[2]=r(t[2]/255),t};if(null!=e.color&&(s.pbrMetallicRoughness.baseColorFactor=i(e.color)),null!=e.colorTexture&&(s.pbrMetallicRoughness.baseColorTexture=this._createTextureInfo(e.colorTexture,e.colorTextureTransform)),null!=e.normalTexture&&(s.normalTexture=this._createTextureInfo(e.normalTexture,e.normalTextureTransform)),e instanceof S){if(null!=e.emissiveTexture&&(s.emissiveTexture=this._createTextureInfo(e.emissiveTexture,e.emissiveTextureTransform)),null!=e.emissiveColor){const t=i(e.emissiveColor);s.emissiveFactor=[t[0],t[1],t[2]]}null!=e.occlusionTexture&&(s.occlusionTexture=this._createTextureInfo(e.occlusionTexture,e.occlusionTextureTransform)),null!=e.metallicRoughnessTexture&&(s.pbrMetallicRoughness.metallicRoughnessTexture=this._createTextureInfo(e.metallicRoughnessTexture,e.metallicRoughnessTextureTransform)),s.pbrMetallicRoughness.metallicFactor=e.metallic,s.pbrMetallicRoughness.roughnessFactor=e.roughness}else s.pbrMetallicRoughness.metallicFactor=1,s.pbrMetallicRoughness.roughnessFactor=1,q().warnOnce("Meshes exported to GLTF without MeshMaterialMetallicRoughness material will appear different when imported back.");const o=this.gltf.materials.length;return this.gltf.materials.push(s),this._materialMap.push(e),o}_createTextureInfo(e,t){const s={index:this._addTexture(e)};return t?(s.extensions||(s.extensions={}),s.extensions.KHR_texture_transform={scale:t.scale,offset:t.offset,rotation:a(t.rotation)},s):s}_addTexture(e){const t=this.gltf.textures??[];return this.gltf.textures=t,n(this._textureMap,e,(()=>{const s={sampler:this._addSampler(e),source:this._addImage(e)},r=t.length;return t.push(s),r}))}_addImage(e){const t=this._imageMap.get(e);if(null!=t)return t;this.gltf.images||(this.gltf.images=[]);const s={};if(e.url)s.uri=e.url;else{const t=e.data;s.extras=t;for(let e=0;e<this.gltf.images.length;++e)if(t===this.gltf.images[e].extras)return e;const r=this.gltf.extras;switch(r.options.imageOutputType){case U.GLB:{const e=r.binChunkBuffer.addBufferView(N.UNSIGNED_BYTE,F.SCALAR);if(L(t))null!=t.data&&e.writeOutToBuffer(t.data,0);else{const r=X(t).then((({data:e,type:t})=>(s.mimeType=t,e)));e.writeAsync(r).then((()=>{e.finalize()}))}s.bufferView=e.index;break}case U.DataURI:if(L(t)){q().warnOnce("Image export for basis compressed textures not available.");break}s.uri=function(e){const t=$(e);return null!=t?t.toDataURL():""}(t);break;default:if(L(t)){q().warnOnce("Image export for basis compressed textures not available.");break}r.promises.push(X(t).then((({data:e,type:t})=>{s.uri=e,s.mimeType=t})))}}const r=this.gltf.images.length;return this.gltf.images.push(s),this._imageMap.set(e,r),r}_addSampler(e){this.gltf.samplers||(this.gltf.samplers=[]);let t=O.REPEAT,s=O.REPEAT;if("string"==typeof e.wrap)switch(e.wrap){case"clamp":t=O.CLAMP_TO_EDGE,s=O.CLAMP_TO_EDGE;break;case"mirror":t=O.MIRRORED_REPEAT,s=O.MIRRORED_REPEAT}else{switch(e.wrap.vertical){case"clamp":s=O.CLAMP_TO_EDGE;break;case"mirror":s=O.MIRRORED_REPEAT}switch(e.wrap.horizontal){case"clamp":t=O.CLAMP_TO_EDGE;break;case"mirror":t=O.MIRRORED_REPEAT}}const r={wrapS:t,wrapT:s};for(let e=0;e<this.gltf.samplers.length;++e)if(JSON.stringify(r)===JSON.stringify(this.gltf.samplers[e]))return e;const i=this.gltf.samplers.length;return this.gltf.samplers.push(r),i}_addAccessor(e,t){this.gltf.accessors||(this.gltf.accessors=[]);const s={bufferView:e,byteOffset:t.byteOffset,componentType:t.componentType,count:t.count,type:t.type,min:t.min,max:t.max,name:t.name};t.normalized&&(s.normalized=!0);const r=this.gltf.accessors.length;return this.gltf.accessors.push(s),r}_addMeshVertexIndexed(e,t,s,r,i,o,n,a){const c=new Map;for(const l of t){e.startAccessor("INDICES");for(let t=0;t<l.faces.length;++t)e.push(l.faces[t]);const t=e.endAccessor(),h={attributes:{POSITION:r},indices:this._addAccessor(e.index,t),material:this._addMaterial(l.material)};i&&"flat"!==l.shading&&(h.attributes.NORMAL=i),o&&(h.attributes.TEXCOORD_0=o),n&&"flat"!==l.shading&&(h.attributes.TANGENT=n),a&&(h.attributes.COLOR_0=a);const f=c.get(l.name);if(f)f.primitives.push(h);else{const e={name:l.name,primitives:[h]};c.set(l.name,e),s.push(e)}}}_addMeshVertexNonIndexed(e,t,s,r,i,o,n){const a={primitives:[]};t.push(a);const c={attributes:{POSITION:s}};r&&(c.attributes.NORMAL=r),i&&(c.attributes.TEXCOORD_0=i),o&&(c.attributes.TANGENT=o),n&&(c.attributes.COLOR_0=n),e&&(c.material=this._addMaterial(e[0].material)),a.primitives.push(c)}}const ee=f();class te{constructor(){this.copyright="",this.defaultScene=0,this.generator="",this._scenes=[]}addScene(e){if(this._scenes.includes(e))throw new Error("Scene already added");this._scenes.push(e)}removeScene(e){B(this._scenes,e)}forEachScene(e){this._scenes.forEach(e)}}class se{constructor(){this.name="",this._nodes=[]}addNode(e){if(this._nodes.includes(e))throw new Error("Node already added");this._nodes.push(e)}forEachNode(e){this._nodes.forEach(e)}}class re{constructor(e){this.mesh=e,this.name="",this.translation=A(),this.rotation=g(),this.scale=x(R),this._nodes=[]}addNode(e){if(this._nodes.includes(e))throw new Error("Node already added");this._nodes.push(e)}forEachNode(e){this._nodes.forEach(e)}set rotationAngles(e){p(this.rotation,e[0],e[1],e[2])}}const ie="model.glb";class oe{constructor(e,t){this._file={type:"model/gltf-binary",data:e},this.origin=t}buffer(){return Promise.resolve(this._file)}download(e){s(new Blob([this._file.data],{type:this._file.type}),e)}}function ne(e,t){const s=new te,i=new se;return s.addScene(i),i.addNode(new re(e)),function(e,t){return async function(e,t,s){const i=new Q(e,t=t||{},s);let o=i.params;o?o.origin||(o.origin=new r({x:-1,y:-1,z:-1})):o={origin:new r({x:-1,y:-1,z:-1})};const n=o.origin,a=i.gltf,c=a.extras?.promises??[];let l=1,h=1,f=null;await Promise.allSettled(c);const u={origin:n};delete a.extras;const p="number"==typeof t.jsonSpacing?t.jsonSpacing:4,m=JSON.stringify(a,((e,s)=>{if("extras"!==e){if(s instanceof ArrayBuffer){if(function(e){if(e.byteLength<8)return!1;const t=new Uint8Array(e);return 137===t[0]&&80===t[1]&&78===t[2]&&71===t[3]&&13===t[4]&&10===t[5]&&26===t[6]&&10===t[7]}(s))switch(t.imageOutputType){case U.DataURI:case U.GLB:break;case U.External:default:{const e=`img${h}.png`;return h++,u[e]=s,e}}switch(t.bufferOutputType){case V.DataURI:return function(e){const t=[],s=new Uint8Array(e);for(let e=0;e<s.length;e++)t.push(String.fromCharCode(s[e]));return"data:application/octet-stream;base64,"+btoa(t.join(""))}(s);case V.GLB:if(f)throw new Error("Already encountered an ArrayBuffer, there should only be one in the GLB format.");return void(f=s);case V.External:default:{const e=`data${l}.bin`;return l++,u[e]=s,e}}}return s}}),p);return t.bufferOutputType===V.GLB||t.imageOutputType===U.GLB?u[ie]=new v(m,f).buffer:u["model.gltf"]=m,u}(e,{bufferOutputType:V.GLB,imageOutputType:U.GLB,jsonSpacing:0},t)}(s,t).then((e=>new oe(e[ie],e.origin)))}export{ne as toBinaryGLTF};
