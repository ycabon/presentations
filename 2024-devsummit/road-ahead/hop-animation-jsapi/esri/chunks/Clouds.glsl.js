// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../core/mathUtils ../core/libs/gl-matrix-2/factories/mat3f64 ../core/libs/gl-matrix-2/math/vec2 ../core/libs/gl-matrix-2/factories/vec2f64 ../views/3d/environment/CloudsPresets ../views/3d/environment/CloudsTechniqueConfiguration ../views/3d/environment/NoiseTextureAtlasDimensions ../views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass.glsl ../views/3d/webgl-engine/core/shaderModules/Float2PassUniform ../views/3d/webgl-engine/core/shaderModules/FloatPassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/Matrix3PassUniform ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform".split(" "),
function(g,f,q,r,l,t,m,e,u,v,d,b,w,x,y){function n(h){const k=new x.ShaderBuilder;k.include(u.ScreenSpacePass,!1);const c=k.fragment;c.uniforms.add(new d.FloatPassUniform("cloudRadius",a=>a.cloudRadius),new d.FloatPassUniform("power",a=>f.lerp(35,120,a.absorption)),new d.FloatPassUniform("sigmaE",a=>1+a.absorption),new d.FloatPassUniform("density",a=>f.lerp(0,.3,a.density)),new d.FloatPassUniform("cloudSize",a=>f.lerp(0,.02,Math.max(.01,1-a.cloudSize))),new d.FloatPassUniform("detailSize",a=>f.lerp(0,
.2,Math.max(.01,1-a.detailSize))),new d.FloatPassUniform("smoothness",a=>f.lerp(0,.5,1-a.smoothness)),new d.FloatPassUniform("cloudHeight",a=>f.lerp(0,1500,a.cloudHeight)),new d.FloatPassUniform("coverage",a=>a.coverage),new w.Matrix3PassUniform("view",a=>a.viewMatrix),new y.Texture2DPassUniform("cloudShapeTexture",a=>null!=a.noiseTexture?a.noiseTexture.textureAtlas:null),new v.Float2PassUniform("cloudVariables",a=>r.set(z,a.coverage,a.absorption)));c.constants.add("halfCubeMapSize","float",.5*h.cubeMapSize);
c.code.add(b.glsl`
    const int STEPS = ${h.steps===m.RayMarchingSteps.SIXTEEN?b.glsl`16`:h.steps===m.RayMarchingSteps.HUNDRED?b.glsl`100`:b.glsl`200`};
    const int STEPS_LIGHT = 6;
    const float stepL = 300.0 / float(STEPS_LIGHT);
    const float cloudStart = 1500.0;

    vec3 rayDirection(vec2 fragCoord) {
      vec2 xy = fragCoord - halfCubeMapSize;
      return normalize(vec3(-xy, -halfCubeMapSize));
    }

    float remap(float x, float low1, float high1, float low2, float high2) {
      return low2 + (x - low1) * (high2 - low2) / (high1 - low1);
    }

    float saturate(float x) {
      return clamp(x, 0.0, 1.0);
    }`);c.code.add(b.glsl`
    float getCloudShape(vec3 pos, float pOffset) {
      const float textureWidth = ${b.glsl.float(e.atlasSize)};
      const float dataWidth = ${b.glsl.float(e.atlasSize)};
      const float tileRows = ${b.glsl.float(e.tileRows)};
      const vec3 atlasDimensions = vec3(${b.glsl.float(e.tileSize)}, ${b.glsl.float(e.tileSize)}, tileRows * tileRows);

      //Change from Y being height to Z being height
      vec3 p = float(${b.glsl.float(e.textureScale)}) * pos.xzy;

      //Pixel coordinates of point in the 3D data
      vec3 coord = vec3(mod(p - pOffset * atlasDimensions, atlasDimensions));
      float f = fract(coord.z);
      float level = floor(coord.z);
      float tileY = floor(level / tileRows);
      float tileX = level - tileY * tileRows;

      //The data coordinates are offset by the x and y tile, the two boundary cells between each tile pair and the initial boundary cell on the first row/column
      vec2 offset = atlasDimensions.x * vec2(tileX, tileY) + 2.0 * vec2(tileX, tileY) + 1.0;
      vec2 pixel = coord.xy + offset;
      vec2 data = texture(cloudShapeTexture, mod(pixel, dataWidth) / textureWidth).xy;

      return 1.0 - mix(data.x, data.y, f);
    }

    float getCloudMap(vec2 p){
      // Shift the texture center to origin to avoid seam artifacts
      vec2 uv = (${b.glsl.float(e.weatherMapScale)} * p) / ${b.glsl.float(e.atlasSize)} + 0.5;

      return texture(cloudShapeTexture, uv).a;
    }
    `);c.code.add(b.glsl`float clouds(vec3 p) {
float cloud = saturate(0.5 * mix(0.0, 1.0, min(2.0 * coverage, 1.0)));
if (cloud <= 0.0) {
return 0.0;
}
float cloudMap = getCloudMap(cloudSize * p.xy);
cloud = mix(cloud, min(2.0 * (coverage), 1.0) * cloudMap, min(2.0 * (1.0 - coverage), 1.0));
if (cloud <= 0.0) {
return 0.0;
}
float shape = getCloudShape(8.0 * cloudSize * p, 0.0);
cloud = saturate(remap(cloud, smoothness * shape, 1.0, 0.0, 1.0));
if (cloud <= 0.0) {
return 0.0;
}
float heightFraction = saturate((length(p) - cloudRadius - cloudStart) / cloudHeight);
cloud *= saturate(remap(heightFraction, 0.0, 0.25, 0.0, 1.0)) * smoothstep(1.0, 0.25, heightFraction);
if (cloud <= 0.0) {
return 0.0;
}
return density * saturate(remap(cloud, 0.35 * smoothness * getCloudShape(detailSize * p, 0.0), 1.0, 0.0, 1.0));
}`);c.code.add(b.glsl`vec2 sphereIntersections(vec3 start, vec3 dir, float radius) {
float a = dot(dir, dir);
float b = 2.0 * dot(dir, start);
float c = dot(start, start) - (radius * radius);
float d = (b * b) - 4.0 * a * c;
if (d < 0.0) {
return vec2(1e5, -1e5);
}
return vec2((-b - sqrt(d)) / (2.0 * a), (-b + sqrt(d)) / (2.0 * a));
}
float HenyeyGreenstein(float g, float costh) {
return (1.0 / (4.0 * 3.1415))  * ((1.0 - g * g) / pow(1.0 + g * g - 2.0 * g * costh, 1.5));
}`);c.code.add("\n    float multipleOctaves(float extinction, float mu, float stepL) {\n      float attenuation \x3d 1.0;\n      float contribution \x3d 1.0;\n      float phaseAttenuation \x3d 1.0;\n      float luminance \x3d 0.0;\n\n      for (int i \x3d 0; i \x3c 4; i++) {\n        float phase \x3d mix(HenyeyGreenstein(0.0, mu), HenyeyGreenstein(0.3 * phaseAttenuation, mu), 0.7);\n        luminance +\x3d contribution * phase * exp(-stepL * extinction * sigmaE * attenuation);\n        attenuation *\x3d 0.2;\n        contribution *\x3d 0.6;\n        phaseAttenuation *\x3d 0.5;\n      }\n\n      return luminance;\n    }");
c.code.add(b.glsl`float lightRay(vec3 org, vec3 p, float phaseFunction, float mu, vec3 sunDirection) {
float lightRayDensity = clouds(p);
lightRayDensity += clouds(p + sunDirection * 1.0 * stepL);
lightRayDensity += clouds(p + sunDirection * 2.0 * stepL);
lightRayDensity += clouds(p + sunDirection * 3.0 * stepL);
lightRayDensity += clouds(p + sunDirection * 4.0 * stepL);
lightRayDensity += clouds(p + sunDirection * 5.0 * stepL);
float beersLaw = multipleOctaves(lightRayDensity, mu, stepL);
return mix(beersLaw * 2.0 * (1.0 - (exp(-stepL * lightRayDensity * 2.0 * sigmaE ))), beersLaw, 0.5 + 0.5 * mu);
}`);c.code.add(b.glsl`float mainRay(vec3 org, vec3 dir, vec3 sunDirection, float distToStart, float totalDistance, out float totalTransmittance) {
if (dir.z < 0.0) {
return 0.0;
}
totalTransmittance = 1.0;
float stepS = totalDistance / float(STEPS);
float cameraHeight = length(org);
float mu = 0.5 + 0.5 * dot(sunDirection, dir);
float phaseFunction = mix(HenyeyGreenstein(-0.3, mu), HenyeyGreenstein(0.3, mu), 0.7);
vec3 p = org + distToStart  * dir;
float dist = distToStart;
float shading = 0.0;
for (int i = 0; i < STEPS; i++) {
float sampleDensity = clouds(p);
float sampleSigmaE = sampleDensity * sigmaE;
if (sampleDensity > 0.0 ) {
float ambient = mix((1.2), (1.6), saturate((length(p) - cloudRadius - cloudStart) / cloudHeight));
float luminance = sampleDensity * (ambient + power * phaseFunction * lightRay(org, p, phaseFunction, mu, sunDirection));
float transmittance = exp(-sampleSigmaE * stepS);
shading += totalTransmittance * (luminance - luminance * transmittance) / sampleSigmaE;
totalTransmittance *= transmittance;
if (totalTransmittance <= 0.001) {
totalTransmittance = 0.0;
break;
}
}
dist += stepS;
p = org + dir * dist;
}
return shading;
}`);c.code.add(b.glsl`void main() {
if (coverage ==  0.0) {
fragColor = vec4(0.0, 1.0, 0.0, 1.0);
return;
}
vec3 rayDir = rayDirection(gl_FragCoord.xy);
rayDir = normalize(view * rayDir);
vec3 viewPos = vec3(0, 0, cloudRadius + 1.0);
bool hitsPlanet = rayDir.z < 0.0;
float hazeFactor = smoothstep(-0.01, mix(0.0, 0.075, cloudVariables.x), abs(dot(rayDir, vec3(0, 0, 1))));
float totalTransmittance = 1.0;
float shading = 0.0;
if (hitsPlanet) {
shading = clamp(1.0 - cloudVariables.y, 0.6, 1.0) * (1.0 - hazeFactor);
totalTransmittance = hazeFactor;
fragColor = vec4(shading, totalTransmittance, shading, totalTransmittance);
return;
}
vec2 rayStartIntersect = sphereIntersections(viewPos, rayDir, cloudRadius + cloudStart);
vec2 rayEndIntersect = sphereIntersections(viewPos, rayDir, cloudRadius + cloudStart + cloudHeight);
float distToStart = rayStartIntersect.y;
float totalDistance = rayEndIntersect.y - distToStart;
vec3 sunDirection = normalize(vec3(0, 0, 1));
shading = 0.5 * mainRay(viewPos, rayDir, sunDirection, distToStart, totalDistance, totalTransmittance);
shading = mix(clamp(1.0 - cloudVariables.y, 0.6, 1.0), shading, hazeFactor);
totalTransmittance = mix(0.0, totalTransmittance, hazeFactor);
fragColor = vec4(shading, totalTransmittance, shading, totalTransmittance);
}`);return k}class p extends b.NoParameters{constructor(){super(...arguments);this.coverage=this.cloudHeight=this.smoothness=this.density=this.absorption=this.detailSize=this.cloudSize=this.cloudRadius=0;this.raymarchingSteps=t.cloudPresets.default.raymarchingSteps;this.weatherTile=l.create();this.viewMatrix=q.create()}}const z=l.create(),A=Object.freeze(Object.defineProperty({__proto__:null,CloudsPassParameters:p,build:n},Symbol.toStringTag,{value:"Module"}));g.Clouds=A;g.CloudsPassParameters=p;
g.build=n});