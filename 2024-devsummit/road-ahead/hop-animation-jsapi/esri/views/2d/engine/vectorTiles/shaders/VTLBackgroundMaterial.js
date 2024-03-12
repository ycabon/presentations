// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","./VTLMaterial","../../../../webgl/enums","../../../../webgl/VertexElementDescriptor"],function(b,c,d,e){class a extends c.VTLMaterial{constructor(f){super(f)}geometryInfo(){return a.GEOMETRY_LAYOUT}opacityInfo(){return null}attributes(){return a.ATTRIBUTES}attributesInfo(){return a.ATTRIBUTES_INFO}}a.ATTRIBUTES=[];a.GEOMETRY_LAYOUT=[new e.VertexElementDescriptor("a_pos",2,d.DataType.BYTE,0,2)];a.ATTRIBUTES_INFO={};b.VTLBackgroundMaterial=a;Object.defineProperty(b,Symbol.toStringTag,
{value:"Module"})});