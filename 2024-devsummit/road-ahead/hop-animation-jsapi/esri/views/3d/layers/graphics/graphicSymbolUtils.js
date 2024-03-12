// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","./Graphics3DSymbol","./Graphics3DWebStyleSymbol"],function(b,c,d){b.getGraphics3DSymbol=function(a){return a instanceof d.Graphics3DWebStyleSymbol?a.graphics3DSymbol:a instanceof c.Graphics3DSymbol?a:null};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});