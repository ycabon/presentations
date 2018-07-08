// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define([],function(){function y(a){if(null==k){k={};for(var c in a)"number"==typeof a[c]&&(k[a[c]]=c)}}function z(){if(null==k)throw"WebGLDebugUtils.init(ctx) not called";}function l(a){z();var c=k[a];return void 0!==c?c:"*UNKNOWN WebGL ENUM (0x"+a.toString(16)+")"}function r(a,c,e){a=C[a];return void 0!==a&&a[c]?l(e):null===e?"null":void 0===e?"undefined":e.toString()}function A(a,c,e){a.__defineGetter__(e,function(){return c[e]});a.__defineSetter__(e,function(a){c[e]=a})}function B(a){var c=a.getParameter(a.MAX_VERTEX_ATTRIBS),
e=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,e);for(var d=0;d<c;++d)a.disableVertexAttribArray(d),a.vertexAttribPointer(d,4,a.FLOAT,!1,0,0),a.vertexAttrib1f(d,0);a.deleteBuffer(e);c=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS);for(d=0;d<c;++d)a.activeTexture(a.TEXTURE0+d),a.bindTexture(a.TEXTURE_CUBE_MAP,null),a.bindTexture(a.TEXTURE_2D,null);a.activeTexture(a.TEXTURE0);a.useProgram(null);a.bindBuffer(a.ARRAY_BUFFER,null);a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,null);a.bindFramebuffer(a.FRAMEBUFFER,null);
a.bindRenderbuffer(a.RENDERBUFFER,null);a.disable(a.BLEND);a.disable(a.CULL_FACE);a.disable(a.DEPTH_TEST);a.disable(a.DITHER);a.disable(a.SCISSOR_TEST);a.blendColor(0,0,0,0);a.blendEquation(a.FUNC_ADD);a.blendFunc(a.ONE,a.ZERO);a.clearColor(0,0,0,0);a.clearDepth(1);a.clearStencil(-1);a.colorMask(!0,!0,!0,!0);a.cullFace(a.BACK);a.depthFunc(a.LESS);a.depthMask(!0);a.depthRange(0,1);a.frontFace(a.CCW);a.hint(a.GENERATE_MIPMAP_HINT,a.DONT_CARE);a.lineWidth(1);a.pixelStorei(a.PACK_ALIGNMENT,4);a.pixelStorei(a.UNPACK_ALIGNMENT,
4);a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!1);a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1);a.UNPACK_COLORSPACE_CONVERSION_WEBGL&&a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,a.BROWSER_DEFAULT_WEBGL);a.polygonOffset(0,0);a.sampleCoverage(1,!1);a.scissor(0,0,a.canvas.width,a.canvas.height);a.stencilFunc(a.ALWAYS,0,4294967295);a.stencilMask(4294967295);a.stencilOp(a.KEEP,a.KEEP,a.KEEP);a.viewport(0,0,a.canvas.width,a.canvas.height);for(a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);a.getError(););
}var C={enable:{0:!0},disable:{0:!0},getParameter:{0:!0},drawArrays:{0:!0},drawElements:{0:!0,2:!0},createShader:{0:!0},getShaderParameter:{1:!0},getProgramParameter:{1:!0},getVertexAttrib:{1:!0},vertexAttribPointer:{2:!0},bindTexture:{0:!0},activeTexture:{0:!0},getTexParameter:{0:!0,1:!0},texParameterf:{0:!0,1:!0},texParameteri:{0:!0,1:!0,2:!0},texImage2D:{0:!0,2:!0,6:!0,7:!0},texSubImage2D:{0:!0,6:!0,7:!0},copyTexImage2D:{0:!0,2:!0},copyTexSubImage2D:{0:!0},generateMipmap:{0:!0},bindBuffer:{0:!0},
bufferData:{0:!0,2:!0},bufferSubData:{0:!0},getBufferParameter:{0:!0,1:!0},pixelStorei:{0:!0,1:!0},readPixels:{4:!0,5:!0},bindRenderbuffer:{0:!0},bindFramebuffer:{0:!0},checkFramebufferStatus:{0:!0},framebufferRenderbuffer:{0:!0,1:!0,2:!0},framebufferTexture2D:{0:!0,1:!0,2:!0},getFramebufferAttachmentParameter:{0:!0,1:!0,2:!0},getRenderbufferParameter:{0:!0,1:!0},renderbufferStorage:{0:!0,1:!0},clear:{0:!0},depthFunc:{0:!0},blendFunc:{0:!0,1:!0},blendFuncSeparate:{0:!0,1:!0,2:!0,3:!0},blendEquation:{0:!0},
blendEquationSeparate:{0:!0,1:!0},stencilFunc:{0:!0},stencilFuncSeparate:{0:!0,1:!0},stencilMaskSeparate:{0:!0},stencilOp:{0:!0,1:!0,2:!0},stencilOpSeparate:{0:!0,1:!0,2:!0,3:!0},cullFace:{0:!0},frontFace:{0:!0}},k=null;return{init:y,mightBeEnum:function(a){z();return void 0!==k[a]},glEnumToString:l,glFunctionArgToString:r,glFunctionArgsToString:function(a,c){for(var e="",d=0;d<c.length;++d)e+=(0==d?"":", ")+r(a,d,c[d]);return e},makeDebugContext:function(a,c,e){function d(a,f){return function(){e&&
e(f,arguments);var d=a[f].apply(a,arguments),g=a.getError();0!=g&&(m[g]=!0,c(g,f,arguments));return d}}y(a);c=c||function(a,d,c){for(var f="",g=0;g<c.length;++g)f+=(0==g?"":", ")+r(d,g,c[g]);a="WebGL error "+l(a)+" in "+d+"("+f+")";window.console&&window.console.error?window.console.error(a):window.console&&window.console.log&&window.console.log(a)};var m={},n={},p;for(p in a)"function"==typeof a[p]?n[p]=d(a,p):A(n,a,p);n.getError=function(){for(var d in m)if(m.hasOwnProperty(d)&&m[d])return m[d]=
!1,d;return a.NO_ERROR};return n},makeLostContextSimulatingCanvas:function(a){function c(a){return"function"==typeof a?a:function(b){a.handleEvent(b)}}function e(){for(var a=Object.keys(q),b=0;b<a.length;++b)delete q[a]}function d(){++t;h||u==t&&a.loseContext()}function m(a,b){var D=a[b];return function(){d();if(!h)return D.apply(a,arguments)}}function n(a){return{statusMessage:a,preventDefault:function(){v=!0}}}function p(a){for(var b in a)"function"==typeof a[b]?f[b]=m(a,b):A(f,a,b);f.getError=
function(){d();if(!h)for(var a;a=g.getError();)q[a]=!0;for(a in q)if(q[a])return delete q[a],a;return f.NO_ERROR};var c="createBuffer createFramebuffer createProgram createRenderbuffer createShader createTexture".split(" ");for(b=0;b<c.length;++b){var e=c[b];f[e]=function(b){return function(){d();if(h)return null;var c=b.apply(a,arguments);c.__webglDebugContextLostId__=r;w.push(c);return c}}(a[e])}c="getActiveAttrib getActiveUniform getBufferParameter getContextAttributes getAttachedShaders getFramebufferAttachmentParameter getParameter getProgramParameter getProgramInfoLog getRenderbufferParameter getShaderParameter getShaderInfoLog getShaderSource getTexParameter getUniform getUniformLocation getVertexAttrib".split(" ");
for(b=0;b<c.length;++b)e=c[b],f[e]=function(b){return function(){d();return h?null:b.apply(a,arguments)}}(f[e]);c="isBuffer isEnabled isFramebuffer isProgram isRenderbuffer isShader isTexture".split(" ");for(b=0;b<c.length;++b)e=c[b],f[e]=function(b){return function(){d();return h?!1:b.apply(a,arguments)}}(f[e]);f.checkFramebufferStatus=function(b){return function(){d();return h?f.FRAMEBUFFER_UNSUPPORTED:b.apply(a,arguments)}}(f.checkFramebufferStatus);f.getAttribLocation=function(b){return function(){d();
return h?-1:b.apply(a,arguments)}}(f.getAttribLocation);f.getVertexAttribOffset=function(b){return function(){d();return h?0:b.apply(a,arguments)}}(f.getVertexAttribOffset);f.isContextLost=function(){return h};return f}var g,f,k=[],l=[];f={};var r=1,h=!1,w=[],u=0,t=0,v=!1,x=0,q={};a.getContext=function(c){return function(){var b=c.apply(a,arguments);if(b instanceof WebGLRenderingContext){if(b!=g){if(g)throw"got different context";g=b;f=p(g)}return f}return b}}(a.getContext);(function(a){var b=a.addEventListener;
a.addEventListener=function(d,e,f){switch(d){case "webglcontextlost":k.push(c(e));break;case "webglcontextrestored":l.push(c(e));break;default:b.apply(a,arguments)}}})(a);a.loseContext=function(){if(!h){h=!0;u=0;for(++r;g.getError(););e();q[g.CONTEXT_LOST_WEBGL]=!0;var c=n("context lost"),b=k.slice();setTimeout(function(){for(var d=0;d<b.length;++d)b[d](c);0<=x&&setTimeout(function(){a.restoreContext()},x)},0)}};a.restoreContext=function(){h&&l.length&&setTimeout(function(){if(!v)throw"can not restore. webglcontestlost listener did not call event.preventDefault";
for(var a=0;a<w.length;++a){var b=w[a];b instanceof WebGLBuffer?g.deleteBuffer(b):b instanceof WebGLFramebuffer?g.deleteFramebuffer(b):b instanceof WebGLProgram?g.deleteProgram(b):b instanceof WebGLRenderbuffer?g.deleteRenderbuffer(b):b instanceof WebGLShader?g.deleteShader(b):b instanceof WebGLTexture&&g.deleteTexture(b)}B(g);h=!1;t=0;v=!1;for(var a=l.slice(),b=n("context restored"),c=0;c<a.length;++c)a[c](b)},0)};a.loseContextInNCalls=function(a){if(h)throw"You can not ask a lost contet to be lost";
u=t+a};a.getNumCalls=function(){return t};a.setRestoreTimeout=function(a){x=a};return a},resetToInitialState:B}});