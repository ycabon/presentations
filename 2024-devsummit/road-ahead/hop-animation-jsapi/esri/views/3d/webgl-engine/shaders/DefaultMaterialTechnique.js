// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/libs/gl-matrix-2/factories/vec3f64 ../../../../core/libs/gl-matrix-2/factories/vec4f64 ../../../ViewingMode ../core/shaderLibrary/ShaderOutput ../core/shaderLibrary/attributes/NormalAttribute.glsl ../core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl ../core/shaderLibrary/attributes/VertexNormal.glsl ../core/shaderLibrary/util/AlphaCutoff ../core/shaderTechnique/ReloadableShaderModule ../core/shaderTechnique/ShaderTechnique ../lib/basicInterfaces ../lib/DefaultVertexAttributeLocations ../lib/Material ../lib/OrderIndependentTransparency ../lib/Program ../lib/StencilUtils ../lib/TransparencyPassType ../materials/pbrUtils ../../../../chunks/DefaultMaterial.glsl ../../../webgl/enums ../../../webgl/renderState".split(" "),
function(v,g,d,w,x,n,y,p,q,z,A,B,e,C,D,h,E,k,r,F,G,t,f){class H extends q.VertexNormalPassParameters{constructor(){super(...arguments);this.usePBR=this.isSchematic=!1;this.mrrFactors=d.fromArray(F.defaultAdvancedMRRFactors);this.doubleSided=this.hasSymbolColors=this.hasVertexColors=!1;this.doubleSidedType="normal";this.cullFace=e.CullFaceOptions.Back;this.hasInstancedColor=this.isInstanced=!1;this.emissiveFactor=d.fromValues(0,0,0);this.instancedDoublePrecision=!1;this.normalType=y.NormalType.Attribute;
this.castShadows=this.receiveShadows=!0;this.shadowMappingEnabled=!1;this.ambient=d.fromValues(.2,.2,.2);this.diffuse=d.fromValues(.8,.8,.8);this.externalColor=w.fromValues(1,1,1,1);this.colorMixMode="multiply";this.layerOpacity=this.opacity=1;this.origin=d.create();this.hasSlicePlane=!1;this.hasSliceHighlight=!0;this.offsetTransparentBackfaces=!1;this.modelTransformation=this.vvSymbolRotationMatrix=this.vvSymbolAnchor=this.vvOpacity=this.vvColor=this.vvSize=null;this.transparent=!1;this.writeDepth=
!0;this.customDepthTest=e.DepthTestFunction.Less;this.textureAlphaMode=e.AlphaDiscardMode.Blend;this.textureAlphaCutoff=z.defaultMaskAlphaCutoff;this.hasOccludees=this.textureAlphaPremultiplied=!1;this.renderOccluded=D.RenderOccludedFlag.Occlude;this.isDecoration=!1}}class I extends q.VertexNormalDrawParameters{constructor(){super(...arguments);this.slicePlaneLocalOrigin=this.origin=d.create()}}class l extends B.ShaderTechnique{initializeConfiguration(a,b){b.spherical=a.viewingMode===x.ViewingMode.Global;
b.doublePrecisionRequiresObfuscation=a.rctx.driverTest.doublePrecisionRequiresObfuscation.result;b.textureCoordinateType=b.hasColorTexture||b.hasMetallicRoughnessTexture||b.hasEmissionTexture||b.hasOcclusionTexture||b.hasNormalTexture?p.TextureCoordinateAttributeType.Default:p.TextureCoordinateAttributeType.None;b.objectAndLayerIdColorInstanced=b.instanced}initializeProgram(a){return this._initializeProgram(a,l.shader)}_initializeProgram(a,b){return new E.Program(a.rctx,b.get().build(this.configuration),
C.Default3D)}_convertDepthTestFunction(a){return a===e.DepthTestFunction.Lequal?t.CompareFunction.LEQUAL:t.CompareFunction.LESS}_makePipeline(a,b){const c=this.configuration,m=a===r.TransparencyPassType.NONE,u=a===r.TransparencyPassType.FrontFace;var J=f.makePipelineState,K=c.output!==n.ShaderOutput.Color&&c.output!==n.ShaderOutput.Alpha||!c.transparent?null:m?h.blendingDefault:h.oitBlending(a);var L=c.cullFace!==e.CullFaceOptions.None?!0:c.hasSlicePlane?!1:!c.transparent&&!c.doubleSidedMode;return J.call(f,
{blending:K,culling:L?f.cullingParams(c.cullFace):null,depthTest:{func:h.oitDepthTest(a,this._convertDepthTestFunction(c.customDepthTest))},depthWrite:m||u?c.writeDepth?f.defaultDepthWriteParams:null:null,colorWrite:f.defaultColorWriteParams,stencilWrite:c.hasOccludees?k.stencilWriteMaskOn:null,stencilTest:c.hasOccludees?b?k.stencilToolMaskBaseParams:k.stencilBaseAllZerosParams:null,polygonOffset:m||u?null:h.getOITPolygonOffset(c.enableOffset)})}initializePipeline(){this._occludeePipelineState=this._makePipeline(this.configuration.transparencyPassType,
!0);return this._makePipeline(this.configuration.transparencyPassType,!1)}getPipeline(a){return a?this._occludeePipelineState:super.getPipeline()}}l.shader=new A.ReloadableShaderModule(G.DefaultMaterial,()=>new Promise((a,b)=>v(["./DefaultMaterial.glsl"],a,b)));g.DefaultMaterialDrawParameters=I;g.DefaultMaterialPassParameters=H;g.DefaultMaterialTechnique=l;Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});