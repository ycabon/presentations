// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["./utils"],function(c){const d={vsPath:"raster/rfx/vs",fsPath:"raster/rfx/remap",attributes:new Map([["a_position",0],["a_texcoord",1]])};return{createProgram:function(b,a){return b.painter.materialManager.getProgram(d,[])},bindTextureAndUniforms:function(b,a,e){c.setSingleImageTextures(b,a,e);c.setCoordsAndTransforms(a);const {noDataRanges:f,rangeMaps:g,allowUnmatched:h,clampRange:k}=b.rasterFunction.parameters;a.setUniform1fv("u_noDataRanges",f);a.setUniform1fv("u_rangeMaps",g);a.setUniform1f("u_unmatchMask",
h?1:0);a.setUniform2fv("u_clampRange",k)}}});