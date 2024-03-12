/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{project as e}from"../geometry/support/webMercatorUtils.js";import{projectGeometry as r}from"./geometryServiceUtils.js";function l(l){const t=l.view.spatialReference,o=l.layer.fullExtent,s=null!=o&&o.spatialReference;if(null==o||!s)return Promise.resolve(null);if(s.equals(t))return Promise.resolve(o.clone());const n=e(o,t);return null!=n?Promise.resolve(n):l.view.state.isLocal?r(o,t,l.layer.portalItem).then((e=>!l.destroyed&&e?e:null)).catch((()=>null)):Promise.resolve(null)}export{l as t};
