// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["../../geometry/support/coordsUtils","../../geometry/support/extentUtils"],function(t,v){function u(c,a=!1){let b=[];if(a)for(var d of c)d.geometry&&b.push.apply(b,d.geometry.points);else b=c.map(h=>h.geometry);c=[];d=[];let e=Infinity,f=-Infinity,k=0,l=0,q=0,r=0;for(const h of b){if(h)a?(c[0]=h[0],c[1]=h[1]):(c[0]=h.x,c[1]=h.y);else continue;let n=Infinity,p=-Infinity;for(const m of b){if(m===h)continue;if(m)a?(d[0]=m[0],d[1]=m[1]):(d[0]=m.x,d[1]=m.y);else continue;const g=t.getLength(c,
d);0<g&&(g<n&&(n=g),g<e&&(e=g),g>p&&(p=g),g>f&&(f=g))}Infinity!==n&&(++q,k+=n);-Infinity!==p&&(++r,l+=p)}return{minDistance:Infinity!==e?e:null,maxDistance:-Infinity!==f?f:null,avgMinDistance:q?k/q:null,avgMaxDistance:r?l/r:null}}return function(c){var {features:a}=c,b=null;switch(c.geometryType){case "point":b=u(a);break;case "multipoint":b=u(a,!0);break;case "polyline":var d=0;c=0;b=Infinity;let l=-Infinity;for(var e of a){var f=e.geometry;if(f){a=0;for(var k of f.paths)f=t.getPathLength(k),0<f&&
(a+=f);0<a&&(++d,c+=a,a<b&&(b=a),a>l&&(l=a))}}b={minLength:Infinity!==b?b:null,maxLength:-Infinity!==l?l:null,avgLength:d?c/d:null};break;case "polygon":k=e=0;c=Infinity;b=-Infinity;for(d of a)if(a=d.geometry)if(a=v.getPolygonExtent(a))a=Math.sqrt(Math.abs(a.xmax-a.xmin)*Math.abs(a.ymax-a.ymin)),0<a&&(++e,k+=a,a<c&&(c=a),a>b&&(b=a));b={minSize:Infinity!==c?c:null,maxSize:-Infinity!==b?b:null,avgSize:e?k/e:null}}return Promise.resolve(b)}});