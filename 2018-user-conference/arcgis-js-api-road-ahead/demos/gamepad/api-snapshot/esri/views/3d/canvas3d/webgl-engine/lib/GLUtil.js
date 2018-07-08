// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["./GLVBO","./VertexBufferLayout","./Util","./gl-matrix","./webgl-debug"],function(p,q,h,r,m){var t=r.mat4d,n={texImage2D:function(b,c,a,e,g,f,k,l){h.assert(1<=b.width&&1<=b.height);!0===l&&a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!1);!k||h.isPowerOfTwo(b.width)&&h.isPowerOfTwo(b.height)?(a.bindTexture(a.TEXTURE_2D,c),a.texImage2D(a.TEXTURE_2D,0,a.RGBA,a.RGBA,a.UNSIGNED_BYTE,b)):(n.makePotTexture(b,c,a,e,g),a.bindTexture(a.TEXTURE_2D,c));f?(a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR_MIPMAP_LINEAR),
a.generateMipmap(a.TEXTURE_2D)):a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR);a.bindTexture(a.TEXTURE_2D,null);!0===l&&a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!0);return c},copyTextureToTexture:function(b,c,a,e,g,f,h,l,d){var k=d.createFramebuffer();d.bindFramebuffer(d.FRAMEBUFFER,k);d.framebufferTexture2D(d.FRAMEBUFFER,d.COLOR_ATTACHMENT0,d.TEXTURE_2D,b,0);n.checkFramebufferStatus(d.FRAMEBUFFER,d);d.bindTexture(d.TEXTURE_2D,c);d.copyTexSubImage2D(d.TEXTURE_2D,0,g,f,a,e,h,l);d.generateMipmap(d.TEXTURE_2D);
d.bindFramebuffer(d.FRAMEBUFFER,null);d.deleteFramebuffer(k)},makePotTexture:function(b,c,a,e,g){var f=h.nextHighestPowerOfTwo(b.width),k=h.nextHighestPowerOfTwo(b.height);h.assert(f!==b.width||k!==b.height);var l=a.createFramebuffer();a.bindFramebuffer(a.FRAMEBUFFER,l);a.bindTexture(a.TEXTURE_2D,c);a.texImage2D(a.TEXTURE_2D,0,a.RGBA,f,k,0,a.RGBA,a.UNSIGNED_BYTE,null);a.generateMipmap(a.TEXTURE_2D);a.framebufferTexture2D(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,c,0);c=a.createTexture();a.bindTexture(a.TEXTURE_2D,
c);a.texImage2D(a.TEXTURE_2D,0,a.RGBA,a.RGBA,a.UNSIGNED_BYTE,b);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.NEAREST);b=q.Defaults.PosTex;var d=new p(h.createQuadVertexUvBuffer(),b,a);void 0===g&&(g=a.getParameter(a.VIEWPORT));a.viewport(0,0,f,k);e=e.get("texOnly");e.use();f=t.identity();e.uniformMatrix4fv("model",f);e.uniformMatrix4fv("view",f);e.uniformMatrix4fv("proj",
f);e.uniform4fv("color",[1,1,1,1]);e.uniform1i("tex",0);b.enableVertexAttribArrays(a,e);d.bind();d.setPointers(e);a.disable(a.DEPTH_TEST);a.drawArrays(a.TRIANGLE_STRIP,0,d.getNum());a.enable(a.DEPTH_TEST);b.disableVertexAttribArrays(a,e);a.viewport(g[0],g[1],g[2],g[3]);d.dispose();a.deleteTexture(c);a.bindFramebuffer(a.FRAMEBUFFER,null);a.deleteFramebuffer(l)},checkError:function(b,c){var a=c.getError();a!=c.NO_ERROR&&alert(b+": gl error "+a)},checkFramebufferStatus:function(b,c){b=c.checkFramebufferStatus(b);
b!=c.FRAMEBUFFER_COMPLETE&&console.log("Framebuffer error 0x"+b)},handleError:function(b,c,a){alert(m.glEnumToString(b)+" was caused by call to: "+c+"("+m.glFunctionArgsToString(c,a)+")")},validateNoneOfTheArgsAreUndefined:function(b,c){for(var a=0;a<c.length;++a)void 0===c[a]&&console.error("undefined passed to gl."+b+"("+m.glFunctionArgsToString(b,c)+")")}};return n});