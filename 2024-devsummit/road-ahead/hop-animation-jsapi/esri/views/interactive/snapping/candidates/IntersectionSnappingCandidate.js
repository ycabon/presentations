// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../sketch/constraints","../SnappingDomain","./SnappingCandidate","../hints/IntersectionSnappingHint"],function(a,c,d,e,f){class g extends e.SnappingCandidate{constructor(b,h,k,l){super(b,new c.PointConstraint(b),l,d.SnappingDomain.ALL);this.first=h;this.second=k}get hints(){this.first.targetPoint=this.targetPoint;this.second.targetPoint=this.targetPoint;return[...this.first.hints,...this.second.hints,new f.IntersectionSnappingHint(this.targetPoint,this.isDraped,this.domain)]}}
a.IntersectionSnappingCandidate=g;Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});