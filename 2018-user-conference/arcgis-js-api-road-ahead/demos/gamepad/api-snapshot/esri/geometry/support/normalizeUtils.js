// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports ../../config ../../core/Error ../../core/Logger ../../core/promiseUtils ../Polygon ../Polyline ../SpatialReference ./spatialReferenceUtils ./webMercatorUtils ../../tasks/GeometryService".split(" "),function(S,w,L,M,N,O,A,v,x,D,y,P){function u(a){return"polygon"===a.type?a.rings:a.paths}function r(a,e){return Math.ceil((a-e)/(2*e))}function E(a,e){for(var b=0,c=u(a);b<c.length;b++)for(var f=0,g=c[b];f<g.length;f++)g[f][0]+=e;return a}function F(a){for(var e=[],b=0,c=0,f=0;f<
a.length;f++){for(var g=a[f],h=null,l=0;l<g.length;l++)h=g[l],e.push(h),0===l?c=b=h[0]:(b=Math.min(b,h[0]),c=Math.max(c,h[0]));h&&e.push([(b+c)/2,0])}return e}function G(a,e){if(!(a instanceof v||a instanceof A))throw Q.error("straightLineDensify: the input geometry is neither polyline nor polygon"),new M("straightLineDensify: the input geometry is neither polyline nor polygon");for(var b=[],c=0,f=u(a);c<f.length;c++){var g=f[c],h=[];b.push(h);h.push([g[0][0],g[0][1]]);for(var l=0;l<g.length-1;l++){var m=
g[l][0],k=g[l][1],t=g[l+1][0],n=g[l+1][1],q=Math.sqrt((t-m)*(t-m)+(n-k)*(n-k)),d=(n-k)/q,p=(t-m)/q,r=q/e;if(1<r){for(var B=1;B<=r-1;B++){var H=B*e;h.push([p*H+m,d*H+k])}q=(q+Math.floor(r-1)*e)/2;h.push([p*q+m,d*q+k])}h.push([t,n])}}return"polygon"===a.type?new A({rings:b,spatialReference:a.spatialReference}):new v({paths:b,spatialReference:a.spatialReference})}function I(a,e,b){e&&(a=G(a,1E6),a=y.webMercatorToGeographic(a,!0));b&&(a=E(a,b));return a}function J(a,e,b){if(Array.isArray(a)){var c=a[0];
if(c>e){var f=r(c,e);a[0]=c+-2*f*e}else c<b&&(f=r(c,b),a[0]=c+-2*f*b)}else c=a.x,c>e?(f=r(c,e),a=a.clone().offset(-2*f*e,0)):c<b&&(f=r(c,b),a=a.clone().offset(-2*f*b,0));return a}function R(a,e){for(var b=-1,c=function(c){var h=e.cutIndexes[c],f=e.geometries[c],g=u(f);c=function(a){var c=g[a];c.some(function(b){if(!(180>b[0])){for(var d=b=0;d<c.length;d++){var e=c[d][0];b=e>b?e:b}b=Number(b.toFixed(9));b=-360*r(b,180);for(d=0;d<c.length;d++)e=f.getPoint(a,d),f.setPoint(a,d,e.clone().offset(b,0))}return!0})};
for(var k=0;k<g.length;k++)c(k);if(h===b)if("polygon"===a[0].type)for(c=0,k=u(f);c<k.length;c++)a[h]=a[h].addRing(k[c]);else{if("polyline"===a[0].type)for(c=0,k=u(f);c<k.length;c++)a[h]=a[h].addPath(k[c])}else b=h,a[h]=f},f=0;f<e.cutIndexes.length;f++)c(f);return a}function K(a,e){if(!Array.isArray(a))return K([a],e);e||(C||(C=new P({url:L.geometryServiceUrl})),e=C);for(var b,c,f,g,h,l,m,k=0,t=[],n=[],q=0;q<a.length;q++){var d=a[q];if(d)if(b||(b=d.spatialReference,c=D.getInfo(b),l=(f=b.isWebMercator)?
102100:4326,g=z[l].maxX,h=z[l].minX,m=z[l].plus180Line,l=z[l].minus180Line),c)if("mesh"===d.type)n.push(d);else if("point"===d.type)n.push(J(d.clone(),g,h));else if("multipoint"===d.type)d=d.clone(),d.points=d.points.map(function(a){return J(a,g,h)}),n.push(d);else if("extent"===d.type){var p=d.clone(),d=p._normalize(!1,!1,c);n.push(d.rings?new A(d):d)}else if(d.extent){var p=d.extent,u=2*r(p.xmin,h)*g,d=0===u?d.clone():E(d.clone(),u);p.offset(u,0);p.intersects(m)&&p.xmax!==g?(k=p.xmax>k?p.xmax:k,
d=I(d,f),t.push(d),n.push("cut")):p.intersects(l)&&p.xmin!==h?(k=2*p.xmax*g>k?2*p.xmax*g:k,d=I(d,f,360),t.push(d),n.push("cut")):n.push(d)}else n.push(d.clone());else n.push(d);else n.push(d)}b=r(k,g);c=-90;m=b;for(k=new v;0<b;)q=-180+360*b,k.addPath([[q,c],[q,-1*c]]),c*=-1,b--;if(0<t.length&&0<m)return e.cut(t,k).then(function(a){return R(t,a)}).then(function(b){for(var c=[],d=[],h=0;h<n.length;h++){var g=n[h];if("cut"!==g)d.push(g);else{var g=b.shift(),k=a[h];"polygon"===k.type&&k.rings&&1<k.rings.length&&
g.rings.length>=k.rings.length?(c.push(g),d.push("simplify")):d.push(f?y.geographicToWebMercator(g):g)}}return c.length?e.simplify(c).then(function(a){for(var b=[],c=0;c<d.length;c++){var e=d[c];"simplify"!==e?b.push(e):b.push(f?y.geographicToWebMercator(a.shift()):a.shift())}return b}):d});b=[];for(c=0;c<n.length;c++)m=n[c],"cut"!==m?b.push(m):(m=t.shift(),b.push(!0===f?y.geographicToWebMercator(m):m));return O.resolve(b)}Object.defineProperty(w,"__esModule",{value:!0});var Q=N.getLogger("esri.geometry.support.normalizeUtils"),
z={102100:{maxX:2.0037508342788905E7,minX:-2.0037508342788905E7,plus180Line:new v({paths:[[[2.0037508342788905E7,-2.0037508342788905E7],[2.0037508342788905E7,2.0037508342788905E7]]],spatialReference:x.WebMercator}),minus180Line:new v({paths:[[[-2.0037508342788905E7,-2.0037508342788905E7],[-2.0037508342788905E7,2.0037508342788905E7]]],spatialReference:x.WebMercator})},4326:{maxX:180,minX:-180,plus180Line:new v({paths:[[[180,-180],[180,180]]],spatialReference:x.WebMercator}),minus180Line:new v({paths:[[[-180,
-180],[-180,180]]],spatialReference:x.WebMercator})}};w.straightLineDensify=G;var C;w.normalizeCentralMeridian=K;w.getDenormalizedExtent=function(a){if(!a)return null;var e=a.extent;if(!e)return null;var b=a.spatialReference&&D.getInfo(a.spatialReference);if(!b)return e;var b=b.valid,c=b[0],b=b[1],f=e.width,g=e.xmin,h=e.xmax,h=[h,g],g=h[0],h=h[1];if("extent"===a.type||0===f||f<=b||f>2*b||g<c||h>b)return e;var l;switch(a.type){case "polygon":if(1<a.rings.length)l=F(a.rings);else return e;break;case "polyline":if(1<
a.paths.length)l=F(a.paths);else return e;break;case "multipoint":l=a.points}a=e.clone();for(c=0;c<l.length;c++){var m=l[c][0];0>m?(m+=b,h=Math.max(m,h)):(m-=b,g=Math.min(m,g))}a.xmin=g;a.xmax=h;return a.width<f?(a.xmin-=b,a.xmax-=b,a):e}});