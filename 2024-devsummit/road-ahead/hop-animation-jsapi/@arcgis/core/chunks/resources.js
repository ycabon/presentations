/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{throwIfAborted as s}from"../core/promiseUtils.js";import{r as a}from"./requestImageUtils.js";class t{constructor(){this._candidateTiles=[]}schedule(s){this._candidateTiles.includes(s)||this._candidateTiles.push(s)}reshuffle(s){const a=[];for(const t of this._candidateTiles)s>0?(t.reshuffle(),s--):a.push(t);this._candidateTiles=a}}async function i(t){const i=import("./mask-svg.js"),e=import("./overlay-svg.js"),r=a((await i).default,{signal:t}),l=a((await e).default,{signal:t}),o={mask:await r,overlay:await l};return s(t),o}export{t as T,i as l};
