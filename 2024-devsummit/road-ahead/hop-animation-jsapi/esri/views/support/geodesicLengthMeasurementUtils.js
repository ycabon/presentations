// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../geometry ../../core/quantityUtils ../../core/libs/gl-matrix-2/factories/vec3f64 ../../geometry/geometryEngine ../../geometry/projection/projectPolylineToWGS84ComparableLonLat ../../geometry/projection/projectVectorToWGS84ComparableLonLat ../../geometry/support/geodesicUtils ../../geometry/support/spatialReferenceUtils ./geodesicMeasurementUtils ../../geometry/SpatialReference".split(" "),function(f,E,d,g,n,w,p,e,x,q,r){function t(a,b,c){return q.geodesicMeasure(c,y,z,A,a,b,c)}
function y(a,b,c){return d.createLength(e.inverseGeodeticSolver(m,a,b,c).distance,"meters")}function z(a,b,c){return d.createLength(n.geodesicLength({type:"polyline",spatialReference:c,paths:[[[...a],[...b]]]},"meters"),"meters")}function A(a,b,c){return p.projectVectorToWGS84ComparableLonLat(a,c,u)&&p.projectVectorToWGS84ComparableLonLat(b,c,v)?d.createLength(e.inverseGeodeticSolver(m,u,v,r.WGS84).distance,"meters"):null}function B(a){return d.createLength(e.geodesicLengths([a],"meters")[0],"meters")}
function C(a){return d.createLength(n.geodesicLength(a,"meters"),"meters")}function D(a){var b=[];if(!w.projectPolylineToWGS84ComparableLonLat(a,b))return null;a=0;for(const c of b){b=0;for(let h=1;h<c.length;++h)b+=e.inverseGeodeticSolver(m,c[h-1],c[h],r.WGS84).distance;a+=b}return d.createLength(a,"meters")}const m=new e.InverseGeodeticSolverResult,k=g.create(),l=g.create(),u=g.create(),v=g.create();f.geodesicDistance=t;f.geodesicDistanceBetweenPoints=function(a,b){if(!x.equals(a.spatialReference,
b.spatialReference))return null;const {spatialReference:c}=a;k[0]=a.x;k[1]=a.y;k[2]=a.hasZ?a.z:0;l[0]=b.x;l[1]=b.y;l[2]=b.hasZ?b.z:0;return t(k,l,c)};f.geodesicLength=function(a){const {spatialReference:b}=a;return q.geodesicMeasure(b,B,C,D,a)};Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});