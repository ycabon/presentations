// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(e,f){Object.defineProperty(f,"__esModule",{value:!0});e=function(){function d(a,c,b){this.pixelBlock=a;this.extent=c;this.originalPixelBlock=b}Object.defineProperty(d.prototype,"width",{get:function(){return this.pixelBlock?this.pixelBlock.width:0},enumerable:!0,configurable:!0});Object.defineProperty(d.prototype,"height",{get:function(){return this.pixelBlock?this.pixelBlock.height:0},enumerable:!0,configurable:!0});d.prototype.render=function(a){var c=this.pixelBlock;
if(c){var b=this.filter({pixelBlock:c}),c=b.pixelBlock.getAsRGBA(),b=a.createImageData(b.pixelBlock.width,b.pixelBlock.height);b.data.set(c);a.putImageData(b,0,0)}};d.prototype.getRenderedRasterPixels=function(){var a=this.filter({pixelBlock:this.pixelBlock});return{width:a.pixelBlock.width,height:a.pixelBlock.height,renderedRasterPixels:new Uint8Array(a.pixelBlock.getAsRGBA().buffer)}};return d}();f.default=e});