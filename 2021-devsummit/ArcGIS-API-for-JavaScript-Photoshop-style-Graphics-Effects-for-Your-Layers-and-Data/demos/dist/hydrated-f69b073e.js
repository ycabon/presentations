import { ao as w, b0 as x, cZ as f, c_ as u, c6 as z } from './_virtual:index-98fd932b.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const r={convertToGEGeometry:function(e,n){if(null==n)return null;let t="cache"in n?n.cache._geVersion:void 0;null==t&&(t=e.convertJSONToGeometry(n),"cache"in n&&(n.cache._geVersion=t));return t},exportPoint:function(n,t,o){const i=n.hasZ(t),r=n.hasM(t),s=new w({x:n.getPointX(t),y:n.getPointY(t),spatialReference:o});i&&(s.z=n.getPointZ(t));r&&(s.m=n.getPointM(t));return s.cache._geVersion=t,s},exportPolygon:function(e,n,t){const i=new x({rings:e.exportPaths(n),hasZ:e.hasZ(n),hasM:e.hasM(n),spatialReference:t});return i.cache._geVersion=n,i},exportPolyline:function(e,n,t){const o=new f({paths:e.exportPaths(n),hasZ:e.hasZ(n),hasM:e.hasM(n),spatialReference:t});return o.cache._geVersion=n,o},exportMultipoint:function(e,n,o){const i=new u({hasZ:e.hasZ(n),hasM:e.hasM(n),points:e.exportPoints(n),spatialReference:o});return i.cache._geVersion=n,i},exportExtent:function(e,t,o){const i=e.hasZ(t),r=e.hasM(t),s=new z({xmin:e.getXMin(t),ymin:e.getYMin(t),xmax:e.getXMax(t),ymax:e.getYMax(t),spatialReference:o});if(i){const n=e.getZExtent(t);s.zmin=n.vmin,s.zmax=n.vmax;}if(r){const n=e.getMExtent(t);s.mmin=n.vmin,s.mmax=n.vmax;}return s.cache._geVersion=t,s}};

export { r as hydratedAdapter };
