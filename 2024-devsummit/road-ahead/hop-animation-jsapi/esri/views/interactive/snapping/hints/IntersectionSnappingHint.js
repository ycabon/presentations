// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../../chunks/vec32","../SnappingDomain","./SnappingHint"],function(b,d,e,f){class c extends f.SnappingHint{constructor(a,g,h=e.SnappingDomain.ALL){super(g,h);this.intersectionPoint=a}equals(a){return a instanceof c?d.exactEquals(this.intersectionPoint,a.intersectionPoint):!1}}b.IntersectionSnappingHint=c;Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});