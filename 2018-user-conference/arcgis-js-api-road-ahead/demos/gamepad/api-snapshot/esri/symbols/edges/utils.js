// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["require","exports","./Edges3D","./SketchEdges3D","./SolidEdges3D"],function(h,a,g,d,e){function f(c,b,a){if(!c)return c;switch(c.type){case "solid":return b=new e,b.read(c,a),b;case "sketch":return b=new d,b.read(c,a),b}}Object.defineProperty(a,"__esModule",{value:!0});a.read=f;a.symbol3dEdgesProperty={types:{key:"type",base:g,typeMap:{solid:e,sketch:d}},json:{read:f,write:!0}}});