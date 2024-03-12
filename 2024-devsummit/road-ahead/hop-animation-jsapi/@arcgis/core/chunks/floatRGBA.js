/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{c as t}from"./mathUtils.js";function o(o,r,n=0){const f=t(o,0,e);for(let t=0;t<4;t++)r[n+t]=Math.floor(256*((l=f*a[t])-Math.floor(l)));var l}function r(t,o=0){let r=0;for(let a=0;a<4;a++)r+=t[o+a]*n[a];return r}const a=[1,256,65536,16777216],n=[1/256,1/65536,1/16777216,1/4294967296],e=r(new Uint8ClampedArray([255,255,255,255]));export{o as p,r as u};
