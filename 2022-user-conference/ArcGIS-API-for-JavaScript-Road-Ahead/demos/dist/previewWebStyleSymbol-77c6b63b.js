import { U, aF as u, wt as t } from './_virtual_index-1ea2035a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function n(e,i,n){const o=e.thumbnail&&e.thumbnail.url;return o?U(o,{responseType:"image"}).then((t=>{const e=h(t.data,n);return n&&n.node?(n.node.appendChild(e),n.node):e})):e.fetchSymbol().then((t=>t?i(t,n):null))}function h(t$1,n){const h=!/\\.svg$/i.test(t$1.src)&&n&&n.disableUpsampling,o=Math.max(t$1.width,t$1.height);let r=n&&null!=n.maxSize?u(n.maxSize):t.maxSize;h&&(r=Math.min(o,r));const s="number"==typeof n?.size?n?.size:null,l=Math.min(r,null!=s?u(s):o);if(l!==o){const e=0!==t$1.width&&0!==t$1.height?t$1.width/t$1.height:1;e>=1?(t$1.width=l,t$1.height=l/e):(t$1.width=l*e,t$1.height=l);}return t$1}

export { n as previewWebStyleSymbol };
