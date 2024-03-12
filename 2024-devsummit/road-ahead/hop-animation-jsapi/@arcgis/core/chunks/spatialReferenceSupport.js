/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{a6 as i}from"./unitUtils.js";import{V as o}from"./ViewingMode.js";function r(r,s){return null!=r&&(null==s||(s===o.Local?!r.isGeographic||r.isWGS84||r.wkid===i.CGCS2000:r.isWebMercator||r.isWGS84||r.wkid===i.CGCS2000||r.wkid===i.GCSMARS2000||r.wkid===i.GCSMARS2000_SPHERE||r.wkid===i.GCSMOON2000))}export{r as i};
