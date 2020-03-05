// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","./isWebGL2Context"],function(d,b,c){Object.defineProperty(b,"__esModule",{value:!0});b.load=function(a){return c.default(a)?{drawArraysInstanced:a.drawArraysInstanced.bind(a),drawElementsInstanced:a.drawElementsInstanced.bind(a),vertexAttribDivisor:a.vertexAttribDivisor.bind(a)}:(a=a.getExtension("ANGLE_instanced_arrays"))?{drawArraysInstanced:a.drawArraysInstancedANGLE.bind(a),drawElementsInstanced:a.drawElementsInstancedANGLE.bind(a),vertexAttribDivisor:a.vertexAttribDivisorANGLE.bind(a)}:
null}});