import { d9 as c, f, E as s, m as r, a8 as j, n as j$1, dd as c$1, de as d$1, df as c$2, dg as a, po as Ot, db as b, dc as p, uz as p$1, op as c$3, uA as p$2, uB as a$1, da as w } from './_virtual_index-1ea2035a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function h(t,e,r,n){return t.name?t.styleName&&"Esri2DPointSymbolsStyle"===t.styleName?U(t,e,n):c(t,e,n).then((o=>d(f(o),t.name,e,r,n))):Promise.reject(new s("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference"))}function d(l,f,g,h,d){const U=l.data,N=g&&r(g.portal)?g.portal:j.getDefault(),w={portal:N,url:j$1(l.baseUrl),origin:"portal-item"},S=U.items.find((t=>t.name===f));if(!S){const t=`The symbol name '${f}' could not be found`;return Promise.reject(new s("symbolstyleutils:symbol-name-not-found",t,{symbolName:f}))}let D=c$1(d$1(S,h),w),O=S.thumbnail?.href??null;const P=S.thumbnail&&S.thumbnail.imageData;c$2()&&(D=a(D)??"",O=a(O));const E={portal:N,url:j$1(Ot(D)),origin:"portal-item"};return b(D,d).then((e=>{const r="cimRef"===h?p(e.data):e.data,o=p$1(r,E);if(o&&c$3(o)){if(O){const t=c$1(O,w);o.thumbnail=new p$2({url:t});}else P&&(o.thumbnail=new p$2({url:`data:image/png;base64,${P}`}));l.styleUrl?o.styleOrigin=new a$1({portal:g.portal,styleUrl:l.styleUrl,name:f}):l.styleName&&(o.styleOrigin=new a$1({portal:g.portal,styleName:l.styleName,name:f}));}return o}))}function U(t,e,r$1){const o=w.replace(/\{SymbolName\}/gi,t.name),l=r(e.portal)?e.portal:j.getDefault();return b(o,r$1).then((t=>{const e=p(t.data);return p$1(e,{portal:l,url:j$1(Ot(o)),origin:"portal-item"})}))}

export { d as fetchSymbolFromStyle, h as resolveWebStyleSymbol };
