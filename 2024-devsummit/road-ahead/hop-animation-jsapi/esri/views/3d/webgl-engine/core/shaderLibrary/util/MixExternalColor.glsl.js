// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../../layers/support/symbolColorUtils","./ColorConversion.glsl","../../shaderModules/interfaces"],function(c,b,e,a){c.MixExternalColor=function(d){d.include(e.ColorConversion);d.code.add(a.glsl`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${a.glsl.int(b.ColorMixModeEnum.Multiply)}) {
        return allMixed;
      }
      if (mode == ${a.glsl.int(b.ColorMixModeEnum.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${a.glsl.int(b.ColorMixModeEnum.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${a.glsl.int(b.ColorMixModeEnum.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${a.glsl.int(b.ColorMixModeEnum.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});