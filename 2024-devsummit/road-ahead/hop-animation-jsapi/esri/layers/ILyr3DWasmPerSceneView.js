// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports"],function(b){b.Lyr3DType=void 0;(function(a){a.U8="U8";a.I8="I8";a.U16="U16";a.I16="I16";a.U32="U32";a.I32="I32";a.F32="F32";a.F64="F64";a.Utf8String="Utf8String";a.NotSet="NotSet"})(b.Lyr3DType||(b.Lyr3DType={}));b.Lyr3DImageFormat=void 0;(function(a){a.Png="Png";a.Jpeg="Jpeg";a.Dds="Dds";a.Raw="Raw";a.Dxt1="Dxt1";a.Dxt5="Dxt5";a.Etc2="Etc2";a.Astc="Astc";a.Pvrtc="Pvrtc";a.NotSet="NotSet"})(b.Lyr3DImageFormat||(b.Lyr3DImageFormat={}));b.Lyr3DPixelFormat=void 0;(function(a){a.Rgb8=
"Rgb8";a.Rgba8="Rgba8";a.R8="R8";a.Bgr8="Bgr8";a.Bgra8="Bgra8";a.Rg8="Rg8";a.NotSet="NotSet"})(b.Lyr3DPixelFormat||(b.Lyr3DPixelFormat={}));b.Lyr3DVtxAtrbSemantic=void 0;(function(a){a.Position="Position";a.Normal="Normal";a.TexCoord="TexCoord";a.Color="Color";a.Tangent="Tangent";a.FeatureIndex="FeatureIndex";a.UvRegion="UvRegion";a.NotSet="NotSet"})(b.Lyr3DVtxAtrbSemantic||(b.Lyr3DVtxAtrbSemantic={}));b.Lyr3DAlphaMode=void 0;(function(a){a.Opaque="Opaque";a.Mask="Mask";a.Blend="Blend"})(b.Lyr3DAlphaMode||
(b.Lyr3DAlphaMode={}));b.Lyr3DTransparency=void 0;(function(a){a.None="None";a.Mask="Mask";a.Alpha="Alpha";a.PreMultAlpha="PreMultAlpha";a.NotSet="NotSet"})(b.Lyr3DTransparency||(b.Lyr3DTransparency={}));b.Lyr3DPrimitiveType=void 0;(function(a){a.Points="Points";a.Lines="Lines";a.LineStrip="LineStrip";a.Triangles="Triangles";a.TriangleStrip="TriangleStrip";a.NotSet="NotSet"})(b.Lyr3DPrimitiveType||(b.Lyr3DPrimitiveType={}));b.Lyr3DUvWrapMode=void 0;(function(a){a.None="None";a.WrapXBit="WrapXBit";
a.WrapYBit="WrapYBit";a.WrapXy="WrapXy";a.NotSet="NotSet"})(b.Lyr3DUvWrapMode||(b.Lyr3DUvWrapMode={}));b.Lyr3DMagFilterMode=void 0;(function(a){a.Linear="Linear";a.Nearest="Nearest";a.NotSet="NotSet"})(b.Lyr3DMagFilterMode||(b.Lyr3DMagFilterMode={}));b.Lyr3DMinFilterMode=void 0;(function(a){a.Linear="Linear";a.Nearest="Nearest";a.NearestMipmapNearest="NearestMipmapNearest";a.LinearMipmapNearest="LinearMipmapNearest";a.NearestMipmapLinear="NearestMipmapLinear";a.LinearMipmapLinear="LinearMipmapLinear";
a.NotSet="NotSet"})(b.Lyr3DMinFilterMode||(b.Lyr3DMinFilterMode={}));b.Lyr3DSchemaPropertySemantic=void 0;(function(a){a.FeatureId="FeatureId";a.GlobalUid="GlobalUid";a.UnspecifiedDateTime="UnspecifiedDateTime";a.EcmaIso8601DateTime="EcmaIso8601DateTime";a.EcmaIso8601DateOnly="EcmaIso8601DateOnly";a.TimeOnly="TimeOnly";a.TimeStamp="TimeStamp";a.ColorRgb="ColorRgb";a.ColorRgba="ColorRgba";a.Unrecognized="Unrecognized";a.NotSet="NotSet"})(b.Lyr3DSchemaPropertySemantic||(b.Lyr3DSchemaPropertySemantic=
{}));b.Lyr3DFeatureIndexSource=void 0;(function(a){a.Texture="Texture";a.VertexAtrb="VertexAtrb";a.Implicit="Implicit";a.NotSet="NotSet"})(b.Lyr3DFeatureIndexSource||(b.Lyr3DFeatureIndexSource={}));b.Lyr3DFaceCullingMode=void 0;(function(a){a.Front="Front";a.Back="Back";a.None="None";a.NotSet="NotSet"})(b.Lyr3DFaceCullingMode||(b.Lyr3DFaceCullingMode={}));b.Lyr3DLightingModel=void 0;(function(a){a.Pbr="Pbr";a.Unlit="Unlit"})(b.Lyr3DLightingModel||(b.Lyr3DLightingModel={}));b.Lyr3DWasmWorkerOutputStatus=
void 0;(function(a){a[a.Succeeded=0]="Succeeded";a[a.Failed=1]="Failed";a[a.MissingInputs=2]="MissingInputs"})(b.Lyr3DWasmWorkerOutputStatus||(b.Lyr3DWasmWorkerOutputStatus={}));b.invalidLayerView=-1;b.wasmFailedToInit=-2;Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});