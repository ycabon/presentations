// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["./utils"],function(f){const g={vsPath:"raster/rfx/vs",fsPath:"raster/rfx/convolution",attributes:new Map([["a_position",0],["a_texcoord",1]])};return{createProgram:function(c,a){const {painter:b,rasterFunction:d}=c,{kernelRows:e,kernelCols:h}=d.parameters;return b.materialManager.getProgram(g,[{name:"rows",value:e},{name:"cols",value:h}])},bindTextureAndUniforms:function(c,a,b){f.setSingleImageTextures(c,a,b);f.setCoordsAndTransforms(a);a.setUniform2fv("u_srcImageSize",[b.width,b.height]);
const {kernel:d,clampRange:e}=c.rasterFunction.parameters;a.setUniform1fv("u_kernel",d);a.setUniform2fv("u_clampRange",e)}}});