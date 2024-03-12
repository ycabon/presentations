// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../../core/libs/gl-matrix-2/factories/vec4f64","../../shaderModules/interfaces","../../shaderModules/Texture2DPassUniform"],function(a,c,f,g){const d=c.fromValues(1,1,0,1),e=c.fromValues(1,0,1,1);a.OutputHighlight=function(b){b.fragment.uniforms.add(new g.Texture2DPassUniform("depthTexture",(k,h)=>h.mainDepth));b.fragment.constants.add("occludedHighlightFlag","vec4",d).add("unoccludedHighlightFlag","vec4",e);b.fragment.code.add(f.glsl`void outputHighlight() {
float sceneDepth = float(texelFetch(depthTexture, ivec2(gl_FragCoord.xy), 0).x);
if (gl_FragCoord.z > sceneDepth + 5e-7) {
fragColor = occludedHighlightFlag;
} else {
fragColor = unoccludedHighlightFlag;
}
}`)};a.occludedHighlightFlag=d;a.unoccludedHighlightFlag=e;Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});