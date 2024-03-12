// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../core/screenUtils"],function(g,f){g.getSymbolInfo=function(b){let c=0,d=0,e=0;if(!b)return{offsetX:c,offsetY:d,size:e};"cim"===b.type&&b.data.symbol&&"symbolLayers"in b.data.symbol&&b.data.symbol.symbolLayers&&b.data.symbol.symbolLayers.map(a=>{"CIMVectorMarker"===a.type&&a.anchorPoint&&(Math.abs(a.anchorPoint.x)>c&&(c=a.anchorPoint.x),Math.abs(a.anchorPoint.y)>d&&(d=a.anchorPoint.y),null!=a.size&&a.size>e&&(e=a.size))});c=f.pt2px(c);d=f.pt2px(d);e=f.pt2px(e);return{offsetX:c,
offsetY:d,size:e}};Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});