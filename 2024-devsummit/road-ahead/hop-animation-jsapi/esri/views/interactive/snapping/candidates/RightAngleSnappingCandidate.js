// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../SnappingDomain ../snappingUtils ./SnappingCandidate ../hints/LineSnappingHint ../hints/RightAngleSnappingHint".split(" "),function(b,g,e,h,f,k){class l extends h.SnappingCandidate{constructor({targetPoint:a,constraint:c,previousVertex:d,otherVertex:m,otherVertexType:n,objectId:p,isDraped:q}){super(a,c,q,g.SnappingDomain.SELF);this.previousVertex=d;this.otherVertex=m;this.otherVertexType=n;this.objectId=p}get hints(){const a=this.previousVertex,c=this.otherVertexType===b.OtherVertexType.CENTER?
this.otherVertex:this.targetPoint,d=this.otherVertexType===b.OtherVertexType.CENTER?this.targetPoint:this.otherVertex;return[new f.LineSnappingHint(e.LineSegmentHintType.TARGET,c,d,this.isDraped,this.domain),new f.LineSnappingHint(e.LineSegmentHintType.REFERENCE,a,c,this.isDraped,this.domain),new k.RightAngleSnappingHint(this.previousVertex,c,d,this.isDraped,this.domain)]}}b.OtherVertexType=void 0;(function(a){a[a.NEXT=0]="NEXT";a[a.CENTER=1]="CENTER"})(b.OtherVertexType||(b.OtherVertexType={}));
b.RightAngleSnappingCandidate=l;Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});