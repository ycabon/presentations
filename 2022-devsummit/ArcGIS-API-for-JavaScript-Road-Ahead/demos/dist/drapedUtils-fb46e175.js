import { bz as M, r, bS as G } from './_virtual_index-2683c931.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function a(t,i,a,o=new M){let s;if("2d"===a.type)s=i*a.resolution;else if("3d"===a.type){const r$1=a.overlayPixelSizeInMapUnits(t),o=a.basemapSpatialReference;s=r(o)&&!o.equals(a.spatialReference)?G(o)/G(a.spatialReference):i*r$1;}const m=t.x-s,p=t.y-s,c=t.x+s,l=t.y+s,{spatialReference:f}=a;return o.xmin=Math.min(m,c),o.ymin=Math.min(p,l),o.xmax=Math.max(m,c),o.ymax=Math.max(p,l),o.spatialReference=f,o}new M;

export { a };
