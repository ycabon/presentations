// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../chunks/tslib.es6 ../../../../../../core/libs/gl-matrix-2/math/mat3 ../../../../../../core/libs/gl-matrix-2/factories/mat3f64 ../../../../../../core/libs/gl-matrix-2/factories/mat4f64 ../../../../../../chunks/vec32 ../../../../../../core/libs/gl-matrix-2/factories/vec3f64 ../ShaderOutput ../util/DoublePrecision.glsl ../util/View.glsl ../../shaderModules/Float3DrawUniform ../../shaderModules/interfaces ../../shaderModules/Matrix3PassUniform ../../shaderModules/Matrix4PassUniform ../../shaderTechnique/ShaderTechniqueConfiguration ../../../lib/VertexAttribute ../../../../../webgl/doublePrecisionUtils".split(" "),
function(h,p,w,x,q,r,y,z,A,B,t,d,C,D,m,k,u){class n extends m.ShaderTechniqueConfiguration{constructor(){super(...arguments);this.hasModelTransformation=this.instancedDoublePrecision=!1}}p.__decorate([m.parameter()],n.prototype,"instancedDoublePrecision",void 0);p.__decorate([m.parameter()],n.prototype,"hasModelTransformation",void 0);class E extends d.NoParameters{constructor(){super(...arguments);this.modelTransformation=null}}const v=x.create(),l=y.create();h.InstancedDoubleConfiguration=n;h.InstancedDoublePassParameters=
E;h.InstancedDoublePrecision=function(a,e){const f=e.hasModelTransformation,b=e.instancedDoublePrecision;f&&(a.vertex.uniforms.add(new D.Matrix4PassUniform("model",g=>g.modelTransformation??q.IDENTITY)),a.vertex.uniforms.add(new C.Matrix3PassUniform("normalLocalOriginFromModel",g=>{w.normalFromMat4(v,g.modelTransformation??q.IDENTITY);return v})));e.instanced&&b&&(a.attributes.add(k.VertexAttribute.INSTANCEMODELORIGINHI,"vec3"),a.attributes.add(k.VertexAttribute.INSTANCEMODELORIGINLO,"vec3"),a.attributes.add(k.VertexAttribute.INSTANCEMODEL,
"mat3"),a.attributes.add(k.VertexAttribute.INSTANCEMODELNORMAL,"mat3"));a=a.vertex;b&&(a.include(A.DoublePrecision,e),a.uniforms.add(new t.Float3DrawUniform("viewOriginHi",(g,c)=>u.encodeDoubleHi(r.set(l,c.camera.viewInverseTransposeMatrix[3],c.camera.viewInverseTransposeMatrix[7],c.camera.viewInverseTransposeMatrix[11]),l)),new t.Float3DrawUniform("viewOriginLo",(g,c)=>u.encodeDoubleLo(r.set(l,c.camera.viewInverseTransposeMatrix[3],c.camera.viewInverseTransposeMatrix[7],c.camera.viewInverseTransposeMatrix[11]),
l))));a.code.add(d.glsl`
    vec3 getVertexInLocalOriginSpace() {
      return ${f?b?"(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz":"(model * localPosition()).xyz":b?"instanceModel * localPosition().xyz":"localPosition().xyz"};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${b?d.glsl`
          // Negated inputs are intentionally the first two arguments. The other way around the obfuscation in dpAdd() stopped
          // working for macOS 14+ and iOS 17+.
          // Issue: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/56280
          vec3 originDelta = dpAdd(-instanceModelOriginHi, -instanceModelOriginLo, viewOriginHi, viewOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `);a.code.add(d.glsl`
    vec3 dpNormal(vec4 _normal) {
      return normalize(${f?b?"normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz)":"normalLocalOriginFromModel * _normal.xyz":b?"instanceModelNormal * _normal.xyz":"_normal.xyz"});
    }
    `);e.output===z.ShaderOutput.Normal&&(B.addViewNormal(a),a.code.add(d.glsl`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${f?b?"vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)":"vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)":b?"vec4(instanceModelNormal * _normal.xyz, 1.0)":"_normal"}).xyz);
    }
    `));e.hasVertexTangents&&a.code.add(d.glsl`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${f?b?"return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);":"return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);":b?"return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}
    }`)};Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});