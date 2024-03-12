// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../core/shaderLibrary/ShaderOutput ../core/shaderTechnique/ShaderTechniqueConfiguration ../lib/GLMaterial ../lib/Material ../lib/RenderSlot ./DefaultBufferWriter ./DefaultLayouts ./TriangleMaterial ../shaders/SlicePlaneMaterialTechnique".split(" "),function(b,e,f,g,h,k,l,m,n,c){class p extends n.TriangleMaterial{constructor(a){super(a,new d);this.produces=new Map([[k.RenderSlot.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL,q=>q===e.ShaderOutput.Color]]);this._configuration=new f.ShaderTechniqueConfiguration}createBufferWriter(){return new l.DefaultBufferWriter(m.PositionUVLayout)}createGLMaterial(a){return new r(a)}getConfiguration(){return this._configuration}}
class r extends g{constructor(a){super(a);this.ensureTechnique(c.SlicePlaneMaterialTechnique,null)}beginSlot(){return this.technique}}class d extends c.SlicePlaneMaterialPassParameters{constructor(){super(...arguments);this.renderOccluded=h.RenderOccludedFlag.Occlude;this.isDecoration=!1}}b.Parameters=d;b.SlicePlaneMaterial=p;Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});