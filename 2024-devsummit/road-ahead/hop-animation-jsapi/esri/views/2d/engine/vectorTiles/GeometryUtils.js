// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../../geometry/support/coordsUtils","../../../../geometry/support/TileClipper"],function(d,w,p){function r(a,b){a%=b;return 0<=a?a:a+b}const x=Number.POSITIVE_INFINITY,q=Math.PI,u=128/q,v=256/360,y=1/Math.LN2;d.between=function(a,b,c){return a>=b&&a<=c||a>=c&&a<=b};d.c2pi=2*q;d.cDegTo256=v;d.cDegToRad=q/180;d.cInfinity=x;d.cPi=q;d.cRadTo256=u;d.degToByte=function(a){return r(a*v,256)};d.distanceFromToPolylineWithinThreshold=function(a,b,c,g){let e,f,h;g*=g;for(const k of c){const l=
k.length;if(!(2>l)){c=k[0].x;e=k[0].y;for(let m=1;m<l;++m){f=k[m].x;h=k[m].y;if(w.distanceToSegmentSquared(a,b,c,e,f,h)<g)return!0;c=f;e=h}}}return!1};d.getTileMargins=function(a){return 8+Math.max(16*(a-14),0)};d.interpolate=function(a,b,c){return a*(1-c)+b*c};d.isCircleOverlapingRect=function(a,b,c,g,e,f,h){b=Math.max(g,Math.min(b,f))-b;c=Math.max(e,Math.min(c,h))-c;return b*b+c*c<=a*a};d.log2=function(a){return Math.log(a)*y};d.offsetLine=function(a,b){if(0===b||Number.isNaN(b))return a;const c=
[],g=new p.Point(0,0),e=new p.Point(0,0),f=new p.Point(0,0);for(let k=0;k<a.length;k++){const l=a[k],m=[];for(let n=0;n<l.length;n++){var h=l[n-1];const t=l[n],z=l[n+1];0===n?g.setCoords(0,0):g.assignSub(t,h).normalize().rightPerpendicular();n===l.length-1?e.setCoords(0,0):e.assignSub(z,t).normalize().rightPerpendicular();f.assignAdd(g,e).normalize();h=f.x*e.x+f.y*e.y;0!==h&&f.scale(1/h);m.push(p.Point.add(t,f.scale(b)))}c.push(m)}return c};d.pointInPolygon=function(a,b,c){let g=0,e,f;for(const h of c){c=
h.length;for(let k=1;k<c;++k)e=h[k-1],f=h[k],e.y>b!==f.y>b&&(0<(f.x-e.x)*(b-e.y)-(f.y-e.y)*(a-e.x)?g++:g--)}return 0!==g};d.positiveMod=r;d.radToByte=function(a){return r(a*u,256)};d.sqr=function(a){return a*a};d.translateAnchor=function(a,b,c,g){a=new p.Point(a[0],a[1]);a.scale(g);"viewport"===b&&(b=Math.PI/180*-c,a.rotate(Math.cos(b),Math.sin(b)));return a};Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});