// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/views/3d/canvas3d/webgl-engine/materials/Material.xml":'\x3c?xml version\x3d"1.0" encoding\x3d"UTF-8"?\x3e\r\n\r\n\x3csnippets\x3e\r\n\r\n\x3csnippet name\x3d"vsPhongSrc"\x3e\x3c![CDATA[\r\n\tuniform mat4 proj;\r\n\tuniform mat4 view;\r\n#ifdef INSTANCED\r\n    attribute mat4 model;\r\n    attribute mat4 modelNormal;\r\n#else\r\n\tuniform mat4 model;\r\n\tuniform mat4 modelNormal;\r\n#endif\r\n#ifdef INSTANCEDCOLOR\r\n    attribute vec4 instanceColor;\r\n#endif\r\n\tattribute vec3 $position;\r\n\tattribute vec3 $normal;\r\n\tvarying vec3 vpos;\r\n\tvarying vec3 vnormal;\r\n\r\n#ifdef VERTEXCOLORS\r\n    attribute vec4 $color;\r\n#endif\r\n\r\n#if defined(VERTEXCOLORS) || defined(INSTANCEDCOLOR)\r\n    varying vec4 vcolor;\r\n#endif\r\n\r\n\r\n\tvoid main(void) {\r\n\t\tvpos \x3d (model * vec4($position, 1.0)).xyz;\r\n\t\tvnormal \x3d normalize((modelNormal * vec4($normal, 1.0)).xyz);\r\n\t\tgl_Position \x3d proj * view * vec4(vpos, 1.0);\r\n\r\n#if defined(VERTEXCOLORS) || defined(INSTANCEDCOLOR)\r\n        vcolor \x3d vec4(1,1,1,1);\r\n#endif\r\n#ifdef VERTEXCOLORS\r\n        vcolor *\x3d $color * 0.003921568627451; // \x3d 1/255\r\n#endif\r\n#ifdef INSTANCEDCOLOR\r\n        vcolor *\x3d instanceColor;\r\n#endif\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3csnippet name\x3d"fsPhongSrc"\x3e\x3c![CDATA[\r\n\tuniform vec3 camPos;\r\n\tuniform vec4 lightAmbient;\r\n\tuniform vec4 lightDiffuse;\r\n\tuniform vec4 lightSpecular;\r\n\tuniform vec3 lightDirection;\r\n\tuniform vec3 ambient;\r\n\tuniform vec3 diffuse;\r\n\tuniform vec3 specular;\r\n\tuniform float shininess;\r\n\tuniform float opacity;\r\n\tuniform sampler2D depthTex;\r\n\tuniform int shadowMapNum;\r\n\tuniform vec4 shadowMapDistance;\r\n\tuniform mat4 shadowMapMatrix[4];\r\n\tuniform float depthHalfPixelSz;\r\n\tuniform sampler2D ssaoTex;\r\n\tuniform vec4 viewportPixelSz;\r\n\tvarying vec3 vpos;\r\n\tvarying vec3 vnormal;\r\n#if defined(VERTEXCOLORS) || defined(INSTANCEDCOLOR)\r\n    varying vec4 vcolor;\r\n#endif\r\n\r\n\t$evalShadow\r\n\tvoid main() {\r\n\t\tvec3 a \x3d ambient * lightAmbient.rgb * lightAmbient.w;\r\n\r\n\t\tvec3 viewDir \x3d normalize(vpos - camPos);\r\n\r\n#ifndef DOUBLESIDED\r\n\t\tvec3 normal \x3d vnormal;\r\n#else\r\n\t\tvec3 normal \x3d dot(vnormal, viewDir)\x3e0.0?-vnormal:vnormal;\r\n#endif\r\n\r\n    normal \x3d normalize(normal);\r\n    \r\n\t\tfloat shadow \x3d evalShadow(vpos, 1.0 / gl_FragCoord.w, depthTex, shadowMapNum, shadowMapDistance, shadowMapMatrix, depthHalfPixelSz);\r\n\t\tvec3 d \x3d (1.0 - shadow) * diffuse * lightDiffuse.rgb * lightDiffuse.w * clamp(dot(normal, lightDirection), .0, 1.0);\r\n\r\n\t\tfloat opacity_ \x3d opacity;\r\n#if defined(VERTEXCOLORS) || defined(INSTANCEDCOLOR)\r\n        a *\x3d vcolor.rgb;\r\n        d *\x3d vcolor.rgb;\r\n        opacity_ *\x3d vcolor.a;\r\n#endif\r\n\r\n\t\tvec3 reflDir \x3d normalize(reflect(viewDir, normal));\r\n\t\tfloat specDot \x3d max(dot(reflDir, lightDirection), .001);\r\n\t\tvec3 s \x3d (1.0 - shadow) * specular * lightSpecular.rgb * lightSpecular.w * pow(specDot, shininess);\r\n\t\tfloat ssao \x3d viewportPixelSz.w \x3c .0 ? 1.0 : texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;\r\n\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3csnippet name\x3d"vsPhong"\x3e\x3c![CDATA[\r\n\t$vsPhongSrc\r\n\t}\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3csnippet name\x3d"fsPhong"\x3e\x3c![CDATA[\r\n\tprecision mediump float;\r\n\r\n\t$fsPhongSrc\r\n\t\tgl_FragColor \x3d vec4(ssao * (a + d) + s, opacity_);\r\n\t}\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3csnippet name\x3d"vsPhongTextured"\x3e\x3c![CDATA[\r\n\tattribute vec2 $uv0;\r\n\tvarying vec2 vtc;\r\n\t$vsPhongSrc\r\n#ifndef FLIPV\r\n\t\tvtc \x3d $uv0;\r\n#else\r\n        vtc \x3d vec2($uv0.x, 1.0-$uv0.y);\r\n#endif\r\n    \r\n\t}\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3csnippet name\x3d"fsPhongTextured"\x3e\x3c![CDATA[\r\n\tprecision mediump float;\r\n\r\n\tuniform sampler2D tex;\r\n\tvarying vec2 vtc;\r\n\t$fsPhongSrc\r\n\t\tvec4 texColor \x3d texture2D(tex, vtc);\r\n\t\tif (texColor.a \x3c .33) discard;\r\n\t\tgl_FragColor \x3d vec4(ssao * texColor.rgb * (a + d) + s, texColor.a * opacity_);\r\n\t}\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3csnippet name\x3d"vsPhongAtlasTextured"\x3e\x3c![CDATA[\r\n\tattribute vec4 $uv0;\r\n\tattribute vec4 $region;\r\n\tvarying vec2 vtc;\r\n\tvarying vec4 regionV;\r\n\t$vsPhongSrc\r\n#ifndef FLIPV\r\n        vtc \x3d $uv0.xy;\r\n#else\r\n        vtc \x3d vec2($uv0.x, 1.0-$uv0.y);\r\n#endif\r\n\t    regionV \x3d $region/65535.0;\r\n\t}\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3csnippet name\x3d"fsPhongAtlasTextured"\x3e\x3c![CDATA[\r\n\tprecision mediump float;\r\n\r\n\tuniform sampler2D tex;\r\n\tvarying vec2 vtc;\r\n\tvarying vec4 regionV;\r\n\r\n\t$fsPhongSrc\r\n\t\tvec2 uv \x3d vtc;\r\n\t\tuv \x3d fract(uv);\r\n\t\t//[umin, vmin, umax, vmax]\r\n\r\n\t\tuv \x3d uv.xy*(regionV.zw-regionV.xy)+regionV.xy;\r\n\t\tvec4 texColor \x3d texture2D(tex, uv);\r\n\t\tif (texColor.a \x3c .33) discard;\r\n\t\tgl_FragColor \x3d vec4(ssao * texColor.rgb * (a + d) + s, texColor.a * opacity_);\r\n\t\t//gl_FragColor \x3d regionV;\r\n\t}\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3csnippet name\x3d"fsPhongTexturedRefl"\x3e\x3c![CDATA[\r\n\tprecision mediump float;\r\n\r\n\tuniform sampler2D tex;\r\n\tuniform sampler2D reflTex;\r\n\tuniform float reflectivity;\r\n\tvarying vec2 vtc;\r\n\r\n\t$normal2envTC\r\n\r\n\t$fsPhongSrc\r\n\t\tvec4 texColor \x3d texture2D(tex, vtc);\r\n\t\tif (texColor.a \x3c .33) discard;\r\n\t\tvec4 reflColor \x3d texture2D(reflTex, normal2envTC(reflDir));\r\n\t\tgl_FragColor \x3d vec4(ssao * mix(texColor.rgb * (a + d), reflColor.rgb * lightAmbient.rgb*lightSpecular.w, reflectivity) + s, texColor.a * opacity_);\r\n\t}\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3csnippet name\x3d"vsDepthSrc"\x3e\x3c![CDATA[\r\n\tuniform mat4 proj;\r\n\tuniform mat4 view;\r\n\tuniform mat4 model;\r\n\tuniform vec2 nearFar;\r\n\tattribute vec3 $position;\r\n\tvarying float depth;\r\n\r\n\tvoid main(void) {\r\n\t\tvec4 eye \x3d view * model * vec4($position, 1.0);\r\n\t\tgl_Position \x3d proj * eye;\r\n\t\tdepth \x3d (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3csnippet name\x3d"vsDepth"\x3e\x3c![CDATA[\r\n\t$vsDepthSrc\r\n\t}\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3csnippet name\x3d"vsDepthTextured"\x3e\x3c![CDATA[\r\n\tattribute vec2 $uv0;\r\n\tvarying vec2 vtc;\r\n\t$vsDepthSrc\r\n#ifndef FLIPV\r\n        vtc \x3d $uv0;\r\n#else\r\n        vtc \x3d vec2($uv0.x, 1.0-$uv0.y);\r\n#endif\r\n\t}\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3csnippet name\x3d"vsNormalSrc"\x3e\x3c![CDATA[\r\n\tuniform mat4 proj;\r\n\tuniform mat4 view;\r\n\tuniform mat4 model;\r\n\tuniform mat4 viewNormal;\r\n\tuniform mat4 modelNormal;\r\n\tattribute vec3 $position;\r\n\tattribute vec3 $normal;\r\n\tvarying vec3 vnormal;\r\n\r\n\tvoid main(void) {\r\n\t\tgl_Position \x3d proj * view * model * vec4($position, 1.0);\r\n\t\tvnormal \x3d normalize((viewNormal * modelNormal * vec4($normal, 1.0)).xyz);\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3csnippet name\x3d"vsNormal"\x3e\x3c![CDATA[\r\n\t$vsNormalSrc\r\n\t}\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3csnippet name\x3d"vsNormalTextured"\x3e\x3c![CDATA[\r\n\tattribute vec2 $uv0;\r\n\tvarying vec2 vtc;\r\n\t$vsNormalSrc\r\n#ifndef FLIPV\r\n\t\tvtc \x3d $uv0;\r\n#else\r\n        vtc \x3d vec2($uv0.x, 1.0-$uv0.y);\r\n#endif\r\n\t}\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3csnippet name\x3d"fsDepthSrc"\x3e\x3c![CDATA[\r\n\tvarying float depth;\r\n\r\n\tvoid main() {\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3csnippet name\x3d"fsDepth"\x3e\x3c![CDATA[\r\n\tprecision mediump float;\r\n\t$calcFragDepth\r\n\t$float2rgba\r\n\t$fsDepthSrc\r\n#ifndef BIAS_SHADOWMAP\r\n\t\tgl_FragColor \x3d float2rgba(depth);\r\n#else\r\n\t\tgl_FragColor \x3d float2rgba(calcFragDepth(depth));\r\n#endif\r\n\t}\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3csnippet name\x3d"fsDepthTextured"\x3e\x3c![CDATA[\r\n\tprecision mediump float;\r\n\r\n\tuniform sampler2D tex;\r\n\tvarying vec2 vtc;\r\n\t$calcFragDepth\r\n\t$float2rgba\r\n\r\n\t$fsDepthSrc\r\n\t\tif (texture2D(tex, vtc).a \x3c .33) discard;\r\n#ifndef BIAS_SHADOWMAP\r\n\t\tgl_FragColor \x3d float2rgba(depth);\r\n#else\r\n\t\tgl_FragColor \x3d float2rgba(calcFragDepth(depth));\r\n#endif\r\n\t}\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3csnippet name\x3d"fsNormal"\x3e\x3c![CDATA[\r\n\tprecision mediump float;\r\n\r\n\tvarying vec3 vnormal;\r\n\tvoid main() {\r\n\t\tvec3 normal \x3d normalize(vnormal);\r\n\t\tif (gl_FrontFacing \x3d\x3d false) normal \x3d -normal;\r\n\t\tgl_FragColor \x3d vec4(vec3(.5) + .5 * normal, 1.0);\r\n\t}\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3csnippet name\x3d"fsNormalTextured"\x3e\x3c![CDATA[\r\n\tprecision mediump float;\r\n\r\n\tvarying vec3 vnormal;\r\n\tvarying vec2 vtc;\r\n\tuniform sampler2D tex;\r\n\tvoid main() {\r\n\t\tif (texture2D(tex, vtc).a \x3c .33) discard;\r\n\t\tvec3 normal \x3d normalize(vnormal);\r\n\t\tif (gl_FrontFacing \x3d\x3d false) normal \x3d -normal;\r\n\t\tgl_FragColor \x3d vec4(vec3(.5) + .5 * normal, 1.0);\r\n\t}\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3c/snippets\x3e'}});
define("dojo/_base/lang dojo/text!./Material.xml ./internal/MaterialUtil ../lib/GLSLProgram ../lib/GLSLShader ../lib/ShaderVariations ../lib/Util ../lib/gl-matrix".split(" "),function(r,C,h,n,m,D,E,y){var z=E.assert,p=y.mat4d,v=y.vec3,A,q=v.create(),u=function(b,f){h.basicMaterialConstructor(this,f);b=b||{};b.ambient=b.ambient||[.2,.2,.2];b.diffuse=b.diffuse||[.8,.8,.8];b.specular=b.specular||[0,0,0];b.shininess=b.shininess||10;b.opacity=void 0!==b.opacity?b.opacity:1;b.blendModeOneOne=b.blendModeOneOne||
!1;b.inverseWindingOrder=b.inverseWindingOrder||!1;b.vertexColors=b.vertexColors||!1;b.flipV=b.flipV||!1;b.doubleSided=b.doubleSided||!1;b.instanced=b.instanced||!1;this.instanced=!!b.instanced;b.textureId||(b.reflTextureId=void 0);var k="envTex_panorama"===b.textureId;k?f="PosTex":(f=b.textureId?b.atlasRegions?"PosNormTexRegion":"PosNormTex":"PosNorm",b.vertexColors&&(f+="Col"));var a=h.Layouts[f],c=b.instanced?h.Layouts.ModelCol:null;b.instanced&&(c=-1<b.instanced.indexOf("color")?h.Layouts.ModelCol:
h.Layouts.Model);this.dispose=function(){};this.getParams=function(){return b};this.getParameterValues=function(){var a={ambient:b.ambient,diffuse:b.diffuse,specular:b.specular,shininess:b.shininess,opacity:b.opacity,transparent:b.transparent,polygonOffset:b.polygonOffset,reflectivity:b.reflectivity,atlasRegions:b.atlasRegions,flipV:b.flipV,doubleSided:b.doubleSided};b.textureId&&(a.textureId=b.textureId,a.initTexture=b.initTexture);return a};this.setParameterValues=function(a){for(var d in a)"textureId"===
d&&z(b.textureId,"Can only change texture of material that already has a texture"),b[d]=a[d];this.notifyDirty("matChanged")};this.getOutputAmount=function(b){return b*a.getStride()};this.getVertexBufferLayout=function(){return a};this.getInstanceBufferLayout=function(){return c};this.fillInterleaved=function(b,d,e,c,g,f,k){h.fillInterleaved(b,d,e,c,a,g,f,k)};this.intersect=h.intersectTriangleGeometry;this.getGLMaterials=function(){return k?[F]:[G,H,I,B]};this.getAllTextureIds=function(){var a=[];
b.textureId&&a.push(b.textureId);b.reflTextureId&&a.push(b.reflTextureId);return a}};u.paramsFromOldConstructor=function(b,f,k,a,c,l,d,e,t,g,h,m,n){return{textureId:b,transparent:f,ambient:k,diffuse:a,specular:c,shininess:l,opacity:d,polygonOffset:e,initTexture:t,reflTextureId:g,reflectivity:h,flipV:m,doubleSided:n}};var w=function(b,f){f=!f.doubleSided&&!f.transparent;!1===b.web3DDefaultState.cullFace?f&&b.enable(b.CULL_FACE):f||b.disable(b.CULL_FACE)},x=function(b,f){f=!f.doubleSided&&!f.transparent;
!1===b.web3DDefaultState.cullFace?f&&b.disable(b.CULL_FACE):f||b.enable(b.CULL_FACE)},G=function(b,f,k){h.basicGLMaterialConstructor(this,b);var a=r.clone(b.getParams()),c=a.transparent?2:1;h.singleTextureGLMaterialConstructor(this,k,a);var l=h.aquireIfNotUndefined(a.reflTextureId,a.reflInitTexture,k);z(!(a.atlasRegions&&a.reflTextureId),"Atlas texture with reflection is not yet supported");f=a.textureId?a.atlasRegions?"AtlasTextured":"Textured":"none";this.instanced=A&&a.instanced;var d=!!this.instanced&&
-1<this.instanced.indexOf("color"),e=u.programs.getProgram([f,!!a.reflTextureId,a.vertexColors,a.flipV,a.doubleSided,!!this.instanced,d]),t=this.dispose;this.dispose=function(){t();h.releaseIfNotUndefined(a.reflTextureId,k)};this.beginSlot=function(b){return c===b};this.getProgram=function(){return e};this.updateParameters=function(){var e=b.getParams();a.ambient=e.ambient;a.diffuse=e.diffuse;a.specular=e.specular;a.shininess=e.shininess;a.opacity=e.opacity;a.polygonOffset=e.polygonOffset;a.reflectivity=
e.reflectivity;a.transparent!=e.transparent&&(c=a.transparent?2:1,a.transparent=e.transparent);a.initTexture=e.initTexture;this.updateTexture(e.textureId);e.atlasRegions&&(a.atlasRegions=e.atlasRegions);a.blendModeOneOne=e.blendModeOneOne;a.inverseWindingOrder=e.inverseWindingOrder};this.bind=function(g,d){e.use();e.uniform3fv("ambient",a.ambient);e.uniform3fv("diffuse",a.diffuse);e.uniform3fv("specular",a.specular);e.uniform1f("shininess",a.shininess);e.uniform1f("opacity",a.opacity);this.bindTexture(g,
e);void 0!==l&&(e.uniform1i("reflTex",1),g.activeTexture(g.TEXTURE1),g.bindTexture(g.TEXTURE_2D,l),g.activeTexture(g.TEXTURE0),e.uniform1f("reflectivity",a.reflectivity));b.getVertexBufferLayout().enableVertexAttribArrays(g,e,!1);this.instanced&&b.getInstanceBufferLayout().enableVertexAttribArrays(g,e,d.extensions.angleInstancedArrays);a.inverseWindingOrder&&g.frontFace(g.CW);a.transparent&&(g.enable(g.BLEND),a.blendModeOneOne&&(g.blendFunc(g.ONE,g.ONE),g.depthMask(!1)));a.polygonOffset&&(g.enable(g.POLYGON_OFFSET_FILL),
g.polygonOffset(2,2));w(g,a)};this.release=function(g,d){a.polygonOffset&&g.disable(g.POLYGON_OFFSET_FILL);x(g,a);a.transparent&&(g.disable(g.BLEND),a.blendModeOneOne&&(g.blendFunc(g.web3DDefaultState.blendFuncSrc,g.web3DDefaultState.blendFuncDst),g.depthMask(!0)));a.inverseWindingOrder&&g.frontFace(g.CCW);b.getVertexBufferLayout().disableVertexAttribArrays(g,e,!1);this.instanced&&b.getInstanceBufferLayout().disableVertexAttribArrays(g,e,d.extensions.angleInstancedArrays)};this.bindView=function(b,
a){b=a.origin;h.bindView(b,a.view,e);h.bindCamPos(b,a.viewInvTransp,e);a.shadowMap.bindView(e,b)};this.bindInstance=function(b,c){e.uniformMatrix4fv("model",c.transformation);e.uniformMatrix4fv("modelNormal",c.transformationNormal);d&&c.instanceParameters&&(b=c.instanceParameters.color)&&(v.multiply(a.ambient,b,q),e.uniform3fv("ambient",q),v.multiply(a.diffuse,b,q),e.uniform3fv("diffuse",q),e.uniform1f("opacity",a.opacity*b[3]))};this.getDrawMode=function(b){return b.TRIANGLES}},B=function(b,f,k,
a){h.basicGLMaterialConstructor(this,b);var c=r.clone(b.getParams()),l=null!=a?f.get(b.getVertexBufferLayout().hasAttribute("uv0")?"depthTexturedShadowMap":"depthShadowMap"):f.get(b.getVertexBufferLayout().hasAttribute("uv0")?"depthTextured":"depth"),d=c.transparent?2:1;h.singleTextureGLMaterialConstructor(this,k,c);this.beginSlot=function(b){return d===b};this.getProgram=function(){return l};this.updateParameters=function(){var a=b.getParams();c.initTexture=a.initTexture;this.updateTexture(a.textureId)};
this.bind=function(a,d){l.use();l.uniform2fv("nearFar",d.nearFar);c.inverseWindingOrder&&a.frontFace(a.CW);this.bindTexture(a,l);b.getVertexBufferLayout().enableVertexAttribArrays(a,l);w(a,c)};this.release=function(a){x(a,c);c.inverseWindingOrder&&a.frontFace(a.CCW);b.getVertexBufferLayout().disableVertexAttribArrays(a,l)};this.bindView=function(b,a){h.bindView(a.origin,a.view,l)};this.bindInstance=function(b,a){l.uniformMatrix4fv("model",a.transformation)};this.getDrawMode=function(b){return b.TRIANGLES}},
H=function(b,f,k){B.call(this,b,f,k,!0)},I=function(b,f,k){h.basicGLMaterialConstructor(this,b);var a=r.clone(b.getParams()),c=f.get(b.getVertexBufferLayout().hasAttribute("uv0")?"normalTextured":"normal"),l=a.transparent?2:1;h.singleTextureGLMaterialConstructor(this,k,a);this.beginSlot=function(b){return l===b};this.getProgram=function(){return c};this.updateParameters=function(){var d=b.getParams();a.initTexture=d.initTexture;this.updateTexture(d.textureId)};this.bind=function(d,e){c.use();this.bindTexture(d,
c);c.uniformMatrix4fv("viewNormal",e.viewInvTransp);b.getVertexBufferLayout().enableVertexAttribArrays(d,c);w(d,a);a.inverseWindingOrder&&d.frontFace(d.CW)};this.release=function(d){x(d,a);a.inverseWindingOrder&&d.frontFace(d.CCW);b.getVertexBufferLayout().disableVertexAttribArrays(d,c)};this.bindView=function(b,a){h.bindView(a.origin,a.view,c)};this.bindInstance=function(b,a){c.uniformMatrix4fv("model",a.transformation);c.uniformMatrix4fv("modelNormal",a.transformationNormal)};this.getDrawMode=function(b){return b.TRIANGLES}},
F=function(b,f,k){h.basicGLMaterialConstructor(this,b);var a=b.getParams(),c=f.get("texOnly"),l=h.aquireIfNotUndefined(a.textureId,a.initTexture,k);this.beginSlot=function(b){return 0===b};this.getProgram=function(){return c};var d=p.create();this.bind=function(a,f){c.use();p.set(f.proj,d);d[2]=d[6]=d[10]=d[14]=0;c.uniformMatrix4fv("proj",d);var e=f.lightingData.getLightAmbient();f=Math.max(f.lightingData.getLightSpecular()[3],.1);c.uniform4f("color",e[0]*f,e[1]*f,e[2]*f,1);b.getVertexBufferLayout().enableVertexAttribArrays(a,
c);c.uniform1i("tex",0);a.bindTexture(a.TEXTURE_2D,l);a.depthMask(!1);a.disable(a.DEPTH_TEST);a.web3DDefaultState.cullFace&&a.disable(a.CULL_FACE)};this.release=function(a){a.depthMask(!0);a.enable(a.DEPTH_TEST);a.web3DDefaultState.cullFace&&a.enable(a.CULL_FACE);b.getVertexBufferLayout().disableVertexAttribArrays(a,c)};this.bindView=function(a,b){p.set(b.view,d);d[12]=d[13]=d[14]=0;c.uniformMatrix4fv("view",d)};this.bindInstance=function(a,b){p.set(b.transformation,d);d[12]=d[13]=d[14]=0;c.uniformMatrix4fv("model",
d)};this.getDrawMode=function(a){return a.TRIANGLES}};u.programs=null;u.loadShaders=function(b,f,k,a){b._parse(C);a.getExtension("OES_standard_derivatives");A=a.getExtension("ANGLE_instanced_arrays");var c=new D("phong",["vsPhong","fsPhong"],null,k,null,b,a);c.addNaryShaderSnippetSuffix([{value:"none",programNameSuffix:"",shaderSnippetSuffix:""},{value:"Textured"},{value:"AtlasTextured"}]);c.addBinaryShaderSnippetSuffix("Refl","Refl",[!1,!0]);c.addDefine("Color","VERTEXCOLORS");c.addDefine("FlipV",
"FLIPV");c.addDefine("DoubleSided","DOUBLESIDED");c.addDefine("Instanced","INSTANCED");c.addDefine("InstColor","INSTANCEDCOLOR");u.programs=c;var c=new m(a.VERTEX_SHADER,b.vsDepth,a),h=new m(a.VERTEX_SHADER,b.vsDepthTextured,a),d=new m(a.VERTEX_SHADER,b.vsNormal,a),e=new m(a.VERTEX_SHADER,b.vsNormalTextured,a),t=new m(a.FRAGMENT_SHADER,b.fsDepth,a,["BIAS_SHADOWMAP 1"]),g=new m(a.FRAGMENT_SHADER,b.fsDepthTextured,a,["BIAS_SHADOWMAP 1"]),p=new m(a.FRAGMENT_SHADER,b.fsDepth,a),q=new m(a.FRAGMENT_SHADER,
b.fsDepthTextured,a),r=new m(a.FRAGMENT_SHADER,b.fsNormal,a),v=new m(a.FRAGMENT_SHADER,b.fsNormalTextured,a);b=new n([c,t],a);var w=new n([h,g],a),x=new n([c,p],a),h=new n([h,q],a),d=new n([d,r],a);a=new n([e,v],a);k.add("depthShadowMap",b);k.add("depthTexturedShadowMap",w);k.add("depth",x);k.add("depthTextured",h);k.add("normal",d);k.add("normalTextured",a);f.add("fsDepth",p);f.add("fsDepthTextured",q);f.add("fsDepthShadowMap",t);f.add("fsDepthTexturedShadowMap",g);f.add("vsDepth",c);f.add("fsNormal",
r)};return u});