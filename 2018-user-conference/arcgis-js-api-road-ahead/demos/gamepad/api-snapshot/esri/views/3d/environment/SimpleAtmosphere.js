// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/views/3d/environment/materials/SimpleAtmosphereMaterial.xml":'\x3c?xml version\x3d"1.0" encoding\x3d"UTF-8"?\x3e\n\n\x3csnippets\x3e\n\n\x3csnippet name\x3d"vsSimpleAtmosphere"\x3e\x3c![CDATA[\n  $vsprecisionf\n\n  uniform mat4 proj;\n  uniform mat4 view;\n\n#ifndef PANORAMIC\n\n  const float TWICEPI \x3d 2.0*3.14159265;\n  const float ATMOSPHERE_RIM_SEGMENTS \x3d 128.0;\n\n  uniform vec3 silCircleCenter;\n  uniform vec3 silCircleV1;\n  uniform vec3 silCircleV2;\n  uniform vec2 texV;\n\n#endif\n\n  uniform vec3 lightDirection;\n\n  attribute vec3 $position;\n  varying vec2 vtc;\n  varying float falloff;\n\n  void main(void) {\n\n#ifdef PANORAMIC\n\n    vec3 pos \x3d $position;\n    float ndotl \x3d lightDirection.z;\n    vtc \x3d vec2(0, $position.z+0.05);\n\n#else\n\n    float phi \x3d $position.x * (TWICEPI / ATMOSPHERE_RIM_SEGMENTS) + 1.0;\n    vec3 pos \x3d (sin(phi) * silCircleV1 + cos(phi) * silCircleV2 + silCircleCenter) * $position.y;\n    float ndotl \x3d dot(normalize(pos), lightDirection);\n\n    vtc.x \x3d $position.x / ATMOSPHERE_RIM_SEGMENTS;\n    vtc.y \x3d texV.x * (1.0 - $position.z) + texV.y * $position.z;\n\n#endif\n\n    falloff \x3d max(0.0, (smoothstep(-1.0, 0.8, ndotl + ndotl)));\n\n    gl_Position \x3d proj * view * vec4(pos, 1.0);\n    gl_Position.z \x3d gl_Position.w; // project atmosphere onto the far plane\n  }\n]]\x3e\x3c/snippet\x3e\n\n\x3csnippet name\x3d"fsSimpleAtmosphere"\x3e\x3c![CDATA[\n  $fsprecisionf\n\n  uniform sampler2D tex;\n  varying vec2 vtc;\n  varying float falloff;\n\n  void main() {\n    vec4 texColor \x3d texture2D(tex, vtc);\n    gl_FragColor \x3d texColor * falloff;\n  }\n]]\x3e\x3c/snippet\x3e\n\n\x3c/snippets\x3e\n'}});
define("dojo/text!./materials/SimpleAtmosphereMaterial.xml dojo/Deferred ../../../core/watchUtils ../support/ExternalRenderer ../lib/glMatrix ../webgl-engine/lib/GeometryRenderer ../webgl-engine/lib/Texture ../webgl-engine/lib/Util ../webgl-engine/lib/GLTextureRep ../webgl-engine/lib/RenderPass ../webgl-engine/lib/RenderSlot ./resources/SimpleAtmosphereTexture ../support/earthUtils ../../webgl/Program ../webgl-engine/lib/DefaultVertexAttributeLocations".split(" "),function(w,x,y,z,q,A,B,m,C,D,E,F,
G,H,I){var l=G.earthRadius,d=q.vec3d,t=q.vec2d,u=q.mat4d,v=m.VertexAttrConstants,J=(l-1E4)/l,r=(l+3E5)/l,n=-1E4/3E5,p=1-n;return z.createSubclass({declaredClass:"esri.views.3d.environment.SimpleAtmosphere",properties:{view:{},needsRender:{value:!1},slot:{value:E.BACKGROUND,set:function(a){this.needsRender=!0;this._set("slot",a)}}},constructor:function(){this._renderData={texV:t.create(),silCircleCenter:d.create(),silCircleV1:d.create(),silCircleV2:d.create()};this._textureRep=this._texture=null},
initialize:function(){this._textureDfd=new x;this.addResolvingPromise(this._textureDfd.promise)},destroy:function(){this._currentViewChangedHandle&&(this._currentViewChangedHandle.remove(),this._currentViewChangedHandle=null);this._textureRep&&(this._texture&&(this._textureRep.release("SimpleAtmosphere"),this._textureRep.getTexture("SimpleAtmosphere").unload()),this._textureRep=null);this._program&&(this._program.dispose(),this._program=null);this._textureDfd&&(this._textureDfd.cancel(),this._textureDfd=
null)},initializeRenderContext:function(a){this._textureRep=new C({SimpleAtmosphere:new B(F,"SimpleAtmosphere",{wrapClamp:!0})},a.programRep,function(){return this.view.state.camera.viewport}.bind(this),a.rctx);this._texture=this._textureRep.aquire("SimpleAtmosphere",void 0,function(a){this._texture=a.getGLTexture();this._textureDfd.resolve();this._textureDfd=null}.bind(this))},setup:function(a){var c=this._createRibbonGeometryData();this._renderer=new A(c,[{name:"position",count:3,type:5126,offset:0,
stride:12,normalized:!1}],null,a.rctx);this._currentViewChangedHandle=y.init(this,"view.state.camera",this._update.bind(this),!0);a.shaderSnippets.vsSimpleAtmosphere||a.shaderSnippets._parse(w);this._program=new H(a.rctx,a.shaderSnippets.vsSimpleAtmosphere,a.shaderSnippets.fsSimpleAtmosphere,I.Default3D)},render:function(a){if(a.slot!==this.slot||a.pass!==D.MATERIAL)return!1;var c=this.renderContext.rctx,e=c.gl,b=this._program;c.bindProgram(b);b.setUniformMatrix4fv("proj",a.camera.projectionMatrix);
b.setUniformMatrix4fv("view",a.camera.viewMatrix);b.setUniform3fv("silCircleCenter",this._renderData.silCircleCenter);b.setUniform3fv("silCircleV1",this._renderData.silCircleV1);b.setUniform3fv("silCircleV2",this._renderData.silCircleV2);b.setUniform2fv("texV",this._renderData.texV);c.bindTexture(this._texture,0);b.setUniform1i("tex",0);b.setUniform3fv("lightDirection",a.lightingData.direction);c.setDepthTestEnabled(!0);c.setDepthFunction(e.LEQUAL);c.setBlendingEnabled(!0);c.setDepthWriteEnabled(!1);
c.setBlendFunctionSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);this._renderer.render(b);c.setBlendingEnabled(!1);c.setDepthWriteEnabled(!0);c.setDepthFunction(e.LESS);return!0},_update:function(a){var c=d.create(),e=d.create(),b=d.create(),g=this.view.renderCoordsHelper.getAltitude(a.eye);d.scale(a.eye,(l+50)/d.length(a.eye),b);this._computeSilhouetteCircle(b,a.center,a.up,l);d.add(this._renderData.silCircleCenter,this._renderData.silCircleV2,c);d.scale(c,r,e);var b=this._computeScreenRimWidth(b,
a.up,c,e),h=0,k=1,f=1;50>g?(h=.001953125,k=.1015625):500>g?(f=(g-50)/450,h=.001953125*(1-f)+.001953125*f,k=.1015625*(1-f)+.21875*f):5E3>g?(f=(g-500)/4500,h=.001953125*(1-f)+.001953125*f,k=.21875*(1-f)+.51171875*f):5E4>g&&(f=(g-5E3)/45E3,h=.001953125*(1-f)+.001953125*f,k=.51171875*(1-f)+.4140625*f);g=n+h*p;f=n+b*k*p;50<d.length(a.eye)-l&&(this._computeSilhouetteCircle(a.eye,a.center,a.up,l),d.add(this._renderData.silCircleCenter,this._renderData.silCircleV2,c),d.scale(c,r,e),a=this._computeScreenRimWidth(a.eye,
a.up,c,e),a=m.clamp((a-1.5)/(b-1.5),0,1),g=n+a*h*p,f=n+m.lerp(1,b*k,a)*p);t.set2(g,f,this._renderData.texV);this.needsRender=!0},_computeSilhouetteCircle:function(a,c,e,b){var g=d.length(a),h=b*Math.sqrt(g*g-b*b)/g,k=this._renderData.silCircleV1,f=this._renderData.silCircleV2;d.scale(a,Math.sqrt(b*b-h*h)/g,this._renderData.silCircleCenter);d.cross(a,c,k);1>d.length2(k)&&d.cross(a,e,k);d.scale(k,h/d.length(k));d.cross(k,a,f);d.scale(f,h/d.length(f));return h},_computeScreenRimWidth:function(a,c,e,
b){var g=u.create();u.lookAt(a,e,c,g);a=this.view.state.camera;m.project(e,g,a.projectionMatrix,a.viewport);m.project(b,g,a.projectionMatrix,a.viewport);return d.dist(e,b)/a.height},_createRibbonGeometryData:function(){for(var a=new Float32Array(768),c=new Uint32Array(768),e=0;128>e;e++){var b=6*e;a[b+0]=e;a[b+1]=J;a[b+2]=0;a[b+3]=e;a[b+4]=r;a[b+5]=1;var d=2*e,h=127===e?0:d+2;c[b+0]=d;c[b+1]=d+1;c[b+2]=h+1;c[b+3]=h+1;c[b+4]=h;c[b+5]=d}e={};e[v.POSITION]=c;c={};c[v.POSITION]={size:3,data:a};return{indices:e,
vertexAttr:c}}})});