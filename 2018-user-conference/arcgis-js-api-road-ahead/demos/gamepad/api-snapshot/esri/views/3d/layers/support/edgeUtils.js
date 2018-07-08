// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../Color","../../../../core/screenUtils"],function(g,b,f,c){Object.defineProperty(b,"__esModule",{value:!0});b.createMaterial=function(b,a,d){a=a&&a.enabled&&a.edges;if(!a)return null;var e=f.toUnitRGBA(a.color);switch(a.type){case "solid":return b.createSolidEdgeMaterial({color:e,size:c.pt2px(a.size),extensionLength:c.pt2px(a.extensionLength),opacity:d});case "sketch":return b.createSketchEdgeMaterial({color:e,size:c.pt2px(a.size),extensionLength:c.pt2px(a.extensionLength),
opacity:d})}}});