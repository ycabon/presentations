// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../../chunks/vec32","../../../../core/libs/gl-matrix-2/factories/vec3f64","../../../../geometry/support/triangle"],function(r,a,t,w){const c=t.create(),q=t.create(),u=t.create(),h=t.create();r.computeAttachmentOriginLines=function(b,d,k){if(!b)return!1;a.set(k,0,0,0);a.set(h,0,0,0);let e=0,m=0;const {size:l,data:f,indices:g}=b;b=g.length-1;d=b+(d?2:0);for(let p=0;p<d;p+=2){var n=g[p<b?p:b]*l;const v=g[p<b?p+1:0]*l;c[0]=f[n];c[1]=f[n+1];c[2]=f[n+2];q[0]=f[v];q[1]=f[v+1];q[2]=
f[v+2];a.scale(c,a.add(c,c,q),.5);n=a.dist(c,q);0<n?(a.add(k,k,a.scale(c,c,n)),e+=n):0===e&&(a.add(h,h,c),m++)}return 0!==e?(a.scale(k,k,1/e),!0):0!==m?(a.scale(k,h,1/m),!0):!1};r.computeAttachmentOriginPoints=function(b,d){if(!b)return!1;const {size:k,data:e,indices:m}=b;a.set(d,0,0,0);b=-1;let l=0;for(let f=0;f<m.length;f++){const g=m[f]*k;b!==g&&(d[0]+=e[g],d[1]+=e[g+1],d[2]+=e[g+2],l++);b=g}1<l&&a.scale(d,d,1/l);return 0<l};r.computeAttachmentOriginTriangles=function(b,d){if(!b)return!1;const {size:k,
data:e,indices:m}=b;a.set(d,0,0,0);a.set(h,0,0,0);let l=b=0;for(let g=0;g<m.length-2;g+=3){var f=m[g]*k;const n=m[g+1]*k,p=m[g+2]*k;a.set(c,e[f],e[f+1],e[f+2]);a.set(q,e[n],e[n+1],e[n+2]);a.set(u,e[p],e[p+1],e[p+2]);(f=w.areaPoints3d(c,q,u))?(a.add(c,c,q),a.add(c,c,u),a.scale(c,c,1/3*f),a.add(d,d,c),b+=f):(a.add(h,h,c),a.add(h,h,q),a.add(h,h,u),l+=3)}return 0===l&&0===b?!1:0!==b?(a.scale(d,d,1/b),!0):0!==l?(a.scale(d,h,1/l),!0):!1};Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})});