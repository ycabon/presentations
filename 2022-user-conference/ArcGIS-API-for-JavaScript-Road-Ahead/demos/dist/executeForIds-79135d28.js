import { a as f, Z as S, x, _ as p } from './_virtual_index-1ea2035a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
async function n(n,s,m){const p=f(n);return S(p,x.from(s),{...m}).then((o=>o.data.count))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
async function s(s,e,m){const n=f(s);return p(n,x.from(e),{...m}).then((o=>o.data.objectIds))}

export { n, s };
