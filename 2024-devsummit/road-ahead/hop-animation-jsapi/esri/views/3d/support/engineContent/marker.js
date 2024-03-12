// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","./sdfPrimitives","../../../webgl/enums","../../../webgl/Texture","../../../webgl/TextureDescriptor"],function(a,e,d,f,g){a.createMarkerTexture=function(c,h){c=e.createPrimitive(c,64,32,6.4);const b=new g.TextureDescriptor;b.internalFormat=d.PixelFormat.RGBA;b.width=64;b.height=64;b.wrapMode=d.TextureWrapMode.CLAMP_TO_EDGE;return new f.Texture(h,b,c)};a.markerSizePerLineWidth=10;a.markerSymbolSize=32;a.markerTextureSize=64;a.markerThickness=6.4;a.markerTipThicknessFactor=.25;Object.defineProperty(a,
Symbol.toStringTag,{value:"Module"})});