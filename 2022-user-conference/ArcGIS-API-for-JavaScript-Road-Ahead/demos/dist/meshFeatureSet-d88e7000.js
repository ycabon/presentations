import { C as s$1, G as r, fJ as Hn, a3 as n, lG as y$5, aw as b$2, oU as _$1, k2 as Ot, ln as L, q as p$4, _ as f$3, O as t, s as s$2, eh as u$2, gm as qn, dr as O$2, fq as a$1, fr as S$1, eD as e$2, cW as z$1, a5 as o, cV as e$3, eH as g$5, eI as O$4, ft as f$4, au as g$6, ao as a$3, lR as m$3, iw as m$4, iZ as p$6, l as l$3, eP as w$4, aO as v$4, a as e$4, d as d$3, n as n$1, ac as r$2, jg as x$5, cG as g$7 } from './_virtual_index-64b818a8.js';
import { a as a$2, v as v$3, g as g$4, x as x$4, k as k$5 } from './axisAngleDegrees-1c0a5f84.js';
import { p as p$5, g as g$3 } from './MeshComponent-4bc7389d.js';
import { r as r$1, k as k$3, x as x$3, b as b$3, L as L$2 } from './georeference-effda26e.js';
import { o as o$1 } from './triangulationUtils-69648277.js';
import { e as e$1 } from './mat4f64-2ebd3575.js';
import { M as M$2, j, k as k$4, O as O$3, h as h$2, L as L$1 } from './projection-c092b417.js';
import './quat-df2b9f8f.js';
import './quatf64-808fd6fd.js';
import './BufferView-e399da5f.js';
import './vec33-84eb2a4f.js';
import './earcut-da8a3e33.js';
import './deduplicate-365f71f3.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const a=s$1.getLogger("esri.geometry.support.meshUtils.centerAt");function c$2(e,r$2,i){if(!e.vertexAttributes||!e.vertexAttributes.position)return;const n=i?.origin??e.origin;if(r(e.transform))null!=i?.geographic&&i.geographic!==e.transform.geographic&&a.warn(`Specifying the 'geographic' parameter (${i.geographic}) different from the Mesh transform setting (${e.transform.geographic}) is not supported`),f$2(e.transform,r$2,n);else {r$1(e.spatialReference,i)?p$3(e,r$2,n):g$2(e,r$2,n);}}function f$2(e,t,r){const i=t.x-r.x,o=t.y-r.y,n=t.hasZ&&r.hasZ?t.z-r.z:0,s=e.origin;e.origin=[s[0]+i,s[1]+o,s[2]+n];}function p$3(e,t,r){const i=k$3(e.vertexAttributes,r,{geographic:!0}),{position:o,normal:a,tangent:c}=x$3(i,t,{geographic:!0});e.vertexAttributes.position=o,e.vertexAttributes.normal=a,e.vertexAttributes.tangent=c,e.vertexAttributesChanged();}function g$2(e,t,r){const o=h$1,n=l$2;if(Hn(t,n,e.spatialReference)){if(!Hn(r,o,e.spatialReference)){const t=e.origin;o[0]=t.x,o[1]=t.y,o[2]=t.z,a.error(`Failed to project specified origin (wkid:${r.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid}).`);}m$2(e.vertexAttributes.position,n,o),e.vertexAttributesChanged();}else a.error(`Failed to project centerAt location (wkid:${t.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid})`);}function m$2(e,t,r){if(e)for(let i=0;i<e.length;i+=3)for(let o=0;o<3;o++)e[i+o]+=t[o]-r[o];}const l$2=n(),h$1=n();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
async function f$1(e,s,o){const{loadGLTFMesh:n}=await y$5(import('./loadGLTFMesh-53ab3df7.js'),o),a=await m$1(s,o),i=n(new b$2({x:0,y:0,z:0,spatialReference:e.spatialReference}),a.url,{resolveFile:u$1(a),useTransform:!0,signal:r(o)?o.signal:null});i.then((()=>a.dispose()),(()=>a.dispose()));const{vertexAttributes:l,components:f}=await i;e.vertexAttributes=l,e.components=f;}function u$1(e){const t=Ot(e.url);return s=>{const r=_$1(s,t,t),o=r?r.replace(/^ *\.\//,""):null;return e.files.get(o)??s}}async function m$1(e,t){return e instanceof Blob?y$4.fromBlob(e):"string"==typeof e?new y$4(e):Array.isArray(e)?p$2(e,t):w$3(e,t)}async function p$2(t$1,r){const i=new Map;let l=null;const c=await L(t$1.map((async e=>({name:e.name,source:await m$1(e instanceof Blob?e:e.source,r)})))),f=[];for(const e of c)e&&(p$4(r)?e.source.dispose():f.push(e));f$3(r);for(const{name:e,source:o}of f)(t(l)||/\.(gltf|glb)/i.test(e))&&(l=o.url),i.set(e,o.url),o.files&&o.files.forEach(((e,t)=>i.set(t,e)));if(t(l))throw new s$2("mesh-load-external:missing-files","Missing files to load external mesh source");return new y$4(l,(()=>f.forEach((({source:e})=>e.dispose()))),i)}async function w$3(e,t){const{default:s}=await y$5(import('./_virtual_index-64b818a8.js').then(function (n) { return n.pi; }),t),o="string"==typeof e.multipart[0]?await Promise.all(e.multipart.map((async e=>(await s(e,{responseType:"array-buffer"})).data))):e.multipart;return y$4.fromBlob(new Blob(o))}class y$4{constructor(e,t=(()=>{}),s=new Map){this.url=e,this.dispose=t,this.files=s;}static fromBlob(e){const t=URL.createObjectURL(e);return new y$4(t,(()=>URL.revokeObjectURL(t)))}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function x$2(e,o,i){if(e.vertexAttributes&&e.vertexAttributes.position)if(r(e.transform))null!=i?.geographic&&i.geographic!==e.transform.geographic&&s$1.getLogger("esri.geometry.support.meshUtils.offset").warn(`Specifying the 'geographic' parameter (${i.geographic}) different from the Mesh transform setting (${e.transform.geographic}) is not supported`),A$2(e.transform,o);else {r$1(e.spatialReference,i)?v$2(e,o):b$1(e,o);}}function A$2(t,r){const e=t.origin;t.origin=u$2(n(),e,r);}function v$2(t,o){const i=t.spatialReference,n=t.vertexAttributes.position,a=t.vertexAttributes.normal,c=t.vertexAttributes.tangent,x=new Float64Array(n.length),A=r(a)?new Float32Array(a.length):null,v=r(c)?new Float32Array(c.length):null,b=t.extent.center,F=d$2;qn(i,[b.x,b.y,b.z],k$2,O$2(i)),a$1(w$2,k$2),S$1(F,o,w$2),M$2(n,i,x),r(a)&&j(a,n,x,i,A),r(c)&&k$4(c,n,x,i,v),y$3(x,F),O$3(x,n,i),r(a)&&h$2(A,n,x,i,a),r(c)&&L$1(v,n,x,i,c),t.vertexAttributesChanged();}function b$1(t,r){y$3(t.vertexAttributes.position,r),t.vertexAttributesChanged();}function y$3(t,r){if(t)for(let e=0;e<t.length;e+=3)for(let o=0;o<3;o++)t[e+o]+=r[o];}const d$2=n(),k$2=e$1(),w$2=e$2();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function c$1(){const{faceDescriptions:t,faceVertexOffsets:e,uvScales:n}=d$1,r=4*t.length,o=new Float64Array(3*r),s=new Float32Array(3*r),a=new Float32Array(2*r),i=new Uint32Array(2*t.length*3);let c=0,l=0,f=0,u=0;for(let h=0;h<t.length;h++){const r=t[h],p=c/3;for(const t of e)i[u++]=p+t;const m=r.corners;for(let t=0;t<4;t++){const e=m[t];let i=0;a[f++]=.25*n[t][0]+r.uvOrigin[0],a[f++]=r.uvOrigin[1]-.25*n[t][1];for(let t=0;t<3;t++)0!==r.axis[t]?(o[c++]=.5*r.axis[t],s[l++]=r.axis[t]):(o[c++]=.5*e[i++],s[l++]=0);}}return {position:o,normal:s,uv:a,faces:i}}function l$1(e,n){const r$1=e.components[0],o=r$1.faces,a=M$1[n],i=6*a,c=new Uint32Array(6),l=new Uint32Array(o.length-6);let f=0,u=0;for(let t=0;t<o.length;t++)t>=i&&t<i+6?c[f++]=o[t]:l[u++]=o[t];if(r(e.vertexAttributes.uv)){const t=new Float32Array(e.vertexAttributes.uv),n=4*a*2,r=[0,1,1,1,1,0,0,0];for(let e=0;e<r.length;e++)t[n+e]=r[e];e.vertexAttributes.uv=t;}return e.components=[new g$3({faces:c,material:r$1.material}),new g$3({faces:l})],e}function f(t=0){const e=Math.round(8*2**t),n=2*e,r=(e-1)*(n+1)+2*n,o=new Float64Array(3*r),s=new Float32Array(3*r),a=new Float32Array(2*r),i=new Uint32Array(3*((e-1)*n*2));let c=0,l=0,f=0,u=0;for(let h=0;h<=e;h++){const t=h/e*Math.PI+.5*Math.PI,r=Math.cos(t),p=Math.sin(t);F[2]=p;const m=0===h||h===e,w=m?n-1:n;for(let v=0;v<=w;v++){const t=v/w*2*Math.PI;F[0]=-Math.sin(t)*r,F[1]=Math.cos(t)*r;for(let e=0;e<3;e++)o[c]=.5*F[e],s[c]=F[e],++c;a[l++]=(v+(m?.5:0))/n,a[l++]=h/e,0!==h&&v!==n&&(h!==e&&(i[f++]=u,i[f++]=u+1,i[f++]=u-n),1!==h&&(i[f++]=u,i[f++]=u-n,i[f++]=u-n-1)),u++;}}return {position:o,normal:s,uv:a,faces:i}}function u(t=0){const e=5,n=Math.round(16*2**t),r=(e-1)*(n+1)+2*n,o=new Float64Array(3*r),s=new Float32Array(3*r),a=new Float32Array(2*r),i=new Uint32Array(3*(4*n));let c=0,l=0,f=0,u=0,h=0;for(let p=0;p<=e;p++){const t=0===p||p===e,r=p<=1||p>=e-1,m=2===p||4===p,w=t?n-1:n;for(let v=0;v<=w;v++){const g=v/w*2*Math.PI,A=t?0:.5;F[0]=A*Math.sin(g),F[1]=A*-Math.cos(g),F[2]=p<=2?.5:-.5;for(let t=0;t<3;t++)o[c++]=F[t],s[l++]=r?2===t?p<=1?1:-1:0:2===t?0:F[t]/A;a[f++]=(v+(t?.5:0))/n,a[f++]=p<=1?1*p/3:p<=3?1*(p-2)/3+1/3:1*(p-4)/3+2/3,m||0===p||v===n||(p!==e&&(i[u++]=h,i[u++]=h+1,i[u++]=h-n),1!==p&&(i[u++]=h,i[u++]=h-n,i[u++]=h-n-1)),h++;}}return {position:o,normal:s,uv:a,faces:i}}function h(t,e){const n="number"==typeof e?e:null!=e?e.width:1,r="number"==typeof e?e:null!=e?e.height:1;switch(t){case"up":case"down":return {width:n,depth:r};case"north":case"south":return {width:n,height:r};case"east":case"west":return {depth:n,height:r}}}function p$1(t){const e=g$1.facingAxisOrderSwap[t],n=g$1.position,r=g$1.normal,o=new Float64Array(n.length),s=new Float32Array(r.length);let a=0;for(let i=0;i<4;i++){const t=a;for(let i=0;i<3;i++){const c=e[i],l=Math.abs(c)-1,f=c>=0?1:-1;o[a]=n[t+l]*f,s[a]=r[t+l]*f,a++;}}return {position:o,normal:s,uv:new Float32Array(g$1.uv),faces:new Uint32Array(g$1.faces),isPlane:!0}}const m=1,w$1=2,v$1=3,g$1={position:[-.5,-.5,0,.5,-.5,0,.5,.5,0,-.5,.5,0],normal:[0,0,1,0,0,1,0,0,1,0,0,1],uv:[0,1,1,1,1,0,0,0],faces:[0,1,2,0,2,3],facingAxisOrderSwap:{east:[v$1,m,w$1],west:[-v$1,-m,w$1],north:[-m,v$1,w$1],south:[m,-v$1,w$1],up:[m,w$1,v$1],down:[m,-w$1,-v$1]}};function A$1(t,e,n){t.isPlane||y$2(t),x$1(t,n&&n.size);const{vertexAttributes:r,transform:o}=b$3(t,e,n);return {vertexAttributes:new p$5({...r,uv:t.uv}),transform:o,components:[new g$3({faces:t.faces,material:n&&n.material||null})],spatialReference:e.spatialReference}}function y$2(t){for(let e=0;e<t.position.length;e+=3)t.position[e+2]+=.5;}function x$1(t,e){if(null==e)return;const o="number"==typeof e?[e,e,e]:[null!=e.width?e.width:1,null!=e.depth?e.depth:1,null!=e.height?e.height:1];O$1[0]=o[0],O$1[4]=o[1],O$1[8]=o[2];for(let r=0;r<t.position.length;r+=3){for(let e=0;e<3;e++)F[e]=t.position[r+e];S$1(F,F,O$1);for(let e=0;e<3;e++)t.position[r+e]=F[e];}if(o[0]!==o[1]||o[1]!==o[2]){O$1[0]=1/o[0],O$1[4]=1/o[1],O$1[8]=1/o[2];for(let e=0;e<t.normal.length;e+=3){for(let n=0;n<3;n++)F[n]=t.normal[e+n];S$1(F,F,O$1),z$1(F,F);for(let n=0;n<3;n++)t.normal[e+n]=F[n];}}}const d$1={faceDescriptions:[{axis:[0,-1,0],uvOrigin:[0,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[1,0,0],uvOrigin:[.25,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,1,0],uvOrigin:[.5,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[-1,0,0],uvOrigin:[.75,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[0,0,1],uvOrigin:[0,.375],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,0,-1],uvOrigin:[0,.875],corners:[[-1,1],[1,1],[1,-1],[-1,-1]]}],uvScales:[[0,0],[1,0],[1,1],[0,1]],faceVertexOffsets:[0,1,2,0,2,3]},M$1={south:0,east:1,north:2,west:3,up:4,down:5},F=n(),O$1=e$2();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const $=s$1.getLogger("esri.geometry.support.meshUtils.rotate");function z(t,r$2,o){if(!t.vertexAttributes||!t.vertexAttributes.position||0===r$2[3])return;const i=t.spatialReference;if(r(t.transform)){null!=o?.geographic&&o.geographic!==t.transform.geographic&&$.warn(`Specifying the 'geographic' parameter (${o.geographic}) different from the Mesh transform setting (${t.transform.geographic}) is not supported`);const e=o?.origin??t.transform.getOriginPoint(i);C(t.transform,r$2,e);}else {const e=o?.origin??t.origin;r$1(t.spatialReference,o)?I$1(t,r$2,e):U(t,r$2,e);}}function C(t,e,r){const o$1=o(E$1,r.x,r.y,r.z),i=e$3(E$1,o$1,t.origin);t.applyLocalInverse(i,M),t.rotation=v$3(t.rotation,e,a$2()),t.applyLocalInverse(i,i),e$3(i,i,M),t.translation=u$2(n(),t.translation,i);}function I$1(t,r$1,i){const n=t.spatialReference,s=O$2(n),a=Z$1;Hn(i,a,s)||Hn(t.origin,a,s);const c=t.vertexAttributes.position,f=t.vertexAttributes.normal,m=t.vertexAttributes.tangent,g=new Float64Array(c.length),l=r(f)?new Float32Array(f.length):null,v=r(m)?new Float32Array(m.length):null;qn(s,a,P,s),a$1(S,P);const x=O;S$1(g$4(O),g$4(r$1),S),x[3]=r$1[3],M$2(c,n,g),r(f)&&j(f,c,g,n,l),r(m)&&k$4(m,c,g,n,v),D$2(g,x,3,a),O$3(g,c,n),r(f)&&(D$2(l,x,3),h$2(l,c,g,n,f)),r(m)&&(D$2(v,x,4),L$1(v,c,g,n,m)),t.vertexAttributesChanged();}function U(t,e,r){const o=Z$1;if(!Hn(r,o,t.spatialReference)){const e=t.origin;o[0]=e.x,o[1]=e.y,o[2]=e.z,$.error(`Failed to project specified origin (wkid:${r.spatialReference.wkid}) to mesh spatial reference (wkid:${t.spatialReference.wkid}).`);}D$2(t.vertexAttributes.position,e,3,o),D$2(t.vertexAttributes.normal,e,3),D$2(t.vertexAttributes.tangent,e,4),t.vertexAttributesChanged();}function D$2(t$1,e,o,i=f$4){if(!t(t$1)){g$5(P,x$4(e),g$4(e));for(let e=0;e<t$1.length;e+=o){for(let r=0;r<3;r++)E$1[r]=t$1[e+r]-i[r];O$4(E$1,E$1,P);for(let r=0;r<3;r++)t$1[e+r]=E$1[r]+i[r];}}}const E$1=n(),M=n(),O=a$2(),P=e$1(),S=e$2(),Z$1=n();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const v=s$1.getLogger("esri.geometry.support.meshUtils.scale");function d(e,r$2,o){if(!e.vertexAttributes||!e.vertexAttributes.position)return;const i=e.spatialReference;if(r(e.transform)){null!=o?.geographic&&o.geographic!==e.transform.geographic&&v.warn(`Specifying the 'geographic' parameter (${o.geographic}) different from the Mesh transform setting (${e.transform.geographic}) is not supported`);const t=o?.origin??e.transform.getOriginPoint(i);x(e.transform,r$2,t);}else {const t=r$1(e.spatialReference,o),i=o&&o.origin||e.origin;t?A(e,r$2,i):b(e,r$2,i);}}function x(e,t,a){const c=o(w,a.x,a.y,a.z),p=e$3(w,c,e.origin);e.applyLocalInverse(p,k$1);const f=g$6(n(),e.scale,t);e.scale=f,e.applyLocalInverse(p,p),e$3(p,p,k$1),e.translation=u$2(n(),e.translation,p);}function A(e,r$1,o){const i=e.spatialReference,n=O$2(i),s=R;Hn(o,s,n)||Hn(e.origin,s,n);const a=e.vertexAttributes.position,f=e.vertexAttributes.normal,v=e.vertexAttributes.tangent,d=new Float64Array(a.length),x=r(f)?new Float32Array(f.length):null,A=r(v)?new Float32Array(v.length):null;M$2(a,i,d),r(f)&&j(f,a,d,i,x),r(v)&&k$4(v,a,d,i,A),y$1(d,r$1,s),O$3(d,a,i),r(f)&&h$2(x,a,d,i,f),r(v)&&L$1(A,a,d,i,v),e.vertexAttributesChanged();}function b(e,t,r){const o=R;if(!Hn(r,o,e.spatialReference)){const t=e.origin;o[0]=t.x,o[1]=t.y,o[2]=t.z,v.error(`Failed to project specified origin (wkid:${r.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid}).`);}y$1(e.vertexAttributes.position,t,o),e.vertexAttributesChanged();}function y$1(e,t,r=f$4){if(e)for(let o=0;o<e.length;o+=3){for(let t=0;t<3;t++)w[t]=e[o+t]-r[t];g$6(w,w,t);for(let t=0;t<3;t++)e[o+t]=w[t]+r[t];}}const w=n(),k$1=n(),R=n();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
var _;const I="esri.geometry.Mesh";let B=_=class extends(a$3(m$3.LoadableMixin(m$4(p$6)))){constructor(e){super(e),this.components=null,this.transform=null,this.external=null,this.hasZ=!0,this.hasM=!1,this.vertexAttributes=new p$5,this.type="mesh";}initialize(){(t(this.external)||this.vertexAttributes.position.length)&&(this.loadStatus="loaded"),this.when((()=>{this.handles.add(l$3((()=>({vertexAttributes:this.vertexAttributes,components:this.components?.map((e=>e.clone())),transform:r(this.transform)?this.transform.clone():null})),(()=>this._set("external",null)),{once:!0,sync:!0}));}));}get hasExtent(){return !this.loaded&&r(this.external)&&r(this.external.extent)||this.loaded&&this.vertexAttributes.position.length>0&&(!this.components||this.components.length>0)}get _boundingInfo(){const e=this.vertexAttributes.position,t=this.spatialReference;if(0===e.length||this.components&&0===this.components.length)return {extent:new w$4({xmin:0,ymin:0,zmin:0,xmax:0,ymax:0,zmax:0,spatialReference:t}),center:new b$2({x:0,y:0,z:0,spatialReference:t})};const r$1=r(this.transform)?this.transform.project(e,t):e;let o=1/0,n=1/0,s=1/0,a=-1/0,l=-1/0,c=-1/0,p=0,m=0,h=0;const f=r$1.length,d=1/(f/3);let x=0;for(;x<f;){const e=r$1[x++],t=r$1[x++],i=r$1[x++];o=Math.min(o,e),n=Math.min(n,t),s=Math.min(s,i),a=Math.max(a,e),l=Math.max(l,t),c=Math.max(c,i),p+=d*e,m+=d*t,h+=d*i;}return {extent:new w$4({xmin:o,ymin:n,zmin:s,xmax:a,ymax:l,zmax:c,spatialReference:t}),center:new b$2({x:p,y:m,z:h,spatialReference:t})}}get anchor(){if(r(this.transform))return this.transform.getOriginPoint(this.spatialReference);const e=this._boundingInfo;return new b$2({x:e.center.x,y:e.center.y,z:e.extent.zmin,spatialReference:this.spatialReference})}get origin(){return r(this.transform)?this.transform.getOriginPoint(this.spatialReference):this._boundingInfo.center}get extent(){return !this.loaded&&r(this.external)&&r(this.external.extent)?this.external.extent.clone():this._boundingInfo.extent}addComponent(e){this.loaded?(this.components||(this.components=[]),this.components.push(g$3.from(e)),this.notifyChange("components")):s$1.getLogger(this.declaredClass).error("addComponent()","Mesh must be loaded before applying operations");}removeComponent(e){if(this.loaded){if(this.components){const t=this.components.indexOf(e);if(-1!==t)return this.components.splice(t,1),void this.notifyChange("components")}s$1.getLogger(this.declaredClass).error("removeComponent()","Provided component is not part of the list of components");}else s$1.getLogger(this.declaredClass).error("removeComponent()","Mesh must be loaded before applying operations");}rotate(e,t,r,o){return k$5(k.x,e,D$1),k$5(k.y,t,W),k$5(k.z,r,Z),v$3(D$1,W,D$1),v$3(D$1,Z,D$1),z(this,D$1,o),this}offset(e,t,r,o){return this.loaded?(H[0]=e,H[1]=t,H[2]=r,x$2(this,H,o),this):(s$1.getLogger(this.declaredClass).error("offset()","Mesh must be loaded before applying operations"),this)}scale(e,t){return this.loaded?(d(this,e,t),this):(s$1.getLogger(this.declaredClass).error("scale()","Mesh must be loaded before applying operations"),this)}centerAt(e,t){return this.loaded?(c$2(this,e,t),this):(s$1.getLogger(this.declaredClass).error("centerAt()","Mesh must be loaded before applying operations"),this)}load(e){return r(this.external)&&this.addResolvingPromise(f$1(this,this.external.source,e)),Promise.resolve(this)}clone(){const e=this.components?new Map:null,t=this.components?new Map:null,r$1={components:this.components?this.components.map((r=>r.cloneWithDeduplication(e,t))):null,spatialReference:this.spatialReference,vertexAttributes:this.vertexAttributes.clone(),transform:r(this.transform)?this.transform.clone():null,external:r(this.external)?{source:this.external.source,extent:r(this.external.extent)?this.external.extent.clone():null}:null};return new _(r$1)}vertexAttributesChanged(){this.notifyChange("vertexAttributes");}async toBinaryGLTF(e){const{toBinaryGLTF:t}=await import('./gltfexport-8d01f9da.js');return t(this,e)}static createBox(e,t){if(!(e instanceof b$2))return s$1.getLogger(I).error(".createBox()","expected location to be a Point instance"),null;const r=new _(A$1(c$1(),e,t));return t&&t.imageFace&&"all"!==t.imageFace?l$1(r,t.imageFace):r}static createSphere(e,t){return e instanceof b$2?new _(A$1(f(t&&t.densificationFactor||0),e,t)):(s$1.getLogger(I).error(".createSphere()","expected location to be a Point instance"),null)}static createCylinder(e,t){return e instanceof b$2?new _(A$1(u(t&&t.densificationFactor||0),e,t)):(s$1.getLogger(I).error(".createCylinder()","expected location to be a Point instance"),null)}static createPlane(e,t){if(!(e instanceof b$2))return s$1.getLogger(I).error(".createPlane()","expected location to be a Point instance"),null;const r=t?.facing??"up",o=h(r,t?.size);return new _(A$1(p$1(r),e,{...t,size:o}))}static createFromPolygon(e,t){if(!(e instanceof v$4))return s$1.getLogger(I).error(".createFromPolygon()","expected polygon to be a Polygon instance"),null;const r=o$1(e);return new _({vertexAttributes:new p$5({position:r.position}),components:[new g$3({faces:r.faces,shading:"flat",material:t&&t.material||null})],spatialReference:e.spatialReference})}static async createFromGLTF(e,r,o){if(!(e instanceof b$2))throw s$1.getLogger(I).error(".createfromGLTF()","expected location to be a Point instance"),new s$2("invalid-input","Expected location to be a Point instance");const{loadGLTFMesh:s}=await y$5(import('./loadGLTFMesh-53ab3df7.js'),o);return new _(await s(e,r,o))}static createWithExternalSource(e,t,r){const o=r?.extent??null,n=r?.transform.clone()??new L$2;n.origin=[e.x,e.y,e.z??0];const s=e.spatialReference;return new _({external:{source:t,extent:o},transform:n,spatialReference:s})}static createIncomplete(e,r){const o=r?.transform.clone()??new L$2;o.origin=[e.x,e.y,e.z??0];const n=e.spatialReference,s=new _({transform:o,spatialReference:n});return s.addResolvingPromise(Promise.reject(new s$2("mesh-incomplete","Mesh resources are not complete"))),s}};e$4([d$3({type:[g$3],json:{write:!0}})],B.prototype,"components",void 0),e$4([d$3({type:L$2,json:{write:!0}})],B.prototype,"transform",void 0),e$4([d$3({constructOnly:!0})],B.prototype,"external",void 0),e$4([d$3({readOnly:!0})],B.prototype,"hasExtent",null),e$4([d$3({readOnly:!0})],B.prototype,"_boundingInfo",null),e$4([d$3({readOnly:!0})],B.prototype,"anchor",null),e$4([d$3({readOnly:!0})],B.prototype,"origin",null),e$4([d$3({readOnly:!0,json:{read:!1}})],B.prototype,"extent",null),e$4([d$3({readOnly:!0,json:{read:!1,write:!0,default:!0}})],B.prototype,"hasZ",void 0),e$4([d$3({readOnly:!0,json:{read:!1,write:!0,default:!1}})],B.prototype,"hasM",void 0),e$4([d$3({type:p$5,nonNullable:!0,json:{write:!0}})],B.prototype,"vertexAttributes",void 0),B=_=e$4([n$1(I)],B);const k={x:r$2(1,0,0),y:r$2(0,1,0),z:r$2(0,0,1)},D$1=a$2(),W=a$2(),Z=a$2(),H=n(),N=B;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
var s,e;!function(s){s.featureGUID="featureGUID",s.assetName="assetName",s.hash="hash",s.type="type",s.conversionStatus="conversionStatus",s.flags="flags",s.complexity="complexity",s.size="size",s.seqNo="seqNo",s.sourceHash="sourceHash",s.assetURL="assetURL";}(s||(s={})),function(s){s.SUBMITTED="SUBMITTED",s.INPROGRESS="INPROGRESS",s.FAILED="FAILED",s.COMPLETED="COMPLETED";}(e||(e={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function c(o,s,n){const a=n.features;n.features=[],delete n.geometryType;const i=x$5.fromJSON(n);i.geometryType="mesh";const u=i.spatialReference,f=t(o.outFields)||!o.outFields.length?()=>({}):l(o.outFields.includes("*")?null:new Set(o.outFields));for(const e of a){const o=p(e,u,s);r(o)&&i.features.push(new g$7({geometry:o,attributes:f(e)}));}return i}function l(t){return ({attributes:e})=>{if(!e)return {};if(!t)return e;for(const r in e)t.has(r)||delete e[r];return e}}function p(t,e,r){const{status:n,source:a}=D(t);if(n===y.FAILED)return null;const i=g(t,e,r),u=w$4.fromJSON(t.geometry);u.spatialReference=e;const f=E(t,r);return n===y.PENDING?N.createIncomplete(i,{extent:u,transform:f}):N.createWithExternalSource(i,a,{extent:u,transform:f})}function g({attributes:t},e,{transformFieldRoles:r}){return new b$2({x:t[r.originX],y:t[r.originY],z:t[r.originZ],spatialReference:e})}function E({attributes:t,assetMappings:e},{transformFieldRoles:r}){return new L$2({translation:[t[r.translationX],t[r.translationY],t[r.translationZ]],rotation:k$5([t[r.rotationX],t[r.rotationY],t[r.rotationZ]],t[r.rotationDeg]),scale:[t[r.scaleX],t[r.scaleY],t[r.scaleZ]],geographic:!e[s.flags]?.includes("PROJECT_VERTICES")})}function D(t){if(!t.assetMappings)return {status:y.FAILED};const e$1=[],r=new Map;for(const o of t.assetMappings){const t=o[s.seqNo],s$1=o[s.assetName],n=o[s.assetURL],a=o[s.conversionStatus];if(a===e.FAILED)return {status:y.FAILED};if(a!==e.COMPLETED)return {status:y.PENDING};if(null==t)e$1.push({name:s$1,source:n});else {const o=r.get(s$1);let a;o?a=o.multipart:(a=[],e$1.push({name:s$1,source:{multipart:a}}),r.set(s$1,{multipart:a})),a[t]=n;}}return {status:y.COMPLETED,source:e$1}}var y;!function(t){t[t.FAILED=0]="FAILED",t[t.PENDING=1]="PENDING",t[t.COMPLETED=2]="COMPLETED";}(y||(y={}));

export { c as meshFeatureSetFromJSON };
