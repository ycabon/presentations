// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["./BrushFlow","../webgl/enums","../webgl/WGLContainer"],function(b,c,d){class e extends d{constructor(){super(...arguments);this.flowStyle=null}doRender(a){super.doRender(a)}prepareRenderPasses(a){const f=a.registerRenderPass({name:"flow",brushes:[b],target:()=>this.children,drawPhase:c.WGLDrawPhase.MAP});return[...super.prepareRenderPasses(a),f]}}return e});