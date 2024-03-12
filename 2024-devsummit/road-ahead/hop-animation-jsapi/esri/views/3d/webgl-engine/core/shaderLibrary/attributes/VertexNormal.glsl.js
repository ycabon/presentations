// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../core/compilerUtils ../../../../../../core/libs/gl-matrix-2/factories/mat3f64 ../../../../../../core/libs/gl-matrix-2/factories/vec4f64 ./NormalAttribute.glsl ./VertexPosition.glsl ../../shaderModules/interfaces ../../shaderModules/Matrix3DrawUniform ../../shaderModules/Matrix3PassUniform".split(" "),function(e,k,h,l,b,f,c,m,n){class p extends f.VertexPositionPassParameters{constructor(){super(...arguments);this.transformNormalViewFromGlobal=h.create()}}class q extends f.VertexPositionDrawParameters{constructor(){super(...arguments);
this.transformNormalGlobalFromModel=h.create();this.toMapSpace=l.create()}}e.VertexNormal=function(a,d){switch(d.normalType){case b.NormalType.Attribute:case b.NormalType.Compressed:a.include(b.NormalAttribute,d);a.varyings.add("vNormalWorld","vec3");a.varyings.add("vNormalView","vec3");a.vertex.uniforms.add(new m.Matrix3DrawUniform("transformNormalGlobalFromModel",g=>g.transformNormalGlobalFromModel),new n.Matrix3PassUniform("transformNormalViewFromGlobal",g=>g.transformNormalViewFromGlobal));a.vertex.code.add(c.glsl`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case b.NormalType.Ground:a.include(f.VertexPosition,d);a.varyings.add("vNormalWorld","vec3");a.vertex.code.add(c.glsl`
        void forwardNormal() {
          vNormalWorld = ${d.spherical?c.glsl`normalize(vPositionWorldCameraRelative);`:c.glsl`vec3(0.0, 0.0, 1.0);`}
        }
        `);break;case b.NormalType.ScreenDerivative:a.vertex.code.add(c.glsl`void forwardNormal() {}`);break;default:k.neverReached(d.normalType);case b.NormalType.COUNT:}};e.VertexNormalDrawParameters=q;e.VertexNormalPassParameters=p;Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});