// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../core/libs/gl-matrix-2/math/mat4 ../core/libs/gl-matrix-2/factories/mat4f64 ../core/libs/gl-matrix-2/factories/vec3f64 ../views/3d/environment/atmosphereUtils ../views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/ReadDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/Gamma.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/MainLighting.glsl ../views/3d/webgl-engine/core/shaderModules/Float2PassUniform ../views/3d/webgl-engine/core/shaderModules/Float3PassUniform ../views/3d/webgl-engine/core/shaderModules/Float4PassUniform ../views/3d/webgl-engine/core/shaderModules/FloatPassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/Matrix4PassUniform ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform ../views/3d/webgl-engine/lib/VertexAttribute".split(" "),
function(h,x,k,l,p,q,y,z,A,r,t,B,m,a,u,C,D,E){function v(c){const e=new C.ShaderBuilder;e.attributes.add(E.VertexAttribute.POSITION,"vec2");e.include(q.TextureCoordinateAttribute,{textureCoordinateType:q.TextureCoordinateAttributeType.Default});e.varyings.add("worldRay","vec3");e.varyings.add("eyeDir","vec3");const {vertex:w,fragment:d}=e;w.uniforms.add(new u.Matrix4PassUniform("inverseProjectionMatrix",(b,f)=>f.camera.inverseProjectionMatrix),new u.Matrix4PassUniform("inverseViewMatrix",(b,f)=>x.invertOrIdentity(F,
f.camera.viewMatrix)));w.code.add(a.glsl`void main(void) {
vec3 posViewNear = (inverseProjectionMatrix * vec4(position, -1, 1)).xyz;
eyeDir = posViewNear;
worldRay = (inverseViewMatrix * vec4(posViewNear, 0)).xyz;
forwardTextureCoordinates();
gl_Position = vec4(position, 1, 1);
}`);d.uniforms.add(new t.Float3PassUniform("backgroundColor",b=>b.backgroundColor),new r.Float2PassUniform("radii",b=>b.radii),new t.Float3PassUniform("cameraPosition",(b,f)=>f.camera.eye),new B.Float4PassUniform("heightParameters",b=>b.heightParameters),new m.FloatPassUniform("innerFadeDistance",b=>b.innerFadeDistance),new m.FloatPassUniform("altitudeFade",b=>b.altitudeFade),new D.Texture2DPassUniform("depthTexture",b=>b.depthTexture),new m.FloatPassUniform("hazeStrength",b=>b.hazeStrength));d.constants.add("betaRayleigh",
"vec3",g);d.constants.add("betaCombined","vec3",G);d.constants.add("betaMie","float",3.996E-6);d.constants.add("scaleHeight","float",p.rayLeighScaleHeight*p.atmosphereHeight);A.addMainLightDirection(d);e.include(z.Gamma);c.haze&&(d.include(y.ReadLinearDepth),d.uniforms.add(new r.Float2PassUniform("nearFar",(b,f)=>f.camera.nearFar)));d.code.add(a.glsl`vec2 sphereIntersect(vec3 start, vec3 dir, float radius, bool planet) {
float a = dot(dir, dir);
float b = 2.0 * dot(dir, start);
float c = planet ? heightParameters[1] - radius * radius : heightParameters[2];
float d = (b * b) - 4.0 * a * c;
if (d < 0.0) {
return vec2(1e5, -1e5);
}
return vec2((-b - sqrt(d)) / (2.0 * a), (-b + sqrt(d)) / (2.0 * a));
}`);d.code.add(a.glsl`float chapmanApproximation(float X, float h, float cosZenith) {
float c = sqrt(X + h);
float cExpH = c * exp(-h);
if (cosZenith >= 0.0) {
return cExpH / (c * cosZenith + 1.0);
} else {
float x0 = sqrt(1.0 - cosZenith * cosZenith) * (X + h);
float c0 = sqrt(x0);
return 2.0 * c0 * exp(X - x0) - cExpH / (1.0 - c * cosZenith);
}
}`);d.code.add(a.glsl`float getOpticalDepth(vec3 position, vec3 dir, float h) {
return scaleHeight * chapmanApproximation(radii[0] / scaleHeight, h, dot(normalize(position), dir));
}`);d.code.add(a.glsl`
    const int STEPS = 6;

    vec3 getAtmosphereColour(vec3 cameraPos, vec3 rayDir, vec3 lightDir, float terrainDepth) {
      float reducedPlanetRadius = radii[0] - 20000.0;
      vec2 rayPlanetIntersect = sphereIntersect(cameraPos, rayDir, reducedPlanetRadius, true);
      vec2 rayAtmosphereIntersect = sphereIntersect(cameraPos, rayDir, radii[1], false);
      bool hitsAtmosphere = (rayAtmosphereIntersect.x <= rayAtmosphereIntersect.y) && rayAtmosphereIntersect.x > 0.0;
      bool insideAtmosphere = heightParameters[0] < radii[1];

      if (!(hitsAtmosphere || insideAtmosphere)) {
        return vec3(0);
      }

      bool hitsPlanet = (rayPlanetIntersect.x <= rayPlanetIntersect.y) && rayPlanetIntersect.x > 0.0;

      float start = insideAtmosphere ? 0.0 : rayAtmosphereIntersect.x;

      if (heightParameters[0] < reducedPlanetRadius) {
        // Long light rays from the night side of the planet lead to numerical instability
        // Do not render the atmosphere in such cases
        if (dot(rayDir, normalize(cameraPos)) < -0.025) {
          return vec3(0);
        }
        start = rayPlanetIntersect.y;
      }

      float end = hitsPlanet ? rayPlanetIntersect.x : rayAtmosphereIntersect.y;
      float maxEnd = end;

      ${c.haze?a.glsl`if (terrainDepth != -1.0) { end = terrainDepth; }`:""}

      vec3 samplePoint = cameraPos + rayDir * end;
      float multiplier = hitsPlanet ? -1.0 : 1.0;

      vec3 scattering = vec3(0);
      float scaleFract = (length(samplePoint) - radii[0]) / scaleHeight;
      float lastOpticalDepth = getOpticalDepth(samplePoint, rayDir, scaleFract);
      float stepSize = (end - start) / float(STEPS);
      for (int i = 0; i < STEPS; i++) {
        samplePoint -= stepSize * rayDir;
        scaleFract = (length(samplePoint) - radii[0]) / scaleHeight;
        float opticalDepth = multiplier * getOpticalDepth(samplePoint, rayDir * multiplier, scaleFract);

        if (i > 0) {
          scattering *= ${c.haze?"":a.glsl`mix(2.5, 1.0, clamp((length(cameraPos) - radii[0]) / 50e3, 0.0, 1.0)) * `} exp(-(mix(betaCombined, betaRayleigh, 0.5) + betaMie) * max(0.0, (opticalDepth - lastOpticalDepth)));
        }

        if (dot(normalize(samplePoint), lightDir) > -0.3) {

          float scale = exp(-scaleFract);
          float lightDepth = getOpticalDepth(samplePoint, lightDir, scaleFract);

          scattering += scale * exp(-(betaCombined + betaMie) * lightDepth);
          ${c.haze?"":a.glsl`scattering += scale * exp(-(0.25 * betaCombined ) * lightDepth);`}
        }

        lastOpticalDepth = opticalDepth;

      }

      float mu = dot(rayDir, lightDir);
      float mumu = 1.0 + mu * mu;

      float phaseRayleigh = 0.0596831 * mumu;

      ${c.haze?a.glsl`return 3.0 * scattering * stepSize * phaseRayleigh * betaRayleigh;`:a.glsl`
            const float g = 0.8;
            const float gg = g * g;
            float phaseMie = end == maxEnd ? 0.1193662 * ((1.0 - gg) * mumu) / (pow(1.0 + gg - 2.0 * mu * g, 1.5) * (2.0 + gg)) : 0.0;
            phaseMie = clamp(phaseMie, 0.0, 128.0);
            return 3.0 * scattering * stepSize * (phaseRayleigh * betaRayleigh + 0.025 * phaseMie * betaMie);`}
    }

    ${c.haze?"":a.glsl`
            vec4 applyUndergroundAtmosphere(vec3 rayDir, vec3 lightDirection, vec4 fragColor) {
              vec2 rayPlanetIntersect = sphereIntersect(cameraPosition, rayDir, radii[0], true);
              if (!((rayPlanetIntersect.x <= rayPlanetIntersect.y) && rayPlanetIntersect.y > 0.0)) {
                return fragColor;
              }

              float lightAngle = dot(lightDirection, normalize(cameraPosition + rayDir * max(0.0, rayPlanetIntersect.x)));
              vec4 surfaceColor = vec4(vec3(max(0.0, (smoothstep(-1.0, 0.8, 2.0 * lightAngle)))), 1.0 - altitudeFade);
              float relDist = (rayPlanetIntersect.y - max(0.0, rayPlanetIntersect.x)) / innerFadeDistance;
              if (relDist > 1.0) {
                return surfaceColor;
              }

              return mix(fragColor, surfaceColor, smoothstep(0.0, 1.0, relDist * relDist));
            }

            float getGlow(float dist, float radius, float intensity) {
              return pow(radius / max(dist, 1e-6), intensity);
            }

            vec3 getSun(vec3 cameraPos, vec3 rayDir, vec3 lightDir){

              // Get the amount of atmosphere between camera and the Sun along the view ray
              float scaleFract = (length(cameraPos) - radii[0]) / scaleHeight;
              float sunOpticalDepth = getOpticalDepth(cameraPos, rayDir, max(scaleFract, 0.0));

              // Find the amount of light that remains after travelling through the atmosphere from the Sun along the view ray
              // This will make the colour of the Sun reddish on the horizon and white from space
              vec3 sunTransmittance = exp(-(mix(betaCombined, betaRayleigh, 0.5)) * max(0.0, sunOpticalDepth));

              // Alignment of light direction and view ray
              float mu = clamp(dot(rayDir, lightDir), 0.0, 1.0);
              // Draw the Sun as a bright disc
              float sunDisc = 256.0 * smoothstep(0.0, 128.0, clamp(getGlow(1.0 - mu, 3e-5, 3.0), 0.0, 128.0));

              return normalize(sunTransmittance) * sunDisc;
            }`}

    ${c.haze&&c.reduced?a.glsl`
        float getDepth(vec2 uv){
          return linearDepthFromTexture(depthTexture, uv, nearFar);
        }

        float textureBilinear(vec2 uv) {
          // Information about the high-resolution depth texture
          vec2 depthTextureSize = vec2(textureSize(depthTexture, 0));
          vec2 texelSize = 1.0 / depthTextureSize;

          // The uv inside the upper right pixel - of the tile of 4 pixels -
          // that the atmosphere uv maps to in the depth texture
          vec2 depthUV = (uv * depthTextureSize) - vec2(0.5);

          // Relative distance of the uv coordinates inside the depth texture pixel
          vec2 f = fract(depthUV);

          // Snap to the centre of the depth texture pixel
          vec2 snapUV = (floor(depthUV) + vec2(0.5)) / depthTextureSize;

          // Read the depth texture pixel and its three neighbours
          float d0 = getDepth(snapUV);
          float d1 = getDepth(snapUV + vec2(texelSize.x, 0.0));
          float d2 = getDepth(snapUV + vec2(0.0, texelSize.y));
          float d3 = getDepth(snapUV + texelSize);

          // Return the bilinearly interpolated value of the neighbouring pixels based
          // on the sample position in the depth texture pixel
          return mix(mix(d0, d1, f.x), mix(d2, d3, f.x), f.y);
        }
        `:""}

    vec3 tonemapACES(vec3 x) {
      return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0);
    }

    void main() {
      vec3 rayDir = normalize(worldRay);
      float terrainDepth = -1.0;
      ${c.haze?a.glsl`
          vec4 depthSample = texture(depthTexture, vuv0).rgba;
          if (depthSample != vec4(0)) {
            vec3 cameraSpaceRay = normalize(eyeDir);
            cameraSpaceRay /= cameraSpaceRay.z;

              ${c.reduced?a.glsl`cameraSpaceRay *= -textureBilinear(vuv0);`:a.glsl`cameraSpaceRay *= -linearDepthFromTexture(depthTexture, vuv0, nearFar);`}

            terrainDepth = max(0.0, length(cameraSpaceRay));
          }else{
            discard;
          }
          `:a.glsl`${c.reduced?"":a.glsl`
                float depthSample = texture(depthTexture, vuv0).r;
                if (depthSample != 1.0) {
                  fragColor = vec4(0);
                  return;
                }`}`}

      ${c.haze?a.glsl`
            vec3 col = vec3(0);
            float fadeOut = smoothstep(-10000.0, -15000.0, heightParameters[0] - radii[0]);
            if(depthSample != vec4(0)){
              col = (1.0 - fadeOut) * hazeStrength * getAtmosphereColour(cameraPosition, rayDir, mainLightDirection, terrainDepth);
            }
            // Alpha is ignored for haze blending
            float alpha = 1.0;
            `:a.glsl`
            vec3 col = linearizeGamma(backgroundColor);
            col += getAtmosphereColour(cameraPosition, rayDir, mainLightDirection, terrainDepth);
            col += getSun(cameraPosition, rayDir, mainLightDirection);
            float alpha = smoothstep(0.0, mix(0.15, 0.01, heightParameters[3]), length(col));`}

      col = tonemapACES(col);
      fragColor = delinearizeGamma(vec4(col, alpha));
      ${c.haze?"":a.glsl`fragColor = applyUndergroundAtmosphere(rayDir, mainLightDirection, fragColor);`}
    }
  `);return e}const g=l.fromValues(parseFloat(Number(5.802E-6).toFixed(6)),parseFloat(Number(1.3558E-5).toFixed(6)),parseFloat(Number(3.31E-5).toFixed(6))),n=l.fromValues(3*parseFloat(Number(6.5E-7).toFixed(6)),3*parseFloat(Number(1.881E-6).toFixed(6)),3*parseFloat(Number(8.5E-8).toFixed(6))),G=l.fromValues(parseFloat(Number(g[0]+n[0]).toFixed(6)),parseFloat(Number(g[1]+n[1]).toFixed(6)),parseFloat(Number(g[2]+n[2]).toFixed(6))),F=k.create();k=Object.freeze(Object.defineProperty({__proto__:null,betaRayleigh:g,
build:v},Symbol.toStringTag,{value:"Module"}));h.ChapmanAtmosphere=k;h.betaRayleigh=g;h.build=v});