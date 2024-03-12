/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{clone as e}from"../core/lang.js";import{m as t}from"./utils.js";function r(t){let r=t.constructor.__accessorMetadata__;const o=Object.prototype.hasOwnProperty.call(t.constructor,"__accessorMetadata__");if(r){if(!o){r=Object.create(r);for(const t in r)r[t]=e(r[t]);Object.defineProperty(t.constructor,"__accessorMetadata__",{value:r,enumerable:!1,configurable:!0,writable:!0})}}else r={},Object.defineProperty(t.constructor,"__accessorMetadata__",{value:r,enumerable:!1,configurable:!0,writable:!0});return t.constructor.__accessorMetadata__}function o(e,t){const o=r(e);let a=o[t];return a||(a=o[t]={}),a}function a(e,r){return t(e,r,n)}const c=/^(?:[^.]+\.)?(?:value|type|(?:json\.type|json\.origins\.[^.]\.type))$/;function n(e){return c.test(e)?"replace":"merge"}export{r as a,o as g,a as m};
