// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../definitions","./AFillMeshWriter","./meshWriterUtils","../../../../../../webgl/enums"],function(c,f,g,d,b){const e={createComputedParams:a=>a,attributes:{id:{type:b.DataType.UNSIGNED_BYTE,count:3,pack:"id"},bitset:{type:b.DataType.UNSIGNED_BYTE,count:1},pos:{type:b.DataType.SHORT,count:2,pack:"position",packPrecisionFactor:10},zoomRange:{type:b.DataType.SHORT,count:2,packPrecisionFactor:f.minMaxZoomPrecisionFactor,pack:({scaleInfo:a},{tileInfo:h})=>d.getMinMaxZoom(a,h)},
color:{type:b.DataType.UNSIGNED_BYTE,count:4,normalized:!0,pack:({color:a})=>d.processColorInput(a)}}};class k extends g.AFillMeshWriter{constructor(){super(...arguments);this.vertexSpec=e}createTesselationParams(a){return null}}c.FillMeshWriter=k;c.fillVertexSpec=e;Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});