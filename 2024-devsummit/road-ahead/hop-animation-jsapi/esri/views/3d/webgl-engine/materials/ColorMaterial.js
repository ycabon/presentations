// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/has ../../../../core/libs/gl-matrix-2/factories/vec4f64 ../../support/buffer/InterleavedLayout ../core/shaderLibrary/ShaderOutput ../lib/basicInterfaces ../lib/GLMaterial ../lib/OrderIndependentTransparency ../lib/RenderSlot ../lib/VertexAttribute ./DefaultBufferWriter ./TriangleMaterial ./VisualVariablePassParameters ../shaders/ColorMaterialTechnique ../shaders/ColorMaterialTechniqueConfiguration".split(" "),function(f,h,k,l,c,m,n,p,d,e,q,r,t,u,v){class w extends r.TriangleMaterial{constructor(b){super(b,
new g);this.supportsEdges=!0;this.produces=new Map([[d.RenderSlot.OPAQUE_MATERIAL,a=>a===c.ShaderOutput.Highlight||c.isColorAlphaOrOID(a)&&!this._isTransparent],[d.RenderSlot.OPAQUE_NO_SSAO_DEPTH,a=>a===c.ShaderOutput.LinearDepth&&this.parameters.writeLinearDepth&&!this._isTransparent],[d.RenderSlot.TRANSPARENT_MATERIAL,a=>c.isColorAlphaOrOID(a)&&this._isTransparent&&this.parameters.writeDepth],[d.RenderSlot.TRANSPARENT_NO_SSAO_DEPTH,a=>a===c.ShaderOutput.LinearDepth&&this.parameters.writeLinearDepth&&
this._isTransparent&&this.parameters.writeDepth],[d.RenderSlot.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL,a=>(c.isColorAlphaOrOID(a)||a===c.ShaderOutput.LinearDepth&&this.parameters.writeLinearDepth)&&this._isTransparent&&!this.parameters.writeDepth],[d.RenderSlot.DRAPED_MATERIAL,a=>c.is2DGeometryOutput(a)]]);this._configuration=new v.ColorMaterialTechniqueConfiguration}getConfiguration(b,a){this._configuration.output=b;this._configuration.cullFace=this.parameters.cullFace;this._configuration.hasVertexColors=
this.parameters.hasVertexColors&&!this.parameters.vvColor;this._configuration.hasSlicePlane=this.parameters.hasSlicePlane;this._configuration.transparent=this._isTransparent;this._configuration.polygonOffset=this.parameters.polygonOffset;this._configuration.writeDepth=this.parameters.writeDepth;this._configuration.hasOccludees=this.parameters.hasOccludees;this._configuration.transparencyPassType=a.transparencyPassType;this._configuration.enableOffset=a.camera.relativeElevation<p.OITPolygonOffsetLimit;
this._configuration.multipassEnabled=a.multipassEnabled;this._configuration.cullAboveGround=a.multipassTerrain.cullAboveGround;this._configuration.vvColor=!!this.parameters.vvColor;this._configuration.draped=this.parameters.draped;return this._configuration}createGLMaterial(b){return new x(b)}createBufferWriter(){const b=l.newLayout().vec3f(e.VertexAttribute.POSITION);h("enable-feature:objectAndLayerId-rendering")&&b.vec4u8(e.VertexAttribute.OBJECTANDLAYERIDCOLOR);this.parameters.vvColor?b.f32(e.VertexAttribute.COLORFEATUREATTRIBUTE):
b.vec4u8(e.VertexAttribute.COLOR);return new q.DefaultBufferWriter(b)}get _isTransparent(){return 1>this.parameters.color[3]||this.parameters.forceTransparentMode}}class x extends n{_updateOccludeeState(b){b.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:b.hasOccludees})}beginSlot(b){this._output!==c.ShaderOutput.Color&&this._output!==c.ShaderOutput.Alpha||this._updateOccludeeState(b);return this.ensureTechnique(u.ColorMaterialTechnique,b)}}class g extends t.VisualVariablePassParameters{constructor(){super(...arguments);
this.color=k.ZEROS;this.forceTransparentMode=!1;this.writeDepth=!0;this.hasSlicePlane=this.polygonOffset=this.hasVertexColors=this.writeLinearDepth=!1;this.cullFace=m.CullFaceOptions.None;this.draped=this.hasOccludees=!1}}f.ColorMaterial=w;f.Parameters=g;Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});