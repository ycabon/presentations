// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ./vec32 ../core/libs/gl-matrix-2/factories/vec3f64 ../views/3d/environment/PrecipitationTechniqueConfiguration ../views/3d/webgl-engine/core/shaderModules/Float3PassUniform ../views/3d/webgl-engine/core/shaderModules/FloatPassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/Matrix4PassUniform ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/lib/VertexAttribute".split(" "),function(q,e,f,h,k,
l,g,r,w,t){function u(m){const c=new w.ShaderBuilder;c.attributes.add(t.VertexAttribute.POSITION,"vec3");c.attributes.add(t.VertexAttribute.INSTANCEFEATUREATTRIBUTE,"float");c.vertex.uniforms.add(new k.Float3PassUniform("cameraPosition",(b,a)=>a.camera.eye));c.vertex.uniforms.add(new k.Float3PassUniform("offset",(b,a)=>{a=a.camera.eye;var d=.5*b.width;const n=1/b.width;d=e.floor(p,e.set(p,(a[0]+d)*n,(a[1]+d)*n,(a[2]+d)*n));return e.sub(d,a,e.scale(d,d,b.width))}));c.vertex.uniforms.add(new l.FloatPassUniform("width",
b=>b.width));c.vertex.uniforms.add(new r.Matrix4PassUniform("proj",(b,a)=>a.camera.projectionMatrix));c.vertex.uniforms.add(new r.Matrix4PassUniform("view",(b,a)=>a.camera.viewMatrix));c.vertex.uniforms.add(new l.FloatPassUniform("time",b=>b.time));c.varyings.add("vUv","vec2");c.vertex.code.add(g.glsl`
    vec3 hash31(float p){
      vec3 p3 = fract(vec3(p) * vec3(0.1031, 0.1030, 0.0973));
      p3 += dot(p3, p3.yzx + 33.33);
      return fract((p3.xxy + p3.yzz) * p3.zyx);
    }

    float hash11(float p){
      p = fract(p * 0.1031);
      p *= p + 33.33;
      p *= p + p;
      return fract(p);
    }

    //https://www.geeks3d.com/20141201/how-to-rotate-a-vertex-by-a-quaternion-in-glsl/
    vec3 rotateVectorByQuaternion(vec3 v, vec4 q){
      return 2.0 * cross(q.xyz, v * q.w + cross(q.xyz, v)) + v;
    }

    void main(void) {

      vUv = position.xz;

      vec3 rand = hash31(instanceFeatureAttribute);

      // Set random position for all particles
      // The hash function space is not high resolution so offset particles by an additional random value
      // This creates grids of 1000 particles which are shifted by random hundreths of the tile width
      // overlaying multiple identical but offset grids
      vec3 randomPosition = 2.0 * (rand + (0.01 + 0.01 * rand) * floor(0.001 * instanceFeatureAttribute)) - 1.0;

      // Random orientation of rain drops
      float angle = 3.1415 * hash11(instanceFeatureAttribute);

      vec3 up = vec3(0, 0, 1);

      // Gravity and wind direction
      vec3 direction = normalize(cameraPosition);

      vec3 tangent = normalize(cross(direction, up));

      // Gravity
      vec3 animatedPos = randomPosition + direction * -time;

      // Rain particles fall straight down and are randomly oriented
      // Snow particles have random sinusoid trajectories and are rotated to face the camera
      ${m.type===h.PrecipitationType.Rain?g.glsl`
            // Random rotation for particle
            vec3 rotationAxis = up;
            vec4 quat = vec4(rotationAxis * sin(angle), cos(angle));
            vec3 transformedPos = rotateVectorByQuaternion(vec3(0.2, 0.2, 4.0) * (position - vec3(0.5, 0.0, 0.5)), quat);

            // Rotate particle to planetary position
            rotationAxis = tangent;
            angle = 0.5 * -acos(dot(direction, up));
            quat = vec4(rotationAxis * sin(angle), cos(angle));
            transformedPos = rotateVectorByQuaternion(transformedPos, quat);

            vec4 pos = mat4(mat3(view)) * vec4(transformedPos + (mod(width * animatedPos - offset, width) - 0.5 * width), 1.0);
            gl_Position = proj * pos;
      `:g.glsl`
            vec3 rotationAxis = direction;
            vec4 quat = vec4(rotationAxis * sin(angle), cos(angle));

            tangent = rotateVectorByQuaternion(tangent, quat);
            // Random sinusoid from friction
            animatedPos += tangent * 0.25 * sin(dot(animatedPos, direction));
            vec4 pos = mat4(mat3(view)) * vec4((mod(width * animatedPos - offset, width) - 0.5 * width), 1.0);
            gl_Position = proj * (0.5 * vec4(position.xzy, 0.0) + pos);
      `}
    }
  `);c.fragment.uniforms.add(new l.FloatPassUniform("opacity",b=>b.opacity),new k.Float3PassUniform("particleColor",(b,a)=>{b=m.type===h.PrecipitationType.Rain?x:y;const d=e.scale(p,b,.7);e.normalize(v,a.camera.eye);a=Math.max(0,e.dot(v,a.lighting.mainLight.direction));return e.lerp(d,d,b,a)}));c.fragment.code.add(g.glsl`
    void main() {

      // Cut off corners of the triangle
      if(vUv.x < 0.0 || vUv.y < 0.0){
        discard;
      }

      float d = length(vUv - vec2(0.5));

      ${m.type===h.PrecipitationType.Rain?g.glsl`d = 0.35 * smoothstep(0.5, 0.0, d);`:g.glsl`d = smoothstep(0.5, 0.1, d);`}
      fragColor = opacity * vec4(particleColor * d, d);
    }
  `);return c}const p=f.create(),v=f.create(),y=f.fromValues(1,1,1),x=f.fromValues(.85,.85,.85);f=Object.freeze(Object.defineProperty({__proto__:null,build:u},Symbol.toStringTag,{value:"Module"}));q.Precipitation=f;q.build=u});