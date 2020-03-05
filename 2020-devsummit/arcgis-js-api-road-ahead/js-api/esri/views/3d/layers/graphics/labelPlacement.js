// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/compilerUtils ../../../../core/Logger ../../../../core/maybe ../../../../core/libs/gl-matrix-2/vec2f64 ../../../../core/libs/gl-matrix-2/vec3 ../../../../core/libs/gl-matrix-2/vec3f64 ../../../../core/libs/gl-matrix-2/vec4f64 ../../../../geometry/support/aaBoundingBox ./graphicSymbolUtils ../../webgl-engine/materials/HUDMaterial".split(" "),function(r,t,u,A,f,B,C,v,D,n,w,E){function p(a){return w.getGraphics3DSymbol(a.graphics3DGraphic.graphics3DSymbol).symbol.symbolLayers.getItemAt(0)}
function F(a,b){var c=b.graphics3DGraphic.graphic.geometry;if(f.isNone(c))return null;if(f.isSome(b.disablePlacement))return(c=b.labelClass.labelPlacement)?(h.warnOncePerTick(x(a.placement,b.disablePlacement.logEntityDescription)),m(b)):a;var d=c.type;switch(d){case "polyline":case "polygon":case "extent":case "multipoint":if(c=b.labelClass.labelPlacement)return h.warnOncePerTick(x(a.placement,"'"+d+"' geometries")),m(b);break;case "point":case "mesh":break;default:u.neverReached(d)}return a}function x(a,
b){return"the requested label placement '"+a+"' is currently unsupported for "+b+" in SceneView"}function m(a){var b=a.graphics3DGraphic.graphic.geometry;if(f.isNone(b))return null;b=b.type;switch(b){case "polyline":case "extent":case "multipoint":return{placement:"center-center",normalizedOffset:null,anchor:"center"};case "polygon":return a=p(a),f.isSome(a)&&"extrude"===a.type?g["above-center"]:{placement:"center-center",normalizedOffset:null,anchor:"center"};case "point":return g["above-center"];
case "mesh":return g["above-center"];default:u.neverReached(b)}}function q(a,b,c){c=c.graphics3DGraphic._graphics[0];c=f.isSome(c)?c.getBoundingBoxObjectSpace(k):k;c=v.vec3f64.fromValues(c[3]-c[0],c[4]-c[1],c[5]-c[2]);a.centerOffset[0]=1.1*Math.sqrt(c[0]*c[0]+c[1]*c[1])/2*b.normalizedOffset[0];var d=a.translation[2],e=c[2]/2*b.normalizedOffset[1];a.translation[2]=e*(1.1-1);a.elevationOffset=d+e;c=C.vec3.length(c);a.centerOffset[2]=1.1*c/2*b.normalizedOffset[2]}function G(a){var b=a.labelClass.labelPlacement,
c=a.labelSymbol,d=a.graphics3DGraphic,e=w.getGraphics3DSymbol(d.graphics3DSymbol).symbol;a=g[b]||m(a);if("point-3d"===e.type&&e.supportsCallout()&&e.hasVisibleVerticalOffset()&&!d.isDraped)return{placement:null,hasLabelVerticalOffset:!1,verticalOffset:y(e.verticalOffset),anchor:null,normalizedOffset:null};if(c&&c.hasVisibleVerticalOffset()&&("point-3d"!==e.type||!e.supportsCallout()||!e.verticalOffset||d.isDraped)){a:switch(a.placement){case "above-center":d=!0;break a;default:d=!1}return d?{placement:"above-center",
verticalOffset:y(c.verticalOffset),anchor:"bottom",normalizedOffset:[0,a.normalizedOffset[1],0],hasLabelVerticalOffset:!0}:(h.errorOncePerTick("Callouts and vertical offset on labels are currently only supported with 'above-center' label placement (not with "+b+" placement)"),null)}return{placement:null,verticalOffset:null,anchor:null,normalizedOffset:null,hasLabelVerticalOffset:!1}}function y(a){return{screenLength:a.screenLength,minWorldLength:a.minWorldLength,maxWorldLength:a.maxWorldLength}}Object.defineProperty(t,
"__esModule",{value:!0});var h=A.getLogger("esri.views.3d.layers.graphics.labelPlacement");t.get=function(a){var b=G(a);if(f.isNone(b))return null;var c;if(b.anchor)c=b;else{c=a.labelClass.labelPlacement;var d=g[c],e=d||m(a);c&&!d&&h.warnOncePerTick("the requested label placement '"+c+"' is not currently supported in SceneView");c=F(e,a)}if(f.isNone(c))return null;d=!!b.hasLabelVerticalOffset;b={anchor:c.anchor,verticalOffset:b.verticalOffset,screenOffset:B.vec2f64.create(),centerOffset:D.vec4f64.fromValues(0,
0,0,-1),centerOffsetUnits:"world",translation:v.vec3f64.create(),elevationOffset:0,hasLabelVerticalOffset:d};d=a.graphics3DGraphic.graphic.geometry;if(f.isNone(d))a=null;else{switch(d.type){case "point":d=p(a);if(!f.isNone(d))switch(a.graphics3DGraphic.getCenterObjectSpace(b.translation),d.type){case "icon":case "text":e=a.graphics3DGraphic;d=e._graphics[0];d=f.isSome(d)?d.getScreenSize():null;!e.isDraped&&f.isSome(d)?(e=void 0,void 0===e&&(e=H),a=a.graphics3DGraphic._graphics[0],(a=f.isSome(a)?a.stageObject.geometryRecords[0].material:
null)&&a instanceof E?(a=a.getParameters().anchorPos,e[0]=2*(a[0]-.5),e[1]=2*(a[1]-.5)):(e[0]=0,e[1]=0),a=e,l[0]=d[0]/2*(c.normalizedOffset[0]-a[0]),l[1]=d[1]/2*(c.normalizedOffset[1]-a[1]),b.screenOffset[0]=l[0],b.hasLabelVerticalOffset?(b.centerOffset[1]=l[1],b.centerOffsetUnits="screen"):b.screenOffset[1]=l[1]):b.hasLabelVerticalOffset||"center"===b.anchor||(g[a.labelClass.labelPlacement]&&h.warnOncePerTick("the requested placement '"+c.placement+"' is currently unsupported for draped graphics"),
b.anchor="center");break;case "object":q(b,c,a)}break;case "polygon":d=p(a);if(!f.isNone(d))switch(d.type){case "extrude":d=a.graphics3DGraphic._graphics[0],f.isSome(d)&&d.getBoundingBoxObjectSpace(k),n.center(k,b.translation),b.translation[2]=n.height(k)/2,q(b,c,a)}break;case "mesh":q(b,c,a)}a=b}return a};var g={"above-center":{placement:"above-center",normalizedOffset:[0,1,0],anchor:"bottom"},"above-left":{placement:"above-left",normalizedOffset:[-1,1,0],anchor:"bottom-right"},"above-right":{placement:"above-right",
normalizedOffset:[1,1,0],anchor:"bottom-left"},"below-center":{placement:"below-center",normalizedOffset:[0,-1,2],anchor:"top"},"below-left":{placement:"below-left",normalizedOffset:[-1,-1,0],anchor:"top-right"},"below-right":{placement:"below-right",normalizedOffset:[1,-1,0],anchor:"top-left"},"center-center":{placement:"center-center",normalizedOffset:[0,0,1],anchor:"center"},"center-left":{placement:"center-left",normalizedOffset:[-1,0,0],anchor:"right"},"center-right":{placement:"center-right",
normalizedOffset:[1,0,0],anchor:"left"}},z={"above-center":["default","esriServerPointLabelPlacementAboveCenter"],"above-left":["esriServerPointLabelPlacementAboveLeft"],"above-right":["esriServerPointLabelPlacementAboveRight"],"below-center":["esriServerPointLabelPlacementBelowCenter"],"below-left":["esriServerPointLabelPlacementBelowLeft"],"below-right":["esriServerPointLabelPlacementBelowRight"],"center-center":["esriServerPointLabelPlacementCenterCenter"],"center-left":["esriServerPointLabelPlacementCenterLeft"],
"center-right":["esriServerPointLabelPlacementCenterRight"]};r=function(a){var b=g[a];z[a].forEach(function(a){g[a]=b})};for(var I in z)r(I);Object.freeze&&(Object.freeze(g),Object.keys(g).forEach(function(a){Object.freeze(g[a]);Object.freeze(g[a].normalizedOffset)}));var l=[0,0],H=[0,0],k=n.create()});