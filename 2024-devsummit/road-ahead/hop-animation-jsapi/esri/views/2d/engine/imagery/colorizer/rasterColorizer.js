// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","./lut","./shadedrelief","./stretch"],function(b,c,d,e){const a=new Map;a.set("lut",c);a.set("hillshade",d);a.set("stretch",e);b.getColorizer=function(f){return a.get(f)};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});