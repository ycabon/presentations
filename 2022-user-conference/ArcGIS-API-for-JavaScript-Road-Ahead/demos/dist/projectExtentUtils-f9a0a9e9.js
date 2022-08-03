import { r, t, k4 as M, k5 as a } from './_virtual_index-9b831d4a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function l(l){const s=l.view.spatialReference,i=l.layer.fullExtent,n=r(i)&&i.spatialReference;if(t(i)||!n)return Promise.resolve(null);if(n.equals(s))return Promise.resolve(i.clone());const a$1=M(i,s);return r(a$1)?Promise.resolve(a$1):l.view.state.isLocal?a(i,s,l.layer.portalItem).then((e=>!l.destroyed&&e?e:void 0)).catch((()=>null)):Promise.resolve(null)}

export { l };
