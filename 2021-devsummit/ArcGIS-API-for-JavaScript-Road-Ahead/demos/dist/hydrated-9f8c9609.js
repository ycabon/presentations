import { a3 as j, aQ as x$1, c7 as m$1, e4 as m$2, bz as M } from './_virtual_index-2683c931.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const r={convertToGEGeometry:s,exportPoint:a,exportPolygon:c,exportPolyline:h,exportMultipoint:m,exportExtent:x};function s(e,n){if(null==n)return null;let t="cache"in n?n.cache._geVersion:void 0;return null==t&&(t=e.convertJSONToGeometry(n),"cache"in n&&(n.cache._geVersion=t)),t}function a(n,t,o){const i=n.hasZ(t),r=n.hasM(t),s=new j({x:n.getPointX(t),y:n.getPointY(t),spatialReference:o});return i&&(s.z=n.getPointZ(t)),r&&(s.m=n.getPointM(t)),s.cache._geVersion=t,s}function c(e,n,t){const i=new x$1({rings:e.exportPaths(n),hasZ:e.hasZ(n),hasM:e.hasM(n),spatialReference:t});return i.cache._geVersion=n,i}function h(e,n,t){const o=new m$1({paths:e.exportPaths(n),hasZ:e.hasZ(n),hasM:e.hasM(n),spatialReference:t});return o.cache._geVersion=n,o}function m(e,n,o){const i=new m$2({hasZ:e.hasZ(n),hasM:e.hasM(n),points:e.exportPoints(n),spatialReference:o});return i.cache._geVersion=n,i}function x(e,t,o){const i=e.hasZ(t),r=e.hasM(t),s=new M({xmin:e.getXMin(t),ymin:e.getYMin(t),xmax:e.getXMax(t),ymax:e.getYMax(t),spatialReference:o});if(i){const n=e.getZExtent(t);s.zmin=n.vmin,s.zmax=n.vmax;}if(r){const n=e.getMExtent(t);s.mmin=n.vmin,s.mmax=n.vmax;}return s.cache._geVersion=t,s}

export { r as hydratedAdapter };
