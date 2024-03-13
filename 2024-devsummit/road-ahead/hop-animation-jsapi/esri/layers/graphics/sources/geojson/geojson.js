// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/date ../../../../core/Error ../../../../geometry/support/spatialReferenceUtils ../../OptimizedFeature ../../OptimizedGeometry ../../../support/fieldUtils".split(" "),function(q,G,w,H,I,J,x){function*z(a){switch(a.type){case "Feature":yield a;break;case "FeatureCollection":for(const b of a.features)b&&(yield b)}}function*K(a){if(a)switch(a.type){case "Point":yield a.coordinates;break;case "LineString":case "MultiPoint":yield*a.coordinates;break;case "MultiLineString":case "Polygon":for(const b of a.coordinates)yield*b;
break;case "MultiPolygon":for(const b of a.coordinates)for(const c of b)yield*c}}function*L(a,b={}){const {geometryType:c,objectIdField:d}=b;for(const e of a){const {geometry:g,properties:f,id:n}=e;if(g&&u[g.type]!==c)continue;a=f||{};let m=void 0;d&&(m=a[d],null==n||m||(a[d]=m=n));yield new I.OptimizedFeature(g?M(new J,g,b):null,a,null,m??void 0)}}function N(a){for(const b of a)if(2<b.length)return!0;return!1}function A(a){let b=0;for(let c=0;c<a.length;c++){const d=a[c],e=a[(c+1)%a.length];b+=d[0]*
e[1]-e[0]*d[1]}return 0>=b}function B(a){const b=a[0],c=a[a.length-1];b[0]===c[0]&&b[1]===c[1]&&b[2]===c[2]||a.push(b);return a}function M(a,b,c){switch(b.type){case "LineString":return r(a,b.coordinates,c),a;case "MultiLineString":for(const e of b.coordinates)r(a,e,c);return a;case "MultiPoint":return r(a,b.coordinates,c),a;case "MultiPolygon":for(var d of b.coordinates)for(C(a,d[0],c),b=1;b<d.length;b++)D(a,d[b],c);return a;case "Point":return y(a,b.coordinates,c),a;case "Polygon":d=b.coordinates;
C(a,d[0],c);for(b=1;b<d.length;b++)D(a,d[b],c);return a}}function C(a,b,c){b=B(b);A(b)?r(a,b,c):E(a,b,c)}function D(a,b,c){b=B(b);A(b)?E(a,b,c):r(a,b,c)}function r(a,b,c){for(const d of b)y(a,d,c);a.lengths.push(b.length)}function E(a,b,c){for(let d=b.length-1;0<=d;d--)y(a,b[d],c);a.lengths.push(b.length)}function y(a,b,c){const [d,e,g]=b;a.coords.push(d,e);c.hasZ&&a.coords.push(g||0)}const u={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",
Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};q.createOptimizedFeatures=function(a,b){return Array.from(L(z(a),b))};q.getGeometryType=function(a){return u[a]};q.inferLayerProperties=function(a,b={}){const c=[];var d=new Set;const e=new Set;var g=!1;let f=null,n=!1,m=void 0;({geometryType:b=null}=b);var k=!1;for(const t of z(a)){const {geometry:v,properties:l,id:p}=t;if(v&&(b||=u[v.type],u[v.type]!==b))continue;g||(g=K(v),g=N(g));!n&&(n=null!=p)&&(m=typeof p,
l&&(f=Object.keys(l).filter(h=>l[h]===p)));l&&f&&n&&null!=p&&(1<f.length?f=f.filter(h=>l[h]===p):1===f.length&&(f=l[f[0]]===p?f:[]));if(!k&&l){a=!0;for(const h in l){if(d.has(h))continue;k=l[h];if(null==k){a=!1;e.add(h);continue}a:switch(typeof k){case "string":k=G.isISO8601Date(k)?"esriFieldTypeDate":"esriFieldTypeString";break a;case "number":k="esriFieldTypeDouble";break a;default:k="unknown"}if("unknown"===k){e.add(h);continue}e.delete(h);d.add(h);const F=x.normalizeFieldName(h);F&&c.push({name:F,
alias:h,type:k})}k=a}}if(d=x.normalizeFieldName(1===f?.length&&f[0]||null)??void 0)for(const t of c)if(t.name===d&&x.isNumericField(t)){t.type="esriFieldTypeOID";break}return{fields:c,geometryType:b,hasZ:g,objectIdFieldName:d,objectIdFieldType:m,unknownFields:Array.from(e)}};q.validateGeoJSON=function(a,b=4326){if(!a)throw new w("geojson-layer:empty","GeoJSON data is empty");if("Feature"!==a.type&&"FeatureCollection"!==a.type)throw new w("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",
{data:a});({crs:a}=a);if(a){var c="string"===typeof a?a:"name"===a.type?a.properties.name:"EPSG"===a.type?a.properties.code:null;b=H.isWGS84({wkid:b})?RegExp(".*(CRS84H?|4326)$","i"):new RegExp(`.*(${b})$`,"i");if(!c||!b.test(c))throw new w("geojson:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:a});}};Object.defineProperty(q,Symbol.toStringTag,{value:"Module"})});