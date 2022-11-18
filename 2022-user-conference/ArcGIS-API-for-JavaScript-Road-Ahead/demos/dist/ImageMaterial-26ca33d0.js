import { ir as o, iw as v, it as r, gP as O, jY as e, m as r$1, kh as i, iq as n, iu as u, iz as n$1, jX as f$1, ip as o$1, is as h, ki as o$2, iv as e$1, iC as o$3, j_ as s, am as R, u as e$2, iD as e$3, hj as n$2, iE as t, iF as s$1, iG as e$4, iH as o$4, jv as E, iI as W, iK as A, iL as h$1, kj as l, iM as a, iN as E$1, iO as _$1, kk as e$5, kl as o$5, km as f$2, kn as a$1, iQ as d$1, ko as S, iR as x, iS as E$2, jz as v$1, jA as f$3, kp as h$2, iU as h$3 } from './_virtual_index-1ea2035a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function f(f){const w=new o,{vertex:h$1,fragment:b}=w;return v(h$1,f),w.include(r,f),w.attributes.add(O.POSITION,"vec3"),w.attributes.add(O.UV0,"vec2"),w.varyings.add("vpos","vec3"),f.hasMultipassTerrain&&w.varyings.add("depth","float"),h$1.uniforms.add(new e("textureCoordinateScaleFactor",(o=>r$1(o.texture)&&r$1(o.texture.descriptor.textureCoordinateScaleFactor)?o.texture.descriptor.textureCoordinateScaleFactor:i))),h$1.code.add(n`
    void main(void) {
      vpos = position;
      ${f.hasMultipassTerrain?"depth = (view * vec4(vpos, 1.0)).z;":""}
      vTexCoord = uv0 * textureCoordinateScaleFactor;
      gl_Position = transformPosition(proj, view, vpos);
    }
  `),w.include(u,f),w.include(n$1,f),b.uniforms.add([new f$1("tex",(e=>e.texture)),new o$1("opacity",(e=>e.opacity))]),w.varyings.add("vTexCoord","vec2"),f.output===h.Alpha?b.code.add(n`
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
class _ extends e$4{initializeProgram(e){return new o$4(e.rctx,_.shader.get().build(this.configuration),E)}_setPipelineState(e,r){const i=this.configuration,s=e===o$3.NONE,o=e===o$3.FrontFace;return W({blending:i.output!==h.Color&&i.output!==h.Alpha||!i.transparent?null:s?C:A(e),culling:h$1(i.cullFace),depthTest:{func:l(e)},depthWrite:s?i.writeDepth&&a:E$1(e),colorWrite:_$1,stencilWrite:i.hasOccludees?e$5:null,stencilTest:i.hasOccludees?r?o$5:f$2:null,polygonOffset:s||o?null:a$1(i.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._setPipelineState(this.configuration.transparencyPassType,!0),this._setPipelineState(this.configuration.transparencyPassType,!1)}getPipelineState(e,t){return t?this._occludeePipelineState:super.getPipelineState(e,t)}}_.shader=new t(w$1,(()=>import('./ImageMaterial.glsl-b456f5b5.js')));const C=s(R.ONE,R.ONE_MINUS_SRC_ALPHA);class w extends s$1{constructor(){super(...arguments),this.output=h.Color,this.cullFace=n$2.None,this.hasSlicePlane=!1,this.transparent=!1,this.enableOffset=!0,this.writeDepth=!0,this.hasOccludees=!1,this.transparencyPassType=o$3.NONE,this.hasMultipassTerrain=!1,this.cullAboveGround=!1;}}e$2([e$3({count:h.COUNT})],w.prototype,"output",void 0),e$2([e$3({count:n$2.COUNT})],w.prototype,"cullFace",void 0),e$2([e$3()],w.prototype,"hasSlicePlane",void 0),e$2([e$3()],w.prototype,"transparent",void 0),e$2([e$3()],w.prototype,"enableOffset",void 0),e$2([e$3()],w.prototype,"writeDepth",void 0),e$2([e$3()],w.prototype,"hasOccludees",void 0),e$2([e$3({count:o$3.COUNT})],w.prototype,"transparencyPassType",void 0),e$2([e$3()],w.prototype,"hasMultipassTerrain",void 0),e$2([e$3()],w.prototype,"cullAboveGround",void 0);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class p extends d$1{constructor(e){super(e,new d),this.supportsEdges=!0,this._configuration=new w;}getConfiguration(e,t){return this._configuration.output=e,this._configuration.cullFace=this.parameters.cullFace,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.enableOffset=t.camera.relativeElevation<S,this._configuration.hasMultipassTerrain=t.multipassTerrain.enabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration}intersect(e,t,r,a,s,i,n){x(e,t,a,s,i,void 0,n);}requiresSlot(t,r){if(r===h.Color||r===h.Alpha||r===h.Highlight){if(t===E$2.DRAPED_MATERIAL)return !0;if(r===h.Highlight)return t===E$2.OPAQUE_MATERIAL;return t===(this.parameters.transparent?this.parameters.writeDepth?E$2.TRANSPARENT_MATERIAL:E$2.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:E$2.OPAQUE_MATERIAL)}return !1}createGLMaterial(e){return new m(e)}createBufferWriter(){return new v$1(f$3)}}class m extends h$2{constructor(e){super({...e,...e.material.parameters});}_updateParameters(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(_,e)}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&(this._material.setParameters({hasOccludees:e.hasOccludees}),this._updateParameters(e));}beginSlot(t){return this._output!==h.Color&&this._output!==h.Alpha||this._updateOccludeeState(t),this._updateParameters(t)}}class d extends h$3{constructor(){super(...arguments),this.transparent=!1,this.writeDepth=!0,this.hasSlicePlane=!1,this.cullFace=n$2.None,this.hasOccludees=!1,this.opacity=1,this.textureId=null,this.initTextureTransparent=!0;}}

export { f, p };
