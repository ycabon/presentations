// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/assignHelper ../../../../core/tsSupport/extendsHelper ../../../../core/tsSupport/generatorHelper ../../../../core/tsSupport/awaiterHelper ../../engine/FeatureContainer".split(" "),function(e,f,l,h,m,n,k){Object.defineProperty(f,"__esModule",{value:!0});e=function(c){function a(){return null!==c&&c.apply(this,arguments)||this}h(a,c);Object.defineProperty(a.prototype,"hasLabels",{get:function(){return!1},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,
"labelsVisible",{get:function(){return!1},enumerable:!0,configurable:!0});a.prototype._renderGraphics=function(g,b){for(var a=0,c=this.children;a<c.length;a++){var d=c[a];d.isReady&&d.hasData&&(d.commitChanges(),g.context.setStencilFunction(514,d.stencilRef,255),d._displayList.replay(g,d,b))}};a.prototype.renderChildren=function(a){var b=a.painter;this.children.some(function(a){return a.hasData})&&(c.prototype.renderChildren.call(this,a),this._renderGraphics(a),b=b.effects.highlight,b.bind(a),this._renderGraphics(a,
b.defines),b.draw(a),b.unbind())};return a}(k.FeatureContainer);f.default=e});