// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../core/libs/gl-matrix-2/factories/vec3f64 ../views/2d/engine/imagery/enums ../views/3d/webgl-engine/core/shaderLibrary/raster/Colormap.glsl ../views/3d/webgl-engine/core/shaderLibrary/raster/Common.glsl ../views/3d/webgl-engine/core/shaderLibrary/terrain/TileBackground.glsl ../views/3d/webgl-engine/core/shaderLibrary/terrain/TileComposite.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl ../views/3d/webgl-engine/core/shaderModules/BooleanPassUniform ../views/3d/webgl-engine/core/shaderModules/Float2PassUniform ../views/3d/webgl-engine/core/shaderModules/FloatPassUniform ../views/3d/webgl-engine/core/shaderModules/FloatsPassUniform ../views/3d/webgl-engine/core/shaderModules/IntegerPassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform".split(" "),
function(g,u,k,v,m,w,x,y,z,n,h,f,p,e,A,B){function q(b){const d=new A.ShaderBuilder;d.include(x.TileComposite);d.include(m.Common,b);d.include(v.Colormap,b);d.include(w.TileBackground,b);d.fragment.code.add(e.glsl`vec4 applyBackgroundBlend(vec4 layerColor) {
vec4 bgColor = getBackground(vuv);
return blendLayers(bgColor, layerColor, u_opacity);
}`);b.colorizerType===k.RasterColorizerType.Stretch?C(d,b):b.colorizerType===k.RasterColorizerType.Lut?d.fragment.code.add(e.glsl`void main() {
vec2 pixelLocation = getPixelLocation(uv);
if (isOutside(pixelLocation)) {
fragColor = applyBackgroundBlend(vec4(0.0, 0.0, 0.0, 0.0));
return;
}
vec4 currentPixel = getPixel(pixelLocation);
fragColor = applyBackgroundBlend(colormap(currentPixel, true));
}`):b.colorizerType===k.RasterColorizerType.Hillshade&&D(d,b);return d}function C(b,d){b.fragment.uniforms.add(new p.IntegerPassUniform("u_bandCount",c=>c.symbolizer.u_bandCount),new f.FloatsPassUniform("u_minCutOff",c=>c.symbolizer.u_minCutOff,3),new f.FloatsPassUniform("u_maxCutOff",c=>c.symbolizer.u_maxCutOff,3),new f.FloatsPassUniform("u_factor",c=>c.symbolizer.u_factor,3),new h.FloatPassUniform("u_minOutput",c=>c.symbolizer.u_minOutput),new h.FloatPassUniform("u_maxOutput",c=>c.symbolizer.u_maxOutput),
new z.BooleanPassUniform("u_useGamma",c=>c.symbolizer.u_useGamma),new f.FloatsPassUniform("u_gamma",c=>c.symbolizer.u_gamma,3),new f.FloatsPassUniform("u_gammaCorrection",c=>c.symbolizer.u_gammaCorrection,3),new h.FloatPassUniform("u_opacity",c=>c.common.u_opacity));b.fragment.code.add(e.glsl`float stretchOneValue(float val, float minCutOff, float maxCutOff, float minOutput, float maxOutput, float factor, bool useGamma, float gamma, float gammaCorrection) {
if (val >= maxCutOff) {
return maxOutput;
} else if (val <= minCutOff) {
return minOutput;
}
float stretchedVal;
if (useGamma) {
float tempf = 1.0;
float outRange = maxOutput - minOutput;
float relativeVal = (val - minCutOff) / (maxCutOff - minCutOff);
if (gamma > 1.0) {
tempf -= pow(1.0 / outRange, relativeVal * gammaCorrection);
}
stretchedVal = (tempf * outRange * pow(relativeVal, 1.0 / gamma) + minOutput) / 255.0;
} else {
stretchedVal = minOutput + (val - minCutOff) * factor;
}
return stretchedVal;
}`);const a=d.applyColormap?e.glsl`fragColor = applyBackgroundBlend(colormap(vec4(grayVal, grayVal, grayVal, currentPixel.a), !u_useGamma));`:e.glsl`fragColor = applyBackgroundBlend(vec4(grayVal, grayVal, grayVal, currentPixel.a));`;b.fragment.code.add(e.glsl`
      void main() {
        vec2 pixelLocation = getPixelLocation(uv);
        if (isOutside(pixelLocation)) {
          fragColor = applyBackgroundBlend(vec4(0.0, 0.0, 0.0, 0.0));
          return;
        }

        vec4 currentPixel = getPixel(pixelLocation);
        ${d.stretchType===k.RasterColorizerStretchType.Noop?e.glsl`
        fragColor = applyBackgroundBlend(currentPixel);`:e.glsl`
        if (currentPixel.a == 0.0) {
          fragColor = applyBackgroundBlend(vec4(0.0, 0.0, 0.0, 0.0));
          return;
        }
        if (u_bandCount == 1) {
          float grayVal = stretchOneValue(currentPixel.r, u_minCutOff[0], u_maxCutOff[0], u_minOutput, u_maxOutput, u_factor[0], u_useGamma, u_gamma[0], u_gammaCorrection[0]);
          ${a}
        } else {
          float redVal = stretchOneValue(currentPixel.r, u_minCutOff[0], u_maxCutOff[0], u_minOutput, u_maxOutput, u_factor[0], u_useGamma, u_gamma[0], u_gammaCorrection[0]);
          float greenVal = stretchOneValue(currentPixel.g, u_minCutOff[1], u_maxCutOff[1], u_minOutput, u_maxOutput, u_factor[1], u_useGamma, u_gamma[1], u_gammaCorrection[1]);
          float blueVal = stretchOneValue(currentPixel.b, u_minCutOff[2], u_maxCutOff[2], u_minOutput, u_maxOutput, u_factor[2], u_useGamma, u_gamma[2], u_gammaCorrection[2]);
          fragColor = applyBackgroundBlend(vec4(redVal, greenVal, blueVal, currentPixel.a));
        }`}
      }`)}function D(b,d){b=b.fragment;b.uniforms.add(new B.Texture2DPassUniform("u_image",a=>a.u_image),new p.IntegerPassUniform("u_hillshadeType",a=>a.symbolizer.u_hillshadeType),new f.FloatsPassUniform("u_sinZcosAs",a=>a.symbolizer.u_sinZcosAs,6),new f.FloatsPassUniform("u_sinZsinAs",a=>a.symbolizer.u_sinZsinAs,6),new f.FloatsPassUniform("u_cosZs",a=>a.symbolizer.u_cosZs,6),new f.FloatsPassUniform("u_weights",a=>a.symbolizer.u_weights,6),new n.Float2PassUniform("u_factor",a=>a.symbolizer.u_factor),
new h.FloatPassUniform("u_minValue",a=>a.symbolizer.u_minValue),new h.FloatPassUniform("u_maxValue",a=>a.symbolizer.u_maxValue),new n.Float2PassUniform("u_srcImageSize",a=>a.common.u_srcImageSize));b.include(y.ColorConversion);b.code.add(e.glsl`vec4 overlay(float val, float minValue, float maxValue, float hillshade, float alpha) {
val = clamp((val - minValue) / (maxValue - minValue), 0.0, 1.0);
vec4 color = colormap(vec4(val, val, val, 1.0), false);
vec3 hsv = rgb2hsv(color.rgb);
hsv.z = hillshade;
return vec4(hsv2rgb(hsv), 1.0) * alpha * color.a;
}`);b.code.add(e.glsl`float getNeighborHoodAlpha(float a, float b, float c, float d, float e, float f, float g, float h, float i){
if (a == 0.0 || a == 0.0 || a==0.0 || a == 0.0 || a == 0.0 || a==0.0 || a == 0.0 || a == 0.0 || a==0.0) {
return 0.0;
}  else {
return e;
}
}`);d=d.applyColormap?e.glsl`fragColor = applyBackgroundBlend(overlay(ve.r, u_minValue, u_maxValue, hillshade, alpha));`:e.glsl`hillshade *= alpha;
fragColor = applyBackgroundBlend(vec4(hillshade, hillshade, hillshade, alpha));`;b.code.add(e.glsl`
    void main() {
      vec2 pixelLocation = getPixelLocation(uv);
      if (isOutside(pixelLocation)) {
        fragColor = applyBackgroundBlend(vec4(0.0, 0.0, 0.0, 0.0));
        return;
      }

      vec4 currentPixel = getPixel(pixelLocation);
      if (currentPixel.a == 0.0) {
        fragColor = applyBackgroundBlend(vec4(0.0, 0.0, 0.0, 0.0));
        return;
      }

      //mirror edge pixels
      vec2 axy = vec2(-1.0, -1.0);
      vec2 bxy = vec2(0.0, -1.0);
      vec2 cxy = vec2(1.0, -1.0);
      vec2 dxy = vec2(-1.0, 0.0);
      vec2 fxy = vec2(1.0, 0.0);
      vec2 gxy = vec2(-1.0, 1.0);
      vec2 hxy = vec2(0.0, 1.0);
      vec2 ixy = vec2(1.0, 1.0);
      vec2 onePixel = 1.0 / u_srcImageSize;
      if (pixelLocation.s < onePixel.s) {
        axy[0] = 1.0;
        dxy[0] = 1.0;
        gxy[0] = 1.0;
      }
      if (pixelLocation.t < onePixel.t) {
        axy[1] = 1.0;
        bxy[1] = 1.0;
        cxy[1] = 1.0;
      }
      if (pixelLocation.s > 1.0 - onePixel.s) {
        cxy[0] = -1.0;
        fxy[0] = -1.0;
        ixy[0] = -1.0;
      }
      if (pixelLocation.t > 1.0 - onePixel.t) {
        gxy[1] = -1.0;
        hxy[1] = -1.0;
        ixy[1] = -1.0;
      }

      // calculate hillshade
      vec4 va = texture(u_image, pixelLocation + onePixel * axy);
      vec4 vb = texture(u_image, pixelLocation + onePixel * bxy);
      vec4 vc = texture(u_image, pixelLocation + onePixel * cxy);
      vec4 vd = texture(u_image, pixelLocation + onePixel * dxy);
      vec4 ve = texture(u_image, pixelLocation);
      vec4 vf = texture(u_image, pixelLocation + onePixel * fxy);
      vec4 vg = texture(u_image, pixelLocation + onePixel * gxy);
      vec4 vh = texture(u_image, pixelLocation + onePixel * hxy);
      vec4 vi = texture(u_image, pixelLocation + onePixel * ixy);

      // calculate the rate of z change along the x, y, and diagonal direction
      float dzx = (vc + 2.0 * vf + vi - va - 2.0 * vd - vg).r * u_factor.s;
      float dzy = (vg + 2.0 * vh + vi - va - 2.0 * vb - vc).r * u_factor.t;
      float dzd = sqrt(1.0 + dzx * dzx + dzy * dzy);
      float hillshade = 0.0;

      // traditional single light source
      if (u_hillshadeType == 0){
        float cosDelta = u_sinZsinAs[0] * dzy - u_sinZcosAs[0] * dzx;
        float z = (u_cosZs[0] + cosDelta) / dzd;
        if (z < 0.0)  z = 0.0;
        hillshade = z;
      } else {
        // multi-directional with 6 light sources
        for (int k = 0; k < 6; k++) {
        float cosDelta = u_sinZsinAs[k] * dzy - u_sinZcosAs[k] * dzx;
        float z = (u_cosZs[k] + cosDelta) / dzd;
        if (z < 0.0) z = 0.0;
        hillshade = hillshade + z * u_weights[k];
        if (k == 5) break;
        }
      }

      // set color
      float alpha = getNeighborHoodAlpha(va.a, vb.a, vc.a, vd.a, ve.a, vf.a, vg.a, vh.a, vi.a);
      alpha *= u_opacity;
      ${d}
    }
  `)}class l extends m.CommonPassParameters{constructor(b,d,a,c,E,F){super(b,c,E);this.colormap=d;this.symbolizer=a;this.u_colormap=F;this.backgroundColor=u.ZEROS;this.fboTexture=null;this.baseOpacity=1}}class r extends l{}class t extends l{}const G=Object.freeze(Object.defineProperty({__proto__:null,ColorizerHillshadeUniforms:t,ColorizerStretchUniforms:r,ColorizerUniforms:l,build:q},Symbol.toStringTag,{value:"Module"}));g.ColorizerHillshadeUniforms=t;g.ColorizerStretchUniforms=r;g.ColorizerUniforms=
l;g.RasterColorizer=G;g.build=q});