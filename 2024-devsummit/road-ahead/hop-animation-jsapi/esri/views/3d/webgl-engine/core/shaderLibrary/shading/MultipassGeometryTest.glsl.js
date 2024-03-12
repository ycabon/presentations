// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../output/ReadDepth.glsl","../../shaderModules/Float2PassUniform","../../shaderModules/interfaces","../../shaderModules/Texture2DPassUniform"],function(a,d,e,f,g){class h{}a.MultipassGeometryUniforms=h;a.multipassGeometryTest=function(b){b.include(d.ReadLinearDepth);b.uniforms.add(new g.Texture2DPassUniform("geometryDepthTexture",(k,c)=>c.multipassGeometry.linearDepth?.getTexture()),new e.Float2PassUniform("nearFar",(k,c)=>c.camera.nearFar));b.code.add(f.glsl`bool geometryDepthTest(vec2 pos, float elementDepth) {
float geometryDepth = linearDepthFromTexture(geometryDepthTexture, pos, nearFar);
return (elementDepth < (geometryDepth - 1.0));
}`)};Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});