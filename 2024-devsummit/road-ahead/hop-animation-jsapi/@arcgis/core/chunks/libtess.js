/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{g as t}from"./assets.js";import{h as s}from"../core/lang.js";let a=null,e=null;async function i(){return a||(a=async function(){const a=s("esri-csp-restrictions")?await import("./libtess-asm.js").then((t=>t.l)):await import("./libtess2.js").then((t=>t.l));e=await a.default({locateFile:s=>t(`esri/core/libs/libtess/${s}`)})}()),a}function n(t,s){const a=Math.max(t.length,128e3);return e.triangulate(t,s,a)}export{i as l,n as t};
