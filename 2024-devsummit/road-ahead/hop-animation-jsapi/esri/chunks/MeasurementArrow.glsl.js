// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../views/3d/webgl-engine/core/shaderLibrary/util/View.glsl ../views/3d/webgl-engine/core/shaderModules/Float4PassUniform ../views/3d/webgl-engine/core/shaderModules/FloatPassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/lib/VertexAttribute".split(" "),function(h,m,d,e,f,n,c){function k(p){const b=new n.ShaderBuilder,{vertex:g,fragment:l}=b;m.addProjViewLocalOrigin(g,p);g.uniforms.add(new e.FloatPassUniform("width",
a=>a.width));b.attributes.add(c.VertexAttribute.POSITION,"vec3");b.attributes.add(c.VertexAttribute.NORMAL,"vec3");b.attributes.add(c.VertexAttribute.UV0,"vec2");b.attributes.add(c.VertexAttribute.LENGTH,"float");b.varyings.add("vtc","vec2");b.varyings.add("vlength","float");b.varyings.add("vradius","float");g.code.add(f.glsl`void main(void) {
vec3 bitangent = normal;
vtc = uv0;
vlength = length;
vradius = 0.5 * width;
vec4 pos = view * vec4(position + vradius * bitangent * uv0.y, 1.0);
gl_Position = proj * pos;
}`);l.uniforms.add(new e.FloatPassUniform("outlineSize",a=>a.outlineSize),new d.Float4PassUniform("outlineColor",a=>a.outlineColor),new e.FloatPassUniform("stripeLength",a=>a.stripeLength),new d.Float4PassUniform("stripeEvenColor",a=>a.stripeEvenColor),new d.Float4PassUniform("stripeOddColor",a=>a.stripeOddColor));l.code.add(f.glsl`
    const float INV_SQRT2 = ${f.glsl.float(1/Math.sqrt(2))};

    vec4 arrowColor(vec2 tc, float len) {
      float d = INV_SQRT2 * (tc.x - abs(tc.y));
      d = min(d, INV_SQRT2 * (len - tc.x - abs(tc.y)));
      d = min(d, 1.0 - abs(tc.y));

      if (d < 0.0) {
        return vec4(0.0);
      } else if (d < outlineSize) {
        return outlineColor;
      } else {
        return fract(0.5 / stripeLength * tc.x * vradius) >= 0.5 ? stripeOddColor : stripeEvenColor;
      }
    }

    void main(void) {
      vec2 ntc = vec2(vtc.x / vradius, vtc.y);
      vec4 color = arrowColor(ntc, vlength / vradius);
      if (color.a == 0.0) {
        discard;
      }
      fragColor = color;
    }
  `);return b}const q=Object.freeze(Object.defineProperty({__proto__:null,build:k},Symbol.toStringTag,{value:"Module"}));h.MeasurementArrow=q;h.build=k});