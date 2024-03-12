// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/has ../../../../core/Logger ../../../../chunks/vec32 ../SnappingDomain ./SnappingHint".split(" "),function(c,m,n,b,e,f){class d extends f.SnappingHint{constructor(a,g,h,k,l=e.SnappingDomain.ALL){super(k,l);this.previousVertex=a;this.centerVertex=g;this.nextVertex=h}equals(a){return a instanceof d?b.exactEquals(this.previousVertex,a.previousVertex)&&b.exactEquals(this.centerVertex,a.centerVertex)&&b.exactEquals(this.nextVertex,a.nextVertex):!1}}c.RightAngleSnappingHint=
d;Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});