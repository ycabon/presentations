/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import e from"../views/3d/environment/CloudyWeather.js";import n from"../views/3d/environment/FoggyWeather.js";import r from"../views/3d/environment/RainyWeather.js";import o from"../views/3d/environment/SnowyWeather.js";import t from"../views/3d/environment/SunnyWeather.js";const s={key:"type",base:t,typeMap:{sunny:t,cloudy:e,rainy:r,snowy:o,foggy:n}},i=Object.keys(s.typeMap);function a(e,n){return!!i.includes(e)||(n.error(`"${e}" is not a valid weather type`),!1)}const y=1e4,m=1e5;export{i as a,y as b,m as c,a as v,s as w};
