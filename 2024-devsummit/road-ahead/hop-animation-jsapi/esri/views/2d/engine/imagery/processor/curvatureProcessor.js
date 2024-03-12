// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["./utils"],function(e){const f={vsPath:"raster/rfx/vs",fsPath:"raster/rfx/curvature",attributes:new Map([["a_position",0],["a_texcoord",1]])};return{createProgram:function(a,c){const {painter:b,rasterFunction:d}=a;({curvatureType:a}=d.parameters);return b.materialManager.getProgram(f,[a])},bindTextureAndUniforms:function(a,c,b){e.setSingleImageTextures(a,c,b);e.setCoordsAndTransforms(c);const d=b.getRasterTextureSize();c.setUniform2fv("u_srcImageSize",d);({zFactor:a}=a.rasterFunction.parameters);
b=b.getRasterCellSize();c.setUniform1f("u_zlFactor",200*a/b[0]/b[1])}}});