import { a as i$1 } from './geometryEngineBase-9507bd46.js';
import { ee as t$1 } from './_virtual_index-634cbc09.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function r(n){return i$1.extendedSpatialReferenceInfo(n)}function t(r,t,i){return i$1.clip(t$1,r,t,i)}function i(r,t,i){return i$1.cut(t$1,r,t,i)}function s(r,t,i){return i$1.contains(t$1,r,t,i)}function u(r,t,i){return i$1.crosses(t$1,r,t,i)}function o(r,t,i,s){return i$1.distance(t$1,r,t,i,s)}function a(r,t,i){return i$1.equals(t$1,r,t,i)}function c(r,t,i){return i$1.intersects(t$1,r,t,i)}function f(r,t,i){return i$1.touches(t$1,r,t,i)}function l(r,t,i){return i$1.within(t$1,r,t,i)}function p(r,t,i){return i$1.disjoint(t$1,r,t,i)}function g(r,t,i){return i$1.overlaps(t$1,r,t,i)}function d(r,t,i,s){return i$1.relate(t$1,r,t,i,s)}function m(r,t){return i$1.isSimple(t$1,r,t)}function h(r,t){return i$1.simplify(t$1,r,t)}function y(r,t,i=!1){return i$1.convexHull(t$1,r,t,i)}function x(r,t,i){return i$1.difference(t$1,r,t,i)}function w(r,t,i){return i$1.symmetricDifference(t$1,r,t,i)}function A(r,t,i){return i$1.intersect(t$1,r,t,i)}function E(r,t,i=null){return i$1.union(t$1,r,t,i)}function j(r,t,i,s,u,o,a){return i$1.offset(t$1,r,t,i,s,u,o,a)}function v(r,t,i,s,u=!1){return i$1.buffer(t$1,r,t,i,s,u)}function z(r,t,i,s,u,o,a){return i$1.geodesicBuffer(t$1,r,t,i,s,u,o,a)}function I(r,t,i,s=!0){return i$1.nearestCoordinate(t$1,r,t,i,s)}function V(r,t,i){return i$1.nearestVertex(t$1,r,t,i)}function D(r,t,i,s,u){return i$1.nearestVertices(t$1,r,t,i,s,u)}function H(n,r,t,i){if(null==r||null==i)throw new Error("Illegal Argument Exception");const s=i$1.rotate(r,t,i);return s.spatialReference=n,s}function R(n,r,t){if(null==r||null==t)throw new Error("Illegal Argument Exception");const i=i$1.flipHorizontal(r,t);return i.spatialReference=n,i}function b(n,r,t){if(null==r||null==t)throw new Error("Illegal Argument Exception");const i=i$1.flipVertical(r,t);return i.spatialReference=n,i}function B(r,t,i,s,u){return i$1.generalize(t$1,r,t,i,s,u)}function L(r,t,i,s){return i$1.densify(t$1,r,t,i,s)}function S(r,t,i,s,u=0){return i$1.geodesicDensify(t$1,r,t,i,s,u)}function _(r,t,i){return i$1.planarArea(t$1,r,t,i)}function q(r,t,i){return i$1.planarLength(t$1,r,t,i)}function C(r,t,i,s){return i$1.geodesicArea(t$1,r,t,i,s)}function k(r,t,i,s){return i$1.geodesicLength(t$1,r,t,i,s)}var F=Object.freeze({__proto__:null,extendedSpatialReferenceInfo:r,clip:t,cut:i,contains:s,crosses:u,distance:o,equals:a,intersects:c,touches:f,within:l,disjoint:p,overlaps:g,relate:d,isSimple:m,simplify:h,convexHull:y,difference:x,symmetricDifference:w,intersect:A,union:E,offset:j,buffer:v,geodesicBuffer:z,nearestCoordinate:I,nearestVertex:V,nearestVertices:D,rotate:H,flipHorizontal:R,flipVertical:b,generalize:B,densify:L,geodesicDensify:S,planarArea:_,planarLength:q,geodesicArea:C,geodesicLength:k});

export { A, B, C, D, E, F, H, I, L, R, S, V, _, a, b, c, d, f, g, h, i, j, k, l, m, o, p, q, r, s, t, u, v, w, x, y, z };
