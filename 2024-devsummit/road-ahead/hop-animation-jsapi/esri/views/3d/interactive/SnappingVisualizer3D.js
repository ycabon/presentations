// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../Color ../../../core/colorUtils ../../../core/has ../../../core/handleUtils ../../../chunks/vec32 ../../../core/libs/gl-matrix-2/factories/vec3f64 ../../../geometry/projection/projectVectorToVector ../../../support/elevationInfoUtils ./visualElements/ExtendedLineVisualElement ./visualElements/ParallelLineVisualElement ./visualElements/PointVisualElement ./visualElements/RightAngleQuadVisualElement ../layers/interfaces ../webgl-engine/lib/Material ../../interactive/sketch/normalizedPoint ../../interactive/snapping/Settings ../../interactive/snapping/SnappingDomain ../../interactive/snapping/snappingUtils ../../interactive/snapping/SnappingVisualizer ../../interactive/snapping/hints/LineSnappingHint ../../interactive/support/viewUtils".split(" "),
function(y,z,E,P,p,F,G,H,t,A,I,B,J,v,l,w,k,K,x,L,C,M){function q(a){({effectiveTheme:a}=a.view);const b=z.toUnitRGBA(a.accentColor),d=[0,0,0,0];return{intersectionPointColor:d,intersectionPointOutlineColor:b,pointColor:d,pointOutlineColor:b,lineColor:b,lineOutlineColor:void 0,parallelSignColor:b,rightAngleColor:b,rightAngleColorDraped:z.toUnitRGBA(E.multiplyOpacity(a.accentColor,.5)),rightAngleOutlineColor:b}}function m(a,b,d){b=D(b,d);return null==b?a:w.create(a[0],a[1],b)}function u(a,b){return null!=
D(a.domain,b)?b.selfSnappingZ.elevationInfo:a.isDraped?t.onTheGroundElevationInfo:t.absoluteHeightElevationInfo}function D(a,{selfSnappingZ:b}){return a===K.SnappingDomain.SELF&&null!=b?b.value:null}function n(a,b,d,g,f){const c=G.create();f?H.projectVectorToVector(a,b,c,g.basemapTerrain.overlayManager.renderer.spatialReference):M.vectorToRender(a,b,d,g,c);return c}class N extends L.SnappingVisualizer{sortUniqueHints(a){return a.sort((b,d)=>(d instanceof C.LineSnappingHint?d.length:0)-(b instanceof
C.LineSnappingHint?b.length:0))}visualizeIntersectionPoint(a,b){const {spatialReference:d,view:g}=b;b=q(b);return p.destroyHandle(new B.PointVisualElement({view:g,primitive:"circle",geometry:w.toDehydratedPoint(a.intersectionPoint,d),elevationInfo:a.isDraped?t.onTheGroundElevationInfo:t.absoluteHeightElevationInfo,size:20,outlineSize:2,color:b.intersectionPointColor,outlineColor:b.intersectionPointOutlineColor,pixelSnappingEnabled:!1,isDecoration:!0,attached:!0}))}visualizePoint(a,b){const {view:d,
spatialReference:g}=b,f=q(b),c=m(a.point,a.domain,b);return p.destroyHandle(new B.PointVisualElement({view:d,primitive:"circle",geometry:w.toDehydratedPoint(c,g),elevationInfo:u(a,b),size:20,outlineSize:2,color:f.pointColor,outlineColor:f.pointOutlineColor,pixelSnappingEnabled:!1,isDecoration:!0,attached:!0}))}visualizeLine(a,b){const {view:d,spatialReference:g}=b,f=q(b),c=m(a.lineStart,a.domain,b),e=m(a.lineEnd,a.domain,b);return p.destroyHandle(this._createLineSegmentHint(a.type,c,e,g,u(a,b),d,
f,a.isDraped,a.fadeLeft,a.fadeRight))}visualizeParallelSign(a,b){const {view:d,spatialReference:g}=b;var f=q(b);const {isDraped:c}=a;var e=u(a,b),h=m(a.lineStart,a.domain,b);a=m(a.lineEnd,a.domain,b);h=n(h,g,e,d,c);e=n(a,g,e,d,c);e=F.lerp(e,h,e,.5);f=new I.ParallelLineVisualElement({view:d,attached:!1,offset:k.defaults.parallelLineHintOffset,length:k.defaults.parallelLineHintLength,width:k.defaults.parallelLineHintWidth,color:f.parallelSignColor,location:e,renderOccluded:c?l.RenderOccludedFlag.OccludeAndTransparent:
l.RenderOccludedFlag.Opaque,isDraped:c,renderGroup:v.DrapedRenderGroup.SnappingHint,isDecoration:!0});f.setDirectionFromPoints(h,e);f.attached=!0;return p.destroyHandle(f)}visualizeRightAngleQuad(a,b){const {view:d,spatialReference:g}=b,f=q(b);var c=u(a,b);const {isDraped:e}=a;var h=m(a.previousVertex,a.domain,b),r=m(a.centerVertex,a.domain,b);a=m(a.nextVertex,a.domain,b);h=n(h,g,c,d,e);r=n(r,g,c,d,e);c=n(a,g,c,d,e);return p.destroyHandle(new J.RightAngleQuadVisualElement({view:d,attached:!0,color:e?
f.rightAngleColorDraped:f.rightAngleColor,renderOccluded:e?l.RenderOccludedFlag.OccludeAndTransparent:l.RenderOccludedFlag.Transparent,outlineRenderOccluded:e?l.RenderOccludedFlag.OccludeAndTransparent:l.RenderOccludedFlag.Opaque,outlineColor:f.rightAngleOutlineColor,outlineSize:k.defaults.rightAngleHintOutlineSize,size:k.defaults.rightAngleHintSize,isDraped:e,geometry:{previous:h,center:r,next:c},renderGroup:v.DrapedRenderGroup.SnappingHint,isDecoration:!0}))}_createLineSegmentHint(a,b,d,g,f,c,e,
h=!1,r=!0,O=!0){b=n(b,g,f,c,h);d=n(d,g,f,c,h);c=new A.ExtendedLineVisualElement({view:c,extensionType:A.ExtensionType.FADED,start:b,end:d,isDraped:h,color:e.lineColor,renderOccluded:h?l.RenderOccludedFlag.OccludeAndTransparent:l.RenderOccludedFlag.Opaque,renderGroup:v.DrapedRenderGroup.SnappingHint,isDecoration:!0});switch(a){case x.LineSegmentHintType.TARGET:c.width=k.defaults.lineHintWidthTarget;c.fadedExtensions={start:0,end:k.defaults.lineHintFadedExtensions};break;case x.LineSegmentHintType.REFERENCE_EXTENSION:c.width=
k.defaults.lineHintWidthReference;c.fadedExtensions={start:0,end:0};break;case x.LineSegmentHintType.REFERENCE:c.width=k.defaults.lineHintWidthReference,c.fadedExtensions={start:r?k.defaults.lineHintFadedExtensions:0,end:O?k.defaults.lineHintFadedExtensions:0}}c.attached=!0;return c}}y.SnappingVisualizer3D=N;Object.defineProperty(y,Symbol.toStringTag,{value:"Module"})});