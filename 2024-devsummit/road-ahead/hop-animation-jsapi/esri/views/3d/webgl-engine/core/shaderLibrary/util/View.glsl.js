// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../core/libs/gl-matrix-2/math/mat4 ../../../../../../core/libs/gl-matrix-2/factories/mat4f64 ../../../../../../chunks/vec32 ../../../../../../core/libs/gl-matrix-2/factories/vec3f64 ../../shaderModules/Float3DrawUniform ../../shaderModules/Float3PassUniform ../../shaderModules/FloatPassUniform ../../shaderModules/Matrix4DrawUniform ../../shaderModules/Matrix4PassUniform".split(" "),function(d,k,p,g,l,m,q,r,t,f){const n=p.create(),h=l.create();d.addCameraPosition=function(c,
e){e.instancedDoublePrecision?c.constants.add("cameraPosition","vec3",l.ZEROS):c.uniforms.add(new m.Float3DrawUniform("cameraPosition",(b,a)=>g.set(h,a.camera.viewInverseTransposeMatrix[3]-b.origin[0],a.camera.viewInverseTransposeMatrix[7]-b.origin[1],a.camera.viewInverseTransposeMatrix[11]-b.origin[2])))};d.addPixelRatio=function(c){c.uniforms.add(new r.FloatPassUniform("pixelRatio",(e,b)=>b.camera.pixelRatio/b.overlayStretch))};d.addProjViewLocalOrigin=function(c,e){e.instancedDoublePrecision?c.uniforms.add(new f.Matrix4PassUniform("proj",
(b,a)=>a.camera.projectionMatrix),new f.Matrix4PassUniform("view",(b,a)=>k.translate(n,a.camera.viewMatrix,g.set(h,a.camera.viewInverseTransposeMatrix[3],a.camera.viewInverseTransposeMatrix[7],a.camera.viewInverseTransposeMatrix[11]))),new q.Float3PassUniform("localOrigin",(b,a)=>g.set(h,a.camera.viewInverseTransposeMatrix[3],a.camera.viewInverseTransposeMatrix[7],a.camera.viewInverseTransposeMatrix[11]))):c.uniforms.add(new f.Matrix4PassUniform("proj",(b,a)=>a.camera.projectionMatrix),new t.Matrix4DrawUniform("view",
(b,a)=>k.translate(n,a.camera.viewMatrix,b.origin)),new m.Float3DrawUniform("localOrigin",b=>b.origin))};d.addViewNormal=function(c){c.uniforms.add(new f.Matrix4PassUniform("viewNormal",(e,b)=>b.camera.viewInverseTransposeMatrix))};Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});