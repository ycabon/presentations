import { r, t, s as s$1, d6 as X, n as nt } from './_virtual_index-4b72c57d.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function i(e){const n=m(e);return r(n)?n.toDataURL():""}async function o(t$1){const r=m(t$1);if(t(r))throw new s$1("imageToArrayBuffer","Unsupported image type");const a=await c(t$1),i=await new Promise((e=>r.toBlob(e,a)));if(!i)throw new s$1("imageToArrayBuffer","Failed to encode image");return {data:await i.arrayBuffer(),type:a}}async function c(e){if(!(e instanceof HTMLImageElement))return "image/png";const t=e.src;if(X(t)){const{mediaType:e}=nt(t);return "image/jpeg"===e?e:"image/png"}return /\.png$/i.test(t)?"image/png":/\.(jpg|jpeg)$/i.test(t)?"image/jpeg":"image/png"}function m(e){if(e instanceof HTMLCanvasElement)return e;if(e instanceof HTMLVideoElement)return null;const t=document.createElement("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");return e instanceof HTMLImageElement?n.drawImage(e,0,0,e.width,e.height):e instanceof ImageData&&n.putImageData(e,0,0),t}function s(e){const t=[],n=new Uint8Array(e);for(let r=0;r<n.length;r++)t.push(String.fromCharCode(n[r]));return "data:application/octet-stream;base64,"+btoa(t.join(""))}function g(e){if(e.byteLength<8)return !1;const t=new Uint8Array(e);return 137===t[0]&&80===t[1]&&78===t[2]&&71===t[3]&&13===t[4]&&10===t[5]&&26===t[6]&&10===t[7]}

export { g, i, m, o, s };
