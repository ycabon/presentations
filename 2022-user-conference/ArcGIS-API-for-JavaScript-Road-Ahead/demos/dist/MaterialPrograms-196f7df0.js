import { n } from './WGLContainer-be6ebd59.js';
import { n as n$1 } from './programUtils-24cf67f4.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const e=r=>{let t="";t+=r[0].toUpperCase();for(let e=1;e<r.length;e++){const s=r[e];s===s.toUpperCase()?(t+="_",t+=s):t+=s.toUpperCase();}return t},s=r=>{const s={};for(const t in r){s[e(t)]=r[t];}return n$1(s)},o=(t,e,o,n$1)=>{const a=t+t.substring(t.lastIndexOf("/")),p=e+e.substring(e.lastIndexOf("/")),f=s(n$1);return {attributes:o,shaders:{vertexShader:f+n(`${a}.vert`),fragmentShader:f+n(`${p}.frag`)}}};

export { o };
