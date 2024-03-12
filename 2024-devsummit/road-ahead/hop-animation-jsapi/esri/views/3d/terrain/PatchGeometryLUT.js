// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","./TerrainConst"],function(e,c){class h{constructor(){this.sinLonLUT=Array(c.maxPatchTesselation+1);this.cosLonLUT=Array(c.maxPatchTesselation+1);this.sinLatLUT=Array(c.maxPatchTesselation+1);this.cosLatLUT=Array(c.maxPatchTesselation+1)}update(f,d,k){const l=d[0];d=d[2];for(let a=0;a<=f;a++){var b=a/f;const g=l*(1-b)+d*b;this.sinLonLUT[a]=Math.sin(g);this.cosLonLUT[a]=Math.cos(g);b=k(b);this.sinLatLUT[a]=Math.sin(b);this.cosLatLUT[a]=Math.cos(b)}}}e.PatchGeometryLUT=h;Object.defineProperty(e,
Symbol.toStringTag,{value:"Module"})});