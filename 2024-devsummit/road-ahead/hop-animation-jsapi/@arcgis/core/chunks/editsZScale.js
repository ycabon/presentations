/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{x as n,f as i}from"./unitUtils.js";function s(n,i,s){if(null==n.hasM||n.hasZ)for(const n of i)for(const i of n)i.length>2&&(i[2]*=s)}function f(i,s,f){if(!i&&!s||!f)return;const e=n(f);t(i,f,e),t(s,f,e)}function t(n,i,s){if(n)for(const f of n)e(f.geometry,i,s)}function e(f,t,e){if(!f?.spatialReference||i(f.spatialReference,t))return;const o=n(f.spatialReference)/e;if(1!==o)if("x"in f)null!=f.z&&(f.z*=o);else if("rings"in f)s(f,f.rings,o);else if("paths"in f)s(f,f.paths,o);else if("points"in f&&(null==f.hasM||f.hasZ))for(const n of f.points)n.length>2&&(n[2]*=o)}export{f as u};
