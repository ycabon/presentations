/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import"../geometry.js";import{c as e}from"./scaleUtils.js";import t from"../geometry/Extent.js";function n(e){switch(e?.type){case"point":return e;case"extent":return e.center;case"polygon":return e.centroid;case"multipoint":case"polyline":return e.extent?.center;default:return null}}async function r(e,t){if(e.hasZ||"2d"===t.type)return e;const n=t.map?.ground;if(!n?.layers.length)return e;const{geometry:r}=await n.queryElevation(e,{cache:t.basemapTerrain?.elevationQueryCache});return r}function a(e,t,n){return s(e.center,t,n)}function c(e,t,n){switch(e?.type){case"extent":return e;case"multipoint":case"polygon":case"polyline":return e.extent;case"point":return s(e,t,n);default:return null}}function s(n,r,a){const c=n.hasZ?n.z:void 0;if(r?.map)return(null!=a?e(r,a):r.extent).clone().centerAt(n).set({zmax:c,zmin:c});const{x:s,y:i,spatialReference:o}=n;return new t({xmin:s-.25,ymin:i-.25,xmax:s+.25,ymax:i+.25,spatialReference:o,zmin:c,zmax:c})}export{r as a,c,n as g,a as s};
