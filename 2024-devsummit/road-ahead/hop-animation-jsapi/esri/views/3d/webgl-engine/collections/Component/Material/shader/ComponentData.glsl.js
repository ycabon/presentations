// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../../core/compilerUtils ../../../../../../../core/floatRGBA ../../../../../../../core/has ./DecodeSymbolColor.glsl ../../../../core/shaderLibrary/ShaderOutput ../../../../core/shaderLibrary/util/RgbaFloatEncoding.glsl ../../../../core/shaderModules/Float4DrawUniform ../../../../core/shaderModules/IntegerDrawUniform ../../../../core/shaderModules/interfaces ../../../../core/shaderModules/Texture2DDrawUniform ../../../../lib/VertexAttribute".split(" "),function(c,h,k,
l,m,n,p,q,r,e,t,u){function v(a,b){const {vertex:d,fragment:f}=a;d.include(p.RgbaFloatEncoding);d.uniforms.add(new t.Texture2DDrawUniform("componentColorTex",w=>w.componentParameters.texture.texture));a.attributes.add(u.VertexAttribute.COMPONENTINDEX,"float");a.varyings.add("vExternalColorMixMode","mediump float");a.varyings.add("vExternalColor","vec4");(b=b.output===n.ShaderOutput.ObjectAndLayerIdColor)&&a.varyings.add("vObjectAndLayerIdColor","vec4");a.include(m.DecodeSymbolColor);d.constants.add("elevationScale",
"float",2*g);d.constants.add("stride","float",l("enable-feature:objectAndLayerId-rendering")?3:2);d.code.add(e.glsl`vec2 getComponentTextureCoordinates(float componentIndex, float typeOffset) {
float index = componentIndex * stride + typeOffset;
float texSize = float(textureSize(componentColorTex, 0).x);
float coordX = mod(index, texSize);
float coordY = floor(index / texSize);
return vec2(coordX, coordY) + 0.5;
}`);d.code.add(e.glsl`
  vec4 _readComponentColor() {
    vec2 textureCoordinates = getComponentTextureCoordinates(componentIndex, 0.0);

    return texelFetch(componentColorTex, ivec2(textureCoordinates), 0);
   }

   float readElevationOffset() {
    vec2 textureCoordinates = getComponentTextureCoordinates(componentIndex, 1.0);

    vec4 encodedElevation = texelFetch(componentColorTex, ivec2(textureCoordinates), 0);
    return (rgba2float(encodedElevation) - 0.5) * elevationScale;
  }

  ${b?e.glsl`
          void forwardObjectAndLayerIdColor() {
            vec2 textureCoordinates = getComponentTextureCoordinates(componentIndex, 2.0);

            vObjectAndLayerIdColor = texelFetch(componentColorTex, ivec2(textureCoordinates), 0);
          }`:e.glsl`void forwardObjectAndLayerIdColor() {}`}

  vec4 forwardExternalColor(out bool castShadows) {
    vec4 componentColor = _readComponentColor() * 255.0;

    float shadowFlag = mod(componentColor.b * 255.0, 2.0);
    componentColor.b -= shadowFlag;
    castShadows = shadowFlag >= 1.0;

    int decodedColorMixMode;
    vExternalColor = decodeSymbolColor(componentColor, decodedColorMixMode) * 0.003921568627451; // = 1/255;
    vExternalColorMixMode = float(decodedColorMixMode) + 0.5; // add 0.5 to avoid interpolation artifacts

    return vExternalColor;
  }
`);f.code.add(e.glsl`
  void readExternalColor(out vec4 externalColor, out int externalColorMixMode) {
    externalColor = vExternalColor;
    externalColorMixMode = int(vExternalColorMixMode);
  }

  void outputObjectAndLayerIdColor() {
     ${b?e.glsl`fragColor = vObjectAndLayerIdColor;`:""}
  }
`)}function x(a){const {vertex:b,fragment:d}=a;b.uniforms.add(new q.Float4DrawUniform("externalColor",f=>f.componentParameters.externalColor));d.uniforms.add(new r.IntegerDrawUniform("externalColorMixMode",f=>f.componentParameters.externalColorMixMode));a.varyings.add("vExternalColor","vec4");b.code.add(e.glsl`float readElevationOffset() {
return 0.0;
}
vec4 forwardExternalColor(out bool castShadows) {
vExternalColor = externalColor;
castShadows = true;
return externalColor;
}`);d.code.add(e.glsl`void readExternalColor(out vec4 color, out int colorMixMode) {
color = vExternalColor;
colorMixMode = externalColorMixMode;
}`)}c.ComponentDataType=void 0;(function(a){a[a.Uniform=0]="Uniform";a[a.Varying=1]="Varying";a[a.COUNT=2]="COUNT"})(c.ComponentDataType||(c.ComponentDataType={}));const g=2**32/1E4;c.ComponentData=function(a,b){switch(b.componentData){case c.ComponentDataType.Varying:return v(a,b);case c.ComponentDataType.Uniform:return x(a);case c.ComponentDataType.COUNT:break;default:h.neverReached(b.componentData)}};c.encodeElevationOffset=function(a,b){k.packFloatRGBA(a/g*.5+.5,b)};c.maxElevationOffset=g;Object.defineProperty(c,
Symbol.toStringTag,{value:"Module"})});