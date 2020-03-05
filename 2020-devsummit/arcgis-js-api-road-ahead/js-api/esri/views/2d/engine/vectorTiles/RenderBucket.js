// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/tsSupport/extendsHelper"],function(c,d,f){Object.defineProperty(d,"__esModule",{value:!0});c=function(){return function(b){this.type=b}}();d.RenderBucket=c;var e=function(b){function a(){var a=b.call(this,2)||this;a.triangleElementStart=0;a.triangleElementCount=0;return a}f(a,b);a.prototype.hasData=function(){return 0<this.triangleElementCount};a.prototype.triangleCount=function(){return this.triangleElementCount/3};return a}(c);d.LineRenderBucket=e;e=
function(b){function a(){var a=b.call(this,1)||this;a.triangleElementStart=0;a.triangleElementCount=0;a.outlineElementStart=0;a.outlineElementCount=0;return a}f(a,b);a.prototype.hasData=function(){return 0<this.triangleElementCount||0<this.outlineElementCount};a.prototype.triangleCount=function(){return(this.triangleElementCount+this.outlineElementCount)/3};return a}(c);d.FillRenderBucket=e;e=function(b){function a(){var a=b.call(this,3)||this;a.iconPerPageElementsMap=new Map;a.glyphPerPageElementsMap=
new Map;a.isSDF=!1;return a}f(a,b);a.prototype.hasData=function(){return 0<this.iconPerPageElementsMap.size||0<this.glyphPerPageElementsMap.size};a.prototype.triangleCount=function(){var a=0;this.iconPerPageElementsMap.forEach(function(b){a+=b[1]});this.glyphPerPageElementsMap.forEach(function(b){a+=b[1]});return a/3};return a}(c);d.SymbolRenderBucket=e;e=function(b){function a(){var a=b.call(this,4)||this;a.triangleElementStart=0;a.triangleElementCount=0;return a}f(a,b);a.prototype.hasData=function(){return 0<
this.triangleElementCount};a.prototype.triangleCount=function(){return this.triangleElementCount/3};return a}(c);d.CircleRenderBucket=e;c=function(b){function a(){return b.call(this,0)||this}f(a,b);a.prototype.hasData=function(){return!0};a.prototype.triangleCount=function(){return 2};return a}(c);d.BackgroundRenderBucket=c});