// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../sketch/constraints","./FeatureSnappingCandidate","../hints/PointSnappingHint"],function(a,c,d,e){class f extends d.FeatureSnappingCandidate{constructor(b){super({...b,constraint:new c.PointConstraint(b.targetPoint)})}get hints(){return[new e.PointSnappingHint(this.targetPoint,this.isDraped,this.domain)]}}a.VertexSnappingCandidate=f;Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});