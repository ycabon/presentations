// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../chunks/vec32","./projectors"],function(l,m,f){l.projectVec3Array=function(g,c,d,h,n,k,b=1){c=f.getProjector(c,n,f.projectorCache);if(null==c)return!1;if(c===f.copy3){if(g===h&&d===k)return!0;b=d+b;for(let a=d,e=k;a<b;++a,++e)m.copy(h[e],g[a]);return!0}b=d+b;for(let a=d,e=k;a<b;++a,++e)c(g[a],0,h[e],0);return!0};Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})});