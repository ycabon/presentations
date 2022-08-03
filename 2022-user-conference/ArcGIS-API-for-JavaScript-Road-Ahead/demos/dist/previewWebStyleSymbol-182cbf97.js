import { h as L, aF as u, u7 as t } from './_virtual_index-9b831d4a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function n(e,i,n){const o=e.thumbnail&&e.thumbnail.url;return o?L(o,{responseType:"image"}).then((t=>{const e=h(t.data,n);return n&&n.node?(n.node.appendChild(e),n.node):e})):e.fetchSymbol().then((t=>i(t,n)))}function h(t$1,n){const h=!/\\.svg$/i.test(t$1.src)&&n&&n.disableUpsampling,o=Math.max(t$1.width,t$1.height);let r=n&&null!=n.maxSize?u(n.maxSize):t.maxSize;h&&(r=Math.min(o,r));const s="number"==typeof n?.size?n?.size:null,m=Math.min(r,null!=s?u(s):o);if(m!==o){const e=0!==t$1.width&&0!==t$1.height?t$1.width/t$1.height:1;e>=1?(t$1.width=m,t$1.height=m/e):(t$1.width=m*e,t$1.height=m);}return t$1}

export { n as previewWebStyleSymbol };
