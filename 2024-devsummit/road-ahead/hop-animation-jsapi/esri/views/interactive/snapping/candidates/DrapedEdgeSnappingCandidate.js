// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../sketch/constraints","../snappingUtils","./FeatureSnappingCandidate","../hints/LineSnappingHint"],function(b,c,d,e,f){class g extends e.FeatureSnappingCandidate{constructor(a){super({...a,isDraped:!0,constraint:new c.DrapedLineConstraint(a.edgeStart,a.edgeEnd,a.getGroundElevation)})}get hints(){return[new f.LineSnappingHint(d.LineSegmentHintType.REFERENCE,this.constraint.start,this.constraint.end,this.isDraped,this.domain)]}}b.DrapedEdgeSnappingCandidate=g;Object.defineProperty(b,
Symbol.toStringTag,{value:"Module"})});