// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../core/Error ../../core/Logger ../../geometry/support/jsonUtils ./OptimizedFeature ./OptimizedFeatureSet ./OptimizedGeometry".split(" "),function(na,l,C,ha,F,A,ia,y){function q(a,b){return a?b?4:3:b?3:2}function G(a,b,c,d){if(a){if(c)return b&&d?da:H;if(b&&d)return ja}else if(b&&d)return H;return ea}function I(a,b){return Math.round((b-a.translate[0])/a.scale[0])}function J(a,b){return Math.round((a.translate[1]-b)/a.scale[1])}function L(a,b){return b*a.scale[0]+a.translate[0]}
function M(a,b){return a.translate[1]-b*a.scale[1]}function K(a){a=a.coords;return{x:a[0],y:a[1]}}function fa(a,b){a.coords[0]=b.x;a.coords[1]=b.y;return a}function N(a){a=a.coords;return{x:a[0],y:a[1],z:a[2]}}function ka(a,b){a.coords[0]=b.x;a.coords[1]=b.y;a.coords[2]=b.z;return a}function O(a){a=a.coords;return{x:a[0],y:a[1],m:a[2]}}function la(a,b){a.coords[0]=b.x;a.coords[1]=b.y;a.coords[2]=b.m;return a}function P(a){a=a.coords;return{x:a[0],y:a[1],z:a[2],m:a[3]}}function ma(a,b){a.coords[0]=
b.x;a.coords[1]=b.y;a.coords[2]=b.z;a.coords[3]=b.m;return a}function Q(a,b){return a&&b?ma:a?ka:b?la:fa}function R(a,b,c){if(!a)return null;for(var d=q(b,c),e=[],f=0;f<a.coords.length;f+=d){for(var g=[],h=0;h<d;h++)g.push(a.coords[f+h]);e.push(g)}return b?c?{points:e,hasZ:b,hasM:c}:{points:e,hasZ:b}:c?{points:e,hasM:c}:{points:e}}function S(a,b,c){void 0===c&&(c=q(b.hasZ,b.hasM));a.lengths[0]=b.points.length;var d=a.coords,e=0,f=0;for(b=b.points;f<b.length;f++)for(var g=b[f],h=0;h<c;h++)d[e++]=g[h];
return a}function T(a,b,c){if(!a)return null;var d=q(b,c),e=a.coords,f=[],g=0,h=0;for(a=a.lengths;h<a.length;h++){for(var k=a[h],m=[],v=0;v<k;v++){for(var p=[],n=0;n<d;n++)p.push(e[g++]);m.push(p)}f.push(m)}return b?c?{paths:f,hasZ:b,hasM:c}:{paths:f,hasZ:b}:c?{paths:f,hasM:c}:{paths:f}}function U(a,b,c){void 0===c&&(c=q(b.hasZ,b.hasM));var d=a.lengths,e=a.coords,f=0,g=0;for(b=b.paths;g<b.length;g++){for(var h=b[g],k=0,m=h;k<m.length;k++)for(var v=m[k],p=0;p<c;p++)e[f++]=v[p];d.push(h.length)}return a}
function V(a,b,c){if(!a)return null;var d=q(b,c),e=a.coords,f=[],g=0,h=0;for(a=a.lengths;h<a.length;h++){for(var k=a[h],m=[],v=0;v<k;v++){for(var p=[],n=0;n<d;n++)p.push(e[g++]);m.push(p)}f.push(m)}return b?c?{rings:f,hasZ:b,hasM:c}:{rings:f,hasZ:b}:c?{rings:f,hasM:c}:{rings:f}}function W(a,b,c,d){void 0===c&&(c=b.hasZ);void 0===d&&(d=b.hasM);ga(a,b.rings,c,d);return a}function ga(a,b,c,d){c=q(c,d);d=a.lengths;for(var e=a.coords,f=0,g=d.length=e.length=0;g<b.length;g++){for(var h=b[g],k=0,m=h;k<m.length;k++)for(var v=
m[k],p=0;p<c;p++)e[f++]=v[p];d.push(h.length)}return a}function X(a,b,c,d,e,f){a.length=0;if(!c){for(d=0;d<b.length;d++)e=b[d],a.push(new A.default(null,e.attributes,null,e.attributes[f]));return a}switch(c){case "esriGeometryPoint":d=Q(d,e);for(e=0;e<b.length;e++){var g=b[e];c=g.geometry;var g=g.attributes,h=void 0;c&&(h=d(new y.default,c));a.push(new A.default(h,g,null,g[f]))}break;case "esriGeometryMultipoint":d=q(d,e);for(e=0;e<b.length;e++)g=b[e],c=g.geometry,g=g.attributes,h=void 0,c&&(h=S(new y.default,
c,d)),a.push(new A.default(h,g,null,g[f]));break;case "esriGeometryPolyline":d=q(d,e);for(e=0;e<b.length;e++)g=b[e],c=g.geometry,g=g.attributes,h=void 0,c&&(h=U(new y.default,c,d)),a.push(new A.default(h,g,null,g[f]));break;case "esriGeometryPolygon":for(c=0;c<b.length;c++){var k=b[c],g=k.geometry,h=k.centroid,k=k.attributes,m=void 0;g&&(m=W(new y.default,g,d,e));h?a.push(new A.default(m,k,fa(new y.default,h),k[f])):a.push(new A.default(m,k,null,k[f]))}break;default:D.error("convertToFeatureSet:unknown-geometry",
new C("Unable to parse unknown geometry type '"+c+"'")),a.length=0}return a}function Y(a,b,c,d,e){a.length=0;switch(c){case "esriGeometryPoint":c=K;d&&e?c=P:d?c=N:e&&(c=O);for(d=0;d<b.length;d++){var f=b[d];e=f.geometry;f=f.attributes;e=e?c(e):null;a.push({attributes:f,geometry:e})}break;case "esriGeometryMultipoint":for(c=0;c<b.length;c++){var g=b[c],f=g.geometry,g=g.attributes,h=void 0;f&&(h=R(f,d,e));a.push({attributes:g,geometry:h})}break;case "esriGeometryPolyline":for(c=0;c<b.length;c++)g=b[c],
f=g.geometry,g=g.attributes,h=void 0,f&&(h=T(f,d,e)),a.push({attributes:g,geometry:h});break;case "esriGeometryPolygon":for(c=0;c<b.length;c++){var h=b[c],g=h.geometry,f=h.attributes,k=h.centroid,h=void 0;g&&(h=V(g,d,e));k?(g=K(k),a.push({attributes:f,centroid:g,geometry:h})):a.push({attributes:f,geometry:h})}break;default:D.error("convertToFeatureSet:unknown-geometry",new C("Unable to parse unknown geometry type '"+c+"'"))}return a}function Z(a,b,c,d,e,f,g,h){void 0===g&&(g=c);void 0===h&&(h=d);
a.lengths.length&&(a.lengths.length=0);a.coords.length&&(a.coords.length=0);if(!b||!b.coords.length)return null;e=aa[e];var k=b.coords;b=b.lengths;var m=q(c,d),v=q(c&&g,d&&h);c=G(c,d,g,h);if(!b.length)return c(a.coords,k,0,0,I(f,k[0]),J(f,k[1])),a.lengths.length&&(a.lengths.length=0),a.coords.length=m,a;for(var p,n=0,l,t=0,u=0;u<b.length;u++){var z=b[u];if(!(z<e)){var w=0;l=t;h=d=I(f,k[n]);p=g=J(f,k[n+1]);c(a.coords,k,l,n,h,p);w++;n+=m;l+=v;for(var x=1;x<z;x++,n+=m)if(h=I(f,k[n]),p=J(f,k[n+1]),h!==
d||p!==g)c(a.coords,k,l,n,h-d,p-g),l+=v,w++,d=h,g=p;w>=e&&(a.lengths.push(w),t=l)}}a.coords.length=t;return a.coords.length?a:null}function ba(a,b,c,d,e,f,g){for(var h=d,k=0,m,l=f+c;l<g;l+=c){m=b[l];var p=b[l+1],n=b[g],r=b[g+1],t=b[f],u=b[f+1],q=n-t,w=r-u;if(0!==q||0!==w){var x=((m-t)*q+(p-u)*w)/(q*q+w*w);1<x?(t=n,u=r):0<x&&(t+=q*x,u+=w*x)}q=m-t;w=p-u;m=q*q+w*w;m>h&&(k=l,h=m)}h>d&&(k-f>c&&ba(a,b,c,d,e,f,k),e(a,b,a.length,k,b[k],b[k+1]),g-k>c&&ba(a,b,c,d,e,k,g))}function ca(a,b,c,d,e){var f=b.coords,
g=b.lengths,h=c?d?da:H:d?H:ea;c=q(c,d);if(!f.length)return a!==b&&(a.lengths.length=0,a.coords.length=0),a;if(!g.length)return h(a.coords,f,0,0,L(e,f[0]),M(e,f[1])),a!==b&&(a.lengths.length=0,a.coords.length=c),a;var k=e.scale;d=k[0];for(var k=k[1],m=0,l=0;l<g.length;l++){var p=g[l];a.lengths[l]=p;var n=L(e,f[m]),r=M(e,f[m+1]);h(a.coords,f,m,m,n,r);for(var m=m+c,t=1;t<p;t++,m+=c)n+=f[m]*d,r-=f[m+1]*k,h(a.coords,f,m,m,n,r)}a!==b&&(a.lengths.length=g.length,a.coords.length=f.length);return a}Object.defineProperty(l,
"__esModule",{value:!0});var D=ha.getLogger("esri.tasks.support.optimizedFeatureSet"),aa={esriGeometryPoint:0,esriGeometryPolyline:2,esriGeometryPolygon:3,esriGeometryMultipoint:0},ea=function(a,b,c,d,e,f){a[c]=e;a[c+1]=f},H=function(a,b,c,d,e,f){a[c]=e;a[c+1]=f;a[c+2]=b[d+2]},ja=function(a,b,c,d,e,f){a[c]=e;a[c+1]=f;a[c+2]=b[d+3]},da=function(a,b,c,d,e,f){a[c]=e;a[c+1]=f;a[c+2]=b[d+2];a[c+3]=b[d+3]};l.quantizeX=I;l.quantizeY=J;l.hydrateX=L;l.hydrateY=M;l.convertToPoint=function(a,b,c){return a?b?
c?P(a):N(a):c?O(a):K(a):null};l.convertFromPoint=function(a,b,c){void 0===c&&(c=Q(null!=b.z,null!=b.m));return c(a,b)};l.convertToMultipoint=R;l.convertFromMultipoint=S;l.convertToPolyline=T;l.convertFromPolyline=U;l.convertToPolygon=V;l.convertFromPolygon=W;l.convertFromNestedArray=ga;var B=[],E=[];l.convertFromFeature=function(a,b,c,d,e){B[0]=a;a=X(E,B,b,c,d,e)[0];B.length=E.length=0;return a};l.convertFromFeatures=X;l.convertToFeature=function(a,b,c,d){E[0]=a;Y(B,E,b,c,d);a=B[0];B.length=E.length=
0;return a};l.convertFromGeometry=function(a,b,c){if(!a)return null;var d=new y.default;"hasZ"in a&&null==b&&(b=a.hasZ);"hasM"in a&&null==c&&(c=a.hasM);if(F.isPoint(a))return Q(null!=b?b:null!=a.z,null!=c?c:null!=a.m)(d,a);if(F.isPolygon(a))return W(d,a,b,c);if(F.isPolyline(a))return U(d,a,q(b,c));if(F.isMultipoint(a))return S(d,a,q(b,c));D.error("convertFromGeometry:unknown-geometry",new C("Unable to parse unknown geometry type '"+a+"'"))};l.convertToGeometry=function(a,b,c,d){a=a&&("coords"in a?
a:a.geometry);if(!a)return null;switch(b){case "esriGeometryPoint":return b=K,c&&d?b=P:c?b=N:d&&(b=O),b(a);case "esriGeometryMultipoint":return R(a,c,d);case "esriGeometryPolyline":return T(a,c,d);case "esriGeometryPolygon":return V(a,c,d);default:D.error("convertToGeometry:unknown-geometry",new C("Unable to parse unknown geometry type '"+b+"'"))}};l.convertToFeatures=Y;l.convertToFeatureSet=function(a){var b=a.objectIdFieldName,c=a.spatialReference,d=a.transform,e=a.fields,f=a.hasM,g=a.hasZ,h=a.geometryType,
k=a.exceededTransferLimit;a={features:Y([],a.features,h,g,f),fields:e,geometryType:h,objectIdFieldName:b,spatialReference:c};d&&(a.transform=d);k&&(a.exceededTransferLimit=k);f&&(a.hasM=f);g&&(a.hasZ=g);return a};l.convertFromFeatureSet=function(a,b){var c=new ia.default,d=a.hasM,e=a.hasZ,f=a.features,g=a.objectIdFieldName,h=a.spatialReference,k=a.geometryType,m=a.exceededTransferLimit,l=a.transform;c.fields=a.fields;c.geometryType=k;c.objectIdFieldName=g||b;c.spatialReference=h;if(!c.objectIdFieldName)return D.error(new C("optimized-features:invalid-objectIdFieldName",
"objectIdFieldName is missing")),c;f&&X(c.features,f,k,e,d,c.objectIdFieldName);m&&(c.exceededTransferLimit=m);d&&(c.hasM=d);e&&(c.hasZ=e);l&&(c.transform=l);return c};l.hydrateOptimizedFeatureSet=function(a){var b=a.transform,c=a.hasM,d=a.hasZ;if(!b)return a;for(var e=0,f=a.features;e<f.length;e++){var g=f[e];g.geometry&&ca(g.geometry,g.geometry,c,d,b);g.centroid&&ca(g.centroid,g.centroid,c,d,b)}a.transform=null;return a};l.quantizeOptimizedFeatureSet=function(a,b){var c=b.geometryType,d=b.features,
e=b.hasM,f=b.hasZ;if(!a)return b;for(var g=0;g<d.length;g++){var h=d[g],k=new A.default(new y.default,h.attributes);Z(k.geometry,h.geometry,e,f,c,a);h.centroid&&(k.centroid=new y.default,Z(k.centroid,h.centroid,e,f,"esriGeometryPoint",a));d[g]=k}b.transform=a;return b};l.quantizeOptimizedGeometry=Z;l.generalizeOptimizedGeometry=function(a,b,c,d,e,f,g,h){void 0===g&&(g=c);void 0===h&&(h=d);a.lengths.length&&(a.lengths.length=0);a.coords.length&&(a.coords.length=0);if(!b||!b.coords.length)return null;
e=aa[e];var k=b.coords;b=b.lengths;var m=q(c,d),l=q(c&&g,d&&h);c=G(c,d,g,h);if(!b.length)return c(a.coords,k,0,0,k[0],k[1]),a.lengths.length&&(a.lengths.length=0),a.coords.length=m,a;d=0;f*=f;for(g=0;g<b.length;g++){h=b[g];if(!(h<e)){var p=a.coords.length/l,n=d,r=d+(h-1)*m;c(a.coords,k,a.coords.length,n,k[n],k[n+1]);ba(a.coords,k,m,f,c,n,r);c(a.coords,k,a.coords.length,r,k[r],k[r+1]);n=a.coords.length/l-p;n>=e?a.lengths.push(n):a.coords.length=p*l}d+=h*m}return a.coords.length?a:null};l.getBoundsOptimizedGeometry=
function(a,b,c,d){c=q(c,d);var e=d=Number.POSITIVE_INFINITY,f=Number.NEGATIVE_INFINITY,g=Number.NEGATIVE_INFINITY;if(b&&b.coords){b=b.coords;for(var h=0;h<b.length;h+=c){var k=b[h],m=b[h+1];d=Math.min(d,k);f=Math.max(f,k);e=Math.min(e,m);g=Math.max(g,m)}}a[0]=d;a[1]=e;a[2]=f;a[3]=g;return a};l.getQuantizedBoundsOptimizedGeometry=function(a,b,c,d){c=q(c,d);d=b.coords;var e=Number.POSITIVE_INFINITY,f=Number.POSITIVE_INFINITY,g=Number.NEGATIVE_INFINITY,h=Number.NEGATIVE_INFINITY,k=0,m=0;for(b=b.lengths;m<
b.length;m++)for(var l=b[m],p=d[k],n=d[k+1],e=Math.min(p,e),f=Math.min(n,f),g=Math.max(p,g),h=Math.max(n,h),k=k+c,r=1;r<l;r++,k+=c){var t=d[k],u=d[k+1],p=p+t,n=n+u;0>t&&(e=Math.min(e,p));0<t&&(g=Math.max(g,p));0>u?f=Math.min(f,n):0<u&&(h=Math.max(h,n))}a[0]=e;a[1]=f;a[2]=g;a[3]=h;return a};l.hydrateOptimizedGeometry=ca;l.removeZMValues=function(a,b,c,d,e,f){var g,h=q(c,d);c=G(c,d,e,f);d=b.coords;a.coords.length=0;a.lengths.length=0;(g=a.lengths).push.apply(g,b.lengths);for(b=0;b<d.length;b+=h)c(a.coords,
d,a.coords.length,b,d[b],d[b+1]);return a};l.removeCollinearVectices=function(a,b,c,d,e){if(!b||!b.coords||!b.coords.length)return null;c=aa[c];var f=b.coords;b=b.lengths;var g=G(d,e,d,e);d=q(d,e);for(var h=e=0,k=0,l=0,v=0;v<b.length;v++){var p=b[v],h=l;g(a.coords,f,h,e,f[e],f[e+1]);e+=d;var n=f[e],r=f[e+1],t=n,u=r,z=r/n,h=h+d;g(a.coords,f,h,e,t,u);e+=d;for(var w=2;w<p;w++){var n=f[e],r=f[e+1],x=r/n,y=z===x||!isFinite(z)&&!isFinite(x),z=y&&isFinite(x)?0<=z&&0<=x||0>=z&&0>=x:0<=u&&0<=r||0>=u&&0>=r;
y&&z?(t+=n,u+=r):(t=n,u=r,h+=d);g(a.coords,f,h,e,t,u);e+=d;z=x}h+=d;p=(h-l)/d;p>=c&&(a.lengths[k]=p,l=h,k++)}a.coords.length>h&&(a.coords.length=h);a.lengths.length>k&&(a.lengths.length=k);return a.coords.length?a:null}});