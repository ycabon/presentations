/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{i}from"./multiOriginJSONSupportUtils.js";function r(r){r?.writtenProperties&&r.writtenProperties.forEach((({target:r,propName:t,newOrigin:e})=>{i(r)&&e&&r.originOf(t)!==e&&r.updateOrigin(t,e)}))}export{r as u};
