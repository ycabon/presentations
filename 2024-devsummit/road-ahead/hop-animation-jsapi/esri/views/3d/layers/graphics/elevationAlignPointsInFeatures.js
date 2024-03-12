// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../../geometry ../../../../core/promiseUtils ../../../../core/libs/gl-matrix-2/factories/vec3f64 ../../../../geometry/projection/projectPointToVector ../../../../layers/graphics/dehydratedPoint ../../../../support/elevationInfoUtils ./elevationAlignmentUtils ./ElevationContext ./featureExpressionInfoUtils ../../../../geometry/SpatialReference".split(" "),function(l,L,y,z,A,B,C,m,D,n,p){l.elevationAlignPointsInFeatures=async function(b,q,E,c,e){const {elevationProvider:F,renderCoordsHelper:G}=
b,{elevationInfo:r}=q,{pointsInFeatures:H,spatialReference:I}=c;var a=p.fromJSON(I);c=n.extractExpressionInfo(r,!0);c=await n.createContext(c,a,e);y.throwIfAborted(e);const f=[],t=new Set,u=new Set,g=new D.ElevationContext,d=B.makeDehydratedPoint(0,0,0,p.WGS84),v=new m.SampleElevationInfo,w=z.create();d.spatialReference=a;b=b.elevationProvider.spatialReference??b.spatialReference;for(const {objectId:h,points:x}of H)if(a=E(h),null==a){for(const k of x)f.push(k.z??0);t.add(h)}else{a.isDraped&&u.add(h);
g.setFromElevationInfo(C.getGeometryEffectiveElevationInfo(a.graphic.geometry,r));g.updateFeatureExpressionInfoContext(c,a.graphic,q);for(const {x:k,y:J,z:K}of x)d.x=k,d.y=J,d.z=K??0,await A.projectPointToVectorAsync(d,w,b,0,{signal:e}),m.evaluateElevationInfoAtPoint(w,F,g,G,v),f.push(v.z)}return{elevations:f,drapedObjectIds:u,failedObjectIds:t}};Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})});