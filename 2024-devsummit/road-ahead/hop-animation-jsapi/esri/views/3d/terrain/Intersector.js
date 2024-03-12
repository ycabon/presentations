// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../webgl-engine/lib/IntersectorInterfaces","../webgl-engine/lib/IntersectorTarget","../webgl-engine/lib/intersectorUtils"],function(b,c,e,d){class f extends e.Graphic3DTarget{constructor(a,g,h){super(a,g);this.triangleNr=h}}b.OverlayTarget=f;b.isOverlayIntersectorResult=function(a){return d.isValidIntersectorResult(a)&&a.intersector===c.IntersectorType.OVERLAY&&!!a.target};b.isTerrainIntersectorResult=function(a){return d.isValidIntersectorResult(a)&&a.intersector===c.IntersectorType.TERRAIN&&
!!a.target};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});