import { hG as o, hL as v, hI as r, gh as O, jc as e, r as r$1, jz as i, hF as n, hJ as u, hO as n$1, jb as m$1, hE as o$1, hH as h, jA as o$2, hK as e$1, hR as o$3, jd as s, am as R, B as e$2, hS as e$3, gx as n$2, hT as s$1, i2 as t, hU as e$4, hV as o$4, iK as E, hW as W, hY as A, hZ as h$1, jB as l, h_ as a, h$ as E$1, i0 as _$1, jC as e$5, jD as o$5, jE as f$1, jF as a$1, i3 as d$1, jG as S, i4 as x, i5 as E$2, iO as i$1, iP as o$6, jH as h$2, i7 as h$3 } from './_virtual_index-9b831d4a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function f(f){const w=new o;v(w,f),w.include(r,f),w.attributes.add(O.POSITION,"vec3"),w.attributes.add(O.UV0,"vec2"),w.varyings.add("vpos","vec3"),f.hasMultipassTerrain&&w.varyings.add("depth","float");const{vertex:h$1,fragment:b}=w;return h$1.uniforms.add(new e("textureCoordinateScaleFactor",(o=>r$1(o.texture)&&r$1(o.texture.descriptor.textureCoordinateScaleFactor)?o.texture.descriptor.textureCoordinateScaleFactor:i))),h$1.code.add(n`
    void main(void) {
      vpos = position;
      ${f.hasMultipassTerrain?"depth = (view * vec4(vpos, 1.0)).z;":""}
      vTexCoord = uv0 * textureCoordinateScaleFactor;
      gl_Position = transformPosition(proj, view, vpos);
    }
  `),w.include(u,f),w.include(n$1,f),b.uniforms.add([new m$1("tex",(e=>e.texture)),new o$1("opacity",(e=>e.opacity))]),w.varyings.add("vTexCoord","vec2"),f.output===h.Alpha?b.code.add(n`
    void main() {
      discardBySlice(vpos);
      ${f.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}

      float alpha = texture2D(tex, vTexCoord).a * opacity;
      if (alpha  < ${n.float(o$2)}) {
        discard;
      }

      gl_FragColor = vec4(alpha);
    }
    `):(b.include(e$1),b.code.add(n`
    void main() {
      discardBySlice(vpos);
      ${f.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
      gl_FragColor = texture2D(tex, vTexCoord) * opacity;

      if (gl_FragColor.a < ${n.float(o$2)}) {
        discard;
      }

      gl_FragColor = highlightSlice(gl_FragColor, vpos);
      ${f.transparencyPassType===o$3.Color?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
    }
    `)),w}const w$1=Object.freeze(Object.defineProperty({__proto__:null,build:f},Symbol.toStringTag,{value:"Module"}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class _ extends e$4{initializeProgram(e){return new o$4(e.rctx,_.shader.get().build(this.configuration),E)}_setPipelineState(e,r){const i=this.configuration,s=e===o$3.NONE,o=e===o$3.FrontFace;return W({blending:i.output!==h.Color&&i.output!==h.Alpha||!i.transparent?null:s?C:A(e),culling:h$1(i.cullFace),depthTest:{func:l(e)},depthWrite:s?i.writeDepth&&a:E$1(e),colorWrite:_$1,stencilWrite:i.hasOccludees?e$5:null,stencilTest:i.hasOccludees?r?o$5:f$1:null,polygonOffset:s||o?null:a$1(i.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._setPipelineState(this.configuration.transparencyPassType,!0),this._setPipelineState(this.configuration.transparencyPassType,!1)}getPipelineState(e,t){return t?this._occludeePipelineState:super.getPipelineState(e,t)}}_.shader=new t(w$1,(()=>import('./ImageMaterial.glsl-2f8e5a09.js')));const C=s(R.ONE,R.ONE_MINUS_SRC_ALPHA);class w extends s$1{constructor(){super(...arguments),this.output=h.Color,this.cullFace=n$2.None,this.hasSlicePlane=!1,this.transparent=!1,this.enableOffset=!0,this.writeDepth=!0,this.hasOccludees=!1,this.transparencyPassType=o$3.NONE,this.hasMultipassTerrain=!1,this.cullAboveGround=!1;}}e$2([e$3({count:h.COUNT})],w.prototype,"output",void 0),e$2([e$3({count:n$2.COUNT})],w.prototype,"cullFace",void 0),e$2([e$3()],w.prototype,"hasSlicePlane",void 0),e$2([e$3()],w.prototype,"transparent",void 0),e$2([e$3()],w.prototype,"enableOffset",void 0),e$2([e$3()],w.prototype,"writeDepth",void 0),e$2([e$3()],w.prototype,"hasOccludees",void 0),e$2([e$3({count:o$3.COUNT})],w.prototype,"transparencyPassType",void 0),e$2([e$3()],w.prototype,"hasMultipassTerrain",void 0),e$2([e$3()],w.prototype,"cullAboveGround",void 0);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class p extends d$1{constructor(e){super(e,new d),this.supportsEdges=!0,this._configuration=new w;}getConfiguration(e,t){return this._configuration.output=e,this._configuration.cullFace=this.parameters.cullFace,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.enableOffset=t.camera.relativeElevation<S,this._configuration.hasMultipassTerrain=t.multipassTerrain.enabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration}intersect(e,t,r,a,s,i,n){x(e,t,a,s,i,void 0,n);}requiresSlot(t,r){if(r===h.Color||r===h.Alpha||r===h.Highlight){if(t===E$2.DRAPED_MATERIAL)return !0;if(r===h.Highlight)return t===E$2.OPAQUE_MATERIAL;return t===(this.parameters.transparent?this.parameters.writeDepth?E$2.TRANSPARENT_MATERIAL:E$2.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:E$2.OPAQUE_MATERIAL)}return !1}createGLMaterial(e){return new m(e)}createBufferWriter(){return new i$1(o$6)}}class m extends h$2{constructor(e){super({...e,...e.material.parameters});}_updateParameters(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(_,e)}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&(this._material.setParameters({hasOccludees:e.hasOccludees}),this._updateParameters(e));}beginSlot(t){return this._output!==h.Color&&this._output!==h.Alpha||this._updateOccludeeState(t),this._updateParameters(t)}}class d extends h$3{constructor(){super(...arguments),this.transparent=!1,this.writeDepth=!0,this.hasSlicePlane=!1,this.cullFace=n$2.None,this.hasOccludees=!1,this.opacity=1,this.textureId=null,this.initTextureTransparent=!0;}}

export { f, p };
