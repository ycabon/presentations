import { t, r, cA as c, iu as i, i_ as Rn } from './_virtual_index-9b831d4a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function n(n,a,p,s=!1){const c$1=Rn(n,a);return t(c$1)?null:(c$1.hasZ&&!s||!r(p)||(c$1.z=c(i(p,c$1),0)),c$1)}function a(o,e,r){r.warnOnce(`Failed to project analysis geometry (id: '${o.id}'), projection from spatial reference (wkid: '${e.wkid}') to view spatial reference is not supported. Projection may be possible after calling projection.load().`);}

export { a, n };
