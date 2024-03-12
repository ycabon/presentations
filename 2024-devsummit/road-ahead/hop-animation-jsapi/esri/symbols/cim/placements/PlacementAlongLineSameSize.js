// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../CIMCursor","../enums","../GeometryWalker"],function(g,h,d,f){class e{static local(){null===e.instance&&(e.instance=new e);return e.instance}execute(b,a,c,l,m){return new k(b,a,c)}}e.instance=null;class k extends h.PathTransformationCursor{constructor(b,a,c){super(b);this._geometryWalker=new f.GeometryWalker;this._geometryWalker.updateTolerance(c);this._angleToLine=a.angleToLine??!0;this._offset=(a.offset?a.offset:0)*c;this._originalEndings=a.endings;this._offsetAtEnd=(a.customEndingOffset?
a.customEndingOffset:0)*c;this._position=-(a.offsetAlongLine?a.offsetAlongLine:0)*c;this._pattern=new f.DashPattern;this._pattern.init(a.placementTemplate,!1);this._pattern.scale(c);this._endings=this._originalEndings}processPath(b){if(this._pattern.isEmpty())return null;if(this.iteratePath)var a=this._pattern.nextValue();else{this._endings=this._originalEndings===d.PlacementEndings.WithFullGap&&this.isClosed?d.PlacementEndings.WithMarkers:this._originalEndings;this._pattern.extPtGap=0;let c=!0;switch(this._endings){case d.PlacementEndings.NoConstraint:a=
-this._position;a=this._adjustPosition(a);c=!1;break;default:a=-this._pattern.lastValue()/2;break;case d.PlacementEndings.WithFullGap:a=-this._pattern.lastValue();this._pattern.extPtGap=this._pattern.lastValue();break;case d.PlacementEndings.WithMarkers:a=0;break;case d.PlacementEndings.Custom:a=-this._position,a=this._adjustPosition(a),this._pattern.extPtGap=.5*this._offsetAtEnd}if(!this._geometryWalker.init(b,this._pattern,c))return null;this._pattern.reset();for(b=0;a>b;)a-=b,b=this._pattern.nextValue();
a=b-a;this.iteratePath=!0}b=new f.Pos;if(!this._geometryWalker.nextPointAndAngle(a,b)||this._endings===d.PlacementEndings.WithFullGap&&this._geometryWalker.isPathEnd())return this.iteratePath=!1,null;if(this._endings===d.PlacementEndings.WithMarkers&&this._geometryWalker.isPathEnd()&&(this.iteratePath=!1,this.isClosed))return null;this.internalPlacement.setTranslate(b.pt[0]-this._offset*b.sa,b.pt[1]+this._offset*b.ca);this._angleToLine&&this.internalPlacement.setRotateCS(b.ca,b.sa);return this.internalPlacement}_adjustPosition(b){b/=
this._pattern.length();b-=Math.floor(b);return b*this._pattern.length()}}g.PlacementAlongLineSameSize=e;Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});