/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{e as t}from"../../../chunks/ensureType.js";import{g as n}from"../../../chunks/metadata.js";import"../../lang.js";import"../../../chunks/Logger.js";import"../../../config.js";import"../../../chunks/utils.js";import"../../../chunks/handleUtils.js";const o=Object.prototype.toString;function r(n){const o="__accessorMetadata__"in n?t(n):n;return function(...t){if(t.push(o),"number"==typeof t[2])throw new Error("Using @cast has parameter decorator is not supported since 4.16");return s.apply(this,t)}}function s(t,o,r,s){n(t,o).cast=s}function e(...t){var s;if(3!==t.length||"string"!=typeof t[1])return 1===t.length&&"[object Function]"===o.call(t[0])?r(t[0]):1===t.length&&"string"==typeof t[0]?(s=t[0],(t,o)=>{n(t,s).cast=t[o]}):void 0}export{e as cast};
