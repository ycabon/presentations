// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","./InterleavedLayout"],function(b,c){b.packInterleavedBuffer=function(a,d){d.push(a.buffer);return{buffer:a.buffer,layout:new c.PackedLayout(a.layout)}};b.unpackInterleavedBuffer=function(a){return(new c.InterleavedLayout(a.layout)).createView(a.buffer)};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});