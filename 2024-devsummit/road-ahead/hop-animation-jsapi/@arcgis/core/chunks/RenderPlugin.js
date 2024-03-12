/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{U as e,S as r}from"./StencilUtils.js";import{B as s}from"./BindType.js";import{g as t}from"./interfaces5.js";import{V as i}from"./VertexAttribute.js";import n from"../core/Accessor.js";class o extends e{constructor(e,r){super(e,"bool",s.Pass,((s,t,i)=>s.setUniform1b(e,r(t,i))))}}function a(e,r=!0){e.attributes.add(i.POSITION,"vec2"),r&&e.varyings.add("uv","vec2"),e.vertex.code.add(t`
    void main(void) {
      gl_Position = vec4(position, 0.0, 1.0);
      ${r?t`uv = position * 0.5 + vec2(0.5);`:""}
    }
  `)}const u={required:[]},c={required:[r.LinearDepth]},d={required:[r.CompositeColor]},m={required:[r.Highlight]},p={required:[r.Depth,r.Normal]};class l extends n{consumes(){return u}get usedMemory(){return 0}get isDecoration(){return!1}get running(){return!1}get materialReference(){return null}modify(e){}get numGeometries(){return 0}get hasOccludees(){return!1}queryRenderOccludedState(e){return!1}}class f extends l{}class g extends l{constructor(){super(...arguments),this.drapedPriority=0}}class v extends l{}class h extends l{}function x(e){return"prepareTechnique"in e}function q(e){return"prepareTechniques"in e}export{h as A,o as B,c as C,f as S,a,g as b,p as c,u as d,v as e,q as f,d as g,m as h,x as i};
