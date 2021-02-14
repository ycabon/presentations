import { c6 as z, C as u, c3 as K } from './_virtual:index-1982596a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function a(t,i,a,o=new z){let s;if("2d"===a.type)s=i*a.resolution;else if("3d"===a.type){const r=a.overlayPixelSizeInMapUnits(t),o=a.basemapSpatialReference;s=u(o)&&!o.equals(a.spatialReference)?K(o)/K(a.spatialReference):i*r;}const m=t.x-s,p=t.y-s,c=t.x+s,l=t.y+s,{spatialReference:f}=a;return o.xmin=Math.min(m,c),o.ymin=Math.min(p,l),o.xmax=Math.max(m,c),o.ymax=Math.max(p,l),o.spatialReference=f,o}new z;

export { a };
