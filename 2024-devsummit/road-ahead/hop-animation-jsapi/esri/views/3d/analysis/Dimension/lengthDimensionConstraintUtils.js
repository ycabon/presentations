// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../../geometry ../../../../analysis/dimensionUtils ../../../../core/has ../../../../chunks/vec32 ../../../../geometry/support/vectorStacks ./lengthDimensionManipulatorUtils ./lengthDimensionUtils ./settings ../../../../geometry/Point".split(" "),function(e,y,w,z,l,p,x,q,t,u){function v(a,b,c){const {constraint:d,elevationAlignedStartPoint:g,elevationAlignedEndPoint:h,unconstrainedGeometry:n,view:r}=c,{dimension:f,previousConstraint:m,preConstraintProperties:k}=a;if(null!=g&&
null!=h){c=()=>{"startPoint"in b?f.startPoint=b.startPoint:"endPoint"in b&&(f.endPoint=b.endPoint)};if(null==d)c(),null!=m&&null!=k&&(f.measureType=k.measureType,f.orientation=k.orientation);else switch(f.measureType=w.LengthDimensionMeasureType.Direct,d){case e.LengthDimensionConstraint.Horizontal:d!==m&&(f.orientation=0);"startPoint"in b?(c=b.startPoint,null!=c&&(c.z=h.z),f.startPoint=c):"endPoint"in b&&(c=b.endPoint,null!=c&&(c.z=g.z),f.endPoint=c);break;case e.LengthDimensionConstraint.Vertical:d!==
m&&(f.orientation=x.automaticHeadingFromCamera(n,r));"startPoint"in b?(c=b.startPoint,null!=c&&(c.x=h.x,c.y=h.y),f.startPoint=c):"endPoint"in b&&(c=b.endPoint,null!=c&&(c.x=g.x,c.y=g.y),f.endPoint=c);break;case e.LengthDimensionConstraint.Direct:d!==m&&null!=k&&(f.orientation=k.orientation),c()}a.previousConstraint=d;a.unconstrainedGeometry=n}}e.LengthDimensionConstraint=void 0;(function(a){a[a.Horizontal=0]="Horizontal";a[a.Vertical=1]="Vertical";a[a.Direct=2]="Direct"})(e.LengthDimensionConstraint||
(e.LengthDimensionConstraint={}));e.applyConstraint=v;e.computeConstraint=function(a,b){if(q.isGeodesicDimension(a))return e.LengthDimensionConstraint.Direct;if(!a.enabled)return null;({geometry:a}=a);if(null==a||l.exactEquals(a.directSegment.startRenderSpace,a.directSegment.endRenderSpace))return null;const {camera:c}=b.state;b=q.directUp(p.sv3d.get(),a,b.renderCoordsHelper);var d=q.directStartToEnd(p.sv3d.get(),a);b=l.scale(p.sv3d.get(),b,l.dot(d,b));d=l.subtract(p.sv3d.get(),d,b);d=l.squaredLength(d);
b=l.squaredLength(b);const {startRenderSpace:g,endRenderSpace:h}=a.directSegment;a=Math.max(c.computeScreenPixelSizeAt(g)*t.constraintThresholdPx,c.computeScreenPixelSizeAt(h)*t.constraintThresholdPx)**2;return d<a?e.LengthDimensionConstraint.Vertical:b<a?e.LengthDimensionConstraint.Horizontal:null};e.constraintDependencies=function(a,b){return{enabled:b.effectiveFeatureEnabled,elevationAlignedStartPoint:a.elevationAlignedStartPoint,elevationAlignedEndPoint:a.elevationAlignedEndPoint,geometry:a.geometry}};
e.reapplyConstraint=function(a,b,{constraint:c,view:d}){const {unconstrainedGeometry:g}=a;if(null!=g){var {renderCoordsHelper:h,spatialReference:n}=d,{startRenderSpace:r,endRenderSpace:f}=g.directSegment,m=h.fromRenderCoords(r,new u({spatialReference:n})),k=h.fromRenderCoords(f,new u({spatialReference:n}));v(a,"start"===b?{startPoint:m}:{endPoint:k},{constraint:c,elevationAlignedStartPoint:a.elevationAlignedStartPoint,elevationAlignedEndPoint:a.elevationAlignedEndPoint,unconstrainedGeometry:g,view:d})}};
Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});