/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function o(n,c){if(n&&c)for(const i of n.children)if(i.localName in c){const n=c[i.localName];if("function"==typeof n){const c=n(i);c&&o(i,c)}else o(i,n)}}function*n(o,c){for(const i of o.children)if(i.localName in c){const o=c[i.localName];"function"==typeof o?yield o(i):yield*n(i,o)}}export{n as i,o as v};
