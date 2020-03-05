// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/extendsHelper ../../../../core/tsSupport/generatorHelper ../../../../core/tsSupport/awaiterHelper ../../../../core/tsSupport/assignHelper ../../../../core/devEnvironmentUtils ../../../../core/maybe ../../../../core/libs/gl-matrix-2/mat3 ../../../../core/libs/gl-matrix-2/mat3f64 ../../../../core/libs/gl-matrix-2/mat4 ../../../../core/libs/gl-matrix-2/mat4f64 ../../../../core/libs/gl-matrix-2/vec3 ../../../../core/libs/gl-matrix-2/vec3f64 ../../../../geometry/support/aaBoundingBox ../../glTF/DefaultLoadingContext ../../glTF/loader ../../glTF/internal/indexUtils ./wosrLoader ../../support/buffer/BufferView ../../support/buffer/math ../../support/buffer/utils ../../webgl-engine/lib/Geometry ../../webgl-engine/lib/GeometryData ../../webgl-engine/lib/Texture ../../webgl-engine/materials/DefaultMaterial".split(" "),
function(ga,z,ha,V,W,F,X,c,L,Y,Z,aa,l,P,G,ba,ca,H,R,r,A,v,da,ea,B,S){function T(c){var h=c.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return h?{fileType:"gltf",url:h[1],specifiedLodIndex:null!=h[4]?Number(h[4]):null}:c.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:c,specifiedLodIndex:null}:{fileType:"unknown",url:c,specifiedLodIndex:null}}function M(l,h,w,U){var x=l.model,k=Y.mat3f64.create(),I=[],E=new Map,g=new Map;x.lods.forEach(function(l,J){if(void 0===U||J===U){var z=0,p={name:l.name,
stageResources:{textures:[],materials:[],geometries:[]},lodThreshold:c.isSome(l.lodThreshold)?l.lodThreshold:null,pivotOffset:[0,0,0],numberOfVertices:0,boundingBox:G.empty()};I.push(p);l.parts.forEach(function(b){var m=b.material+(b.attributes.normal?"_normal":"")+(b.attributes.color?"_color":"")+(b.attributes.texCoord0?"_texCoord0":"")+(b.attributes.tangent?"_tangent":""),a=x.materials.get(b.material),t=c.isSome(b.attributes.texCoord0),n=c.isSome(b.attributes.normal);if(!E.has(m)){if(t){if(c.isSome(a.textureColor)&&
!g.has(a.textureColor)){var d=x.textures.get(a.textureColor),f=F({},d.parameters,{preMultiplyAlpha:!0});g.set(a.textureColor,new B(d.data,a.textureColor,f))}c.isSome(a.textureNormal)&&!g.has(a.textureNormal)&&(d=x.textures.get(a.textureNormal),f=F({},d.parameters,{preMultiplyAlpha:!0}),g.set(a.textureNormal,new B(d.data,a.textureNormal,f)));c.isSome(a.textureOcclusion)&&!g.has(a.textureOcclusion)&&(d=x.textures.get(a.textureOcclusion),f=F({},d.parameters,{preMultiplyAlpha:!0}),g.set(a.textureOcclusion,
new B(d.data,a.textureOcclusion,f)));c.isSome(a.textureEmissive)&&!g.has(a.textureEmissive)&&(d=x.textures.get(a.textureEmissive),f=F({},d.parameters,{preMultiplyAlpha:!0}),g.set(a.textureEmissive,new B(d.data,a.textureEmissive,f)));c.isSome(a.textureMetallicRoughness)&&!g.has(a.textureMetallicRoughness)&&(d=x.textures.get(a.textureMetallicRoughness),f=F({},d.parameters,{preMultiplyAlpha:!0}),g.set(a.textureMetallicRoughness,new B(d.data,a.textureMetallicRoughness,f)))}var y=S.COLOR_GAMMA,d=Math.pow(a.color[0],
1/y),f=Math.pow(a.color[1],1/y),u=Math.pow(a.color[2],1/y),e=Math.pow(a.emissiveFactor[0],1/y),C=Math.pow(a.emissiveFactor[1],1/y),y=Math.pow(a.emissiveFactor[2],1/y);E.set(m,new S(F({},h,{transparent:"BLEND"===a.alphaMode,textureAlphaMode:fa(a.alphaMode),textureAlphaCutoff:a.alphaCutoff,diffuse:[d,f,u],ambient:[d,f,u],opacity:a.opacity,doubleSided:a.doubleSided,doubleSidedType:"winding-order",cullFace:a.doubleSided?0:2,vertexColors:!!b.attributes.color,vertexTangents:!!b.attributes.tangent,normals:n?
"default":"screenDerivative",castShadows:!0,receiveSSAO:!0,textureId:c.isSome(a.textureColor)&&t?g.get(a.textureColor).id:void 0,colorMixMode:a.colorMixMode,normalTextureId:c.isSome(a.textureNormal)&&t?g.get(a.textureNormal).id:void 0,textureAlphaPremultiplied:!0,occlusionTextureId:c.isSome(a.textureOcclusion)&&t?g.get(a.textureOcclusion).id:void 0,emissiveTextureId:c.isSome(a.textureEmissive)&&t?g.get(a.textureEmissive).id:void 0,metallicRoughnessTextureId:c.isSome(a.textureMetallicRoughness)&&t?
g.get(a.textureMetallicRoughness).id:void 0,emissiveFactor:[e,C,y],mrrFactors:[a.metallicFactor,a.roughnessFactor,h.mrrFactors[2]],isSchematic:!1},w),m))}a:{n=b.indices||b.attributes.position.count;switch(b.primitiveType){case 4:d=H.trianglesToTriangles(n);break a;case 5:d=H.triangleStripToTriangles(n);break a;case 6:d=H.triangleFanToTriangles(n);break a}d=void 0}f={};u={};n=b.attributes.position.count;e=v.createBuffer(r.BufferViewVec3f,n);A.vec3.transformMat4(e,b.attributes.position,b.transform);
u.position={data:e.typedBuffer,size:e.elementCount};f.position=d;c.isSome(b.attributes.normal)&&(e=v.createBuffer(r.BufferViewVec3f,n),L.mat3.normalFromMat4(k,b.transform),A.vec3.transformMat3(e,b.attributes.normal,k),u.normal={data:e.typedBuffer,size:e.elementCount},f.normal=d);c.isSome(b.attributes.tangent)&&(e=v.createBuffer(r.BufferViewVec4f,n),L.mat3.normalFromMat4(k,b.transform),A.vec4.transformMat3(e,b.attributes.tangent,k),u.tangent={data:e.typedBuffer,size:e.elementCount},f.tangent=d);c.isSome(b.attributes.texCoord0)&&
(e=v.createBuffer(r.BufferViewVec2f,n),v.vec2.normalizeIntegerBuffer(e,b.attributes.texCoord0),u.uv0={data:e.typedBuffer,size:e.elementCount},f.uv0=d);c.isSome(b.attributes.color)&&(e=v.createBuffer(r.BufferViewVec4u8,n),4===b.attributes.color.elementCount?b.attributes.color instanceof r.BufferViewVec4f?A.vec4.scale(e,b.attributes.color,255):b.attributes.color instanceof r.BufferViewVec4u8?v.vec4.copy(e,b.attributes.color):b.attributes.color instanceof r.BufferViewVec4u16&&A.vec4.scale(e,b.attributes.color,
1/256):(v.vec4.fill(e,255,255,255,255),C=new r.BufferViewVec3u8(e.buffer,0,4),b.attributes.color instanceof r.BufferViewVec3f?A.vec3.scale(C,b.attributes.color,255):b.attributes.color instanceof r.BufferViewVec3u8?v.vec3.copy(C,b.attributes.color):b.attributes.color instanceof r.BufferViewVec3u16&&A.vec3.scale(C,b.attributes.color,1/256)),u.color={data:e.typedBuffer,size:e.elementCount},f.color=d);b=new da(new ea.GeometryData(u,f),"gltf_"+l.name+"_"+z++);p.stageResources.geometries.push(b);p.stageResources.materials.push(E.get(m));
t&&(c.isSome(a.textureColor)&&p.stageResources.textures.push(g.get(a.textureColor)),c.isSome(a.textureNormal)&&p.stageResources.textures.push(g.get(a.textureNormal)),c.isSome(a.textureOcclusion)&&p.stageResources.textures.push(g.get(a.textureOcclusion)),c.isSome(a.textureEmissive)&&p.stageResources.textures.push(g.get(a.textureEmissive)),c.isSome(a.textureMetallicRoughness)&&p.stageResources.textures.push(g.get(a.textureMetallicRoughness)));p.numberOfVertices+=n;m=b.boundingInfo;G.expand(p.boundingBox,
m.getBBMin());G.expand(p.boundingBox,m.getBBMax())})}});return I}function fa(c){switch(c){case "BLEND":return"blend";case "MASK":return"mask";case "OPAQUE":return"opaque";default:return"blend"}}Object.defineProperty(z,"__esModule",{value:!0});z.fetch=function(A,h){return W(this,void 0,void 0,function(){var w,z,x,k,I,E,g,B,J,G,p,b;return V(this,function(m){switch(m.label){case 0:return w=T(X.adjustStaticAGOUrl(A)),"wosr"!==w.fileType?[3,2]:[4,h.cache?h.cache.loadWOSR(w.url,h):R.load(w.url,h)];case 1:return z=
m.sent(),x=R.processLoadResult(z,h),[2,{lods:[x],referenceBoundingBox:x.boundingBox,isEsriSymbolResource:!1,isWosr:!0,remove:z.remove}];case 2:return[4,h.cache?h.cache.loadGLTF(w.url,h):ca.load(new ba.DefaultLoadingContext(h.streamDataRequester),w.url,h)];case 3:k=m.sent();I=c.get(k.model.meta,"ESRI_proxyEllipsoid");if(k.meta.isEsriSymbolResource&&c.isSome(I)&&-1!==k.meta.uri.indexOf("/RealisticTrees/"))a:{m=k;for(var a=I,t=0;t<m.model.lods.length;++t){var n=m.model.lods[t];m.customMeta.esriTreeRendering=
!0;for(var d=0,n=n.parts;d<n.length;d++){var f=n[d],y=f.attributes.normal;if(c.isNone(y))break a;for(var u=f.attributes.position,e=u.count,C=P.vec3f64.create(),N=P.vec3f64.create(),q=P.vec3f64.create(),K=v.createBuffer(r.BufferViewVec4u8,e),H=v.createBuffer(r.BufferViewVec3f,e),L=Z.mat4.invert(aa.mat4f64.create(),f.transform),D=0;D<e;D++){u.getVec(D,N);y.getVec(D,C);l.vec3.transformMat4(N,N,f.transform);l.vec3.subtract(q,N,a.center);l.vec3.divide(q,q,a.radius);var O=l.vec3.length(q),Q=Math.min(.45+
.55*O*O,1);l.vec3.divide(q,q,a.radius);l.vec3.transformMat4(q,q,L);l.vec3.normalize(q,q);t+1!==m.model.lods.length&&1<m.model.lods.length&&(1>O?l.vec3.lerp(q,q,C,.2):l.vec3.lerp(q,q,C,Math.min(2.66*O-2.46,1)));H.setVec(D,q);K.set(D,0,255*Q);K.set(D,1,255*Q);K.set(D,2,255*Q);K.set(D,3,255)}f.attributes.normal=H;f.attributes.color=K}}}E=k.meta.isEsriSymbolResource?{usePBR:h.usePBR,isSchematic:!1,treeRendering:k.customMeta.esriTreeRendering,mrrFactors:[0,1,.2]}:{usePBR:!0,isSchematic:!1,mrrFactors:[0,
1,.5]};g=F({},h.materialParamsMixin,{treeRendering:k.customMeta.esriTreeRendering});if(null!=w.specifiedLodIndex)return B=M(k,E,g,w.specifiedLodIndex),J=B[0].boundingBox,0!==w.specifiedLodIndex&&(G=M(k,E,g,0),J=G[0].boundingBox),[2,{lods:B,referenceBoundingBox:J,isEsriSymbolResource:k.meta.isEsriSymbolResource,isWosr:!1,remove:k.remove}];p=M(k,E,g);b=p[0].boundingBox;return[2,{lods:p,referenceBoundingBox:b,isEsriSymbolResource:k.meta.isEsriSymbolResource,isWosr:!1,remove:k.remove}]}})})};z.parseUrl=
T;z.gltfToEngineResources=M});