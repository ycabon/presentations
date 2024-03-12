// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../core/libs/gl-matrix-2/factories/vec2f64 ../views/3d/environment/NoiseTextureAtlasConfiguration ../views/3d/environment/NoiseTextureAtlasDimensions ../views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass.glsl ../views/3d/webgl-engine/core/shaderModules/Float2PassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder".split(" "),function(d,k,e,b,l,m,a,n){function g(f){const c=new n.ShaderBuilder;c.include(l.ScreenSpacePass,
!1);c.fragment.code.add(a.glsl`float remap(float x, float low1, float high1, float low2, float high2) {
return low2 + (x - low1) * (high2 - low2) / (high1 - low1);
}`);f.mode===e.NoiseTextureRenderMode.Full&&c.fragment.code.add(a.glsl`
    float saturate(float x) {
      return clamp(x, 0.0, 1.0);
    }

    // Safer modulo for positive and negative values
    vec3 modulo(vec3 m, float n){
      return mod(mod(m, n) + n, n);
    }

    vec3 hash(vec3 p3, float frequency){
      p3 = modulo(p3, frequency);
      p3 = fract(p3 * vec3(0.1031, 0.1030, 0.0973));
      p3 += dot(p3, p3.yxz + 33.33);
      return -1.0 + 2.0 * fract((p3.xxy + p3.yxx) * p3.zyx);
    }

    // 5th order polynomial interpolation
    vec3 fade(vec3 t){
      return (t * t * t) * (t * (t * 6.0 - 15.0) + 10.0);
    }

    float gradientNoise(vec3 p, float frequency){
      // Cell point is in
      vec3 i = floor(p);

      // Position in the cell in [0, 1]
      vec3 f = fract(p);

      // Interpolation value for gradient mixing
      vec3 u = fade(f);

      // Trilinear interpolation of gradients at cube vertices around point
      return mix( mix( mix( dot( hash( i + vec3(0.0,0.0,0.0), frequency), f - vec3(0.0,0.0,0.0) ),
                            dot( hash( i + vec3(1.0,0.0,0.0), frequency), f - vec3(1.0,0.0,0.0) ), u.x),
                       mix( dot( hash( i + vec3(0.0,1.0,0.0), frequency), f - vec3(0.0,1.0,0.0) ),
                            dot( hash( i + vec3(1.0,1.0,0.0), frequency), f - vec3(1.0,1.0,0.0) ), u.x), u.y),
                  mix( mix( dot( hash( i + vec3(0.0,0.0,1.0), frequency), f - vec3(0.0,0.0,1.0) ),
                            dot( hash( i + vec3(1.0,0.0,1.0), frequency), f - vec3(1.0,0.0,1.0) ), u.x),
                       mix( dot( hash( i + vec3(0.0,1.0,1.0), frequency), f - vec3(0.0,1.0,1.0) ),
                            dot( hash( i + vec3(1.0,1.0,1.0), frequency), f - vec3(1.0,1.0,1.0) ), u.x), u.y), u.z );
    }

    float getPerlinNoise(vec3 pos, float frequency) {
      float octaveFrequencyFactor = 2.0;
      float sum = 0.0;
      float weightSum = 0.0;
      float weight = 1.0;

      for (int oct = 0; oct < 3; oct++) {
        vec3 p = pos * frequency;
        float val = 0.5 + 0.5 * gradientNoise(p, frequency);
        sum += val * weight;
        weightSum += weight;
        weight *= 0.5;
        frequency *= octaveFrequencyFactor;
      }

      float noise = (sum / weightSum);
      noise = saturate(noise);
      return noise;
    }

    float worley(vec3 pos, float numCells) {
      vec3 p = pos * numCells;
      float d = 1.0e10;

      for (int x = -1; x <= 1; x++) {
        for (int y = -1; y <= 1; y++) {
          for (int z = -1; z <= 1; z++) {
            vec3 tp = floor(p) + vec3(x, y, z);
            tp = p - tp - (hash(tp, numCells) * 0.5 + 0.5);
            d = min(d, dot(tp, tp));
          }
        }
      }

      return 1.0 - clamp(d, 0.0, 1.0);
    }

    vec3 get3Dfrom2D(vec2 uv) {
      vec2 tile = floor(uv);
      float z = floor(${a.glsl.float(b.tileRows)} * tile.y + tile.x);
      return vec3(fract(uv), z);
    }

    float getTextureForPointPerlinWorley(vec3 p) {
      float perlinNoise = getPerlinNoise(p, ${a.glsl.float(8)});

      float worley0 = worley(p, ${a.glsl.float(2)} * 2.0);
      float worley1 = worley(p, ${a.glsl.float(2)} * 8.0);
      float worley2 = worley(p, ${a.glsl.float(2)} * 14.0);

      float worleyFBM = worley0 * 0.625 + worley1 * 0.25 + worley2 * 0.125;
      return remap(perlinNoise, 0.0, 1.0, worleyFBM, 1.0);
    }

    float getTextureForPointWorley(vec3 p) {
      float worley0 = worley(p, ${a.glsl.float(2)});
      float worley1 = worley(p, ${a.glsl.float(2)} * 2.0);
      float worley2 = worley(p, ${a.glsl.float(2)} * 4.0);
      float worley3 = worley(p, ${a.glsl.float(2)} * 8.0);

      float FBM0 = worley0 * 0.625 + worley1 * 0.25 + worley2 * 0.125;
      float FBM1 = worley1 * 0.625 + worley2 * 0.25 + worley3 * 0.125;
      float FBM2 = worley2 * 0.75 + worley3 * 0.25;

      return FBM0 * 0.625 + FBM1 * 0.25 + FBM2 * 0.125;
    }
  `);c.fragment.uniforms.add(new m.Float2PassUniform("weatherTile",p=>p.weatherTile));c.fragment.code.add(a.glsl`
    vec2 modulo(vec2 m, float n){
      return mod(mod(m, n) + n, n);
    }

    vec2 hash(vec2 p){
      // Get position of p in weather tile
      p = modulo(p, ${a.glsl.float(b.weatherTileSize)});

      // Get global coordinates of p
      p += weatherTile * ${a.glsl.float(b.weatherTileSize)};

      // Limit position to avoid numerical instability
      p = modulo(p, ${a.glsl.float(b.weatherMapSize)});

      vec3 p3 = fract(vec3(p.xyx) * vec3(0.1031, 0.1030, 0.0973));
      p3 += dot(p3, p3.yzx + 33.33);
      return 2.0 * fract((p3.xx + p3.yz) * p3.zy) - 1.0;
    }

    vec2 fade(vec2 t){
      return (t * t * t) * (t * (t * 6.0 - 15.0) + 10.0);
    }

    float gradientNoise(vec2 p){
      vec2 i = floor( p );
      vec2 f = fract( p );

      vec2 u = fade(f);

      // Bilinear interpolation of gradients at cell vertices around point
      return  mix(
                mix(dot( hash( i + vec2(0.0,0.0) ), f - vec2(0.0,0.0) ),
                    dot( hash( i + vec2(1.0,0.0) ), f - vec2(1.0,0.0) ), u.x),
                mix(dot( hash( i + vec2(0.0,1.0) ), f - vec2(0.0,1.0) ),
                    dot( hash( i + vec2(1.0,1.0) ), f - vec2(1.0,1.0) ), u.x),
                u.y);
    }

    float worley(vec2 p){
      float d = 1.0e10;
      for (int x = -1; x <= 1; x++){
        for (int y = -1; y <= 1; y++){
                vec2 tp = floor(p) + vec2(x, y);
                tp = p - tp - (0.5 + 0.5 * hash(tp));
                d = min(d, dot(tp, tp));
            }
        }
      return 1.0 - clamp(d, 0.0, 1.0);
    }
  `);c.fragment.code.add(a.glsl`void main() {`);f.mode===e.NoiseTextureRenderMode.Full&&c.fragment.code.add(a.glsl`
        float padWidth = 1.0;
        float paddedSize = ${a.glsl.float(b.tileSize)} + 2.0 * padWidth;
        float tileCount = ${a.glsl.float(b.tileRows)} * ${a.glsl.float(b.tileRows)};
        vec2 tile = floor((gl_FragCoord.xy - 0.5) / paddedSize);

        bool padCell = false;
        if (mod(gl_FragCoord.x, paddedSize) == 0.5 || mod(gl_FragCoord.x, paddedSize) == paddedSize - 0.5) {
          padCell = true;
        }

        if (mod(gl_FragCoord.y, paddedSize) == 0.5 || mod(gl_FragCoord.y, paddedSize) == paddedSize - 0.5) {
          padCell = true;
        }

        bool startPadX = false;
        bool startPadY = false;
        bool endPadX = false;
        bool endPadY = false;

        if (gl_FragCoord.x == tile.x * paddedSize + 0.5) {
          startPadX = true;
        }

        if (gl_FragCoord.y == tile.y * paddedSize + 0.5) {
          startPadY = true;
        }

        if (gl_FragCoord.x == (tile.x + 1.0) * paddedSize - 0.5) {
          endPadX = true;
        }

        if (gl_FragCoord.y == (tile.y + 1.0) * paddedSize - 0.5) {
          endPadY = true;
        }

        vec2 padding = vec2(2.0 * padWidth) * tile;
        vec2 uv;

        if (padCell) {
          vec2 pixel = gl_FragCoord.xy - padWidth - padding;

          if (startPadX) {
            pixel.x += ${a.glsl.float(b.tileSize)};
          }

          if (startPadY) {
            pixel.y += ${a.glsl.float(b.tileSize)};
          }

          if (endPadX) {
            pixel.x -= ${a.glsl.float(b.tileSize)};
          }

          if (endPadY) {
            pixel.y -= ${a.glsl.float(b.tileSize)};
          }

          uv = vec2(pixel.xy / ${a.glsl.float(b.tileSize)});
        } else {
          vec2 pixel = gl_FragCoord.xy - padWidth - padding;
          uv = vec2(pixel.xy / ${a.glsl.float(b.tileSize)});
        }

        vec3 p_ = get3Dfrom2D(uv);
        vec3 p = p_;
        p.z /= (${a.glsl.float(b.tileRows)} * ${a.glsl.float(b.tileRows)});

        float worleyPerlinNoise = getTextureForPointPerlinWorley(p);
        float worleyNoise = getTextureForPointWorley(p);

        fragColor.r = saturate(remap(worleyPerlinNoise, worleyNoise, 1.0, 0.0, 1.0));

        p_ = mod(p_ + 1.0, ${a.glsl.float(b.tileRows)} * ${a.glsl.float(b.tileRows)});
        p = p_;
        p.z /= (${a.glsl.float(b.tileRows)} * ${a.glsl.float(b.tileRows)});

        worleyPerlinNoise = getTextureForPointPerlinWorley(p);
        worleyNoise = getTextureForPointWorley(p);

        fragColor.g = saturate(remap(worleyPerlinNoise, worleyNoise, 1.0, 0.0, 1.0));
      `);c.fragment.code.add(a.glsl`
      vec2 mapUV = ${a.glsl.float(b.weatherTileSize)} * (gl_FragCoord.xy / ${a.glsl.float(b.atlasSize)});
      float map = abs(gradientNoise(mapUV));
      map = remap(map, 0.25 * (1.0 - worley(8.0 * mapUV)), 1.0, 0.0, 1.0);

      ${f.mode===e.NoiseTextureRenderMode.Full?a.glsl`fragColor.ba = vec2(0.0, map);`:a.glsl`fragColor = vec4(map);`};
    }
  `);return c}class h extends a.NoParameters{constructor(){super(...arguments);this.weatherTile=k.fromValues(0,0)}}const q=Object.freeze(Object.defineProperty({__proto__:null,NoiseTextureAtlasPassParameters:h,build:g},Symbol.toStringTag,{value:"Module"}));d.NoiseTextureAtlas=q;d.NoiseTextureAtlasPassParameters=h;d.build=g});