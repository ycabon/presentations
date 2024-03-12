/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{g as t}from"./assets.js";function e(){return new Promise((t=>import("./lyr3DMain.js").then((t=>t.l)).then((({default:e})=>{const n=e({locateFile:i,onRuntimeInitialized:()=>t(n)})})))).catch((t=>{throw t}))}function n(){return new Promise((t=>import("./lyr3DWorker2.js").then((t=>t.l)).then((({default:e})=>{const n=e({locateFile:i,onRuntimeInitialized:()=>t(n)})})))).catch((t=>{throw t}))}function i(e){return t(`esri/libs/lyr3d/${e}`)}export{e as a,n as l};
