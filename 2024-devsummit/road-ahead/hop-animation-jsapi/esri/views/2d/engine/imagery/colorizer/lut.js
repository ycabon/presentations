// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["./utils","../../../../webgl/rasterUtils"],function(f,d){const g={vsPath:"raster/common",fsPath:"raster/lut",attributes:new Map([["a_position",0],["a_texcoord",1]])};return{createProgram:function(b,a,c){a=c?[]:f.getProjectionDefines(a.transformGrid);b=b.painter.materialManager.getProgram(g,a);return{defines:a,program:b}},bindTextureAndUniforms:function(b,a,c,e,h=!1){const {names:k,textures:l}=c.getTextures({useProcessedTexture:h});d.setTextures(b.context,a,k,l);d.setUniforms(a,e,c.commonUniforms);
a.setUniformMatrix3fv("u_dvsMat3",c.transforms.displayViewScreenMat3);const {colormap:m,colormapOffset:n}=c.symbolizerParameters;b=d.getColormapUniforms(m,n);d.setUniforms(a,e,b)}}});