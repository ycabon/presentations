// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../core/Collection ../../core/has ../FillSymbol3DLayer ../LineSymbol3D ../MeshSymbol3D ../PointSymbol3D ../PolygonSymbol3D ../edges/SolidEdges3D ./defaults ./defaultsJSON".split(" "),function(b,e,t,f,g,h,k,l,m,a,c){const n=k.fromSimpleMarkerSymbol(a.defaultPointSymbol2D),p=g.fromSimpleLineSymbol(a.defaultPolylineSymbol2D),q=l.fromSimpleFillSymbol(a.defaultPolygonSymbol2D),r=new h({symbolLayers:new e([new f({material:{color:c.defaultColor},edges:new m({size:"1px",color:c.defaultOutlineColor})})])});
b.getDefaultSymbol3D=function(d){if(null==d)return null;switch(d.type){case "mesh":return r;case "point":case "multipoint":return n;case "polyline":return p;case "polygon":case "extent":return q}return null};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});