// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["./utils"],function(d){const e={vsPath:"raster/rfx/vs",fsPath:"raster/rfx/aspect",attributes:new Map([["a_position",0],["a_texcoord",1]])};return{createProgram:function(a,b){return a.painter.materialManager.getProgram(e,[])},bindTextureAndUniforms:function(a,b,c){d.setSingleImageTextures(a,b,c);d.setCoordsAndTransforms(b);a=c.getRasterTextureSize();b.setUniform2fv("u_srcImageSize",a);c=c.getRasterCellSize();b.setUniform2fv("u_cellSize",c)}}});