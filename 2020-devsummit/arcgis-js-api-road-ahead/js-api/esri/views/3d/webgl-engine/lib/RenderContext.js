// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(g,h){return function(){function a(a,b,c,d,e,f){this.camera=null;this.slot=this.pass=0;this.highlightDepthTexture=null;this.renderOccludedMask=13;this.hasOccludees=!1;this.rctx=a;this.offscreenRenderingHelper=b;this.scenelightingData=c;this.shadowMap=d;this.ssaoHelper=e;this.sliceHelper=f}a.prototype.resetRenderOccludedMask=function(){this.renderOccludedMask=13};Object.defineProperty(a.prototype,"isHighlightPass",{get:function(){return 4===this.pass},enumerable:!0,
configurable:!0});return a}()});