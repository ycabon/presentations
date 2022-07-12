import { jz as n$1, k$ as S, iu as b, lU as p } from './_virtual_index-64b818a8.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
async function n(n,s,m){const p=n$1(n);return S(p,b.from(s),{...m}).then((o=>o.data.count))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
async function s(s,e,m){const n=n$1(s);return p(n,b.from(e),{...m}).then((o=>o.data.objectIds))}

export { n, s };
