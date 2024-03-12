/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{h as e}from"../core/lang.js";import{T as t}from"./basicInterfaces.js";class r{constructor(e){this.data=e,this.type="encoded-mesh-texture",this.encoding=t.KTX2_ENCODING}}function n(e){return"encoded-mesh-texture"===e?.type}async function o(e){const t=new Blob([e]),r=await t.text();return JSON.parse(r)}async function s(n,o){if(o===t.KTX2_ENCODING)return new r(n);const s=new Blob([n],{type:o}),a=URL.createObjectURL(s),c=new Image;if(e("esri-iPhone"))return new Promise(((e,t)=>{const r=()=>{o(),e(c)},n=e=>{o(),t(e)},o=()=>{URL.revokeObjectURL(a),c.removeEventListener("load",r),c.removeEventListener("error",n)};c.addEventListener("load",r),c.addEventListener("error",n),c.src=a}));try{c.src=a,await c.decode()}catch(e){console.warn("Failed decoding HTMLImageElement")}return URL.revokeObjectURL(a),c}export{r as E,s as a,n as i,o as j};
