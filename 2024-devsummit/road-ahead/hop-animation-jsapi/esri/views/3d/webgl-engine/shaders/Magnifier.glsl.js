// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/screenUtils ../../../../chunks/vec42 ../../../../core/libs/gl-matrix-2/factories/vec4f64 ../core/shaderModules/BooleanPassUniform ../core/shaderModules/Float4PassUniform ../core/shaderModules/interfaces ../core/shaderModules/ShaderBuilder ../core/shaderModules/Texture2DPassUniform ../lib/VertexAttribute".split(" "),function(e,f,p,q,k,r,g,t,h,u){class l{}class v extends g.NoParameters{constructor(){super(...arguments);this.textures=new l}}const m=f.createScreenPointArray(),
w=f.createRenderScreenPointArray(),x=q.create();e.MagnifierPassParameters=v;e.TextureResources=l;e.build=function(){const b=new t.ShaderBuilder;b.attributes.add(u.VertexAttribute.POSITION,"vec2");b.vertex.uniforms.add(new r.Float4PassUniform("drawPosition",(a,c)=>{var d=c.camera.pixelRatio;const y=a.magnifier.offset.x*d,z=a.magnifier.offset.y*d;f.screenPointObjectToArray(a.magnifier.position,m);const n=c.camera.screenToRender(m,w);a=Math.ceil(d*a.magnifier.size);d=c.camera.fullWidth;c=c.camera.fullHeight;
return p.set(x,-1+(n[0]+y)/d*2,-1+(n[1]-z)/c*2,a/d*2,a/c*2)}));b.varyings.add("vUV","vec2");b.vertex.code.add(g.glsl`void main(void) {
vUV = position;
gl_Position = vec4(drawPosition.xy + vec2(position - 0.5) * drawPosition.zw, 0.0, 1.0);
}`);b.fragment.uniforms.add(new h.Texture2DPassUniform("textureInput",a=>a.textures.input));b.fragment.uniforms.add(new h.Texture2DPassUniform("textureMask",a=>a.textures.mask));b.fragment.uniforms.add(new h.Texture2DPassUniform("textureOverlay",a=>a.textures.overlay));b.fragment.uniforms.add(new k.BooleanPassUniform("maskEnabled",a=>a.magnifier.maskEnabled));b.fragment.uniforms.add(new k.BooleanPassUniform("overlayEnabled",a=>a.magnifier.overlayEnabled));b.fragment.code.add(g.glsl`const float barrelFactor = 1.1;
vec2 barrel(vec2 uv) {
vec2 uvn = uv * 2.0 - 1.0;
if (uvn.x == 0.0 && uvn.y == 0.0) {
return vec2(0.5, 0.5);
}
float theta = atan(uvn.y, uvn.x);
float r = pow(length(uvn), barrelFactor);
return r * vec2(cos(theta), sin(theta)) * 0.5 + 0.5;
}
void main() {
float mask = maskEnabled ? texture(textureMask, vUV).a : 1.0;
vec4 inputColor = texture(textureInput, barrel(vUV)) * mask;
vec4 overlayColor = overlayEnabled ? texture(textureOverlay, vUV) : vec4(0);
fragColor = overlayColor + (1.0 - overlayColor.a) * inputColor;
}`);return b};Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});