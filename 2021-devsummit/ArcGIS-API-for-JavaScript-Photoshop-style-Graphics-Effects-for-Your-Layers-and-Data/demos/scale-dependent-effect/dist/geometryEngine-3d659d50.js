import { a as i$1 } from './geometryEngineBase-1261a346.js';
import { hydratedAdapter as r$1 } from './hydrated-b974a6da.js';
import './_commonjsHelpers-34398bae.js';
import './index.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function r(n){return Array.isArray(n)?n[0].spatialReference:n&&n.spatialReference}function t(e){return i$1.extendedSpatialReferenceInfo(e)}function u(t,u){return i$1.clip(r$1,r(t),t,u)}function i(t,u){return i$1.cut(r$1,r(t),t,u)}function o(t,u){return i$1.contains(r$1,r(t),t,u)}function c(t,u){return i$1.crosses(r$1,r(t),t,u)}function f(t,u,i){return i$1.distance(r$1,r(t),t,u,i)}function l(t,u){return i$1.equals(r$1,r(t),t,u)}function a(t,u){return i$1.intersects(r$1,r(t),t,u)}function s(t,u){return i$1.touches(r$1,r(t),t,u)}function p(t,u){return i$1.within(r$1,r(t),t,u)}function g(t,u){return i$1.disjoint(r$1,r(t),t,u)}function m(t,u){return i$1.overlaps(r$1,r(t),t,u)}function d(t,u,i){return i$1.relate(r$1,r(t),t,u,i)}function x(t){return i$1.isSimple(r$1,r(t),t)}function w(t){return i$1.simplify(r$1,r(t),t)}function E(t,u=!1){return i$1.convexHull(r$1,r(t),t,u)}function h(t,u){return i$1.difference(r$1,r(t),t,u)}function A(t,u){return i$1.symmetricDifference(r$1,r(t),t,u)}function y(t,u){return i$1.intersect(r$1,r(t),t,u)}function R(t,u=null){return i$1.union(r$1,r(t),t,u)}function I(t,u,i,o,c,f){return i$1.offset(r$1,r(t),t,u,i,o,c,f)}function v(t,u,i,o=!1){return i$1.buffer(r$1,r(t),t,u,i,o)}function S(t,u,i,o,c,f){return i$1.geodesicBuffer(r$1,r(t),t,u,i,o,c,f)}function j(t,u,i=!0){return i$1.nearestCoordinate(r$1,r(t),t,u,i)}function J(t,u){return i$1.nearestVertex(r$1,r(t),t,u)}function N(t,u,i,o){return i$1.nearestVertices(r$1,r(t),t,u,i,o)}function O(n){return "xmin"in n?"center"in n?n.center:null:"x"in n?n:"extent"in n?n.extent.center:null}function V(e,r,t){var u;if(null==e)throw new Error("Illegal Argument Exception");const i=e.spatialReference;if(null==(t=null!=(u=t)?u:O(e)))throw new Error("Illegal Argument Exception");const o=e.constructor.fromJSON(i$1.rotate(e,r,t));return o.spatialReference=i,o}function z(e,r){var t;if(null==e)throw new Error("Illegal Argument Exception");const u=e.spatialReference;if(null==(r=null!=(t=r)?t:O(e)))throw new Error("Illegal Argument Exception");const i=e.constructor.fromJSON(i$1.flipHorizontal(e,r));return i.spatialReference=u,i}function B(e,r){var t;if(null==e)throw new Error("Illegal Argument Exception");const u=e.spatialReference;if(null==(r=null!=(t=r)?t:O(e)))throw new Error("Illegal Argument Exception");const i=e.constructor.fromJSON(i$1.flipVertical(e,r));return i.spatialReference=u,i}function D(t,u,i,o){return i$1.generalize(r$1,r(t),t,u,i,o)}function H(t,u,i){return i$1.densify(r$1,r(t),t,u,i)}function L(t,u,i,o=0){return i$1.geodesicDensify(r$1,r(t),t,u,i,o)}function b(t,u){return i$1.planarArea(r$1,r(t),t,u)}function k(t,u){return i$1.planarLength(r$1,r(t),t,u)}function q(t,u,i){return i$1.geodesicArea(r$1,r(t),t,u,i)}function C(t,u,i){return i$1.geodesicLength(r$1,r(t),t,u,i)}

export { v as buffer, u as clip, o as contains, E as convexHull, c as crosses, i as cut, H as densify, h as difference, g as disjoint, f as distance, l as equals, t as extendedSpatialReferenceInfo, z as flipHorizontal, B as flipVertical, D as generalize, q as geodesicArea, S as geodesicBuffer, L as geodesicDensify, C as geodesicLength, y as intersect, a as intersects, x as isSimple, j as nearestCoordinate, J as nearestVertex, N as nearestVertices, I as offset, m as overlaps, b as planarArea, k as planarLength, d as relate, V as rotate, w as simplify, A as symmetricDifference, s as touches, R as union, p as within };
