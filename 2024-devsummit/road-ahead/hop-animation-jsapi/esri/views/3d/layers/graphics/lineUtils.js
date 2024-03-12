// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../../core/has","../../webgl-engine/shaders/RibbonLineTechniqueConfiguration"],function(b,d,c){b.parseCapType=function(a){switch(a){case "butt":return c.CapType.BUTT;case "square":return c.CapType.SQUARE;case "round":return c.CapType.ROUND;default:return null}};b.parseLineMarkerStyle=function(a){return"diamond"===a?"kite":a};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});