// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","./enums","./VTLMaterial","../../../../webgl/enums","../../../../webgl/VertexElementDescriptor"],function(e,a,f,c,d){class b extends f.VTLMaterial{constructor(g){super(g)}geometryInfo(){return b.GEOMETRY_LAYOUT}opacityInfo(){return null}attributes(){return b.ATTRIBUTES}attributesInfo(){return b.ATTRIBUTES_INFO}}b.ATTRIBUTES="line-blur line-color line-gap-width line-offset line-opacity line-width line-pattern line-dasharray".split(" ");b.GEOMETRY_LAYOUT=[new d.VertexElementDescriptor("a_pos",
2,c.DataType.SHORT,0,16),new d.VertexElementDescriptor("a_extrude_offset",4,c.DataType.BYTE,4,16),new d.VertexElementDescriptor("a_dir_normal",4,c.DataType.BYTE,8,16),new d.VertexElementDescriptor("a_accumulatedDistance",2,c.DataType.UNSIGNED_SHORT,12,16)];b.ATTRIBUTES_INFO={"line-width":{name:"width",type:a.EncodingType.R8_UNSIGNED,precisionFactor:2},"line-gap-width":{name:"gap_width",type:a.EncodingType.R8_UNSIGNED,precisionFactor:2},"line-offset":{name:"offset",type:a.EncodingType.R8_SIGNED,precisionFactor:2},
"line-color":{name:"color",type:a.EncodingType.R8G8B8A8_COLOR},"line-opacity":{name:"opacity",type:a.EncodingType.R8_UNSIGNED,precisionFactor:100},"line-blur":{name:"blur",type:a.EncodingType.R8_UNSIGNED,precisionFactor:4},"line-pattern":{name:"tlbr",type:a.EncodingType.R16G16B16A16_PATTERN,isOptional:!0},"line-dasharray":{name:"tlbr",type:a.EncodingType.R16G16B16A16_DASHARRAY,isOptional:!0}};e.VTLLineMaterial=b;Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});