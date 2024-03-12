// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/tslib.es6 ../../../../../core/accessorSupport/decorators/property ../../../../../core/has ../../../../../core/Logger ../../../../../core/RandomLCG ../../../../../core/accessorSupport/decorators/subclass ../../../webgl/ManagedFBO ../../../webgl/RenderNode ../../lib/DefaultVertexAttributeLocations ../../../../webgl/enums".split(" "),function(h,n,p,v,w,x,q,r,t,u,d){h.RenderNodeVisualizerNode=class extends t{constructor(a){super(a);this._focusedFBO=this.destroyedCB=
null;this._program=[]}normalizeCtorArgs(a){return{...a,consumes:{required:["composite-color"]},produces:"composite-color"}}destroy(){this._program.forEach(a=>a.dispose());this._program.length=0;this.destroyedCB()}render(a){a=a.find(({name:k})=>"composite-color"===k);if(!this._focusedFBO)return a;const b=this.renderingContext;b.bindFramebuffer(a.fbo);b.setClearColor(0,0,0,0);b.clearSafe(d.ClearBufferBit.COLOR_BUFFER_BIT);const e=this._ensureShader(b,!1);b.useProgram(e);this.bindTexture(this._focusedFBO.getTexture(),
0);e.setUniform1i("colorTex",0);e.setUniform1i("inputType",0);b.screen.draw();return a}getReplacingFBO(a,b,e,k,f){b===h.FocusState.ON&&(k=a.width,f=a.height);const c=this.renderingContext;var g=a.depthStencilTexture;const l=this._ensureShader(c,null!=g),m=this.fboCache.acquire(k,f,"fbo visualizer");c.useProgram(l);g?(m.acquireColor(d.ColorAttachment.COLOR_ATTACHMENT1,r.ColorFormat.RGBA),c.bindFramebuffer(m.fbo),c.capabilities.drawBuffers?.drawBuffers([d.ColorAttachment.COLOR_ATTACHMENT0,d.ColorAttachment.COLOR_ATTACHMENT1]),
c.bindTexture(g,1),l.setUniform1i("depthTex",1)):c.bindFramebuffer(m.fbo);g=c.getViewport();c.setViewport(0,0,k,f);c.setClearColor(0,0,0,0);c.clearSafe(d.ClearBufferBit.COLOR_BUFFER_BIT);c.setBlendingEnabled(!0);c.setBlendFunction(d.BlendFactor.ONE,d.BlendFactor.ONE_MINUS_SRC_ALPHA);c.bindTexture(a.colorTexture,0);l.setUniform1i("colorTex",0);a=a.colorTexture?.descriptor.internalFormat;a=e.includes("depth")||e.includes("shadow")?3:a===d.SizedPixelFormat.R16F||a===d.SizedPixelFormat.R32F||a===d.SizedPixelFormat.R8?
1:a===d.SizedPixelFormat.RG8?2:a===d.SizedPixelFormat.RGBA16F?4:0;l.setUniform1i("inputType",a);e.includes("depth")&&l.setUniform2fv("nearFar",this.camera.nearFar);c.screen.draw();c.capabilities.drawBuffers?.drawBuffers([d.ColorAttachment.COLOR_ATTACHMENT0]);c.bindFramebuffer(null);c.setViewport(g.x,g.y,g.width,g.height);b===h.FocusState.ON&&(this._focusedFBO=m);return m}clearFocusedFBO(){this._focusedFBO=null}getPreviewContent(a,b,e,k){if(!e)return null;const f=this.renderingContext,c=this.fboCache.acquire(a,
b,"fbo visualizer");f.setClearColor(0,0,0,0);f.clearSafe(d.ClearBufferBit.COLOR_BUFFER_BIT);f.setBlendingEnabled(!0);f.setBlendFunction(d.BlendFactor.ONE,d.BlendFactor.ONE_MINUS_SRC_ALPHA);f.setViewport(0,0,a,b);const g=this._ensureShader(f,!1);f.useProgram(g);f.bindTexture(e.getColorTexture(k),0);g.setUniform1i("colorTex",0);g.setUniform1i("inputType",0);f.screen.draw();e=new ImageData(new Uint8ClampedArray(a*b*4),a,b);f.gl.readPixels(0,0,a,b,d.PixelFormat.RGBA,d.DataType.UNSIGNED_BYTE,new Uint8Array(e.data.buffer));
f.bindFramebuffer(null);c?.release();return e}_ensureShader(a,b){const e=b?1:0;if(this._program[e])return this._program[e];this._program[e]=a.programCache.acquire("#version 300 es\n      in vec2 position;\n      out vec2 uv;\n\n      void main() {\n        gl_Position \x3d vec4(position, 0.0, 1.0);\n        uv \x3d position * 0.5 + vec2(0.5);\n      }",`#version 300 es\n      precision highp float;\n\n      in vec2 uv;\n      uniform sampler2D colorTex;\n      layout(location = 0) out vec4 fragColor;\n      ${b?
"\n            layout(location \x3d 1) out vec4 fragDepth;\n            uniform sampler2D depthTex;\n          ":""}\n      uniform int inputType;\n      uniform vec2 nearFar;\n\n      // Factors to convert rgba back to float\n      const vec4 RGBA_2_FLOAT_FACTORS = vec4(\n        255.0 / (256.0),\n        255.0 / (256.0 * 256.0),\n        255.0 / (256.0 * 256.0 * 256.0),\n        255.0 / (256.0 * 256.0 * 256.0 * 256.0)\n      );\n\n\n      float rgba2float(vec4 rgba) {\n        // Convert components from 0->1 back to 0->255 and then add the components together with their corresponding\n        // fixed point factors, i.e. (256^1, 256^2, 256^3, 256^4)\n        return dot(rgba, RGBA_2_FLOAT_FACTORS);\n      }\n\n      float linearDepthFromFloat(float depth) {\n        depth = pow(depth, 0.2);\n        return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);\n      }\n\n      float linearDepthFromRGBA(vec4 depth) {\n        return linearDepthFromFloat(rgba2float(depth));\n      }\n\n      float linearDepthFromTexture(sampler2D depthTex, vec2 uv) {\n        ivec2 iuv = ivec2(uv * vec2(textureSize(depthTex, 0)));\n        return linearDepthFromRGBA(texelFetch(depthTex, iuv, 0));\n      }\n\n      void main() {\n        vec4 color;\n        if(inputType == 1) {\n          color = vec4(vec3(texture(colorTex, uv).r), 1.0);\n        } else if(inputType == 2) {\n          color = vec4(texture(colorTex, uv).rg, 0.0, 1.0);\n        } else if(inputType == 3) {\n          float depth = 1.0 - (-linearDepthFromTexture(colorTex, uv) / (nearFar[1] - nearFar[0]));\n          color = vec4(vec3(depth), depth >= 0.999 ? 0.0 : 1.0);\n        } else if(inputType == 4) {\n          color = texture(colorTex, uv);\n          color = vec4(color.rgb / color.a, color.a);\n        } else {\n          color = texture(colorTex, uv);\n        }\n\n\n        if(color.a < 0.000001)\n          discard;\n        else {\n          fragColor = color;\n          ${b?
"\n                float depth \x3d 1.0 - pow(texture(depthTex, uv).r, 10.0);\n                fragDepth \x3d vec4(vec3(depth), depth \x3c 0.000001 ? 0.0 : 1.0);\n                ":""}\n        }\n      }`,u.Default3D);return this._program[e]}};n.__decorate([p.property({constructOnly:!0})],h.RenderNodeVisualizerNode.prototype,"destroyedCB",void 0);h.RenderNodeVisualizerNode=n.__decorate([q.subclass("esri.views.3d.webgl-engine.effects.debug.RenderNodeVisualizerNode")],h.RenderNodeVisualizerNode);h.FocusState=
void 0;(function(a){a[a.ON=0]="ON";a[a.OFF=1]="OFF"})(h.FocusState||(h.FocusState={}));Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});