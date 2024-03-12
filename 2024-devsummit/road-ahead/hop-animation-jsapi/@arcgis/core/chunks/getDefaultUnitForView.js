/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as t}from"./unitUtils.js";import r from"../portal/Portal.js";function e(e){const n="metric";if(null==e)return n;const i=e.map,s=(i&&"portalItem"in i?i.portalItem?.portal:null)??r.getDefault();switch(s.user?.units??s.units){case n:return n;case"english":return"imperial"}return t(e.spatialReference)??n}export{e as g};
