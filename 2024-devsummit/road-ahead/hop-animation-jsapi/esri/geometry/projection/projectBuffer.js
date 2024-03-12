// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","./projectors"],function(l,f){l.projectBuffer=function(g,c,d,h,m,k,b=1){c=f.getProjector(c,m,f.projectorCache);if(null==c)return!1;if(c===f.copy3){if(g===h&&d===k)return!0;b=d+3*b;for(let a=d,e=k;a<b;a++,e++)h[e]=g[a];return!0}b=d+3*b;for(let a=d,e=k;a<b;a+=3,e+=3)c(g,a,h,e);return!0};Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})});