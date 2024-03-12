// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../core/PooledArray"],function(a,c){class d{constructor(){this.sourceLod=[0,0,0];this.offset=[0,0];this.scale=1;this.layerIndex=0;this.isVTLBackground=!1;this.vtlNeighborInfos=new c({allocator:e=>e||new b})}}class b{constructor(){this.sourceLayerInfo=null;this.sourceLod=[0,0,0];this.offset=[-1,0]}}a.TileRenderInfo=d;a.VTLNeighhborInfo=b;Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});