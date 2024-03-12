/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{isSupported as o}from"../geometry/support/geodesicUtils.js";import{c as p,b as s}from"./unitUtils.js";function t(t,i,r,a,...e){return p(t)&&o(t)?i.apply(void 0,e):s(t)?r.apply(void 0,e):a.apply(void 0,e)}const i=1e5;export{i as a,t as g};
