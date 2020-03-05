// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../../webgl"],function(n,p,f){Object.defineProperty(p,"__esModule",{value:!0});var q=[1,0],r=[0,1],t=[1,.8,.6,.4,.2],u=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];n=function(){function h(){this._gaussianBlurPrograms=Array(5);this._compositeFBO=this._intensityFBO=null;this._mipsFBOs=Array(5);this._nMips=5;this._kernelSizeArray=[3,5,7,9,11];this._size=[0,0]}h.prototype.dispose=function(a){this._quadVAO&&(this._quadVAO.dispose(!0),this._quadVAO=null);this._intensityFBO&&(this._intensityFBO.dispose(),
this._intensityFBO=null);this._compositeFBO&&(this._compositeFBO.dispose(),this._compositeFBO=null);if(this._mipsFBOs){for(a=0;a<this._nMips;a++)this._mipsFBOs[a]&&(this._mipsFBOs[a].horizontal.dispose(),this._mipsFBOs[a].vertical.dispose());this._mipsFBOs=null}this._luminosityHighPassProgram&&(this._luminosityHighPassProgram.dispose(),this._luminosityHighPassProgram=null);if(this._gaussianBlurPrograms){a=0;for(var d=this._gaussianBlurPrograms;a<d.length;a++){var c=d[a];c&&c.dispose()}this._gaussianBlurPrograms=
null}this._compositionProgram&&(this._compositionProgram.dispose(),this._compositionProgram=null);this._blitProgram&&(this._blitProgram.dispose(),this._blitProgram=null)};h.prototype.draw=function(a,d,c){var b=a.context,e=a.state.size,g=b.gl,f=c&&c.stength||1.5,h=c&&c.radius||0;c=c&&c.threshold||0;this._setupShaders(b);this._createOrResizeResources(a);b.setBlendingEnabled(!0);b.setBlendFunction(1,771);b.setStencilWriteMask(0);b.bindVAO(this._quadVAO);b.bindFramebuffer(this._intensityFBO);a=this._luminosityHighPassProgram;
b.bindProgram(a);b.bindTexture(d.colorTexture,0);a.setUniform1i("u_texture",0);a.setUniform3fv("u_defaultColor",[0,0,0]);a.setUniform1f("u_defaultOpacity",0);a.setUniform1f("u_luminosityThreshold",c);a.setUniform1f("u_smoothWidth",.01);b.setViewport(0,0,Math.round(e[0]/2),Math.round(e[1]/2));b.setClearColor(0,0,0,0);b.clear(g.COLOR_BUFFER_BIT);b.drawArrays(g.TRIANGLE_STRIP,0,4);b.setBlendingEnabled(!1);a=[Math.round(e[0]/2),Math.round(e[1]/2)];c=this._intensityFBO.colorTexture;for(var k=0;k<this._nMips;k++){var l=
this._gaussianBlurPrograms[k];b.bindProgram(l);b.bindTexture(c,k+1);l.setUniform1i("u_colorTexture",k+1);l.setUniform2fv("u_texSize",a);l.setUniform2fv("u_direction",q);b.setViewport(0,0,a[0],a[1]);var m=this._mipsFBOs[k];b.bindFramebuffer(m.horizontal);b.setClearColor(0,0,0,0);b.clear(g.COLOR_BUFFER_BIT);b.drawArrays(g.TRIANGLE_STRIP,0,4);c=m.horizontal.colorTexture;b.bindFramebuffer(m.vertical);b.bindTexture(c,k+1);l.setUniform2fv("u_direction",r);b.setClearColor(0,0,0,0);b.clear(g.COLOR_BUFFER_BIT);
b.drawArrays(g.TRIANGLE_STRIP,0,4);c=m.vertical.colorTexture;a[0]=Math.round(a[0]/2);a[1]=Math.round(a[1]/2)}b.setViewport(0,0,e[0],e[1]);e=this._compositionProgram;b.bindFramebuffer(this._compositeFBO);b.bindProgram(e);e.setUniform1f("u_bloomStrength",f);e.setUniform1f("u_bloomRadius",h);e.setUniform1fv("u_bloomFactors",t);e.setUniform3fv("u_bloomTintColors",u);b.bindTexture(this._mipsFBOs[0].vertical.colorTexture,1);e.setUniform1i("u_blurTexture1",1);b.bindTexture(this._mipsFBOs[1].vertical.colorTexture,
2);e.setUniform1i("u_blurTexture2",2);b.bindTexture(this._mipsFBOs[2].vertical.colorTexture,3);e.setUniform1i("u_blurTexture3",3);b.bindTexture(this._mipsFBOs[3].vertical.colorTexture,4);e.setUniform1i("u_blurTexture4",4);b.bindTexture(this._mipsFBOs[4].vertical.colorTexture,5);e.setUniform1i("u_blurTexture5",5);b.setClearColor(0,0,0,0);b.clear(g.COLOR_BUFFER_BIT);b.drawArrays(g.TRIANGLE_STRIP,0,4);b.bindFramebuffer(d);b.setStencilWriteMask(0);b.setStencilTestEnabled(!1);b.setDepthWriteEnabled(!1);
b.setDepthTestEnabled(!1);b.setBlendingEnabled(!0);d=this._blitProgram;b.bindProgram(d);b.bindTexture(this._compositeFBO.colorTexture,6);d.setUniform1i("u_texture",6);b.setBlendFunction(1,1);b.drawArrays(g.TRIANGLE_STRIP,0,4);b.setBlendFunction(1,771);b.bindVAO(null)};h.prototype._setupShaders=function(a){if(!this._luminosityHighPassProgram){var d={a_pos:0,a_uv:1},c=new f.Program(a,"\n      precision mediump float;\n\n      attribute vec2 a_pos;\n      attribute vec2 a_uv;\n\n      varying vec2 v_uv;\n      void main() {\n        v_uv \x3d a_uv;\n        gl_Position \x3d vec4(a_pos, 0.0, 1.0);\n      }",
"\n      precision mediump float;\n\n      uniform sampler2D u_texture;\n      uniform vec3 u_defaultColor;\n      uniform float u_defaultOpacity;\n      uniform float u_luminosityThreshold;\n      uniform float u_smoothWidth;\n\n      varying vec2 v_uv;\n\n      void main() {\n        vec4 texel \x3d texture2D(u_texture, v_uv);\n        vec3 luma \x3d vec3(0.299, 0.587, 0.114);\n        float v \x3d dot(texel.xyz, luma);\n        vec4 outputColor \x3d vec4(u_defaultColor.rgb, u_defaultOpacity);\n        float alpha \x3d smoothstep(u_luminosityThreshold, u_luminosityThreshold + u_smoothWidth, v);\n\n        gl_FragColor \x3d mix(outputColor, texel, alpha);\n      }\n    ",
d),b=new f.Program(a,"\n      precision mediump float;\n\n      attribute vec2 a_pos;\n      attribute vec2 a_uv;\n\n      varying vec2 v_uv;\n      void main() {\n        v_uv \x3d a_uv;\n        gl_Position \x3d vec4(a_pos, 0.0, 1.0);\n      }","\n      precision mediump float;\n\n      #define NUM_MIPS 5\n\n      varying vec2 v_uv;\n      uniform sampler2D u_blurTexture1;\n      uniform sampler2D u_blurTexture2;\n      uniform sampler2D u_blurTexture3;\n      uniform sampler2D u_blurTexture4;\n      uniform sampler2D u_blurTexture5;\n      uniform float u_bloomStrength;\n      uniform float u_bloomRadius;\n      uniform float u_bloomFactors[NUM_MIPS];\n      uniform vec3 u_bloomTintColors[NUM_MIPS];\n\n      float lerpBloomFactor(const in float factor) {\n        float mirrorFactor \x3d 1.2 - factor;\n        return mix(factor, mirrorFactor, u_bloomRadius);\n      }\n\n      void main() {\n        gl_FragColor \x3d u_bloomStrength * (\n          lerpBloomFactor(u_bloomFactors[0]) * vec4(u_bloomTintColors[0], 1.0) * texture2D(u_blurTexture1, v_uv) +\n          lerpBloomFactor(u_bloomFactors[1]) * vec4(u_bloomTintColors[1], 1.0) * texture2D(u_blurTexture2, v_uv) +\n          lerpBloomFactor(u_bloomFactors[2]) * vec4(u_bloomTintColors[2], 1.0) * texture2D(u_blurTexture3, v_uv) +\n          lerpBloomFactor(u_bloomFactors[3]) * vec4(u_bloomTintColors[3], 1.0) * texture2D(u_blurTexture4, v_uv) +\n          lerpBloomFactor(u_bloomFactors[4]) * vec4(u_bloomTintColors[4], 1.0) * texture2D(u_blurTexture5, v_uv)\n        );\n      }",
d),e=new f.Program(a,"\n      precision mediump float;\n\n      attribute vec2 a_pos;\n      attribute vec2 a_uv;\n\n      varying vec2 v_uv;\n      void main() {\n        v_uv \x3d a_uv;\n        gl_Position \x3d vec4(a_pos, 0.0, 1.0);\n      }","\n      precision mediump float;\n\n      uniform sampler2D u_texture;\n\n      varying vec2 v_uv;\n      void main() {\n        gl_FragColor \x3d texture2D(u_texture, v_uv);\n      }",d);this._setupGaussianBlurShaders(a);var g=new Int8Array([-1,1,0,1,1,
1,1,1,-1,-1,0,0,1,-1,1,0]);this._quadVAO=new f.VertexArrayObject(a,d,{geometry:[{name:"a_pos",count:2,type:5120,offset:0,stride:4,normalized:!1,divisor:0},{name:"a_uv",count:2,type:5120,offset:2,stride:4,normalized:!1,divisor:0}]},{geometry:f.BufferObject.createVertex(a,35044,g)});this._blitProgram=e;this._compositionProgram=b;this._luminosityHighPassProgram=c}};h.prototype._setupGaussianBlurShaders=function(a){for(var d={a_pos:0,a_uv:1},c=0;c<this._nMips;c++){var b=this._kernelSizeArray[c];this._gaussianBlurPrograms[c]=
new f.Program(a,"\n      precision mediump float;\n\n      attribute vec2 a_pos;\n      attribute vec2 a_uv;\n\n      varying vec2 v_uv;\n      void main() {\n        v_uv \x3d a_uv;\n        gl_Position \x3d vec4(a_pos, 0.0, 1.0);\n      }","\n    precision mediump float;\n\n    uniform sampler2D u_colorTexture;\n    uniform vec2 u_texSize;\n    uniform vec2 u_direction;\n\n    varying vec2 v_uv;\n\n    float gaussianPdf(in float x, in float sigma) {\n        return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;\n    }\n\n    #define KERNEL_RADIUS "+
b+"\n    #define SIGMA "+b+"\n\n    void main() {\n      vec2 invSize \x3d 1.0 / u_texSize;\n      float fSigma \x3d float(SIGMA);\n      float weightSum \x3d gaussianPdf(0.0, fSigma);\n      vec3 pixelColorSum \x3d texture2D(u_colorTexture, v_uv).rgb * weightSum;\n\n      for (int i \x3d 1; i \x3c KERNEL_RADIUS; i ++) {\n        float x \x3d float(i);\n        float w \x3d gaussianPdf(x, fSigma);\n        vec2 uvOffset \x3d u_direction * invSize * x;\n        vec3 sample1 \x3d texture2D( u_colorTexture, v_uv + uvOffset).rgb;\n        vec3 sample2 \x3d texture2D( u_colorTexture, v_uv - uvOffset).rgb;\n        pixelColorSum +\x3d (sample1 + sample2) * w;\n        weightSum +\x3d 2.0 * w;\n      }\n\n      gl_FragColor \x3d vec4(pixelColorSum /weightSum, 0.0);\n    }",
d)}};h.prototype._createOrResizeResources=function(a){var d=a.context,c=a.state.size;if(!this._compositeFBO||this._size[0]!==c[0]||this._size[1]!==c[1])for(this._size[0]=c[0],this._size[1]=c[1],a=[c[0]/2,c[1]/2],this._compositeFBO?this._compositeFBO.resize(c[0],c[1]):this._compositeFBO=new f.FramebufferObject(d,{colorTarget:0,depthStencilTarget:0,width:c[0],height:c[1]}),this._intensityFBO?this._intensityFBO.resize(a[0],a[1]):this._intensityFBO=new f.FramebufferObject(d,{colorTarget:0,depthStencilTarget:0,
width:a[0],height:a[1]}),c=0;c<this._nMips;c++)this._mipsFBOs[c]?(this._mipsFBOs[c].horizontal.resize(a[0],a[1]),this._mipsFBOs[c].vertical.resize(a[0],a[1])):this._mipsFBOs[c]={horizontal:new f.FramebufferObject(d,{colorTarget:0,depthStencilTarget:0,width:a[0],height:a[1]}),vertical:new f.FramebufferObject(d,{colorTarget:0,depthStencilTarget:0,width:a[0],height:a[1]})},a[0]/=2,a[1]/=2};return h}();p.PostProcessingEffectUnrealBloom=n});