// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["require","exports","./previewSymbol2D","./previewSymbol3D","./previewWebStyleSymbol"],function(h,c,e,f,g){function d(a,b){switch(a.type){case "web-style":return g.previewWebStyleSymbol(a,d,b);case "label-3d":case "line-3d":case "mesh-3d":case "point-3d":case "polygon-3d":return f.previewSymbol3D(a,b);default:return e.previewSymbol2D(a,b)}}Object.defineProperty(c,"__esModule",{value:!0});c.renderPreviewHTML=d});