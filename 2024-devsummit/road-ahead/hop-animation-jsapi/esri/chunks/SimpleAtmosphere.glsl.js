// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../core/libs/gl-matrix-2/factories/vec2f64 ../core/libs/gl-matrix-2/factories/vec3f64 ../views/3d/environment/SimpleAtmosphereTechniqueConfiguration ../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/MainLighting.glsl ../views/3d/webgl-engine/core/shaderModules/Float2PassUniform ../views/3d/webgl-engine/core/shaderModules/Float3PassUniform ../views/3d/webgl-engine/core/shaderModules/FloatPassUniform ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/Matrix4PassUniform ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform ../views/3d/webgl-engine/lib/VertexAttribute".split(" "),
function(g,v,l,p,w,x,y,h,m,b,q,z,A,r){function t(e){const d=new z.ShaderBuilder,{vertex:c,fragment:k}=d;x.addMainLightDirection(c);e.geometry===p.SimpleAtmosphereGeometry.Underground?(d.attributes.add(r.VertexAttribute.POSITION,"vec2"),d.varyings.add("color","vec4"),c.uniforms.add(new h.Float3PassUniform("cameraPosition",(a,f)=>f.camera.eye),new m.FloatPassUniform("undergroundFadeAlpha",a=>a.undergroundFadeAlpha)),c.code.add(b.glsl`void main(void) {
float ndotl = dot(normalize(cameraPosition), mainLightDirection);
float lighting = max(0.0, smoothstep(-1.0, 0.8, 2.0 * ndotl));
color = vec4(vec3(lighting), undergroundFadeAlpha);
gl_Position = vec4(position.xy, 1.0, 1.0);
}`),k.code.add(b.glsl`void main() {
fragColor = color;
}`)):(d.include(w.Transform,e),d.attributes.add(r.VertexAttribute.POSITION,"vec3"),d.varyings.add("vtc","vec2"),d.varyings.add("falloff","float"),e=e.geometry===p.SimpleAtmosphereGeometry.Cylinder,c.uniforms.add(new q.Matrix4PassUniform("proj",(a,f)=>f.camera.projectionMatrix),new q.Matrix4PassUniform("view",(a,f)=>f.camera.viewMatrix)),e||(d.varyings.add("innerFactor","float"),c.uniforms.add(new h.Float3PassUniform("silCircleCenter",a=>a.silhouette.center)),c.uniforms.add(new h.Float3PassUniform("silCircleV1",
a=>a.silhouette.v1)),c.uniforms.add(new h.Float3PassUniform("silCircleV2",a=>a.silhouette.v2)),c.uniforms.add(new y.Float2PassUniform("texV",a=>a.texV)),c.uniforms.add(new m.FloatPassUniform("innerScale",a=>a.innerScale))),c.code.add(b.glsl`
		void main(void) {
      ${e?b.glsl`
      vec3 pos = position;
      float ndotl = mainLightDirection.z;
      vtc = vec2(0.0, position.z + 0.05);`:b.glsl`
      innerFactor = clamp(-position.z, 0.0, 1.0);
      float scale = position.y * (1.0 + innerFactor * innerScale);
      float phi = position.x * ${b.glsl.float(.04908738515625)} + 1.0;
      vec3 pos =  (silCircleCenter + sin(phi) * silCircleV1 + cos(phi) * silCircleV2) * scale;
      float ndotl = dot(normalize(position.y > 0.0 ? pos: silCircleCenter), mainLightDirection);
      vtc.x = position.x  * ${b.glsl.float(.0078125)};
      vtc.y = texV.x * (1.0 - position.z) + texV.y * position.z;
      `}
      falloff = max(0.0, smoothstep(-1.0, 0.8, 2.0 * ndotl));

		  gl_Position = transformPosition(proj, view, pos);
		  gl_Position.z = gl_Position.w; // project atmosphere onto the far plane
    }
	  `),k.uniforms.add(new A.Texture2DPassUniform("tex",a=>a.texture)),e||k.uniforms.add(new m.FloatPassUniform("altitudeFade",a=>a.altitudeFade)),k.code.add(b.glsl`
		void main() {
			vec4 atmosphereColor = texture(tex, vtc) * falloff;
      ${e?b.glsl`fragColor = atmosphereColor;`:b.glsl`
			vec4 innerColor = vec4(atmosphereColor.rgb, 1.0 - altitudeFade);
			fragColor = mix(atmosphereColor, innerColor, smoothstep(0.0, 1.0, innerFactor));
      `}
    }`));return d}class u extends b.NoParameters{constructor(){super(...arguments);this.texV=v.create();this.undergroundFadeAlpha=this.innerScale=this.altitudeFade=0;this.silhouette=new n}}class n{constructor(){this.center=l.create();this.v1=l.create();this.v2=l.create()}}const B=Object.freeze(Object.defineProperty({__proto__:null,SilhouetteCircle:n,SimpleAtmospherePassParameters:u,build:t},Symbol.toStringTag,{value:"Module"}));g.SilhouetteCircle=n;g.SimpleAtmosphere=B;g.SimpleAtmospherePassParameters=
u;g.build=t});