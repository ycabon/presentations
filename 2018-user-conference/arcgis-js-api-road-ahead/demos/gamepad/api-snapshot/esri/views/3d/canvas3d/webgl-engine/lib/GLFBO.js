// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["./GLUtil"],function(l){return function(h,m,n,d,a,b){var g=a.createFramebuffer();b=b||a.createTexture();var c=n?a.createRenderbuffer():void 0;a.bindTexture(a.TEXTURE_2D,b);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,d);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MAG_FILTER,d);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE);a.texImage2D(a.TEXTURE_2D,0,a.RGBA,4,4,0,a.RGBA,a.UNSIGNED_BYTE,null);var e=0,f=0;this.dispose=
function(){a.deleteFramebuffer(g);a.deleteTexture(b);void 0!==c&&a.deleteRenderbuffer(c)};this.setSize=function(d,k){if(d!==e||k!==f)e=d,f=k,a.bindTexture(a.TEXTURE_2D,b),a.texImage2D(a.TEXTURE_2D,0,h,e,f,0,h,m,null),void 0!==c&&(a.bindRenderbuffer(a.RENDERBUFFER,c),a.renderbufferStorage(a.RENDERBUFFER,a.DEPTH_COMPONENT16,e,f)),a.bindFramebuffer(a.FRAMEBUFFER,g),a.framebufferTexture2D(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,b,0),void 0!==c&&a.framebufferRenderbuffer(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,
a.RENDERBUFFER,c),l.checkFramebufferStatus(a.FRAMEBUFFER,a),void 0!==c&&a.bindRenderbuffer(a.RENDERBUFFER,null),a.bindFramebuffer(a.FRAMEBUFFER,null)};this.getWidth=function(){return e};this.getHeight=function(){return f};this.bind=function(){a.bindFramebuffer(a.FRAMEBUFFER,g)};this.getTexture=function(){return b};this.getGLName=function(){return g}}});