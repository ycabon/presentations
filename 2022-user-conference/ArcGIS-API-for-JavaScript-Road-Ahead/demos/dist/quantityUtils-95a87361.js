import { eT as P, t, eU as E } from './_virtual_index-9b831d4a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function r(t,u){return {type:P(u),value:t,unit:u}}function o(t,u){return {type:P(u),value:t,unit:u}}function a(t,u){return {type:P(u),value:t,unit:u}}function c(t,u,e="arithmetic"){return {type:P(u),value:t,unit:u,rotationType:e}}function v(t,n){return r(E(t.value,t.unit,n),n)}function p(n,u){return t(n)?u:t(u)||n.value>E(u.value,u.unit,n.unit)?n:u}function y(n,u){return t(n)?null:{...n,value:n.value*u}}const j=o(0,"meters"),U=a(0,"square-meters");

export { U, a, c, j, o, p, r, v, y };
