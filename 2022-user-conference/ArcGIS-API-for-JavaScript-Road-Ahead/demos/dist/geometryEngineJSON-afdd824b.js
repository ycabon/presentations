import { G as s$1 } from './geometryEngineBase-81fd5c9e.js';
import { sn as t$1 } from './_virtual_index-9b831d4a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function t(n){return s$1.extendedSpatialReferenceInfo(n)}function r(t,r,i){return s$1.clip(t$1,t,r,i)}function i(t,r,i){return s$1.cut(t$1,t,r,i)}function s(t,r,i){return s$1.contains(t$1,t,r,i)}function o(t,r,i){return s$1.crosses(t$1,t,r,i)}function u(t,r,i,s){return s$1.distance(t$1,t,r,i,s)}function a(t,r,i){return s$1.equals(t$1,t,r,i)}function c(t,r,i){return s$1.intersects(t$1,t,r,i)}function f(t,r,i){return s$1.touches(t$1,t,r,i)}function l(t,r,i){return s$1.within(t$1,t,r,i)}function p(t,r,i){return s$1.disjoint(t$1,t,r,i)}function g(t,r,i){return s$1.overlaps(t$1,t,r,i)}function d(t,r,i,s){return s$1.relate(t$1,t,r,i,s)}function m(t,r){return s$1.isSimple(t$1,t,r)}function y(t,r){return s$1.simplify(t$1,t,r)}function h(t,r,i=!1){return s$1.convexHull(t$1,t,r,i)}function x(t,r,i){return s$1.difference(t$1,t,r,i)}function w(t,r,i){return s$1.symmetricDifference(t$1,t,r,i)}function A(t,r,i){return s$1.intersect(t$1,t,r,i)}function j(t,r,i=null){return s$1.union(t$1,t,r,i)}function E(t,r,i,s,o,u,a){return s$1.offset(t$1,t,r,i,s,o,u,a)}function b(t,r,i,s,o=!1){return s$1.buffer(t$1,t,r,i,s,o)}function v(t,r,i,s,o,u,a){return s$1.geodesicBuffer(t$1,t,r,i,s,o,u,a)}function z(t,r,i,s=!0){return s$1.nearestCoordinate(t$1,t,r,i,s)}function I(t,r,i){return s$1.nearestVertex(t$1,t,r,i)}function S(t,r,i,s,o){return s$1.nearestVertices(t$1,t,r,i,s,o)}function V(n,t,r,i){if(null==t||null==i)throw new Error("Illegal Argument Exception");const s=s$1.rotate(t,r,i);return s.spatialReference=n,s}function D(n,t,r){if(null==t||null==r)throw new Error("Illegal Argument Exception");const i=s$1.flipHorizontal(t,r);return i.spatialReference=n,i}function H(n,t,r){if(null==t||null==r)throw new Error("Illegal Argument Exception");const i=s$1.flipVertical(t,r);return i.spatialReference=n,i}function R(t,r,i,s,o){return s$1.generalize(t$1,t,r,i,s,o)}function B(t,r,i,s){return s$1.densify(t$1,t,r,i,s)}function L(t,r,i,s,o=0){return s$1.geodesicDensify(t$1,t,r,i,s,o)}function _(t,r,i){return s$1.planarArea(t$1,t,r,i)}function q(t,r,i){return s$1.planarLength(t$1,t,r,i)}function C(t,r,i,s){return s$1.geodesicArea(t$1,t,r,i,s)}function G(t,r,i,s){return s$1.geodesicLength(t$1,t,r,i,s)}const O=Object.freeze(Object.defineProperty({__proto__:null,extendedSpatialReferenceInfo:t,clip:r,cut:i,contains:s,crosses:o,distance:u,equals:a,intersects:c,touches:f,within:l,disjoint:p,overlaps:g,relate:d,isSimple:m,simplify:y,convexHull:h,difference:x,symmetricDifference:w,intersect:A,union:j,offset:E,buffer:b,geodesicBuffer:v,nearestCoordinate:z,nearestVertex:I,nearestVertices:S,rotate:V,flipHorizontal:D,flipVertical:H,generalize:R,densify:B,geodesicDensify:L,planarArea:_,planarLength:q,geodesicArea:C,geodesicLength:G},Symbol.toStringTag,{value:"Module"}));

export { A, B, C, D, E, G, H, I, L, O, R, S, V, _, a, b, c, d, f, g, h, i, j, l, m, o, p, q, r, s, t, u, v, w, x, y, z };