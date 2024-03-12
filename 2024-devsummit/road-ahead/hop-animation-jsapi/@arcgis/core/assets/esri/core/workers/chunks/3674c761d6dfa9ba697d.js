"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[6012],{72119:(e,t,r)=>{var i;r.d(t,{B:()=>i}),function(e){e[e.Pass=0]="Pass",e[e.Draw=1]="Draw"}(i||(i={}))},87583:(e,t,r)=>{r.d(t,{C:()=>i,a:()=>a});var i,o,n=r(21972);(o=i||(i={}))[o.Layer=0]="Layer",o[o.Object=1]="Object",o[o.Mesh=2]="Mesh",o[o.Line=3]="Line",o[o.Point=4]="Point",o[o.Material=5]="Material",o[o.Texture=6]="Texture",o[o.COUNT=7]="COUNT";class a{constructor(){this.id=(0,n.g)()}}},90532:(e,t,r)=>{r.d(t,{G:()=>S});var i=r(57532),o=r(72836),n=r(92457),a=r(76506),s=r(33417),l=r(6906),c=r(66106),d=r(62348),u=r(87583),h=r(50766),m=r(21972),p=r(99520);function f(e){if(e.length<a.n)return Array.from(e);if((0,a.c)(e))return Float64Array.from(e);if(!("BYTES_PER_ELEMENT"in e))return Array.from(e);switch(e.BYTES_PER_ELEMENT){case 1:return Uint8Array.from(e);case 2:return(0,a.g)(e)?Uint16Array.from(e):Int16Array.from(e);case 4:return Float32Array.from(e);default:return Float64Array.from(e)}}r(46283);class g{constructor(e,t,r){this.primitiveIndices=e,this._numIndexPerPrimitive=t,this.position=r,this._children=void 0,(0,d.a)(e.length>=1),(0,d.a)(3===r.size||4===r.size);const{data:i,size:n,indices:a}=r;(0,d.a)(a.length%this._numIndexPerPrimitive==0),(0,d.a)(a.length>=e.length*this._numIndexPerPrimitive);const s=e.length;let l=n*a[this._numIndexPerPrimitive*e[0]];v.clear(),v.push(l);const u=(0,c.f)(i[l],i[l+1],i[l+2]),h=(0,c.a)(u);for(let t=0;t<s;++t){const r=this._numIndexPerPrimitive*e[t];for(let e=0;e<this._numIndexPerPrimitive;++e){l=n*a[r+e],v.push(l);let t=i[l];u[0]=Math.min(t,u[0]),h[0]=Math.max(t,h[0]),t=i[l+1],u[1]=Math.min(t,u[1]),h[1]=Math.max(t,h[1]),t=i[l+2],u[2]=Math.min(t,u[2]),h[2]=Math.max(t,h[2])}}this.bbMin=u,this.bbMax=h;const m=(0,o.a)((0,c.c)(),this.bbMin,this.bbMax,.5);this.radius=.5*Math.max(Math.max(h[0]-u[0],h[1]-u[1]),h[2]-u[2]);let p=this.radius*this.radius;for(let e=0;e<v.length;++e){l=v.at(e);const t=i[l]-m[0],r=i[l+1]-m[1],o=i[l+2]-m[2],n=t*t+r*r+o*o;if(n<=p)continue;const a=Math.sqrt(n),s=.5*(a-this.radius);this.radius=this.radius+s,p=this.radius*this.radius;const c=s/a;m[0]+=t*c,m[1]+=r*c,m[2]+=o*c}this.center=m,v.clear()}getChildren(){if(this._children||(0,o.k)(this.bbMin,this.bbMax)<=1)return this._children;const e=(0,o.a)((0,c.c)(),this.bbMin,this.bbMax,.5),t=this.primitiveIndices.length,r=new Uint8Array(t),i=new Array(8);for(let e=0;e<8;++e)i[e]=0;const{data:n,size:a,indices:s}=this.position;for(let o=0;o<t;++o){let t=0;const l=this._numIndexPerPrimitive*this.primitiveIndices[o];let c=a*s[l],d=n[c],u=n[c+1],h=n[c+2];for(let e=1;e<this._numIndexPerPrimitive;++e){c=a*s[l+e];const t=n[c],r=n[c+1],i=n[c+2];t<d&&(d=t),r<u&&(u=r),i<h&&(h=i)}d<e[0]&&(t|=1),u<e[1]&&(t|=2),h<e[2]&&(t|=4),r[o]=t,++i[t]}let l=0;for(let e=0;e<8;++e)i[e]>0&&++l;if(l<2)return;const d=new Array(8);for(let e=0;e<8;++e)d[e]=i[e]>0?new Uint32Array(i[e]):void 0;for(let e=0;e<8;++e)i[e]=0;for(let e=0;e<t;++e){const t=r[e];d[t][i[t]++]=this.primitiveIndices[e]}this._children=new Array;for(let e=0;e<8;++e)void 0!==d[e]&&this._children.push(new g(d[e],this._numIndexPerPrimitive,this.position));return this._children}static prune(){v.prune()}}const v=new l.P({deallocator:null}),_=(0,c.c)(),x=(0,c.c)(),T=(0,c.c)(),b=(0,c.c)();class E{constructor(e){this.channel=e,this.id=(0,m.g)()}}(0,c.c)(),new Float32Array(6);class S extends u.a{constructor(e,t,r=null,i=u.C.Mesh,o=null,a=-1){super(),this.material=e,this.mapPositions=r,this.type=i,this.objectAndLayerIdColor=o,this.edgeIndicesLength=a,this.visible=!0,this._attributes=new Map,this._boundingInfo=null;for(const[e,r]of t)this._attributes.set(e,{...r,indices:(0,n.c)(r.indices)}),e===p.V.POSITION&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._attributes.get(e).indices.length:this.edgeIndicesLength)}instantiate(e={}){const t=new S(e.material||this.material,[],this.mapPositions,this.type,this.objectAndLayerIdColor,this.edgeIndicesLength);return this._attributes.forEach(((e,r)=>{e.exclusive=!1,t._attributes.set(r,e)})),t._boundingInfo=this._boundingInfo,t.transformation=e.transformation||this.transformation,t}get attributes(){return this._attributes}getMutableAttribute(e){let t=this._attributes.get(e);return t&&!t.exclusive&&(t={...t,exclusive:!0,data:f(t.data)},this._attributes.set(e,t)),t}setAttributeData(e,t){const r=this._attributes.get(e);r&&this._attributes.set(e,{...r,exclusive:!0,data:t})}get indexCount(){const e=this._attributes.values().next().value.indices;return e?.length??0}get faceCount(){return this.indexCount/3}get boundingInfo(){return null==this._boundingInfo&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(e){return!!(this.type===u.C.Mesh?this._computeAttachmentOriginTriangles(e):this.type===u.C.Line?this._computeAttachmentOriginLines(e):this._computeAttachmentOriginPoints(e))&&(null!=this._transformation&&(0,o.g)(e,e,this._transformation),!0)}_computeAttachmentOriginTriangles(e){return function(e,t){if(!e)return!1;const{size:r,data:i,indices:n}=e;(0,o.s)(t,0,0,0),(0,o.s)(b,0,0,0);let a=0,s=0;for(let e=0;e<n.length-2;e+=3){const l=n[e]*r,c=n[e+1]*r,d=n[e+2]*r;(0,o.s)(_,i[l],i[l+1],i[l+2]),(0,o.s)(x,i[c],i[c+1],i[c+2]),(0,o.s)(T,i[d],i[d+1],i[d+2]);const u=(0,h.b)(_,x,T);u?((0,o.h)(_,_,x),(0,o.h)(_,_,T),(0,o.b)(_,_,1/3*u),(0,o.h)(t,t,_),a+=u):((0,o.h)(b,b,_),(0,o.h)(b,b,x),(0,o.h)(b,b,T),s+=3)}return!(0===s&&0===a||(0!==a?((0,o.b)(t,t,1/a),0):0===s||((0,o.b)(t,b,1/s),0)))}(this.attributes.get(p.V.POSITION),e)}_computeAttachmentOriginLines(e){const t=this.attributes.get(p.V.POSITION);return function(e,t,r){if(!e)return!1;(0,o.s)(r,0,0,0),(0,o.s)(b,0,0,0);let i=0,n=0;const{size:a,data:s,indices:l}=e,c=l.length-1,d=c+(t?2:0);for(let e=0;e<d;e+=2){const t=e<c?e+1:0,d=l[e<c?e:c]*a,u=l[t]*a;_[0]=s[d],_[1]=s[d+1],_[2]=s[d+2],x[0]=s[u],x[1]=s[u+1],x[2]=s[u+2],(0,o.b)(_,(0,o.h)(_,_,x),.5);const h=(0,o.G)(_,x);h>0?((0,o.h)(r,r,(0,o.b)(_,_,h)),i+=h):0===i&&((0,o.h)(b,b,_),n++)}return 0!==i?((0,o.b)(r,r,1/i),!0):0!==n&&((0,o.b)(r,b,1/n),!0)}(t,function(e,t){return!(!("isClosed"in e)||!e.isClosed)&&t.indices.length>2}(this.material.parameters,t),e)}_computeAttachmentOriginPoints(e){return function(e,t){if(!e)return!1;const{size:r,data:i,indices:n}=e;(0,o.s)(t,0,0,0);let a=-1,s=0;for(let e=0;e<n.length;e++){const o=n[e]*r;a!==o&&(t[0]+=i[o],t[1]+=i[o+1],t[2]+=i[o+2],s++),a=o}return s>1&&(0,o.b)(t,t,1/s),s>0}(this.attributes.get(p.V.POSITION),e)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const e=this.attributes.get(p.V.POSITION);if(!e||0===e.indices.length)return null;const t=this.type===u.C.Mesh?3:1;(0,d.a)(e.indices.length%t==0,"Indexing error: "+e.indices.length+" not divisible by "+t);const r=(0,n.a)(e.indices.length/t);return new g(r,t,e)}get transformation(){return this._transformation??i.I}set transformation(e){this._transformation=e&&e!==i.I?(0,i.a)(e):null}addHighlight(){const e=new E(s.O.Highlight);return this.highlights=function(e,t){return null==e&&(e=[]),e.push(t),e}(this.highlights,e),e}removeHighlight(e){this.highlights=function(e,t){if(null==e)return null;const r=e.filter((e=>e!==t));return 0===r.length?null:r}(this.highlights,e)}}},72434:(e,t,r)=>{var i;r.d(t,{R:()=>i}),function(e){e[e.ANIMATING=0]="ANIMATING",e[e.INTERACTING=1]="INTERACTING",e[e.IDLE=2]="IDLE"}(i||(i={}))},10638:(e,t,r)=>{r.d(t,{G:()=>u,T:()=>g,a:()=>p,c:()=>d,e:()=>c,g:()=>m,w:()=>l});var i=r(60991),o=r(76506),n=r(92143),a=r(30752);const s=!!(0,o.h)("enable-feature:webgl-debug");function l(){return s}function c(){return s}function d(e){if(l()){const t=e.getError();if(t){const r=function(e,t){switch(t){case e.INVALID_ENUM:return"Invalid Enum. An unacceptable value has been specified for an enumerated argument.";case e.INVALID_VALUE:return"Invalid Value. A numeric argument is out of range.";case e.INVALID_OPERATION:return"Invalid Operation. The specified command is not allowed for the current state.";case e.INVALID_FRAMEBUFFER_OPERATION:return"Invalid Framebuffer operation. The currently bound framebuffer is not framebuffer complete when trying to render to or to read from it.";case e.OUT_OF_MEMORY:return"Out of memory. Not enough memory is left to execute the command.";case e.CONTEXT_LOST_WEBGL:return"WebGL context has been lost";default:return"Unknown error"}}(e,t),o=(new Error).stack;n.L.getLogger("esri.views.webgl.checkWebGLError").error(new i.Z("webgl-error","WebGL error occurred",{message:r,stack:o}))}}}var u,h;function m(e){switch(e){case a.a.ALPHA:case a.a.LUMINANCE:case a.a.RED:case a.a.RED_INTEGER:case a.S.R8:case a.S.R8I:case a.S.R8UI:case a.S.R8_SNORM:case a.f.STENCIL_INDEX8:return 1;case a.a.LUMINANCE_ALPHA:case a.a.RG:case a.a.RG_INTEGER:case a.S.RGBA4:case a.S.R16F:case a.S.R16I:case a.S.R16UI:case a.S.RG8:case a.S.RG8I:case a.S.RG8UI:case a.S.RG8_SNORM:case a.S.RGB565:case a.S.RGB5_A1:case a.f.DEPTH_COMPONENT16:return 2;case a.a.DEPTH_COMPONENT:case a.a.RGB:case a.a.RGB_INTEGER:case a.S.RGB8:case a.S.RGB8I:case a.S.RGB8UI:case a.S.RGB8_SNORM:case a.S.SRGB8:case a.f.DEPTH_COMPONENT24:return 3;case a.a.DEPTH_STENCIL:case a.a.DEPTH24_STENCIL8:case a.a.RGBA:case a.a.RGBA_INTEGER:case a.S.RGBA8:case a.S.R32F:case a.S.R11F_G11F_B10F:case a.S.RG16F:case a.S.R32I:case a.S.R32UI:case a.S.RG16I:case a.S.RG16UI:case a.S.RGBA8I:case a.S.RGBA8UI:case a.S.RGBA8_SNORM:case a.S.SRGB8_ALPHA8:case a.S.RGB9_E5:case a.S.RGB10_A2UI:case a.S.RGB10_A2:case a.f.DEPTH_STENCIL:case a.f.DEPTH_COMPONENT32F:case a.f.DEPTH24_STENCIL8:return 4;case a.f.DEPTH32F_STENCIL8:return 5;case a.S.RGB16F:case a.S.RGB16I:case a.S.RGB16UI:return 6;case a.S.RG32F:case a.S.RG32I:case a.S.RG32UI:case a.S.RGBA16F:case a.S.RGBA16I:case a.S.RGBA16UI:return 8;case a.S.RGB32F:case a.S.RGB32I:case a.S.RGB32UI:return 12;case a.S.RGBA32F:case a.S.RGBA32I:case a.S.RGBA32UI:return 16;case a.o.COMPRESSED_RGB_S3TC_DXT1_EXT:case a.o.COMPRESSED_RGBA_S3TC_DXT1_EXT:return.5;case a.o.COMPRESSED_RGBA_S3TC_DXT3_EXT:case a.o.COMPRESSED_RGBA_S3TC_DXT5_EXT:return 1;case a.o.COMPRESSED_R11_EAC:case a.o.COMPRESSED_SIGNED_R11_EAC:case a.o.COMPRESSED_RGB8_ETC2:case a.o.COMPRESSED_SRGB8_ETC2:case a.o.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2:case a.o.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2:return.5;case a.o.COMPRESSED_RG11_EAC:case a.o.COMPRESSED_SIGNED_RG11_EAC:case a.o.COMPRESSED_RGBA8_ETC2_EAC:case a.o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:return 1}return 0}(h=u||(u={}))[h.Texture=0]="Texture",h[h.RenderBuffer=1]="RenderBuffer";class p{constructor(e=0,t=e){this.width=e,this.height=t,this.target=a.e.TEXTURE_2D,this.pixelFormat=a.a.RGBA,this.dataType=a.P.UNSIGNED_BYTE,this.samplingMode=a.T.LINEAR,this.wrapMode=a.b.REPEAT,this.maxAnisotropy=1,this.flipped=!1,this.hasMipmap=!1,this.isOpaque=!1,this.unpackAlignment=4,this.preMultiplyAlpha=!1,this.depth=1,this.isImmutable=!1}}class f extends p{constructor(e,t){switch(super(),this.context=e,Object.assign(this,t),this.internalFormat){case a.S.R16F:case a.S.R16I:case a.S.R16UI:case a.S.R32F:case a.S.R32I:case a.S.R32UI:case a.S.R8_SNORM:case a.S.R8:case a.S.R8I:case a.S.R8UI:this.pixelFormat=a.a.RED}}static validate(e,t){return new f(e,t)}}let g=class e{constructor(e,t=null,r=null){if(this.type=u.Texture,this._glName=null,this._samplingModeDirty=!1,this._wrapModeDirty=!1,this._wasImmutablyAllocated=!1,"context"in e)this._descriptor=e,r=t;else{const r=f.validate(e,t);if(!r)throw new i.Z("Texture descriptor invalid");this._descriptor=r}this._descriptor.target===a.e.TEXTURE_CUBE_MAP?this._setDataCubeMap(r):this.setData(r)}get glName(){return this._glName}get descriptor(){return this._descriptor}get usedMemory(){return(e=this._descriptor).width<=0||e.height<=0?0:Math.round(e.width*e.height*(e.hasMipmap?4/3:1)*(null==e.internalFormat?4:m(e.internalFormat)));var e}get isDirty(){return this._samplingModeDirty||this._wrapModeDirty}dispose(){this._glName&&this._descriptor.context.instanceCounter.decrement(a.R.Texture,this),this._descriptor.context.gl&&this._glName&&(this._descriptor.context.unbindTexture(this),this._descriptor.context.gl.deleteTexture(this._glName),this._glName=null)}release(){this.dispose()}resize(e,t){const r=this._descriptor;if(r.width!==e||r.height!==t){if(this._wasImmutablyAllocated)throw new i.Z("Immutable textures can't be resized!");r.width=e,r.height=t,this._descriptor.target===a.e.TEXTURE_CUBE_MAP?this._setDataCubeMap(null):this.setData(null)}}_setDataCubeMap(e=null){for(let t=a.e.TEXTURE_CUBE_MAP_POSITIVE_X;t<=a.e.TEXTURE_CUBE_MAP_NEGATIVE_Z;t++)this._setData(e,t)}setData(e){this._setData(e)}_setData(t,r){if(!this._descriptor.context?.gl)return;const o=this._descriptor.context.gl;d(o),this._glName||(this._glName=o.createTexture(),this._glName&&this._descriptor.context.instanceCounter.increment(a.R.Texture,this)),void 0===t&&(t=null);const n=this._descriptor,s=r??n.target,l=E(s);null===t&&(n.width=n.width||4,n.height=n.height||4,l&&(n.depth=n.depth??1));const c=this._descriptor.context.bindTexture(this,e.TEXTURE_UNIT_FOR_UPDATES);this._descriptor.context.setActiveTexture(e.TEXTURE_UNIT_FOR_UPDATES),v(n),this._configurePixelStorage(),d(o);const u=this._deriveInternalFormat();if(b(t)){let e="width"in t?t.width:t.codedWidth,r="height"in t?t.height:t.codedHeight;const i=1;t instanceof HTMLVideoElement&&(e=t.videoWidth,r=t.videoHeight),n.width&&n.height,l&&n.depth,n.isImmutable&&!this._wasImmutablyAllocated&&this._texStorage(s,u,n.hasMipmap,e,r,i),this._texImage(s,0,u,e,r,i,t),d(o),n.hasMipmap&&this.generateMipmap(),n.width||(n.width=e),n.height||(n.height=r),l&&!n.depth&&(n.depth=i)}else{const{width:e,height:r,depth:c}=n;if(null==e||null==r)throw new i.Z("Width and height must be specified!");if(l&&null==c)throw new i.Z("Depth must be specified!");if(n.isImmutable&&!this._wasImmutablyAllocated&&this._texStorage(s,u,n.hasMipmap,e,r,c),T(t)){const l=t.levels,d=S(s,e,r,c),h=Math.min(d-1,l.length-1);o.texParameteri(n.target,this._descriptor.context.gl.TEXTURE_MAX_LEVEL,h);const m=u;if(!(m in a.o))throw new i.Z("Attempting to use compressed data with an uncompressed format!");this._forEachMipmapLevel(((e,t,r,i)=>{const o=l[Math.min(e,l.length-1)];this._compressedTexImage(s,e,m,t,r,i,o)}),h)}else this._texImage(s,0,u,e,r,c,t),d(o),n.hasMipmap&&this.generateMipmap()}_(o,this._descriptor),x(o,this._descriptor),function(e,t){const r=e.capabilities.textureFilterAnisotropic;r&&e.gl.texParameterf(t.target,r.TEXTURE_MAX_ANISOTROPY,t.maxAnisotropy??1)}(this._descriptor.context,this._descriptor),d(o),this._descriptor.context.bindTexture(c,e.TEXTURE_UNIT_FOR_UPDATES)}updateData(t,r,o,n,a,s,l=0){s||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const c=this._descriptor,d=this._deriveInternalFormat(),{context:u,pixelFormat:h,dataType:m,target:p,isImmutable:f}=c;if(f&&!this._wasImmutablyAllocated)throw new i.Z("Cannot update immutable texture before allocation!");const g=u.bindTexture(this,e.TEXTURE_UNIT_FOR_UPDATES,!0);(r<0||o<0||n>c.width||a>c.height||r+n>c.width||o+a>c.height)&&console.error("An attempt to update out of bounds of the texture!"),this._configurePixelStorage();const{gl:v}=u;l&&v.pixelStorei(v.UNPACK_SKIP_ROWS,l),b(s)?v.texSubImage2D(p,t,r,o,n,a,h,m,s):T(s)?v.compressedTexSubImage2D(p,t,r,o,n,a,d,s.levels[t]):v.texSubImage2D(p,t,r,o,n,a,h,m,s),l&&v.pixelStorei(v.UNPACK_SKIP_ROWS,0),u.bindTexture(g,e.TEXTURE_UNIT_FOR_UPDATES)}updateData3D(t,r,o,n,a,s,l,c){c||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const d=this._descriptor,u=this._deriveInternalFormat(),{context:h,pixelFormat:m,dataType:p,isImmutable:f,target:g}=d;if(f&&!this._wasImmutablyAllocated)throw new i.Z("Cannot update immutable texture before allocation!");E(g)||console.warn("Attempting to set 3D texture data on a non-3D texture");const v=h.bindTexture(this,e.TEXTURE_UNIT_FOR_UPDATES);h.setActiveTexture(e.TEXTURE_UNIT_FOR_UPDATES),(r<0||o<0||n<0||a>d.width||s>d.height||l>d.depth||r+a>d.width||o+s>d.height||n+l>d.depth)&&console.error("An attempt to update out of bounds of the texture!"),this._configurePixelStorage();const{gl:_}=h;if(T(c))c=c.levels[t],_.compressedTexSubImage3D(g,t,r,o,n,a,s,l,u,c);else{const e=c;_.texSubImage3D(g,t,r,o,n,a,s,l,m,p,e)}h.bindTexture(v,e.TEXTURE_UNIT_FOR_UPDATES)}generateMipmap(){const t=this._descriptor;if(!t.hasMipmap){if(this._wasImmutablyAllocated)throw new i.Z("Cannot add mipmaps to immutable texture after allocation");t.hasMipmap=!0,this._samplingModeDirty=!0,v(t)}t.samplingMode===a.T.LINEAR?(this._samplingModeDirty=!0,t.samplingMode=a.T.LINEAR_MIPMAP_NEAREST):t.samplingMode===a.T.NEAREST&&(this._samplingModeDirty=!0,t.samplingMode=a.T.NEAREST_MIPMAP_NEAREST);const r=this._descriptor.context.bindTexture(this,e.TEXTURE_UNIT_FOR_UPDATES);this._descriptor.context.setActiveTexture(e.TEXTURE_UNIT_FOR_UPDATES),this._descriptor.context.gl.generateMipmap(t.target),this._descriptor.context.bindTexture(r,e.TEXTURE_UNIT_FOR_UPDATES)}setSamplingMode(e){e!==this._descriptor.samplingMode&&(this._descriptor.samplingMode=e,this._samplingModeDirty=!0)}setWrapMode(e){e!==this._descriptor.wrapMode&&(this._descriptor.wrapMode=e,v(this._descriptor),this._wrapModeDirty=!0)}applyChanges(){const e=this._descriptor,t=e.context.gl;this._samplingModeDirty&&(_(t,e),this._samplingModeDirty=!1),this._wrapModeDirty&&(x(t,e),this._wrapModeDirty=!1)}_deriveInternalFormat(){if(null!=this._descriptor.internalFormat)return this._descriptor.internalFormat===a.a.DEPTH_STENCIL&&(this._descriptor.internalFormat=a.a.DEPTH24_STENCIL8),this._descriptor.internalFormat;switch(this._descriptor.dataType){case a.P.FLOAT:switch(this._descriptor.pixelFormat){case a.a.RGBA:return this._descriptor.internalFormat=a.S.RGBA32F;case a.a.RGB:return this._descriptor.internalFormat=a.S.RGB32F;default:throw new i.Z("Unable to derive format")}case a.P.UNSIGNED_BYTE:switch(this._descriptor.pixelFormat){case a.a.RGBA:return this._descriptor.internalFormat=a.S.RGBA8;case a.a.RGB:return this._descriptor.internalFormat=a.S.RGB8}}return this._descriptor.internalFormat=this._descriptor.pixelFormat===a.a.DEPTH_STENCIL?a.a.DEPTH24_STENCIL8:this._descriptor.pixelFormat}_configurePixelStorage(){const e=this._descriptor.context.gl,{unpackAlignment:t,flipped:r,preMultiplyAlpha:i}=this._descriptor;e.pixelStorei(e.UNPACK_ALIGNMENT,t),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,r?1:0),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,i?1:0)}_texStorage(e,t,r,o,n,s){const{gl:l}=this._descriptor.context;if(!(t in a.S))throw new i.Z("Immutable textures must have a sized internal format");if(!this._descriptor.isImmutable)return;const c=r?S(e,o,n,s):1;if(E(e)){if(null==s)throw new i.Z("Missing depth dimension for 3D texture upload");l.texStorage3D(e,c,t,o,n,s)}else l.texStorage2D(e,c,t,o,n);this._wasImmutablyAllocated=!0}_texImage(e,t,r,o,n,a,s){const l=this._descriptor.context.gl,c=E(e),{isImmutable:d,pixelFormat:u,dataType:h}=this._descriptor;if(d){if(null!=s){const r=s;if(c){if(null==a)throw new i.Z("Missing depth dimension for 3D texture upload");l.texSubImage3D(e,t,0,0,0,o,n,a,u,h,r)}else l.texSubImage2D(e,t,0,0,o,n,u,h,r)}}else{const d=s;if(c){if(null==a)throw new i.Z("Missing depth dimension for 3D texture upload");l.texImage3D(e,t,r,o,n,a,0,u,h,d)}else l.texImage2D(e,t,r,o,n,0,u,h,d)}}_compressedTexImage(e,t,r,o,n,a,s){const l=this._descriptor.context.gl,c=E(e);if(this._descriptor.isImmutable){if(null!=s)if(c){if(null==a)throw new i.Z("Missing depth dimension for 3D texture upload");l.compressedTexSubImage3D(e,t,0,0,0,o,n,a,r,s)}else l.compressedTexSubImage2D(e,t,0,0,o,n,r,s)}else if(c){if(null==a)throw new i.Z("Missing depth dimension for 3D texture upload");l.compressedTexImage3D(e,t,r,o,n,a,0,s)}else l.compressedTexImage2D(e,t,r,o,n,0,s)}_forEachMipmapLevel(e,t=1/0){let{width:r,height:o,depth:n,hasMipmap:s,target:l}=this._descriptor;const c=l===a.e.TEXTURE_3D;if(null==r||null==o||c&&null==n)throw new i.Z("Missing texture dimensions for mipmap calculation");for(let i=0;e(i,r,o,n),s&&(1!==r||1!==o||c&&1!==n)&&!(i>=t);++i)r=Math.max(1,r>>1),o=Math.max(1,o>>1),c&&(n=Math.max(1,n>>1))}};function v(e){(null!=e.width&&e.width<0||null!=e.height&&e.height<0||null!=e.depth&&e.depth<0)&&console.error("Negative dimension parameters are not allowed!")}function _(e,t){let r=t.samplingMode,i=t.samplingMode;r===a.T.LINEAR_MIPMAP_NEAREST||r===a.T.LINEAR_MIPMAP_LINEAR?(r=a.T.LINEAR,t.hasMipmap||(i=a.T.LINEAR)):r!==a.T.NEAREST_MIPMAP_NEAREST&&r!==a.T.NEAREST_MIPMAP_LINEAR||(r=a.T.NEAREST,t.hasMipmap||(i=a.T.NEAREST)),e.texParameteri(t.target,e.TEXTURE_MAG_FILTER,r),e.texParameteri(t.target,e.TEXTURE_MIN_FILTER,i)}function x(e,t){"number"==typeof t.wrapMode?(e.texParameteri(t.target,e.TEXTURE_WRAP_S,t.wrapMode),e.texParameteri(t.target,e.TEXTURE_WRAP_T,t.wrapMode)):(e.texParameteri(t.target,e.TEXTURE_WRAP_S,t.wrapMode.s),e.texParameteri(t.target,e.TEXTURE_WRAP_T,t.wrapMode.t))}function T(e){return null!=e&&"type"in e&&"compressed"===e.type}function b(e){return null!=e&&!T(e)&&!function(e){return null!=e&&"byteLength"in e}(e)}function E(e){return e===a.e.TEXTURE_3D||e===a.e.TEXTURE_2D_ARRAY}function S(e,t,r,i=1){let o=Math.max(t,r);return e===a.e.TEXTURE_3D&&(o=Math.max(o,i)),Math.round(Math.log(o)/Math.LN2)+1}g.TEXTURE_UNIT_FOR_UPDATES=0},10738:(e,t,r)=>{r.d(t,{V:()=>o});var i=r(60991);let o=class e{constructor(e,t,r=""){this.major=e,this.minor=t,this._context=r}lessThan(e,t){return this.major<e||e===this.major&&this.minor<t}since(e,t){return!this.lessThan(e,t)}validate(e){if(this.major!==e.major){const t=this._context&&this._context+":",r=this._context&&this._context+" ";throw new i.Z(t+"unsupported-version",`Required major ${r}version is '${this.major}', but got '\${version.major}.\${version.minor}'`,{version:e})}}clone(){return new e(this.major,this.minor,this._context)}static parse(t,r=""){const[o,n]=t.split("."),a=/^\s*\d+\s*$/;if(!o?.match||!a.test(o))throw new i.Z((r&&r+":")+"invalid-version","Expected major version to be a number, but got '${version}'",{version:t});if(!n?.match||!a.test(n))throw new i.Z((r&&r+":")+"invalid-version","Expected minor version to be a number, but got '${version}'",{version:t});const s=parseInt(o,10),l=parseInt(n,10);return new e(s,l,r)}}},33417:(e,t,r)=>{var i,o,n,a,s,l,c,d,u;r.d(t,{A:()=>c,C:()=>i,D:()=>d,O:()=>l,R:()=>a,S:()=>s,T:()=>u,a:()=>o}),function(e){e[e.None=0]="None",e[e.Front=1]="Front",e[e.Back=2]="Back",e[e.COUNT=3]="COUNT"}(i||(i={})),function(e){e[e.Less=0]="Less",e[e.Lequal=1]="Lequal",e[e.COUNT=2]="COUNT"}(o||(o={})),function(e){e[e.BACKGROUND=0]="BACKGROUND",e[e.UPDATE=1]="UPDATE"}(n||(n={})),function(e){e[e.NOT_LOADED=0]="NOT_LOADED",e[e.LOADING=1]="LOADING",e[e.LOADED=2]="LOADED"}(a||(a={})),function(e){e[e.IntegratedMeshMaskExcluded=1]="IntegratedMeshMaskExcluded",e[e.OutlineVisualElementMask=2]="OutlineVisualElementMask"}(s||(s={})),function(e){e[e.Highlight=0]="Highlight",e[e.MaskOccludee=1]="MaskOccludee",e[e.COUNT=2]="COUNT"}(l||(l={})),function(e){e[e.Blend=0]="Blend",e[e.Opaque=1]="Opaque",e[e.Mask=2]="Mask",e[e.MaskBlend=3]="MaskBlend",e[e.COUNT=4]="COUNT"}(c||(c={})),function(e){e[e.OFF=0]="OFF",e[e.ON=1]="ON"}(d||(d={})),function(e){e.DDS_ENCODING="image/vnd-ms.dds",e.KTX2_ENCODING="image/ktx2",e.BASIS_ENCODING="image/x.basis"}(u||(u={}))},49500:(e,t,r)=>{function i(e){return e=e||globalThis.location.hostname,c.some((t=>null!=e?.match(t)))}function o(e,t){return e&&(t=t||globalThis.location.hostname)?null!=t.match(n)||null!=t.match(s)?e.replace("static.arcgis.com","staticdev.arcgis.com"):null!=t.match(a)||null!=t.match(l)?e.replace("static.arcgis.com","staticqa.arcgis.com"):e:e}r.d(t,{a:()=>o,i:()=>i});const n=/^devext.arcgis.com$/,a=/^qaext.arcgis.com$/,s=/^[\w-]*\.mapsdevext.arcgis.com$/,l=/^[\w-]*\.mapsqa.arcgis.com$/,c=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,n,a,/^jsapps.esri.com$/,s,l]},46283:(e,t,r)=>{function i(e,t){const r=e.length;for(let i=0;i<r;++i)n[0]=e[i],t[i]=n[0];return t}function o(e,t){const r=e.length;for(let i=0;i<r;++i)n[0]=e[i],n[1]=e[i]-n[0],t[i]=n[1];return t}r.d(t,{a:()=>i,b:()=>o});const n=new Float32Array(2)},94446:(e,t,r)=>{r.d(t,{b:()=>c,c:()=>s,f:()=>l});var i=r(82426),o=r(55633),n=r(72836),a=r(66106);function s(e){return e?{origin:(0,a.a)(e.origin),vector:(0,a.a)(e.vector)}:{origin:(0,a.c)(),vector:(0,a.c)()}}function l(e,t,r=s()){return(0,n.p)(r.origin,e),(0,n.c)(r.vector,t,e),r}function c(e,t,r){return function(e,t,r,a,s){const{vector:l,origin:c}=e,d=(0,n.c)(o.s.get(),t,c),u=(0,n.d)(l,d)/(0,n.j)(l);return(0,n.b)(s,l,(0,i.c)(u,0,1)),(0,n.h)(s,s,e.origin)}(e,t,0,0,r)}(0,a.c)(),(0,a.c)(),new o.O((()=>s()))},16012:(e,t,r)=>{r.r(t),r.d(t,{C:()=>Io,D:()=>Ro,E:()=>Yo,F:()=>No,M:()=>cn,N:()=>go,R:()=>mo,S:()=>Wo,a:()=>_o,b:()=>xo,c:()=>_n,d:()=>To,e:()=>hn,f:()=>Vn,g:()=>Mn,h:()=>tn,i:()=>qo,j:()=>$o,k:()=>Xo,l:()=>po,m:()=>co,n:()=>Nn,o:()=>Qo,p:()=>So,q:()=>Co,r:()=>Mo,s:()=>en,t:()=>fo,u:()=>vo,v:()=>jn});var i=r(49500),o=r(26923),n=r(16912),a=r(65775),s=r(57532),l=r(72836),c=r(66106),d=r(53326),u=r(76506),h=r(33417),m=r(29768),p=r(72119);const f=class{};function g(e,...t){let r="";for(let i=0;i<t.length;i++)r+=e[i]+t[i];return r+=e[e.length-1],r}var v;(v=g||(g={})).int=function(e){return Math.round(e).toString()},v.float=function(e){return e.toPrecision(8)};class _ extends f{constructor(){super(),this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits?this._parameterBits.map((()=>0)):[],this._parameterNames||(this._parameterNames=[])}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const e=this._parameterNames,t={key:this.key};for(const r of e)t[r]=this[r];return t}}function x(e={}){return(t,r)=>{if(t._parameterNames=t._parameterNames??[],t._parameterNames.push(r),null!=e.constValue)Object.defineProperty(t,r,{get:()=>e.constValue});else{const i=t._parameterNames.length-1,o=e.count||2,n=Math.ceil(Math.log2(o)),a=t._parameterBits??[0];let s=0;for(;a[s]+n>16;)s++,s>=a.length&&a.push(0);t._parameterBits=a;const l=a[s],c=(1<<n)-1<<l;a[s]+=n,Object.defineProperty(t,r,{get(){return this[i]},set(e){if(this[i]!==e&&(this[i]=e,this._keyDirty=!0,this._parameterBits[s]=this._parameterBits[s]&~c|+e<<l&c,"number"!=typeof e&&"boolean"!=typeof e))throw new Error("Configuration value for "+r+" must be boolean or number, got "+typeof e)}})}}}var T=r(99520),b=r(46283),E=r(82426),S=(r(85557),r(21972)),A=r(34250),R=r(92143),C=r(17533);let y=class extends S.Z{constructor(){super(...arguments),this.SCENEVIEW_HITTEST_RETURN_INTERSECTOR=!1,this.DECONFLICTOR_SHOW_VISIBLE=!1,this.DECONFLICTOR_SHOW_INVISIBLE=!1,this.DECONFLICTOR_SHOW_GRID=!1,this.LABELS_SHOW_BORDER=!1,this.TEXT_SHOW_BASELINE=!1,this.TEXT_SHOW_BORDER=!1,this.OVERLAY_DRAW_DEBUG_TEXTURE=!1,this.OVERLAY_SHOW_CENTER=!1,this.SHOW_POI=!1,this.TESTS_DISABLE_OPTIMIZATIONS=!1,this.TESTS_DISABLE_FAST_UPDATES=!1,this.DRAW_MESH_GEOMETRY_NORMALS=!1,this.FEATURE_TILE_FETCH_SHOW_TILES=!1,this.FEATURE_TILE_TREE_SHOW_TILES=!1,this.TERRAIN_TILE_TREE_SHOW_TILES=!1,this.I3S_TREE_SHOW_TILES=!1,this.I3S_SHOW_MODIFICATIONS=!1,this.LOD_INSTANCE_RENDERER_DISABLE_UPDATES=!1,this.LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL=!1,this.EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES=!1,this.LINE_WIREFRAMES=!1}};(0,m._)([(0,A.Cb)()],y.prototype,"SCENEVIEW_HITTEST_RETURN_INTERSECTOR",void 0),(0,m._)([(0,A.Cb)()],y.prototype,"DECONFLICTOR_SHOW_VISIBLE",void 0),(0,m._)([(0,A.Cb)()],y.prototype,"DECONFLICTOR_SHOW_INVISIBLE",void 0),(0,m._)([(0,A.Cb)()],y.prototype,"DECONFLICTOR_SHOW_GRID",void 0),(0,m._)([(0,A.Cb)()],y.prototype,"LABELS_SHOW_BORDER",void 0),(0,m._)([(0,A.Cb)()],y.prototype,"TEXT_SHOW_BASELINE",void 0),(0,m._)([(0,A.Cb)()],y.prototype,"TEXT_SHOW_BORDER",void 0),(0,m._)([(0,A.Cb)()],y.prototype,"OVERLAY_DRAW_DEBUG_TEXTURE",void 0),(0,m._)([(0,A.Cb)()],y.prototype,"OVERLAY_SHOW_CENTER",void 0),(0,m._)([(0,A.Cb)()],y.prototype,"SHOW_POI",void 0),(0,m._)([(0,A.Cb)()],y.prototype,"TESTS_DISABLE_OPTIMIZATIONS",void 0),(0,m._)([(0,A.Cb)()],y.prototype,"TESTS_DISABLE_FAST_UPDATES",void 0),(0,m._)([(0,A.Cb)()],y.prototype,"DRAW_MESH_GEOMETRY_NORMALS",void 0),(0,m._)([(0,A.Cb)()],y.prototype,"FEATURE_TILE_FETCH_SHOW_TILES",void 0),(0,m._)([(0,A.Cb)()],y.prototype,"FEATURE_TILE_TREE_SHOW_TILES",void 0),(0,m._)([(0,A.Cb)()],y.prototype,"TERRAIN_TILE_TREE_SHOW_TILES",void 0),(0,m._)([(0,A.Cb)()],y.prototype,"I3S_TREE_SHOW_TILES",void 0),(0,m._)([(0,A.Cb)()],y.prototype,"I3S_SHOW_MODIFICATIONS",void 0),(0,m._)([(0,A.Cb)()],y.prototype,"LOD_INSTANCE_RENDERER_DISABLE_UPDATES",void 0),(0,m._)([(0,A.Cb)()],y.prototype,"LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL",void 0),(0,m._)([(0,A.Cb)()],y.prototype,"EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES",void 0),(0,m._)([(0,A.Cb)()],y.prototype,"LINE_WIREFRAMES",void 0),y=(0,m._)([(0,C.j)("esri.views.3d.support.DebugFlags")],y),new y;var M=r(6906),w=r(87583),O=r(3808),I=r(62348);const N=new Map([[T.V.POSITION,0],[T.V.NORMAL,1],[T.V.NORMALCOMPRESSED,1],[T.V.UV0,2],[T.V.COLOR,3],[T.V.COLORFEATUREATTRIBUTE,3],[T.V.SIZE,4],[T.V.TANGENT,4],[T.V.CENTEROFFSETANDDISTANCE,5],[T.V.SYMBOLCOLOR,5],[T.V.FEATUREATTRIBUTE,6],[T.V.INSTANCEFEATUREATTRIBUTE,6],[T.V.INSTANCECOLOR,7],[T.V.OBJECTANDLAYERIDCOLOR,7],[T.V.INSTANCEOBJECTANDLAYERIDCOLOR,7],[T.V.INSTANCEMODEL,8],[T.V.INSTANCEMODELNORMAL,12],[T.V.INSTANCEMODELORIGINHI,11],[T.V.INSTANCEMODELORIGINLO,15]]);(0,E.d)(10),(0,E.d)(12),(0,E.d)(70),(0,E.d)(40);const P={scale:0,factor:0,minScaleFactor:0},L=(0,d.c)();function D(e,t,r,i,o,n){if(e.visible)if(e.boundingInfo){(0,I.a)(e.type===w.C.Mesh);const a=t.tolerance;B(e.boundingInfo,r,i,a,o,n)}else{const t=e.attributes.get(T.V.POSITION),a=t.indices;V(r,i,0,a.length/3,a,t,void 0,o,n)}}const F=(0,c.c)();function B(e,t,r,i,o,n){if(null==e)return;const a=function(e,t,r){return(0,l.s)(r,1/(t[0]-e[0]),1/(t[1]-e[1]),1/(t[2]-e[2]))}(t,r,F);if((0,d.u)(L,e.bbMin),(0,d.v)(L,e.bbMax),null!=o&&o.applyToAabb(L),function(e,t,r,i){return function(e,t,r,i,o){const n=(e[0]-i-t[0])*r[0],a=(e[3]+i-t[0])*r[0];let s=Math.min(n,a),l=Math.max(n,a);const c=(e[1]-i-t[1])*r[1],d=(e[4]+i-t[1])*r[1];if(l=Math.min(l,Math.max(c,d)),l<0)return!1;if(s=Math.max(s,Math.min(c,d)),s>l)return!1;const u=(e[2]-i-t[2])*r[2],h=(e[5]+i-t[2])*r[2];return l=Math.min(l,Math.max(u,h)),!(l<0)&&(s=Math.max(s,Math.min(u,h)),!(s>l)&&s<1/0)}(e,t,r,i)}(L,t,a,i)){const{primitiveIndices:a,position:s}=e,l=a?a.length:s.indices.length/3;if(l>q){const a=e.getChildren();if(void 0!==a){for(const e of a)B(e,t,r,i,o,n);return}}V(t,r,0,l,s.indices,s,a,o,n)}}const G=(0,c.c)();function V(e,t,r,i,o,n,a,s,l){if(a)return function(e,t,r,i,o,n,a,s,l){const{data:c,stride:d}=n,u=e[0],h=e[1],m=e[2],p=t[0]-u,f=t[1]-h,g=t[2]-m;for(let e=r;e<i;++e){const t=a[e];let r=3*t,i=d*o[r++],n=c[i++],v=c[i++],_=c[i];i=d*o[r++];let x=c[i++],T=c[i++],b=c[i];i=d*o[r];let E=c[i++],S=c[i++],A=c[i];null!=s&&([n,v,_]=s.applyToVertex(n,v,_,e),[x,T,b]=s.applyToVertex(x,T,b,e),[E,S,A]=s.applyToVertex(E,S,A,e));const R=x-n,C=T-v,y=b-_,M=E-n,w=S-v,O=A-_,I=f*O-w*g,N=g*M-O*p,P=p*w-M*f,L=R*I+C*N+y*P;if(Math.abs(L)<=Number.EPSILON)continue;const D=u-n,F=h-v,B=m-_,V=D*I+F*N+B*P;if(L>0){if(V<0||V>L)continue}else if(V>0||V<L)continue;const U=F*y-C*B,z=B*R-y*D,j=D*C-R*F,W=p*U+f*z+g*j;if(L>0){if(W<0||V+W>L)continue}else if(W>0||V+W<L)continue;const k=(M*U+w*z+O*j)/L;k>=0&&l(k,H(R,C,y,M,w,O,G),t,!1)}}(e,t,r,i,o,n,a,s,l);const{data:c,stride:d}=n,u=e[0],h=e[1],m=e[2],p=t[0]-u,f=t[1]-h,g=t[2]-m;for(let e=r,t=3*r;e<i;++e){let r=d*o[t++],i=c[r++],n=c[r++],a=c[r];r=d*o[t++];let v=c[r++],_=c[r++],x=c[r];r=d*o[t++];let T=c[r++],b=c[r++],E=c[r];null!=s&&([i,n,a]=s.applyToVertex(i,n,a,e),[v,_,x]=s.applyToVertex(v,_,x,e),[T,b,E]=s.applyToVertex(T,b,E,e));const S=v-i,A=_-n,R=x-a,C=T-i,y=b-n,M=E-a,w=f*M-y*g,O=g*C-M*p,I=p*y-C*f,N=S*w+A*O+R*I;if(Math.abs(N)<=Number.EPSILON)continue;const P=u-i,L=h-n,D=m-a,F=P*w+L*O+D*I;if(N>0){if(F<0||F>N)continue}else if(F>0||F<N)continue;const B=L*R-A*D,V=D*S-R*P,U=P*A-S*L,z=p*B+f*V+g*U;if(N>0){if(z<0||F+z>N)continue}else if(z>0||F+z<N)continue;const j=(C*B+y*V+M*U)/N;j>=0&&l(j,H(S,A,R,C,y,M,G),e,!1)}}const U=(0,c.c)(),z=(0,c.c)();function H(e,t,r,i,o,n,a){return(0,l.s)(U,e,t,r),(0,l.s)(z,i,o,n),(0,l.e)(a,U,z),(0,l.n)(a,a),a}function j(e,t){const r=t?j(t):{};for(const t in e){let i=e[t];i?.forEach&&(i=W(i)),null==i&&t in r||(r[t]=i)}return r}function W(e){const t=[];return e.forEach((e=>t.push(e))),t}const k={multiply:1,ignore:2,replace:3,tint:4},q=1e3;class $ extends w.a{constructor(e,t){super(),this.type=w.C.Material,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._vertexAttributeLocations=N,this._pp0=(0,c.f)(0,0,1),this._pp1=(0,c.f)(0,0,0),this._parameters=j(e,t),this.validateParameters(this._parameters)}get parameters(){return this._parameters}update(e){return!1}setParameters(e,t=!0){(function(e,t){let r=!1;for(const i in t){const o=t[i];void 0!==o&&(Array.isArray(o)?null===e[i]?(e[i]=o.slice(),r=!0):(0,u.C)(e[i],o)&&(r=!0):e[i]!==o&&(r=!0,e[i]=o))}return r})(this._parameters,e)&&(this.validateParameters(this._parameters),t&&this.parametersChanged())}validateParameters(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged())}shouldRender(e){return this.isVisible()&&this.isVisibleForOutput(e.output)&&(!this.parameters.isDecoration||e.bindParameters.decorations===h.D.ON)&&0!=(this.parameters.renderOccluded&e.renderOccludedMask)}isVisibleForOutput(e){return!0}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){this.repository?.materialChanged(this)}queryRenderOccludedState(e){return this.isVisible()&&this.parameters.renderOccluded===e}intersectDraped(e,t,r,i,o,n){return this._pp0[0]=this._pp1[0]=i[0],this._pp0[1]=this._pp1[1]=i[1],this.intersect(e,t,r,this._pp0,this._pp1,o)}}var X;!function(e){e[e.None=0]="None",e[e.Occlude=1]="Occlude",e[e.Transparent=2]="Transparent",e[e.OccludeAndTransparent=4]="OccludeAndTransparent",e[e.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",e[e.Opaque=16]="Opaque"}(X||(X={}));var Y=r(60991),Z=r(75067),J=r(71252),K=r(50406),Q=r(32101),ee=r(82058);async function te(e,t){const{data:r}=await(0,ee.Z)(e,{responseType:"image",...t});return r}var re,ie,oe,ne,ae,se=r(73173),le=r(30752),ce=r(10638);function de(e,t=!1){return e<=u.n?t?new Array(e).fill(0):new Array(e):new Float32Array(e)}function ue(e){return e===re.Shadow||e===re.ShadowHighlight||e===re.ShadowExcludeHighlight}function he(e){return function(e){return function(e){return function(e){return e===re.Color||e===re.Alpha}(e)||function(e){return e===re.Highlight||e===re.ObjectAndLayerIdColor}(e)}(e)||e===re.LinearDepth}(e)||e===re.Normal}(ae=re||(re={}))[ae.Color=0]="Color",ae[ae.LinearDepth=1]="LinearDepth",ae[ae.Depth=2]="Depth",ae[ae.Normal=3]="Normal",ae[ae.Shadow=4]="Shadow",ae[ae.ShadowHighlight=5]="ShadowHighlight",ae[ae.ShadowExcludeHighlight=6]="ShadowExcludeHighlight",ae[ae.Highlight=7]="Highlight",ae[ae.Alpha=8]="Alpha",ae[ae.ObjectAndLayerIdColor=9]="ObjectAndLayerIdColor",ae[ae.CompositeColor=10]="CompositeColor",ae[ae.COUNT=11]="COUNT";class me{constructor(e){this._material=e.material,this._techniqueRepository=e.techniqueRep,this._output=e.output}dispose(){this._techniqueRepository.release(this._technique)}get technique(){return this._technique}get _stippleTextureRepository(){return this._techniqueRepository.constructionContext.stippleTextureRepository}get _markerTextureRepository(){return this._techniqueRepository.constructionContext.markerTextureRepository}ensureTechnique(e,t){return this._technique=this._techniqueRepository.releaseAndAcquire(e,this._material.getConfiguration(this._output,t),this._technique),this._technique}ensureResources(e){return h.R.LOADED}}function pe({code:e},t){t.doublePrecisionRequiresObfuscation?e.add(g`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`):e.add(g`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}!function(e){e[e.INTEGRATED_MESH=0]="INTEGRATED_MESH",e[e.OPAQUE_TERRAIN=1]="OPAQUE_TERRAIN",e[e.OPAQUE_MATERIAL=2]="OPAQUE_MATERIAL",e[e.OPAQUE_NO_SSAO_DEPTH=3]="OPAQUE_NO_SSAO_DEPTH",e[e.TRANSPARENT_MATERIAL=4]="TRANSPARENT_MATERIAL",e[e.TRANSPARENT_NO_SSAO_DEPTH=5]="TRANSPARENT_NO_SSAO_DEPTH",e[e.TRANSPARENT_TERRAIN=6]="TRANSPARENT_TERRAIN",e[e.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL=7]="TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL",e[e.OCCLUDED_TERRAIN=8]="OCCLUDED_TERRAIN",e[e.OCCLUDER_MATERIAL=9]="OCCLUDER_MATERIAL",e[e.TRANSPARENT_OCCLUDER_MATERIAL=10]="TRANSPARENT_OCCLUDER_MATERIAL",e[e.OCCLUSION_PIXELS=11]="OCCLUSION_PIXELS",e[e.ANTIALIASING=12]="ANTIALIASING",e[e.COMPOSITE=13]="COMPOSITE",e[e.BLIT=14]="BLIT",e[e.SSAO=15]="SSAO",e[e.HIGHLIGHT=16]="HIGHLIGHT",e[e.SHADOW_HIGHLIGHT=17]="SHADOW_HIGHLIGHT",e[e.ENVIRONMENT_OPAQUE=18]="ENVIRONMENT_OPAQUE",e[e.ENVIRONMENT_TRANSPARENT=19]="ENVIRONMENT_TRANSPARENT",e[e.LASERLINES=20]="LASERLINES",e[e.LASERLINES_CONTRAST_CONTROL=21]="LASERLINES_CONTRAST_CONTROL",e[e.HUD_MATERIAL=22]="HUD_MATERIAL",e[e.LABEL_MATERIAL=23]="LABEL_MATERIAL",e[e.LINE_CALLOUTS=24]="LINE_CALLOUTS",e[e.LINE_CALLOUTS_HUD_DEPTH=25]="LINE_CALLOUTS_HUD_DEPTH",e[e.DRAPED_MATERIAL=26]="DRAPED_MATERIAL",e[e.DRAPED_WATER=27]="DRAPED_WATER",e[e.VOXEL=28]="VOXEL",e[e.MAX_SLOTS=29]="MAX_SLOTS"}(ie||(ie={})),function(e){e[e.Undefined=0]="Undefined",e[e.DefinedSize=1]="DefinedSize",e[e.DefinedScale=2]="DefinedScale"}(oe||(oe={})),function(e){e[e.Undefined=0]="Undefined",e[e.DefinedAngle=1]="DefinedAngle"}(ne||(ne={})),(0,s.c)(),(0,c.c)(),(0,s.c)();class fe{constructor(e,t,r,i,o=null){if(this.name=e,this.type=t,this.arraySize=o,this.bind={[p.B.Pass]:null,[p.B.Draw]:null},i)switch(r){case p.B.Pass:this.bind[p.B.Pass]=i;break;case p.B.Draw:this.bind[p.B.Draw]=i}}equals(e){return this.type===e.type&&this.name===e.name&&this.arraySize===e.arraySize}}class ge extends fe{constructor(e,t){super(e,"vec3",p.B.Draw,((r,i,o,n)=>r.setUniform3fv(e,t(i,o,n))))}}class ve extends fe{constructor(e,t){super(e,"vec3",p.B.Pass,((r,i,o)=>r.setUniform3fv(e,t(i,o))))}}class _e extends fe{constructor(e,t){super(e,"float",p.B.Pass,((r,i,o)=>r.setUniform1f(e,t(i,o))))}}class xe extends fe{constructor(e,t){super(e,"mat4",p.B.Draw,((r,i,o)=>r.setUniformMatrix4fv(e,t(i,o))))}}class Te extends fe{constructor(e,t){super(e,"mat4",p.B.Pass,((r,i,o)=>r.setUniformMatrix4fv(e,t(i,o))))}}function be(e,t){t.instancedDoublePrecision?e.constants.add("cameraPosition","vec3",c.Z):e.uniforms.add(new ge("cameraPosition",((e,t)=>(0,l.s)(Ae,t.camera.viewInverseTransposeMatrix[3]-e.origin[0],t.camera.viewInverseTransposeMatrix[7]-e.origin[1],t.camera.viewInverseTransposeMatrix[11]-e.origin[2]))))}function Ee(e,t){if(!t.instancedDoublePrecision)return void e.uniforms.add(new Te("proj",((e,t)=>t.camera.projectionMatrix)),new xe("view",((e,t)=>(0,a.v)(Se,t.camera.viewMatrix,e.origin))),new ge("localOrigin",(e=>e.origin)));const r=e=>(0,l.s)(Ae,e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]);e.uniforms.add(new Te("proj",((e,t)=>t.camera.projectionMatrix)),new Te("view",((e,t)=>(0,a.v)(Se,t.camera.viewMatrix,r(t)))),new ve("localOrigin",((e,t)=>r(t))))}const Se=(0,s.c)(),Ae=(0,c.c)();class Re extends fe{constructor(e,t){super(e,"mat3",p.B.Pass,((r,i,o)=>r.setUniformMatrix3fv(e,t(i,o))))}}class Ce extends _{constructor(){super(...arguments),this.instancedDoublePrecision=!1,this.hasModelTransformation=!1}}(0,m._)([x()],Ce.prototype,"instancedDoublePrecision",void 0),(0,m._)([x()],Ce.prototype,"hasModelTransformation",void 0);const ye=(0,n.c)();function Me(e,t){const r=t.hasModelTransformation,i=t.instancedDoublePrecision;r&&(e.vertex.uniforms.add(new Te("model",(e=>e.modelTransformation??s.I))),e.vertex.uniforms.add(new Re("normalLocalOriginFromModel",(e=>((0,o.h)(ye,e.modelTransformation??s.I),ye))))),t.instanced&&i&&(e.attributes.add(T.V.INSTANCEMODELORIGINHI,"vec3"),e.attributes.add(T.V.INSTANCEMODELORIGINLO,"vec3"),e.attributes.add(T.V.INSTANCEMODEL,"mat3"),e.attributes.add(T.V.INSTANCEMODELNORMAL,"mat3"));const n=e.vertex;i&&(n.include(pe,t),n.uniforms.add(new ge("viewOriginHi",((e,t)=>(0,b.a)((0,l.s)(we,t.camera.viewInverseTransposeMatrix[3],t.camera.viewInverseTransposeMatrix[7],t.camera.viewInverseTransposeMatrix[11]),we))),new ge("viewOriginLo",((e,t)=>(0,b.b)((0,l.s)(we,t.camera.viewInverseTransposeMatrix[3],t.camera.viewInverseTransposeMatrix[7],t.camera.viewInverseTransposeMatrix[11]),we))))),n.code.add(g`
    vec3 getVertexInLocalOriginSpace() {
      return ${r?i?"(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz":"(model * localPosition()).xyz":i?"instanceModel * localPosition().xyz":"localPosition().xyz"};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${i?g`
          // Negated inputs are intentionally the first two arguments. The other way around the obfuscation in dpAdd() stopped
          // working for macOS 14+ and iOS 17+.
          // Issue: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/56280
          vec3 originDelta = dpAdd(-instanceModelOriginHi, -instanceModelOriginLo, viewOriginHi, viewOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),n.code.add(g`
    vec3 dpNormal(vec4 _normal) {
      return normalize(${r?i?"normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz)":"normalLocalOriginFromModel * _normal.xyz":i?"instanceModelNormal * _normal.xyz":"_normal.xyz"});
    }
    `),t.output===re.Normal&&(function(e){e.uniforms.add(new Te("viewNormal",((e,t)=>t.camera.viewInverseTransposeMatrix)))}(n),n.code.add(g`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${r?i?"vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)":"vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)":i?"vec4(instanceModelNormal * _normal.xyz, 1.0)":"_normal"}).xyz);
    }
    `)),t.hasVertexTangents&&n.code.add(g`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${r?i?"return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);":"return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);":i?"return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}
    }`)}const we=(0,c.c)();class Oe extends Ce{}function Ie(e){e.attributes.add(T.V.POSITION,"vec3"),e.vertex.code.add(g`vec3 positionModel() { return position; }`)}(0,m._)([x({constValue:!0})],Oe.prototype,"hasSliceHighlight",void 0),(0,m._)([x({constValue:!1})],Oe.prototype,"hasSliceInVertexProgram",void 0),(0,m._)([x({constValue:p.B.Pass})],Oe.prototype,"pbrTextureBindType",void 0);class Ne extends fe{constructor(e,t){super(e,"mat3",p.B.Draw,((r,i,o)=>r.setUniformMatrix3fv(e,t(i,o))))}}function Pe(e,t){e.include(Ie);const r=e.vertex;r.include(pe,t),e.varyings.add("vPositionWorldCameraRelative","vec3"),e.varyings.add("vPosition_view","vec3"),r.uniforms.add(new ve("transformWorldFromViewTH",(e=>e.transformWorldFromViewTH)),new ve("transformWorldFromViewTL",(e=>e.transformWorldFromViewTL)),new Re("transformViewFromCameraRelativeRS",(e=>e.transformViewFromCameraRelativeRS)),new Te("transformProjFromView",(e=>e.transformProjFromView)),new Ne("transformWorldFromModelRS",(e=>e.transformWorldFromModelRS)),new ge("transformWorldFromModelTH",(e=>e.transformWorldFromModelTH)),new ge("transformWorldFromModelTL",(e=>e.transformWorldFromModelTL))),r.code.add(g`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`),r.code.add(g`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${t.spherical?g`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:g`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `),e.fragment.uniforms.add(new ve("transformWorldFromViewTL",(e=>e.transformWorldFromViewTL))),r.code.add(g`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),e.fragment.code.add(g`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}class Le extends f{constructor(){super(...arguments),this.transformWorldFromViewTH=(0,c.c)(),this.transformWorldFromViewTL=(0,c.c)(),this.transformViewFromCameraRelativeRS=(0,n.c)(),this.transformProjFromView=(0,s.c)()}}class De extends f{constructor(){super(...arguments),this.transformWorldFromModelRS=(0,n.c)(),this.transformWorldFromModelTH=(0,c.c)(),this.transformWorldFromModelTL=(0,c.c)()}}class Fe extends fe{constructor(e,t){super(e,"vec2",p.B.Pass,((r,i,o)=>r.setUniform2fv(e,t(i,o))))}}function Be(e){e.varyings.add("linearDepth","float")}function Ge(e){e.vertex.uniforms.add(new Fe("nearFar",((e,t)=>t.camera.nearFar)))}function Ve(e){e.vertex.code.add(g`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)}function Ue(e,t){const{vertex:r}=e;switch(t.output){case re.Color:if(t.receiveShadows)return Be(e),void r.code.add(g`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);break;case re.LinearDepth:case re.Shadow:case re.ShadowHighlight:case re.ShadowExcludeHighlight:return e.include(Pe,t),Be(e),Ge(e),Ve(e),void r.code.add(g`void forwardLinearDepth() {
linearDepth = calculateLinearDepth(nearFar, vPosition_view.z);
}`)}r.code.add(g`void forwardLinearDepth() {}`)}function ze(e,t){!function(e,t,...r){if(!t.hasSlicePlane){const r=g`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;return t.hasSliceInVertexProgram&&e.vertex.code.add(r),void e.fragment.code.add(r)}t.hasSliceInVertexProgram&&e.vertex.uniforms.add(...r),e.fragment.uniforms.add(...r);const i=g`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,o=g`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
if (sliceByFactors(factors)) {
return color;
}
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,n=t.hasSliceHighlight?g`
        ${o}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `:g`#define highlightSlice(_color_, _pos_) (_color_)`;t.hasSliceInVertexProgram&&e.vertex.code.add(i),e.fragment.code.add(i),e.fragment.code.add(n)}(e,t,new ge("slicePlaneOrigin",((e,r)=>function(e,t,r){if(null==r.slicePlane)return c.Z;const i=He(e,t,r),o=je(i,r.slicePlane),n=We(e,i,r);return null!=n?(0,l.g)($e,o,n):o}(t,e,r))),new ge("slicePlaneBasis1",((e,r)=>ke(t,e,r,r.slicePlane?.basis1))),new ge("slicePlaneBasis2",((e,r)=>ke(t,e,r,r.slicePlane?.basis2))))}function He(e,t,r){return e.instancedDoublePrecision?(0,l.s)(qe,r.camera.viewInverseTransposeMatrix[3],r.camera.viewInverseTransposeMatrix[7],r.camera.viewInverseTransposeMatrix[11]):t.slicePlaneLocalOrigin}function je(e,t){return null!=e?(0,l.c)($e,t.origin,e):t.origin}function We(e,t,r){return e.hasSliceTranslatedView?null!=t?(0,a.v)(Ye,r.camera.viewMatrix,t):r.camera.viewMatrix:null}function ke(e,t,r,i){if(null==i||null==r.slicePlane)return c.Z;const o=He(e,t,r),n=je(o,r.slicePlane),a=We(e,o,r);return null!=a?((0,l.h)(Xe,i,n),(0,l.g)($e,n,a),(0,l.g)(Xe,Xe,a),(0,l.c)(Xe,Xe,$e)):i}const qe=(0,c.c)(),$e=(0,c.c)(),Xe=(0,c.c)(),Ye=(0,s.c)();function Ze(e,t){const r=t.output===re.ObjectAndLayerIdColor,i=t.objectAndLayerIdColorInstanced;r&&(e.varyings.add("objectAndLayerIdColorVarying","vec4"),i?e.attributes.add(T.V.INSTANCEOBJECTANDLAYERIDCOLOR,"vec4"):e.attributes.add(T.V.OBJECTANDLAYERIDCOLOR,"vec4")),e.vertex.code.add(g`
     void forwardObjectAndLayerIdColor() {
      ${r?i?g`objectAndLayerIdColorVarying = instanceObjectAndLayerIdColor * 0.003921568627451;`:g`objectAndLayerIdColorVarying = objectAndLayerIdColor * 0.003921568627451;`:g``} }`),e.fragment.code.add(g`
      void outputObjectAndLayerIdColor() {
        ${r?g`fragColor = objectAndLayerIdColorVarying;`:g``} }`)}class Je extends fe{constructor(e,t,r){super(e,"vec4",p.B.Pass,((r,i,o)=>r.setUniform4fv(e,t(i,o))),r)}}class Ke extends fe{constructor(e,t,r){super(e,"float",p.B.Pass,((r,i,o)=>r.setUniform1fv(e,t(i,o))),r)}}function Qe(e,t){const{vertex:r,attributes:i}=e;t.hasVvInstancing&&(t.vvSize||t.vvColor)&&i.add(T.V.INSTANCEFEATUREATTRIBUTE,"vec4"),t.vvSize?(r.uniforms.add(new ve("vvSizeMinSize",(e=>e.vvSize.minSize))),r.uniforms.add(new ve("vvSizeMaxSize",(e=>e.vvSize.maxSize))),r.uniforms.add(new ve("vvSizeOffset",(e=>e.vvSize.offset))),r.uniforms.add(new ve("vvSizeFactor",(e=>e.vvSize.factor))),r.uniforms.add(new Re("vvSymbolRotationMatrix",(e=>e.vvSymbolRotationMatrix))),r.uniforms.add(new ve("vvSymbolAnchor",(e=>e.vvSymbolAnchor))),r.code.add(g`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),r.code.add(g`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${t.hasVvInstancing?g`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):r.code.add(g`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),t.vvColor?(r.constants.add("vvColorNumber","int",8),r.uniforms.add(new Ke("vvColorValues",(e=>e.vvColor.values),8),new Je("vvColorColors",(e=>e.vvColor.colors),8)),r.code.add(g`
      vec4 interpolateVVColor(float value) {
        if (value <= vvColorValues[0]) {
          return vvColorColors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (vvColorValues[i] >= value) {
            float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
            return mix(vvColorColors[i-1], vvColorColors[i], f);
          }
        }
        return vvColorColors[vvColorNumber - 1];
      }

      vec4 vvGetColor(vec4 featureAttribute) {
        return interpolateVVColor(featureAttribute.y);
      }

      ${t.hasVvInstancing?g`
            vec4 vvColor() {
              return vvGetColor(instanceFeatureAttribute);
            }`:"vec4 vvColor() { return vec4(1.0); }"}
    `)):r.code.add(g`vec4 vvColor() { return vec4(1.0); }`)}function et(e){e.code.add(g`const float MAX_RGBA4_FLOAT =
15.0 / 16.0 +
15.0 / 16.0 / 16.0 +
15.0 / 16.0 / 16.0 / 16.0 +
15.0 / 16.0 / 16.0 / 16.0 / 16.0;
const vec4 FIXED_POINT_FACTORS_RGBA4 = vec4(1.0, 16.0, 16.0 * 16.0, 16.0 * 16.0 * 16.0);
vec4 floatToRgba4(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA4_FLOAT);
vec4 fixedPointU4 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS_RGBA4) * 16.0);
const float toU4AsFloat = 1.0 / 15.0;
return fixedPointU4 * toU4AsFloat;
}
const vec4 RGBA4_2_FLOAT_FACTORS = vec4(
15.0 / (16.0),
15.0 / (16.0 * 16.0),
15.0 / (16.0 * 16.0 * 16.0),
15.0 / (16.0 * 16.0 * 16.0 * 16.0)
);
float rgba4ToFloat(vec4 rgba) {
return dot(rgba, RGBA4_2_FLOAT_FACTORS);
}`)}function tt(e){e.code.add(g`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}
const vec4 RGBA_2_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, RGBA_2_FLOAT_FACTORS);
}`)}function rt(e,t){switch(t.output){case re.Shadow:case re.ShadowHighlight:case re.ShadowExcludeHighlight:e.fragment.include(et),e.fragment.code.add(g`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
return depth + SLOPE_SCALE * m + BIAS;
}
void outputDepth(float _linearDepth) {
fragColor = floatToRgba4(_calculateFragDepth(_linearDepth));
}`);break;case re.LinearDepth:e.fragment.include(tt),e.fragment.code.add(g`void outputDepth(float _linearDepth) {
fragColor = float2rgba(_linearDepth);
}`)}}class it extends fe{constructor(e,t){super(e,"vec4",p.B.Pass,((r,i,o)=>r.setUniform4fv(e,t(i,o))))}}class ot extends fe{constructor(e,t){super(e,"sampler2D",p.B.Pass,((r,i,o)=>r.bindTexture(e,t(i,o))))}}let nt;var at;!function(e){e[e.ETC1_RGB=0]="ETC1_RGB",e[e.ETC2_RGBA=1]="ETC2_RGBA",e[e.BC1_RGB=2]="BC1_RGB",e[e.BC3_RGBA=3]="BC3_RGBA",e[e.BC4_R=4]="BC4_R",e[e.BC5_RG=5]="BC5_RG",e[e.BC7_M6_RGB=6]="BC7_M6_RGB",e[e.BC7_M5_RGBA=7]="BC7_M5_RGBA",e[e.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",e[e.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",e[e.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",e[e.ATC_RGB=11]="ATC_RGB",e[e.ATC_RGBA=12]="ATC_RGBA",e[e.FXT1_RGB=17]="FXT1_RGB",e[e.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",e[e.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",e[e.ETC2_EAC_R11=20]="ETC2_EAC_R11",e[e.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",e[e.RGBA32=13]="RGBA32",e[e.RGB565=14]="RGB565",e[e.BGR565=15]="BGR565",e[e.RGBA4444=16]="RGBA4444"}(at||(at={}));let st=null,lt=null;async function ct(){return null==lt&&(lt=function(){if(null==nt){const e=e=>(0,se.g)(`esri/libs/basisu/${e}`);nt=r.e(3786).then(r.bind(r,73786)).then((e=>e.b)).then((({default:t})=>t({locateFile:e}).then((e=>(e.initializeBasis(),delete e.then,e)))))}return nt}(),st=await lt),lt}function dt(e,t,r,i,o){const n=(0,ce.g)(t?le.o.COMPRESSED_RGBA8_ETC2_EAC:le.o.COMPRESSED_RGB8_ETC2),a=o&&e>1?(4**e-1)/(3*4**(e-1)):1;return Math.ceil(r*i*n*a)}function ut(e){return e.getNumImages()>=1&&!e.isUASTC()}function ht(e){return e.getFaces()>=1&&e.isETC1S()}function mt(e,t,r,i,o,n,a,s){const{compressedTextureETC:l,compressedTextureS3TC:c}=e.capabilities,[d,u]=l?i?[at.ETC2_RGBA,le.o.COMPRESSED_RGBA8_ETC2_EAC]:[at.ETC1_RGB,le.o.COMPRESSED_RGB8_ETC2]:c?i?[at.BC3_RGBA,le.o.COMPRESSED_RGBA_S3TC_DXT5_EXT]:[at.BC1_RGB,le.o.COMPRESSED_RGB_S3TC_DXT1_EXT]:[at.RGBA32,le.a.RGBA],h=t.hasMipmap?r:Math.min(1,r),m=[];for(let e=0;e<h;e++)m.push(new Uint8Array(a(e,d))),s(e,d,m[e]);return t.internalFormat=u,t.hasMipmap=m.length>1,t.samplingMode=t.hasMipmap?le.T.LINEAR_MIPMAP_LINEAR:le.T.LINEAR,t.width=o,t.height=n,new ce.T(e,t,{type:"compressed",levels:m})}const pt=()=>R.L.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil");function ft(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}const gt=ft("DXT1"),vt=ft("DXT3"),_t=ft("DXT5");function xt(e,t,r){if(e instanceof ImageData)return xt(Tt(e),t,r);const i=document.createElement("canvas");return i.width=t,i.height=r,i.getContext("2d").drawImage(e,0,0,i.width,i.height),i}function Tt(e){const t=document.createElement("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");if(null==r)throw new Y.Z("Failed to create 2d context from HTMLCanvasElement");return r.putImageData(e,0,0),t}class bt extends w.a{get parameters(){return this._parameters}constructor(e,t){super(),this._data=e,this.type=w.C.Texture,this._glTexture=null,this._loadingPromise=null,this._loadingController=null,this.events=new Z.Z,this._parameters={...At,...t},this._startPreload(e)}dispose(){this.unload(),this._data=this.frameUpdate=void 0}_startPreload(e){null!=e&&(e instanceof HTMLVideoElement?(this.frameUpdate=t=>this._frameUpdate(e,t),this._startPreloadVideoElement(e)):e instanceof HTMLImageElement&&this._startPreloadImageElement(e))}_startPreloadVideoElement(e){if(!((0,Q.jc)(e.src)||"auto"===e.preload&&e.crossOrigin)){e.preload="auto",e.crossOrigin="anonymous";const t=!e.paused;if(e.src=e.src,t&&e.autoplay){const t=()=>{e.removeEventListener("canplay",t),e.play()};e.addEventListener("canplay",t)}}}_startPreloadImageElement(e){(0,Q.HK)(e.src)||(0,Q.jc)(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}_createDescriptor(e){const t=new ce.a;return t.wrapMode=this._parameters.wrap??le.b.REPEAT,t.flipped=!this._parameters.noUnpackFlip,t.samplingMode=this._parameters.mipmap?le.T.LINEAR_MIPMAP_LINEAR:le.T.LINEAR,t.hasMipmap=!!this._parameters.mipmap,t.preMultiplyAlpha=!!this._parameters.preMultiplyAlpha,t.maxAnisotropy=this._parameters.maxAnisotropy??(this._parameters.mipmap?e.parameters.maxMaxAnisotropy:1),t}get glTexture(){return this._glTexture}get memoryEstimate(){return this._glTexture?.usedMemory||function(e,t){if(null==e)return 0;if((0,u.q)(e)||(0,u.O)(e))return t.encoding===h.T.KTX2_ENCODING?function(e,t){if(null==st)return e.byteLength;const r=new st.KTX2File(new Uint8Array(e)),i=ht(r)?dt(r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),t):0;return r.close(),r.delete(),i}(e,!!t.mipmap):t.encoding===h.T.BASIS_ENCODING?function(e,t){if(null==st)return e.byteLength;const r=new st.BasisFile(new Uint8Array(e)),i=ut(r)?dt(r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),t):0;return r.close(),r.delete(),i}(e,!!t.mipmap):e.byteLength;const{width:r,height:i}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?Et(e):t;return(t.mipmap?4/3:1)*r*i*(t.components||4)||0}(this._data,this._parameters)}load(e){if(this._glTexture)return this._glTexture;if(this._loadingPromise)return this._loadingPromise;const t=this._data;return null==t?(this._glTexture=new ce.T(e,this._createDescriptor(e),null),this._glTexture):(this._parameters.reloadable||(this._data=void 0),"string"==typeof t?this._loadFromURL(e,t):t instanceof Image?this._loadFromImageElement(e,t):t instanceof HTMLVideoElement?this._loadFromVideoElement(e,t):t instanceof ImageData||t instanceof HTMLCanvasElement?this._loadFromImage(e,t):((0,u.q)(t)||(0,u.O)(t))&&this._parameters.encoding===h.T.DDS_ENCODING?this._loadFromDDSData(e,t):((0,u.q)(t)||(0,u.O)(t))&&this._parameters.encoding===h.T.KTX2_ENCODING?this._loadFromKTX2(e,t):((0,u.q)(t)||(0,u.O)(t))&&this._parameters.encoding===h.T.BASIS_ENCODING?this._loadFromBasis(e,t):(0,u.O)(t)?this._loadFromPixelData(e,t):(0,u.q)(t)?this._loadFromPixelData(e,new Uint8Array(t)):null)}_frameUpdate(e,t){return null==this._glTexture||e.readyState<St.HAVE_CURRENT_DATA||t===e.currentTime?t:(this._glTexture.setData(e),this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this._parameters.updateCallback&&this._parameters.updateCallback(),e.currentTime)}_loadFromDDSData(e,t){return this._glTexture=function(e,t,r){const i=function(e,t){const r=new Int32Array(e,0,31);if(542327876!==r[0])return pt().error("Invalid magic number in DDS header"),null;if(!(4&r[20]))return pt().error("Unsupported format, must contain a FourCC code"),null;const i=r[21];let o,n;switch(i){case gt:o=8,n=le.o.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case vt:o=16,n=le.o.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case _t:o=16,n=le.o.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return pt().error("Unsupported FourCC code:",(a=i,String.fromCharCode(255&a,a>>8&255,a>>16&255,a>>24&255))),null}var a;let s=1,l=r[4],c=r[3];0==(3&l)&&0==(3&c)||(pt().warn("Rounding up compressed texture size to nearest multiple of 4."),l=l+3&-4,c=c+3&-4);const d=l,u=c;131072&r[2]&&!1!==t&&(s=Math.max(1,r[7]));let h,m,p=r[1]+4;const f=[];for(let t=0;t<s;++t)m=(l+3>>2)*(c+3>>2)*o,h=new Uint8Array(e,p,m),f.push(h),p+=m,l=Math.max(1,l>>1),c=Math.max(1,c>>1);return{textureData:{type:"compressed",levels:f},internalFormat:n,width:d,height:u}}(r,t.hasMipmap??!1);if(null==i)throw new Error("DDS texture data is null");const{textureData:o,internalFormat:n,width:a,height:s}=i;return t.samplingMode=o.levels.length>1?le.T.LINEAR_MIPMAP_LINEAR:le.T.LINEAR,t.hasMipmap=o.levels.length>1,t.internalFormat=n,t.width=a,t.height=s,new ce.T(e,t,o)}(e,this._createDescriptor(e),t),this._glTexture}_loadFromKTX2(e,t){return this._loadAsync((()=>async function(e,t,r){null==st&&(st=await ct());const i=new st.KTX2File(new Uint8Array(r));if(!ht(i))return null;i.startTranscoding();const o=mt(e,t,i.getLevels(),i.getHasAlpha(),i.getWidth(),i.getHeight(),((e,t)=>i.getImageTranscodedSizeInBytes(e,0,0,t)),((e,t,r)=>i.transcodeImage(r,e,0,0,t,0,-1,-1)));return i.close(),i.delete(),o}(e,this._createDescriptor(e),t).then((e=>(this._glTexture=e,e)))))}_loadFromBasis(e,t){return this._loadAsync((()=>async function(e,t,r){null==st&&(st=await ct());const i=new st.BasisFile(new Uint8Array(r));if(!ut(i))return null;i.startTranscoding();const o=mt(e,t,i.getNumLevels(0),i.getHasAlpha(),i.getImageWidth(0,0),i.getImageHeight(0,0),((e,t)=>i.getImageTranscodedSizeInBytes(0,e,t)),((e,t,r)=>i.transcodeImage(r,0,e,t,0,0)));return i.close(),i.delete(),o}(e,this._createDescriptor(e),t).then((e=>(this._glTexture=e,e)))))}_loadFromPixelData(e,t){(0,I.a)(this._parameters.width>0&&this._parameters.height>0);const r=this._createDescriptor(e);return r.pixelFormat=1===this._parameters.components?le.a.LUMINANCE:3===this._parameters.components?le.a.RGB:le.a.RGBA,r.width=this._parameters.width??0,r.height=this._parameters.height??0,this._glTexture=new ce.T(e,r,t),this._glTexture}_loadFromURL(e,t){return this._loadAsync((async r=>{const i=await te(t,{signal:r});return(0,K.k_)(r),this._loadFromImage(e,i)}))}_loadFromImageElement(e,t){return t.complete?this._loadFromImage(e,t):this._loadAsync((async r=>{const i=await(0,ee.l)(t,t.src,!1,r);return(0,K.k_)(r),this._loadFromImage(e,i)}))}_loadFromVideoElement(e,t){return t.readyState>=St.HAVE_CURRENT_DATA?this._loadFromImage(e,t):this._loadFromVideoElementAsync(e,t)}_loadFromVideoElementAsync(e,t){return this._loadAsync((r=>new Promise(((i,o)=>{const n=()=>{t.removeEventListener("loadeddata",a),t.removeEventListener("error",s),(0,J.r)(l)},a=()=>{t.readyState>=St.HAVE_CURRENT_DATA&&(n(),i(this._loadFromImage(e,t)))},s=e=>{n(),o(e||new Y.Z("Failed to load video"))};t.addEventListener("loadeddata",a),t.addEventListener("error",s);const l=(0,K.fu)(r,(()=>s((0,K.zE)())))}))))}_loadFromImage(e,t){let r=t;if(!(r instanceof HTMLVideoElement)){const{maxTextureSize:t}=e.parameters;r=this._parameters.downsampleUncompressed?function(e,t){let r=e.width*e.height;if(r<4096)return e instanceof ImageData?Tt(e):e;let i=e.width,o=e.height;do{i=Math.ceil(i/2),o=Math.ceil(o/2),r=i*o}while(r>1048576||null!=t&&(i>t||o>t));return xt(e,i,o)}(r,t):function(e,t){const r=Math.max(e.width,e.height);if(r<=t)return e;const i=t/r;return xt(e,Math.round(e.width*i),Math.round(e.height*i))}(r,t)}const i=Et(r);this._parameters.width=i.width,this._parameters.height=i.height;const o=this._createDescriptor(e);return o.pixelFormat=3===this._parameters.components?le.a.RGB:le.a.RGBA,o.width=i.width,o.height=i.height,this._glTexture=new ce.T(e,o,r),this._glTexture}_loadAsync(e){const t=new AbortController;this._loadingController=t;const r=e(t.signal);this._loadingPromise=r;const i=()=>{this._loadingController===t&&(this._loadingController=null),this._loadingPromise===r&&(this._loadingPromise=null)};return r.then(i,i),r}unload(){if(this._glTexture=(0,J.f)(this._glTexture),null!=this._loadingController){const e=this._loadingController;this._loadingController=null,this._loadingPromise=null,e.abort()}this.events.emit("unloaded")}}function Et(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}var St;!function(e){e[e.HAVE_NOTHING=0]="HAVE_NOTHING",e[e.HAVE_METADATA=1]="HAVE_METADATA",e[e.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",e[e.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",e[e.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA"}(St||(St={}));const At={wrap:{s:le.b.REPEAT,t:le.b.REPEAT},mipmap:!0,noUnpackFlip:!1,preMultiplyAlpha:!1,downsampleUncompressed:!1};function Rt(e){e.include(tt),e.code.add(g`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromRGBA(vec4 depth, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(depth), nearFar);
}
float linearDepthFromTexture(sampler2D depthTexture, vec2 uv, vec2 nearFar) {
ivec2 iuv = ivec2(uv * vec2(textureSize(depthTexture, 0)));
return linearDepthFromRGBA(texelFetch(depthTexture, iuv, 0), nearFar);
}`)}function Ct(e){e.code.add(g`float linearizeDepth(float depth, vec2 nearFar) {
float depthNdc = depth * 2.0 - 1.0;
return (2.0 * nearFar[0] * nearFar[1]) / (depthNdc * (nearFar[1] - nearFar[0]) - (nearFar[1] + nearFar[0]));
}
float linearDepthFromDepthTexture(sampler2D depthTexture, vec2 uv, vec2 nearFar) {
ivec2 iuv = ivec2(uv * vec2(textureSize(depthTexture, 0)));
float depth = texelFetch(depthTexture, iuv, 0).r;
return linearizeDepth(depth, nearFar);
}`)}function yt(e,t){if(!t.multipassEnabled)return;e.fragment.include(Rt),e.fragment.uniforms.add(new ot("terrainDepthTexture",((e,t)=>t.multipassTerrain.linearDepth?.getTexture())),new Fe("nearFar",((e,t)=>t.camera.nearFar)));const r=t.occlusionPass;e.fragment.code.add(g`
   ${r?"bool":"void"} terrainDepthTest(float fragmentDepth) {
      vec4 data = texelFetch(terrainDepthTexture, ivec2(gl_FragCoord.xy), 0);
      float linearDepth = linearDepthFromRGBA(data, nearFar);
      ${r?g`return fragmentDepth < linearDepth && data != vec4(0.0, 0.0, 0.0, 1.0);`:g`
          if(fragmentDepth ${t.cullAboveGround?">":"<="} linearDepth){
            discard;
          }`}
    }`)}function Mt(e){e.vertex.code.add(g`const float PI = 3.141592653589793;`),e.fragment.code.add(g`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}const wt=.001;function Ot(e){e.code.add(g`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`)}const It=()=>R.L.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");class Nt{constructor(){this._includedModules=new Map}include(e,t){if(this._includedModules.has(e)){const r=this._includedModules.get(e);if(r!==t){It().error("Shader module included multiple times with different configuration.");const t=new Set;for(const i of Object.keys(r))r[i]!==e[i]&&t.add(i);for(const i of Object.keys(e))r[i]!==e[i]&&t.add(i);t.forEach((t=>console.error(`  ${t}: current ${r[t]} new ${e[t]}`)))}}else this._includedModules.set(e,t),e(this.builder,t)}}class Pt extends Nt{constructor(){super(...arguments),this.vertex=new Ft,this.fragment=new Ft,this.attributes=new Bt,this.varyings=new Gt,this.extensions=new Vt,this.constants=new zt,this.outputs=new Ut}get fragmentUniforms(){return this.fragment.uniforms.entries}get builder(){return this}generate(e){const t=this.extensions.generateSource(e),r=this.attributes.generateSource(e),i=this.varyings.generateSource(e),o="vertex"===e?this.vertex:this.fragment,n=o.uniforms.generateSource(),a=o.code.generateSource(),s="vertex"===e?jt:Ht,l=this.constants.generateSource().concat(o.constants.generateSource()),c=this.outputs.generateSource(e);return`#version 300 es\n${t.join("\n")}\n\n${s}\n\n${l.join("\n")}\n\n${n.join("\n")}\n\n${r.join("\n")}\n\n${i.join("\n")}\n\n${c.join("\n")}\n\n${a.join("\n")}`}generateBindPass(e){const t=new Map;this.vertex.uniforms.entries.forEach((e=>{const r=e.bind[p.B.Pass];r&&t.set(e.name,r)})),this.fragment.uniforms.entries.forEach((e=>{const r=e.bind[p.B.Pass];r&&t.set(e.name,r)}));const r=Array.from(t.values()),i=r.length;return(t,o)=>{for(let n=0;n<i;++n)r[n](e,t,o)}}generateBindDraw(e){const t=new Map;this.vertex.uniforms.entries.forEach((e=>{const r=e.bind[p.B.Draw];r&&t.set(e.name,r)})),this.fragment.uniforms.entries.forEach((e=>{const r=e.bind[p.B.Draw];r&&t.set(e.name,r)}));const r=Array.from(t.values()),i=r.length;return(t,o,n)=>{for(let a=0;a<i;++a)r[a](e,t,o,n)}}}class Lt{constructor(){this._entries=new Map}add(...e){for(const t of e)this._add(t)}get(e){return this._entries.get(e)}_add(e){if(null!=e){if(this._entries.has(e.name)&&!this._entries.get(e.name).equals(e))throw new Y.Z(`Duplicate uniform name ${e.name} for different uniform type`);this._entries.set(e.name,e)}else It().error(`Trying to add null Uniform from ${(new Error).stack}.`)}generateSource(){return Array.from(this._entries.values()).map((e=>null!=e.arraySize?`uniform ${e.type} ${e.name}[${e.arraySize}];`:`uniform ${e.type} ${e.name};`))}get entries(){return Array.from(this._entries.values())}}class Dt{constructor(){this._entries=new Array}add(e){this._entries.push(e)}generateSource(){return this._entries}}class Ft extends Nt{constructor(){super(...arguments),this.uniforms=new Lt,this.code=new Dt,this.constants=new zt}get builder(){return this}}class Bt{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(e){return"fragment"===e?[]:this._entries.map((e=>`in ${e[1]} ${e[0]};`))}}class Gt{constructor(){this._entries=new Map}add(e,t){this._entries.has(e)&&(0,I.a)(this._entries.get(e)===t),this._entries.set(e,t)}generateSource(e){const t=new Array;return this._entries.forEach(((r,i)=>t.push("vertex"===e?`out ${r} ${i};`:`in ${r} ${i};`))),t}}class Vt{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const t="vertex"===e?Vt.ALLOWLIST_VERTEX:Vt.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter((e=>t.includes(e))).map((e=>`#extension ${e} : enable`))}}Vt.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],Vt.ALLOWLIST_VERTEX=[];class Ut{constructor(){this._entries=new Map}add(e,t,r=0){const i=this._entries.get(r);i?(0,I.a)(i.name===e&&i.type===t,`Fragment shader output location ${r} occupied`):this._entries.set(r,{name:e,type:t})}generateSource(e){if("vertex"===e)return[];0===this._entries.size&&this._entries.set(0,{name:Ut.DEFAULT_NAME,type:Ut.DEFAULT_TYPE});const t=new Array;return this._entries.forEach(((e,r)=>t.push(`layout(location = ${r}) out ${e.type} ${e.name};`))),t}}Ut.DEFAULT_TYPE="vec4",Ut.DEFAULT_NAME="fragColor";class zt{constructor(){this._entries=new Set}add(e,t,r){let i="ERROR_CONSTRUCTOR_STRING";switch(t){case"float":i=zt._numberToFloatStr(r);break;case"int":i=zt._numberToIntStr(r);break;case"bool":i=r.toString();break;case"vec2":i=`vec2(${zt._numberToFloatStr(r[0])},                            ${zt._numberToFloatStr(r[1])})`;break;case"vec3":i=`vec3(${zt._numberToFloatStr(r[0])},                            ${zt._numberToFloatStr(r[1])},                            ${zt._numberToFloatStr(r[2])})`;break;case"vec4":i=`vec4(${zt._numberToFloatStr(r[0])},                            ${zt._numberToFloatStr(r[1])},                            ${zt._numberToFloatStr(r[2])},                            ${zt._numberToFloatStr(r[3])})`;break;case"ivec2":i=`ivec2(${zt._numberToIntStr(r[0])},                             ${zt._numberToIntStr(r[1])})`;break;case"ivec3":i=`ivec3(${zt._numberToIntStr(r[0])},                             ${zt._numberToIntStr(r[1])},                             ${zt._numberToIntStr(r[2])})`;break;case"ivec4":i=`ivec4(${zt._numberToIntStr(r[0])},                             ${zt._numberToIntStr(r[1])},                             ${zt._numberToIntStr(r[2])},                             ${zt._numberToIntStr(r[3])})`;break;case"mat2":case"mat3":case"mat4":i=`${t}(${Array.prototype.map.call(r,(e=>zt._numberToFloatStr(e))).join(", ")})`}return this._entries.add(`const ${t} ${e} = ${i};`),this}static _numberToIntStr(e){return e.toFixed(0)}static _numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}}const Ht="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif",jt="precision highp float;\nprecision highp sampler2D;";class Wt{constructor(e,t){this._module=e,this._loadModule=t}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}}class kt{constructor(e,t,r){this.release=r,this.initializeConfiguration(e,t),this._configuration=t.snapshot(),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e.rctx.capabilities)}destroy(){this._program=(0,J.f)(this._program),this._pipeline=this._configuration=null}reload(e){(0,J.f)(this._program),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e.rctx.capabilities)}get program(){return this._program}get compiled(){return this.program.compiled}get key(){return this._configuration.key}get configuration(){return this._configuration}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}get primitiveType(){return le.m.TRIANGLES}getPipeline(e,t,r){return this._pipeline}initializeConfiguration(e,t){}}class qt{constructor(e,t,r){this._context=e,this._locations=r,this._textures=new Map,this._freeTextureUnits=new M.P({deallocator:null}),this._glProgram=e.programCache.acquire(t.generate("vertex"),t.generate("fragment"),r),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this.bindPass=t.generateBindPass(this),this.bindDraw=t.generateBindDraw(this),this._fragmentUniforms=(0,ce.w)()?t.fragmentUniforms:null}dispose(){this._glProgram.dispose()}get glName(){return this._glProgram.glName}get hasTransformFeedbackVaryings(){return this._glProgram.hasTransformFeedbackVaryings}get compiled(){return this._glProgram.compiled}setUniform1b(e,t){this._glProgram.setUniform1i(e,t?1:0)}setUniform1i(e,t){this._glProgram.setUniform1i(e,t)}setUniform1f(e,t){this._glProgram.setUniform1f(e,t)}setUniform2fv(e,t){this._glProgram.setUniform2fv(e,t)}setUniform3fv(e,t){this._glProgram.setUniform3fv(e,t)}setUniform4fv(e,t){this._glProgram.setUniform4fv(e,t)}setUniformMatrix3fv(e,t){this._glProgram.setUniformMatrix3fv(e,t)}setUniformMatrix4fv(e,t){this._glProgram.setUniformMatrix4fv(e,t)}setUniform1fv(e,t){this._glProgram.setUniform1fv(e,t)}setUniform1iv(e,t){this._glProgram.setUniform1iv(e,t)}setUniform2iv(e,t){this._glProgram.setUniform3iv(e,t)}setUniform3iv(e,t){this._glProgram.setUniform3iv(e,t)}setUniform4iv(e,t){this._glProgram.setUniform4iv(e,t)}assertCompatibleVertexAttributeLocations(e){e.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(e,t){if(null==t?.glName){const t=this._textures.get(e);return t&&(this._context.bindTexture(null,t.unit),this._freeTextureUnit(t),this._textures.delete(e)),null}let r=this._textures.get(e);return null==r?(r=this._allocTextureUnit(t),this._textures.set(e,r)):r.texture=t,this._context.useProgram(this),this.setUniform1i(e,r.unit),this._context.bindTexture(t,r.unit),r.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach(((e,t)=>{this._context.bindTexture(e.texture,e.unit),this.setUniform1i(t,e.unit)})),this._fragmentUniforms?.forEach((e=>{"sampler2D"!==e.type&&"samplerCube"!==e.type||this._textures.has(e.name)||console.error(`Texture sampler ${e.name} has no bound texture`)}))}_allocTextureUnit(e){return{texture:e,unit:0===this._freeTextureUnits.length?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(e){this._freeTextureUnits.push(e.unit)}}le.k.LESS,le.k.ALWAYS;const $t={mask:255},Xt={function:{func:le.k.ALWAYS,ref:h.S.OutlineVisualElementMask,mask:h.S.OutlineVisualElementMask},operation:{fail:le.n.KEEP,zFail:le.n.KEEP,zPass:le.n.ZERO}},Yt={function:{func:le.k.ALWAYS,ref:h.S.OutlineVisualElementMask,mask:h.S.OutlineVisualElementMask},operation:{fail:le.n.KEEP,zFail:le.n.KEEP,zPass:le.n.REPLACE}};le.k.EQUAL,h.S.OutlineVisualElementMask,h.S.OutlineVisualElementMask,le.n.KEEP,le.n.KEEP,le.n.KEEP,le.k.NOTEQUAL,h.S.OutlineVisualElementMask,h.S.OutlineVisualElementMask,le.n.KEEP,le.n.KEEP,le.n.KEEP;var Zt=r(40167),Jt=r(79641),Kt=r(90779),Qt=r(81391),er=r(87372),tr=r(41864);class rr{constructor(){this._outer=new Map}clear(){this._outer.clear()}get empty(){return 0===this._outer.size}get(e,t){return this._outer.get(e)?.get(t)}set(e,t,r){const i=this._outer.get(e);i?i.set(t,r):this._outer.set(e,new Map([[t,r]]))}delete(e,t){const r=this._outer.get(e);r&&(r.delete(t),0===r.size&&this._outer.delete(e))}forEach(e){this._outer.forEach(((t,r)=>e(t,r)))}}var ir,or,nr,ar=r(10738),sr=r(92457),lr=r(62610),cr=r(90532),dr=r(15215),ur=r(48190),hr=r(68681);function mr(e,t){switch(t.normalType){case ir.Compressed:e.attributes.add(T.V.NORMALCOMPRESSED,"vec2"),e.vertex.code.add(g`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);break;case ir.Attribute:e.attributes.add(T.V.NORMAL,"vec3"),e.vertex.code.add(g`vec3 normalModel() {
return normal;
}`);break;case ir.ScreenDerivative:e.fragment.code.add(g`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:(0,ur.n)(t.normalType);case ir.COUNT:case ir.Ground:}}function pr(e,t){switch(t.normalType){case ir.Attribute:case ir.Compressed:e.include(mr,t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add(new Ne("transformNormalGlobalFromModel",(e=>e.transformNormalGlobalFromModel)),new Re("transformNormalViewFromGlobal",(e=>e.transformNormalViewFromGlobal))),e.vertex.code.add(g`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case ir.Ground:e.include(Pe,t),e.varyings.add("vNormalWorld","vec3"),e.vertex.code.add(g`
        void forwardNormal() {
          vNormalWorld = ${t.spherical?g`normalize(vPositionWorldCameraRelative);`:g`vec3(0.0, 0.0, 1.0);`}
        }
        `);break;case ir.ScreenDerivative:e.vertex.code.add(g`void forwardNormal() {}`);break;default:(0,ur.n)(t.normalType);case ir.COUNT:}}!function(e){e[e.Attribute=0]="Attribute",e[e.Compressed=1]="Compressed",e[e.Ground=2]="Ground",e[e.ScreenDerivative=3]="ScreenDerivative",e[e.COUNT=4]="COUNT"}(ir||(ir={}));class fr extends Le{constructor(){super(...arguments),this.transformNormalViewFromGlobal=(0,n.c)()}}class gr extends De{constructor(){super(...arguments),this.transformNormalGlobalFromModel=(0,n.c)(),this.toMapSpace=(0,hr.c)()}}function vr(e){e.uniforms.add(new ve("mainLightDirection",((e,t)=>t.lighting.mainLight.direction)))}function _r(e){e.uniforms.add(new ve("mainLightIntensity",((e,t)=>t.lighting.mainLight.intensity)))}function xr(e){vr(e.fragment),_r(e.fragment),e.fragment.code.add(g`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, mainLightDirection), 0.0, 1.0);
return mainLightIntensity * ((1.0 - shadowing) * dotVal);
}`)}function Tr(e,t){switch(t.textureCoordinateType){case or.Default:return e.attributes.add(T.V.UV0,"vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add(g`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);case or.Compressed:return e.attributes.add(T.V.UV0,"vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add(g`vec2 getUV0() {
return uv0 / 16384.0;
}
void forwardTextureCoordinates() {
vuv0 = getUV0();
}`);case or.Atlas:return e.attributes.add(T.V.UV0,"vec2"),e.varyings.add("vuv0","vec2"),e.attributes.add(T.V.UVREGION,"vec4"),e.varyings.add("vuvRegion","vec4"),void e.vertex.code.add(g`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);default:(0,ur.n)(t.textureCoordinateType);case or.None:return void e.vertex.code.add(g`void forwardTextureCoordinates() {}`);case or.COUNT:return}}function br(e){e.fragment.code.add(g`vec4 textureAtlasLookup(sampler2D tex, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
return textureGrad(tex, uvAtlas, dUVdx, dUVdy);
}`)}function Er(e,t){switch(e.include(Tr,t),t.textureCoordinateType){case or.Default:case or.Compressed:return void e.fragment.code.add(g`vec4 textureLookup(sampler2D tex, vec2 uv) {
return texture(tex, uv);
}`);case or.Atlas:return e.include(br),void e.fragment.code.add(g`vec4 textureLookup(sampler2D tex, vec2 uv) {
return textureAtlasLookup(tex, uv, vuvRegion);
}`);default:(0,ur.n)(t.textureCoordinateType);case or.None:case or.COUNT:return}}!function(e){e[e.None=0]="None",e[e.Default=1]="Default",e[e.Atlas=2]="Atlas",e[e.Compressed=3]="Compressed",e[e.COUNT=4]="COUNT"}(or||(or={}));class Sr extends fe{constructor(e,t){super(e,"sampler2D",p.B.Draw,((r,i,o)=>r.bindTexture(e,t(i,o))))}}function Ar(e,t){const r=e.fragment,i=t.hasMetallicRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture;if(t.pbrMode===nr.Normal&&i&&e.include(Er,t),t.pbrMode!==nr.Schematic)if(t.pbrMode!==nr.Disabled){if(t.pbrMode===nr.Normal){r.code.add(g`vec3 mrr;
vec3 emission;
float occlusion;`);const e=t.pbrTextureBindType;t.hasMetallicRoughnessTexture&&(r.uniforms.add(e===p.B.Pass?new ot("texMetallicRoughness",(e=>e.textureMetallicRoughness)):new Sr("texMetallicRoughness",(e=>e.textureMetallicRoughness))),r.code.add(g`void applyMetallnessAndRoughness(vec2 uv) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, uv).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),t.hasEmissionTexture&&(r.uniforms.add(e===p.B.Pass?new ot("texEmission",(e=>e.textureEmissive)):new Sr("texEmission",(e=>e.textureEmissive))),r.code.add(g`void applyEmission(vec2 uv) {
emission *= textureLookup(texEmission, uv).rgb;
}`)),t.hasOcclusionTexture?(r.uniforms.add(e===p.B.Pass?new ot("texOcclusion",(e=>e.textureOcclusion)):new Sr("texOcclusion",(e=>e.textureOcclusion))),r.code.add(g`void applyOcclusion(vec2 uv) {
occlusion *= textureLookup(texOcclusion, uv).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):r.code.add(g`float getBakedOcclusion() { return 1.0; }`),e===p.B.Pass?r.uniforms.add(new ve("emissionFactor",(e=>e.emissiveFactor)),new ve("mrrFactors",(e=>e.mrrFactors))):r.uniforms.add(new ge("emissionFactor",(e=>e.emissiveFactor)),new ge("mrrFactors",(e=>e.mrrFactors))),r.code.add(g`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;

      ${t.hasMetallicRoughnessTexture?g`applyMetallnessAndRoughness(${t.hasMetallicRoughnessTextureTransform?g`metallicRoughnessUV`:"vuv0"});`:""}

      ${t.hasEmissionTexture?g`applyEmission(${t.hasEmissiveTextureTransform?g`emissiveUV`:"vuv0"});`:""}

      ${t.hasOcclusionTexture?g`applyOcclusion(${t.hasOcclusionTextureTransform?g`occlusionUV`:"vuv0"});`:""}
    }
  `)}}else r.code.add(g`float getBakedOcclusion() { return 1.0; }`);else r.code.add(g`vec3 mrr = vec3(0.0, 0.6, 0.2);
vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}function Rr(e){const t=e.fragment.code;t.add(g`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),t.add(g`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),t.add(g`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}function Cr(e,t){const r=e.fragment.code;e.include(Mt),t.pbrMode!==nr.Normal&&t.pbrMode!==nr.Schematic&&t.pbrMode!==nr.Simplified&&t.pbrMode!==nr.TerrainWithWater||(r.add(g`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),r.add(g`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`)),t.pbrMode!==nr.Normal&&t.pbrMode!==nr.Schematic||(e.include(Rr),r.add(g`struct PBRShadingInfo
{
float NdotL;
float NdotV;
float NdotH;
float VdotH;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),r.add(g`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),r.add(g`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),r.add(g`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}!function(e){e[e.Disabled=0]="Disabled",e[e.Normal=1]="Normal",e[e.Schematic=2]="Schematic",e[e.Water=3]="Water",e[e.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",e[e.Simplified=5]="Simplified",e[e.TerrainWithWater=6]="TerrainWithWater",e[e.COUNT=7]="COUNT"}(nr||(nr={})),(0,c.c)();const yr=.4;(0,c.c)();class Mr extends fe{constructor(e,t){super(e,"int",p.B.Pass,((r,i,o)=>r.setUniform1i(e,t(i,o))))}}class wr extends me{constructor(e){super(e),this._numLoading=0,this._disposed=!1,this._textureRepository=e.textureRepository,this._textureId=e.textureId,this._acquire(e.textureId,(e=>this._texture=e)),this._acquire(e.normalTextureId,(e=>this._textureNormal=e)),this._acquire(e.emissiveTextureId,(e=>this._textureEmissive=e)),this._acquire(e.occlusionTextureId,(e=>this._textureOcclusion=e)),this._acquire(e.metallicRoughnessTextureId,(e=>this._textureMetallicRoughness=e))}dispose(){this._texture=(0,J.c)(this._texture),this._textureNormal=(0,J.c)(this._textureNormal),this._textureEmissive=(0,J.c)(this._textureEmissive),this._textureOcclusion=(0,J.c)(this._textureOcclusion),this._textureMetallicRoughness=(0,J.c)(this._textureMetallicRoughness),this._disposed=!0}ensureResources(e){return 0===this._numLoading?h.R.LOADED:h.R.LOADING}get textureBindParameters(){return new Or(null!=this._texture?this._texture.glTexture:null,null!=this._textureNormal?this._textureNormal.glTexture:null,null!=this._textureEmissive?this._textureEmissive.glTexture:null,null!=this._textureOcclusion?this._textureOcclusion.glTexture:null,null!=this._textureMetallicRoughness?this._textureMetallicRoughness.glTexture:null)}updateTexture(e){null!=this._texture&&e===this._texture.id||(this._texture=(0,J.c)(this._texture),this._textureId=e,this._acquire(this._textureId,(e=>this._texture=e)))}_acquire(e,t){if(null==e)return void t(null);const r=this._textureRepository.acquire(e);if((0,K.y8)(r))return++this._numLoading,void r.then((e=>{if(this._disposed)return(0,J.c)(e),void t(null);t(e)})).finally((()=>--this._numLoading));t(r)}}class Or extends f{constructor(e=null,t=null,r=null,i=null,o=null){super(),this.texture=e,this.textureNormal=t,this.textureEmissive=r,this.textureOcclusion=i,this.textureMetallicRoughness=o}}var Ir;function Nr(e,t,r=le.i.ADD,i=[0,0,0,0]){return{srcRgb:e,srcAlpha:e,dstRgb:t,dstAlpha:t,opRgb:r,opAlpha:r,color:{r:i[0],g:i[1],b:i[2],a:i[3]}}}!function(e){e[e.Color=0]="Color",e[e.Alpha=1]="Alpha",e[e.FrontFace=2]="FrontFace",e[e.NONE=3]="NONE",e[e.COUNT=4]="COUNT"}(Ir||(Ir={}));const Pr={face:le.g.BACK,mode:le.h.CCW},Lr={face:le.g.FRONT,mode:le.h.CCW},Dr=e=>e===h.C.Back?Pr:e===h.C.Front?Lr:null,Fr={zNear:0,zFar:1},Br={r:!0,g:!0,b:!0,a:!0};function Gr(e){return Zr.intern(e)}function Vr(e){return Kr.intern(e)}function Ur(e){return ei.intern(e)}function zr(e){return ri.intern(e)}function Hr(e){return oi.intern(e)}function jr(e){return ai.intern(e)}function Wr(e){return li.intern(e)}function kr(e){return di.intern(e)}function qr(e){return hi.intern(e)}function $r(e){return pi.intern(e)}class Xr{constructor(e,t){this._makeKey=e,this._makeRef=t,this._interns=new Map}intern(e){if(!e)return null;const t=this._makeKey(e),r=this._interns;return r.has(t)||r.set(t,this._makeRef(e)),r.get(t)??null}}function Yr(e){return"["+e.join(",")+"]"}const Zr=new Xr(Jr,(e=>({__tag:"Blending",...e})));function Jr(e){return e?Yr([e.srcRgb,e.srcAlpha,e.dstRgb,e.dstAlpha,e.opRgb,e.opAlpha,e.color.r,e.color.g,e.color.b,e.color.a]):null}const Kr=new Xr(Qr,(e=>({__tag:"Culling",...e})));function Qr(e){return e?Yr([e.face,e.mode]):null}const ei=new Xr(ti,(e=>({__tag:"PolygonOffset",...e})));function ti(e){return e?Yr([e.factor,e.units]):null}const ri=new Xr(ii,(e=>({__tag:"DepthTest",...e})));function ii(e){return e?Yr([e.func]):null}const oi=new Xr(ni,(e=>({__tag:"StencilTest",...e})));function ni(e){return e?Yr([e.function.func,e.function.ref,e.function.mask,e.operation.fail,e.operation.zFail,e.operation.zPass]):null}const ai=new Xr(si,(e=>({__tag:"DepthWrite",...e})));function si(e){return e?Yr([e.zNear,e.zFar]):null}const li=new Xr(ci,(e=>({__tag:"ColorWrite",...e})));function ci(e){return e?Yr([e.r,e.g,e.b,e.a]):null}const di=new Xr(ui,(e=>({__tag:"StencilWrite",...e})));function ui(e){return e?Yr([e.mask]):null}const hi=new Xr(mi,(e=>({__tag:"DrawBuffers",...e})));function mi(e){return e?Yr(e.buffers):null}const pi=new Xr((function(e){return e?Yr([Jr(e.blending),Qr(e.culling),ti(e.polygonOffset),ii(e.depthTest),ni(e.stencilTest),si(e.depthWrite),ci(e.colorWrite),ui(e.stencilWrite),mi(e.drawBuffers)]):null}),(e=>({blending:Gr(e.blending),culling:Vr(e.culling),polygonOffset:Ur(e.polygonOffset),depthTest:zr(e.depthTest),stencilTest:Hr(e.stencilTest),depthWrite:jr(e.depthWrite),colorWrite:Wr(e.colorWrite),stencilWrite:kr(e.stencilWrite),drawBuffers:qr(e.drawBuffers)}))),fi=function(e,t,r,i,o=le.i.ADD,n=le.i.ADD,a=[0,0,0,0]){return{srcRgb:e,srcAlpha:t,dstRgb:r,dstAlpha:i,opRgb:o,opAlpha:n,color:{r:a[0],g:a[1],b:a[2],a:a[3]}}}(le.j.SRC_ALPHA,le.j.ONE,le.j.ONE_MINUS_SRC_ALPHA,le.j.ONE_MINUS_SRC_ALPHA),gi=Nr(le.j.ONE,le.j.ONE),vi=Nr(le.j.ZERO,le.j.ONE_MINUS_SRC_ALPHA);function _i(e){return e===Ir.FrontFace?null:e===Ir.Alpha?vi:gi}const xi={factor:-1,units:-2};function Ti(e){return e?xi:null}function bi(e,t=le.k.LESS){return e===Ir.NONE||e===Ir.FrontFace?t:le.k.LEQUAL}var Ei=r(60939),Si=r(35634);const Ai=new class{constructor(e=0){this.offset=e,this.sphere=(0,Ei.b)(),this.tmpVertex=(0,c.c)()}applyToVertex(e,t,r){const i=this.objectTransform.transform,o=(0,l.s)(Ri,e,t,r),n=(0,l.g)(o,o,i),a=this.offset/(0,l.l)(n);(0,l.m)(n,n,n,a);const s=this.objectTransform.inverse;return(0,l.g)(this.tmpVertex,n,s),this.tmpVertex}applyToMinMax(e,t){const r=this.offset/(0,l.l)(e);(0,l.m)(e,e,e,r);const i=this.offset/(0,l.l)(t);(0,l.m)(t,t,t,i)}applyToAabb(e){const t=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*t,e[1]+=e[1]*t,e[2]+=e[2]*t;const r=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*r,e[4]+=e[4]*r,e[5]+=e[5]*r,e}applyToBoundingSphere(e){const t=(0,l.l)((0,Ei.g)(e)),r=this.offset/t;return(0,l.m)((0,Ei.g)(this.sphere),(0,Ei.g)(e),(0,Ei.g)(e),r),this.sphere[3]=e[3]+e[3]*this.offset/t,this.sphere}};new class{constructor(e=0){this.componentLocalOriginLength=0,this._totalOffset=0,this._offset=0,this._tmpVertex=(0,c.c)(),this._tmpMbs=(0,Ei.b)(),this._tmpObb=new Si.O,this._resetOffset(e)}_resetOffset(e){this._offset=e,this._totalOffset=e}set offset(e){this._resetOffset(e)}get offset(){return this._offset}set componentOffset(e){this._totalOffset=this._offset+e}set localOrigin(e){this.componentLocalOriginLength=(0,l.l)(e)}applyToVertex(e,t,r){const i=(0,l.s)(Ri,e,t,r),o=(0,l.s)(Ci,e,t,r+this.componentLocalOriginLength),n=this._totalOffset/(0,l.l)(o);return(0,l.m)(this._tmpVertex,i,o,n),this._tmpVertex}applyToAabb(e){const t=this.componentLocalOriginLength,r=e[0],i=e[1],o=e[2]+t,n=e[3],a=e[4],s=e[5]+t,l=Math.abs(r),c=Math.abs(i),d=Math.abs(o),u=Math.abs(n),h=Math.abs(a),m=Math.abs(s),p=.5*(1+Math.sign(r*n))*Math.min(l,u),f=.5*(1+Math.sign(i*a))*Math.min(c,h),g=.5*(1+Math.sign(o*s))*Math.min(d,m),v=Math.max(l,u),_=Math.max(c,h),x=Math.max(d,m),T=Math.sqrt(p*p+f*f+g*g),b=Math.sign(l+r),E=Math.sign(c+i),S=Math.sign(d+o),A=Math.sign(u+n),R=Math.sign(h+a),C=Math.sign(m+s),y=this._totalOffset;if(T<y)return e[0]-=(1-b)*y,e[1]-=(1-E)*y,e[2]-=(1-S)*y,e[3]+=A*y,e[4]+=R*y,e[5]+=C*y,e;const M=y/Math.sqrt(v*v+_*_+x*x),w=y/T,O=w-M,I=-O;return e[0]+=r*(b*I+w),e[1]+=i*(E*I+w),e[2]+=o*(S*I+w),e[3]+=n*(A*O+M),e[4]+=a*(R*O+M),e[5]+=s*(C*O+M),e}applyToMbs(e){const t=(0,l.l)((0,Ei.g)(e)),r=this._totalOffset/t;return(0,l.m)((0,Ei.g)(this._tmpMbs),(0,Ei.g)(e),(0,Ei.g)(e),r),this._tmpMbs[3]=e[3]+e[3]*this._totalOffset/t,this._tmpMbs}applyToObb(e){return(0,Si.c)(e,this._totalOffset,this._totalOffset,O.V.Global,this._tmpObb),this._tmpObb}},new class{constructor(e=0){this.offset=e,this.tmpVertex=(0,c.c)()}applyToVertex(e,t,r){const i=(0,l.s)(Ri,e,t,r),o=(0,l.h)(Ci,i,this.localOrigin),n=this.offset/(0,l.l)(o);return(0,l.m)(this.tmpVertex,i,o,n),this.tmpVertex}applyToAabb(e){const t=yi,r=Mi,i=wi;for(let o=0;o<3;++o)t[o]=e[0+o]+this.localOrigin[o],r[o]=e[3+o]+this.localOrigin[o],i[o]=t[o];const o=this.applyToVertex(t[0],t[1],t[2]);for(let t=0;t<3;++t)e[t]=o[t],e[t+3]=o[t];const n=t=>{const r=this.applyToVertex(t[0],t[1],t[2]);for(let t=0;t<3;++t)e[t]=Math.min(e[t],r[t]),e[t+3]=Math.max(e[t+3],r[t])};for(let e=1;e<8;++e){for(let o=0;o<3;++o)i[o]=0==(e&1<<o)?t[o]:r[o];n(i)}let a=0;for(let e=0;e<3;++e)t[e]*r[e]<0&&(a|=1<<e);if(0!==a&&7!==a)for(let e=0;e<8;++e)if(0==(a&e)){for(let o=0;o<3;++o)i[o]=0!=(a&1<<o)?0:0!=(e&1<<o)?t[o]:r[o];n(i)}for(let t=0;t<3;++t)e[t]-=this.localOrigin[t],e[t+3]-=this.localOrigin[t];return e}};const Ri=(0,c.c)(),Ci=(0,c.c)(),yi=(0,c.c)(),Mi=(0,c.c)(),wi=(0,c.c)();function Oi(e,t,r){const{data:i,indices:o}=e,n=t.typedBuffer,a=t.typedBufferStride,s=o.length;r*=a;for(let e=0;e<s;++e){const t=2*o[e];n[r]=i[t],n[r+1]=i[t+1],r+=a}}function Ii(e,t,r,i){const{data:o,indices:n}=e,a=t.typedBuffer,s=t.typedBufferStride,l=n.length;if(r*=s,null==i||1===i)for(let e=0;e<l;++e){const t=3*n[e];a[r]=o[t],a[r+1]=o[t+1],a[r+2]=o[t+2],r+=s}else for(let e=0;e<l;++e){const t=3*n[e];for(let e=0;e<i;++e)a[r]=o[t],a[r+1]=o[t+1],a[r+2]=o[t+2],r+=s}}function Ni(e,t,r,i=1){const{data:o,indices:n}=e,a=t.typedBuffer,s=t.typedBufferStride,l=n.length;if(r*=s,1===i)for(let e=0;e<l;++e){const t=4*n[e];a[r]=o[t],a[r+1]=o[t+1],a[r+2]=o[t+2],a[r+3]=o[t+3],r+=s}else for(let e=0;e<l;++e){const t=4*n[e];for(let e=0;e<i;++e)a[r]=o[t],a[r+1]=o[t+1],a[r+2]=o[t+2],a[r+3]=o[t+3],r+=s}}function Pi(e,t,r,i,o=1){const n=t.typedBuffer,a=t.typedBufferStride;if(i*=a,1===o)for(let t=0;t<r;++t)n[i]=e[0],n[i+1]=e[1],n[i+2]=e[2],n[i+3]=e[3],i+=a;else for(let t=0;t<r;++t)for(let t=0;t<o;++t)n[i]=e[0],n[i+1]=e[1],n[i+2]=e[2],n[i+3]=e[3],i+=a}function Li(e,t,r,i,o,n){switch(e){case T.V.POSITION:{(0,I.a)(3===t.size);const i=o.getField(e,Zt.b);(0,I.a)(!!i,`No buffer view for ${e}`),i&&function(e,t,r,i,o=1){if(!t)return void Ii(e,r,i,o);const{data:n,indices:s}=e,l=r.typedBuffer,c=r.typedBufferStride,d=s.length,u=t[0],h=t[1],m=t[2],p=t[4],f=t[5],g=t[6],v=t[8],_=t[9],x=t[10],T=t[12],b=t[13],E=t[14];i*=c;let S=0,A=0,R=0;const C=(0,a.l)(t)?e=>{S=n[e]+T,A=n[e+1]+b,R=n[e+2]+E}:e=>{const t=n[e],r=n[e+1],i=n[e+2];S=u*t+p*r+v*i+T,A=h*t+f*r+_*i+b,R=m*t+g*r+x*i+E};if(1===o)for(let e=0;e<d;++e)C(3*s[e]),l[i]=S,l[i+1]=A,l[i+2]=R,i+=c;else for(let e=0;e<d;++e){C(3*s[e]);for(let e=0;e<o;++e)l[i]=S,l[i+1]=A,l[i+2]=R,i+=c}}(t,r,i,n);break}case T.V.NORMAL:{(0,I.a)(3===t.size);const r=o.getField(e,Zt.b);(0,I.a)(!!r,`No buffer view for ${e}`),r&&function(e,t,r,i,o=1){if(!t)return void Ii(e,r,i,o);const{data:n,indices:s}=e,l=t,c=r.typedBuffer,d=r.typedBufferStride,u=s.length,h=l[0],m=l[1],p=l[2],f=l[4],g=l[5],v=l[6],_=l[8],x=l[9],T=l[10],b=!(0,a.n)(l),E=1e-6,S=.999999;i*=d;let A=0,R=0,C=0;const y=(0,a.l)(l)?e=>{A=n[e],R=n[e+1],C=n[e+2]}:e=>{const t=n[e],r=n[e+1],i=n[e+2];A=h*t+f*r+_*i,R=m*t+g*r+x*i,C=p*t+v*r+T*i};if(1===o)if(b)for(let e=0;e<u;++e){y(3*s[e]);const t=A*A+R*R+C*C;if(t<S&&t>E){const e=1/Math.sqrt(t);c[i]=A*e,c[i+1]=R*e,c[i+2]=C*e}else c[i]=A,c[i+1]=R,c[i+2]=C;i+=d}else for(let e=0;e<u;++e)y(3*s[e]),c[i]=A,c[i+1]=R,c[i+2]=C,i+=d;else for(let e=0;e<u;++e){if(y(3*s[e]),b){const e=A*A+R*R+C*C;if(e<S&&e>E){const t=1/Math.sqrt(e);A*=t,R*=t,C*=t}}for(let e=0;e<o;++e)c[i]=A,c[i+1]=R,c[i+2]=C,i+=d}}(t,i,r,n);break}case T.V.NORMALCOMPRESSED:{(0,I.a)(2===t.size);const r=o.getField(e,Zt.D);(0,I.a)(!!r,`No buffer view for ${e}`),r&&Oi(t,r,n);break}case T.V.UV0:{(0,I.a)(2===t.size);const r=o.getField(e,Zt.a);(0,I.a)(!!r,`No buffer view for ${e}`),r&&Oi(t,r,n);break}case T.V.COLOR:case T.V.SYMBOLCOLOR:{const r=o.getField(e,Zt.o);(0,I.a)(!!r,`No buffer view for ${e}`),(0,I.a)(3===t.size||4===t.size),!r||3!==t.size&&4!==t.size||function(e,t,r,i,o=1){const{data:n,indices:a}=e,s=r.typedBuffer,l=r.typedBufferStride,c=a.length;if(i*=l,t!==n.length||4!==t)if(1!==o)if(4!==t)for(let e=0;e<c;++e){const t=3*a[e];for(let e=0;e<o;++e)s[i]=n[t],s[i+1]=n[t+1],s[i+2]=n[t+2],s[i+3]=255,i+=l}else for(let e=0;e<c;++e){const t=4*a[e];for(let e=0;e<o;++e)s[i]=n[t],s[i+1]=n[t+1],s[i+2]=n[t+2],s[i+3]=n[t+3],i+=l}else{if(4===t){for(let e=0;e<c;++e){const t=4*a[e];s[i]=n[t],s[i+1]=n[t+1],s[i+2]=n[t+2],s[i+3]=n[t+3],i+=l}return}for(let e=0;e<c;++e){const t=3*a[e];s[i]=n[t],s[i+1]=n[t+1],s[i+2]=n[t+2],s[i+3]=255,i+=l}}else{s[i]=n[0],s[i+1]=n[1],s[i+2]=n[2],s[i+3]=n[3];const e=new Uint32Array(r.typedBuffer.buffer,r.start),t=l/4,a=e[i/=4];i+=t;const d=c*o;for(let r=1;r<d;++r)e[i]=a,i+=t}}(t,t.size,r,n);break}case T.V.COLORFEATUREATTRIBUTE:{const r=o.getField(e,Zt.B);(0,I.a)(!!r,`No buffer view for ${e}`),(0,I.a)(1===t.size),r&&1===t.size&&function(e,t,r){const{data:i,indices:o}=e,n=t.typedBuffer,a=t.typedBufferStride,s=o.length,l=i[0];r*=a;for(let e=0;e<s;++e)n[r]=l,r+=a}(t,r,n);break}case T.V.TANGENT:{(0,I.a)(4===t.size);const r=o.getField(e,Zt.c);(0,I.a)(!!r,`No buffer view for ${e}`),r&&function(e,t,r,i,o=1){if(!t)return void Ni(e,r,i,o);const{data:n,indices:s}=e,l=t,c=r.typedBuffer,d=r.typedBufferStride,u=s.length,h=l[0],m=l[1],p=l[2],f=l[4],g=l[5],v=l[6],_=l[8],x=l[9],T=l[10],b=!(0,a.n)(l),E=1e-6,S=.999999;if(i*=d,1===o)for(let e=0;e<u;++e){const t=4*s[e],r=n[t],o=n[t+1],a=n[t+2],l=n[t+3];let u=h*r+f*o+_*a,A=m*r+g*o+x*a,R=p*r+v*o+T*a;if(b){const e=u*u+A*A+R*R;if(e<S&&e>E){const t=1/Math.sqrt(e);u*=t,A*=t,R*=t}}c[i]=u,c[i+1]=A,c[i+2]=R,c[i+3]=l,i+=d}else for(let e=0;e<u;++e){const t=4*s[e],r=n[t],a=n[t+1],l=n[t+2],u=n[t+3];let A=h*r+f*a+_*l,R=m*r+g*a+x*l,C=p*r+v*a+T*l;if(b){const e=A*A+R*R+C*C;if(e<S&&e>E){const t=1/Math.sqrt(e);A*=t,R*=t,C*=t}}for(let e=0;e<o;++e)c[i]=A,c[i+1]=R,c[i+2]=C,c[i+3]=u,i+=d}}(t,i,r,n);break}case T.V.PROFILERIGHT:case T.V.PROFILEUP:case T.V.PROFILEVERTEXANDNORMAL:case T.V.FEATUREVALUE:{(0,I.a)(4===t.size);const r=o.getField(e,Zt.c);(0,I.a)(!!r,`No buffer view for ${e}`),r&&Ni(t,r,n)}}}class Di{constructor(e){this.vertexBufferLayout=e}elementCount(e){return e.attributes.get(T.V.POSITION).indices.length}write(e,t,r,i,o){!function(e,t,r,i,o,n){for(const a of t.fields.keys()){const t=e.attributes.get(a),s=t?.indices;if(t&&s)Li(a,t,r,i,o,n);else if(a===T.V.OBJECTANDLAYERIDCOLOR&&null!=e.objectAndLayerIdColor){const t=e.attributes.get(T.V.POSITION)?.indices;if(t){const r=t.length,i=o.getField(a,Zt.o);Pi(e.objectAndLayerIdColor,i,r,n)}}}}(r,this.vertexBufferLayout,e,t,i,o)}}function Fi(e){Ve(e),e.vertex.code.add(g`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`),e.vertex.code.add(g`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}function Bi(e,t){t.hasVertexColors?(e.attributes.add(T.V.COLOR,"vec4"),e.varyings.add("vColor","vec4"),e.vertex.code.add(g`void forwardVertexColor() { vColor = color; }`),e.vertex.code.add(g`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):e.vertex.code.add(g`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}const Gi=(0,hr.f)(1,1,0,1),Vi=(0,hr.f)(1,0,1,1);function Ui(e){e.fragment.uniforms.add(new ot("depthTexture",((e,t)=>t.mainDepth))),e.fragment.constants.add("occludedHighlightFlag","vec4",Gi).add("unoccludedHighlightFlag","vec4",Vi),e.fragment.code.add(g`void outputHighlight() {
float sceneDepth = float(texelFetch(depthTexture, ivec2(gl_FragCoord.xy), 0).x);
if (gl_FragCoord.z > sceneDepth + 5e-7) {
fragColor = occludedHighlightFlag;
} else {
fragColor = unoccludedHighlightFlag;
}
}`)}var zi=r(75854),Hi=r(7200);function ji(e){e.vertex.code.add(g`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),e.vertex.code.add(g`vec3 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec3 params) {
return vec3(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z
);
}`),e.vertex.code.add(g`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),e.vertex.code.add(g`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),e.vertex.code.add(g`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),e.vertex.code.add(g`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}const Wi=(0,c.c)();function ki(e,t){const r=e.vertex;t.hasVerticalOffset?(function(e){e.uniforms.add(new it("verticalOffset",((e,t)=>{const{minWorldLength:r,maxWorldLength:i,screenLength:o}=e.verticalOffset,n=Math.tan(.5*t.camera.fovY)/(.5*t.camera.fullViewport[3]),a=t.camera.pixelRatio||1;return(0,Hi.s)(qi,o*a,n,r,i)})))}(r),t.hasScreenSizePerspective&&(e.include(ji),function(e){e.uniforms.add(new ve("screenSizePerspectiveAlignment",(e=>function(e){return(0,l.s)(Wi,e.parameters.divisor,e.parameters.offset,e.minScaleFactor)}(e.screenSizePerspectiveAlignment||e.screenSizePerspective))))}(r),be(e.vertex,t)),r.code.add(g`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${t.spherical?g`vec3 worldNormal = normalize(worldPos + localOrigin);`:g`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${t.hasScreenSizePerspective?g`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:g`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)):r.code.add(g`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}const qi=(0,hr.c)();var $i,Xi,Yi,Zi=r(58085),Ji=r(47880);!function(e){e[e.FBO=0]="FBO",e[e.DEPTH=1]="DEPTH",e[e.COLOR=2]="COLOR"}($i||($i={})),function(e){e[e.RED=0]="RED",e[e.RG=1]="RG",e[e.RGBA4=2]="RGBA4",e[e.RGBA=3]="RGBA",e[e.RGBA_MIPMAP=4]="RGBA_MIPMAP",e[e.R16F=5]="R16F",e[e.RGBA16F=6]="RGBA16F"}(Xi||(Xi={})),function(e){e[e.DEPTH_STENCIL_TEXTURE=0]="DEPTH_STENCIL_TEXTURE",e[e.DEPTH16_BUFFER=1]="DEPTH16_BUFFER"}(Yi||(Yi={}));class Ki extends fe{constructor(e,t){super(e,"bool",p.B.Pass,((r,i,o)=>r.setUniform1b(e,t(i,o))))}}function Qi(e,t=!0){e.attributes.add(T.V.POSITION,"vec2"),t&&e.varyings.add("uv","vec2"),e.vertex.code.add(g`
    void main(void) {
      gl_Position = vec4(position, 0.0, 1.0);
      ${t?g`uv = position * 0.5 + vec2(0.5);`:""}
    }
  `)}const eo={required:[]},to=(re.LinearDepth,re.CompositeColor,re.Highlight,{required:[re.Depth,re.Normal]});class ro extends S.Z{consumes(){return eo}get usedMemory(){return 0}get isDecoration(){return!1}get running(){return!1}get materialReference(){return null}modify(e){}get numGeometries(){return 0}get hasOccludees(){return!1}queryRenderOccludedState(e){return!1}}class io extends ro{}var oo=r(32191);function no(e){e.fragment.uniforms.add(new it("projInfo",((e,t)=>function(e){const t=e.projectionMatrix;return 0===t[11]?(0,Hi.s)(ao,2/(e.fullWidth*t[0]),2/(e.fullHeight*t[5]),(1+t[12])/t[0],(1+t[13])/t[5]):(0,Hi.s)(ao,-2/(e.fullWidth*t[0]),-2/(e.fullHeight*t[5]),(1-t[8])/t[0],(1-t[9])/t[5])}(t.camera)))),e.fragment.uniforms.add(new Fe("zScale",((e,t)=>0===t.camera.projectionMatrix[11]?(0,Ji.g)(so,0,1):(0,Ji.g)(so,1,0)))),e.fragment.code.add(g`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`)}const ao=(0,hr.c)(),so=(0,oo.c)();var lo=r(72434);function co(e,t){const r=e.fragment,i=void 0!==t.lightingSphericalHarmonicsOrder?t.lightingSphericalHarmonicsOrder:2;0===i?(r.uniforms.add(new ve("lightingAmbientSH0",((e,t)=>(0,l.s)(uo,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0])))),r.code.add(g`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===i?(r.uniforms.add(new it("lightingAmbientSH_R",((e,t)=>(0,Hi.s)(ho,t.lighting.sh.r[0],t.lighting.sh.r[1],t.lighting.sh.r[2],t.lighting.sh.r[3]))),new it("lightingAmbientSH_G",((e,t)=>(0,Hi.s)(ho,t.lighting.sh.g[0],t.lighting.sh.g[1],t.lighting.sh.g[2],t.lighting.sh.g[3]))),new it("lightingAmbientSH_B",((e,t)=>(0,Hi.s)(ho,t.lighting.sh.b[0],t.lighting.sh.b[1],t.lighting.sh.b[2],t.lighting.sh.b[3])))),r.code.add(g`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):2===i&&(r.uniforms.add(new ve("lightingAmbientSH0",((e,t)=>(0,l.s)(uo,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0]))),new it("lightingAmbientSH_R1",((e,t)=>(0,Hi.s)(ho,t.lighting.sh.r[1],t.lighting.sh.r[2],t.lighting.sh.r[3],t.lighting.sh.r[4]))),new it("lightingAmbientSH_G1",((e,t)=>(0,Hi.s)(ho,t.lighting.sh.g[1],t.lighting.sh.g[2],t.lighting.sh.g[3],t.lighting.sh.g[4]))),new it("lightingAmbientSH_B1",((e,t)=>(0,Hi.s)(ho,t.lighting.sh.b[1],t.lighting.sh.b[2],t.lighting.sh.b[3],t.lighting.sh.b[4]))),new it("lightingAmbientSH_R2",((e,t)=>(0,Hi.s)(ho,t.lighting.sh.r[5],t.lighting.sh.r[6],t.lighting.sh.r[7],t.lighting.sh.r[8]))),new it("lightingAmbientSH_G2",((e,t)=>(0,Hi.s)(ho,t.lighting.sh.g[5],t.lighting.sh.g[6],t.lighting.sh.g[7],t.lighting.sh.g[8]))),new it("lightingAmbientSH_B2",((e,t)=>(0,Hi.s)(ho,t.lighting.sh.b[5],t.lighting.sh.b[6],t.lighting.sh.b[7],t.lighting.sh.b[8])))),r.code.add(g`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),t.pbrMode!==nr.Normal&&t.pbrMode!==nr.Schematic||r.code.add(g`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const uo=(0,c.c)(),ho=(0,hr.c)();var mo,po;function fo(e=!(0,u.h)("disable-feature:high-quality-idle"),t=null){const r=new rr;return e?(r.set(lo.R.IDLE,mo.Antialiasing,"low"!==t),r.set(lo.R.IDLE,mo.HighResolutionAtmosphere,"low"!==t),r.set(lo.R.IDLE,mo.HighQualityTransparency,!0),r.set(lo.R.IDLE,mo.SSAO,!0),r.set(lo.R.IDLE,mo.WaterReflection,!0),r.set(lo.R.IDLE,mo.PhysicalPixelRendering,!0)):(r.set(lo.R.ANIMATING,mo.HighResolutionShadows,!0),r.set(lo.R.INTERACTING,mo.HighResolutionShadows,!0)),r.set(lo.R.IDLE,mo.HighResolutionShadows,!0),r.set(lo.R.IDLE,mo.HighResolutionVoxel,!0),r}function go(e,t){const r=e.fragment;switch(r.code.add(g`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),t.doubleSidedMode){case po.None:r.code.add(g`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case po.View:r.code.add(g`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case po.WindingOrder:r.code.add(g`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:(0,ur.n)(t.doubleSidedMode);case po.COUNT:}}function vo({normalTexture:e,metallicRoughnessTexture:t,metallicFactor:r,roughnessFactor:i,emissiveTexture:o,emissiveFactor:n,occlusionTexture:a}){return null==e&&null==t&&null==o&&(null==n||(0,l.o)(n,c.Z))&&null==a&&(null==i||1===i)&&(null==r||1===r)}function _o({normalTexture:e,metallicRoughnessTexture:t,metallicFactor:r,roughnessFactor:i,emissiveTexture:o,emissiveFactor:n,occlusionTexture:a}){return null==e&&null==t&&null==o&&(null==n||(0,l.o)(n,c.Z))&&null==a&&(null==i||1===i)&&(null==r||1===r||0===r)}!function(e){e[e.Antialiasing=0]="Antialiasing",e[e.HighQualityTransparency=1]="HighQualityTransparency",e[e.HighResolutionVoxel=2]="HighResolutionVoxel",e[e.HighResolutionAtmosphere=3]="HighResolutionAtmosphere",e[e.SSAO=4]="SSAO",e[e.WaterReflection=5]="WaterReflection",e[e.HighResolutionShadows=6]="HighResolutionShadows",e[e.PhysicalPixelRendering=7]="PhysicalPixelRendering"}(mo||(mo={})),function(e){e[e.None=0]="None",e[e.View=1]="View",e[e.WindingOrder=2]="WindingOrder",e[e.COUNT=3]="COUNT"}(po||(po={}));const xo=[1,1,.5],To=[0,.6,.2],bo=[0,1,.2];function Eo(e){e.vertex.code.add(g`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}function So(e){e.vertex.code.add(g`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${g.int(zi.C.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${g.int(zi.C.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${g.int(zi.C.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${g.int(zi.C.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}function Ao(e,t){t.hasSymbolColors?(e.include(So),e.attributes.add(T.V.SYMBOLCOLOR,"vec4"),e.varyings.add("colorMixMode","mediump float"),e.vertex.code.add(g`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(e.fragment.uniforms.add(new Mr("colorMixMode",(e=>k[e.colorMixMode]))),e.vertex.code.add(g`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}function Ro(e){e.fragment.code.add(g`
    #define discardOrAdjustAlpha(color) { if (color.a < ${g.float(wt)}) { discard; } }
  `)}class Co extends fe{constructor(e,t){super(e,"float",p.B.Draw,((r,i,o)=>r.setUniform1f(e,t(i,o))))}}function yo(e,t){wo(e,t,new _e("textureAlphaCutoff",(e=>e.textureAlphaCutoff)))}function Mo(e,t){wo(e,t,new Co("textureAlphaCutoff",(e=>e.textureAlphaCutoff)))}function wo(e,t,r){const i=e.fragment;switch(t.alphaDiscardMode!==h.A.Mask&&t.alphaDiscardMode!==h.A.MaskBlend||i.uniforms.add(r),t.alphaDiscardMode){case h.A.Blend:return e.include(Ro);case h.A.Opaque:i.code.add(g`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case h.A.Mask:i.code.add(g`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case h.A.MaskBlend:e.fragment.code.add(g`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}function Oo(e,t){const{vertex:r,fragment:i}=e,o=t.hasColorTexture&&t.alphaDiscardMode!==h.A.Opaque;switch(t.output){case re.LinearDepth:case re.Shadow:case re.ShadowHighlight:case re.ShadowExcludeHighlight:case re.ObjectAndLayerIdColor:Ee(r,t),e.include(Fi,t),e.include(Tr,t),e.include(Qe,t),e.include(rt,t),e.include(ze,t),e.include(Ze,t),Ge(e),e.varyings.add("depth","float"),o&&i.uniforms.add(new ot("tex",(e=>e.texture))),r.code.add(g`void main(void) {
vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();
}`),e.include(yo,t),i.code.add(g`
          void main(void) {
            discardBySlice(vpos);
            ${o?g`
                    vec4 texColor = texture(tex, ${t.hasColorTextureTransform?g`colorUV`:g`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            ${t.output===re.ObjectAndLayerIdColor?g`outputObjectAndLayerIdColor();`:g`outputDepth(depth);`}
          }
        `);break;case re.Normal:{Ee(r,t),e.include(Fi,t),e.include(mr,t),e.include(pr,t),e.include(Tr,t),e.include(Qe,t),o&&i.uniforms.add(new ot("tex",(e=>e.texture))),t.normalType===ir.ScreenDerivative&&e.varyings.add("vPositionView","vec3");const n=t.normalType===ir.Attribute||t.normalType===ir.Compressed;r.code.add(g`
          void main(void) {
            vpos = getVertexInLocalOriginSpace();

            ${n?g`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:g`
                  // Get vertex position in camera space for screen-space derivative normals
                  vPositionView = (view * vec4(vpos, 1.0)).xyz;
                `}
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            forwardTextureCoordinates();
          }
        `),e.include(ze,t),e.include(yo,t),i.code.add(g`
          void main() {
            discardBySlice(vpos);
            ${o?g`
                    vec4 texColor = texture(tex, ${t.hasColorTextureTransform?g`colorUV`:g`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}

            ${t.normalType===ir.ScreenDerivative?g`vec3 normal = screenDerivativeNormal(vPositionView);`:g`
                  vec3 normal = normalize(vNormalWorld);
                  if (gl_FrontFacing == false){
                    normal = -normal;
                  }`}
            fragColor = vec4(0.5 + 0.5 * normal, 1.0);
          }
        `);break}case re.Highlight:Ee(r,t),e.include(Fi,t),e.include(Tr,t),e.include(Qe,t),o&&i.uniforms.add(new ot("tex",(e=>e.texture))),r.code.add(g`void main(void) {
vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();
}`),e.include(ze,t),e.include(yo,t),e.include(Ui,t),i.code.add(g`
          void main() {
            discardBySlice(vpos);
            ${o?g`
                    vec4 texColor = texture(tex, ${t.hasColorTextureTransform?g`colorUV`:g`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            outputHighlight();
          }
        `)}}function Io(e,t){const r=e.fragment;t.hasVertexTangents?(e.attributes.add(T.V.TANGENT,"vec4"),e.varyings.add("vTangent","vec4"),t.doubleSidedMode===po.WindingOrder?r.code.add(g`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):r.code.add(g`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):r.code.add(g`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`),t.textureCoordinateType!==or.None&&(e.include(Er,t),r.uniforms.add(t.pbrTextureBindType===p.B.Pass?new ot("normalTexture",(e=>e.textureNormal)):new Sr("normalTexture",(e=>e.textureNormal))),r.code.add(g`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;
return tangentSpace * rawNormal;
}`))}class No extends fe{constructor(e,t){super(e,"vec2",p.B.Draw,((r,i,o,n)=>r.setUniform2fv(e,t(i,o,n))))}}const Po=Object.freeze(Object.defineProperty({__proto__:null,build:function(){const e=new Pt,t=e.fragment;return e.include(Qi),t.include(Ct),t.uniforms.add(new ot("depthMap",(e=>e.depthTexture)),new Sr("tex",(e=>e.colorTexture)),new No("blurSize",(e=>e.blurSize)),new _e("projScale",((e,t)=>{const r=(0,l.i)(t.camera.eye,t.camera.center);return r>5e4?Math.max(0,e.projScale-(r-5e4)):e.projScale})),new Fe("nearFar",((e,t)=>t.camera.nearFar))),t.code.add(g`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromDepthTexture(depthMap, uv, nearFar);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${g.float(.08)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),e.outputs.add("fragBlur","float"),t.code.add(g`
    void main(void) {
      float b = 0.0;
      float w_total = 0.0;

      float center_d = linearDepthFromDepthTexture(depthMap, uv, nearFar);

      float sharpness = -0.05 * projScale / center_d;
      for (int r = -${g.int(4)}; r <= ${g.int(4)}; ++r) {
        float rf = float(r);
        vec2 uvOffset = uv + rf * blurSize;
        blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
      }

      fragBlur = b / w_total;
    }
  `),e}},Symbol.toStringTag,{value:"Module"}));class Lo extends kt{initializeProgram(e){return new qt(e.rctx,Lo.shader.get().build(),N)}initializePipeline(){return $r({colorWrite:Br})}}Lo.shader=new Wt(Po,(()=>Promise.resolve().then((()=>Po))));class Do extends f{constructor(){super(...arguments),this.projScale=1}}class Fo extends Do{constructor(){super(...arguments),this.intensity=1}}class Bo extends f{}class Go extends Bo{constructor(){super(...arguments),this.blurSize=(0,oo.c)()}}function Vo(e){return Math.max(10,20*e.computeScreenPixelSizeAtDist(Math.abs(4*e.relativeElevation)))}const Uo=(0,oo.c)(),zo=Object.freeze(Object.defineProperty({__proto__:null,build:function(){const e=new Pt,t=e.fragment;return e.include(Qi),e.include(no),t.include(Ct),t.uniforms.add(new _e("radius",((e,t)=>Vo(t.camera)))),t.code.add(g`vec3 sphere[16] = vec3[16](
vec3(0.186937, 0.0, 0.0),
vec3(0.700542, 0.0, 0.0),
vec3(-0.864858, -0.481795, -0.111713),
vec3(-0.624773, 0.102853, -0.730153),
vec3(-0.387172, 0.260319, 0.007229),
vec3(-0.222367, -0.642631, -0.707697),
vec3(-0.01336, -0.014956, 0.169662),
vec3(0.122575, 0.1544, -0.456944),
vec3(-0.177141, 0.85997, -0.42346),
vec3(-0.131631, 0.814545, 0.524355),
vec3(-0.779469, 0.007991, 0.624833),
vec3(0.308092, 0.209288,0.35969),
vec3(0.359331, -0.184533, -0.377458),
vec3(0.192633, -0.482999, -0.065284),
vec3(0.233538, 0.293706, -0.055139),
vec3(0.417709, -0.386701, 0.442449)
);
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn - bias, 0.0);
}`),t.code.add(g`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),t.uniforms.add(new Fe("nearFar",((e,t)=>t.camera.nearFar)),new ot("normalMap",(e=>e.normalTexture)),new ot("depthMap",(e=>e.depthTexture)),new _e("projScale",(e=>e.projScale)),new ot("rnm",(e=>e.noiseTexture)),new Fe("rnmScale",((e,t)=>(0,Ji.g)(Uo,t.camera.fullWidth/e.noiseTexture.descriptor.width,t.camera.fullHeight/e.noiseTexture.descriptor.height))),new _e("intensity",(e=>e.intensity)),new Fe("screenSize",((e,t)=>(0,Ji.g)(Uo,t.camera.fullWidth,t.camera.fullHeight)))),e.outputs.add("fragOcclusion","float"),t.code.add(g`
    void main(void) {
      float currentPixelDepth = linearDepthFromDepthTexture(depthMap, uv, nearFar);

      if (-currentPixelDepth > nearFar.y || -currentPixelDepth < nearFar.x) {
        fragOcclusion = 1.0;
        return;
      }

      // get the normal of current fragment
      vec4 norm4 = texture(normalMap, uv);
      if(norm4.a != 1.0) {
        fragOcclusion = 1.0;
        return;
      }
      vec3 norm = vec3(-1.0) + 2.0 * norm4.xyz;

      vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy, currentPixelDepth);

      float sum = 0.0;
      vec3 tapPixelPos;

      vec3 fres = normalize(2.0 * texture(rnm, uv * rnmScale).xyz - 1.0);

      // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
      // bug or deviation from CE somewhere else?
      float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

      for(int i = 0; i < ${g.int(16)}; ++i) {
        vec2 unitOffset = reflect(sphere[i], fres).xy;
        vec2 offset = vec2(-unitOffset * radius * ps);

        // don't use current or very nearby samples
        if( abs(offset.x) < 2.0 || abs(offset.y) < 2.0){
          continue;
        }

        vec2 tc = vec2(gl_FragCoord.xy + offset);
        if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
        vec2 tcTap = tc / screenSize;
        float occluderFragmentDepth = linearDepthFromDepthTexture(depthMap, tcTap, nearFar);

        tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

        sum += aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
      }

      // output the result
      float A = max(1.0 - sum * intensity / float(${g.int(16)}), 0.0);

      // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
      A = (pow(A, 0.2) + 1.2 * A*A*A*A) / 2.2;

      fragOcclusion = A;
    }
  `),e},getRadius:Vo},Symbol.toStringTag,{value:"Module"}));class Ho extends kt{initializeProgram(e){return new qt(e.rctx,Ho.shader.get().build(),N)}initializePipeline(){return $r({colorWrite:Br})}}Ho.shader=new Wt(zo,(()=>Promise.resolve().then((()=>zo))));const jo=2;let Wo=class extends io{constructor(e){super(e),this._context=null,this._passParameters=new Fo,this._drawParameters=new Go,this.produces=new Map([[ie.SSAO,()=>this._produces()]])}_produces(){return null!=this._enableTime&&null!=this._context}consumes(){return this._produces()?to:eo}initializeRenderContext(e){this._context=e,this.addHandles([(0,Zi.YP)((()=>this.view.qualitySettings.ambientOcclusion||this._context?.isFeatureEnabled(mo.SSAO)),(e=>e?this._enable():this._disable()),Zi.tX)])}uninitializeRenderContext(){this._disable(),this._context=null}_disable(){this._passParameters.noiseTexture=(0,J.f)(this._passParameters.noiseTexture),this._enableTime=null}destroy(){this._disable()}_enable(){if(null!=this._enableTime||!this._context)return;const e=Uint8Array.from(atob("eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM"),(e=>e.charCodeAt(0))),t=new ce.a;t.wrapMode=le.b.CLAMP_TO_EDGE,t.pixelFormat=le.a.RGB,t.wrapMode=le.b.REPEAT,t.hasMipmap=!0,t.width=32,t.height=32,this._passParameters.noiseTexture=new ce.T(this._context.renderContext.rctx,t,e),null==this._ssaoTechnique&&(this._ssaoTechnique=this._context.techniqueRepository.acquire(Ho)),null==this._blurTechnique&&(this._blurTechnique=this._context.techniqueRepository.acquire(Lo)),this._enableTime=(0,M.M)(0),this._context?.requestRender()}renderNode(e,t,r){const i=e.bindParameters,o=r?.get("normals"),n=o?.getTexture(),a=o?.getTexture(le.d);if(null==this._enableTime||null==this._context||!n||!a)return;if(!this._ssaoTechnique.compiled||!this._blurTechnique.compiled)return this._enableTime=e.time,void this._context.requestRender();0===this._enableTime&&(this._enableTime=e.time);const s=e.rctx,l=i.camera,c=this.view.qualitySettings.fadeDuration,d=c>0?Math.min(c,e.time-this._enableTime)/c:1;this._passParameters.normalTexture=n,this._passParameters.depthTexture=a,this._passParameters.projScale=1/l.computeScreenPixelSizeAtDist(1),this._passParameters.intensity=4*ko/Vo(l)**6*d;const u=l.fullViewport[2],h=l.fullViewport[3],m=Math.round(u/jo),p=Math.round(h/jo),f=this._context.fbos,g=f.acquire(u,h,"ssao input",Xi.RG);s.setViewport(0,0,u,h),s.bindTechnique(this._ssaoTechnique,i,this._passParameters,this._drawParameters),s.screen.draw();const v=f.acquire(m,p,"ssao blur",Xi.RED);this._drawParameters.colorTexture=g.getTexture(),(0,Ji.g)(this._drawParameters.blurSize,0,jo/h),s.bindTechnique(this._blurTechnique,i,this._passParameters,this._drawParameters),s.setViewport(0,0,m,p),s.screen.draw(),g.release();const _=f.acquire(m,p,"ssao",Xi.RED);return s.setViewport(0,0,u,h),s.setClearColor(1,1,1,0),s.clear(le.l.COLOR_BUFFER_BIT),this._drawParameters.colorTexture=v.getTexture(),(0,Ji.g)(this._drawParameters.blurSize,jo/u,0),s.bindTechnique(this._blurTechnique,i,this._passParameters,this._drawParameters),s.setViewport(0,0,m,p),s.screen.draw(),s.setViewport4fv(l.fullViewport),v.release(),d<1&&this._context.requestRender(),_}};(0,m._)([(0,A.Cb)({constructOnly:!0})],Wo.prototype,"view",void 0),(0,m._)([(0,A.Cb)()],Wo.prototype,"_context",void 0),Wo=(0,m._)([(0,C.j)("esri.views.3d.webgl-engine.effects.ssao.SSAO")],Wo);const ko=.5;function qo(e,t){const r=e.fragment;t.receiveAmbientOcclusion?(r.uniforms.add(new ot("ssaoTex",((e,t)=>t.ssao?.getTexture()))),r.constants.add("blurSizePixelsInverse","float",1/jo),r.code.add(g`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):r.code.add(g`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}function $o(e){e.constants.add("ambientBoostFactor","float",yr)}function Xo(e){e.uniforms.add(new _e("lightingGlobalFactor",((e,t)=>t.lighting.globalFactor)))}function Yo(e,t){const r=e.fragment;switch(e.include(qo,t),t.pbrMode!==nr.Disabled&&e.include(Cr,t),e.include(co,t),e.include(Mt),r.code.add(g`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${t.pbrMode===nr.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),$o(r),Xo(r),vr(r),r.code.add(g`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${t.spherical?g`normalize(vPosWorld)`:g`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),_r(r),r.code.add(g`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),t.pbrMode){case nr.Disabled:case nr.WaterOnIntegratedMesh:case nr.Water:e.include(xr),r.code.add(g`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case nr.Normal:case nr.Schematic:r.code.add(g`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),r.code.add(g`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),t.useFillLights?r.uniforms.add(new Ki("hasFillLights",((e,t)=>t.enableFillLights))):r.constants.add("hasFillLights","bool",!1),r.code.add(g`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0) ? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),r.uniforms.add(new _e("lightingSpecularStrength",((e,t)=>t.lighting.mainLight.specularStrength)),new _e("lightingEnvironmentStrength",((e,t)=>t.lighting.mainLight.environmentStrength))),r.code.add(g`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
float normalDirectionModifier = mix(1., min(mix(0.1, 2.0, (inputs.NdotNG + 1.) * 0.5), 1.0), clamp(inputs.roughness * 5.0, 0.0 , 1.0));
inputs.skyRadianceToSurface = (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.groundRadianceToSurface = 0.5 * GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),r.code.add(g`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = _emission == vec3(0.0) ? _emission : pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${t.pbrMode!==nr.Schematic||t.hasColorTexture?g`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`:g`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case nr.Simplified:case nr.TerrainWithWater:e.include(xr),r.code.add(g`const float roughnessTerrain = 0.5;
const float specularityTerrain = 0.5;
const vec3 fresnelReflectionTerrain = vec3(0.04);
vec3 evaluatePBRSimplifiedLighting(vec3 n, vec3 c, float shadow, float ssao, vec3 al, vec3 vd, vec3 nup) {
vec3 viewDirection = -vd;
vec3 h = normalize(viewDirection + mainLightDirection);
float NdotL = clamp(dot(n, mainLightDirection), 0.001, 1.0);
float NdotV = clamp(abs(dot(n, viewDirection)), 0.001, 1.0);
float NdotH = clamp(dot(n, h), 0.0, 1.0);
float NdotNG = clamp(dot(n, nup), -1.0, 1.0);
vec3 albedoLinear = pow(c, vec3(GAMMA_SRGB));
float lightness = 0.3 * albedoLinear[0] + 0.5 * albedoLinear[1] + 0.2 * albedoLinear[2];
vec3 f0 = (0.85 * lightness + 0.15) * fresnelReflectionTerrain;
vec3 f90 =  vec3(clamp(dot(f0, vec3(50.0 * 0.33)), 0.0, 1.0));
vec3 mainLightIrradianceComponent = (1. - shadow) * NdotL * mainLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(n, ssao) + al;
vec3 ambientSky = ambientLightIrradianceComponent + mainLightIrradianceComponent;
vec3 indirectDiffuse = ((1.0 - NdotNG) * mainLightIrradianceComponent + (1.0 + NdotNG ) * ambientSky) * 0.5;
vec3 outDiffColor = albedoLinear * (1.0 - f0) * indirectDiffuse / PI;
vec3 mainLightRadianceComponent = normalDistribution(NdotH, roughnessTerrain) * mainLightIntensity;
vec2 dfg = prefilteredDFGAnalytical(roughnessTerrain, NdotV);
vec3 specularColor = f0 * dfg.x + f90 * dfg.y;
vec3 specularComponent = specularityTerrain * specularColor * mainLightRadianceComponent;
vec3 outColorLinear = outDiffColor + specularComponent;
vec3 outColor = pow(outColorLinear, vec3(INV_GAMMA_SRGB));
return outColor;
}`);break;default:(0,ur.n)(t.pbrMode);case nr.COUNT:}}class Zo extends fe{constructor(e,t,r){super(e,"mat4",p.B.Draw,((r,i,o,n)=>r.setUniformMatrix4fv(e,t(i,o,n))),r)}}class Jo extends fe{constructor(e,t,r){super(e,"mat4",p.B.Pass,((r,i,o)=>r.setUniformMatrix4fv(e,t(i,o))),r)}}class Ko extends f{constructor(){super(...arguments),this.modelTransformation=s.I}}class Qo extends Ko{constructor(){super(...arguments),this.origin=(0,c.c)()}}function en(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new Jo("shadowMapMatrix",((e,t)=>t.shadowMap.getShadowMapMatrices(e.origin)),4)),rn(e))}function tn(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new Zo("shadowMapMatrix",((e,t)=>t.shadowMap.getShadowMapMatrices(e.origin)),4)),rn(e))}function rn(e){const t=e.fragment;t.include(et),t.uniforms.add(new ot("shadowMap",((e,t)=>t.shadowMap.depthTexture)),new Mr("numCascades",((e,t)=>t.shadowMap.numCascades)),new it("cascadeDistances",((e,t)=>t.shadowMap.cascadeDistances))),t.code.add(g`int chooseCascade(float depth, out mat4 mat) {
vec4 distance = cascadeDistances;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, ivec2 textureSize, vec3 lvpos) {
float xScale = float(textureSize.y) / float(textureSize.x);
return vec2((float(i) + lvpos.x) * xScale, lvpos.y);
}
float readShadowMapDepth(ivec2 uv, sampler2D _depthTex) {
return rgba4ToFloat(texelFetch(_depthTex, uv, 0));
}
float posIsInShadow(ivec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, ivec2 texSize, sampler2D _depthTex) {
vec2 st = fract(uv * vec2(texSize) + vec2(0.5));
ivec2 base = ivec2(uv * vec2(texSize) - vec2(0.5));
float s00 = posIsInShadow(ivec2(base.x, base.y), lvpos, _depthTex);
float s10 = posIsInShadow(ivec2(base.x + 1, base.y), lvpos, _depthTex);
float s11 = posIsInShadow(ivec2(base.x + 1, base.y + 1), lvpos, _depthTex);
float s01 = posIsInShadow(ivec2(base.x, base.y + 1), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= numCascades) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0 || lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
ivec2 size = textureSize(shadowMap, 0);
vec2 uv = cascadeCoordinates(i, size, lvpos);
return filterShadow(uv, lvpos, size, shadowMap);
}`)}function on(e,t){t.hasColorTextureTransform?(e.vertex.uniforms.add(new Re("colorTextureTransformMatrix",(e=>e.colorTextureTransformMatrix??n.I))),e.varyings.add("colorUV","vec2"),e.vertex.code.add(g`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(g`void forwardColorUV(){}`)}function nn(e,t){t.hasNormalTextureTransform&&t.textureCoordinateType!==or.None?(e.vertex.uniforms.add(new Re("normalTextureTransformMatrix",(e=>e.normalTextureTransformMatrix??n.I))),e.varyings.add("normalUV","vec2"),e.vertex.code.add(g`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(g`void forwardNormalUV(){}`)}function an(e,t){t.hasEmissionTextureTransform&&t.textureCoordinateType!==or.None?(e.vertex.uniforms.add(new Re("emissiveTextureTransformMatrix",(e=>e.emissiveTextureTransformMatrix??n.I))),e.varyings.add("emissiveUV","vec2"),e.vertex.code.add(g`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(g`void forwardEmissiveUV(){}`)}function sn(e,t){t.hasOcclusionTextureTransform&&t.textureCoordinateType!==or.None?(e.vertex.uniforms.add(new Re("occlusionTextureTransformMatrix",(e=>e.occlusionTextureTransformMatrix??n.I))),e.varyings.add("occlusionUV","vec2"),e.vertex.code.add(g`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(g`void forwardOcclusionUV(){}`)}function ln(e,t){t.hasMetallicRoughnessTextureTransform&&t.textureCoordinateType!==or.None?(e.vertex.uniforms.add(new Re("metallicRoughnessTextureTransformMatrix",(e=>e.metallicRoughnessTextureTransformMatrix??n.I))),e.varyings.add("metallicRoughnessUV","vec2"),e.vertex.code.add(g`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(g`void forwardMetallicRoughnessUV(){}`)}function cn(e){e.include(Ot),e.code.add(g`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${g.int(zi.C.Multiply)}) {
        return allMixed;
      }
      if (mode == ${g.int(zi.C.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${g.int(zi.C.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${g.int(zi.C.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${g.int(zi.C.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}const dn=Object.freeze(Object.defineProperty({__proto__:null,build:function(e){const t=new Pt,{vertex:r,fragment:i,varyings:o}=t;if(Ee(r,e),t.include(Ie),o.add("vpos","vec3"),t.include(Qe,e),t.include(Me,e),t.include(ki,e),t.include(on,e),e.output===re.Color||e.output===re.Alpha){t.include(nn,e),t.include(an,e),t.include(sn,e),t.include(ln,e),be(r,e),t.include(mr,e),t.include(Fi,e);const i=e.normalType===ir.Attribute||e.normalType===ir.Compressed;i&&e.offsetBackfaces&&t.include(Eo),t.include(Io,e),t.include(pr,e),e.instancedColor&&t.attributes.add(T.V.INSTANCECOLOR,"vec4"),o.add("vPositionLocal","vec3"),t.include(Tr,e),t.include(Ue,e),t.include(Ao,e),t.include(Bi,e),r.uniforms.add(new it("externalColor",(e=>e.externalColor))),o.add("vcolorExt","vec4"),e.multipassEnabled&&o.add("depth","float"),r.code.add(g`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${e.instancedColor?"vcolorExt *= instanceColor * 0.003921568627451;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${g.float(wt)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        } else {
          vpos = getVertexInLocalOriginSpace();
          vPositionLocal = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${i?g`vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${e.hasVertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, vpos);
          ${i&&e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${e.multipassEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
        forwardColorUV();
        forwardNormalUV();
        forwardEmissiveUV();
        forwardOcclusionUV();
        forwardMetallicRoughnessUV();
      }
    `)}switch(e.output){case re.Alpha:t.include(ze,e),t.include(yo,e),t.include(yt,e),i.uniforms.add(new _e("opacity",(e=>e.opacity)),new _e("layerOpacity",(e=>e.layerOpacity))),e.hasColorTexture&&i.uniforms.add(new ot("tex",(e=>e.texture))),i.include(cn),i.code.add(g`
      void main() {
        discardBySlice(vpos);
        ${e.multipassEnabled?"terrainDepthTest(depth);":""}
        ${e.hasColorTexture?g`
                vec4 texColor = texture(tex, ${e.hasColorTextureTransform?g`colorUV`:g`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:g`vec4 texColor = vec4(1.0);`}
        ${e.hasVertexColors?g`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:g`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        fragColor = vec4(opacity_);
      }
    `);break;case re.Color:t.include(ze,e),t.include(Yo,e),t.include(qo,e),t.include(yo,e),t.include(e.instancedDoublePrecision?en:tn,e),t.include(yt,e),be(i,e),i.uniforms.add(r.uniforms.get("localOrigin"),new ve("ambient",(e=>e.ambient)),new ve("diffuse",(e=>e.diffuse)),new _e("opacity",(e=>e.opacity)),new _e("layerOpacity",(e=>e.layerOpacity))),e.hasColorTexture&&i.uniforms.add(new ot("tex",(e=>e.texture))),t.include(Ar,e),t.include(Cr,e),i.include(cn),t.include(go,e),$o(i),Xo(i),_r(i),i.code.add(g`
      void main() {
        discardBySlice(vpos);
        ${e.multipassEnabled?"terrainDepthTest(depth);":""}
        ${e.hasColorTexture?g`
                vec4 texColor = texture(tex, ${e.hasColorTextureTransform?g`colorUV`:g`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:g`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${e.normalType===ir.ScreenDerivative?g`
                vec3 normal = screenDerivativeNormal(vPositionLocal);`:g`
                shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
        ${e.pbrMode===nr.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse() * getBakedOcclusion();

        vec3 posWorld = vpos + localOrigin;

        float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
        float shadow = ${e.receiveShadows?"readShadowMap(vpos, linearDepth)":e.spherical?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};

        vec3 matColor = max(ambient, diffuse);
        ${e.hasVertexColors?g`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:g`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${e.hasNormalTexture?g`
                mat3 tangentSpace = ${e.hasVertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
                vec3 shadingNormal = computeTextureNormal(tangentSpace, ${e.hasNormalTextureTransform?g`normalUV`:"vuv0"});`:g`vec3 shadingNormal = normal;`}
        vec3 normalGround = ${e.spherical?g`normalize(posWorld);`:g`vec3(0.0, 0.0, 1.0);`}

        ${e.snowCover?g`
                float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
                albedo = mix(albedo, vec3(1), snow);
                shadingNormal = mix(shadingNormal, normal, snow);
                ssao = mix(ssao, 1.0, snow);`:""}

        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        ${e.pbrMode===nr.Normal||e.pbrMode===nr.Schematic?g`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${e.snowCover?g`
                        mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                        emission = mix(emission, vec3(0.0), snow);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:g`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.transparencyPassType===Ir.Color?g`fragColor = premultiplyAlpha(fragColor);`:""}
      }
    `)}return t.include(Oo,e),t}},Symbol.toStringTag,{value:"Module"}));class un extends fr{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=(0,c.e)(xo),this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=h.C.Back,this.isInstanced=!1,this.hasInstancedColor=!1,this.emissiveFactor=(0,c.f)(0,0,0),this.instancedDoublePrecision=!1,this.normalType=ir.Attribute,this.receiveShadows=!0,this.castShadows=!0,this.shadowMappingEnabled=!1,this.ambient=(0,c.f)(.2,.2,.2),this.diffuse=(0,c.f)(.8,.8,.8),this.externalColor=(0,hr.f)(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=(0,c.c)(),this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.offsetTransparentBackfaces=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.modelTransformation=null,this.transparent=!1,this.writeDepth=!0,this.customDepthTest=h.a.Less,this.textureAlphaMode=h.A.Blend,this.textureAlphaCutoff=.1,this.textureAlphaPremultiplied=!1,this.hasOccludees=!1,this.renderOccluded=X.Occlude,this.isDecoration=!1}}class hn extends gr{constructor(){super(...arguments),this.origin=(0,c.c)(),this.slicePlaneLocalOrigin=this.origin}}class mn extends kt{initializeConfiguration(e,t){t.spherical=e.viewingMode===O.V.Global,t.doublePrecisionRequiresObfuscation=e.rctx.driverTest.doublePrecisionRequiresObfuscation.result,t.textureCoordinateType=t.hasColorTexture||t.hasMetallicRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture||t.hasNormalTexture?or.Default:or.None,t.objectAndLayerIdColorInstanced=t.instanced}initializeProgram(e){return this._initializeProgram(e,mn.shader)}_initializeProgram(e,t){return new qt(e.rctx,t.get().build(this.configuration),N)}_convertDepthTestFunction(e){return e===h.a.Lequal?le.k.LEQUAL:le.k.LESS}_makePipeline(e,t){const r=this.configuration,i=e===Ir.NONE,o=e===Ir.FrontFace;return $r({blending:r.output!==re.Color&&r.output!==re.Alpha||!r.transparent?null:i?fi:_i(e),culling:pn(r)?Dr(r.cullFace):null,depthTest:{func:bi(e,this._convertDepthTestFunction(r.customDepthTest))},depthWrite:(i||o)&&r.writeDepth?Fr:null,colorWrite:Br,stencilWrite:r.hasOccludees?$t:null,stencilTest:r.hasOccludees?t?Yt:Xt:null,polygonOffset:i||o?null:Ti(r.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._makePipeline(this.configuration.transparencyPassType,!0),this._makePipeline(this.configuration.transparencyPassType,!1)}getPipeline(e){return e?this._occludeePipelineState:super.getPipeline()}}function pn(e){return e.cullFace!==h.C.None||!e.hasSlicePlane&&!e.transparent&&!e.doubleSidedMode}mn.shader=new Wt(dn,(()=>Promise.resolve().then((()=>dn))));class fn extends Oe{constructor(){super(...arguments),this.output=re.Color,this.alphaDiscardMode=h.A.Opaque,this.doubleSidedMode=po.None,this.pbrMode=nr.Disabled,this.cullFace=h.C.None,this.transparencyPassType=Ir.NONE,this.normalType=ir.Attribute,this.textureCoordinateType=or.None,this.customDepthTest=h.a.Less,this.spherical=!1,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.multipassEnabled=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.objectAndLayerIdColorInstanced=!1,this.instancedDoublePrecision=!1,this.doublePrecisionRequiresObfuscation=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.cullAboveGround=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1}}(0,m._)([x({count:re.COUNT})],fn.prototype,"output",void 0),(0,m._)([x({count:h.A.COUNT})],fn.prototype,"alphaDiscardMode",void 0),(0,m._)([x({count:po.COUNT})],fn.prototype,"doubleSidedMode",void 0),(0,m._)([x({count:nr.COUNT})],fn.prototype,"pbrMode",void 0),(0,m._)([x({count:h.C.COUNT})],fn.prototype,"cullFace",void 0),(0,m._)([x({count:Ir.COUNT})],fn.prototype,"transparencyPassType",void 0),(0,m._)([x({count:ir.COUNT})],fn.prototype,"normalType",void 0),(0,m._)([x({count:or.COUNT})],fn.prototype,"textureCoordinateType",void 0),(0,m._)([x({count:h.a.COUNT})],fn.prototype,"customDepthTest",void 0),(0,m._)([x()],fn.prototype,"spherical",void 0),(0,m._)([x()],fn.prototype,"hasVertexColors",void 0),(0,m._)([x()],fn.prototype,"hasSymbolColors",void 0),(0,m._)([x()],fn.prototype,"hasVerticalOffset",void 0),(0,m._)([x()],fn.prototype,"hasSlicePlane",void 0),(0,m._)([x()],fn.prototype,"hasSliceHighlight",void 0),(0,m._)([x()],fn.prototype,"hasColorTexture",void 0),(0,m._)([x()],fn.prototype,"hasMetallicRoughnessTexture",void 0),(0,m._)([x()],fn.prototype,"hasEmissionTexture",void 0),(0,m._)([x()],fn.prototype,"hasOcclusionTexture",void 0),(0,m._)([x()],fn.prototype,"hasNormalTexture",void 0),(0,m._)([x()],fn.prototype,"hasScreenSizePerspective",void 0),(0,m._)([x()],fn.prototype,"hasVertexTangents",void 0),(0,m._)([x()],fn.prototype,"hasOccludees",void 0),(0,m._)([x()],fn.prototype,"multipassEnabled",void 0),(0,m._)([x()],fn.prototype,"hasModelTransformation",void 0),(0,m._)([x()],fn.prototype,"offsetBackfaces",void 0),(0,m._)([x()],fn.prototype,"vvSize",void 0),(0,m._)([x()],fn.prototype,"vvColor",void 0),(0,m._)([x()],fn.prototype,"receiveShadows",void 0),(0,m._)([x()],fn.prototype,"receiveAmbientOcclusion",void 0),(0,m._)([x()],fn.prototype,"textureAlphaPremultiplied",void 0),(0,m._)([x()],fn.prototype,"instanced",void 0),(0,m._)([x()],fn.prototype,"instancedColor",void 0),(0,m._)([x()],fn.prototype,"objectAndLayerIdColorInstanced",void 0),(0,m._)([x()],fn.prototype,"instancedDoublePrecision",void 0),(0,m._)([x()],fn.prototype,"doublePrecisionRequiresObfuscation",void 0),(0,m._)([x()],fn.prototype,"writeDepth",void 0),(0,m._)([x()],fn.prototype,"transparent",void 0),(0,m._)([x()],fn.prototype,"enableOffset",void 0),(0,m._)([x()],fn.prototype,"cullAboveGround",void 0),(0,m._)([x()],fn.prototype,"snowCover",void 0),(0,m._)([x()],fn.prototype,"hasColorTextureTransform",void 0),(0,m._)([x()],fn.prototype,"hasEmissionTextureTransform",void 0),(0,m._)([x()],fn.prototype,"hasNormalTextureTransform",void 0),(0,m._)([x()],fn.prototype,"hasOcclusionTextureTransform",void 0),(0,m._)([x()],fn.prototype,"hasMetallicRoughnessTextureTransform",void 0),(0,m._)([x({constValue:!1})],fn.prototype,"occlusionPass",void 0),(0,m._)([x({constValue:!0})],fn.prototype,"hasVvInstancing",void 0),(0,m._)([x({constValue:!1})],fn.prototype,"useCustomDTRExponentForWater",void 0),(0,m._)([x({constValue:!1})],fn.prototype,"supportsTextureAtlas",void 0),(0,m._)([x({constValue:!0})],fn.prototype,"useFillLights",void 0);const gn=Object.freeze(Object.defineProperty({__proto__:null,build:function(e){const t=new Pt,{vertex:r,fragment:i,varyings:o}=t;return Ee(r,e),t.include(Ie),o.add("vpos","vec3"),t.include(Qe,e),t.include(Me,e),t.include(ki,e),e.output!==re.Color&&e.output!==re.Alpha||(be(t.vertex,e),t.include(mr,e),t.include(Fi,e),e.offsetBackfaces&&t.include(Eo),e.instancedColor&&t.attributes.add(T.V.INSTANCECOLOR,"vec4"),o.add("vNormalWorld","vec3"),o.add("localvpos","vec3"),e.multipassEnabled&&o.add("depth","float"),t.include(Tr,e),t.include(Ue,e),t.include(Ao,e),t.include(Bi,e),r.uniforms.add(new it("externalColor",(e=>e.externalColor))),o.add("vcolorExt","vec4"),r.code.add(g`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${e.instancedColor?"vcolorExt *= instanceColor * 0.003921568627451;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${g.float(wt)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          } else {
            vpos = getVertexInLocalOriginSpace();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
          }
          ${e.multipassEnabled?g`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),e.output===re.Alpha&&(t.include(ze,e),t.include(yo,e),t.include(yt,e),i.uniforms.add(new _e("opacity",(e=>e.opacity)),new _e("layerOpacity",(e=>e.layerOpacity))),e.hasColorTexture&&i.uniforms.add(new ot("tex",(e=>e.texture))),i.include(cn),i.code.add(g`
      void main() {
        discardBySlice(vpos);
        ${e.multipassEnabled?g`terrainDepthTest(depth);`:""}
        ${e.hasColorTexture?g`
                vec4 texColor = texture(tex, ${e.hasColorTextureTransform?g`colorUV`:g`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:g`vec4 texColor = vec4(1.0);`}
        ${e.hasVertexColors?g`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:g`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}

        fragColor = vec4(opacity_);
      }
    `)),e.output===re.Color&&(t.include(ze,e),t.include(Yo,e),t.include(qo,e),t.include(yo,e),t.include(e.instancedDoublePrecision?en:tn,e),t.include(yt,e),be(t.fragment,e),vr(i),$o(i),Xo(i),i.uniforms.add(r.uniforms.get("localOrigin"),r.uniforms.get("view"),new ve("ambient",(e=>e.ambient)),new ve("diffuse",(e=>e.diffuse)),new _e("opacity",(e=>e.opacity)),new _e("layerOpacity",(e=>e.layerOpacity))),e.hasColorTexture&&i.uniforms.add(new ot("tex",(e=>e.texture))),t.include(Ar,e),t.include(Cr,e),i.include(cn),_r(i),i.code.add(g`
      void main() {
        discardBySlice(vpos);
        ${e.multipassEnabled?g`terrainDepthTest(depth);`:""}
        ${e.hasColorTexture?g`
                vec4 texColor = texture(tex, ${e.hasColorTextureTransform?g`colorUV`:g`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:g`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${e.pbrMode===nr.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":e.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.hasVertexColors?g`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:g`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${e.snowCover?g`albedo = mix(albedo, vec3(1), 0.9);`:g``}
        ${g`
            vec3 shadingNormal = normalize(vNormalWorld);
            albedo *= 1.2;
            vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
            float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
            float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
            float treeRadialFalloff = vColor.r;
            float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
            additionalLight += backLightFactor * mainLightIntensity;`}
        ${e.pbrMode===nr.Normal||e.pbrMode===nr.Schematic?e.spherical?g`vec3 normalGround = normalize(vpos + localOrigin);`:g`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:g``}
        ${e.pbrMode===nr.Normal||e.pbrMode===nr.Schematic?g`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${e.snowCover?g`
                        mrr = vec3(0.0, 1.0, 0.04);
                        emission = vec3(0.0);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:g`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.transparencyPassType===Ir.Color?g`fragColor = premultiplyAlpha(fragColor);`:g``}
      }
    `)),t.include(Oo,e),t}},Symbol.toStringTag,{value:"Module"}));class vn extends mn{initializeConfiguration(e,t){super.initializeConfiguration(e,t),t.hasMetallicRoughnessTexture=!1,t.hasEmissionTexture=!1,t.hasOcclusionTexture=!1,t.hasNormalTexture=!1,t.hasModelTransformation=!1,t.normalType=ir.Attribute,t.doubleSidedMode=po.WindingOrder,t.hasVertexTangents=!1}initializeProgram(e){return this._initializeProgram(e,vn.shader)}}vn.shader=new Wt(gn,(()=>Promise.resolve().then((()=>gn))));class _n extends ${constructor(e){super(e,Tn),this.supportsEdges=!0,this.produces=new Map([[ie.OPAQUE_MATERIAL,e=>(he(e)||ue(e))&&!this.parameters.transparent],[ie.TRANSPARENT_MATERIAL,e=>(he(e)||ue(e))&&this.parameters.transparent&&this.parameters.writeDepth],[ie.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL,e=>(he(e)||ue(e))&&this.parameters.transparent&&!this.parameters.writeDepth]]),this._configuration=new fn,this._vertexBufferLayout=function(e){const t=(0,dr.n)().vec3f(T.V.POSITION);return e.normalType===ir.Compressed?t.vec2i16(T.V.NORMALCOMPRESSED,{glNormalized:!0}):t.vec3f(T.V.NORMAL),e.hasVertexTangents&&t.vec4f(T.V.TANGENT),(e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId)&&t.vec2f(T.V.UV0),e.hasVertexColors&&t.vec4u8(T.V.COLOR),e.hasSymbolColors&&t.vec4u8(T.V.SYMBOLCOLOR),(0,u.h)("enable-feature:objectAndLayerId-rendering")&&t.vec4u8(T.V.OBJECTANDLAYERIDCOLOR),t}(this.parameters)}isVisibleForOutput(e){return e!==re.Shadow&&e!==re.ShadowExcludeHighlight&&e!==re.ShadowHighlight||this.parameters.castShadows}isVisible(){const e=this.parameters;if(!super.isVisible()||0===e.layerOpacity)return!1;const{hasInstancedColor:t,hasVertexColors:r,hasSymbolColors:i,vvColor:o}=e,n="replace"===e.colorMixMode,a=e.opacity>0,s=e.externalColor&&e.externalColor[3]>0,l=t||o||i;return r&&l?n||a:r?n?s:a:l?n||a:n?s:a}getConfiguration(e,t){return this._configuration.output=e,this._configuration.hasNormalTexture=!!this.parameters.normalTextureId,this._configuration.hasColorTexture=!!this.parameters.textureId,this._configuration.hasVertexTangents=this.parameters.hasVertexTangents,this._configuration.instanced=this.parameters.isInstanced,this._configuration.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.hasVerticalOffset=null!=this.parameters.verticalOffset,this._configuration.hasScreenSizePerspective=null!=this.parameters.screenSizePerspective,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasSliceHighlight=this.parameters.hasSliceHighlight,this._configuration.alphaDiscardMode=this.parameters.textureAlphaMode,this._configuration.normalType=this.parameters.normalType,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,null!=this.parameters.customDepthTest&&(this._configuration.customDepthTest=this.parameters.customDepthTest),this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.cullFace=this.parameters.hasSlicePlane?h.C.None:this.parameters.cullFace,this._configuration.multipassEnabled=t.multipassEnabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration.hasModelTransformation=null!=this.parameters.modelTransformation,e!==re.Color&&e!==re.Alpha||(this._configuration.hasVertexColors=this.parameters.hasVertexColors,this._configuration.hasSymbolColors=this.parameters.hasSymbolColors,this.parameters.treeRendering?this._configuration.doubleSidedMode=po.WindingOrder:this._configuration.doubleSidedMode=this.parameters.doubleSided&&"normal"===this.parameters.doubleSidedType?po.View:this.parameters.doubleSided&&"winding-order"===this.parameters.doubleSidedType?po.WindingOrder:po.None,this._configuration.instancedColor=this.parameters.hasInstancedColor,this._configuration.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this._configuration.receiveAmbientOcclusion=null!=t.ssao,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this._configuration.pbrMode=this.parameters.usePBR?this.parameters.isSchematic?nr.Schematic:nr.Normal:nr.Disabled,this._configuration.hasMetallicRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this._configuration.hasEmissionTexture=!!this.parameters.emissiveTextureId,this._configuration.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this._configuration.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.enableOffset=t.camera.relativeElevation<5e5,this._configuration.snowCover=this.hasSnowCover(t),this._configuration.hasColorTextureTransform=!!this.parameters.colorTextureTransformMatrix,this._configuration.hasNormalTextureTransform=!!this.parameters.normalTextureTransformMatrix,this._configuration.hasEmissionTextureTransform=!!this.parameters.emissiveTextureTransformMatrix,this._configuration.hasOcclusionTextureTransform=!!this.parameters.occlusionTextureTransformMatrix,this._configuration.hasMetallicRoughnessTextureTransform=!!this.parameters.metallicRoughnessTextureTransformMatrix),this._configuration}hasSnowCover(e){return null!=e.weather&&e.weatherVisible&&"snowy"===e.weather.type&&"enabled"===e.weather.snowCover}intersect(e,t,r,i,o,n){if(null!=this.parameters.verticalOffset){const e=r.camera;(0,l.s)(Cn,t[12],t[13],t[14]);let n=null;switch(r.viewingMode){case O.V.Global:n=(0,l.n)(An,Cn);break;case O.V.Local:n=(0,l.p)(An,Sn)}let a=0;const s=(0,l.c)(yn,Cn,e.eye),c=(0,l.l)(s),d=(0,l.b)(s,s,1/c);let u=null;this.parameters.screenSizePerspective&&(u=(0,l.d)(n,d)),a+=function(e,t,r,i,o){let n=(r.screenLength||0)*e.pixelRatio;null!=o&&(n=function(e,t,r,i){return function(e,t){return(0,E.l)(e*Math.max(t.scale,t.minScaleFactor),e,t.factor)}(e,function(e,t,r){const i=r.parameters;return P.scale=Math.min(i.divisor/(t-i.offset),1),P.factor=function(e){return Math.abs(e*e*e)}(e),P}(t,r,i))}(n,i,t,o));const a=n*Math.tan(.5*e.fovY)/(.5*e.fullHeight);return(0,E.c)(a*t,r.minWorldLength||0,null!=r.maxWorldLength?r.maxWorldLength:1/0)}(e,c,this.parameters.verticalOffset,u??0,this.parameters.screenSizePerspective),(0,l.b)(n,n,a),(0,l.w)(Rn,n,r.transform.inverseRotation),i=(0,l.c)(bn,i,Rn),o=(0,l.c)(En,o,Rn)}D(e,r,i,o,function(e){return null!=e?(Ai.offset=e,Ai):null}(r.verticalOffset),n)}createGLMaterial(e){return new xn(e)}createBufferWriter(){return new Di(this._vertexBufferLayout)}}class xn extends wr{constructor(e){super({...e,...e.material.parameters})}_updateShadowState(e){e.shadowMap.enabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:e.shadowMap.enabled})}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:e.hasOccludees})}beginSlot(e){this._output!==re.Color&&this._output!==re.Alpha||(this._updateShadowState(e),this._updateOccludeeState(e));const t=this._material.parameters;this.updateTexture(t.textureId);const r=e.camera.viewInverseTransposeMatrix;return(0,l.s)(t.origin,r[3],r[7],r[11]),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(t.treeRendering?vn:mn,e)}}const Tn=new class extends un{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.hasVertexTangents=!1}},bn=(0,c.c)(),En=(0,c.c)(),Sn=(0,c.f)(0,0,1),An=(0,c.c)(),Rn=(0,c.c)(),Cn=(0,c.c)(),yn=(0,c.c)();function Mn(e){if(null==e)return null;const t=null!=e.offset?e.offset:er.Z,r=null!=e.rotation?e.rotation:0,i=null!=e.scale?e.scale:er.O,a=(0,n.f)(1,0,0,0,1,0,t[0],t[1],1),s=(0,n.f)(Math.cos(r),-Math.sin(r),0,Math.sin(r),Math.cos(r),0,0,0,1),l=(0,n.f)(i[0],0,0,0,i[1],0,0,0,1),c=(0,n.c)();return(0,o.m)(c,s,l),(0,o.m)(c,a,c),c}class wn{constructor(){this.geometries=new Array,this.materials=new Array,this.textures=new Array}}class On{constructor(e,t,r){this.name=e,this.lodThreshold=t,this.pivotOffset=r,this.stageResources=new wn,this.numberOfVertices=0}}const In=()=>R.L.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function Nn(e,t){const r=await async function(e,t){const r=t?.streamDataRequester;if(r)return async function(e,t,r){const i=await(0,tr.r)(t.request(e,"json",r));return!0===i.ok?i.value:((0,K.r9)(i.error),void Pn(i.error.details.url))}(e,r,t);const i=await(0,tr.r)((0,ee.Z)(e,t));return!0===i.ok?i.value.data:((0,K.r9)(i.error),void Pn(i.error))}(e,t),i=await async function(e,t){const r=new Array;for(const i in e){const o=e[i],n=o.images[0].data;if(!n){In().warn("Externally referenced texture data is not yet supported");continue}const a=o.encoding+";base64,"+n,s="/textureDefinitions/"+i,l="rgba"===o.channels?o.alphaChannelUsage||"transparency":"none",c={noUnpackFlip:!0,wrap:{s:le.b.REPEAT,t:le.b.REPEAT},preMultiplyAlpha:Fn(l)!==h.A.Opaque},d=null!=t&&t.disableTextures?Promise.resolve(null):te(a,t);r.push(d.then((e=>({refId:s,image:e,parameters:c,alphaChannelUsage:l}))))}const i=await Promise.all(r),o={};for(const e of i)o[e.refId]=e;return o}(r.textureDefinitions??{},t);let o=0;for(const e in i)if(i.hasOwnProperty(e)){const t=i[e];o+=t?.image?t.image.width*t.image.height*4:0}return{resource:r,textures:i,size:o+(0,u.T)(r)}}function Pn(e){throw new Y.Z("",`Request for object resource failed: ${e}`)}function Ln(e){const t=e.params,r=t.topology;let i=!0;switch(t.vertexAttributes||(In().warn("Geometry must specify vertex attributes"),i=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const r in t.vertexAttributes){const t=e[r];t?.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(In().warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),i=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(In().warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),i=!1)):(In().warn(`Indexed geometry does not specify face indices for '${r}' attribute`),i=!1)}}else In().warn("Indexed geometries must specify faces"),i=!1;break}default:In().warn(`Unsupported topology '${r}'`),i=!1}e.params.material||(In().warn("Geometry requires material"),i=!1);const o=e.params.vertexAttributes;for(const e in o)o[e].values||(In().warn("Geometries with externally defined attributes are not yet supported"),i=!1);return i}function Dn(e){const t=(0,d.k)();return e.forEach((e=>{const r=e.boundingInfo;null!=r&&((0,d.e)(t,r.bbMin),(0,d.e)(t,r.bbMax))})),t}function Fn(e){switch(e){case"mask":return h.A.Mask;case"maskAndTransparency":return h.A.MaskBlend;case"none":return h.A.Opaque;default:return h.A.Blend}}function Bn(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const Gn=new ar.V(1,2,"wosr");async function Vn(e,t){const r=Un((0,i.a)(e));if("wosr"===r.fileType){const e=await(t.cache?t.cache.loadWOSR(r.url,t):Nn(r.url,t)),{engineResources:i,referenceBoundingBox:o}=function(e,t){const r=new Array,i=new Array,o=new Array,n=new rr,a=e.resource,s=ar.V.parse(a.version||"1.0","wosr");Gn.validate(s);const l=a.model.name,d=a.model.geometries,u=a.materialDefinitions??{},m=e.textures;let p=0;const f=new Map;for(let e=0;e<d.length;e++){const a=d[e];if(!Ln(a))continue;const s=Bn(a),l=a.params.vertexAttributes,g=[],v=e=>{if("PerAttributeArray"===a.params.topology)return null;const t=a.params.faces;for(const r in t)if(r===e)return t[r].values;return null},_=l[T.V.POSITION],x=_.values.length/_.valuesPerElement;for(const e in l){const t=l[e],r=t.values,i=v(e)??(0,sr.a)(x);g.push([e,new lr.A(r,i,t.valuesPerElement,!0)])}const b=s.texture,E=m&&m[b];if(E&&!f.has(b)){const{image:e,parameters:t}=E,r=new bt(e,t);i.push(r),f.set(b,r)}const S=f.get(b),A=S?S.id:void 0,R=s.material;let C=n.get(R,b);if(null==C){const e=u[R.substring(R.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const r=E&&E.alphaChannelUsage,i=e.transparency>0||"transparency"===r||"maskAndTransparency"===r,o=E?Fn(E.alphaChannelUsage):void 0,a={ambient:(0,c.e)(e.diffuse),diffuse:(0,c.e)(e.diffuse),opacity:1-(e.transparency||0),transparent:i,textureAlphaMode:o,textureAlphaCutoff:.33,textureId:A,initTextureTransparent:!0,doubleSided:!0,cullFace:h.C.None,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:E?.parameters.preMultiplyAlpha??!1};t?.materialParameters&&Object.assign(a,t.materialParameters),C=new _n(a),n.set(R,b,C)}o.push(C);const y=new cr.G(C,g);p+=g.find((e=>e[0]===T.V.POSITION))?.[1]?.indices.length??0,r.push(y)}return{engineResources:[{name:l,stageResources:{textures:i,materials:o,geometries:r},pivotOffset:a.model.pivotOffset,numberOfVertices:p,lodThreshold:null}],referenceBoundingBox:Dn(r)}}(e,t);return{lods:i,referenceBoundingBox:o,isEsriSymbolResource:!1,isWosr:!0}}const o=await(t.cache?t.cache.loadGLTF(r.url,t,!!t.usePBR):(0,Kt.l)(new Kt.D(t.streamDataRequester),r.url,t,t.usePBR)),n=o.model.meta?.ESRI_proxyEllipsoid,d=o.meta.isEsriSymbolResource&&null!=n&&"EsriRealisticTreesStyle"===o.meta.ESRI_webstyle;d&&!o.customMeta.esriTreeRendering&&(o.customMeta.esriTreeRendering=!0,function(e,t){for(let r=0;r<e.model.lods.length;++r){const i=e.model.lods[r];for(const o of i.parts){const i=o.attributes.normal;if(null==i)return;const n=o.attributes.position,d=n.count,u=(0,c.c)(),h=(0,c.c)(),m=(0,c.c)(),p=new Uint8Array(4*d),f=new Float64Array(3*d),g=(0,a.i)((0,s.c)(),o.transform);let v=0,_=0;for(let a=0;a<d;a++){n.getVec(a,h),i.getVec(a,u),(0,l.g)(h,h,o.transform),(0,l.c)(m,h,t.center),(0,l.F)(m,m,t.radius);const s=m[2],c=(0,l.l)(m),d=Math.min(.45+.55*c*c,1);(0,l.F)(m,m,t.radius),null!==g&&(0,l.g)(m,m,g),(0,l.n)(m,m),r+1!==e.model.lods.length&&e.model.lods.length>1&&(0,l.a)(m,m,u,s>-1?.2:Math.min(-4*s-3.8,1)),f[v]=m[0],f[v+1]=m[1],f[v+2]=m[2],v+=3,p[_]=255*d,p[_+1]=255*d,p[_+2]=255*d,p[_+3]=255,_+=4}o.attributes.normal=new Zt.b(f),o.attributes.color=new Zt.o(p)}}}(o,n));const u=!!t.usePBR,m=o.meta.isEsriSymbolResource?{usePBR:u,isSchematic:!1,treeRendering:d,mrrFactors:[...bo]}:{usePBR:u,isSchematic:!1,treeRendering:!1,mrrFactors:[...xo]},p={...t.materialParameters,treeRendering:d},{engineResources:f,referenceBoundingBox:g}=zn(o,m,p,t.skipHighLods&&null==r.specifiedLodIndex?{skipHighLods:!0}:{skipHighLods:!1,singleLodIndex:r.specifiedLodIndex});return{lods:f,referenceBoundingBox:g,isEsriSymbolResource:o.meta.isEsriSymbolResource,isWosr:!1}}function Un(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null}:e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function zn(e,t,r,i){const n=e.model,a=new Array,s=new Map,l=new Map,c=n.lods.length,u=(0,d.k)();return n.lods.forEach(((e,m)=>{const p=!0===i.skipHighLods&&(c>1&&0===m||c>3&&1===m)||!1===i.skipHighLods&&null!=i.singleLodIndex&&m!==i.singleLodIndex;if(p&&0!==m)return;const f=new On(e.name,e.lodThreshold,[0,0,0]);e.parts.forEach((e=>{const i=p?new _n({}):function(e,t,r,i,o,n,a){const s=t.material+(t.attributes.normal?"_normal":"")+(t.attributes.color?"_color":"")+(t.attributes.texCoord0?"_texCoord0":"")+(t.attributes.tangent?"_tangent":""),l=e.materials.get(t.material),c=null!=t.attributes.texCoord0,d=null!=t.attributes.normal;if(null==l)return null;const u=function(e){switch(e){case"BLEND":return h.A.Blend;case"MASK":return h.A.Mask;case"OPAQUE":case null:case void 0:return h.A.Opaque}}(l.alphaMode);if(!n.has(s)){if(c){const t=(t,r=!1)=>{if(null!=t&&!a.has(t)){const i=e.textures.get(t);if(null!=i){const e=i.data;a.set(t,new bt((0,Qt.i)(e)?e.data:e,{...i.parameters,preMultiplyAlpha:!(0,Qt.i)(e)&&r,encoding:(0,Qt.i)(e)&&null!=e.encoding?e.encoding:void 0}))}}};t(l.textureColor,u!==h.A.Opaque),t(l.textureNormal),t(l.textureOcclusion),t(l.textureEmissive),t(l.textureMetallicRoughness)}const r=l.color[0]**(1/Kt.h),m=l.color[1]**(1/Kt.h),p=l.color[2]**(1/Kt.h),f=l.emissiveFactor[0]**(1/Kt.h),g=l.emissiveFactor[1]**(1/Kt.h),v=l.emissiveFactor[2]**(1/Kt.h),_=null!=l.textureColor&&c?a.get(l.textureColor):null,x=vo({normalTexture:l.textureNormal,metallicRoughnessTexture:l.textureMetallicRoughness,metallicFactor:l.metallicFactor,roughnessFactor:l.roughnessFactor,emissiveTexture:l.textureEmissive,emissiveFactor:l.emissiveFactor,occlusionTexture:l.textureOcclusion});n.set(s,new _n({...i,transparent:u===h.A.Blend,customDepthTest:h.a.Lequal,textureAlphaMode:u,textureAlphaCutoff:l.alphaCutoff,diffuse:[r,m,p],ambient:[r,m,p],opacity:l.opacity,doubleSided:l.doubleSided,doubleSidedType:"winding-order",cullFace:l.doubleSided?h.C.None:h.C.Back,hasVertexColors:!!t.attributes.color,hasVertexTangents:!!t.attributes.tangent,normalType:d?ir.Attribute:ir.ScreenDerivative,castShadows:!0,textureId:null!=_?_.id:void 0,colorMixMode:l.colorMixMode,normalTextureId:null!=l.textureNormal&&c?a.get(l.textureNormal).id:void 0,textureAlphaPremultiplied:null!=_&&!!_.parameters.preMultiplyAlpha,occlusionTextureId:null!=l.textureOcclusion&&c?a.get(l.textureOcclusion).id:void 0,emissiveTextureId:null!=l.textureEmissive&&c?a.get(l.textureEmissive).id:void 0,metallicRoughnessTextureId:null!=l.textureMetallicRoughness&&c?a.get(l.textureMetallicRoughness).id:void 0,emissiveFactor:[f,g,v],mrrFactors:x?[...To]:[l.metallicFactor,l.roughnessFactor,i.mrrFactors[2]],isSchematic:x,colorTextureTransformMatrix:Mn(l.colorTextureTransform),normalTextureTransformMatrix:Mn(l.normalTextureTransform),occlusionTextureTransformMatrix:Mn(l.occlusionTextureTransform),emissiveTextureTransformMatrix:Mn(l.emissiveTextureTransform),metallicRoughnessTextureTransformMatrix:Mn(l.metallicRoughnessTextureTransform),...o}))}const m=n.get(s);if(r.stageResources.materials.push(m),c){const e=e=>{null!=e&&r.stageResources.textures.push(a.get(e))};e(l.textureColor),e(l.textureNormal),e(l.textureOcclusion),e(l.textureEmissive),e(l.textureMetallicRoughness)}return m}(n,e,f,t,r,s,l),{geometry:a,vertexCount:c}=function(e,t){const r=e.attributes.position.count,i=(0,Kt.c)(e.indices||r,e.primitiveType),n=de(3*r),{typedBuffer:a,typedBufferStride:s}=e.attributes.position;(0,Jt.t)(n,a,e.transform,3,s);const l=[[T.V.POSITION,new lr.A(n,i,3,!0)]];if(null!=e.attributes.normal){const t=de(3*r),{typedBuffer:n,typedBufferStride:a}=e.attributes.normal;(0,o.h)(Hn,e.transform),(0,Jt.c)(t,n,Hn,3,a),l.push([T.V.NORMAL,new lr.A(t,i,3,!0)])}if(null!=e.attributes.tangent){const t=de(4*r),{typedBuffer:n,typedBufferStride:a}=e.attributes.tangent;(0,o.h)(Hn,e.transform),(0,Kt.i)(t,n,Hn,4,a),l.push([T.V.TANGENT,new lr.A(t,i,4,!0)])}if(null!=e.attributes.texCoord0){const t=de(2*r),{typedBuffer:o,typedBufferStride:n}=e.attributes.texCoord0;(0,Kt.j)(t,o,2,n),l.push([T.V.UV0,new lr.A(t,i,2,!0)])}if(null!=e.attributes.color){const t=new Uint8Array(4*r);4===e.attributes.color.elementCount?e.attributes.color instanceof Zt.c?(0,Kt.k)(t,e.attributes.color,255):e.attributes.color instanceof Zt.o?(0,Kt.m)(t,e.attributes.color):e.attributes.color instanceof Zt.s&&(0,Kt.k)(t,e.attributes.color,1/256):(t.fill(255),e.attributes.color instanceof Zt.b?(0,Jt.e)(t,e.attributes.color,255,4):e.attributes.color instanceof Zt.n?(0,Kt.o)(t,e.attributes.color.typedBuffer,4,e.attributes.color.typedBufferStride):e.attributes.color instanceof Zt.r&&(0,Jt.e)(t,e.attributes.color,1/256,4)),l.push([T.V.COLOR,new lr.A(t,i,4,!0)])}return{geometry:new cr.G(t,l),vertexCount:r}}(e,null!=i?i:new _n({})),g=a.boundingInfo;null!=g&&0===m&&((0,d.e)(u,g.bbMin),(0,d.e)(u,g.bbMax)),null!=i&&(f.stageResources.geometries.push(a),f.numberOfVertices+=c)})),p||a.push(f)})),{engineResources:a,referenceBoundingBox:u}}const Hn=(0,n.c)(),jn=Object.freeze(Object.defineProperty({__proto__:null,fetch:Vn,gltfToEngineResources:zn,parseUrl:Un},Symbol.toStringTag,{value:"Module"}))},60939:(e,t,r)=>{r.d(t,{a:()=>_,b:()=>p,c:()=>v,d:()=>I,g:()=>x,i:()=>A}),r(76506);var i=r(92143),o=r(82426),n=r(65775),a=r(72836),s=r(66106),l=r(7200),c=r(68681),d=r(29794),u=r(89034),h=r(55633);const m=p();function p(){return(0,c.c)()}const f=l.a,g=l.a;function v(e,t){return(0,l.c)(t,e)}function _(e){return e[3]}function x(e){return e}function T(e,t,r){if(null==t)return!1;if(!E(e,t,b))return!1;let{t0:i,t1:o}=b;if((i<0||o<i&&o>0)&&(i=o),i<0)return!1;if(r){const{origin:e,direction:o}=t;r[0]=e[0]+o[0]*i,r[1]=e[1]+o[1]*i,r[2]=e[2]+o[2]*i}return!0}const b={t0:0,t1:0};function E(e,t,r){const{origin:i,direction:o}=t,n=S;n[0]=i[0]-e[0],n[1]=i[1]-e[1],n[2]=i[2]-e[2];const a=o[0]*o[0]+o[1]*o[1]+o[2]*o[2];if(0===a)return!1;const s=2*(o[0]*n[0]+o[1]*n[1]+o[2]*n[2]),l=s*s-4*a*(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]-e[3]*e[3]);if(l<0)return!1;const c=Math.sqrt(l);return r.t0=(-s-c)/(2*a),r.t1=(-s+c)/(2*a),!0}const S=(0,s.c)();function A(e,t){return T(e,t,null)}function R(e,t,r){const i=h.s.get(),o=h.a.get();(0,a.e)(i,t.origin,t.direction);const s=_(e);(0,a.e)(r,i,t.origin),(0,a.b)(r,r,1/(0,a.l)(r)*s);const l=y(e,t.origin),c=(0,h.b)(t.origin,r);return(0,n.a)(o,c+l,i),(0,a.g)(r,r,o),r}function C(e,t,r){const i=(0,a.c)(h.s.get(),t,e),o=(0,a.b)(h.s.get(),i,e[3]/(0,a.l)(i));return(0,a.h)(r,o,e)}function y(e,t){const r=(0,a.c)(h.s.get(),t,e),i=(0,a.l)(r),n=_(e),s=n+Math.abs(n-i);return(0,o.a)(n/s)}const M=(0,s.c)();function w(e,t,r,i){const n=(0,a.c)(M,t,e);switch(r){case u.A.X:{const e=(0,o.b)(n,M)[2];return(0,a.s)(i,-Math.sin(e),Math.cos(e),0)}case u.A.Y:{const e=(0,o.b)(n,M),t=e[1],r=e[2],s=Math.sin(t);return(0,a.s)(i,-s*Math.cos(r),-s*Math.sin(r),Math.cos(t))}case u.A.Z:return(0,a.n)(i,n);default:return}}function O(e,t){const r=(0,a.c)(N,t,e);return(0,a.l)(r)-e[3]}function I(e,t){const r=(0,a.k)(e,t),i=_(e);return r<=i*i}const N=(0,s.c)(),P=p();Object.freeze(Object.defineProperty({__proto__:null,NullSphere:m,altitudeAt:O,angleToSilhouette:y,axisAt:w,clear:function(e){e[0]=e[1]=e[2]=e[3]=0},closestPoint:function(e,t,r){return T(e,t,r)?r:((0,h.c)(t,e,r),C(e,r,r))},closestPointOnSilhouette:R,containsPoint:I,copy:v,create:p,distanceToSilhouette:function(e,t){const r=(0,a.c)(h.s.get(),t,e),i=(0,a.j)(r),o=e[3]*e[3];return Math.sqrt(Math.abs(i-o))},elevate:function(e,t,r){return e!==r&&(r[0]=e[0],r[1]=e[1],r[2]=e[2]),r[3]=e[3]+t,r},equals:g,exactEquals:f,fromCenterAndRadius:function(e,t){return(0,c.f)(e[0],e[1],e[2],t)},fromRadius:function(e,t){return e[0]=e[1]=e[2]=0,e[3]=t,e},fromValues:function(e,t,r,i){return(0,c.f)(e,t,r,i)},getCenter:x,getRadius:_,intersectLine:function(e,t,r){const i=(0,h.f)(t,r);if(!E(e,i,b))return[];const{origin:o,direction:n}=i,{t0:l,t1:c}=b,u=t=>{const r=(0,s.c)();return(0,a.m)(r,o,n,t),C(e,r,r)};return Math.abs(l-c)<(0,d.g)()?[u(l)]:[u(l),u(c)]},intersectRay:T,intersectRayClosestSilhouette:function(e,t,r){if(T(e,t,r))return r;const i=R(e,t,h.s.get());return(0,a.h)(r,t.origin,(0,a.b)(h.s.get(),t.direction,(0,a.i)(t.origin,i)/(0,a.l)(t.direction))),r},intersectsRay:A,projectPoint:C,setAltitudeAt:function(e,t,r,i){const o=O(e,t),n=w(e,t,u.A.Z,N),s=(0,a.b)(N,n,r-o);return(0,a.h)(i,t,s)},setExtent:function(e,t,r){return i.L.getLogger("esri.geometry.support.sphere").error("sphere.setExtent is not yet supported"),e!==r&&v(e,r),r},tmpSphere:P,union:function(e,t,r=(0,c.c)()){const i=(0,a.i)(e,t),o=e[3],n=t[3];return i+n<o?((0,l.c)(r,e),r):i+o<n?((0,l.c)(r,t),r):((0,a.a)(r,e,t,(i+n-o)/(2*i)),r[3]=(i+o+n)/2,r)},wrap:function(e){return e}},Symbol.toStringTag,{value:"Module"}))},75854:(e,t,r)=>{var i,o;r.d(t,{C:()=>i}),r(82426),(o=i||(i={}))[o.Multiply=1]="Multiply",o[o.Ignore=2]="Ignore",o[o.Replace=3]="Replace",o[o.Tint=4]="Tint"},50766:(e,t,r)=>{r.d(t,{b:()=>s});var i=r(55633),o=r(72836),n=r(66106),a=r(94446);function s(e,t,r){return(0,o.c)(l,t,e),(0,o.c)(c,r,e),.5*(0,o.l)((0,o.e)(l,l,c))}new i.O(a.c),new i.O((()=>({p0:(0,n.c)(),p1:(0,n.c)(),p2:(0,n.c)()})));const l=(0,n.c)(),c=(0,n.c)()},87372:(e,t,r)=>{function i(){return new Float32Array(2)}function o(e,t){const r=new Float32Array(2);return r[0]=e,r[1]=t,r}r.d(t,{O:()=>a,Z:()=>n,c:()=>i,f:()=>o});const n=i(),a=o(1,1);o(1,0),o(0,1)},79641:(e,t,r)=>{r.d(t,{a:()=>n,b:()=>s,c:()=>l,d:()=>h,e:()=>d,g:()=>o,n:()=>u,s:()=>c,t:()=>a});var i=r(92143);const o=()=>i.L.getLogger("esri.views.3d.support.buffer.math");function n(e,t,r){a(e.typedBuffer,t.typedBuffer,r,e.typedBufferStride,t.typedBufferStride)}function a(e,t,r,i=3,n=i){if(e.length/i!==Math.ceil(t.length/n))return o().error("source and destination buffers need to have the same number of elements"),e;const a=e.length/i,s=r[0],l=r[1],c=r[2],d=r[4],u=r[5],h=r[6],m=r[8],p=r[9],f=r[10],g=r[12],v=r[13],_=r[14];let x=0,T=0;for(let r=0;r<a;r++){const r=t[x],o=t[x+1],a=t[x+2];e[T]=s*r+d*o+m*a+g,e[T+1]=l*r+u*o+p*a+v,e[T+2]=c*r+h*o+f*a+_,x+=n,T+=i}return e}function s(e,t,r){l(e.typedBuffer,t.typedBuffer,r,e.typedBufferStride,t.typedBufferStride)}function l(e,t,r,i=3,n=i){if(e.length/i!==Math.ceil(t.length/n))return void o().error("source and destination buffers need to have the same number of elements");const a=e.length/i,s=r[0],l=r[1],c=r[2],d=r[3],u=r[4],h=r[5],m=r[6],p=r[7],f=r[8];let g=0,v=0;for(let r=0;r<a;r++){const r=t[g],o=t[g+1],a=t[g+2];e[v]=s*r+d*o+m*a,e[v+1]=l*r+u*o+p*a,e[v+2]=c*r+h*o+f*a,g+=n,v+=i}}function c(e,t,r){d(e.typedBuffer,t,r,e.typedBufferStride)}function d(e,t,r,i=3){const o=Math.min(e.length/i,t.count),n=t.typedBuffer,a=t.typedBufferStride;let s=0,l=0;for(let t=0;t<o;t++)e[l]=r*n[s],e[l+1]=r*n[s+1],e[l+2]=r*n[s+2],s+=a,l+=i}function u(e,t){h(e.typedBuffer,t.typedBuffer,e.typedBufferStride,t.typedBufferStride)}function h(e,t,r=3,i=r){const o=Math.min(e.length/r,t.length/i);let n=0,a=0;for(let s=0;s<o;s++){const o=t[n],s=t[n+1],l=t[n+2],c=o*o+s*s+l*l;if(c>0){const t=1/Math.sqrt(c);e[a]=t*o,e[a+1]=t*s,e[a+2]=t*l}n+=i,a+=r}}}}]);