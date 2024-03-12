// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../output/BlendOptions","../../shaderModules/interfaces"],function(e,b,c){e.BlendModes=function(d,a){a=a.blendMode;if(a!==b.LayerBlendMode.Normal){a===b.LayerBlendMode.Reflect&&d.code.add(c.glsl`float reflectBlend(in float cb, in float cl) {
return (cl == 1.0) ? cl : min(cb * cb / (1.0 - cl), 1.0);
}`);a!==b.LayerBlendMode.ColorDodge&&a!==b.LayerBlendMode.VividLight||d.code.add(c.glsl`float colorDodge(in float cb, in float cl) {
return (cb == 0.0) ? 0.0 : (cl == 1.0) ? 1.0 : min(1.0, cb / (1.0 - cl));
}`);a!==b.LayerBlendMode.ColorBurn&&a!==b.LayerBlendMode.VividLight||d.code.add(c.glsl`float colorBurn(in float cb, in float cl) {
return (cb == 1.0) ? 1.0 : (cl == 0.0) ? 0.0 : 1.0 - min(1.0, (1.0 - cb) / cl);
}`);a===b.LayerBlendMode.Overlay&&d.code.add(c.glsl`float overlay(in float cb, in float cl) {
return (1.0 - step(0.5, cl)) * (1.0 - 2.0 * (1.0 - cl ) * (1.0 - cb)) + step(0.5, cl) * (2.0 * cl * cb);
}`);a===b.LayerBlendMode.HardLight&&d.code.add(c.glsl`float hardLight(in float cb, in float cl) {
return (1.0 - step(0.5, cl)) * (2.0 * cl * cb) + step(0.5, cl) * (1.0 - 2.0 * (1.0 - cl) * (1.0 - cb));
}`);a===b.LayerBlendMode.SoftLight&&d.code.add(c.glsl`float softLight(in float cb, in float cl) {
if (cl <= 0.5) {
return cb - (1.0 - 2.0 * cl) * cb * (1.0 - cb);
}
if (cb <= 0.25) {
return cb + (2.0 * cl - 1.0) * cb * ((16.0 * cb - 12.0) * cb + 3.0);
}
return cb + (2.0 * cl - 1.0) * (sqrt(cb) - cb);
}`);a===b.LayerBlendMode.VividLight&&d.code.add(c.glsl`float vividLight(in float cb, in float cl) {
return (1.0 - step(0.5, cl)) * colorBurn(cb, 2.0 * cl) + step(0.5, cl) * colorDodge(cb, (2.0 * (cl - 0.5)));
}`);if(a===b.LayerBlendMode.Hue||a===b.LayerBlendMode.Saturation||a===b.LayerBlendMode.Color||a===b.LayerBlendMode.Luminosity)d.code.add(c.glsl`float minv3(in vec3 c) {
return min(min(c.r, c.g), c.b);
}
float maxv3(in vec3 c) {
return max(max(c.r, c.g), c.b);
}
float lumv3(in vec3 c) {
return dot(c, vec3(0.3, 0.59, 0.11));
}
vec3 clipColor(vec3 color) {
float lum = lumv3(color);
float mincol = minv3(color);
float maxcol = maxv3(color);
if (mincol < 0.0) {
color = lum + ((color - lum) * lum) / (lum - mincol);
}
if (maxcol > 1.0) {
color = lum + ((color - lum) * (1.0 - lum)) / (maxcol - lum);
}
return color;
}
vec3 setLum(vec3 cbase, vec3 clum) {
return clipColor(cbase + vec3(lumv3(clum) - lumv3(cbase)));
}`),a!==b.LayerBlendMode.Hue&&a!==b.LayerBlendMode.Saturation||d.code.add(c.glsl`float satv3(vec3 c) {
return maxv3(c) - minv3(c);
}
vec3 setLumSat(vec3 cbase, vec3 csat, vec3 clum)
{
float minbase = minv3(cbase);
float sbase = satv3(cbase);
float ssat = satv3(csat);
return setLum(sbase > 0.0 ? (cbase - minbase) * ssat / sbase : vec3(0.0), clum);
}`);d.code.add(c.glsl`
    vec4 applyBlendMode(vec3 cl, float ol, vec3 cb, float ob) {
      ${a===b.LayerBlendMode.Multiply?c.glsl`return vec4(cl * ol * cb * ob + cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), mix(ob, 1.0, ol));`:a===b.LayerBlendMode.Average?c.glsl`return vec4((cb + cl) * 0.5 * ol * ob + cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), mix(ob, 1.0, ol));`:a===b.LayerBlendMode.Lighten?c.glsl`return vec4(max(cb, cl) * ol * ob + cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), mix(ob, 1.0, ol));`:a===b.LayerBlendMode.Darken?c.glsl`return vec4(min(cl, cb) * ol * ob + cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), mix(ob, 1.0, ol));`:
a===b.LayerBlendMode.Lighter?c.glsl`return vec4(cl * ol + cb * ob, ol + ob);`:a===b.LayerBlendMode.Plus?c.glsl`return clamp(vec4(cl.rgb + cb.rgb, ol + ob), 0.0, 1.0);`:a===b.LayerBlendMode.Minus?c.glsl`return vec4(clamp(vec3(cb.rgb - cl.rgb), 0.0, 1.0), ob * ol);`:a===b.LayerBlendMode.Screen?c.glsl`return vec4((cl + cb - cl * cb) * ol * ob + cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), mix(ob, 1.0, ol));`:a===b.LayerBlendMode.Difference?c.glsl`return vec4(abs(cb - cl) * ol * ob + cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), mix(ob, 1.0, ol));`:
a===b.LayerBlendMode.Invert?c.glsl`return vec4((1.0 - cb) * ol * ob + cb * ob * (1.0 - ol), ob);`:a===b.LayerBlendMode.DestinationOver?c.glsl`return vec4(cl * ol * (1.0 - ob) + cb * ob, ol + ob - ol * ob);`:a===b.LayerBlendMode.DestinationAtop?c.glsl`return vec4(cl * ol * (1.0 - ob) + cb * ob * ol, ol);`:a===b.LayerBlendMode.DestinationOut?c.glsl`return vec4(cb * ob * (1.0 - ol), ob * (1.0 - ol));`:a===b.LayerBlendMode.SourceAtop?c.glsl`return vec4(cl * ol * ob + cb * ob * (1.0 - ol), ob);`:a===b.LayerBlendMode.SourceOut?
c.glsl`return vec4(cl * ol * (1.0 - ob), ol * (1.0 - ob));`:a===b.LayerBlendMode.Xor?c.glsl`return vec4(cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), ol * (1.0 - ob) + ob * (1.0 - ol));`:a===b.LayerBlendMode.DestinationIn?c.glsl`return vec4(cb * ob * ol, ol * ob);`:a===b.LayerBlendMode.SourceIn?c.glsl`return vec4(cl * ol * ob, ol * ob);`:a===b.LayerBlendMode.Hue?c.glsl`
          vec3 f = setLumSat(cl, cb, cb);
          return vec4(f * ol * ob + cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), mix(ob, 1.0, ol));`:a===b.LayerBlendMode.Saturation?c.glsl`
          vec3 f = setLumSat(cb, cl, cb);
          return vec4(f * ol * ob + cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), mix(ob, 1.0, ol));`:a===b.LayerBlendMode.Color?c.glsl`
          vec3 f = setLum(cl, cb);
          return vec4(f * ol * ob + cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), mix(ob, 1.0, ol));`:a===b.LayerBlendMode.Luminosity?c.glsl`
          vec3 f = setLum(cb, cl);
          return vec4(f * ol * ob + cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), mix(ob, 1.0, ol));`:a===b.LayerBlendMode.Exclusion?c.glsl`
          vec3 f = cl + cb - 2.0 * cl * cb;
          return vec4(f * ol * ob + cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), mix(ob, 1.0, ol));`:a===b.LayerBlendMode.Reflect?c.glsl`
          vec3 f = vec3(reflectBlend(cb.r, cl.r), reflectBlend(cb.g, cl.g), reflectBlend(cb.b, cl.b));
          return vec4(f * ol * ob + cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), mix(ob, 1.0, ol));`:a===b.LayerBlendMode.ColorDodge?c.glsl`
          vec3 f = vec3(colorDodge(cb.r, cl.r), colorDodge(cb.g, cl.g), colorDodge(cb.b, cl.b));
          return vec4(f * ol * ob + cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), mix(ob, 1.0, ol));`:a===b.LayerBlendMode.ColorBurn?c.glsl`
          vec3 f = vec3(colorBurn(cb.r, cl.r), colorBurn(cb.g, cl.g), colorBurn(cb.b, cl.b));
          return vec4(f * ol * ob + cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), mix(ob, 1.0, ol));`:a===b.LayerBlendMode.Overlay?c.glsl`
          vec3 f = vec3(overlay(cb.r, cl.r), overlay(cb.g, cl.g), overlay(cb.b, cl.b));
          return vec4(f * ol * ob + cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), mix(ob, 1.0, ol));`:a===b.LayerBlendMode.SoftLight?c.glsl`
          vec3 f = vec3(softLight(cb.r, cl.r), softLight(cb.g, cl.g), softLight(cb.b, cl.b));
          return vec4(f * ol * ob + cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), mix(ob, 1.0, ol));`:a===b.LayerBlendMode.HardLight?c.glsl`
          vec3 f = vec3(hardLight(cb.r, cl.r), hardLight(cb.g, cl.g), hardLight(cb.b, cl.b));
          return vec4(f * ol * ob + cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), mix(ob, 1.0, ol));`:a===b.LayerBlendMode.VividLight?c.glsl`
          vec3 f = vec3(vividLight(cb.r, cl.r), vividLight(cb.g, cl.g), vividLight(cb.b, cl.b));
          return vec4(f * ol * ob + cl * ol * (1.0 - ob) + cb * ob * (1.0 - ol), mix(ob, 1.0, ol));`:c.glsl``}
    }
  `)}};Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});