// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../shaderModules/Float3PassUniform ../../shaderModules/Float4sPassUniform ../../shaderModules/FloatsPassUniform ../../shaderModules/interfaces ../../shaderModules/Matrix3PassUniform ../../../lib/VertexAttribute ../../../materials/VisualVariablePassParameters".split(" "),function(g,e,h,k,c,l,m,f){g.VisualVariables=function(n,d){const {vertex:b,attributes:p}=n;d.hasVvInstancing&&(d.vvSize||d.vvColor)&&p.add(m.VertexAttribute.INSTANCEFEATUREATTRIBUTE,"vec4");d.vvSize?(b.uniforms.add(new e.Float3PassUniform("vvSizeMinSize",
a=>a.vvSize.minSize)),b.uniforms.add(new e.Float3PassUniform("vvSizeMaxSize",a=>a.vvSize.maxSize)),b.uniforms.add(new e.Float3PassUniform("vvSizeOffset",a=>a.vvSize.offset)),b.uniforms.add(new e.Float3PassUniform("vvSizeFactor",a=>a.vvSize.factor)),b.uniforms.add(new l.Matrix3PassUniform("vvSymbolRotationMatrix",a=>a.vvSymbolRotationMatrix)),b.uniforms.add(new e.Float3PassUniform("vvSymbolAnchor",a=>a.vvSymbolAnchor)),b.code.add(c.glsl`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),b.code.add(c.glsl`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${d.hasVvInstancing?c.glsl`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):b.code.add(c.glsl`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`);d.vvColor?(b.constants.add("vvColorNumber","int",f.vvColorNumber),b.uniforms.add(new k.FloatsPassUniform("vvColorValues",a=>a.vvColor.values,f.vvColorNumber),new h.Float4sPassUniform("vvColorColors",a=>a.vvColor.colors,f.vvColorNumber)),b.code.add(c.glsl`
      vec4 interpolateVVColor(float value) {
        if (value <= vvColorValues[0]) {
          return vvColorColors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (vvColorValues[i] >= value) {
            float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
            return mix(vvColorColors[i-1], vvColorColors[i], f);
          }
        }
        return vvColorColors[vvColorNumber - 1];
      }

      vec4 vvGetColor(vec4 featureAttribute) {
        return interpolateVVColor(featureAttribute.y);
      }

      ${d.hasVvInstancing?c.glsl`
            vec4 vvColor() {
              return vvGetColor(instanceFeatureAttribute);
            }`:"vec4 vvColor() { return vec4(1.0); }"}
    `)):b.code.add(c.glsl`vec4 vvColor() { return vec4(1.0); }`)};Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});