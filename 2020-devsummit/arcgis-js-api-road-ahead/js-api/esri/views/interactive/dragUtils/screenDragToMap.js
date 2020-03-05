// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../core/tsSupport/assignHelper","../../../core/maybe"],function(v,c,u,h){function t(d,a,q){if(h.isNone(d))return null;var b=null,e=0,f=0,c=0;return function(g){if("cancel"===g.action)return null;"start"===g.action&&(b=d(g.start,q),c=f=e=0);var l=e,m=f,n=c,k=d(g.screenPoint,q);h.isSome(b)&&h.isSome(k)&&(l=a&1?k.x-b.x:0,m=a&2?k.y-b.y:0,n=a&4?k.z-b.z:0);g={action:g.action,deltaX:l,deltaY:m,deltaZ:n,spatialReference:q};e=l;f=m;c=n;return g}}Object.defineProperty(c,"__esModule",
{value:!0});c.createFromProject=t;c.createMapAxisConstrainedScreenToMapDrag=function(d,a,c){if(h.isNone(d))return null;var b=Math.sqrt(a[0]*a[0]+a[1]*a[1]+a[2]*a[2]);if(0===b)return null;var e=a[0]/b,f=a[1]/b,q=a[2]/b,g=null,l=0,m=0,n=0;return function(a){if("cancel"===a.action)return null;"start"===a.action&&(g=d(a.start,c),n=m=l=0);var b=l,r=m,p=n,k=d(a.screenPoint,c);h.isSome(g)&&h.isSome(k)&&(b=k.x-g.x,r=k.y-g.y,p=k.z-g.z,p=b*e+r*f+p*q,b=p*e,r=p*f,p*=q);a={action:a.action,deltaX:b,deltaY:r,deltaZ:p,
previousDeltaX:l,previousDeltaY:m,previousDeltaZ:n,spatialReference:c};l=b;m=r;n=p;return a}};c.createXYConstrainedFromProject=function(d,a){return t(d,c.horizontalDegreesOfFreedom,a)};c.createZConstrainedFromProject=function(d,a){return t(d,c.verticalDegreesOfFreedom,a)};c.withHistoryInfo=function(c){if(h.isNone(c))return c;var a=0,d=0,b=0;return function(e){var f=c(e);if(h.isNone(f))return null;"start"===e.action&&(b=d=a=0);e=u({},f,{deltaDeltaX:f.deltaX-a,deltaDeltaY:f.deltaY-d,deltaDeltaZ:f.deltaZ-
b});a=f.deltaX;d=f.deltaY;b=f.deltaZ;return e}};c.withScreenHistoryInfo=function(c){if(h.isNone(c))return c;var a=0,d=0;return function(b){var e=c(b);if(h.isNone(e))return null;"start"===b.action&&(a=b.start.x,d=b.start.y);e=u({},e,{screenDeltaDeltaX:b.screenPoint.x-a,screenDeltaDeltaY:b.screenPoint.y-d});a=b.screenPoint.x;d=b.screenPoint.y;return e}};c.horizontalDegreesOfFreedom=3;c.verticalDegreesOfFreedom=4});