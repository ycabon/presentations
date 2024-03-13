// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../../../../../core/has ../BitBlitRenderer ./Effect ./highlight/HighlightRenderer ./highlight/HighlightSurfaces ../../../../webgl/enums".split(" "),function(p,f,g,h,k,l){class m extends g.Effect{constructor(){super(...arguments);this.defines=["highlight"];this._hlRenderer=new h;this._height=this._width=void 0;this._boundFBO=null;this._hlSurfaces=new k;this._adjustedHeight=this._adjustedWidth=void 0;this._blitRenderer=new f.BitBlitRenderer}dispose(){this._hlSurfaces?.dispose();this._hlRenderer?.dispose();
this._boundFBO=null}bind(c){const {context:a,painter:b}=c,{width:d,height:e}=a.getViewport(),n=b.getFbos().effect0;this.setup(c,d,e);a.bindFramebuffer(n);a.setColorMask(!0,!0,!0,!0);a.setClearColor(0,0,0,0);a.clear(a.gl.COLOR_BUFFER_BIT)}unbind(){}setup({context:c},a,b){this._width=a;this._height=b;const d=a%4,e=b%4;a+=2>d?-d:4-d;b+=2>e?-e:4-e;this._adjustedWidth=a;this._adjustedHeight=b;this._boundFBO=c.getBoundFramebufferObject();a=Math.round(1*a);b=Math.round(1*b);this._hlRenderer.setup(c,a,b);
this._hlSurfaces.setup(c,a,b)}draw(c){const {context:a,passOptions:b}=c;c=b.activeGradient;const d=a.getBoundFramebufferObject();a.setViewport(0,0,1*this._adjustedWidth,1*this._adjustedHeight);a.bindFramebuffer(this._hlSurfaces.sharedBlur1Fbo);a.setStencilTestEnabled(!1);a.setClearColor(0,0,0,0);a.clear(a.gl.COLOR_BUFFER_BIT);this._blitRenderer.render(a,d.colorTexture,l.TextureSamplingMode.NEAREST,1);a.setStencilTestEnabled(!1);a.setBlendingEnabled(!1);a.setColorMask(!1,!1,!1,!0);a.bindFramebuffer(this._hlSurfaces.sharedBlur2Fbo);
a.setClearColor(0,0,0,0);a.clear(a.gl.COLOR_BUFFER_BIT);this._hlRenderer.preBlur(a,this._hlSurfaces.sharedBlur1Tex);a.bindFramebuffer(this._hlSurfaces.sharedBlur1Fbo);a.setClearColor(0,0,0,0);a.clear(a.gl.COLOR_BUFFER_BIT);this._hlRenderer.finalBlur(a,this._hlSurfaces.sharedBlur2Tex);a.bindFramebuffer(this._boundFBO);a.setBlendingEnabled(!0);a.setColorMask(!0,!0,!0,!0);a.setViewport(0,0,this._width,this._height);this._hlRenderer.renderHighlight(a,this._hlSurfaces.sharedBlur1Tex,c);this._boundFBO=
null}}return m});