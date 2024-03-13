/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as e}from"../chunks/tslib.es6.js";import t from"../core/Error.js";import r from"../core/Loadable.js";import{L as s}from"../chunks/Logger.js";import{EsriPromiseMixin as n}from"../core/Promise.js";import{whenOrAbort as o,throwIfAborted as i,allSettledValues as a,isAborted as c,createAbortError as l}from"../core/promiseUtils.js";import{on as p,watch as u}from"../core/reactiveUtils.js";import{property as m}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import{subclass as h}from"../core/accessorSupport/decorators/subclass.js";import{c as f,Z as g}from"../chunks/vec3f64.js";import d from"./Extent.js";import x from"./Geometry.js";import y from"./Point.js";import j from"./Polygon.js";import{d as w,e as v,c as b,a as k,g as A}from"../chunks/axisAngleDegrees.js";import S,{M as R}from"./support/MeshComponent.js";import M from"./support/MeshGeoreferencedVertexSpace.js";import F from"./support/MeshLocalVertexSpace.js";import L from"./support/MeshTransform.js";import{i as U,v as P}from"../chunks/meshVertexSpaceUtils.js";import{t as C}from"../chunks/triangulationUtils.js";import{p as O,v as T,i as z,u as E,a as _,c as D,d as $,e as G,f as B,h as I,j as V,b as N}from"../chunks/georeference.js";import{c as q,h as H,w as W,n as Z,s as J,g as K,b as Q}from"../chunks/vec3.js";import{p as X}from"../chunks/projectPointToVector.js";import{removeFile as Y,makeRelative as ee}from"../core/urlUtils.js";import{Clonable as te}from"../core/Clonable.js";import re from"../core/Collection.js";import{d as se,f as ne,e as oe}from"../chunks/External.js";import{f as ie}from"../chunks/mat3.js";import{c as ae}from"../chunks/mat3f64.js";import{c as ce}from"../chunks/mat4f64.js";import{g as le}from"../chunks/spatialReferenceEllipsoidUtils.js";import{c as pe}from"../chunks/computeTranslationToOriginAndRotation.js";import{a as ue}from"../chunks/mat4.js";import"../config.js";import"../chunks/maybe.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/metadata.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/ObservableBase.js";import"../chunks/tracking.js";import"../core/scheduling.js";import"../chunks/ensureType.js";import"../chunks/asyncUtils.js";import"../core/Evented.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"./SpatialReference.js";import"../core/JSONSupport.js";import"../chunks/unitUtils.js";import"../chunks/jsonMap.js";import"../chunks/assets.js";import"../request.js";import"../kernel.js";import"../chunks/writer.js";import"./support/webMercatorUtils.js";import"../chunks/reader.js";import"../core/accessorSupport/decorators/cast.js";import"../chunks/coordsUtils.js";import"../chunks/Axis.js";import"../chunks/extentUtils.js";import"../chunks/aaBoundingRect.js";import"../chunks/mathUtils.js";import"../chunks/zmUtils.js";import"../chunks/common.js";import"../chunks/quat.js";import"../chunks/vec4.js";import"../chunks/quatf64.js";import"../chunks/vec4f64.js";import"./support/MeshMaterial.js";import"../Color.js";import"../chunks/colorUtils.js";import"./support/MeshTexture.js";import"../chunks/imageUtils.js";import"../chunks/persistableUrlUtils.js";import"./support/MeshTextureTransform.js";import"./support/MeshMaterialMetallicRoughness.js";import"../chunks/enumeration.js";import"../chunks/vec32.js";import"../chunks/earcut.js";import"../chunks/_commonjsHelpers.js";import"../chunks/DoubleArray.js";import"../chunks/Indices.js";import"../chunks/deduplicate.js";import"../geometry.js";import"./Multipoint.js";import"./Polyline.js";import"../chunks/typeUtils.js";import"./support/jsonUtils.js";import"../chunks/plane.js";import"../chunks/vec2f64.js";import"../chunks/mathUtils2.js";import"../chunks/Attribute.js";import"../chunks/ContentObject.js";import"../chunks/Geometry.js";import"../chunks/basicInterfaces.js";import"../chunks/Util.js";import"../chunks/triangle.js";import"../chunks/lineSegment.js";import"../chunks/VertexAttribute.js";import"../chunks/doublePrecisionUtils.js";import"./projection.js";import"../chunks/projectBuffer.js";import"../chunks/geodesicConstants.js";import"./support/GeographicTransformation.js";import"./support/GeographicTransformationStep.js";import"../chunks/zscale.js";import"../chunks/BufferView.js";import"../chunks/vec2.js";import"../chunks/infoFor3D.js";class me extends t{constructor(){super("mesh-not-loaded","Mesh must be loaded before applying operations")}}class he extends t{constructor(){super("component-not-found","Provided component is not part of the list of components")}}class fe extends t{constructor(){super("invalid-polygon","expected polygon to be a Polygon instance")}}class ge extends t{constructor(){super("invalid-input:location","Expected location to be a Point instance")}}let de=null;function xe(e,t){let r=1/0,s=1/0,n=1/0,o=-1/0,i=-1/0,a=-1/0;const c=e.length;let l=0;for(;l<c;){const t=e[l++],c=e[l++],p=e[l++];r=Math.min(r,t),s=Math.min(s,c),n=Math.min(n,p),o=Math.max(o,t),i=Math.max(i,c),a=Math.max(a,p)}return new d({xmin:r,ymin:s,zmin:n,xmax:o,ymax:i,zmax:a,spatialReference:t})}const ye="esri.geometry.support.meshUtils.centerAt",je=f(),we=f(),ve=f();function be(e){const t=Y(e.url);return r=>{const s=ee(r,t,t),n=s?s.replace(/^ *\.\//,""):null;return(n?e.files.get(n):null)??r}}function ke(e){return Le.fromBlob(e,Ue(e.name,e.type))}const Ae=/^model\/gltf\+json$/,Se=/^model\/gltf-binary$/,Re=/\.gltf$/i,Me=/\.glb$/i;function Fe(e){const r=new Map;let s,n=null;for(const{name:t,mimeType:o,source:i}of e)null===n&&(Ae.test(o)||Re.test(t)?(n=i.url,s="gltf"):(Se.test(o)||Me.test(t))&&(n=i.url,s="glb")),r.set(t,i.url),i.files.forEach(((e,t)=>r.set(t,e)));if(null==n)throw new t("mesh-load-external:missing-files","Missing files to load external mesh source");return new Le(n,(()=>e.forEach((({source:e})=>e.dispose()))),r,s)}class Le{constructor(e,t=(()=>{}),r=new Map,s){this.url=e,this.dispose=t,this.files=r,this.type=s}static fromBlob(e,t){const r=URL.createObjectURL(e);return new Le(r,(()=>URL.revokeObjectURL(r)),void 0,t)}}function Ue(e,t){return Ae.test(t)||Re.test(e)?"gltf":Se.test(t)||Re.test(e)?"glb":void 0}let Pe=class extends te{constructor(){super(),this.externalSources=new re,this._explicitDisplaySource=null,this.addHandles(p((()=>this.externalSources),"after-remove",(({item:e})=>{e===this._explicitDisplaySource&&(this._explicitDisplaySource=null)}),{sync:!0,onListenerRemove:()=>this._explicitDisplaySource=null}))}get displaySource(){return this._explicitDisplaySource??this._implicitDisplaySource}set displaySource(e){if(null!=e&&!se(e))throw new Error("Cannot use this source for display: it is not in a supported format.");this._explicitDisplaySource=e,e&&this.externalSources.every((t=>!ne(t,e)))&&this.externalSources.add(e)}clearSources(){this.externalSources.removeAll()}getExternalSourcesOnService(e){return this.externalSources.items.filter((t=>oe(t,e)))}get _implicitDisplaySource(){return this.externalSources.find(se)}};function Ce(e,t){if(e)for(let r=0;r<e.length;r+=3)for(let s=0;s<3;s++)e[r+s]+=t[s]}e([m()],Pe.prototype,"externalSources",void 0),e([m()],Pe.prototype,"displaySource",null),e([m()],Pe.prototype,"_implicitDisplaySource",null),e([m()],Pe.prototype,"_explicitDisplaySource",void 0),Pe=e([h("esri.geometry.support.meshUtils.Metadata")],Pe);const Oe=f(),Te=ce(),ze=ae(),Ee={position:[-.5,-.5,0,.5,-.5,0,.5,.5,0,-.5,.5,0],normal:[0,0,1,0,0,1,0,0,1,0,0,1],uv:[0,1,1,1,1,0,0,0],faces:[0,1,2,0,2,3],facingAxisOrderSwap:{east:[3,1,2],west:[-3,-1,2],north:[-1,3,2],south:[1,-3,2],up:[1,2,3],down:[1,-2,-3]}};function _e(e,t,r){e.isPlane||function(e){for(let t=0;t<e.position.length;t+=3)e.position[t+2]+=.5}(e),function(e,t){if(null==t)return;const r="number"==typeof t?[t,t,t]:[null!=t.width?t.width:1,null!=t.depth?t.depth:1,null!=t.height?t.height:1];Be[0]=r[0],Be[4]=r[1],Be[8]=r[2];for(let t=0;t<e.position.length;t+=3){for(let r=0;r<3;r++)Ge[r]=e.position[t+r];W(Ge,Ge,Be);for(let r=0;r<3;r++)e.position[t+r]=Ge[r]}if(r[0]!==r[1]||r[1]!==r[2]){Be[0]=1/r[0],Be[4]=1/r[1],Be[8]=1/r[2];for(let t=0;t<e.normal.length;t+=3){for(let r=0;r<3;r++)Ge[r]=e.normal[t+r];W(Ge,Ge,Be),Z(Ge,Ge);for(let r=0;r<3;r++)e.normal[t+r]=Ge[r]}}}(e,r?.size);const{vertexAttributes:s,vertexSpace:n,transform:o}=N(e,t,r);return{vertexAttributes:new R({...s,uv:e.uv}),vertexSpace:n,transform:o,components:[new S({faces:e.faces,material:r?.material||null})],spatialReference:t.spatialReference}}const De={faceDescriptions:[{axis:[0,-1,0],uvOrigin:[0,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[1,0,0],uvOrigin:[.25,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,1,0],uvOrigin:[.5,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[-1,0,0],uvOrigin:[.75,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[0,0,1],uvOrigin:[0,.375],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,0,-1],uvOrigin:[0,.875],corners:[[-1,1],[1,1],[1,-1],[-1,-1]]}],uvScales:[[0,0],[1,0],[1,1],[0,1]],faceVertexOffsets:[0,1,2,0,2,3]},$e={south:0,east:1,north:2,west:3,up:4,down:5},Ge=f(),Be=ae(),Ie="esri.geometry.support.meshUtils.rotate";function Ve(e,t,r,s=g){if(null!=e){ue(We,b(t),k(t));for(let t=0;t<e.length;t+=r){for(let r=0;r<3;r++)Ne[r]=e[t+r]-s[r];K(Ne,Ne,We);for(let r=0;r<3;r++)e[t+r]=Ne[r]+s[r]}}}const Ne=f(),qe=f(),He=w(),We=ce(),Ze=ae(),Je=f(),Ke="esri.geometry.support.meshUtils.scale";function Qe(e,t,r=g){if(e)for(let s=0;s<e.length;s+=3){for(let t=0;t<3;t++)Xe[t]=e[s+t]-r[t];Q(Xe,Xe,t);for(let t=0;t<3;t++)e[s+t]=Xe[t]+r[t]}}const Xe=f(),Ye=f(),et=f();var tt;const rt="esri.geometry.Mesh",st={base:null,key:"type",defaultKeyValue:"georeferenced",typeMap:{georeferenced:M,local:F}};let nt=tt=class extends(r.LoadableMixin(n(x))){constructor(e){super(e),this.components=null,this.vertexSpace=new M,this.transform=null,this.metadata=new Pe,this.hasZ=!0,this.hasM=!1,this.vertexAttributes=new R,this.type="mesh"}initialize(){(0===this.metadata.externalSources.length||this.vertexAttributes.position.length)&&(this.loadStatus="loaded"),this.when((()=>{this.addHandles(u((()=>({vertexAttributes:this.vertexAttributes,components:this.components?.map((e=>e.clone()))})),(()=>this._clearSources()),{once:!0,sync:!0}))}))}get hasExtent(){return this.loaded?this.vertexAttributes.position.length>0&&(!this.components||this.components.length>0):null!=this.metadata.displaySource?.extent}get _transformedExtent(){const{components:e,spatialReference:t,vertexAttributes:r,vertexSpace:s}=this,n=r.position;if(0===n.length||e&&0===e.length)return new d({xmin:0,ymin:0,zmin:0,xmax:0,ymax:0,zmax:0,spatialReference:t});if("local"===s.type){const{_untransformedExtent:e,transform:r}=this;return function({xmin:e,xmax:t,ymin:r,ymax:s,zmin:n,zmax:o},i,a,c){n??=0,o??=0,de??=new Float64Array(24);const l=de;return l[0]=e,l[1]=r,l[2]=n,l[3]=e,l[4]=s,l[5]=n,l[6]=t,l[7]=s,l[8]=n,l[9]=t,l[10]=r,l[11]=n,l[12]=e,l[13]=r,l[14]=o,l[15]=e,l[16]=s,l[17]=o,l[18]=t,l[19]=s,l[20]=o,l[21]=t,l[22]=r,l[23]=o,O({positions:l,transform:i,vertexSpace:a,inSpatialReference:c,outSpatialReference:c,outPositions:l}),xe(l,c)}(e,r,s,t)}if("georeferenced"===s.type&&U(s)){const{transform:e}=this;return xe(O({positions:n,transform:e,vertexSpace:s,inSpatialReference:t,outSpatialReference:t}),t)}return xe(n,t)}get _untransformedExtent(){return xe(this.vertexAttributes.position,this.spatialReference)}get anchor(){const e=P(this.vertexSpace,this.spatialReference);if(null!=e)return e;const{center:t,zmin:r}=this._transformedExtent;return new y({x:t.x,y:t.y,z:r,spatialReference:this.spatialReference})}get origin(){const e=P(this.vertexSpace,this.spatialReference);return null!=e?e:this._transformedExtent.center}get extent(){return this.loaded||null==this.metadata?.displaySource?.extent?this._transformedExtent:this.metadata.displaySource.extent.clone()}addComponent(e){if(!this.loaded)return s.getLogger(this).error("addComponent()",(new me).message);this.components||(this.components=[]),this.components.push(S.from(e)),this.notifyChange("components")}removeComponent(e){if(!this.loaded)return s.getLogger(this).error("removeComponent()",(new me).message);if(this.components){const t=this.components.indexOf(e);if(-1!==t)return this.components.splice(t,1),void this.notifyChange("components")}s.getLogger(this).error("removeComponent()",(new he).message)}rotate(e,t,r,n){return A(e,t,r,it),function(e,t,r){if(!e.vertexAttributes?.position||0===t[3])return;const{spatialReference:n,vertexSpace:o}=e;if(U(o)){T(o,Ie,r);const s=r?.origin??e.origin;e.transform??=new L,function(e,t,r,s){const n=J(Ne,s.x,s.y,s.z??0),o=q(Ne,n,t);e.applyLocalInverse(o,qe),e.rotation=v(e.rotation,r,w()),e.applyLocalInverse(o,o),q(o,o,qe),e.translation=H(f(),e.translation,o)}(e.transform,o.origin,t,s)}else{const o=r?.origin??e.origin;z(n,r?.geographic)?function(e,t,r){const s=e.spatialReference,n=le(s),o=Je;X(r,o,n)||X(e.origin,o,n);const i=e.vertexAttributes.position,a=e.vertexAttributes.normal,c=e.vertexAttributes.tangent,l=new Float64Array(i.length),p=null!=a?new Float32Array(a.length):null,u=null!=c?new Float32Array(c.length):null;pe(n,o,We,n),ie(Ze,We);const m=He;W(k(He),k(t),Ze),m[3]=t[3],D(i,s,l),null!=a&&null!=p&&$(a,i,l,s,p),null!=c&&null!=u&&G(c,i,l,s,u),Ve(l,m,3,o),B(l,i,s),null!=a&&null!=p&&(Ve(p,m,3),I(p,i,l,s,a)),null!=c&&null!=u&&(Ve(u,m,4),V(u,i,l,s,c)),e.vertexAttributesChanged()}(e,t,o):function(e,t,r){const n=Je;if(!X(r,n,e.spatialReference)){const t=e.origin;n[0]=t.x,n[1]=t.y,n[2]=t.z,s.getLogger(Ie).error(`Failed to project specified origin (wkid:${r.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid}). Projection may be possible after calling projection.load().`)}Ve(e.vertexAttributes.position,t,3,n),Ve(e.vertexAttributes.normal,t,3),Ve(e.vertexAttributes.tangent,t,4),e.vertexAttributesChanged()}(e,t,o)}}(this,it,n),this}offset(e,t,r,n){return this.loaded?(ot[0]=e,ot[1]=t,ot[2]=r,function(e,t,r){if(!e.vertexAttributes?.position)return;const{vertexSpace:s}=e;U(s)?(T(s,"esri.geometry.support.meshUtils.offset",r),s.origin=H(f(),s.origin,t)):z(e.spatialReference,r?.geographic)?function(e,t){const r=e.spatialReference,s=e.vertexAttributes.position,n=e.vertexAttributes.normal,o=e.vertexAttributes.tangent,i=new Float64Array(s.length),a=null!=n?new Float32Array(n.length):null,c=null!=o?new Float32Array(o.length):null,l=e.extent.center,p=Oe;pe(r,[l.x,l.y,l.z],Te,le(r)),ie(ze,Te),W(p,t,ze),D(s,r,i),null!=n&&null!=a&&$(n,s,i,r,a),null!=o&&null!=c&&G(o,s,i,r,c),Ce(i,p),B(i,s,r),null!=n&&null!=a&&I(a,s,i,r,n),null!=o&&null!=c&&V(c,s,i,r,o),e.vertexAttributesChanged()}(e,t):function(e,t){Ce(e.vertexAttributes.position,t),e.vertexAttributesChanged()}(e,t)}(this,ot,n),this):(s.getLogger(this).error("offset()",(new me).message),this)}scale(e,t){return this.loaded?(function(e,t,r){if(!e.vertexAttributes?.position)return;const{spatialReference:n,vertexSpace:o}=e;if(U(o)){T(o,Ke,r);const s=r?.origin??e.origin;e.transform??=new L,function(e,t,r,s){const n=J(Xe,s.x,s.y,s.z),o=q(Xe,n,t);e.applyLocalInverse(o,Ye);const i=Q(f(),e.scale,r);e.scale=i,e.applyLocalInverse(o,o),q(o,o,Ye),e.translation=H(f(),e.translation,o)}(e.transform,o.origin,t,s)}else{const o=r?.origin??e.origin;z(n,r?.geographic)?function(e,t,r){const s=e.spatialReference,n=le(s),o=et;X(r,o,n)||X(e.origin,o,n);const i=e.vertexAttributes.position,a=e.vertexAttributes.normal,c=e.vertexAttributes.tangent,l=new Float64Array(i.length),p=null!=a?new Float32Array(a.length):null,u=null!=c?new Float32Array(c.length):null;D(i,s,l),null!=a&&null!=p&&$(a,i,l,s,p),null!=c&&null!=u&&G(c,i,l,s,u),Qe(l,t,o),B(l,i,s),null!=a&&null!=p&&I(p,i,l,s,a),null!=c&&null!=u&&V(u,i,l,s,c),e.vertexAttributesChanged()}(e,t,o):function(e,t,r){const n=et;if(!X(r,n,e.spatialReference)){const t=e.origin;n[0]=t.x,n[1]=t.y,n[2]=t.z,s.getLogger(Ke).error(`Failed to project specified origin (wkid:${r.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid}). Projection may be possible after calling projection.load().`)}Qe(e.vertexAttributes.position,t,n),e.vertexAttributesChanged()}(e,t,o)}}(this,e,t),this):(s.getLogger(this).error("scale()",(new me).message),this)}centerAt(e,t){return this.loaded?(function(e,t,r){if(!e.vertexAttributes?.position)return;const{vertexSpace:n}=e,o=r?.origin??e.origin;U(n)?(T(n,ye,r),function(e,t,r){const{vertexSpace:n}=e;if(!U(n))return;const o=we,i=je;if(!X(t,i,e.spatialReference))return void s.getLogger(ye).error(`Failed to project centerAt location (wkid:${t.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid}). Projection may be possible after calling projection.load().`);if(!X(r,o,e.spatialReference)){const t=e.origin;o[0]=t.x,o[1]=t.y,o[2]=t.z,s.getLogger(ye).error(`Failed to project specified origin (wkid:${r.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid}). Projection may be possible after calling projection.load().`)}const a=q(ve,i,o);n.origin=H(f(),n.origin,a)}(e,t,o)):z(e.spatialReference,r?.geographic)?function(e,t,r){const s=E(e.vertexAttributes,r,{geographic:!0}),{position:n,normal:o,tangent:i}=_(s,t,{geographic:!0});e.vertexAttributes.position=n,e.vertexAttributes.normal=o,e.vertexAttributes.tangent=i,e.vertexAttributesChanged()}(e,t,o):function(e,t,r){const n=we,o=je;if(X(t,o,e.spatialReference)){if(!X(r,n,e.spatialReference)){const t=e.origin;n[0]=t.x,n[1]=t.y,n[2]=t.z,s.getLogger(ye).error(`Failed to project specified origin (wkid:${r.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid}). Projection may be possible after calling projection.load().`)}(function(e,t,r){if(e)for(let s=0;s<e.length;s+=3)for(let n=0;n<3;n++)e[s+n]+=t[n]-r[n]})(e.vertexAttributes.position,o,n),e.vertexAttributesChanged()}else s.getLogger(ye).error(`Failed to project centerAt location (wkid:${t.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid}). Projection may be possible after calling projection.load().`)}(e,t,o)}(this,e,t),this):(s.getLogger(this).error("centerAt()",(new me).message),this)}load(e){const{metadata:{displaySource:r}}=this;return r&&this.addResolvingPromise(async function(e,r,s){const{source:n}=r,{loadGLTFMesh:p}=await o(import("../chunks/loadGLTFMesh.js"),s),u=await async function(e,r){if(Array.isArray(e)){if(!e.length)throw new t("mesh-load-external:missing-assets","There must be at least one file to load");return e[0]instanceof File?Fe(e.map((e=>({name:e.name,mimeType:e.type,source:ke(e)})))):async function(e,t){const r=await a(e.map((async e=>{const r=await async function(e,t){const{parts:r,assetMimeType:s,assetName:n}=e;if(1===r.length)return new Le(r[0].partUrl);const o=await e.toBlob(t);return i(t),Le.fromBlob(o,Ue(n,s))}(e);return i(t),{name:e.assetName,mimeType:e.assetMimeType,source:r}})));if(c(t))throw r.forEach((e=>e.source.dispose())),l();return Fe(r)}(e,r)}return ke(e)}(n,s);i(s);const m=p(new y({x:0,y:0,z:0,spatialReference:e.spatialReference}),u.url,{resolveFile:be(u),useTransform:!0,signal:s?.signal,expectedType:u.type});m.then((()=>u.dispose()),(()=>u.dispose()));const{vertexAttributes:h,components:f}=await m;e.vertexAttributes=h,e.components=f}(this,r,e)),Promise.resolve(this)}addExternalSources(e){this.metadata.externalSources.addMany(e)}updateDisplaySource(e){this.metadata.displaySource=e}clone(){return this.cloneWithVertexSpace(this.vertexSpace.clone())}cloneWithVertexSpace(e){let t=null;if(this.components){const e=new Map,r=new Map;t=this.components.map((t=>t.cloneWithDeduplication(e,r)))}const r={components:t,spatialReference:this.spatialReference,vertexAttributes:this.vertexAttributes.clone(),vertexSpace:e,transform:this.transform?.clone()??null,metadata:this.metadata.clone()};return new tt(r)}cloneShallow(){return new tt({components:this.components,spatialReference:this.spatialReference,vertexAttributes:this.vertexAttributes,vertexSpace:this.vertexSpace.clone(),transform:this.transform,metadata:this.metadata})}vertexAttributesChanged(){this.notifyChange("vertexAttributes")}async toBinaryGLTF(e){const t=import("../chunks/gltfexport.js"),r=this.load(),s=await Promise.all([t,r]),{toBinaryGLTF:n}=s[0];return n(this,e)}get memoryUsage(){let e=0;if(e+=this.vertexAttributes.memoryUsage,null!=this.components)for(const t of this.components)e+=t.memoryUsage;return e}_clearSources(){this.metadata.clearSources()}static createBox(e,t){if(!(e instanceof y))return s.getLogger(rt).error(".createBox()",(new ge).message),null;const r=new tt(_e(function(){const{faceDescriptions:e,faceVertexOffsets:t,uvScales:r}=De,s=4*e.length,n=new Float64Array(3*s),o=new Float32Array(3*s),i=new Float32Array(2*s),a=new Uint32Array(2*e.length*3);let c=0,l=0,p=0,u=0;for(let s=0;s<e.length;s++){const m=e[s],h=c/3;for(const e of t)a[u++]=h+e;const f=m.corners;for(let e=0;e<4;e++){const t=f[e];let s=0;i[p++]=.25*r[e][0]+m.uvOrigin[0],i[p++]=m.uvOrigin[1]-.25*r[e][1];for(let e=0;e<3;e++)0!==m.axis[e]?(n[c++]=.5*m.axis[e],o[l++]=m.axis[e]):(n[c++]=.5*t[s++],o[l++]=0)}}return{position:n,normal:o,uv:i,faces:a}}(),e,t));return t?.imageFace&&"all"!==t.imageFace?function(e,t){const r=e.components[0],s=r.faces,n=$e[t],o=6*n,i=new Array(6),a=new Array(s.length-6);let c=0,l=0;for(let e=0;e<s.length;e++)e>=o&&e<o+6?i[c++]=s[e]:a[l++]=s[e];if(null!=e.vertexAttributes.uv){const t=new Float32Array(e.vertexAttributes.uv),r=4*n*2,s=[0,1,1,1,1,0,0,0];for(let e=0;e<s.length;e++)t[r+e]=s[e];e.vertexAttributes.uv=t}return e.components=[new S({faces:i,material:r.material}),new S({faces:a})],e}(r,t.imageFace):r}static createSphere(e,t){return e instanceof y?new tt(_e(function(e=0){const t=Math.round(8*2**e),r=2*t,s=(t-1)*(r+1)+2*r,n=new Float64Array(3*s),o=new Float32Array(3*s),i=new Float32Array(2*s),a=new Uint32Array((t-1)*r*2*3);let c=0,l=0,p=0,u=0;for(let e=0;e<=t;e++){const s=e/t*Math.PI+.5*Math.PI,m=Math.cos(s),h=Math.sin(s);Ge[2]=h;const f=0===e||e===t,g=f?r-1:r;for(let s=0;s<=g;s++){const h=s/g*2*Math.PI;Ge[0]=-Math.sin(h)*m,Ge[1]=Math.cos(h)*m;for(let e=0;e<3;e++)n[c]=.5*Ge[e],o[c]=Ge[e],++c;i[l++]=(s+(f?.5:0))/r,i[l++]=e/t,0!==e&&s!==r&&(e!==t&&(a[p++]=u,a[p++]=u+1,a[p++]=u-r),1!==e&&(a[p++]=u,a[p++]=u-r,a[p++]=u-r-1)),u++}}return{position:n,normal:o,uv:i,faces:a}}(t?.densificationFactor||0),e,t)):(s.getLogger(rt).error(".createSphere()",(new ge).message),null)}static createCylinder(e,t){return e instanceof y?new tt(_e(function(e=0){const t=Math.round(16*2**e),r=4*(t+1)+2*t,s=new Float64Array(3*r),n=new Float32Array(3*r),o=new Float32Array(2*r),i=new Uint32Array(4*t*3);let a=0,c=0,l=0,p=0,u=0;for(let e=0;e<=5;e++){const r=0===e||5===e,m=e<=1||e>=4,h=2===e||4===e,f=r?t-1:t;for(let g=0;g<=f;g++){const d=g/f*2*Math.PI,x=r?0:.5;Ge[0]=x*Math.sin(d),Ge[1]=x*-Math.cos(d),Ge[2]=e<=2?.5:-.5;for(let t=0;t<3;t++)s[a++]=Ge[t],n[c++]=m?2===t?e<=1?1:-1:0:2===t?0:Ge[t]/x;o[l++]=(g+(r?.5:0))/t,o[l++]=e<=1?1*e/3:e<=3?1*(e-2)/3+1/3:1*(e-4)/3+2/3,h||0===e||g===t||(5!==e&&(i[p++]=u,i[p++]=u+1,i[p++]=u-t),1!==e&&(i[p++]=u,i[p++]=u-t,i[p++]=u-t-1)),u++}}return{position:s,normal:n,uv:o,faces:i}}(t?.densificationFactor||0),e,t)):(s.getLogger(rt).error(".createCylinder()",(new ge).message),null)}static createPlane(e,t){if(!(e instanceof y))return s.getLogger(rt).error(".createPlane()",(new ge).message),null;const r=t?.facing??"up",n=function(e,t){const r="number"==typeof t?t:null!=t?t.width:1,s="number"==typeof t?t:null!=t?t.height:1;switch(e){case"up":case"down":return{width:r,depth:s};case"north":case"south":return{width:r,height:s};case"east":case"west":return{depth:r,height:s}}}(r,t?.size);return new tt(_e(function(e){const t=Ee.facingAxisOrderSwap[e],r=Ee.position,s=Ee.normal,n=new Float64Array(r.length),o=new Float32Array(s.length);let i=0;for(let e=0;e<4;e++){const e=i;for(let a=0;a<3;a++){const c=t[a],l=Math.abs(c)-1,p=c>=0?1:-1;n[i]=r[e+l]*p,o[i]=s[e+l]*p,i++}}return{position:n,normal:o,uv:new Float32Array(Ee.uv),faces:new Uint32Array(Ee.faces),isPlane:!0}}(r),e,{...t,size:n}))}static createFromPolygon(e,t){if(!(e instanceof j))return s.getLogger(rt).error(".createFromPolygon()",(new fe).message),null;const r=C(e);return new tt({vertexAttributes:new R({position:r.position}),components:[new S({faces:r.faces,shading:"flat",material:t?.material??null})],spatialReference:e.spatialReference,vertexSpace:new M})}static async createFromGLTF(e,t,r){if(!(e instanceof y)){const e=new ge;throw s.getLogger(rt).error(".createfromGLTF()",e.message),e}const{loadGLTFMesh:n}=await o(import("../chunks/loadGLTFMesh.js"),r);return new tt(await n(e,t,r))}static async createFromFiles(e,r,s){if(!s?.layer)throw new t("invalid:no-layer","SceneLayer required for file to mesh conversion.");return s.layer.convertMesh(r,{location:e,...s})}static createWithExternalSource(e,t,r){const s=r?.extent??null,{x:n,y:o,z:i,spatialReference:a}=e,c=r?.transform?.clone()??new L,l=r?.vertexSpace??new F({origin:[n,o,i??0]}),p={source:t,extent:s},u=new Pe;return u.externalSources.push(p),new tt({metadata:u,transform:c,vertexSpace:l,spatialReference:a})}static createIncomplete(e,r){const{x:s,y:n,z:o,spatialReference:i}=e,a=r?.transform?.clone()??new L,c=r?.vertexSpace??new F({origin:[s,n,o??0]}),l=new tt({transform:a,vertexSpace:c,spatialReference:i});return l.addResolvingPromise(Promise.reject(new t("mesh-incomplete","Mesh resources are not complete"))),l}};e([m({type:[S],json:{write:!0}})],nt.prototype,"components",void 0),e([m({nonNullable:!0,types:st,constructOnly:!0,json:{write:!0}})],nt.prototype,"vertexSpace",void 0),e([m({type:L,json:{write:!0}})],nt.prototype,"transform",void 0),e([m({constructOnly:!0})],nt.prototype,"metadata",void 0),e([m()],nt.prototype,"hasExtent",null),e([m()],nt.prototype,"_transformedExtent",null),e([m()],nt.prototype,"_untransformedExtent",null),e([m()],nt.prototype,"anchor",null),e([m()],nt.prototype,"origin",null),e([m({readOnly:!0,json:{read:!1}})],nt.prototype,"extent",null),e([m({readOnly:!0,json:{read:!1,write:!0,default:!0}})],nt.prototype,"hasZ",void 0),e([m({readOnly:!0,json:{read:!1,write:!0,default:!1}})],nt.prototype,"hasM",void 0),e([m({type:R,nonNullable:!0,json:{write:!0}})],nt.prototype,"vertexAttributes",void 0),nt=tt=e([h(rt)],nt);const ot=f(),it=w(),at=nt;export{at as default};