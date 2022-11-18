import { gv as r$1, bI as u, gw as h, gx as b } from './_virtual_index-1ea2035a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function r(t,n,e,r){if(null==r||t.hasZ||(r=void 0),"point"===t.type)return t.x+=n,t.y+=e,t.hasZ&&null!=r&&(t.z+=r),t;if("multipoint"===t.type){const o=t.points;for(let t=0;t<o.length;t++)o[t]=l(o[t],n,e,r);return t}if("extent"===t.type)return t.xmin+=n,t.xmax+=n,t.ymin+=e,t.ymax+=e,null!=r&&(t.zmin+=r,t.zmax+=r),t;const s=r$1(t),i="polyline"===t.type?t.paths:t.rings;for(let o=0;o<s.length;o++){const t=s[o];for(let o=0;o<t.length;o++)t[o]=l(t[o],n,e,r);}return "paths"in t?t.paths=i:t.rings=i,t}function s(t,n,e,s,i){const a=t.clone(),m=s.resolution;if("point"===a.type){if(i)r(a,n*m,-e*m);else {const t=s.state.transform,o=s.state.inverseTransform,r=t[0]*a.x+t[2]*a.y+t[4],i=t[1]*a.x+t[3]*a.y+t[5];a.x=o[0]*(r+n)+o[2]*(i+e)+o[4],a.y=o[1]*(r+n)+o[3]*(i+e)+o[5];}return a}if("multipoint"===a.type){if(i)r(a,n*m,-e*m);else {const t=a.points,o=s.state.transform,r=s.state.inverseTransform;for(let s=0;s<t.length;s++){const i=t[s],a=o[0]*i[0]+o[2]*i[1]+o[4],m=o[1]*i[0]+o[3]*i[1]+o[5],l=r[0]*(a+n)+r[2]*(m+e)+r[4],p=r[1]*(a+n)+r[3]*(m+e)+r[5];t[s]=x(i,l,p,void 0);}}return a}if("extent"===a.type){if(i)r(a,n*m,-e*m);else {const t=s.state.transform,o=s.state.inverseTransform,r=t[0]*a.xmin+t[2]*a.ymin+t[4],i=t[1]*a.xmin+t[3]*a.ymin+t[5],m=t[0]*a.xmax+t[2]*a.ymax+t[4],l=t[1]*a.xmax+t[3]*a.ymax+t[5];a.xmin=o[0]*(r+n)+o[2]*(i+e)+o[4],a.ymin=o[1]*(r+n)+o[3]*(i+e)+o[5],a.xmax=o[0]*(m+n)+o[2]*(l+e)+o[4],a.ymax=o[1]*(m+n)+o[3]*(l+e)+o[5];}return a}if(i)r(a,n*m,-e*m);else {const t=r$1(a),r="polyline"===a.type?a.paths:a.rings,i=s.state.transform,m=s.state.inverseTransform;for(let o=0;o<t.length;o++){const r=t[o];for(let t=0;t<r.length;t++){const o=r[t],s=i[0]*o[0]+i[2]*o[1]+i[4],a=i[1]*o[0]+i[3]*o[1]+i[5],l=m[0]*(s+n)+m[2]*(a+e)+m[4],p=m[1]*(s+n)+m[3]*(a+e)+m[5];r[t]=x(o,l,p,void 0);}}"paths"in a?a.paths=r:a.rings=r;}return a}function i(t,r,s,i){if("point"===t.type){const{x:n,y:e}=t,o=i?i[0]:n,a=i?i[1]:e,m=t.clone(),l=(n-o)*r+o,x=(e-a)*s+a;return m.x=l,m.y=x,m}if("multipoint"===t.type){const a=r$1(t),m=u(),[l,p,y,f]=h(m,[a]),u$1=i?i[0]:(l+y)/2,c=i?i[1]:(f+p)/2,h$1=t.clone(),g=h$1.points;for(let t=0;t<g.length;t++){const n=g[t],[e,o]=n,i=(e-u$1)*r+u$1,a=(o-c)*s+c;g[t]=x(n,i,a,void 0);}return h$1}if("extent"===t.type){const{xmin:n,xmax:e,ymin:o,ymax:a}=t,m=i?i[0]:(n+e)/2,l=i?i[1]:(a+o)/2,x=t.clone();if(x.xmin=(n-m)*r+m,x.ymax=(a-l)*s+l,x.xmax=(e-m)*r+m,x.ymin=(o-l)*s+l,x.xmin>x.xmax){const t=x.xmin,n=x.xmax;x.xmin=n,x.xmax=t;}if(x.ymin>x.ymax){const t=x.ymin,n=x.ymax;x.ymin=n,x.ymax=t;}return x}const a=r$1(t),m=u(),[l,p,y,f]=h(m,a),u$1=i?i[0]:(l+y)/2,c=i?i[1]:(f+p)/2,h$1=t.clone(),g="polyline"===h$1.type?h$1.paths:h$1.rings;for(let n=0;n<a.length;n++){const t=a[n];for(let e=0;e<t.length;e++){const o=t[e],[i,a]=o,m=(i-u$1)*r+u$1,l=(a-c)*s+c;g[n][e]=x(o,m,l,void 0);}}return "paths"in h$1?h$1.paths=g:h$1.rings=g,h$1}function a(t,n,e,o,r,s){const i=Math.sqrt((e-t)*(e-t)+(o-n)*(o-n));return Math.sqrt((r-t)*(r-t)+(s-n)*(s-n))/i}function m(n,e,o){const r=Math.atan2(e.y-o.y,e.x-o.x)-Math.atan2(n.y-o.y,n.x-o.x),s=Math.atan2(Math.sin(r),Math.cos(r));return b(s)}function l(t,n,e,o){return x(t,t[0]+n,t[1]+e,null!=t[2]&&null!=o?t[2]+o:void 0)}function x(t,n,e,o){const r=[n,e];return t.length>2&&r.push(null!=o?o:t[2]),t.length>3&&r.push(t[3]),r}

export { a, i, m, r, s };
