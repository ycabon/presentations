// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","./MemoryBuffer"],function(a,d){class e extends d{constructor(){super(12)}add(b,f,g){const c=this.array;c.push(b);c.push(f);c.push(g)}}class h extends d{constructor(){super(4)}add(b){this.array.push(b)}}a.PointElementMemoryBuffer=h;a.TriangleIndexBuffer=e;Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});