// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../core/has ./OverlayContent ./OverlayFramebufferObject ../webgl/ManagedFBO ../webgl-engine/core/shaderLibrary/ShaderOutput".split(" "),function(e,k,c,l,h,d){class b{constructor(a,f,g,m,n=h.ColorFormat.RGBA_MIPMAP){this.output=g;this.content=m;this.fbo=new l.OverlayFramebufferObject(a,n,f)}get valid(){return this.fbo.valid}}class p{constructor(a){this.targets=[new b(a,"overlay color",d.ShaderOutput.Color,c.OverlayContent.Color),new b(a,"overlay IM color",d.ShaderOutput.Color,
c.OverlayContent.ColorNoRasterImage),new b(a,"overlay highlight",d.ShaderOutput.Highlight,c.OverlayContent.Highlight,h.ColorFormat.RGBA4),new b(a,"overlay water",d.ShaderOutput.Normal,c.OverlayContent.WaterNormal),new b(a,"overlay occluded",d.ShaderOutput.Color,c.OverlayContent.Occluded)];k("enable-feature:objectAndLayerId-rendering")&&this.targets.push(new b(a,"overlay oid",d.ShaderOutput.ObjectAndLayerIdColor,c.OverlayContent.ObjectAndLayerIdColor))}getTexture(a){return this.targets[a]?.fbo.texture}dispose(){for(const a of this.targets)a.fbo.dispose()}computeValidity(){return this.targets.reduce((a,
f,g)=>f.valid?a|=1<<g:a,0)}}e.OverlayRenderTargets=p;e.RenderTargetDescriptor=b;Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});