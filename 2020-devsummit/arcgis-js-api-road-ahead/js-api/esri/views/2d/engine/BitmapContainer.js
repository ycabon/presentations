// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/extendsHelper ../../../core/tsSupport/decorateHelper ../engine ./webgl/WGLContainer".split(" "),function(b,c,e,h,f,g){Object.defineProperty(c,"__esModule",{value:!0});b=function(d){function a(){return null!==d&&d.apply(this,arguments)||this}e(a,d);a.prototype.prepareRenderPasses=function(a){var b=this,c=a.registerRenderPass({name:"bitmap",brushes:[f.brushes.Bitmap],target:function(){return b.children}});return d.prototype.prepareRenderPasses.call(this,
a).concat([c])};return a}(g.default);c.BitmapContainer=b});