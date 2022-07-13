import { h as L, r, al as e, aJ as o, jy as r$2, c6 as l, eM as r$3, aI as r$4, iB as g$1, fd as e$1, r9 as w, t as t$3 } from './_virtual_index-fc1e0009.js';
import { m, c as c$1, p, g } from './MeshComponent-c613ec7b.js';
import { T, i, c as c$2, x, u, L as L$1, O, E } from './BufferView-1591d5ec.js';
import { t, r as r$5, o as o$2, b as t$1, f as f$1, e as e$3, n as n$3 } from './vec33-5a0f7743.js';
import { n, c, r as r$1, o as o$1, a as r$6, h as f, t as t$2, b as n$1, j as d, d as o$3, e as e$2, k as n$2, i as i$1, f as o$4, g as n$4 } from './DefaultMaterial_COLOR_GAMMA-47345331.js';
import { b } from './georeference-8b2e9136.js';
import { a } from './geometryDataUtils-91cc75cc.js';
import { E as E$1, D } from './enums-fb707d37.js';
import './types-a3ffebbf.js';
import './mat4f64-2ebd3575.js';
import './quat-92534261.js';
import './quatf64-808fd6fd.js';
import './axisAngleDegrees-1fee8123.js';
import './projection-04d5ffcd.js';
import './triangle-3905f167.js';
import './vectorStacks-b9f85207.js';
import './lineSegment-ed293740.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
async function W(t,e,r$1){const o=new n(X(r$1)),n$1=(await c(o,e,r$1,!0)).model,s=n$1.lods.shift(),a=new Map,c$1=new Map;n$1.textures.forEach(((t,e)=>a.set(e,et(t)))),n$1.materials.forEach(((t,e)=>c$1.set(e,rt(t,a))));const l=tt(s);for(const i of l.parts)ot(l,i,c$1);const{position:u,normal:f,tangent:m,color:p$1,texCoord0:d}=l.vertexAttributes,h={position:u.typedBuffer,normal:r(f)?f.typedBuffer:null,tangent:r(m)?m.typedBuffer:null,uv:r(d)?d.typedBuffer:null,color:r(p$1)?p$1.typedBuffer:null},x=b(h,t,r$1);return {transform:x.transform,components:l.components,spatialReference:t.spatialReference,vertexAttributes:new p({position:x.vertexAttributes.position,normal:x.vertexAttributes.normal,tangent:x.vertexAttributes.tangent,color:h.color,uv:h.uv})}}function X(t){return t?.resolveFile?{busy:!1,request:async(r$1,o,n)=>{const s=t.resolveFile(r$1),a="image"===o?"image":"binary"===o?"array-buffer":"json";return (await L(s,{responseType:a,signal:r(n)?n.signal:null})).data}}:null}function Y(t,e){if(t$3(t))return "-";const o=t.typedBuffer;return `${r$2(e,o.buffer,(()=>e.size))}/${o.byteOffset}/${o.byteLength}`}function Z(t){return r(t)?t.toString():"-"}function tt(t){let e=0;const has={color:!1,tangent:!1,normal:!1,texCoord0:!1},o=new Map,n=new Map,s=[];for(const i of t.parts){const{attributes:{position:t,normal:a,color:c,tangent:l,texCoord0:u}}=i,f=`\n      ${Y(t,o)}/\n      ${Y(a,o)}/\n      ${Y(c,o)}/\n      ${Y(l,o)}/\n      ${Y(u,o)}/\n      ${Z(i.transform)}\n    `;let m=!1;const p=r$2(n,f,(()=>(m=!0,{start:e,length:t.count})));m&&(e+=t.count),a&&(has.normal=!0),c&&(has.color=!0),l&&(has.tangent=!0),u&&(has.texCoord0=!0),s.push({gltf:i,writeVertices:m,region:p});}return {vertexAttributes:{position:r$1(T,e),normal:has.normal?r$1(i,e):null,tangent:has.tangent?r$1(c$2,e):null,color:has.color?r$1(x,e):null,texCoord0:has.texCoord0?r$1(u,e):null},parts:s,components:[]}}function et(t){return new m({data:t.data,wrap:at(t.parameters.wrap)})}function rt(e$1,r){const o$1=new l(ut(e$1.color,e$1.opacity)),i=e$1.emissiveFactor?new l(ft(e$1.emissiveFactor)):null;return new c$1({color:o$1,colorTexture:e(o(e$1.textureColor,(t=>r.get(t)))),normalTexture:e(o(e$1.textureNormal,(t=>r.get(t)))),emissiveColor:i,emissiveTexture:e(o(e$1.textureEmissive,(t=>r.get(t)))),occlusionTexture:e(o(e$1.textureOcclusion,(t=>r.get(t)))),alphaMode:it(e$1.alphaMode),alphaCutoff:e$1.alphaCutoff,doubleSided:e$1.doubleSided,metallic:e$1.metallicFactor,roughness:e$1.roughnessFactor,metallicRoughnessTexture:e(o(e$1.textureMetallicRoughness,(t=>r.get(t))))})}function ot(t,e,r){e.writeVertices&&nt(t,e);const o=e.gltf,n=st(o.indices||o.attributes.position.count,o.primitiveType),s=e.region.start;if(s)for(let i=0;i<n.length;i++)n[i]+=s;t.components.push(new g({faces:n,material:r.get(o.material),trustSourceNormals:!0}));}function nt(t$3,e){const{position:r$1,normal:n,tangent:s,color:a,texCoord0:u}=t$3.vertexAttributes,f$2=e.region.start,{attributes:m,transform:p}=e.gltf,d$1=m.position.count;if(t(r$1.slice(f$2,d$1),m.position,p),r(m.normal)&&r(n)){const t=g$1(e$1(),p),e=n.slice(f$2,d$1);r$5(e,m.normal,t),w(t)&&o$2(e,e);}else r(n)&&t$1(n,0,0,1,{dstIndex:f$2,count:d$1});if(r(m.tangent)&&r(s)){const t=g$1(e$1(),p),e=s.slice(f$2,d$1);r$6(e,m.tangent,t),w(t)&&f(e,e);}else r(s)&&t$2(s,0,0,1,1,{dstIndex:f$2,count:d$1});if(r(m.texCoord0)&&r(u)?n$1(u.slice(f$2,d$1),m.texCoord0):r(u)&&d(u,0,0,{dstIndex:f$2,count:d$1}),r(m.color)&&r(a)){const t=m.color,e=a.slice(f$2,d$1);if(4===t.elementCount)t instanceof c$2?o$3(e,t,255):t instanceof x?e$2(e,t):t instanceof L$1&&n$2(e,t,8);else {t$2(e,255,255,255,255);const r=O.fromTypedArray(e.typedBuffer,e.typedBufferStride);t instanceof i?f$1(r,t,255):t instanceof O?e$3(r,t):t instanceof E&&n$3(r,t,8);}}else r(a)&&t$2(a.slice(f$2,d$1),255,255,255,255);}function st(t,e){switch(e){case E$1.TRIANGLES:return n$4(t,a);case E$1.TRIANGLE_STRIP:return o$4(t);case E$1.TRIANGLE_FAN:return i$1(t)}}function it(t){switch(t){case"OPAQUE":return "opaque";case"MASK":return "mask";case"BLEND":return "blend"}}function at(t){return {horizontal:ct(t.s),vertical:ct(t.t)}}function ct(t){switch(t){case D.CLAMP_TO_EDGE:return "clamp";case D.MIRRORED_REPEAT:return "mirror";case D.REPEAT:return "repeat"}}function lt(t){return t**(1/o$1)*255}function ut(t,e){return r$3(lt(t[0]),lt(t[1]),lt(t[2]),e)}function ft(t){return r$4(lt(t[0]),lt(t[1]),lt(t[2]))}

export { W as loadGLTFMesh };
