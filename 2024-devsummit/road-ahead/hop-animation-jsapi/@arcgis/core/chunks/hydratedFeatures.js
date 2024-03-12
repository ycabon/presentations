/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import"../geometry.js";import e from"../Graphic.js";import{clone as t,a as n,b as a}from"../core/lang.js";import{fromJSON as r}from"../geometry/support/jsonUtils.js";import{m as s}from"./dehydratedPoint.js";import i from"../geometry/SpatialReference.js";function o(e){return"declaredClass"in e}function m(e){return"declaredClass"in e}function l(n,a){return n?function(e){return"declaredClass"in e}(n)?n:new e({layer:a,sourceLayer:a,visible:n.visible,symbol:t(n.symbol),attributes:t(n.attributes),geometry:c(n.geometry)}):null}function c(e){return null==e?null:o(e)?e:r(function(e){const{wkid:t,wkt:n,wkt2:a,latestWkid:r}=e.spatialReference,s={wkid:t,wkt:n,wkt2:a,latestWkid:r};switch(e.type){case"point":{const{x:t,y:n,z:a,m:r}=e;return{x:t,y:n,z:a,m:r,spatialReference:s}}case"polygon":{const{rings:t,hasZ:n,hasM:a}=e;return{rings:u(t),hasZ:n,hasM:a,spatialReference:s}}case"polyline":{const{paths:t,hasZ:n,hasM:a}=e;return{paths:u(t),hasZ:n,hasM:a,spatialReference:s}}case"extent":{const{xmin:t,xmax:n,ymin:a,ymax:r,zmin:i,zmax:o,mmin:m,mmax:l,hasZ:c,hasM:u}=e;return{xmin:t,xmax:n,ymin:a,ymax:r,zmin:i,zmax:o,mmin:m,mmax:l,hasZ:c,hasM:u,spatialReference:s}}case"multipoint":{const{points:t,hasZ:n,hasM:a}=e;return{points:h(t)?f(t):t,hasZ:n,hasM:a,spatialReference:s}}default:return}}(e))}function u(e){return function(e){for(const t of e)if(0!==t.length)return h(t);return!1}(e)?e.map((e=>f(e))):e}function f(e){return e.map((e=>Array.from(e)))}function h(e){return e.length>0&&(n(e[0])||a(e[0]))}function p(e,t){if(!e)return null;let n;if(m(e)){if(null==t)return e.clone();if(m(t))return t.copy(e)}return null!=t?(n=t,n.x=e.x,n.y=e.y,n.spatialReference=e.spatialReference,e.hasZ?(n.z=e.z,n.hasZ=e.hasZ):(n.z=void 0,n.hasZ=!1),e.hasM?(n.m=e.m,n.hasM=!0):(n.m=void 0,n.hasM=!1)):(n=s(e.x,e.y,e.z,e.spatialReference),e.hasM&&(n.m=e.m,n.hasM=!0)),n}function y(e){const{wkid:t,wkt:n,wkt2:a,latestWkid:r}=e,s={wkid:t,wkt:n,wkt2:a,latestWkid:r};return i.fromJSON(s)}export{y as a,c as b,p as c,l as h,o as i};
