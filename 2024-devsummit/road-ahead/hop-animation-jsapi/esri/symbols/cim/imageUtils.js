// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports"],function(d){d.getFirstFrame=function(a){const b=a.getFrame(0);if(b instanceof HTMLImageElement||b instanceof HTMLCanvasElement)return b;const c=document.createElement("canvas");c.width=a.width;c.height=a.height;a=c.getContext("2d");b instanceof ImageData?a.putImageData(b,0,0):a.drawImage(b,0,0);return c};Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});