/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{B as e}from"./BufferView.js";import{g as t,h as s,i as a,m as r,d as i,j as o,S as n,k as p,C as l,D as c,l as u,o as h,P as d,s as f,p as m,q as v,r as g,t as P,u as T}from"./StencilUtils.js";import{C as _}from"./basicInterfaces.js";import{G as y}from"./GLTextureMaterial.js";import{a as E}from"./Material.js";import{T as I,s as O,m as b,o as S,c as x,a as D,d as A,b as C,e as w,g as j,O as N}from"./OrderIndependentTransparency.js";import{a as R}from"./Util.js";import{V}from"./VertexAttribute.js";import{D as M,w as L,a as B}from"./DefaultBufferWriter.js";import{P as F}from"./DefaultLayouts.js";import{T as U}from"./TriangleMaterial.js";import{_ as G}from"./tslib.es6.js";import{g as $}from"./interfaces5.js";import{p as W}from"./ShaderTechniqueConfiguration.js";import{T as z}from"./OutputHighlight.glsl.js";import{j as H}from"./enums.js";const q=Object.freeze(Object.defineProperty({__proto__:null,build:function(e){const c=new t,{vertex:u,fragment:h}=c;return s(u,e),c.include(z,e),c.attributes.add(V.POSITION,"vec3"),c.attributes.add(V.UV0,"vec2"),e.perspectiveInterpolation&&c.attributes.add(V.PERSPECTIVEDIVIDE,"float"),c.varyings.add("vpos","vec3"),e.multipassEnabled&&c.varyings.add("depth","float"),u.code.add($`
    void main(void) {
      vpos = position;
      ${e.multipassEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
      vTexCoord = uv0;
      gl_Position = transformPosition(proj, view, vpos);

      ${e.perspectiveInterpolation?"gl_Position *= perspectiveDivide;":""}
    }
  `),c.include(a,e),c.include(r,e),h.uniforms.add(new i("tex",(e=>e.texture)),new o("opacity",(e=>e.opacity))),c.varyings.add("vTexCoord","vec2"),e.output===n.Alpha?h.code.add($`
    void main() {
      discardBySlice(vpos);
      ${e.multipassEnabled?"terrainDepthTest(depth);":""}

      float alpha = texture(tex, vTexCoord).a * opacity;
      if (alpha  < ${$.float(p)}) {
        discard;
      }

      fragColor = vec4(alpha);
    }
    `):(h.include(l),h.code.add($`
    void main() {
      discardBySlice(vpos);
      ${e.multipassEnabled?"terrainDepthTest(depth);":""}
      fragColor = texture(tex, vTexCoord) * opacity;

      if (fragColor.a < ${$.float(p)}) {
        discard;
      }

      fragColor = highlightSlice(fragColor, vpos);
      ${e.transparencyPassType===I.Color?"fragColor = premultiplyAlpha(fragColor);":""}
    }
    `)),c}},Symbol.toStringTag,{value:"Module"}));class k extends h{initializeProgram(e){return new d(e.rctx,k.shader.get().build(this.configuration),K)}_setPipelineState(e,t){const s=this.configuration,a=e===I.NONE,r=e===I.FrontFace;return b({blending:s.output!==n.Color&&s.output!==n.Alpha||!s.transparent?null:a?Q:S(e),culling:x(s.cullFace),depthTest:{func:D(e)},depthWrite:a?s.writeDepth?A:null:C(e),colorWrite:w,stencilWrite:s.hasOccludees?f:null,stencilTest:s.hasOccludees?t?m:v:null,polygonOffset:a||r?null:j(s.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._setPipelineState(this.configuration.transparencyPassType,!0),this._setPipelineState(this.configuration.transparencyPassType,!1)}getPipeline(e){return e?this._occludeePipelineState:super.getPipeline()}}k.shader=new u(q,(()=>Promise.resolve().then((()=>q))));const Q=O(H.ONE,H.ONE_MINUS_SRC_ALPHA);class J extends c{constructor(){super(...arguments),this.output=n.Color,this.cullFace=_.None,this.hasSlicePlane=!1,this.transparent=!1,this.enableOffset=!0,this.writeDepth=!0,this.hasOccludees=!1,this.transparencyPassType=I.NONE,this.multipassEnabled=!1,this.cullAboveGround=!1,this.perspectiveInterpolation=!0}}G([W({count:n.COUNT})],J.prototype,"output",void 0),G([W({count:_.COUNT})],J.prototype,"cullFace",void 0),G([W()],J.prototype,"hasSlicePlane",void 0),G([W()],J.prototype,"transparent",void 0),G([W()],J.prototype,"enableOffset",void 0),G([W()],J.prototype,"writeDepth",void 0),G([W()],J.prototype,"hasOccludees",void 0),G([W({count:I.COUNT})],J.prototype,"transparencyPassType",void 0),G([W()],J.prototype,"multipassEnabled",void 0),G([W()],J.prototype,"cullAboveGround",void 0),G([W()],J.prototype,"perspectiveInterpolation",void 0),G([W({constValue:!1})],J.prototype,"occlusionPass",void 0);const K=new Map([[V.POSITION,0],[V.UV0,2],[V.PERSPECTIVEDIVIDE,3]]);class X extends U{constructor(e){super(e,new ee),this.supportsEdges=!0,this.produces=new Map([[g.OPAQUE_MATERIAL,e=>e===n.Highlight||P(e)&&!this.parameters.transparent],[g.TRANSPARENT_MATERIAL,e=>P(e)&&this.parameters.transparent&&this.parameters.writeDepth],[g.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL,e=>P(e)&&this.parameters.transparent&&!this.parameters.writeDepth],[g.DRAPED_MATERIAL,e=>T(e)]]),this._vertexAttributeLocations=K,this._configuration=new J}getConfiguration(e,t){return this._configuration.output=e,this._configuration.cullFace=this.parameters.cullFace,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.enableOffset=t.camera.relativeElevation<N,this._configuration.multipassEnabled=t.multipassEnabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration.perspectiveInterpolation=this.parameters.perspectiveInterpolation,this._configuration}createGLMaterial(e){return new Y(e)}createBufferWriter(){const e=F.clone();return this.parameters.perspectiveInterpolation&&e.f32(V.PERSPECTIVEDIVIDE),new Z(e)}}class Y extends y{constructor(e){super({...e,...e.material.parameters})}_updateParameters(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(k,e)}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&(this._material.setParameters({hasOccludees:e.hasOccludees}),this._updateParameters(e))}beginSlot(e){return this._output!==n.Color&&this._output!==n.Alpha||this._updateOccludeeState(e),this._updateParameters(e)}}class Z extends M{write(t,s,a,r,i){for(const o of this.vertexBufferLayout.fields.keys()){const n=a.attributes.get(o);if(n)if(o===V.PERSPECTIVEDIVIDE){R(1===n.size);const t=r.getField(o,e);t&&L(n,t,i)}else B(o,n,t,s,r,i)}}}class ee extends E{constructor(){super(...arguments),this.transparent=!1,this.writeDepth=!0,this.hasSlicePlane=!1,this.cullFace=_.None,this.hasOccludees=!1,this.opacity=1,this.textureId=null,this.initTextureTransparent=!0,this.perspectiveInterpolation=!1}}export{X as I};
