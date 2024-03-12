// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../../analysis/dimensionUtils ../../../../core/mathUtils ../../../../core/quantityUtils ../../../../core/unitUtils ../../../../core/libs/gl-matrix-2/math/mat4 ../../../../core/libs/gl-matrix-2/factories/mat4f64 ../../../../chunks/vec32 ../../../../core/libs/gl-matrix-2/factories/vec3f64 ../../../../geometry/support/Axis ../../../../geometry/support/vectorStacks ../../../../layers/graphics/dehydratedPoint ../../../../layers/graphics/hydratedFeatures ../../interactive/visualElements/support/Segment ../../../support/automaticLengthMeasurementUtils ../../../support/euclideanLengthMeasurementUtils ../../../support/geodesicMeasurementUtils".split(" "),
function(g,p,z,A,B,C,H,d,u,I,m,J,K,w,L,D,M){function E(a,c,b){b.toRenderCoords(c.elevationAlignedStartPoint,a.startRenderSpace);b.toRenderCoords(c.elevationAlignedEndPoint,a.endRenderSpace);return a}function x(a,c){const {measureType:b,elevationAlignedStartPoint:e,elevationAlignedEndPoint:f,directSegment:{startRenderSpace:h,endRenderSpace:k},directSegment:n,renderCoordsHelper:r}=c;var q=n.eval(.5,m.sv3d.get()),l=r.worldUpAtPosition(q,m.sv3d.get());q=r.worldBasisAtPosition(q,I.Axis.Y,m.sv3d.get());
switch(b){case p.LengthDimensionMeasureType.Horizontal:d.copy(a,l);break;case p.LengthDimensionMeasureType.Vertical:d.dot(h,l)<d.dot(k,l)?d.sub(a,k,h):d.sub(a,h,k);d.cross(a,a,l);d.cross(a,a,l);break;case p.LengthDimensionMeasureType.Direct:if(c=c.orientation??0,y({elevationAlignedStartPoint:e,elevationAlignedEndPoint:f}))C.fromRotation(v,-z.deg2rad(c),l),d.transformMat4(a,q,v);else{const t=d.sub(m.sv3d.get(),k,h);l=d.cross(m.sv3d.get(),t,l);d.cross(l,l,t);C.fromRotation(v,z.deg2rad(c),t);d.transformMat4(a,
l,v)}}return d.equals(a,u.ZEROS)?d.copy(a,q):d.normalize(a,a)}function y({elevationAlignedStartPoint:a,elevationAlignedEndPoint:c}){return null!=a&&null!=c&&a.x===c.x&&a.y===c.y}function F(a,c){const {offsetAxis:b,offset:e,relativeToSegment:{startRenderSpace:f,endRenderSpace:h},relativeToSegment:k,renderCoordsHelper:n}=c,[r,q]=N(f,h,b,e/n.unitInMeters);d.scaleAndAdd(a.startRenderSpace,k.startRenderSpace,b,r);d.scaleAndAdd(a.endRenderSpace,k.endRenderSpace,b,q);return a}function N(a,c,b,e=0){c=d.dot(c,
b);a=d.dot(a,b);b=Math.abs(c-a)+e;return c>a?[b,e]:[e,b]}function G(a,c,b={invert:!1}){const {startRenderSpace:e,endRenderSpace:f}=c.dimensionSegment;return b.invert?d.sub(a,e,f):d.sub(a,f,e)}g.OffsetSegmentLocation=void 0;(function(a){a[a.Start=0]="Start";a[a.End=1]="End"})(g.OffsetSegmentLocation||(g.OffsetSegmentLocation={}));const O=J.makeDehydratedPoint(0,0,0,null),P=new w.EuclideanSegment,v=H.create(),Q=u.create();g.arePointsVerticallyAligned=y;g.computationToGeometryDependencies=function(a){const {elevationAlignedStartPoint:c,
elevationAlignedEndPoint:b,dimension:{offset:e,measureType:f,orientation:h}}=a;return{elevationAlignedStartPoint:c,elevationAlignedEndPoint:b,offset:e,measureType:f,orientation:h}};g.computeGeometryFromDimension=function({elevationAlignedStartPoint:a,elevationAlignedEndPoint:c,offset:b,measureType:e,orientation:f},h,k=null){if(null==a||null==c)return null;const n=E(null!=k?k.directSegment:new w.EuclideanSegment,{elevationAlignedStartPoint:a,elevationAlignedEndPoint:c},h),r=null!=k?k.primaryOffsetAxis:
u.create();x(r,{measureType:e,elevationAlignedStartPoint:a,elevationAlignedEndPoint:c,directSegment:n,orientation:f,renderCoordsHelper:h});f=null!=k?k.dimensionSegment:new w.EuclideanSegment;y({elevationAlignedStartPoint:a,elevationAlignedEndPoint:c})&&e===p.LengthDimensionMeasureType.Vertical?(d.copy(f.startRenderSpace,n.startRenderSpace),d.copy(f.endRenderSpace,n.endRenderSpace)):F(f,{offsetAxis:r,offset:b,relativeToSegment:n,renderCoordsHelper:h});return{directSegment:n,dimensionSegment:f,primaryOffsetAxis:r,
spatialReference:h.spatialReference}};g.computeLength=function(a,c,b){if(null==a)return null;const e=a.dimensionSegment.startRenderSpace,f=a.dimensionSegment.endRenderSpace;a=c===p.LengthDimensionMeasureType.Horizontal?L.autoDistance2D(e,f,a.spatialReference):D.euclideanDirectDistance(e,f,a.spatialReference);if(null==a)return null;c=c===p.LengthDimensionMeasureType.Vertical?B.adaptiveVerticalLengthUnit(a.value,a.unit,b):B.adaptiveLengthUnit(a.value,a.unit,b);return A.toUnit(a,c)};g.computeOffsetAxis=
x;g.computeOffsetForPoint=function(a,c,b,e){({directSegment:b}=b);c=x(m.sv3d.get(),{measureType:c,directSegment:b,renderCoordsHelper:e});b=F(P,{offsetAxis:c,offset:0,relativeToSegment:b,renderCoordsHelper:e}).eval(.5,m.sv3d.get());a=d.sub(m.sv3d.get(),a,b);return d.dot(a,c)*e.unitInMeters};g.computeSegmentForMeasureType=function(a,c,b,e){switch(c){case p.LengthDimensionMeasureType.Direct:return E(a,b,e);case p.LengthDimensionMeasureType.Horizontal:case p.LengthDimensionMeasureType.Vertical:const {elevationAlignedStartPoint:k,
elevationAlignedEndPoint:n,dimension:r,geometry:q}=b;if(r.measureType===p.LengthDimensionMeasureType.Direct){var f=q,h=f.directSegment.eval(.5,m.sv3d.get());b=e.worldUpAtPosition(h,m.sv3d.get());f=f.dimensionSegment.eval(.5,m.sv3d.get());h=d.sub(m.sv3d.get(),f,h);b=d.equals(h,u.ZEROS)?!1:0<d.dot(h,b);b=b===k.z>n.z;c===p.LengthDimensionMeasureType.Horizontal&&(b=!b)}else{const {startRenderSpace:R,endRenderSpace:S}=q.dimensionSegment,{startRenderSpace:T,endRenderSpace:U}=q.directSegment;b=!(d.sqrDist(T,
R)<d.sqrDist(U,S))}const [l,t]=b?[k,n]:[n,k];b=K.clonePoint(t,O);c===p.LengthDimensionMeasureType.Horizontal?b.z=l.z:(b.x=l.x,b.y=l.y);e.toRenderCoords(l,a.startRenderSpace);e.toRenderCoords(b,a.endRenderSpace);return a}};g.computeSpanningSegment=function(a,c,b,e){c===g.OffsetSegmentLocation.Start?(d.copy(a.startRenderSpace,b.startRenderSpace),d.copy(a.endRenderSpace,e.startRenderSpace)):(d.copy(a.startRenderSpace,b.endRenderSpace),d.copy(a.endRenderSpace,e.endRenderSpace));return a};g.dimensionStartToEnd=
G;g.directStartToEnd=function(a,c){const {startRenderSpace:b,endRenderSpace:e}=c.directSegment;return d.sub(a,e,b)};g.directUp=function(a,c,b){c=c.directSegment.eval(.5,m.sv3d.get());return b.worldUpAtPosition(c,a)};g.headingFromGeometry=function(a,c){const b=a.directSegment.eval(.5,m.sv3d.get());return c.headingAtPosition(b,a.primaryOffsetAxis)};g.isGeodesicDimension=function(a){const {elevationAlignedStartPoint:c,elevationAlignedEndPoint:b}=a;if(null==c||null==b)return!1;a=D.euclideanDirectDistanceBetweenPoints(c,
b);return null!=a&&A.toUnit(a,"meters").value>M.geodesicDistanceThreshold};g.isValidComputation=function(a){return null!=a.geometry};g.maxScreenLengthSquaredFromGeometry=function(a,c){return d.squaredLength(G(Q,a))/c**2};g.offsetSegment=function(a,c,b,e){d.scaleAndAdd(a.startRenderSpace,c.startRenderSpace,b,e);d.scaleAndAdd(a.endRenderSpace,c.endRenderSpace,b,e)};Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});