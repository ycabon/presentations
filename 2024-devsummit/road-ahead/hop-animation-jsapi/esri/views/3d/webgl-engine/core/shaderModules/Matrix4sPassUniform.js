// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","./Uniform","../shaderTechnique/BindType"],function(a,c,d){class e extends c.Uniform{constructor(b,f,g){super(b,"mat4",d.BindType.Pass,(h,k,l)=>h.setUniformMatrix4fv(b,f(k,l)),g)}}a.Matrix4sPassUniform=e;Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});