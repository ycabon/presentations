// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../kernel ../ArcadePortal ../Dictionary ../executionError ../kernel ../../chunks/languageUtils ../portalUtils ./centroid ../../core/unitUtils ../../geometry/Extent ../../geometry/Geometry ../../geometry/geometryEngineAsync ../../geometry/Multipoint ../../geometry/Point ../../geometry/Polygon ../../geometry/Polyline ../../geometry/support/jsonUtils ../../portal/Portal ../../portal/support/utils".split(" "),function(y,H,z,x,g,m,e,A,r,I,w,n,k,B,v,t,u,C,D,E){function F(f){return 0===
H.version.indexOf("4.")?t.fromExtent(f):new t({spatialReference:f.spatialReference,rings:[[[f.xmin,f.ymin],[f.xmin,f.ymax],[f.xmax,f.ymax],[f.xmax,f.ymin],[f.xmin,f.ymin]]]})}function q(f,b,c){e.pcCheck(f,2,2,b,c);if(!(f[0]instanceof n&&f[1]instanceof n||f[0]instanceof n&&null===f[1]||f[1]instanceof n&&null===f[0]||null===f[0]&&null===f[1]))throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.InvalidParameter,c);}async function G(f,b){if("polygon"!==f.type&&"polyline"!==f.type&&"extent"!==f.type)return 0;
var c=1;if(f.spatialReference.vcsWkid||f.spatialReference.latestVcsWkid){c=r.getMetersPerVerticalUnitForSR(f.spatialReference);var d=I.getMetersPerUnitForSR(f.spatialReference);c/=d}d=0;if("polyline"===f.type)for(var h of f.paths)for(var a=1;a<h.length;a++)d+=r.segmentLength3d(h[a],h[a-1],c);else if("polygon"===f.type)for(a of f.rings){for(h=1;h<a.length;h++)d+=r.segmentLength3d(a[h],a[h-1],c);if(a[0][0]!==a[a.length-1][0]||a[0][1]!==a[a.length-1][1]||void 0!==a[0][2]&&a[0][2]!==a[a.length-1][2])d+=
r.segmentLength3d(a[0],a[a.length-1],c)}else"extent"===f.type&&(d+=2*r.segmentLength3d([f.xmin,f.ymin,0],[f.xmax,f.ymin,0],c),d+=2*r.segmentLength3d([f.xmin,f.ymin,0],[f.xmin,f.ymax,0],c),d=2*d+4*Math.abs(e.defaultUndefined(f.zmax,0)*c-e.defaultUndefined(f.zmin,0)*c));f=new u({hasZ:!1,hasM:!1,spatialReference:f.spatialReference,paths:[[0,0],[0,d]]});return k.planarLength(f,b)}y.registerFunctions=function(f){"async"===f.mode&&(f.functions.disjoint=function(b,c){return f.standardFunctionAsync(b,c,(d,
h,a)=>{a=e.autoCastFeatureToGeometry(a);q(a,b,c);return null===a[0]||null===a[1]?!0:k.disjoint(a[0],a[1])})},f.functions.intersects=function(b,c){return f.standardFunctionAsync(b,c,(d,h,a)=>{a=e.autoCastFeatureToGeometry(a);q(a,b,c);return null===a[0]||null===a[1]?!1:k.intersects(a[0],a[1])})},f.functions.touches=function(b,c){return f.standardFunctionAsync(b,c,(d,h,a)=>{a=e.autoCastFeatureToGeometry(a);q(a,b,c);return null===a[0]||null===a[1]?!1:k.touches(a[0],a[1])})},f.functions.crosses=function(b,
c){return f.standardFunctionAsync(b,c,(d,h,a)=>{a=e.autoCastFeatureToGeometry(a);q(a,b,c);return null===a[0]||null===a[1]?!1:k.crosses(a[0],a[1])})},f.functions.within=function(b,c){return f.standardFunctionAsync(b,c,(d,h,a)=>{a=e.autoCastFeatureToGeometry(a);q(a,b,c);return null===a[0]||null===a[1]?!1:k.within(a[0],a[1])})},f.functions.contains=function(b,c){return f.standardFunctionAsync(b,c,(d,h,a)=>{a=e.autoCastFeatureToGeometry(a);q(a,b,c);return null===a[0]||null===a[1]?!1:k.contains(a[0],a[1])})},
f.functions.overlaps=function(b,c){return f.standardFunctionAsync(b,c,(d,h,a)=>{a=e.autoCastFeatureToGeometry(a);q(a,b,c);return null===a[0]||null===a[1]?!1:k.overlaps(a[0],a[1])})},f.functions.equals=function(b,c){return f.standardFunctionAsync(b,c,(d,h,a)=>{e.pcCheck(a,2,2,b,c);return a[0]===a[1]?!0:a[0]instanceof n&&a[1]instanceof n?k.equals(a[0],a[1]):e.isDate(a[0])&&e.isDate(a[1])||e.isTime(a[0])&&e.isTime(a[1])||e.isDateOnly(a[0])&&e.isDateOnly(a[1])?a[0].equals(a[1]):!1})},f.functions.relate=
function(b,c){return f.standardFunctionAsync(b,c,(d,h,a)=>{a=e.autoCastFeatureToGeometry(a);e.pcCheck(a,3,3,b,c);if(a[0]instanceof n&&a[1]instanceof n)return k.relate(a[0],a[1],e.toString(a[2]));if(a[0]instanceof n&&null===a[1]||a[1]instanceof n&&null===a[0]||null===a[0]&&null===a[1])return!1;throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.InvalidParameter,c);})},f.functions.intersection=function(b,c){return f.standardFunctionAsync(b,c,(d,h,a)=>{a=e.autoCastFeatureToGeometry(a);q(a,b,c);
return null===a[0]||null===a[1]?null:k.intersect(a[0],a[1])})},f.functions.union=function(b,c){return f.standardFunctionAsync(b,c,(d,h,a)=>{a=e.autoCastFeatureToGeometry(a);d=[];if(0===a.length)throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.WrongNumberOfParameters,c);if(1===a.length)if(e.isArray(a[0]))for(a=e.autoCastFeatureToGeometry(a[0]),h=0;h<a.length;h++){if(null!==a[h]){if(!(a[h]instanceof n))throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.InvalidParameter,c);d.push(a[h])}}else if(e.isImmutableArray(a[0]))for(a=
e.autoCastFeatureToGeometry(a[0].toArray()),h=0;h<a.length;h++){if(null!==a[h]){if(!(a[h]instanceof n))throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.InvalidParameter,c);d.push(a[h])}}else{if(a[0]instanceof n)return e.fixSpatialReference(m.cloneGeometry(a[0]),b.spatialReference);if(null===a[0])return null;throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.InvalidParameter,c);}else for(h=0;h<a.length;h++)if(null!==a[h]){if(!(a[h]instanceof n))throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.InvalidParameter,
c);d.push(a[h])}return 0===d.length?null:k.union(d)})},f.functions.difference=function(b,c){return f.standardFunctionAsync(b,c,(d,h,a)=>{a=e.autoCastFeatureToGeometry(a);q(a,b,c);return null!==a[0]&&null===a[1]?m.cloneGeometry(a[0]):null===a[0]?null:k.difference(a[0],a[1])})},f.functions.symmetricdifference=function(b,c){return f.standardFunctionAsync(b,c,(d,h,a)=>{a=e.autoCastFeatureToGeometry(a);q(a,b,c);return null===a[0]&&null===a[1]?null:null===a[0]?m.cloneGeometry(a[1]):null===a[1]?m.cloneGeometry(a[0]):
k.symmetricDifference(a[0],a[1])})},f.functions.clip=function(b,c){return f.standardFunctionAsync(b,c,(d,h,a)=>{a=e.autoCastFeatureToGeometry(a);e.pcCheck(a,2,2,b,c);if(!(a[1]instanceof w)&&null!==a[1])throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.InvalidParameter,c);if(null===a[0])return null;if(!(a[0]instanceof n))throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.InvalidParameter,c);return null===a[1]?null:k.clip(a[0],a[1])})},f.functions.cut=function(b,c){return f.standardFunctionAsync(b,
c,(d,h,a)=>{a=e.autoCastFeatureToGeometry(a);e.pcCheck(a,2,2,b,c);if(!(a[1]instanceof u)&&null!==a[1])throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.InvalidParameter,c);if(null===a[0])return[];if(!(a[0]instanceof n))throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.InvalidParameter,c);return null===a[1]?[m.cloneGeometry(a[0])]:k.cut(a[0],a[1])})},f.functions.area=function(b,c){return f.standardFunctionAsync(b,c,async(d,h,a)=>{e.pcCheck(a,1,2,b,c);a=e.autoCastFeatureToGeometry(a);
if(null===a[0])return 0;if(e.isFeatureSet(a[0])){a=await a[0].sumArea(m.convertSquareUnitsToCode(e.defaultUndefined(a[1],-1)),!1,b.abortSignal);if(b.abortSignal.aborted)throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.Cancelled,c);return a}if(e.isArray(a[0])||e.isImmutableArray(a[0]))return d=e.autoCastArrayOfPointsToPolygon(a[0],b.spatialReference),null===d?0:k.planarArea(d,m.convertSquareUnitsToCode(e.defaultUndefined(a[1],-1)));if(!(a[0]instanceof n))throw new g.ArcadeExecutionError(b,
g.ExecutionErrorCodes.InvalidParameter,c);return k.planarArea(a[0],m.convertSquareUnitsToCode(e.defaultUndefined(a[1],-1)))})},f.functions.areageodetic=function(b,c){return f.standardFunctionAsync(b,c,async(d,h,a)=>{e.pcCheck(a,1,2,b,c);a=e.autoCastFeatureToGeometry(a);if(null===a[0])return 0;if(e.isFeatureSet(a[0])){a=await a[0].sumArea(m.convertSquareUnitsToCode(e.defaultUndefined(a[1],-1)),!0,b.abortSignal);if(b.abortSignal.aborted)throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.Cancelled,
c);return a}if(e.isArray(a[0])||e.isImmutableArray(a[0]))return d=e.autoCastArrayOfPointsToPolygon(a[0],b.spatialReference),null===d?0:k.geodesicArea(d,m.convertSquareUnitsToCode(e.defaultUndefined(a[1],-1)));if(!(a[0]instanceof n))throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.InvalidParameter,c);return k.geodesicArea(a[0],m.convertSquareUnitsToCode(e.defaultUndefined(a[1],-1)))})},f.functions.length=function(b,c){return f.standardFunctionAsync(b,c,async(d,h,a)=>{e.pcCheck(a,1,2,b,c);a=
e.autoCastFeatureToGeometry(a);if(null===a[0])return 0;if(e.isFeatureSet(a[0])){a=await a[0].sumLength(m.convertLinearUnitsToCode(e.defaultUndefined(a[1],-1)),!1,b.abortSignal);if(b.abortSignal.aborted)throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.Cancelled,c);return a}if(e.isArray(a[0])||e.isImmutableArray(a[0]))return d=e.autoCastArrayOfPointsToPolyline(a[0],b.spatialReference),null===d?0:k.planarLength(d,m.convertLinearUnitsToCode(e.defaultUndefined(a[1],-1)));if(!(a[0]instanceof n))throw new g.ArcadeExecutionError(b,
g.ExecutionErrorCodes.InvalidParameter,c);return k.planarLength(a[0],m.convertLinearUnitsToCode(e.defaultUndefined(a[1],-1)))})},f.functions.length3d=function(b,c){return f.standardFunctionAsync(b,c,(d,h,a)=>{e.pcCheck(a,1,2,b,c);a=e.autoCastFeatureToGeometry(a);if(null===a[0])return 0;if(e.isArray(a[0])||e.isImmutableArray(a[0]))return d=e.autoCastArrayOfPointsToPolyline(a[0],b.spatialReference),null===d?0:!0===d.hasZ?G(d,m.convertLinearUnitsToCode(e.defaultUndefined(a[1],-1))):k.planarLength(d,
m.convertLinearUnitsToCode(e.defaultUndefined(a[1],-1)));if(!(a[0]instanceof n))throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.InvalidParameter,c);return!0===a[0].hasZ?G(a[0],m.convertLinearUnitsToCode(e.defaultUndefined(a[1],-1))):k.planarLength(a[0],m.convertLinearUnitsToCode(e.defaultUndefined(a[1],-1)))})},f.functions.lengthgeodetic=function(b,c){return f.standardFunctionAsync(b,c,async(d,h,a)=>{e.pcCheck(a,1,2,b,c);a=e.autoCastFeatureToGeometry(a);if(null===a[0])return 0;if(e.isFeatureSet(a[0])){a=
await a[0].sumLength(m.convertLinearUnitsToCode(e.defaultUndefined(a[1],-1)),!0,b.abortSignal);if(b.abortSignal.aborted)throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.Cancelled,c);return a}if(e.isArray(a[0])||e.isImmutableArray(a[0]))return d=e.autoCastArrayOfPointsToPolyline(a[0],b.spatialReference),null===d?0:k.geodesicLength(d,m.convertLinearUnitsToCode(e.defaultUndefined(a[1],-1)));if(!(a[0]instanceof n))throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.InvalidParameter,c);return k.geodesicLength(a[0],
m.convertLinearUnitsToCode(e.defaultUndefined(a[1],-1)))})},f.functions.distance=function(b,c){return f.standardFunctionAsync(b,c,(d,h,a)=>{a=e.autoCastFeatureToGeometry(a);e.pcCheck(a,2,3,b,c);d=a[0];if(e.isArray(a[0])||e.isImmutableArray(a[0]))d=e.autoCastArrayOfPointsToMultiPoint(a[0],b.spatialReference);h=a[1];if(e.isArray(a[1])||e.isImmutableArray(a[1]))h=e.autoCastArrayOfPointsToMultiPoint(a[1],b.spatialReference);if(!(d instanceof n))throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.InvalidParameter,
c);if(!(h instanceof n))throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.InvalidParameter,c);return k.distance(d,h,m.convertLinearUnitsToCode(e.defaultUndefined(a[2],-1)))})},f.functions.distancegeodetic=function(b,c){return f.standardFunctionAsync(b,c,(d,h,a)=>{a=e.autoCastFeatureToGeometry(a);e.pcCheck(a,2,3,b,c);d=a[0];h=a[1];if(!(d instanceof v))throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.InvalidParameter,c);if(!(h instanceof v))throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.InvalidParameter,
c);const l=new u({paths:[],spatialReference:d.spatialReference});l.addPath([d,h]);return k.geodesicLength(l,m.convertLinearUnitsToCode(e.defaultUndefined(a[2],-1)))})},f.functions.densify=function(b,c){return f.standardFunctionAsync(b,c,(d,h,a)=>{a=e.autoCastFeatureToGeometry(a);e.pcCheck(a,2,3,b,c);if(null===a[0])return null;if(!(a[0]instanceof n))throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.InvalidParameter,c);d=e.toNumber(a[1]);if(isNaN(d))throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.InvalidParameter,
c);if(0>=d)throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.InvalidParameter,c);return a[0]instanceof t||a[0]instanceof u?k.densify(a[0],d,m.convertLinearUnitsToCode(e.defaultUndefined(a[2],-1))):a[0]instanceof w?k.densify(F(a[0]),d,m.convertLinearUnitsToCode(e.defaultUndefined(a[2],-1))):a[0]})},f.functions.densifygeodetic=function(b,c){return f.standardFunctionAsync(b,c,(d,h,a)=>{a=e.autoCastFeatureToGeometry(a);e.pcCheck(a,2,3,b,c);if(null===a[0])return null;if(!(a[0]instanceof n))throw new g.ArcadeExecutionError(b,
g.ExecutionErrorCodes.InvalidParameter,c);d=e.toNumber(a[1]);if(isNaN(d))throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.InvalidParameter,c);if(0>=d)throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.InvalidParameter,c);return a[0]instanceof t||a[0]instanceof u?k.geodesicDensify(a[0],d,m.convertLinearUnitsToCode(e.defaultUndefined(a[2],-1))):a[0]instanceof w?k.geodesicDensify(F(a[0]),d,m.convertLinearUnitsToCode(e.defaultUndefined(a[2],-1))):a[0]})},f.functions.generalize=function(b,
c){return f.standardFunctionAsync(b,c,(d,h,a)=>{a=e.autoCastFeatureToGeometry(a);e.pcCheck(a,2,4,b,c);if(null===a[0])return null;if(!(a[0]instanceof n))throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.InvalidParameter,c);d=e.toNumber(a[1]);if(isNaN(d))throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.InvalidParameter,c);return k.generalize(a[0],d,e.toBoolean(e.defaultUndefined(a[2],!0)),m.convertLinearUnitsToCode(e.defaultUndefined(a[3],-1)))})},f.functions.buffer=function(b,c){return f.standardFunctionAsync(b,
c,(d,h,a)=>{a=e.autoCastFeatureToGeometry(a);e.pcCheck(a,2,3,b,c);if(null===a[0])return null;if(!(a[0]instanceof n))throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.InvalidParameter,c);d=e.toNumber(a[1]);if(isNaN(d))throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.InvalidParameter,c);return 0===d?m.cloneGeometry(a[0]):k.buffer(a[0],d,m.convertLinearUnitsToCode(e.defaultUndefined(a[2],-1)))})},f.functions.buffergeodetic=function(b,c){return f.standardFunctionAsync(b,c,(d,h,a)=>{a=e.autoCastFeatureToGeometry(a);
e.pcCheck(a,2,3,b,c);if(null===a[0])return null;if(!(a[0]instanceof n))throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.InvalidParameter,c);d=e.toNumber(a[1]);if(isNaN(d))throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.InvalidParameter,c);return 0===d?m.cloneGeometry(a[0]):k.geodesicBuffer(a[0],d,m.convertLinearUnitsToCode(e.defaultUndefined(a[2],-1)))})},f.functions.offset=function(b,c){return f.standardFunctionAsync(b,c,(d,h,a)=>{a=e.autoCastFeatureToGeometry(a);e.pcCheck(a,2,6,
b,c);if(null===a[0])return null;if(!(a[0]instanceof t||a[0]instanceof u))throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.InvalidParameter,c);d=e.toNumber(a[1]);if(isNaN(d))throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.InvalidParameter,c);h=e.toNumber(e.defaultUndefined(a[4],10));if(isNaN(h))throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.InvalidParameter,c);const l=e.toNumber(e.defaultUndefined(a[5],0));if(isNaN(l))throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.InvalidParameter,
c);return k.offset(a[0],d,m.convertLinearUnitsToCode(e.defaultUndefined(a[2],-1)),e.toString(e.defaultUndefined(a[3],"round")).toLowerCase(),h,l)})},f.functions.rotate=function(b,c){return f.standardFunctionAsync(b,c,(d,h,a)=>{a=e.autoCastFeatureToGeometry(a);e.pcCheck(a,2,3,b,c);d=a[0];if(null===d)return null;if(!(d instanceof n))throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.InvalidParameter,c);d instanceof w&&(d=t.fromExtent(d));h=e.toNumber(a[1]);if(isNaN(h))throw new g.ArcadeExecutionError(b,
g.ExecutionErrorCodes.InvalidParameter,c);a=e.defaultUndefined(a[2],null);if(null===a)return k.rotate(d,h);if(a instanceof v)return k.rotate(d,h,a);throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.InvalidParameter,c);})},f.functions.centroid=function(b,c){return f.standardFunctionAsync(b,c,(d,h,a)=>{a=e.autoCastFeatureToGeometry(a);e.pcCheck(a,1,1,b,c);if(null===a[0])return null;d=a[0];if(e.isArray(a[0])||e.isImmutableArray(a[0]))d=e.autoCastArrayOfPointsToMultiPoint(a[0],b.spatialReference);
if(null===d)return null;if(!(d instanceof n))throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.InvalidParameter,c);return d instanceof v?e.fixSpatialReference(m.cloneGeometry(a[0]),b.spatialReference):d instanceof t?d.centroid:d instanceof u?r.centroidPolyline(d):d instanceof B?r.centroidMultiPoint(d):d instanceof w?d.center:null})},f.functions.multiparttosinglepart=function(b,c){return f.standardFunctionAsync(b,c,async(d,h,a)=>{a=e.autoCastFeatureToGeometry(a);e.pcCheck(a,1,1,b,c);h=[];if(null===
a[0])return null;if(!(a[0]instanceof n))throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.InvalidParameter,c);if(a[0]instanceof v||a[0]instanceof w)return[e.fixSpatialReference(m.cloneGeometry(a[0]),b.spatialReference)];d=await k.simplify(a[0]);if(d instanceof t){a=[];h=[];for(var l=0;l<d.rings.length;l++)if(d.isClockwise(d.rings[l])){const p=C.fromJSON({rings:[d.rings[l]],hasZ:!0===d.hasZ,hazM:!0===d.hasM,spatialReference:d.spatialReference.toJSON()});a.push(p)}else h.push({ring:d.rings[l],
pt:d.getPoint(l,0)});for(d=0;d<h.length;d++)for(l=0;l<a.length;l++)if(a[l].contains(h[d].pt)){a[l].addRing(h[d].ring);break}return a}if(d instanceof u){a=[];for(h=0;h<d.paths.length;h++)l=C.fromJSON({paths:[d.paths[h]],hasZ:!0===d.hasZ,hazM:!0===d.hasM,spatialReference:d.spatialReference.toJSON()}),a.push(l);return a}if(a[0]instanceof B){d=e.fixSpatialReference(m.cloneGeometry(a[0]),b.spatialReference);for(a=0;a<d.points.length;a++)h.push(d.getPoint(a));return h}return null})},f.functions.issimple=
function(b,c){return f.standardFunctionAsync(b,c,(d,h,a)=>{a=e.autoCastFeatureToGeometry(a);e.pcCheck(a,1,1,b,c);if(null===a[0])return!0;if(!(a[0]instanceof n))throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.InvalidParameter,c);return k.isSimple(a[0])})},f.functions.simplify=function(b,c){return f.standardFunctionAsync(b,c,(d,h,a)=>{a=e.autoCastFeatureToGeometry(a);e.pcCheck(a,1,1,b,c);if(null===a[0])return null;if(!(a[0]instanceof n))throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.InvalidParameter,
c);return k.simplify(a[0])})},f.functions.convexhull=function(b,c){return f.standardFunctionAsync(b,c,(d,h,a)=>{a=e.autoCastFeatureToGeometry(a);e.pcCheck(a,1,1,b,c);if(null===a[0])return null;if(!(a[0]instanceof n))throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.InvalidParameter,c);return k.convexHull(a[0])})},f.functions.getuser=function(b,c){return f.standardFunctionAsync(b,c,async(d,h,a)=>{e.pcCheck(a,0,2,b,c);d=e.defaultUndefined(a[1],"");h=!0===d;d=!0===d||!1===d?"":e.toString(d);if(0===
a.length||a[0]instanceof z){var l=null;l=b.services?.portal?b.services.portal:D.getDefault();0<a.length&&(l=A.getPortal(a[0],l));if(l=await E.lookupUser(l,d,h)){l=JSON.parse(JSON.stringify(l));for(var p of["lastLogin","created","modified"])void 0!==l[p]&&null!==l[p]&&(l[p]=new Date(l[p]));return x.convertObjectToArcadeDictionary(l,e.defaultTimeZone(b))}return null}p=null;e.isFeatureSet(a[0])&&(p=a[0]);if(p){h=!1;if(d)return null;await p.load();a=await p.getOwningSystemUrl();if(!a)return!d&&(l=await p.getIdentityUser())?
x.convertObjectToArcadeDictionary({username:l},e.defaultTimeZone(b)):null;p=null;p=b.services?.portal?b.services.portal:D.getDefault();p=A.getPortal(new z(a),p);if(p=await E.lookupUser(p,d,h)){p=JSON.parse(JSON.stringify(p));for(l of["lastLogin","created","modified"])void 0!==p[l]&&null!==p[l]&&(p[l]=new Date(p[l]));return x.convertObjectToArcadeDictionary(p,e.defaultTimeZone(b))}return null}throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.InvalidParameter,c);})});f.functions.nearestcoordinate=
function(b,c){return f.standardFunctionAsync(b,c,async(d,h,a)=>{a=e.autoCastFeatureToGeometry(a);e.pcCheck(a,2,2,b,c);if(!(a[0]instanceof n||null===a[0]))throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.InvalidParameter,c);if(!(a[1]instanceof v||null===a[1]))throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.InvalidParameter,c);if(null===a[0]||null===a[1])return null;d=await k.nearestCoordinate(a[0],a[1]);return null===d?null:x.convertObjectToArcadeDictionary({coordinate:d.coordinate,
distance:d.distance,sideOfLine:0===d.distance?"straddle":d.isRightSide?"right":"left"},e.defaultTimeZone(b),!1,!0)})};f.functions.nearestvertex=function(b,c){return f.standardFunctionAsync(b,c,async(d,h,a)=>{a=e.autoCastFeatureToGeometry(a);e.pcCheck(a,2,2,b,c);if(!(a[0]instanceof n||null===a[0]))throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.InvalidParameter,c);if(!(a[1]instanceof v||null===a[1]))throw new g.ArcadeExecutionError(b,g.ExecutionErrorCodes.InvalidParameter,c);if(null===a[0]||
null===a[1])return null;d=await k.nearestVertex(a[0],a[1]);return null===d?null:x.convertObjectToArcadeDictionary({coordinate:d.coordinate,distance:d.distance,sideOfLine:0===d.distance?"straddle":d.isRightSide?"right":"left"},e.defaultTimeZone(b),!1,!0)})}};Object.defineProperty(y,Symbol.toStringTag,{value:"Module"})});