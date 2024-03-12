// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","./BrushVectorField","../webgl/enums","../webgl/WGLContainer"],function(c,e,d,f){class g extends f{constructor(){super(...arguments);this.symbolTypes=["triangle"]}prepareRenderPasses(a){const b=a.registerRenderPass({name:"imagery (vf)",brushes:[e],target:()=>this.children,drawPhase:d.WGLDrawPhase.MAP});return[...super.prepareRenderPasses(a),b]}doRender(a){this.visible&&a.drawPhase===d.WGLDrawPhase.MAP&&this.symbolTypes.forEach(b=>{a.renderPass=b;super.doRender(a)})}}c.RasterVFContainer=
g;Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});