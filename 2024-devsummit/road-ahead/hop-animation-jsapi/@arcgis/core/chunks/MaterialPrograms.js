/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{r}from"./WGLContainer.js";import{g as t}from"./programUtils.js";const e=r=>{let t="";t+=r[0].toUpperCase();for(let e=1;e<r.length;e++){const s=r[e];s===s.toUpperCase()?(t+="_",t+=s):t+=s.toUpperCase()}return t},s=(s,n,o,a)=>{const p=s+s.substring(s.lastIndexOf("/")),f=n+n.substring(n.lastIndexOf("/")),i=(r=>{const s={};for(const t in r)s[e(t)]=r[t];return t(s)})(a);return{attributes:o,shaders:{vertexShader:i+r(`${p}.vert`),fragmentShader:i+r(`${f}.frag`)}}};export{s as c};
