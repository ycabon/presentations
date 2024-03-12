/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{P as e,I as u}from"./InterleavedLayout.js";function r(u,r){return r.push(u.buffer),{buffer:u.buffer,layout:new e(u.layout)}}function t(e){return new u(e.layout).createView(e.buffer)}export{r as p,t as u};
