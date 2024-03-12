// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["./utils"],function(e){const f={vsPath:"raster/rfx/vs",fsPath:"raster/rfx/mask",attributes:new Map([["a_position",0],["a_texcoord",1]])};return{createProgram:function(b,a){const {painter:c,rasterFunction:d}=b;return c.materialManager.getProgram(f,1<d.parameters.bandCount?["multiBand"]:[])},bindTextureAndUniforms:function(b,a,c){e.setSingleImageTextures(b,a,c);e.setCoordsAndTransforms(a);const {includedRanges:d,noDataValues:g}=b.rasterFunction.parameters;a.setUniform1fv("u_includedRanges",
d);a.setUniform1fv("u_noDataValues",g)}}});