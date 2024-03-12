// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../core/Cyclical ../../core/quantityUtils ../../core/unitUtils ../../core/libs/gl-matrix-2/math/vec2 ../../core/libs/gl-matrix-2/factories/vec2f64 ../../chunks/vec32 ../../core/libs/gl-matrix-2/factories/vec3f64 ../../geometry/projection/projectVectorToVector ../../geometry/support/geodesicUtils ../../geometry/support/spatialReferenceUtils".split(" "),function(e,x,h,r,D,y,m,n,p,l,E){function z(a,b){if(null!=a&&null!=b)return a=t(a,b),null!=a?h.createAngle(a,"radians","geographic"):
void 0}function A(a,b,d){if(a&&b&&d&&(a=t(a,b),b=t(b,d),null!=a&&null!=b))return h.createAngle(b-a,"radians","geographic")}function u(a,b){if(null!=a)switch(a=v(a),b){case e.DirectionMode.Absolute:return b=F.normalize(a,0,!0),h.createAngle(b,"degrees","geographic");case e.DirectionMode.Relative:return b=B.normalize(a,0,!0),-180===b&&(b=180),h.createAngle(b,"degrees","geographic");case e.DirectionMode.RelativeBilateral:return b=Math.abs(B.normalize(a,0,!0)),h.createAngle(b,"degrees","geographic")}}
function v(a){return null!=a?h.convertRotationType(r.convertUnit(a.value,a.unit,"degrees"),a.rotationType,"geographic"):void 0}e.DirectionMode=void 0;(function(a){a.Absolute="absolute";a.Relative="relative";a.RelativeBilateral="relative-bilateral"})(e.DirectionMode||(e.DirectionMode={}));const t=(()=>{const a=n.create(),b=n.create();return(d,c)=>{m.set(a,d.x,d.y,d.z??0);m.set(b,c.x,c.y,c.z??0);return C(a,b,d.spatialReference,c.spatialReference)}})(),C=(()=>{const a=y.create(),b=n.create(),d=n.create();
return(c,f,k,g)=>{if(!m.exactEquals(c,f)){var q=l.geodesicCompatibleSpatialReference(k),w=l.geodesicCompatibleSpatialReference(g);if(q&&w&&E.equals(q,w)&&p.projectVectorToVector(c,k,b,q)&&p.projectVectorToVector(f,g,d,w))return{azimuth:c}=l.inverseGeodeticSolver(G,b,d,q),null!=c?r.convertUnit(c,"degrees","radians"):void 0;a[0]=f[0]-c[0];a[1]=f[1]-c[1];c=D.angle(y.UNIT_Y,a);0>a[0]&&(c=H-c);return c}}})(),I=(()=>{const a=n.create();return(b,d,c,f,k,g="geodesic")=>{m.copy(a,d);k=v(k);if("geodesic"===
g&&(g=l.geodesicCompatibleSpatialReference(c))&&p.projectVectorToVector(a,c,a,g))return l.directGeodeticSolver(b,a,k,f,g),b[2]=d[2],p.projectVectorToVector(b,g,b,c)?!0:!1;c=h.convertRotationType(k,"geographic","arithmetic");c=r.convertUnit(c,"degrees","radians");m.set(b,d[0]+f*Math.cos(c),d[1]+f*Math.sin(c),d[2]);return!0}})(),G=new l.InverseGeodeticSolverResult,H=2*Math.PI,F=x.cyclicalDegrees,B=new x.Cyclical(-180,180);e.directionBetweenPoints=z;e.directionForVertices=function(a,b,d,c=e.DirectionMode.Absolute){if(b&&
d)switch(c){case e.DirectionMode.Absolute:return z(b,d);case e.DirectionMode.Relative:return u(A(a,b,d),e.DirectionMode.Relative);case e.DirectionMode.RelativeBilateral:return u(A(a,b,d),e.DirectionMode.RelativeBilateral)}};e.getDegreesGeographic=v;e.getNormalizedDirection=u;e.pointFromDistanceAlongAzimuth=I;e.radiansGeographicBetweenVec=C;Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});