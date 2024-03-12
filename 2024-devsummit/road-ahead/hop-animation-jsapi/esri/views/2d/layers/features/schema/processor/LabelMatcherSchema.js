// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../../layers/support/labelingInfo","../../layerAdapters/geometryUtils","./symbols/SymbolSchema"],function(e,f,g,h){async function k(b,a,d,c){b=await h.createSymbolMeshSchemas(a,{path:`${d}`,schemaOptions:b,uniforms:c});return{maxScale:a.maxScale,minScale:a.minScale,expression:a.labelExpressionInfo?.expression??a.labelExpression,where:a.where,meshes:b}}e.createLabelMatcherSchema=async function(b,a,d){var c=a.labelsVisible&&a.labelingInfo||[];a=g.getEffectiveGeometryType(a);
c=f.validateLabelingInfo(c,a);return{type:"label",classes:await Promise.all(c.map((l,m)=>k(b,l,m,d)))}};Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});