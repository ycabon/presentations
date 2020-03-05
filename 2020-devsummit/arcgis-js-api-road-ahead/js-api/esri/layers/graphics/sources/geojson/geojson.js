// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/generatorHelper ../../../../core/tsSupport/awaiterHelper ../../../../core/tsSupport/valuesHelper ../../../../core/Error ../../OptimizedFeature ../../OptimizedGeometry".split(" "),function(J,r,w,K,x,y,D,E){function F(b){var a=[];b.forEach(function(b){return a.push(b)});return a}function C(b){var a,c,d,g;return w(this,function(f){switch(f.label){case 0:a=b.type;switch(a){case "Feature":return[3,1];case "FeatureCollection":return[3,3]}return[3,7];case 1:return[4,
b];case 2:return f.sent(),[3,7];case 3:c=0,d=b.features,f.label=4;case 4:return c<d.length?(g=d[c])?[4,g]:[3,6]:[3,7];case 5:f.sent(),f.label=6;case 6:return c++,[3,4];case 7:return[2]}})}function G(b){var a,c,d,g,f,h,k,m,n,p;return w(this,function(e){switch(e.label){case 0:if(!b)return[2,null];a=b.type;switch(a){case "Point":return[3,1];case "LineString":return[3,3];case "MultiPoint":return[3,3];case "MultiLineString":return[3,5];case "Polygon":return[3,5];case "MultiPolygon":return[3,10]}return[3,
17];case 1:return[4,b.coordinates];case 2:return e.sent(),[3,17];case 3:return[5,x(b.coordinates)];case 4:return e.sent(),[3,17];case 5:c=0,d=b.coordinates,e.label=6;case 6:if(!(c<d.length))return[3,9];g=d[c];return[5,x(g)];case 7:e.sent(),e.label=8;case 8:return c++,[3,6];case 9:return[3,17];case 10:f=0,h=b.coordinates,e.label=11;case 11:if(!(f<h.length))return[3,16];k=h[f];m=0;n=k;e.label=12;case 12:if(!(m<n.length))return[3,15];p=n[m];return[5,x(p)];case 13:e.sent(),e.label=14;case 14:return m++,
[3,12];case 15:return f++,[3,11];case 16:return[3,17];case 17:return[2]}})}function H(b,a){var c,d,g,f,h,k,m,n,p,e,z;void 0===a&&(a={});return w(this,function(l){switch(l.label){case 0:c=a.geometryType,d=a.ignoreIds,g=a.nextObjectId,f=void 0===g?1:g,l.label=1;case 1:h=b.next();k=h.value;if(m=h.done)return[2];n=k.geometry;p=k.properties;e=k.id;if(n&&A[n.type]!==c)return[3,1];z=new D.default(n?I(new E.default,n,a):null,p);z.objectId=d||null==e?f++:e;return[4,z];case 2:return l.sent(),[3,1];case 3:return[2]}})}
function t(b){for(var a=0,c=0;c<b.length;c++)var d=b[c],g=b[(c+1)%b.length],a=a+(d[0]*g[1]-g[0]*d[1]);return 0>=a}function u(b){var a=b[0],c=b[b.length-1];a[0]===c[0]&&a[1]===c[1]&&a[2]===c[2]||b.push(a);return b}function I(b,a,c){switch(a.type){case "LineString":return l(b,a.coordinates,c),b;case "MultiLineString":var d=0;for(a=a.coordinates;d<a.length;d++)l(b,a[d],c);return b;case "MultiPoint":return l(b,a.coordinates,c),b;case "MultiPolygon":d=0;for(a=a.coordinates;d<a.length;d++){var g=a[d],f=
b,h=c,k=u(g[0]);t(k)?l(f,k,h):v(f,k,h);for(f=1;f<g.length;f++){var h=b,k=c,m=u(g[f]);t(m)?v(h,m,k):l(h,m,k)}}return b;case "Point":return B(b,a.coordinates,c),b;case "Polygon":d=a.coordinates;a=u(d[0]);t(a)?l(b,a,c):v(b,a,c);for(a=1;a<d.length;a++)g=b,f=c,h=u(d[a]),t(h)?v(g,h,f):l(g,h,f);return b}}function l(b,a,c){for(var d=0;d<a.length;d++)B(b,a[d],c);b.lengths.push(a.length)}function v(b,a,c){for(var d=a.length-1;0<=d;d--)B(b,a[d],c);b.lengths.push(a.length)}function B(b,a,c){var d=a[2];b.coords.push(a[0],
a[1]);c.hasZ&&b.coords.push(d||0)}Object.defineProperty(r,"__esModule",{value:!0});var A={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};r.validateGeoJSON=function(b){if(!b)throw new y("geojson-layer:empty","GeoJSON data is empty");if("Feature"!==b.type&&"FeatureCollection"!==b.type)throw new y("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",
{data:b});if(b.crs){var a=b.crs;if("link"===a.type||!["crs84","4326"].some(function(b){return-1!==a.properties.name.toLowerCase().indexOf(b)}))throw new y("geojson-layer:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:a});}};r.inferLayerProperties=function(b,a){void 0===a&&(a={});b=C(b);var c=[],d=new Set,g=new Set,f=!1,h=Number.NEGATIVE_INFINITY,k=!1,m=void 0;a=a.geometryType;a=void 0===a?null:a;for(var n=!1;;){var p=b.next(),e=p.value;if(p.done)return{fields:c,geometryType:a,hasZ:f,maxObjectId:Math.max(0,
h),objectIdFieldType:m,objectIdOnFeature:k,unknownFields:F(g)};var l=e.geometry,p=e.properties,e=e.id;if(l&&(a||(a=A[l.type]),A[l.type]!==a))continue;if(!f)a:for(f=G(l);;){var l=f.next(),r=l.value;if(l.done){f=!1;break a}if(2<r.length){f=!0;break a}}k||(k=null!=e)&&(m=typeof e);k&&"number"===m&&null!=e&&(h=Math.max(h,e));if(!n&&p){var n=!0,q;for(q in p)if(!d.has(q))if(e=p[q],null==e)n=!1,g.add(q);else{a:switch(typeof e){case "string":e="esriFieldTypeString";break a;case "number":e="esriFieldTypeDouble";
break a;default:e="unknown"}"unknown"===e?g.add(q):(g.delete(q),d.add(q),c.push({name:q,alias:q,type:e}))}}}};r.createOptimizedFeatures=function(b,a){a:for(b=H(C(b),a),a=[];;){var c=b.next(),d=c.value;if(c.done)break a;a.push(d)}return a}});