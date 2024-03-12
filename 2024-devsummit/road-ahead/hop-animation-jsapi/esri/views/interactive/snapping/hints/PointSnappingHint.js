// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../../chunks/vec32","./SnappingHint"],function(b,d,e){class c extends e.SnappingHint{constructor(a,f,g){super(f,g);this.point=a}equals(a){return a instanceof c?d.exactEquals(this.point,a.point):!1}}b.PointSnappingHint=c;Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});