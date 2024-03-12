// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../../geometry ../../../../core/screenUtils ../../../../chunks/vec32 ../../../../core/libs/gl-matrix-2/factories/vec3f64 ../../../../geometry/projection ../../../../geometry/support/plane ../../../../geometry/support/ray ../../../../geometry/support/vector ../../../../geometry/support/vectorStacks ../../../../support/elevationInfoUtils ../../support/geometryUtils/ray ../../webgl-engine/lib/Intersector ../../webgl-engine/lib/IntersectorInterfaces ../../webgl-engine/lib/verticalOffsetUtils ../../../interactive/dragEventPipeline ../../../../geometry/Point".split(" "),
function(h,Q,n,l,p,v,r,I,J,w,x,y,K,z,A,L,t){function B(a,b){return C(a,()=>b)}function C(a,b){const c=p.create(),f=p.create();let g=!1;return e=>{const k=b(e);if("start"===e.action){var d=n.screenPointObjectToArray(e.screenStart,n.castScreenPointArray(w.sv2d.get()));d=y.fromScreen(a.state.camera,d,D);null!=d&&(g=r.intersectRay(k,d,c))}if(!g)return null;d=n.screenPointObjectToArray(e.screenEnd,n.castScreenPointArray(w.sv2d.get()));d=y.fromScreen(a.state.camera,d,D);return null==d?null:r.intersectRay(k,
d,f)?{...e,renderStart:c,renderEnd:f,plane:k,ray:d}:null}}function M(a,b,c=0,f=null,g=null){let e=null;return k=>{if("start"===k.action&&(e=a.sceneIntersectionHelper.intersectElevationFromScreen(n.createScreenPointArray(k.screenStart.x,k.screenStart.y),b,c,g),null!=e&&null!=f&&!v.projectPoint(e,e,f))||null==e)return null;const d=a.sceneIntersectionHelper.intersectElevationFromScreen(n.createScreenPointArray(k.screenEnd.x,k.screenEnd.y),b,c,g);return null!=d?null==f||v.projectPoint(d,d,f)?{...k,mapStart:e,
mapEnd:d}:null:null}}function E(a,b,c,f=null,g=null){b=x.getZForElevationMode(b,a,c);return M(a,c,b,f,g)}function F(a,b,c,f=null,g=null){return E(a,c,x.getGraphicEffectiveElevationInfo(b),f,g)}function N(a,b){const c=O,f=P,g=r.create();a.renderCoordsHelper.worldUpAtPosition(b,c);a=l.cross(r.getNormal(g),c,l.subtract(f,b,a.state.camera.eye));l.cross(a,a,c);return r.fromPositionAndNormal(b,a,g)}function G(a,b){const c=p.create(),f=l.length(b);a.renderCoordsHelper.worldUpAtPosition(b,c);const g=p.create(),
e=p.create(),k=d=>{l.subtract(d,d,b);J.projectPoint(c,d,d);"global"===a.viewingMode&&l.length(d)*Math.sign(l.dot(c,d))<-f+.001&&l.subtract(d,l.scale(d,c,.001),b);l.add(d,d,b);return d};return d=>{d.renderStart=k(l.copy(g,d.renderStart));d.renderEnd=k(l.copy(e,d.renderEnd));return d}}function H(a,b){const c=a.renderCoordsHelper;return f=>{const g=c.fromRenderCoords(f.renderStart,new t({spatialReference:b})),e=c.fromRenderCoords(f.renderEnd,new t({spatialReference:b}));return null!=g&&null!=e?{...f,
mapStart:g,mapEnd:e}:null}}h.SurfaceType=void 0;(function(a){a[a.GROUND=0]="GROUND";a[a.OTHER=1]="OTHER"})(h.SurfaceType||(h.SurfaceType={}));const O=p.create(),P=p.create(),D=I.create();h.convertToMapCoordinates=H;h.hideManipulatorWhileDragging=function(a){let b=null;return c=>{switch(c.action){case "start":b=a.disableDisplay();break;case "end":case "cancel":null!=b&&(b.remove(),b=null)}return c}};h.projectToWorldUp=G;h.screenToMap3D=function(a,b=null){const c=K.newIntersector(a.state.viewingMode);
c.options.selectionMode=!0;c.options.store=z.StoreResults.MIN;c.options.hud=!1;const f=n.createScreenPointArray(),g={requiresGroundFeedback:!0,enableDraped:!0,exclude:new Set},e=p.create(),k=b??a.spatialReference,d=m=>{a.map.ground&&1>a.map.ground.opacity?g.exclude.add(A.terrainId):g.exclude.delete(A.terrainId);a.sceneIntersectionHelper.intersectIntersectorScreen(n.screenPointObjectToArray(m,f),c,g);m=c.results.min;if(m.getIntersectionPoint(e))m=m.intersector===z.IntersectorType.TERRAIN?h.SurfaceType.GROUND:
h.SurfaceType.OTHER;else if(c.results.ground.getIntersectionPoint(e))m=h.SurfaceType.GROUND;else return null;return{location:a.renderCoordsHelper.fromRenderCoords(e,new t({spatialReference:k})),surfaceType:m}};let u;return m=>{if("start"===m.action){var q=d(m.screenStart);u=null!=q?q.location:null}if(null==u)return null;q=d(m.screenEnd);return null!=q?.location?{...m,mapStart:u,mapEnd:q.location,surfaceType:q.surfaceType}:null}};h.screenToMapXYAtLocation=E;h.screenToMapXYForGraphic=function(a,b,c,
f){a=b.toMap(a.screenStart,{include:[c]});return null!=a?F(b,c,a,f):null};h.screenToMapXYForGraphicAtLocation=F;h.screenToRenderPlane=B;h.screenToRenderPlaneFromEvent=function(a){return C(a,b=>b.plane)};h.screenToZConstrained=function(a,b,c){let f=null;const g=new L.EventPipeline;g.next(B(a,N(a,b))).next(G(a,b)).next(H(a,c)).next(e=>{e.mapEnd.x=e.mapStart.x;e.mapEnd.y=e.mapStart.y;f=e});return e=>{f=null;g.execute(e);return f}};Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});