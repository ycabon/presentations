// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","./isWebGL2Context"],function(d,b,c){Object.defineProperty(b,"__esModule",{value:!0});b.load=function(a,b){return c.default(a)?{createVertexArray:a.createVertexArray.bind(a),deleteVertexArray:a.deleteVertexArray.bind(a),bindVertexArray:a.bindVertexArray.bind(a)}:b.vao?null:(a=a.getExtension("OES_vertex_array_object")||a.getExtension("MOZ_OES_vertex_array_object")||a.getExtension("WEBKIT_OES_vertex_array_object"))?{createVertexArray:a.createVertexArrayOES.bind(a),deleteVertexArray:a.deleteVertexArrayOES.bind(a),
bindVertexArray:a.bindVertexArrayOES.bind(a)}:null}});