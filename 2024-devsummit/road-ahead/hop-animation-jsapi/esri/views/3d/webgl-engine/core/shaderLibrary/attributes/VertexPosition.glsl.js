// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../core/libs/gl-matrix-2/factories/mat3f64 ../../../../../../core/libs/gl-matrix-2/factories/mat4f64 ../../../../../../core/libs/gl-matrix-2/factories/vec3f64 ./PositionAttribute.glsl ../util/DoublePrecision.glsl ../../shaderModules/Float3DrawUniform ../../shaderModules/Float3PassUniform ../../shaderModules/interfaces ../../shaderModules/Matrix3DrawUniform ../../shaderModules/Matrix3PassUniform ../../shaderModules/Matrix4PassUniform".split(" "),function(e,h,m,f,n,p,
k,g,b,q,r,t){class u extends b.NoParameters{constructor(){super(...arguments);this.transformWorldFromViewTH=f.create();this.transformWorldFromViewTL=f.create();this.transformViewFromCameraRelativeRS=h.create();this.transformProjFromView=m.create()}}class v extends b.NoParameters{constructor(){super(...arguments);this.transformWorldFromModelRS=h.create();this.transformWorldFromModelTH=f.create();this.transformWorldFromModelTL=f.create()}}e.VertexPosition=function(c,l){c.include(n.PositionAttribute);
const d=c.vertex;d.include(p.DoublePrecision,l);c.varyings.add("vPositionWorldCameraRelative","vec3");c.varyings.add("vPosition_view","vec3");d.uniforms.add(new g.Float3PassUniform("transformWorldFromViewTH",a=>a.transformWorldFromViewTH),new g.Float3PassUniform("transformWorldFromViewTL",a=>a.transformWorldFromViewTL),new r.Matrix3PassUniform("transformViewFromCameraRelativeRS",a=>a.transformViewFromCameraRelativeRS),new t.Matrix4PassUniform("transformProjFromView",a=>a.transformProjFromView),new q.Matrix3DrawUniform("transformWorldFromModelRS",
a=>a.transformWorldFromModelRS),new k.Float3DrawUniform("transformWorldFromModelTH",a=>a.transformWorldFromModelTH),new k.Float3DrawUniform("transformWorldFromModelTL",a=>a.transformWorldFromModelTL));d.code.add(b.glsl`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`);d.code.add(b.glsl`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${l.spherical?b.glsl`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:b.glsl`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `);c.fragment.uniforms.add(new g.Float3PassUniform("transformWorldFromViewTL",a=>a.transformWorldFromViewTL));d.code.add(b.glsl`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`);c.fragment.code.add(b.glsl`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)};e.VertexPositionDrawParameters=v;e.VertexPositionPassParameters=u;Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});