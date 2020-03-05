// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../core/tsSupport/decorateHelper ../../../../../core/tsSupport/extendsHelper ../../../../../core/tsSupport/generatorHelper ../../../../../core/tsSupport/awaiterHelper ../../../../../core/Handles ../../../../../core/handleUtils ../../../../../core/has ../../../../../core/maybe ./config ./Manipulation ./MoveXYAxisManipulation ./MoveXYDiscManipulation ./MoveZManipulation".split(" "),function(d,g,x,p,y,z,q,h,r,k,l,t,u,v,w){Object.defineProperty(g,"__esModule",{value:!0});
d=function(d){function b(a){var c=d.call(this)||this;c._handles=new q;c._angleDeferred=null;c._interactive=!0;var f=a.tool,b=a.view,e=a.snapToScene,m=a.radius;c._view=b;c.xyManipulation=new v.MoveXYDiscManipulation({tool:f,view:b,snapToScene:e,radius:m});c.xyAxisManipulation=new u.MoveXYAxisManipulation({tool:f,view:b,radius:m});c.zManipulation=new w.MoveZManipulation({tool:f,view:b});c.xyManipulation.available=a.xyAvailable;c.xyAxisManipulation.available=a.xyAxisAvailable;c.zManipulation.available=
a.zAvailable;c.autoHideXYAxis();c.forEachManipulator(function(a){c._handles.add(a.events.on("grab-changed",function(){return c.updateManipulatorInteractivity()}))});return c}p(b,d);b.prototype.destroy=function(){this._handles.destroy();this.xyManipulation.destroy();this.xyAxisManipulation.destroy();this.zManipulation.destroy()};b.prototype.createGraphicDragPipeline=function(a,c){return h.handlesGroup([this.xyManipulation.createGraphicDragPipeline(a,c),this.xyAxisManipulation.createGraphicDragPipeline(a,
c),this.zManipulation.createGraphicDragPipeline(a,c)])};b.prototype.createDragPipeline=function(a,c,b){return h.handlesGroup([this.xyManipulation.createDragPipeline(a,c,b),this.xyAxisManipulation.createDragPipeline(a,c,b),this.zManipulation.createDragPipeline(a,b)])};Object.defineProperty(b.prototype,"snapToScene",{set:function(a){this.xyManipulation.snapToScene=a},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"angle",{set:function(a){this._angleDeferred=null;this.xyAxisManipulation.angle=
a},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"angleDeferred",{set:function(a){this.xyAxisVisible?this.angle=a():this._angleDeferred=a},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"interactive",{set:function(a){this._interactive!==a&&(this._interactive=a,this.updateManipulatorInteractivity())},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"displayScale",{set:function(a){this.xyManipulation.displayScale=a;this.xyAxisManipulation.displayScale=
a},enumerable:!0,configurable:!0});b.prototype.forEachManipulator=function(a){this.xyManipulation.forEachManipulator(function(c){return a(c,1)});this.xyAxisManipulation.forEachManipulator(function(c){return a(c,1)});this.zManipulation.forEachManipulator(function(c){return a(c,0)})};Object.defineProperty(b.prototype,"xyAxisVisible",{get:function(){var a=this.xyManipulation.someManipulator(function(a){return a.focused})||this.xyAxisManipulation.someManipulator(function(a){return a.focused});return this._view.inputManager&&
"touch"===this._view.inputManager.latestPointerType||a},enumerable:!0,configurable:!0});b.prototype.autoHideXYAxis=function(){var a=this,c=this.xyAxisManipulation,b=this.xyManipulation;if(!r("esri-mobile")){var d=[];b.forEachManipulator(function(a){return d.push(a)});c.forEachManipulator(function(a){return d.push(a)});for(var b=function(){var b=[];a.xyAxisVisible?k.isSome(a._angleDeferred)&&(a.angle=a._angleDeferred()):c.forEachManipulator(function(a){return b.push(a.disableDisplay())});a._handles.remove(n);
a._handles.add(b,n)},e=0;e<d.length;e++)this._handles.add(d[e].events.on("focus-changed",b));this._view.inputManager&&this._handles.add(this._view.inputManager.watch("latestPointerType",b));b()}};b.prototype.updateManipulatorInteractivity=function(){var a=this,c=this.grabbing;this.forEachManipulator(function(b){b.interactive=!c&&a._interactive||b.grabbing})};b.radiusForSymbol=function(a){return(a=k.isSome(a)&&"point-3d"===a.type&&a.symbolLayers)&&0<a.length&&a.some(function(a){return"object"===a.type})?
l.DISC_RADIUS:l.DISC_RADIUS_SMALL};return b}(t.Manipulation);g.MoveManipulation=d;var n="disable-xy-axis-display"});