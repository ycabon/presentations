// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../Graphic ../../geometry/Mesh ../../geometry/support/MeshMaterial ../../geometry/support/MeshTexture ./constants".split(" "),function(c,g,h,k,l,e){c.createImageSphere=function(a,f=e.defaultImageSphereCenter,d=e.defaultImageSphereSize){a=h.createSphere(f,{size:d,densificationFactor:2,geographic:!1,material:new k({colorTexture:new l({data:a})})});a.components[0].trustSourceNormals=!0;if(a.vertexAttributes.uv){d=a.vertexAttributes.uv.length??0;for(let b=0;b<d;b++)a.vertexAttributes.uv[2*
b]=1-a.vertexAttributes.uv[2*b],a.vertexAttributes.uv[2*b+1]=a.vertexAttributes.uv[2*b+1]}a.centerAt(f);return a};c.meshToGraphic=function(a){return new g({geometry:a,symbol:{type:"mesh-3d",symbolLayers:[{type:"fill"}]}})};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});